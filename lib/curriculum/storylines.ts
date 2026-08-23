export type Band = "P2/P3" | "P4/P5" | "S1/S2";

export type Storyline = {
  n: number;
  title: string;
  focus: string;
  grammar: string;
  vocab: string[];
  oracy: string[];
  exam: string;
  href?: string;
};

export type Theme = {
  id: string;
  title: string;
  exam: string;
  stories: Storyline[];
};

export const CYCLE = [
  { step: "1. Listen + Watch", do: "听本课录音或跟读。看图：canteen, recess, MRT。" },
  { step: "2. Speak + Roleplay", do: "分角色演。练问句、情态动词、礼貌用语。轮流说，听不懂就问一遍。" },
  { step: "3. Read + Answer", do: "短篇理解 + 完形。对准 CEQ 阅读 / AEIS 理解与完形。" },
  { step: "4. Write + Reflect", do: "P2–P5 写 80–100 词；S1 写 200–300 词。只改本课 1–2 个语法点。" },
] as const;

const v = (s: string) => s.split(", ");

export const THEMES: Theme[] = [
  {
    id: "school",
    title: "1. School life & routines",
    exam: "CEQ speaking · AEIS comprehension · daily English",
    stories: [
      { n: 1, title: "The First Day at a Singapore Primary School", focus: "Assembly, pledge, uniform check", grammar: "present simple; must", vocab: v("assembly, pledge, pinafore, form teacher, canteen, recess, CCA, void deck"), oracy: ["Good morning, Ms Tan.", "Where do we line up?", "I am in Blue House."], exam: "CEQ Speaking 1" },
      { n: 2, title: "Lost and Found at Recess", focus: "Asking Aunty, describing items", grammar: "a/an/the; Is this your…?", vocab: v("Lost and Found, recess, water bottle, sticker, counter, nametag"), oracy: ["I lost my water bottle.", "Is this your bottle?", "Thank you, Aunty Tan."], exam: "A2 Key R3 + speaking", href: "/trial/A2" },
      { n: 3, title: "Borrowing a Pencil in Class", focus: "Polite requests", grammar: "Can I…? / May I…?", vocab: v("pencil, eraser, sharpener, neighbour, quietly"), oracy: ["Can I borrow a pencil, please?", "Yes, here you are.", "Thank you."], exam: "CEQ Speaking 1" },
      { n: 4, title: "Group Work for Science Project", focus: "Turn-taking, agree/disagree", grammar: "I think… / shall we", vocab: v("project, group, turn, idea, fair"), oracy: ["What do you think?", "I agree because…", "Shall we try this?"], exam: "CEQ interactive" },
      { n: 5, title: "The Fire Drill", focus: "Following instructions", grammar: "imperatives; must not", vocab: v("fire drill, alarm, staircase, assemble, quietly"), oracy: ["Line up quickly.", "Do not run.", "Leave your bags."], exam: "CEQ listening notices" },
      { n: 6, title: "Library Borrowing Day", focus: "Asking for help, titles", grammar: "can / must + verb", vocab: v("library, borrow, return, due date, shelf, quiet"), oracy: ["Where are the picture books?", "I would like to borrow this.", "When must I return it?"], exam: "A2 notices" },
      { n: 7, title: "CCA Fair: Basketball or Art Club", focus: "Preferences", grammar: "prefer… to…; would rather", vocab: v("CCA, basketball, Art Club, trial, sign up"), oracy: ["I prefer basketball to art.", "Why do you like it?", "Let's try both."], exam: "CEQ speaking free time", href: "/trial/A2/1" },
      { n: 8, title: "Parent-Teacher Meeting", focus: "Reporting progress", grammar: "present perfect; because", vocab: v("parent-teacher meeting, progress, homework, improvement"), oracy: ["Mei has been working hard.", "She still needs help with articles.", "How can we practise at home?"], exam: "B1 speaking / writing" },
      { n: 9, title: "Classroom Monitor Duties", focus: "Giving instructions", grammar: "please + imperative; should", vocab: v("monitor, whiteboard, lights, roster"), oracy: ["Please sit down.", "Turn off the lights.", "It is your turn."], exam: "AEIS grammar must/should" },
      { n: 10, title: "The Surprise Class Quiz", focus: "Worry, asking for help", grammar: "going to; too / enough", vocab: v("quiz, nervous, revise, marks"), oracy: ["I am nervous.", "Can you explain this again?", "We are going to do our best."], exam: "CEQ speaking feelings" },
      { n: 11, title: "Cleaning Duty Roster", focus: "should / must / have to", grammar: "modals of obligation", vocab: v("roster, broom, dustpan, bin, duty"), oracy: ["We have to sweep today.", "You must not leave rubbish.", "Whose turn is it?"], exam: "AEIS grammar" },
      { n: 12, title: "Inter-House Sports Day", focus: "Cheering, describing events", grammar: "comparatives; past simple", vocab: v("Sports Day, house, sprint, relay, medal, field"), oracy: ["Priya was faster than me.", "Come on, Blue House!", "It was the best race."], exam: "A2 writing story" },
      { n: 13, title: "The Broken Water Bottle", focus: "Problem solving with a friend", grammar: "past simple + because", vocab: v("leak, refill, canteen, friend"), oracy: ["It leaked because I dropped it.", "Let's go to Lost and Found.", "I will buy a new one."], exam: "AEIS composition" },
      { n: 14, title: "School Bookshop: Buying Textbooks", focus: "Money, counting", grammar: "how much; any / some", vocab: v("bookshop, textbook, workbook, change, receipt"), oracy: ["How much is this workbook?", "I have ten dollars.", "Here is your change."], exam: "A2 shopping" },
      { n: 15, title: "End of Term: Packing Up", focus: "Sequencing, past tense", grammar: "first / then / finally; past simple", vocab: v("term, locker, exercise book, label"), oracy: ["First we cleared the desks.", "Then we packed the books.", "Finally we said goodbye."], exam: "AEIS composition sequence" },
    ],
  },
  {
    id: "family",
    title: "2. Family & home in Singapore",
    exam: "CEQ speaking/writing · cultural vocab",
    stories: [
      { n: 16, title: "Hawker Centre Dinner with Grandparents", focus: "Ordering food", grammar: "would like; some / any", vocab: v("hawker centre, chicken rice, tray, chilli, stall, queue"), oracy: ["I would like chicken rice, please.", "Is it spicy?", "Can we share a table?"], exam: "CEQ speaking food" },
      { n: 17, title: "Sunday at the Neighbourhood Park", focus: "Describing activities", grammar: "present continuous; like + -ing", vocab: v("playground, pavilion, jogging, football"), oracy: ["We are playing at the park.", "I like cycling.", "What are they doing?"], exam: "CEQ photo" },
      { n: 18, title: "Preparing for Chinese New Year", focus: "Sequencing, traditions", grammar: "going to; before / after", vocab: v("Chinese New Year, couplet, mandarin orange, reunion, red packet"), oracy: ["We are going to visit Ah Ma.", "First we clean the house.", "Gong Xi Fa Cai."], exam: "B1 culture writing" },
      { n: 19, title: "The Power Trip: Calling the Town Council", focus: "Phone language", grammar: "could you…; present perfect", vocab: v("town council, blackout, block, unit"), oracy: ["Good afternoon, Town Council.", "The lights have gone out.", "Our unit is 12-345."], exam: "functional call" },
      { n: 20, title: "Helping Mummy at NTUC FairPrice", focus: "Shopping list, prices", grammar: "how many / how much", vocab: v("FairPrice, trolley, receipt, offer, checkout"), oracy: ["We need a loaf of bread.", "How much are the eggs?", "Please pack them."], exam: "A2 shopping" },
      { n: 21, title: "The HDB Lift is Broken", focus: "Complaining politely", grammar: "too + adj; could you", vocab: v("HDB, lift, lobby, notice, storey"), oracy: ["Excuse me, the lift is not working.", "It is too high to walk easily.", "Could you help us?"], exam: "B1 functions" },
      { n: 22, title: "Planning a Trip to Sentosa", focus: "Suggestions", grammar: "shall we / let's / why don't we", vocab: v("Sentosa, MRT, cable car, beach, picnic"), oracy: ["Shall we go on Sunday?", "Why don't we take the MRT?", "Let's leave at nine."], exam: "CEQ speaking plans" },
      { n: 23, title: "Grandma Visits from China", focus: "Introducing school culture", grammar: "we call this…; present simple", vocab: v("recess, canteen, form teacher, CCA, Aunty"), oracy: ["In Singapore we have recess.", "This is my form teacher.", "We eat in the canteen."], exam: "CEQ speaking home" },
      { n: 24, title: "The Leaking Tap", focus: "Explaining a problem", grammar: "present continuous; because", vocab: v("tap, leak, plumber, bucket"), oracy: ["The tap is leaking.", "Water is dripping because the washer is old.", "Dad, can you look?"], exam: "AEIS explanation" },
      { n: 25, title: "Birthday Party at Home", focus: "Invites, thank-you notes", grammar: "would you like to…; past simple", vocab: v("invite, balloon, cake, neighbour"), oracy: ["Would you like to come?", "Thank you for the present.", "It was a lovely party."], exam: "A2 email" },
      { n: 26, title: "Helping with Laundry", focus: "Chores", grammar: "need to; present simple", vocab: v("laundry, hanger, balcony, detergent"), oracy: ["I need to hang the clothes.", "Please pass the hanger.", "They will dry on the balcony."], exam: "CEQ home" },
      { n: 27, title: "Night Before the Exam", focus: "Encouragement", grammar: "will; should", vocab: v("exam, revise, early night, water bottle"), oracy: ["You should sleep early.", "I will do my best.", "Do you need help with this page?"], exam: "CEQ speaking" },
    ],
  },
  {
    id: "friends",
    title: "3. Friendship & problem solving",
    exam: "AEIS composition · interaction",
    stories: [
      { n: 28, title: "A Friend Forgot Their Homework", focus: "Empathy, offering help", grammar: "could; should", vocab: v("homework, forgot, share, teacher"), oracy: ["Don't worry.", "You could tell Ms Tan.", "I can help you copy the questions."], exam: "AEIS narrative" },
      { n: 29, title: "Two Friends Argue Over Game Rules", focus: "Resolving conflict", grammar: "although; let's", vocab: v("rules, fair, turn, referee"), oracy: ["I think that is not fair.", "Although I was angry, I listened.", "Let's start again."], exam: "interaction repair" },
      { n: 30, title: "New Student from China Joins Class", focus: "Welcoming", grammar: "questions; present perfect", vocab: v("new, China, canteen, buddy"), oracy: ["Have you been here long?", "Come with me to the canteen.", "You can sit here."], exam: "B1 speaking", href: "/trial/B1" },
      { n: 31, title: "Sharing Snacks During Recess", focus: "Offering, refusing politely", grammar: "would you like; no thank you", vocab: v("snack, share, allergy, recess"), oracy: ["Would you like a biscuit?", "No, thank you.", "Maybe later."], exam: "CEQ functions" },
      { n: 32, title: "The Missing Library Book", focus: "Apologising", grammar: "I'm sorry; will", vocab: v("overdue, fine, replace, shelf"), oracy: ["I'm sorry I lost the book.", "I will tell the librarian.", "I will pay the fine."], exam: "AEIS composition" },
      { n: 33, title: "Helping a Friend Who Is Bullied", focus: "Reporting calmly", grammar: "should; reported speech", vocab: v("unkind, report, form teacher, safe"), oracy: ["That is not kind.", "We should tell Ms Tan.", "Are you all right?"], exam: "S1 values writing" },
      { n: 34, title: "Planning a Class Party", focus: "Voting, deciding", grammar: "shall we; most of us", vocab: v("vote, games, food, date"), oracy: ["Shall we have it on Friday?", "Most of us agree.", "What about you?"], exam: "CEQ Part 3" },
      { n: 35, title: "When a Friend Is Sick", focus: "Concern", grammar: "hope; should", vocab: v("clinic, rest, homework, message"), oracy: ["I hope you feel better.", "You should rest.", "I can bring your books."], exam: "CEQ speaking" },
      { n: 36, title: "The Group Presentation Went Wrong", focus: "Reflecting", grammar: "past perfect; although", vocab: v("slides, nervous, practise, next time"), oracy: ["Although I was nervous, I tried.", "We had not practised enough.", "Next time we will start earlier."], exam: "S1 composition", href: "/trial/SEC" },
      { n: 37, title: "Making Up After a Fight", focus: "Saying sorry", grammar: "I'm sorry that…; let's", vocab: v("argument, forgive, friends"), oracy: ["I'm sorry that I shouted.", "Can we be friends again?", "Let's walk to class together."], exam: "interaction" },
    ],
  },
  {
    id: "community",
    title: "4. Community & Singapore culture",
    exam: "Comprehension · vocab · listening",
    stories: [
      { n: 38, title: "Taking the MRT to School", focus: "Announcements, directions", grammar: "need to; on the MRT", vocab: v("MRT, platform, interchange, announcement, alight"), oracy: ["Which platform is it?", "Please mind the gap.", "We alight at Bedok."], exam: "CEQ listening" },
      { n: 39, title: "Visiting the National Museum", focus: "Describing exhibits", grammar: "past simple; relative which", vocab: v("exhibit, gallery, guide, artefact"), oracy: ["This gallery shows old Singapore.", "The guide who met us was kind.", "I learnt about the river."], exam: "B1 reading" },
      { n: 40, title: "Rainy Day: Flood at the Void Deck", focus: "News-style report", grammar: "past continuous; because", vocab: v("void deck, drain, flood, monsoon"), oracy: ["It was raining heavily.", "The void deck was flooded because the drain was blocked.", "Residents waited upstairs."], exam: "AEIS comprehension" },
      { n: 41, title: "National Day Parade Rehearsal", focus: "Sights and sounds", grammar: "could hear/see; past simple", vocab: v("National Day, parade, flag, flypast, Padang"), oracy: ["We could hear the drums.", "The flag went up.", "It was unforgettable."], exam: "AEIS composition" },
      { n: 42, title: "Visiting a Neighbourhood Clinic", focus: "Talking to a doctor", grammar: "I have…; should", vocab: v("clinic, fever, medicine, MC, queue"), oracy: ["I have a sore throat.", "How long have you felt this?", "You should rest."], exam: "CEQ speaking health" },
      { n: 43, title: "Recycling Day at School", focus: "Instructions, environment", grammar: "passive; should", vocab: v("recycle, bin, plastic, paper, Eco Club"), oracy: ["Paper is recycled in the blue bin.", "We should reduce waste.", "Put cans here."], exam: "B1 environment" },
      { n: 44, title: "The Neighbourhood Police Officer Visit", focus: "Safety questions", grammar: "wh- questions; must not", vocab: v("officer, stranger, emergency, 999"), oracy: ["What should we do if we are lost?", "You must not follow a stranger.", "Call 999."], exam: "listening + speaking" },
      { n: 45, title: "Deepavali at Little India", focus: "Describing culture", grammar: "there is/are; adjectives", vocab: v("Deepavali, lights, rangoli, Little India"), oracy: ["There are many lights.", "The street looks beautiful.", "We respect this festival."], exam: "CEQ culture" },
      { n: 46, title: "Hari Raya Greetings", focus: "Respectful language", grammar: "may I; wish", vocab: v("Hari Raya, Selamat, mosque, neighbour, kuih"), oracy: ["Selamat Hari Raya.", "May I try this kuih?", "Thank you for inviting us."], exam: "politeness" },
      { n: 47, title: "Community Garden Project", focus: "Working together", grammar: "let's; present perfect", vocab: v("community garden, soil, water, harvest"), oracy: ["Let's water the plants.", "We have planted tomatoes.", "Whose turn is it?"], exam: "interaction" },
    ],
  },
  {
    id: "exam",
    title: "5. Academic & exam skills",
    exam: "Direct CEQ + AEIS item types",
    stories: [
      { n: 48, title: "Comprehension: The Lost Puppy", focus: "Main idea + inference", grammar: "wh- questions", vocab: v("puppy, notice, owner, found"), oracy: ["What happened first?", "Why was Mei worried?", "Where did they go?"], exam: "AEIS RC", href: "/curriculum/diagnostic/p4" },
      { n: 49, title: "Cloze: A Day at the Beach", focus: "Grammar + collocations", grammar: "articles; prepositions", vocab: v("East Coast, picnic, shade, tide"), oracy: ["We went to East Coast Park.", "Put the blanket on the sand.", "Don't swim too far."], exam: "AEIS cloze 15", href: "/curriculum/grammar/cloze" },
      { n: 50, title: "Grammar: The School Camp (past tense)", focus: "Irregular verbs", grammar: "went / saw / ate / slept", vocab: v("camp, bunk, hike, campfire"), oracy: ["Yesterday we went to camp.", "We saw monkeys.", "We slept in bunks."], exam: "AEIS grammar 10", href: "/curriculum/grammar/tense" },
      { n: 51, title: "Vocabulary in Context: The Science Lab", focus: "postpone / put off type items", grammar: "word meaning", vocab: v("experiment, goggles, beaker, postpone"), oracy: ["Put on your goggles.", "The test was put off.", "Handle the beaker carefully."], exam: "AEIS vocab 10", href: "/curriculum/diagnostic/p4" },
      { n: 52, title: "Composition: My Best Friend", focus: "Plan + draft", grammar: "present simple + because", vocab: v("kind, share, recess, laugh"), oracy: ["Priya is my best friend because…", "We play at recess.", "She helps me."], exam: "AEIS writing", href: "/curriculum/writing" },
      { n: 53, title: "Composition: An Unforgettable Day", focus: "Past tense narrative", grammar: "past simple consistency", vocab: v("unforgettable, first, then, finally"), oracy: ["I will never forget that day.", "First… Then… Finally…"], exam: "S1 200–300", href: "/curriculum/writing" },
      { n: 54, title: "Composition: A Visit to the Zoo", focus: "Description", grammar: "adjectives; there was/were", vocab: v("Mandai, enclosure, keeper, rainforest"), oracy: ["There were orangutans.", "The keeper explained…", "It was hotter than I expected."], exam: "P4 ~100 words", href: "/curriculum/writing" },
      { n: 55, title: "Speaking: Picture Discussion", focus: "CEQ 1-minute photo", grammar: "present continuous", vocab: v("library, classroom, materials, feeling"), oracy: ["They are studying together.", "They are using books and a laptop.", "They might feel focused."], exam: "B1 Speaking Part 2", href: "/curriculum/speaking" },
      { n: 56, title: "Listening: School Announcements", focus: "Times and places", grammar: "at / on / in", vocab: v("announcement, assembly, cancelled, hall"), oracy: ["PE is cancelled.", "Meet at the hall at 7:50.", "Bring your water bottle."], exam: "CEQ listening", href: "/curriculum/papers" },
      { n: 57, title: "Email to a Teacher", focus: "Formal writing", grammar: "I am writing to…; could you", vocab: v("Dear, regards, absence, homework"), oracy: ["Dear Ms Tan,", "I am writing to explain my absence.", "Could I have the homework?"], exam: "A2/B1 email", href: "/curriculum/writing" },
      { n: 58, title: "Note-taking from a Teacher", focus: "Key words", grammar: "imperatives", vocab: v("heading, example, therefore, homework"), oracy: ["Write the heading.", "This is the example.", "Therefore we use past tense."], exam: "listening notes" },
      { n: 59, title: "Summarising a Kids' News Article", focus: "Main points", grammar: "so / therefore", vocab: v("headline, report, residents, weather"), oracy: ["The main idea is…", "Therefore…", "In short…"], exam: "B1 reading" },
      { n: 60, title: "Oral Presentation: My Hobby", focus: "1-minute talk", grammar: "like + -ing; because", vocab: v("hobby, practise, weekend"), oracy: ["My hobby is reading.", "I practise every weekend.", "I like it because…"], exam: "CEQ speaking", href: "/curriculum/speaking" },
      { n: 61, title: "Debate: Handphones in School", focus: "However / therefore", grammar: "linkers; should", vocab: v("handphone, rule, distract, emergency"), oracy: ["Students should not…", "However, in an emergency…", "Therefore I think…"], exam: "S1 exposition", href: "/curriculum/grammar/linkers" },
      { n: 62, title: "Proofreading a Letter", focus: "Find mistakes", grammar: "articles; 3sg; tense", vocab: v("draft, error, correct, check"), oracy: ["This needs the.", "She wakes, not wake.", "Yesterday I went."], exam: "editing", href: "/curriculum/errors" },
    ],
  },
  {
    id: "values",
    title: "6. Emotions, values & character",
    exam: "Oracy · CEQ speaking",
    stories: [
      { n: 63, title: "Feeling Nervous Before a Test", focus: "Naming emotions", grammar: "I feel…; because", vocab: v("nervous, calm, breathe, ready"), oracy: ["I feel nervous because…", "Let's breathe slowly.", "You are ready."], exam: "CEQ speaking" },
      { n: 64, title: "Being Grateful to Helpers", focus: "Thanking staff", grammar: "thank you for + -ing", vocab: v("cleaner, security, canteen stall, Aunty"), oracy: ["Thank you for keeping the school clean.", "Good morning, Uncle.", "I appreciate your help."], exam: "politeness" },
      { n: 65, title: "Showing Respect to Elders", focus: "Polite language", grammar: "please / may I", vocab: v("Ah Ma, Ah Gong, neighbour, greet"), oracy: ["Good evening, Ah Ma.", "May I help you?", "After you."], exam: "CEQ functions" },
      { n: 66, title: "Being Responsible for Your Actions", focus: "Owning mistakes", grammar: "I should have…; will", vocab: v("responsible, choice, consequence"), oracy: ["It was my fault.", "I should have zipped my bag.", "I will do it next time."], exam: "AEIS reflection" },
      { n: 67, title: "Courage: Speaking Up in Class", focus: "Taking a turn", grammar: "I think; could you repeat", vocab: v("hand, answer, mistake, brave"), oracy: ["I think the answer is…", "Could you repeat that, please?", "I'm not sure, but…"], exam: "interaction" },
      { n: 68, title: "Honesty: Admitting a Mistake", focus: "Telling the truth", grammar: "I'm sorry I…", vocab: v("honest, admit, broken, replace"), oracy: ["I'm sorry I broke it.", "I will replace it.", "Thank you for listening."], exam: "composition moral" },
      { n: 69, title: "Perseverance: Learning to Ride a Bicycle", focus: "Keep trying", grammar: "could / couldn't; yet", vocab: v("park, balance, helmet, try"), oracy: ["I couldn't do it yesterday.", "I can do it now.", "I haven't given up yet."], exam: "CEQ speaking" },
      { n: 70, title: "Kindness: Including a Lonely Classmate", focus: "Invitation", grammar: "would you like to", vocab: v("lonely, include, recess, together"), oracy: ["Would you like to play with us?", "Come and sit here.", "We can share."], exam: "interaction" },
      { n: 71, title: "Patience: Waiting in Queue", focus: "Queue language", grammar: "must not; wait", vocab: v("queue, stall, cut, wait"), oracy: ["Please wait in line.", "We must not cut the queue.", "It's almost our turn."], exam: "school rules" },
      { n: 72, title: "Teamwork: Building a Class Project", focus: "Roles", grammar: "let's; I will / you can", vocab: v("team, role, poster, deadline"), oracy: ["I will draw.", "You can write.", "Let's check the deadline."], exam: "CEQ collaborative" },
      { n: 73, title: "Self-control: Managing Anger", focus: "Calm words", grammar: "when I feel… I", vocab: v("angry, breathe, walk, later"), oracy: ["I feel angry.", "I need a minute.", "Let's talk later."], exam: "oracy repair" },
      { n: 74, title: "Gratitude: Thank-You Card to Aunty Cleaner", focus: "Written thanks", grammar: "thank you for; because", vocab: v("card, cleaner, corridor, smile"), oracy: ["Thank you for cleaning our corridor.", "The school looks nice because of you."], exam: "A2 writing" },
      { n: 75, title: "Resilience: After Losing a Game", focus: "Bouncing back", grammar: "although; next time", vocab: v("score, lost, practise, sportsmanship"), oracy: ["Although we lost, we tried.", "Well played.", "Next time we will practise more."], exam: "S1 although" },
      { n: 76, title: "Caring for the Environment: Litter", focus: "Picking up litter", grammar: "should; let's", vocab: v("litter, bin, park, environment"), oracy: ["We should pick it up.", "Let's use the bin.", "Keep Singapore clean."], exam: "B1 environment" },
      { n: 77, title: "Dreams: What I Want to Be", focus: "Future", grammar: "want to be; because", vocab: v("doctor, teacher, engineer, when I grow up"), oracy: ["When I grow up I want to be a teacher.", "Because I like helping.", "What about you?"], exam: "CEQ speaking plans" },
    ],
  },
];

export const ALL_STORIES: Storyline[] = THEMES.flatMap((t) => t.stories);

export function getStory(n: number) {
  return ALL_STORIES.find((s) => s.n === n);
}

export const SAMPLE_SCRIPTS: {
  n: number;
  scene: string;
  lines: { who: string; say: string }[];
}[] = [
  {
    n: 1,
    scene: "School field, 7:40 a.m. Mei and Priya in pinafores. The form teacher, Ms Tan, stands at the front.",
    lines: [
      { who: "Ms Tan", say: "Good morning, class. Line up in two rows. We will say the pledge." },
      { who: "Mei", say: "Priya, where do we stand?" },
      { who: "Priya", say: "Blue House is on the left. Come with me." },
      { who: "Ms Tan", say: "Check your uniform. White shoes, please." },
      { who: "Mei", say: "Yes, Ms Tan. I am ready." },
    ],
  },
  {
    n: 2,
    scene: "Corridor, then Lost and Found. Locked cast: Mei, Priya, Aunty Tan.",
    lines: [
      { who: "Mei", say: "Oh no! Where is my water bottle? I put it in my bag this morning." },
      { who: "Priya", say: "Let's go to the Lost and Found. Aunty Tan keeps lost things there." },
      { who: "Aunty Tan", say: "Is this your white bottle with the pink flower?" },
      { who: "Mei", say: "Yes, that is mine, that is the bottle." },
      { who: "Aunty Tan", say: "Here you are, this is yours." },
      { who: "Mei", say: "Yes, that is mine!" },
      { who: "Priya", say: "That is yours, Mei!" },
      { who: "Mei", say: "Thank you, Aunty Tan." },
    ],
  },
  {
    n: 3,
    scene: "Classroom. Mei's pencil is broken. Priya sits next to her.",
    lines: [
      { who: "Mei", say: "Priya, can I borrow a pencil, please?" },
      { who: "Priya", say: "Yes. Here you are." },
      { who: "Mei", say: "Thank you. I will give it back after the lesson." },
      { who: "Ms Tan", say: "Please speak quietly. Continue your work." },
    ],
  },
];

export const WEEK_MAPS: Record<string, { label: string; weeks: number[] }> = {
  "p23": { label: "P2/P3 · A2 Key", weeks: [1, 2, 3, 5, 6, 13, 14, 16, 20, 31, 56, 63] },
  "p45": { label: "P4/P5 · A2 130+ / B1 140+", weeks: [2, 7, 8, 12, 22, 30, 38, 48, 49, 52, 55, 57] },
  "s12": { label: "S1/S2 · AEIS English", weeks: [4, 33, 36, 40, 41, 50, 53, 55, 57, 61, 62, 75] },
};
