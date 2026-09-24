"use client";

import { useCallback, useEffect, useState } from "react";
import { getCached, loadJson, mutateJson, subscribeRepo, fetchHead } from "./repo";
import { COLLECTIONS } from "./collections";
import { plural } from "./format";

/* ------------------------------ Lecture ------------------------------ */

// Données d'un fichier JSON du dépôt, partagées entre tous les écrans : une
// sauvegarde faite dans l'éditeur met à jour la liste sans rechargement.
export function useJson(path, { fallback, maxAge } = {}) {
  const [state, setState] = useState(() => {
    const hit = path ? getCached(path) : null;
    return { data: hit?.data ?? null, sha: hit?.sha ?? null, loading: Boolean(path) && !hit, error: null };
  });

  const load = useCallback(
    (force = false) => {
      if (!path) return Promise.resolve();
      setState((s) => ({ ...s, loading: !s.data, error: null }));
      return loadJson(path, { force, fallback, maxAge })
        .then((e) => setState({ data: e.data, sha: e.sha, loading: false, error: null }))
        .catch((err) => setState((s) => ({ ...s, loading: false, error: err.message || String(err) })));
    },
    // fallback est une constante littérale chez tous les appelants
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [path, maxAge]
  );

  useEffect(() => {
    if (!path) return undefined;
    load();
    return subscribeRepo((p) => {
      if (p !== path) return;
      const hit = getCached(path);
      if (hit) setState({ data: hit.data, sha: hit.sha, loading: false, error: null });
    });
  }, [path, load]);

  return { ...state, reload: () => load(true) };
}

export function useCollection(key) {
  const col = COLLECTIONS[key];
  const res = useJson(col?.path);
  return { col, list: Array.isArray(res.data) ? res.data : null, ...res };
}

// Noms de fichiers de data/corriges : un concours peut avoir un corrigé
// commité en fichier sans l'avoir dans corrige_md.
let corrigeFilesCache = null;
export function useCorrigeFiles() {
  const [files, setFiles] = useState(corrigeFilesCache);
  useEffect(() => {
    let alive = true;
    fetchHead([], ["data/corriges"])
      .then((h) => {
        corrigeFilesCache = new Set((h.dirs?.["data/corriges"] || []).filter((f) => f.endsWith(".md")).map((f) => f.slice(0, -3)));
        if (alive) setFiles(corrigeFilesCache);
      })
      .catch(() => alive && setFiles(new Set()));
    return () => {
      alive = false;
    };
  }, []);
  return files;
}

/* ------------------------------ Écriture ------------------------------ */

function sideFilesFor(col, next, prev) {
  return col.sideFiles ? col.sideFiles(next, prev) : [];
}

// Enregistre un élément (création ou modification). `extraFiles` : fichiers
// supplémentaires du même commit (images déposées dans l'éditeur).
export async function saveItem(key, item, { isNew, originalId, extraFiles = [], note } = {}) {
  const col = COLLECTIONS[key];
  const { result } = await mutateJson(col.path, (list) => {
    const prepared = col.prepare(item, { isNew, list });
    const id = isNew ? prepared.id : originalId || prepared.id;
    const idx = list.findIndex((x) => x.id === id);
    if (isNew && idx !== -1) {
      throw Object.assign(new Error(`L'identifiant « ${id} » existe déjà. Choisis-en un autre.`), { status: 400 });
    }
    if (!isNew && idx === -1) {
      throw Object.assign(new Error("Cet élément n'existe plus (supprimé entre-temps ?)."), { status: 404 });
    }
    const prev = isNew ? null : list[idx];
    // Remplacement, pas fusion : le formulaire part de la fiche complète, et
    // une fusion empêcherait de retirer un champ (statut « brouillon »…).
    const saved = isNew ? prepared : { ...prepared, id };
    // Les champs vides ajoutés par le formulaire (et absents de la fiche
    // d'origine) ne sont pas écrits : pas de bruit dans le diff du commit.
    if (prev) {
      for (const k of Object.keys(saved)) {
        const v = saved[k];
        if (!(k in prev) && (v === "" || v === null || (Array.isArray(v) && !v.length))) delete saved[k];
      }
    }
    const next = isNew ? [...list, saved] : list.map((x, i) => (i === idx ? saved : x));
    return {
      data: next,
      files: [...sideFilesFor(col, saved, prev), ...extraFiles],
      message: `${isNew ? "Ajoute" : "Modifie"} ${col.singular} : ${col.auditLabel(saved) || saved.id}${note ? ` (${note})` : ""}`,
      audit: { action: isNew ? "create" : "update", resource: key, id: saved.id, label: col.auditLabel(saved) },
      result: saved,
    };
  });
  return result;
}

// Publier / dépublier plusieurs éléments en UN commit (l'ancien panneau
// faisait un commit — donc un déploiement — par élément).
export async function setPublished(key, ids, on) {
  const col = COLLECTIONS[key];
  const set = new Set(ids);
  return mutateJson(col.path, (list) => {
    let n = 0;
    const next = list.map((x) => {
      if (!set.has(x.id) || col.isPublished(x) === on) return x;
      n++;
      return col.setPublished(x, on);
    });
    if (!n) return { data: null, result: 0 };
    return {
      data: next,
      message: `${on ? "Publie" : "Dépublie"} ${plural(n, col.singular)}`,
      audit: { action: on ? "publish" : "update", resource: key, label: `${plural(n, col.singular)} ${on ? "publié" : "dépublié"}${n > 1 ? "s" : ""}` },
      result: n,
    };
  });
}

// Suppression groupée en un commit ; les éléments partent à la corbeille.
export async function deleteItems(key, ids) {
  const col = COLLECTIONS[key];
  const set = new Set(ids);
  return mutateJson(col.path, (list) => {
    const removed = list.filter((x) => set.has(x.id));
    if (!removed.length) return { data: null, result: 0 };
    return {
      data: list.filter((x) => !set.has(x.id)),
      files: removed.flatMap((x) => sideFilesFor(col, null, x)),
      message: `Supprime ${removed.length === 1 ? `${col.singular} : ${col.auditLabel(removed[0]) || removed[0].id}` : plural(removed.length, col.singular)}`,
      audit: {
        action: "delete",
        resource: key,
        id: removed.length === 1 ? removed[0].id : "",
        label: removed.length === 1 ? col.auditLabel(removed[0]) : `${plural(removed.length, col.singular)} supprimé${removed.length > 1 ? "s" : ""}`,
      },
      trash: removed.map((item) => ({ collection: key, item })),
      result: removed.length,
    };
  });
}

// Remet un élément de la corbeille. S'il existe déjà un élément du même id,
// la copie restaurée reçoit un suffixe plutôt que d'écraser quoi que ce soit.
export async function restoreItem(key, item) {
  const col = COLLECTIONS[key];
  return mutateJson(col.path, (list) => {
    const taken = new Set(list.map((x) => x.id));
    let id = item.id;
    let n = 2;
    while (taken.has(id)) id = `${item.id}_${n++}`;
    const restored = { ...item, id };
    return {
      data: [...list, restored],
      files: sideFilesFor(col, restored, null),
      message: `Restaure ${col.singular} : ${col.auditLabel(restored) || id}`,
      audit: { action: "restore", resource: key, id, label: col.auditLabel(restored) },
      result: restored,
    };
  });
}

// Duplique un élément (nouvel id, en brouillon).
export function duplicateDraft(key, item) {
  const col = COLLECTIONS[key];
  const copy = structuredClone(item);
  delete copy.id;
  delete copy.date_ajout;
  if (copy.title) copy.title = `${copy.title} (copie)`;
  return col.setPublished(copy, false);
}
