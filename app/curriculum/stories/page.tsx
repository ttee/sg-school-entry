import Link from "next/link";
import CurriculumNav from "@/components/CurriculumNav";
import { CYCLE, THEMES, WEEK_MAPS } from "@/lib/curriculum/storylines";

export default function StoriesPage() {
  return (
    <>
      <CurriculumNav current="/curriculum/stories" />
      <h1 className="font-serif font-semibold text-3xl mb-3">
        校园课文
      </h1>
      <p className="text-ink-2 mb-4 max-w-2xl leading-relaxed">
        小学 CEQ 要听说读写，中学 AEIS 英语要作文、理解、完形、语法、词汇。课文用食堂、小息、CCA、MRT 这些学校里会碰到的词，对准当周语法。
      </p>
      <p className="text-sm mb-8">
        每课四步：听 → 角色扮演 → 阅读完形 → 写 80–100 词（中学 200–300）。语法一次只钉 1–2 点。人设沿用 Mei、Priya、Wei、Aisha、Aunty Tan。
      </p>

      <h2 className="font-serif font-semibold text-xl mb-3">四步循环</h2>
      <ol className="grid md:grid-cols-2 gap-3 mb-8">
        {CYCLE.map((c) => (
          <li key={c.step} className="bg-card border border-line rounded-xl p-4 text-sm">
            <p className="font-semibold">{c.step}</p>
            <p className="text-ink-2 mt-1">{c.do}</p>
          </li>
        ))}
      </ol>

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
