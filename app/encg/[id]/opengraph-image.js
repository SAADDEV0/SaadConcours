import { getAllEncg } from "@/lib/store";
import { isEncgPublie } from "@/lib/encg";
import { buildOgImage, ogImageSize, ogImageContentType } from "../../_shared/ogImage";

export const size = ogImageSize;
export const contentType = ogImageContentType;
export const alt = "Cours ENCG SaadConcours";

// Prérendue au build — voir app/concours/[id]/opengraph-image.js.
export const dynamic = "force-static";
export const revalidate = false;

export async function generateStaticParams() {
  try {
    return (await getAllEncg()).filter(isEncgPublie).map((c) => ({ id: c.id }));
  } catch {
    return [];
  }
}

export default async function Image(props) {
  const params = await props.params;
  const c = (await getAllEncg()).find((x) => x.id === params.id && isEncgPublie(x));
  if (!c) {
    return buildOgImage({ eyebrow: "SaadConcours", title: "Fiche introuvable" });
  }
  return buildOgImage({
    eyebrow: `Cours ENCG${c.semestre ? ` · ${c.semestre}` : ""}`,
    title: c.title || c.module,
  });
}
