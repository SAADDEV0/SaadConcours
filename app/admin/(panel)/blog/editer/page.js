import ContentEditor from "../../../_features/ContentEditor";

export const metadata = { title: "Article · Éditeur" };

export default function Page() {
  return <ContentEditor collectionKey="blog" />;
}
