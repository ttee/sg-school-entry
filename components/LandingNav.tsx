"use client";

import Link from "next/link";
import { useState } from "react";

const LINKS = [
  { href: "/trial/A2", label: "试学" },
  { href: "/assess", label: "摸底" },
  { href: "/curriculum/stories", label: "课文" },
  { href: "/curriculum/context", label: "语境" },
  { href: "/#pricing", label: "入学" },
  { href: "/#contact", label: "咨询" },
];

export default function LandingNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-paper/95 backdrop-blur-md border-b border-line">
      <div className="max-w-7xl mx-auto px-4 min-h-14 flex items-center gap-4">
        <Link href="/" className="flex items-center gap-2.5 mr-auto">
          <svg className="w-8 h-8 text-accent flex-none" viewBox="0 0 32 32" aria-hidden="true">
            <rect x="1" y="1" width="30" height="30" rx="7" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <path d="M8 24V11h16v13" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
            <path d="M13 24V15h6v9" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
          </svg>
          <div className="flex flex-col leading-tight">
            <strong className="font-serif font-semibold text-ink tracking-wide">狮城入学</strong>
            <span className="text-[10px] text-muted tracking-wider">SG SCHOOL ENTRY</span>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-5 text-sm">
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="text-ink-2 hover:text-ink font-medium">
              {l.label}
            </Link>
          ))}
        </nav>
        <Link href="/login" className="text-sm text-muted hover:text-ink">
          登录
        </Link>
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="md:hidden text-ink-2"
          aria-label="菜单"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-line px-4 py-3 space-y-3 bg-paper">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="block text-ink-2 font-medium"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
