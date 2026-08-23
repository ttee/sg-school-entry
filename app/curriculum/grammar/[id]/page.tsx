import { notFound } from "next/navigation";
import CurriculumNav from "@/components/CurriculumNav";
import McqPaper from "@/components/McqPaper";
import { GRAMMAR_SHEETS, getGrammar } from "@/lib/curriculum/grammar";
import type { Paper } from "@/lib/curriculum/types";

export function generateStaticParams() {
  return GRAMMAR_SHEETS.map((s) => ({ id: s.id }));
}

export default async function GrammarSheetPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const sheet = getGrammar(id);
  if (!sheet) notFound();

  const paper: Paper = {
    id: `grammar-${sheet.id}`,
    titleZh: sheet.titleZh,
    blurb: sheet.ruleZh,
    track: "SEC",
    intended: sheet.yieldZh,
    targetCes: null,
    minutes: 8,
    items: sheet.items,
  };

  return (
    <>
      <CurriculumNav current="/curriculum/grammar" />
      <h1 className="font-serif font-semibold text-3xl mb-2">{sheet.titleZh}</h1>
      <p className="text-sm text-accent mb-2">{sheet.yieldZh}</p>
      <p className="text-ink-2 mb-6">{sheet.ruleZh}</p>
      <McqPaper paper={paper} />
    </>
  );
}
