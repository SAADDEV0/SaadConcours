import { notFound } from "next/navigation";
import { marked } from "marked";
import { getAllCours } from "@/lib/store";
import { chromeHtml, footerHtml } from "../../_shared/chrome";
import { renderMarkdownWithMath } from "../../_shared/mathMarkdown";
import CoursDetailClient from "./CoursDetailClient";

const SITE_URL = "https://www.saadconcours.space";

async function findCours(id) {
  const list = await getAllCours();
  return { c: list.find((x) => x.id === id) || null, list };
}

// Same module first (most relevant to keep revising), for internal linking
// and to give crawlers more paths into fiches that have no other inbound
// links — mirrors getRelatedConcours in app/concours/[id]/page.js.
function getRelatedCours(list, current, limit = 4) {
  return list.filter((x) => x.id !== current.id && x.module === current.module && x.available).slice(0, limit);
}

export async function generateMetadata({ params }) {
  const { c } = await findCours(params.id);
  if (!c || !c.available) return {};

  const title = `${c.title} — Fiche de cours ${c.module}`;
  const description =
    c.description ||
    `Fiche de cours synthétique — ${c.module} : définitions, formules et points clés à retenir pour réviser les concours de Master au Maroc.`;
  const url = `${SITE_URL}/cours/${c.id}`;

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
    const list = await getAllCours();
    return list.filter((c) => c.available).map((c) => ({ id: c.id }));
  } catch {
    return [];
  }
}

export default async function CoursDetailPage({ params }) {
  const { c, list } = await findCours(params.id);
  if (!c || !c.available) notFound();

  const contentHtml = renderMarkdownWithMath(marked, c.content || "*Contenu non disponible.*");
  const url = `${SITE_URL}/cours/${c.id}`;
  const related = getRelatedCours(list, c);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    name: c.title,
    description: c.description || `Fiche de cours — ${c.module}`,
    url,
    educationalLevel: "Master",
    about: c.module,
    provider: { "@type": "Organization", name: "SaadConcours", url: SITE_URL },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Cours", item: `${SITE_URL}/cours` },
      { "@type": "ListItem", position: 3, name: c.title, item: url },
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
      <div dangerouslySetInnerHTML={{ __html: chromeHtml({ active: "cours", showSearch: false }) }} />

      <div className="cd-view" style={{ maxWidth: 1100 }}>
        <nav className="cd-breadcrumb">
          <a href="/">Accueil</a> <span>/</span> <a href="/cours">Cours</a> <span>/</span> <span>{c.title}</span>
        </nav>

        <div className="cd-head">
          <h1>{c.title}</h1>
          <div className="cd-tags">
            <span className="info-tag">📖 {c.module}</span>
          </div>
        </div>

        <div className="eval-toolbar" style={{ justifyContent: "flex-end" }}>
          <div className="cours-theme-picker" id="coursThemePicker">
            <button className="cours-theme-btn" id="coursThemeBtn" type="button">🎨 Thème de lecture</button>
            <div className="cours-theme-panel" id="coursThemePanel" style={{ display: "none" }}></div>
          </div>
          <button className="dl-btn" id="coursPdfBtn">⬇ Télécharger en PDF</button>
        </div>
        <div className="cours-reader" id="coursReader">
          <aside className="cours-toc" id="coursToc"></aside>
          <div className="cours-content" id="coursContent" dangerouslySetInnerHTML={{ __html: contentHtml }} />
        </div>

        <CoursDetailClient cours={c} />

        {related.length > 0 && (
          <div className="cd-card cd-related">
            <h2>Autres fiches — {c.module}</h2>
            <div className="cd-related-grid">
              {related.map((r) => (
                <a key={r.id} className="cd-related-item" href={`/cours/${r.id}`}>
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
