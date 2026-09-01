"use client";

import { useEffect, useRef, useState } from "react";
import { protectMath, renderMathWhenReady } from "../_shared/mathMarkdown";
import { ensureKatexCss } from "../_shared/chrome";

/* -------------------------------------------------------------------
 * Rich-ish Markdown editor for admin content fields (cours, énoncés,
 * corrigés). Storage stays plain Markdown everywhere else in the app
 * (marked.parse() on the public pages, line-by-line parsing in the PDF
 * exporters) so this can't become a contentEditable/HTML editor - it's
 * a toolbar that inserts Markdown syntax + a live preview pane, plus a
 * paste handler that converts rich text (Word, Google Docs, browser
 * copy) into clean Markdown instead of dumping raw HTML or losing all
 * structure.
 * ---------------------------------------------------------------- */

function htmlToMarkdown(html) {
  const container = document.createElement("div");
  container.innerHTML = html;

  function walkInline(node) {
    let out = "";
    node.childNodes.forEach((child) => {
      out += nodeToMd(child, true);
    });
    return out;
  }

  function blockChildren(node) {
    let out = "";
    node.childNodes.forEach((c) => {
      out += nodeToMd(c, false);
    });
    return out;
  }

  function listToMd(listEl, ordered, depth) {
    let out = "";
    let i = 1;
    Array.from(listEl.children)
      .filter((c) => c.tagName.toLowerCase() === "li")
      .forEach((li) => {
        const indent = "  ".repeat(depth);
        const marker = ordered ? `${i}. ` : "- ";
        i++;
        const nested = Array.from(li.children).filter((c) => ["ul", "ol"].includes(c.tagName.toLowerCase()));
        let text = "";
        li.childNodes.forEach((c) => {
          if (c.nodeType === Node.ELEMENT_NODE && ["ul", "ol"].includes(c.tagName.toLowerCase())) return;
          text += nodeToMd(c, true);
        });
        out += `${indent}${marker}${text.trim()}\n`;
        nested.forEach((n) => {
          out += listToMd(n, n.tagName.toLowerCase() === "ol", depth + 1);
        });
      });
    return out;
  }

  function tableToMd(tableEl) {
    const rows = Array.from(tableEl.querySelectorAll("tr"));
    if (!rows.length) return "";
    const cellsOf = (row) =>
      Array.from(row.children).map((c) => walkInline(c).trim().replace(/\|/g, "\\|") || " ");
    const header = cellsOf(rows[0]);
    let out = `| ${header.join(" | ")} |\n`;
    out += `| ${header.map(() => "---").join(" | ")} |\n`;
    rows.slice(1).forEach((r) => {
      out += `| ${cellsOf(r).join(" | ")} |\n`;
    });
    return out;
  }

  function nodeToMd(node, inline) {
    if (node.nodeType === Node.TEXT_NODE) {
      // Whitespace-only text nodes between block tags are HTML source
      // formatting, not content - e.g. the "\n  " between </h2> and <p> in
      // pasted markup. Dropping them in block context avoids stray leading
      // spaces on every converted line; inline text still collapses runs of
      // whitespace to a single space like normal HTML rendering does.
      if (inline) return node.textContent.replace(/\s+/g, " ");
      return node.textContent.trim() ? node.textContent : "";
    }
    if (node.nodeType !== Node.ELEMENT_NODE) return "";
    const tag = node.tagName.toLowerCase();
    switch (tag) {
      case "br":
        return "  \n";
      case "strong":
      case "b": {
        const t = walkInline(node).trim();
        return t ? `**${t}**` : "";
      }
      case "em":
      case "i": {
        const t = walkInline(node).trim();
        return t ? `*${t}*` : "";
      }
      case "del":
      case "s":
      case "strike": {
        const t = walkInline(node).trim();
        return t ? `~~${t}~~` : "";
      }
      case "code": {
        const parentTag = node.parentElement && node.parentElement.tagName.toLowerCase();
        if (parentTag === "pre") return node.textContent;
        return `\`${node.textContent}\``;
      }
      case "a": {
        const href = node.getAttribute("href") || "";
        const t = walkInline(node).trim() || href;
        return href ? `[${t}](${href})` : t;
      }
      case "img": {
        const src = node.getAttribute("src") || "";
        const alt = node.getAttribute("alt") || "";
        return src ? `![${alt}](${src})` : "";
      }
      case "h1":
      case "h2":
      case "h3":
      case "h4":
      case "h5":
      case "h6": {
        const level = Number(tag[1]);
        return `\n${"#".repeat(level)} ${walkInline(node).trim()}\n\n`;
      }
      case "p":
      case "div": {
        const t = walkInline(node).trim();
        return t ? `${t}\n\n` : "";
      }
      case "blockquote": {
        const inner = blockChildren(node).trim();
        const quoted = inner
          .split("\n")
          .map((l) => (l ? `> ${l}` : ">"))
          .join("\n");
        return `${quoted}\n\n`;
      }
      case "hr":
        return "\n---\n\n";
      case "ul":
      case "ol":
        return listToMd(node, tag === "ol", 0) + "\n";
      case "pre": {
        const codeEl = node.querySelector("code");
        const codeText = (codeEl || node).textContent.replace(/\n$/, "");
        let lang = "";
        if (codeEl) {
          const m = (codeEl.className || "").match(/language-(\S+)/);
          if (m) lang = m[1];
        }
        return `\n\`\`\`${lang}\n${codeText}\n\`\`\`\n\n`;
      }
      case "table":
        return tableToMd(node) + "\n";
      default:
        return walkInline(node);
    }
  }

  let md = blockChildren(container);
  md = md.replace(/\n{3,}/g, "\n\n").trim();
  return md;
}

function stripLinePrefix(line) {
  return line.replace(/^(-|>|\d+\.)\s+/, "");
}

const TOOLBAR = [
  { label: "H1", title: "Titre 1", action: "heading", arg: 1 },
  { label: "H2", title: "Titre 2", action: "heading", arg: 2 },
  { label: "H3", title: "Titre 3", action: "heading", arg: 3 },
  { sep: true },
  { label: "B", title: "Gras", action: "wrap", arg: ["**", "**", "texte en gras"], bold: true },
  { label: "I", title: "Italique", action: "wrap", arg: ["*", "*", "texte en italique"], italic: true },
  { label: "S", title: "Barré", action: "wrap", arg: ["~~", "~~", "texte barré"] },
  { label: "</>", title: "Code en ligne", action: "wrap", arg: ["`", "`", "code"] },
  { sep: true },
  { label: "❝", title: "Citation", action: "linePrefix", arg: "> " },
  { label: "•", title: "Liste à puces", action: "linePrefix", arg: "- " },
  { label: "1.", title: "Liste numérotée", action: "orderedList" },
  { sep: true },
  { label: "🔗", title: "Lien", action: "link" },
  { label: "🖼", title: "Image", action: "image" },
  { label: "▦", title: "Tableau", action: "table" },
  { label: "{ }", title: "Bloc de code", action: "codeBlock" },
  { label: "―", title: "Ligne horizontale", action: "hr" },
];

export default function MarkdownEditor({ value, onChange, placeholder, required, minHeight = 260 }) {
  const [mode, setMode] = useState("split"); // "write" | "split" | "preview"
  const taRef = useRef(null);
  const previewRef = useRef(null);

  function setValueWithCursor(newValue, cursorPos) {
    onChange(newValue);
    requestAnimationFrame(() => {
      const el = taRef.current;
      if (el) {
        el.focus();
        el.setSelectionRange(cursorPos, cursorPos);
      }
    });
  }

  function getSelection() {
    const el = taRef.current;
    if (!el) return { start: 0, end: 0, text: "" };
    const start = el.selectionStart || 0;
    const end = el.selectionEnd || 0;
    return { start, end, text: value.slice(start, end) };
  }

  function insertAtCursor(text) {
    const { start, end } = getSelection();
    const next = value.slice(0, start) + text + value.slice(end);
    setValueWithCursor(next, start + text.length);
  }

  function wrapSelection(before, after, placeholderText) {
    const { start, end, text } = getSelection();
    const body = text || placeholderText;
    const next = value.slice(0, start) + before + body + after + value.slice(end);
    const cursor = text ? start + before.length + body.length + after.length : start + before.length + body.length;
    setValueWithCursor(next, cursor);
  }

  // Applies mapLine() to every line touched by the current selection - used
  // for list/quote markers, which make sense on every selected line.
  function applyToSelectedLines(mapLine) {
    const { start, end } = getSelection();
    const lineStart = value.lastIndexOf("\n", start - 1) + 1;
    let lineEnd = value.indexOf("\n", end);
    if (lineEnd === -1) lineEnd = value.length;
    const block = value.slice(lineStart, lineEnd);
    const mapped = block.split("\n").map(mapLine).join("\n");
    const next = value.slice(0, lineStart) + mapped + value.slice(lineEnd);
    setValueWithCursor(next, lineStart + mapped.length);
  }

  // Applies mapLine() to only the line the caret is on - used for headings,
  // which should mark one line, not turn a whole selected paragraph into H2.
  function applyToCurrentLine(mapLine) {
    const { start } = getSelection();
    const lineStart = value.lastIndexOf("\n", start - 1) + 1;
    let lineEnd = value.indexOf("\n", start);
    if (lineEnd === -1) lineEnd = value.length;
    const line = value.slice(lineStart, lineEnd);
    const mapped = mapLine(line);
    const next = value.slice(0, lineStart) + mapped + value.slice(lineEnd);
    setValueWithCursor(next, lineStart + mapped.length);
  }

  function handleAction(item) {
    if (item.action === "heading") {
      applyToCurrentLine((line) => `${"#".repeat(item.arg)} ${line.replace(/^#{1,6}\s*/, "")}`);
    } else if (item.action === "wrap") {
      wrapSelection(...item.arg);
    } else if (item.action === "linePrefix") {
      applyToSelectedLines((line) => (line.trim() ? item.arg + stripLinePrefix(line) : line));
    } else if (item.action === "orderedList") {
      let n = 1;
      applyToSelectedLines((line) => (line.trim() ? `${n++}. ${stripLinePrefix(line)}` : line));
    } else if (item.action === "link") {
      const { text } = getSelection();
      wrapSelection("[", "](https://)", text || "texte du lien");
    } else if (item.action === "image") {
      insertAtCursor("![description](https://)");
    } else if (item.action === "table") {
      insertAtCursor(
        "\n| Colonne 1 | Colonne 2 | Colonne 3 |\n| --- | --- | --- |\n| ... | ... | ... |\n| ... | ... | ... |\n"
      );
    } else if (item.action === "codeBlock") {
      const { text } = getSelection();
      if (text) wrapSelection("```\n", "\n```", text);
      else insertAtCursor("\n```\ncode\n```\n");
    } else if (item.action === "hr") {
      insertAtCursor("\n---\n");
    }
  }

  function handlePaste(e) {
    const html = e.clipboardData && e.clipboardData.getData("text/html");
    const looksRich = html && /<(b|strong|i|em|h[1-6]|ul|ol|li|table|a\s|img|blockquote|code|pre)\b/i.test(html);
    if (!looksRich) return; // let the browser paste plain text natively - already valid Markdown-safe
    e.preventDefault();
    let md = htmlToMarkdown(html);
    // htmlToMarkdown trims its own output, so pasting mid-document needs its
    // own blank-line separation from whatever text already surrounds it.
    const { start, end } = getSelection();
    const before = value.slice(0, start);
    const after = value.slice(end);
    if (before && !/\n\n$/.test(before)) md = (before.endsWith("\n") ? "\n" : "\n\n") + md;
    if (after && !/^\n\n/.test(after)) md = md + (after.startsWith("\n") ? "\n" : "\n\n");
    insertAtCursor(md);
  }

  function handleKeyDown(e) {
    if (!(e.ctrlKey || e.metaKey)) return;
    if (e.key === "b") {
      e.preventDefault();
      wrapSelection("**", "**", "texte en gras");
    } else if (e.key === "i") {
      e.preventDefault();
      wrapSelection("*", "*", "texte en italique");
    }
  }

  const previewHtml = (() => {
    if (typeof window === "undefined" || !window.marked) return String(value || "");
    const { text, restore } = protectMath(value || "");
    return restore(window.marked.parse(text));
  })();

  // KaTeX runs on rendered DOM text, so it needs its own pass after every
  // preview re-render — mirrors the pattern in CoursDetailClient etc.
  useEffect(() => {
    if (mode === "write") return;
    ensureKatexCss();
    renderMathWhenReady(previewRef.current);
  }, [previewHtml, mode]);

  return (
    <div className="md-editor">
      <div className="md-toolbar">
        <div className="md-toolbar-buttons">
          {TOOLBAR.map((item, i) =>
            item.sep ? (
              <span className="md-tb-sep" key={i} />
            ) : (
              <button
                key={item.label + i}
                type="button"
                className="md-tb-btn"
                title={item.title}
                style={item.bold ? { fontWeight: 700 } : item.italic ? { fontStyle: "italic" } : undefined}
                onClick={() => handleAction(item)}
              >
                {item.label}
              </button>
            )
          )}
        </div>
        <div className="md-mode-switch">
          <button type="button" className={mode === "write" ? "active" : ""} onClick={() => setMode("write")}>
            ✏️ Écrire
          </button>
          <button type="button" className={mode === "split" ? "active" : ""} onClick={() => setMode("split")}>
            ⬍ Fractionné
          </button>
          <button type="button" className={mode === "preview" ? "active" : ""} onClick={() => setMode("preview")}>
            👁 Aperçu
          </button>
        </div>
      </div>

      <div className={`md-editor-body md-editor-body-${mode}`} style={{ minHeight }}>
        {mode !== "preview" && (
          <textarea
            ref={taRef}
            className="md-editor-textarea"
            required={required}
            placeholder={placeholder}
            value={value || ""}
            onChange={(e) => onChange(e.target.value)}
            onPaste={handlePaste}
            onKeyDown={handleKeyDown}
          />
        )}
        {mode !== "write" && (
          <div ref={previewRef} className="md-editor-preview" dangerouslySetInnerHTML={{ __html: previewHtml }} />
        )}
      </div>
    </div>
  );
}
