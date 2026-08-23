/**
 * Singapore-context English for PRC families.
 *
 * Assoc Prof Tan Chee Lay (NIE Asian Languages & Cultures) led the
 * Promote Mandarin Council bilingual 《从石叻坡到新加坡——新加坡华语资料库》
 * (Selat to Singapore: Singaporean Mandarin Database): local Chinese words
 * such as 组屋 / 巴刹 / 小贩中心. That is Mandarin research, not an English
 * syllabus and not a licence for this site.
 *
 * We do not copy NIE or SCCL packs. We teach the same *life situations* in
 * English so a child from China can follow a Singapore school day.
 */

export type ContextTopic = {
  id: string;
  n: number;
  zhScene: string;
  enTitle: string;
  parentZh: string;
  exam: string;
  vocab: { en: string; zh: string }[];
  dialogue: { who: string; line: string }[];
  story: number;
  href: string;
};

export const CONTEXT_TOPICS: ContextTopic[] = [
  {
    id: "hawker",
    n: 1,
    zhScene: "小贩中心",
    enTitle: "Ordering food at a hawker centre",
    parentZh:
      "不是餐厅服务员点餐。自己拿托盘、排队、跟档口 Aunty 说菜名。chicken rice 是菜名，常当不可数。",
    exam: "CEQ Speaking · food",
    vocab: [
      { en: "hawker centre", zh: "小贩中心" },
      { en: "stall", zh: "档口" },
      { en: "tray", zh: "托盘" },
      { en: "queue", zh: "排队" },
      { en: "chicken rice", zh: "鸡饭" },
    ],
    dialogue: [
      { who: "Mei", line: "I would like chicken rice, please." },
      { who: "Aunty", line: "Chilli? One tray." },
      { who: "Mei", line: "A little chilli, thank you." },
    ],
    story: 16,
    href: "/curriculum/stories/16",
  },
  {
    id: "hdb",
    n: 2,
    zhScene: "组屋生活",
    enTitle: "Living in an HDB flat",
    parentZh:
      "HDB 是组屋，不是 apartment 能完全替代。void deck 是楼下公共空间。报地址说 block 和 unit，例如 12-345。",
    exam: "B1 functions · AEIS comprehension",
    vocab: [
      { en: "HDB", zh: "组屋" },
      { en: "void deck", zh: "组屋底层公共空间" },
      { en: "block / unit", zh: "座 / 单位" },
      { en: "lift lobby", zh: "电梯厅" },
      { en: "corridor", zh: "走廊" },
    ],
    dialogue: [
      { who: "Mei", line: "Excuse me, the lift is not working." },
      { who: "Neighbour", line: "We have to take the stairs to the twelfth storey." },
      { who: "Mei", line: "Our unit is 12-345." },
    ],
    story: 21,
    href: "/curriculum/stories/21",
  },
  {
    id: "mrt",
    n: 3,
    zhScene: "公共交通",
    enTitle: "Taking the MRT and bus",
    parentZh:
      "听广播：Please mind the gap. alight = 下车。by MRT 零冠词；on the MRT 指在车上。",
    exam: "CEQ Listening · announcements",
    vocab: [
      { en: "MRT", zh: "地铁" },
      { en: "platform", zh: "月台" },
      { en: "interchange", zh: "转乘站" },
      { en: "alight", zh: "下车" },
      { en: "mind the gap", zh: "小心月台空隙" },
    ],
    dialogue: [
      { who: "Priya", line: "Which platform is it?" },
      { who: "Announcement", line: "Please mind the gap." },
      { who: "Mei", line: "We alight at Bedok." },
    ],
    story: 38,
    href: "/curriculum/stories/38",
  },
  {
    id: "school-day",
    n: 4,
    zhScene: "校园生活",
    enTitle: "A day in a Singapore primary school",
    parentZh:
      "assembly 早会、recess 小息（不是 break）、CCA 课程辅助活动、form teacher 班主任、canteen 食堂。",
    exam: "CEQ Speaking 1 · daily routine",
    vocab: [
      { en: "assembly", zh: "早会" },
      { en: "recess", zh: "小息 / 课间" },
      { en: "canteen", zh: "食堂" },
      { en: "form teacher", zh: "班主任" },
      { en: "CCA", zh: "课程辅助活动" },
    ],
    dialogue: [
      { who: "Mei", line: "Good morning, Ms Tan." },
      { who: "Ms Tan", line: "Line up for assembly." },
      { who: "Mei", line: "Where is the canteen?" },
    ],
    story: 1,
    href: "/curriculum/stories/1",
  },
  {
    id: "harmony",
    n: 5,
    zhScene: "多元种族",
    enTitle: "Racial Harmony Day and festivals",
    parentZh:
      "学校会过 Racial Harmony Day。孩子要能礼貌说出 Deepavali、Hari Raya，并尊重同学的节日，不是只懂春节。",
    exam: "CEQ culture speaking",
    vocab: [
      { en: "Racial Harmony Day", zh: "种族和谐日" },
      { en: "Deepavali", zh: "屠妖节" },
      { en: "Hari Raya", zh: "开斋节" },
      { en: "respect", zh: "尊重" },
      { en: "neighbour", zh: "邻居 / 同学" },
    ],
    dialogue: [
      { who: "Aisha", line: "Selamat Hari Raya." },
      { who: "Mei", line: "May I try this kuih?" },
      { who: "Aisha", line: "Yes. We respect this festival." },
    ],
    story: 45,
    href: "/curriculum/stories/45",
  },
  {
    id: "cny",
    n: 6,
    zhScene: "节庆活动",
    enTitle: "Chinese New Year in Singapore",
    parentZh:
      "新加坡过年仍说 Gong Xi Fa Cai、red packet，但邻居可能是马来或印度家庭。写作常用 first / then / finally。",
    exam: "B1 culture writing",
    vocab: [
      { en: "Chinese New Year", zh: "春节" },
      { en: "reunion", zh: "团圆" },
      { en: "red packet", zh: "红包" },
      { en: "mandarin orange", zh: "橘子" },
      { en: "Ah Ma", zh: "奶奶" },
    ],
    dialogue: [
      { who: "Mum", line: "We are going to visit Ah Ma." },
      { who: "Mei", line: "First we clean the house." },
      { who: "Mei", line: "Gong Xi Fa Cai." },
    ],
    story: 18,
    href: "/curriculum/stories/18",
  },
  {
    id: "clinic",
    n: 7,
    zhScene: "社区设施",
    enTitle: "Going to the neighbourhood clinic",
    parentZh:
      "neighbourhood clinic 是邻里诊所。MC 是病假单。要会说 I have a fever / a sore throat，并排队。",
    exam: "CEQ Speaking · health",
    vocab: [
      { en: "clinic", zh: "诊所" },
      { en: "fever", zh: "发烧" },
      { en: "MC", zh: "病假单" },
      { en: "queue", zh: "排队" },
      { en: "medicine", zh: "药" },
    ],
    dialogue: [
      { who: "Doctor", line: "How long have you felt this?" },
      { who: "Mei", line: "I have a sore throat." },
      { who: "Doctor", line: "You should rest. Here is an MC." },
    ],
    story: 42,
    href: "/curriculum/stories/42",
  },
  {
    id: "ndp",
    n: 8,
    zhScene: "国家教育",
    enTitle: "National Day Parade",
    parentZh:
      "National Day 是国庆。孩子要能写看到的、听到的：flag, parade, flypast。这是 AEIS 记叙常见题。",
    exam: "AEIS composition · comprehension",
    vocab: [
      { en: "National Day", zh: "国庆日" },
      { en: "parade", zh: "游行 / 庆典" },
      { en: "flag", zh: "国旗" },
      { en: "flypast", zh: "飞行表演" },
      { en: "Padang", zh: "大草场" },
    ],
    dialogue: [
      { who: "Wei", line: "We could hear the drums." },
      { who: "Priya", line: "The flag went up." },
      { who: "Wei", line: "It was unforgettable." },
    ],
    story: 41,
    href: "/curriculum/stories/41",
  },
  {
    id: "recycle",
    n: 9,
    zhScene: "环保意识",
    enTitle: "Recycling at school",
    parentZh:
      "蓝桶收纸、塑料另放。完形常考 is recycled。不要写成 We recycle the bottles 当被动题。",
    exam: "B1 cloze · AEIS grammar passive",
    vocab: [
      { en: "recycle", zh: "回收" },
      { en: "bin", zh: "垃圾桶" },
      { en: "plastic", zh: "塑料" },
      { en: "paper", zh: "纸" },
      { en: "Eco Club", zh: "环保社" },
    ],
    dialogue: [
      { who: "Ms Tan", line: "Paper is recycled in the blue bin." },
      { who: "Mei", line: "We should reduce waste." },
      { who: "Priya", line: "Put cans here." },
    ],
    story: 43,
    href: "/curriculum/stories/43",
  },
  {
    id: "aunty",
    n: 10,
    zhScene: "礼貌用语",
    enTitle: "Talking to Aunty and Uncle",
    parentZh:
      "食堂档口、清洁工、保安常称 Aunty / Uncle，不是侮辱。Thank you, Aunty Tan. 试学周 Lost and Found 就练这句。",
    exam: "A2 functions · school politeness",
    vocab: [
      { en: "Aunty", zh: "阿姨（尊称工作人员）" },
      { en: "Uncle", zh: "叔叔（尊称工作人员）" },
      { en: "please", zh: "请" },
      { en: "Lost and Found", zh: "失物招领" },
      { en: "Thank you for…", zh: "谢谢你…" },
    ],
    dialogue: [
      { who: "Mei", line: "I lost my water bottle." },
      { who: "Aunty Tan", line: "Is this your bottle? White, with a pink flower?" },
      { who: "Mei", line: "Yes. Thank you, Aunty Tan." },
    ],
    story: 2,
    href: "/trial/A2",
  },
];

export const CONTEXT_GLOSSARY: { en: string; zh: string; note: string }[] = [
  { en: "hawker centre", zh: "小贩中心", note: "不是 cafeteria。自己托盘、自己排队。" },
  { en: "HDB", zh: "组屋", note: "Housing & Development Board 组屋，不是一般 apartment。" },
  { en: "void deck", zh: "组屋底层", note: "楼下公共空间，婚礼、葬礼、避雨都会用。" },
  { en: "wet market / pasar", zh: "巴刹", note: "传统菜市场。英语也说 wet market。" },
  { en: "recess", zh: "小息", note: "新加坡小学用词；不只说 break。" },
  { en: "canteen", zh: "食堂", note: "小学食堂，不是餐厅。" },
  { en: "CCA", zh: "课程辅助活动", note: "Co-Curricular Activity。" },
  { en: "form teacher", zh: "班主任", note: "不要说 counsellor。" },
  { en: "Aunty / Uncle", zh: "对工作人员的尊称", note: "档口、清洁工、保安常用。" },
  { en: "MRT", zh: "地铁", note: "by MRT 零冠词。" },
  { en: "block / unit", zh: "座 / 单位号", note: "报地址：Block 12, unit 12-345。" },
  { en: "town council", zh: "市镇理事会", note: "组屋区报修找他们。" },
];
