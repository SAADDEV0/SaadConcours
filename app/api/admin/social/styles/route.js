import { NextResponse } from "next/server";
import { listStyles, removeStyle, saveStyle } from "@/lib/socialStyles";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    return NextResponse.json({ styles: await listStyles() }, { headers: { "Cache-Control": "private, no-store" } });
  } catch (err) {
    console.error("social styles GET", err);
    return NextResponse.json({ error: "Styles indisponibles." }, { status: 500 });
  }
}

// Corps : { id?, name, data: { theme, style, tone, tags, outro } }
export async function POST(req) {
  const body = await req.json().catch(() => null);
  if (!body?.name) return NextResponse.json({ error: "Nom requis." }, { status: 400 });
  try {
    return NextResponse.json(await saveStyle(body), { status: 201 });
  } catch (err) {
    console.error("social styles POST", err);
    return NextResponse.json({ error: "Enregistrement impossible." }, { status: 500 });
  }
}

export async function DELETE(req) {
  const id = req.nextUrl.searchParams.get("id");
  if (!id) return NextResponse.json({ error: "id requis" }, { status: 400 });
  return NextResponse.json({ ok: await removeStyle(id) });
}
