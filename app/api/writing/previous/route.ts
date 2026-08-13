import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/db";

export async function GET(req: NextRequest) {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    return NextResponse.json({ error: "未授权" }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const questionId = searchParams.get("questionId");

  if (!questionId) {
    return NextResponse.json({ error: "缺少 questionId" }, { status: 400 });
  }

  try {
    const previousFeedback = await prisma.writingFeedback.findFirst({
      where: {
        userId: session.user.id,
        questionId,
      },
      orderBy: {
        createdAt: "desc",
      },
      select: {
        feedback: true,
      },
    });

    if (!previousFeedback) {
      return NextResponse.json({
        success: true,
        previousFocus: null,
      });
    }

    const feedbackData = JSON.parse(previousFeedback.feedback);
    const previousFocus = feedbackData.focus || null;

    return NextResponse.json({
      success: true,
      previousFocus,
    });
  } catch (error) {
    console.error("Get previous writing focus error:", error);
    return NextResponse.json(
      { error: "服务器内部错误" },
      { status: 500 }
    );
  }
}
