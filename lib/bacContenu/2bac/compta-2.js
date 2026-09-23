// Comptabilité & Mathématiques financières — 2ème Bac (chapitres 8 à 12).
// Comptes : CGNC (Maroc).
const md = String.raw;

export default {
  "provisions-pour-depreciation-des-stocks": {
    cours: md`
## Introduction

À l'inventaire, certains articles en stock peuvent valoir **moins** que leur coût d'achat ou de production : produits abîmés, démodés, périmés, baisse des prix du marché. Par **prudence**, on constate une **provision pour dépréciation des stocks**.

## I. Le principe

On compare, pour chaque catégorie de stock :

- la **valeur d'entrée** (coût d'achat ou coût de production) ;
- la **valeur actuelle** (valeur probable de réalisation, prix du marché).

$$\text{Provision} = \text{valeur d'entrée} - \text{valeur actuelle} \quad (\text{si valeur actuelle} < \text{valeur d'entrée})$$

Comme pour les titres, les **plus-values latentes** ne sont pas constatées.

## II. Les comptes

| Stock | Compte de stock | Compte de provision |
|---|---|---|
| Marchandises | 3111 | **3911** Provisions pour dépréciation des marchandises |
| Matières et fournitures | 3121, 3122 | **3912** Provisions pour dépréciation des matières et fournitures |
| Produits en cours | 3131 | **3913** Provisions pour dépréciation des produits en cours |
| Produits finis | 3151 | **3915** Provisions pour dépréciation des produits finis |

## III. Les écritures

### Dotation

| Compte débité | Compte crédité |
|---|---|
| 6196 D.E. aux provisions pour dépréciation de l'actif circulant | 391x Provisions pour dépréciation des stocks |

### Ajustement l'année suivante

Le stock se renouvelle : la provision de l'année précédente porte sur un stock qui a été vendu ou consommé. Deux méthodes sont admises :

1. **Annulation et reconstitution** : reprise de la totalité de l'ancienne provision puis dotation de la nouvelle ;
2. **Ajustement** : on ne passe que la différence (dotation complémentaire ou reprise).

| Opération | Débit | Crédit |
|---|---|---|
| Reprise | 391x | **7196** Reprises sur provisions pour dépréciation de l'actif circulant |

## IV. Au bilan

Le stock apparaît pour sa **valeur brute**, diminuée des **provisions**, pour donner la **valeur nette**.
`,
    exercices: md`
### Exercice 1 — Constitution (données fictives)

Au 31/12/2024, l'inventaire du stock de marchandises (coût d'achat 250 000 DH) révèle que des articles achetés 40 000 DH ne valent plus que 25 000 DH sur le marché.

1. Calculez la provision.
2. Passez l'écriture et donnez la valeur nette du stock au bilan.

<details><summary>Voir le corrigé</summary>

1. Provision $= 40\,000 - 25\,000 = 15\,000$ DH.
2. Écriture :

| Compte débité | Compte crédité | Montant |
|---|---|---|
| 6196 D.E. aux provisions pour dépréciation de l'actif circulant | 3911 Provisions pour dépréciation des marchandises | 15 000 |

Bilan : brut 250 000 ; provisions 15 000 ; **net 235 000 DH**.

</details>

### Exercice 2 — Ajustement (suite)

Au 31/12/2025, la provision nécessaire sur les marchandises est de 9 000 DH. Passez l'écriture selon la méthode de l'ajustement, puis selon la méthode de l'annulation-reconstitution.

<details><summary>Voir le corrigé</summary>

**Ajustement** : $9\,000 - 15\,000 = -6\,000$ → reprise de 6 000 DH :

| Compte débité | Compte crédité | Montant |
|---|---|---|
| 3911 Provisions pour dépréciation des marchandises | 7196 Reprises sur provisions pour dépréciation de l'actif circulant | 6 000 |

**Annulation-reconstitution** :

| Compte débité | Compte crédité | Montant |
|---|---|---|
| 3911 | 7196 | 15 000 |
| 6196 | 3911 | 9 000 |

L'effet net sur le résultat est le même : +6 000 DH.

</details>
`,
    resume: md`
## L'essentiel — Provisions sur stocks

- Provision = valeur d'entrée − valeur actuelle (si baisse) ; pas de plus-value latente.
- Comptes : **3911** marchandises, **3912** matières, **3913** en cours, **3915** produits finis.
- **Dotation** : 6196 / 391x ; **reprise** : 391x / 7196.
- Ajustement ou annulation-reconstitution (même effet net).
- Bilan : brut − provisions = net.
`,
    qcm: [
      { q: "La provision sur marchandises est enregistrée au crédit du compte :", choix: ["3111", "3911", "6196", "7196"], bonne: 1, explication: "3911 Provisions pour dépréciation des marchandises." },
      { q: "Une provision sur stocks est constatée quand :", choix: ["La valeur actuelle > valeur d'entrée", "La valeur actuelle < valeur d'entrée", "Le stock augmente", "Le stock est vendu"], bonne: 1, explication: "Il y a moins-value probable." },
      { q: "La reprise sur provision pour stocks se passe au crédit de :", choix: ["7196", "7394", "7392", "7195"], bonne: 0, explication: "Les stocks font partie de l'actif circulant." },
      { q: "Stock brut 180 000, provision 12 000 : valeur nette =", choix: ["192 000", "168 000", "180 000", "12 000"], bonne: 1, explication: "180 000 − 12 000." },
      { q: "Le compte 3915 concerne :", choix: ["Les marchandises", "Les produits finis", "Les matières premières", "Les titres"], bonne: 1, explication: "Provisions pour dépréciation des produits finis." },
    ],
  },

  "provisions-pour-risques-et-charges": {
    cours: md`
## Introduction

À la clôture, l'entreprise peut être exposée à des **risques** ou à des **charges probables** qui ne sont pas encore réalisés : un procès, une amende, des garanties à accorder aux clients. Par prudence, elle constitue une **provision pour risques et charges**, inscrite au **passif**.

## I. Définition

> Une **provision pour risques et charges** est un passif dont le **montant** ou l'**échéance** ne sont pas fixés de façon précise, mais dont la **réalisation est probable** en raison d'événements survenus ou en cours.

**Exemples** : litige avec un client, un fournisseur ou un salarié ; amendes et pénalités ; garanties données aux clients (service après-vente) ; pertes de change.

## II. Le classement au bilan

| Provision | Échéance | Classement au bilan | Comptes |
|---|---|---|---|
| **Durable** | Plus d'un an | **Financement permanent** | 151x : 1511 Provisions pour litiges, 1512 pour garanties données aux clients, 1515 pour amendes, doubles droits et pénalités, 1516 pour pertes de change, 1518 autres provisions pour risques |
| **Non durable** | Moins d'un an | **Passif circulant** | 450x : 4501 Provisions pour litiges, 4506 pour pertes de change… |

## III. Les écritures

### Dotation

| Nature du risque | Compte débité | Compte crédité |
|---|---|---|
| Lié à l'exploitation (litige commercial, garanties) | **6195** D.E. aux provisions pour risques et charges | 151x ou 450x |
| Lié à des opérations financières | **6393** Dotations aux provisions pour risques et charges financières | 151x ou 450x |
| Non courant (amende fiscale, litige exceptionnel) | **6595** D.N.C. aux provisions pour risques et charges | 151x ou 450x |

### Reprise

Quand le risque disparaît ou se réalise :

| Compte débité | Compte crédité |
|---|---|
| 151x ou 450x | **7195** / **7393** / **7595** Reprises correspondantes |

### Réalisation du risque

La charge réelle est enregistrée dans son compte (par exemple une amende payée), puis la provision devenue sans objet est **reprise**.

## IV. L'ajustement

Chaque année, on compare la provision nécessaire à la provision existante : **dotation** complémentaire si elle augmente, **reprise** si elle diminue.
`,
    exercices: md`
### Exercice 1 — Litige commercial (données fictives)

Au 31/12/2024, un client a assigné l'entreprise en justice pour livraison défectueuse. L'avocat estime la condamnation probable à 60 000 DH ; le jugement est attendu dans 8 mois.

1. De quel type de provision s'agit-il et où est-elle classée ?
2. Passez l'écriture.

<details><summary>Voir le corrigé</summary>

1. Provision pour **risque d'exploitation** (litige commercial), **non durable** (moins d'un an) → **passif circulant**.
2. Écriture :

| Compte débité | Compte crédité | Montant |
|---|---|---|
| 6195 D.E. aux provisions pour risques et charges | 4501 Provisions pour litiges | 60 000 |

</details>

### Exercice 2 — Réalisation (suite)

En 2025, l'entreprise est condamnée à verser 45 000 DH au client, payés par chèque (paiement enregistré en charge). Passez l'écriture relative à la provision.

<details><summary>Voir le corrigé</summary>

Le risque s'est réalisé : la provision de 60 000 DH devient sans objet et doit être reprise en totalité :

| Compte débité | Compte crédité | Montant |
|---|---|---|
| 4501 Provisions pour litiges | 7195 Reprises sur provisions pour risques et charges | 60 000 |

Effet net sur 2025 : charge de 45 000 − reprise de 60 000 = **+15 000 DH** sur le résultat.

</details>

### Exercice 3 — Amende fiscale

Un contrôle fiscal en cours laisse prévoir une pénalité de 20 000 DH dont le paiement interviendra dans plus d'un an. Passez l'écriture.

<details><summary>Voir le corrigé</summary>

Risque **non courant** et **durable** :

| Compte débité | Compte crédité | Montant |
|---|---|---|
| 6595 D.N.C. aux provisions pour risques et charges | 1515 Provisions pour amendes, doubles droits et pénalités | 20 000 |

</details>
`,
    resume: md`
## L'essentiel — Provisions pour risques et charges

- Passif probable, montant ou échéance incertains (litiges, amendes, garanties, pertes de change).
- **Durable** (> 1 an) → **151x** (financement permanent) ; **non durable** (< 1 an) → **450x** (passif circulant).
- **Dotation** : 6195 (exploitation), 6393 (financière), 6595 (non courante).
- **Reprise** : 7195, 7393, 7595.
- Risque réalisé : charge réelle enregistrée + reprise de la provision.
`,
    qcm: [
      { q: "Une provision pour litige de moins d'un an est classée :", choix: ["Au financement permanent", "Au passif circulant", "À l'actif circulant", "Aux immobilisations"], bonne: 1, explication: "Compte 4501." },
      { q: "Le compte 1515 correspond aux provisions pour :", choix: ["Litiges", "Amendes, doubles droits et pénalités", "Garanties", "Pertes de change"], bonne: 1, explication: "Provisions pour amendes, doubles droits, pénalités." },
      { q: "La dotation pour un litige commercial est débitée au compte :", choix: ["6195", "6196", "6182", "6595"], bonne: 0, explication: "Risque lié à l'exploitation." },
      { q: "Quand le risque disparaît, on passe :", choix: ["Une dotation", "Une reprise", "Une perte", "Un amortissement"], bonne: 1, explication: "La provision devient sans objet." },
      { q: "Les provisions pour risques et charges figurent :", choix: ["À l'actif", "Au passif", "Hors bilan", "Dans les stocks"], bonne: 1, explication: "Ce sont des dettes probables." },
    ],
  },

  "provisions-des-immobilisations-non-amortissables": {
    cours: md`
## Introduction

Certaines immobilisations ne perdent pas de valeur avec l'usage : les **terrains** et le **fonds commercial**. Elles ne sont donc **pas amortissables**. Mais leur valeur peut **baisser** pour des raisons particulières : c'est une dépréciation **réversible**, constatée par une **provision**.

## I. Les causes de dépréciation

- **Terrain** : changement du plan d'aménagement (zone devenue non constructible), pollution, expropriation partielle, baisse du marché immobilier local ;
- **Fonds commercial** : perte de clientèle, déplacement du centre d'activité, concurrence nouvelle.

## II. Le calcul

$$\text{Provision} = \text{valeur d'entrée} - \text{valeur actuelle}$$

Seules les **moins-values** sont constatées.

## III. Les comptes et les écritures

| Immobilisation | Compte | Provision |
|---|---|---|
| Fonds commercial | 2230 | **2920** Provisions pour dépréciation des immobilisations incorporelles |
| Terrains | 231x | **2930** Provisions pour dépréciation des immobilisations corporelles |

### Dotation

| Compte débité | Compte crédité |
|---|---|
| **6194** D.E. aux provisions pour dépréciation des immobilisations | 2920 ou 2930 |

Si la dépréciation a un caractère **exceptionnel**, on utilise le compte **6596** D.N.C. aux provisions pour dépréciation (et la reprise en **7596**).

### Reprise

| Compte débité | Compte crédité |
|---|---|
| 2920 ou 2930 | **7194** Reprises sur provisions pour dépréciation des immobilisations |

### Cession d'une immobilisation provisionnée

1. Sortie : **6513** VNA des immobilisations corporelles cédées (ou **6511** pour les incorporelles) / 231x ou 2230, pour la valeur d'entrée ;
2. Prix de cession : 5141 ou 3481 / **7513** (ou **7511** pour les incorporelles) ;
3. **Reprise** de la provision devenue sans objet : 2920 ou 2930 / 7194.

## IV. Distinction amortissement / provision

| | Amortissement | Provision pour dépréciation |
|---|---|---|
| Nature | Dépréciation **irréversible** | Dépréciation **probable et réversible** |
| Biens | Immobilisations amortissables | Terrains, fonds commercial, titres, stocks, créances |
| Reprise | Non (sauf cession) | Oui, si la dépréciation diminue |
`,
    exercices: md`
### Exercice 1 — Terrain (données fictives)

Un terrain acheté 900 000 DH est estimé à 780 000 DH au 31/12/2024 après modification du plan d'aménagement. Au 31/12/2025, il est estimé à 840 000 DH.

1. Passez l'écriture au 31/12/2024.
2. Passez l'écriture d'ajustement au 31/12/2025.

<details><summary>Voir le corrigé</summary>

1. Provision $= 900\,000 - 780\,000 = 120\,000$ DH :

| Compte débité | Compte crédité | Montant |
|---|---|---|
| 6194 D.E. aux provisions pour dépréciation des immobilisations | 2930 Provisions pour dépréciation des immobilisations corporelles | 120 000 |

2. Provision nécessaire $= 900\,000 - 840\,000 = 60\,000$ DH ; reprise $= 120\,000 - 60\,000 = 60\,000$ DH :

| Compte débité | Compte crédité | Montant |
|---|---|---|
| 2930 | 7194 Reprises sur provisions pour dépréciation des immobilisations | 60 000 |

</details>

### Exercice 2 — Fonds commercial

Un fonds commercial acquis 500 000 DH est estimé à 430 000 DH à la suite de la perte d'un client important. Passez l'écriture et donnez sa valeur nette au bilan.

<details><summary>Voir le corrigé</summary>

| Compte débité | Compte crédité | Montant |
|---|---|---|
| 6194 D.E. aux provisions pour dépréciation des immobilisations | 2920 Provisions pour dépréciation des immobilisations incorporelles | 70 000 |

Bilan : brut 500 000 ; provision 70 000 ; **net 430 000 DH**.

</details>
`,
    resume: md`
## L'essentiel — Provisions sur terrains et fonds commercial

- Terrains et fonds commercial : **non amortissables** ; dépréciation réversible → **provision**.
- Provision = valeur d'entrée − valeur actuelle (moins-value seulement).
- **Dotation** : **6194** / **2930** (terrains) ou **2920** (fonds commercial) ; exceptionnelle : 6596.
- **Reprise** : 2930 ou 2920 / **7194** (exceptionnelle : 7596).
- Cession : sortie (6513 ou 6511), prix (7513 ou 7511), reprise de la provision.
`,
    qcm: [
      { q: "Le fonds commercial est :", choix: ["Amortissable", "Non amortissable mais provisionnable", "Un stock", "Une dette"], bonne: 1, explication: "Il ne s'use pas mais peut perdre de la valeur." },
      { q: "La provision sur un terrain est créditée au compte :", choix: ["2930", "2920", "2834", "3911"], bonne: 0, explication: "Provisions pour dépréciation des immobilisations corporelles." },
      { q: "La dotation se passe normalement au compte :", choix: ["6193", "6194", "6196", "6392"], bonne: 1, explication: "D.E. aux provisions pour dépréciation des immobilisations." },
      { q: "La reprise se passe au crédit du compte :", choix: ["7193", "7194", "7196", "7392"], bonne: 1, explication: "Reprises sur provisions pour dépréciation des immobilisations." },
      { q: "Une différence essentielle entre amortissement et provision est que :", choix: ["La provision est irréversible", "L'amortissement constate une dépréciation irréversible", "Les deux sont identiques", "L'amortissement concerne les terrains"], bonne: 1, explication: "La provision est réversible (reprise possible)." },
    ],
  },

  "la-regularisation-des-charges-et-produits": {
    cours: md`
## Introduction

Selon le principe de **spécialisation des exercices**, chaque exercice doit supporter **toutes ses charges** et **seulement ses charges**, et de même pour les produits. Or certaines opérations sont enregistrées sur un exercice alors qu'elles concernent l'autre. Il faut les **régulariser**.

## I. Les charges et produits constatés d'avance

Ils ont été **enregistrés** en N mais concernent (en partie) l'exercice **N+1** : il faut les **retirer** de N.

### Charges constatées d'avance (CCA)

Exemple : loyer, assurance, abonnement payés d'avance.

| Compte débité | Compte crédité |
|---|---|
| **3491** Charges constatées d'avance | 61xx Compte de charge concerné (montant **HT**) |

### Produits constatés d'avance (PCA)

Exemple : loyer perçu d'avance, abonnement vendu couvrant l'exercice suivant.

| Compte débité | Compte crédité |
|---|---|
| 71xx Compte de produit concerné (HT) | **4491** Produits constatés d'avance |

## II. Les charges à payer et les produits à recevoir

Ils concernent l'exercice **N** mais n'ont **pas encore été enregistrés** (la facture ou le paiement n'est pas encore arrivé) : il faut les **ajouter** à N.

### Charges à payer

| Situation | Débit | Crédit |
|---|---|---|
| Facture fournisseur non parvenue | 61xx (HT) + **34552** État, TVA récupérable sur charges | **4417** Fournisseurs – factures non parvenues (TTC) |
| Avoir à accorder à un client | 7119 RRR accordés (HT) + 4455 | **4427** RRR à accorder – avoirs à établir |
| Intérêts courus sur emprunt | 6311 Intérêts des emprunts et dettes | **4493** Intérêts courus et non échus à payer |
| Salaires, primes à payer | 617x Charges de personnel | **4437** Charges du personnel à payer |
| Impôts et taxes à payer | 616x Impôts et taxes | **4457** État, impôts et taxes à payer |

### Produits à recevoir

| Situation | Débit | Crédit |
|---|---|---|
| Facture client à établir | **3427** Clients – factures à établir (TTC) | 711x ou 712x (HT) + 4455 État, TVA facturée |
| Avoir à obtenir d'un fournisseur | **3417** RRR à obtenir – avoirs non encore reçus | 6119 RRR obtenus (HT) + 34552 |
| Intérêts courus sur prêts ou placements | **3493** Intérêts courus et non échus à percevoir | 7381 Intérêts et produits assimilés |

## III. La contre-passation (extourne)

Au **début de l'exercice N+1**, les écritures de régularisation sont **contre-passées** (écriture inverse), pour que les opérations soient enregistrées normalement quand la facture ou le paiement arrive.

## IV. Méthode de calcul

$$\text{Part de N+1} = \text{montant} \times \frac{\text{nombre de mois concernant N+1}}{\text{nombre total de mois}}$$

Les CCA et PCA sont toujours calculés **hors taxes**.
`,
    exercices: md`
### Exercice 1 — Charges constatées d'avance (données fictives)

Le 1ᵉʳ octobre 2024, l'entreprise a payé une prime d'assurance annuelle de 24 000 DH (enregistrée au compte 6134 Primes d'assurances).

1. Calculez la part concernant 2025.
2. Passez l'écriture au 31/12/2024 et la contre-passation au 01/01/2025.

<details><summary>Voir le corrigé</summary>

1. Du 1ᵉʳ janvier au 30 septembre 2025 : 9 mois ; $24\,000 \times \frac{9}{12} = 18\,000$ DH.
2. Écritures :

| Date | Compte débité | Compte crédité | Montant |
|---|---|---|---|
| 31/12/2024 | 3491 Charges constatées d'avance | 6134 Primes d'assurances | 18 000 |
| 01/01/2025 | 6134 Primes d'assurances | 3491 Charges constatées d'avance | 18 000 |

</details>

### Exercice 2 — Charges à payer et produits à recevoir (TVA 20 %)

Au 31/12/2024 :
a) Une facture d'entretien de décembre de 5 000 DH HT n'est pas encore reçue ;
b) Des marchandises livrées à un client le 28/12 pour 30 000 DH HT ne sont pas encore facturées ;
c) Un emprunt de 400 000 DH au taux de 6 %, contracté le 1ᵉʳ septembre 2024, verse ses intérêts annuellement le 1ᵉʳ septembre.

Passez les écritures de régularisation.

<details><summary>Voir le corrigé</summary>

a) Charge à payer (entretien, compte 6133) :

| Compte débité | Compte crédité | Montant |
|---|---|---|
| 6133 Entretien et réparations | | 5 000 |
| 34552 État, TVA récupérable sur charges | | 1 000 |
| | 4417 Fournisseurs – factures non parvenues | 6 000 |

b) Produit à recevoir :

| Compte débité | Compte crédité | Montant |
|---|---|---|
| 3427 Clients – factures à établir | | 36 000 |
| | 7111 Ventes de marchandises au Maroc | 30 000 |
| | 4455 État, TVA facturée | 6 000 |

c) Intérêts courus de septembre à décembre (4 mois) : $400\,000 \times 6\% \times \frac{4}{12} = 8\,000$ DH :

| Compte débité | Compte crédité | Montant |
|---|---|---|
| 6311 Intérêts des emprunts et dettes | 4493 Intérêts courus et non échus à payer | 8 000 |

</details>
`,
    resume: md`
## L'essentiel — Régularisation des charges et produits

- **Spécialisation des exercices** : chaque exercice supporte ses charges et produits.
- **CCA** : 3491 / 61xx (HT) ; **PCA** : 71xx / 4491 (HT).
- **Charges à payer** : 61xx + 34552 / **4417** (FNP) ; intérêts courus 6311 / **4493** ; personnel / **4437** ; impôts / **4457** ; avoirs à accorder / **4427**.
- **Produits à recevoir** : **3427** / 71xx + 4455 ; avoirs à obtenir **3417** ; intérêts courus **3493** / 7381.
- **Contre-passation** au début de N+1.
- Part de N+1 $=$ montant $\times \frac{\text{mois de N+1}}{\text{mois total}}$.
`,
    qcm: [
      { q: "Un loyer de janvier N+1 payé en décembre N est :", choix: ["Une charge à payer", "Une charge constatée d'avance", "Un produit à recevoir", "Un produit constaté d'avance"], bonne: 1, explication: "Il a été enregistré en N mais concerne N+1." },
      { q: "Le compte 4417 correspond à :", choix: ["Clients – factures à établir", "Fournisseurs – factures non parvenues", "Charges constatées d'avance", "Intérêts courus à payer"], bonne: 1, explication: "Charge à payer vis-à-vis d'un fournisseur." },
      { q: "Des intérêts courus sur un placement sont débités au compte :", choix: ["4493", "3493", "3491", "4491"], bonne: 1, explication: "3493 Intérêts courus et non échus à percevoir." },
      { q: "Au début de l'exercice suivant, les régularisations sont :", choix: ["Supprimées", "Contre-passées", "Doublées", "Transférées en capitaux propres"], bonne: 1, explication: "On passe l'écriture inverse (extourne)." },
      { q: "Une assurance annuelle de 12 000 payée le 1er mai N : la CCA au 31/12/N vaut :", choix: ["4 000", "8 000", "6 000", "3 000"], bonne: 0, explication: "Janvier à avril N+1 : 4 mois ; 12 000 × 4/12 = 4 000." },
    ],
  },

  "le-calcul-de-l-impot-sur-les-societes-is": {
    cours: md`
## Introduction

Les sociétés (SA, SARL…) sont soumises à l'**impôt sur les sociétés (IS)** sur leur **bénéfice**. Le bénéfice comptable doit d'abord être corrigé pour obtenir le **résultat fiscal**.

## I. Du résultat comptable au résultat fiscal

$$\text{Résultat fiscal} = \text{résultat comptable avant impôt} + \text{réintégrations} - \text{déductions}$$

### Les réintégrations (charges non déductibles)

Charges comptabilisées que la loi fiscale n'accepte pas :

- **amendes, pénalités** et majorations ;
- **IS** lui-même s'il a été comptabilisé en charge ;
- amortissement des **voitures de tourisme** au-delà de la limite fiscale (base plafonnée à **300 000 DH TTC** par véhicule, amortie sur 5 ans) ;
- dons non autorisés, cadeaux au-delà des limites fixées ;
- provisions non justifiées, charges sans justificatif.

### Les déductions (produits non imposables ou déjà imposés)

- **Dividendes** reçus d'autres sociétés soumises à l'IS (produits des participations) ;
- reprises sur provisions déjà réintégrées.

## II. Le calcul de l'IS

### 1. Le taux

Depuis la réforme engagée par la **loi de finances 2023**, les taux convergent progressivement. Pour les exercices ouverts à partir de **2026** :

| Bénéfice net fiscal | Taux |
|---|---|
| Inférieur à 100 millions de DH | **20 %** |
| Égal ou supérieur à 100 millions de DH | **35 %** |
| Établissements de crédit, assurances | **40 %** |

(Pendant la période transitoire 2023-2025, des taux intermédiaires s'appliquaient ; en exercice, on utilise toujours le taux donné par l'énoncé.)

$$IS = \text{résultat fiscal} \times \text{taux}$$

### 2. La cotisation minimale (CM)

Même en cas de déficit ou de faible bénéfice, la société paie au minimum une **cotisation minimale** :

$$CM = \text{base} \times 0{,}25\%$$

La base comprend le **chiffre d'affaires HT** et certains autres produits (produits accessoires, produits financiers, subventions reçues).

$$\text{IS dû} = \max(IS \ ; \ CM)$$

## III. Le paiement : acomptes provisionnels

L'IS est payé par **4 acomptes provisionnels**, égaux chacun à **25 %** de l'impôt de l'exercice **précédent**, versés avant la fin du 3ᵉ, 6ᵉ, 9ᵉ et 12ᵉ mois de l'exercice. La **régularisation** (solde) est versée avec la déclaration, dans les 3 mois suivant la clôture.

$$\text{Reliquat} = \text{IS dû} - \sum \text{acomptes versés}$$

- Reliquat positif : à payer ;
- Reliquat négatif : excédent imputable sur les acomptes suivants ou restituable.

## IV. Les écritures

| Opération | Débit | Crédit |
|---|---|---|
| Versement d'un acompte | **3453** Acomptes sur impôts sur les résultats | 5141 Banques |
| Constatation de l'IS dû (31/12) | **6701** Impôts sur les bénéfices | **4453** État, impôts sur les résultats |
| Imputation des acomptes | 4453 | 3453 |
| Paiement du reliquat | 4453 | 5141 |

$$\text{Résultat net} = \text{résultat avant impôt} - IS$$
`,
    exercices: md`
### Exercice 1 — Résultat fiscal et IS (données fictives, taux 20 %)

Résultat comptable avant impôt : 1 250 000 DH. Parmi les charges : une amende de 18 000 DH et une dotation excédentaire sur voiture de tourisme de 12 000 DH. Parmi les produits : des dividendes reçus de 30 000 DH. Chiffre d'affaires HT : 14 000 000 DH ; autres produits de la base de la CM : 400 000 DH.

1. Calculez le résultat fiscal.
2. Calculez l'IS, la CM et l'IS dû.
3. Calculez le résultat net.

<details><summary>Voir le corrigé</summary>

1. Résultat fiscal $= 1\,250\,000 + 18\,000 + 12\,000 - 30\,000 = 1\,250\,000$ DH.
2. $IS = 1\,250\,000 \times 20\% = 250\,000$ DH ; $CM = (14\,000\,000 + 400\,000) \times 0{,}25\% = 36\,000$ DH ; **IS dû** $= \max(250\,000 ; 36\,000) = 250\,000$ DH.
3. Résultat net $= 1\,250\,000 - 250\,000 = 1\,000\,000$ DH.

</details>

### Exercice 2 — Acomptes et écritures (suite)

L'IS de l'exercice précédent était de 220 000 DH.

1. Calculez le montant de chaque acompte et le reliquat.
2. Passez les écritures de constatation de l'IS, d'imputation des acomptes et de paiement du reliquat.

<details><summary>Voir le corrigé</summary>

1. Acompte $= 220\,000 \times 25\% = 55\,000$ DH ; total versé $= 220\,000$ DH ; reliquat $= 250\,000 - 220\,000 = 30\,000$ DH (à payer).
2. Écritures :

| Compte débité | Compte crédité | Montant |
|---|---|---|
| 6701 Impôts sur les bénéfices | 4453 État, impôts sur les résultats | 250 000 |
| 4453 État, impôts sur les résultats | 3453 Acomptes sur impôts sur les résultats | 220 000 |
| 4453 État, impôts sur les résultats | 5141 Banques | 30 000 |

</details>

### Exercice 3 — Cas d'un déficit

Une société a un résultat fiscal négatif de −80 000 DH et un chiffre d'affaires HT de 6 000 000 DH (seul élément de la base). Quel impôt paie-t-elle ?

<details><summary>Voir le corrigé</summary>

L'IS est nul (déficit), mais la société paie la **cotisation minimale** : $6\,000\,000 \times 0{,}25\% = 15\,000$ DH.

</details>
`,
    resume: md`
## L'essentiel — L'impôt sur les sociétés

- **Résultat fiscal** = résultat comptable avant impôt + **réintégrations** − **déductions**.
- Réintégrations : amendes, IS, amortissement excédentaire des voitures de tourisme (plafond 300 000 DH TTC), charges non justifiées.
- Déductions : dividendes reçus.
- **Taux (à partir de 2026)** : 20 % (< 100 MDH) ; 35 % (≥ 100 MDH) ; 40 % banques et assurances.
- **CM** $= 0{,}25\%$ de la base (CA HT + certains produits) ; **IS dû = max(IS ; CM)**.
- **4 acomptes** de 25 % de l'IS de N−1 ; reliquat = IS dû − acomptes.
- Écritures : acompte 3453 / 5141 ; IS 6701 / 4453 ; imputation 4453 / 3453 ; reliquat 4453 / 5141.
`,
    qcm: [
      { q: "Une amende fiscale comptabilisée en charge doit être :", choix: ["Déduite", "Réintégrée", "Ignorée", "Provisionnée"], bonne: 1, explication: "Elle n'est pas déductible fiscalement." },
      { q: "L'IS dû est égal à :", choix: ["IS + CM", "Le plus élevé entre IS et CM", "Le plus faible entre IS et CM", "CM seulement"], bonne: 1, explication: "La CM est un minimum d'imposition." },
      { q: "Chaque acompte provisionnel représente :", choix: ["10 % de l'IS de N", "25 % de l'IS de N−1", "50 % de l'IS de N−1", "La CM"], bonne: 1, explication: "4 acomptes de 25 % de l'impôt de l'exercice précédent." },
      { q: "La constatation de l'IS au 31/12 se fait par :", choix: ["4453 à 6701", "6701 à 4453", "3453 à 5141", "6701 à 3453"], bonne: 1, explication: "Charge d'impôt / dette envers l'État." },
      { q: "À partir de 2026, le taux d'IS pour un bénéfice de 5 MDH est :", choix: ["10 %", "20 %", "31 %", "35 %"], bonne: 1, explication: "Bénéfice inférieur à 100 MDH." },
    ],
  },
};
