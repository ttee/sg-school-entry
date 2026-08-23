import { ENGLISH_DIAGNOSTIC_PAPERS, getPaper } from "./diagnostics";
import { MATH_DIAGNOSTIC_PAPERS } from "./math-diagnostics";
import { balancedSlice } from "./mcq";
import type { McqItem, Paper } from "./types";

export const APPLICATION_LEVELS = [
  { value: "P2", label: "P2（小二）", group: "primary" as const },
  { value: "P3", label: "P3（小三）", group: "primary" as const },
  { value: "P4", label: "P4（小四）", group: "primary" as const },
  { value: "P5", label: "P5（小五）", group: "primary" as const },
  { value: "Sec1", label: "Sec 1（中一）", group: "secondary" as const },
  { value: "Sec2", label: "Sec 2（中二）", group: "secondary" as const },
  { value: "Sec3", label: "Sec 3（中三）", group: "secondary" as const },
];

const ENGLISH_ID: Record<string, string> = {
  P2: "p2",
  P3: "p3",
  P4: "p4",
  P5: "p5",
  Sec1: "s1",
  Sec2: "s2",
  Sec3: "s3",
};

const MATH_ID: Record<string, string> = {
  P2: "math-p2",
  P3: "math-p3",
  P4: "math-p4",
  P5: "math-p5",
  Sec1: "math-s1",
  Sec2: "math-s2",
  Sec3: "math-s3",
};

export function englishPaperId(level: string) {
  return ENGLISH_ID[level] ?? "p2";
}

export function mathPaperId(level: string) {
  return MATH_ID[level] ?? "math-p2";
}

export function papersForApplication(level: string): {
  english: Paper;
  math: Paper;
} {
  const english = getPaper(englishPaperId(level)) ?? ENGLISH_DIAGNOSTIC_PAPERS[0];
  const math =
    MATH_DIAGNOSTIC_PAPERS.find((p) => p.id === mathPaperId(level)) ??
    MATH_DIAGNOSTIC_PAPERS[0];
  return { english, math };
}

export function guideQuizForLevel(level: string): {
  english: McqItem[];
  math: McqItem[];
  englishPaper: Paper;
  mathPaper: Paper;
} {
  const { english, math } = papersForApplication(level);
  return {
    english: balancedSlice(english.items, 8),
    math: balancedSlice(math.items, 8),
    englishPaper: english,
    mathPaper: math,
  };
}

export function trialForLevel(
  level: string,
  englishRate: number,
  mathRate: number
): { weekTitle: string; weekUrl: string; pathway: string } {
  const isPrimary = level.startsWith("P");
  const isP5 = level === "P5";
  if (isPrimary) {
    const pathway = "小学路径 · CEQ 英语 + AEIS 数学";
    if (englishRate <= 0.5) {
      return { weekTitle: "A2 试学周", weekUrl: "/trial/A2", pathway };
    }
    if (mathRate <= 0.5) {
      return { weekTitle: "MATH 试学周", weekUrl: "/trial/MATH", pathway };
    }
    if (isP5 && englishRate >= 0.75) {
      return { weekTitle: "B1 试学周", weekUrl: "/trial/B1", pathway };
    }
    return { weekTitle: "A2 试学周", weekUrl: "/trial/A2", pathway };
  }
  const pathway = "中学路径 · AEIS 英语 + 数学";
  if (englishRate < mathRate) {
    return { weekTitle: "SEC 试学周", weekUrl: "/trial/SEC", pathway };
  }
  return { weekTitle: "SMATH 试学周", weekUrl: "/trial/SMATH", pathway };
}
