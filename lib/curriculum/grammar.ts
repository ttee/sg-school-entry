import type { GrammarSheet } from "./types";

export const GRAMMAR_SHEETS: GrammarSheet[] = [
  {
    id: "linkers",
    titleZh: "Singapore MOE High-Yield Linkers",
    yieldZh: "A2 Key Reading 4 · AEIS cloze · P4 Week 3",
    ruleZh: "Fill in the blanks with however, therefore, or in addition. One linker per sentence. Capitalise at the start of a sentence.",
    items: [
      {
        id: "g-l-1",
        prompt: "The library was under renovation; __________, students had to borrow books online.",
        options: ["however", "therefore", "in addition", "although"],
        correct: 1,
        errorId: "because-so",
        why: "Renovation → result: therefore.",
      },
      {
        id: "g-l-2",
        prompt: "Primary school students must wear full school uniform. __________, they must wear white shoes.",
        options: ["However", "Therefore", "In addition", "Although"],
        correct: 2,
        errorId: "because-so",
        why: "Adding a second rule: In addition.",
      },
      {
        id: "g-l-3",
        prompt: "John studied hard for the examination; __________, he made a few careless mistakes.",
        options: ["however", "therefore", "in addition", "so"],
        correct: 0,
        errorId: "although-but",
        why: "Contrast with the expected result: however.",
      },
    ],
  },
  {
    id: "articles",
    titleZh: "冠词 a / an / the / 零冠词",
    yieldZh: "A2 Key cloze · AEIS 填空",
    ruleZh: "第一次出现用 a/an；双方都知道用 the；by bus、at recess 常常零冠词。",
    items: [
      { id: "g-a-1", prompt: "I lost ___ water bottle.", options: ["a", "an", "the", "some"], correct: 0, errorId: "articles", why: "首次提到用 a。" },
      { id: "g-a-2", prompt: "Please give me ___ bottle on the counter. (we can both see it)", options: ["a", "an", "the", "—"], correct: 2, errorId: "articles", why: "双方可见的那个：the。" },
      { id: "g-a-3", prompt: "She is ___ honest prefect.", options: ["a", "an", "the", "—"], correct: 1, errorId: "articles", why: "honest 以元音音素开头：an。" },
      { id: "g-a-4", prompt: "We go ___ MRT.", options: ["by", "by the", "on", "with the"], correct: 0, errorId: "zero-article-by", why: "by MRT 零冠词。" },
      { id: "g-a-5", prompt: "___ sun was hot at Sports Day.", options: ["A", "An", "The", "—"], correct: 2, errorId: "articles", why: "世上独一无二：the sun。" },
      { id: "g-a-6", prompt: "Meet me after school at ___ office.", options: ["a", "an", "the", "—"], correct: 2, errorId: "articles", why: "学校里大家都知道的办公室：the。" },
    ],
  },
  {
    id: "tense",
    titleZh: "时态一致（过去叙事不跳回现在）",
    yieldZh: "AEIS 作文 · A2/B1 写作",
    ruleZh: "有 yesterday / last week 用过去。有 for / since 且仍在继续用现在完成。同一段叙事保持同一时态。",
    items: [
      { id: "g-t-1", prompt: "Yesterday Wei ___ chicken rice.", options: ["buy", "buys", "bought", "has bought"], correct: 2, errorId: "tense-shift", why: "Yesterday → bought。" },
      { id: "g-t-2", prompt: "He sat down and ___ his tray.", options: ["puts", "put", "is putting", "has put"], correct: 1, errorId: "tense-shift", why: "并列过去：put。" },
      { id: "g-t-3", prompt: "I ___ here since January.", options: ["am", "was", "have been", "had been"], correct: 2, errorId: "present-perfect", why: "since + 现在完成。" },
      { id: "g-t-4", prompt: "I ___ East Coast last year.", options: ["have visited", "visited", "visit", "had visit"], correct: 1, errorId: "present-perfect", why: "last year 结束的过去。" },
      { id: "g-t-5", prompt: "When I arrived, the bus ___ .", options: ["left", "has left", "had left", "leaves"], correct: 2, errorId: "present-perfect", why: "过去的过去 had left。" },
      { id: "g-t-6", prompt: "Right now Priya ___ her bag.", options: ["zip", "zips", "is zipping", "zipped"], correct: 2, errorId: "continuous", why: "right now → is zipping。" },
    ],
  },
  {
    id: "sva",
    titleZh: "主谓一致",
    yieldZh: "AEIS 50-MCQ",
    ruleZh: "he/she/it/everyone/each + -s。复数名词 + 原形。集体名词在选择题里常按单数。",
    items: [
      { id: "g-s-1", prompt: "Everyone ___ a water bottle.", options: ["have", "has", "are", "is have"], correct: 1, errorId: "sva-everyone", why: "everyone 单数。" },
      { id: "g-s-2", prompt: "The students ___ quiet.", options: ["is", "are", "has", "was"], correct: 1, errorId: "sva-everyone", why: "students 复数。" },
      { id: "g-s-3", prompt: "Ms Tan ___ us Science.", options: ["teach", "teaches", "teaching", "are teaching"], correct: 1, errorId: "3sg", why: "teaches。" },
      { id: "g-s-4", prompt: "A pair of shoes ___ under the bench.", options: ["is", "are", "have", "were is"], correct: 0, errorId: "sva-everyone", why: "pair 是中心词，单数。" },
    ],
  },
  {
    id: "transform",
    titleZh: "句型转换 so/such · too/enough · although",
    yieldZh: "B1 · AEIS transformation",
    ruleZh: "so + adj；such + a + noun。too + adj + to。adj + enough + to。although 不加 but。",
    items: [
      { id: "g-x-1", prompt: "The drive was very long. → It was ___ a long drive.", options: ["so", "such", "too", "enough"], correct: 1, errorId: "too-enough", why: "such a + 名词。" },
      { id: "g-x-2", prompt: "Mei was very tired. She could not run. → She was ___ tired to run.", options: ["so", "too", "enough", "such"], correct: 1, errorId: "too-enough", why: "too tired to。" },
      { id: "g-x-3", prompt: "He can reach the shelf. He is tall. → He is tall ___ to reach the shelf.", options: ["too", "so", "enough", "such"], correct: 2, errorId: "too-enough", why: "tall enough to。" },
      { id: "g-x-4", prompt: "I was nervous. I tried. → ___ I was nervous, I tried.", options: ["Although", "Despite", "Because", "However"], correct: 0, errorId: "although-but", why: "although + 从句。" },
      { id: "g-x-5", prompt: "Rain did not stop the race. → ___ the rain, the race continued.", options: ["Although", "Despite", "So", "Because"], correct: 1, errorId: "although-but", why: "despite + 名词。" },
    ],
  },
  {
    id: "cloze",
    titleZh: "完形填空（冠词 / 介词 / 连接词）",
    yieldZh: "A2 Key R4/R5 · AEIS cloze",
    ruleZh: "先读完全句再选。看空格前后是名词、动词还是两个句子。",
    items: [
      { id: "g-c-1", prompt: "We have English ___ Monday morning.", options: ["in", "on", "at", "by"], correct: 1, errorId: "prep-time", why: "on Monday morning。" },
      { id: "g-c-2", prompt: "The notice is ___ the board.", options: ["in", "on", "at", "to"], correct: 1, errorId: "prep-place", why: "on the board。" },
      { id: "g-c-3", prompt: "___ it was raining, we stayed in the hall.", options: ["So", "Because", "Despite", "Therefore"], correct: 1, errorId: "because-so", why: "because + 从句。" },
      { id: "g-c-4", prompt: "Bring ___ umbrella. It may rain.", options: ["a", "an", "the", "—"], correct: 1, errorId: "articles", why: "umbrella 元音：an。" },
      { id: "g-c-5", prompt: "I enjoy ___ football after school.", options: ["play", "to play", "playing", "played"], correct: 2, errorId: "like-ing", why: "enjoy + -ing。" },
    ],
  },
  {
    id: "punctuation",
    titleZh: "标点：不要逗号连接两个完整句",
    yieldZh: "AEIS 作文自改",
    ruleZh: "两个主谓完整的句子要用句号、分号或 because/so/and 连接，不能只用逗号。",
    items: [
      { id: "g-p-1", prompt: "Choose the correct sentence.", options: ["I was late, I missed the bus.", "I was late. I missed the bus.", "I was late I missed the bus.", "I, was late I missed the bus."], correct: 1, errorId: "punctuation", why: "两句用句号分开。" },
      { id: "g-p-2", prompt: "Choose the correct question.", options: ["What time do you wake up.", "What time do you wake up?", "What time do you wake up!", "what time do you wake up?"], correct: 1, errorId: "punctuation", why: "疑问句问号；句首大写。" },
      { id: "g-p-3", prompt: "Lost and Found is a name. Which is correct on a sign?", options: ["lost and found", "Lost and found", "Lost And Found", "Lost and Found"], correct: 3, errorId: "punctuation", why: "专名各实词大写。" },
      { id: "g-p-4", prompt: "Direct speech.", options: ["She said I am thirsty.", "She said, \"I am thirsty.\"", "She said I am thirsty\".", "She said \"I am thirsty."], correct: 1, errorId: "punctuation", why: "引语前逗号，引号成对。" },
    ],
  },
];

export function getGrammar(id: string) {
  return GRAMMAR_SHEETS.find((s) => s.id === id);
}
