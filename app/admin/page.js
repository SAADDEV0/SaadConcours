"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import ThemeToggle from "../_shared/ThemeToggle";
import { pub } from "../_shared/chrome";
import BrandLogo from "../_shared/BrandLogo";
import MarkdownEditor from "./MarkdownEditor";

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
  const [info, setInfo] = useState("");
  const [saving, setSaving] = useState(false);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(() => new Set());
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

  async function startEdit(item) {
    setEditingId(item.id);
    setForm(toFormValues(item, fields));
    setMsg("");
    setError("");
    setInfo("");
    window.scrollTo({ top: 0, behavior: "smooth" });

    // corrige_from_github (set by GET /api/concours) means a corrigé already
    // exists in the repo's data/corriges/ folder but was never copied into
    // corrige_md — pull it in here instead of leaving the admin looking at
    // an empty field for a corrigé that already exists.
    if (item.corrige_from_github) {
      try {
        const res = await fetch(`${apiBase}/${encodeURIComponent(item.id)}/corrige`);
        if (res.ok) {
          const data = await res.json();
          setForm((prev) => ({ ...prev, corrige_md: data.corrige_md }));
          setInfo("Corrigé chargé depuis GitHub — vérifie le contenu avant d'enregistrer.");
        }
      } catch {
        // best-effort: leave the field empty if the fetch fails
      }
    }
  }

  function startNew() {
    setEditingId(null);
    setForm(emptyFormFor(fields));
    setCustomId("");
    setMsg("");
    setError("");
    setInfo("");
  }

  async function onSubmit(e) {
    e.preventDefault();
    setError("");
    setMsg("");
    setInfo("");
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
          <div className="admin-form-grid">
          {!editingId && showIdField && (
            <div className="admin-field admin-form-wide">
              <label>Identifiant (optionnel, généré automatiquement sinon)</label>
              <input value={customId} onChange={(e) => setCustomId(e.target.value)} placeholder={idPlaceholder} />
            </div>
          )}
          {fields.map((f) => {
            const isWide =
              f.type === "textarea" || f.markdown || f.type === "image-list" || f.type === "quiz-questions" || f.type === "list";
            const fieldClass = f.type === "quiz-questions" ? "admin-form-wide" : "admin-field" + (isWide ? " admin-form-wide" : "");
            return (
            <div className={fieldClass} key={f.key}>
              {f.type === "checkbox" ? (
                <label className="admin-checkbox-label">
                  <input
                    type="checkbox"
                    checked={Boolean(form[f.key])}
                    onChange={(e) => setForm({ ...form, [f.key]: e.target.checked })}
                  />
                  <span className="toggle-thumb" aria-hidden="true" />
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
                  <label>{f.label}</label>
                  <MarkdownEditor
                    value={form[f.key]}
                    onChange={(v) => setForm({ ...form, [f.key]: v })}
                    placeholder={f.placeholder}
                    required={f.required}
                  />
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
            );
          })}
          </div>
          <div className="admin-form-actions">
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
          {info && <div className="admin-info">{info}</div>}
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
                {columns.map((c) => {
                  const val = c.render ? c.render(item) : String(item[c.key] ?? "");
                  return <td key={c.key}>{c.mono ? <span className="admin-id-chip">{val}</span> : val}</td>;
                })}
                <td>
                  <div className="admin-row-actions">
                    {allowEdit && (
                      <button className="admin-icon-btn" title="Modifier" onClick={() => startEdit(item)}>
                        ✏️
                      </button>
                    )}
                    <button className="admin-icon-btn danger" title="Supprimer" onClick={() => onDelete(item.id)}>
                      🗑️
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
    { key: "filiere", label: "Filière (catégorie utilisée pour le filtre du site)", required: true },
    {
      key: "master_reel",
      label: "Nom réel du master (intitulé officiel écrit sur le sujet, ex: « Finance, Audit et Contrôle de Gestion »)",
      placeholder: "Laisser vide si l'intitulé n'apparaît pas sur le sujet",
    },
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
    { key: "master_reel", label: "Nom réel du master", render: (i) => i.master_reel || "—" },
    { key: "annee", label: "Année" },
    {
      key: "corrige",
      label: "Corrigé",
      render: (i) => (i.corrige_md ? "✅" : i.corrige_from_github ? "📄 GitHub (à valider)" : "—"),
    },
  ],
  duplicateKeys: ["annee", "ville", "etablissement", "filiere"],
};

const COURS_CONFIG = {
  apiBase: "/api/cours",
  resourceLabel: "Cours",
  fields: [
    { key: "module", label: "Module", required: true, placeholder: "ex: Analyse Financière" },
    { key: "title", label: "Titre de la fiche", required: true, placeholder: "ex: Bilan fonctionnel, SIG et ratios" },
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

// trend is computed from the real 7-day series (today vs the average of the
// previous 6 days) - never fabricated. null when there isn't enough signal
// (e.g. the previous days are all zero) so we don't show a misleading "+inf%".
function trendFromSeries(values) {
  if (!values || values.length < 2) return null;
  const today = values[values.length - 1];
  const prev = values.slice(0, -1);
  const avgPrev = prev.reduce((s, n) => s + n, 0) / prev.length;
  if (avgPrev <= 0) return null;
  const pct = ((today - avgPrev) / avgPrev) * 100;
  return Math.round(pct);
}

function StatCard({ icon, tone, label, value, sub, spark, trend }) {
  return (
    <div className={"stat-card tone-" + (tone || "default")}>
      <div className="stat-card-top">
        <div className="stat-card-icon">{icon}</div>
        {typeof trend === "number" && (
          <span className={"stat-card-trend " + (trend >= 0 ? "up" : "down")}>
            {trend >= 0 ? "↗" : "↘"} {Math.abs(trend)}%
          </span>
        )}
      </div>
      <div className="stat-card-value">{value}</div>
      <div className="stat-card-label">{label}</div>
      {sub && <div className="stat-card-sub">{sub}</div>}
      {spark && (
        <svg className="stat-card-spark" viewBox="0 0 100 28" preserveAspectRatio="none">
          <polyline
            points={spark
              .map((n, i, arr) => {
                const max = Math.max(1, ...arr);
                const x = (i / (arr.length - 1 || 1)) * 100;
                const y = 26 - (n / max) * 24;
                return `${x},${y}`;
              })
              .join(" ")}
          />
        </svg>
      )}
    </div>
  );
}

function DashboardCard({ title, sub, action, children }) {
  return (
    <div className="admin-card dash-card">
      <div className="dash-card-head">
        <div>
          <h2>{title}</h2>
          {sub && <div className="dash-card-sub">{sub}</div>}
        </div>
        {action}
      </div>
      {children}
    </div>
  );
}

// Smooth-ish area/line chart over a real daily series - no chart library,
// just an SVG path built from the points so it has zero extra dependencies.
function AreaChart({ points, formatValue }) {
  const width = 600;
  const height = 190;
  const padX = 6;
  const padTop = 14;
  const padBottom = 28;
  const max = Math.max(1, ...points.map((p) => p.value));
  const stepX = points.length > 1 ? (width - padX * 2) / (points.length - 1) : 0;
  const coords = points.map((p, i) => {
    const x = padX + i * stepX;
    const y = height - padBottom - (p.value / max) * (height - padTop - padBottom);
    return [x, y];
  });
  const linePath = coords.map(([x, y], i) => (i === 0 ? `M${x},${y}` : `L${x},${y}`)).join(" ");
  const areaPath =
    coords.length > 0
      ? `${linePath} L${coords[coords.length - 1][0]},${height - padBottom} L${coords[0][0]},${height - padBottom} Z`
      : "";

  return (
    <div className="area-chart-wrap">
      <svg viewBox={`0 0 ${width} ${height}`} className="area-chart" preserveAspectRatio="none">
        <defs>
          <linearGradient id="adminAreaGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.32" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
          </linearGradient>
        </defs>
        {areaPath && <path d={areaPath} fill="url(#adminAreaGrad)" />}
        {linePath && <path d={linePath} fill="none" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />}
        {coords.map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="3.2" className="area-chart-dot">
            <title>{`${points[i].label} — ${formatValue ? formatValue(points[i].value) : points[i].value}`}</title>
          </circle>
        ))}
      </svg>
      <div className="area-chart-labels">
        {points.map((p) => (
          <span key={p.label}>{p.label}</span>
        ))}
      </div>
    </div>
  );
}

// CSS conic-gradient donut - segments are real proportions of `total`, no
// synthetic data. Renders a neutral empty ring when total is 0.
function DonutChart({ segments, centerLabel }) {
  const total = segments.reduce((s, seg) => s + seg.value, 0);
  let cumulative = 0;
  const stops = total
    ? segments
        .map((seg) => {
          const from = (cumulative / total) * 100;
          cumulative += seg.value;
          const to = (cumulative / total) * 100;
          return `${seg.color} ${from}% ${to}%`;
        })
        .join(", ")
    : "var(--border) 0% 100%";

  return (
    <div className="donut-wrap">
      <div className="donut-chart" style={{ background: `conic-gradient(${stops})` }}>
        <div className="donut-hole">
          <strong>{total}</strong>
          <span>{centerLabel}</span>
        </div>
      </div>
      <ul className="donut-legend">
        {segments.map((seg) => (
          <li key={seg.label}>
            <span className="donut-dot" style={{ background: seg.color }} />
            {seg.label}
            <b>{total ? Math.round((seg.value / total) * 100) : 0}%</b>
          </li>
        ))}
      </ul>
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

  const pdfThisWeek = stats.pdfLast7Days.reduce((sum, [, n]) => sum + n, 0);
  const dayLabel = (d) =>
    new Date(d + "T00:00:00").toLocaleDateString("fr-FR", { weekday: "short" }).replace(".", "");
  const pdfSeries = stats.pdfLast7Days.map(([, n]) => n);
  const pdfChartPoints = stats.pdfLast7Days.map(([day, n]) => ({ label: dayLabel(day), value: n }));
  const pdfKindSegments = [
    { label: "Concours", value: stats.pdfByKind.concours || 0, color: "var(--accent)" },
    { label: "Cours", value: stats.pdfByKind.cours || 0, color: "var(--green)" },
    { label: "Évaluation", value: stats.pdfByKind.evaluation || 0, color: "var(--amber)" },
  ];

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
          <a className="admin-btn secondary" href="/api/admin/export-content" style={{ textDecoration: "none" }}>
            ⬇ Export contenu (JSON)
          </a>
        </div>
      </div>

      <div className="stat-grid">
        <StatCard
          icon="📄"
          tone="indigo"
          label="PDF téléchargés aujourd'hui"
          value={stats.pdfToday}
          spark={pdfSeries}
          trend={trendFromSeries(pdfSeries)}
        />
        <StatCard
          icon="📈"
          tone="violet"
          label="PDF cette semaine"
          value={pdfThisWeek}
          spark={pdfSeries}
        />
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
        <DashboardCard title="Téléchargements" sub="Nombre de PDF téléchargés, 7 derniers jours">
          <AreaChart points={pdfChartPoints} formatValue={(v) => `${v} PDF`} />
        </DashboardCard>

        <DashboardCard title="Répartition des téléchargements" sub="Par type de contenu">
          <DonutChart segments={pdfKindSegments} centerLabel="PDF" />
        </DashboardCard>
      </div>

      <div className="dash-grid-2">
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

        <DashboardCard
          title="⚠️ Concours sans corrigé"
          action={
            <button className="admin-link-btn" type="button" onClick={() => onNavigate("concours")}>
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

      </div>

      <div className="dash-grid-2">
        <DashboardCard
          title="⏰ Concours ouverts qui ferment bientôt"
          action={
            <button className="admin-link-btn" type="button" onClick={() => onNavigate("news")}>
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

        <DashboardCard
          title="🕓 Derniers concours ajoutés"
          action={
            <button className="admin-link-btn" type="button" onClick={() => onNavigate("concours")}>
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
      </div>
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

// Same établissement sigles the scraper (scripts/fetch_almaster.py) can
// recognize — the scraper itself is deliberately global now (no more
// baked-in économie-gestion filter), this is what decides what actually
// shows on the public /news page.
const NEWS_ETABLISSEMENTS = [
  "FSJES", "ENCG", "FEG", "FSEG", "ENSA", "FST", "ISCAE", "ENSAM",
  "ESITH", "ENSET", "FSR", "FLSH", "FSA", "FP", "EST", "ENS",
];

function SubscribersManager() {
  const [emails, setEmails] = useState(null);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(null);

  function load() {
    fetch("/api/admin/subscribers")
      .then((r) => r.json())
      .then((data) => setEmails(data.emails || []))
      .catch(() => setError("Erreur lors du chargement des abonnés."));
  }

  useEffect(load, []);

  async function onDelete(email) {
    setBusy(email);
    try {
      await fetch("/api/admin/subscribers", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      setEmails((prev) => prev.filter((e) => e !== email));
    } finally {
      setBusy(null);
    }
  }

  if (error) return <div className="admin-error">{error}</div>;
  if (emails === null) return <div className="admin-image-hint">Chargement des abonnés...</div>;

  return (
    <div>
      <div className="admin-image-hint" style={{ marginBottom: 10 }}>
        {emails.length} abonné{emails.length > 1 ? "s" : ""} à l'alerte "concours qui ferme bientôt"
      </div>
      {emails.length ? (
        <div className="subscriber-list">
          {emails.map((email) => (
            <div className="subscriber-row" key={email}>
              <span>{email}</span>
              <button
                type="button"
                className="admin-icon-btn danger"
                title="Retirer cet abonné"
                disabled={busy === email}
                onClick={() => onDelete(email)}
              >
                🗑️
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="empty-state">Aucun abonné pour l'instant.</div>
      )}
    </div>
  );
}

function isUrgentNews(item) {
  if (item.cloture || !item.date_limite) return false;
  const days = Math.round(
    (new Date(item.date_limite + "T00:00:00") - new Date(new Date().toDateString())) / 86400000
  );
  return days >= 0 && days <= 7;
}

// One-off / test send, independent of the "Alertes automatiques" toggle and
// its persisted subject/message/sender defaults above - those stay exactly
// what the unattended daily cron uses. This composer pre-fills from them as
// a starting point but never writes back to settings.json, so tweaking the
// wording for a single campaign can't accidentally change what tomorrow's
// automatic run sends.
function DigestComposer({ settings }) {
  const [news, setNews] = useState(null);
  const [subscribers, setSubscribers] = useState(null);
  const [selectedNews, setSelectedNews] = useState(() => new Set());
  const [selectedEmails, setSelectedEmails] = useState(() => new Set());
  const [maxRecipients, setMaxRecipients] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [fromName, setFromName] = useState("");
  const [testEmail, setTestEmail] = useState("");
  const [preview, setPreview] = useState(null);
  const [previewLoading, setPreviewLoading] = useState(false);
  const [sending, setSending] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api/news")
      .then((r) => r.json())
      .then((data) => {
        const open = (data || []).filter((i) => !i.cloture);
        setNews(open);
        setSelectedNews(new Set(open.filter(isUrgentNews).map((i) => i.id)));
      })
      .catch(() => setError("Erreur lors du chargement des concours."));
    fetch("/api/admin/subscribers")
      .then((r) => r.json())
      .then((data) => {
        const emails = data.emails || [];
        setSubscribers(emails);
        setSelectedEmails(new Set(emails));
      })
      .catch(() => setError("Erreur lors du chargement des abonnés."));
  }, []);

  useEffect(() => {
    if (!settings) return;
    setSubject(settings.newsAlertsSubject || "");
    setMessage(settings.newsAlertsMessage || "");
    setFromName(settings.newsAlertsFromName || "SaadConcours");
    setTestEmail(settings.email || "");
  }, [settings]);

  function toggleNews(id) {
    setSelectedNews((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
    setPreview(null);
    setResult(null);
  }

  function toggleEmail(email) {
    setSelectedEmails((prev) => {
      const next = new Set(prev);
      if (next.has(email)) next.delete(email);
      else next.add(email);
      return next;
    });
    setResult(null);
  }

  const cappedEmails = useMemo(() => {
    let list = [...selectedEmails];
    const max = parseInt(maxRecipients, 10);
    if (Number.isFinite(max) && max > 0) list = list.slice(0, max);
    return list;
  }, [selectedEmails, maxRecipients]);

  async function loadPreview() {
    setPreviewLoading(true);
    setError("");
    try {
      const res = await fetch("/api/admin/preview-digest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ newsIds: [...selectedNews], message, subject }),
      });
      setPreview(await res.json());
    } catch {
      setError("Erreur lors du chargement de l'aperçu.");
    } finally {
      setPreviewLoading(false);
    }
  }

  async function send(testOnly) {
    setError("");
    setResult(null);
    if (testOnly && !testEmail) {
      setError("Renseigne un email de test.");
      return;
    }
    if (!testOnly && !cappedEmails.length) {
      setError("Sélectionne au moins un destinataire.");
      return;
    }
    if (!selectedNews.size) {
      setError("Sélectionne au moins un concours à inclure.");
      return;
    }
    setSending(true);
    try {
      const body = { newsIds: [...selectedNews], subject, message, fromName };
      if (testOnly) body.testEmail = testEmail;
      else body.emails = cappedEmails;
      const res = await fetch("/api/admin/send-digest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Erreur lors de l'envoi.");
        return;
      }
      setResult({ ...data, test: testOnly });
    } catch {
      setError("Erreur réseau lors de l'envoi.");
    } finally {
      setSending(false);
    }
  }

  if (news === null || subscribers === null) {
    return <div className="admin-image-hint">Chargement du composeur...</div>;
  }

  return (
    <div>
      <p className="admin-image-hint" style={{ marginBottom: 16 }}>
        Envoi ponctuel, indépendant de l'alerte automatique quotidienne ci-dessus — rien ici n'est enregistré dans
        les réglages permanents.
      </p>

      <div className="admin-field">
        <div className="picker-toolbar">
          <label style={{ margin: 0 }}>Concours à inclure</label>
          <span className="picker-count">
            {selectedNews.size} / {news.length} sélectionné{selectedNews.size > 1 ? "s" : ""}
          </span>
        </div>
        {news.length ? (
          <div className="picker-list">
            {news.map((item) => (
              <label className="picker-row" key={item.id}>
                <input type="checkbox" checked={selectedNews.has(item.id)} onChange={() => toggleNews(item.id)} />
                <span className="picker-row-main">
                  <span className="picker-row-title">{item.titre}</span>
                  <span className="picker-row-meta">
                    {[item.etablissement, item.ville].filter(Boolean).join(" · ")}
                  </span>
                </span>
                <span className="picker-row-date">{item.date_limite || "—"}</span>
              </label>
            ))}
          </div>
        ) : (
          <div className="empty-state">Aucun concours ouvert pour l'instant.</div>
        )}
      </div>

      <div className="admin-field">
        <div className="picker-toolbar">
          <label style={{ margin: 0 }}>Destinataires</label>
          <span className="picker-actions">
            <button type="button" className="admin-link-btn" onClick={() => setSelectedEmails(new Set(subscribers))}>
              Tout cocher
            </button>
            <button type="button" className="admin-link-btn" onClick={() => setSelectedEmails(new Set())}>
              Tout décocher
            </button>
          </span>
        </div>
        {subscribers.length ? (
          <div className="picker-list">
            {subscribers.map((email) => (
              <label className="picker-row" key={email}>
                <input type="checkbox" checked={selectedEmails.has(email)} onChange={() => toggleEmail(email)} />
                <span className="picker-row-main" style={{ fontFamily: "monospace" }}>
                  {email}
                </span>
              </label>
            ))}
          </div>
        ) : (
          <div className="empty-state">Aucun abonné pour l'instant.</div>
        )}
      </div>

      <div className="admin-form-grid">
        <div className="admin-field">
          <label>Nombre maximum de destinataires (optionnel)</label>
          <input
            type="number"
            min="1"
            value={maxRecipients}
            placeholder="ex: 5 pour un premier essai"
            onChange={(e) => setMaxRecipients(e.target.value)}
          />
        </div>
        <div className="admin-field">
          <label>Email de test</label>
          <input value={testEmail} placeholder="toi@exemple.com" onChange={(e) => setTestEmail(e.target.value)} />
        </div>
      </div>
      <div className="admin-image-hint" style={{ marginTop: -8, marginBottom: 16 }}>
        {cappedEmails.length} destinataire{cappedEmails.length > 1 ? "s" : ""} recevront cet envoi
        {maxRecipients && selectedEmails.size > cappedEmails.length
          ? ` (plafonné, ${selectedEmails.size - cappedEmails.length} exclus)`
          : ""}
        .
      </div>

      <div className="admin-field">
        <label>Objet de cet envoi</label>
        <input value={subject} placeholder="Objet automatique si vide" onChange={(e) => setSubject(e.target.value)} />
      </div>
      <div className="admin-field">
        <label>Message pour cet envoi</label>
        <textarea style={{ minHeight: 80 }} value={message} onChange={(e) => setMessage(e.target.value)} />
      </div>
      <div className="admin-field">
        <label>Nom de l'expéditeur</label>
        <input value={fromName} onChange={(e) => setFromName(e.target.value)} />
      </div>
      <div className="admin-image-hint" style={{ marginBottom: 16 }}>
        Objet, message et nom ne modifient que cet envoi — pas les réglages permanents de l'alerte automatique.
        L'adresse d'envoi reste toujours le compte Gmail configuré côté serveur.
      </div>

      <div className="admin-row-actions" style={{ marginBottom: 12, flexWrap: "wrap" }}>
        <button
          type="button"
          className="admin-btn secondary"
          onClick={loadPreview}
          disabled={previewLoading || !selectedNews.size}
        >
          {previewLoading ? "Chargement..." : "👁 Aperçu"}
        </button>
        <button type="button" className="admin-btn secondary" onClick={() => send(true)} disabled={sending}>
          Envoyer un test à moi-même
        </button>
        <button type="button" className="admin-btn" onClick={() => send(false)} disabled={sending}>
          {sending ? "Envoi..." : `Envoyer maintenant (${cappedEmails.length})`}
        </button>
      </div>

      {error && <div className="admin-error">{error}</div>}
      {result && (
        <div className={result.sent > 0 ? "admin-msg" : "admin-error"}>
          {result.test
            ? result.sent > 0
              ? `Test envoyé à ${testEmail}.`
              : `Échec de l'envoi du test à ${testEmail}.`
            : `Envoyé à ${result.sent} / ${result.total} destinataire(s).${
                result.failed?.length ? ` Échecs : ${result.failed.join(", ")}.` : ""
              }`}
        </div>
      )}

      {preview && (
        <div className="digest-preview">
          <div className="digest-preview-bar">
            Objet : <strong>{preview.subject}</strong> · {preview.itemCount} concours inclus
          </div>
          <div className="digest-preview-body" dangerouslySetInnerHTML={{ __html: preview.html }} />
        </div>
      )}
    </div>
  );
}

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
      setMsg("Réglages enregistrés.");
    } finally {
      setSaving(false);
    }
  }

  function toggleEtablissement(sigle) {
    const current = form.newsEtablissementsVisibles || [];
    const next = current.includes(sigle) ? current.filter((s) => s !== sigle) : [...current, sigle];
    setForm({ ...form, newsEtablissementsVisibles: next });
  }

  if (!form) return <div className="admin-card">Chargement...</div>;

  const visibles = form.newsEtablissementsVisibles || [];

  return (
    <form onSubmit={onSubmit}>
      <div className="admin-card">
        <h2 style={{ marginTop: 0, fontSize: "1.05rem" }}>Réseaux sociaux</h2>
        <p className="admin-image-hint" style={{ marginBottom: 16 }}>
          Laisse un champ vide pour ne pas afficher l'icône correspondante dans le pied de page du site.
        </p>
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
      </div>

      <div className="admin-card" style={{ marginTop: 18 }}>
        <h2 style={{ marginTop: 0, fontSize: "1.05rem" }}>Concours ouverts affichés (News)</h2>
        <p className="admin-image-hint" style={{ marginBottom: 16 }}>
          Le scraper récupère désormais toutes les publications almaster-maroc.com. Choisis ici quels
          établissements apparaissent sur la page publique "Concours ouverts" — aucune case cochée = tout afficher.
        </p>
        <div className="settings-chip-grid">
          {NEWS_ETABLISSEMENTS.map((sigle) => (
            <label className="settings-chip" key={sigle}>
              <input type="checkbox" checked={visibles.includes(sigle)} onChange={() => toggleEtablissement(sigle)} />
              {sigle}
            </label>
          ))}
        </div>
        {visibles.length > 0 && (
          <button
            type="button"
            className="admin-link-btn"
            style={{ marginTop: 12 }}
            onClick={() => setForm({ ...form, newsEtablissementsVisibles: [] })}
          >
            Tout afficher (retirer le filtre)
          </button>
        )}
      </div>

      <div className="admin-card" style={{ marginTop: 18 }}>
        <h2 style={{ marginTop: 0, fontSize: "1.05rem" }}>🔔 Alertes automatiques</h2>
        <p className="admin-image-hint" style={{ marginBottom: 16 }}>
          Envoie un email récapitulatif aux abonnés pour les concours ouverts qui ferment dans les 7 jours, via le
          compte Gmail configuré côté serveur (GMAIL_USER / GMAIL_APP_PASSWORD) — sans ça, l'envoi ne fait rien.
        </p>
        <label className="admin-checkbox-label">
          <input
            type="checkbox"
            checked={Boolean(form.newsAlertsEnabled)}
            onChange={(e) => setForm({ ...form, newsAlertsEnabled: e.target.checked })}
          />
          <span className="toggle-thumb" aria-hidden="true" />
          Envoyer les alertes automatiques (à enregistrer avec le bouton ci-dessous)
        </label>

        <div className="admin-field" style={{ marginTop: 16 }}>
          <label>Objet de l'email</label>
          <input
            value={form.newsAlertsSubject || ""}
            placeholder="ex: ⏰ Ces concours ferment cette semaine — vérifie vite"
            onChange={(e) => setForm({ ...form, newsAlertsSubject: e.target.value })}
          />
          <div className="admin-image-hint" style={{ marginTop: 4 }}>
            Vide = objet automatique (« ⏰ X concours ferment bientôt »).
          </div>
        </div>

        <div className="admin-field">
          <label>Message personnalisé (affiché en haut de l'email, avant la liste)</label>
          <textarea
            style={{ minHeight: 90 }}
            value={form.newsAlertsMessage || ""}
            placeholder="ex: Salam ! Voici les concours qui ferment bientôt — inscris-toi vite avant la clôture 👇"
            onChange={(e) => setForm({ ...form, newsAlertsMessage: e.target.value })}
          />
        </div>

        <div className="admin-field">
          <label>Nom de l'expéditeur</label>
          <input
            value={form.newsAlertsFromName || ""}
            placeholder="SaadConcours"
            onChange={(e) => setForm({ ...form, newsAlertsFromName: e.target.value })}
          />
          <div className="admin-image-hint" style={{ marginTop: 4 }}>
            L'adresse d'envoi elle-même est toujours celle du compte Gmail configuré côté serveur (Gmail
            n'autorise pas d'envoyer sous une autre adresse) — seul ce nom affiché est personnalisable.
          </div>
        </div>
      </div>

      <div className="admin-card" style={{ marginTop: 18 }}>
        <h2 style={{ marginTop: 0, fontSize: "1.05rem" }}>📨 Composer un envoi</h2>
        <DigestComposer settings={form} />
      </div>

      <div className="admin-card" style={{ marginTop: 18 }}>
        <h2 style={{ marginTop: 0, fontSize: "1.05rem" }}>📧 Abonnés aux alertes</h2>
        <SubscribersManager />
      </div>

      <div style={{ marginTop: 18 }}>
        <button className="admin-btn" type="submit" disabled={saving}>
          {saving ? "Enregistrement..." : "Enregistrer"}
        </button>
        {error && <div className="admin-error">{error}</div>}
        {msg && <div className="admin-msg">{msg}</div>}
      </div>
    </form>
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

const NAV_GROUPS = [
  { label: "Aperçu", keys: ["dashboard"] },
  { label: "Contenu", keys: ["concours", "cours", "quiz", "news"] },
  { label: "Système", keys: ["settings"] },
];

/* ------------------------------- Topbar bits ------------------------------- */

// Lazy: the four resource lists only load on first focus, then every
// keystroke just re-filters what's already in memory - no per-keystroke
// network calls, and no results until there's real data to match against.
function GlobalSearch({ onNavigate }) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [data, setData] = useState({ concours: [], cours: [], quiz: [], news: [] });
  const boxRef = useRef(null);

  async function ensureLoaded() {
    if (loaded) return;
    setLoaded(true);
    try {
      const [c, co, q, n] = await Promise.all([
        fetch("/api/concours").then((r) => r.json()),
        fetch("/api/cours").then((r) => r.json()),
        fetch("/api/quiz").then((r) => r.json()),
        fetch("/api/news").then((r) => r.json()),
      ]);
      setData({ concours: c || [], cours: co || [], quiz: q || [], news: n || [] });
    } catch {
      setLoaded(false);
    }
  }

  useEffect(() => {
    function onDocClick(e) {
      if (boxRef.current && !boxRef.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  const q = query.trim().toLowerCase();
  const results =
    q.length >= 2
      ? [
          ...data.concours
            .filter((i) => `${i.etablissement} ${i.ville} ${i.filiere}`.toLowerCase().includes(q))
            .slice(0, 4)
            .map((i) => ({ tab: "concours", icon: "📚", title: i.etablissement, sub: `${i.ville} · ${i.annee}` })),
          ...data.cours
            .filter((i) => `${i.title} ${i.module}`.toLowerCase().includes(q))
            .slice(0, 4)
            .map((i) => ({ tab: "cours", icon: "📖", title: i.title, sub: i.module })),
          ...data.quiz
            .filter((i) => `${i.title} ${i.module}`.toLowerCase().includes(q))
            .slice(0, 4)
            .map((i) => ({ tab: "quiz", icon: "📝", title: i.title, sub: i.module })),
          ...data.news
            .filter((i) => `${i.titre} ${i.etablissement} ${i.ville}`.toLowerCase().includes(q))
            .slice(0, 4)
            .map((i) => ({ tab: "news", icon: "🆕", title: i.titre, sub: [i.etablissement, i.ville].filter(Boolean).join(" · ") })),
        ].slice(0, 10)
      : [];

  return (
    <div className="admin-search" ref={boxRef}>
      <span className="admin-search-icon">🔍</span>
      <input
        value={query}
        onFocus={() => {
          ensureLoaded();
          setOpen(true);
        }}
        onChange={(e) => {
          setQuery(e.target.value);
          setOpen(true);
        }}
        placeholder="Rechercher un concours, un cours, une news..."
      />
      {open && q.length >= 2 && (
        <div className="admin-search-dropdown">
          {results.length ? (
            results.map((r, i) => (
              <button
                key={i}
                type="button"
                className="admin-search-result"
                onClick={() => {
                  onNavigate(r.tab);
                  setOpen(false);
                  setQuery("");
                }}
              >
                <span className="admin-search-result-icon">{r.icon}</span>
                <span className="admin-search-result-text">
                  <span className="admin-search-result-title">{r.title}</span>
                  <span className="admin-search-result-sub">{r.sub}</span>
                </span>
              </button>
            ))
          ) : (
            <div className="admin-search-empty">Aucun résultat pour « {query} ».</div>
          )}
        </div>
      )}
    </div>
  );
}

function NotificationBell({ onNavigate }) {
  const [count, setCount] = useState(null);

  useEffect(() => {
    fetch("/api/news")
      .then((r) => r.json())
      .then((data) => setCount((data || []).filter(isUrgentNews).length))
      .catch(() => setCount(0));
  }, []);

  return (
    <button
      className="admin-icon-btn admin-bell"
      type="button"
      onClick={() => onNavigate("news")}
      title="Concours qui ferment dans les 7 jours"
    >
      🔔
      {Boolean(count) && <span className="admin-bell-dot">{count > 9 ? "9+" : count}</span>}
    </button>
  );
}

function AdminAvatarMenu({ onLogout }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function onDocClick(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  return (
    <div className="admin-avatar-menu" ref={ref}>
      <button type="button" className="admin-avatar-trigger" onClick={() => setOpen((o) => !o)}>
        <span className="admin-avatar">A</span>
        <span className="admin-avatar-chevron">▾</span>
      </button>
      {open && (
        <div className="admin-avatar-dropdown">
          <a className="admin-avatar-dropdown-item" href="/">
            ↗ Voir le site
          </a>
          <button type="button" className="admin-avatar-dropdown-item danger" onClick={onLogout}>
            ⏻ Déconnexion
          </button>
        </div>
      )}
    </div>
  );
}

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
          <BrandLogo className="admin-brand-logo" gradientId="adminSidebarLogoGrad" />
          <span>
            <span className="brand-saad">Saad</span>
            <span className="brand-concours">Concours</span>
          </span>
          <span className="admin-brand-tag">Admin</span>
        </a>
        <div className="admin-nav-groups">
          {NAV_GROUPS.map((group) => (
            <div key={group.label} className="admin-nav-group">
              <div className="admin-nav-section-label">{group.label}</div>
              <nav className="admin-nav">
                {group.keys.map((key) => {
                  const t = TABS.find((x) => x.key === key);
                  return (
                    <button
                      key={t.key}
                      className={"admin-nav-btn" + (t.key === tab ? " active" : "")}
                      onClick={() => setTab(t.key)}
                      type="button"
                    >
                      <span className="admin-nav-icon">{t.icon}</span>
                      {t.label}
                    </button>
                  );
                })}
              </nav>
            </div>
          ))}
        </div>
        <div className="admin-sidebar-footer">
          <a className="admin-profile-card" href="/">
            <span className="admin-avatar">A</span>
            <span className="admin-profile-text">
              <strong>Admin</strong>
              <span>Voir le site ↗</span>
            </span>
          </a>
        </div>
      </aside>

      <main className="admin-main">
        <div className="admin-topbar">
          <GlobalSearch onNavigate={setTab} />
          <div className="admin-topbar-right">
            <span className="admin-topbar-date">
              {new Date().toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "long" })}
            </span>
            <NotificationBell onNavigate={setTab} />
            <ThemeToggle />
            <AdminAvatarMenu onLogout={onLogout} />
          </div>
        </div>
        <div className="admin-content">
          <div className="admin-page-head">
            <div>
              <h1 className="admin-page-title">
                {active.icon} {active.label}
              </h1>
              {active.config && (
                <div className="admin-page-subtitle">
                  {/* "Concours"/"Cours" are already invariant plurals in French - only pluralize labels that aren't */}
                  Gère les {active.config.resourceLabel.toLowerCase()}
                  {active.config.resourceLabel.toLowerCase().endsWith("s") ? "" : "s"} publiés sur le site.
                </div>
              )}
            </div>
          </div>
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
