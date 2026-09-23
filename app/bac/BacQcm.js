"use client";

import { useState } from "react";

// Ordre des propositions mélangé de façon déterministe (même rendu serveur
// et client), pour que la bonne réponse ne soit pas toujours à la même place.
function ordre(texte, n) {
  let h = 2166136261;
  for (let i = 0; i < texte.length; i++) h = Math.imul(h ^ texte.charCodeAt(i), 16777619);
  const idx = Array.from({ length: n }, (_, i) => i);
  for (let i = n - 1; i > 0; i--) {
    h = Math.imul(h ^ (h >>> 15), 2246822507) >>> 0;
    const j = h % (i + 1);
    [idx[i], idx[j]] = [idx[j], idx[i]];
  }
  return idx;
}

export default function BacQcm({ questions, lang }) {
  const [reponses, setReponses] = useState({});
  const [corrige, setCorrige] = useState(false);

  const score = questions.reduce((n, q, i) => n + (reponses[i] === q.bonne ? 1 : 0), 0);
  const toutRepondu = Object.keys(reponses).length === questions.length;
  const ar = lang === "ar";

  return (
    <div className="bac-qcm" dir={ar ? "rtl" : undefined} lang={lang}>
      {questions.map((q, i) => (
        <fieldset key={i} className="bac-qcm-q">
          <legend>
            <span className="bac-qcm-num">{i + 1}</span>
            {q.q}
          </legend>
          {ordre(q.q, q.choix.length).map((j) => {
            const c = q.choix[j];
            let etat = "";
            if (corrige && j === q.bonne) etat = " ok";
            else if (corrige && reponses[i] === j) etat = " ko";
            return (
              <label key={j} className={`bac-qcm-choix${reponses[i] === j ? " sel" : ""}${etat}`}>
                <input
                  type="radio"
                  name={`q${i}`}
                  checked={reponses[i] === j}
                  disabled={corrige}
                  onChange={() => setReponses((r) => ({ ...r, [i]: j }))}
                />
                <span>{c}</span>
              </label>
            );
          })}
          {corrige && q.explication && <p className="bac-qcm-expl">{q.explication}</p>}
        </fieldset>
      ))}

      <div className="bac-qcm-bar">
        {corrige ? (
          <>
            <div className="bac-qcm-score">
              {ar ? "النتيجة" : "Score"} : <strong>{score}</strong> / {questions.length}
            </div>
            <button
              type="button"
              className="bac-qcm-btn secondary"
              onClick={() => {
                setReponses({});
                setCorrige(false);
              }}
            >
              {ar ? "إعادة المحاولة" : "Recommencer"}
            </button>
          </>
        ) : (
          <button type="button" className="bac-qcm-btn" disabled={!toutRepondu} onClick={() => setCorrige(true)}>
            {ar ? "تصحيح" : "Corriger"} ({Object.keys(reponses).length}/{questions.length})
          </button>
        )}
      </div>
    </div>
  );
}
