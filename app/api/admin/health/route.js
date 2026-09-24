import { NextResponse } from "next/server";
import { gitConfigured } from "@/lib/githubGit";
import { kvConfigured, getKv } from "@/lib/redis";
import { verifySessionToken, SESSION_COOKIE } from "@/lib/session";

export const dynamic = "force-dynamic";

// État réel de la configuration serveur, pour l'onglet Réglages › Système :
// ce qui manque se voit ici au lieu de se découvrir par une erreur au moment
// d'enregistrer.
export async function GET(req) {
  let kvOk = false;
  let kvError = "";
  if (kvConfigured()) {
    try {
      const kv = await getKv();
      kvOk = (await kv.ping()) === "PONG";
    } catch (err) {
      kvError = err.message;
    }
  }

  const token = req.cookies.get(SESSION_COOKIE)?.value;
  const session = token ? await verifySessionToken(token) : null;

  return NextResponse.json(
    {
      checks: [
        {
          key: "github",
          label: "Écriture sur GitHub (GITHUB_TOKEN)",
          ok: gitConfigured(),
          detail: gitConfigured()
            ? "Les enregistrements créent des commits sur main."
            : "Absent : les modifications restent en mémoire et ne sont pas publiées.",
        },
        {
          key: "kv",
          label: "Base Upstash (statistiques, abonnés, corbeille)",
          ok: kvOk,
          detail: !kvConfigured() ? "KV_REST_API_URL / KV_REST_API_TOKEN absents : données en mémoire uniquement." : kvOk ? "Connectée." : `Injoignable${kvError ? ` : ${kvError}` : ""}.`,
        },
        {
          key: "session",
          label: "Secret de session dédié (ADMIN_SESSION_SECRET)",
          ok: Boolean(process.env.ADMIN_SESSION_SECRET),
          detail: process.env.ADMIN_SESSION_SECRET
            ? "Les sessions sont signées indépendamment du mot de passe."
            : "Repli sur ADMIN_PASSWORD : changer le mot de passe déconnecte tout le monde.",
        },
      ],
      session: session ? { issuedAt: session.iat * 1000, expiresAt: session.exp * 1000 } : null,
      runtime: typeof navigator !== "undefined" && navigator.userAgent === "Cloudflare-Workers" ? "Cloudflare Workers" : "Node.js",
    },
    { headers: { "Cache-Control": "private, no-store" } }
  );
}
