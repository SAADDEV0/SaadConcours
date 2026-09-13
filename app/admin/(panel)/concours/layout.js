import SubNav from "@/app/admin/_components/shell/SubNav";
import PageHeader from "@/app/admin/_components/shell/PageHeader";
import ConcoursStatsRow from "@/app/admin/_components/resource/ConcoursStatsRow";
import { SECTIONS } from "@/app/admin/_lib/nav";

const concoursItem = SECTIONS.flatMap((s) => s.items).find((i) => i.key === "concours");

export default function ConcoursLayout({ children }) {
  return (
    <>
      <PageHeader icon="📚" title="Concours" subtitle="Gère les concours publiés sur le site." />
      <ConcoursStatsRow />
      <SubNav items={concoursItem.children} />
      {children}
    </>
  );
}
