import { getAllNews } from "@/lib/store";
import { buildOgImage, ogImageSize, ogImageContentType } from "../../_shared/ogImage";

export const size = ogImageSize;
export const contentType = ogImageContentType;
export const alt = "Concours ouvert — SaadConcours";

export default async function Image({ params }) {
  const list = await getAllNews();
  const n = list.find((x) => x.id === params.id);
  if (!n) {
    return buildOgImage({ eyebrow: "SaadConcours", title: "Concours introuvable" });
  }
  return buildOgImage({
    eyebrow: [n.etablissement, n.ville].filter(Boolean).join(" · ") || "Concours ouvert",
    title: n.titre,
    subtitle: n.cloture ? "Clôturé" : n.date_limite ? `Date limite : ${n.date_limite}` : undefined,
  });
}
