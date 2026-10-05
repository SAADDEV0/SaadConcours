import { getAllCours } from "@/lib/store";
import { buildOgImage, ogImageSize, ogImageContentType } from "../../_shared/ogImage";

export const size = ogImageSize;
export const contentType = ogImageContentType;
export const alt = "Fiche de cours SaadConcours";

// Prérendue au build — voir app/concours/[id]/opengraph-image.js.
export const dynamic = "force-static";
export const revalidate = false;

export async function generateStaticParams() {
  try {
    const list = await getAllCours();
    return list.filter((c) => c.available).map((c) => ({ id: c.id }));
  } catch {
    return [];
  }
}

export default async function Image(props) {
  const params = await props.params;
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
