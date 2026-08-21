import { getSession } from "@/lib/session";
import { prisma } from "@/lib/db";
import { redirect } from "next/navigation";
import WeekHomework from "@/components/WeekHomework";

export default async function WeekPage({
  params,
}: {
  params: Promise<{ weekId: string }>;
}) {
  const { weekId } = await params;
  const session = await getSession();

  if (!session?.user) {
    redirect("/login");
  }

  const week = await prisma.week.findUnique({
    where: { id: weekId },
    include: {
      questions: {
        orderBy: {
          order: "asc",
        },
      },
      submissions: {
        where: {
          userId: session.user.id,
        },
      },
    },
  });

  if (!week) {
    redirect("/learn");
  }

  const isSubscribed = session.user.subscribed;
  const isAdmin = session.user.role === "admin";
  const canAccess = isSubscribed || week.isSample || isAdmin;

  if (!canAccess) {
    redirect("/learn");
  }

  const submission = week.submissions[0];

  // Serialize dates for RSC → client component
  const serializedSubmission = submission
    ? {
        ...submission,
        completedAt: submission.completedAt ? submission.completedAt.toISOString() : null,
        createdAt: submission.createdAt.toISOString(),
        updatedAt: submission.updatedAt.toISOString(),
      }
    : null;

  return (
    <WeekHomework
      week={week}
      questions={week.questions}
      submission={serializedSubmission}
      userId={session.user.id}
    />
  );
}
