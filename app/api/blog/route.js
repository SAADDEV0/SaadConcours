import { NextResponse } from "next/server";
import { getAllBlog, addBlog } from "@/lib/store";
import { recordAudit, auditLabel } from "@/lib/auditLog";

export async function GET() {
  const list = await getAllBlog();
  return NextResponse.json(list);
}

// Write access is gated by middleware.js (admin cookie required for non-GET).
export async function POST(req) {
  const body = await req.json();
  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Corps invalide" }, { status: 400 });
  }
  const created = await addBlog(body);
  // Fire-and-forget: an audit write must never turn a successful save into
  // a failed request (recordAudit swallows its own errors).
  recordAudit({ action: "create", resource: "blog", id: created?.id, label: auditLabel("blog", created) });
  return NextResponse.json(created, { status: 201 });
}
