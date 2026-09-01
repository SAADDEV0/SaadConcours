"use client";

import { useEffect, useMemo, useState } from "react";

/* -------------------------------------------------------------------
 * Bulk import for concours — the bottleneck standing between "66 concours"
 * and "200+" isn't collecting the subjects, it's typing each one into the
 * one-at-a-time admin form. This screen accepts either a JSON array (same
 * shape as a concours object) or CSV (one row per concours, `modules`
 * separated by ";" since "," is already the column separator), previews
 * what will be created — flagging missing required fields and likely
 * duplicates against the live list — then submits the whole batch to
 * /api/admin/import-concours in a single request (one Git commit, see
 * lib/store.js addConcoursBulk).
 * ---------------------------------------------------------------- */

const REQUIRED = ["annee", "ville", "etablissement", "filiere", "enonce_md"];
const JSON_FIELDS = ["annee", "ville", "etablissement", "filiere", "master_reel", "difficulte", "modules", "notions_cles", "source", "enonce_md", "corrige_md", "statut"];

const JSON_EXAMPLE = `[
  {
    "annee": "2024",
    "ville": "Casablanca",
    "etablissement": "ENCG Casablanca",
    "filiere": "Master Marketing et Action Commerciale",
    "modules": ["Marketing stratégique", "Études de marché"],
    "notions_cles": "Segmentation, positionnement, mix marketing",
    "source": "https://...",
    "enonce_md": "# Sujet\\n\\n1) ..."
  }
]`;

const CSV_EXAMPLE = `annee,ville,etablissement,filiere,master_reel,difficulte,modules,notions_cles,source,enonce_md
2024,Casablanca,ENCG Casablanca,Master Marketing et Action Commerciale,,3/5,Marketing stratégique;Études de marché,Segmentation;positionnement,https://...,"# Sujet\n\n1) ..."`;

// Small RFC4180-ish CSV parser — handles quoted fields with embedded commas
// and newlines ("...") since enonce_md realistically needs both. Not a full
// spec implementation (no configurable delimiter), just enough for this
// screen's own export/import round-trip.
function parseCsv(text) {
  const rows = [];
  let row = [];
  let field = "";
  let inQuotes = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (inQuotes) {
      if (c === '"' && text[i + 1] === '"') {
        field += '"';
        i++;
      } else if (c === '"') {
        inQuotes = false;
      } else {
        field += c;
      }
    } else if (c === '"') {
      inQuotes = true;
    } else if (c === ",") {
      row.push(field);
      field = "";
    } else if (c === "\n") {
      row.push(field);
      rows.push(row);
      row = [];
      field = "";
    } else if (c === "\r") {
      // skip — \r\n handled via the following \n
    } else {
      field += c;
    }
  }
  if (field.length || row.length) {
    row.push(field);
    rows.push(row);
  }
  return rows.filter((r) => r.some((c) => c.trim() !== ""));
}

function entriesFromCsv(text) {
  const rows = parseCsv(text.trim());
  if (rows.length < 2) return [];
  const header = rows[0].map((h) => h.trim());
  return rows.slice(1).map((cells) => {
    const entry = {};
    header.forEach((key, i) => {
      const raw = (cells[i] ?? "").trim();
      if (key === "modules" || key === "notions_cles") {
        entry[key] = key === "modules" ? raw.split(";").map((s) => s.trim()).filter(Boolean) : raw;
      } else if (raw) {
        entry[key] = raw;
      }
    });
    return entry;
  });
}

function entriesFromJson(text) {
  const parsed = JSON.parse(text);
  const arr = Array.isArray(parsed) ? parsed : [parsed];
  return arr.map((raw) => {
    const entry = {};
    for (const key of JSON_FIELDS) {
      if (raw[key] === undefined) continue;
      entry[key] = key === "modules" && typeof raw[key] === "string"
        ? raw[key].split(",").map((s) => s.trim()).filter(Boolean)
        : raw[key];
    }
    return entry;
  });
}

export default function BulkImportPanel() {
  const [format, setFormat] = useState("json");
  const [text, setText] = useState("");
  const [existing, setExisting] = useState([]);
  const [rows, setRows] = useState(null); // [{entry, errors, duplicate}]
  const [parseError, setParseError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState(null);

  useEffect(() => {
    fetch("/api/concours")
      .then((r) => r.json())
      .then((data) => setExisting(data || []))
      .catch(() => setExisting([]));
  }, []);

  function isDuplicate(entry) {
    const key = (v) => String(v || "").trim().toLowerCase();
    return existing.some(
      (c) =>
        key(c.annee) === key(entry.annee) &&
        key(c.ville) === key(entry.ville) &&
        key(c.etablissement) === key(entry.etablissement) &&
        key(c.filiere) === key(entry.filiere)
    );
  }

  function analyze() {
    setParseError("");
    setResult(null);
    setRows(null);
    let entries;
    try {
      entries = format === "json" ? entriesFromJson(text) : entriesFromCsv(text);
    } catch (e) {
      setParseError(`Impossible d'analyser le ${format.toUpperCase()} : ${e.message}`);
      return;
    }
    if (!entries.length) {
      setParseError("Aucune ligne détectée.");
      return;
    }
    setRows(
      entries.map((entry) => ({
        entry,
        errors: REQUIRED.filter((k) => !String(entry[k] || "").trim()),
        duplicate: isDuplicate(entry),
      }))
    );
  }

  const importable = useMemo(() => (rows || []).filter((r) => !r.errors.length), [rows]);

  async function onImport() {
    if (!importable.length) return;
    setSubmitting(true);
    setResult(null);
    try {
      const res = await fetch("/api/admin/import-concours", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ entries: importable.map((r) => r.entry) }),
      });
      const data = await res.json();
      if (!res.ok) {
        setResult({ ok: false, error: data.error, details: data.details });
        return;
      }
      setResult({ ok: true, created: data.created });
      setRows(null);
      setText("");
      fetch("/api/concours")
        .then((r) => r.json())
        .then((d) => setExisting(d || []));
    } catch {
      setResult({ ok: false, error: "Erreur réseau lors de l'import." });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div>
      <div className="admin-card">
        <h2 style={{ marginTop: 0, fontSize: "1.05rem" }}>⬆️ Import groupé de concours</h2>
        <p className="admin-image-hint" style={{ marginBottom: 16 }}>
          Colle plusieurs concours d'un coup (JSON ou CSV) au lieu de les ajouter un par un. Tout le lot est écrit en
          un seul commit GitHub. Chaque entrée importée démarre au statut <strong>📝 Brouillon</strong> dans le
          pipeline (onglet Concours → vue Pipeline) — à faire avancer ensuite au fil de la relecture.
        </p>

        <div className="admin-view-toggle" style={{ marginBottom: 14 }}>
          <button
            type="button"
            className={"admin-view-toggle-btn" + (format === "json" ? " active" : "")}
            onClick={() => setFormat("json")}
          >
            JSON
          </button>
          <button
            type="button"
            className={"admin-view-toggle-btn" + (format === "csv" ? " active" : "")}
            onClick={() => setFormat("csv")}
          >
            CSV
          </button>
        </div>

        <div className="admin-field">
          <label>Champs requis : annee, ville, etablissement, filiere, enonce_md — le reste est optionnel.</label>
          <textarea
            style={{ minHeight: 220, fontFamily: "monospace", fontSize: ".8rem" }}
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder={format === "json" ? JSON_EXAMPLE : CSV_EXAMPLE}
          />
        </div>

        <div className="admin-row-actions">
          <button type="button" className="admin-btn secondary" onClick={() => setText(format === "json" ? JSON_EXAMPLE : CSV_EXAMPLE)}>
            Charger un exemple
          </button>
          <button type="button" className="admin-btn" onClick={analyze} disabled={!text.trim()}>
            Analyser
          </button>
        </div>
        {parseError && <div className="admin-error">{parseError}</div>}
      </div>

      {rows && (
        <div className="admin-card" style={{ marginTop: 18 }}>
          <h2 style={{ marginTop: 0, fontSize: "1.05rem" }}>
            Aperçu — {importable.length} / {rows.length} ligne{rows.length > 1 ? "s" : ""} importable{importable.length > 1 ? "s" : ""}
          </h2>
          <div className="admin-table-wrap">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Établissement</th>
                  <th>Ville</th>
                  <th>Filière</th>
                  <th>Année</th>
                  <th>Statut</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r, i) => (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{r.entry.etablissement || "—"}</td>
                    <td>{r.entry.ville || "—"}</td>
                    <td>{r.entry.filiere || "—"}</td>
                    <td>{r.entry.annee || "—"}</td>
                    <td>
                      {r.errors.length ? (
                        <span style={{ color: "var(--red)" }}>⚠ {r.errors.join(", ")} manquant(s)</span>
                      ) : r.duplicate ? (
                        <span style={{ color: "var(--amber)" }}>⚠ doublon probable (importé quand même)</span>
                      ) : (
                        <span style={{ color: "var(--green)" }}>✓ prêt</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="admin-row-actions" style={{ marginTop: 14 }}>
            <button type="button" className="admin-btn" onClick={onImport} disabled={submitting || !importable.length}>
              {submitting ? "Import en cours..." : `Importer ${importable.length} concours`}
            </button>
          </div>
        </div>
      )}

      {result && (
        <div className="admin-card" style={{ marginTop: 18 }}>
          {result.ok ? (
            <div className="admin-msg">✅ {result.created} concours importé{result.created > 1 ? "s" : ""}.</div>
          ) : (
            <div className="admin-error">
              {result.error}
              {result.details && (
                <ul style={{ margin: "6px 0 0", paddingLeft: 18 }}>
                  {result.details.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
