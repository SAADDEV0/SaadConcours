import { NextResponse } from "next/server";
import { listSocial, upsertSocial, removeSocial } from "@/lib/socialPlan";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    return NextResponse.json({ entries: await listSocial() }, { headers: { "Cache-Control": "private, no-store" } });
  } catch (err) {
    console.error("social GET", err);
    return NextResponse.json({ error: "Historique indisponible." }, { status: 500 });
  }
}

// Crée ou met à jour une entrée (publication faite, ou planifiée).
export async function POST(req) {
  const body = await req.json().catch(() => null);
  if (!body?.platform || !body?.kind) return NextResponse.json({ error: "platform et kind requis." }, { status: 400 });
  try {
    return NextResponse.json(await upsertSocial(body), { status: 201 });
  } catch (err) {
    console.error("social POST", err);
    return NextResponse.json({ error: "Enregistrement impossible." }, { status: 500 });
  }
}

export async function DELETE(req) {
  const id = req.nextUrl.searchParams.get("id");
  if (!id) return NextResponse.json({ error: "id requis" }, { status: 400 });
  return NextResponse.json({ ok: await removeSocial(id) });
}
