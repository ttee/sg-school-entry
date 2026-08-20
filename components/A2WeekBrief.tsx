import type { A2WeekBrief } from "@/lib/a2-week-briefs";
import { A2_BRIEF_STEPS } from "@/lib/a2-week-briefs";
import Link from "next/link";

export default function A2WeekBriefView({ brief }: { brief: A2WeekBrief }) {
  return (
    <div>
      <div className="mb-8">
        <Link
          href="/learn/plans"
          className="text-sm text-muted hover:text-ink transition-colors mb-4 inline-block"
        >
          ← 返回备忘
        </Link>
        <div className="flex items-center gap-3 mb-2">
          <span className="text-sm font-semibold text-accent px-3 py-1 bg-accent/10 rounded-full">
            A2-{brief.week}
          </span>
          <span className="text-xs text-ink-2 px-2 py-1 bg-paper-2 border border-line rounded-full">
            只有顾问看
          </span>
        </div>
        <h1 className="font-serif font-semibold text-3xl text-ink">
          {brief.title}
        </h1>
      </div>

      <div className="space-y-6">
        <section className="bg-card border border-line rounded-xl p-5">
          <h2 className="font-serif font-semibold text-lg text-ink mb-2">
            High-frequency error
          </h2>
          <p className="text-ink-2 font-mono text-base">{brief.error}</p>
        </section>

        <section className="bg-gradient-to-br from-accent/5 to-accent/10 border border-accent/20 rounded-xl p-5">
          <h2 className="font-serif font-semibold text-lg text-ink mb-2">
            Board
          </h2>
          <p className="font-mono text-lg text-accent leading-relaxed">
            {brief.board}
          </p>
        </section>

        <section className="bg-card border border-line rounded-xl p-5">
          <h2 className="font-serif font-semibold text-lg text-ink mb-4">
            I do / We do / You do
          </h2>
          <ol className="space-y-3 text-sm text-ink-2">
            <li>
              <span className="font-semibold text-accent">I do</span>
              <span className="text-ink"> — {A2_BRIEF_STEPS.iDo}</span>
            </li>
            <li>
              <span className="font-semibold text-accent">We do</span>
              <span className="text-ink"> — {A2_BRIEF_STEPS.weDo}</span>
            </li>
            <li>
              <span className="font-semibold text-accent">You do</span>
              <span className="text-ink"> — {A2_BRIEF_STEPS.youDo}</span>
            </li>
          </ol>
          <p className="mt-4 text-sm text-ink-2">{A2_BRIEF_STEPS.camera}</p>
        </section>

        <section className="bg-paper-2 border border-line rounded-xl p-5">
          <h2 className="font-serif font-semibold text-lg text-ink mb-3">
            Spoken lines
          </h2>
          <ul className="space-y-2">
            {brief.spoken.map((line) => (
              <li key={line} className="text-ink font-mono text-base">
                {line}
              </li>
            ))}
          </ul>
        </section>

        {brief.weike.locked ? (
          <section className="bg-card border border-line rounded-xl p-5">
            <h2 className="font-serif font-semibold text-lg text-ink mb-2">
              微课
            </h2>
            <p className="text-ink-2">{brief.weike.beat}</p>
          </section>
        ) : brief.weike.note ? (
          <section className="bg-card border border-line rounded-xl p-5">
            <h2 className="font-serif font-semibold text-lg text-ink mb-2">
              微课
            </h2>
            <p className="text-ink-2">{brief.weike.note}</p>
          </section>
        ) : null}
      </div>
    </div>
  );
}
