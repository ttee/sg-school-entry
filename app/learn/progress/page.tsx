import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/db";
import Link from "next/link";
import ParentCard from "@/components/ParentCard";

type Question = {
  id: string;
  type: string;
  correctAnswer: string | null;
};

type Week = {
  id: string;
  level: string;
  weekNumber: number;
  title: string;
  description: string | null;
  isSample: boolean;
  errorFocus: string | null;
  parentBrief: string | null;
  submissions: {
    id: string;
    answers: string;
    score: number | null;
    completedAt: Date | null;
    createdAt: Date;
  }[];
  questions: Question[];
};

function getCompletedActivities(answers: any, questions: Question[]): string[] {
  const completed: string[] = [];
  const typeMap: Record<string, string> = {
    reading: "阅读",
    grammar: "语法",
    writing: "写作",
    listening: "听读",
    speaking: "口语",
  };

  for (const question of questions) {
    const answer = answers[question.id];
    const hasAnswer =
      question.type === "speaking"
        ? answer === "completed"
        : answer !== undefined && answer !== null && answer !== "";

    if (hasAnswer) {
      const label = typeMap[question.type];
      if (label && !completed.includes(label)) {
        completed.push(label);
      }
    }
  }

  return completed;
}

function getMasteryLevel(
  answers: any,
  questions: Question[],
  isSubmitted: boolean
): string {
  if (!isSubmitted) {
    return "未稳";
  }

  let hasWrong = false;
  let hasWriting = false;

  for (const question of questions) {
    const answer = answers[question.id];

    if (
      question.type === "reading" ||
      question.type === "grammar" ||
      question.type === "listening"
    ) {
      if (question.correctAnswer && answer) {
        const correctAnswers = question.correctAnswer.split(",");
        for (let i = 0; i < correctAnswers.length; i++) {
          if (answer[i] !== correctAnswers[i]) {
            hasWrong = true;
            break;
          }
        }
      }
    } else if (question.type === "writing") {
      if (answer?.trim()) {
        hasWriting = true;
      }
    }
  }

  if (hasWrong) {
    return "能改";
  }

  if (hasWriting) {
    return "能用";
  }

  return "未稳";
}

export default async function ProgressPage() {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    return null;
  }

  const userLevel = session.user.level || "A2";
  const isAdmin = session.user.role === "admin";

  const weeks = await prisma.week.findMany({
    where: isAdmin
      ? {}
      : {
          level: userLevel,
        },
    orderBy: isAdmin
      ? [
          { level: "asc" },
          { weekNumber: "asc" },
        ]
      : {
          weekNumber: "asc",
        },
    include: {
      submissions: {
        where: {
          userId: session.user.id,
        },
      },
      questions: {
        select: {
          id: true,
          type: true,
          correctAnswer: true,
        },
      },
    },
  });

  const weeksWithSubmissions = weeks
    .filter((w) => w.submissions.length > 0)
    .sort((a, b) => {
      const aTime = a.submissions[0].completedAt?.getTime() || a.submissions[0].createdAt?.getTime() || 0;
      const bTime = b.submissions[0].completedAt?.getTime() || b.submissions[0].createdAt?.getTime() || 0;
      return bTime - aTime;
    });

  const latestWeek = weeksWithSubmissions.length > 0 ? weeksWithSubmissions[0] : null;
  const shouldShowParentCard = !isAdmin && latestWeek;

  let parentCardData = null;
  if (shouldShowParentCard && latestWeek) {
    const submission = latestWeek.submissions[0];
    const answers = submission.answers ? JSON.parse(submission.answers) : {};
    
    const focusText = latestWeek.parentBrief || latestWeek.title;
    const focus = focusText.length > 20 ? focusText.substring(0, 20) : focusText.substring(0, Math.max(12, focusText.length));
    
    const isMathTrack = latestWeek.level === "MATH" || latestWeek.level === "SMATH";
    const completed = getCompletedActivities(answers, latestWeek.questions);
    const mastery = getMasteryLevel(
      answers,
      latestWeek.questions,
      !!submission.completedAt
    );

    parentCardData = {
      focus,
      completed,
      mastery,
      isMathTrack,
    };
  }

  return (
    <div>
      <div className="mb-6">
        <h1 className="font-serif font-semibold text-2xl md:text-3xl text-ink mb-2">
          孩子进度
        </h1>
        <p className="text-sm text-ink-2">
          {isAdmin
            ? "管理员视图：查看所有级别的每周作业完成情况与得分。"
            : "查看孩子的每周作业完成情况与得分。本进度仅显示当前登录账号的学习数据。"}
        </p>
      </div>

      {parentCardData && (
        <div className="mb-6">
          <ParentCard
            focus={parentCardData.focus}
            completed={parentCardData.completed}
            mastery={parentCardData.mastery}
            isMathTrack={parentCardData.isMathTrack}
          />
        </div>
      )}

      {isAdmin ? (
        <div className="space-y-8">
          {["A2", "B1"].map((level) => {
            const levelWeeks = weeks.filter((w) => w.level === level);
            if (levelWeeks.length === 0) return null;

            return (
              <div key={level}>
                <h2 className="font-serif font-semibold text-xl text-accent mb-3">
                  {level} 级别
                </h2>
                <div className="space-y-3">
                  {levelWeeks.map((week) => {
                    const submission = week.submissions[0];
                    const isDone = submission?.completedAt;
                    const score = submission?.score;

                    const weekLabel = week.weekNumber === 0 || week.isSample
                      ? "试学周"
                      : `第 ${week.weekNumber} 周`;

                    return (
                      <div
                        key={week.id}
                        className="bg-card border border-line rounded-xl p-4 md:p-5"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-xs font-semibold uppercase tracking-wide text-accent">
                                {weekLabel}
                              </span>
                            </div>
                            <h3 className="font-serif font-semibold text-lg text-ink mb-1">
                              {week.title}
                            </h3>
                            {week.description && (
                              <p className="text-sm text-muted">{week.description}</p>
                            )}
                          </div>

                          <div className="flex items-center gap-4 sm:flex-col sm:items-end sm:gap-2 flex-shrink-0">
                            <div className="flex items-center gap-2">
                              {isDone ? (
                                <>
                                  <span className="text-2xl">✓</span>
                                  <span className="text-sm font-semibold text-accent">
                                    已完成
                                  </span>
                                </>
                              ) : (
                                <>
                                  <span className="text-xl text-muted">○</span>
                                  <span className="text-sm text-muted">未完成</span>
                                </>
                              )}
                            </div>

                            {isDone && score !== null && (
                              <div className="px-3 py-1.5 bg-accent/10 rounded-full">
                                <span className="text-sm font-semibold text-accent">
                                  {score} 分
                                </span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="space-y-3">
          {weeks.map((week) => {
            const submission = week.submissions[0];
            const isDone = submission?.completedAt;
            const score = submission?.score;

            const weekLabel = week.weekNumber === 0 || week.isSample
              ? "试学周"
              : `第 ${week.weekNumber} 周`;

            return (
              <div
                key={week.id}
                className="bg-card border border-line rounded-xl p-4 md:p-5"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-semibold uppercase tracking-wide text-accent">
                        {weekLabel}
                      </span>
                    </div>
                    <h2 className="font-serif font-semibold text-lg text-ink mb-1">
                      {week.title}
                    </h2>
                    {week.description && (
                      <p className="text-sm text-muted">{week.description}</p>
                    )}
                  </div>

                  <div className="flex items-center gap-4 sm:flex-col sm:items-end sm:gap-2 flex-shrink-0">
                    <div className="flex items-center gap-2">
                      {isDone ? (
                        <>
                          <span className="text-2xl">✓</span>
                          <span className="text-sm font-semibold text-accent">
                            已完成
                          </span>
                        </>
                      ) : (
                        <>
                          <span className="text-xl text-muted">○</span>
                          <span className="text-sm text-muted">未完成</span>
                        </>
                      )}
                    </div>

                    {isDone && score !== null && (
                      <div className="px-3 py-1.5 bg-accent/10 rounded-full">
                        <span className="text-sm font-semibold text-accent">
                          {score} 分
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {weeks.length === 0 && (
        <div className="bg-card border border-line rounded-xl p-8 text-center">
          <p className="text-muted">暂无作业数据</p>
        </div>
      )}

      <div className="mt-8 pt-6 border-t border-line">
        <p className="text-xs text-muted">
          本页面仅显示当前登录账号的学习进度，符合{" "}
          <Link href="/privacy" className="text-accent hover:underline">
            隐私政策
          </Link>
          。家长通过此账号查看孩子的作业完成情况。
        </p>
      </div>
    </div>
  );
}
