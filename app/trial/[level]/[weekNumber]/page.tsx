import Link from "next/link";
import { prisma } from "@/lib/db";
import { notFound } from "next/navigation";
import WeekHomework from "@/components/WeekHomework";
import type { Metadata } from "next";

export const dynamic = 'force-dynamic';

const validLevels = ["A2", "B1", "MATH", "SEC", "SMATH"];

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
      title: "第 1 周 Daily Routines 日常作息 — 不用登录就能做",
      description: "I wake up at 6:15. 不用登录。12 周 RMB 2,680，向升学顾问支付。",
      openGraph: {
        title: "第 1 周 Daily Routines 日常作息 — 不用登录就能做",
        description: "I wake up at 6:15. 不用登录。12 周 RMB 2,680，向升学顾问支付。",
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
        title: "第 1 周 Daily Routines 日常作息 — 不用登录就能做",
        description: "I wake up at 6:15. 不用登录。12 周 RMB 2,680，向升学顾问支付。",
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
              第 1 周：Daily Routines 日常作息
            </h1>
            <p className="text-ink-2 mb-4">
              先看微课。选择题打开就能做。写作可以输入，但登录后老师才收。
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
