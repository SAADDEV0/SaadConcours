import { NextResponse } from "next/server";
import { updateQuiz, deleteQuiz } from "@/lib/store";
import { recordAudit, auditLabel } from "@/lib/auditLog";

// Write access is gated by middleware.js (admin cookie required for non-GET).
export async function PUT(req, props) {
  const params = await props.params;
  const body = await req.json();
  const updated = await updateQuiz(params.id, body);
  if (!updated) return NextResponse.json({ error: "Introuvable" }, { status: 404 });
  recordAudit({ action: "update", resource: "quiz", id: params.id, label: auditLabel("quiz", updated) });
  return NextResponse.json(updated);
}

export async function DELETE(_req, props) {
  const params = await props.params;
  const ok = await deleteQuiz(params.id);
  if (!ok) return NextResponse.json({ error: "Introuvable" }, { status: 404 });
  recordAudit({ action: "delete", resource: "quiz", id: params.id });
  return NextResponse.json({ ok: true });
}
