export const WORD_TARGETS = [
  { level: "S1", min: 200, max: 300, minutes: 30, focus: "clear story or one-sided explanation" },
  { level: "S2", min: 250, max: 350, minutes: 35, focus: "reason + example in each body paragraph" },
  { level: "S3", min: 300, max: 400, minutes: 40, focus: "controlled linkers; no although…but" },
] as const;

export const NARRATIVE_FRAME = {
  titleZh: "记叙文五步",
  steps: [
    { name: "Opening 1–2 sentences", do: "Who, where, when. Past tense. Do not start with I go to school every day if the story is one afternoon." },
    { name: "Problem", do: "What went wrong. One problem only." },
    { name: "Action", do: "What the character did. Keep past simple. Sense words: heard the bell, felt thirsty." },
    { name: "Turning point", do: "Help arrives or the character notices something (Lost and Found, a teacher, a friend)." },
    { name: "Ending", do: "Result + a short reflection: I will zip my bag next time. No new plot." },
  ],
};

export const EXPOSITORY_FRAME = {
  titleZh: "说明文 PEEL",
  steps: [
    { name: "Point", do: "One claim. Students should bring a water bottle." },
    { name: "Explain", do: "Why. Recess is hot; PE needs water." },
    { name: "Example", do: "Singapore school example: canteen queue, field, assembly." },
    { name: "Link", do: "Therefore / In addition / However — one linker. Then next point or conclusion." },
  ],
};

export const MODELS = [
  {
    level: "S1",
    type: "narrative" as const,
    title: "The Lost Bottle",
    words: 248,
    text: `Last Tuesday at recess, I sat on the corridor floor at Bedok Primary and emptied my bag. Books, a pencil case and a cracker wrapper came out, but my white water bottle with the pink flower was not there.

I felt thirsty and a little scared. Mum had just bought the bottle. Priya saw my face and bent down to my height. “Let’s go to Lost and Found,” she said.

We walked to the office. Auntie Tan smiled and looked in a box. She held up my bottle. “Is this your bottle?” I said yes and thanked her. I zipped my bag carefully.

On the way back, Priya said friends help each other. I agreed. Next time, I will check my bag after PE.`,
  },
  {
    level: "S2",
    type: "expository" as const,
    title: "Why We Should Not Run in the Canteen",
    words: 278,
    text: `Students should not run in the canteen. It looks like a small rule, but it keeps everyone safe.

First, the floor is often wet. Spilled drinks make it easy to fall. If a student runs with a tray, rice and soup can hit another person. Therefore, walking is not only polite. It prevents accidents.

Second, the canteen is crowded at recess. Prefects stand at the stalls to keep the queue fair. Running breaks the queue and makes younger pupils anxious.

Some students say they run because recess is short. However, a fall costs more time than walking. You may also have to see the teacher.

In conclusion, walking in the canteen is a simple habit. It protects your food, your friends and yourself.`,
  },
  {
    level: "S3",
    type: "expository" as const,
    title: "Should Every Student Join a CCA?",
    words: 332,
    text: `Every secondary student in a Singapore school is expected to join a CCA. Some pupils treat it as extra homework. I believe a CCA is still worth the time, although it must be chosen carefully.

The first reason is language. For students who arrived through AEIS, English does not stop at the exam paper. In choir, robotics or football, you hear instructions at full speed. You have to answer. Consequently, classroom English becomes easier.

The second reason is friendship. A new student may sit alone at recess. A CCA gives a repeating group and a teacher in charge. In addition, older members often explain school rules that a handbook never mentions.

Critics argue that CCAs steal revision time. This is fair when a pupil takes three CCAs or trains until night. The answer is not to drop all activities. It is to pick one and keep homework hours on a timetable.

In conclusion, a single, regular CCA helps AEIS students belong and practise English. It should not replace sleep or study. Chosen well, it supports both.`,
  },
];

export const EDIT_CHECKLIST = [
  "Word count is inside the band for my level.",
  "One tense in a narrative paragraph (usually past).",
  "No although…but / because…so.",
  "Articles on singular countable nouns.",
  "Names and Lost and Found capitalised.",
  "Each body paragraph has an example from school, not a slogan.",
  "Conclusion does not start a new story.",
  "Full stops. No comma joining two complete sentences.",
];
