import { getAllQuiz } from "@/lib/store";
import { chromeHtml, footerHtml } from "../_shared/chrome";
import { evalCardHtml } from "../_shared/evalCard";
import { breadcrumbJsonLd, collectionJsonLd } from "../_shared/listingSchema";
import JsonLd from "../_shared/JsonLd";
import EvaluationExplorer from "./EvaluationExplorer";

// Served as prerendered HTML revalidated hourly instead of rendered per
// request. lib/github.js reads the data JSON with `cache: "no-store"` (
// concours.json is 2.59MB, past Next's 2MB fetch-cache entry limit), and a
// no-store fetch in the render path opts the whole route out of static
// generation -- confirmed by building with and without GITHUB_TOKEN, where
// these routes flip between `o` and `f`.
//
// The window is an hour, not minutes, on purpose: ISR only saves work when
// requests arrive faster than the window, and these pages see a few views an
// hour. Freshness does not depend on it either -- admin edits commit to
// GitHub, which triggers a redeploy and rebuilds every page anyway.
export const dynamic = "force-static";
export const revalidate = 3600;

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
      <JsonLd
        data={[
          breadcrumbJsonLd([{ name: "Évaluation", path: "/evaluation" }]),
          collectionJsonLd({
            name: "QCM d'auto-évaluation — Concours Master Maroc",
            description:
              "QCM d'entraînement corrigés par module pour s'auto-évaluer en conditions concours avant les épreuves d'accès aux Masters marocains.",
            path: "/evaluation",
            items: quiz
              .filter((q) => q.available)
              .map((q) => ({ name: q.title, path: `/evaluation/${encodeURIComponent(q.id)}` })),
          }),
        ]}
      />
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
