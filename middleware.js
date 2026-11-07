import { NextResponse } from "next/server";
import { isAdminPage, needsAuth, authorize, loginUrl } from "./lib/adminAuth";

// Reste `middleware.js` en Next 16, malgré le renommage en `proxy.js` : un
// proxy tourne forcément dans le runtime Node.js, que @opennextjs/cloudflare
// ne fait tourner sur workerd qu'à titre expérimental (« not supported by the
// OpenNext maintainers », dist/cli/build/open-next/bundle-node-middleware.js).
// Le fichier middleware garde le runtime Edge, celui qu'OpenNext supporte ;
// Next 16 l'accepte toujours, avec un avertissement de dépréciation au build.
//
// En production, /admin et /api n'atteignent plus Next.js : le Worker
// d'entrée (worker/index.js) applique les mêmes règles (lib/adminAuth.js)
// avant d'appeler les routes. Ce middleware garde la console protégée sous
// `next dev` et dans le Worker Next.js.

export async function middleware(req) {
  const { pathname } = req.nextUrl;
  const adminPage = isAdminPage(pathname);
  if (!adminPage && !needsAuth(pathname, req.method)) return NextResponse.next();

  if (await authorize(req)) return NextResponse.next();

  if (adminPage) return NextResponse.redirect(loginUrl(req));
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
