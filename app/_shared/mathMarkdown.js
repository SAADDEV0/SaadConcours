// Shields LaTeX math ($...$ / $$...$$) from Markdown parsing.
//
// marked() treats underscores/asterisks as emphasis markers and collapses
// "\\" (LaTeX's row separator in matrices/aligned) down to a single "\" via
// its backslash-escaping — so math like `$x_1 * x_2$` or a `pmatrix` comes
// out of marked.parse() with stray <em> tags or a broken row separator,
// and KaTeX then fails to parse it. Pulling math spans out before
// marked.parse() and splicing the untouched source back in afterwards
// keeps LaTeX byte-for-byte intact all the way to the client-side KaTeX
// auto-render pass.
//
// Placeholders use Unicode Private Use Area code points, which Markdown
// has no syntax for and which pass through marked.parse() as plain text.

const OPEN = "";
const CLOSE = "";
const PLACEHOLDER_RE = new RegExp(`${OPEN}(\\d+)${CLOSE}`, "g");

function escapeHtml(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

export function protectMath(md) {
  if (!md) return { text: md, restore: (html) => html };

  const store = [];
  const stash = (raw) => `${OPEN}${store.push(raw) - 1}${CLOSE}`;

  let text = md.replace(/\$\$[\s\S]+?\$\$/g, (m) => stash(m));
  // Inline math never spans a blank line (that's a new Markdown paragraph),
  // so bail out of a match that crosses one instead of eating the rest of
  // the document looking for a closing "$".
  text = text.replace(/\$(?:\\\$|[^$])+?\$/g, (m) => (m.includes("\n\n") ? m : stash(m)));

  const restore = (html) => html.replace(PLACEHOLDER_RE, (_, i) => escapeHtml(store[Number(i)]));

  return { text, restore };
}

export function renderMarkdownWithMath(markedInstance, md) {
  const { text, restore } = protectMath(md);
  return restore(markedInstance.parse(text));
}

const KATEX_DELIMITERS = [
  { left: "$$", right: "$$", display: true },
  { left: "$", right: "$", display: false },
];

// KaTeX's auto-render script loads via a Next <Script strategy="afterInteractive">
// in the root layout, which runs on its own schedule relative to each page's
// useEffect — a plain `if (window.renderMathInElement) {...}` in the effect
// races it and silently renders nothing on a fair share of first loads
// (most visits here land straight on an SEO page from search, so this isn't
// a rare edge case). Poll briefly instead of checking once.
//
// Returns a promise so callers that need the math to actually be on the page
// before proceeding (the PDF export snapshots this element) can await it —
// existing fire-and-forget callers are unaffected since they just don't await.
export function renderMathWhenReady(el) {
  if (!el) return Promise.resolve();
  return new Promise((resolve) => {
    let attemptsLeft = 50; // ~5s at 100ms, generous for a CDN script on a slow connection
    (function attempt() {
      if (window.renderMathInElement) {
        window.renderMathInElement(el, { delimiters: KATEX_DELIMITERS, throwOnError: false });
        resolve();
        return;
      }
      if (attemptsLeft-- <= 0) {
        resolve();
        return;
      }
      setTimeout(attempt, 100);
    })();
  });
}
