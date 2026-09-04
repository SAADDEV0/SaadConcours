> Corrigé avec calculs détaillés.

**Partie 1 — Mathématiques**

**Exercice 1 — déterminant de M :**
On effectue les opérations élémentaires $L_2 \leftarrow L_2-L_1$, $L_3 \leftarrow L_3+L_1$, $L_4 \leftarrow L_4-L_1$ (qui ne changent pas la valeur du déterminant) :

$$\begin{pmatrix}1&1&1&1\\0&-2&0&0\\0&2&0&2\\0&-2&0&-2\end{pmatrix}$$

En développant selon la première colonne, il ne reste que le terme en $L_1$ multiplié par le mineur $3\times3$ formé des colonnes 2,3,4 des lignes 2 à 4 :
$$\begin{vmatrix}-2&0&0\\2&0&2\\-2&0&-2\end{vmatrix}$$
La deuxième colonne de ce mineur est entièrement nulle, donc ce déterminant vaut 0.
**Conclusion : $\det(M)=0$.**

**Exercice 2 :**

1. Calculs :
$$I_3-A=\begin{pmatrix}0&0&-1\\0&3&-1\\1&-1&1\end{pmatrix} \qquad A+2I_3=\begin{pmatrix}3&0&1\\0&0&1\\-1&1&2\end{pmatrix}$$

$$(I_3-A)(A+2I_3)=\begin{pmatrix}1&-1&-2\\1&-1&1\\2&1&2\end{pmatrix}$$

$$AB=\begin{pmatrix}3&0&0\\0&3&4\\0&0&1\end{pmatrix}$$

2. Le déterminant de A (calculé par la règle de Sarrus) vaut :
$$\det(A)=1\times[(-2)(0)-(1)(1)]-0+1\times[(0)(1)-(-2)(-1)]=(-1)+(-2)=-3\neq0$$
Donc **A est inversible**.

Par la méthode des cofacteurs (voir question 5) :
$$A^{-1}=\begin{pmatrix}1/3&-1/3&-2/3\\1/3&-1/3&1/3\\2/3&1/3&2/3\end{pmatrix}$$

3. Le polynôme caractéristique de A est $\chi_A(x)=x^3-\mathrm{tr}(A)x^2+\sigma_2(A)x-\det(A)$ avec $\mathrm{tr}(A)=1-2+0=-1$, $\sigma_2(A)=M_{11}+M_{22}+M_{33}=(-1)+1+(-2)=-2$, $\det(A)=-3$ :
$$\chi_A(x)=x^3+x^2-2x+3$$
D'après le théorème de Cayley-Hamilton, A vérifie son polynôme caractéristique :
$$A^3+A^2-2A+3I_3=0_3$$

4. De cette relation, on tire : $A(A^2+A-2I_3)=-3I_3$, soit
$$A\times\left[-\frac{1}{3}(A^2+A-2I_3)\right]=I_3 \Rightarrow A^{-1}=\frac{1}{3}(2I_3-A-A^2)$$
En calculant $A^2=\begin{pmatrix}0&1&1\\-1&5&-2\\-1&-2&0\end{pmatrix}$, on retrouve bien :
$$A^{-1}=\frac{1}{3}\begin{pmatrix}1&-1&-2\\1&-1&1\\2&1&2\end{pmatrix}=\begin{pmatrix}1/3&-1/3&-2/3\\1/3&-1/3&1/3\\2/3&1/3&2/3\end{pmatrix}$$
(ce qui confirme le résultat de la question 2).

5. Méthode des cofacteurs : on calcule la comatrice de A puis $A^{-1}=\dfrac{1}{\det A}\,^t\mathrm{Com}(A)$. Les cofacteurs sont :
$A_{11}=-1,\ A_{12}=-1,\ A_{13}=-2,\ A_{21}=1,\ A_{22}=1,\ A_{23}=-1,\ A_{31}=2,\ A_{32}=-1,\ A_{33}=-2$.
La transposée de la comatrice divisée par $\det(A)=-3$ redonne exactement la matrice trouvée ci-dessus.

**Exercice 3 :** Notons $a=1-m$. Le système s'écrit :
$$x-y=-a,\qquad x+ay-z=0,\qquad ax+y+z=0$$
En additionnant les deux dernières équations : $(1+a)(x+y)=0$.

- **Si $a\neq-1$ (c'est-à-dire $m\neq2$)** : alors $x+y=0$, soit $y=-x$. En reportant dans la première équation : $2x=-a$, donc
$$x=\frac{m-1}{2},\qquad y=\frac{1-m}{2},\qquad z=x+ay=\frac{m(m-1)}{2}$$
(solution unique, vérifiée dans la 3ᵉ équation).

- **Si $a=-1$ (c'est-à-dire $m=2$)** : le système devient $x-y=1$, $x-y-z=0$, $-x+y+z=0$ (2 équations indépendantes). On a $z=x-y=1$ et $y$ libre : **une infinité de solutions** $(y+1,\,y,\,1)$, $y\in\mathbb{R}$.

**Partie 2 — Statistiques**

**Q1.** Soit N l'effectif total. Élèves à mauvaise vue $=0,4N$ ; parmi eux, ceux qui portent des lunettes $=0,7\times0,4N=0,28N=21$
$$N=\frac{21}{0,28}=75\text{ élèves}$$

**Q2.** Soit p la proportion d'hommes : $35p+50(1-p)=40 \Rightarrow -15p=-10 \Rightarrow p=\dfrac{2}{3}\approx66,7\%$ d'hommes (et 33,3% de femmes).

**Q3.** $H_0$ : il y a indépendance entre le sexe et la variable étudiée (parité). $H_1$ : il existe un lien entre les deux variables.
Comme $\chi^2_{calculé}=0,45 < \chi^2_{critique}=3,84$, on ne rejette pas $H_0$ : au seuil de 5%, on conclut à l'**indépendance** entre le sexe et la parité (l'écart observé n'est pas statistiquement significatif).

**Q4.** Chemin A : $Z=\dfrac{30-27}{5}=0,6 \Rightarrow P(T_A\le30)=\Phi(0,6)=0,7257$ (72,57%).
Chemin B : $Z=\dfrac{30-30}{2}=0 \Rightarrow P(T_B\le30)=\Phi(0)=0,5$ (50%).
**Conclusion :** malgré une durée moyenne plus longue, le chemin A offre une probabilité bien plus élevée d'arriver à temps (72,6% contre 50%) : **l'ouvrier doit choisir le chemin A**.

**Q5.** La rentabilité (variable à expliquer, quantitative) dépend de deux variables explicatives quantitatives (durée de placement, variance/risque) : il faut mettre en œuvre une **régression linéaire multiple**, complétée par les tests de significativité des coefficients et le coefficient de détermination $R^2$.

**Partie 3 — Le vieillissement de la population et la prévoyance au Maroc (plan indicatif)**

**Introduction** : transition démographique marocaine (baisse de la fécondité, allongement de l'espérance de vie) → augmentation du ratio de dépendance des personnes âgées ; enjeu de soutenabilité des régimes de retraite (CNSS, CMR, RCAR).

**I. Un système de prévoyance actuellement fragilisé face au vieillissement**
- Régimes par répartition menacés par la baisse du ratio actifs cotisants/retraités.
- Faible taux de couverture sociale (secteur informel important).
- Déséquilibres actuariels des caisses de retraite marocaines (CMR notamment).

**II. Les leviers d'adaptation de la prévoyance**
- Réforme paramétrique des régimes de retraite (âge de départ, taux de cotisation, mode de calcul des pensions).
- Généralisation de la couverture sociale (chantier de la protection sociale généralisée engagé au Maroc depuis 2021).
- Développement de la capitalisation individuelle et de l'épargne retraite complémentaire (produits d'assurance-vie, plans d'épargne retraite).
- Développement des services de dépendance et de prise en charge médico-sociale des personnes âgées (silver economy).

**Conclusion** : la prévoyance marocaine doit conjuguer réformes structurelles des régimes de retraite, élargissement de l'assiette des cotisants et diversification des mécanismes de financement (répartition + capitalisation) pour absorber le choc du vieillissement démographique à moyen et long terme.