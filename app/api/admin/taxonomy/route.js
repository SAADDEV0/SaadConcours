import { NextResponse } from "next/server";
import { getFiliereCounts, getTaxonomyCoverage, renameFiliere } from "@/lib/store";

// Filière taxonomy management. `coverage` is the fixed 5-catégorie ×
// sous-filière grid (lib/taxonomy.js) with real concours counts, including
// 0 — how far the site's expansion past FCA/MRH has gotten. `counts` is a
// legacy safety net: any filiere value that doesn't match that fixed
// vocabulary (a stray free-text leftover, a raw API write) so it can still
// be merged into a canonical sous-filière. Gated by middleware.js
// (PROTECTED_API_ALWAYS) regardless of method.
export const dynamic = "force-dynamic";

export async function GET() {
  const [counts, coverage] = await Promise.all([getFiliereCounts(), getTaxonomyCoverage()]);
  return NextResponse.json({ counts, coverage });
}

export async function POST(req) {
  const body = await req.json().catch(() => null);
  const oldName = body?.oldName;
  const newName = body?.newName;
  if (!oldName || !String(newName || "").trim()) {
    return NextResponse.json({ error: "oldName et newName requis." }, { status: 400 });
  }
  try {
    const count = await renameFiliere(oldName, newName);
    return NextResponse.json({ ok: true, updated: count });
  } catch (err) {
    return NextResponse.json({ error: err.message || "Erreur lors du renommage." }, { status: 400 });
  }
}
