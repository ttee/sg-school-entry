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
      errorFocus: "articles",
      parentBrief: "本周纠错焦点仍是冠词。微课故事是开学第一天自我介绍（I am a student）和失物招领（a water bottle → the water bottle with Mum's pink flower）。中文没有冠词，孩子会漏 a 或乱加 the。by bus 是零冠词。",
      videoUrl: null,
      kaizenFocus: "Use articles a/an/the correctly, and know when to use zero article (by bus, on Monday)",
      questions: [
        {
          type: "reading",
          order: 1,
          content: `Read this email:

From: Mei Lin <mei.lin@student.sg>
To: Cousin Hua <hua@email.com>
Subject: My first day!

Hi Hua!

Today was my first day at my new school in Singapore! This morning, Ms Tan asked everyone to introduce themselves. I stood up and said, "Good morning. I am a student from China. My name is Mei Lin." My voice was quiet but Ms Tan smiled at me.

At recess, I met a girl called Priya. She showed me the canteen, the library, and our classroom. We went to the canteen together, and I ordered some food. But after recess, I couldn't find my water bottle! I looked everywhere.

Priya said, "Let's go to Lost and Found." We walked to the office. A teacher there asked, "What did you lose?" I said, "I lost a water bottle." The teacher showed me a box full of water bottles. Then I saw it – the water bottle with my mum's pink flower sticker! "That's the one!" I said. I was so happy.

Tomorrow I will take the bus to school. Priya told me I can take bus number 80. I go to school by bus now, not by car like back home.

Everyone here is friendly. I think I will like this school!

Love,
Mei`,
          options: JSON.stringify([
            "What did Mei say when she introduced herself?|A. I am from Singapore|B. I am a student from China|C. I am a teacher|D. I am Priya's friend",
            "Who showed Mei the canteen and library?|A. Ms Tan|B. Her mother|C. Priya|D. A teacher at Lost and Found",
            "What did Mei lose?|A. Her homework|B. Her timetable|C. A water bottle|D. Her school bag",
            "Where did Mei find her water bottle?|A. In the classroom|B. In the canteen|C. At Lost and Found|D. In the library",
            "How did Mei know which water bottle was hers?|A. It had her name on it|B. It was blue|C. It had her mum's pink flower sticker|D. It was the biggest one",
            "How will Mei go to school tomorrow?|A. By car|B. By bus|C. By MRT|D. She will walk",
            "Which bus number did Priya tell Mei to take?|A. Bus 70|B. Bus 80|C. Bus 90|D. Bus 100",
            "How does Mei feel about her new school?|A. Angry and sad|B. Bored|C. Happy and positive|D. Very worried",
          ]),
          correctAnswer: "B,C,C,C,C,B,B,C",
          points: 8,
        },
        {
          type: "grammar",
          order: 2,
          content: "Choose the correct answer:",
          options: JSON.stringify([
            "Mei ____ at a new school now.|A. is|B. are|C. am|D. be",
            "Priya ____ Mei yesterday.|A. help|B. helps|C. helped|D. helping",
            "There ____ thirty students in my class.|A. is|B. are|C. has|D. have",
            "I go to school ____ bus.|A. by|B. on|C. in|D. at",
            "Ms Tan is ____ kind teacher.|A. a|B. an|C. the|D. some",
            "Drama Club practises ____ Thursday.|A. in|B. at|C. on|D. by",
            "Mei ____ chicken rice at the canteen.|A. eat|B. eats|C. eating|D. ate",
            "The library is ____ the canteen.|A. next|B. next to|C. next of|D. next at",
          ]),
          correctAnswer: "A,C,B,A,A,C,D,B",
          points: 8,
        },
        {
          type: "writing",
          order: 3,
          content: `Write an email to Mei (50-70 words).

Answer these THREE questions:
• What time do you start school?
• How do you travel to school?
• What is your favourite subject?

成功标准 / Success Criteria:
✓ 回答所有3个问题 (Answer all 3 content points)
✓ 使用现在时态 (Use present simple tense correctly: I go, I start, my favourite is...)
✓ 连接词 (Use linking words: and, but, because)
✓ 50-70词 (50-70 words)`,
          points: 10,
        },
        {
          type: "listening",
          order: 4,
          content: `听读练习 / Listening Preparation (read carefully)

Ms Tan: Good morning, class. Tomorrow is Tuesday, so let me remind you about your timetable. You start with English at eight o'clock, then Maths at nine fifteen. Break is at ten thirty. After break you have Science with Mr Lim in the lab. Don't forget your lab coat! Lunch is at twelve thirty in the canteen. In the afternoon you have PE outside, so bring your water bottle and sports shoes. School finishes at two forty-five. Any questions?

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

Task: Talk about "My first day at school" (1 minute)

Think about these points:
• How you felt on your first day
• Who you met
• What surprised you
• One thing you liked

Useful phrases:
• On my first day, I felt...
• I met a student called...
• I was surprised that...
• The thing I liked most was...
• At first I was nervous, but then...
• Everyone was very friendly.

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
      questions: [
        {
          type: "reading",
          order: 1,
          content: `Read about Lin's weekday:

My Weekday in Tampines

My name is Lin and I live in Tampines with my family. We live in a flat on the tenth floor of an HDB block. Every weekday I wake up at six thirty in the morning. I brush my teeth, wash my face, and put on my school uniform. My mum makes breakfast for me – usually toast with kaya jam and a glass of Milo.

At seven fifteen, my mum and I walk to Tampines MRT station. The train is always crowded! We take the green line and I get off at Paya Lebar. Then I walk five minutes to my school. Lessons start at eight o'clock sharp.

After school finishes at two thirty, I go home on the MRT again. I have a snack, then I do my homework at the dining table. My little brother sometimes plays noisily in the living room, but I can still concentrate! In the evening, my family has dinner together at around seven. After dinner, I read or watch a bit of TV before bed. I usually go to sleep at nine thirty because I'm always tired!

On Saturdays, I wake up late and help my mum at the market. Sundays are for resting!`,
          options: JSON.stringify([
            "Where does Lin live?|A. In a house in Tampines|B. In a flat on the tenth floor|C. Near Paya Lebar station|D. In the city centre",
            "What does Lin have for breakfast?|A. Noodles|B. Rice|C. Toast with kaya jam|D. Sandwich",
            "How does Lin travel to school?|A. By bus|B. Her mum drives|C. She walks all the way|D. By MRT and walking",
            "What time do lessons start?|A. 7:15|B. 7:30|C. 8:00|D. 8:30",
            "Where does Lin do her homework?|A. In her bedroom|B. At the dining table|C. In the living room|D. At the library",
            "What does Lin's little brother do?|A. Helps with homework|B. Plays noisily|C. Cooks dinner|D. Goes to sleep early",
            "What time does Lin usually go to sleep?|A. 8:30|B. 9:00|C. 9:30|D. 10:00",
            "What does Lin do on Saturdays?|A. Goes to school|B. Wakes up late and helps at the market|C. Visits friends|D. Does homework all day",
          ]),
          correctAnswer: "B,C,D,C,B,B,C,B",
          points: 8,
        },
        {
          type: "grammar",
          order: 2,
          content: "Choose the correct answer:",
          options: JSON.stringify([
            "Lin ____ up at six thirty every morning.|A. wake|B. wakes|C. waking|D. woke",
            "I ____ take the MRT to school.|A. always|B. yesterday|C. next week|D. soon",
            "My brother ____ plays in the living room.|A. yesterday|B. sometimes|C. tomorrow|D. last week",
            "Lessons start ____ eight o'clock.|A. in|B. on|C. at|D. by",
            "We have dinner ____ the evening.|A. at|B. in|C. on|D. by",
            "I live ____ Tampines.|A. at|B. in|C. on|D. by",
            "How ____ do you go to the library?|A. many|B. much|C. often|D. long",
            "She ____ her homework after school every day.|A. do|B. does|C. doing|D. did",
          ]),
          correctAnswer: "B,A,B,C,B,B,C,B",
          points: 8,
        },
        {
          type: "writing",
          order: 3,
          content: `Write an email to your friend about your daily routine (50-70 words).

Include these THREE points:
• What time you wake up and what you have for breakfast
• How you get to school
• What you do in the evening

成功标准 / Success Criteria:
✓ 包含所有3点内容 (All 3 content points)
✓ 现在时态和频率副词 (Present simple + adverbs of frequency: always, usually, sometimes)
✓ 时间介词 (Prepositions of time: at, in, on)
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
            "What time does Jun Wei wake up on weekdays?|A. 6:00|B. 6:15|C. 7:00|D. 7:15",
            "How does Sarah get to school?|A. By bus|B. By MRT|C. She walks|D. Her dad drives",
            "How long is Jun Wei's bus journey?|A. Ten minutes|B. Twenty minutes|C. Thirty minutes|D. Forty minutes",
            "Where does Jun Wei usually eat breakfast?|A. At home at the table|B. On the bus|C. At school|D. He doesn't eat breakfast",
            "What time does Sarah wake up on Saturdays?|A. 6:15|B. 7:00|C. 8:30|D. 9:00",
          ]),
          correctAnswer: "B,C,C,B,C",
          points: 5,
          audioUrl: "/audio/a2-w1-listening.mp3",
        },
        {
          type: "speaking",
          order: 5,
          content: `口语练习 / Speaking Practice

Task: Describe your typical school morning (1 minute)

Talk about these points:
• What time your alarm goes off
• Your morning routine (washing, breakfast, getting dressed)
• How you travel to school
• How you feel in the morning (tired? excited?)

Useful phrases:
• My alarm goes off at...
• The first thing I do is...
• Then I...
• After that, I...
• It takes me ... minutes to...
• I usually feel... in the morning
• On weekdays, I always...

如何练习 / How to practise:
1. 计划你要说的内容 (Plan what you'll say)
2. 点击下方"开始录音"按钮 (Tap the "开始录音" button below)
3. 清晰地说出你的内容 (Speak clearly through your points)
4. 听回放后提交给AI评估，获得改进建议 (Submit for AI feedback and improvement tips)`,
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
      questions: [
        {
          type: "reading",
          order: 1,
          content: `Read Wei's blog:

My School Day – Tuesday

Hi everyone! Today I want to tell you about a typical Tuesday at my secondary school in Queenstown.

I really enjoy Tuesdays because I have Art in the morning. Art is my favourite subject. Our Art teacher, Mr Hassan, is very creative and he always gives us interesting projects. Last month we painted Singapore street scenes. This month we're making clay sculptures of animals. I'm making a merlion!

After Art, we have English and then Maths. English is okay but Maths is quite difficult for me. My friend Raj sits next to me and he sometimes helps me with problem sums. We have a short recess at ten forty-five. I usually buy a curry puff and a packet of Milo from the canteen. The canteen is always noisy and crowded during recess!

In the afternoon, we have Science and PE. I like Science experiments, especially when we use the Bunsen burner. PE is tiring but fun. Today we played basketball in the school hall because it was raining outside.

After school, I have CCA. I'm in the school choir. We practise in the music room every Tuesday and Thursday. We're preparing songs for National Day next month. I can't wait to perform!

School finishes at four o'clock on CCA days. I take the bus home and I'm always hungry when I arrive!`,
          options: JSON.stringify([
            "Why does Wei enjoy Tuesdays?|A. There is no homework|B. He finishes early|C. He has Art, his favourite subject|D. His friend is at school",
            "What are the students making in Art this month?|A. Paintings of street scenes|B. Clay animal sculptures|C. Drawings of the merlion|D. Paper crafts",
            "Who helps Wei with Maths?|A. Mr Hassan|B. His teacher|C. Raj|D. His parents",
            "What does Wei buy at recess?|A. Noodles and tea|B. Sandwich and juice|C. Curry puff and Milo|D. Chicken rice",
            "Why did they play basketball in the hall?|A. The court was closed|B. It was raining|C. The teacher said so|D. They always play indoors",
            "What CCA is Wei in?|A. Basketball team|B. Art club|C. Choir|D. Science club",
            "When does the choir practise?|A. Monday and Wednesday|B. Tuesday and Thursday|C. Wednesday and Friday|D. Every day",
            "What is the choir preparing for?|A. A concert|B. National Day|C. A competition|D. The school assembly",
          ]),
          correctAnswer: "C,B,C,C,B,C,B,B",
          points: 8,
        },
        {
          type: "grammar",
          order: 2,
          content: "Choose the correct answer:",
          options: JSON.stringify([
            "Wei ____ Art every Tuesday.|A. have|B. has|C. having|D. had",
            "Right now, we ____ a sculpture.|A. make|B. makes|C. are making|D. made",
            "The canteen is always ____ during recess.|A. noisy|B. noise|C. noisily|D. noises",
            "I like ____ Science experiments.|A. do|B. to do|C. doing|D. did",
            "Maths is ____ than English for me.|A. difficult|B. difficulter|C. more difficult|D. most difficult",
            "Mr Hassan ____ us interesting projects.|A. give|B. gives|C. giving|D. gave",
            "We practise ____ the music room.|A. at|B. on|C. in|D. by",
            "I can't wait ____ perform!|A. for|B. to|C. at|D. in",
          ]),
          correctAnswer: "B,C,A,C,C,B,C,B",
          points: 8,
        },
        {
          type: "writing",
          order: 3,
          content: `Write a note to your teacher about joining a CCA (50-70 words).

Include these THREE points:
• Which CCA you want to join
• Why you are interested in it
• When you are free to attend

成功标准 / Success Criteria:
✓ 正式礼貌的语气 (Polite and appropriate tone: Dear..., I would like to...)
✓ 包含全部3点 (All 3 content points)
✓ 现在时态和"like + -ing" (Present tenses + like/enjoy + -ing)
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

Task: Talk about your favourite subject (1 minute)

Discuss these points:
• What the subject is
• Why you like it
• What you do in lessons
• Who teaches it

Useful phrases:
• My favourite subject is... because...
• I enjoy... lessons
• In class, we usually...
• The teacher is... and she/he...
• I'm good at...
• The thing I like most is...
• We learn about...

如何练习 / How to practise:
1. 选择一个科目 (Choose one subject)
2. 想好理由 (Think of reasons why you like it)
3. 点击"开始录音"，说满1分钟 (Tap "开始录音" and speak for 1 minute)
4. 提交后AI会评估你的发音、流利度和内容 (AI evaluates pronunciation, fluency, content)
5. 可以根据反馈再录一次 (Re-record based on feedback)`,
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
      parentBrief: "本周纠错焦点：一般过去时和 used to。中文靠时间词「昨天、上周」来表示过去，动词不变形，孩子会说 yesterday I go。英语过去时动词必须变形：went, visited, had。另外，以前的习惯用 used to（不是 use to）：I used to live in Beijing。本周作业会反复纠正这两个化石化高危点。",
      videoUrl: null,
      kaizenFocus: "Use past simple for finished actions (went, visited); used to for old habits",
      questions: [
        {
          type: "reading",
          order: 1,
          content: `Read about Wei's weekend:

Visiting Ah Ma and Ah Gong

Last Sunday, my family visited my grandparents. We call them Ah Ma and Ah Gong. They live in an old HDB flat in Toa Payoh. It's smaller than our flat, but I love going there because Ah Ma always cooks delicious food!

We arrived at eleven o'clock in the morning. Ah Gong was sitting in the living room reading the Chinese newspaper. He's seventy-five years old now, but he's still very healthy. He used to work as a taxi driver, and he loves telling stories about old Singapore. My dad is his youngest son.

Ah Ma was in the kitchen preparing lunch. She made my favourite dishes: steamed fish, stir-fried vegetables, and her special soup. She's an amazing cook! My little cousin, Xiao Hui, was there too. She's only six years old and she's very playful. She wanted me to play with her toys and watch cartoons together.

After lunch, we all sat in the living room and talked. Ah Gong showed me some old photos from when he was young. In one photo, he was standing in front of a kampong house! Singapore looked so different then. Ah Ma gave me a red packet with some money inside and said, "Study hard!"

At around four o'clock, we said goodbye. Ah Ma packed some leftover food for us to take home. I felt happy but also a bit sad to leave. I wish we could visit them more often. Family is very important to me.`,
          options: JSON.stringify([
            "Who are Ah Ma and Ah Gong?|A. Wei's parents|B. Wei's aunt and uncle|C. Wei's grandparents|D. Wei's teachers",
            "Where do the grandparents live?|A. In a kampong|B. In Toa Payoh|C. In Wei's house|D. In Queenstown",
            "What did Ah Gong use to do?|A. He was a teacher|B. He was a cook|C. He was a taxi driver|D. He worked in an office",
            "How old is Xiao Hui?|A. 5|B. 6|C. 7|D. 10",
            "What did they do after lunch?|A. Played outside|B. Watched cartoons|C. Sat and talked, looked at photos|D. Went shopping",
            "What did Ah Ma give Wei?|A. A toy|B. A book|C. A red packet with money|D. Some soup",
            "What was Ah Gong doing when they arrived?|A. Cooking|B. Reading the newspaper|C. Sleeping|D. Watching TV",
            "How does Wei feel about family?|A. It's not important|B. It's very important|C. It's boring|D. He doesn't say",
          ]),
          correctAnswer: "C,B,C,B,C,C,B,B",
          points: 8,
        },
        {
          type: "grammar",
          order: 2,
          content: "Choose the correct answer:",
          options: JSON.stringify([
            "Ah Ma is ____ cook.|A. a amazing|B. an amazing|C. amazing|D. the amazing",
            "My grandparents' flat is ____ than ours.|A. small|B. smaller|C. smallest|D. more small",
            "We ____ them last Sunday.|A. visit|B. visits|C. visited|D. visiting",
            "Xiao Hui is my ____.|A. cousin|B. cousins|C. cousin's|D. cousins'",
            "Ah Gong ____ as a taxi driver.|A. use to work|B. used to work|C. used work|D. is used to work",
            "This is the book ____ Ah Gong gave me.|A. who|B. what|C. which|D. where",
            "Ah Ma was ____ lunch when we arrived.|A. prepare|B. prepares|C. prepared|D. preparing",
            "I wish we ____ visit more often.|A. can|B. could|C. will|D. shall",
          ]),
          correctAnswer: "B,B,C,A,B,C,D,B",
          points: 8,
        },
        {
          type: "writing",
          order: 3,
          content: `Write an email to a friend about a family weekend (50-70 words).

Include these THREE points:
• Who you spent time with
• What you did together
• Why it was special or enjoyable

成功标准 / Success Criteria:
✓ 过去时态 (Past simple tense: we visited, I saw, we had...)
✓ 家庭词汇 (Family vocabulary: grandparents, cousin, aunt, uncle, etc.)
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

Task: Describe a person in your family (1 minute)

Talk about:
• Who the person is (relationship to you)
• What they look like or what they like doing
• Why they are special to you
• A memory you have with them

Useful phrases:
• I want to talk about my...
• He/She is... years old
• He/She has... (appearance or personality)
• He/She loves/enjoys...
• He/She is special to me because...
• I remember when we...
• One thing I love about him/her is...

如何练习 / How to practise:
1. 选择一个家人 (Choose a family member)
2. 想好细节 (Think of details about them)
3. 点击"开始录音"按钮 (Tap the "开始录音" button)
4. 说完后听回放，满意则提交给AI (Playback, then submit to AI)
5. AI会给你改进建议和跟读句子 (AI gives improvement tips and model sentences)`,
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
          content: "Choose the correct answer:",
          options: JSON.stringify([
            "When I moved to secondary school, I ____ completely lost.|A. feel|B. felt|C. have felt|D. am feeling",
            "I ____ at this school for six months now.|A. am|B. was|C. have been|D. had been",
            "Everything ____ in English at my school.|A. teach|B. teaches|C. is taught|D. teaching",
            "Siti helped me ____ I was nervous.|A. because|B. so|C. although|D. but",
            "I'm not fluent, ____ I'm no longer silent.|A. because|B. so|C. but|D. and",
            "I started ____ the notice board every morning.|A. read|B. to read|C. reading|D. reads",
            "If I ____ a question, my teacher always helps.|A. ask|B. asked|C. will ask|D. asking",
            "The teacher said my effort ____ excellent.|A. is|B. was|C. has been|D. will be",
          ]),
          correctAnswer: "B,C,C,A,C,C,A,B",
          points: 8,
        },
        {
          type: "writing",
          order: 3,
          content: `Write a forum post (100-120 words) giving advice to a new student.

The student asks: "I'm joining an English-medium school next term and I'm worried. What should I do?"

Give THREE pieces of helpful advice based on your own experience or ideas.

成功标准 / Success Criteria:
✓ 3条建议清晰 (Three clear pieces of advice)
✓ 使用情态动词 (Modal verbs: should, could, ought to, must)
✓ 连接词 (Linking: firstly, also, because, so that, however)
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
• What the challenge was
• How you felt about it
• What you did to improve
• What advice you would give to others

Useful phrases:
• When I first started..., I found it difficult to...
• The biggest challenge for me was...
• I felt... because...
• To improve, I...
• One thing that really helped was...
• Now I realise that...
• My advice to other students would be...

如何练习 / How to practise:
1. 想一个真实经历 (Think of a real experience)
2. 准备2分钟内容 (Prepare 2 minutes of content)
3. 点击"开始录音"，有2分钟时间 (Tap "开始录音", you have 2 minutes)
4. 提交后AI会评估发音、流利度、任务完成度 (AI evaluates pronunciation, fluency, task)
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
      questions: [
        {
          type: "reading",
          order: 1,
          content: `Read this article:

Learning Beyond the Classroom

Last Wednesday, our Secondary 2 cohort went on a learning journey to Gardens by the Bay. I had visited the Gardens with my family before, but this time was different – we were there to learn about sustainability and biodiversity.

Our guide, Mr Tan, led us through the Cloud Forest first. As we climbed the circular walkway surrounded by mist and rare plants, he explained how the conservatory uses recycled water and energy-efficient cooling systems. I was amazed to learn that the famous Supertrees aren't just sculptures – they collect rainwater, generate solar power, and act as vertical gardens! I had always thought they were just for decoration.

What surprised me most was seeing plants from countries I'd only read about in Geography lessons. There were orchids from South America, ferns from New Zealand, and pitcher plants from our own Borneo rainforests. Our teacher, Ms Rao, asked us to sketch one plant and research its natural habitat later. I chose a bright red Heliconia from Costa Rica. It looked like a work of art!

After the Cloud Forest, we had a workshop on urban food production. A volunteer taught us how Gardens by the Bay grows vegetables on rooftops and in small vertical farms. She said that in a land-scarce country like Singapore, we need to think creatively about where our food comes from. Some of my classmates had never thought about how far their vegetables travel before reaching the supermarket.

By the end of the day, I realised that Gardens by the Bay isn't just a tourist spot. It's a living example of how technology and nature can work together. I left feeling inspired to learn more about environmental science. Maybe one day I'll work on projects like this!`,
          options: JSON.stringify([
            "Why was this visit to Gardens by the Bay different for the writer?|A. It was their first visit|B. They went with family|C. They went to learn about sustainability|D. It was raining",
            "What do the Supertrees do?|A. They are only decorative sculptures|B. They collect rainwater and generate solar power|C. They are just for tourists to take photos|D. They store food",
            "Which plant did the writer choose to sketch?|A. An orchid from South America|B. A fern from New Zealand|C. A pitcher plant from Borneo|D. A Heliconia from Costa Rica",
            "What was the workshop about?|A. Sketching plants|B. Urban food production|C. Recycling plastic|D. Building Supertrees",
            "Why does Singapore need creative food solutions?|A. Because food is expensive|B. Because it is land-scarce|C. Because people don't like vegetables|D. Because there are no farms",
            "How did the writer feel at the end of the day?|A. Bored|B. Tired and uninterested|C. Inspired to learn more|D. Confused",
            "What subject does the writer mention?|A. History|B. Mathematics|C. Geography|D. Literature",
            "What does the writer say Gardens by the Bay is an example of?|A. Old traditions|B. Technology and nature working together|C. Expensive tourism|D. How to build tall buildings",
          ]),
          correctAnswer: "C,B,D,B,B,C,C,B",
          points: 8,
        },
        {
          type: "grammar",
          order: 2,
          content: "Choose the correct answer:",
          options: JSON.stringify([
            "I ____ Gardens by the Bay with my family before.|A. visit|B. visited|C. have visited|D. am visiting",
            "The guide ____ us about the cooling systems.|A. explained|B. explains|C. has explained|D. explaining",
            "There ____ plants from many countries.|A. was|B. were|C. is|D. has been",
            "Singapore ____ be creative about food production.|A. use to|B. used to|C. is used to|D. uses to",
            "If I ____ more time, I would explore the whole garden.|A. have|B. had|C. will have|D. having",
            "The Supertrees are ____ than I expected.|A. impressive|B. more impressive|C. most impressive|D. impressiver",
            "We were asked ____ one plant.|A. sketch|B. sketching|C. to sketch|D. sketched",
            "I left ____ inspired.|A. feel|B. to feel|C. felt|D. feeling",
          ]),
          correctAnswer: "C,A,B,B,B,B,C,D",
          points: 8,
        },
        {
          type: "writing",
          order: 3,
          content: `Write an article for your school magazine (100-120 words):

"A trip that taught me something"

Describe a school trip, family visit, or outing where you learned something new or saw things differently.

Include:
• Where you went and when
• What you did or saw
• What you learned or how it changed your view

成功标准 / Success Criteria:
✓ 过去时态 (Past simple and past continuous: we went, I was walking...)
✓ 描述性形容词 (Descriptive language: amazing, surprised, fascinated)
✓ 连接词 (Linking words: first, then, after that, however, what surprised me most was...)
✓ 清晰结构 (Clear structure: introduction, main points, conclusion)
✓ 100-120词 (100-120 words)`,
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

Task: Describe a place in your city a visitor should see (2 minutes)

Talk about:
• What the place is and where it is located
• What visitors can see or do there
• Why you recommend it
• Any personal experience or memory you have of that place

Useful phrases:
• I'd recommend visiting...
• It's located in/near...
• One of the most interesting things about it is...
• Visitors can...
• What makes it special is...
• I remember when I...
• You should definitely see it because...
• It's well worth a visit

如何练习 / How to practise:
1. 选择一个你了解的地方 (Choose a place you know well)
2. 想好推荐理由 (Think of reasons to recommend it)
3. 点击"开始录音"，说满2分钟 (Tap "开始录音", speak for 2 minutes)
4. 提交给AI，获得发音和内容反馈 (Submit to AI for pronunciation and content feedback)
5. 查看"跟读句子"并再录一次 (Check model sentences and re-record)`,
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
      parentBrief: "本周纠错焦点：第二条件句（If + 过去式, would...）和动名词/不定式（suggest + -ing, want + to）。中文条件句不变形，孩子会说 If the school change...（该用 changed）。还有典型化石化：suggest to use（应该是 suggest using），want using（应该是 want to use）。本周作业会反复训练这两个难点。",
      videoUrl: null,
      kaizenFocus: "If + past, would (2nd conditional); suggest + -ing, want + to",
      questions: [
        {
          type: "reading",
          order: 1,
          content: `Read this article:

Phones at School: Finding the Right Balance

Should students be allowed to bring phones to school? This question has sparked debates in Singapore schools for years, and opinions remain divided.

Last term, our school introduced a new rule: students can bring phones, but they must be switched off and kept in lockers during lessons. Before this rule, some students checked messages under their desks during class or took photos in the corridors without permission. Teachers found it distracting, and learning suffered. The new policy aims to balance safety with focus.

I interviewed ten students to hear their views. Supporters of the rule, like Rui Ming from Sec 3, argue that phones are necessary. "My parents need to contact me if plans change," he said. "Last month my mum's meeting finished early, so she texted me to meet her at a different gate. Without my phone, I would have waited at the wrong place for an hour." Rui Ming also pointed out that students use apps like Google Classroom and education websites for homework, so phones are tools, not just distractions.

However, others feel the rule is too strict. Amira from Sec 2 said, "I understand we shouldn't use phones during lessons, but why can't we check them during recess? If my phone is locked away all day, I can't reply to my tuition teacher or check my CCA group chat." She believes students should be trusted to make responsible decisions during break times.

Some teachers support a middle-ground approach. Mr Yeo, our ICT coordinator, suggested allowing supervised phone use in the library for research. "Technology isn't going away," he said. "We should teach students how to use it responsibly instead of banning it completely."

So, what's the right answer? Perhaps there isn't one single solution. What's clear is that schools, parents, and students need to keep talking and find a balance that works for everyone.`,
          options: JSON.stringify([
            "What is the new school rule?|A. Phones are completely banned|B. Phones must be off and in lockers during lessons|C. Students can use phones anytime|D. Only teachers can have phones",
            "Why does Rui Ming think phones are necessary?|A. For playing games|B. For taking photos|C. For parent contact and homework apps|D. For social media",
            "What happened to Rui Ming last month?|A. He lost his phone|B. His mum changed the meeting place|C. He was late to school|D. He failed an exam",
            "What is Amira's concern?|A. She can't use her phone during recess|B. She can't bring her phone at all|C. Her phone was stolen|D. She doesn't have a locker",
            "What does Mr Yeo suggest?|A. Banning phones completely|B. Allowing phones in lessons|C. Supervised phone use in the library for research|D. Giving students new phones",
            "What does the article conclude?|A. Phones should be banned|B. Phones should be allowed everywhere|C. There's no single solution; balance is needed|D. Only seniors should have phones",
            "What problem existed before the new rule?|A. Students couldn't do homework|B. Students checked messages during class|C. Teachers used phones too much|D. Parents complained about costs",
            "What does Mr Yeo say about technology?|A. It's going away soon|B. It's too difficult for students|C. It isn't going away; teach responsible use|D. It's only for adults",
          ]),
          correctAnswer: "B,C,B,A,C,C,B,C",
          points: 8,
        },
        {
          type: "grammar",
          order: 2,
          content: "Choose the correct answer:",
          options: JSON.stringify([
            "If the school ____ the rule, students would be happier.|A. change|B. changed|C. will change|D. changes",
            "Phones must ____ in lockers during lessons.|A. keep|B. kept|C. be kept|D. keeping",
            "I suggest ____ phones for research only.|A. use|B. to use|C. using|D. used",
            "Students want ____ their phones during recess.|A. check|B. to check|C. checking|D. checked",
            "If I ____ my phone, I would call my parents.|A. have|B. had|C. will have|D. having",
            "We stopped ____ our phones in class.|A. use|B. to use|C. using|D. used",
            "The rule ____ last term.|A. introduced|B. was introduced|C. is introduced|D. introduces",
            "I think students ____ be trusted with phones.|A. should|B. must|C. have to|D. need",
          ]),
          correctAnswer: "B,C,C,B,B,C,B,A",
          points: 8,
        },
        {
          type: "writing",
          order: 3,
          content: `Write an email to your principal (100-120 words).

Your school is considering a phone locker rule (phones locked away all day). Write to EITHER support or oppose this rule.

Include:
• Your clear opinion
• TWO reasons with explanations
• A polite suggestion or conclusion

成功标准 / Success Criteria:
✓ 清晰观点 (Clear position: I believe... / In my opinion...)
✓ 条件句和情态动词 (Conditionals: if students could... / Modals: should, could, would)
✓ 连接词 (Linking: firstly, however, therefore, although)
✓ 正式礼貌语气 (Formal polite tone: Dear Principal, I am writing to...)
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

Task: How you use technology to learn English (2 minutes)

Discuss:
• What apps, websites, or tools you use
• How they help you improve your English
• Which skill they help most (reading, listening, vocabulary, etc.)
• One tip you'd give to other learners

Useful phrases:
• I often use... to improve my...
• One app/website that really helps me is...
• It's useful because...
• I find it helpful for...
• What I like about it is...
• It has helped me to...
• I would recommend... because...
• One tip I'd give is...

如何练习 / How to practise:
1. 想想你真正用过的工具 (Think of tools you actually use)
2. 准备具体例子 (Prepare specific examples)
3. 点击"开始录音"，说2分钟 (Tap "开始录音", speak for 2 minutes)
4. AI会评估你的词汇、语法和流利度 (AI evaluates vocabulary, grammar, fluency)
5. 看反馈后可以多录几次改进 (Re-record multiple times to improve)`,
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
      parentBrief: "本周纠错焦点：被动语态和情态动词（should/ought to）。中文少用被动，孩子会说 We recycle the bottles（主动）而写不出 Plastic is recycled（被动）。还有建议表达：should/ought to + 动词原形。本周环保话题特别需要被动（Plastic is recycled, bins are collected）和建议（We should reduce, students ought to bring...）。作业会盯住这两个表达。",
      videoUrl: null,
      kaizenFocus: "Use passive voice (is recycled, are collected); should/ought to + verb for advice",
      questions: [
        {
          type: "reading",
          order: 1,
          content: `Read this article:

Our Class Recycling Project

Last month, our Secondary 3 Geography class started a recycling awareness project in our HDB neighbourhood in Bedok. What began as a simple homework assignment became something much more meaningful.

Our teacher, Mr Chan, asked us to investigate how much waste our estate produces each week. We worked in groups, interviewing residents and observing the rubbish chutes and recycling bins. The results shocked us. While most blocks had blue recycling bins on the ground floor, many were either overflowing or contaminated with non-recyclable items like food waste and plastic bags. One neighbour told us, "I want to recycle, but I'm not sure which bin to use, so sometimes I just throw everything down the chute."

That's when we decided to act. First, we designed simple bilingual posters explaining what can and cannot be recycled. We included pictures because not everyone reads English or Chinese fluently. The Town Council gave us permission to put posters near every recycling bin and lift lobby in three blocks.

Next, we organised a Saturday morning "Recycling Awareness Walk." About twenty residents joined us, including some elderly uncles and aunties. We walked around the estate, pointing out recycling bins and answering questions. One auntie asked, "Can I recycle old clothes?" We explained that while clothes can't go in the blue bins, there are donation boxes at community centres. She seemed relieved to know there was an option.

The most surprising outcome? One month after our project, the Town Council reported a fifteen percent increase in proper recycling in those three blocks. It's not a huge change, but it's a start. We realised that many people want to help the environment – they just need clear information and a little encouragement.

Now we're working with the Town Council to expand the project to more blocks. We've also been invited to present our project at the school's Eco Fair next month. I used to think one class couldn't make a difference, but I was wrong. Small actions, when done together, can lead to real change.`,
          options: JSON.stringify([
            "What was the original homework assignment?|A. To design posters|B. To investigate waste in the neighbourhood|C. To interview the principal|D. To write an essay about recycling",
            "What problem did they discover?|A. There were no recycling bins|B. Bins were overflowing or contaminated|C. Residents refused to recycle|D. The bins were locked",
            "Why did they include pictures on the posters?|A. To make them colourful|B. Because not everyone reads English or Chinese fluently|C. The teacher told them to|D. To save space",
            "What did they organise on Saturday morning?|A. A clean-up day|B. A recycling sale|C. A Recycling Awareness Walk|D. A tree-planting event",
            "What did the auntie ask about?|A. Plastic bottles|B. Old clothes|C. Food waste|D. Paper",
            "What happened one month after the project?|A. Nothing changed|B. Recycling increased by 15% in three blocks|C. The bins were removed|D. The school cancelled the project",
            "Where will they present their project?|A. At the Town Council|B. At a shopping mall|C. At the school's Eco Fair|D. On the news",
            "What did the writer learn from the project?|A. Recycling is too difficult|B. Small actions together can lead to real change|C. Only adults can help the environment|D. The project was a waste of time",
          ]),
          correctAnswer: "B,B,B,C,B,B,C,B",
          points: 8,
        },
        {
          type: "grammar",
          order: 2,
          content: "Choose the correct answer:",
          options: JSON.stringify([
            "Plastic bottles ____ in the blue bin.|A. recycle|B. recycled|C. are recycled|D. recycling",
            "We ____ act to solve the problem.|A. should|B. could|C. would|D. might",
            "People want to help, ____ they need information.|A. so|B. but|C. because|D. although",
            "If more people recycled, the environment ____ cleaner.|A. is|B. was|C. would be|D. will be",
            "The project ____ by our Geography class.|A. started|B. was started|C. is started|D. starts",
            "Many residents ____ to the walk.|A. come|B. comes|C. came|D. coming",
            "We ought ____ more effort to protect the environment.|A. make|B. to make|C. making|D. made",
            "The problem is serious; ____, we can still make a difference.|A. but|B. so|C. however|D. because",
          ]),
          correctAnswer: "C,A,B,C,B,C,B,C",
          points: 8,
        },
        {
          type: "writing",
          order: 3,
          content: `Write an article for your school website (100-120 words):

"One change my school should make for the environment"

Choose ONE environmental change you think your school should make (e.g. reduce plastic, save electricity, start composting, plant trees, repair leaking taps, etc.)

Include:
• What the change is
• Why it's important
• How it could be done
• What impact it would have

成功标准 / Success Criteria:
✓ 被动语态 (Passive voice: Plastic should be reduced / Trees could be planted)
✓ 情态动词建议 (Modal verbs for advice: should, ought to, could, must)
✓ 连接词 (Linking: therefore, however, as a result, for example)
✓ 清晰结构 (Clear structure with reasons and solutions)
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
  // Both demo and trial accounts should start fresh with zero submissions
  // so users can actually try the sample weeks

  await prisma.submission.deleteMany({
    where: {
      userId: {
        in: [demoUser.id, trialUser.id],
      },
    },
  });

  console.log("✅ Demo and trial users have no submissions");
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
