import { NextResponse } from "next/server";
import { verifySessionToken, isSessionRevoked, SESSION_COOKIE } from "./lib/session";

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
  "/api/admin/bac-stats",
  "/api/admin/export",
  "/api/admin/export-content",
  "/api/admin/subscribers",
  "/api/admin/send-digest",
  "/api/admin/preview-digest",
  "/api/admin/email-status",
  "/api/admin/import-concours",
  "/api/admin/taxonomy",
  "/api/admin/ad-stats",
  "/api/admin/settings",
];

function isProtectedApiWrite(pathname, method) {
  return PROTECTED_API_PREFIXES.some((p) => pathname.startsWith(p)) && method !== "GET";
}

function isProtectedApiAlways(pathname) {
  return PROTECTED_API_ALWAYS.some((p) => pathname.startsWith(p));
}

// The session is a signed, expiring token now rather than a constant equal to
// sha256(ADMIN_PASSWORD) — see lib/session.js for why that mattered. The
// signature and expiry checks are pure CPU (Web Crypto, no I/O); the
// revocation epoch behind them is read from KV at most once a minute per
// runtime instance, so gating a request still costs no network round-trip.
async function authorize(req) {
  const cookie = req.cookies.get(SESSION_COOKIE)?.value;
  // The mobile admin app has no place for an httpOnly cookie, so it sends
  // the same token as a Bearer credential instead (see
  // app/api/admin/login/route.js, which returns it alongside the cookie).
  const authHeader = req.headers.get("authorization") || "";
  const bearer = authHeader.startsWith("Bearer ") ? authHeader.slice(7).trim() : null;

  for (const token of [cookie, bearer]) {
    if (!token) continue;
    const payload = await verifySessionToken(token);
    if (payload && !(await isSessionRevoked(payload))) return true;
  }
  return false;
}

export async function middleware(req) {
  const { pathname } = req.nextUrl;
  try {
    const authorized = await authorize(req);

    if (pathname.startsWith("/admin") && pathname !== "/admin/login") {
      if (!authorized) {
        const url = new URL("/admin/login", req.url);
        // Come back to where they were trying to go once logged in, instead
        // of always dumping them on the dashboard.
        if (pathname !== "/admin") url.searchParams.set("next", pathname + req.nextUrl.search);
        return NextResponse.redirect(url);
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
    "/api/admin/bac-stats",
    "/api/admin/export",
    "/api/admin/export-content",
    "/api/admin/subscribers",
    "/api/admin/send-digest",
    "/api/admin/preview-digest",
    "/api/admin/email-status",
    "/api/admin/import-concours",
    "/api/admin/taxonomy",
    "/api/admin/ad-stats",
    "/api/admin/settings",
    "/api/settings/:path*",
  ],
};
