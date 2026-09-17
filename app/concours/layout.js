export const metadata = {
  // Kept under ~45 chars: the root layout's "%s | SaadConcours" template
  // (app/layout.js) appends 15 more to whatever a child sets here, and the
  // old title only cleared 60 total by counting on Google to truncate it
  // for us — every section title in this route group was the same length
  // problem, fixed together.
  title: "Sujets de Concours Master Maroc — Corrigés",
  description:
    "Sujets de concours d'accès aux Masters marocains réellement tombés (FSJES, ENCG) — énoncés complets, scans, corrigés indicatifs et export PDF gratuit.",
  alternates: { canonical: "/concours" },
  openGraph: { title: "Concours Masters Maroc — Sujets réels avec corrigés", url: "/concours" },
};

export default function ConcoursLayout({ children }) {
  return children;
}
