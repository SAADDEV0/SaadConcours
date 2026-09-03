import SubNav from "@/app/admin/_components/shell/SubNav";
import PageHeader from "@/app/admin/_components/shell/PageHeader";
import { SECTIONS } from "@/app/admin/_lib/nav";

const reglagesItem = SECTIONS.flatMap((s) => s.items).find((i) => i.key === "reglages");

export default function ReglagesLayout({ children }) {
  return (
    <>
      <PageHeader icon="⚙️" title="Réglages" />
      <SubNav items={reglagesItem.children} />
      {children}
    </>
  );
}
