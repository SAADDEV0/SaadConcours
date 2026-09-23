// Analyse Financière (S4) — compléments par chapitre.
const md = String.raw;

export default {
  1: {
    titre: "Introduction à l'analyse financière",
    resume: md`
## L'essentiel — Introduction à l'analyse financière

- L'**analyse financière** transforme les documents comptables (bilan, CPC, ESG) en un **diagnostic** qui éclaire les décisions.
- Quatre grandes questions : **rentabilité** (gagne-t-elle de l'argent ?), **solvabilité** (peut-elle rembourser ?), **équilibre financier** (ressources stables et besoins) et **liquidité** (paie-t-elle ses dettes à court terme ?).
- Utilisateurs : dirigeants, **banques** (solvabilité), **actionnaires** (rentabilité), fournisseurs (risque d'impayé), État, salariés (pérennité).
- Démarche : documents → activité (SIG, CAF) → structure (bilan financier) → équilibre (FR, BFR, TN) → ratios → diagnostic et recommandations.
`,
    exercices: md`
### Exercice 2 — Quel objectif, quel outil ?

Pour chaque question, indiquez l'objectif d'analyse visé (rentabilité, solvabilité, équilibre financier, liquidité) et l'outil le plus adapté.

1. Une banque se demande si l'entreprise pourra rembourser un crédit sur 5 ans.
2. Un actionnaire veut savoir combien rapportent les capitaux qu'il a apportés.
3. Le directeur financier se demande si les immobilisations sont financées par des ressources durables.
4. Un fournisseur se demande si son client pourra payer ses factures à 30 jours.

<details><summary>Voir le corrigé</summary>

| Question | Objectif | Outil adapté |
|---|---|---|
| 1 | Solvabilité | Bilan financier, ratio de solvabilité, CAF (capacité de remboursement) |
| 2 | Rentabilité | Rentabilité financière $RN / CP$ |
| 3 | Équilibre financier | Fonds de roulement $FR = RS - \text{actif immobilisé}$ |
| 4 | Liquidité | Ratios de liquidité générale, réduite et immédiate |

</details>
`,
    qcm: [
      { q: "L'analyse financière consiste à :", choix: ["Tenir la comptabilité", "Transformer les documents comptables en diagnostic", "Calculer uniquement l'IS", "Établir les factures"], bonne: 1, explication: "Documents → techniques d'analyse → diagnostic → décisions." },
      { q: "La préoccupation principale d'une banque est :", choix: ["La rentabilité commerciale", "La solvabilité de l'entreprise", "Le niveau des salaires", "La part de marché"], bonne: 1, explication: "Elle veut être remboursée." },
      { q: "La liquidité désigne la capacité à :", choix: ["Faire des bénéfices", "Payer ses dettes à court terme", "Augmenter son capital", "Investir à long terme"], bonne: 1, explication: "Elle compare les actifs à court terme aux dettes à court terme." },
      { q: "Quel utilisateur s'intéresse d'abord à la rentabilité des capitaux investis ?", choix: ["Le fournisseur", "L'actionnaire", "L'État", "Le client"], bonne: 1, explication: "Il attend des dividendes et une valorisation." },
      { q: "Dans la démarche, l'étude du FR, du BFR et de la TN correspond à :", choix: ["L'analyse de l'activité", "L'analyse de l'équilibre financier", "Le calcul des SIG", "La collecte des documents"], bonne: 1, explication: "C'est l'étape d'équilibre financier." },
    ],
  },

  2: {
    titre: "Les documents financiers de base",
    resume: md`
## L'essentiel — Bilan, CPC, ESG, TF

- **Bilan** : photographie du patrimoine à une date. Actif (emplois) : actif immobilisé, actif circulant HT, trésorerie actif. Passif (ressources) : financement permanent, passif circulant HT, trésorerie passif.
- Équation fondamentale : $\text{Total actif} = \text{Total passif}$.
- **CPC** : film de l'activité de l'exercice, en trois niveaux : exploitation, financier, non courant.
- $RN = REX + RFIN + RNC - IS$ (et $RC = REX + RFIN$, $RAI = RC + RNC$).
- **ESG** (spécifique au Maroc) : tableau des soldes intermédiaires de gestion et de la CAF.
- **Tableau de financement / flux** : explique la variation de la trésorerie entre deux bilans.
`,
    exercices: md`
### Exercice 2 — Du CPC au résultat net

Données de l'exercice (en DH) : ventes 1 500 000 ; achats consommés 900 000 ; autres charges externes 150 000 ; impôts et taxes 20 000 ; charges de personnel 200 000 ; dotations d'exploitation 80 000 ; produits financiers 10 000 ; charges financières 30 000 ; produits non courants 25 000 ; charges non courantes 15 000. Taux d'IS : 20 %.

Calculez le résultat d'exploitation, financier, courant, non courant, avant impôt et net.

<details><summary>Voir le corrigé</summary>

| Résultat | Calcul | Montant |
|---|---|--:|
| Exploitation | $1\,500\,000 - (900\,000 + 150\,000 + 20\,000 + 200\,000 + 80\,000)$ | 150 000 |
| Financier | $10\,000 - 30\,000$ | −20 000 |
| Courant | $150\,000 - 20\,000$ | 130 000 |
| Non courant | $25\,000 - 15\,000$ | 10 000 |
| Avant impôt | $130\,000 + 10\,000$ | 140 000 |
| IS | $140\,000 \times 20\%$ | 28 000 |
| **Net** | $140\,000 - 28\,000$ | **112 000** |

</details>
`,
    qcm: [
      { q: "Le bilan est :", choix: ["Un film de l'activité de l'année", "Une photographie du patrimoine à une date donnée", "Un tableau des flux de trésorerie", "Un budget prévisionnel"], bonne: 1, explication: "Le CPC, lui, décrit l'activité de l'exercice." },
      { q: "Un découvert bancaire figure en :", choix: ["Trésorerie actif", "Passif circulant HT", "Trésorerie passif", "Financement permanent"], bonne: 2, explication: "C'est une ressource de trésorerie à très court terme." },
      { q: "Le résultat courant est égal à :", choix: ["REX + RFIN", "REX + RNC", "RAI − IS", "RFIN + RNC"], bonne: 0, explication: "Il regroupe les opérations habituelles." },
      { q: "L'emprunt bancaire à long terme figure dans :", choix: ["Le passif circulant", "La trésorerie passif", "Le financement permanent", "L'actif immobilisé"], bonne: 2, explication: "Ce sont des dettes de financement." },
      { q: "L'ESG est un document :", choix: ["Propre au plan comptable marocain", "Facultatif pour toutes les entreprises", "Remplaçant le bilan", "Établi par la banque"], bonne: 0, explication: "Il présente les soldes de gestion et la CAF." },
    ],
  },

  3: {
    titre: "Les soldes intermédiaires de gestion (SIG)",
    resume: md`
## L'essentiel — Les SIG

- **MBVEL** (commerce) $= \text{ventes de marchandises} - \text{achats revendus}$.
- **Production de l'exercice** $= \text{production vendue} \pm \text{production stockée} + \text{production immobilisée}$.
- **VA** $= MBVEL + PE - \text{consommations de l'exercice}$ (achats consommés de matières + autres charges externes).
- **EBE** $= VA + \text{subventions d'exploitation} - \text{impôts et taxes} - \text{charges de personnel}$ : performance économique pure.
- **REX** $= EBE + \text{autres produits} + \text{reprises} - \text{autres charges} - \text{dotations d'exploitation}$.
- Puis $RC = REX + RFIN$ ; $RAI = RC + RNC$ ; $RN = RAI - IS$.
- Un **EBE négatif** (IBE) signale un problème grave : l'exploitation ne couvre même pas ses charges de personnel.
`,
    exercices: md`
### Exercice 2 — SIG d'une entreprise industrielle

Données (en DH) : production vendue 1 200 000 ; production stockée +50 000 ; production immobilisée 30 000 ; achats consommés de matières et fournitures 500 000 ; autres charges externes 180 000 ; subvention d'exploitation 20 000 ; impôts et taxes 25 000 ; charges de personnel 350 000 ; dotations d'exploitation 90 000 ; reprises d'exploitation 10 000.

Calculez la production de l'exercice, la VA, l'EBE et le REX, puis le taux de valeur ajoutée.

<details><summary>Voir le corrigé</summary>

| Solde | Calcul | Montant |
|---|---|--:|
| Production de l'exercice | $1\,200\,000 + 50\,000 + 30\,000$ | 1 280 000 |
| Consommations | $500\,000 + 180\,000$ | 680 000 |
| **VA** | $1\,280\,000 - 680\,000$ | **600 000** |
| **EBE** | $600\,000 + 20\,000 - 25\,000 - 350\,000$ | **245 000** |
| **REX** | $245\,000 + 10\,000 - 90\,000$ | **165 000** |

Taux de VA $= 600\,000 / 1\,280\,000 \approx 46{,}9\%$ : près de la moitié de la production est créée par l'entreprise elle-même.

</details>
`,
    qcm: [
      { q: "La valeur ajoutée se calcule par :", choix: ["MBVEL + PE − consommations de l'exercice", "EBE − charges de personnel", "CA − charges totales", "RN + dotations"], bonne: 0, explication: "C'est la richesse créée par l'entreprise." },
      { q: "L'EBE se calcule avant :", choix: ["Les charges de personnel", "Les dotations aux amortissements", "Les consommations de l'exercice", "Les ventes"], bonne: 1, explication: "Il mesure la performance avant amortissements, politique financière et fiscale." },
      { q: "Ventes de marchandises 500 000, achats revendus 320 000 : la MBVEL vaut :", choix: ["820 000", "180 000", "320 000", "500 000"], bonne: 1, explication: "500 000 − 320 000 = 180 000." },
      { q: "La production stockée positive signifie que :", choix: ["Les stocks de produits ont augmenté", "Les stocks de produits ont diminué", "L'entreprise a vendu des immobilisations", "Les achats ont baissé"], bonne: 0, explication: "Elle s'ajoute à la production vendue." },
      { q: "Le résultat avant impôt est égal à :", choix: ["RC + RNC", "REX + RNC", "EBE − dotations", "RN + IS − RFIN"], bonne: 0, explication: "RAI = résultat courant + résultat non courant." },
    ],
  },

  4: {
    titre: "La capacité d'autofinancement (CAF)",
    resume: md`
## L'essentiel — La CAF

- La **CAF** est le surplus monétaire potentiel dégagé par l'activité : elle finance les investissements, les remboursements d'emprunts et les dividendes.
- **Méthode additive** (à partir du RN) : $CAF = RN + \text{dotations} - \text{reprises} - PCEA + VNA$.
- **Méthode soustractive** (à partir de l'EBE) : on ajoute les produits encaissables et on retire les charges décaissables, **hors** dotations, reprises, PCEA et VNA, puis l'IS.
- Les éléments **calculés** (dotations, reprises) et les cessions (PCEA, VNA) sont exclus : ils ne correspondent pas à des flux de l'activité.
- $\text{Autofinancement} = CAF - \text{dividendes}$.
- Les deux méthodes doivent donner **le même résultat** : c'est le contrôle d'examen.
`,
    exercices: md`
### Exercice 2 — CAF par la méthode additive

Une entreprise a réalisé un résultat net de 80 000 DH et un chiffre d'affaires de 1 000 000 DH. Elle a comptabilisé 50 000 DH de dotations d'exploitation, 10 000 DH de dotations non courantes et 15 000 DH de reprises. Elle a cédé une machine 40 000 DH (VNA 25 000 DH) et distribué 30 000 DH de dividendes.

1. Calculez la CAF et l'autofinancement.
2. Calculez le ratio CAF / CA et commentez.

<details><summary>Voir le corrigé</summary>

**1)**

| Élément | Montant |
|---|--:|
| Résultat net | 80 000 |
| + Dotations ($50\,000 + 10\,000$) | +60 000 |
| − Reprises | −15 000 |
| − PCEA | −40 000 |
| + VNA | +25 000 |
| **CAF** | **110 000** |

Autofinancement $= 110\,000 - 30\,000 = 80\,000$ DH.

**2)** $CAF / CA = 110\,000 / 1\,000\,000 = 11\%$ : chaque dirham vendu dégage 0,11 DH de ressources internes, ce qui est un niveau correct.

</details>
`,
    qcm: [
      { q: "Dans la méthode additive, les dotations aux amortissements :", choix: ["Se retranchent du RN", "S'ajoutent au RN", "Sont ignorées", "Sont multipliées par le taux d'IS"], bonne: 1, explication: "Ce sont des charges calculées, non décaissées." },
      { q: "Le prix de cession d'une immobilisation (PCEA) :", choix: ["S'ajoute au RN pour calculer la CAF", "Se retranche du RN pour calculer la CAF", "Fait partie de l'EBE", "Est une dotation"], bonne: 1, explication: "Il relève de l'investissement, pas de l'activité." },
      { q: "RN = 50 000, dotations = 30 000, reprises = 5 000, pas de cession : CAF =", choix: ["75 000", "85 000", "25 000", "80 000"], bonne: 0, explication: "50 000 + 30 000 − 5 000 = 75 000." },
      { q: "L'autofinancement est égal à :", choix: ["CAF + dividendes", "CAF − dividendes", "RN − dividendes", "EBE − IS"], bonne: 1, explication: "C'est ce qui reste dans l'entreprise après rémunération des associés." },
      { q: "La CAF sert en priorité à :", choix: ["Payer les salaires", "Financer les investissements et rembourser les emprunts", "Payer la TVA", "Acheter des marchandises"], bonne: 1, explication: "C'est une ressource interne de financement." },
    ],
  },

  5: {
    titre: "Le bilan financier (analyse patrimoniale)",
    resume: md`
## L'essentiel — Le bilan financier

- Le **bilan financier** retraite le bilan comptable pour mesurer le patrimoine réel et le risque de faillite.
- Actif classé par **liquidité** croissante (ARLT puis ARCT) ; passif par **exigibilité** croissante (capitaux propres, DLMT, PECT).
- Retraitements clés : capital non appelé retiré ; actifs fictifs éliminés ; **plus-values latentes** ajoutées aux actifs et aux capitaux propres ; stock outil et créances à plus d'un an en ARLT ; dettes à moins d'un an en PECT.
- **FR financier** $= \text{capitaux permanents} - ARLT$.
- **Liquidité générale** $= ARCT / PECT \geq 1$ ; **autonomie financière** $= CP / \text{total passif}$ ; **solvabilité générale** $= \text{actif réel} / \text{dettes totales} > 1$.
`,
    exercices: md`
### Exercice 2 — Retraitements et ratios

Bilan comptable résumé (en DH) :

| Actif | Montant | Passif | Montant |
|---|--:|---|--:|
| Immobilisations nettes | 600 000 | Capitaux propres | 450 000 |
| Stocks | 180 000 | Dettes de financement | 300 000 |
| Clients | 150 000 | Dettes à court terme | 190 000 |
| Trésorerie actif | 30 000 | Trésorerie passif | 20 000 |
| **Total** | **960 000** | **Total** | **960 000** |

Informations : plus-value latente sur un terrain 50 000 ; stock de sécurité 30 000 ; créances clients à plus d'un an 20 000 ; part des dettes de financement échéant à moins d'un an 40 000.

1. Établissez le bilan financier.
2. Calculez le FR financier, la liquidité générale, l'autonomie financière et la solvabilité générale.

<details><summary>Voir le corrigé</summary>

**1)**

| Actif financier | Montant | Passif financier | Montant |
|---|--:|---|--:|
| ARLT : $600 + 50 + 30 + 20$ (milliers) | 700 000 | Capitaux propres : $450 + 50$ | 500 000 |
| Stocks : $180 - 30$ | 150 000 | DLMT : $300 - 40$ | 260 000 |
| Clients : $150 - 20$ | 130 000 | PECT : $190 + 40 + 20$ | 250 000 |
| Trésorerie actif | 30 000 | | |
| **Total** | **1 010 000** | **Total** | **1 010 000** |

**2)** FR financier $= (500\,000 + 260\,000) - 700\,000 = 60\,000$ DH.

- Liquidité générale $= 310\,000 / 250\,000 = 1{,}24$ : l'actif à court terme couvre les dettes à court terme.
- Autonomie financière $= 500\,000 / 1\,010\,000 \approx 49{,}5\%$ : juste sous la norme de 50 %.
- Solvabilité générale $= 1\,010\,000 / 510\,000 \approx 1{,}98$ : l'entreprise est solvable.

</details>
`,
    qcm: [
      { q: "Dans le bilan financier, l'actif est classé selon :", choix: ["La valeur", "La liquidité", "L'ordre alphabétique", "La date d'acquisition"], bonne: 1, explication: "Et le passif selon l'exigibilité." },
      { q: "Une plus-value latente sur un terrain :", choix: ["Augmente l'actif et les capitaux propres", "Diminue les capitaux propres", "Augmente les dettes", "Est ignorée"], bonne: 0, explication: "On retient la valeur réelle du bien." },
      { q: "La part d'un emprunt remboursable dans moins d'un an est classée en :", choix: ["Capitaux propres", "DLMT", "PECT", "ARLT"], bonne: 2, explication: "Elle devient exigible à court terme." },
      { q: "Le stock de sécurité (stock outil) est classé en :", choix: ["ARCT", "ARLT", "Trésorerie", "PECT"], bonne: 1, explication: "Il est immobilisé en permanence." },
      { q: "Une liquidité générale de 0,8 signifie que :", choix: ["L'ARCT couvre largement les dettes à court terme", "L'ARCT ne couvre pas les dettes à court terme", "L'entreprise est très rentable", "Le FR est positif"], bonne: 1, explication: "ARCT / PECT < 1 : risque d'illiquidité." },
    ],
  },

  6: {
    titre: "L'équilibre financier : FR, BFR et trésorerie nette",
    resume: md`
## L'essentiel — FR, BFR, TN

- **Fonds de roulement** $FR = \text{financement permanent} - \text{actif immobilisé}$ : excédent de ressources stables.
- **Besoin en fonds de roulement** $BFR = (\text{stocks} + \text{créances}) - (\text{fournisseurs} + \text{dettes fiscales et sociales})$ : né des décalages du cycle d'exploitation.
- **Trésorerie nette** $TN = \text{trésorerie actif} - \text{trésorerie passif}$.
- Relation fondamentale : $\boxed{TN = FR - BFR}$.
- $FR > BFR$ : trésorerie positive ; $FR < BFR$ : recours au découvert.
- Un BFR **négatif** (grande distribution) signifie que les fournisseurs financent l'activité.
- Leviers : augmenter le FR (capital, emprunts LMT, autofinancement) ou réduire le BFR (délais clients, stocks, délais fournisseurs).
`,
    exercices: md`
### Exercice 2 — BFR exprimé en délais

Une entreprise réalise un CA HT de 1 800 000 DH et des achats HT de 1 200 000 DH (TVA 20 %). Délais moyens : clients 60 jours de CA TTC ; stocks 45 jours de CA HT ; fournisseurs 30 jours d'achats TTC. Son FR est de 400 000 DH.

1. Calculez le montant des créances clients, des stocks et des dettes fournisseurs, puis le BFR.
2. Calculez la trésorerie nette.
3. Que devient la TN si le délai clients passe à 45 jours ?

<details><summary>Voir le corrigé</summary>

**1)**

- Clients $= 1\,800\,000 \times 1{,}2 \times \dfrac{60}{360} = 360\,000$ DH
- Stocks $= 1\,800\,000 \times \dfrac{45}{360} = 225\,000$ DH
- Fournisseurs $= 1\,200\,000 \times 1{,}2 \times \dfrac{30}{360} = 120\,000$ DH

$BFR = 360\,000 + 225\,000 - 120\,000 = 465\,000$ DH (soit 93 jours de CA HT).

**2)** $TN = 400\,000 - 465\,000 = -65\,000$ DH : l'entreprise dépend du découvert.

**3)** Clients $= 2\,160\,000 \times 45 / 360 = 270\,000$ DH ; $BFR = 375\,000$ DH ; $TN = +25\,000$ DH. Réduire le crédit client suffit à rétablir la trésorerie.

</details>
`,
    qcm: [
      { q: "La relation fondamentale de l'équilibre financier est :", choix: ["TN = FR + BFR", "TN = FR − BFR", "FR = TN − BFR", "BFR = FR + TN"], bonne: 1, explication: "Le FR finance le BFR, le reste constitue la trésorerie." },
      { q: "FR = 300 000 et BFR = 350 000 : la trésorerie nette vaut :", choix: ["+50 000", "−50 000", "650 000", "0"], bonne: 1, explication: "300 000 − 350 000 = −50 000." },
      { q: "Allonger le délai de paiement des clients :", choix: ["Diminue le BFR", "Augmente le BFR", "Augmente le FR", "Ne change rien"], bonne: 1, explication: "Les créances clients augmentent." },
      { q: "Un BFR négatif est typique :", choix: ["De l'industrie lourde", "De la grande distribution", "Des entreprises en faillite", "Des cabinets d'audit"], bonne: 1, explication: "Clients payés comptant, fournisseurs payés à crédit." },
      { q: "Pour augmenter le fonds de roulement, l'entreprise peut :", choix: ["Accorder plus de crédit aux clients", "Contracter un emprunt à long terme", "Augmenter ses stocks", "Utiliser le découvert"], bonne: 1, explication: "Les ressources stables augmentent." },
    ],
  },

  7: {
    titre: "Les ratios financiers",
    resume: md`
## L'essentiel — Les ratios

- **Structure** : autonomie financière $CP / \text{total passif} \geq 50\%$ ; endettement $\text{dettes de financement} / CP < 1$.
- **Liquidité** : générale $AC / PC \geq 1$ ; réduite $(AC - \text{stocks}) / PC$ ; immédiate $\text{trésorerie actif} / PC$.
- **Activité** : rotation des stocks $\dfrac{\text{stock moyen} \times 360}{\text{coût d'achat (ou CA)}}$ ; délai clients $\dfrac{\text{clients TTC} \times 360}{\text{ventes TTC}}$ ; délai fournisseurs $\dfrac{\text{fournisseurs TTC} \times 360}{\text{achats TTC}}$.
- **Rentabilité** : commerciale $RN / CA$ ; économique ($ROA$) ; financière ($ROE = RN / CP$).
- **Effet de levier** : $ROE = ROA + \dfrac{D}{C}(ROA - i)$. Positif si $ROA > i$ ; **effet de massue** si $ROA < i$.
`,
    exercices: md`
### Exercice 2 — Effet de levier et effet de massue

Une entreprise dispose d'un actif économique de 1 000 000 DH, financé par 600 000 DH de capitaux propres et 400 000 DH de dettes au taux de 6 %. On néglige l'impôt.

1. Le résultat d'exploitation est de 120 000 DH. Calculez la rentabilité économique, le résultat net et la rentabilité financière. Vérifiez avec la formule du levier.
2. Même question si le résultat d'exploitation tombe à 50 000 DH. Concluez.

<details><summary>Voir le corrigé</summary>

**1)** $ROA = 120\,000 / 1\,000\,000 = 12\%$ ; intérêts $= 400\,000 \times 6\% = 24\,000$ DH ; $RN = 96\,000$ DH ; $ROE = 96\,000 / 600\,000 = 16\%$.

Vérification : $ROE = 12\% + \dfrac{400}{600}(12\% - 6\%) = 12\% + 4\% = 16\%$. Effet de levier **positif**.

**2)** $ROA = 5\%$ ; $RN = 50\,000 - 24\,000 = 26\,000$ DH ; $ROE = 26\,000 / 600\,000 \approx 4{,}33\%$.

Vérification : $5\% + \dfrac{2}{3}(5\% - 6\%) \approx 4{,}33\%$. Comme $ROA < i$, la dette **réduit** la rentabilité des actionnaires : c'est l'**effet de massue**.

</details>
`,
    qcm: [
      { q: "La rentabilité financière (ROE) se calcule par :", choix: ["RN / CA", "RN / capitaux propres", "EBE / total actif", "Dettes / CP"], bonne: 1, explication: "Elle mesure la rémunération des actionnaires." },
      { q: "L'effet de levier est positif lorsque :", choix: ["ROA > coût de la dette", "ROA < coût de la dette", "Les dettes sont nulles", "Le ROE est négatif"], bonne: 0, explication: "Emprunter rapporte alors plus que cela ne coûte." },
      { q: "Clients TTC 120 000, ventes TTC 1 440 000 : le délai clients est de :", choix: ["20 jours", "30 jours", "45 jours", "60 jours"], bonne: 1, explication: "120 000 × 360 / 1 440 000 = 30 jours." },
      { q: "Le ratio de liquidité réduite exclut :", choix: ["La trésorerie", "Les stocks", "Les créances", "Les dettes"], bonne: 1, explication: "Les stocks sont l'actif circulant le moins liquide." },
      { q: "Une autonomie financière de 30 % signifie que :", choix: ["L'entreprise est fortement dépendante de ses créanciers", "Elle n'a aucune dette", "Elle est très rentable", "Son FR est négatif"], bonne: 0, explication: "Les capitaux propres ne représentent que 30 % des ressources." },
    ],
  },

  8: {
    titre: "Les écritures comptables types",
    resume: md`
## L'essentiel — Écritures utiles à l'analyse

- Partie double : pour chaque écriture, $\sum \text{débits} = \sum \text{crédits}$.
- Achat à crédit : débit 6111 (HT) + 34552 (TVA récupérable), crédit 4411 (TTC).
- Vente : débit 5141 ou 3421 (TTC), crédit 7111 (HT) + 4455 (TVA facturée).
- **Dotation** : débit 619x, crédit 28xx (amortissements) ou 39xx (provisions) : charge **calculée**, réintégrée dans la CAF.
- **Cession** : prix au crédit du 7513 (PCEA) ; sortie du bien : débit 28xx (cumul) + 6513 (VNA), crédit 2xxx (valeur d'origine).
- Plus ou moins-value $= PCEA - VNA$, exclue de la CAF.
`,
    exercices: md`
### Exercice 2 — Cession d'une machine en cours d'année

Une machine acquise le 01/01/N−3 pour 80 000 DH HT est amortie en linéaire au taux de 10 %. Elle est cédée à crédit le 30/06/N pour 45 000 DH.

1. Calculez la dotation complémentaire de N, le cumul des amortissements et la VNA.
2. Passez les écritures de cession au journal.
3. Calculez le résultat de cession.

<details><summary>Voir le corrigé</summary>

**1)** Annuité $= 80\,000 \times 10\% = 8\,000$ DH ; dotation N (6 mois) $= 4\,000$ DH ; cumul $= 3 \times 8\,000 + 4\,000 = 28\,000$ DH ; $VNA = 80\,000 - 28\,000 = 52\,000$ DH.

**2)**

| Compte | Libellé | Débit | Crédit |
|---|---|--:|--:|
| 6193 | DEA des immobilisations corporelles | 4 000 | |
| 2833 | Amortissements du matériel | | 4 000 |
| 3481 | Créances sur cessions d'immobilisations | 45 000 | |
| 7513 | PCEA corporelles | | 45 000 |
| 2833 | Amortissements du matériel | 28 000 | |
| 6513 | VNA des immobilisations corporelles cédées | 52 000 | |
| 2332 | Matériel et outillage | | 80 000 |

**3)** $45\,000 - 52\,000 = -7\,000$ DH : **moins-value** de cession, neutralisée dans le calcul de la CAF.

</details>
`,
    qcm: [
      { q: "Le compte 7513 enregistre :", choix: ["La VNA des immobilisations cédées", "Le prix de cession des immobilisations corporelles", "Les dotations", "Les ventes de marchandises"], bonne: 1, explication: "PCEA : produits de cession des éléments d'actif." },
      { q: "Lors de la sortie d'un bien cédé, la VNA est portée :", choix: ["Au crédit du 6513", "Au débit du 6513", "Au crédit du 2833", "Au débit du 7513"], bonne: 1, explication: "C'est une charge non courante." },
      { q: "Une dotation aux amortissements est :", choix: ["Une charge décaissée", "Une charge calculée non décaissée", "Un produit", "Une dette"], bonne: 1, explication: "D'où sa réintégration dans la CAF." },
      { q: "Matériel acquis 60 000, amortissements cumulés 45 000, cédé 20 000 : le résultat de cession est :", choix: ["+5 000", "−5 000", "+20 000", "−40 000"], bonne: 0, explication: "VNA = 15 000 ; 20 000 − 15 000 = +5 000." },
      { q: "Lors d'un achat à crédit, le compte fournisseurs 4411 est :", choix: ["Débité du HT", "Crédité du TTC", "Débité du TTC", "Crédité du HT"], bonne: 1, explication: "La dette porte sur le montant TTC." },
    ],
  },
};
