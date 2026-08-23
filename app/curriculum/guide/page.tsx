import CurriculumNav from "@/components/CurriculumNav";
import {
  TERMS,
  PATH_PRIMARY,
  PATH_SECONDARY,
  DEADLINE_NOTES,
  MOE_LINKS,
  PARENT_SNIPPET,
} from "@/lib/curriculum/guide";

export default function GuideCurriculumPage() {
  return (
    <>
      <CurriculumNav current="/curriculum/guide" />
      <h1 className="font-serif font-semibold text-3xl mb-3">新加坡 AEIS / CEQ 考试指南</h1>
      <p className="text-ink-2 mb-6 max-w-2xl leading-relaxed">
        给中国家长的路径说明。政策以 MOE / SEAB 当年页面为准。本站不代报 CEQ，也不承办 AEIS 考场。
      </p>

      <section className="bg-card border border-accent/40 rounded-2xl p-5 mb-10">
        <h2 className="font-serif font-semibold text-xl mb-3">摘要</h2>
        {PARENT_SNIPPET.map((s) => (
          <div key={s.title} className="mb-4 last:mb-0">
            <p className="font-semibold">{s.title}</p>
            <p className="text-sm text-ink-2 leading-relaxed mt-1">{s.body}</p>
          </div>
        ))}
      </section>

      <h2 className="font-serif font-semibold text-xl mb-3">小学路径</h2>
      <ol className="list-decimal pl-5 text-sm text-ink-2 space-y-2 mb-8">
        {PATH_PRIMARY.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ol>

      <h2 className="font-serif font-semibold text-xl mb-3">中学路径</h2>
      <ol className="list-decimal pl-5 text-sm text-ink-2 space-y-2 mb-8">
        {PATH_SECONDARY.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ol>

      <h2 className="font-serif font-semibold text-xl mb-3">CEQ 成绩与申请月</h2>
      <ul className="list-disc pl-5 text-sm text-ink-2 space-y-2 mb-8">
        {DEADLINE_NOTES.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>

      <h2 className="font-serif font-semibold text-xl mb-3">术语对照</h2>
      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm border border-line rounded-xl overflow-hidden bg-card min-w-[640px]">
          <thead className="bg-accent/5">
            <tr>
              <th className="text-left px-3 py-2">英文</th>
              <th className="text-left px-3 py-2">中文</th>
              <th className="text-left px-3 py-2">怎么用</th>
            </tr>
          </thead>
          <tbody>
            {TERMS.map((t) => (
              <tr key={t.en} className="border-t border-line align-top">
                <td className="px-3 py-2 font-semibold whitespace-nowrap">{t.en}</td>
                <td className="px-3 py-2">{t.zh}</td>
                <td className="px-3 py-2 text-ink-2">{t.mean}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="font-serif font-semibold text-xl mb-3">官方链接</h2>
      <ul className="text-sm space-y-2">
        <li>
          <a className="text-accent underline" href={MOE_LINKS.aeis} target="_blank" rel="noreferrer">
            MOE AEIS 总览
          </a>
        </li>
        <li>
          <a className="text-accent underline" href={MOE_LINKS.eligibility} target="_blank" rel="noreferrer">
            年龄核对器（官方 CES）
          </a>
        </li>
        <li>
          <a className="text-accent underline" href={MOE_LINKS.apply} target="_blank" rel="noreferrer">
            如何申请
          </a>
        </li>
        <li>
          <a className="text-accent underline" href={MOE_LINKS.a2format} target="_blank" rel="noreferrer">
            A2 Key for Schools 试卷结构
          </a>
        </li>
        <li>
          <a className="text-accent underline" href={MOE_LINKS.b1format} target="_blank" rel="noreferrer">
            B1 Preliminary for Schools 试卷结构
          </a>
        </li>
      </ul>
    </>
  );
}
