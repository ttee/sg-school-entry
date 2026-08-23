/**
 * Studio working CES gates for AEIS-Primary English.
 * MOE publishes the official minimum by birth year in the eligibility checker.
 * Families must verify on moe.gov.sg before applying.
 *
 * Cambridge English Scale (public handbook bands):
 *   100–119 A1 · 120–139 A2 · 140–159 B1 · 160–179 B2
 * A2 Key for Schools: Grade C from 120. Scores 100–119 are reported as A1.
 * B1 Preliminary for Schools: Grade C from 140.
 */
export const CES_GATES = [
  {
    level: "P2",
    test: "A2 Key for Schools",
    targetCes: 100,
    band: "A1 on the A2 Key paper",
    noteZh: "工作室起点：能在 Key 试卷上拿到 A1 报告分。官方核对请用 MOE 年龄工具。",
  },
  {
    level: "P3",
    test: "A2 Key for Schools",
    targetCes: 120,
    band: "A2 (Key Grade C)",
    noteZh: "工作室目标：Key 及格线 120。",
  },
  {
    level: "P4",
    test: "A2 Key for Schools",
    targetCes: 130,
    band: "A2 Key Grade C high (130+)",
    noteZh: "P4 入学摸底按 A2 Key 对照带 130+。正式考哪种 CEQ 以 MOE 年龄核对器为准。",
  },
  {
    level: "P5",
    test: "B1 Preliminary for Schools",
    targetCes: 140,
    band: "B1 (PET Grade C)",
    noteZh: "工作室目标：PET 及格线 140。",
  },
] as const;

export const MOE_LINKS = {
  aeis: "https://www.moe.gov.sg/international-students/aeis",
  eligibility: "https://www.moe.gov.sg/international-students/aeis/eligibility-criteria",
  apply: "https://www.moe.gov.sg/international-students/aeis/apply",
  a2format: "https://www.cambridgeenglish.org/exams-and-tests/key-for-schools/exam-format/",
  b1format: "https://www.cambridgeenglish.org/exams-and-tests/preliminary-for-schools/exam-format/",
  primarySyllabus: "https://www.moe.gov.sg/primary/curriculum/syllabus",
};

/** Map homework % onto a studio CES estimate. Not a Cambridge score. */
export function estimateCes(percent: number, track: "A2" | "B1" | "SEC"): number {
  const p = Math.max(0, Math.min(100, percent)) / 100;
  if (track === "A2") return Math.round(85 + p * 65); // 85–150
  if (track === "B1") return Math.round(110 + p * 60); // 110–170
  return Math.round(120 + p * 50); // 120–170 studio AEIS English
}

export function gateForLevel(level: string) {
  return CES_GATES.find((g) => g.level === level) ?? null;
}
