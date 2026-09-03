import ResourcePanel from "@/app/admin/_components/resource/ResourcePanel";
import PageHeader from "@/app/admin/_components/shell/PageHeader";

export const metadata = { title: "Concours ouverts" };

export default function ConcoursOuvertsPage() {
  return (
    <>
      <PageHeader icon="🆕" title="Concours ouverts" subtitle="Annonces d'inscriptions publiées sur le site." />
      <ResourcePanel resourceKey="news" />
    </>
  );
}
