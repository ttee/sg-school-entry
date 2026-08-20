import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "狮城入学 · CEQ 英语作业",
  description:
    "小学走 CEQ，中学走 AEIS。CEQ 英语作业 12 周，向顾问支付 RMB 2,680。试学周打开就能做。非 MOE、SEAB、Cambridge 官方机构。",
  themeColor: "#F4EFE6",
  metadataBase: new URL("https://sg-school-entry.vercel.app"),
  openGraph: {
    title: "狮城入学 · CEQ 英语作业",
    description: "小学走 CEQ，中学走 AEIS。CEQ 英语作业 12 周，向顾问支付 RMB 2,680。试学周打开就能做。非 MOE、SEAB、Cambridge 官方机构。",
    url: "https://sg-school-entry.vercel.app",
    siteName: "狮城入学",
    locale: "zh_CN",
    type: "website",
    images: [
      {
        url: "/og-ceq.jpg",
        width: 1200,
        height: 630,
        alt: "狮城入学 · CEQ 英语作业",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "狮城入学 · CEQ 英语作业",
    description: "小学走 CEQ，中学走 AEIS。CEQ 英语作业 12 周，向顾问支付 RMB 2,680。试学周打开就能做。非 MOE、SEAB、Cambridge 官方机构。",
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
