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
// No revalidation window at all: freshness comes from deploys, not ISR.
// Every admin edit commits to GitHub, which triggers a redeploy that rebuilds
// every page -- so an hourly revalidate was re-rendering pages that were
// already current and billing Fluid CPU for it.
export const dynamic = "force-static";
export const revalidate = false;

// Server-rendered on first load (mirrors app/concours/page.js and
// app/cours/page.js) so every module already has a real
// <a href="/evaluation/[id]"> link in the raw HTML for crawlers. A card
// click is a plain navigation to that dedicated page, which now hosts the
// actual interactive quiz (see app/evaluation/[id]/EvaluationDetailClient.js)
// — exactly like a concours/cours card navigates to its own page.
export default async function EvaluationPage() {
  const quiz = await getAllQuiz().catch(() => []);
  const disponibles = quiz.filter((q) => q.available);
  const nbQuestions = disponibles.reduce((n, q) => n + (q.questions || []).length, 0);

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

      <div className="bac-space site-space">
        <div className="bac-wrap">
          <section className="bac-hero" style={{ "--hero-icon": '"📝"' }}>
            <div className="bac-eyebrow">Entraînement · Concours blancs</div>
            <h1>Évaluation par module</h1>
            <p>
              Des concours blancs sous forme de QCM, module par module, pour t'auto-évaluer en conditions de concours
              d'accès au Master. Ton score et la correction détaillée s'affichent à la fin de chaque série.
            </p>
            <div className="bac-hero-stats">
              <span className="bac-stat">
                <strong>{disponibles.length}</strong> modules
              </span>
              <span className="bac-stat">
                <strong>{nbQuestions}</strong> questions
              </span>
              <span className="bac-stat">
                <strong>100 %</strong> corrigé
              </span>
            </div>
          </section>

          <section className="bac-group">
            <h2 className="bac-section-title">Concours blancs par module</h2>
            <div className="sp-card-grid" id="evalModuleGrid" dangerouslySetInnerHTML={{ __html: quiz.map(evalCardHtml).join("") }} />
          </section>

          <section className="bac-group">
            <h2 className="bac-section-title">S'entraîner chapitre par chapitre</h2>
            <div className="bac-mat-grid">
              <a className="bac-mat-card" href="/cours" style={{ "--mat-h": 220 }}>
                <span className="bac-mat-icon">🎓</span>
                <span className="bac-mat-body">
                  <span className="bac-mat-name">QCM des cours de Licence FSJES</span>
                  <span className="bac-mat-desc">Un QCM corrigé à la fin de chaque chapitre, du S1 au S6 : comptabilité, finance, économie, gestion, droit.</span>
                </span>
                <span className="bac-mat-arrow" aria-hidden="true">→</span>
              </a>
              <a className="bac-mat-card" href="/bac/2bac" style={{ "--mat-h": 152 }}>
                <span className="bac-mat-icon">📘</span>
                <span className="bac-mat-body">
                  <span className="bac-mat-name">QCM du Bac Sciences Économiques & Gestion</span>
                  <span className="bac-mat-desc">Chaque chapitre du 2ᵉ Bac a son QCM corrigé, pour vérifier que la leçon est acquise.</span>
                </span>
                <span className="bac-mat-arrow" aria-hidden="true">→</span>
              </a>
            </div>
          </section>
        </div>
      </div>

      <div dangerouslySetInnerHTML={{ __html: footerHtml() }} />

      <EvaluationExplorer />
    </>
  );
}
