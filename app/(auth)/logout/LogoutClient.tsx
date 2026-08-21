"use client";

import { signOut } from "next-auth/react";
import { useEffect, useState } from "react";
import Link from "next/link";
import SessionProvider from "@/components/SessionProvider";

function Mark() {
  return (
    <svg
      className="w-10 h-10 text-accent"
      viewBox="0 0 32 32"
      aria-hidden="true"
    >
      <rect
        x="1"
        y="1"
        width="30"
        height="30"
        rx="7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M8 24V11h16v13"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M13 24V15h6v9"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LogoutBody() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    let cancelled = false;
    signOut({ redirect: false })
      .catch(() => {
        /* still show the signed-out landing */
      })
      .finally(() => {
        if (!cancelled) setDone(true);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-paper">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-block">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Mark />
            </div>
          </Link>
          <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-accent">
            狮城入学
          </p>
          <h1 className="mt-3 text-2xl font-serif font-semibold text-ink">
            {done ? "已安全退出" : "正在退出…"}
          </h1>
          <p className="mt-2 text-muted text-sm leading-relaxed">
            {done
              ? "本机已退出登录。作业进度仍在账号里，换设备再登录即可继续。"
              : "正在结束这一次登录。"}
          </p>
        </div>

        <div className="bg-card border border-line rounded-2xl p-6 shadow-lg">
          <p className="text-sm text-ink-2 leading-relaxed">
            试学周无需登录。12 周作业账号由家长邮箱登录。
          </p>
          <div className="mt-5 flex flex-col gap-3">
            <Link
              href="/login"
              className="flex min-h-12 items-center justify-center rounded-full bg-accent px-5 text-[15px] font-semibold text-accent-ink transition-colors hover:bg-accent-hover"
            >
              再次登录
            </Link>
            <Link
              href="/"
              className="flex min-h-12 items-center justify-center rounded-full border border-line bg-transparent px-5 text-[15px] font-semibold text-ink transition-colors hover:border-ink-2 hover:bg-paper-2"
            >
              回首页
            </Link>
            <Link
              href="/trial/A2"
              className="flex min-h-11 items-center justify-center text-sm font-semibold text-accent hover:underline"
            >
              免费试学（小学 CEQ）
            </Link>
          </div>
        </div>

        <p className="mt-6 text-center text-sm text-muted">
          中学试学请走{" "}
          <Link href="/trial" className="font-semibold text-ink-2 hover:text-ink">
            AEIS 试学
          </Link>
          。
        </p>

        <div className="mt-8 pt-6 border-t border-line">
          <div className="flex justify-center gap-4 text-xs text-muted">
            <Link href="/privacy" className="hover:text-ink transition-colors">
              隐私
            </Link>
            <a
              href="https://www.pdpc.gov.sg/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-ink transition-colors"
            >
              PDPC
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function LogoutClient() {
  return (
    <SessionProvider>
      <LogoutBody />
    </SessionProvider>
  );
}
