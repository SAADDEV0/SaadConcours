export const metadata = {
  // Court : le modèle « %s | SaadConcours » de app/layout.js s'ajoute à ce
  // titre (voir app/concours/layout.js). Les pages de module et de chapitre
  // posent le leur, affiché sans suffixe.
  title: "Cours ENCG du S1 au S10 par module",
  description:
    "Cours de l'ENCG (École nationale de commerce et de gestion) du S1 au S10, module par module : chapitres, exercices corrigés et cours complet en PDF.",
  alternates: { canonical: "/encg" },
  openGraph: { title: "Cours ENCG du S1 au S10 — SaadConcours", url: "/encg" },
};

export default function EncgLayout({ children }) {
  return children;
}
