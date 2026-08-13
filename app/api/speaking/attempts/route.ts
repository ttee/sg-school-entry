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
    const attempts = await prisma.speakingAttempt.findMany({
      where: {
        userId: session.user.id,
        questionId,
      },
      orderBy: {
        attemptNumber: "asc",
      },
      select: {
        id: true,
        attemptNumber: true,
        durationSec: true,
        transcript: true,
        scores: true,
        feedback: true,
        createdAt: true,
      },
    });

    // Parse JSON strings
    const parsed = attempts.map((a) => ({
      ...a,
      scores: JSON.parse(a.scores),
      feedback: JSON.parse(a.feedback),
      createdAt: a.createdAt.toISOString(),
    }));

    return NextResponse.json({
      success: true,
      attempts: parsed,
    });
  } catch (error) {
    console.error("Get attempts error:", error);
    return NextResponse.json(
      { error: "服务器内部错误" },
      { status: 500 }
    );
  }
}
