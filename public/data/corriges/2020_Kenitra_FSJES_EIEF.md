> Corrigé rédigé à partir du programme standard des modules (microéconomie du consommateur, probabilités, statistique descriptive) et d'un calcul vérifié — aucune grille de correction officielle disponible pour ce sujet.

### Exercice 1

**1.** Pour une fonction d'utilité Cobb-Douglas $U=X^aY^b$ maximisée sous la contrainte budgétaire $P_XX+P_YY=R$, les demandes optimales sont :
$$X^*=\frac{a}{a+b}\cdot\frac{R}{P_X}, \qquad Y^*=\frac{b}{a+b}\cdot\frac{R}{P_Y}$$
Ici $a=1/3$, $b=1/4$, donc $a+b=7/12$, soit $\dfrac{a}{a+b}=\dfrac47$ et $\dfrac{b}{a+b}=\dfrac37$ :
$$X^*=\frac{4}{7}\cdot\frac{R}{P_X}, \qquad Y^*=\frac{3}{7}\cdot\frac{R}{P_Y}$$

**2.** $X^*=\dfrac47\times\dfrac{47}{5}=\dfrac{188}{35}\approx\mathbf{5{,}37}$ ; $Y^*=\dfrac37\times\dfrac{47}{3}=\dfrac{47}{7}\approx\mathbf{6{,}71}$.

**3.** $R/P_X=94/10=9{,}4$ (identique à $47/5=9{,}4$) et $R/P_Y=94/6\approx15{,}67$ (identique à $47/3\approx15{,}67$) : **les quantités demandées restent inchangées** ($X^*\approx5{,}37$, $Y^*\approx6{,}71$). Le revenu et les deux prix ayant tous doublé simultanément, le pouvoir d'achat réel du consommateur — et donc sa demande — ne change pas : la fonction de demande est **homogène de degré 0** en (R, $P_X$, $P_Y$).

**4.** Les nouveaux exposants sont $a=2/15$, $b=1/10=3/30$ ; en réduisant au même dénominateur, $a=4/30$ et $b=3/30$, soit un **rapport $a:b = 4:3$, identique** à celui de la fonction initiale ($1/3:1/4=4:3$). Les parts budgétaires $\frac{a}{a+b}=\frac47$ et $\frac{b}{a+b}=\frac37$ sont donc **inchangées** : cette nouvelle fonction d'utilité représente les **mêmes préférences** (transformation croissante de la fonction initiale) et conduit exactement aux **mêmes fonctions de demande**.

### Exercice 2

**1.a.** $S=\sum_{i=1}^6 X_i$, somme de 6 variables normales i.i.d., suit une loi normale $\mathcal N(6m,\,6\sigma^2) = \mathcal N(3000,\,14406)$, soit un écart-type $\sqrt{14406}\approx120{,}03$.

**1.b.** $\bar X = S/6$ suit une loi normale $\mathcal N\!\left(m,\dfrac{\sigma^2}{6}\right)=\mathcal N(500,\,400{,}17)$, soit un écart-type $\sigma/\sqrt6\approx20{,}00$.

**2.** Le prix unitaire étant 0,80 Dh et le bénéfice par unité vendue 0,15 Dh, le coût de revient unitaire vaut $0{,}80-0{,}15=0{,}65$ Dh. Avec un approvisionnement fixe de 500 unités/jour, le coût est engagé sur la totalité de la commande (que les unités soient vendues ou non), soit un coût hebdomadaire de $6\times500\times0{,}65=1950$ Dh, tandis que la recette dépend des ventes réelles $S$ (loi $\mathcal N(3000,14406)$ établie en 1.a) : $\text{Recette}=0{,}80\,S$.

Bénéfice hebdomadaire $=0{,}80\,S-1950$. On cherche $P(\text{Bénéfice}\ge300)$ :
$$0{,}80\,S-1950\ge300 \;\Longleftrightarrow\; S\ge\frac{2250}{0{,}80}=2812{,}5$$
$$Z=\frac{2812{,}5-3000}{\sqrt{14406}}=\frac{-187{,}5}{120{,}03}\approx-1{,}56$$
$$P(S\ge2812{,}5)=P(Z\ge-1{,}56)=\Phi(1{,}56)=\mathbf{0{,}94}$$

La probabilité que le bénéfice hebdomadaire atteigne au moins 300 Dh est donc de **94%**.

### Exercice 3

Moyenne : $\bar x=\dfrac{120{,}5}{40}=3{,}0125$ (milliers de Dh, soit 3012,5 Dh).
Variance : $Var(x)=\dfrac{\sum x_i^2}{n}-\bar x^2=\dfrac{447{,}20}{40}-3{,}0125^2=11{,}18-9{,}075\approx2{,}105$ (en milliers² de Dh), soit un écart-type $\approx1{,}451$ millier de Dh ($\approx$1451 Dh) et un coefficient de variation $CV=\sigma/\bar x\approx1{,}451/3{,}0125\approx48{,}2\%$.

**a. Augmentation des salaires de 15% (transformation multiplicative $x_i'=1{,}15\,x_i$)**

La dispersion absolue (écart-type) est multipliée par 1,15 : $\sigma'=1{,}15\times1{,}451\approx1{,}669$ millier de Dh — la dispersion absolue **augmente**. En revanche, le **coefficient de variation reste inchangé** (48,2%), car la moyenne est elle aussi multipliée par 1,15 : la dispersion relative aux salaires ne change pas.

**b. Augmentation de 5000 DH pour chaque salaire (transformation additive $x_i'=x_i+5$, en milliers)**

Une translation ne modifie pas l'écart-type : la dispersion absolue **reste inchangée** ($\sigma'=1{,}451$). En revanche, la moyenne augmente ($\bar x'=3{,}0125+5=8{,}0125$), donc le coefficient de variation **diminue** ($CV'=1{,}451/8{,}0125\approx18{,}1\%$) : les salaires sont désormais relativement plus homogènes entre eux.
