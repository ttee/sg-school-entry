import CurriculumNav from "@/components/CurriculumNav";
import { ERROR_MATRIX } from "@/lib/curriculum/errors";

export default function ErrorsPage() {
  return (
    <>
      <CurriculumNav current="/curriculum/errors" />
      <h1 className="font-serif font-semibold text-3xl mb-3">中文 → 英语 高频迁移矩阵</h1>
      <p className="text-ink-2 mb-6 max-w-2xl leading-relaxed">
        顾问批改时只圈矩阵里的一条。孩子改对这一条，再进下一周。错句来自本站作业，不是官方卷。
      </p>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border border-line rounded-xl overflow-hidden bg-card min-w-[720px]">
          <thead className="bg-accent/5">
            <tr>
              <th className="text-left px-3 py-2">中文干扰</th>
              <th className="text-left px-3 py-2">典型错句</th>
              <th className="text-left px-3 py-2">正确</th>
              <th className="text-left px-3 py-2">周次</th>
              <th className="text-left px-3 py-2">试卷位置</th>
            </tr>
          </thead>
          <tbody>
            {ERROR_MATRIX.map((e) => (
              <tr key={e.id} className="border-t border-line align-top">
                <td className="px-3 py-3">
                  <p className="font-semibold">{e.mandarin}</p>
                  <p className="text-xs text-muted mt-1">{e.transfer}</p>
                </td>
                <td className="px-3 py-3 text-warn-ink">{e.wrong}</td>
                <td className="px-3 py-3">{e.right}</td>
                <td className="px-3 py-3 whitespace-nowrap">{e.weeks}</td>
                <td className="px-3 py-3 text-ink-2">{e.exam}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
