/** IXL Singapore English Syllabus alignments. Skill numbers on ixL.com can move; we pin year + skill title. */
export const IXL_YEARS = {
  hub: "https://sg.ixl.com/standards/english",
  p1: "https://sg.ixl.com/standards/english/primary-1",
  p2: "https://sg.ixl.com/standards/english/primary-2",
  p3: "https://sg.ixl.com/standards/english/primary-3",
  p4: "https://sg.ixl.com/standards/english/primary-4",
  p5: "https://sg.ixl.com/standards/english/primary-5",
  s1: "https://sg.ixl.com/standards/english/secondary-1",
  s2: "https://sg.ixl.com/standards/english/secondary-2",
  s3: "https://sg.ixl.com/standards/english/secondary-3",
} as const;

export const IXL_PATHS = [
  {
    apply: "P2 / P3 + A2 Key",
    years: "Singapore Primary 1 and Primary 2",
    hrefs: [IXL_YEARS.p1, IXL_YEARS.p2],
    drill: "Capitalization, sentence types, spelling, short comprehension.",
  },
  {
    apply: "P4 / P5 + A2 Key (P4) / B1 (P5)",
    years: "Singapore Primary 3–4 (P4 entry) and Primary 4–5 (P5 entry)",
    hrefs: [IXL_YEARS.p3, IXL_YEARS.p4, IXL_YEARS.p5],
    drill: "Cloze, comprehension, grammar, vocab in context.",
  },
  {
    apply: "S1–S3 AEIS English",
    years: "Singapore Secondary 1 and Secondary 2–3",
    hrefs: [IXL_YEARS.s1, IXL_YEARS.s2, IXL_YEARS.s3],
    drill: "50-item language mix + essay planning.",
  },
] as const;

export const STRANDS = [
  {
    name: "A. Grammar",
    items: [
      "Sentence types: statement, question, command, exclamation",
      "Complete sentences vs fragments / run-ons",
      "Capitalization: names, places, days, titles",
      "Secondary: metalanguage (term for the grammar you already use)",
    ],
  },
  {
    name: "B. Reading and viewing",
    items: [
      "Word identification & phonics (P2/3): short/long vowels, digraphs",
      "P2: recognise grammatical features of a sentence",
      "P5: comprehension foundation — main idea + inference",
    ],
  },
  {
    name: "C. Vocabulary",
    items: [
      "Meaning in context",
      "Synonyms / antonyms",
      "Prefixes / suffixes",
      "Collocations (go for a walk, turn off the lights)",
    ],
  },
] as const;

export type IxlWeek = {
  week: number;
  title: string;
  ixl: string;
  site: string;
  loop: string;
};

/** Applying P4 → syllabus of P3, IXL Primary 3–4, CEQ A2 Key 130+. */
export const P4_IXL_PLAN: IxlWeek[] = [
  {
    week: 0,
    title: "试学 · articles / this–that",
    ixl: "Primary 3 Grammar · articles a/an/the; demonstratives",
    site: "/trial/A2 + /curriculum/grammar/articles",
    loop: "Lost and Found story + 1 article drill",
  },
  {
    week: 1,
    title: "Sentence types",
    ixl: "Primary 3–4 · Is the sentence a statement, question, command or exclamation?",
    site: "/curriculum/grammar/punctuation",
    loop: "8 sentence-type items + 1 short writing",
  },
  {
    week: 2,
    title: "Fragments and run-ons",
    ixl: "Primary 4 · complete sentence vs fragment / run-on",
    site: "/curriculum/grammar/punctuation",
    loop: "Fix 6 run-ons; no comma splices",
  },
  {
    week: 3,
    title: "Narrative transitions & cloze",
    ixl: "Primary 4 · coordinating conjunctions (G.2) + synonyms in context (V.1)",
    site: "/curriculum/grammar/linkers + 100-word story",
    loop: "1 A2 cloze + 1 guided 100-word draft",
  },
  {
    week: 4,
    title: "Tenses",
    ixl: "Primary 4 · past / present / future (e.g. P4-II.10 on sg.ixl.com)",
    site: "/curriculum/grammar/tense",
    loop: "Yesterday I went… irregular list",
  },
  {
    week: 5,
    title: "Subject-verb agreement",
    ixl: "Primary 4 Grammar · SVA",
    site: "/curriculum/grammar/sva",
    loop: "everyone has; she wakes",
  },
  {
    week: 6,
    title: "Capitalization + spelling",
    ixl: "Primary 2–3 · names, places, days, titles; spelling families",
    site: "/curriculum/grammar/punctuation",
    loop: "8 spelling items (P2/3 paper shape)",
  },
  {
    week: 7,
    title: "Vocab in context",
    ixl: "Primary 4 Vocabulary · meaning in context; postpone = put off",
    site: "/curriculum/diagnostic/p4",
    loop: "10 context MCQs",
  },
  {
    week: 8,
    title: "Cloze + linkers",
    ixl: "Primary 4 · however / therefore / in addition; cohesion G.LO5",
    site: "/curriculum/grammar/linkers",
    loop: "1 timed cloze (10 blanks)",
  },
  {
    week: 9,
    title: "Comprehension",
    ixl: "Primary 4 Reading and Viewing · main idea + inference",
    site: "/curriculum/mocks/a2-mock",
    loop: "2 short passages, 6 MCQs",
  },
  {
    week: 10,
    title: "100-word composition",
    ixl: "Primary 4 · personal recount language features",
    site: "/curriculum/writing",
    loop: "1 × ~100 words; track top 3 grammar mistakes",
  },
  {
    week: 11,
    title: "Timed mix + CEQ",
    ixl: "Primary 4 review wall",
    site: "/curriculum/mocks/a2-mock + speaking",
    loop: "Timed reading; 1 speaking photo; CES check 130+",
  },
];

/** Applying S1 → AEIS English 2h10; syllabus of P6/S1; IXL Secondary 1. */
export const S1_IXL_PLAN: IxlWeek[] = [
  {
    week: 0,
    title: "试学 · although / past narrative",
    ixl: "Secondary 1 Grammar · conjunctions of contrast",
    site: "/trial/SEC",
    loop: "Canteen story + although (no but)",
  },
  {
    week: 1,
    title: "SVA",
    ixl: "Secondary 1 · subject-verb agreement; everyone/each",
    site: "/curriculum/grammar/sva",
    loop: "10 SVA MCQs",
  },
  {
    week: 2,
    title: "Cloze 15-item slice",
    ixl: "Secondary 1 Vocabulary + Grammar cohesion",
    site: "/curriculum/grammar/cloze",
    loop: "15 cloze blanks, 20 min",
  },
  {
    week: 3,
    title: "Reading 15-item slice",
    ixl: "Secondary 1 Reading · inference",
    site: "/curriculum/mocks/sec-mock",
    loop: "1 passage, 8 MCQs",
  },
  {
    week: 4,
    title: "Vocab in context (10)",
    ixl: "Secondary 1 Vocabulary · collocation, phrasal verbs",
    site: "/curriculum/vocab/aeis-academic",
    loop: "go for a walk; turn off",
  },
  {
    week: 5,
    title: "Grammar 10",
    ixl: "Secondary 1 · tenses, punctuation, metalanguage",
    site: "/curriculum/grammar/tense",
    loop: "Top 3 mistakes list",
  },
  {
    week: 6,
    title: "Essay 200–300 · 3 paragraphs",
    ixl: "Secondary 1 Writing · recount structure",
    site: "/curriculum/writing",
    loop: "Prompt: a time you made a mistake",
  },
  {
    week: 7,
    title: "Linkers",
    ixl: "Secondary 1 · however / therefore / in addition",
    site: "/curriculum/grammar/linkers",
    loop: "1 exposition PEEL",
  },
  {
    week: 8,
    title: "50-MCQ mix (half paper)",
    ixl: "Secondary 1 review",
    site: "/curriculum/mocks/sec-mock",
    loop: "25 items, 25 min",
  },
  {
    week: 9,
    title: "Full writing timed",
    ixl: "Secondary 1 · edit and revise",
    site: "/curriculum/writing",
    loop: "30 min, 200–300 words",
  },
  {
    week: 10,
    title: "Comprehension + cloze back-to-back",
    ixl: "Secondary 1 Reading and Viewing",
    site: "/curriculum/mocks/sec-mock",
    loop: "15 + 15 items",
  },
  {
    week: 11,
    title: "AEIS mock window",
    ixl: "Secondary 1 + 2 stretch",
    site: "/curriculum/mocks/sec-mock",
    loop: "2 h 10 min studio split: writing then 50-shape language",
  },
];
