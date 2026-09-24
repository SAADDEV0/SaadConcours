"use client";

import { useEffect, useRef, useState } from "react";
import { marked } from "marked";
import { renderMarkdownWithMath, renderMathWhenReady } from "@/app/_shared/mathMarkdown";
import Icon from "./Icon";
import { Seg } from "./kit";
import { useDebounced, useLocalStorage } from "../_lib/hooks";
import { num, wordCount } from "../_lib/format";

// Éditeur Markdown + LaTeX : barre d'outils, trois modes (écrire, côte à
// côte, aperçu), plein écran, aperçu rendu avec le même pipeline que le site
// (marked + protection des formules + KaTeX).

const TOOLS = [
  { label: "B", title: "Gras (Ctrl B)", wrap: ["**", "**"], ph: "texte en gras" },
  { label: "I", title: "Italique (Ctrl I)", wrap: ["*", "*"], ph: "texte en italique" },
  "sep",
  { label: "H2", title: "Titre de section", line: "## ", ph: "Titre" },
  { label: "H3", title: "Sous-titre", line: "### ", ph: "Sous-titre" },
  { label: "•", title: "Liste à puces", line: "- ", ph: "élément" },
  { label: "1.", title: "Liste numérotée", line: "1. ", ph: "élément" },
  { label: "❝", title: "Citation / encadré", line: "> ", ph: "remarque" },
  "sep",
  { label: "∑", title: "Formule en ligne", wrap: ["$", "$"], ph: "x^2" },
  { label: "∫∫", title: "Formule centrée", wrap: ["\n$$\n", "\n$$\n"], ph: "\\dfrac{a}{b}" },
  { label: "⊞", title: "Tableau", insert: "\n| Colonne 1 | Colonne 2 |\n| --- | --- |\n| … | … |\n" },
  { label: "🔗", title: "Lien", wrap: ["[", "](https://)"], ph: "texte du lien" },
  { label: "</>", title: "Code", wrap: ["`", "`"], ph: "code" },
];

function apply(textarea, tool, value, onChange) {
  const { selectionStart: s, selectionEnd: e } = textarea;
  const sel = value.slice(s, e);
  let next;
  let cursorStart;
  let cursorEnd;
  if (tool.insert) {
    next = value.slice(0, e) + tool.insert + value.slice(e);
    cursorStart = cursorEnd = e + tool.insert.length;
  } else if (tool.line) {
    const lineStart = value.lastIndexOf("\n", s - 1) + 1;
    const block = value.slice(lineStart, e) || tool.ph;
    const replaced = block
      .split("\n")
      .map((l, i) => (tool.line === "1. " ? `${i + 1}. ` : tool.line) + l.replace(/^(#{1,6} |- |\d+\. |> )/, ""))
      .join("\n");
    next = value.slice(0, lineStart) + replaced + value.slice(e);
    cursorStart = lineStart;
    cursorEnd = lineStart + replaced.length;
  } else {
    const inner = sel || tool.ph;
    next = value.slice(0, s) + tool.wrap[0] + inner + tool.wrap[1] + value.slice(e);
    cursorStart = s + tool.wrap[0].length;
    cursorEnd = cursorStart + inner.length;
  }
  onChange(next);
  requestAnimationFrame(() => {
    textarea.focus();
    textarea.setSelectionRange(cursorStart, cursorEnd);
  });
}

export function MarkdownPreview({ value, dir }) {
  const ref = useRef(null);
  const html = (() => {
    try {
      return renderMarkdownWithMath(marked, value || "", { gfm: true, breaks: false });
    } catch {
      return "<p>Aperçu indisponible.</p>";
    }
  })();
  useEffect(() => {
    renderMathWhenReady(ref.current);
  }, [html]);
  // eslint-disable-next-line react/no-danger
  return <div ref={ref} className="ax-prose" dir={dir} dangerouslySetInnerHTML={{ __html: html }} />;
}

export default function MarkdownField({ value = "", onChange, rows = 20, placeholder, dir, id }) {
  const [mode, setMode] = useLocalStorage("ax-md-mode", "split");
  const [full, setFull] = useState(false);
  const taRef = useRef(null);
  const preview = useDebounced(value, 220);
  const headings = (value.match(/^#{1,3} /gm) || []).length;
  const formulas = (value.match(/\$[^$\n]+\$/g) || []).length;

  useEffect(() => {
    if (!full) return undefined;
    const onKey = (e) => e.key === "Escape" && setFull(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [full]);

  function onKeyDown(e) {
    const ta = e.currentTarget;
    if (e.key === "Tab" && !e.shiftKey) {
      e.preventDefault();
      apply(ta, { insert: "  " }, value, onChange);
      return;
    }
    if ((e.ctrlKey || e.metaKey) && !e.shiftKey && !e.altKey) {
      const k = e.key.toLowerCase();
      if (k === "b") {
        e.preventDefault();
        apply(ta, TOOLS[0], value, onChange);
      } else if (k === "i") {
        e.preventDefault();
        apply(ta, TOOLS[1], value, onChange);
      }
    }
  }

  return (
    <div className={`ax-md${full ? " fullscreen" : ""}`}>
      <div className="ax-md-bar">
        {TOOLS.map((t, i) =>
          t === "sep" ? (
            <span className="sep" key={i} />
          ) : (
            <button key={t.title} type="button" title={t.title} onClick={() => apply(taRef.current, t, value, onChange)} disabled={mode === "preview"}>
              {t.label}
            </button>
          )
        )}
        <Seg
          ariaLabel="Mode d'affichage"
          value={mode}
          onChange={setMode}
          options={[
            { value: "write", label: "Écrire" },
            { value: "split", label: "Côte à côte" },
            { value: "preview", label: "Aperçu" },
          ]}
        />
        <button type="button" title={full ? "Quitter le plein écran (Échap)" : "Plein écran"} onClick={() => setFull((f) => !f)}>
          <Icon name={full ? "minimize" : "maximize"} size="sm" />
        </button>
      </div>
      <div className={`ax-md-body${mode === "split" ? " split" : ""}`}>
        {mode !== "preview" && (
          <textarea
            id={id}
            ref={taRef}
            value={value}
            rows={rows}
            dir={dir}
            placeholder={placeholder || "Écris en Markdown. Formules : $x^2$ ou $$\\dfrac{a}{b}$$"}
            onChange={(e) => onChange(e.target.value)}
            onKeyDown={onKeyDown}
            spellCheck
          />
        )}
        {mode !== "write" && (
          <div className="ax-md-preview">{preview.trim() ? <MarkdownPreview value={preview} dir={dir} /> : <p className="ax-muted">L&apos;aperçu apparaîtra ici.</p>}</div>
        )}
      </div>
      <div className="ax-md-foot">
        <span>{num(wordCount(value))} mots</span>
        <span>{num(value.length)} caractères</span>
        <span>{headings} titres</span>
        <span>{formulas} formules</span>
      </div>
    </div>
  );
}
