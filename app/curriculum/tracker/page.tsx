"use client";

import { useEffect, useMemo, useState } from "react";
import CurriculumNav from "@/components/CurriculumNav";
import { CES_GATES } from "@/lib/curriculum/thresholds";
import { DIAGNOSTIC_PAPERS } from "@/lib/curriculum/diagnostics";
import { MOCKS } from "@/lib/curriculum/mocks";
import { loadPaperResult, type PaperResult } from "@/components/McqPaper";

const LEVELS = ["P2", "P3", "P4", "P5", "Sec 1", "Sec 2", "Sec 3"] as const;

type Row = {
  week: string;
  ixl: string;
  mcq: string;
  essay: string;
  note: string;
};

const EMPTY_ROWS: Row[] = Array.from({ length: 12 }, (_, i) => ({
  week: i === 0 ? "试学周" : `第 ${i} 周`,
  ixl: "",
  mcq: "",
  essay: "",
  note: "",
}));

export default function TrackerPage() {
  const [name, setName] = useState("");
  const [level, setLevel] = useState<(typeof LEVELS)[number]>("P3");
  const [rows, setRows] = useState<Row[]>(EMPTY_ROWS);
  const [papers, setPapers] = useState<PaperResult[]>([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("sge-tracker");
      if (raw) {
        const parsed = JSON.parse(raw) as { name?: string; level?: string; rows?: Row[] };
        if (parsed.name) setName(parsed.name);
        if (parsed.level && LEVELS.includes(parsed.level as (typeof LEVELS)[number])) {
          setLevel(parsed.level as (typeof LEVELS)[number]);
        }
        if (parsed.rows?.length) setRows(parsed.rows);
      }
    } catch {
      /* ignore */
    }
    const ids = [...DIAGNOSTIC_PAPERS, ...MOCKS].map((p) => p.id);
    setPapers(ids.map(loadPaperResult).filter((x): x is PaperResult => Boolean(x)));
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("sge-tracker", JSON.stringify({ name, level, rows }));
    } catch {
      /* ignore */
    }
  }, [name, level, rows]);

  const gate = CES_GATES.find((g) => g.level === level);
  const latestCes = useMemo(() => {
    const withCes = papers.filter((p) => p.ces != null);
    return withCes.length ? withCes[withCes.length - 1] : null;
  }, [papers]);

  return (
    <>
      <CurriculumNav current="/curriculum/tracker" />
      <h1 className="font-serif font-semibold text-3xl mb-3">成绩追踪表</h1>
      <p className="text-ink-2 mb-6 max-w-2xl">
        存在这台设备的浏览器里，方便家长截图发顾问。登录账号的每周作业分在「进度」页。
      </p>

      <div className="grid md:grid-cols-3 gap-3 mb-6">
        <label className="text-sm">
          孩子称呼
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 w-full border border-line rounded-lg px-3 py-2 bg-card"
          />
        </label>
        <label className="text-sm">
          申请年级
          <select
            value={level}
            onChange={(e) => setLevel(e.target.value as (typeof LEVELS)[number])}
            className="mt-1 w-full border border-line rounded-lg px-3 py-2 bg-card"
          >
            {LEVELS.map((l) => (
              <option key={l}>{l}</option>
            ))}
          </select>
        </label>
        <div className="text-sm bg-card border border-line rounded-lg px-3 py-2">
          <p className="text-muted">工作室目标 CES</p>
          <p className="font-serif text-xl font-semibold">
            {gate ? `> ${gate.targetCes}` : "中学看 AEIS 英语，不交 CEQ"}
          </p>
        </div>
      </div>

      {latestCes && (
        <p className="text-sm mb-6">
          最近一次摸底/限时卷估计 CES <strong>{latestCes.ces}</strong>（{latestCes.titleZh}，
          {latestCes.percent}%）
        </p>
      )}

      <h2 className="font-serif font-semibold text-lg mb-2">本机已交的卷</h2>
      {papers.length === 0 ? (
        <p className="text-sm text-muted mb-6">还没有交过摸底或限时卷。</p>
      ) : (
        <ul className="text-sm mb-6 space-y-1">
          {papers.map((p) => (
            <li key={p.id}>
              {p.titleZh} · {p.percent}%
              {p.ces != null ? ` · CES≈${p.ces}` : ""} · {p.date.slice(0, 10)}
            </li>
          ))}
        </ul>
      )}

      <h2 className="font-serif font-semibold text-lg mb-2">12 周手工记录</h2>
      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm border border-line rounded-xl overflow-hidden bg-card min-w-[720px]">
          <thead className="bg-accent/5">
            <tr>
              <th className="text-left px-2 py-2">周</th>
              <th className="text-left px-2 py-2">IXL / 技能钻 %</th>
              <th className="text-left px-2 py-2">作业 MCQ</th>
              <th className="text-left px-2 py-2">作文词数/评</th>
              <th className="text-left px-2 py-2">备注</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={r.week} className="border-t border-line">
                <td className="px-2 py-1 whitespace-nowrap">{r.week}</td>
                {(["ixl", "mcq", "essay", "note"] as const).map((k) => (
                  <td key={k} className="px-1 py-1">
                    <input
                      value={r[k]}
                      onChange={(e) => {
                        const next = rows.map((row, j) =>
                          j === i ? { ...row, [k]: e.target.value } : row
                        );
                        setRows(next);
                      }}
                      className="w-full bg-paper border border-line rounded px-2 py-1"
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button
        type="button"
        onClick={() => window.print()}
        className="px-5 py-2.5 bg-accent text-accent-ink rounded-full font-semibold"
      >
        打印 / 存 PDF
      </button>
    </>
  );
}
