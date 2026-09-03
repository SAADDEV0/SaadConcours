import SubscribersManager from "@/app/admin/_components/email/SubscribersManager";

export const metadata = { title: "Abonnés" };

export default function AbonnesPage() {
  return (
    <div className="admin-card">
      <h2 className="admin-section-title">📧 Abonnés aux alertes</h2>
      <SubscribersManager />
    </div>
  );
}
