export default function manifest() {
  return {
    name: "SaadConcours — Concours Masters Maroc",
    short_name: "SaadConcours",
    description:
      "Sujets réels de concours d'accès aux Masters, fiches de cours et QCM d'entraînement pour les universités marocaines.",
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
