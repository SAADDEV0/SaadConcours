"use client";

import { useState } from "react";
import { emptyOption, nextQuestionId } from "../../_lib/resourceForm";
import { useConfirm } from "../ui/ConfirmProvider";

const QUESTIONS_PAGE_SIZE = 40;

export default function QuestionsEditor({ value, onChange }) {
  const questions = value || [];
  const [filterChapter, setFilterChapter] = useState("Tous");
  const [expanded, setExpanded] = useState(() => new Set());
  const [visibleCount, setVisibleCount] = useState(QUESTIONS_PAGE_SIZE);
  const confirm = useConfirm();

  const chapters = [...new Set(questions.map((q) => q.chapter).filter(Boolean))];
  const filtered = questions
    .map((q, i) => i)
    .filter((i) => filterChapter === "Tous" || questions[i].chapter === filterChapter);
  const visible = filtered.slice(0, visibleCount);

  function updateQuestion(idx, patch) {
    onChange(questions.map((q, i) => (i === idx ? { ...q, ...patch } : q)));
  }
  function toggleExpanded(id) {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }
  function addQuestion() {
    const q = {
      id: nextQuestionId(questions),
      chapter: filterChapter !== "Tous" ? filterChapter : "",
      question: "",
      options: [{ letter: "a", text: "" }, { letter: "b", text: "" }],
      correct: [],
      justification: "",
    };
    onChange([...questions, q]);
    setExpanded((prev) => new Set(prev).add(q.id));
  }
  async function removeQuestion(idx) {
    if (!(await confirm({ title: "Supprimer cette question ?", confirmLabel: "Supprimer", tone: "danger" }))) return;
    onChange(questions.filter((_, i) => i !== idx));
  }
  function moveQuestion(idx, dir) {
    const j = idx + dir;
    if (j < 0 || j >= questions.length) return;
    const next = [...questions];
    [next[idx], next[j]] = [next[j], next[idx]];
    onChange(next);
  }
  function updateOption(idx, optIdx, patch) {
    const q = questions[idx];
    const options = q.options.map((o, i) => (i === optIdx ? { ...o, ...patch } : o));
    updateQuestion(idx, { options });
  }
  function addOption(idx) {
    const q = questions[idx];
    updateQuestion(idx, { options: [...q.options, emptyOption(q.options)] });
  }
  function removeOption(idx, optIdx) {
    const q = questions[idx];
    const letter = q.options[optIdx].letter;
    updateQuestion(idx, {
      options: q.options.filter((_, i) => i !== optIdx),
      correct: (q.correct || []).filter((c) => c !== letter),
    });
  }
  function toggleCorrect(idx, letter) {
    const q = questions[idx];
    const has = (q.correct || []).includes(letter);
    updateQuestion(idx, { correct: has ? q.correct.filter((c) => c !== letter) : [...(q.correct || []), letter] });
  }

  return (
    <div className="qz-editor">
      <div className="qz-toolbar">
        <span className="qz-count">{questions.length} question{questions.length > 1 ? "s" : ""}</span>
        {chapters.length > 1 && (
          <select
            className="qz-filter"
            value={filterChapter}
            onChange={(e) => {
              setFilterChapter(e.target.value);
              setVisibleCount(QUESTIONS_PAGE_SIZE);
            }}
          >
            <option value="Tous">Tous les chapitres</option>
            {chapters.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        )}
        <button type="button" className="admin-btn secondary" onClick={addQuestion}>
          + Ajouter une question
        </button>
      </div>

      <div className="qz-list">
        {visible.map((idx) => {
          const q = questions[idx];
          const isOpen = expanded.has(q.id);
          return (
            <div className="qz-question" key={q.id}>
              <div className="qz-question-row" onClick={() => toggleExpanded(q.id)}>
                <span className="qz-question-num">Q{idx + 1}</span>
                {q.chapter && <span className="qz-question-chapter">{q.chapter}</span>}
                <span className="qz-question-preview">{q.question || "(question vide)"}</span>
                <span className="qz-question-toggle">{isOpen ? "▲" : "▼"}</span>
              </div>

              {isOpen && (
                <div className="qz-question-body" onClick={(e) => e.stopPropagation()}>
                  <div className="admin-field">
                    <label>Chapitre</label>
                    <input value={q.chapter || ""} onChange={(e) => updateQuestion(idx, { chapter: e.target.value })} />
                  </div>
                  <div className="admin-field">
                    <label>Énoncé de la question</label>
                    <textarea
                      style={{ minHeight: 70 }}
                      value={q.question || ""}
                      onChange={(e) => updateQuestion(idx, { question: e.target.value })}
                    />
                  </div>
                  <div className="admin-field">
                    <label>Options (coche la ou les bonnes réponses)</label>
                    {(q.options || []).map((o, oIdx) => (
                      <div className="qz-option" key={oIdx}>
                        <input
                          type="checkbox"
                          className="qz-option-check"
                          checked={(q.correct || []).includes(o.letter)}
                          onChange={() => toggleCorrect(idx, o.letter)}
                          title="Réponse correcte"
                        />
                        <input
                          className="qz-option-letter"
                          value={o.letter}
                          maxLength={2}
                          onChange={(e) => updateOption(idx, oIdx, { letter: e.target.value })}
                        />
                        <input
                          className="qz-option-text"
                          placeholder="Texte de la réponse"
                          value={o.text || ""}
                          onChange={(e) => updateOption(idx, oIdx, { text: e.target.value })}
                        />
                        <button type="button" className="qz-option-remove" onClick={() => removeOption(idx, oIdx)}>
                          ✕
                        </button>
                      </div>
                    ))}
                    <button type="button" className="admin-btn secondary" style={{ marginTop: 6 }} onClick={() => addOption(idx)}>
                      + Option
                    </button>
                  </div>
                  <div className="admin-field">
                    <label>Justification (optionnel)</label>
                    <input value={q.justification || ""} onChange={(e) => updateQuestion(idx, { justification: e.target.value })} />
                  </div>
                  <div className="qz-question-actions">
                    <button type="button" className="admin-btn secondary" onClick={() => moveQuestion(idx, -1)} disabled={idx === 0}>
                      ↑ Monter
                    </button>
                    <button
                      type="button"
                      className="admin-btn secondary"
                      onClick={() => moveQuestion(idx, 1)}
                      disabled={idx === questions.length - 1}
                    >
                      ↓ Descendre
                    </button>
                    <button type="button" className="admin-btn danger" onClick={() => removeQuestion(idx)}>
                      Supprimer la question
                    </button>
                  </div>
                </div>
              )}
            </div>
          );
        })}
        {!visible.length && <div className="empty-state">Aucune question. Clique sur "+ Ajouter une question" pour commencer.</div>}
      </div>
      {filtered.length > visible.length && (
        <div className="admin-load-more">
          <button type="button" className="admin-btn secondary" onClick={() => setVisibleCount((n) => n + QUESTIONS_PAGE_SIZE)}>
            Afficher plus ({filtered.length - visible.length} restante{filtered.length - visible.length > 1 ? "s" : ""})
          </button>
        </div>
      )}
    </div>
  );
}
