// Documents d'exemple du Studio PDF : un par type de PDF que le site
// produit, écrits pour montrer d'un coup d'œil tout ce que les réglages
// touchent (titres des trois niveaux, formules, tableau, liste, citation,
// QCM, corrigé). Ils ne sont jamais publiés.

export const SAMPLE_COURS = {
  id: "apercu-studio-pdf",
  module: "Analyse financière",
  title: "Analyse financière : bilan fonctionnel et SIG",
  description: "Fiche d'exemple du Studio PDF — générée avec les réglages en cours.",
  content: `# Analyse financière

## 1. Le bilan fonctionnel

Le bilan fonctionnel classe les postes par **cycle** (investissement, financement, exploitation). Le fonds de roulement se calcule ainsi : $FRNG = Ressources\\ stables - Emplois\\ stables$.

- Ressources stables : capitaux propres, dettes de financement
- Emplois stables : immobilisations brutes
- Besoin en fonds de roulement : $BFR = Actif\\ circulant - Passif\\ circulant$

> **À retenir** : la trésorerie nette est égale à $FRNG - BFR$. Un FRNG positif finance tout ou partie du BFR.

### Exemple chiffré

| Indicateur | Montant (DH) |
| --- | ---: |
| FRNG | 1 200 000 |
| BFR | 800 000 |
| Trésorerie nette | 400 000 |

## 2. Les soldes intermédiaires de gestion

La valeur ajoutée mesure la richesse créée par l'entreprise :

$$VA = Production + Marge\\ commerciale - Consommations$$

1. Marge commerciale
2. Production de l'exercice
3. Excédent brut d'exploitation

### Capacité d'autofinancement

La CAF se déduit de l'EBE : $CAF = EBE + Produits\\ encaissables - Charges\\ décaissables$. Elle mesure les ressources internes dégagées par l'activité.
`,
};

export const SAMPLE_CONCOURS = {
  id: "apercu-concours",
  etablissement: "FSJES Exemple",
  annee: 2025,
  master_reel: "Master Finance et Comptabilité",
  ville: "Casablanca",
  difficulte: "Moyenne",
  images: [],
  enonce_md: `## Partie 1 — QCM (10 points)

> Durée : 2 heures. Calculatrice non programmable autorisée.

**1. Le fonds de roulement net global est égal à :** a) Ressources stables − Emplois stables b) Actif circulant − Passif circulant c) Trésorerie active − Trésorerie passive

**2. Un BFR négatif signifie que :** a) L'exploitation dégage des ressources b) L'entreprise est en difficulté c) Le FRNG est négatif

## Partie 2 — Exercice (10 points)

L'entreprise ALPHA présente les données suivantes (en DH) :

| Poste | Montant |
| --- | --- |
| Capitaux propres | 1 500 000 |
| Dettes de financement | 700 000 |
| Immobilisations brutes | 1 800 000 |

- **Question 1 :** calculez le FRNG.
- **Question 2 :** interprétez le résultat.
`,
  corrige_md: `## Partie 1

**1.** Réponse a) : $FRNG = RS - ES$.

**2.** Réponse a) : les dettes d'exploitation financent plus que les stocks et créances.

## Partie 2

- **Question 1 :** FRNG = 1 500 000 + 700 000 − 1 800 000 = 400 000 DH.
- **Question 2 :** le FRNG est positif : les ressources stables financent entièrement les emplois stables et dégagent une marge de sécurité.
`,
};

export const SAMPLE_QUIZ = {
  id: "apercu-evaluation",
  module: "Analyse financière",
  title: "QCM — Analyse financière",
  description: "Évaluation d'exemple du Studio PDF.",
  chapters: ["Chapitre 1 — Bilan fonctionnel"],
  questions: [
    {
      id: "e1",
      chapter: "Chapitre 1 — Bilan fonctionnel",
      question: "Le bilan fonctionnel classe les postes selon :",
      options: [
        { letter: "a", text: "L'exigibilité du passif" },
        { letter: "b", text: "La liquidité de l'actif" },
        { letter: "c", text: "Les cycles d'investissement, de financement et d'exploitation" },
        { letter: "d", text: "Les trois réponses sont fausses" },
      ],
      correct: ["c"],
      justification: "le bilan fonctionnel raisonne par cycles, pas par liquidité ou exigibilité.",
    },
    {
      id: "e2",
      chapter: "Chapitre 1 — Bilan fonctionnel",
      question: "La trésorerie nette est égale à :",
      options: [
        { letter: "a", text: "FRNG − BFR" },
        { letter: "b", text: "BFR − FRNG" },
        { letter: "c", text: "Trésorerie active − Trésorerie passive" },
        { letter: "d", text: "Capitaux propres − Immobilisations" },
      ],
      correct: ["a", "c"],
      justification: "les deux calculs donnent le même résultat, par le haut et par le bas du bilan.",
    },
    {
      id: "e3",
      chapter: "Chapitre 1 — Bilan fonctionnel",
      question: "Un BFR négatif signifie que :",
      options: [
        { letter: "a", text: "Le cycle d'exploitation dégage des ressources" },
        { letter: "b", text: "L'entreprise est forcément en difficulté" },
        { letter: "c", text: "Le FRNG est négatif" },
      ],
      correct: ["a"],
      justification: "c'est typique de la grande distribution : les clients paient comptant, les fournisseurs sont payés à terme.",
    },
  ],
};

// Un vrai cours peut faire 60 pages : l'aperçu n'en garde que le début.
// La coupe tombe sur une ligne vide — couper au milieu d'une formule $…$ ou
// d'un tableau laissait une fin de document illisible — et jamais à
// l'intérieur d'un bloc $$…$$ resté ouvert.
export function trimMarkdown(md, max = 9000) {
  const text = String(md || "");
  if (text.length <= max) return text;
  const blank = text.lastIndexOf("\n\n", max);
  let out = text.slice(0, blank > max / 2 ? blank : max);
  if ((out.match(/\$\$/g) || []).length % 2) out = out.slice(0, out.lastIndexOf("$$"));
  return out;
}
