import { NextResponse } from "next/server";
import { listTrash, removeTrash } from "@/lib/trash";

export const dynamic = "force-dynamic";

// La restauration elle-même est un commit comme un autre (fait par le
// navigateur via /api/admin/repo/*) ; cette route ne gère que la liste.
export async function GET() {
  const entries = await listTrash();
  return NextResponse.json({ entries }, { headers: { "Cache-Control": "private, no-store" } });
}

// { keys: [...] } retire ces entrées ; { all: true } vide la corbeille.
export async function DELETE(req) {
  const body = await req.json().catch(() => null);
  if (body?.all) {
    await removeTrash([]);
    return NextResponse.json({ ok: true });
  }
  const keys = Array.isArray(body?.keys) ? body.keys.filter((k) => typeof k === "string") : [];
  if (!keys.length) return NextResponse.json({ error: "keys requis" }, { status: 400 });
  await removeTrash(keys);
  return NextResponse.json({ ok: true });
}
