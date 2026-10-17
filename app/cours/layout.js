export const metadata = {
  // See app/concours/layout.js for why this is kept short — the root
  // template appends " | SaadConcours" on top of whatever's here.
  // « Cours FSJES » en tête : c'est la requête tapée telle quelle dans Google.
  // « FEG » : la faculté d'économie et de gestion née de la séparation des
  // FSJES (2026-10-17). 46 caractères + « | SaadConcours » = 61, sous la
  // limite de seoText.js.
  title: "Cours FSJES et FEG S1 à S6, exercices corrigés",
  description:
    "Cours FSJES et FEG d'économie et gestion du S1 au S6, module par module : chaque chapitre avec le cours, des exercices corrigés, un résumé et un QCM.",
  alternates: { canonical: "/cours" },
  openGraph: { title: "Cours FSJES et FEG S1 à S6 — SaadConcours", url: "/cours" },
};

export default function CoursLayout({ children }) {
  return children;
}
