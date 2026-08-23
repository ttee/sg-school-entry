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
    body: "12 周 SOW 把作业、IXL 族谱代码、剑桥/AEIS 题型钉在同一周。",
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
        小学先过剑桥英语门槛，再考 AEIS 数学。中学直接考 AEIS 英语和数学。
        下面四块对应顾问课表；试学周现在就能做。
      </p>

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
          5 分钟快速筛
        </Link>
      </div>
    </>
  );
}
