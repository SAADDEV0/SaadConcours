import { NextResponse } from "next/server";
import { revokeAllSessions, verifySessionToken, SESSION_COOKIE } from "@/lib/session";
import { recordAudit } from "@/lib/auditLog";

// POST with `{ all: true }` ends every session on every device, not just this
// browser's. Clearing a cookie was previously the only thing "déconnexion"
// did — which, with a session value that never expired and was identical
// everywhere, meant a copy of it elsewhere kept working forever.
export async function POST(req) {
  const body = await req.json().catch(() => ({}));
  const token = req.cookies.get(SESSION_COOKIE)?.value;
  const payload = token ? await verifySessionToken(token) : null;

  if (body?.all) {
    await revokeAllSessions();
  }

  recordAudit({
    action: "logout",
    resource: "session",
    id: payload?.jti || "",
    label: body?.all ? "Déconnexion de tous les appareils" : "Déconnexion",
  });

  const res = NextResponse.json({ ok: true, all: Boolean(body?.all) });
  res.cookies.set(SESSION_COOKIE, "", { path: "/", maxAge: 0 });
  return res;
}
