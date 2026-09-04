import { getAllQuiz } from "@/lib/store";
import { chromeHtml, footerHtml } from "../_shared/chrome";
import { evalCardHtml } from "../_shared/evalCard";
import EvaluationExplorer from "./EvaluationExplorer";

// Server-rendered on first load (mirrors app/concours/page.js and
// app/cours/page.js) so every module already has a real
// <a href="/evaluation/[id]"> link in the raw HTML for crawlers. A card
// click is a plain navigation to that dedicated page, which now hosts the
// actual interactive quiz (see app/evaluation/[id]/EvaluationDetailClient.js)
// — exactly like a concours/cours card navigates to its own page.
export default async function EvaluationPage() {
  const quiz = await getAllQuiz().catch(() => []);

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: chromeHtml({ active: "eval", showSearch: false }) }} />

      <div className="eval-view" id="viewEval">
        <h1 className="eval-title">📝 Évaluation par module</h1>
        <p className="eval-sub">Choisis un module pour t'auto-évaluer en conditions QCM. Ton score s'affiche à la fin.</p>
        <div
          className="grid"
          id="evalModuleGrid"
          dangerouslySetInnerHTML={{ __html: quiz.map(evalCardHtml).join("") }}
        />
      </div>

      <div dangerouslySetInnerHTML={{ __html: footerHtml() }} />

      <EvaluationExplorer />
    </>
  );
}
