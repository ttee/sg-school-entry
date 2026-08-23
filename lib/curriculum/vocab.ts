import type { VocabModule } from "./types";

export const VOCAB_MODULES: VocabModule[] = [
  {
    id: "school-day",
    titleZh: "校园功能英语 · 一天",
    use: "A2 Key Speaking 1 + 校内指示。孩子要能听懂并说出。",
    items: [
      { word: "recess", example: "We play at recess.", noteZh: "不是 break 也能说；新加坡常用 recess。" },
      { word: "canteen", example: "The canteen sells chicken rice.", noteZh: "小学食堂，不是 cafeteria。" },
      { word: "assembly", example: "Assembly starts at 7:50.", noteZh: "早会。" },
      { word: "CCA", example: "My CCA is choir on Wednesday.", noteZh: "课程辅助活动。说全称 Co-Curricular Activity 也可以。" },
      { word: "form teacher", example: "Ms Tan is our form teacher.", noteZh: "班主任。" },
      { word: "Lost and Found", example: "Go to Lost and Found.", noteZh: "专有名词，三个词都大写。" },
      { word: "queue", example: "Please queue at the stall.", noteZh: "动词/名词。不要 line up 以外不会 queue。" },
      { word: "prefect", example: "A prefect told us not to run.", noteZh: "纠察/学生领袖。" },
    ],
  },
  {
    id: "time",
    titleZh: "时间与作息",
    use: "A2 Key Listening 课表、Speaking What time…?",
    items: [
      { word: "wake up", example: "I wake up at 6:15.", noteZh: "wake 不规则：woke, woken。" },
      { word: "on time", example: "Be on time for assembly.", noteZh: "准时。in time = 赶得及。" },
      { word: "timetable", example: "Check the timetable on the board.", noteZh: "新加坡/英式；美式 schedule。" },
      { word: "fortnight", example: "We have a test in a fortnight.", noteZh: "两周。B1 会出现。" },
      { word: "at noon", example: "Lunch is at noon.", noteZh: "at + 点；in the morning。" },
    ],
  },
  {
    id: "canteen",
    titleZh: "食堂与购物搭配",
    use: "A2 W4 + AEIS 日常理解。",
    items: [
      { word: "chicken rice", example: "The chicken rice looks good.", noteZh: "菜名作不可数/一碟。" },
      { word: "tray", example: "Hold your tray with both hands.", noteZh: "托盘。" },
      { word: "stall", example: "Queue at the drinks stall.", noteZh: "档口。" },
      { word: "packed lunch", example: "Mum prepares a packed lunch.", noteZh: "便当。" },
      { word: "a loaf of bread", example: "We need a loaf of bread.", noteZh: "不可数要用量词。" },
    ],
  },
  {
    id: "linkers",
    titleZh: "过渡连接词（B1 / AEIS 作文高收益）",
    use: "B1 writing · AEIS exposition。每句只用一个，不要 although…but。",
    items: [
      { word: "however", example: "The hall was full. However, we found seats.", noteZh: "句首 + 逗号。对比。" },
      { word: "therefore", example: "It rained. Therefore, PE was in the hall.", noteZh: "结果。不要和 so 叠用。" },
      { word: "consequently", example: "He forgot his bottle. Consequently, he was thirsty.", noteZh: "更正式的 therefore。" },
      { word: "although", example: "Although I was nervous, I tried.", noteZh: "不要再加 but。" },
      { word: "despite", example: "Despite the rain, we continued.", noteZh: "despite + 名词/-ing，不加从句（除非 despite the fact that）。" },
      { word: "in addition", example: "In addition, we must zip our bags.", noteZh: "加信息。不要 besides 乱套。" },
      { word: "on the other hand", example: "The test is hard. On the other hand, it is fair.", noteZh: "对比两点。" },
      { word: "for example", example: "Bring water, for example a bottle.", noteZh: "举例。不要 like 当唯一连接。" },
    ],
  },
  {
    id: "a2-core",
    titleZh: "Cambridge A2 核心（校园向）",
    use: "A2 Key vocabulary list 方向，不是官方词表复印件。",
    items: [
      { word: "borrow / lend", example: "May I borrow a pencil? I can lend you one.", noteZh: "borrow 借入；lend 借出。中文都是「借」。" },
      { word: "miss", example: "Don't miss the bus.", noteZh: "错过；也可 miss a person。" },
      { word: "remind", example: "Please remind me to zip my bag.", noteZh: "remind someone to。" },
      { word: "prefer", example: "I prefer rice to noodles.", noteZh: "prefer A to B。" },
      { word: "arrive at / in", example: "We arrive at school at 7:20.", noteZh: "arrive at 小地点；arrive in 城市。" },
    ],
  },
  {
    id: "aeis-academic",
    titleZh: "AEIS 说明文用词",
    use: "Sec 作文 exposition + 阅读。",
    items: [
      { word: "advantage / disadvantage", example: "One advantage of CCA is friendship.", noteZh: "说明文两端。" },
      { word: "necessary", example: "It is necessary to show working.", noteZh: "不要 need to 全盘替换时注意句型。" },
      { word: "responsible for", example: "Prefects are responsible for the queue.", noteZh: "搭配 for。" },
      { word: "according to", example: "According to the notice, PE is cancelled.", noteZh: "according to + 来源。" },
      { word: "in conclusion", example: "In conclusion, we should try.", noteZh: "结尾段。写一次即可。" },
    ],
  },
];

export function getVocab(id: string) {
  return VOCAB_MODULES.find((m) => m.id === id);
}
