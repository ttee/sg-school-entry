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
      <p className="text-ink-2 mb-6">{paper.blurb}</p>
      <McqPaper paper={paper} />
    </>
  );
}
