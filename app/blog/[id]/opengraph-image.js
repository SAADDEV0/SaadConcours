import { getAllBlog } from "@/lib/store";
import { buildOgImage, ogImageSize, ogImageContentType } from "../../_shared/ogImage";

async function findPost(params) {
  const { id } = await params;
  const list = await getAllBlog();
  return list.find((x) => x.id === id && x.available) || null;
}

// Un `alt` par article (og:image:alt, twitter:image:alt) au lieu d'un texte
// unique pour tout le blog : seul generateImageMetadata le permet, l'export
// `alt` étant statique.
export async function generateImageMetadata(props) {
  const p = await findPost(props.params);
  return [
    {
      id: "og",
      size: ogImageSize,
      contentType: ogImageContentType,
      alt: p ? `${p.title} — SaadConcours` : "Article SaadConcours",
    },
  ];
}

export default async function Image(props) {
  const p = await findPost(props.params);
  if (!p) {
    return buildOgImage({ eyebrow: "SaadConcours", title: "Article introuvable" });
  }
  return buildOgImage({
    eyebrow: "Blog",
    title: p.title,
    subtitle: p.excerpt,
  });
}
