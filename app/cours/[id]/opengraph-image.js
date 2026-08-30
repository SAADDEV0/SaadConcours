import { getAllCours } from "@/lib/store";
import { buildOgImage, ogImageSize, ogImageContentType } from "../../_shared/ogImage";

export const size = ogImageSize;
export const contentType = ogImageContentType;
export const alt = "Fiche de cours SaadConcours";

export default async function Image({ params }) {
  const list = await getAllCours();
  const c = list.find((x) => x.id === params.id && x.available);
  if (!c) {
    return buildOgImage({ eyebrow: "SaadConcours", title: "Fiche introuvable" });
  }
  return buildOgImage({
    eyebrow: c.module,
    title: c.title,
  });
}
