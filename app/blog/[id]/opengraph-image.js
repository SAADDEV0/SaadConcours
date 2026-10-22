import { getAllBlog } from "@/lib/store";
import { buildOgImage, ogImageSize, ogImageContentType } from "../../_shared/ogImage";

export const size = ogImageSize;
export const contentType = ogImageContentType;
export const alt = "Article SaadConcours";

// Prérendue au build — voir app/concours/[id]/opengraph-image.js.
//
// Le texte alternatif propre à chaque article (og:image:alt) est déclaré par
// generateMetadata dans ./page.js, qui reprend aussi l'URL de cette image :
// l'export `alt` ci-dessus est statique. Jusqu'à Next 15, il venait d'un
// generateImageMetadata ici même ; Next 16 enveloppe une telle route dans son
// propre generateStaticParams, qui ignore celui de ce fichier : plus aucune
// image n'était prérendue, et le Worker les aurait dessinées à la demande.
export const dynamic = "force-static";
export const revalidate = false;

export async function generateStaticParams() {
  try {
    const list = await getAllBlog();
    return list.filter((p) => p.available).map((p) => ({ id: p.id }));
  } catch {
    return [];
  }
}

export default async function Image(props) {
  const { id } = await props.params;
  const list = await getAllBlog();
  const p = list.find((x) => x.id === id && x.available);
  if (!p) {
    return buildOgImage({ eyebrow: "SaadConcours", title: "Article introuvable" });
  }
  return buildOgImage({
    eyebrow: "Blog",
    title: p.title,
    subtitle: p.excerpt,
  });
}
