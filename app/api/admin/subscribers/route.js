import { NextResponse } from "next/server";
import {
  getSubscribers,
  addSubscriber,
  removeSubscriber,
  getSubscriberHistory,
  getRecentSubscribers,
  isValidEmail,
  normalizeEmail,
} from "@/lib/subscribers";

// Gated on every method by middleware.js (PROTECTED_API_ALWAYS) — this
// exposes real student email addresses, never meant to be publicly readable.
export const dynamic = "force-dynamic";

export async function GET() {
  const [emails, history, recent] = await Promise.all([
    getSubscribers(),
    getSubscriberHistory(14),
    getRecentSubscribers(8),
  ]);
  // The last snapshot only updates on add/remove (see lib/subscribers.js),
  // so a day with zero activity would otherwise show yesterday's count
  // instead of today's real one — pin the final point to the live total.
  if (history.length) history[history.length - 1] = { date: history[history.length - 1].date, count: emails.length };
  return NextResponse.json({ emails, count: emails.length, history, recent });
}

// Manual add from the admin "Abonnés" panel — same store/validation as the
// public subscribe flow, just triggered by an admin typing an address in
// directly (e.g. someone who asked to be added by DM/email).
export async function POST(req) {
  const body = await req.json().catch(() => null);
  const email = normalizeEmail(body?.email);
  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Email invalide." }, { status: 400 });
  }
  const added = await addSubscriber(email);
  if (!added) {
    return NextResponse.json({ error: "Cet email est déjà abonné." }, { status: 409 });
  }
  return NextResponse.json({ ok: true, email });
}

export async function DELETE(req) {
  const body = await req.json().catch(() => null);
  if (!body?.email) {
    return NextResponse.json({ error: "email requis" }, { status: 400 });
  }
  const removed = await removeSubscriber(body.email);
  return NextResponse.json({ ok: removed });
}
