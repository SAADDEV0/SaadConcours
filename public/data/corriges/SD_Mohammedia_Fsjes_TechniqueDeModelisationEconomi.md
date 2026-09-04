> Corrigé avec calculs détaillés.

**Exercice 1**

1) L'estimateur des MCO de la pente est :
â = Σ(xt - x̄)(yt - ȳ) / Σ(xt - x̄)²

En remplaçant yt = a.xt + b + ut, on obtient :
â = a + Σ(xt - x̄).ut / Σ(xt - x̄)²

Sous les hypothèses des MCO (E(ut) = 0 pour tout t, xt non stochastique/exogène) :
E(â) = a + [Σ(xt - x̄).E(ut)] / Σ(xt - x̄)² = a + 0 = a

L'estimateur â est donc **sans biais**. (Le même raisonnement s'applique à b̂ = ȳ - â.x̄, également sans biais.)

2) Le coefficient de détermination est défini par R² = SCE/SCT, avec :
- SCT = Σ(yt - ȳ)² (somme des carrés totale)
- SCE = Σ(ŷt - ȳ)² (somme des carrés expliquée), où ŷt = â.xt + b̂

Puisque ŷt - ȳ = â(xt - x̄), on a SCE = â².Σ(xt - x̄)².

En notant Sxx = Σ(xt-x̄)², Syy = Σ(yt-ȳ)² et Sxy = Σ(xt-x̄)(yt-ȳ), on a â = Sxy/Sxx, donc :

R² = â².Sxx / Syy = (Sxy²/Sxx²).Sxx / Syy = Sxy² / (Sxx.Syy)

Or le coefficient de corrélation linéaire est ρ = Sxy / √(Sxx.Syy), donc ρ² = Sxy² / (Sxx.Syy) = R².

On a donc bien démontré que **R² = ρ²** dans le cas de la régression simple.

**Exercice 2**

Modèle non contraint : Y = a.X + b.Z + c.T + d + ε (4 paramètres : a, b, c, d)

*Restriction 1 (H0 : b = c)* — modèle contraint :
Y = a.X + b.(Z + T) + d + ε
(on regroupe Z et T car ils ont le même coefficient)

*Restriction 2 (H0 : b = -1, c = 0, a + c = 1, d = 0, soit a = 1)* — modèle contraint :
Y = X - Z + ε
(on substitue directement les valeurs imposées aux coefficients)

**Test de Fisher (test de restrictions linéaires) :**

F = [(SCR_c - SCR_nc) / q] / [SCR_nc / (n - k)]  ~  F(q, n-k) sous H0

où :
- SCR_c = somme des carrés des résidus du modèle contraint
- SCR_nc = somme des carrés des résidus du modèle non contraint
- q = nombre de restrictions testées (q = 1 pour la restriction 1 ; q = 4 pour la restriction 2)
- k = nombre de paramètres du modèle non contraint (ici k = 4)
- n = taille de l'échantillon

Règle de décision : si F calculé > F critique lu dans la table de Fisher-Snedecor à (q, n-k) degrés de liberté et au seuil α choisi, on rejette H0 (les restrictions ne sont pas valides) ; sinon on ne peut pas rejeter H0.

**Exercice 3**

- **Création monétaire aujourd'hui** : principalement par le crédit bancaire (« les crédits font les dépôts ») : lorsqu'une banque commerciale accorde un prêt, elle crée simultanément un dépôt (de la monnaie scripturale) ex nihilo, dans la limite des contraintes réglementaires (réserves obligatoires, ratios prudentiels).
- **Institutions qui créent la monnaie** : les banques commerciales (monnaie scripturale), la banque centrale (Bank Al-Maghrib — monnaie fiduciaire et monnaie centrale), et de façon marginale le Trésor public.
- **Création monétaire indéfinie et sans risque ?** Non : elle est limitée par la réglementation prudentielle (réserves obligatoires, ratios de solvabilité de Bâle), par le risque de crédit (défaut des emprunteurs) et par le risque inflationniste si la création monétaire excède la croissance de la production réelle.
- **Politique monétaire** : ensemble des actions mises en œuvre par la banque centrale pour agir sur la masse monétaire et les taux d'intérêt afin d'atteindre des objectifs macroéconomiques (stabilité des prix, soutien à la croissance et à l'emploi).
- **Variables sur lesquelles elle agit** : le taux directeur, le taux des réserves obligatoires, les opérations d'open market, éventuellement le taux de change (dans le cadre du régime de change).

**Exercice 4**

Modèle : Y = C + I, avec C = c0 + c.Y (fonction de consommation keynésienne) et I = λ.Y + I0

À l'équilibre : Y = c0 + c.Y + λ.Y + I0  ⟹  Y(1 - c - λ) = c0 + I0

Le multiplicateur keynésien s'écrit k = 1/(1 - c - λ) = 5  ⟹  1 - c - λ = 0,2  ⟹  c + λ = 0,8  ⟹  c = 0,8 - 0,15 = **0,65** (propension marginale à consommer)

Au point d'équilibre Y* = 600 : I = λY* + I0 = 0,15 × 600 + 85 = 90 + 85 = **175** (cohérent avec l'énoncé)

C = Y* - I = 600 - 175 = **425**

Comme C = c0 + c.Y : 425 = c0 + 0,65 × 600 = c0 + 390  ⟹  c0 = **35**

**Fonction de consommation : C = 35 + 0,65.Y**

*Impact d'une hausse de la consommation autonome ΔC0 = +10 :*

ΔY = k × ΔC0 = 5 × 10 = **+50**  ⟹  nouveau revenu Y = 650

ΔC = ΔC0 + c.ΔY = 10 + 0,65 × 50 = 10 + 32,5 = **+42,5**  ⟹  nouvelle consommation C = 425 + 42,5 = 467,5

ΔI = λ.ΔY = 0,15 × 50 = **+7,5**  ⟹  nouvel investissement I = 175 + 7,5 = 182,5

Vérification : Y = C + I = 467,5 + 182,5 = 650 ✓ (cohérent)

**Exercice 5**

f(q,l) = 2.q^(1/2).l^(1/2)

1) Rendements d'échelle : multiplions les deux inputs par t > 0 :
f(tq, tl) = 2.(tq)^(1/2).(tl)^(1/2) = 2.t^(1/2).t^(1/2).q^(1/2).l^(1/2) = t.f(q,l)

La fonction est homogène de degré 1 (0,5 + 0,5 = 1) : l'entreprise connaît des **rendements d'échelle constants**.

2) Sans calculer explicitement le coût marginal : une fonction de production à rendements d'échelle constants (homogène de degré 1) implique une **fonction de coût total linéaire en la production** (le coût total est proportionnel à la quantité produite), donc un **coût marginal constant**, égal au coût moyen. Le coût marginal n'est donc ni croissant ni décroissant.