import { NextResponse } from "next/server";
import { trackPageview, checkRateLimit, getClientIp } from "@/lib/analytics";

// Only a short, pre-normalized label is accepted (e.g. "google", "direct") —
// never the raw referrer URL, which could carry a query string or PII and
// would blow up the sorted-set cardinality if echoed back verbatim.
const SOURCE_RE = /^[a-z0-9._-]{1,32}$/;

function sanitizeSource(raw) {
  if (typeof raw !== "string") return null;
  const s = raw.toLowerCase().trim();
  return SOURCE_RE.test(s) ? s : "autre";
}

// Public — this is our own replacement for the old third-party visitor
// counter widget. Same trust level: just an increment, no PII collected.
// Client-side this only fires once per browser ever (localStorage-gated),
// so a generous per-IP limit is just a backstop against a raw script hammering it.
export async function POST(req) {
  try {
    const allowed = await checkRateLimit(`pageview:${getClientIp(req)}`, 20, 60);
    if (!allowed) return NextResponse.json({ ok: true });
    const body = await req.json().catch(() => null);
    const source = sanitizeSource(body?.source);
    await trackPageview(source);
  } catch (err) {
    console.error("track pageview error", err);
  }
  return NextResponse.json({ ok: true });
}
