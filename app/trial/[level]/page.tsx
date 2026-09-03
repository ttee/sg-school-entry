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
    "如何练习：\n1. 先看题目\n2. 先跟读"
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
      description: "先看课文怎么从新加坡场景来。从容应对 CEQ、AEIS 入学考。",
      openGraph: {
        title: "狮城入学 · 小学英语试学",
        description: "先看课文怎么从新加坡场景来。从容应对 CEQ、AEIS 入学考。",
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
        description: "先看课文怎么从新加坡场景来。从容应对 CEQ、AEIS 入学考。",
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
  
  if (level === "B1") {
    return {
      title: "狮城入学 · 小学英语试学",
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
    week.kaizenFocus = "Use articles a / an / the.";

    const grammarQ = week.questions.find(q => q.type === "grammar" && q.order === 2);
    if (grammarQ) {
      grammarQ.options = JSON.stringify([
        "Mei lost ____ water bottle.|A. a|B. an|C. the|D. (不加)",
        "Auntie Tan wears ____ pink polo shirt.|A. a|B. an|C. the|D. (不加)",
        "Yes, that is ____ white water bottle!|A. a|B. an|C. the|D. (不加)",
        "Mei wrote ____ email to her cousin.|A. a|B. an|C. the|D. (不加)",
        "They walked to ____ Lost and Found office.|A. a|B. an|C. the|D. (不加)",
        "There is ____ big sign on the wall.|A. a|B. an|C. the|D. (不加)",
      ]);
      grammarQ.correctAnswer = "A,A,C,B,C,A";
      grammarQ.choiceWhy = JSON.stringify([
        {"A": "第一次说到这个水壶，单数可数名词用 a。", "B": "water 以辅音开头，不用 an。", "C": "还没指明是哪一个水壶，不用 the。", "D": "水壶是单数可数名词，前面要有冠词，不能空着。"},
        {"A": "第一次说到这件衣服，用 a。", "B": "pink 以辅音开头，不用 an。", "C": "还没指定是哪一件 polo，不用 the。", "D": "shirt 是单数可数名词，前面要加冠词，不能空着。"},
        {"A": "这不是第一次随便提到，已经认出来了，不用 a。", "B": "white 以辅音开头，而且已经认出来了，不用 an。", "C": "已经认出来的那个水壶，用 the。", "D": "已经指着那个水壶，前面要加 the，不能空着。"},
        {"A": "email 以元音开头，第一次说不用 a，要用 an。", "B": "email 以元音开头，第一次说到这封邮件，用 an。", "C": "还没指明是哪一封邮件，不用 the。", "D": "email 是单数可数名词，前面要加冠词，不能空着。"},
        {"A": "这是学校里大家都知道的那一处，不是随便一个办公室，不用 a。", "B": "Lost 以辅音开头，而且是大家都知道的那一处，不用 an。", "C": "学校里大家知道的失物招领处，用 the。", "D": "说到大家都知道的那间办公室，前面要加 the，不能空着。"},
        {"A": "第一次说到这块牌子，用 a。", "B": "big 以辅音开头，不用 an。", "C": "还没指定是哪一块牌子，不用 the。", "D": "sign 是单数可数名词，前面要加冠词，不能空着。"},
      ]);
      grammarQ.points = 6;
    }

    // Sanitize all speaking questions to remove AI evaluation and recording button references
    week.questions.forEach((question) => {
      if (question.type === "writing") {
        question.content = question.content
          .replace(/成功标准 \/ Success Criteria[\s\S]*$/, "成功标准（A2 Key for Schools 便条）：\n✓ 包含全部 3 个内容点\n✓ 25 词或以上\n✓ 正确使用冠词 a / an / the\n✓ 简短便条格式")
          .replace(/物主代词/g, "")
          .replace(/possessives?: my\/mine/gi, "")
          .replace(/Use articles: a\/the; possessives: my\/mine/g, "正确使用冠词 a / an / the");
      }
      if (question.type === "speaking") {
        question.content = question.content.replace(/• Have you ever lost something at school\? What was it\?\n?/g, "");
        question.content = question.content.replace(/口语练习 \/ Speaking Practice/g, "口语练习");
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

  // B1 W0: Override title; strip guest-facing AI / 开始录音 from speaking
  if (level === "B1" && week.weekNumber === 0) {
    week.title = "试学周";
    week.description = "转入以英语授课的学校";
    week.errorFocus = "现在完成时";
    week.questions.forEach((question) => {
      if (question.type === "writing") {
        question.content = question.content.replace(
          /成功标准 \/ Success Criteria[\s\S]*$/,
          "成功标准：\n✓ 3条建议清晰\n✓ 使用现在完成时描述持续经验\n✓ 使用一般过去时说明确过去事件\n✓ 情态动词和连接词\n✓ 支持和鼓励的语气\n✓ 100-120词"
        );
      }
      if (question.type === "speaking") {
        question.content = question.content.replace(/口语练习 \/ Speaking Practice/g, "口语练习");
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
