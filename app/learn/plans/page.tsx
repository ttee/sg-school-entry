import { getSession } from "@/lib/session";
import { redirect } from "next/navigation";
import Link from "next/link";
import { A2_WEEK_BRIEFS } from "@/lib/a2-week-briefs";

export default async function LessonPlansIndex() {
  const session = await getSession();

  if (!session?.user || session.user.role !== "admin") {
    redirect("/learn");
  }

  const b1Weeks = Array.from({ length: 12 }, (_, i) => i);
  const mathWeeks = Array.from({ length: 30 }, (_, i) => i);
  const secWeeks = Array.from({ length: 12 }, (_, i) => i);
  const smathWeeks = Array.from({ length: 91 }, (_, i) => i);

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="font-serif font-semibold text-3xl text-ink mb-2">
            顾问备忘 · 本周作业
          </h1>
          <p className="text-ink-2">只有顾问看。家长和学生看不到。</p>
        </div>
        <Link
          href="/learn"
          className="text-sm text-muted hover:text-ink transition-colors"
        >
          ← 返回
        </Link>
      </div>

      <div className="space-y-8">
        <div>
          <h2 className="font-serif font-semibold text-2xl text-accent mb-4">
            A2 Key（12 周）
          </h2>
          <div className="grid md:grid-cols-4 gap-3">
            {A2_WEEK_BRIEFS.map((brief) => (
              <Link
                key={brief.week}
                href={`/learn/plans/A2/${brief.week}`}
                className="bg-card border border-line hover:border-accent hover:shadow-md rounded-lg p-4 transition-all"
              >
                <div className="font-serif font-semibold text-lg text-ink">
                  A2-{brief.week}
                </div>
                <p className="text-xs text-ink-2 mt-1">{brief.title}</p>
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-serif font-semibold text-2xl text-accent mb-1">
            B1 Preliminary（12 周）
          </h2>
          <p className="text-xs text-muted mb-4">未改写</p>
          <div className="grid md:grid-cols-4 gap-3">
            {b1Weeks.map((week) => (
              <Link
                key={week}
                href={`/learn/plans/B1/${week}`}
                className="bg-card border border-line hover:border-accent hover:shadow-md rounded-lg p-4 transition-all"
              >
                <div className="font-serif font-semibold text-lg text-ink">
                  Week {week}
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-serif font-semibold text-2xl text-accent mb-1">
            MATH（29 周）
          </h2>
          <p className="text-xs text-muted mb-4">未改写</p>
          <div className="grid md:grid-cols-4 gap-3">
            {mathWeeks.map((week) => (
              <Link
                key={week}
                href={`/learn/plans/MATH/${week}`}
                className="bg-card border border-line hover:border-accent hover:shadow-md rounded-lg p-4 transition-all"
              >
                <div className="font-serif font-semibold text-lg text-ink">
                  Week {week}
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-serif font-semibold text-2xl text-accent mb-1">
            SEC（12 周）
          </h2>
          <p className="text-xs text-muted mb-4">未改写</p>
          <div className="grid md:grid-cols-4 gap-3">
            {secWeeks.map((week) => (
              <Link
                key={week}
                href={`/learn/plans/SEC/${week}`}
                className="bg-card border border-line hover:border-accent hover:shadow-md rounded-lg p-4 transition-all"
              >
                <div className="font-serif font-semibold text-lg text-ink">
                  Week {week}
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-serif font-semibold text-2xl text-accent mb-1">
            SMATH（89 周）
          </h2>
          <p className="text-xs text-muted mb-4">未改写</p>
          <div className="grid md:grid-cols-4 gap-3">
            {smathWeeks.map((week) => (
              <Link
                key={week}
                href={`/learn/plans/SMATH/${week}`}
                className="bg-card border border-line hover:border-accent hover:shadow-md rounded-lg p-4 transition-all"
              >
                <div className="font-serif font-semibold text-lg text-ink">
                  Week {week}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 bg-warn-bg border border-warn-ink/20 rounded-xl p-5">
        <p className="text-xs text-ink-2">只有顾问看。家长和学生看不到。</p>
      </div>
    </div>
  );
}
