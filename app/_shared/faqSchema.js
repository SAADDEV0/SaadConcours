// Google's structured data guidelines require FAQPage markup to mirror
// content that's actually visible on the page — never markup-only, hidden
// Q&A. So blog posts get their FAQ parsed out of a normal "## FAQ" /
// "## Questions fréquentes" markdown section (already rendered as visible
// content by marked()), and concours pages build theirs straight from the
// same fields already shown in the tags/corrigé sections above.

const FAQ_HEADING_RE = /^##\s*(FAQ|Questions fr[ée]quentes)\s*$/im;

// Extracts {question, answer} pairs from a "## FAQ" section of a markdown
// post: each "### <question>" starts a new Q&A, answer is everything until
// the next "###" or the next "##" (end of section).
export function extractFaqFromMarkdown(markdown) {
  if (!markdown) return [];
  const lines = markdown.split("\n");
  const startIdx = lines.findIndex((l) => FAQ_HEADING_RE.test(l.trim()));
  if (startIdx === -1) return [];

  const rest = lines.slice(startIdx + 1);
  const endIdx = rest.findIndex((l) => /^##\s+/.test(l.trim()));
  const section = (endIdx === -1 ? rest : rest.slice(0, endIdx)).join("\n");

  const questionLineRe = /^###\s+(.+)$/;
  const sectionLines = section.split("\n");
  const starts = [];
  sectionLines.forEach((l, i) => {
    const m = l.match(questionLineRe);
    if (m) starts.push({ line: i, question: m[1].trim() });
  });

  return starts
    .map((s, i) => {
      const end = i + 1 < starts.length ? starts[i + 1].line : sectionLines.length;
      const answer = sectionLines.slice(s.line + 1, end).join("\n").trim();
      return { question: s.question, answer };
    })
    .filter((f) => f.answer);
}

// FAQPage's acceptedAnswer.text wants reasonably clean text — strip the
// light markdown (links, bold/italic, line breaks) rather than shipping
// raw "**word**"/"[label](url)" into the schema.
function markdownToPlainText(md) {
  return md
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/[*_`]/g, "")
    .replace(/\n{2,}/g, " ")
    .replace(/\n/g, " ")
    .replace(/\s{2,}/g, " ")
    .trim();
}

export function faqJsonLd(faqs) {
  if (!faqs || !faqs.length) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: markdownToPlainText(f.answer) },
    })),
  };
}
