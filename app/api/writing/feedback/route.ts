import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/db";
import OpenAI from "openai";

const openai = process.env.OPENAI_API_KEY
  ? new OpenAI({ apiKey: process.env.OPENAI_API_KEY })
  : null;

// Rate limit: 8 writing evals per user per day
const RATE_LIMIT = 8;
const RATE_WINDOW_MS = 24 * 60 * 60 * 1000; // 24 hours

async function checkRateLimit(userId: string): Promise<boolean> {
  const since = new Date(Date.now() - RATE_WINDOW_MS);
  const count = await prisma.writingFeedback.count({
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
        message: `每天最多可进行 ${RATE_LIMIT} 次写作批改。`,
      },
      { status: 429 }
    );
  }

  try {
    const { questionId, text } = await req.json();

    if (!questionId || !text) {
      return NextResponse.json(
        { error: "缺少必要参数" },
        { status: 400 }
      );
    }

    // Get question details
    const question = await prisma.question.findUnique({
      where: { id: questionId },
      include: { week: true },
    });

    if (!question || question.type !== "writing") {
      return NextResponse.json(
        { error: "问题未找到或类型错误" },
        { status: 404 }
      );
    }

    const level = question.week.level; // "A2" or "B1"
    const wordCount = text.trim().split(/\s+/).filter((w: string) => w.length > 0).length;

    // Extract target word count from content
    const wordCountMatch = question.content.match(/(\d+)-(\d+)\s*words?|(\d+)-(\d+)\s*词/i);
    const targetMin = wordCountMatch ? parseInt(wordCountMatch[1] || wordCountMatch[3]) : 50;
    const targetMax = wordCountMatch ? parseInt(wordCountMatch[2] || wordCountMatch[4]) : 120;

    const feedbackPrompt = `你是剑桥英语 ${level} 级别（${level === "A2" ? "Key for Schools" : "Preliminary for Schools"}）的写作考官。

写作任务：
${question.content}

学生的写作：
"${text}"

字数：${wordCount} 词（目标：${targetMin}-${targetMax} 词）

请提供简体中文的Kaizen改善反馈：
1. 任务完成度（是否回答了所有要求的内容点）
2. 本周语法点使用情况（根据成功标准）
3. 连接词和逻辑流畅度
4. 字数是否合适
5. ONE 改善焦点（聚焦最重要的一个改进点）
6. 示范段落（改写学生的文章，提升到更好的${level}水平，保持相同话题和长度）

不要给出假的剑桥官方分数。

返回JSON格式：
{
  "taskCompletion": "任务完成度评价",
  "grammarOfWeek": "本周语法点使用情况",
  "cohesion": "连接词和逻辑评价",
  "wordCount": {
    "actual": ${wordCount},
    "target": "${targetMin}-${targetMax}",
    "comment": "字数评价"
  },
  "focus": "ONE 改善焦点（具体、可操作）",
  "modelParagraph": "改写后的示范段落",
  "highlights": ["亮点1", "亮点2"]
}`;

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: feedbackPrompt }],
      response_format: { type: "json_object" },
    });

    const feedback = JSON.parse(response.choices[0].message.content || "{}");

    // Store the feedback
    await prisma.writingFeedback.create({
      data: {
        userId: session.user.id,
        questionId,
        text,
        feedback: JSON.stringify(feedback),
      },
    });

    return NextResponse.json({
      success: true,
      feedback,
    });
  } catch (error: any) {
    console.error("Writing feedback error:", error);
    return NextResponse.json(
      {
        error: "批改失败",
        message: error.message || "服务器内部错误",
      },
      { status: 500 }
    );
  }
}
