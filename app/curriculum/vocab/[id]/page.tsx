import { notFound } from "next/navigation";
import CurriculumNav from "@/components/CurriculumNav";
import { VOCAB_MODULES, getVocab } from "@/lib/curriculum/vocab";

export function generateStaticParams() {
  return VOCAB_MODULES.map((m) => ({ id: m.id }));
}

export default async function VocabModulePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const mod = getVocab(id);
  if (!mod) notFound();

  return (
    <>
      <CurriculumNav current="/curriculum/vocab" />
      <h1 className="font-serif font-semibold text-3xl mb-2">{mod.titleZh}</h1>
      <p className="text-ink-2 mb-6">{mod.use}</p>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border border-line rounded-xl overflow-hidden bg-card">
          <thead className="bg-accent/5">
            <tr>
              <th className="text-left px-3 py-2">词</th>
              <th className="text-left px-3 py-2">例句</th>
              <th className="text-left px-3 py-2">给家长</th>
            </tr>
          </thead>
          <tbody>
            {mod.items.map((it) => (
              <tr key={it.word} className="border-t border-line align-top">
                <td className="px-3 py-3 font-semibold whitespace-nowrap">{it.word}</td>
                <td className="px-3 py-3">{it.example}</td>
                <td className="px-3 py-3 text-ink-2">{it.noteZh}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
