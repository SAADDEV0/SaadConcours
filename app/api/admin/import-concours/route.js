import { NextResponse } from "next/server";
import { addConcoursBulk } from "@/lib/store";

// Bulk import for the admin "Import groupé" screen — one commit for the
// whole batch (see lib/store.js addConcoursBulk) instead of one per row,
// which is what makes going from ~66 to 200+ concours realistic. Gated by
// middleware.js (PROTECTED_API_ALWAYS) regardless of method.
export const dynamic = "force-dynamic";

const REQUIRED = ["annee", "ville", "etablissement", "filiere", "enonce_md"];
const MAX_BATCH = 200;

export async function POST(req) {
  const body = await req.json().catch(() => null);
  const entries = Array.isArray(body?.entries) ? body.entries : null;
  if (!entries || !entries.length) {
    return NextResponse.json({ error: "Aucune entrée à importer." }, { status: 400 });
  }
  if (entries.length > MAX_BATCH) {
    return NextResponse.json({ error: `Trop d'entrées en une fois (max ${MAX_BATCH}).` }, { status: 400 });
  }

  const errors = [];
  entries.forEach((e, i) => {
    const missing = REQUIRED.filter((k) => !String(e?.[k] || "").trim());
    if (missing.length) errors.push(`Ligne ${i + 1} : champ(s) manquant(s) — ${missing.join(", ")}`);
  });
  if (errors.length) {
    return NextResponse.json({ error: "Corrige les lignes suivantes avant d'importer :", details: errors }, { status: 400 });
  }

  const created = await addConcoursBulk(entries);
  return NextResponse.json({ created: created.length, ids: created.map((c) => c.id) }, { status: 201 });
}
