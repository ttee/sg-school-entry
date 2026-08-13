import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "狮城入学 · 新加坡小学 CEQ 英语课程与 AEIS 入学路径",
  description:
    "狮城入学协助中国家庭走通新加坡教育部政府学校路径。提供小学 CEQ 英语冲刺班（A2 / B1 剑桥 for Schools），以及完整 AEIS 入学说明。录取不保证。非教育部、考评局或剑桥官方机构。",
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
