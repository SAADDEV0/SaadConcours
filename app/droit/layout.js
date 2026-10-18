export const metadata = {
  // Court : le modèle « %s | SaadConcours » de app/layout.js s'ajoute à ce
  // titre (voir app/concours/layout.js). Les pages de module et de chapitre
  // posent le leur, affiché sans suffixe. Repli seulement : app/droit/page.js
  // calcule titre et description sur les semestres publiés.
  title: "Cours de Droit FSJES du S1 au S6",
  description:
    "Cours de la licence de Droit (FSJES) du S1 au S6 : tronc commun, puis droit privé et droit public, en français et en arabe, avec exercices corrigés.",
  alternates: { canonical: "/droit" },
  openGraph: { title: "Cours de Droit FSJES — SaadConcours", url: "/droit", images: ["/opengraph-image"] },
};

export default function DroitLayout({ children }) {
  return children;
}
