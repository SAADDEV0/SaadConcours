> Corrigé avec calculs détaillés.

**Partie 1 — Mathématiques**

**Exercice 1 :** f(x,y,z)=(x, -3y+4z, -2y+3z), matrice M=[[1,0,0],[0,-3,4],[0,-2,3]].
1) f est linéaire car chaque composante est une combinaison linéaire de x, y, z.
2) Les images de la base canonique f(e₁)=(1,0,0), f(e₂)=(0,-3,-2), f(e₃)=(0,4,3) forment une famille libre (déterminant de M non nul : det(M)=1×(-9+8)=-1≠0), donc une base de R³ : f est bijective.
3) Calcul de f∘f : M²=I₃ (vérification directe par produit matriciel). **Donc f∘f=id, c'est-à-dire f est une involution : f⁻¹=f.** Ainsi f⁻¹(x,y,z)=(x, -3y+4z, -2y+3z), soit la même expression que f.

**Exercice 2 :** f(x,y)=4xy-1 sous contrainte x²+y²=1. Par la méthode des multiplicateurs de Lagrange (∇f=λ∇g) : 4y=2λx et 4x=2λy, d'où y²=x², donc y=±x. Avec x²+y²=1 : x=±√2/2.
- Points (√2/2,√2/2) et (-√2/2,-√2/2) : f=4×(1/2)-1=**1** (maximum).
- Points (√2/2,-√2/2) et (-√2/2,√2/2) : f=4×(-1/2)-1=**-3** (minimum).

**Partie 2 — Statistique**

**Exercice 1 :** Une variance proche de 0 signifie que les valeurs de l'échantillon sont très proches les unes des autres (quasi-homogénéité, dispersion quasi nulle autour de la moyenne).

**Exercice 2 :** S²=(1/n)Σ(Xᵢ-X̄)² a pour espérance E(S²)=((n-1)/n)σ² ≠ σ² : **c'est un estimateur biaisé** (biais = -σ²/n). En posant S'²=(n/(n-1))S², on a E(S'²)=(n/(n-1))×((n-1)/n)σ²=σ² : **S'² est un estimateur sans biais de σ².**

**Partie 3 — Microéconomie**

**Exercice 1 :** Le paradoxe de Bertrand : en concurrence par les prix avec produits homogènes et au moins deux firmes, l'équilibre théorique conduit au prix = coût marginal (comme en concurrence pure et parfaite), ce qui est contraire à l'intuition qu'un duopole exerce un pouvoir de marché. Solutions pour le contourner : différenciation des produits, contraintes de capacité de production, jeu répété permettant la collusion tacite.

**Exercice 2 :** C(q)=450+15q+2q², P=15.
- Optimum : Cm(q)=dC/dq=15+4q. À l'optimum P=Cm : 15=15+4q → q*=0. Le prix de marché égale exactement le coût variable moyen minimal (CVM(0)=15) : l'entreprise est à son seuil de fermeture. **Profit = P×q - C(q) = -450** (perte égale aux coûts fixes).
- Demande de marché Qd=900-10P. À l'équilibre de long terme, P=CM minimal. CM(q)=450/q+15+2q ; minimiser : dCM/dq=-450/q²+2=0 → q²=225 → **q=15**. CM(15)=30+15+30=75 → **prix d'équilibre de long terme P*=75**.
  a. P*=**75**.
  b. Qd=900-10×75=**150**.
  c. Nombre d'entreprises = Qd/q* = 150/15=**10**.
  d. Profit de chaque entreprise à l'équilibre de long terme = **0** (entrée/sortie libre, P=CM minimal).

**Partie 4 — Macroéconomie**

1) Marché du travail : Nˢ=N̄ₛ (offre fixe) = Nᵈ=(H²/4)(W/P)⁻² ⟹ **(W/P)\* = H/(2√N̄ₛ)**, et **N\*=N̄ₛ**, avec production d'équilibre **Q\*=H√N̄ₛ**.

2) Marché de la monnaie : Mᵈ=Mˢ ⟹ (1/v)P·y\*=M̄ ⟹ **P\* = vM̄/(H√N̄ₛ)**.

3) Marché des biens : S=I+G ⟹ 8000i-400 = -2000i+1000+Ḡ ⟹ 10000i = 1400+Ḡ ⟹ **i\* = (1400+Ḡ)/10000 = 0,14 + Ḡ/10000**.
