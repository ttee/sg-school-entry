import Link from "next/link";
import SiteChrome from "@/components/SiteChrome";
import { ENGLISH_DIAGNOSTIC_PAPERS } from "@/lib/curriculum/diagnostics";
import { MATH_DIAGNOSTIC_PAPERS } from "@/lib/curriculum/math-diagnostics";

export const metadata = {
  title: "入学摸底 · 狮城入学",
  description: "P2 到 S3 英语和数学摸底 MCQ。选申请年级，做完看对照。",
};

function Grid({
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
            {p.targetCes != null ? ` · CES ${p.targetCes}+` : ""}
            {" · "}
            {p.items.length} 题
          </p>
          <h2 className="font-serif font-semibold text-lg mb-1">{p.titleZh}</h2>
          <p className="text-sm text-ink-2">{p.blurb}</p>
        </Link>
      ))}
    </div>
  );
}

export default function AssessPage() {
  return (
    <SiteChrome>
      <main id="main" className="max-w-5xl mx-auto px-4 py-10 md:py-14">
        <h1 className="font-serif font-semibold text-3xl md:text-4xl mb-3">入学摸底</h1>
        <p className="text-ink-2 mb-2 max-w-2xl">
          每个申请年级两份卷：英语 16 题、数学 12 题。测的是申请年级<strong>前一级</strong>课纲。孩子自己答。不是剑桥或考评局正式分。
        </p>
        <p className="text-sm text-muted mb-8">
          小学英语目标 CES：P2 100 · P3 120 · P4 130 · P5 140。中学英语不交 CEQ，按 AEIS 语言点摸底。数学对准 AEIS 数学。
        </p>

        <h2 className="font-serif font-semibold text-2xl mb-3">英语</h2>
        <Grid papers={ENGLISH_DIAGNOSTIC_PAPERS} />

        <h2 className="font-serif font-semibold text-2xl mt-10 mb-3">数学</h2>
        <Grid papers={MATH_DIAGNOSTIC_PAPERS} />

        <p className="text-sm mt-8">
          做完建议去{" "}
          <Link href="/trial/A2" className="text-accent font-semibold">
            小学英语试学
          </Link>
          {" / "}
          <Link href="/trial/SEC" className="text-accent font-semibold">
            中学英语试学
          </Link>
          {" / "}
          <Link href="/trial/MATH" className="text-accent font-semibold">
            小学数学试学
          </Link>
          {" / "}
          <Link href="/trial/SMATH" className="text-accent font-semibold">
            中学数学试学
          </Link>
          。
        </p>
      </main>
    </SiteChrome>
  );
}
