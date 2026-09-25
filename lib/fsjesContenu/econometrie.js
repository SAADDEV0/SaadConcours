// Économétrie (S5) — compléments par chapitre : description SEO, résumé, exercices 2 et 3, QCM.
const md = String.raw;

const chapitres = {
  1: {
    titre: "Introduction à l'économétrie",
    description: "Introduction à l'économétrie : démarche, données en coupe, séries temporelles et panel, terme d'erreur, formes fonctionnelles et élasticités.",
    resume: md`
## L'essentiel — Introduction à l'économétrie

- Économétrie : méthodes statistiques appliquées aux données économiques pour **mesurer**, **tester**, **prévoir**.
- Démarche : théorie → spécification → données → estimation → validation → utilisation (retour à la spécification si besoin).
- Données **en coupe**, **séries temporelles**, **panel** ; sources : HCP, Bank Al-Maghrib, Office des changes, Banque mondiale.
- Modèle économétrique : $y_i = \beta_0 + \beta_1 x_i + \varepsilon_i$ ; $\varepsilon$ résume les facteurs omis et les erreurs de mesure.
- Paramètre $\beta$ ≠ estimateur $\hat{\beta}$ ≠ estimation (valeur numérique).
- Linéarité dans les **paramètres** ; log-log : **élasticité** ; semi-log : variation de $100\,\beta_1$ % (exactement $e^{\beta_1} - 1$) ; Cobb-Douglas linéarisée.
- Régression ≠ causalité.
`,
    exercices: md`
### Exercice 2 — Linéaire dans les paramètres ?

Indiquez si chaque modèle peut être estimé par les moindres carrés ordinaires, éventuellement après transformation :
1. $y = \beta_0 + \beta_1 x^2 + \varepsilon$
2. $y = A\,x^{\beta} e^{\varepsilon}$
3. $y = \beta_0 + \beta_1^2 x + \varepsilon$
4. $y = \beta_0 + \beta_1 / x + \varepsilon$

<details><summary>Voir le corrigé</summary>

1. **Oui** : on pose $z = x^2$ ; le modèle est linéaire dans les paramètres.
2. **Oui** après passage aux logarithmes : $\ln y = \ln A + \beta \ln x + \varepsilon$.
3. Linéaire en $x$, mais le paramètre apparaît au carré : on peut estimer $\gamma = \beta_1^2$ par les MCO, mais $\beta_1$ n'est identifié qu'au signe près ; le modèle n'est pas linéaire dans $\beta_1$.
4. **Oui** : on pose $z = 1/x$.

</details>

### Exercice 3 — Cobb-Douglas

L'estimation d'une fonction de production industrielle donne : $\ln Q = 1{,}2 + 0{,}35 \ln K + 0{,}70 \ln L$.

1. Interprétez les coefficients.
2. Que se passe-t-il si le capital et le travail augmentent tous deux de 10 % ? Qualifiez les rendements d'échelle.

<details><summary>Voir le corrigé</summary>

**1)** Une hausse de 1 % du capital augmente la production de 0,35 % ; une hausse de 1 % du travail l'augmente de 0,70 %.

**2)** La production augmente d'environ $(0{,}35 + 0{,}70) \times 10\,\% = 10{,}5\,\%$ : la somme des élasticités vaut 1,05 > 1, les rendements d'échelle sont **légèrement croissants** (à confirmer par un test statistique, chapitre 5).

</details>
`,
    qcm: [
      { q: "L'économétrie a pour objectifs principaux de :", choix: ["Rédiger des lois", "Mesurer, tester et prévoir", "Tenir la comptabilité", "Fixer les prix"], bonne: 1, explication: "À partir de données économiques." },
      { q: "Le PIB trimestriel du Maroc de 2000 à 2025 est :", choix: ["Une donnée en coupe", "Une série temporelle", "Un panel", "Une variable qualitative"], bonne: 1, explication: "Un individu observé à plusieurs dates." },
      { q: "Le terme d'erreur du modèle représente :", choix: ["Une erreur de calcul", "Les facteurs non pris en compte et les erreurs de mesure", "La constante", "La pente"], bonne: 1, explication: "Il est aléatoire et inobservable." },
      { q: "Dans un modèle log-log, le coefficient d'une variable explicative est :", choix: ["Une pente en unités", "Une élasticité", "Une probabilité", "Un taux d'intérêt"], bonne: 1, explication: "Variation en % pour 1 % de variation." },
      { q: "ln y = 2 + 0,05 x. Quand x augmente de 1, y augmente d'environ :", choix: ["0,05 unité", "5 %", "0,05 %", "50 %"], bonne: 1, explication: "Modèle semi-logarithmique." },
      { q: "Un modèle estimable par les MCO doit être linéaire :", choix: ["Dans les variables", "Dans les paramètres", "Dans le temps", "Dans les erreurs"], bonne: 1, explication: "Les variables peuvent être transformées." },
      { q: "La fonction Cobb-Douglas devient linéaire après :", choix: ["Une dérivation", "Un passage aux logarithmes", "Une division par x", "Un carré"], bonne: 1, explication: "ln Q = ln A + α ln K + β ln L." },
      { q: "Des données sur 300 entreprises pendant 10 ans forment :", choix: ["Une coupe instantanée", "Un panel", "Une série temporelle simple", "Un échantillon qualitatif"], bonne: 1, explication: "Plusieurs individus à plusieurs dates." },
      { q: "C = 1,44 + 0,64 R. La propension marginale à consommer estimée est :", choix: ["1,44", "0,64", "0,36", "2,08"], bonne: 1, explication: "C'est la pente." },
      { q: "Une forte corrélation entre deux variables prouve :", choix: ["Une causalité", "Une liaison statistique, pas forcément causale", "L'indépendance", "Une erreur de mesure"], bonne: 1, explication: "La causalité exige une justification théorique." },
    ],
  },

  2: {
    titre: "Le modèle de régression linéaire simple",
    description: "Régression linéaire simple : hypothèses, moindres carrés ordinaires, équations normales, Gauss-Markov, résidus, variance des erreurs et écarts-types.",
    resume: md`
## L'essentiel — Régression linéaire simple

- Modèle : $y_i = \beta_0 + \beta_1 x_i + \varepsilon_i$ ; hypothèses : linéarité, $E(\varepsilon) = 0$ et exogénéité, **homoscédasticité**, **absence d'autocorrélation**, variabilité de $x$, normalité (pour les tests).
- **MCO** : minimiser $\sum e_i^2$ ; équations normales $\sum e_i = 0$, $\sum x_i e_i = 0$.
- $\hat{\beta}_1 = S_{xy} / S_{xx}$ ; $\hat{\beta}_0 = \bar{y} - \hat{\beta}_1 \bar{x}$ ; la droite passe par le point moyen.
- Estimateurs **sans biais**, convergents, **BLUE** (Gauss-Markov).
- $V(\hat{\beta}_1) = \sigma^2 / S_{xx}$ ; $V(\hat{\beta}_0) = \sigma^2 (1/n + \bar{x}^2 / S_{xx})$.
- $\hat{\sigma}^2 = SCR / (n - 2)$ ; $SCR = S_{yy} - \hat{\beta}_1 S_{xy}$.
- Résidu $e_i$ (calculé) ≠ erreur $\varepsilon_i$ (inobservable).
`,
    exercices: md`
### Exercice 2 — Une petite régression

| $x_i$ | 1 | 2 | 3 | 4 | 5 |
|---|--:|--:|--:|--:|--:|
| $y_i$ | 3 | 5 | 6 | 8 | 8 |

1. Estimez la droite des MCO.
2. Calculez les résidus, $SCR$, $\hat{\sigma}^2$ et l'écart-type de $\hat{\beta}_1$.

<details><summary>Voir le corrigé</summary>

**1)** $\bar{x} = 3$, $\bar{y} = 6$ ; $S_{xx} = 4 + 1 + 0 + 1 + 4 = 10$ ; $S_{xy} = 6 + 1 + 0 + 2 + 4 = 13$. $\hat{\beta}_1 = \mathbf{1{,}3}$ ; $\hat{\beta}_0 = 6 - 3{,}9 = \mathbf{2{,}1}$.

**2)** $\hat{y}$ : 3,4 ; 4,7 ; 6,0 ; 7,3 ; 8,6. Résidus : − 0,4 ; 0,3 ; 0 ; 0,7 ; − 0,6 (somme nulle). $SCR = 0{,}16 + 0{,}09 + 0 + 0{,}49 + 0{,}36 = \mathbf{1{,}1}$ ; $\hat{\sigma}^2 = 1{,}1 / 3 \approx \mathbf{0{,}367}$ ; $\hat{\sigma}_{\hat{\beta}_1} = \sqrt{0{,}367 / 10} \approx \mathbf{0{,}191}$.

</details>

### Exercice 3 — Changement d'unités

Dans l'exemple du cours, $\hat{y} = 1{,}44 + 0{,}64\,x$ avec $x$ et $y$ en milliers de DH.

1. Que deviennent les coefficients si $y$ est exprimé en DH (et $x$ en milliers de DH) ?
2. Et si les deux variables sont exprimées en DH ?
3. Le coefficient de détermination change-t-il ?

<details><summary>Voir le corrigé</summary>

**1)** Toutes les valeurs de $y$ sont multipliées par 1 000 : $\hat{y} = 1\,440 + 640\,x$ (640 DH de consommation par millier de DH de revenu).

**2)** $\hat{y} = 1\,440 + 0{,}64\,x$ : la pente, sans unité, est inchangée ; la constante est en DH.

**3)** Non : le $R^2$ ne dépend pas des unités de mesure (chapitre 3). Seules l'échelle des coefficients et celle de leurs écarts-types changent ; les statistiques $t$ sont inchangées.

</details>
`,
    qcm: [
      { q: "La méthode des MCO minimise :", choix: ["La somme des résidus", "La somme des carrés des résidus", "La somme des valeurs absolues de y", "Le coefficient de corrélation"], bonne: 1, explication: "D'où le nom de moindres carrés." },
      { q: "L'estimateur MCO de la pente est :", choix: ["Sxy / Syy", "Sxy / Sxx", "Sxx / Sxy", "moyenne de y / moyenne de x"], bonne: 1, explication: "Covariance divisée par la variance de x." },
      { q: "La droite des MCO passe toujours par :", choix: ["L'origine", "Le point moyen", "Le premier point", "Le point de y maximal"], bonne: 1, explication: "Car β0 = moyenne de y − β1 × moyenne de x." },
      { q: "Dans un modèle avec constante, la somme des résidus MCO est :", choix: ["Positive", "Nulle", "Négative", "Égale à SCR"], bonne: 1, explication: "Première équation normale." },
      { q: "L'hypothèse d'homoscédasticité signifie :", choix: ["Erreurs de moyenne nulle", "Même variance des erreurs pour toutes les observations", "Erreurs non corrélées entre elles", "Erreurs normales"], bonne: 1, explication: "V(ε) = σ² constant." },
      { q: "Selon Gauss-Markov, les estimateurs MCO sont :", choix: ["Biaisés mais efficaces", "Les meilleurs estimateurs linéaires sans biais", "Toujours normaux", "Non convergents"], bonne: 1, explication: "BLUE sous les hypothèses classiques." },
      { q: "L'estimateur sans biais de σ² en régression simple est :", choix: ["SCR / n", "SCR / (n − 2)", "SCT / (n − 1)", "SCE / 2"], bonne: 1, explication: "Deux paramètres ont été estimés." },
      { q: "SCR = 1,2 avec n = 8. L'estimation de σ² vaut :", choix: ["0,15", "0,2", "1,2", "0,6"], bonne: 1, explication: "1,2 / 6." },
      { q: "La précision de la pente estimée s'améliore quand :", choix: ["Les x sont très concentrés", "Les x sont étalés", "n diminue", "σ² augmente"], bonne: 1, explication: "V(β1) = σ² / Sxx." },
      { q: "Le résidu ei est :", choix: ["L'erreur théorique", "L'écart entre y observé et y ajusté", "La constante", "La pente"], bonne: 1, explication: "Il est calculé, contrairement à l'erreur." },
    ],
  },

  3: {
    titre: "La qualité de l'ajustement",
    description: "Qualité de l'ajustement : SCT, SCE, SCR, coefficient de détermination R², R² ajusté, tableau d'analyse de la variance, statistique F et analyse des résidus.",
    resume: md`
## L'essentiel — La qualité de l'ajustement

- $SCT = SCE + SCR$ (modèle avec constante) ; en régression simple $SCE = \hat{\beta}_1 S_{xy}$.
- $R^2 = SCE / SCT = 1 - SCR / SCT$ : part de la variance de $y$ expliquée ; en régression simple $R^2 = r^2$.
- Le $R^2$ augmente toujours quand on ajoute une variable ; **$R^2$ ajusté** : $1 - (1 - R^2)(n - 1)/(n - k)$, $k$ paramètres constante comprise.
- Tableau ANOVA : ddl $k - 1$, $n - k$, $n - 1$ ; $F = [SCE/(k - 1)] / [SCR/(n - k)]$.
- Erreur type de la régression $\hat{\sigma} = \sqrt{SCR/(n - k)}$, dans l'unité de $y$.
- Graphiques des résidus : entonnoir (hétéroscédasticité), courbe (forme fonctionnelle), séquences (autocorrélation), valeurs atypiques et points influents.
- Ne pas juger un modèle sur son seul $R^2$ ; ne pas comparer $R^2$ de $y$ et de $\ln y$.
`,
    exercices: md`
### Exercice 2 — À partir des sommes

Sur $n = 12$ observations : $S_{xx} = 200$, $S_{xy} = 160$, $S_{yy} = 180$.

1. Estimez la pente et calculez $SCE$, $SCR$, $R^2$ et $\bar{R}^2$.
2. Construisez le tableau ANOVA et calculez $F$ et $\hat{\sigma}$.

<details><summary>Voir le corrigé</summary>

**1)** $\hat{\beta}_1 = 160 / 200 = \mathbf{0{,}8}$ ; $SCE = 0{,}8 \times 160 = \mathbf{128}$ ; $SCR = 180 - 128 = \mathbf{52}$ ; $R^2 = 128 / 180 \approx \mathbf{0{,}711}$ ; $\bar{R}^2 = 1 - (52/10)/(180/11) = 1 - 5{,}2 / 16{,}364 \approx \mathbf{0{,}682}$.

**2)** Expliquée : 128 (1 ddl, carré moyen 128) ; résiduelle : 52 (10 ddl, carré moyen 5,2) ; totale : 180 (11 ddl). $F = 128 / 5{,}2 \approx \mathbf{24{,}6}$ ; $\hat{\sigma} = \sqrt{5{,}2} \approx \mathbf{2{,}28}$.

</details>

### Exercice 3 — Choisir entre deux modèles

Pour expliquer les ventes d'une entreprise sur 12 trimestres, on compare :
- modèle A : une variable explicative (publicité), $R^2 = 0{,}711$ ;
- modèle B : trois variables explicatives (publicité, prix, nombre de vendeurs), $R^2 = 0{,}74$.

1. Calculez le $R^2$ ajusté de chaque modèle.
2. Quel modèle préférer ? Quels autres critères faut-il examiner ?

<details><summary>Voir le corrigé</summary>

**1)** A ($k = 2$) : $1 - 0{,}289 \times 11/10 \approx \mathbf{0{,}682}$. B ($k = 4$) : $1 - 0{,}26 \times 11/8 = 1 - 0{,}3575 \approx \mathbf{0{,}643}$.

**2)** Le modèle **A** a le meilleur $\bar{R}^2$ : les deux variables supplémentaires de B améliorent à peine l'ajustement au prix de deux degrés de liberté. Il faut aussi examiner la **significativité** des coefficients (tests de Student), leur **signe** (conformité à la théorie), l'analyse des **résidus** et la qualité des **prévisions** hors échantillon.

</details>
`,
    qcm: [
      { q: "L'équation d'analyse de la variance s'écrit :", choix: ["SCR = SCT + SCE", "SCT = SCE + SCR", "SCE = SCT × SCR", "SCT = SCE − SCR"], bonne: 1, explication: "Valable avec une constante." },
      { q: "R² = 0,64 signifie que :", choix: ["64 % des observations sont bien prévues", "64 % de la variance de y est expliquée par le modèle", "La pente vaut 0,64", "Le modèle est faux à 36 %"], bonne: 1, explication: "Proportion de variance expliquée." },
      { q: "En régression simple, si r = − 0,9, R² vaut :", choix: ["− 0,81", "0,81", "0,9", "− 0,9"], bonne: 1, explication: "R² = r²." },
      { q: "Quand on ajoute une variable explicative, le R² :", choix: ["Diminue toujours", "Ne peut pas diminuer", "Reste constant", "Devient négatif"], bonne: 1, explication: "D'où l'intérêt du R² ajusté." },
      { q: "SCT = 100, SCR = 20. R² vaut :", choix: ["0,2", "0,8", "1,25", "80"], bonne: 1, explication: "1 − 20 / 100." },
      { q: "n = 20, k = 3, R² = 0,8. Le R² ajusté vaut environ :", choix: ["0,80", "0,776", "0,82", "0,70"], bonne: 1, explication: "1 − 0,2 × 19 / 17." },
      { q: "Le carré moyen résiduel est égal à :", choix: ["SCR / n", "SCR / (n − k), estimation de σ²", "SCE / (k − 1)", "SCT / (n − 1)"], bonne: 1, explication: "C'est la variance estimée des erreurs." },
      { q: "Des résidus formant un entonnoir signalent :", choix: ["Une autocorrélation", "Une hétéroscédasticité", "Une multicolinéarité", "Un bon modèle"], bonne: 1, explication: "La dispersion varie avec x." },
      { q: "On ne peut pas comparer directement les R² de deux modèles si :", choix: ["Ils ont la même variable expliquée", "L'un explique y et l'autre ln y", "Ils ont le même nombre d'observations", "Ils ont une constante"], bonne: 1, explication: "Les SCT ne sont pas les mêmes." },
      { q: "L'erreur type de la régression s'exprime :", choix: ["Sans unité", "Dans l'unité de y", "Dans l'unité de x", "En pourcentage uniquement"], bonne: 1, explication: "C'est un écart typique entre y et ŷ." },
    ],
  },

  4: {
    titre: "Inférence statistique : tests et intervalles",
    description: "Inférence en régression : test de Student, test unilatéral, intervalle de confiance des coefficients, test de Fisher, p-value et intervalle de prévision.",
    resume: md`
## L'essentiel — Tests et intervalles

- Sous normalité : $t = (\hat{\beta}_j - \beta_j) / \hat{\sigma}_{\hat{\beta}_j} \sim \mathcal{T}(n - k)$.
- **Significativité** : $H_0 : \beta_j = 0$ ; rejet si $|t| > t_{\alpha/2}(n - k)$ ; test d'une valeur $b_0$ ; test **unilatéral** avec $t_\alpha$.
- **IC** : $\hat{\beta}_j \pm t_{\alpha/2}(n - k)\,\hat{\sigma}_{\hat{\beta}_j}$ ; équivalent au test bilatéral.
- **Fisher** global : $F = [SCE/(k - 1)] / [SCR/(n - k)]$ ; en régression simple $F = t^2$.
- **p-value** < $\alpha$ → rejet de $H_0$ ; significativité statistique ≠ importance économique.
- Prévision $\hat{y}_0 = \hat{\beta}_0 + \hat{\beta}_1 x_0$ ; écart-type moyen $\hat{\sigma}\sqrt{1/n + (x_0 - \bar{x})^2/S_{xx}}$ ; individuel : ajouter 1 sous la racine ; intervalles plus larges loin de $\bar{x}$.
- Valeurs utiles : $t_{0,025}(8) = 2{,}306$ ; $t_{0,025}(\infty) = 1{,}96$.
`,
    exercices: md`
### Exercice 2 — Lire une sortie de logiciel

Une régression du chiffre d'affaires ($y$) sur le budget publicitaire ($x$), avec $n = 22$, donne : constante $= 12{,}5$ (écart-type 4,1) ; pente $= 2{,}3$ (écart-type 1,4) ; $R^2 = 0{,}12$. On donne $t_{0,025}(20) = 2{,}086$.

1. Calculez les statistiques $t$ et concluez sur la significativité au seuil de 5 %.
2. Construisez l'intervalle de confiance à 95 % de la pente.
3. Que penser d'un dirigeant qui conclut : « la publicité n'a aucun effet » ?

<details><summary>Voir le corrigé</summary>

**1)** Constante : $12{,}5 / 4{,}1 \approx 3{,}05 > 2{,}086$ : significative. Pente : $2{,}3 / 1{,}4 \approx 1{,}64 < 2{,}086$ : **non significative** à 5 %.

**2)** $2{,}3 \pm 2{,}086 \times 1{,}4 = 2{,}3 \pm 2{,}92$, soit **[− 0,62 ; 5,22]**.

**3)** Ne pas rejeter $H_0$ ne prouve pas l'absence d'effet : l'intervalle est très large (de légèrement négatif à fortement positif). Les données (peu nombreuses, $R^2$ faible) ne permettent pas de conclure ; il faudrait plus d'observations ou d'autres variables explicatives.

</details>

### Exercice 3 — p-values

Un logiciel indique les p-values suivantes pour trois coefficients : 0,002 ; 0,048 ; 0,21.

1. Lesquels sont significatifs à 5 % ? à 1 % ?
2. Expliquez ce que signifie une p-value de 0,21.

<details><summary>Voir le corrigé</summary>

**1)** À 5 % : les deux premiers (0,002 et 0,048 < 0,05). À 1 % : seulement le premier (0,002 < 0,01).

**2)** Si le vrai coefficient était nul, on aurait 21 % de chances d'obtenir une estimation au moins aussi éloignée de zéro : ce n'est pas assez rare pour rejeter $H_0$ ; le coefficient n'est pas significatif aux seuils usuels.

</details>
`,
    qcm: [
      { q: "La statistique t d'un coefficient suit une loi de Student à :", choix: ["n degrés de liberté", "n − k degrés de liberté", "k degrés de liberté", "n − 1 degrés de liberté"], bonne: 1, explication: "k paramètres estimés, constante comprise." },
      { q: "Coefficient 0,8, écart-type 0,2. La statistique t de significativité vaut :", choix: ["0,16", "4", "0,25", "1,6"], bonne: 1, explication: "0,8 / 0,2." },
      { q: "Avec 8 degrés de liberté, on rejette H0 : β = 0 à 5 % (bilatéral) si |t| dépasse :", choix: ["1,860", "2,306", "1,960", "3,355"], bonne: 1, explication: "Valeur de la table de Student." },
      { q: "Si la valeur testée b0 n'appartient pas à l'IC à 95 % :", choix: ["On ne rejette pas H0", "On rejette H0 au seuil de 5 %", "On ne peut rien dire", "Le modèle est faux"], bonne: 1, explication: "Équivalence entre test bilatéral et intervalle." },
      { q: "Une p-value de 0,03 conduit à :", choix: ["Rejeter H0 à 5 % mais pas à 1 %", "Rejeter H0 à 1 %", "Ne jamais rejeter H0", "Accepter H1 à 1 %"], bonne: 0, explication: "0,01 < 0,03 < 0,05." },
      { q: "En régression simple, la statistique F est égale :", choix: ["À t", "Au carré du t de la pente", "À R²", "À 1 / t"], bonne: 1, explication: "Les deux tests sont équivalents." },
      { q: "L'intervalle de prévision d'une valeur individuelle est :", choix: ["Plus étroit que celui de la moyenne", "Plus large que celui de la moyenne", "Identique", "Indépendant de x0"], bonne: 1, explication: "Il intègre l'erreur ε0." },
      { q: "La précision de la prévision diminue quand :", choix: ["x0 est proche de la moyenne", "x0 s'éloigne de la moyenne des x", "n augmente", "σ² diminue"], bonne: 1, explication: "Le terme (x0 − moyenne)² augmente." },
      { q: "Ne pas rejeter H0 : β1 = 0 signifie :", choix: ["Que β1 est exactement nul", "Que les données ne prouvent pas un effet significatif", "Que le modèle est parfait", "Que R² = 1"], bonne: 1, explication: "Absence de preuve n'est pas preuve d'absence." },
      { q: "Pour un grand échantillon, la valeur critique bilatérale à 5 % est proche de :", choix: ["1,645", "1,96", "2,576", "3"], bonne: 1, explication: "La loi de Student tend vers la loi normale." },
    ],
  },

  5: {
    titre: "Le modèle de régression multiple",
    description: "Régression multiple : écriture matricielle, estimateur (X'X)⁻¹X'y, interprétation ceteris paribus, tests de Student et de Fisher, restrictions et indicatrices.",
    resume: md`
## L'essentiel — Régression multiple

- $y = X\beta + \varepsilon$ ; $k$ paramètres (constante comprise) ; pas de colinéarité parfaite ($X'X$ inversible).
- $\hat{\beta} = (X'X)^{-1}X'y$ ; $V(\hat{\beta}) = \sigma^2 (X'X)^{-1}$ ; $\hat{\sigma}^2 = SCR/(n - k)$ ; estimateurs BLUE.
- Deux variables : $D = S_{11}S_{22} - S_{12}^2$ ; $\hat{\beta}_1 = (S_{1y}S_{22} - S_{2y}S_{12})/D$ ; $\hat{\beta}_2 = (S_{2y}S_{11} - S_{1y}S_{12})/D$ ; $V(\hat{\beta}_1) = \sigma^2 S_{22}/D$.
- Interprétation **toutes choses égales par ailleurs**.
- Student par coefficient ; Fisher global ; **restrictions** : $F = [(SCR_c - SCR_{nc})/q] / [SCR_{nc}/(n - k)]$.
- **Indicatrices** : écart moyen par rapport à la modalité de référence ; $m - 1$ indicatrices pour $m$ modalités (piège des indicatrices).
`,
    exercices: md`
### Exercice 2 — Variables indicatrices

Sur 400 salariés, on estime (écarts-types entre parenthèses) :

$$\widehat{\text{salaire}} = 3\,200 + 150\,\text{exp} + 900\,\text{cadre} - 400\,F$$
$$\qquad\qquad (310) \quad\; (20) \qquad\;\; (150) \qquad\; (120)$$

où exp = années d'expérience, cadre = 1 si le salarié est cadre, $F = 1$ pour une femme.

1. Interprétez chaque coefficient.
2. Les coefficients sont-ils significatifs à 5 % (grand échantillon) ?
3. Prévoyez le salaire d'une femme cadre ayant 10 ans d'expérience.

<details><summary>Voir le corrigé</summary>

**1)** Chaque année d'expérience augmente le salaire de 150 DH en moyenne ; être cadre l'augmente de 900 DH ; à expérience et statut égaux, les femmes gagnent en moyenne **400 DH de moins** que les hommes.

**2)** $t$ : $3\,200/310 \approx 10{,}3$ ; $150/20 = 7{,}5$ ; $900/150 = 6$ ; $-400/120 \approx -3{,}33$. Tous dépassent 1,96 en valeur absolue : **significatifs**. L'écart de salaire entre femmes et hommes est significatif, ce qui peut signaler une discrimination (ou des variables omises, comme le secteur).

**3)** $3\,200 + 1\,500 + 900 - 400 = \mathbf{5\,200}$ DH.

</details>

### Exercice 3 — Test des rendements d'échelle constants

On estime une fonction de Cobb-Douglas $\ln Q = \beta_0 + \beta_1 \ln K + \beta_2 \ln L + \varepsilon$ sur 25 entreprises : $SCR = 0{,}84$. En imposant $\beta_1 + \beta_2 = 1$ (rendements d'échelle constants), on obtient $SCR = 0{,}90$. On donne $F_{0,05}(1 ; 22) = 4{,}30$.

1. Calculez la statistique de Fisher.
2. Concluez.

<details><summary>Voir le corrigé</summary>

**1)** $q = 1$, $n - k = 22$ : $F = \dfrac{(0{,}90 - 0{,}84)/1}{0{,}84/22} = \dfrac{0{,}06}{0{,}0382} \approx \mathbf{1{,}57}$.

**2)** $1{,}57 < 4{,}30$ : on ne rejette pas $H_0$ ; les données sont compatibles avec des **rendements d'échelle constants**.

</details>
`,
    qcm: [
      { q: "Dans y = Xβ + ε, la première colonne de X est en général :", choix: ["Une colonne de 0", "Une colonne de 1 (constante)", "La variable y", "Les résidus"], bonne: 1, explication: "Elle permet d'estimer la constante." },
      { q: "L'estimateur des MCO en écriture matricielle est :", choix: ["X'y", "(X'X)⁻¹X'y", "(XX')⁻¹", "X⁻¹y"], bonne: 1, explication: "Solution des équations normales." },
      { q: "Un coefficient de la régression multiple mesure l'effet de sa variable :", choix: ["Sans tenir compte des autres", "Les autres variables étant maintenues constantes", "Au carré", "Sur la constante"], bonne: 1, explication: "Toutes choses égales par ailleurs." },
      { q: "Avec n = 30 et 4 variables explicatives plus une constante, les ddl résiduels sont :", choix: ["26", "25", "29", "30"], bonne: 1, explication: "n − k = 30 − 5." },
      { q: "Le test de Fisher global teste :", choix: ["La nullité de la constante", "La nullité simultanée de tous les coefficients des variables explicatives", "La normalité des erreurs", "L'égalité des variances"], bonne: 1, explication: "Significativité globale du modèle." },
      { q: "SCR contraint 50, SCR non contraint 40, q = 2, n − k = 20. La statistique F vaut :", choix: ["2,5", "0,25", "5", "10"], bonne: 0, explication: "(10 / 2) / (40 / 20)." },
      { q: "Pour une variable qualitative à 4 modalités avec une constante, on introduit :", choix: ["4 indicatrices", "3 indicatrices", "1 indicatrice", "2 indicatrices"], bonne: 1, explication: "La modalité omise sert de référence." },
      { q: "Le coefficient d'une indicatrice mesure :", choix: ["Une élasticité", "L'écart moyen par rapport à la modalité de référence", "La variance", "La pente de x"], bonne: 1, explication: "Toutes choses égales par ailleurs." },
      { q: "La colinéarité parfaite entre variables explicatives empêche :", choix: ["Le calcul du R²", "L'inversion de X'X", "Le calcul des moyennes", "La prévision de y"], bonne: 1, explication: "Les coefficients ne sont pas identifiés." },
      { q: "Pour une seule restriction, la statistique F du test de restriction est égale :", choix: ["À t", "Au carré de la statistique t correspondante", "À R²", "À 1"], bonne: 1, explication: "Les deux tests sont équivalents." },
    ],
  },

  6: {
    titre: "La multicolinéarité et les erreurs de spécification",
    description: "Multicolinéarité (VIF, règle de Klein, remèdes), biais de variable omise, test RESET, erreurs de mesure, endogénéité et test de stabilité de Chow.",
    resume: md`
## L'essentiel — Multicolinéarité et spécification

- **Multicolinéarité** : forte corrélation entre variables explicatives ; estimateurs sans biais mais **variances élevées**, $t$ faibles malgré $R^2$ élevé, instabilité, signes inattendus.
- Détection : corrélations, **règle de Klein** ($r_{ij}^2 > R^2$), $VIF_j = 1/(1 - R_j^2)$ (> 10 préoccupant).
- Remèdes : plus de données, suppression ou combinaison de variables, ratios, différences, information extérieure.
- **Variable omise** : $E(\hat{\alpha}_1) = \beta_1 + \beta_2\,S_{12}/S_{11}$ ; variable inutile : pas de biais, perte de précision.
- **RESET** (forme fonctionnelle) ; erreurs de mesure (biais d'atténuation) ; simultanéité (variables instrumentales).
- **Chow** : $F = \{[SCR - (SCR_1 + SCR_2)]/k\} / \{(SCR_1 + SCR_2)/(n - 2k)\}$ ; rejet = rupture structurelle.
`,
    exercices: md`
### Exercice 2 — Calculs de VIF

Dans un modèle à trois variables explicatives, les régressions auxiliaires donnent : $R_1^2 = 0{,}45$ ; $R_2^2 = 0{,}93$ ; $R_3^2 = 0{,}91$.

1. Calculez les trois VIF.
2. Quelles variables posent problème ? Que proposer ?

<details><summary>Voir le corrigé</summary>

**1)** $VIF_1 = 1/0{,}55 \approx \mathbf{1{,}82}$ ; $VIF_2 = 1/0{,}07 \approx \mathbf{14{,}3}$ ; $VIF_3 = 1/0{,}09 \approx \mathbf{11{,}1}$.

**2)** $x_2$ et $x_3$ (VIF > 10) sont fortement liées entre elles ou aux autres : leurs effets séparés sont mal estimés. On peut les combiner en un indicateur, utiliser un ratio, ajouter des observations ou, si la théorie le justifie, n'en garder qu'une (en surveillant le biais d'omission).

</details>

### Exercice 3 — Signe du biais d'omission

On estime l'effet de l'éducation ($x_1$) sur le salaire ($y$) sans tenir compte de l'aptitude ($x_2$), inobservée. On pense que l'aptitude augmente le salaire ($\beta_2 > 0$) et qu'elle est positivement corrélée à l'éducation.

1. Quel est le sens du biais de la régression simple ?
2. Proposez une solution.

<details><summary>Voir le corrigé</summary>

**1)** Biais $= \beta_2 \times S_{12}/S_{11} > 0$ : la régression simple **surestime** le rendement de l'éducation, car elle lui attribue une partie de l'effet de l'aptitude.

**2)** Ajouter une variable approchant l'aptitude (résultats scolaires antérieurs), utiliser des données de panel ou des variables instrumentales (par exemple la distance au lycée le plus proche).

</details>
`,
    qcm: [
      { q: "La multicolinéarité imparfaite rend les estimateurs MCO :", choix: ["Biaisés", "Sans biais mais peu précis", "Impossibles à calculer", "Toujours non significatifs"], bonne: 1, explication: "Leur variance augmente." },
      { q: "Un symptôme classique de multicolinéarité est :", choix: ["R² faible et t élevés", "R² élevé et t faibles", "Résidus autocorrélés", "Hétéroscédasticité"], bonne: 1, explication: "Le modèle explique bien globalement mais pas variable par variable." },
      { q: "R²j = 0,8 dans la régression auxiliaire. Le VIF vaut :", choix: ["0,8", "5", "1,25", "20"], bonne: 1, explication: "1 / (1 − 0,8)." },
      { q: "Selon la règle de Klein, il y a présomption de multicolinéarité si :", choix: ["r² entre deux explicatives > R² du modèle", "R² > 0,5", "F < 1", "n < 30"], bonne: 0, explication: "Comparaison de la corrélation au pouvoir explicatif." },
      { q: "L'omission d'une variable pertinente corrélée aux autres provoque :", choix: ["Une perte de précision seulement", "Un biais des estimateurs", "Aucun effet", "Une hausse de n"], bonne: 1, explication: "E(α1) = β1 + β2 S12 / S11." },
      { q: "Inclure une variable non pertinente :", choix: ["Biaise les estimateurs", "Réduit la précision sans biais", "Améliore toujours le modèle", "Rend le modèle faux"], bonne: 1, explication: "Perte de degrés de liberté." },
      { q: "Le test RESET de Ramsey détecte :", choix: ["L'autocorrélation", "Une mauvaise forme fonctionnelle", "La normalité", "La saisonnalité"], bonne: 1, explication: "Il ajoute des puissances de ŷ." },
      { q: "Le test de Chow teste :", choix: ["L'homoscédasticité", "La stabilité des coefficients entre deux sous-périodes", "La normalité", "La multicolinéarité"], bonne: 1, explication: "Rupture structurelle." },
      { q: "Une erreur de mesure sur une variable explicative biaise son coefficient :", choix: ["Vers l'infini", "Vers zéro", "Vers 1", "Pas du tout"], bonne: 1, explication: "Biais d'atténuation." },
      { q: "Dans le test de Chow avec n = 40 et k = 3, les ddl du dénominateur sont :", choix: ["37", "34", "40", "6"], bonne: 1, explication: "n − 2k = 40 − 6." },
    ],
  },

  7: {
    titre: "L'hétéroscédasticité et l'autocorrélation",
    description: "Hétéroscédasticité et autocorrélation : conséquences, tests de Goldfeld-Quandt, de White et de Durbin-Watson, écarts-types robustes et corrections.",
    resume: md`
## L'essentiel — Hétéroscédasticité et autocorrélation

- **Hétéroscédasticité** : variance des erreurs non constante (fréquente en coupe) ; **autocorrélation** : erreurs corrélées (fréquente en séries temporelles), souvent $\varepsilon_t = \rho\,\varepsilon_{t-1} + u_t$.
- Conséquences : MCO **sans biais** mais **non efficaces** ; écarts-types et tests **faux** (sous-estimation en cas d'autocorrélation positive).
- Hétéroscédasticité : graphique en entonnoir ; **Goldfeld-Quandt** $F = [SCR_2/(n_2 - k)] / [SCR_1/(n_1 - k)]$ ; **White** $nR^2 \sim \chi^2$ ; corrections : écarts-types robustes, moindres carrés pondérés, logarithmes.
- Autocorrélation : graphique temporel ; **Durbin-Watson** $DW = \sum (e_t - e_{t-1})^2 / \sum e_t^2 \approx 2(1 - \hat{\rho})$ ; comparer à $d_L$ et $d_U$ (zones d'incertitude) ; Breusch-Godfrey si variable retardée.
- Corrections : revoir la spécification, **Cochrane-Orcutt** (quasi-différences), écarts-types de Newey-West.
`,
    exercices: md`
### Exercice 2 — Lire une statistique de Durbin-Watson

Pour $n = 40$ et deux variables explicatives, $d_L = 1{,}39$ et $d_U = 1{,}60$. Concluez pour : 1) $DW = 1{,}05$ ; 2) $DW = 1{,}50$ ; 3) $DW = 2{,}10$ ; 4) $DW = 3{,}20$.

<details><summary>Voir le corrigé</summary>

1. $1{,}05 < 1{,}39$ : **autocorrélation positive** ($\hat{\rho} \approx 0{,}48$).
2. $1{,}39 \le 1{,}50 \le 1{,}60$ : **zone d'incertitude**.
3. $1{,}60 < 2{,}10 < 2{,}40$ : **pas d'autocorrélation**.
4. $3{,}20 > 4 - 1{,}39 = 2{,}61$ : **autocorrélation négative** ($\hat{\rho} \approx -0{,}6$).

</details>

### Exercice 3 — Moindres carrés pondérés

On estime les dépenses de communication $y$ d'entreprises en fonction de leur chiffre d'affaires $x$ : $y_i = \beta_0 + \beta_1 x_i + \varepsilon_i$, et l'on pense que $V(\varepsilon_i) = \sigma^2 x_i^2$.

1. Quelle transformation rend les erreurs homoscédastiques ?
2. Comment s'interprètent les coefficients du modèle transformé ?

<details><summary>Voir le corrigé</summary>

**1)** On divise l'équation par $x_i$ : $\dfrac{y_i}{x_i} = \beta_0 \dfrac{1}{x_i} + \beta_1 + \dfrac{\varepsilon_i}{x_i}$, avec $V(\varepsilon_i / x_i) = \sigma^2$ constant.

**2)** Dans le modèle transformé (part des dépenses de communication dans le chiffre d'affaires), la **constante** estime $\beta_1$ et le coefficient de $1/x_i$ estime $\beta_0$ : les paramètres d'origine sont retrouvés, mais estimés plus efficacement.

</details>
`,
    qcm: [
      { q: "L'hétéroscédasticité signifie que :", choix: ["Les erreurs sont corrélées", "La variance des erreurs n'est pas constante", "Les variables explicatives sont corrélées", "Les erreurs ne sont pas normales"], bonne: 1, explication: "V(εi) varie selon les observations." },
      { q: "En présence d'hétéroscédasticité, les estimateurs MCO sont :", choix: ["Biaisés", "Sans biais mais non efficaces", "Impossibles à calculer", "Toujours significatifs"], bonne: 1, explication: "Ce sont les écarts-types qui sont faux." },
      { q: "Le test de Goldfeld-Quandt compare :", choix: ["Deux moyennes", "Les SCR de deux sous-échantillons", "Deux R²", "Les résidus successifs"], bonne: 1, explication: "Après classement selon la variable suspecte." },
      { q: "Dans le test de White, la statistique n × R² suit une loi :", choix: ["De Student", "Du khi-deux", "Normale", "De Poisson"], bonne: 1, explication: "À autant de ddl que de régresseurs auxiliaires." },
      { q: "Une statistique de Durbin-Watson proche de 2 indique :", choix: ["Une autocorrélation positive", "L'absence d'autocorrélation", "Une autocorrélation négative", "Une hétéroscédasticité"], bonne: 1, explication: "DW ≈ 2 (1 − ρ) avec ρ ≈ 0." },
      { q: "DW = 0,6. L'estimation de ρ est d'environ :", choix: ["0,3", "0,7", "− 0,7", "0,6"], bonne: 1, explication: "1 − 0,6 / 2." },
      { q: "L'autocorrélation des erreurs est surtout fréquente dans :", choix: ["Les données en coupe", "Les séries temporelles", "Les données qualitatives", "Les tableaux de contingence"], bonne: 1, explication: "Les chocs ont des effets durables." },
      { q: "La méthode de Cochrane-Orcutt consiste à :", choix: ["Supprimer la constante", "Estimer le modèle en quasi-différences", "Doubler l'échantillon", "Utiliser des indicatrices"], bonne: 1, explication: "yt − ρ yt−1 sur xt − ρ xt−1." },
      { q: "Les écarts-types de White sont robustes :", choix: ["À la multicolinéarité", "À l'hétéroscédasticité", "Aux variables omises", "À la non-linéarité"], bonne: 1, explication: "Ils restent valables si la variance varie." },
      { q: "Si DW tombe entre dL et dU :", choix: ["Il y a autocorrélation positive", "On ne peut pas conclure", "Il n'y a pas d'autocorrélation", "Le modèle est faux"], bonne: 1, explication: "Zone d'incertitude du test." },
    ],
  },

  8: {
    titre: "Introduction aux séries temporelles",
    description: "Séries temporelles : tendance et saisonnalité, moyennes mobiles, coefficients saisonniers, série CVS, prévision, stationnarité, AR(1) et test de Dickey-Fuller.",
    resume: md`
## L'essentiel — Séries temporelles

- Composantes : **tendance**, cycle, **saisonnalité**, aléa ; schéma **additif** ($y = T + S + \varepsilon$) ou **multiplicatif** ($y = T \times S \times \varepsilon$).
- **Moyenne mobile centrée** d'ordre 4 : $\frac{1}{4}(y_{t-2}/2 + y_{t-1} + y_t + y_{t+1} + y_{t+2}/2)$.
- Coefficients saisonniers : moyenne des écarts $y_t - MM_t$ par trimestre, **corrigés** (somme nulle ; moyenne 1 en multiplicatif) ; série **CVS** $= y_t - S_t$.
- Tendance par MCO sur $t$ ; prévision = tendance prolongée + saisonnalité.
- **Stationnarité** : moyenne, variance, autocovariances constantes ; bruit blanc ; marche aléatoire (chocs permanents, différences premières).
- **AR(1)** $y_t = c + \varphi y_{t-1} + \varepsilon_t$ : stationnaire si $|\varphi| < 1$, moyenne $c/(1 - \varphi)$ ; racine unitaire si $\varphi = 1$.
- **Dickey-Fuller** : valeurs critiques spécifiques (environ − 2,86 à 5 %) ; **régression fallacieuse** entre séries non stationnaires ($R^2 > DW$), cointégration.
`,
    exercices: md`
### Exercice 2 — Le modèle AR(1)

Une série suit $y_t = 4 + 0{,}6\,y_{t-1} + \varepsilon_t$ ; la dernière observation est $y_T = 12$.

1. La série est-elle stationnaire ? Quelle est sa moyenne de long terme ?
2. Prévoyez $y_{T+1}$ et $y_{T+2}$ et commentez.

<details><summary>Voir le corrigé</summary>

**1)** $|0{,}6| < 1$ : **stationnaire** ; moyenne $4 / (1 - 0{,}6) = \mathbf{10}$.

**2)** $\hat{y}_{T+1} = 4 + 0{,}6 \times 12 = \mathbf{11{,}2}$ ; $\hat{y}_{T+2} = 4 + 0{,}6 \times 11{,}2 = \mathbf{10{,}72}$. Les prévisions se rapprochent progressivement de la moyenne de long terme (10) : l'écart initial de 2 est multiplié par 0,6 à chaque période.

</details>

### Exercice 3 — Test de Dickey-Fuller et régression fallacieuse

1. Sur l'indice mensuel des prix, l'estimation de $\Delta y_t = \alpha + \gamma y_{t-1} + u_t$ donne $\hat{\gamma} = -0{,}02$ avec une statistique $t = -1{,}90$. Concluez au seuil de 5 % (valeur critique − 2,86).
2. Un étudiant régresse le PIB marocain sur le nombre d'abonnés à internet (séries annuelles de 2000 à 2024) et obtient $R^2 = 0{,}96$ et $DW = 0{,}35$. Qu'en pensez-vous ?

<details><summary>Voir le corrigé</summary>

**1)** $-1{,}90 > -2{,}86$ : on **ne rejette pas** la racine unitaire ; l'indice des prix n'est pas stationnaire en niveau. On travaille sur ses variations (taux d'inflation), puis on teste leur stationnarité.

**2)** Les deux séries ont une forte tendance ; $R^2 > DW$ : c'est le signal typique d'une **régression fallacieuse**. Le $R^2$ élevé reflète la tendance commune, pas nécessairement une relation causale. Il faut travailler en différences (taux de croissance) ou tester la cointégration, et justifier la relation par la théorie.

</details>
`,
    qcm: [
      { q: "Le pic de ventes de glaces chaque été relève de la composante :", choix: ["Tendance", "Saisonnière", "Aléatoire", "Cyclique"], bonne: 1, explication: "Elle se répète chaque année." },
      { q: "Dans un schéma multiplicatif, l'amplitude saisonnière :", choix: ["Est constante", "Augmente avec le niveau de la série", "Est nulle", "Diminue toujours"], bonne: 1, explication: "Les coefficients sont des rapports." },
      { q: "Une moyenne mobile d'ordre 4 sur données trimestrielles doit être :", choix: ["Non centrée", "Centrée", "Pondérée par t", "Logarithmique"], bonne: 1, explication: "L'ordre est pair." },
      { q: "En schéma additif, les coefficients saisonniers corrigés ont une somme :", choix: ["Égale à 4", "Nulle", "Égale à 1", "Positive"], bonne: 1, explication: "On retranche la moyenne des coefficients bruts." },
      { q: "La série CVS en schéma additif s'obtient par :", choix: ["y × S", "y − S", "y + S", "y / T"], bonne: 1, explication: "On retire la composante saisonnière." },
      { q: "Le modèle yt = 2 + 0,5 yt−1 + εt a pour moyenne de long terme :", choix: ["2", "4", "1", "0,5"], bonne: 1, explication: "2 / (1 − 0,5)." },
      { q: "Une marche aléatoire devient stationnaire après :", choix: ["Un passage au carré", "Une différenciation première", "Une multiplication par t", "Une moyenne mobile d'ordre 2"], bonne: 1, explication: "Δyt = εt est un bruit blanc." },
      { q: "Dans le test de Dickey-Fuller, l'hypothèse nulle est :", choix: ["La stationnarité", "La présence d'une racine unitaire", "L'homoscédasticité", "L'absence de tendance"], bonne: 1, explication: "γ = 0." },
      { q: "Les valeurs critiques du test de Dickey-Fuller sont :", choix: ["Celles de Student", "Des valeurs spécifiques, plus élevées en valeur absolue", "Celles du khi-deux", "Égales à 1,96"], bonne: 1, explication: "La loi n'est pas celle de Student." },
      { q: "Un signal de régression fallacieuse est :", choix: ["R² faible et DW proche de 2", "R² élevé et DW très faible", "Des t non significatifs", "Des résidus normaux"], bonne: 1, explication: "Règle pratique R² > DW." },
    ],
  },
};

export default chapitres;
