import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_GENERATIVE_AI_API_KEY;
const genAI = apiKey ? new GoogleGenerativeAI(apiKey) : null;

// Rate limit: 8 speaking evals per user per day
const RATE_LIMIT = 8;
const RATE_WINDOW_MS = 24 * 60 * 60 * 1000; // 24 hours

async function checkRateLimit(userId: string): Promise<boolean> {
  const since = new Date(Date.now() - RATE_WINDOW_MS);
  const count = await prisma.speakingAttempt.count({
    where: {
      userId,
      createdAt: { gte: since },
    },
  });
  return count < RATE_LIMIT;
}

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    return NextResponse.json({ error: "未授权" }, { status: 401 });
  }

  if (!genAI) {
    return NextResponse.json(
      {
        error: "未配置批改服务",
        message: "服务器未配置 GEMINI_API_KEY，暂时无法提供AI批改。",
      },
      { status: 503 }
    );
  }

  // Check rate limit
  const withinLimit = await checkRateLimit(session.user.id);
  if (!withinLimit) {
    return NextResponse.json(
      {
        error: "今日评估次数已达上限",
        message: `每天最多可进行 ${RATE_LIMIT} 次口语评估。`,
      },
      { status: 429 }
    );
  }

  try {
    const formData = await req.formData();
    const audioFile = formData.get("audio") as File;
    const questionId = formData.get("questionId") as string;
    const durationSec = parseInt(formData.get("durationSec") as string);
    const level = formData.get("level") as string; // "A2" or "B1"

    if (!audioFile || !questionId) {
      return NextResponse.json(
        { error: "缺少必要参数" },
        { status: 400 }
      );
    }

    // Get question details
    const question = await prisma.question.findUnique({
      where: { id: questionId },
    });

    if (!question || question.type !== "speaking") {
      return NextResponse.json(
        { error: "问题未找到或类型错误" },
        { status: 404 }
      );
    }

    // Count existing attempts for this question
    const attemptNumber = await prisma.speakingAttempt.count({
      where: {
        userId: session.user.id,
        questionId,
      },
    }) + 1;

    // Load previous attempts for Kaizen feedback (compare errors)
    const previousAttempts = await prisma.speakingAttempt.findMany({
      where: {
        userId: session.user.id,
        questionId,
      },
      orderBy: { createdAt: "desc" },
      take: 3,
    });

    // Extract previous focus and error tags
    let previousFocus = "";
    let previousErrorTags: string[] = [];
    if (previousAttempts.length > 0) {
      const lastFeedback = JSON.parse(previousAttempts[0].feedback);
      previousFocus = lastFeedback.focus || "";
      previousErrorTags = lastFeedback.errorTags || [];
    }

    // Prepare audio for Gemini
    const audioBuffer = await audioFile.arrayBuffer();
    const audioBase64 = Buffer.from(audioBuffer).toString("base64");

    // Use Gemini Flash with audio input (try latest models with fallback)
    const modelNames = ["gemini-2.0-flash-exp", "gemini-1.5-flash"];
    let model;
    let modelUsed = "";
    
    for (const modelName of modelNames) {
      try {
        model = genAI.getGenerativeModel({ model: modelName });
        modelUsed = modelName;
        break;
      } catch (err) {
        console.log(`Model ${modelName} not available, trying next...`);
      }
    }

    if (!model) {
      return NextResponse.json(
        { error: "Gemini 模型不可用" },
        { status: 503 }
      );
    }

    const kaizenContext = previousFocus
      ? `\n\n【Kaizen 改善追踪】
上一次的改善焦点是：「${previousFocus}」
上一次的错误标签：${previousErrorTags.join(", ") || "无"}

请仔细听音频，判断学生这次是否还在犯同样的错误。如果是，请保持相同的改善焦点，并在 feedback.focus 中说明「上一次的焦点还在：${previousFocus}」。只有当学生明显改进后，才换一个新的焦点。`
      : "\n\n这是学生第一次尝试此题目。";

    const evaluationPrompt = `你是剑桥英语考试 ${level} 级别（${level === "A2" ? "Key for Schools" : "Preliminary for Schools"}）的口语考官。

学生的口语任务：
${question.content}
${kaizenContext}

请直接听这段音频进行评估（0-5分制）：
1. 发音 Pronunciation (clarity, stress, intonation) — 必须基于音频评估，如果听不到音频则设为 null
2. 流利 Fluency (pace, hesitation, self-correction)
3. 任务 Task Achievement (covered all bullet points, appropriate length)
4. 词汇/语法 Vocabulary & Grammar Range

然后提供简体中文的Kaizen改善反馈：
- 本次亮点（1-2点具体优点）
- 改善焦点（ONE thing only — 如果上次焦点还在，就保持；只有明显改进后才换新焦点）
- 跟读句子（2-3个适合${level}水平的示范句，基于学生的话题）
- 下次怎么说得更好（具体建议）
- errorTags（错误类型标签数组，例如：["articles", "tense", "pronunciation-th", "word-stress"]）

严格返回JSON格式（不要markdown代码块）：
{
  "scores": {
    "pronunciation": 0-5或null,
    "fluency": 0-5,
    "taskAchievement": 0-5,
    "vocabularyGrammar": 0-5
  },
  "overall": "整体简短评价（1句话）",
  "feedback": {
    "highlights": ["亮点1", "亮点2"],
    "focus": "ONE 改善焦点（如果是重复问题，说明「上一次的焦点还在：...」）",
    "modelSentences": ["示范句1", "示范句2"],
    "nextSteps": "下次具体怎么做",
    "errorTags": ["错误类型1", "错误类型2"]
  }
}`;

    let evaluation: any;
    try {
      const result = await model.generateContent([
        {
          inlineData: {
            mimeType: audioFile.type,
            data: audioBase64,
          },
        },
        { text: evaluationPrompt },
      ]);

      const responseText = result.response.text();
      
      // Clean up response (remove markdown code blocks if present)
      const jsonMatch = responseText.match(/\{[\s\S]*\}/);
      const jsonText = jsonMatch ? jsonMatch[0] : responseText;
      
      evaluation = JSON.parse(jsonText);
    } catch (error: any) {
      console.error("Gemini evaluation error:", error);
      return NextResponse.json(
        {
          error: "AI评估失败",
          message: error.message || "Gemini API 调用失败",
        },
        { status: 500 }
      );
    }

    // Store the attempt
    const attempt = await prisma.speakingAttempt.create({
      data: {
        userId: session.user.id,
        questionId,
        attemptNumber,
        durationSec,
        transcript: evaluation.transcript || evaluation.overall || "(Gemini audio-only evaluation)",
        scores: JSON.stringify(evaluation.scores || {}),
        feedback: JSON.stringify(evaluation.feedback || {}),
        audioUrl: null,
      },
    });

    return NextResponse.json({
      success: true,
      attemptNumber,
      transcript: evaluation.transcript || evaluation.overall || "",
      evaluation: {
        scores: evaluation.scores || {},
        overall: evaluation.overall || "",
        feedback: evaluation.feedback || {},
      },
    });
  } catch (error: any) {
    console.error("Speaking evaluation error:", error);
    return NextResponse.json(
      {
        error: "评估失败",
        message: error.message || "服务器内部错误",
      },
      { status: 500 }
    );
  }
}
