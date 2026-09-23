"use client";

import { useConfirm } from "@/app/admin/_components/ui/ConfirmProvider";

// QCM du Bac : { q, choix: [...], bonne: index, explication } — une seule
// bonne réponse par question (l'ordre des propositions est mélangé à
// l'affichage sur le site).
export default function BacQcmEditor({ value, onChange, dir }) {
  const questions = value || [];
  const confirm = useConfirm();

  const maj = (i, patch) => onChange(questions.map((q, j) => (j === i ? { ...q, ...patch } : q)));
  const ajouter = () => onChange([...questions, { q: "", choix: ["", "", "", ""], bonne: 0, explication: "" }]);
  const deplacer = (i, d) => {
    const j = i + d;
    if (j < 0 || j >= questions.length) return;
    const next = [...questions];
    [next[i], next[j]] = [next[j], next[i]];
    onChange(next);
  };
  async function supprimer(i) {
    if (!(await confirm({ title: "Supprimer cette question ?", confirmLabel: "Supprimer", tone: "danger" }))) return;
    onChange(questions.filter((_, j) => j !== i));
  }
  function majChoix(i, k, texte) {
    const q = questions[i];
    maj(i, { choix: q.choix.map((c, n) => (n === k ? texte : c)) });
  }
  function ajouterChoix(i) {
    const q = questions[i];
    if (q.choix.length >= 6) return;
    maj(i, { choix: [...q.choix, ""] });
  }
  function retirerChoix(i, k) {
    const q = questions[i];
    if (q.choix.length <= 2) return;
    const choix = q.choix.filter((_, n) => n !== k);
    let bonne = q.bonne;
    if (k === bonne) bonne = 0;
    else if (k < bonne) bonne -= 1;
    maj(i, { choix, bonne });
  }

  return (
    <div className="bac-qe" dir={dir}>
      {!questions.length && <p className="bac-adm-muted">Aucune question. Ajoutez la première question du QCM.</p>}
      {questions.map((q, i) => (
        <div key={i} className="bac-qe-item">
          <div className="bac-qe-head">
            <strong>Question {i + 1}</strong>
            <div className="bac-qe-actions">
              <button type="button" className="admin-btn secondary small" onClick={() => deplacer(i, -1)} disabled={i === 0} aria-label="Monter">
                ↑
              </button>
              <button type="button" className="admin-btn secondary small" onClick={() => deplacer(i, 1)} disabled={i === questions.length - 1} aria-label="Descendre">
                ↓
              </button>
              <button type="button" className="admin-btn danger small" onClick={() => supprimer(i)}>
                Supprimer
              </button>
            </div>
          </div>
          <label className="bac-qe-label">
            Énoncé
            <textarea className="bac-qe-input" rows={2} value={q.q} onChange={(e) => maj(i, { q: e.target.value })} />
          </label>
          <div className="bac-qe-label">Propositions (cochez la bonne réponse)</div>
          {q.choix.map((c, k) => (
            <div key={k} className="bac-qe-choix">
              <input type="radio" name={`bonne-${i}`} checked={q.bonne === k} onChange={() => maj(i, { bonne: k })} aria-label={`Bonne réponse : proposition ${k + 1}`} />
              <input className="bac-qe-input" value={c} onChange={(e) => majChoix(i, k, e.target.value)} placeholder={`Proposition ${k + 1}`} />
              <button type="button" className="admin-btn secondary small" onClick={() => retirerChoix(i, k)} disabled={q.choix.length <= 2} aria-label="Retirer la proposition">
                ✕
              </button>
            </div>
          ))}
          <button type="button" className="admin-btn secondary small" onClick={() => ajouterChoix(i)} disabled={q.choix.length >= 6}>
            + Proposition
          </button>
          <label className="bac-qe-label">
            Explication (affichée après la correction)
            <textarea className="bac-qe-input" rows={2} value={q.explication || ""} onChange={(e) => maj(i, { explication: e.target.value })} />
          </label>
        </div>
      ))}
      <button type="button" className="admin-btn" onClick={ajouter}>
        + Ajouter une question
      </button>
    </div>
  );
}
