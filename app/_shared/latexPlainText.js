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
// \{ and \} mean real braces, kept out of the way while the grouping ones go.
const LITERAL_OPEN = "";
const LITERAL_CLOSE = "";
function replaceSupSub(s) {
  s = s.replace(/\^\{([^{}]*)\}/g, (m, g) => `^${wrapIfComplex(g)}`);
  s = s.replace(/\^([A-Za-z0-9])/g, (m, g) => `^${g}`);
  s = s.replace(/_\{([^{}]*)\}/g, (m, g) => `_${wrapIfComplex(g)}`);
  s = s.replace(/_([A-Za-z0-9])/g, (m, g) => `_${g}`);
  return s;
}

// Named commands, matched as whole words: a substring match turned
// "\rightarrow" into "arrow" (once "\right" was gone) and would turn
// "\leqslant" into "<=slant".
const COMMANDS = new Map(Object.entries({
  // × ÷ ± · are in Latin-1, safe to keep as real symbols.
  times: "×", cdot: "·", div: "÷", pm: "±", mp: "-+",
  leq: "<=", le: "<=", leqslant: "<=", geq: ">=", ge: ">=", geqslant: ">=", succeq: ">=", gg: ">>", ll: "<<",
  neq: "!=", ne: "!=", approx: "~=", equiv: "==", sim: "~", infty: "l'infini",
  rightarrow: "->", to: "->", longrightarrow: "->", mapsto: "->", leftarrow: "<-",
  Rightarrow: "=>", Longrightarrow: "=>", implies: "=>",
  leftrightarrow: "<->", Leftrightarrow: "<=>", Longleftrightarrow: "<=>", iff: "<=>",
  alpha: "alpha", beta: "beta", gamma: "gamma", Gamma: "Gamma", delta: "delta", Delta: "Delta",
  epsilon: "epsilon", varepsilon: "epsilon", zeta: "zeta", eta: "eta", theta: "theta", Theta: "Theta",
  kappa: "kappa", lambda: "lambda", Lambda: "Lambda", mu: "mu", nu: "nu", xi: "xi", pi: "pi", Pi: "Pi",
  rho: "rho", sigma: "sigma", Sigma: "Sigma", tau: "tau", phi: "phi", varphi: "phi", Phi: "Phi",
  chi: "chi", psi: "psi", omega: "omega", Omega: "Omega", ell: "l",
  sum: "somme", prod: "produit", int: "integrale", partial: "d",
  in: " dans ", notin: " hors de ", subset: " inclus dans ", cap: " inter ", cup: " union ", setminus: " sauf ",
  forall: "pour tout ", exists: "il existe ", emptyset: "vide", perp: " perp. ", circ: "°", checkmark: "v",
  ldots: "...", dots: "...", cdots: "...", langle: "<", rangle: ">", mid: "|", vert: "|", lvert: "|", rvert: "|", lfloor: "[", rfloor: "]",
  quad: "  ", qquad: "    ",
  // Sizing/layout, nothing to read.
  displaystyle: "", textstyle: "", limits: "", nolimits: "",
}));

const SYMBOLS = {
  "\\%": "%", "\\$": "$", "\\_": "_", "\\&": "&", "\\#": "#",
  "\\,": " ", "\\;": " ", "\\!": "", "\\ ": " ",
  "\\{": LITERAL_OPEN, "\\}": LITERAL_CLOSE, "\\[": "[", "\\]": "]",
};

// One line per row: "[ a, b ; c, d ]" for a matrix, "a ; b" for cases/aligned.
function flattenEnvironments(s) {
  const rows = (body, cellSep) =>
    body.split(/\\\\/).map((r) => r.replace(/\\hline/g, "").split("&").map((c) => c.trim()).filter(Boolean).join(cellSep)).filter(Boolean).join(" ; ");
  return s
    .replace(/\\begin\{[a-zA-Z]*matrix\}([\s\S]*?)\\end\{[a-zA-Z]*matrix\}/g, (m, body) => ` [ ${rows(body, ", ")} ] `)
    .replace(/\\begin\{([a-zA-Z]+\*?)\}(?:\{[^{}]*\})?([\s\S]*?)\\end\{\1\}/g, (m, env, body) => ` ${rows(body, " ")} `)
    .replace(/\\\\/g, " ; ");
}

export function latexToPlainText(raw, inner = false) {
  let s = raw;
  if (!inner) {
    s = s.trim();
    if (s.startsWith("$$") && s.endsWith("$$")) s = s.slice(2, -2);
    else if (s.startsWith("$") && s.endsWith("$")) s = s.slice(1, -1);
  }
  s = s.replace(/\\(?:left|right)\.(?![a-zA-Z])/g, "").replace(/\\(?:left|right|middle|[bB]igg?[lrm]?)(?![a-zA-Z])/g, "");
  s = flattenEnvironments(s);
  s = s.replace(/(\\[a-zA-Z]+)(?=\\[a-zA-Z])/g, "$1 "); // "\times\dfrac{…}": still two commands once the fraction is plain text
  s = replaceCommand(s, "dfrac", 2, ([a, b]) => formatFraction(a, b));
  s = replaceCommand(s, "tfrac", 2, ([a, b]) => formatFraction(a, b));
  s = replaceCommand(s, "frac", 2, ([a, b]) => formatFraction(a, b));
  s = s.replace(/\\sqrt\[([^\]]+)\]/g, (m, n) => `racine ${n}-ieme de `); // nth root marker, resolved right before the sqrt{...} below
  s = replaceCommand(s, "sqrt", 1, ([a]) => `sqrt(${a})`);
  for (const cmd of ["text", "textbf", "textit", "mathrm", "mathbf", "mathit", "mathsf", "mathbb", "mathcal", "operatorname", "boxed", "underbrace", "underline", "vec"]) {
    s = replaceCommand(s, cmd, 1, ([a]) => a);
  }
  for (const cmd of ["bar", "overline"]) s = replaceCommand(s, cmd, 1, ([a]) => `${a} barre`);
  for (const cmd of ["hat", "widehat"]) s = replaceCommand(s, cmd, 1, ([a]) => `${a} chapeau`);
  s = replaceCommand(s, "tilde", 1, ([a]) => `${a} tilde`);
  s = replaceCommand(s, "acute", 1, ([a]) => `${a}́`.normalize("NFC"));
  s = replaceCommand(s, "binom", 2, ([n, k]) => `C(${n}, ${k})`);
  s = replaceCommand(s, "xrightarrow", 1, ([a]) => ` -(${a})-> `);
  for (const [k, v] of Object.entries(SYMBOLS)) s = s.split(k).join(v);
  s = s.replace(/\\([a-zA-Z]+)/g, (m, name) => (COMMANDS.has(name) ? COMMANDS.get(name) : m));
  s = replaceSupSub(s);
  s = s.replace(/\\([a-zA-Z]+)(?![a-zA-Z])(?=[0-9])/g, "$1 "); // unrecognized command glued to a following digit: keep a separating space
  s = s.replace(/\\([a-zA-Z]+)/g, "$1"); // unrecognized commands: drop the backslash, keep the name
  s = s.replace(/[{}]/g, "");
  s = s.split(LITERAL_OPEN).join("{").split(LITERAL_CLOSE).join("}");
  s = s.replace(/[ \t]+/g, " ").trim();
  return s;
}

// Whether a "$...$" match really is a formula. "$B$2" and "A$1+B2" (references
// in Excel) close on a digit, "500 $ puis 300 $" and "5$, 7$" (amounts) open
// on a blank or punctuation; without this they would swallow the text between
// their dollars. A formula may *end* on a blank: "$S_{xx} = $ **12**" is common
// in the corrigés. `before` / `after` are the characters around the match.
function isInlineMath(m, before, after) {
  if (/\n\s*\n/.test(m)) return false; // a formula never spans a paragraph
  if (/[\s,;.:)]/.test(m[1])) return false;
  if (/[A-Za-z]/.test(before || "") && /\d/.test(m[1])) return false;
  if (m.includes("\\")) return true; // "$\approx$3,01": a command settles it
  return !m.includes("\n") && !/\d/.test(after || "");
}

// Replaces each inline $...$ formula of `text` with render(formula). A rejected
// match resumes from its own closing "$", which can still open the next real
// formula ("500$ soit $x=2$").
export function replaceInlineMath(text, render) {
  const re = /\$(?:\\\$|[^$])+?\$/g;
  let out = "";
  let last = 0;
  let m;
  while ((m = re.exec(text))) {
    if (isInlineMath(m[0], text[m.index - 1], text[m.index + m[0].length])) {
      out += text.slice(last, m.index) + render(m[0]);
      last = re.lastIndex;
    } else {
      re.lastIndex = m.index + 1;
    }
  }
  return out + text.slice(last);
}

// Replaces every $...$ / $$...$$ span in `text` with its latexToPlainText()
// conversion — for what is drawn as plain doc.text() lines: the évaluation
// PDF, the carousel, and what concoursPdf.js can't typeset.
export function convertMathSpansToPlainText(text) {
  const out = String(text ?? "").replace(/\$\$[\s\S]+?\$\$/g, (m) => ` ${latexToPlainText(m)} `);
  return replaceInlineMath(out, (m) => ` ${latexToPlainText(m)} `);
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
