import { prisma } from "../lib/db";
import * as bcrypt from "bcryptjs";

async function main() {
  console.log("🌱 Starting seed...");

  // Upsert demo users - only hash password on create, not on update
  const demoUser = await prisma.user.upsert({
    where: { email: "demo@sgschoolentry.local" },
    update: {
      name: "Demo Student",
      role: "student",
      level: "A2",
      subscribed: true,
    },
    create: {
      email: "demo@sgschoolentry.local",
      password: await bcrypt.hash("demo1234", 10),
      name: "Demo Student",
      role: "student",
      level: "A2",
      subscribed: true,
    },
  });

  const trialUser = await prisma.user.upsert({
    where: { email: "trial@sgschoolentry.local" },
    update: {
      name: "Trial Student",
      role: "student",
      level: "A2",
      subscribed: false,
    },
    create: {
      email: "trial@sgschoolentry.local",
      password: await bcrypt.hash("trial1234", 10),
      name: "Trial Student",
      role: "student",
      level: "A2",
      subscribed: false,
    },
  });

  const adminUser = await prisma.user.upsert({
    where: { email: "admin@sgschoolentry.local" },
    update: {
      name: "Review Admin",
      role: "admin",
      level: null,
      subscribed: true,
    },
    create: {
      email: "admin@sgschoolentry.local",
      password: await bcrypt.hash("admin1234", 10),
      name: "Review Admin",
      role: "admin",
      level: null,
      subscribed: true,
    },
  });

  console.log("✅ Upserted demo users");

  // =================================================================
  // WEEK DEFINITIONS
  // =================================================================

  const weekDefinitions = [
    // A2 WEEKS
    {
      level: "A2",
      weekNumber: 0,
      title: "试学周 / Sample Week",
      description: "First week in a Singapore school",
      isSample: true,
      errorFocus: "articles-demonstratives-possessives",
      parentBrief: "本周纠错焦点：冠词 + 指示代词 + 物主代词。微课是失物招领：Auntie Tan 问 Is this your bottle? Mei 答 Yes, that's mine. 孩子会说 this is your bottle?（疑问语序错）、that is my（漏 -s）、I lost water bottle（漏 a）。练 this/that、your/mine、Is this your…? 和 a → the。不提开学板书，不提食堂。",
      videoUrl: "/video/a2-w0.mp4",
      kaizenFocus: "Use articles (a/the), demonstratives (this/that), possessives (your/mine), and question form 'Is this your...?'",
      questions: [
        {
          type: "reading",
          order: 1,
          content: `Read this email:

From: Mei Lin <mei.lin@student.sg>
To: Cousin Hua <hua@email.com>
Subject: Lost and Found!

Hi Hua!

Today at school I lost my water bottle! I looked everywhere – in my bag, in the classroom, near the lockers. I couldn't find it. I was worried because Mum just bought it for me. It's a white water bottle with a pink flower sticker on it.

My new friend Priya saw I was upset. She put her hand on my shoulder and said, "Don't worry! Let's go to the Lost and Found office." We walked down the corridor to the school office.

At the counter there was Auntie Tan. She has curly grey hair, glasses, and she wears a pink polo shirt with a gold nametag that says AUNTIE TAN. Behind her I could see a shelf with a plant, a crate, a basket, and some lunch bags. There's a big sign on the wall: LOST AND FOUND, and under it in Chinese: 失物招领.

Auntie Tan looked at the counter. There were so many water bottles! I saw a blue one, a pink one, a green one, and a yellow one. Then she picked up a white bottle with a pink flower sticker. She held it up and asked me, "Is this your bottle?"

I was so happy! I said, "Yes, that's mine. Thank you!"

Auntie Tan smiled and gave it to me. Priya is a good friend for helping me. The Lost and Found office really helps students.

Love,
Mei`,
          options: JSON.stringify([
            "Why was Mei worried?|A. She was late|B. She lost her water bottle|C. She had no friends|D. She failed a test",
            "Who helped Mei?|A. Ms Tan|B. Her mother|C. Priya|D. A teacher",
            "Where did Priya take Mei?|A. The classroom|B. The library|C. The Lost and Found office|D. The playground",
            "Who works at the Lost and Found?|A. Ms Tan|B. Auntie Tan|C. Mei's mother|D. Priya",
            "What did Auntie Tan ask Mei?|A. What did you lose?|B. Where is your bottle?|C. Is this your bottle?|D. What's your name?",
            "How many other water bottles were on the counter?|A. Two|B. Three|C. Four|D. Five",
            "What did Mei say to Auntie Tan?|A. That's the one!|B. Yes, that's mine. Thank you.|C. I lost my bottle.|D. Can I have it?",
            "What is behind Auntie Tan?|A. A clock|B. A map|C. A shelf with a plant, crate, basket, and lunch bags|D. A notice board",
          ]),
          correctAnswer: "B,C,C,B,C,C,B,C",
          points: 8,
        },
        {
          type: "grammar",
          order: 2,
          content: "Choose the correct answer:",
          options: JSON.stringify([
            "Is ____ your bottle?|A. this|B. these|C. those|D. them",
            "Yes, that's ____.|A. my|B. mine|C. me|D. I",
            "Mei lost ____ water bottle.|A. a|B. an|C. the|D. some",
            "Auntie Tan wears ____ pink polo shirt.|A. a|B. an|C. the|D. some",
            "That is ____ bottle with the pink flower.|A. a|B. an|C. the|D. no article",
            "____ is Auntie Tan at the counter.|A. This|B. That|C. These|D. Those",
            "The Lost and Found office is ____ the school office.|A. in|B. at|C. on|D. by",
            "Mei said thank ____.|A. me|B. your|C. you|D. yours",
          ]),
          correctAnswer: "A,B,A,A,C,B,A,C",
          points: 8,
        },
        {
          type: "writing",
          order: 3,
          content: `Write an email to Mei (50-70 words).

Mei told you about finding her bottle at Lost and Found. Write back and answer these THREE questions:
• Have you ever lost something at school? What was it?
• How did you find it (or did someone help you)?
• What would you say to someone at Lost and Found?

成功标准 / Success Criteria:
✓ 回答所有3个问题 (Answer all 3 content points)
✓ 使用 this/that 和 your/mine (Use demonstratives and possessives: Is this yours? That's mine.)
✓ 使用正确冠词 (Use articles correctly: a water bottle, the Lost and Found office)
✓ 50-70词 (50-70 words)`,
          points: 10,
        },
        {
          type: "listening",
          order: 4,
          content: `听读练习 / Listening Preparation (read carefully)

Note: This is a separate timetable listening task, not the Lost and Found story.

Ms Tan: Good morning, class. Tomorrow is Tuesday, so let me remind you about your timetable. You start with English at eight o'clock, then Maths at nine fifteen. Break is at ten thirty. After break you have Science with Mr Lim in the lab. Don't forget your lab coat! Lunch is at twelve thirty. In the afternoon you have PE outside, so bring your water bottle and sports shoes. School finishes at two forty-five. Any questions?

Student: Do we need our Maths homework tomorrow?

Ms Tan: Yes, please bring your Maths workbook. And remember, Thursday is Drama Club for those who signed up. See you tomorrow!`,
          options: JSON.stringify([
            "What day is Ms Tan talking about?|A. Monday|B. Tuesday|C. Thursday|D. Friday",
            "What is the first lesson?|A. Maths|B. Science|C. English|D. PE",
            "Where is the Science lesson?|A. In the classroom|B. In the canteen|C. In the lab|D. Outside",
            "What should students bring for PE?|A. Lab coat|B. Maths workbook|C. Drama script|D. Water bottle and sports shoes",
            "When does Drama Club meet?|A. Monday|B. Tuesday|C. Wednesday|D. Thursday",
          ]),
          correctAnswer: "B,C,C,D,D",
          points: 5,
          audioUrl: "/audio/a2-w0-listening.mp3",
        },
        {
          type: "speaking",
          order: 5,
          content: `口语练习 / Speaking Practice

Task: Talk about "Lost and Found at school" (1 minute)

Think about these points:
• Have you ever lost something at school? What was it?
• How did you ask for help or look for it?
• Practice saying: "Is this your...?" and "Yes, that's mine. Thank you."
• What advice would you give to someone who lost something?

Useful phrases:
• Once I lost...
• I asked, "Is this your...?" / "Is that yours?"
• Someone said, "That's mine." / "This is mine."
• The Lost and Found office is...
• If you lose something, you should...
• Always say "Thank you" when...
• I would feel worried if I lost...
• It's important to write your name on...

如何练习 / How to practise:
1. 准备1分钟 (Prepare for 1 minute)
2. 点击下方"开始录音"按钮 (Tap the "开始录音" button below)
3. 说完整1分钟，然后停止 (Speak for the full minute, then stop)
4. 播放听一听，满意后提交给AI评估 (Playback, then submit for AI feedback)`,
          points: 5,
        },
      ],
    },
    {
      level: "A2",
      weekNumber: 1,
      title: "Week 1: Daily Routines",
      description: "Talking about everyday activities",
      isSample: false,
      dueDate: new Date("2026-08-20"),
      errorFocus: "3sg-s",
      parentBrief: "本周纠错焦点：第三人称单数 -s（he/she/it + 动词要加 -s）和时间介词 at/in/on。中文动词不变形，孩子会说 she wake up 或 he go to school。英语现在时里，he/she/it 后面的动词必须加 -s：wakes, goes, has。时间介词：at 7:00, in the morning, on Monday。本周作业会抓住这两个高频错误。",
      videoUrl: null,
      kaizenFocus: "Add -s to verbs after he/she/it in present simple; use at/in/on for time correctly",
      officialClipId: "loINl3Ln6Ck",
      officialClipCredit: "片源 Super Simple Songs 官方频道。Days of the Week。本站不拥有该片，仅嵌入官方 YouTube。孩子先听 on Monday / on Tuesday，再练 she wakes / at 7:00 / on Monday。",
      questions: [
        {
          type: "reading",
          order: 1,
          content: `Read Mei's diary entry:

My School Day – Monday

I live in Bedok with my family. Every Monday I wake up early because I have extra Math class before school starts. My alarm rings at 6:00 a.m. but I sometimes press snooze! My dad always tells me not to be late.

I get up at 6:15, brush my teeth, and put on my school uniform. My mum prepares breakfast – fried rice or noodles. I drink tea and check my bag. My little sister Jia is still sleeping! She goes to kindergarten, so she wakes up later.

At 7:00 a.m. sharp, Dad and I leave home. We walk to the bus stop together. The 168 bus arrives at 7:10. Dad takes it to work and I take it to school. The journey is twenty minutes. I get off near the library and walk three minutes to the school gate.

My extra Math class starts at 7:45. Miss Chen teaches us fractions and problem sums. She writes on the whiteboard and asks us questions. After that, normal school starts at 8:30. We have assembly, then English, Science, and PE before lunch.

At 2:00 p.m. school finishes. I take the bus home. At home, I change into comfortable clothes, have a snack, and do my homework. In the evening, we have dinner together at 7:00 p.m. After dinner, I help wash the dishes, then read for a bit. I go to bed at 9:30 p.m.

I like Mondays because Math is my favourite subject!`,
          options: JSON.stringify([
            "Why does Mei wake up early on Mondays?|A. She has basketball practice|B. She has extra Math class|C. Her mum tells her to|D. The bus comes early",
            "Who wakes up later than Mei?|A. Her dad|B. Her mum|C. Her sister Jia|D. Her teacher",
            "What time does Mei leave home?|A. 6:00 a.m.|B. 6:15 a.m.|C. 7:00 a.m.|D. 7:10 a.m.",
            "How does Mei travel to school?|A. Dad drives her|B. She walks all the way|C. She takes bus 168|D. She rides a bicycle",
            "What does Miss Chen teach?|A. English|B. Science|C. Math|D. PE",
            "What time does normal school start?|A. 7:45|B. 8:00|C. 8:30|D. 9:00",
            "What does Mei do after she gets home?|A. Plays computer games|B. Changes clothes, has a snack, does homework|C. Goes to sleep|D. Watches TV for two hours",
            "How does Mei feel about Mondays?|A. She dislikes them|B. She thinks they are boring|C. She likes them because Math is her favourite|D. She doesn't say",
          ]),
          correctAnswer: "B,C,C,C,C,C,B,C",
          points: 8,
        },
        {
          type: "grammar",
          order: 2,
          content: `Read about Jun's routine. Choose the correct word for each gap.

My School Routine

My name is Jun. I (1) ____ at a secondary school in Tampines. Every weekday, my sister Amy and I wake up early. Amy is in Primary 5. She (2) ____ her alarm at 6:30 a.m. I wake up a bit earlier, (3) ____ 6:15 a.m.

After we wash up, we have breakfast together. Mum (4) ____ us rice porridge or toast. Amy always (5) ____ orange juice, but I prefer milk. Dad leaves for work (6) ____ 7:00 a.m. He (7) ____ the MRT to the city.

Amy and I walk to the bus stop. We (8) ____ the same bus to school. Amy's school is near mine, so we get off at the same stop. Then Amy walks left and I walk right!`,
          options: JSON.stringify([
            "(1)|A. study|B. studies|C. studied|D. studying",
            "(2)|A. set|B. sets|C. setting|D. setted",
            "(3)|A. in|B. on|C. at|D. by",
            "(4)|A. make|B. makes|C. making|D. maked",
            "(5)|A. drink|B. drinks|C. drank|D. drinking",
            "(6)|A. in|B. on|C. at|D. to",
            "(7)|A. take|B. takes|C. taking|D. taked",
            "(8)|A. catch|B. catches|C. catched|D. catching",
          ]),
          correctAnswer: "A,B,C,B,B,C,B,A",
          points: 8,
        },
        {
          type: "writing",
          order: 3,
          content: `You receive this email from your English friend, Sam:

From: Sam
To: You
Subject: Your daily routine

Hi!

Thanks for your last email. I want to know about your school day! What time do you wake up? What do you eat for breakfast? How do you get to school? And what do you do after school in the evening?

Write back soon!
Sam

Write your email to Sam (50-70 words). Answer ALL the questions.

成功标准 / Success Criteria:
✓ 回答所有4个问题 (Answer all 4 questions)
✓ 第三人称单数 -s (If you mention family: My dad drives... / My sister wakes...)
✓ 时间介词 at/in/on (at 7:00, in the morning, on weekdays)
✓ 邮件格式 (Email format: Hi Sam, ... / Best, [your name])
✓ 50-70词 (50-70 words)`,
          points: 10,
        },
        {
          type: "listening",
          order: 4,
          content: `听读练习 / Listening Preparation (read carefully)

Sarah: Hey Jun Wei, do you wake up early on weekdays?

Jun Wei: Yes, I have to! I wake up at six fifteen because my school is quite far. What about you?

Sarah: I'm lucky – I wake up at seven because I live near my school. I just walk for ten minutes.

Jun Wei: That's nice! I take the bus for thirty minutes every morning. The bus is always full.

Sarah: Do you have time for breakfast?

Jun Wei: Not really. I usually eat bread on the bus! But on weekends I wake up late, around nine or ten. Then my mum makes a big breakfast for the family.

Sarah: Weekends are the best! I always sleep until eight thirty on Saturdays. No school, no alarm clock!`,
          options: JSON.stringify([
            "What time does Jun Wei wake up on weekdays?|A. 6:00|B. 6:15|C. 7:00",
            "How does Sarah get to school?|A. By bus|B. By MRT|C. She walks",
            "How long is Jun Wei's bus journey?|A. Ten minutes|B. Twenty minutes|C. Thirty minutes",
            "Where does Jun Wei usually eat breakfast on weekdays?|A. At home|B. On the bus|C. At school",
            "What time does Sarah wake up on Saturdays?|A. 7:00|B. 8:30|C. 9:00",
          ]),
          correctAnswer: "B,C,C,B,B",
          points: 5,
          audioUrl: "/audio/a2-w1-listening.mp3",
        },
        {
          type: "speaking",
          order: 5,
          content: `口语练习 / Speaking Practice

Task: Talk about your weekday morning routine (1 minute)

Describe these points:
• What time you wake up and who wakes you (alarm? parent?)
• What you do first (wash? eat? get dressed?)
• What your family members do in the morning (use he/she + verb + -s!)
• What time you leave home and how you travel

Useful phrases:
• I wake up at...
• My alarm rings at...
• My mum/dad wakes up at... (note: wakes, not wake!)
• She makes breakfast / He leaves for work
• The first thing I do is...
• Then I...
• After that, I...
• On weekdays, I always...
• In the morning, my family...

Grammar focus for AI:
AI will listen for correct use of third-person -s (my sister walks, dad takes the MRT) and time prepositions (at 7:00, in the morning, on Monday).

如何练习 / How to practise:
1. 计划你的内容，特别注意 he/she + 动词-s (Plan your content; focus on he/she + verb-s)
2. 点击下方"开始录音"按钮 (Tap "开始录音")
3. 说满1分钟 (Speak for 1 minute)
4. AI会评估你的语法，特别是第三人称-s和时间介词 (AI evaluates grammar, especially 3rd person -s and time prepositions)`,
          points: 5,
        },
      ],
    },
    {
      level: "A2",
      weekNumber: 2,
      title: "Week 2: School Life",
      description: "Describing school subjects and activities",
      isSample: false,
      dueDate: new Date("2026-08-27"),
      errorFocus: "present-continuous",
      parentBrief: "本周纠错焦点：现在进行时 vs 一般现在时，以及 like + -ing。中文用时间词表示习惯，孩子会说 I am going to school every day（进行时被过度泛化）。英语习惯用一般现在时：I go to school every day；正在发生才用进行时：I am swimming now。另外，like/enjoy 后面接 -ing：I like reading。本周盯住这两个混淆点。",
      videoUrl: null,
      kaizenFocus: "Use present simple for habits, present continuous for now; like/enjoy + -ing",
      officialClipId: "-DNilMthxx8",
      officialClipCredit: "片源 Cambridge English 官方频道，A2 Key for Schools 口语样例。本站与剑桥无隶属，不提供官方试卷。孩子看两人怎么回答学校、作业、喜欢做什么。",
      questions: [
        {
          type: "reading",
          order: 1,
          content: `Read Mei's diary:

Tuesday, 13 August
Art Class & Choir Practice

Today is Tuesday, and I love Tuesdays! I have Art in the morning with Mr Hassan. He is very patient and always encourages us. Right now, our class is learning about Singapore landmarks. This month we are painting famous places. I am working on a picture of the Merlion. It's difficult because I'm trying to show the water coming out of its mouth!

In Art lessons, I usually sit next to Priya. She enjoys painting too. She is making a picture of Gardens by the Bay. We often help each other. Last week she showed me how to mix colours to make the sky look more real. I like learning new techniques.

After Art, we have Maths and English. At recess, I usually sit with my friends near the benches under the big tree. Sometimes I bring a snack from home – today I had a cheese sandwich my mum made.

In the afternoon, we have PE. Usually we play outside, but today it is raining, so we are playing badminton in the school hall. I enjoy playing badminton because it makes me feel active and strong.

After school finishes at two thirty, I stay for CCA. I'm in the school choir. We practise every Tuesday and Thursday in the music room. Right now, we are preparing three songs for National Day next month. Our conductor, Mr Lim, says we are improving every week. I love singing because it helps me relax after lessons. When I sing with my friends, I feel happy and confident.

I usually get home at four o'clock on CCA days. Choir practice is tiring, but I never want to miss it!`,
          options: JSON.stringify([
            "What is Mei's class painting this month?|A. Animals|B. Family members|C. Famous Singapore places|D. Flowers",
            "What is Mei painting?|A. Gardens by the Bay|B. The Merlion|C. A tree|D. The school",
            "Who sits next to Mei in Art?|A. Mr Hassan|B. Mr Lim|C. Priya|D. Her mum",
            "What did Priya teach Mei last week?|A. How to sing|B. How to play badminton|C. How to mix colours|D. How to make sandwiches",
            "Why are they playing badminton in the hall today?|A. The hall is bigger|B. The teacher prefers indoors|C. It is raining|D. They always play inside",
            "What CCA is Mei in?|A. Badminton club|B. Art club|C. Drama club|D. Choir",
            "When does the choir practise?|A. Monday and Wednesday|B. Tuesday and Thursday|C. Only on Tuesday|D. Every day",
            "How does Mei feel when she sings with her friends?|A. Tired and bored|B. Nervous|C. Happy and confident|D. Hungry",
          ]),
          correctAnswer: "C,B,C,C,C,D,B,C",
          points: 8,
        },
        {
          type: "grammar",
          order: 2,
          content: `Read about Raj's school week. Choose the correct word for each gap.

My School Week

I (1) ____ to secondary school in Tampines. This week is very busy! Every Tuesday I have Art class. I really enjoy (2) ____ because our teacher gives us interesting projects. Right now, the students (3) ____ clay sculptures. I (4) ____ a model of a lion!

On Wednesdays, I usually (5) ____ extra Maths after school. I don't mind it because the teacher is kind. But right now it's Tuesday evening and I (6) ____ my Science homework at home. Science is hard, but I like (7) ____ experiments in the lab.

At the moment, my sister (8) ____ the piano downstairs. She practises every evening. She enjoys (9) ____ music. I prefer sport – I (10) ____ football with my friends every Saturday morning.`,
          options: JSON.stringify([
            "(1)|A. go|B. goes|C. am going|D. going",
            "(2)|A. paint|B. painted|C. painting|D. paints",
            "(3)|A. make|B. makes|C. is making|D. are making",
            "(4)|A. make|B. makes|C. making|D. am making",
            "(5)|A. have|B. has|C. having|D. am having",
            "(6)|A. do|B. does|C. done|D. am doing",
            "(7)|A. do|B. did|C. doing|D. done",
            "(8)|A. play|B. plays|C. playing|D. is playing",
            "(9)|A. play|B. played|C. playing|D. plays",
            "(10)|A. play|B. plays|C. am playing|D. playing",
          ]),
          correctAnswer: "A,C,D,D,A,D,C,D,C,A",
          points: 10,
        },
        {
          type: "writing",
          order: 3,
          content: `You receive this email from your friend Jamie:

From: Jamie
To: You
Subject: What are you doing this week?

Hi!

I want to know about your school week! What are you doing in class right now? What subjects do you usually have? And tell me about any CCA or activities – what do you enjoy doing?

Write back soon!
Jamie

Write your email to Jamie (50-70 words). Answer ALL the questions.

成功标准 / Success Criteria:
✓ 回答所有3个问题 (Answer all 3 questions)
✓ 区分 now vs 习惯 (Contrast now vs habits: Right now I am studying... / I usually have... / Every Tuesday I...)
✓ 使用 like/enjoy + -ing (Use like/enjoy + -ing correctly)
✓ 邮件格式 (Email format: Hi Jamie, ... / Best, [your name])
✓ 50-70词 (50-70 words)`,
          points: 10,
        },
        {
          type: "listening",
          order: 4,
          content: `听读练习 / Listening Preparation (read carefully)

Mr Krishnan (PE teacher): Good morning, everyone! Listen carefully. Next Friday is our School Sports Day. We will meet at the stadium at eight in the morning. Don't be late! You must wear your PE kit – that's your house T-shirt, shorts, and sports shoes. Bring a water bottle and a cap because it will be sunny.

There are four events. First is the hundred-metre sprint at nine o'clock. Then we have long jump, relay race, and finally the fun obstacle course. Parents can watch from the stand.

After all the events, we will have a prize-giving ceremony at twelve thirty. The principal will give medals to the winners. Remember, the most important thing is to try your best and have fun!

If it rains heavily, Sports Day will move to next Monday. Check the school website on Friday morning. Any questions? No? Okay, start warming up!`,
          options: JSON.stringify([
            "When is Sports Day?|A. This Friday|B. Next Friday|C. Next Monday|D. Next Tuesday",
            "What time should students arrive?|A. 7:00|B. 7:30|C. 8:00|D. 9:00",
            "What must students bring?|A. Textbooks|B. Packed lunch|C. Water bottle and cap|D. Calculator",
            "What is the first event?|A. Long jump|B. Relay race|C. 100m sprint|D. Obstacle course",
            "What will the principal do?|A. Start the race|B. Give medals to winners|C. Sell drinks|D. Take photographs",
          ]),
          correctAnswer: "B,C,C,C,B",
          points: 5,
          audioUrl: "/audio/a2-w2-listening.mp3",
        },
        {
          type: "speaking",
          order: 5,
          content: `口语练习 / Speaking Practice

Task: Talk about what you are doing now vs what you do every day (1 minute)

Describe these points:
• What you are doing right now (at this moment)
• What you usually do every day or every week
• What school subjects or activities you like doing
• Why you enjoy them

Useful phrases for NOW (present continuous):
• Right now, I am...
• At the moment, I am...
• Today I am...

Useful phrases for HABITS (present simple):
• Every day, I...
• I usually...
• On Tuesdays, I have...
• I always...

Useful phrases for LIKES:
• I like doing... / I enjoy doing...
• I love playing... / I like learning...
• I don't like doing... but I like...

Grammar focus for AI:
AI will check if you correctly use present continuous (am/is/are + -ing) for NOW and present simple for habits. AI will also check like/enjoy + -ing form.

如何练习 / How to practise:
1. 准备内容，对比"正在做"和"习惯做" (Plan content contrasting "doing now" vs "usually do")
2. 点击下方"开始录音"按钮 (Tap "开始录音")
3. 说满1分钟 (Speak for 1 minute)
4. AI会重点评估进行时、一般现在时、like + -ing (AI evaluates continuous, simple, like + -ing)`,
          points: 5,
        },
      ],
    },
    {
      level: "A2",
      weekNumber: 3,
      title: "Week 3: Family and Friends",
      description: "Talking about relationships",
      isSample: false,
      dueDate: new Date("2026-09-03"),
      errorFocus: "past-simple",
      parentBrief: "本周纠错焦点：一般过去时和 used to。中文靠时间词「昨天、上周」来表示过去，动词不变形，孩子会说 yesterday I go。英语过去时动词必须变形：went, visited, brought, had。另外，以前的习惯用 used to（不是 use to）：We used to picnic every week。本周儿歌是 The Family Tree（mommy/daddy/grandma/grandpa/aunt/uncle/cousin 在野餐带什么），作业讲上周日家庭野餐，练 visited / brought / had 和 used to。",
      videoUrl: null,
      kaizenFocus: "Use past simple for finished actions (went, visited, brought, had); used to for old habits",
      officialClipId: "ecm9HEFcfdQ",
      officialClipCredit: "片源 Super Simple Songs 官方频道。The Family Tree。本站不拥有该片，仅嵌入官方 YouTube。孩子先听 mommy/daddy/grandma/grandpa/aunt/uncle/cousin 在 family tree 野餐带 apples/grapes/crackers/cheese，再练过去时 visited/brought/had 和 used to。",
      questions: [
        {
          type: "reading",
          order: 1,
          content: `Read about Wei's family picnic:

A Family Picnic at East Coast Park

Last Sunday, my whole family had a big picnic at East Coast Park. It was a wonderful day! My daddy picked everyone up in the morning. First we collected Grandma and Grandpa from their home in Bedok. Then we drove to my Aunt Lily's house to pick up my cousin Xiao Hui. My mummy sat in the front with a big basket of food.

We arrived at East Coast Park at ten o'clock. The weather was perfect – sunny but not too hot. My brother Jun and I helped carry the picnic mats and bags. My sister Mei brought her kite. She wanted to fly it after lunch.

Everyone brought something for the picnic! Grandma brought a big bag of red apples. Grandpa brought purple grapes in a plastic box. My mummy made sandwiches and packed them in foil. My daddy brought crackers and cheese in a cooler bag. Aunt Lily brought orange juice and water bottles. My cousin Xiao Hui brought cookies that she baked herself – they were delicious!

We spread the mats under a big tree near the beach. Mummy and Aunt Lily set out all the food. We had so much! I ate two sandwiches, some crackers with cheese, grapes, an apple, and three of Xiao Hui's cookies. My brother Jun ate even more than me!

After lunch, Grandpa told us stories about when he was young. He said, "We used to picnic at Changi Beach every month. Your grandma used to make curry puffs for every picnic!" Grandma smiled and said, "Yes, and you used to play football with your brothers on the sand!"

My sister Mei and I flew the kite with Daddy. Xiao Hui and Jun played with a frisbee. Grandma and Grandpa sat on the mat and watched us. Mummy and Aunt Lily walked along the beach.

At four o'clock, we packed everything up. Daddy drove everyone home. On the way back, Mummy said, "We should do this again next month!" I really hope we do. I love spending time with my whole family. We used to have picnics more often when I was younger, but everyone is busy now. Last Sunday reminded me how much fun it is to be together.`,
          options: JSON.stringify([
            "When did the family have the picnic?|A. Last Saturday|B. Last Sunday|C. Yesterday|D. Next week",
            "Where did they have the picnic?|A. Changi Beach|B. Bedok Park|C. East Coast Park|D. Sentosa",
            "What did Grandma bring?|A. Grapes|B. Apples|C. Cookies|D. Sandwiches",
            "What did Grandpa bring?|A. Apples|B. Grapes|C. Crackers|D. Juice",
            "Who made sandwiches?|A. Grandma|B. Aunt Lily|C. Mummy|D. Daddy",
            "What did Xiao Hui bring?|A. Apples|B. Juice|C. Cookies she baked|D. Kite",
            "What did Grandpa say they used to do?|A. Go to the zoo every week|B. Picnic at Changi Beach every month|C. Eat at restaurants|D. Play at the playground",
            "What time did they leave?|A. Two o'clock|B. Three o'clock|C. Four o'clock|D. Five o'clock",
          ]),
          correctAnswer: "B,C,B,B,C,C,B,C",
          points: 8,
        },
        {
          type: "grammar",
          order: 2,
          content: `Read about Wei's family picnic. Choose the correct word for each gap.

A Family Picnic at East Coast Park

Last Sunday, my family (1) ____ a picnic at East Coast Park. We (2) ____ to have picnics every month when I was younger, but now everyone is busy. This was special!

My mummy and daddy (3) ____ at my grandparents' house first. Grandma (4) ____ a big bag of apples. Grandpa (5) ____ grapes. My aunt and cousin (6) ____ too. My cousin Xiao Hui (7) ____ cookies she baked! We (8) ____ so much food and everyone had a great time. Grandpa said he used to play football on the beach when he was young!`,
          options: JSON.stringify([
            "(1)|A. have|B. has|C. had|D. having",
            "(2)|A. use to have|B. used to have|C. uses to have|D. using to have",
            "(3)|A. stop|B. stops|C. stopping|D. stopped",
            "(4)|A. bring|B. brings|C. brought|D. bringing",
            "(5)|A. bring|B. brings|C. brought|D. bringing",
            "(6)|A. come|B. comes|C. coming|D. came",
            "(7)|A. bring|B. brings|C. brought|D. bringing",
            "(8)|A. have|B. has|C. having|D. had",
          ]),
          correctAnswer: "C,B,D,C,C,D,C,D",
          points: 8,
        },
        {
          type: "writing",
          order: 3,
          content: `Write an email to a friend about a family picnic or family day (50-70 words).

Include these THREE points:
• Who you spent time with (use family words: mummy, daddy, grandma, grandpa, aunt, uncle, cousin, brother, sister)
• What everyone brought and what you did together
• Mention something your family used to do in the past

成功标准 / Success Criteria:
✓ 过去时态 (Past simple tense: we had, I visited, everyone brought, we played...)
✓ 家庭词汇 (Family vocabulary from the song: mummy, daddy, grandma, grandpa, aunt, uncle, cousin)
✓ used to 句型 (Used to for past habits: We used to picnic... / Grandpa used to...)
✓ 形容词表达感受 (Adjectives for feelings: happy, fun, delicious, special)
✓ 50-70词 (50-70 words)`,
          points: 10,
        },
        {
          type: "listening",
          order: 4,
          content: `听读练习 / Listening Preparation (read carefully)

Mum: Wei, do you want to go to MacRitchie Reservoir this Sunday?

Wei: Yes! Can we bring Xiao Hui?

Mum: Good idea. I'll ask your aunt. We can have a picnic by the water.

Wei: Great! I'll bring my football. Can Ah Ma and Ah Gong come too?

Mum: Ah Gong said he's a bit tired for a long walk, but maybe we can visit them for dinner after the reservoir.

Wei: Perfect! I'll tell Xiao Hui. She loves the playground there.

Mum: Okay. Let's meet at the reservoir car park at ten in the morning. Tell Xiao Hui to bring a hat because it's sunny this week.

Wei: Should I bring snacks?

Mum: I'll pack sandwiches and fruit. You can bring some biscuits if you want. Don't forget your water bottle!`,
          options: JSON.stringify([
            "Where are they planning to go?|A. The beach|B. A shopping mall|C. MacRitchie Reservoir|D. East Coast Park",
            "What day are they going?|A. Saturday|B. Sunday|C. Monday|D. Friday",
            "Who will they invite?|A. Wei's teacher|B. Wei's friend|C. Xiao Hui|D. Ah Gong's friends",
            "What does Xiao Hui like at the reservoir?|A. The water|B. The playground|C. The trees|D. The café",
            "What should Xiao Hui bring?|A. A football|B. Sandwiches|C. A hat|D. Biscuits",
          ]),
          correctAnswer: "C,B,C,B,C",
          points: 5,
          audioUrl: "/audio/a2-w3-listening.mp3",
        },
        {
          type: "speaking",
          order: 5,
          content: `口语练习 / Speaking Practice

Task: Talk about a past family picnic or family day (1 minute)

Think about a day you spent with family in the past. Talk about:
• When it was and who you were with (use family words: mummy, daddy, grandma, grandpa, aunt, uncle, cousin, brother, sister)
• Where you went and what everyone brought
• What you ate, played, or did together
• Something your family used to do in the past

Useful phrases (use past simple!):
• Last weekend / Last Sunday, I...
• We had a picnic at...
• My whole family was there: my mummy, daddy...
• Grandma brought... / Grandpa brought... / My aunt brought...
• We ate... / We played...
• Mummy made... / Daddy drove...
• When I was younger, we used to...
• My grandpa used to...
• It was special because...
• I felt happy / excited when...

如何练习 / How to practise:
1. 想一个过去的家庭野餐或家庭日 (Think of a past family picnic or family day)
2. 用儿歌的家庭词汇 (Use family words from the song: mummy, daddy, grandma, grandpa, aunt, uncle, cousin)
3. 用过去时说谁带了什么 (Use past tense: brought, had, visited, ate, played)
4. 点击"开始录音"按钮 (Tap the "开始录音" button)
5. 说完整1分钟，然后停止 (Speak for the full minute, then stop)
6. AI会盯住过去时动词和 used to (AI will focus on past tense verbs and used to)`,
          points: 5,
        },
      ],
    },

    // B1 WEEKS
    {
      level: "B1",
      weekNumber: 0,
      title: "试学周 / Sample Week",
      description: "Switching to English-medium school",
      isSample: true,
      errorFocus: "present-perfect",
      parentBrief: "本周纠错焦点：现在完成时 vs 一般过去时。中文的「了」不等于 have + V3，孩子会说 I have went yesterday（时态混用）或 I am here for 6 months（该用 have been）。英语现在完成表示「过去的事对现在还有影响」：I have been here for six months（还在这里）。明确过去的时间用过去时：I went yesterday。本周微课和作业会反复对比这两个时态。",
      videoUrl: null,
      kaizenFocus: "Use present perfect (have/has + V3) for situations that still matter now; past simple for finished time",
      officialClipId: "xF_Q2anYOfc",
      officialClipCredit: "片源 Cambridge English 官方频道，B1 Preliminary for Schools 口语样例。本站与剑桥无隶属，不提供官方试卷。孩子先看两人怎么回答自己、学校、经历，再练 Have you ever…? / present perfect。",
      questions: [
        {
          type: "reading",
          order: 1,
          content: `Read this article:

Finding My Voice in English

By Chen Wei, Secondary 2 Student

When I moved from a Chinese-medium primary school to an English-medium secondary school in Singapore last year, I felt completely lost. In primary school, all our subjects were in Mandarin except for English lessons. Now, suddenly, everything was in English – Maths, Science, even PE instructions! I understood the words, but the speed of speech in group work was overwhelming.

At first, I just nodded and smiled during discussions, hoping no one would ask me a direct question. My hands would sweat when the teacher said "pair up and share." My classmate Siti was patient. She would repeat things more slowly without making me feel bad. One day she said, "Just ask one question every lesson. Start small." That advice changed everything.

I started reading the school notice board every morning before class. It sounds simple, but it helped. I learned phrases like "CCA postponed" and "submit by Friday." I also discovered that writing things down in my own words – even just summaries of lessons – made me more confident when speaking.

Now, six months later, I'm not fluent, but I'm no longer silent. I volunteer answers in class sometimes, and last week I gave a short presentation on recycling. Did I make mistakes? Yes. Did anyone laugh? No. My teacher said my effort was excellent. The switch to English-medium school is still challenging, but I'm learning that progress matters more than perfection.`,
          options: JSON.stringify([
            "What was Chen Wei's biggest challenge?|A. Making friends|B. Understanding subject content|C. The speed of spoken English in lessons|D. Finding the classroom",
            "How did Chen Wei feel during group discussions at first?|A. Excited and confident|B. Nervous and silent|C. Bored|D. Angry",
            "What advice did Siti give?|A. Study harder|B. Ask one question every lesson|C. Speak very fast|D. Don't ask questions",
            "What did Chen Wei do to improve?|A. Stopped attending class|B. Read the notice board and wrote summaries|C. Only spoke Chinese|D. Changed schools",
            "How long has Chen Wei been at the English-medium school?|A. Three months|B. Six months|C. One year|D. Two years",
            "What did Chen Wei present about last week?|A. Chinese culture|B. His primary school|C. Recycling|D. Mathematics",
            "What does Chen Wei think is more important than perfection?|A. Speed|B. Grammar|C. Progress|D. Silence",
            "What does the article mainly discuss?|A. How Singapore schools work|B. Why English is difficult|C. Chen Wei's experience adapting to an English-medium school|D. Siti's teaching methods",
          ]),
          correctAnswer: "C,B,B,B,B,C,C,C",
          points: 8,
        },
        {
          type: "grammar",
          order: 2,
          content: `完形填空 / Cloze Test

Read this short text and choose the correct word for each gap. Focus on present perfect vs past simple.

My First Term at an English-Medium School

by Rajesh Kumar, Secondary 1

I (1) ____ at Anglo-Chinese School for three months now. It's quite different from my primary school! When I first (2) ____ here in June, I felt very nervous. Everything was in English, and the teachers spoke so fast.

In primary school, I (3) ____ Mandarin and Tamil most of the time. I (4) ____ English lessons, but we mostly did grammar exercises. Here, we use English all day for every subject.

At first, I didn't understand many instructions. But since September, my confidence (5) ____. Last week, I even (6) ____ a question in Science class, and the teacher said my answer was excellent! I (7) ____ several new friends who help me when I'm confused. One of them, Marcus, (8) ____ in an English-medium school all his life, so he gives me useful tips.

I know I still make mistakes, but I'm improving every week.`,
          options: JSON.stringify([
            "(1)|A. am|B. was|C. have been|D. had been",
            "(2)|A. arrive|B. arrived|C. have arrived|D. am arriving",
            "(3)|A. speak|B. spoke|C. have spoken|D. am speaking",
            "(4)|A. have|B. had|C. have had|D. am having",
            "(5)|A. improves|B. improved|C. has improved|D. is improving",
            "(6)|A. answer|B. answered|C. have answered|D. am answering",
            "(7)|A. make|B. made|C. have made|D. am making",
            "(8)|A. is|B. was|C. has been|D. had been",
          ]),
          correctAnswer: "C,B,B,B,C,B,C,C",
          points: 8,
        },
        {
          type: "writing",
          order: 3,
          content: `Write a forum post (100-120 words) giving advice to a new student.

The student asks: "I'm joining an English-medium school next term and I'm worried. What should I do?"

Give THREE pieces of helpful advice. Share your own experience if possible.

成功标准 / Success Criteria:
✓ 3条建议清晰 (Three clear pieces of advice)
✓ 使用现在完成时描述持续经验 (Present perfect for ongoing experience: I have been..., I have learned...)
✓ 使用一般过去时说明确过去事件 (Past simple for finished events: I went..., I started..., I felt...)
✓ 情态动词和连接词 (Modal verbs: should, could; Linking: firstly, also, because)
✓ 支持和鼓励的语气 (Supportive and encouraging tone)
✓ 100-120词 (100-120 words)`,
          points: 10,
        },
        {
          type: "listening",
          order: 4,
          content: `听读练习 / Listening Preparation (read carefully)

Ms Lim (Year Head): Good morning, everyone, and welcome to Ang Mo Kio Secondary School. I'm Ms Lim, your Year Head. I know some of you are feeling nervous, especially if this is your first time in an English-medium school. That's completely normal.

Let me explain how we can support you. Every morning, student leaders stand at the notice board near the canteen. If you have questions about the day's schedule, just ask them. They're here to help.

There are also lunchtime study sessions in the library on Tuesdays and Thursdays. A teacher will be there to answer questions in a smaller, quieter group. You don't need to sign up – just come along.

Remember, all your teachers know that some of you are still building confidence in English. Don't be afraid to ask someone to repeat something or explain it differently. Asking questions is a sign of a good learner, not a weak one.

Finally, CCA sign-ups are next week. Joining a CCA is a great way to practise English in a relaxed setting and make friends. Good luck, and remember – we're all here to help you succeed!`,
          options: JSON.stringify([
            "Who is Ms Lim?|A. An English teacher|B. The principal|C. The Year Head|D. A librarian",
            "Where can students ask about the daily schedule?|A. At the office|B. At the library|C. At the notice board near the canteen|D. In the classroom",
            "When are the lunchtime study sessions?|A. Monday and Wednesday|B. Tuesday and Thursday|C. Wednesday and Friday|D. Every day",
            "Do students need to sign up for study sessions?|A. Yes, sign up at the office|B. Yes, sign up with Ms Lim|C. No, just come along|D. Only if you are new",
            "What does Ms Lim say about asking questions?|A. It shows weakness|B. It's a sign of a good learner|C. Don't ask too many|D. Only ask your classmates",
          ]),
          correctAnswer: "C,C,B,C,B",
          points: 5,
          audioUrl: "/audio/b1-w0-listening.mp3",
        },
        {
          type: "speaking",
          order: 5,
          content: `口语练习 / Speaking Practice

Task: Talk about a challenge you overcame when learning English (2 minutes)

Discuss:
• What the challenge was (past simple: I felt..., I started...)
• How long you have been working on it (present perfect: I have been..., I have improved...)
• What you did to improve (past simple: I went..., I asked...)
• What advice you would give to others

Useful phrases (时态对比练习):
• When I first started... (过去时), I felt... (过去时)
• I have been studying English for... (完成时)
• Last year, I joined... (过去时)
• Since then, I have learned... (完成时)
• One thing that really helped was... (过去时)
• Now I have become... (完成时)
• My advice to other students would be...

如何练习 / How to practise:
1. 想一个真实经历 (Think of a real experience)
2. 准备2分钟内容 (Prepare 2 minutes of content)
3. 点击"开始录音"，有2分钟时间 (Tap "开始录音", you have 2 minutes)
4. 提交后AI会评估发音、流利度、任务完成度、时态准确性 (AI evaluates pronunciation, fluency, task, tense accuracy)
5. 根据反馈的"改善焦点"再录一次 (Re-record focusing on the improvement tip)`,
          points: 5,
        },
      ],
    },
    {
      level: "B1",
      weekNumber: 1,
      title: "Week 1: Travel and Culture",
      description: "Discussing travel experiences",
      isSample: false,
      dueDate: new Date("2026-08-20"),
      errorFocus: "experience-comparatives",
      parentBrief: "本周纠错焦点：现在完成时的经历用法（Have you ever...?）和比较级。孩子会说 Have you go to Gardens by the Bay?（过去式和完成时混淆）或 It was impressive than...（漏了 more）。英语问经历用 Have you ever been...? Have you visited...?；比较级要加 more 或 -er：more impressive, bigger。本周写作和口语会盯住这两个点。",
      videoUrl: null,
      kaizenFocus: "Use present perfect for experience (Have you ever...?); comparatives with more/-er",
      officialClipId: "Lwkn3WWGhUg",
      officialClipCredit: "片源 VisitSingapore 官方频道（新加坡旅游局）。宣传片 SingapoReimagine，Cloud Forest / Gardens by the Bay。本站不拥有该片，仅嵌入官方 YouTube。孩子先看片子，再练 Have you ever been…? 和 more impressive than…。",
      questions: [
        {
          type: "reading",
          order: 1,
          content: `Read this article:

A Different Kind of Visit

"Have you ever been to Gardens by the Bay?" asked Ms Rao, our English teacher, as we gathered at the MRT station. Most hands went up. My friend Jun Wei whispered, "I've visited at least five times with my family." I'd been there twice before – once for my cousin's wedding photos and once for Supertree light show. But this learning journey, Ms Rao promised, would be more meaningful than any tourist visit.

Our guide, Mr Tan, met us at the entrance. "How many of you have explored the Cloud Forest Dome?" he asked. Only three students raised their hands. "Well," he smiled, "today you'll see why it's more impressive than most people realise."

Inside the Cloud Forest, the temperature dropped. We climbed the circular walkway, surrounded by cool mist and towering plants. Mr Tan stopped at a viewing point. "This conservatory is bigger than two football fields," he explained. "Have you ever wondered how we keep it this cool in tropical Singapore?" He pointed to hidden vents and explained the energy-saving systems. I'd never thought about that before – I'd just enjoyed the cold air!

The plant diversity amazed me even more than the technology. Mr Tan showed us orchids from Ecuador, ferns from Tasmania, and carnivorous pitcher plants from Borneo. "Our Borneo plants are rarer than pandas," he joked. Ms Rao asked us to sketch one plant. I chose a red ginger flower from Thailand – smaller than the others but brighter and more delicate.

After lunch, we visited the Supertree Grove. "Have you ever climbed one?" asked Mr Tan. We laughed – of course not! He explained that the Supertrees are taller than fifteen-storey HDB flats and collect rainwater while generating solar power. Standing beneath them felt more humbling than standing beneath any building I'd seen.

At the end of the visit, Jun Wei turned to me. "This was better than all my family trips combined," he admitted. I agreed. We'd learned more in four hours than in weeks of Geography lessons. I now see Gardens by the Bay differently – not as a tourist spot, but as a living classroom.`,
          options: JSON.stringify([
            "Why was this visit different from the writer's previous visits?|A. It was the first time visiting|B. It was for a learning journey, not tourism|C. It was raining|D. They went alone",
            "How many times had Jun Wei visited Gardens by the Bay before?|A. Never|B. Once or twice|C. At least five times|D. Ten times",
            "What did Mr Tan say about the Cloud Forest size?|A. Smaller than a classroom|B. As big as a football field|C. Bigger than two football fields|D. Bigger than a school",
            "Which plant did the writer choose to sketch?|A. Orchids from Ecuador|B. Ferns from Tasmania|C. Pitcher plants from Borneo|D. A red ginger flower from Thailand",
            "What did Mr Tan compare the Borneo plants to?|A. Tigers|B. Pandas|C. Elephants|D. Whales",
            "How tall are the Supertrees compared to HDB flats?|A. Ten storeys|B. Fifteen storeys|C. Twenty storeys|D. Five storeys",
            "What did Jun Wei say at the end?|A. He was tired|B. He wanted to leave|C. This was better than his family trips|D. He didn't learn anything",
            "How does the writer now see Gardens by the Bay?|A. As a boring place|B. As an expensive tourist spot|C. As a living classroom|D. As just a park",
          ]),
          correctAnswer: "B,C,C,D,B,B,C,C",
          points: 8,
        },
        {
          type: "grammar",
          order: 2,
          content: `Read this email and choose the correct word for each gap.

From: Rachel
To: Emma
Subject: My Gardens by the Bay trip!

Hi Emma,

(1) ____ to Gardens by the Bay? I went last Friday with my school and it was amazing! I (2) ____ there once before with my parents, but this learning journey was (3) ____ than that family visit. Our guide showed us the Cloud Forest – the plants were (4) ____ than I expected, and the indoor waterfall was (5) ____ than any I've seen! 

The most interesting part was learning about the Supertrees. They're (6) ____ impressive than ordinary trees because they collect rainwater and make solar power. Our teacher said Singapore's gardens are (7) ____ creative than gardens in many other cities. After the trip, I felt (8) ____ interested in environmental science than before.

I'd love to go back again!

Rachel`,
          options: JSON.stringify([
            "(1)|A. Do you ever go|B. Did you ever go|C. Have you ever been|D. Are you ever going",
            "(2)|A. visit|B. visited|C. am visiting|D. have been",
            "(3)|A. educational|B. more educational|C. most educational|D. educationaler",
            "(4)|A. more beautiful|B. most beautiful|C. beautifuler|D. beautiful",
            "(5)|A. tall|B. taller|C. tallest|D. more tall",
            "(6)|A. much|B. many|C. more|D. most",
            "(7)|A. more|B. most|C. many|D. much",
            "(8)|A. much|B. more|C. most|D. many",
          ]),
          correctAnswer: "C,D,B,A,B,C,A,B",
          points: 8,
        },
        {
          type: "writing",
          order: 3,
          content: `Read this email from your friend:

From: Alex
To: You

Hi!

How are you? I'm thinking about visiting Singapore next month. Have you ever been to any interesting places there? I'd love to hear about a place you've visited that you think is worth seeing. What made it special? Was it better than you expected?

Let me know!

Alex

---

Write your reply to Alex (about 100 words).

In your email, you should:
• Answer Alex's question about an interesting place you've visited
• Explain what you did or saw there
• Compare it to another place or your expectations (use comparatives)

成功标准 / Success Criteria:
✓ 现在完成时 (Present perfect for experience: Have you ever been…? I've visited...)
✓ 比较级 (Comparatives: more impressive, bigger, better than…)
✓ 邮件格式 (Email format: greeting, answers to all points, closing)
✓ 约100词 (About 100 words)`,
          points: 10,
        },
        {
          type: "listening",
          order: 4,
          content: `听读练习 / Listening Preparation (read carefully)

[Announcement at Sentosa Heritage Trail entrance]

Guide: Good afternoon, everyone, and welcome to the Sentosa Heritage Trail. My name is Janice and I'll be your guide today. Before we start, let me give you some important information.

The trail takes about ninety minutes to complete, and we'll walk about two kilometres. Please stay with the group and listen carefully at each stop. We'll visit six historical sites, including the old fort and the underground tunnels.

It's quite sunny today, so make sure you drink water regularly. We'll take a short break at the halfway point near the cannon display. If you need the restroom, that's the best time to go.

Please don't touch any of the historical structures or artefacts. They are very old and we need to preserve them for future generations. You can take photos, but no flash photography inside the tunnels, please.

Our trail starts at Fort Siloso and ends at the beach. When we finish, you'll have free time to explore or have lunch at the food court nearby. Any questions before we begin? No? Great, let's go!`,
          options: JSON.stringify([
            "How long does the trail take?|A. 60 minutes|B. 75 minutes|C. 90 minutes|D. 120 minutes",
            "How many historical sites will they visit?|A. Four|B. Five|C. Six|D. Seven",
            "When can people use the restroom?|A. Anytime|B. At the start|C. At the halfway point near the cannon display|D. At the end only",
            "What are visitors told NOT to do?|A. Take photos|B. Drink water|C. Use flash photography in tunnels|D. Ask questions",
            "Where does the trail end?|A. Fort Siloso|B. The tunnels|C. The beach|D. The food court",
          ]),
          correctAnswer: "C,C,C,C,C",
          points: 5,
          audioUrl: "/audio/b1-w1-listening.mp3",
        },
        {
          type: "speaking",
          order: 5,
          content: `口语练习 / Speaking Practice

Task: Talk about a place you've visited (about 1 minute)

Answer these questions:
• Have you ever visited an interesting place in Singapore (or another country)?
• Where did you go and when?
• What did you see or do there?
• How did it compare to other places you've been? (Use comparatives: more interesting, bigger, better than...)

You MUST use:
✓ Present perfect for experience (Have you visited…? I've been to… I've never seen…)
✓ Comparatives (It was more impressive than… / bigger than… / better than I expected)

Useful phrases:
• I've visited... several times
• Have you ever been to...?
• It was more interesting than I expected
• The place is bigger / smaller / quieter / busier than...
• I found it more educational than other places
• It's better than many tourist spots because...

如何练习 / How to practise:
1. 选择一个你去过的地方 (Choose a place you've visited)
2. 想好比较的对象 (Think of something to compare it to)
3. 点击"开始录音"，说满1分钟 (Tap "开始录音", speak for 1 minute)
4. 提交给AI，获得语法和发音反馈 (Submit to AI for grammar and pronunciation feedback - AI will focus on present perfect and comparatives)
5. 查看反馈并再录一次 (Check feedback and re-record)`,
          points: 5,
        },
      ],
    },
    {
      level: "B1",
      weekNumber: 2,
      title: "Week 2: Technology Today",
      description: "Expressing opinions about technology",
      isSample: false,
      dueDate: new Date("2026-08-27"),
      errorFocus: "conditional-gerund",
      parentBrief: "本周纠错焦点：第一条件句（If + 现在式, will/must/can...）和动名词（enjoy/like + -ing，介词后 + -ing）。中文条件句不变形，孩子会说 If you see message, must...（缺主句主语或助动词）。还有典型化石化：enjoy to check（应该是 enjoy checking），good at spot（应该是 good at spotting）。本周影片讲辨别真假：AI 生成照片、deepfake 视频、假政府短信，ScamShield app。作业练 If it looks fake, you should... 和 enjoy checking / interested in learning 怎么防诈骗。",
      videoUrl: null,
      kaizenFocus: "If + present, will/must/should (1st conditional); enjoy/like/good at + -ing",
      officialClipId: "dVrHLZtvr5g",
      officialClipCredit: "片源 gov.sg 官方频道。Real or Fake: Disinformation。本站不拥有该片，仅嵌入官方 YouTube。孩子先看街访：怎么识别 AI 生成图片、deepfake 视频、假政府短信，下载 ScamShield app，再练 If you see... you should... 和 enjoy checking / good at spotting。",
      questions: [
        {
          type: "reading",
          order: 1,
          content: `Read this article:

How to Spot Real or Fake – A Singapore Teen's Guide

By Priya Menon, Secondary 3 Student

Last month, my aunt in Bukit Merah almost lost $5,000 to a scam SMS. The message claimed to be from the Singapore government, saying she had an unpaid fine and needed to click a link to pay immediately. The message looked real – it even had an official-looking logo! Luckily, my uncle stopped her just before she entered her bank details. That scary moment made me realise: if we don't learn to check what's real and what's fake online, anyone can become a victim.

At school, our Cyber Wellness teacher, Ms Tan, showed us a gov.sg video called "Real or Fake: Disinformation." It's a street interview where people try to spot AI-generated photos, deepfake videos, and fake government messages. Some people were good at spotting fakes, but many got tricked! The video taught me three important lessons.

First, check photos carefully. If you look closely at AI-generated images, you might notice strange details – for example, people might have six fingers, or shadows might point the wrong way. If something looks too perfect or slightly odd, you should reverse-image search it using Google to check if it's real.

Second, watch for deepfake videos. Deepfakes use AI to make fake videos of real people. If you see a video of a politician or celebrity saying something shocking, you must check reliable news sources before believing it. Deepfakes often have unnatural blinking, strange lip movements, or mismatched audio. If you notice these signs, you should report the video.

Third, be careful with messages claiming to be from the government. In Singapore, the government never sends links asking for personal information or payment through SMS. If you receive a suspicious message, you should check the official gov.sg website or call the agency directly. Never click links in random messages!

Ms Tan strongly recommended downloading ScamShield, a free app by the Singapore government. If you install ScamShield on your phone, it will automatically block scam calls and SMS. My whole family downloaded it, and we're already interested in seeing how much spam it blocks. My dad enjoys checking the app's daily report – last week it blocked four scam calls!

I used to think I was good at spotting fake news, but that video humbled me. Now I always pause before sharing something online. If it looks suspicious, I check first. I'm also better at explaining to my younger brother why he shouldn't click random links. Everyone in my family is now more careful, and we enjoy discussing what's real or fake when we see viral posts. It's become a useful family habit.`,
          options: JSON.stringify([
            "What nearly happened to Priya's aunt?|A. She lost her phone|B. She almost lost $5,000 to a scam SMS|C. She bought a fake product|D. She shared a fake video",
            "What did the scam message claim?|A. She won a prize|B. She had an unpaid fine|C. Her bank account was hacked|D. She needed to update her password",
            "What is a sign that a photo might be AI-generated?|A. It's in black and white|B. It's very small|C. Strange details like six fingers or wrong shadows|D. It has a watermark",
            "What should you do if you see a shocking deepfake video?|A. Share it immediately|B. Check reliable news sources first|C. Delete your account|D. Ignore it completely",
            "Does the Singapore government send SMS with payment links?|A. Yes, always|B. Yes, sometimes|C. No, never|D. Only for fines",
            "What does ScamShield do?|A. Creates fake messages|B. Blocks scam calls and SMS|C. Makes videos|D. Teaches English",
            "How many scam calls did ScamShield block for Priya's dad last week?|A. Two|B. Three|C. Four|D. Five",
            "What is Priya's new habit before sharing something online?|A. Share it quickly|B. Ask her teacher|C. Pause and check if it's suspicious first|D. Post it on all platforms",
          ]),
          correctAnswer: "B,B,C,B,C,B,C,C",
          points: 8,
        },
        {
          type: "grammar",
          order: 2,
          content: `Read Jun Wei's message and choose the correct word for each gap.

Checking Real or Fake – My Family's New Habit

Last month, my aunt almost got scammed by a fake SMS. Since then, my whole family has become interested (1) ____ learning how to spot fakes. We watched the gov.sg video "Real or Fake: Disinformation," and it really opened our eyes!

Now, if we (2) ____ a suspicious message or post, we always check before believing it. My dad enjoys (3) ____ photos carefully for strange details. If you (4) ____ closely at AI-generated images, you can sometimes see people with six fingers or weird shadows. It's like a game!

My mum is good (5) ____ spotting deepfake videos. She says if the lip movements (6) ____ unnatural, you should check reliable news sources first. We all downloaded ScamShield. If you (7) ____ this app on your phone, it will block scam calls automatically. My younger sister loves (8) ____ the daily reports showing how many scams it blocked!`,
          options: JSON.stringify([
            "(1)|A. at|B. in|C. on|D. for",
            "(2)|A. see|B. sees|C. seeing|D. saw",
            "(3)|A. check|B. to check|C. checked|D. checking",
            "(4)|A. look|B. looks|C. looking|D. looked",
            "(5)|A. in|B. on|C. at|D. for",
            "(6)|A. look|B. looks|C. looking|D. looked",
            "(7)|A. install|B. installs|C. installing|D. installed",
            "(8)|A. read|B. to read|C. reading|D. reads",
          ]),
          correctAnswer: "B,A,D,A,C,A,A,C",
          points: 8,
        },
        {
          type: "writing",
          order: 3,
          content: `Write an email to a friend in another school (100-120 words).

Your friend asks about staying safe online and checking if information is real or fake. Write about:

• Your experience learning to spot fake content (photos, videos, messages)
• What you enjoy about checking for fakes or what you're good at spotting
• Give advice using "If you..."
• Recommend one tool or habit

成功标准 / Success Criteria:
✓ 友好语气 (Friendly tone: Hi / Dear...)
✓ 动名词 (Gerunds: I enjoy checking... / I'm good at spotting... / interested in learning...)
✓ 第一条件句 (First conditional: If you see a strange message, you should... / If you install ScamShield, it will... / If it looks fake, you must...)
✓ 具体例子 (Specific examples: AI-generated photos, deepfakes, fake SMS, ScamShield app)
✓ 100-120词 (100-120 words)`,
          points: 10,
        },
        {
          type: "listening",
          order: 4,
          content: `听读练习 / Listening Preparation (read carefully)

Ethan: Hey Priya, have you tried that new app for Science revision? I think it's called QuizMaster or something.

Priya: Oh, you mean EduQuiz? Yeah, I downloaded it last week. It's actually really helpful! You can choose your subject and level, then it gives you practice questions.

Ethan: Does it cost money?

Priya: No, the basic version is free. There's a premium version with more questions, but I think the free one is enough for us.

Ethan: Cool. I'm terrible at remembering the Periodic Table. Does it have flashcards?

Priya: Yes! And you can make your own flashcards too. I made a set for Maths formulas. You can also share sets with classmates.

Ethan: That's useful. How much time do you spend on it?

Priya: Maybe twenty minutes a day? I usually do a quick quiz on the MRT on my way home. It's better than scrolling through social media.

Ethan: True! I'll download it tonight. Thanks for the recommendation!

Priya: No problem. Let me know if you want to join a study group on the app – we can compete on scores.`,
          options: JSON.stringify([
            "What is the name of the app?|A. QuizMaster|B. EduQuiz|C. ScienceApp|D. RevisionPro",
            "Does the app cost money?|A. Yes, it's expensive|B. Yes, but very cheap|C. The basic version is free|D. It's only for premium users",
            "What is Ethan bad at remembering?|A. Maths formulas|B. The Periodic Table|C. English vocabulary|D. History dates",
            "How long does Priya use the app each day?|A. 10 minutes|B. 20 minutes|C. 30 minutes|D. 1 hour",
            "When does Priya usually use the app?|A. In the morning|B. During lessons|C. On the MRT going home|D. Before bed",
          ]),
          correctAnswer: "B,C,B,B,C",
          points: 5,
          audioUrl: "/audio/b1-w2-listening.mp3",
        },
        {
          type: "speaking",
          order: 5,
          content: `口语练习 / Speaking Practice

Task: How to Spot Real or Fake Online (2 minutes)

Talk about how to check if information, photos, or messages are real or fake. Discuss:
• What kinds of fake content you've seen or heard about (AI photos, deepfakes, scam SMS)
• What you enjoy about learning to spot fakes, or what you're good at checking
• Give advice: "If you see... you should... / If it looks... you must..."
• What tools or habits help you stay safe online

Focus on using:
• Gerunds: "I enjoy checking...", "I'm good at spotting...", "I'm interested in learning...", "After seeing... / Before sharing..."
• First conditional: "If you see a strange message, you should...", "If you notice weird details, you must...", "If you install ScamShield, it will..."

Useful phrases:
• I enjoy checking photos carefully for...
• I'm good at spotting fake...
• I'm interested in learning how to...
• If you see something suspicious, you should...
• If it looks too perfect or has strange details, you must...
• Before sharing something online, I always...
• After watching the gov.sg video, I learned...
• One useful tool is... If you download it, it will...

如何练习 / How to practise:
1. 想想影片中教的三个检查方法 (Think of the 3 checking methods from the gov.sg video: AI photos, deepfakes, fake SMS)
2. 准备至少3个动名词例子 (Prepare at least 3 gerund examples: enjoy checking, good at spotting, interested in)
3. 准备至少2个第一条件句建议 (Prepare at least 2 first conditional advice: If you see..., you should...)
4. 点击"开始录音"，说2分钟 (Tap "开始录音", speak for 2 minutes)
5. AI会盯住动名词和条件句 (AI will check gerunds and conditionals)
6. 看反馈后可以多录几次改进 (Re-record multiple times to improve)`,
          points: 5,
        },
      ],
    },
    {
      level: "B1",
      weekNumber: 3,
      title: "Week 3: Environment",
      description: "Talking about environmental issues",
      isSample: false,
      dueDate: new Date("2026-09-03"),
      errorFocus: "passive-modals",
      parentBrief: "本周纠错焦点：被动语态和情态动词（should/ought to）。中文少用被动，孩子会说 We recycle the bottles（主动）而写不出 Plastic is recycled（被动）。建议表达用 should/ought to + 动词原形。环保话题需要被动语态描述系统（Plastic is recycled, bins are collected）和情态动词提建议（We should reduce, students ought to bring...）。作业盯住这两个化石化高危点。",
      videoUrl: null,
      kaizenFocus: "Use passive voice (is recycled, are collected); should/ought to + bare verb for advice",
      officialClipId: "jAeqGbJIfJE",
      officialClipCredit: "片源 Clean and Green Singapore 官方频道（NEA Recycle Right / Bloobin）。本站不拥有该片，仅嵌入官方 YouTube。孩子先看 check / clean / recycle，再练 Plastic is recycled 和 should/ought to。",
      questions: [
        {
          type: "reading",
          order: 1,
          content: `Read this article:

Green Steps at Bedok View Secondary

Last term, our Secondary 2 class launched a recycling drive at the HDB blocks near our school in Bedok. What started as a Geography project became a community effort that surprised everyone.

Mr Tan, our Geography teacher, gave us a challenge: find out how much recyclable waste is thrown away in one HDB block. My group chose Block 538, a twenty-storey block with about sixty households. We observed the rubbish collection every evening for one week, and we were shocked. On Monday alone, we counted twelve cardboard boxes, fifteen plastic bottles, and eight drink cans sitting beside the rubbish chute – none of them in the blue recycling bins downstairs.

We interviewed ten residents. Most said they wanted to recycle, but didn't know what could go in the blue bins. One uncle explained, "I'm not sure if this plastic container is recyclable or not, so I just throw it down the chute. Safer that way."

That feedback gave us an idea. We designed simple bilingual posters with pictures showing what belongs in recycling bins: clean paper, cardboard, plastic bottles, drink cans, and glass jars. We avoided complicated symbols. The Town Council approved our posters, and we stuck them in every lift lobby and near the ground-floor bins in Block 538 and two neighbouring blocks.

Three weeks later, we checked again. The rubbish chute area was much cleaner, and the blue bins were fuller. The Town Council confirmed that contamination – people throwing food waste or plastic bags into recycling bins – had dropped by about twenty percent in those three blocks.

Our teacher was so proud that he arranged for us to present our findings at the upcoming school Eco Fair. We're now helping other classes design similar projects for their neighbourhoods. I used to think recycling was boring, but seeing real change made it exciting. Small efforts, if done consistently, do make a difference.`,
          options: JSON.stringify([
            "What was the Geography challenge?|A. To clean the rubbish chute|B. To find out how much recyclable waste is thrown away|C. To design new bins|D. To interview the Town Council",
            "How many households are there in Block 538?|A. Twenty|B. Twelve|C. About sixty|D. Fifteen",
            "Why did residents not recycle properly?|A. They refused to recycle|B. There were no bins|C. They didn't know what could go in the blue bins|D. The bins were locked",
            "What did the students put on the posters?|A. Complicated symbols|B. Simple bilingual pictures showing recyclable items|C. Advertisements|D. Rules from the Town Council",
            "How many blocks received the posters?|A. One|B. Two|C. Three|D. Five",
            "What result did the Town Council confirm?|A. No change|B. Contamination dropped by about 20%|C. All bins were removed|D. The project failed",
            "Where will the students present their findings?|A. At the Town Council office|B. At a shopping mall|C. At the school Eco Fair|D. On television",
            "What did the writer learn?|A. Recycling is boring|B. Only adults can recycle|C. Small efforts done consistently do make a difference|D. The project was too difficult",
          ]),
          correctAnswer: "B,C,C,B,C,B,C,C",
          points: 8,
        },
        {
          type: "grammar",
          order: 2,
          content: `Read this passage and choose the correct word for each gap:

Recycling at East Coast Secondary

Every week, tonnes of recyclable materials (1) ____ at our school. Paper, plastic bottles, and drink cans (2) ____ by students in special bins near the canteen. Last month, the Eco Club decided that more (3) ____ to encourage recycling.

The club members designed new posters that (4) ____ in every classroom. They also started a "Green Class Challenge." Each class (5) ____ try to recycle as much as possible. At the end of the month, a prize (6) ____ to the winning class by the principal. Students (7) ____ bring reusable containers instead of using single-use plastic. If everyone participates, our school's waste (8) ____ by half.

Choose the correct answer for each gap:`,
          options: JSON.stringify([
            "(1)|A. collect|B. collected|C. are collected|D. collecting",
            "(2)|A. are sorted|B. sort|C. sorted|D. sorting",
            "(3)|A. should do|B. should be done|C. should doing|D. should does",
            "(4)|A. display|B. displayed|C. were displayed|D. are displaying",
            "(5)|A. ought|B. ought to|C. ought be|D. ought doing",
            "(6)|A. gives|B. gave|C. will be given|D. is giving",
            "(7)|A. should|B. should to|C. ought|D. must to",
            "(8)|A. reduce|B. reduced|C. is reduced|D. could be reduced",
          ]),
          correctAnswer: "C,A,B,C,B,C,A,D",
          points: 8,
        },
        {
          type: "writing",
          order: 3,
          content: `Write an email to your friend (100-120 words):

Your friend at another school wants to start a recycling project. Write an email giving advice about how to do it successfully.

In your email:
• Explain what should be done first (e.g. posters, talking to teachers, etc.)
• Describe how recyclable items ought to be sorted
• Give one or two tips to make the project work well

成功标准 / Success Criteria:
✓ 被动语态 (Passive voice: Bins should be placed / Posters could be displayed)
✓ 情态动词建议 (Modal verbs for advice: should, ought to, could, must)
✓ 连接词 (Linking: first, then, also, for example)
✓ Email 格式 (Email format: greeting, closing)
✓ 100-120词 (100-120 words)`,
          points: 10,
        },
        {
          type: "listening",
          order: 4,
          content: `听读练习 / Listening Preparation (read carefully)

[School announcement]

Announcement: Attention all students. This is a reminder from the Eco Club about our Green Week, which starts next Monday.

On Monday and Tuesday, we are collecting old newspapers, magazines, and cardboard boxes. Please bring them to the collection point outside the General Office. Make sure the paper is clean and dry – no food stains, please.

On Wednesday, we're holding a "Switch Off" challenge. All classrooms should turn off lights and air-conditioning during recess to save electricity. The class that saves the most energy will win a prize.

Thursday is our Reusable Bag Day. Instead of using plastic bags at the canteen, bring your own container or bag. The canteen stallholders have agreed to give a ten-cent discount if you bring your own container.

Finally, on Friday, the Eco Club will give a short presentation during assembly about reducing food waste. We'll share some surprising facts and tips.

Let's work together to make our school greener! If you have questions, see any Eco Club member. Thank you.`,
          options: JSON.stringify([
            "When does Green Week start?|A. This Friday|B. Next Monday|C. Next Wednesday|D. Tomorrow",
            "What should students bring on Monday and Tuesday?|A. Plastic bottles|B. Old clothes|C. Old newspapers and cardboard|D. Food containers",
            "What happens on Wednesday?|A. A presentation|B. A collection|C. A 'Switch Off' challenge|D. Reusable Bag Day",
            "What discount do students get on Thursday?|A. Five cents|B. Ten cents|C. Twenty cents|D. Fifty cents",
            "What is Friday's presentation about?|A. Saving electricity|B. Reducing food waste|C. Planting trees|D. Recycling plastic",
          ]),
          correctAnswer: "B,C,C,B,B",
          points: 5,
          audioUrl: "/audio/b1-w3-listening.mp3",
        },
        {
          type: "speaking",
          order: 5,
          content: `口语练习 / Speaking Practice

Task: An environmental habit you want your family to start (2 minutes)

Discuss:
• What the habit is (e.g. recycling more, using less plastic, saving water, etc.)
• Why it's important
• How your family could start doing it
• What challenges there might be and how to overcome them

Useful phrases:
• I think my family should start...
• This is important because...
• We could begin by...
• One challenge might be... but we could solve it by...
• If we did this, it would...
• It would make a difference because...
• Even small changes like... can help

如何练习 / How to practise:
1. 选择一个真实可行的习惯 (Choose a realistic habit)
2. 想好具体做法 (Think of specific steps)
3. 点击"开始录音"按钮 (Tap the "开始录音" button)
4. 说2分钟后提交给AI评估 (Speak for 2 minutes, then submit to AI)
5. 根据"改善焦点"和"跟读句子"再练习 (Practice again with focus tips and model sentences)`,
          points: 5,
        },
      ],
    },
  ];

  // =================================================================
  // UPSERT WEEKS AND QUESTIONS
  // =================================================================

  for (const weekDef of weekDefinitions) {
    console.log(`📝 Upserting ${weekDef.level} Week ${weekDef.weekNumber}...`);

    const week = await prisma.week.upsert({
      where: {
        level_weekNumber: {
          level: weekDef.level,
          weekNumber: weekDef.weekNumber,
        },
      },
      update: {
        title: weekDef.title,
        description: weekDef.description,
        isSample: weekDef.isSample,
        dueDate: weekDef.dueDate || null,
        errorFocus: weekDef.errorFocus || null,
        parentBrief: weekDef.parentBrief || null,
        videoUrl: weekDef.videoUrl || null,
        kaizenFocus: weekDef.kaizenFocus || null,
        officialClipId: (weekDef as any).officialClipId || null,
        officialClipCredit: (weekDef as any).officialClipCredit || null,
      },
      create: {
        level: weekDef.level,
        weekNumber: weekDef.weekNumber,
        title: weekDef.title,
        description: weekDef.description,
        isSample: weekDef.isSample,
        dueDate: weekDef.dueDate || null,
        errorFocus: weekDef.errorFocus || null,
        parentBrief: weekDef.parentBrief || null,
        videoUrl: weekDef.videoUrl || null,
        kaizenFocus: weekDef.kaizenFocus || null,
        officialClipId: (weekDef as any).officialClipId || null,
        officialClipCredit: (weekDef as any).officialClipCredit || null,
      },
    });

    // Upsert each question
    for (const q of weekDef.questions) {
      await prisma.question.upsert({
        where: {
          weekId_order: {
            weekId: week.id,
            order: q.order,
          },
        },
        update: {
          type: q.type,
          content: q.content,
          options: q.options || null,
          correctAnswer: q.correctAnswer || null,
          points: q.points,
          audioUrl: (q as any).audioUrl || null,
        },
        create: {
          weekId: week.id,
          type: q.type,
          order: q.order,
          content: q.content,
          options: q.options || null,
          correctAnswer: q.correctAnswer || null,
          points: q.points,
          audioUrl: (q as any).audioUrl || null,
        },
      });
    }

    // Delete any questions with higher order than what we just upserted
    const maxOrder = Math.max(...weekDef.questions.map((q) => q.order));
    await prisma.question.deleteMany({
      where: {
        weekId: week.id,
        order: {
          gt: maxOrder,
        },
      },
    });
  }

  console.log("✅ Weeks and questions upserted");

  // =================================================================
  // DELETE EXISTING SUBMISSIONS FOR DEMO ACCOUNTS
  // =================================================================
  // Demo, trial, and admin accounts should start fresh with zero submissions
  // so users can actually try the sample weeks

  await prisma.submission.deleteMany({
    where: {
      userId: {
        in: [demoUser.id, trialUser.id, adminUser.id],
      },
    },
  });

  console.log("✅ Demo, trial, and admin users have no submissions");
  console.log("🎉 Seed completed!");
}

main()
  .catch((e) => {
    console.error("❌ Seed failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
