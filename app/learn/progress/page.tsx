import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/db";
import Link from "next/link";

export default async function ProgressPage() {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    return null;
  }

  const userLevel = session.user.level || "A2";

  const weeks = await prisma.week.findMany({
    where: {
      level: userLevel,
    },
    orderBy: {
      weekNumber: "asc",
    },
    include: {
      submissions: {
        where: {
          userId: session.user.id,
        },
      },
    },
  });

  return (
    <div>
      <div className="mb-6">
        <h1 className="font-serif font-semibold text-2xl md:text-3xl text-ink mb-2">
          孩子进度
        </h1>
        <p className="text-sm text-ink-2">
          查看孩子的每周作业完成情况与得分。本进度仅显示当前登录账号的学习数据。
        </p>
      </div>

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
