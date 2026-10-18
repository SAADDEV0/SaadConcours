import { buildOgImage, ogImageSize, ogImageContentType } from "./_shared/ogImage";

export const size = ogImageSize;
export const contentType = ogImageContentType;
export const alt = "SaadConcours — Cours Bac, Licence FSJES et concours Master au Maroc";

export default async function Image() {
  return buildOgImage({
    eyebrow: "Économie, gestion et droit · Maroc",
    title: "Cours Bac, Licence FSJES et concours Master",
    subtitle: "Du Bac SEG à la Licence FSJES (économie, gestion et droit), jusqu’aux sujets réels des concours d’accès au Master",
  });
}
