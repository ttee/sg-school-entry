"use client";

import Link from "next/link";
import { skills, drills } from "@/lib/skills-data";

function storyHop(weekNumber: number): { href: string; text: string } {
  if (weekNumber === 0) {
    return { href: "/trial/A2", text: "先看本周故事" };
  }
  if (weekNumber === 1) {
    return { href: "/trial/A2/1", text: "先看本周故事" };
  }
  return { href: "/#contact", text: "咨询入学" };
}

export default function SkillsPage() {
  const hasSkillDrill = (skillId: string) => {
    return drills.some((d) => d.skillId === skillId);
  };

  return (
    <div className="min-h-screen bg-paper">
      <header className="sticky top-0 z-50 bg-paper border-b border-line">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-ink hover:text-accent">
            狮城入学
          </Link>
          <div className="flex gap-4">
            <Link href="/小学" className="text-accent hover:text-accent-hover font-medium">
              小学
            </Link>
            <Link href="/login" className="text-accent hover:text-accent-hover font-medium">
              登录
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-ink mb-4">小学英语会练什么</h1>
          <p className="text-lg text-ink-2 mb-2">
            对应 A2 Key for Schools 语言范围，挂在现有故事周上。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill) => {
            const hasDrill = hasSkillDrill(skill.id);
            const hop = storyHop(skill.weekNumber);

            return (
              <div
                key={skill.id}
                className="bg-card border border-line rounded-[--radius] p-6 hover:shadow-lg transition-shadow"
              >
                <div className="mb-3">
                  <h2 className="text-2xl font-bold text-ink mb-1">{skill.labelZh}</h2>
                </div>
                <div className="mb-4">
                  <span className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium">
                    {skill.weekLabel}
                  </span>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href={hop.href}
                    className="inline-flex items-center justify-center px-6 py-2 bg-accent text-accent-ink font-medium rounded-[--radius] hover:bg-accent-hover transition-colors"
                  >
                    {hop.text}
                  </Link>
                  {hasDrill && (
                    <Link
                      href={`/skills/${skill.id}`}
                      className="inline-flex items-center justify-center px-6 py-2 bg-transparent text-ink border border-accent font-medium rounded-[--radius] hover:bg-accent/10 transition-colors"
                    >
                      练一练
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 p-6 bg-warn-bg border border-line rounded-[--radius]">
          <h2 className="text-xl font-bold text-warn-ink mb-2">说明</h2>
          <ul className="text-warn-ink space-y-1 text-sm">
            <li>• 对应 A2 Key for Schools 语言范围，挂在现有故事周上</li>
            <li>• 试学周和第 1 周打开就能看</li>
            <li>• 入学请留下微信号，顾问联系您</li>
          </ul>
        </div>
      </main>

      <footer className="mt-16 border-t border-line bg-card">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold text-ink mb-3">狮城入学</h3>
              <p className="text-sm text-muted">
                来新加坡入读私立学校，从容应对 CEQ、AEIS 入学考。
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-ink mb-3">快速链接</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/" className="text-accent hover:text-accent-hover">
                    首页
                  </Link>
                </li>
                <li>
                  <Link href="/trial" className="text-accent hover:text-accent-hover">
                    免费试学
                  </Link>
                </li>
                <li>
                  <Link href="/guide" className="text-accent hover:text-accent-hover">
                    升学向导
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-ink mb-3">联系</h3>
              <p className="text-sm text-muted">PayNow 94594601</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
