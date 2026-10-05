import { notFound } from "next/navigation";
import { getAllQuiz } from "@/lib/store";
import { chromeHtml, footerHtml } from "../../_shared/chrome";
import EvaluationDetailClient from "./EvaluationDetailClient";
import { fitTitle, clampDescription } from "../../_shared/seoText";

const SITE_URL = "https://www.saadconcours.space";

async function findQuiz(id) {
  const list = await getAllQuiz();
  return { q: list.find((x) => x.id === id) || null, list };
}

// Same module first, for internal linking + more crawl paths into quizzes
// with no other inbound links — mirrors getRelatedCours / getRelatedConcours.
function getRelatedQuiz(list, current, limit = 4) {
  return list.filter((x) => x.id !== current.id && x.module === current.module && x.available).slice(0, limit);
}

export async function generateMetadata(props) {
  const params = await props.params;
  const { q } = await findQuiz(params.id);
  if (!q || !q.available) return {};

  const nb = (q.questions || []).length;

  // q.title (« Concours Blanc — Audit (100 Questions) ») répétait déjà le
  // module et le nombre de questions : 82 à 102 caractères.
  const title = fitTitle([
    `QCM ${q.module} : ${nb} questions corrigées (concours blanc)`,
    `QCM ${q.module} : ${nb} questions corrigées`,
    `QCM ${q.module} (${nb} questions)`,
  ]);
  const description = clampDescription(
    q.description ||
      `QCM d'auto-évaluation — ${q.module} : ${nb} questions corrigées et commentées pour t'entraîner avant les concours de Master au Maroc.`
  );
  const url = `${SITE_URL}/evaluation/${q.id}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { type: "article", title, description, url },
    twitter: { card: "summary_large_image", title, description },
  };
}

// Prerendered at build time — see app/concours/[id]/page.js for why
// generateStaticParams alone leaves the route dynamic (the no-store read in
// lib/github.js) and why revalidate is false (deploys rebuild everything).
export const dynamic = "force-static";
export const revalidate = false;

export async function generateStaticParams() {
  try {
    const list = await getAllQuiz();
    return list.filter((q) => q.available).map((q) => ({ id: q.id }));
  } catch {
    return [];
  }
}

export default async function EvaluationDetailPage(props) {
  const params = await props.params;
  const { q, list } = await findQuiz(params.id);
  if (!q || !q.available) notFound();

  const nb = (q.questions || []).length;
  const url = `${SITE_URL}/evaluation/${q.id}`;
  const related = getRelatedQuiz(list, q);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Quiz",
    name: q.title,
    description: q.description || `QCM d'auto-évaluation — ${q.module}`,
    url,
    educationalLevel: "Master",
    about: q.module,
    provider: { "@type": "Organization", name: "SaadConcours", url: SITE_URL },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Évaluation", item: `${SITE_URL}/evaluation` },
      { "@type": "ListItem", position: 3, name: q.title, item: url },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <div dangerouslySetInnerHTML={{ __html: chromeHtml({ active: "eval" }) }} />

      <div className="bac-space">
      <div className="bac-wrap sp-detail">
        <nav className="cd-breadcrumb">
          <a href="/">Accueil</a> <span>/</span> <a href="/evaluation">QCM</a> <span>/</span> <span>{q.title}</span>
        </nav>

        <div className="bac-chap-hero sp-detail-hero">
          <div className="bac-eyebrow">QCM d'entraînement · Concours blanc</div>
          <h1>{q.title}</h1>
          <div className="bac-hero-stats">
            <span className="bac-stat">{q.module}</span>
            <span className="bac-stat">
              <strong>{nb}</strong> questions
            </span>
            {q.chapters && q.chapters.length > 0 && (
              <span className="bac-stat">
                <strong>{q.chapters.length}</strong> chapitres
              </span>
            )}
          </div>
        </div>

        <div className="cd-card">
          <h2>À propos de ce QCM</h2>
          <p className="enonce-content">
            {q.description ||
              `QCM d'auto-évaluation en conditions concours pour le module ${q.module}, avec correction détaillée à la fin.`}
          </p>
          {q.chapters && q.chapters.length > 0 && (
            <>
              <h2>Chapitres couverts</h2>
              <ol className="eval-chapters">
                {q.chapters.map((ch) => (
                  <li key={ch}>{ch}</li>
                ))}
              </ol>
            </>
          )}
        </div>

        <EvaluationDetailClient quiz={q} />

        <div className="cd-actions">
          <a
            className="reset-btn"
            style={{ width: "auto", textDecoration: "none", display: "inline-flex", alignItems: "center" }}
            href="/evaluation"
          >
            ← Tous les QCM
          </a>
        </div>

        {related.length > 0 && (
          <section className="bac-group">
            <h2 className="bac-section-title">Autres QCM — {q.module}</h2>
            <div className="sp-rows">
              {related.map((r) => (
                <a key={r.id} className="sp-row" href={`/evaluation/${r.id}`}>
                  <span className="sp-row-main">
                    <span className="sp-row-title">{r.title}</span>
                    <span className="sp-row-meta">
                      <span>{r.module}</span>
                    </span>
                  </span>
                </a>
              ))}
            </div>
          </section>
        )}
      </div>
      </div>

      <div dangerouslySetInnerHTML={{ __html: footerHtml() }} />
    </>
  );
}
