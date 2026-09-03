"use client";

import QuestionsEditor from "../fields/QuestionsEditor";
import ImageListEditor from "../fields/ImageListEditor";
import MarkdownEditor from "../fields/MarkdownEditor";

export default function ResourceForm({
  formRef,
  config,
  editingId,
  form,
  setForm,
  customId,
  setCustomId,
  saving,
  error,
  info,
  onSubmit,
  onCancel,
}) {
  const { fields, resourceLabel, showIdField = false, idPlaceholder } = config;

  return (
    <div className="admin-card" ref={formRef}>
      <h2 className="admin-section-title">{editingId ? `Modifier : ${editingId}` : `Ajouter — ${resourceLabel}`}</h2>
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
                ) : f.type === "select" ? (
                  <>
                    <label>{f.label}</label>
                    <select
                      value={form[f.key] || ""}
                      onChange={(e) => {
                        const value = e.target.value;
                        // Changing a parent field (e.g. catégorie) resets any
                        // dependent select to that new parent's first option,
                        // so the pair can never end up mismatched (a filière
                        // from a different catégorie than the one shown).
                        const dependent = fields.find((other) => other.dependsOn === f.key);
                        if (dependent) {
                          setForm({ ...form, [f.key]: value, [dependent.key]: dependent.optionsFor(value)?.[0]?.value ?? "" });
                        } else {
                          setForm({ ...form, [f.key]: value });
                        }
                      }}
                    >
                      {(f.dependsOn ? f.optionsFor(form[f.dependsOn]) : f.options).map((o) => (
                        <option key={o.value} value={o.value}>
                          {o.label}
                        </option>
                      ))}
                    </select>
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
            <button className="admin-btn secondary" type="button" onClick={onCancel}>
              Annuler
            </button>
          )}
        </div>
        {error && <div className="admin-error">{error}</div>}
        {info && <div className="admin-info">{info}</div>}
      </form>
    </div>
  );
}
