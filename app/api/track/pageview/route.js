import { NextResponse } from "next/server";
import { trackPageview, checkRateLimit, getClientIp } from "@/lib/analytics";

// Public — this is our own replacement for the old third-party visitor
// counter widget. Same trust level: just an increment, no PII collected.
// Client-side this only fires once per browser ever (localStorage-gated),
// so a generous per-IP limit is just a backstop against a raw script hammering it.
export async function POST(req) {
  try {
    const allowed = await checkRateLimit(`pageview:${getClientIp(req)}`, 20, 60);
    if (!allowed) return NextResponse.json({ ok: true });
    await trackPageview();
  } catch (err) {
    console.error("track pageview error", err);
  }
  return NextResponse.json({ ok: true });
}
