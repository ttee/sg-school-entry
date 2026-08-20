import Link from "next/link";
import { prisma } from "@/lib/db";

export const dynamic = 'force-dynamic';

export default async function TrialPage() {
  const trialWeeks = await prisma.week.findMany({
    where: {
      weekNumber: 0,
      isSample: true,
    },
    select: {
      id: true,
      level: true,
      title: true,
      description: true,
    },
    orderBy: {
      level: "asc",
    },
  });

  const levelOrder = ["A2", "B1", "MATH", "SEC", "SMATH"];
  const sortedWeeks = trialWeeks.sort((a, b) => 
    levelOrder.indexOf(a.level) - levelOrder.indexOf(b.level)
  );

  const levelNames: Record<string, string> = {
    A2: "A2 Key for Schools",
    B1: "B1 Preliminary for Schools",
    MATH: "AEIS 数学（小学 P2–P4）",
    SEC: "中学英语（Sec 1）",
    SMATH: "中学数学（Sec 1）",
  };

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
              <span className="text-xs text-muted tracking-wider">SG SCHOOL ENTRY</span>
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

      <main id="main" className="max-w-5xl mx-auto px-4 py-8 md:py-12">
        <div className="mb-8">
          <h1 className="font-serif font-semibold text-3xl md:text-4xl text-ink mb-3">
            免费试学周
          </h1>
          <p className="text-ink-2 mb-2">
            不用登录。先做试学周，看作业长什么样。提交账号仍走首页报名表。
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
          {sortedWeeks.map((week) => (
            <Link
              key={week.id}
              href={`/trial/${week.level}`}
              className="bg-card border border-line rounded-2xl p-6 shadow hover:border-accent hover:shadow-lg transition-all"
            >
              <h2 className="font-serif text-xl font-semibold text-ink mb-2">
                {levelNames[week.level] || week.level}
              </h2>
              <p className="text-sm text-ink-2 mb-3">
                {week.description}
              </p>
              <div className="text-accent font-semibold text-sm flex items-center gap-2">
                开始试学 →
              </div>
            </Link>
          ))}
        </div>

        <div className="bg-paper-2 border border-line rounded-xl p-6 mb-6">
          <h3 className="font-serif font-semibold text-lg text-ink mb-3">快速导航</h3>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/"
              className="text-sm text-ink-2 hover:text-ink underline"
            >
              首页
            </Link>
            <Link
              href="/assess"
              className="text-sm text-ink-2 hover:text-ink underline"
            >
              入学摸底
            </Link>
            <Link
              href="/skills"
              className="text-sm text-ink-2 hover:text-ink underline"
            >
              看技能表
            </Link>
            <Link
              href="/#contact"
              className="text-sm text-ink-2 hover:text-ink underline"
            >
              报名咨询
            </Link>
          </div>
        </div>

        <div className="bg-accent/5 border border-accent/20 rounded-xl p-5">
          <p className="text-sm text-ink-2">
            <strong className="text-ink">试学说明：</strong>
            试学周不需要登录。选择题当场看对错。要账号请回首页报名表。
          </p>
        </div>
      </main>

      <footer className="border-t border-line py-8 bg-paper">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-sm text-ink-2 mb-4 max-w-3xl">
            狮城入学（SG School Entry）与新加坡教育部（MOE）、新加坡考试与评鉴局（SEAB）、剑桥大学英语考评部（Cambridge English）均无隶属、授权或官方合作关系。本站不使用新加坡狮头国家标志，也不使用上述机构的标识。页面内容仅为路径说明，不构成录取、派位、签证或入境方面的承诺或法律意见。入学资格、考期、规则一律以各机构官网为准。
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-muted">
            <Link href="/" className="hover:text-ink transition-colors">
              狮城入学 · SG School Entry
            </Link>
            <Link href="/privacy" className="hover:text-ink transition-colors">
              隐私 / Privacy
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
