import { NextResponse } from "next/server";
import { readHead } from "@/lib/githubGit";

export const dynamic = "force-dynamic";

// GET ?paths=data/concours.json,data/cours.json
// Renvoie le commit de tête et, pour chaque fichier, son hash de blob et
// l'URL (adressée par commit) où le navigateur le télécharge lui-même.
// Quelques Ko de JSON côté Worker, quel que soit le poids des fichiers.
export async function GET(req) {
  const list = (name, max) =>
    (req.nextUrl.searchParams.get(name) || "").split(",").map((p) => p.trim()).filter(Boolean).slice(0, max);
  const paths = list("paths", 20);
  const dirs = list("dirs", 4);
  if (!paths.length && !dirs.length) return NextResponse.json({ error: "Paramètre paths requis." }, { status: 400 });
  try {
    const head = await readHead(paths, dirs);
    return NextResponse.json(head, { headers: { "Cache-Control": "private, no-store" } });
  } catch (err) {
    console.error("repo head", err);
    return NextResponse.json({ error: "GitHub injoignable : " + err.message }, { status: 502 });
  }
}
