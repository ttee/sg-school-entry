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
