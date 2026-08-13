import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import SessionProvider from "@/components/SessionProvider";
import Link from "next/link";

export default async function LearnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login?callbackUrl=/learn");
  }

  return (
    <SessionProvider>
      <div className="min-h-screen bg-paper">
        <header className="sticky top-0 z-40 bg-card/95 backdrop-blur-md border-b border-line">
          <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
            <Link href="/learn" className="flex items-center gap-2.5">
              <svg className="w-7 h-7 text-accent" viewBox="0 0 32 32">
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
              <div className="flex flex-col leading-tight">
                <strong className="font-serif font-semibold text-ink text-sm">
                  狮城入学 Learn
                </strong>
              </div>
            </Link>
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted hidden sm:block">
                {session.user.name || session.user.email}
              </span>
              <Link
                href="/api/auth/signout"
                className="text-sm text-muted hover:text-ink transition-colors"
              >
                退出
              </Link>
            </div>
          </div>
        </header>
        <main className="max-w-5xl mx-auto px-4 py-8">{children}</main>
      </div>
    </SessionProvider>
  );
}
