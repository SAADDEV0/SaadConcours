import ResourcePanel from "@/app/admin/_components/resource/ResourcePanel";
import PageHeader from "@/app/admin/_components/shell/PageHeader";

export const metadata = { title: "Cours" };

export default function CoursPage() {
  return (
    <>
      <PageHeader icon="📖" title="Cours" subtitle="Gère les fiches de cours publiées sur le site." />
      <ResourcePanel resourceKey="cours" />
    </>
  );
}
