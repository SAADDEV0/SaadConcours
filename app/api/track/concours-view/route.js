import { NextResponse } from "next/server";
import { trackConcoursView, checkRateLimitLocal, getClientIp } from "@/lib/analytics";

export async function POST(req) {
  try {
    const allowed = checkRateLimitLocal(`view:${getClientIp(req)}`, 1, 60, 60) > 0;
    if (!allowed) return NextResponse.json({ ok: true });
    const { id } = await req.json().catch(() => ({}));
    await trackConcoursView(id);
  } catch (err) {
    console.error("track concours-view error", err);
  }
  return NextResponse.json({ ok: true });
}
