/**
 * Official vs studio paper shapes.
 * Primary AEIS English was withdrawn in 2022 (CEQ + AEIS Math only).
 * The P2/3 34-MCQ and P4/5 50-MCQ + 100-word writing profiles below
 * are studio functional-English drills matching school / pre-2022 AEIS
 * language-use proportions — not a current SEAB primary English paper.
 */
export const FUNCTIONAL_RULE =
  "English is functional English from the Singapore English Syllabus for the level before the one you apply for. Apply P4 → study P3 English. Apply S1 → study P6/S1 foundation. Apply S3 → study S2.";

export const CEQ_PAPERS = [
  {
    level: "P2",
    test: "A2 Key for Schools",
    min: ">100",
    parts: [
      { name: "Reading & Writing", time: "60 min", note: "Short texts; simple sentences." },
      { name: "Listening", time: "30 min", note: "Recordings played twice in the exam." },
      { name: "Speaking", time: "8–10 min", note: "Two candidates." },
    ],
  },
  {
    level: "P3",
    test: "A2 Key for Schools",
    min: ">120",
    parts: [
      { name: "Reading & Writing", time: "60 min", note: "Grade C band starts at 120." },
      { name: "Listening", time: "30 min", note: "" },
      { name: "Speaking", time: "8–10 min", note: "" },
    ],
  },
  {
    level: "P4",
    test: "A2 Key for Schools",
    min: ">130",
    parts: [
      { name: "Reading & Writing", time: "60 min", note: "Studio target 130+ (high Grade C)." },
      { name: "Listening", time: "30 min", note: "" },
      { name: "Speaking", time: "8–10 min", note: "" },
    ],
  },
  {
    level: "P5",
    test: "B1 Preliminary for Schools",
    min: ">140",
    parts: [
      { name: "Reading", time: "45 min", note: "Longer texts; inference." },
      { name: "Writing", time: "45 min", note: "Email + story/article." },
      { name: "Listening", time: "30 min", note: "" },
      { name: "Speaking", time: "12–17 min", note: "Two candidates; Part 2 is a 1-minute photo." },
    ],
  },
] as const;

export const AEIS_ENGLISH = {
  officialNow:
    "From 2022, primary applicants do not sit AEIS English. They submit CEQ, then sit AEIS Mathematics in Singapore. Secondary applicants sit AEIS English + Mathematics (2 h 10 min English).",
  secondary: {
    duration: "2 hours 10 minutes",
    part1: {
      name: "Part 1 Writing — choose 1 topic",
      words: [
        { level: "S1", band: "200–300" },
        { level: "S2", band: "250–350" },
        { level: "S3", band: "300–400" },
      ],
    },
    part2: {
      name: "Part 2 Comprehension & Language Use — 50 compulsory MCQs",
      items: [
        { skill: "Reading comprehension", n: 15 },
        { skill: "Cloze", n: 15 },
        { skill: "Vocabulary", n: 10 },
        { skill: "Grammar", n: 10 },
      ],
    },
  },
  studioPrimary: {
    why: "Studio language-use papers (not the current AEIS-Primary sitting). Same skills as school English and CEQ: comprehension, cloze, vocab, grammar, spelling, short writing. Content = syllabus of the level before.",
    p23: {
      duration: "1 hour",
      total: 34,
      items: [
        { skill: "Comprehension", n: 6 },
        { skill: "Cloze", n: 10 },
        { skill: "Vocabulary", n: 5 },
        { skill: "Grammar", n: 5 },
        { skill: "Spelling", n: 8 },
      ],
    },
    p45: {
      duration: "2 hours",
      part1: "Writing — choose 1 composition, about 100 words",
      part2: {
        name: "Language Use — 50 MCQs",
        items: [
          { skill: "Comprehension", n: 15 },
          { skill: "Cloze", n: 15 },
          { skill: "Vocabulary", n: 10 },
          { skill: "Grammar", n: 10 },
        ],
      },
    },
  },
};

export const CORE_SKILLS = [
  {
    id: "reading",
    title: "Reading comprehension",
    do: "Main idea, inference, MCQs from 1–2 passages.",
  },
  {
    id: "cloze",
    title: "Cloze",
    do: "Blanks using grammar, collocations, and linkers (however, therefore, in addition).",
  },
  {
    id: "grammar",
    title: "Grammar",
    do: "Sentence types, tenses, punctuation, subject-verb agreement.",
  },
  {
    id: "vocab",
    title: "Vocabulary",
    do: "Word meaning in context (postpone → put off).",
  },
  {
    id: "writing",
    title: "Writing / composition",
    do: "Plan, intro, body, conclusion inside the word band. Track the top 3 grammar mistakes.",
  },
  {
    id: "spelling",
    title: "Spelling + language use",
    do: "P2/P3 studio 34-item set includes 8 spelling items.",
  },
];

export const WEEKLY_LOOP = [
  "1 composition (word band for the level)",
  "1 comprehension or cloze (timed)",
  "1 grammar–vocab drill (IXL Singapore year + this site’s worksheet)",
];
