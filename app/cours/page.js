import { getAllCours } from "@/lib/store";
import { chromeHtml, footerHtml } from "../_shared/chrome";
import { coursCardHtml } from "../_shared/coursCard";
import CoursExplorer from "./CoursExplorer";

// Server-rendered on first load (mirrors app/concours/page.js) so every
// module already has a real <a href="/cours/[id]"> link — and the fiche's
// title/description text — in the raw HTML for crawlers. CoursExplorer then
// hydrates on top: a plain click still opens the inline reader instead of
// navigating away, but the underlying link keeps working for JS-less
// visitors, right-click "open in new tab", and search engines.
export default async function CoursPage() {
  const cours = await getAllCours().catch(() => []);

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: chromeHtml({ active: "cours", showSearch: false }) }} />

      <div className="cours-view" id="viewCours">
        <div id="coursModuleList">
          <h1 className="eval-title">📖 Cours par module</h1>
          <p className="eval-sub">Fiches de cours synthétiques : définitions, formules et points clés à retenir, par module.</p>
          <div
            className="grid"
            id="coursModuleGrid"
            dangerouslySetInnerHTML={{ __html: cours.map(coursCardHtml).join("") }}
          />
        </div>

        <div id="coursReaderWrap" style={{ display: "none" }}>
          <div className="eval-toolbar">
            <button className="reset-btn" id="coursBack">← Modules</button>
            <div className="eval-progress" id="coursReaderMeta"></div>
            <div className="cours-theme-picker" id="coursThemePicker">
              <button className="cours-theme-btn" id="coursThemeBtn" type="button">🎨 Thème de lecture</button>
              <div className="cours-theme-panel" id="coursThemePanel" style={{ display: "none" }}></div>
            </div>
            <button className="dl-btn" id="coursPdfBtn">⬇ Télécharger en PDF</button>
          </div>
          <div className="cours-reader" id="coursReader">
            <aside className="cours-toc" id="coursToc"></aside>
            <div className="cours-content" id="coursContent"></div>
          </div>
        </div>
      </div>

      <div dangerouslySetInnerHTML={{ __html: footerHtml() }} />

      <CoursExplorer initialData={cours} />
    </>
  );
}
