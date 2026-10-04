import { NextResponse } from "next/server";
import { upsertManySocial } from "@/lib/socialPlan";

export const dynamic = "force-dynamic";

// Met des carrousels dans la file de publication automatique (Instagram +
// Facebook). Le travail lourd (images, envoi à Meta) n'a pas lieu ici mais
// dans GitHub Actions (.github/workflows/social-publish.yml), qui lit cette
// file dans KV : un clic = une seule requête Worker, quel que soit le lot.
//
// Corps : { theme, design?, items: [{ id, title, date?, design?, captions?: { instagram, facebook } }] }
// design : réglages du Studio (style, ton, hashtags, fin de texte) communs au
// lot ; celui d'un concours (textes de l'affiche retouchés) s'y ajoute.
// Sans date : publication immédiate, on réveille le workflow tout de suite.

const OWNER = "SAADDEV0";
const REPO = "SaadConcours";
const WORKFLOW = "social-publish.yml";
const SITE = "https://www.saadconcours.space";
const PLATFORMS = ["instagram", "facebook"];

// Déclenche le workflow sans attendre sa tâche planifiée. Demande un jeton
// GitHub avec la permission « Actions : écriture » ; sans elle, la
// publication part au prochain passage planifié (toutes les 15 minutes).
async function wakeWorkflow() {
  if (!process.env.GITHUB_TOKEN) return false;
  try {
    const res = await fetch(`https://api.github.com/repos/${OWNER}/${REPO}/actions/workflows/${WORKFLOW}/dispatches`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        Accept: "application/vnd.github+json",
        "User-Agent": "saadconcours-admin",
      },
      body: JSON.stringify({ ref: "main" }),
    });
    return res.status === 204;
  } catch {
    return false;
  }
}

export async function POST(req) {
  const body = await req.json().catch(() => null);
  const items = Array.isArray(body?.items) ? body.items.filter((it) => it?.id).slice(0, 60) : [];
  if (!items.length) return NextResponse.json({ error: "Aucun concours à publier." }, { status: 400 });

  const now = Date.now();
  const entries = [];
  for (const it of items) {
    const at = it.date && !Number.isNaN(Date.parse(it.date)) ? new Date(it.date).toISOString() : new Date(now).toISOString();
    for (const platform of PLATFORMS) {
      entries.push({
        kind: "concours",
        itemId: String(it.id),
        title: String(it.title || it.id),
        platform,
        status: "planned",
        auto: true,
        theme: body.theme,
        design: { ...(body.design || {}), ...(it.design || {}) },
        date: at,
        caption: it.captions?.[platform] || "",
        url: `${SITE}/concours/${encodeURIComponent(it.id)}?utm_source=${platform}&utm_medium=social&utm_campaign=concours`,
        note: it.date ? "Publication automatique" : "Publication immédiate",
      });
    }
  }

  try {
    const saved = await upsertManySocial(entries);
    const dueNow = saved.some((e) => Date.parse(e.date) <= now + 5 * 60000);
    const woken = dueNow ? await wakeWorkflow() : false;
    return NextResponse.json({ entries: saved, woken }, { status: 201 });
  } catch (err) {
    console.error("social publish", err);
    return NextResponse.json({ error: "Mise en file impossible." }, { status: 500 });
  }
}
