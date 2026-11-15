> Corrigé indicatif rédigé par SaadConcours, pas une correction officielle du CNAEM. Tous les calculs ont été refaits. **Erreur d'énoncé signalée** : la troisième ligne de $A^k$ donnée à la question 2.4.2 (dans la version du sujet publiée en ligne) est fausse ; la bonne expression est établie ci-dessous, et elle ne change pas les limites de la 3ème partie.

## Exercice 1 — Loi exponentielle

**1.** Par intégration par parties (avec $\int_0^{+\infty}\lambda e^{-\lambda x}dx = 1$) : $E(X)=\int_0^{+\infty}x\lambda e^{-\lambda x}dx=\frac1\lambda$ et $E(X^2)=\frac{2}{\lambda^2}$, donc $V(X)=\frac{2}{\lambda^2}-\frac{1}{\lambda^2}=\frac{1}{\lambda^2}$.

**2.** $F(x) = 0$ si $x \le 0$ ; pour $x > 0$, $F(x)=\int_0^x\lambda e^{-\lambda t}dt=1-e^{-\lambda x}$.

**3.** $Y \le 0$ équivaut à $\lfloor X\rfloor \le -1$, soit $X < 0$ : $P(Y \le 0) = F(0) = 0$. $Y$ est donc presque sûrement à valeurs dans $\mathbb{N}^*$. Pour $k \in \mathbb{N}^*$ :
$$P(Y=k)=P(\lfloor X\rfloor=k-1)=P(k-1\le X<k)=F(k)-F(k-1)=e^{-\lambda(k-1)}-e^{-\lambda k}=(1-e^{-\lambda})\,e^{-\lambda(k-1)}.$$
C'est la forme $p(1-p)^{k-1}$ avec $p = 1 - e^{-\lambda}$ : **$Y$ suit la loi géométrique de paramètre $1 - e^{-\lambda}$**.

**4.1.** $\max(X_1,X_2) \le x$ si, et seulement si, $X_1 \le x$ et $X_2 \le x$.

**4.2.** Par indépendance : $F_Z(x)=P(X_1\le x)P(X_2\le x)=F(x)^2$, soit $F_Z(x) = 0$ si $x \le 0$ et $F_Z(x)=(1-e^{-x})^2$ si $x > 0$. $F_Z$ est continue sur $\mathbb{R}$ et de classe $C^1$ sauf en 0 : une densité est $f_Z(x) = 0$ si $x \le 0$ et $f_Z(x)=2e^{-x}(1-e^{-x})=2e^{-x}-2e^{-2x}$ si $x > 0$.

**4.3.** $E(Z)=2\int_0^{+\infty}xe^{-x}dx-\int_0^{+\infty}x\cdot2e^{-2x}dx=2\times1-\frac12=\frac32$ (on reconnaît les espérances des lois $\mathcal E(1)$ et $\mathcal E(2)$).

**5.1.** Le maximum et le minimum de deux nombres sont ces deux nombres : $Z + T = X_1 + X_2$.

**5.2.** $E(T)=E(X_1)+E(X_2)-E(Z)=1+1-\frac32=\frac12$.
(Contrôle : $T$ suit la loi exponentielle de paramètre 2, d'espérance $\frac12$.)

---

## Exercice 2 — Suite récurrente

Remarque utile pour toute la suite : $g(x)-x=\frac14\big(3x^2-2(2+c+d)x+cd+2(c+d)\big)=\frac{P(x)}{4}$.

### Cas $c = d = 0$ : $g(x) = \frac34x^2$

**1.1.** Si $\lambda = 0$, $g(0) = 0$ : la suite est **constante égale à 0**.

**1.2.** $u_1=\frac34\lambda^2>0$ car $\lambda \ne 0$ ; si $u_n > 0$ alors $u_{n+1}=\frac34u_n^2>0$. Par récurrence, $u_n > 0$ pour $n \ge 1$.

**1.3.** $w_{n+1}=\ln\big(\frac34u_n^2\big)=\ln\frac34+2w_n$. La suite $(w_n+\ln\frac34)$ est géométrique de raison 2 : $w_n+\ln\frac34=2^{n-1}\big(w_1+\ln\frac34\big)$, avec $w_1+\ln\frac34=\ln\frac{9\lambda^2}{16}=2\ln\frac{3|\lambda|}{4}$. D'où
$$w_n=2^n\ln\frac{3|\lambda|}{4}-\ln\frac34\qquad(n\ge1).$$

**1.4.** $u_n=e^{w_n}=\dfrac43\left(\dfrac{3|\lambda|}{4}\right)^{2^n}$ pour $n \ge 1$ (contrôle : $n = 1$ redonne $\frac34\lambda^2$).

**1.5.** Selon $q = \frac{3|\lambda|}{4}$ :
- $|\lambda| < \frac43$ ($0 \le q < 1$, $\lambda = 0$ compris) : $u_n \to 0$ ;
- $|\lambda| = \frac43$ : $u_n = \frac43$ pour tout $n \ge 1$, la suite converge vers $\frac43$ ;
- $|\lambda| > \frac43$ : $u_n \to +\infty$, la suite diverge.

### Cas $c = d = 2$ : $g(x) = \frac14(3x^2 - 8x + 12)$

On a $g(x)-x=\frac34(x-2)^2 \ge 0$ et $g(x)-2=\frac14(3x-2)(x-2)$.

**2.1.** $g$ est continue ; si $u_n \to \ell$, alors $\ell = g(\ell)$, soit $\frac34(\ell-2)^2=0$ : $\ell = 2$.

**2.2.** Si $u_n > 2$, alors $u_{n+1}-2=\frac14(3u_n-2)(u_n-2)>0$ : par récurrence, $u_n > 2$ pour tout $n$. Alors $u_{n+1}-u_n=\frac34(u_n-2)^2>0$ : la suite est **strictement croissante**. Si elle convergeait, sa limite serait 2 (question 2.1), alors que $u_n \ge u_0 = \lambda > 2$ : impossible. Croissante et non convergente, donc non majorée, elle **diverge vers $+\infty$**.

**2.3.** $u_1 = 2 \iff g(\lambda) = 2 \iff (3\lambda-2)(\lambda-2) = 0 \iff \lambda \in \left\{\frac23, 2\right\}$ : $\lambda_1 = \frac23$, $\lambda_2 = 2$.

**2.4.** Pour $x \in \left]\frac23,2\right[$ : $g(x) - 2 < 0$ (facteurs de signes contraires), et $g$ atteint son minimum en $\frac43$, avec $g\left(\frac43\right)=\frac53>\frac23$. L'intervalle $\left]\frac23,2\right[$ est donc stable par $g$ : $u_n \in \left]\frac23,2\right[$ pour tout $n$. La suite est croissante ($g(x) - x \ge 0$) et majorée par 2 : elle **converge, vers 2** (question 2.1).

**2.5.** Si $\lambda < \frac23$ : $3\lambda - 2 < 0$ et $\lambda - 2 < 0$, donc $u_1 - 2 > 0$. La suite $(u_{n+1})_{n\ge0}$ part de $u_1 > 2$ : d'après 2.2, elle **diverge vers $+\infty$**.

**2.6.**
```
n=input('entrer la valeur de n')
u=1
for k=1:n
    u=(3*u^2-8*u+12)/4
end
disp(u)
```

**2.7.** Avec $\lambda = 1 \in \left]\frac23,2\right[$, la suite croît vers 2. Le programme compte les itérations tant que $u \le 1{,}9999$ : il affiche **le plus petit entier $n$ tel que $u_n > 1{,}9999$**, c'est-à-dire le rang à partir duquel $u_n$ approche 2 à moins de $10^{-4}$. (En Scilab, le nombre s'écrit `1.9999` avec un point ; l'exécution donne $n = 13\,322$ : la convergence est lente, car 2 est un point fixe double, $g'(2) = 1$.)

### Cas $c < d < 2$

**3.1.** En développant :
- $P(c) = c^2 - 2c - cd + 2d = (c-2)(c-d)$ : produit de deux négatifs, **$P(c) > 0$** ;
- $P(d) = d^2 - 2d - cd + 2c = (d-2)(d-c)$ : négatif fois positif, **$P(d) < 0$** ;
- $P(2) = 4 - 2c - 2d + cd = (2-c)(2-d)$ : **$P(2) > 0$**.

**3.2.** Si $u_n \to \ell$, alors $g(\ell) = \ell$ (continuité), soit $P(\ell) = 0$. Par le théorème des valeurs intermédiaires, $P$ s'annule sur $]c, d[$ (car $P(c) > 0 > P(d)$) et sur $]d, 2[$ (car $P(d) < 0 < P(2)$). Polynôme de degré 2, $P$ a au plus deux racines : ce sont ces deux-là. Donc $c < \ell < d$ ou $d < \ell < 2$.

---

## Problème

### 1ère partie

**1.1.1.**
$$A^2=\begin{pmatrix}\frac12&\frac14&\frac14\\\frac12&\frac14&0\\0&\frac12&\frac34\end{pmatrix},\qquad A^3=\begin{pmatrix}\frac14&\frac38&\frac38\\0&\frac14&\frac38\\\frac34&\frac38&\frac14\end{pmatrix}.$$

**1.1.2.** $4A^3=\begin{pmatrix}1&\frac32&\frac32\\0&1&\frac32\\3&\frac32&1\end{pmatrix}=3A+I$.

**1.1.3.** $4A^3 - 3A - I = 0$ : le polynôme $R(X) = 4X^3 - 3X - 1$ est annulateur de $A$.

**1.2.1.** $R(1) = 4 - 3 - 1 = 0$.

**1.2.2.** $(x-1)(2x+1)^2=(x-1)(4x^2+4x+1)=4x^3-3x-1=R(x)$.

**1.2.3.** $R\left(-\frac12\right)=\left(-\frac32\right)\times0^2=0$ : $-\frac12$ est racine (double).

**1.3.** Les valeurs propres de $A$ sont parmi les racines d'un polynôme annulateur : **$\mathrm{Sp}(A) \subset \left\{1, -\frac12\right\}$**.

### 2ème partie

**2.1.1.** $AV_1=\begin{pmatrix}1+2\\2\\3+1\end{pmatrix}=V_1$ (valeur propre **1**) et $AV_2=\begin{pmatrix}\frac12-\frac12\\-\frac12\\\frac12\end{pmatrix}=-\frac12V_2$ (valeur propre **$-\frac12$**).

**2.1.2.** Les deux valeurs possibles sont atteintes : $\mathrm{Sp}(A) = \left\{1, -\frac12\right\}$.

**2.2.1.** Le calcul donne $PQ = I$.

**2.2.2.** $P$ est inversible et $P^{-1}=Q=\frac19\begin{pmatrix}1&1&1\\-8&10&1\\6&-3&-3\end{pmatrix}$.

**2.3.1.** $PT=AP=\begin{pmatrix}3&0&-\frac12\\2&-\frac12&-1\\4&\frac12&\frac32\end{pmatrix}$.

**2.3.2.** De $AP = PT$ on tire $A = PTP^{-1}$. Pour $k = 1$ c'est vrai ; si $A^k = PT^kP^{-1}$, alors $A^{k+1}=PT^kP^{-1}PTP^{-1}=PT^{k+1}P^{-1}$.

**2.4.1.** Notons $r_k = \left(-\frac12\right)^k$. Pour $k = 1$, $T^1 = T$ (car $1\cdot r_1 = -\frac12$). Si $T^k$ a la forme annoncée :
$$T^{k+1}=T^kT=\begin{pmatrix}1&0&0\\0&r_k\cdot\left(-\frac12\right)&r_k\cdot\left(-\frac12\right)+kr_k\cdot\left(-\frac12\right)\\0&0&r_k\cdot\left(-\frac12\right)\end{pmatrix}=\begin{pmatrix}1&0&0\\0&r_{k+1}&(k+1)r_{k+1}\\0&0&r_{k+1}\end{pmatrix}.$$

**2.4.2.** $PT^k=\begin{pmatrix}3&0&r_k\\2&r_k&(k+1)r_k\\4&-r_k&-(k+2)r_k\end{pmatrix}$, puis $A^k = PT^kQ$ :
$$A^k=\frac19\begin{pmatrix}3+6r_k&3-3r_k&3-3r_k\\2+(-2+6k)r_k&2+(7-3k)r_k&2-(2+3k)r_k\\4-(4+6k)r_k&4+(-4+3k)r_k&4+(5+3k)r_k\end{pmatrix}.$$
Les deux premières lignes sont celles de l'énoncé. **La troisième ligne de l'énoncé est erronée** : pour $k = 1$, elle donnerait $\frac19(7\,;\,11{,}5\,;\,-2)$ au lieu de la ligne $(1\,;\,\frac12\,;\,0)$ de $A$, et ses colonnes ne sommeraient plus à 1. La ligne ci-dessus est vérifiée pour $k = 1, 2, 3, 4$ par calcul direct ; chaque colonne a bien pour somme $\frac99 = 1$.

### 3ème partie

**3.1.** La page 1 ne pointe que vers la page 3 : $p_{3,1} = 1$ et $p_{2,1} = 0$. La page 3 pointe vers 1 et 2 : $p_{1,3} = p_{2,3} = \frac12$. Donc $B = A$.

**3.2.** Depuis la page $j$, l'internaute va forcément sur l'une des trois pages : $p_{1,j}+p_{2,j}+p_{3,j}=1$ (les événements $A_{n+1}(1)$, $A_{n+1}(2)$, $A_{n+1}(3)$ forment un système complet, et l'on applique la probabilité conditionnelle sachant $A_n(j)$).

**3.3.** **Formule des probabilités totales** avec le système complet $\big(A_n(1), A_n(2), A_n(3)\big)$, de probabilités non nulles :
$$p_{n+1}(1)=\sum_{j=1}^3P_{A_n(j)}\big(A_{n+1}(1)\big)\,P\big(A_n(j)\big)=p_{1,1}p_n(1)+p_{1,2}p_n(2)+p_{1,3}p_n(3).$$

**3.4.** $p_{n+1}(2)=p_{2,1}p_n(1)+p_{2,2}p_n(2)+p_{2,3}p_n(3)=\frac12p_n(3)$ et $p_{n+1}(3)=p_n(1)+\frac12p_n(2)$.

**3.5.1.** Les trois égalités s'écrivent $X_{n+1} = BX_n = AX_n$.

**3.5.2.** Récurrence immédiate : $X_1 = AX_0$, et si $X_n = A^nX_0$ alors $X_{n+1} = A^{n+1}X_0$.

**3.5.3.** Avec $r_n = \left(-\frac12\right)^n$ et l'expression corrigée de $A^n$ :
- $p_n(1)=\frac19\Big[(3+6r_n)p_0(1)+(3-3r_n)p_0(2)+(3-3r_n)p_0(3)\Big]$ ;
- $p_n(2)=\frac19\Big[\big(2+(6n-2)r_n\big)p_0(1)+\big(2+(7-3n)r_n\big)p_0(2)+\big(2-(2+3n)r_n\big)p_0(3)\Big]$ ;
- $p_n(3)=\frac19\Big[\big(4-(4+6n)r_n\big)p_0(1)+\big(4+(3n-4)r_n\big)p_0(2)+\big(4+(3n+5)r_n\big)p_0(3)\Big]$.

**3.6.1.** $\left|-\frac12\right| < 1$ : $\left(-\frac12\right)^n \to 0$, et par croissances comparées $n\left(-\frac12\right)^n \to 0$.

**3.6.2.** À l'instant 0, l'internaute est sur une et une seule page : $p_0(1)+p_0(2)+p_0(3)=1$.

**3.6.3.** Tous les termes en $r_n$ et $nr_n$ tendent vers 0 ; il reste :
$$\ell_1=\frac39=\frac13,\qquad\ell_2=\frac29,\qquad\ell_3=\frac49,$$
quelle que soit la page de départ (et même avec la troisième ligne de l'énoncé, dont la partie constante est la même).

**3.7.1.** À long terme : **page 3** ($\frac49$), puis **page 1** ($\frac39$), puis **page 2** ($\frac29$).

**3.7.2.** $\begin{pmatrix}\ell_1\\\ell_2\\\ell_3\end{pmatrix}=\frac19V_1$ est un vecteur propre de $B$ associé à la valeur propre 1, de somme 1 : c'est la **loi stationnaire** (invariante) de la marche aléatoire, $B\ell = \ell$. Elle donne le classement « PageRank » des pages.
