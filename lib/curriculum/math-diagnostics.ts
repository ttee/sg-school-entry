import type { McqItem, Paper } from "./types";
import { q } from "./mcq";

/** Apply P2 → P1 syllabus. */
const MP2: McqItem[] = [
  q("mp2-1", "7 + 8 = ?", ["14", "15", "16", "17"], 1, "math-ops", "7 + 8 = 15.", "number"),
  q("mp2-2", "20 − 6 = ?", ["14", "16", "24", "26"], 0, "math-ops", "20 − 6 = 14. Adding would give 26.", "number"),
  q("mp2-3", "Which number is greater?", ["47", "74", "They are equal", "Cannot tell"], 1, "math-place", "74 has 7 tens; 47 has 4 tens.", "number"),
  q("mp2-4", "Ali has 10 stickers. He gives 3 to Mei. How many stickers does he have left?", ["7", "8", "13", "3"], 0, "math-word", "10 − 3 = 7.", "word"),
  q("mp2-5", "There are 3 bags. Each bag has 2 apples. How many apples are there in all?", ["5", "6", "8", "32"], 1, "math-word", "3 groups of 2: 2 + 2 + 2 = 6.", "word"),
  q("mp2-6", "A pencil costs 20¢. How much do 2 pencils cost?", ["20¢", "22¢", "40¢", "200¢"], 2, "math-money", "20¢ × 2 = 40¢.", "word"),
  q("mp2-7", "Which shape has 4 equal sides and 4 right angles?", ["Triangle", "Circle", "Square", "Oval"], 2, "math-geo", "A square has 4 equal sides and 4 right angles.", "geometry"),
  q("mp2-8", "The clock shows half past 3. What time is it?", ["2:30", "3:00", "3:30", "4:30"], 2, "math-measure", "Half past 3 is 3:30.", "measure"),
  q("mp2-9", "A ribbon is 10 cm long. Another is 5 cm long. What is the total length?", ["5 cm", "15 cm", "50 cm", "105 cm"], 1, "math-measure", "10 + 5 = 15 cm.", "measure"),
  q("mp2-10", "Mei has $2. Priya has $3. How much do they have altogether?", ["$1", "$5", "$6", "$23"], 1, "math-money", "$2 + $3 = $5.", "word"),
  q("mp2-11", "What is the missing number? 2, 4, 6, 8, ___", ["9", "10", "12", "16"], 1, "math-ops", "Count on in 2s: 8 + 2 = 10.", "number"),
  q("mp2-12", "There are 12 children. 5 are girls. How many are boys?", ["5", "7", "12", "17"], 1, "math-word", "12 − 5 = 7 boys.", "word"),
];

/** Apply P3 → P2 syllabus. */
const MP3: McqItem[] = [
  q("mp3-1", "3 × 5 = ?", ["8", "12", "15", "35"], 2, "math-ops", "3 × 5 = 15. 8 is 3 + 5.", "number"),
  q("mp3-2", "20 ÷ 4 = ?", ["4", "5", "16", "24"], 1, "math-ops", "4 × 5 = 20, so 20 ÷ 4 = 5.", "number"),
  q("mp3-3", "At a Bedok bookshop, Jun Wei bought 2 storybooks for $8 each and 1 pencil case for $5. How much did he spend?", ["$13", "$16", "$21", "$26"], 2, "math-word", "2 × $8 = $16, plus $5 = $21.", "word"),
  q("mp3-4", "A hawker centre has 345 seats. 128 seats are taken. How many seats are empty?", ["117", "217", "227", "473"], 1, "math-ops", "345 − 128 = 217. 473 is the sum.", "word"),
  q("mp3-5", "What is half of 12?", ["2", "4", "6", "24"], 2, "math-frac", "1/2 of 12 = 6.", "number"),
  q("mp3-6", "4 hundreds, 5 tens and 2 ones is ___.", ["452", "425", "254", "4052"], 0, "math-place", "4 × 100 + 5 × 10 + 2 = 452.", "number"),
  q("mp3-7", "Which number is the greatest?", ["456", "654", "546", "465"], 1, "math-place", "654 has the largest hundreds digit.", "number"),
  q("mp3-8", "How many cents are there in $6.75?", ["75 cents", "675 cents", "6075 cents", "6.75 cents"], 1, "math-money", "$1 = 100 cents, so $6.75 = 675 cents.", "measure"),
  q("mp3-9", "348 + 276 = ?", ["514", "524", "614", "624"], 3, "math-ops", "348 + 276 = 624. Watch the tens carry.", "number"),
  q("mp3-10", "The time is 9:30. What time is it 2 hours later?", ["7:30", "10:30", "11:30", "12:30"], 2, "math-measure", "9:30 + 2 h = 11:30.", "measure"),
  q("mp3-11", "500 g + 500 g = ?", ["100 g", "1 kg", "5000 g", "2 kg"], 1, "math-measure", "1000 g = 1 kg.", "measure"),
  q("mp3-12", "Chicken drumsticks are sold in packs of 3. Mrs Tan bought 5 packs. How many drumsticks?", ["8", "12", "15", "18"], 2, "math-word", "3 × 5 = 15.", "word"),
];

/** Apply P4 → P3 syllabus. */
const MP4: McqItem[] = [
  q("mp4-1", "8 × 7 = ?", ["15", "54", "56", "87"], 2, "math-ops", "8 × 7 = 56. 15 is 8 + 7.", "number"),
  q("mp4-2", "144 ÷ 12 = ?", ["11", "12", "132", "172"], 1, "math-ops", "12 × 12 = 144.", "number"),
  q("mp4-3", "A rectangle is 5 cm by 3 cm. What is its perimeter?", ["8 cm", "15 cm", "16 cm", "30 cm"], 2, "math-geo", "2 × (5 + 3) = 16 cm. 15 is the area.", "geometry"),
  q("mp4-4", "A rectangle is 6 cm by 4 cm. What is its area?", ["10 cm²", "20 cm²", "24 cm²", "48 cm²"], 2, "math-geo", "6 × 4 = 24 cm². 20 is 2 × (6+4).", "geometry"),
  q("mp4-5", "What is 3/4 of 20?", ["5", "12", "15", "80"], 2, "math-frac", "20 ÷ 4 = 5, 5 × 3 = 15.", "number"),
  q("mp4-6", "Two lines that never meet and are always the same distance apart are ___.", ["perpendicular", "parallel", "curved", "right angles"], 1, "math-geo", "Parallel lines never meet.", "geometry"),
  q("mp4-7", "A right angle is ___ .", ["45°", "60°", "90°", "180°"], 2, "math-geo", "A right angle is 90°.", "geometry"),
  q("mp4-8", "4000 + 700 + 50 + 8 = ?", ["4758", "4785", "7458", "400758"], 0, "math-place", "4 thousands, 7 hundreds, 5 tens, 8 ones.", "number"),
  q("mp4-9", "Favourite fruits: Apple 8, Orange 5, Mango 12, Banana 7. Which fruit is the most popular?", ["Apple", "Orange", "Mango", "Banana"], 2, "math-data", "12 is the greatest number.", "data"),
  q("mp4-10", "1 hour 20 minutes + 40 minutes = ?", ["1 hour", "1 hour 60 minutes", "2 hours", "2 hours 20 minutes"], 2, "math-measure", "20 + 40 = 60 minutes = 1 hour, plus 1 hour = 2 hours.", "measure"),
  q("mp4-11", "A classroom door is a rectangle. How many right angles does it have?", ["2", "3", "4", "8"], 2, "math-geo", "A rectangle has 4 right angles.", "geometry"),
  q("mp4-12", "Ali bought 3 plates of chicken rice at $4 each, 2 bowls of laksa at $5 each, and 4 drinks at $2 each. He paid with $50. How much change?", ["$20", "$22", "$30", "$50"], 0, "math-word", "3×4=12, 2×5=10, 4×2=8, total $30. Change $50−$30=$20.", "word"),
];

/** Apply P5 → P4 syllabus. */
const MP5: McqItem[] = [
  q("mp5-1", "In 85 432, the value of the digit 5 is ___.", ["5", "50", "500", "5 000"], 3, "math-place", "5 is in the thousands place: 5 000.", "number"),
  q("mp5-2", "Mr Tan's stock is 67 890. Mrs Lee's stock is 67 980. Who has more?", ["Mr Tan", "Mrs Lee", "They have the same", "Cannot tell"], 1, "math-place", "67 980 > 67 890 (tens: 8 > 0).", "number"),
  q("mp5-3", "Round 67 482 to the nearest thousand.", ["67 000", "67 500", "68 000", "70 000"], 0, "math-place", "Hundreds digit is 4, so round down to 67 000.", "number"),
  q("mp5-4", "3/5 + 1/5 = ?", ["2/5", "4/5", "4/10", "3/10"], 1, "math-frac", "Same denominator: 3 + 1 = 4, so 4/5.", "number"),
  q("mp5-5", "0.7 is the same as ___.", ["7/10", "7/100", "70/10", "1/7"], 0, "math-frac", "0.7 = 7 tenths = 7/10.", "number"),
  q("mp5-6", "2.5 + 1.75 = ?", ["3.25", "4.25", "4.30", "5.25"], 1, "math-ops", "2.50 + 1.75 = 4.25.", "number"),
  q("mp5-7", "Which number is not a factor of 12?", ["1", "4", "5", "6"], 2, "math-ops", "12 ÷ 5 is not a whole number.", "number"),
  q("mp5-8", "25% of 80 is ___.", ["16", "20", "25", "55"], 1, "math-percent", "25% = 1/4; 80 ÷ 4 = 20.", "number"),
  q("mp5-9", "A figure is made of a 6 cm by 4 cm rectangle joined to a 6 cm by 2 cm rectangle along the 6 cm side. What is the total area?", ["24 cm²", "36 cm²", "48 cm²", "12 cm²"], 1, "math-geo", "24 + 12 = 36 cm².", "geometry"),
  q("mp5-10", "Two angles on a straight line. One is 70°. The other is ___.", ["20°", "70°", "110°", "290°"], 2, "math-geo", "Angles on a straight line add to 180°. 180 − 70 = 110.", "geometry"),
  q("mp5-11", "What is 10 000 more than 56 789?", ["57 789", "66 789", "56 799", "46 789"], 1, "math-place", "Add 1 to the ten-thousands digit: 66 789.", "number"),
  q("mp5-12", "The school has collected $73 685. The goal is $90 000. How much more is needed?", ["$16 315", "$17 315", "$26 315", "$163 685"], 0, "math-word", "90 000 − 73 685 = 16 315.", "word"),
];

/** Apply S1 → P6 syllabus. */
const MS1: McqItem[] = [
  q("ms1-1", "20% of 150 is ___.", ["20", "30", "50", "130"], 1, "math-percent", "0.2 × 150 = 30.", "number"),
  q("ms1-2", "Share 25 sweets in the ratio 2 : 3. The larger share is ___.", ["10", "12", "15", "20"], 2, "math-ratio", "2 + 3 = 5 parts. 25 ÷ 5 = 5. 3 × 5 = 15.", "number"),
  q("ms1-3", "The average of 4, 8 and 12 is ___.", ["8", "12", "24", "4"], 0, "math-data", "(4 + 8 + 12) ÷ 3 = 8.", "data"),
  q("ms1-4", "A bus travels 120 km in 2 hours at constant speed. Its speed is ___.", ["60 km/h", "118 km/h", "122 km/h", "240 km/h"], 0, "math-speed", "Speed = distance ÷ time = 120 ÷ 2 = 60 km/h.", "measure"),
  q("ms1-5", "A triangle has base 10 cm and height 6 cm. Its area is ___.", ["16 cm²", "30 cm²", "60 cm²", "32 cm²"], 1, "math-geo", "½ × 10 × 6 = 30 cm².", "geometry"),
  q("ms1-6", "A circle has radius 7 cm. Take π = 22/7. The circumference is ___.", ["22 cm", "44 cm", "154 cm", "14 cm"], 1, "math-geo", "2πr = 2 × 22/7 × 7 = 44 cm. 154 is the area.", "geometry"),
  q("ms1-7", "A cuboid is 5 cm by 4 cm by 3 cm. Its volume is ___.", ["12 cm³", "20 cm³", "47 cm³", "60 cm³"], 3, "math-geo", "5 × 4 × 3 = 60 cm³.", "geometry"),
  q("ms1-8", "3/4 as a percentage is ___.", ["34%", "43%", "75%", "133%"], 2, "math-percent", "3/4 = 0.75 = 75%.", "number"),
  q("ms1-9", "2x + 3 = 11. What is x?", ["4", "5", "7", "14"], 0, "math-algebra", "2x = 8, x = 4.", "algebra"),
  q("ms1-10", "A pie chart shows 1/4 of 40 pupils chose Art. How many chose Art?", ["4", "10", "16", "36"], 1, "math-data", "¼ × 40 = 10.", "data"),
  q("ms1-11", "A bag costs $50. It is 20% off. The sale price is ___.", ["$10", "$30", "$40", "$70"], 2, "math-percent", "20% of 50 = 10. 50 − 10 = 40.", "word"),
  q("ms1-12", "3 pencils cost $6. At the same rate, 5 pencils cost ___.", ["$8", "$10", "$15", "$30"], 1, "math-ratio", "Each pencil $2. 5 × $2 = $10.", "word"),
];

/** Apply S2 → S1 syllabus. */
const MS2: McqItem[] = [
  q("ms2-1", "−5 + 8 = ?", ["−13", "−3", "3", "13"], 2, "math-ops", "8 − 5 = 3.", "number"),
  q("ms2-2", "Expand 3(x + 2).", ["3x + 2", "3x + 6", "x + 6", "3x + 5"], 1, "math-algebra", "3 × x + 3 × 2 = 3x + 6.", "algebra"),
  q("ms2-3", "Solve 2x + 1 = 7.", ["x = 3", "x = 4", "x = 6", "x = 8"], 0, "math-algebra", "2x = 6, x = 3.", "algebra"),
  q("ms2-4", "A triangle has angles 50° and 80°. The third angle is ___.", ["50°", "80°", "130°", "180°"], 0, "math-geo", "180 − 50 − 80 = 50°.", "geometry"),
  q("ms2-5", "AB is parallel to CD. A transversal makes a corresponding angle of 65°. The matching corresponding angle is ___.", ["25°", "65°", "115°", "130°"], 1, "math-geo", "Corresponding angles are equal.", "geometry"),
  q("ms2-6", "The mean of 2, 4, 6, 8 is ___.", ["4", "5", "6", "20"], 1, "math-data", "(2+4+6+8) ÷ 4 = 5.", "data"),
  q("ms2-7", "The median of 20, 1, 8, 4, 15 is ___.", ["8", "20", "4", "9.6"], 0, "math-data", "Order first: 1, 4, 8, 15, 20. Middle is 8.", "data"),
  q("ms2-8", "A fair six-sided die is rolled. P(even number) is ___.", ["1/6", "1/3", "1/2", "2/3"], 2, "math-data", "Even: 2, 4, 6 → 3/6 = 1/2.", "data"),
  q("ms2-9", "15% of 80 is ___.", ["12", "15", "65", "95"], 0, "math-percent", "0.15 × 80 = 12.", "number"),
  q("ms2-10", "Expand x(x + 3).", ["x + 3", "x² + 3", "x² + 3x", "2x + 3"], 2, "math-algebra", "x² + 3x.", "algebra"),
  q("ms2-11", "Simplify 12a ÷ 4.", ["3", "3a", "8a", "48a"], 1, "math-algebra", "12a / 4 = 3a.", "algebra"),
  q("ms2-12", "y = 2x + 1. When x = 3, y = ?", ["5", "6", "7", "8"], 2, "math-algebra", "2(3) + 1 = 7.", "algebra"),
];

/** Apply S3 → S2 syllabus. */
const MS3: McqItem[] = [
  q("ms3-1", "A right-angled triangle has shorter sides 6 cm and 8 cm. The hypotenuse is ___.", ["10 cm", "14 cm", "48 cm", "100 cm"], 0, "math-geo", "6² + 8² = 36 + 64 = 100 = 10².", "geometry"),
  q("ms3-2", "Factorise x² + 5x + 6.", ["(x + 1)(x + 6)", "(x + 2)(x + 3)", "(x + 5)(x + 6)", "(x − 2)(x − 3)"], 1, "math-algebra", "2 × 3 = 6 and 2 + 3 = 5.", "algebra"),
  q("ms3-3", "Solve: x + y = 5 and x − y = 1.", ["x = 2, y = 3", "x = 3, y = 2", "x = 5, y = 1", "x = 1, y = 5"], 1, "math-algebra", "Add: 2x = 6, x = 3. Then y = 2.", "algebra"),
  q("ms3-4", "Two triangles are similar. Sides are in the ratio 1 : 2. A side of 4 cm on the smaller maps to ___ on the larger.", ["2 cm", "6 cm", "8 cm", "16 cm"], 2, "math-geo", "4 × 2 = 8 cm.", "geometry"),
  q("ms3-5", "Two fair coins are tossed. P(two heads) is ___.", ["1/4", "1/3", "1/2", "1"], 0, "math-data", "HH, HT, TH, TT. One of four outcomes.", "data"),
  q("ms3-6", "Simplify (3a / 4) × (8 / 3a), a ≠ 0.", ["1", "2", "6", "8"], 1, "math-algebra", "3a and 3a cancel; 8/4 = 2.", "algebra"),
  q("ms3-7", "The gradient of the line y = 2x − 1 is ___.", ["−1", "1", "2", "1/2"], 2, "math-algebra", "In y = mx + c, m = 2.", "algebra"),
  q("ms3-8", "The mode of 2, 3, 3, 5, 7 is ___.", ["2", "3", "4", "7"], 1, "math-data", "3 appears most often.", "data"),
  q("ms3-9", "Expand (x + 1)².", ["x² + 1", "x² + 2x + 1", "x² + x + 1", "2x + 1"], 1, "math-algebra", "(x + 1)(x + 1) = x² + 2x + 1.", "algebra"),
  q("ms3-10", "Write 1/x + 1/2 as a single fraction.", ["2/(x + 2)", "(2 + x) / 2x", "1/(2x)", "(1 + x)/2"], 1, "math-algebra", "Common denominator 2x: 2/2x + x/2x = (2 + x)/2x.", "algebra"),
  q("ms3-11", "SSS, SAS, ASA and RHS are tests for ___.", ["similar triangles", "congruent triangles", "parallel lines", "equal areas only"], 1, "math-geo", "Those are congruence tests. AAA is similarity.", "geometry"),
  q("ms3-12", "A shop marks a bag $80 then gives 10% off. The selling price is ___.", ["$8", "$70", "$72", "$88"], 2, "math-percent", "10% of 80 = 8. 80 − 8 = 72.", "word"),
];

export const MATH_DIAGNOSTIC_PAPERS: Paper[] = [
  { id: "math-p2", titleZh: "P2 数学摸底 · 12 题", blurb: "申请 P2 测 P1：百以内加减、钱币、半点钟、简单图形。约 12 分钟。", track: "MATH", intended: "P2", targetCes: null, minutes: 12, items: MP2, subject: "math" },
  { id: "math-p3", titleZh: "P3 数学摸底 · 12 题", blurb: "申请 P3 测 P2：乘除、千以内、一半、钱币进位。约 12 分钟。", track: "MATH", intended: "P3", targetCes: null, minutes: 12, items: MP3, subject: "math" },
  { id: "math-p4", titleZh: "P4 数学摸底 · 12 题", blurb: "申请 P4 测 P3：周长面积、平行直角、分数、条形图。约 15 分钟。", track: "MATH", intended: "P4", targetCes: null, minutes: 15, items: MP4, subject: "math" },
  { id: "math-p5", titleZh: "P5 数学摸底 · 12 题", blurb: "申请 P5 测 P4：十万位值、小数分数、百分数、直线上的角。约 15 分钟。", track: "MATH", intended: "P5", targetCes: null, minutes: 15, items: MP5, subject: "math" },
  { id: "math-s1", titleZh: "S1 数学摸底 · 12 题", blurb: "申请 S1 测 P6：百分数、比、平均、速度、三角形圆、简易方程。约 15 分钟。", track: "SMATH", intended: "Sec 1", targetCes: null, minutes: 15, items: MS1, subject: "math" },
  { id: "math-s2", titleZh: "S2 数学摸底 · 12 题", blurb: "申请 S2 测 S1：负数、去括号、一次方程、对应角、平均数中位数。约 15 分钟。", track: "SMATH", intended: "Sec 2", targetCes: null, minutes: 15, items: MS2, subject: "math" },
  { id: "math-s3", titleZh: "S3 数学摸底 · 12 题", blurb: "申请 S3 测 S2：勾股、因式、二元一次方程组、相似、概率。约 15 分钟。", track: "SMATH", intended: "Sec 3", targetCes: null, minutes: 15, items: MS3, subject: "math" },
];

export function getMathPaper(id: string) {
  return MATH_DIAGNOSTIC_PAPERS.find((p) => p.id === id);
}
