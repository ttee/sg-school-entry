/** Week plans aligned to the MOE English syllabus (level before the one applied for). Practice stays on this site. */

export const IXL_PATHS = [
  {
    apply: "P2 / P3 + A2 Key",
    years: "练前一级：P1–P2 课纲技能",
    drill: "大小写、句型、拼写、短篇理解。入口：试学 A2 + 语法钻。",
  },
  {
    apply: "P4 + A2 Key 130+ / P5 + B1 140+",
    years: "P4 练 P3–P4 技能；P5 练 P4–P5 技能",
    drill: "完形、理解、语法、语境词汇。入口：P4 摸底 + 连接词 + 限时卷。",
  },
  {
    apply: "S1–S3 AEIS 英语",
    years: "练前一级：S1 申请练小学高年级/S1 基础",
    drill: "50 题型语言卷 + 词数内作文。入口：SEC 试学 + 中学限时卷。",
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
  code: string;
  story: number;
  write: string;
  read: string;
};

/** Applying P4 → syllabus of P3; CEQ A2 Key 130+. */
export const P4_IXL_PLAN: IxlWeek[] = [
  { week: 0, title: "试学 · articles", ixl: "a/an/the; Is this your…?", site: "/trial/A2", loop: "Lost and Found", code: "SGE.ART.1", story: 2, write: "50–70 词邮件", read: "Lost bottle 理解" },
  { week: 1, title: "Sentence types", ixl: "statement / question / command / exclamation", site: "/curriculum/grammar/punctuation", loop: "句型 + 短写", code: "SGE.SENT.1", story: 1, write: "5 句课堂指令", read: "First Day 理解" },
  { week: 2, title: "Fragments & run-ons", ixl: "完整句 vs 碎片 / 逗号连接", site: "/curriculum/grammar/punctuation", loop: "改 6 句", code: "SGE.FRAG.1", story: 5, write: "消防演习 80 词", read: "指令完形" },
  { week: 3, title: "连接词 + 完形", ixl: "and/but/so; however/therefore", site: "/curriculum/grammar/linkers", loop: "完形 + 100 词故事", code: "SGE.CONJ.1", story: 49, write: "100 词海滩/校园", read: "A Day at the Beach cloze" },
  { week: 4, title: "Past tense", ixl: "went / saw / because", site: "/curriculum/grammar/tense", loop: "不规则动词", code: "SGE.TNS.1", story: 50, write: "School Camp 过去时", read: "时态选择" },
  { week: 5, title: "SVA", ixl: "she wakes; everyone has", site: "/curriculum/grammar/sva", loop: "10 题", code: "SGE.SVA.1", story: 12, write: "Sports Day 比较级", read: "SVA MCQ" },
  { week: 6, title: "大小写 + 拼写", ixl: "names, places, days; 8 spelling", site: "/curriculum/grammar/punctuation", loop: "拼写 8 题（P2/3 卷型）", code: "SGE.SP.1", story: 14, write: "书单 80 词", read: "拼写" },
  { week: 7, title: "Vocab in context", ixl: "postpone = put off", site: "/curriculum/diagnostic/p4", loop: "P4 摸底", code: "SGE.VOC.1", story: 51, write: "实验室 80 词", read: "语境词汇 10" },
  { week: 8, title: "Cloze + linkers", ixl: "in addition / however / therefore", site: "/curriculum/grammar/linkers", loop: "10 空完形", code: "SGE.CLZ.1", story: 38, write: "MRT 日记", read: "连接词完形" },
  { week: 9, title: "Comprehension", ixl: "main idea + inference, 2 passages", site: "/curriculum/mocks/a2-mock", loop: "限时理解", code: "SGE.RC.1", story: 48, write: "The Lost Puppy 摘要", read: "2 篇 MCQ" },
  { week: 10, title: "100-word composition", ixl: "intro / body / end; top 3 errors", site: "/curriculum/writing", loop: "~100 词", code: "SGE.W100.1", story: 52, write: "My Best Friend 100 词", read: "自改清单" },
  { week: 11, title: "CEQ timed mix", ixl: "R+W 60 / L 30 / S 8–10; CES 130+", site: "/curriculum/mocks/a2-mock", loop: "听说读写各一", code: "SGE.CEQ.A2", story: 55, write: "照片口述笔记", read: "A2 限时卷" },
];

/** Applying S1 → AEIS English 2h10; syllabus of the level before. */
export const S1_IXL_PLAN: IxlWeek[] = [
  { week: 0, title: "试学 · although", ixl: "although 不加 but; 叙事过去时", site: "/trial/SEC", loop: "食堂故事", code: "SGE.CONC.1", story: 36, write: "Although I was nervous…", read: "SEC 试学阅读" },
  { week: 1, title: "SVA (Grammar 10)", ixl: "everyone / the team of", site: "/curriculum/grammar/sva", loop: "10 题", code: "SGE.SVA.2", story: 4, write: "小组科学课 200 词", read: "SVA MCQ" },
  { week: 2, title: "Cloze 15", ixl: "collocation + linker 空", site: "/curriculum/grammar/cloze", loop: "15 空 / 20 分", code: "SGE.CLZ.15", story: 49, write: "beach cloze 改写", read: "15 cloze" },
  { week: 3, title: "Reading 15", ixl: "main idea + inference, 2 passages", site: "/curriculum/mocks/sec-mock", loop: "理解 15", code: "SGE.RC.15", story: 40, write: "void deck 新闻体", read: "理解 15" },
  { week: 4, title: "Vocab 10", ixl: "meaning in context; go for a walk", site: "/curriculum/vocab/aeis-academic", loop: "10 语境题", code: "SGE.VOC.10", story: 51, write: "实验室搭配", read: "vocab 10" },
  { week: 5, title: "Grammar 10 + metalanguage", ixl: "tense, punctuation, term names", site: "/curriculum/grammar/tense", loop: "Top 3 错", code: "SGE.GR.10", story: 50, write: "camp 过去时", read: "语法 10" },
  { week: 6, title: "Essay 200–300", ixl: "3 段：场景 / 高潮 / 反思", site: "/curriculum/writing", loop: "A time I made a mistake", code: "SGE.W230.1", story: 53, write: "200–300 词", read: "自改 3 错" },
  { week: 7, title: "Linkers", ixl: "however / therefore / in addition", site: "/curriculum/grammar/linkers", loop: "说明文 PEEL", code: "SGE.LNK.1", story: 61, write: "手机校规辩论", read: "连接词" },
  { week: 8, title: "50-MCQ 半卷", ixl: "25 题 OAS，25 分", site: "/curriculum/mocks/sec-mock", loop: "限时语言", code: "SGE.MCQ.25", story: 62, write: "改一封信", read: "25 MCQ" },
  { week: 9, title: "Timed writing", ixl: "30 分，200–300 词", site: "/curriculum/writing", loop: "词数带内", code: "SGE.W230.2", story: 41, write: "NDP rehearsal", read: "范文对照" },
  { week: 10, title: "RC 15 + cloze 15", ixl: "背靠背两段", site: "/curriculum/mocks/sec-mock", loop: "30 题", code: "SGE.RC.CLZ", story: 48, write: "摘要 80 词", read: "15+15" },
  { week: 11, title: "AEIS 全卷窗", ixl: "2h10：作文 + 50 题型", site: "/curriculum/mocks/sec-mock", loop: "写作再语言", code: "SGE.AEIS.S1", story: 75, write: "Although we lost…", read: "SEC 限时卷" },
];
