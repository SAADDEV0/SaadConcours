export const metadata = {
  // See app/concours/layout.js for why this is kept short — the root
  // template appends " | SaadConcours" on top of whatever's here.
  title: "QCM d'Auto-Évaluation — Concours Master Maroc",
  description:
    "QCM d'entraînement corrigés par module pour t'auto-évaluer avant les concours d'accès aux Masters spécialisés au Maroc — export PDF avec réponses.",
  alternates: { canonical: "/evaluation" },
  openGraph: { title: "QCM d'auto-évaluation — SaadConcours", url: "/evaluation" },
};

export default function EvaluationLayout({ children }) {
  return children;
}
