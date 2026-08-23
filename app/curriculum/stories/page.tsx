import Link from "next/link";
import CurriculumNav from "@/components/CurriculumNav";
import { THEMES, WEEK_MAPS } from "@/lib/curriculum/storylines";

export default function StoriesPage() {
  return (
    <>
      <CurriculumNav current="/curriculum/stories" />
      <h1 className="font-serif font-semibold text-3xl mb-3">
        校园课文
      </h1>
      <p className="text-ink-2 mb-4 max-w-2xl leading-relaxed">
        每一课都有：新加坡场景、短篇阅读、语法对比（中国孩子常错的说法）、开口对话、五道选择题、一段写作要求。点进课题就能练，不是目录卡片。
      </p>
      <p className="text-sm mb-8">
        语法一次只钉 1–2 点。人设是 Mei、Priya、Wei、Aisha、Aunty Tan。每周批改作业仍在登录后的作业列表。
      </p>

      <h2 className="font-serif font-semibold text-xl mb-3">12 周怎么排</h2>
      <div className="grid md:grid-cols-3 gap-3 mb-10">
        {Object.entries(WEEK_MAPS).map(([id, m]) => (
          <div key={id} className="bg-card border border-line rounded-xl p-4">
            <p className="font-semibold mb-2">{m.label}</p>
            <p className="text-sm text-ink-2 mb-2">
              课 {m.weeks.join(" · ")}
            </p>
            <Link href={`/curriculum/stories/${m.weeks[0]}`} className="text-sm text-accent font-semibold">
              从第 {m.weeks[0]} 课开始
            </Link>
          </div>
        ))}
      </div>

      {THEMES.map((t) => (
        <section key={t.id} className="mb-8">
          <h2 className="font-serif font-semibold text-lg mb-1">{t.title}</h2>
          <p className="text-xs text-muted mb-3">{t.exam}</p>
          <ul className="space-y-1">
            {t.stories.map((s) => (
              <li key={s.n}>
                <Link href={`/curriculum/stories/${s.n}`} className="text-sm hover:text-accent">
                  <span className="font-mono text-accent mr-2">{s.n}.</span>
                  {s.title}
                  <span className="text-muted"> — {s.focus}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </>
  );
}
