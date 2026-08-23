import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "狮城入学 · 进新加坡政府学校",
  description:
    "食堂、小息、失物招领。小学先过英语再考数学，中学英语数学一起考。12 周 2680 元。打开就能试。",
  themeColor: "#F4EFE6",
  metadataBase: new URL("https://sg-school-entry.vercel.app"),
  openGraph: {
    title: "狮城入学 · 进新加坡政府学校",
    description: "食堂、小息、失物招领。小学先过英语再考数学，中学英语数学一起考。12 周 2680 元。打开就能试。",
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
    description: "食堂、小息、失物招领。小学先过英语再考数学，中学英语数学一起考。12 周 2680 元。打开就能试。",
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
