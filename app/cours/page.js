import { getAllCours } from "@/lib/store";
import { chromeHtml, footerHtml } from "../_shared/chrome";
import { coursCardHtml } from "../_shared/coursCard";
import CoursExplorer from "./CoursExplorer";

// Server-rendered on first load (mirrors app/concours/page.js) so every
// module already has a real <a href="/cours/[id]"> link — and the fiche's
// title/description text — in the raw HTML for crawlers. A card click is a
// plain navigation to that dedicated page (no inline reader here anymore),
// exactly like a concours card navigates to /concours/[id].
export default async function CoursPage() {
  const cours = await getAllCours().catch(() => []);

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: chromeHtml({ active: "cours", showSearch: false }) }} />

      <div className="cours-view" id="viewCours">
        <h1 className="eval-title">📖 Cours par module</h1>
        <p className="eval-sub">Fiches de cours synthétiques : définitions, formules et points clés à retenir, par module.</p>
        <div
          className="grid"
          id="coursModuleGrid"
          dangerouslySetInnerHTML={{ __html: cours.map(coursCardHtml).join("") }}
        />
      </div>

      <div dangerouslySetInnerHTML={{ __html: footerHtml() }} />

      <CoursExplorer />
    </>
  );
}
