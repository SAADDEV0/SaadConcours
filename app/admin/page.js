"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ThemeToggle from "../_shared/ThemeToggle";

/* -------------------------------------------------------------------
 * Field-driven CRUD panel. Each resource (concours/cours/quiz/news) is
 * described by a small config below instead of a hand-written form, since
 * the four resources are structurally the same (list + add/edit form)
 * modulo which fields they have. "quiz-questions" is the one field type
 * with a dedicated widget (QuestionsEditor) instead of a plain input,
 * since raw-JSON editing of 100 nested questions is unusable.
 * ---------------------------------------------------------------- */

function emptyFormFor(fields) {
  const form = {};
  fields.forEach((f) => {
    if (f.type === "checkbox") form[f.key] = false;
    else if (f.type === "quiz-questions") form[f.key] = [];
    else form[f.key] = "";
  });
  return form;
}

function toFormValues(item, fields) {
  const form = {};
  fields.forEach((f) => {
    const v = item[f.key];
    if (f.type === "list") form[f.key] = (v || []).join(", ");
    else if (f.type === "checkbox") form[f.key] = Boolean(v);
    else if (f.type === "quiz-questions") form[f.key] = v || [];
    else form[f.key] = v ?? "";
  });
  return form;
}

function toPayload(form, fields) {
  const payload = {};
  for (const f of fields) {
    const raw = form[f.key];
    if (f.type === "list") payload[f.key] = raw.split(",").map((s) => s.trim()).filter(Boolean);
    else if (f.type === "checkbox") payload[f.key] = Boolean(raw);
    else if (f.type === "quiz-questions") payload[f.key] = raw;
    else payload[f.key] = raw;
  }
  return payload;
}

/* --------------------------- Questions editor --------------------------- */

const OPTION_LETTERS = "abcdefgh";

function emptyOption(existing) {
  return { letter: OPTION_LETTERS[existing.length] || "?", text: "" };
}

function nextQuestionId(questions) {
  const max = questions.reduce((m, q) => Math.max(m, Number(q.id) || 0), 0);
  return max + 1;
}

function QuestionsEditor({ value, onChange }) {
  const questions = value || [];
  const [filterChapter, setFilterChapter] = useState("Tous");
  const [expanded, setExpanded] = useState(() => new Set());

  const chapters = [...new Set(questions.map((q) => q.chapter).filter(Boolean))];
  const visible = questions
    .map((q, i) => i)
    .filter((i) => filterChapter === "Tous" || questions[i].chapter === filterChapter);

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
  function removeQuestion(idx) {
    if (!confirm("Supprimer cette question ?")) return;
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
          <select className="qz-filter" value={filterChapter} onChange={(e) => setFilterChapter(e.target.value)}>
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
    </div>
  );
}

/* ------------------------------ Resource panel ------------------------------ */

function ResourcePanel({ config }) {
  const { apiBase, resourceLabel, fields, columns, allowEdit = true, showIdField = false, idPlaceholder } = config;
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState(emptyFormFor(fields));
  const [customId, setCustomId] = useState("");
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");
  const [saving, setSaving] = useState(false);

  async function load() {
    setLoading(true);
    const res = await fetch(apiBase);
    const data = await res.json();
    setList(data);
    setLoading(false);
  }

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function startEdit(item) {
    setEditingId(item.id);
    setForm(toFormValues(item, fields));
    setMsg("");
    setError("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function startNew() {
    setEditingId(null);
    setForm(emptyFormFor(fields));
    setCustomId("");
    setMsg("");
    setError("");
  }

  async function onSubmit(e) {
    e.preventDefault();
    setError("");
    setMsg("");
    setSaving(true);
    try {
      const payload = toPayload(form, fields);
      let res;
      if (editingId) {
        res = await fetch(`${apiBase}/${encodeURIComponent(editingId)}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      } else {
        if (showIdField && customId) payload.id = customId;
        res = await fetch(apiBase, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      }
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Erreur lors de l'enregistrement.");
        return;
      }
      setMsg(editingId ? `${resourceLabel} mis à jour.` : `${resourceLabel} ajouté.`);
      startNew();
      await load();
    } finally {
      setSaving(false);
    }
  }

  async function onDelete(id) {
    if (!confirm(`Supprimer définitivement "${id}" ?`)) return;
    const res = await fetch(`${apiBase}/${encodeURIComponent(id)}`, { method: "DELETE" });
    if (res.ok) {
      await load();
      if (editingId === id) startNew();
    }
  }

  return (
    <>
      <div className="admin-card">
        <h2 style={{ marginTop: 0, fontSize: "1.05rem" }}>
          {editingId ? `Modifier : ${editingId}` : `Ajouter — ${resourceLabel}`}
        </h2>
        <form onSubmit={onSubmit}>
          {!editingId && showIdField && (
            <div className="admin-field">
              <label>Identifiant (optionnel, généré automatiquement sinon)</label>
              <input value={customId} onChange={(e) => setCustomId(e.target.value)} placeholder={idPlaceholder} />
            </div>
          )}
          {fields.map((f) => (
            <div className={f.type === "quiz-questions" ? "" : "admin-field"} key={f.key}>
              {f.type === "checkbox" ? (
                <label className="admin-checkbox-label">
                  <input
                    type="checkbox"
                    checked={Boolean(form[f.key])}
                    onChange={(e) => setForm({ ...form, [f.key]: e.target.checked })}
                  />
                  {f.label}
                </label>
              ) : f.type === "quiz-questions" ? (
                <div className="admin-field">
                  <label>{f.label}</label>
                  <QuestionsEditor value={form[f.key]} onChange={(v) => setForm({ ...form, [f.key]: v })} />
                </div>
              ) : (
                <>
                  <label>{f.label}</label>
                  {f.type === "textarea" ? (
                    <textarea
                      required={f.required}
                      placeholder={f.placeholder}
                      value={form[f.key] || ""}
                      onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                    />
                  ) : (
                    <input
                      required={f.required}
                      placeholder={f.placeholder}
                      value={form[f.key] || ""}
                      onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                    />
                  )}
                </>
              )}
            </div>
          ))}
          <div style={{ display: "flex", gap: 8 }}>
            <button className="admin-btn" type="submit" disabled={saving}>
              {saving ? "Enregistrement..." : editingId ? "Enregistrer les modifications" : "Ajouter"}
            </button>
            {editingId && (
              <button className="admin-btn secondary" type="button" onClick={startNew}>
                Annuler
              </button>
            )}
          </div>
          {error && <div className="admin-error">{error}</div>}
          {msg && <div className="admin-msg">{msg}</div>}
        </form>
      </div>

      <h2 style={{ fontSize: "1.05rem" }}>{loading ? "Chargement..." : `${list.length} ${resourceLabel.toLowerCase()}(s)`}</h2>
      <div className="admin-table-wrap">
        <table className="admin-table">
          <thead>
            <tr>
              {columns.map((c) => (
                <th key={c.key}>{c.label}</th>
              ))}
              <th></th>
            </tr>
          </thead>
          <tbody>
            {list.map((item) => (
              <tr key={item.id}>
                {columns.map((c) => (
                  <td key={c.key} style={c.mono ? { fontFamily: "monospace", fontSize: ".78rem" } : undefined}>
                    {c.render ? c.render(item) : String(item[c.key] ?? "")}
                  </td>
                ))}
                <td>
                  <div className="admin-row-actions">
                    {allowEdit && (
                      <button className="admin-btn secondary" onClick={() => startEdit(item)}>
                        Modifier
                      </button>
                    )}
                    <button className="admin-btn danger" onClick={() => onDelete(item.id)}>
                      Supprimer
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

/* ------------------------------- Configs ------------------------------- */

const CONCOURS_CONFIG = {
  apiBase: "/api/concours",
  resourceLabel: "Concours",
  showIdField: true,
  idPlaceholder: "ex: 2024_Rabat_FSJES_Souissi_CCA",
  fields: [
    { key: "annee", label: "Année", required: true },
    { key: "ville", label: "Ville", required: true },
    { key: "etablissement", label: "Établissement", required: true },
    { key: "filiere", label: "Filière", required: true },
    { key: "difficulte", label: "Difficulté", placeholder: "ex: 3/5" },
    { key: "modules", label: "Modules requis (séparés par des virgules)", type: "list" },
    { key: "notions_cles", label: "Notions clés" },
    { key: "enonce_md", label: "Énoncé (Markdown)", type: "textarea", required: true },
    { key: "source", label: "Source" },
    { key: "images", label: "Images (chemins séparés par des virgules)", type: "list" },
  ],
  columns: [
    { key: "id", label: "ID", mono: true },
    { key: "etablissement", label: "Établissement" },
    { key: "ville", label: "Ville" },
    { key: "filiere", label: "Filière" },
    { key: "annee", label: "Année" },
  ],
};

const COURS_CONFIG = {
  apiBase: "/api/cours",
  resourceLabel: "Cours",
  fields: [
    { key: "module", label: "Module", required: true, placeholder: "ex: Analyse Financière" },
    { key: "title", label: "Titre", required: true, placeholder: "ex: Cours — Analyse Financière" },
    { key: "description", label: "Description" },
    { key: "content", label: "Contenu (Markdown)", type: "textarea", required: true },
    { key: "available", label: "Disponible", type: "checkbox" },
  ],
  columns: [
    { key: "id", label: "ID", mono: true },
    { key: "module", label: "Module" },
    { key: "title", label: "Titre" },
    { key: "available", label: "Disponible", render: (i) => (i.available ? "✅" : "—") },
  ],
};

const QUIZ_CONFIG = {
  apiBase: "/api/quiz",
  resourceLabel: "Évaluation",
  fields: [
    { key: "module", label: "Module", required: true, placeholder: "ex: Analyse Financière" },
    { key: "title", label: "Titre", required: true, placeholder: "ex: Concours Blanc — Analyse Financière" },
    { key: "description", label: "Description" },
    { key: "questions", label: "Questions", type: "quiz-questions" },
    { key: "available", label: "Disponible", type: "checkbox" },
  ],
  columns: [
    { key: "id", label: "ID", mono: true },
    { key: "module", label: "Module" },
    { key: "title", label: "Titre" },
    { key: "nb", label: "Questions", render: (i) => (i.questions || []).length },
    { key: "available", label: "Disponible", render: (i) => (i.available ? "✅" : "—") },
  ],
};

const NEWS_CONFIG = {
  apiBase: "/api/news",
  resourceLabel: "News",
  allowEdit: false,
  fields: [
    { key: "titre", label: "Titre", required: true },
    { key: "etablissement", label: "Établissement", placeholder: "ex: FSJES, ENCG, FEG" },
    { key: "ville", label: "Ville" },
    { key: "filiere", label: "Filière" },
    { key: "date_limite", label: "Date limite", placeholder: "AAAA-MM-JJ" },
    { key: "date_publication", label: "Date de publication", placeholder: "AAAA-MM-JJ" },
    { key: "cloture", label: "Clôturé", type: "checkbox" },
    { key: "lien_inscription", label: "Lien d'inscription" },
    { key: "source", label: "Source", required: true },
  ],
  columns: [
    { key: "titre", label: "Titre" },
    { key: "etablissement", label: "Étab." },
    { key: "ville", label: "Ville" },
    { key: "date_limite", label: "Date limite" },
    { key: "cloture", label: "Clôturé", render: (i) => (i.cloture ? "✅" : "—") },
  ],
};

const TABS = [
  { key: "concours", label: "📚 Concours", config: CONCOURS_CONFIG },
  { key: "cours", label: "📖 Cours", config: COURS_CONFIG },
  { key: "quiz", label: "📝 Évaluation", config: QUIZ_CONFIG },
  { key: "news", label: "🆕 News", config: NEWS_CONFIG },
];

export default function AdminPage() {
  const router = useRouter();
  const [tab, setTab] = useState("concours");

  async function onLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  }

  const active = TABS.find((t) => t.key === tab);

  return (
    <div className="admin-wrap">
      <div className="admin-topbar">
        <a className="admin-brand" href="/">
          <span className="brand-saad">Saad</span><span className="brand-concours">Concours</span>
          <span className="admin-brand-tag">Admin</span>
        </a>
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <ThemeToggle />
          <a className="admin-btn secondary" href="/" style={{ textDecoration: "none" }}>
            ← Voir le site
          </a>
          <button className="admin-btn secondary" onClick={onLogout}>
            Déconnexion
          </button>
        </div>
      </div>

      <div className="admin-tabs">
        {TABS.map((t) => (
          <button
            key={t.key}
            className={"admin-tab-btn" + (t.key === tab ? " active" : "")}
            onClick={() => setTab(t.key)}
            type="button"
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* key={tab} forces a remount on tab switch, so each panel gets its own fresh state */}
      <ResourcePanel key={tab} config={active.config} />
    </div>
  );
}
