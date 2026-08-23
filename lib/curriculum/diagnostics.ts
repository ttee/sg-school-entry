import type { McqItem, Paper } from "./types";

function q(
  id: string,
  prompt: string,
  options: string[],
  correct: number,
  errorId: string,
  why: string
): McqItem {
  return { id, prompt, options, correct, errorId, why };
}

const P2: McqItem[] = [
  q("p2-1", "Mei goes to school ___ bus.", ["by", "by the", "on the", "with"], 0, "zero-article-by", "交通方式：by bus，零冠词。"),
  q("p2-2", "I am ___ student at Bedok Primary.", ["a", "an", "the", "—"], 0, "articles", "第一次提到用 a。"),
  q("p2-3", "Ms Tan ___ English on Monday.", ["teach", "teaches", "teaching", "teached"], 1, "3sg", "Ms Tan 第三人称单数：teaches。"),
  q("p2-4", "Priya ___ her homework right now.", ["does", "is doing", "do", "did"], 1, "continuous", "right now → 现在进行时。"),
  q("p2-5", "We have PE ___ Friday.", ["in", "at", "on", "by"], 2, "prep-time", "星期用 on。"),
  q("p2-6", "My sister ___ reading.", ["like", "likes", "is like", "liking"], 1, "3sg", "my sister + likes。"),
  q("p2-7", "Yesterday I ___ my bottle.", ["lose", "lost", "have lost", "am losing"], 1, "tense-shift", "Yesterday → 过去式 lost。"),
  q("p2-8", "I enjoy ___ in the library.", ["read", "to read", "reading", "reads"], 2, "like-ing", "enjoy + -ing。"),
  q("p2-9", "Meet me ___ the school gate.", ["in", "on", "at", "to"], 2, "prep-place", "具体地点点：at the gate。"),
  q("p2-10", "Is ___ your bottle?", ["this", "these", "those", "them"], 0, "articles", "近处单数用 this。"),
  q("p2-11", "Yes, that is ___.", ["my", "mine", "me", "I"], 1, "articles", "mine 可单独使用。"),
  q("p2-12", "Read: “Please come to the office ___ recess.”", ["in", "on", "at", "by"], 2, "prep-time", "at recess。"),
];

const P3: McqItem[] = [
  q("p3-1", "Mei lost ___ white bottle with a pink flower. (already mentioned)", ["a", "an", "the", "some"], 2, "articles", "已经提过的特定物品用 the。"),
  q("p3-2", "She ___ up at 6:15 every Monday.", ["wake", "wakes", "waking", "waked"], 1, "3sg", "习惯 + 第三人称 wakes。"),
  q("p3-3", "I ___ here for six months. I still study here.", ["was", "have been", "had been", "am being"], 1, "present-perfect", "从过去持续到现在：have been。"),
  q("p3-4", "I ___ to East Coast Park last year.", ["have gone", "went", "go", "had go"], 1, "present-perfect", "last year 是结束的过去，用 went。"),
  q("p3-5", "There isn't ___ milk in the fridge.", ["some", "any", "many", "a"], 1, "quantifiers", "否定句用 any。"),
  q("p3-6", "How ___ rice do we need?", ["many", "much", "long", "often"], 1, "quantifiers", "rice 不可数用 much。"),
  q("p3-7", "Priya is ___ than Mei.", ["more fast", "faster", "more faster", "fastest"], 1, "comparatives", "短词比较级 faster。"),
  q("p3-8", "School ends ___ 2 p.m.", ["in", "on", "at", "to"], 2, "prep-time", "钟点用 at。"),
  q("p3-9", "We ___ going to the library tomorrow.", ["is", "are", "be", "will are"], 1, "modals", "we are going to。"),
  q("p3-10", "You must ___ your bag after PE.", ["to zip", "zipping", "zip", "zips"], 2, "modals", "must + 原形。"),
  q("p3-11", "I always ___ breakfast at home.", ["eat", "eats", "eating", "am eat"], 0, "3sg", "I 用原形 eat；always 在动词前。"),
  q("p3-12", "The classroom is ___ the second floor.", ["in", "on", "at", "to"], 1, "prep-place", "楼层用 on。"),
];

const P4: McqItem[] = [
  q("p4-1", "I have been at this school ___ June.", ["since", "for", "during", "from"], 0, "present-perfect", "since + 起点。"),
  q("p4-2", "If it ___, Sports Day will move indoors.", ["will rain", "rains", "rained", "rain"], 1, "if-when", "if + 现在时，主句 will。"),
  q("p4-3", "Plastic ___ in the blue bin.", ["recycles", "is recycled", "recycled", "recycling"], 1, "tense-shift", "被动：is recycled。"),
  q("p4-4", "Ms Chen said the library ___ the next week. (she said this yesterday)", ["will close", "closes", "would close", "is close"], 2, "reported", "转述：will → would。"),
  q("p4-5", "Wei Han, ___ joined last week, sits near Priya.", ["which", "who", "whose", "what"], 1, "relative", "人用 who。"),
  q("p4-6", "___ the rain, the race continued.", ["Although", "Despite", "Because", "So"], 1, "although-but", "despite + 名词；although + 从句。"),
  q("p4-7", "It was ___ a long drive that Mei fell asleep.", ["so", "such", "too", "very"], 1, "too-enough", "such a + 名词。"),
  q("p4-8", "He is not old ___ to sit in the front row by himself.", ["too", "enough", "so", "such"], 1, "too-enough", "adj + enough。"),
  q("p4-9", "We used ___ play five stones in the corridor.", ["to", "too", "two", "for"], 0, "tense-shift", "used to + 原形。"),
  q("p4-10", "The test is on Friday, ___ it?", ["isn't", "aren't", "doesn't", "hasn't"], 0, "3sg", "is → isn't it。"),
  q("p4-11", "Please ___ the lights when you leave.", ["open", "close", "turn off", "turn down"], 2, "collocation", "关灯：turn off，不是 close/open。"),
  q("p4-12", "I need to ___ my temperature. I feel sick.", ["eat", "take", "see", "make"], 1, "collocation", "量体温 take；吃药 take medicine。"),
];

const P5: McqItem[] = [
  q("p5-1", "When I arrived, the bus ___ already.", ["left", "has left", "had left", "was leave"], 2, "present-perfect", "过去的过去：had left。"),
  q("p5-2", "Although Wei was nervous, ___ he tried.", ["but", "so", "—", "and but"], 2, "although-but", "有 although 就不要 but。"),
  q("p5-3", "The book ___ I borrowed was about Sentosa.", ["who", "which", "where", "whose"], 1, "relative", "物用 which/that。"),
  q("p5-4", "She told us that breakfast ___ at seven from Monday.", ["starts", "started", "start", "starting"], 1, "reported", "转述一般会退一格时态。"),
  q("p5-5", "___ feeling tired, Priya finished the race.", ["Although", "Despite", "However", "Because"], 1, "although-but", "despite + -ing/名词。"),
  q("p5-6", "There isn't ___ time left.", ["many", "a few", "enough", "few"], 2, "too-enough", "enough time。"),
  q("p5-7", "You have been here six months, ___ you?", ["haven't", "isn't", "aren't", "didn't"], 0, "present-perfect", "have been → haven't you。"),
  q("p5-8", "Bins ___ collected on Monday.", ["is", "are", "was", "be"], 1, "sva-everyone", "bins 复数 are collected。"),
  q("p5-9", "I was ___ tired to run.", ["so", "too", "enough", "such"], 1, "too-enough", "too + adj + to。"),
  q("p5-10", "We should ___ less food.", ["to waste", "wasting", "waste", "wastes"], 2, "modals", "should + 原形。"),
  q("p5-11", "___ , the canteen was closed. We ate later.", ["Therefore", "Because", "Although", "If"], 0, "because-so", "therefore 连接结果，后面独立句。"),
  q("p5-12", "Can you ___ the meaning of this notice?", ["look", "see", "watch", "find out"], 3, "collocation", "查清信息：find out，不是 look the meaning。"),
];

const S1: McqItem[] = [
  q("s1-1", "___ I was nervous, I tried.", ["Although", "Although…but", "But although", "Despite I"], 0, "although-but", "Although + 从句，主句不再加 but。"),
  q("s1-2", "Everyone ___ a tray.", ["have", "has", "are having", "having"], 1, "sva-everyone", "everyone 当单数。"),
  q("s1-3", "The team of prefects ___ at the door.", ["stand", "stands", "are stand", "is stand"], 1, "sva-everyone", "team 作整体常接单数（考试保守用法）。"),
  q("s1-4", "I have ___ homework tonight.", ["a", "many", "some", "two"], 2, "quantifiers", "homework 不可数。"),
  q("s1-5", "Students must ___ in the canteen.", ["to queue", "queue", "queuing", "queued"], 1, "modals", "must + 原形。"),
  q("s1-6", "You ___ bring a jacket. It's only a suggestion.", ["must", "have to", "should", "can to"], 2, "modals", "建议用 should，校规才用 must。"),
  q("s1-7", "___ it rained, Sports Day stopped.", ["Because", "Because…so", "So because", "Although"], 0, "because-so", "只用 because 或只用 so，不要成对。"),
  q("s1-8", "It rained, ___ Sports Day stopped.", ["because", "so", "although", "despite"], 1, "because-so", "so 表结果。"),
  q("s1-9", "___ the bell rings, we stand. (every school day)", ["If", "When", "Unless", "Although"], 1, "if-when", "必然发生用 when。"),
  q("s1-10", "I ___ here since January.", ["came", "have been", "had come", "was"], 1, "present-perfect", "since + 现在完成。"),
  q("s1-11", "The water is not hot ___ to make tea.", ["too", "enough", "so", "such"], 1, "too-enough", "hot enough。"),
  q("s1-12", "There are ___ biscuits left. We can share them.", ["a little", "little", "a few", "much"], 2, "quantifiers", "biscuit 可数：a few。"),
  q("s1-13", "Please ___ the fan. It's noisy.", ["close", "open", "turn off", "turn"], 2, "collocation", "电器用 turn off。"),
  q("s1-14", "Wei sat down. He ___ his composition.", ["is finishing", "finishes", "finished", "has finish"], 2, "tense-shift", "叙事保持过去时。"),
  q("s1-15", "Choose the correctly punctuated sentence.", ["I was late, I missed the bus.", "I was late I missed the bus.", "I was late because I missed the bus.", "I was late; because I missed the bus."], 2, "punctuation", "不要用逗号连接两个完整句。"),
  q("s1-16", "The girl ___ sits next to me is Priya.", ["which", "who", "what", "—"], 1, "relative", "定语从句需要 who。"),
];

export const DIAGNOSTIC_PAPERS: Paper[] = [
  {
    id: "p2",
    titleZh: "P2 入学英语摸底",
    blurb: "对照工作室目标 CES 100（A2 Key 试卷上的 A1 报告带）。12 题，约 8 分钟。",
    track: "A2",
    intended: "P2",
    targetCes: 100,
    minutes: 8,
    items: P2,
  },
  {
    id: "p3",
    titleZh: "P3 入学英语摸底",
    blurb: "对照工作室目标 CES 120（A2 Key Grade C）。12 题。",
    track: "A2",
    intended: "P3",
    targetCes: 120,
    minutes: 10,
    items: P3,
  },
  {
    id: "p4",
    titleZh: "P4 入学英语摸底",
    blurb: "对照工作室目标 CES 130（B1 Preliminary 试卷）。12 题。",
    track: "B1",
    intended: "P4",
    targetCes: 130,
    minutes: 12,
    items: P4,
  },
  {
    id: "p5",
    titleZh: "P5 入学英语摸底",
    blurb: "对照工作室目标 CES 140（B1 Grade C）。12 题。",
    track: "B1",
    intended: "P5",
    targetCes: 140,
    minutes: 12,
    items: P5,
  },
  {
    id: "s1",
    titleZh: "中学 AEIS 英语摸底（Sec 1 题型）",
    blurb: "语言点 + 搭配 + 标点，对准 AEIS 选择题，不是 CEQ 量表。16 题。",
    track: "SEC",
    intended: "Sec 1–3",
    targetCes: null,
    minutes: 15,
    items: S1,
  },
];

export function getPaper(id: string) {
  return DIAGNOSTIC_PAPERS.find((p) => p.id === id);
}
