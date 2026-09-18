import { NextResponse } from "next/server";
import { getAllNews, addNews } from "@/lib/store";
import { recordAudit, auditLabel } from "@/lib/auditLog";

export async function GET() {
  const list = await getAllNews();
  return NextResponse.json(list);
}

// Write access is gated by middleware.js (admin cookie required for non-GET).
// Manually-added news are stored as a KV overlay on top of the file that
// scripts/fetch_almaster.py keeps updating automatically — see lib/store.js.
export async function POST(req) {
  const body = await req.json();
  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Corps invalide" }, { status: 400 });
  }
  const created = await addNews(body);
  // Fire-and-forget: an audit write must never turn a successful save into
  // a failed request (recordAudit swallows its own errors).
  recordAudit({ action: "create", resource: "news", id: created?.id, label: auditLabel("news", created) });
  return NextResponse.json(created, { status: 201 });
}
