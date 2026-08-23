import type { McqItem, Paper } from "./types";
import type { ContextTopic } from "./singapore-context";
import type { Storyline, Theme } from "./storylines";

export type GrammarTeach = {
  titleZh: string;
  ruleZh: string;
  ruleEn: string;
  wrong: string;
  right: string;
  points: string[];
};

export type StoryLesson = {
  sceneZh: string;
  sceneEn: string;
  reading: string;
  grammar: GrammarTeach;
  vocab: { word: string; example: string; noteZh: string }[];
  dialogue: { who: string; say: string }[];
  dialogueScene?: string;
  writeZh: string;
  writeEn: string;
  starters: string[];
  paper: Paper;
};

const GRAMMAR: { test: RegExp; teach: GrammarTeach }[] = [
  {
    test: /would like|some\s*\/\s*any/i,
    teach: {
      titleZh: "点餐：would like；some / any",
      ruleZh:
        "点餐用 I would like + 食物，比 I want 得体。肯定句和客气请求用 some；疑问和否定用 any。chicken rice 当菜名，常常不加 a。",
      ruleEn:
        "I would like chicken rice, please. Can I have some chilli? Is there any soup?",
      wrong: "I want chicken rice. Give me chilli. I need a chicken rice.",
      right: "I would like chicken rice, please. Can I have some chilli?",
      points: [
        "Would like = want，但排队点餐时更礼貌。",
        "some：肯定 / 客气请求（I'd like some soup）。",
        "any：疑问 / 否定（Is there any soup? We haven't any seats.）。",
        "chicken rice、nasi lemak 作一碟菜，常不可数。",
      ],
    },
  },
  {
    test: /a\/an\/the|Is this your/i,
    teach: {
      titleZh: "冠词 a / an / the；Is this your…?",
      ruleZh: "第一次说用 a/an。双方都看见、已经知道用 the。问失物：Is this your + 单数名词?",
      ruleEn: "I lost a bottle. Is this your bottle? Yes, that is the bottle. It is mine.",
      wrong: "I lost water bottle. This is your bottle?",
      right: "I lost a water bottle. Is this your bottle?",
      points: [
        "可数单数不能裸奔：a water bottle。",
        "问近处的一件：Is this your…?",
        "your / mine：Is this yours? Yes, it's mine.",
      ],
    },
  },
  {
    test: /present simple|must(?! not)/i,
    teach: {
      titleZh: "一般现在时与 must",
      ruleZh: "习惯、校规用现在时。he/she/it 加 -s。must + 动词原形，不加 to。",
      ruleEn: "We line up at assembly. She wears a pinafore. You must wear white shoes.",
      wrong: "She wear pinafore. You must to wear white shoes.",
      right: "She wears a pinafore. You must wear white shoes.",
      points: ["第三人称 -s。", "must go / must wear，没有 must to。"],
    },
  },
  {
    test: /can i|may i|could you|would you like/i,
    teach: {
      titleZh: "礼貌请求",
      ruleZh: "Can I / May I / Could you + 原形。Would you like + 名词或 to + 动词。回答：Yes, here you are. / No, thank you.",
      ruleEn: "Can I borrow a pencil, please? Would you like some soup?",
      wrong: "I borrow your pencil. You want soup?",
      right: "Can I borrow a pencil, please? Would you like some soup?",
      points: ["please 放句末或句首。", "Would you like 不是 Do you want 那么硬。"],
    },
  },
  {
    test: /imperative|must not|don't/i,
    teach: {
      titleZh: "指令与禁止",
      ruleZh: "指令用动词原形。禁止用 Do not / Don't / must not + 原形。",
      ruleEn: "Line up. Do not run. You must not leave your bags.",
      wrong: "You not run. Don't to run.",
      right: "Do not run. You must not run.",
      points: ["Don't + 原形。", "must not = 不准，不是 don't have to。"],
    },
  },
  {
    test: /present continuous|like \+ -ing|like \+ -ing/i,
    teach: {
      titleZh: "现在进行时；like + -ing",
      ruleZh: "正在做：am/is/are + -ing。爱好：like / love / enjoy + -ing。",
      ruleEn: "We are playing at the park. I like cycling.",
      wrong: "We playing. I like cycle.",
      right: "We are playing. I like cycling.",
      points: ["be 不能丢。", "like swimming，不是 like swim。"],
    },
  },
  {
    test: /going to|shall we|let's|why don't we/i,
    teach: {
      titleZh: "打算与建议",
      ruleZh: "打算：am/is/are going to + 原形。建议：Shall we…? Let's… Why don't we…?",
      ruleEn: "We are going to visit Ah Ma. Shall we go on Sunday? Let's take the MRT.",
      wrong: "We going to visit. Let's to go.",
      right: "We are going to visit Ah Ma. Let's take the MRT.",
      points: ["going to 前面要有 be。", "Let's 后面原形，没有 to。"],
    },
  },
  {
    test: /past simple|yesterday|first \/ then/i,
    teach: {
      titleZh: "一般过去时",
      ruleZh: "有 yesterday / last week / then 用过去。不规则：go→went, see→saw, eat→ate。顺序：first, then, finally。",
      ruleEn: "Yesterday we went to the hawker centre. First we queued. Then we ate.",
      wrong: "Yesterday we go and eat chicken rice.",
      right: "Yesterday we went and ate chicken rice.",
      points: ["同一段叙事不要跳回现在。", "finally 后面仍用过去。"],
    },
  },
  {
    test: /present perfect|have been|has been/i,
    teach: {
      titleZh: "现在完成时",
      ruleZh: "从过去到现在仍真：have/has + 过去分词。for / since。有 last year / yesterday 用过去。",
      ruleEn: "I have been here for six months. I came last year.",
      wrong: "I have came last year. I am here for six months.",
      right: "I came last year. I have been here for six months.",
      points: ["finished time → past simple。", "for/since 仍在 → present perfect。"],
    },
  },
  {
    test: /how many|how much|quantit/i,
    teach: {
      titleZh: "How many / How much",
      ruleZh: "可数用 many；不可数用 much。eggs 可数，rice / milk 不可数。",
      ruleEn: "How many eggs? How much rice?",
      wrong: "How many rice? Two breads.",
      right: "How much rice? Two loaves of bread.",
      points: ["rice, water, chilli（当调料）常不可数。"],
    },
  },
  {
    test: /comparativ|faster|tallest|-er|more /i,
    teach: {
      titleZh: "比较级和最高级",
      ruleZh: "短词 + -er than；最高级 the + -est。多音节 more / the most。不要 more faster。",
      ruleEn: "Priya was faster than me. She was the tallest in the heat.",
      wrong: "Priya is more faster than me.",
      right: "Priya is faster than me.",
      points: ["than 不能丢。", "最高级前面通常有 the。"],
    },
  },
  {
    test: /although|despite/i,
    teach: {
      titleZh: "although 不加 but",
      ruleZh: "Although + 从句，主句不再加 but。",
      ruleEn: "Although we lost, we tried.",
      wrong: "Although we lost, but we tried.",
      right: "Although we lost, we tried.",
      points: ["中文「虽然…但是」两半都说；英语只留一半。"],
    },
  },
  {
    test: /please proceed|is cancelled|please \+|please wait|in case of|no \+ -ing|your appointment|please have/i,
    teach: {
      titleZh: "告示和广播英语",
      ruleZh:
        "新加坡告示常用 Please + 动词原形。取消用 is cancelled（被动）。In case of fire, do not… 是固定安全句。时间用 from… to… 或 at 3 p.m.。",
      ruleEn:
        "Please proceed to the hall. PE is cancelled. Please take a queue number. In case of fire, do not use the lift.",
      wrong: "Please to proceed. PE cancel. Don't use lift if fire.",
      right: "Please proceed to the hall. PE is cancelled. In case of fire, do not use the lift.",
      points: [
        "Please mind the gap / Please stand clear：广播里 please 后面直接动词。",
        "is cancelled / are closed：告示用被动，不是 cancel 原形当谓语。",
        "Now serving A12：屏幕上的进行时，表示正在叫号。",
        "Please have your NRIC ready = 请把证件准备好。",
      ],
    },
  },
  {
    test: /can \/ must|must \+ verb|modals of obligation|have to|need to/i,
    teach: {
      titleZh: "can / must / have to / need to",
      ruleZh: "情态动词 + 原形。can = 能力或许可。must / have to = 必须。need to = 需要去做。",
      ruleEn: "You can borrow three books. You must return them. I need to hang the clothes.",
      wrong: "I can to swim. I must to go.",
      right: "I can swim. I must go.",
      points: ["没有 can to / must to。"],
    },
  },
];

const DEFAULT_TEACH: GrammarTeach = {
  titleZh: "本课句型",
  ruleZh: "用本课的句型说话。先看对的句子，再对比中国孩子常说的直译。",
  ruleEn: "Say the model lines. Change only the noun or place, keep the grammar.",
  wrong: "I want. You give me.",
  right: "I would like this, please.",
  points: ["一次只改 1–2 个语法点。", "用新加坡校园词，不硬套美国课文。"],
};

function teachFor(grammar: string): GrammarTeach {
  return GRAMMAR.find((g) => g.test.test(grammar))?.teach ?? {
    ...DEFAULT_TEACH,
    titleZh: `本课句型：${grammar}`,
    ruleEn: grammar,
  };
}

const READINGS: Record<number, string> = {
  16: `On Saturday evening Mei and Priya went with Ah Ma and Ah Gong to a hawker centre near their HDB block. It was not a restaurant with a waiter. They took a tray, stood in a queue, and ordered at a stall.

Mei said, "I would like chicken rice, please." The stall Aunty asked, "Chilli?" Mei wanted some chilli, but not a lot. "A little chilli, thank you."

Ah Gong asked, "Is there any soup?" "Yes. Some soup for you," said the Aunty. The tables were full. Priya asked another family, "Can we share a table?" They made space. After dinner they returned the trays. Ah Ma said, "Next time we can try nasi lemak."`,
  2: `At recess Mei could not find her water bottle. It was a white bottle with a pink flower. Priya said, "Let's go to the Lost and Found." At the counter Aunty Tan held up a bottle. "Is this your white water bottle with the pink flower?" Mei said, "Yes, Aunty! That is my white water bottle!" Aunty Tan smiled. "Here you are. Please take it." Priya said, "Wow, that's great!" Mei said, "We found it!" Then Mei said, "Thank you, Aunty!"`,
  1: `It was Mei's first morning at a Singapore primary school. The field was already full. Ms Tan said, "Good morning, class. Line up in two rows. We will say the pledge." Mei whispered, "Priya, where do we stand?" Priya said, "Blue House is on the left. Come with me." Ms Tan checked their uniforms. "White shoes, please." Mei said, "Yes, Ms Tan. I am ready." After assembly they walked to the canteen for recess.`,
  21: `The lift in Mei's HDB block stopped between the eighth storey and the ninth. A notice in the lobby said the Town Council was coming. Mei told a neighbour, "Excuse me, the lift is not working." "We have to take the stairs to the twelfth storey," he said. Mei was tired. "It is too high to walk easily. Our unit is 12-345." The neighbour showed her the stairs. "Could you help my Ah Ma?" "Yes. Let's go slowly."`,
  38: `Mei and Priya stood on the platform. The yellow line said STAND BEHIND THIS LINE. A voice came over the speakers: "The train is arriving. Please mind the gap." Doors opened. "Please let passengers alight first." Priya held Mei's bag. "Wait. Let them get off." They stepped in. "Doors closing. Please stand clear." Mei whispered, "We alight at Bedok." At Bedok another board showed the next train in 3 min.`,
  42: `Mum took Mei to a neighbourhood clinic. A screen said PLEASE TAKE A QUEUE NUMBER. They pulled a ticket: A14. The screen later flashed NOW SERVING A12. Mum said, "Please wait to be called." Inside, the doctor asked, "How long have you felt this?" Mei said, "I have a sore throat." He wrote an MC. "You should rest. Collect your medication at the pharmacy."`,
  56: `The PA clicked on during period one. "Good morning, students. PE is cancelled because of rain. Please proceed to the hall at 7:50. Bring your water bottle." Ms Tan said, "That is an announcement. Write the time and the place." Mei wrote: hall, 7:50, water bottle. "Assembly is in the hall, not at the field," Priya said.`,
  78: `The train slowed. A calm voice said, "Please mind the gap." Mei looked down at the space between the platform and the train. People got off. The voice said, "Please let passengers alight first." A man tried to push in. Priya said, "Wait." Then: "Doors closing. Please stand clear." Mei repeated the three lines under her breath. These are not classroom sentences. They are the English you hear if you miss one word you might fall or block the door.`,
  79: `On the bus a screen showed the next stop: BEDOK INT. The driver announcement said, "The next stop is Bedok. Please press the bell if you are alighting." Mei pressed the red bell. A later sign at the interchange read: THIS SERVICE TERMINATES HERE. Priya said, "We must alight. This bus does not go further."`,
  80: `Rain hit the field. The classroom speaker said, "Good morning, students. PE is cancelled because of rain. Please proceed to the hall at 7:50. Bring your water bottle." Mei did not hear "proceed". Priya wrote it: proceed = go to. They lined up. Ms Tan said, "Leave your bags. The announcement told us the place and the time. That is what listening papers ask."`,
  81: `At the GP clinic a TV screen looped: PLEASE TAKE A QUEUE NUMBER. NOW SERVING A12 AT COUNTER 2. PLEASE WAIT TO BE CALLED. Mei held ticket A14. "We are after A13," Mum said. Registration was a different counter. A small sign: PLEASE REGISTER FIRST IF YOU DO NOT HAVE AN APPOINTMENT. This is the English of waiting rooms all over Singapore.`,
  82: `Dad took Mei to a private hospital because Ah Gong needed a scan. The lobby board listed A&E LEVEL 1, SPECIALIST CLINICS LEVEL 3. A staff member said, "Please register at the counter. Please have your NRIC or appointment card ready." A second sign: VISITING HOURS 12.00 P.M. – 8.00 P.M. NO FOOD IN THE WAITING AREA. Mei copied the times. Functional reading is this: hours, levels, what you must bring.`,
  83: `After the doctor, a slip said COLLECT MEDICATION AT COUNTER 3. The pharmacist asked, "Any allergy?" Then she labelled the bottle: TAKE AFTER FOOD. THREE TIMES A DAY. Mei asked, "Must I finish the medicine?" "Yes. Three times a day until it is finished." The English is short because it is a label, not a story.`,
  84: `At the void deck the Town Council notice was typed, not handwritten. WATER SUPPLY WILL BE DISRUPTED FROM 9.00 A.M. TO 5.00 P.M. ON THURSDAY. PLEASE STORE SOME WATER. LIFT B IS UNDER MAINTENANCE. Ah Ma said, "We take Lift A. We store some water tonight." Mei practised will be disrupted = there will be no water for that time.`,
  85: `The library glass door listed OPENING HOURS: 11.00 A.M. – 9.00 P.M. CLOSED ON PUBLIC HOLIDAYS. Inside, a yellow board: SILENT ZONE. NO EATING OR DRINKING. NO TALKING ON THE PHONE. A librarian whispered, "Membership cards at the counter. Due date is stamped in the book." Mei wrote no + -ing: no eating, no drinking.`,
  86: `In the mall lift a red sign was next to the buttons: IN CASE OF FIRE, DO NOT USE THE LIFT. USE THE STAIRCASE. KEEP THE LOBBY CLEAR. The same words appear in HDB lifts. Mei told Priya, "In case of means if there is." They took the stairs once for practice. Safety English is almost always do not + use / keep + clear.`,
  87: `The mall directory said CLINIC — LEVEL 2. A tape on the floor: QUEUE HERE. Another sign at a clinic hatch: THIS QUEUE IS RESERVED FOR THE ELDERLY, PREGNANT WOMEN AND WHEELCHAIR USERS. Mei and Mum joined the other line. "Priority does not mean we skip," Mum said. "It means those people go first."`,
  88: `At the park a brown NParks board showed a monkey and a red cross: DO NOT FEED THE MONKEYS. KEEP TO THE PATH. PLEASE USE THE BIN. A ranger said, "If you feed them, they come close. You must not." Mei put her packet in the bin. Warning signs use do not + verb, not don't you.`,
  89: `Mum's phone buzzed. CLINIC REMINDER: YOUR APPOINTMENT IS ON TUESDAY AT 3.00 P.M. PLEASE ARRIVE 15 MINUTES EARLY. IF YOU CANNOT COME, PLEASE CALL THE CLINIC. Bring NRIC. Mei asked, "What does arrive 15 minutes early mean?" "We reach at 2.45," Mum said. Message English is short, all capitals on some phones, but the grammar is still please + verb and if you cannot + call.`,
};

function defaultReading(story: Storyline): string {
  const place = story.vocab[0] ?? "school";
  const a = story.oracy[0] ?? "Let's start.";
  const b = story.oracy[1] ?? "OK.";
  const c = story.oracy[2];
  return `Mei and Priya were in Singapore, not in a US textbook. They needed English for this: ${story.focus.toLowerCase()}.

They were near the ${place}. Mei said, "${a}" Priya answered, "${b}"${c ? ` Then Mei said, "${c}"` : ""}

The grammar to keep today is: ${story.grammar}. Use the same words when you answer and when you write.`;
}

function vocabRows(
  story: Storyline,
  context?: ContextTopic,
): { word: string; example: string; noteZh: string }[] {
  return story.vocab.map((word) => {
    const fromCtx = context?.vocab.find(
      (x) => x.en.toLowerCase() === word.toLowerCase(),
    );
    const hit = story.oracy.find((o) =>
      o.toLowerCase().includes(word.toLowerCase()),
    );
    return {
      word,
      example: hit ?? `We use "${word}" in this scene in Singapore.`,
      noteZh: fromCtx?.zh ?? "新加坡校园 / 家庭里会听到的词。",
    };
  });
}

function dialogueFor(
  story: Storyline,
  script?: { scene: string; lines: { who: string; say: string }[] },
  context?: ContextTopic,
): { who: string; say: string }[] {
  if (script?.lines.length) return script.lines;
  if (context?.dialogue.length) {
    return context.dialogue.map((d) => ({ who: d.who, say: d.line }));
  }
  const names = ["Mei", "Priya", "Aunty"];
  return story.oracy.map((line, i) => ({
    who: names[i % names.length],
    say: line,
  }));
}

function itemsFor(story: Storyline, reading: string, g: GrammarTeach): McqItem[] {
  const w0 = story.vocab[0] ?? "school";
  const w1 = story.vocab[1] ?? story.vocab[0] ?? "canteen";
  return [
    {
      id: `s${story.n}-v`,
      prompt: `In this Singapore scene, what is "${w0}"?`,
      options: [
        `A word you need here: ${w0}`,
        "A US textbook word you can skip",
        "A person's name",
        "A punctuation mark",
      ],
      correct: 0,
      errorId: "collocation",
      why: `本课要会说 ${w0}，不是跳过校园词。`,
      skill: "vocab",
    },
    {
      id: `s${story.n}-g`,
      prompt: `Choose the correct line (${story.grammar}).`,
      options: [g.right, g.wrong, `I ${w1} now.`, "Give me."],
      correct: 0,
      errorId: "articles",
      why: g.ruleEn,
      skill: "grammar",
    },
    {
      id: `s${story.n}-e`,
      prompt: "Which sentence is wrong?",
      options: [g.right, story.oracy[0], g.wrong, story.oracy[1] ?? g.right],
      correct: 2,
      errorId: "articles",
      why: `中国孩子常直译成：${g.wrong}`,
      skill: "grammar",
    },
    {
      id: `s${story.n}-f`,
      prompt: `What do you say? (${story.focus})`,
      options: [
        story.oracy[0],
        "What's up dude?",
        "I no want.",
        "You give.",
      ],
      correct: 0,
      errorId: "collocation",
      why: "用本课开口句，不用美国口语或中式英语。",
      skill: "vocab",
    },
    {
      id: `s${story.n}-r`,
      prompt: "From the reading: where is this English used?",
      options: [
        reading.includes("hawker")
          ? "At a hawker centre / stall"
          : "In a Singapore school or family scene",
        "Only in an American cafeteria",
        "Only in a dictionary list",
        "Nowhere — this page is just a title",
      ],
      correct: 0,
      errorId: "collocation",
      why: "课文要把英语放进新加坡场景里用。",
      skill: "rc",
    },
  ];
}

export function buildStoryLesson(
  story: Storyline,
  theme: Theme | undefined,
  context?: ContextTopic,
  script?: { scene: string; lines: { who: string; say: string }[] },
): StoryLesson {
  const grammar = teachFor(story.grammar);
  const reading = READINGS[story.n] ?? defaultReading(story);
  const dialogue = dialogueFor(story, script, context);
  const items = itemsFor(story, reading, grammar);
  const sceneZh =
    context?.parentZh ??
    `这一课把英语放进新加坡生活：${story.focus}。词要用 ${story.vocab.slice(0, 3).join("、")}，不要用美国课文里对不上食堂的词。`;
  const sceneEn = context
    ? `${context.enTitle}. ${story.exam}.`
    : `${theme?.title ?? "Singapore school English"}: ${story.focus}. Grammar: ${story.grammar}.`;

  return {
    sceneZh,
    sceneEn,
    reading,
    grammar,
    vocab: vocabRows(story, context),
    dialogue,
    dialogueScene: script?.scene,
    writeZh: `写 50–80 词（中学可写到 120 词）。必须用上：${story.grammar}。场景就是本课。`,
    writeEn: `Write 50–80 words about "${story.title}". Use ${story.grammar}. Use at least two words: ${story.vocab.slice(0, 2).join(", ")}.`,
    starters: [
      story.oracy[0],
      `In Singapore, we …`,
      `I would like / I can / We must …`,
    ],
    paper: {
      id: `story-${story.n}`,
      titleZh: `${story.n}. ${story.title}`,
      blurb: grammar.ruleZh,
      track: "A2",
      intended: story.exam,
      targetCes: null,
      minutes: 8,
      items,
    },
  };
}
