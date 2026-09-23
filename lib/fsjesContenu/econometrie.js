// Économétrie (S5) — compléments par chapitre.
const md = String.raw;

export default {
  1: {
    titre: "Introduction à l'économétrie",
    resume: md`
## L'essentiel — Introduction à l'économétrie

- L'**économétrie** applique la statistique et les mathématiques aux données pour **quantifier** des relations économiques, **tester** des théories et **prévoir**.
- Démarche : théorie → **spécification** → données → **estimation** → **tests** → prévision ou décision.
- Modèle simple : $Y_i = \beta_0 + \beta_1 X_i + \varepsilon_i$ ; $Y$ variable **expliquée** (endogène), $X$ **explicative** (exogène), $\beta$ paramètres inconnus.
- Le **terme d'erreur** regroupe variables omises, erreurs de mesure, part aléatoire des comportements et erreur de forme fonctionnelle.
- Données : **coupe transversale** (plusieurs individus, une date), **série temporelle** (un individu, plusieurs dates), **panel** (plusieurs individus suivis dans le temps).
`,
    exercices: md`
### Exercice 2 — Spécifier un modèle de demande

On veut expliquer la quantité demandée $Q$ d'un produit par son prix $P$ et le revenu des ménages $R$.

1. Écrivez le modèle et indiquez les signes attendus des coefficients (bien normal).
2. Quel type de données utilise-t-on dans chaque cas ? a) les ventes mensuelles d'une marque de 2015 à 2025 ; b) les dépenses de 3 000 ménages interrogés en 2024 ; c) les ventes annuelles de 200 magasins suivis sur 8 ans.

<details><summary>Voir le corrigé</summary>

**1)** $Q_i = \beta_0 + \beta_1 P_i + \beta_2 R_i + \varepsilon_i$ avec $\beta_1 < 0$ (loi de la demande) et $\beta_2 > 0$ (bien normal).

**2)** a) **série temporelle** ; b) **coupe transversale** ; c) **données de panel**.

</details>
`,
    qcm: [
      { q: "Dans Y = β₀ + β₁X + ε, Y est :", choix: ["La variable explicative", "La variable expliquée", "Le terme d'erreur", "Un paramètre"], bonne: 1, explication: "C'est la variable endogène, dépendante." },
      { q: "Le PIB du Maroc observé de 1990 à 2024 forme :", choix: ["Une coupe transversale", "Une série temporelle", "Un panel", "Un échantillon aléatoire"], bonne: 1, explication: "Un seul individu, plusieurs dates." },
      { q: "Le terme d'erreur contient notamment :", choix: ["Les paramètres estimés", "Les variables omises et les erreurs de mesure", "La variable expliquée", "La constante"], bonne: 1, explication: "Tout ce que le modèle ne capte pas." },
      { q: "La première étape de la démarche économétrique est :", choix: ["L'estimation", "La théorie économique et la spécification", "La prévision", "Le test de Student"], bonne: 1, explication: "Le modèle part d'une théorie." },
      { q: "50 entreprises observées sur 10 ans forment :", choix: ["Une série temporelle", "Une coupe transversale", "Des données de panel", "Un sondage"], bonne: 2, explication: "Plusieurs individus suivis dans le temps." },
    ],
  },

  2: {
    titre: "Le modèle de régression linéaire simple",
    resume: md`
## L'essentiel — Régression simple et MCO

- Hypothèses : linéarité, $X$ exogène, $E(\varepsilon) = 0$, **homoscédasticité**, **absence d'autocorrélation**, normalité.
- Les **MCO** minimisent $\sum e_i^2$ : $\hat{\beta}_1 = \dfrac{\sum (X_i - \bar{X})(Y_i - \bar{Y})}{\sum (X_i - \bar{X})^2}$ et $\hat{\beta}_0 = \bar{Y} - \hat{\beta}_1 \bar{X}$.
- **Gauss-Markov** : sous H1 à H5, les estimateurs MCO sont **BLUE** (linéaires, sans biais, de variance minimale).
- $\hat{\sigma}^2 = \dfrac{\sum e_i^2}{n - 2}$ ; $V(\hat{\beta}_1) = \dfrac{\hat{\sigma}^2}{\sum (X_i - \bar{X})^2}$.
- Les résidus MCO ont une **somme nulle**.
- Interprétation : niveau-niveau (unités), log-niveau (% pour une unité), **log-log** (élasticité).
`,
    exercices: md`
### Exercice 2 — Estimation complète sur 5 observations

| X | 2 | 4 | 6 | 8 | 10 |
|---|--:|--:|--:|--:|--:|
| Y | 5 | 9 | 10 | 14 | 17 |

1. Estimez $\hat{\beta}_0$ et $\hat{\beta}_1$.
2. Calculez les résidus et vérifiez que leur somme est nulle.
3. Calculez $\hat{\sigma}^2$ et l'erreur standard de $\hat{\beta}_1$.
4. Dans le modèle $\ln Q = 3 - 1{,}2 \ln P$, interprétez le coefficient $-1{,}2$.

<details><summary>Voir le corrigé</summary>

**1)** $\bar{X} = 6$ ; $\bar{Y} = 11$ ; $\sum (X_i - \bar{X})(Y_i - \bar{Y}) = 58$ ; $\sum (X_i - \bar{X})^2 = 40$.

$\hat{\beta}_1 = 58 / 40 = 1{,}45$ ; $\hat{\beta}_0 = 11 - 1{,}45 \times 6 = 2{,}3$ ; $\hat{Y} = 2{,}3 + 1{,}45X$.

**2)** $\hat{Y}$ : 5,2 ; 8,1 ; 11 ; 13,9 ; 16,8. Résidus : −0,2 ; 0,9 ; −1 ; 0,1 ; 0,2. Somme $= 0$ ✓.

**3)** $\sum e_i^2 = 0{,}04 + 0{,}81 + 1 + 0{,}01 + 0{,}04 = 1{,}9$ ; $\hat{\sigma}^2 = 1{,}9 / 3 \approx 0{,}633$ ; $\hat{\sigma}_{\hat{\beta}_1} = \sqrt{0{,}633 / 40} \approx 0{,}126$.

**4)** Modèle log-log : $-1{,}2$ est l'**élasticité-prix** ; une hausse du prix de 1 % fait baisser la quantité demandée d'environ 1,2 % (demande élastique).

</details>
`,
    qcm: [
      { q: "La méthode des MCO minimise :", choix: ["La somme des résidus", "La somme des carrés des résidus", "Le R²", "La variance de X"], bonne: 1, explication: "D'où son nom : moindres carrés." },
      { q: "BLUE signifie que l'estimateur est :", choix: ["Biaisé mais rapide", "Linéaire, sans biais et de variance minimale", "Non linéaire", "Toujours égal au vrai paramètre"], bonne: 1, explication: "Théorème de Gauss-Markov." },
      { q: "Cov(X, Y) = 12 et V(X) = 4 : β̂₁ vaut :", choix: ["48", "3", "0,33", "16"], bonne: 1, explication: "β̂₁ = Cov / V(X)." },
      { q: "En régression simple, σ̂² se calcule en divisant Σe² par :", choix: ["n", "n − 1", "n − 2", "n + 2"], bonne: 2, explication: "Deux paramètres ont été estimés." },
      { q: "Dans un modèle log-log, β₁ s'interprète comme :", choix: ["Une variation absolue", "Une élasticité", "Un taux d'intérêt", "Un R²"], bonne: 1, explication: "Variation en % de Y pour 1 % de X." },
    ],
  },

  3: {
    titre: "La qualité de l'ajustement",
    resume: md`
## L'essentiel — Qualité de l'ajustement

- Décomposition : $SCT = SCE + SCR$ (totale = expliquée + résiduelle).
- $R^2 = \dfrac{SCE}{SCT} = 1 - \dfrac{SCR}{SCT}$, entre 0 et 1 : part de la variance de $Y$ expliquée.
- En régression simple, $R^2 = r^2$ et $SCE = \hat{\beta}_1^2 \sum (X_i - \bar{X})^2$.
- Le $R^2$ augmente **mécaniquement** avec le nombre de variables.
- **R² ajusté** : $\bar{R}^2 = 1 - (1 - R^2)\dfrac{n - 1}{n - k}$ ($k$ paramètres, constante comprise) ; il peut être négatif et sert à comparer des modèles de tailles différentes.
`,
    exercices: md`
### Exercice 2 — R² et R² ajusté de la régression précédente

On reprend les 5 observations de l'exercice 2 du chapitre précédent ($\hat{\beta}_1 = 1{,}45$ ; $\sum (X_i - \bar{X})^2 = 40$ ; $\sum e_i^2 = 1{,}9$ ; $Y$ : 5, 9, 10, 14, 17).

1. Calculez SCT, SCE et vérifiez la décomposition.
2. Calculez $R^2$ et $\bar{R}^2$.

<details><summary>Voir le corrigé</summary>

**1)** $SCT = \sum (Y_i - 11)^2 = 36 + 4 + 1 + 9 + 36 = 86$ ; $SCE = 1{,}45^2 \times 40 = 84{,}1$ ; $SCE + SCR = 84{,}1 + 1{,}9 = 86$ ✓.

**2)** $R^2 = 84{,}1 / 86 \approx 0{,}978$ ; $\bar{R}^2 = 1 - (1 - 0{,}978) \times \dfrac{4}{3} \approx 0{,}971$. Le modèle explique près de 98 % de la variance de $Y$.

</details>
`,
    qcm: [
      { q: "La décomposition de la variance s'écrit :", choix: ["SCT = SCE − SCR", "SCT = SCE + SCR", "SCE = SCT + SCR", "SCR = SCT × SCE"], bonne: 1, explication: "Totale = expliquée + résiduelle." },
      { q: "SCT = 200 et SCR = 50 : le R² vaut :", choix: ["0,25", "0,75", "4", "150"], bonne: 1, explication: "1 − 50/200." },
      { q: "Ajouter une variable inutile au modèle fait :", choix: ["Baisser le R²", "Monter ou stagner le R²", "Annuler le R²", "Rendre le R² négatif"], bonne: 1, explication: "D'où l'intérêt du R² ajusté." },
      { q: "Le R² ajusté peut être :", choix: ["Supérieur à 1", "Négatif", "Toujours égal au R²", "Toujours nul"], bonne: 1, explication: "Quand le modèle est très mauvais." },
      { q: "En régression simple, si r = −0,9, le R² vaut :", choix: ["−0,9", "0,81", "0,9", "−0,81"], bonne: 1, explication: "R² = r²." },
    ],
  },

  4: {
    titre: "Inférence statistique : tests et intervalles",
    resume: md`
## L'essentiel — Tests et intervalles

- Test de **Student** : $H_0 : \beta_1 = 0$ ; $t_c = \dfrac{\hat{\beta}_1}{\hat{\sigma}_{\hat{\beta}_1}}$, loi de Student à $n - k$ degrés de liberté.
- Si $|t_c| > t_{table}$ : on rejette $H_0$, la variable est **significative** (règle empirique : $|t| > 2$ à 5 %).
- Pour tester $\beta_1 = b$ : $t_c = \dfrac{\hat{\beta}_1 - b}{\hat{\sigma}_{\hat{\beta}_1}}$.
- **p-value** < 0,05 : rejet de $H_0$ à 5 %.
- $IC = \hat{\beta}_1 \pm t_{\alpha/2} \hat{\sigma}_{\hat{\beta}_1}$ ; s'il **contient 0**, la variable n'est pas significative.
- **Erreur de 1ʳᵉ espèce** ($\alpha$) : rejeter $H_0$ vraie ; **de 2ᵉ espèce** : accepter $H_0$ fausse.
`,
    exercices: md`
### Exercice 2 — Tests sur la régression à 5 observations

Avec $\hat{\beta}_1 = 1{,}45$ et $\hat{\sigma}_{\hat{\beta}_1} \approx 0{,}126$ ($n = 5$, $k = 2$, $t_{0,025}(3) = 3{,}182$) :

1. Testez la significativité de $X$ à 5 %.
2. Construisez l'intervalle de confiance à 95 % de $\beta_1$.
3. Testez $H_0 : \beta_1 = 1$.

<details><summary>Voir le corrigé</summary>

**1)** $t_c = 1{,}45 / 0{,}126 \approx 11{,}5 > 3{,}182$ : on rejette $H_0$, $X$ est **significative**.

**2)** $1{,}45 \pm 3{,}182 \times 0{,}126$, soit environ $[1{,}05 \;;\; 1{,}85]$ ; l'intervalle ne contient pas 0.

**3)** $t_c = \dfrac{1{,}45 - 1}{0{,}126} \approx 3{,}58 > 3{,}182$ : on rejette $\beta_1 = 1$ (cohérent : 1 n'est pas dans l'intervalle).

</details>
`,
    qcm: [
      { q: "β̂ = 0,5 et erreur standard 0,1 : la statistique de Student vaut :", choix: ["0,05", "5", "0,6", "50"], bonne: 1, explication: "0,5 / 0,1." },
      { q: "Une p-value de 0,003 au seuil de 5 % conduit à :", choix: ["Accepter H₀", "Rejeter H₀", "Refaire l'estimation", "Aucune conclusion"], bonne: 1, explication: "0,003 < 0,05." },
      { q: "Si l'intervalle de confiance de β₁ contient 0 :", choix: ["La variable est significative", "La variable n'est pas significative", "Le R² vaut 1", "Il y a autocorrélation"], bonne: 1, explication: "On ne peut exclure β₁ = 0." },
      { q: "L'erreur de première espèce consiste à :", choix: ["Accepter H₀ fausse", "Rejeter H₀ vraie", "Calculer un mauvais R²", "Oublier la constante"], bonne: 1, explication: "Sa probabilité est α." },
      { q: "Le nombre de degrés de liberté du test de Student est :", choix: ["n", "n − k", "k", "n + k"], bonne: 1, explication: "k paramètres estimés, constante comprise." },
    ],
  },

  5: {
    titre: "Le modèle de régression multiple",
    resume: md`
## L'essentiel — Régression multiple

- $Y = X\beta + \varepsilon$ ; estimateur $\hat{\beta} = (X'X)^{-1}X'Y$, qui exige l'absence de colinéarité parfaite.
- Chaque $\beta_j$ s'interprète **toutes choses égales par ailleurs**.
- Test de **Fisher** (significativité globale) : $F_c = \dfrac{R^2 / (k - 1)}{(1 - R^2) / (n - k)}$ ; rejet de $H_0$ si $F_c > F_{table}$.
- Student teste une variable, Fisher toutes à la fois.
- **Variables muettes** : une variable qualitative à $m$ modalités → $m - 1$ indicatrices ; la modalité omise sert de **référence** (sinon, trappe des variables muettes).
`,
    exercices: md`
### Exercice 2 — Lire une équation de salaire

Sur 60 salariés, on estime : $\hat{S} = 3\,000 + 250\,\text{EXP} + 1\,200\,\text{MASTER} + 800\,\text{CASA}$, avec $S$ le salaire mensuel (DH), EXP l'expérience (années), MASTER = 1 si le salarié a un master, CASA = 1 s'il travaille à Casablanca. $R^2 = 0{,}45$.

1. Interprétez les coefficients 250 et 1 200.
2. Prévoyez le salaire d'un titulaire de master, à Casablanca, avec 4 ans d'expérience.
3. Testez la significativité globale ($F_{table}(3 ; 56) \approx 2{,}77$).

<details><summary>Voir le corrigé</summary>

**1)** Une année d'expérience supplémentaire est associée à +250 DH de salaire, **à diplôme et ville identiques** ; un master est associé à +1 200 DH par rapport à un salarié sans master (référence), à expérience et ville identiques.

**2)** $3\,000 + 250 \times 4 + 1\,200 + 800 = 6\,000$ DH.

**3)** $F_c = \dfrac{0{,}45 / 3}{0{,}55 / 56} \approx 15{,}3 > 2{,}77$ : modèle **globalement significatif**.

</details>
`,
    qcm: [
      { q: "En régression multiple, βⱼ mesure l'effet de Xⱼ :", choix: ["En ignorant les autres variables", "Toutes choses égales par ailleurs", "Uniquement sur la constante", "Sur le R²"], bonne: 1, explication: "Les autres régresseurs sont maintenus constants." },
      { q: "Le test de Fisher teste :", choix: ["Une seule variable", "La nullité simultanée de tous les coefficients (hors constante)", "L'autocorrélation", "La normalité"], bonne: 1, explication: "Significativité globale du modèle." },
      { q: "Une variable « région » à 4 modalités s'introduit avec :", choix: ["4 indicatrices", "3 indicatrices", "1 variable codée 1 à 4", "2 indicatrices"], bonne: 1, explication: "m − 1 indicatrices, une modalité de référence." },
      { q: "L'estimateur MCO en écriture matricielle est :", choix: ["(X'X)⁻¹X'Y", "X'Y", "(Y'Y)⁻¹X'Y", "X⁻¹Y"], bonne: 0, explication: "Il suppose X'X inversible." },
      { q: "R² = 0,6, k − 1 = 2, n − k = 20 : F vaut :", choix: ["15", "1,5", "30", "0,3"], bonne: 0, explication: "(0,6/2)/(0,4/20) = 0,3/0,02 = 15." },
    ],
  },

  6: {
    titre: "La multicolinéarité et les erreurs de spécification",
    resume: md`
## L'essentiel — Multicolinéarité et spécification

- **Multicolinéarité** : régresseurs fortement corrélés. Parfaite : estimation impossible ; forte : estimateurs sans biais mais **variances gonflées**, $t$ faibles, signes instables.
- Détection : corrélations $|r| > 0{,}8$ ; $R^2$ élevé avec $t$ faibles ; $VIF_j = \dfrac{1}{1 - R_j^2} > 10$ ; test de Klein ($r_{ij}^2 > R^2$).
- Remèdes : supprimer une variable redondante, agréger, augmenter l'échantillon.
- **Omission** d'une variable pertinente corrélée aux régresseurs : estimateurs **biaisés** (faute grave).
- **Ajout** d'une variable inutile : estimateurs sans biais mais moins précis.
- Forme fonctionnelle : test **RESET** de Ramsey.
`,
    exercices: md`
### Exercice 2 — VIF, Klein et variable omise

1. La régression auxiliaire de $X_1$ sur les autres régresseurs donne $R_1^2 = 0{,}95$ ; celle de $X_2$ donne $R_2^2 = 0{,}60$. Calculez les VIF et concluez.
2. Le modèle global a $R^2 = 0{,}85$ et la corrélation entre $X_1$ et $X_3$ est de 0,95. Que dit le test de Klein ?
3. On régresse le salaire sur le niveau d'études, sans variable mesurant l'aptitude des individus (corrélée aux études et au salaire). Quel est le risque ?

<details><summary>Voir le corrigé</summary>

**1)** $VIF_1 = 1 / 0{,}05 = 20 > 10$ : multicolinéarité forte pour $X_1$ ; $VIF_2 = 1 / 0{,}4 = 2{,}5$ : pas de problème.

**2)** $r^2 = 0{,}9025 > R^2 = 0{,}85$ : le test de Klein signale une multicolinéarité.

**3)** **Biais de variable omise** : l'effet de l'aptitude est attribué aux études, dont le coefficient est **surestimé**.

</details>
`,
    qcm: [
      { q: "En présence de multicolinéarité forte, les estimateurs MCO sont :", choix: ["Biaisés", "Sans biais mais avec des variances gonflées", "Impossibles à calculer", "Toujours nuls"], bonne: 1, explication: "C'est la précision qui en souffre." },
      { q: "Un VIF de 25 indique :", choix: ["Aucun problème", "Une forte multicolinéarité", "De l'autocorrélation", "Un R² nul"], bonne: 1, explication: "Seuil d'alerte : 10." },
      { q: "Omettre une variable pertinente corrélée aux régresseurs entraîne :", choix: ["Des estimateurs biaisés", "Des estimateurs plus précis", "Un R² de 1", "Aucun effet"], bonne: 0, explication: "C'est le biais de variable omise." },
      { q: "Le test RESET de Ramsey détecte :", choix: ["L'hétéroscédasticité", "Une mauvaise forme fonctionnelle", "La racine unitaire", "La multicolinéarité parfaite"], bonne: 1, explication: "Erreur de spécification." },
      { q: "Symptôme classique de multicolinéarité :", choix: ["R² faible et t élevés", "R² élevé et t tous faibles", "DW proche de 0", "Résidus non nuls"], bonne: 1, explication: "Le modèle explique bien mais aucune variable ne ressort." },
    ],
  },

  7: {
    titre: "L'hétéroscédasticité et l'autocorrélation",
    resume: md`
## L'essentiel — Hétéroscédasticité et autocorrélation

- **Hétéroscédasticité** : variance des erreurs non constante (fréquent en coupe transversale). Estimateurs sans biais mais non efficients ; **écarts-types biaisés** → tests invalides.
- Détection : graphique des résidus, **Goldfeld-Quandt** ($F = SCR_2 / SCR_1$), **White**, Breusch-Pagan. Remèdes : moindres carrés pondérés, logarithmes, écarts-types robustes de White.
- **Autocorrélation** (séries temporelles) : $\varepsilon_t = \rho\varepsilon_{t-1} + u_t$.
- **Durbin-Watson** : $DW \approx 2(1 - \hat{\rho})$ ; ≈ 2 : absence ; → 0 : autocorrélation positive ; → 4 : négative ; zones d'indétermination entre $d_L$ et $d_U$.
- DW est invalide avec une variable endogène retardée (utiliser $h$ de Durbin ou Breusch-Godfrey). Remèdes : Cochrane-Orcutt, Newey-West, revoir la spécification.
`,
    exercices: md`
### Exercice 2 — Lire Durbin-Watson et Goldfeld-Quandt

1. Pour $n = 25$ et un régresseur, la table donne au seuil de 5 % : $d_L = 1{,}29$ et $d_U = 1{,}45$. Concluez pour $DW$ = 1,10 ; 1,35 ; 1,90 ; 3,20.
2. Test de Goldfeld-Quandt : on classe les observations selon $X$ et on estime le modèle sur les deux sous-échantillons extrêmes : $SCR_1 = 12$ (petits $X$) et $SCR_2 = 48$ (grands $X$), avec $F_{table} = 2{,}98$. Concluez.

<details><summary>Voir le corrigé</summary>

**1)** 1,10 < $d_L$ : **autocorrélation positive** ; 1,35 entre $d_L$ et $d_U$ : **zone d'indétermination** ; 1,90 entre $d_U$ et $4 - d_U = 2{,}55$ : **absence d'autocorrélation** ; 3,20 > $4 - d_L = 2{,}71$ : **autocorrélation négative**.

**2)** $F = 48 / 12 = 4 > 2{,}98$ : on rejette l'homoscédasticité ; la variance des erreurs augmente avec $X$ (**hétéroscédasticité**).

</details>
`,
    qcm: [
      { q: "L'hétéroscédasticité signifie que :", choix: ["Les erreurs sont corrélées dans le temps", "La variance des erreurs n'est pas constante", "Les régresseurs sont corrélés", "La série a une racine unitaire"], bonne: 1, explication: "Violation de l'hypothèse H4." },
      { q: "Un DW proche de 2 indique :", choix: ["Autocorrélation positive", "Absence d'autocorrélation", "Autocorrélation négative", "Hétéroscédasticité"], bonne: 1, explication: "DW ≈ 2(1 − ρ̂) avec ρ̂ ≈ 0." },
      { q: "DW = 1 donne une estimation de ρ proche de :", choix: ["0", "0,5", "1", "−0,5"], bonne: 1, explication: "ρ̂ ≈ 1 − DW/2." },
      { q: "Un remède classique à l'hétéroscédasticité est :", choix: ["Les moindres carrés pondérés", "La différenciation", "Le test ADF", "L'ajout de dummies"], bonne: 0, explication: "Ou les écarts-types robustes de White." },
      { q: "Le test de Durbin-Watson est invalide lorsque :", choix: ["n > 30", "Une variable endogène retardée figure parmi les régresseurs", "Il y a une constante", "R² > 0,5"], bonne: 1, explication: "On utilise alors le h de Durbin." },
    ],
  },

  8: {
    titre: "Introduction aux séries temporelles",
    resume: md`
## L'essentiel — Séries temporelles

- Composantes : **tendance**, **saisonnalité**, **cycle**, **aléa** ; modèle additif ou **multiplicatif** (si l'amplitude saisonnière croît avec le niveau).
- **Stationnarité** : espérance, variance et autocovariances indépendantes du temps.
- **Régression fallacieuse** entre séries non stationnaires : $R^2$ élevé, $t$ significatifs, relation vide ; alerte si $R^2 > DW$.
- **Dickey-Fuller** : $H_0$ racine unitaire (non stationnaire) ; valeurs critiques **spécifiques** (pas celles de Student) ; **ADF** ajoute des retards.
- Série stationnaire après $d$ différenciations : **intégrée d'ordre $d$**, $I(d)$.
- Deux séries $I(1)$ **cointégrées** : combinaison stationnaire → **modèle à correction d'erreur**.
`,
    exercices: md`
### Exercice 2 — Stationnarité et ordre d'intégration

1. Le test ADF sur la série du PIB en niveau donne une statistique de −1,80 ; la valeur critique à 5 % est −2,89. Conclusion ?
2. Sur la série différenciée $\Delta PIB_t$, la statistique vaut −5,20 (valeur critique −2,89). Conclusion ? Quel est l'ordre d'intégration du PIB ?
3. Les ventes d'un glacier ont des pics d'été de plus en plus hauts à mesure que l'entreprise grandit. Modèle additif ou multiplicatif ?

<details><summary>Voir le corrigé</summary>

**1)** $-1{,}80 > -2{,}89$ : on **ne rejette pas** $H_0$ ; le PIB en niveau est **non stationnaire**.

**2)** $-5{,}20 < -2{,}89$ : on rejette $H_0$ ; la série différenciée est stationnaire. Le PIB est **I(1)**.

**3)** **Multiplicatif** : l'amplitude saisonnière augmente avec le niveau de la série.

</details>
`,
    qcm: [
      { q: "Une série stationnaire a :", choix: ["Une tendance croissante", "Une espérance et une variance constantes dans le temps", "Une racine unitaire", "Une saisonnalité croissante"], bonne: 1, explication: "Ses propriétés ne dépendent pas du temps." },
      { q: "Dans le test de Dickey-Fuller, H₀ est :", choix: ["La série est stationnaire", "La série a une racine unitaire", "Il n'y a pas d'autocorrélation", "Les erreurs sont normales"], bonne: 1, explication: "Rejeter H₀ = conclure à la stationnarité." },
      { q: "Une série stationnaire après une différenciation est :", choix: ["I(0)", "I(1)", "I(2)", "Non intégrée"], bonne: 1, explication: "Intégrée d'ordre 1." },
      { q: "R² = 0,98 et DW = 0,3 entre deux séries en niveau font craindre :", choix: ["Une multicolinéarité", "Une régression fallacieuse", "Une excellente causalité", "Une hétéroscédasticité"], bonne: 1, explication: "Signal d'alerte : R² > DW." },
      { q: "Deux séries I(1) cointégrées s'étudient avec :", choix: ["Un modèle à correction d'erreur", "Une régression en niveau sans précaution", "Un test de Fisher uniquement", "Une variable muette"], bonne: 0, explication: "Il combine long terme et court terme." },
    ],
  },
};
