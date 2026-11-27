// Analyse et Traitement des Données (S4, parcours Gestion) — compléments par chapitre : description SEO, résumé, exercices 2 et 3, QCM.
const md = String.raw;

const chapitres = {
1: {
titre: "Les données et leur préparation",
description: "Tableau individus × variables, types de variables, loi 09-08, données manquantes, valeurs aberrantes par les quartiles et le score z, centrage-réduction.",
resume: md`
## L'essentiel — Les données et leur préparation

- Tableau $X$ à $n$ lignes (**individus**) et $p$ colonnes (**variables**) : une ligne = un individu, une colonne = une variable et une unité, une case = une valeur.
- Variables **quantitatives** (continues, discrètes) : moyenne, variance, corrélation. Variables **qualitatives** (nominales, ordinales) : effectifs, fréquences, tableaux croisés.
- ACP → variables quantitatives ; AFC → croisement de deux variables qualitatives.
- Données personnelles : **loi 09-08**, contrôle de la **CNDP** ; travailler sur des données anonymisées.
- Données manquantes : suppression, imputation (moyenne, **médiane** si valeurs extrêmes), imputation par un modèle.
- Règle des quartiles : suspecte hors de $[Q_1 - 1{,}5\,EIQ \; ; \; Q_3 + 1{,}5\,EIQ]$, avec $EIQ = Q_3 - Q_1$.
- Score z : $z = (x - \bar{x}) / s$ ; suspect si $|z| > 3$ ; moins robuste que les quartiles.
- Une valeur aberrante se vérifie avant d'être corrigée, écartée ou étudiée à part.
- Centrage-réduction : $z_{ij} = (x_{ij} - \bar{x}_j)/s_j$ ; moyenne 0, écart-type 1, plus d'unité.
- Codage disjonctif complet : une colonne 0/1 par modalité ; discrétisation : découper une variable quantitative en classes.
`,
exercices: md`
### Exercice 2 — Classer les variables d'une enquête

Une banque marocaine interroge 800 clients. Le fichier contient : âge (en années), tranche de revenu mensuel (moins de 5 000 DH, de 5 000 à 10 000 DH, plus de 10 000 DH), région de résidence, nombre de produits détenus, solde moyen du compte (DH), utilisation de l'application mobile (oui / non), note de recommandation de 0 à 10.

1. Donnez le type de chaque variable.
2. Écrivez le codage disjonctif complet de la variable « tranche de revenu » pour un client qui gagne 7 500 DH par mois.
3. Peut-on calculer la « région moyenne » des clients ? Que calculer à la place ?

<details><summary>Voir le corrigé</summary>

1. Âge : quantitative continue (souvent arrondie en années) ; tranche de revenu : qualitative **ordinale** ; région : qualitative **nominale** ; nombre de produits : quantitative **discrète** ; solde moyen : quantitative continue ; application mobile : qualitative nominale à deux modalités (binaire) ; note de 0 à 10 : qualitative ordinale, souvent traitée comme quantitative discrète.
2. Trois colonnes (moins de 5 000, 5 000 à 10 000, plus de 10 000) : le client reçoit **(0, 1, 0)**.
3. Non : la région est nominale, un code numérique n'a pas de sens arithmétique. On calcule les **effectifs et fréquences** par région, et le **mode** (la région la plus représentée).

</details>

### Exercice 3 — Score z et imputation

Les délais de livraison (en jours) de 8 commandes d'un site marchand de Tanger sont : 20, 22, 18, 21, 19, 20, 22, 18.

1. Calculez la moyenne et l'écart-type (avec $n$ au dénominateur).
2. Une 9ᵉ commande a été livrée en 26 jours. Calculez son score z par rapport aux 8 premières commandes. Est-elle aberrante ?
3. Pour une 10ᵉ commande, le délai n'est pas renseigné. Proposez une valeur d'imputation pour les 8 premières valeurs et dites ce que cette imputation fait à la variance.

<details><summary>Voir le corrigé</summary>

1. Moyenne : $160 / 8 = $ **20 jours**. Écarts : 0, 2, −2, 1, −1, 0, 2, −2 ; carrés : 0, 4, 4, 1, 1, 0, 4, 4, somme 18 ; variance $18 / 8 = 2{,}25$ ; écart-type **1,5 jour**.
2. $z = (26 - 20) / 1{,}5 = $ **4** : la commande est à 4 écarts-types de la moyenne, $|z| > 3$ : valeur aberrante, à vérifier (rupture de stock, adresse erronée, retard du transporteur).
3. Moyenne et médiane valent toutes deux **20 jours** : on impute 20. La somme des carrés des écarts ne change pas mais $n$ augmente : la variance baisse (18 / 9 = 2 au lieu de 2,25). L'imputation **réduit artificiellement la dispersion**.

</details>
`,
qcm: [
{ q: "Dans un tableau de données, une ligne correspond à :", choix: ["Un individu", "Une variable", "Une modalité", "Une unité de mesure"], bonne: 0, explication: "Les colonnes sont les variables." },
{ q: "La ville de résidence d'un client est une variable :", choix: ["Qualitative nominale", "Qualitative ordinale", "Quantitative discrète", "Quantitative continue"], bonne: 0, explication: "Ses modalités n'ont pas d'ordre." },
{ q: "Une note de satisfaction de 1 à 5 est une variable :", choix: ["Qualitative ordinale", "Qualitative nominale", "Quantitative continue", "Binaire"], bonne: 0, explication: "Ses modalités sont ordonnées." },
{ q: "Au Maroc, la protection des données à caractère personnel relève de la loi :", choix: ["09-08", "31-08", "69-21", "17-95"], bonne: 0, explication: "Sous le contrôle de la CNDP." },
{ q: "Pour imputer une valeur manquante dans une série qui contient une valeur extrême, on préfère :", choix: ["La médiane", "La moyenne", "Le maximum", "Zéro"], bonne: 0, explication: "La médiane n'est pas tirée par les valeurs extrêmes." },
{ q: "Avec Q1 = 40 et Q3 = 60, une valeur est suspecte selon la règle des quartiles si elle dépasse :", choix: ["90", "80", "70", "100"], bonne: 0, explication: "60 + 1,5 × 20 = 90." },
{ q: "Une valeur dont le score z vaut 0 est :", choix: ["Égale à la moyenne", "Aberrante", "Égale à l'écart-type", "Manquante"], bonne: 0, explication: "z mesure l'écart à la moyenne en écarts-types." },
{ q: "Après centrage-réduction, une variable a :", choix: ["Une moyenne de 0 et un écart-type de 1", "Une moyenne de 1 et un écart-type de 0", "Des valeurs entre 0 et 1", "La même unité qu'avant"], bonne: 0, explication: "Elle devient sans unité." },
{ q: "Le codage disjonctif complet d'une variable à 4 modalités crée :", choix: ["4 colonnes de 0 et de 1", "1 colonne de 1 à 4", "2 colonnes", "3 colonnes de rangs"], bonne: 0, explication: "Une colonne par modalité, un seul 1 par ligne." },
{ q: "L'imputation par la moyenne a pour effet :", choix: ["De réduire artificiellement la variance", "D'augmenter la variance", "De changer la moyenne", "De créer des valeurs aberrantes"], bonne: 0, explication: "On ajoute des valeurs sans écart à la moyenne." },
],
},
2: {
titre: "La description multidimensionnelle : variances et corrélations",
description: "Centre de gravité, tableau centré réduit, matrice des variances-covariances et des corrélations, distance euclidienne et inertie d'un nuage de points.",
resume: md`
## L'essentiel — Variances et corrélations

- Chaque individu est un point d'un espace à $p$ dimensions ; chaque variable, un vecteur de $n$ valeurs.
- **Centre de gravité** : $g = (\bar{x}_1, \dots, \bar{x}_p)$ ; centrer = le ramener à l'origine.
- Covariance : $\text{cov}(X, Y) = \frac{1}{n}\sum (x_i - \bar{x})(y_i - \bar{y})$.
- **Matrice des variances-covariances** $V$ : variances sur la diagonale, covariances ailleurs, symétrique ; $V = \frac{1}{n} Y_c^{\,t} Y_c$.
- Corrélation : $r = \frac{\text{cov}(X, Y)}{s_X s_Y}$, entre −1 et 1, sans unité.
- **Matrice des corrélations** $R$ : 1 sur la diagonale ; $R = \frac{1}{n} Z^t Z$ (tableau centré réduit).
- Lire $R$ : blocs de variables corrélées, oppositions, variables isolées.
- Distance euclidienne $d(i, i') = \sqrt{\sum_j (x_{ij} - x_{i'j})^2}$, à calculer sur données **réduites** si les unités diffèrent.
- **Inertie** $I = \frac{1}{n}\sum d^2(i, g) = \sum_j V(X_j)$ ; sur données centrées réduites, $I = p$.
`,
exercices: md`
### Exercice 2 — Covariance et corrélation de deux variables

Quatre entreprises de la zone industrielle de Tanger ont un chiffre d'affaires $X$ de 10, 20, 30 et 40 millions de DH et un résultat net $Y$ de 1, 3, 2 et 6 millions de DH.

1. Calculez les moyennes, les variances et la covariance.
2. Calculez le coefficient de corrélation.
3. Que devient la covariance si $X$ est exprimé en milliers de DH ? Et la corrélation ?

<details><summary>Voir le corrigé</summary>

1. $\bar{X} = 25$, $\bar{Y} = 3$. Écarts de $X$ : −15, −5, 5, 15 ; écarts de $Y$ : −2, 0, −1, 3. $V(X) = \frac{225 + 25 + 25 + 225}{4} = $ **125** ; $V(Y) = \frac{4 + 0 + 1 + 9}{4} = $ **3,5** ; $\text{cov}(X, Y) = \frac{30 + 0 - 5 + 45}{4} = $ **17,5**.
2. $r = \frac{17{,}5}{\sqrt{125} \times \sqrt{3{,}5}} = \frac{17{,}5}{20{,}917} \approx$ **0,837**.
3. En milliers de DH, $X$ est multiplié par 1 000 : la covariance aussi (**17 500**). La corrélation ne change pas (**0,837**) : elle ne dépend pas des unités.

</details>

### Exercice 3 — Inertie et poids des variables

Un tableau décrit 50 communes par trois variables : population (variance 4 000 000), taux de chômage en % (variance 9) et taux de raccordement à l'eau potable en % (variance 36).

1. Calculez l'inertie du nuage brut et la part de chaque variable.
2. Que vaut l'inertie après centrage-réduction ? Quelle est alors la part de chaque variable ?
3. Quelle conséquence pour une ACP ?

<details><summary>Voir le corrigé</summary>

1. $I = 4\,000\,000 + 9 + 36 = $ **4 000 045**. Part de la population : **99,999 %** ; chômage : environ 0,0002 % ; raccordement : environ 0,0009 %.
2. Après réduction, chaque variance vaut 1 : $I = $ **3**, et chaque variable pèse **un tiers**.
3. Sur les données brutes, l'analyse ne verrait que la population. Il faut faire une **ACP normée** (sur la matrice des corrélations) : chaque variable compte autant, quelle que soit son unité.

</details>
`,
qcm: [
{ q: "Le centre de gravité d'un nuage a pour coordonnées :", choix: ["Les moyennes des variables", "Les médianes des variables", "Les valeurs du premier individu", "Les écarts-types des variables"], bonne: 0, explication: "C'est l'individu moyen." },
{ q: "La diagonale de la matrice des variances-covariances contient :", choix: ["Les variances", "Des 1", "Les moyennes", "Des 0"], bonne: 0, explication: "Les covariances sont hors de la diagonale." },
{ q: "La diagonale de la matrice des corrélations contient :", choix: ["Des 1", "Les variances", "Des 0", "Les écarts-types"], bonne: 0, explication: "Une variable est parfaitement corrélée à elle-même." },
{ q: "Une matrice de corrélations de 6 variables contient combien de coefficients distincts hors diagonale ?", choix: ["15", "36", "30", "6"], bonne: 0, explication: "6 × 5 / 2 = 15, la matrice étant symétrique." },
{ q: "cov(X, Y) = 12, écart-type de X = 4, écart-type de Y = 5 : la corrélation vaut :", choix: ["0,6", "0,48", "2,4", "0,12"], bonne: 0, explication: "12 / (4 × 5)." },
{ q: "Si l'on exprime une variable en milliers de DH au lieu de DH, le coefficient de corrélation :", choix: ["Ne change pas", "Est divisé par 1 000", "Est multiplié par 1 000", "Change de signe"], bonne: 0, explication: "Il est sans unité." },
{ q: "L'inertie totale d'un nuage est égale :", choix: ["À la somme des variances des variables", "Au produit des variances", "À la plus grande variance", "À la somme des corrélations"], bonne: 0, explication: "C'est la trace de la matrice des variances-covariances." },
{ q: "Sur un tableau centré réduit de 7 variables, l'inertie totale vaut :", choix: ["7", "1", "0", "49"], bonne: 0, explication: "Chaque variable a une variance de 1." },
{ q: "On calcule les distances entre individus sur des données centrées réduites pour :", choix: ["Que chaque variable pèse autant quelle que soit son unité", "Rendre toutes les distances égales", "Supprimer les corrélations", "Éviter les valeurs négatives"], bonne: 0, explication: "Sinon les grands nombres écrasent les autres variables." },
{ q: "Deux variables dont la corrélation vaut −0,95 :", choix: ["Varient fortement en sens inverse", "Sont indépendantes", "Ont la même moyenne", "Sont mal mesurées"], bonne: 0, explication: "Le lien linéaire est fort et négatif." },
],
},
3: {
titre: "L'analyse en composantes principales : principe et choix des axes",
description: "ACP normée et non normée, axes principaux, valeurs propres et vecteurs propres de la matrice des corrélations, inertie expliquée, critères de Kaiser et du coude",
resume: md`
## L'essentiel — Principe de l'ACP et choix des axes

- L'ACP remplace $p$ variables quantitatives corrélées par quelques **composantes principales** non corrélées, classées par importance.
- Le premier axe maximise l'inertie du nuage projeté ; le deuxième, perpendiculaire, maximise l'inertie restante.
- **ACP normée** : diagonalisation de $R$ (variables d'unités différentes) ; ACP non normée : diagonalisation de $V$.
- Axes dirigés par les **vecteurs propres** $u_k$ (norme 1) ; inertie de l'axe $k$ = **valeur propre** $\lambda_k$.
- ACP normée : $\sum_k \lambda_k = p$ ; part d'inertie de l'axe $k$ = $\lambda_k / p$.
- Composante principale $F_k = Z u_k$ : moyenne 0, variance $\lambda_k$.
- Deux variables de corrélation $r > 0$ : $\lambda_1 = 1 + r$, $\lambda_2 = 1 - r$, $u_1 = (1/\sqrt{2} ; 1/\sqrt{2})$.
- $p$ variables également corrélées ($\rho$) : $\lambda_1 = 1 + (p-1)\rho$, les autres $1 - \rho$.
- Choix des axes : **Kaiser** ($\lambda > 1$), **inertie cumulée** (70 à 80 %), **coude** de l'éboulis.
- Le signe d'un vecteur propre est arbitraire : seules les oppositions entre coefficients comptent.
`,
exercices: md`
### Exercice 2 — ACP de deux variables

Dans une enquête auprès de 300 clients d'une enseigne d'électroménager, le nombre d'achats en ligne par an et le nombre de visites en magasin par an ont une corrélation de −0,7.

1. Écrivez la matrice $R$ et calculez ses valeurs propres.
2. Quelle part d'inertie explique le premier axe ?
3. Donnez le premier vecteur propre et interprétez la première composante.

<details><summary>Voir le corrigé</summary>

1. $R = \begin{pmatrix} 1 & -0{,}7 \\ -0{,}7 & 1 \end{pmatrix}$. Les valeurs propres sont $1 \pm 0{,}7$ : $\lambda_1 = $ **1,7** et $\lambda_2 = $ **0,3** (vérification : $1{,}7 + 0{,}3 = 2$).
2. $1{,}7 / 2 = $ **85 %**.
3. La corrélation étant négative, le premier axe est dirigé par $u_1 = (1/\sqrt{2} \; ; \; -1/\sqrt{2})$ (ou son opposé) : on vérifie que $R u_1 = 1{,}7\, u_1$. $F_1 = \frac{z_1 - z_2}{\sqrt{2}}$ **oppose** les clients « en ligne » (beaucoup d'achats sur le site, peu de visites) aux clients « magasin » (profil inverse) : c'est un axe de canal d'achat.

</details>

### Exercice 3 — Valeur propre manquante et choix des axes

Une ACP normée sur 5 variables donne les valeurs propres 2,6 ; 1,2 ; 0,6 ; 0,4 et une cinquième effacée.

1. Calculez la cinquième valeur propre.
2. Dressez le tableau des pourcentages d'inertie et des pourcentages cumulés.
3. Combien d'axes retenir ?

<details><summary>Voir le corrigé</summary>

1. $\lambda_5 = 5 - (2{,}6 + 1{,}2 + 0{,}6 + 0{,}4) = $ **0,2**.
2.

| Axe | $\lambda_k$ | % | % cumulé |
|---|---|---|---|
| 1 | 2,6 | 52 % | 52 % |
| 2 | 1,2 | 24 % | 76 % |
| 3 | 0,6 | 12 % | 88 % |
| 4 | 0,4 | 8 % | 96 % |
| 5 | 0,2 | 4 % | 100 % |

3. Kaiser : **deux axes** ($\lambda_1$ et $\lambda_2 > 1$) ; le plan 1-2 explique 76 % de l'inertie, dans la zone habituelle ; le coude apparaît après le deuxième axe (la baisse de 1,2 à 0,6 est la dernière forte). On retient **deux axes**, en regardant éventuellement le troisième (12 %).

</details>
`,
qcm: [
{ q: "L'ACP s'applique à des variables :", choix: ["Quantitatives", "Qualitatives nominales", "Uniquement binaires", "Uniquement ordinales"], bonne: 0, explication: "L'AFC traite le croisement de variables qualitatives." },
{ q: "Dans une ACP normée, on diagonalise :", choix: ["La matrice des corrélations", "La matrice des variances-covariances brute", "Le tableau de données brut", "La matrice des distances"], bonne: 0, explication: "On travaille sur données centrées réduites." },
{ q: "L'inertie projetée sur un axe principal est égale :", choix: ["À la valeur propre associée", "À la norme du vecteur propre", "Au nombre de variables", "À la corrélation moyenne"], bonne: 0, explication: "C'est le lien entre ACP et diagonalisation." },
{ q: "Dans une ACP normée sur 8 variables, la somme des valeurs propres vaut :", choix: ["8", "1", "100", "64"], bonne: 0, explication: "Elle est égale à la trace de R." },
{ q: "Dans une ACP normée sur 5 variables, un axe de valeur propre 2 explique :", choix: ["40 % de l'inertie", "20 % de l'inertie", "2 % de l'inertie", "50 % de l'inertie"], bonne: 0, explication: "2 / 5 = 40 %." },
{ q: "Le critère de Kaiser conduit à retenir, dans une ACP normée, les axes dont la valeur propre est :", choix: ["Supérieure à 1", "Supérieure à 0,5", "Inférieure à 1", "Supérieure à p"], bonne: 0, explication: "Un axe doit résumer plus qu'une variable." },
{ q: "Deux variables de corrélation 0,8 : la première valeur propre de l'ACP normée vaut :", choix: ["1,8", "0,8", "0,2", "1,6"], bonne: 0, explication: "λ1 = 1 + r." },
{ q: "Deux composantes principales différentes sont :", choix: ["Non corrélées", "Parfaitement corrélées", "De même variance", "De moyennes différentes"], bonne: 0, explication: "Les axes sont orthogonaux." },
{ q: "Le critère du coude consiste à :", choix: ["S'arrêter avant que les valeurs propres deviennent faibles et voisines", "Garder tous les axes", "Garder le dernier axe", "Garder un axe sur deux"], bonne: 0, explication: "Au-delà du coude, les axes font du bruit." },
{ q: "Si u est un vecteur propre de norme 1, alors −u :", choix: ["Dirige le même axe", "Dirige un axe perpendiculaire", "N'est pas un vecteur propre", "Correspond à une autre valeur propre"], bonne: 0, explication: "Le signe d'un vecteur propre est arbitraire." },
],
},
4: {
titre: "L'analyse en composantes principales : interprétation",
description: "Interpréter une ACP : coordonnées des individus, cercle des corrélations, cosinus carré, contributions aux axes et projection d'éléments supplémentaires.",
resume: md`
## L'essentiel — Interpréter une ACP

- Coordonnée d'un individu : $F_{ik} = \sum_j z_{ij}\, u_{jk}$ ; moyenne nulle, variance $\lambda_k$.
- Corrélation variable-axe (ACP normée) : $r(X_j, F_k) = \sqrt{\lambda_k}\, u_{jk}$.
- $\sum_j r^2(X_j, F_k) = \lambda_k$ ; pour une variable, la somme des $r^2$ sur tous les axes vaut 1.
- **Cercle des corrélations** : variable près du cercle = bien représentée ; proches = corrélées ; opposées = corrélées négativement ; à angle droit = peu corrélées.
- On nomme un axe d'après les variables qui en sont proches.
- **Qualité** d'un individu : $\cos^2_{ik} = F_{ik}^2 / d^2(i, g)$, avec $d^2 = \sum_j z_{ij}^2$ ; ne commenter que les individus bien représentés.
- **Contribution** : $CTR_{ik} = F_{ik}^2 / (n \lambda_k)$ ; total 100 % ; on cite ceux qui dépassent $1/n$.
- Qualité ≠ contribution : l'une dit si l'individu est bien vu, l'autre s'il construit l'axe.
- Individu **supplémentaire** : réduit avec les moyennes et écarts-types des actifs, puis projeté.
`,
exercices: md`
### Exercice 2 — Corrélations et cercle

Une ACP normée sur trois ratios financiers de 40 PME (rentabilité, marge, rotation de l'actif) donne $\lambda_1 = 2{,}25$ et $u_1 = (0{,}6 \; ; \; 0{,}64 \; ; \; 0{,}48)$.

1. Vérifiez que $u_1$ est de norme 1.
2. Calculez les corrélations des trois ratios avec l'axe 1.
3. Calculez les $r^2$ et vérifiez leur somme.
4. Quelle variable est la moins bien représentée sur l'axe 1 ?

<details><summary>Voir le corrigé</summary>

1. $0{,}36 + 0{,}4096 + 0{,}2304 = 1$ ✔.
2. $\sqrt{2{,}25} = 1{,}5$ : corrélations **0,90**, **0,96** et **0,72**.
3. $r^2$ : 0,81 ; 0,9216 ; 0,5184 ; somme **2,25** $= \lambda_1$ ✔.
4. La rotation de l'actif ($r^2 = 0{,}52$) : l'axe 1 n'en représente qu'un peu plus de la moitié ; le reste de son information est sur les axes suivants.

</details>

### Exercice 3 — Coordonnée, qualité et contribution d'un individu

Dans l'ACP de l'exercice 2 ($n = 10$ PME retenues pour l'illustration), la PME Atlas Bois a pour coordonnées centrées réduites $(1{,}2 \; ; \; -0{,}5 \; ; \; 0{,}8)$.

1. Calculez sa coordonnée sur l'axe 1.
2. Calculez sa qualité de représentation sur l'axe 1.
3. Calculez sa contribution à l'axe 1. Commentez.

<details><summary>Voir le corrigé</summary>

1. $F_1 = 0{,}6 \times 1{,}2 + 0{,}64 \times (-0{,}5) + 0{,}48 \times 0{,}8 = 0{,}72 - 0{,}32 + 0{,}384 = $ **0,784**.
2. $d^2 = 1{,}44 + 0{,}25 + 0{,}64 = 2{,}33$ ; $\cos^2 = 0{,}615 / 2{,}33 \approx$ **0,26** : l'entreprise est **mal représentée** sur l'axe 1 (sa marge faible contredit sa bonne rentabilité, ce que l'axe 1 ne montre pas).
3. $CTR = 0{,}615 / (10 \times 2{,}25) \approx$ **2,7 %**, bien en dessous de la moyenne (10 %) : Atlas Bois ne construit pas l'axe 1, et l'on ne commente pas sa position sur cet axe.

</details>
`,
qcm: [
{ q: "La coordonnée d'un individu sur l'axe k s'obtient :", choix: ["En projetant sa ligne centrée réduite sur le vecteur propre u_k", "En divisant sa valeur par λk", "En prenant sa première variable", "En calculant sa distance au centre"], bonne: 0, explication: "F = somme des z × coefficients de u_k." },
{ q: "Dans une ACP normée, la corrélation entre une variable et l'axe k vaut :", choix: ["La racine de λk multipliée par le coefficient de la variable dans u_k", "Le coefficient du vecteur propre seul", "La valeur propre λk", "Le cosinus carré de l'individu"], bonne: 0, explication: "Il ne faut pas oublier la racine de λk." },
{ q: "Une variable placée près du centre du cercle des corrélations est :", choix: ["Mal représentée sur le plan", "Très corrélée aux deux axes", "Bien représentée", "Aberrante"], bonne: 0, explication: "On ne la commente pas sur ce plan." },
{ q: "Deux variables bien représentées, à angle droit sur le cercle des corrélations, sont :", choix: ["Peu corrélées", "Parfaitement corrélées", "Corrélées négativement", "Identiques"], bonne: 0, explication: "Le cosinus d'un angle droit est nul." },
{ q: "La somme des carrés des corrélations des variables avec l'axe 1 est égale à :", choix: ["λ1", "1", "p", "0"], bonne: 0, explication: "C'est l'inertie de l'axe." },
{ q: "Le cosinus carré d'un individu sur un axe mesure :", choix: ["Sa qualité de représentation sur cet axe", "Sa contribution à l'axe", "Sa distance au centre", "Sa valeur propre"], bonne: 0, explication: "Part de sa distance au centre visible sur l'axe." },
{ q: "F = 3, n = 20, λ = 1,5 : la contribution de l'individu à l'axe est de :", choix: ["30 %", "15 %", "10 %", "45 %"], bonne: 0, explication: "9 / (20 × 1,5) = 0,30." },
{ q: "Avec 25 individus actifs, on cite pour interpréter un axe ceux dont la contribution dépasse environ :", choix: ["4 %", "25 %", "50 %", "1 %"], bonne: 0, explication: "La contribution moyenne est 1/n." },
{ q: "Un individu supplémentaire :", choix: ["Est projeté sans participer au calcul des axes", "Modifie les valeurs propres", "Est réduit avec sa propre moyenne", "Est retiré de l'analyse"], bonne: 0, explication: "On le réduit avec les paramètres des individus actifs." },
{ q: "Un individu très bien représenté sur l'axe 1 mais proche du centre a en général :", choix: ["Une faible contribution à l'axe 1", "Une forte contribution à l'axe 1", "Un cosinus carré nul", "Une coordonnée très élevée"], bonne: 0, explication: "Qualité et contribution sont deux notions différentes." },
],
},
5: {
titre: "L'analyse factorielle des correspondances",
description: "AFC : tableau de contingence, profils lignes et colonnes, distance du khi-deux, inertie égale au khi-deux sur n, nombre d'axes et représentation simultanée.",
resume: md`
## L'essentiel — L'analyse factorielle des correspondances

- L'AFC étudie le lien entre **deux variables qualitatives** croisées dans un **tableau de contingence**.
- Fréquences $f_{ij} = n_{ij}/n$ ; marges $f_{i\cdot}$ et $f_{\cdot j}$.
- **Profil ligne** : $n_{ij}/n_{i\cdot}$ ; **profil moyen** = marge colonne = centre de gravité des profils lignes.
- Indépendance : tous les profils sont égaux au profil moyen.
- **Distance du khi-deux** : $d^2 = \sum_j \frac{1}{f_{\cdot j}}(\text{écart de profil})^2$ ; les modalités rares sont repondérées.
- Équivalence distributionnelle : fusionner deux colonnes de même profil ne change rien.
- **Inertie totale** $I = \sum_i f_{i\cdot}\, d^2(i, g) = \chi^2 / n$ (intensité du lien) ; $\chi^2$ avec $e_{ij} = n_{i\cdot} n_{\cdot j}/n$ (significativité).
- Nombre d'axes : $\min(I, J) - 1$ ; valeurs propres $\le 1$, de somme $\chi^2/n$.
- Représentation simultanée : une ligne se place du côté des colonnes qu'elle surreprésente (formules de transition).
- Plus de deux variables qualitatives : **ACM** sur le tableau disjonctif complet.
`,
exercices: md`
### Exercice 2 — Un tableau 2 × 2

Une banque a ouvert 200 comptes en ligne et en agence : à Rabat, 60 en ligne et 40 en agence ; à Oujda, 40 en ligne et 60 en agence.

1. Calculez les effectifs théoriques, le $\chi^2$ et l'inertie.
2. Combien l'AFC a-t-elle d'axes ? Que vaut sa valeur propre ?
3. Que devient le $\chi^2$ si l'on interroge 2 000 clients avec les mêmes proportions ? Et l'inertie ?

<details><summary>Voir le corrigé</summary>

1. Toutes les marges valent 100 : $e_{ij} = 100 \times 100 / 200 = 50$. $\chi^2 = 4 \times \frac{10^2}{50} = $ **8** ; $I = 8 / 200 = $ **0,04**.
2. $\min(2, 2) - 1 = $ **1 axe**, de valeur propre **0,04** (toute l'inertie).
3. Les effectifs sont multipliés par 10 : le $\chi^2$ aussi (**80**), mais l'inertie reste **0,04**. Le test devient plus significatif avec un grand échantillon, alors que l'intensité du lien est la même.

</details>

### Exercice 3 — Profils et distance du khi-deux

Une marque de thé interroge 100 hommes et 100 femmes sur leur marque préférée parmi A, B et C : hommes 60, 30, 10 ; femmes 20, 50, 30.

1. Calculez les profils lignes et le profil moyen.
2. Calculez la distance du khi-deux de chaque profil au profil moyen.
3. Déduisez-en l'inertie totale et le $\chi^2$. Combien d'axes ?

<details><summary>Voir le corrigé</summary>

1. Hommes : (60 % ; 30 % ; 10 %) ; femmes : (20 % ; 50 % ; 30 %) ; profil moyen : (40 % ; 40 % ; 20 %).
2. Hommes : $\frac{0{,}2^2}{0{,}4} + \frac{0{,}1^2}{0{,}4} + \frac{0{,}1^2}{0{,}2} = 0{,}1 + 0{,}025 + 0{,}05 = $ **0,175**. Femmes : $\frac{0{,}2^2}{0{,}4} + \frac{0{,}1^2}{0{,}4} + \frac{0{,}1^2}{0{,}2} = $ **0,175** (les deux profils sont symétriques par rapport au profil moyen).
3. $I = 0{,}5 \times 0{,}175 + 0{,}5 \times 0{,}175 = $ **0,175** ; $\chi^2 = 0{,}175 \times 200 = $ **35**. Un seul axe ($\min(2, 3) - 1 = 1$), de valeur propre 0,175 : il oppose les hommes et la marque A aux femmes et aux marques B et C.

</details>
`,
qcm: [
{ q: "L'AFC étudie le lien entre :", choix: ["Deux variables qualitatives", "Plusieurs variables quantitatives", "Une variable quantitative et le temps", "Deux individus"], bonne: 0, explication: "Croisées dans un tableau de contingence." },
{ q: "Un profil ligne est :", choix: ["La répartition d'une ligne en pourcentages de son total", "La ligne des totaux", "L'effectif d'une case", "La moyenne de la ligne"], bonne: 0, explication: "On compare des profils, pas des effectifs." },
{ q: "En cas d'indépendance parfaite entre les deux variables :", choix: ["Tous les profils lignes sont égaux au profil moyen", "Le khi-deux est maximal", "L'inertie vaut 1", "Les marges sont nulles"], bonne: 0, explication: "Le nuage des profils se réduit à un point." },
{ q: "La distance du khi-deux pondère chaque colonne par :", choix: ["L'inverse de son poids", "Son poids", "Son effectif", "Le nombre de lignes"], bonne: 0, explication: "Une modalité rare compte autant qu'une fréquente." },
{ q: "L'inertie totale d'une AFC est égale :", choix: ["Au khi-deux divisé par l'effectif total", "Au khi-deux", "Au nombre de lignes", "À 1"], bonne: 0, explication: "I = χ²/n." },
{ q: "Un tableau de contingence 5 × 4 donne une AFC à :", choix: ["3 axes", "4 axes", "5 axes", "20 axes"], bonne: 0, explication: "min(5, 4) − 1 = 3." },
{ q: "Les valeurs propres d'une AFC sont :", choix: ["Inférieures ou égales à 1", "Toujours supérieures à 1", "Égales au nombre de colonnes", "Négatives"], bonne: 0, explication: "Leur somme est l'inertie χ²/n." },
{ q: "Effectifs de ligne 120 et de colonne 200, total 400 : l'effectif théorique de la case vaut :", choix: ["60", "120", "80", "30"], bonne: 0, explication: "120 × 200 / 400." },
{ q: "Si l'on double l'échantillon avec les mêmes proportions :", choix: ["Le khi-deux double et l'inertie ne change pas", "Le khi-deux et l'inertie doublent", "Rien ne change", "L'inertie double"], bonne: 0, explication: "L'inertie mesure l'intensité du lien." },
{ q: "Pour croiser les réponses à tout un questionnaire qualitatif, on utilise :", choix: ["L'analyse des correspondances multiples", "L'ACP normée", "La régression linéaire", "Les centres mobiles uniquement"], bonne: 0, explication: "L'ACM traite le tableau disjonctif complet." },
],
},
6: {
titre: "La classification : CAH et centres mobiles",
description: "Classification ascendante hiérarchique, sauts minimal et maximal, dendrogramme, méthode de Ward, théorème de Huygens, centres mobiles, qualité d'une partition.",
resume: md`
## L'essentiel — CAH et centres mobiles

- La classification **regroupe** les individus en classes homogènes et distinctes (classes non connues d'avance).
- Distance euclidienne sur données **réduites**, ou sur les premières composantes d'une ACP.
- **CAH** : on part de $n$ classes et l'on fusionne à chaque étape les deux plus proches.
- Critères d'agrégation : saut **minimal** (effet de chaîne), saut **maximal** (classes compactes), distance moyenne, **Ward**.
- **Dendrogramme** : couper juste avant le plus grand saut de niveau.
- **Huygens** : $I_{\text{totale}} = I_{\text{intra}} + I_{\text{inter}}$ ; qualité $R^2 = I_{\text{inter}} / I_{\text{totale}}$.
- Ward fusionne les classes qui augmentent le moins l'inertie intra : $\Delta = \frac{n_A n_B}{n_A + n_B}\, d^2(g_A, g_B)$.
- **Centres mobiles** : $k$ fixé, affecter au centre le plus proche, recalculer les centres, recommencer jusqu'à stabilité.
- Le résultat des k-means dépend des centres de départ : plusieurs lancements, ou CAH puis consolidation.
- Toujours décrire et nommer les classes, puis proposer une action par classe.
`,
exercices: md`
### Exercice 2 — CAH sur une seule variable

Quatre magasins réalisent un chiffre d'affaires mensuel de 2, 3, 7 et 12 (en centaines de milliers de DH).

1. Réalisez la CAH au saut minimal (distance = écart absolu).
2. Tracez le dendrogramme (niveaux) et proposez une partition.

<details><summary>Voir le corrigé</summary>

1. Distances : 2-3 : 1 ; 2-7 : 5 ; 2-12 : 10 ; 3-7 : 4 ; 3-12 : 9 ; 7-12 : 5. Fusion **{2, 3}** au niveau 1. Puis $d(\{2, 3\}, 7) = \min(5 ; 4) = 4$ et $d(\{2, 3\}, 12) = 9$, $d(7, 12) = 5$ : fusion **{2, 3, 7}** au niveau 4. Enfin $d(\{2, 3, 7\}, 12) = 5$ : fusion au niveau 5.
2. Niveaux 1, 4, 5. Le plus grand saut est entre 1 et 4 : on peut retenir **trois classes** {2, 3}, {7}, {12}. Si l'on veut deux classes, {2, 3, 7} et {12} : le magasin de 12 est un magasin « amiral » à part.

</details>

### Exercice 3 — Ward et qualité d'une partition

Une banque a classé 5 clients en deux classes : $A$ (2 clients, centre $g_A$) et $B$ (3 clients, centre $g_B$), avec $d^2(g_A, g_B) = 10$. L'inertie totale (poids 1/5) vaut 2,6.

1. Calculez l'augmentation de l'inertie intra (somme des carrés, poids 1) si l'on fusionnait $A$ et $B$ selon Ward.
2. Déduisez-en l'inertie inter-classes de la partition (poids 1/5), son inertie intra et son $R^2$.

<details><summary>Voir le corrigé</summary>

1. $\Delta = \frac{2 \times 3}{2 + 3} \times 10 = $ **12**.
2. Fusionner $A$ et $B$ fait disparaître toute l'inertie inter : $I_{\text{inter}} = 12 / 5 = $ **2,4**. $I_{\text{intra}} = 2{,}6 - 2{,}4 = $ **0,2**. $R^2 = 2{,}4 / 2{,}6 \approx$ **0,92** : partition de très bonne qualité.

</details>
`,
qcm: [
{ q: "La classification ascendante hiérarchique part :", choix: ["D'autant de classes que d'individus", "D'une seule classe", "De k classes fixées d'avance", "Des valeurs propres"], bonne: 0, explication: "Elle fusionne ensuite les classes deux à deux." },
{ q: "Au saut minimal, la distance entre deux classes est :", choix: ["La plus petite distance entre un point de chacune", "La plus grande distance entre leurs points", "La distance de leurs centres", "La somme des distances"], bonne: 0, explication: "Ce critère produit un effet de chaîne." },
{ q: "On coupe un dendrogramme :", choix: ["Juste avant le plus grand saut de niveau", "Toujours au milieu", "Au premier niveau", "Après la dernière fusion"], bonne: 0, explication: "Au-delà, on fusionnerait des classes très éloignées." },
{ q: "Le théorème de Huygens énonce que :", choix: ["Inertie totale = inertie intra + inertie inter", "Inertie intra = inertie totale × inertie inter", "Inertie inter = 0", "Inertie totale = nombre de classes"], bonne: 0, explication: "C'est la base du critère de Ward." },
{ q: "Une partition de bonne qualité a :", choix: ["Une inertie inter-classes forte par rapport à l'inertie totale", "Une inertie intra-classe forte", "Un R² proche de 0", "Des classes de même effectif"], bonne: 0, explication: "R² = inertie inter / inertie totale." },
{ q: "La méthode de Ward fusionne les deux classes qui :", choix: ["Augmentent le moins l'inertie intra-classe", "Ont les centres les plus éloignés", "Ont le plus d'individus", "Sont les plus petites"], bonne: 0, explication: "Elle minimise la perte d'inertie inter." },
{ q: "Classes de 1 et 3 individus, centres distants de 2 : l'augmentation de Ward vaut :", choix: ["3", "6", "1,5", "8"], bonne: 0, explication: "(1 × 3 / 4) × 2² = 3." },
{ q: "Les centres mobiles exigent de fixer d'avance :", choix: ["Le nombre de classes", "Le dendrogramme", "Les valeurs propres", "Le critère du saut minimal"], bonne: 0, explication: "C'est le k de k-means." },
{ q: "Le résultat des centres mobiles peut varier selon :", choix: ["Les centres de départ", "La couleur des graphiques", "L'ordre des colonnes réduites", "Rien, il est unique"], bonne: 0, explication: "On lance donc l'algorithme plusieurs fois." },
{ q: "Le scoring bancaire, qui affecte un emprunteur à « bon » ou « mauvais » payeur à partir de classes connues, est :", choix: ["Un classement supervisé", "Une CAH", "Une ACP", "Une AFC"], bonne: 0, explication: "La classification non supervisée découvre des classes inconnues." },
],
},
};

export default chapitres;
