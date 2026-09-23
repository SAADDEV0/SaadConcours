import { buildOgImage, ogImageSize, ogImageContentType } from "./_shared/ogImage";

export const size = ogImageSize;
export const contentType = ogImageContentType;
export const alt = "SaadConcours — Cours Bac, Licence FSJES et concours Master au Maroc";

export default async function Image() {
  return buildOgImage({
    eyebrow: "SaadConcours",
    title: "Cours Bac, Licence FSJES et concours Master",
    subtitle: "Cours chapitre par chapitre, exercices corrigés, QCM et sujets réels de concours — économie et gestion au Maroc",
  });
}
