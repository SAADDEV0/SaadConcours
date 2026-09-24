import { NextResponse } from "next/server";
import { verifySessionToken, isSessionRevoked, SESSION_COOKIE } from "./lib/session";

// Ressources publiques en lecture, réservées à l'admin en écriture.
const PROTECTED_WRITE_PREFIXES = [
  "/api/concours",
  "/api/cours",
  "/api/quiz",
  "/api/news",
  "/api/blog",
  "/api/settings",
];

// Tout /api/admin/* exige une session, quelle que soit la méthode — sauf ces
// deux-là. Avant, chaque route admin devait être ajoutée à la main dans deux
// listes (PROTECTED_API_ALWAYS et le matcher) : une route oubliée était
// publique sans que rien ne le signale.
const PUBLIC_ADMIN_API = ["/api/admin/login", "/api/admin/logout"];

function needsAuth(pathname, method) {
  if (pathname.startsWith("/api/admin/")) return !PUBLIC_ADMIN_API.includes(pathname);
  return method !== "GET" && PROTECTED_WRITE_PREFIXES.some((p) => pathname === p || pathname.startsWith(p + "/"));
}

// Jeton signé et expirant (lib/session.js). Signature et expiration = CPU
// pur ; l'époque de révocation n'est relue dans KV qu'une fois par minute.
async function authorize(req) {
  const cookie = req.cookies.get(SESSION_COOKIE)?.value;
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
  const isAdminPage = pathname.startsWith("/admin") && pathname !== "/admin/login";
  const isGuardedApi = needsAuth(pathname, req.method);
  if (!isAdminPage && !isGuardedApi) return NextResponse.next();

  let authorized = false;
  try {
    authorized = await authorize(req);
  } catch (err) {
    console.error("middleware error", err);
  }
  if (authorized) return NextResponse.next();

  if (isAdminPage) {
    const url = new URL("/admin/login", req.url);
    if (pathname !== "/admin") url.searchParams.set("next", pathname + req.nextUrl.search);
    return NextResponse.redirect(url);
  }
  return NextResponse.json({ error: "Session expirée : reconnecte-toi." }, { status: 401 });
}

export const config = {
  matcher: [
    "/admin/:path*",
    "/api/admin/:path*",
    "/api/concours/:path*",
    "/api/cours/:path*",
    "/api/quiz/:path*",
    "/api/news/:path*",
    "/api/blog/:path*",
    "/api/settings/:path*",
  ],
};
