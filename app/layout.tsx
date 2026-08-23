import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "狮城入学 · 过 CEQ 和 AEIS",
  description:
    "专为有意向入读新加坡政府学校的家庭打造。用食堂、小息、失物招领这些新加坡场景上课，从容应对 CEQ、AEIS 入学考。",
  themeColor: "#F4EFE6",
  metadataBase: new URL("https://sg-school-entry.vercel.app"),
  openGraph: {
    title: "狮城入学 · 过 CEQ 和 AEIS",
    description: "专为有意向入读新加坡政府学校的家庭打造。用食堂、小息、失物招领这些新加坡场景上课，从容应对 CEQ、AEIS 入学考。",
    url: "https://sg-school-entry.vercel.app",
    siteName: "狮城入学",
    locale: "zh_CN",
    type: "website",
    images: [
      {
        url: "/og-ceq.jpg",
        width: 1200,
        height: 630,
        alt: "狮城入学 · 过 CEQ 和 AEIS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "狮城入学 · 过 CEQ 和 AEIS",
    description: "专为有意向入读新加坡政府学校的家庭打造。用食堂、小息、失物招领这些新加坡场景上课，从容应对 CEQ、AEIS 入学考。",
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
