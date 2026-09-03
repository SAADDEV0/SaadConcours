import AdminShell from "@/app/admin/_components/shell/AdminShell";

export const metadata = {
  title: { template: "%s · Admin", default: "Tableau de bord · Admin" },
};

export default function PanelLayout({ children }) {
  return <AdminShell>{children}</AdminShell>;
}
