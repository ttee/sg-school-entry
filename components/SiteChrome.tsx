"use client";

import Link from "next/link";
import { useState } from "react";

const NAV = [
  { href: "/小学", label: "小学" },
  { href: "/中学", label: "中学" },
  { href: "/curriculum", label: "课程" },
  { href: "/#contact", label: "咨询" },
];

export default function SiteChrome({
  children,
  current,
}: {
  children: React.ReactNode;
  current?: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <a
        className="absolute left-3 -top-12 bg-ink text-paper px-3 py-2 z-50 focus:top-3"
        href="#main"
      >
        跳到正文
      </a>
      <header className="sticky top-0 z-40 bg-paper/95 backdrop-blur-md border-b border-line">
        <div className="max-w-7xl mx-auto px-4 min-h-14 flex items-center gap-4 md:gap-6">
          <Link href="/" className="flex items-center gap-2.5 mr-auto">
            <svg className="w-8 h-8 text-accent flex-none" viewBox="0 0 32 32" aria-hidden="true">
              <rect x="1" y="1" width="30" height="30" rx="7" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <path d="M8 24V11h16v13" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
              <path d="M13 24V15h6v9" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
            </svg>
            <strong className="font-serif font-semibold text-ink tracking-wide">狮城入学</strong>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={
                  current === item.href
                    ? "text-ink font-semibold"
                    : "text-ink-2 hover:text-ink transition-colors font-medium"
                }
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link href="/login" className="text-sm text-muted hover:text-ink transition-colors">
            登录
          </Link>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="md:hidden flex items-center text-ink-2"
            aria-label="菜单"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        {open && (
          <div className="md:hidden border-t border-line bg-paper px-4 py-3 space-y-3">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block text-ink-2 font-medium"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </header>
      {children}
      <footer className="border-t border-line py-8 bg-paper">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-xs text-muted mb-3 max-w-3xl leading-relaxed">
            本站是升学工作室教材，与教育部、考评局、剑桥均无隶属关系。CEQ
            门槛分以 MOE 年龄核对器为准；此处量表是工作室摸底估计，不能代替官方成绩单。
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-muted">
            <Link href="/" className="hover:text-ink">狮城入学</Link>
            <Link href="/curriculum" className="hover:text-ink">课程</Link>
            <Link href="/curriculum/guide" className="hover:text-ink">家长手册</Link>
            <Link href="/privacy" className="hover:text-ink">隐私政策</Link>
          </div>
        </div>
      </footer>
    </>
  );
}
