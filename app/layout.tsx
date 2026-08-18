import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "狮城入学 · 新加坡政府学校升学工作室 · CEQ + AEIS 路径",
  description:
    "专注新加坡政府学校路径的升学工作室。每周作业 app + 家长微信跟进。月度会员 S$320，A2 / B1 预付包 S$2,480 起。非 MOE/SEAB/Cambridge 官方。",
  themeColor: "#F4EFE6",
  metadataBase: new URL("https://sg-school-entry.vercel.app"),
  openGraph: {
    title: "狮城入学 · 新加坡政府学校升学工作室 · CEQ + AEIS 路径",
    description: "专注新加坡政府学校路径的升学工作室。每周作业 app + 家长微信跟进。月度会员 S$320，A2 / B1 预付包 S$2,480 起。非 MOE/SEAB/Cambridge 官方。",
    url: "https://sg-school-entry.vercel.app",
    siteName: "狮城入学",
    locale: "zh_CN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "狮城入学 · 新加坡政府学校升学工作室 · CEQ + AEIS 路径",
    description: "专注新加坡政府学校路径的升学工作室。每周作业 app + 家长微信跟进。月度会员 S$320，A2 / B1 预付包 S$2,480 起。非 MOE/SEAB/Cambridge 官方。",
  },
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
