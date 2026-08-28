import { NextResponse } from "next/server";
import { getAllConcours, addConcours, getCorrigeIds } from "@/lib/store";

export async function GET() {
  const [list, corrigeIds] = await Promise.all([getAllConcours(), getCorrigeIds()]);
  // corrige_from_github is computed here, not persisted — it flags entries
  // whose corrige_md is empty but that already have a file committed under
  // data/corriges/, so the admin UI can offer to load it instead of hiding it.
  const enriched = list.map((c) => (!c.corrige_md && corrigeIds.has(c.id) ? { ...c, corrige_from_github: true } : c));
  return NextResponse.json(enriched);
}

// Write access is gated by middleware.js (admin cookie required for non-GET).
export async function POST(req) {
  const body = await req.json();
  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Corps invalide" }, { status: 400 });
  }
  const created = await addConcours(body);
  return NextResponse.json(created, { status: 201 });
}
