> Corrigé indicatif rédigé par SaadConcours à partir des scans : il n'émane pas de la FSJES Aïn Sebâa et n'a pas été relu par un enseignant. **Chaque mauvaise réponse coûte −0,5 pt** et le sujet prévoit explicitement une **case E « toutes les propositions sont fausses »** — plusieurs questions ci-dessous tombent effectivement dans ce cas. Refais chaque calcul.
>
> Le scan de l'épreuve de mathématiques est flou par endroits : les questions dont la lecture est incertaine sont signalées.

## Épreuve 1 — Mathématiques

**Q1 — C. $-B + I_n$.** De $B^2 = B - I_n$ on tire $B^2 - B = -I_n$, soit $B(B - I_n) = -I_n$, donc $B(I_n - B) = I_n$ et $B^{-1} = I_n - B = -B + I_n$.

**Q2 — D. $x^4 + 2x^2 - 3e^{x^2}$.** En développant, $f(x) = 4x^3 + 4x - 6x\,e^{x^2}$. Or $\int 4x^3 = x^4$, $\int 4x = 2x^2$ et $\int 6x e^{x^2} = 3e^{x^2}$ (car $(e^{x^2})' = 2x e^{x^2}$).

**Q3 — A.** $\det A = 2(4\cdot(-2) - 1\cdot(-5)) + 3((-1)(-2) - 1) - 3((-1)(-5) - 4) = -6 + 3 - 3 = -6 \neq 0$ : $A$ est inversible. La matrice B n'est pas carrée (3 lignes, 2 colonnes) donc non inversible par nature. *(Les matrices C et D sont mal lisibles sur le scan — vérifie-les sur ta copie.)*

**Q4 — E (aucune proposition) : la condition est $m \neq 0$.**
En soustrayant la 1ʳᵉ ligne de la 2ᵉ puis la 2ᵉ de la 3ᵉ, la matrice du système devient triangulaire :

```
L1      : ( 1   1+m    m²   )
L2 − L1 : ( 0    m    1−m²  )
L3 − L2 : ( 0    0     m²   )
```

Le déterminant vaut donc $1 \times m \times m^2 = m^3$. Le système admet une solution unique si et seulement si $m^3 \neq 0$, c'est-à-dire **$m \neq 0$** — valeur absente des quatre propositions.

**Q5 — C. $(2x^2+3x-1)\dfrac{e^{3x+x^2}}{x^2}$.** Dérivée d'un quotient :
$f'(x) = \dfrac{(3+2x)e^{3x+x^2}\cdot x - e^{3x+x^2}}{x^2} = \dfrac{\big[(3+2x)x - 1\big]e^{3x+x^2}}{x^2} = \dfrac{(2x^2+3x-1)e^{3x+x^2}}{x^2}$.

**Q6 — B. $\alpha^5 - \alpha^4$.** Pour une matrice $4\times4$, $\det(\lambda M) = \lambda^4 \det(M)$. Par ailleurs $\det(BA^tB^{-1}) = \det(B)\det(A^t)\det(B)^{-1} = \det(A)$ (similitude). D'où
$\det(\alpha BA^tB^{-1}) = \alpha^4(\alpha - 1) = \alpha^5 - \alpha^4$.

**Q7 — B. $\dfrac{-1}{(x+y-1)^2}$.**
$\dfrac{\partial f}{\partial x} = \dfrac{2}{2x+2y-2} = \dfrac{1}{x+y-1}$, puis $\dfrac{\partial}{\partial y}\!\left(\dfrac{1}{x+y-1}\right) = \dfrac{-1}{(x+y-1)^2}$.

**Q8 — D. $\mathbb{R}^* \times \mathbb{R}_+^*$.** $\ln(x^2)$ exige $x^2 > 0$, soit $x \neq 0$ ; $\sqrt{y}$ au dénominateur exige $y > 0$ strictement.

**Q9 — B. $x = 2$.** $f'(x) = 2xe^{-x} - x^2e^{-x} = x(2-x)e^{-x}$, qui s'annule en $0$ et $2$. Le signe de $f'$ est $-$ sur $]-\infty;0[$, $+$ sur $]0;2[$, $-$ sur $]2;+\infty[$ : $x=0$ est un **minimum** local et $x=2$ un **maximum** local.

**Q10 — D. 4.** Pour toute matrice $B$, $\det(B) = P_B(0)$. Ici $P_B(0) = -(0+2)(0-2) = -(2)(-2) = 4$.

**Q11 — A et B.** Avec $f(x,y) = 2x^2 + xy + (y-7)^2$ :
$\dfrac{\partial f}{\partial x} = 4x + y$ et $\dfrac{\partial f}{\partial y} = x + 2(y-7)$. En $I = (-2, 8)$ : $4(-2)+8 = 0$ et $-2 + 2(1) = 0$ → **$I$ est bien un point critique (B vraie)**.
Matrice hessienne : $\begin{pmatrix} 4 & 1\\ 1 & 2\end{pmatrix}$, de déterminant $8 - 1 = 7 > 0$ avec $f''_{xx} = 4 > 0$ → **minimum local (A vraie)**.
*Attention : si le premier terme est bien $2x^3$ (lecture alternative du scan), le gradient ne s'annule nulle part et la question n'a pas de réponse. Seule la lecture $2x^2$ est cohérente.*

**Q12 — B. $-(x-2)(x+1)^2$.** Pour une matrice $3\times3$, $P_A(x) = -x^3 + \mathrm{tr}(A)x^2 - (\text{somme des mineurs principaux d'ordre 2})\,x + \det(A)$.

```
tr(A)                     = 2 − 5 + 3 = 0
mineurs principaux d'ordre 2 : 1 + (−3) + (−1) = −3
det(A)                    = 2
P_A(x) = −x³ + 0·x² + 3x + 2 = −(x³ − 3x − 2) = −(x+1)²(x−2)
```

Les valeurs propres sont donc $-1$ (double) et $2$.

**Q13 — D. 2.** $H = A + I_3 = \begin{pmatrix} 3 & -3 & -3\\ 3 & -4 & -4\\ -3 & 4 & 4\end{pmatrix}$. La troisième ligne est l'opposée de la deuxième ($L_3 = -L_2$) et les deux premières sont indépendantes → $\mathrm{rang}(H) = 2$.

**Q14 — E (aucune proposition).** $A$ n'est ni symétrique, ni antisymétrique, ni diagonale. Et elle **n'est pas diagonalisable** : la valeur propre $-1$ est de multiplicité algébrique 2 (Q12) mais $\dim\ker(A + I_3) = 3 - \mathrm{rang}(H) = 3 - 2 = 1$ (Q13), donc de multiplicité géométrique 1. La condition « multiplicité géométrique = multiplicité algébrique » n'est pas satisfaite.

## Épreuve 2 — Algèbre

**Q1 — E (aucune proposition), telle que la matrice est transcrite.** $D$ n'est ni diagonale, ni triangulaire supérieure, ni symétrique ($d_{12} = 2$ mais $d_{21} = -2$). Pour être **antisymétrique** il faudrait $d_{11} = 0$ (le scan porte 1) et $d_{32} = +1$ (le scan porte $-1$). L'intention manifeste du sujet est **C. antisymétrique** — vérifie ces deux coefficients sur ta copie.

**Q2 — C. $\mathrm{rang}(M) = 1$.** Les deux lignes de $M$ sont identiques et non nulles : l'image est une droite.

**Q3 — A.** $\det A = 1\big(2(-1) - (-1)(-1)\big) - 2\big((-2)(-1) - (-1)(-2)\big) + 3\big((-2)(-1) - 2(-2)\big) = -3 - 0 + 18 = 15 \neq 0$.
B a une ligne entièrement nulle (déterminant nul) ; C et D ne sont pas carrées.

**Q4 — D. $\tfrac{1}{2}B - 3I_n$.** De $B^2 = 6B + 2I_n$ : $B^2 - 6B = 2I_n$, soit $B(B - 6I_n) = 2I_n$, donc $B \cdot \tfrac{1}{2}(B - 6I_n) = I_n$ et $B^{-1} = \tfrac{1}{2}B - 3I_n$.

**Q5 — E (aucune proposition) : la bonne formule est $A^n = PB^nP^{-1}$.**
$A^2 = PBP^{-1}\cdot PBP^{-1} = PB^2P^{-1}$, et par récurrence $A^n = PB^nP^{-1}$. Les puissances de $P$ ne s'accumulent pas : les termes $P^{-1}P$ se simplifient à chaque étape.

**Q6 — A. $-M^3 - I_n$.** $B^t = (M^3)^t - I_n^t = (M^t)^3 - I_n = (-M)^3 - I_n = -M^3 - I_n$.

**Q7 — E, avec les coefficients lisibles sur le scan.** En éliminant $x_1$ :

```
L1          : ( −1    3     3  ) = 2
L2 + 4·L1   : (  0   10    32  ) = m + 8
L3 − L1     : (  0    5     4  ) = 4
det = (−1) × (10×4 − 32×5) = (−1)(−120) = 120 ≠ 0
```

Le déterminant étant non nul **quelle que soit la valeur de $m$**, le système admet toujours une solution unique : il n'admet jamais une infinité de solutions. Un système $3\times3$ n'a une infinité de solutions que si son déterminant est nul *et* le second membre compatible. *(Le signe devant $3x_3$ dans la première ligne est masqué par le filigrane de la source ; avec un « − » le déterminant vaut $-60$, donc également non nul. Vérifie ces coefficients sur ta copie.)*

**Q8 — A. $\dfrac{\lambda^4 \alpha}{\alpha^2+1}$.** Pour des matrices $4\times4$ :
$\det(\lambda AB^{-1}) = \lambda^4 \det(A)\det(B^{-1}) = \dfrac{\lambda^4 \alpha}{\alpha^2 + 1}$.

**Q9 — D. $-(x-2)(x-1)^2$.**

```
tr(A)                        = −1 + 2 + 3 = 4
mineurs principaux d'ordre 2 : 4 + 1 + 0 = 5
det(A)                       = 2
P_A(x) = −x³ + 4x² − 5x + 2 = −(x−1)²(x−2)
```

**Q10 — C. $\left\langle (2 ; 1 ; -2)\right\rangle$.** On résout $(A - 2I_3)v = 0$ avec $A - 2I_3 = \begin{pmatrix} -3 & 2 & -2\\ -1 & 0 & -1\\ 2 & -2 & 1\end{pmatrix}$ :

```
L2 : −x − z = 0        → z = −x
L1 : −3x + 2y − 2z = 0 → −3x + 2y + 2x = 0 → x = 2y
```

D'où $v = y\,(2 ; 1 ; -2)$.

## Épreuve 3 — Finance islamique

| Q | Réponse | Justification |
|---|---|---|
| 1 | **b. Salam** | Vente à terme où le prix est payé intégralement d'avance et la marchandise livrée plus tard. |
| 2 | **c. Marge Mourabaha** | Le terme « intérêt » est proscrit : la rémunération est une marge commerciale connue d'avance. |
| 3 | **c. Ijara** | Location d'un actif avec, souvent, option d'achat — l'équivalent du crédit-bail. |
| 4 | **c. Moudaraba** | Le *rab al-mal* apporte le capital, le *moudarib* apporte son travail et son savoir-faire. |
| 5 | **a. Moucharaka** | Avec la Moudaraba, c'est l'un des deux contrats **participatifs** (partage des pertes et profits). Mourabaha et Salam sont des contrats de vente. |
| 6 | **c. Istisnaa** | Contrat de fabrication/construction d'un ouvrage — adapté aux projets industriels et d'infrastructure. |
| 7 | **b. Séparation entre deux fonds « takaful » et « investissement »** | Structure caractéristique du takaful : le fonds des participants est distinct du fonds géré pour compte. |
| 8 | **c. Sukuk** | Titre adossé à un actif tangible, avec des flux réguliers : l'équivalent fonctionnel de l'obligation. |
| 9 | **b. Les sukuks ne donnent pas droit à une participation au capital de la société** | Le sukuk confère un droit sur un actif sous-jacent et ses revenus, pas la qualité d'actionnaire. |
| 10 | **a. Respect de la morale et de l'éthique** | Fondement de la finance islamique : prohibition du *riba*, du *gharar*, du *maysir* et des secteurs illicites. |
| 11 | **c. Égypte** | La première expérience de banque islamique moderne est celle de Mit Ghamr (1963). |
| 12 | **b. Royaume-Uni** | Pionnier occidental (Islamic Bank of Britain, 2004 ; émission souveraine de sukuk en 2014). |
| 13 | **b. La dissociation entre capital-assurance et capital-entreprise** | Principe de mutualisation : les cotisations (*tabarru'*) sont séparées du capital de l'opérateur. |
| 14 | **a.** | La Moucharaka est une association dans le capital avec partage des pertes **et** des bénéfices. La proposition b décrit l'Istisnaa, la c la Moudaraba. |
| 15 | **b.** | Vente au prix de revient majoré d'une marge connue et convenue. La proposition a décrit le Salam, la c l'Ijara. |
| 16 | **c.** | Le *gharar* est l'incertitude excessive : l'objet du contrat doit être déterminé de façon précise. La proposition a décrit le *haram*. |
