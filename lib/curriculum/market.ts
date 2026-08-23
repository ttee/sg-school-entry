/**
 * Parent-facing map of common CEQ/AEIS prep channels.
 * Not a ranking. Fees that are not on the school’s public page are marked 询校.
 * 狮城入学 is not a PEI and does not issue Student Pass.
 */

export type Channel = {
  name: string;
  href: string;
  where: "Singapore PEI" | "Singapore online" | "China" | "Official" | "本站";
  model: string;
  what: string;
  feeNote: string;
  fromChina: string;
};

export const CHANNELS: Channel[] = [
  {
    name: "狮城入学 Learn",
    href: "/",
    where: "本站",
    model: "家长订阅作业 + 小班顾问。不是 PEI，不办学生准证。",
    what: "CEQ A2/B1 与 AEIS 英语：试学周、纠错矩阵、限时卷、IXL 周计划。数学另有 MATH/SMATH 试学。",
    feeNote: "CEQ 英语作业 12 周 RMB 2,680（顾问确认后开通）。CEQ 报考费另付剑桥考点。",
    fromChina: "人在中国就能打开试学周。CEQ 在国内考点先考。",
  },
  {
    name: "Spring College International",
    href: "https://www.spring.edu.sg/preparatory-course-for-aeis/",
    where: "Singapore PEI",
    model: "EduTrust PEI。全日制约 6 个月（周一至周五 9:00–16:00，另有晚间强化）。有课后补习轨。",
    what: "小学 CEQ（P2–P4 A2 Key，P5 B1）+ AEIS 数学；中学 AEIS 英语 + 数学。可协助学生准证。",
    feeNote: "官网不公开标价。全日制 PEI 按月收费，需询校。中国站 springcollege.com.cn。",
    fromChina: "适合需要来新加坡住读、办准证的家庭。CEQ 仍须在剑桥授权考点考。",
  },
  {
    name: "TMC Academy",
    href: "https://www.tmc.edu.sg/",
    where: "Singapore PEI",
    model: "私立学院预备课（常见 3 / 6 个月轨，以当年招生页为准）。",
    what: "政府学校入学预备：英语 + 数学方向。",
    feeNote: "询校。",
    fromChina: "全日制、准证类。先看准证资格，再看课表。",
  },
  {
    name: "Hanbridge Institute",
    href: "https://hanbridge.edu.sg/",
    where: "Singapore PEI",
    model: "Preparatory Course for Admission to Government Schools（GPC）。",
    what: "按 MOE 大纲的英语 + 数学预备。",
    feeNote: "询校。",
    fromChina: "新来新加坡的家庭常用。小学英语门槛仍是 CEQ。",
  },
  {
    name: "Stalford Academy",
    href: "https://www.stalford.edu.sg/",
    where: "Singapore PEI",
    model: "补习 / 预备；对外称剑桥备考点，授权请向校方核实当年状态。",
    what: "A2 Key / B1 Preliminary 小班方向。",
    feeNote: "询校。",
    fromChina: "人已在新加坡、要小班口笔试时再比。",
  },
  {
    name: "British Education Centre",
    href: "https://bec.edu.sg/",
    where: "Singapore PEI",
    model: "全日制 / 兼职预备（以当年页为准）。",
    what: "英语为主的预备课。",
    feeNote: "询校。",
    fromChina: "准证类。",
  },
  {
    name: "Articulate Intelligence",
    href: "https://articulate.com.sg/",
    where: "Singapore online",
    model: "订阅 + 点数。AI 口语 / 作文。",
    what: "口语与情境写作练习。对 CEQ Speaking 有用，不是 AEIS 全科。",
    feeNote: "有免费试用题，正式价看站内。",
    fromChina: "可远程练开口。不能代替 CEQ 考点。",
  },
  {
    name: "剑桥英语（中国）考点",
    href: "https://www.cambridgeenglish.cn/exams-and-tests/key-for-schools/how-to-register/",
    where: "Official",
    model: "全球约 130 国、2,800+ 考点。中国可在授权中心考 A2 Key / B1 Preliminary for Schools。",
    what: "正式 CEQ。成绩单 PDF 上传 AEIS 小学申请。",
    feeNote: "考费因地而异，问当地考点。",
    fromChina: "人在中国应先约国内考点。学而思、新东方等是备考/学习中心，报考以剑桥找考点为准。",
  },
];

export const COMPARE_ROWS = [
  {
    dim: "类型",
    sg: "PEI 全日制 / 补习 / AI 订阅",
    cn: "留学中介打包 + 一对一口语 + 单词 App",
    us: "作业 app + 顾问微信，不开准证",
  },
  {
    dim: "人在哪",
    sg: "多数要人在新加坡（准证或家属准证）",
    cn: "CEQ 在国内考；AEIS 数学/中学英语仍须来新加坡考场",
    us: "试学和 12 周作业可在国内做",
  },
  {
    dim: "费用形态",
    sg: "按月学费或课程费，官网常不标价",
    cn: "中介常打包 CEQ 报名 + 网课 + 送 PEI，报价差异大",
    us: "12 周英语作业一口价 RMB 2,680",
  },
  {
    dim: "课纲",
    sg: "MOE 前一级 + 校内 mock",
    cn: "通用剑桥英语，AEIS 题型不一定练满",
    us: "本站周进度钉死冠词/时态/完形/词数",
  },
];

export const STILL_IN_CHINA = [
  "在剑桥中国站找授权考点，先约 A2 Key（P2–P4）或 B1 Preliminary（P5）。成绩要赶得上 AEIS 申请月（例如 2026 年申请，CEQ 从 2025 年 7 月起考）。",
  "打开本站试学周：A2 / B1 / SEC。对照错误矩阵，每周 1 篇作文 + 1 篇完形/阅读 + 1 次语法词汇。",
  "CEQ 过线后再规划来新加坡考 AEIS 数学（小学）或英语+数学（中学）。需要学生准证住读时，再询 Spring / TMC 等 PEI，本站不代办准证。",
];

export const SHORTLIST = {
  p4: [
    {
      pick: "先做：国内 CEQ 考点",
      why: "P4 工作室目标 A2 Key CES 130+。没有成绩单，AEIS 小学数学报不了。",
      href: "https://www.cambridgeenglish.cn/exams-and-tests/key-for-schools/how-to-register/",
    },
    {
      pick: "在家：狮城入学 P4 轨",
      why: "试学失物招领 + P4 摸底 postpone 题 + IXL Primary 3–4 周计划 + 100 词短文。RMB 2,680 / 12 周。",
      href: "/curriculum/ixl",
    },
    {
      pick: "来新加坡才需要：PEI 全日制",
      why: "要学生准证、全天浸泡英语时，再比 Spring 6 个月全日制等。学费询校，与本站作业不冲突。",
      href: "https://www.spring.edu.sg/preparatory-course-for-aeis/",
    },
  ],
  s1: [
    {
      pick: "先做：本站 SEC 试学 + 50 题型",
      why: "中学不交 CEQ。AEIS 英语 2 小时 10 分：作文 200–300 词 + 理解 15 / 完形 15 / 词汇 10 / 语法 10。",
      href: "/trial/SEC",
    },
    {
      pick: "在家：狮城入学 S1 周计划",
      why: "although 不加 but、词数跟踪、限时 25 题语言卷。人在中国可先把错误矩阵清掉。",
      href: "/curriculum/ixl",
    },
    {
      pick: "来新加坡：PEI 英语+数学全日制",
      why: "准证 + 每天数学同练时，Spring / TMC / Hanbridge 是同一类。本站不替代教室浸泡。",
      href: "https://www.spring.edu.sg/preparatory-course-for-aeis/",
    },
  ],
};
