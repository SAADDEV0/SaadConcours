import SocialGeneratorPanel from "@/app/admin/_components/social/SocialGeneratorPanel";
import PageHeader from "@/app/admin/_components/shell/PageHeader";

export const metadata = { title: "Réseaux sociaux" };

export default function ReseauxPage() {
  return (
    <>
      <PageHeader icon="📣" title="Réseaux sociaux" />
      <SocialGeneratorPanel />
    </>
  );
}
