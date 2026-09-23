// Near-duplicate detection for blog posts — shared by the detail page's
// robots meta (app/blog/[id]/page.js) and the sitemap (app/sitemap.js).
//
// Why: the "FSJES <ville> : concours Master, filières et conseils" and
// "Les matières à préparer pour le master X" series were written from a
// template, and some pairs share over half of their wording. Google treats
// that as thin/templated content, which is what the AdSense "low value
// content" rejection points at. Rather than a hand-kept list, overlap is
// measured on every build, so a post that gets rewritten comes back into the
// index automatically, and a new templated post is caught without anyone
// having to remember to flag it.
//
// Greedy, oldest first: a post is kept indexable unless it overlaps past the
// threshold with a post that was already kept. So each cluster keeps its
// original article indexed and only the later copies drop out.

const SHINGLE = 5;
export const DUPLICATE_THRESHOLD = 0.3;

function shingles(text) {
  const words = (text || "")
    .toLowerCase()
    .replace(/[^a-z0-9àâäçéèêëîïôöûùüÿœæ]+/g, " ")
    .split(" ")
    .filter(Boolean);
  const set = new Set();
  for (let i = 0; i + SHINGLE <= words.length; i++) set.add(words.slice(i, i + SHINGLE).join(" "));
  return set;
}

// Share of the smaller post's shingles found in the other one — "how much of
// this post is also that post", not Jaccard, so a short post that is fully
// contained in a long one still scores high.
function overlap(a, b) {
  const [small, big] = a.size <= b.size ? [a, b] : [b, a];
  if (!small.size) return 0;
  let n = 0;
  for (const g of small) if (big.has(g)) n++;
  return n / small.size;
}

// Returns a Set of post ids that should be noindex'd.
export function findDuplicateBlogIds(posts) {
  const ordered = posts
    .filter((p) => p.available)
    .slice()
    .sort((a, b) => (a.publishedAt || "").localeCompare(b.publishedAt || "") || a.id.localeCompare(b.id));

  const kept = [];
  const duplicates = new Set();
  for (const p of ordered) {
    const s = shingles(p.content);
    if (kept.some((k) => overlap(s, k) > DUPLICATE_THRESHOLD)) duplicates.add(p.id);
    else kept.push(s);
  }
  return duplicates;
}
