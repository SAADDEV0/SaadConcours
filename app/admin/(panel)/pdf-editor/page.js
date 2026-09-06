import PdfLayoutEditor from "@/app/admin/_components/settings/PdfLayoutEditor";
import PageHeader from "@/app/admin/_components/shell/PageHeader";

export const metadata = { title: "Éditeur PDF" };

export default function PdfEditorPage() {
  return (
    <>
      <PageHeader icon="🎨" title="Éditeur PDF" />
      <PdfLayoutEditor />
    </>
  );
}
