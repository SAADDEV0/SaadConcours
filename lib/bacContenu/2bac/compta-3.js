// Comptabilité & Mathématiques financières — 2ème Bac (chapitres 13 à 16 : analyse comptable).
const md = String.raw;

export default {
  "l-analyse-du-bilan": {
    cours: md`
## Introduction

Le bilan comptable présente le patrimoine selon les règles comptables (coût historique, prudence). Pour apprécier la **santé financière** de l'entreprise (sa capacité à payer ses dettes), l'analyste le transforme en **bilan financier**.

> Le **bilan financier** (ou bilan liquidité) présente le patrimoine **réel** de l'entreprise, avec l'actif classé par **liquidité croissante** et le passif par **exigibilité croissante**.

## I. Les grandes masses du bilan financier

| Actif | Passif |
|---|---|
| **Actif immobilisé (AI)** : biens et créances à plus d'un an | **Capitaux propres (CP)** |
| **Actif circulant** : | **Dettes à long et moyen terme (DLMT)** : plus d'un an |
| – Valeurs d'exploitation (VE) : stocks | **Dettes à court terme (DCT)** : moins d'un an, y compris la trésorerie-passif |
| – Valeurs réalisables (VR) : créances à moins d'un an | |
| – Valeurs disponibles (VD) : banque, caisse, TVP facilement cessibles | |

$$\text{Capitaux permanents} = CP + DLMT$$

## II. Les retraitements et reclassements

| Élément | Traitement |
|---|---|
| **Immobilisations en non-valeurs** (frais préliminaires, charges à répartir) | Actif **fictif** : supprimées de l'actif et **déduites des capitaux propres** |
| **Plus-values** sur éléments d'actif (valeur réelle > valeur comptable) | Ajoutées à l'actif et aux **capitaux propres** ; moins-values : retranchées des deux |
| **Stock outil** (stock de sécurité permanent) | Retiré des VE et classé en **actif immobilisé** |
| Immobilisations financières à **moins d'un an** (part d'un prêt) | Reclassées en **VR** |
| Créances à **plus d'un an** | Reclassées en **AI** |
| **TVP** facilement négociables | Classés en **VD** |
| Part des **dettes de financement à moins d'un an** | Reclassée en **DCT** |
| **Dividendes** à distribuer | Retirés des CP et reclassés en **DCT** |
| Provisions pour risques et charges | En **DLMT** si plus d'un an, sinon en **DCT** |
| **Écarts de conversion – actif** | Traités comme une non-valeur (déduits des CP) |

## III. L'équilibre financier : le fonds de roulement

> **Règle de l'équilibre financier** : les emplois stables (AI) doivent être financés par des ressources stables (capitaux permanents).

$$FR = \text{capitaux permanents} - \text{actif immobilisé}$$

$$FR = \text{actif circulant} - DCT \quad (\text{approche par le bas du bilan})$$

- $FR > 0$ : les capitaux permanents financent tout l'AI et une partie de l'actif circulant → **marge de sécurité** ;
- $FR < 0$ : une partie de l'AI est financée par des dettes à court terme → **risque** d'illiquidité.

**Fonds de roulement propre** $= CP - AI$ : montre si l'AI est financé par les seuls capitaux propres.

## IV. La trésorerie

$$\text{Trésorerie nette} = \text{valeurs disponibles} - \text{trésorerie-passif}$$

Elle traduit la capacité immédiate de l'entreprise à faire face à ses paiements.

## V. Le bilan financier condensé (en grandes masses)

On présente les montants et leur **pourcentage** du total, ce qui permet de comparer la structure d'une année à l'autre ou avec d'autres entreprises.
`,
    exercices: md`
### Exercice 1 — Retraitements et bilan condensé (données fictives, en milliers de DH)

Bilan comptable résumé : frais préliminaires 40 ; constructions et matériel (net) 1 160 ; titres de participation 100 ; stocks 380 (dont stock outil 60) ; créances clients 290 ; prêts 50 (dont 20 à moins d'un an) ; banque 80.
Passif : capital et réserves 1 000 ; résultat 150 (dont dividendes à distribuer 60) ; dettes de financement 520 (dont 90 à moins d'un an) ; dettes fournisseurs 380 ; crédits de trésorerie 50.
Informations : les constructions ont une valeur réelle supérieure de 100 à leur valeur comptable.

1. Établissez le bilan financier condensé.
2. Calculez le fonds de roulement par les deux méthodes.

<details><summary>Voir le corrigé</summary>

1. Retraitements :
- **AI** $= 1\,160 + 100$ (plus-value) $+ 100$ (TP) $+ 30$ (prêts > 1 an) $+ 60$ (stock outil) $= 1\,450$ ;
- **VE** $= 380 - 60 = 320$ ; **VR** $= 290 + 20 = 310$ ; **VD** $= 80$ ;
- **CP** $= 1\,000 + 150 - 60$ (dividendes) $- 40$ (non-valeurs) $+ 100$ (plus-value) $= 1\,150$ ;
- **DLMT** $= 520 - 90 = 430$ ;
- **DCT** $= 380 + 90 + 60 + 50 = 580$.

| Actif | Montant | % | Passif | Montant | % |
|---|---|---|---|---|---|
| Actif immobilisé | 1 450 | 67,1 | Capitaux propres | 1 150 | 53,2 |
| Valeurs d'exploitation | 320 | 14,8 | DLMT | 430 | 19,9 |
| Valeurs réalisables | 310 | 14,4 | DCT | 580 | 26,9 |
| Valeurs disponibles | 80 | 3,7 | | | |
| **Total** | **2 160** | 100 | **Total** | **2 160** | 100 |

2. $FR = (1\,150 + 430) - 1\,450 = 130$ ; par le bas : $(320 + 310 + 80) - 580 = 130$. **FR positif** : l'équilibre financier est respecté.

</details>

### Exercice 2 — Interprétation

Une entreprise a : capitaux permanents 900 ; AI 1 050. Calculez le FR et commentez.

<details><summary>Voir le corrigé</summary>

$FR = 900 - 1\,050 = -150$ : **FR négatif**. Une partie des immobilisations est financée par des dettes à court terme : la règle de l'équilibre financier n'est pas respectée et l'entreprise risque des difficultés de trésorerie. Solutions : augmenter les capitaux propres, emprunter à long terme, céder des immobilisations inutiles.

</details>
`,
    resume: md`
## L'essentiel — Analyse du bilan

- **Bilan financier** : patrimoine réel ; actif par liquidité croissante, passif par exigibilité croissante.
- **Masses** : AI | VE, VR, VD ; CP | DLMT | DCT.
- **Retraitements** : non-valeurs déduites des CP ; plus-values ajoutées aux CP ; stock outil → AI ; parts à moins d'un an → VR / DCT ; dividendes → DCT.
- **FR** = capitaux permanents − AI = actif circulant − DCT ; $FR > 0$ : équilibre financier.
- **FR propre** = CP − AI.
- **Trésorerie nette** = VD − trésorerie-passif.
`,
    qcm: [
      { q: "Les frais préliminaires, dans le bilan financier, sont :", choix: ["Ajoutés à l'AI", "Supprimés et déduits des capitaux propres", "Classés en VD", "Classés en DLMT"], bonne: 1, explication: "Ce sont des actifs fictifs (non-valeurs)." },
      { q: "Le stock outil est classé :", choix: ["En valeurs d'exploitation", "En actif immobilisé", "En valeurs disponibles", "En capitaux propres"], bonne: 1, explication: "C'est un stock permanent, donc un emploi stable." },
      { q: "Le fonds de roulement est égal à :", choix: ["CP − DCT", "Capitaux permanents − AI", "AI − DCT", "VD − DCT"], bonne: 1, explication: "Ressources stables moins emplois stables." },
      { q: "Les dividendes à distribuer sont reclassés en :", choix: ["Capitaux propres", "DLMT", "DCT", "Valeurs réalisables"], bonne: 2, explication: "Ils seront payés à court terme." },
      { q: "Un FR négatif signifie que :", choix: ["L'entreprise est très solide", "Une partie de l'AI est financée par des dettes à court terme", "Les stocks sont trop faibles", "Le résultat est négatif"], bonne: 1, explication: "La règle de l'équilibre financier n'est pas respectée." },
    ],
  },

  "les-ratios": {
    cours: md`
## Introduction

Un **ratio** est un **rapport** entre deux grandeurs du bilan ou du CPC. Il permet d'apprécier la situation financière de l'entreprise, de suivre son évolution et de la comparer à d'autres.

## I. Les ratios de structure (financement)

| Ratio | Formule | Norme / interprétation |
|---|---|---|
| **Financement permanent** | $\frac{\text{capitaux permanents}}{\text{actif immobilisé}}$ | $\geq 1$ : l'AI est financé par des ressources stables (FR ≥ 0) |
| **Financement propre** | $\frac{\text{capitaux propres}}{\text{actif immobilisé}}$ | Part de l'AI financée par les fonds propres |
| **Autonomie financière** | $\frac{\text{capitaux propres}}{\text{total du passif}}$ | $\geq 0{,}5$ : les capitaux propres représentent au moins la moitié des ressources (CP ≥ dettes) |
| **Solvabilité générale** | $\frac{\text{total actif}}{\text{total des dettes}}$ | $> 1$ : l'actif suffit à rembourser toutes les dettes |
| **Endettement** | $\frac{\text{DLMT}}{\text{capitaux propres}}$ | Plus il est faible, plus l'entreprise peut encore emprunter |

## II. Les ratios de liquidité

| Ratio | Formule | Norme |
|---|---|---|
| **Liquidité générale** | $\frac{\text{actif circulant}}{DCT} = \frac{VE + VR + VD}{DCT}$ | $> 1$ (équivalent à FR > 0) |
| **Liquidité réduite** | $\frac{VR + VD}{DCT}$ | Proche de 1 |
| **Liquidité immédiate** | $\frac{VD}{DCT}$ | Entre 0,2 et 0,3 environ ; trop élevé = argent inutilisé |

> La **liquidité** est la capacité à payer ses dettes **à court terme** à l'échéance ; la **solvabilité** est la capacité à rembourser **toutes** ses dettes en vendant ses actifs.

## III. Les ratios de rotation (gestion)

$$\text{Délai de crédit clients} = \frac{\text{créances clients + effets à recevoir}}{\text{CA TTC}} \times 360 \ \text{jours}$$

$$\text{Délai de crédit fournisseurs} = \frac{\text{dettes fournisseurs + effets à payer}}{\text{achats TTC}} \times 360 \ \text{jours}$$

$$\text{Durée de stockage des marchandises} = \frac{\text{stock moyen}}{\text{achats revendus}} \times 360 \quad \text{avec} \quad \text{stock moyen} = \frac{SI + SF}{2}$$

Situation favorable : délai clients **inférieur** au délai fournisseurs (l'entreprise encaisse avant de payer). Au Maroc, la loi encadre les délais de paiement entre entreprises (loi n° 69-21), en principe 60 jours, et jusqu'à 120 jours au maximum par accord.

## IV. Les ratios de rentabilité

$$\text{Rentabilité financière} = \frac{\text{résultat net}}{\text{capitaux propres}} \times 100$$

$$\text{Rentabilité commerciale} = \frac{\text{résultat net}}{\text{CA HT}} \times 100$$

$$\text{Rentabilité économique} = \frac{\text{résultat d'exploitation}}{\text{capitaux investis (AI + BFR)}} \times 100$$

## V. Les limites

Un ratio isolé a peu de sens : il faut le **comparer** dans le temps, aux normes du secteur et aux concurrents, et le relier aux autres ratios.
`,
    exercices: md`
### Exercice 1 — Calcul des ratios (suite de l'exercice du bilan financier, en milliers de DH)

AI 1 450 ; VE 320 ; VR 310 ; VD 80 ; CP 1 150 ; DLMT 430 ; DCT 580 ; total 2 160.

Calculez et interprétez : financement permanent, autonomie financière, solvabilité générale, liquidité générale, réduite et immédiate.

<details><summary>Voir le corrigé</summary>

| Ratio | Calcul | Résultat | Interprétation |
|---|---|---|---|
| Financement permanent | $\frac{1\,580}{1\,450}$ | 1,09 | > 1 : AI financé par ressources stables |
| Autonomie financière | $\frac{1\,150}{2\,160}$ | 0,53 | > 0,5 : autonomie satisfaisante |
| Solvabilité générale | $\frac{2\,160}{430 + 580}$ | 2,14 | > 1 : entreprise solvable |
| Liquidité générale | $\frac{710}{580}$ | 1,22 | > 1 : FR positif |
| Liquidité réduite | $\frac{390}{580}$ | 0,67 | < 1 : dépend de la vente des stocks |
| Liquidité immédiate | $\frac{80}{580}$ | 0,14 | Trésorerie un peu faible |

**Bilan** : structure financière équilibrée et entreprise solvable, mais trésorerie tendue.

</details>

### Exercice 2 — Délais (données fictives, en DH)

CA TTC : 3 600 000 ; créances clients et effets à recevoir : 500 000 ; achats TTC : 2 400 000 ; dettes fournisseurs : 240 000.

Calculez les délais clients et fournisseurs et commentez.

<details><summary>Voir le corrigé</summary>

Clients $= \frac{500\,000}{3\,600\,000} \times 360 = 50$ jours ; fournisseurs $= \frac{240\,000}{2\,400\,000} \times 360 = 36$ jours.
L'entreprise accorde à ses clients plus de temps qu'elle n'en obtient de ses fournisseurs : **situation défavorable** pour la trésorerie. Elle doit réduire le délai clients (escompte pour paiement rapide, relances) ou négocier un délai fournisseurs plus long.

</details>
`,
    resume: md`
## L'essentiel — Les ratios

- **Financement permanent** $= \frac{\text{cap. permanents}}{AI} \geq 1$.
- **Autonomie financière** $= \frac{CP}{\text{total passif}} \geq 0{,}5$.
- **Solvabilité générale** $= \frac{\text{total actif}}{\text{total dettes}} > 1$.
- **Liquidité** : générale $\frac{AC}{DCT} > 1$ ; réduite $\frac{VR+VD}{DCT}$ ; immédiate $\frac{VD}{DCT}$.
- **Délais** : clients $= \frac{\text{créances}}{CA\ TTC} \times 360$ ; fournisseurs $= \frac{\text{dettes fourn.}}{\text{achats TTC}} \times 360$.
- **Rentabilité financière** $= \frac{RN}{CP} \times 100$.
- Un ratio se **compare** (dans le temps, au secteur).
`,
    qcm: [
      { q: "Le ratio de solvabilité générale est :", choix: ["CP / total passif", "Total actif / total des dettes", "AC / DCT", "VD / DCT"], bonne: 1, explication: "Capacité à rembourser toutes les dettes." },
      { q: "Une liquidité générale supérieure à 1 signifie :", choix: ["Un FR positif", "Un FR négatif", "Une perte", "Un endettement excessif"], bonne: 0, explication: "Actif circulant > DCT ⇔ FR > 0." },
      { q: "La liquidité immédiate est égale à :", choix: ["VR / DCT", "VD / DCT", "(VE + VR) / DCT", "CP / DCT"], bonne: 1, explication: "Seules les valeurs disponibles." },
      { q: "Créances 300 000, CA TTC 2 700 000 : délai clients =", choix: ["30 jours", "40 jours", "45 jours", "90 jours"], bonne: 1, explication: "300 000 / 2 700 000 × 360 = 40 jours." },
      { q: "L'autonomie financière est satisfaisante lorsque CP / total passif est :", choix: ["< 0,2", "≥ 0,5", "= 0", "< 0"], bonne: 1, explication: "Les fonds propres couvrent au moins la moitié des ressources." },
    ],
  },

  "l-etat-des-soldes-de-gestion-esg": {
    cours: md`
## Introduction

Le CPC donne le résultat net, mais n'explique pas **comment** il s'est formé. L'**état des soldes de gestion (ESG)**, document de synthèse du CGNC, décompose le résultat en **soldes intermédiaires** et calcule la **capacité d'autofinancement**.

L'ESG comprend deux tableaux : le **tableau de formation des résultats (TFR)** et le **tableau de la capacité d'autofinancement (CAF)**.

## I. Le tableau de formation des résultats (TFR)

| N° | Élément | Calcul |
|---|---|---|
| 1 | Ventes de marchandises (en l'état) | |
| 2 | − Achats revendus de marchandises | |
| **I** | **Marge brute sur ventes en l'état** | 1 − 2 |
| **II** | **Production de l'exercice** | Ventes de biens et services produits ± variation de stocks de produits + immobilisations produites par l'entreprise pour elle-même |
| **III** | **Consommation de l'exercice** | Achats consommés de matières et fournitures + autres charges externes |
| **IV** | **Valeur ajoutée (VA)** | I + II − III |
| 8 | + Subventions d'exploitation | |
| 9 | − Impôts et taxes | |
| 10 | − Charges de personnel | |
| **V** | **Excédent brut d'exploitation (EBE)** ou insuffisance brute (IBE) | IV + 8 − 9 − 10 |
| 11 | + Autres produits d'exploitation | |
| 12 | − Autres charges d'exploitation | |
| 13 | + Reprises d'exploitation, transferts de charges | |
| 14 | − Dotations d'exploitation | |
| **VI** | **Résultat d'exploitation** | V + 11 − 12 + 13 − 14 |
| **VII** | **Résultat financier** | Produits financiers − charges financières |
| **VIII** | **Résultat courant** | VI + VII |
| **IX** | **Résultat non courant** | Produits non courants − charges non courantes |
| 15 | − Impôts sur les résultats | |
| **X** | **Résultat net de l'exercice** | VIII + IX − 15 |

### Signification des principaux soldes

- **Marge brute** : rentabilité de l'activité commerciale (revente en l'état) ;
- **Valeur ajoutée** : richesse créée par l'entreprise ; elle rémunère le personnel, l'État, les prêteurs et les actionnaires ;
- **EBE** : ressource dégagée par l'exploitation, indépendamment des politiques d'amortissement et de financement ;
- **Résultat courant** : résultat des activités habituelles.

## II. La capacité d'autofinancement (CAF)

> La **CAF** est l'ensemble des ressources **internes** dégagées par l'activité de l'entreprise, qu'elle peut utiliser pour financer ses investissements, rembourser ses emprunts ou verser des dividendes.

### Méthode additive (à partir du résultat net)

| | Élément |
|---|---|
| | **Résultat net de l'exercice** |
| + | Dotations d'exploitation (1) |
| + | Dotations financières (1) |
| + | Dotations non courantes (1) |
| − | Reprises d'exploitation (2) |
| − | Reprises financières (2) |
| − | Reprises non courantes (2) |
| − | Produits des cessions d'immobilisations |
| + | Valeurs nettes d'amortissements des immobilisations cédées |
| **=** | **Capacité d'autofinancement (CAF)** |
| − | Distributions de bénéfices (dividendes) |
| **=** | **Autofinancement** |

(1) À l'exclusion des dotations relatives aux actifs et passifs circulants et à la trésorerie.
(2) À l'exclusion des reprises relatives aux actifs et passifs circulants et à la trésorerie, et des transferts de charges.

**Logique** : on neutralise les charges et produits **calculés** (sans mouvement de trésorerie) et le résultat de cession.

$$\text{Autofinancement} = CAF - \text{dividendes distribués}$$
`,
    exercices: md`
### Exercice 1 — TFR (données fictives, en milliers de DH)

Ventes de marchandises 1 800 ; achats revendus de marchandises 1 250 ; ventes de biens produits 2 600 ; variation de stocks de produits +40 ; achats consommés de matières 1 300 ; autres charges externes 420 ; impôts et taxes 60 ; charges de personnel 900 ; autres produits d'exploitation 20 ; dotations d'exploitation 280 ; reprises d'exploitation 30 ; produits financiers 25 ; charges financières 115 ; produits non courants 60 ; charges non courantes 40 ; IS 50.

Établissez le TFR.

<details><summary>Voir le corrigé</summary>

| Solde | Calcul | Montant |
|---|---|---|
| I. Marge brute | $1\,800 - 1\,250$ | 550 |
| II. Production | $2\,600 + 40$ | 2 640 |
| III. Consommation | $1\,300 + 420$ | 1 720 |
| IV. VA | $550 + 2\,640 - 1\,720$ | 1 470 |
| V. EBE | $1\,470 - 60 - 900$ | 510 |
| VI. Résultat d'exploitation | $510 + 20 + 30 - 280$ | 280 |
| VII. Résultat financier | $25 - 115$ | −90 |
| VIII. Résultat courant | $280 - 90$ | 190 |
| IX. Résultat non courant | $60 - 40$ | 20 |
| X. Résultat net | $190 + 20 - 50$ | **160** |

</details>

### Exercice 2 — CAF (suite)

Informations complémentaires : les dotations d'exploitation (280) comprennent 40 de dotations aux provisions pour dépréciation de l'actif circulant ; les reprises d'exploitation (30) portent entièrement sur l'actif circulant ; les produits non courants comprennent 45 de produits de cession d'immobilisations, dont la VNA (incluse dans les charges non courantes) est de 30. Dividendes distribués : 70.

Calculez la CAF et l'autofinancement.

<details><summary>Voir le corrigé</summary>

| | Élément | Montant |
|---|---|---|
| | Résultat net | 160 |
| + | Dotations d'exploitation hors actif circulant ($280 - 40$) | 240 |
| − | Reprises d'exploitation hors actif circulant | 0 |
| − | Produits des cessions d'immobilisations | 45 |
| + | VNA des immobilisations cédées | 30 |
| **=** | **CAF** | **385** |
| − | Dividendes | 70 |
| **=** | **Autofinancement** | **315** |

</details>
`,
    resume: md`
## L'essentiel — L'ESG

- **TFR** : marge brute (I) ; production (II) ; consommation (III) ; **VA = I + II − III** ; **EBE = VA + subventions − impôts et taxes − charges de personnel** ; résultat d'exploitation ; financier ; **courant** ; non courant ; **net**.
- **CAF (additive)** = RN + dotations (hors actif circulant et trésorerie) − reprises (idem, hors transferts) − produits de cession + VNA des immobilisations cédées.
- **Autofinancement** = CAF − dividendes.
- VA : richesse créée ; EBE : performance de l'exploitation.
`,
    qcm: [
      { q: "La valeur ajoutée est égale à :", choix: ["Marge brute + production − consommation", "Production − charges de personnel", "EBE − dotations", "CA − achats"], bonne: 0, explication: "VA = I + II − III." },
      { q: "L'EBE s'obtient à partir de la VA en :", choix: ["Ajoutant les dotations", "Ajoutant les subventions et retranchant impôts et taxes et charges de personnel", "Retranchant l'IS", "Ajoutant les produits financiers"], bonne: 1, explication: "EBE = VA + subventions d'exploitation − impôts et taxes − charges de personnel." },
      { q: "Dans le calcul additif de la CAF, les dotations aux amortissements sont :", choix: ["Retranchées", "Ajoutées", "Ignorées", "Multipliées par 2"], bonne: 1, explication: "Ce sont des charges calculées sans décaissement." },
      { q: "Le produit de cession d'une immobilisation est, dans la CAF :", choix: ["Ajouté", "Retranché", "Ignoré", "Remplacé par la VO"], bonne: 1, explication: "Il ne provient pas de l'activité courante." },
      { q: "L'autofinancement est égal à :", choix: ["CAF + dividendes", "CAF − dividendes", "RN − dotations", "EBE − IS"], bonne: 1, explication: "La part de la CAF conservée par l'entreprise." },
    ],
  },

  "le-tableau-d-exploitation-differentiel-ted": {
    cours: md`
## Introduction

Pour prévoir son résultat et savoir à partir de quel chiffre d'affaires elle devient bénéficiaire, l'entreprise classe ses charges selon leur comportement face au niveau d'activité : c'est l'objet du **tableau d'exploitation différentiel (TED)**.

## I. Charges variables et charges fixes

| Charges variables (CV) | Charges fixes (CF) |
|---|---|
| Varient **proportionnellement** au niveau d'activité | Restent **constantes** quel que soit le niveau d'activité (dans une structure donnée) |
| Achats consommés, commissions des vendeurs, emballages, transport sur ventes | Loyers, salaires fixes, amortissements, assurances, intérêts |

## II. Le tableau d'exploitation différentiel

| Élément | Montant | % du CA |
|---|---|---|
| Chiffre d'affaires (CA) | | 100 % |
| − Charges variables | | |
| **= Marge sur coût variable (MCV)** | | **Taux de MCV** |
| − Charges fixes | | |
| **= Résultat** | | |

$$MCV = CA - CV \qquad \text{Taux de MCV} = \frac{MCV}{CA} \times 100 \qquad \text{Résultat} = MCV - CF$$

Le **taux de MCV** est constant : chaque dirham de CA supplémentaire rapporte ce pourcentage de marge.

## III. Le seuil de rentabilité (SR)

> Le **seuil de rentabilité** est le **chiffre d'affaires** pour lequel l'entreprise ne réalise **ni bénéfice ni perte** : $MCV = CF$ et résultat $= 0$.

$$SR = \frac{CF}{\text{taux de MCV}} = \frac{CF \times CA}{MCV}$$

- $CA > SR$ : **bénéfice** ; $CA < SR$ : **perte**.
- **Seuil en quantités** $= \frac{SR}{\text{prix de vente unitaire}}$ ou $\frac{CF}{MCV \text{ unitaire}}$.

## IV. Le point mort

C'est la **date** à laquelle le seuil de rentabilité est atteint (si l'activité est régulière sur l'année) :

$$\text{Point mort} = \frac{SR}{CA} \times 12 \ \text{mois} \quad (\text{ou} \times 360 \ \text{jours})$$

## V. La marge et l'indice de sécurité

$$\text{Marge de sécurité} = CA - SR$$

$$\text{Indice de sécurité} = \frac{CA - SR}{CA} \times 100$$

L'indice de sécurité indique de combien (en %) le CA peut baisser avant que l'entreprise ne subisse une perte.

## VI. Le levier opérationnel

$$\text{Levier opérationnel} = \frac{MCV}{\text{résultat}} = \frac{\text{variation relative du résultat}}{\text{variation relative du CA}}$$

Un levier de 4 signifie qu'une hausse de 1 % du CA entraîne une hausse de 4 % du résultat.
`,
    exercices: md`
### Exercice 1 — TED et seuil de rentabilité (données fictives)

Une entreprise vend 20 000 unités à 150 DH. Coût variable unitaire : 90 DH. Charges fixes annuelles : 900 000 DH. Activité régulière sur l'année.

1. Établissez le TED.
2. Calculez le SR en valeur et en quantité, et le point mort.
3. Calculez la marge de sécurité et l'indice de sécurité.

<details><summary>Voir le corrigé</summary>

1. TED :

| Élément | Montant | % |
|---|---|---|
| CA ($20\,000 \times 150$) | 3 000 000 | 100 |
| − CV ($20\,000 \times 90$) | 1 800 000 | 60 |
| = MCV | 1 200 000 | 40 |
| − CF | 900 000 | |
| = Résultat | 300 000 | 10 |

2. $SR = \frac{900\,000}{0{,}40} = 2\,250\,000$ DH ; en quantité : $\frac{2\,250\,000}{150} = 15\,000$ unités.
   Point mort $= \frac{2\,250\,000}{3\,000\,000} \times 12 = 9$ mois → atteint fin **septembre**.
3. Marge de sécurité $= 3\,000\,000 - 2\,250\,000 = 750\,000$ DH ; indice $= \frac{750\,000}{3\,000\,000} \times 100 = 25\%$ : le CA peut baisser de 25 % avant la perte.

</details>

### Exercice 2 — Résultat prévisionnel (suite)

L'entreprise prévoit une hausse du CA de 10 %, à prix et structure inchangés.

1. Calculez le nouveau résultat.
2. Calculez le levier opérationnel et vérifiez-le.

<details><summary>Voir le corrigé</summary>

1. Nouveau CA $= 3\,300\,000$ ; MCV $= 40\% \times 3\,300\,000 = 1\,320\,000$ ; résultat $= 1\,320\,000 - 900\,000 = 420\,000$ DH.
2. Levier $= \frac{1\,200\,000}{300\,000} = 4$. Vérification : le résultat passe de 300 000 à 420 000, soit $+40\%$, pour un CA en hausse de 10 % : $\frac{40\%}{10\%} = 4$. ✔

</details>
`,
    resume: md`
## L'essentiel — Le TED

- **CV** : proportionnelles à l'activité ; **CF** : constantes.
- **MCV** = CA − CV ; **taux de MCV** = MCV / CA ; **résultat** = MCV − CF.
- **SR** $= \frac{CF}{\text{taux de MCV}}$ (résultat nul) ; en quantités : $\frac{CF}{MCV\ \text{unitaire}}$.
- **Point mort** $= \frac{SR}{CA} \times 12$ mois.
- **Marge de sécurité** = CA − SR ; **indice de sécurité** $= \frac{CA - SR}{CA} \times 100$.
- **Levier opérationnel** $= \frac{MCV}{\text{résultat}}$.
`,
    qcm: [
      { q: "Au seuil de rentabilité :", choix: ["MCV = CV", "MCV = CF", "CA = CV", "Résultat = CF"], bonne: 1, explication: "Le résultat est nul." },
      { q: "CF = 400 000 ; taux de MCV = 25 % : SR =", choix: ["100 000", "1 600 000", "500 000", "1 000 000"], bonne: 1, explication: "400 000 / 0,25 = 1 600 000." },
      { q: "Le loyer d'un local est une charge :", choix: ["Variable", "Fixe", "Semi-variable obligatoirement", "Non courante"], bonne: 1, explication: "Il ne dépend pas du volume d'activité." },
      { q: "SR = 900 000 et CA = 1 200 000 : le point mort est atteint après :", choix: ["6 mois", "8 mois", "9 mois", "10 mois"], bonne: 2, explication: "900 000 / 1 200 000 × 12 = 9 mois." },
      { q: "Un indice de sécurité de 20 % signifie que :", choix: ["Le résultat est de 20 %", "Le CA peut baisser de 20 % avant la perte", "Les CF représentent 20 %", "La MCV est de 20 %"], bonne: 1, explication: "C'est la marge de sécurité rapportée au CA." },
    ],
  },
};
