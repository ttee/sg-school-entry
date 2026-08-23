import type { McqItem, Paper } from "./types";
import { q } from "./mcq";
import { MATH_DIAGNOSTIC_PAPERS } from "./math-diagnostics";

const NOTICE = `Read this notice.

LOST AND FOUND
A white water bottle with a pink flower is at the school office.
Please come at recess.`;

/** P2: A2 Key start. Mix like P2/3 language-use: RC, cloze, vocab, grammar, spelling. */
const P2: McqItem[] = [
  q("p2-1", `${NOTICE}\n\nWhere is the bottle?`, ["In the canteen", "At the school office", "On the field", "In Mei's bag"], 1, "articles", "The notice says the bottle is at the school office.", "rc"),
  q("p2-2", `${NOTICE}\n\nWhen should Mei go?`, ["At recess", "After school only", "On Sunday", "At midnight"], 0, "prep-time", "The notice says Please come at recess.", "rc"),
  q("p2-3", "Mei goes to school ___ bus.", ["by", "by the", "with", "in"], 0, "zero-article-by", "Transport: by bus, with no the.", "cloze"),
  q("p2-4", "I am ___ student at Bedok Primary.", ["a", "an", "the", "some"], 0, "articles", "First mention of a countable noun: a student.", "grammar"),
  q("p2-5", "Ms Tan ___ English on Monday.", ["teach", "teaches", "teaching", "taught"], 1, "3sg", "Ms Tan is she: present habit → teaches.", "grammar"),
  q("p2-6", "We have PE ___ Friday.", ["in", "at", "on", "by"], 2, "prep-time", "on + day of the week.", "cloze"),
  q("p2-7", "Meet me ___ the school gate.", ["in", "on", "at", "to"], 2, "prep-place", "at the gate (a point).", "cloze"),
  q("p2-8", "Which word means 'not on time'?", ["early", "late", "fast", "slow"], 1, "collocation", "late = not on time.", "vocab"),
  q("p2-9", "A place to eat at school is the ___.", ["library", "canteen", "office", "field"], 1, "collocation", "Singapore primary: canteen.", "vocab"),
  q("p2-10", "Yesterday I ___ my bottle.", ["lose", "lost", "losing", "am losing"], 1, "tense-shift", "Yesterday → past simple lost.", "grammar"),
  q("p2-11", "I enjoy ___ in the library.", ["read", "to read", "reading", "reads"], 2, "like-ing", "enjoy + verb-ing.", "grammar"),
  q("p2-12", "Is ___ your bottle?", ["this", "these", "those", "them"], 0, "articles", "Near and singular: this.", "grammar"),
  q("p2-13", "Yes, that is ___.", ["my", "mine", "me", "I"], 1, "articles", "mine stands alone; my needs a noun.", "grammar"),
  q("p2-14", "Please come to the office ___ recess.", ["in", "on", "at", "by"], 2, "prep-time", "at recess.", "cloze"),
  q("p2-15", "Which word is spelled correctly?", ["reccess", "recess", "reces", "resess"], 1, "punctuation", "recess.", "spelling"),
  q("p2-16", "Which word is spelled correctly?", ["Wedensday", "Wenesday", "Wednesday", "Wendsday"], 2, "punctuation", "Wednesday.", "spelling"),
];

/** P3: A2 Key Grade C (120). Still no present perfect / reported speech. */
const P3: McqItem[] = [
  q("p3-1", "Mei lost a white bottle. Later Auntie Tan held up ___ same bottle.", ["a", "an", "the", "some"], 2, "articles", "Already known: the same bottle.", "grammar"),
  q("p3-2", "She ___ up at 6:15 every Monday.", ["wake", "wakes", "waking", "woke"], 1, "3sg", "Habit + she → wakes.", "grammar"),
  q("p3-3", "There isn't ___ milk in the fridge.", ["some", "any", "many", "a"], 1, "quantifiers", "Negative + uncountable: any.", "cloze"),
  q("p3-4", "How ___ rice do we need?", ["many", "much", "long", "often"], 1, "quantifiers", "Rice is uncountable: how much.", "grammar"),
  q("p3-5", "Priya is ___ than Mei.", ["more fast", "faster", "more faster", "fastest"], 1, "comparatives", "short adjective: faster than.", "grammar"),
  q("p3-6", "School ends ___ 2 p.m.", ["in", "on", "at", "to"], 2, "prep-time", "at + clock time.", "cloze"),
  q("p3-7", "We ___ going to the library tomorrow.", ["is", "are", "be", "will"], 1, "modals", "we are going to (plan).", "grammar"),
  q("p3-8", "You must ___ your bag after PE.", ["to zip", "zipping", "zip", "zips"], 2, "modals", "must + base verb.", "grammar"),
  q("p3-9", "I always ___ breakfast at home.", ["eat", "eats", "eating", "am eat"], 0, "3sg", "I eat (no -s).", "grammar"),
  q("p3-10", "The classroom is ___ the second floor.", ["in", "on", "at", "to"], 1, "prep-place", "on the second floor.", "cloze"),
  q("p3-11", "To ___ a book means to take it from the library for a few days.", ["return", "borrow", "buy", "hide"], 1, "collocation", "borrow from a library; lend is give.", "vocab"),
  q("p3-12", "The opposite of 'full' is ___.", ["empty", "big", "new", "hot"], 0, "collocation", "full ↔ empty.", "vocab"),
  q("p3-13", `Read:\n\nCCA Fair on Friday at the hall. Sign up at recess.\n\nWhen is the fair?`, ["Thursday", "Friday", "Saturday", "Sunday"], 1, "prep-time", "The notice says Friday.", "rc"),
  q("p3-14", `Read:\n\nCCA Fair on Friday at the hall. Sign up at recess.\n\nWhen do students sign up?`, ["After school only", "At recess", "On Saturday", "At midnight"], 1, "prep-time", "Sign up at recess.", "rc"),
  q("p3-15", "Which word is spelled correctly?", ["libary", "library", "liebrary", "librery"], 1, "punctuation", "library.", "spelling"),
  q("p3-16", "Which word is spelled correctly?", ["because", "becos", "becuase", "becouse"], 0, "punctuation", "because.", "spelling"),
];

/** P4: A2 Key 130+. Vocab-in-context + A2 grammar. No B1 reported speech / past perfect. */
const P4: McqItem[] = [
  q("p4-0", "The principal decided to postpone Sports Day because of heavy rain.\nWhich word best replaces postpone?", ["cancel", "put off", "call off", "speed up"], 1, "collocation", "postpone = put off until later. cancel/call off = stop completely.", "vocab", "postpone"),
  q("p4-1", "Please ___ the lights when you leave.", ["open", "close", "turn off", "turn down"], 2, "collocation", "turn off the lights. close is a PRC calque.", "vocab"),
  q("p4-2", "I need to ___ my temperature. I feel sick.", ["eat", "take", "see", "make"], 1, "collocation", "take someone's temperature.", "vocab"),
  q("p4-3", "If it ___ , PE will be in the hall.", ["will rain", "rains", "rained", "rain"], 1, "if-when", "First conditional: if + present, will.", "grammar"),
  q("p4-4", "Plastic ___ in the blue bin.", ["recycles", "is recycled", "recycled", "recycling"], 1, "tense-shift", "Passive: is recycled.", "grammar"),
  q("p4-5", "___ the rain, the race continued. (noun after the blank)", ["Although", "Despite", "Because", "So"], 1, "although-but", "despite + noun. although needs a clause.", "grammar"),
  q("p4-6", "It was ___ a long drive that Mei fell asleep.", ["so", "such", "too", "very"], 1, "too-enough", "such a + noun.", "grammar"),
  q("p4-7", "He is not old ___ to sit in the front row alone.", ["too", "enough", "so", "such"], 1, "too-enough", "adjective + enough + to.", "grammar"),
  q("p4-8", "It rained heavily all morning. ___ , PE was held in the hall.", ["However", "Therefore", "In addition", "Although"], 1, "because-so", "Rain caused the indoor PE: Therefore (result). However would contrast, not give the result.", "cloze"),
  q("p4-9", "John studied hard; ___ , he made a few careless mistakes.", ["however", "therefore", "in addition", "so"], 0, "although-but", "Studied hard but still mistakes: contrast however.", "cloze"),
  q("p4-10", "Students must wear uniform. ___ , they must wear white shoes.", ["However", "Therefore", "In addition", "Although"], 2, "because-so", "Adding a second rule: In addition.", "cloze"),
  q("p4-11", `Read:\n\nSports Day is postponed. Meet in the hall at 8 a.m. Bring a water bottle.\n\nWhat should students bring?`, ["A tray", "A water bottle", "A basketball only", "Nothing"], 1, "collocation", "Bring a water bottle.", "rc"),
  q("p4-12", `Read:\n\nSports Day is postponed. Meet in the hall at 8 a.m. Bring a water bottle.\n\nWhere do they meet?`, ["The field", "The hall", "The canteen", "The gate"], 1, "prep-place", "Meet in the hall.", "rc"),
  q("p4-13", "Which sentence is correct?", ["I was late, I missed the bus.", "I was late I missed the bus.", "I was late, so I missed the bus.", "I was late; because I missed the bus."], 2, "punctuation", "Two clauses need so/because/a full stop, not a comma alone. so + result.", "grammar"),
  q("p4-14", "Which word is spelled correctly?", ["tommorrow", "tomorrow", "tomorow", "tommorow"], 1, "punctuation", "tomorrow.", "spelling"),
  q("p4-15", "A synonym of 'begin' is ___.", ["end", "start", "stop", "wait"], 1, "collocation", "begin = start.", "vocab"),
];

/** P5: B1 140+. Perfect vs past, although, relative, tags. Full-sentence options, no blank dash. */
const P5: McqItem[] = [
  q("p5-1", "I ___ here for six months. I still study here.", ["was", "have been", "had been", "am being"], 1, "present-perfect", "Unfinished time with for: have been.", "grammar"),
  q("p5-2", "I ___ to East Coast Park last year.", ["have gone", "went", "go", "had go"], 1, "present-perfect", "last year is finished → past simple went.", "grammar"),
  q("p5-3", "When I arrived, the bus ___ already.", ["left", "has left", "had left", "was leave"], 2, "present-perfect", "Earlier past before arrived: had left.", "grammar"),
  q("p5-4", "Which sentence is correct?", ["Although Wei was nervous, but he tried.", "Although Wei was nervous, he tried.", "Although Wei was nervous so he tried.", "Despite Wei was nervous, he tried."], 1, "although-but", "although, no but. despite + noun, not a clause here.", "grammar"),
  q("p5-5", "The book ___ I borrowed was about Sentosa.", ["who", "which", "where", "whose"], 1, "relative", "Thing → which/that.", "grammar"),
  q("p5-6", "___ feeling tired, Priya finished the race.", ["Although", "Despite", "However", "Because"], 1, "although-but", "despite + -ing.", "grammar"),
  q("p5-7", "You have been here six months, ___ you?", ["haven't", "isn't", "aren't", "didn't"], 0, "present-perfect", "have been → haven't you.", "grammar"),
  q("p5-8", "Bins ___ collected on Monday.", ["is", "are", "was", "be"], 1, "sva-everyone", "Plural bins + passive: are collected.", "grammar"),
  q("p5-9", "I was ___ tired to run.", ["so", "too", "enough", "such"], 1, "too-enough", "too + adjective + to.", "grammar"),
  q("p5-10", "We should ___ less food.", ["to waste", "wasting", "waste", "wastes"], 2, "modals", "should + base verb waste.", "grammar"),
  q("p5-11", "The canteen was closed. ___ , we ate later.", ["Therefore", "Because", "Although", "If"], 0, "because-so", "Closed → result we ate later: Therefore.", "cloze"),
  q("p5-12", "Can you ___ what this notice means?", ["look", "see", "watch", "work out"], 3, "collocation", "work out = understand from the text. look/see/watch need different objects.", "vocab"),
  q("p5-13", "A word that means 'put off until later' is ___.", ["cancel", "postpone", "finish", "begin"], 1, "collocation", "postpone = put off.", "vocab"),
  q("p5-14", `Read:\n\nThe library will reopen on the 15th. Until then, use Bedok Public Library.\n\nWhat should students do this week?`, ["Wait at the school library", "Use Bedok Public Library", "Buy new books only", "Stay at home"], 1, "present-perfect", "Until then, use Bedok Public Library.", "rc"),
  q("p5-15", `Read:\n\nThe library will reopen on the 15th. Until then, use Bedok Public Library.\n\nWhen does the school library open again?`, ["Today", "Next year", "On the 15th", "Never"], 2, "prep-time", "reopen on the 15th.", "rc"),
  q("p5-16", "Which sentence is correct?", ["I have been here since June.", "I have been here since six months.", "I am here since June.", "I have been here from June ago."], 0, "present-perfect", "since + starting point (June). for + period (six months).", "grammar"),
];

const S1: McqItem[] = [
  q("s1-1", "Which sentence is correct?", ["Although I was nervous, I tried.", "Although I was nervous, but I tried.", "Despite I was nervous, I tried.", "Although I was nervous so I tried."], 0, "although-but", "although + clause, no but. despite + noun.", "grammar"),
  q("s1-2", "Everyone ___ a tray.", ["have", "has", "are having", "having"], 1, "sva-everyone", "everyone is singular: has.", "grammar"),
  q("s1-3", `Read:\n\nCanteen closed 12:30–1:30 for a staff meeting. Buy food before 12:30.\n\nWhen can students buy food?`, ["After 1:30 only", "Before 12:30", "At midnight", "Never today"], 1, "prep-time", "The notice says buy food before 12:30.", "rc"),
  q("s1-4", "I have ___ homework tonight.", ["a", "many", "some", "two"], 2, "quantifiers", "homework is uncountable: some homework.", "grammar"),
  q("s1-5", "Students must ___ in the canteen.", ["to queue", "queue", "queuing", "queued"], 1, "modals", "must + base verb.", "grammar"),
  q("s1-6", "You ___ bring a jacket. It is only a suggestion.", ["must", "have to", "should", "can to"], 2, "modals", "advice, not a rule: should.", "grammar"),
  q("s1-7", "___ it rained, Sports Day stopped.", ["Because", "Although", "Despite", "However"], 0, "because-so", "Because + clause (reason).", "cloze"),
  q("s1-8", "It rained, ___ Sports Day stopped.", ["because", "so", "although", "despite"], 1, "because-so", "so + result.", "cloze"),
  q("s1-9", "___ the bell rings, we stand. (every school day)", ["If", "When", "Unless", "Although"], 1, "if-when", "It happens every day, so when, not if.", "grammar"),
  q("s1-10", "I ___ here since January.", ["came", "have been", "had come", "was"], 1, "present-perfect", "since + present perfect.", "grammar"),
  q("s1-11", "The water is not hot ___ to make tea.", ["too", "enough", "so", "such"], 1, "too-enough", "not + adjective + enough.", "grammar"),
  q("s1-12", "There are ___ biscuits left. We can share them.", ["a little", "little", "a few", "much"], 2, "quantifiers", "a few + plural countable.", "grammar"),
  q("s1-13", "Please ___ the fan. It is noisy.", ["close", "open", "turn off", "turn"], 2, "collocation", "turn off the fan. close the door, not the fan.", "vocab"),
  q("s1-14", `Read:\n\nCanteen closed 12:30–1:30 for a staff meeting. Buy food before 12:30.\n\nWhy is the canteen closed?`, ["Sports Day", "A staff meeting", "A holiday", "An exam"], 1, "collocation", "Closed for a staff meeting.", "rc"),
  q("s1-15", "Which sentence is correct?", ["I was late, I missed the bus.", "I was late I missed the bus.", "I was late, so I missed the bus.", "I was late; because I missed the bus."], 2, "punctuation", "Use so (or a full stop), not a comma splice.", "grammar"),
  q("s1-16", "The girl ___ sits next to me is Priya.", ["which", "who", "what", "where"], 1, "relative", "Person → who.", "grammar"),
];

const S2: McqItem[] = [
  q("s2-1", "Wei Han, ___ joined last week, sits near Priya.", ["which", "who", "whose", "what"], 1, "relative", "Person, extra information: who.", "grammar"),
  q("s2-2", "Ms Chen said the library ___ the following week. (She said this yesterday.)", ["will close", "closes", "would close", "is closing tomorrow"], 2, "reported", "will → would after a past reporting verb.", "grammar"),
  q("s2-3", "Yesterday she asked me where the canteen ___.", ["is", "was", "be", "being"], 1, "reported", "Reported wh-clause after asked: was.", "grammar"),
  q("s2-4", "___ the fact that it rained, PE went ahead in the hall.", ["Although", "Despite", "Because", "So"], 1, "although-but", "despite the fact that + clause.", "grammar"),
  q("s2-5", "I prefer walking ___ taking the bus.", ["than", "to", "from", "and"], 1, "collocation", "prefer A to B.", "vocab"),
  q("s2-6", "There is ___ milk left. We should buy more.", ["a few", "few", "a little", "many"], 2, "quantifiers", "a little + uncountable. (We still have some.)", "grammar"),
  q("s2-7", "If you ___ late, wait at the office.", ["are", "will be", "were", "being"], 0, "if-when", "if + present simple.", "grammar"),
  q("s2-8", "The homework ___ on the teacher's desk.", ["are", "is", "were", "have"], 1, "quantifiers", "homework is uncountable: is.", "grammar"),
  q("s2-9", "We have to ___ sports shoes for PE.", ["wearing", "wear", "to wear", "wore"], 1, "modals", "have to + base verb.", "grammar"),
  q("s2-10", "Don't ___ the lights. The class is still working.", ["close", "turn off", "open", "turn"], 1, "collocation", "Don't turn off the lights.", "vocab"),
  q("s2-11", "Which sentence is correct?", ["Because it rained, so we stayed in.", "Because it rained, we stayed in.", "Although it rained, but we stayed in.", "Despite it rained, we stayed in."], 1, "because-so", "because OR so, not both. despite + noun.", "grammar"),
  q("s2-12", "I was ___ tired to finish the race.", ["so", "too", "enough", "such"], 1, "too-enough", "too tired to.", "grammar"),
  q("s2-13", `Read:\n\nCandidates, pens down. Time's up.\n\nWhat should students do?`, ["Keep writing", "Stop writing", "Leave the room now", "Start a new paper"], 1, "collocation", "pens down = stop writing.", "rc"),
  q("s2-14", `Read:\n\nAlthough I was nervous, I tried. I finished every question.\n\nWhat is the main idea?`, ["He did not try", "He was not nervous", "He tried even though he was nervous", "He left early"], 2, "although-but", "He tried despite being nervous.", "rc"),
  q("s2-15", "Which word is spelled correctly?", ["neccessary", "necesary", "necessary", "neccesary"], 2, "punctuation", "necessary.", "spelling"),
  q("s2-16", "The opposite of 'increase' is ___.", ["grow", "reduce", "add", "rise"], 1, "collocation", "increase ↔ reduce.", "vocab"),
];

const S3: McqItem[] = [
  q("s3-1", "The students ___ the experiment before the bell rang.", ["complete", "have completed", "had completed", "are completing"], 2, "present-perfect", "Finished before another past action: had completed.", "grammar"),
  q("s3-2", "Neither of the answers ___ correct.", ["are", "is", "were", "have"], 1, "sva-everyone", "neither of + singular verb in exam English.", "grammar"),
  q("s3-3", "The number of students in the queue ___ growing.", ["are", "is", "have", "were"], 1, "sva-everyone", "the number of + singular is.", "grammar"),
  q("s3-4", "She is the girl ___ bag was left in the hall.", ["who", "which", "whose", "whom"], 2, "relative", "whose + noun (bag).", "grammar"),
  q("s3-5", "He spoke ___ to be heard at the back.", ["too loud", "loud enough", "enough loud", "so loud enough"], 1, "too-enough", "loud enough to + verb.", "grammar"),
  q("s3-6", "Choose the best linker: The hall was full. ___ we found seats near the window.", ["However,", "Therefore,", "In addition,", "Because,"], 0, "although-but", "Hall full but they still found seats: However.", "cloze"),
  q("s3-7", "It is ___ that we show working in Maths.", ["must", "necessary", "need", "should to"], 1, "collocation", "It is necessary that…", "vocab"),
  q("s3-8", "According ___ the notice, PE is cancelled.", ["to", "with", "by", "for"], 0, "collocation", "according to.", "vocab"),
  q("s3-9", "The prefect is responsible ___ the queue.", ["to", "for", "of", "at"], 1, "collocation", "responsible for.", "vocab"),
  q("s3-10", "Which sentence is correct?", ["Despite of the rain, we continued.", "Despite the rain, we continued.", "Despite the rain but we continued.", "Although the rain, we continued."], 1, "although-but", "despite + noun, no of. although + clause.", "grammar"),
  q("s3-11", "If I ___ you, I would revise the cloze again.", ["am", "was", "were", "be"], 2, "if-when", "Unreal present: If I were you.", "grammar"),
  q("s3-12", "The notice was printed in large letters ___ that every class could read it.", ["so", "such", "too", "enough"], 0, "because-so", "so that + purpose clause.", "cloze"),
  q("s3-13", `Read:\n\nIn conclusion, one CCA is enough. It should not replace sleep or homework.\n\nWhat is the writer's view?`, ["Join three CCAs", "Drop all CCAs", "Choose one CCA and keep rest time", "CCAs do not matter"], 2, "although-but", "One CCA; keep sleep and homework.", "rc"),
  q("s3-14", `Read:\n\nCritics say CCAs steal revision time. This is fair when a pupil takes three CCAs.\n\nThe writer ___ .`, ["fully agrees that all CCAs are bad", "accepts a limit, not a ban", "wants more CCAs", "ignores homework"], 1, "although-but", "Fair if too many, not a total ban.", "rc"),
  q("s3-15", "A synonym of 'nevertheless' is closest to ___.", ["therefore", "however", "in addition", "because"], 1, "collocation", "nevertheless ≈ however (contrast).", "vocab"),
  q("s3-16", "Which sentence is correctly punctuated?", ["However we stayed.", "However, we stayed.", "However; we stayed because.", "However we, stayed."], 1, "punctuation", "However, + clause.", "grammar"),
];

export const ENGLISH_DIAGNOSTIC_PAPERS: Paper[] = [
  { id: "p2", titleZh: "P2 英语摸底 · 16 题", blurb: "CES 目标 100。理解 / 完形 / 词汇 / 语法 / 拼写。测 P1 实用英语。约 12 分钟。", track: "A2", intended: "P2", targetCes: 100, minutes: 12, items: P2, subject: "english" },
  { id: "p3", titleZh: "P3 英语摸底 · 16 题", blurb: "CES 目标 120（A2 Key Grade C）。仍是 A2 范围，不含现在完成时。测 P2 英语。", track: "A2", intended: "P3", targetCes: 120, minutes: 12, items: P3, subject: "english" },
  { id: "p4", titleZh: "P4 英语摸底 · 16 题", blurb: "CES 目标 130+（A2 Key）。含 postpone = put off、连接词、短通知理解。测 P3 英语。", track: "A2", intended: "P4", targetCes: 130, minutes: 15, items: P4, subject: "english" },
  { id: "p5", titleZh: "P5 英语摸底 · 16 题", blurb: "CES 目标 140（B1）。现在完成 vs 过去、although、定语从句。测 P4 英语。", track: "B1", intended: "P5", targetCes: 140, minutes: 15, items: P5, subject: "english" },
  { id: "s1", titleZh: "S1 AEIS 英语摸底 · 16 题", blurb: "although、主谓一致、不可数 homework、must/should。对准语言 50 题里的语法/词汇。测 P6 英语。", track: "SEC", intended: "Sec 1", targetCes: null, minutes: 15, items: S1, subject: "english" },
  { id: "s2", titleZh: "S2 AEIS 英语摸底 · 16 题", blurb: "转述、despite、prefer A to B、理解。申请 S2 练前一级。", track: "SEC", intended: "Sec 2", targetCes: null, minutes: 15, items: S2, subject: "english" },
  { id: "s3", titleZh: "S3 AEIS 英语摸底 · 16 题", blurb: "过去完成、neither、whose、according to、nevertheless。申请 S3 练 S2 课纲。", track: "SEC", intended: "Sec 3", targetCes: null, minutes: 15, items: S3, subject: "english" },
];

export const DIAGNOSTIC_PAPERS: Paper[] = [
  ...ENGLISH_DIAGNOSTIC_PAPERS,
  ...MATH_DIAGNOSTIC_PAPERS,
];

export function getPaper(id: string) {
  return DIAGNOSTIC_PAPERS.find((p) => p.id === id);
}

export function englishPaperForLevel(intended: string) {
  const key = intended.replace(/\s+/g, "").toLowerCase();
  const map: Record<string, string> = {
    p2: "p2",
    p3: "p3",
    p4: "p4",
    p5: "p5",
    sec1: "s1",
    s1: "s1",
    sec2: "s2",
    s2: "s2",
    sec3: "s3",
    s3: "s3",
  };
  return getPaper(map[key] ?? "p2");
}
