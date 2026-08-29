import { NextResponse } from "next/server";
import { addSubscriber, isValidEmail, normalizeEmail } from "@/lib/subscribers";
import { checkRateLimit, getClientIp } from "@/lib/analytics";

export const dynamic = "force-dynamic";

// Fully public — anyone can subscribe their own email, no login involved.
// Deliberately NOT under /api/news/* (middleware.js locks writes to that
// prefix behind the admin cookie) and not in PROTECTED_API_PREFIXES.
export async function POST(req) {
  const allowed = await checkRateLimit(`alerts-subscribe:${getClientIp(req)}`, 5, 3600);
  if (!allowed) {
    return NextResponse.json({ error: "Trop de tentatives, réessaie plus tard." }, { status: 429 });
  }

  const body = await req.json().catch(() => null);
  const email = normalizeEmail(body?.email);
  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Adresse email invalide." }, { status: 400 });
  }

  try {
    await addSubscriber(email);
  } catch (err) {
    console.error("alerts subscribe error", err);
    return NextResponse.json({ error: "Erreur serveur, réessaie plus tard." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
