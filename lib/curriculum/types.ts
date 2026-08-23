export type Track = "A2" | "B1" | "SEC" | "MATH" | "SMATH";

export type PaperSubject = "english" | "math";

export type McqSkill =
  | "rc"
  | "cloze"
  | "vocab"
  | "grammar"
  | "spelling"
  | "number"
  | "word"
  | "measure"
  | "data"
  | "algebra"
  | "geometry";

export const SKILL_LABEL_ZH: Record<McqSkill, string> = {
  rc: "理解",
  cloze: "完形",
  vocab: "词汇",
  grammar: "语法",
  spelling: "拼写",
  number: "计算",
  word: "应用题",
  measure: "度量",
  data: "图表",
  algebra: "代数",
  geometry: "几何",
};

export type McqItem = {
  id: string;
  prompt: string;
  options: string[];
  correct: number;
  errorId: string;
  why: string;
  highlight?: string;
  skill?: McqSkill;
};

export type Paper = {
  id: string;
  titleZh: string;
  blurb: string;
  track: Track;
  intended: string;
  targetCes: number | null;
  minutes: number;
  items: McqItem[];
  subject?: PaperSubject;
};

export type SowRow = {
  week: number;
  titleZh: string;
  errorFocus: string;
  skillId: string | null;
  ixlCode: string;
  ixlFamily: string;
  ixlCodes?: string[];
  examPart: string;
  homework: string;
  deliverable?: string;
};

export type VocabModule = {
  id: string;
  titleZh: string;
  use: string;
  items: { word: string; example: string; noteZh: string }[];
};

export type GrammarSheet = {
  id: string;
  titleZh: string;
  yieldZh: string;
  ruleZh: string;
  items: McqItem[];
};
