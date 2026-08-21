import type { Metadata } from "next";
import LogoutClient from "./LogoutClient";

export const metadata: Metadata = {
  title: "已退出 · 狮城入学",
  description: "已安全退出狮城入学。作业进度仍在账号里，登录后即可继续。",
  robots: { index: false, follow: false },
};

export default function LogoutPage() {
  return <LogoutClient />;
}
