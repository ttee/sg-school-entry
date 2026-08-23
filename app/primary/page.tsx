import Link from "next/link";

export const metadata = {
  title: "小学 · 狮城入学",
  description: "来新加坡入学。英语冲 CEQ，数学考 AEIS。",
  openGraph: {
    title: "小学 · 狮城入学",
    description: "来新加坡入学。英语冲 CEQ，数学考 AEIS。",
    url: "https://sg-school-entry.vercel.app/小学",
    siteName: "狮城入学",
    locale: "zh_CN",
    type: "website",
  },
};

export default function PrimaryPage() {
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
            <div className="flex flex-col leading-tight">
              <strong className="font-serif font-semibold text-ink tracking-wide">狮城入学</strong>
            </div>
          </Link>
          <Link
            href="/"
            className="text-sm text-muted hover:text-ink transition-colors"
          >
            返回首页
          </Link>
        </div>
      </header>

      <main id="main">
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="font-serif font-semibold text-3xl md:text-5xl leading-tight tracking-tight mb-4 max-w-4xl">
              小学
            </h1>
            <p className="text-ink-2 mb-6 max-w-2xl">
              来新加坡入读私立学校。英语冲剑桥 CEQ，数学考 AEIS。
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/trial/A2"
                className="inline-flex items-center justify-center px-6 py-3.5 bg-accent text-accent-ink font-semibold rounded-full hover:bg-accent-hover transition-colors text-base"
              >
                英语试学
              </Link>
              <Link
                href="/skills"
                className="inline-flex items-center justify-center px-6 py-3.5 bg-transparent text-ink border border-accent font-semibold rounded-full hover:bg-accent/10 transition-colors text-base"
              >
                英语会练什么
              </Link>
              <Link
                href="/curriculum"
                className="inline-flex items-center justify-center px-6 py-3.5 bg-transparent text-ink border border-line font-semibold rounded-full hover:bg-accent/10 transition-colors text-base"
              >
                CEQ 课纲与摸底
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-line py-8 bg-paper">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap gap-4 text-sm text-muted">
            <Link href="/" className="hover:text-ink transition-colors">
              狮城入学
            </Link>
            <Link href="/privacy" className="hover:text-ink transition-colors">
              隐私政策
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
