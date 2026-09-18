import { NextResponse } from "next/server";
import { constantTimeEqual } from "@/lib/security";
import { createSessionToken, SESSION_COOKIE } from "@/lib/session";
import { recordAudit } from "@/lib/auditLog";
import {
  checkLoginRateLimit,
  recordFailedLogin,
  clearLoginAttempts,
  clientIp,
} from "@/lib/loginRateLimit";
import { anonymizeIp } from "@/lib/analytics";

export async function POST(req) {
  const { password } = await req.json().catch(() => ({}));
  const expected = process.env.ADMIN_PASSWORD;

  if (!expected) {
    return NextResponse.json(
      { error: "ADMIN_PASSWORD n'est pas configuré sur le serveur." },
      { status: 500 }
    );
  }

  const ip = clientIp(req);
  const { blocked, retryAfter } = await checkLoginRateLimit(ip);
  if (blocked) {
    return NextResponse.json(
      { error: `Trop de tentatives. Réessayez dans ${Math.ceil(retryAfter / 60)} min.` },
      { status: 429, headers: { "Retry-After": String(retryAfter) } }
    );
  }

  if (!password || !constantTimeEqual(password, expected)) {
    await recordFailedLogin(ip);
    return NextResponse.json({ error: "Mot de passe incorrect." }, { status: 401 });
  }

  await clearLoginAttempts(ip);

  // A signed, expiring session rather than the old constant
  // sha256(ADMIN_PASSWORD) — see lib/session.js. Still returned in the body
  // as well as the cookie: the mobile admin app has no cookie jar and sends
  // it back as a Bearer token (see middleware.js).
  const session = await createSessionToken();
  if (!session) {
    return NextResponse.json({ error: "Session impossible à créer sur le serveur." }, { status: 500 });
  }

  recordAudit({
    action: "login",
    resource: "session",
    id: session.payload.jti,
    label: "Connexion au panneau",
    ip: anonymizeIp(ip),
  });

  const res = NextResponse.json({ ok: true, token: session.token, expiresAt: session.payload.exp });
  res.cookies.set(SESSION_COOKIE, session.token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: session.maxAge,
  });
  return res;
}
