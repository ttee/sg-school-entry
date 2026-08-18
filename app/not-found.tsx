import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-paper">
      <div className="text-center">
        <h1 className="font-serif font-semibold text-4xl md:text-5xl text-ink mb-4">
          找不到这一页
        </h1>
        <p className="text-ink-2 mb-8 max-w-md">
          您访问的页面不存在或已被移除。
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 bg-accent text-accent-ink font-semibold rounded-full hover:bg-accent-hover transition-colors"
        >
          回首页
        </Link>
      </div>
    </div>
  );
}
