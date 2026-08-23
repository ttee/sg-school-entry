import Link from "next/link";
import CurriculumNav from "@/components/CurriculumNav";
import { IXL_PATHS, P4_IXL_PLAN, S1_IXL_PLAN, STRANDS } from "@/lib/curriculum/ixl";
import { FUNCTIONAL_RULE } from "@/lib/curriculum/papers";

function Plan({
  title,
  rows,
}: {
  title: string;
  rows: typeof P4_IXL_PLAN;
}) {
  return (
    <section className="mb-10">
      <h2 className="font-serif font-semibold text-xl mb-3">{title}</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border border-line rounded-xl overflow-hidden bg-card min-w-[760px]">
          <thead className="bg-accent/5">
            <tr>
              <th className="text-left px-3 py-2">周</th>
              <th className="text-left px-3 py-2">主题</th>
              <th className="text-left px-3 py-2">课纲技能</th>
              <th className="text-left px-3 py-2">本站入口</th>
              <th className="text-left px-3 py-2">每周循环</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.week} className="border-t border-line align-top">
                <td className="px-3 py-2 whitespace-nowrap">{r.week === 0 ? "试学" : r.week}</td>
                <td className="px-3 py-2 font-semibold">{r.title}</td>
                <td className="px-3 py-2 text-ink-2">{r.ixl}</td>
                <td className="px-3 py-2">
                  <Link href={r.site.split(" ")[0]} className="text-accent font-semibold">
                    打开
                  </Link>
                </td>
                <td className="px-3 py-2 text-ink-2">{r.loop}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default function IxlPage() {
  return (
    <>
      <CurriculumNav current="/curriculum/ixl" />
      <h1 className="font-serif font-semibold text-3xl mb-3">本站 12 周技能计划</h1>
      <p className="text-ink-2 mb-4 max-w-2xl leading-relaxed">{FUNCTIONAL_RULE}</p>
      <p className="text-sm mb-8">
        语法、阅读、词汇都在本站练：试学周、语法钻、完形、限时卷、作文词数。开通后按周交作业。
      </p>

      <h2 className="font-serif font-semibold text-lg mb-3">按申请年级</h2>
      <div className="space-y-3 mb-8">
        {IXL_PATHS.map((p) => (
          <div key={p.apply} className="bg-card border border-line rounded-xl p-4">
            <p className="font-semibold">{p.apply}</p>
            <p className="text-sm text-ink-2">{p.years}</p>
            <p className="text-sm text-muted mt-1">{p.drill}</p>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-3 gap-4 mb-10">
        {STRANDS.map((s) => (
          <div key={s.name} className="bg-card border border-line rounded-xl p-4">
            <h3 className="font-semibold mb-2">{s.name}</h3>
            <ul className="text-sm text-ink-2 space-y-1 list-disc pl-4">
              {s.items.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <Plan title="P4 入学（A2 Key 130+）· 12 周" rows={P4_IXL_PLAN} />
      <Plan title="S1 AEIS 英语（200–300 词 + 50 MCQ）· 12 周" rows={S1_IXL_PLAN} />
    </>
  );
}
