"use client";

type WeikeMiniLessonProps = {
  level: string;
  weekNumber: number;
};

export default function WeikeMiniLesson({ level, weekNumber }: WeikeMiniLessonProps) {
  // Define mini-lesson content for each week
  const lessons: Record<string, { fossil: string; examples: string[]; gloss: string }> = {
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
      fossil: "Jun Wei bought 2 books",
      examples: [
        "Jun Wei bought 2 books for $8 each.",
        "2 × $8 = $16",
        "He paid $21 in total."
      ],
      gloss: "新加坡钱币用 $ 符号。2 books at $8 each → 2 × $8 = $16。做应用题先找关键词：each、in total、altogether。"
    },
    "MATH-1": {
      fossil: "3 packs of 4",
      examples: [
        "3 packs of 4 = 3 × 4 = 12",
        "12 sweets shared equally among 3 children.",
        "12 ÷ 3 = 4"
      ],
      gloss: "乘法 multiplication：3 packs of 4 = 3 × 4。除法 division：12 shared equally among 3 = 12 ÷ 3。练习关键词：of, shared equally, per。"
    },
    "MATH-2": {
      fossil: "three eighth of the pizza",
      examples: [
        "3/8 of the pizza",
        "Mei ate 2/8, Priya ate 3/8.",
        "2/8 + 3/8 = 5/8"
      ],
      gloss: "分数：3/8 读作 three eighths。分母加 -s（eighths, quarters）。加法：same denominator → 2/8 + 3/8 = 5/8。"
    },
    "MATH-3": {
      fossil: "2 metres minus 1 metres",
      examples: [
        "The bookshelf is 2 m. The table is 1 m.",
        "2 m − 1 m = 1 m",
        "2 hours = 120 minutes."
      ],
      gloss: "长度 length：2 metres (m)。时间 time：2 hours = 120 minutes。单位不用复数 -s：2 m（不是 2 ms）。做题先统一单位。"
    },
    "MATH-4": {
      fossil: "a can is a cube",
      examples: [
        "A dice is a cube. It has 6 square faces.",
        "A book box is a cuboid. It has 6 rectangular faces.",
        "A can is a cylinder. It has 2 circular faces."
      ],
      gloss: "正方体 cube（6 个正方形面）vs 长方体 cuboid（6 个长方形面）；圆柱 cylinder（2 个圆形面）；圆锥 cone；球体 sphere。平面图形规律按 size / shape / colour / orientation 找下一个。"
    },
    "MATH-5": {
      fossil: "4 pictures means 4 children",
      examples: [
        "Each ⭐ stands for 2. 4 stars → 4 × 2 = 8.",
        "Apple 8, orange 6. Apple has 2 more.",
        "Each ⭐ stands for 5. 3 stars → 15."
      ],
      gloss: "象形统计图有单位。Each picture stands for 2 / 5 / 10。先看 1 个图代表几个，再乘。不要数图就当答案。"
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
  };

  const key = `${level}-${weekNumber}`;
  const lesson = lessons[key];

  if (!lesson) {
    return null;
  }

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
