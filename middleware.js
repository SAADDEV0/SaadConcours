import { NextResponse } from "next/server";
import { sha256Hex, constantTimeEqual } from "./lib/security";

const PROTECTED_API_PREFIXES = [
  "/api/concours",
  "/api/cours",
  "/api/quiz",
  "/api/news",
  "/api/blog",
  "/api/admin/upload-image",
  "/api/settings",
];
// Unlike the resources above (public reads, admin-only writes), these expose
// data that shouldn't be public at all — auth is required on every method.
const PROTECTED_API_ALWAYS = [
  "/api/admin/stats",
  "/api/admin/export",
  "/api/admin/export-content",
  "/api/admin/subscribers",
  "/api/admin/send-digest",
  "/api/admin/preview-digest",
  "/api/admin/email-status",
  "/api/admin/import-concours",
  "/api/admin/taxonomy",
  "/api/admin/publish-facebook",
];

function isProtectedApiWrite(pathname, method) {
  return PROTECTED_API_PREFIXES.some((p) => pathname.startsWith(p)) && method !== "GET";
}

function isProtectedApiAlways(pathname) {
  return PROTECTED_API_ALWAYS.some((p) => pathname.startsWith(p));
}

export async function middleware(req) {
  try {
    const { pathname } = req.nextUrl;
    const expected = process.env.ADMIN_PASSWORD;
    const expectedHash = expected ? await sha256Hex(expected) : null;
    const cookie = req.cookies.get("sc_admin")?.value;
    // The mobile admin app has no place for an httpOnly cookie, so it
    // authenticates with the same hash as a Bearer token instead (see
    // app/api/admin/login/route.js, which returns it alongside the cookie).
    const authHeader = req.headers.get("authorization") || "";
    const bearerToken = authHeader.startsWith("Bearer ") ? authHeader.slice(7).trim() : null;
    const authorized =
      Boolean(expectedHash) &&
      ((Boolean(cookie) && constantTimeEqual(cookie, expectedHash)) ||
        (Boolean(bearerToken) && constantTimeEqual(bearerToken, expectedHash)));

    if (pathname.startsWith("/admin") && pathname !== "/admin/login") {
      if (!authorized) {
        return NextResponse.redirect(new URL("/admin/login", req.url));
      }
    }

    if (isProtectedApiWrite(pathname, req.method) || isProtectedApiAlways(pathname)) {
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
    if (isProtectedApiWrite(pathname, req.method) || isProtectedApiAlways(pathname)) {
      return NextResponse.json({ error: "Non autorisé." }, { status: 401 });
    }
    return NextResponse.next();
  }
}

export const config = {
  matcher: [
    "/admin/:path*",
    "/api/concours/:path*",
    "/api/cours/:path*",
    "/api/quiz/:path*",
    "/api/news/:path*",
    "/api/blog/:path*",
    "/api/admin/upload-image",
    "/api/admin/stats",
    "/api/admin/export",
    "/api/admin/export-content",
    "/api/admin/subscribers",
    "/api/admin/send-digest",
    "/api/admin/preview-digest",
    "/api/admin/email-status",
    "/api/admin/import-concours",
    "/api/admin/taxonomy",
    "/api/admin/publish-facebook",
    "/api/settings/:path*",
  ],
};
