"use client";

import Link from "next/link";

const LINKS = [
  { href: "/curriculum", label: "总览" },
  { href: "/curriculum/diagnostic", label: "摸底" },
  { href: "/curriculum/errors", label: "错误矩阵" },
  { href: "/curriculum/papers", label: "试卷结构" },
  { href: "/curriculum/sow", label: "进度表" },
  { href: "/curriculum/ixl", label: "IXL" },
  { href: "/curriculum/vocab", label: "词汇" },
  { href: "/curriculum/grammar", label: "语法" },
  { href: "/curriculum/writing", label: "作文" },
  { href: "/curriculum/speaking", label: "听说" },
  { href: "/curriculum/mocks", label: "限时卷" },
  { href: "/curriculum/tracker", label: "成绩表" },
  { href: "/curriculum/guide", label: "家长手册" },
];

export default function CurriculumNav({ current }: { current?: string }) {
  return (
    <nav className="flex flex-wrap gap-2 mb-8">
      {LINKS.map((l) => (
        <Link
          key={l.href}
          href={l.href}
          className={
            current === l.href
              ? "text-xs px-3 py-1.5 rounded-full bg-accent text-accent-ink font-semibold"
              : "text-xs px-3 py-1.5 rounded-full border border-line text-ink-2 hover:border-accent"
          }
        >
          {l.label}
        </Link>
      ))}
    </nav>
  );
}
