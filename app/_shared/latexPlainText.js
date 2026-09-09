// No "use client" here: this is a plain, environment-agnostic utility module
// (no React, no browser APIs) imported from both client-only PDF builders
// (coursPdf.js, concoursPdf.js) and mathMarkdown.js, which in turn is used by
// the server-rendered cours/[id]/page.js — a "use client" directive would
// turn these exports into client-boundary references there, breaking direct
// calls to them from server code.
//
// LaTeX ($...$ / $$...$$) handling shared by every PDF/markdown pipeline that
// has to deal with formulas as *text* rather than real typesetting:
// latexToPlainText() is the "readable plain text" fallback (fractions as
// a/b, spelled-out Greek, no real fraction bars/radicals) used by coursPdf.js
// for its plain-text fallback and by concoursPdf.js / EvaluationDetailClient.js,
// which never got a vector-math renderer and would otherwise print raw
// backslash commands ("\dfrac{1}{2}") straight into the PDF.
//
// wrapAccentedMathWords() fixes a different, earlier problem: content authors
// write French words directly inside a bare subscript/superscript group
// (`V_n^{début}` instead of `V_n^{\text{début}}`). LaTeX math mode has no
// accented-glyph support, so both KaTeX (on-page) and MathJax (PDF vector
// math) silently render every letter of "début" as its own italic variable,
// spaced apart — which is exactly the "mal écrit" look this fixes. Applied
// once, on the raw source, before it ever reaches KaTeX/MathJax.

// ---- LaTeX -> readable plain text -----------------------------------
// Not a typesetter: no real fraction bars or radicals. But it keeps the
// text selectable/copyable/searchable, which matters more for a fiche
// students copy formulas out of than pixel-perfect math layout.

function extractBraceArg(str, i) {
  let depth = 0;
  for (let j = i; j < str.length; j++) {
    if (str[j] === "{") depth++;
    else if (str[j] === "}") {
      depth--;
      if (depth === 0) return [str.slice(i + 1, j), j + 1];
    }
  }
  return [str.slice(i + 1), str.length];
}

function replaceCommand(str, cmd, argCount, build) {
  const needle = "\\" + cmd;
  let out = "";
  let i = 0;
  while (i < str.length) {
    const nextLetter = str[i + needle.length] || "";
    if (str.startsWith(needle, i) && !/[a-zA-Z]/.test(nextLetter)) {
      let j = i + needle.length;
      const args = [];
      for (let k = 0; k < argCount; k++) {
        while (str[j] === " ") j++;
        if (str[j] === "{") {
          const [arg, next] = extractBraceArg(str, j);
          args.push(arg);
          j = next;
        } else if (/[a-zA-Z0-9]/.test(str[j] || "")) {
          args.push(str[j]);
          j++;
        } else {
          args.push("");
        }
      }
      out += build(args.map((a) => latexToPlainText(a, true)));
      i = j;
    } else {
      out += str[i];
      i++;
    }
  }
  return out;
}

function isSimpleToken(s) {
  return /^[A-Za-z0-9]+$/.test(s);
}
function formatFraction(a, b) {
  const A = isSimpleToken(a) ? a : `(${a})`;
  const B = isSimpleToken(b) ? b : `(${b})`;
  return `${A}/${B}`;
}

// jsPDF's built-in fonts (Helvetica/Times/Courier) only cover WinAnsi —
// essentially ASCII plus the Latin-1 supplement. Anything outside that
// (Greek letters, ≤/≥/≠, →, √, superscript/subscript block characters)
// renders as a missing-glyph box instead of the intended symbol, which
// looks worse than not having "pretty" math at all. Everything below is
// deliberately spelled out or given an ASCII-safe fallback instead of
// reaching for the "correct" Unicode symbol.
function wrapIfComplex(g) {
  return isSimpleToken(g) ? g : `(${g})`;
}
function replaceSupSub(s) {
  s = s.replace(/\^\{([^{}]*)\}/g, (m, g) => `^${wrapIfComplex(g)}`);
  s = s.replace(/\^([A-Za-z0-9])/g, (m, g) => `^${g}`);
  s = s.replace(/_\{([^{}]*)\}/g, (m, g) => `_${wrapIfComplex(g)}`);
  s = s.replace(/_([A-Za-z0-9])/g, (m, g) => `_${g}`);
  return s;
}

const SYMBOLS = {
  // × ÷ ± · are in Latin-1, safe to keep as real symbols.
  "\\times": "×", "\\cdot": "·", "\\div": "÷", "\\pm": "±", "\\mp": "-+",
  "\\leq": "<=", "\\geq": ">=", "\\neq": "!=", "\\approx": "~=", "\\equiv": "==", "\\infty": "l'infini",
  "\\rightarrow": "->", "\\to": "->", "\\Rightarrow": "=>", "\\leftrightarrow": "<->",
  "\\alpha": "alpha", "\\beta": "beta", "\\gamma": "gamma", "\\Gamma": "Gamma", "\\delta": "delta", "\\Delta": "Delta",
  "\\epsilon": "epsilon", "\\theta": "theta", "\\lambda": "lambda", "\\mu": "mu", "\\pi": "pi", "\\sigma": "sigma",
  "\\Sigma": "Sigma", "\\tau": "tau", "\\phi": "phi", "\\varphi": "phi", "\\omega": "omega", "\\Omega": "Omega",
  "\\%": "%", "\\$": "$", "\\_": "_", "\\&": "&", "\\#": "#",
  "\\quad": "  ", "\\qquad": "    ", "\\,": " ", "\\;": " ", "\\!": "", "\\ ": " ",
  "\\{": "{", "\\}": "}", "\\[": "[", "\\]": "]",
};

export function latexToPlainText(raw, inner = false) {
  let s = raw;
  if (!inner) {
    s = s.trim();
    if (s.startsWith("$$") && s.endsWith("$$")) s = s.slice(2, -2);
    else if (s.startsWith("$") && s.endsWith("$")) s = s.slice(1, -1);
  }
  s = s.replace(/\\left/g, "").replace(/\\right/g, "");
  s = replaceCommand(s, "dfrac", 2, ([a, b]) => formatFraction(a, b));
  s = replaceCommand(s, "tfrac", 2, ([a, b]) => formatFraction(a, b));
  s = replaceCommand(s, "frac", 2, ([a, b]) => formatFraction(a, b));
  s = s.replace(/\\sqrt\[([^\]]+)\]/g, (m, n) => `racine ${n}-ieme de `); // nth root marker, resolved right before the sqrt{...} below
  s = replaceCommand(s, "sqrt", 1, ([a]) => `sqrt(${a})`);
  s = replaceCommand(s, "text", 1, ([a]) => a);
  s = replaceCommand(s, "mathrm", 1, ([a]) => a);
  s = replaceCommand(s, "mathbf", 1, ([a]) => a);
  s = replaceCommand(s, "overline", 1, ([a]) => a);
  s = replaceCommand(s, "boxed", 1, ([a]) => a);
  for (const [k, v] of Object.entries(SYMBOLS)) s = s.split(k).join(v);
  s = replaceSupSub(s);
  s = s.replace(/\\([a-zA-Z]+)(?![a-zA-Z])(?=[0-9])/g, "$1 "); // unrecognized command glued to a following digit: keep a separating space
  s = s.replace(/\\([a-zA-Z]+)/g, "$1"); // unrecognized commands: drop the backslash, keep the name
  s = s.replace(/[{}]/g, "");
  s = s.replace(/[ \t]+/g, " ").trim();
  return s;
}

// Replaces every $...$ / $$...$$ span in `text` with its latexToPlainText()
// conversion — for the builders (concoursPdf.js, the évaluation PDF) that
// draw markdown as plain doc.text() lines and never got a real math
// typesetter. Display spans never span a blank line in this content, so a
// match that crosses one is left alone rather than eating the rest of the
// text looking for a closer that isn't a formula's.
export function convertMathSpansToPlainText(text) {
  let out = String(text ?? "");
  out = out.replace(/\$\$[\s\S]+?\$\$/g, (m) => ` ${latexToPlainText(m)} `);
  out = out.replace(/\$(?:\\\$|[^$])+?\$/g, (m) => (m.includes("\n\n") ? m : ` ${latexToPlainText(m)} `));
  return out;
}

// ---- accented French words in bare math mode --------------------------

const ACCENTED_RE = /[À-ÖØ-öø-ÿ]/;

// Wraps just the accented word(s) inside a `_{...}` / `^{...}` group in
// \text{...}, leaving the rest of the group (index variables, \, spacing,
// etc.) untouched — `_{début\, p}` becomes `_{\text{début}\, p}`, not
// `_{\text{début\, p}}` (which would also swallow the spacing command into
// the text run). Only touches groups that actually contain an accent, so
// ordinary math (`V_n`, `x^{2}`) is never rewritten.
export function wrapAccentedMathWords(latex) {
  return String(latex ?? "").replace(/([_^])\{([^{}]*)\}/g, (whole, marker, inner) => {
    if (!ACCENTED_RE.test(inner)) return whole;
    const wrapped = inner.replace(/[A-Za-zÀ-ÖØ-öø-ÿ]+/g, (word) => (ACCENTED_RE.test(word) ? `\\text{${word}}` : word));
    return `${marker}{${wrapped}}`;
  });
}
