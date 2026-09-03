import ResourcePanel from "@/app/admin/_components/resource/ResourcePanel";
import PageHeader from "@/app/admin/_components/shell/PageHeader";

export const metadata = { title: "Évaluation" };

export default function EvaluationPage() {
  return (
    <>
      <PageHeader icon="📝" title="Évaluation" subtitle="Gère les évaluations publiées sur le site." />
      <ResourcePanel resourceKey="quiz" />
    </>
  );
}
