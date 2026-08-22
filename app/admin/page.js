"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import ThemeToggle from "../_shared/ThemeToggle";
import { pub } from "../_shared/chrome";

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
    else if (f.type === "image-list") form[f.key] = [];
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
    else if (f.type === "image-list") form[f.key] = v || [];
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
    else if (f.type === "image-list") payload[f.key] = raw;
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

/* ----------------------------- Image list editor ----------------------------- *
 * Uploads go straight to GitHub via /api/admin/upload-image, under
 * images/<ville>/<concoursId>/<filename> — same convention as the
 * pre-existing scanned images in the repo. Needs a saved concoursId and a
 * ville to build that path, so uploading is disabled until the entry has
 * been created (matches how enonce_md/corrige_md mirrors only sync after
 * the concours itself exists).
 */

function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result).split(",")[1] || "");
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function ImageListEditor({ value, onChange, concoursId, ville }) {
  const images = value || [];
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");
  const canUpload = Boolean(concoursId) && Boolean((ville || "").trim());

  async function handleFiles(fileList) {
    setError("");
    const files = Array.from(fileList || []);
    if (!files.length) return;
    setUploading(true);
    try {
      const added = [];
      for (const file of files) {
        const dataBase64 = await fileToBase64(file);
        const res = await fetch("/api/admin/upload-image", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ville, concoursId, filename: file.name, dataBase64 }),
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || `Échec de l'envoi de ${file.name}`);
        added.push(data.path);
      }
      onChange([...images, ...added]);
    } catch (e) {
      setError(e.message || "Échec de l'envoi.");
    } finally {
      setUploading(false);
    }
  }

  function removeAt(idx) {
    onChange(images.filter((_, i) => i !== idx));
  }

  return (
    <div>
      {images.length > 0 && (
        <div className="admin-images">
          {images.map((path, idx) => (
            <div className="admin-image-chip" key={path + idx}>
              <img src={pub(path)} alt="" loading="lazy" />
              <button type="button" className="admin-image-remove" onClick={() => removeAt(idx)} title="Retirer">
                ✕
              </button>
            </div>
          ))}
        </div>
      )}
      {canUpload ? (
        <>
          <input
            type="file"
            accept="image/png,image/jpeg,image/webp,image/gif"
            multiple
            disabled={uploading}
            onChange={(e) => handleFiles(e.target.files)}
          />
          {uploading && <div className="admin-image-hint">Envoi en cours...</div>}
          {error && <div className="admin-error">{error}</div>}
        </>
      ) : (
        <div className="admin-image-hint">
          Enregistrez d'abord le concours (avec une ville renseignée) pour pouvoir ajouter des images.
        </div>
      )}
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
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(() => new Set());
  const [previewOpen, setPreviewOpen] = useState(() => new Set());
  const [bulkBusy, setBulkBusy] = useState(false);

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

  // Searches visible columns AND the full text fields (enonce_md,
  // corrige_md, cours content...) even though those aren't shown in the
  // table — otherwise finding "which concours mentions le seuil de
  // signification" means opening every single one by hand.
  const filteredList = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return list;
    return list.filter(
      (item) =>
        columns.some((c) => {
          const raw = c.render ? c.render(item) : item[c.key];
          return String(raw ?? "").toLowerCase().includes(q);
        }) ||
        fields.some((f) => {
          if (f.type === "checkbox" || f.type === "quiz-questions" || f.type === "image-list") return false;
          const raw = item[f.key];
          return typeof raw === "string" && raw.toLowerCase().includes(q);
        })
    );
  }, [list, search, columns, fields]);

  const checkboxFields = fields.filter((f) => f.type === "checkbox");

  function toggleSelected(id) {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  function toggleSelectAllVisible() {
    setSelected((prev) => {
      const visibleIds = filteredList.map((i) => i.id);
      const allSelected = visibleIds.length > 0 && visibleIds.every((id) => prev.has(id));
      if (allSelected) return new Set([...prev].filter((id) => !visibleIds.includes(id)));
      return new Set([...prev, ...visibleIds]);
    });
  }

  function togglePreview(key) {
    setPreviewOpen((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  }

  function findDuplicate() {
    if (!config.duplicateKeys || editingId) return null;
    return list.find((item) => config.duplicateKeys.every((k) => String(item[k] || "").trim().toLowerCase() === String(form[k] || "").trim().toLowerCase()));
  }

  async function onBulkDelete() {
    if (!selected.size) return;
    if (!confirm(`Supprimer définitivement ${selected.size} élément(s) ?`)) return;
    setBulkBusy(true);
    try {
      for (const id of selected) {
        await fetch(`${apiBase}/${encodeURIComponent(id)}`, { method: "DELETE" });
      }
      setSelected(new Set());
      await load();
    } finally {
      setBulkBusy(false);
    }
  }

  async function onBulkSetCheckbox(key, value) {
    if (!selected.size) return;
    setBulkBusy(true);
    try {
      for (const id of selected) {
        await fetch(`${apiBase}/${encodeURIComponent(id)}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ [key]: value }),
        });
      }
      setSelected(new Set());
      await load();
    } finally {
      setBulkBusy(false);
    }
  }

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
    const dup = findDuplicate();
    if (dup && !confirm(`Un ${resourceLabel.toLowerCase()} similaire existe déjà (${dup.id}). Ajouter quand même ?`)) {
      return;
    }
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
              ) : f.type === "image-list" ? (
                <>
                  <label>{f.label}</label>
                  <ImageListEditor
                    value={form[f.key]}
                    onChange={(v) => setForm({ ...form, [f.key]: v })}
                    concoursId={editingId}
                    ville={form.ville}
                  />
                </>
              ) : f.markdown ? (
                <>
                  <div className="admin-md-field-head">
                    <label style={{ margin: 0 }}>{f.label}</label>
                    <button type="button" className="admin-md-toggle" onClick={() => togglePreview(f.key)}>
                      {previewOpen.has(f.key) ? "✏️ Éditer" : "👁 Aperçu"}
                    </button>
                  </div>
                  {previewOpen.has(f.key) ? (
                    <div
                      className="admin-md-preview"
                      dangerouslySetInnerHTML={{
                        __html:
                          typeof window !== "undefined" && window.marked
                            ? window.marked.parse(form[f.key] || "")
                            : String(form[f.key] || ""),
                      }}
                    />
                  ) : (
                    <textarea
                      required={f.required}
                      placeholder={f.placeholder}
                      value={form[f.key] || ""}
                      onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                    />
                  )}
                </>
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

      <h2 style={{ fontSize: "1.05rem" }}>{loading ? "Chargement..." : `${filteredList.length} / ${list.length} ${resourceLabel.toLowerCase()}(s)`}</h2>

      <div className="admin-toolbar">
        <input
          className="admin-search-input"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder={`Rechercher parmi les ${resourceLabel.toLowerCase()}s...`}
        />
      </div>

      {selected.size > 0 && (
        <div className="admin-bulkbar">
          <strong>{selected.size} sélectionné(s)</strong>
          {checkboxFields.map((f) => (
            <span key={f.key} style={{ display: "flex", gap: 6 }}>
              <button className="admin-btn secondary" disabled={bulkBusy} onClick={() => onBulkSetCheckbox(f.key, true)}>
                Marquer "{f.label}" ✓
              </button>
              <button className="admin-btn secondary" disabled={bulkBusy} onClick={() => onBulkSetCheckbox(f.key, false)}>
                Marquer "{f.label}" ✗
              </button>
            </span>
          ))}
          <button className="admin-btn danger" disabled={bulkBusy} onClick={onBulkDelete}>
            Supprimer la sélection
          </button>
          <button className="admin-btn secondary" disabled={bulkBusy} onClick={() => setSelected(new Set())}>
            Annuler la sélection
          </button>
        </div>
      )}

      <div className="admin-table-wrap">
        <table className="admin-table">
          <thead>
            <tr>
              <th>
                <input
                  type="checkbox"
                  checked={filteredList.length > 0 && filteredList.every((i) => selected.has(i.id))}
                  onChange={toggleSelectAllVisible}
                />
              </th>
              {columns.map((c) => (
                <th key={c.key}>{c.label}</th>
              ))}
              <th></th>
            </tr>
          </thead>
          <tbody>
            {filteredList.map((item) => (
              <tr key={item.id}>
                <td>
                  <input type="checkbox" checked={selected.has(item.id)} onChange={() => toggleSelected(item.id)} />
                </td>
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
    { key: "enonce_md", label: "Énoncé (Markdown)", type: "textarea", required: true, markdown: true },
    {
      key: "corrige_md",
      label: "Corrigé (Markdown, optionnel — indicatif, à vérifier avant publication)",
      type: "textarea",
      markdown: true,
    },
    { key: "source", label: "Source" },
    { key: "images", label: "Images", type: "image-list" },
  ],
  columns: [
    { key: "id", label: "ID", mono: true },
    { key: "etablissement", label: "Établissement" },
    { key: "ville", label: "Ville" },
    { key: "filiere", label: "Filière" },
    { key: "annee", label: "Année" },
    { key: "corrige", label: "Corrigé", render: (i) => (i.corrige_md ? "✅" : "—") },
  ],
  duplicateKeys: ["annee", "ville", "etablissement", "filiere"],
};

const COURS_CONFIG = {
  apiBase: "/api/cours",
  resourceLabel: "Cours",
  fields: [
    { key: "module", label: "Module", required: true, placeholder: "ex: Analyse Financière" },
    { key: "title", label: "Titre", required: true, placeholder: "ex: Cours — Analyse Financière" },
    { key: "description", label: "Description" },
    { key: "content", label: "Contenu (Markdown)", type: "textarea", required: true, markdown: true },
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

/* -------------------------------- Dashboard -------------------------------- */

function StatCard({ icon, tone, label, value, sub }) {
  return (
    <div className={"stat-card tone-" + (tone || "default")}>
      <div className="stat-card-icon">{icon}</div>
      <div>
        <div className="stat-card-value">{value}</div>
        <div className="stat-card-label">{label}</div>
        {sub && <div className="stat-card-sub">{sub}</div>}
      </div>
    </div>
  );
}

function DashboardCard({ title, action, children }) {
  return (
    <div className="admin-card dash-card">
      <div className="dash-card-head">
        <h2>{title}</h2>
        {action}
      </div>
      {children}
    </div>
  );
}

function StatsPanel({ onNavigate }) {
  const [stats, setStats] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api/admin/stats")
      .then((res) => {
        if (!res.ok) throw new Error("Erreur lors du chargement des statistiques.");
        return res.json();
      })
      .then(setStats)
      .catch((e) => setError(e.message));
  }, []);

  const greeting = useMemo(() => {
    const h = new Date().getHours();
    if (h < 12) return "Bonjour";
    if (h < 18) return "Bon après-midi";
    return "Bonsoir";
  }, []);

  if (error) {
    return (
      <div className="admin-card">
        <div className="admin-error">{error}</div>
      </div>
    );
  }
  if (!stats) {
    return <div className="admin-card">Chargement des statistiques...</div>;
  }

  const maxDay = Math.max(1, ...stats.pdfLast7Days.map(([, n]) => n));
  const pdfThisWeek = stats.pdfLast7Days.reduce((sum, [, n]) => sum + n, 0);
  const dayLabel = (d) =>
    new Date(d + "T00:00:00").toLocaleDateString("fr-FR", { weekday: "short" }).replace(".", "");

  return (
    <>
      <div className="dash-hero">
        <div>
          <div className="dash-hero-greeting">
            {greeting} 👋 — voici l'état du site {new Date().toLocaleDateString("fr-FR", { day: "numeric", month: "long" })}.
          </div>
        </div>
        <div className="dash-quick-actions">
          <button className="admin-btn" type="button" onClick={() => onNavigate("concours")}>
            + Concours
          </button>
          <button className="admin-btn secondary" type="button" onClick={() => onNavigate("cours")}>
            + Cours
          </button>
          <button className="admin-btn secondary" type="button" onClick={() => onNavigate("quiz")}>
            + Évaluation
          </button>
          <button className="admin-btn secondary" type="button" onClick={() => onNavigate("news")}>
            + News
          </button>
          <a className="admin-btn secondary" href="/api/admin/export?format=json" style={{ textDecoration: "none" }}>
            ⬇ Export JSON
          </a>
          <a className="admin-btn secondary" href="/api/admin/export?format=csv" style={{ textDecoration: "none" }}>
            ⬇ Export CSV
          </a>
        </div>
      </div>

      <div className="stat-grid">
        <StatCard icon="📄" tone="indigo" label="PDF téléchargés aujourd'hui" value={stats.pdfToday} />
        <StatCard icon="📈" tone="violet" label="PDF cette semaine" value={pdfThisWeek} />
        <StatCard icon="🗂️" tone="indigo" label="PDF au total" value={stats.pdfTotal} />
        <StatCard icon="👁️" tone="amber" label="Visiteurs aujourd'hui" value={stats.visitsToday ?? 0} />
        <StatCard icon="🌍" tone="amber" label="Visiteurs (total)" value={stats.totalVisits ?? "—"} />
        <StatCard
          icon="📚"
          tone="green"
          label="Concours"
          value={stats.counts.concours}
          sub={`${stats.counts.concoursAvecCorrige} avec corrigé`}
        />
        <StatCard icon="📖" tone="green" label="Fiches de cours" value={stats.counts.cours} />
        <StatCard icon="📝" tone="green" label="Évaluations" value={stats.counts.quiz} />
        <StatCard
          icon="🆕"
          tone="amber"
          label="Concours ouverts (news)"
          value={stats.counts.newsOuvertes}
          sub={`${stats.counts.news} au total`}
        />
      </div>

      <div className="dash-grid-2">
        <DashboardCard title="PDF téléchargés — 7 derniers jours">
          <div className="stat-bars">
            {stats.pdfLast7Days.map(([day, n]) => (
              <div className="stat-bar-col" key={day}>
                <div className="stat-bar-track">
                  <div
                    className="stat-bar"
                    style={{ height: `${Math.max(4, (n / maxDay) * 100)}%` }}
                    title={`${n} le ${day}`}
                  />
                </div>
                <div className="stat-bar-value">{n}</div>
                <div className="stat-bar-label">{dayLabel(day)}</div>
              </div>
            ))}
          </div>
          <div className="admin-row-actions" style={{ marginTop: 14 }}>
            <span className="admin-image-hint">Concours : {stats.pdfByKind.concours || 0}</span>
            <span className="admin-image-hint">Cours : {stats.pdfByKind.cours || 0}</span>
            <span className="admin-image-hint">Évaluation : {stats.pdfByKind.evaluation || 0}</span>
          </div>
        </DashboardCard>

        <DashboardCard title="Concours les plus consultés">
          {stats.topConcours.length ? (
            <ol className="stat-rank-list">
              {stats.topConcours.map((c) => (
                <li key={c.id}>
                  <span>{c.label}</span>
                  <strong>
                    {c.views} vue{c.views > 1 ? "s" : ""}
                  </strong>
                </li>
              ))}
            </ol>
          ) : (
            <div className="empty-state">Pas encore de données — reviens après quelques visites sur le site.</div>
          )}
        </DashboardCard>
      </div>

      <div className="dash-grid-2">
        <DashboardCard
          title="⚠️ Concours sans corrigé"
          action={
            <button className="admin-md-toggle" type="button" onClick={() => onNavigate("concours")}>
              Voir tout →
            </button>
          }
        >
          {stats.concoursSansCorrige.length ? (
            <ul className="dash-list">
              {stats.concoursSansCorrige.map((c) => (
                <li key={c.id}>{c.label}</li>
              ))}
            </ul>
          ) : (
            <div className="empty-state">Tous les concours ont un corrigé. 🎉</div>
          )}
        </DashboardCard>

        <DashboardCard
          title="⏰ Concours ouverts qui ferment bientôt"
          action={
            <button className="admin-md-toggle" type="button" onClick={() => onNavigate("news")}>
              Voir tout →
            </button>
          }
        >
          {stats.newsExpiringSoon.length ? (
            <ul className="dash-list">
              {stats.newsExpiringSoon.map((n) => (
                <li key={n.id}>
                  {n.titre} {n.ville ? `— ${n.ville}` : ""} <span className="dash-list-date">({n.date_limite})</span>
                </li>
              ))}
            </ul>
          ) : (
            <div className="empty-state">Rien ne ferme dans les 14 prochains jours.</div>
          )}
        </DashboardCard>
      </div>

      <DashboardCard
        title="🕓 Derniers concours ajoutés"
        action={
          <button className="admin-md-toggle" type="button" onClick={() => onNavigate("concours")}>
            Voir tout →
          </button>
        }
      >
        {stats.recentConcours.length ? (
          <ul className="dash-list">
            {stats.recentConcours.map((c) => (
              <li key={c.id}>
                {c.label} {c.hasCorrige ? "✅" : ""}
              </li>
            ))}
          </ul>
        ) : (
          <div className="empty-state">Aucun concours pour l'instant.</div>
        )}
      </DashboardCard>
    </>
  );
}

/* -------------------------------- Settings -------------------------------- */

const SOCIAL_FIELDS = [
  { key: "facebook", label: "Facebook", placeholder: "https://facebook.com/tapage" },
  { key: "instagram", label: "Instagram", placeholder: "https://instagram.com/toncompte" },
  { key: "whatsapp", label: "WhatsApp", placeholder: "https://wa.me/2126..." },
  { key: "tiktok", label: "TikTok", placeholder: "https://tiktok.com/@toncompte" },
  { key: "youtube", label: "YouTube", placeholder: "https://youtube.com/@tachaine" },
  { key: "telegram", label: "Telegram", placeholder: "https://t.me/toncanal" },
  { key: "email", label: "Email de contact", placeholder: "contact@saadconcours.space" },
];

function SettingsPanel() {
  const [form, setForm] = useState(null);
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api/settings")
      .then((r) => r.json())
      .then(setForm)
      .catch(() => setError("Erreur lors du chargement des réglages."));
  }, []);

  async function onSubmit(e) {
    e.preventDefault();
    setSaving(true);
    setMsg("");
    setError("");
    try {
      const res = await fetch("/api/settings", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Erreur lors de l'enregistrement.");
        return;
      }
      setForm(data);
      setMsg("Réglages enregistrés — visibles dans le pied de page du site.");
    } finally {
      setSaving(false);
    }
  }

  if (!form) return <div className="admin-card">Chargement...</div>;

  return (
    <div className="admin-card">
      <h2 style={{ marginTop: 0, fontSize: "1.05rem" }}>Réseaux sociaux</h2>
      <p className="admin-image-hint" style={{ marginBottom: 16 }}>
        Laisse un champ vide pour ne pas afficher l'icône correspondante dans le pied de page du site.
      </p>
      <form onSubmit={onSubmit}>
        {SOCIAL_FIELDS.map((f) => (
          <div className="admin-field" key={f.key}>
            <label>{f.label}</label>
            <input
              value={form[f.key] || ""}
              placeholder={f.placeholder}
              onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
            />
          </div>
        ))}
        <button className="admin-btn" type="submit" disabled={saving}>
          {saving ? "Enregistrement..." : "Enregistrer"}
        </button>
        {error && <div className="admin-error">{error}</div>}
        {msg && <div className="admin-msg">{msg}</div>}
      </form>
    </div>
  );
}

const TABS = [
  { key: "dashboard", label: "Tableau de bord", icon: "📊" },
  { key: "concours", label: "Concours", icon: "📚", config: CONCOURS_CONFIG },
  { key: "cours", label: "Cours", icon: "📖", config: COURS_CONFIG },
  { key: "quiz", label: "Évaluation", icon: "📝", config: QUIZ_CONFIG },
  { key: "news", label: "News", icon: "🆕", config: NEWS_CONFIG },
  { key: "settings", label: "Réglages", icon: "⚙️" },
];

export default function AdminPage() {
  const router = useRouter();
  const [tab, setTab] = useState("dashboard");

  async function onLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  }

  const active = TABS.find((t) => t.key === tab);

  return (
    <div className="admin-shell">
      <aside className="admin-sidebar">
        <a className="admin-brand" href="/">
          <span className="brand-saad">Saad</span>
          <span className="brand-concours">Concours</span>
          <span className="admin-brand-tag">Admin</span>
        </a>
        <nav className="admin-nav">
          {TABS.map((t) => (
            <button
              key={t.key}
              className={"admin-nav-btn" + (t.key === tab ? " active" : "")}
              onClick={() => setTab(t.key)}
              type="button"
            >
              <span className="admin-nav-icon">{t.icon}</span>
              {t.label}
            </button>
          ))}
        </nav>
        <div className="admin-sidebar-footer">
          <ThemeToggle />
          <a className="admin-btn secondary" href="/" style={{ textDecoration: "none", textAlign: "center" }}>
            ← Voir le site
          </a>
          <button className="admin-btn secondary" onClick={onLogout}>
            Déconnexion
          </button>
        </div>
      </aside>

      <main className="admin-main">
        <div className="admin-content">
          <h1 className="admin-page-title">
            {active.icon} {active.label}
          </h1>
          {/* key={tab} forces a remount on tab switch, so each panel gets its own fresh state */}
          {tab === "dashboard" ? (
            <StatsPanel key="dashboard" onNavigate={setTab} />
          ) : tab === "settings" ? (
            <SettingsPanel key="settings" />
          ) : (
            <ResourcePanel key={tab} config={active.config} />
          )}
        </div>
      </main>
    </div>
  );
}
