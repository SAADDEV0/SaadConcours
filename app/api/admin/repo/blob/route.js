import { NextResponse } from "next/server";
import { createBlobFromStream } from "@/lib/githubGit";

export const dynamic = "force-dynamic";

// 60 Mo de base64 ≈ 45 Mo de fichier : bien au-delà de concours.json, et
// sous la limite de 100 Mo par requête du Worker.
const MAX_BYTES = 60 * 1024 * 1024;

// POST, corps = {"encoding":"base64","content":"…"} déjà assemblé par le
// navigateur. Relayé tel quel à GitHub (voir lib/githubGit.js).
export async function POST(req) {
  const len = Number(req.headers.get("content-length") || 0);
  if (len > MAX_BYTES) return NextResponse.json({ error: "Fichier trop volumineux." }, { status: 413 });
  if (!req.body) return NextResponse.json({ error: "Corps vide." }, { status: 400 });
  try {
    const blob = await createBlobFromStream(req.body, len);
    return NextResponse.json(blob, { status: 201 });
  } catch (err) {
    console.error("repo blob", err);
    return NextResponse.json({ error: "Envoi à GitHub impossible : " + err.message }, { status: err.status || 502 });
  }
}
