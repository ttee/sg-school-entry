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
  const smathWeeks = Array.from({ length: 91 }, (_, i) => i); // 0-90

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="font-serif font-semibold text-3xl text-ink mb-2">
            Zoom lesson plans
          </h1>
          <p className="text-ink-2">
            Admin only. Parents and subscribed students do not see these.
          </p>
        </div>
        <Link
          href="/learn"
          className="text-sm text-muted hover:text-ink transition-colors"
        >
          ← Back
        </Link>
      </div>

      <div className="space-y-8">
        {/* A2 Level */}
        <div>
          <h2 className="font-serif font-semibold text-2xl text-accent mb-4">
            A2 Key (12 weeks)
          </h2>
          <div className="grid md:grid-cols-4 gap-3">
            {a2Weeks.map((week) => (
              <Link
                key={week}
                href={`/learn/plans/A2/${week}`}
                className="bg-card border border-line hover:border-accent hover:shadow-md rounded-lg p-4 transition-all"
              >
                <div className="font-serif font-semibold text-lg text-ink">
                  Week {week}
                </div>
                {week === 0 && (
                  <p className="text-xs text-accent mt-1">Full plan</p>
                )}
              </Link>
            ))}
          </div>
        </div>

        {/* B1 Level */}
        <div>
          <h2 className="font-serif font-semibold text-2xl text-accent mb-4">
            B1 Preliminary (12 weeks)
          </h2>
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

        {/* MATH Level */}
        <div>
          <h2 className="font-serif font-semibold text-2xl text-accent mb-4">
            MATH (29 weeks)
          </h2>
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

        {/* SEC Level */}
        <div>
          <h2 className="font-serif font-semibold text-2xl text-accent mb-4">
            SEC (12 weeks)
          </h2>
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
                {week === 0 && (
                  <p className="text-xs text-accent mt-1">Trial week</p>
                )}
                {week === 1 && (
                  <p className="text-xs text-accent mt-1">Week 1</p>
                )}
              </Link>
            ))}
          </div>
        </div>

        {/* SMATH Level */}
        <div>
          <h2 className="font-serif font-semibold text-2xl text-accent mb-4">
            SMATH (89 weeks)
          </h2>
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
                {week === 0 && (
                  <p className="text-xs text-accent mt-1">Trial week</p>
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 bg-warn-bg border border-warn-ink/20 rounded-xl p-5">
        <h3 className="font-serif font-semibold text-base mb-2 text-ink">
          Privacy reminder
        </h3>
        <p className="text-xs text-ink-2">
          These lesson plans are for teaching staff only and must not be shared with parents or students. Lesson plans do not contain sales talk.
        </p>
      </div>
    </div>
  );
}
