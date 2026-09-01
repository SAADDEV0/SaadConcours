import { NextResponse } from "next/server";
import { getFiliereCounts, renameFiliere } from "@/lib/store";

// Filière taxonomy management — concours.filiere is free text (the public
// /concours filter derives its options straight from the data, see
// app/concours/page.js), so this is the safety net against "Marketing" and
// "marketing" silently coexisting as the admin adds more filières. Gated by
// middleware.js (PROTECTED_API_ALWAYS) regardless of method.
export const dynamic = "force-dynamic";

export async function GET() {
  const counts = await getFiliereCounts();
  return NextResponse.json({ counts });
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
