import { NextResponse } from "next/server";

export function middleware(req) {
  const { pathname } = req.nextUrl;
  const expected = process.env.ADMIN_PASSWORD;
  const cookie = req.cookies.get("sc_admin")?.value;
  const authorized = Boolean(expected) && cookie === expected;

  if (pathname.startsWith("/admin") && pathname !== "/admin/login") {
    if (!authorized) {
      return NextResponse.redirect(new URL("/admin/login", req.url));
    }
  }

  if (pathname.startsWith("/api/concours") && req.method !== "GET") {
    if (!authorized) {
      return NextResponse.json({ error: "Non autorisé." }, { status: 401 });
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/api/concours/:path*"],
};
