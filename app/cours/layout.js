export const metadata = {
  // See app/concours/layout.js for why this is kept short — the root
  // template appends " | SaadConcours" on top of whatever's here.
  // « Cours FSJES » en tête : c'est la requête tapée telle quelle dans Google.
  title: "Cours FSJES S1 à S6 avec exercices corrigés",
  description:
    "Cours FSJES Économie et Gestion du S1 au S6, module par module : chaque chapitre avec le cours, des exercices corrigés, un résumé et un QCM. Gratuit.",
  alternates: { canonical: "/cours" },
  openGraph: { title: "Cours FSJES S1 à S6 — SaadConcours", url: "/cours" },
};

export default function CoursLayout({ children }) {
  return children;
}
