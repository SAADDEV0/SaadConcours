// Contenu réellement affiché : la version enregistrée depuis l'admin
// (public/data/bac.json) si elle existe, sinon le contenu d'origine du code.
import { getBacEdits } from "./store";
import { bacChapitreContenu, bacMatiereContenu } from "./bacContenu";

export function bacContenuId(niveau, matiere, chapitre) {
  return `${niveau}/${matiere}/${chapitre}`;
}

function nettoyer(edit) {
  if (!edit) return null;
  const { cours = "", exercices = "", resume = "", qcm = [] } = edit;
  if (!cours && !exercices && !resume && !qcm.length) return null;
  return { cours, exercices, resume, qcm };
}

export async function getBacChapitreEffectif(niveau, matiere, chapitre) {
  const edits = await getBacEdits();
  const edit = edits.find((e) => e.id === bacContenuId(niveau, matiere, chapitre));
  if (edit) return nettoyer(edit);
  return bacChapitreContenu(niveau, matiere, chapitre);
}

export async function getBacMatiereEffectif(niveau, matiere) {
  const edits = await getBacEdits();
  const out = { ...bacMatiereContenu(niveau, matiere) };
  const prefix = `${niveau}/${matiere}/`;
  for (const e of edits) {
    if (!e.id?.startsWith(prefix)) continue;
    const slug = e.id.slice(prefix.length);
    const c = nettoyer(e);
    if (c) out[slug] = c;
    else delete out[slug];
  }
  return out;
}

export async function getBacEditsIndex() {
  const edits = await getBacEdits();
  return new Map(edits.map((e) => [e.id, e.updatedAt || null]));
}
