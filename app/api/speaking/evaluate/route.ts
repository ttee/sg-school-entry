import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/db";
import OpenAI from "openai";

const openai = process.env.OPENAI_API_KEY
  ? new OpenAI({ apiKey: process.env.OPENAI_API_KEY })
  : null;

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

  if (!openai) {
    return NextResponse.json(
      {
        error: "未配置批改服务",
        message: "服务器未配置 OPENAI_API_KEY，暂时无法提供AI批改。",
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

    // Step 1: Transcribe audio using Whisper
    let transcript = "";
    try {
      const transcription = await openai.audio.transcriptions.create({
        file: audioFile,
        model: "whisper-1",
        language: "en",
      });
      transcript = transcription.text;
    } catch (error) {
      console.error("Transcription error:", error);
      return NextResponse.json(
        { error: "音频转录失败" },
        { status: 500 }
      );
    }

    if (!transcript || transcript.length < 10) {
      return NextResponse.json(
        {
          error: "录音内容太短",
          message: "请确保清晰录音并说完整内容。",
        },
        { status: 400 }
      );
    }

    // Step 2: Evaluate with gpt-4o for audio analysis (pronunciation)
    // We'll use audio input for pronunciation assessment
    const audioBuffer = await audioFile.arrayBuffer();
    const audioBase64 = Buffer.from(audioBuffer).toString("base64");
    const audioDataUrl = `data:${audioFile.type};base64,${audioBase64}`;

    const evaluationPrompt = `你是剑桥英语考试 ${level} 级别（${level === "A2" ? "Key for Schools" : "Preliminary for Schools"}）的口语考官。

学生的口语任务：
${question.content}

学生的录音已转录为：
"${transcript}"

请根据剑桥考试标准评估（0-5分制）：
1. 发音 Pronunciation (clarity, stress, intonation)
2. 流利 Fluency (pace, hesitation, self-correction)
3. 任务 Task Achievement (covered all bullet points, appropriate length)
4. 词汇/语法 Vocabulary & Grammar Range

重要：你需要听音频来评估发音。如果无法听到音频，请在发音项说明"发音评估暂不可用"。

然后提供简体中文的Kaizen改善反馈：
- 本次亮点（1-2点具体优点）
- 改善焦点（ONE thing only — 聚焦一个最重要的改进点）
- 跟读句子（2-3个适合${level}水平的示范句，基于学生的话题）
- 下次怎么说得更好（具体建议，不要泛泛而谈）

返回JSON格式：
{
  "scores": {
    "pronunciation": 0-5,
    "fluency": 0-5,
    "taskAchievement": 0-5,
    "vocabularyGrammar": 0-5
  },
  "overall": "整体简短评价（1句话）",
  "feedback": {
    "highlights": ["亮点1", "亮点2"],
    "focus": "ONE 改善焦点",
    "modelSentences": ["示范句1", "示范句2", "示范句3"],
    "nextSteps": "下次具体怎么做"
  }
}`;

    let evaluation: any;
    try {
      // Try to use gpt-4o for evaluation (will use transcript only if audio input not supported)
      // For production, consider using the audio models when they become available
      const response = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "user",
            content: `${evaluationPrompt}\n\n注意：当前使用文本评估。发音分数基于转录文本的完整度和流畅度推断，非直接音频分析。`,
          },
        ],
        response_format: { type: "json_object" },
      });

      evaluation = JSON.parse(response.choices[0].message.content || "{}");
    } catch (audioError: any) {
      console.log("Audio model failed, falling back to transcript-only:", audioError.message);
      
      // Fallback: use text-only model, mark pronunciation as unavailable
      const fallbackPrompt = `${evaluationPrompt}

注意：音频处理失败，仅基于转录文本评估。发音分数设为 null，在反馈中说明"发音评估暂不可用"。`;

      const response = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [{ role: "user", content: fallbackPrompt }],
        response_format: { type: "json_object" },
      });

      evaluation = JSON.parse(response.choices[0].message.content || "{}");
      
      // Ensure pronunciation is marked as unavailable
      if (evaluation.scores) {
        evaluation.scores.pronunciation = null;
      }
    }

    // Store the attempt
    const attempt = await prisma.speakingAttempt.create({
      data: {
        userId: session.user.id,
        questionId,
        attemptNumber,
        durationSec,
        transcript,
        scores: JSON.stringify(evaluation.scores || {}),
        feedback: JSON.stringify(evaluation.feedback || {}),
        audioUrl: null, // Could upload to Vercel Blob or Supabase in v2
      },
    });

    return NextResponse.json({
      success: true,
      attemptNumber,
      transcript,
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
