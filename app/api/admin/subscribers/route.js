import { NextResponse } from "next/server";
import { getSubscribers, removeSubscriber } from "@/lib/subscribers";

// Gated on every method by middleware.js (PROTECTED_API_ALWAYS) — this
// exposes real student email addresses, never meant to be publicly readable.
export const dynamic = "force-dynamic";

export async function GET() {
  const emails = await getSubscribers();
  return NextResponse.json({ emails, count: emails.length });
}

export async function DELETE(req) {
  const body = await req.json().catch(() => null);
  if (!body?.email) {
    return NextResponse.json({ error: "email requis" }, { status: 400 });
  }
  const removed = await removeSubscriber(body.email);
  return NextResponse.json({ ok: removed });
}
