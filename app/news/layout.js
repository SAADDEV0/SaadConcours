export const metadata = {
  // See app/concours/layout.js for why this is kept short — the root
  // template appends " | SaadConcours" on top of whatever's here.
  title: "Concours Ouverts — Masters Maroc",
  description:
    "Liste à jour des concours d'accès aux Masters ouverts aux inscriptions au Maroc, avec dates limites et liens d'inscription directs.",
  alternates: { canonical: "/news" },
  openGraph: { title: "Concours ouverts — SaadConcours", url: "/news" },
};

export default function NewsLayout({ children }) {
  return children;
}
