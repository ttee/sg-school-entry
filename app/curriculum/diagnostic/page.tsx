import Link from "next/link";
import CurriculumNav from "@/components/CurriculumNav";
import { DIAGNOSTIC_PAPERS } from "@/lib/curriculum/diagnostics";

export default function DiagnosticIndex() {
  return (
    <>
      <CurriculumNav current="/curriculum/diagnostic" />
      <h1 className="font-serif font-semibold text-3xl mb-3">PRC → 新加坡 摸底卷</h1>
      <p className="text-ink-2 mb-8 max-w-2xl leading-relaxed">
        每份卷对准一个申请年级的工作室 CES 目标。做完会估计量表分，并标出中文迁移错误。
        不是剑桥正式分。孩子自己答，家长坐旁边即可。
      </p>
      <div className="grid md:grid-cols-2 gap-4">
        {DIAGNOSTIC_PAPERS.map((p) => (
          <Link
            key={p.id}
            href={`/curriculum/diagnostic/${p.id}`}
            className="bg-card border border-line rounded-2xl p-5 hover:border-accent"
          >
            <p className="text-xs font-semibold text-accent mb-1">
              {p.intended}
              {p.targetCes != null ? ` · 目标 CES ${p.targetCes}` : " · AEIS 语言点"}
            </p>
            <h2 className="font-serif font-semibold text-lg mb-2">{p.titleZh}</h2>
            <p className="text-sm text-ink-2">{p.blurb}</p>
          </Link>
        ))}
      </div>
    </>
  );
}
