import CurriculumNav from "@/components/CurriculumNav";
import WordCountBox from "@/components/WordCountBox";
import {
  WORD_TARGETS,
  NARRATIVE_FRAME,
  EXPOSITORY_FRAME,
  MODELS,
  EDIT_CHECKLIST,
  S1_PROMPT,
} from "@/lib/curriculum/writing";

export default function WritingPage() {
  return (
    <>
      <CurriculumNav current="/curriculum/writing" />
      <h1 className="font-serif font-semibold text-3xl mb-3">AEIS 作文框架</h1>
      <p className="text-ink-2 mb-2 max-w-2xl">
        中学 AEIS：S1 200–300、S2 250–350、S3 300–400。小学工作室 P4/5 语言卷另练约 100 词短文。
        每次只盯三个语法错。当年 SEAB 说明优先。
      </p>
      <p className="text-sm mb-8">
        <strong>S1 sample prompt:</strong> {S1_PROMPT}
      </p>

      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm border border-line rounded-xl overflow-hidden bg-card">
          <thead className="bg-accent/5">
            <tr>
              <th className="text-left px-3 py-2">级别</th>
              <th className="text-left px-3 py-2">词数</th>
              <th className="text-left px-3 py-2">建议时长</th>
              <th className="text-left px-3 py-2">焦点</th>
            </tr>
          </thead>
          <tbody>
            {WORD_TARGETS.map((w) => (
              <tr key={w.level} className="border-t border-line">
                <td className="px-3 py-2 font-semibold">{w.level}</td>
                <td className="px-3 py-2">
                  {w.min}–{w.max}
                </td>
                <td className="px-3 py-2">{w.minutes} 分钟</td>
                <td className="px-3 py-2 text-ink-2">{w.focus}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="grid md:grid-cols-2 gap-4 mb-10">
        {[NARRATIVE_FRAME, EXPOSITORY_FRAME].map((f) => (
          <div key={f.titleZh} className="bg-card border border-line rounded-2xl p-5">
            <h2 className="font-serif font-semibold text-lg mb-3">{f.titleZh}</h2>
            <ol className="space-y-3 text-sm">
              {f.steps.map((s) => (
                <li key={s.name}>
                  <p className="font-semibold">{s.name}</p>
                  <p className="text-ink-2">{s.do}</p>
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>

      <h2 className="font-serif font-semibold text-xl mb-3">范文</h2>
      <div className="space-y-6 mb-10">
        {MODELS.map((m) => (
          <article key={m.title} className="bg-card border border-line rounded-2xl p-5">
            <p className="text-xs font-semibold text-accent mb-1">
              {m.level} · {m.type} · {m.words} words
            </p>
            <h3 className="font-serif font-semibold text-lg mb-3">{m.title}</h3>
            <p className="text-ink-2 whitespace-pre-line leading-relaxed">{m.text}</p>
          </article>
        ))}
      </div>

      <h2 className="font-serif font-semibold text-xl mb-3">自改清单</h2>
      <ul className="list-disc pl-5 text-sm text-ink-2 space-y-1 mb-10">
        {EDIT_CHECKLIST.map((c) => (
          <li key={c}>{c}</li>
        ))}
      </ul>

      <h2 className="font-serif font-semibold text-xl mb-3">词数跟踪</h2>
      <WordCountBox />
    </>
  );
}
