import { NextResponse } from "next/server";
import { trackPdfDownload, checkRateLimit, getClientIp } from "@/lib/analytics";

const ALLOWED_KINDS = ["concours", "cours", "evaluation"];

// Public on purpose — this only increments a counter, same trust level as
// the existing public visitor-counter widget. Never fails the caller's
// download: a tracking error shouldn't be visible to a user just trying to
// get their PDF. Rate-limited per IP so it can't be spammed to inflate the
// admin's stats — 30 downloads/minute is well above any real user, even one
// batch-downloading a whole module's worth of concours.
export async function POST(req) {
  try {
    const allowed = await checkRateLimit(`pdf:${getClientIp(req)}`, 30, 60);
    if (!allowed) return NextResponse.json({ ok: true }); // silently drop, don't reveal the limiter to a caller probing it
    const { kind, id } = await req.json().catch(() => ({}));
    if (!ALLOWED_KINDS.includes(kind)) {
      return NextResponse.json({ error: "kind invalide" }, { status: 400 });
    }
    await trackPdfDownload(kind, id);
  } catch (err) {
    console.error("track pdf-download error", err);
  }
  return NextResponse.json({ ok: true });
}
