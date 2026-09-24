"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Icon from "../_ui/Icon";
import { Alert, Hero, SectionTitle, Switch } from "../_ui/kit";
import { useToast } from "../_ui/feedback";
import { useCollection } from "../_lib/content";
import { COLLECTIONS, uniqueId, suggestConcoursId } from "../_lib/collections";
import { mutateJson } from "../_lib/repo";
import { normalize, plural, todayIso } from "../_lib/format";
import { categoryOf } from "@/lib/taxonomy";

const REQUIRED = ["annee", "ville", "etablissement", "enonce_md"];
const MAX = 200;

// CSV simple (séparateur , ou ;), guillemets doublés, retours à la ligne
// autorisés entre guillemets.
function parseCsv(text) {
  const sep = (text.split("\n")[0].match(/;/g) || []).length > (text.split("\n")[0].match(/,/g) || []).length ? ";" : ",";
  const rows = [];
  let row = [];
  let cell = "";
  let q = false;
  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (q) {
      if (ch === '"' && text[i + 1] === '"') {
        cell += '"';
        i++;
      } else if (ch === '"') q = false;
      else cell += ch;
    } else if (ch === '"') q = true;
    else if (ch === sep) {
      row.push(cell);
      cell = "";
    } else if (ch === "\n" || ch === "\r") {
      if (ch === "\r" && text[i + 1] === "\n") i++;
      row.push(cell);
      rows.push(row);
      row = [];
      cell = "";
    } else cell += ch;
  }
  if (cell || row.length) {
    row.push(cell);
    rows.push(row);
  }
  const [head, ...body] = rows.filter((r) => r.some((c) => c.trim()));
  if (!head) return [];
  const keys = head.map((h) => h.replace(/^﻿/, "").trim());
  return body.map((r) => Object.fromEntries(keys.map((k, i) => [k, r[i] ?? ""])));
}

function parse(text) {
  const t = text.trim();
  if (!t) return { rows: [], error: "" };
  try {
    if (t.startsWith("[") || t.startsWith("{")) {
      const data = JSON.parse(t);
      const arr = Array.isArray(data) ? data : Array.isArray(data.entries) ? data.entries : [data];
      return { rows: arr, error: "" };
    }
    return { rows: parseCsv(t), error: "" };
  } catch (err) {
    return { rows: [], error: `Lecture impossible : ${err.message}` };
  }
}

function normalizeRow(r) {
  const out = { ...r };
  for (const k of Object.keys(out)) if (typeof out[k] === "string") out[k] = out[k].trim();
  if (typeof out.modules === "string") out.modules = out.modules.split(/[|,;]/).map((s) => s.trim()).filter(Boolean);
  if (typeof out.images === "string") out.images = out.images.split(/[|,;\s]+/).filter(Boolean);
  if (out.annee !== undefined) out.annee = String(out.annee);
  if (out.filiere && !out.categorie) out.categorie = categoryOf(out.filiere) || "";
  return out;
}

export default function Import() {
  const { list, col } = useCollection("concours");
  const toast = useToast();
  const [text, setText] = useState("");
  const [asDraft, setAsDraft] = useState(true);
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState(null);

  const parsed = useMemo(() => parse(text), [text]);
  const analysed = useMemo(() => {
    const existing = new Map((list || []).map((c) => [normalize(`${c.annee}|${c.ville}|${c.etablissement}|${c.filiere}`), c.id]));
    return parsed.rows.slice(0, MAX).map((raw, i) => {
      const r = normalizeRow(raw);
      const missing = REQUIRED.filter((k) => !String(r[k] ?? "").trim());
      const dup = existing.get(normalize(`${r.annee}|${r.ville}|${r.etablissement}|${r.filiere}`));
      return { i, r, missing, dup };
    });
  }, [parsed, list]);

  const valid = analysed.filter((a) => !a.missing.length);

  async function doImport() {
    setBusy(true);
    try {
      const { result } = await mutateJson(col.path, (all) => {
        const taken = new Set(all.map((c) => c.id));
        const created = valid.map(({ r }) => {
          const entry = { ...r, date_ajout: r.date_ajout || todayIso() };
          if (asDraft) entry.statut = "brouillon";
          else delete entry.statut;
          entry.id = uniqueId(entry.id || suggestConcoursId(entry), taken);
          taken.add(entry.id);
          return entry;
        });
        return {
          data: [...all, ...created],
          files: created.flatMap((c) => COLLECTIONS.concours.sideFiles(c, null)),
          message: `Import groupé : ${created.length} concours${asDraft ? " (brouillons)" : ""}`,
          audit: { action: "import", resource: "concours", label: `${created.length} concours importés`, detail: created.slice(0, 3).map((c) => c.id).join(", ") },
          result: created,
        };
      });
      setDone(result);
      setText("");
      toast.success(`${plural(result.length, "concours importé")}`, "Un seul commit pour tout le lot.");
    } catch (err) {
      toast.error("Import impossible", err.message);
    } finally {
      setBusy(false);
    }
  }

  return (
    <>
      <Hero icon="📦" eyebrow="Concours · Import" title="Import groupé">
        Colle un tableau JSON ou un CSV (une ligne par concours). Tout le lot part dans un seul commit, énoncés et corrigés compris.
      </Hero>

      {done && (
        <Alert tone="ok" title={`${plural(done.length, "concours importé")}`} action={<Link className="ax-btn sm" href="/admin/concours?statut=brouillon">Voir</Link>}>
          {done.slice(0, 5).map((c) => c.id).join(", ")}
          {done.length > 5 ? "…" : ""}
        </Alert>
      )}

      <div className="ax-grid main-side">
        <section className="ax-card">
          <SectionTitle>Données</SectionTitle>
          <textarea
            className="ax-textarea code"
            rows={16}
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder={'[\n  {\n    "annee": "2024",\n    "ville": "Rabat",\n    "etablissement": "FSJES Agdal",\n    "filiere": "Comptabilité, Contrôle & Audit (CCA)",\n    "master_reel": "…",\n    "enonce_md": "…",\n    "corrige_md": "…"\n  }\n]'}
          />
          <div className="ax-btn-row ax-mt">
            <label className="ax-btn sm">
              <Icon name="upload" size="sm" /> Choisir un fichier
              <input type="file" accept=".json,.csv,text/csv,application/json" hidden onChange={async (e) => e.target.files[0] && setText(await e.target.files[0].text())} />
            </label>
            {text && (
              <button type="button" className="ax-btn ghost sm" onClick={() => setText("")}>
                Vider
              </button>
            )}
          </div>
          {parsed.error && <Alert tone="error">{parsed.error}</Alert>}
        </section>
        <aside className="ax-stack">
          <section className="ax-card">
            <SectionTitle>Colonnes reconnues</SectionTitle>
            <p className="ax-sub" style={{ margin: 0 }}>
              Obligatoires : <code>annee</code>, <code>ville</code>, <code>etablissement</code>, <code>enonce_md</code>. Optionnelles : <code>filiere</code> (la catégorie est déduite),{" "}
              <code>master_reel</code>, <code>corrige_md</code>, <code>modules</code> (séparés par |), <code>notions_cles</code>, <code>difficulte</code>, <code>source</code>, <code>images</code>, <code>id</code>.
            </p>
          </section>
          <section className="ax-card">
            <Switch checked={asDraft} onChange={setAsDraft} label="Importer en brouillon" />
            <p className="ax-hint" style={{ margin: "8px 0 14px" }}>
              Recommandé : relis chaque fiche avant de la publier.
            </p>
            <button type="button" className="ax-btn primary block" disabled={!valid.length || busy} onClick={doImport}>
              <Icon name={busy ? "loader" : "upload"} /> {busy ? "Import…" : `Importer ${valid.length || ""} concours`}
            </button>
          </section>
        </aside>
      </div>

      {analysed.length > 0 && (
        <section className="ax-mt">
          <SectionTitle aside={`${valid.length} valides sur ${analysed.length}${parsed.rows.length > MAX ? ` (max ${MAX} par lot)` : ""}`}>Aperçu</SectionTitle>
          <div className="ax-table-wrap">
            <table className="ax-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Concours</th>
                  <th>Filière</th>
                  <th>Énoncé</th>
                  <th>État</th>
                </tr>
              </thead>
              <tbody>
                {analysed.map(({ i, r, missing, dup }) => (
                  <tr key={i}>
                    <td className="ax-muted">{i + 1}</td>
                    <td>
                      <strong>{[r.etablissement, r.annee].filter(Boolean).join(" · ") || "—"}</strong>
                      <span className="ax-cell-sub">{r.ville}</span>
                    </td>
                    <td className="ax-dim">{r.filiere || "—"}</td>
                    <td className="ax-muted">{r.enonce_md ? `${String(r.enonce_md).length} car.` : "—"}</td>
                    <td>
                      {missing.length ? (
                        <span className="ax-pill red">manque {missing.join(", ")}</span>
                      ) : dup ? (
                        <span className="ax-pill amber" title={dup}>
                          doublon probable
                        </span>
                      ) : (
                        <span className="ax-pill green">OK</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}
    </>
  );
}
