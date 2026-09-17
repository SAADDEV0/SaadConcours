import { NextResponse } from "next/server";
import { trackSearchMiss, checkRateLimit, getClientIp } from "@/lib/analytics";

// Public on purpose, same trust level as the other /api/track/* counters —
// only increments a per-term tally, no content is returned. Rate-limited
// per IP so it can't be spammed to pollute the "recherches sans résultat"
// widget with junk terms.
export async function POST(req) {
  try {
    const ip = getClientIp(req);
    const allowed = await checkRateLimit(`search-miss:${ip}`, 20, 60);
    if (!allowed) return NextResponse.json({ ok: true });
    const { query } = await req.json().catch(() => ({}));
    if (typeof query === "string" && query.trim()) {
      await trackSearchMiss(query);
    }
  } catch (err) {
    console.error("track search-miss error", err);
  }
  return NextResponse.json({ ok: true });
}
