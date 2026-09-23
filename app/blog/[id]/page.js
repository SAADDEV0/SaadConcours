import { notFound } from "next/navigation";
import { marked } from "marked";
import { getAllBlog } from "@/lib/store";
import { chromeHtml, footerHtml } from "../../_shared/chrome";
import { renderMarkdownWithMath } from "../../_shared/mathMarkdown";
import { extractFaqFromMarkdown, faqJsonLd } from "../../_shared/faqSchema";
import { categoryInfo } from "../../../lib/blogTaxonomy";
import { findDuplicateBlogIds } from "../../../lib/blogDuplicates";
import { readingTimeMinutes } from "../../_shared/blogCard";
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

  return {
    title: p.title,
    description: p.excerpt,
    alternates: { canonical: url },
    ...(isDuplicate ? { robots: { index: false, follow: true } } : {}),
    openGraph: { type: "article", title: p.title, description: p.excerpt, url, publishedTime: p.publishedAt },
    twitter: { card: "summary_large_image", title: p.title, description: p.excerpt },
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
  const url = `${SITE_URL}/blog/${p.id}`;
  const related = getRelatedPosts(list, p);
  const faqLd = faqJsonLd(extractFaqFromMarkdown(p.content));
  const cat = categoryInfo(p.category);
  const minutes = readingTimeMinutes(p.content);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: p.title,
    description: p.excerpt,
    url,
    datePublished: p.publishedAt,
    author: { "@type": "Organization", name: "SaadConcours", url: SITE_URL },
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
      {faqLd && (
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
        />
      )}
      <div dangerouslySetInnerHTML={{ __html: chromeHtml({ active: "blog", showSearch: false, rails: true }) }} />

      <div className="bac-space site-space" style={{ "--mat-h": 330 }}>
      <div className="bac-wrap sp-detail">
        <nav className="cd-breadcrumb">
          <a href="/">Accueil</a> <span>/</span> <a href="/blog">Blog</a> <span>/</span> <span>{p.title}</span>
        </nav>

        <div className="bac-chap-hero sp-detail-hero">
          <div className="bac-eyebrow">
            {cat ? (
              <a href={`/blog?category=${cat.code}`}>
                {cat.emoji} {cat.label}
              </a>
            ) : (
              "Blog"
            )}
          </div>
          <h1>{p.title}</h1>
          <div className="bac-hero-stats">
            <span className="bac-stat">📅 {p.publishedAt}</span>
            <span className="bac-stat">⏱️ {minutes} min de lecture</span>
          </div>
          <div className="sp-hero-actions cd-head-actions">
            <ShareButton post={p} />
          </div>
        </div>

        <div className="cd-card">
          <div className="enonce-content" dangerouslySetInnerHTML={{ __html: contentHtml }} />
        </div>

        <BlogDetailClient post={p} />

        {related.length > 0 && (
          <section className="bac-group">
            <h2 className="bac-section-title">À lire aussi</h2>
            <div className="sp-related">
              {related.map((r) => (
                <a key={r.id} className="bac-mat-card" href={`/blog/${r.id}`}>
                  <span className="bac-mat-icon">📰</span>
                  <span className="bac-mat-body">
                    <span className="bac-mat-name">{r.title}</span>
                    <span className="bac-mat-meta">{r.publishedAt}</span>
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
