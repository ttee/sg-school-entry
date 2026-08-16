import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/db";
import Link from "next/link";

export default async function LearnDashboard() {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    return null;
  }

  const userLevel = session.user.level || "A2";
  const isSubscribed = session.user.subscribed;
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
    },
  });

  const completedCount = weeks.filter(
    (w) => w.submissions.length > 0 && w.submissions[0].completedAt
  ).length;

  return (
    <div>
      <div className="mb-8">
        <h1 className="font-serif font-semibold text-3xl text-ink mb-2 flex items-center gap-2">
          欢迎回来！
          {isAdmin && (
            <span className="text-xs px-2.5 py-1 bg-accent/10 text-accent rounded-full font-semibold">
              管理员
            </span>
          )}
        </h1>
        <p className="text-ink-2">
          {isAdmin ? (
            <>
              <span className="text-accent font-semibold">管理员模式</span> · 可查看所有级别 ·{" "}
              <Link href="/learn/enquiries" className="text-accent hover:underline font-semibold">
                查看报名咨询
              </Link>
              {" · "}
              <Link href="/learn/plans" className="text-accent hover:underline font-semibold">
                Zoom 教案
              </Link>
            </>
          ) : (
            <>
              级别：<strong className="text-accent font-semibold">{userLevel}</strong> ·{" "}
              {isSubscribed ? (
                <span className="text-accent font-semibold">订阅会员</span>
              ) : (
                <span className="text-warn-ink">试学模式（仅可访问试学周）</span>
              )}
            </>
          )}
        </p>
      </div>

      <div className="grid sm:grid-cols-3 gap-4 mb-8">
        <div className="bg-card border border-line rounded-xl p-5">
          <div className="text-2xl font-serif font-semibold text-accent">
            {completedCount}
          </div>
          <div className="text-sm text-muted">周已完成</div>
        </div>
        <div className="bg-card border border-line rounded-xl p-5">
          <div className="text-2xl font-serif font-semibold text-accent">
            {weeks.length}
          </div>
          <div className="text-sm text-muted">总周数</div>
        </div>
        <div className="bg-card border border-line rounded-xl p-5">
          <div className="text-2xl font-serif font-semibold text-accent">
            {completedCount > 0 ? completedCount : 0}
          </div>
          <div className="text-sm text-muted">连续周数</div>
        </div>
      </div>

      <div>
        <h2 className="font-serif font-semibold text-2xl text-ink mb-4">
          每周作业
        </h2>
        {isAdmin ? (
          <div className="space-y-8">
            {["A2", "B1", "MATH", "SEC"].map((level) => {
              const levelWeeks = weeks.filter((w) => w.level === level);
              if (levelWeeks.length === 0) return null;
              
              return (
                <div key={level}>
                  <h3 className="font-serif font-semibold text-xl text-accent mb-3">
                    {level} 级别
                  </h3>
                  <div className="space-y-3">
                    {levelWeeks.map((week) => {
                      const submission = week.submissions[0];
                      const isCompleted = submission?.completedAt;
                      const isInProgress = submission && !submission.completedAt;

                      return (
                        <div
                          key={week.id}
                          className="bg-card border border-line hover:border-accent hover:shadow-md rounded-xl p-5 transition-all"
                        >
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <h4 className="font-serif font-semibold text-lg text-ink">
                                  {week.title}
                                </h4>
                                {week.isSample && (
                                  <span className="text-xs px-2 py-0.5 bg-accent/10 text-accent rounded-full font-semibold">
                                    试学
                                  </span>
                                )}
                              </div>
                              {week.description && (
                                <p className="text-sm text-muted mb-2">
                                  {week.description}
                                </p>
                              )}
                              {isCompleted && submission.score !== null && (
                                <p className="text-sm font-semibold text-accent mt-2">
                                  得分：{submission.score} 分
                                </p>
                              )}
                            </div>

                            <div className="flex-none">
                              {isCompleted ? (
                                <div className="flex flex-col items-center">
                                  <div className="text-3xl mb-1">✓</div>
                                  <p className="text-xs text-accent font-semibold mb-2">
                                    已完成
                                  </p>
                                  <Link
                                    href={`/learn/${week.id}`}
                                    className="text-xs text-muted hover:text-ink transition-colors underline"
                                  >
                                    查看
                                  </Link>
                                </div>
                              ) : (
                                <Link
                                  href={`/learn/${week.id}`}
                                  className="inline-flex items-center justify-center px-4 py-2 bg-accent text-accent-ink text-sm font-semibold rounded-full hover:bg-accent-hover transition-colors whitespace-nowrap"
                                >
                                  {isInProgress ? "继续" : "开始"}
                                </Link>
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
              const isLocked = !isSubscribed && !week.isSample;
              const isCompleted = submission?.completedAt;
              const isInProgress = submission && !submission.completedAt;

              return (
                <div
                  key={week.id}
                  className={`bg-card border rounded-xl p-5 transition-all ${
                    isLocked
                      ? "border-line opacity-60"
                      : "border-line hover:border-accent hover:shadow-md"
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-serif font-semibold text-lg text-ink">
                          {week.title}
                        </h3>
                        {week.isSample && (
                          <span className="text-xs px-2 py-0.5 bg-accent/10 text-accent rounded-full font-semibold">
                            试学
                          </span>
                        )}
                      </div>
                      {week.description && (
                        <p className="text-sm text-muted mb-2">
                          {week.description}
                        </p>
                      )}
                      {week.dueDate && !isCompleted && !isLocked && (
                        <p className="text-xs text-muted">
                          截止：{new Date(week.dueDate).toLocaleDateString("zh-CN")}
                        </p>
                      )}
                      {isCompleted && submission.score !== null && (
                        <p className="text-sm font-semibold text-accent mt-2">
                          得分：{submission.score} 分
                        </p>
                      )}
                    </div>

                    <div className="flex-none">
                      {isLocked ? (
                        <div className="text-center">
                          <div className="text-2xl mb-1">🔒</div>
                          <p className="text-xs text-warn-ink font-semibold">
                            订阅后解锁
                          </p>
                          <Link
                            href="/#ceq-course"
                            className="text-xs text-accent hover:underline mt-1 inline-block"
                          >
                            了解订阅
                          </Link>
                        </div>
                      ) : isCompleted ? (
                        <div className="flex flex-col items-center">
                          <div className="text-3xl mb-1">✓</div>
                          <p className="text-xs text-accent font-semibold mb-2">
                            已完成
                          </p>
                          <Link
                            href={`/learn/${week.id}`}
                            className="text-xs text-muted hover:text-ink transition-colors underline"
                          >
                            查看
                          </Link>
                        </div>
                      ) : (
                        <Link
                          href={`/learn/${week.id}`}
                          className="inline-flex items-center justify-center px-4 py-2 bg-accent text-accent-ink text-sm font-semibold rounded-full hover:bg-accent-hover transition-colors whitespace-nowrap"
                        >
                          {isInProgress ? "继续" : "开始"}
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {!isSubscribed && !isAdmin && (
          <div className="mt-8 bg-warn-bg border border-warn-ink/20 rounded-xl p-6">
            <h3 className="font-serif font-semibold text-lg text-ink mb-2">
              订阅后解锁全部作业
            </h3>
            <p className="text-sm text-ink-2 mb-4">
              订阅会员可访问所有 {userLevel} 级别每周作业，自动批改选择题，跟踪学习进度。
            </p>
            <Link
              href="/#ceq-course"
              className="inline-flex items-center justify-center px-5 py-2.5 bg-accent text-accent-ink text-sm font-semibold rounded-full hover:bg-accent-hover transition-colors"
            >
              查看 CEQ 课程与订阅
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
