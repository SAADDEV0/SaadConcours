> Corrigé rédigé à partir du programme standard du module (économétrie appliquée, macroéconomie, marchés monétaires) et d'un raisonnement vérifié — aucune source officielle disponible pour ce sujet.

### Questions

1. **Les trois approches du PIB** : l'approche par la production (somme des valeurs ajoutées des unités productrices), l'approche par la dépense (somme de la consommation finale, de l'investissement, des dépenses publiques et du solde extérieur), et l'approche par le revenu (somme des revenus distribués : salaires, profits, impôts nets de subventions).

2. **Productivité marginale du capital.** Pour une fonction de production de type Cobb-Douglas Q = f(K,L) = A·Kᵅ·Lᵝ, la productivité marginale du capital est la dérivée partielle de Q par rapport à K :
   PmK = ∂Q/∂K = α·A·K^(α-1)·L^β = α·(Q/K).
   Elle représente la production supplémentaire obtenue en augmentant le capital d'une unité, les autres facteurs restant constants ; elle est décroissante lorsque 0 < α < 1 (rendements marginaux décroissants du capital).

3. **Adjudication « française » vs « hollandaise ».**
   - Adjudication à la française (à prix multiples/discriminatoire) : chaque soumissionnaire retenu paie le prix (ou le taux) qu'il a lui-même proposé dans son offre ; les prix payés diffèrent donc d'un adjudicataire à l'autre.
   - Adjudication à la hollandaise (à prix unique) : tous les soumissionnaires retenus paient le même prix, généralement le prix marginal (le moins bien-disant parmi les offres retenues), quel que soit le prix qu'ils avaient proposé.

4. **La reprise de liquidité** est une opération par laquelle la banque centrale (Bank Al-Maghrib) résorbe l'excédent de liquidité bancaire, en empruntant elle-même des liquidités auprès des banques (par exemple via des reprises de liquidité à 7 jours ou des opérations de réglage fin), afin d'éviter une création monétaire excessive et de maintenir le taux interbancaire proche de son taux directeur.

5. **Refinancement interbancaire.** Les banques en déficit de trésorerie empruntent des liquidités à court terme (souvent au jour le jour) auprès des banques en excédent, sur le marché monétaire interbancaire, à un taux qui résulte de la confrontation de l'offre et de la demande de liquidités (taux moyen pondéré interbancaire), sans intervention directe systématique de la banque centrale.

6. **Refinancement sur le marché monétaire (au sens large).** Au-delà du compartiment interbancaire, les banques se refinancent auprès de la banque centrale via les instruments de politique monétaire : avances à 7 jours sur appel d'offres, pensions livrées, facilité de prêt marginal, en apportant des actifs éligibles en garantie (collatéral), la banque centrale agissant comme prêteur en dernier ressort.

### Exercice 1 — Modèle keynésien

**Données** : C = 0,8 Yd + 10 ; Yd = Y - T ; I = 100 ; G = 50 ; T = 50.

**a) Revenu d'équilibre et multiplicateur**

Y = C + I + G = 0,8(Y - T) + 10 + I + G
Y = 0,8Y - 0,8×50 + 10 + 100 + 50
Y - 0,8Y = -40 + 160
0,2Y = 120 → **Y = 600**

Multiplicateur des dépenses publiques : k = 1/(1-c) = 1/(1-0,8) = **5**

**b) Revenu de plein emploi (ΔG = +10)**

ΔY = k × ΔG = 5 × 10 = 50
**Revenu de plein emploi : Y* = 600 + 50 = 650**

**c) Variation de T pour un même effet (au lieu de G)**

Multiplicateur fiscal : kT = -c/(1-c) = -0,8/0,2 = **-4**
On veut ΔY = 50 : 50 = -4 × ΔT → **ΔT = -12,5**
(il faut donc réduire la taxe de 12,5 pour atteindre le même revenu de plein emploi)

**d) Comparaison des politiques budgétaire et fiscale**

|kG| = 5 > |kT| = 4 : une augmentation des dépenses publiques a un impact plus fort sur le revenu qu'une baisse équivalente des impôts. Cela s'explique par le fait qu'une hausse de G se traduit intégralement en demande supplémentaire dès la première période, alors qu'une baisse de T n'affecte la demande qu'à travers la propension marginale à consommer (une partie de la baisse d'impôt est épargnée). La politique budgétaire (via G) est donc plus efficace, à montant égal, que la politique fiscale (via T) pour relancer l'activité — résultat cohérent avec le théorème du multiplicateur de budget équilibré.

### Exercice 2 — Modèle économétrique

Y = 2,5 + 0,35 X1 - 1,12 X2 ; n = 40 ; R² = 0,95 ; DW = 2,35 ; α = 5% ; F théorique = 3,23 ; k = 2 variables explicatives.

**1. Test de significativité globale (test de Fisher)**

F calculé = [R²/k] / [(1-R²)/(n-k-1)] = (0,95/2) / (0,05/37) = 0,475 / 0,00135 ≈ **351,5**

F calculé (≈ 351,5) >> F théorique (3,23) → on rejette H0 (tous les coefficients seraient nuls). **Le modèle est globalement significatif** au seuil de 5% : les variables X1 et X2 expliquent conjointement, de façon significative, les variations de Y.

**2. R² ajusté**

R²ajusté = 1 - [(1-R²)(n-1)/(n-k-1)] = 1 - [0,05 × 39/37] = 1 - 0,0527 ≈ **0,9473**

Interprétation : environ 94,7% de la variance de Y est expliquée par le modèle une fois tenu compte du nombre de variables explicatives et du nombre d'observations.

Différence R² / R² ajusté : le R² augmente mécaniquement (ou reste constant) à chaque ajout d'une variable explicative, même non pertinente, car il ne prend pas en compte la perte de degrés de liberté. Le R² ajusté corrige ce biais en pénalisant l'ajout de variables qui n'améliorent pas suffisamment le pouvoir explicatif du modèle ; il permet donc de comparer des modèles ayant un nombre de variables différent. Ici, R² ajusté (0,9473) est très proche de R² (0,95), ce qui confirme la robustesse du modèle.

**3. Test d'autocorrélation des erreurs (Durbin-Watson)**

DW calculé = 2,35, à comparer aux valeurs critiques (pour n = 40 et k = 2, approximativement dL ≈ 1,39 et dU ≈ 1,60 au seuil de 5%).
- Zone d'absence d'autocorrélation : dU < DW < 4 - dU, soit 1,60 < DW < 2,40.
- DW = 2,35 se situe bien dans cet intervalle.

**Conclusion : on ne rejette pas l'hypothèse d'absence d'autocorrélation des erreurs** ; le DW étant légèrement supérieur à 2, il n'indique tout au plus qu'une très faible autocorrélation négative, non significative au seuil retenu.

### Exercice 3 — Résolution matricielle

Système : 5x + 2y = 16 ; 4x + 3y = 17

Sous forme matricielle : A·X = B, avec A = [[5, 2], [4, 3]], X = [x, y]ᵀ, B = [16, 17]ᵀ

det(A) = 5×3 - 2×4 = 15 - 8 = **7**

Par la méthode de Cramer :
- x = det([[16, 2], [17, 3]]) / det(A) = (16×3 - 2×17)/7 = (48-34)/7 = 14/7 = **2**
- y = det([[5, 16], [4, 17]]) / det(A) = (5×17 - 16×4)/7 = (85-64)/7 = 21/7 = **3**

**Solution : x = 2 ; y = 3**

Vérification : 5(2) + 2(3) = 10 + 6 = 16 ✓ ; 4(2) + 3(3) = 8 + 9 = 17 ✓
