import CurriculumNav from "@/components/CurriculumNav";
import { ERROR_MATRIX } from "@/lib/curriculum/errors";

export default function ErrorsPage() {
  return (
    <>
      <CurriculumNav current="/curriculum/errors" />
      <h1 className="font-serif font-semibold text-3xl mb-3">PRC Common Error Mapping Matrix</h1>
      <p className="text-ink-2 mb-6 max-w-2xl leading-relaxed">
        前三行是顾问课上优先圈的：时态一致、漏限定词、搭配直译。Curriculum Fix 指向本周作业。
      </p>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border border-line rounded-xl overflow-hidden bg-card min-w-[880px]">
          <thead className="bg-accent/5">
            <tr>
              <th className="text-left px-3 py-2">Error Category</th>
              <th className="text-left px-3 py-2">Typical PRC Transfer</th>
              <th className="text-left px-3 py-2">SG MOE / Cambridge Correction</th>
              <th className="text-left px-3 py-2">Curriculum Fix</th>
            </tr>
          </thead>
          <tbody>
            {ERROR_MATRIX.map((e) => (
              <tr key={e.id} className="border-t border-line align-top">
                <td className="px-3 py-3">
                  <p className="font-semibold">{e.category}</p>
                  <p className="text-xs text-muted mt-1">{e.weeks}</p>
                </td>
                <td className="px-3 py-3 text-warn-ink">{e.wrong}</td>
                <td className="px-3 py-3">{e.right}</td>
                <td className="px-3 py-3 text-ink-2">{e.fix}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
