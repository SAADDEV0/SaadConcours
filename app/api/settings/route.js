import { NextResponse } from "next/server";
import { getSettings, updateSettings } from "@/lib/store";
import { recordAudit } from "@/lib/auditLog";

// Without this, GET has no request-specific data or uncached fetch to key
// off, so Next statically optimizes it — freezing the footer's social
// links at whatever they were during `next build` until the next deploy.
export const dynamic = "force-dynamic";

// Partner ads carry the advertiser's private contact details and Saad's own
// notes about the deal — needed in the admin panel, but this response is
// world-readable (the site's chrome fetches it on every page), so those two
// fields are dropped here. the admin console reads the full settings.json straight from the repo for
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
  // Settings are the one resource with no GitHub commit history behind them,
  // so without this line a change here left no trace anywhere at all.
  recordAudit({
    action: "settings",
    resource: "settings",
    label: "Réglages du site",
    detail: Object.keys(body).slice(0, 8).join(", "),
  });
  return NextResponse.json(updated);
}
