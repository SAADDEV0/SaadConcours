import { getAllQuiz } from "@/lib/store";
import { buildOgImage, ogImageSize, ogImageContentType } from "../../_shared/ogImage";

export const size = ogImageSize;
export const contentType = ogImageContentType;
export const alt = "QCM SaadConcours";

export default async function Image({ params }) {
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
