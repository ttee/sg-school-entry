import Link from "next/link";
import CurriculumNav from "@/components/CurriculumNav";
import { GRAMMAR_SHEETS } from "@/lib/curriculum/grammar";

export default function GrammarIndex() {
  return (
    <>
      <CurriculumNav current="/curriculum/grammar" />
      <h1 className="font-serif font-semibold text-3xl mb-3">语法精练</h1>
      <p className="text-ink-2 mb-8 max-w-2xl">
        高收益四块：冠词、时态一致、句型转换、完形 + 标点。对准 AEIS 选择题和作文自改。
      </p>
      <div className="grid md:grid-cols-2 gap-4">
        {GRAMMAR_SHEETS.map((s) => (
          <Link
            key={s.id}
            href={`/curriculum/grammar/${s.id}`}
            className="bg-card border border-line rounded-2xl p-5 hover:border-accent"
          >
            <h2 className="font-serif font-semibold text-lg mb-1">{s.titleZh}</h2>
            <p className="text-xs text-accent mb-2">{s.yieldZh}</p>
            <p className="text-sm text-ink-2">{s.ruleZh}</p>
          </Link>
        ))}
      </div>
    </>
  );
}
