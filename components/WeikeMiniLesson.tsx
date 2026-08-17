"use client";

type WeikeMiniLessonProps = {
  level: string;
  weekNumber: number;
};

type LessonContent = {
  fossil?: string;
  examples: string[];
  gloss: string;
};

export default function WeikeMiniLesson({ level, weekNumber }: WeikeMiniLessonProps) {
  // Define mini-lesson content for each week
  const lessons: Record<string, LessonContent> = {
    "A2-5": {
      fossil: "more bigger / more cheap / he is tall than me",
      examples: [
        "Priya is faster than Mei.",
        "This jump is longer than the first one.",
        "She was the fastest in her heat."
      ],
      gloss: "中文用「比」和「最」，但英语单音节形容词加 -er/-est（faster, fastest），多音节加 more/most（more exciting, most exciting）。比较级后接 than。"
    },
    "MATH-0": {
      examples: [
        "Jun Wei bought 2 books for $8 each.",
        "2 × $8 = $16",
        "He paid $16."
      ],
      gloss: "新加坡钱币用 $ 符号。2 books at $8 each → 2 × $8 = $16。做应用题先找关键词：each、in total、altogether。"
    },
    "MATH-1": {
      examples: [
        "3 packs of 4 = 3 × 4 = 12",
        "12 sweets shared equally among 3 children.",
        "12 ÷ 3 = 4"
      ],
      gloss: "乘法 multiplication：3 packs of 4 = 3 × 4。除法 division：12 shared equally among 3 = 12 ÷ 3。练习关键词：of, shared equally, per。"
    },
    "MATH-2": {
      examples: [
        "Mei ate 2/8 of the pizza, Priya ate 3/8.",
        "2/8 + 3/8 = 5/8",
        "Together they ate 5/8 of the pizza."
      ],
      gloss: "分数：3/8 读作 three eighths。分母加 -s（eighths, quarters）。加法：same denominator → 2/8 + 3/8 = 5/8。"
    },
    "MATH-3": {
      examples: [
        "The bookshelf is 2 m. The table is 1 m.",
        "2 m − 1 m = 1 m",
        "The bookshelf is 1 m taller. Also: 2 hours = 120 minutes."
      ],
      gloss: "长度 length：2 metres (m)。时间 time：2 hours = 120 minutes。单位不用复数 -s：2 m（不是 2 ms）。做题先统一单位。"
    },
    "MATH-4": {
      examples: [
        "A dice is a cube. It has 6 square faces.",
        "A book box is a cuboid. It has 6 rectangular faces.",
        "A can is a cylinder. It has 2 circular faces."
      ],
      gloss: "正方体 cube（6 个正方形面）vs 长方体 cuboid（6 个长方形面）；圆柱 cylinder（2 个圆形面）；圆锥 cone；球体 sphere。平面图形规律按 size / shape / colour / orientation 找下一个。"
    },
    "MATH-5": {
      examples: [
        "Each ⭐ stands for 2. There are 4 stars.",
        "4 × 2 = 8",
        "There are 8 children. Also: Each ⭐ stands for 5. 3 stars → 3 × 5 = 15."
      ],
      gloss: "象形统计图有单位。Each picture stands for 2 / 5 / 10。先看 1 个图代表几个，再乘。不要数图就当答案。"
    },
    "MATH-6": {
      examples: [
        "Ali had $50.00. He bought a book for $18.60.",
        "$50.00 − $18.60 = $31.40",
        "He has $31.40 left. Also: 4256 + 2318 → line up ones, tens, hundreds, thousands → 6574."
      ],
      gloss: "P3 数到万（10 000）。位值：千位 thousands, 百位 hundreds, 十位 tens, 个位 ones。钱币小数：$12.40 读 twelve dollars forty cents。加减法对齐小数点。写完算式后标注 $ 符号。"
    },
    "MATH-7": {
      examples: [
        "Mei bought 7 packs of stickers. Each pack has 8 stickers.",
        "7 × 8 = 56",
        "She has 56 stickers. Also: 50 ÷ 6 = 8 R 2 (8 remainder 2). 124 × 6 = 744."
      ],
      gloss: "P3 学六七八九的乘法口诀（6, 7, 8, 9 times tables）。有余数的除法：50 ÷ 6 = 8 R 2 读 eight remainder two。三位数乘/除一位数：124 × 6 = 744（竖式进位），156 ÷ 4 = 39。关键词：times（乘）、divided by（除）、remainder（余数）、equally（平均分）。"
    },
    "MATH-8": {
      examples: [
        "Mei ate 2/3 of a pizza. Ali ate 4/6 of another pizza.",
        "2/3 = 4/6 (equivalent fractions)",
        "Also: 1/2 + 1/4 = 2/4 + 1/4 = 3/4. And: 4/8 = 1/2 (simplest form)."
      ],
      gloss: "P3 学分数新技能：等值分数（2/3 = 4/6 = 8/12）、最简分数（4/8 = 1/2）、异分母比较（1/2 > 1/3，分母越大分数越小）、相关分数加减（1/2 + 1/4 = 3/4）。关键词：equivalent fractions（等值分数）、simplest form（最简）、eighths / sixths / quarters（分母读法加 -s）、compare（比较）。P2 第 2 周学过 2/8 + 3/8 = 5/8（同分母加法），本周练异分母和约分。"
    },
    "MATH-9": {
      examples: [
        "The road is 3 km long. 3 km = 3000 m.",
        "A bottle has 1 l 800 ml. That's 1800 ml.",
        "A bag of rice weighs 2 kg 500 g. That's 2500 g."
      ],
      gloss: "P3 学测量新单位：千米（km, 1 km = 1000 m）、毫升（ml, 1 l = 1000 ml）、复合单位（compound units, 例如 1 m 35 cm = 135 cm, 2 kg 500 g = 2500 g, 1 l 200 ml = 1200 ml）。P2 第 3 周学过 m/cm、kg/g、l，本周练 km、ml、复合单位、大小单位互换。关键词：kilometres / millilitres / convert（转换）、compound units（复合单位）。"
    },
    "MATH-10": {
      examples: [
        "A rectangle is 8 m long and 5 m wide. Area = 8 × 5 = 40 m².",
        "A square has sides of 6 cm. Area = 6 × 6 = 36 cm².",
        "A rectangle is 10 m long and 4 m wide. Perimeter = 10 + 4 + 10 + 4 = 28 m."
      ],
      gloss: "P3 学面积与周长：面积（area）用平方单位 cm² 或 m²，长方形面积 = 长 × 宽（length × width），正方形面积 = 边长 × 边长（side × side）。周长（perimeter）是所有边长之和，长方形周长 = 长 + 宽 + 长 + 宽 或 2 × (长 + 宽)，正方形周长 = 4 × 边长。关键词：area（面积）、perimeter（周长）、square units（平方单位）、length（长）、width（宽）、side（边）。注意：本周不教圆形、三角形面积（那是 P4 内容），答案用整数 cm 或 m，不用小数。"
    },
    "MATH-11": {
      examples: [
        "The lesson starts at 9:30 a.m. and ends at 10:15 a.m. Duration = 45 minutes.",
        "2:30 p.m. = 14:30 (24-hour clock: 2 + 12 = 14).",
        "1 minute = 60 seconds. So 3 minutes = 3 × 60 = 180 seconds."
      ],
      gloss: "P3 学时间新技能：秒（seconds, 1 min = 60 s）、计算经过时间（duration: 结束 − 开始）、24 小时制（24-hour clock: 下午加 12，早上不变，例如 2:30 p.m. = 14:30, 8:00 a.m. = 08:00）。关键词：duration（经过时间）、starting time（开始时间）、finishing time（结束时间）、seconds（秒）、24-hour clock（24 小时制）。P2 第 3 周学过时间到 5 分钟，本周新增秒和 24 小时制。注意：本周不教跨午夜的时间计算（那是 P4 内容），题目都是同一天内的时间。"
    },
    "MATH-12": {
      examples: [
        "A square has 4 right angles. Each right angle = 90°.",
        "The door frame has sides that are perpendicular (meet at a right angle).",
        "The opposite sides of a rectangle are parallel (never meet, always the same distance apart)."
      ],
      gloss: "P3 学角与直线新技能：直角（right angle = 90°）、垂直线（perpendicular lines，两条线相交成直角）、平行线（parallel lines，永不相交，距离始终相等）。关键词：right angle（直角）、perpendicular（垂直）、parallel（平行）、opposite sides（对边）。注意：本周只教直角 = 90°，不教 P4 的量角器（protractor）和非直角的度数，也不教 P5 的三角形性质。正方形和长方形都有 4 个直角，对边都是平行的。"
    },
    "MATH-13": {
      examples: [
        "Favourite fruit (each bar = number of children): Apple 8, Orange 5, Mango 12, Banana 7.",
        "Most popular = Mango (12 is the tallest bar). Least popular = Orange (5 is the shortest bar).",
        "Difference: Apple − Orange = 8 − 5 = 3. Total: 8 + 5 + 12 + 7 = 32 children."
      ],
      gloss: "P3 学条形统计图（bar graph）：读条的高度 = 数值，找最高的条 = most popular，找最短的条 = least popular，计算差值用减法（difference = 高的 − 低的），求总数把所有条相加（total = 所有数相加）。关键词：bar graph（条形图）、tallest bar（最高的条）、shortest bar（最短的条）、most popular（最多）、least popular（最少）、difference（差值）、total（总数）。注意：本周只教条形图，不教 P4 的折线图（line graph）或 P5 的饼图（pie chart）。题目用文字描述条形图，数字简单，条的高度差别明显。P2 第 5 周学过象形统计图（picture graph），本周升级到条形图。"
    },
    "MATH-14": {
      examples: [
        "The number 73 685 = Seventy-three thousand, six hundred and eighty-five.",
        "In 73 685: 7 is in ten thousands place = 70 000, 3 is in thousands place = 3 000, 6 is in hundreds place = 600.",
        "Compare: 84 567 < 84 657 (because 5 hundreds < 6 hundreds). Add: 56 789 + 10 000 = 66 789."
      ],
      gloss: "P4 学十万以内整数（whole numbers to 100 000）：识别位值（place value: 万位 ten thousands、千位 thousands、百位 hundreds、十位 tens、个位 ones），数字与文字互换（73 685 = seventy-three thousand, six hundred and eighty-five），比较五位数大小（从高位往低位比），加减整万（+ 10 000 只改万位）。关键词：place value（位值）、ten thousands place（万位）、compare（比较）、order（排序）、number pattern（数字规律）。注意：本周只教到 100 000，不教 P5 的小数（decimals）、百分数（percentages）。也不教 P4 下学期的因数倍数（factors/multiples）。P3 学过 10 000 以内（四位数），本周扩展到 100 000（五位数）。"
    },
    "MATH-15": {
      examples: [
        "Factors of 12 = 1, 2, 3, 4, 6, 12. 3 is a factor of 12 because 12 ÷ 3 = 4 remainder 0.",
        "Common factors of 12 and 18 = 1, 2, 3, 6. Both 12 and 18 can be divided by these numbers.",
        "Is 35 a multiple of 7? Yes, because 7 × 5 = 35. Common multiples of 4 and 6 include 12, 24, 36."
      ],
      gloss: "P4 学因数与倍数（factors and multiples）：因数 factors 是能整除某数的数（12 ÷ 3 = 4 无余数，所以 3 是 12 的因数）；倍数 multiples 是某数乘以整数的结果（7 × 5 = 35，所以 35 是 7 的倍数）。公因数 common factors：12 的因数有 1,2,3,4,6,12，18 的因数有 1,2,3,6,9,18，公因数是 1,2,3,6。公倍数 common multiples：4 的倍数有 4,8,12,16,20,24...，6 的倍数有 6,12,18,24...，公倍数有 12,24,36... 关键词：factor（因数）、multiple（倍数）、common factors（公因数）、common multiples（公倍数）、divides exactly（整除）。注意：本周不教质数 prime numbers / 质因数分解 prime factorisation / HCF LCM 名称（只说 common factors / common multiples）。任何数都是自己的因数和倍数。常见错误：把倍数当因数、列因数漏 1 和自己、找公倍数只写一个数的倍数。"
    },
    "MATH-16": {
      examples: [
        "Jun Wei counted 2413 stickers. He has 6 folders. He puts them equally: 2413 ÷ 6 = 402 R1.",
        "Each folder gets 402 stickers. 1 sticker is left over.",
        "The school bought 316 boxes of pencils. Each box has 28 pencils. 316 × 28 = 8848 pencils in total."
      ],
      gloss: "P4 学四则运算里的乘除算法（multiplication / division algorithm）：3.1 乘法算法 up to 4 digits by 1 digit（2413 × 6 = 14478, 竖式进位）、up to 3 digits by 2 digits（316 × 28 = 8848, 两个部分积对齐位值 316×20=6320, 316×8=2528）；3.2 除法算法 up to 4 digits by 1 digit（2413 ÷ 6 = 402 R1, 竖式 long division, 余数必须 < 除数）。关键词：multiplication algorithm（乘法算法）、division algorithm（除法算法）、carry（进位）、partial product（部分积）、quotient（商）、remainder（余数）。常见错误：进位漏写、个位对齐错、余数 ≥ 除数、3位数×2位数把部分积错位。注意：本周不教运算顺序 order of operations / 括号 brackets / 小数百分数 decimals & percentages / 两位数除法 long division by 2-digit（那是 P5）/ 计算器。4位数÷1位数有余数OK（如果题目要求 quotient and remainder）。"
    },
    "MATH-17": {
      examples: [
        "2 1/3 = 7/3 because 2 × 3 + 1 = 7. The numerator is 7, denominator is 3.",
        "11/4 = 2 3/4 because 11 ÷ 4 = 2 remainder 3. The whole number is 2, the remainder 3 becomes the numerator.",
        "Mixed number: whole number + proper fraction (like 2 1/3). Improper fraction: numerator ≥ denominator (like 7/3 or 5/2)."
      ],
      gloss: "P4 学带分数与假分数（mixed numbers / improper fractions）及互换：带分数 = 整数 + 真分数（如 2 1/3），假分数 = 分子 ≥ 分母（如 7/3）。转换公式：带分数 a b/c → 假分数 (a×c+b)/c；假分数 n/d → 带分数（n ÷ d = 商 q 余数 r，写成 q r/d）。关键词：mixed number（带分数）、improper fraction（假分数）、whole number（整数部分）、numerator（分子）、denominator（分母）、remainder（余数）。常见错误：换成假分数时只乘不加整数（忘了 +b）、换成带分数时余数当分子忘了、分子分母对调。例：2 1/3 = (2×3+1)/3 = 7/3；11/4 = 11÷4 = 2 R 3 = 2 3/4。注意：本周不教一组的几分之几（fraction of a set, 下周）、异分母加减（adding/subtracting unlike fractions）、带分数加减（adding mixed numbers, P5）、分数乘法（multiplying fractions, P5）。分母不超过 12。"
    },
    "MATH-18": {
      examples: [
        "2/3 of 18 = 18 ÷ 3 × 2 = 6 × 2 = 12. Divide by the denominator first, then multiply by the numerator.",
        "1/4 of 12 = 12 ÷ 4 = 3. Find one quarter of 12.",
        "5/8 of 24 stickers = 24 ÷ 8 × 5 = 3 × 5 = 15 stickers. Mei has 24 stickers. She gives 5/8 of them to Priya."
      ],
      gloss: "P4 学一组的几分之几（fraction of a set）：找 a/b of N，算法是先÷分母再×分子（N ÷ b × a）。关键词：fraction of a set（一组的几分之几）、of（的）、divide by denominator（除以分母）、multiply by numerator（乘以分子）。常见错误：先乘后除（先×分子再÷分母，错误）、把 of 当成减去（误以为 'of' 表示减法）、分母分子对调。例：2/3 of 18 = 18 ÷ 3 × 2 = 6 × 2 = 12；1/4 of 12 = 12 ÷ 4 = 3；5/8 of 24 = 24 ÷ 8 × 5 = 3 × 5 = 15。情境：学生分组、分享文具、食堂座位、图书馆书籍等。注意：本周不教带分数互换（mixed / improper, 已在第 17 周）、异分母加减（adding/subtracting unlike fractions）、分数乘法（multiplying fractions, P5）、小数百分数（decimals/percentages）、需要余数作为分数的除法（leftover with remainder as fraction）。分母不超过 12（denominators not exceeding 12），集合必须能整除（sets must divide evenly）。"
    },
    "MATH-19": {
      examples: [
        "2/7 + 3/7 = 5/7. Like fractions: same denominator, add numerators.",
        "1/2 + 1/4 = 2/4 + 1/4 = 3/4. Unlike fractions: find common denominator first (2, 4 → 4), then add.",
        "2/3 − 1/6 = 4/6 − 1/6 = 3/6 = 1/2. After subtracting, simplify to simplest form."
      ],
      gloss: "P4 学分数加减（adding and subtracting fractions）：同分母（like fractions）直接加减分子，如 2/7 + 3/7 = 5/7。异分母（unlike fractions）先找公分母（common denominator），再加减分子，如 1/2 + 1/4 = 2/4 + 1/4 = 3/4（把 1/2 变成 2/4）。答案要化简到最简分数（simplest form），如 4/8 = 1/2。关键词：like fractions（同分母分数）、unlike fractions（异分母分数）、common denominator（公分母）、simplest form（最简分数）。常见错误：分子分母一起加（1/2 + 1/3 ≠ 2/5，错误）、异分母不先通分、通分后忘了改分子（1/2 变成 2/4 时分子也要×2）、答案不约分（写 4/8 而不是 1/2）。例：3/4 − 1/2 = 3/4 − 2/4 = 1/4；5/12 + 1/4 = 5/12 + 3/12 = 8/12 = 2/3；5/6 − 1/3 = 5/6 − 2/6 = 3/6 = 1/2。注意：本周只教至多两个不同分母（not more than two different denominators），分母不超过 12。本周不教带分数加减（adding mixed numbers, P5）、分数乘法（multiplying fractions, P5）、三个不同分母、小数百分数。"
    },
    "MATH-20": {
      examples: [
        "0.47 < 0.5 because 0.47 = 47 hundredths, 0.50 = 50 hundredths.",
        "3/5 = 6/10 = 0.6. The denominator 5 is a factor of 10.",
        "2.36 to 1 d.p. = 2.4. Look at the hundredths place: 6 ≥ 5, so round up."
      ],
      gloss: "P4 学小数到三位（decimals up to 3 decimal places）：十分位 tenths、百分位 hundredths、千分位 thousandths。位值：3.256 中的 5 在百分位 = 0.05。比较小数：补零对齐，0.47 = 0.470, 0.5 = 0.500，所以 0.47 < 0.5。小数转分数：0.4 = 4/10 = 2/5（约分到最简）。分数转小数：分母是 10 或 100 的因数时，如 3/5 = 6/10 = 0.6。四舍五入：2.36 到 1 d.p.，看百分位 6 ≥ 5，进位得 2.4；5.852 到 2 d.p.，看千分位 2 < 5，不进位得 5.85。关键词：tenths（十分位）、hundredths（百分位）、thousandths（千分位）、place value（位值）、compare（比较）、order（排序）、round（四舍五入）、simplest form（最简分数）。常见错误：0.35 当成 0.350 比大小只看位数、0.4 = 4/10 忘了约分、四舍五入看错位。注意：本周不教小数加减乘除（下周 2.1）、×÷10/100/1000（P5）、百分数、4 位小数。"
    },
    "MATH-21": {
      examples: [
        "3.45 + 2.7: Align decimal points. 3.45 + 2.70 = 6.15",
        "6.80 − 1.35 = 5.45. Align decimal points, borrow from the left.",
        "$4.50 + $2.75 = $7.25. Money (dollars and cents) has 2 decimal places."
      ],
      gloss: "P4 学小数加减（最多两位小数）：adding and subtracting decimals (up to 2 decimal places)。关键技能：对齐小数点（align decimal points），补零补位（add zeros to make equal decimal places），竖式计算（vertical calculation）。例：3.45 + 2.7 → 对齐小数点 3.45 + 2.70 = 6.15；6.8 − 1.35 → 对齐小数点 6.80 − 1.35 = 5.45（从右边开始借位）；10 − 3.26 → 写成 10.00 − 3.26 = 6.74。金额美元和分（dollars and cents）是 2 位小数可以练，如 $4.50 + $2.75 = $7.25。常见错误：不对齐小数点（把 3.45 和 2.7 的个位对齐而不是小数点对齐）、从左边开始减（应该从右边个位或小数部分开始）、借位时漏了某一位（如 10.00 − 3.26，忘了从十位借到个位再借到十分位）。关键词：decimal point（小数点）、align（对齐）、add zeros（补零）、borrow（借位）、carry（进位）。注意：本周只教 P4 Decimals 2.1 最多两位小数的加减，不教三位小数加减、小数乘除（Decimals 3.1–3.3）、×÷10/100/1000（P5）、百分数（percentages）。"
    },
    "MATH-22": {
      examples: [
        "2.45 × 3 = 7.35. Count decimal places: 2.45 has 2 d.p., so 245 × 3 = 735, then move point left 2 places.",
        "6.4 ÷ 4 = 1.6. Decimal point goes straight up, then divide from left to right.",
        "5 ÷ 2 = 2.5. Can't divide evenly? Add .0 to 5, divide 50 by 2 = 25, write 2.5.",
        "7 ÷ 4 = 1.75. 4 goes into 7 once (remainder 3), add .0 → 30 ÷ 4 = 7 (remainder 2), add 0 → 20 ÷ 4 = 5."
      ],
      gloss: "P4 学小数乘除（最多两位小数）：multiplying and dividing decimals (up to 2 decimal places) by a 1-digit whole number, dividing a whole number by a whole number with quotient as a decimal, rounding。关键技能：2.45 × 3 → 先算 245 × 3 = 735，小数点往左移 2 位 = 7.35；6.4 ÷ 4 → 小数点直接上移，64 ÷ 4 = 16，答案 1.6；5 ÷ 2 → 除不尽时补零，5.0 ÷ 2 = 2.5；7 ÷ 4 = 1.75（4 goes into 7 once 余 3，补零 30，4 goes into 30 seven times 余 2，补零 20，4 goes into 20 five times）。四舍五入：3.26 × 5 = 16.30，若要求 1 d.p. 则看百分位 0 < 5 不进位 = 16.3。金额写新元 S$ 不是美元 $。常见错误：小数点位置错（忘了往左移几位）、除不尽不会写成小数（如 5÷2 写成 2 余 1 而不是 2.5）、四舍五入看错位（要四舍五入到 1 d.p. 看的是百分位，不是十分位）。关键词：decimal places（小数位）、multiply（乘）、divide（除）、quotient（商）、remainder（余数）、round to（四舍五入到）、d.p.（decimal place）。注意：本周只教 P4 Decimals 3.1–3.3，不教小数×小数（multiplying two decimals，不在 3.1 范围）、除以小数（dividing by a decimal）、×÷10/100/1000（P5）、百分数（percentages）、3 位小数×一位数（prefer stay at 2 d.p. operands）。"
    },
    "MATH-23": {
      examples: [
        "Rectangle area 24 cm², length 8 cm. Breadth = area ÷ length = 24 ÷ 8 = 3 cm.",
        "Square area 36 cm². Side = √36 = 6 cm (because 6 × 6 = 36).",
        "Square perimeter 20 cm. Side = perimeter ÷ 4 = 20 ÷ 4 = 5 cm.",
        "L-shape: 6 cm × 4 cm rectangle joined to 3 cm × 2 cm rectangle. Area = (6×4) + (3×2) = 24 + 6 = 30 cm².",
        "Perimeter counts only outer edges, not internal lines where rectangles join."
      ],
      gloss: "P4 学面积和周长进阶（missing side & composite）：finding one dimension of a rectangle given the other dimension and its area/perimeter, finding the length of one side of a square given its area/perimeter, finding the area and perimeter of composite figures made up of rectangles and squares。关键技能：已知面积和一边求另一边（area = length × width → 已知 area 24 cm² 和 length 8 cm，求 width：width = area ÷ length = 24 ÷ 8 = 3 cm）；已知周长和一边求另一边（perimeter = 2×(length+width) → 已知 perimeter 28 m 和 length 9 m，求 width：width = perimeter÷2 − length = 14 − 9 = 5 m）；正方形已知面积求边（area = side×side，36 = 6×6，所以 side = 6 cm）；正方形已知周长求边（perimeter = 4×side → side = perimeter÷4，20÷4 = 5 cm）；组合图形面积（L-shape / T-shape 等）可以拆分（split）成几个长方形分别算面积再相加，或用大长方形减去缺口（subtract）；周长只算外轮廓（outer perimeter），不算内部拼接线。常见错误：组合图形把内部边算进周长（should only count outer edges）、求一边时面积÷错边（dividing by the wrong side）、正方形边长当面积（confusing side with area）、拆分组合图形时漏算某一块（missing a rectangle）。关键词：area（面积）、perimeter（周长）、length（长）、width / breadth（宽）、side（边）、composite figure（组合图形）、split（拆分）、subtract（减去）、outer perimeter（外轮廓）。本周不教：三角形面积（area of triangle, P5）、圆形/半圆（circles/semicircles）、体积（volume）、cm²↔m²互换。描述图形时用文字给足数字，如 'An L-shape is made of a 6 cm × 4 cm rectangle joined to a 3 cm × 2 cm rectangle along the 3 cm side.' 让孩子能唯一确定如何拆分或相减。"
    },
    "MATH-24": {
      examples: [
        "Temperature at noon each day: Monday 30°C, Tuesday 31°C, Wednesday 29°C, Thursday 32°C, Friday 30°C.",
        "The line goes up from Monday to Tuesday (30 → 31), down to Wednesday (31 → 29), up to Thursday (29 → 32), down to Friday (32 → 30).",
        "Highest temperature: Thursday 32°C. Lowest temperature: Wednesday 29°C. Difference: 32 − 29 = 3°C."
      ],
      gloss: "P4 学表格和折线图（tables and line graphs）：completing a table from given data, reading and interpreting data from tables and line graphs。关键技能：读表格找缺失数字（read a table and find missing numbers）、把给出的数据填入空白表格（complete a blank cell from given data）、折线图读点（line graph: read data points on vertical axis for each point on horizontal axis）、找最高点/最低点（highest point / lowest point: compare all values）、判断升降趋势（increase when line goes up, decrease when line goes down）、计算差值（difference = higher value − lower value, e.g., Thursday 32°C − Wednesday 29°C = 3°C）、回答 'how much more / less'（用减法 subtraction）。常见错误：把折线两点之间的斜率当成数值（the slope between two points is NOT the value; read the point on the vertical axis）、读错横轴日期或类别（misreading the day/category on horizontal axis）、算差值用加法而不是减法（difference should be subtraction, not addition: 32 − 29 = 3, not 32 + 29）、表格填数时单位漏写或错写（missing or wrong units when completing a table, e.g., forgot to write °C or 'books'）。关键词：table（表格）、line graph（折线图）、horizontal axis（横轴）、vertical axis（纵轴）、data point（数据点）、highest（最高）、lowest（最低）、increase（上升）、decrease（下降）、difference（差值）、pattern（规律）。题目用文字描述表格和折线图，数字简单，例如 'Temperature at noon: Monday 30°C, Tuesday 31°C, Wednesday 29°C, Thursday 32°C, Friday 30°C. The line goes up from Monday to Tuesday, down to Wednesday, up to Thursday, down to Friday.' 让孩子能唯一确定最高/最低点和趋势。本周不教：饼图（pie charts，下周）、条形图作为主要新技能（bar graphs 已在 P3 第 13 周学过）、平均数/均值（mean / average）、P5/P6 数据主题（mode / median / range）。"
    },
    "MATH-25": {
      examples: [
        "40 children chose favourite sports. The pie chart shows: Football 1/2, Swimming 1/4, Basketball 1/8, Running 1/8.",
        "Which sport is most popular? Compare: 1/2 > 1/4 > 1/8. Football (1/2) is the largest slice.",
        "How many chose Football? 1/2 of 40 = 40 ÷ 2 = 20 children."
      ],
      gloss: "P4 学饼图（pie charts）：reading and interpreting data from pie charts。关键技能：识别哪一块最大/最小（which slice is the largest / smallest by comparing fractions），理解每一块是整体的几分之几（each slice is a fraction of the whole），用分数乘总数求人数（calculate the number by multiplying the total by the fraction: divide by denominator first, then multiply by numerator，如 1/2 of 40 = 40 ÷ 2 = 20，2/5 of 60 = 60 ÷ 5 × 2 = 12 × 2 = 24），验证所有分数块之和是 1（check that all fractions add up to 1: 如 1/2 + 1/4 + 1/8 + 1/8 = 4/8 + 2/8 + 1/8 + 1/8 = 8/8 = 1 ✓）。常见错误：把最大块当作全部（treating the largest slice as the whole instead of a part: 如果 Football 是 1/2，不是说 Football = 40，而是 Football = 40 ÷ 2 = 20）、分数块加起来不是 1（fractions do not sum to 1: 必须检查）、先乘分子再除分母（incorrect order: should divide by denominator first: 40 ÷ 2, not 40 × 1 ÷ 2）、比较分数时不通分（not converting to common denominator when comparing unlike fractions: 如 1/3 vs 1/4，convert to 4/12 vs 3/12，所以 1/3 > 1/4）。关键词：pie chart（饼图）、slice（一块）、fraction of the whole（整体的几分之几）、largest slice（最大块）、smallest slice（最小块）、of（的，用于分数乘法，如 1/2 of 40）、divide by denominator（除以分母）、multiply by numerator（乘以分子）。本周只用分数（fractions: 1/2, 1/4, 1/8, 1/5, 3/8 等），不用百分数（percentages）。本周不教：百分数（percentages，P5）、平均数/均值（mean / average）、360° 扇形角度计算（sector angles in degrees，除非用简单分数 1/4 = 90°，但重点是分数 of a set）。"
    },
    "MATH-26": {
      examples: [
        "Quarter turn = 1/4 of 360° = 360° ÷ 4 = 90° = right angle.",
        "∠ABC is named at B. The middle letter B is the vertex (where the two lines meet).",
        "Acute < 90°. Right = 90°. Obtuse between 90° and 180°. 35° is acute, 90° is right, 120° is obtuse."
      ],
      gloss: "P4 学角（angles）：角的名称（∠ABC 中间字母 B 是顶点 vertex）、度数（degrees）、quarter turn = 90°（1/4 圈 = 90°）、half turn = 180°（1/2 圈 = 180°）、complete turn = 360°（一整圈 = 360°）、比较角度大小（comparing angles: 75° < 90°）、锐角 acute < 90°、直角 right = 90°、钝角 obtuse between 90° and 180°。常见错误：把 quarter turn 当 45°（thinking quarter turn is 45° instead of 90°）、锐角钝角混淆（confusing acute and obtuse: acute < 90°, obtuse > 90° but < 180°）、∠ABC 时把 A 或 C 当顶点（vertex should be the middle letter B, not A or C）、把 half turn 当 90°（thinking half turn is 90° instead of 180°）。关键词：angle（角）、vertex（顶点）、degrees（度数）、quarter turn（1/4 圈）、half turn（1/2 圈）、complete turn（一整圈）、acute angle（锐角）、right angle（直角）、obtuse angle（钝角）。本周不教：triangle angle sum（三角形内角和，不在 P4 Angles 1.1–1.3 官方列表中）、reflex angle（优角）、angles on a straight line（平角的性质）。长方形和正方形都有四个 right angles = 90°。"
    },
    "MATH-27": {
      examples: [
        "Rectangle: 4 right angles = 90°, opposite sides equal. Long side 8 cm, short side 5 cm → opposite sides: 8 cm, 5 cm, 8 cm, 5 cm.",
        "Square: 4 right angles = 90°, 4 equal sides. Each side 6 cm → all four sides 6 cm.",
        "Draw on grid: rectangle 4 units by 3 units. Long side 4 units, short side 3 units. Two sides 4 units, two sides 3 units."
      ],
      gloss: "P4 学长方形和正方形（rectangle and square）：rectangle 有 4 right angles = 90° 和 opposite sides equal（对边相等）；square 有 4 right angles = 90° 和 4 equal sides（四边相等）；both have opposite sides parallel（对边平行，如果 P3 第 12 周已教平行和垂直，可以回顾）；在方格纸上画长方形和正方形（draw on a square grid: 'draw a rectangle 4 units by 3 units'，用文字描述尺寸，不需要图片文件）。常见错误：把 rectangle 当成四边相等（thinking rectangle has all sides equal instead of only opposite sides equal）、用对角线性质（using diagonal properties，官方明确 excluding diagonal properties）、混淆 rectangle 和 square 的定义（confusing rectangle and square: rectangle has opposite sides equal, square has all four sides equal）、忘记两个形状都有 4 个直角 = 90°（forgetting both shapes have four right angles = 90°）。关键词：rectangle（长方形）、square（正方形）、right angle（直角 = 90°）、opposite sides（对边）、equal sides（相等的边）、parallel（平行）、square grid（方格纸）。本周不教：diagonal properties（对角线性质，官方明确 excluding diagonal properties）、line symmetry / nets（对称/展开图）、triangle angle sum（三角形内角和）、quadrilateral interior angle sum（四边形内角和，不在官方 P4 2.1 列表中）。"
    },
    "MATH-28": {
      examples: [
        "A non-square rectangle has 2 lines of symmetry: the two midlines through opposite sides.",
        "The diagonals are NOT lines of symmetry (folding along a diagonal does not make the two halves match).",
        "A square has 4 lines of symmetry (2 midlines + 2 diagonals). An equilateral triangle has 3."
      ],
      gloss: "P4 学对称轴（line of symmetry / 对称轴）与对称图形（symmetric figure / 对称图形）：一个图形是对称的，如果一半是另一半在一条直线（对称轴）对面的镜像。正方形有 4 条对称轴（两条中线穿过对边，两条对角线）。非正方形长方形有 2 条对称轴（两条中线穿过对边的中点——不包括对角线）。等边三角形有 3 条。非等边的等腰三角形有 1 条。圆有很多条（不要发明数字）。不规则三角形 / 不规则四边形通常有 0 条。完成图形：如果方格纸有一条垂直/水平对称轴，一侧有一些单位格已着色，另一侧的匹配格必须距离对称轴相同的距离。常见错误：把长方形的对角线当对称轴、认为每个图形都有对称轴、在对称轴错误的一侧完成图形、数出不能让两半重合的折叠线。本周不教：rotational symmetry / order of rotational symmetry（旋转对称）、reflection in a point（点对称）、3D symmetry（立体对称）、nets（展开图，那是第 29 周）。"
    },
    "MATH-29": {
      examples: [
        "A row of 6 equal squares is NOT a cube net. Faces overlap when folded.",
        "A cross of 6 equal squares (1 center + 4 sides + 1 bottom) IS a cube net. Folds without overlapping.",
        "A net of 1 square + 4 triangles → square pyramid. A net of 2 triangles + 3 rectangles → triangular prism."
      ],
      gloss: "P4 学展开图（nets / 展开图）：识别立体图形的二维表示（4.1: cube 立方体, cuboid 长方体, cone 圆锥, cylinder 圆柱, prism 棱柱, pyramid 棱锥）；识别展开图（4.3: cube, cuboid, prism, pyramid 的展开图——注意 cone 和 cylinder 不在 4.3，不能发明圆锥圆柱展开图）；从展开图判断可组成的立体图形（4.4）。Cube 有 6 个正方形面，cube net 有 6 个正方形折叠后无重叠（十字形 OK，一排 6 个不 OK 因为重叠）。Cuboid 有 6 个长方形面（对面相等）。Triangular prism 有 2 个三角形面 + 3 个长方形面（共 5 面）。Square pyramid 有 1 个正方形底 + 4 个三角形面（共 5 面）。常见错误：以为任何 6 个正方形排列都是 cube net、混淆 prism（2 triangles + 3 rectangles）和 square pyramid（1 square + 4 triangles）、发明 cone/cylinder net（cone 和 cylinder 只在 4.1 二维表示，不在 4.3 展开图中）、把 2D drawing 当 net。这是最后一个官方 P4 Geometry 主题周。"
    },
    "SMATH-0": {
      examples: [
        "Jun Wei bought a book for S$80. The price increased by 10%.",
        "Increase = 10% of S$80 = S$80 ÷ 10 = S$8",
        "New price = S$80 + S$8 = S$88"
      ],
      gloss: "AEIS 中学数学试学周 / SMATH Sample Week. 本周例题：百分数增加/减少的算法（P6 Percentage 1.1–1.2）。新加坡钱币用 S$ 符号。10% increase: 先算 10% of 原价，再加到原价。20% decrease: 先算 20% of 原价，再从原价减去。如果已知部分和百分比，求整体：15 is 25% of ? → 15 ÷ 0.25 = 60 或 15 ÷ 25 × 100 = 60。不用计算器，写出算式步骤。"
    },
    "SMATH-1": {
      examples: [
        "The sports club has 120 students. Boys to girls = 3:5.",
        "Total parts = 3 + 5 = 8",
        "1 part = 120 ÷ 8 = 15",
        "Boys = 3 × 15 = 45"
      ],
      gloss: "AEIS 中学数学第 1 周 / SMATH Week 1. 本周例题：按比例分配数量（P6 Ratio 1.1–1.7）。新加坡钱币用 S$ 符号。Divide a quantity in a ratio: 先算 total parts，再算 1 part，最后算各部分。Simplest form: 约到最简（8:12 = 2:3）。Equivalent ratios: 2:3 = 4:6 = 8:12。Missing term: 4:7 = 12:□ → □ = 21。Ratio to fraction: 2:3 的第一项占总数的 2/5。不教分数或小数比（官方排除）。不用计算器，写出算式步骤。"
    },
    "SMATH-2": {
      examples: [
        "If a = 4, find the value of 3a + 2.",
        "3a = 3 × a = 3 × 4 = 12",
        "3a + 2 = 12 + 2 = 14"
      ],
      gloss: "AEIS 中学数学第 2 周 / SMATH Week 2. 本周例题：P6 代数（P6 Algebra 1.1–1.5）。3a 表示 3 × a（乘法，不是 3 + a）。化简同类项：2x + 3x = 5x。代入求值：If a = 4, then 3a + 2 = 3 × 4 + 2 = 12 + 2 = 14。解方程：2x + 3 = 11 → 2x = 11 − 3 → 2x = 8 → x = 4。不教括号（brackets）、负系数（negative coefficients）、联立方程（simultaneous equations）。不用计算器，写出算式步骤。"
    },
    "SMATH-3": {
      examples: [
        "What is 3 ÷ 1/2?",
        "3 ÷ 1/2 = 3 × 2/1 = 6",
        "(Invert and multiply: dividing by 1/2 means multiplying by 2/1)"
      ],
      gloss: "AEIS 中学数学第 3 周 / SMATH Week 3. 本周例题：P6 分数除法（P6 Fractions 1.1–1.2）。真分数除以整数：1/2 ÷ 4 = 1/2 × 1/4 = 1/8。整数除以真分数：3 ÷ 1/2 = 3 × 2/1 = 6。真分数除以真分数：1/3 ÷ 1/6 = 1/3 × 6/1 = 2。Invert and multiply（倒过来乘）：除以一个分数就是乘以这个分数的倒数。答案化简到最简分数。不教带分数除法（mixed-number ÷ mixed-number，如果不在 1.1–1.2）。不用计算器，写出算式步骤。"
    },
    "SMATH-4": {
      examples: [
        "A semicircle has radius 7 cm. Take π = 22/7.",
        "Perimeter = curved part + diameter = πr + 2r",
        "= 22/7 × 7 + 14 = 22 + 14 = 36 cm"
      ],
      gloss: "AEIS 中学数学第 4 周 / SMATH Week 4. 本周例题：P6 圆的面积和周长（P6 Area and Circumference of Circle 1.1–1.3）。圆周长 Circumference = 2πr 或 πd。圆面积 Area = πr²。半圆周长 = 弧长 + 直径（πr + 2r，不是只有 πr）。四分之一圆周长 = 弧长 + 两边（(1/2)πr + 2r）。π 的值每道题明确给出（本周全用 π = 22/7）。不教体积、球体/圆锥/圆柱公式。不用计算器，写出算式步骤。"
    },
    "SMATH-5": {
      examples: [
        "A cube has volume 64 cm³. What is the length of one edge?",
        "Volume of cube = edge³",
        "edge³ = 64, so edge = ³√64 = 4 cm (because 4 × 4 × 4 = 64)"
      ],
      gloss: "AEIS 中学数学第 5 周 / SMATH Week 5. 本周例题：P6 正方体和长方体体积（P6 Volume of Cube and Cuboid 2.1–2.5）。Volume of a cube = edge³（正方体体积 = 边³）。Volume of a cuboid = length × width × height（长方体体积 = 长 × 宽 × 高）。单位 cm³ / m³。已知体积求正方体边长：edge = ³√volume（如 V=64 cm³ → edge=³√64=4 cm）。已知体积和两边求第三边：如 V=120 cm³, l=10 cm, w=4 cm → h=120÷10÷4=3 cm。已知体积和底面积求高：h = V ÷ base area（如 V=96 cm³, base=16 cm² → h=96÷16=6 cm）。不教 cm³↔m³ 转换、球体/圆锥/圆柱。不用计算器，写出算式步骤。"
    },
    "SMATH-6": {
      examples: [
        "5 students scored 70, 80, 90, 85, 75. Find the average.",
        "Total value = 70 + 80 + 90 + 85 + 75 = 400",
        "Average = total value ÷ number of data = 400 ÷ 5 = 80",
        "Also: 4 students scored 80, 70, 90, 75. The average is 80. Find the 5th student's score.",
        "Total = average × number of data = 80 × 5 = 400",
        "5th score = 400 − (80 + 70 + 90 + 75) = 400 − 315 = 85"
      ],
      gloss: "AEIS 中学数学第 6 周 / SMATH Week 6. 本周例题：P6 数据分析 - 平均数（P6 STATISTICS: DATA ANALYSIS 1.1–1.2）。Average = total value ÷ number of data（平均数 = 总值 ÷ 数据个数）。求总值：Total = average × number of data（总值 = 平均数 × 数据个数）。求缺失值：先算总值 total = average × n，再用 total − 已知数据之和 = 缺失值。官方用词是 average，不教 mean / median / mode 作为官方名称。不用计算器，写出算式步骤。"
    },
    "SMATH-7": {
      examples: [
        "In parallelogram ABCD, ∠A = 70°. Find ∠B.",
        "Adjacent angles in a parallelogram add to 180°.",
        "∠B = 180° − 70° = 110°",
        "Also: In trapezium PQRS, PQ is parallel to SR. ∠P = 80°. Find ∠S.",
        "The two angles between the same pair of parallel sides add to 180°.",
        "∠S = 180° − 80° = 100°"
      ],
      gloss: "AEIS 中学数学第 7 周 / SMATH Week 7. 本周例题：P6 几何 - 特殊四边形求未知角（P6 GEOMETRY: Special Quadrilaterals 1.1）。Finding unknown angles without additional construction of lines（不加辅助线求未知角）。平行四边形 parallelogram：adjacent angles add to 180°（邻角和 180°）。梯形 trapezium (SG)：the two angles between the same pair of parallel sides add to 180°（同一组平行边之间的两个角和 180°）。菱形 rhombus：adjacent angles add to 180°。正方形 square / 长方形 rectangle：all angles 90°。三角形 triangle：angles sum 180°。不用计算器，写出推理步骤。"
    },
    "SMATH-8": {
      examples: [
        "Find the prime factorisation of 60.",
        "60 = 2 × 30",
        "60 = 2 × 2 × 15",
        "60 = 2 × 2 × 3 × 5"
      ],
      gloss: "AEIS 中学数学第 8 周 / SMATH Week 8. 本周例题：Sec 1 质数与质数分解（Sec 1 NUMBER AND ALGEBRA: N1.1 primes and prime factorisation）。质数 prime：只能被 1 和它自己整除的大于 1 的整数（2, 3, 5, 7, 11, 13, ...）。1 不是质数（1 is not a prime）。质数分解 prime factorisation：把合数分解成质数相乘（60 = 2 × 2 × 3 × 5）。分解方法：从最小的质数开始除，直到全部都是质数。不用计算器，写出分解步骤。"
    },
    "SMATH-9": {
      examples: [
        "Find the HCF of 12 and 18.",
        "12 = 2 × 2 × 3 = 2² × 3",
        "18 = 2 × 3 × 3 = 2 × 3²",
        "HCF = 2 × 3 = 6 (共有的质数取小次幂)",
        "Find the LCM of 12 and 18.",
        "LCM = 2² × 3² = 4 × 9 = 36 (所有质数取大次幂)"
      ],
      gloss: "AEIS 中学数学第 9 周 / SMATH Week 9. 本周例题：Sec 1 HCF 和 LCM 通过质数分解（Sec 1 NUMBER AND ALGEBRA: N1.2 HCF and LCM by prime factorisation）。HCF（highest common factor / 最大公约数）：先质数分解两个数，找共有的质因数，取最小次幂相乘。LCM（lowest common multiple / 最小公倍数）：所有质因数（共有的和独有的），取最大次幂相乘。应用：largest number of bags = HCF（最多袋数用 HCF），smallest total = LCM（最少总数用 LCM）。不用计算器，写出分解和乘法步骤。"
    },
    "SMATH-10": {
      examples: [
        "Find 6² by prime factorisation.",
        "6 = 2 × 3",
        "6² = 2² × 3² = 4 × 9 = 36 (每个次幂×2)",
        "Find √36 by prime factorisation.",
        "36 = 2² × 3²",
        "√36 = 2¹ × 3¹ = 2 × 3 = 6 (每个次幂÷2, 必须是偶数)"
      ],
      gloss: "AEIS 中学数学第 10 周 / SMATH Week 10. 本周例题：Sec 1 平方、立方、平方根和立方根通过质数分解（Sec 1 NUMBER AND ALGEBRA: N1.2 squares, cubes, square roots and cube roots by prime factorisation）。Square（平方）：每个质因数次幂×2（6 = 2 × 3 → 6² = 2² × 3² = 36）。Cube（立方）：每个质因数次幂×3（4 = 2² → 4³ = 2⁶ = 64）。Square root（平方根）：只有每个次幂都是偶数才是 perfect square，每个次幂÷2（√36 = √(2² × 3²) = 2¹ × 3¹ = 6）。Cube root（立方根）：只有每个次幂都是 3 的倍数才是 perfect cube，每个次幂÷3（³√64 = ³√(2⁶) = 2² = 4）。不用计算器，写出分解和乘法步骤。"
    },
    "SMATH-11": {
      examples: [
        "Calculate: 3 + (−5) = −2",
        "Calculate: −4 − (−6) = −4 + 6 = 2 (减负数等于加正数)",
        "Calculate: (−3) × (−4) = 12 (负负得正)",
        "(−3)² = (−3) × (−3) = 9, but −3² = −(3²) = −9"
      ],
      gloss: "AEIS 中学数学第 11 周 / SMATH Week 11. 本周例题：Sec 1 负数、整数、有理数、实数及其四则运算（Sec 1 NUMBER AND ALGEBRA: N1.3 negative numbers, integers, rational numbers, real numbers and their four operations）。加减法：3 + (−5) = −2（加负数等于减正数），−4 − (−6) = 2（减负数等于加正数）。乘除法：(−3) × (−4) = 12（负负得正），(−12) ÷ 4 = −3（负正得负）。区分 (−3)² = 9（括号内先负后平方）和 −3² = −9（先平方后负）。简单分数：−2/3 + 1/6 = −1/2。不用计算器，写出算式步骤。"
    },
    "SMATH-12": {
      examples: [
        "Arrange −5, −1, 0, 2 from smallest to largest.",
        "On a number line, numbers increase from left to right.",
        "−5 is furthest left, then −1, then 0, then 2.",
        "Answer: −5, −1, 0, 2",
        "Which is smaller, −8 or −3?",
        "−8 is to the left of −3 on the number line, so −8 is smaller than −3."
      ],
      gloss: "AEIS 中学数学第 12 周 / SMATH Week 12. 本周例题：Sec 1 数轴上的数的表示和排序（Sec 1 NUMBER AND ALGEBRA: N1.5 representation and ordering of numbers on the number line）。数轴 number line：0 右边是正数，0 左边是负数。从左到右 = 从小到大（left to right = smallest to largest）。越靠左越小（further left = smaller）。负数比较：−8 在 −3 左边，所以 −8 小于 −3（common fossil: 以为 −8 > −3 因为 8 > 3，错！正确是 −8 < −3）。排序：−5, −1, 0, 2 从小到大（按数轴从左到右顺序）。简单分数：−1/2 在 −1 和 0 中间，3/2 在 1 和 2 中间。应用：温度（−8°C 比 −3°C 更冷）、楼层（地下 = 负数）。不用计算器。"
    },
    "SMATH-13": {
      examples: [
        "Fill in the blank: −8 ___ −3",
        "Solution: On a number line, −8 is to the left of −3. Further left = smaller. So −8 < −3.",
        "Is −3 ≤ −3 true or false?",
        "Solution: −3 equals −3. The symbol ≤ means 'less than or equal to'. Since −3 equals −3, the statement is true."
      ],
      gloss: "AEIS 中学数学第 13 周 / SMATH Week 13. 本周例题：Sec 1 不等号的使用（Sec 1 NUMBER AND ALGEBRA: N1.6 use of <, >, ≤, ≥）。不等号符号：< 小于 less than，> 大于 greater than，≤ 小于或等于 less than or equal to，≥ 大于或等于 greater than or equal to。填空：−8 ___ −3 → < （因为 −8 在数轴上更靠左）。真假判断：−3 ≤ −3 是 true（−3 等于 −3，符合 less than or equal to），−3 < −3 是 false（−3 等于 −3，不符合 less than）。负数比较：−8 < −3（不是 −8 > −3，这是本周化石错误）。应用：温度（−8°C 比 −3°C 更冷，写 −8 < −3），账户余额（负数 = 欠款，−S$50 比 S$20 更小，写 −50 < 20）。不用计算器。"
    },
    "SMATH-14": {
      examples: [
        "Round 3.456 to 2 decimal places.",
        "Solution: 3.456 to 2 d.p. Look at the third decimal place: 6. Since 6 ≥ 5, round up. Answer: 3.46",
        "Estimate 48 × 21 by rounding each number first.",
        "Solution: Round 48 to 50. Round 21 to 20. Estimate: 50 × 20 = 1000."
      ],
      gloss: "AEIS 中学数学第 14 周 / SMATH Week 14. 本周例题：Sec 1 近似与估算（Sec 1 NUMBER AND ALGEBRA: N1.7 approximation and estimation）。四舍五入到小数位数 rounding off to decimal places (d.p.)：3.456 to 2 d.p. = 3.46（看第三位 6 ≥ 5，进位）；2.5 to 0 d.p. = 3（看第一位 5 ≥ 5，进位，只能是 3，不是 2）。四舍五入到有效数字 rounding off to significant figures (s.f.)：0.03450 to 2 s.f. = 0.035（leading zeros after the decimal are not significant，有效数字从第一个非零数字开始）；3482 to 2 s.f. = 3500（进位，后面补零保持位值）。估算 estimating the results of computation：先四舍五入每个数，再计算。48 × 21 ≈ 50 × 20 = 1000（不是先算 1008 再 round）。金额用新加坡元 S$。不用计算器。本周完成官方 N1。"
    },
    "SMATH-15": {
      examples: [
        "Write 1/2 : 1/3 in its simplest form.",
        "Solution: 1/2 : 1/3. Find common denominator. LCM of 2 and 3 is 6. 1/2 = 3/6, 1/3 = 2/6. So 1/2 : 1/3 = 3 : 2.",
        "Which ratio is the same as 3 : 2? (Order fossil check)",
        "Answer: 6 : 4 is the same. (Not 2 : 3, that's swapped order.)"
      ],
      gloss: "AEIS 中学数学第 15 周 / SMATH Week 15. 本周例题：Sec 1 有理数比与化简（Sec 1 NUMBER AND ALGEBRA: N2.1 ratios involving rational numbers, N2.2 writing a ratio in its simplest form）。比 ratio 可以涉及分数或小数 involving rational numbers：1/2 : 1/3, 0.4 : 0.6, 2/3 : 4。化简 writing in its simplest form：转换为相同形式（全是整数，或全是相同分母），然后除以 HCF。1/2 : 1/3 = 3 : 2（乘以 6）；0.4 : 0.6 = 4 : 6 = 2 : 3（先转整数，再除以 HCF 2）；2/3 : 4 = 2 : 12 = 1 : 6（4 = 12/3，然后 2/3 : 12/3 = 2 : 12，除以 HCF 2）。顺序 order matters：a : b 不是 b : a。本周化石：1/2 : 1/3 留为最终答案（错！应是 3 : 2）；3 : 2 写成 2 : 3（错！顺序颠倒）；2/3 : 4 写成 2 : 4（错！应是 1 : 6）。金额用新加坡元 S$。不用计算器。本周开始 N2，只教 2.1–2.2（有理数比与化简），不教 2.3 应用题（下一周）。"
    },
    "SMATH-16": {
      examples: [
        "Wei and Aisha share S$60 in the ratio 2 : 3.",
        "Total parts = 2 + 3 = 5",
        "One part = S$60 ÷ 5 = S$12",
        "Wei gets 2 parts = 2 × S$12 = S$24. Aisha gets 3 parts = 3 × S$12 = S$36"
      ],
      gloss: "AEIS 中学数学第 16 周 / SMATH Week 16. 本周例题：Sec 1 比的应用题（Sec 1 NUMBER AND ALGEBRA: N2.3 problems involving ratio）。按比分配 share a quantity in a given ratio：先算总份数 total parts，再算一份 one part，最后算各部分。S$60 in 2 : 3 → total parts = 2+3=5, one part = S$60÷5 = S$12, Wei's 2 parts = 2×S$12 = S$24, Aisha's 3 parts = 3×S$12 = S$36。已知一个量求另一个 given one quantity and the ratio, find the other：Wei has S$24, Wei : Aisha = 2 : 3 → Wei's 2 parts = S$24, one part = S$24÷2 = S$12, Aisha's 3 parts = 3×S$12 = S$36。已知差求数量 given the difference and the ratio, find a quantity：Aisha has S$12 more than Wei, ratio 2 : 3 → difference = 3−2 = 1 part = S$12, Wei's 2 parts = 2×S$12 = S$24, Aisha's 3 parts = 3×S$12 = S$36。本周化石：比 2 : 3 时，用 2/3 of total 来算 Wei 的份数 ✗（应该是 2/5 of total，因为总份数是 2+3=5）；比 Wei : Aisha = 2 : 3 时，把 Wei 的份数错给成 3 parts ✗（应该是 2 parts）。金额用新加坡元 S$。不用计算器。本周完成 N2。"
    },
    "SMATH-17": {
      examples: [
        "Express 12 as a percentage of 40.",
        "(12 ÷ 40) × 100%",
        "= 0.3 × 100%",
        "= 30%"
      ],
      gloss: "AEIS 中学数学第 17 周 / SMATH Week 17. 本周例题：Sec 1 将一个数表示为另一个数的百分比（Sec 1 NUMBER AND ALGEBRA: N3.1 expressing one quantity as a percentage of another）。A as a percentage of B = (A ÷ B) × 100%。例：12 as a percentage of 40 = (12 ÷ 40) × 100% = 0.3 × 100% = 30%。应用题：Wei has S$32, he spends S$8. Express S$8 as a percentage of S$32. Solution: (8 ÷ 32) × 100% = 0.25 × 100% = 25%。本周化石：dividing the wrong way（题目是 12 as % of 40，错误地算 40 ÷ 12，正确应该是 12 ÷ 40）；forgetting to multiply by 100（只算到 12 ÷ 40 = 0.3 就停了，忘记 × 100% 得 30%）。金额用新加坡元 S$。不用计算器。本周开始 N3。"
    },
    "SMATH-18": {
      examples: [
        "Compare 15 and 20 by percentage.",
        "15 < 20, so 15 is smaller.",
        "(15 ÷ 20) × 100% = 75%",
        "So 15 is 75% of 20. (15 is smaller, 20 is larger.)"
      ],
      gloss: "AEIS 中学数学第 18 周 / SMATH Week 18. 本周例题：Sec 1 用百分数比较两个量（Sec 1 NUMBER AND ALGEBRA: N3.2 comparing two quantities by percentage）。To compare A and B by percentage: express the smaller as a % of the larger（将较小的表示为较大的的百分比）。例：比较 15 和 20。15 < 20，所以 15 is (15 ÷ 20) × 100% = 75% of 20。15 is smaller, 20 is larger。'A is 75% of B' means A is smaller than B（A 是 B 的 75%，意味着 A < B）。应用题：Wei has S$18, Aisha has S$24. Compare by percentage. Solution: S$18 < S$24. (18 ÷ 24) × 100% = 75%. So S$18 is 75% of S$24 (Wei has less)。本周化石：comparing the wrong way（错误地说 20 is 75% of 15，应该是 15 is 75% of 20；正确顺序是 smaller ÷ larger）；treating 'A is 75% of B' as A being larger（如果 A is 75% of B，则 A 较小，B 较大，不是 A 较大）。本周只教 ≤ 100% 的情况（express the smaller as a % of the larger），不教 >100%（那是下周 3.3）。金额用新加坡元 S$。不用计算器。"
    },
    "SMATH-19": {
      examples: [
        "Express 25 as a percentage of 20.",
        "25 > 20, so the percentage will be >100%.",
        "(25 ÷ 20) × 100% = 1.25 × 100% = 125%",
        "So 25 is 125% of 20. (25 is larger, 20 is smaller. The percentage exceeds 100%.)"
      ],
      gloss: "AEIS 中学数学第 19 周 / SMATH Week 19. 本周例题：Sec 1 大于 100% 的百分数（Sec 1 NUMBER AND ALGEBRA: N3.3 percentages greater than 100%）。If A > B, then A as a percentage of B is greater than 100%（如果 A > B，则 A 占 B 的百分数大于 100%）。例：25 as a percentage of 20 = (25 ÷ 20) × 100% = 1.25 × 100% = 125%。50 as a percentage of 20 = 250%。36 as a percentage of 24 = 150%。A percentage can be more than 100% when the first quantity is larger than the second（当第一个数大于第二个数时，百分比可以超过 100%）。应用题：Wei has S$36, Aisha has S$24. Express Wei's amount as a percentage of Aisha's. Solution: S$36 > S$24. (36 ÷ 24) × 100% = 1.5 × 100% = 150%. So S$36 is 150% of S$24 (Wei has more)。本周化石：thinking a percentage cannot exceed 100%（认为百分数不能超过 100%，错！当第一个数大于第二个数时，百分数可以大于 100%）；writing the inverted ≤100% value instead（如 25 of 20 错误地写成 80%，应该是 125%）。第 17–18 周教 ≤100% 的情况，本周教 >100%。金额用新加坡元 S$。不用计算器。"
    },
    "SMATH-20": {
      examples: [
        "Increase 80 by 10%. Solution: 10% of 80 = 8.",
        "New value = 80 + 8 = 88",
        "A rate from 40% to 50%: percentage-point increase = 50% − 40% = 10 percentage points.",
        "(This is NOT a 10% increase. A 10% increase of 40% would be 44%, not 50%.)"
      ],
      gloss: "AEIS 中学数学第 20 周 / SMATH Week 20. 本周例题：Sec 1 用百分数增减数量与百分点（Sec 1 NUMBER AND ALGEBRA: N3.4 increasing/decreasing a quantity by a given percentage, including concept of percentage point）。Increase by r%: 先算 r% of 原值，再加。例：80 increased by 10% = 10% of 80 = 8，80 + 8 = 88（或 80 × 1.1 = 88）。Decrease by r%: 先算 r% of 原值，再减。例：80 decreased by 10% = 10% of 80 = 8，80 − 8 = 72（或 80 × 0.9 = 72）。Percentage point（百分点，官方术语）：a change from 40% to 50% is 10 percentage points（从 40% 到 50% 是 10 个百分点），NOT a 10% increase（不是 10% 的增长，因为 10% increase of 40% would be 44%）。应用题：A price of S$60 is increased by 20%. What is the new price? Solution: 20% of S$60 = 12. New price = S$60 + S$12 = S$72。本周化石：adding the percentage value instead of the percentage of the quantity（80 increased by 10% 错误地写成 90，应该是 88）；treating a percentage-point change as a percentage increase（40% → 50% 错误地说是 10% 增长，应该是 10 个百分点的增长）。不用计算器，写出算式步骤。"
    },
    "SMATH-21": {
      examples: [
        "After a 20% increase, a price is S$72. Find the original price.",
        "Solution: 72 = original × 1.20, so original = 72 ÷ 1.20 = S$60",
        "After a 20% decrease, a price is S$64. Find the original price.",
        "Solution: 64 = original × 0.80, so original = 64 ÷ 0.80 = S$80"
      ],
      gloss: "AEIS 中学数学第 21 周 / SMATH Week 21. 本周例题：Sec 1 逆向百分数（Sec 1 NUMBER AND ALGEBRA: N3.5 reverse percentages）。Reverse percentages: given the final value after a percentage increase or decrease, find the original value（已知百分数增减后的值，求原始值）。After an increase of r%, new = original × (1 + r/100), so original = new ÷ (1 + r/100)（增加 r% 后，新值 = 原值 × (1 + r/100)，所以原值 = 新值 ÷ (1 + r/100)）。例：After a 20% increase the price is S$72. Original = 72 ÷ 1.20 = S$60。After a decrease of r%, new = original × (1 − r/100), so original = new ÷ (1 − r/100)（减少 r% 后，新值 = 原值 × (1 − r/100)，所以原值 = 新值 ÷ (1 − r/100)）。例：After a 20% decrease the price is S$64. Original = 64 ÷ 0.80 = S$80。本周化石：subtracting r% of the NEW amount instead of dividing（从新值减去百分数而不是除以因数：72 after 20% increase 错误地算 72 − 14.4 = 57.6，应该是 72 ÷ 1.20 = 60）；adding r% of the new amount after a decrease（64 after 20% decrease 错误地算 64 + 12.8 = 76.8，应该是 64 ÷ 0.80 = 80）。不用计算器，写出算式步骤。"
    },
    "SMATH-22": {
      examples: [
        "Express 15 as a percentage of 60. Solution: (15 ÷ 60) × 100% = 25%",
        "Increase S$80 by 10%. Solution: 10% of 80 = 8, so S$80 + S$8 = S$88",
        "After 20% increase, price is S$72. Original = 72 ÷ 1.20 = S$60",
        "40% to 50% is 10 percentage points (not 25%)"
      ],
      gloss: "AEIS 中学数学第 22 周 / SMATH Week 22. 本周例题：Sec 1 百分数综合应用（Sec 1 NUMBER AND ALGEBRA: N3.6 problems involving percentages）。混合使用 3.1–3.5 技能：3.1 express A as % of B（15 of 60 = 25%），3.2 compare by %（80 is 160% of 50），3.3 % > 100（125% of 80 = 100），3.4 increase/decrease（S$80 + 10% = S$88; 40% → 50% is 10 percentage points, not 25%），3.5 reverse（72 after 20% increase, original = 72 ÷ 1.20 = 60）。本周化石：treating reverse as &quot;subtract r% of new&quot;（72 − 14.4 = 57.6 错，应该 72 ÷ 1.20 = 60）；percentage point as relative %（40% → 50% 说&quot;增加 25%&quot;错，应该说&quot;10 percentage points&quot;）；adding % as raw number（80 + 10 = 90 错，应该 80 + 10% of 80 = 88）；混淆&quot;A is 20% of B&quot;和&quot;A is 20% more than B&quot;。本周完成 N3，下周教 N4 rate and speed。不用计算器，写出算式步骤。"
    },
    "SMATH-23": {
      examples: [
        "90 pages in 3 hours. Average rate = 90 ÷ 3 = 30 pages/h",
        "120 km in 2 h. Speed = 120 ÷ 2 = 60 km/h",
        "60 km at 60 km/h (time 1 h), then 60 km at 30 km/h (time 2 h). Total 120 km in 3 h. Average speed = 120 ÷ 3 = 40 km/h (not 45 km/h, which is the mean of 60 and 30)"
      ],
      gloss: "AEIS 中学数学第 23 周 / SMATH Week 23. 本周例题：Sec 1 平均速率、速度、匀速和平均速度（Sec 1 NUMBER AND ALGEBRA: N4.1 concepts of average rate, speed, constant speed and average speed）。Average rate = total quantity ÷ total time（平均速率 = 总量 ÷ 总时间，如 90 pages in 3 h → 30 pages/h）。Speed = distance ÷ time（速度 = 路程 ÷ 时间，如 120 km in 2 h → 60 km/h）。Constant speed = the same speed for the whole journey（匀速 = 全程保持同一速度）。Average speed = total distance ÷ total time（平均速度 = 总路程 ÷ 总时间，不是两个速度的平均数）。例：60 km at 60 km/h then 60 km at 30 km/h：times 1 h + 2 h = 3 h，average speed = 120 ÷ 3 = 40 km/h，不是 (60+30)÷2 = 45。本周化石：taking the mean of two speeds（把两个速度求平均数，如 40 和 60 错误地算 50，应该是 total distance ÷ total time）；using one part of journey as whole（把旅程一段当全程）；mixing rate units（混淆速率单位）。本周只教 N4 的 4.1（concepts），不教 4.2 conversion of units（单位换算，如 km/h ↔ m/s）和 4.3 problems involving rate and speed（速率和速度应用题），那些是后续内容。不用计算器，写出算式步骤。"
    },
    "SMATH-24": {
      examples: [
        "18 km/h = 18 × 5/18 = 5 m/s",
        "36 km/h = 36 × 5/18 = 10 m/s. 72 km/h = 72 × 5/18 = 20 m/s",
        "10 m/s = 10 × 18/5 = 36 km/h. 5 m/s = 5 × 18/5 = 18 km/h"
      ],
      gloss: "AEIS 中学数学第 24 周 / SMATH Week 24. 本周例题：Sec 1 速率单位换算（Sec 1 NUMBER AND ALGEBRA: N4.2 conversion of units, e.g. km/h to m/s）。1 km = 1000 m, 1 h = 3600 s。km/h → m/s: multiply by 1000/3600 = 5/18（如 18 km/h = 18 × 5/18 = 5 m/s，36 km/h = 10 m/s，72 km/h = 20 m/s，54 km/h = 15 m/s）。m/s → km/h: multiply by 3600/1000 = 18/5（如 10 m/s = 10 × 18/5 = 36 km/h，5 m/s = 18 km/h）。本周化石：multiplying by 18/5 when converting km/h → m/s（方向错误，应该是 × 5/18）；multiplying by 5/18 when converting m/s → km/h（方向错误，应该是 × 18/5）；treating 1 hour as 60 seconds（把 1 小时当 60 秒，应该是 3600 秒）；forgetting the 1000（忘记 1 km = 1000 m）。第 23 周已完成 4.1（concepts of average rate, speed, constant speed and average speed），本周只教 4.2（conversion of units），第 25 周教 4.3（problems involving rate and speed）。不用计算器，写出算式步骤。"
    },
    "SMATH-25": {
      examples: [
        "60 km at 60 km/h (time 1 h), then 60 km at 30 km/h (time 2 h). Total 120 km in 3 h. Average speed = 120 ÷ 3 = 40 km/h (not 45 km/h, which is the mean of 60 and 30)",
        "18 km/h = 5 m/s. In 10 seconds: distance = 5 × 10 = 50 m (not 18 × 10 = 180 m, and not 18 × 18/5 × 10 = 648 m)"
      ],
      gloss: "AEIS 中学数学第 25 周 / SMATH Week 25. 本周例题：Sec 1 速率和速度应用题（Sec 1 NUMBER AND ALGEBRA: N4.3 problems involving rate and speed）。混合使用已学技能 mix skills 4.1–4.2：Average rate = total quantity ÷ total time。Speed = distance ÷ time; time = distance ÷ speed; distance = speed × time。Average speed = total distance ÷ total time（不是两个速度的平均数；例：60 km at 60 km/h 用时 1 h，60 km at 30 km/h 用时 2 h，total 120 km in 3 h，average speed = 120 ÷ 3 = 40 km/h，不是 (60+30)÷2 = 45）。Convert km/h ↔ m/s when needed（当应用题需要统一单位时，先换算再解题：km/h → m/s multiply by 5/18；例：18 km/h = 5 m/s，in 10 s, distance = 5 × 10 = 50 m，不是 18 × 10 = 180 m）。本周化石：taking the mean of two speeds（把两个速度求平均数而不是用总路程 ÷ 总时间）；converting the wrong direction then solving（换算方向错误然后解题：18 km/h 问 10 秒走多远，错误地用 18 × 18/5 = 64.8 m/s 然后 64.8 × 10 = 648 m，正确应该是 18 × 5/18 = 5 m/s 然后 5 × 10 = 50 m）；using one part of journey as whole（把旅程一段当全程）；mixing units without converting（单位混用不换算）。本周完成 N4（4.1–4.3）。不用计算器，写出算式步骤。"
    },
    "SMATH-26": {
      examples: [
        "A number is n. 3 more than n is n + 3 (not 3n).",
        "A number is n. Twice n is 2n or 2 × n (not n + 2).",
        "Wei has n dollars. He spends S$5. Amount left = n − 5 (not 5 − n)."
      ],
      gloss: "AEIS 中学数学第 26 周 / SMATH Week 26. 本周例题：Sec 1 用字母表示数（Sec 1 NUMBER AND ALGEBRA: N5.1 using letters to represent numbers）。A letter stands for a number（字母代表一个数）。3 more than n is n + 3（不是 3n）。5 less than n is n − 5（不是 5 − n）。Twice n is 2n or 2 × n（不是 n + 2）。Half of n is n ÷ 2 or n/2（不是 n − 2）。Short \&quot;let the number be n\&quot; phrases are 5.1（短的&quot;设这个数为 n&quot;属于 5.1）。本周不用 ab, a², a³ 或括号展开（那些是 5.2 interpreting notations）。本周化石：writing 3n when the story is \&quot;3 more than n\&quot;（当应用题说&quot;n 多 3&quot;时错误地写 3n，正确应该是 n + 3）；writing n + 3 when the story is \&quot;3 times n\&quot;（当应用题说&quot;n 的 3 倍&quot;时错误地写 n + 3，正确应该是 3n）；writing 3 − n when the story is \&quot;n minus 3\&quot;（当应用题说&quot;n 减 3&quot;时错误地写 3 − n，正确应该是 n − 3）；treating the letter as a unit, not a number（把字母当单位而不是数）。本周只教写出表达式 write the expression，本周不教代入数值求值 substitute a value（那是 5.3 evaluation，后续周次内容）。第 23–25 周已完成 N4，本周开始 N5，只教 5.1 using letters to represent numbers。本周不教 5.2 notations（下周内容）。不用计算器，写出算式步骤。"
    },
    "SMATH-27": {
      examples: [
        "3y means 3 × y (not 3 + y). Example: If y = 4, then 3y = 3 × 4 = 12, not 3 + 4 = 7.",
        "a² means a × a (not 2a). Example: If a = 5, then a² = 5 × 5 = 25, not 2 × 5 = 10.",
        "3(x + y) means 3 × (x + y) (not 3x + y). Example: If x = 2 and y = 3, then 3(x + y) = 3 × (2 + 3) = 3 × 5 = 15, not 3 × 2 + 3 = 9."
      ],
      gloss: "AEIS 中学数学第 27 周 / SMATH Week 27. 本周例题：Sec 1 解读代数符号（Sec 1 NUMBER AND ALGEBRA: N5.2 interpreting notations）。官方 5.2 wording（逐字引用）：'• ab as a × b • a/b as a ÷ b or a × 1/b • a² as a × a, a³ as a × a × a, a²b as a × a × b • 3y as y + y + y or 3 × y • 3(x + y) as 3 × (x + y) • (3 + y)/5 as (3 + y) ÷ 5 or 1/5 × (3 + y)'。ab means a × b（不是 a + b）。3y means 3 × y（不是 3 + y）。a² means a × a（不是 2a）。a³ means a × a × a（不是 3a）。a²b means a × a × b。3(x + y) means 3 × (x + y)（不是 3x + y；3x + y 是不同的表达式，它是 3 × x plus y，不等于 3 multiplied by the whole sum (x + y)。3x + 3y 是 expansion 5.8 后续内容，本周不教）。(3 + y)/5 means (3 + y) ÷ 5。本周化石：reading 3y as 3 + y（把 3y 读成 3 + y，正确是 3 × y）；reading ab as a + b（把 ab 读成 a + b，正确是 a × b）；reading a² as 2a（把 a² 读成 2a，正确是 a × a）；reading a³ as 3a（把 a³ 读成 3a，正确是 a × a × a）；reading 3(x + y) as 3x + y (dropping the bracket)（把 3(x + y) 读成 3x + y，丢掉括号，正确是 3 × (x + y)）。本周只教 what each notation means（本周只教每个符号代表什么），本周不教代入数值求值 substitute values（那是 5.3 evaluation，下周内容）。第 26 周已完成 5.1（using letters to represent numbers），本周只教 5.2 interpreting notations。下周 5.3 evaluation。不用计算器，写出算式步骤。"
    },
    "SMATH-28": {
      examples: [
        "If a = 3: 2a = 2 × 3 = 6 (not 2 + 3 = 5). Fossil: evaluating 2a as 2 + a.",
        "If a = 3: a² = 3 × 3 = 9 (not 2 × 3 = 6). Fossil: evaluating a² as 2a.",
        "If a = 3: 3(a + 2) = 3 × (3 + 2) = 3 × 5 = 15 (not 3 × 3 + 2 = 11). Fossil: evaluating 3(a + 2) as 3a + 2, dropping the bracket."
      ],
      gloss: "AEIS 中学数学第 28 周 / SMATH Week 28. 本周例题：Sec 1 代数式求值（Sec 1 NUMBER AND ALGEBRA: N5.3 evaluation of algebraic expressions and formulae）。官方 5.3 wording（逐字引用）：'evaluation of algebraic expressions and formulae'。本周方法：Substitute a given number for the letter（代入给定数值，结合 Week 27 的 notation meanings）。If a = 3: 2a = 2 × 3 = 6（不是 2 + 3 = 5）; 2a + 1 = 2 × 3 + 1 = 7; a² = 3 × 3 = 9（不是 2 × 3 = 6）; 3(a + 2) = 3 × (3 + 2) = 3 × 5 = 15（不是 3 × 3 + 2 = 11）; a³ = 3 × 3 × 3 = 27; 5a − 2 = 5 × 3 − 2 = 13. If x = 4, y = 2: xy = 4 × 2 = 8; x + y = 4 + 2 = 6; 3(x + y) = 3 × (4 + 2) = 18; x² = 4 × 4 = 16. 本周化石：evaluating 2a as 2 + a（a=3 → 5 instead of 6）；evaluating a² as 2a（a=3 → 6 instead of 9）；evaluating 3(a + 2) as 3a + 2（a=3 → 11 instead of 15，dropping the bracket）。第 26 周已完成 5.1（using letters to represent numbers），第 27 周已完成 5.2（interpreting notations），本周只教 5.3 evaluation（代数式求值）。本周不教 5.4 translation，5.5 nth term，5.6–5.8 simplifying。用友好的整数 friendly integers。不用计算器，写出算式步骤。"
    },
    "SMATH-29": {
      examples: [
        "Wei has n dollars, spends S$5 → n − 5 (not n + 5). Fossil: writing n + 5 when spending.",
        "k tickets at S$3 each → 3k (not k + 3). Fossil: treating \"each\" as +, not ×.",
        "n books at S$4 each plus S$2 postage → 4n + 2. Fossil: writing 4n − 2 or 4 + n + 2."
      ],
      gloss: "AEIS 中学数学第 29 周 / SMATH Week 29. 本周例题：Sec 1 将现实情境翻译为代数式（Sec 1 NUMBER AND ALGEBRA: N5.4 translation of simple real-world situations into algebraic expressions）。官方 5.4 wording（逐字引用）：'translation of simple real-world situations into algebraic expressions'。本周方法：Turn a short real-world sentence into an expression（将现实情境句子转化为代数式），using Week 26–27 notation。Wei has n dollars and spends S$5 → n − 5（spending 是减，不是加，不是 n + 5）。k tickets at S$3 each → 3k（\&quot;each\&quot; 是乘，不是加，不是 k + 3）。n years old, in 4 years → n + 4。Rectangle length x width 3 perimeter → 2(x + 3) or 2x + 6，pick ONE（本周优先 2(x + 3) as \&quot;twice the sum\&quot;；2x+6 is 5.6/5.8 simplifying 后续内容）。n books at S$4 each plus S$2 postage → 4n + 2（books 4n，plus postage S$2，so 4n + 2）。本周化石：writing 3k when the story is \&quot;S$3 more than k\&quot;（当应用题说&quot;比 k 多 S$3&quot;时错误地写 3k，正确应该是 k + 3）；writing n + 5 when he spends S$5（当他花掉 S$5 时错误地写 n + 5，正确应该是 n − 5）；writing 2x + 3 for perimeter instead of 2(x + 3)（周长错误地写 2x + 3，正确应该是 2(x + 3)）；treating \&quot;each\&quot; as + not ×（把&quot;每个&quot;当作加法而不是乘法）。第 26–28 周已完成 5.1–5.3（using letters to represent numbers、interpreting notations、evaluation），本周只教 5.4 translation（生活情境写成代数式）。本周不教 5.5 nth term（第 n 项），5.6–5.8 simplifying（化简代数式）。Friendly letters。No calculator。金额：新加坡元 S$（money in Singapore dollars S$），never 美元。写出算式步骤。"
    },
    "SMATH-30": {
      examples: [
        "3, 5, 7, 9, … → nth term = 2n + 1 (not n + 2). Check: n=1 → 3 ✓, n=2 → 5 ✓. Fossil: n + 2 gives n=2 → 4 ✗.",
        "2, 4, 6, 8, … → nth term = 2n. Check: n=1 → 2 ✓, n=2 → 4 ✓.",
        "4, 7, 10, 13, … → nth term = 3n + 1. Check: n=1 → 4 ✓, n=2 → 7 ✓."
      ],
      gloss: "AEIS 中学数学第 30 周 / SMATH Week 30. 本周例题：Sec 1 找第 n 项的代数式（Sec 1 NUMBER AND ALGEBRA: N5.5 recognising and representing patterns/relationships by finding an algebraic expression for the nth term）。官方 5.5 wording（逐字引用）：'recognising and representing patterns/relationships by finding an algebraic expression for the nth term'。本周方法：Find the nth term of a simple linear sequence（找简单线性数列的第 n 项）。Common difference d, first term a: nth term = a + (n − 1)d, then simplify to pn + q. 2, 4, 6, 8, … → nth term = 2n（公差 d = 2，第一项 a = 2，nth term = 2 + (n − 1) × 2 = 2n）。3, 5, 7, 9, … → nth term = 2n + 1（公差 d = 2，第一项 a = 3，nth term = 3 + (n − 1) × 2 = 2n + 1，不是 n + 2）。Check every formula at n=1 and n=2（在录入每个公式前检查 n=1 和 n=2）。本周化石：writing n + 2 for 3, 5, 7, 9（错误地写 n + 2，这只是公差，不是第 n 项；正确应该是 2n + 1，因为 n=1 → 3，n=2 → 5，而 n + 2 在 n=2 时给出 4 不是 5）；using the first term as the formula (always 3)（把第一项当作公式，永远是 3）；writing 2n for 3, 5, 7, 9（错误地写 2n，n=1 → 2 不是 3）；treating n as \&quot;the next term\&quot; not the position（把 n 当作&quot;下一项&quot;而不是位置）。第 26–29 周已完成 5.1–5.4，本周只教 5.5 nth term（找第 n 项）。本周不教 5.6 addition and subtraction of linear expressions，5.7 simplification，5.8 brackets and common factors。Friendly integers。No calculator。写出算式步骤和检验。"
    },
    "SMATH-31": {
      examples: [
        "(3x + 4) − (x + 1) = 3x + 4 − x − 1 = 2x + 3. Fossil: 2x + 4 or 2x + 5 (只减第一项或忘记改符号).",
        "(2x + 3) + (x + 5) = 3x + 8.",
        "(4x + 6) − (2x − 3) = 4x + 6 − 2x + 3 = 2x + 9. Fossil: 2x + 3 (忘记 −(−3) = +3)."
      ],
      gloss: "AEIS 中学数学第 31 周 / SMATH Week 31. 本周例题：Sec 1 一次式加减（Sec 1 NUMBER AND ALGEBRA: N5.6 addition and subtraction of linear expressions）。官方 5.6 wording（逐字引用）：'addition and subtraction of linear expressions'。本周方法：Add or subtract two linear expressions by collecting like terms（通过合并同类项来加减两个一次式）。Change the sign of every term in the expression after a minus（减法时，改变减号后面每一项的符号）。(2x + 3) + (x + 5) = 3x + 8（加法：直接合并）。(3x + 4) − (x + 1) = 3x + 4 − x − 1 = 2x + 3（减法：改变第二个括号中每一项的符号）。(4x + 6) − (2x − 3) = 4x + 6 − 2x + 3 = 2x + 9（关键：−(−3) = +3）。本周化石：subtracting only the first term（只减第一项）：(3x + 4) − (x + 1) → 2x + 4 or 2x + 5（错误，应该是 2x + 3）；forgetting to change the sign of the second term after a minus（忘记改变第二项符号）：(4x + 6) − (2x − 3) → 2x + 3（错误，应该是 2x + 9，因为 −(−3) = +3）；adding coefficients of unlike terms（把不同类项的系数相加）：x + 3 → 4x。第 26–30 周已完成 5.1–5.5，本周只教 5.6 addition and subtraction（一次式加减）。本周不教 5.7 simplification such as −2(3x − 5) + 4x（展开括号化简），5.8 use of brackets and extraction of common factors（括号的使用和提取公因数）。Friendly integers。No calculator。写出算式步骤。"
    },
    "SMATH-32": {
      examples: [
        "−2(3x − 5) + 4x = −6x + 10 + 4x = −2x + 10. Fossil: −6x − 10 or −2x − 10 (忘记 −2 × (−5) = +10).",
        "2(3x − 5) + 4x = 6x − 10 + 4x = 10x − 10.",
        "3(x + 2) − 2(x − 1) = 3x + 6 − 2x + 2 = x + 8. 先展开两个括号，再合并。"
      ],
      gloss: "AEIS 中学数学第 32 周 / SMATH Week 32. 本周例题：Sec 1 一次式化简（Sec 1 NUMBER AND ALGEBRA: N5.7 simplification of linear expressions such as −2(3x − 5) + 4x）。官方 5.7 wording（逐字引用）：'simplification of linear expressions such as −2(3x − 5) + 4x ; 2x/3 − 3(x − 5)/2'。本周方法：Expand the bracket, then collect like terms（展开括号，然后合并同类项）。−2(3x − 5) + 4x = −6x + 10 + 4x = −2x + 10（先展开 −2 乘以括号里的每一项：−2 × 3x = −6x，−2 × (−5) = +10；再合并 −6x + 4x = −2x）。2(3x − 5) + 4x = 6x − 10 + 4x = 10x − 10（2 × 3x = 6x，2 × (−5) = −10；6x + 4x = 10x）。3(x + 2) − 2(x − 1) = 3x + 6 − 2x + 2 = x + 8（展开两个括号：3(x + 2) = 3x + 6，−2(x − 1) = −2x + 2；合并：3x − 2x = x，6 + 2 = 8）。4x − 2(3x − 5) = 4x − 6x + 10 = −2x + 10（展开：−2 × 3x = −6x，−2 × (−5) = +10；合并：4x − 6x = −2x）。本周化石：−2(3x − 5) = −6x − 5 or −6x − 10（错误：忘记负负得正 negative times negative is positive，正确是 −6x + 10，因为 −2 × (−5) = +10）；4x − 2(3x − 5) = 4x − 6x − 10（错误：忘记 −2 × (−5) = +10，写成了 −10，正确应该是 4x − 6x + 10 = −2x + 10）；dropping the sign on the second term inside the bracket（漏掉括号里第二项的符号）。第 26–31 周已完成 5.1–5.6，本周只教 5.7 simplification（一次式化简：展开括号再合并）。本周不教 5.8 use of brackets and extraction of common factors（括号的使用和提取公因数，下周内容）。Friendly integers。No calculator。写出算式步骤。"
    },
    "SMATH-33": {
      examples: [
        "3x + 6 = 3(x + 2). Check: 3(x + 2) = 3x + 6 ✓. Fossil: 3(x + 6) ✗ (only factored x term).",
        "4x + 10 = 2(2x + 5). HCF = 2, not 4.",
        "5x − 15 = 5(x − 3). Keep the minus. Fossil: 5(x + 3) ✗.",
        "2x + 2y = 2(x + y). Check: 2(x + y) = 2x + 2y ✓."
      ],
      gloss: "AEIS 中学数学第 33 周 / SMATH Week 33. 本周例题：Sec 1 提取公因式（Sec 1 NUMBER AND ALGEBRA: N5.8 use of brackets and extraction of common factors）。官方 5.8 wording（逐字引用）：'use of brackets and extraction of common factors'。本周方法：Extract the highest common factor and write with a bracket（提取最大公因数，用括号写出来）。3x + 6 = 3(x + 2)（HCF of 3x and 6 is 3: 3x ÷ 3 = x, 6 ÷ 3 = 2）。4x + 10 = 2(2x + 5)（HCF of 4x and 10 is 2: 4x ÷ 2 = 2x, 10 ÷ 2 = 5）。6x + 9 = 3(2x + 3)（HCF of 6x and 9 is 3）。5x − 15 = 5(x − 3)（HCF of 5x and 15 is 5; keep the minus sign: −15 ÷ 5 = −3）。2x + 2y = 2(x + y)（HCF of 2x and 2y is 2）。ax + ay = a(x + y)（HCF of ax and ay is a）。Check by expanding the bracket（检验：展开括号，看是否回到原式）：3(x + 2) = 3x + 6 ✓。本周化石：factoring only the x term: 3x + 6 = 3(x + 6)（错误：只分解了 x 项，忘记 6 也要除以 3，正确是 3(x + 2)）；writing 3x + 6 = 3x(1 + 6)（错误：把 3 只放在 x 上）；taking a factor that is not common: 4x + 10 = 4(x + 10/4)（错误：4 不是 10 的因数，正确是 2(2x + 5)）；dropping the sign: 5x − 15 = 5(x + 3)（错误：丢掉负号，正确是 5(x − 3)）。第 26–32 周已完成 5.1–5.7，本周只教 5.8 extraction of common factors（提取公因式）。本周完成 N5（5.1–5.8）。Friendly integers。No calculator。写出算式步骤。"
    },
    "SMATH-34": {
      examples: [
        "Point A at (3, 2): x = 3 (horizontal), y = 2 (vertical). Fossil: (3, 2) read as x = 2, y = 3 ✗.",
        "Point B at (5, 0): on the x-axis (y = 0). Fossil: (5, 0) on the y-axis ✗.",
        "Point C at (0, 4): on the y-axis (x = 0). Fossil: (0, 4) on the x-axis ✗.",
        "Origin at (0, 0): both x and y are zero."
      ],
      gloss: "AEIS 中学数学第 34 周 / SMATH Week 34. 本周例题：Sec 1 平面直角坐标系（Sec 1 NUMBER AND ALGEBRA: N6.1 Cartesian coordinates in two dimensions）。官方 6.1 wording（逐字引用）：'Cartesian coordinates in two dimensions'。本周方法：x-axis is horizontal（横轴），y-axis is vertical（纵轴），origin is (0, 0)（原点在 (0, 0)），ordered pair (x, y) with x first then y（有序对：先 x 后 y，x 是横坐标 horizontal coordinate，y 是纵坐标 vertical coordinate）。Read a plotted point: look at the x value first (horizontal), then the y value (vertical)（读点的坐标：先看横坐标 x，再看纵坐标 y）。Plot a given point: from the origin, move x units horizontally first, then y units vertically（画点：从原点开始，先横移 x 单位，再竖移 y 单位）。Positive x is to the right, negative x is to the left（正 x 向右，负 x 向左）。Positive y is up, negative y is down（正 y 向上，负 y 向下）。On the x-axis means y = 0（在 x 轴上意味着 y = 0，例如 (5, 0) not (0, 5)）。On the y-axis means x = 0（在 y 轴上意味着 x = 0，例如 (0, 4) not (4, 0)）。本周化石：swapping x and y: reading (3, 2) as (2, 3)（错误：颠倒 x 和 y，把 (3, 2) 读成 (2, 3)。正确：ordered pair (x, y) with x first then y，所以 (3, 2) 是 x = 3, y = 2）；placing (4, 0) on the y-axis（错误：把 (4, 0) 画在 y 轴上，正确：on the x-axis means y = 0, so (4, 0) is on the x-axis）；placing (0, 5) on the x-axis（错误：把 (0, 5) 画在 x 轴上，正确：on the y-axis means x = 0, so (0, 5) is on the y-axis）。第 26–33 周已完成 N5（5.1–5.8），本周只教 N6.1 Cartesian coordinates in two dimensions（平面直角坐标系）。本周不教 N6.2–6.5（ordered-pair graphs as a relationship、y=ax+b、graphs of linear functions、gradient）。Friendly integers。No calculator。写出算式步骤。"
    },
    "SMATH-35": {
      examples: [
        "Table: hours (1, 2, 3) and distance (4, 8, 12) km. Ordered pairs: (1, 4), (2, 8), (3, 12). NOT (4, 1) ✗.",
        "Set {(1, 8), (2, 16), (3, 24)}: the pair for 2 is (2, 16), NOT (16, 2) ✗.",
        "Table: tickets (1, 2, 3) and cost S$ (5, 10, 15). Pair for 2 tickets: (2, 10). NOT (10, 2) ✗.",
        "Graph of set represents relationship between two variables. NOT y = ax + b this week."
      ],
      gloss: "AEIS 中学数学第 35 周 / SMATH Week 35. 本周例题：Sec 1 有序对的集合的图像表示两个量之间的关系（Sec 1 NUMBER AND ALGEBRA: N6.2 graph of a set of ordered pairs as a representation of a relationship between two variables）。官方 6.2 wording（逐字引用）：'graph of a set of ordered pairs as a representation of a relationship between two variables'。本周方法：A table gives a set of ordered pairs (x, y)（表格给出一组有序对）。The first variable is x, the second variable is y（第一个量是 x，第二个量是 y）。Write each pair as (x, y) with x first, then y（写出每个对 (x, y)，x 在前，y 在后）。These points can be plotted on a graph（这些点可以画在图像上）。The set of points represents a relationship between two variables（这组点表示两个量之间的关系）。Example: table hours (1, 2, 3) and distance (4, 8, 12) → ordered pairs (1, 4), (2, 8), (3, 12)（例：表格 hours (1, 2, 3) 和 distance (4, 8, 12) → 有序对 (1, 4), (2, 8), (3, 12)）。Read pairs from a graph or table（从图像或表格读出有序对）。Choose which table matches a given set of points（选择哪个表格与给定的点集匹配）。Choose which ordered pair belongs to a given relationship table（选择哪个有序对属于给定的关系表格）。本周化石：swapping the two variables when writing ordered pairs from a table (tickets, cost) → writing (cost, tickets) instead of (tickets, cost)（从表格写有序对时颠倒两个量：(tickets, cost) 写成 (cost, tickets)）；or plotting (y, x) instead of (x, y)（或画点时把 (x, y) 画成 (y, x)）。金额用新元 S$。不用计算器。第 34 周已完成 N6.1，本周只教 N6.2。本周不教 N6.3–6.5（linear functions y=ax+b、graphs of linear functions、gradient）。"
    },
    "SMATH-36": {
      examples: [
        "y = 5x + 3: coefficient of x is a = 5, constant term is b = 3. NOT a = 3, b = 5 ✗.",
        "y = 4x + 1, find y when x = 2: y = 4(2) + 1 = 8 + 1 = 9.",
        "y = 8x + 5, find x when y = 29: 29 = 8x + 5 → 24 = 8x → x = 3.",
        "Rearrange y − 3 = 2x: y = 2x + 3. Which is y = ax + b? y = 2x + 7 ✓. y = x² ✗."
      ],
      gloss: "AEIS 中学数学第 36 周 / SMATH Week 36. 本周例题：Sec 1 一次函数 y = ax + b（Sec 1 NUMBER AND ALGEBRA: N6.3 linear functions y = ax + b）。官方 6.3 wording（逐字引用）：'linear functions y = ax + b'。本周方法：Recognise the form y = ax + b（认识形式 y = ax + b）。a is the coefficient of x, b is the constant term（a 是 x 的系数，b 是常数项）。Find y when x is given by substitution（给定 x 求 y，代入）：y = 5x + 2, when x = 3, y = 5(3) + 2 = 17. Find x when y is given by solving（给定 y 求 x，解方程）：y = 4x + 7, when y = 15, substitute 15 = 4x + 7, subtract 7: 8 = 4x, divide by 4: x = 2. Rearrange a simple one-step equation（简单一步改写）：y − 3 = 2x → y = 2x + 3. Recognise which is in the form y = ax + b（识别哪个是 y = ax + b 的形式）：y = 2x + 7 ✓, y = x² ✗, y = 3/x ✗. Friendly integers. 金额用新元 S$ 或新加坡元。No calculator（calculators are not allowed）。本周不教 N6.4–6.5（graphs of linear functions 一次函数的图像、gradient 斜率）。本周不画一次函数的图像，不求斜率，不求 rise/run。化石：mixing up a and b（混淆 a 和 b）：saying in y = 3x + 2 that a = 2 and b = 3（说 y = 3x + 2 里 a = 2 和 b = 3，错误，应该是 a = 3, b = 2）；or writing y = 3x + 2 as 3y = x + 2（或把 y = 3x + 2 写成 3y = x + 2，错误，coefficient 3 is for x, not for y）。"
    },
    "SMATH-37": {
      examples: [
        "y = 2x + 1: y-intercept is where x = 0, substitute x = 0 → y = 1, so y-intercept is (0, 1).",
        "y = 3x − 6: x-intercept is where y = 0, substitute y = 0 → 0 = 3x − 6 → x = 2, so x-intercept is (2, 0).",
        "Is (2, 5) on the graph of y = 2x + 1? Substitute x = 2: y = 2(2) + 1 = 5 ✓ Yes."
      ],
      gloss: "AEIS 中学数学第 37 周 / SMATH Week 37. 本周例题：Sec 1 一次函数的图像（Sec 1 NUMBER AND ALGEBRA: N6.4 graphs of linear functions）。官方 6.4 wording（逐字引用）：'graphs of linear functions'。本周方法：The graph of y = ax + b is a straight line（y = ax + b 的图像是一条直线）。Find points on the graph by substituting x or y（通过代入 x 或 y 求图像上的点）。The y-intercept is where x = 0, which gives the point (0, b)（y 轴截距是 x = 0 的点，即 (0, b)）。Example: y = 2x + 3 的 y-intercept 是 (0, 3)，不是 2 或 (2, 3) ✗。The x-intercept is where y = 0（x 轴截距是 y = 0 的点）：substitute y = 0 and solve for x. Example: y = 3x − 6, x-intercept: 0 = 3x − 6 → x = 2, so x-intercept is (2, 0). Decide whether a given point lies on the graph: substitute the x-coordinate into the function and check if the y-coordinate matches（判断给定的点是否在图像上：代入 x 坐标，检查 y 坐标是否匹配）。Example: Is (2, 5) on y = 2x + 1? Substitute x = 2: y = 2(2) + 1 = 5 ✓ Yes. Friendly integers. 金额用新元 S$ 或新加坡元。No calculator（calculators are not allowed）。本周只教 N6.4（graphs of linear functions），不教 N6.5（gradient 斜率 as the ratio of vertical change to horizontal change）。不教斜率名称（gradient / slope），不教 rise over run，不教「line goes up by a for each 1 in x」作为 gradient 概念。可以通过代入两个点的 x 值来画直线（plot two points to draw the line），但只是为了画图，不把这个过程称为 gradient。化石：using (a, b) or (b, a) as a point on the graph instead of (0, b)（把 (a, b) 或 (b, a) 当作图像上的点而不是 (0, b)）；or saying the y-intercept of y = 2x + 3 is 2（说 y = 2x + 3 的 y-intercept 是 2，错误，应该是 (0, 3)）。"
    },
    "SMATH-38": {
      examples: [
        "Line from (0, 1) to (2, 5): vertical change = 5 − 1 = 4, horizontal change = 2 − 0 = 2, gradient = 4/2 = 2.",
        "Line from (0, 4) to (2, 0): vertical change = 0 − 4 = −4, horizontal change = 2, gradient = −4/2 = −2.",
        "Gradient = (y₂ − y₁) / (x₂ − x₁). NOT (x₂ − x₁) / (y₂ − y₁) ✗ (run/rise)."
      ],
      gloss: "AEIS 中学数学第 38 周 / SMATH Week 38. 本周例题：Sec 1 斜率 / 升降比（Sec 1 NUMBER AND ALGEBRA: N6.5 the gradient of a linear graph as the ratio of the vertical change to the horizontal change (positive and negative gradients)）。官方 6.5 wording（逐字引用）：'the gradient of a linear graph as the ratio of the vertical change to the horizontal change (positive and negative gradients)'。本周方法：gradient = (vertical change) / (horizontal change)（斜率 = 竖直变化 / 水平变化）。Also gradient = (y₂ − y₁) / (x₂ − x₁) from two points（也可以用两个点计算）。This is also called rise over run（也叫 rise over run，升降比）。Positive gradient: line goes up as x increases（正斜率：线向右上升）。Negative gradient: line goes down as x increases（负斜率：线向右下降）。Example: from (0, 1) to (2, 5), vertical change = 4, horizontal change = 2, gradient = 4/2 = 2. Example: from (0, 4) to (2, 0), vertical change = −4, horizontal change = 2, gradient = −4/2 = −2. Friendly integers. 金额用新元 S$ 或新加坡元。No calculator（calculators are not allowed）。本周完成官方 N6 全部内容（6.1–6.5）。本周不教如何从斜率求直线方程（Do not teach equations of a line from gradient），不教平行线和垂直线（parallel and perpendicular），不教中点和距离（midpoint and distance）。化石：writing run/rise instead of rise/run（把 run/rise 当成 gradient，错误，gradient 是 rise over run）；or dropping the negative sign when the line goes down（当线向下时丢掉负号，错误，line goes down 时 gradient 是负数）。"
    },
    "SMATH-39": {
      examples: [
        "2x + 1 = 7 is an equation ✓ (has equal sign =). 3x + 5 is an expression ✗ (no equal sign).",
        "Is x = 3 a solution of 2x + 1 = 7? Check: 2(3) + 1 = 7 ✓ so x = 3 is a solution.",
        "Is x = 2 a solution of 2x + 1 = 7? Check: 2(2) + 1 = 5 ≠ 7 ✗ so x = 2 is NOT a solution."
      ],
      gloss: "AEIS 中学数学第 39 周 / SMATH Week 39. 本周例题：Sec 1 方程的概念（Sec 1 NUMBER AND ALGEBRA: N7.1 concept of equation）。官方 7.1 wording（逐字引用）：'concept of equation'。本周方法：An equation is a statement that two expressions are equal（方程是表示两个式子相等的陈述）。An equation has an equal sign (=)（方程有等号）。An expression does not have an equal sign（代数式没有等号）。The two sides of an equation are equal（方程的两边相等）。You may check whether a given number makes an equation true by substitution（可以用代入的办法检查某个数是否使方程成立）。Example: is x = 3 a solution of 2x + 1 = 7? Substitute x = 3 into the left side: 2(3) + 1 = 7 ✓, so x = 3 is a solution（例：x = 3 是 2x + 1 = 7 的解吗？代入 x = 3 到左边：2(3) + 1 = 7 ✓，所以 x = 3 是解）。Distinguish 2x+1 (expression) from 2x+1=7 (equation)（区分 2x+1 代数式 和 2x+1=7 方程）。Friendly integers. 金额用新元 S$ 或新加坡元。No calculator（calculators are not allowed）。本周不教如何解方程（Do not teach solving equations using inverse operations or 'do the same to both sides'），不教 N7.2 solving linear equations in one variable（不教 7.2 解方程），不教 N7.3 fractional equations（不教 7.3 分式方程），不教 N7.4 formulating a linear equation to solve problems（不教 7.4 用方程解应用题）。化石：calling 3x + 2 an equation（把代数式 3x + 2 说成方程）；or saying 2x + 1 = 7 is an expression（把方程 2x + 1 = 7 说成代数式）。"
    },
    "SMATH-40": {
      examples: [
        "2x + 1 = 7 → Subtract 1 from both sides: 2x + 1 − 1 = 7 − 1 → 2x = 6 → Divide by 2: x = 3. Check: 2(3) + 1 = 7 ✓.",
        "3x − 2 = x + 6 → Subtract x from both sides: 2x − 2 = 6 → Add 2 to both sides: 2x = 8 → x = 4. Check: 10 = 10 ✓."
      ],
      gloss: "AEIS 中学数学第 40 周 / SMATH Week 40. 本周例题：Sec 1 解一元一次方程（Sec 1 NUMBER AND ALGEBRA: N7.2 solving linear equations in one variable）。官方 7.2 wording（逐字引用）：'solving linear equations in one variable'。本周方法：Solve ax + b = c and ax + b = cx + d by doing the same operation to both sides (add/subtract/multiply/divide) until x is alone（解 ax + b = c 和 ax + b = cx + d，对两边同时做同样的操作，直到 x 单独在一边）。Use inverse operations: if +b, subtract b from both sides; if −b, add b to both sides; if ax, divide both sides by a（用逆运算：如果有 +b，两边同时减 b；如果有 −b，两边同时加 b；如果有 ax，两边同时除以 a）。Example: 2x + 1 = 7 → 2x + 1 − 1 = 7 − 1 → 2x = 6 → x = 3. Check: 2(3) + 1 = 7 ✓。Example: 3x − 2 = x + 6 → 3x − 2 − x = x + 6 − x → 2x − 2 = 6 → 2x − 2 + 2 = 6 + 2 → 2x = 8 → x = 4. Check: 10 = 10 ✓。Friendly integers so x is an integer（友好整数）。Check by substitution after solving（解出来后代入检验）。金额用新元 S$ 或新加坡元。No calculator（calculators are not allowed）。本周化石：changing only one side: 2x + 1 = 7 → 2x = 7 ✗（错误：只改了一边。正确：两边同时减 1）。本周不教 N7.3 fractional equations（分式方程，例如 x/3 + (x−2)/4 = 3），不教 N7.4 formulating a linear equation to solve problems（用方程解应用题）。第 39 周已完成 N7.1 concept of equation。本周只教 N7.2 solving linear equations in one variable。"
    },
    "SMATH-41": {
      examples: [
        "x/3 + (x−2)/4 = 3 → LCD 12 → 4x + 3(x−2) = 36 → 4x + 3x − 6 = 36 → 7x = 42 → x = 6. Check: 6/3 + (6−2)/4 = 2 + 1 = 3 ✓.",
        "3/(x−2) = 6 → 3 = 6(x−2) → 3 = 6x − 12 → 15 = 6x → x = 5/2 (or 2.5). Check: 3/(2.5−2) = 3/0.5 = 6 ✓. x≠2."
      ],
      gloss: "AEIS 中学数学第 41 周 / SMATH Week 41. 本周例题：Sec 1 解简单分式方程（Sec 1 NUMBER AND ALGEBRA: N7.3 solving simple fractional equations that can be reduced to linear equations）。官方 7.3 wording（逐字引用）：'solving simple fractional equations that can be reduced to linear equations such as x/3 + (x−2)/4 = 3 ; 3/(x−2) = 6'。本周方法：Clear denominators by multiplying EVERY term (including the constant) by the LCD 两边每一项（包括常数）都乘以最小公倍数 LCD 来去分母；then solve the resulting linear equation the same way as Week 40 然后用第 40 周的方法解一元一次方程；check by substitution 代入检验；exclude values that make a denominator zero 排除使分母为零的值。Example 1: x/3 + (x−2)/4 = 3. LCD = 12. Multiply EVERY term by 12: 4x + 3(x−2) = 36. Expand: 4x + 3x − 6 = 36 → 7x = 42 → x = 6. Check: 6/3 + (6−2)/4 = 2 + 1 = 3 ✓。Example 2: 3/(x−2) = 6. Multiply both sides by (x−2): 3 = 6(x−2) → 3 = 6x − 12 → 15 = 6x → x = 5/2 (or 2.5). Check: 3/(2.5−2) = 3/0.5 = 6 ✓. x≠2 because x = 2 makes the denominator zero。Friendly numbers（友好整数）。No calculator（calculators are not allowed）。本周化石：multiplying only one term by the LCD: x/3 + (x−2)/4 = 3 → 4x + 3(x−2) = 3 ✗（错误：忘记把右边的 3 也乘以 12。正确：4x + 3(x−2) = 36）；or multiplying only one side: 3/(x−2) = 6 → 3 = 6 ✗（错误：只把左边乘以 (x−2)，右边没有乘。正确：3 = 6(x−2)）。本周不教 N7.4 formulating a linear equation to solve problems（用方程解应用题）。本周不教 quadratic fractional equations（二次分式方程）。Cast: Wei, Aisha, Mr Lim at Riverside Secondary School."
    },
    "SMATH-42": {
      examples: [
        "Wei is x years old. Aisha is 3 years older. Together they are 27. → x + (x+3) = 27 → 2x + 3 = 27 → 2x = 24 → x = 12. Check: Wei 12, Aisha 15, 12+15 = 27 ✓.",
        "Book S$x, notebook S$4 less. 2 books + 1 notebook = S$26. → 2x + (x−4) = 26 → 3x − 4 = 26 → 3x = 30 → x = 10. Check: book S$10, notebook S$6, 2(10)+6 = 26 ✓."
      ],
      gloss: "AEIS 中学数学第 42 周 / SMATH Week 42. 本周例题：Sec 1 列一元一次方程解应用题（Sec 1 NUMBER AND ALGEBRA: N7.4 formulating a linear equation in one variable to solve problems）。官方 7.4 wording（逐字引用）：'formulating a linear equation in one variable to solve problems'。本周方法：Read a short school-life word problem 读应用题（Wei is x years old, Aisha is 3 years older, together they are 27）；write ONE linear equation in one unknown 写一个一元一次方程（x + (x+3) = 27）；solve it the same way as Week 40 用第 40 周方法解（2x + 3 = 27 → x = 12）；check in the original story 在原故事中检验（Wei 12, Aisha 15, 12+15 = 27 ✓）。Typical stories: ages 年龄、prices 物价（S$ 新元 only）、groups 人数分组。Example 1: Wei x, Aisha x+3, total 27 → x + (x+3) = 27 → x = 12. Example 2: Book S$x, notebook S$(x−4), 2 books + 1 notebook S$26 → 2x + (x−4) = 26 → x = 10. Example 3: Class 36, one group x, other x+4 → x + (x+4) = 36 → x = 16。Friendly integers（友好整数）。No calculator（不用计算器）。本周化石：writing an expression instead of an equation（写成代数式而不是方程）。Wrong: Wei is x, Aisha is 3 older, together 27 → write x + 3（错误：这是代数式 expression，不是方程 equation）。Wrong: notebook is S$4 less than book → x + 4 instead of x − 4（错误：中文「少」语序翻译错误）。Right: write one equation with「=」and the total（正确：写一个包含「=」和总数的方程）。第 42 周完成 N7（7.1 concept of equation, 7.2 solving linear equations, 7.3 solving simple fractional equations, 7.4 formulating a linear equation to solve problems）。第 39–42 周完成 Sec 1 NUMBER AND ALGEBRA N1–N7。本周不开始 GEOMETRY AND MEASUREMENT G1 angles（角）。Cast: Wei, Aisha, Mr Lim at Riverside Secondary School。Sec 1 content for Sec 2 AEIS applicants（申请 Sec 2 的考生学习 Sec 1 内容）。"
    },
    "SMATH-43": {
      examples: [
        "35° is acute (0° < 35° < 90°).",
        "200° is reflex (180° < 200° < 360°)."
      ],
      gloss: "AEIS 中学数学第 43 周 / SMATH Week 43. 本周例题：Sec 1 G1.1 识别和分类四种角（Sec 1 GEOMETRY AND MEASUREMENT: G1. Angles, triangles and polygons: 1.1 right, acute, obtuse and reflex angles）。官方 1.1 wording（逐字引用）：'right, acute, obtuse and reflex angles'。本周方法：识别和分类四种角 classify four types of angles。Right angle = 90°（直角 = 90°）。Acute angle: greater than 0° and less than 90°（锐角：大于 0° 小于 90°，例如 35° is acute because 0° < 35° < 90°）。Obtuse angle: greater than 90° and less than 180°（钝角：大于 90° 小于 180°，例如 95° is obtuse because 90° < 95° < 180°）。Reflex angle: greater than 180° and less than 360°（优角：大于 180° 小于 360°，例如 200° is reflex because 180° < 200° < 360°）。Examples: 90° is right; 35° is acute; 95° is obtuse; 120° is obtuse; 200° is reflex; 270° is reflex。180° is NOT one of the four 1.1 types（180° 不是这四种角之一）。本周只教 G1.1（four types of angles: right, acute, obtuse, reflex），不教 G1.2（vertically opposite angles / angles on a straight line / angles at a point）。本周化石：mixing obtuse and reflex（混淆钝角和优角）。Wrong: 95° is a reflex angle（错误：95° 是 obtuse 钝角，not reflex，because 90° < 95° < 180°）。Wrong: 270° is obtuse（错误：270° 是 reflex 优角，not obtuse，because 180° < 270° < 360°）。Wrong: calling every big angle a right angle（错误：把所有大角都叫直角）。Right: 90° is right; 35° is acute; 95° is obtuse; 200° is reflex。Cast: Wei, Aisha, Mr Lim at Riverside Secondary School（classroom door corner, clock, sports field corner）。Friendly integers（友好整数）。No calculator（不用计算器）。第 43 周开始 GEOMETRY AND MEASUREMENT G1。第 39–42 周已完成 Sec 1 NUMBER AND ALGEBRA N1–N7。"
    },
    "SMATH-44": {
      examples: [
        "Two lines cross. One angle is 70°. Vertically opposite angle = 70° (equal).",
        "Straight line with ray. One angle 70°. Adjacent angle = 180° − 70° = 110°.",
        "Three angles at a point: 120° + 150° + ? = 360°. So ? = 90°."
      ],
      gloss: "AEIS 中学数学第 44 周 / SMATH Week 44. 本周例题：Sec 1 G1.2 vertically opposite angles, angles on a straight line, angles at a point（对顶角、平角、周角）。官方 1.2 wording（逐字引用）：'vertically opposite angles, angles on a straight line, angles at a point'。本周方法：vertically opposite angles are equal（对顶角相等）——两条直线相交，对顶角相等；angles on a straight line add to 180°（平角上的角之和为 180°）——一条直线上的角加起来等于 180°；angles at a point add to 360°（周角上的角之和为 360°）——一个点周围的角加起来等于 360°。Examples: two lines cross, one angle 70°, vertically opposite = 70°（对顶角相等）; straight line with ray, one angle 70°, adjacent angle = 180° − 70° = 110°（平角上的角之和为 180°）; three angles at a point: 120° + 150° + ? = 360°, so ? = 90°（周角上的角之和为 360°）。本周化石：using the wrong total（使用错误的总数）。Wrong: two lines cross, one angle 70°, the vertically opposite is 110° because they add to 180°（错误：对顶角应该相等，是 70°，不是 110°）。Wrong: angles on a straight line, one is 70°, the adjacent is 70° because vertically opposite angles are equal（错误：这是平角上的角，应该加到 180°，所以是 110°，不是 70°）。Wrong: angles at a point add to 180°（错误：周角上的角加到 360°，不是 180°）。Right: vertically opposite = equal（正确：对顶角相等）; straight line = 180°（正确：平角上的角之和为 180°）; at a point = 360°（正确：周角上的角之和为 360°）。Cast: Wei, Aisha, Mr Lim at Riverside Secondary School。Friendly integers。No calculator。本周只教 G1.2（vertically opposite angles, angles on a straight line, angles at a point），不教 G1.3（properties of angles related to parallel lines and transversals: corresponding / alternate / interior angles）。"
    },
    "SMATH-45": {
      examples: [
        "AB ∥ CD, transversal, one angle 70°. Corresponding angle = 70° (equal).",
        "AB ∥ CD, transversal, one angle 70°. Alternate angle = 70° (equal).",
        "AB ∥ CD, transversal, one angle 70°. Interior angle on same side = 180° − 70° = 110°."
      ],
      gloss: "AEIS 中学数学第 45 周 / SMATH Week 45. 本周例题：Sec 1 G1.3 angles formed by two parallel lines and a transversal: corresponding angles, alternate angles, interior angles（平行线与横截线形成的角：同位角、内错角、同旁内角）。官方 1.3 wording（逐字引用）：'angles formed by two parallel lines and a transversal: corresponding angles, alternate angles, interior angles'。本周方法：corresponding angles are equal（同位角相等）——当两条平行线被横截线所截时，同位角相等；alternate angles are equal（内错角相等）——当两条平行线被横截线所截时，内错角相等；interior angles add to 180°（同旁内角互补）——当两条平行线被横截线所截时，同旁内角（co-interior / same-side interior）之和为 180°。Examples: AB ∥ CD, transversal, one angle 70°, corresponding angle = 70°（同位角相等）; AB ∥ CD, transversal, one angle 70°, alternate angle = 70°（内错角相等）; AB ∥ CD, transversal, one angle 70°, interior angle on same side = 180° − 70° = 110°（同旁内角之和为 180°）。本周化石：mixing the three angle names or using the wrong relation（混淆三种角的名称，或使用错误的关系：相等与互补）。Wrong: corresponding angles add to 180°（错误：同位角应该相等，是 70°，不是互补）。Wrong: interior (same-side) angles are equal（错误：同旁内角应该互补，加到 180°，不是相等）。Wrong: calling an alternate pair 'corresponding'（错误：把内错角叫成同位角）。Right: corresponding = equal（正确：同位角相等）; alternate = equal（正确：内错角相等）; interior (same-side) = 180°（正确：同旁内角之和为 180°）。Cast: Wei, Aisha, Mr Lim at Riverside Secondary School。Friendly integers。No calculator。本周只教 G1.3（angles formed by two parallel lines and a transversal），不教 G1.4（properties of triangles and special quadrilaterals）。第 44 周已完成 G1.2 vertically opposite angles, angles on a straight line, angles at a point（对顶角、平角、周角）。"
    },
    "SMATH-46": {
      examples: [
        "Triangle ABC: angles 70° + 60° + x = 180°, so x = 50°.",
        "Triangle exterior angle 110° = 70° + 40° (sum of two opposite interiors)."
      ],
      gloss: "AEIS 中学数学第 46 周 / SMATH Week 46. 本周例题：Sec 1 G1.4 properties of triangles（三角形的性质，本周只教三角形）。官方 1.4 wording（逐字引用）：'properties of triangles, special quadrilaterals and regular polygons (pentagon, hexagon, octagon and decagon), including symmetry properties'。官方 1.4 also includes special quadrilaterals and regular polygons, but 本周只教三角形部分 this week focuses only on triangles；special quadrilaterals and regular polygons wait for a later week. 本周方法：sum of interior angles of a triangle is 180°（三角形内角和为 180°）——三个内角相加等于 180°，if given two angles, third angle = 180° − first angle − second angle; exterior angle of a triangle equals the sum of the two opposite interior angles（三角形的外角等于两个不相邻的内角之和）——exterior angle = sum of the two opposite interior angles; isosceles triangle: two equal sides ⇒ two equal base angles（等腰三角形：两边相等则两底角相等）——if AB = AC, then ∠B = ∠C (NOT ∠A = ∠C); equilateral triangle: all sides equal, all angles 60°（等边三角形：三边相等，三角皆 60°）——三边相等的三角形，每个角都是 60°。Examples: Triangle ABC with angles 70° and 60°, third angle = 180° − 70° − 60° = 50°. Triangle exterior angle 110° and one opposite interior 70°, other opposite interior = 110° − 70° = 40°. Isosceles PQR with PQ = PR, if ∠Q = 65°, then ∠R = 65°（两底角相等）. Equilateral triangle, each angle = 60°. 本周化石：using 360° as the triangle angle sum（错误：把三角形内角和当成 360°，混淆了周角和三角形内角和。正确：三角形内角和是 180°，不是 360°。Wrong: 70° + 60° + x = 360°, so x = 230°. Right: 70° + 60° + x = 180°, so x = 50°）；swapping equal sides and equal angles in isosceles triangle（错误：把等腰三角形的等边和等角弄反。Wrong: isosceles with AB = AC means ∠A = ∠C. Right: if AB = AC, then ∠B = ∠C, the two base angles are equal）。Cast: Wei, Aisha, Mr Lim at Riverside Secondary School。Friendly integers。No calculator。本周只教 G1.4 的三角形部分，不教 special quadrilaterals 和 regular polygons（四边形和正多边形留待后续周次）。第 45 周已完成 G1.3 angles formed by two parallel lines and a transversal（平行线与横截线形成的角）。"
    },
    "SMATH-47": {
      examples: [
        "Parallelogram ABCD: angle A = 70°, opposite angle C = 70°, consecutive angle B = 180° − 70° = 110°.",
        "Rectangle PQRS: diagonal PR = 12 cm, diagonal QS = 12 cm (rectangle diagonals equal)."
      ],
      gloss: "AEIS 中学数学第 47 周 / SMATH Week 47. 本周例题：Sec 1 G1.4 properties of special quadrilaterals（特殊四边形的性质，本周只教特殊四边形）。官方 1.4 wording（逐字引用）：'properties of triangles, special quadrilaterals and regular polygons (pentagon, hexagon, octagon and decagon), including symmetry properties'。第 46 周已教三角形部分，本周只教特殊四边形 special quadrilaterals only；regular polygons（正多边形）wait for a later week. 本周方法：parallelogram（平行四边形）：opposite sides equal and parallel（对边相等且平行）、opposite angles equal（对角相等）、consecutive angles add to 180°（相邻角互补）、diagonals bisect each other（对角线互相平分）；rectangle（矩形）：a parallelogram with four right angles（平行四边形 + 四个直角）、diagonals equal（对角线相等）；rhombus（菱形）：a parallelogram with four equal sides（平行四边形 + 四边相等）、diagonals bisect each other at right angles（对角线互相垂直平分）；square（正方形）：rectangle + rhombus，four equal sides and four right angles（四边相等且四角为直角）；trapezium（梯形）：exactly one pair of parallel sides（恰好一对平行边，新加坡用法）。Examples: Parallelogram ABCD with angle A = 70°, opposite angle C = 70°（对角相等）, consecutive angle B = 180° − 70° = 110°（相邻角互补）. Rectangle PQRS with diagonal PR = 12 cm, diagonal QS = 12 cm（矩形对角线相等）. Rhombus with side 8 cm, all sides = 8 cm（菱形四边相等）. Square with side 6 cm, all sides = 6 cm and all angles = 90°. Trapezium has exactly one pair of parallel sides（梯形恰好一对平行边）. 本周化石：treating every parallelogram as a rectangle（错误：把平行四边形当成矩形，认为所有平行四边形的对角线都相等。正确：只有矩形的对角线相等，一般平行四边形的对角线不一定相等。Wrong: parallelogram has diagonals equal. Right: rectangle has diagonals equal; parallelogram diagonals bisect each other but are not necessarily equal）；giving a trapezium two pairs of parallel sides（错误：说梯形有两对平行边。正确：梯形恰好一对平行边，新加坡用法。Wrong: trapezium has two pairs of parallel sides. Right: trapezium has exactly one pair of parallel sides）；using 360° wrongly for consecutive angles of a parallelogram（错误：平行四边形角 A = 70°，对角 C = 110°。正确：对角相等 C = 70°，相邻角互补 B = 110°）。Cast: Wei, Aisha, Mr Lim at Riverside Secondary School。Friendly integers。No calculator。本周只教 G1.4 的特殊四边形部分，第 46 周已教三角形，正多边形留待后续周次。第 46 周已完成 G1.4 triangles。"
    },
    "SMATH-48": {
      examples: [
        "Regular hexagon: 6 sides, 6 lines of symmetry, each interior angle = (6 − 2) × 180° ÷ 6 = 120°.",
        "Regular pentagon: 5 lines of symmetry, each interior angle = (5 − 2) × 180° ÷ 5 = 108° (not 72°; 72° is exterior/centre)."
      ],
      gloss: "AEIS 中学数学第 48 周 / SMATH Week 48. 本周例题：Sec 1 G1.4 properties of regular polygons（正多边形的性质，本周只教正多边形）。官方 1.4 wording（逐字引用）：'properties of triangles, special quadrilaterals and regular polygons (pentagon, hexagon, octagon and decagon), including symmetry properties'。第 46 周已教三角形部分，第 47 周已教特殊四边形部分，本周只教正多边形 regular polygons only；本周完成 G1.4。本周方法：a regular polygon has all sides equal and all interior angles equal（正多边形所有边相等、所有内角相等）；official named ones: regular pentagon (5 sides 正五边形), hexagon (6 sides 正六边形), octagon (8 sides 正八边形), decagon (10 sides 正十边形)；number of lines of symmetry equals the number of sides（对称轴的数量等于边数）；rotational symmetry of order n for a regular n-gon（正 n 边形的旋转对称阶数为 n）；interior angle formula: (n − 2) × 180° ÷ n（内角公式：(n − 2) × 180° ÷ n）。Examples: Regular hexagon (6 sides) has 6 lines of symmetry, rotational symmetry of order 6, each interior angle = (6 − 2) × 180° ÷ 6 = 720° ÷ 6 = 120°. Regular pentagon (5 sides) has 5 lines of symmetry, each interior angle = (5 − 2) × 180° ÷ 5 = 540° ÷ 5 = 108° (not 72°; 72° is the exterior angle or centre angle). Regular octagon (8 sides) has 8 lines of symmetry, each interior angle = (8 − 2) × 180° ÷ 8 = 135°. Regular decagon (10 sides) has 10 lines of symmetry, each interior angle = (10 − 2) × 180° ÷ 10 = 144° (not 36°; 36° is exterior/centre). Cast: Wei, Aisha, Mr Lim at Riverside Secondary School。Friendly integers。No calculator。本周化石：mixing up the number of sides and the number of lines of symmetry（错误：混淆边数和对称轴数量。正确：正多边形的对称轴数量等于边数。Wrong: regular hexagon has 5 lines of symmetry. Right: regular hexagon has 6 sides and 6 lines of symmetry）；using 360° ÷ n as the interior angle（错误：用 360° ÷ n 当作正 n 边形的内角。那是外角或中心角，不是内角。Wrong: each interior angle of a regular pentagon = 360° ÷ 5 = 72°. Right: each interior angle = (5 − 2) × 180° ÷ 5 = 108°; 72° is the exterior or centre angle）。本周完成 G1.4（第 46 周三角形，第 47 周特殊四边形，第 48 周正多边形）。官方 1.4 现已完成。本周不教 G1.5 classification 和 G1.6 interior and exterior angle sum of any convex polygon。"
    },
    "SMATH-49": {
      examples: [
        "Quadrilateral ABCD: opposite sides parallel and equal, consecutive angles add to 180°, diagonals bisect each other. No extra properties → parallelogram.",
        "Quadrilateral PQRS: four right angles and four equal sides → square (not just 「rectangle」; square is the most specific name)."
      ],
      gloss: "AEIS 中学数学第 49 周 / SMATH Week 49. 本周例题：Sec 1 G1.5 classifying special quadrilaterals on the basis of their properties（根据性质给特殊四边形分类）。官方 1.5 wording（逐字引用）：'classifying special quadrilaterals on the basis of their properties'。本周是 G1.5 classification only. Given properties → name the most specific special quadrilateral. Hierarchy（包含关系）: square ⊂ rectangle and square ⊂ rhombus ⊂ parallelogram; trapezium is not a parallelogram（正方形 ⊂ 矩形，正方形 ⊂ 菱形 ⊂ 平行四边形；梯形不是平行四边形）。Singapore definition: trapezium = exactly one pair of parallel sides（新加坡定义：梯形 = 恰好一对对边平行）。「A square is a rectangle」is TRUE. 「A rectangle is a square」is FALSE unless extra properties are given. Examples: Opposite sides parallel and equal, consecutive angles add to 180°, diagonals bisect each other → that is a parallelogram (no extra properties, cannot say rectangle or rhombus). Four right angles and four equal sides → that is a square (not just 「rectangle」, because square is more specific). Exactly one pair parallel → trapezium. Four equal sides and diagonals at right angles but angles not 90° → rhombus (not square). 第 47 周已教 G1.4 properties. 本周化石 fossil errors：stopping at the less specific name（错误：停在不够具体的名称。例如：four right angles + four equal sides → 只说「it is a rectangle」虽然对但不够具体，it is a square 更准确）；reversing the hierarchy（错误：颠倒包含关系。例如：说「every rectangle is a square」。正确：「every square is a rectangle」）；confusing parallelogram and trapezium（错误：two pairs of parallel sides → trapezium。正确：two pairs parallel → parallelogram; Singapore trapezium = exactly one pair）。本周不教 G1.6 polygon angle sum. 本周不教 G1.7 construction."
    },
    "SMATH-50": {
      examples: [
        "Convex hexagon: 6 sides, so interior angle sum = (6 − 2) × 180° = 4 × 180° = 720°.",
        "Exterior angle sum of any convex polygon = 360° (true for pentagon, hexagon, octagon—always 360°)."
      ],
      gloss: "AEIS 中学数学第 50 周 / SMATH Week 50. 本周例题：Sec 1 G1.6 angle sum of interior and exterior angles of any convex polygon（任意凸多边形的内角和与外角和）。官方 1.6 wording（逐字引用）：'angle sum of interior and exterior angles of any convex polygon'。本周是 G1.6 only. Interior angle sum of any convex n-gon = (n − 2) × 180°. Exterior angle sum of any convex polygon = 360° (always, no matter how many sides). For a regular n-gon: each interior = (n − 2) × 180° ÷ n; each exterior = 360° ÷ n. Friendly integers: triangle 180, quadrilateral 360, pentagon 540, hexagon 720, octagon 1080, nonagon 1260, decagon 1440, dodecagon 1800; regular hexagon each interior 120; regular pentagon each exterior 72; regular octagon each exterior 45. Examples: Convex hexagon has 6 sides, so interior angle sum = (6 − 2) × 180° = 720°. Convex octagon: 8 sides, interior sum = (8 − 2) × 180° = 1080°. Exterior sum of any convex polygon = 360° (pentagon, decagon, any polygon—always 360°). Regular octagon: each exterior angle = 360° ÷ 8 = 45°. Fossil: using n × 180° instead of (n − 2) × 180° for interior sum (hexagon 6 × 180° = 1080° ✗; right: (6 − 2) × 180° = 720° ✓). Saying exterior sum is (n − 2) × 180° or 180° (wrong; exterior sum always = 360° ✓). Confusing interior with exterior (calculating (6 − 2) × 180° = 720° but saying it's exterior sum ✗). Cast: Wei, Aisha, Mr Lim at Riverside Secondary School. Friendly integers（友好整数）。No calculator（calculators are not allowed）。第 50 周教 Sec 1 G1.6 angle sums. 第 48 周已教 G1.4 regular polygons naming and symmetry. 本周不教 G1.7 construction."
    },
    "SMATH-51": {
      examples: [
        "Construct triangle ABC with AB = 6 cm, BC = 8 cm, CA = 10 cm using ruler + compasses (SSS construction).",
        "Construct a 60° angle with a protractor."
      ],
      gloss: "AEIS 中学数学第 51 周 / SMATH Week 51. 本周例题：Sec 1 G1.7 construction of simple geometrical figures from given data using compasses, ruler, set squares and protractors, where appropriate（按已知数据用圆规、直尺、三角板、量角器作简单几何图形）。官方 1.7 wording（逐字引用）：'construction of simple geometrical figures from given data using compasses, ruler, set squares and protractors, where appropriate'。本周是 G1.7 only. Which instrument for which job: compasses (equal lengths / arcs / circles), ruler (straight segments, measuring length), set squares (right angle, parallel / perpendicular lines), protractor (a given angle size). Triangle from given data: SSS (three sides → compasses + ruler); SAS (two sides and included angle → ruler + protractor + compasses); ASA (two angles and included side → ruler + protractor). A unique triangle is determined by SSS / SAS / ASA. AAA does NOT determine a unique triangle (similar copies of different sizes). Simple constructions: perpendicular from a point to a line (set square or compasses); a line parallel to a given line through a point (set square + ruler); an angle of a given size (protractor); copy a length (compasses). Examples: Construct triangle ABC with sides AB = 6 cm, BC = 8 cm, CA = 10 cm using compasses + ruler (SSS). Draw AB = 6 cm with ruler; open compasses to 8 cm, place at B, draw arc; open compasses to 10 cm, place at A, draw arc; arcs intersect at C; draw BC and CA. SSS determines a unique triangle. Construct a 60° angle with a protractor: draw a baseline, place protractor center at vertex, mark 60°, draw ray. Fossil: using a protractor to construct SSS (SSS needs compasses to copy the three lengths, not protractor). Saying AAA determines a unique triangle (AAA does not determine a unique triangle; similar copies can have different sizes). Cast: Wei, Aisha, Mr Lim at Riverside Secondary School. Friendly integers: 6 cm, 8 cm, 10 cm, 60°, 90°. No calculator. 本周完成官方 G1. Angles, triangles and polygons 全部 1.1–1.7 小节（第 42–51 周已教完 G1.1–G1.7）。下周不教 G5 Mensuration（不教面积体积）。"
    },
    "SMATH-52": {
      examples: [
        "Parallelogram: base 8 cm, perpendicular height 5 cm → Area = 8 × 5 = 40 cm².",
        "Trapezium: parallel sides 6 cm and 10 cm, perpendicular height 4 cm → Area = ½ × (6 + 10) × 4 = 32 cm²."
      ],
      gloss: "AEIS 中学数学第 52 周 / SMATH Week 52. 本周例题：Sec 1 G5.1 area of parallelogram and trapezium（平行四边形和梯形的面积）。官方 5.1 wording（逐字引用）：'area of parallelogram and trapezium'。本周是 G5.1 only. Area of a parallelogram = base × corresponding perpendicular height. The slanted side is NOT the height（平行四边形面积 = 底 × 对应的垂直高。倾斜的边不是高）。Area of a trapezium = ½ × (sum of the two parallel sides) × perpendicular height（梯形面积 = ½ × (两条平行边之和) × 垂直高）。Singapore trapezium = exactly one pair of parallel sides（新加坡梯形定义：恰好一对平行边）。Do not treat a parallelogram as a trapezium（不要把平行四边形当作梯形）。Friendly integers: parallelogram base 8 cm height 5 cm → 40 cm²; trapezium parallel sides 6 cm and 10 cm, height 4 cm → ½(6+10)×4 = 32 cm². Units: cm². No calculator. 本周开始官方 G5 Mensuration。本周不教 5.2 composite figures、5.3 prism/cylinder、5.4 unit conversion、5.5 composite solids。"
    },
    "SEC-0": {
      fossil: "Although I was nervous, but I tried. ✗ (中文「虽然…但是…」迁移) / I go yesterday ✗ (叙事体过去时掉落)",
      examples: [
        "Although Wei was nervous, he made three friends. ✓",
        "Wei worried about making friends, but his teachers were helpful. ✓ (but 前面没有 although)",
        "Last Monday, Mr Lim welcomed the class. ✓ (叙事用过去时: welcomed, not welcome)",
        "Although the lessons were harder, Wei felt confident. ✓ (although 后面不加 but)"
      ],
      gloss: "中学 AEIS 英语本周例题：although 和 but 不能同时用（中文「虽然…但是…」在英语里只用一个）。Although Wei was nervous, he tried. ✓ 或 Wei was nervous, but he tried. ✓。叙事体用过去时：Wei felt nervous（不是 feel）、Mr Lim welcomed us（不是 welcome）。Yesterday / Last Monday 出现时，动词变过去式。"
    },
    "SEC-1": {
      fossil: "Everyone have ✗ / The team of teachers help ✗ (主谓一致掉落)",
      examples: [
        "Everyone in secondary school has to join one CCA. ✓ (everyone 是单数，动词用 has)",
        "The team of teachers helps the students. ✓ (主语是 team，单数，动词用 helps)",
        "CCA points count towards your record. ✓ (points 复数，动词用 count)",
        "The debate team of senior students helps train juniors. ✓ (主语是 team，单数)"
      ],
      gloss: "中学 AEIS 英语本周例题：主谓一致（subject-verb agreement）。Everyone / Each / Every + 单数名词 → 动词用单数形式（has / is / does）。The team / group / class + of + 复数名词 → 主语是 team/group/class（单数），动词用单数形式（helps / is / does）。中文主语后动词不变形，但英语要根据主语单复数变形。"
    },
    "SEC-2": {
      fossil: "在星期一早上 7:30 (中文一个在，英语分 at / on / in)",
      examples: [
        "The assembly starts at 7:30. ✓ (具体时刻用 at)",
        "We have assembly on Monday. ✓ (星期用 on)",
        "We line up in the morning. ✓ (时段用 in)",
        "The flag-raising is at 7:45 on Monday morning. ✓ (可以组合)"
      ],
      gloss: "中学 AEIS 英语本周例题：时间介词（prepositions of time）。at 用于具体时刻（at 7:30 / at noon），on 用于星期和日期（on Monday / on 15 August），in 用于时段（in the morning / in 2026 / in January）。中文用一个「在」，英语要区分 at / on / in。"
    },
    "SEC-3": {
      fossil: "a homework / an advice / an information (不可数名词不加 a)",
      examples: [
        "We have homework tonight. ✓ (homework 不可数，不加 a)",
        "Mr Lim gave us some advice. ✓ (advice 不可数，用 some)",
        "The library has information about borrowing. ✓ (information 不可数)",
        "I need to finish a piece of homework by Monday. ✓ (可以用 a piece of)"
      ],
      gloss: "中学 AEIS 英语本周例题：不可数名词（uncountable nouns）。homework / advice / information 是不可数的，不能说 a homework / an advice / an information（错误）。正确说法：homework / some homework / a piece of homework。同理：advice / some advice / a piece of advice；information / some information / a piece of information。"
    },
    "SEC-4": {
      fossil: "must / have to for school rules (not must to)",
      examples: [
        "You must queue at the canteen. ✓ (must 后面直接加动词，不加 to)",
        "You have to return your tray. ✓ (have to 后面直接加动词，不加 to)",
        "Students must not cut the queue. ✓ (must not 表示禁止)",
        "We have to wear our nametags. ✓ (have to 表示必须)"
      ],
      gloss: "中学 AEIS 英语本周例题：must / have to 表示学校规则。must 和 have to 后面直接加动词原形，不能加 to（中文「必须要」迁移）。You must queue. ✓ 不是 You must to queue. ✗。must not 表示禁止（You must not cut the queue.），have to 也表示必须（You have to return your tray.）。"
    },
    "SEC-5": {
      fossil: "should (advice) vs must (school rule) — unique keys",
      examples: [
        "You must change into your PE attire before the lesson. ✓ (学校规则用 must)",
        "You should bring a water bottle to PE—it's helpful. ✓ (建议用 should)",
        "Students must do a warm-up before PE. ✓ (规则用 must，不是 should)",
        "If you feel tired, you should take a break. ✓ (建议用 should，不是 must)"
      ],
      gloss: "中学 AEIS 英语本周例题：should（建议/advice）vs must（规则/school rule）。如果是学校规则（You ___ change into PE attire），用 must。如果是建议（You ___ bring water—it's helpful），用 should。每个句子只有一个正确答案。情境：Wei 第一次上 PE 课，Coach Ng 和 Aisha 给出指令。"
    },
    "SEC-6": {
      fossil: "because (reason) vs so (result) — unique keys",
      examples: [
        "You must wear goggles because the chemicals can be dangerous. ✓ (because 表示原因)",
        "The chemicals are dangerous, so you need to wear goggles. ✓ (so 表示结果)",
        "Because lab safety is important, you must follow the rules. ✓ (because 引导原因从句)",
        "Lab safety is important, so you must follow the rules. ✓ (so 引导结果)"
      ],
      gloss: "中学 AEIS 英语本周例题：because（原因）vs so（结果）。如果空格需要填原因从句连接词（You must wear goggles ___ the chemicals are dangerous），用 because。如果空格需要填结果连接词（The chemicals are dangerous, ___ you need goggles），用 so。每个空只有一个正确答案。不能让 because 和 so 都对同一个空。禁止：because of + 句子（because of 后只能接名词短语）、so that 当 because 用（so that 表示目的）。情境：Wei 第一次上科学实验课。"
    },
    "SEC-7": {
      fossil: "if (possible) vs when (certain) — unique keys",
      examples: [
        "When the bell rings at 1:40, you must pack your bags. ✓ (铃声每天都响，用 when)",
        "If you miss the bus, you can take the MRT. ✓ (可能错过车，用 if)",
        "Walk to the door when you see your bus number. ✓ (车会来，用 when)",
        "If you run across the road, you could get hurt. ✓ (跑是可能的，不一定，用 if)"
      ],
      gloss: "中学 AEIS 英语本周例题：if（可能/不确定）vs when（一定会发生）。如果事件是一定会发生的（The bell rings every day → When the bell rings），用 when。如果事件是可能的、不确定的（Maybe you will miss the bus → If you miss the bus），用 if。每个空只有一个正确答案。不能让 if 和 when 都对同一个空。情境：Wei 第一次放学（bell / bag / bus bay / wait for bus / road safety）。"
    },
    "SEC-8": {
      fossil: "I have forgot my password yesterday / Wei is at Riverside for two weeks / Since Monday I reminded",
      examples: [
        "Wei has been at Riverside for two weeks. ✓ (未完成时间 for two weeks，用 present perfect)",
        "Yesterday Aisha forgot her password. ✓ (已完成时间 yesterday，用 past simple)",
        "Mr Raj has explained the rules since Monday. ✓ (未完成时间 since Monday，用 present perfect)",
        "At 10 a.m., the teacher told us to log in. ✓ (已完成时间 at 10 a.m.，用 past simple)"
      ],
      gloss: "中学 AEIS 英语本周例题：present perfect（未完成/持续时间：for two weeks / since Monday / already）vs past simple（已完成时间：yesterday / last week / at 2 p.m.）。如果时间是已完成的（yesterday / last week / at 2 p.m.），用 past simple（forgot / logged in / told）。如果时间是未完成的/持续的（for two weeks / since Monday / already），用 present perfect（has been / has explained / have saved）。不能让两个时态都对同一个空。情境：Wei 第一次上计算机实验室课（log in / password / save work / headphones）。"
    },
    "SEC-9": {
      fossil: "Although I was nervous, but I tried. ✗ (中文「虽然…但是…」迁移) / Although + but in same sentence ✗",
      examples: [
        "Although Wei felt unwell, he finished the lesson. ✓ (although 引导让步从句，不加 but)",
        "The nurse was busy, but she helped Wei immediately. ✓ (but 连接对比句子，前面没有 although)",
        "Although the sick bay was quiet, Wei felt more relaxed. ✓ (although 在句首)",
        "Wei wanted to go back, but Nurse Ong told him to rest. ✓ (but 在逗号后)",
      ],
      gloss: "中学 AEIS 英语本周例题：although（concession 让步）和 but（contrast 对比转折）不能同时用（中文「虽然…但是…」在英语里只用一个）。Although Wei felt unwell, he finished the lesson. ✓ 或 Wei felt unwell, but he finished the lesson. ✓。如果空格在句首或引导让步从句，用 although。如果空格在逗号后连接对比句子，用 but。每个空只有一个正确答案。情境：Wei 身体不适去 sick bay（Mr Lim sends him / Nurse Ong: sit down, take temperature, drink water）。"
    },
    "SEC-10": {
      fossil: "too enough / enough too / very enough / The room is too small vs The room is small enough (意思相反)",
      examples: [
        "The corridor was too crowded to move quickly. ✓ (太挤了，不能快走)",
        "The staircase was wide enough for two lines. ✓ (够宽，可以走两排)",
        "The field was large enough for all classes. ✓ (够大，所有班级都能站)",
        "The alarm was too loud. It made everyone stop. ✓ (太大声了，超过需要的程度)"
      ],
      gloss: "中学 AEIS 英语本周例题：too + adj（太…不能）vs adj + enough（足够…可以）。如果意思是「超过需要/不可能」，用 too + adj（too crowded, too slow, too late, too loud）。如果意思是「足够达到需要」，用 adj + enough（wide enough, quiet enough, fast enough, large enough）。禁止：too enough, enough too, very enough。注意：The room is too small（小到不行，不够用）vs The room is small enough（小到刚好够用）意思相反！情境：Wei 第一次消防演习（alarm / leave bags / walk / stairs / assembly point / register）。"
    },
    "SEC-11": {
      fossil: "a few money / a little pens / few of money",
      examples: [
        "Wei needed a few pens for his English class. ✓ (pens 可数，用 a few)",
        "Wei had a little money left from his allowance. ✓ (money 不可数，用 a little)",
        "There was a little queue at the counter. ✓ (queue 单数，用 a little 表示小规模)",
        "The auntie gave Wei a little change. ✓ (change 作为找零的钱不可数，用 a little)"
      ],
      gloss: "中学 AEIS 英语本周例题：a few（可数）vs a little（不可数）。如果名词可数（pens, books, minutes, dollars），用 a few。如果名词不可数（money, time, paper, water, stationery, change 作为找零），用 a little。禁止：a few money（money 不可数），a little pens（pens 可数），few of money（介词 of 用法错误）。不能同时让 a few 和 a little 都对。情境：Wei 在学校书店买文具（bookshop / exercise book / pens / S$1.50 each / receipt / wallet / allowance）。"
    },
    "A2-7": {
      fossil: "I going to the library tomorrow / I go to swim / Tomorrow I go library",
      examples: [
        "I am going to visit East Coast Park.",
        "Priya is going to draw.",
        "We are going to do homework."
      ],
      gloss: "be going to + 动词原形表示打算和计划。I am / She is / We are 必须加 be 动词。不要写成 I going to 或 I go to tomorrow。中文用「要/打算」不变形，但英语 going to 前面必须加 am/is/are。"
    },
    "A2-8": {
      fossil: "I can to swim / I must to go / I can swimming",
      examples: [
        "I can swim.",
        "You must wear your nametag.",
        "Can I borrow this book?"
      ],
      gloss: "can / must 后面直接加动词原形，不加 to，不加 -ing。can 表示能力或许可；must 表示必须。Can I…? 用来请求许可。"
    },
    "A2-9": {
      fossil: "I like swim / I like to swimming / I enjoy to read",
      examples: [
        "I like swimming.",
        "Priya enjoys drawing.",
        "We hate waiting in the rain."
      ],
      gloss: "like / love / hate / enjoy 后面加动词-ing。不要写 I like swim 或 I enjoy to read。中文「喜欢」后直接加动词，但英语必须用 -ing 形式。"
    },
    "A2-10": {
      fossil: "I go always / I am always go / I never am late",
      examples: [
        "I always walk to school.",
        "She is never late.",
        "We sometimes eat at the canteen."
      ],
      gloss: "always / usually / often / sometimes / never 放在实义动词前面（I always walk, She often plays），放在 be 动词后面（I am always tired, He is never late）。中文「总是/经常/有时/从不」位置自由，但英语频率副词位置固定。不要写 I go always 或 I am always go。"
    },
    "A2-11": {
      fossil: "in the bus / on the classroom / at the table (for in) / in the wall",
      examples: [
        "The book is on the desk.",
        "Mei is in the library.",
        "We meet at the school gate."
      ],
      gloss: "in 用在房间/建筑物里（in the classroom, in the library, in Building A）；on 用在表面上或楼层（on the desk, on the wall, on the second floor）；at 把地点看作一个点（at the door, at school, at the bus stop）。中文都说「在」，但英语要分清楚。不要写成 in the bus（英语说 on the bus）或 on the classroom（应该是 in the classroom）。"
    },
    "B1-5": {
      fossil: "The girl sits next to me is Priya / the book who I read",
      examples: [
        "The girl who sits next to me is Priya.",
        "The book which I read was interesting.",
        "That's the teacher that helped me."
      ],
      gloss: "定语从句 relative clauses：先行词是人用 who / that（The student who…），先行词是物用 which / that（The book which…）。中文用「的」不需要关系代词，但英语必须加 who / which / that 才能连接从句。"
    },
    "B1-6": {
      fossil: "I use to walk to school / I didn't used to like rice / I am used to swim",
      examples: [
        "I used to walk to school.",
        "She used to live in Guangzhou.",
        "We didn't use to speak English at home."
      ],
      gloss: "used to + 动词原形 = 以前常做（现在不做了）。否定是 didn't use to（use 不带 d）。不要写成 I use to 或 I didn't used to。本周不教 be used to + -ing（习惯于做某事）。"
    },
    "B1-7": {
      fossil: "Although it is raining, but I go / Despite of the rain / Despite it is raining",
      examples: [
        "Although it was raining, we went to East Coast Park.",
        "Despite the rain, Sports Day continued.",
        "In spite of feeling tired, Mei finished the race."
      ],
      gloss: "although / even though 后面接句子（有主语和动词）。despite / in spite of 后面接名词或 -ing 形式。不要写 although … but。不要写 despite of。不要在 despite 后面接句子。"
    },
    "B1-8": {
      fossil: "so a beautiful park / such beautiful / so beautiful park / such a weather",
      examples: [
        "The park was so beautiful.",
        "It was such a beautiful park.",
        "We had such bad weather."
      ],
      gloss: "so 后面加形容词（so tired, so interesting）。such a/an 后面加形容词 + 单数可数名词（such a beautiful park, such an interesting book）。不可数或复数用 such（such bad weather, such friendly teachers）。不要写 so a 或 so + 名词。"
    },
    "B1-9": {
      fossil: "too much tired / enough rich / too tired that I can't / I am not enough tall",
      examples: [
        "I was too tired to run.",
        "She is tall enough to reach the shelf.",
        "We didn't have enough time."
      ],
      gloss: "too + 形容词 + to 不定式表示太…而不能（too tired to run, too late to catch）。形容词 + enough + to 不定式表示够…可以（tall enough to reach）。enough 修饰名词时放在名词前（enough time, enough money）。不要写 too much tired, enough tall, 或 I am not enough tall。"
    },
    "B1-10": {
      fossil: "You like it, is it? / She's tall, is she? / You don't like English, isn't it?",
      examples: [
        "You're in Priya's class, aren't you?",
        "She doesn't take the bus, does she?",
        "Jun Wei can swim, can't he?"
      ],
      gloss: "反意疑问句 question tags：前面肯定，后面用否定尾（aren't you, doesn't she）。前面否定，后面用肯定尾（does she, is he）。助动词要和前面一致（is→isn't, does→doesn't, can→can't）。不要一律用 is it。"
    },
    "B1-11": {
      fossil: "When I arrived, the bus left / I have finished before she came / I already eat before she come",
      examples: [
        "When I arrived, the bus had left.",
        "Jun Wei had already eaten.",
        "The library had closed before we got there."
      ],
      gloss: "过去完成时 past perfect：两个过去动作，较早的那个用 had + 过去分词。When I arrived（后发生）, the bus had left（先发生）。不要用现在完成时 I have finished before she came，也不要两个都用一般过去时。"
    },
  };

  const key = `${level}-${weekNumber}`;
  const lesson = lessons[key];

  if (!lesson) {
    return null;
  }

  const isMath = level === "MATH" || level === "SMATH";

  // MATH levels show worked examples, not fossil cards
  if (isMath) {
    return (
      <div className="mb-8 bg-gradient-to-br from-accent/5 via-card to-accent/10 border border-accent/20 rounded-xl p-6 shadow-sm">
        <h2 className="font-serif font-semibold text-xl text-ink mb-4">
          本周例题
        </h2>
        
        <div className="space-y-4">
          {/* Worked example */}
          <div className="bg-card border border-line rounded-lg p-4">
            <ul className="space-y-2">
              {lesson.examples.map((line, i) => (
                <li key={i} className="text-sm text-ink flex items-start gap-2">
                  <span className="text-accent font-semibold mt-0.5">•</span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tips */}
          <div className="bg-paper border border-line rounded-lg p-3">
            <p className="text-xs font-semibold text-muted mb-2">💡 提示：</p>
            <p className="text-sm text-ink-2 leading-relaxed">{lesson.gloss}</p>
          </div>

          {/* How to use */}
          <div className="pt-3 border-t border-accent/20">
            <p className="text-xs text-ink-2">
              看完例题，直接开始下方作业。写出算式和答案。
            </p>
          </div>
        </div>
      </div>
    );
  }

  // A2/B1 levels show fossil cards (unchanged)
  return (
    <div className="mb-8 bg-gradient-to-br from-accent/5 via-card to-accent/10 border border-accent/20 rounded-xl p-6 shadow-sm">
      <h2 className="font-serif font-semibold text-xl text-ink mb-4">
        🎬 本周微课
      </h2>
      
      <div className="space-y-4">
        {/* Fossil line */}
        <div className="bg-warn-bg/30 border border-warn-ink/20 rounded-lg p-3">
          <p className="text-xs font-semibold text-muted mb-1">❌ 常见化石化错误：</p>
          <p className="text-sm text-ink-2 italic">{lesson.fossil}</p>
        </div>

        {/* Example sentences */}
        <div className="bg-card border border-line rounded-lg p-4">
          <p className="text-xs font-semibold text-muted mb-2">✅ 正确说法：</p>
          <ul className="space-y-2">
            {lesson.examples.map((example, i) => (
              <li key={i} className="text-sm text-ink flex items-start gap-2">
                <span className="text-accent font-semibold mt-0.5">•</span>
                <span>{example}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Gloss */}
        <div className="bg-paper border border-line rounded-lg p-3">
          <p className="text-sm text-ink-2 leading-relaxed">{lesson.gloss}</p>
        </div>

        {/* How to use */}
        <div className="pt-3 border-t border-accent/20">
          <p className="text-xs text-ink-2">
            💡 看完微课，直接开始下方作业。写作和口语 AI 会盯住同一个焦点。
          </p>
        </div>
      </div>
    </div>
  );
}
