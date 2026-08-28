## Corrigé indicatif — Cas MIC Consulting (coûts variables / coûts complets)

> Corrigé rédigé à partir de l'énoncé transcrit — pas de correction officielle publiée trouvée. Calculs multi-étapes (répartition des matières, des sous-produits, puis des produits finis) : vérifie les totaux avec ta propre calculatrice, de petits écarts d'arrondi sont possibles à chaque étape de répartition.

### Données de cadrage

- Achats : X = 100 000 L × 25 = 2 500 000 ; Y = 1 000 kg × 1 500 = 1 500 000 ; Z = 500 000 kg × 30 = 15 000 000 → **Total achats = 19 000 000 dh**.
- Consommation Mixage : coût matière Alpha = (45 000×25) + (350×1 500) + (300 000×30) = **10 650 000** ; coût matière Beta = (50 000×25) + (500×1 500) + (200 000×30) = **8 000 000**.
- MOD Mixage (140 000 dh à 40 dh/h) : Alpha 1 500h → 60 000 ; Beta 2 000h → 80 000.
- MOD Traitement (290 000 dh à 50 dh/h) : A 4 000h → 200 000 ; B 1 800h → 90 000.
- Commission distribution (10 % du CA) : CA A = 9 500×1 500 = 14 250 000 ; CA B = 8 500×1 700 = 14 450 000 → commission A = 1 425 000 ; commission B = 1 445 000.
- Production de sous-produits = quantités totalement consommées en Traitement (pas de stock intermédiaire) : Alpha = 22 000 kg, Beta = 21 000 kg.
- Production finale : A = 10 000 kg (ventes 9 500 kg, stock final 500 kg) ; B = 9 000 kg (ventes 8 500 kg, stock final 500 kg).

### 1. Méthode des coûts variables

**Charges indirectes variables réparties** (UO : Approvisionnement = 1 000 dh d'achat [19 000 UO] ; Mixage = 1 h de MOD [3 500 UO] ; Traitement = 10 kg de produits [1 900 UO] ; Distribution = 100 dh de CA [287 000 UO]) :

| Centre | Total V | Taux/UO | Alpha/A | Beta/B |
|---|---|---|---|---|
| Approvisionnement (attribué aux matières consommées) | 50 000 | 2,6316 dh/UO | Alpha ≈ 28 026 | Beta ≈ 21 053 |
| Mixage | 20 000 | 5,7143 dh/h | Alpha 8 571 (1 500h) | Beta 11 429 (2 000h) |
| Traitement | 30 000 | 1,5789 dh/kg | A 15 789 (10 000kg) | B 14 211 (9 000kg) |
| Distribution | 35 000 | 0,0012195 dh/dh CA | A 17 378 | B 17 622 |

**Coût des sous-produits (matière + MOD + indirect variable Mixage) :**
- Alpha : 10 650 000 + 60 000 + 8 571 + 28 026 (appro) ≈ **10 746 597**, soit 488,48 dh/kg (22 000 kg)
- Beta : 8 000 000 + 80 000 + 11 429 + 21 053 (appro) ≈ **8 112 482**, soit 386,31 dh/kg (21 000 kg)

**Coût de production variable des produits finis** (Alpha/Beta consommés + MOD Traitement + indirect variable Traitement) :
- A : (12 000×488,48) + (9 500×386,31) + 200 000 + 15 789 = 5 861 780 + 3 669 932 + 200 000 + 15 789 = **9 747 502**, soit 974,75 dh/kg
- B : (10 000×488,48) + (11 500×386,31) + 90 000 + 14 211 = 4 884 817 + 4 442 549 + 90 000 + 14 211 = **9 431 576**, soit 1 047,95 dh/kg

**Coût de revient variable des ventes** (COGS sur quantités vendues + commission + indirect variable distribution) :
- A : (9 500×974,75) + 1 425 000 + 17 378 = 9 260 138 + 1 425 000 + 17 378 = **10 702 516**
- B : (8 500×1 047,95) + 1 445 000 + 17 622 = 8 907 575 + 1 445 000 + 17 622 = **10 370 197**

**Résultats (méthode des coûts variables) :**

| | CA | Coût de revient variable | Marge/Résultat |
|---|---|---|---|
| A | 14 250 000 | 10 702 516 | **3 547 484** (373,4 dh/kg vendu) |
| B | 14 450 000 | 10 370 197 | **4 079 803** (480,0 dh/kg vendu) |
| **Total marge sur coût variable** | | | **7 627 287** |
| Charges fixes totales (15 000+10 000+25 000+15 000) | | | − 65 000 |
| **Résultat global** | | | **≈ 7 562 287 dh** |

### 2. Résultats en coûts complets (sans refaire les calculs matière/MOD)

En coûts complets, les charges **fixes** de chaque centre sont réparties sur les mêmes bases (UO) que les charges variables et intégrées au coût de production — donc au coût des unités **produites**, et non plus seulement vendues. Comme il reste un stock final (500 kg de A et 500 kg de B), une partie des charges fixes de la période se retrouve « stockée » dans les invendus plutôt que d'être immédiatement déduite du résultat.

En reprenant la même mécanique de répartition pour la colonne « F » (Approvisionnement 15 000, Mixage 10 000, Traitement 25 000, Distribution 15 000), on obtient approximativement :
- Coût fixe de production : ≈ 2,55 dh/kg pour A, ≈ 2,69 dh/kg pour B (matière + Mixage + Traitement fixes ramenés aux quantités produites).
- Coût complet de production : A ≈ 977,3 dh/kg ; B ≈ 1 050,6 dh/kg.
- Coût de revient complet des ventes (incluant en plus la quote-part fixe de distribution, elle directement liée aux ventes) : A ≈ **10 734 000** ; B ≈ **10 401 000**.

**Résultats en coûts complets :**

| | CA | Coût de revient complet | Résultat |
|---|---|---|---|
| A | 14 250 000 | ≈ 10 734 000 | ≈ **3 516 000** |
| B | 14 450 000 | ≈ 10 401 000 | ≈ **4 049 000** |
| **Total** | | | **≈ 7 565 000 dh** |

Le résultat global en coûts complets (≈ 7 565 000) est très légèrement supérieur à celui en coûts variables (≈ 7 562 287) : l'écart correspond aux charges fixes « immobilisées » dans les 500 kg de stock final de A et les 500 kg de stock final de B, non encore reconnues en charges tant qu'elles ne sont pas vendues.

### 3. Commentaire — intérêt, limites, produit à privilégier

- **Coûts variables** : met en évidence la contribution de chaque produit à la couverture des charges fixes (utile pour des décisions à court terme — abandon de produit, tarification différentielle) ; en revanche le coût de revient obtenu est incomplet et le résultat par produit peut être trompeur en cas de forte variation des stocks.
- **Coûts complets** : donne une image plus exhaustive du coût économique réel (toutes les charges y sont incluses), mais le résultat par produit dépend fortement des clés de répartition retenues (une part d'arbitraire dans l'imputation des charges fixes) et fluctue avec le niveau des stocks sans que la rentabilité réelle ait changé.
- **Produit à développer davantage : B.** Malgré une concurrence plus forte signalée dans l'énoncé, B dégage une marge unitaire nettement supérieure à A (≈ 480 dh/kg vendu contre ≈ 373 dh/kg pour A en coûts variables), ce qui en fait, à volume égal, le produit le plus rentable — sous réserve des contraintes de capacité ou de disponibilité des matières premières non précisées dans l'énoncé.
