export const metadata = {
  // See app/concours/layout.js for why this is kept short — the root
  // template appends " | SaadConcours" on top of whatever's here.
  title: "Fiches de Cours par Module — Master Maroc",
  description:
    "Fiches de cours synthétiques par module (Comptabilité, Analyse Financière, Management, Marketing, Macroéconomie...) pour réviser ton concours de Master.",
  alternates: { canonical: "/cours" },
  openGraph: { title: "Fiches de cours par module — SaadConcours", url: "/cours" },
};

export default function CoursLayout({ children }) {
  return children;
}
