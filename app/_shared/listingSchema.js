// Structured data for the listing pages (/concours, /cours, /evaluation,
// /news). The detail pages already ship LearningResource/Quiz/BlogPosting +
// BreadcrumbList each, and /blog had its own Blog schema — but the four
// listing pages, which are the ones actually targeting the head keywords
// ("sujets concours master maroc", "QCM concours master"...), had no JSON-LD
// at all. This gives Google the collection's identity plus real item URLs to
// follow instead of leaving it to infer both from a wall of <a> tags.

const SITE_URL = "https://www.saadconcours.space";

export function breadcrumbJsonLd(trail) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: SITE_URL },
      ...trail.map((t, i) => ({
        "@type": "ListItem",
        position: i + 2,
        name: t.name,
        item: `${SITE_URL}${t.path}`,
      })),
    ],
  };
}

// itemListElement is capped (default 40) while numberOfItems stays the true
// total: /concours alone holds 234 entries, and serialising every one of them
// would add tens of KB of JSON-LD to a page that already server-renders 234
// cards — a straight loss on a listing page's LCP for no extra ranking value,
// since the same URLs are already crawlable as ordinary links in the grid.
// `items` is optional: /news describes itself as a collection but ships no
// ItemList, because its detail pages are deliberately noindex (see
// app/news/[id]/page.js) and there is nothing to gain from naming URLs in
// structured data that we've asked Google not to index.
export function collectionJsonLd({ name, description, path, items, max = 40 }) {
  const url = `${SITE_URL}${path}`;
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name,
    description,
    url,
    isPartOf: { "@type": "WebSite", name: "SaadConcours", url: SITE_URL },
    ...(items && items.length
      ? {
          mainEntity: {
            "@type": "ItemList",
            numberOfItems: items.length,
            itemListElement: items.slice(0, max).map((item, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: item.name,
              url: `${SITE_URL}${item.path}`,
            })),
          },
        }
      : {}),
  };
}
