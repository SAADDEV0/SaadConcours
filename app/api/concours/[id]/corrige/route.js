import { NextResponse } from "next/server";
import { getCorrigeFile } from "@/lib/store";

// Public GET (same read-is-public pattern as the rest of /api/concours) —
// lets the admin edit form pull in a corrigé that already exists in the
// GitHub repo's data/corriges/ folder but was never copied into
// concours.json's corrige_md field.
export async function GET(_req, { params }) {
  const corrige_md = await getCorrigeFile(params.id);
  if (corrige_md == null) {
    return NextResponse.json({ error: "Aucun corrigé trouvé." }, { status: 404 });
  }
  return NextResponse.json({ corrige_md });
}
