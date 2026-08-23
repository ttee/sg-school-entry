import type { Storyline } from "./storylines";
import { lessonClips, type LessonClip } from "./story-clips";

export type { LessonClip };

export type GrammarTeach = {
  titleZh: string;
  ruleZh: string;
  ruleEn: string;
  wrong: string;
  right: string;
  points: string[];
};

export type FormFamily =
  | "articles"
  | "can-i"
  | "would-like"
  | "would-you-like"
  | "present-simple"
  | "present-continuous"
  | "past-simple"
  | "present-perfect"
  | "going-to"
  | "lets-shall"
  | "must"
  | "have-to"
  | "imperative"
  | "please-imperative"
  | "comparatives"
  | "although"
  | "how-much"
  | "thank-you-for"
  | "too-adj"
  | "prefer"
  | "because"
  | "sequence"
  | "will-should"
  | "sorry"
  | "could-you"
  | "need-to"
  | "like-ing"
  | "there-is"
  | "i-feel"
  | "want-to"
  | "prepositions"
  | "default";

export type TodayLine = {
  who: string;
  en: string;
  cueZh: string;
  audio: string;
};

export type ContrastTask = {
  id: string;
  promptZh: string;
  right: string;
  wrong: string;
  whyZh: string;
};

export type MeaningTask = {
  id: string;
  situationZh: string;
  options: string[];
  correct: number;
  whyZh: string;
};

export type TileTask = {
  promptZh: string;
  words: string[];
  answer: string;
};

export type WriteTask = {
  promptZh: string;
  promptEn: string;
  sample: string;
  must: { re: string; hintZh: string }[];
};

export type Pedagogy = {
  family: FormFamily;
  teach: GrammarTeach;
  today: TodayLine[];
  frames: string[];
  contrasts: ContrastTask[];
  meaning: MeaningTask[];
  tiles: TileTask;
  write: WriteTask;
  clips: LessonClip[];
  parentHowZh: string;
  setting: string;
  errorId: string;
};

function seededShuffle<T>(arr: T[], seed: number): T[] {
  const a = [...arr];
  let s = seed % 2147483647;
  if (s <= 0) s += 2147483646;
  const rand = () => {
    s = (s * 16807) % 2147483647;
    return s / 2147483647;
  };
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function packOptions(
  correct: string,
  distractors: string[],
  seed: number,
): { options: string[]; correct: number } {
  const uniq: string[] = [];
  for (const x of [correct, ...distractors, "I want. You give me.", "You not run."]) {
    const t = (x ?? "").trim();
    if (!t) continue;
    if (uniq.some((u) => u.toLowerCase() === t.toLowerCase())) continue;
    uniq.push(t);
  }
  const options = seededShuffle(uniq.slice(0, 4), seed);
  return { options, correct: options.indexOf(correct) };
}

export function formFamily(story: Storyline): FormFamily {
  const g = story.grammar;
  if (/Is this your|a\/an\/the/i.test(g) || story.n === 2) return "articles";
  if (/prefer/i.test(g)) return "prefer";
  if (/would you like/i.test(g)) return "would-you-like";
  if (/would like/i.test(g)) return "would-like";
  if (/Can I|May I/i.test(g)) return "can-i";
  if (/too \+ adj|too \+ adj|too high/i.test(g) || /too \+ adj/i.test(g))
    return "too-adj";
  if (/could you/i.test(g)) return "could-you";
  if (/how many|how much/i.test(g)) return "how-much";
  if (/first \/ then|sequence/i.test(g)) return "sequence";
  if (/although/i.test(g)) return "although";
  if (/present continuous/i.test(g)) return "present-continuous";
  if (/like \+ -ing/i.test(g)) return "like-ing";
  if (/going to/i.test(g)) return "going-to";
  if (/shall we|let's|why don't we/i.test(g)) return "lets-shall";
  if (/present perfect|have been/i.test(g)) return "present-perfect";
  if (/past simple|went \/ saw|yesterday/i.test(g)) return "past-simple";
  if (
    story.n >= 78 ||
    /please \+|please proceed|please wait|please arrive|please \+ verb/i.test(g)
  )
    return "please-imperative";
  if (/imperative|must not|don't/i.test(g)) return "imperative";
  if (/thank you for/i.test(g)) return "thank-you-for";
  if (/comparativ/i.test(g)) return "comparatives";
  if (/have to|modals of obligation/i.test(g)) return "have-to";
  if (/need to/i.test(g)) return "need-to";
  if (/\bmust\b/i.test(g) && /present simple/i.test(g)) return "present-simple";
  if (/\bmust\b/i.test(g)) return "must";
  if (/I'm sorry/i.test(g)) return "sorry";
  if (/there is\/are|there was/i.test(g)) return "there-is";
  if (/I feel/i.test(g)) return "i-feel";
  if (/want to be/i.test(g)) return "want-to";
  if (/will/i.test(g) && /should/i.test(g)) return "will-should";
  if (/present simple/i.test(g)) return "present-simple";
  if (/because/i.test(g)) return "because";
  if (/at \/ on \/ in/i.test(g)) return "prepositions";
  return "default";
}

const TEACH: Record<FormFamily, GrammarTeach> = {
  articles: {
    titleZh: "a / an；Is this your…?",
    ruleZh:
      "第一次说起一个可数的东西，用 a / an。问面前这一件：Is this your + 东西?",
    ruleEn: "I lost a water bottle. Is this your water bottle?",
    wrong: "I lost water bottle. This is your bottle?",
    right: "I lost a water bottle. Is this your water bottle?",
    points: [
      "可数单数不能裸奔：a water bottle，an umbrella。",
      "问近处的一件：Is this your…? 不是 This is your…?",
      "认领：That is my water bottle. It is mine.",
    ],
  },
  "can-i": {
    titleZh: "Can I + 动词，please?",
    ruleZh: "请求许可：Can I + 动词原形 + …, please? 不是 I borrow。",
    ruleEn: "Can I borrow a pencil, please?",
    wrong: "I borrow your pencil.",
    right: "Can I borrow a pencil, please?",
    points: [
      "Can 后面是原形：borrow / sit / go，没有 to。",
      "please 放句末。",
      "回答：Yes. Here you are. / Sorry, I need it.",
    ],
  },
  "would-like": {
    titleZh: "I would like + 食物",
    ruleZh: "点餐用 I would like …, please. 比 I want 得体。鸡饭当菜名，常常不加 a。",
    ruleEn: "I would like chicken rice, please.",
    wrong: "I want chicken rice. Give me chilli.",
    right: "I would like chicken rice, please.",
    points: ["Would like + 食物。", "please 放句末。", "chicken rice 常不可数。"],
  },
  "would-you-like": {
    titleZh: "Would you like…?",
    ruleZh: "请客、让人：Would you like + 名词? 拒绝：No, thank you.",
    ruleEn: "Would you like a biscuit?",
    wrong: "You want biscuit?",
    right: "Would you like a biscuit?",
    points: ["Would you like，不是 You want。", "不要：No thank you 漏逗号也可以，但需有 thank you。"],
  },
  "present-simple": {
    titleZh: "一般现在时：习惯和校规",
    ruleZh: "每天如此用现在时。he / she / it 加 -s。",
    ruleEn: "We line up at assembly. She wears a pinafore.",
    wrong: "She wear pinafore.",
    right: "She wears a pinafore.",
    points: ["I/we/you/they 用原形。", "he/she/it 加 -s：wears, goes, has。"],
  },
  "present-continuous": {
    titleZh: "正在做：am / is / are + -ing",
    ruleZh: "说话这一刻在做的事，用 be + -ing。be 不能丢。",
    ruleEn: "We are playing at the park.",
    wrong: "We playing at the park.",
    right: "We are playing at the park.",
    points: ["They are studying. He is running.", "不是 We playing。"],
  },
  "past-simple": {
    titleZh: "一般过去时",
    ruleZh: "昨天、刚刚发生的事用过去。不规则：go→went, see→saw, eat→ate.",
    ruleEn: "Yesterday we went to camp. We saw monkeys.",
    wrong: "Yesterday we go and see monkeys.",
    right: "Yesterday we went and saw monkeys.",
    points: ["同一段叙事不要跳回现在。", "规则动词 + -ed：played, packed。"],
  },
  "present-perfect": {
    titleZh: "现在完成时：have / has + 过去分词",
    ruleZh: "从过去到现在仍真：have/has + 过去分词。有 yesterday 用过去。",
    ruleEn: "I have been here for six months. I came last year.",
    wrong: "I am here for six months. I have came last year.",
    right: "I have been here for six months. I came last year.",
    points: ["for / since 常配现在完成。", "came / went 是过去，不是 have came。"],
  },
  "going-to": {
    titleZh: "be going to + 原形",
    ruleZh: "打算：am/is/are going to + 动词原形。",
    ruleEn: "We are going to visit Ah Ma.",
    wrong: "We going to visit Ah Ma.",
    right: "We are going to visit Ah Ma.",
    points: ["going to 前面要有 am/is/are。", "后面是原形，没有 to visit 再加 to。"],
  },
  "lets-shall": {
    titleZh: "建议：Let's + 原形",
    ruleZh: "Let's + 动词原形。Shall we + 原形?",
    ruleEn: "Let's take the MRT. Shall we go on Sunday?",
    wrong: "Let's to go. We go Sunday?",
    right: "Let's go. Shall we go on Sunday?",
    points: ["Let's 后面没有 to。", "Shall we…? 是问句。"],
  },
  must: {
    titleZh: "must + 原形",
    ruleZh: "校规、必须：must + 动词原形。没有 must to。",
    ruleEn: "You must wear white shoes.",
    wrong: "You must to wear white shoes.",
    right: "You must wear white shoes.",
    points: ["must go / must wear。", "must not + 原形 = 不准。"],
  },
  "have-to": {
    titleZh: "have to + 原形",
    ruleZh: "职责、值日：have to / has to + 原形。",
    ruleEn: "We have to sweep today.",
    wrong: "We have to sweeping today.",
    right: "We have to sweep today.",
    points: ["have to + 原形。", "she has to…"],
  },
  imperative: {
    titleZh: "指令：动词原形",
    ruleZh: "命令、校规口令用原形。禁止：Do not + 原形。",
    ruleEn: "Line up. Do not run.",
    wrong: "You not run. Don't to run.",
    right: "Do not run.",
    points: ["Line up. Leave your bags.", "Do not run. 不是 Don't to run。"],
  },
  "please-imperative": {
    titleZh: "告示：Please + 动词原形",
    ruleZh: "广播和告示：Please + 原形。没有 Please to。",
    ruleEn: "Please mind the gap. Please proceed to the hall.",
    wrong: "Please to proceed. Please minding the gap.",
    right: "Please proceed to the hall.",
    points: [
      "Please mind / please stand / please wait：后面直接动词。",
      "PE is cancelled：告示用被动。",
    ],
  },
  comparatives: {
    titleZh: "比较级：-er than",
    ruleZh: "短词比较级：-er than。不要 more faster。",
    ruleEn: "Priya was faster than me.",
    wrong: "Priya is more faster than me.",
    right: "Priya is faster than me.",
    points: ["than 不能丢。", "the fastest：最高级前面有 the。"],
  },
  although: {
    titleZh: "Although 不加 but",
    ruleZh: "Although + 从句，主句不再加 but。中文「虽然…但是」只留一半。",
    ruleEn: "Although we lost, we tried.",
    wrong: "Although we lost, but we tried.",
    right: "Although we lost, we tried.",
    points: ["不要 Although…, but…。"],
  },
  "how-much": {
    titleZh: "How much / How many",
    ruleZh: "可数用 many；不可数用 much。rice / water 不可数。",
    ruleEn: "How many eggs? How much rice?",
    wrong: "How many rice? Two breads.",
    right: "How much rice? Two loaves of bread.",
    points: ["eggs 可数。rice, water, chilli（调料）常不可数。"],
  },
  "thank-you-for": {
    titleZh: "Thank you for + -ing",
    ruleZh: "谢谢你做了某事：Thank you for + 动词-ing。",
    ruleEn: "Thank you for keeping the school clean.",
    wrong: "Thank you for keep the school clean.",
    right: "Thank you for keeping the school clean.",
    points: ["for 后面是 -ing，不是原形。"],
  },
  "too-adj": {
    titleZh: "too + 形容词",
    ruleZh: "太…而难以：too + 形容词 (+ to + 原形)。",
    ruleEn: "It is too high to walk easily.",
    wrong: "It is too much high.",
    right: "It is too high to walk easily.",
    points: ["too high / too cold / too late。", "不是 too much high。"],
  },
  prefer: {
    titleZh: "prefer A to B",
    ruleZh: "更喜欢：I prefer A to B。to 不是 than。",
    ruleEn: "I prefer basketball to art.",
    wrong: "I prefer basketball than art.",
    right: "I prefer basketball to art.",
    points: ["prefer A to B。", "本课只钉这一句，不混 would rather。"],
  },
  because: {
    titleZh: "because + 原因",
    ruleZh: "because 后面接句子。不要 because of + 句子。",
    ruleEn: "It leaked because I dropped it.",
    wrong: "It leaked because I drop it.",
    right: "It leaked because I dropped it.",
    points: ["because + 主谓。", "时态和主句一致：过去对过去。"],
  },
  sequence: {
    titleZh: "First, then, finally",
    ruleZh: "说顺序：First… Then… Finally… 后面仍用过去时讲已经发生的事。",
    ruleEn: "First we cleared the desks. Then we packed the books.",
    wrong: "First we clear the desks. Then we packing.",
    right: "First we cleared the desks. Then we packed the books.",
    points: ["三词后面都接完整句子。", "讲过去就用过去。"],
  },
  "will-should": {
    titleZh: "should / will + 原形",
    ruleZh: "建议用 should；答应将要用 will。后面都是原形。",
    ruleEn: "You should sleep early. I will do my best.",
    wrong: "You should to sleep. I will doing my best.",
    right: "You should sleep early. I will do my best.",
    points: ["should rest / will bring。没有 to。"],
  },
  sorry: {
    titleZh: "I'm sorry I + 过去",
    ruleZh: "道歉：I'm sorry I + 过去时（已经发生的错）。",
    ruleEn: "I'm sorry I lost the book.",
    wrong: "I'm sorry I lose the book.",
    right: "I'm sorry I lost the book.",
    points: ["错已经发生，用过去：lost, broke, shouted。"],
  },
  "could-you": {
    titleZh: "Could you + 原形?",
    ruleZh: "请别人帮忙：Could you + 原形…?",
    ruleEn: "Could you help us?",
    wrong: "You help us? Could you to help?",
    right: "Could you help us?",
    points: ["Could you + 原形。", "比 Can you 更客气一点。"],
  },
  "need-to": {
    titleZh: "need to + 原形",
    ruleZh: "需要去做：need to + 动词原形。",
    ruleEn: "I need to hang the clothes.",
    wrong: "I need hang the clothes.",
    right: "I need to hang the clothes.",
    points: ["need to + 原形。"],
  },
  "like-ing": {
    titleZh: "like + -ing",
    ruleZh: "爱好：like / love / enjoy + 动词-ing。",
    ruleEn: "I like cycling.",
    wrong: "I like cycle.",
    right: "I like cycling.",
    points: ["like swimming，不是 like swim。"],
  },
  "there-is": {
    titleZh: "There is / There are",
    ruleZh: "某处有某物：There is + 单数。There are + 复数。",
    ruleEn: "There are many lights.",
    wrong: "Have many lights. There is many lights.",
    right: "There are many lights.",
    points: ["不要用 Have many… 当「有」。", "is 配单数，are 配复数。"],
  },
  "i-feel": {
    titleZh: "I feel + 情绪",
    ruleZh: "I feel nervous / calm / ready. 后面是形容词，不是名词乱套。",
    ruleEn: "I feel nervous because of the test.",
    wrong: "I feel nervously. I very nervous.",
    right: "I feel nervous.",
    points: ["feel + 形容词：nervous, happy, tired。"],
  },
  "want-to": {
    titleZh: "I want to be…",
    ruleZh: "将来志向：I want to be a + 职业。",
    ruleEn: "When I grow up I want to be a teacher.",
    wrong: "I want be teacher.",
    right: "I want to be a teacher.",
    points: ["want to be。", "可数职业前面常有 a：a teacher, an engineer。"],
  },
  prepositions: {
    titleZh: "at / on / in 时间与地点",
    ruleZh: "钟点用 at；日子用 on；月份、大地方用 in。",
    ruleEn: "Meet at the hall at 7:50. PE is on Friday.",
    wrong: "Meet in 7:50. On the hall.",
    right: "Meet at the hall at 7:50.",
    points: ["at 7:50, at the hall。", "on Friday。in June, in Singapore。"],
  },
  default: {
    titleZh: "本课句型",
    ruleZh: "先听，再说。只改名词，不改句型。",
    ruleEn: "Say the model line. Change only the noun or place.",
    wrong: "I want. You give me.",
    right: "Please say the model line.",
    points: ["一次只钉一个句型。", "用本课开口句，不直译中文。"],
  },
};

const ERROR_BY_FAMILY: Record<FormFamily, string> = {
  articles: "articles",
  "can-i": "collocation",
  "would-like": "collocation",
  "would-you-like": "collocation",
  "present-simple": "3sg",
  "present-continuous": "tense-shift",
  "past-simple": "tense-shift",
  "present-perfect": "tense-shift",
  "going-to": "tense-shift",
  "lets-shall": "collocation",
  must: "collocation",
  "have-to": "collocation",
  imperative: "collocation",
  "please-imperative": "collocation",
  comparatives: "collocation",
  although: "collocation",
  "how-much": "articles",
  "thank-you-for": "collocation",
  "too-adj": "collocation",
  prefer: "collocation",
  because: "tense-shift",
  sequence: "tense-shift",
  "will-should": "collocation",
  sorry: "tense-shift",
  "could-you": "collocation",
  "need-to": "collocation",
  "like-ing": "collocation",
  "there-is": "3sg",
  "i-feel": "collocation",
  "want-to": "articles",
  prepositions: "collocation",
  default: "collocation",
};

function settingOf(story: Storyline): string {
  const blob = `${story.title} ${story.focus} ${story.vocab.join(" ")}`.toLowerCase();
  const pairs: [RegExp, string][] = [
    [/lost and found|water bottle/, "at the Lost and Found counter"],
    [/assembly|pledge|field/, "on the school field"],
    [/pencil|classroom|quiz/, "in the classroom"],
    [/library/, "in the school library"],
    [/hawker|chicken rice/, "at a hawker centre"],
    [/fairprice|bookshop/, "at the shop counter"],
    [/mrt|platform|alight/, "on the MRT platform"],
    [/clinic|appointment|queue number/, "at the clinic"],
    [/canteen/, "in the canteen"],
    [/park|playground/, "at the neighbourhood park"],
    [/hdb|lift|void deck/, "at the HDB block"],
    [/fire drill/, "during the fire drill"],
    [/cca/, "at the CCA fair"],
    [/bus/, "on the bus"],
    [/hospital/, "in the hospital lobby"],
  ];
  for (const [re, s] of pairs) if (re.test(blob)) return s;
  return "at school in Singapore";
}

function modelLine(story: Storyline, family: FormFamily): string {
  if (story.n === 2) return "Is this your water bottle?";
  const o = story.oracy[0] ?? "Let's start.";
  if (family === "can-i" && !/^can i/i.test(o)) return "Can I borrow a pencil, please?";
  return o.replace(/…/g, "").trim();
}

function whoFor(i: number, story: Storyline): string {
  if (story.n === 2) return ["Aunty Tan", "Mei", "Mei"][i] ?? "Mei";
  return ["Mei", "Priya", "Ms Tan"][i % 3];
}

function cueFor(family: FormFamily, i: number, en: string): string {
  const bank: Partial<Record<FormFamily, string[]>> = {
    articles: [
      "阿姨拿着一件东西，就在面前。她怎么问？",
      "那就是你的。你怎么认领？",
      "拿到以后，怎么对工作人员说谢谢？",
    ],
    "can-i": [
      "你想借用桌上的东西。怎么礼貌地问？",
      "同学把东西递过来。她怎么说？",
      "你拿到了。怎么道谢？",
    ],
    "would-like": [
      "在小贩中心点餐。你怎么说？",
      "阿姨问辣不辣。你怎么答？",
      "位子不够。怎么问能否拼桌？",
    ],
    "would-you-like": [
      "你想请同学吃一块。怎么问？",
      "你现在不想要。怎么礼貌拒绝？",
      "也许等一会儿。怎么说？",
    ],
    "please-imperative": [
      "广播响了。第一句要抓住什么？",
      "第二句呢？",
      "门要关了 / 要去集合。怎么说？",
    ],
    imperative: [
      "火灾演习，老师下口令。第一句？",
      "不准跑。怎么说？",
      "袋子怎么办？",
    ],
    "lets-shall": [
      "你建议一起做。怎么开口？",
      "再提一个建议。",
      "定时间。怎么说？",
    ],
  };
  const rows = bank[family];
  if (rows?.[i]) return rows[i];
  if (i === 0) return `先听这一句，再用英语说出来：${en}`;
  return `下一句。不要看英文。`;
}

function todayFrom(story: Storyline): TodayLine[] {
  if (story.n === 2) {
    const lines = [
      {
        who: "Aunty Tan",
        en: "Is this your white water bottle with the pink flower?",
        cueZh: "阿姨拿着一个水瓶，就在面前。她怎么问？",
      },
      {
        who: "Mei",
        en: "Yes, Aunty! That is my white water bottle!",
        cueZh: "那就是 Mei 的瓶子。她怎么认领？",
      },
      {
        who: "Mei",
        en: "Thank you, Aunty!",
        cueZh: "拿到瓶子以后，怎么道谢？",
      },
    ];
    return lines.map((l, i) => ({ ...l, audio: `/audio/stories/2-${i}.mp3` }));
  }
  const family = formFamily(story);
  return story.oracy.slice(0, 3).map((en, i) => ({
    who: whoFor(i, story),
    en,
    cueZh: cueFor(family, i, en),
    audio: `/audio/stories/${story.n}-${i}.mp3`,
  }));
}

function framesFor(family: FormFamily, story: Storyline, model: string): string[] {
  const v = story.vocab;
  const extra = {
    articles: [
      "I lost a water bottle.",
      "I lost a lunch box.",
      "I lost an umbrella.",
      "I lost a pencil case.",
      "Is this your water bottle?",
      "Is this your lunch box?",
      "Is this your umbrella?",
      "That is my water bottle.",
      "That is my lunch box.",
      "Thank you, Aunty.",
    ],
    "can-i": [
      "Can I borrow a pencil, please?",
      "Can I borrow an eraser, please?",
      "Can I borrow a sharpener, please?",
      "Can I borrow a ruler, please?",
      "Can I sit here, please?",
      "Can I go to the toilet, please?",
      "Can I open the window, please?",
      "Can I drink some water, please?",
      "Yes. Here you are.",
      "Thank you.",
    ],
    "would-like": [
      "I would like chicken rice, please.",
      "I would like nasi lemak, please.",
      "I would like some soup, please.",
      "I would like a little chilli, please.",
      "I would like tea, please.",
      "I would like some fruit, please.",
    ],
    "would-you-like": [
      "Would you like a biscuit?",
      "Would you like some water?",
      "Would you like a seat?",
      "Would you like to play with us?",
      "No, thank you.",
      "Yes, please.",
    ],
    "please-imperative": [
      "Please mind the gap.",
      "Please stand clear.",
      "Please wait to be called.",
      "Please proceed to the hall.",
      "Please take a queue number.",
      "Please press the bell.",
      "Please have your NRIC ready.",
      "Please arrive 15 minutes early.",
    ],
    imperative: [
      "Line up.",
      "Line up quickly.",
      "Do not run.",
      "Do not talk.",
      "Leave your bags.",
      "Sit down.",
      "Turn off the lights.",
    ],
    "lets-shall": [
      "Let's go.",
      "Let's take the MRT.",
      "Let's leave at nine.",
      "Shall we go on Sunday?",
      "Shall we sit here?",
      "Why don't we try both?",
    ],
    "present-continuous": [
      "We are playing at the park.",
      "They are studying in the library.",
      "She is running on the field.",
      "He is eating in the canteen.",
      "I am writing now.",
    ],
    "past-simple": [
      "Yesterday we went to camp.",
      "We saw monkeys.",
      "We ate in the canteen.",
      "We slept in bunks.",
      "I dropped the bottle.",
    ],
    "going-to": [
      "We are going to visit Ah Ma.",
      "I am going to revise tonight.",
      "They are going to take the MRT.",
      "She is going to sit the test.",
    ],
    prefer: [
      "I prefer basketball to art.",
      "I prefer art to basketball.",
      "She prefers reading to running.",
      "We prefer the canteen to the hall.",
    ],
    although: [
      "Although we lost, we tried.",
      "Although I was nervous, I tried.",
      "Although it rained, we went.",
      "Although I was angry, I listened.",
    ],
    "how-much": [
      "How much is this workbook?",
      "How much rice?",
      "How many eggs?",
      "How many books?",
    ],
    comparatives: [
      "Priya was faster than me.",
      "This bag is heavier than that one.",
      "He is taller than his brother.",
      "It was the best race.",
    ],
    must: [
      "You must wear white shoes.",
      "You must not run.",
      "We must line up.",
      "She must return the book.",
    ],
    "have-to": [
      "We have to sweep today.",
      "I have to finish this.",
      "She has to sit here.",
      "They have to wait.",
    ],
    "present-simple": [
      "We line up at assembly.",
      "She wears a pinafore.",
      "I am in Blue House.",
      "Recess is at 10:30.",
    ],
    "thank-you-for": [
      "Thank you for keeping the school clean.",
      "Thank you for helping me.",
      "Thank you for waiting.",
      "Thank you for the present.",
    ],
    "could-you": [
      "Could you help us?",
      "Could you repeat that, please?",
      "Could you open the door?",
      "Could you wait, please?",
    ],
    "need-to": [
      "I need to hang the clothes.",
      "We need to take Lift A.",
      "You need to rest.",
      "She needs to register first.",
    ],
    sequence: [
      "First we cleared the desks.",
      "Then we packed the books.",
      "Finally we said goodbye.",
      "First I queued. Then I sat down.",
    ],
    "present-perfect": [
      "I have been here for six months.",
      "She has been working hard.",
      "Have you been here long?",
      "We have planted tomatoes.",
    ],
    "like-ing": [
      "I like cycling.",
      "I like swimming.",
      "She likes reading.",
      "We like eating chicken rice.",
    ],
    "will-should": [
      "You should sleep early.",
      "You should rest.",
      "I will do my best.",
      "I will bring your books.",
    ],
    sorry: [
      "I'm sorry I lost the book.",
      "I'm sorry I broke it.",
      "I'm sorry I shouted.",
      "I'm sorry I was late.",
    ],
    "too-adj": [
      "It is too high to walk easily.",
      "It is too late to go now.",
      "This bag is too heavy.",
      "The soup is too spicy.",
    ],
    "there-is": [
      "There are many lights.",
      "There is a notice on the door.",
      "There were orangutans.",
      "There is no lift today.",
    ],
    "i-feel": [
      "I feel nervous.",
      "I feel ready.",
      "I feel tired.",
      "I feel better now.",
    ],
    "want-to": [
      "I want to be a teacher.",
      "I want to be a doctor.",
      "I want to be an engineer.",
      "When I grow up I want to be a nurse.",
    ],
    prepositions: [
      "Meet at the hall at 7:50.",
      "The test is on Friday.",
      "We came in June.",
      "Sit at the counter.",
    ],
    because: [
      "It leaked because I dropped it.",
      "We waited because the lift was broken.",
      "I feel nervous because of the test.",
    ],
    default: [],
  } as Record<FormFamily, string[]>;

  const bank = extra[family] ?? [];
  const fromVocab = v.slice(0, 4).map((word) => {
    if (family === "articles") return `Is this your ${word}?`;
    if (family === "can-i") return `Can I use the ${word}, please?`;
    if (family === "please-imperative") return `Please use the ${word}.`;
    return model.includes(word) ? model : `${model.replace(/\.$/, "")}`.trim();
  });
  const merged = [model, ...bank, ...fromVocab].filter(Boolean);
  const seen = new Set<string>();
  const out: string[] = [];
  for (const line of merged) {
    const k = line.toLowerCase();
    if (seen.has(k)) continue;
    seen.add(k);
    out.push(line);
    if (out.length >= 10) break;
  }
  while (out.length < 8) out.push(model);
  return out.slice(0, 10);
}

function contrastsFor(
  family: FormFamily,
  story: Storyline,
  teach: GrammarTeach,
): ContrastTask[] {
  const pairs: [string, string, string, string][] = [
    [
      "哪一句是新加坡校园里要说的？",
      teach.right.split(/(?<=[.!?])\s/)[0],
      teach.wrong.split(/(?<=[.!?])\s/)[0],
      teach.points[0] ?? teach.ruleZh,
    ],
  ];

  if (family === "please-imperative") {
    const model = story.oracy[0] ?? "Please mind the gap.";
    const broken = /^Please /i.test(model)
      ? model.replace(/^Please /i, "Please to ")
      : `Please to ${model.charAt(0).toLowerCase()}${model.slice(1)}`;
    return [
      {
        id: `${story.n}-c0`,
        promptZh: "广播 / 告示怎么说？",
        right: model,
        wrong: broken,
        whyZh: "Please 后面直接动词原形，没有 to。",
      },
      {
        id: `${story.n}-c1`,
        promptZh: "取消体育课。哪一句像告示？",
        right: "PE is cancelled.",
        wrong: "PE cancel.",
        whyZh: "告示用 is cancelled。",
      },
      {
        id: `${story.n}-c2`,
        promptZh: "请等人叫号。",
        right: "Please wait to be called.",
        wrong: "Please to wait.",
        whyZh: "Please wait，不是 Please to wait。",
      },
    ];
  }
  if (family === "articles") {
    return [
      {
        id: `${story.n}-c0`,
        promptZh: "第一次说起这个瓶子。哪一句对？",
        right: "I lost a water bottle.",
        wrong: "I lost water bottle.",
        whyZh: "可数单数第一次出现，要有 a。",
      },
      {
        id: `${story.n}-c1`,
        promptZh: "问面前这一件。哪一句对？",
        right: "Is this your water bottle?",
        wrong: "This is your bottle?",
        whyZh: "问句用 Is this your…? 不是 This is your…?",
      },
      {
        id: `${story.n}-c2`,
        promptZh: "认领自己的瓶子。哪一句对？",
        right: "That is my water bottle.",
        wrong: "That is your water bottle.",
        whyZh: "自己的用 my，不是 your。",
      },
    ];
  }
  if (family === "can-i") {
    return [
      {
        id: `${story.n}-c0`,
        promptZh: "向同学借铅笔。哪一句礼貌？",
        right: "Can I borrow a pencil, please?",
        wrong: "I borrow your pencil.",
        whyZh: "请求许可用 Can I + 原形，please。",
      },
      {
        id: `${story.n}-c1`,
        promptZh: "Can 后面的动词。",
        right: "Can I sit here, please?",
        wrong: "Can I to sit here, please?",
        whyZh: "Can 后面没有 to。",
      },
      {
        id: `${story.n}-c2`,
        promptZh: "eraser 前面用 a 还是 an？",
        right: "Can I borrow an eraser, please?",
        wrong: "Can I borrow a eraser, please?",
        whyZh: "eraser 以元音音素开头，用 an。",
      },
    ];
  }

  const second: Partial<Record<FormFamily, [string, string, string]>> = {
    "please-imperative": [
      "Please proceed to the hall.",
      "Please to proceed to the hall.",
      "Please 后面直接动词原形。",
    ],
    although: [
      "Although we lost, we tried.",
      "Although we lost, but we tried.",
      "Although 已经等于「虽然」，不要再加 but。",
    ],
    "present-simple": [
      "She wears a pinafore.",
      "She wear a pinafore.",
      "she 后面现在时加 -s。",
    ],
    "present-continuous": [
      "We are playing at the park.",
      "We playing at the park.",
      "be 不能丢：are playing。",
    ],
    "past-simple": [
      "Yesterday we went to camp.",
      "Yesterday we go to camp.",
      "yesterday 用过去：went。",
    ],
    "going-to": [
      "We are going to visit Ah Ma.",
      "We going to visit Ah Ma.",
      "going to 前面要有 are。",
    ],
    "lets-shall": [
      "Let's take the MRT.",
      "Let's to take the MRT.",
      "Let's 后面原形，没有 to。",
    ],
    prefer: [
      "I prefer basketball to art.",
      "I prefer basketball than art.",
      "prefer A to B，不是 than。",
    ],
    comparatives: [
      "Priya is faster than me.",
      "Priya is more faster than me.",
      "faster 已经是比较级，不要 more faster。",
    ],
    must: [
      "You must wear white shoes.",
      "You must to wear white shoes.",
      "must 后面原形，没有 to。",
    ],
    "how-much": [
      "How much rice?",
      "How many rice?",
      "rice 不可数，用 much。",
    ],
    "thank-you-for": [
      "Thank you for helping me.",
      "Thank you for help me.",
      "for 后面 -ing。",
    ],
    "would-like": [
      "I would like chicken rice, please.",
      "I want chicken rice. Give me.",
      "点餐用 would like，please。",
    ],
    "there-is": [
      "There are many lights.",
      "Have many lights.",
      "某处有某物用 There is / There are，不用 Have many。",
    ],
    "want-to": [
      "I want to be a teacher.",
      "I want be teacher.",
      "want to be a + 职业。",
    ],
  };
  const more = second[family];
  const out: ContrastTask[] = [
    {
      id: `${story.n}-c0`,
      promptZh: pairs[0][0],
      right: pairs[0][1],
      wrong: pairs[0][2],
      whyZh: pairs[0][3],
    },
  ];
  if (more) {
    out.push({
      id: `${story.n}-c1`,
      promptZh: "哪一句语法对？",
      right: more[0],
      wrong: more[1],
      whyZh: more[2],
    });
  } else {
    out.push({
      id: `${story.n}-c1`,
      promptZh: "哪一句语法对？",
      right: teach.right,
      wrong: teach.wrong,
      whyZh: teach.ruleZh,
    });
  }
  out.push({
    id: `${story.n}-c2`,
    promptZh: "开口时用哪一句？",
    right: story.oracy[0],
    wrong: teach.wrong.split(/(?<=[.!?])\s/)[0] ?? teach.wrong,
    whyZh: "用本课开口句，不要直译。",
  });
  return out;
}

function meaningFor(family: FormFamily, story: Storyline): MeaningTask[] {
  const seed = story.n * 17;
  const make = (
    id: string,
    situationZh: string,
    correct: string,
    distractors: string[],
    whyZh: string,
    i: number,
  ): MeaningTask => {
    const packed = packOptions(correct, distractors, seed + i);
    return { id, situationZh, ...packed, whyZh };
  };

  if (family === "articles" || story.n === 2) {
    return [
      make(
        `${story.n}-m0`,
        "阿姨手里只有一个水瓶，就在 Mei 面前。",
        "Is this your water bottle?",
        ["Are these your water bottles?", "Is that your bag over there?"],
        "面前一件用 this + 单数。",
        0,
      ),
      make(
        `${story.n}-m1`,
        "Mei 第一次告诉 Priya：她丢了瓶子。对方还没看见那个瓶子。",
        "I lost a water bottle.",
        ["I lost the water bottles.", "I lost water bottle."],
        "第一次说起、对方还没看见：a + 单数。",
        1,
      ),
      make(
        `${story.n}-m2`,
        "瓶子已经在 Mei 手里。她要确认是自己的。",
        "That is my white water bottle.",
        ["That is your white water bottle.", "Those are my white water bottles."],
        "自己的用 my。一件用 is。",
        2,
      ),
    ];
  }
  if (family === "can-i") {
    return [
      make(
        `${story.n}-m0`,
        "铅笔断了。Mei 还没有拿 Priya 的笔，正在开口问。",
        "Can I borrow a pencil, please?",
        ["I borrow your pencil.", "I borrowed a pencil."],
        "还在请求许可，用 Can I… please?",
        0,
      ),
      make(
        `${story.n}-m1`,
        "Priya 把笔递过去。",
        "Yes. Here you are.",
        ["Can I borrow a pencil, please?", "Give me."],
        "答应并递给对方：Here you are.",
        1,
      ),
      make(
        `${story.n}-m2`,
        "她想问能不能坐这个空位。",
        "Can I sit here, please?",
        ["Can I to sit here, please?", "I sit here."],
        "同一句型，只换动词 sit。",
        2,
      ),
    ];
  }
  if (family === "please-imperative") {
    return [
      make(
        `${story.n}-m0`,
        "月台广播：脚和车门之间有缝。",
        "Please mind the gap.",
        ["Please to mind the gap.", "Please minding the gap."],
        "Please + 原形 mind。",
        0,
      ),
      make(
        `${story.n}-m1`,
        "校内广播：因为下雨，体育课取消，去礼堂。",
        "Please proceed to the hall.",
        ["Please proceed to the field.", "Please to proceed to the hall."],
        "听到的地点是 hall。",
        1,
      ),
      make(
        `${story.n}-m2`,
        "诊所屏幕叫号。你还没被叫到。",
        "Please wait to be called.",
        ["Please go in now.", "Please to wait."],
        "没叫到就 wait to be called。",
        2,
      ),
    ];
  }
  if (family === "present-continuous") {
    return [
      make(
        `${story.n}-m0`,
        "照片里：两个孩子此刻正在公园玩。",
        "They are playing at the park.",
        ["They play at the park every day.", "They playing at the park."],
        "照片里正在做：are + -ing。",
        0,
      ),
      make(
        `${story.n}-m1`,
        "问别人此刻在干什么。",
        "What are they doing?",
        ["What they do?", "What do they doing?"],
        "进行时问句：What are they doing?",
        1,
      ),
      make(
        `${story.n}-m2`,
        "爱好，不是此刻。",
        "I like cycling.",
        ["I am liking cycling.", "I like cycle."],
        "爱好用 like + -ing，不用进行时。",
        2,
      ),
    ];
  }
  if (family === "past-simple") {
    return [
      make(
        `${story.n}-m0`,
        "事情发生在 yesterday。",
        "Yesterday we went to camp.",
        ["Yesterday we go to camp.", "Yesterday we are going to camp."],
        "yesterday → went。",
        0,
      ),
      make(
        `${story.n}-m1`,
        "他们看见了猴子（已经发生）。",
        "We saw monkeys.",
        ["We see monkeys.", "We have see monkeys."],
        "see → saw。",
        1,
      ),
      make(
        `${story.n}-m2`,
        "瓶子漏了，因为她摔了它。",
        "It leaked because I dropped it.",
        ["It leak because I drop it.", "It leaked because I drop it."],
        "两半都用过去。",
        2,
      ),
    ];
  }

  const teach = TEACH[family];
  const model = modelLine(story, family);
  return [
    make(
      `${story.n}-m0`,
      `场景：${story.focus}。孩子要开口。`,
      model,
      [teach.wrong.split(/(?<=[.!?])\s/)[0], "Give me."],
      teach.ruleZh,
      0,
    ),
    make(
      `${story.n}-m1`,
      "哪一句是本课句型？",
      teach.right.split(/(?<=[.!?])\s/)[0],
      [teach.wrong.split(/(?<=[.!?])\s/)[0], story.oracy[1] ?? teach.wrong],
      teach.points[0] ?? teach.ruleZh,
      1,
    ),
    make(
      `${story.n}-m2`,
      "换一个词，句型不变。",
      (TEACH[family] && framesFor(family, story, model)[1]) || model,
      [teach.wrong, model.replace(/\bcan\b/i, "Can to")],
      "只换名词或动词，不改句型。",
      2,
    ),
  ];
}

function tilesFor(story: Storyline, model: string): TileTask {
  const answer = story.n === 2 ? "Is this your water bottle?" : model.replace(/!$/, "").trim();
  const words = answer
    .replace(/[?!.,]/g, "")
    .split(/\s+/)
    .filter(Boolean);
  const punct = answer.endsWith("?") ? "?" : answer.endsWith(".") ? "." : "";
  const shuffled = seededShuffle(words, story.n * 31);
  return {
    promptZh: "按顺序点词，拼出今天的问句 / 开口句。",
    words: shuffled,
    answer: punct ? `${words.join(" ")}${punct}` : words.join(" "),
  };
}

function writeFor(family: FormFamily, story: Storyline, model: string): WriteTask {
  const samples: Partial<Record<FormFamily, WriteTask>> = {
    articles: {
      promptZh: "先写一句：问面前这件东西是不是对方的。只要一句。",
      promptEn: "Write one question with Is this your…?",
      sample: "Is this your water bottle?",
      must: [
        { re: "is this your", hintZh: "用上 Is this your" },
        { re: "\\?", hintZh: "这是问句，句末要问号" },
      ],
    },
    "can-i": {
      promptZh: "写一句礼貌请求：Can I + 动词, please?",
      promptEn: "Write one Can I…, please? line. You may change the thing.",
      sample: "Can I borrow a pencil, please?",
      must: [
        { re: "can i \\w+", hintZh: "用 Can I + 动词原形" },
        { re: "please", hintZh: "加 please" },
      ],
    },
    "would-like": {
      promptZh: "写一句点餐。",
      promptEn: "Write I would like …, please.",
      sample: "I would like chicken rice, please.",
      must: [
        { re: "would like", hintZh: "用 would like" },
        { re: "please", hintZh: "加 please" },
      ],
    },
    "please-imperative": {
      promptZh: "写一句告示或广播：Please + 动词。",
      promptEn: "Write one Please + verb line.",
      sample: "Please mind the gap.",
      must: [{ re: "please \\w+", hintZh: "Please 后面直接动词原形" }],
    },
    although: {
      promptZh: "写一句 Although…, … 不要加 but。",
      promptEn: "Write one Although sentence. Do not use but.",
      sample: "Although we lost, we tried.",
      must: [
        { re: "although", hintZh: "用 Although" },
        { re: "^(?!.*\\bbut\\b).*$", hintZh: "不要加 but" },
      ],
    },
    prefer: {
      promptZh: "写一句 I prefer A to B。",
      promptEn: "Write I prefer A to B.",
      sample: "I prefer basketball to art.",
      must: [
        { re: "prefer", hintZh: "用 prefer" },
        { re: "\\bto\\b", hintZh: "是 prefer A to B，不是 than" },
      ],
    },
  };
  if (samples[family]) return samples[family]!;
  return {
    promptZh: "先写一句，必须用上今天的句型。写得出再写 3 句。",
    promptEn: `Write one sentence like: ${model}`,
    sample: model,
    must: [{ re: ".{8,}", hintZh: "写出完整一句" }],
  };
}

function clipsFor(story: Storyline): LessonClip[] {
  return lessonClips(story.n);
}

export function buildPedagogy(story: Storyline): Pedagogy {
  const family = formFamily(story);
  const teach = TEACH[family];
  const model = modelLine(story, family);
  return {
    family,
    teach: {
      ...teach,
      titleZh: teach.titleZh,
    },
    today: todayFrom(story),
    frames: framesFor(family, story, model),
    contrasts: contrastsFor(family, story, teach),
    meaning: meaningFor(family, story),
    tiles: tilesFor(story, model),
    write: writeFor(family, story, model),
    clips: clipsFor(story),
    parentHowZh:
      "先点播放让孩子听。不要先把英文读完。听完跟读，再选对的一句。写的时候只查今天这一个句型。",
    setting: settingOf(story),
    errorId: ERROR_BY_FAMILY[family],
  };
}

export function defaultReadingFor(
  story: Storyline,
  script?: { scene: string; lines: { who: string; say: string }[] },
): string {
  if (script?.lines.length) {
    const body = script.lines.map((l) => `${l.who} said, "${l.say}"`).join(" ");
    return `${script.scene}\n\n${body}`;
  }
  const setting = settingOf(story);
  const a = story.oracy[0];
  const b = story.oracy[1];
  const c = story.oracy[2];
  return `Mei and Priya were ${setting}.\n\nMei said, "${a}"${b ? ` Priya said, "${b}"` : ""}${c ? ` Then Mei said, "${c}"` : ""}\n\nThey said the same words once more, then they went on.`;
}
