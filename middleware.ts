import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

function decodedPath(request: NextRequest): string {
  const raw = request.nextUrl.pathname;
  try {
    return decodeURIComponent(raw);
  } catch {
    return raw;
  }
}

export async function middleware(request: NextRequest) {
  const path = decodedPath(request);

  if (path === "/小学") {
    return NextResponse.rewrite(new URL("/primary", request.url));
  }
  if (path === "/中学") {
    return NextResponse.rewrite(new URL("/secondary", request.url));
  }

  const isCurriculum =
    request.nextUrl.pathname.startsWith("/curriculum") || path.startsWith("/curriculum");
  const isLearn =
    request.nextUrl.pathname.startsWith("/learn") || path.startsWith("/learn");

  if (!isCurriculum && !isLearn) {
    return NextResponse.next();
  }

  const token = await getToken({
    req: request,
    secret: process.env.AUTH_SECRET,
  });

  if (!token) {
    const url = new URL("/login", request.url);
    url.searchParams.set("callbackUrl", request.nextUrl.pathname);
    return NextResponse.redirect(url);
  }

  if (isCurriculum && token.role !== "admin") {
    return NextResponse.redirect(new URL("/learn", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/learn/:path*",
    "/curriculum/:path*",
    "/((?!_next/static|_next/image|favicon.ico|api/|audio/|video/|weike/).*)",
  ],
};
