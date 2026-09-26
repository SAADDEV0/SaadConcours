export const metadata = {
  // See app/concours/layout.js for why this is kept short — the root
  // template appends " | SaadConcours" on top of whatever's here.
  title: "Blog — Méthode & Conseils Concours Master",
  description:
    "Articles pour préparer ton concours d'accès au Master au Maroc : matières à réviser, méthode, erreurs à éviter, par module et par filière.",
  alternates: { canonical: "/blog" },
  openGraph: { title: "Blog — SaadConcours", url: "/blog" },
};

export default function BlogLayout({ children }) {
  return children;
}
