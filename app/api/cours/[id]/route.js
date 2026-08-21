import { NextResponse } from "next/server";
import { updateCours, deleteCours } from "@/lib/store";

// Write access is gated by middleware.js (admin cookie required for non-GET).
export async function PUT(req, { params }) {
  const body = await req.json();
  const updated = await updateCours(params.id, body);
  if (!updated) return NextResponse.json({ error: "Introuvable" }, { status: 404 });
  return NextResponse.json(updated);
}

export async function DELETE(_req, { params }) {
  const ok = await deleteCours(params.id);
  if (!ok) return NextResponse.json({ error: "Introuvable" }, { status: 404 });
  return NextResponse.json({ ok: true });
}
