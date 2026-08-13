import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { redirect } from "next/navigation";
import WeekHomework from "@/components/WeekHomework";

export default async function WeekPage({
  params,
}: {
  params: { weekId: string };
}) {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    redirect("/login");
  }

  const week = await prisma.week.findUnique({
    where: { id: params.weekId },
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
  const canAccess = isSubscribed || week.isSample;

  if (!canAccess) {
    redirect("/learn");
  }

  const submission = week.submissions[0];

  return (
    <WeekHomework
      week={week}
      questions={week.questions}
      submission={submission}
      userId={session.user.id}
    />
  );
}
