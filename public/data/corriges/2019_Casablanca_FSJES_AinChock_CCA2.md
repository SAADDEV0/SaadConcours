> Corrigé indicatif rédigé par SaadConcours, pas une correction officielle de la FSJES Aïn Chock. Le sujet impose la loi de finances 2019 :
> - IS : barème progressif 10 % jusqu'à 300 000 dh, 17,5 % de 300 001 à 1 000 000, 31 % au-delà (sommes à déduire 22 500 et 157 500) ;
> - IS des exportateurs : 17,5 % au-delà de 300 000 ;
> - cotisation minimale : 0,75 % ;
> - charges payées en espèces : déductibles dans la limite de 5 000 DH TTC par jour et par fournisseur.
>
> **Trame recyclée.** Le cas de fiscalité reprend celui de 2017-2018 (fiche `2017_Casablanca_FSJES_AinChock_CCA`), avec d'autres montants : résultat, dons, total des intérêts d'associés, taux de CM. Le cas de comptabilité et les questions sont nouveaux. Comparer les deux corrigés est un excellent exercice.

## I/ Comptabilité

### 1/ Coût d'acquisition du matériel importé

**Les frais de mission du directeur technique (6 450 €) sont exclus.** Ils ont été engagés pour **choisir** un fournisseur, avant la décision d'achat : ce ne sont pas des frais directement attribuables à la machine. La valeur en devises est convertie au cours du jour de l'arrivée et du dédouanement (10,84).

| Élément | Calcul | Montant |
|---|---|---:|
| Prix d'achat | 1 000 000 € × 10,84 | 10 840 000 |
| Transport | 8 000 € × 10,84 | 86 720 |
| Frais du port MARSA MAROC (HT) | | 16 800 |
| Taxes d'entrée | | 271 400 |
| **Coût d'acquisition** | | **11 214 920** |

### 2/ Choix du matériel et acquisition

**a) Frais de mission (05/09/N)** : 6 450 × 10,846 = 69 956,70

| Compte | Intitulé | Débit | Crédit |
|---|---|---:|---:|
| 6143 | Déplacements, missions et réceptions | 69 956,70 | |
| 5141 | Banques | | 69 956,70 |

**b) Acquisition (02/10/N)** : TVA récupérable = 2 168 000 + 3 360 (MARSA) = 2 171 360

| Compte | Intitulé | Débit | Crédit |
|---|---|---:|---:|
| 2332 | Matériel et outillage | 11 214 920 | |
| 34551 | État, TVA récupérable sur immobilisations | 2 171 360 | |
| 4481 | Dettes sur acquisitions d'immobilisations (fournisseur français) | | 10 840 000 |
| 4481 | Dettes sur acquisitions d'immobilisations (transporteur) | | 86 720 |
| 4481 | Dettes sur acquisitions d'immobilisations (MARSA MAROC : 16 800 + 3 360) | | 20 160 |
| 5141 | Banques (quittance de douane) | | 2 439 400 |
| | **Totaux** | **13 386 280** | **13 386 280** |

### 3/ Paiements

**Transporteur (05/10/N)** : dette 86 720 ; décaissé 8 000 × 10,86 = 86 880, d'où une **perte de change de 160**.

| Compte | Intitulé | Débit | Crédit |
|---|---|---:|---:|
| 4481 | Dettes sur acquisitions d'immobilisations | 86 720 | |
| 6331 | Pertes de change | 160 | |
| 6147 | Services bancaires | 540 | |
| 34552 | État, TVA récupérable sur charges | 54 | |
| 5141 | Banques | | 87 474 |

**Fournisseur, 600 000 € (06/10/N)** : dette 600 000 × 10,84 = 6 504 000 ; décaissé 600 000 × 10,835 = 6 501 000, d'où un **gain de change de 3 000**.

| Compte | Intitulé | Débit | Crédit |
|---|---|---:|---:|
| 4481 | Dettes sur acquisitions d'immobilisations | 6 504 000 | |
| 6147 | Services bancaires | 1 650 | |
| 34552 | État, TVA récupérable sur charges | 165 | |
| 5141 | Banques | | 6 502 815 |
| 7331 | Gains de change | | 3 000 |

**Solde de 400 000 € (15/01/N+1).** Au 01/01/N+1, on contrepasse l'écart de conversion du 31/12. La dette revient donc à 4 336 000. Le paiement de 400 000 × 10,848 = 4 339 200 fait apparaître une **perte de change réalisée de 3 200**. La provision de 8 000 est reprise (7394 « Reprises sur provisions pour risques et charges financiers »).

### 4/ Écritures d'inventaire au 31/12/N

**a) Actualisation de la dette de 400 000 €** : 400 000 × (10,86 − 10,84) = **8 000** de perte latente.

| Compte | Intitulé | Débit | Crédit |
|---|---|---:|---:|
| 3702 | Écarts de conversion – actif (augmentation des dettes circulantes) | 8 000 | |
| 4481 | Dettes sur acquisitions d'immobilisations | | 8 000 |
| 6393 | Dotations aux provisions pour risques et charges financiers | 8 000 | |
| 4506 | Provisions pour pertes de change | | 8 000 |

**b) Amortissement** : annuité 1 121 492. Le point de départ est le 1er jour du mois d'acquisition (septembre), soit 4 mois : **373 830,67**.

| Compte | Intitulé | Débit | Crédit |
|---|---|---:|---:|
| 6193 | Dotations d'exploitation aux amortissements des immobilisations corporelles | 373 830,67 | |
| 2833 | Amortissements du matériel et outillage | | 373 830,67 |

### 5/ Cession du 25/09/N+3

**Cumul des amortissements**

| Exercice | Dotation |
|---|---:|
| N (4 mois) | 373 830,67 |
| N+1 et N+2 | 2 242 984,00 |
| N+3 (01/01 → 25/09 : 265/360) | 825 542,72 |
| **Cumul** | **3 442 357,39** |

La VNA vaut 11 214 920 − 3 442 357,39 = **7 772 562,61**. Avec un prix de 5 220 000, la cession dégage une **moins-value de 2 552 562,61**.

| Compte | Intitulé | Débit | Crédit |
|---|---|---:|---:|
| 3481 | Créances sur cessions d'immobilisations | 5 220 000,00 | |
| 7513 | Produits des cessions des immobilisations corporelles | | 5 220 000,00 |
| 6193 | Dotations d'exploitation aux amortissements des immobilisations corporelles | 825 542,72 | |
| 2833 | Amortissements du matériel et outillage | | 825 542,72 |
| 2833 | Amortissements du matériel et outillage | 3 442 357,39 | |
| 6513 | VNA des immobilisations corporelles cédées | 7 772 562,61 | |
| 2332 | Matériel et outillage | | 11 214 920,00 |

*Le sujet ne mentionne pas la TVA sur la cession. En pratique, une cession avant la fin de la 5e année suivant l'acquisition oblige à examiner la régularisation de la TVA déduite à l'origine (article 104 du CGI).*

### Questions

**1/ Historique des pratiques comptables au Maroc**
- **Avant 1994**, les entreprises appliquaient en pratique le **plan comptable français de 1957**, hérité du Protectorat, sans cadre légal marocain unifié.
- **Code général de normalisation comptable (CGNC)** : élaboré par le Conseil national de la comptabilité et adopté en 1986-1987. Il pose les principes, les méthodes d'évaluation, le plan de comptes et les cinq états de synthèse.
- **Loi 9-88** relative aux obligations comptables des commerçants : promulguée par le dahir du 25 décembre 1992, elle rend le CGNC obligatoire à partir du **1er janvier 1994**.
- **Loi 15-89** (1993) : elle organise la profession d'expert-comptable (Ordre des experts-comptables), ce qui renforce l'audit légal.
- Ensuite viennent les **plans sectoriels** (établissements de crédit, assurances, sociétés de bourse) et, pour les comptes consolidés, l'ouverture aux **normes IFRS** : banques sous l'égide de Bank Al-Maghrib, sociétés cotées sous le contrôle de l'AMMC.

**2/ Documents de l'ESG** :
- le **tableau de formation des résultats** : marge brute, production, valeur ajoutée, EBE, résultats d'exploitation, financier, courant, non courant et net ;
- le **tableau de calcul de la CAF et de l'autofinancement**.

## II/ Fiscalité

### 1/ Impôt exigible de l'exercice N-1

L'exercice est déficitaire, donc la société doit la CM au taux de la LF 2019 imposé par le sujet :

14 651 200 × 0,75 % = **109 884 dh**

### 2/ Résultat net fiscal de l'exercice N

| Élément | Traitement et justification | Réintégration | Déduction |
|---|---|---:|---:|
| Résultat avant impôt | | 1 686 540,50 | |
| Fournitures payées en espèces | Facture de 26 400 TTC. LF 2019 : charge déductible dans la limite de 5 000 DH TTC par jour et par fournisseur, soit 4 166,67 HT. Non déductible : 22 000 − 4 166,67 | 17 833,33 | |
| Honoraires comptabilisés TTC | La TVA de 1 500 est récupérable : ce n'est pas une charge | 1 500,00 | |
| Fondation Mohammed V | Don déductible en totalité | — | |
| Œuvres sociales (30 000) | Sous le plafond de 2 ‰ du CA (33 720) | — | |
| TP : pénalité et majorations | Non déductibles | 2 468,00 | |
| Intérêts de l'emprunt bancaire | Charge normale | — | |
| Intérêts d'associés | Comptabilisés 63 000, admis 20 250 | 42 750,00 | |
| Prime de foire, dégrèvement de TP de N-2 | Produits imposables | — | |
| Reprise de 6 600 (provision réintégrée en N-3) | Déjà imposée en N-3 | | 6 600,00 |
| Reprise de 15 600 (stock N-1) | Provision déduite en N-1 : la reprise est imposable | — | |
| **Totaux** | | **1 751 091,83** | **6 600,00** |

**Résultat fiscal avant imputation** : **1 744 491,83**

**Déficit N-1** (amortissements, reportable sans limite) : 1 744 491,83 − 134 560 = **1 609 931,83 dh**

**Intérêts déductibles.** Le taux fiscal est de 2,25 %, et les avances sont retenues dans la limite du capital : 1 000 000, puis 1 200 000 à partir du 01/09.
- 1 000 000 × 2,25 % × 4/12 = 7 500 (du 01/03 au 30/06, avances de 1 200 000 plafonnées)
- 1 000 000 × 2,25 % × 2/12 = 3 750 (juillet-août, avances de 1 300 000)
- 1 200 000 × 2,25 % × 4/12 = 9 000 (de septembre à décembre)
- **Total : 20 250**. Le montant de 63 000 correspond bien au calcul à 6 % (23 000 pour Saadaoui, 40 000 pour Lamrani).

### 3/ Impôt exigible de l'exercice N

- IS = 1 609 931,83 × 31 % − 157 500 = **341 579 dh**
- CM = 19 884 300 × 0,75 % = 149 132

L'IS est supérieur à la CM : **impôt exigible = 341 579 dh**.

### 4/ Hypothèse : 25 % des ventes à l'exportation

L'exonération de 5 ans des exportateurs est épuisée : la part export relève du barème des exportateurs.
- Barème des exportateurs : 1 609 931,83 × 17,5 % − 22 500 = 259 238,07
- IS = 75 % × 341 578,87 + 25 % × 259 238,07 = **320 994 dh** (supérieur à la CM)

### Questions

**1/ Assujetti partiel à la TVA.** C'est une entreprise qui réalise à la fois :
- des opérations **taxables**, ou exonérées **avec** droit à déduction ;
- des opérations exonérées **sans** droit à déduction, ou hors champ de la TVA.

Elle ne récupère la TVA de ses achats qu'au **prorata de déduction** : chiffre d'affaires ouvrant droit à déduction divisé par le chiffre d'affaires total. Le prorata est régularisé en fin d'année. Exemples : une boulangerie-pâtisserie (pain exonéré, pâtisserie taxable), un éditeur de presse (journaux exonérés, publicité taxable).

**2/ Étapes du contentieux fiscal**

*Procédure de rectification* (articles 220 et suivants du CGI) :
1. première notification des redressements ;
2. réponse du contribuable dans les 30 jours ;
3. seconde notification ;
4. recours devant la **commission locale de taxation** ou la **commission nationale de recours fiscal**, dans les 30 jours ;
5. décision de la commission ;
6. recours **judiciaire** devant le tribunal administratif, dans les 60 jours suivant la notification de la décision.

*Réclamation* (article 235) :
1. réclamation auprès de l'administration après la mise en recouvrement ;
2. réponse de l'administration ;
3. à défaut de réponse ou en cas de rejet, action devant le tribunal administratif.

**Piège** : confondre la phase administrative (commissions) et la phase judiciaire (tribunal).
