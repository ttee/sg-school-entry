import type { Metadata } from "next";
import { redirect } from "next/navigation";
import SiteChrome from "@/components/SiteChrome";
import { isAdminRole } from "@/lib/access";
import { getSession } from "@/lib/session";

export const metadata: Metadata = {
  title: "CEQ / AEIS 课程 · 狮城入学",
  description:
    "用新加坡场景上课。CEQ / AEIS 摸底卷、周进度、限时卷与家长手册。",
  robots: { index: false, follow: false },
};

export default async function CurriculumLayout({ children }: { children: React.ReactNode }) {
  const session = await getSession();
  if (!isAdminRole(session?.user?.role)) {
    if (!session) {
      redirect("/login?callbackUrl=/curriculum");
    }
    redirect("/learn");
  }

  return (
    <SiteChrome current="/curriculum">
      <main id="main" className="max-w-5xl mx-auto px-4 py-10 md:py-14">
        {children}
      </main>
    </SiteChrome>
  );
}
