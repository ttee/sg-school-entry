import { CES_GATES, MOE_LINKS } from "./thresholds";

export const TERMS: { en: string; zh: string; mean: string }[] = [
  { en: "CEQ", zh: "剑桥英语资质认证", mean: "Cambridge English Qualifications。小学 AEIS 报名前提交成绩单。" },
  { en: "CES", zh: "剑桥英语量表分", mean: "Cambridge English Scale。A2 Key 及格约 120，B1 Preliminary 及格约 140。" },
  { en: "A2 Key for Schools", zh: "KET（青少版）", mean: "P2–P4 常见试卷。8–10 分钟两人口语。" },
  { en: "B1 Preliminary for Schools", zh: "PET（青少版）", mean: "P5 常见试卷。口语 12–17 分钟。" },
  { en: "Statement of Results", zh: "成绩单 PDF", mean: "报名上传这一份。不必等纸质证书。" },
  { en: "AEIS", zh: "国际学生入学考试", mean: "进政府学校主通道。小学考数学；中学考英语+数学。在新加坡考。" },
  { en: "S-AEIS", zh: "补充入学考试", mean: "主考试未取录或错过时的补充轮次。规则以当年 MOE 为准。" },
  { en: "SEAB", zh: "新加坡考评局", mean: "出卷与考场。Candidates Portal 报名。" },
  { en: "OAS", zh: "光学答题卡", mean: "选择题涂 A–D。模拟卷按此训练。" },
  { en: "CCA", zh: "课程辅助活动", mean: "Co-Curricular Activity。录取后学校生活的一部分。" },
  { en: "form teacher", zh: "班主任", mean: "不是中国语境的「辅导员」。" },
  { en: "recess", zh: "课间休息 / 小息", mean: "新加坡小学常用词，不只说 break。" },
  { en: "hawker centre", zh: "小贩中心", mean: "自己拿托盘排队。详见新加坡语境页。" },
  { en: "HDB", zh: "组屋", mean: "不是 apartment 能完全替代。" },
  { en: "void deck", zh: "组屋底层公共空间", mean: "楼下避雨、活动的地方。" },
  { en: "Aunty / Uncle", zh: "对工作人员的尊称", mean: "食堂档口、清洁工常用。Thank you, Aunty Tan." },
  { en: "Candidates Portal (CP)", zh: "考生门户", mean: "AEIS 网上报名与上传文件。" },
];

export const PARENT_SNIPPET = [
  {
    title: "CEQ（剑桥英语认证）",
    body: "报考新加坡公立小学（P2–P5）的学生必须先通过 CEQ 考试（A2 Key 或 B1 Preliminary），并达到新加坡教育部（MOE）规定的最低分数要求后，方可注册 AEIS 数学考试。",
  },
  {
    title: "AEIS（国际学生入学考试）",
    body: "小学从 2022 年起英语改交 CEQ，AEIS 只考数学。中学仍考英语+数学（英语约 2 小时 10 分：写作、阅读理解与语言运用）。英文是实用英语，内容对准申请年级的前一级。来新加坡入读学校，在校园里备战 CEQ 和 AEIS。录取不等于准证或 PR，以 ICA 为准。",
  },
];

export const PATH_PRIMARY = [
  "用孩子出生年份在 MOE 年龄核对器确认：考哪一级、哪一种 CEQ、最低 CES。",
  "倒推 12 个月：2026 年 AEIS 小学申请，CEQ 须在 2025 年 7 月及以后考。成绩要赶得上申请月。",
  "先过 CEQ，再报名 AEIS 小学数学。没有达标 CES，申请会被卡住。",
  "AEIS 小学数学按「申请年级的前一级」内容。例如申请 P3，应熟 P2 大纲。",
  "12 月出结果，次年 1 月入学（以当年 MOE 日程为准）。",
];

export const PATH_SECONDARY = [
  "中学 AEIS 不要求先交 CEQ。在新加坡考英语 + 数学。",
  "英语含作文 + 理解/语言运用（工作室按约 50 题 MCQ 训练语言段）。",
  "作文词数工作室目标：S1 200–300，S2 250–350，S3 300–400。以当年试卷说明为准。",
  "内容按「申请年级的前一级」：申请 Sec 3，应熟 Sec 2。",
  "申请费、护照有效期、出生证翻译，见 MOE How to apply。",
];

export const DEADLINE_NOTES = [
  "小学必须上传 CEQ Statement of Results（PDF），不必证书。",
  "只采纳申请时上传的那一套 CEQ 成绩。",
  "官方最低分以 moe.gov.sg 年龄核对器为准，不要只信培训机构表格。",
  "工作室对照带（须复核）：",
  ...CES_GATES.map((g) => `${g.level} · ${g.test} · 工作室目标 CES ${g.targetCes}（${g.band}）`),
];

export { MOE_LINKS };
