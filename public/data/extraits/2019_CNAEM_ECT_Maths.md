**Concours national d'accès aux écoles de management (CNAEM) — session 2019**
**Filière économique et commerciale, option technologique (ECT)**
**Épreuve de mathématiques — durée : 4 heures**

*Les candidats sont informés que la précision des raisonnements ainsi que le soin apporté à la rédaction et à la présentation des copies seront pris en compte dans la notation. Il convient en particulier de rappeler avec précision les références des questions abordées. Si, au cours de l'épreuve, un candidat repère ce qui peut lui sembler être une erreur d'énoncé, il le signale sur sa copie et poursuit sa composition en expliquant les raisons des initiatives qu'il est amené à prendre.*

*L'épreuve se compose de quatre exercices indépendants.*

---

## EXERCICE 1

On considère les matrices suivantes :

$$A=\begin{pmatrix}-1&0&0\\-2&1&0\\-2&-1&2\end{pmatrix},\quad P=\begin{pmatrix}1&0&0\\1&1&0\\1&1&1\end{pmatrix},\quad Q=\begin{pmatrix}1&0&0\\-1&1&0\\0&-1&1\end{pmatrix},$$

$$D=\begin{pmatrix}-1&0&0\\0&1&0\\0&0&2\end{pmatrix},\quad I=\begin{pmatrix}1&0&0\\0&1&0\\0&0&1\end{pmatrix}\quad\text{et}\quad O=\begin{pmatrix}0&0&0\\0&0&0\\0&0&0\end{pmatrix}.$$

### Partie 1 : puissances de la matrice A

**1.a)** Vérifier que $PQ = I$.
**1.b)** En déduire que $P$ est une matrice inversible et calculer $P^{-1}$, sa matrice inverse.
**1.c)** Vérifier que $AP = PD$.
**1.d)** En déduire que $A$ est une matrice diagonalisable.
**2.** Soient les vecteurs $u=\begin{pmatrix}1\\1\\1\end{pmatrix}$, $v=\begin{pmatrix}0\\1\\1\end{pmatrix}$ et $w=\begin{pmatrix}0\\0\\1\end{pmatrix}$. Montrer que $u$, $v$ et $w$ sont des vecteurs propres de la matrice $A$, en précisant pour chacun la valeur propre correspondante.
**3.a)** Montrer par récurrence que, pour tout entier naturel $n$, $A^n = PD^nP^{-1}$.
**3.b)** Déterminer, pour tout entier naturel $n$, $D^n$ en fonction de $n$.
**3.c)** En déduire, pour tout entier naturel $n$, l'expression de $A^n$ en fonction de $n$, sous forme d'un tableau.
**4.** On pose, pour tout entier naturel $n$, $U_n=\begin{pmatrix}a_n\\b_n\\c_n\end{pmatrix}$, où $(a_n)_{n\ge0}$, $(b_n)_{n\ge0}$ et $(c_n)_{n\ge0}$ sont des suites réelles. On définit la suite $(U_n)_{n\ge0}$ par : pour tout entier naturel $n$, $U_{n+1} = AU_n$, et $U_0=\begin{pmatrix}-1\\1\\1\end{pmatrix}$.
**4.a)** Montrer par récurrence que, pour tout entier naturel $n$, $U_n = A^nU_0$.
**4.b)** Déterminer, pour tout entier naturel $n$, $a_n$, $b_n$ et $c_n$ en fonction de $n$ (on utilisera l'expression de $A^n$ obtenue à la question 3. c)).
**4.c)** En utilisant le fait que $U_{n+1} = AU_n$ et $U_0=\begin{pmatrix}-1\\1\\1\end{pmatrix}$, recopier et compléter le programme Scilab suivant afin qu'il affiche $U_n$, l'entier $n$ étant donné par l'utilisateur.

```
n=input(...........)
A=...........
U=...........
for i=...........
    U=...........
end
disp(...........)
```

### Partie 2 : résolution de l'équation $M^3 = A$

On se propose de résoudre l'équation $(E)$ : $M^3 = A$, d'inconnue $M$, matrice carrée d'ordre trois à coefficients réels. Soit $M$ une telle matrice quelconque ; on pose $N = P^{-1}MP$.

**1.** Montrer que $M^3 = A$ si, et seulement si, $N^3 = D$.
**2.** Montrer que, si $N^3 = D$, alors $ND = DN$.
**3.** En déduire que, si $N^3 = D$, alors $N$ est une matrice diagonale.
**4.** Déterminer la matrice diagonale $N$ telle que $N^3 = D$.
**5.** En déduire la solution de l'équation matricielle $(E)$.

---

## EXERCICE 2

Soit $f$ la fonction définie sur $\mathbb{R}$ par :
$$f(t)=\begin{cases}0 & \text{si } t<1\\ e^{-(t-1)} & \text{si } t\ge 1\end{cases}$$

**1.a)** Calculer, pour tout réel $x \ge 1$, $\displaystyle\int_1^x e^{-(t-1)}\,dt$.
**1.b)** En déduire la valeur de $\displaystyle\int_1^{+\infty} e^{-(t-1)}\,dt$.
**2.** Montrer que $f$ est une densité de probabilité.

*Dans toute la suite, on note $X$ la variable aléatoire admettant $f$ comme densité.*

**3.** Montrer que la fonction de répartition $F_X$ de $X$ est donnée par : $F_X(x)=0$ si $x<1$ et $F_X(x)=1-e^{-(x-1)}$ si $x\ge1$.
**4.** Déterminer l'espérance $E(X)$ (on pourra utiliser une intégration par parties).
**5.a)** Montrer que $E(X^2) = 1 + 2E(X)$.
**5.b)** En déduire la variance $V(X)$.
**6.** On note $Y$ la variable aléatoire définie par $Y = X - 1$.
**6.a)** Déterminer l'espérance $E(Y)$.
**6.b)** Déterminer la variance $V(Y)$.
**6.c)** Déterminer la fonction de répartition $F_Y$ de $Y$.
**7.** On considère, pour tout entier naturel non nul $n$, la fonction $f_n$ définie sur $\mathbb{R}$ par :
$$f_n(t)=\begin{cases}0 & \text{si } t<\frac1n\\ e^{-\left(t-\frac1n\right)} & \text{si } t\ge \frac1n\end{cases}$$
**7.a)** Montrer que, pour tout entier naturel non nul $n$, $f_n$ est une densité de probabilité.

*On note $X_n$ la variable aléatoire admettant $f_n$ comme densité, et $Y_n$ la variable aléatoire définie par $Y_n = X_n - \frac1n$.*

**7.b)** i) Déterminer la fonction de répartition $F_{X_n}$ de $X_n$. ii) En déduire la fonction de répartition $F_{Y_n}$ de $Y_n$.
**7.c)** Déterminer l'espérance $E(X_n)$.
**7.d)** En déduire l'espérance $E(Y_n)$.
**7.e)** Déterminer $P\left(\frac2n \le X_n \le \frac3n\right)$.
**7.f)** Écrire un programme en Scilab qui détermine et affiche le plus petit entier naturel non nul $n$ tel que $P\left(\frac2n \le X_n \le \frac3n\right) \le 10^{-5}$.

---

## EXERCICE 3

On dispose d'un dé cubique équilibré dont les faces sont numérotées de 1 à 6 et d'une pièce de monnaie truquée telle que la probabilité d'obtenir Face est égale à deux fois la probabilité d'obtenir Pile. On lance le dé une seule fois et on observe le résultat. Si le résultat est 1, on lance la pièce une seule fois ; sinon, on lance la pièce deux fois, de façon indépendante. On note $X$ la variable aléatoire égale au résultat du dé et $Y$ la variable aléatoire égale au nombre de Faces obtenues.

**1.a)** Justifier que $X$ suit une loi uniforme que l'on précisera.
**1.b)** Déterminer l'espérance $E(X)$ et la variance $V(X)$.
**2.a)** Montrer que $P_{(X=1)}(Y=0) = \frac13$.
**2.b)** Montrer que, pour $k \in \{2,3,4,5,6\}$, $P_{(X=k)}(Y=0) = \frac19$.
**2.c)** En déduire la valeur de $P(Y=0)$.
**3.** Montrer que $P(Y=2) = \frac{10}{27}$.
**4.** Déterminer la valeur de $P(Y=1)$.
**5.** Déterminer l'espérance $E(Y)$ et la variance $V(Y)$.
**6.a)** Donner, sous la forme d'un tableau à double entrée, la loi du couple $(X,Y)$.
**6.b)** Les variables $X$ et $Y$ sont-elles indépendantes ? Justifier.
**6.c)** Calculer la covariance $\operatorname{Cov}(X,Y)$.
**6.d)** Déterminer le coefficient de corrélation $\rho(X,Y)$.

---

## EXERCICE 4

Une entreprise produit en grande quantité des crayons. Certains crayons, qui présentent des défauts, ne sont pas commercialisables. L'entreprise dispose de deux machines :
- la machine $M_1$, lente, pour laquelle la probabilité qu'un crayon soit commercialisable est égale à $0{,}99$ ;
- la machine $M_2$, rapide, pour laquelle cette probabilité est égale à $0{,}96$.

À la fin d'une journée de fabrication, on prélève un crayon au hasard. On note $C$ l'événement « le crayon est commercialisable », $a$ la probabilité qu'un crayon provienne de $M_1$, et $P(C)$ la probabilité de $C$.

**1.** Montrer que $P(C) = 0{,}03a + 0{,}96$.
**2.** À la fin de la production, on constate que 97 % des crayons sont commercialisables. Prouver que la probabilité que le crayon provienne de la machine $M_2$ est égale à deux fois la probabilité qu'il provienne de la machine $M_1$.
**3.** On prélève successivement, indépendamment et avec remise, dix crayons du stock destiné à la vente. Dans cette question, on prend $P(C) = 0{,}97$. On appelle $X$ la variable aléatoire égale au nombre de crayons commercialisables dans ce prélèvement. On donne $0{,}97^9 \approx 0{,}760$.
**3.a)** Justifier que $X$ suit une loi binomiale dont on donnera les paramètres.
**3.b)** Déterminer la probabilité qu'il n'y ait, dans ce prélèvement, que des crayons commercialisables.
**3.c)** Déterminer la probabilité qu'il y ait, dans ce prélèvement, au plus un crayon non commercialisable.
**3.d)** Écrire un programme Scilab, utilisant la fonction `grand`, qui simule la variable aléatoire $X$ et renvoie une matrice à une ligne et $n$ colonnes, $n$ étant entré par l'utilisateur.
**4.** Le responsable décide de porter la proportion de crayons commercialisables à $0{,}99$ en achetant une nouvelle machine $M_3$. On note $b$ la probabilité qu'un crayon provienne de $M_3$, avec $0 < b < 1$.
**4.a)** Déterminer $P_{M_3}(C)$, la probabilité qu'un crayon soit commercialisable sachant qu'il provient de $M_3$, en fonction de $a$ et $b$.
**4.b)** Montrer que $P_{M_3}(C) \ge 0{,}999$ si, et seulement si, $0 < a + \frac{13}{10}\,b \le 1$.
**4.c)** On suppose dans cette question que $P_{M_3}(C) = 0{,}999$. On note $Y$ la variable aléatoire égale au nombre de tirages nécessaires, parmi les seuls crayons provenant de $M_3$, pour obtenir le premier crayon non commercialisable. On suppose les tirages indépendants.
*i)* Vérifier que $Y$ suit une loi géométrique dont on précisera le paramètre $p$.
*ii)* Déterminer, pour tout entier naturel non nul $k$, $P(Y=k)$.
*iii)* Déterminer l'espérance $E(Y)$ et la variance $V(Y)$.
*iv)* Écrire un programme Scilab, utilisant la fonction `grand`, qui simule la variable aléatoire $Y$ et renvoie une matrice à $m$ lignes et une colonne, $m$ étant entré par l'utilisateur.

*Fin de l'épreuve.*
