import { NextResponse } from "next/server";
import { getSettings, updateSettings } from "@/lib/store";

// Without this, GET has no request-specific data or uncached fetch to key
// off, so Next statically optimizes it — freezing the footer's social
// links at whatever they were during `next build` until the next deploy.
export const dynamic = "force-dynamic";

// Partner ads carry the advertiser's private contact details and Saad's own
// notes about the deal — needed in the admin panel, but this response is
// world-readable (the site's chrome fetches it on every page), so those two
// fields are dropped here. /api/admin/settings serves the full document to
// an authenticated admin.
function publicSettings(settings) {
  if (!Array.isArray(settings?.partnerAds)) return settings;
  return {
    ...settings,
    partnerAds: settings.partnerAds.map(({ contact, note, ...ad }) => ad),
  };
}

// GET is public — the site's footer reads this to render social links.
export async function GET() {
  const settings = await getSettings();
  return NextResponse.json(publicSettings(settings));
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
