import Link from "next/link";
import CurriculumNav from "@/components/CurriculumNav";
import { P4_WEEK3, SOW_TRACKS } from "@/lib/curriculum/sow";

export default function SowPage() {
  return (
    <>
      <CurriculumNav current="/curriculum/sow" />
      <h1 className="font-serif font-semibold text-3xl mb-3">周进度表 SOW</h1>
      <p className="text-ink-2 mb-6 max-w-2xl leading-relaxed">
        小学对准 A2 Key / B1 Preliminary。中学对准 AEIS 语言选择题 + 作文。P4 第 3 周模块如下。
      </p>

      <section className="bg-card border border-accent/40 rounded-2xl p-5 mb-10">
        <p className="text-xs font-semibold uppercase tracking-wide text-accent mb-1">
          Sample · {P4_WEEK3.titleZh}
        </p>
        <h2 className="font-serif font-semibold text-xl mb-2">{P4_WEEK3.topic}</h2>
        <p className="text-sm text-ink-2 mb-3">
          <strong>CEQ Target:</strong> {P4_WEEK3.ceq}
        </p>
        <ul className="text-sm mb-3 space-y-1">
          {P4_WEEK3.ixl.map((x) => (
            <li key={x.code}>
              <span className="font-mono font-semibold">{x.code}</span> · {x.name}
            </li>
          ))}
        </ul>
        <p className="text-sm">
          <strong>Weekly deliverable:</strong> {P4_WEEK3.deliverable}
        </p>
        <Link href="/curriculum/grammar/linkers" className="inline-block mt-3 text-sm text-accent font-semibold">
          Open linker cloze →
        </Link>
      </section>

      {SOW_TRACKS.map((track) => (
        <section key={track.id} className="mb-10">
          <h2 className="font-serif font-semibold text-xl mb-3">{track.titleZh}</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-line rounded-xl overflow-hidden bg-card min-w-[800px]">
              <thead className="bg-accent/5">
                <tr>
                  <th className="text-left px-3 py-2">周</th>
                  <th className="text-left px-3 py-2">主题</th>
                  <th className="text-left px-3 py-2">纠错</th>
                  <th className="text-left px-3 py-2">IXL</th>
                  <th className="text-left px-3 py-2">试卷题型</th>
                  <th className="text-left px-3 py-2">入口</th>
                </tr>
              </thead>
              <tbody>
                {track.rows.map((r) => (
                  <tr key={`${track.id}-${r.week}`} className="border-t border-line align-top">
                    <td className="px-3 py-2 whitespace-nowrap">{r.week === 0 ? "试学" : r.week}</td>
                    <td className="px-3 py-2 font-semibold">{r.titleZh}</td>
                    <td className="px-3 py-2 text-ink-2">{r.errorFocus}</td>
                    <td className="px-3 py-2">
                      <span className="font-mono text-xs">
                        {(r.ixlCodes ?? [r.ixlCode]).join(" · ")}
                      </span>
                      <div className="text-xs text-muted">{r.ixlFamily}</div>
                      {r.deliverable && (
                        <div className="text-xs text-ink-2 mt-1">{r.deliverable}</div>
                      )}
                    </td>
                    <td className="px-3 py-2 text-ink-2">{r.examPart}</td>
                    <td className="px-3 py-2">
                      <Link href={r.homework} className="text-accent font-semibold">
                        打开
                      </Link>
                      {r.skillId && (
                        <>
                          <span className="text-muted"> · </span>
                          <Link href={`/skills/${r.skillId}`} className="text-accent">
                            技能钻
                          </Link>
                        </>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      ))}
    </>
  );
}
