"use client";

import { useMemo, useState } from "react";
import Icon from "./Icon";
import { Dialog } from "./feedback";
import { MarkdownPreview } from "./MarkdownField";
import { matchQuery } from "../_lib/format";

const LETTERS = "abcdefgh";

function blankQuestion(chapter = "") {
  return {
    chapter,
    question: "",
    options: ["a", "b", "c", "d"].map((letter) => ({ letter, text: "" })),
    correct: [],
    justification: "",
  };
}

function relabel(options) {
  return options.map((o, i) => ({ ...o, letter: LETTERS[i] }));
}

// Format de collage :
//   Q: énoncé            (ou « 1. énoncé »)
//   a) proposition …
//   Réponse: b           (plusieurs : « a, c »)
//   Justification: …
//   Chapitre: …          (facultatif, s'applique aux questions suivantes)
export function parseQuestions(text) {
  const out = [];
  let chapter = "";
  let cur = null;
  const push = () => cur && cur.question && out.push(cur);
  for (const raw of text.split(/\r?\n/)) {
    const line = raw.trim();
    if (!line) continue;
    let m;
    if ((m = line.match(/^chapitre\s*:\s*(.+)$/i))) {
      chapter = m[1].trim();
    } else if ((m = line.match(/^(?:q\s*\d*\s*[:.)-]|\d+\s*[.)-])\s*(.+)$/i))) {
      push();
      cur = { ...blankQuestion(chapter), options: [], question: m[1].trim() };
    } else if (cur && (m = line.match(/^([a-h])\s*[).:-]\s*(.+)$/i))) {
      cur.options.push({ letter: m[1].toLowerCase(), text: m[2].trim() });
    } else if (cur && (m = line.match(/^(?:réponses?|reponses?|bonne réponse|correct)\s*:\s*(.+)$/i))) {
      cur.correct = m[1].toLowerCase().match(/[a-h]/g) || [];
    } else if (cur && (m = line.match(/^(?:justification|explication)\s*:\s*(.+)$/i))) {
      cur.justification = m[1].trim();
    } else if (cur) {
      if (cur.justification) cur.justification += " " + line;
      else if (cur.options.length) cur.options[cur.options.length - 1].text += " " + line;
      else cur.question += " " + line;
    }
  }
  push();
  return out.map((q) => ({ ...q, options: relabel(q.options) }));
}

function QuestionEditor({ q, index, onChange, onRemove, onMove, onDuplicate, chapters, open, onToggle }) {
  const ok = (q.correct || []).length > 0 && (q.options || []).filter((o) => o.text.trim()).length >= 2;
  return (
    <div className="ax-q">
      <div className="ax-q-head" onClick={onToggle}>
        <span className="ax-q-num">{index + 1}</span>
        <span className="ax-q-text">{q.question || <em className="ax-muted">Question sans énoncé</em>}</span>
        {!ok && <span className="ax-pill amber">à compléter</span>}
        {q.chapter && <span className="ax-pill ax-hide-sm" style={{ maxWidth: 200, overflow: "hidden", textOverflow: "ellipsis" }}>{q.chapter}</span>}
        <Icon name="chevronDown" size="sm" />
      </div>
      {open && (
        <div className="ax-q-body">
          <div className="ax-row">
            <div className="ax-field">
              <label className="ax-label">Chapitre</label>
              <input className="ax-input" list="ax-q-chapters" value={q.chapter || ""} onChange={(e) => onChange({ ...q, chapter: e.target.value })} />
            </div>
          </div>
          <div className="ax-field">
            <label className="ax-label">Énoncé</label>
            <textarea className="ax-textarea" rows={3} value={q.question} onChange={(e) => onChange({ ...q, question: e.target.value })} />
          </div>
          <label className="ax-label" style={{ marginBottom: 6 }}>
            Propositions <span className="ax-label-aside">clique sur la lettre pour marquer la bonne réponse</span>
          </label>
          {(q.options || []).map((o, i) => {
            const correct = (q.correct || []).includes(o.letter);
            return (
              <div className="ax-q-opt" key={i}>
                <button
                  type="button"
                  className={`letter${correct ? " correct" : ""}`}
                  onClick={() =>
                    onChange({ ...q, correct: correct ? q.correct.filter((l) => l !== o.letter) : [...(q.correct || []), o.letter].sort() })
                  }
                  aria-pressed={correct}
                  title={correct ? "Bonne réponse" : "Marquer comme bonne réponse"}
                >
                  {o.letter}
                </button>
                <input
                  className="ax-input sm"
                  value={o.text}
                  onChange={(e) => onChange({ ...q, options: q.options.map((x, j) => (j === i ? { ...x, text: e.target.value } : x)) })}
                />
                <button
                  type="button"
                  className="ax-btn ghost icon sm"
                  aria-label="Retirer la proposition"
                  onClick={() => {
                    const options = relabel(q.options.filter((_, j) => j !== i));
                    const letters = new Set(options.map((x) => x.letter));
                    onChange({ ...q, options, correct: (q.correct || []).filter((l) => letters.has(l)) });
                  }}
                >
                  <Icon name="x" size="sm" />
                </button>
              </div>
            );
          })}
          {(q.options || []).length < LETTERS.length && (
            <button type="button" className="ax-btn xs" onClick={() => onChange({ ...q, options: relabel([...(q.options || []), { letter: "", text: "" }]) })}>
              <Icon name="plus" size="sm" /> Proposition
            </button>
          )}
          <div className="ax-field ax-mt">
            <label className="ax-label">Justification</label>
            <textarea className="ax-textarea" rows={2} value={q.justification || ""} onChange={(e) => onChange({ ...q, justification: e.target.value })} />
          </div>
          {(q.question.includes("$") || (q.justification || "").includes("$")) && (
            <div className="ax-card pad-sm" style={{ marginBottom: 12 }}>
              <MarkdownPreview value={`${q.question}\n\n${q.justification ? `> ${q.justification}` : ""}`} />
            </div>
          )}
          <div className="ax-btn-row">
            <button type="button" className="ax-btn xs" onClick={() => onMove(-1)}>
              <Icon name="arrowUp" size="sm" /> Monter
            </button>
            <button type="button" className="ax-btn xs" onClick={() => onMove(1)}>
              <Icon name="arrowDown" size="sm" /> Descendre
            </button>
            <button type="button" className="ax-btn xs" onClick={onDuplicate}>
              <Icon name="copy" size="sm" /> Dupliquer
            </button>
            <button type="button" className="ax-btn xs danger ax-right" onClick={onRemove}>
              <Icon name="trash" size="sm" /> Supprimer
            </button>
          </div>
        </div>
      )}
      <datalist id="ax-q-chapters">
        {chapters.map((c) => (
          <option key={c} value={c} />
        ))}
      </datalist>
    </div>
  );
}

export default function QuestionsField({ value = [], onChange }) {
  const [open, setOpen] = useState(() => new Set());
  const [filter, setFilter] = useState("");
  const [chapter, setChapter] = useState("");
  const [pasteOpen, setPasteOpen] = useState(false);
  const [pasted, setPasted] = useState("");
  const chapters = useMemo(() => [...new Set(value.map((q) => q.chapter).filter(Boolean))], [value]);
  const parsed = useMemo(() => (pasteOpen ? parseQuestions(pasted) : []), [pasted, pasteOpen]);

  const visible = value
    .map((q, i) => ({ q, i }))
    .filter(({ q }) => (!chapter || q.chapter === chapter) && matchQuery(`${q.question} ${q.justification}`, filter));

  function update(i, q) {
    onChange(value.map((x, j) => (j === i ? q : x)));
  }
  function toggle(i) {
    setOpen((s) => {
      const n = new Set(s);
      if (n.has(i)) n.delete(i);
      else n.add(i);
      return n;
    });
  }

  return (
    <div>
      <div className="ax-toolbar">
        <div className="ax-search">
          <Icon name="search" size="sm" />
          <input className="ax-input sm" placeholder={`Filtrer ${value.length} questions…`} value={filter} onChange={(e) => setFilter(e.target.value)} />
        </div>
        {chapters.length > 1 && (
          <select className="ax-select sm" value={chapter} onChange={(e) => setChapter(e.target.value)}>
            <option value="">Tous les chapitres ({chapters.length})</option>
            {chapters.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        )}
        <button type="button" className="ax-btn sm" onClick={() => setOpen(open.size ? new Set() : new Set(value.map((_, i) => i)))}>
          {open.size ? "Tout replier" : "Tout déplier"}
        </button>
        <button type="button" className="ax-btn sm" onClick={() => setPasteOpen(true)}>
          <Icon name="upload" size="sm" /> Coller des questions
        </button>
      </div>
      {visible.map(({ q, i }) => (
        <QuestionEditor
          key={i}
          q={q}
          index={i}
          chapters={chapters}
          open={open.has(i)}
          onToggle={() => toggle(i)}
          onChange={(nq) => update(i, nq)}
          onRemove={() => onChange(value.filter((_, j) => j !== i))}
          onDuplicate={() => onChange([...value.slice(0, i + 1), structuredClone(q), ...value.slice(i + 1)])}
          onMove={(d) => {
            const j = i + d;
            if (j < 0 || j >= value.length) return;
            const next = [...value];
            [next[i], next[j]] = [next[j], next[i]];
            onChange(next);
          }}
        />
      ))}
      <button
        type="button"
        className="ax-btn"
        onClick={() => {
          onChange([...value, blankQuestion(chapter || value[value.length - 1]?.chapter || "")]);
          setOpen((s) => new Set([...s, value.length]));
        }}
      >
        <Icon name="plus" /> Ajouter une question
      </button>

      {pasteOpen && (
        <Dialog
          title="Coller des questions"
          size="wide"
          onClose={() => setPasteOpen(false)}
          footer={
            <>
              <span className="ax-muted" style={{ marginRight: "auto", fontSize: "0.84rem" }}>
                {parsed.length} question{parsed.length > 1 ? "s" : ""} reconnue{parsed.length > 1 ? "s" : ""}
              </span>
              <button type="button" className="ax-btn" onClick={() => setPasteOpen(false)}>
                Annuler
              </button>
              <button
                type="button"
                className="ax-btn primary"
                disabled={!parsed.length}
                onClick={() => {
                  onChange([...value, ...parsed]);
                  setPasted("");
                  setPasteOpen(false);
                }}
              >
                Ajouter {parsed.length || ""}
              </button>
            </>
          }
        >
          <p style={{ marginTop: 0 }}>
            Une question par bloc : <code>Q: …</code>, puis <code>a) …</code>, <code>b) …</code>, <code>Réponse: b</code>,{" "}
            <code>Justification: …</code>. Une ligne <code>Chapitre: …</code> s&apos;applique aux questions suivantes.
          </p>
          <textarea className="ax-textarea code" rows={14} value={pasted} onChange={(e) => setPasted(e.target.value)} placeholder={"Chapitre: Bilan fonctionnel\nQ: Le FRNG est égal à…\na) Ressources stables − emplois stables\nb) Actif circulant − passif circulant\nRéponse: a\nJustification: …"} />
        </Dialog>
      )}
    </div>
  );
}
