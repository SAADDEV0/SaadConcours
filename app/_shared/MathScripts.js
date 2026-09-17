import Script from "next/script";

// KaTeX only, not the full jspdf/mathjax/marked/svg2pdf bundle used for PDF
// export — those stay in the root layout for now (needed on-demand across
// too many admin surfaces to safely scope here). Previously all of this
// loaded on every single route via app/layout.js, including pages that
// never render a formula (home, every listing page, /news, /faq...) — moved
// to just the three content types that actually call renderMarkdownWithMath
// (see app/_shared/mathMarkdown.js) plus the admin markdown editor that
// authors them. renderMathWhenReady() already polls for
// window.renderMathInElement instead of assuming it's loaded, so moving
// these closer to their consumers is safe regardless of load order.
export default function MathScripts() {
  return (
    <>
      <Script src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js" strategy="afterInteractive" />
      <Script src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/contrib/auto-render.min.js" strategy="afterInteractive" />
    </>
  );
}
