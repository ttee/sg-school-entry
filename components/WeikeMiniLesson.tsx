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

  const isMath = level === "MATH";

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
