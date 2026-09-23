export default function manifest() {
  return {
    name: "SaadConcours — Cours Bac, FSJES et concours Master",
    short_name: "SaadConcours",
    description:
      "Cours du Bac Sciences Économiques et de la Licence FSJES chapitre par chapitre, exercices corrigés, QCM et sujets réels de concours Master au Maroc.",
    start_url: "/",
    display: "standalone",
    background_color: "#0f1115",
    theme_color: "#4f46e5",
    lang: "fr",
    icons: [
      { src: "/icon-192", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/icon-512", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/icon-512-maskable", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
