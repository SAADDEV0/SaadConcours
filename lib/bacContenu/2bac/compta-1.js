// Comptabilité & Mathématiques financières — 2ème Bac (chapitres 1 à 7).
// Comptes : Code général de normalisation comptable (CGNC, Maroc).
const md = String.raw;

export default {
  "introduction-aux-travaux-de-fin-d-exercice": {
    cours: md`
## Introduction

Pendant l'exercice, l'entreprise enregistre ses opérations courantes (achats, ventes, règlements). Mais à la clôture (souvent le 31 décembre), les comptes ne donnent pas encore une **image fidèle** du patrimoine et du résultat. Il faut réaliser les **travaux de fin d'exercice** (ou **travaux d'inventaire**).

## I. L'inventaire

> L'**inventaire** est le **recensement** et l'**évaluation** de tous les éléments d'actif et de passif de l'entreprise à la date de clôture de l'exercice.

- **Inventaire extra-comptable** : comptage physique (stocks, caisse), rapprochement bancaire, vérification des créances ;
- **Inventaire comptable** : enregistrement des écritures de régularisation.

Il est **obligatoire** au moins une fois par an (loi n° 9-88 relative aux obligations comptables des commerçants).

## II. Les principes comptables concernés

| Principe | Signification |
|---|---|
| **Continuité d'exploitation** | L'entreprise poursuit son activité ; ses biens sont évalués dans cette hypothèse |
| **Permanence des méthodes** | Les méthodes d'évaluation ne changent pas d'un exercice à l'autre |
| **Coût historique** | Les biens sont enregistrés à leur coût d'entrée |
| **Spécialisation des exercices (indépendance)** | Chaque exercice supporte **ses** charges et **ses** produits, et seulement eux |
| **Prudence** | Les pertes probables sont constatées ; les gains probables ne le sont pas |
| **Clarté** | Les opérations sont classées et présentées clairement |
| **Importance significative** | Tout élément pouvant influencer le jugement doit être mentionné |

## III. Les travaux de fin d'exercice

| Travaux | Objectif | Chapitre |
|---|---|---|
| **Régularisation des stocks** | Enregistrer les stocks finaux et annuler les stocks initiaux | Stocks |
| **Amortissements** | Constater la dépréciation **irréversible** des immobilisations | Amortissements |
| **Provisions pour dépréciation** | Constater les dépréciations **probables** d'éléments d'actif | Provisions |
| **Provisions pour risques et charges** | Constater les risques et charges probables | Provisions |
| **Régularisation des charges et produits** | Rattacher les charges et produits au bon exercice | Régularisations |
| **Calcul de l'impôt sur les sociétés** | Déterminer l'IS dû | IS |

## IV. De la balance aux états de synthèse

1. **Balance avant inventaire** : soldes des comptes avant régularisations ;
2. **Écritures d'inventaire** au journal ;
3. **Balance après inventaire** ;
4. **États de synthèse** : **bilan**, **compte de produits et charges (CPC)**, **ESG**, tableau de financement, **ETIC** (état des informations complémentaires).

## V. Rappel : le résultat

$$\text{Résultat} = \text{produits} - \text{charges}$$

Le CPC distingue :

- le **résultat d'exploitation** (produits − charges d'exploitation) ;
- le **résultat financier** ;
- le **résultat courant** = résultat d'exploitation + résultat financier ;
- le **résultat non courant** ;
- le **résultat avant impôt** = résultat courant + résultat non courant ;
- le **résultat net** = résultat avant impôt − impôt sur les résultats.
`,
    exercices: md`
### Exercice 1 — Principes comptables

Quel principe s'applique ? a) Un client en difficulté risque de ne pas payer : on constate une provision ; b) le loyer de janvier N+1 payé en décembre N n'est pas une charge de N ; c) un terrain acheté 500 000 DH, qui vaut aujourd'hui 800 000 DH, reste au bilan à 500 000 DH ; d) l'entreprise garde chaque année la même méthode d'amortissement.

<details><summary>Voir le corrigé</summary>

a) **Prudence** ; b) **Spécialisation (indépendance) des exercices** ; c) **Coût historique** (et prudence) ; d) **Permanence des méthodes**.

</details>

### Exercice 2 — Calcul des résultats (données fictives, en DH)

Produits d'exploitation : 2 400 000 ; charges d'exploitation : 2 050 000 ; produits financiers : 30 000 ; charges financières : 80 000 ; produits non courants : 45 000 ; charges non courantes : 25 000. Taux d'IS : 20 % (on suppose résultat fiscal = résultat comptable).

Calculez les différents résultats.

<details><summary>Voir le corrigé</summary>

| Résultat | Calcul | Montant |
|---|---|---|
| Exploitation | $2\,400\,000 - 2\,050\,000$ | 350 000 |
| Financier | $30\,000 - 80\,000$ | −50 000 |
| Courant | $350\,000 - 50\,000$ | 300 000 |
| Non courant | $45\,000 - 25\,000$ | 20 000 |
| Avant impôt | $300\,000 + 20\,000$ | 320 000 |
| IS | $320\,000 \times 20\%$ | 64 000 |
| **Net** | $320\,000 - 64\,000$ | **256 000** |

</details>
`,
    resume: md`
## L'essentiel — Travaux de fin d'exercice

- **Inventaire** : recensement et évaluation de l'actif et du passif à la clôture (obligatoire, loi 9-88).
- **Principes** : continuité, permanence des méthodes, coût historique, **spécialisation des exercices**, **prudence**, clarté, importance significative.
- **Travaux** : stocks, amortissements, provisions (dépréciation, risques et charges), régularisation des charges et produits, IS.
- Balance avant inventaire → écritures d'inventaire → balance après inventaire → **états de synthèse** (bilan, CPC, ESG, TF, ETIC).
- Résultats : exploitation, financier, **courant**, non courant, avant impôt, **net**.
`,
    qcm: [
      { q: "Le principe de prudence impose de :", choix: ["Constater les gains probables", "Constater les pertes probables", "Réévaluer les terrains", "Changer de méthode chaque année"], bonne: 1, explication: "Seules les pertes probables sont comptabilisées." },
      { q: "Le résultat courant est égal à :", choix: ["Résultat d'exploitation + résultat financier", "Résultat net + IS", "Résultat non courant + financier", "Produits − IS"], bonne: 0, explication: "Il regroupe les activités habituelles." },
      { q: "L'inventaire doit être réalisé au moins :", choix: ["Chaque mois", "Une fois par an", "Tous les trois ans", "À la création de l'entreprise"], bonne: 1, explication: "À la clôture de chaque exercice." },
      { q: "Le principe de spécialisation des exercices signifie que :", choix: ["Chaque exercice supporte ses propres charges et produits", "Les exercices durent 6 mois", "Les produits sont toujours constatés", "Les stocks sont évalués au prix de vente"], bonne: 0, explication: "D'où les régularisations de charges et de produits." },
      { q: "Lequel n'est pas un état de synthèse ?", choix: ["Le bilan", "Le CPC", "Le journal", "L'ESG"], bonne: 2, explication: "Le journal est un livre comptable, pas un état de synthèse." },
    ],
  },

  "la-regularisation-des-stocks": {
    cours: md`
## Introduction

En cours d'exercice, la plupart des entreprises marocaines suivent leurs stocks en **inventaire intermittent** : les achats sont enregistrés en charges et les ventes en produits, sans mouvement des comptes de stocks. À la clôture, il faut **régulariser** les stocks.

## I. Le principe

- Le **stock initial (SI)**, qui figure au bilan depuis l'exercice précédent, doit être **annulé** ;
- Le **stock final (SF)**, déterminé par l'inventaire physique, doit être **constaté**.

La différence est enregistrée dans les comptes de **variation de stocks**.

## II. Les stocks achetés (marchandises, matières et fournitures)

### Écritures (marchandises)

**1. Annulation du stock initial**

| Débit | Crédit | Libellé |
|---|---|---|
| 6114 Variation des stocks de marchandises | | SI |
| | 3111 Marchandises | SI |

**2. Constatation du stock final**

| Débit | Crédit | Libellé |
|---|---|---|
| 3111 Marchandises | | SF |
| | 6114 Variation des stocks de marchandises | SF |

Pour les matières premières : comptes **3121** et **6124** (variation des stocks de matières et fournitures) ; pour les matières et fournitures consommables : **3122** et **6124**.

### Le calcul

$$\text{Variation de stock (achats)} = SI - SF$$

- Si $SI > SF$ : solde **débiteur** du 6114 → le stock a diminué, la charge augmente ;
- Si $SI < SF$ : solde **créditeur** → le stock a augmenté, il vient en diminution des achats.

$$\text{Achats revendus de marchandises} = \text{achats} + (SI - SF)$$

$$\text{Achats consommés de matières} = \text{achats de matières} + (SI - SF)$$

## III. Les stocks produits (produits finis, en cours)

**1. Annulation du stock initial**

| Débit | Crédit |
|---|---|
| 7132 Variation des stocks de biens produits | 3151 Produits finis |

**2. Constatation du stock final**

| Débit | Crédit |
|---|---|
| 3151 Produits finis | 7132 Variation des stocks de biens produits |

Pour les produits en cours : **3131** et **7131** (variation des stocks de produits en cours).

$$\text{Variation de stock (production)} = SF - SI$$

Une augmentation du stock de produits ($SF > SI$) **augmente** les produits de l'exercice : c'est une production **stockée**.

## IV. Au bilan et au CPC

- Le **stock final** figure à l'**actif circulant** du bilan (classe 3) ;
- Les **variations** figurent au CPC : en déduction des achats (6114, 6124) ou dans les produits d'exploitation (7131, 7132).
`,
    exercices: md`
### Exercice 1 — Marchandises (données fictives)

Stock initial de marchandises : 85 000 DH ; stock final : 62 000 DH ; achats de marchandises de l'exercice : 540 000 DH.

1. Passez les écritures de régularisation au 31/12.
2. Calculez la variation de stock et les achats revendus.

<details><summary>Voir le corrigé</summary>

1. Écritures :

| Compte débité | Compte crédité | Montant |
|---|---|---|
| 6114 Variation des stocks de marchandises | 3111 Marchandises | 85 000 |
| 3111 Marchandises | 6114 Variation des stocks de marchandises | 62 000 |

2. Variation $= SI - SF = 85\,000 - 62\,000 = 23\,000$ DH (solde débiteur : le stock a diminué).
   Achats revendus $= 540\,000 + 23\,000 = 563\,000$ DH.

</details>

### Exercice 2 — Produits finis (données fictives)

Stock initial de produits finis : 120 000 DH ; stock final : 150 000 DH.

1. Passez les écritures.
2. Calculez la variation et indiquez son effet sur le résultat.

<details><summary>Voir le corrigé</summary>

1. Écritures :

| Compte débité | Compte crédité | Montant |
|---|---|---|
| 7132 Variation des stocks de biens produits | 3151 Produits finis | 120 000 |
| 3151 Produits finis | 7132 Variation des stocks de biens produits | 150 000 |

2. Variation $= SF - SI = 150\,000 - 120\,000 = +30\,000$ DH (solde créditeur du 7132). Elle **augmente** les produits d'exploitation, donc le résultat, de 30 000 DH.

</details>
`,
    resume: md`
## L'essentiel — Régularisation des stocks

- Inventaire intermittent : **annuler le SI**, **constater le SF**.
- **Marchandises** : SI → 6114 / 3111 ; SF → 3111 / 6114.
- **Matières** : 6124 / 3121 et 3121 / 6124.
- **Produits finis** : SI → 7132 / 3151 ; SF → 3151 / 7132 (en cours : 7131 / 3131).
- Stocks achetés : variation $= SI - SF$ ; achats revendus $=$ achats $+ (SI - SF)$.
- Stocks produits : variation $= SF - SI$ (production stockée).
- SF à l'actif circulant ; variations au CPC.
`,
    qcm: [
      { q: "L'annulation du stock initial de marchandises se fait par :", choix: ["3111 à 6114", "6114 à 3111", "7132 à 3151", "3151 à 7132"], bonne: 1, explication: "On débite la variation et on crédite le compte de stock." },
      { q: "Avec achats = 300 000, SI = 40 000, SF = 55 000, les achats revendus valent :", choix: ["315 000", "285 000", "300 000", "395 000"], bonne: 1, explication: "300 000 + (40 000 − 55 000) = 285 000." },
      { q: "Le compte de variation des stocks de produits finis est :", choix: ["6114", "6124", "7132", "7131"], bonne: 2, explication: "7132 Variation des stocks de biens produits." },
      { q: "Pour les produits finis, la variation se calcule par :", choix: ["SI − SF", "SF − SI", "SI + SF", "Achats − SF"], bonne: 1, explication: "Une hausse du stock est une production stockée (produit)." },
      { q: "Le stock final apparaît au bilan dans :", choix: ["L'actif immobilisé", "L'actif circulant", "Les capitaux propres", "Le passif circulant"], bonne: 1, explication: "Classe 3 : actif circulant." },
    ],
  },

  "amortissements-definition-taux-et-cumul": {
    cours: md`
## Introduction

Les immobilisations (machines, véhicules, bâtiments) sont utilisées pendant plusieurs années et **perdent de la valeur** avec le temps, l'usure ou l'obsolescence. L'**amortissement** permet de répartir leur coût sur leur durée d'utilisation.

## I. Définition

> L'**amortissement** est la **constatation comptable** de la **dépréciation irréversible** d'une immobilisation, due à l'usage, au temps ou à l'obsolescence technique.

- **Biens amortissables** : constructions, matériel et outillage, matériel de transport, mobilier, matériel informatique, immobilisations en non-valeurs (frais préliminaires), brevets…
- **Biens non amortissables** : **terrains**, **fonds commercial**, immobilisations financières (titres de participation). Ils peuvent faire l'objet de **provisions**.

## II. Les éléments de calcul

| Élément | Définition |
|---|---|
| **Valeur d'origine (VO)** | Coût d'acquisition **hors TVA récupérable** (prix d'achat + frais accessoires : transport, installation, droits…) |
| **Durée d'utilisation (n)** | Nombre d'années d'utilisation prévues |
| **Taux d'amortissement (t)** | $t = \frac{100}{n}$ (en linéaire) |
| **Date de mise en service** | Point de départ du calcul |

**Taux usuels au Maroc** (admis par l'administration fiscale) : constructions 4 à 5 % ; matériel et outillage 10 à 15 % ; matériel de transport 20 à 25 % ; mobilier et matériel de bureau 10 à 15 % ; matériel informatique 15 à 20 % ; frais préliminaires 20 % (sur 5 ans au maximum).

## III. L'amortissement linéaire (constant)

$$\text{Annuité} = VO \times t = \frac{VO}{n}$$

**Prorata temporis** : la première annuité est calculée à partir de la **date de mise en service** (en mois ou en jours) :

$$\text{1ʳᵉ annuité} = VO \times t \times \frac{\text{nombre de mois}}{12}$$

## IV. Le cumul des amortissements et la VNA

$$\text{Cumul des amortissements} = \sum \text{annuités déjà pratiquées}$$

$$\text{Valeur nette d'amortissement (VNA)} = VO - \text{cumul des amortissements}$$

À la fin de la durée d'utilisation, $VNA = 0$ : le bien est **totalement amorti** (il peut rester au bilan tant qu'il est utilisé).

## V. Retrouver un élément inconnu

- Nombre d'années écoulées : $\frac{\text{cumul}}{\text{annuité}}$ ;
- Taux : $t = \frac{\text{annuité}}{VO}$ ;
- Date d'acquisition : à partir du cumul et de la date de clôture.

## VI. Au bilan

Au bilan, l'actif immobilisé présente, pour chaque immobilisation : la **valeur brute** (VO), les **amortissements et provisions** (cumul) et la **valeur nette**.
`,
    exercices: md`
### Exercice 1 — Annuité et VNA (données fictives)

Une machine est acquise le 1ᵉʳ avril 2023 pour 180 000 DH HT, frais d'installation 20 000 DH HT. Durée d'utilisation : 10 ans. Amortissement linéaire. Clôture le 31 décembre.

1. Calculez la VO et le taux.
2. Calculez les annuités de 2023 et 2024.
3. Calculez le cumul et la VNA au 31/12/2025.

<details><summary>Voir le corrigé</summary>

1. $VO = 180\,000 + 20\,000 = 200\,000$ DH ; $t = \frac{100}{10} = 10\%$.
2. 2023 (9 mois) : $200\,000 \times 10\% \times \frac{9}{12} = 15\,000$ DH ; 2024 : $200\,000 \times 10\% = 20\,000$ DH.
3. Cumul au 31/12/2025 $= 15\,000 + 20\,000 + 20\,000 = 55\,000$ DH ; $VNA = 200\,000 - 55\,000 = 145\,000$ DH.

</details>

### Exercice 2 — Retrouver la date d'acquisition

Un véhicule de VO 240 000 DH, amorti au taux linéaire de 20 %, présente au 31/12/2024 un cumul d'amortissements de 132 000 DH. Retrouvez sa date d'acquisition.

<details><summary>Voir le corrigé</summary>

Annuité $= 240\,000 \times 20\% = 48\,000$ DH. Nombre d'années $= \frac{132\,000}{48\,000} = 2{,}75$ ans, soit **2 ans et 9 mois**.
En remontant de 2 ans et 9 mois à partir du 31/12/2024, on obtient une mise en service le **1ᵉʳ avril 2022**.

</details>
`,
    resume: md`
## L'essentiel — Amortissements (notions)

- **Amortissement** : constatation de la dépréciation **irréversible** d'une immobilisation.
- **Non amortissables** : terrains, fonds commercial, titres de participation (→ provisions).
- **VO** = coût d'acquisition HT + frais accessoires.
- **Linéaire** : taux $t = \frac{100}{n}$ ; annuité $= VO \times t$ ; 1ʳᵉ annuité au **prorata temporis**.
- **Cumul** = somme des annuités ; **VNA** = VO − cumul.
- Années écoulées $= \frac{\text{cumul}}{\text{annuité}}$.
`,
    qcm: [
      { q: "Lequel n'est pas amortissable ?", choix: ["Un camion", "Un terrain", "Un ordinateur", "Un bâtiment"], bonne: 1, explication: "Le terrain ne se déprécie pas avec l'usage." },
      { q: "Pour une durée de 8 ans, le taux linéaire est :", choix: ["8 %", "10 %", "12,5 %", "20 %"], bonne: 2, explication: "100 / 8 = 12,5 %." },
      { q: "La VNA est égale à :", choix: ["VO + cumul", "VO − cumul des amortissements", "Annuité × n", "VO × t"], bonne: 1, explication: "Valeur nette d'amortissement." },
      { q: "Un bien de 60 000 DH acquis le 1er juillet, taux 10 %, a une 1re annuité de :", choix: ["6 000", "3 000", "4 500", "1 500"], bonne: 1, explication: "60 000 × 10 % × 6/12 = 3 000." },
      { q: "La VO d'une immobilisation comprend :", choix: ["La TVA récupérable", "Le prix d'achat HT et les frais accessoires", "Les intérêts de l'emprunt", "Les frais de réparation annuels"], bonne: 1, explication: "Coût d'acquisition hors TVA récupérable." },
    ],
  },

  "amortissements-dotations-ecritures-et-cessions": {
    cours: md`
## Introduction

Chaque année, l'annuité d'amortissement est enregistrée en **charge** (dotation). Lorsqu'une immobilisation est **cédée**, il faut la sortir du patrimoine et constater le résultat de la cession.

## I. L'écriture de la dotation

| Débit | Crédit | Montant |
|---|---|---|
| 619x Dotations d'exploitation aux amortissements | | Annuité |
| | 28xx Amortissements de … | Annuité |

**Correspondance des comptes** :

| Immobilisation | Dotation | Amortissement |
|---|---|---|
| Frais préliminaires (2111) | 6191 D.E.A. de l'immobilisation en non-valeurs | 2811 |
| Brevets, logiciels (22xx) | 6192 D.E.A. des immobilisations incorporelles | 282x |
| Constructions (232x) | 6193 D.E.A. des immobilisations corporelles | 2832 |
| Installations techniques, matériel et outillage (233x) | 6193 | 2833 |
| Matériel de transport (2340) | 6193 | 2834 |
| Mobilier, matériel de bureau et aménagements (235x) | 6193 | 2835 |

**Exemple** : dotation de 20 000 DH sur une machine :

| Compte débité | Compte crédité | Montant |
|---|---|---|
| 6193 D.E.A. des immobilisations corporelles | 2833 Amortissements des ITMO | 20 000 |

La dotation est une **charge calculée** : elle diminue le résultat **sans sortie d'argent**.

## II. La cession d'une immobilisation

### Étape 1 — Dotation complémentaire

On constate l'amortissement de l'exercice **jusqu'à la date de cession** (prorata temporis).

### Étape 2 — Sortie de l'immobilisation (annulation)

| Débit | Crédit | Montant |
|---|---|---|
| 28xx Amortissements (cumul) | | Cumul à la date de cession |
| 6513 VNA des immobilisations corporelles cédées | | VNA |
| | 23xx Immobilisation | VO |

### Étape 3 — Prix de cession

Si le prix n'a pas encore été enregistré (encaissement ou créance) :

| Débit | Crédit | Montant |
|---|---|---|
| 5141 Banques (ou 3481 Créances sur cessions d'immobilisations) | | Prix de cession |
| | 7513 Produits des cessions des immobilisations corporelles | Prix de cession |

### Le résultat de cession

$$\text{Résultat de cession} = \text{prix de cession} - VNA$$

- Positif : **plus-value** ; négatif : **moins-value**.
- Il figure dans le **résultat non courant** (7513 et 6513).

### Cas de la mise au rebut

Si le bien est détruit ou jeté sans prix : on passe seulement l'étape 2 ; la VNA est une perte (6513).
`,
    exercices: md`
### Exercice 1 — Cession (données fictives)

Un matériel de transport acquis le 1ᵉʳ janvier 2021 pour 300 000 DH HT, amorti en linéaire au taux de 20 %, est cédé le 30 septembre 2024 pour 110 000 DH par chèque (encaissement déjà enregistré au crédit du compte 7513). Clôture le 31/12.

1. Calculez la dotation 2024 et le cumul à la date de cession.
2. Calculez la VNA et le résultat de cession.
3. Passez les écritures nécessaires au 31/12/2024.

<details><summary>Voir le corrigé</summary>

1. Annuité $= 300\,000 \times 20\% = 60\,000$ DH. Dotation 2024 (9 mois) $= 60\,000 \times \frac{9}{12} = 45\,000$ DH.
   Cumul $= 60\,000 \times 3 + 45\,000 = 225\,000$ DH (2021, 2022, 2023 + 9 mois de 2024).
2. $VNA = 300\,000 - 225\,000 = 75\,000$ DH ; résultat $= 110\,000 - 75\,000 = +35\,000$ DH (**plus-value**).
3. Écritures :

| Compte débité | Compte crédité | Montant |
|---|---|---|
| 6193 D.E.A. des immobilisations corporelles | 2834 Amortissements du matériel de transport | 45 000 |
| 2834 Amortissements du matériel de transport | 2340 Matériel de transport | 225 000 |
| 6513 VNA des immobilisations corporelles cédées | 2340 Matériel de transport | 75 000 |

(La dernière écriture solde le compte 2340 : $225\,000 + 75\,000 = 300\,000$.)

</details>

### Exercice 2 — Mise au rebut

Un ordinateur de VO 24 000 DH, amorti à 80 %, est mis au rebut. Passez l'écriture de sortie et indiquez l'effet sur le résultat.

<details><summary>Voir le corrigé</summary>

Cumul $= 24\,000 \times 80\% = 19\,200$ DH ; $VNA = 4\,800$ DH.

| Compte débité | Compte crédité | Montant |
|---|---|---|
| 2835 Amortissements du mobilier, matériel de bureau… | 2355 Matériel informatique | 19 200 |
| 6513 VNA des immobilisations corporelles cédées | 2355 Matériel informatique | 4 800 |

Effet : une **charge non courante** de 4 800 DH (perte), sans produit.

</details>
`,
    resume: md`
## L'essentiel — Dotations et cessions

- **Dotation** : 619x (charge) / 28xx (amortissement). Corporelles : **6193** ; incorporelles : **6192** ; non-valeurs : **6191**.
- Amortissements : 2832 constructions, 2833 ITMO, 2834 matériel de transport, 2835 mobilier et matériel de bureau.
- **Cession** : 1) dotation complémentaire jusqu'à la cession ; 2) sortie : 28xx + **6513** / 23xx ; 3) prix : 5141 ou 3481 / **7513**.
- **Résultat de cession** = prix de cession − VNA (plus-value ou moins-value, **non courant**).
- **Rebut** : sortie seulement ; la VNA est une perte.
`,
    qcm: [
      { q: "La dotation aux amortissements d'un camion se passe au débit de :", choix: ["2834", "6193", "6513", "7513"], bonne: 1, explication: "6193 D.E.A. des immobilisations corporelles." },
      { q: "Le prix de cession d'une machine est crédité au compte :", choix: ["6513", "7513", "2833", "3481"], bonne: 1, explication: "7513 Produits des cessions des immobilisations corporelles." },
      { q: "Une machine de VNA 30 000 cédée 26 000 génère :", choix: ["Une plus-value de 4 000", "Une moins-value de 4 000", "Un résultat nul", "Une plus-value de 26 000"], bonne: 1, explication: "26 000 − 30 000 = −4 000." },
      { q: "Le résultat de cession figure dans le :", choix: ["Résultat d'exploitation", "Résultat financier", "Résultat non courant", "Bilan uniquement"], bonne: 2, explication: "Comptes 65 et 75." },
      { q: "Avant la sortie d'un bien cédé en cours d'année, il faut :", choix: ["Rien de particulier", "Passer une dotation complémentaire jusqu'à la date de cession", "Annuler toutes les dotations", "Constituer une provision"], bonne: 1, explication: "L'amortissement court jusqu'à la date de cession." },
    ],
  },

  "plans-et-tableaux-d-amortissement": {
    cours: md`
## Introduction

Le **plan d'amortissement** (ou **tableau d'amortissement**) présente, année par année, la répartition du coût d'une immobilisation. Il existe deux modes principaux : **linéaire** et **dégressif**.

## I. Le plan d'amortissement linéaire

| Année | Base | Annuité | Cumul | VNA fin d'exercice |
|---|---|---|---|---|
| … | VO | $VO \times t$ | Cumul précédent + annuité | VO − cumul |

La première et la dernière annuité sont calculées au **prorata temporis** si le bien n'est pas mis en service au début de l'exercice.

## II. L'amortissement dégressif

Il permet d'amortir **davantage les premières années** (pour les biens qui se déprécient vite ou deviennent vite obsolètes). Il est calculé sur la **VNA** du début de chaque exercice.

### 1. Le taux dégressif

$$t_{\text{dégressif}} = t_{\text{linéaire}} \times \text{coefficient}$$

**Coefficients fiscaux au Maroc** :

| Durée d'utilisation | Coefficient |
|---|---|
| 3 ou 4 ans | 1,5 |
| 5 ou 6 ans | 2 |
| Plus de 6 ans | 3 |

### 2. Le calcul

$$\text{Annuité}_k = VNA_{\text{début}} \times t_{\text{dégressif}}$$

La **première annuité** est calculée à partir du **premier jour du mois d'acquisition** : le mois d'acquisition compte entièrement.

### 3. Le passage au linéaire

Le taux dégressif s'appliquant à une valeur de plus en plus petite, on passe au **linéaire** lorsque le taux linéaire calculé sur les années restantes devient **supérieur ou égal** au taux dégressif :

$$t_{\text{linéaire restant}} = \frac{100}{\text{nombre d'années restantes}}$$

À partir de ce moment, on divise la VNA par le nombre d'années restantes : les dernières annuités sont **égales**.

## III. Comparaison

| | Linéaire | Dégressif |
|---|---|---|
| Base de calcul | VO (constante) | VNA (décroissante) |
| Annuités | Constantes | Décroissantes |
| Intérêt | Simple, régulier | Charges plus fortes au début → économie d'impôt au début |
| Point de départ | Date de mise en service | 1ᵉʳ jour du mois d'acquisition |
`,
    exercices: md`
### Exercice 1 — Plan linéaire (données fictives)

Matériel acquis le 1ᵉʳ octobre 2023 : VO 80 000 DH HT, durée 5 ans, linéaire. Établissez le plan d'amortissement.

<details><summary>Voir le corrigé</summary>

$t = 20\%$ ; annuité pleine $= 16\,000$ DH ; 2023 (3 mois) $= 16\,000 \times \frac{3}{12} = 4\,000$ DH.

| Année | Annuité | Cumul | VNA |
|---|---|---|---|
| 2023 | 4 000 | 4 000 | 76 000 |
| 2024 | 16 000 | 20 000 | 60 000 |
| 2025 | 16 000 | 36 000 | 44 000 |
| 2026 | 16 000 | 52 000 | 28 000 |
| 2027 | 16 000 | 68 000 | 12 000 |
| 2028 (9 mois) | 12 000 | 80 000 | 0 |

</details>

### Exercice 2 — Plan dégressif (données fictives)

Machine acquise le 1ᵉʳ janvier 2024 : VO 100 000 DH HT, durée 5 ans, amortissement dégressif.

1. Calculez le taux dégressif.
2. Établissez le plan d'amortissement.

<details><summary>Voir le corrigé</summary>

1. $t_{\text{linéaire}} = 20\%$ ; coefficient 2 (durée de 5 ans) ; $t_{\text{dégressif}} = 40\%$.
2. Plan :

| Année | VNA début | Taux appliqué | Annuité | Cumul | VNA fin |
|---|---|---|---|---|---|
| 2024 | 100 000 | 40 % | 40 000 | 40 000 | 60 000 |
| 2025 | 60 000 | 40 % | 24 000 | 64 000 | 36 000 |
| 2026 | 36 000 | 40 % (linéaire restant = 33,33 %) | 14 400 | 78 400 | 21 600 |
| 2027 | 21 600 | 50 % (linéaire sur 2 ans) | 10 800 | 89 200 | 10 800 |
| 2028 | 10 800 | 100 % | 10 800 | 100 000 | 0 |

En 2027, il reste 2 ans : $\frac{100}{2} = 50\% > 40\%$ → passage au linéaire.

</details>
`,
    resume: md`
## L'essentiel — Plans d'amortissement

- **Linéaire** : annuités constantes $= VO \times t$ ; prorata temporis depuis la **mise en service**.
- **Dégressif** : $t_d = t_l \times$ coefficient (**1,5** pour 3-4 ans ; **2** pour 5-6 ans ; **3** au-delà de 6 ans).
- Annuité dégressive $= VNA_{\text{début}} \times t_d$ ; départ au **1ᵉʳ jour du mois d'acquisition**.
- **Passage au linéaire** quand $\frac{100}{\text{années restantes}} \geq t_d$ ; dernières annuités égales.
- Plan : années, base, annuité, cumul, VNA.
`,
    qcm: [
      { q: "Pour une durée de 5 ans, le coefficient dégressif est :", choix: ["1,5", "2", "2,5", "3"], bonne: 1, explication: "5 ou 6 ans : coefficient 2." },
      { q: "En dégressif, l'annuité est calculée sur :", choix: ["La VO", "La VNA de début d'exercice", "Le cumul", "Le prix de vente"], bonne: 1, explication: "La base diminue chaque année." },
      { q: "Pour une durée de 10 ans, le taux dégressif est :", choix: ["10 %", "20 %", "30 %", "25 %"], bonne: 2, explication: "10 % × 3 = 30 %." },
      { q: "On passe au linéaire quand :", choix: ["La VNA est nulle", "Le taux linéaire sur les années restantes ≥ taux dégressif", "Après 2 ans", "Le bien est cédé"], bonne: 1, explication: "Pour amortir entièrement le bien à la fin de sa durée." },
      { q: "Un bien acquis le 15 mars en dégressif est amorti la 1re année sur :", choix: ["9,5 mois", "10 mois", "9 mois", "12 mois"], bonne: 1, explication: "Le mois d'acquisition compte entièrement : de mars à décembre = 10 mois." },
    ],
  },

  "provisions-pour-depreciation-des-creances-clients": {
    cours: md`
## Introduction

Certains clients risquent de ne pas payer leurs dettes (difficultés financières, litige, faillite). Par **prudence**, l'entreprise doit constater cette perte **probable** par une **provision pour dépréciation**.

## I. Les étapes

### 1. Le reclassement des créances douteuses

Une créance dont le recouvrement devient incertain est **transférée** du compte 3421 au compte **3424 Clients douteux ou litigieux**, pour son montant **TTC** :

| Compte débité | Compte crédité | Montant |
|---|---|---|
| 3424 Clients douteux ou litigieux | 3421 Clients | Créance TTC |

### 2. La constitution de la provision

La provision est calculée sur le montant **hors taxes** (la TVA pourra être récupérée en cas de perte définitive) :

$$\text{Provision} = \text{créance HT} \times \text{pourcentage de perte probable}$$

| Compte débité | Compte crédité |
|---|---|
| 6196 D.E. aux provisions pour dépréciation de l'actif circulant | 3942 Provisions pour dépréciation des clients et comptes rattachés |

## II. L'ajustement de la provision (exercices suivants)

À chaque clôture, on compare la **provision nécessaire** à la **provision existante** :

| Situation | Écriture |
|---|---|
| Provision nécessaire > existante | **Dotation** complémentaire : 6196 / 3942 |
| Provision nécessaire < existante | **Reprise** : 3942 / 7196 Reprises sur provisions pour dépréciation de l'actif circulant |

## III. Les règlements et les pertes définitives

### 1. Règlement (partiel ou total)

| Compte débité | Compte crédité |
|---|---|
| 5141 Banques (ou 5161 Caisse) | 3424 Clients douteux ou litigieux |

### 2. Créance irrécouvrable (perte définitive)

Le solde non recouvrable est une **perte** :

| Compte débité | Compte crédité | Montant |
|---|---|---|
| 6182 Pertes sur créances irrécouvrables | | Montant HT |
| 4455 État, TVA facturée | | TVA correspondante |
| | 3424 Clients douteux ou litigieux | Montant TTC |

Puis la provision devenue **sans objet** est reprise :

| Compte débité | Compte crédité |
|---|---|
| 3942 Provisions pour dépréciation des clients… | 7196 Reprises sur provisions pour dépréciation de l'actif circulant |

## IV. L'état des créances douteuses

On présente les calculs dans un tableau :

| Client | Créance TTC | Créance HT | Règlements | Reste HT | % perte | Provision nécessaire | Provision existante | Dotation | Reprise |
|---|---|---|---|---|---|---|---|---|---|

$$\text{Créance HT} = \frac{\text{créance TTC}}{1{,}2} \quad (\text{TVA à } 20\%)$$
`,
    exercices: md`
### Exercice 1 — Constitution (données fictives, TVA 20 %)

Au 31/12/2023, le client Salmi doit 36 000 DH TTC ; il est en difficulté. On estime la perte probable à 40 %.

1. Passez l'écriture de reclassement.
2. Calculez la provision et passez l'écriture.

<details><summary>Voir le corrigé</summary>

1. Reclassement :

| Compte débité | Compte crédité | Montant |
|---|---|---|
| 3424 Clients douteux ou litigieux | 3421 Clients | 36 000 |

2. Créance HT $= \frac{36\,000}{1{,}2} = 30\,000$ DH ; provision $= 30\,000 \times 40\% = 12\,000$ DH.

| Compte débité | Compte crédité | Montant |
|---|---|---|
| 6196 D.E. aux provisions pour dépréciation de l'actif circulant | 3942 Provisions pour dépréciation des clients… | 12 000 |

</details>

### Exercice 2 — Ajustement et perte définitive (suite)

En 2024, le client Salmi verse 12 000 DH (déjà enregistrés au crédit du compte 3424). Au 31/12/2024 :
- cas A : on estime la perte probable à 60 % de la créance restante ;
- cas B : le client est déclaré insolvable (le reste est irrécouvrable).

Traitez les deux cas.

<details><summary>Voir le corrigé</summary>

Reste TTC $= 36\,000 - 12\,000 = 24\,000$ DH ; reste HT $= 20\,000$ DH ; provision existante $= 12\,000$ DH.

**Cas A** : provision nécessaire $= 20\,000 \times 60\% = 12\,000$ DH = existante → **aucune écriture**.

**Cas B** : perte définitive :

| Compte débité | Compte crédité | Montant |
|---|---|---|
| 6182 Pertes sur créances irrécouvrables | | 20 000 |
| 4455 État, TVA facturée | | 4 000 |
| | 3424 Clients douteux ou litigieux | 24 000 |
| 3942 Provisions pour dépréciation des clients… | 7196 Reprises sur provisions pour dépréciation de l'actif circulant | 12 000 |

</details>
`,
    resume: md`
## L'essentiel — Provisions clients

- **Reclassement** (TTC) : 3424 / 3421.
- **Provision** (sur le **HT**) : 6196 / 3942 ; créance HT $= \frac{TTC}{1{,}2}$.
- **Ajustement** : nécessaire > existante → dotation 6196 / 3942 ; nécessaire < existante → reprise 3942 / **7196**.
- **Règlement** : 5141 / 3424.
- **Perte définitive** : 6182 (HT) + 4455 (TVA) / 3424 (TTC), puis reprise de la provision 3942 / 7196.
`,
    qcm: [
      { q: "La provision pour dépréciation des clients est calculée sur :", choix: ["La créance TTC", "La créance HT", "La TVA", "Le chiffre d'affaires"], bonne: 1, explication: "La TVA est récupérable en cas de perte définitive." },
      { q: "Le compte de provision pour dépréciation des clients est :", choix: ["3424", "3942", "6196", "7196"], bonne: 1, explication: "3942 Provisions pour dépréciation des clients et comptes rattachés." },
      { q: "Si la provision nécessaire est inférieure à la provision existante, on passe :", choix: ["Une dotation", "Une reprise", "Une perte", "Rien"], bonne: 1, explication: "3942 à 7196 pour la différence." },
      { q: "Une créance irrécouvrable HT est débitée au compte :", choix: ["6196", "6182", "3424", "4455"], bonne: 1, explication: "6182 Pertes sur créances irrécouvrables." },
      { q: "Une créance de 48 000 TTC (TVA 20 %) avec 25 % de perte donne une provision de :", choix: ["12 000", "10 000", "9 600", "8 000"], bonne: 1, explication: "48 000 / 1,2 = 40 000 ; 40 000 × 25 % = 10 000." },
    ],
  },

  "provisions-des-titres-tp-et-tvp": {
    cours: md`
## Introduction

Les entreprises détiennent des **titres** (actions, obligations) soit pour exercer une influence durable (**titres de participation**), soit pour réaliser un placement à court terme (**titres et valeurs de placement**). Si leur valeur baisse, le principe de **prudence** impose de constater une **provision**.

## I. Les deux catégories de titres

| | Titres de participation (TP) | Titres et valeurs de placement (TVP) |
|---|---|---|
| Objectif | Influence ou contrôle durable sur une autre société | Placement, gain à court terme |
| Compte | **2510** Titres de participation | **350x** Titres et valeurs de placement |
| Classement au bilan | Actif immobilisé (immobilisations financières) | Actif circulant |
| Valeur d'inventaire | **Valeur d'usage** (utilité pour l'entreprise) | **Cours moyen du dernier mois** (titres cotés) |

## II. Le principe de la provision

À l'inventaire, on compare pour **chaque catégorie de titres** :

- la **valeur d'entrée** (coût d'acquisition) ;
- la **valeur d'inventaire** (valeur actuelle).

$$\text{Provision nécessaire} = \text{valeur d'entrée} - \text{valeur d'inventaire} \quad (\text{si négative : moins-value latente})$$

- **Moins-value latente** → provision ;
- **Plus-value latente** → **non comptabilisée** (prudence), et **pas de compensation** entre plus-values et moins-values de titres différents.

## III. Les écritures

### Titres de participation

| Opération | Débit | Crédit |
|---|---|---|
| Dotation | 6392 Dotations aux provisions pour dépréciation des immobilisations financières | 2951 Provisions pour dépréciation des titres de participation |
| Reprise | 2951 | 7392 Reprises sur provisions pour dépréciation des immobilisations financières |

### Titres et valeurs de placement

| Opération | Débit | Crédit |
|---|---|---|
| Dotation | 6394 Dotations aux provisions pour dépréciation des TVP | 3950 Provisions pour dépréciation des TVP |
| Reprise | 3950 | 7394 Reprises sur provisions pour dépréciation des TVP |

## IV. L'ajustement

Chaque année : provision nécessaire − provision existante :

- positive → **dotation** complémentaire ;
- négative → **reprise**.

## V. La cession des titres

### Cession de TVP

Le résultat de cession est enregistré en produits ou charges **financiers** :

| Cas | Débit | Crédit |
|---|---|---|
| Plus-value | 5141 (prix de cession) | 350x (prix d'achat) + **7385** Produits nets sur cessions de TVP |
| Moins-value | 5141 (prix) + **6385** Charges nettes sur cessions de TVP | 350x (prix d'achat) |

Puis on **reprend** la provision éventuellement constituée sur les titres cédés : 3950 / 7394.

### Cession de TP

Elle suit la logique des immobilisations : **7514** Produits des cessions des immobilisations financières et **6514** VNA des immobilisations financières cédées ; la provision sur les titres cédés est reprise (2951 / 7392).
`,
    exercices: md`
### Exercice 1 — Provision sur TVP (données fictives)

Au 31/12/2024, l'entreprise détient :

| Titre | Nombre | Prix d'achat unitaire | Cours moyen de décembre |
|---|---|---|---|
| Actions A | 200 | 450 | 400 |
| Actions B | 100 | 300 | 340 |

1. Calculez la provision nécessaire.
2. Passez l'écriture.

<details><summary>Voir le corrigé</summary>

1. A : $200 \times (450 - 400) = 10\,000$ DH de **moins-value** → provision de 10 000 DH.
   B : $100 \times (340 - 300) = 4\,000$ DH de **plus-value** → non comptabilisée, pas de compensation.
   Provision nécessaire $= 10\,000$ DH.
2. Écriture :

| Compte débité | Compte crédité | Montant |
|---|---|---|
| 6394 Dotations aux provisions pour dépréciation des TVP | 3950 Provisions pour dépréciation des TVP | 10 000 |

</details>

### Exercice 2 — Cession de TVP (suite)

En mars 2025, les 200 actions A sont vendues à 420 DH l'unité, par banque (frais négligés).

1. Calculez le résultat de cession.
2. Passez les écritures de cession et de reprise de la provision.

<details><summary>Voir le corrigé</summary>

1. Prix de cession $= 200 \times 420 = 84\,000$ DH ; prix d'achat $= 90\,000$ DH ; **moins-value** $= 6\,000$ DH.
2. Écritures :

| Compte débité | Compte crédité | Montant |
|---|---|---|
| 5141 Banques | | 84 000 |
| 6385 Charges nettes sur cessions de TVP | | 6 000 |
| | 3500 Titres et valeurs de placement | 90 000 |
| 3950 Provisions pour dépréciation des TVP | 7394 Reprises sur provisions pour dépréciation des TVP | 10 000 |

</details>

### Exercice 3 — Titres de participation

L'entreprise détient 1 000 TP acquis à 150 DH. Leur valeur d'usage est de 130 DH en 2024 (provision constituée) et de 140 DH en 2025. Calculez et enregistrez l'ajustement en 2025.

<details><summary>Voir le corrigé</summary>

Provision 2024 $= 1\,000 \times (150 - 130) = 20\,000$ DH. Provision nécessaire 2025 $= 1\,000 \times (150 - 140) = 10\,000$ DH. **Reprise** de 10 000 DH :

| Compte débité | Compte crédité | Montant |
|---|---|---|
| 2951 Provisions pour dépréciation des TP | 7392 Reprises sur provisions pour dépréciation des immobilisations financières | 10 000 |

</details>
`,
    resume: md`
## L'essentiel — Provisions sur titres

- **TP (2510)** : influence durable ; actif immobilisé ; valeur d'**usage**.
- **TVP (350x)** : placement ; actif circulant ; **cours moyen du dernier mois**.
- Provision = valeur d'entrée − valeur d'inventaire (si moins-value) ; **plus-values latentes non constatées**, **pas de compensation**.
- **TP** : dotation 6392 / 2951 ; reprise 2951 / 7392.
- **TVP** : dotation 6394 / 3950 ; reprise 3950 / 7394.
- **Cession de TVP** : plus-value → **7385** ; moins-value → **6385** ; puis reprise de la provision.
- **Cession de TP** : 7514 et 6514.
`,
    qcm: [
      { q: "Les TVP sont évalués à l'inventaire au :", choix: ["Prix d'achat", "Cours moyen du dernier mois", "Nominal", "Cours le plus haut de l'année"], bonne: 1, explication: "Pour les titres cotés." },
      { q: "Une plus-value latente sur titres est :", choix: ["Comptabilisée en produit", "Non comptabilisée", "Compensée avec les moins-values", "Portée en capitaux propres"], bonne: 1, explication: "Principe de prudence." },
      { q: "La dotation aux provisions sur TVP se passe au débit du compte :", choix: ["6392", "6394", "6196", "3950"], bonne: 1, explication: "6394 Dotations aux provisions pour dépréciation des TVP." },
      { q: "Le compte 2951 correspond à :", choix: ["Titres de participation", "Provisions pour dépréciation des titres de participation", "TVP", "Provisions clients"], bonne: 1, explication: "Provision sur immobilisations financières." },
      { q: "Une moins-value de cession de TVP est enregistrée au compte :", choix: ["6385", "7385", "6514", "6182"], bonne: 0, explication: "6385 Charges nettes sur cessions de TVP." },
    ],
  },
};
