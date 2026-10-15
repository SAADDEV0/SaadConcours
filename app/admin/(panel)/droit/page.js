import ContentList from "../../_features/ContentList";

export const metadata = { title: "Cours Droit" };

export default function Page() {
  return (
    <ContentList
      collectionKey="droit"
      hero={{
        icon: "⚖️",
        eyebrow: "Contenu · Droit",
        title: "Cours Droit",
        text: "La licence de Droit du S1 au S6 : tronc commun, puis droit privé et droit public, en français et en arabe. L'espace reste fermé sur le site jusqu'à son lancement, même avec des modules publiés.",
        newLabel: "Nouveau cours de Droit",
      }}
    />
  );
}
