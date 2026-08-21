"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

/* -------------------------------------------------------------------
 * Field-driven CRUD panel. Each resource (concours/cours/quiz/news) is
 * described by a small config below instead of a hand-written form, since
 * the four resources are structurally the same (list + add/edit form)
 * modulo which fields they have.
 * ---------------------------------------------------------------- */

function emptyFormFor(fields) {
  const form = {};
  fields.forEach((f) => {
    form[f.key] = f.type === "checkbox" ? false : "";
  });
  return form;
}

function toFormValues(item, fields) {
  const form = {};
  fields.forEach((f) => {
    const v = item[f.key];
    if (f.type === "list") form[f.key] = (v || []).join(", ");
    else if (f.type === "json") form[f.key] = JSON.stringify(v ?? (f.jsonDefault || []), null, 2);
    else if (f.type === "checkbox") form[f.key] = Boolean(v);
    else form[f.key] = v ?? "";
  });
  return form;
}

function toPayload(form, fields) {
  const payload = {};
  for (const f of fields) {
    const raw = form[f.key];
    if (f.type === "list") payload[f.key] = raw.split(",").map((s) => s.trim()).filter(Boolean);
    else if (f.type === "json") payload[f.key] = JSON.parse(raw);
    else if (f.type === "checkbox") payload[f.key] = Boolean(raw);
    else payload[f.key] = raw;
  }
  return payload;
}

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
      let payload;
      try {
        payload = toPayload(form, fields);
      } catch (err) {
        setError("JSON invalide dans un des champs : " + err.message);
        return;
      }
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
            <div className="admin-field" key={f.key}>
              {f.type === "checkbox" ? (
                <label style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <input
                    type="checkbox"
                    checked={Boolean(form[f.key])}
                    onChange={(e) => setForm({ ...form, [f.key]: e.target.checked })}
                  />
                  {f.label}
                </label>
              ) : (
                <>
                  <label>{f.label}</label>
                  {f.type === "textarea" || f.type === "json" ? (
                    <textarea
                      required={f.required}
                      placeholder={f.placeholder}
                      value={form[f.key] || ""}
                      onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                      style={f.type === "json" ? { fontFamily: "monospace", fontSize: ".82rem", minHeight: 220 } : undefined}
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
    { key: "chapters", label: "Chapitres (séparés par des virgules)", type: "list" },
    {
      key: "questions",
      label: "Questions (JSON — tableau de { id, chapter, question, options:[{letter,text}], correct:[\"a\"], justification })",
      type: "json",
      required: true,
      jsonDefault: [],
    },
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
        <h1 style={{ margin: 0, fontSize: "1.3rem" }}>🛠️ Administration</h1>
        <div style={{ display: "flex", gap: 8 }}>
          <a className="admin-btn secondary" href="/" style={{ textDecoration: "none" }}>
            ← Voir le site
          </a>
          <button className="admin-btn secondary" onClick={onLogout}>
            Déconnexion
          </button>
        </div>
      </div>

      <div style={{ display: "flex", gap: 8, marginBottom: 18, flexWrap: "wrap" }}>
        {TABS.map((t) => (
          <button
            key={t.key}
            className={t.key === tab ? "admin-btn" : "admin-btn secondary"}
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
