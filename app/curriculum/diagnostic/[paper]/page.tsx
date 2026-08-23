import { notFound } from "next/navigation";
import CurriculumNav from "@/components/CurriculumNav";
import McqPaper from "@/components/McqPaper";
import { DIAGNOSTIC_PAPERS, getPaper } from "@/lib/curriculum/diagnostics";

export function generateStaticParams() {
  return DIAGNOSTIC_PAPERS.map((p) => ({ paper: p.id }));
}

export default async function DiagnosticPaperPage({
  params,
}: {
  params: Promise<{ paper: string }>;
}) {
  const { paper: id } = await params;
  const paper = getPaper(id);
  if (!paper) notFound();

  return (
    <>
      <CurriculumNav current="/curriculum/diagnostic" />
      <h1 className="font-serif font-semibold text-3xl mb-2">{paper.titleZh}</h1>
      <p className="text-ink-2 mb-2">{paper.blurb}</p>
      {paper.id === "p4" && (
        <p className="text-sm mb-6 bg-accent/10 border border-accent/30 rounded-xl px-4 py-3">
          Benchmark: P4 CEQ A2 Key target scale score <strong>130+</strong>. First item is AEIS P4/5
          vocabulary in context (<em>postpone</em> → put off).
        </p>
      )}
      {paper.subject === "math" && (
        <p className="text-sm mb-6 text-muted">
          申请 {paper.intended} 测前一级数学课纲。无计算器。做完会显示每题对错。
        </p>
      )}
      <McqPaper paper={paper} />
    </>
  );
}
