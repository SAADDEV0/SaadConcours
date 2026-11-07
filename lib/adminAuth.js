import { verifySessionToken, isSessionRevoked, SESSION_COOKIE } from "./session";

// Qui doit être connecté pour quoi. Partagé par middleware.js (next dev,
// Worker Next.js) et par le Worker d'entrée (worker/index.js), qui sert
// /admin et /api en production sans charger Next.js : une seule règle, deux
// portes.

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

export function isAdminPage(pathname) {
  return (pathname === "/admin" || pathname.startsWith("/admin/")) && pathname !== "/admin/login";
}

export function needsAuth(pathname, method) {
  if (pathname.startsWith("/api/admin/")) return !PUBLIC_ADMIN_API.includes(pathname);
  return method !== "GET" && PROTECTED_WRITE_PREFIXES.some((p) => pathname === p || pathname.startsWith(p + "/"));
}

// Jeton signé et expirant (lib/session.js). Signature et expiration = CPU
// pur ; l'époque de révocation n'est relue dans KV qu'une fois par minute.
// `req` : NextRequest (ou la copie de worker/next-server.js).
export async function authorize(req) {
  try {
    const cookie = req.cookies.get(SESSION_COOKIE)?.value;
    const authHeader = req.headers.get("authorization") || "";
    const bearer = authHeader.startsWith("Bearer ") ? authHeader.slice(7).trim() : null;
    for (const token of [cookie, bearer]) {
      if (!token) continue;
      const payload = await verifySessionToken(token);
      if (payload && !(await isSessionRevoked(payload))) return true;
    }
  } catch (err) {
    console.error("authorize error", err);
  }
  return false;
}

// Page de connexion, avec retour à la page demandée.
export function loginUrl(req) {
  const url = new URL(req.url);
  const login = new URL("/admin/login", url);
  if (url.pathname !== "/admin") login.searchParams.set("next", url.pathname + url.search);
  return login;
}
