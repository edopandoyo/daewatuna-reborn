import { NextRequest, NextResponse } from "next/server";

const COOKIE = process.env.AUTH_JWT_COOKIE || "appwrite_jwt";
const isProd = process.env.NODE_ENV === "production";

export async function POST(req: NextRequest) {
  const { jwt } = await req.json();
  if (!jwt) return NextResponse.json({ error: "Missing jwt" }, { status: 400 });

  const res = NextResponse.json({ ok: true });
  res.cookies.set(COOKIE, jwt, {
    httpOnly: true,
    secure: isProd,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60, // 1 jam (JWT Appwrite juga short-lived)
  });
  return res;
}

export async function DELETE() {
  const res = NextResponse.json({ ok: true });
  res.cookies.set(COOKIE, "", {
    httpOnly: true,
    secure: isProd,
    sameSite: "lax",
    path: "/",
    maxAge: 0,
  });
  return res;
}
