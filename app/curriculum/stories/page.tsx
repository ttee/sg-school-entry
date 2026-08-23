import Link from "next/link";
import CurriculumNav from "@/components/CurriculumNav";
import { CYCLE, THEMES, WEEK_MAPS } from "@/lib/curriculum/storylines";

export default function StoriesPage() {
  return (
    <>
      <CurriculumNav current="/curriculum/stories" />
      <h1 className="font-serif font-semibold text-3xl mb-3">校园课文</h1>
      <p className="text-ink-2 mb-4 max-w-2xl leading-relaxed">
        每一课都先听、再选、再看句型，最后才读短文。孩子要带走的是今天会说的三句，不是一篇目录。
      </p>

      <ol className="grid sm:grid-cols-2 gap-3 mb-10">
        {CYCLE.map((c) => (
          <li key={c.step} className="bg-card border border-line rounded-xl p-4">
            <p className="font-semibold text-sm mb-1">{c.step}</p>
            <p className="text-sm text-ink-2">{c.do}</p>
          </li>
        ))}
      </ol>
      <p className="text-sm text-ink-2 mb-8">
        打开一课后的顺序是：听三句 → 选对错 → 一个句型 → 换词练习 → 读短文 → 说出来 → 写一句。家长用中文提示即可。
      </p>

      <h2 className="font-serif font-semibold text-xl mb-3">12 周怎么走</h2>
      <div className="grid md:grid-cols-2 gap-3 mb-10">
        {Object.entries(WEEK_MAPS).map(([id, m]) => (
          <div key={id} className="bg-card border border-line rounded-xl p-4">
            <p className="font-semibold mb-2">{m.label}</p>
            <p className="text-sm text-ink-2 mb-2">
              {m.weeks.map((n) => (
                <Link
                  key={n}
                  href={`/curriculum/stories/${n}`}
                  className="text-accent font-semibold mr-2"
                >
                  {n}
                </Link>
              ))}
            </p>
            <Link href={`/curriculum/stories/${m.weeks[0]}`} className="text-sm text-accent font-semibold">
              从第 {m.weeks[0]} 课开始
            </Link>
          </div>
        ))}
      </div>

      <details className="mb-8">
        <summary className="cursor-pointer text-sm text-muted">
          需要加练时再打开全部课题
        </summary>
        <div className="mt-6">
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
        </div>
      </details>
    </>
  );
}
