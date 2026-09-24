// Analyse financière (S4) — compléments par chapitre : description SEO, résumé, exercices 2 et 3, QCM.
const md = String.raw;

const chapitres = {
  1: {
    titre: "Introduction à l'analyse financière",
    description: "Objectifs de l'analyse financière, utilisateurs, sources d'information au Maroc (CGNC, AMMC), démarche du diagnostic et commentaire, avec exercices corrigés.",
    resume: md`
## L'essentiel — Introduction à l'analyse financière

- L'**analyse financière** porte un **jugement** sur l'activité, la **rentabilité**, l'**équilibre** et la **solvabilité** d'une entreprise à partir de ses documents comptables.
- Trois questions : l'entreprise est-elle **rentable** ? **équilibrée** ? **solvable** ?
- Utilisateurs : dirigeants, associés, **banques** (capacité de remboursement), fournisseurs (liquidité), salariés (valeur ajoutée), État, investisseurs.
- Sources : les cinq états de synthèse du **CGNC** (bilan, CPC, ESG, tableau de financement, ETIC), la communication des sociétés cotées (AMMC), le registre de commerce, les données du HCP et de Bank Al-Maghrib, les informations qualitatives.
- Démarche : **collecter → retraiter → analyser l'activité et la rentabilité → analyser la structure → ratios → flux (tableau de financement) → conclure**.
- **Analyse statique** (photographie à une date) et **analyse dynamique** (flux et évolutions).
- Un ratio n'a de sens que **comparé** : dans le temps, avec le secteur, avec des normes.
- Limites : coût historique, bilan à une date, choix comptables, absence du qualitatif.
- Commentaire : **constat chiffré → explication → conséquence → recommandation**.
`,
    exercices: md`
### Exercice 2 — Deux négociants en matériaux de construction

Deux entreprises casablancaises de négoce de matériaux présentent les chiffres suivants (en milliers de DH) :

| Élément | Entreprise A | Entreprise B |
|---|---:|---:|
| Chiffre d'affaires | 50 000 | 30 000 |
| Résultat net | 2 000 | 1 800 |
| Capitaux propres | 10 000 | 12 000 |
| Total du bilan | 40 000 | 20 000 |
| Créances clients | 12 500 | 5 000 |

1. Calculez pour chaque entreprise : la marge nette, la rentabilité financière, le ratio d'autonomie (capitaux propres / total du bilan) et le délai clients (créances clients / CA × 360, en négligeant la TVA).
2. Quelle entreprise préfère un associé ? une banque ? Justifiez.

<details><summary>Voir le corrigé</summary>

**1)**

| Ratio | A | B |
|---|---:|---:|
| Marge nette | $2\,000 / 50\,000 = 4\,\%$ | $1\,800 / 30\,000 = 6\,\%$ |
| Rentabilité financière | $2\,000 / 10\,000 = 20\,\%$ | $1\,800 / 12\,000 = 15\,\%$ |
| Autonomie | $10\,000 / 40\,000 = 25\,\%$ | $12\,000 / 20\,000 = 60\,\%$ |
| Délai clients | $12\,500 / 50\,000 \times 360 = 90$ jours | $5\,000 / 30\,000 \times 360 = 60$ jours |

**2)** L'**associé** est attiré par A, qui rémunère mieux les capitaux propres (20 % contre 15 %) grâce à un fort endettement (75 % du bilan financé par des tiers). La **banque** préfère B : autonomie financière élevée (60 %), meilleure marge et clients qui paient plus vite. A est plus rentable pour ses associés **mais plus risquée** : une baisse d'activité pèserait lourdement sur un bilan très endetté.

</details>

### Exercice 3 — Atlas Plast : lire une évolution sur trois ans

La société « Atlas Plast » (Tanger) présente l'évolution suivante (en milliers de DH) :

| Élément | N−2 | N−1 | N |
|---|---:|---:|---:|
| Chiffre d'affaires | 40 000 | 46 000 | 52 900 |
| Excédent brut d'exploitation (EBE) | 6 000 | 6 440 | 6 348 |
| Besoin de financement global (BFG) | 8 000 | 11 500 | 15 870 |
| Trésorerie nette | + 1 200 | − 300 | − 2 400 |

1. Calculez le taux de croissance annuel du CA, le taux de marge brute d'exploitation (EBE / CA) et le BFG en jours de CA (BFG / CA × 360).
2. Rédigez un diagnostic de six lignes.

<details><summary>Voir le corrigé</summary>

**1)**

| | N−2 | N−1 | N |
|---|---:|---:|---:|
| Croissance du CA | — | + 15 % | + 15 % |
| EBE / CA | 15 % | 14 % | 12 % |
| BFG en jours de CA | 72 j | 90 j | 108 j |

Calculs : $46\,000 / 40\,000 - 1 = 15\,\%$ ; $52\,900 / 46\,000 - 1 = 15\,\%$ ; $6\,440 / 46\,000 = 14\,\%$ ; $15\,870 / 52\,900 \times 360 = 108$ jours.

**2) Diagnostic.** Atlas Plast connaît une croissance soutenue de 15 % par an, mais elle est **mal maîtrisée**. D'une part, la rentabilité d'exploitation s'érode (l'EBE ne représente plus que 12 % du CA contre 15 %). D'autre part, le besoin de financement global progresse beaucoup plus vite que l'activité : il passe de 72 à 108 jours de CA, ce qui traduit un allongement des délais clients ou un gonflement des stocks. Faute de ressources stables supplémentaires, la trésorerie devient négative (− 2 400 milliers de DH) : c'est l'**effet ciseaux** d'une croissance financée par le découvert. L'entreprise doit réduire son BFG (recouvrement, gestion des stocks) et renforcer ses ressources permanentes.

</details>
`,
    qcm: [
      { q: "L'analyse financière a pour objet principal :", choix: ["De tenir la comptabilité", "De porter un jugement sur la rentabilité, l'équilibre et la solvabilité", "De calculer l'impôt sur les sociétés", "D'établir les budgets"], bonne: 1, explication: "Elle transforme les comptes en diagnostic." },
      { q: "Le principal souci d'un banquier qui étudie une demande de crédit est :", choix: ["Le partage de la valeur ajoutée", "La capacité de remboursement de l'entreprise", "Le cours de Bourse", "Le nombre de salariés"], bonne: 1, explication: "Il vérifie que la CAF permet de rembourser les dettes." },
      { q: "Au Maroc, les états de synthèse du régime normal sont au nombre de :", choix: ["Deux", "Trois", "Cinq", "Sept"], bonne: 2, explication: "Bilan, CPC, ESG, tableau de financement et ETIC." },
      { q: "L'autorité qui contrôle l'information financière des sociétés cotées au Maroc est :", choix: ["Bank Al-Maghrib", "L'AMMC", "Le HCP", "La CNSS"], bonne: 1, explication: "L'Autorité Marocaine du Marché des Capitaux." },
      { q: "L'analyse dynamique étudie :", choix: ["Un bilan à une date donnée", "Les flux et les évolutions sur plusieurs exercices", "Uniquement les ratios de liquidité", "Le seul CPC"], bonne: 1, explication: "Elle explique comment l'entreprise a évolué." },
      { q: "Pour interpréter un ratio, il faut surtout :", choix: ["Le calculer avec beaucoup de décimales", "Le comparer dans le temps et avec le secteur", "Le calculer sur un seul exercice", "L'arrondir"], bonne: 1, explication: "Un ratio isolé n'a pas de signification." },
      { q: "Une limite de l'analyse financière est que le bilan :", choix: ["Est établi au coût historique", "Est toujours en valeur de marché", "Ne contient pas de dettes", "Est mensuel"], bonne: 0, explication: "Les actifs figurent à leur coût d'origine, pas à leur valeur actuelle." },
      { q: "Une entreprise très rentable peut quand même faire faillite si :", choix: ["Ses capitaux propres sont élevés", "Sa trésorerie ne lui permet pas de payer ses dettes échues", "Son résultat augmente", "Elle distribue peu de dividendes"], bonne: 1, explication: "Rentabilité et solvabilité sont deux notions différentes." },
      { q: "Dettes de financement 8 000, CAF 2 000. Capacité de remboursement ?", choix: ["0,25 an", "4 ans", "6 000", "10 ans"], bonne: 1, explication: "8 000 / 2 000 = 4 années de CAF." },
      { q: "Un commentaire d'analyse financière efficace suit l'ordre :", choix: ["Recommandation, constat, chiffre", "Constat chiffré, explication, conséquence, recommandation", "Conclusion puis calculs", "Uniquement des chiffres"], bonne: 1, explication: "Chaque affirmation s'appuie sur un chiffre puis débouche sur une action." },
    ],
  },

  2: {
    titre: "Les documents financiers de base",
    description: "Bilan et CPC selon le CGNC, état des soldes de gestion, tableau de financement et ETIC : structure, liens entre états et exercices corrigés pour le S4.",
    resume: md`
## L'essentiel — Les documents financiers de base

- Cinq états de synthèse (CGNC, loi 9-88) : **bilan**, **CPC**, **ESG**, **tableau de financement**, **ETIC**. Ils doivent donner une **image fidèle**.
- **Bilan (actif)** : actif immobilisé (classe 2 : non-valeurs, incorporelles, corporelles, financières), actif circulant hors trésorerie (classe 3 : stocks, créances, TVP), trésorerie actif (classe 5). Présenté en brut, amortissements et provisions, net.
- **Bilan (passif)** : financement permanent (classe 1 : capitaux propres, capitaux propres assimilés, dettes de financement, provisions durables), passif circulant hors trésorerie (classe 4), trésorerie passif (classe 5 : crédits d'escompte, de trésorerie, banques créditrices).
- **CPC** à trois niveaux : exploitation, financier (→ résultat courant), non courant ; résultat avant impôts − IS = **résultat net**.
- **ESG** = tableau de formation des résultats (marge, VA, EBE…) + CAF et autofinancement.
- **Tableau de financement** : synthèse des masses et tableau des emplois et ressources.
- **ETIC** : méthodes, détail des postes, échéances des créances et dettes, engagements (crédit-bail, effets escomptés) — indispensable aux retraitements.
- Liens : résultat net du CPC = résultat du passif ; dotations du CPC = hausse des amortissements ; variation des stocks du CPC = écart entre les deux bilans.
`,
    exercices: md`
### Exercice 2 — Classer les comptes dans les masses du bilan

Indiquez la masse du bilan CGNC (actif immobilisé, actif circulant, trésorerie actif, financement permanent, passif circulant, trésorerie passif) de chacun des postes suivants :

a) Emprunt obligataire ; b) Banque, solde créditeur ; c) Titres de participation ; d) Clients, effets à recevoir ; e) Subventions d'investissement ; f) Frais d'augmentation du capital ; g) État, TVA due ; h) Chèques à encaisser ; i) Provision pour dépréciation des stocks ; j) Provision durable pour litige ; k) Titres et valeurs de placement ; l) Crédit de trésorerie à 3 mois.

<details><summary>Voir le corrigé</summary>

| Poste | Masse |
|---|---|
| a) Emprunt obligataire | Financement permanent (dettes de financement) |
| b) Banque, solde créditeur | **Trésorerie passif** |
| c) Titres de participation | Actif immobilisé (immobilisations financières) |
| d) Clients, effets à recevoir | Actif circulant |
| e) Subventions d'investissement | Financement permanent (capitaux propres assimilés) |
| f) Frais d'augmentation du capital | Actif immobilisé (immobilisations en non-valeur) |
| g) État, TVA due | Passif circulant |
| h) Chèques à encaisser | Trésorerie actif |
| i) Provision pour dépréciation des stocks | Vient en **déduction** des stocks (actif circulant, colonne « amortissements et provisions ») |
| j) Provision durable pour litige | Financement permanent |
| k) Titres et valeurs de placement | Actif circulant (et non trésorerie, dans le bilan CGNC) |
| l) Crédit de trésorerie | Trésorerie passif |

</details>

### Exercice 3 — Retrouver les liens entre deux bilans et le CPC

Toujours chez « Marrakech Céramique », on dispose des informations suivantes :
- amortissements cumulés des constructions : 400 000 DH au 31/12/N−1, 450 000 DH au 31/12/N (aucune cession) ;
- amortissements cumulés du matériel de transport : 200 000 DH au 31/12/N−1 et 160 000 DH au 31/12/N. En N, un véhicule acquis 100 000 DH et amorti à hauteur de 80 000 DH a été cédé 35 000 DH ;
- stock de produits finis (valeur brute) : 300 000 DH au 31/12/N−1 et 340 000 DH au 31/12/N ;
- le résultat de N−1 (150 000 DH) a été affecté ainsi : 5 % à la réserve légale, 60 000 DH de dividendes, le solde aux autres réserves.

1. Calculez la dotation de N aux amortissements des constructions.
2. Calculez la dotation de N aux amortissements du matériel de transport, la VNA du véhicule cédé et le résultat de cession. Où figurent ces éléments dans le CPC ?
3. Calculez la variation de stock de produits finis et indiquez sa place dans le CPC.
4. Retrouvez la réserve légale et les autres réserves au 31/12/N−1.

<details><summary>Voir le corrigé</summary>

**1)** Sans cession : dotation $= 450\,000 - 400\,000 = \mathbf{50\,000\ DH}$ (charge d'exploitation, dotations d'exploitation).

**2)** Amortissements finaux = initiaux + dotation − amortissements des biens sortis : $160\,000 = 200\,000 + D - 80\,000$, d'où $D = \mathbf{40\,000\ DH}$.
- VNA du véhicule cédé : $100\,000 - 80\,000 = \mathbf{20\,000\ DH}$ → **charges non courantes** ;
- prix de cession : 35 000 DH → **produits non courants** ;
- plus-value : $35\,000 - 20\,000 = \mathbf{15\,000\ DH}$, comprise dans le résultat non courant.

**3)** Variation de stock $= 340\,000 - 300\,000 = \mathbf{+\,40\,000\ DH}$, portée en **produits d'exploitation** (« variation de stocks de produits »). La production stockée est une production de l'exercice, même si elle n'est pas encore vendue.

**4)** Réserve légale : $150\,000 \times 5\,\% = 7\,500$ DH ; autres réserves : $150\,000 - 7\,500 - 60\,000 = 82\,500$ DH.
- Réserve légale au 31/12/N−1 : $120\,000 - 7\,500 = \mathbf{112\,500\ DH}$ ;
- Autres réserves au 31/12/N−1 : $280\,000 - 82\,500 = \mathbf{197\,500\ DH}$.

</details>
`,
    qcm: [
      { q: "Le bilan est :", choix: ["Un état de flux de l'exercice", "Une photographie du patrimoine à la date de clôture", "Un budget", "Un tableau de trésorerie mensuel"], bonne: 1, explication: "C'est un état de stock, à une date." },
      { q: "Un découvert bancaire figure au bilan CGNC dans :", choix: ["La trésorerie actif", "Le passif circulant", "La trésorerie passif", "Les dettes de financement"], bonne: 2, explication: "Banques, soldes créditeurs : trésorerie passif." },
      { q: "Les subventions d'investissement figurent dans :", choix: ["Les dettes de financement", "Les capitaux propres assimilés", "Le passif circulant", "Les produits d'exploitation uniquement"], bonne: 1, explication: "Elles font partie du financement permanent." },
      { q: "Le résultat courant est égal à :", choix: ["Résultat d'exploitation + résultat financier", "Résultat d'exploitation + résultat non courant", "Résultat net + IS", "Produits − charges non courantes"], bonne: 0, explication: "Il reflète l'activité normale et récurrente." },
      { q: "La VNA des immobilisations cédées est une charge :", choix: ["D'exploitation", "Financière", "Non courante", "Supplétive"], bonne: 2, explication: "Elle figure dans les charges non courantes du CPC." },
      { q: "L'état qui détaille les échéances des dettes et les engagements hors bilan est :", choix: ["Le CPC", "L'ESG", "L'ETIC", "Le bilan"], bonne: 2, explication: "L'état des informations complémentaires." },
      { q: "L'ESG comprend :", choix: ["Le bilan et le CPC", "Le tableau de formation des résultats et le tableau de la CAF", "Le tableau de financement", "Les engagements hors bilan"], bonne: 1, explication: "Il réorganise le CPC en soldes significatifs." },
      { q: "Les immobilisations en non-valeur sont :", choix: ["Des biens revendables", "Des charges immobilisées sans valeur de revente", "Des stocks", "Des titres de placement"], bonne: 1, explication: "Frais préliminaires, charges à répartir : l'analyste les retire de l'actif." },
      { q: "Amortissements cumulés 300 000 au début, 340 000 à la fin, aucune cession. Dotation de l'exercice ?", choix: ["340 000", "40 000", "640 000", "300 000"], bonne: 1, explication: "340 000 − 300 000 = 40 000." },
      { q: "Le résultat net du CPC se retrouve au bilan dans :", choix: ["L'actif circulant", "Les capitaux propres", "Les dettes de financement", "La trésorerie"], bonne: 1, explication: "Il figure au passif, avant affectation." },
    ],
  },

  3: {
    titre: "Les soldes intermédiaires de gestion (SIG)",
    description: "Tableau de formation des résultats (ESG) : marge brute, production, valeur ajoutée, EBE, résultats, ratios et partage de la VA, avec exercices corrigés.",
    resume: md`
## L'essentiel — Les soldes intermédiaires de gestion

- Le **tableau de formation des résultats (TFR)** de l'ESG décompose la formation du résultat.
- **Marge brute sur ventes en l'état** = ventes de marchandises − achats revendus (achats ± variation de stocks de marchandises).
- **Production** = ventes de biens et services produits ± variation de stocks de produits + immobilisations produites pour elle-même.
- **Consommation** = achats consommés de matières et fournitures + autres charges externes.
- **Valeur ajoutée** = marge brute + production − consommation : richesse créée par l'entreprise.
- **EBE** = VA + subventions d'exploitation − impôts et taxes − charges de personnel : performance de l'exploitation, indépendante du financement et des amortissements. Négatif : **IBE**.
- Résultat d'exploitation = EBE + autres produits − autres charges + reprises − dotations ; puis ± résultat financier = **résultat courant** ; ± non courant − IS = **résultat net**.
- Ratios : taux de marge commerciale, **VA / CA** (intégration), **EBE / CA**, charges de personnel / VA, charges financières / EBE, marge nette.
- Partage de la VA : personnel, État, prêteurs, entreprise (autofinancement), associés.
- Retraitements : **crédit-bail** (redevance → dotation + intérêts : VA et EBE augmentent), **intérimaires** (→ charges de personnel : VA augmente, EBE inchangé).
`,
    exercices: md`
### Exercice 2 — Ifrane Agro : une croissance qui ne crée pas de valeur

La société « Ifrane Agro » (transformation de fruits) présente les soldes suivants (en milliers de DH) :

| Élément | N−1 | N |
|---|---:|---:|
| Chiffre d'affaires (= production, pas de variation de stocks) | 8 000 | 9 200 |
| Consommation de l'exercice | 4 800 | 5 980 |
| Impôts et taxes | 120 | 130 |
| Charges de personnel | 1 600 | 1 780 |
| Dotations d'exploitation | 500 | 560 |
| Résultat financier | − 200 | − 260 |
| Résultat non courant | + 30 | − 40 |
| Impôts sur les résultats | 170 | 100 |

1. Calculez pour chaque année la VA, l'EBE, le résultat d'exploitation, le résultat courant et le résultat net.
2. Calculez le taux de croissance du CA, VA / CA, EBE / CA, charges de personnel / VA et la marge nette.
3. Commentez.

<details><summary>Voir le corrigé</summary>

**1)**

| (milliers de DH) | N−1 | N |
|---|---:|---:|
| Valeur ajoutée | $8\,000 - 4\,800 = 3\,200$ | $9\,200 - 5\,980 = 3\,220$ |
| EBE | $3\,200 - 120 - 1\,600 = 1\,480$ | $3\,220 - 130 - 1\,780 = 1\,310$ |
| Résultat d'exploitation | $1\,480 - 500 = 980$ | $1\,310 - 560 = 750$ |
| Résultat courant | $980 - 200 = 780$ | $750 - 260 = 490$ |
| Résultat net | $780 + 30 - 170 = 640$ | $490 - 40 - 100 = 350$ |

**2)**

| Ratio | N−1 | N |
|---|---:|---:|
| Croissance du CA | — | + 15 % |
| VA / CA | 40,0 % | 35,0 % |
| EBE / CA | 18,5 % | 14,2 % |
| Charges de personnel / VA | 50,0 % | 55,3 % |
| Marge nette | 8,0 % | 3,8 % |

**3)** Le chiffre d'affaires progresse de 15 %, mais la valeur ajoutée stagne (+ 0,6 %) : la consommation augmente de 25 %, sans doute sous l'effet de la hausse du prix des fruits et de l'énergie, que l'entreprise n'a pas répercutée sur ses prix. Les charges de personnel absorbent une part croissante de la VA (55 %) et l'EBE recule de 11,5 %. Le résultat net est presque divisé par deux, aggravé par la hausse des charges financières et un résultat non courant négatif. La croissance est donc **sans création de valeur** : l'entreprise doit revoir sa politique de prix et ses achats.

</details>

### Exercice 3 — Retraiter le crédit-bail et le personnel intérimaire

Une entreprise présente : VA 2 000 ; EBE 700 ; résultat d'exploitation 400 ; résultat financier − 100 ; résultat courant 300 (en milliers de DH). Ses autres charges externes comprennent :
- des redevances de crédit-bail de 240, que l'on décompose en amortissement 180 et intérêts 60 ;
- des factures d'une agence d'intérim de 90.

1. Recalculez la VA, l'EBE, le résultat d'exploitation, le résultat financier et le résultat courant après retraitement.
2. Pourquoi ce retraitement est-il utile pour comparer deux entreprises ?

<details><summary>Voir le corrigé</summary>

**1)**
- **Consommation** : diminue de $240 + 90 = 330$ (les deux montants quittent les autres charges externes).
- **VA** : $2\,000 + 330 = \mathbf{2\,330}$.
- **Charges de personnel** : augmentent de 90 (intérimaires).
- **EBE** : $700 + 240 = \mathbf{940}$ (l'intérim, reclassé en personnel, ne change pas l'EBE).
- **Résultat d'exploitation** : $400 + 240 - 180 = \mathbf{460}$ (la redevance disparaît des charges externes, la dotation de 180 apparaît).
- **Résultat financier** : $-100 - 60 = \mathbf{-160}$.
- **Résultat courant** : $460 - 160 = \mathbf{300}$, **inchangé** : le retraitement déplace les charges entre les soldes sans modifier leur total.

**2)** Une entreprise qui loue ses machines en crédit-bail paraît avoir une VA et un EBE plus faibles qu'une entreprise qui les a achetées à crédit, alors que leur situation économique est la même. Le retraitement place les deux entreprises sur un **pied d'égalité** : l'usage du bien est traité comme une acquisition financée par emprunt.

</details>
`,
    qcm: [
      { q: "La valeur ajoutée est égale à :", choix: ["CA − charges de personnel", "Marge brute + production − consommation", "EBE + dotations", "Résultat net + IS"], bonne: 1, explication: "Elle mesure la richesse créée par l'entreprise." },
      { q: "L'EBE se calcule :", choix: ["Après les dotations aux amortissements", "Avant les dotations, les charges financières et les éléments non courants", "Après l'impôt sur les résultats", "Après les charges financières"], bonne: 1, explication: "C'est la performance brute de l'exploitation." },
      { q: "Achats de marchandises 500, stock initial 80, stock final 100. Achats revendus ?", choix: ["520", "480", "500", "680"], bonne: 1, explication: "500 + (80 − 100) = 480." },
      { q: "Une augmentation du stock de produits finis :", choix: ["Diminue la production de l'exercice", "Augmente la production de l'exercice", "N'a pas d'effet", "Diminue la consommation"], bonne: 1, explication: "C'est une production stockée, comptée positivement." },
      { q: "Une IBE (insuffisance brute d'exploitation) signifie que :", choix: ["L'exploitation détruit de la ressource avant même les amortissements", "Le résultat net est positif", "L'entreprise n'a pas de dettes", "Les ventes augmentent"], bonne: 0, explication: "Situation grave : l'exploitation ne couvre pas ses charges courantes." },
      { q: "Le ratio charges de personnel / VA mesure :", choix: ["La rentabilité financière", "La part de la richesse créée revenant aux salariés", "La liquidité", "L'endettement"], bonne: 1, explication: "C'est un ratio de partage de la valeur ajoutée." },
      { q: "Le retraitement du crédit-bail :", choix: ["Diminue la VA", "Augmente la VA et l'EBE", "Diminue l'EBE", "Modifie le résultat courant"], bonne: 1, explication: "La redevance quitte la consommation ; elle est remplacée par une dotation et des intérêts." },
      { q: "Les produits de cession d'immobilisations figurent dans :", choix: ["La production de l'exercice", "Le résultat d'exploitation", "Le résultat non courant", "La valeur ajoutée"], bonne: 2, explication: "Ce sont des produits non courants." },
      { q: "VA 3 000, subventions d'exploitation 100, impôts et taxes 200, charges de personnel 1 700. EBE ?", choix: ["1 100", "1 200", "1 300", "900"], bonne: 1, explication: "3 000 + 100 − 200 − 1 700 = 1 200." },
      { q: "Le résultat courant est égal à :", choix: ["EBE − dotations", "Résultat d'exploitation ± résultat financier", "Résultat net + résultat non courant", "VA − charges de personnel"], bonne: 1, explication: "Il mesure la performance récurrente, financement compris." },
    ],
  },

  4: {
    titre: "La capacité d'autofinancement (CAF)",
    description: "CAF selon le CGNC : méthodes additive et soustractive, cessions, subventions, autofinancement et capacité de remboursement, avec exercices corrigés.",
    resume: md`
## L'essentiel — La capacité d'autofinancement

- **CAF = produits encaissables − charges décaissables** : ressource interne dégagée par l'exercice.
- **Méthode additive (ESG du CGNC)** : résultat net + dotations (exploitation, financières, non courantes) − reprises (y compris sur subventions d'investissement) − produits de cession + VNA des immobilisations cédées.
- Les dotations et reprises relatives à l'**actif circulant** et à la **trésorerie** sont **exclues** (le CGNC les traite comme décaissables / encaissables).
- **Méthode soustractive** : EBE + autres produits − autres charges d'exploitation + transferts de charges + produits financiers encaissables − charges financières décaissables + produits non courants encaissables − charges non courantes décaissables − IS. Les deux méthodes doivent coïncider.
- **Autofinancement = CAF − distributions de bénéfices versées dans l'exercice.**
- Interprétation : **capacité de remboursement** = dettes de financement / CAF (moins de 3 à 4 ans) ; CAF / CA ; autofinancement / investissements.
- Une entreprise en **perte** peut avoir une CAF positive (dotations importantes) ; une CAF négative est une alerte grave.
- CAF ≠ trésorerie : la trésorerie d'exploitation réellement dégagée est $ETE = EBE - \Delta BFR$ d'exploitation.
`,
    exercices: md`
### Exercice 2 — Une entreprise en perte peut-elle s'autofinancer ?

Une entreprise hôtelière d'Essaouira affiche une **perte** de 120 milliers de DH. Son CPC comprend (en milliers de DH) : dotations d'exploitation aux amortissements 260 ; dotations non courantes 40 ; reprises non courantes sur provisions pour risques 30 ; quote-part des subventions d'investissement virée au résultat 25 ; produit de cession d'un véhicule 200 ; VNA de ce véhicule 150. Aucun dividende n'a été versé.

1. Calculez la CAF et l'autofinancement.
2. Comment une entreprise en perte peut-elle dégager une CAF positive ? Est-ce rassurant ?

<details><summary>Voir le corrigé</summary>

**1)**

| Élément | Montant |
|---|---:|
| Résultat net (perte) | − 120 |
| + Dotations d'exploitation | 260 |
| + Dotations non courantes | 40 |
| − Reprises non courantes | − 30 |
| − Quote-part des subventions d'investissement | − 25 |
| − Produit de cession | − 200 |
| + VNA des immobilisations cédées | 150 |
| **= CAF** | **75** |

Autofinancement : $75 - 0 = \mathbf{75}$.

**2)** La perte est due à des **charges calculées** (260 d'amortissements, 40 de dotations) qui ne sortent pas de la trésorerie. L'activité couvre donc ses charges décaissables et dégage 75 milliers de DH. C'est **peu rassurant** : 75 ne couvre même pas le tiers des amortissements de l'exercice (260). L'entreprise ne pourra pas renouveler ses équipements sans financement externe ; si la situation dure, son outil vieillira.

</details>

### Exercice 3 — CAF, trésorerie d'exploitation et financement des investissements

Une entreprise industrielle de Tanger présente pour N (en milliers de DH) : EBE 1 500 ; CAF 1 000 ; dividendes versés 300 ; investissements de l'exercice 1 400. Au cours de l'exercice, ses stocks ont augmenté de 300, ses créances clients de 450 et ses dettes fournisseurs de 150.

1. Calculez la variation du besoin en fonds de roulement d'exploitation et l'excédent de trésorerie d'exploitation (ETE).
2. Calculez l'autofinancement et le taux d'autofinancement des investissements.
3. Commentez.

<details><summary>Voir le corrigé</summary>

**1)** $\Delta BFR_{exploitation} = 300 + 450 - 150 = \mathbf{+\,600}$ ; $ETE = 1\,500 - 600 = \mathbf{900}$.

**2)** Autofinancement $= 1\,000 - 300 = \mathbf{700}$ ; taux d'autofinancement $= 700 / 1\,400 = \mathbf{50\,\%}$.

**3)** L'exploitation dégage un EBE de 1 500, mais la hausse des stocks et des créances en immobilise 600 : la trésorerie réellement produite par l'exploitation n'est que de 900. L'autofinancement couvre la moitié des investissements ; l'autre moitié (700) doit être financée par emprunt, augmentation de capital ou cessions, sans quoi la trésorerie se dégradera. L'entreprise gagnerait à maîtriser ses stocks et ses délais clients.

</details>
`,
    qcm: [
      { q: "La CAF est égale à :", choix: ["Produits − charges", "Produits encaissables − charges décaissables", "Résultat net − dividendes", "EBE − dotations"], bonne: 1, explication: "Elle ne retient que les éléments monétaires." },
      { q: "Dans la méthode additive, le produit de cession d'une immobilisation est :", choix: ["Ajouté", "Retranché", "Ignoré car déjà dans l'EBE", "Multiplié par le taux d'IS"], bonne: 1, explication: "C'est un désinvestissement, présenté à part dans le tableau de financement." },
      { q: "Dans la méthode additive, la VNA des immobilisations cédées est :", choix: ["Retranchée", "Ajoutée", "Ignorée", "Déduite de l'EBE"], bonne: 1, explication: "C'est une charge calculée, sans décaissement." },
      { q: "Selon le CGNC, une dotation aux provisions pour dépréciation des créances clients :", choix: ["Est ajoutée au résultat net pour calculer la CAF", "N'est pas ajoutée : elle est traitée comme décaissable", "Est retranchée deux fois", "Est un produit"], bonne: 1, explication: "Les provisions de l'actif circulant sont exclues des retraitements." },
      { q: "La quote-part des subventions d'investissement virée au résultat :", choix: ["Augmente la CAF", "Est retranchée dans le calcul de la CAF", "Est ajoutée à l'EBE", "Est une charge décaissable"], bonne: 1, explication: "C'est un produit calculé : la subvention a été encaissée lors de l'investissement." },
      { q: "Résultat net 300, dotations 200, reprises 50, produit de cession 80, VNA 60. CAF ?", choix: ["430", "510", "590", "370"], bonne: 0, explication: "300 + 200 − 50 − 80 + 60 = 430." },
      { q: "L'autofinancement est égal à :", choix: ["CAF + dividendes", "CAF − dividendes versés dans l'exercice", "Résultat net − dividendes", "EBE − IS"], bonne: 1, explication: "C'est la part de la CAF conservée par l'entreprise." },
      { q: "Dettes de financement 5 000, CAF 1 000. La capacité de remboursement est :", choix: ["0,2 an", "5 ans, jugée élevée par les banques", "4 000", "1 an"], bonne: 1, explication: "5 000 / 1 000 = 5 ans, au-delà du seuil usuel de 3 à 4 ans." },
      { q: "Une entreprise en perte :", choix: ["A toujours une CAF négative", "Peut avoir une CAF positive si ses charges calculées sont importantes", "N'a pas de CAF", "A une CAF égale à sa perte"], bonne: 1, explication: "Les dotations réduisent le résultat sans décaissement." },
      { q: "EBE 800, hausse des stocks 150, hausse des clients 200, hausse des fournisseurs 100. Excédent de trésorerie d'exploitation ?", choix: ["1 050", "550", "800", "350"], bonne: 1, explication: "ΔBFR = 150 + 200 − 100 = 250 ; ETE = 800 − 250 = 550." },
    ],
  },

  5: {
    titre: "Le bilan financier (analyse patrimoniale)",
    description: "Bilan financier : retraitements du bilan CGNC, fonds de roulement financier, ratios de liquidité et de solvabilité, actif net réel, avec exercices corrigés.",
    resume: md`
## L'essentiel — Le bilan financier

- Point de vue du **créancier** : l'entreprise est-elle **liquide** (court terme) et **solvable** (ensemble des dettes) ?
- Actif classé par **liquidité**, passif par **exigibilité**, avec le critère de l'**échéance à un an** ; postes en **valeur réelle**.
- Structure : actif immobilisé (plus d'un an), stocks, créances, disponibilités / capitaux propres, **DLMT**, **DCT**.
- Retraitements clés : **non-valeurs** et **écarts de conversion actif** retirés (− capitaux propres) ; **plus-values latentes** ajoutées ; **stock outil** et créances à plus d'un an en actif immobilisé ; TVP liquides en disponibilités ; dettes de financement à moins d'un an, **dividendes** à payer, provisions à moins d'un an en **DCT** ; provisions sans objet en capitaux propres ; **EENE** + créances et + trésorerie passif.
- **FR financier** = capitaux propres + DLMT − actif immobilisé = actif circulant − DCT.
- **Liquidité générale** = AC / DCT (> 1) ; **réduite** = (créances + disponibilités) / DCT ; **immédiate** = disponibilités / DCT.
- **Solvabilité générale** = actif réel / total des dettes ; **ANR** = actif réel − dettes = capitaux propres retraités (valeur patrimoniale).
- Chaque retraitement doit être **équilibré** : vérifier l'égalité actif = passif après retraitements.
`,
    exercices: md`
### Exercice 2 — Mesurer l'effet de cinq retraitements

Avant retraitements, le bilan condensé d'une entreprise de Meknès est le suivant (en milliers de DH) : actif immobilisé 1 600 ; stocks 500 ; créances 800 ; disponibilités 200 ; capitaux propres 1 500 ; DLMT 700 ; DCT 900.

Informations :
- a) les créances comprennent un écart de conversion actif de 25 (perte latente) ;
- b) les DCT comprennent un écart de conversion passif de 15 (gain latent) ;
- c) les DCT comprennent un compte courant d'associé de 200, bloqué pour trois ans ;
- d) les DLMT comprennent une provision pour litige de 60 ; le jugement est attendu dans six mois ;
- e) le fonds commercial, inscrit pour 300, est estimé à 180.

1. Présentez le bilan financier condensé après retraitements.
2. Calculez le FR financier et la liquidité générale avant et après retraitements. Commentez.

<details><summary>Voir le corrigé</summary>

**1)**

| Retraitement | Actif immo. | Créances | Capitaux propres | DLMT | DCT |
|---|---:|---:|---:|---:|---:|
| Avant | 1 600 | 800 | 1 500 | 700 | 900 |
| a) ECA | | − 25 | − 25 | | |
| b) ECP | | | + 15 | | − 15 |
| c) Compte courant bloqué | | | | + 200 | − 200 |
| d) Provision à moins d'un an | | | | − 60 | + 60 |
| e) Moins-value sur fonds commercial | − 120 | | − 120 | | |
| **Après** | **1 480** | **775** | **1 370** | **840** | **745** |

Bilan financier : actif immobilisé 1 480 ; stocks 500 ; créances 775 ; disponibilités 200 ; **total 2 955** — capitaux propres 1 370 ; DLMT 840 ; DCT 745 ; **total 2 955** ✔.

**2)**

| | Avant | Après |
|---|---:|---:|
| FR financier | $1\,500 + 700 - 1\,600 = 600$ | $1\,370 + 840 - 1\,480 = 730$ |
| Liquidité générale | $1\,500 / 900 = 1{,}67$ | $1\,475 / 745 = 1{,}98$ |

Les retraitements **améliorent** la liquidité (le compte courant bloqué n'est pas une dette à court terme) mais **réduisent** les capitaux propres réels de 130 (fonds commercial surévalué, perte de change latente). L'analyse sans retraitement aurait sous-estimé la liquidité et surestimé le patrimoine.

</details>

### Exercice 3 — Atlas Béton : valeur de l'action et effets d'une décision

On reprend les résultats de l'exercice du cours (Atlas Béton) : ANR 3 270 ; actif immobilisé 3 840 ; actif circulant 1 780 (dont créances 1 020 et disponibilités 160) ; capitaux propres 3 270 ; DLMT 950 ; DCT 1 400. Le capital de 2 000 000 DH est divisé en actions de 100 DH.

1. Calculez la valeur mathématique intrinsèque d'une action (ANR / nombre d'actions).
2. La banque accepte de transformer 250 de dettes à court terme en un prêt à 5 ans. Calculez le nouveau FR financier et la nouvelle liquidité générale.
3. Indépendamment de la question 2, un client règle 200 de créances. Quel est l'effet sur les trois ratios de liquidité ?

<details><summary>Voir le corrigé</summary>

**1)** Nombre d'actions : $2\,000\,000 / 100 = 20\,000$. Valeur intrinsèque : $3\,270\,000 / 20\,000 = \mathbf{163{,}50\ DH}$ par action, soit 63,5 % de plus que le nominal.

**2)** DLMT $= 950 + 250 = 1\,200$ ; DCT $= 1\,400 - 250 = 1\,150$.
- FR financier $= 3\,270 + 1\,200 - 3\,840 = \mathbf{630}$ (contre 380) ;
- Liquidité générale $= 1\,780 / 1\,150 \approx \mathbf{1{,}55}$ (contre 1,27).

La consolidation de la dette à court terme en dette à moyen terme améliore nettement la liquidité, sans changer la solvabilité.

**3)** Créances $1\,020 - 200 = 820$ ; disponibilités $160 + 200 = 360$.
- Liquidité générale : inchangée, $1\,780 / 1\,400 = 1{,}27$ ;
- Liquidité réduite : inchangée, $(820 + 360) / 1\,400 = 0{,}84$ ;
- Liquidité immédiate : $360 / 1\,400 \approx \mathbf{0{,}26}$ (contre 0,11).

Un encaissement transforme une créance en disponibilité : seule la liquidité **immédiate** s'améliore.

</details>
`,
    qcm: [
      { q: "Le bilan financier classe l'actif selon :", choix: ["La nature des biens", "La liquidité croissante, avec un critère d'un an", "L'ordre alphabétique", "La date d'acquisition"], bonne: 1, explication: "Il répond à une logique de liquidité et d'exigibilité." },
      { q: "Les frais préliminaires sont, dans le bilan financier :", choix: ["Maintenus à l'actif immobilisé", "Supprimés de l'actif et déduits des capitaux propres", "Reclassés en stocks", "Ajoutés aux DLMT"], bonne: 1, explication: "C'est un actif fictif, sans valeur de réalisation." },
      { q: "Le stock outil est reclassé :", choix: ["En disponibilités", "En actif immobilisé", "En DCT", "En capitaux propres"], bonne: 1, explication: "Ce stock permanent ne sera pas transformé en argent à moins d'un an." },
      { q: "Les effets escomptés non échus sont réintégrés :", choix: ["Uniquement dans les créances", "Dans les créances et dans la trésorerie passif", "Dans les capitaux propres", "Dans les DLMT"], bonne: 1, explication: "La créance existe toujours, la dette envers la banque aussi." },
      { q: "Dans un bilan avant affectation, les dividendes à distribuer sont :", choix: ["Laissés en capitaux propres", "Reclassés en DCT", "Reclassés en DLMT", "Supprimés"], bonne: 1, explication: "Ils seront payés dans l'année." },
      { q: "Le FR financier est égal à :", choix: ["Capitaux propres − DCT", "Capitaux propres + DLMT − actif immobilisé", "Actif circulant + DCT", "Actif immobilisé − DLMT"], bonne: 1, explication: "Il équivaut aussi à actif circulant − DCT." },
      { q: "Actif circulant 900, DCT 1 000. La liquidité générale vaut :", choix: ["1,11", "0,9", "100", "1,9"], bonne: 1, explication: "900 / 1 000 = 0,9 : les actifs à court terme ne couvrent pas les dettes à court terme." },
      { q: "La liquidité réduite exclut :", choix: ["Les disponibilités", "Les créances", "Les stocks", "Les DCT"], bonne: 2, explication: "Les stocks sont les actifs circulants les moins liquides." },
      { q: "L'actif net réel est égal :", choix: ["Au capital social", "À l'actif réel moins le total des dettes", "Au total du bilan", "Au résultat net"], bonne: 1, explication: "Il correspond aux capitaux propres retraités." },
      { q: "Un encaissement de créances clients améliore :", choix: ["La liquidité générale", "La liquidité réduite", "La liquidité immédiate", "La solvabilité générale"], bonne: 2, explication: "Une créance devient disponibilité : seul le ratio immédiat change." },
    ],
  },

  6: {
    titre: "L'équilibre financier : FR, BFR et trésorerie nette",
    description: "FRF, besoin de financement global et trésorerie nette à partir du bilan CGNC : relation TN = FR − BFR, effet ciseaux et exercices corrigés.",
    resume: md`
## L'essentiel — FR, BFR et trésorerie nette

- Logique **fonctionnelle** : cycle d'investissement-financement (long terme), cycle d'exploitation (court terme), trésorerie. Le bilan CGNC est déjà présenté en masses fonctionnelles.
- **FRF = financement permanent − actif immobilisé** : ressources durables disponibles pour le cycle d'exploitation. Règle : emplois durables financés par des ressources durables.
- **BFG = actif circulant hors trésorerie − passif circulant hors trésorerie** : besoin permanent lié aux décalages (stocks, clients, fournisseurs). BFR d'exploitation + BFR hors exploitation.
- **TN = trésorerie actif − trésorerie passif = FRF − BFG** (relation fondamentale, à vérifier toujours).
- BFG négatif dans la **grande distribution** (clients comptant, fournisseurs à terme) ; élevé dans l'industrie et le BTP.
- **BFR en jours de CA** = BFR / CA HT × 360 ≈ stockage + délai clients − délai fournisseurs.
- **Effet ciseaux** : le BFR croît avec le CA ; sans hausse du FRF, la trésorerie se dégrade, même si l'entreprise est rentable.
- Remèdes : **augmenter le FRF** (capital, réserves, emprunt long, cessions), **réduire le BFG** (stocks, recouvrement, affacturage, délais fournisseurs dans les limites de la loi 69-21), financer la pointe à court terme.
`,
    exercices: md`
### Exercice 2 — Classer, calculer et décomposer le besoin de financement

Bilan CGNC simplifié d'une entreprise de Béni Mellal (en milliers de DH) :

| ACTIF | Montant | PASSIF | Montant |
|---|---:|---|---:|
| Actif immobilisé | 2 400 | Financement permanent | 2 880 |
| Stocks | 700 | Fournisseurs | 820 |
| Clients | 900 | Dettes fiscales et sociales d'exploitation | 130 |
| Autres débiteurs (créance sur cession d'immobilisation 60, acompte d'IS 40) | 100 | Fournisseurs d'immobilisations | 90 |
| Titres et valeurs de placement | 50 | Crédits d'escompte | 150 |
| Trésorerie actif | 30 | Banques, soldes créditeurs | 110 |
| **Total** | **4 180** | **Total** | **4 180** |

1. Calculez le FRF, le BFG et la TN ; vérifiez la relation fondamentale.
2. Décomposez le BFG en BFR d'exploitation et BFR hors exploitation.
3. Quel est le principal problème de cette entreprise ?

<details><summary>Voir le corrigé</summary>

**1)**
- FRF $= 2\,880 - 2\,400 = \mathbf{480}$ ;
- Actif circulant hors trésorerie $= 700 + 900 + 100 + 50 = 1\,750$ ; passif circulant hors trésorerie $= 820 + 130 + 90 = 1\,040$ ; BFG $= \mathbf{710}$ ;
- TN $= 30 - (150 + 110) = \mathbf{-\,230}$ ; vérification : $480 - 710 = -\,230$ ✔.

**2)**
- BFR d'exploitation $= 700 + 900 - 820 - 130 = \mathbf{650}$ ;
- BFR hors exploitation $= (100 + 50) - 90 = \mathbf{60}$ (créance sur cession, acompte d'IS, titres de placement, dettes sur immobilisations) ;
- Total $= 710$ ✔.

**3)** Le FRF est positif mais ne couvre que les deux tiers du BFG : l'exploitation est financée à hauteur de 230 par des crédits d'escompte et un découvert. Le problème vient essentiellement du **cycle d'exploitation** (stocks et clients élevés). L'entreprise doit réduire ses stocks et accélérer ses encaissements, ou consolider une partie de ses concours bancaires en crédit à moyen terme.

</details>

### Exercice 3 — Anticiper l'effet ciseaux

Une PME d'Agadir réalise un CA de 24 millions de DH ; son BFR d'exploitation représente 60 jours de CA. Elle prévoit une croissance de 25 % l'an prochain. Son FRF n'augmentera que de son autofinancement, soit 0,6 million de DH ; sa trésorerie nette actuelle est nulle.

1. Calculez le BFR actuel et le BFR prévisionnel.
2. Calculez la trésorerie nette prévisionnelle.
3. De combien de jours de CA faudrait-il réduire le BFR pour garder une trésorerie nulle ?

<details><summary>Voir le corrigé</summary>

**1)** BFR actuel $= 24 \times 60 / 360 = \mathbf{4}$ millions de DH. CA prévisionnel $= 24 \times 1{,}25 = 30$ millions ; BFR prévisionnel $= 30 \times 60 / 360 = \mathbf{5}$ millions.

**2)** ΔBFR $= +1$ million ; ΔFRF $= +0{,}6$ million ; ΔTN $= 0{,}6 - 1 = -0{,}4$. La trésorerie nette devient **− 0,4 million de DH** : c'est l'effet ciseaux.

**3)** Pour une TN nulle, le BFR ne doit pas dépasser $4 + 0{,}6 = 4{,}6$ millions, soit $4{,}6 / 30 \times 360 = 55{,}2$ jours de CA. Il faut donc gagner **4,8 jours** (par exemple en réduisant le délai clients ou la durée de stockage), ou trouver 0,4 million de ressources durables supplémentaires.

</details>
`,
    qcm: [
      { q: "Le FRF est égal à :", choix: ["Actif circulant − passif circulant", "Financement permanent − actif immobilisé", "Trésorerie actif − trésorerie passif", "Capitaux propres − dettes"], bonne: 1, explication: "C'est la ressource durable restant après le financement des immobilisations." },
      { q: "La relation fondamentale est :", choix: ["TN = BFG − FRF", "TN = FRF − BFG", "FRF = TN − BFG", "BFG = FRF + TN"], bonne: 1, explication: "La trésorerie résulte de l'équilibre entre FRF et BFG." },
      { q: "FRF 800, BFG 1 000. La trésorerie nette vaut :", choix: ["1 800", "− 200", "200", "0"], bonne: 1, explication: "800 − 1 000 = − 200 : l'exploitation est en partie financée par la banque." },
      { q: "Dans le bilan CGNC, les crédits d'escompte figurent :", choix: ["Dans le passif circulant", "Dans la trésorerie passif", "Dans le financement permanent", "Dans l'actif circulant"], bonne: 1, explication: "Ce sont des concours bancaires courants." },
      { q: "Un BFG négatif est fréquent :", choix: ["Dans le BTP", "Dans la grande distribution", "Dans l'industrie lourde", "Dans l'agriculture"], bonne: 1, explication: "Clients payant comptant, fournisseurs payés à terme." },
      { q: "L'effet ciseaux désigne :", choix: ["La baisse simultanée du CA et des charges", "La dégradation de la trésorerie quand le BFR croît plus vite que le FRF", "La hausse des taux d'intérêt", "La baisse des stocks"], bonne: 1, explication: "La croissance consomme de la trésorerie." },
      { q: "BFR 900 000 DH, CA HT 5 400 000 DH. BFR en jours de CA ?", choix: ["6 jours", "60 jours", "16,7 jours", "90 jours"], bonne: 1, explication: "900 000 / 5 400 000 × 360 = 60 jours." },
      { q: "Pour augmenter le FRF, l'entreprise peut :", choix: ["Accorder plus de délais à ses clients", "Contracter un emprunt à long terme", "Augmenter ses stocks", "Utiliser son découvert"], bonne: 1, explication: "Un emprunt à long terme augmente le financement permanent." },
      { q: "ΔFRF = + 300 et ΔBFG = + 450. La trésorerie nette :", choix: ["Augmente de 750", "Diminue de 150", "Augmente de 150", "Ne change pas"], bonne: 1, explication: "ΔTN = 300 − 450 = − 150." },
      { q: "Une trésorerie nette négative est surtout préoccupante lorsqu'elle est :", choix: ["Ponctuelle et saisonnière", "Structurelle et croissante", "Compensée par un FRF élevé", "Liée à un BFG négatif"], bonne: 1, explication: "L'entreprise dépend alors durablement de sa banque." },
    ],
  },

  7: {
    titre: "Les ratios financiers",
    description: "Ratios de structure, de liquidité, de rotation (stocks, délais clients et fournisseurs) et de rentabilité : formules, lecture et exercices corrigés.",
    resume: md`
## L'essentiel — Les ratios financiers

- Un ratio n'a de sens que **comparé** (dans le temps, avec le secteur, avec une norme).
- **Structure** : financement permanent / actif immobilisé (> 1) ; **autonomie** = capitaux propres / passif ; **endettement** = dettes de financement / capitaux propres (< 1) ; **capacité de remboursement** = dettes de financement / CAF (< 3 à 4 ans) ; charges financières / EBE.
- **Liquidité** : générale (AC / DCT), réduite ((créances + disponibilités) / DCT), immédiate (disponibilités / DCT).
- **Stockage** = stock moyen / coût des ventes (ou des consommations) × 360 : même base de coût au numérateur et au dénominateur.
- **Délai clients** = (clients + EENE) / **CA TTC** × 360 ; **délai fournisseurs** = fournisseurs / **achats TTC** × 360.
- **BFR en jours de CA** = BFR / CA HT × 360 ; rotation de l'actif = CA / actif économique.
- **Rentabilité** : marge nette (RN / CA), rentabilité économique, rentabilité financière (RN / capitaux propres).
- Présentation : **tableau de bord** sur plusieurs exercices, puis commentaire par famille (activité, rentabilité, structure, gestion) et synthèse.
- Limites : données comptables, soldes de clôture, normes indicatives, embellissements de fin d'exercice.
`,
    exercices: md`
### Exercice 2 — Durées de stockage d'une entreprise industrielle

Une conserverie d'Agadir fournit (en milliers de DH) : stock de matières au début 600 et à la fin 800 ; achats de matières HT 8 600 ; stock de produits finis au début 1 100 et à la fin 1 300 ; coût de production des produits vendus 14 400.

1. Calculez le coût d'achat des matières consommées.
2. Calculez les durées moyennes de stockage des matières et des produits finis.
3. L'entreprise pêche et conditionne surtout entre mars et juillet. Quelle précaution prendre pour interpréter ces durées ?

<details><summary>Voir le corrigé</summary>

**1)** Matières consommées $= 8\,600 + 600 - 800 = \mathbf{8\,400}$.

**2)**
- Matières : stock moyen $= (600 + 800) / 2 = 700$ ; durée $= 700 / 8\,400 \times 360 = \mathbf{30\ jours}$ ;
- Produits finis : stock moyen $= (1\,100 + 1\,300) / 2 = 1\,200$ ; durée $= 1\,200 / 14\,400 \times 360 = \mathbf{30\ jours}$.

**3)** Les stocks de début et de fin d'exercice (décembre, janvier) sont pris **hors saison** : ils sous-estiment le stock moyen réel, très élevé en été. Il faudrait calculer un stock moyen sur des inventaires mensuels, ou comparer avec les années précédentes à la même date.

</details>

### Exercice 3 — Deux ans de délais et de structure

Une entreprise de distribution de Casablanca présente (en milliers de DH ; TVA 20 %) :

| Élément | N−1 | N |
|---|---:|---:|
| CA HT | 12 000 | 13 500 |
| Clients (TTC) | 2 400 | 3 510 |
| Effets escomptés non échus | 0 | 540 |
| Achats HT | 9 000 | 10 000 |
| Fournisseurs (TTC) | 1 800 | 1 600 |
| Capitaux propres | 4 000 | 4 200 |
| Dettes de financement | 3 000 | 4 620 |
| CAF | 1 000 | 1 050 |

1. Calculez les délais clients (EENE compris) et fournisseurs des deux années.
2. Calculez l'endettement et la capacité de remboursement.
3. Commentez.

<details><summary>Voir le corrigé</summary>

**1)**

| | N−1 | N |
|---|---:|---:|
| Délai clients | $2\,400 / 14\,400 \times 360 = 60$ j | $(3\,510 + 540) / 16\,200 \times 360 = 90$ j |
| Délai fournisseurs | $1\,800 / 10\,800 \times 360 = 60$ j | $1\,600 / 12\,000 \times 360 = 48$ j |

(CA TTC : $12\,000 \times 1{,}2 = 14\,400$ et $13\,500 \times 1{,}2 = 16\,200$ ; achats TTC : $10\,800$ et $12\,000$.)

**2)**

| | N−1 | N |
|---|---:|---:|
| Endettement | $3\,000 / 4\,000 = 0{,}75$ | $4\,620 / 4\,200 = 1{,}10$ |
| Capacité de remboursement | $3\,000 / 1\,000 = 3$ ans | $4\,620 / 1\,050 = 4{,}4$ ans |

**3)** La gestion du cycle d'exploitation s'est fortement dégradée : les clients paient désormais à 90 jours (contre 60) tandis que l'entreprise règle ses fournisseurs plus vite (48 jours contre 60), sans doute sous leur pression. L'écart s'est financé par l'escompte (540) et par l'emprunt : les dettes de financement dépassent maintenant les capitaux propres et représentent 4,4 années de CAF, au-delà de la norme bancaire. L'entreprise doit en priorité **réduire son délai clients** avant de s'endetter davantage.

</details>
`,
    qcm: [
      { q: "Le ratio d'autonomie financière se calcule par :", choix: ["Dettes / capitaux propres", "Capitaux propres / total du passif", "Actif circulant / DCT", "CAF / dettes"], bonne: 1, explication: "Il mesure la part des ressources apportées par les associés." },
      { q: "Le délai clients se calcule avec :", choix: ["Clients TTC / CA HT × 360", "Clients TTC / CA TTC × 360", "Clients HT / achats × 360", "CA / clients"], bonne: 1, explication: "Les créances sont TTC : on les rapporte au CA TTC." },
      { q: "Clients TTC 1 200, CA HT 6 000, TVA 20 %. Délai clients ?", choix: ["72 jours", "60 jours", "50 jours", "20 jours"], bonne: 1, explication: "CA TTC = 7 200 ; 1 200 / 7 200 × 360 = 60 jours." },
      { q: "La durée de stockage des marchandises se calcule par rapport :", choix: ["Au CA TTC", "Au coût d'achat des marchandises vendues", "Aux achats TTC", "Au résultat net"], bonne: 1, explication: "Numérateur et dénominateur sont évalués au coût." },
      { q: "Les effets escomptés non échus, pour le délai clients :", choix: ["Sont ignorés", "Sont ajoutés aux créances clients", "Sont retranchés du CA", "Sont ajoutés aux fournisseurs"], bonne: 1, explication: "Le client ne les a pas encore payés." },
      { q: "Un ratio d'endettement (dettes de financement / capitaux propres) de 1,5 signifie :", choix: ["Que l'entreprise n'a pas de dettes", "Que les prêteurs financent 1,5 fois plus que les associés", "Que la rentabilité est de 150 %", "Que la liquidité est bonne"], bonne: 1, explication: "Au-delà de 1, l'entreprise dépend fortement de ses prêteurs." },
      { q: "Un taux d'usure des équipements proche de 1 indique :", choix: ["Un outil neuf", "Un outil très amorti, des investissements à prévoir", "Un endettement élevé", "Une bonne liquidité"], bonne: 1, explication: "Les amortissements cumulés approchent la valeur brute." },
      { q: "Stock moyen 300, coût d'achat des marchandises vendues 3 600. Durée de stockage ?", choix: ["12 jours", "30 jours", "36 jours", "120 jours"], bonne: 1, explication: "300 / 3 600 × 360 = 30 jours." },
      { q: "Quelle situation est la plus favorable pour la trésorerie ?", choix: ["Délai clients 90 j, délai fournisseurs 30 j", "Délai clients 30 j, délai fournisseurs 60 j", "Délai clients 60 j, délai fournisseurs 30 j", "Délai clients 120 j, délai fournisseurs 60 j"], bonne: 1, explication: "L'entreprise encaisse avant de payer." },
      { q: "Une limite importante des ratios est que :", choix: ["Ils sont trop précis", "Ils reposent sur des soldes de fin d'exercice parfois non représentatifs", "Ils ne se calculent qu'en Bourse", "Ils ignorent le bilan"], bonne: 1, explication: "La saisonnalité et l'embellissement de clôture peuvent les fausser." },
    ],
  },

  8: {
    titre: "Le tableau de financement",
    description: "Tableau de financement du CGNC : synthèse des masses du bilan, tableau des emplois et ressources, calcul des flux et interprétation, avec exercices corrigés.",
    resume: md`
## L'essentiel — Le tableau de financement

- État de synthèse du CGNC qui explique **les flux de l'exercice** : ressources durables obtenues, emplois durables financés, effet sur le FRF, le BFG et la trésorerie.
- **Synthèse des masses** : variations du financement permanent, de l'actif immobilisé (→ ΔFRF), de l'actif et du passif circulants (→ ΔBFG), de la trésorerie. Hausse d'un actif = emploi ; hausse d'un passif = ressource ; baisse de la trésorerie = ressource.
- **Ressources stables** : autofinancement (CAF − dividendes versés) ; cessions (au **prix de cession**) et récupérations sur créances immobilisées ; augmentations de capital **en numéraire ou en nature** et subventions reçues ; nouveaux emprunts.
- **Emplois stables** : acquisitions d'immobilisations (**valeurs brutes**), remboursements de capital, remboursements d'emprunts, emplois en non-valeurs.
- Acquisitions = brut N − brut N−1 + brut cédé ; nouveaux emprunts = dettes N − dettes N−1 + remboursements.
- **Ressources stables − emplois stables = ΔFRF = ΔBFG + ΔTN.**
- Pas de flux : incorporation de réserves au capital, dotations, reprises (déjà dans la CAF).
- Lecture : taux d'autofinancement des investissements, part de l'emprunt, effet ciseaux si ΔBFG > ΔFRF.
`,
    exercices: md`
### Exercice 2 — Emploi, ressource ou aucun flux ?

Classez chacune des opérations suivantes : ressource stable, emploi stable, ou sans effet sur le tableau des emplois et ressources.

a) Achat d'un terrain pour 1 200 000 DH ; b) augmentation de capital par incorporation de réserves ; c) remboursement d'un emprunt bancaire ; d) cession d'un camion pour 90 000 DH (VNA 70 000 DH) ; e) dotation aux amortissements de l'exercice ; f) augmentation de capital en numéraire ; g) versement de dividendes ; h) obtention d'une subvention d'investissement ; i) remboursement par un client d'un prêt de 5 ans accordé par l'entreprise ; j) frais d'augmentation de capital portés en immobilisations en non-valeur.

<details><summary>Voir le corrigé</summary>

| Opération | Classement |
|---|---|
| a) Achat d'un terrain | Emploi stable (acquisition d'immobilisation corporelle) : 1 200 000 |
| b) Incorporation de réserves | **Aucun flux** : simple jeu d'écritures dans les capitaux propres |
| c) Remboursement d'emprunt | Emploi stable (remboursement des dettes de financement) |
| d) Cession d'un camion | Ressource stable pour le **prix de cession** : 90 000 (la VNA est neutralisée dans la CAF) |
| e) Dotation aux amortissements | Aucun flux propre : déjà comprise dans la CAF, donc dans l'autofinancement |
| f) Capital en numéraire | Ressource stable (augmentation des capitaux propres) |
| g) Dividendes versés | Diminuent l'**autofinancement** (CAF − dividendes) : pas de ligne d'emploi séparée |
| h) Subvention d'investissement | Ressource stable (augmentation des capitaux propres assimilés) |
| i) Remboursement d'un prêt accordé | Ressource stable (récupération sur créances immobilisées) |
| j) Frais d'augmentation de capital | Emploi stable (emplois en non-valeurs) |

</details>

### Exercice 3 — Reconstituer les flux et mesurer l'effet sur la trésorerie

Une entreprise de Kénitra vous communique pour N (en milliers de DH) :
- résultat net 520 ; dotations (hors actif circulant) 380 ; reprises (hors actif circulant) 60 ; produits de cession 90 ; VNA des éléments cédés 70 ; dividendes versés 200 ;
- immobilisations brutes : 4 200 au début, 4 900 à la fin ; valeur brute des immobilisations cédées : 250 ;
- dettes de financement : 1 500 au début, 1 300 à la fin ; nouvel emprunt contracté : 300 ;
- augmentation de capital en numéraire : 400 ;
- le BFG a augmenté de 120.

1. Calculez la CAF et l'autofinancement.
2. Calculez les acquisitions d'immobilisations et les remboursements d'emprunts.
3. Présentez le tableau des emplois et ressources et calculez les variations du FRF et de la trésorerie.

<details><summary>Voir le corrigé</summary>

**1)** CAF $= 520 + 380 - 60 - 90 + 70 = \mathbf{820}$ ; autofinancement $= 820 - 200 = \mathbf{620}$.

**2)** Acquisitions $= 4\,900 - 4\,200 + 250 = \mathbf{950}$ ; remboursements $= 1\,500 + 300 - 1\,300 = \mathbf{500}$.

**3)**

| Ressources stables | | Emplois stables | |
|---|---:|---|---:|
| Autofinancement | 620 | Acquisitions d'immobilisations | 950 |
| Cessions d'immobilisations | 90 | Remboursement des dettes de financement | 500 |
| Augmentation de capital | 400 | | |
| Nouveaux emprunts | 300 | | |
| **Total** | **1 410** | **Total** | **1 450** |

ΔFRF $= 1\,410 - 1\,450 = \mathbf{-\,40}$ ; ΔTN $=$ ΔFRF − ΔBFG $= -40 - 120 = \mathbf{-\,160}$.

L'entreprise a investi et remboursé plus qu'elle n'a mobilisé de ressources durables ; la hausse du BFG aggrave l'effet : la trésorerie baisse de 160.

</details>
`,
    qcm: [
      { q: "Le tableau de financement est un tableau :", choix: ["De stocks à une date", "De flux de l'exercice", "De ratios", "De coûts"], bonne: 1, explication: "Il explique la variation du patrimoine entre deux bilans." },
      { q: "Dans le tableau des emplois et ressources, une cession d'immobilisation est inscrite pour :", choix: ["Sa VNA", "Son prix de cession", "Sa valeur brute", "Sa plus-value"], bonne: 1, explication: "C'est le montant de la ressource obtenue." },
      { q: "Une augmentation de capital par incorporation de réserves est :", choix: ["Une ressource stable", "Un emploi stable", "Sans flux", "Une variation de trésorerie"], bonne: 2, explication: "Elle ne fait entrer aucune ressource nouvelle." },
      { q: "L'autofinancement inscrit dans les ressources est égal à :", choix: ["La CAF", "La CAF moins les dividendes versés", "Le résultat net", "Le résultat net moins les dividendes"], bonne: 1, explication: "Les dividendes sont déjà déduits à ce niveau." },
      { q: "Brut N−1 3 000, brut N 3 600, brut cédé 200. Acquisitions ?", choix: ["600", "800", "400", "3 800"], bonne: 1, explication: "3 600 − 3 000 + 200 = 800." },
      { q: "Dettes N−1 900, dettes N 1 100, remboursements 150. Nouveaux emprunts ?", choix: ["200", "350", "50", "1 250"], bonne: 1, explication: "1 100 − 900 + 150 = 350." },
      { q: "Ressources stables − emplois stables est égal à :", choix: ["La variation du BFG", "La variation du FRF", "La CAF", "Le résultat net"], bonne: 1, explication: "C'est aussi ΔBFG + ΔTN." },
      { q: "Dans la synthèse des masses, une baisse de la trésorerie nette apparaît :", choix: ["En emploi", "En ressource", "Elle n'apparaît pas", "Dans le financement permanent"], bonne: 1, explication: "La trésorerie a fourni des fonds à l'entreprise." },
      { q: "Le remboursement d'un prêt accordé par l'entreprise à une filiale est :", choix: ["Un emploi stable", "Une ressource stable (récupération sur créances immobilisées)", "Une variation du BFG", "Sans effet"], bonne: 1, explication: "Il réduit les immobilisations financières." },
      { q: "ΔFRF = + 100 et ΔBFG = + 250. La trésorerie :", choix: ["Augmente de 350", "Diminue de 150", "Augmente de 150", "Ne varie pas"], bonne: 1, explication: "ΔTN = 100 − 250 = − 150." },
    ],
  },

  9: {
    titre: "La rentabilité et l'effet de levier",
    description: "Rentabilité économique et financière, décomposition marge × rotation et Du Pont, formule de l'effet de levier et effet de massue : cours et exercices corrigés.",
    resume: md`
## L'essentiel — Rentabilité et effet de levier

- **Profitabilité** : résultat / CA. **Rentabilité** : résultat / capitaux investis.
- **Actif économique** = immobilisations d'exploitation + BFR d'exploitation = capitaux propres + dettes financières nettes.
- **Rentabilité économique** $Re = \dfrac{\text{résultat d'exploitation}}{\text{actif économique}}$ (avant ou après IS) $=$ **marge économique × rotation de l'actif**.
- **Rentabilité financière** $Rf = \dfrac{\text{résultat net}}{\text{capitaux propres}}$ ; Du Pont : **marge nette × rotation de l'actif × (actif / capitaux propres)**.
- **Effet de levier** : $Rf = \big[Re + (Re - i) \times \dfrac{D}{CP}\big] \times (1 - t)$.
- $Re > i$ : levier **positif**, l'endettement augmente Rf ; $Re < i$ : **effet de massue**, l'endettement amplifie la baisse.
- L'endettement augmente la rentabilité attendue **et le risque financier** ; limites : coût croissant de la dette, capacité d'endettement, autonomie.
- Toujours vérifier Rf par le calcul direct et par la formule.
`,
    exercices: md`
### Exercice 2 — Même rentabilité, deux modèles économiques

| (milliers de DH) | Supermarché S | Cimenterie C |
|---|---:|---:|
| Résultat net | 300 | 1 500 |
| Chiffre d'affaires | 20 000 | 6 000 |
| Total de l'actif | 6 000 | 15 000 |
| Capitaux propres | 2 000 | 10 000 |

1. Calculez la rentabilité financière de chaque entreprise.
2. Décomposez-la selon la méthode Du Pont.
3. Commentez.

<details><summary>Voir le corrigé</summary>

**1)** S : $300 / 2\,000 = 15\,\%$ ; C : $1\,500 / 10\,000 = 15\,\%$.

**2)**

| Facteur | S | C |
|---|---:|---:|
| Marge nette (RN / CA) | 1,5 % | 25 % |
| Rotation de l'actif (CA / actif) | 3,33 | 0,40 |
| Levier (actif / capitaux propres) | 3,00 | 1,50 |
| **Produit = Rf** | $1{,}5\,\% \times 3{,}33 \times 3 = 15\,\%$ | $25\,\% \times 0{,}4 \times 1{,}5 = 15\,\%$ |

**3)** Les deux entreprises offrent la même rentabilité aux associés par des voies opposées. Le supermarché vit de **volumes** : faible marge, actifs qui tournent vite et fort endettement (en partie via les fournisseurs). La cimenterie vit de **marges** élevées sur des actifs lourds qui tournent lentement, avec un endettement modéré. Leurs risques diffèrent : S est sensible à une baisse de volume, C à une baisse de prix et au poids de ses investissements.

</details>

### Exercice 3 — Quelle rentabilité économique viser ?

Une société de Tanger a 5 000 de capitaux propres et 5 000 de dettes financières au taux de 9 % (IS : 20 %). Ses associés exigent une rentabilité financière de 12 %.

1. Quelle rentabilité économique minimale doit-elle atteindre ?
2. Même question si elle portait ses dettes à 10 000 (capitaux propres inchangés).
3. En dessous de quelle rentabilité économique l'endettement devient-il défavorable aux associés ?

<details><summary>Voir le corrigé</summary>

**1)** $[Re + (Re - 9\,\%) \times 1] \times 0{,}8 = 12\,\%$, soit $2\,Re - 9\,\% = 15\,\%$, d'où $Re = \mathbf{12\,\%}$.

**2)** Bras de levier 2 : $[Re + 2\,(Re - 9\,\%)] \times 0{,}8 = 12\,\%$, soit $3\,Re - 18\,\% = 15\,\%$, d'où $Re = \mathbf{11\,\%}$. Plus d'endettement permet d'atteindre l'objectif avec une rentabilité économique plus faible… tant qu'elle reste supérieure au coût de la dette.

**3)** Dès que $Re < i = \mathbf{9\,\%}$, le différentiel est négatif : chaque dirham emprunté diminue la rentabilité des associés (effet de massue).

</details>
`,
    qcm: [
      { q: "La rentabilité économique rapporte le résultat d'exploitation :", choix: ["Aux capitaux propres", "À l'actif économique", "Au chiffre d'affaires", "Aux dettes"], bonne: 1, explication: "Elle mesure la performance de l'outil, indépendamment du financement." },
      { q: "L'actif économique est égal à :", choix: ["Total du bilan", "Immobilisations d'exploitation + BFR d'exploitation", "Capitaux propres seuls", "Actif circulant + trésorerie"], bonne: 1, explication: "Il est financé par les capitaux propres et les dettes financières nettes." },
      { q: "La rentabilité financière est égale à :", choix: ["Résultat net / CA", "Résultat net / capitaux propres", "Résultat d'exploitation / actif", "EBE / CA"], bonne: 1, explication: "C'est la rentabilité des capitaux apportés par les associés." },
      { q: "L'effet de levier est positif lorsque :", choix: ["La rentabilité économique est inférieure au taux d'intérêt", "La rentabilité économique est supérieure au taux d'intérêt", "L'entreprise n'a pas de dettes", "Le taux d'IS est nul"], bonne: 1, explication: "La dette rapporte plus qu'elle ne coûte." },
      { q: "Re = 12 %, i = 6 %, D/CP = 1, IS 20 %. Rf ?", choix: ["14,4 %", "18 %", "9,6 %", "12 %"], bonne: 0, explication: "[12 % + 6 % × 1] × 0,8 = 14,4 %." },
      { q: "L'effet de massue désigne :", choix: ["Un levier positif très fort", "La baisse amplifiée de la rentabilité financière quand Re < i", "La hausse des ventes", "Une augmentation de capital"], bonne: 1, explication: "L'endettement amplifie alors les pertes." },
      { q: "Marge économique 8 %, rotation de l'actif 1,5. Re ?", choix: ["9,5 %", "12 %", "5,3 %", "6,5 %"], bonne: 1, explication: "8 % × 1,5 = 12 %." },
      { q: "Dans la décomposition Du Pont, le troisième facteur (actif / capitaux propres) traduit :", choix: ["La profitabilité", "La rotation", "Le levier d'endettement", "La liquidité"], bonne: 2, explication: "Plus il est élevé, plus l'entreprise est endettée." },
      { q: "Une entreprise sans dette a une rentabilité financière (après IS) égale à :", choix: ["0", "Re × (1 − t)", "Re + i", "i"], bonne: 1, explication: "Sans dette, le levier est nul." },
      { q: "Le principal inconvénient d'un fort endettement est :", choix: ["La baisse de la rentabilité économique", "L'augmentation du risque financier", "La hausse du chiffre d'affaires", "La hausse de la trésorerie"], bonne: 1, explication: "Les intérêts sont dus quelle que soit la conjoncture." },
    ],
  },

  10: {
    titre: "Les écritures comptables types",
    description: "Écritures CGNC des investissements, cessions, amortissements, provisions, emprunts, capital et dividendes, et leur effet sur la CAF, le FR et la trésorerie.",
    resume: md`
## L'essentiel — Écritures types et incidences

- Lecture par classe : classes 1 et 2 → **FRF** ; classes 3 et 4 → **BFG** ; classe 5 → **trésorerie** ; classes 6 et 7 → **résultat** (et CAF si l'élément est monétaire).
- **Acquisition** d'immobilisation (D 23.. et 34551 / C 5141) : FRF −, TVA récupérable en BFG, TN −.
- **Cession** (D 5141 / C 7513, puis D 28.. et 6513 / C 23..) : plus-value dans le résultat, **CAF inchangée**, FRF et TN + prix de cession.
- **Dotation aux amortissements** (D 6193 / C 28..) : résultat −, CAF, FRF et TN inchangés.
- **Provision sur clients** (D 6196 / C 3942) : résultat −, CAF − (convention CGNC), FRF − et BFG −, TN inchangée.
- **Emprunt** (D 5141 / C 1481) : FRF + et TN + ; **remboursement** : l'inverse ; **intérêts** (D 6311) : résultat, CAF, FRF et TN −.
- **Capital en numéraire** (D 3461 / C 1111 puis D 5141 / C 3461) : FRF + et TN + ; **incorporation de réserves** : aucun effet.
- **Affectation** (D 1191 / C 1140, 1152, 4465, 1161) : les dividendes deviennent une dette ; réserve légale 5 % jusqu'au dixième du capital (loi 17-95).
- **Escompte** : crédit d'escompte (5520) en trésorerie passif selon le CGNC ; si l'effet est sorti des créances, réintégrer les EENE.
- **Crédit-bail** (D 6132) : bien et dette hors bilan, endettement sous-estimé.
- Contrôle permanent : **ΔTN = ΔFRF − ΔBFG**.
`,
    exercices: md`
### Exercice 2 — Vrai ou faux ? Justifiez.

1. Une dotation aux amortissements diminue la trésorerie.
2. Une augmentation de capital par incorporation de réserves améliore le fonds de roulement.
3. La cession d'une machine avec une moins-value diminue la CAF.
4. Le paiement d'un fournisseur diminue à la fois le BFG et la trésorerie.
5. Une provision pour dépréciation des stocks diminue la CAF selon le CGNC.
6. L'obtention d'un crédit de trésorerie à trois mois augmente le FRF.

<details><summary>Voir le corrigé</summary>

1. **Faux** : c'est une charge calculée, sans sortie d'argent (elle réduit même l'impôt futur).
2. **Faux** : simple transfert entre deux comptes de capitaux propres (D 1152 / C 1111), le financement permanent ne change pas.
3. **Faux** : la CAF neutralise le produit de cession et la VNA ; la moins-value n'a pas d'effet sur la CAF (la ressource de cession apparaît dans le tableau de financement).
4. **Faux** : la trésorerie diminue, mais le BFG **augmente**, car une dette du passif circulant disparaît (BFG = actif circulant − passif circulant). Le FRF ne change pas : $\Delta TN = 0 - \Delta BFG < 0$.
5. **Vrai** : les dotations relatives à l'actif circulant ne sont pas rajoutées au résultat dans la CAF du CGNC.
6. **Faux** : un crédit de trésorerie est une **trésorerie passif** ; il améliore la trésorerie actif mais laisse la trésorerie nette et le FRF inchangés.

</details>

### Exercice 3 — Affecter un bénéfice

La SA « Doukkala Lait » (capital de 1 000 000 DH, 10 000 actions de 100 DH) dispose d'une réserve légale de 92 000 DH et d'un report à nouveau **débiteur** de 20 000 DH. Le résultat net de N s'élève à 180 000 DH. Les statuts prévoient : dotation à la réserve légale, premier dividende de 6 % du capital, réserve facultative de 30 000 DH, superdividende arrondi au dirham inférieur par action, solde en report à nouveau.

1. Calculez la dotation à la réserve légale et le bénéfice distribuable.
2. Présentez le tableau d'affectation et le dividende par action.
3. Passez l'écriture d'affectation et indiquez son effet sur le FRF.

<details><summary>Voir le corrigé</summary>

**1)** Base de la réserve légale : $180\,000 - 20\,000 = 160\,000$ ; $5\,\% \times 160\,000 = 8\,000$ DH. Plafond : $10\,\% \times 1\,000\,000 = 100\,000$ DH ; la réserve atteint exactement $92\,000 + 8\,000 = 100\,000$ DH : dotation de **8 000 DH**.

Bénéfice distribuable : $180\,000 - 20\,000 - 8\,000 = \mathbf{152\,000\ DH}$.

**2)**

| Affectation | Montant (DH) |
|---|---:|
| Apurement du report à nouveau débiteur | 20 000 |
| Réserve légale | 8 000 |
| Premier dividende : $6\,\% \times 1\,000\,000$ | 60 000 |
| Réserve facultative | 30 000 |
| Superdividende : reste $152\,000 - 60\,000 - 30\,000 = 62\,000$, soit 6,20 DH arrondi à **6 DH** × 10 000 | 60 000 |
| Report à nouveau (créditeur) | 2 000 |
| **Total** | **180 000** |

Dividende par action : $6 + 6 = \mathbf{12\ DH}$ (total 120 000 DH).

**3)**

| Compte | Libellé | Débit | Crédit |
|---|---|---:|---:|
| 1191 | Résultat net de l'exercice | 180 000 | |
| 1169 | Report à nouveau (solde débiteur) | | 20 000 |
| 1140 | Réserve légale | | 8 000 |
| 1152 | Réserves facultatives | | 30 000 |
| 4465 | Associés, dividendes à payer | | 120 000 |
| 1161 | Report à nouveau (solde créditeur) | | 2 000 |

Effet : les 120 000 DH de dividendes quittent les capitaux propres pour devenir une dette à court terme : **FRF − 120 000**, BFG − 120 000, trésorerie inchangée jusqu'au paiement.

</details>
`,
    qcm: [
      { q: "L'écriture d'acquisition d'un matériel payé par chèque est :", choix: ["D 5141 / C 2332", "D 2332 et 34551 / C 5141", "D 6193 / C 2833", "D 1481 / C 5141"], bonne: 1, explication: "L'immobilisation et la TVA récupérable au débit, la banque au crédit." },
      { q: "La VNA d'une immobilisation cédée est enregistrée au compte :", choix: ["7513", "6513", "2834", "3481"], bonne: 1, explication: "6513 : VNA des immobilisations corporelles cédées (charge non courante)." },
      { q: "Une dotation aux amortissements a pour effet :", choix: ["De diminuer la trésorerie", "De diminuer le résultat sans modifier la CAF ni le FRF", "D'augmenter le BFG", "De diminuer la CAF"], bonne: 1, explication: "Charge calculée : le financement permanent et l'actif immobilisé baissent du même montant." },
      { q: "L'obtention d'un emprunt à long terme :", choix: ["Augmente le FRF et la trésorerie", "Augmente le BFG", "Diminue le FRF", "Est sans effet"], bonne: 0, explication: "Les dettes de financement font partie du financement permanent." },
      { q: "Une augmentation de capital par incorporation de réserves :", choix: ["Augmente la trésorerie", "Augmente le FRF", "N'a aucun effet sur le FRF ni la trésorerie", "Diminue les capitaux propres"], bonne: 2, explication: "Simple reclassement à l'intérieur des capitaux propres." },
      { q: "Le compte des dividendes à payer aux associés est :", choix: ["1191", "4465", "1140", "3461"], bonne: 1, explication: "Associés, dividendes à payer : dette du passif circulant." },
      { q: "Selon la loi 17-95, la dotation à la réserve légale cesse d'être obligatoire lorsque la réserve atteint :", choix: ["5 % du capital", "10 % du capital", "20 % du capital", "50 % du capital"], bonne: 1, explication: "5 % du bénéfice chaque année, jusqu'au dixième du capital." },
      { q: "Les redevances de crédit-bail sont enregistrées :", choix: ["En immobilisations", "En charges (6132)", "En dettes de financement", "En capitaux propres"], bonne: 1, explication: "Le bien loué n'est pas inscrit à l'actif du locataire." },
      { q: "L'encaissement d'une créance client :", choix: ["Augmente le FRF", "Diminue le BFG et augmente la trésorerie", "Augmente le résultat", "Augmente la CAF"], bonne: 1, explication: "La créance (actif circulant) devient trésorerie." },
      { q: "Le paiement des intérêts d'un emprunt :", choix: ["Diminue le résultat, la CAF, le FRF et la trésorerie", "N'affecte que la trésorerie", "Augmente le BFG", "Diminue seulement les dettes de financement"], bonne: 0, explication: "C'est une charge décaissable : elle réduit le résultat et la trésorerie." },
    ],
  },
};

export default chapitres;
