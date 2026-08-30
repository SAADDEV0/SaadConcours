import { notFound } from "next/navigation";
import { getAllNews } from "@/lib/store";
import { chromeHtml, footerHtml } from "../../_shared/chrome";
import NewsDetailClient from "./NewsDetailClient";

const SITE_URL = "https://www.saadconcours.space";

async function findNews(id) {
  const list = await getAllNews();
  return { n: list.find((x) => x.id === id) || null, list };
}

function daysUntil(dateStr) {
  if (!dateStr) return null;
  const diffMs = new Date(dateStr + "T00:00:00") - new Date(new Date().toDateString());
  return Math.round(diffMs / 86400000);
}

// Same ville first (what a candidate stuck on this page is most likely to
// also consider), then same établissement — same internal-linking logic as
// getRelatedConcours / getRelatedCours.
function getRelatedNews(list, current, limit = 4) {
  const others = list.filter((x) => x.id !== current.id && !x.cloture);
  const sameVille = current.ville ? others.filter((x) => x.ville === current.ville) : [];
  const sameEtab = current.etablissement ? others.filter((x) => x.etablissement === current.etablissement) : [];
  const seen = new Set();
  const related = [];
  for (const x of [...sameVille, ...sameEtab]) {
    if (seen.has(x.id)) continue;
    seen.add(x.id);
    related.push(x);
    if (related.length >= limit) break;
  }
  return related;
}

export async function generateMetadata({ params }) {
  const { n } = await findNews(params.id);
  if (!n) return {};

  const loc = [n.etablissement, n.ville].filter(Boolean).join(" — ");
  const title = `${n.titre}${n.cloture ? " (clôturé)" : n.date_limite ? ` — inscription jusqu'au ${n.date_limite}` : ""}`;
  const description = `${n.titre}${loc ? `, ${loc}` : ""}${n.filiere ? `, filière ${n.filiere}` : ""}.${
    n.cloture
      ? " Ce concours est désormais clôturé."
      : n.date_limite
      ? ` Date limite d'inscription : ${n.date_limite}.`
      : ""
  } Infos et lien d'inscription sur SaadConcours.`;
  const url = `${SITE_URL}/news/${n.id}`;

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
    const list = await getAllNews();
    return list.map((n) => ({ id: n.id }));
  } catch {
    return [];
  }
}

export default async function NewsDetailPage({ params }) {
  const { n, list } = await findNews(params.id);
  if (!n) notFound();

  const url = `${SITE_URL}/news/${n.id}`;
  const related = getRelatedNews(list, n);
  const d = daysUntil(n.date_limite);
  const loc = [n.etablissement, n.ville].filter(Boolean).join(" — ");

  // Real unique copy per page (not just the card fields already on /news) —
  // both so the page isn't thin-content, and because FAQPage is a genuine
  // rich-result candidate here.
  const faq = [
    {
      q: `Quelle est la date limite d'inscription pour ${n.titre} ?`,
      a: n.cloture
        ? "Les inscriptions pour ce concours sont clôturées."
        : n.date_limite
        ? `La date limite d'inscription est le ${n.date_limite}${d !== null && d >= 0 ? ` (soit dans ${d} jour${d > 1 ? "s" : ""})` : ""}.`
        : "La date limite n'est pas précisée sur la source officielle — vérifie directement sur le lien d'inscription.",
    },
    {
      q: `Comment s'inscrire à ${n.titre} ?`,
      a: n.lien_inscription
        ? `L'inscription se fait en ligne via le lien officiel de ${n.etablissement || "l'établissement"}.`
        : "Consulte la source officielle pour la procédure d'inscription.",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOccupationalProgram",
    name: n.titre,
    description: `${n.titre}${loc ? `, ${loc}` : ""}`,
    url,
    ...(n.ville ? { areaServed: { "@type": "City", name: n.ville } } : {}),
    provider: n.etablissement
      ? { "@type": "CollegeOrUniversity", name: n.etablissement }
      : { "@type": "Organization", name: "SaadConcours", url: SITE_URL },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Concours ouverts", item: `${SITE_URL}/news` },
      { "@type": "ListItem", position: 3, name: n.titre, item: url },
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <div dangerouslySetInnerHTML={{ __html: chromeHtml({ active: "news", showSearch: false }) }} />

      <div className="cd-view">
        <nav className="cd-breadcrumb">
          <a href="/">Accueil</a> <span>/</span> <a href="/news">Concours ouverts</a> <span>/</span> <span>{n.titre}</span>
        </nav>

        <div className="cd-head">
          <h1>{n.titre}</h1>
          <div className="cd-tags">
            {n.etablissement && <span className="info-tag">🎓 {n.etablissement}</span>}
            {n.ville && <span className="info-tag">📍 {n.ville}</span>}
            {n.filiere && <span className="info-tag">📚 {n.filiere}</span>}
            {n.cloture ? (
              <span className="info-tag">🔒 Clôturé</span>
            ) : n.date_limite ? (
              <span className="info-tag">📅 Date limite : {n.date_limite}{d !== null && d >= 0 ? ` (J-${d})` : ""}</span>
            ) : (
              <span className="info-tag">📅 Date limite non précisée</span>
            )}
          </div>
        </div>

        <div className="cd-card">
          <h2>Questions fréquentes</h2>
          {faq.map((f) => (
            <div key={f.q} style={{ marginBottom: 14 }}>
              <div style={{ fontWeight: 600, marginBottom: 4 }}>{f.q}</div>
              <div className="enonce-content">{f.a}</div>
            </div>
          ))}
        </div>

        <NewsDetailClient news={n} />

        {related.length > 0 && (
          <div className="cd-card cd-related">
            <h2>Autres concours ouverts {n.ville ? `à ${n.ville}` : ""}</h2>
            <div className="cd-related-grid">
              {related.map((r) => (
                <a key={r.id} className="cd-related-item" href={`/news/${r.id}`}>
                  <div className="cd-related-title">{r.titre}</div>
                  <div className="cd-related-sub">{[r.etablissement, r.ville].filter(Boolean).join(" — ")}</div>
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
