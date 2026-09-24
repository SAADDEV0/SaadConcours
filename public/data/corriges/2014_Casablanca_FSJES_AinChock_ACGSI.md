> Corrigé indicatif rédigé par SaadConcours, pas une correction officielle de la FSJES Aïn Chock. Les règles fiscales sont celles de 2014 :
> - taux d'IS de 30 % et CM de 0,5 %, donnés par le sujet ;
> - charges de 10 000 DH et plus payées en espèces : non déductibles à hauteur de 50 % (règle en vigueur jusqu'à la LF 2016) ;
> - excédent de CM imputable sur l'IS des trois exercices suivants (règle supprimée depuis).
>
> Le sujet contient une contradiction, traitée ci-dessous : amortissement sur 5 ans au début de l'énoncé, sur 10 ans à la fin.

## I/ Comptabilité

### 1/ Coût du matériel importé

| Élément | Calcul | Montant |
|---|---|---:|
| Prix d'achat | 500 000 USD × 9,055 | 4 527 500 |
| Transport maritime | 8 500 € × 10,78 | 91 630 |
| MARSA MAROC (manutention + magasinage) | 1 800 + 1 200 | 3 000 |
| Droits et taxes de douane | | 128 570 |
| Prélèvement fiscal à l'importation | | 64 900 |
| Installation STAB (honoraires HT) | | 6 500 |
| **Coût d'acquisition** | | **4 822 100** |

TVA récupérable : 600 + 944 188 + 1 300 = **946 088**. L'emprunt n'entre pas dans le coût : c'est un mode de financement, et ses intérêts sont des charges financières.

### 2/ Écritures d'importation

**a) Acquisition et frais (06/06/N à 01/07/N, regroupés)**

| Compte | Intitulé | Débit | Crédit |
|---|---|---:|---:|
| 2332 | Matériel et outillage | 4 822 100 | |
| 34551 | État, TVA récupérable sur immobilisations | 946 088 | |
| 4481 | Dettes sur acquisitions d'immobilisations (GTM) | | 4 527 500 |
| 4481 | Dettes sur acquisitions d'immobilisations (transporteur) | | 91 630 |
| 4481 | Dettes sur acquisitions d'immobilisations (MARSA MAROC) | | 3 600 |
| 5141 | Banques (douane : 128 570 + 64 900 + 944 188) | | 1 137 658 |
| 4481 | Dettes sur acquisitions d'immobilisations (STAB) | | 7 800 |
| | **Totaux** | **5 768 188** | **5 768 188** |

**b) Emprunt de 300 000 USD (06/06/N).** La banque américaine règle directement le fournisseur pour 300 000 USD ; les 200 000 USD restants sont payés le 20/07. Montant : 300 000 × 9,055 = 2 716 500.

| Compte | Intitulé | Débit | Crédit |
|---|---|---:|---:|
| 4481 | Dettes sur acquisitions d'immobilisations (GTM) | 2 716 500 | |
| 1481 | Emprunts auprès des établissements de crédit | | 2 716 500 |

### 3/ Règlement du transporteur (15/07/N)

La dette était de 91 630, la banque a décaissé 91 460 : **gain de change de 170**.

| Compte | Intitulé | Débit | Crédit |
|---|---|---:|---:|
| 4481 | Dettes sur acquisitions d'immobilisations | 91 630 | |
| 6147 | Services bancaires | 840 | |
| 34552 | État, TVA récupérable sur charges | 84 | |
| 5141 | Banques | | 92 384 |
| 7331 | Gains de change | | 170 |

### 4/ Règlement du fournisseur américain (20/07/N)

La dette était de 200 000 × 9,055 = 1 811 000, la somme décaissée est de 1 812 400 : **perte de change de 1 400**.

| Compte | Intitulé | Débit | Crédit |
|---|---|---:|---:|
| 4481 | Dettes sur acquisitions d'immobilisations | 1 811 000 | |
| 6331 | Pertes de change | 1 400 | |
| 6147 | Services bancaires | 1 240 | |
| 34552 | État, TVA récupérable sur charges | 124 | |
| 5141 | Banques | | 1 813 764 |

### 5/ Écritures au 31/12/N

**a) Amortissement.** Le sujet annonce d'abord 5 ans, puis « l'amortissement linéaire sur une durée de 10 ans a été choisi ». Nous retenons la **dernière indication, 10 ans**, et nous l'écrivons sur la copie. Le point de départ est la mise en service du 03/07, soit 6 mois.

4 822 100 × 10 % × 6/12 = **241 105** *(sur 5 ans : 482 210)*

| Compte | Intitulé | Débit | Crédit |
|---|---|---:|---:|
| 6193 | Dotations d'exploitation aux amortissements des immobilisations corporelles | 241 105 | |
| 2833 | Amortissements du matériel et outillage | | 241 105 |

**b) Actualisation de la dette en devise.** Seul l'emprunt reste dû : 300 000 × (9,061 − 9,055) = **1 800** de perte latente. C'est une dette de financement, donc on utilise l'écart de conversion des éléments **durables**.

| Compte | Intitulé | Débit | Crédit |
|---|---|---:|---:|
| 2722 | Écarts de conversion – actif (augmentation des dettes de financement) | 1 800 | |
| 1481 | Emprunts auprès des établissements de crédit | | 1 800 |
| 6393 | Dotations aux provisions pour risques et charges financiers | 1 800 | |
| 1516 | Provisions pour pertes de change | | 1 800 |

*Non demandé, mais attendu en pratique : les intérêts courus de l'emprunt du 06/06 au 31/12, à constater au 4493 « Intérêts courus et non échus à payer ».*

## II/ Fiscalité

### 1/ Impôt exigible de N-1

C'est le plus élevé de l'IS (86 420) et de la CM (94 650) : **94 650 dh**. L'excédent de CM, 94 650 − 86 420 = **8 230**, est imputable sur l'IS des trois exercices suivants (règle en vigueur en 2014).

### 2/ Résultat net fiscal de N

| Élément | Traitement et justification | Réintégration | Déduction |
|---|---|---:|---:|
| Résultat avant impôt | | 344 465,00 | |
| Marchandises payées en espèces (17 040 TTC, soit 14 200 HT) | Montant d'au moins 10 000 DH : non déductible à 50 % (règle d'avant 2016) | 7 100,00 | |
| Croissant rouge marocain | Don déductible | — | |
| Association de lauréats d'une école privée | Non déductible | 10 000,00 | |
| Climatisation passée en charges | C'est un équipement durable, donc une immobilisation. La date n'est pas donnée : on réintègre la totalité, sans dotation déductible | 34 800,00 | |
| Voiture du PDG (438 000 TTC) | Base amortissable plafonnée à 300 000 TTC. Dotation comptabilisée 438 000 × 20 % × 9/12 = 65 700 ; admise 300 000 × 20 % × 9/12 = 45 000 | 20 700,00 | |
| Provision pour propre assureur | Non déductible | 42 600,00 | |
| Intérêts d'associés | Comptabilisés 46 125, admis 26 812,50 | 19 312,50 | |
| Gain de change réalisé (13 300) | Produit imposable | — | |
| Garantie reçue sur prêt de matériel (12 000) | Dépôt à restituer : c'est une dette, pas un produit | | 12 000,00 |
| Reprise de la provision pour congés payés | Provision non déductible en N-1, supposée réintégrée : on la déduit | | 16 600,00 |
| Reprise de la provision pour perte de change | Provision déduite en N-1 : reprise imposable | — | |
| Intérêt de l'avance à la filiale | Comptabilisé pour son brut : aucune correction du résultat, la TPPRF s'imputera sur l'impôt | — | |
| **Totaux** | | **478 977,50** | **28 600,00** |

**Résultat net fiscal N = 450 377,50 dh**

*Si l'on retient une date de mise en service pour la climatisation, on déduit la dotation correspondante. Exemple : amortissement sur 10 ans en année pleine, soit 3 480 déductibles.*

**Détail des intérêts d'associés.** Capital de 2 000 000, entièrement libéré, retenu comme plafond.

| Période | Avances | Intérêts à 4,5 % | Montant admis | Intérêts à 2,75 % |
|---|---:|---:|---:|---:|
| 01/04 → 30/06 | 1 200 000 | 13 500 | 1 200 000 | 8 250,00 |
| 01/07 → 30/09 | 2 200 000 | 24 750 | 2 000 000 | 13 750,00 |
| 01/10 → 31/12 | 700 000 | 7 875 | 700 000 | 4 812,50 |
| **Total** | | **46 125** | | **26 812,50** |

### 3/ Impôt exigible de N

- IS = 450 377,50 × 30 % = **135 113 dh**
- CM = 15 877 000 × 0,5 % = 79 385

L'IS est supérieur à la CM : **impôt dû = 135 113 dh**. Sur ce montant :
- on impute l'excédent de CM de N-1 : −8 230 ;
- on impute la TPPRF retenue par la filiale : −2 488 ;
- il reste **124 395 dh** à couvrir par les acomptes et la régularisation.

### 4/ Mode de paiement

- **4 acomptes** de 25 % de l'impôt de N-1 (94 650), soit **23 662,50 dh**, avant la fin des 3e, 6e, 9e et 12e mois de N.
- **Régularisation** avant le 31/03/N+1 : 135 113 − 8 230 − 2 488 − 94 650 = **29 745 dh**.
