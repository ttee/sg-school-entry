import Link from "next/link";
import CurriculumNav from "@/components/CurriculumNav";
import { CONTEXT_GLOSSARY, CONTEXT_TOPICS } from "@/lib/curriculum/singapore-context";

export const metadata = {
  title: "新加坡语境英语 · 狮城入学",
  description: "给中国家长：小贩中心、组屋、MRT、recess。先中文讲清，再练英语开口。",
};

export default function SingaporeContextPage() {
  return (
    <>
      <CurriculumNav current="/curriculum/context" />
      <p className="text-xs font-semibold tracking-widest uppercase text-accent mb-2">
        家长先看 · 孩子再开口
      </p>
      <h1 className="font-serif font-semibold text-3xl mb-3">新加坡语境英语</h1>
      <p className="text-ink-2 mb-4 max-w-2xl leading-relaxed">
        中国课本里的 apartment、line up，进政府学校不够用。孩子要听懂 canteen、recess、HDB、hawker
        centre、Aunty。下面十课先给家长中文说明，再给孩子英语台词和对准的 CEQ / AEIS 题型。
      </p>
      <p className="text-sm text-muted mb-8 max-w-2xl leading-relaxed">
        国立教育学院亚洲语言文化学部陈志锐副教授，主持推广华语理事会双语出版物《从石叻坡到新加坡——新加坡华语资料库》。那是新加坡<strong>华语</strong>本地词研究，不是英语教材。本站不转载该资料库，也不与
        NIE 合作。我们把同一类生活场景写成英语作业。
      </p>

      <h2 className="font-serif font-semibold text-xl mb-3">家长词表（先中文，再英语）</h2>
      <div className="overflow-x-auto mb-10">
        <table className="w-full text-sm border border-line rounded-xl overflow-hidden bg-card min-w-[640px]">
          <thead className="bg-accent/5">
            <tr>
              <th className="text-left px-3 py-2">英语（孩子要会）</th>
              <th className="text-left px-3 py-2">中文</th>
              <th className="text-left px-3 py-2">家长怎么讲</th>
            </tr>
          </thead>
          <tbody>
            {CONTEXT_GLOSSARY.map((g) => (
              <tr key={g.en} className="border-t border-line align-top">
                <td className="px-3 py-2 font-semibold whitespace-nowrap">{g.en}</td>
                <td className="px-3 py-2">{g.zh}</td>
                <td className="px-3 py-2 text-ink-2">{g.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="font-serif font-semibold text-xl mb-3">十个场景 · 对上故事课</h2>
      <div className="space-y-5 mb-10">
        {CONTEXT_TOPICS.map((t) => (
          <article key={t.id} className="bg-card border border-line rounded-2xl p-5">
            <p className="text-xs font-semibold text-accent mb-1">
              {t.n}. {t.zhScene} · {t.exam}
            </p>
            <h3 className="font-serif font-semibold text-lg mb-2">{t.enTitle}</h3>
            <p className="text-sm text-ink-2 mb-4">{t.parentZh}</p>
            <p className="text-xs font-semibold text-muted mb-2">词汇</p>
            <ul className="flex flex-wrap gap-2 mb-4">
              {t.vocab.map((v) => (
                <li key={v.en} className="text-xs px-2.5 py-1 rounded-full border border-line">
                  {v.en} · {v.zh}
                </li>
              ))}
            </ul>
            <p className="text-xs font-semibold text-muted mb-2">开口三句</p>
            <ul className="text-sm text-ink-2 space-y-1 mb-4">
              {t.dialogue.map((d) => (
                <li key={d.line}>
                  <span className="font-semibold text-ink">{d.who}:</span> {d.line}
                </li>
              ))}
            </ul>
            <Link href={t.href} className="text-sm text-accent font-semibold">
              打开故事 {t.story} →
            </Link>
          </article>
        ))}
      </div>

      <div className="flex flex-wrap gap-3">
        <Link href="/trial/A2" className="px-5 py-2.5 bg-accent text-accent-ink rounded-full font-semibold">
          试学：Aunty Tan 失物招领
        </Link>
        <Link href="/curriculum/stories" className="px-5 py-2.5 border border-accent rounded-full font-semibold">
          77 个新加坡故事
        </Link>
      </div>
    </>
  );
}
