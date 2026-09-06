import PdfStudio from "@/app/admin/_components/pdf/PdfStudio";

export const metadata = { title: "Éditeur PDF" };

// The studio carries its own toolbar (title, save state, actions), so this
// page deliberately skips the usual <PageHeader> — two stacked headings on a
// full-width workspace just eat vertical room the canvas needs.
export default function PdfEditorPage() {
  return <PdfStudio />;
}
