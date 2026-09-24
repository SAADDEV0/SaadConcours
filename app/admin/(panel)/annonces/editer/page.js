import ContentEditor from "../../../_features/ContentEditor";

export const metadata = { title: "Annonce · Éditeur" };

export default function Page() {
  return <ContentEditor collectionKey="news" />;
}
