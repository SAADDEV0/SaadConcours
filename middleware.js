import { NextResponse } from "next/server";

const PROTECTED_API_PREFIXES = ["/api/concours", "/api/cours", "/api/quiz", "/api/news"];

function isProtectedApiWrite(pathname, method) {
  return PROTECTED_API_PREFIXES.some((p) => pathname.startsWith(p)) && method !== "GET";
}

export function middleware(req) {
  try {
    const { pathname } = req.nextUrl;
    const expected = process.env.ADMIN_PASSWORD;
    const cookie = req.cookies.get("sc_admin")?.value;
    const authorized = Boolean(expected) && cookie === expected;

    if (pathname.startsWith("/admin") && pathname !== "/admin/login") {
      if (!authorized) {
        return NextResponse.redirect(new URL("/admin/login", req.url));
      }
    }

    if (isProtectedApiWrite(pathname, req.method)) {
      if (!authorized) {
        return NextResponse.json({ error: "Non autorisé." }, { status: 401 });
      }
    }

    return NextResponse.next();
  } catch (err) {
    console.error("middleware error", err);
    // Fail closed on the protected surfaces instead of letting a bug in this
    // function crash the whole request or leave /admin unprotected.
    const { pathname } = req.nextUrl;
    if (pathname.startsWith("/admin") && pathname !== "/admin/login") {
      return NextResponse.redirect(new URL("/admin/login", req.url));
    }
    if (isProtectedApiWrite(pathname, req.method)) {
      return NextResponse.json({ error: "Non autorisé." }, { status: 401 });
    }
    return NextResponse.next();
  }
}

export const config = {
  matcher: ["/admin/:path*", "/api/concours/:path*", "/api/cours/:path*", "/api/quiz/:path*", "/api/news/:path*"],
};
