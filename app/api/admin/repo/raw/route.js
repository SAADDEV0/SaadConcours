import { NextResponse } from "next/server";
import { streamRaw } from "@/lib/githubGit";

export const dynamic = "force-dynamic";

// Contenu brut d'un fichier de public/data, relayé en flux (jamais parsé).
// Sert en local (sans GITHUB_TOKEN) et de repli si le CDN de GitHub est
// injoignable depuis le navigateur.
export async function GET(req) {
  const res = await streamRaw(req.nextUrl.searchParams.get("path"));
  if (!res) return NextResponse.json({ error: "Fichier introuvable." }, { status: 404 });
  return new Response(res.body, {
    headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "private, no-store" },
  });
}
