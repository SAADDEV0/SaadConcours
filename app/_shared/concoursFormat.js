// Reformats lettered option lists onto their own bullet lines before Markdown
// rendering — source énoncés often cram every option onto one line ("a) ...
// b) ... c) ... d) ..."), and Markdown then collapses even the ones that DO
// sit on separate source lines into a single wrapped paragraph. Either way
// the reader gets a wall of text where a list was intended.
//
// Not every concours is a QCM: plenty are case studies whose "a) Calculer le
// BFR / b) Commenter" are tasks to carry out, not answers to pick from. The
// bullet rewrite above is right for both, but only real answer choices should
// get the boxed QCM styling — see tagChoices / markQcmOptions below.
//
// Pure text transform, safe to run both server-side (per-concours SEO pages)
// and client-side (the PDF export in concoursPdf.js, which understands the
// "- " bullets this emits).

// Most questions stop at d or e, but a handful of "cochez tout ce qui
// s'applique" items run to I — hence room for ten options inline.
const ORDER = "abcdefghij";

// Delimiters actually used by the énoncés: "a)" (most common), "a." / "a:",
// and "a-" / "a –" for the sub-question style ("a- Déterminer le BFR").
const PAREN_RE = /(?<![\p{L}\p{N}([])([A-Ja-j])\)[ \t]+/gu;
const DOT_RE = /(?<![\p{L}\p{N}([])([A-Ja-j])[.:][ \t]+/gu;

// Line-start form, used when each option already sits on its own source line.
// Options indented under a sub-question keep (a clamped version of) their
// indent so they stay nested instead of breaking out into a sibling list —
// see clampIndent for why it can't simply be passed through.
//
// Stops at h rather than following ORDER all the way to j: a lone "I." opening
// a line is far more often a roman-numeral section heading ("I. PARTIE
// COMPTABILITÉ") than a ninth answer choice.
const LINE_START_RE = /^([ \t]*)([A-Ha-h])(\)|[.:]|[ \t]?[-–])[ \t]+(\S.*)$/;

// One énoncé writes its options with no space at all after the dash
// ("a-la somme des salaires bruts"). That shape is too close to ordinary text
// to trust on a single line — "e-commerce est ..." would become option e — so
// it only counts inside a block of consecutive lines spelling out a, b, c, …
const TIGHT_DASH_RE = /^([ \t]*)([A-Ha-h])[-–](\S.*)$/;

// Four or more leading spaces in front of a "- " turns the option into an
// indented code block, so cap the emitted indent at three — deeper source
// indents just render as a list of their own under the sub-question.
function clampIndent(indent) {
  return indent.replace(/\t/g, "  ").length >= 3 ? "   " : indent;
}

// Indices of the lines belonging to a qualifying TIGHT_DASH_RE block.
function tightDashLines(lines) {
  const marked = new Set();
  let block = [];
  const flush = () => {
    const ok =
      block.length >= 3 &&
      block.every((i, n) => lines[i].match(TIGHT_DASH_RE)[2].toLowerCase() === ORDER[n]);
    if (ok) for (const i of block) marked.add(i);
    block = [];
  };
  for (let i = 0; i < lines.length; i++) {
    if (TIGHT_DASH_RE.test(lines[i])) block.push(i);
    else flush();
  }
  flush();
  return marked;
}

// Some énoncés separate inline options with hard spaces ("a) 2% &nbsp;&nbsp;
// b) 5%"), which would otherwise be left dangling at the end of each option.
function cleanOption(txt) {
  return txt
    .replace(/(&nbsp;|\s)+$/g, "")
    .trim()
    .replace(/[;.]$/, "")
    .trim();
}

// Markers are sometimes already bolded in the source ("**a)** ..."). Strip the
// wrapper so both branches below see a plain marker, then re-add it uniformly.
function unboldMarkers(line) {
  return line.replace(/\*\*([A-Ha-h](?:\)|[.:]|[ \t]?[-–]))\*\*(?=[ \t])/g, "$1");
}

// Keeps only the matches that continue an a-b-c-... run in a single case,
// skipping anything that doesn't come next. Requiring a strictly ascending run
// is what stops a prose enumeration from being shredded into bullets, and
// skipping (rather than giving up) lets an option's own text contain something
// marker-shaped: "a. De F. W. Taylor b. De H. Fayol c. De H. Ford" is three
// options, not one — the "F." and "H." initials are simply not the next letter.
function optionRun(matches) {
  const run = [];
  let next = 0;
  let upper = null;
  for (const m of matches) {
    const letter = m[1];
    if (ORDER.indexOf(letter.toLowerCase()) !== next) continue;
    const isUpper = letter === letter.toUpperCase();
    if (upper === null) upper = isUpper;
    else if (isUpper !== upper) continue;
    run.push(m);
    next++;
  }
  return run.length >= 3 ? run : null;
}

function splitInlineOptions(line, run, delim) {
  const out = [];
  const stem = line.slice(0, run[0].index).trim();
  if (stem) out.push(stem);
  for (let i = 0; i < run.length; i++) {
    const start = run[i].index + run[i][0].length;
    const end = i + 1 < run.length ? run[i + 1].index : line.length;
    out.push(`- **${run[i][1].toLowerCase()}${delim}** ${cleanOption(line.slice(start, end))}`);
  }
  return out;
}

// An answer-choice set has at least three options; a two-item a/b group is
// almost always a pair of sub-questions.
const MIN_CHOICES = 3;

// …and a paper that only has one or two such sets is a case study that happens
// to letter its sub-questions, not a QCM. Measured against the corpus the gap
// is wide: énoncés with lettered lists have either ≤2 of these sets (18 of
// them, all case studies) or ≥5 (81, all genuine QCMs). Nothing sits near the
// threshold, so it does not need to be finely tuned.
const MIN_CHOICE_SETS = 5;

// Inline HTML comment: invisible in the rendered page, ignored by the PDF
// exporter (which never asks for it), and something markQcmOptions can find
// after Markdown has turned these lines into <li>s. It goes *after* the
// letter, never at the start of the line — a line item opening with "<!--"
// is an HTML block, and Markdown would then leave the whole option as raw
// text with its "**a)**" unparsed.
const CHOICE_MARK = "<!--c-->";

// Maximal groups of consecutive emitted bullet lines, kept only when the group
// runs a, b, c… from the start — that's an option set rather than a stretch of
// unrelated bullets that happen to be adjacent.
function choiceSets(out) {
  const sets = [];
  let start = -1;
  const letterAt = (i) => (out[i].match(/^\s*- \*\*([a-j])[).:]\*\* /) || [])[1];
  const flush = (end) => {
    if (start >= 0 && end - start >= MIN_CHOICES && letterAt(start) === "a") {
      sets.push([start, end]);
    }
    start = -1;
  };
  for (let i = 0; i < out.length; i++) {
    if (letterAt(i)) {
      if (start < 0) start = i;
    } else flush(i);
  }
  flush(out.length);
  return sets;
}

export function formatQCM(md, { tagChoices = false } = {}) {
  if (!md) return md;
  const lines = md.split("\n");
  const tightDash = tightDashLines(lines);
  const out = [];
  let inFence = false;

  for (let n = 0; n < lines.length; n++) {
    const raw = lines[n];
    // Corrigés put journal entries (écritures comptables) in fenced blocks —
    // their alignment is the whole point, so never rewrite anything inside.
    if (/^\s*(```|~~~)/.test(raw)) {
      inFence = !inFence;
      out.push(raw);
      continue;
    }
    // Table rows are already a layout; splitting a cell onto its own bullet
    // line would break the table apart.
    if (inFence || /^\s*\|/.test(raw)) {
      out.push(raw);
      continue;
    }

    const line = unboldMarkers(raw);

    // Inline run: "a) ... b) ... c) ..." all crammed onto one line. Only ")"
    // and "." / ":" are considered — a "-" marker is too easy to confuse with
    // a minus sign in the formula-heavy corrigés ("x = a - b - c").
    const paren = optionRun([...line.matchAll(PAREN_RE)]);
    if (paren) {
      out.push(...splitInlineOptions(line, paren, ")"));
      continue;
    }
    const dot = optionRun([...line.matchAll(DOT_RE)]);
    if (dot) {
      out.push(...splitInlineOptions(line, dot, "."));
      continue;
    }

    // Already one option per source line — still needs to become a list, or
    // Markdown glues the lines back into one paragraph.
    const single = line.match(LINE_START_RE);
    if (single) {
      const [, indent, letter, delim, text] = single;
      const marker = delim.trim() === "–" || delim.trim() === "-" ? ")" : delim.trim();
      out.push(`${clampIndent(indent)}- **${letter.toLowerCase()}${marker}** ${text.trim()}`);
      continue;
    }

    if (tightDash.has(n)) {
      const [, indent, letter, text] = line.match(TIGHT_DASH_RE);
      out.push(`${clampIndent(indent)}- **${letter.toLowerCase()})** ${text.trim()}`);
      continue;
    }

    out.push(raw);
  }

  if (tagChoices) {
    const sets = choiceSets(out);
    if (sets.length >= MIN_CHOICE_SETS) {
      for (const [start, end] of sets) {
        for (let i = start; i < end; i++) {
          out[i] = out[i].replace(/^(\s*- \*\*[a-j][).:]\*\*)/, `$1${CHOICE_MARK}`);
        }
      }
    }
  }
  return out.join("\n");
}

// Turns the CHOICE_MARK left by formatQCM(md, { tagChoices: true }) into the
// class the stylesheet boxes as an answer choice. Anything formatQCM left
// unmarked — a case study's lettered sub-questions — stays an ordinary bullet.
export function markQcmOptions(html) {
  if (!html) return html;
  return html.replace(
    /<li>(\s*<p>)?\s*<strong>([A-Ja-j][).:])<\/strong><!--c-->/g,
    (_, p, marker) => `<li class="qcm-opt">${p || ""}<strong class="qcm-letter">${marker}</strong>`
  );
}
