"use client";

import Link from "next/link";
import { skills } from "@/lib/skills-data";

export default function SkillsPage() {
  return (
    <div className="min-h-screen bg-paper">
      <header className="sticky top-0 z-50 bg-paper border-b border-line">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-ink hover:text-accent">
            狮城入学
          </Link>
          <div className="flex gap-4">
            <Link href="/trial" className="text-accent hover:text-accent-hover font-medium">
              免费试学
            </Link>
            <Link href="/learn" className="text-accent hover:text-accent-hover font-medium">
              登录
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-ink mb-4">本周能练的 CEQ 技能</h1>
          <p className="text-lg text-ink-2 mb-2">
            对应 A2 Key for Schools 语言范围，挂在现有故事周上。
          </p>
          <p className="text-sm text-muted">
            非官方机构。本页技能点对应剑桥 A2 Key for Schools 考试手册（2020 年起）语言规范 + ALTE Can Do 描述，
            挂在 Mei 故事周上供额外练习。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="bg-card border border-line rounded-[--radius] p-6 hover:shadow-lg transition-shadow"
            >
              <div className="mb-3">
                <h2 className="text-2xl font-bold text-ink mb-1">{skill.labelZh}</h2>
                <p className="text-sm text-muted">{skill.labelEn}</p>
              </div>
              <div className="mb-4">
                <span className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium">
                  {skill.weekLabel}
                </span>
              </div>
              <Link
                href={`/skills/${skill.id}`}
                className="inline-block bg-accent text-accent-ink px-6 py-2 rounded-[--radius] font-medium hover:bg-accent-hover transition-colors"
              >
                练一练
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-warn-bg border border-line rounded-[--radius]">
          <h2 className="text-xl font-bold text-warn-ink mb-2">说明</h2>
          <ul className="text-warn-ink space-y-1 text-sm">
            <li>• 本页技能对应剑桥 A2 Key for Schools 考试语言规范（非官方完整大纲）</li>
            <li>• 练习题原创，重用已有 Mei 故事内容</li>
            <li>• 可免费访问，无需登录</li>
            <li>• 点击"练一练"进入对应技能练习</li>
          </ul>
        </div>
      </main>

      <footer className="mt-16 border-t border-line bg-card">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold text-ink mb-3">狮城入学</h3>
              <p className="text-sm text-muted">
                CEQ（A2/B1）及 AEIS 数学英语备考
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
              <p className="text-sm text-muted">PayNow UEN: 94594601</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
