import { NextResponse } from "next/server";
import { updateBlog, deleteBlog } from "@/lib/store";
import { recordAudit, auditLabel } from "@/lib/auditLog";

// Write access is gated by middleware.js (admin cookie required for non-GET).
export async function PUT(req, { params }) {
  const body = await req.json();
  const updated = await updateBlog(params.id, body);
  if (!updated) return NextResponse.json({ error: "Introuvable" }, { status: 404 });
  recordAudit({ action: "update", resource: "blog", id: params.id, label: auditLabel("blog", updated) });
  return NextResponse.json(updated);
}

export async function DELETE(_req, { params }) {
  const ok = await deleteBlog(params.id);
  if (!ok) return NextResponse.json({ error: "Introuvable" }, { status: 404 });
  recordAudit({ action: "delete", resource: "blog", id: params.id });
  return NextResponse.json({ ok: true });
}
