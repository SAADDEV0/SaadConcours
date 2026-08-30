import { getAllBlog } from "@/lib/store";
import { buildOgImage, ogImageSize, ogImageContentType } from "../../_shared/ogImage";

export const size = ogImageSize;
export const contentType = ogImageContentType;
export const alt = "Article SaadConcours";

export default async function Image({ params }) {
  const list = await getAllBlog();
  const p = list.find((x) => x.id === params.id && x.available);
  if (!p) {
    return buildOgImage({ eyebrow: "SaadConcours", title: "Article introuvable" });
  }
  return buildOgImage({
    eyebrow: "Blog",
    title: p.title,
    subtitle: p.excerpt,
  });
}
