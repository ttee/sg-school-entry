"use client";

import { signIn } from "next-auth/react";
import { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        setError("邮箱或密码错误");
      } else {
        const callbackUrl = searchParams.get("callbackUrl") || "/learn";
        router.push(callbackUrl);
        router.refresh();
      }
    } catch (error) {
      setError("登录失败，请重试");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-paper">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-block">
            <div className="flex items-center justify-center gap-2 mb-4">
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
            </div>
          </Link>
          <h1 className="text-2xl font-serif font-semibold text-ink mb-2">
            登录
          </h1>
          <p className="text-muted text-sm">
            登录后开始每周作业
          </p>
        </div>

        <div className="bg-card border border-line rounded-2xl p-6 shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-ink-2 mb-1">
                邮箱
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2.5 bg-paper border border-line rounded-xl text-ink focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-semibold text-ink-2 mb-1">
                密码
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-2.5 bg-paper border border-line rounded-xl text-ink focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
                placeholder="••••••••"
              />
            </div>

            {error && (
              <div className="text-sm text-warn-ink bg-warn-bg rounded-lg px-3 py-2">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-accent text-accent-ink font-semibold py-3 rounded-full hover:bg-accent-hover transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "登录中..." : "登录"}
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-line">
            <p className="text-sm text-center text-ink-2 mb-3">
              需要试学账号？
            </p>
            <Link
              href="/#contact"
              className="block text-center text-sm text-accent hover:text-accent-hover font-semibold underline"
            >
              前往首页报名表
            </Link>
          </div>
        </div>

        <div className="mt-6 text-center">
          <Link
            href="/"
            className="text-sm text-muted hover:text-ink transition-colors"
          >
            ← 返回首页
          </Link>
        </div>

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

export default function LoginPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <LoginForm />
    </Suspense>
  );
}
