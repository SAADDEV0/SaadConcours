import { getPublicConcours } from "@/lib/store";
import { buildOgImage, ogImageSize, ogImageContentType } from "../../_shared/ogImage";

export const size = ogImageSize;
export const contentType = ogImageContentType;
export const alt = "Concours SaadConcours";

// Prérendue au build, comme la page (voir app/concours/[id]/page.js). Sans ces
// trois exports, la lecture no-store de lib/github.js rendait la route
// dynamique : chaque image était dessinée par le Worker à la demande — rendu
// PNG bien au-delà des 10 ms de CPU du plan gratuit, d'où les 5XX relevés par
// Search Console sur /concours/<id>/opengraph-image (septembre 2026). Servie
// depuis le cache des assets, l'image ne coûte plus qu'une lecture.
export const dynamic = "force-static";
export const revalidate = false;

export async function generateStaticParams() {
  try {
    const list = await getPublicConcours();
    return list.map((c) => ({ id: c.id }));
  } catch {
    return [];
  }
}

export default async function Image(props) {
  const params = await props.params;
  const list = await getPublicConcours();
  const c = list.find((x) => x.id === params.id);
  if (!c) {
    return buildOgImage({ eyebrow: "SaadConcours", title: "Concours introuvable" });
  }
  return buildOgImage({
    // « Fès · Non précisée » sur la carte quand l'année est inconnue : on
    // n'affiche l'année que si c'en est une.
    eyebrow: [c.ville, /\d{4}/.test(String(c.annee || "")) ? c.annee : null].filter(Boolean).join(" · "),
    title: c.master_reel || c.filiere || c.etablissement,
    subtitle: c.etablissement,
  });
}
