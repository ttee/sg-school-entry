import Link from "next/link";
import { prisma } from "@/lib/db";
import { notFound } from "next/navigation";
import WeekHomework from "@/components/WeekHomework";
import OfficialClip from "@/components/OfficialClip";
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
  params: Promise<{ level: string }>;
}): Promise<Metadata> {
  const { level } = await params;
  
  if (level === "A2") {
    return {
      title: "狮城入学 · 小学英语试学",
      description: "先看我们怎么教。来新加坡入读私立学校，从容应对 CEQ、AEIS 入学考。",
      openGraph: {
        title: "狮城入学 · 小学英语试学",
        description: "先看我们怎么教。来新加坡入读私立学校，从容应对 CEQ、AEIS 入学考。",
        url: "https://sg-school-entry.vercel.app/trial/A2",
        siteName: "狮城入学",
        locale: "zh_CN",
        type: "website",
        images: [
          {
            url: "/og-ceq.jpg",
            width: 1200,
            height: 630,
            alt: "狮城入学 · 小学英语试学",
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: "狮城入学 · 小学英语试学",
        description: "先看我们怎么教。来新加坡入读私立学校，从容应对 CEQ、AEIS 入学考。",
        images: ["/og-ceq.jpg"],
      },
    };
  }
  
  if (level === "MATH") {
    return {
      title: "小学 AEIS 数学试学",
      description: "小学 AEIS 数学试学，打开就能做。",
      openGraph: {
        title: "小学 AEIS 数学试学",
        description: "小学 AEIS 数学试学，打开就能做。",
        url: "https://sg-school-entry.vercel.app/trial/MATH",
        siteName: "狮城入学",
        locale: "zh_CN",
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: "小学 AEIS 数学试学",
        description: "小学 AEIS 数学试学，打开就能做。",
      },
    };
  }
  
  if (level === "SEC") {
    return {
      title: "中学 AEIS 英语试学",
      description: "中学 AEIS 英语试学，不是 CEQ。",
      openGraph: {
        title: "中学 AEIS 英语试学",
        description: "中学 AEIS 英语试学，不是 CEQ。",
        url: "https://sg-school-entry.vercel.app/trial/SEC",
        siteName: "狮城入学",
        locale: "zh_CN",
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: "中学 AEIS 英语试学",
        description: "中学 AEIS 英语试学，不是 CEQ。",
      },
    };
  }
  
  if (level === "SMATH") {
    return {
      title: "中学 AEIS 数学试学",
      description: "中学 AEIS 数学试学，不是 CEQ。",
      openGraph: {
        title: "中学 AEIS 数学试学",
        description: "中学 AEIS 数学试学，不是 CEQ。",
        url: "https://sg-school-entry.vercel.app/trial/SMATH",
        siteName: "狮城入学",
        locale: "zh_CN",
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: "中学 AEIS 数学试学",
        description: "中学 AEIS 数学试学，不是 CEQ。",
      },
    };
  }
  
  return {
    title: `狮城入学 · ${levelNames[level] || "试学周"}`,
  };
}

export default async function TrialLevelPage({
  params,
}: {
  params: Promise<{ level: string }>;
}) {
  const { level } = await params;

  if (!validLevels.includes(level)) {
    notFound();
  }

  const week = await prisma.week.findUnique({
    where: {
      level_weekNumber: {
        level: level,
        weekNumber: 0,
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

  if (!week || !week.isSample) {
    return (
      <>
        <div className="min-h-screen bg-paper flex items-center justify-center px-4">
          <div className="max-w-md text-center">
            <h1 className="font-serif font-semibold text-2xl text-ink mb-3">
              试学周未开放
            </h1>
            <p className="text-ink-2 mb-6">
              {levelNames[level]} 的试学周暂未开放。
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

  // A2 W0: Override title/description and sanitize speaking content for guests
  if (level === "A2") {
    week.title = "试学周 · 失物招领";
    week.description = "";
    week.errorFocus = "冠词 a / an / the";
    week.parentBrief = "本周只练冠词 a / an / the.";

    const grammarQ = week.questions.find(q => q.type === "grammar" && q.order === 2);
    if (grammarQ) {
      grammarQ.options = JSON.stringify([
        "Is ____ your bottle?|A. this|B. these|C. those|D. them",
        "Yes, that's ____.|A. my|B. mine|C. me|D. I",
        "Mei lost ____ water bottle.|A. a|B. an|C. the|D. some",
        "Auntie Tan wears ____ pink polo shirt.|A. a|B. an|C. the|D. some",
        "That is ____ bottle with the pink flower.|A. a|B. an|C. the|D. no article",
        "____ is Auntie Tan at the counter.|A. This|B. That|C. These|D. Those",
        "The Lost and Found office is ____ the school office.|A. in|B. at|C. on|D. by",
      ]);
      grammarQ.correctAnswer = "A,B,A,A,C,B,A";
      grammarQ.choiceWhy = JSON.stringify([
        {"A": "问Is this your bottle用this指近处的单数物品。", "B": "these是复数，不能指一个水杯。", "C": "those是复数且指远处，不合适。", "D": "them是宾格代词，不能做主语。"},
        {"A": "my后面要加名词（my bottle），不能单独用。", "B": "mine = my bottle，可以单独用表示我的东西。", "C": "me是宾格我，不是物主代词。", "D": "I是主格我，不是物主代词。"},
        {"A": "首次提到用a（a water bottle）。", "B": "water不是元音开头，不用an。", "C": "首次提到不用the，再提才用the。", "D": "some用于不确定数量，这里是一个水杯。"},
        {"A": "首次提到衣服用a（a pink polo shirt）。", "B": "pink不是元音开头，不用an。", "C": "首次提到不用the。", "D": "some不用于单数可数名词。"},
        {"A": "已经说过的特定水杯，用the表示那个已知的。", "B": "bottle不是元音开头，不用an。", "C": "已经提过的特定物品用the。", "D": "可数名词单数前要加冠词。"},
        {"A": "This用于近处，Auntie Tan在柜台那边较远。", "B": "That用于指较远的人或物（Auntie Tan在柜台那边）。", "C": "These是复数，Auntie Tan是一个人。", "D": "Those是复数，不能指一个人。"},
        {"A": "Lost and Found office在school office里面，用in。", "B": "at表示在某个点，不是里面。", "C": "on表示在表面上，不合适。", "D": "by表示在旁边，不是里面。"},
      ]);
      grammarQ.points = 7;
    }

    // Sanitize all speaking questions to remove AI evaluation and recording button references
    week.questions.forEach((question) => {
      if (question.type === "speaking") {
        question.content = question.content.replace(/• Have you ever lost something at school\? What was it\?\n?/g, "");
        question.content = sanitizeSpeakingContentForGuest(question.content);
      }
    });
  }

  // SEC W0: Override title and sanitize 化石 references
  if (level === "SEC" && week.weekNumber === 0) {
    week.title = "试学周";
    
    // Replace 化石/化石化 with 这个中文迁移错
    if (week.errorFocus) {
      week.errorFocus = week.errorFocus.replace(/化石化?/g, "这个中文迁移错");
    }
    if (week.parentBrief) {
      week.parentBrief = week.parentBrief.replace(/化石化?/g, "这个中文迁移错");
    }
    
    // Sanitize questions
    week.questions.forEach((question) => {
      question.content = question.content.replace(/化石化?/g, "这个中文迁移错");
      if (question.choiceWhy) {
        question.choiceWhy = question.choiceWhy.replace(/化石化?/g, "这个中文迁移错");
      }
    });
  }

  // MATH W0: Override title
  if (level === "MATH" && week.weekNumber === 0) {
    week.title = "数学试学周";
  }

  // SMATH W0: Override title
  if (level === "SMATH" && week.weekNumber === 0) {
    week.title = "试学周";
  }

  // B1 W0: Override title
  if (level === "B1" && week.weekNumber === 0) {
    week.title = "试学周";
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
                狮城入学 试学周
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
        {level === "A2" && (
          <div className="mb-6">
            <h1 className="font-serif font-semibold text-2xl text-ink mb-2">
              试学周
            </h1>
            <p className="text-ink-2 mb-4">
              阅读第 1 题打开就能做。
            </p>
          </div>
        )}
        <WeekHomework
          week={week}
          questions={week.questions}
          submission={null}
          userId=""
          guest={true}
        />
        {level === "B1" && (
          <div className="mt-8">
            <h2 className="font-serif font-semibold text-xl text-ink mb-3">
              CEQ 口语长这样
            </h2>
            <p className="text-ink-2 mb-4">
              官方口语样例。
            </p>
            <OfficialClip
              videoId="xF_Q2anYOfc"
              title="CEQ 口语长这样"
              credit="片源：Cambridge English 官方频道 English with Cambridge《B1 Preliminary for Schools Speaking Test — Roberto and Simone》。官方口语样例，不是本周作业。"
              hideWeeklyHomework={true}
            />
          </div>
        )}
      </main>
    </div>
  );
}
