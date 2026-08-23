import type { McqItem, Paper } from "./types";
import { q } from "./mcq";

/** Original timed items. Not copies of the placement papers. */
const A2_MOCK: McqItem[] = [
  q("am-1", `Read:\n\nASSEMBLY\nMonday 7:50 a.m. at the hall. Wear white shoes.\n\nWhere is assembly?`, ["The canteen", "The hall", "The field", "The office"], 1, "prep-place", "The notice says at the hall.", "rc"),
  q("am-2", `Read:\n\nASSEMBLY\nMonday 7:50 a.m. at the hall. Wear white shoes.\n\nWhat must students wear?`, ["Sports shoes", "White shoes", "No shoes", "Black socks only"], 1, "collocation", "Wear white shoes.", "rc"),
  q("am-3", "Priya goes home ___ MRT.", ["by", "by the", "with", "in"], 0, "zero-article-by", "by MRT, no the.", "cloze"),
  q("am-4", "We have Science ___ the morning.", ["in", "on", "at", "to"], 0, "prep-time", "in the morning.", "cloze"),
  q("am-5", "Meet us ___ the canteen stall.", ["in", "on", "at", "to"], 2, "prep-place", "at the stall (a point).", "cloze"),
  q("am-6", "She ___ her teeth every morning.", ["brush", "brushes", "brushing", "brushed"], 1, "3sg", "she brushes.", "grammar"),
  q("am-7", "There aren't ___ chairs left.", ["some", "any", "much", "a"], 1, "quantifiers", "Negative plural: any.", "grammar"),
  q("am-8", "This ruler is ___ than that one.", ["more long", "longer", "more longer", "longest"], 1, "comparatives", "longer than.", "grammar"),
  q("am-9", "You must ___ in a line.", ["to wait", "waiting", "wait", "waits"], 2, "modals", "must + wait.", "grammar"),
  q("am-10", "Last Friday we ___ to the zoo.", ["go", "went", "gone", "going"], 1, "tense-shift", "Last Friday → went.", "grammar"),
  q("am-11", "I like ___ football at recess.", ["play", "to playing", "playing", "plays"], 2, "like-ing", "like + -ing.", "grammar"),
  q("am-12", "A synonym of 'small' is ___.", ["tiny", "tall", "loud", "late"], 0, "collocation", "tiny ≈ small.", "vocab"),
  q("am-13", "We borrow books from the ___.", ["canteen", "library", "field", "office queue"], 1, "collocation", "library.", "vocab"),
  q("am-14", "The opposite of 'early' is ___.", ["fast", "late", "quick", "soon"], 1, "collocation", "early ↔ late.", "vocab"),
  q("am-15", "Which word is spelled correctly?", ["Freiday", "Friday", "Fridy", "Fryday"], 1, "punctuation", "Friday.", "spelling"),
  q("am-16", "Which word is spelled correctly?", ["friend", "freind", "frend", "firend"], 0, "punctuation", "friend.", "spelling"),
  q("am-17", "Is there ___ orange on the tray?", ["a", "an", "the", "some"], 1, "articles", "orange begins with a vowel sound: an.", "grammar"),
  q("am-18", "Please give me ___ bottle on the counter. We can both see it.", ["a", "an", "the", "some"], 2, "articles", "Specific, already seen: the.", "grammar"),
  q("am-19", `Read:\n\nThe canteen sells chicken rice from 10 a.m. to 1 p.m.\n\nWhen can Mei buy chicken rice?`, ["At 9 a.m.", "At 11 a.m.", "At 2 p.m.", "At midnight"], 1, "prep-time", "11 a.m. is between 10 and 1.", "rc"),
  q("am-20", "How ___ students are in the queue?", ["much", "many", "long", "often"], 1, "quantifiers", "students are countable: how many.", "grammar"),
];

const P45_MOCK: McqItem[] = [
  q("pm-1", "The teacher decided to postpone the test.\npostpone is closest to ___.", ["cancel", "put off", "finish", "start"], 1, "collocation", "postpone = put off, not cancel.", "vocab", "postpone"),
  q("pm-2", "Please ___ the air-con. The room is cold enough.", ["close", "open", "turn off", "turn"], 2, "collocation", "turn off the air-con.", "vocab"),
  q("pm-3", "If Mei ___ late, she will miss assembly.", ["will be", "is", "was", "be"], 1, "if-when", "if + present, will.", "grammar"),
  q("pm-4", "Paper ___ in the blue bin.", ["puts", "is put", "putting", "putted"], 1, "tense-shift", "Passive: is put.", "grammar"),
  q("pm-5", "___ the noise, the class kept working.", ["Although", "Despite", "Because", "So"], 1, "although-but", "despite + noun.", "grammar"),
  q("pm-6", "It was ___ a hot day that we stayed indoors.", ["so", "such", "too", "very"], 1, "too-enough", "such a + noun.", "grammar"),
  q("pm-7", "The bag is not light ___ to carry with one hand.", ["too", "enough", "so", "such"], 1, "too-enough", "light enough.", "grammar"),
  q("pm-8", "The field was wet. ___ , PE moved to the hall.", ["However", "Therefore", "In addition", "Although"], 1, "because-so", "Result: Therefore.", "cloze"),
  q("pm-9", "Wei revised every night; ___ , he still missed two questions.", ["however", "therefore", "in addition", "so"], 0, "although-but", "Contrast: however.", "cloze"),
  q("pm-10", "Bring a bottle. ___ , bring a cap for the field.", ["However", "Therefore", "In addition", "Although"], 2, "because-so", "Adding an item: In addition.", "cloze"),
  q("pm-11", "I ___ in Bedok for two years. I still live here.", ["lived", "have lived", "had live", "am live"], 1, "present-perfect", "Unfinished time: have lived.", "grammar"),
  q("pm-12", "We ___ Sentosa last Sunday.", ["have visited", "visited", "visit", "had visit"], 1, "present-perfect", "last Sunday → past simple.", "grammar"),
  q("pm-13", "Which sentence is correct?", ["Although it rained, but we played.", "Although it rained, we played.", "Despite it rained, we played.", "Although it rained so we played."], 1, "although-but", "although, no but.", "grammar"),
  q("pm-14", "The stall ___ sells chicken rice is closed today.", ["who", "which", "where", "whose"], 1, "relative", "Thing → which.", "grammar"),
  q("pm-15", `Read:\n\nCCA trials this Wednesday at 2 p.m. in the hall. Bring water.\n\nWhen are the trials?`, ["Tuesday", "Wednesday", "Thursday", "Friday"], 1, "prep-time", "Wednesday.", "rc"),
  q("pm-16", `Read:\n\nCCA trials this Wednesday at 2 p.m. in the hall. Bring water.\n\nWhat should students bring?`, ["A tray", "Water", "A textbook only", "Nothing"], 1, "collocation", "Bring water.", "rc"),
  q("pm-17", "Which sentence is correct?", ["I was tired, I sat down.", "I was tired I sat down.", "I was tired, so I sat down.", "I was tired; because I sat down."], 2, "punctuation", "so + result, not a comma splice.", "grammar"),
  q("pm-18", "A synonym of 'finish' is ___.", ["begin", "complete", "start", "open"], 1, "collocation", "finish ≈ complete.", "vocab"),
  q("pm-19", "Which word is spelled correctly?", ["enviroment", "environment", "enviromment", "enviornment"], 1, "punctuation", "environment.", "spelling"),
  q("pm-20", "Bins ___ emptied after school.", ["is", "are", "be", "was"], 1, "sva-everyone", "bins are emptied.", "grammar"),
];

const SEC_MOCK: McqItem[] = [
  q("sm-1", "Which sentence is correct?", ["Although the hall was full, we found seats.", "Although the hall was full, but we found seats.", "Despite the hall was full, we found seats.", "Although the hall was full so we found seats."], 0, "although-but", "although, no but.", "grammar"),
  q("sm-2", "Each of the prefects ___ a whistle.", ["have", "has", "are", "having"], 1, "sva-everyone", "each of + singular has.", "grammar"),
  q("sm-3", "There is ___ information on the notice.", ["many", "a few", "some", "two"], 2, "quantifiers", "information uncountable: some.", "grammar"),
  q("sm-4", "Candidates must ___ writing when they hear 'pens down'.", ["to stop", "stop", "stopping", "stopped"], 1, "modals", "must + stop.", "grammar"),
  q("sm-5", "You ___ try the cloze again. It is advice, not a school rule.", ["must", "have to", "should", "can to"], 2, "modals", "should = advice.", "grammar"),
  q("sm-6", "___ the bell had rung, the students stood.", ["Because", "Although", "Despite", "However"], 0, "because-so", "Because + clause.", "cloze"),
  q("sm-7", "The sky was dark, ___ the teacher moved PE indoors.", ["because", "so", "although", "despite"], 1, "because-so", "so + result.", "cloze"),
  q("sm-8", "___ you finish early, check your answers. (possible, not certain)", ["When", "If", "Although", "Despite"], 1, "if-when", "Not certain → if.", "grammar"),
  q("sm-9", "Wei ___ at this school since March.", ["came", "has been", "had come", "was"], 1, "present-perfect", "since + present perfect.", "grammar"),
  q("sm-10", "The tea is not cool ___ to drink.", ["too", "enough", "so", "such"], 1, "too-enough", "cool enough.", "grammar"),
  q("sm-11", "There are ___ seats near the window. We can sit there.", ["a little", "little", "a few", "much"], 2, "quantifiers", "a few + plural.", "grammar"),
  q("sm-12", "Please ___ your phone during the paper.", ["close", "turn off", "open", "turn"], 1, "collocation", "turn off your phone.", "vocab"),
  q("sm-13", "She sat down and ___ the first question.", ["starts", "is starting", "started", "has start"], 2, "tense-shift", "Past narrative: started.", "grammar"),
  q("sm-14", "The boy ___ composition won the prize is Wei.", ["who", "whose", "which", "whom"], 1, "relative", "whose + noun.", "grammar"),
  q("sm-15", "Ms Tan said the test ___ the next day. (She said this yesterday.)", ["is", "will be", "would be", "be"], 2, "reported", "will → would.", "grammar"),
  q("sm-16", "I prefer rice ___ noodles.", ["than", "to", "from", "and"], 1, "collocation", "prefer A to B.", "vocab"),
  q("sm-17", "Neither of the answers ___ right.", ["are", "is", "have", "were"], 1, "sva-everyone", "neither + singular.", "grammar"),
  q("sm-18", "Prefects are responsible ___ the queue.", ["to", "for", "of", "at"], 1, "collocation", "responsible for.", "vocab"),
  q("sm-19", `Read:\n\nIn conclusion, one CCA is enough if homework still comes first.\n\nThe writer wants students to ___.`, ["drop every CCA", "take many CCAs", "keep one CCA without losing study time", "ignore homework"], 2, "although-but", "One CCA, homework first.", "rc"),
  q("sm-20", `Read:\n\nCandidates, pens down. Time's up.\n\nThis instruction means students should ___.`, ["write faster", "stop writing", "start Part 2", "leave the hall"], 1, "collocation", "pens down = stop.", "rc"),
  q("sm-21", "According ___ the timetable, Maths is after recess.", ["to", "with", "by", "for"], 0, "collocation", "according to.", "vocab"),
  q("sm-22", "If I ___ you, I would count the words in the essay.", ["am", "was", "were", "be"], 2, "if-when", "If I were you.", "grammar"),
  q("sm-23", "Which sentence is correct?", ["Despite of the heat, we queued.", "Despite the heat, we queued.", "Although the heat, we queued.", "Despite the heat but we queued."], 1, "although-but", "despite + noun, no of.", "grammar"),
  q("sm-24", "Which sentence is correctly punctuated?", ["However we stayed in the hall.", "However, we stayed in the hall.", "However; we stayed, in the hall.", "However we, stayed in the hall."], 1, "punctuation", "However, + clause.", "grammar"),
];

export const MOCKS: Paper[] = [
  {
    id: "a2-mock",
    titleZh: "P2/P3 语言限时卷 · 20 题",
    blurb: "与摸底不同的 20 题。理解、完形、语法、拼写。官方 A2 Key 还含听力、写作、口语。",
    track: "A2",
    intended: "P2–P3",
    targetCes: 120,
    minutes: 20,
    items: A2_MOCK,
    subject: "english",
  },
  {
    id: "p45-mock",
    titleZh: "P4/P5 语言限时卷 · 20 题",
    blurb: "与摸底不同的 20 题。P4 CES 130+ / P5 CES 140。连接词、完成时、短通知。",
    track: "A2",
    intended: "P4–P5",
    targetCes: 130,
    minutes: 20,
    items: P45_MOCK,
    subject: "english",
  },
  {
    id: "sec-mock",
    titleZh: "S1–S3 语言限时卷 · 24 题",
    blurb: "与摸底不同的 24 题。对准 50 题里的语法/词汇/短理解，不是全卷 2 小时 10 分。",
    track: "SEC",
    intended: "Sec 1–3",
    targetCes: null,
    minutes: 25,
    items: SEC_MOCK,
    subject: "english",
  },
];

export function getMock(id: string) {
  return MOCKS.find((m) => m.id === id);
}

export const OAS_LETTERS = ["A", "B", "C", "D"] as const;
