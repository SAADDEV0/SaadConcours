> Corrigé indicatif rédigé par SaadConcours, pas une correction officielle de la FSJES Aïn Chock. Ce sujet est celui du concours de la **formation continue** du Master CCA (session de septembre 2022), distinct de celui de la formation initiale. Le sujet ne date pas l'exercice N : nous appliquons le barème de l'IS des exercices 2021 et 2022 (10 % jusqu'à 300 000 DH, 20 % jusqu'à 1 000 000 DH, 31 % au-delà), celui que retiennent les propositions de la question 14, et la cotisation minimale à 0,5 % donnée par le sujet. Toutes les réponses ont été recalculées.
>
> Le sujet contient plusieurs erreurs : deux montants mal imprimés sur les factures (2 220 au lieu de 2 250, 231 120 au lieu de 213 120), un dirham d'écart dans la question 3, et aucune proposition juste aux questions 8, 13 et 14. Pour chacune, nous donnons le résultat exact puis la proposition que le correcteur attendait sans doute.

## Méthode

QCM de 14 questions à une ou plusieurs bonnes réponses, en 1 h 40, suivi de 4 questions de cours. Six questions de comptabilité générale portent sur deux cas : une importation et des achats courants. Huit questions de fiscalité suivent la trame classique d'Aïn Chock : réintégrations, déductions, résultat fiscal, impôt exigible. Les propositions fiscales sont enchaînées : une erreur aux questions 7 à 12 se répercute sur les questions 13 et 14. Posez donc chaque retraitement au brouillon avant de cocher.

## Comptabilité

### Question 1 — Coût du matériel importé : **b) 955 913,60 dh**

Le matériel est converti au cours du jour de réception (10,82). Les droits et taxes de douane s'ajoutent au coût. La TVA à l'importation est récupérable : le matériel sert à l'activité taxable.

| Élément | Calcul | Montant |
|---|---|---:|
| Prix net facturé | 83 980 € × 10,82 | 908 663,60 |
| Droits et taxes de douane | | 47 250,00 |
| **Coût d'acquisition** | | **955 913,60** |

*Pièges :* c) convertit au cours du virement (83 980 × 10,85 + 47 250 = 958 433). L'écart de cours ultérieur est une perte de change, pas un élément du coût. a) ne correspond à aucun calcul cohérent.

*Remarque :* la quittance calcule la TVA sur la seule valeur de la facture (908 663,60 × 20 % = 181 732,72). En principe, la base de la TVA à l'importation comprend aussi les droits de douane, soit 955 913,60 × 20 % = 191 182,72. On retient le montant de la quittance, puisque c'est celui qui a été payé.

### Question 2 — Écriture d'acquisition : **b)**

| Compte | Intitulé | Débit | Crédit |
|---|---|---:|---:|
| 2332 | Matériel et outillage | 955 913,60 | |
| 34551 | État, TVA récupérable sur immobilisations | 181 732,72 | |
| 4481 | Dettes sur acquisitions d'immobilisations | | 908 663,60 |
| 4458* | État Douane | | 228 982,72 |

La dette envers le fournisseur étranger est enregistrée au cours du jour de réception. La quittance de douane (droits + TVA) constitue une dette distincte envers l'Administration des douanes. Le sujet la place au compte 4458 (« État, autres comptes créditeurs ») ; si elle est réglée immédiatement, on crédite directement la banque.

*Pièges :* a) mélange la dette du fournisseur et celle de la douane dans un seul compte. Le total est juste, mais les tiers ne le sont pas. c) prend le cours du virement et le compte 1486, réservé aux dettes de financement envers les fournisseurs d'immobilisations (crédit à plus d'un an).

### Question 3 — Virement au fournisseur étranger : **c)**

La dette de 908 663,60 (au cours de 10,82) est réglée au cours de 10,85 :
- décaissement pour le fournisseur : 83 980 × 10,85 = 911 183,00 ;
- perte de change : 83 980 × (10,85 − 10,82) = **2 519,40** (compte 6331) ;
- frais bancaires : 1 120 HT + TVA 10 % 112.

| Compte | Intitulé | Débit | Crédit |
|---|---|---:|---:|
| 4481 | Dettes sur acquisitions d'immobilisations | 908 663,60 | |
| 6147 | Services bancaires | 1 120,00 | |
| 34552 | État, TVA récupérable sur charges | 112,00 | |
| 6331 | Pertes de change | 2 519,40 | |
| 5141 | Banques | | 912 415,00 |

La proposition c) inscrit 912 414,00 au crédit de la banque. La somme exacte est 912 415,00 (908 663,60 + 1 120 + 112 + 2 519,40) : c'est une erreur d'un dirham du sujet, et c) reste la bonne réponse.

*Pièges :* a) constate un gain alors que l'euro a monté entre la réception et le virement : quand on doit des devises qui s'apprécient, on perd. b) solde une dette qui n'a jamais été enregistrée à 958 433,60.

### Question 4 — Facture n° 665 : **a)**

L'escompte de règlement de 2 % est une réduction **financière**. Le CGNC interdit de compenser charges et produits : l'achat est enregistré pour son montant avant escompte (12 220), et l'escompte va au compte 7386 « Escomptes obtenus ». La TVA est calculée sur le net financier (11 975,60 × 20 % = 2 395,12).

| Compte | Intitulé | Débit | Crédit |
|---|---|---:|---:|
| 6125 | Achats non stockés de matières et fournitures | 12 220,00 | |
| 34552 | État, TVA récupérable sur charges | 2 395,12 | |
| 7386 | Escomptes obtenus | | 244,40 |
| 4411 | Fournisseurs | | 14 370,72 |

*Pièges :* b) est équilibrée mais compense l'escompte avec l'achat. c) utilise un compte 7336 qui n'existe pas et présente une dette de fournitures comme une dette d'immobilisation.

*Erreur du sujet :* 50 rames × 45 dh = 2 250, et non 2 220. Les montants de la facture découlent tous de 2 220 : on les reprend tels quels.

### Question 5 — Coût des deux voitures de service : **213 120 dh (la proposition attendue est b)**

Des voitures affectées au DRH et au directeur commercial sont des véhicules de transport de personnes. Leur TVA n'est **pas récupérable** (article 106 du CGI) : elle s'ajoute au coût.

$$\text{Coût} = 177\,600 \times 1{,}20 = 213\,120 \text{ dh}$$

La facture affiche un total de 231 120. C'est une inversion de chiffres : 177 600 + 35 520 = 213 120. La proposition b) reprend ce total erroné, et le raisonnement attendu est bien « coût = TTC ». Cochez b) en sachant que le bon montant est 213 120.

*Piège :* a) (177 600, le net HT) suppose que la TVA est récupérable, ce qui est faux pour des voitures de tourisme. c) ne correspond à aucun calcul.

### Question 6 — Dotation au 31/12/N : **14 208 dh (la proposition attendue est b)**

L'amortissement court à partir du premier jour du mois d'acquisition (septembre), soit 4 mois en N :

$$213\,120 \times 20\,\% \times \frac{4}{12} = 14\,208 \text{ dh}$$

Avec le total erroné de la facture : 231 120 × 20 % × 4/12 = 15 408, soit la proposition b). Elle est cohérente avec la question 5. a) (46 224) compte une année entière, et c) (11 840) amortit le seul montant HT.

## Fiscalité

### Question 7 — Dons non déductibles : **b) 28 478 dh**

- Les dons aux **œuvres sociales des entreprises** sont déductibles dans la limite de **2 ‰ du chiffre d'affaires** (article 10 du CGI) : 15 761 000 × 2 ‰ = 31 522. Excédent à réintégrer : 50 000 − 31 522 = **18 478**.
- Une **association de lauréats d'une école privée** ne figure pas parmi les bénéficiaires prévus par le CGI. Elle n'est pas reconnue d'utilité publique. Le don est réintégré en totalité : **10 000**.

Total : 18 478 + 10 000 = **28 478 dh**.

*Pièges :* a) réintègre tous les dons. c) oublie le don à l'association.

### Question 8 — Dotation de la voiture du PDG : **93 300 dh, aucune proposition n'est juste**

- Dotation comptable annuelle : 438 000 / 5 = 87 600. Rattrapage de N-1 (9 mois, avril à décembre) : 65 700. Total passé en N : 65 700 + 87 600 = 153 300, comme l'indique le sujet.
- **Rattrapage de N-1 :** une dotation qui n'est pas comptabilisée dans son exercice est perdue fiscalement. On réintègre **65 700**.
- **Dotation de N :** la base déductible d'une voiture de tourisme est plafonnée à 300 000 DH TTC, répartie sur 5 ans, soit 60 000 par an. On réintègre 87 600 − 60 000 = **27 600**.

Réintégration totale : 65 700 + 27 600 = **93 300 dh**.

Aucune proposition ne donne ce montant :
- a) (27 600) ne traite que la dotation de N et ignore le rattrapage ;
- b) (48 300 = 153 300 − 45 000 − 60 000) applique le plafond aux deux dotations, comme si le rattrapage de N-1 restait déductible ;
- c) (115 200) ne correspond à aucun raisonnement cohérent.

La proposition la plus proche du raisonnement attendu est b), mais elle contredit la règle que la question de cours n° 4 demande justement d'expliquer.

### Question 9 — Intérêts des comptes courants d'associés : **a) 13 937,50 dh**

Deux limites s'appliquent : le **taux** fiscalement admis (2,25 %) et un **plafond** : le total des avances rémunérées ne peut dépasser le capital social entièrement libéré (2 000 000).

| Période | Solde des avances | Intérêts comptabilisés (3,5 %) | Base admise | Intérêts déductibles (2,25 %) |
|---|---:|---:|---:|---:|
| 01/04 – 30/06 | 1 200 000 | 10 500,00 | 1 200 000 | 6 750,00 |
| 01/07 – 30/09 | 2 200 000 | 19 250,00 | 2 000 000 | 11 250,00 |
| 01/10 – 31/12 | 700 000 | 6 125,00 | 700 000 | 3 937,50 |
| **Total** | | **35 875,00** | | **21 937,50** |

Réintégration : 35 875 − 21 937,50 = **13 937,50 dh**.

*Piège :* b) (12 812,50) oublie le plafond du capital au troisième trimestre, où le solde atteint 2 200 000.

### Question 10 — Garantie reçue : **c) à déduire**

Une garantie (dépôt) reçue pour le prêt d'un matériel doit être **restituée** au retour du matériel. C'est une dette (compte 1487 « Dépôts et cautionnements reçus ») et non un produit. Comptabilisée à tort en produits, elle est **déduite** du résultat fiscal : −12 000.

### Question 11 — Reprises sur provisions : **c) 16 600 dh**

- La provision pour **redressement fiscal** couvre une charge non déductible (impôt rappelé, pénalités). Sa dotation a été réintégrée en N-1. La reprise n'est donc pas imposable : on la **déduit** (−16 600).
- La provision pour **perte de change latente** a été déduite en N-1, en contrepartie de l'imposition des écarts de conversion passif. Sa reprise est imposable : **aucune correction**.

Seuls 16 600 sont à corriger. a) (29 050) déduit les deux reprises.

### Question 12 — Intérêts reçus de la filiale : **c) aucun retraitement**

L'intérêt a été comptabilisé pour son montant **brut** (12 440). La retenue de 20 % (2 488 = 12 440 × 20 %) est déjà comprise dans le produit : le résultat fiscal n'a rien à corriger. La TPPRF retenue par la filiale est un **crédit d'impôt** de 2 488. Le sujet précise qu'elle n'a pas été imputée sur les acomptes : on l'impute à la liquidation de l'IS de N (question 14).

*Piège :* 3 110 (a et b) traite 12 440 comme un montant net (12 440 / 0,8 − 12 440 = 3 110). Ce calcul n'est juste que si seul le net a été comptabilisé, ce que le sujet exclut en écrivant « montant brut ».

### Question 13 — Résultat net fiscal : **1 451 580,50 dh, aucune proposition n'est juste**

| Élément | Réintégrations | Déductions |
|---|---:|---:|
| Résultat avant impôt | 1 344 465,00 | |
| Dons non déductibles (Q7) | 28 478,00 | |
| Voiture du PDG : rattrapage de N-1 et excédent de N (Q8) | 93 300,00 | |
| Intérêts des comptes courants d'associés (Q9) | 13 937,50 | |
| Garantie reçue comptabilisée en produit (Q10) | | 12 000,00 |
| Reprise de la provision pour redressement fiscal (Q11) | | 16 600,00 |
| **Totaux** | **1 480 180,50** | **28 600,00** |
| **Résultat net fiscal** | **1 451 580,50** | |

Avec la proposition b) de la question 8 (48 300 au lieu de 93 300), on obtient 1 406 580,50 : ce n'est pas non plus une proposition du sujet.

**Lecture des propositions.** Elles sont construites autour de a) : b) = a) − 12 450 (b déduit en plus la reprise sur perte de change, qui est imposable) et c) = a) + 87 600 (c réintègre en plus une dotation annuelle entière, qui est déductible dans la limite du plafond). Par élimination, la réponse attendue est donc **a)**. Son écart avec notre calcul (137 460) ne s'explique par aucune combinaison des retraitements du sujet.

### Question 14 — Impôt exigible de N : **309 989,96 dh, aucune proposition n'est juste**

**Impôt sur les sociétés :**

$$IS = 1\,451\,580{,}50 \times 31\,\% - 140\,000 = 309\,989{,}96 \text{ dh}$$

(140 000 est la somme à déduire du barème : 300 000 × 21 % + 700 000 × 11 %.)

**Cotisation minimale :** 15 997 600 × 0,5 % = 79 988. L'IS est supérieur à la CM : **impôt exigible = 309 989,96 dh**.

La TPPRF de 2 488 vient ensuite **en déduction de l'impôt à payer**, lors de la régularisation : 309 989,96 − 2 488 = 307 501,96 dh, sous déduction des acomptes versés.

**Lecture des propositions.** c) (352 602,55) est l'IS calculé sur 1 589 040,50, la proposition a) de la question 13. a) (348 746) est l'IS calculé sur 1 576 600 (la proposition b) de la question 13, arrondie). b) (345 636) retranche ensuite 3 110 de a). En cohérence avec la question 13, la réponse attendue est **c)**.

*Remarque :* l'entreprise fabrique des pièces automobiles. Si elle remplit les conditions du taux de 28 % réservé à certaines sociétés industrielles, la tranche au-delà de 1 000 000 est taxée à 28 % : IS = 1 451 580,50 × 28 % − 110 000 = 296 442,54 dh. Le sujet ne donne pas ces conditions, et ses propositions appliquent 31 %.

## Questions de cours

### 1/ Principes du plan comptable marocain et leur intérêt

Le CGNC pose **sept principes**, qui servent un objectif : donner une **image fidèle** du patrimoine, de la situation financière et des résultats.

| Principe | Contenu | Intérêt |
|---|---|---|
| Continuité d'exploitation | L'entreprise est supposée poursuivre son activité. | Justifie l'évaluation au coût et l'étalement des charges (amortissements). |
| Permanence des méthodes | Les mêmes méthodes d'un exercice à l'autre. | Comparabilité des comptes dans le temps. |
| Coût historique | Les biens sont inscrits à leur coût d'entrée, sans réévaluation. | Évaluation objective et vérifiable. |
| Spécialisation des exercices | Chaque exercice supporte ses charges et ses produits (régularisations). | Résultat exact de chaque période. |
| Prudence | Les pertes probables sont constatées, les gains latents ne le sont pas. | Protège les tiers contre un résultat surévalué. |
| Clarté | Pas de compensation, classement correct des opérations. | Lisibilité des états de synthèse. |
| Importance significative | Toute information qui peut influencer le jugement des lecteurs est donnée. | Pertinence de l'information (ETIC). |

### 2/ Plan comptable d'une entreprise française installée au Maroc

Une société de droit marocain, même filiale d'un groupe français, est soumise à la loi n° 9-88 relative aux obligations comptables des commerçants. Elle tient sa comptabilité selon le **CGNC**, en dirhams. Il en va de même d'une succursale (établissement au Maroc d'une société française) pour son activité marocaine.

Pour la consolidation du groupe, les comptes sont ensuite **retraités** aux normes de la société mère (règles françaises ou IFRS). Ce retraitement ne remplace pas la comptabilité légale marocaine. Seuls quelques secteurs ont un plan propre dérivé du CGNC : banques (PCEC), assurances.

### 3/ SARL déficitaire : impôt dû et traitement du déficit

- **Impôt dû :** même en cas de déficit, la SARL soumise à l'IS paie la **cotisation minimale**. Sa base comprend le chiffre d'affaires, les produits accessoires, les produits financiers et les subventions reçues. Au moment du sujet, le taux est de 0,5 %, avec un minimum de 3 000 DH. Une société nouvelle en est exonérée pendant ses 36 premiers mois d'activité. La CM payée est définitivement acquise au Trésor : depuis 2016, elle n'est plus imputable sur l'IS des exercices suivants.
- **Déficit (article 12 du CGI) :** il s'impute sur les bénéfices des exercices suivants. La part du déficit qui correspond aux **amortissements** est reportable **sans limite de durée**. Le reste n'est reportable que sur les **quatre exercices** qui suivent l'exercice déficitaire. On impute d'abord le déficit hors amortissements, qui risque d'expirer.

### 4/ Dotation aux amortissements oubliée en N-1

- **Comptablement :** on corrige l'omission en N, pour que la valeur nette comptable du bien soit juste. On enregistre la dotation de N et le rattrapage de N-1, de préférence en charge non courante (6591 « D.N.C. aux amortissements exceptionnels ») afin de ne pas fausser le résultat courant. L'ETIC mentionne la correction.
- **Fiscalement :** une dotation n'est déductible qu'au titre de l'exercice auquel elle se rapporte et à condition d'y être comptabilisée. Le rattrapage de N-1 n'est donc **pas déductible** en N : on le **réintègre**. La dotation de N reste déductible, dans ses limites (plafond de 300 000 DH TTC pour une voiture de tourisme, voir la question 8).

## Récapitulatif

| Q | Réponse | Q | Réponse |
|---|---|---|---|
| 1 | b | 8 | aucune (93 300) ; attendue : b |
| 2 | b | 9 | a |
| 3 | c | 10 | c |
| 4 | a | 11 | c |
| 5 | b (montant exact : 213 120) | 12 | c |
| 6 | b (montant exact : 14 208) | 13 | aucune (1 451 580,50) ; attendue : a |
| 7 | b | 14 | aucune (309 989,96) ; attendue : c |
