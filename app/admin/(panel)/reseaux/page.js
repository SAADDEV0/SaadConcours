import SocialStudio from "@/app/admin/_components/social/SocialStudio";

export const metadata = { title: "Réseaux sociaux" };

// Pas de <PageHeader> ici : le studio a sa propre barre de titre collante
// (voir SocialStudio), un second bandeau ferait doublon.
export default function ReseauxPage() {
  return <SocialStudio />;
}
