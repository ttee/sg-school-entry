import { notFound } from "next/navigation";
import CurriculumNav from "@/components/CurriculumNav";
import McqPaper from "@/components/McqPaper";
import { MOCKS, getMock } from "@/lib/curriculum/mocks";

export function generateStaticParams() {
  return MOCKS.map((m) => ({ id: m.id }));
}

export default async function MockPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const paper = getMock(id);
  if (!paper) notFound();

  return (
    <>
      <CurriculumNav current="/curriculum/mocks" />
      <h1 className="font-serif font-semibold text-3xl mb-2">{paper.titleZh}</h1>
      <p className="text-ink-2 mb-2">{paper.blurb}</p>
      <p className="text-sm text-muted mb-6">
        计时开始即进入。到点自动交卷。选项前的 A–D 对应答题卡。
      </p>
      <McqPaper paper={paper} timed />
    </>
  );
}
