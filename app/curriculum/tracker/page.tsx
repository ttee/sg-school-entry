"use client";

import { useEffect, useState } from "react";
import CurriculumNav from "@/components/CurriculumNav";
import { CES_GATES } from "@/lib/curriculum/thresholds";
import { DIAGNOSTIC_PAPERS } from "@/lib/curriculum/diagnostics";
import { MOCKS } from "@/lib/curriculum/mocks";
import { loadPaperResult, type PaperResult } from "@/components/McqPaper";

type DashRow = {
  name: string;
  level: string;
  ceq: string;
  grammar: string;
  ixl: "Y" | "N" | "";
  status: string;
};

const SAMPLE: DashRow[] = [
  {
    name: "Li Wei",
    level: "Primary 4",
    ceq: "124 / 130",
    grammar: "68%",
    ixl: "N",
    status: "Needs Cloze Drill",
  },
  {
    name: "Zhang Min",
    level: "Secondary 1",
    ceq: "N/A (CEQ Passed)",
    grammar: "82%",
    ixl: "Y",
    status: "Ready for AEIS Mock",
  },
];

export default function TrackerPage() {
  const [rows, setRows] = useState<DashRow[]>(SAMPLE);
  const [papers, setPapers] = useState<PaperResult[]>([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("sge-dashboard");
      if (raw) setRows(JSON.parse(raw) as DashRow[]);
    } catch {
      /* ignore */
    }
    const ids = [...DIAGNOSTIC_PAPERS, ...MOCKS].map((p) => p.id);
    setPapers(ids.map(loadPaperResult).filter((x): x is PaperResult => Boolean(x)));
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("sge-dashboard", JSON.stringify(rows));
    } catch {
      /* ignore */
    }
  }, [rows]);

  return (
    <>
      <CurriculumNav current="/curriculum/tracker" />
      <h1 className="font-serif font-semibold text-3xl mb-3">Student Score Tracking Dashboard</h1>
      <p className="text-ink-2 mb-6 max-w-2xl">
        样例行是 Li Wei（P4，CES 124/130，需完形）和 Zhang Min（S1，语法 82%，可开 AEIS 模拟）。
        改名字会存在本机。登录作业分在「进度」页。
      </p>

      <p className="text-xs text-muted mb-3">
        P4 工作室目标 CES 130+（A2 Key）。官方分以 MOE 核对器为准。
      </p>

      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm border border-line rounded-xl overflow-hidden bg-card min-w-[800px]">
          <thead className="bg-accent/5">
            <tr>
              <th className="text-left px-2 py-2">Student Name</th>
              <th className="text-left px-2 py-2">Target Level</th>
              <th className="text-left px-2 py-2">CEQ Mock Score (Scale)</th>
              <th className="text-left px-2 py-2">AEIS Grammar %</th>
              <th className="text-left px-2 py-2">IXL Target Met</th>
              <th className="text-left px-2 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} className="border-t border-line">
                {(
                  [
                    ["name", "name"],
                    ["level", "level"],
                    ["ceq", "ceq"],
                    ["grammar", "grammar"],
                    ["ixl", "ixl"],
                    ["status", "status"],
                  ] as const
                ).map(([k]) => (
                  <td key={k} className="px-1 py-1">
                    {k === "ixl" ? (
                      <select
                        value={r.ixl}
                        onChange={(e) => {
                          const next = rows.map((row, j) =>
                            j === i ? { ...row, ixl: e.target.value as DashRow["ixl"] } : row
                          );
                          setRows(next);
                        }}
                        className="w-full bg-paper border border-line rounded px-2 py-1"
                      >
                        <option value="">—</option>
                        <option value="Y">Y</option>
                        <option value="N">N</option>
                      </select>
                    ) : (
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
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex flex-wrap gap-3 mb-8">
        <button
          type="button"
          onClick={() =>
            setRows([
              ...rows,
              { name: "", level: "Primary 4", ceq: "", grammar: "", ixl: "", status: "" },
            ])
          }
          className="px-4 py-2 border border-accent rounded-full text-sm font-semibold"
        >
          Add student
        </button>
        <button
          type="button"
          onClick={() => setRows(SAMPLE)}
          className="px-4 py-2 border border-line rounded-full text-sm"
        >
          Reset sample
        </button>
        <button
          type="button"
          onClick={() => window.print()}
          className="px-4 py-2 bg-accent text-accent-ink rounded-full text-sm font-semibold"
        >
          Print
        </button>
      </div>

      {papers.length > 0 && (
        <>
          <h2 className="font-serif font-semibold text-lg mb-2">This browser’s papers</h2>
          <ul className="text-sm space-y-1 mb-6">
            {papers.map((p) => (
              <li key={p.id}>
                {p.titleZh} · {p.percent}%
                {p.ces != null ? ` · CES≈${p.ces}` : ""}
                {p.targetCes != null ? ` / ${p.targetCes}` : ""}
              </li>
            ))}
          </ul>
        </>
      )}

      <p className="text-xs text-muted">
        Gates: {CES_GATES.map((g) => `${g.level} ${g.targetCes}+`).join(" · ")}
      </p>
    </>
  );
}
