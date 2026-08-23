import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "狮城入学 · 进新加坡政府学校",
  description:
    "给中国家庭的 CEQ + AEIS 作业。新加坡校园故事、按年级摸底、简体中文家长说明。12 周 RMB 2,680。试学打开就能做。",
  themeColor: "#F4EFE6",
  metadataBase: new URL("https://sg-school-entry.vercel.app"),
  openGraph: {
    title: "狮城入学 · 进新加坡政府学校",
    description: "给中国家庭的 CEQ + AEIS 作业。新加坡校园故事、按年级摸底、简体中文家长说明。12 周 RMB 2,680。试学打开就能做。",
    url: "https://sg-school-entry.vercel.app",
    siteName: "狮城入学",
    locale: "zh_CN",
    type: "website",
    images: [
      {
        url: "/og-ceq.jpg",
        width: 1200,
        height: 630,
        alt: "狮城入学 · 进新加坡政府学校",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "狮城入学 · 进新加坡政府学校",
    description: "给中国家庭的 CEQ + AEIS 作业。新加坡校园故事、按年级摸底、简体中文家长说明。12 周 RMB 2,680。试学打开就能做。",
    images: ["/og-ceq.jpg"],
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
