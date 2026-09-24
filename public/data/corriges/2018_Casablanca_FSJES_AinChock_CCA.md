> Corrigé indicatif rédigé par SaadConcours, pas une correction officielle de la FSJES Aïn Chock. Le sujet impose le barème progressif de l'IS de la loi de finances 2018 : 10 % jusqu'à 300 000, 20 % de 300 001 à 1 000 000 et 31 % au-delà, avec des sommes à déduire de 30 000 et 140 000. Pour la cotisation minimale, nous retenons le taux de 0,5 % en vigueur à la date de l'épreuve. Sur le scan, un chiffre de la base de CM de N est surchargé à la main : nous montrons qu'il ne change pas la conclusion.

## I/ Comptabilité générale

La SA MCCA **importe des ordinateurs pour les revendre** : la facture IFOMED est un **achat de marchandises** (compte 6111), pas une immobilisation. Seuls les 4 PC affectés aux secrétaires deviennent des immobilisations. C'est le cœur du sujet.

### 1/ Écritures des pièces d'importation (02/04/N, jour du dédouanement)

La facture en euros est convertie au cours du dédouanement : 123 600 × 10,85 = **1 341 060 dh**. Les droits de douane (67 053) représentent exactement 5 % de cette valeur.

**a) Facture IFOMED**

| Compte | Intitulé | Débit | Crédit |
|---|---|---:|---:|
| 6111 | Achats de marchandises | 1 341 060 | |
| 4411 | Fournisseurs (IFOMED) | | 1 341 060 |

**b) Facture MARSA MAROC.** Les frais de déchargement et de magasinage sont des frais accessoires d'achat, incorporés aux achats.

| Compte | Intitulé | Débit | Crédit |
|---|---|---:|---:|
| 6111 | Achats de marchandises (frais accessoires) | 2 880 | |
| 34552 | État, TVA récupérable sur charges | 576 | |
| 4411 | Fournisseurs (MARSA MAROC) | | 3 456 |

**c) Quittance de douane**

| Compte | Intitulé | Débit | Crédit |
|---|---|---:|---:|
| 6111 | Achats de marchandises (droits et taxes) | 67 053 | |
| 34552 | État, TVA récupérable sur charges | 268 212 | |
| 5141 | Banques | | 335 265 |

*Variante acceptée : enregistrer les frais accessoires en 6142 « Transports » et 6131 « Locations », ou créditer 4458 « État, autres comptes créditeurs » si la quittance n'est pas encore payée.*

### 2/ Paiement du fournisseur français

- Dette inscrite : 1 341 060
- Décaissé en devises : 1 344 768, d'où une **perte de change de 3 708** (123 600 × 0,03)
- Commissions et frais DOC : 4 810 + TVA 481

| Compte | Intitulé | Débit | Crédit |
|---|---|---:|---:|
| 4411 | Fournisseurs (IFOMED) | 1 341 060 | |
| 6331 | Pertes de change | 3 708 | |
| 6147 | Services bancaires | 4 810 | |
| 34552 | État, TVA récupérable sur charges | 481 | |
| 5141 | Banques | | 1 350 059 |

*L'avis de virement est daté du 18/04 et le texte parle du 20/04 : on retient la date de l'avis. Cela ne change aucun montant.*

### 3/ Mise à disposition de 4 PC VEGA 342 (05/07/N)

Les PC quittent le circuit des marchandises pour devenir du matériel informatique. On les évalue à leur **coût d'achat complet**.
- Prix net unitaire : 165 € × (1 − 4 %) = 158,40 €, soit 158,40 × 10,85 = 1 718,64 dh.
- Frais accessoires (2 880 + 67 053 = 69 933), répartis au prorata de la valeur d'achat : coefficient 1 + 69 933 / 1 341 060 = 1,052148.
- Coût unitaire : 1 718,64 × 1,052148 = 1 808,26 dh, soit pour 4 PC **7 233,05 dh**.

| Compte | Intitulé | Débit | Crédit |
|---|---|---:|---:|
| 2355 | Matériel informatique | 7 233,05 | |
| 7197 | Transferts de charges d'exploitation | | 7 233,05 |

*Variante acceptée : créditer directement 6111 « Achats de marchandises », puisque l'achat date du même exercice. Beaucoup de candidats oublient les frais accessoires et retiennent 4 × 1 718,64 = 6 874,56 : la méthode sera sanctionnée, pas le principe.*

### 4/ Amortissement au 31/12/N

- Durée de 6 ans et 8 mois, soit un taux linéaire de 15 % (1 ÷ 6,667).
- Durée supérieure à 6 ans : coefficient dégressif **3**, soit un taux dégressif de **45 %**.
- Point de départ : 1er jour du mois d'acquisition (juillet), soit 6 mois.

7 233,05 × 45 % × 6/12 = **1 627,44 dh**

| Compte | Intitulé | Débit | Crédit |
|---|---|---:|---:|
| 6193 | Dotations d'exploitation aux amortissements des immobilisations corporelles | 1 627,44 | |
| 2835 | Amortissements du mobilier, matériel de bureau et aménagements divers | | 1 627,44 |

**Piège :** la durée de 6 ans et 8 mois est choisie pour faire basculer le coefficient de 2 à 3.

### Question : traitement de la TVA figurant sur une facture reçue

- **TVA déductible** : elle ne fait pas partie du coût. Elle est débitée au compte 3455, en 34551 pour une immobilisation et en 34552 pour une charge. Elle s'impute sur la TVA facturée de la déclaration du mois ou du trimestre de paiement de la facture.
- **TVA non déductible** : elle est incorporée au coût du bien ou de la charge. Exemples : véhicule de tourisme, fraction non admise par le prorata, dépense payée en espèces au-delà du seuil légal, bien non affecté à l'exploitation.
- Pour un **assujetti partiel**, la TVA est déductible au prorata, avec régularisation en fin d'année.

## II/ Fiscalité

### 1/ Impôt exigible de l'exercice N-1

L'exercice N-1 est déficitaire, donc seule la cotisation minimale est due :

88 760 800 × 0,5 % = **443 804 dh**

*La LF 2019, votée après ce concours, a relevé le taux à 0,75 % et l'a appliqué rétroactivement à l'exercice 2018 : 665 706 dh. Mentionner la date de la loi montre au jury qu'on connaît le sujet.*

### 2/ Résultat net fiscal de l'exercice N

| Élément | Traitement et justification | Réintégration | Déduction |
|---|---|---:|---:|
| Résultat avant impôt | | 1 324 658,60 | |
| Véhicule utilitaire amorti sur le TTC | La TVA d'un véhicule de transport de marchandises est récupérable. Base amortissable correcte : 487 500. Dotation comptabilisée 585 000 × 20 % × 3/12 = 29 250 ; dotation admise 487 500 × 20 % × 3/12 = 24 375 | 4 875,00 | |
| Dons aux œuvres sociales | Plafond de 2 ‰ du CA : 86 547 900 × 2 ‰ = 173 095,80. Excédent : 220 000 − 173 095,80 | 46 904,20 | |
| Intérêts des comptes d'associés | Comptabilisés à 4,5 % : 45 000. Admis à 2,5 % : 25 000. Les avances ne dépassent jamais le capital (2 000 000) | 20 000,00 | |
| Intérêt créditeur comptabilisé pour son net | Le produit imposable est le brut (65 420). La TPPRF de 13 084 manque au résultat ; elle sera imputée sur l'impôt | 13 084,00 | |
| Reprise de 15 700 (provision pour pénalité fiscale) | La provision n'était pas déductible en N-3 : sa reprise ne doit pas être taxée | | 15 700,00 |
| Reprise de 3 453 (perte de change latente) | Provision déduite en N-1 : la reprise est imposable | — | |
| **Totaux** | | **1 409 521,80** | **15 700,00** |

**Résultat fiscal avant imputation** : **1 393 821,80**

**Imputation du déficit N-1** : il provient des amortissements, donc il est reportable sans limite de durée.

1 393 821,80 − 333 342 = **1 060 479,80 dh**

**Détail des intérêts comptabilisés à 4,5 % :**
- HAMZA : 800 000 × 4,5 % × 9/12 + 200 000 × 4,5 % × 3/12 = 27 000 + 2 250 = 29 250
- RAHIM : 200 000 × 4,5 % × 9/12 + 400 000 × 4,5 % × 6/12 = 6 750 + 9 000 = 15 750
- Total : 45 000. Au taux admis, 45 000 × 2,5/4,5 = 25 000.

### 3/ Impôt exigible de l'exercice N

- **IS** (barème progressif LF 2018) : 1 060 479,80 × 31 % − 140 000 = **188 749 dh**
- **CM** : la base de N est lisible « 89 ▢43 200 », avec un chiffre surchargé à la main. Quel que soit ce chiffre (de 89 043 200 à 89 943 200), la CM est comprise entre **445 216 et 449 716 dh**. Avec la lecture la plus probable, 89 943 200, **CM = 449 716 dh**.

La CM est supérieure à l'IS dans tous les cas, donc **impôt exigible N = CM ≈ 449 716 dh**. La TPPRF de 13 084, retenue à la source sur l'intérêt, s'impute sur cet impôt : il reste 436 632 dh à acquitter entre les acomptes et la régularisation.

**Piège :** calculer l'IS sans le comparer à la CM. Avec un chiffre d'affaires de 86 M dh et une marge faible, la CM l'emporte.

### Question : imposition des revenus professionnels (IR)

Les revenus professionnels sont les bénéfices des activités commerciales, industrielles, artisanales et des professions libérales exercées par des personnes physiques.
- **Détermination du revenu :**
  - régime du **résultat net réel** (droit commun) ;
  - sur option et sous plafond de chiffre d'affaires, régime du **résultat net simplifié** ;
  - pour les petits contribuables, **forfait** (remplacé depuis 2021 par la contribution professionnelle unique) ou statut d'**auto-entrepreneur**.
- **Imposition** : au barème progressif de l'IR, de 0 à 38 % à l'époque du sujet, avec **cotisation minimale** pour les régimes réel et simplifié.
- **Déclaration annuelle** du revenu global, avec des acomptes pour les contribuables au régime réel ou simplifié.
