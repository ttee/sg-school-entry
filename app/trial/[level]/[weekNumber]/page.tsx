import Link from "next/link";
import { prisma } from "@/lib/db";
import { notFound } from "next/navigation";
import WeekHomework from "@/components/WeekHomework";
import type { Metadata } from "next";

export const dynamic = 'force-dynamic';

const validLevels = ["A2", "B1", "MATH", "SEC", "SMATH"];

function sanitizeSpeakingContentForGuest(content: string): string {
  // Remove Grammar focus for AI section and AI will sentences
  let sanitized = content
    .replace(/Grammar focus for AI:[\s\S]*?(?=如何练习|$)/gi, "")
    .replace(/AI will [^\n]*\n?/gi, "")
    .replace(/AI会[^\n。]*[。\n]/g, "")
    .replace(/AI会[^\n。]*/g, "");
  
  // Replace the entire 如何练习 section with guest-friendly version
  sanitized = sanitized.replace(
    /如何练习\s*\/\s*How to practise:[\s\S]*/i,
    "如何练习 / How to practise:\n1. 先看题目\n2. 先跟读"
  );
  
  // Additional cleanup for any remaining AI/recording references
  sanitized = sanitized
    .replace(/播放听一听，满意后提交给AI评估/g, "")
    .replace(/提交给AI评估/g, "")
    .replace(/录音将由AI评估并提供改进建议/g, "")
    .replace(/录音将由AI评估/g, "")
    .replace(/AI评估/g, "")
    .replace(/\s*\([^)]*submit for AI[^)]*\)/gi, "")
    .replace(/\s*\([^)]*AI feedback[^)]*\)/gi, "")
    .replace(/\s*\([^)]*AI evaluation[^)]*\)/gi, "")
    .replace(/submit for AI feedback/gi, "")
    .replace(/submit for AI/gi, "")
    .replace(/AI feedback/gi, "")
    .replace(/AI evaluation/gi, "")
    .replace(/点击下方"开始录音"按钮/g, "")
    .replace(/点击"开始录音"[^。\n]*/g, "")
    .replace(/\d+\.\s*点击[^。\n]*"开始录音"[^。\n]*/g, "")
    .replace(/Tap\s+(?:the\s+)?"开始录音"[^\n。]*/gi, "")
    .replace(/\([^)]*Tap\s+"开始录音"[^)]*\)/gi, "")
    .replace(/开始录音/g, "")
    .replace(/正式周由顾问开通批改功能/g, "")
    .replace(/正式周由顾问开通批改/g, "")
    // Clean up orphaned parentheses and excessive whitespace
    .replace(/\(\s*\)/g, "")
    .replace(/^\s*\(\s*$/gm, "")
    .replace(/\s{2,}/g, " ")
    .replace(/\n{3,}/g, "\n\n")
    .replace(/^\s+|\s+$/gm, "")
    .trim();
  
  return sanitized;
}

const levelNames: Record<string, string> = {
  A2: "A2 Key for Schools",
  B1: "B1 Preliminary for Schools",
  MATH: "AEIS 数学（小学 P2–P4）",
  SEC: "中学英语（Sec 1）",
  SMATH: "中学数学（Sec 1）",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ level: string; weekNumber: string }>;
}): Promise<Metadata> {
  const { level, weekNumber } = await params;
  
  if (level === "A2" && weekNumber === "1") {
    return {
      title: "第 1 周：日常作息 — 不用登录就能做",
      description: "第 1 周日常作息。打开就能做，不用登录。",
      openGraph: {
        title: "第 1 周：日常作息 — 不用登录就能做",
        description: "第 1 周日常作息。打开就能做，不用登录。",
        url: "https://sg-school-entry.vercel.app/trial/A2/1",
        siteName: "狮城入学",
        locale: "zh_CN",
        type: "website",
        images: [
          {
            url: "/og-ceq.jpg",
            width: 1200,
            height: 630,
            alt: "CEQ 英语第 1 周作业",
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: "第 1 周：日常作息 — 不用登录就能做",
        description: "第 1 周日常作息。打开就能做，不用登录。",
        images: ["/og-ceq.jpg"],
      },
    };
  }
  
  return {
    title: `狮城入学 · ${levelNames[level] || "试学"}`,
  };
}

export default async function TrialWeekPage({
  params,
}: {
  params: Promise<{ level: string; weekNumber: string }>;
}) {
  const { level, weekNumber } = await params;
  const weekNum = parseInt(weekNumber, 10);

  if (!validLevels.includes(level) || isNaN(weekNum)) {
    notFound();
  }

  // ONLY allow A2 Week 1 for public trial. Everything else is locked.
  if (level !== "A2" || weekNum !== 1) {
    return (
      <>
        <div className="min-h-screen bg-paper flex items-center justify-center px-4">
          <div className="max-w-md text-center">
            <h1 className="font-serif font-semibold text-2xl text-ink mb-3">
              这一周未开放
            </h1>
            <p className="text-ink-2 mb-6">
              {levelNames[level]} 第 {weekNumber} 周暂未开放试学。
            </p>
            <Link
              href="/trial"
              className="inline-flex items-center justify-center px-6 py-3 bg-accent text-accent-ink font-semibold rounded-full hover:bg-accent-hover transition-colors"
            >
              回到试学选择
            </Link>
          </div>
        </div>
      </>
    );
  }

  const week = await prisma.week.findUnique({
    where: {
      level_weekNumber: {
        level: level,
        weekNumber: weekNum,
      },
    },
    include: {
      questions: {
        orderBy: {
          order: "asc",
        },
      },
    },
  });

  if (!week) {
    return (
      <>
        <div className="min-h-screen bg-paper flex items-center justify-center px-4">
          <div className="max-w-md text-center">
            <h1 className="font-serif font-semibold text-2xl text-ink mb-3">
              这一周未开放
            </h1>
            <p className="text-ink-2 mb-6">
              {levelNames[level]} 第 {weekNumber} 周暂未开放试学。
            </p>
            <Link
              href="/trial"
              className="inline-flex items-center justify-center px-6 py-3 bg-accent text-accent-ink font-semibold rounded-full hover:bg-accent-hover transition-colors"
            >
              回到试学选择
            </Link>
          </div>
        </div>
      </>
    );
  }

  // Override A2 Week 1 content with shortened texts from seed (after PR 279 merge)
  // This ensures guests see the updated content even if production DB hasn't been re-seeded
  if (level === "A2" && weekNum === 1) {
    week.title = "第 1 周：日常作息";
    week.description = "谈论日常活动";
    week.parentBrief = "本周纠错焦点：第三人称单数 -s（he/she/it + 动词加 -s）。中文动词不变形，孩子常说 she wake up；英语里必须是 she wakes up。例如 Mei 自己说 I wake up at 6:15，但说到妹妹要加 -s：My sister wakes up later。另一个常错点是时间介词：at 6:15, in the morning, on Monday。";
    
    // Update reading question (order 1)
    const readingQ = week.questions.find(q => q.type === "reading" && q.order === 1);
    if (readingQ) {
      readingQ.content = `Read Mei's diary entry:

My School Day – Monday

My name is Mei. I live in Bedok with my family. Every Monday I wake up at 6:15. I brush my teeth and put on my school uniform. My mum prepares breakfast. I drink tea and check my school bag.

My little sister Jia is still sleeping! She goes to kindergarten, so she wakes up later. At 7:00 my dad and I leave home. We walk to the bus stop and take the bus to school.

School starts at 8:30. I have English, Math, and PE. At 2:00 p.m. school finishes. I take the bus home and do my homework. I like Mondays!`;
      readingQ.options = JSON.stringify([
        "What time does Mei wake up?|A. 6:00|B. 6:15|C. 7:00|D. 8:30",
        "Who wakes up later than Mei?|A. Her dad|B. Her mum|C. Her sister Jia|D. Her teacher",
        "What time does Mei leave home?|A. 6:15|B. 7:00|C. 8:30|D. 2:00",
        "How does Mei travel to school?|A. She walks all the way|B. Dad drives her|C. She takes the bus|D. She rides a bicycle",
        "What time does school start?|A. 6:15|B. 7:00|C. 8:30|D. 2:00",
      ]);
      readingQ.correctAnswer = "B,C,B,C,C";
      readingQ.points = 5;
    }
    
    // Update grammar question (order 2)
    const grammarQ = week.questions.find(q => q.type === "grammar" && q.order === 2);
    if (grammarQ) {
      grammarQ.content = `Read about Jun's routine. Choose the correct word for each gap.

My School Routine

My name is Jun. I (1) ____ at 6:15 every morning. My sister Amy is in Primary 5. She (2) ____ her alarm at 6:30, so she wakes up later than me.

After we wash up, we have breakfast together. Mum (3) ____ us rice porridge or toast. Amy always (4) ____ orange juice, but I prefer milk. Dad leaves for work (5) ____ 7:00 a.m. He (6) ____ the MRT to the city.

Amy and I walk to the bus stop. We (7) ____ the same bus to school. Amy's school is near mine, so we get off at the same stop. Then Amy walks left and I walk right!`;
      grammarQ.options = JSON.stringify([
        "(1)|A. wake up|B. wakes up|C. woke up|D. waking up",
        "(2)|A. set|B. sets|C. setting|D. setted",
        "(3)|A. make|B. makes|C. making|D. maked",
        "(4)|A. drink|B. drinks|C. drank|D. drinking",
        "(5)|A. in|B. on|C. at|D. to",
        "(6)|A. take|B. takes|C. taking|D. taked",
        "(7)|A. catch|B. catches|C. catched|D. catching",
      ]);
      grammarQ.correctAnswer = "A,B,B,B,C,B,A";
      grammarQ.points = 7;
    }
    
    // Sanitize all speaking questions to remove AI evaluation and recording button references
    week.questions.forEach((question) => {
      if (question.type === "speaking") {
        question.content = sanitizeSpeakingContentForGuest(question.content);
      }
    });
  }

  return (
    <div className="min-h-screen bg-paper">
      <header className="sticky top-0 z-40 bg-card/95 backdrop-blur-md border-b border-line">
        <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
          <Link href="/trial" className="flex items-center gap-2.5">
            <svg className="w-7 h-7 text-accent" viewBox="0 0 32 32">
              <rect
                x="1"
                y="1"
                width="30"
                height="30"
                rx="7"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M8 24V11h16v13"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinejoin="round"
              />
              <path
                d="M13 24V15h6v9"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinejoin="round"
              />
            </svg>
            <div className="flex flex-col leading-tight">
              <strong className="font-serif font-semibold text-ink text-sm">
                狮城入学 试学
              </strong>
            </div>
          </Link>
          <div className="flex items-center gap-4">
            <Link
              href="/trial"
              className="text-sm text-muted hover:text-ink transition-colors"
            >
              返回试学选择
            </Link>
            <Link
              href="/#contact"
              className="text-sm text-muted hover:text-ink transition-colors"
            >
              报名咨询
            </Link>
          </div>
        </div>
      </header>
      <main className="max-w-5xl mx-auto px-4 py-8">
        {level === "A2" && weekNum === 1 && (
          <div className="mb-6">
            <h1 className="font-serif font-semibold text-2xl text-ink mb-2">
              第 1 周：日常作息
            </h1>
            <p className="text-ink-2 mb-4">
              选择题打开就能做。写作和口语先看题目、先跟读。正式周由顾问开通批改。
            </p>
            <div className="bg-accent/10 border border-accent/20 rounded-lg p-4 mb-4">
              <p className="text-ink-2 text-sm">
                <strong className="text-ink">📝 例句参考 / Model sentence:</strong>
              </p>
              <p className="text-ink font-medium mt-1">
                I wake up at 6:15.
              </p>
            </div>
          </div>
        )}
        <WeekHomework
          week={week}
          questions={week.questions}
          submission={null}
          userId=""
          guest={true}
        />
      </main>
    </div>
  );
}
