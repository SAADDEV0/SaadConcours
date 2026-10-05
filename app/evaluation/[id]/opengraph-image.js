import { getAllQuiz } from "@/lib/store";
import { buildOgImage, ogImageSize, ogImageContentType } from "../../_shared/ogImage";

export const size = ogImageSize;
export const contentType = ogImageContentType;
export const alt = "QCM SaadConcours";

// Prérendue au build — voir app/concours/[id]/opengraph-image.js.
export const dynamic = "force-static";
export const revalidate = false;

export async function generateStaticParams() {
  try {
    const list = await getAllQuiz();
    return list.filter((q) => q.available).map((q) => ({ id: q.id }));
  } catch {
    return [];
  }
}

export default async function Image(props) {
  const params = await props.params;
  const list = await getAllQuiz();
  const q = list.find((x) => x.id === params.id && x.available);
  if (!q) {
    return buildOgImage({ eyebrow: "SaadConcours", title: "QCM introuvable" });
  }
  const nb = (q.questions || []).length;
  return buildOgImage({
    eyebrow: q.module,
    title: q.title,
    subtitle: `${nb} questions corrigées`,
  });
}
