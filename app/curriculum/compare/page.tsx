import Link from "next/link";
import CurriculumNav from "@/components/CurriculumNav";
import {
  CHANNELS,
  COMPARE_ROWS,
  STILL_IN_CHINA,
  SHORTLIST,
} from "@/lib/curriculum/market";

export default function ComparePage() {
  return (
    <>
      <CurriculumNav current="/curriculum/compare" />
      <h1 className="font-serif font-semibold text-3xl mb-3">新加坡 / 中国备考渠道对照</h1>
      <p className="text-ink-2 mb-4 max-w-2xl leading-relaxed">
        新加坡这边多是要学生准证的 PEI 全日制和补习；中国这边多是中介打包 + 一对一口语。
        狮城入学是第三种：人在国内也能做的作业，不办准证，不替代剑桥考点。
      </p>
      <p className="text-xs text-muted mb-8">
        下表不是排名。学费除本站 12 周一口价外，一律以对方官网或询校为准。与教育部、考评局、剑桥均无隶属。
      </p>

      <h2 className="font-serif font-semibold text-xl mb-3">三种路怎么分</h2>
      <div className="overflow-x-auto mb-10">
        <table className="w-full text-sm border border-line rounded-xl overflow-hidden bg-card min-w-[720px]">
          <thead className="bg-accent/5">
            <tr>
              <th className="text-left px-3 py-2"> </th>
              <th className="text-left px-3 py-2">新加坡平台</th>
              <th className="text-left px-3 py-2">中国渠道</th>
              <th className="text-left px-3 py-2">狮城入学</th>
            </tr>
          </thead>
          <tbody>
            {COMPARE_ROWS.map((r) => (
              <tr key={r.dim} className="border-t border-line align-top">
                <td className="px-3 py-2 font-semibold">{r.dim}</td>
                <td className="px-3 py-2 text-ink-2">{r.sg}</td>
                <td className="px-3 py-2 text-ink-2">{r.cn}</td>
                <td className="px-3 py-2">{r.us}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="font-serif font-semibold text-xl mb-3">人还在中国</h2>
      <ol className="list-decimal pl-5 text-sm text-ink-2 space-y-2 mb-10">
        {STILL_IN_CHINA.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ol>

      <div className="grid md:grid-cols-2 gap-6 mb-10">
        <section className="bg-card border border-accent/40 rounded-2xl p-5">
          <h2 className="font-serif font-semibold text-lg mb-3">P4 三条（CES 130+）</h2>
          <ol className="space-y-3 text-sm">
            {SHORTLIST.p4.map((s) => (
              <li key={s.pick}>
                <Link href={s.href} className="font-semibold text-accent">
                  {s.pick}
                </Link>
                <p className="text-ink-2 mt-1">{s.why}</p>
              </li>
            ))}
          </ol>
        </section>
        <section className="bg-card border border-line rounded-2xl p-5">
          <h2 className="font-serif font-semibold text-lg mb-3">S1 三条（作文 + 50 题）</h2>
          <ol className="space-y-3 text-sm">
            {SHORTLIST.s1.map((s) => (
              <li key={s.pick}>
                <Link href={s.href} className="font-semibold text-accent">
                  {s.pick}
                </Link>
                <p className="text-ink-2 mt-1">{s.why}</p>
              </li>
            ))}
          </ol>
        </section>
      </div>

      <h2 className="font-serif font-semibold text-xl mb-3">常见名字（核对用）</h2>
      <div className="space-y-4">
        {CHANNELS.map((c) => (
          <article key={c.name} className="bg-card border border-line rounded-2xl p-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-accent mb-1">
              {c.where}
            </p>
            <h3 className="font-serif font-semibold text-lg">
              <a href={c.href} className="hover:text-accent" target={c.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                {c.name}
              </a>
            </h3>
            <p className="text-sm mt-2">
              <strong>模式</strong> {c.model}
            </p>
            <p className="text-sm text-ink-2 mt-1">{c.what}</p>
            <p className="text-sm mt-1">
              <strong>费用</strong> {c.feeNote}
            </p>
            <p className="text-sm text-ink-2 mt-1">
              <strong>人在中国</strong> {c.fromChina}
            </p>
          </article>
        ))}
      </div>

      <p className="text-xs text-muted mt-8">
        启德、金吉列、新东方前途等中介卖的是打包服务，不是考点。VIPKid / 扇贝等是通用英语，对 CEQ
        口语和单词有帮助，对 AEIS 50 题和词数作文通常不够。本站不代理中介，也不收 PEI 介绍费。
      </p>
    </>
  );
}
