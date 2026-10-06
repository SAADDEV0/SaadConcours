import { buildOgImage, ogImageSize, ogImageContentType } from "./_shared/ogImage";

export const size = ogImageSize;
export const contentType = ogImageContentType;
export const alt = "SaadConcours — Cours Bac, Licence FSJES et concours Master au Maroc";

export default async function Image() {
  return buildOgImage({
    eyebrow: "Économie et gestion · Maroc",
    title: "Cours Bac, Licence FSJES et concours Master",
    subtitle: "Du Bac SEG à la Licence S1–S6, jusqu’aux sujets réels des concours d’accès au Master",
  });
}
