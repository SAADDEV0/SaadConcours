> Corrigé indicatif rédigé par SaadConcours, pas une correction officielle du CNAEM. Chaque résultat a été recalculé ; les programmes sont écrits en Scilab, comme le demande le sujet.

## EXERCICE 1

### Partie 1 : puissances de A

**1.a)** Produit ligne par colonne :
$$PQ=\begin{pmatrix}1&0&0\\1&1&0\\1&1&1\end{pmatrix}\begin{pmatrix}1&0&0\\-1&1&0\\0&-1&1\end{pmatrix}=\begin{pmatrix}1&0&0\\1-1&1&0\\1-1+0&1-1&1\end{pmatrix}=I.$$

**1.b)** Une matrice carrée $P$ telle qu'il existe $Q$ avec $PQ = I$ est inversible et $P^{-1} = Q$ :
$$P^{-1}=\begin{pmatrix}1&0&0\\-1&1&0\\0&-1&1\end{pmatrix}.$$

**1.c)** $AP=\begin{pmatrix}-1&0&0\\-1&1&0\\-1&1&2\end{pmatrix}$ et $PD=\begin{pmatrix}-1&0&0\\-1&1&0\\-1&1&2\end{pmatrix}$, donc $AP = PD$.

**1.d)** En multipliant à droite par $P^{-1}$ : $A = PDP^{-1}$ avec $D$ diagonale. $A$ est donc **diagonalisable**.

**2.** On calcule :
- $Au=\begin{pmatrix}-1\\-2+1\\-2-1+2\end{pmatrix}=\begin{pmatrix}-1\\-1\\-1\end{pmatrix}=-u$ : $u$ (non nul) est vecteur propre associé à la valeur propre $-1$ ;
- $Av=\begin{pmatrix}0\\1\\-1+2\end{pmatrix}=v$ : valeur propre $1$ ;
- $Aw=\begin{pmatrix}0\\0\\2\end{pmatrix}=2w$ : valeur propre $2$.

Ce sont les colonnes de $P$, dans l'ordre des coefficients diagonaux de $D$.

**3.a)** *Initialisation* : $A^0 = I = PIP^{-1} = PD^0P^{-1}$. *Hérédité* : si $A^n = PD^nP^{-1}$, alors $A^{n+1} = A^nA = PD^nP^{-1}\,PDP^{-1} = PD^{n+1}P^{-1}$. La propriété est vraie pour tout $n$.

**3.b)** $D$ est diagonale : $D^n=\begin{pmatrix}(-1)^n&0&0\\0&1&0\\0&0&2^n\end{pmatrix}$.

**3.c)** $PD^n=\begin{pmatrix}(-1)^n&0&0\\(-1)^n&1&0\\(-1)^n&1&2^n\end{pmatrix}$, puis
$$A^n=PD^nP^{-1}=\begin{pmatrix}(-1)^n&0&0\\(-1)^n-1&1&0\\(-1)^n-1&1-2^n&2^n\end{pmatrix}.$$
**Vérification** : pour $n = 1$ on retrouve $A$ ; pour $n = 5$, la dernière ligne vaut $(-2,\,-31,\,32)$, ce que confirme le calcul direct de $A^5$.

**4.a)** $U_0 = A^0U_0$ ; si $U_n = A^nU_0$, alors $U_{n+1} = AU_n = A^{n+1}U_0$.

**4.b)** Avec $U_0 = (-1,1,1)$ :
$$a_n=-(-1)^n=(-1)^{n+1},\qquad b_n=-\big((-1)^n-1\big)+1=2-(-1)^n,\qquad c_n=-\big((-1)^n-1\big)+(1-2^n)+2^n=2-(-1)^n.$$
**Contrôle** : $U_1 = AU_0 = (1,3,3)$, et les formules donnent bien $a_1 = 1$, $b_1 = c_1 = 3$. (On remarque que $U_0 = -u + 2v$, d'où $U_n = -(-1)^nu + 2v$.)

**4.c)**
```
n=input("Entrer n : ")
A=[-1 0 0; -2 1 0; -2 -1 2]
U=[-1; 1; 1]
for i=1:n
    U=A*U
end
disp(U)
```

### Partie 2 : l'équation $M^3 = A$

**1.** $M = PNP^{-1}$, donc $M^3 = PN^3P^{-1}$. Ainsi $M^3 = A = PDP^{-1}$ équivaut à $PN^3P^{-1} = PDP^{-1}$, c'est-à-dire (en multipliant par $P^{-1}$ à gauche et $P$ à droite) à $N^3 = D$.

**2.** Si $N^3 = D$ : $ND = N\cdot N^3 = N^4 = N^3\cdot N = DN$.

**3.** Notons $N=(n_{ij})$ et $D=\mathrm{diag}(d_1,d_2,d_3)=\mathrm{diag}(-1,1,2)$. Le coefficient $(i,j)$ de $ND$ vaut $n_{ij}d_j$, celui de $DN$ vaut $d_in_{ij}$. L'égalité $ND = DN$ donne $n_{ij}(d_j-d_i)=0$. Pour $i \ne j$, $d_i \ne d_j$ (les trois valeurs propres sont distinctes), donc $n_{ij} = 0$ : **$N$ est diagonale**.

**4.** $N = \mathrm{diag}(x,y,z)$ avec $x^3 = -1$, $y^3 = 1$, $z^3 = 2$. Dans $\mathbb{R}$, la fonction cube est bijective : $x = -1$, $y = 1$, $z = \sqrt[3]{2}$.
$$N=\begin{pmatrix}-1&0&0\\0&1&0\\0&0&\sqrt[3]{2}\end{pmatrix}.$$

**5.** L'équation $(E)$ a une **unique** solution, $M = PNP^{-1}$ :
$$M=\begin{pmatrix}-1&0&0\\-2&1&0\\-2&1-\sqrt[3]{2}&\sqrt[3]{2}\end{pmatrix}.$$
(Vérification numérique : $M^3 = A$.)

**Piège** : oublier de justifier que les valeurs propres sont distinctes à la question 3 ; c'est ce qui force $N$ à être diagonale.

---

## EXERCICE 2

**1.a)** Pour $x \ge 1$ : $\displaystyle\int_1^x e^{-(t-1)}\,dt=\Big[-e^{-(t-1)}\Big]_1^x=1-e^{-(x-1)}$.

**1.b)** Quand $x \to +\infty$, $e^{-(x-1)} \to 0$ : l'intégrale converge et $\displaystyle\int_1^{+\infty}e^{-(t-1)}\,dt=1$.

**2.** $f$ est positive sur $\mathbb{R}$, continue sauf en $1$, et $\displaystyle\int_{-\infty}^{+\infty}f(t)\,dt=0+\int_1^{+\infty}e^{-(t-1)}\,dt=1$ : $f$ est une densité de probabilité.

**3.** Si $x < 1$, $F_X(x)=\int_{-\infty}^x 0\,dt=0$. Si $x \ge 1$, $F_X(x)=\int_1^x e^{-(t-1)}dt=1-e^{-(x-1)}$ (question 1.a).

**4.** Pour $x \ge 1$, intégration par parties avec $u = t$, $v' = e^{-(t-1)}$ :
$$\int_1^x te^{-(t-1)}dt=\Big[-te^{-(t-1)}\Big]_1^x+\int_1^x e^{-(t-1)}dt=1-xe^{-(x-1)}+1-e^{-(x-1)}.$$
Par croissances comparées, $xe^{-(x-1)} \to 0$ : **$E(X) = 2$**.

**5.a)** De même, avec $u = t^2$ :
$$\int_1^x t^2e^{-(t-1)}dt=\Big[-t^2e^{-(t-1)}\Big]_1^x+2\int_1^x te^{-(t-1)}dt\ \xrightarrow[x\to+\infty]{}\ 1+2E(X).$$
Donc $E(X^2) = 1 + 2E(X) = 5$.

**5.b)** Formule de Koenig-Huygens : $V(X) = E(X^2) - E(X)^2 = 5 - 4 =$ **1**.

**6.a)** Linéarité : $E(Y) = E(X) - 1 =$ **1**.

**6.b)** $V(Y) = V(X - 1) = V(X) =$ **1**.

**6.c)** $F_Y(y) = P(X \le y + 1) = F_X(y+1)$ : $F_Y(y) = 0$ si $y < 0$ et $F_Y(y) = 1 - e^{-y}$ si $y \ge 0$. $Y$ suit la **loi exponentielle de paramètre 1**, ce qui confirme $E(Y) = V(Y) = 1$.

**7.a)** $f_n \ge 0$, continue sauf en $\frac1n$, et $\displaystyle\int_{1/n}^{x}e^{-(t-\frac1n)}dt=1-e^{-(x-\frac1n)}\to1$ : $f_n$ est une densité.

**7.b)** i) $F_{X_n}(x) = 0$ si $x < \frac1n$, et $F_{X_n}(x) = 1 - e^{-(x-\frac1n)}$ si $x \ge \frac1n$.
ii) $F_{Y_n}(y) = P\big(X_n \le y + \frac1n\big) = F_{X_n}\big(y+\frac1n\big)$ : $F_{Y_n}(y) = 0$ si $y < 0$ et $1 - e^{-y}$ si $y \ge 0$. Pour tout $n$, $Y_n$ suit la loi exponentielle de paramètre 1.

**7.c)** Même intégration par parties qu'à la question 4 :
$$\int_{1/n}^x te^{-(t-\frac1n)}dt=\frac1n-xe^{-(x-\frac1n)}+1-e^{-(x-\frac1n)}\ \longrightarrow\ \frac1n+1,\quad\text{donc } E(X_n)=1+\frac1n.$$

**7.d)** $E(Y_n) = E(X_n) - \frac1n =$ **1** (cohérent avec la loi exponentielle de paramètre 1).

**7.e)** Comme $\frac2n \ge \frac1n$ :
$$P\Big(\frac2n\le X_n\le\frac3n\Big)=F_{X_n}\Big(\frac3n\Big)-F_{X_n}\Big(\frac2n\Big)=\Big(1-e^{-\frac2n}\Big)-\Big(1-e^{-\frac1n}\Big)=e^{-\frac1n}-e^{-\frac2n}.$$

**7.f)**
```
n=1
while exp(-1/n)-exp(-2/n) > 10^(-5)
    n=n+1
end
disp(n)
```
Le programme affiche **$n = 99\,999$** (pour $n$ grand, $e^{-1/n}-e^{-2/n}\approx\frac1n$). La boucle prend un peu de temps : c'est normal.

---

## EXERCICE 3

Notons $p$ la probabilité de Pile : $p + 2p = 1$, donc $P(\text{Pile}) = \frac13$ et $P(\text{Face}) = \frac23$.

**1.a)** Le dé est équilibré : $X$ suit la **loi uniforme sur $\{1,\dots,6\}$**, $P(X = k) = \frac16$.

**1.b)** $E(X) = \frac{6+1}{2} = \frac72$ et $V(X) = \frac{6^2-1}{12} = \frac{35}{12}$.

**2.a)** Si $X = 1$, on lance la pièce une fois : $Y = 0$ si l'on obtient Pile, $P_{(X=1)}(Y=0) = \frac13$.

**2.b)** Si $X = k \ge 2$, deux lancers indépendants : $Y = 0$ s'il sort deux fois Pile, probabilité $\left(\frac13\right)^2 = \frac19$.

**2.c)** Formule des probabilités totales avec le système complet $\{X = k\}$ :
$$P(Y=0)=\frac16\cdot\frac13+\frac56\cdot\frac19=\frac{3}{54}+\frac{5}{54}=\frac{8}{54}=\frac{4}{27}.$$

**3.** $Y = 2$ est impossible si $X = 1$ ; si $X \ge 2$, il faut deux Faces : $P(Y=2)=\frac56\cdot\left(\frac23\right)^2=\frac{20}{54}=\frac{10}{27}$.

**4.** $P(Y=1)=1-\frac{4}{27}-\frac{10}{27}=\frac{13}{27}$. (Contrôle direct : $\frac16\cdot\frac23+\frac56\cdot2\cdot\frac13\cdot\frac23=\frac{3}{27}+\frac{10}{27}$.)

**5.** $E(Y)=\frac{13}{27}+2\cdot\frac{10}{27}=\frac{33}{27}=\frac{11}{9}$ ; $E(Y^2)=\frac{13}{27}+4\cdot\frac{10}{27}=\frac{53}{27}$ ; $V(Y)=\frac{53}{27}-\frac{121}{81}=\frac{38}{81}$.

**6.a)** Loi du couple ($k$ désigne 2, 3, 4, 5 ou 6) :

| | $Y = 0$ | $Y = 1$ | $Y = 2$ | Total |
|---|---|---|---|---|
| $X = 1$ | $\frac{1}{18}$ | $\frac19$ | $0$ | $\frac16$ |
| $X = k$ (chaque valeur de 2 à 6) | $\frac{1}{54}$ | $\frac{2}{27}$ | $\frac{2}{27}$ | $\frac16$ |
| Total | $\frac{4}{27}$ | $\frac{13}{27}$ | $\frac{10}{27}$ | $1$ |

**6.b)** $P(X=1,\,Y=2) = 0$ alors que $P(X=1)\,P(Y=2)=\frac16\cdot\frac{10}{27}\ne0$ : $X$ et $Y$ **ne sont pas indépendantes**.

**6.c)** $E(XY)=1\cdot\frac19+\sum_{k=2}^{6}k\Big(1\cdot\frac{2}{27}+2\cdot\frac{2}{27}\Big)=\frac19+\frac{6}{27}\cdot20=\frac{1}{9}+\frac{40}{9}=\frac{41}{9}$.
$\operatorname{Cov}(X,Y)=E(XY)-E(X)E(Y)=\frac{41}{9}-\frac72\cdot\frac{11}{9}=\frac{82-77}{18}=\frac{5}{18}$.

**6.d)** $\rho(X,Y)=\dfrac{\operatorname{Cov}(X,Y)}{\sqrt{V(X)V(Y)}}=\dfrac{5/18}{\sqrt{\frac{35}{12}\cdot\frac{38}{81}}}=\dfrac{5\sqrt6}{2\sqrt{665}}\approx0{,}237$.
Corrélation positive mais faible : un résultat du dé différent de 1 donne deux lancers, donc plus de Faces en moyenne.

---

## EXERCICE 4

**1.** $\{M_1, M_2\}$ forme un système complet, avec $P(M_1) = a$ et $P(M_2) = 1 - a$ :
$$P(C)=0{,}99a+0{,}96(1-a)=0{,}03a+0{,}96.$$

**2.** $0{,}03a + 0{,}96 = 0{,}97$ donne $a = \frac13$, donc $P(M_2) = \frac23 = 2P(M_1)$.

**3.a)** On répète 10 fois, de façon indépendante (tirage avec remise), une épreuve à deux issues dont le succès « commercialisable » a la probabilité $0{,}97$ : $X$ suit la **loi binomiale $\mathcal B(10\,;\,0{,}97)$**.

**3.b)** $P(X=10)=0{,}97^{10}=0{,}97\times0{,}97^9\approx0{,}97\times0{,}760\approx$ **0,737**.

**3.c)** Au plus un crayon non commercialisable : $X \ge 9$.
$$P(X\ge9)=0{,}97^{10}+10\times0{,}97^9\times0{,}03=0{,}97^9\,(0{,}97+0{,}3)\approx0{,}760\times1{,}27\approx\textbf{0,965}.$$

**3.d)**
```
n=input("Entrer n : ")
X=grand(1,n,"bin",10,0.97)
disp(X)
```

**4.a)** Avec trois machines, $P(M_1) = a$, $P(M_3) = b$ et $P(M_2) = 1 - a - b$. L'objectif est $P(C) = 0{,}99$ :
$$0{,}99a+0{,}96(1-a-b)+b\,P_{M_3}(C)=0{,}99\iff P_{M_3}(C)=0{,}96+\frac{0{,}03(1-a)}{b}.$$

**4.b)** $P_{M_3}(C)\ge0{,}999\iff\dfrac{0{,}03(1-a)}{b}\ge0{,}039\iff 1-a\ge1{,}3\,b\iff a+\dfrac{13}{10}b\le1$ (on a multiplié par $\frac{b}{0{,}03} > 0$). Comme $a > 0$ et $b > 0$, on a aussi $a + \frac{13}{10}b > 0$.

**4.c)** i) Les tirages parmi les crayons de $M_3$ sont indépendants et chacun donne un crayon non commercialisable avec la probabilité $1 - 0{,}999 = 0{,}001$ ; $Y$ est le rang du premier « succès » : **$Y \hookrightarrow \mathcal G(0{,}001)$**.
ii) Pour $k \ge 1$ : $P(Y=k)=0{,}999^{\,k-1}\times0{,}001$.
iii) $E(Y)=\frac1p=$ **1 000** et $V(Y)=\frac{1-p}{p^2}=\frac{0{,}999}{0{,}000001}=$ **999 000**.
iv)
```
m=input("Entrer m : ")
Y=grand(m,1,"geom",0.001)
disp(Y)
```
