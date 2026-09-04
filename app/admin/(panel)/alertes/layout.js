import SubNav from "@/app/admin/_components/shell/SubNav";
import PageHeader from "@/app/admin/_components/shell/PageHeader";
import AlertesStatusBar from "@/app/admin/_components/email/AlertesStatusBar";
import { SECTIONS } from "@/app/admin/_lib/nav";

const alertesItem = SECTIONS.flatMap((s) => s.items).find((i) => i.key === "alertes");

export default function AlertesLayout({ children }) {
  return (
    <>
      <PageHeader icon="🔔" title="Alertes email" subtitle="Alerte automatique, envoi ponctuel et gestion des abonnés." />
      <AlertesStatusBar />
      <SubNav items={alertesItem.children} />
      {children}
    </>
  );
}
