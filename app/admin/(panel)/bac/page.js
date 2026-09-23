import PageHeader from "@/app/admin/_components/shell/PageHeader";
import BacAdmin from "./BacAdmin";

export const metadata = { title: "Cours Bac" };

export default function BacAdminPage() {
  return (
    <>
      <PageHeader
        icon="folders"
        title="Cours Bac"
        subtitle="Programme de 1ère et 2ème Bac Sciences Économiques & Gestion : avancement du contenu et audience."
        actions={
          <a className="admin-btn secondary small" href="/bac/2bac" target="_blank" rel="noopener noreferrer">
            Voir l'espace Bac ↗
          </a>
        }
      />
      <BacAdmin />
    </>
  );
}
