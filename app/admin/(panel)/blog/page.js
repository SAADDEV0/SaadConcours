import ResourcePanel from "@/app/admin/_components/resource/ResourcePanel";
import PageHeader from "@/app/admin/_components/shell/PageHeader";

export const metadata = { title: "Blog" };

export default function BlogPage() {
  return (
    <>
      <PageHeader icon="📰" title="Blog" subtitle="Gère les articles publiés sur le site." />
      <ResourcePanel resourceKey="blog" />
    </>
  );
}
