> Corrigé avec calculs détaillés (reconstitution : le document source ne fournissait que la page de garde de la correction, sans énoncé exploitable).

**Partie 1 — Mathématiques financières**

**Exercice 1.**
1. Valeur acquise en intérêts composés : Vn = C0 × (1+i)^n = 50 000 × (1,06)^3.
(1,06)^3 = 1,191016. Vn = 50 000 × 1,191016 = 59 550,80 DH.
2. Taux simple équivalent i' tel que C0(1+3i') = Vn : 3i' = (59 550,80/50 000) - 1 = 0,191016, donc i' = 0,191016/3 ≈ 6,37%.

**Exercice 2.**
- Emprunt indivis, amortissements constants sur 5 ans à 7% : amortissement annuel = 200 000/5 = 40 000 DH. Les intérêts se calculent sur le capital restant dû (200 000 ; 160 000 ; 120 000 ; 80 000 ; 40 000) : intérêts = 7%×(200 000+160 000+120 000+80 000+40 000) = 7%×600 000 = 42 000 DH d'intérêts cumulés.
- Emprunt obligataire in fine sur 5 ans à 8% : intérêts annuels constants = 8%×200 000 = 16 000 DH/an, soit 5×16 000 = 80 000 DH d'intérêts cumulés.
**Conclusion :** le remboursement par amortissements constants (42 000 DH d'intérêts cumulés) coûte nettement moins cher que le remboursement in fine (80 000 DH), malgré un taux nominal plus faible pour ce dernier, car le capital restant dû décroît plus vite dans le premier cas.

**Partie 2 — Probabilités et statistique**

**Q1.**
1. Le nombre de sinistres parmi 4 assurés indépendants suit une loi binomiale B(n=4 ; p=0,15).
2. P(X=2) = C(4,2)×(0,15)²×(0,85)² = 6×0,0225×0,7225 ≈ 0,0976, soit environ 9,76%.
3. E(X) = np = 4×0,15 = 0,6 sinistre en moyenne. V(X) = np(1-p) = 4×0,15×0,85 = 0,51.

**Q2.** Z = (84-78)/6 = 1. P(T>84) = 1-Φ(1) = 1-0,8413 = 0,1587, soit environ 15,87% de probabilité de survie au-delà de 84 ans.

**Partie 3 — Algèbre**

A = [[2,1],[0,2]]. A² = [[4,4],[0,4]]. On vérifie que A² = 4A - 4I₂ : 4A = [[8,4],[0,8]], 4A-4I₂ = [[4,4],[0,4]] = A². ✓
Donc a=4, b=-4. Par récurrence, Aⁿ = [[2^n, n×2^(n-1)],[0, 2^n]] (résultat classique pour une matrice triangulaire de la forme λI+N avec N nilpotente d'ordre 2).

**Partie 4 — Culture générale**

1. Une **provision technique** est le montant que l'assureur doit constituer à son passif pour faire face aux engagements pris envers les assurés (sinistres survenus mais non encore réglés, sinistres non encore déclarés IBNR, provisions mathématiques en assurance-vie). Son évaluation est un enjeu actuariel majeur car une sous-évaluation menace la solvabilité de l'assureur, tandis qu'une sur-évaluation immobilise inutilement des capitaux et renchérit les primes ; elle repose sur des méthodes statistiques (triangles de liquidation, tables de mortalité) sujettes à l'incertitude.
2. Un **risque assurable** doit être aléatoire, mesurable statistiquement, indépendant (mutualisable) et d'un coût supportable pour l'assureur (ex. : incendie, décès, accident de la route). Un **risque non assurable** est soit non aléatoire (certitude), soit non mesurable, soit systémique/corrélé à grande échelle (ex. : risque de guerre, risque de faillite volontaire, certains risques climatiques extrêmes non mutualisables).
3. Le principe de **mutualisation** consiste à regrouper un grand nombre d'assurés exposés à un même type de risque afin que les primes versées par l'ensemble des assurés financent l'indemnisation des seuls sinistrés ; la loi des grands nombres permet à l'assureur de prévoir statistiquement la charge globale de sinistres et de fixer une prime équitable, transformant ainsi un risque individuel incertain en une charge collective prévisible.