import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function LessonPlansIndex() {
  const session = await getServerSession(authOptions);

  if (!session?.user || session.user.role !== "admin") {
    redirect("/learn");
  }

  const a2Weeks = Array.from({ length: 12 }, (_, i) => i);
  const b1Weeks = Array.from({ length: 12 }, (_, i) => i);
  const mathWeeks = Array.from({ length: 30 }, (_, i) => i);
  const secWeeks = Array.from({ length: 12 }, (_, i) => i);
  const smathWeeks = Array.from({ length: 18 }, (_, i) => i);

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="font-serif font-semibold text-3xl text-ink mb-2">
            Zoom 教案
          </h1>
          <p className="text-ink-2">
            管理员专用 · 家长和订阅学生看不到这些内容
          </p>
        </div>
        <Link
          href="/learn"
          className="text-sm text-muted hover:text-ink transition-colors"
        >
          ← 返回
        </Link>
      </div>

      <div className="space-y-8">
        {/* A2 Level */}
        <div>
          <h2 className="font-serif font-semibold text-2xl text-accent mb-4">
            A2 Key (12 周)
          </h2>
          <div className="grid md:grid-cols-4 gap-3">
            {a2Weeks.map((week) => (
              <Link
                key={week}
                href={`/learn/plans/A2/${week}`}
                className="bg-card border border-line hover:border-accent hover:shadow-md rounded-lg p-4 transition-all"
              >
                <div className="font-serif font-semibold text-lg text-ink">
                  第 {week} 周
                </div>
                {week === 0 && (
                  <p className="text-xs text-accent mt-1">完整教案</p>
                )}
              </Link>
            ))}
          </div>
        </div>

        {/* B1 Level */}
        <div>
          <h2 className="font-serif font-semibold text-2xl text-accent mb-4">
            B1 Preliminary (12 周)
          </h2>
          <div className="grid md:grid-cols-4 gap-3">
            {b1Weeks.map((week) => (
              <Link
                key={week}
                href={`/learn/plans/B1/${week}`}
                className="bg-card border border-line hover:border-accent hover:shadow-md rounded-lg p-4 transition-all"
              >
                <div className="font-serif font-semibold text-lg text-ink">
                  第 {week} 周
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* MATH Level */}
        <div>
          <h2 className="font-serif font-semibold text-2xl text-accent mb-4">
            MATH (29 周)
          </h2>
          <div className="grid md:grid-cols-4 gap-3">
            {mathWeeks.map((week) => (
              <Link
                key={week}
                href={`/learn/plans/MATH/${week}`}
                className="bg-card border border-line hover:border-accent hover:shadow-md rounded-lg p-4 transition-all"
              >
                <div className="font-serif font-semibold text-lg text-ink">
                  第 {week} 周
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* SEC Level */}
        <div>
          <h2 className="font-serif font-semibold text-2xl text-accent mb-4">
            SEC 中学英语 (12 周)
          </h2>
          <div className="grid md:grid-cols-4 gap-3">
            {secWeeks.map((week) => (
              <Link
                key={week}
                href={`/learn/plans/SEC/${week}`}
                className="bg-card border border-line hover:border-accent hover:shadow-md rounded-lg p-4 transition-all"
              >
                <div className="font-serif font-semibold text-lg text-ink">
                  第 {week} 周
                </div>
                {week === 0 && (
                  <p className="text-xs text-accent mt-1">试学周</p>
                )}
                {week === 1 && (
                  <p className="text-xs text-accent mt-1">第 1 周</p>
                )}
              </Link>
            ))}
          </div>
        </div>

        {/* SMATH Level */}
        <div>
          <h2 className="font-serif font-semibold text-2xl text-accent mb-4">
            SMATH 中学数学 (18 周)
          </h2>
          <div className="grid md:grid-cols-4 gap-3">
            {smathWeeks.map((week) => (
              <Link
                key={week}
                href={`/learn/plans/SMATH/${week}`}
                className="bg-card border border-line hover:border-accent hover:shadow-md rounded-lg p-4 transition-all"
              >
                <div className="font-serif font-semibold text-lg text-ink">
                  第 {week} 周
                </div>
                {week === 0 && (
                  <p className="text-xs text-accent mt-1">试学周</p>
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 bg-warn-bg border border-warn-ink/20 rounded-xl p-5">
        <h3 className="font-serif font-semibold text-base mb-2 text-ink">
          隐私提醒
        </h3>
        <p className="text-xs text-ink-2">
          这些教案仅供授课教师使用，不得分享给家长或学生。教案中不包含销售话术。
        </p>
      </div>
    </div>
  );
}
