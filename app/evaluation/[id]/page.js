import { notFound } from "next/navigation";
import { getAllQuiz } from "@/lib/store";
import { chromeHtml, footerHtml } from "../../_shared/chrome";
import EvaluationDetailClient from "./EvaluationDetailClient";

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

export async function generateMetadata({ params }) {
  const { q } = await findQuiz(params.id);
  if (!q || !q.available) return {};

  const nb = (q.questions || []).length;
  const title = `${q.title} — QCM ${q.module} (${nb} questions)`;
  const description =
    q.description ||
    `QCM d'auto-évaluation — ${q.module} : ${nb} questions corrigées et commentées pour t'entraîner avant les concours de Master au Maroc.`;
  const url = `${SITE_URL}/evaluation/${q.id}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { type: "article", title, description, url },
    twitter: { card: "summary_large_image", title, description },
  };
}

export async function generateStaticParams() {
  try {
    const list = await getAllQuiz();
    return list.filter((q) => q.available).map((q) => ({ id: q.id }));
  } catch {
    return [];
  }
}

export default async function EvaluationDetailPage({ params }) {
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
      <div dangerouslySetInnerHTML={{ __html: chromeHtml({ active: "eval", showSearch: false }) }} />

      <div className="cd-view">
        <nav className="cd-breadcrumb">
          <a href="/">Accueil</a> <span>/</span> <a href="/evaluation">Évaluation</a> <span>/</span> <span>{q.title}</span>
        </nav>

        <div className="cd-head">
          <h1>{q.title}</h1>
          <div className="cd-tags">
            <span className="info-tag">📝 {q.module}</span>
            <span className="info-tag">❓ {nb} questions</span>
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
              <div className="cd-tags">
                {q.chapters.map((ch) => (
                  <span className="info-tag" key={ch}>
                    {ch}
                  </span>
                ))}
              </div>
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
            ← Retour à toutes les évaluations
          </a>
        </div>

        {related.length > 0 && (
          <div className="cd-card cd-related">
            <h2>Autres QCM — {q.module}</h2>
            <div className="cd-related-grid">
              {related.map((r) => (
                <a key={r.id} className="cd-related-item" href={`/evaluation/${r.id}`}>
                  <div className="cd-related-title">{r.title}</div>
                  <div className="cd-related-sub">{r.module}</div>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>

      <div dangerouslySetInnerHTML={{ __html: footerHtml() }} />
    </>
  );
}
