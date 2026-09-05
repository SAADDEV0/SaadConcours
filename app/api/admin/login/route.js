import { NextResponse } from "next/server";
import { sha256Hex, constantTimeEqual } from "../../../../lib/security";
import {
  checkLoginRateLimit,
  recordFailedLogin,
  clearLoginAttempts,
  clientIp,
} from "../../../../lib/loginRateLimit";

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

  // Same hash used for the cookie, also returned in the body: the web panel
  // relies on the httpOnly cookie, but the mobile admin app has no cookie
  // jar to rely on, so it stores this and sends it back as a Bearer token
  // (see middleware.js).
  const token = await sha256Hex(expected);
  const res = NextResponse.json({ ok: true, token });
  res.cookies.set("sc_admin", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
  return res;
}
