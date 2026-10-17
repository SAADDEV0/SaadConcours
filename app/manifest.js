export default function manifest() {
  return {
    name: "SaadConcours — Cours Bac, FSJES, droit et concours Master",
    short_name: "SaadConcours",
    description:
      "Cours du Bac Sciences Économiques, des licences d'économie-gestion (FEG, ex-FSJES) et de droit (FSJP), exercices corrigés, QCM et concours Master au Maroc.",
    start_url: "/",
    display: "standalone",
    background_color: "#13141f",
    theme_color: "#4f46e5",
    lang: "fr",
    icons: [
      { src: "/icon-192", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/icon-512", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/icon-512-maskable", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
