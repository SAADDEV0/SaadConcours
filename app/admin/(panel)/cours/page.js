import ContentList from "../../_features/ContentList";

export const metadata = { title: "Cours Licence" };

export default function Page() {
  return (
    <ContentList
      collectionKey="cours"
      hero={{
        icon: "📚",
        eyebrow: "Contenu · Licence FSJES",
        title: "Cours Licence",
        text: "Les modules de la Licence Économie & Gestion. Chaque titre « ## » d'un cours devient une page chapitre sur le site.",
        newLabel: "Nouveau cours",
      }}
    />
  );
}
