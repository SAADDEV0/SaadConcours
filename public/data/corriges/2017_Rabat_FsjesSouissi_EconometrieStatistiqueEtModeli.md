> Corrigé avec calculs détaillés.

## Partie 1 — Macroéconomie

**1) Profit :** Π = P·y - W·N = P·(2N - N²/2) - W·N

**2) Demande de travail :** condition du premier ordre dΠ/dN = P(2-N) - W = 0
⟹ **N* = 2 - W/P** (demande de travail décroissante par rapport au salaire réel w = W/P).

**3) Production optimale :** en posant w = W/P, N* = 2 - w :
y* = 2(2-w) - (1/2)(2-w)² = (2-w)(2+w)/2 = **2 - w²/2**
La production optimale est décroissante par rapport au salaire réel.

**4) Équilibre du marché du travail :** l'équilibre est réalisé lorsque l'offre de travail égalise la demande de travail : Nᵈ = Nˢ.
2 - w = w ⟹ **w* = W/P = 1** (salaire réel d'équilibre), N* = 1.

**5) À l'équilibre général (N=1, w=1) :**
- Production totale : y = f(1) = 2(1) - 0,5(1)² = **1,5**
- Masse salariale réelle (W·N/P) = w·N = **1**
- Profits réels totaux = y - w·N = 1,5 - 1 = **0,5**
- Répartition : la masse salariale représente 1/1,5 ≈ 66,7 % du produit, les profits 0,5/1,5 ≈ 33,3 %. La rémunération du travail domine la répartition du produit à cet équilibre.

## Partie 2 — Microéconomie

**1) Court terme / long terme :** au court terme, l'entreprise dispose d'au moins un facteur fixe (capacités, coûts fixes) et peut rester en activité même en perte tant que P ≥ coût variable moyen minimum. Au long terme, tous les facteurs sont variables, il n'y a plus de coûts fixes irrécupérables, et la libre entrée/sortie ramène le profit à zéro.

**2) Équilibre concurrentiel de long terme :** AC(q) = 50/q + q ; Cm(q) = 2q.
Le long terme impose AC = Cm : 50/q + q = 2q ⟹ q² = 50 ⟹ **q\* = 5√2 ≈ 7,07**
Prix d'équilibre : **P\* = Cm(q\*) = 2q\* = 10√2 ≈ 14,14**
Demande globale : Q\* = 40 - P\* ≈ **25,86**

**3) Équilibre de monopole :** Recette totale R(Q) = (40-Q)Q = 40Q - Q² ; Rm = 40-2Q ; Cm = 2Q.
Rm = Cm ⟹ 40-2Q = 2Q ⟹ **Qm = 10**, **Pm = 30**.
Profit du monopole = R - C = (40×10-10²) - (50+10²) = 300 - 150 = **150**.

**4) Surplus en concurrence de long terme :** en utilisant P = 40 - Q, on montre que
Surplus consommateur CS = Q\*²/2 ≈ (25,86)²/2 ≈ **334,3**
Profit total (surplus producteur net) ≈ **0** (libre entrée, profit nul au LT).
Surplus net total ≈ **334,3**

**5) Surplus en situation de monopole :**
CS(monopole) = 0,5×(40-Pm)×Qm = 0,5×10×10 = **50**
Recette totale - coût variable (surplus producteur) = 400-100 = 300 ; profit net = 300-50 = **150**
Surplus net total (monopole) = 50+150 = **200** (nettement inférieur aux 334,3 de la concurrence).

**6) Comparaison et conclusion :** le monopole génère une perte sèche de bien-être (200 < 334,3) : il restreint la quantité et fixe un prix supérieur au coût marginal, ce qui est inefficace au sens de Pareto. Le monopole ne peut être préférable que dans des cas particuliers : monopole naturel avec économies d'échelle importantes (coûts moyens décroissants, la concurrence serait non soutenable), nécessité de financer la R&D et l'innovation grâce aux rentes de monopole (thèse schumpétérienne), ou lorsque le monopole est régulé (prix plafonné au coût marginal) tout en bénéficiant des économies d'échelle.

## Partie 3 — Statistique

**Exercice 1 :** E(Y) = (0,6+0,1+α)·m. Y est un estimateur **sans biais** si et seulement si 0,6+0,1+α = 1, soit α = 0,3.
Donc Y est un estimateur **biaisé** de m si et seulement si **α ≠ 0,3**.

**Exercice 2 :** on numérote les 8 observations t = 1..8 (Année1 : T1..T4 → t=1..4 ; Année2 : T1..T4 → t=5..8).
Tendance Cₜ = 0,25t+0,25 : C₁=0,5 ; C₂=0,75 ; C₃=1 ; C₄=1,25 ; C₅=1,5 ; C₆=1,75 ; C₇=2 ; C₈=2,25

Résidu saisonnier brut (Yₜ - Cₜ) :
t=1 : 0,5-0,5=0 ; t=2 : 1-0,75=0,25 ; t=3 : 0,6-1=-0,4 ; t=4 : 1,5-1,25=0,25
t=5 : 1,1-1,5=-0,4 ; t=6 : 2-1,75=0,25 ; t=7 : 1,3-2=-0,7 ; t=8 : 2,5-2,25=0,25

Moyenne par trimestre :
S1 = (0 + (-0,4))/2 = -0,20
S2 = (0,25 + 0,25)/2 = 0,25
S3 = (-0,4 + (-0,7))/2 = -0,55
S4 = (0,25 + 0,25)/2 = 0,25

Somme = -0,20+0,25-0,55+0,25 = -0,25 ≠ 0 (contrainte du modèle additif : Σ Sᵢ = 0). On corrige en retranchant la moyenne (-0,25/4 = -0,0625) :
**S1 = -0,1375 ; S2 = 0,3125 ; S3 = -0,4875 ; S4 = 0,3125** (somme = 0 ✓)

## Partie 4 — Mathématique

**Exercice 1 :** E = {(x,y,z) ∈ ℝ³ / z=0}.
- (0,0,0) ∈ E (E non vide).
- Pour (x₁,y₁,0),(x₂,y₂,0) ∈ E : leur somme (x₁+x₂,y₁+y₂,0) a bien une 3ᵉ coordonnée nulle, donc appartient à E (stable par addition).
- Pour λ ∈ ℝ et (x,y,0) ∈ E : λ(x,y,0) = (λx,λy,0) ∈ E (stable par multiplication scalaire).
Donc **E est un sous-espace vectoriel de ℝ³** (c'est le plan xOy).

**Exercice 2 :** f(x,y) = xy - x²y - xy²

**1)** f est un polynôme en (x,y), donc **f est de classe C∞, en particulier C²** (une fonction polynomiale est indéfiniment différentiable).

**2) Points critiques :**
∂f/∂x = y - 2xy - y² = y(1-2x-y)
∂f/∂y = x - x² - 2xy = x(1-x-2y)
En annulant les deux dérivées partielles, on obtient 4 points critiques :
**(0,0) ; (1,0) ; (0,1) ; (1/3, 1/3)**

**3) Nature des points critiques (matrice hessienne) :**
f_xx = -2y ; f_yy = -2x ; f_xy = 1-2x-2y

- En (0,0) : f_xx=0, f_yy=0, f_xy=1 ⟹ det H = -1 < 0 ⟹ **point-selle**
- En (1,0) : f_xx=0, f_yy=-2, f_xy=-1 ⟹ det H = -1 < 0 ⟹ **point-selle**
- En (0,1) : f_xx=-2, f_yy=0, f_xy=-1 ⟹ det H = -1 < 0 ⟹ **point-selle**
- En (1/3,1/3) : f_xx=-2/3, f_yy=-2/3, f_xy=-1/3 ⟹ det H = 4/9-1/9 = 1/3 > 0 et f_xx<0 ⟹ **maximum local** (valeur f(1/3,1/3) = 1/27)
