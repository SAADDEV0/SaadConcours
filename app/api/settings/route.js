import { NextResponse } from "next/server";
import { getSettings, updateSettings } from "@/lib/store";

// Without this, GET has no request-specific data or uncached fetch to key
// off, so Next statically optimizes it — freezing the footer's social
// links at whatever they were during `next build` until the next deploy.
export const dynamic = "force-dynamic";

// GET is public — the site's footer reads this to render social links.
export async function GET() {
  const settings = await getSettings();
  return NextResponse.json(settings);
}

// Write access is gated by middleware.js (admin cookie required).
export async function PUT(req) {
  const body = await req.json().catch(() => null);
  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Corps invalide" }, { status: 400 });
  }
  const updated = await updateSettings(body);
  return NextResponse.json(updated);
}
