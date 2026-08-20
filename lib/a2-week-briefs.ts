export type A2Weike =
  | { locked: true; beat: string }
  | { locked: false; note?: string };

export type A2WeekBrief = {
  week: number;
  title: string;
  error: string;
  board: string;
  spoken: string[];
  weike: A2Weike;
};

/** Same I / We / You for every A2 week. Consultant + homework. No camera. */
export const A2_BRIEF_STEPS = {
  iDo: "play this week’s 微课 / read the board once.",
  weDo: "one homework item, why-wrong together.",
  youDo: "child says the lines and finishes the week alone.",
  camera: "No camera.",
} as const;

export const A2_WEEK_BRIEFS: A2WeekBrief[] = [
  {
    week: 0,
    title: "试学周 · 失物招领 / Lost and Found",
    error: "I lost water bottle; This is your bottle?",
    board: "a/an/the; Is this your…?; in/at/near",
    spoken: [
      "Is this your bottle?",
      "Yes, that’s mine.",
      "I go to school by bus.",
    ],
    weike: { locked: true, beat: "Auntie Tan bottle line." },
  },
  {
    week: 1,
    title: "第 1 周：日常作息 / Daily Routines",
    error: "She wake up",
    board: "she wakes; What time…?; Amy’s school; at 6:15",
    spoken: [
      "What time do you wake up?",
      "I wake up at 6:15.",
    ],
    weike: { locked: true, beat: "Priya/Mei 6:15." },
  },
  {
    week: 2,
    title: "第 2 周：学校生活 / School Life",
    error: "I painting now",
    board: "I am painting; She is drawing; I have Art on Tuesday",
    spoken: ["I am painting now."],
    weike: { locked: false },
  },
  {
    week: 3,
    title: "第 3 周：家庭与朋友 / Family and Friends",
    error: "Yesterday I go / we visit",
    board: "yesterday I went; we visited; I had (used to is in homework, not the one error)",
    spoken: [
      "Yesterday I went to Toa Payoh.",
      "We visited Ah Ma and Ah Gong.",
    ],
    weike: { locked: false },
  },
  {
    week: 4,
    title: "第 4 周：购物与食物 / Shopping and Food",
    error: "two breads / how many rice / I need some waters",
    board: "some/any; How many eggs?; How much milk?; rice/milk no plural",
    spoken: [
      "Do we have any milk?",
      "Some, but not much.",
    ],
    weike: { locked: true, beat: "Tekka milk line." },
  },
  {
    week: 5,
    title: "第 5 周：运动会 / Sports Day",
    error: "more bigger / he is tall than me",
    board: "faster than; the tallest; the best — one chip 比较级和最高级",
    spoken: [
      "Priya was faster than most students.",
      "She was the tallest runner.",
    ],
    weike: { locked: false },
  },
  {
    week: 6,
    title: "第 6 周：放学与周末 / After School and Weekends",
    error: "in Monday / on morning / in 7 o’clock",
    board: "at 2 p.m.; in the morning; on Monday",
    spoken: [
      "School ends at 2 p.m.",
      "I have ballet on Monday.",
    ],
    weike: { locked: false },
  },
  {
    week: 7,
    title: "第 7 周：周末打算 / Weekend Plans",
    error: "I going to the library / Tomorrow I go library",
    board: "I/She/We am/is/are going to + verb",
    spoken: [
      "We’re going to visit East Coast Park.",
      "I’m going to buy a book.",
    ],
    weike: { locked: false, note: "No will." },
  },
  {
    week: 8,
    title: "第 8 周：学校规则 / School Rules and What We Can Do",
    error: "I can to swim / I must to go",
    board: "can + verb; must + verb. HOLD Sit down / Don’t run.",
    spoken: [
      "You can borrow three books.",
      "You must return books on time.",
    ],
    weike: { locked: false },
  },
  {
    week: 9,
    title: "第 9 周：周末爱好 / Weekend Hobbies",
    error: "I like swim / I enjoy to read",
    board: "like/love/hate/enjoy + -ing. No new /skills row.",
    spoken: [
      "I love swimming.",
      "I enjoy reading.",
    ],
    weike: { locked: false },
  },
  {
    week: 10,
    title: "第 10 周：日常作息和频率 / Everyday Routines and Frequency",
    error: "I go always / I am always go",
    board: "I always wake up; I am never late",
    spoken: [
      "I always wake up at 6:30.",
      "I am never late.",
    ],
    weike: { locked: false, note: "Not the W1 6:15 film." },
  },
  {
    week: 11,
    title: "第 11 周：地点描述 / Describing Places",
    error: "in the bus / on the classroom",
    board: "in the classroom; on the desk / on the second floor; at the school gate",
    spoken: [
      "We can meet at the school gate.",
      "My classroom is on the second floor.",
    ],
    weike: { locked: false },
  },
];

export function getA2WeekBrief(week: number): A2WeekBrief | undefined {
  return A2_WEEK_BRIEFS.find((brief) => brief.week === week);
}
