import { prisma } from "../lib/db";
import * as bcrypt from "bcryptjs";

async function main() {
  console.log("🌱 Starting seed...");

  const demoPasswordHash = await bcrypt.hash("demo1234", 10);
  const trialPasswordHash = await bcrypt.hash("trial1234", 10);

  const demoUser = await prisma.user.upsert({
    where: { email: "demo@sgschoolentry.local" },
    update: {},
    create: {
      email: "demo@sgschoolentry.local",
      password: demoPasswordHash,
      name: "Demo Student",
      role: "student",
      level: "A2",
      subscribed: true,
    },
  });

  const trialUser = await prisma.user.upsert({
    where: { email: "trial@sgschoolentry.local" },
    update: {},
    create: {
      email: "trial@sgschoolentry.local",
      password: trialPasswordHash,
      name: "Trial Student",
      role: "student",
      level: "A2",
      subscribed: false,
    },
  });

  console.log("✅ Created demo users");

  const a2Weeks = [
    {
      level: "A2",
      weekNumber: 0,
      title: "试学周 / Sample Week",
      description: "免费试学，了解课程内容",
      isSample: true,
    },
    {
      level: "A2",
      weekNumber: 1,
      title: "Week 1: Daily Routines",
      description: "Talking about everyday activities",
      isSample: false,
      dueDate: new Date("2026-08-20"),
    },
    {
      level: "A2",
      weekNumber: 2,
      title: "Week 2: School Life",
      description: "Describing school subjects and activities",
      isSample: false,
      dueDate: new Date("2026-08-27"),
    },
    {
      level: "A2",
      weekNumber: 3,
      title: "Week 3: Family and Friends",
      description: "Talking about relationships",
      isSample: false,
      dueDate: new Date("2026-09-03"),
    },
  ];

  const b1Weeks = [
    {
      level: "B1",
      weekNumber: 0,
      title: "试学周 / Sample Week",
      description: "免费试学，了解课程内容",
      isSample: true,
    },
    {
      level: "B1",
      weekNumber: 1,
      title: "Week 1: Travel and Culture",
      description: "Discussing travel experiences",
      isSample: false,
      dueDate: new Date("2026-08-20"),
    },
    {
      level: "B1",
      weekNumber: 2,
      title: "Week 2: Technology Today",
      description: "Expressing opinions about technology",
      isSample: false,
      dueDate: new Date("2026-08-27"),
    },
    {
      level: "B1",
      weekNumber: 3,
      title: "Week 3: Environment",
      description: "Talking about environmental issues",
      isSample: false,
      dueDate: new Date("2026-09-03"),
    },
  ];

  for (const weekData of [...a2Weeks, ...b1Weeks]) {
    const week = await prisma.week.upsert({
      where: {
        level_weekNumber: {
          level: weekData.level,
          weekNumber: weekData.weekNumber,
        },
      },
      update: {},
      create: weekData,
    });

    const isA2 = weekData.level === "A2";
    const isSample = weekData.weekNumber === 0;

    await prisma.question.createMany({
      data: [
        {
          weekId: week.id,
          type: "reading",
          order: 1,
          content: isA2
            ? `Read this email from your friend Tom:\n\nHi! I hope you're well. I'm writing to tell you about my new school. It's very big and modern. There are 30 students in my class. My favourite subject is Science because the teacher is really nice. We have a big library and a sports hall. I play basketball every Wednesday after school. What about your school?\n\nBest wishes,\nTom`
            : `Read this article:\n\nSingapore is known for its excellent education system. Students attend primary school from Primary 1 to Primary 6, then move to secondary school. The curriculum includes Mathematics, Science, English, and a Mother Tongue language. Many international students choose Singapore for its high academic standards and multicultural environment. Schools in Singapore use English as the main medium of instruction, which helps students prepare for a global future.`,
          options: JSON.stringify(
            isA2
              ? [
                  "Why is Tom writing?|A. To invite his friend|B. To describe his school|C. To ask for homework help|D. To complain",
                  "How many students are in Tom's class?|A. 13|B. 30|C. 31|D. 40",
                  "What is Tom's favourite subject?|A. English|B. Maths|C. Science|D. PE",
                  "When does Tom play basketball?|A. Monday|B. Tuesday|C. Wednesday|D. Friday",
                ]
              : [
                  "What does the article mainly discuss?|A. Singapore's transport system|B. Singapore's education system|C. Singapore's history|D. Singapore's food culture",
                  "How many years do students spend in primary school?|A. 4 years|B. 5 years|C. 6 years|D. 7 years",
                  "What language is mainly used for teaching?|A. Chinese|B. Malay|C. Tamil|D. English",
                  "According to the article, why do international students choose Singapore?|A. Because it is cheap|B. Because of high standards and multiculturalism|C. Because there are no exams|D. Because school is optional",
                ]
          ),
          correctAnswer: isA2 ? "B,B,C,C" : "B,C,D,B",
          points: 4,
        },
        {
          weekId: week.id,
          type: "grammar",
          order: 2,
          content: "Choose the correct answer:",
          options: JSON.stringify(
            isA2
              ? [
                  "I ____ to school every day.|A. go|B. goes|C. going|D. gone",
                  "She ____ her homework now.|A. do|B. does|C. is doing|D. did",
                  "They ____ to Singapore last year.|A. move|B. moved|C. moving|D. will move",
                  "How ____ books do you have?|A. much|B. many|C. often|D. long",
                ]
              : [
                  "If I ____ more time, I would travel more.|A. have|B. had|C. will have|D. having",
                  "She ____ in Singapore for five years.|A. lives|B. lived|C. has lived|D. is living",
                  "The homework must ____ by Friday.|A. finish|B. finished|C. be finished|D. finishing",
                  "I wish I ____ speak Chinese fluently.|A. can|B. could|C. will|D. would",
                ]
          ),
          correctAnswer: isA2 ? "A,C,B,B" : "B,C,C,B",
          points: 4,
        },
        {
          weekId: week.id,
          type: "writing",
          order: 3,
          content: isA2
            ? "Write a short email (about 50 words) to your friend about your favourite hobby. Say:\n- What the hobby is\n- When you do it\n- Why you like it"
            : "Write a short article (about 100 words) for your school magazine about an interesting place you have visited. Include:\n- Where and when you went\n- What you did there\n- Why you would recommend it",
          points: 10,
        },
        {
          weekId: week.id,
          type: "listening",
          order: 4,
          content: isA2
            ? `听读练习 (阅读听力准备)\n\nRead this conversation carefully:\n\nTeacher: Good morning, class. Today we're going to talk about Singapore. Does anyone know the capital of Singapore?\nStudent 1: Is it Singapore City?\nTeacher: Actually, Singapore is a city-state, so the whole country is also the capital! What languages do people speak there?\nStudent 2: English and Chinese, I think.\nTeacher: That's right! English, Chinese, Malay, and Tamil are all official languages.`
            : `听读练习 (阅读听力准备)\n\nRead this announcement:\n\n"Attention all students. The school library will be closed next Monday for maintenance. Please return all books by this Friday. The library will reopen on Tuesday at 8 AM. During the closure, you can still access online resources through the school portal. If you have any questions, please email library@school.edu.sg. Thank you for your cooperation."`,
          options: JSON.stringify(
            isA2
              ? [
                  "What is the lesson about?|A. History|B. Geography - Singapore|C. Maths|D. Science",
                  "What type of place is Singapore?|A. A country with many cities|B. A city-state|C. A province|D. An island only",
                  "How many official languages does Singapore have?|A. 2|B. 3|C. 4|D. 5",
                ]
              : [
                  "When will the library close?|A. This Friday|B. Next Monday|C. Next Tuesday|D. This Monday",
                  "What should students do by Friday?|A. Email questions|B. Return books|C. Visit the library|D. Access online resources",
                  "When will the library reopen?|A. Monday 8 AM|B. Tuesday 8 AM|C. Friday 8 AM|D. Next week",
                ]
          ),
          correctAnswer: isA2 ? "B,B,C" : "B,B,B",
          points: 3,
        },
        {
          weekId: week.id,
          type: "speaking",
          order: 5,
          content: isA2
            ? "Speaking Practice:\n\nPrepare a short talk (about 1 minute) about:\n'Describe your typical school day.'\n\nThink about:\n- What time you wake up\n- How you get to school\n- Your favourite lessons\n- What you do after school\n\nWhen you are ready, practice speaking out loud. Confirm when you have practiced."
            : "Speaking Practice:\n\nPrepare a short talk (2-3 minutes) about:\n'Describe an important decision you made recently.'\n\nThink about:\n- What the decision was\n- Why you had to make it\n- What factors you considered\n- Whether you are happy with your decision\n\nWhen you are ready, practice speaking out loud. Confirm when you have practiced.",
          points: 5,
        },
      ],
    });

    if (isSample && week.level === "A2") {
      await prisma.submission.upsert({
        where: {
          userId_weekId: {
            userId: demoUser.id,
            weekId: week.id,
          },
        },
        update: {},
        create: {
          userId: demoUser.id,
          weekId: week.id,
          answers: JSON.stringify({
            reading: ["B", "B", "C", "C"],
            grammar: ["A", "C", "B", "B"],
            writing: "I love playing basketball! I play it every weekend with my friends at the school court. I like it because it's fun and it helps me stay healthy. We have a great time together.",
            listening: ["B", "B", "C"],
            speaking: "completed",
          }),
          score: 24,
          completedAt: new Date("2026-08-10"),
        },
      });
    }
  }

  console.log("✅ Created weeks and questions");
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
