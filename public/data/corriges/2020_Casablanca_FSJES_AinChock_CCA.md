> Corrigé indicatif rédigé par SaadConcours, pas une correction officielle de la FSJES Aïn Chock. L'épreuve (formation continue, rentrée 2020) ne date pas l'exercice N : nous l'assimilons à 2020, et N-1 à 2019. Nous appliquons donc :
> - IS de N-1 (2019) : barème progressif 10 % / 17,5 % / 31 % (sommes à déduire 0 ; 22 500 ; 157 500) ;
> - IS de N (2020, loi de finances 2020) : barème progressif 10 % / 20 % / 31 % (sommes à déduire 0 ; 30 000 ; 140 000). CCAFC est une société commerciale : le taux de 28 % des sociétés industrielles ne la concerne pas ;
> - cotisation minimale (CM) : 0,5 % pour les deux exercices. La LF 2020 a ramené à 0,5 % le taux de 0,75 % voté pour 2019, qui n'a jamais été appliqué ;
> - charges réglées en espèces : déductibles dans la limite de 5 000 DH TTC par jour et par fournisseur (règle de la LF 2019).
>
> Deux chiffres du sujet posent problème (le signe du résultat de N-1 et le montant des charges non déductibles de N-1) : nous les traitons au II, question 1. Aucun ne change les conclusions.

## I/ Comptabilité générale

### 1/ Écritures au journal

**08/03/N : avance versée à la commande du camion.** Le camion n'est pas encore livré : l'avance est une immobilisation en cours.

| Compte | Intitulé | Débit | Crédit |
|---|---|---:|---:|
| 2397 | Avances et acomptes versés sur commandes d'immobilisations corporelles | 228 450,00 | |
| 5141 | Banques | | 228 450,00 |

**04/04/N : réception de la facture n° 7765/N.** Le coût d'acquisition comprend le prix, l'option et les frais d'immatriculation. Ces frais sont un accessoire nécessaire pour mettre le camion en circulation, et ils ne supportent pas de TVA :

662 000 + 18 000 + 12 450 = **692 450 dh**

Le camion est un véhicule utilitaire, pas une voiture de tourisme : sa TVA de 136 000 est **récupérable**. L'avance déjà versée est imputée sur la dette.

| Compte | Intitulé | Débit | Crédit |
|---|---|---:|---:|
| 2340 | Matériel de transport | 692 450,00 | |
| 34551 | État, TVA récupérable sur immobilisations | 136 000,00 | |
| 2397 | Avances et acomptes versés sur commandes d'immobilisations corporelles | | 228 450,00 |
| 4481 | Dettes sur acquisitions d'immobilisations | | 600 000,00 |
| | **Totaux** | **828 450,00** | **828 450,00** |

**Règlement du solde par la BMCI.** La banque vire directement 600 000 dh au fournisseur. Pour CCAFC, la dette envers SCANIA-Maroc devient une dette d'emprunt à 4 ans.

| Compte | Intitulé | Débit | Crédit |
|---|---|---:|---:|
| 4481 | Dettes sur acquisitions d'immobilisations | 600 000,00 | |
| 1481 | Emprunts auprès des établissements de crédit | | 600 000,00 |

*On peut aussi passer par le compte 5141 : encaissement de l'emprunt (5141 à 1481), puis virement au fournisseur (4481 à 5141). Le résultat est le même.*

**02/07/N : réception de la facture n° 13 420/N.** La facture mélange une immobilisation (les micro-ordinateurs) et une charge (le papier listing, fourniture non stockable). On sépare donc la TVA et la dette :

| Compte | Intitulé | Débit | Crédit |
|---|---|---:|---:|
| 2355 | Matériel informatique | 24 000,00 | |
| 6125 | Achats non stockés de matières et fournitures | 600,00 | |
| 34551 | État, TVA récupérable sur immobilisations (24 000 × 20 %) | 4 800,00 | |
| 34552 | État, TVA récupérable sur charges (600 × 20 %) | 120,00 | |
| 4481 | Dettes sur acquisitions d'immobilisations (24 000 + 4 800) | | 28 800,00 |
| 4411 | Fournisseurs (600 + 120) | | 720,00 |
| | **Totaux** | **29 520,00** | **29 520,00** |

**Pièges :**
- le fournisseur d'une immobilisation se crédite au **4481**, pas au 4411 ;
- la TVA d'un camion est récupérable : seule celle des voitures de tourisme ne l'est pas ;
- le papier n'est pas une immobilisation : il va en charge (6125), avec sa TVA au 34552.

### 2/ Dotations aux amortissements de l'exercice N

| Immobilisation | Base | Taux | Durée retenue en N | Dotation N |
|---|---:|---:|---|---:|
| Frais d'acquisition d'immobilisations | 234 600 | 20 % | 5ᵉ et dernière annuité | 46 920,00 |
| Bâtiments | 1 258 000 | 2 % (1/50) | 12 mois | 25 160,00 |
| Camion | 692 450 | 20 % (1/5) | 9 mois (avril à décembre) | 103 867,50 |
| Micro-ordinateurs | 24 000 | 37,5 % | 6 mois (juillet à décembre) | 4 500,00 |
| **Total** | | | | **180 447,50** |

**Détail des calculs :**
- **Immobilisations en non-valeurs.** Elles s'amortissent par annuités constantes, sans prorata temporis, sur 5 ans au plus. Les frais engagés en N-4 reçoivent leur 1ʳᵉ annuité en N-4, et leur 5ᵉ en N : 234 600 × 20 % = 46 920. Ils sont totalement amortis à la fin de N.
- **Bâtiments.** 1 258 000 / 50 = 25 160 par an. Acquis le 01/04/N-3, ils ont une année pleine en N. Cumul à la fin de N : 18 870 (9 mois en N-3) + 3 × 25 160 = 94 350, soit une VNA de 1 163 650.
- **Camion.** 692 450 × 20 % × 9/12 = 103 867,50, à compter d'avril (acquisition le 03/04). VNA à la fin de N : 588 582,50.
- **Micro-ordinateurs.** En dégressif, le taux linéaire (1/4 = 25 %) est multiplié par le coefficient de **1,5** prévu pour une durée de 3 ou 4 ans, soit 37,5 %. Le prorata part du 1ᵉʳ jour du mois d'acquisition : 24 000 × 37,5 % × 6/12 = 4 500. VNA à la fin de N : 19 500.

### 3/ Écriture des amortissements au 31/12/N

| Compte | Intitulé | Débit | Crédit |
|---|---|---:|---:|
| 61912 | D.E.A. des charges à répartir (frais d'acquisition des immobilisations) | 46 920,00 | |
| 61932 | D.E.A. des constructions | 25 160,00 | |
| 61934 | D.E.A. du matériel de transport | 103 867,50 | |
| 61935 | D.E.A. des mobiliers, matériels de bureau et aménagements divers | 4 500,00 | |
| 2812 | Amortissements des charges à répartir | | 46 920,00 |
| 2832 | Amortissements des constructions | | 25 160,00 |
| 2834 | Amortissements du matériel de transport | | 103 867,50 |
| 2835 | Amortissements du mobilier, matériel de bureau et aménagements divers | | 4 500,00 |
| | **Totaux** | **180 447,50** | **180 447,50** |

*Complément apprécié : les frais d'acquisition étant totalement amortis à la fin de N, on les sort de l'actif (débit 2812, crédit 2121 « Frais d'acquisition des immobilisations », 234 600).*

### Question : le principe du coût historique

C'est l'un des sept principes comptables fondamentaux du CGNC. Un bien entre dans les comptes à sa **valeur d'origine**, et cette valeur ne bouge plus ensuite, quelle que soit l'évolution de sa valeur de marché ou du pouvoir d'achat de la monnaie.
- **Valeur d'entrée :**
  - coût d'acquisition pour un bien acheté (prix + frais accessoires, hors TVA récupérable) ;
  - coût de production pour un bien produit par l'entreprise ;
  - valeur actuelle pour un bien reçu en apport ou à titre gratuit.
- **Illustration dans le sujet :** le camion reste inscrit pour 692 450 dh tant qu'il est au bilan. S'il perd de la valeur, on constate un amortissement ou une provision (principe de prudence). S'il en gagne, on ne fait rien : la plus-value n'apparaîtra qu'à la cession.
- **Intérêt :** des valeurs objectives et vérifiables, fondées sur des pièces justificatives.
- **Limite :** en période d'inflation, les actifs et les amortissements sont sous-évalués. Seule une **réévaluation** autorisée par la loi permet de déroger au principe.

---

## II/ Fiscalité d'entreprise

### A/ Imposition des résultats

#### 1/ Résultat net fiscal de l'exercice N-1

| Élément | Montant |
|---|---:|
| Résultat avant impôt (déficit) | −87 950,00 |
| + Charges non déductibles | +395 620,00 |
| − Produits non imposables | −3 460,00 |
| **Résultat net fiscal N-1** | **304 210,00** |

**Lecture des chiffres du sujet :**
- Les charges non déductibles sont imprimées « 395 620 00,00 ». Nous lisons **395 620,00**. L'autre lecture, 39 562 000, donnerait des charges non déductibles près de trois fois supérieures au chiffre d'affaires, ce qui n'est pas plausible.
- Le signe « (−) » du résultat avant impôt n'apparaît pas sur toutes les copies du sujet. Si on lisait un bénéfice de 87 950, le résultat fiscal serait de 480 110 et l'IS de 61 519,25 : il resterait inférieur à la CM (question 2), et la conclusion ne changerait pas.

#### 2/ Impôt exigible de l'exercice N-1

- **IS** (barème 2019) : 304 210 × 17,5 % − 22 500 = **30 736,75**, soit 300 000 × 10 % + 4 210 × 17,5 %.
- **CM** : 14 124 800 × 0,5 % = **70 624,00**.

La CM est supérieure à l'IS : **impôt exigible N-1 = 70 624 dh**.

*Au taux de 0,75 % voté par la LF 2019, on obtiendrait 105 936 : la conclusion est la même. Depuis 2016, l'excédent de CM sur l'IS n'est plus imputable sur l'IS des exercices suivants : c'est un impôt minimum définitif.*

#### 3/ Résultat net fiscal de l'exercice N

| Élément | Traitement et justification | Réintégration | Déduction |
|---|---|---:|---:|
| Résultat avant impôt | | 989 560,80 | |
| Fournitures de bureau payées en espèces | 18 600 TTC, soit 15 500 HT et 3 100 de TVA. Une charge réglée en espèces n'est déductible que dans la limite de 5 000 DH TTC par jour et par fournisseur, soit 4 166,67 HT. Non déductible : 15 500 − 4 166,67 | 11 333,33 | |
| Voiture de tourisme du directeur commercial | Immatriculée au nom de la société, elle est amortissable, mais sur une base plafonnée à 300 000 DH TTC. Dotation comptabilisée : 462 720 × 20 % × 9/12 = 69 408. Dotation admise : 300 000 × 20 % × 9/12 = 45 000 | 24 408,00 | |
| Provision pour pénalités fiscales | Les amendes et pénalités ne sont pas déductibles. Une provision constituée pour les couvrir ne l'est donc pas non plus | 124 560,00 | |
| Reprise de la provision pour gros travaux | Constituée en N-2 pour financer de futurs aménagements, qui seront immobilisés et amortis : ce n'est ni une perte ni une charge probable. Elle a donc été réintégrée en N-2. Sa reprise ne doit pas être imposée une seconde fois | | 134 600,00 |
| Intérêt créditeur comptabilisé pour son net | Le produit imposable est le montant brut : 14 520 / 0,8 = 18 150. La TPPRF de 3 630 manque au résultat | 3 630,00 | |
| Écart de conversion passif N-1 | Gain latent déjà imposé en N-1, réalisé ou repris en N : on le déduit pour ne pas l'imposer deux fois | | 6 540,00 |
| Écart de conversion passif N | Le gain de change latent est imposable au titre de l'exercice où il est constaté | 8 780,00 | |
| **Totaux** | | **1 162 272,13** | **141 140,00** |

**Résultat net fiscal N = 1 162 272,13 − 141 140 = 1 021 132,13 dh**

*Hypothèse : la facture de fournitures a été comptabilisée hors taxes (15 500 en charges, 3 100 en TVA récupérable). La limite de 5 000 DH s'apprécie TTC, d'où la fraction déductible de 5 000 / 1,2 = 4 166,67 HT.*

**Pièges :**
- La reprise de 134 600 est **déduite**, pas ignorée : si la provision avait été déductible à l'origine, sa reprise serait imposable. Il faut donc toujours remonter à la constitution de la provision.
- La voiture est immatriculée **au nom de la société** : c'est ce qui rend sa dotation déductible, dans la limite du plafond de 300 000 DH TTC.

#### 4/ Impôt exigible de l'exercice N

- **IS** (barème 2020) : 1 021 132,13 × 31 % − 140 000 = **176 550,96**. Par tranches : 30 000 + 700 000 × 20 % + 21 132,13 × 31 % = 30 000 + 140 000 + 6 550,96.
- **CM** : 18 675 400 × 0,5 % = **93 377,00**.

L'IS est supérieur à la CM : **impôt exigible N = 176 550,96 dh**.

#### 5/ Acomptes de N et régularisation

Les acomptes de N se calculent sur l'impôt dû au titre de l'exercice de référence (N-1), soit la CM de **70 624 dh**. Chaque acompte vaut 25 % de ce montant :

70 624 × 25 % = **17 656 dh**

| Acompte | Montant | Date limite de paiement |
|---|---:|---|
| 1ᵉʳ | 17 656,00 | 31/03/N |
| 2ᵉ | 17 656,00 | 30/06/N |
| 3ᵉ | 17 656,00 | 30/09/N |
| 4ᵉ | 17 656,00 | 31/12/N |
| **Total versé** | **70 624,00** | |

La TPPRF de 3 630, retenue le 20/11/N, aurait pu s'imputer sur le 4ᵉ acompte. Elle ne l'a pas été : on l'impute donc lors de la régularisation.

**Régularisation = 176 550,96 − 70 624 − 3 630 = 102 296,96 dh**

Ce reliquat est versé spontanément avec la déclaration du résultat fiscal, dans les 3 mois qui suivent la clôture, soit **au plus tard le 31/03/N+1**.

**Piège :** calculer les acomptes de N sur l'IS de N. Ils reposent toujours sur l'impôt du dernier exercice clos.

### B/ Questions

**1/ Le principe de non double imposition.** Un même produit ne doit pas être imposé deux fois, ni chez la même entreprise, ni d'une entreprise à l'autre. Trois illustrations :
- **Dans le sujet :** la provision pour gros travaux, non déductible, a été réintégrée en N-2. Sa reprise de 134 600 en N est donc **déduite** du résultat fiscal. C'est aussi le cas de l'écart de conversion passif de N-1 (6 540), imposé en N-1 et déduit en N.
- **Les dividendes :** les produits des actions et parts sociales reçus d'une société soumise à l'IS bénéficient d'un **abattement de 100 %**, car ils ont déjà supporté l'IS chez la société distributrice. Si CCAFC reçoit 50 000 dh de dividendes d'une filiale, elle les comptabilise en produits financiers puis les déduit de son résultat fiscal.
- **La TPPRF :** la retenue à la source sur les intérêts (3 630 dans le sujet) **s'impute** sur l'IS dû. Le produit est imposé une seule fois.

**2/ « L'accessoire suit le principal ».** Un élément accessoire à une opération principale suit le **régime fiscal** de cette opération : imposition ou exonération, taux, fait générateur.
- **En TVA**, le chiffre d'affaires imposable comprend le prix et les recettes accessoires (transport, emballage, frais facturés au client). Elles sont taxées au **même taux** que l'opération principale. Le transport facturé par le vendeur avec la marchandise suit le taux de la marchandise, et non le taux propre au transport.
- **En IS**, les produits accessoires d'une activité (intérêts de retard facturés sur une vente, par exemple) sont imposés avec elle.
- **Le même raisonnement existe en comptabilité :** dans le sujet, les frais d'immatriculation, accessoires du camion, sont incorporés à son coût et amortis avec lui.
