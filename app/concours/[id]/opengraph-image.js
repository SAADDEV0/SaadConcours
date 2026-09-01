import { getAllConcours } from "@/lib/store";
import { buildOgImage, ogImageSize, ogImageContentType } from "../../_shared/ogImage";

export const size = ogImageSize;
export const contentType = ogImageContentType;
export const alt = "Concours SaadConcours";

export default async function Image({ params }) {
  const list = await getAllConcours();
  const c = list.find((x) => x.id === params.id);
  if (!c) {
    return buildOgImage({ eyebrow: "SaadConcours", title: "Concours introuvable" });
  }
  return buildOgImage({
    eyebrow: `${c.ville} · ${c.annee}`,
    title: c.master_reel || c.filiere || c.etablissement,
    subtitle: c.etablissement,
  });
}
