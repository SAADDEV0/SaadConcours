"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const EMPTY_FORM = {
  id: "",
  annee: "",
  ville: "",
  etablissement: "",
  filiere: "",
  difficulte: "",
  modules: "",
  notions_cles: "",
  enonce_md: "",
  source: "",
  images: "",
};

function toFormValues(c) {
  return {
    id: c.id || "",
    annee: c.annee || "",
    ville: c.ville || "",
    etablissement: c.etablissement || "",
    filiere: c.filiere || "",
    difficulte: c.difficulte || "",
    modules: (c.modules || []).join(", "),
    notions_cles: c.notions_cles || "",
    enonce_md: c.enonce_md || "",
    source: c.source || "",
    images: (c.images || []).join(", "),
  };
}

function toPayload(form) {
  return {
    annee: form.annee,
    ville: form.ville,
    etablissement: form.etablissement,
    filiere: form.filiere,
    difficulte: form.difficulte,
    modules: form.modules.split(",").map((s) => s.trim()).filter(Boolean),
    notions_cles: form.notions_cles,
    enonce_md: form.enonce_md,
    source: form.source,
    images: form.images.split(",").map((s) => s.trim()).filter(Boolean),
  };
}

export default function AdminPage() {
  const router = useRouter();
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState(EMPTY_FORM);
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");
  const [saving, setSaving] = useState(false);

  async function load() {
    setLoading(true);
    const res = await fetch("/api/concours");
    const data = await res.json();
    setList(data);
    setLoading(false);
  }

  useEffect(() => {
    load();
  }, []);

  function startEdit(c) {
    setEditingId(c.id);
    setForm(toFormValues(c));
    setMsg("");
    setError("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function startNew() {
    setEditingId(null);
    setForm(EMPTY_FORM);
    setMsg("");
    setError("");
  }

  async function onSubmit(e) {
    e.preventDefault();
    setError("");
    setMsg("");
    setSaving(true);
    try {
      const payload = toPayload(form);
      let res;
      if (editingId) {
        res = await fetch(`/api/concours/${encodeURIComponent(editingId)}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      } else {
        if (form.id) payload.id = form.id;
        res = await fetch("/api/concours", {
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
      setMsg(editingId ? "Concours mis à jour." : "Concours ajouté.");
      startNew();
      await load();
    } finally {
      setSaving(false);
    }
  }

  async function onDelete(id) {
    if (!confirm(`Supprimer définitivement "${id}" ?`)) return;
    const res = await fetch(`/api/concours/${encodeURIComponent(id)}`, { method: "DELETE" });
    if (res.ok) {
      await load();
      if (editingId === id) startNew();
    }
  }

  async function onLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  }

  return (
    <div className="admin-wrap">
      <div className="admin-topbar">
        <h1 style={{ margin: 0, fontSize: "1.3rem" }}>🛠️ Administration — Concours</h1>
        <div style={{ display: "flex", gap: 8 }}>
          <a className="admin-btn secondary" href="/" style={{ textDecoration: "none" }}>
            ← Voir le site
          </a>
          <button className="admin-btn secondary" onClick={onLogout}>
            Déconnexion
          </button>
        </div>
      </div>

      <div className="admin-card">
        <h2 style={{ marginTop: 0, fontSize: "1.05rem" }}>
          {editingId ? `Modifier : ${editingId}` : "Ajouter un concours"}
        </h2>
        <form onSubmit={onSubmit}>
          {!editingId && (
            <div className="admin-field">
              <label>Identifiant (optionnel, généré automatiquement sinon)</label>
              <input
                value={form.id}
                onChange={(e) => setForm({ ...form, id: e.target.value })}
                placeholder="ex: 2024_Rabat_FSJES_Souissi_CCA"
              />
            </div>
          )}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 12 }}>
            <div className="admin-field">
              <label>Année</label>
              <input required value={form.annee} onChange={(e) => setForm({ ...form, annee: e.target.value })} />
            </div>
            <div className="admin-field">
              <label>Ville</label>
              <input required value={form.ville} onChange={(e) => setForm({ ...form, ville: e.target.value })} />
            </div>
            <div className="admin-field">
              <label>Établissement</label>
              <input
                required
                value={form.etablissement}
                onChange={(e) => setForm({ ...form, etablissement: e.target.value })}
              />
            </div>
            <div className="admin-field">
              <label>Filière</label>
              <input required value={form.filiere} onChange={(e) => setForm({ ...form, filiere: e.target.value })} />
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 3fr", gap: 12 }}>
            <div className="admin-field">
              <label>Difficulté</label>
              <input
                placeholder="ex: 3/5"
                value={form.difficulte}
                onChange={(e) => setForm({ ...form, difficulte: e.target.value })}
              />
            </div>
            <div className="admin-field">
              <label>Modules requis (séparés par des virgules)</label>
              <input value={form.modules} onChange={(e) => setForm({ ...form, modules: e.target.value })} />
            </div>
          </div>
          <div className="admin-field">
            <label>Notions clés</label>
            <input value={form.notions_cles} onChange={(e) => setForm({ ...form, notions_cles: e.target.value })} />
          </div>
          <div className="admin-field">
            <label>Énoncé (Markdown)</label>
            <textarea
              required
              value={form.enonce_md}
              onChange={(e) => setForm({ ...form, enonce_md: e.target.value })}
            />
          </div>
          <div className="admin-field">
            <label>Source</label>
            <input value={form.source} onChange={(e) => setForm({ ...form, source: e.target.value })} />
          </div>
          <div className="admin-field">
            <label>Images (chemins séparés par des virgules, ex: images/Rabat/xxx/xxx_p1.png)</label>
            <input value={form.images} onChange={(e) => setForm({ ...form, images: e.target.value })} />
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <button className="admin-btn" type="submit" disabled={saving}>
              {saving ? "Enregistrement..." : editingId ? "Enregistrer les modifications" : "Ajouter le concours"}
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

      <h2 style={{ fontSize: "1.05rem" }}>{loading ? "Chargement..." : `${list.length} concours`}</h2>
      <table className="admin-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Établissement</th>
            <th>Ville</th>
            <th>Filière</th>
            <th>Année</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {list.map((c) => (
            <tr key={c.id}>
              <td style={{ fontFamily: "monospace", fontSize: ".78rem" }}>{c.id}</td>
              <td>{c.etablissement}</td>
              <td>{c.ville}</td>
              <td>{c.filiere}</td>
              <td>{c.annee}</td>
              <td>
                <div className="admin-row-actions">
                  <button className="admin-btn secondary" onClick={() => startEdit(c)}>
                    Modifier
                  </button>
                  <button className="admin-btn danger" onClick={() => onDelete(c.id)}>
                    Supprimer
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
