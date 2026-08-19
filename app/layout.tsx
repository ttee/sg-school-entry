import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "狮城入学 · 新加坡政府学校升学工作室 · CEQ + AEIS 路径",
  description:
    "小学先过 CEQ 英语门槛。CEQ 英语作业 12 周，向顾问支付 RMB 2,680。试学周打开就能做。非 MOE、SEAB、Cambridge 官方机构。",
  themeColor: "#F4EFE6",
  metadataBase: new URL("https://sg-school-entry.vercel.app"),
  openGraph: {
    title: "狮城入学 · 新加坡政府学校升学工作室 · CEQ + AEIS 路径",
    description: "小学先过 CEQ 英语门槛。CEQ 英语作业 12 周，向顾问支付 RMB 2,680。试学周打开就能做。非 MOE、SEAB、Cambridge 官方机构。",
    url: "https://sg-school-entry.vercel.app",
    siteName: "狮城入学",
    locale: "zh_CN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "狮城入学 · 新加坡政府学校升学工作室 · CEQ + AEIS 路径",
    description: "小学先过 CEQ 英语门槛。CEQ 英语作业 12 周，向顾问支付 RMB 2,680。试学周打开就能做。非 MOE、SEAB、Cambridge 官方机构。",
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
