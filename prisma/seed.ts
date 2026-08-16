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
      parentBrief: "本周主题：带单位的象形统计图（对应 MOE 小学 P2 数学大纲 Statistics）。P1 学过每个图代表 1 个物品。本周 P2 的新知识点是单位：每个图代表 2 个、5 个或 10 个。孩子要先看「Each ⭐ stands for 2」，再数有几个图，然后乘出总数（4 个 ⭐ × 2 = 8），最后比较大小或求差。常见错误：数了 4 个图就写 4，忘了乘单位。题目是简体中文家长说明 + 英文题干。本周配有双向对照表，显示题目对应的官方 2021 Primary Mathematics Syllabus P2 Statistics 内容点（Picture graphs with scales 1.1），以及 MOE AEIS 的「preceding level」规则（申请 P3 → 掌握 P2 内容）。",
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
    {
      level: "MATH",
      weekNumber: 6,
      title: "数学 第 6 周 / Maths Week 6",
      description: "AEIS-Primary P3 Mathematics: Whole numbers to 10 000 and money",
      isSample: false,
      errorFocus: null,
      parentBrief: "本周主题：万以内整数与钱币（对应 MOE 小学 P3 数学大纲）。P2 学过千以内（到 1000），本周学 P3 的新知识点：万以内（到 10 000）的位值（千位、百位、十位、个位）、读写数字和单词、比较大小、四位数加减法、以及钱币的小数记法（加减法和两步应用题）。申请 P4 入学的孩子需掌握 P3 内容（MOE AEIS preceding level 规则）。常见错误：5000 + 3000 = 5300（忘了是 8000）、$15.60 + $8.50 = $23.10 或 $24.10（小数进位错）。题目是简体中文家长说明 + 英文题干。本周配有双向对照表，显示题目对应的官方 2021 Primary Mathematics Syllabus P3 内容点（Whole numbers to 10 000: place value, reading/writing, compare/order, patterns; Addition and subtraction up to 4 digits; Money: addition/subtraction in decimal notation, 2-step word problems），以及 MOE AEIS 的「preceding level」规则（申请 P4 → 掌握 P3 内容）。",
      videoUrl: null,
      kaizenFocus: null,
      questions: [
        {
          type: "reading",
          order: 1,
          content: `Read each question and choose the correct answer.`,
          options: JSON.stringify([
            "At Tampines Mall, a toy shop had 4256 small toys and 2318 big toys. How many toys in total?|A. 6474|B. 6574|C. 7574|D. 6464",
            "Jun Wei saved $12.40 in January and $15.80 in February. How much did he save altogether?|A. $27.20|B. $28.20|C. $27.60|D. $28.60",
            "Bedok Library had 7845 books. They bought 1237 more books. How many books now?|A. 8082|B. 9082|C. 9072|D. 8072",
            "Priya had $50.00. She bought a book for $18.60. How much money does she have left?|A. $31.40|B. $32.40|C. $31.60|D. $32.60",
            "A hawker centre in Tampines served 5234 customers on Saturday and 3896 customers on Sunday. How many more customers on Saturday?|A. 1238|B. 1338|C. 1348|D. 1438",
          ]),
          correctAnswer: "B,B,B,A,B",
          points: 5,
        },
        {
          type: "grammar",
          order: 2,
          content: `Choose the correct answer for each question.`,
          options: JSON.stringify([
            "What is the value of the digit 7 in 7395?|A. 7|B. 70|C. 700|D. 7000",
            "Which number is greater: 4567 or 4576?|A. 4567|B. 4576|C. Both the same|D. Cannot compare",
            "Mei bought 3 books at $9.50 each. How much did she spend?|A. $27.50|B. $28.00|C. $28.50|D. $29.00",
            "At East Coast Park, Ali counted 2340 visitors in the morning and 1895 in the afternoon. How many visitors in total?|A. 4135|B. 4235|C. 4225|D. 4145",
            "Raju had 8200 stickers. He gave away 3456 stickers. How many stickers does he have left?|A. 4644|B. 4744|C. 4844|D. 4944",
            "At a hawker centre, chicken rice costs $4.80 and drink costs $1.50. How much for both?|A. $5.30|B. $6.00|C. $6.30|D. $6.80",
            "What is 3000 + 2000 + 400 + 50 + 6?|A. 5456|B. 5546|C. 5465|D. 6456",
            "At Bedok MRT station, 6789 people took the train on Monday. On Tuesday, 5432 people took the train. How many fewer on Tuesday?|A. 1257|B. 1357|C. 1457|D. 1367",
          ]),
          correctAnswer: "D,B,C,B,B,C,A,B",
          points: 5,
        },
        {
          type: "writing",
          order: 3,
          content: `At Tampines Sports Hall, tickets for a basketball game cost $12.50 for adults and $7.80 for children.

(a) Mr Tan bought 2 adult tickets and 3 children tickets. How much did he pay in total? Show your working.

(b) Mrs Lee gave the cashier $100.00 for 4 adult tickets. How much change did she receive? Show your working.

写出算式和答案。`,
          points: 10,
        },
      ],
    },
    {
      level: "MATH",
      weekNumber: 7,
      title: "数学 第 7 周 / Maths Week 7",
      description: "AEIS-Primary P3 Mathematics: Multiplication and division (6–9 tables, remainder, 3-digit ÷ 1-digit)",
      isSample: false,
      errorFocus: null,
      parentBrief: "本周主题：六七八九的乘法口诀、有余数的除法、三位数乘/除一位数（对应 MOE 小学 P3 数学大纲）。P2 学过 2/3/4/5/10 的乘法口诀，本周学 P3 新知识点：6、7、8、9 的乘法口诀（Multiplication tables of 6, 7, 8 and 9）、有余数的除法（Division with remainder，例如 50 ÷ 6 = 8 R 2）、以及三位数乘/除一位数的算法（up to 3 digits by 1 digit）。申请 P4 入学的孩子需掌握 P3 内容（MOE AEIS preceding level 规则）。常见错误：7 × 8 = 54（记混成 6 × 9）、137 × 3 算错进位、50 ÷ 6 = 8（忘了余数 R 2）。题目是简体中文家长说明 + 英文题干。本周配有双向对照表，显示题目对应的官方 2021 Primary Mathematics Syllabus P3 内容点（Multiplication tables of 6, 7, 8 and 9; Division with remainder; Multiplication and division algorithms up to 3 digits by 1 digit; Mental calculation），以及 MOE AEIS 的「preceding level」规则（申请 P4 → 掌握 P3 内容）。",
      videoUrl: null,
      kaizenFocus: null,
      questions: [
        {
          type: "reading",
          order: 1,
          content: `Read each question and choose the correct answer.`,
          options: JSON.stringify([
            "At Bedok Mall, Mei bought 7 storybooks at $8 each. How much did she spend in total?|A. $54|B. $56|C. $63|D. $64",
            "A baker made 146 muffins. He packed them equally into 2 boxes. How many muffins in each box?|A. 72|B. 73|C. 74|D. 75",
            "Priya had 50 stickers. She shared them equally among 6 friends. How many stickers did each friend get, and how many were left?|A. 8 stickers each, 2 left|B. 8 stickers each, 0 left|C. 7 stickers each, 2 left|D. 9 stickers each, 1 left",
            "At East Coast Park, 213 children were divided equally into 3 groups for sports. How many children in each group?|A. 69|B. 70|C. 71|D. 72",
            "Ali multiplied 124 by 6. What is the answer?|A. 724|B. 744|C. 754|D. 764",
          ]),
          correctAnswer: "B,B,A,C,B",
          points: 5,
        },
        {
          type: "grammar",
          order: 2,
          content: `Choose the correct answer for each question.`,
          options: JSON.stringify([
            "What is 7 × 9?|A. 62|B. 63|C. 64|D. 65",
            "What is 8 × 7?|A. 54|B. 55|C. 56|D. 57",
            "Jun Wei calculated 6 × 8. What is the answer?|A. 42|B. 46|C. 48|D. 54",
            "What is 153 ÷ 3?|A. 49|B. 50|C. 51|D. 52",
            "Raju had 85 marbles. He divided them equally among 9 friends. How many marbles did each friend get, and how many were left?|A. 9 each, 3 left|B. 9 each, 4 left|C. 10 each, 5 left|D. 8 each, 5 left",
            "What is 237 × 4?|A. 928|B. 938|C. 948|D. 958",
            "At a hawker centre, 6 plates of chicken rice cost $42. How much does one plate cost?|A. $6|B. $7|C. $8|D. $9",
            "What is 568 ÷ 8?|A. 69|B. 70|C. 71|D. 72",
          ]),
          correctAnswer: "B,C,C,C,B,C,B,C",
          points: 5,
        },
        {
          type: "writing",
          order: 3,
          content: `At Tampines Community Centre, the art teacher ordered supplies for 8 classes.

(a) Each class needs 7 packets of colored paper. Each packet costs $6. How many packets in total, and how much does the teacher pay? Show your working.

(b) The teacher bought 156 paintbrushes. She distributed them equally among 4 classes. How many paintbrushes did each class get? Show your working.

写出算式和答案。`,
          points: 10,
        },
      ],
    },
    {
      level: "MATH",
      weekNumber: 8,
      title: "数学 第 8 周 / Maths Week 8",
      description: "AEIS-Primary P3 Mathematics: Equivalent fractions and related fractions",
      isSample: false,
      errorFocus: null,
      parentBrief: "本周主题：等值分数、最简分数、异分母分数比较、相关分数加减（对应 MOE 小学 P3 数学大纲）。P2 第 2 周学过同分母分数加减（2/8 + 3/8 = 5/8），本周学 P3 新知识点：等值分数（Equivalent fractions，例如 2/3 = 4/6 = 8/12）、最简分数（Simplest form，例如 4/6 = 2/3）、异分母分数比较（Compare unlike fractions，例如 1/2 vs 1/3，分母不超过 12）、相关分数加减（Add and subtract related fractions within one whole，例如 1/2 + 1/4 = 3/4）。申请 P4 入学的孩子需掌握 P3 内容（MOE AEIS preceding level 规则）。常见错误：认为 1/3 > 1/2（分母越大越大）、1/2 + 1/4 = 2/6（分子分母分别相加）、4/6 已是最简（忘了约分成 2/3）。题目是简体中文家长说明 + 英文题干。本周配有双向对照表，显示题目对应的官方 2021 Primary Mathematics Syllabus P3 内容点（Equivalent fractions; Express a fraction in simplest form; Compare and order unlike fractions with denominators not exceeding 12; Add and subtract related fractions within one whole），以及 MOE AEIS 的「preceding level」规则（申请 P4 → 掌握 P3 内容）。注意：本周不教 P4 的假分数/带分数（Improper fractions / Mixed numbers）或小数表示法（Decimals as fractions）。",
      videoUrl: null,
      kaizenFocus: null,
      questions: [
        {
          type: "reading",
          order: 1,
          content: `Read each question and choose the correct answer.`,
          options: JSON.stringify([
            "At Tampines Library, Mei read 2/3 of a book. Which fraction is equivalent to 2/3?|A. 4/6|B. 3/6|C. 2/6|D. 1/3",
            "Jun Wei ate 4/8 of a pizza. What is 4/8 in simplest form?|A. 2/4|B. 1/2|C. 4/8|D. 8/16",
            "Priya has two ribbons. One is 1/2 m long, the other is 1/3 m long. Which ribbon is longer?|A. 1/2 m|B. 1/3 m|C. They are equal|D. Cannot tell",
            "At East Coast Park, Ali cycled 1/2 of the path and then walked 1/4 of the path. What fraction of the path did he cover in total?|A. 2/6|B. 2/8|C. 3/4|D. 1/6",
            "Raju had a cake. He gave 1/3 to Mei and 1/6 to Priya. What fraction of the cake did he give away?|A. 2/9|B. 1/2|C. 2/6|D. 3/6",
          ]),
          correctAnswer: "A,B,A,C,B",
          points: 5,
        },
        {
          type: "grammar",
          order: 2,
          content: `Choose the correct answer for each question.`,
          options: JSON.stringify([
            "Which fraction is equivalent to 1/2?|A. 2/3|B. 3/6|C. 2/5|D. 1/3",
            "What is 6/9 in simplest form?|A. 3/3|B. 2/3|C. 6/9|D. 1/3",
            "Which is greater: 1/4 or 1/5?|A. 1/4|B. 1/5|C. They are equal|D. Cannot tell",
            "What is 2/4 + 1/4?|A. 3/8|B. 3/4|C. 2/4|D. 1/2",
            "At Bedok Mall, Mei bought 3/12 kg of grapes and 6/12 kg of apples. How much fruit did she buy in total? Give your answer in simplest form.|A. 9/12 kg|B. 3/4 kg|C. 3/12 kg|D. 9/24 kg",
            "What is 5/6 − 1/6? Give your answer in simplest form.|A. 4/6|B. 2/3|C. 4/0|D. 5/6",
            "Which fraction is equivalent to 3/4?|A. 6/8|B. 4/6|C. 3/8|D. 2/4",
            "Priya walked 2/3 of the way to school. Jun Wei walked 3/4 of the way. Who walked further?|A. Priya|B. Jun Wei|C. Same distance|D. Cannot tell",
          ]),
          correctAnswer: "B,B,A,B,B,B,A,B",
          points: 5,
        },
        {
          type: "writing",
          order: 3,
          content: `At Yishun Community Centre, children are decorating lanterns for Mid-Autumn Festival.

(a) Mei painted 2/3 of her lantern red. Write another fraction equivalent to 2/3. (Denominator must be less than or equal to 12.)

(b) Ali and Raju are making paper chains. Ali made 7/10 m of chain. Raju made 2/10 m of chain. How much chain did they make together? Show your working and give your answer in simplest form.

(c) Priya had 5/6 of a ribbon. She used 1/6 to tie her lantern. What fraction of the ribbon does she have left? Show your working.

写出算式和答案。`,
          points: 10,
        },
      ],
    },
    {
      level: "MATH",
      weekNumber: 9,
      title: "数学 第 9 周 / Maths Week 9",
      description: "AEIS-Primary P3 Mathematics: Length, mass and volume (km, ml, compound units, conversions)",
      isSample: false,
      errorFocus: null,
      parentBrief: "本周主题：长度/质量/容量的测量（对应 MOE 小学 P3 数学大纲）。P2 第 3 周学过 m/cm、kg/g、l、时间（到 5 分钟），本周学 P3 新知识点：千米（km, 1 km = 1000 m）、毫升（ml, 1 l = 1000 ml）、复合单位（compound units，例如 1 m 35 cm、2 kg 500 g、1 l 200 ml）、大小单位互换（conversions: km ↔ m, m ↔ cm, kg ↔ g, l ↔ ml）。申请 P4 入学的孩子需掌握 P3 内容（MOE AEIS preceding level 规则）。常见错误：1 km = 100 m（应是 1000 m）、1 m 35 cm = 1.35 cm（应是 135 cm）、加减混合单位时忘了统一（3 km − 1500 m 要先换成同单位）。题目是简体中文家长说明 + 英文题干。本周配有双向对照表，显示题目对应的官方 2021 Primary Mathematics Syllabus P3 内容点（Length: kilometres; Volume of liquid: millilitres; Length/mass/volume in compound units; Conversion of a measurement in compound units to the smaller unit and vice versa），以及 MOE AEIS 的「preceding level」规则（申请 P4 → 掌握 P3 内容）。注意：本周不教 P3 的面积/周长（Area and perimeter）、以秒为单位的时间（Time in seconds）、24 小时制（24-hour clock），也不教 P4 的小数（Decimals）。",
      videoUrl: null,
      kaizenFocus: null,
      questions: [
        {
          type: "reading",
          order: 1,
          content: `Read each question and choose the correct answer.`,
          options: JSON.stringify([
            "Ali walks 5 km from Bedok to Tampines. How many metres is that?|A. 500 m|B. 5000 m|C. 50 m|D. 50000 m",
            "Mei bought a bottle with 1 l 200 ml of juice. Jun Wei bought a bottle with 900 ml of juice. Who bought more juice?|A. Mei|B. Jun Wei|C. Same amount|D. Cannot tell",
            "A bag of rice weighs 3 m 45 cm. Wait, that doesn't make sense! What unit should it be?|A. 3 m 45 cm|B. 3 kg 45 g|C. 3 l 45 ml|D. 3 km 45 m",
            "Priya's water bottle holds 1 l 800 ml. She drinks 600 ml. How much water is left?|A. 1 l 200 ml|B. 1 l 400 ml|C. 800 ml|D. 2 l 400 ml",
            "The distance from Mei's house to East Coast Park is 3 km. The distance from the park to Marina Bay is 1500 m. How far is Mei's house from Marina Bay if she goes via the park? Give your answer in metres.|A. 4500 m|B. 4500 km|C. 1500 m|D. 1503 m",
          ]),
          correctAnswer: "B,A,B,A,A",
          points: 5,
        },
        {
          type: "grammar",
          order: 2,
          content: `Choose the correct answer for each question.`,
          options: JSON.stringify([
            "How many metres are in 2 km?|A. 200 m|B. 2000 m|C. 20 m|D. 20000 m",
            "Convert 1 m 35 cm to cm.|A. 1.35 cm|B. 136 cm|C. 135 cm|D. 100 cm",
            "Convert 3 kg 250 g to g.|A. 3250 g|B. 325 g|C. 3.25 g|D. 32500 g",
            "How many millilitres (ml) are in 2 litres?|A. 200 ml|B. 20 ml|C. 2000 ml|D. 20000 ml",
            "Convert 4500 ml to litres and millilitres.|A. 4 l 500 ml|B. 45 l|C. 450 l 5 ml|D. 4 l 50 ml",
            "Convert 8000 m to km.|A. 80 km|B. 800 km|C. 8 km|D. 0.8 km",
            "Convert 560 cm to metres and centimetres.|A. 5 m 60 cm|B. 56 m|C. 5 m 6 cm|D. 560 m",
            "Convert 4200 g to kg and g.|A. 42 kg|B. 4 kg 200 g|C. 4 kg 20 g|D. 420 kg",
          ]),
          correctAnswer: "B,C,A,C,A,C,A,B",
          points: 5,
        },
        {
          type: "writing",
          order: 3,
          content: `At Tampines Hub Sports Centre, students are preparing for a running event.

(a) The running track is 7 km long. How many metres is that? Show your working.

(b) Mei ran 2 m 75 cm in the long jump. Convert this to centimetres. Show your working.

(c) After running, Raju had a bottle with 1 l 800 ml of water. He drank 600 ml. How much water is left in the bottle? Give your answer in litres and millilitres. Show your working.

写出算式和答案。`,
          points: 10,
        },
      ],
    },
    {
      level: "MATH",
      weekNumber: 10,
      title: "数学 第 10 周 / Maths Week 10",
      description: "AEIS-Primary P3 Mathematics: Area and perimeter",
      isSample: false,
      errorFocus: null,
      parentBrief: "本周主题：面积与周长（对应 MOE 小学 P3 数学大纲）。P3 新知识点：面积的概念（area in square units: cm², m²）、长方形/正方形面积公式（area of rectangle/square）、直线图形周长（perimeter of rectilinear figures）、面积与周长的应用题（word problems on area/perimeter of squares and rectangles）。申请 P4 入学的孩子需掌握 P3 内容（MOE AEIS preceding level 规则）。常见错误：面积和周长单位混淆（面积是 cm² 或 m²，周长是 cm 或 m）、长方形面积公式记错（应是长 × 宽，不是长 + 宽）、正方形周长算错（应是 4 × 边长）。题目是简体中文家长说明 + 英文题干。本周配有双向对照表，显示题目对应的官方 2021 Primary Mathematics Syllabus P3 内容点（Geometry: Concepts of area and perimeter; Area in square units cm², m²; Formula for area of a rectangle/square; Perimeter of rectilinear figures, rectangles, squares; Word problems on area/perimeter），以及 MOE AEIS 的「preceding level」规则（申请 P4 → 掌握 P3 内容）。注意：本周不教 P4 圆形面积、三角形面积、P3 角度（angles），答案用整数 cm 或 m，不用小数。",
      videoUrl: null,
      kaizenFocus: null,
      questions: [
        {
          type: "reading",
          order: 1,
          content: `Read each question and choose the correct answer.`,
          options: JSON.stringify([
            "A rectangular field at East Coast Park is 12 metres long and 8 metres wide. What is the area of the field?|A. 20 m²|B. 40 m²|C. 96 m²|D. 192 m²",
            "A square garden has sides of 6 metres. What is its area?|A. 12 m²|B. 24 m²|C. 30 m²|D. 36 m²",
            "A rectangular classroom at Tampines Primary is 9 metres long and 5 metres wide. What is the perimeter of the classroom?|A. 14 m|B. 28 m|C. 45 m|D. 90 m",
            "Ali draws a square on paper. Each side is 4 centimetres long. Which measurement shows the area of this square?|A. 8 cm|B. 16 cm|C. 8 cm²|D. 16 cm²",
            "A rectangle is 15 cm long. Its area is 75 cm². What is the width of the rectangle?|A. 5 cm|B. 60 cm|C. 90 cm|D. 1125 cm",
          ]),
          correctAnswer: "C,D,B,D,A",
          points: 5,
        },
        {
          type: "grammar",
          order: 2,
          content: `Choose the correct answer for each question.`,
          options: JSON.stringify([
            "What is the area of a rectangle with length 10 cm and width 4 cm?|A. 14 cm²|B. 28 cm²|C. 40 cm²|D. 40 cm",
            "What is the area of a square with sides of 7 cm?|A. 14 cm²|B. 28 cm²|C. 49 cm²|D. 49 cm",
            "What is the perimeter of a rectangle that is 8 metres long and 3 metres wide?|A. 11 m|B. 22 m|C. 24 m|D. 88 m",
            "What is the perimeter of a square with sides of 5 cm?|A. 10 cm|B. 20 cm|C. 25 cm|D. 25 cm²",
            "A rectangle has length 12 cm and width 9 cm. What is its area?|A. 21 cm²|B. 42 cm²|C. 108 cm²|D. 108 cm",
            "Which unit is used to measure area?|A. cm|B. m|C. cm²|D. km",
            "A square garden has area 64 m². What is the length of one side?|A. 4 m|B. 8 m|C. 16 m|D. 32 m",
            "A rectangle is 20 m long and 10 m wide. What is its perimeter?|A. 30 m|B. 40 m|C. 60 m|D. 200 m",
          ]),
          correctAnswer: "C,C,B,B,C,C,B,C",
          points: 8,
        },
        {
          type: "writing",
          order: 3,
          content: `At Bedok Primary School, the PE teacher is marking out areas on the field.

(a) A rectangular playground is 18 metres long and 12 metres wide. What is the area of the playground? Show your working.

(b) A square table in the canteen has sides of 4 metres. What is the perimeter of the table? Show your working.

(c) A rectangular room has an area of 48 m². The length of the room is 8 m. What is the width of the room? Show your working.

写出算式和答案，标注单位。`,
          points: 10,
        },
      ],
    },
    {
      level: "MATH",
      weekNumber: 11,
      title: "数学 第 11 周 / Maths Week 11",
      description: "AEIS-Primary P3 Mathematics: Time (seconds, duration, 24-hour clock)",
      isSample: false,
      errorFocus: null,
      parentBrief: "本周主题：时间（对应 MOE 小学 P3 数学大纲）。P3 新知识点：秒（measuring time in seconds, 1 min = 60 s）、计算起始时间/结束时间/经过时间（finding starting time, finishing time, or duration）、24 小时制（24-hour clock，例如 2:30 p.m. = 14:30）。申请 P4 入学的孩子需掌握 P3 内容（MOE AEIS preceding level 规则）。常见错误：秒和分钟的换算记错（应该是 1 min = 60 s）、24 小时制转换错误（下午时间要加 12，早上不变）、起始/结束/经过时间三者关系混淆（开始 + 经过 = 结束，结束 − 经过 = 开始）。题目是简体中文家长说明 + 英文题干。本周配有双向对照表，显示题目对应的官方 2021 Primary Mathematics Syllabus P3 内容点（Measurement: Measuring time in seconds; Finding starting time, finishing time, or duration; 24-hour clock），以及 MOE AEIS 的「preceding level」规则（申请 P4 → 掌握 P3 内容）。注意：P2 第 3 周已学过时间到 5 分钟（telling time to 5 minutes），本周重点是秒和 24 小时制，不教 P4 跨午夜的时间计算（duration across midnight），题目都在同一天内。",
      videoUrl: null,
      kaizenFocus: null,
      questions: [
        {
          type: "reading",
          order: 1,
          content: `Read each question and choose the correct answer.`,
          options: JSON.stringify([
            "The school library opens at 9:00 a.m. and closes at 6:00 p.m. How long is the library open?|A. 3 hours|B. 6 hours|C. 9 hours|D. 15 hours",
            "A PE lesson starts at 10:15 a.m. It lasts 45 minutes. What time does it finish?|A. 10:45 a.m.|B. 10:60 a.m.|C. 11:00 a.m.|D. 11:15 a.m.",
            "How many seconds are there in 3 minutes?|A. 30 seconds|B. 90 seconds|C. 120 seconds|D. 180 seconds",
            "The clock shows 14:30. What is this time in 12-hour clock?|A. 1:30 p.m.|B. 2:30 p.m.|C. 4:30 p.m.|D. 2:30 a.m.",
            "Jun Wei's art lesson ended at 11:20 a.m. It lasted 50 minutes. What time did it start?|A. 10:20 a.m.|B. 10:30 a.m.|C. 10:70 a.m.|D. 12:10 p.m.",
          ]),
          correctAnswer: "C,C,D,B,B",
          points: 5,
        },
        {
          type: "grammar",
          order: 2,
          content: `Choose the correct answer for each question.`,
          options: JSON.stringify([
            "What is 2:45 p.m. in 24-hour clock?|A. 02:45|B. 12:45|C. 14:45|D. 24:45",
            "How many seconds are in 1 minute?|A. 10 seconds|B. 50 seconds|C. 60 seconds|D. 100 seconds",
            "A music lesson starts at 1:30 p.m. and ends at 2:15 p.m. How long is the lesson?|A. 15 minutes|B. 30 minutes|C. 45 minutes|D. 60 minutes",
            "The school assembly starts at 07:45. What is this time in 12-hour clock?|A. 7:45 p.m.|B. 7:45 a.m.|C. 12:45 p.m.|D. 19:45",
            "Mei's recess is 30 minutes long. It starts at 9:45 a.m. When does it end?|A. 9:75 a.m.|B. 10:05 a.m.|C. 10:15 a.m.|D. 10:45 a.m.",
            "How many seconds are there in 2 minutes?|A. 60 seconds|B. 90 seconds|C. 100 seconds|D. 120 seconds",
            "A swimming lesson is from 3:00 p.m. to 4:30 p.m. How long is the lesson?|A. 30 minutes|B. 1 hour|C. 1 hour 30 minutes|D. 2 hours",
            "What is 8:20 a.m. in 24-hour clock?|A. 08:20|B. 18:20|C. 20:08|D. 20:20",
          ]),
          correctAnswer: "C,C,C,B,C,D,C,A",
          points: 8,
        },
        {
          type: "writing",
          order: 3,
          content: `At Tampines Primary School, the students are learning about their daily timetable.

(a) A Chinese lesson starts at 10:30 a.m. and lasts 1 hour 15 minutes. What time does it finish? Show your working.

(b) The school canteen opens at 06:45. What is this time in 12-hour clock? Show your working.

(c) Ali ran 100 metres in 18 seconds. Priya ran the same distance in 15 seconds. How many seconds faster was Priya? Show your working.

写出算式和答案，标注单位。`,
          points: 10,
        },
      ],
    },
    {
      level: "MATH",
      weekNumber: 12,
      title: "数学 第 12 周 / Maths Week 12",
      description: "AEIS-Primary P3 Mathematics: Angles and lines (right angles, perpendicular, parallel)",
      isSample: false,
      errorFocus: null,
      parentBrief: "本周主题：角与直线（对应 MOE 小学 P3 数学大纲）。P3 新知识点：直角（right angle = 90°）、垂直线（perpendicular lines，两条线相交成直角）、平行线（parallel lines，永不相交，距离始终相等）。申请 P4 入学的孩子需掌握 P3 内容（MOE AEIS preceding level 规则）。常见错误：不知道直角 = 90°、混淆垂直和平行的定义（垂直是相交成直角，平行是永不相交）、不记得正方形和长方形都有 4 个直角。题目是简体中文家长说明 + 英文题干。本周配有双向对照表，显示题目对应的官方 2021 Primary Mathematics Syllabus P3 内容点（Geometry: Identifying and comparing right angles; Identifying perpendicular lines; Identifying parallel lines），以及 MOE AEIS 的「preceding level」规则（申请 P4 → 掌握 P3 内容）。注意：P3 只教直角 = 90°，不教 P4 的量角器（protractor）和非直角的度数，也不教 P5 的三角形性质。题目使用学校日常物品（门框、书本、教室瓷砖、窗户）作为情境，不需要图表。",
      videoUrl: null,
      kaizenFocus: null,
      questions: [
        {
          type: "reading",
          order: 1,
          content: `Read each question and choose the correct answer.`,
          options: JSON.stringify([
            "How many right angles does a square have?|A. 1 right angle|B. 2 right angles|C. 3 right angles|D. 4 right angles",
            "Look at a door frame. The sides of the door frame meet at right angles. How many right angles are there at the four corners?|A. 2 right angles|B. 3 right angles|C. 4 right angles|D. 5 right angles",
            "A rectangle has two pairs of opposite sides. Which pair of opposite sides is parallel?|A. Only the longer sides|B. Only the shorter sides|C. Both pairs|D. No sides are parallel",
            "Look at the letter T. The top line is perpendicular to the vertical line. What does perpendicular mean?|A. The lines are the same length|B. The lines never meet|C. The lines meet at a right angle|D. The lines are parallel",
            "How many right angles does a rectangle have?|A. 2 right angles|B. 3 right angles|C. 4 right angles|D. 6 right angles",
          ]),
          correctAnswer: "D,C,C,C,C",
          points: 5,
        },
        {
          type: "grammar",
          order: 2,
          content: `Choose the correct answer for each question.`,
          options: JSON.stringify([
            "What is a right angle?|A. 45°|B. 60°|C. 90°|D. 180°",
            "Which shape has 4 right angles and 4 equal sides?|A. Rectangle|B. Triangle|C. Square|D. Circle",
            "Which two lines meet at a right angle?|A. Parallel lines|B. Perpendicular lines|C. Curved lines|D. Diagonal lines",
            "Which two lines never meet and are always the same distance apart?|A. Perpendicular lines|B. Intersecting lines|C. Parallel lines|D. Curved lines",
            "The opposite sides of a rectangle are parallel. How many pairs of parallel sides are there?|A. 1 pair|B. 2 pairs|C. 3 pairs|D. 4 pairs",
            "The longer sides of a rectangle are _____ .|A. perpendicular|B. parallel|C. curved|D. the same as the shorter sides",
            "One corner of a book is a right angle. How many degrees is that?|A. 45°|B. 60°|C. 90°|D. 180°",
            "The opposite sides of a square are parallel. Is this statement true or false?|A. True|B. False|C. Sometimes true|D. Cannot tell",
          ]),
          correctAnswer: "C,C,B,C,B,B,C,A",
          points: 8,
        },
        {
          type: "writing",
          order: 3,
          content: `At Tampines Primary School, the students are learning about shapes and lines in their classroom.

(a) A classroom door is a rectangle. How many right angles does the door have? Show your working.

(b) Draw two lines that are perpendicular to each other. What angle do they make?

(c) Look at the classroom window. It has two pairs of opposite sides that are parallel. How many pairs of parallel sides are there in total? Show your working.

写出答案和说明。`,
          points: 10,
        },
      ],
    },
    {
      level: "MATH",
      weekNumber: 13,
      title: "数学 第 13 周 / Maths Week 13",
      description: "AEIS-Primary P3 Mathematics: Bar graphs",
      isSample: false,
      errorFocus: null,
      parentBrief: "本周主题：条形统计图（对应 MOE 小学 P3 数学大纲）。P3 新知识点：读条形图（bar graph）、比较条的高低、找最多/最少、计算差值（difference）、计算总数（total）。P2 第 5 周学过象形统计图（picture graph），本周升级到条形图。申请 P4 入学的孩子需掌握 P3 内容（MOE AEIS preceding level 规则）。常见错误：不看纵轴刻度直接猜答案、混淆「most」（最多）和「least」（最少）、计算差值时忘记减法、求总数时漏掉某个条。题目是简体中文家长说明 + 英文题干。本周配有双向对照表，显示题目对应的官方 2021 Primary Mathematics Syllabus P3 内容点（Statistics: Reading and interpreting bar graphs; Comparing data; Solving simple problems involving bar graphs），以及 MOE AEIS 的「preceding level」规则（申请 P4 → 掌握 P3 内容）。注意：P3 只教条形图，不教 P4 的折线图（line graph）或 P5 的饼图（pie chart）。题目用文字描述条形图（因为系统是文字 MCQ，没有图片上传功能），例如「Favourite fruit (each bar = number of children) Apple 8, Orange 5, Mango 12, Banana 7」。数字保持简单，条的高度差别明显，便于比较。",
      videoUrl: null,
      kaizenFocus: null,
      questions: [
        {
          type: "reading",
          order: 1,
          content: `Read each question and choose the correct answer. The bar graphs are described in text form below.

Bar graph 1: Favourite Fruits
(Each bar shows the number of children who chose that fruit)
Apple: 8 children
Orange: 5 children
Mango: 12 children
Banana: 7 children

Bar graph 2: Favourite Sports
(Each bar shows the number of students)
Football: 15 students
Basketball: 10 students
Swimming: 18 students
Badminton: 9 students

Bar graph 3: Favourite Colours
(Each bar shows the number of children)
Red: 6 children
Blue: 14 children
Green: 10 children
Yellow: 4 children

Bar graph 4: Pets at Home
(Each bar shows the number of children who have that pet)
Dog: 11 children
Cat: 9 children
Fish: 5 children
Rabbit: 7 children

Bar graph 5: Favourite Drinks
(Each bar shows the number of children)
Milk: 8 children
Juice: 12 children
Water: 15 children
Tea: 5 children`,
          options: JSON.stringify([
            "Look at Bar graph 1 (Favourite Fruits). How many children chose Apple?|A. 5 children|B. 7 children|C. 8 children|D. 12 children",
            "Look at Bar graph 2 (Favourite Sports). Which sport is the most popular?|A. Football|B. Basketball|C. Swimming|D. Badminton",
            "Look at Bar graph 3 (Favourite Colours). Which colour is the least popular?|A. Red|B. Blue|C. Green|D. Yellow",
            "Look at Bar graph 4 (Pets at Home). How many more children have dogs than fish?|A. 4 children|B. 5 children|C. 6 children|D. 7 children",
            "Look at Bar graph 5 (Favourite Drinks). How many children were surveyed in total?|A. 35 children|B. 40 children|C. 45 children|D. 50 children",
          ]),
          correctAnswer: "C,C,D,C,B",
          points: 5,
        },
        {
          type: "grammar",
          order: 2,
          content: `Choose the correct answer for each question.

Bar graph 6: Number of Books Read
(Each bar shows the number of books read by each student in one month)
Ali: 8 books
Sara: 5 books
Jun Wei: 10 books
Priya: 6 books

Bar graph 7: Favourite Subjects
(Each bar shows the number of students)
English: 12 students
Maths: 16 students
Science: 10 students
Art: 8 students

Bar graph 8: Activities Participated
(Each bar shows the number of children)
Dance: 7 children
Music: 9 children
Drama: 5 children
Robotics: 11 children`,
          options: JSON.stringify([
            "A bar graph is used to show _____ .|A. pictures only|B. data and compare information|C. words and sentences|D. colours and shapes",
            "In a bar graph, the height of the bar shows _____ .|A. the colour|B. the name|C. the number or value|D. the date",
            "Look at Bar graph 6. The tallest bar shows the _____ number of books read.|A. smallest|B. same|C. average|D. greatest",
            "Look at Bar graph 6. The shortest bar shows the _____ number of books read.|A. greatest|B. smallest|C. middle|D. total",
            "Look at Bar graph 7. How many students chose Maths?|A. 10 students|B. 12 students|C. 16 students|D. 8 students",
            "Look at Bar graph 6. How many more books did Ali read than Sara?|A. 2 books|B. 3 books|C. 4 books|D. 5 books",
            "Look at Bar graph 7. What is the total number of students who participated?|A. 40 students|B. 42 students|C. 46 students|D. 50 students",
            "In a bar graph, each bar represents _____ .|A. nothing|B. a category or item|C. the same number|D. only colours",
          ]),
          correctAnswer: "B,C,D,B,C,B,C,B",
          points: 8,
        },
        {
          type: "writing",
          order: 3,
          content: `At Tampines Primary School, Class 3A did a survey about favourite sports. The results are shown in the bar graph below.

Favourite Sports Survey - Class 3A
(Each bar shows the number of students)
Football: 12 students
Basketball: 8 students
Swimming: 10 students
Badminton: 6 students

Answer the following questions. Show your working.

(a) How many students chose Football? Show your working.

(b) Which sport is the most popular? How do you know?

(c) How many more students chose Football than Badminton? Show your working.

写出答案和说明。`,
          points: 10,
        },
      ],
    },
    {
      level: "MATH",
      weekNumber: 14,
      title: "数学 第 14 周 / Maths Week 14",
      description: "AEIS-Primary P4 Mathematics: Whole numbers to 100 000",
      isSample: false,
      errorFocus: null,
      parentBrief: "本周主题：十万以内整数（对应 MOE 小学 P4 数学大纲）。P4 新知识点：10 万以内的数（numbers to 100 000）、位值（place value: 万位 ten thousands、千位 thousands、百位 hundreds、十位 tens、个位 ones）、读写数字、比较大小、排序、数字规律。P3 学过 10 000 以内的数，本周扩展到 100 000（五位数）。申请 P5 入学的孩子需掌握 P4 内容（MOE AEIS preceding level 规则）。常见错误：位值混淆（例如 45 678 中的 5 在千位不是百位）、比较大小时只看首位不看后续位数、数字规律找错模式、写数字时漏写 0 占位。题目是简体中文家长说明 + 英文题干。本周配有双向对照表，显示题目对应的官方 2021 Primary Mathematics Syllabus P4 内容点（Whole Numbers: Numbers up to 100 000; Place value; Reading, writing, comparing and ordering numbers; Number patterns），以及 MOE AEIS 的「preceding level」规则（申请 P5 → 掌握 P4 内容）。注意：P4 只教到 100 000，不教 P5 的小数（decimals）、百分数（percentages）。本周也不教 P4 下学期的因数倍数（factors/multiples）。算术保持在整数加减（5 位数如果大纲允许，否则 4 位数）。",
      videoUrl: null,
      kaizenFocus: null,
      questions: [
        {
          type: "reading",
          order: 1,
          content: `Read each question and choose the correct answer.

Question 1:
At Changi Airport, the number of passengers in one week is 85 432. What is the value of the digit 5 in this number?

Question 2:
Mr Tan's company has 67 890 items in stock. Mrs Lee's company has 67 980 items in stock. Which company has more items?

Question 3:
The school library has 52 147 books. Write this number in words.

Question 4:
A factory produced these numbers of bottles in four months:
January: 34 567
February: 34 756
March: 34 657
April: 34 576
Which month had the highest production?

Question 5:
The population of a town is ninety-three thousand, two hundred and fifteen. Write this number in numerals.`,
          options: JSON.stringify([
            "What is the value of the digit 5 in 85 432?|A. 5|B. 50|C. 500|D. 5 000",
            "Which company has more items in stock?|A. Mr Tan's company|B. Mrs Lee's company|C. Both have the same|D. Cannot tell",
            "Write 52 147 in words.|A. Fifty-two thousand, one hundred and forty-seven|B. Five thousand, two hundred and forty-seven|C. Fifty-two thousand, one hundred and seventy-four|D. Fifty thousand, two hundred and forty-seven",
            "Which month had the highest bottle production?|A. January|B. February|C. March|D. April",
            "Write ninety-three thousand, two hundred and fifteen in numerals.|A. 93 215|B. 93 251|C. 93 125|D. 90 315",
          ]),
          correctAnswer: "D,B,A,B,A",
          points: 5,
        },
        {
          type: "grammar",
          order: 2,
          content: `Choose the correct answer for each question.

Question 6:
In the number 78 456, the digit 7 is in the _____ place.

Question 7:
Arrange these numbers in order from smallest to largest: 45 678, 45 768, 45 687, 45 786.

Question 8:
What is the missing number in this pattern? 52 000, 54 000, 56 000, _____, 60 000

Question 9:
Round 67 482 to the nearest thousand.

Question 10:
In the number 90 345, which digit is in the hundreds place?

Question 11:
Compare: 81 234 _____ 81 324

Question 12:
What is 10 000 more than 56 789?

Question 13:
The smallest 5-digit number is _____ .`,
          options: JSON.stringify([
            "In 78 456, the digit 7 is in the _____ place.|A. thousands|B. ten thousands|C. hundreds|D. tens",
            "Arrange from smallest to largest: 45 678, 45 768, 45 687, 45 786.|A. 45 678, 45 687, 45 768, 45 786|B. 45 768, 45 786, 45 678, 45 687|C. 45 678, 45 768, 45 687, 45 786|D. 45 786, 45 768, 45 687, 45 678",
            "Missing number: 52 000, 54 000, 56 000, _____, 60 000|A. 57 000|B. 58 000|C. 59 000|D. 61 000",
            "Round 67 482 to the nearest thousand.|A. 67 000|B. 68 000|C. 70 000|D. 67 500",
            "In 90 345, which digit is in the hundreds place?|A. 9|B. 0|C. 3|D. 4",
            "Compare: 81 234 _____ 81 324|A. >|B. <|C. =|D. Cannot compare",
            "What is 10 000 more than 56 789?|A. 57 789|B. 66 789|C. 56 799|D. 65 789",
            "The smallest 5-digit number is _____.|A. 10 000|B. 1 000|C. 100 000|D. 11 111",
          ]),
          correctAnswer: "B,A,B,A,C,B,B,A",
          points: 8,
        },
        {
          type: "writing",
          order: 3,
          content: `At Jurong Primary School, the students are learning about large numbers and place value.

(a) The school fundraiser collected $73 685. Write this amount in words. Show the place value of each digit.

(b) Compare these two amounts and write which is larger:
    Fundraiser A: $84 567
    Fundraiser B: $84 657
    Show your working.

(c) The school wants to reach a goal of $90 000. They have collected $73 685. How much more do they need? Show your working.

写出答案和说明。`,
          points: 10,
        },
      ],
    },
    {
      level: "MATH",
      weekNumber: 15,
      title: "数学 第 15 周 / Maths Week 15",
      description: "AEIS-Primary P4 Mathematics: Factors and multiples",
      isSample: false,
      errorFocus: null,
      parentBrief: "本周主题：因数与倍数（factors and multiples），对应官方 2021 Primary Mathematics Syllabus P4 Whole Numbers → Factors and Multiples。P4 新知识点：2.1 factors, multiples and their relationship（因数、倍数及关系）；2.2 determining if a 1-digit number is a factor of a given number within 100（判断一位数是否是 100 以内某数的因数）；2.3 finding the common factors of two given numbers（找两个数的公因数）；2.4 determining if a number is a multiple of a given 1-digit number（判断某数是否是一位数的倍数）；2.5 finding the common multiples of two given 1-digit numbers（找两个一位数的公倍数）。申请 P5 入学的孩子需掌握 P4 内容（MOE AEIS preceding level 规则）。常见错误：把倍数当因数（混淆 factor 和 multiple）、列因数时漏掉 1 和自己、找公倍数时只写其中一个数的倍数。题目是简体中文家长说明 + 英文题干。本周配有双向对照表，显示题目对应的官方 2021 Primary Mathematics Syllabus P4 内容点（Factors and Multiples: 2.1–2.5），以及 MOE AEIS 的「preceding level」规则（申请 P5 → 掌握 P4 内容）。注意：本周不教质数（prime numbers）、质因数分解（prime factorisation）、HCF/LCM 作为算法名称（只说公因数 common factors / 公倍数 common multiples）、小数（decimals）、百分数（percentages）、4 位数 × 1 位数（那是下周）、假分数/带分数（improper/mixed fractions）、折线图（line graphs）。测试「N 是否是 M 的因数」时 M 必须 ≤ 100。公倍数必须是两个一位数的公倍数。",
      videoUrl: null,
      kaizenFocus: null,
      questions: [
        {
          type: "reading",
          order: 1,
          content: `Read each question and choose the correct answer.

Question 1:
Mei has 12 stickers. She wants to arrange them in equal rows with no stickers left over. Which of the following is a factor of 12?

Question 2:
At Jurong Primary School, the P4 students are learning about factors. Mr Tan asks: "Is 6 a factor of 42?" What is the correct answer?

Question 3:
Priya and Jun Wei are finding the common factors of 12 and 18. Which list shows all the common factors?

Question 4:
Ali is counting by sevens: 7, 14, 21, 28, 35. Is 35 a multiple of 7?

Question 5:
The school canteen has plates in packs. They come in packs of 4 and packs of 6. What is the smallest number of plates you can buy if you want the same number from each pack size?`,
          options: JSON.stringify([
            "Which is a factor of 12?|A. 5|B. 8|C. 6|D. 7",
            "Is 6 a factor of 42?|A. Yes, because 42 ÷ 6 = 7 with no remainder|B. No, because 42 ÷ 6 has a remainder|C. Yes, because 6 is less than 42|D. No, because 6 is not in the 7 times table",
            "Common factors of 12 and 18|A. 1, 2, 3, 6|B. 1, 2, 3, 4, 6|C. 2, 3, 6|D. 1, 3, 6",
            "Is 35 a multiple of 7?|A. No, because 35 ÷ 7 has a remainder|B. Yes, because 7 × 5 = 35|C. No, because 7 is smaller than 35|D. Yes, because 35 is odd",
            "Smallest common number for packs of 4 and 6|A. 4|B. 6|C. 12|D. 24",
          ]),
          correctAnswer: "C,A,A,B,C",
          points: 5,
        },
        {
          type: "grammar",
          order: 2,
          content: `Choose the correct answer for each question.

Question 6:
Which of the following is NOT a factor of 24?

Question 7:
List all the factors of 18.

Question 8:
Which number is a common factor of both 20 and 30?

Question 9:
Which of these numbers is a multiple of 8?

Question 10:
What are the first three common multiples of 3 and 4?

Question 11:
A number is a factor of 36 and also a factor of 48. Which number could it be?

Question 12:
Priya says: "Any number is a factor of itself." Is she correct?

Question 13:
Which statement is true about the relationship between factors and multiples?`,
          options: JSON.stringify([
            "Which is NOT a factor of 24?|A. 3|B. 5|C. 6|D. 8",
            "All factors of 18|A. 1, 2, 3, 6, 9, 18|B. 1, 2, 3, 9, 18|C. 2, 3, 6, 9, 18|D. 1, 3, 6, 9, 18",
            "Common factor of 20 and 30|A. 10|B. 15|C. 20|D. 60",
            "Which is a multiple of 8?|A. 42|B. 48|C. 50|D. 54",
            "First three common multiples of 3 and 4|A. 3, 4, 7|B. 12, 24, 36|C. 4, 8, 12|D. 3, 6, 9",
            "Common factor of 36 and 48|A. 18|B. 24|C. 12|D. 36",
            "Any number is a factor of itself|A. No, only 1 is a factor of itself|B. Yes, because any number divides itself exactly|C. No, factors must be smaller|D. Yes, but only for even numbers",
            "Relationship between factors and multiples|A. Factors are always larger than multiples|B. If 4 is a factor of 12, then 12 is a multiple of 4|C. Multiples are always smaller than factors|D. Factors and multiples are the same thing",
          ]),
          correctAnswer: "B,A,A,B,B,C,B,B",
          points: 8,
        },
        {
          type: "writing",
          order: 3,
          content: `At East Coast Primary School, the students are learning about factors and multiples.

(a) The school has 48 books to arrange on shelves. Each shelf must have the same number of books with no books left over. List all the possible numbers of books that can go on each shelf (list all factors of 48).

(b) Jun Wei has some marbles. He can group them in 6s with no marbles left over. He can also group them in 9s with no marbles left over. What is the smallest number of marbles Jun Wei could have? Show your working.

(c) Mei says: "15 is a multiple of 3." Ali says: "3 is a factor of 15." Are both statements correct? Explain the relationship between factors and multiples using this example.

写出答案和说明。`,
          points: 10,
        },
      ],
    },

    // MATH WEEK 16
    {
      level: "MATH",
      weekNumber: 16,
      title: "数学 第 16 周 / Maths Week 16",
      description: "AEIS-Primary P4 Mathematics: Four operations (multiply and divide)",
      isSample: false,
      errorFocus: null,
      parentBrief: "本周主题：四则运算里的乘除算法（multiplication / division algorithm），对应官方 2021 Primary Mathematics Syllabus P4 Whole Numbers → Four Operations。P4 新知识点：3.1 multiplication algorithm（乘法算法）up to 4 digits by 1 digit（4 位数 × 1 位数）、up to 3 digits by 2 digits（3 位数 × 2 位数）；3.2 division algorithm（除法算法）up to 4 digits by 1 digit（4 位数 ÷ 1 位数）。申请 P5 入学的孩子需掌握 P4 内容（MOE AEIS preceding level 规则）。常见错误：进位漏写或写错位置（carry 错）、个位对齐错误（竖式没对齐 place value）、余数 ≥ 除数（remainder 必须小于 divisor）、3 位数 × 2 位数把第二个部分积放错位（partial product 对齐错）。题目是简体中文家长说明 + 英文题干。本周配有双向对照表，显示题目对应的官方 2021 Primary Mathematics Syllabus P4 内容点（Four Operations: 3.1 multiplication algorithm, 3.2 division algorithm），以及 MOE AEIS 的「preceding level」规则（申请 P5 → 掌握 P4 内容）。注意：本周不教运算顺序（order of operations）、括号（brackets）、因数倍数（factors/multiples，那是上周）、小数（decimals）、百分数（percentages）、余数当分数写（remainder as fraction）、两位数除法（long division by 2-digit divisor, 那是 P5）、计算器（calculator）、5 位数 × 任何数（five digits × anything）。4 位数 ÷ 1 位数有余数是可以的，如果题目要求 quotient and remainder（P4 标准）。乘积和被除数都要保持在官方规定的位数范围内。",
      videoUrl: null,
      kaizenFocus: null,
      questions: [
        {
          type: "reading",
          order: 1,
          content: `Read each question and choose the correct answer.

Question 1:
At East Coast Primary School, the library has 8 shelves. Each shelf holds 1267 books. How many books are there in total?

Question 2:
Mr Tan bought 23 boxes of pencils for the art room. Each box contains 124 pencils. How many pencils did he buy altogether?

Question 3:
Jurong Primary School collected 9856 bottle caps for recycling. The students want to pack them equally into 4 bins. How many bottle caps will each bin have?

Question 4:
The school library received 9847 new books. The librarian wants to arrange them equally on 8 shelves. How many books will go on each shelf, and how many books will be left over?

Question 5:
A bakery in Chinatown made 5634 pineapple tarts. They pack 6 tarts in each box. How many boxes can they fill, and how many tarts will be left over?`,
          options: JSON.stringify([
            "Total books in library|A. 10136|B. 10036|C. 9136|D. 11136",
            "Total pencils Mr Tan bought|A. 2752|B. 2852|C. 2952|D. 2862",
            "Bottle caps in each bin|A. 2464|B. 2364|C. 2564|D. 2454",
            "9847 ÷ 8|A. 1230 R7|B. 1231 R7|C. 1230 R8|D. 1231 R0",
            "Boxes and leftover tarts|A. 939 boxes, 0 tarts left|B. 939 boxes, 6 tarts left|C. 938 boxes, 6 tarts left|D. 939 boxes, 2 tarts left",
          ]),
          correctAnswer: "A,B,A,A,A",
          points: 5,
        },
        {
          type: "grammar",
          order: 2,
          content: `Choose the correct answer for each question.

Question 6:
What is 3456 × 7?

Question 7:
What is 8293 × 8?

Question 8:
What is 425 × 36?

Question 9:
What is 567 × 29?

Question 10:
What is 8964 ÷ 4?

Question 11:
What is 7236 ÷ 3?

Question 12:
What is 9125 ÷ 5?

Question 13:
Mei solved 6847 ÷ 7. She got quotient 978 and remainder 1. Is she correct?`,
          options: JSON.stringify([
            "3456 × 7|A. 24192|B. 24292|C. 24182|D. 24092",
            "8293 × 8|A. 66344|B. 66334|C. 66244|D. 66444",
            "425 × 36|A. 15300|B. 15200|C. 15400|D. 15100",
            "567 × 29|A. 16443|B. 16343|C. 16543|D. 16243",
            "8964 ÷ 4|A. 2241|B. 2242|C. 2240|D. 2243",
            "7236 ÷ 3|A. 2412|B. 2512|C. 2312|D. 2612",
            "9125 ÷ 5|A. 1825|B. 1925|C. 1725|D. 1625",
            "Is Mei correct? 6847 ÷ 7 = 978 R1|A. No, the quotient should be 977|B. No, the remainder should be 0|C. Yes, she is correct|D. No, the remainder should be 2",
          ]),
          correctAnswer: "A,A,A,A,A,A,A,C",
          points: 8,
        },
        {
          type: "writing",
          order: 3,
          content: `At Bedok Primary School, the students are learning about the four operations.

(a) The school cafeteria serves 1856 students lunch every day. If lunch costs $3 for each student, how much money does the cafeteria collect in one day? Show your working.

(b) Jun Wei's class collected 4365 marbles for a charity sale. They want to pack them equally into 9 bags. How many marbles will go in each bag, and how many marbles will be left over? Show your working and explain what the remainder means.

(c) The school ordered 248 boxes of markers. Each box contains 45 markers. The art teacher wants to know if there are enough markers for all 600 students to get at least 18 markers each. Calculate the total number of markers and show whether there are enough. Show your working.

写出答案和说明。`,
          points: 10,
        },
      ],
    },

    // MATH WEEK 17
    {
      level: "MATH",
      weekNumber: 17,
      title: "数学 第 17 周 / Maths Week 17",
      description: "AEIS-Primary P4 Mathematics: Mixed numbers and improper fractions",
      isSample: false,
      errorFocus: null,
      parentBrief: "本周主题：带分数与假分数（mixed numbers / improper fractions）及互换，对应官方 2021 Primary Mathematics Syllabus P4 Fractions 1.1 mixed numbers, improper fractions and their relationship。申请 P5 入学的孩子需掌握 P4 内容（MOE AEIS preceding level 规则）。常见错误：假分数分子分母对调（conversion error: swapping numerator & denominator）、带分数换成假分数时只乘不加整数部分（conversion error: multiplying but forgetting to add the whole number）、化成带分数时余数当分子忘了（conversion error: forgetting remainder becomes numerator）。题目是简体中文家长说明 + 英文题干。本周配有双向对照表，显示题目对应的官方 2021 Primary Mathematics Syllabus P4 内容点（Fractions: 1.1 mixed numbers, improper fractions and their relationship），以及 MOE AEIS 的「preceding level」规则（申请 P5 → 掌握 P4 内容）。明确说明：本周不教一组的几分之几（fraction of a set, 那是下周）、异分母加减（adding/subtracting unlike fractions, 后续周）、带分数加减（adding mixed numbers, P5）、分数乘法（multiplying fractions, P5）、小数（decimals）、百分数（percentages）。本周分母不超过 12（denominators not exceeding 12）。",
      videoUrl: null,
      kaizenFocus: null,
      questions: [
        {
          type: "reading",
          order: 1,
          content: `Read each question and choose the correct answer.

Question 1:
At Tampines Primary School, the teacher drew two fractions on the board: 2 1/3 and 7/3. She asked the students, "Which of these is a mixed number?"

Question 2:
Jun Wei has 2 1/3 pizzas left from the party. He wants to write this as an improper fraction. What is 2 1/3 as an improper fraction?

Question 3:
The bakery has 11/4 kg of flour. The baker wants to write this as a mixed number to show how many full kilograms and how many quarters. What is 11/4 as a mixed number?

Question 4:
Mei solved a problem and got the answer 17/5. Her friend Priya solved it and got 3 2/5. The teacher said they are both correct because the fractions are equal. Which statement is true?

Question 5:
At the canteen, Ali bought 3/2 bottles of drink. Which statement about this fraction is correct?`,
          options: JSON.stringify([
            "Which is a mixed number?|A. 2 1/3|B. 7/3|C. Both|D. Neither",
            "2 1/3 as improper fraction|A. 5/3|B. 6/3|C. 7/3|D. 8/3",
            "11/4 as mixed number|A. 2 1/4|B. 2 3/4|C. 3 1/4|D. 2 2/4",
            "17/5 and 3 2/5|A. They are not equal|B. 17/5 is mixed, 3 2/5 is improper|C. They are equal (both show the same amount)|D. Only one answer can be correct",
            "About 3/2|A. It is a proper fraction|B. It is an improper fraction|C. It is a mixed number|D. It cannot be written as a fraction",
          ]),
          correctAnswer: "A,C,B,C,B",
          points: 5,
        },
        {
          type: "grammar",
          order: 2,
          content: `Choose the correct answer for each question.

Question 6:
What is 1 2/5 as an improper fraction?

Question 7:
What is 13/6 as a mixed number?

Question 8:
What is 3 1/4 as an improper fraction?

Question 9:
What is 19/8 as a mixed number?

Question 10:
Which fraction is equal to 4 1/3?

Question 11:
What is 2 5/6 as an improper fraction?

Question 12:
What is 23/10 as a mixed number?

Question 13:
Look at these fractions: 2 1/4, 5/3, 1 5/8, 9/2. How many of them are improper fractions?`,
          options: JSON.stringify([
            "1 2/5 to improper|A. 7/5|B. 3/5|C. 5/7|D. 8/5",
            "13/6 to mixed|A. 2 1/6|B. 1 7/6|C. 2 1/3|D. 1 1/6",
            "3 1/4 to improper|A. 12/4|B. 13/4|C. 4/13|D. 7/4",
            "19/8 to mixed|A. 2 1/8|B. 2 3/8|C. 1 11/8|D. 3 1/8",
            "Equal to 4 1/3|A. 12/3|B. 13/3|C. 5/3|D. 4/3",
            "2 5/6 to improper|A. 17/6|B. 7/6|C. 16/6|D. 12/6",
            "23/10 to mixed|A. 2 3/10|B. 2 1/3|C. 3 2/10|D. 1 13/10",
            "How many improper fractions?|A. 1|B. 2|C. 3|D. 4",
          ]),
          correctAnswer: "A,A,B,B,B,A,A,B",
          points: 8,
        },
        {
          type: "writing",
          order: 3,
          content: `At Woodlands Primary School, the students are learning about mixed numbers and improper fractions.

(a) Ali has 3 2/5 boxes of crayons. Convert this mixed number to an improper fraction. Show your working.

(b) The library received 17/6 kg of recycled paper. Convert this improper fraction to a mixed number to show how many full kilograms and the remaining fraction. Show your working.

(c) Priya measured 9/4 metres of ribbon for her art project. Is this a mixed number or an improper fraction? Convert it to the other form and explain what the answer means. Show your working.

写出答案和说明。`,
          points: 10,
        },
      ],
    },

    // MATH WEEK 18
    {
      level: "MATH",
      weekNumber: 18,
      title: "数学 第 18 周 / Maths Week 18",
      description: "AEIS-Primary P4 Mathematics: Fraction of a set",
      isSample: false,
      errorFocus: null,
      parentBrief: "本周主题：一组的几分之几（fraction of a set），对应官方 2021 Primary Mathematics Syllabus P4 Fractions 2.1 fraction as part of a set。申请 P5 入学的孩子需掌握 P4 内容（MOE AEIS preceding level 规则）。算法：先÷分母再×分子。常见错误：先乘后除（multiplying before dividing）、把 of 当成减去（misinterpreting 'of' as subtraction）、分母分子对调（swapping numerator and denominator）。题目是简体中文家长说明 + 英文题干。本周配有双向对照表，显示题目对应的官方 2021 Primary Mathematics Syllabus P4 内容点（Fractions: 2.1 fraction as part of a set），以及 MOE AEIS 的「preceding level」规则（申请 P5 → 掌握 P4 内容）。明确说明：本周不教带分数互换（mixed / improper conversion, 已在第 17 周）、异分母加减（adding/subtracting unlike fractions, 后续周）、分数乘法（multiplying fractions, P5）、小数（decimals）、百分数（percentages）、需要余数作为分数的除法问题（leftover items with remainder as fraction）。分母不超过 12（denominators not exceeding 12）。集合必须能整除（sets must divide evenly）。",
      videoUrl: null,
      kaizenFocus: null,
      questions: [
        {
          type: "reading",
          order: 1,
          content: `Read each question and choose the correct answer.

Question 1:
At Tampines Primary School, there are 12 students in the art class. The teacher asks 1/4 of the students to prepare the paint brushes. How many students will prepare the paint brushes?

Question 2:
Jun Wei has 18 stickers. He gives 2/3 of his stickers to his friend Priya. How many stickers does Jun Wei give to Priya?

Question 3:
The library has 20 books about Singapore animals. 3/5 of the books are about birds. How many books are about birds?

Question 4:
At the canteen, there are 24 chairs. 5/8 of the chairs are red. The rest are blue. How many chairs are red?

Question 5:
In Mei's class, there are 32 children. 3/4 of the children walk to school. How many children walk to school?`,
          options: JSON.stringify([
            "1/4 of 12 students|A. 3 students|B. 4 students|C. 6 students|D. 8 students",
            "2/3 of 18 stickers|A. 6 stickers|B. 9 stickers|C. 12 stickers|D. 16 stickers",
            "3/5 of 20 books|A. 8 books|B. 10 books|C. 12 books|D. 15 books",
            "5/8 of 24 chairs|A. 12 chairs|B. 15 chairs|C. 18 chairs|D. 20 chairs",
            "3/4 of 32 children|A. 8 children|B. 16 children|C. 24 children|D. 28 children",
          ]),
          correctAnswer: "A,C,C,B,C",
          points: 5,
        },
        {
          type: "grammar",
          order: 2,
          content: `Choose the correct answer for each question.

Question 6:
What is 1/3 of 15?

Question 7:
What is 2/5 of 30?

Question 8:
Priya has 16 pencils. She uses 3/4 of them for her drawing. How many pencils does she use?

Question 9:
At Woodlands Primary School, there are 36 books on the shelf. 5/6 of the books are story books. How many story books are there?

Question 10:
Ali bought 28 erasers. He gave 3/7 of the erasers to his classmates. How many erasers did he give away?

Question 11:
In the school garden, there are 40 plants. 7/10 of the plants are flowers. How many plants are flowers?

Question 12:
Jun Wei collected 48 bottle caps. He gave 5/8 of them to the recycling bin. How many bottle caps did he give?

Question 13:
Which calculation shows 2/3 of 18?`,
          options: JSON.stringify([
            "1/3 of 15|A. 3|B. 5|C. 6|D. 10",
            "2/5 of 30|A. 6|B. 10|C. 12|D. 15",
            "3/4 of 16 pencils|A. 4 pencils|B. 8 pencils|C. 12 pencils|D. 14 pencils",
            "5/6 of 36 books|A. 6 books|B. 18 books|C. 24 books|D. 30 books",
            "3/7 of 28 erasers|A. 4 erasers|B. 8 erasers|C. 12 erasers|D. 21 erasers",
            "7/10 of 40 plants|A. 4 plants|B. 14 plants|C. 28 plants|D. 35 plants",
            "5/8 of 48 bottle caps|A. 6 bottle caps|B. 24 bottle caps|C. 30 bottle caps|D. 40 bottle caps",
            "2/3 of 18|A. 18 − 2 = 16|B. 18 × 3 ÷ 2 = 27|C. 18 ÷ 3 × 2 = 12|D. 18 ÷ 2 × 3 = 27",
          ]),
          correctAnswer: "B,C,C,D,C,C,C,C",
          points: 8,
        },
        {
          type: "writing",
          order: 3,
          content: `At Raffles Primary School, the students are learning about fractions of a set.

(a) The art teacher has 20 markers. She uses 2/5 of the markers for the drawing lesson. How many markers does she use? Show your working.

(b) In the library, there are 30 children. 3/10 of the children are reading books about Singapore history. How many children are reading books about Singapore history? Show your working.

(c) Priya has 24 stickers of animals. 5/6 of the stickers are stickers of birds. The rest are stickers of fish. How many stickers of birds does Priya have? Show your working and explain your answer.

写出算式、答案和说明。`,
          points: 10,
        },
      ],
    },
    {
      level: "MATH",
      weekNumber: 19,
      title: "数学 第 19 周 / Maths Week 19",
      description: "AEIS-Primary P4 Mathematics: Adding and subtracting fractions",
      isSample: false,
      errorFocus: null,
      parentBrief: "本周主题：分数加减（adding and subtracting fractions），包括同分母加减（like fractions, 如 2/7 + 3/7）和异分母加减（unlike fractions with TWO denominators, 如 1/2 + 1/4, 2/3 − 1/6），对应官方 2021 Primary Mathematics Syllabus P4 Fractions 3.1 adding and subtracting fractions with denominators of given fractions not exceeding 12 and not more than two different denominators。申请 P5 入学的孩子需掌握 P4 内容（MOE AEIS preceding level 规则）。算法：同分母直接加减分子（2/7 + 3/7 = 5/7），异分母先通分再加减（1/2 + 1/4 = 2/4 + 1/4 = 3/4）。答案要化简到最简分数（simplest form, 如 4/8 = 1/2）。常见错误：分子分母一起加（adding numerators and denominators together, 1/2 + 1/3 ≠ 2/5）、异分母不先通分（not finding common denominator first）、通分后忘了改分子（forgetting to adjust numerator after finding common denominator）、答案不约分（not simplifying to simplest form, 写 4/8 而不是 1/2）。题目是简体中文家长说明 + 英文题干。本周配有双向对照表，显示题目对应的官方 2021 Primary Mathematics Syllabus P4 内容点（Fractions: 3.1 adding and subtracting fractions），以及 MOE AEIS 的「preceding level」规则（申请 P5 → 掌握 P4 内容）。明确说明：本周不教带分数加减（adding/subtracting mixed numbers, P5）、分数乘法（multiplying fractions, P5）、三个不同分母（three different denominators）、分母大于 12（denominators > 12）、小数（decimals）、百分数（percentages）。本周只教至多两个不同分母（not more than two different denominators）。",
      videoUrl: null,
      kaizenFocus: null,
      questions: [
        {
          type: "reading",
          order: 1,
          content: `Read each question and choose the correct answer.

Question 1:
At Bedok Primary School, the art class made paper flowers. 2/7 of the flowers are red and 3/7 are yellow. What fraction of the flowers are red or yellow?

Question 2:
Mei ate 5/8 of a pizza. Jun Wei ate 1/8 of the same pizza. What fraction of the pizza is left? Give your answer in simplest form.

Question 3:
Ali had 1/2 of a cake. Priya had 1/4 of the same cake. What fraction of the cake do they have altogether?

Question 4:
In the library, 2/3 of the books are English books. 1/6 of the books are Chinese books. What fraction more are the English books than the Chinese books? Give your answer in simplest form.

Question 5:
At the canteen, 1/3 of the tables are red and 1/6 are blue. What fraction of the tables are red or blue? Give your answer in simplest form.`,
          options: JSON.stringify([
            "2/7 + 3/7|A. 5/14|B. 5/7|C. 6/7|D. 1",
            "1 − (5/8 + 1/8) or 8/8 − 6/8|A. 1/4|B. 2/8|C. 1/2|D. 3/4",
            "1/2 + 1/4|A. 2/6|B. 1/3|C. 3/4|D. 2/4",
            "2/3 − 1/6|A. 1/3|B. 1/2|C. 1/6|D. 3/6",
            "1/3 + 1/6|A. 2/9|B. 1/2|C. 3/6|D. 2/6",
          ]),
          correctAnswer: "B,A,C,B,B",
          points: 5,
        },
        {
          type: "grammar",
          order: 2,
          content: `Choose the correct answer for each question.

Question 6:
What is 3/4 − 1/2?

Question 7:
What is 5/12 + 1/4? Give your answer in simplest form.

Question 8:
What is 5/6 − 1/3? Give your answer in simplest form.

Question 9:
Mei bought 1/4 of a melon. Ali bought 1/8 of the same melon. What fraction of the melon did they buy altogether?

Question 10:
In a class, 7/10 of the children are girls. 1/5 of the children are boys who wear glasses. What fraction more are the girls than boys who wear glasses? Give your answer in simplest form.

Question 11:
At Woodlands Primary School, the students planted flowers. 3/8 of the flowers are roses and 1/4 are sunflowers. What fraction of the flowers are roses or sunflowers?

Question 12:
Priya had 5/6 of a ribbon. She used 1/2 of the ribbon for a gift. What fraction of the ribbon does she have left? Give your answer in simplest form.

Question 13:
Which calculation shows adding 1/2 and 1/4?`,
          options: JSON.stringify([
            "3/4 − 1/2|A. 2/4|B. 1/4|C. 1/2|D. 2/2",
            "5/12 + 1/4|A. 6/16|B. 8/12|C. 2/3|D. 1/3",
            "5/6 − 1/3|A. 4/3|B. 3/6|C. 1/2|D. 2/3",
            "1/4 + 1/8|A. 2/12|B. 3/8|C. 1/2|D. 2/8",
            "7/10 − 1/5|A. 6/5|B. 1/2|C. 5/10|D. 6/10",
            "3/8 + 1/4|A. 4/12|B. 5/8|C. 1/2|D. 4/8",
            "5/6 − 1/2|A. 4/4|B. 2/6|C. 1/3|D. 1/2",
            "1/2 + 1/4|A. 1/2 + 1/4 = 2/6|B. 1/2 + 1/4 = 2/4 + 1/4 = 3/4|C. 1/2 + 1/4 = 1/6|D. 1/2 + 1/4 = 2/8",
          ]),
          correctAnswer: "B,C,C,B,B,B,C,B",
          points: 8,
        },
        {
          type: "writing",
          order: 3,
          content: `At Raffles Primary School, the students are learning about adding and subtracting fractions.

(a) The art class has 2/5 of red paint and 1/5 of blue paint. What fraction of paint is red or blue? Show your working.

(b) Ali had 3/4 of a sandwich. He ate 1/2 of the sandwich. What fraction of the sandwich does he have left? Show your working and give your answer in simplest form.

(c) In the music class, 1/3 of the students play the piano and 1/6 play the violin. What fraction of the students play the piano or the violin? Show your working and give your answer in simplest form.

写出算式、答案和说明。For unlike fractions, show how you find the common denominator and adjust the numerators.`,
          points: 10,
        },
      ],
    },
    {
      level: "MATH",
      weekNumber: 20,
      title: "数学 第 20 周 / Maths Week 20",
      description: "AEIS-Primary P4 Mathematics: Decimals up to 3 decimal places",
      isSample: false,
      errorFocus: null,
      parentBrief: "本周主题：小数到三位（decimals up to 3 decimal places）：十分位 tenths、百分位 hundredths、千分位 thousandths，包括 1.1 小数记法和位值（notation, representations and place values）、1.2 比较和排序（comparing and ordering decimals）、1.3 小数转分数（expressing decimals as fractions）、1.4 分数转小数当分母是 10 或 100 的因数时（expressing fractions as decimals when the denominator is a factor of 10 or 100）、1.5 四舍五入到整数/1 位/2 位（rounding decimals to the nearest whole number / 1 decimal place / 2 decimal places），对应官方 2021 Primary Mathematics Syllabus P4 Decimals 1.1–1.5。申请 P5 入学的孩子需掌握 P4 内容（MOE AEIS preceding level 规则）。位值：0.256 中的 5 在百分位 = 0.05。比较：0.47 < 0.5 因为 0.47 = 47 hundredths, 0.50 = 50 hundredths。转换：0.4 = 4/10 = 2/5（要约分到最简）；3/5 = 6/10 = 0.6（分母是 10 的因数）。四舍五入：2.36 到 1 d.p. = 2.4（看百分位 6 ≥ 5 进位）；5.852 到 2 d.p. = 5.85（看千分位 2 < 5 不进位）。常见错误：0.35 当成 0.350 比大小时只看位数不看值（错误地认为位数多就大）、0.4 = 4/10 忘了约分（应该是 2/5）、四舍五入看错位（要四舍五入到 1 d.p. 却看了百分位而不是十分位后一位）。题目是简体中文家长说明 + 英文题干。本周配有双向对照表，显示题目对应的官方 2021 Primary Mathematics Syllabus P4 内容点（Decimals 1.1–1.5），以及 MOE AEIS 的「preceding level」规则（申请 P5 → 掌握 P4 内容）。明确说明：本周不教小数加减乘除（adding/subtracting/multiplying/dividing decimals，那是下周 2.1 和后续 3.1–3.3）、小数×÷10/100/1000（P5）、百分数（percentages）、4 位小数（4 decimal places）。",
      videoUrl: null,
      kaizenFocus: null,
      questions: [
        {
          type: "reading",
          order: 1,
          content: `Read each question and choose the correct answer.

Question 1:
At Tampines Primary School, Jun Wei wrote the number 3.256 on the board. What is the value of the digit 5 in this number?

Question 2:
Priya ran 0.47 km. Mei ran 0.5 km. Who ran further?

Question 3:
Ali measured three ribbons. The lengths are 0.8 m, 0.75 m, and 0.805 m. Arrange the ribbons from shortest to longest.

Question 4:
In the canteen, 0.4 of the tables have red chairs. Write 0.4 as a fraction in simplest form.

Question 5:
At the library, 3/5 of the books are fiction. Write 3/5 as a decimal.`,
          options: JSON.stringify([
            "Value of 5 in 3.256|A. 0.5|B. 0.05|C. 0.005|D. 5",
            "0.47 km vs 0.5 km|A. Priya ran further|B. Mei ran further|C. They ran the same distance|D. Cannot tell",
            "Order 0.8, 0.75, 0.805 from shortest to longest|A. 0.8, 0.75, 0.805|B. 0.75, 0.805, 0.8|C. 0.75, 0.8, 0.805|D. 0.805, 0.8, 0.75",
            "0.4 as a fraction in simplest form|A. 4/10|B. 2/5|C. 4/100|D. 1/4",
            "3/5 as a decimal|A. 0.3|B. 0.35|C. 0.6|D. 0.65",
          ]),
          correctAnswer: "B,B,C,B,C",
          points: 5,
        },
        {
          type: "grammar",
          order: 2,
          content: `Choose the correct answer for each question.

Question 6:
What is 0.25 written as a fraction in simplest form?

Question 7:
What is 7/10 written as a decimal?

Question 8:
Round 2.36 to 1 decimal place.

Question 9:
Round 5.852 to 2 decimal places.

Question 10:
Which is greater: 0.6 or 0.58?

Question 11:
What is 1/4 written as a decimal?

Question 12:
Round 3.47 to the nearest whole number.

Question 13:
What is 0.75 written as a fraction in simplest form?`,
          options: JSON.stringify([
            "0.25 as fraction in simplest form|A. 25/100|B. 1/4|C. 2/5|D. 5/20",
            "7/10 as decimal|A. 0.07|B. 0.7|C. 7.0|D. 0.71",
            "Round 2.36 to 1 d.p.|A. 2.3|B. 2.4|C. 2.0|D. 3.0",
            "Round 5.852 to 2 d.p.|A. 5.85|B. 5.86|C. 5.9|D. 6.0",
            "0.6 vs 0.58|A. 0.6 > 0.58|B. 0.6 < 0.58|C. 0.6 = 0.58|D. Cannot tell",
            "1/4 as decimal|A. 0.14|B. 0.25|C. 0.4|D. 0.5",
            "Round 3.47 to nearest whole number|A. 3|B. 3.5|C. 4|D. 3.4",
            "0.75 as fraction in simplest form|A. 75/100|B. 7/10|C. 3/4|D. 15/20",
          ]),
          correctAnswer: "B,B,B,A,A,B,A,C",
          points: 8,
        },
        {
          type: "writing",
          order: 3,
          content: `At Bedok Primary School, the students are learning about decimals.

(a) In the number 12.385, what is the value of the digit 8? Show your working.

(b) Compare and arrange these decimals from smallest to greatest: 1.2, 1.15, 1.205. Show your working.

(c) Convert 0.6 to a fraction in simplest form. Convert 3/4 to a decimal. Round 4.68 to 1 decimal place. Show your working for each.

写出算式、答案和说明。For comparing decimals, show how you align decimal places. For fractions, show simplification steps.`,
          points: 10,
        },
      ],
    },
    {
      level: "MATH",
      weekNumber: 21,
      title: "数学 第 21 周 / Maths Week 21",
      description: "AEIS-Primary P4 Mathematics: Adding and subtracting decimals",
      isSample: false,
      errorFocus: null,
      parentBrief: "本周主题：小数加减（最多两位小数，up to 2 decimal places），对应官方 2021 Primary Mathematics Syllabus P4 Decimals 2.1 adding and subtracting decimals (up to 2 decimal places)。申请 P5 入学的孩子需掌握 P4 内容（MOE AEIS preceding level 规则）。关键技能：对齐小数点，补零补位，竖式计算。金额新元和分（dollars and cents）是 2 位小数可以练。常见错误：不对齐小数点（把 3.45 和 2.7 的个位对齐而不是小数点对齐）、从左边开始减（应该从右边个位或小数部分开始）、借位时漏了某一位。题目是简体中文家长说明 + 英文题干。本周配有双向对照表，显示题目对应的官方 2021 Primary Mathematics Syllabus P4 Decimals 2.1，以及申请 P5 → 掌握 P4 的规则。本周不教：三位小数的加减（那超出 P4 Decimals 2.1 范围）、小数乘除（Decimals 3.1–3.3 是 P4 后续内容）、乘除 10/100/1000（P5）、百分数（percentages）。",
      videoUrl: null,
      kaizenFocus: null,
      questions: [
        {
          type: "reading",
          order: 1,
          content: `Read each question and choose the correct answer.

Question 1:
At Tampines Primary School, Jun Wei measured 3.45 m of ribbon for a banner. Priya measured 2.7 m of ribbon. How much ribbon do they have altogether?

Question 2:
Mei bought a book for $4.50 and a pen for $2.75. How much money did she spend in total?

Question 3:
Ali had 10 litres of juice. He used 3.26 litres for the school party. How much juice does he have left?

Question 4:
At the library, a shelf is 7.2 m long. If 0.45 m is taken up by bookends, how much space is left for books?

Question 5:
In PE class, Priya ran 12.5 km in the first week and 3.75 km in the second week. What is the total distance she ran?`,
          options: JSON.stringify([
            "3.45 m + 2.7 m|A. 5.75 m|B. 6.15 m|C. 6.12 m|D. 5.45 m",
            "$4.50 + $2.75|A. $7.25|B. $6.25|C. $7.75|D. $6.75",
            "10 l − 3.26 l|A. 7.74 l|B. 6.74 l|C. 7.26 l|D. 6.84 l",
            "7.2 m − 0.45 m|A. 6.85 m|B. 6.75 m|C. 7.75 m|D. 6.95 m",
            "12.5 km + 3.75 km|A. 15.25 km|B. 16.25 km|C. 15.75 km|D. 16.75 km",
          ]),
          correctAnswer: "B,A,B,B,B",
          points: 5,
        },
        {
          type: "grammar",
          order: 2,
          content: `Choose the correct answer for each question.

Question 6:
What is 5.04 + 0.8?

Question 7:
What is 6.8 − 1.35?

Question 8:
Mei spent $9.00 on lunch and $2.48 on a drink. How much change does she get from $20?

Question 9:
Jun Wei has 15.6 m of string. He cuts off 2.75 m. How much string is left?

Question 10:
What is 4.5 + 3.86?

Question 11:
A tank had 25.0 litres of water. After cleaning, 8.45 litres were used. How much water is left?

Question 12:
Priya bought items for $3.60 and $4.95. How much did she spend?

Question 13:
What is 10.00 − 4.37?`,
          options: JSON.stringify([
            "5.04 + 0.8|A. 5.84|B. 5.12|C. 5.48|D. 5.04",
            "6.8 − 1.35|A. 6.65|B. 5.45|C. 5.55|D. 6.45",
            "$9.00 + $2.48, change from $20|A. $8.52|B. $8.48|C. $9.52|D. $7.52",
            "15.6 m − 2.75 m|A. 13.85 m|B. 12.85 m|C. 13.75 m|D. 12.75 m",
            "4.5 + 3.86|A. 7.36|B. 8.36|C. 7.46|D. 8.46",
            "25.0 l − 8.45 l|A. 17.55 l|B. 16.55 l|C. 17.45 l|D. 16.45 l",
            "$3.60 + $4.95|A. $7.55|B. $8.55|C. $8.45|D. $7.65",
            "10.00 − 4.37|A. 6.63|B. 5.63|C. 6.73|D. 5.73",
          ]),
          correctAnswer: "A,B,A,B,B,B,B,B",
          points: 8,
        },
        {
          type: "writing",
          order: 3,
          content: `At Bedok Primary School, the students are learning about adding and subtracting decimals.

(a) Ali bought a textbook for $18.65 and a notebook for $3.50. How much did he spend in total? Show your working, aligning the decimal points.

(b) The school water tank had 45.8 litres of water in the morning. By lunchtime, 12.35 litres had been used. How much water is left? Show your working, aligning the decimal points.

(c) In the science experiment, Mei measured 8.0 cm of liquid in a beaker. She added 2.45 cm more liquid. Then Jun Wei used 3.8 cm of the liquid for his experiment. How much liquid is left in the beaker? Show all your working steps, aligning decimal points.

写出算式、答案和说明。Show working by aligning decimal points vertically. Explain any common errors (not aligning decimal points, subtracting from left to right, forgetting to borrow).`,
          points: 10,
        },
      ],
    },
    {
      level: "MATH",
      weekNumber: 22,
      title: "数学 第 22 周 / Maths Week 22",
      description: "AEIS-Primary P4 Mathematics: Multiplying and dividing decimals",
      isSample: false,
      errorFocus: null,
      parentBrief: "本周主题：小数乘除一位整数、整数除以整数商为小数、按要求四舍五入，对应官方 2021 P4 Decimals 3.1–3.3（multiplying and dividing decimals up to 2 decimal places by a 1-digit whole number, dividing a whole number by a whole number with quotient as a decimal, rounding answers to a specified degree of accuracy）。申请 P5 入学的孩子需掌握 P4 内容（MOE AEIS preceding level 规则）。关键技能：2.45 × 3 = 7.35，6.4 ÷ 4 = 1.6，5 ÷ 2 = 2.5，7 ÷ 4 = 1.75，四舍五入到指定小数位。金额写新元 S$ 不是美元 $。常见错误：小数点位置错、除不尽不会写成小数、四舍五入看错位。题目是简体中文家长说明 + 英文题干。本周配有双向对照表，显示题目对应的官方 2021 Primary Mathematics Syllabus P4 Decimals 3.1–3.3，以及申请 P5 → 掌握 P4 的规则。本周不教：小数×小数、除以小数、×÷10 100 1000（P5）、百分数。",
      videoUrl: null,
      kaizenFocus: null,
      questions: [
        {
          type: "reading",
          order: 1,
          content: `Read each question and choose the correct answer.

Question 1:
At Tampines Primary School, Mei bought 3 erasers. Each eraser costs S$1.25. How much did she spend in total?

Question 2:
Ali has 8.4 metres of rope. He cuts it into 4 equal pieces. How long is each piece?

Question 3:
Jun Wei has 9 litres of juice to share equally among 2 bottles. How many litres in each bottle?

Question 4:
Priya ran 2.35 km each day for 4 days. What is the total distance she ran?

Question 5:
A ribbon is 15.6 m long. It is cut into 3 equal parts. How long is each part?`,
          options: JSON.stringify([
            "S$1.25 × 3|A. S$3.75|B. S$3.65|C. S$4.25|D. S$3.25",
            "8.4 m ÷ 4|A. 2.0 m|B. 2.1 m|C. 2.2 m|D. 1.1 m",
            "9 l ÷ 2|A. 4 l|B. 4.0 l|C. 4.5 l|D. 3.5 l",
            "2.35 km × 4|A. 9.20 km|B. 9.40 km|C. 8.40 km|D. 10.40 km",
            "15.6 m ÷ 3|A. 5.2 m|B. 5.3 m|C. 4.2 m|D. 6.2 m",
          ]),
          correctAnswer: "A,B,C,B,A",
          points: 5,
        },
        {
          type: "grammar",
          order: 2,
          content: `Choose the correct answer for each question.

Question 6:
What is 3.26 × 5?

Question 7:
What is 12.8 ÷ 8?

Question 8:
What is 7 ÷ 4? (Write your answer as a decimal.)

Question 9:
Mei bought 6 notebooks. Each notebook costs S$2.45. How much did she spend?

Question 10:
What is 5.6 × 3?

Question 11:
A tank had 18 litres of water. The water was poured equally into 5 containers. How much water in each container?

Question 12:
Jun Wei divided 11 kg of rice equally into 4 bags. How much rice is in each bag?

Question 13:
What is 4.38 × 2, rounded to 1 decimal place?`,
          options: JSON.stringify([
            "3.26 × 5|A. 16.30|B. 15.30|C. 16.20|D. 15.20",
            "12.8 ÷ 8|A. 1.5|B. 1.6|C. 1.7|D. 1.4",
            "7 ÷ 4|A. 1.5|B. 1.75|C. 1.85|D. 2.0",
            "S$2.45 × 6|A. S$14.60|B. S$14.70|C. S$14.80|D. S$14.50",
            "5.6 × 3|A. 16.8|B. 16.6|C. 17.8|D. 15.8",
            "18 l ÷ 5|A. 3.5 l|B. 3.6 l|C. 3.4 l|D. 4.0 l",
            "11 kg ÷ 4|A. 2.75 kg|B. 2.5 kg|C. 3.0 kg|D. 2.25 kg",
            "4.38 × 2, to 1 d.p.|A. 8.8|B. 8.7|C. 9.0|D. 8.9",
          ]),
          correctAnswer: "A,B,B,B,A,B,A,A",
          points: 8,
        },
        {
          type: "writing",
          order: 3,
          content: `At Bedok Primary School, the students are learning about multiplying and dividing decimals.

(a) Ali bought 5 pens. Each pen costs S$3.26. How much did he spend in total? Show your working with the multiplication.

(b) The school has 16.5 litres of paint to pour equally into 3 buckets. How much paint goes into each bucket? Show your working with the division.

(c) Priya has S$20. She buys 4 books at S$3.75 each. How much money does she have left? Show all your working steps. Then round your final answer to 1 decimal place if asked.

写出算式、答案和说明。Show working by calculating step by step. Explain any common errors (decimal point placement wrong, not converting whole ÷ whole to decimal quotient, rounding to wrong decimal place).`,
          points: 10,
        },
      ],
    },
    {
      level: "MATH",
      weekNumber: 23,
      title: "数学 第 23 周 / Maths Week 23",
      description: "AEIS-Primary P4 Mathematics: Area and perimeter (missing side, composite)",
      isSample: false,
      errorFocus: null,
      parentBrief: "本周主题：已知面积/周长求一边、正方形边长、长方形+正方形组合图形的面积和周长，对应官方 2021 P4 Area and Perimeter 1.1–1.3（finding one dimension of a rectangle given the other dimension and its area/perimeter; finding the length of one side of a square given its area/perimeter; finding the area and perimeter of composite figures made up of rectangles and squares）。申请 P5 入学的孩子需掌握 P4 内容（MOE AEIS 的 preceding level 规则）。关键技能：长方形 area = length × width → 已知 area 和 length，求 width：width = area ÷ length；长方形 perimeter = 2 × (length + width) → 已知 perimeter 和 length，求 width：width = perimeter ÷ 2 − length；正方形 area = side × side → 已知 area 求 side：side = √area（例 area 36 cm² → side 6 cm）；正方形 perimeter = 4 × side → 已知 perimeter 求 side：side = perimeter ÷ 4；组合图形（L-shape / T-shape 等）：可以拆分（split）成几个长方形分别算面积再相加，或用大长方形减去缺口；周长只算外轮廓（outer perimeter），不算内部拼接线。常见错误：组合图形把内部边算进周长（should only count outer edges）、求一边时面积÷错边（area ÷ wrong side）、正方形边长当面积（confusing side with area）、拆分组合图形时漏算某一块。题目配有双向对照表，显示对应官方 2021 Primary Mathematics Syllabus P4 Area and Perimeter 1.1–1.3，以及申请 P5 → 掌握 P4 的规则。本周明确不教：三角形面积（area of triangle, P5）、圆形/半圆（circles / semicircles）、立方体/长方体的体积（volume of cube/cuboid）、cm² ↔ m² 互换（converting cm² ↔ m²）、P3 纯概念「什么是面积」而不求缺失边/不涉及组合图形的题目。",
      videoUrl: null,
      kaizenFocus: null,
      questions: [
        {
          type: "reading",
          order: 1,
          content: `Read each question and choose the correct answer.

Question 1:
A rectangle has area 24 cm² and length 8 cm. What is the breadth of the rectangle?

Question 2:
A square has area 36 cm². What is the length of one side?

Question 3:
A square has perimeter 20 cm. What is the length of one side?

Question 4:
An L-shape is made of two rectangles. Rectangle A is 6 cm long and 4 cm wide. Rectangle B is 3 cm long and 2 cm wide. They are joined along the 3 cm side. What is the total area of the L-shape?

Question 5:
An L-shape has outer perimeter. The L-shape can be described as: a 10 cm × 6 cm rectangle with a 4 cm × 3 cm rectangle cut out from one corner. What is the outer perimeter of this L-shape?`,
          options: JSON.stringify([
            "Rectangle area 24 cm², length 8 cm|A. breadth 2 cm|B. breadth 3 cm|C. breadth 4 cm|D. breadth 6 cm",
            "Square area 36 cm²|A. side 4 cm|B. side 5 cm|C. side 6 cm|D. side 9 cm",
            "Square perimeter 20 cm|A. side 4 cm|B. side 5 cm|C. side 6 cm|D. side 8 cm",
            "L-shape: 6×4 rectangle + 3×2 rectangle|A. total area 24 cm²|B. total area 28 cm²|C. total area 30 cm²|D. total area 32 cm²",
            "L-shape: 10×6 rectangle minus 4×3 corner|A. perimeter 28 cm|B. perimeter 30 cm|C. perimeter 32 cm|D. perimeter 34 cm",
          ]),
          correctAnswer: "B,C,B,C,C",
          points: 5,
        },
        {
          type: "grammar",
          order: 2,
          content: `Choose the correct answer for each question.

Question 6:
A rectangle has area 48 m² and breadth 6 m. What is the length?

Question 7:
A rectangle has perimeter 28 m. The length is 9 m. What is the breadth?

Question 8:
A square has area 49 cm². What is the length of one side?

Question 9:
A square has perimeter 32 cm. What is the length of one side?

Question 10:
A T-shape is made of two rectangles. The top rectangle is 8 cm long and 3 cm wide. The bottom rectangle is 4 cm long and 5 cm wide. They share the 4 cm side. What is the total area of the T-shape?

Question 11:
A composite figure is made of a 12 m × 8 m rectangle joined to a 5 m × 5 m square along one of the 5 m sides. What is the total area?

Question 12:
An L-shape can be described as: a large 9 cm × 7 cm rectangle with a small 3 cm × 2 cm rectangle removed from one corner. What is the remaining area?

Question 13:
A rectangular garden is 15 m long and 8 m wide. A square flower bed of side 3 m is built inside the garden. What is the area of the garden that is NOT the flower bed?`,
          options: JSON.stringify([
            "Rectangle area 48 m², breadth 6 m|A. length 6 m|B. length 7 m|C. length 8 m|D. length 9 m",
            "Rectangle perimeter 28 m, length 9 m|A. breadth 3 m|B. breadth 4 m|C. breadth 5 m|D. breadth 6 m",
            "Square area 49 cm²|A. side 5 cm|B. side 6 cm|C. side 7 cm|D. side 8 cm",
            "Square perimeter 32 cm|A. side 6 cm|B. side 7 cm|C. side 8 cm|D. side 10 cm",
            "T-shape: 8×3 top + 4×5 bottom (share 4 cm)|A. area 40 cm²|B. area 42 cm²|C. area 44 cm²|D. area 46 cm²",
            "12×8 rectangle + 5×5 square|A. area 116 m²|B. area 121 m²|C. area 125 m²|D. area 131 m²",
            "9×7 rectangle − 3×2 corner|A. area 55 cm²|B. area 57 cm²|C. area 59 cm²|D. area 61 cm²",
            "15×8 garden − 3×3 flower bed|A. area 111 m²|B. area 115 m²|C. area 117 m²|D. area 120 m²",
          ]),
          correctAnswer: "C,C,C,C,C,B,B,A",
          points: 8,
        },
        {
          type: "writing",
          order: 3,
          content: `At Bedok Primary School, the students are learning about area and perimeter.

(a) A rectangle has area 40 cm² and length 10 cm. What is the breadth? Show your working with the division: breadth = area ÷ length.

(b) A square has perimeter 28 cm. What is the length of one side? Show your working with the division: side = perimeter ÷ 4.

(c) An L-shape composite figure is made of two rectangles. Rectangle P is 7 cm long and 5 cm wide. Rectangle Q is 4 cm long and 3 cm wide. They are joined along the 4 cm side. What is the total area of the L-shape? Show your working by calculating the area of each rectangle and adding them together.

写出算式、答案和说明。Show working by calculating step by step. For composite figures, explain how you split the figure (e.g., "Rectangle P area = 7 × 5 = 35 cm². Rectangle Q area = 4 × 3 = 12 cm². Total area = 35 + 12 = 47 cm²."). Explain common errors (e.g., dividing area by the wrong side, confusing side with area for a square, including internal edges in perimeter).`,
          points: 10,
        },
      ],
    },
    {
      level: "MATH",
      weekNumber: 24,
      title: "数学 第 24 周 / Maths Week 24",
      description: "AEIS-Primary P4 Mathematics: Tables and line graphs",
      isSample: false,
      errorFocus: null,
      parentBrief: "本周主题：从表补全数据、读折线图（最高/最低、升/降、差值），对应官方 2021 P4 Statistics 1.1–1.2（completing a table from given data; reading and interpreting data from tables and line graphs）。申请 P5 入学的孩子需掌握 P4 内容（MOE AEIS 的 preceding level 规则）。关键技能：读表格（table）找缺失数字、把给出的数据填入空白表格、折线图（line graph）读点（reading data points: 横轴日期/类别 + 纵轴数值）、找最高点/最低点（highest / lowest point）、判断升降趋势（increase / decrease from one point to another）、计算差值（difference = 高的值 − 低的值）、回答 'how much more / less'（用减法）。常见错误：把折线两点之间的斜率当成数值（the slope is not the value, read the point on the vertical axis）、读错横轴日期（misreading the day/category on horizontal axis）、算差值用加法而不是减法（difference should be subtraction, not addition）、表格填数时单位漏写或错写（missing or wrong units when completing a table）。题目配有双向对照表，显示对应官方 2021 Primary Mathematics Syllabus P4 Statistics 1.1–1.2，以及申请 P5 → 掌握 P4 的规则。本周明确不教：饼图（pie charts，下周）、条形图作为主要新技能（bar graphs 已在 P3 第 13 周学过）、平均数/均值（mean / average，除非能从官方 P4 大纲引用，不要自创）、P5/P6 数据主题（如 mode / median / range）。",
      videoUrl: null,
      kaizenFocus: null,
      questions: [
        {
          type: "reading",
          order: 1,
          content: `Read the information and choose the correct answer.

Question 1:
The library recorded book loans each day. Monday: 45 books, Tuesday: 52 books, Wednesday: 48 books, Thursday: 56 books, Friday: 50 books. On which day were the most books loaned out?

Question 2:
The temperature at noon each day: Monday 30°C, Tuesday 31°C, Wednesday 29°C, Thursday 32°C, Friday 30°C. The line graph shows these temperatures connected by lines going up when it gets hotter and down when it gets cooler. From Tuesday to Wednesday, did the temperature go up or down? By how much?

Question 3:
The table shows the number of students who borrowed library books. Monday: 28, Tuesday: ?, Wednesday: 34, Thursday: 40, Friday: 36. The pattern increases by 3 each day from Monday to Thursday, then decreases by 4 from Thursday to Friday. What number goes in Tuesday's blank space?

Question 4:
The school canteen sold these meals on Monday: Rice 68, Noodles 52, Bread 40. On Tuesday: Rice 72, Noodles 48, Bread 44. How many more rice meals than noodles meals were sold on Monday?

Question 5:
The line graph shows temperature from 8 a.m. to 12 noon. At 8 a.m. it was 26°C. At 10 a.m. it was 29°C. At 12 noon it was 31°C. The line goes up all morning. What is the difference between the noon temperature and the 8 a.m. temperature?`,
          options: JSON.stringify([
            "Library loans: Mon 45, Tue 52, Wed 48, Thu 56, Fri 50|A. Monday|B. Tuesday|C. Wednesday|D. Thursday",
            "Temperature: Mon 30, Tue 31, Wed 29, Thu 32, Fri 30. Tue to Wed change?|A. Up by 1°C|B. Down by 1°C|C. Up by 2°C|D. Down by 2°C",
            "Students: Mon 28, Tue ?, Wed 34, Thu 40, Fri 36. Pattern +3 then -4.|A. 30|B. 31|C. 32|D. 33",
            "Monday meals: Rice 68, Noodles 52, Bread 40. How much more rice than noodles?|A. 12|B. 14|C. 16|D. 18",
            "Temperature: 8am 26°C, 10am 29°C, 12noon 31°C. Difference noon − 8am?|A. 3°C|B. 4°C|C. 5°C|D. 6°C",
          ]),
          correctAnswer: "D,D,B,C,C",
          points: 5,
        },
        {
          type: "grammar",
          order: 2,
          content: `Choose the correct answer for each question.

Question 6:
The table shows daily rainfall in mm: Monday 12, Tuesday 8, Wednesday 15, Thursday 10, Friday 6. On which day was the rainfall the lowest?

Question 7:
The number of students at the playground each day: Monday 34, Tuesday 38, Wednesday 42, Thursday 46, Friday 50. By how much did the number increase from Monday to Friday?

Question 8:
The line graph shows book sales. Monday: 24 books, Tuesday: 30 books, Wednesday: 27 books, Thursday: 33 books, Friday: 36 books. On which day did sales go down compared to the previous day?

Question 9:
The table shows the number of buses at the interchange. 7 a.m.: 18, 8 a.m.: 25, 9 a.m.: 32, 10 a.m.: 28, 11 a.m.: 22. At what time were there the most buses?

Question 10:
Visitors to East Coast Park: Saturday 245, Sunday 320. How many more visitors on Sunday than Saturday?

Question 11:
The line graph shows Mei's savings each month. January: $45, February: $52, March: $48, April: $58, May: $60. Between which two consecutive months did her savings increase the most?

Question 12:
The table shows the temperature at different times. 6 a.m.: 24°C, 9 a.m.: 28°C, 12 noon: 32°C, 3 p.m.: 30°C, 6 p.m.: 26°C. What is the temperature at 12 noon?

Question 13:
The canteen sold drinks each day: Monday 85, Tuesday 92, Wednesday 88, Thursday 95, Friday 90. Complete the table: On Tuesday, the canteen sold ___ drinks.`,
          options: JSON.stringify([
            "Rainfall mm: Mon 12, Tue 8, Wed 15, Thu 10, Fri 6. Lowest day?|A. Monday|B. Tuesday|C. Thursday|D. Friday",
            "Playground students: Mon 34, Tue 38, Wed 42, Thu 46, Fri 50. Mon→Fri increase?|A. 12|B. 14|C. 16|D. 18",
            "Book sales: Mon 24, Tue 30, Wed 27, Thu 33, Fri 36. Which day went down?|A. Tuesday|B. Wednesday|C. Thursday|D. Friday",
            "Buses: 7am 18, 8am 25, 9am 32, 10am 28, 11am 22. Most buses at?|A. 7 a.m.|B. 8 a.m.|C. 9 a.m.|D. 10 a.m.",
            "East Coast Park: Sat 245, Sun 320. How much more on Sunday?|A. 65|B. 70|C. 75|D. 80",
            "Savings: Jan $45, Feb $52, Mar $48, Apr $58, May $60. Biggest increase between?|A. Jan-Feb|B. Feb-Mar|C. Mar-Apr|D. Apr-May",
            "Temperature: 6am 24°C, 9am 28°C, 12noon 32°C, 3pm 30°C, 6pm 26°C. At noon?|A. 28°C|B. 30°C|C. 32°C|D. 34°C",
            "Drinks sold: Mon 85, Tue 92, Wed 88, Thu 95, Fri 90. Tuesday?|A. 88|B. 90|C. 92|D. 95",
          ]),
          correctAnswer: "D,C,B,C,C,C,C,C",
          points: 8,
        },
        {
          type: "writing",
          order: 3,
          content: `At Tampines Primary School, the students recorded weather data.

(a) The table shows the number of rainy days each month. January: 12 days, February: 8 days, March: 10 days, April: 15 days. Which month had the most rainy days? Show your working by comparing the numbers: 12, 8, 10, 15. The highest is 15.

(b) The line graph shows temperature at noon each day of one week. Monday: 29°C, Tuesday: 31°C, Wednesday: 30°C, Thursday: 33°C, Friday: 32°C. On which day was the temperature the highest? What is the difference between the highest temperature and Monday's temperature? Show your working: Highest is Thursday 33°C. Difference = 33 − 29 = 4°C.

(c) The table shows library visitors. Monday: 56, Tuesday: ?, Wednesday: 68, Thursday: 74, Friday: 70. The number increased by 6 from Monday to Tuesday, then by 6 again from Tuesday to Wednesday. Complete the table by finding Tuesday's number. Show your working: Monday 56 + 6 = 62. So Tuesday is 62 visitors. Check: 62 + 6 = 68 (Wednesday). Correct.

写出算式、答案和说明。Show working step by step. For line graphs, write out the comparison (e.g., "Monday 29°C, Thursday 33°C. 33 > 29, so Thursday is highest."). For tables with missing data, show the pattern or calculation. Explain common errors (e.g., reading the slope instead of the point value on the vertical axis, using addition instead of subtraction for difference, mixing up days on the horizontal axis).`,
          points: 10,
        },
      ],
    },
    {
      level: "MATH",
      weekNumber: 25,
      title: "数学 第 25 周 / Maths Week 25",
      description: "AEIS-Primary P4 Mathematics: Pie charts",
      isSample: false,
      errorFocus: null,
      parentBrief: "本周主题：读饼图（哪一块最大/最小、一块是总数的几分之几、已知总数求人数），对应官方 2021 P4 Statistics 1.2 pie charts（reading and interpreting data from pie charts）。申请 P5 入学的孩子需掌握 P4 内容（MOE AEIS 的 preceding level 规则）。关键技能：读饼图（pie chart）识别哪一块最大/最小（which slice is the largest / smallest）、理解每一块是整体的几分之几（each slice is a fraction of the whole）、用分数乘总数求人数（multiply the total by the fraction to find the number）、验证所有分数块之和是 1（check that all fractions add up to 1）。算法：1/2 of 40 = 40 ÷ 2 = 20（已知总数 40，一块是 1/2，求这块的人数 = 40 ÷ 2 = 20）。常见错误：把最大块当作全部（treating the largest slice as the whole）、分数块加起来不是 1（fractions do not sum to 1）、先乘分子再除分母（multiplying by numerator first instead of dividing by denominator first: should be 40 ÷ 2, not 40 × 1 ÷ 2）、混淆哪一块最大（identifying the wrong slice as largest because not comparing all fractions correctly）。题目配有双向对照表，显示对应官方 2021 Primary Mathematics Syllabus P4 Statistics 1.2 pie charts，以及申请 P5 → 掌握 P4 的规则。本周明确不教：百分数（percentages，P5）、平均数/均值（mean / average）、360° 扇形角度计算（sector angles in degrees，除非用简单分数 1/4 = 90°，但重点是分数 of a set）。本周只用分数（fractions: 1/2, 1/4, 1/8, 1/5, 3/8），不用百分数。每个饼图给出总数（e.g., 40 children），所有分数块之和必须是 1。",
      videoUrl: null,
      kaizenFocus: null,
      questions: [
        {
          type: "reading",
          order: 1,
          content: `Read the information and choose the correct answer.

Question 1:
At Tampines Primary School, 40 children were asked about their favourite sport. The pie chart shows: Football 1/2, Swimming 1/4, Basketball 1/8, Running 1/8. Which sport is the most popular?

Question 2:
The pie chart shows how 48 students travel to school. Bus 1/2, Walk 1/4, Car 1/6, Cycle 1/12. How many students travel by bus? (Calculate: 1/2 of 48 means 48 ÷ 2.)

Question 3:
A class of 24 students chose their favourite fruit. The pie chart shows: Apple 1/3, Orange 1/4, Mango 1/6, Banana 1/4. Which fruit is the least popular?

Question 4:
The library recorded 80 books borrowed. The pie chart shows the types: Fiction 1/2, Non-fiction 1/4, Comics 1/8, Magazines 1/8. How many fiction books were borrowed? (Calculate: 1/2 of 80 = 80 ÷ 2.)

Question 5:
At the canteen, 60 students bought drinks. The pie chart shows: Water 2/5, Juice 1/5, Milk 1/5, Milo 1/5. How many students bought water? (Calculate: 2/5 of 60 = 60 ÷ 5 × 2.)`,
          options: JSON.stringify([
            "40 children. Pie: Football 1/2, Swimming 1/4, Basketball 1/8, Running 1/8. Most popular?|A. Football|B. Swimming|C. Basketball|D. Running",
            "48 students. Pie: Bus 1/2, Walk 1/4, Car 1/6, Cycle 1/12. How many by bus?|A. 12|B. 18|C. 24|D. 30",
            "24 students. Pie: Apple 1/3, Orange 1/4, Mango 1/6, Banana 1/4. Least popular?|A. Apple|B. Orange|C. Mango|D. Banana",
            "80 books. Pie: Fiction 1/2, Non-fiction 1/4, Comics 1/8, Magazines 1/8. Fiction books?|A. 20|B. 30|C. 40|D. 50",
            "60 students. Pie: Water 2/5, Juice 1/5, Milk 1/5, Milo 1/5. How many bought water?|A. 12|B. 18|C. 20|D. 24",
          ]),
          correctAnswer: "A,C,C,C,D",
          points: 5,
        },
        {
          type: "grammar",
          order: 2,
          content: `Choose the correct answer for each question.

Question 6:
A survey of 50 students showed their favourite subjects. The pie chart shows: English 1/5, Maths 2/5, Science 1/5, Art 1/5. Which subject is the most popular?

Question 7:
At East Coast Park, 36 families were doing activities. The pie chart shows: Cycling 1/3, Jogging 1/6, Picnic 1/3, Swimming 1/6. How many families were cycling?

Question 8:
The canteen sold 72 meals. The pie chart shows: Rice 1/2, Noodles 1/4, Bread 1/8, Sandwich 1/8. Which two meal types had the same number sold?

Question 9:
A class of 30 students chose pets. The pie chart shows: Dog 1/2, Cat 1/5, Rabbit 1/10, Hamster 1/5. How many students chose dogs?

Question 10:
At the library, 45 children borrowed books. The pie chart shows: Storybooks 1/3, Comics 1/3, Science 1/6, Art 1/6. How many borrowed storybooks?

Question 11:
The school recorded 64 students in CCA. The pie chart shows: Sports 1/2, Music 1/4, Art 1/8, Drama 1/8. Which CCA had exactly 16 students? (Calculate: 1/4 of 64 = 64 ÷ 4 = 16.)

Question 12:
At Changi Airport, 100 passengers were from different countries. The pie chart shows: Singapore 1/2, Malaysia 1/5, China 1/10, India 1/5. How many passengers were from Singapore?

Question 13:
The pie chart shows 56 students' favourite games. Soccer 3/8, Basketball 1/4, Badminton 1/4, Tennis 1/8. How many students chose soccer? (Calculate: 3/8 of 56 = 56 ÷ 8 × 3.)`,
          options: JSON.stringify([
            "50 students. Pie: English 1/5, Maths 2/5, Science 1/5, Art 1/5. Most popular?|A. English|B. Maths|C. Science|D. Art",
            "36 families. Pie: Cycling 1/3, Jogging 1/6, Picnic 1/3, Swimming 1/6. Cycling?|A. 6|B. 9|C. 12|D. 18",
            "72 meals. Pie: Rice 1/2, Noodles 1/4, Bread 1/8, Sandwich 1/8. Same number?|A. Rice and Noodles|B. Noodles and Bread|C. Bread and Sandwich|D. Rice and Sandwich",
            "30 students. Pie: Dog 1/2, Cat 1/5, Rabbit 1/10, Hamster 1/5. Dogs?|A. 6|B. 10|C. 15|D. 20",
            "45 children. Pie: Storybooks 1/3, Comics 1/3, Science 1/6, Art 1/6. Storybooks?|A. 9|B. 10|C. 12|D. 15",
            "64 students. Pie: Sports 1/2, Music 1/4, Art 1/8, Drama 1/8. Which CCA = 16?|A. Sports|B. Music|C. Art|D. Drama",
            "100 passengers. Pie: Singapore 1/2, Malaysia 1/5, China 1/10, India 1/5. Singapore?|A. 20|B. 30|C. 40|D. 50",
            "56 students. Pie: Soccer 3/8, Basketball 1/4, Badminton 1/4, Tennis 1/8. Soccer?|A. 14|B. 18|C. 21|D. 24",
          ]),
          correctAnswer: "B,C,C,C,D,B,D,C",
          points: 8,
        },
        {
          type: "writing",
          order: 3,
          content: `At Marina Bay Primary School, the students recorded their activities.

(a) A survey of 32 students asked about their favourite fruits. The pie chart shows: Apple 1/4, Orange 1/2, Mango 1/8, Banana 1/8. Which fruit is the most popular? Show your working by comparing the fractions: 1/4, 1/2, 1/8, 1/8. The largest fraction is 1/2. So Orange is the most popular.

(b) The canteen sold 40 drinks. The pie chart shows: Water 1/2, Juice 1/4, Milk 1/8, Milo 1/8. How many students bought water? How many bought juice? Show your working: Water = 1/2 of 40 = 40 ÷ 2 = 20 students. Juice = 1/4 of 40 = 40 ÷ 4 = 10 students.

(c) At Sports Day, 48 children signed up for events. The pie chart shows: Running 1/3, Swimming 1/6, Football 1/3, Basketball 1/6. How many children signed up for running? Show your working: Running = 1/3 of 48 = 48 ÷ 3 = 16 children. Check: All fractions must add to 1. Check: 1/3 + 1/6 + 1/3 + 1/6 = 2/6 + 1/6 + 2/6 + 1/6 = 6/6 = 1. Correct.

写出算式、答案和说明。Show working step by step. For pie charts, write out the calculation (e.g., "1/2 of 40 = 40 ÷ 2 = 20"). Compare fractions to find the largest or smallest slice (e.g., "1/2 > 1/4 > 1/8, so the 1/2 slice is the largest"). Verify that all fractions add up to 1 (e.g., "1/2 + 1/4 + 1/8 + 1/8 = 4/8 + 2/8 + 1/8 + 1/8 = 8/8 = 1"). Explain common errors (e.g., treating the largest slice as the whole instead of a part of the whole, forgetting to divide by the denominator first, adding fractions incorrectly when checking the total).`,
          points: 10,
        },
      ],
    },

    // MATH WEEK 26
    {
      level: "MATH",
      weekNumber: 26,
      title: "数学 第 26 周 / Maths Week 26",
      description: "AEIS-Primary P4 Mathematics: Angles",
      isSample: false,
      errorFocus: null,
      parentBrief: "本周主题：角的名称（∠ABC、∠a）、度数测量、直角/平角/周角（right angle = 90°、straight angle = 180°、complete turn = 360°）、1/4 圈 = 90°、1/2 圈 = 180°、一整圈 = 360°、画指定角度（describe in words: 'draw a 90° angle / a right angle'），对应官方 2021 P4 Geometry → Angles 1.1–1.3（using notation such as ∠ABC and ∠a to name angles, measuring angles in degrees, drawing an angle of given size, relating quarter turn to 90°, half turn to 180°, complete turn to 360°, comparing two given degree measures, acute angle < 90°, right angle = 90°, obtuse angle between 90° and 180°）。申请 P5 入学的孩子需掌握 P4 内容（MOE AEIS 的 preceding level 规则）。关键技能：识别角的名称（∠ABC 中间字母 B 是角的顶点）、知道直角 = 90°、平角/半圈 = 180°、周角/一整圈 = 360°、1/4 圈 = 90°、比较角度大小（comparing degrees: 75° < 90°, 120° > 90°）、识别锐角（acute < 90°）、直角（right = 90°）、钝角（obtuse between 90° and 180°）。算法：quarter turn (1/4 turn) = 90°, half turn (1/2 turn) = 180°, complete turn = 360°。常见错误：把 1/4 圈当 45°（thinking quarter turn is 45° instead of 90°）、锐角钝角看错 90°（confusing acute and obtuse: acute is less than 90°, obtuse is more than 90° but less than 180°）、∠ABC 时把 A 或 C 当作角的顶点（vertex should be the middle letter B, not A or C）、把半圈当 90°（thinking half turn is 90° instead of 180°）。题目配有双向对照表，显示对应官方 2021 Primary Mathematics Syllabus P4 Geometry → Angles 1.1–1.3，以及申请 P5 → 掌握 P4 的规则。本周明确不教：properties of rectangles/squares beyond 'four right angles' as a fact（长方形正方形性质仅限「四个直角」，不教其他性质）、line symmetry / nets（对称/展开图，那是后续单元）、protractor construction that needs a diagram（需要图示的量角器使用）、triangle angle sum（三角形内角和，不在官方 P4 Angles 1.1–1.3 列表中）、angles beyond obtuse（reflex angle、angles on a straight line add up to 180°，P5）。本周只教：angle notation（角的名称 ∠ABC, ∠a）、angle in degrees（度数）、quarter/half/complete turn（1/4 圈、1/2 圈、一整圈）、comparing angles（比较角度大小）、acute/right/obtuse angle（锐角/直角/钝角）。每个题目用文字描述角，给足信息让孩子能唯一确定答案。",
      videoUrl: null,
      kaizenFocus: null,
      questions: [
        {
          type: "reading",
          order: 1,
          content: `Read the information and choose the correct answer.

Question 1:
A quarter turn is the same as how many degrees? (Hint: quarter turn = 1/4 of a complete turn. A complete turn = 360°. So quarter turn = 360° ÷ 4 = 90°.)

Question 2:
Look at these angles: ∠ABC = 45°, ∠DEF = 120°, ∠GHI = 90°. Which angle is a right angle? (Hint: A right angle is exactly 90°.)

Question 3:
The angle ∠ABC is named with three letters. Which letter shows the vertex (the point where the two lines meet)? The letters are A, B, and C. (Hint: The vertex is always the middle letter.)

Question 4:
Which is larger: 75° or 90°? Compare the two degree measures.

Question 5:
A half turn is the same as how many degrees? (Hint: half turn = 1/2 of a complete turn. A complete turn = 360°. So half turn = 360° ÷ 2 = 180°.)`,
          options: JSON.stringify([
            "Quarter turn = 1/4 of 360° = ?|A. 45°|B. 60°|C. 90°|D. 180°",
            "∠ABC = 45°, ∠DEF = 120°, ∠GHI = 90°. Which is a right angle?|A. ∠ABC|B. ∠DEF|C. ∠GHI|D. None",
            "∠ABC. Which letter is the vertex?|A. A|B. B|C. C|D. All three",
            "Which is larger: 75° or 90°?|A. 75°|B. 90°|C. They are equal|D. Cannot tell",
            "Half turn = 1/2 of 360° = ?|A. 90°|B. 120°|C. 180°|D. 270°",
          ]),
          correctAnswer: "C,C,B,B,C",
          points: 5,
        },
        {
          type: "grammar",
          order: 2,
          content: `Choose the correct answer for each question.

Question 6:
A complete turn is the same as how many degrees? (Hint: A complete turn means turning all the way around in a full circle = 360°.)

Question 7:
Which of these angles is acute (less than 90°)? Angle P = 35°, Angle Q = 90°, Angle R = 105°. (Hint: Acute angle < 90°.)

Question 8:
Which of these angles is obtuse (more than 90° but less than 180°)? Angle M = 50°, Angle N = 90°, Angle O = 135°. (Hint: Obtuse angle is between 90° and 180°.)

Question 9:
Look at angle ∠a = 80°. Is this angle acute, right, or obtuse? (Hint: 80° < 90°, so it is acute.)

Question 10:
A rectangle has four corners. Each corner is a right angle. How many degrees is each corner? (Hint: Right angle = 90°.)

Question 11:
If you turn 1/4 of the way around, you turn 90°. If you turn 2/4 (which is the same as 1/2) of the way around, how many degrees do you turn? (Hint: 2/4 = 1/2, half turn = 180°.)

Question 12:
Which is smaller: 85° or 100°? Compare the two degree measures.

Question 13:
The angle ∠XYZ has its vertex at Y. The two lines forming the angle are YX and YZ. Which letter is at the vertex? (Hint: The vertex is always the middle letter in the angle name.)`,
          options: JSON.stringify([
            "Complete turn = ?|A. 90°|B. 180°|C. 270°|D. 360°",
            "Angle P = 35°, Q = 90°, R = 105°. Which is acute?|A. P|B. Q|C. R|D. All",
            "Angle M = 50°, N = 90°, O = 135°. Which is obtuse?|A. M|B. N|C. O|D. All",
            "∠a = 80°. Acute, right, or obtuse?|A. Acute|B. Right|C. Obtuse|D. None",
            "Rectangle corner = ?|A. 45°|B. 60°|C. 90°|D. 180°",
            "2/4 turn = 1/2 turn = ?|A. 90°|B. 120°|C. 180°|D. 270°",
            "Which is smaller: 85° or 100°?|A. 85°|B. 100°|C. Equal|D. Cannot tell",
            "∠XYZ. Which letter is the vertex?|A. X|B. Y|C. Z|D. All three",
          ]),
          correctAnswer: "D,A,C,A,C,C,A,B",
          points: 8,
        },
        {
          type: "writing",
          order: 3,
          content: `At Tampines Primary School, the students are learning about angles.

(a) Jun Wei draws an angle. The angle measures 90°. What type of angle is this? Show your working by stating the definition: A right angle is exactly 90°. So Jun Wei's angle is a right angle.

(b) Mei turns 1/4 of the way around. How many degrees does she turn? Show your working: 1/4 turn = 1/4 of a complete turn. A complete turn = 360°. So 1/4 of 360° = 360° ÷ 4 = 90°. Mei turns 90°.

(c) Priya measures three angles: ∠ABC = 60°, ∠DEF = 95°, ∠GHI = 90°. Which angle is acute? Which angle is obtuse? Which angle is a right angle? Show your working: Acute angle < 90°. 60° < 90°, so ∠ABC is acute. Obtuse angle is between 90° and 180°. 95° is between 90° and 180°, so ∠DEF is obtuse. Right angle = 90°. 90° = 90°, so ∠GHI is a right angle.

写出说明、算式和答案。Show working step by step. For angles, state the definition (e.g., "A right angle is exactly 90°"). For turns, calculate the degrees (e.g., "1/4 turn = 1/4 of 360° = 360° ÷ 4 = 90°"). For comparing angles, use the definitions of acute, right, and obtuse (e.g., "Acute < 90°, Right = 90°, Obtuse between 90° and 180°"). Explain common errors (e.g., thinking quarter turn is 45° instead of 90°, confusing acute and obtuse, thinking the vertex in ∠ABC is A or C instead of B).`,
          points: 10,
        },
      ],
    },

    // MATH WEEK 27
    {
      level: "MATH",
      weekNumber: 27,
      title: "数学 第 27 周 / Maths Week 27",
      description: "AEIS-Primary P4 Mathematics: Rectangle and square",
      isSample: false,
      errorFocus: null,
      parentBrief: "本周主题：长方形和正方形的性质（不含对角线），对应官方 2021 P4 Geometry → 2D Shapes 2.1–2.2（properties of rectangle and square excluding diagonal properties, drawing rectangles and squares on a square grid）。申请 P5 入学的孩子需掌握 P4 内容（MOE AEIS 的 preceding level 规则）。关键技能：rectangle 有 4 个 right angles（直角 = 90°）和 opposite sides equal（对边相等）；square 有 4 个 right angles 和 4 equal sides（四边相等）；both have opposite sides parallel（如果 P3 第 12 周已教平行和垂直，可以回顾）；在方格纸上画长方形和正方形（describe in words: 'draw a rectangle 4 units by 3 units on a square grid'，不需要图片文件）。算法：识别长方形和正方形的性质、画指定尺寸的长方形和正方形。常见错误：把长方形当成四边相等（thinking rectangle has all sides equal instead of only opposite sides equal）、用对角线性质（using diagonal properties，官方明确排除）、混淆长方形和正方形的定义（confusing rectangle and square: rectangle has opposite sides equal, square has all four sides equal）、忘记长方形和正方形都有 4 个直角（forgetting both shapes have four right angles = 90°）。题目配有双向对照表，显示对应官方 2021 Primary Mathematics Syllabus P4 Geometry → 2D Shapes 2.1–2.2，以及申请 P5 → 掌握 P4 的规则。本周明确不教：diagonal properties（对角线性质，官方明确 excluding diagonal properties）、line symmetry / nets（对称/展开图，后续单元）、triangle angle sum（三角形内角和）、quadrilateral interior angle sum（四边形内角和，不在官方 P4 2.1 列表中，不要发明）。本周只教：rectangle properties（长方形性质：4 right angles, opposite sides equal）、square properties（正方形性质：4 right angles, 4 equal sides）、drawing rectangles and squares on a square grid（在方格纸上画长方形和正方形，用文字描述）。每个题目用文字描述图形，给足信息让孩子能唯一确定答案。",
      videoUrl: null,
      kaizenFocus: null,
      questions: [
        {
          type: "reading",
          order: 1,
          content: `Read the information and choose the correct answer.

Question 1:
A square has four sides. Are all four sides equal? (Hint: A square has 4 equal sides. All four sides are the same length.)

Question 2:
A rectangle has two long sides and two short sides. The two long sides are both 8 cm. The two short sides are both 5 cm. Are the opposite sides equal? (Hint: Opposite sides of a rectangle are equal. The two long sides are opposite to each other, and they are both 8 cm. The two short sides are opposite to each other, and they are both 5 cm.)

Question 3:
How many right angles does a rectangle have? (Hint: A rectangle has 4 corners, and each corner is a right angle = 90°. So a rectangle has 4 right angles.)

Question 4:
A square has sides that are each 6 cm long. How long are all four sides? (Hint: A square has 4 equal sides. If each side is 6 cm, then all four sides are 6 cm.)

Question 5:
On a square grid, you want to draw a rectangle that is 4 units long and 3 units wide. How many units is the long side? How many units is the short side? (Hint: The long side is 4 units. The short side is 3 units. The rectangle has two sides of 4 units and two sides of 3 units.)`,
          options: JSON.stringify([
            "Square: all four sides equal?|A. Yes, all equal|B. No, only opposite sides equal|C. No, all different|D. Cannot tell",
            "Rectangle: 8 cm, 5 cm. Opposite sides equal?|A. Yes|B. No|C. Only one pair|D. Cannot tell",
            "Rectangle: how many right angles?|A. 2|B. 3|C. 4|D. 5",
            "Square side 6 cm. All four sides?|A. 3 cm|B. 6 cm|C. 12 cm|D. 24 cm",
            "Draw rectangle 4 by 3. Long side?|A. 2 units|B. 3 units|C. 4 units|D. 7 units",
          ]),
          correctAnswer: "A,A,C,B,C",
          points: 5,
        },
        {
          type: "grammar",
          order: 2,
          content: `Choose the correct answer for each question.

Question 6:
Which shape has all four sides equal? (Hint: A square has 4 equal sides. A rectangle has opposite sides equal, but not all four sides equal.)

Question 7:
A rectangle has one side that is 10 cm long. The opposite side is also 10 cm long. Another side is 4 cm long. How long is the side opposite to the 4 cm side? (Hint: Opposite sides of a rectangle are equal. If one side is 4 cm, the opposite side is also 4 cm.)

Question 8:
Both a rectangle and a square have four right angles. How many degrees is a right angle? (Hint: A right angle is exactly 90°. Both shapes have 4 right angles = 90°.)

Question 9:
A square has one side that is 9 cm long. How long is each of the other three sides? (Hint: A square has 4 equal sides. If one side is 9 cm, then all four sides are 9 cm.)

Question 10:
On a square grid, Priya draws a rectangle with a long side of 5 units and a short side of 2 units. How many sides does the rectangle have that are 5 units long? (Hint: A rectangle has two long sides and two short sides. The two long sides are opposite to each other and are both 5 units.)

Question 11:
Jun Wei says "A rectangle always has four right angles and opposite sides parallel." Is this correct? (Hint: Yes. A rectangle has 4 right angles = 90°. The opposite sides are parallel to each other.)

Question 12:
Which shape has 4 right angles and 4 equal sides? (Hint: A square has 4 right angles and 4 equal sides. A rectangle has 4 right angles but only opposite sides are equal, not all four sides equal.)

Question 13:
On a square grid, you draw a square with each side 3 units long. How many units long is the opposite side? (Hint: A square has 4 equal sides. If one side is 3 units, then the opposite side is also 3 units. In fact, all four sides are 3 units.)`,
          options: JSON.stringify([
            "Which shape: all four sides equal?|A. Rectangle|B. Square|C. Both|D. Neither",
            "Rectangle: one side 10 cm, opposite 10 cm. Another side 4 cm. Opposite to 4 cm?|A. 2 cm|B. 4 cm|C. 6 cm|D. 10 cm",
            "Rectangle and square: how many degrees is a right angle?|A. 45°|B. 60°|C. 90°|D. 180°",
            "Square: one side 9 cm. Other three sides?|A. 3 cm each|B. 9 cm each|C. 12 cm each|D. Different lengths",
            "Rectangle: long side 5 units, short side 2 units. How many 5-unit sides?|A. 1|B. 2|C. 3|D. 4",
            "Rectangle: 4 right angles and opposite sides parallel?|A. Yes|B. No|C. Only sometimes|D. Cannot tell",
            "Which: 4 right angles and 4 equal sides?|A. Rectangle|B. Square|C. Both|D. Neither",
            "Square: side 3 units. Opposite side?|A. 1.5 units|B. 3 units|C. 6 units|D. 9 units",
          ]),
          correctAnswer: "B,B,C,B,B,A,B,B",
          points: 8,
        },
        {
          type: "writing",
          order: 3,
          content: `At Tampines Primary School, the students are learning about rectangles and squares.

(a) Mei draws a rectangle. The rectangle has four corners. Each corner is a right angle. How many right angles does Mei's rectangle have? Show your working by stating the property: A rectangle has 4 right angles. Each corner is a right angle = 90°. So Mei's rectangle has 4 right angles.

(b) Jun Wei draws a square. Each side of the square is 7 cm long. How long are all four sides? Show your working: A square has 4 equal sides. If each side is 7 cm, then all four sides are 7 cm. Check: The property of a square is that all four sides are equal. 7 cm = 7 cm = 7 cm = 7 cm. Correct.

(c) Priya draws a rectangle on a square grid. The long side is 6 units. The short side is 4 units. How many sides are 6 units long? How many sides are 4 units long? Show your working: A rectangle has opposite sides equal. The two long sides are opposite to each other, so both long sides are 6 units. The two short sides are opposite to each other, so both short sides are 4 units. So 2 sides are 6 units long, and 2 sides are 4 units long. Check: 6 + 4 + 6 + 4 = 20 units (perimeter). Both a rectangle and a square have 4 right angles = 90°.

写出说明、算式和答案。Show working step by step. For rectangles and squares, state the properties (e.g., "A rectangle has 4 right angles = 90° and opposite sides equal", "A square has 4 right angles = 90° and 4 equal sides"). For drawing on a grid, describe the dimensions (e.g., "long side 6 units, short side 4 units"). Explain common errors (e.g., thinking a rectangle has all sides equal instead of only opposite sides equal, forgetting that both rectangle and square have four right angles = 90°, using diagonal properties which are excluded from P4 2.1-2.2).`,
          points: 10,
        },
      ],
    },
    
    // MATH WEEK 28
    {
      level: "MATH",
      weekNumber: 28,
      title: "数学 第 28 周 / Maths Week 28",
      description: "AEIS-Primary P4 Mathematics: Line symmetry",
      isSample: false,
      errorFocus: null,
      parentBrief: "本周主题：对称轴 / line of symmetry，对应官方 2021 P4 Geometry → Symmetry 3.1–3.3（identifying symmetric figures, determining whether a straight line is a line of symmetry of a symmetric figure, completing a symmetric figure with respect to a given line of symmetry on a square grid）。申请 P5 入学的孩子需掌握 P4 内容（MOE AEIS 的 preceding level 规则）。关键技能：一个图形是对称的，如果一半是另一半在一条直线（对称轴）对面的镜像。正方形有 4 条对称轴（两条中线穿过对边，两条对角线）。非正方形长方形有 2 条对称轴（两条中线穿过对边的中点——不包括对角线）。等边三角形有 3 条。非等边的等腰三角形有 1 条。圆有很多条（不要发明数字）。不规则三角形 / 不规则四边形通常有 0 条。完成图形：如果方格纸有一条垂直/水平对称轴，一侧有一些单位格已着色，另一侧的匹配格必须距离对称轴相同的距离。算法：识别对称图形、判断一条直线是否是对称轴、在方格纸上完成对称图形。常见错误：把长方形的对角线当对称轴（rectangle diagonals are NOT lines of symmetry）、认为每个图形都有对称轴（scalene triangles usually have 0）、在对称轴错误的一侧完成图形（should be same distance on the other side）、数出不能让两半重合的折叠线（must check that folding makes two halves match exactly）。题目配有双向对照表，显示对应官方 2021 Primary Mathematics Syllabus P4 Geometry → Symmetry 3.1–3.3，以及申请 P5 → 掌握 P4 的规则。本周明确不教：rotational symmetry / order of rotational symmetry（旋转对称）、reflection in a point（点对称）、3D symmetry（立体对称）、nets（展开图，那是第 29 周）、triangle angle sum（三角形内角和）、quadrilateral interior-angle sum（四边形内角和）。本周只教：line of symmetry（对称轴）、symmetric figure（对称图形）、identifying symmetric figures（识别对称图形 3.1）、determining whether a straight line is a line of symmetry（判断一条直线是否是对称轴 3.2）、completing a symmetric figure on a square grid（在方格纸上完成对称图形 3.3）。每个题目用文字描述图形，给足信息让孩子能唯一确定答案。",
      videoUrl: null,
      kaizenFocus: null,
      questions: [
        {
          type: "reading",
          order: 1,
          content: `Read the information and choose the correct answer.

Question 1:
An isosceles triangle has two sides that are equal. The isosceles triangle is NOT an equilateral triangle. Is this triangle a symmetric figure? (Hint: Yes. An isosceles triangle that is not equilateral has one line of symmetry. The line of symmetry goes from the vertex between the two equal sides to the midpoint of the base. So it is a symmetric figure.)

Question 2:
A square has four sides that are all equal. How many lines of symmetry does a square have? (Hint: A square has 4 lines of symmetry. Two lines of symmetry are the two midlines through opposite sides. Two lines of symmetry are the two diagonals.)

Question 3:
A rectangle is NOT a square. The rectangle has two long sides and two short sides. Are the two diagonals of this rectangle lines of symmetry? (Hint: No. If you fold the rectangle along a diagonal, the two halves do NOT match. The diagonals are NOT lines of symmetry.)

Question 4:
A rectangle is NOT a square. The rectangle has two long sides and two short sides. How many lines of symmetry does this rectangle have? (Hint: A non-square rectangle has 2 lines of symmetry. The two lines of symmetry are the two midlines through opposite sides.)

Question 5:
On a 4-by-4 square grid, a vertical line of symmetry runs down the middle. One unit square is shaded one unit to the left of the line. Where must the matching square be? (Hint: The matching square must be one unit to the right of the line. Same distance from the line of symmetry.)`,
          options: JSON.stringify([
            "Isosceles triangle (not equilateral): symmetric figure?|A. Yes|B. No|C. Only if all sides equal|D. Cannot tell",
            "Square: how many lines of symmetry?|A. 2|B. 3|C. 4|D. 8",
            "Non-square rectangle: diagonals as lines of symmetry?|A. Yes|B. No|C. Only one diagonal|D. Cannot tell",
            "Non-square rectangle: how many lines of symmetry?|A. 0|B. 1|C. 2|D. 4",
            "4×4 grid, vertical line, 1 square shaded 1 unit left. Matching square?|A. 1 unit left|B. 1 unit right|C. 2 units right|D. 0 units (same position)",
          ]),
          correctAnswer: "A,C,B,C,B",
          points: 5,
        },
        {
          type: "grammar",
          order: 2,
          content: `Choose the correct answer for each question.

Question 6:
Which figure is NOT symmetric? A scalene triangle has three sides that are all different lengths. (Hint: A scalene triangle usually has 0 lines of symmetry. It is NOT a symmetric figure.)

Question 7:
An equilateral triangle has three sides that are all equal. How many lines of symmetry does an equilateral triangle have? (Hint: An equilateral triangle has 3 lines of symmetry. Each line goes from one vertex to the midpoint of the opposite side.)

Question 8:
A rectangle is NOT a square. A straight line goes through two opposite corners of the rectangle (a diagonal). Is this diagonal a line of symmetry of the rectangle? (Hint: No. If you fold the rectangle along the diagonal, the two halves do NOT match. The diagonal is NOT a line of symmetry.)

Question 9:
A rectangle is NOT a square. A straight line goes through the midpoints of the two long sides of the rectangle (a midline). Is this midline a line of symmetry of the rectangle? (Hint: Yes. If you fold the rectangle along this midline, the two halves match. The midline is a line of symmetry.)

Question 10:
On a square grid, a horizontal line of symmetry runs across the middle. Two unit squares are shaded one unit above the line. How many matching squares must be below the line? How far below? (Hint: Two unit squares are one unit above. The matching squares must be one unit below. Same number: 2 squares. Same distance: 1 unit below.)

Question 11:
A circle has a center. Does a circle have a line of symmetry? (Hint: Yes. A circle has many lines of symmetry. Any straight line that goes through the center is a line of symmetry. Do not invent a number for how many.)

Question 12:
A square has four sides that are all equal. A straight line goes through two opposite corners of the square (a diagonal). Is this diagonal a line of symmetry of the square? (Hint: Yes. If you fold the square along the diagonal, the two halves match. The diagonal is a line of symmetry. A square has 4 lines of symmetry: 2 midlines + 2 diagonals.)

Question 13:
On a square grid, a vertical line of symmetry runs down the middle. After completing the symmetric figure, the left half has 5 shaded unit squares. How many shaded unit squares are on the right half? (Hint: A symmetric figure has two halves that match. If the left half has 5 shaded squares, the right half must also have 5 shaded squares. Same number.)`,
          options: JSON.stringify([
            "Which figure is NOT symmetric?|A. Square|B. Equilateral triangle|C. Scalene triangle|D. Circle",
            "Equilateral triangle: how many lines of symmetry?|A. 1|B. 2|C. 3|D. 4",
            "Rectangle diagonal: line of symmetry?|A. Yes|B. No|C. Only for squares|D. Cannot tell",
            "Rectangle long-side midline: line of symmetry?|A. Yes|B. No|C. Only for squares|D. Cannot tell",
            "Horizontal line, 2 squares 1 unit above. Matching squares below?|A. 1 square, 1 unit|B. 2 squares, 1 unit|C. 2 squares, 2 units|D. 3 squares, 1 unit",
            "Circle: has a line of symmetry?|A. No|B. Yes|C. Only if diameter shown|D. Cannot tell",
            "Square diagonal: line of symmetry?|A. Yes|B. No|C. Only one diagonal|D. Cannot tell",
            "Left half: 5 shaded squares. Right half?|A. 3 squares|B. 5 squares|C. 7 squares|D. 10 squares",
          ]),
          correctAnswer: "C,C,B,A,B,B,A,B",
          points: 8,
        },
        {
          type: "writing",
          order: 3,
          content: `At Tampines Primary School, the students are learning about line symmetry.

(a) Mei draws a rectangle that is NOT a square. The rectangle has two long sides and two short sides. How many lines of symmetry does Mei's rectangle have? Show your working by stating the property: A non-square rectangle has 2 lines of symmetry. The two lines of symmetry are the two midlines through opposite sides. One midline goes through the midpoints of the two long sides. The other midline goes through the midpoints of the two short sides. The diagonals are NOT lines of symmetry because folding along a diagonal does not make the two halves match. So Mei's rectangle has 2 lines of symmetry.

(b) Jun Wei draws an equilateral triangle. All three sides of the triangle are equal. How many lines of symmetry does Jun Wei's triangle have? Show your working: An equilateral triangle has 3 lines of symmetry. Each line of symmetry goes from one vertex (顶点) to the midpoint of the opposite side. There are three vertices, so there are three lines of symmetry. An equilateral triangle has 3 lines of symmetry.

(c) Priya draws a shape on a square grid. A vertical line of symmetry runs down the middle of the grid. Priya shades some unit squares on the left side of the line. To complete the symmetric figure, how should Priya shade the unit squares on the right side? Show your working: A symmetric figure has two halves that match when you fold along the line of symmetry. If a unit square is shaded on the left side at a certain distance from the line, the matching unit square on the right side must be at the same distance from the line. For example, if a square is 1 unit to the left of the line, the matching square is 1 unit to the right of the line. Same distance from the line of symmetry. The number of shaded squares on the right must equal the number of shaded squares on the left. To complete the symmetric figure, Priya should shade the matching squares on the right side at the same distance from the line.

写出说明、算式和答案。Show working step by step. For line symmetry, state the properties (e.g., "A non-square rectangle has 2 lines of symmetry: the two midlines. The diagonals are NOT lines of symmetry", "An equilateral triangle has 3 lines of symmetry"). For completing a symmetric figure on a grid, explain the rule (e.g., "same distance from the line of symmetry"). Explain common errors (e.g., thinking a rectangle's diagonals are lines of symmetry, thinking every figure has a line of symmetry, completing the figure on the wrong side of the line, counting a fold that does not make two matching halves).`,
          points: 10,
        },
      ],
    },
    
    // MATH WEEK 29
    {
      level: "MATH",
      weekNumber: 29,
      title: "数学 第 29 周 / Maths Week 29",
      description: "AEIS-Primary P4 Mathematics: Nets",
      isSample: false,
      errorFocus: null,
      parentBrief: "本周主题：展开图 / nets，对应官方 2021 P4 Geometry → Nets 4.1–4.4（identifying 2D representations of cube, cuboid, cone, cylinder, prism, pyramid; drawing 2D representations of cube, cuboid, prism, pyramid; identifying the nets of 3D solids: cube, cuboid, prism, pyramid; identifying the solid which can be formed by a given net）。申请 P5 入学的孩子需掌握 P4 内容（MOE AEIS 的 preceding level 规则）。关键技能：识别立体图形的二维表示（4.1: cube 立方体, cuboid 长方体, cone 圆锥, cylinder 圆柱, prism 棱柱, pyramid 棱锥）；画二维表示（4.2: cube, cuboid, prism, pyramid——注意 cone 和 cylinder 不在 4.2）；识别展开图（4.3: cube, cuboid, prism, pyramid 的展开图——注意 cone 和 cylinder 不在 4.3，不能发明圆锥圆柱展开图）；从展开图判断可组成的立体图形（4.4）。官方事实：cube 有 6 个正方形面，都相等，有效的 cube net 有 6 个正方形折叠后无重叠；cuboid 有 6 个长方形面（对面相等）；triangular prism 有 2 个三角形面和 3 个长方形面（共 5 面）；square pyramid 有 1 个正方形底和 4 个三角形面（共 5 面）；cone 的 2D 表示是圆+三角形或圆+扇形（只在 4.1，不在 4.3）；cylinder 的 2D 表示是长方形+两个圆（只在 4.1，不在 4.3）。常见错误：以为任何 6 个正方形排列都是 cube net（一排 6 个正方形折叠时面会重叠，不是 cube net）；混淆 prism（2 triangles + 3 rectangles）和 square pyramid（1 square + 4 triangles）；发明 cone/cylinder net（cone 和 cylinder 只在 4.1 二维表示，不在 4.3 展开图中）；把 2D 画法当展开图（2D drawing 如正方形+两个平行四边形表示立方体，不是 net）。本周不教：surface area / volume formulas（表面积体积公式）、Euler's formula（欧拉公式）、line symmetry / rotational symmetry（已教）、triangle angle sum（三角形内角和）、sphere net（球体不在 P4 nets 列表）。这是最后一个官方 P4 Geometry 主题周。",
      videoUrl: null,
      kaizenFocus: null,
      questions: [
        {
          type: "reading",
          order: 1,
          content: `Read the information and choose the correct answer.

Question 1:
A solid has 6 faces. All 6 faces are squares, and all the squares are equal in size. Which solid is this? (Hint: A cube has 6 square faces, all equal. A cuboid has 6 rectangular faces. A cone has 1 circular face and a curved surface. A pyramid with a square base has 1 square and 4 triangles. So the answer is cube.)

Question 2:
A 2D representation shows a rectangle and two circles (one circle at each end of the rectangle). Which solid does this represent? (Hint: This is the 2D representation of a cylinder. A cylinder has two circular faces and one curved surface. When drawn on paper, it looks like a rectangle with two circles. Note: 4.1 identifying 2D representations includes cone and cylinder. But 4.3 identifying nets does NOT include cone or cylinder.)

Question 3:
A net has 6 equal squares arranged in a cross shape: one square in the center, one square on each of the four sides of the center square, and one more square attached to the bottom square. Which solid can be formed by this net? (Hint: A cube net has 6 squares that fold to a cube without overlapping faces. A cross shape of 6 equal squares is a valid cube net. So the answer is cube.)

Question 4:
A net has 1 square and 4 triangles. The square is in the center, and one triangle is attached to each side of the square. Which solid can be formed by this net? (Hint: A square pyramid has 1 square base and 4 triangular faces. The net has 1 square + 4 triangles. So the answer is square pyramid. A triangular prism has 2 triangles + 3 rectangles, not 1 square + 4 triangles.)

Question 5:
A net has 2 triangles and 3 rectangles. Which solid can be formed by this net? (Hint: A triangular prism has 2 triangular faces and 3 rectangular faces (5 faces in total). The net has 2 triangles + 3 rectangles. So the answer is triangular prism. A square pyramid has 1 square + 4 triangles, not 2 triangles + 3 rectangles.)`,
          options: JSON.stringify([
            "A solid has 6 square faces, all equal. Which solid?|A. Cube|B. Cuboid|C. Cone|D. Pyramid",
            "2D representation: a rectangle and two circles. Which solid?|A. Cube|B. Prism|C. Cylinder|D. Pyramid",
            "Net: 6 equal squares in a cross. Which solid?|A. Cube|B. Cuboid|C. Prism|D. Pyramid",
            "Net: 1 square and 4 triangles. Which solid?|A. Cube|B. Triangular prism|C. Square pyramid|D. Cylinder",
            "Net: 2 triangles and 3 rectangles. Which solid?|A. Cube|B. Triangular prism|C. Square pyramid|D. Cylinder",
          ]),
          correctAnswer: "A,C,A,C,B",
          points: 5,
        },
        {
          type: "grammar",
          order: 2,
          content: `Choose the correct answer for each question.

Question 6:
A row of 6 equal squares arranged in a straight line. Is this a net of a cube? (Hint: No. When you fold a row of 6 squares, the faces overlap. A valid cube net has 6 squares that fold to a cube without overlapping faces. A row of 6 squares is NOT a cube net.)

Question 7:
A cuboid net must have how many faces? (Hint: A cuboid has 6 rectangular faces (opposite faces are equal). So a cuboid net must have 6 faces.)

Question 8:
Which solid is included in 4.1 identifying 2D representations, but is NOT included in 4.3 identifying nets? (Hint: 4.1 includes cube, cuboid, cone, cylinder, prism, pyramid. 4.3 includes cube, cuboid, prism, pyramid. 4.3 does NOT include cone or cylinder. So the answer is cone or cylinder.)

Question 9:
A 2D drawing shows a square with two parallelograms attached (one for the top face, one for the side face). Is this a net of a cube? (Hint: No. This is a 2D representation (2D drawing) of a cube, not a net. A net is a flat shape that folds into a 3D solid. A 2D drawing shows the 3D solid on paper, but it is not a net.)

Question 10:
A net has 6 rectangles. The rectangles have dimensions: 2 faces are 8 cm by 4 cm, 2 faces are 8 cm by 3 cm, and 2 faces are 4 cm by 3 cm (opposite faces match in pairs). Which solid can be formed by this net? (Hint: A cuboid has 6 rectangular faces, and opposite faces are equal. The net has 6 rectangles with opposite faces matching in pairs. So the answer is cuboid.)

Question 11:
Can a net of 1 square and 4 triangles form a cube? (Hint: No. A cube has 6 square faces, all equal. A net of 1 square + 4 triangles can form a square pyramid (1 square base + 4 triangular faces), not a cube.)

Question 12:
How many faces does a square pyramid have? (Hint: A square pyramid has 1 square base and 4 triangular faces. In total: 1 + 4 = 5 faces.)

Question 13:
A 2D representation shows a circle and a triangle. Which solid does this represent? (Hint: This is the 2D representation of a cone. A cone has 1 circular face and a curved surface. When drawn on paper, it looks like a circle with a triangle. Note: 4.1 identifying 2D representations includes cone. But 4.3 identifying nets does NOT include cone.)`,
          options: JSON.stringify([
            "Row of 6 equal squares in a straight line: net of a cube?|A. Yes|B. No|C. Only if folded carefully|D. Cannot tell",
            "Cuboid net must have how many faces?|A. 4|B. 5|C. 6|D. 8",
            "In 4.1 2D representations but NOT in 4.3 nets?|A. Cube|B. Prism|C. Cone|D. Pyramid",
            "2D drawing of a cube (square + 2 parallelograms): is that a net?|A. Yes|B. No|C. Only if 3D|D. Cannot tell",
            "Net: 6 rectangles, opposite faces match (8×4, 8×3, 4×3). Which solid?|A. Cube|B. Cuboid|C. Prism|D. Pyramid",
            "Can net of 1 square + 4 triangles form a cube?|A. Yes|B. No|C. Only if squares|D. Cannot tell",
            "How many faces does a square pyramid have?|A. 4|B. 5|C. 6|D. 8",
            "2D representation: circle + triangle. Which solid?|A. Cube|B. Cylinder|C. Cone|D. Sphere",
          ]),
          correctAnswer: "B,C,C,B,B,B,B,C",
          points: 8,
        },
        {
          type: "writing",
          order: 3,
          content: `At Raffles Girls' Primary School, the students are learning about nets of 3D solids.

(a) Mei draws a net with 6 equal squares arranged in a row (a straight line). Is this a net of a cube? Show your working by stating the property: A cube has 6 square faces, all equal. A valid cube net has 6 squares that fold to a cube without overlapping faces. When you fold a row of 6 squares in a straight line, the faces overlap when folded. For example, the first square and the last square both try to cover the same position on the cube. So a row of 6 squares is NOT a cube net because faces overlap when folded. A valid cube net could be a cross shape: one center square, one square on each of the four sides, and one more attached to the bottom. That cross shape folds to a cube without overlapping.

(b) Jun Wei draws a net with 1 square and 4 triangles. The square is in the center, and one triangle is attached to each side of the square. Which solid can be formed by Jun Wei's net? Show your working: A square pyramid has 1 square base and 4 triangular faces (5 faces in total). Jun Wei's net has 1 square + 4 triangles. When you fold Jun Wei's net, the square becomes the base, and the 4 triangles fold up to meet at the top vertex (顶点). This forms a square pyramid. A triangular prism has 2 triangles + 3 rectangles (5 faces), not 1 square + 4 triangles. A cube has 6 squares, not 1 square + 4 triangles. So Jun Wei's net forms a square pyramid.

(c) Priya draws a net with 2 triangles and 3 rectangles. Which solid can be formed by Priya's net? Show your working: A triangular prism has 2 triangular faces and 3 rectangular faces (5 faces in total). Priya's net has 2 triangles + 3 rectangles. When you fold Priya's net, the 2 triangles become the two ends of the prism, and the 3 rectangles wrap around to connect the two triangular ends. This forms a triangular prism. A square pyramid has 1 square + 4 triangles (5 faces), not 2 triangles + 3 rectangles. So Priya's net forms a triangular prism.

写出说明、算式和答案。Show working step by step. For nets, state the properties (e.g., "A cube net has 6 squares that fold without overlapping. A row of 6 squares is NOT a cube net because faces overlap when folded.", "A square pyramid net has 1 square + 4 triangles.", "A triangular prism net has 2 triangles + 3 rectangles."). Explain common errors (e.g., thinking any arrangement of 6 squares is a cube net, confusing prism (2 triangles + 3 rectangles) with square pyramid (1 square + 4 triangles), inventing a cone/cylinder net when cone/cylinder are only in 4.1 2D representations not in 4.3 nets, counting a 2D drawing as a net).`,
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
          audioUrl: "/audio/a2-w4-listening.mp3",
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
          audioUrl: "/audio/a2-w5-listening.mp3",
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
          audioUrl: "/audio/a2-w6-listening.mp3",
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
          audioUrl: "/audio/b1-w4-listening.mp3",
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
          audioUrl: "/audio/b1-w5-listening.mp3",
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
    {
      level: "B1",
      weekNumber: 8,
      title: "Week 8: Such a Busy Week",
      description: "Using so and such to make descriptions stronger",
      isSample: false,
      dueDate: new Date("2026-10-22"),
      errorFocus: "so-such",
      parentBrief: "本周纠错焦点：so / such。中文「这么 / 那么」不区分 so / such，孩子会说 so a beautiful park / such beautiful / so beautiful park / such a weather。英语规则：so + 形容词（so tired, so interesting）；such a/an + 形容词 + 单数可数名词（such a beautiful park）；such + 形容词 + 不可数或复数（such bad weather, such friendly teachers）。本周不把 too/enough 作为目标（可能作为错误选项出现）。",
      videoUrl: null,
      kaizenFocus: "Use so + adjective and such (+ a/an) + adjective + noun",
      officialClipId: null,
      questions: [
        {
          type: "reading",
          order: 1,
          content: `Read Mei's email:

From: Mei
To: Priya
Subject: Such a Long Saturday!

Hi Priya,

Last Saturday was so tiring! Let me tell you what happened.

In the morning, Ms Tan organised a school concert rehearsal. We arrived at 8 a.m. The hall was so crowded with students from every class! Jun Wei and I were in the choir. We had to practise for such a long time – three hours without a break! My legs were so sore from standing. But Ms Tan was so patient with us. She said, "You're making such good progress! One more run-through and we'll be ready."

After rehearsal, I was so hungry. Mum had packed me such a big lunch – chicken rice, fruit, and mango pudding! Jun Wei forgot his lunch, so I shared mine with him. He was so grateful.

In the afternoon, it started raining. The rain was so heavy that we couldn't go home yet. Ms Tan said, "It's such terrible weather! Everyone wait in the hall." We waited for such a long time. Some parents called to say the roads near East Coast were flooded. It was so frustrating to be stuck at school!

But then something nice happened. Mr Kumar, our PE teacher, had such a brilliant idea. He said, "Let's play indoor games!" We played charades and board games. Jun Wei was so funny acting out different animals. Everyone was laughing so hard! Even though we were tired, we had such a good time.

By 5 p.m., the rain stopped. Mum finally came to pick me up. She was so relieved to see me. She said, "I was so worried! The traffic was terrible." On the way home, we saw such deep puddles on the roads. Some cars were moving so slowly through the water.

When I got home, I was so exhausted that I fell asleep before dinner! Dad said I was sleeping so deeply that he couldn't wake me up. I woke up at 8 p.m. feeling so confused. Mum had saved me such a delicious dinner – my favourite laksa!

Looking back, it was such a long day. But I learned something: even when you're so tired and things don't go as planned, good friends and kind teachers can make such a difference. Ms Tan and Mr Kumar were so thoughtful, and Jun Wei made the boring parts so much fun!

Anyway, how was your weekend? I hope it wasn't as tiring as mine!

Write back soon!

Love,
Mei`,
          options: JSON.stringify([
            "How long was the morning rehearsal?|A. One hour|B. Two hours|C. Three hours|D. Four hours",
            "Why couldn't the students leave school after rehearsal?|A. They had more practice|B. The rain was too heavy|C. The doors were locked|D. Ms Tan made them stay",
            "What did Mr Kumar suggest when students were stuck at school?|A. Continue rehearsing|B. Do homework|C. Play indoor games|D. Call parents",
            "How did Mei feel when she got home?|A. So excited|B. So angry|C. So exhausted|D. So happy",
            "What did Mei learn from the experience?|A. Always bring an umbrella|B. Don't go to school on Saturdays|C. Good friends and kind teachers make a difference|D. Rehearsals are boring",
          ]),
          correctAnswer: "C,B,C,C,C",
          points: 5,
        },
        {
          type: "grammar",
          order: 2,
          content: `Choose the correct word for each gap:

A Busy School Week
by Jun Wei, Primary 5

Last week was (1) ____ busy week at school. On Monday, we had (2) ____ much homework that I stayed up late. I was (3) ____ tired on Tuesday morning!

On Wednesday, our class went to the Science Centre. The exhibitions were (4) ____ interesting! We saw (5) ____ amazing experiments with electricity and light. Our guide was (6) ____ helpful person – she answered all our questions.`,
          options: JSON.stringify([
            "(1)|A. so|B. such|C. such a|D. so a",
            "(2)|A. such|B. such a|C. so|D. so a",
            "(3)|A. such|B. so|C. such a|D. so a",
            "(4)|A. such|B. so a|C. so|D. such a",
            "(5)|A. so|B. such a|C. such|D. so a",
            "(6)|A. so|B. such|C. so a|D. such a",
          ]),
          correctAnswer: "C,C,B,C,C,D",
          points: 6,
        },
        {
          type: "writing",
          order: 3,
          content: `Write an email to your friend (100-120 words).

Your friend asked you to describe a day that was unusually good or unusually difficult.

In your email:
• Say what day it was and what you did
• Describe why it was special (very good or very difficult)
• Explain how you felt
• Say what you learned or how it ended

You MUST use "so + adjective" at least once and "such (+ a/an) + adjective + noun" at least once.

DO NOT write: so + noun / so a + noun / such + adjective alone (without noun)

成功标准 / Success Criteria:
✓ So + 形容词 (so + adjective: so tired, so interesting, so happy)
✓ Such a/an + 形容词 + 单数名词 (such a + adjective + singular noun: such a good day, such an interesting book)
✓ Such + 形容词 + 不可数/复数 (such + adjective + uncountable/plural: such bad weather, such friendly people)
✓ 不要写 so + 名词 或 so a (Don't write: so beautiful park / so a day)
✓ 不要写 such + 形容词 alone (Don't write: such beautiful without noun)
✓ 描述为什么这一天特别 (Explain why the day was special)
✓ 邮件格式 (Email format: greeting, paragraphs, closing)
✓ 100-120词 (100-120 words)`,
          points: 10,
        },
      ],
    },
    {
      level: "B1",
      weekNumber: 9,
      title: "Week 9: Too Tired, Not Enough Time",
      description: "Using too and enough to talk about limits",
      isSample: false,
      dueDate: new Date("2026-10-29"),
      errorFocus: "too-enough",
      parentBrief: "本周纠错焦点：too / enough。中文「太 / 够」位置不同，孩子会说 too much tired / enough rich / too tired that I can't / I am not enough tall。英语规则：too + 形容词 + to 不定式（too tired to run）；形容词 + enough + to 不定式（tall enough to reach）；enough + 名词（enough time）。本周不把 so/such 作为目标（可能作为错误选项出现）。",
      videoUrl: null,
      kaizenFocus: "Use too + adjective + to-infinitive and adjective/enough + noun correctly",
      officialClipId: null,
      questions: [
        {
          type: "reading",
          order: 1,
          content: `Read Priya's email:

From: Priya
To: Mei
Subject: Friday Was Crazy!

Hi Mei,

Thanks for checking on me! I'm feeling better now. Let me tell you about Friday – it was one of those days where everything went wrong because of timing!

In the morning, Jun Wei and I went to the library during recess. We wanted to borrow books for our History project. When we arrived, the librarian, Ms Liu, said, "Sorry, but you're too late to borrow these reference books. Another class took them twenty minutes ago." Jun Wei was so disappointed! Ms Liu was kind enough to suggest we try the public library after school.

After recess, we had PE. Mr Kumar set up a new high jump bar. I tried three times, but I wasn't tall enough to clear it. The bar was at 1.2 metres, and I'm only 1.15 metres tall. Mr Kumar said, "Don't worry, Priya. You're fast enough to excel at sprinting instead!" That made me feel better.

At lunchtime, Jun Wei and I rushed to the canteen. We were too hungry to wait in the long queue, so we went to the drinks stall first. But when we got to the food stall, they said, "Sorry, we don't have enough chicken rice left. Only two portions remain, and they're reserved." We weren't quick enough to get our favourite meal! We had to settle for fried noodles instead.

In the afternoon, our class had a Maths quiz. Ms Tan gave us thirty minutes, but the quiz was too difficult to finish in time. I answered only fifteen out of twenty questions. Jun Wei said he was too stressed to think clearly. Ms Tan told us, "Don't worry. This quiz was challenging enough to show me what we need to revise together."

After school, Jun Wei and I went to Bedok Public Library. We searched for History books about early Singapore. Luckily, we found enough materials for our project – six books and three magazines! The librarian was helpful enough to show us the online catalogue too.

By the time we left the library, it was nearly 6 p.m. I was too exhausted to do any homework. Mum said I looked tired enough to sleep through dinner! I told her about the day, and she laughed. She said, "At least you were determined enough to keep trying!"

Looking back, Friday taught me something important: even when things don't go perfectly, you can still be resourceful enough to find solutions. Jun Wei and I were patient enough to visit another library, and now our project is on track!

Hope you're back at school on Monday. We have enough work to do together!

Write back soon,
Priya`,
          options: JSON.stringify([
            "Why couldn't Priya and Jun Wei borrow the reference books?|A. The library was closed|B. They were too late – another class took them|C. Ms Liu said they couldn't borrow them|D. The books were too expensive",
            "What did Mr Kumar say about Priya's sprinting?|A. She wasn't tall enough|B. She was too slow|C. She was fast enough to excel at it|D. She needed more practice",
            "Why couldn't Priya and Jun Wei get chicken rice?|A. It was too expensive|B. The canteen was closed|C. They weren't hungry enough|D. There wasn't enough left – only two portions remained",
            "How did Jun Wei feel during the Maths quiz?|A. Too stressed to think clearly|B. Too happy to concentrate|C. Confident enough to finish|D. Too tired to start",
            "What did Priya learn from Friday?|A. Always bring enough money|B. Don't go to the library|C. Even when things don't go perfectly, you can be resourceful enough to find solutions|D. PE is too difficult",
          ]),
          correctAnswer: "B,C,D,A,C",
          points: 5,
        },
        {
          type: "grammar",
          order: 2,
          content: `Choose the correct word for each gap:

Not Enough Time
by Mei, Primary 5

Last Tuesday was stressful! I woke up late because my alarm didn't ring. I was (1) ____ to eat breakfast – I just grabbed a banana and ran.

At school, Ms Tan gave us a group project. My group had only two days to prepare, which wasn't (2) ____. We had to research, make slides, and practise presenting.

Jun Wei said he was (3) ____ to present, so he volunteered. Priya was (4) ____ to design the slides beautifully. I did the research because I'm usually (5) ____ to find information online.

By Thursday, we were ready. Ms Tan said our project was (6) ____ to get a good grade. I was relieved!`,
          options: JSON.stringify([
            "(1)|A. too rush|B. enough rushed|C. too rushed|D. rushed enough",
            "(2)|A. enough time|B. too time|C. time enough|D. too much time",
            "(3)|A. too confident|B. enough confident|C. confident too|D. confident enough",
            "(4)|A. too creative|B. creative enough|C. enough creative|D. too much creative",
            "(5)|A. enough quick|B. quick enough|C. too quick|D. quick too",
            "(6)|A. too good|B. good too|C. good enough|D. enough good",
          ]),
          correctAnswer: "C,A,D,B,B,C",
          points: 6,
        },
        {
          type: "writing",
          order: 3,
          content: `Write an email to your friend (100-120 words).

Your friend asked you about something you wanted to do recently but couldn't do because of a limit (too tired, not enough time, not old enough, not tall enough, etc.).

In your email:
• Say what you wanted to do
• Explain what the problem was (use too...to or not...enough)
• Describe how you felt
• Say what you did instead or what you learned

You MUST use "too + adjective + to-infinitive" at least once and "adjective + enough" or "enough + noun" at least once.

DO NOT write: too much tired / enough tall / too tired that I can't / I am not enough tall

成功标准 / Success Criteria:
✓ Too + 形容词 + to 不定式 (too + adjective + to-infinitive: too tired to run, too late to catch)
✓ 形容词 + enough + to 不定式 (adjective + enough + to-infinitive: tall enough to reach, fast enough to win)
✓ Enough + 名词 (enough + noun: enough time, enough money)
✓ 不要写 too much tired 或 too + 形容词 + that 句子 (Don't write: too much tired / too tired that I couldn't)
✓ 不要写 enough + 形容词 或形容词在 enough 后面 (Don't write: enough tall / I am not enough tall)
✓ 解释限制是什么以及你的感受 (Explain the limit and how you felt)
✓ 邮件格式 (Email format: greeting, paragraphs, closing)
✓ 100-120词 (100-120 words)`,
          points: 10,
        },
      ],
    },
    {
      level: "B1",
      weekNumber: 10,
      title: "Week 10: Checking What We Heard",
      description: "Using question tags to check information",
      isSample: false,
      dueDate: new Date("2026-11-05"),
      errorFocus: "question-tags",
      parentBrief: "本周纠错焦点：反意疑问句 question tags。中文用「是不是 / 对不对」，孩子会说 You like it, is it? / She's tall, is she?（同极性）/ You don't like English, isn't it? / He can swim, can he?（想确认肯定）。英语规则：肯定句 + 否定尾（You're tired, aren't you?）；否定句 + 肯定尾（She doesn't like rice, does she?）；助动词要一致（do/does/did/is/are/can/will）。本周不教倒装疑问句，也不是间接引语（B1 W4 已教）。",
      videoUrl: null,
      kaizenFocus: "Use opposite-polarity question tags that match the auxiliary",
      officialClipId: null,
      questions: [
        {
          type: "reading",
          order: 1,
          content: `Read this email exchange about Sports Day:

From: Mei
To: Priya
Subject: Sports Day Checks

Hi Priya,

Ms Tan just told us about Sports Day next Friday! I want to make sure I have all the details right.

Sports Day is on Friday, isn't it? I think she said Friday, but I want to be certain. And we need to wear our PE uniform, don't we? I remember her mentioning that.

Jun Wei told me the sprinting race starts at 9 a.m. That's correct, isn't it? I don't want to be late! He also said you're running in the 100-metre race, aren't you? I'll come and cheer for you!

Ms Tan said parents can come to watch, didn't she? My mum wants to come, but she wasn't sure if parents were allowed. I think Ms Tan mentioned it at the end of class.

Oh, and we don't need to bring our textbooks that day, do we? I assume we'll leave them at home since we're doing sports all day. But the library books are due on Friday, so we can't forget those, can we?

One more thing – the canteen will be open during lunch break, won't it? Jun Wei wasn't sure, so I told him I'd check with you. You usually know these details!

Write back soon and let me know if I got everything right!

Mei

---

From: Priya
To: Mei
Subject: Re: Sports Day Checks

Hi Mei,

Yes, you've got most things right! Sports Day is on Friday, and we definitely need to wear our PE uniform. Ms Tan was very clear about that!

The sprinting race does start at 9 a.m., so don't be late! And yes, I'm running the 100 metres – I've been practising all week! Jun Wei is running too, isn't he? I thought I saw his name on the list.

Your mum can definitely come – Ms Tan said parents are welcome to watch from the spectator area. She even said they could help with the water station, didn't she? I remember her asking for parent volunteers.

You're right about the textbooks – we don't need to bring them. But the library books are due, so we should return them on Thursday instead, shouldn't we? Otherwise we'll forget on Friday!

The canteen will be open, but only for drinks and snacks, not full meals. Ms Tan said we should bring a packed lunch, didn't she? I'm bringing sandwiches.

See you on Friday – it's going to be fun, isn't it?

Priya`,
          options: JSON.stringify([
            "What does Mei want to confirm about Sports Day?|A. Whether it's on Thursday|B. Whether it's on Friday and other details|C. Whether parents must come|D. Whether the canteen is closed",
            "According to Priya, when should they return library books?|A. On Friday morning|B. On Friday afternoon|C. On Thursday instead|D. Next Monday",
            "What is Priya doing to prepare for Sports Day?|A. She's been practising all week|B. She's studying the rules|C. She's helping Ms Tan|D. She's not participating",
            "What did Ms Tan ask parents to help with?|A. Bringing textbooks|B. The water station|C. Coaching students|D. Opening the canteen",
            "What should students bring for lunch on Sports Day?|A. Money for the canteen|B. Nothing – the canteen provides meals|C. A packed lunch|D. Library books",
          ]),
          correctAnswer: "B,C,A,B,C",
          points: 5,
        },
        {
          type: "grammar",
          order: 2,
          content: `Choose the correct question tag for each gap:

Checking the Plan
by Jun Wei, Primary 5

Tomorrow is the school library visit, and I want to make sure I have the right information!

The bus leaves at 8:30 a.m., (1) ____? I don't want to miss it. Ms Tan said we should bring our library cards, (2) ____? I found mine in my bag.

Priya is coming with our class, (3) ____? I thought I saw her name on the list. Mei can't come because she has a doctor's appointment, (4) ____? That's what she told me yesterday.

The library visit will take two hours, (5) ____? That means we'll be back at school by lunchtime. We don't need to bring lunch money, (6) ____? I think we'll eat at the school canteen after we return.`,
          options: JSON.stringify([
            "(1)|A. isn't it|B. doesn't it|C. won't it|D. hasn't it",
            "(2)|A. doesn't she|B. isn't she|C. didn't she|D. hasn't she",
            "(3)|A. doesn't she|B. isn't she|C. won't she|D. hasn't she",
            "(4)|A. does she|B. is she|C. can she|D. will she",
            "(5)|A. isn't it|B. doesn't it|C. won't it|D. hasn't it",
            "(6)|A. are we|B. will we|C. have we|D. do we",
          ]),
          correctAnswer: "B,C,B,C,C,D",
          points: 6,
        },
        {
          type: "writing",
          order: 3,
          content: `Write an email to your friend (100-120 words).

Your friend asked you to check some facts about a school event or activity (CCA, class outing, homework deadline, etc.).

In your email:
• Confirm at least two facts you're sure about
• Ask your friend to verify at least two other details
• Say what you're looking forward to or worried about

You MUST use at least TWO question tags: one after a POSITIVE statement and one after a NEGATIVE statement.

DO NOT write: You like it, is it? / She's tall, is she? / You don't like English, isn't it?

成功标准 / Success Criteria:
✓ 肯定句 + 否定尾 (Positive statement + negative tag: You're in Priya's class, aren't you? / The exam is tomorrow, isn't it?)
✓ 否定句 + 肯定尾 (Negative statement + positive tag: She doesn't take the bus, does she? / We can't bring phones, can we?)
✓ 助动词要一致 (Match the auxiliary: is→isn't it, does→doesn't she, can→can't he, did→didn't they)
✓ 不要用同极性 (Don't use same polarity: NOT "You're tired, are you?" or "She doesn't like it, doesn't she?")
✓ 不要一律用 is it (Don't always use "is it" – match the verb!)
✓ 确认至少两个事实、询问至少两个细节 (Confirm at least 2 facts, ask about at least 2 details)
✓ 邮件格式 (Email format: greeting, paragraphs, closing)
✓ 100-120词 (100-120 words)`,
          points: 10,
        },
      ],
    },
    {
      level: "B1",
      weekNumber: 11,
      title: "Week 11: What Had Already Happened",
      description: "Using the past perfect for the earlier past action",
      isSample: false,
      dueDate: new Date("2026-11-12"),
      errorFocus: "past-perfect",
      parentBrief: "本周纠错焦点：过去完成时 past perfect。中文没有这个时态，孩子会说 When I arrived, the bus left / I have finished before she came。英语规则：两个过去动作，较早的那个用 had + 过去分词（When I arrived, the bus had left）。",
      videoUrl: null,
      kaizenFocus: "Use had + past participle for the earlier of two past actions",
      officialClipId: null,
      questions: [
        {
          type: "reading",
          order: 1,
          content: `Read this email from Mei:

From: Mei
To: Priya
Subject: A Disappointing Day

Hi Priya,

Yesterday was such a frustrating day! Everything went wrong because I was late.

I woke up at 7:00, but when I checked my phone, I realized I had forgotten to set my alarm! I was supposed to wake up at 6:30. When I rushed to the kitchen, Mum told me she had already finished making breakfast. She had eaten her food and left for work at 6:45, so I had to eat alone.

I quickly got dressed and ran to the bus stop. When I arrived at 7:25, the bus had already left! The 7:20 bus was my usual one. I had missed it by five minutes. I had to wait twenty minutes for the next bus.

When I finally reached school at 8:05, the English lesson had already started. Ms Tan had already explained the homework instructions to the class. Jun Wei whispered to me that she had written everything on the board, but she had erased it before I arrived! I felt so lost.

At lunchtime, I went to the canteen to buy my favourite chicken rice. But when I got to the stall, the uncle told me he had already sold out! He had only made fifty portions that day, and they had finished by 12:15. I arrived at 12:20.

After school, I wanted to borrow a book from the library. When I got there at 2:35, I saw that the library had already closed for the day. It had closed at 2:30 for a staff meeting. The librarian had put a notice on the door, but I hadn't seen it in the morning.

When I got home, I asked my brother if he had saved me any dinner. He said Mum had cooked curry chicken, but he had already eaten everything! He hadn't known I would be late.

What a terrible day! Have you ever had a day like this? I hope today will be better!

Mei`,
          options: JSON.stringify([
            "Why did Mei wake up late?|A. Her alarm clock was broken|B. She had forgotten to set her alarm|C. Her mum didn't wake her|D. The phone battery was dead",
            "What happened when Mei got to the bus stop?|A. The bus was waiting for her|B. The bus had already left|C. The bus was five minutes late|D. The bus didn't come at all",
            "Why did Mei feel lost in English class?|A. She forgot her textbook|B. Ms Tan was angry with her|C. Ms Tan had erased the homework instructions before she arrived|D. Jun Wei didn't help her",
            "Why couldn't Mei buy chicken rice at lunch?|A. The stall was closed|B. She didn't have money|C. The chicken rice had already sold out|D. The uncle was on break",
            "What did Mei find when she went to the library?|A. It was open but crowded|B. It had already closed for a staff meeting|C. It was only open for teachers|D. It had moved to a new location",
          ]),
          correctAnswer: "B,B,C,C,B",
          points: 5,
        },
        {
          type: "grammar",
          order: 2,
          content: `Read the text below and choose the correct word for each gap.

Too Late at the Gate
by Jun Wei, Primary 5

Last Saturday, I wanted to visit the Science Centre with my family. We had (1) ____ to leave at 9 a.m., but we woke up late.

By the time we arrived at the carpark at 10:15, we saw that it was full. The security guard told us the last space (2) ____ already. We had to park on the street and walk fifteen minutes to the entrance.

When we finally reached the ticket counter at 10:35, the staff member told us we were too late. The special robot demonstration (3) ____ at 10:00, and the show (4) ____ by 10:30. It wouldn't happen again until 2 p.m. We felt disappointed.

At lunchtime, we went to the café. I wanted to order the dinosaur-shaped pizza, but the waiter said they (5) ____ already. When I asked why, he explained that other children (6) ____ all of them by 11:30. I had to order a regular sandwich instead!

Next time, we'll arrive early!`,
          options: JSON.stringify([
            "(1)|A. planned|B. plan|C. planning|D. plans",
            "(2)|A. had been taken|B. has been taken|C. was taken|D. is taken",
            "(3)|A. has started|B. had started|C. started|D. starts",
            "(4)|A. had finished|B. has finished|C. finished|D. finishes",
            "(5)|A. have sold out|B. sold out|C. had sold out|D. sell out",
            "(6)|A. order|B. have ordered|C. ordered|D. had ordered",
          ]),
          correctAnswer: "A,A,B,A,C,D",
          points: 6,
        },
        {
          type: "writing",
          order: 3,
          content: `Write an email to your friend (100-120 words).

Your friend asked you: "Have you ever been late for something important and missed it?"

Write an email telling them about a time when you arrived late and found that something had already happened (the bus had left, the shop had closed, your friend had already eaten, the class had started, etc.).

In your email:
• Describe when and where this happened
• Explain why you were late
• Tell them what had already happened when you arrived
• Say how you felt

You MUST use the past perfect (had + past participle) at least TWICE to show what had already happened before you arrived.

DO NOT write: I already eat before she come / When I arrived, the bus left / I have finished before she came

成功标准 / Success Criteria:
✓ 用 had + 过去分词表示更早的过去动作 (Use had + past participle for the earlier past action)
✓ 至少用两次 past perfect (Use past perfect at least twice: the bus had left, she had already finished, the shop had closed)
✓ 对比两个过去动作 (Show two past actions: When I arrived, the shop had closed; When I got there, my friends had already eaten)
✓ 不要用 I have finished before she came (Don't mix present perfect with past tense)
✓ 不要用两个一般过去时 (Don't use two simple past when one happened before the other: NOT "When I arrived, the bus left")
✓ 描述一次迟到经历 (Describe being late for something)
✓ 邮件格式 (Email format: greeting, body, closing)
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
    {
      level: "A2",
      weekNumber: 9,
      title: "Week 9: What We Like Doing",
      description: "Talking about likes and dislikes with like + -ing",
      isSample: false,
      dueDate: new Date("2026-10-15"),
      errorFocus: "like-ing",
      parentBrief: "本周纠错焦点：like / love / hate / enjoy + -ing。中文「喜欢」后直接加动词，孩子会说 I like swim / I like to swimming / I like swimminging / I enjoy to read。英语规则：like/love/hate/enjoy 后面加动词-ing。Cambridge A2 Key for Schools (Handbook 2020) Language Specifications 规定考 like / love / hate / enjoy + -ing 表达喜好。本周不是 like + to-infinitive（可能出现在错误选项）。",
      videoUrl: null,
      kaizenFocus: "Use like/love/hate/enjoy + -ing for likes and dislikes (I like swimming; She enjoys reading)",
      officialClipId: null,
      questions: [
        {
          type: "reading",
          order: 1,
          content: `Read the email from Mei:

From: Mei
To: Priya
Subject: Weekend Hobbies

Hi Priya,

How are you? I want to tell you about my weekend hobbies!

I love swimming at the East Coast Park pool on Saturday mornings. The water is cool and I enjoy doing laps. My brother Jun Wei doesn't like swimming. He prefers playing football with his friends at the field near our flat.

On Sunday afternoons, I enjoy reading at the library. I like reading mystery books about detectives. Ms Tan, our English teacher, also loves reading mystery books. She says reading helps us learn new words.

My mum enjoys drawing in her free time. She hates sitting at home doing nothing. She loves going to art classes at the community centre. My dad enjoys cooking on weekends. He doesn't like eating outside because he says home cooking is healthier.

What about you? What do you like doing on weekends? Do you enjoy drawing like my mum? Or do you prefer playing sports?

Write back soon!
Mei`,
          options: JSON.stringify([
            "What does Mei love doing on Saturday mornings?|A. Playing football|B. Swimming at East Coast Park|C. Reading at the library|D. Drawing at home",
            "What does Jun Wei prefer doing?|A. Swimming|B. Reading mystery books|C. Drawing|D. Playing football",
            "What does Ms Tan love reading?|A. Story books|B. Science books|C. Mystery books|D. History books",
            "What does Mei's mum enjoy doing?|A. Swimming|B. Cooking|C. Drawing|D. Playing football",
            "Why doesn't Mei's dad like eating outside?|A. It's too expensive|B. It's too far|C. Home cooking is healthier|D. He doesn't like restaurants",
          ]),
          correctAnswer: "B,D,C,C,C",
          points: 5,
        },
        {
          type: "grammar",
          order: 2,
          content: `Read the text below and choose the correct word for each gap.

Saturday Hobbies
by Priya, Primary 5

My family all have different hobbies. I (1) ____ painting pictures of flowers and animals. My little sister doesn't like painting. She (2) ____ playing with her toys and watching cartoons on TV.

My dad (3) ____ playing badminton every Saturday morning at the sports hall. He says exercise is important. My mum (4) ____ jogging in the morning. She says she (5) ____ waiting for the lift, so she always takes the stairs!

On rainy days, we all stay at home. My sister and I (6) ____ reading storybooks together. My dad reads the newspaper and my mum listens to music. We are a happy family!`,
          options: JSON.stringify([
            "(1)|A. enjoy|B. enjoy to|C. enjoys|D. enjoys to",
            "(2)|A. love|B. loves|C. love to|D. loves to",
            "(3)|A. enjoy|B. enjoys|C. enjoy to|D. enjoys to",
            "(4)|A. hate|B. hates|C. hate to|D. hates to",
            "(5)|A. hate|B. hates|C. hate to|D. hates to",
            "(6)|A. like|B. likes|C. like to|D. likes to",
          ]),
          correctAnswer: "A,B,B,B,B,A",
          points: 6,
        },
        {
          type: "writing",
          order: 3,
          content: `You receive this email from your English friend, Alex:

From: Alex
To: You
Subject: Your hobbies

Hi!

I want to know more about you! What do you like doing after school? What hobbies do you enjoy? Tell me about the things you love and hate doing!

Write back soon!
Alex

Write your email to Alex (40-60 words). Tell Alex about what you like doing after school.

You MUST use like/love/enjoy + -ing at least twice.

成功标准 / Success Criteria:
✓ 讲你喜欢做什么 (Tell what you like doing)
✓ 用 like/love/enjoy/hate + -ing 至少 2 次 (Use like/love/enjoy/hate + -ing at least 2 times)
✓ 动词加 -ing 形式正确 (Correct -ing form: swimming, reading, playing, NOT swim, to swimming, swimminging)
✓ 主语和动词一致 (Subject-verb agreement: I like / She likes / He enjoys)
✓ 邮件格式 (Email format: Hi Alex, ... / Best, [your name])
✓ 40-60词 (40-60 words)`,
          points: 10,
        },
      ],
    },
    {
      level: "A2",
      weekNumber: 10,
      title: "Week 10: Everyday Routines",
      description: "Talking about how often we do things",
      isSample: false,
      dueDate: new Date("2026-10-22"),
      errorFocus: "adverbs-of-frequency",
      parentBrief: "本周纠错焦点：always / usually / often / sometimes / never 的位置。中文频率词位置自由，孩子会说 I go always / I am always go / I never am late。英语规则：频率副词放在实义动词前面（I always walk to school），放在 be 动词后面（I am always tired）。Cambridge A2 Key for Schools (Handbook 2020) Language Specifications 规定考 always, usually, often, sometimes, never 这些频率副词。本周不教 present perfect + ever/never（那是 B1 Week 0）。",
      videoUrl: null,
      kaizenFocus: "Place always/usually/often/sometimes/never before the main verb and after be",
      officialClipId: null,
      questions: [
        {
          type: "reading",
          order: 1,
          content: `Read the email from Mei:

From: Mei
To: Priya
Subject: My School Day

Hi Priya,

How are you? I want to tell you about my weekday routines!

I always wake up at 6:30 in the morning. My mum usually makes breakfast for me. I never skip breakfast because Ms Tan says it's important for our brains. After breakfast, I often take the bus to school. Sometimes my dad drives me when he has time.

At school, I usually arrive before 7:30. My best friend Jun Wei is always at the canteen buying his breakfast. He never wakes up early enough to eat at home! Our first lesson is at 7:45. I am never late because I always check my watch.

During recess, I sometimes play with Priya at the basketball court. We often sit together at lunch and talk about our CCA activities. After school, I usually go to the library to do homework. I am always busy on weekdays, but I enjoy my school life!

What about your daily routine? Do you always wake up early? Write back soon!

Mei`,
          options: JSON.stringify([
            "When does Mei always wake up?|A. At 6:00|B. At 6:30|C. At 7:00|D. At 7:30",
            "What does Mei never skip?|A. Homework|B. Breakfast|C. CCA activities|D. Bus rides",
            "Where is Jun Wei always at in the morning?|A. At the library|B. At the basketball court|C. At the canteen|D. At home",
            "When does Mei sometimes play basketball?|A. After school|B. During recess|C. Before 7:30|D. At lunch",
            "What does Mei usually do after school?|A. Play basketball|B. Go home|C. Talk with Priya|D. Go to the library",
          ]),
          correctAnswer: "B,B,C,B,D",
          points: 5,
        },
        {
          type: "grammar",
          order: 2,
          content: `Read the text below and choose the correct word for each gap.

A Normal School Day
by Priya, Primary 5

My school day is very busy! I (1) ____ to school because I live nearby. My brother takes the bus, but I (2) ____ because walking is good exercise.

My favourite teacher is Ms Tan. She (3) ____ to class early. She is very kind and (4) ____ angry. During lessons, she (5) ____ helps us when we have questions.

After school, I (6) ____ tired because we have so many activities. But I love my school and my friends!`,
          options: JSON.stringify([
            "(1)|A. always walk|B. walk always|C. am always walk|D. always am walk",
            "(2)|A. never take the bus|B. take never the bus|C. am never take the bus|D. never am take the bus",
            "(3)|A. always come|B. always comes|C. come always|D. comes always",
            "(4)|A. never is|B. is never|C. not never is|D. never be",
            "(5)|A. often|B. often is|C. is often|D. often does",
            "(6)|A. sometimes|B. sometimes am|C. am sometimes|D. am sometimes be",
          ]),
          correctAnswer: "A,A,B,B,A,C",
          points: 6,
        },
        {
          type: "writing",
          order: 3,
          content: `You receive this email from your English friend, Alex:

From: Alex
To: You
Subject: Your school day

Hi!

I'm curious about your daily routine at school! What time do you usually wake up? What do you always do in the morning? Do you often play sports after school? Tell me about the things you do every day!

Write back soon!
Alex

Write your email to Alex (40-60 words). Tell Alex about your school day routine.

You MUST use at least two different frequency adverbs (always/usually/often/sometimes/never) in the correct position.

成功标准 / Success Criteria:
✓ 讲你的日常作息 (Tell about your daily routine)
✓ 用至少 2 个不同的频率副词，位置正确 (Use at least 2 different frequency adverbs in correct position)
✓ 频率副词在实义动词前：I always walk / She usually eats (Adverb before main verb)
✓ 频率副词在 be 后：I am never late / He is always tired (Adverb after be)
✓ 主语动词一致 (Subject-verb agreement: I always wake / She always wakes)
✓ 邮件格式 (Email format: Hi Alex, ... / Best, [your name])
✓ 40-60词 (40-60 words)`,
          points: 10,
        },
      ],
    },
    {
      level: "A2",
      weekNumber: 11,
      title: "Week 11: Where Things Are",
      description: "Talking about place with in, on and at",
      isSample: false,
      dueDate: new Date("2026-10-29"),
      errorFocus: "prepositions-place-in-on-at",
      parentBrief: "本周纠错焦点：地点介词 in / on / at。中文「在」一个字，孩子会说 in the bus / on the classroom / at the table (for in) / in the wall。规则：in 用在封闭空间（in the classroom, in the library）；on 用在表面（on the desk, on the wall）；at 把地点看作一个点（at the bus stop, at the door, at school）。本周还练 under / next to / between / behind / in front of 这些方位词。本周不教时间介词 at 7 o'clock / on Monday / in the morning（第 6 周已教）。Cambridge A2 Key for Schools (Handbook 2020) Language Specifications 包含地点介词 in, on, at, under, next to, between, behind, in front of。",
      videoUrl: null,
      kaizenFocus: "Use in/on/at (and under/next to/between) for place, not time",
      officialClipId: null,
      questions: [
        {
          type: "reading",
          order: 1,
          content: `Read the notice from Ms Tan:

From: Ms Tan
To: All Primary 5A students
Subject: Lost and Found + Sports Day meeting

Dear students,

I found several items in the classroom yesterday after school. There is a water bottle on my desk with a Merlion sticker. There is a blue pencil case under the chair next to the whiteboard. Someone left a library book on the windowsill next to the plant.

Also, this Friday is Sports Day! We will meet at the school gate at 7:30 a.m. Please bring your water bottle and wear your PE uniform. Mei's group will sit in the shelter next to the track. Jun Wei's group will wait at the canteen until your race time.

During the races, all bags must stay in the classroom. Do not leave anything on the field. Put your water bottle on the bench between the two trees behind the shelter.

See you on Friday!

Ms Tan`,
          options: JSON.stringify([
            "Where is the water bottle with the Merlion sticker?|A. Under the chair|B. On Ms Tan's desk|C. On the windowsill|D. At the school gate",
            "Where is the blue pencil case?|A. On the desk|B. On the windowsill|C. Under the chair next to the whiteboard|D. Next to the plant",
            "Where will students meet on Friday morning?|A. In the classroom|B. At the canteen|C. On the field|D. At the school gate",
            "Where will Mei's group sit?|A. At the canteen|B. On the field|C. In the shelter next to the track|D. Behind the shelter",
            "Where should students put their water bottles?|A. In the classroom|B. On the bench between the two trees|C. At the school gate|D. Under the chair",
          ]),
          correctAnswer: "B,C,D,C,B",
          points: 5,
        },
        {
          type: "grammar",
          order: 2,
          content: `Read the text below and choose the correct word for each gap.

In the Classroom
by Priya

Our classroom is (1) ____ the second floor. When you walk in the door, you can see Ms Tan's desk (2) ____ the front. The whiteboard is (3) ____ the wall behind her desk.

My table is (4) ____ Mei and Jun Wei. I sit between them every day. We put our bags (5) ____ our chairs, and we put our books (6) ____ the desk. Ms Tan always tells us to keep the classroom tidy!`,
          options: JSON.stringify([
            "(1)|A. in|B. on|C. at|D. under",
            "(2)|A. in|B. on|C. at|D. between",
            "(3)|A. in|B. on|C. at|D. under",
            "(4)|A. in|B. on|C. at|D. between",
            "(5)|A. in|B. at|C. between|D. under",
            "(6)|A. in|B. on|C. at|D. under",
          ]),
          correctAnswer: "B,C,B,D,D,B",
          points: 6,
        },
        {
          type: "writing",
          order: 3,
          content: `You receive this email from your English friend, Alex:

From: Alex
To: You
Subject: Meeting at school

Hi!

I'm visiting your school next week! Where should we meet? Can you tell me where your classroom is? And where do you usually sit in class?

Write back soon!
Alex

Write your email to Alex (40-60 words). Answer ALL the questions.

You MUST use in, on, and at for place at least once each (不是时间介词).

成功标准 / Success Criteria:
✓ 回答所有3个问题 (Answer all 3 questions: where to meet, where classroom is, where you sit)
✓ 用 in 表示封闭空间 (Use in for enclosed spaces: in the classroom, in the library, in Building A)
✓ 用 on 表示表面或楼层 (Use on for surfaces or floors: on the desk, on the second floor, on the wall)
✓ 用 at 表示地点作为一个点 (Use at for places as points: at the school gate, at the door, at the canteen)
✓ 至少用 in / on / at 各一次 (Use in, on, and at at least once each for PLACE)
✓ 邮件格式 (Email format: Hi Alex, ... / Best, [your name])
✓ 40-60词 (40-60 words)`,
          points: 10,
        },
      ],
    },
    // SEC WEEKS (AEIS-Secondary English)
    {
      level: "SEC",
      weekNumber: 0,
      title: "试学周 / Sample Week",
      description: "AEIS-Secondary English (Sec 1 paper shape): writing + comprehension / language use sample",
      isSample: true,
      errorFocus: "although-but / past tense in narrative",
      parentBrief: "本周是中学 AEIS 英语试学周，对应官方 SEAB Sec 1 卷型样本（https://www.seab.gov.sg/aeis/test-details/ 2026年7月1日更新）。Part 1 Writing：Sec 1 提供 2 个作文题目，选写 1 篇，200–300 词。Part 2 Comprehension & Language Use：50 道 MCQ（理解 + 完形 + 词汇 + 语法）。本周作业是样本，不是完整 50 题，不是 2 小时 10 分钟正式试卷。AEIS-Secondary 官方 preceding-level 规则：申请 Sec 1 入学者需熟悉 Sec 1 前一级（即 P6 后/Sec 1 前）的英语与数学内容。本周纠错化石：although...but...（中文虽然…但是…迁移）和叙事体过去时态掉落（中文靠时间词yesterday表示过去，动词不变形）。",
      videoUrl: null,
      kaizenFocus: "Classroom English a Sec 1 listener needs: teacher instructions, classmate questions, timetable announcements",
      questions: [
        {
          type: "reading",
          order: 1,
          content: `Read this passage about Wei's first week in secondary school:

First Week at Riverside Secondary

Wei had always been nervous about starting secondary school. Although he passed his PSLE with good grades, he worried about making new friends and keeping up with harder subjects.

On Monday morning, his form teacher Mr Lim welcomed the class. "Good morning, everyone. I'm Mr Lim, your Form 1A form teacher. This week we'll focus on settling in. Your timetable is in your handbook—flip to page 3. We start each day with morning assembly at 7:30 a.m. If you're late three times, you'll need to see me after school."

Wei's new classmate, Aisha, sat next to him. During recess, she asked, "Do you know where the canteen is? I'm completely lost!" Wei showed her the way. They joined the queue at Stall 4, which sold chicken rice and noodles.

In English class, Ms Raj handed out a comprehension passage. "Read this carefully," she said. "Underline key words and check if your answers make sense. You have 20 minutes." Wei found the passage challenging, but he remembered his Primary 6 teacher's advice: read the questions first, then scan the text.

By Friday afternoon, Wei felt more confident. Although the lessons were harder than primary school, his teachers were helpful. He'd made three friends—Aisha, Ravi, and Ming Hui—and they'd formed a study group. When his mother picked him up, she asked how his week went. Wei smiled and said, "It was tough, but I'm ready for next week."`,
          options: JSON.stringify([
            "Why was Wei nervous?|A. He failed his PSLE|B. He worried about making friends and keeping up with harder subjects|C. His form teacher was strict|D. He didn't know where the canteen was",
            "What will happen if a student is late three times?|A. They will fail the term|B. Their parents will be called|C. They need to see Mr Lim after school|D. They will be sent home",
            "Who asked Wei where the canteen was?|A. Mr Lim|B. Ms Raj|C. Aisha|D. Ravi",
            "What advice did Wei remember during English class?|A. Always underline everything|B. Read the questions first, then scan the text|C. Spend 10 minutes on each question|D. Ask the teacher for help",
            "How many friends had Wei made by Friday?|A. One|B. Two|C. Three|D. Four",
          ]),
          correctAnswer: "B,C,C,B,C",
          points: 10,
        },
        {
          type: "grammar",
          order: 2,
          content: "Choose the correct word to complete each sentence:",
          options: JSON.stringify([
            "Although Wei ____ nervous, he was ready to try his best.|A. is|B. was|C. has been|D. will be",
            "The lessons are harder ____ primary school.|A. than|B. then|C. from|D. as",
            "Mr Lim ____ the class every morning.|A. teach|B. teaching|C. teaches|D. taught",
            "Wei ____ his Primary 6 teacher's advice during the test.|A. remember|B. remembers|C. remembering|D. remembered",
            "Although the week was tough, ____ Wei felt confident by Friday.|A. but|B. and|C. Ø (no word needed)|D. so",
            "Aisha asked Wei ____ the canteen was.|A. where|B. what|C. which|D. who",
            "If you ____ late three times, you must see the form teacher.|A. is|B. are|C. was|D. been",
            "Wei and his friends ____ a study group last Friday.|A. form|B. forms|C. formed|D. forming",
          ]),
          correctAnswer: "B,A,C,D,C,A,B,C",
          points: 16,
        },
        {
          type: "writing",
          order: 3,
          content: `Part 1: Writing (Sec 1 format)

Choose ONE topic and write 200–300 words.

Topic 1: First Day at Secondary School
Describe your first day at secondary school (or imagine it if you haven't started yet). Write about:
• How you felt that morning
• What happened when you arrived
• One person you met or one thing you learned
• How you felt at the end of the day

Topic 2: A Classmate Who Helped Me
Write about a time when a classmate helped you with something at school. Describe:
• The situation (what problem did you have?)
• What your classmate did to help
• How you felt
• What you learned from this experience

写作提示 / Writing Tips:
✓ 写出提纲（3-4 个要点）再写正文 (Plan first: 3-4 bullet points, then write)
✓ 叙事用过去时态 (Narrative → past tense: I felt nervous. She showed me the way.)
✓ 不要写 Although...but... (Don't write: Although I was nervous, but I tried. ✗  →  Write: Although I was nervous, I tried. ✓)
✓ 分段：开头 + 2-3 段正文 + 结尾 (Paragraphs: intro + 2-3 body + conclusion)
✓ 字数 200–300 词 (Word count: 200–300 words)

注：这是 Sec 1 写作样本，不是 Sec 2（4 题 250–350 词）或 Sec 3（4 题 300–400 词）格式。
Note: This is a Sec 1 writing sample (2 topics, 200–300 words), not Sec 2 or Sec 3 format.`,
          points: 20,
        },
      ],
    },
    // SEC WEEK 1
    {
      level: "SEC",
      weekNumber: 1,
      title: "英语 第 1 周 / English Week 1",
      description: "AEIS-Secondary English (Sec 1 paper shape): CCA / classroom English sample",
      isSample: false,
      errorFocus: "subject-verb agreement (everyone / the team of…)",
      parentBrief: "中学 AEIS 英语第 1 周。对应官方 SEAB Sec 1 卷型（https://www.seab.gov.sg/aeis/test-details/ 2026年7月1日更新）：Part 1 Writing 提供 2 个作文题目，选写 1 篇，200–300 词；Part 2 Comprehension & Language Use 共 50 道 MCQ（理解 15 + 完形 15 + 词汇 10 + 语法 10）。本周作业是样本，不是完整 50 题，不是 2 小时 10 分钟正式试卷。AEIS-Secondary 官方 preceding-level 规则：申请者需熟悉所申请级别前一级（preceding level）的内容。官方举例：apply Sec 3 → 熟悉 Sec 2。本周针对 Sec 1 申请者，对应 Sec 1 前一级内容水平。本周纠错化石：主谓一致（everyone is / the team of teachers helps，中文主语后动词不变形，英语要根据主语单复数变形）。情境：Wei 在 Riverside Secondary 听 CCA briefing、form teacher instruction。",
      videoUrl: null,
      kaizenFocus: "classroom English a Sec 1 listener needs (CCA briefing, form teacher instruction)",
      questions: [
        {
          type: "reading",
          order: 1,
          content: `Read this passage about Wei's CCA briefing:

CCA Briefing at Riverside Secondary

On Monday afternoon, Mr Lim gathered the class in the school hall. "Good afternoon, Form 1A. Today we'll talk about Co-Curricular Activities, or CCAs. Everyone in secondary school must join one CCA. It's not optional—you have to choose."

He pointed at the screen. "We offer four categories: Sports and Games, Uniformed Groups, Performing Arts, and Clubs and Societies. The sports team meets twice a week, usually on Tuesdays and Thursdays after school. The basketball team of Form 1 students trains from 3 p.m. to 5 p.m. If the weather is bad, we'll use the indoor sports hall."

Aisha raised her hand. "Sir, what if I want to join two CCAs?" Mr Lim smiled. "You can only join one main CCA. However, you may attend CCA open houses next week—they're on different days, so you can visit all of them."

Wei was interested in the debate club. Mr Lim explained, "The debate team of senior students helps train the juniors. Everyone gets a chance to speak. We meet every Friday from 3 p.m. to 4:30 p.m. in the library meeting room."

"Remember," Mr Lim added, "attendance is important. If you miss three sessions without a valid reason, you'll need to explain to your CCA teacher-in-charge. CCA points count towards your overall school record."

Wei decided to visit the debate club open house on Wednesday. He felt excited—this was a chance to improve his English and make more friends.`,
          options: JSON.stringify([
            "Is joining a CCA optional for secondary school students?|A. Yes, it is optional|B. No, every student must join one CCA|C. Only for Form 1 students|D. The passage does not say",
            "When does the basketball team for Form 1 students train?|A. Monday and Wednesday|B. Tuesday and Thursday|C. Every Friday|D. Different days each week",
            "Where does the debate team meet?|A. In the school hall|B. In the indoor sports hall|C. In the library meeting room|D. In the classroom",
            "How many CCAs can a student join as their main CCA?|A. None|B. One|C. Two|D. As many as they like",
            "What happens if a student misses three CCA sessions without a valid reason?|A. They fail the term|B. Their parents are called|C. They must explain to their CCA teacher-in-charge|D. They are removed from the CCA",
          ]),
          correctAnswer: "B,B,C,B,C",
          points: 10,
        },
        {
          type: "grammar",
          order: 2,
          content: "Choose the correct word to complete each sentence:",
          options: JSON.stringify([
            "Everyone in secondary school ____ join one CCA.|A. have to|B. has to|C. having to|D. had to",
            "The team of teachers ____ the students every week.|A. help|B. helps|C. helping|D. to help",
            "CCA points ____ towards your overall school record.|A. count|B. counts|C. counting|D. counted",
            "The debate team of senior students ____ train the juniors.|A. help|B. helps|C. helping|D. to help",
            "Wei ____ excited about joining the debate club last Monday.|A. feel|B. feels|C. felt|D. feeling",
            "Everyone ____ a chance to speak in the debate club.|A. get|B. gets|C. getting|D. got",
            "The basketball team ____ from 3 p.m. to 5 p.m. on Tuesdays.|A. train|B. trains|C. training|D. trained",
            "If the weather ____ bad, we'll use the indoor sports hall.|A. is|B. are|C. was|D. were",
          ]),
          correctAnswer: "B,B,A,B,C,B,B,A",
          points: 16,
        },
        {
          type: "writing",
          order: 3,
          content: `Part 1: Writing (Sec 1 format)

Choose ONE topic and write 200–300 words.

Topic 1: My First CCA Session
Describe your first CCA session at secondary school (or imagine it if you haven't started yet). Write about:
• Which CCA you chose and why
• What happened during your first session
• One person you met or one skill you learned
• How you felt at the end of the session

Topic 2: A Teacher's Instruction I Followed
Write about a time when you followed a teacher's instruction at school and what happened. Describe:
• What instruction did the teacher give?
• Why was it important to follow it?
• What did you do?
• What did you learn from this experience?

写作提示 / Writing Tips:
✓ 写出提纲（3-4 个要点）再写正文 (Plan first: 3-4 bullet points, then write)
✓ 叙事用过去时态 (Narrative → past tense: I chose the debate club. The teacher explained the rules.)
✓ 注意主谓一致 (Subject-verb agreement: Everyone has / The team helps, not Everyone have / The team help)
✓ 分段：开头 + 2-3 段正文 + 结尾 (Paragraphs: intro + 2-3 body + conclusion)
✓ 字数 200–300 词 (Word count: 200–300 words)

注：这是 Sec 1 写作样本，不是 Sec 2（4 题 250–350 词）或 Sec 3（4 题 300–400 词）格式。
Note: This is a Sec 1 writing sample (2 topics, 200–300 words), not Sec 2 or Sec 3 format.`,
          points: 20,
        },
      ],
    },
    {
      level: "SEC",
      weekNumber: 2,
      title: "英语 第 2 周 / English Week 2",
      description: "AEIS-Secondary English (Sec 1 paper shape): morning assembly sample",
      isSample: false,
      errorFocus: "prepositions of time (at / on / in)",
      parentBrief: "中学 AEIS 英语第 2 周。对应官方 SEAB Sec 1 卷型（https://www.seab.gov.sg/aeis/test-details/ 2026年7月1日更新）：Part 1 Writing 提供 2 个作文题目，选写 1 篇，200–300 词；Part 2 Comprehension & Language Use 共 50 道 MCQ（理解 15 + 完形 15 + 词汇 10 + 语法 10）。本周作业是样本，不是完整 50 题，不是 2 小时 10 分钟正式试卷。AEIS-Secondary 官方 preceding-level 规则：申请者需熟悉所申请级别前一级（preceding level）的内容。官方举例：apply Sec 3 → 熟悉 Sec 2。本周针对 Sec 1 申请者，对应 Sec 1 前一级内容水平。本周纠错化石：时间介词（at 7:30 / on Monday / in the morning）。中文用一个「在」表达时间（在星期一早上 7:30），英语要区分 at（具体时刻）、on（星期/日期）、in（时段）。情境：Wei 在 Riverside Secondary 听 morning assembly 的 Mr Lim 指令、flag-raising、form-class line-up。本周不是 CEQ。",
      videoUrl: null,
      kaizenFocus: "classroom English a listener needs at morning assembly (time, place, instruction)",
      questions: [
        {
          type: "reading",
          order: 1,
          content: `Read this passage about Wei's morning at Riverside Secondary:

Morning Assembly at Riverside Secondary

Wei arrived at school on Monday at 7:30 in the morning. The school gate opened at 7:15, and students had to be in their classrooms by 7:45 for morning assembly. The flag-raising ceremony would start at 7:50 sharp.

Mr Lim, the form teacher, stood at the front of the classroom. "Good morning, everyone. Please line up quietly at the corridor. We'll go down to the hall in five minutes. Remember—during assembly, you must stand straight, face the flag, and sing the national anthem clearly."

Wei and his classmates lined up. Aisha stood behind him. "I was almost late this morning," she whispered. "My bus arrived at the interchange at 7:20, and I had to run from the MRT station."

At 7:50, the principal's voice came through the speakers. "Good morning, students. Today is Monday, 12 August. The flag-raising will begin now. Students, please stand at attention."

After the anthem, Mr Lim gave instructions. "Form 1A, your English remedial class is on Wednesday afternoon at 3:00 p.m. in Room 2-14. Don't forget—you must bring your textbook and a notebook. The class will end at 4:30."

Wei wrote down the details. He wanted to make sure he wouldn't forget. Morning assembly was over by 8:10, and the first lesson would start at 8:20.`,
          options: JSON.stringify([
            "What time did Wei arrive at school?|A. 7:15|B. 7:20|C. 7:30|D. 7:45",
            "On which day does this passage take place?|A. Wednesday|B. Thursday|C. Friday|D. Monday",
            "When does the flag-raising ceremony start?|A. 7:30|B. 7:45|C. 7:50|D. 8:10",
            "Where will the English remedial class be held?|A. In the hall|B. In the corridor|C. In Room 2-14|D. At the MRT station",
            "What time does the English remedial class end?|A. 3:00 p.m.|B. 4:00 p.m.|C. 4:30 p.m.|D. 8:20",
          ]),
          correctAnswer: "C,D,C,C,C",
          points: 10,
        },
        {
          type: "grammar",
          order: 2,
          content: "Choose the correct word to complete each sentence:",
          options: JSON.stringify([
            "Wei arrived at school ____ 7:30.|A. at|B. on|C. in|D. by",
            "The assembly is ____ Monday.|A. at|B. on|C. in|D. by",
            "Students must be in their classrooms ____ the morning.|A. at|B. on|C. in|D. by",
            "The flag-raising starts ____ 7:50 sharp.|A. at|B. on|C. in|D. by",
            "The remedial class is ____ Wednesday afternoon.|A. at|B. on|C. in|D. by",
            "Aisha's bus arrived ____ 7:20.|A. at|B. on|C. in|D. by",
            "Today is Monday, ____ 12 August.|A. at|B. on|C. in|D. by",
            "The first lesson starts ____ 8:20.|A. at|B. on|C. in|D. by",
          ]),
          correctAnswer: "A,B,C,A,B,A,B,A",
          points: 16,
        },
        {
          type: "writing",
          order: 3,
          content: `Part 1: Writing (Sec 1 format)

Choose ONE topic and write 200–300 words.

Topic 1: A Morning at School
Describe a morning at your school (or imagine it if you haven't started secondary school yet). Write about:
• What time you arrived and how you got there
• What happened during morning assembly
• One instruction a teacher gave
• How you felt about the morning routine

Topic 2: An Instruction I Heard at Assembly
Write about a time when you heard an important instruction during a school assembly or morning briefing. Describe:
• Where and when did this happen? (Use at / on / in for time correctly)
• What instruction did the teacher or principal give?
• Why was it important to listen carefully?
• What did you do after hearing the instruction?

写作提示 / Writing Tips:
✓ 写出提纲（3-4 个要点）再写正文 (Plan first: 3-4 bullet points, then write)
✓ 叙事用过去时态 (Narrative → past tense: I arrived at 7:30. The teacher explained the schedule.)
✓ 注意时间介词 (Prepositions of time: at 7:30 / on Monday / in the morning)
✓ 分段：开头 + 2-3 段正文 + 结尾 (Paragraphs: intro + 2-3 body + conclusion)
✓ 字数 200–300 词 (Word count: 200–300 words)

注：这是 Sec 1 写作样本，不是 Sec 2（4 题 250–350 词）或 Sec 3（4 题 300–400 词）格式。这是本周题目，不是官方题目。
Note: This is a Sec 1 writing sample (2 topics, 200–300 words), not Sec 2 or Sec 3 format. These are this week's topics, not official examination topics.`,
          points: 20,
        },
      ],
    },
    {
      level: "SEC",
      weekNumber: 3,
      title: "英语 第 3 周 / English Week 3",
      description: "AEIS-Secondary English (Sec 1 paper shape): school library sample",
      isSample: false,
      errorFocus: "homework is uncountable (not a homework)",
      parentBrief: "中学 AEIS 英语第 3 周。对应官方 SEAB Sec 1 卷型（https://www.seab.gov.sg/aeis/test-details/ 2026年7月1日更新）：Part 1 Writing 提供 2 个作文题目，选写 1 篇，200–300 词；Part 2 Comprehension & Language Use 共 50 道 MCQ（理解 15 + 完形 15 + 词汇 10 + 语法 10）。本周作业是样本，不是完整 50 题，不是 2 小时 10 分钟正式试卷。AEIS-Secondary 官方 preceding-level 规则：申请者需熟悉所申请级别前一级（preceding level）的内容。官方举例：apply Sec 3 → 熟悉 Sec 2。本周针对 Sec 1 申请者，对应 Sec 1 前一级内容水平。本周纠错化石：homework / advice / information 是不可数名词（uncountable），不能说 a homework（中文「一份作业」迁移）。正确说法是 homework / some homework / a piece of homework。情境：Wei 在 Riverside Secondary 图书馆第一次借书，用于英语作业。本周不是 CEQ。",
      videoUrl: null,
      kaizenFocus: "classroom English a listener needs in the library (borrow, due date, assignment)",
      questions: [
        {
          type: "reading",
          order: 1,
          content: `Read this passage about Wei's visit to the school library:

Visit to the School Library

On Thursday afternoon, Wei had his first free period at Riverside Secondary. Mr Lim had given the class homework for English—they had to write a book report by next Monday. Wei decided to visit the school library to find a suitable book.

The library was on the third floor of Block B. When Wei arrived at 2:30, Ms Ong, the librarian, was at the front desk helping another student. Wei waited quietly, looking at the shelves. The fiction section had many interesting books—adventure stories, mystery novels, and science fiction.

After a few minutes, Ms Ong called Wei over. "Good afternoon. How can I help you?"

"Good afternoon, Ms Ong. I need to borrow a book for my English assignment. Mr Lim asked us to read a fiction book and write a report. Can you recommend something?"

Ms Ong smiled. "For a book report, I suggest starting with something not too long. How about this one?" She handed him a novel called *The Mystery at East Coast Park*. "It's 180 pages, and many students enjoy it. You can borrow it for two weeks—the due date will be 26 September. If you need more time, you can renew it online or come back here."

Wei thanked her and borrowed the book. He also asked, "Can I do my homework here in the library?"

"Of course," Ms Ong replied. "The reading area is over there by the windows. It's quiet, and there's good light. Just remember—no food or drinks, and keep your phones on silent mode."

Wei found a seat and started reading the first chapter. By 3:30, he had read 20 pages and made some notes. He felt ready to start his assignment over the weekend.`,
          options: JSON.stringify([
            "Why did Wei visit the library?|A. To meet Ms Ong|B. To do homework for Maths|C. To borrow a book for an English assignment|D. To return a book",
            "When is the due date for the book Wei borrowed?|A. Next Monday|B. 20 September|C. 26 September|D. Two days later",
            "Where is the reading area in the library?|A. At the front desk|B. On the second floor|C. In the fiction section|D. By the windows",
            "What did Ms Ong tell Wei about using the library reading area?|A. He must book it in advance|B. No food or drinks, and keep phones on silent|C. He can only stay for 30 minutes|D. He needs a library card first",
            "How many pages had Wei read by 3:30?|A. 10 pages|B. 20 pages|C. 30 pages|D. 180 pages",
          ]),
          correctAnswer: "C,C,D,B,B",
          points: 10,
        },
        {
          type: "grammar",
          order: 2,
          content: "Choose the correct word to complete each sentence:",
          options: JSON.stringify([
            "Mr Lim gave us ____ for English class.|A. a homework|B. homework|C. homeworks|D. some homeworks",
            "Ms Ong gave Wei ____ about choosing a book.|A. an advice|B. some advice|C. some advices|D. advices",
            "There is ____ in the library notice about borrowing rules.|A. an information|B. some information|C. informations|D. some informations",
            "Wei needs to write ____ for his English assignment.|A. a report|B. report|C. some report|D. reports",
            "The library has ____ on many topics.|A. book|B. a books|C. books|D. some book",
            "Ms Ong is very helpful—she always gives students good ____.|A. advice|B. advices|C. an advice|D. some advices",
            "Wei did his ____ in the reading area.|A. homeworks|B. homework|C. a homework|D. some homeworks",
            "The librarian provided ____ about the due date.|A. information|B. an information|C. informations|D. some informations",
          ]),
          correctAnswer: "B,B,B,A,C,A,B,A",
          points: 16,
        },
        {
          type: "writing",
          order: 3,
          content: `Part 1: Writing (Sec 1 format)

Choose ONE topic and write 200–300 words.

Topic 1: A Visit to the School Library
Write about a time when you visited your school library (or imagine it if you haven't been to a secondary school library yet). Describe:
• Why did you go to the library?
• What did you do there? (borrow books, do homework, etc.)
• Who helped you, and what did they say?
• How did you feel about the visit?

Topic 2: An Assignment I Had to Finish
Write about a time when you had to complete an assignment or homework. Describe:
• What assignment did your teacher give you?
• Where did you do the work? (at home, in the library, etc.)
• What steps did you take to complete it?
• Did you finish on time, and how did you feel?

写作提示 / Writing Tips:
✓ 写出提纲（3-4 个要点）再写正文 (Plan first: 3-4 bullet points, then write)
✓ 叙事用过去时态 (Narrative → past tense: I visited the library. The librarian helped me.)
✓ 注意不可数名词 (Uncountable nouns: homework, advice, information—NO 'a homework')
✓ 分段：开头 + 2-3 段正文 + 结尾 (Paragraphs: intro + 2-3 body + conclusion)
✓ 字数 200–300 词 (Word count: 200–300 words)

注：这是 Sec 1 写作样本，不是 Sec 2（4 题 250–350 词）或 Sec 3（4 题 300–400 词）格式。这是本周题目，不是官方题目。
Note: This is a Sec 1 writing sample (2 topics, 200–300 words), not Sec 2 or Sec 3 format. These are this week's topics, not official examination topics.`,
          points: 20,
        },
      ],
    },
    {
      level: "SEC",
      weekNumber: 4,
      title: "英语 第 4 周 / English Week 4",
      description: "AEIS-Secondary English (Sec 1 paper shape): canteen rules sample",
      isSample: false,
      errorFocus: "must / have to for school rules (not must to)",
      parentBrief: "中学 AEIS 英语第 4 周。对应官方 SEAB Sec 1 卷型（https://www.seab.gov.sg/aeis/test-details/ 2026年7月1日更新）：Part 1 Writing 提供 2 个作文题目，选写 1 篇，200–300 词；Part 2 Comprehension & Language Use 共 50 道 MCQ（理解 15 + 完形 15 + 词汇 10 + 语法 10）。本周作业是样本，不是完整 50 题，不是 2 小时 10 分钟正式试卷。AEIS-Secondary 官方 preceding-level 规则：申请者需熟悉所申请级别前一级（preceding level）的内容。官方举例：apply Sec 3 → 熟悉 Sec 2。本周针对 Sec 1 申请者，对应 Sec 1 前一级内容水平。本周纠错化石：must / have to 表示学校规则，后面直接加动词原形，不能加 to。中文说「必须要排队」，但英语是 You must queue，不是 You must to queue（中文「必须要」迁移）。must not 表示禁止。情境：Wei、Aisha、Mr Lim 在 Riverside Secondary 食堂第一次午休（queue / tray / no cutting）。本周不是 CEQ。",
      videoUrl: null,
      kaizenFocus: "classroom English a listener needs in the canteen (queue, tray, instruction)",
      questions: [
        {
          type: "reading",
          order: 1,
          content: `Read this passage about Wei's first recess at the school canteen:

First Recess at the Canteen

On Friday at 10:00 a.m., Wei had his first recess at Riverside Secondary. The bell rang, and students from all classes rushed to the canteen on the ground floor. Wei followed his classmate Aisha, who had been at the school since Sec 1 last year.

"Come on, Wei! If we don't queue early, we'll have to wait a long time," Aisha said.

The canteen was crowded. There were four food stalls—Western food, Chinese food, drinks, and snacks. Wei wanted to buy chicken rice from the Chinese stall. Aisha pointed to a long line of students. "You must queue at the back. Don't cut the queue—if a prefect sees you, you'll get a warning."

Wei joined the queue. After five minutes, it was his turn. He ordered chicken rice for S$3.50 and paid the uncle at the stall. The uncle handed him a plate and said, "Remember—you have to return your tray and plate to the tray-return station after eating. It's next to the drinks stall."

Wei and Aisha found a table near the windows. The canteen was noisy, but Wei could hear instructions from a prefect with a red badge. "Students, please keep your voices down. You must not run in the canteen. If you spill your food, clean it up or tell a teacher."

By 10:25, Wei had finished his meal. He carried his tray to the tray-return station and placed it on the rack. Aisha smiled. "Good job! Now you know the canteen rules. Next week, recess will be much easier."

Wei felt more confident. He had learned how to queue, how to order food, and how to follow the school rules. Recess was short—only 30 minutes—but it was enough time to eat and rest before the next lesson.`,
          options: JSON.stringify([
            "What time did the recess bell ring?|A. 9:30 a.m.|B. 10:00 a.m.|C. 10:25 a.m.|D. 10:30 a.m.",
            "What did Aisha tell Wei about queuing?|A. He can cut the queue if he's late|B. He must queue at the back|C. He doesn't need to queue|D. He should ask a prefect first",
            "How much did Wei pay for his chicken rice?|A. S$2.50|B. S$3.00|C. S$3.50|D. S$4.00",
            "Where is the tray-return station?|A. At the back of the canteen|B. Next to the drinks stall|C. Near the windows|D. At the Chinese food stall",
            "What rule did the prefect tell students about the canteen?|A. Students must finish eating in 10 minutes|B. Students must not run in the canteen|C. Students must bring their own trays|D. Students must sit near the windows",
          ]),
          correctAnswer: "B,B,C,B,B",
          points: 10,
        },
        {
          type: "grammar",
          order: 2,
          content: "Choose the correct word to complete each sentence:",
          options: JSON.stringify([
            "Students ____ queue at the canteen.|A. must|B. must to|C. have|D. must be",
            "You ____ return your tray after eating.|A. must to|B. have|C. have to|D. must not to",
            "We ____ cut the queue—it's against the rules.|A. must|B. have|C. have to|D. must not",
            "The prefect said we ____ run in the canteen.|A. must not|B. must not to|C. have not|D. don't must",
            "Students ____ wear their nametags to school.|A. must to|B. have to|C. must not|D. have not",
            "You ____ be late for class after recess.|A. have to|B. must to|C. must not|D. have not to",
            "Wei ____ follow the school rules.|A. have to|B. must to|C. must|D. have not",
            "The uncle told Wei he ____ return the tray.|A. must to|B. have to|C. has to|D. must not to",
          ]),
          correctAnswer: "A,C,D,A,B,C,C,C",
          points: 16,
        },
        {
          type: "writing",
          order: 3,
          content: `Part 1: Writing (Sec 1 format)

Choose ONE topic and write 200–300 words.

Topic 1: Recess in the Canteen
Write about a time when you had recess at school (or imagine it if you haven't been to a secondary school canteen yet). Describe:
• Where is the canteen, and what time was recess?
• What food did you buy, and how much did it cost?
• What rules do you have to follow at the canteen?
• How did you feel about your first recess?

Topic 2: A School Rule I Followed
Write about a time when you followed an important school rule. Describe:
• What was the rule? (queue, wear uniform, return trays, etc.)
• Why is this rule important?
• How did you follow the rule?
• What happened, and how did you feel?

写作提示 / Writing Tips:
✓ 写出提纲（3-4 个要点）再写正文 (Plan first: 3-4 bullet points, then write)
✓ 叙事用过去时态 (Narrative → past tense: I went to the canteen. I had to queue.)
✓ 注意 must / have to 用法 (must / have to + verb, NOT must to / have to to)
✓ 分段：开头 + 2-3 段正文 + 结尾 (Paragraphs: intro + 2-3 body + conclusion)
✓ 字数 200–300 词 (Word count: 200–300 words)

注：这是 Sec 1 写作样本，不是 Sec 2（4 题 250–350 词）或 Sec 3（4 题 300–400 词）格式。这是本周题目，不是官方题目。
Note: This is a Sec 1 writing sample (2 topics, 200–300 words), not Sec 2 or Sec 3 format. These are this week's topics, not official examination topics.`,
          points: 20,
        },
      ],
    },
    {
      level: "SEC",
      weekNumber: 5,
      title: "英语 第 5 周 / English Week 5",
      description: "AEIS-Secondary English (Sec 1 paper shape): PE lesson sample",
      isSample: false,
      errorFocus: "should (advice) vs must (school rule) — unique keys",
      parentBrief: "中学 AEIS 英语第 5 周。对应官方 SEAB Sec 1 卷型（https://www.seab.gov.sg/aeis/test-details/ 2026年7月1日更新）：Part 1 Writing 提供 2 个作文题目，选写 1 篇，200–300 词；Part 2 Comprehension & Language Use 共 50 道 MCQ（理解 15 + 完形 15 + 词汇 10 + 语法 10）。本周作业是样本，不是完整 50 题，不是 2 小时 10 分钟正式试卷。AEIS-Secondary 官方 preceding-level 规则：申请者需熟悉所申请级别前一级（preceding level）的内容。官方举例：apply Sec 3 → 熟悉 Sec 2。本周针对 Sec 1 申请者，对应 Sec 1 前一级内容水平。本周纠错化石：should（建议/advice）vs must（学校规则/school rule）。如果句子是规则（rule），正确答案是 must，should 不出现或明显错误。如果句子是建议（advice），正确答案是 should，must 不出现或明显错误。每个空只有一个正确选项，不能两个选项都对。情境：Wei 第一次上 PE 课（更衣室 / PE 服装 / 水壶 / 热身 / 身体不适要坐旁边）。Aisha / Coach Ng（或 Mr Lim）给出听者需要的指令。本周不是 CEQ。",
      videoUrl: null,
      kaizenFocus: "classroom English a listener needs at PE lesson (changing room, PE attire, water bottle, warm-up, sit out if unwell)",
      questions: [
        {
          type: "reading",
          order: 1,
          content: `Read this passage about Wei's first PE lesson:

First PE Lesson at Riverside Secondary

On Tuesday afternoon, Wei had his first PE lesson at Riverside Secondary. The timetable showed "PE" from 2:00 p.m. to 3:00 p.m. Wei was excited but also a little nervous. He had never been to a PE lesson at a secondary school before.

Before the lesson, Mr Lim told the class, "Please go to the changing room and put on your PE attire. Boys use the changing room on the left, girls use the one on the right. You must change into your PE shirt and shorts—you cannot attend PE in your school uniform."

Wei went to the boys' changing room with his classmate Ravi. He opened his bag and took out his PE shirt and shorts. Aisha had told him earlier, "You should bring a water bottle to PE. It's hot outside, and you'll need to drink water during breaks."

At 2:10 p.m., all the students were ready. Coach Ng, the PE teacher, stood at the field. "Good afternoon, everyone. Before we start, you must do a warm-up. This is important to prevent injuries. Stretch your arms, legs, and back for five minutes."

The students followed Coach Ng's instructions. After the warm-up, Coach Ng said, "Today we're going to practice relay running. If you feel unwell or dizzy, you should sit at the side and rest. Don't push yourself too hard—your health is more important than any game."

Wei enjoyed the lesson. At the end, Coach Ng reminded them, "You must return to the changing room and change back into your school uniform before you leave. Don't forget to bring your water bottle next week. Well done, everyone!"`,
          options: JSON.stringify([
            "What time did the PE lesson start?|A. 1:00 p.m.|B. 2:00 p.m.|C. 2:10 p.m.|D. 3:00 p.m.",
            "What must students wear for PE?|A. School uniform|B. PE shirt and shorts|C. Sports shoes only|D. Any comfortable clothes",
            "Who told Wei to bring a water bottle?|A. Mr Lim|B. Coach Ng|C. Aisha|D. Ravi",
            "What must students do before starting PE?|A. Run around the field|B. Sit and rest|C. Do a warm-up|D. Drink water",
            "What should students do if they feel unwell during PE?|A. Keep running|B. Sit at the side and rest|C. Go to the canteen|D. Leave the lesson",
          ]),
          correctAnswer: "B,B,C,C,B",
          points: 10,
        },
        {
          type: "grammar",
          order: 2,
          content: "Choose the correct word to complete each sentence:",
          options: JSON.stringify([
            "You ____ change into your PE attire before the lesson. (school rule)|A. should|B. must|C. can|D. might",
            "You ____ bring a water bottle to PE—it's helpful but not required. (advice)|A. must|B. have to|C. should|D. need",
            "Students ____ do a warm-up before PE to prevent injuries. (school rule)|A. should|B. could|C. must|D. might",
            "If you feel tired during PE, you ____ take a short break. (advice)|A. must|B. have to|C. should|D. need to",
            "You ____ wear your school uniform during PE—it's not allowed. (school rule / prohibition)|A. should not|B. must not|C. could not|D. need not",
            "You ____ drink water after running—it's good for your health. (advice)|A. must|B. have to|C. should|D. need to",
            "All students ____ return to the changing room after PE. (school rule)|A. should|B. could|C. might|D. must",
            "You ____ stretch your legs before running—it helps prevent injuries. (advice)|A. must|B. have to|C. should|D. need to",
          ]),
          correctAnswer: "B,C,C,C,B,C,D,C",
          points: 16,
        },
        {
          type: "writing",
          order: 3,
          content: `Part 1: Writing (Sec 1 format)

Choose ONE topic and write 200–300 words.

Topic 1: My First PE Lesson
Write about your first PE lesson at secondary school (or imagine it if you haven't had one yet). Describe:
• What time was the PE lesson, and where did it take place?
• What did you have to change into, and where did you change?
• What activities did you do during PE?
• How did you feel about the lesson?

Topic 2: Rules and Advice at School
Write about the difference between school rules and good advice. Describe:
• One school rule you must follow (e.g., must wear PE attire, must do warm-up)
• One piece of advice that helps you at school (e.g., you should bring water, you should rest if tired)
• Why are rules and advice both important?
• How do you follow them?

写作提示 / Writing Tips:
✓ 写出提纲（3-4 个要点）再写正文 (Plan first: 3-4 bullet points, then write)
✓ 叙事用过去时态 (Narrative → past tense: I went to PE. I changed into my PE shirt.)
✓ 注意 must（规则）vs should（建议）(must = rule, should = advice)
✓ 分段：开头 + 2-3 段正文 + 结尾 (Paragraphs: intro + 2-3 body + conclusion)
✓ 字数 200–300 词 (Word count: 200–300 words)

注：这是 Sec 1 写作样本，不是 Sec 2（4 题 250–350 词）或 Sec 3（4 题 300–400 词）格式。这是本周题目，不是官方题目。
Note: This is a Sec 1 writing sample (2 topics, 200–300 words), not Sec 2 or Sec 3 format. These are this week's topics, not official examination topics.`,
          points: 20,
        },
      ],
    },
    // SMATH WEEK (AEIS-Secondary Mathematics)
    {
      level: "SMATH",
      weekNumber: 0,
      title: "试学周 / Sample Week",
      description: "AEIS-Secondary Mathematics (Sec 1 paper shape): P6 percentage sample",
      isSample: true,
      errorFocus: "part/whole mix-up / % of vs % increase",
      parentBrief: "本周是中学 AEIS 数学试学周，对应官方 SEAB Sec 1 卷型样本（https://www.seab.gov.sg/aeis/test-details/ 2026年7月1日更新）。Part 1 Multiple-choice questions：34 道 MCQ，30 分钟。Part 2 Short-answer questions (20 items) and open-ended questions (10 to 15 items)：1 小时 45 分钟。Calculators are not allowed（不允许使用计算器）。Short-answer and open-ended questions：candidates are required to show the method of solution clearly by writing working steps in the spaces provided, plus the final answer（需写出算式步骤和最终答案）。AEIS-Secondary 官方 preceding-level 规则：申请 Sec 1 入学者需熟悉 Sec 1 前一级的内容。官方举例：apply Secondary 3 → be familiar with Secondary 2. 本周试学针对 Sec 1 申请者，内容为 Sec 1 前一级（P6）的官方 2021 Primary Mathematics Syllabus - P6 Percentage 1.1 (finding the whole given a part and the percentage) and 1.2 (finding percentage increase/decrease)。本周作业是样本，不是完整 34 + 20 + 10–15 题。本周化石：part/whole 混淆（20% of S$50 ≠ 20% increase from S$50）。用新加坡元 S$，不用美元。不教：ratio, algebra, circles, volume, compound interest, profit/loss formulas beyond increase/decrease, calculators, invented cut-scores。",
      videoUrl: null,
      kaizenFocus: null,
      questions: [
        {
          type: "reading",
          order: 1,
          content: "Choose the correct answer:",
          options: JSON.stringify([
            "20% of 150 = ?|A. 20|B. 30|C. 40|D. 50",
            "15 is 25% of a number. What is the number?|A. 40|B. 50|C. 60|D. 75",
            "A bag costs S$80. After a 10% increase, what is the new price?|A. S$8|B. S$72|C. S$88|D. S$90",
            "A price falls from S$50 to S$40. What is the percentage decrease?|A. 10%|B. 20%|C. 25%|D. 40%",
            "40% of a class of 35 students are boys. How many boys are there?|A. 12|B. 14|C. 16|D. 21",
          ]),
          correctAnswer: "B,C,C,B,B",
          points: 10,
        },
        {
          type: "grammar",
          order: 2,
          content: "Choose the correct answer:",
          options: JSON.stringify([
            "12 is 20% of a number. What is the number?|A. 2.4|B. 24|C. 60|D. 240",
            "S$200 after a 15% decrease = ?|A. S$30|B. S$170|C. S$185|D. S$215",
            "The increase from 40 to 50 is a percentage increase of:|A. 10%|B. 20%|C. 25%|D. 80%",
            "5% of 80 = ?|A. 4|B. 8|C. 16|D. 40",
            "A whole is 90. What is 30% of it?|A. 3|B. 27|C. 30|D. 60",
            "Which is the percentage increase from 80 to 100?|A. 20%|B. 25%|C. 80%|D. 100%",
            "Find the whole: 18 is 15% of ?|A. 2.7|B. 12|C. 120|D. 270",
            "S$60 is 75% of the original price. What is the original price?|A. S$45|B. S$75|C. S$80|D. S$135",
          ]),
          correctAnswer: "C,B,C,A,B,B,C,C",
          points: 16,
        },
        {
          type: "writing",
          order: 3,
          content: `Part 2: Show Your Working (写出算式步骤)

Riverside Secondary School is planning a school fair. Answer the questions below. Show all your working clearly.

Question (a)
The school bought 250 books for the book sale. 20% of the books are storybooks. How many storybooks are there?

Question (b)
Last year, the school fair raised S$1,200. This year, they raised 15% more than last year. How much money did they raise this year?

Question (c)
The school canteen sold 180 sandwiches today. This is 60% of the total sandwiches they made. How many sandwiches did they make in total?

写作提示 / Tips:
✓ 每题分步骤写出算式 (Show working steps for each question)
✓ Part 2 官方要求：clearly show the method of solution by writing working steps, plus the final answer
✓ 百分数计算不用计算器 (No calculators allowed: do percentage calculations by hand)
✓ 写出百分数公式的中文或英文表述，如「20% of 250 = 250 ÷ 5 = 50」或「增加 = 原价 × 百分比」
✓ 最终答案标注单位（如 S$、books、sandwiches）

Note: This is a sample of Part 2 short-answer/open-ended questions. The official paper has 20 short-answer + 10–15 open-ended items in 1 hour 45 minutes.`,
          points: 20,
        },
      ],
    },
    {
      level: "SMATH",
      weekNumber: 1,
      title: "数学 第 1 周 / Maths Week 1",
      description: "AEIS-Secondary Mathematics: P6 ratio",
      isSample: false,
      errorFocus: "ratio not in simplest form / mixing part:part with part:whole",
      parentBrief: "本周是中学 AEIS 数学第 1 周，对应官方 SEAB Sec 1 卷型（https://www.seab.gov.sg/aeis/test-details/ 2026年7月1日更新）。Part 1 Multiple-choice questions：34 道 MCQ，30 分钟。Part 2 Short-answer questions (20 items) and open-ended questions (10 to 15 items)：1 小时 45 分钟。Calculators are not allowed（不允许使用计算器）。Short-answer and open-ended questions：candidates are required to show the method of solution clearly by writing working steps in the spaces provided, plus the final answer（需写出算式步骤和最终答案）。AEIS-Secondary 官方 preceding-level 规则：申请 Sec 1 入学者需熟悉 Sec 1 前一级的内容。官方举例：apply Secondary 3 → be familiar with Secondary 2. 本周针对 Sec 1 申请者，内容为 Sec 1 前一级（P6）的官方 2021 Primary Mathematics Syllabus - P6 Ratio 1.1 (notation, representations and interpretation of a:b and a:b:c, where a, b and c are whole numbers, excluding ratios involving fractions and decimals), 1.2 (equivalent ratios), 1.3 (dividing a quantity in a given ratio), 1.4 (expressing a ratio in its simplest form), 1.5 (finding the ratio of two or three given quantities), 1.6 (finding the missing term in a pair of equivalent ratios), 1.7 (relationship between fraction and ratio)。本周作业是样本，不是完整 34 + 20 + 10–15 题。本周化石：ratio not in simplest form（未约简到最简比）、mixing part:part with part:whole（把部分与部分的比当作部分与整体的比）。用新加坡元 S$，不用美元。不教：ratios involving fractions or decimals（官方明确排除的内容）、percentage（已在试学周）、algebra、circles、volume、speed、calculators、invented official facts。题目要求 simplest form 时必须说明 'simplest form'，否则答案键必须唯一，不能有两个等价比同时作为正确选项（例如 2:3 和 4:6 不能同时存在于选项中）。",
      videoUrl: null,
      kaizenFocus: null,
      questions: [
        {
          type: "reading",
          order: 1,
          content: "Choose the correct answer:",
          options: JSON.stringify([
            "Write 8:12 in its simplest form.|A. 8:12|B. 2:3|C. 4:6|D. 16:24",
            "The ratio 2:3 is equivalent to 8:□. What is the missing number?|A. 10|B. 12|C. 14|D. 16",
            "Divide 40 in the ratio 1:3. What is the smaller share?|A. 8|B. 10|C. 20|D. 30",
            "Find the ratio of 12 to 18 in its simplest form.|A. 12:18|B. 2:3|C. 6:9|D. 1:2",
            "The ratio a:b:c = 2:3:5. If a+b+c = 20, what is the value of b?|A. 4|B. 6|C. 10|D. 12",
          ]),
          correctAnswer: "B,B,B,B,B",
          points: 10,
        },
        {
          type: "grammar",
          order: 2,
          content: "Choose the correct answer:",
          options: JSON.stringify([
            "The ratio 3:5 is equivalent to:|A. 5:3|B. 6:10|C. 9:12|D. 12:15",
            "Write 15:25 in its simplest form.|A. 15:25|B. 5:10|C. 3:5|D. 30:50",
            "Divide S$80 in the ratio 3:5. What is the larger share?|A. S$30|B. S$40|C. S$50|D. S$60",
            "Find the missing term: 4:7 = 12:□|A. 15|B. 18|C. 21|D. 28",
            "The ratio 2:3 can be expressed as a fraction of the first quantity to the total. What fraction?|A. 2/3|B. 2/5|C. 3/5|D. 1/2",
            "Write the ratio 9:12:15 in its simplest form.|A. 9:12:15|B. 3:4:5|C. 18:24:30|D. 1:2:3",
            "The ratio of two quantities is 3:4 in simplest form. The two quantities are 18 and:|A. 20|B. 22|C. 24|D. 27",
            "Find the missing term: 1:4 = □:20|A. 4|B. 5|C. 10|D. 16",
          ]),
          correctAnswer: "B,C,C,C,B,B,C,B",
          points: 16,
        },
        {
          type: "writing",
          order: 3,
          content: `Part 2: Show Your Working (写出算式步骤)

Riverside Secondary School has 120 students in the sports club. Answer the questions below. Show all your working clearly.

Question (a)
The ratio of boys to girls in the sports club is 3:5. How many boys are there?

Question (b)
The club has football, basketball and tennis players in the ratio 2:3:1. How many tennis players are there?

Question (c)
Last year, there were 90 students in the club. The ratio of the number of students this year to last year is written as m:n in simplest form, where m and n are whole numbers. What are the values of m and n?

写作提示 / Tips:
✓ 每题分步骤写出算式 (Show working steps for each question)
✓ Part 2 官方要求：clearly show the method of solution by writing working steps, plus the final answer
✓ Ratio 计算不用计算器 (No calculators allowed: do ratio calculations by hand)
✓ 写出比的计算步骤，如「Total parts = 3 + 5 = 8, 1 part = 120 ÷ 8 = 15, Boys = 3 × 15 = 45」
✓ 题目要求 simplest form 时，必须约简到最简比（如 120:90 = 4:3）
✓ 区分 part:part 和 part:whole（boys:girls 是 part:part，boys:total 是 part:whole）
✓ 最终答案标注清晰（如 45 boys, 20 tennis players, m = 4 and n = 3）

Note: This is a sample of Part 2 short-answer/open-ended questions. The official paper has 20 short-answer + 10–15 open-ended items in 1 hour 45 minutes.`,
          points: 20,
        },
      ],
    },
    {
      level: "SMATH",
      weekNumber: 2,
      title: "数学 第 2 周 / Maths Week 2",
      description: "AEIS-Secondary Mathematics: P6 algebra",
      isSample: false,
      errorFocus: "3a means 3×a not 3+a / forgetting to simplify like terms",
      parentBrief: "本周是中学 AEIS 数学第 2 周，对应官方 SEAB Sec 1 卷型（https://www.seab.gov.sg/aeis/test-details/ 2026年7月1日更新）。Part 1 Multiple-choice questions：34 道 MCQ，30 分钟。Part 2 Short-answer questions (20 items) and open-ended questions (10 to 15 items)：1 小时 45 分钟。Calculators are not allowed（不允许使用计算器）。Short-answer and open-ended questions：candidates are required to show the method of solution clearly by writing working steps in the spaces provided, plus the final answer（需写出算式步骤和最终答案）。AEIS-Secondary 官方 preceding-level 规则：申请 Sec 1 入学者需熟悉 Sec 1 前一级的内容。官方举例：apply Secondary 3 → be familiar with Secondary 2. 本周针对 Sec 1 申请者，内容为 Sec 1 前一级（P6）的官方 2021 Primary Mathematics Syllabus - P6 Algebra 1.1 (using a letter to represent an unknown number), 1.2 (notation, representations and interpretation of simple algebraic expressions such as a ± 3, a × 3 or 3a, a ÷ 3 or a/3), 1.3 (simplifying simple linear expressions excluding brackets), 1.4 (evaluating simple linear expressions by substitution), 1.5 (simple linear equations involving whole number coefficient only)。本周作业是样本，不是完整 34 + 20 + 10–15 题。本周化石：3a means 3×a not 3+a（未理解代数乘法记号）、forgetting to simplify like terms（忘记合并同类项，如 2x+3x 写成答案而不是 5x）。用新加坡元 S$，不用美元。不教：brackets（括号）、negative coefficients（负系数）、simultaneous equations（联立方程）、inequalities（不等式）、quadratic（二次方程）、formulae of circles/volume（圆与体积公式，不在 Algebra 主题）、ratio（已在第 1 周）、percentage（已在试学周）、calculators、invented official facts。题目选项必须唯一，不能有 3n 和 n×3 同时作为两个正确选项，也不能有 n+n+n 和 3n 同时作为选项（unless stem explicitly asks for different forms）。",
      videoUrl: null,
      kaizenFocus: null,
      questions: [
        {
          type: "reading",
          order: 1,
          content: "Choose the correct answer:",
          options: JSON.stringify([
            "n stands for a number. What does 3n mean?|A. 3 + n|B. 3 − n|C. 3 × n|D. n ÷ 3",
            "Simplify 2x + 5x.|A. 7x|B. 10x|C. 2x + 5x|D. 7x²",
            "If a = 4, find the value of 3a + 2.|A. 9|B. 11|C. 14|D. 18",
            "Solve 5x = 20.|A. x = 4|B. x = 15|C. x = 25|D. x = 100",
            "Which expression means 'a number divided by 3'?|A. 3a|B. a + 3|C. a − 3|D. a/3",
          ]),
          correctAnswer: "C,A,C,A,D",
          points: 10,
        },
        {
          type: "grammar",
          order: 2,
          content: "Choose the correct answer:",
          options: JSON.stringify([
            "Simplify 8y − 3y.|A. 5y|B. 11y|C. 5|D. 8y − 3y",
            "If m = 6, find 2m − 5.|A. 3|B. 7|C. 9|D. 17",
            "Solve x + 9 = 15.|A. x = 4|B. x = 6|C. x = 24|D. x = 9",
            "4n means:|A. 4 + n|B. 4 × n|C. n − 4|D. n ÷ 4",
            "Simplify 3a + a + 2a.|A. 5a|B. 6a|C. 3a + a + 2a|D. 6a²",
            "If k = 5, find k/5 + 3.|A. 2|B. 4|C. 8|D. 10",
            "Solve 3x + 1 = 13.|A. x = 3|B. x = 4|C. x = 5|D. x = 12",
            "Which is a simple linear expression for 'five more than twice a number n'?|A. 5n + 2|B. 2 + n + 5|C. 2n + 5|D. 5 + n + 2",
          ]),
          correctAnswer: "A,B,B,B,B,B,B,C",
          points: 16,
        },
        {
          type: "writing",
          order: 3,
          content: `Part 2: Show Your Working (写出算式步骤)

Riverside Secondary School has a maths club. Answer the questions below. Show all your working clearly.

Question (a)
Simplify the expression: 4x + 7 + 3x − 2

Question (b)
If a = 5, find the value of 2a + 8.

Question (c)
Solve the equation: 2x + 3 = 11
(State that 3a = 3 × a when explaining algebraic expressions)

写作提示 / Tips:
✓ 每题分步骤写出算式 (Show working steps for each question)
✓ Part 2 官方要求：clearly show the method of solution by writing working steps, plus the final answer
✓ Algebra 计算不用计算器 (No calculators allowed: do algebra calculations by hand)
✓ 写出代数步骤，如「3a = 3 × a」「Combine like terms: 4x + 3x = 7x, 7 − 2 = 5」「Substitute a = 5: 2 × 5 + 8 = 10 + 8 = 18」
✓ 解方程要写步骤，如「2x + 3 = 11 → 2x = 11 − 3 → 2x = 8 → x = 8 ÷ 2 → x = 4」
✓ 最终答案标注清晰（如 7x + 5, 18, x = 4）

Note: This is a sample of Part 2 short-answer/open-ended questions. The official paper has 20 short-answer + 10–15 open-ended items in 1 hour 45 minutes.`,
          points: 20,
        },
      ],
    },
    {
      level: "SMATH",
      weekNumber: 3,
      title: "数学 第 3 周 / Maths Week 3",
      description: "AEIS-Secondary Mathematics: P6 fraction division",
      isSample: false,
      errorFocus: "÷ a whole number vs ÷ a fraction / invert-and-multiply",
      parentBrief: "本周是中学 AEIS 数学第 3 周，对应官方 SEAB Sec 1 卷型（https://www.seab.gov.sg/aeis/test-details/ 2026年7月1日更新）。Part 1 Multiple-choice questions：34 道 MCQ，30 分钟。Part 2 Short-answer questions (20 items) and open-ended questions (10 to 15 items)：1 小时 45 分钟。Calculators are not allowed（不允许使用计算器）。Short-answer and open-ended questions：candidates are required to show the method of solution clearly by writing working steps in the spaces provided, plus the final answer（需写出算式步骤和最终答案）。AEIS-Secondary 官方 preceding-level 规则：申请 Sec 1 入学者需熟悉 Sec 1 前一级的内容。官方举例：apply Secondary 3 → be familiar with Secondary 2. 本周针对 Sec 1 申请者，内容为 Sec 1 前一级（P6）的官方 2021 Primary Mathematics Syllabus - P6 Fractions 1.1 (dividing a proper fraction by a whole number without calculator), 1.2 (dividing a whole number or a proper fraction by a proper fraction without calculator)。本周作业是样本，不是完整 34 + 20 + 10–15 题。本周化石：dividing a proper fraction by a whole number vs dividing by a proper fraction（除以整数 vs 除以分数混淆）、invert-and-multiply（倒过来乘）。用新加坡元 S$，不用美元。不教：mixed-number ÷ mixed-number（带分数除法，如果不在 1.1–1.2）、percentage、ratio、algebra、circles、volume、speed、brackets-in-algebra、invented official facts。题目选项必须唯一：不能有 1/2 ÷ 4 = 1/8 和 2/16 同时作为两个正确选项；不能有 3 ÷ 1/2 = 6 和 12/2 同时作为正确选项；不能有 2/3 ÷ 4 = 2/12 和 1/6 同时作为正确选项，除非题干明确要求 simplest form。当有未化简的等值分数作为选项时，题干必须说 simplest form，否则不要列出等值分数。",
      videoUrl: null,
      kaizenFocus: null,
      questions: [
        {
          type: "reading",
          order: 1,
          content: "Choose the correct answer. Give your answer in simplest form where stated:",
          options: JSON.stringify([
            "What is 1/2 ÷ 4? (Give answer in simplest form)|A. 1/8|B. 2/8|C. 1/6|D. 4/2",
            "What is 3 ÷ 1/2?|A. 3/2|B. 1/6|C. 6|D. 1.5",
            "What is 2/3 ÷ 5? (Give answer in simplest form)|A. 2/15|B. 10/3|C. 2/8|D. 5/6",
            "What is 4 ÷ 1/4?|A. 1|B. 4/4|C. 16|D. 4/16",
            "What is 3/4 ÷ 3? (Give answer in simplest form)|A. 3/12|B. 1/4|C. 9/4|D. 3/7",
          ]),
          correctAnswer: "A,C,A,C,B",
          points: 10,
        },
        {
          type: "grammar",
          order: 2,
          content: "Choose the correct answer. Give your answer in simplest form where stated:",
          options: JSON.stringify([
            "What is 5/6 ÷ 2? (Give answer in simplest form)|A. 5/12|B. 10/6|C. 5/8|D. 2/6",
            "What is 8 ÷ 2/3?|A. 16/3|B. 12|C. 8/6|D. 6",
            "What is 1/3 ÷ 1/6?|A. 1/18|B. 1/2|C. 2|D. 3",
            "What is 5 ÷ 1/5?|A. 1|B. 5/5|C. 25|D. 5/25",
            "What is 4/5 ÷ 2? (Give answer in simplest form)|A. 4/10|B. 2/5|C. 8/5|D. 4/7",
            "What is 2/5 ÷ 1/10?|A. 2/50|B. 2/15|C. 4|D. 20/50",
            "What is 7/8 ÷ 7? (Give answer in simplest form)|A. 1/8|B. 7/56|C. 49/8|D. 7/15",
            "What is 9 ÷ 3/4?|A. 12|B. 27/4|C. 9/12|D. 3",
          ]),
          correctAnswer: "A,B,C,C,B,C,A,A",
          points: 16,
        },
        {
          type: "writing",
          order: 3,
          content: `Part 2: Show Your Working (写出算式步骤)

Riverside Secondary School is preparing for a charity bake sale. Answer the questions below. Show all your working clearly.

Question (a)
Priya has 3/4 of a cake. She wants to divide it equally among 3 friends. What fraction of the whole cake does each friend get?

Question (b)
Jun Wei has 6 kilograms of flour. Each batch of cookies needs 1/2 kilogram of flour. How many batches can he make?

Question (c)
Mei has 2/5 of a pizza. Each serving is 1/2 of the whole pizza. How many servings can she make from 2/5 of the pizza?

写作提示 / Tips:
✓ 每题分步骤写出算式 (Show working steps for each question)
✓ Part 2 官方要求：clearly show the method of solution by writing working steps, plus the final answer
✓ Fraction division 不用计算器 (No calculators allowed: do fraction division by hand)
✓ 写出分数除法步骤，用 invert-and-multiply：如「3/4 ÷ 3 = 3/4 × 1/3 = 3/12 = 1/4」「6 ÷ 1/2 = 6 × 2/1 = 12」「2/5 ÷ 1/2 = 2/5 × 2/1 = 4/5 (This means 4/5 of a serving, or she can make 0.8 servings)」
✓ 用文字说明：「To divide by a whole number, multiply by 1 over that number」或「To divide by a fraction, multiply by its reciprocal (invert and multiply)」
✓ 最终答案化简到最简分数（如 3/12 = 1/4）
✓ 如果题目有钱币，用新加坡元 S$（本周题目无钱币情境）

Note: This is a sample of Part 2 short-answer/open-ended questions. The official paper has 20 short-answer + 10–15 open-ended items in 1 hour 45 minutes.`,
          points: 20,
        },
      ],
    },
    {
      level: "SMATH",
      weekNumber: 4,
      title: "数学 第 4 周 / Maths Week 4",
      description: "AEIS-Secondary Mathematics: P6 circles",
      isSample: false,
      errorFocus: "semicircle perimeter needs the diameter / πr² vs 2πr mix-up",
      parentBrief: "本周是中学 AEIS 数学第 4 周，对应官方 SEAB Sec 1 卷型（https://www.seab.gov.sg/aeis/test-details/ 2026年7月1日更新）。Part 1 Multiple-choice questions：34 道 MCQ，30 分钟。Part 2 Short-answer questions (20 items) and open-ended questions (10 to 15 items)：1 小时 45 分钟。Calculators are not allowed（不允许使用计算器）。Short-answer and open-ended questions：candidates are required to show the method of solution clearly by writing working steps in the spaces provided, plus the final answer（需写出算式步骤和最终答案）。AEIS-Secondary 官方 preceding-level 规则：申请 Sec 1 入学者需熟悉 Sec 1 前一级的内容。官方举例：apply Secondary 3 → be familiar with Secondary 2. 本周针对 Sec 1 申请者，内容为 Sec 1 前一级（P6）的官方 2021 Primary Mathematics Syllabus - P6 Area and Circumference of Circle 1.1 (area and circumference of circle), 1.2 (finding the area and perimeter of semicircle and quarter circle), 1.3 (finding the area and perimeter of composite figures made up of square, rectangle, triangle, semicircle and quarter circle)。本周作业是样本，不是完整 34 + 20 + 10–15 题。本周化石：semicircle perimeter needs the diameter / πr² vs 2πr mix-up（半圆周长忘了加直径 / 面积公式 πr² 与周长公式 2πr 混淆）。π 的值不是官方统一规定：题目会在每道题中明确说明「Take π = 22/7」或「Take π = 3.14」，用哪个值算哪个。本周优先用 π = 22/7（radius 是 7 的倍数时答案是整数）。不混用 22/7 和 3.14 在同一道题。用新加坡元 S$，不用美元。不教：volume（体积）、algebra（代数）、ratio（比）、percentage（百分数）、fraction division（分数除法，已在第 3 周）、speed（速度）、sphere/cone/cylinder formulae（球体/圆锥/圆柱公式，官方不在 P6 Circle 1.1–1.3）、invented official facts。题目选项必须唯一：不能有 2πr 和 πd 作为两个选项（除非题目明确要求不同形式）；不能有 154 和 154 cm² 作为两个选项；不能有两个组合图形算出相同面积；不能有 22/7 和 3.14 混用导致两个选项都接近正确值。所有题目全用 π = 22/7，不用 3.14，保持选项干净。Semicircle perimeter = πr + diameter（curved part + straight part），不是只有 πr 或只有 (1/2)×2πr。",
      videoUrl: null,
      kaizenFocus: null,
      questions: [
        {
          type: "reading",
          order: 1,
          content: "Choose the correct answer:",
          options: JSON.stringify([
            "A circle has radius 7 cm. Take π = 22/7. What is the circumference?|A. 22 cm|B. 44 cm|C. 154 cm|D. 88 cm",
            "A circle has diameter 21 cm. Take π = 22/7. What is the circumference?|A. 33 cm|B. 44 cm|C. 66 cm|D. 132 cm",
            "A semicircle has radius 7 cm. Take π = 22/7. What is the perimeter (curved part + diameter)?|A. 22 cm|B. 36 cm|C. 44 cm|D. 58 cm",
            "A quarter circle has radius 14 cm. Take π = 22/7. What is the perimeter (curved part + two straight sides)?|A. 22 cm|B. 36 cm|C. 50 cm|D. 72 cm",
            "A rectangle is 14 cm by 10 cm. A semicircle of diameter 14 cm is added to one 14-cm side. Take π = 22/7. What is the total area?|A. 140 cm²|B. 154 cm²|C. 217 cm²|D. 294 cm²",
          ]),
          correctAnswer: "B,C,B,C,C",
          points: 10,
        },
        {
          type: "grammar",
          order: 2,
          content: "Choose the correct answer:",
          options: JSON.stringify([
            "A circle has radius 14 cm. Take π = 22/7. What is the area?|A. 44 cm²|B. 88 cm²|C. 616 cm²|D. 1232 cm²",
            "A semicircle has radius 14 cm. Take π = 22/7. What is the perimeter (curved part + diameter)?|A. 36 cm|B. 44 cm|C. 50 cm|D. 72 cm",
            "A circle has diameter 14 cm. Take π = 22/7. What is the area?|A. 44 cm²|B. 88 cm²|C. 154 cm²|D. 308 cm²",
            "A quarter circle has radius 7 cm. Take π = 22/7. What is the perimeter (curved part + two straight sides)?|A. 11 cm|B. 14 cm|C. 25 cm|D. 36 cm",
            "A semicircle has radius 7 cm. Take π = 22/7. What is the area?|A. 38.5 cm²|B. 77 cm²|C. 154 cm²|D. 308 cm²",
            "A square has side 14 cm. A quarter circle of radius 14 cm is removed from one corner. Take π = 22/7. What is the shaded area (square minus quarter circle)?|A. 42 cm²|B. 77 cm²|C. 154 cm²|D. 196 cm²",
            "A circle has circumference 44 cm. Take π = 22/7. What is the radius?|A. 7 cm|B. 14 cm|C. 21 cm|D. 22 cm",
            "A circle has radius 21 cm. Take π = 22/7. What is the area?|A. 616 cm²|B. 1232 cm²|C. 1386 cm²|D. 2772 cm²",
          ]),
          correctAnswer: "C,D,C,C,B,A,A,C",
          points: 16,
        },
        {
          type: "writing",
          order: 3,
          content: `Part 2: Show Your Working (写出算式步骤)

Riverside Secondary School has a circular garden. Answer the questions below. Show all your working clearly.

Take π = 22/7 for all questions.

Question (a)
The circular garden has radius 7 cm. Find the circumference.

Question (b)
The school also has a semicircular garden area with radius 7 cm. Find the perimeter. (Remember: semicircle perimeter = curved part + diameter, not just the curved part.)

Question (c)
A composite shape is made of a rectangle 14 cm by 10 cm with a semicircle of diameter 14 cm on one of the 14-cm sides. Find the total area.

写作提示 / Tips:
✓ 每题分步骤写出算式 (Show working steps for each question)
✓ Part 2 官方要求：clearly show the method of solution by writing working steps, plus the final answer
✓ Circle 计算不用计算器 (No calculators allowed: do circle calculations by hand)
✓ 写出圆的公式步骤，如「Circumference = 2πr = 2 × 22/7 × 7 = 44 cm」「Area of circle = πr² = 22/7 × 7 × 7 = 154 cm²」「Semicircle perimeter = πr + diameter = 22/7 × 7 + 14 = 22 + 14 = 36 cm」
✓ 半圆周长 = 弧长 + 直径（curved part + diameter），不是只有弧长。弧长是半个圆周 πr，但周长还要加上底边（直径 2r）
✓ 组合图形分块计算：长方形面积 + 半圆面积，如「Rectangle area = 14 × 10 = 140 cm²」「Semicircle area = (1/2) × πr² = (1/2) × 22/7 × 7 × 7 = 77 cm²」「Total = 140 + 77 = 217 cm²」
✓ 所有题目用 π = 22/7，题干已明确，不要写 3.14
✓ 单位标注清晰（如 44 cm, 154 cm², 36 cm）
✓ 如果题目有钱币，用新加坡元 S$（本周题目无钱币情境）

Note: This is a sample of Part 2 short-answer/open-ended questions. The official paper has 20 short-answer + 10–15 open-ended items in 1 hour 45 minutes.`,
          points: 20,
        },
      ],
    },
    {
      level: "SMATH",
      weekNumber: 5,
      title: "数学 第 5 周 / Maths Week 5",
      description: "AEIS-Secondary Mathematics: P6 volume of cube and cuboid",
      isSample: false,
      errorFocus: "volume vs edge / forgetting V = l × w × h",
      parentBrief: "本周是中学 AEIS 数学第 5 周，对应官方 SEAB Sec 1 卷型（https://www.seab.gov.sg/aeis/test-details/ 2026年7月1日更新）。Part 1 Multiple-choice questions：34 道 MCQ，30 分钟。Part 2 Short-answer questions (20 items) and open-ended questions (10 to 15 items)：1 小时 45 分钟。Calculators are not allowed（不允许使用计算器）。Short-answer and open-ended questions：candidates are required to show the method of solution clearly by writing working steps in the spaces provided, plus the final answer（需写出算式步骤和最终答案）。AEIS-Secondary 官方 preceding-level 规则：申请 Sec 1 入学者需熟悉 Sec 1 前一级的内容。官方举例：apply Secondary 3 → be familiar with Secondary 2. 本周针对 Sec 1 申请者，内容为 Sec 1 前一级（P6）的官方 2021 Primary Mathematics Syllabus - P6 Volume of Cube and Cuboid 2.1 (finding one dimension of a cuboid given its volume and the other dimensions), 2.2 (finding the length of one edge of a cube given its volume), 2.3 (finding the height of a cuboid given its volume and base area), 2.4 (finding the area of a face of a cuboid given its volume and one dimension), 2.5 (use of √ and ³√ as needed to find an edge from a volume or a square face)。本周作业是样本，不是完整 34 + 20 + 10–15 题。本周化石：volume vs edge 混淆（体积和边长混淆）、forgetting V = l × w × h（忘记 V = 长 × 宽 × 高）。官方大纲明确：Volume of a cube = edge³（正方体体积 = 边³）、Volume of a cuboid = length × width × height（长方体体积 = 长 × 宽 × 高）、单位 cm³ / m³。官方注意：本主题历史上在较早级别排除 cm³ 和 m³ 之间的转换，不要发明转换题。用新加坡元 S$，不用美元（如果题目涉及钱币，例如长方体水箱的价格，用 S$；本周题目优先不涉及钱币情境）。不教：circles（圆，已在第 4 周）、algebra（代数）、ratio（比）、percentage（百分数）、fraction division（分数除法）、speed（速度）、nets（展开图）、sphere/cone/cylinder（球体/圆锥/圆柱，不在官方 P6 Volume 2.1–2.5）、liquid capacity formulae beyond a cuboid tank as L×W×H in cm³（液体容量公式，除了长方体水箱用 L×W×H 算 cm³ 以外）、invented official facts。题目选项必须唯一：不能有两道题的正确答案数值相同（如两道题都是 4 cm，或一道是 4 cm 另一道是 4 cm²，数字必须不同）；不能有 cube edge 4 和 volume 64 作为同一道题的两个选项（都是基于 4³=64 的正确值）；不能有两个长方体体积都是 120 cm³；不能有 ³√8 = 2 和 8÷4 = 2 作为同一道题的两个正确选项（即使公式不同，数值相同会混淆）；不能有 5 cm 和 5 cm² 同时作为同一个数量的两个选项（单位必须匹配题目要求）。",
      videoUrl: null,
      kaizenFocus: null,
      questions: [
        {
          type: "reading",
          order: 1,
          content: "Choose the correct answer:",
          options: JSON.stringify([
            "A cube has edge 3 cm. What is the volume?|A. 9 cm³|B. 12 cm³|C. 27 cm³|D. 30 cm³",
            "A cube has volume 64 cm³. What is the length of one edge?|A. 2 cm|B. 4 cm|C. 8 cm|D. 16 cm",
            "A cuboid is 5 cm long, 4 cm wide, and 3 cm high. What is the volume?|A. 12 cm³|B. 20 cm³|C. 60 cm³|D. 120 cm³",
            "A cuboid has volume 120 cm³. The length is 10 cm and the width is 4 cm. What is the height?|A. 2 cm|B. 3 cm|C. 5 cm|D. 6 cm",
            "A cuboid has volume 96 cm³ and base area 16 cm². What is the height?|A. 4 cm|B. 6 cm|C. 8 cm|D. 12 cm",
          ]),
          correctAnswer: "C,B,C,B,B",
          points: 10,
        },
        {
          type: "grammar",
          order: 2,
          content: "Choose the correct answer:",
          options: JSON.stringify([
            "A cube has volume 125 cm³. What is the length of one edge?|A. 5 cm|B. 10 cm|C. 15 cm|D. 25 cm",
            "A cuboid is 8 cm long, 5 cm wide, and 2 cm high. What is the volume?|A. 15 cm³|B. 40 cm³|C. 80 cm³|D. 160 cm³",
            "A cuboid has volume 144 cm³. The length is 8 cm and the height is 2 cm. What is the width?|A. 6 cm|B. 9 cm|C. 12 cm|D. 18 cm",
            "A cube has edge 2 cm. What is the volume?|A. 4 cm³|B. 6 cm³|C. 8 cm³|D. 12 cm³",
            "A cuboid has volume 100 cm³ and height 5 cm. What is the area of the base?|A. 10 cm²|B. 20 cm²|C. 25 cm²|D. 50 cm²",
            "A cuboid has volume 168 cm³. One edge is 8 cm and another edge is 3 cm. What is the third edge?|A. 5 cm|B. 6 cm|C. 7 cm|D. 8 cm",
            "A cube has volume 1000 cm³. What is the length of one edge?|A. 5 cm|B. 10 cm|C. 20 cm|D. 100 cm",
            "A cuboid has volume 60 cm³ and height 5 cm. What is the area of the base?|A. 10 cm²|B. 12 cm²|C. 15 cm²|D. 20 cm²",
          ]),
          correctAnswer: "A,C,B,C,B,C,B,B",
          points: 16,
        },
        {
          type: "writing",
          order: 3,
          content: `Part 2: Show Your Working (写出算式步骤)

Riverside Secondary School has storage boxes. Answer the questions below. Show all your working clearly.

Question (a)
A cubic storage box has edge 4 cm. Find the volume.

Question (b)
Another storage box is a cube with volume 64 cm³. Find the length of one edge. (Use ³√ if needed: ³√64 = 4 because 4 × 4 × 4 = 64.)

Question (c)
A rectangular (cuboid) storage box has volume 120 cm³. The length is 10 cm and the width is 4 cm. Find the height.

写作提示 / Tips:
✓ 每题分步骤写出算式 (Show working steps for each question)
✓ Part 2 官方要求：clearly show the method of solution by writing working steps, plus the final answer
✓ Volume 计算不用计算器 (No calculators allowed: do volume calculations by hand)
✓ 写出体积公式步骤：
  • Cube: Volume = edge³ = edge × edge × edge. Example: V = 4³ = 4 × 4 × 4 = 64 cm³
  • Cuboid: Volume = length × width × height. Example: V = 10 × 4 × 3 = 120 cm³
✓ 求边长或高度时要写出除法步骤：
  • 已知体积和两个边，求第三边：height = volume ÷ length ÷ width. Example: h = 120 ÷ 10 ÷ 4 = 3 cm
  • 已知正方体体积，求边长：edge = ³√volume. Example: edge = ³√64 = 4 cm (because 4 × 4 × 4 = 64)
  • 已知体积和底面积，求高：height = volume ÷ base area. Example: h = 96 ÷ 16 = 6 cm
✓ 单位标注清晰（体积用 cm³ 或 m³，长度/边长/高度用 cm 或 m，面积用 cm² 或 m²）
✓ 官方大纲明确不教 cm³ 和 m³ 之间的转换，不要发明转换题
✓ 如果题目有钱币，用新加坡元 S$（本周题目无钱币情境）

Note: This is a sample of Part 2 short-answer/open-ended questions. The official paper has 20 short-answer + 10–15 open-ended items in 1 hour 45 minutes.`,
          points: 20,
        },
      ],
    },
    {
      level: "SMATH",
      weekNumber: 6,
      title: "数学 第 6 周 / Maths Week 6",
      description: "AEIS-Secondary Mathematics: P6 data analysis (average)",
      isSample: false,
      errorFocus: "average confused with total / forgetting total = average × n",
      parentBrief: "本周是中学 AEIS 数学第 6 周，对应官方 SEAB Sec 1 卷型（https://www.seab.gov.sg/aeis/test-details/ 2026年7月1日更新）。Part 1 Multiple-choice questions：34 道 MCQ，30 分钟。Part 2 Short-answer questions (20 items) and open-ended questions (10 to 15 items)：1 小时 45 分钟。Calculators are not allowed（不允许使用计算器）。Short-answer and open-ended questions：candidates are required to show the method of solution clearly by writing working steps in the spaces provided, plus the final answer（需写出算式步骤和最终答案）。AEIS-Secondary 官方 preceding-level 规则：申请 Sec 1 入学者需熟悉 Sec 1 前一级的内容。官方举例：apply Secondary 3 → be familiar with Secondary 2. 本周针对 Sec 1 申请者，内容为 Sec 1 前一级（P6）的官方 MOE 2021 Primary Mathematics (Updated Oct 2025), PRIMARY SIX, STATISTICS, SUB-STRAND: DATA ANALYSIS: 1. Average of a Set of Data, 1.1 average as 'total value ÷ number of data', 1.2 relationship between average, total value and number of data。本周作业是样本，不是完整 34 + 20 + 10–15 题。本周化石：average confused with total（孩子写总值而不是平均数，或把 average 当成 total × number of data 而不是 total ÷ number of data）、求缺失值时忘记 total = average × number of data（when finding a missing value, forgetting that total = average × number of data）。官方用词是 average（平均数），不教 mean / median / mode 作为官方名称（DO NOT teach mean/median/mode as official names; official word is average）。不教：speed（速度，已从 P6 2021 大纲移到 Sec 1）、官方未给出的分数/等级切线（DO NOT invent official cut-scores）、invented official facts。数字保持友好（numbers stay friendly, no calculator）。金额用新加坡元 S$ 不用美元（如果题目涉及钱币情境，用 S$）。题目选项必须唯一（unique keys only）：不能有两个选项是相同数值或相同含义。",
      videoUrl: null,
      kaizenFocus: null,
      questions: [
        {
          type: "reading",
          order: 1,
          content: "Choose the correct answer:",
          options: JSON.stringify([
            "5 students scored 70, 80, 90, 85, 75 in a test. What is the average score?|A. 75|B. 80|C. 85|D. 90",
            "The average of 4 numbers is 12. What is the total value of the 4 numbers?|A. 3|B. 16|C. 36|D. 48",
            "Jun Wei scored 78, 82, 85, and 90 in four tests. What is his average score?|A. 80|B. 82|C. 83.75|D. 84",
            "The average weight of 5 boxes is 8 kg. What is the total weight of all 5 boxes?|A. 1.6 kg|B. 13 kg|C. 40 kg|D. 45 kg",
            "3 books cost S$15, S$20, and S$25. What is the average cost per book?|A. S$18|B. S$20|C. S$22|D. S$25",
          ]),
          correctAnswer: "B,D,C,C,B",
          points: 10,
        },
        {
          type: "grammar",
          order: 2,
          content: "Choose the correct answer:",
          options: JSON.stringify([
            "Mei scored 85, 90, 80, and 95 in four subjects. What is her average score?|A. 85|B. 87.5|C. 90|D. 92",
            "The average of 3 numbers is 24. What is the total value of the 3 numbers?|A. 8|B. 27|C. 48|D. 72",
            "A shop sold 6 items for S$12, S$15, S$18, S$20, S$22, and S$24. What is the average price?|A. S$17.50|B. S$18.50|C. S$19.50|D. S$20.50",
            "The total weight of 4 bags is 60 kg. What is the average weight per bag?|A. 12 kg|B. 15 kg|C. 18 kg|D. 20 kg",
            "5 students scored an average of 70. 4 of them scored 65, 72, 68, and 75. What did the 5th student score?|A. 70|B. 72|C. 75|D. 80",
            "A school has 3 classes with 30, 32, and 34 students. What is the average class size?|A. 30|B. 31|C. 32|D. 33",
            "The average of 6 numbers is 15. The total value of 5 of them is 70. What is the 6th number?|A. 10|B. 15|C. 20|D. 25",
            "Jun Wei spent S$45, S$50, and S$60 on three books. What is the average cost per book?|A. S$50|B. S$51.67|C. S$52.50|D. S$55",
          ]),
          correctAnswer: "B,D,B,B,A,C,C,C",
          points: 16,
        },
        {
          type: "writing",
          order: 3,
          content: `Part 2: Show Your Working (写出算式步骤)

Riverside Secondary School has test scores. Answer the questions below. Show all your working clearly.

Question (a)
5 students scored 70, 80, 90, 85, and 75 in a test. Find the average score.

Question (b)
The average score of 6 students is 80. Find the total value of all 6 scores.

Question (c)
4 students scored 80, 70, 90, and 75 in a test. The average of all 5 students is 80. Find the score of the 5th student.

写作提示 / Tips:
✓ 每题分步骤写出算式 (Show working steps for each question)
✓ Part 2 官方要求：clearly show the method of solution by writing working steps, plus the final answer
✓ Average 计算不用计算器 (No calculators allowed: do average calculations by hand)
✓ 写出平均数公式步骤：
  • 求平均数：average = total value ÷ number of data. Example: average = (70 + 80 + 90 + 85 + 75) ÷ 5 = 400 ÷ 5 = 80
  • 求总值：total value = average × number of data. Example: total = 80 × 6 = 480
  • 求缺失值：先算总值 total = average × number of data，再用 total − 已知数据之和 = 缺失值. Example: total = 80 × 5 = 400, sum of 4 scores = 80 + 70 + 90 + 75 = 315, 5th score = 400 − 315 = 85
✓ 单位标注清晰（如分数用 marks / points，价格用 S$，重量用 kg）
✓ 官方用词是 average（平均数），不用 mean / median / mode 这些名称
✓ 如果题目有钱币，用新加坡元 S$（本周题目可能有钱币情境）

Note: This is a sample of Part 2 short-answer/open-ended questions. The official paper has 20 short-answer + 10–15 open-ended items in 1 hour 45 minutes.`,
          points: 20,
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
