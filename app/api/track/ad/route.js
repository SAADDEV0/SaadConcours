import { NextResponse } from "next/server";
import { trackAdEvent, checkRateLimit, getClientIp } from "@/lib/analytics";

const ALLOWED_TYPES = ["view", "click"];

// Public on purpose — same trust level as the other /api/track/* counters:
// it only increments a number, and a tracking failure must never surface to
// a visitor. Rate-limited per IP (60/min covers a visitor browsing fast with
// three ad zones rotating every 12s) so nobody can inflate the figures Saad
// reports back to an advertiser.
export async function POST(req) {
  try {
    const allowed = await checkRateLimit(`ad:${getClientIp(req)}`, 60, 60);
    if (!allowed) return NextResponse.json({ ok: true }); // silently drop, don't reveal the limiter
    const { id, type } = await req.json().catch(() => ({}));
    if (!id || typeof id !== "string" || id.length > 100 || !ALLOWED_TYPES.includes(type)) {
      return NextResponse.json({ error: "Paramètres invalides" }, { status: 400 });
    }
    await trackAdEvent(id, type);
  } catch (err) {
    console.error("track ad error", err);
  }
  return NextResponse.json({ ok: true });
}
