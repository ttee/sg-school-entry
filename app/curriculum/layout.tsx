import type { Metadata } from "next";
import SiteChrome from "@/components/SiteChrome";

export const metadata: Metadata = {
  title: "PRC 升学课程 · 狮城入学",
  description:
    "面向中国学生的 CEQ / AEIS 课程：摸底卷、母语迁移矩阵、周进度、限时卷与家长手册。",
};

export default function CurriculumLayout({ children }: { children: React.ReactNode }) {
  return (
    <SiteChrome current="/curriculum">
      <main id="main" className="max-w-5xl mx-auto px-4 py-10 md:py-14">
        {children}
      </main>
    </SiteChrome>
  );
}
