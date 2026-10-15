import { getAllDroit } from "@/lib/store";
import { droitOuvert, isDroitPublie } from "@/lib/droit";
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
  return buildOgImage({
    eyebrow: `Cours de Droit${c.semestre ? ` · ${c.semestre}` : ""}`,
    title: c.title || c.module,
  });
}
