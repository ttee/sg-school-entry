import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-paper">
      <div className="text-center max-w-lg">
        <h1 className="font-serif font-semibold text-4xl md:text-5xl text-ink mb-4">
          找不到这一页
        </h1>
        <p className="text-ink-2 mb-8">
          您访问的页面不存在或已被移除。
        </p>
        <div className="flex flex-wrap gap-3 justify-center mb-6">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 bg-accent text-accent-ink font-semibold rounded-full hover:bg-accent-hover transition-colors"
          >
            回首页
          </Link>
          <Link
            href="/trial/A2"
            className="inline-flex items-center justify-center px-6 py-3 bg-transparent text-ink border border-line font-semibold rounded-full hover:border-ink-2 hover:bg-card transition-colors"
          >
            免费试学
          </Link>
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center px-6 py-3 bg-transparent text-ink border border-line font-semibold rounded-full hover:border-ink-2 hover:bg-card transition-colors"
          >
            报名咨询
          </Link>
        </div>
        <p className="text-sm text-muted">
          或者尝试 <Link href="/trial" className="text-accent hover:underline">中学试学</Link>
        </p>
      </div>
    </div>
  );
}
