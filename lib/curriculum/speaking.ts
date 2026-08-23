export const A2_SPEAKING = {
  exam: "A2 Key for Schools",
  time: "8–10 minutes (two candidates)",
  parts: [
    {
      name: "Part 1 · Interlocutor (3–4 min)",
      do: "Personal facts. Short answers, then one extra sentence.",
      prompts: [
        "What's your name?",
        "Where do you live?",
        "What time do you wake up on Monday?",
        "Do you walk to school or take a bus?",
        "Tell me about your form teacher.",
      ],
    },
    {
      name: "Part 2 · Collaborative picture (5–6 min)",
      do: "Two candidates talk about a picture (canteen / Lost and Found / Sports Day). Suggest, agree, ask.",
      prompts: [
        "What can you see?",
        "What is the girl looking for?",
        "Where should they go next?",
        "What do you take to PE?",
      ],
    },
  ],
  rubric: [
    { criterion: "Grammar and vocabulary", look: "A2 forms: present, past, going to, articles. Errors do not block meaning." },
    { criterion: "Pronunciation", look: "Can be understood. Singapore English is acceptable; keep grammar standard." },
    { criterion: "Interactive communication", look: "Asks the partner a question. Does not only wait for the examiner." },
  ],
  drill: [
    "Answer + because. I wake up at 6:15 because school starts at 7:30.",
    "Partner question: What about you?",
    "Picture: I can see… / Maybe they should… / I agree because…",
  ],
};

export const B1_SPEAKING = {
  exam: "B1 Preliminary for Schools",
  time: "12–17 minutes (two candidates)",
  parts: [
    {
      name: "Part 1 · Interview",
      do: "Longer turns. School, CCA, last weekend, plans.",
      prompts: [
        "How long have you been at this school?",
        "What do you enjoy about your CCA?",
        "Tell us about a time you lost something.",
        "What are you going to do this weekend?",
      ],
    },
    {
      name: "Part 2 · Individual long turn (1 minute)",
      do: "Interlocutor: “Now, I’d like each of you to talk on your own about a picture. Here is a photograph showing people studying together.” Speak for 1 minute.",
      prompts: [
        "Where the people are (for example a library or a classroom).",
        "What they are doing and what materials they are using.",
        "How they might be feeling.",
      ],
    },
    {
      name: "Part 3 · Collaborative",
      do: "Decide together (school fair stalls, Sports Day events).",
      prompts: [
        "Which two activities should the class choose? Why?",
      ],
    },
    {
      name: "Part 4 · Discussion",
      do: "Opinion on the same topic. Use however / I think / for example.",
      prompts: [
        "Is it better to eat in the canteen or bring a packed lunch?",
        "Should every student join a CCA?",
      ],
    },
  ],
  rubric: [
    { criterion: "Grammar and vocabulary", look: "B1 range: present perfect, although, because. Self-correct if you hear although…but." },
    { criterion: "Discourse management", look: "Link ideas. Avoid one-word answers in Parts 2–4." },
    { criterion: "Pronunciation", look: "Word stress on bottle, canteen, remember." },
    { criterion: "Interactive communication", look: "Invite the partner: What do you think?" },
  ],
  drill: [
    "1-minute photo: 4 sentences — place, people, action, feeling.",
    "Decision: First… / On the other hand… / Let’s choose…",
    "Opinion: I think… because… For example…",
  ],
};

export const LISTENING_NOTES = [
  {
    paper: "A2 Key Listening (~30 min, 5 parts)",
    studio: "Homework audio is one dialogue you may replay. Exam: each recording twice.",
    parts: "Pictures, matching, 3-option MCQ, gap-fill.",
  },
  {
    paper: "B1 Preliminary Listening (~36 min, 4 parts)",
    studio: "Longer talks. Write while listening. Spelling of school words: reccess is wrong.",
    parts: "MCQ, gap-fill, matching, true/false or 3-option.",
  },
];
