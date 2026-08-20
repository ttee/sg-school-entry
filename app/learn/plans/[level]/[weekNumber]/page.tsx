import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import BoardWeike from "@/components/BoardWeike";
import LessonPlanSTP from "@/components/LessonPlanSTP";
import A2WeekBriefView from "@/components/A2WeekBrief";
import { getA2WeekBrief } from "@/lib/a2-week-briefs";
import { legacyLessonPlans } from "@/lib/legacy-lesson-plans";

function MissingPlan({ level, weekNumber }: { level: string; weekNumber: string }) {
  return (
    <div>
      <div className="mb-8">
        <Link
          href="/learn/plans"
          className="text-sm text-muted hover:text-ink transition-colors mb-4 inline-block"
        >
          ← 返回备忘
        </Link>
        <h1 className="font-serif font-semibold text-3xl text-ink">没有这份备忘</h1>
      </div>
      <div className="bg-card border border-line rounded-xl p-8 text-center">
        <p className="text-muted">
          {level} · {weekNumber}
        </p>
      </div>
    </div>
  );
}

export default async function LessonPlanPage({
  params,
}: {
  params: Promise<{ level: string; weekNumber: string }>;
}) {
  const session = await getServerSession(authOptions);

  if (!session?.user || session.user.role !== "admin") {
    redirect("/learn");
  }

  const { level, weekNumber } = await params;

  if (level === "A2") {
    const week = parseInt(weekNumber, 10);
    const brief = getA2WeekBrief(week);
    if (!brief) {
      return <MissingPlan level={level} weekNumber={weekNumber} />;
    }
    return <A2WeekBriefView brief={brief} />;
  }

  const plan = legacyLessonPlans[`${level}-${weekNumber}`];
  if (!plan) {
    return <MissingPlan level={level} weekNumber={weekNumber} />;
  }

  return (
    <div>
      <div className="mb-8">
        <Link
          href="/learn/plans"
          className="text-sm text-muted hover:text-ink transition-colors mb-4 inline-block"
        >
          ← 返回备忘
        </Link>
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-sm font-semibold text-accent px-3 py-1 bg-accent/10 rounded-full">
                {level} · {weekNumber}
              </span>
              <span className="text-xs text-ink-2 px-2 py-1 bg-paper-2 border border-line rounded-full">
                未改写
              </span>
            </div>
            <h1 className="font-serif font-semibold text-3xl text-ink mb-2">
              {plan.title}
            </h1>
            {plan.fossil && (
              <p className="text-sm text-ink-2">
                <strong>High-frequency error focus: </strong>
                {plan.fossil}
              </p>
            )}
            {plan.mathExample && (
              <p className="text-sm text-ink-2">
                <strong>This week&apos;s example: </strong>
                {plan.mathExample}
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="mb-6 bg-paper-2 border border-line rounded-xl p-4">
        <p className="text-sm text-ink-2">
          未改写。B1 / MATH / SEC / SMATH 仍是旧稿。只有顾问看。
        </p>
      </div>

      <LessonPlanSTP
        level={level}
        weekNumber={parseInt(weekNumber, 10)}
        title={plan.title}
        fossil={plan.fossil}
        boardWriting={plan.boardWriting}
        mathExample={plan.mathExample}
        sections={plan.sections}
        spokenLines={plan.spokenLines}
        childPrompts={plan.childPrompts}
      />

      <BoardWeike
        level={level}
        weekNumber={parseInt(weekNumber, 10)}
        planTitle={plan.title}
        planFirstLine={
          plan.fossil ||
          plan.mathExample ||
          plan.sections[0]?.teacherNotes.split(".")[0] ||
          ""
        }
      />

      {plan.boardWriting && (
        <div className="mb-6 bg-gradient-to-br from-accent/5 to-accent/10 border border-accent/20 rounded-xl p-5">
          <h3 className="font-serif font-semibold text-base text-ink mb-2">
            Board
          </h3>
          <p className="font-mono text-lg text-accent">{plan.boardWriting}</p>
        </div>
      )}

      <div className="space-y-6 mb-8">
        {plan.sections.map((section, idx) => (
          <div key={idx} className="bg-card border border-line rounded-xl p-5">
            <div className="flex items-baseline gap-3 mb-3">
              <h3 className="font-serif font-semibold text-xl text-accent">
                {idx + 1}. {section.name}
              </h3>
              <span className="text-sm text-muted">{section.duration}</span>
            </div>
            <p className="text-sm text-ink-2 leading-relaxed whitespace-pre-line">
              {section.teacherNotes}
            </p>
          </div>
        ))}
      </div>

      {plan.spokenLines && plan.spokenLines.length > 0 && (
        <div className="mb-6 bg-paper-2 border border-line rounded-xl p-5">
          <h3 className="font-serif font-semibold text-lg text-ink mb-3">
            Spoken lines
          </h3>
          <ul className="space-y-2">
            {plan.spokenLines.map((line, idx) => (
              <li key={idx} className="text-sm text-ink flex items-start gap-2">
                <span className="text-accent font-semibold mt-0.5">{idx + 1}.</span>
                <span className="font-mono">{line}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {plan.childPrompts && plan.childPrompts.length > 0 && (
        <div className="mb-6 bg-warn-bg/30 border border-warn-ink/20 rounded-xl p-5">
          <h3 className="font-serif font-semibold text-lg text-ink mb-3">
            Child prompts
          </h3>
          <ul className="space-y-2">
            {plan.childPrompts.map((prompt, idx) => (
              <li key={idx} className="text-sm text-ink flex items-start gap-2">
                <span className="text-accent font-semibold mt-0.5">{idx + 1}.</span>
                <span>{prompt}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {plan.backupPrompts && plan.backupPrompts.length > 0 && (
        <div className="mb-6 bg-paper border border-line rounded-xl p-5">
          <h3 className="font-serif font-semibold text-lg text-ink mb-3">
            Backup prompts
          </h3>
          <ul className="space-y-2">
            {plan.backupPrompts.map((prompt, idx) => (
              <li key={idx} className="text-sm text-ink-2 flex items-start gap-2">
                <span className="text-muted font-semibold mt-0.5">•</span>
                <span>{prompt}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-8 bg-warn-bg border border-warn-ink/20 rounded-xl p-5">
        <p className="text-xs text-ink-2">只有顾问看。家长和学生看不到。</p>
      </div>
    </div>
  );
}
