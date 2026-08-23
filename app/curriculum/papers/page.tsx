import CurriculumNav from "@/components/CurriculumNav";
import {
  FUNCTIONAL_RULE,
  CEQ_PAPERS,
  AEIS_ENGLISH,
  CORE_SKILLS,
  WEEKLY_LOOP,
} from "@/lib/curriculum/papers";
import { MOE_LINKS } from "@/lib/curriculum/thresholds";
import Link from "next/link";

export default function PapersPage() {
  return (
    <>
      <CurriculumNav current="/curriculum/papers" />
      <h1 className="font-serif font-semibold text-3xl mb-3">CEQ 与 AEIS 试卷结构</h1>
      <p className="text-ink-2 mb-4 max-w-2xl leading-relaxed">{FUNCTIONAL_RULE}</p>
      <p className="text-sm text-muted mb-8">
        {AEIS_ENGLISH.officialNow}{" "}
        <a className="text-accent underline" href={MOE_LINKS.aeis} target="_blank" rel="noreferrer">
          MOE AEIS
        </a>
      </p>

      <h2 className="font-serif font-semibold text-xl mb-3">2. CEQ（小学英语门槛，2022 起）</h2>
      <p className="text-sm text-ink-2 mb-4">
        先考 CEQ，再交成绩报 AEIS 小学数学。P2–P4 用 A2 Key for Schools；P5 用 B1 Preliminary for Schools.
      </p>
      <div className="overflow-x-auto mb-10">
        <table className="w-full text-sm border border-line rounded-xl overflow-hidden bg-card">
          <thead className="bg-accent/5">
            <tr>
              <th className="text-left px-3 py-2">申请</th>
              <th className="text-left px-3 py-2">试卷</th>
              <th className="text-left px-3 py-2">工作室最低 CES</th>
              <th className="text-left px-3 py-2">时间</th>
            </tr>
          </thead>
          <tbody>
            {CEQ_PAPERS.map((p) => (
              <tr key={p.level} className="border-t border-line align-top">
                <td className="px-3 py-2 font-semibold">{p.level}</td>
                <td className="px-3 py-2">{p.test}</td>
                <td className="px-3 py-2">{p.min}</td>
                <td className="px-3 py-2 text-ink-2">
                  {p.parts.map((x) => (
                    <div key={x.name}>
                      {x.name} {x.time}
                    </div>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="font-serif font-semibold text-xl mb-3">1. AEIS 英语（中学，现行）</h2>
      <p className="text-sm mb-2">
        <strong>时长</strong> {AEIS_ENGLISH.secondary.duration}
      </p>
      <p className="text-sm mb-2">
        <strong>{AEIS_ENGLISH.secondary.part1.name}</strong>
        {AEIS_ENGLISH.secondary.part1.words.map((w) => ` · ${w.level} ${w.band}`).join("")}
      </p>
      <p className="text-sm mb-2">
        <strong>{AEIS_ENGLISH.secondary.part2.name}</strong>
      </p>
      <ul className="list-disc pl-5 text-sm text-ink-2 mb-8">
        {AEIS_ENGLISH.secondary.part2.items.map((i) => (
          <li key={i.skill}>
            {i.skill} {i.n}
          </li>
        ))}
      </ul>

      <h2 className="font-serif font-semibold text-xl mb-3">小学语言练习卷</h2>
      <p className="text-sm text-ink-2 mb-4">{AEIS_ENGLISH.studioPrimary.why}</p>
      <div className="grid md:grid-cols-2 gap-4 mb-10">
        <div className="bg-card border border-line rounded-2xl p-5">
          <h3 className="font-semibold mb-1">P2/3 型 · {AEIS_ENGLISH.studioPrimary.p23.duration}</h3>
          <p className="text-sm text-muted mb-2">{AEIS_ENGLISH.studioPrimary.p23.total} MCQs</p>
          <ul className="text-sm space-y-1">
            {AEIS_ENGLISH.studioPrimary.p23.items.map((i) => (
              <li key={i.skill}>
                {i.skill} {i.n}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-card border border-line rounded-2xl p-5">
          <h3 className="font-semibold mb-1">P4/5 型 · {AEIS_ENGLISH.studioPrimary.p45.duration}</h3>
          <p className="text-sm mb-2">{AEIS_ENGLISH.studioPrimary.p45.part1}</p>
          <p className="text-sm text-muted mb-2">{AEIS_ENGLISH.studioPrimary.p45.part2.name}</p>
          <ul className="text-sm space-y-1">
            {AEIS_ENGLISH.studioPrimary.p45.part2.items.map((i) => (
              <li key={i.skill}>
                {i.skill} {i.n}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <h2 className="font-serif font-semibold text-xl mb-3">3. 核心技能</h2>
      <ol className="list-decimal pl-5 text-sm space-y-2 mb-8">
        {CORE_SKILLS.map((s) => (
          <li key={s.id}>
            <strong>{s.title}.</strong> {s.do}
          </li>
        ))}
      </ol>

      <h2 className="font-serif font-semibold text-xl mb-3">每周循环</h2>
      <ul className="list-disc pl-5 text-sm text-ink-2 mb-6">
        {WEEKLY_LOOP.map((w) => (
          <li key={w}>{w}</li>
        ))}
      </ul>
      <p className="text-sm">
        CEQ：限时 Reading / Writing / Listening / Speaking，卡最低 CES。AEIS 中学：限时 MCQ + 词数内作文。
        十二周计划：
        <Link href="/curriculum/ixl" className="text-accent font-semibold">
          P4 与 S1
        </Link>
        。
      </p>
    </>
  );
}
