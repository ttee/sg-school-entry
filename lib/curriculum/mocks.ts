import type { Paper } from "./types";
import { DIAGNOSTIC_PAPERS } from "./diagnostics";

/** Timed studio mocks. Original items; not SEAB/Cambridge papers. */
export const MOCKS: Paper[] = [
  {
    id: "a2-mock",
    titleZh: "A2 Key 限时语言卷（工作室缩小版）",
    blurb: "20 题 / 25 分钟。对准 Reading 4–5 + 语法。官方 Key 还含听力、写作、口语，需另约。",
    track: "A2",
    intended: "P2–P4",
    targetCes: 120,
    minutes: 25,
    items: [
      ...DIAGNOSTIC_PAPERS[0].items,
      ...DIAGNOSTIC_PAPERS[1].items.slice(0, 8),
    ],
  },
  {
    id: "b1-mock",
    titleZh: "B1 Preliminary 限时语言卷（工作室缩小版）",
    blurb: "20 题 / 30 分钟。对准 B1 语法与篇章逻辑。官方 PET 另有阅读长文、写作、听力、口语。",
    track: "B1",
    intended: "P4–P5",
    targetCes: 140,
    minutes: 30,
    items: [
      ...DIAGNOSTIC_PAPERS[2].items,
      ...DIAGNOSTIC_PAPERS[3].items.slice(0, 8),
    ],
  },
  {
    id: "sec-mock",
    titleZh: "AEIS 英语语言 MCQ（工作室 25 题）",
    blurb: "25 题 / 25 分钟，OAS 四选一。全卷常见约 50 题语言/理解；作文另计时。以当年 SEAB 说明为准。",
    track: "SEC",
    intended: "Sec 1–3",
    targetCes: null,
    minutes: 25,
    items: [
      ...DIAGNOSTIC_PAPERS[4].items,
      {
        id: "m-s-17",
        prompt: "There is ___ milk left. We should buy more.",
        options: ["a few", "few", "a little", "many"],
        correct: 2,
        errorId: "quantifiers",
        why: "milk 不可数：a little。",
      },
      {
        id: "m-s-18",
        prompt: "If you ___ late, wait at the office. (possible, not every day)",
        options: ["are", "will be", "were", "being"],
        correct: 0,
        errorId: "if-when",
        why: "if + 现在时。",
      },
      {
        id: "m-s-19",
        prompt: "The homework ___ on the teacher's desk.",
        options: ["are", "is", "were", "have"],
        correct: 1,
        errorId: "quantifiers",
        why: "homework 不可数，动词用 is。",
      },
      {
        id: "m-s-20",
        prompt: "We have to ___ sports shoes for PE.",
        options: ["wearing", "wear", "to wear", "wore"],
        correct: 1,
        errorId: "modals",
        why: "have to + 原形。",
      },
      {
        id: "m-s-21",
        prompt: "I prefer walking ___ taking the bus.",
        options: ["than", "to", "from", "and"],
        correct: 1,
        errorId: "collocation",
        why: "prefer A to B。",
      },
      {
        id: "m-s-22",
        prompt: "___ the fact that it rained, PE went ahead in the hall.",
        options: ["Although", "Despite", "Because", "So"],
        correct: 1,
        errorId: "although-but",
        why: "despite the fact that。",
      },
      {
        id: "m-s-23",
        prompt: "She asked me where the canteen ___.",
        options: ["is", "was", "be", "being"],
        correct: 1,
        errorId: "reported",
        why: "转述问句：where the canteen was。",
      },
      {
        id: "m-s-24",
        prompt: "A few students ___ still in the queue.",
        options: ["is", "was", "are", "has"],
        correct: 2,
        errorId: "sva-everyone",
        why: "students 复数。",
      },
      {
        id: "m-s-25",
        prompt: "Don't ___ the lights. The class is still working.",
        options: ["close", "turn off", "open", "turn"],
        correct: 1,
        errorId: "collocation",
        why: "turn off the lights。",
      },
    ],
  },
];

export function getMock(id: string) {
  return MOCKS.find((m) => m.id === id);
}

export const OAS_LETTERS = ["A", "B", "C", "D"] as const;
