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

  const mathTrialUser = await prisma.user.upsert({
    where: { email: "math@sgschoolentry.local" },
    update: {
      name: "Math Trial Student",
      role: "student",
      level: "MATH",
      subscribed: false,
    },
    create: {
      email: "math@sgschoolentry.local",
      password: await bcrypt.hash("math1234", 10),
      name: "Math Trial Student",
      role: "student",
      level: "MATH",
      subscribed: false,
    },
  });

  console.log("✅ Upserted demo users");

  // =================================================================
  // WEEK DEFINITIONS
  // =================================================================

  const weekDefinitions = [
    // MATH WEEKS (AEIS-Primary Mathematics)
    {
      level: "MATH",
      weekNumber: 0,
      title: "数学 试学周 / Maths Sample Week",
      description: "AEIS-Primary P2 Mathematics: Whole numbers and money",
      isSample: true,
      errorFocus: null,
      parentBrief: "本周主题：整数与钱币（对应 MOE 小学 P2 数学大纲）。孩子会做加减法、比较大小、认识新加坡钱币。题目是简体中文家长说明 + 英文题干，帮孩子同时熟悉数学和英语。本周配有双向对照表，显示题目对应的官方 2021 Primary Mathematics Syllabus 内容点，以及 MOE AEIS 的「preceding level」规则（申请 P3 → 掌握 P2 内容）。",
      videoUrl: null,
      kaizenFocus: null,
      questions: [
        {
          type: "reading",
          order: 1,
          content: `Read each question and choose the correct answer.`,
          options: JSON.stringify([
            "At a bookshop in Bedok, Jun Wei bought 2 storybooks for $8 each and 1 pencil case for $5. How much did he spend in total?|A. $13|B. $16|C. $21|D. $26",
            "Mei has $50. She wants to buy a schoolbag for $32 and a water bottle for $12. Does she have enough money?|A. Yes, she has $6 left|B. Yes, she has $8 left|C. No, she needs $4 more|D. No, she needs $6 more",
            "A hawker centre has 345 seats. 128 seats are occupied. How many seats are empty?|A. 117|B. 217|C. 227|D. 473",
            "Sarah counts her savings. She has three $10 notes, five $2 coins, and eight 50-cent coins. How much money does she have?|A. $38|B. $40|C. $44|D. $48",
            "A library has 680 English books and 215 Chinese books. How many books are there in total?|A. 465|B. 795|C. 895|D. 905",
          ]),
          correctAnswer: "C,A,B,C,C",
          points: 5,
        },
        {
          type: "grammar",
          order: 2,
          content: `Choose the correct answer for each question.`,
          options: JSON.stringify([
            "Which number is the greatest?|A. 456|B. 654|C. 546|D. 465",
            "What is 725 - 389?|A. 336|B. 346|C. 436|D. 1114",
            "Arrange these numbers from smallest to greatest: 802, 280, 820, 208|A. 208, 280, 802, 820|B. 802, 820, 280, 208|C. 280, 208, 820, 802|D. 208, 820, 280, 802",
            "How many cents are there in $6.75?|A. 75 cents|B. 675 cents|C. 6075 cents|D. 7560 cents",
            "Which amount is the same as 5 dollars and eight 10-cent coins?|A. $5.08|B. $5.80|C. $58.00|D. $50.80",
            "Raju has two $5 notes, three $2 coins, and five 20-cent coins. How much does he have?|A. $15.00|B. $16.00|C. $17.00|D. $17.20",
            "What is 348 + 276?|A. 514|B. 524|C. 614|D. 624",
            "Compare: 539 ___ 593|A. =|B. >|C. <|D. Cannot tell",
          ]),
          correctAnswer: "B,A,A,B,B,C,D,C",
          points: 8,
        },
        {
          type: "writing",
          order: 3,
          content: `At a canteen in Tampines, Ali bought the following items for his family:
- 3 plates of chicken rice at $4 each
- 2 bowls of laksa at $5 each
- 4 cups of drinks at $2 each

He paid with a $50 note.

(a) How much did Ali spend in total? Show your working.
(b) How much change did he receive?

写出算式和答案，标注 $.`,
          points: 10,
        },
      ],
    },
    {
      level: "MATH",
      weekNumber: 1,
      title: "数学 第 1 周 / Maths Week 1",
      description: "AEIS-Primary P2 Mathematics: Multiplication and division within tables",
      isSample: false,
      errorFocus: null,
      parentBrief: "本周主题：乘法与除法（对应 MOE 小学 P2 数学大纲 3.1–3.5）。孩子会练习 2、3、4、5、10 的乘法口诀，理解乘法和除法的关系（例如 3 × 4 = 12，所以 12 ÷ 3 = 4），并在应用题中使用这些技能。题目是简体中文家长说明 + 英文题干。本周配有双向对照表，显示题目对应的官方 2021 Primary Mathematics Syllabus 内容点，以及 MOE AEIS 的「preceding level」规则（申请 P3 → 掌握 P2 内容）。",
      videoUrl: null,
      kaizenFocus: null,
      questions: [
        {
          type: "reading",
          order: 1,
          content: `Read each question and choose the correct answer.`,
          options: JSON.stringify([
            "At a canteen stall, chicken drumsticks are sold in packs of 3. Mrs Tan bought 5 packs. How many chicken drumsticks did she buy?|A. 8|B. 12|C. 15|D. 18",
            "A gardener plants flowers in rows. Each row has 4 flowers. He planted 6 rows. How many flowers did he plant in total?|A. 10|B. 20|C. 24|D. 28",
            "Ali saved $5 every week for 8 weeks. How much money did he save in total?|A. $13|B. $35|C. $40|D. $45",
            "There are 20 apples. The apples are shared equally among 4 children. How many apples does each child get?|A. 4|B. 5|C. 16|D. 24",
            "A bookshop has 30 notebooks. The notebooks are arranged equally on 5 shelves. How many notebooks are on each shelf?|A. 5|B. 6|C. 10|D. 25",
          ]),
          correctAnswer: "C,C,C,B,B",
          points: 5,
        },
        {
          type: "grammar",
          order: 2,
          content: `Choose the correct answer for each question.`,
          options: JSON.stringify([
            "What is 3 × 5?|A. 8|B. 12|C. 15|D. 18",
            "What is 4 × 6?|A. 10|B. 20|C. 24|D. 28",
            "What is 10 × 7?|A. 17|B. 60|C. 70|D. 80",
            "What is 18 ÷ 3?|A. 3|B. 6|C. 9|D. 15",
            "What is 20 ÷ 4?|A. 4|B. 5|C. 16|D. 24",
            "Which number sentence is correct?|A. 2 × 8 = 14|B. 3 × 7 = 21|C. 4 × 5 = 24|D. 5 × 6 = 35",
            "15 ÷ 5 = ?|A. 3|B. 5|C. 10|D. 20",
            "Which of these is equal to 24?|A. 4 × 6|B. 4 × 5|C. 5 × 5|D. 10 × 3",
          ]),
          correctAnswer: "C,C,C,B,B,B,A,A",
          points: 8,
        },
        {
          type: "writing",
          order: 3,
          content: `At Jurong Point shopping centre, the toy shop is having a sale. A toy car costs $4. Jun Wei wants to buy 3 toy cars for his cousins.

(a) How much will 3 toy cars cost in total? Show your working.
(b) Jun Wei has $20. After buying the 3 toy cars, how much money will he have left?

写出算式和答案，标注 $.`,
          points: 10,
        },
      ],
    },
    {
      level: "MATH",
      weekNumber: 2,
      title: "数学 第 2 周 / Maths Week 2",
      description: "AEIS-Primary P2 Mathematics: Fractions",
      isSample: false,
      errorFocus: null,
      parentBrief: "本周主题：分数（对应 MOE 小学 P2 数学大纲 Fractions）。孩子会认识分数是「整体的一部分」，学会分数记号（1/2、1/3、1/4 等），比较单位分数和同分母分数的大小，在一个整体内加减同分母分数。分母不超过 12。题目是简体中文家长说明 + 英文题干。本周配有双向对照表，显示题目对应的官方 2021 Primary Mathematics Syllabus 内容点，以及 MOE AEIS 的「preceding level」规则（申请 P3 → 掌握 P2 内容）。",
      videoUrl: null,
      kaizenFocus: null,
      questions: [
        {
          type: "reading",
          order: 1,
          content: `Read each question and choose the correct answer.`,
          options: JSON.stringify([
            "Mei bought a pizza. She cut it into 8 equal slices. She ate 3 slices. What fraction of the pizza did she eat?|A. 1/8|B. 3/8|C. 5/8|D. 8/3",
            "A ribbon is 1 metre long. Ali cut it into 4 equal parts. What fraction of the whole ribbon is each part?|A. 1/2|B. 1/3|C. 1/4|D. 4/1",
            "There are 12 cupcakes. 5 cupcakes have chocolate icing and 7 cupcakes have vanilla icing. What fraction of the cupcakes have chocolate icing?|A. 5/7|B. 5/12|C. 7/12|D. 12/5",
            "A jug contains 1 litre of orange juice. Sarah drinks 1/4 of the juice. How much juice is left in the jug?|A. 1/4 litre|B. 2/4 litre|C. 3/4 litre|D. 4/4 litre",
            "In a class, 2/10 of the students wear glasses and 3/10 of the students wear braces. What fraction of the class wears glasses or braces?|A. 1/10|B. 5/10|C. 6/10|D. 2/3",
          ]),
          correctAnswer: "B,C,B,C,B",
          points: 5,
        },
        {
          type: "grammar",
          order: 2,
          content: `Choose the correct answer for each question.`,
          options: JSON.stringify([
            "Which fraction is the largest?|A. 1/2|B. 1/3|C. 1/4|D. 1/5",
            "Which fraction is the smallest?|A. 1/6|B. 1/8|C. 1/10|D. 1/12",
            "Compare: 3/7 ___ 5/7|A. =|B. >|C. <|D. Cannot tell",
            "Arrange these fractions from smallest to largest: 2/9, 5/9, 1/9, 7/9|A. 1/9, 2/9, 5/9, 7/9|B. 7/9, 5/9, 2/9, 1/9|C. 2/9, 1/9, 5/9, 7/9|D. 1/9, 7/9, 2/9, 5/9",
            "What is 2/8 + 3/8?|A. 1/8|B. 5/8|C. 5/16|D. 6/8",
            "What is 7/10 - 3/10?|A. 3/10|B. 4/10|C. 10/10|D. 4/20",
            "Jun has 5/12 of a cake. He eats 2/12 of the cake. What fraction of the cake is left?|A. 3/12|B. 3/24|C. 7/12|D. 7/24",
            "Which is equal to one whole?|A. 5/5|B. 6/8|C. 7/10|D. 11/12",
          ]),
          correctAnswer: "A,D,C,A,B,B,A,A",
          points: 8,
        },
        {
          type: "writing",
          order: 3,
          content: `At Toa Payoh library, there is a bookshelf with 12 storybooks. 5 of the books are about animals, 3 of the books are about adventures, and the rest are about science.

(a) What fraction of the books are about animals? Show your working.
(b) What fraction of the books are about science? Show your working.
(c) If you add the fractions of animal books and adventure books together, what fraction of all the books is this? Show your working.

写出算式和答案。`,
          points: 10,
        },
      ],
    },
    {
      level: "MATH",
      weekNumber: 3,
      title: "数学 第 3 周 / Maths Week 3",
      description: "AEIS-Primary P2 Mathematics: Length, Mass, Volume and Time",
      isSample: false,
      errorFocus: null,
      parentBrief: "本周主题：长度、质量、容积与时间（对应 MOE 小学 P2 数学大纲 Measurement and Geometry）。孩子会练习用米（m）测量长度、用千克（kg）和克（g）测量质量、用升（ℓ）测量容积，学会比较和排序这些量。还会练习看时钟读时间到分钟、测量小时和分钟、进行小时和分钟之间的转换（1 小时 = 60 分钟）。题目是简体中文家长说明 + 英文题干。本周配有双向对照表，显示题目对应的官方 2021 Primary Mathematics Syllabus 内容点，以及 MOE AEIS 的「preceding level」规则（申请 P3 → 掌握 P2 内容）。",
      videoUrl: null,
      kaizenFocus: null,
      questions: [
        {
          type: "reading",
          order: 1,
          content: `Read each question and choose the correct answer.`,
          options: JSON.stringify([
            "At Tampines library, the bookshelf is 2 metres tall and the study table is 1 metre tall. How much taller is the bookshelf than the study table?|A. 1 m|B. 2 m|C. 3 m|D. 4 m",
            "A hawker stall has a bag of rice with a mass of 5 kilograms and a bag of flour with a mass of 2 kilograms. How much heavier is the rice than the flour?|A. 2 kg|B. 3 kg|C. 5 kg|D. 7 kg",
            "At Bedok MRT station, the water dispenser holds 8 litres of water. 3 litres have been used. How many litres of water are left?|A. 3 ℓ|B. 5 ℓ|C. 8 ℓ|D. 11 ℓ",
            "The clock shows that the hour hand is on 3 and the minute hand is on 6. What time is it?|A. 3:00|B. 3:30|C. 6:00|D. 6:30",
            "At Toa Payoh library, a blue ribbon is 8 metres long and a red ribbon is 5 metres long. How much longer is the blue ribbon than the red ribbon?|A. 3 m|B. 5 m|C. 8 m|D. 13 m",
          ]),
          correctAnswer: "A,B,B,B,A",
          points: 5,
        },
        {
          type: "grammar",
          order: 2,
          content: `Choose the correct answer for each question.`,
          options: JSON.stringify([
            "Which unit is used to measure the length of a classroom?|A. Grams|B. Litres|C. Metres|D. Kilograms",
            "Which unit should you use to measure the mass of a bag of apples?|A. Metres|B. Litres|C. Grams or kilograms|D. Minutes",
            "Which container holds the most liquid?|A. 3 litres|B. 5 litres|C. 2 litres|D. 4 litres",
            "What time is shown on the clock when the hour hand is between 3 and 4, and the minute hand is on 6?|A. 3:00|B. 3:30|C. 4:00|D. 4:30",
            "How many minutes are in 2 hours?|A. 60 minutes|B. 90 minutes|C. 120 minutes|D. 200 minutes",
            "Compare: 4 kg ___ 3 kg|A. =|B. >|C. <|D. Cannot tell",
            "Jun Wei studies for 1 hour and 45 minutes. How many minutes is that?|A. 45 minutes|B. 75 minutes|C. 105 minutes|D. 145 minutes",
            "Arrange these lengths from shortest to longest: 7 m, 2 m, 5 m, 9 m|A. 2 m, 5 m, 7 m, 9 m|B. 9 m, 7 m, 5 m, 2 m|C. 2 m, 7 m, 5 m, 9 m|D. 5 m, 2 m, 7 m, 9 m",
          ]),
          correctAnswer: "C,C,B,B,C,B,C,A",
          points: 8,
        },
        {
          type: "writing",
          order: 3,
          content: `At the school sports day in Tampines Primary School, the teachers set up a relay race. The race track is 8 metres long for each runner. There are 3 runners in Team A.

(a) What is the total length that Team A will run? Show your working.
(b) The race starts at 9:00 in the morning. Each runner takes 2 minutes to complete their part. How long does the whole race take for Team A? Show your working.

写出算式和答案。`,
          points: 10,
        },
      ],
    },
    {
      level: "MATH",
      weekNumber: 4,
      title: "数学 第 4 周 / Maths Week 4",
      description: "AEIS-Primary P2 Mathematics: 2D patterns and 3D shapes",
      isSample: false,
      errorFocus: null,
      parentBrief: "本周主题：平面图形规律与立体图形（对应 MOE 小学 P2 数学大纲 Measurement and Geometry）。孩子会练习按 size / shape / colour / orientation 一个属性找规律（下一个图形是什么），还会认识五种立体图形：cube（正方体，6 个正方形面）、cuboid（长方体，6 个长方形面）、cone（圆锥，圆形底和顶点）、cylinder（圆柱，2 个圆形面）、sphere（球体，圆球）。题目是简体中文家长说明 + 英文题干。本周配有双向对照表，显示题目对应的官方 2021 Primary Mathematics Syllabus 内容点，以及 MOE AEIS 的「preceding level」规则（申请 P3 → 掌握 P2 内容）。",
      videoUrl: null,
      kaizenFocus: null,
      questions: [
        {
          type: "reading",
          order: 1,
          content: `Read each question and choose the correct answer.`,
          options: JSON.stringify([
            "Mei makes a pattern with shapes: big red circle, small red circle, big red circle, small red circle. The pattern uses size. What comes next?|A. big red circle|B. small red circle|C. big blue circle|D. small square",
            "Priya arranges blocks: triangle, square, triangle, square, triangle. What shape comes next?|A. triangle|B. square|C. circle|D. rectangle",
            "At Tampines library, Ms Tan shows objects: a dice, a book box, and a ball. Which one is a cube?|A. the ball|B. the dice|C. the book box|D. none of them",
            "Jun Wei sees a can of drink at Bedok hawker centre. What 3D shape is the can?|A. cube|B. cuboid|C. cylinder|D. sphere",
            "In the classroom, there is a globe on the teacher's desk. What 3D shape is the globe?|A. cube|B. cone|C. cylinder|D. sphere",
          ]),
          correctAnswer: "A,B,B,C,D",
          points: 5,
        },
        {
          type: "grammar",
          order: 2,
          content: `Choose the correct answer for each question.`,
          options: JSON.stringify([
            "A pattern uses shapes: circle, triangle, circle, triangle, circle. The pattern changes by shape. What is the next shape?|A. circle|B. triangle|C. square|D. rectangle",
            "Which 3D shape has 6 square faces?|A. cuboid|B. cube|C. cylinder|D. cone",
            "At Toa Payoh library, there is a box for recycling paper. The box has 6 rectangular faces. What shape is it?|A. cube|B. cuboid|C. cylinder|D. sphere",
            "Mei sees an ice-cream cone. The ice-cream cone has a circular base and a point at the top. What 3D shape is it?|A. cube|B. cylinder|C. cone|D. sphere",
            "A pattern uses colour: red square, blue square, red square, blue square. The pattern changes by colour. What comes next?|A. red square|B. blue square|C. red triangle|D. green square",
          ]),
          correctAnswer: "B,B,B,C,A",
          points: 5,
        },
        {
          type: "writing",
          order: 3,
          content: `At Bedok Primary School, the teacher shows three boxes to the class. Box A is a cube. Box B is a cuboid. Box C is a cylinder.

(a) How many faces does Box A (the cube) have? Write your answer.
(b) The teacher says Box B (the cuboid) has 6 faces. Are all the faces of Box B squares? Write Yes or No and explain why.

写出算式和答案。`,
          points: 10,
        },
      ],
    },
    {
      level: "MATH",
      weekNumber: 5,
      title: "数学 第 5 周 / Maths Week 5",
      description: "AEIS-Primary P2 Mathematics: Picture graphs with scales",
      isSample: false,
      errorFocus: null,
      parentBrief: "本周主题：带单位的象形统计图（对应 MOE 小学 P2 数学大纲 Statistics）。P1 学过每个图代表 1 个物品。本周 P2 的新知识点是单位：每个图代表 2 个、5 个或 10 个。孩子要先看「Each ⭐ stands for 2」，再数有几个图，然后乘出总数（4 个 ⭐ × 2 = 8），最后比较大小或求差。常见化石：数了 4 个图就写 4，忘了乘单位。题目是简体中文家长说明 + 英文题干。本周配有双向对照表，显示题目对应的官方 2021 Primary Mathematics Syllabus P2 Statistics 内容点（Picture graphs with scales 1.1），以及 MOE AEIS 的「preceding level」规则（申请 P3 → 掌握 P2 内容）。",
      videoUrl: null,
      kaizenFocus: null,
      questions: [
        {
          type: "reading",
          order: 1,
          content: `Read each question and choose the correct answer.`,
          options: JSON.stringify([
            "Ms Tan's class voted for their favourite fruit. Each 🍎 stands for 2 children. The picture graph shows: Apple 🍎🍎🍎🍎  Orange 🍊🍊🍊  Banana 🍌🍌. How many children chose apple?|A. 4|B. 6|C. 8|D. 10",
            "At Tampines library, the librarian recorded books borrowed in one week. Each 📚 stands for 5 books. Story books 📚📚📚  Science books 📚📚  Picture books 📚📚📚📚. Which type had the most books borrowed?|A. Story books|B. Science books|C. Picture books|D. All the same",
            "Priya counted transport to school. Each 🚗 stands for 2 students. Car 🚗🚗🚗  Bus 🚗🚗🚗🚗🚗  Walk 🚗🚗. How many students walk to school?|A. 2|B. 3|C. 4|D. 5",
            "At Bedok canteen, Jun Wei recorded drinks sold on Monday. Each ☕ stands for 10 cups. Milo ☕☕☕  Water ☕☕  Tea ☕. How many more cups of Milo than tea were sold?|A. 1|B. 2|C. 10|D. 20",
            "The P2 class voted for CCA choice. Each ⭐ stands for 5 children. Football ⭐⭐  Art ⭐⭐⭐  Music ⭐⭐. How many children voted for Art?|A. 3|B. 10|C. 12|D. 15",
          ]),
          correctAnswer: "C,C,C,D,D",
          points: 5,
        },
        {
          type: "grammar",
          order: 2,
          content: `Choose the correct answer for each question.`,
          options: JSON.stringify([
            "At Toa Payoh library story time, Ms Tan recorded attendance. Each 👧 stands for 2 children. Week 1 👧👧👧  Week 2 👧👧👧👧  Week 3 👧👧. How many children came in Week 2?|A. 4|B. 6|C. 8|D. 10",
            "Mei counted birds at East Coast Park. Each 🦜 stands for 5 birds. Monday 🦜🦜  Tuesday 🦜🦜🦜  Wednesday 🦜. How many birds did she count on Tuesday?|A. 3|B. 10|C. 15|D. 20",
            "The school canteen sold ice cream. Each 🍦 stands for 10 ice creams. Chocolate 🍦🍦  Vanilla 🍦🍦🍦  Strawberry 🍦. Which flavour sold the least?|A. Chocolate|B. Vanilla|C. Strawberry|D. Chocolate and Strawberry",
            "Jun Wei recorded homework time. Each ⏰ stands for 5 minutes. Maths ⏰⏰⏰  English ⏰⏰  Science ⏰⏰⏰⏰. How many minutes did he spend on Science?|A. 4|B. 15|C. 20|D. 25",
            "At Bedok swimming pool, Priya counted swimmers. Each 🏊 stands for 2 people. Morning 🏊🏊🏊🏊  Afternoon 🏊🏊🏊. How many fewer people swam in the afternoon than in the morning?|A. 1|B. 2|C. 3|D. 4",
          ]),
          correctAnswer: "C,C,C,C,B",
          points: 5,
        },
        {
          type: "writing",
          order: 3,
          content: `At Tampines Primary School, Ms Tan asked her class to vote for their favourite subject. She made a picture graph. Each 📖 stands for 5 children.

Maths 📖📖📖
English 📖📖📖📖
Science 📖📖
Art 📖📖📖📖📖

(a) How many children voted for English? Show your working.
(b) How many more children like Art than Science? Show your working.

写出算式和答案。`,
          points: 10,
        },
      ],
    },
    
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
      parentBrief: "本周纠错焦点：一般过去时和 used to。中文靠时间词「昨天、上周」来表示过去，动词不变形，孩子会说 yesterday I go。英语过去时动词必须变形：went, visited, had。另外，以前的习惯用 used to（不是 use to）：I used to live in Beijing。本周作业会反复纠正这两个化石化高危点。",
      videoUrl: null,
      kaizenFocus: "Use past simple for finished actions (went, visited); used to for old habits",
      officialClipId: "ecm9HEFcfdQ",
      officialClipCredit: "片源 Super Simple Songs 官方频道。The Family Tree。本站不拥有该片，仅嵌入官方 YouTube。孩子先听 mummy / daddy / grandma，再练过去时 visited / used to。",
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
          content: `Read about Wei's visit to his grandparents. Choose the correct word for each gap.

Visiting Ah Ma and Ah Gong

Last Sunday, my family (1) ____ my grandparents in Toa Payoh. We call them Ah Ma and Ah Gong. They (2) ____ to live in a kampong when they were young, but now they have a flat near the MRT station.

We (3) ____ at their home around eleven in the morning. Ah Gong (4) ____ reading his Chinese newspaper when we walked in. He smiled and (5) ____ us tea. Ah Ma was in the kitchen. She (6) ____ my favourite dishes for lunch – steamed fish and chicken rice!

After lunch, Ah Gong (7) ____ me some old photos. In one photo, he (8) ____ standing in front of his old taxi. He used to be a taxi driver for thirty years. I love visiting them!`,
          options: JSON.stringify([
            "(1)|A. visit|B. visits|C. visited|D. visiting",
            "(2)|A. use to live|B. used to live|C. uses to live|D. are used to live",
            "(3)|A. arrive|B. arrives|C. arriving|D. arrived",
            "(4)|A. is|B. are|C. was|D. were",
            "(5)|A. give|B. gives|C. giving|D. gave",
            "(6)|A. cook|B. cooks|C. cooked|D. cooking",
            "(7)|A. show|B. shows|C. showing|D. showed",
            "(8)|A. is|B. are|C. was|D. were",
          ]),
          correctAnswer: "C,B,D,C,D,C,D,C",
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

Task: Talk about a past family day (1 minute)

Think about a day you spent with family in the past. Talk about:
• When it was and who you were with
• Where you went or what you did together
• What you ate or what happened
• How you felt about it

Useful phrases (use past simple!):
• Last weekend / Last month, I...
• We visited / went to...
• My family and I had...
• I saw / ate / played...
• Ah Ma / Ah Gong / My cousin was...
• When I was younger, we used to...
• It was special because...
• I felt happy / excited when...

如何练习 / How to practise:
1. 想一个过去的家庭日 (Think of a past family day)
2. 用过去时说 (Use past tense: went, had, visited)
3. 点击"开始录音"按钮 (Tap the "开始录音" button)
4. 说完整1分钟，然后停止 (Speak for the full minute, then stop)
5. AI会盯住过去时动词和 used to (AI will focus on past tense and used to)`,
          points: 5,
        },
      ],
    },
    {
      level: "A2",
      weekNumber: 4,
      title: "Week 4: Shopping and Food",
      description: "Talking about shopping and quantities",
      isSample: false,
      dueDate: new Date("2026-09-10"),
      errorFocus: "quantifiers-countable-uncountable",
      parentBrief: "本周纠错焦点：可数/不可数名词 + 量词（some/any、much/many、a lot of）。中文量词系统不同，孩子会说 two breads、how many rice?、I need some waters。英语可数名词有复数：apples, bottles；不可数名词无复数：water, bread, rice。问可数用 How many + 复数，问不可数用 How much + 单数。some/any 都可以，但疑问句和否定句常用 any。本周作业会反复纠正这些高频错误。",
      videoUrl: null,
      kaizenFocus: "Use some/any correctly; count vs non-count nouns; How many/How much",
      officialClipId: "KbrSWbuWtmc",
      officialClipCredit: "片源 Super Simple Songs 官方频道。The Ice Cream Song。本站不拥有该片，仅嵌入官方 YouTube。孩子先听 how many scoops，再练 some / any / much / many。",
      questions: [
        {
          type: "reading",
          order: 1,
          content: `Read Priya's blog post:

Shopping Day at Tekka Market

Last Saturday, my mum took me to Tekka Market in Little India. She needed to buy some ingredients for our family dinner party on Sunday. I love going to Tekka Market because there's always so much to see!

First, we went to the vegetable stalls. Mum bought a lot of fresh vegetables: three kilograms of potatoes, two kilograms of onions, and some green beans. The lady at the stall was very friendly. She gave us a discount because we bought so many vegetables! Mum also bought a big bunch of coriander leaves and a bag of red chillies.

Then we walked to the spice section. The smell was amazing! Mum needed some turmeric powder, cumin seeds, and a packet of curry leaves. She asked the uncle at the spice stall, "Do you have any saffron today?" He said, "Sorry, I don't have any saffron left, but I can get some for you next week." Mum said it was okay – she could use the spices we had at home.

After that, we went to buy some meat and fish. Mum bought a whole chicken and a kilogram of prawns. The fishmonger asked, "How much fish do you want today?" Mum replied, "I don't need any fish today, thanks. Just the prawns."

Next, we stopped at the fruit stalls. I wanted to buy some mangoes, but Mum said we already have a lot of fruit at home. Instead, we bought just two papayas and a small basket of rambutans for dessert.

At the end, we bought a few bottles of coconut water to drink on the way home because it was very hot. When we got home, my dad helped us carry all the shopping bags upstairs. He said, "Wow! How many bags do we have?" I counted them – we had seven big bags!

On Sunday, Mum cooked a delicious curry with all the ingredients we bought. She didn't waste any food – she used everything. My grandparents and my aunt's family came for dinner. Everyone said the food was excellent. I'm proud of our shopping trip!`,
          options: JSON.stringify([
            "Why does Priya love going to Tekka Market?|A. It's near her house|B. There's always so much to see|C. Her friends go there|D. It's very cheap",
            "How many kilograms of potatoes did they buy?|A. One|B. Two|C. Three|D. Four",
            "Why didn't Mum buy saffron?|A. It was too expensive|B. She didn't like it|C. The stall didn't have any|D. She forgot to buy it",
            "What did the fishmonger ask?|A. How many prawns do you want?|B. How much money do you have?|C. How much fish do you want?|D. Do you need any meat?",
            "Why didn't they buy mangoes?|A. They were too expensive|B. They already have a lot of fruit at home|C. The mangoes were not fresh|D. Priya doesn't like mangoes",
            "What did they drink on the way home?|A. Orange juice|B. Water|C. Coconut water|D. Tea",
            "How many shopping bags did they have?|A. Five|B. Six|C. Seven|D. Eight",
            "Did Mum waste any food?|A. Yes, she wasted some vegetables|B. Yes, she wasted the prawns|C. No, she used everything|D. The text doesn't say",
          ]),
          correctAnswer: "B,C,C,C,B,C,C,C",
          points: 8,
        },
        {
          type: "grammar",
          order: 2,
          content: `Read about Mei's shopping trip. Choose the correct word for each gap.

Shopping List
by Mei Lin

Today my mum gave me (1) ____ money and a shopping list. I need to go to the supermarket and buy (2) ____ things for dinner. The list says:

• (3) ____ rice – 2 kilograms
• (4) ____ eggs – one carton (10 eggs)
• (5) ____ milk – 2 bottles
• (6) ____ tomatoes – half a kilogram
• (7) ____ bread – 1 loaf
• cooking oil – but Mum wrote "Do we have (8) ____ cooking oil at home? If yes, don't buy (9) ____."

I asked my little sister, "How (10) ____ bottles of milk should I buy?" She said, "Two, but I don't know how (11) ____ rice we need. Check the list again!"

When I got to the supermarket, I looked at the eggs. I didn't know (12) ____ to buy – white or brown. I called Mum and she said, "It doesn't matter. Buy (13) ____ white eggs." So I did! Then I found the rice aisle. There were (14) ____ different brands! I chose the one Mum always buys.

At the checkout, the cashier asked, "Do you need (15) ____ plastic bags?" I said, "No thanks, I brought my own bag." I spent $28 in total. When I got home, Mum said, "Well done! You didn't forget (16) ____ of the items!"`,
          options: JSON.stringify([
            "(1)|A. some|B. any|C. much|D. many",
            "(2)|A. much|B. any|C. some|D. a little",
            "(3)|A. Some|B. Any|C. A|D. An",
            "(4)|A. Some|B. Any|C. Much|D. A",
            "(5)|A. Some|B. Any|C. Many|D. Much",
            "(6)|A. Some|B. Any|C. A|D. Much",
            "(7)|A. Some|B. Many|C. A few|D. Much",
            "(8)|A. some|B. any|C. many|D. a few",
            "(9)|A. some|B. any|C. many|D. much",
            "(10)|A. much|B. many|C. any|D. a little",
            "(11)|A. many|B. much|C. any|D. few",
            "(12)|A. how much|B. how many|C. which|D. what",
            "(13)|A. much|B. any|C. some|D. a little",
            "(14)|A. so much|B. so many|C. so any|D. so some",
            "(15)|A. some|B. any|C. much|D. many",
            "(16)|A. some|B. any|C. much|D. many",
          ]),
          correctAnswer: "A,C,A,A,A,A,A,B,B,B,B,C,C,B,B,B",
          points: 16,
        },
        {
          type: "writing",
          order: 3,
          content: `You receive this email from your English friend, Alex:

From: Alex
To: You
Subject: Shopping trip

Hi!

I'm learning about different foods in Singapore! Can you tell me about a shopping trip you or your family did recently? Where did you go? What did you buy? Did you buy a lot of things or just a few?

Write back soon!
Alex

Write your email to Alex (50-70 words). Answer ALL the questions.

成功标准 / Success Criteria:
✓ 回答所有3个问题 (Answer all 3 questions)
✓ 可数/不可数名词 (Use countable/uncountable nouns correctly: some vegetables, two bottles, a lot of rice)
✓ 量词正确 (Quantifiers: some/any, much/many, a lot of, How many/How much)
✓ 邮件格式 (Email format: Hi Alex, ... / Best, [your name])
✓ 50-70词 (50-70 words)`,
          points: 10,
        },
        {
          type: "listening",
          order: 4,
          content: `听读练习 / Listening Preparation (read carefully)

Mum: Priya, I'm making a shopping list for tomorrow. Can you help me?

Priya: Sure, Mum! What do we need?

Mum: Let me check the fridge. We don't have any eggs left. How many eggs should I buy?

Priya: Get two dozen. We use a lot of eggs in our cooking.

Mum: Okay. Do we have any milk?

Priya: Yes, we have some milk, but not much. Maybe buy two more bottles?

Mum: Good idea. What about vegetables?

Priya: We have a lot of vegetables – potatoes, carrots, tomatoes. But we don't have any onions.

Mum: Right. I'll get some onions and maybe some green beans too. How much rice do we have?

Priya: We still have half a bag. That's enough for this week.

Mum: Perfect. What about bread?

Priya: We finished the bread this morning. We need a new loaf.

Mum: Okay. And we need some fruit. Any requests?

Priya: Can we get some mangoes? I love mangoes!

Mum: Sure. How many?

Priya: Maybe four or five?

Mum: That's a lot! Let's get three. Okay, I think that's everything. Thanks for your help!`,
          options: JSON.stringify([
            "How many eggs will they buy?|A. One dozen|B. Two dozen|C. Three dozen|D. Four dozen",
            "How much milk do they have now?|A. None|B. Some, but not much|C. A lot|D. Two bottles",
            "Which vegetable do they NOT have?|A. Potatoes|B. Carrots|C. Onions|D. Tomatoes",
            "How much rice do they have?|A. None|B. A little|C. Half a bag|D. Two bags",
            "How many mangoes will they buy?|A. Two|B. Three|C. Four|D. Five",
          ]),
          correctAnswer: "B,B,C,C,B",
          points: 5,
        },
        {
          type: "speaking",
          order: 5,
          content: `口语练习 / Speaking Practice

Task: Talk about a shopping trip (1 minute)

Think about a time you or your family went shopping (supermarket, market, mall). Talk about:
• Where you went
• What you bought (use some/any, much/many, a lot of, How many/How much)
• Did you buy many things or just a few?
• What did you like or not like about the trip?

Useful phrases (量词练习):
• We bought some... / We didn't buy any...
• We got a lot of vegetables / fruit / food
• I bought three... / two kilograms of... / a bottle of...
• There were many people / much noise
• How many bags did we carry? / How much money did we spend?
• We needed some... but we couldn't find any...

Grammar focus for AI:
AI will check if you correctly use some/any, much/many, and distinguish countable (apples, eggs, bottles) from uncountable nouns (rice, water, bread).

如何练习 / How to practise:
1. 想一次购物经历 (Think of a shopping trip)
2. 准备用量词的例子：some, any, much, many, a lot of (Prepare examples with quantifiers)
3. 点击下方"开始录音"按钮 (Tap "开始录音")
4. 说满1分钟 (Speak for 1 minute)
5. AI会评估量词和可数/不可数名词使用 (AI evaluates quantifiers and count/non-count nouns)`,
          points: 5,
        },
      ],
    },
    {
      level: "A2",
      weekNumber: 5,
      title: "Week 5: Sports Day",
      description: "Comparing people and things",
      isSample: false,
      dueDate: new Date("2026-09-17"),
      errorFocus: "comparatives-superlatives",
      parentBrief: "本周纠错焦点：比较级和最高级（bigger than / the biggest；more + 多音节形容词）。中文用「比」和「最」，孩子会说 more bigger、more cheap、he is tall than me。英语单音节形容词加 -er / -est：taller, tallest；多音节加 more / most：more difficult, most difficult。比较级后接 than：She is taller than me。本周作业会反复纠正这些高频错误。",
      videoUrl: null,
      kaizenFocus: "Use comparatives correctly (taller, more interesting, better than); superlatives (the tallest, the most interesting, the best)",
      officialClipId: null,
      officialClipCredit: null,
      questions: [
        {
          type: "reading",
          order: 1,
          content: `Read Mei's diary entry:

Sports Day at Bedok View Primary

Friday, 12 September

Today was the best day of the school year – our annual Sports Day! The weather was perfect. It was cooler than last week and sunnier than yesterday. The school field looked amazing with colourful flags and the big white tents.

I arrived early with Priya. She's my best friend and she's faster than most students in our class. We walked to the field together and found our class area. Our teacher, Ms Tan, was already there with a big box of water bottles and snacks.

The first event was the 100-metre sprint for Primary 5 girls. Priya was in this race! She was the tallest runner in her heat, and when the whistle blew, she was also the fastest. She finished first and got a gold medal. I was so proud of her! She said it was easier than she expected because she practised every evening this week.

After that, I had my event – the long jump. I was more nervous than Priya because I'm not as athletic as her. My first jump was 2.3 metres. My second jump was better – 2.5 metres. But the girl from Primary 5B was the best. Her jump was 2.8 metres, which was longer than everyone else's. She was also shorter than me, so I learned that height doesn't matter in long jump!

The most exciting event was the relay race. Each class chose four runners. Ms Tan picked the fastest students from our class. The race was closer than we thought. Our team ran well, but the other team was just a bit quicker. We came second, which was still good!

At lunchtime, we sat under the big tent and ate sandwiches. Ms Tan told us, "You all did better than last year. I'm very proud of you. Remember, the most important thing is not winning. It's trying your best and supporting your teammates."

The day ended with a prize-giving ceremony. The principal gave out medals and certificates. Priya got her gold medal for the 100-metre sprint. When she stood on the stage, her smile was bigger than ever!

On the way home, I said to Priya, "You're the fastest runner in the whole school!" She laughed and said, "Maybe in Primary 5, but the Primary 6 students are faster than me. And you were braver than you think – you did the long jump even though you were nervous!"

I think Sports Day is more fun than regular lessons. Next year, I want to be stronger and jump further. But today was already the most memorable day of this term!`,
          options: JSON.stringify([
            "How was the weather compared to last week?|A. Hotter|B. Rainier|C. Cooler|D. Windier",
            "What was Priya's result in the 100m sprint?|A. Second place|B. Third place|C. First place (gold medal)|D. She didn't finish",
            "How long was Mei's best long jump?|A. 2.3 metres|B. 2.5 metres|C. 2.8 metres|D. 3.0 metres",
            "Who jumped the furthest in the long jump?|A. Mei|B. Priya|C. A girl from Primary 5B|D. Ms Tan",
            "What position did Mei's class get in the relay race?|A. First|B. Second|C. Third|D. Fourth",
            "What did Ms Tan say was most important?|A. Winning gold medals|B. Being the fastest|C. Trying your best and supporting teammates|D. Beating the other classes",
            "Who is faster according to Priya?|A. Mei|B. Primary 5 students|C. Primary 6 students|D. Ms Tan",
            "What does Mei want to do next year?|A. Win gold|B. Be stronger and jump further|C. Run faster than Priya|D. Not do Sports Day",
          ]),
          correctAnswer: "C,C,B,C,B,C,C,B",
          points: 8,
        },
        {
          type: "grammar",
          order: 2,
          content: `Read about Sports Day at Tampines Primary. Choose the correct word for each gap.

Sports Day at Tampines Primary

by Jun Wei, Primary 5

Yesterday was our Sports Day. The weather was (1) ____ than last year – it was sunny but not too hot. Our school field is (2) ____ than many other schools, so we had lots of space for all the events.

I took part in two races. The first was the 100-metre sprint. I ran (3) ____ I could, but another boy was (4) ____ than me. He was (5) ____ runner in our year! I came third, which was (6) ____ than I expected.

The second race was the 400-metre run. This race was much (7) ____ than the sprint. My legs felt tired, but I kept going. At the end, I was (8) ____ than at the start! One girl from Primary 5C was (9) ____ runner of all. She finished the race (10) ____ than everyone else, but she still smiled and looked fresh!

The relay race was (11) ____ event of the day. All the students were shouting and cheering. It was (12) ____ than any PE lesson!

My friend Sarah did the long jump. She was nervous at first, but her third jump was (13) ____ than her first two jumps. She said, "Next year I'll train harder and jump even (14) ____!"

At the prize-giving ceremony, our principal said, "Today, everyone was (15) ____ winner. You all tried your best, and that's (16) ____ important thing." I think she was right. Sports Day was (17) ____ day of the whole term!`,
          options: JSON.stringify([
            "(1)|A. good|B. better|C. best|D. more good",
            "(2)|A. big|B. bigger|C. biggest|D. more big",
            "(3)|A. as fast as|B. faster|C. fastest|D. more fast",
            "(4)|A. quick|B. quicker|C. quickest|D. more quick",
            "(5)|A. the fast|B. the faster|C. the fastest|D. the most fast",
            "(6)|A. good|B. better|C. best|D. more better",
            "(7)|A. hard|B. harder|C. hardest|D. more hard",
            "(8)|A. tired|B. more tired|C. most tired|D. tireder",
            "(9)|A. the strong|B. the stronger|C. the strongest|D. the most strong",
            "(10)|A. quick|B. quicker|C. quickest|D. more quickly",
            "(11)|A. the exciting|B. the more exciting|C. the most exciting|D. the excitingest",
            "(12)|A. fun|B. more fun|C. most fun|D. funner",
            "(13)|A. far|B. further|C. furthest|D. more far",
            "(14)|A. far|B. further|C. furthest|D. more far",
            "(15)|A. a|B. the|C. an|D. some",
            "(16)|A. the more|B. the most|C. the|D. most",
            "(17)|A. the good|B. the better|C. the best|D. the most good",
          ]),
          correctAnswer: "B,B,A,B,C,B,B,B,C,D,C,B,B,B,A,B,C",
          points: 17,
        },
        {
          type: "writing",
          order: 3,
          content: `You receive this email from your English friend, Sam:

From: Sam
To: You
Subject: Sports at your school

Hi!

Thanks for your last email. I want to know about sports at your school! Do you have a Sports Day or sports events? What sports do you do? Who is the best at sports in your class? Tell me about it!

Write back soon!
Sam

Write your email to Sam (50-70 words). Answer ALL the questions.

成功标准 / Success Criteria:
✓ 回答所有3个问题 (Answer all 3 questions)
✓ 比较级 (Comparatives: faster than, better than, more exciting than)
✓ 最高级 (Superlatives: the fastest, the best, the most fun)
✓ 邮件格式 (Email format: Hi Sam, ... / Best, [your name])
✓ 50-70词 (50-70 words)`,
          points: 10,
        },
        {
          type: "listening",
          order: 4,
          content: `听读练习 / Listening Preparation (read carefully)

Ms Tan: Good morning, everyone! Listen carefully. Our Sports Day is next Friday. We'll meet at the school field at eight o'clock sharp. Don't be late!

You must wear your PE uniform – that's your house T-shirt, shorts, and sports shoes. Red House wears red T-shirts, Blue House wears blue, Yellow House wears yellow, and Green House wears green. Bring a water bottle and a cap because it will be sunny.

There are four events. First is the 100-metre sprint at nine o'clock. Then we have the long jump, the relay race, and the fun obstacle course. Parents can watch from the benches near the canteen.

After all the events, we'll have a prize-giving ceremony at twelve o'clock. The principal will give medals to the winners. But remember, the most important thing is to do your best and have fun!

If it rains heavily on Friday morning, Sports Day will move to next Monday. Check the school website on Thursday evening. Any questions?

Student 1: Ms Tan, I'm in Yellow House. Can I wear my yellow T-shirt from home?

Ms Tan: Yes, as long as it's your house colour. But make sure it's suitable for sports!

Student 2: What if I'm not good at running?

Ms Tan: That's okay! You can join the obstacle course – that's more about teamwork than speed. Everyone can take part in something!`,
          options: JSON.stringify([
            "When is Sports Day?|A. This Friday|B. Next Friday|C. Next Monday|D. Next Tuesday",
            "What time should students arrive?|A. 7:00|B. 7:30|C. 8:00|D. 9:00",
            "What must students bring?|A. Lunch box|B. Homework|C. Water bottle and cap|D. Tennis racket",
            "What is the first event?|A. Long jump|B. Relay race|C. 100-metre sprint|D. Obstacle course",
            "When will the principal give out medals?|A. At 9:00|B. At 10:00|C. At 11:00|D. At 12:00",
          ]),
          correctAnswer: "B,C,C,C,D",
          points: 5,
        },
        {
          type: "speaking",
          order: 5,
          content: `口语练习 / Speaking Practice

Task: Compare yourself and your classmates (1 minute)

Talk about sports or activities at your school. Use comparatives and superlatives.

Points to cover:
• What sports or activities you do (PE lessons, Sports Day, CCAs)
• Compare yourself to your friends or classmates (Who is faster? taller? better at...?)
• Use superlatives (Who is the best? the fastest? the most...)
• Say which activity you find easier or more difficult

Useful phrases (比较级和最高级):
• I am faster than... / slower than...
• My friend is taller than me / shorter than me
• She is the fastest runner in our class
• He is the best at football
• This game is easier than... / more difficult than...
• PE is more fun than... / less fun than...
• The most exciting event is...
• The hardest part is...

Grammar focus for AI:
AI will listen for correct use of comparatives (taller, faster, more difficult, better than) and superlatives (the tallest, the fastest, the most difficult, the best).

如何练习 / How to practise:
1. 想好要比较的人或事 (Think of people or things to compare)
2. 准备至少3个比较级和2个最高级 (Prepare at least 3 comparatives and 2 superlatives)
3. 点击下方"开始录音"按钮 (Tap "开始录音")
4. 说满1分钟 (Speak for 1 minute)
5. AI会评估比较级和最高级的使用 (AI will check comparatives and superlatives)`,
          points: 5,
        },
      ],
    },

    // Week 6: Prepositions of time (at/in/on)
    {
      level: "A2",
      weekNumber: 6,
      title: "Week 6: After School and Weekends",
      description: "Talking about daily routines and time",
      isSample: false,
      dueDate: new Date("2026-09-24"),
      errorFocus: "prepositions-time-at-in-on",
      parentBrief: "本周纠错焦点：时间介词 at / in / on。中文用「在」表达所有时间（在周一、在早上、在七点），孩子会说 in Monday、on morning、in 7 o'clock。英语规则：at + 钟点时间（at 7 o'clock, at night, at the weekend），in + 时段/月份/年份（in the morning, in July, in 2026），on + 星期/日期（on Monday, on 12 September）。本周作业会反复练习这三个介词的正确搭配。",
      videoUrl: null,
      kaizenFocus: "Use at for clock times and specific moments (at 7 o'clock, at night, at the weekend); in for parts of day, months, years (in the morning, in July); on for days and dates (on Monday, on 12 September)",
      officialClipId: "loINl3Ln6Ck",
      officialClipCredit: "片源 Super Simple Songs 官方频道。Days of the Week。本站不拥有该片，仅嵌入官方 YouTube。孩子先听 on Monday / on Tuesday，再练 at 7 o'clock / in the morning / on Monday。",
      questions: [
        {
          type: "reading",
          order: 1,
          content: `Read Mei's diary entry:

After School and Weekends at Bedok View

Monday, 15 September

This week I want to write about what we do after school and at the weekend. School finishes at 2 p.m. every day. Most students have CCAs (Co-Curricular Activities) in the afternoon.

On Monday, I have ballet CCA. It starts at 2:30 and finishes at 4 o'clock. I love ballet! In July, we had a performance at the school hall. My mum took lots of photos. She said I looked beautiful in my costume.

On Tuesday and Thursday, Priya has Art Club. She's really good at drawing. Last week, on Thursday afternoon, she showed me her painting of Marina Bay Sands. It was amazing! Her art teacher said she might win a prize in November.

On Wednesday, I go home early because I have piano lessons. My piano teacher, Miss Lim, comes to our flat at 4 o'clock. I've been learning piano since January 2025. My favourite pieces are the ones in the Grade 2 book. I practise every evening at 6 p.m., just before dinner.

Priya doesn't have CCA on Wednesday either. She usually does her homework in the afternoon, then goes to the library at Bedok Mall at 5 o'clock. Sometimes I go with her. We sit in the children's section and read books. The library closes at 9 p.m., but we always leave before dinner time.

On Friday, school feels different because the weekend is coming! On Friday afternoons, both of us are free. Sometimes we go to the playground near my block. Other times we just walk around the neighbourhood and talk. Last Friday, we bought bubble tea at 3:30 p.m. and sat at the void deck.

At the weekend, our families do different things. On Saturday morning, I usually have extra Maths tuition at 9 o'clock. It finishes at 11 a.m., then my dad takes me to lunch. In the afternoon, we might go to the supermarket or visit my grandparents. On Saturday evenings, we have a family dinner at home. My mum cooks something special.

On Sunday, we go to church in the morning. The service starts at 10 o'clock. After church, we sometimes go to East Coast Park. We cycle or have a picnic. Last month, in August, we went there three times! On Sunday afternoons, I do my homework and get ready for the new week.

Priya's family is different. On Saturday mornings, they sleep in! Priya told me they don't wake up until 10 a.m. at the weekend. In the afternoon, her family often goes to Little India or to Botanic Gardens. On Saturday nights, they have family movie time at 8 p.m.

On Sunday, Priya's dad makes a big breakfast at 11 a.m. (He calls it brunch!) Then, in the afternoon, Priya and her brother go to their grandparents' flat. They stay there until 6 p.m. Priya's grandmother teaches her to cook Indian dishes. Last Sunday, they made samosas!

I think weekdays and weekends are both nice. On weekdays, I see my friends at school and do my CCAs. At the weekend, I spend time with my family. I'm always busy, but I like it that way. Next month, in October, we have a school holiday. I'm already looking forward to it!`,
          options: JSON.stringify([
            "What time does school finish every day?|A. At 1 p.m.|B. At 2 p.m.|C. At 3 p.m.|D. At 4 p.m.",
            "When does Mei have ballet CCA?|A. On Monday|B. On Tuesday|C. On Wednesday|D. On Friday",
            "What time does Mei's piano lesson start?|A. At 2:30|B. At 3 o'clock|C. At 4 o'clock|D. At 6 p.m.",
            "When has Mei been learning piano?|A. Since June 2025|B. Since July 2025|C. Since January 2025|D. Since November 2025",
            "What does Priya do on Wednesday afternoon?|A. Art Club|B. Ballet|C. Homework and library|D. Piano lesson",
            "When does Mei have extra Maths tuition?|A. On Friday afternoon|B. On Saturday morning|C. On Sunday morning|D. On Monday evening",
            "What time does church start on Sunday?|A. At 9 o'clock|B. At 10 o'clock|C. At 11 a.m.|D. At 8 p.m.",
            "When does Priya's family have movie time?|A. On Friday night|B. On Saturday morning|C. On Saturday night at 8 p.m.|D. On Sunday afternoon",
          ]),
          correctAnswer: "B,A,C,C,C,B,B,C",
          points: 8,
        },
        {
          type: "grammar",
          order: 2,
          content: `Read the text below and choose the correct word for each gap.

My Week
by Jun Wei, Primary 5

I'm very busy every week! (1) ____ weekdays, I wake up (2) ____ 6:30 in the morning. School starts (3) ____ 7:30, so I can't be late. (4) ____ Monday and Wednesday, I have football training in the afternoon. Our big match is (5) ____ 20 September! (6) ____ the weekend, my family spends time together. We went to the Science Centre last month in August.`,
          options: JSON.stringify([
            "(1)|A. In|B. On|C. At",
            "(2)|A. in|B. on|C. at",
            "(3)|A. in|B. on|C. at",
            "(4)|A. In|B. On|C. At",
            "(5)|A. in|B. on|C. at",
            "(6)|A. In|B. On|C. At",
          ]),
          correctAnswer: "B,C,C,B,B,C",
          points: 6,
        },
        {
          type: "writing",
          order: 3,
          content: `You receive this email from your English friend, Alex:

From: Alex
To: You
Subject: After school and weekends

Hi!

I want to know about your life in Singapore! What do you do after school finishes? Do you have any activities or hobbies? What about weekends – do you do anything special on Saturday or Sunday? Tell me all about it!

Write back soon!
Alex

Write your email to Alex (50-70 words). Answer ALL the questions.

成功标准 / Success Criteria:
✓ 回答所有3个问题 (Answer all 3 questions)
✓ 时间介词 at (Use at for clock times: at 7 o'clock, at night, at the weekend)
✓ 时间介词 in (Use in for parts of day, months, years: in the morning, in July)
✓ 时间介词 on (Use on for days and dates: on Monday, on 15 September)
✓ 邮件格式 (Email format: Hi Alex, ... / Best, [your name])
✓ 50-70词 (50-70 words)`,
          points: 10,
        },
        {
          type: "listening",
          order: 4,
          content: `听读练习 / Listening Preparation (read carefully)

Mei: Hi Priya! What are your plans for this weekend?

Priya: Hi Mei! On Saturday morning, I have art class at 10 o'clock. It's at the community centre near my flat.

Mei: That sounds fun! What will you do after that?

Priya: In the afternoon, my mum and I are going to the library. We usually go there on Saturday afternoons. Then, at night, my family will watch a movie at home. We always have movie night on Saturdays at 8 p.m.

Mei: Nice! What about Sunday?

Priya: On Sunday, we're going to Gardens by the Bay! We'll leave in the morning, at about 9:30. We're meeting my cousins there. Have you been there?

Mei: Yes! I went there in August with my family. It was beautiful! What time will you come back?

Priya: Probably in the evening, at around 6 o'clock. Then I need to finish my homework at night before Monday. What about you? What will you do at the weekend?

Mei: On Saturday, I have piano practice at 2 p.m. Then, on Sunday morning, I'm going to church with my family at 10 o'clock. In the afternoon, we might go to East Coast Park.

Priya: That's nice! I love East Coast Park. Maybe we can go there together in October, during the school holiday?

Mei: Yes! That would be great! Let's plan it next week.`,
          options: JSON.stringify([
            "When is Priya's art class on Saturday?|A. At 9 o'clock|B. At 10 o'clock|C. At 2 p.m.|D. At 8 p.m.",
            "When does Priya go to the library?|A. On Friday afternoon|B. On Saturday morning|C. On Saturday afternoon|D. On Sunday morning",
            "What time is Priya's family movie night?|A. At 6 o'clock|B. At 7 p.m.|C. At 8 p.m.|D. At 9:30",
            "When are Priya and her family going to Gardens by the Bay?|A. On Saturday|B. On Sunday morning|C. On Sunday afternoon|D. On Monday",
            "When did Mei visit Gardens by the Bay?|A. In July|B. In August|C. In September|D. In October",
          ]),
          correctAnswer: "B,C,C,B,B",
          points: 5,
        },
        {
          type: "speaking",
          order: 5,
          content: `口语练习 / Speaking Practice

Task: Talk about your daily routine and weekend activities (1 minute)

Talk about what you do after school and at the weekend. Use time prepositions (at / in / on).

Points to cover:
• What time school finishes (at...)
• What you do in the afternoon after school
• Activities you do on specific days (on Monday, on Tuesday...)
• What you do at the weekend (on Saturday, on Sunday)
• Times of your activities (at 4 o'clock, in the morning...)

Useful phrases (时间介词 at/in/on):
• School finishes at 2 p.m.
• I have CCA on Monday / on Tuesday
• I go to piano lessons at 4 o'clock
• In the afternoon, I...
• At the weekend, I...
• On Saturday morning, I...
• On Sunday, my family...
• In the evening, I do my homework
• I go to bed at 9 o'clock at night
• In July / In 2026 we will...

Grammar focus for AI:
AI will listen for correct use of time prepositions: at (clock times, night, weekend), in (parts of day, months, years), on (days and dates).

如何练习 / How to practise:
1. 想好一周的安排 (Think about your weekly schedule)
2. 准备至少5个时间介词句子 (Prepare at least 5 sentences with time prepositions)
3. 点击下方"开始录音"按钮 (Tap "开始录音")
4. 说满1分钟 (Speak for 1 minute)
5. AI会评估时间介词 at/in/on 的使用 (AI will check your use of at/in/on)`,
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

(1) ____ to Gardens by the Bay? I went last Friday with my school and it was amazing! I (2) ____ there once before with my parents, but this learning journey was (3) ____ than that family visit. Our guide showed us the Cloud Forest – (4) ____ inside a Cloud Forest Dome? The plants were (5) ____ than I expected, and some were (6) ____ than a tall person! 

The most interesting part was learning about the Supertrees. They're (7) ____ impressive than ordinary trees because they collect rainwater and make solar power. Our teacher said Singapore's gardens are (8) ____ creative than gardens in many other cities. After the trip, I felt (9) ____ interested in environmental science than before. (10) ____ thought about gardens this way?

I'd love to go back again!

Rachel`,
          options: JSON.stringify([
            "(1)|A. Do you ever go|B. Did you ever go|C. Have you ever been|D. Are you ever going",
            "(2)|A. visit|B. visited|C. am visiting|D. have been",
            "(3)|A. educational|B. more educational|C. most educational|D. educationaler",
            "(4)|A. Do you ever walk|B. Did you ever walk|C. Have you ever walked|D. Are you ever walking",
            "(5)|A. more beautiful|B. most beautiful|C. beautifuler|D. beautiful",
            "(6)|A. tall|B. taller|C. tallest|D. more tall",
            "(7)|A. much|B. many|C. more|D. most",
            "(8)|A. more|B. most|C. many|D. much",
            "(9)|A. much|B. more|C. most|D. many",
            "(10)|A. Do you ever|B. Did you ever|C. Have you ever|D. Are you ever",
          ]),
          correctAnswer: "C,D,B,C,A,B,C,A,B,C",
          points: 10,
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
      parentBrief: "本周纠错焦点：第一条件句（If + 现在式, will/must/can...）和动名词（enjoy/like + -ing，介词后 + -ing）。中文条件句不变形，孩子会说 If you bring phone, must...（缺主句主语或助动词）。还有典型化石化：enjoy to use（应该是 enjoy using），good at learn（应该是 good at learning）。本周作业会反复训练这两个难点。",
      videoUrl: null,
      kaizenFocus: "If + present, will/must (1st conditional); enjoy/like + -ing, preposition + -ing",
      officialClipId: "dVrHLZtvr5g",
      officialClipCredit: "片源 gov.sg 官方频道。Real or Fake: Disinformation。本站不拥有该片，仅嵌入官方 YouTube。孩子先看 how to check real or fake，再练 If you see a message, you should… 和 enjoy checking / good at spotting。",
      questions: [
        {
          type: "reading",
          order: 1,
          content: `Read this guide:

Using Technology at Westwood Secondary School – Student Guide 2026

At Westwood Secondary, we believe technology can help learning when used responsibly. This guide explains our school's technology rules and the Student Learning Space (SLS) platform.

Personal Devices Policy

Students may bring phones and tablets to school. If you bring a personal device, you must switch it off and store it in your locker before 7:30 am. If you forget to switch off your phone and it rings during a lesson, your teacher will keep it until the end of the school day. If this happens three times in one term, your parents will be called for a meeting.

During recess and after school, you may use your device in designated areas only: the canteen, the school courtyard, and the library ground floor. If you use your phone in corridors or staircases, a teacher will remind you to put it away. We made this rule because students were walking while looking at screens and several minor accidents happened last year.

Student Learning Space (SLS)

All students have an SLS account. If you log in to SLS regularly, you will find your homework assignments, revision materials, and announcements from your teachers. Most teachers post homework on SLS by 6 pm, so if you check the platform after dinner, you won't miss any deadlines.

The SLS app is available on phones and tablets. Many students enjoy using the app because it sends notifications when teachers post new assignments. However, you are responsible for checking SLS yourself – if you miss an assignment because you didn't check, you will still receive a zero for that task.

SLS also includes interactive videos and quizzes. If you spend fifteen minutes daily on the practice quizzes, you will improve your exam readiness. Students who are good at managing their time find SLS very helpful. Those who struggle with self-discipline sometimes spend too much time on non-academic apps instead.

Charging Stations

If you need to charge your device, use one of the charging stations in the library or the student lounge. If you bring your own charging cable and adapter, you can charge your device there during recess or after school. Please don't charge devices in classrooms – we don't have enough power points, and trailing cables can be dangerous.

Need Help?

If you have problems logging in to SLS or accessing materials, visit the IT Help Desk in the library every Monday and Wednesday after school. Our student IT helpers are good at solving common problems. For more serious technical issues, email ithelpdesk@westwood.edu.sg and the ICT coordinator will reply within two working days.

Remember: technology is a tool to help you learn. If you use it wisely, you will succeed. If you waste time on distractions, you will fall behind. The choice is yours.`,
          options: JSON.stringify([
            "What must students do if they bring a phone?|A. Leave it at home|B. Give it to the teacher|C. Switch it off and store it in their locker by 7:30 am|D. Use it only during lessons",
            "What happens if your phone rings during a lesson?|A. Nothing|B. You get detention immediately|C. The teacher keeps it until the end of the day|D. Your parents come to school",
            "Where can students use phones during recess?|A. Anywhere in school|B. Only in classrooms|C. In the canteen, courtyard, and library ground floor|D. Only in the principal's office",
            "Why did the school make rules about phones in corridors?|A. To save electricity|B. Because accidents happened when students walked while looking at screens|C. Because phones are too expensive|D. Because parents complained",
            "When do most teachers post homework on SLS?|A. At 6 am|B. During lessons|C. By 6 pm|D. At midnight",
            "What will happen if you spend 15 minutes daily on SLS practice quizzes?|A. You will get detention|B. You will improve your exam readiness|C. You will lose marks|D. You will be punished",
            "Where can students charge devices?|A. In any classroom|B. In the charging stations in the library or student lounge|C. In the canteen|D. In the staff room",
            "What does the guide say about technology?|A. It's dangerous|B. It's banned|C. It's a tool; if you use it wisely you will succeed|D. Only teachers can use it",
          ]),
          correctAnswer: "C,C,C,B,C,B,B,C",
          points: 8,
        },
        {
          type: "grammar",
          order: 2,
          content: `Choose the correct word for each gap:

My Experience with Student Learning Space

I started using the Student Learning Space (SLS) platform last year. At first, I wasn't very (1) ____ at navigating the website, but now I find it easy. If you (2) ____ in regularly, you will quickly become familiar with all the features.

I really enjoy (3) ____ the interactive videos. They make difficult topics easier to understand. My Science teacher posts quizzes every week, and if you (4) ____ them on time, you will see your scores improve. I'm particularly interested (5) ____ learning through videos rather than just reading textbooks.

One useful tip: if you (6) ____ problems logging in, don't wait – report it to the IT Help Desk immediately. Last month I had trouble accessing my account, and the IT helpers were very good (7) ____ solving the issue quickly. They finished (8) ____ the problem in just ten minutes, and I could access my homework again.`,
          options: JSON.stringify([
            "(1)|A. good|B. well|C. better|D. best",
            "(2)|A. logs|B. log|C. logging|D. logged",
            "(3)|A. watch|B. to watch|C. watched|D. watching",
            "(4)|A. complete|B. completes|C. completing|D. completed",
            "(5)|A. at|B. on|C. in|D. for",
            "(6)|A. have|B. has|C. having|D. had",
            "(7)|A. in|B. on|C. at|D. for",
            "(8)|A. fix|B. fixed|C. fixing|D. to fix",
          ]),
          correctAnswer: "A,B,D,A,C,A,C,C",
          points: 8,
        },
        {
          type: "writing",
          order: 3,
          content: `Write an email to a friend in another school (100-120 words).

Your friend asks about using technology to learn English. Write about your experience with apps, websites, or platforms like SLS.

Include:
• What technology you use for learning English
• What you enjoy about using it
• Give advice using "If you..."
• Suggest they try something

成功标准 / Success Criteria:
✓ 友好语气 (Friendly tone: Hi / Dear...)
✓ 动名词 (Gerunds: I enjoy using... / I'm good at learning... / interested in watching...)
✓ 第一条件句 (First conditional: If you try this app, you will... / If you use it daily, you will see...)
✓ 具体例子 (Specific examples: app names, features, results)
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

Task: Technology for Learning English (2 minutes)

Talk about how you use technology to learn English. Discuss:
• What apps, websites, or platforms you use (e.g. SLS, YouTube, language apps)
• What you enjoy about using them
• Give advice: "If you want to improve... you should try..."
• What you're good at learning through technology

Focus on using:
• Gerunds: "I enjoy watching...", "I'm good at learning by...", "I'm interested in..."
• First conditional: "If you use this app daily, you will...", "If you try this website, you will see..."

Useful phrases:
• I enjoy using... because...
• I'm good at learning through...
• I'm interested in watching/reading...
• If you want to improve your..., you should try...
• If you use this regularly, you will notice...
• One thing I really like about... is...

如何练习 / How to practise:
1. 想想你真正用过的工具 (Think of tools you actually use)
2. 准备至少3个动名词例子 (Prepare at least 3 gerund examples)
3. 准备至少2个第一条件句 (Prepare at least 2 first conditional sentences)
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
    {
      level: "B1",
      weekNumber: 4,
      title: "Week 4: School Updates",
      description: "Reporting what people said",
      isSample: false,
      dueDate: new Date("2026-09-10"),
      errorFocus: "reported-speech",
      parentBrief: "本周纠错焦点：间接引语（reported speech）——said/told + 时态后移。孩子会说 He said me that...（应该是 told me）、He said he will go（应该是 would go，时态要后移）、She told that...（漏掉宾语，应该是 told me that）。英语间接引语要 say + (that)，tell + 人 + (that)，主句过去式时从句时态后移：will → would, can → could。本周作业会反复练习这三个高危点。",
      videoUrl: null,
      kaizenFocus: "said (that) vs told sb (that); tense backshift in reported speech (will→would, can→could)",
      officialClipId: "xF_Q2anYOfc",
      officialClipCredit: "片源 Cambridge English 官方频道，B1 Preliminary for Schools 口语样例。本站与剑桥无隶属。孩子先听两人怎么说，再练 she said / he told us。",
      questions: [
        {
          type: "reading",
          order: 1,
          content: `Read this article:

The Message Chain

Last Monday morning started normally – until I opened my phone at the school gate. My classmate Jun Wei had sent an urgent message in our class group chat at 6:45 a.m.: "Ms Tan said we should bring our Science textbooks today. She told me that the lab session has been moved to period two."

I panicked. My Science textbook was still on my desk at home! I quickly messaged my mum, explaining the situation. She replied that she could bring it during her lunch break, but that meant I wouldn't have it for the morning lab.

When I reached our classroom, my friend Priya asked what was wrong. I told her that Ms Tan had said we needed Science textbooks, and that I'd forgotten mine at home. Priya looked confused. "Ms Tan? But she's away today. Mr Lim is covering our Science lesson."

At assembly, our form teacher Ms Chen made an announcement. She said that some students had been spreading incorrect information about today's timetable. She explained that Ms Tan had told her on Friday that Monday's lab session was cancelled because the equipment was being serviced. She added that students should always check the official class noticeboard, not rely on group chat messages.

After assembly, Jun Wei apologised. He admitted that he'd misunderstood a message from another student. He said he thought Ms Tan had told that student about the lab change, but he'd got it wrong. Jun Wei explained that the original message actually said the lab was cancelled, not moved. He felt terrible about causing confusion.

During recess, our class prefect reminded everyone that Ms Chen had told us last term to verify information before sharing it. She said that spreading unverified news caused unnecessary stress. Several classmates agreed and suggested that only prefects should post timetable changes in the group chat.

At the end of the day, Jun Wei posted a proper apology. He said he would be more careful in future. Ms Chen told him that everyone makes mistakes, but that he should remember to double-check facts before sharing them. She added that clear communication was especially important in a school environment where changes can affect many people.

I called my mum after school and told her that the whole thing had been a false alarm. She said she was glad I didn't actually need the textbook, but reminded me to keep a checklist so I wouldn't forget things in future. She was right – a bit of organisation would save a lot of stress.`,
          options: JSON.stringify([
            "What did Jun Wei's message say?|A. The lab was cancelled|B. Ms Tan said to bring Science textbooks|C. Mr Lim was absent|D. School starts early",
            "Who told the writer that Ms Tan was away?|A. Jun Wei|B. Priya|C. Ms Chen|D. Mr Lim",
            "What did Ms Chen say about Ms Tan's message?|A. It was correct|B. Ms Tan had told her the lab was cancelled|C. Ms Tan would return tomorrow|D. The lab was moved to period two",
            "Why was the lab cancelled?|A. Ms Tan was sick|B. Students didn't bring textbooks|C. The equipment was being serviced|D. The school was closed",
            "What did Jun Wei admit?|A. He deliberately lied|B. He misunderstood a message|C. He never saw the noticeboard|D. He lost his textbook",
            "What did the class prefect say Ms Chen had told them?|A. To ignore group chats|B. To verify information before sharing it|C. To arrive early|D. To buy new textbooks",
            "Who suggested that only prefects should post timetable changes?|A. Ms Chen|B. Jun Wei|C. Several classmates|D. The writer's mum",
            "What did the writer's mum remind her about?|A. Checking group chats|B. Arriving on time|C. Keeping a checklist|D. Apologising to Jun Wei",
          ]),
          correctAnswer: "B,B,B,C,B,B,C,C",
          points: 8,
        },
        {
          type: "grammar",
          order: 2,
          content: `Choose the correct word for each gap:

Reporting What Others Said

Yesterday, my friend Ethan (1) ____ that he was feeling nervous about the upcoming Maths test. He (2) ____ me that he hadn't understood the last two chapters. I told him that I (3) ____ help him revise after school.

Later, our Maths teacher Mr Lee made an announcement. He (4) ____ us that the test date had been changed to next Friday instead of this Wednesday. He explained that several students (5) ____ him they needed more time to prepare. He added that everyone (6) ____ use the extra week wisely.

After class, I met Priya in the canteen. She asked what Mr Lee (7) ____. I told her that he (8) ____ the test would be next Friday now. She said she (9) ____ relieved because she could study more. I (10) ____ her that Ethan and I were planning a study session, and she said she (11) ____ join us.

This morning, Ethan sent me a message. He said he (12) ____ to thank me for offering to help. He added that he now (13) ____ more confident about the test. I replied that I was happy to help, and reminded him that we (14) ____ meet in the library after school today.`,
          options: JSON.stringify([
            "(1)|A. said|B. told|C. said me|D. told to me",
            "(2)|A. said|B. said me|C. told|D. told to",
            "(3)|A. can|B. could|C. will|D. would",
            "(4)|A. said|B. said us|C. told|D. told to us",
            "(5)|A. had told|B. has told|C. told|D. tells",
            "(6)|A. can|B. should|C. shall|D. may",
            "(7)|A. has said|B. had said|C. says|D. said",
            "(8)|A. has said|B. had said|C. says|D. said",
            "(9)|A. is|B. was|C. will be|D. would be",
            "(10)|A. said|B. said her|C. told|D. told to her",
            "(11)|A. will|B. would|C. can|D. could",
            "(12)|A. wanted|B. wants|C. will want|D. want",
            "(13)|A. feels|B. felt|C. will feel|D. has felt",
            "(14)|A. will|B. shall|C. should|D. would",
          ]),
          correctAnswer: "A,C,B,C,A,B,B,B,B,C,B,A,B,D",
          points: 14,
        },
        {
          type: "writing",
          order: 3,
          content: `Write an email to your English friend (100-120 words).

Your friend missed last week's classes. Write an email telling them what the teacher and classmates said about homework, tests, and any important announcements.

In your email:
• Report what your teacher said about homework or tests
• Tell them what a classmate said about a class activity
• Explain any important information someone told you to pass on

成功标准 / Success Criteria:
✓ 间接引语 (Reported speech: said (that), told sb (that))
✓ 时态后移 (Tense backshift: will → would, can → could, is → was)
✓ 准确区分 said 和 told (Use "said (that)" and "told sb (that)" correctly)
✓ 邮件格式 (Email format: greeting, clear paragraphs, closing)
✓ 100-120词 (100-120 words)`,
          points: 10,
        },
        {
          type: "listening",
          order: 4,
          content: `听读练习 / Listening Preparation

[At the school canteen after morning assembly]

Mei: Hi Priya! Did you hear what Ms Chen said in assembly this morning?

Priya: Not really – I was standing at the back and couldn't hear clearly. What did she say?

Mei: She said that the school library would be closed next week for renovations. She told us that we should borrow any books we need before Friday.

Priya: Oh no! I need to finish my History project. Did she say when the library would reopen?

Mei: Yes, she said it would reopen on the fifteenth of next month. She also told us that we could use the public library near Bedok MRT if we needed to.

Priya: That's helpful. Did she mention anything else?

Mei: She said the canteen would have new operating hours from next Monday. She told us that breakfast would start at seven instead of seven-thirty, but lunch would still be at the usual time.

Priya: Great! That means I can grab something before my early class. Thanks for letting me know!`,
          options: JSON.stringify([
            "What did Ms Chen say about the library?|A. It would close permanently|B. It would be closed next week for renovations|C. It was already closed|D. It would open earlier",
            "What did Ms Chen tell students to do before Friday?|A. Return all books|B. Pay library fees|C. Borrow any books they need|D. Clean the library",
            "When did Ms Chen say the library would reopen?|A. Next Friday|B. Next Monday|C. On the fifteenth of next month|D. In two weeks",
            "Where did Ms Chen say students could go if they needed to?|A. School computer lab|B. Public library near Bedok MRT|C. Community centre|D. Another school",
            "What did Ms Chen say about breakfast time?|A. It would start at seven|B. It would start at seven-thirty|C. It would be cancelled|D. It would end earlier",
          ]),
          correctAnswer: "B,C,C,B,A",
          points: 5,
          audioUrl: null,
        },
        {
          type: "speaking",
          order: 5,
          content: `口语练习 / Speaking Practice

Task: Report some school news (about 1 minute)

Think of a recent situation where someone told you important information at school (a teacher, a friend, a prefect, etc.). Report what they said using reported speech.

Talk about:
• Who told you the information
• What they said (remember to backshift: will → would, can → could)
• Why the information was important
• What you did after hearing it

You MUST use:
✓ Reported speech with "said (that)" and "told sb (that)"
✓ Tense backshift (She said she would..., He told me he could...)
✓ Do NOT say "He said me" or "She told that" (common errors!)

Useful phrases:
• My teacher said that...
• She told me that...
• He explained that the test would be...
• They said they could...
• The prefect told us that we should...
• After she said that, I...

如何练习 / How to practise:
1. 想一个真实例子（老师说的话、同学告诉你的消息）(Think of a real example)
2. 记住：said + that, told + 人 + that (Remember: said (that), told sb (that))
3. 点击"开始录音"，说1分钟 (Tap "开始录音", speak for 1 minute)
4. 提交给AI，AI会盯住 said/told 的正确用法和时态后移 (Submit to AI - AI checks said/told usage and tense backshift)
5. 查看反馈后可再录一次 (Check feedback and re-record)`,
          points: 5,
        },
      ],
    },
    {
      level: "B1",
      weekNumber: 5,
      title: "Week 5: Describing People",
      description: "Using relative clauses who/which/that",
      isSample: false,
      dueDate: new Date("2026-09-17"),
      errorFocus: "relative-clauses-who-which-that",
      parentBrief: "本周纠错焦点：定语从句（relative clauses）——关系代词 who / which / that。孩子会说 The girl sits next to me is Priya（漏关系代词）、the book who I read（人物混用，book 应该用 which）、the teacher which helps me（teacher 是人应该用 who）。英语定语从句必须用关系代词连接：先行词是人用 who / that，先行词是物用 which / that。本周作业会反复练习这个高危点。",
      videoUrl: null,
      kaizenFocus: "who for people, which for things, that for both (defining relative clauses)",
      officialClipId: null,
      officialClipCredit: null,
      questions: [
        {
          type: "reading",
          order: 1,
          content: `Read this article:

The Mix-Up

Last Wednesday, our form teacher Ms Tan made an announcement that changed our lunch break completely. She said that a new student who had just transferred from another school would be joining our class. His name was Wei Han, and he would arrive on Thursday.

Priya, who always likes to make new friends, was excited. "I hope he's friendly!" she whispered to me during Science. I nodded, but I was more worried about my History presentation that afternoon.

On Thursday morning, Wei Han walked into our classroom. He was the boy who had been standing nervously outside the staff room earlier. Ms Tan introduced him and asked Priya to show him around during recess. Mei, who sits next to Priya, offered to help too.

At recess, I saw them at the canteen. Wei Han was eating chicken rice, which is the most popular dish at our school. Priya and Mei were asking him questions about his old school. He seemed quiet but friendly – exactly the kind of person who listens more than he talks.

After recess, we had English with Ms Lee, who is the teacher that everyone respects. She asked Wei Han to introduce himself. He stood up nervously. "I'm Wei Han, and I come from a school that's near Bedok," he began. "My favourite subject is History, which I find really interesting. I like reading books that explain how ancient civilisations worked."

Jun Wei, who sits behind me, leaned forward and whispered, "Did he say History? But didn't someone say he hated History?" I frowned. I hadn't heard that.

At lunch, a rumour started spreading. Someone said Wei Han was the student who had failed History at his old school and that's why he transferred. Priya looked confused. "But he just said History is his favourite subject!" she protested.

By the end of the day, the rumour had grown. Some students were saying Wei Han was the boy who had been expelled for copying History homework. Others claimed he was the student who had argued with his History teacher. The stories, which were obviously exaggerated, kept getting worse.

That evening, I saw a message in our class group chat. It was from Jun Wei: "Sorry everyone! I think I started a misunderstanding. I heard someone say 'Wei Han' and 'History' and assumed it was the new student. But actually, they were talking about someone else called Wei Hao who used to go to my primary school. Wei Han is NOT that person. I apologise for the confusion."

The next morning, Priya walked straight up to Wei Han and apologised on behalf of the class. She explained what had happened and said we all felt terrible about the rumour. Wei Han, who had heard some of the gossip, smiled kindly. "It's okay. Mistakes happen," he said. "The important thing is that you checked and corrected it."

Ms Tan, who had found out about the incident, used it as a teaching moment. "This is why we don't spread information that we haven't verified," she reminded us during morning assembly. "A person's reputation is something which can be damaged by careless words."

Since then, Wei Han has become good friends with Priya, Mei, and Jun Wei. He's now the classmate who always brings interesting History articles to share. And Jun Wei? He's the person who learned to double-check information before speaking – a lesson which has made him much more careful about what he says.`,
          options: JSON.stringify([
            "What did Ms Tan say about the new student?|A. He would arrive next week|B. His name was Wei Han and he'd join on Thursday|C. He was from Bedok Primary|D. He didn't like History",
            "Who offered to help Priya show Wei Han around?|A. Ms Tan|B. Jun Wei|C. Mei|D. Ms Lee",
            "What subject did Wei Han say was his favourite?|A. English|B. Science|C. History|D. Mathematics",
            "What was the rumour about Wei Han?|A. He loved History|B. He was a teacher's son|C. He had failed or been expelled because of History|D. He was moving away",
            "Who started the misunderstanding?|A. Priya|B. Mei|C. Jun Wei|D. Ms Lee",
            "What did Jun Wei confuse?|A. Wei Han with Wei Hao|B. History with Geography|C. Two different teachers|D. Two different schools",
            "Who apologised to Wei Han the next morning?|A. Ms Tan|B. Jun Wei|C. Priya on behalf of the class|D. Ms Lee",
            "What lesson did Ms Tan teach about the incident?|A. Don't trust new students|B. Don't spread unverified information|C. Always ask teachers first|D. Don't use group chats",
          ]),
          correctAnswer: "B,C,C,C,C,A,C,B",
          points: 8,
        },
        {
          type: "grammar",
          order: 2,
          content: `Choose the correct word for each gap:

The New Librarian

Yesterday, our school welcomed a new librarian (1) ____ will be working in the library every afternoon. Her name is Ms Indira. She's the person (2) ____ replaced Mr Chen, (3) ____ retired last month after twenty years of service.

Ms Indira comes from India, and she has a degree in Library Science, (4) ____ is quite rare in Singapore. She's someone (5) ____ really loves books and wants to help students find materials (6) ____ they need for their projects.`,
          options: JSON.stringify([
            "(1)|A. which|B. who|C. what|D. whose",
            "(2)|A. which|B. what|C. who|D. whom",
            "(3)|A. which|B. who|C. what|D. whose",
            "(4)|A. which|B. who|C. what|D. that",
            "(5)|A. which|B. what|C. who|D. whose",
            "(6)|A. who|B. which|C. what|D. whose",
          ]),
          correctAnswer: "B,C,B,A,C,B",
          points: 6,
        },
        {
          type: "writing",
          order: 3,
          content: `Write an email to your English friend (100-120 words).

Your friend is coming to visit your school next month. Write an email describing a classmate or teacher you think they should meet.

In your email:
• Introduce the person and say why they're special
• Describe something they do or a subject they're good at
• Explain why you think your friend would like them

You MUST use relative clauses (who/which/that) to give more information.

成功标准 / Success Criteria:
✓ 定语从句 (Relative clauses: who for people, which/that for things)
✓ 定语从句位置正确 (Relative clauses placed right after the noun they describe)
✓ 区分人物用词 (Use who/that for people, which/that for things - don't mix)
✓ 邮件格式 (Email format: greeting, clear paragraphs, closing)
✓ 100-120词 (100-120 words)`,
          points: 10,
        },
        {
          type: "listening",
          order: 4,
          content: `听读练习 / Listening Preparation

[In the school library – group project discussion]

Mei: Hi Priya! Thanks for coming. We need to organise our Science project team.

Priya: No problem. So we have four people in total, right? You, me, Jun Wei, and that new student who just joined our class last week – what's his name?

Mei: Wei Han. He's the one who said he's good at research. I think he should handle the research part – you know, finding the articles and information that we need.

Priya: Good idea. And I can do the presentation slides. I have that software which makes really nice graphics.

Mei: Perfect. Jun Wei is the person who's best at explaining things clearly, so he should be our main speaker.

Priya: What about you?

Mei: I'll coordinate everything and write the script. I'm good at organising the parts that everyone writes.

Priya: When's our deadline?

Mei: Ms Tan said it's the project which is due on the twenty-third of next month. That gives us four weeks.

Priya: We should meet every Tuesday after school. The library has study rooms that we can book.

Mei: Great idea. I'll message the boys now.`,
          options: JSON.stringify([
            "How many people are in the project team?|A. Two|B. Three|C. Four|D. Five",
            "What will Wei Han do?|A. Make slides|B. Handle research|C. Be the main speaker|D. Write the script",
            "What is Priya good at?|A. Research|B. Speaking|C. Making presentation slides|D. Coordinating",
            "What is Jun Wei best at?|A. Research|B. Explaining things clearly|C. Making graphics|D. Writing",
            "When is the project due?|A. Next week|B. In two weeks|C. On the 23rd of next month|D. On the 13th of next month",
          ]),
          correctAnswer: "C,B,C,B,C",
          points: 5,
          audioUrl: null,
        },
        {
          type: "speaking",
          order: 5,
          content: `口语练习 / Speaking Practice

Task: Talk about a person you know well (about 1 minute)

Describe a classmate, teacher, or friend using relative clauses.

Talk about:
• Who the person is and how you know them
• What they do or what they're good at (use relative clauses)
• Why you like or respect them
• Something interesting about them

You MUST use relative clauses:
✓ who / that for people (She's the teacher who helped me...)
✓ which / that for things (She teaches a subject which I love...)

Useful phrases:
• He's / She's the person who...
• He's / She's someone who...
• He's / She's the student that...
• I know someone who...
• He has a skill which...
• She teaches a subject that...

如何练习 / How to practise:
1. 选择一个你认识的人 (Choose a person you know)
2. 准备至少 2 个定语从句 (Prepare at least 2 relative clauses)
3. 点击"开始录音"，说满1分钟 (Tap "开始录音", speak for 1 minute)
4. 提交给AI，AI会盯住关系代词 who/which/that 的使用 (Submit to AI - AI checks who/which/that usage)
5. 查看反馈后可再录一次 (Check feedback and re-record)`,
          points: 5,
        },
      ],
    },
    {
      level: "B1",
      weekNumber: 6,
      title: "Week 6: When We Were Younger",
      description: "Talking about past habits with used to",
      isSample: false,
      dueDate: new Date("2026-10-08"),
      errorFocus: "used-to-past-habits",
      parentBrief: "本周纠错焦点：used to 表示过去习惯。中文用「以前…」不变形，孩子会说 I use to walk to school（漏 d）、I used go home（漏 to）、I didn't used to like rice（否定时 used 不该带 d）、I am used to swim（混淆 be used to + -ing）。英语规则：used to + 动词原形表示过去常做（现在不做了）；否定是 didn't use to + 动词原形（use 不带 d）。本周只教 used to 表过去习惯，不教 be used to + -ing（习惯于）。",
      videoUrl: null,
      kaizenFocus: "Use used to + infinitive for past habits and states; didn't use to + infinitive for the negative",
      officialClipId: null,
      questions: [
        {
          type: "reading",
          order: 1,
          content: `Read Priya's email:

From: Priya
To: Emma (London)
Subject: How Primary School Used to Be

Hi Emma,

Thanks for asking about my primary school life! Things are quite different now compared to when I was in Primary One and Two.

When I was younger, I used to walk to school every morning with my mum. We used to leave home at 7:15 a.m. because my school was only ten minutes away. Now I take the bus by myself because we moved to a different neighbourhood last year.

In Primary One, I didn't use to like reading very much. I only read picture books, and I didn't use to finish them! But now I love reading chapter books. Last week I finished a 200-page mystery novel.

My best friend Mei used to live in Guangzhou before she moved to Singapore in Primary Three. She used to go to a Chinese-medium school there. She told me she used to wear a red scarf as part of her uniform. In Guangzhou, she used to have classes from 8 a.m. to 4 p.m., which was longer than our school day here. She didn't use to speak much English back then, but now she's one of the top students in our English class!

At recess in Primary One and Two, we used to play at the playground every day. We used to go on the swings and the slide. Now in Primary Five, we usually sit in the canteen and chat or do homework, because we're "too old" for the playground – that's what Jun Wei says anyway!

Our class teacher Ms Tan used to teach us Mathematics in Primary Three. She used to give us mental sums at the start of every lesson. Now she teaches us English, and she doesn't use to give us mental sums anymore... wait, I mean she doesn't give us mental sums anymore! (She always corrects us when we say "doesn't use to" – it should be just "doesn't"!)

I also used to be scared of speaking English in front of the class. I didn't use to volunteer to answer questions. But Ms Tan used to encourage me every week, and now I actually enjoy speaking tasks.

One more thing: I used to think Science was boring in Primary One. We didn't use to do experiments back then – we only looked at pictures in textbooks. Now we do experiments in the Science lab, and it's my favourite subject!

Write back and tell me what your primary school used to be like!

Best wishes,
Priya`,
          options: JSON.stringify([
            "How did Priya use to go to school in Primary One?|A. By bus|B. By car|C. Walking with her mum|D. By MRT",
            "Did Priya use to like reading in Primary One?|A. Yes, she loved it|B. No, she didn't like it much|C. Yes, but only textbooks|D. She only read online",
            "Where did Mei use to live before Singapore?|A. Beijing|B. Shanghai|C. Guangzhou|D. Hong Kong",
            "What did Mei use to wear at her school in China?|A. A red scarf|B. A blue tie|C. A green badge|D. A yellow ribbon",
            "What did students use to do at recess in Primary One and Two?|A. Sit in the canteen|B. Do homework|C. Play at the playground|D. Study in the library",
          ]),
          correctAnswer: "C,B,C,A,C",
          points: 5,
        },
        {
          type: "grammar",
          order: 2,
          content: `Choose the correct word for each gap:

Primary One Recess

When I was in Primary One, recess (1) ____ very different. I (2) ____ bring my own food from home. My mother (3) ____ pack sandwiches and a drink box for me every morning.

I (4) ____ buy food from the canteen at first because I was too shy. But then my friend Jun Wei (5) ____ help me order chicken rice. Now I (6) ____ to the canteen every day and order by myself!`,
          options: JSON.stringify([
            "(1)|A. use to be|B. used to be|C. used be|D. am used to be",
            "(2)|A. didn't used to|B. didn't use to|C. not used to|D. am not used to",
            "(3)|A. use to|B. used|C. used to|D. is used to",
            "(4)|A. didn't used to|B. didn't use to|C. not use to|D. am not used to",
            "(5)|A. use to|B. used|C. used to|D. is used to",
            "(6)|A. am going|B. go|C. used to go|D. am used to go",
          ]),
          correctAnswer: "B,B,C,B,C,B",
          points: 6,
        },
        {
          type: "writing",
          order: 3,
          content: `Write an email to your friend (100-120 words).

Your friend in another country wants to know what you used to do after school when you were in Primary One.

In your email:
• Describe what you used to do after school
• Say what you didn't use to do
• Explain how things are different now

You MUST use "used to" at least twice and "didn't use to" at least once.

成功标准 / Success Criteria:
✓ Used to + 动词原形 (used to + infinitive for past habits: I used to play…)
✓ Didn't use to + 动词原形 (didn't use to + infinitive for negative: I didn't use to like…)
✓ 不要写 I use to / I didn't used to / I am used to swim (Don't write: I use to / I didn't used to / I am used to + -ing)
✓ 对比过去和现在 (Compare past and present: I used to…, but now I…)
✓ 邮件格式 (Email format: greeting, paragraphs, closing)
✓ 100-120词 (100-120 words)`,
          points: 10,
        },
      ],
    },
    {
      level: "B1",
      weekNumber: 7,
      title: "Week 7: Rain or Shine",
      description: "Talking about contrast with although and despite",
      isSample: false,
      dueDate: new Date("2026-10-15"),
      errorFocus: "although-despite",
      parentBrief: "本周纠错焦点：although / despite。中文「虽然…但是」成对出现，孩子会说 Although it is raining, but I go / Despite of the rain / Despite it is raining / Although the rain。英语规则：although / even though 后面接句子（有主语和动词）；despite / in spite of 后面接名词或 -ing 形式。不要在 although 后面再加 but。不要写 despite of。",
      videoUrl: null,
      kaizenFocus: "Use although/even though + clause and despite/in spite of + noun/-ing; never although + but",
      officialClipId: null,
      questions: [
        {
          type: "reading",
          order: 1,
          content: `Read Mei's email:

From: Mei
To: Priya
Subject: Sports Day in the Rain!

Hi Priya,

I know you couldn't come to school yesterday because you were unwell. Let me tell you about our Sports Day – it was quite an adventure!

Although the weather forecast said it would rain, we all hoped Sports Day would go ahead as planned. We arrived at school at 7:30 a.m. with our red team shirts. Despite the dark clouds above us, everyone was excited and ready to compete.

The first event was the 100-metre sprint. Although I was nervous about running in front of the whole school, I did my best. Jun Wei won the boys' race! Despite finishing third, I was happy because I improved my time from last year.

Then it started to drizzle during the relay race. Despite the light rain, Ms Tan said we could continue. Our red team was leading! But then, although we were ahead, our final runner slipped on the wet track. The blue team won instead. Although we lost, everyone cheered for both teams – it was still exciting!

After the relay, the rain got heavier. Mr Kumar, our PE teacher, made an announcement: "Although we want to finish all events, safety is more important. We'll move the remaining races to next week." Despite feeling disappointed, we all understood. It was too slippery to run safely.

We didn't go home though! Despite the rain, the teachers moved us to the school hall. Although we couldn't run outside anymore, we played indoor team games instead. We had sack races and a tug-of-war competition in the hall! Despite the change of plans, it turned out to be really fun.

At lunchtime, despite the wet weather, some parents still came with our packed lunches. My mum brought my favourite chicken rice. Although the hall was crowded and noisy, we enjoyed eating together. Jun Wei's dad even brought extra curry puffs for our whole team!

In the afternoon, although Sports Day was officially over, our class stayed behind to help clean up. Despite being tired, we worked as a team. Ms Tan said she was proud of us. She said, "Although the weather didn't cooperate, you all showed great teamwork and positive attitudes."

I learned something yesterday: although things don't always go as planned, you can still make the best of any situation. Despite the rain, it was one of my favourite school days this year!

Anyway, I hope you're feeling better. Although you missed Sports Day, there's still the make-up races next week. You'll get to compete then!

Write back soon!

Best wishes,
Mei`,
          options: JSON.stringify([
            "Why did Sports Day continue at first despite the weather?|A. It wasn't raining yet|B. The dark clouds went away|C. Everyone was excited and ready|D. Parents demanded it",
            "How did Mei feel about the 100-metre sprint?|A. She was nervous but did her best|B. She won the race|C. She didn't want to run|D. She was injured",
            "Why did the red team lose the relay race?|A. They were too slow|B. The final runner slipped on the wet track|C. Jun Wei couldn't run|D. They started late",
            "What happened after Mr Kumar cancelled the outdoor events?|A. Everyone went home|B. They waited for the rain to stop|C. They moved to the hall for indoor games|D. They continued running in the rain",
            "What was Ms Tan proud of?|A. The weather clearing up|B. The students' teamwork and positive attitudes|C. Winning all the races|D. The parents bringing food",
          ]),
          correctAnswer: "C,A,B,C,B",
          points: 5,
        },
        {
          type: "grammar",
          order: 2,
          content: `Choose the correct word for each gap:

Sports Day in the Rain
by Priya, Primary 5

Last Friday was our school Sports Day. (1) ____ the weather was not perfect, we had a great time. (2) ____ some rain in the morning, the teachers said we could start the races.

I was in the red team. (3) ____ feeling nervous, I ran as fast as I could in the 100-metre sprint. (4) ____ I didn't win, I was happy with my time.

Then it started raining heavily. (5) ____ wanting to continue, we had to stop for safety. (6) ____ the rain, we moved inside and played team games in the hall instead!`,
          options: JSON.stringify([
            "(1)|A. Despite|B. Although|C. Despite of|D. Although but",
            "(2)|A. Despite|B. Although|C. Despite of|D. In spite",
            "(3)|A. Although of|B. Despite of|C. Despite|D. Even though of",
            "(4)|A. Despite|B. Although|C. In spite|D. Despite of",
            "(5)|A. Despite|B. Although of|C. Despite of|D. In spite but",
            "(6)|A. Although|B. Despite|C. Even though|D. Despite of",
          ]),
          correctAnswer: "B,A,C,B,A,B",
          points: 6,
        },
        {
          type: "writing",
          order: 3,
          content: `Write an email to your friend (100-120 words).

Your friend in another country asked about a day when your plans changed because of weather or an unexpected situation.

In your email:
• Describe what you originally planned to do
• Explain what went wrong or changed
• Say what you did instead
• Explain how you felt about the situation

You MUST use "although" or "even though" at least once and "despite" or "in spite of" at least once.

DO NOT write: although + but / despite of / despite + clause without noun

成功标准 / Success Criteria:
✓ Although / even though + 从句 (although + clause with subject and verb: Although it was raining, we went…)
✓ Despite / in spite of + 名词或 -ing (despite + noun or -ing: Despite the rain, we…)
✓ 不要写 although … but (Don't write: Although it rained, but we went)
✓ 不要写 despite of 或 despite + 从句 (Don't write: Despite of the rain / Despite it was raining)
✓ 对比计划和实际情况 (Compare original plans with what actually happened)
✓ 邮件格式 (Email format: greeting, paragraphs, closing)
✓ 100-120词 (100-120 words)`,
          points: 10,
        },
      ],
    },

    // Week 7: going to future
    {
      level: "A2",
      weekNumber: 7,
      title: "Week 7: Weekend Plans",
      description: "Talking about future plans with going to",
      isSample: false,
      dueDate: new Date("2026-10-01"),
      errorFocus: "going-to-future",
      parentBrief: "本周纠错焦点：be going to 表示打算。中文用「要/打算」不变形，孩子会说 I going to the library tomorrow / I go to swim / Tomorrow I go library（用裸现在时表达计划）。英语规则：I am going to + 动词原形；He/She is going to + 动词原形；We/They are going to + 动词原形。本周轻微对比 present continuous（第 2 周已教）：this week focuses on PLANS (going to), not actions happening now.",
      videoUrl: null,
      kaizenFocus: "Use be going to + infinitive for plans (I am going to visit…; She is going to…; We are going to…)",
      officialClipId: null,
      questions: [
        {
          type: "reading",
          order: 1,
          content: `Read Mei's email:

From: Mei
To: Priya
Subject: This Weekend!

Hi Priya,

I'm so excited about this weekend! Let me tell you our plans.

On Saturday morning, my family is going to visit East Coast Park. We're going to cycle along the beach. My dad is going to bring his new camera. He's going to take photos of the sunrise. Mum is going to pack sandwiches and drinks for our picnic.

After East Coast Park, we're going to go to Bedok Mall. I'm going to buy a new book at the bookshop. Mum is going to get groceries at the supermarket. Dad says he's going to look at sports equipment. We're going to have lunch at the food court.

On Saturday evening, my cousin Jun Wei is going to come to our flat. We're going to do our English homework together. Ms Tan gave us a writing task about weekend plans! After homework, Jun Wei and I are going to play video games. My parents are going to watch a movie in the living room.

On Sunday morning, I'm going to go to the library at Bedok Community Centre. I'm going to return my books and borrow new ones. Priya, are you going to come with me? The library opens at 10 a.m.

On Sunday afternoon, my family is going to visit my grandparents. My grandmother is going to cook her special chicken rice for lunch. After lunch, Grandpa is going to tell us stories. He always tells funny stories about when he was young!

In the evening, I'm going to practise piano. I'm going to prepare for my Grade 2 exam next month. Mum is going to help me with the difficult parts.

What about you? What are you going to do this weekend? Are you going to do anything special? Write back soon!

Best,
Mei`,
          options: JSON.stringify([
            "What is Mei's family going to do on Saturday morning?|A. Visit the library|B. Visit East Coast Park|C. Visit grandparents|D. Go to Bedok Mall",
            "What is Mei's dad going to do at East Coast Park?|A. Pack sandwiches|B. Cycle along the beach|C. Take photos with his new camera|D. Buy groceries",
            "What is Mei going to buy at Bedok Mall?|A. A new book|B. Sports equipment|C. Groceries|D. Video games",
            "When is Jun Wei going to come to Mei's flat?|A. Saturday morning|B. Saturday afternoon|C. Saturday evening|D. Sunday morning",
            "What are Mei and Jun Wei going to do together?|A. Cycle at East Coast Park|B. Do their homework|C. Visit grandparents|D. Go to the library",
          ]),
          correctAnswer: "B,C,A,C,B",
          points: 5,
        },
        {
          type: "grammar",
          order: 2,
          content: `Read the text below and choose the correct word for each gap.

Saturday at East Coast Park
by Priya, Primary 5

This Saturday is going to be exciting! My parents (1) ____ to East Coast Park in the morning. My brother (2) ____ his new kite. I (3) ____ my art supplies because I want to draw the sea. Mum and Dad (4) ____ jogging along the path. After that, we (5) ____ ice cream at the café. In the afternoon, my cousins (6) ____ to join us. We're all going to play at the playground together!`,
          options: JSON.stringify([
            "(1)|A. is going to go|B. are going to go|C. going to go|D. go to",
            "(2)|A. going to bring|B. is going bring|C. is going to bring|D. will going to bring",
            "(3)|A. going to take|B. am going take|C. am going to take|D. go to take",
            "(4)|A. is going to go|B. going to go|C. are going to go|D. are go to",
            "(5)|A. going to have|B. are going to have|C. is going to have|D. go to have",
            "(6)|A. is going to come|B. going to come|C. are going to come|D. are going come",
          ]),
          correctAnswer: "B,C,C,C,B,C",
          points: 6,
        },
        {
          type: "writing",
          order: 3,
          content: `You receive this email from your English friend, Sam:

From: Sam
To: You
Subject: Weekend plans?

Hi!

What are you going to do this weekend? I want to know about your plans! Are you going to do anything fun or interesting? Tell me all about it!

Write back!
Sam

Write your email to Sam (40-60 words). Tell Sam about your weekend plans.

You MUST use "going to" at least twice.

成功标准 / Success Criteria:
✓ 讲周末打算 (Tell Sam about your weekend plans)
✓ 用 be going to 至少 2 次 (Use be going to at least 2 times: I am going to…; My family is going to…; We are going to…)
✓ 主语动词一致 (Subject-verb agreement: I am / She is / We are + going to + verb)
✓ 邮件格式 (Email format: Hi Sam, ... / Best, [your name])
✓ 40-60词 (40-60 words)`,
          points: 10,
        },
      ],
    },
    {
      level: "A2",
      weekNumber: 8,
      title: "Week 8: School Rules and What We Can Do",
      description: "Talking about ability and rules with can and must",
      isSample: false,
      dueDate: new Date("2026-10-08"),
      errorFocus: "can-must",
      parentBrief: "本周纠错焦点：can / must + 动词原形。中文「能/必须」不变形，孩子会说 I can to swim / I must to go / I can swimming。英语规则：can + 原形（能力或许可）；must + 原形（必须）；问句 Can I…? 请求许可。Cambridge A2 Key for Schools (Handbook 2020) 规定考 can（ability / permission）和 must（obligation）。",
      videoUrl: null,
      kaizenFocus: "Use can + infinitive for ability/permission and must + infinitive for obligation; no to after can/must",
      officialClipId: null,
      questions: [
        {
          type: "reading",
          order: 1,
          content: `Read the notice from Ms Tan:

From: Ms Tan
To: All Primary 5 students
Subject: School Rules and CCA Time

Dear students,

This is a reminder about our school rules and what you can do during CCA time on Wednesdays.

Library Rules:
You can borrow up to 3 books from the school library. You can read quietly in the reading corner. You must return books on time. You must not talk loudly in the library. You can ask the librarian for help if you cannot find a book.

Canteen Rules:
You can buy food and drinks during recess. You must queue up at the stalls. You can sit at any empty table. You must put your trays and plates in the collection area. You cannot run in the canteen.

Swimming Pool (CCA Time):
If you are in the swimming CCA, you can use the school pool on Wednesday afternoons. You must bring your own towel and goggles. You can swim in the lanes marked for your level. You must listen to the coach. You cannot dive into the shallow end.

After CCA:
Mei and Priya are in the library club. They can stay in the library until 4 p.m. on Wednesdays. They can use the computers to do research for their projects. They must ask Ms Wong before they print anything.

If you have any questions about the rules, you can ask me or any teacher.

Best regards,
Ms Tan`,
          options: JSON.stringify([
            "How many books can students borrow from the library?|A. 2 books|B. 3 books|C. 4 books|D. 5 books",
            "What must students do with their trays in the canteen?|A. Leave them on the table|B. Give them to teachers|C. Put them in the collection area|D. Take them to class",
            "What must swimming CCA students bring?|A. Their own food|B. Their own books|C. Their own towel and goggles|D. Their own swimsuit only",
            "What can Mei and Priya do in the library club?|A. Run in the library|B. Talk loudly|C. Use computers for research|D. Dive in the pool",
            "What must Mei and Priya do before they print?|A. Pay money|B. Ask Ms Tan|C. Ask Ms Wong|D. Go home",
          ]),
          correctAnswer: "B,C,C,C,C",
          points: 5,
        },
        {
          type: "grammar",
          order: 2,
          content: `Read the text below and choose the correct word for each gap.

The School Library
by Mei, Primary 5

I love our school library! At the library, you (1) ____ borrow books and read magazines. You (2) ____ be quiet because other students are reading. If you need help, you (3) ____ ask the librarian, Ms Wong. She is very kind. Sometimes I want to borrow a book about Singapore history, but I (4) ____ find it on the shelf. When that happens, Ms Wong helps me look for it. She says I (5) ____ keep the books for two weeks. I (6) ____ read them at home or in the library. I love reading at the library after school!`,
          options: JSON.stringify([
            "(1)|A. can|B. can to|C. must|D. must to",
            "(2)|A. can|B. can to|C. must|D. must to",
            "(3)|A. can|B. can to|C. must|D. must to",
            "(4)|A. can|B. cannot|C. can to|D. can't to",
            "(5)|A. can|B. can to|C. must|D. must to",
            "(6)|A. can|B. can to|C. must|D. must to",
          ]),
          correctAnswer: "A,C,A,B,A,A",
          points: 6,
        },
        {
          type: "writing",
          order: 3,
          content: `You receive this email from your English friend, Sam:

From: Sam
To: You
Subject: Your school rules

Hi!

I want to know about your school! What are the rules at your school? What can you do after school? Tell me about it!

Write back soon!
Sam

Write your email to Sam (40-60 words). Tell Sam about school rules and what you can do.

You MUST use "can" at least once and "must" at least once.

成功标准 / Success Criteria:
✓ 讲学校规则和你能做什么 (Tell about school rules and what you can do)
✓ 用 can 至少 1 次 (Use can at least 1 time: I can… / We can… / You can…)
✓ 用 must 至少 1 次 (Use must at least 1 time: I must… / We must… / You must…)
✓ can / must 后面直接加动词原形，不加 to (can + infinitive; must + infinitive; no to)
✓ 邮件格式 (Email format: Hi Sam, ... / Best, [your name])
✓ 40-60词 (40-60 words)`,
          points: 10,
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
