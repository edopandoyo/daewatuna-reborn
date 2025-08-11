import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const jwt = req.cookies.get(
    process.env.AUTH_JWT_COOKIE || "appwrite_jwt"
  )?.value;
  if (!jwt && req.nextUrl.pathname.startsWith("/dashboard")) {
    const url = new URL("/login", req.url);
    return NextResponse.redirect(url);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
