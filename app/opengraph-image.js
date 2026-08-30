import { buildOgImage, ogImageSize, ogImageContentType } from "./_shared/ogImage";

export const size = ogImageSize;
export const contentType = ogImageContentType;
export const alt = "SaadConcours — Concours Masters Maroc";

export default async function Image() {
  return buildOgImage({
    eyebrow: "SaadConcours",
    title: "Prépare ton concours d'accès au Master au Maroc",
    subtitle: "Sujets réels, fiches de cours et QCM — CCA, GFCF, Finance, Fiscalité, Audit",
  });
}
