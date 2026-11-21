export const metadata = {
  // Repli seulement : chaque page de /prepa pose son propre titre (option, cours, chapitre).
  title: "Cours de prépa ECT et ECS",
  description: "Cours des classes préparatoires ECT et ECS pour le CNAEM (accès aux ENCG) : chapitres expliqués, exercices corrigés, résumés et QCM.",
  openGraph: { title: "Cours de prépa ECT et ECS — SaadConcours", url: "/prepa/ect", images: ["/opengraph-image"] },
};

export default function PrepaLayout({ children }) {
  return children;
}
