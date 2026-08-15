import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "狮城入学 · 新加坡政府学校升学工作室 · CEQ + AEIS 路径",
  description:
    "专注新加坡政府学校路径的升学工作室。小班直播课（≤8人）+ 作业 app。月度会员 S$320，A2 / B1 预付冲刺包 S$2,480 起。非 MOE/SEAB/Cambridge 官方。",
  themeColor: "#F4EFE6",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
