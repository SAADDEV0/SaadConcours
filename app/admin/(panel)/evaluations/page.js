import ContentList from "../../_features/ContentList";

export const metadata = { title: "Évaluations" };

export default function Page() {
  return (
    <ContentList
      collectionKey="quiz"
      hero={{
        icon: "✅",
        eyebrow: "Contenu · QCM",
        title: "Évaluations",
        text: "Les QCM d'auto-évaluation publiés dans /evaluation, question par question, avec bonnes réponses et justifications.",
        newLabel: "Nouvelle évaluation",
      }}
    />
  );
}
