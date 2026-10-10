import { notFound } from "next/navigation";
import { marked } from "marked";
import { getAllBlog, getSettings } from "@/lib/store";
import AdSlot from "../../_shared/AdSlot";
import { chromeHtml, footerHtml, partnerZoneHtml } from "../../_shared/chrome";
import { renderMarkdownWithMath } from "../../_shared/mathMarkdown";
import { clampDescription } from "../../_shared/seoText";
import { categoryInfo } from "../../../lib/blogTaxonomy";
import { findDuplicateBlogIds } from "../../../lib/blogDuplicates";
import { readingTimeMinutes } from "../../_shared/blogCard";
import { formatDateFr } from "../../_shared/format";
import BlogDetailClient, { ShareButton } from "./BlogDetailClient";
import MathScripts from "../../_shared/MathScripts";

const SITE_URL = "https://www.saadconcours.space";

async function findPost(id) {
  const list = await getAllBlog();
  return { p: list.find((x) => x.id === id) || null, list };
}

// Same category first (most relevant to keep reading), then the rest,
// most recent first — better internal linking than an arbitrary slice.
function getRelatedPosts(list, current, limit = 4) {
  const others = list.filter((x) => x.id !== current.id && x.available);
  const sameCategory = others.filter((x) => x.category === current.category);
  const rest = others.filter((x) => x.category !== current.category);
  return [...sameCategory, ...rest].slice(0, limit);
}

export async function generateMetadata(props) {
  const params = await props.params;
  const { p, list } = await findPost(params.id);
  if (!p || !p.available) return {};

  const url = `${SITE_URL}/blog/${p.id}`;
  // Templated near-copies of an earlier post stay readable but out of the
  // index — see lib/blogDuplicates.js.
  const isDuplicate = findDuplicateBlogIds(list).has(p.id);

  // seoTitle : forme courte (≤ 65 caractères) pour les résultats Google quand
  // le titre de l'article est plus long ; le H1 garde le titre complet.
  // L'extrait (≈ 250 caractères, pensé pour la carte) est borné à 155.
  const title = p.seoTitle || p.title;
  const description = clampDescription(p.excerpt);

  return {
    title,
    description,
    alternates: { canonical: url },
    ...(isDuplicate ? { robots: { index: false, follow: true } } : {}),
    openGraph: {
      type: "article",
      title,
      description,
      url,
      publishedTime: p.publishedAt,
      ...(p.updatedAt ? { modifiedTime: p.updatedAt } : {}),
    },
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
    const list = await getAllBlog();
    return list.filter((p) => p.available).map((p) => ({ id: p.id }));
  } catch {
    return [];
  }
}

export default async function BlogDetailPage(props) {
  const params = await props.params;
  const { p, list } = await findPost(params.id);
  if (!p || !p.available) notFound();

  const contentHtml = renderMarkdownWithMath(marked, p.content || "");
  const settings = await getSettings().catch(() => null);
  const url = `${SITE_URL}/blog/${p.id}`;
  const related = getRelatedPosts(list, p);
  const cat = categoryInfo(p.category);
  const minutes = readingTimeMinutes(p.content);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: p.title,
    description: p.excerpt,
    url,
    datePublished: p.publishedAt,
    dateModified: p.updatedAt || p.publishedAt,
    // L'éditeur nommé sur /a-propos : un auteur identifié pèse plus qu'une
    // organisation pour Google (E-E-A-T).
    author: { "@type": "Person", name: "Saad", url: `${SITE_URL}/a-propos` },
    publisher: { "@type": "Organization", name: "SaadConcours", url: SITE_URL },
    mainEntityOfPage: url,
    ...(cat ? { articleSection: cat.label } : {}),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
      { "@type": "ListItem", position: 3, name: p.title, item: url },
    ],
  };

  return (
    <>
      <MathScripts />
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
      <div dangerouslySetInnerHTML={{ __html: chromeHtml({ active: "blog", rails: true }) }} />

      <div className="bac-space">
      <div className="bac-wrap sp-detail">
        <nav className="cd-breadcrumb">
          <a href="/">Accueil</a> <span>/</span> <a href="/blog">Blog</a> <span>/</span> <span>{p.title}</span>
        </nav>

        <div className="bac-chap-hero sp-detail-hero">
          <div className="bac-eyebrow">
            {cat ? (
              <a href={`/blog?category=${cat.code}`}>
                {cat.label}
              </a>
            ) : (
              "Blog"
            )}
          </div>
          <h1>{p.title}</h1>
          <div className="bac-hero-stats">
            <span className="bac-stat">{formatDateFr(p.publishedAt)}</span>
            {p.updatedAt && p.updatedAt !== p.publishedAt && (
              <span className="bac-stat">Mis à jour le {formatDateFr(p.updatedAt)}</span>
            )}
            <span className="bac-stat">{minutes} min de lecture</span>
          </div>
          <div className="sp-hero-actions cd-head-actions">
            <ShareButton post={p} />
          </div>
        </div>

        {/* L'article se lit sur la page, comme un texte, pas dans une boîte. */}
        <article className="sp-article">
          <div className="enonce-content" dangerouslySetInnerHTML={{ __html: contentHtml }} />
        </article>

        <AdSlot settings={settings} placement="article_bottom" />

        {/* Bannière partenaire « Dans le contenu » (vide sans annonceur). */}
        <div dangerouslySetInnerHTML={{ __html: partnerZoneHtml("inline") }} />

        <BlogDetailClient post={p} />

        {related.length > 0 && (
          <section className="bac-group">
            <h2 className="bac-section-title">À lire aussi</h2>
            <div className="sp-rows">
              {related.map((r) => (
                <a key={r.id} className="sp-row" href={`/blog/${r.id}`}>
                  <span className="sp-row-main">
                    <span className="sp-row-title">{r.title}</span>
                    <span className="sp-row-meta">
                      <span>{formatDateFr(r.publishedAt)}</span>
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
