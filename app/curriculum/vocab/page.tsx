import Link from "next/link";
import CurriculumNav from "@/components/CurriculumNav";
import { VOCAB_MODULES } from "@/lib/curriculum/vocab";

export default function VocabIndex() {
  return (
    <>
      <CurriculumNav current="/curriculum/vocab" />
      <h1 className="font-serif font-semibold text-3xl mb-3">功能词汇模块</h1>
      <p className="text-ink-2 mb-8 max-w-2xl">
        食堂、小息、作文里用得上的词。
      </p>
      <div className="grid md:grid-cols-2 gap-4">
        {VOCAB_MODULES.map((m) => (
          <Link
            key={m.id}
            href={`/curriculum/vocab/${m.id}`}
            className="bg-card border border-line rounded-2xl p-5 hover:border-accent"
          >
            <h2 className="font-serif font-semibold text-lg mb-2">{m.titleZh}</h2>
            <p className="text-sm text-ink-2">{m.use}</p>
            <p className="text-xs text-muted mt-2">{m.items.length} 条</p>
          </Link>
        ))}
      </div>
    </>
  );
}
