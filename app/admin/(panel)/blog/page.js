import ContentList from "../../_features/ContentList";

export const metadata = { title: "Blog" };

export default function Page() {
  return (
    <ContentList
      collectionKey="blog"
      hero={{
        icon: "✍️",
        eyebrow: "Contenu · Blog",
        title: "Articles du blog",
        text: "Guides, méthode et comparatifs. Le score de qualité vérifie aussi le référencement : longueur du titre et du résumé, structure, liens internes.",
        newLabel: "Nouvel article",
      }}
    />
  );
}
