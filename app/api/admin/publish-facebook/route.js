import { NextResponse } from "next/server";

/* -------------------------------------------------------------------
 * Publie directement une image + légende sur la Page Facebook du site
 * via l'API Graph (POST /{page-id}/photos). Nécessite une Page Facebook
 * (pas un profil personnel — Meta a retiré la publication automatisée
 * sur les profils il y a des années) et un jeton d'accès de Page longue
 * durée, tous deux fournis par variables d'environnement côté serveur
 * (jamais exposés au client). Voir docs/facebook-auto-publish.md pour la
 * procédure d'obtention.
 * ---------------------------------------------------------------- */

const DEFAULT_GRAPH_VERSION = "v21.0";

export async function POST(req) {
  const pageId = process.env.FACEBOOK_PAGE_ID;
  const token = process.env.FACEBOOK_PAGE_ACCESS_TOKEN;
  if (!pageId || !token) {
    return NextResponse.json(
      {
        error:
          "Publication Facebook non configurée : ajoute FACEBOOK_PAGE_ID et FACEBOOK_PAGE_ACCESS_TOKEN dans les variables d'environnement (voir docs/facebook-auto-publish.md).",
      },
      { status: 501 }
    );
  }

  const body = await req.json().catch(() => null);
  const imageBase64 = body?.imageBase64;
  const caption = body?.caption;
  if (!imageBase64 || !caption) {
    return NextResponse.json({ error: "Image et texte requis." }, { status: 400 });
  }

  const base64Data = imageBase64.includes(",") ? imageBase64.split(",")[1] : imageBase64;
  let buffer;
  try {
    buffer = Buffer.from(base64Data, "base64");
  } catch {
    return NextResponse.json({ error: "Image invalide." }, { status: 400 });
  }
  if (!buffer.length || buffer.length > 8 * 1024 * 1024) {
    return NextResponse.json({ error: "Image invalide ou trop volumineuse (8 Mo max)." }, { status: 400 });
  }

  const graphVersion = process.env.FACEBOOK_GRAPH_VERSION || DEFAULT_GRAPH_VERSION;
  const form = new FormData();
  form.append("source", new Blob([buffer], { type: "image/png" }), "post.png");
  form.append("caption", caption);
  form.append("access_token", token);

  let res, data;
  try {
    res = await fetch(`https://graph.facebook.com/${graphVersion}/${pageId}/photos`, {
      method: "POST",
      body: form,
    });
    data = await res.json();
  } catch {
    return NextResponse.json({ error: "Impossible de joindre l'API Facebook." }, { status: 502 });
  }

  if (!res.ok || data.error) {
    return NextResponse.json({ error: data.error?.message || "Échec de la publication Facebook." }, { status: 502 });
  }

  const postId = data.post_id || data.id;
  return NextResponse.json({ ok: true, postId, url: postId ? `https://www.facebook.com/${postId}` : null });
}
