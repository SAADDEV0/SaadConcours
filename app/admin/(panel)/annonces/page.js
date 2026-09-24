import ContentList from "../../_features/ContentList";

export const metadata = { title: "Concours ouverts" };

export default function Page() {
  return (
    <ContentList
      collectionKey="news"
      hero={{
        icon: "📣",
        eyebrow: "Contenu · Inscriptions",
        title: "Concours ouverts",
        text: "Les annonces d'inscription affichées sur /news. Le robot almaster en ajoute automatiquement ; tu peux les corriger, les clôturer ou en créer à la main.",
        newLabel: "Nouvelle annonce",
      }}
    />
  );
}
