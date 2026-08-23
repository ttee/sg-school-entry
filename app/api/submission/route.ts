import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { canAccessWeek } from "@/lib/access";

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { weekId, answers, submit } = await req.json();

    const week = await prisma.week.findUnique({
      where: { id: weekId },
      include: {
        questions: true,
      },
    });

    if (!week) {
      return NextResponse.json({ error: "Week not found" }, { status: 404 });
    }

    const canAccess = canAccessWeek({
      role: session.user.role,
      subscribed: session.user.subscribed,
      isSample: week.isSample,
    });

    if (!canAccess) {
      return NextResponse.json({ error: "Access denied" }, { status: 403 });
    }

    let score = null;

    if (submit) {
      score = 0;

      for (const question of week.questions) {
        if (question.type === "reading" || question.type === "grammar" || question.type === "listening") {
          if (question.options && question.correctAnswer) {
            const correctAnswers = question.correctAnswer.split(",");
            const userAnswers = answers[question.id];

            if (userAnswers) {
              let correctCount = 0;
              for (let i = 0; i < correctAnswers.length; i++) {
                if (userAnswers[i] === correctAnswers[i]) {
                  correctCount++;
                }
              }
              score += (correctCount / correctAnswers.length) * question.points;
            }
          }
        } else if (question.type === "writing") {
          if (answers[question.id]?.trim()) {
            score += question.points;
          }
        } else if (question.type === "speaking") {
          if (answers[question.id] === "completed") {
            score += question.points;
          }
        }
      }

      score = Math.round(score);
    }

    const submission = await prisma.submission.upsert({
      where: {
        userId_weekId: {
          userId: session.user.id,
          weekId: weekId,
        },
      },
      update: {
        answers: JSON.stringify(answers),
        score: submit ? score : undefined,
        completedAt: submit ? new Date() : undefined,
      },
      create: {
        userId: session.user.id,
        weekId: weekId,
        answers: JSON.stringify(answers),
        score: submit ? score : null,
        completedAt: submit ? new Date() : null,
      },
    });

    return NextResponse.json({
      success: true,
      submission,
    });
  } catch (error) {
    console.error("Submission error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
