import Link from "next/link";
import CurriculumNav from "@/components/CurriculumNav";
import { CES_GATES, MOE_LINKS } from "@/lib/curriculum/thresholds";

const PILLARS = [
  {
    href: "/curriculum/diagnostic",
    title: "1. 摸底与量表",
    body: "P2–P5 对照 CES 目标，中学对照 AEIS 语言点。做完对照错误矩阵。",
  },
  {
    href: "/curriculum/sow",
    title: "2. 周进度与词汇语法",
    body: "12 周把作业、课纲技能、剑桥/AEIS 题型钉在同一周。",
  },
  {
    href: "/curriculum/writing",
    title: "3. 试卷训练包",
    body: "中学作文框架、A2/B1 口语量表、限时 OAS 卷。",
  },
  {
    href: "/curriculum/guide",
    title: "4. 家长工具",
    body: "简体中文路径说明、术语表、成绩追踪表。",
  },
];

export default function CurriculumHome() {
  return (
    <>
      <CurriculumNav current="/curriculum" />
      <p className="text-xs font-semibold tracking-widest uppercase text-accent mb-2">
        给中国家庭的入学课纲
      </p>
      <h1 className="font-serif font-semibold text-3xl md:text-4xl mb-4">
        CEQ 与 AEIS 课程体系
      </h1>
      <p className="text-ink-2 mb-6 max-w-2xl leading-relaxed">
        小学先过英语，再到新加坡考数学。中学英语写一篇再做五十题，数学不给计算器。申请几年级，就按前一年级来练。
      </p>

      <div className="grid sm:grid-cols-2 gap-3 mb-8">
        {[
          { href: "/curriculum/diagnostic/p4", label: "1a P4 摸底 · postpone = put off" },
          { href: "/curriculum/errors", label: "1b 时态 / 冠词 / 搭配矩阵" },
          { href: "/curriculum/papers", label: "试卷结构 · CEQ 时间 + AEIS 50 题" },
          { href: "/curriculum/ixl", label: "P4 / S1 十二周计划" },
          { href: "/curriculum/stories", label: "校园课文 · 开口与语法" },
          { href: "/curriculum/context", label: "新加坡语境 · 家长中英词表" },
          { href: "/curriculum/sow", label: "2a P4 W3 · G.2 + V.1" },
          { href: "/curriculum/grammar/linkers", label: "2b however / therefore / in addition" },
          { href: "/curriculum/writing", label: "3a S1 三段作文 200–300" },
          { href: "/curriculum/speaking", label: "3b B1 照片 1 分钟" },
          { href: "/curriculum/tracker", label: "4a Li Wei / Zhang Min 成绩表" },
          { href: "/curriculum/guide", label: "4b 家长摘要（简体）" },
        ].map((x) => (
          <Link
            key={x.href}
            href={x.href}
            className="text-sm px-4 py-3 bg-card border border-line rounded-xl hover:border-accent"
          >
            {x.label}
          </Link>
        ))}
      </div>

      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm border border-line rounded-xl overflow-hidden bg-card">
          <thead className="bg-accent/5">
            <tr>
              <th className="text-left px-3 py-2">申请年级</th>
              <th className="text-left px-3 py-2">CEQ 试卷</th>
              <th className="text-left px-3 py-2">工作室目标 CES</th>
              <th className="text-left px-3 py-2">量表带</th>
            </tr>
          </thead>
          <tbody>
            {CES_GATES.map((g) => (
              <tr key={g.level} className="border-t border-line">
                <td className="px-3 py-2 font-semibold">{g.level}</td>
                <td className="px-3 py-2">{g.test}</td>
                <td className="px-3 py-2">&gt; {g.targetCes}</td>
                <td className="px-3 py-2 text-ink-2">{g.band}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-muted mb-8">
        官方最低分请用{" "}
        <a className="text-accent underline" href={MOE_LINKS.eligibility} target="_blank" rel="noreferrer">
          MOE 年龄核对器
        </a>
        核对。本表是工作室教学对照带。
      </p>

      <div className="grid md:grid-cols-2 gap-4 mb-10">
        {PILLARS.map((p) => (
          <Link
            key={p.href}
            href={p.href}
            className="bg-card border border-line rounded-2xl p-5 hover:border-accent transition-colors"
          >
            <h2 className="font-serif font-semibold text-lg mb-2">{p.title}</h2>
            <p className="text-sm text-ink-2 leading-relaxed">{p.body}</p>
          </Link>
        ))}
      </div>

      <div className="flex flex-wrap gap-3">
        <Link href="/trial/A2" className="px-5 py-2.5 bg-accent text-accent-ink rounded-full font-semibold">
          小学英语试学
        </Link>
        <Link href="/trial/SEC" className="px-5 py-2.5 border border-accent rounded-full font-semibold">
          中学英语试学
        </Link>
        <Link href="/assess" className="px-5 py-2.5 border border-line rounded-full font-semibold text-ink-2">
          P2–S3 英语/数学摸底
        </Link>
      </div>
    </>
  );
}
