import { getAllQuiz } from "@/lib/store";
import { chromeHtml, footerHtml } from "../_shared/chrome";
import { evalCardHtml } from "../_shared/evalCard";
import EvaluationExplorer from "./EvaluationExplorer";

// Server-rendered on first load (mirrors app/concours/page.js and
// app/cours/page.js) so every module already has a real
// <a href="/evaluation/[id]"> link in the raw HTML for crawlers.
// EvaluationExplorer then hydrates on top: a plain click still opens the
// inline quiz instead of navigating away, but the underlying link keeps
// working for JS-less visitors, right-click "open in new tab", and search
// engines — and it's still what the /evaluation/[id] landing page's
// "Commencer" button (via ?open=) deep-links back into.
export default async function EvaluationPage() {
  const quiz = await getAllQuiz().catch(() => []);

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: chromeHtml({ active: "eval", showSearch: false }) }} />

      <div className="eval-view" id="viewEval">
        <div id="evalModuleList">
          <h1 className="eval-title">📝 Évaluation par module</h1>
          <p className="eval-sub">Choisis un module pour t'auto-évaluer en conditions QCM. Ton score s'affiche à la fin.</p>
          <div
            className="grid"
            id="evalModuleGrid"
            dangerouslySetInnerHTML={{ __html: quiz.map(evalCardHtml).join("") }}
          />
        </div>

        <div id="evalQuizWrap" style={{ display: "none" }}>
          <div className="eval-toolbar">
            <button className="reset-btn" id="evalBack">← Modules</button>
            <div className="eval-chapter-chips" id="evalChapterChips"></div>
            <div className="eval-progress" id="evalProgress"></div>
          </div>
          <h2 className="eval-title" id="evalQuizTitle"></h2>
          <div id="evalScoreBanner"></div>
          <div id="evalQuestions"></div>
          <div className="eval-submit-bar">
            <button className="dl-btn" id="evalSubmitBtn">✅ Valider mes réponses</button>
            <button className="reset-btn" id="evalRetryBtn" style={{ display: "none" }}>🔄 Refaire l'évaluation à zéro</button>
            <button className="reset-btn" id="evalPdfBtn" style={{ display: "none" }}>⬇ Télécharger en PDF (avec réponses)</button>
          </div>
        </div>
      </div>

      <div dangerouslySetInnerHTML={{ __html: footerHtml() }} />

      <EvaluationExplorer initialData={quiz} />
    </>
  );
}
