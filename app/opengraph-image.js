import { buildOgImage, ogImageSize, ogImageContentType } from "./_shared/ogImage";

export const size = ogImageSize;
export const contentType = ogImageContentType;
export const alt = "SaadConcours — Cours Bac, Licence éco-gestion et droit, concours Master au Maroc";

export default async function Image() {
  return buildOgImage({
    eyebrow: "Économie, gestion et droit · Maroc",
    title: "Cours Bac, Licence éco-gestion et droit, concours Master",
    subtitle: "Du Bac SEG aux licences FEG et FSJP (ex-FSJES), jusqu’aux sujets réels des concours d’accès au Master",
  });
}
