import { NextRequest, NextResponse } from "next/server";
import { REFRESH_TOKEN_KEY } from "./lib/session";

export default function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const refreshToken = request.cookies.get(REFRESH_TOKEN_KEY)?.value;
  const isAuthenticated = Boolean(refreshToken);

  const protectedRoutes = ["/dashboard"];
  const isProtectedRoute = protectedRoutes.includes(pathname);

  // Unauthenticated users → redirect to login + preserve intended path
  if (!isAuthenticated && isProtectedRoute) {
    const loginUrl = new URL("/auth", request.url);
    loginUrl.searchParams.set("redirectAfterLogin", pathname);
    return NextResponse.redirect(loginUrl);
  }

  // Authenticated users hitting /auth → redirect to intended page
  if (pathname === "/auth" && isAuthenticated) {
    // Only redirect if there’s an intended route stored
    const redirectAfterLogin = request.cookies.get("redirectAfterLogin")?.value;
    return NextResponse.redirect(
      new URL(redirectAfterLogin || "/", request.url),
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|logo.png|opengraph-image.png|api).*)",
  ],
};
