import type { McqItem, Paper } from "./types";
import type { ContextTopic } from "./singapore-context";
import type { Storyline, Theme } from "./storylines";
import {
  buildPedagogy,
  defaultReadingFor,
  packOptions,
  type GrammarTeach,
  type Pedagogy,
} from "./story-pedagogy";

export type { GrammarTeach, Pedagogy } from "./story-pedagogy";

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
  pedagogy: Pedagogy;
};

const READINGS: Record<number, string> = {
  3: `Mei's pencil broke in writing class. She needed another one. Priya sat next to her.

Mei said, "Priya, can I borrow a pencil, please?"
Priya said, "Yes. Here you are."
Mei said, "Thank you. I will give it back after the lesson."
Ms Tan said, "Please speak quietly. Continue your work."`,
  5: `The fire alarm rang. Ms Tan did not shout. She used short English.

"Line up quickly. Do not run. Leave your bags."
Mei held Priya's sleeve. They walked to the staircase. At the field Ms Tan checked the class. "White shoes, please. We assemble here."
The drill was not a story. It was an order. One missed word and a child runs.`,
  6: `It was library day. Mei wanted a picture book.

"Where are the picture books?" she asked.
"I would like to borrow this," she said at the counter.
"When must I return it?"
The librarian pointed to the date stamp. "You must return it by Friday. The library is quiet."
Mei whispered, "Thank you."`,
  14: `The school bookshop was full. Mei needed a workbook.

"How much is this workbook?"
"Four dollars," said the Aunty.
"I have ten dollars."
"Here is your change. Please keep the receipt."
Mei put the receipt in her bag. She did not say "Give me cheaper." She asked how much, then she paid.`,
  20: `Mum and Mei pushed a trolley at NTUC FairPrice.

"We need a loaf of bread."
"How much are the eggs?"
"Please pack them," Mum said at the checkout.
Mei wanted to say "How many rice?" Mum shook her head. "Rice is how much. Eggs are how many."`,
  31: `At recess Priya opened a box of biscuits.

"Would you like a biscuit?"
Mei has a peanut allergy. "No, thank you."
"Maybe later," said another girl, and they still sat together.
Offering is Would you like. Refusing is No, thank you. It is not rude.`,
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

function vocabRows(
  story: Storyline,
  context: ContextTopic | undefined,
  frames: string[],
): { word: string; example: string; noteZh: string }[] {
  return story.vocab.map((word) => {
    const fromCtx = context?.vocab.find(
      (x) => x.en.toLowerCase() === word.toLowerCase(),
    );
    const hit =
      story.oracy.find((o) => o.toLowerCase().includes(word.toLowerCase())) ??
      frames.find((o) => o.toLowerCase().includes(word.toLowerCase()));
    return {
      word,
      example: hit ?? `We need this word here: ${word}.`,
      noteZh: fromCtx?.zh ?? "先听句子，再在开口里用这个词。",
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

function itemsFor(story: Storyline, p: Pedagogy): McqItem[] {
  const c0 = p.contrasts[0];
  const m0 = p.meaning[0];
  const g1 = packOptions(
    c0.right,
    [c0.wrong, p.teach.wrong.split(/(?<=[.!?])\s/)[0], "Give me."],
    story.n * 3 + 1,
  );
  const g2 = packOptions(m0.options[m0.correct], m0.options.filter((_, i) => i !== m0.correct), story.n * 3 + 2);
  const frame = p.frames[1] ?? p.today[0].en;
  const g3 = packOptions(
    frame,
    [p.teach.wrong.split(/(?<=[.!?])\s/)[0], p.contrasts[1]?.wrong ?? "I no want."],
    story.n * 3 + 3,
  );
  const place = packOptions(
    p.setting.replace(/^at |^in |^on |^during /, ""),
    ["the school field", "the MRT platform", "the clinic"].filter(
      (x) => !p.setting.includes(x.replace(/^the /, "")),
    ),
    story.n * 3 + 4,
  );
  const say = packOptions(
    p.today[0].en,
    [c0.wrong, p.teach.wrong.split(/(?<=[.!?])\s/)[0], p.today[1]?.en ?? "Thank you."],
    story.n * 3 + 5,
  );

  return [
    {
      id: `s${story.n}-g`,
      prompt: c0.promptZh,
      options: g1.options,
      correct: g1.correct,
      errorId: p.errorId,
      why: c0.whyZh,
      skill: "grammar",
    },
    {
      id: `s${story.n}-m`,
      prompt: m0.situationZh,
      options: g2.options,
      correct: g2.correct,
      errorId: p.errorId,
      why: m0.whyZh,
      skill: "grammar",
    },
    {
      id: `s${story.n}-f`,
      prompt: "Same pattern, new noun. Which line is correct?",
      options: g3.options,
      correct: g3.correct,
      errorId: p.errorId,
      why: p.teach.points[0] ?? p.teach.ruleZh,
      skill: "grammar",
    },
    {
      id: `s${story.n}-r`,
      prompt: "From the reading: where is this happening?",
      options: place.options,
      correct: place.correct,
      errorId: "collocation",
      why: `场景在 ${p.setting}。`,
      skill: "rc",
    },
    {
      id: `s${story.n}-s`,
      prompt: p.today[0].cueZh,
      options: say.options,
      correct: say.correct,
      errorId: p.errorId,
      why: "开口用今天练的那一句。",
      skill: "vocab",
    },
  ];
}

export function buildStoryLesson(
  story: Storyline,
  theme: Theme | undefined,
  context?: ContextTopic,
  script?: { scene: string; lines: { who: string; say: string }[] },
): StoryLesson {
  const pedagogy = buildPedagogy(story);
  const reading = READINGS[story.n] ?? defaultReadingFor(story, script);
  const dialogue = dialogueFor(story, script, context);
  const items = itemsFor(story, pedagogy);
  const sceneZh =
    context?.parentZh ??
    `今天只钉一个句型：${pedagogy.teach.titleZh}。场景：${story.focus}。`;
  const sceneEn = `${pedagogy.teach.ruleEn} ${story.exam}.`;

  return {
    sceneZh,
    sceneEn,
    reading,
    grammar: pedagogy.teach,
    vocab: vocabRows(story, context, pedagogy.frames),
    dialogue,
    dialogueScene: script?.scene ?? `Mei and Priya ${pedagogy.setting}.`,
    writeZh: pedagogy.write.promptZh,
    writeEn: pedagogy.write.promptEn,
    starters: [pedagogy.write.sample, ...pedagogy.frames.slice(1, 3)],
    paper: {
      id: `story-${story.n}`,
      titleZh: `${story.n}. ${story.title}`,
      blurb: pedagogy.teach.ruleZh,
      track: "A2",
      intended: story.exam,
      targetCes: null,
      minutes: 8,
      items,
    },
    pedagogy,
  };
}
