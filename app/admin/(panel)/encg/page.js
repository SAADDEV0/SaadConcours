import ContentList from "../../_features/ContentList";

export const metadata = { title: "Cours ENCG" };

export default function Page() {
  return (
    <ContentList
      collectionKey="encg"
      hero={{
        icon: "🏫",
        eyebrow: "Contenu · ENCG",
        title: "Cours ENCG",
        text: "Les modules de l'ENCG du S1 au S10. Chaque « # CHAPITRE N — TITRE » devient une page chapitre ; l'espace ENCG s'ouvre sur le site au premier module publié.",
        newLabel: "Nouveau cours ENCG",
      }}
    />
  );
}
