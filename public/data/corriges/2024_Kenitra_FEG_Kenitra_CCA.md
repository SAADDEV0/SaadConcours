## Dossier 1 — Mathématiques Financières

**Données.** Loyer mensuel 2 850 DH, impayé les 1/01, 1/02, 1/03 et 1/04/2002. Remplacement par des semestrialités constantes payées le 1/01 et le 1/07 de chaque année, de 2004 (1ère le 1/01/2004) à 2006 (dernière le 1/07/2006), soit **6 semestrialités**. Taux 9 %/an.

**1. Calcul de la semestrialité "a"**

Méthode : équivalence de valeurs à intérêts composés (taux annuel 9 %, périodes fractionnaires en années), date d'équivalence = 1/01/2004.

Valeur des loyers impayés au 1/01/2004 (capitalisés depuis leur date d'échéance) :

| Loyer dû le | Durée jusqu'au 1/01/2004 | Valeur acquise |
|---|---|---|
| 1/01/2002 | 2 ans | 2 850 × 1,09² = 3 386,09 |
| 1/02/2002 | 23/12 ans | 2 850 × 1,09^(23/12) = 3 361,86 |
| 1/03/2002 | 22/12 ans | 2 850 × 1,09^(22/12) = 3 337,80 |
| 1/04/2002 | 21/12 ans | 2 850 × 1,09^(21/12) = 3 313,91 |
| **Total** | | **13 399,65 DH** |

Valeur des 6 semestrialités au 1/01/2004 (dates t = 0 ; 0,5 ; 1 ; 1,5 ; 2 ; 2,5 an) :

Σ (1,09)^(−t) = 1 + 0,95783 + 0,91743 + 0,87874 + 0,84168 + 0,80618 = **5,40186**

**a = 13 399,65 / 5,40186 ≈ 2 480,56 DH**

*(Vérification : cette valeur est cohérente avec l'indication de l'énoncé — 10 % de 2 480,56 = 248,06 DH, exactement le montant cité dans la variante ci-dessous.)*

**2. Variante : 12 trimestrialités à 2,5 %/trimestre, 1er versement le 1/10/2004**

Les 6 semestrialités sont majorées de 10 % : 2 480,56 × 1,10 = 2 728,62 DH chacune.

Valeur de cette nouvelle dette au 1/01/2004 = 13 399,65 × 1,10 = **14 739,62 DH**

Les 12 trimestrialités "b" sont versées à t = 3, 4, 5, …, 14 trimestres après le 1/01/2004 (1er versement le 1/10/2004 = 3 trimestres plus tard) :

Σ_{k=3}^{14} (1,025)^(−k) = **9,76349**

**b = 14 739,62 / 9,76349 ≈ 1 509,67 DH** par trimestre.

---

## Dossier 2 — Comptabilité des sociétés

**Données.** SA « LMD », capital 300 000 DH (3 000 actions de 100 DH nominal). Nouvel actionnaire : apport en nature (matériel industriel) **2 200 DH** + apport en numéraire 2 000 DH = **4 200 DH**. Prix d'émission = valeur réelle de l'ancienne action = **120 DH**. Frais d'augmentation : 2 220 DH.

**1. Nombre d'actions nouvelles et valeur réelle après augmentation**

Nombre d'actions nouvelles = 4 200 / 120 = **35 actions**.

Valeur réelle des capitaux propres avant = 3 000 × 120 = 360 000 DH.
Après augmentation = 360 000 + 4 200 = 364 200 DH, pour 3 035 actions.

**Valeur réelle de l'action après = 364 200 / 3 035 = 120 DH (inchangée).**

C'est normal : le prix d'émission ayant été fixé exactement à la valeur réelle avant augmentation, il n'y a ni dilution ni enrichissement des anciens actionnaires (ce résultat ne dépend pas du montant apporté).

**2. Valeur théorique du droit de souscription (DS)**

DS = (Valeur réelle avant − Prix d'émission) × n / (N + n) = (120 − 120) × 35 / 3 035 = **0 DH**.

(Cas particulier : DS nul car le prix d'émission égale la valeur réelle avant l'opération.)

**3. Écritures comptables**

*Constatation de l'augmentation (souscription) :*
```
3461  Associés – opérations sur le capital         4 200
            1111  Capital social (35 × 100)                  3 500
            1121  Prime d'émission (35 × 20)                   700
```

*Réalisation des apports :*
```
2332  Matériel industriel (apport en nature)       2 200
5141  Banque (apport en numéraire)                 2 000
            3461  Associés – opérations sur le capital        4 200
```

*Frais d'augmentation de capital (2 220 DH).* La prime d'émission disponible n'est que de 700 DH : elle ne suffit pas à absorber la totalité des frais. On impute d'abord la prime disponible, le solde (1 520 DH) est comptabilisé en charges à répartir sur plusieurs exercices (amortissables sur 5 ans maximum) :
```
1121  Prime d'émission                                700
2125  Frais d'augmentation de capital (non-valeur)  1 520
            5141  Banque                                     2 220
```

---

## Dossier 3 — Fiscalité (IS 2023, société « B&E »)

**Résultat comptable de départ : 8 975 089 DH.** CA = 20 000 000 DH ; autres produits d'exploitation = 5 000 000 DH ; reprises et transferts de charges = 60 000 DH ; acomptes IS déjà versés en 2023 : 4 × 300 000 = 1 200 000 DH.

**Analyse des 6 opérations :**

1. **Don à l'association ANNAHDA : 20 000 DH.** Plafond fiscal pour les dons aux associations (hors organismes cités sans plafond à l'art. 10-I-B-2° du CGI) = 2 ‰ du CA HT = 20 000 000 × 0,002 = 40 000 DH. Le don (20 000) est **inférieur au plafond → entièrement déductible, aucune réintégration.**

2. **Cession de titres SRAL omise** : prix de cession 300 000 DH, coût d'achat 200 000 DH → plus-value de 100 000 DH **omise du résultat comptable → à réintégrer : +100 000 DH.**

3. **Provision clients douteux, 90 000 DH.** Aucune procédure de recouvrement/action en justice mentionnée ni de créances individualisées à risque précisément identifié → provision à caractère général, **non déductible fiscalement → à réintégrer : +90 000 DH.**

4. **Amortissement du véhicule de tourisme (PDG) : 600 000 DH TTC, DEA comptabilisée 100 000 DH (10 mois).**
   Un véhicule de tourisme (non utilitaire) est plafonné fiscalement à une valeur d'origine de **300 000 DH TTC**, taux minimal 20 %/an.
   Amortissement fiscalement admis = 300 000 × 20 % × 10/12 = 50 000 DH.
   Amortissement comptabilisé = 100 000 DH → excédent **à réintégrer : +50 000 DH.**

5. **Catalogues publicitaires : 3 000 unités à 60 DH TTC, dont 1 900 encore en stock au 31/12/2023** (à distribuer en 2024).
   La valeur unitaire (60 DH) respecte le plafond des cadeaux publicitaires (≤ 100 DH TTC), mais **seule la fraction effectivement distribuée en 2023 (3 000 − 1 900 = 1 100 unités) constitue une charge de l'exercice.** Le coût des 1 900 unités en stock (1 900 × 60 = 114 000 DH), s'il a été comptabilisé en charge dès l'achat, doit être **réintégré : +114 000 DH** (il sera déductible en 2024, lors de la distribution effective).

6. **Vente à l'export (Luxembourg), 10 000 € :** cours au 08/09 = 10,5 ; livraison 12/09 = 10,9 ; facturation 20/09 = 11,3 ; encaissement 01/10 = 11,5 (115 000 DH reçus).
   Le comptable a enregistré la vente à 109 000 DH (cours du 12/09, date de livraison) et un gain de change de 6 000 DH.
   Selon la règle générale (créance enregistrée au cours de la date de facturation), la vente aurait dû être constatée à 10 000 × 11,3 = **113 000 DH**, et le gain de change réel, entre la créance (113 000) et l'encaissement (115 000), n'est que de **2 000 DH**.
   Correction : CA sous-évalué de +4 000 DH, gain de change surévalué de −4 000 DH → **impact net sur le résultat fiscal = 0.** Point à signaler à l'entreprise (reclassement CA / produit financier) mais sans conséquence sur l'IS dû.

**Tableau récapitulatif**

| Opération | Réintégration |
|---|---|
| Don ANNAHDA | 0 |
| Plus-value SRAL omise | +100 000 |
| Provision clients douteux | +90 000 |
| Amortissement véhicule (excédent) | +50 000 |
| Catalogues en stock | +114 000 |
| Écart de change (net) | 0 |
| **Total réintégrations** | **354 000 DH** |

**Résultat fiscal = 8 975 089 + 354 000 = 9 329 089 DH**

**Calcul de l'IS** (barème 2023, taux appliqué à la totalité du bénéfice selon la tranche atteinte) : résultat fiscal > 1 000 000 DH → **taux marginal de 31 %**.

IS théorique = 9 329 089 × 31 % ≈ **2 892 018 DH**

**Cotisation minimale (CM)** = 0,25 % × (CA + autres produits d'exploitation) = 0,25 % × (20 000 000 + 5 000 000) = 62 500 DH. IS (2 892 018) >> CM → **l'IS calculé est dû.**

**Solde à payer au 31/03/2024** = IS dû − acomptes versés = 2 892 018 − 1 200 000 = **1 692 018 DH**.

---

## Dossier 4 — Comptabilité analytique (entreprise « ABS »)

**Données disponibles.** 1 kg de matière M traitée (atelier préparation) donne 800 g de fil (rendement 0,8). Stocks bobines de fil : 9 600 unités (01/02) → 18 000 unités (28/02). Stock matière M brute au 28/02 : 10 800 kg (stock au 01/02 illisible sur le scan disponible). Ventes de février : 96 000 bobines de 125 g. Coûts d'unité d'œuvre donnés : Approvisionnement 0,5 DH/kg acheté ; Préparation 1,2 DH/kg traité ; Filature 3,5 DH/kg de fil obtenu ; Bobinage 0,25 DH/bobine obtenue ; Distribution 0,15 DH/bobine vendue.

> ⚠️ **Le tableau de répartition est volontairement incomplet dans l'énoncé** (l'énoncé lui-même précise : « tableau de répartition des charges indirectes partiellement rempli ») : les lignes « Total répartition secondaire » et « Nombre d'unité d'œuvre » ne sont pas données, c'est précisément ce que la question 1 demande de reconstituer. Les totaux ci-dessous sont donc **recalculés à partir des données de production** (rendements, mouvements de stocks, ventes) — c'est la méthode attendue. Le stock initial de matière M brute au 01/02 n'est en revanche pas fourni dans le document source, ce qui empêche de chiffrer le centre Approvisionnement.

**1. Reconstitution des quantités d'œuvre**

- Production de bobines (bobinage) = Ventes + stock final − stock initial = 96 000 + 18 000 − 9 600 = **104 400 bobines**
- Kg de fil nécessaires à cette production = 104 400 × 0,125 kg = **13 050 kg de fil** (nombre d'UO Filature)
- Kg de matière M traitée pour obtenir ce fil = 13 050 / 0,8 = **16 312,5 kg** (nombre d'UO Préparation)
- Kg de matière M achetée (UO Approvisionnement) : **non déterminable** (stock initial de matière brute illisible sur le scan)

**2. Tableau de répartition des charges indirectes (reconstitué)**

| Centre | Nombre d'UO | Coût d'UO | Total charges |
|---|---|---|---|
| Approvisionnement | non déterminable | 0,5 DH/kg | **non déterminable** |
| Préparation | 16 312,5 kg traité | 1,2 DH/kg | 19 575 DH |
| Filature | 13 050 kg fil obtenu | 3,5 DH/kg | 45 675 DH |
| Bobinage | 104 400 bobines | 0,25 DH/bobine | 26 100 DH |
| Distribution | 96 000 bobines vendues | 0,15 DH/bobine | 14 400 DH |
| **Total (hors Approvisionnement)** | | | **105 750 DH** |

**3. Charges de la comptabilité générale**

Deux différences d'incorporation à retraiter :
- **Charge supplétive à retirer** (propre à l'analytique, absente de la comptabilité générale) : rémunération des capitaux propres au taux de 12 %/an sur un capital de 100 000 DH, soit 100 000 × 12 % / 12 = **1 000 DH/mois**.
- **Charge non incorporable à ajouter** (présente en comptabilité générale mais exclue de l'analytique, car anormale/hors exploitation) : une pénalité de **8 000 DH**.

Charges de la compta générale = Charges de la compta analytique − charges supplétives (1 000) + charges non incorporables (8 000)

Sur la partie reconstituée (hors centre Approvisionnement, indéterminé) :
105 750 − 1 000 + 8 000 = **112 750 DH**, à majorer du coût du centre Approvisionnement (non déterminable sans le stock initial de matière M brute).
