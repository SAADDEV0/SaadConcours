> Corrigé indicatif rédigé par SaadConcours, pas une correction officielle de l'ENCG Fès. Le scan est de faible résolution et les données des dossiers 1 et 2 ne sont pas entièrement cohérentes entre elles : nous signalons chaque hypothèse. Le dossier 3, lisible et cohérent, est corrigé en entier (le BFRE tombe sur un montant rond, 321 200 DH, ce qui confirme la méthode).

## Méthode

Quatre dossiers en 2 heures, avec une simple calculatrice à 4 fonctions : les calculs doivent rester simples. Commencez par le dossier 3 (le plus rentable, méthode normative du BFRE), puis la facturation.

## Dossier 1 — Factures d'Omega

### Facture V196 (client KESEBA)

On remonte à partir du net TTC : $\text{Brut} \times 0{,}90 \times 0{,}98 \times 1{,}20 = 6\,858{,}43$, d'où Brut = 6 858,43 / 1,0584 = **6 480 DH**, soit **960 flacons** à 6,75 DH.

| Libellé | Montant |
|---|---|
| 960 flacons × 6,75 | 6 480,00 |
| Remise 10 % | − 648,00 |
| Net commercial | 5 832,00 |
| Escompte 2 % | − 116,64 |
| Net financier | 5 715,36 |
| TVA 20 % | 1 143,07 |
| **Net TTC** | **6 858,43** |

### Facture V200 (client Mahboub)

La quantité et la contenance des bidons sont illisibles. On part de la TVA donnée : 400 = 20 % × (net commercial + port), donc net commercial + port = 2 000 et **net commercial = 1 980**. Brut = 1 980 / 0,95 = 2 084,21 DH (le quotient par 2,31 DH n'étant pas entier, le prix ou la TVA du scan est sans doute mal reproduit).

| Libellé | Montant |
|---|---|
| Bidons (brut) | 2 084,21 |
| Remise exceptionnelle 5 % | − 104,21 |
| Net commercial | 1 980,00 |
| Port forfaitaire (produit d'une activité annexe) | 20,00 |
| TVA 20 % | 400,00 |
| **Net TTC** | **2 400,00** |

### Comptes en T (chez Omega)

| Compte | Débit | Crédit |
|---|---|---|
| 3421 Clients | 6 858,43 (V196) ; 2 400,00 (V200) | 6 858,43 (chèque) ; 2 400,00 (traite) |
| 7121 Ventes de biens produits | | 5 832,00 ; 1 980,00 |
| 7127 Ventes et produits accessoires (port) | | 20,00 |
| 6386 Escomptes accordés | 116,64 | |
| 4455 État, TVA facturée | | 1 143,07 ; 400,00 |
| 3425 Clients, effets à recevoir | 2 400,00 | |
| 5141 Banques (chèque n° 67871 remis le 10/01) | 6 858,43 | |

La remise commerciale ne s'enregistre pas (elle est déduite du prix) ; l'escompte de règlement est une charge financière.

## Dossier 2 — Escompte de la LC sur Mahboub

**Méthode** : avec un effet de nominal $V$, $j$ jours entre la remise et l'échéance du 10 février, l'escompte vaut $V \times 0{,}08 \times j/360$, la commission 10 DH, la TVA 10 % des agios (escompte + commission). Le net d'escompte est $V - 1{,}1 \times (V \times 0{,}08\,j/360 + 10)$, et l'on en déduit $j$, puis la date de remise (10 février moins $j$ jours).

**Incohérence du sujet** : avec un nominal de 2 400 DH (net TTC de la facture V200), une valeur actuelle de 2 403,33 DH est impossible, puisqu'elle dépasse le nominal. Le nombre de bidons étant illisible, le nominal réel de la traite ne peut pas être retrouvé avec certitude, et la date de remise ne peut pas être calculée sans inventer une donnée. Sur une copie, il faut poser la méthode ci-dessus et signaler l'incohérence.

**Écritures** (en notant $E$ l'escompte, $T$ la TVA et $N$ le net crédité) :

| Compte | Débit | Crédit |
|---|---|---|
| 5141 Banques | N | |
| 6311 Intérêts (escompte) | E | |
| 6147 Services bancaires (commission) | 10 | |
| 34552 État, TVA récupérable sur charges | T | |
| 5520 Crédits d'escompte | | V |
| 5520 Crédits d'escompte (10/02, effet payé) | V | |
| 3425 Clients, effets à recevoir | | V |

## Dossier 3 — BFRE normatif de l'activité « cabines de douche »

Base de calcul : chiffre d'affaires HT = 300 × 8 900 = **2 670 000 DH**. Coefficients de structure : achats de cabines 1 350 000 / 2 670 000 = **0,5056** ; sous-traitance de l'installation 1 050 000 / 2 670 000 = **0,3933**.

| Élément | Délai (jours) | Coefficient de structure | Emplois (jours de CA HT) | Ressources (jours de CA HT) |
|---|---|---|---|---|
| Stock de cabines | 60 | 0,5056 | 30,34 | |
| Clients (TTC) : 0,40 × 30 + 0,50 × 45 = 34,5 j | 34,5 | 1,20 | 41,40 | |
| TVA déductible : 15 + 24 = 39 j | 39 | 0,20 × (0,5056 + 0,3933) = 0,1798 | 7,01 | |
| Fournisseur de cabines (TTC) | 30 | 0,5056 × 1,2 = 0,6067 | | 18,20 |
| Autres fournisseurs (TTC) | 20 | 0,3933 × 1,2 = 0,4719 | | 9,44 |
| TVA collectée : 15 + 24 = 39 j | 39 | 0,20 | | 7,80 |
| **Total** | | | **78,75** | **35,44** |

« 30 jours fin de mois » représente en moyenne 15 jours (fin du mois de la vente) + 30 jours = 45 jours. Les ventes au comptant (10 %) ont un délai nul.

1. **BFRE = 78,75 − 35,44 = 43,31 jours de chiffre d'affaires HT.**
2. **BFRE en DH = 43,31 × 2 670 000 / 360 = 321 200 DH.**

Le lancement de l'activité immobilise donc environ 321 000 DH, à financer par des ressources stables. Le stock (60 jours) et le crédit client sont les deux postes à surveiller.

## Dossier 4 — What becomes the result of the exercise?

The question refers to the forecast income statement of the new activity (Annex 1). All costs are variable, and there are no financial or non-operating items:

- Sales: 300 × 8,900 = 2,670,000 MAD
- Variable costs: 1,350,000 (shower cabins) + 1,050,000 (subcontracted installation) + 3,000 (other expenses) = 2,403,000 MAD
- **Operating result = 267,000 MAD**, i.e. 10% of sales; this is also the result before tax of the activity.

Because all costs are variable, the result changes in proportion to the number of units sold (about 890 MAD per unit), and the activity has no break-even risk at the unit level. However, it requires financing a working-capital need of 321,200 MAD (Dossier 3); the return on that investment is 267,000 / 321,200 ≈ 83% before tax.
