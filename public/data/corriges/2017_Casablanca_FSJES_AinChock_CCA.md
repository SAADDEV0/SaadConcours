> Corrigé indicatif rédigé par SaadConcours, pas une correction officielle de la FSJES Aïn Chock. Les règles fiscales appliquées sont celles en vigueur pour l'exercice 2017 (session de septembre 2017) : barème proportionnel de l'IS, cotisation minimale à 0,5 % (donnée par le sujet), limite de 10 000 DH TTC par jour et par fournisseur pour les charges payées en espèces. Chaque hypothèse est signalée : c'est ce que le jury attend quand il écrit « précisez vos hypothèses sur la copie ».

## I/ Comptabilité générale

### 1/ Coût d'acquisition du matériel importé

**Valeur de la machine.** La dette en devises est convertie au cours du jour d'arrivée et de dédouanement, seul cours donné pour l'entrée du bien : 600 000 × 11,75 = **7 050 000 dh**.

**TVA supportée sur l'acquisition** (elle est déductible au prorata) :

| Origine | Calcul | TVA |
|---|---|---:|
| Douane | donnée | 1 410 000 |
| Transport | 15 000 × 14 % | 2 100 |
| MARSA MAROC | 7 500 × 20 % | 1 500 |
| **Total** | | **1 413 600** |

L'entreprise est assujettie partielle. À l'acquisition, elle déduit la TVA au **prorata de l'année précédente** (72 %). La régularisation se fait au 31/12, avec le prorata définitif de N (question 3).
- TVA déductible provisoire : 1 413 600 × 72 % = **1 017 792**
- TVA non déductible : 1 413 600 × 28 % = **395 808**. Elle n'est pas récupérable, donc c'est un élément du coût.

| Élément du coût | Montant |
|---|---:|
| Prix d'achat (600 000 € × 11,75) | 7 050 000 |
| Taxes d'entrée | 176 250 |
| Transport (HT) | 15 000 |
| Frais de port MARSA MAROC (HT) | 7 500 |
| TVA non récupérable (28 %) | 395 808 |
| **Coût d'acquisition provisoire** | **7 644 558** |

### 2/ Enregistrement de l'acquisition (06/10/N)

| Compte | Intitulé | Débit | Crédit |
|---|---|---:|---:|
| 2332 | Matériel et outillage | 7 644 558 | |
| 34551 | État, TVA récupérable sur immobilisations | 1 017 792 | |
| 4481 | Dettes sur acquisitions d'immobilisations (fournisseur italien) | | 7 050 000 |
| 4481 | Dettes sur acquisitions d'immobilisations (transporteur : 15 000 × 1,14) | | 17 100 |
| 4481 | Dettes sur acquisitions d'immobilisations (MARSA MAROC : 7 500 × 1,2) | | 9 000 |
| 5141 | Banques (quittance de douane réglée) | | 1 586 250 |
| | **Totaux** | **8 662 350** | **8 662 350** |

*Si la quittance n'est pas encore payée, créditer 4458 « État, autres comptes créditeurs » au lieu de 5141.*

### 3/ Régularisation de la TVA au 31/12/N

Le prorata définitif de N (81 %) dépasse de 9 points le prorata provisoire (72 %). L'entreprise a donc droit à un **complément de déduction** :

1 413 600 × (81 % − 72 %) = **127 224 dh**

Cette TVA avait été incorporée au coût. On la sort du compte d'immobilisation :

| Compte | Intitulé | Débit | Crédit |
|---|---|---:|---:|
| 34551 | État, TVA récupérable sur immobilisations | 127 224 | |
| 2332 | Matériel et outillage | | 127 224 |

**Coût définitif** : 7 644 558 − 127 224 = **7 517 334 dh**. On retrouve le même montant par le calcul direct : 7 248 750 + 19 % × 1 413 600.

### 4/ Amortissement au 31/12/N

L'amortissement est linéaire sur 10 ans, soit 10 %. Il court du 1er jour du mois d'acquisition (octobre), soit 3 mois :

7 517 334 × 10 % × 3/12 = **187 933,35 dh**

| Compte | Intitulé | Débit | Crédit |
|---|---|---:|---:|
| 6193 | Dotations d'exploitation aux amortissements des immobilisations corporelles | 187 933,35 | |
| 2833 | Amortissements du matériel et outillage | | 187 933,35 |

### 5/ Paiement du fournisseur étranger (15/10/N)

- Dette inscrite au cours du 06/10 : 7 050 000
- Somme décaissée : 600 000 × 11,78 = 7 068 000, d'où une **perte de change réalisée de 18 000**
- Commissions : 3 420 + TVA 342

| Compte | Intitulé | Débit | Crédit |
|---|---|---:|---:|
| 4481 | Dettes sur acquisitions d'immobilisations | 7 050 000 | |
| 6331 | Pertes de change | 18 000 | |
| 6147 | Services bancaires | 3 420 | |
| 34552 | État, TVA récupérable sur charges | 342 | |
| 5141 | Banques | | 7 071 762 |

### 6/ Cession du 25/09/N+6

Calcul des amortissements. L'annuité vaut 751 733,40. Pour N+6, le prorata va du 01/01 au 25/09, soit 8 mois et 25 jours (265 jours sur une base de 360) :

| Exercice | Dotation |
|---|---:|
| N (3 mois) | 187 933,35 |
| N+1 à N+5 (5 × 751 733,40) | 3 758 667,00 |
| N+6 (751 733,40 × 265/360) | 553 359,31 |
| **Cumul au 25/09/N+6** | **4 499 959,66** |

La VNA vaut 7 517 334 − 4 499 959,66 = **3 017 374,34**. Avec un prix de cession de 2 150 000, la cession dégage une **moins-value de 867 374,34**.

**a) Constatation de la cession (25/09/N+6)**

| Compte | Intitulé | Débit | Crédit |
|---|---|---:|---:|
| 3481 | Créances sur cessions d'immobilisations | 2 150 000 | |
| 7513 | Produits des cessions des immobilisations corporelles | | 2 150 000 |

**b) Dotation complémentaire de N+6**

| Compte | Intitulé | Débit | Crédit |
|---|---|---:|---:|
| 6193 | Dotations d'exploitation aux amortissements des immobilisations corporelles | 553 359,31 | |
| 2833 | Amortissements du matériel et outillage | | 553 359,31 |

**c) Sortie du bien**

| Compte | Intitulé | Débit | Crédit |
|---|---|---:|---:|
| 2833 | Amortissements du matériel et outillage | 4 499 959,66 | |
| 6513 | VNA des immobilisations corporelles cédées | 3 017 374,34 | |
| 2332 | Matériel et outillage | | 7 517 334,00 |

*Le sujet ne parle pas de TVA sur la cession. Elle intervient plus de cinq ans après l'acquisition, donc aucun reversement de la TVA initialement déduite n'est dû. Si l'on arrondit le prorata de N+6 à 9 mois, la dotation passe à 563 800,05 : la méthode est acceptée si l'hypothèse est écrite.*

### Questions

**1/ Principes comptables du CGNC.** Le CGNC en retient sept :
1. continuité d'exploitation ;
2. permanence des méthodes ;
3. coût historique ;
4. spécialisation des exercices ;
5. prudence ;
6. clarté ;
7. importance significative.

Leur application doit aboutir à l'**image fidèle** du patrimoine, de la situation financière et des résultats.

**2/ Documents de l'ESG.** L'ESG comprend deux tableaux :
- le **tableau de formation des résultats (TFR)**, avec ses soldes intermédiaires : marge brute, production, valeur ajoutée, EBE, résultats d'exploitation, financier, courant, non courant et net ;
- le **tableau de calcul de la capacité d'autofinancement (CAF) et de l'autofinancement**.

## II/ Fiscalité

### 1/ Impôt exigible de l'exercice N-1

L'exercice N-1 est déficitaire : l'IS est nul. La société doit la **cotisation minimale** :

14 651 200 × 0,5 % = **73 256 dh** (supérieure au minimum légal de 3 000 dh).

### 2/ Résultat net fiscal de l'exercice N

| Élément | Traitement et justification | Réintégration | Déduction |
|---|---|---:|---:|
| Résultat avant impôt | | 686 540,50 | |
| Fournitures payées en espèces | Facture de 26 400 TTC. Depuis la LF 2016, une charge payée en espèces n'est déductible que dans la limite de 10 000 DH TTC par jour et par fournisseur. L'excédent, 16 400 TTC, correspond à 13 666,67 HT | 13 666,67 | |
| Honoraires comptabilisés TTC | La TVA de 1 500 est récupérable : ce n'est pas une charge | 1 500,00 | |
| Don à la fondation Lalla Salma | Organisme dont les dons sont déductibles (article 10 du CGI) | — | |
| Dons aux œuvres sociales | 30 000 ≤ plafond de 2 ‰ du CA (16 860 000 × 2 ‰ = 33 720) : déductible | — | |
| Taxe professionnelle : principal | Impôt déductible | — | |
| Pénalité et majoration de retard (1 851 + 617) | Non déductibles (article 11 du CGI) | 2 468,00 | |
| Intérêts de l'emprunt bancaire | Charge financière normale | — | |
| Intérêts des comptes d'associés | Comptabilisés 48 000, déductibles 20 250 (voir ci-dessous) | 27 750,00 | |
| Prime de foire, dégrèvement de TP de N-2 | Produits imposables (la TP de N-2 avait été déduite) | — | |
| Reprise de 6 600 (client jamais attaqué en justice) | Sans recours judiciaire dans les 12 mois, la provision n'était pas déductible en N-3. Hypothèse : elle a été réintégrée à l'époque, donc sa reprise n'est pas taxée une seconde fois | | 6 600,00 |
| Reprise de 15 600 (stock de produits finis) | Provision justifiée et déduite en N-1 : la reprise est imposable | — | |
| **Totaux** | | **731 925,17** | **6 600,00** |

**Résultat fiscal avant imputation** : 731 925,17 − 6 600 = **725 325,17**

**Imputation du déficit de N-1** : il provient en totalité des amortissements, donc il est reportable sans limite de temps.

725 325,17 − 134 560 = **590 765,17 dh** (résultat net fiscal imposable)

**Détail des intérêts des associés.** Pour être déductibles, les intérêts supposent un capital entièrement libéré. Ils sont calculés au taux fiscal (2,25 %) et sur des avances **plafonnées au montant du capital** : 1 000 000, puis 1 200 000 à partir du 01/09.

| Période | Avances | Montant retenu (plafond capital) | Intérêts à 2,25 % |
|---|---:|---:|---:|
| 01/03 → 30/06 (4 mois) | 1 200 000 | 1 000 000 | 7 500 |
| 01/07 → 31/08 (2 mois) | 1 300 000 | 1 000 000 | 3 750 |
| 01/09 → 31/12 (4 mois) | 1 300 000 | 1 200 000 | 9 000 |
| **Total déductible** | | | **20 250** |

*Remarque : recalculés au taux statutaire de 6 %, les intérêts atteignent 63 000 et non 48 000. C'est d'ailleurs le montant que le sujet de 2019 reprend. On réintègre la différence entre ce qui a été comptabilisé (48 000) et ce qui est admis (20 250).*

### 3/ Impôt exigible de l'exercice N

Barème proportionnel en vigueur en 2017 : un bénéfice compris entre 300 001 et 1 000 000 est taxé **en totalité** à 20 %.
- IS = 590 765,17 × 20 % = **118 153 dh**
- CM = 19 884 300 × 0,5 % = 99 421,50

L'IS est supérieur à la CM, donc **impôt exigible N = 118 153 dh**.

### 4/ Mode de paiement

- **Quatre acomptes provisionnels**, chacun égal à 25 % de l'impôt de l'exercice précédent (73 256), soit **18 314 dh**. Ils sont versés spontanément avant la fin des 3e, 6e, 9e et 12e mois de l'exercice N : 31/03, 30/06, 30/09 et 31/12.
- **Régularisation** : 118 153 − 73 256 = **44 897 dh**, versés avec la déclaration du résultat fiscal dans les trois mois suivant la clôture, soit avant le 31/03/N+1.

### Question : bénéfice d'un promoteur immobilier

Pour un promoteur **personne physique**, c'est un revenu **professionnel** soumis à l'IR, car l'activité de promotion immobilière est commerciale. Si le promoteur est une **société**, le bénéfice relève de l'IS.

**Piège à éviter :** ne pas le classer en revenus et profits fonciers. Ceux-ci visent la location d'immeubles et les cessions occasionnelles par des particuliers, pas une activité habituelle de construction-vente.
