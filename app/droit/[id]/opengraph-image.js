import { getAllDroit } from "@/lib/store";
import { droitOuvert, isDroitPublie } from "@/lib/droit";
import { droitRangLabelFr } from "@/lib/droitTaxonomy";
import { buildOgImage, ogImageSize, ogImageContentType } from "../../_shared/ogImage";

export const size = ogImageSize;
export const contentType = ogImageContentType;
export const alt = "Cours de Droit SaadConcours";

// Prérendue au build — voir app/concours/[id]/opengraph-image.js. Rien avant
// le lancement de l'espace (lib/droit.js).
export const dynamic = "force-static";
export const revalidate = false;
export const dynamicParams = false;

async function publies() {
  return droitOuvert() ? (await getAllDroit()).filter(isDroitPublie) : [];
}

export async function generateStaticParams() {
  try {
    return (await publies()).map((c) => ({ id: c.id }));
  } catch {
    return [];
  }
}

export default async function Image(props) {
  const params = await props.params;
  const c = (await publies()).find((x) => x.id === params.id);
  if (!c) {
    return buildOgImage({ eyebrow: "SaadConcours", title: "Fiche introuvable" });
  }
  // Module en arabe : les polices de l'image (assets/og-fonts) n'ont pas de
  // glyphes arabes, et satori ne lie pas les lettres arabes ; la police de
  // repli qu'il va chercher fait planter le build (« lookupType: 5 -
  // substFormat: 3 is not yet supported », 2026-10-17). Carte en français.
  if (c.langue === "ar") {
    return buildOgImage({
      eyebrow: `Cours de Droit${c.semestre ? ` · ${c.semestre}` : ""} · en arabe`,
      title: `Cours de droit en arabe — ${droitRangLabelFr(c)}`,
      subtitle: "Licence de Droit (FSJES) : cours, exercices corrigés, résumé et QCM",
    });
  }
  return buildOgImage({
    eyebrow: `Cours de Droit${c.semestre ? ` · ${c.semestre}` : ""}`,
    title: c.title || c.module,
  });
}
