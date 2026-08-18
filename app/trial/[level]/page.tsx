import Link from "next/link";
import { prisma } from "@/lib/db";
import { notFound } from "next/navigation";
import WeekHomework from "@/components/WeekHomework";
import OfficialClip from "@/components/OfficialClip";

export const dynamic = 'force-dynamic';

const validLevels = ["A2", "B1", "MATH", "SEC", "SMATH"];

const levelNames: Record<string, string> = {
  A2: "A2 Key for Schools",
  B1: "B1 Preliminary for Schools",
  MATH: "AEIS 数学（小学 P2–P4）",
  SEC: "中学英语（Sec 1）",
  SMATH: "中学数学（Sec 1）",
};

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
          <div className="mb-8">
            <p className="text-ink-2 mb-4">
              先看官方口语样例，再做试学周。
            </p>
            <OfficialClip
              videoId="ZjGt6r8XSTg"
              title="CEQ 口语长这样"
              credit="片源：Cambridge English 官方频道 English with Cambridge《A2 Key for Schools Speaking test — Asia and Vittoria》。官方口语样例，不是本周作业。"
              hideWeeklyHomework={true}
            />
          </div>
        )}
        {level === "B1" && (
          <div className="mb-8">
            <p className="text-ink-2 mb-4">
              先看官方口语样例，再做试学周。
            </p>
            <OfficialClip
              videoId="xF_Q2anYOfc"
              title="CEQ 口语长这样"
              credit="片源：Cambridge English 官方频道 English with Cambridge《B1 Preliminary for Schools Speaking Test — Roberto and Simone》。官方口语样例，不是本周作业。"
              hideWeeklyHomework={true}
            />
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
