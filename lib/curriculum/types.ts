export type Track = "A2" | "B1" | "SEC";

export type McqItem = {
  id: string;
  prompt: string;
  options: string[];
  correct: number;
  errorId: string;
  why: string;
  highlight?: string;
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
