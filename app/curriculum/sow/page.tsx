import Link from "next/link";
import CurriculumNav from "@/components/CurriculumNav";
import { SOW_TRACKS } from "@/lib/curriculum/sow";

export default function SowPage() {
  return (
    <>
      <CurriculumNav current="/curriculum/sow" />
      <h1 className="font-serif font-semibold text-3xl mb-3">周进度表 SOW</h1>
      <p className="text-ink-2 mb-2 max-w-2xl leading-relaxed">
        IXL 栏是工作室稳定代码（族谱名），不是当年 IXL 网站会改的题号。顾问对内用代码，家长看「本周作业」。
      </p>
      <p className="text-xs text-muted mb-8">
        小学对准 Cambridge A2 Key / B1 Preliminary 题型。中学对准 AEIS 英语语言选择题 + 作文。
      </p>

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
                      <span className="font-mono text-xs">{r.ixlCode}</span>
                      <div className="text-xs text-muted">{r.ixlFamily}</div>
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
