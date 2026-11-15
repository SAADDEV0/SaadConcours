**Royaume du Maroc — Ministère de l'Enseignement supérieur, de la Recherche scientifique et de la Formation des cadres — Présidence du CNAEM 2015**
**Concours national d'accès aux écoles de management (CNAEM) 2015 — filière ECT**
**Épreuve de mathématiques — durée : 4 heures**

*Chaque candidat n'a droit qu'à un seul cahier d'épreuve, sur lequel il écrit son nom, ses prénoms, son centre et son numéro d'examen avant de commencer à rédiger. L'usage de toute machine (calculatrice, traductrice…) ou dictionnaire est strictement interdit. La précision des raisonnements et le soin apporté à la rédaction et à la présentation des copies seront pris en compte dans la notation ; il convient de rappeler avec précision les références des questions abordées. Si un candidat repère ce qui peut lui sembler être une erreur d'énoncé, il le signale sur sa copie et poursuit sa composition en expliquant les raisons des initiatives qu'il est amené à prendre.*

*L'épreuve se compose de quatre exercices indépendants.*

---

## EXERCICE 1

On donne les matrices :
$$A=\begin{pmatrix}\frac72&-\frac32&-3\\\frac32&\frac12&-3\\\frac32&-\frac32&-1\end{pmatrix},\quad P=\begin{pmatrix}1&1&1\\1&1&-1\\1&0&1\end{pmatrix},\quad D=\begin{pmatrix}-1&0&0\\0&2&0\\0&0&2\end{pmatrix}\quad\text{et}\quad I=\begin{pmatrix}1&0&0\\0&1&0\\0&0&1\end{pmatrix}.$$

### Partie I

**1.a)** Montrer que $P$ est une matrice inversible et calculer sa matrice inverse.
**1.b)** Vérifier que $P^{-1}\begin{pmatrix}-\frac32\\0\\-2\end{pmatrix}=\begin{pmatrix}-\frac54\\\frac12\\-\frac34\end{pmatrix}$.
**2.a)** Vérifier que $A = PDP^{-1}$.
**2.b)** Montrer par récurrence que, pour tout entier naturel $n$, $A^n = PD^nP^{-1}$.
**2.c)** Pour tout entier naturel $n$, calculer $D^n$ en fonction de $n$.
**2.d)** Pour tout entier naturel $n$, en déduire l'expression de $A^n$ en fonction de $n$.

### Partie II

Les suites $(x_n)$, $(y_n)$ et $(z_n)$ sont définies par les conditions initiales $x_0 = -4$, $y_0 = -2$ et $z_0 = -1$ et, pour tout entier naturel $n$ :
$$\begin{cases}x_{n+1}=\frac72x_n-\frac32y_n-3z_n+1\\ y_{n+1}=\frac32x_n+\frac12y_n-3z_n+1\\ z_{n+1}=\frac32x_n-\frac32y_n-z_n-2\end{cases}$$
On pose $B=\begin{pmatrix}1\\1\\-2\end{pmatrix}$ et, pour tout entier naturel $n$, $X_n=\begin{pmatrix}x_n\\y_n\\z_n\end{pmatrix}$.

**1.** Justifier que, pour tout entier naturel $n$, $X_{n+1} = AX_n + B$. (1)
**2.** On se propose de trouver la matrice colonne $U \in \mathcal M_{3,1}(\mathbb{R})$ telle que $U = AU + B$. (2)
**2.a)** Montrer que la relation (2) équivaut à $(I - A)U = B$.
**2.b)** Vérifier que $A^2 - A - 2I = 0$, où $0$ est la matrice nulle de $\mathcal M_3(\mathbb{R})$, et que $\left(-\frac12A\right)(I - A) = I$.
**2.c)** En déduire que la matrice $I - A$ est inversible et calculer son inverse.
**2.d)** En déduire que $U = -\frac12AB$ et vérifier que $U=\begin{pmatrix}-4\\-4\\-1\end{pmatrix}$.
**3.a)** Montrer que, pour tout entier naturel $n$, $X_{n+1} - U = A(X_n - U)$.
**3.b)** En déduire par récurrence que, pour tout entier naturel $n$, $X_n - U = A^n(X_0 - U)$.
**4.** En utilisant l'expression de $A^n$ obtenue dans la partie I, question 2.d), calculer $x_n$, $y_n$ et $z_n$ en fonction de $n$.
**5.** Soient $(a_n)$, $(b_n)$ et $(c_n)$ les suites définies par les conditions initiales $a_0 = e^{-4}$, $b_0 = -2$ et $c_0 = e^{-1}$, telles que $(a_n)$ et $(c_n)$ sont positives et, pour tout entier naturel $n$ :
$$\begin{cases}\ln(a_{n+1})=\frac72\ln(a_n)-\frac32b_n-3\ln(c_n)+1\\ b_{n+1}=\frac32\ln(a_n)+\frac12b_n-3\ln(c_n)+1\\ \ln(c_{n+1})=\frac32\ln(a_n)-\frac32b_n-\ln(c_n)-2\end{cases}$$
En utilisant un changement de variable convenable, calculer $a_n$, $b_n$ et $c_n$ en fonction de $n$.

---

## EXERCICE 2

Soit $f$ la fonction définie pour tout réel $x$ par : $f(x) = 0$ si $x < 0$ et $f(x)=\frac18\left(x^3+2x^2\right)e^{-\frac x2}$ si $x \ge 0$. On désigne par $\mathcal C$ la courbe représentative de $f$ dans un repère du plan.

### Partie I

**1.** Déterminer la limite de $f$ en $+\infty$.
**2.** Montrer que, pour tout réel $x$ positif, $f'(x)=-\frac{1}{16}x\left(x^2-4x-8\right)e^{-\frac x2}$.
**3.** En déduire que, pour tout réel $x$ positif, $f'(x)=-\frac{1}{16}x(x-x_1)(x-x_2)e^{-\frac x2}$, avec $x_1$ et $x_2$ à déterminer.
**4.** Donner le tableau de variations de $f$ sur $\mathbb{R}_+$.

### Partie II

**1.** On pose $I_0=\displaystyle\int_0^{+\infty}e^{-\frac x2}dx$ et, pour tout entier naturel non nul $n$, $I_n=\displaystyle\int_0^{+\infty}x^ne^{-\frac x2}dx$.
**1.a)** Montrer que $I_0$ est une intégrale convergente égale à 2.
**1.b)** En utilisant une intégration par parties, montrer que, pour tout réel positif $A$ :
$$\int_0^Ax^{n+1}e^{-\frac x2}dx=-2A^{n+1}e^{-\frac A2}+2(n+1)\int_0^Ax^ne^{-\frac x2}dx.$$
**1.c)** Montrer que $\displaystyle\lim_{A\to+\infty}A^{n+1}e^{-\frac A2}=0$ ; on pourra faire un changement de variable en posant $t=\frac{A}{2(n+1)}$.
**1.d)** Montrer que, pour tout entier naturel $n$, $I_n$ est convergente et que $I_{n+1} = 2(n+1)I_n$.
**1.e)** En déduire par récurrence que, pour tout entier naturel $n$, $I_n = 2^{n+1}n!$.
**2.** Soit la fonction $g$ définie sur $\mathbb{R}$ par $g(x)=\frac{1}{16}f(x)$.
**2.a)** Montrer que $g$ est la densité de probabilité d'une variable aléatoire que l'on notera $S$.
**2.b)** Calculer l'espérance $E(S)$ et la variance $V(S)$ de $S$.

### Partie III

On pose, pour tout entier naturel non nul $N$, $S_N=\displaystyle\sum_{k=1}^{N}\frac{I_{k-1}}{(k+1)!\,2^k}$.

**1.a)** Vérifier que, pour tout entier naturel non nul $k$, $\dfrac{1}{k(k+1)}=\dfrac1k-\dfrac{1}{k+1}$.
**1.b)** En déduire que, pour tout entier naturel non nul $N$, $S_N=1-\dfrac{1}{N+1}$.
**2.** Montrer que la série $\displaystyle\sum_{n\ge1}\frac{I_{n-1}}{(n+1)!\,2^n}$ est convergente et calculer sa somme.

---

## EXERCICE 3

On dispose d'un dé cubique classique équilibré et d'une pièce de monnaie équilibrée. On lance le dé et on observe son résultat. S'il est pair (2, 4 ou 6), on lance la pièce deux fois ; dans tous les autres cas, on la lance une seule fois. On note $X$ la variable aléatoire égale au résultat du dé et $Y$ la variable aléatoire égale au nombre de Piles obtenus au cours de l'expérience.

**1.a)** Vérifier que $X$ suit une loi uniforme.
**1.b)** Donner l'espérance $E(X)$ et la variance $V(X)$.
**2.a)** Montrer que, pour $k \in \{1, 3, 5\}$, $P_{(X=k)}(Y = 0) = \frac12$.
**2.b)** Montrer que, pour $k \in \{2, 4, 6\}$, $P_{(X=k)}(Y = 0) = \frac14$.
**2.c)** En déduire la valeur de $P(Y = 0)$.
**3.** Montrer que $P(Y=2)=P\big((Y=2)\cap(X=2)\big)+P\big((Y=2)\cap(X=4)\big)+P\big((Y=2)\cap(X=6)\big)=\frac18$.
**4.** Donner finalement la loi de la variable aléatoire $Y$, puis calculer son espérance $E(Y)$ et sa variance $V(Y)$.
**5.a)** Donner, sous la forme d'un tableau à double entrée, la loi du couple $(X, Y)$.
**5.b)** Les variables $X$ et $Y$ sont-elles indépendantes ? Justifier votre réponse.
**5.c)** Calculer la covariance de $X$ et $Y$.
**5.d)** Déterminer le coefficient de corrélation entre $X$ et $Y$.

---

## EXERCICE 4

On considère la fonction $f$ définie sur $\mathbb{R}$ par $f(t) = 0$ si $t \le 0$ et $f(t)=e^{-\frac14t}-e^{-\frac13t}$ si $t > 0$.

**1.a)** Montrer que $f$ est continue sur $\mathbb{R}$.
**1.b)** Soit $\theta$ un réel de l'intervalle $]0, 1[$ ; montrer que $\theta^3 - \theta^4 > 0$.
**1.c)** Montrer que, si $t > 0$, alors $e^{-\frac{1}{12}t}$ est un réel de l'intervalle $]0, 1[$.
**1.d)** En déduire que, pour tout réel $t$, $f(t) \ge 0$ (on pourra poser $\theta=e^{-\frac{1}{12}t}$).

*Dans toute la suite de l'exercice, on note, pour tout réel $x$, $F(x)=\displaystyle\int_{-\infty}^xf(t)\,dt$.*

**2.a)** Que vaut $F(x)$ lorsque $x \le 0$ ? Justifier que, si $x > 0$, $F(x)=\displaystyle\int_0^xf(t)\,dt$.
**2.b)** Montrer que, pour tout couple de réels $(x, a)$ tel que $x > 0$ et $a > 0$, $\displaystyle\int_0^xe^{-at}dt=\frac1a\left(1-e^{-ax}\right)$.
**2.c)** En déduire que, pour tout réel $x > 0$, $F(x)=1-4e^{-\frac14x}+3e^{-\frac13x}$.
**2.d)** Déterminer $\displaystyle\lim_{x\to+\infty}F(x)$.

*On considère alors une variable aléatoire $X$ admettant $f$ pour densité et $F$ pour fonction de répartition.*

**3.** Vérifier que $P(3 < X \le 4)=-7e^{-1}+3e^{-\frac43}+4e^{-\frac34}$.
**4.** On s'intéresse à l'équation $(E)$ : $P(X \le \mu) = P(X > \mu)$, d'inconnue le réel strictement positif $\mu$.
**4.a)** *i)* Justifier que, pour tout réel $x$, $P(X > x) = 1 - P(X \le x)$. *ii)* En déduire que l'équation $(E)$ est équivalente à l'équation $(E')$ : $P(X \le \mu) = \frac12$. *iii)* Montrer que $(E')$ est équivalente à l'équation $(E'')$ : $1-8e^{-\frac14\mu}+6e^{-\frac13\mu}=0$.
**4.b)** Montrer que la fonction $g$ définie sur $]0, 1[$ par $g(\theta) = 1 - 8\theta^3 + 6\theta^4$ réalise une bijection de $]0, 1[$ sur $]-1, 1[$.
**4.c)** En déduire que l'équation $(E)$ admet une et une seule solution (qu'on ne cherchera pas à calculer).

*Fin de l'épreuve.*

> Note de transcription : la question 2 de la partie I de l'exercice 2 porte sur la dérivée $f'$ (le symbole « prime » est perdu dans la version disponible du sujet, mais la formule ne peut concerner que $f'$).
