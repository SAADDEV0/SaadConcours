export const metadata = {
  // See app/concours/layout.js for why this is kept short — the root
  // template appends " | SaadConcours" on top of whatever's here.
  title: "Cours Licence FSJES par module et par chapitre",
  description:
    "Cours de Licence FSJES Économie & Gestion (S1 à S6) découpés en chapitres : cours, exercices corrigés, résumé et QCM pour chaque chapitre.",
  alternates: { canonical: "/cours" },
  openGraph: { title: "Cours Licence FSJES — SaadConcours", url: "/cours" },
};

export default function CoursLayout({ children }) {
  return children;
}
