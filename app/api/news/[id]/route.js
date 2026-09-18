import { NextResponse } from "next/server";
import { deleteNews } from "@/lib/store";
import { recordAudit } from "@/lib/auditLog";

// Write access is gated by middleware.js (admin cookie required for non-GET).
// News has no edit endpoint on purpose: entries come from the automatic
// scraper or are added whole by the admin, never patched in place.
export async function DELETE(_req, { params }) {
  await deleteNews(params.id);
  recordAudit({ action: "delete", resource: "news", id: params.id });
  return NextResponse.json({ ok: true });
}
