import Link from "next/link";
import CurriculumNav from "@/components/CurriculumNav";
import { ENGLISH_DIAGNOSTIC_PAPERS } from "@/lib/curriculum/diagnostics";
import { MATH_DIAGNOSTIC_PAPERS } from "@/lib/curriculum/math-diagnostics";

function Cards({
  papers,
}: {
  papers: typeof ENGLISH_DIAGNOSTIC_PAPERS;
}) {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      {papers.map((p) => (
        <Link
          key={p.id}
          href={`/curriculum/diagnostic/${p.id}`}
          className="bg-card border border-line rounded-2xl p-5 hover:border-accent"
        >
          <p className="text-xs font-semibold text-accent mb-1">
            {p.intended}
            {p.targetCes != null
              ? ` · 目标 CES ${p.targetCes}`
              : p.subject === "math"
                ? " · AEIS 数学"
                : " · AEIS 语言点"}
            {` · ${p.items.length} 题`}
          </p>
          <h2 className="font-serif font-semibold text-lg mb-2">{p.titleZh}</h2>
          <p className="text-sm text-ink-2">{p.blurb}</p>
        </Link>
      ))}
    </div>
  );
}

export default function DiagnosticIndex() {
  return (
    <>
      <CurriculumNav current="/curriculum/diagnostic" />
      <h1 className="font-serif font-semibold text-3xl mb-3">PRC → 新加坡 摸底卷</h1>
      <p className="text-ink-2 mb-8 max-w-2xl leading-relaxed">
        P2 到 S3，每个申请年级一份英语、一份数学。测前一级课纲。做完会标出对错和中文迁移错误。不是剑桥正式分。
      </p>
      <h2 className="font-serif font-semibold text-xl mb-3">英语 · 7 个年级</h2>
      <Cards papers={ENGLISH_DIAGNOSTIC_PAPERS} />
      <h2 className="font-serif font-semibold text-xl mt-10 mb-3">数学 · 7 个年级</h2>
      <Cards papers={MATH_DIAGNOSTIC_PAPERS} />
    </>
  );
}
