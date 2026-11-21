import { NextResponse } from "next/server";
import { deleteNews } from "@/lib/store";
import { recordAudit } from "@/lib/auditLog";

// Every method is gated by lib/adminAuth.js (admin session required, GET included).
// News has no edit endpoint on purpose: entries come from the automatic
// scraper or are added whole by the admin, never patched in place.
export async function DELETE(_req, props) {
  const params = await props.params;
  await deleteNews(params.id);
  recordAudit({ action: "delete", resource: "news", id: params.id });
  return NextResponse.json({ ok: true });
}
