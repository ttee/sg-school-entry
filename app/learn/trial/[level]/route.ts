import { prisma } from "@/lib/db";
import { redirect } from "next/navigation";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ level: string }> }
) {
  const { level } = await params;
  
  const validLevels = ["A2", "B1", "MATH", "SEC", "SMATH"];
  
  if (!validLevels.includes(level)) {
    redirect("/learn");
  }
  
  const trialWeek = await prisma.week.findUnique({
    where: {
      level_weekNumber: {
        level: level,
        weekNumber: 0,
      },
    },
  });
  
  if (!trialWeek) {
    redirect("/learn");
  }
  
  redirect(`/learn/${trialWeek.id}`);
}
