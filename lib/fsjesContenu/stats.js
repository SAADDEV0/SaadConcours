// Statistiques et Probabilités (S2) — compléments par chapitre : description SEO, résumé, exercices 2 et 3, QCM.
const md = String.raw;

const chapitres = {
  1: {
    titre: "Vocabulaire et tableaux statistiques",
    description: "Population, individu, caractère qualitatif ou quantitatif, effectifs, fréquences, cumuls, classes, densité et graphiques statistiques, exercices corrigés.",
    resume: md`
## L'essentiel — Vocabulaire et tableaux statistiques

- **Population**, **individu**, **échantillon**, **caractère**, **modalité** ; recensement (RGPH du HCP) ou enquête par sondage.
- Caractère **qualitatif** (nominal ou ordinal) ou **quantitatif** (discret ou continu).
- $f_i = n_i / N$ ; $\sum n_i = N$ ; $\sum f_i = 1$ ; cumuls **croissants** (au plus) et **décroissants** (au moins).
- Classes $[e_{i-1} ; e_i[$ : amplitude $a_i$, centre $c_i$, **densité** $d_i = n_i / a_i$ ; répartition supposée uniforme dans la classe (interpolation linéaire).
- Graphiques : secteurs (angle $= 360° \times f_i$) ou tuyaux d'orgue (qualitatif), bâtons (discret), **histogramme en densités** (continu à amplitudes inégales), polygone des fréquences cumulées.
`,
    exercices: md`
### Exercice 2 — Caractères et graphiques

Pour chaque caractère, précisez sa nature et le graphique adapté :
1. La région de résidence des étudiants d'une faculté.
2. Le nombre de voitures par ménage.
3. Le chiffre d'affaires annuel des PME d'une région.
4. La mention obtenue au baccalauréat.
5. La durée (en minutes) du trajet domicile-faculté.

<details><summary>Voir le corrigé</summary>

1. Qualitatif **nominal** : diagramme circulaire ou en tuyaux d'orgue.
2. Quantitatif **discret** : diagramme en bâtons.
3. Quantitatif **continu** : histogramme (en densités si les classes sont inégales).
4. Qualitatif **ordinal** : tuyaux d'orgue dans l'ordre des mentions.
5. Quantitatif **continu** : histogramme et polygone des fréquences cumulées.

</details>

### Exercice 3 — Densités et effectifs corrigés

L'âge des 400 clients d'une agence bancaire se répartit ainsi : [18 ; 25[ : 56 ; [25 ; 35[ : 120 ; [35 ; 45[ : 100 ; [45 ; 65[ : 104 ; [65 ; 80[ : 20.

1. Calculez les densités (clients par année d'âge).
2. Calculez les effectifs corrigés pour une amplitude de référence de 10 ans.
3. Quelle tranche est la plus représentée relativement à son amplitude ?

<details><summary>Voir le corrigé</summary>

| Classe | $n_i$ | $a_i$ | Densité | Effectif corrigé (10 ans) |
|---|---:|---:|---:|---:|
| [18 ; 25[ | 56 | 7 | 8 | 80 |
| [25 ; 35[ | 120 | 10 | 12 | 120 |
| [35 ; 45[ | 100 | 10 | 10 | 100 |
| [45 ; 65[ | 104 | 20 | 5,2 | 52 |
| [65 ; 80[ | 20 | 15 | 1,33 | 13,3 |

**3)** La classe **[25 ; 35[** (12 clients par année d'âge). La classe [45 ; 65[ a un effectif élevé (104) mais s'étend sur 20 ans : sa densité n'est que de 5,2.

</details>
`,
    qcm: [
      { q: "Le secteur d'activité d'une entreprise est un caractère :", choix: ["Quantitatif discret", "Quantitatif continu", "Qualitatif nominal", "Qualitatif ordinal"], bonne: 2, explication: "Ses modalités ne sont pas ordonnées." },
      { q: "Le degré de satisfaction (faible, moyen, élevé) est un caractère :", choix: ["Qualitatif ordinal", "Qualitatif nominal", "Quantitatif discret", "Quantitatif continu"], bonne: 0, explication: "Les modalités sont ordonnées." },
      { q: "Une modalité d'effectif 15 dans une population de 60 a une fréquence de :", choix: ["15 %", "25 %", "4 %", "40 %"], bonne: 1, explication: "15 / 60 = 0,25." },
      { q: "Le centre de la classe [20 ; 30[ est :", choix: ["20", "25", "30", "10"], bonne: 1, explication: "(20 + 30) / 2 = 25." },
      { q: "Quand les amplitudes sont inégales, l'histogramme utilise en ordonnée :", choix: ["Les effectifs", "Les densités", "Les fréquences cumulées", "Les centres"], bonne: 1, explication: "L'aire doit rester proportionnelle à l'effectif." },
      { q: "Un salaire de 5 000 DH appartient à la classe :", choix: ["[4 000 ; 5 000[", "[5 000 ; 6 000[", "Aux deux", "À aucune"], bonne: 1, explication: "La borne supérieure est exclue." },
      { q: "Dans un diagramme circulaire, une modalité de fréquence 25 % a un angle de :", choix: ["25°", "90°", "45°", "180°"], bonne: 1, explication: "360 × 0,25 = 90°." },
      { q: "Le recensement général de la population au Maroc est réalisé par :", choix: ["Bank Al-Maghrib", "Le HCP", "Le ministère de l'Intérieur seul", "L'ANAPEC"], bonne: 1, explication: "Le dernier RGPH date de 2024." },
      { q: "L'effectif cumulé décroissant d'une modalité indique le nombre d'individus :", choix: ["Au plus égal à cette modalité", "Au moins égal à cette modalité", "Égal à cette modalité", "Hors de la population"], bonne: 1, explication: "On cumule depuis les plus grandes valeurs." },
      { q: "Classe [6 000 ; 8 000[ de 40 individus. Combien sont estimés sous 6 500 ?", choix: ["20", "10", "30", "5"], bonne: 1, explication: "Répartition uniforme : 40 × 500 / 2 000 = 10." },
    ],
  },

  2: {
    titre: "Les caractéristiques de tendance centrale",
    description: "Mode, médiane, moyenne arithmétique, géométrique et harmonique, quartiles et déciles : formules, interpolation linéaire et exercices corrigés.",
    resume: md`
## L'essentiel — Tendance centrale

- **Mode** : modalité la plus fréquente ; en classes, classe de plus forte **densité**, puis $M_o = e_{i-1} + a_i \, \Delta_1 / (\Delta_1 + \Delta_2)$.
- **Médiane** : partage l'effectif en deux ; en classes, $M_e = e_{i-1} + a_i \, (N/2 - N_{i-1}) / n_i$ ; peu sensible aux valeurs extrêmes.
- **Moyenne** : $\bar{x} = \sum n_i x_i / N$ (centres des classes) ; linéaire ; $\sum n_i (x_i - \bar{x}) = 0$ ; moyenne de groupes pondérée par les effectifs.
- **Géométrique** pour les taux de croissance ; **harmonique** pour les vitesses et les prix moyens à dépense fixe ; $H \le G \le \bar{x} \le Q$.
- **Quartiles, déciles** : même formule que la médiane avec $N/4$, $3N/4$, $N/10$… ; rapport interdécile $D_9 / D_1$.
- Symétrie : $M_o = M_e = \bar{x}$ ; étalement à droite (salaires) : $M_o < M_e < \bar{x}$.
`,
    exercices: md`
### Exercice 2 — Série discrète de notes

Les notes de 20 étudiants à un contrôle sont :

| Note | 6 | 8 | 10 | 12 | 14 | 16 |
|---|--:|--:|--:|--:|--:|--:|
| Effectif | 2 | 3 | 5 | 6 | 3 | 1 |

1. Déterminez le mode et la médiane.
2. Calculez la moyenne.
3. Le professeur ajoute 1 point à toutes les notes. Que deviennent les trois caractéristiques ?

<details><summary>Voir le corrigé</summary>

**1)** Mode : **12** (6 étudiants). Médiane : $N = 20$ est pair ; les cumuls sont 2, 5, 10, 16, 19, 20 ; la 10ᵉ note vaut 10 et la 11ᵉ vaut 12 : $M_e = (10 + 12)/2 = \mathbf{11}$.

**2)** $\bar{x} = (12 + 24 + 50 + 72 + 42 + 16) / 20 = 216 / 20 = \mathbf{10{,}8}$.

**3)** Tout se décale de 1 point : mode 13, médiane 12, moyenne 11,8 (linéarité).

</details>

### Exercice 3 — Choisir la bonne moyenne

1. Un commerçant de Meknès achète pour 10 000 DH d'huile d'olive à 50 DH le litre en janvier, puis pour 10 000 DH à 40 DH le litre en février. Quel est le prix moyen du litre ?
2. Une population augmente de 1,2 %, puis de 1,0 %, puis de 0,8 %. Quel est le taux de croissance annuel moyen ?

<details><summary>Voir le corrigé</summary>

**1)** Les dépenses étant égales, on utilise la moyenne **harmonique** : $2 / (1/50 + 1/40) \approx \mathbf{44{,}44}$ DH. Vérification : 200 litres + 250 litres = 450 litres pour 20 000 DH, soit $20\,000 / 450 \approx 44{,}44$ DH (et non 45 DH).

**2)** Moyenne **géométrique** des coefficients : $\sqrt[3]{1{,}012 \times 1{,}010 \times 1{,}008} - 1 \approx \mathbf{1{,}00\,\%}$ par an.

</details>
`,
    qcm: [
      { q: "La valeur qui partage une série ordonnée en deux effectifs égaux est :", choix: ["Le mode", "La médiane", "La moyenne", "L'étendue"], bonne: 1, explication: "50 % des individus de chaque côté." },
      { q: "En classes d'amplitudes inégales, la classe modale est celle qui a :", choix: ["Le plus grand effectif", "La plus forte densité", "La plus grande amplitude", "Le plus grand centre"], bonne: 1, explication: "Il faut neutraliser l'effet de l'amplitude." },
      { q: "Pour décrire des revenus très inégaux, on préfère :", choix: ["La moyenne", "La médiane", "Le maximum", "L'étendue"], bonne: 1, explication: "Elle est peu sensible aux valeurs extrêmes." },
      { q: "Pour un taux de croissance annuel moyen, on utilise la moyenne :", choix: ["Arithmétique", "Géométrique", "Harmonique", "Quadratique"], bonne: 1, explication: "Les taux se composent de façon multiplicative." },
      { q: "Groupe A : 30 étudiants, moyenne 12 ; groupe B : 10 étudiants, moyenne 8. La moyenne générale vaut :", choix: ["10", "11", "12", "9"], bonne: 1, explication: "(360 + 80) / 40 = 11." },
      { q: "Si tous les salaires augmentent de 10 %, la moyenne :", choix: ["Reste identique", "Augmente de 10 %", "Augmente de 10 DH", "Double"], bonne: 1, explication: "Linéarité de la moyenne." },
      { q: "Pour une distribution étalée à droite, on a en général :", choix: ["Moyenne < médiane < mode", "Mode < médiane < moyenne", "Mode = moyenne", "Médiane > moyenne"], bonne: 1, explication: "Les grandes valeurs tirent la moyenne vers le haut." },
      { q: "N = 200 ; cumul 80 avant la classe [5 000 ; 6 000[ d'effectif 60. La médiane vaut environ :", choix: ["5 000", "5 333", "5 500", "5 667"], bonne: 1, explication: "5 000 + 1 000 × 20 / 60." },
      { q: "Le premier quartile Q1 est la valeur telle que :", choix: ["25 % des individus ont une valeur inférieure", "25 % ont une valeur supérieure", "10 % ont une valeur inférieure", "50 % ont une valeur inférieure"], bonne: 0, explication: "Il se calcule au rang N / 4." },
      { q: "Aller à 60 km/h, retour à 90 km/h sur la même distance. La vitesse moyenne est :", choix: ["75 km/h", "72 km/h", "70 km/h", "80 km/h"], bonne: 1, explication: "Moyenne harmonique : 2 / (1/60 + 1/90)." },
    ],
  },

  3: {
    titre: "Les caractéristiques de dispersion et de forme",
    description: "Étendue, intervalle interquartile, variance, écart-type, coefficient de variation, asymétrie, courbe de Lorenz et indice de Gini, exercices corrigés.",
    resume: md`
## L'essentiel — Dispersion, forme, concentration

- **Étendue** $x_{max} - x_{min}$ ; **intervalle interquartile** $Q_3 - Q_1$ ; valeurs atypiques hors de $[Q_1 - 1{,}5\,IQ \;;\; Q_3 + 1{,}5\,IQ]$ (boîte à moustaches).
- **Variance** (Koenig) : $V = \sum n_i x_i^2 / N - \bar{x}^2$ ; $\sigma = \sqrt{V}$ ; $V(a x + b) = a^2 V(x)$.
- Variance totale = variance intra-groupes + variance inter-groupes.
- **Coefficient de variation** $CV = \sigma / \bar{x}$ : compare des séries de niveaux différents.
- Asymétrie : Pearson $(\bar{x} - M_o)/\sigma$, Yule $(Q_3 + Q_1 - 2M_e)/(Q_3 - Q_1)$, Fisher $\mu_3 / \sigma^3$ ; aplatissement $\beta_2 = \mu_4/\sigma^4$ (3 pour la loi normale).
- **Lorenz** : points $(F_i, Q_i)$ avec $Q_i$ = part cumulée de la **masse** ; **Gini** $G = 1 - \sum (F_i - F_{i-1})(Q_i + Q_{i-1})$ ; **médiale** : partage la masse en deux.
`,
    exercices: md`
### Exercice 2 — Variance d'une petite série

Les ventes quotidiennes (en milliers de DH) d'une boutique sur 5 jours sont : 8, 10, 12, 14, 16.

1. Calculez la moyenne, la variance et l'écart-type.
2. Le chiffre d'affaires est converti en DH puis on ajoute une commission fixe de 500 DH par jour. Donnez la moyenne et l'écart-type de la nouvelle série sans la recalculer.
3. Une seconde boutique a une moyenne de 40 et un écart-type de 5. Laquelle a les ventes les plus irrégulières ?

<details><summary>Voir le corrigé</summary>

**1)** $\bar{x} = 60 / 5 = \mathbf{12}$ ; $\sum x_i^2 = 64 + 100 + 144 + 196 + 256 = 760$ ; $V = 760 / 5 - 144 = \mathbf{8}$ ; $\sigma \approx \mathbf{2{,}83}$ milliers de DH.

**2)** $y = 1\,000\,x + 500$ : $\bar{y} = \mathbf{12\,500}$ DH et $\sigma_y = 1\,000 \times 2{,}83 \approx \mathbf{2\,828}$ DH (la constante n'agit pas sur la dispersion).

**3)** $CV_1 = 2{,}83 / 12 \approx 23{,}6\,\%$ ; $CV_2 = 5 / 40 = 12{,}5\,\%$ : la **première** boutique a des ventes plus irrégulières, bien que son écart-type soit plus faible.

</details>

### Exercice 3 — Concentration du chiffre d'affaires

Dans un secteur de 100 entreprises : 50 réalisent chacune 2 MDH de chiffre d'affaires, 30 réalisent 10 MDH, 15 réalisent 40 MDH et 5 réalisent 200 MDH.

1. Calculez la masse totale et construisez le tableau de Lorenz.
2. Calculez l'indice de Gini et interprétez.

<details><summary>Voir le corrigé</summary>

**1)** Masses : 100, 300, 600 et 1 000 MDH ; total **2 000 MDH**.

| Groupe | $F_i$ | $Q_i$ | $(F_i - F_{i-1})(Q_i + Q_{i-1})$ |
|---|---:|---:|---:|
| Petites | 0,50 | 0,05 | 0,025 |
| Moyennes | 0,80 | 0,20 | 0,075 |
| Grandes | 0,95 | 0,50 | 0,105 |
| Très grandes | 1,00 | 1,00 | 0,075 |
| **Total** | | | **0,280** |

**2)** $G = 1 - 0{,}28 = \mathbf{0{,}72}$ : **forte concentration**. La moitié des entreprises ne réalise que 5 % du chiffre d'affaires, alors que les 5 % les plus grandes en réalisent 50 %.

</details>
`,
    qcm: [
      { q: "La formule de Koenig donne la variance comme :", choix: ["Moyenne des écarts", "Moyenne des carrés moins carré de la moyenne", "Carré de l'écart-type moyen", "Étendue au carré"], bonne: 1, explication: "V = moyenne des x² − (moyenne)²." },
      { q: "L'écart-type s'exprime :", choix: ["Sans unité", "Dans l'unité des données", "Dans l'unité au carré", "En pourcentage"], bonne: 1, explication: "C'est la racine carrée de la variance." },
      { q: "Si l'on ajoute 100 DH à tous les salaires, l'écart-type :", choix: ["Augmente de 100", "Ne change pas", "Double", "Diminue"], bonne: 1, explication: "Une translation ne modifie pas la dispersion." },
      { q: "Si l'on multiplie toutes les valeurs par 3, la variance est multipliée par :", choix: ["3", "9", "1", "6"], bonne: 1, explication: "V(ax) = a² V(x)." },
      { q: "Pour comparer la dispersion de séries de niveaux différents, on utilise :", choix: ["L'écart-type", "Le coefficient de variation", "L'étendue", "La variance"], bonne: 1, explication: "Il est sans unité." },
      { q: "Moyenne 50, écart-type 10. Le coefficient de variation vaut :", choix: ["5 %", "20 %", "500 %", "10 %"], bonne: 1, explication: "10 / 50 = 20 %." },
      { q: "Un coefficient d'asymétrie de Yule positif indique une distribution :", choix: ["Symétrique", "Étalée à droite", "Étalée à gauche", "Bimodale"], bonne: 1, explication: "La queue de distribution est du côté des grandes valeurs." },
      { q: "Q1 = 20, Q3 = 50. Au-delà de quelle valeur une observation est-elle atypique ?", choix: ["80", "95", "65", "75"], bonne: 1, explication: "50 + 1,5 × 30 = 95." },
      { q: "Un indice de Gini égal à 0 signifie :", choix: ["Une concentration maximale", "Une égalité parfaite", "Une distribution normale", "Une erreur de calcul"], bonne: 1, explication: "La courbe de Lorenz est la diagonale." },
      { q: "La médiale partage en deux parts égales :", choix: ["Les individus", "La masse du caractère", "Les classes", "L'étendue"], bonne: 1, explication: "La médiane partage les individus." },
    ],
  },

  4: {
    titre: "Les indices statistiques",
    description: "Indices élémentaires et synthétiques : Laspeyres, Paasche, Fisher, indice de valeur, changement de base, TCAM et déflation, avec exercices corrigés.",
    resume: md`
## L'essentiel — Les indices

- **Indice élémentaire** : $I_{t/0} = x_t / x_0 \times 100$ ; une différence d'indices s'exprime en **points**.
- **Réversibilité** $I_{0/t} = 100^2 / I_{t/0}$ ; **circularité** $I_{t/0} = I_{t/t-1} \times I_{t-1/0} / 100$.
- **Changement de base** : $I_{t/b} = I_{t/0} / I_{b/0} \times 100$ ; raccordement par une année commune.
- **Laspeyres** $L_p = \sum p_t q_0 / \sum p_0 q_0$ (pondérations de base, moyenne pondérée des indices élémentaires) ; **Paasche** $P_p = \sum p_t q_t / \sum p_0 q_t$ ; **Fisher** $\sqrt{L_p P_p}$.
- En général $L_p \ge P_p$ (effet de substitution).
- **Valeur** : $V = L_p \times P_q / 100 = P_p \times L_q / 100$.
- **TCAM** $= (V_n / V_0)^{1/n} - 1$ ; doublement en environ $70 / t$ ans.
- **Déflater** : valeur réelle = valeur nominale / indice des prix × 100.
`,
    exercices: md`
### Exercice 2 — Raccorder deux séries d'indices

Un indice des prix (valeurs fictives) est publié en base 100 en 2017 jusqu'en 2020 : 2018 : 101,9 ; 2019 : 102,1 ; 2020 : 102,8. Un nouvel indice, base 100 en 2020, donne ensuite : 2021 : 101,4 ; 2022 : 108,1.

1. Exprimez les indices de 2021 et 2022 en base 100 en 2017.
2. Calculez l'inflation de 2022.
3. Exprimez l'indice de 2019 en base 100 en 2020.

<details><summary>Voir le corrigé</summary>

**1)** Coefficient de raccordement : 1,028. 2021 : $101{,}4 \times 1{,}028 \approx \mathbf{104{,}24}$ ; 2022 : $108{,}1 \times 1{,}028 \approx \mathbf{111{,}13}$.

**2)** $108{,}1 / 101{,}4 - 1 \approx \mathbf{6{,}61\,\%}$ (le même résultat quelle que soit la base).

**3)** $102{,}1 / 102{,}8 \times 100 \approx \mathbf{99{,}32}$.

</details>

### Exercice 3 — Salaire nominal et salaire réel

Un salaire mensuel passe de 5 000 DH en 2020 à 6 100 DH en 2025 ; l'indice des prix passe de 100 à 118 sur la même période.

1. Calculez le salaire de 2025 en DH de 2020 et l'évolution du pouvoir d'achat.
2. Calculez le TCAM du salaire nominal, du salaire réel et des prix.

<details><summary>Voir le corrigé</summary>

**1)** $6\,100 / 1{,}18 \approx \mathbf{5\,169{,}49}$ DH de 2020 : le pouvoir d'achat augmente de **3,39 %** seulement en cinq ans, contre 22 % pour le salaire nominal.

**2)** Salaire nominal : $(6\,100 / 5\,000)^{1/5} - 1 \approx \mathbf{4{,}06\,\%}$ ; prix : $1{,}18^{1/5} - 1 \approx \mathbf{3{,}37\,\%}$ ; salaire réel : $(5\,169{,}49 / 5\,000)^{1/5} - 1 \approx \mathbf{0{,}67\,\%}$ par an. On vérifie : $1{,}0406 / 1{,}0337 \approx 1{,}0067$.

</details>
`,
    qcm: [
      { q: "Un prix passe de 40 à 50 DH. L'indice élémentaire (base 100 au départ) vaut :", choix: ["80", "125", "110", "150"], bonne: 1, explication: "50 / 40 × 100." },
      { q: "Si I(1/0) = 125, alors I(0/1) vaut :", choix: ["75", "80", "125", "100"], bonne: 1, explication: "Réversibilité : 10 000 / 125." },
      { q: "I(2/1) = 110 et I(1/0) = 105. I(2/0) vaut :", choix: ["115", "115,5", "215", "104,5"], bonne: 1, explication: "Circularité : 110 × 105 / 100." },
      { q: "L'indice de Laspeyres des prix est pondéré par :", choix: ["Les quantités de la période courante", "Les quantités de la période de base", "Les prix courants", "Aucune pondération"], bonne: 1, explication: "Paasche utilise les quantités courantes." },
      { q: "L'indice de Fisher est :", choix: ["La moyenne arithmétique de Laspeyres et Paasche", "La moyenne géométrique de Laspeyres et Paasche", "Le produit des deux", "Leur différence"], bonne: 1, explication: "F = racine de L × P." },
      { q: "En général, en présence d'effets de substitution :", choix: ["Laspeyres < Paasche", "Laspeyres ≥ Paasche", "Laspeyres = Paasche", "Paasche = 100"], bonne: 1, explication: "Les consommateurs achètent moins les produits devenus chers." },
      { q: "Indice de valeur 110 et Laspeyres des prix 105. Le Paasche des quantités vaut environ :", choix: ["115,5", "104,76", "5", "95,2"], bonne: 1, explication: "V = Lp × Pq / 100, donc Pq = 110 / 1,05." },
      { q: "Une grandeur passe de 100 à 121 en 2 ans. Le TCAM vaut :", choix: ["10,5 %", "10 %", "21 %", "11 %"], bonne: 1, explication: "Racine carrée de 1,21 = 1,10." },
      { q: "Un indice passe de 110 à 121. La hausse est de :", choix: ["11 % et 11 points", "10 % et 11 points", "11 % et 10 points", "10 % et 10 points"], bonne: 1, explication: "121 / 110 = 1,10 ; différence de 11 points." },
      { q: "Pour obtenir une série en volume à partir d'une série en valeur, on :", choix: ["Multiplie par l'indice des prix", "Divise par l'indice des prix", "Ajoute l'inflation", "Calcule le TCAM"], bonne: 1, explication: "C'est la déflation d'une série." },
    ],
  },

  5: {
    titre: "La statistique bivariée : corrélation et régression",
    description: "Tableau de contingence, covariance, coefficient de corrélation, droite des moindres carrés, R² et prévision, ajustement exponentiel, exercices corrigés.",
    resume: md`
## L'essentiel — Corrélation et régression

- **Tableau de contingence** : distributions marginales et conditionnelles ; indépendance si $n_{ij} = n_{i\cdot}\,n_{\cdot j} / N$.
- **Covariance** : $cov(x, y) = \sum x_i y_i / n - \bar{x}\,\bar{y}$ (sens de la liaison).
- **Corrélation** : $r = cov / (\sigma_x \sigma_y)$, entre − 1 et 1 ; corrélation n'est pas causalité ; $r \approx 0$ n'exclut pas une liaison non linéaire.
- **Moindres carrés** : $a = cov(x, y) / V(x)$, $b = \bar{y} - a\,\bar{x}$ ; la droite passe par le point moyen ; somme des résidus nulle.
- $SCT = SCE + SCR$ ; $R^2 = SCE / SCT = r^2$.
- Prévision $\hat{y}_0 = a\,x_0 + b$ ; prudence en cas d'**extrapolation**.
- Ajustement exponentiel : régression de $\ln y$ sur $x$.
`,
    exercices: md`
### Exercice 2 — Prix et quantité demandée

Un commerçant observe la quantité vendue $y$ (unités par jour) d'un produit selon son prix $x$ (DH) :

| $x_i$ | 10 | 12 | 14 | 16 | 18 |
|---|--:|--:|--:|--:|--:|
| $y_i$ | 50 | 46 | 41 | 38 | 35 |

1. Calculez $cov(x, y)$ et $r$.
2. Déterminez la droite de régression et interprétez la pente.
3. Quelle quantité peut-on prévoir pour un prix de 15 DH ?

<details><summary>Voir le corrigé</summary>

**1)** $\bar{x} = 14$, $\bar{y} = 42$ ; $\sum x_i^2 = 1\,020$, $\sum y_i^2 = 8\,966$, $\sum x_i y_i = 2\,864$. $V(x) = 204 - 196 = 8$ ; $V(y) = 1\,793{,}2 - 1\,764 = 29{,}2$ ; $cov = 572{,}8 - 588 = \mathbf{-15{,}2}$. $r = -15{,}2 / \sqrt{8 \times 29{,}2} \approx \mathbf{-0{,}995}$ : liaison **négative** très forte (loi de la demande).

**2)** $a = -15{,}2 / 8 = \mathbf{-1{,}9}$ ; $b = 42 + 1{,}9 \times 14 = \mathbf{68{,}6}$ : $\hat{y} = -1{,}9\,x + 68{,}6$. Chaque dirham de hausse du prix fait perdre en moyenne 1,9 unité vendue par jour.

**3)** $\hat{y} = -1{,}9 \times 15 + 68{,}6 = \mathbf{40{,}1}$ unités (interpolation : 15 DH est dans l'intervalle observé).

</details>

### Exercice 3 — Ajustement exponentiel

Le chiffre d'affaires d'une jeune entreprise (milliers de DH) a évolué ainsi : année 1 : 100 ; année 2 : 121 ; année 3 : 145 ; année 4 : 176 ; année 5 : 212.

1. Pourquoi un ajustement exponentiel est-il adapté ?
2. On pose $z = \ln y$. La régression de $z$ sur l'année $t$ donne $z = 0{,}1878\,t + 4{,}4177$. Déduisez-en le modèle $y = B\,A^t$ et le taux de croissance annuel moyen estimé.
3. Prévoyez le chiffre d'affaires de l'année 6.

<details><summary>Voir le corrigé</summary>

**1)** Les rapports successifs sont presque constants ($121/100 = 1{,}21$ ; $145/121 \approx 1{,}20$ ; $176/145 \approx 1{,}21$ ; $212/176 \approx 1{,}20$) : la croissance se fait à **taux constant**, ce qui correspond à un modèle exponentiel.

**2)** $A = e^{0{,}1878} \approx 1{,}2065$ et $B = e^{4{,}4177} \approx 82{,}9$ : $y \approx 82{,}9 \times 1{,}2065^t$, soit une croissance d'environ **20,65 %** par an.

**3)** $\hat{y}_6 \approx 82{,}9 \times 1{,}2065^6 \approx \mathbf{256}$ milliers de DH.

</details>
`,
    qcm: [
      { q: "Une covariance négative indique que les deux variables :", choix: ["Sont indépendantes", "Varient en sens contraire", "Varient dans le même sens", "Sont égales"], bonne: 1, explication: "Quand l'une augmente, l'autre tend à diminuer." },
      { q: "Le coefficient de corrélation linéaire est toujours compris entre :", choix: ["0 et 1", "− 1 et 1", "0 et 100", "− 100 et 100"], bonne: 1, explication: "Il est sans unité." },
      { q: "r = 0 signifie :", choix: ["Aucune liaison d'aucune sorte", "Absence de liaison linéaire", "Liaison parfaite", "Causalité"], bonne: 1, explication: "Une liaison non linéaire reste possible." },
      { q: "La pente de la droite de régression de y en x vaut :", choix: ["cov(x, y) / V(y)", "cov(x, y) / V(x)", "r × V(x)", "V(y) / V(x)"], bonne: 1, explication: "Méthode des moindres carrés." },
      { q: "La droite des moindres carrés passe toujours par :", choix: ["L'origine", "Le point moyen", "Le premier point", "Le point le plus haut"], bonne: 1, explication: "b = moyenne de y − a × moyenne de x." },
      { q: "r = 0,9. Le coefficient de détermination vaut :", choix: ["0,9", "0,81", "0,95", "0,1"], bonne: 1, explication: "R² = r²." },
      { q: "Cov = 30, V(x) = 10, moyenne de x = 5, moyenne de y = 40. La droite est :", choix: ["y = 3x + 25", "y = 3x + 40", "y = 0,33x + 38", "y = 30x + 10"], bonne: 0, explication: "a = 3 ; b = 40 − 15 = 25." },
      { q: "Une forte corrélation entre deux variables prouve :", choix: ["Une causalité", "Une liaison statistique, pas forcément causale", "L'indépendance", "Une erreur de mesure"], bonne: 1, explication: "Un troisième facteur peut agir sur les deux." },
      { q: "Pour ajuster une croissance à taux constant, on fait une régression de :", choix: ["y sur x", "ln y sur x", "x sur y", "y² sur x"], bonne: 1, explication: "Le modèle exponentiel se linéarise par le logarithme." },
      { q: "Dans un tableau de contingence, deux caractères sont indépendants si :", choix: ["Les totaux sont égaux", "Les distributions conditionnelles sont identiques", "Toutes les cases sont nulles", "Le tableau est carré"], bonne: 1, explication: "Chaque case vaut produit des marges / N." },
    ],
  },

  6: {
    titre: "Les fondements du calcul des probabilités",
    description: "Univers, événements, dénombrement (arrangements, combinaisons), axiomes, probabilité conditionnelle, indépendance, probabilités totales et Bayes.",
    resume: md`
## L'essentiel — Calcul des probabilités

- **Univers** $\Omega$, événements, contraire $\bar{A}$, réunion, intersection, incompatibilité, système complet.
- Dénombrement : principe multiplicatif ; $n^p$ (ordre, répétition) ; $A_n^p = n!/(n - p)!$ (ordre, sans répétition) ; $C_n^p = n!/(p!(n - p)!)$ (sans ordre) ; permutations $n!$.
- Équiprobabilité : $P(A) = $ cas favorables / cas possibles.
- $P(\bar{A}) = 1 - P(A)$ ; $P(A \cup B) = P(A) + P(B) - P(A \cap B)$.
- $P(A \mid B) = P(A \cap B) / P(B)$ ; indépendance : $P(A \cap B) = P(A)\,P(B)$ (à ne pas confondre avec incompatibilité).
- **Probabilités totales** : $P(A) = \sum P(B_i)\,P(A \mid B_i)$ ; **Bayes** : $P(B_j \mid A) = P(B_j)\,P(A \mid B_j) / P(A)$.
- Outil clé : l'**arbre pondéré** ; « au moins un » se calcule par le contraire.
`,
    exercices: md`
### Exercice 2 — Tirages dans une urne

Une urne contient 5 boules rouges et 3 boules vertes. On tire 2 boules.

1. Tirage simultané (sans remise) : calculez la probabilité d'obtenir 2 boules rouges, puis une boule de chaque couleur.
2. Tirage successif avec remise : calculez la probabilité d'obtenir 2 boules rouges.
3. Expliquez la différence.

<details><summary>Voir le corrigé</summary>

**1)** $C_8^2 = 28$ tirages. Deux rouges : $C_5^2 / 28 = 10 / 28 \approx \mathbf{0{,}357}$. Une de chaque : $(5 \times 3) / 28 = 15 / 28 \approx \mathbf{0{,}536}$.

**2)** Tirages indépendants : $(5/8)^2 = 25 / 64 \approx \mathbf{0{,}391}$.

**3)** Sans remise, le premier tirage d'une boule rouge réduit la proportion de rouges pour le second ($4/7$ au lieu de $5/8$) : les tirages ne sont pas indépendants. Avec remise, la composition de l'urne est la même à chaque tirage.

</details>

### Exercice 3 — Détection de fraude

Une banque estime que 1 % des transactions par carte sont frauduleuses. Son système d'alerte détecte 95 % des fraudes, mais déclenche aussi une alerte pour 3 % des transactions normales.

1. Calculez la probabilité qu'une transaction déclenche une alerte.
2. Une alerte est déclenchée : quelle est la probabilité que la transaction soit réellement frauduleuse ?
3. Commentez ce résultat.

<details><summary>Voir le corrigé</summary>

**1)** $P(A) = 0{,}01 \times 0{,}95 + 0{,}99 \times 0{,}03 = 0{,}0095 + 0{,}0297 = \mathbf{0{,}0392}$.

**2)** Bayes : $P(F \mid A) = 0{,}0095 / 0{,}0392 \approx \mathbf{0{,}242}$.

**3)** Moins d'une alerte sur quatre correspond à une vraie fraude, alors que le système semble performant : comme la fraude est **rare**, les fausses alertes sur les nombreuses transactions normales sont plus nombreuses que les vraies. C'est l'erreur classique qui consiste à confondre $P(A \mid F)$ et $P(F \mid A)$.

</details>
`,
    qcm: [
      { q: "Choisir 3 personnes parmi 10 sans fonction particulière se dénombre avec :", choix: ["Un arrangement", "Une combinaison", "Une permutation", "Une p-liste"], bonne: 1, explication: "L'ordre ne compte pas : C(10, 3) = 120." },
      { q: "Le nombre de codes à 4 chiffres (répétitions permises) est :", choix: ["5 040", "10 000", "210", "40"], bonne: 1, explication: "10 puissance 4." },
      { q: "A(10, 3) vaut :", choix: ["120", "720", "1 000", "30"], bonne: 1, explication: "10 × 9 × 8." },
      { q: "P(A) = 0,5 ; P(B) = 0,4 ; P(A et B) = 0,2. P(A ou B) vaut :", choix: ["0,9", "0,7", "0,2", "0,1"], bonne: 1, explication: "0,5 + 0,4 − 0,2." },
      { q: "Deux événements A et B sont indépendants si :", choix: ["P(A et B) = 0", "P(A et B) = P(A) × P(B)", "P(A) = P(B)", "P(A ou B) = 1"], bonne: 1, explication: "La réalisation de l'un n'informe pas sur l'autre." },
      { q: "Deux événements incompatibles de probabilités non nulles sont :", choix: ["Indépendants", "Dépendants", "Certains", "Complémentaires toujours"], bonne: 1, explication: "Si l'un se réalise, l'autre ne peut pas se réaliser." },
      { q: "P(A et B) = 0,12 et P(B) = 0,4. P(A sachant B) vaut :", choix: ["0,048", "0,3", "0,52", "0,28"], bonne: 1, explication: "0,12 / 0,4." },
      { q: "La formule de Bayes permet de calculer :", choix: ["La probabilité d'une cause sachant l'effet observé", "Le nombre de combinaisons", "La moyenne d'une série", "Une probabilité de réunion"], bonne: 0, explication: "Elle inverse le conditionnement." },
      { q: "La probabilité d'obtenir au moins un 6 en lançant deux dés est :", choix: ["1/3", "11/36", "1/36", "25/36"], bonne: 1, explication: "1 − (5/6)² = 11/36." },
      { q: "Le nombre de façons de ranger 5 dossiers différents est :", choix: ["25", "120", "60", "5"], bonne: 1, explication: "5! = 120." },
    ],
  },

  7: {
    titre: "Variables aléatoires et lois usuelles",
    description: "Variables aléatoires, espérance et variance, lois de Bernoulli, binomiale, de Poisson et normale, table de la loi normale et approximations, exercices corrigés.",
    resume: md`
## L'essentiel — Variables aléatoires et lois usuelles

- Discrète : $P(X = x_i) = p_i$ ; continue : densité, $P(X = a) = 0$ ; fonction de répartition $F(x) = P(X \le x)$.
- $E(X) = \sum x_i p_i$ ; $V(X) = E(X^2) - E(X)^2$ ; $E(aX + b) = aE(X) + b$ ; $V(aX + b) = a^2 V(X)$ ; variances additives si indépendance.
- **Binomiale** $\mathcal{B}(n, p)$ : $C_n^k p^k (1 - p)^{n - k}$, $E = np$, $V = np(1 - p)$.
- **Poisson** $\mathcal{P}(\lambda)$ : $e^{-\lambda} \lambda^k / k!$, $E = V = \lambda$ (événements rares).
- **Normale** : $Z = (X - \mu)/\sigma \sim \mathcal{N}(0, 1)$ ; $\Phi(-z) = 1 - \Phi(z)$ ; 68 % à $\pm\sigma$, 95 % à $\pm 1{,}96\sigma$.
- Approximations : binomiale par Poisson ($p$ petit) ou par la normale ($np \ge 5$ et $n(1 - p) \ge 5$), avec **correction de continuité**.
`,
    exercices: md`
### Exercice 2 — Contrôle qualité et loi de Poisson

Une usine de Kénitra produit des pièces dont 2 % sont défectueuses. On prélève un lot de 150 pièces.

1. Quelle est la loi exacte du nombre $X$ de pièces défectueuses ?
2. Justifiez une approximation par une loi de Poisson et calculez $P(X = 0)$ et $P(X \le 2)$.
3. Comparez avec la valeur exacte de $P(X = 0)$.

<details><summary>Voir le corrigé</summary>

**1)** $X \sim \mathcal{B}(150 ; 0{,}02)$.

**2)** $n$ est grand, $p$ petit et $np = 3$ : $X \approx \mathcal{P}(3)$. $P(X = 0) \approx e^{-3} \approx \mathbf{0{,}050}$ ; $P(X \le 2) \approx e^{-3}(1 + 3 + 4{,}5) \approx \mathbf{0{,}423}$.

**3)** Valeur exacte : $0{,}98^{150} \approx 0{,}048$ ; l'approximation est très bonne (de même, $P(X \le 2)$ exact vaut environ 0,421).

</details>

### Exercice 3 — Conditionnement et loi normale

Le poids des paquets de thé remplis par une machine suit la loi $\mathcal{N}(250 ; 4)$ en grammes.

1. Quelle proportion de paquets pèse moins de 245 g ?
2. Quelle proportion pèse entre 246 et 254 g ?
3. Le règlement impose qu'au plus 2 % des paquets pèsent moins de 245 g. Sans changer l'écart-type, sur quelle moyenne faut-il régler la machine ? (On donne $\Phi(2{,}054) = 0{,}98$.)

<details><summary>Voir le corrigé</summary>

**1)** $P(X < 245) = \Phi(-1{,}25) = 1 - \Phi(1{,}25) \approx 1 - 0{,}8944 = \mathbf{0{,}106}$, soit environ 10,6 % des paquets.

**2)** $P(246 < X < 254) = 2\,\Phi(1) - 1 \approx \mathbf{0{,}683}$.

**3)** On veut $(245 - \mu) / 4 = -2{,}054$, soit $\mu = 245 + 2{,}054 \times 4 \approx \mathbf{253{,}2}$ g. Réduire l'écart-type (machine plus précise) permettrait de viser une moyenne plus proche de 250 g.

</details>
`,
    qcm: [
      { q: "X prend 0, 1, 2 avec les probabilités 0,2 ; 0,5 ; 0,3. E(X) vaut :", choix: ["1", "1,1", "0,5", "1,5"], bonne: 1, explication: "0 + 0,5 + 0,6 = 1,1." },
      { q: "Si E(X) = 10 et V(X) = 4, alors V(3X + 5) vaut :", choix: ["12", "36", "17", "41"], bonne: 1, explication: "V(aX + b) = a² V(X) = 9 × 4." },
      { q: "Le nombre de succès en n épreuves indépendantes de même probabilité suit une loi :", choix: ["De Poisson", "Binomiale", "Normale", "Uniforme"], bonne: 1, explication: "C'est la définition de la loi binomiale." },
      { q: "L'espérance de la loi binomiale B(20 ; 0,4) vaut :", choix: ["4,8", "8", "12", "0,4"], bonne: 1, explication: "np = 20 × 0,4." },
      { q: "Pour une loi de Poisson de paramètre 4, la variance vaut :", choix: ["2", "4", "16", "0,25"], bonne: 1, explication: "Espérance et variance sont égales à λ." },
      { q: "X suit N(100 ; 20). P(X < 120) vaut environ :", choix: ["0,5", "0,8413", "0,9772", "0,1587"], bonne: 1, explication: "Φ(1)." },
      { q: "Pour Z suivant N(0 ; 1), P(Z > 1,96) vaut :", choix: ["0,975", "0,025", "0,05", "0,95"], bonne: 1, explication: "1 − 0,975." },
      { q: "Pour une variable continue, P(X = a) vaut :", choix: ["f(a)", "0", "F(a)", "1"], bonne: 1, explication: "Seuls les intervalles ont une probabilité non nulle." },
      { q: "B(200 ; 0,5) peut être approchée par :", choix: ["P(100)", "N(100 ; 7,07)", "N(200 ; 0,5)", "B(100 ; 0,5)"], bonne: 1, explication: "np = 100 et racine de npq ≈ 7,07." },
      { q: "La correction de continuité consiste à remplacer P(X ≤ k) par :", choix: ["P(Y ≤ k − 1)", "P(Y ≤ k + 0,5)", "P(Y ≥ k)", "P(Y ≤ 2k)"], bonne: 1, explication: "On passe d'une loi discrète à une loi continue." },
    ],
  },

  8: {
    titre: "Échantillonnage et estimation",
    description: "Échantillonnage, théorème central limite, estimateurs sans biais, intervalles de confiance d'une moyenne et d'une proportion, taille d'échantillon.",
    resume: md`
## L'essentiel — Échantillonnage et estimation

- Paramètres de la population ($\mu$, $\sigma$, $p$) estimés par les statistiques de l'échantillon ($\bar{x}$, $s$, $f$) ; tirage aléatoire pour la représentativité.
- $E(\bar{X}) = \mu$, $\sigma(\bar{X}) = \sigma / \sqrt{n}$ ; **théorème central limite** : $\bar{X} \approx \mathcal{N}(\mu ; \sigma/\sqrt{n})$ pour $n \ge 30$.
- $F \approx \mathcal{N}(p ; \sqrt{p(1 - p)/n})$.
- Estimateurs sans biais : $\bar{x}$, $f$, $s^2 = \frac{n}{n - 1} V_{éch}$.
- IC d'une moyenne : $\bar{x} \pm z\,\sigma/\sqrt{n}$ (ou $s$ si $n \ge 30$) ; petit échantillon : Student $t_{n-1}$.
- IC d'une proportion : $f \pm z \sqrt{f(1 - f)/n}$ ; $z = 1{,}645$ (90 %), $1{,}96$ (95 %), $2{,}576$ (99 %).
- Taille : $n = (z\sigma/E)^2$ ou $z^2 p(1 - p)/E^2$ ; avec $p = 0{,}5$ et $E = 3$ points : 1 068 personnes.
`,
    exercices: md`
### Exercice 2 — Petit échantillon et loi de Student

Un transporteur mesure le délai de livraison (en jours) de 10 colis choisis au hasard : moyenne 5,2 jours, écart-type corrigé 1,1 jour. On suppose les délais distribués normalement.

1. Pourquoi faut-il utiliser la loi de Student ?
2. Construisez l'intervalle de confiance à 95 % du délai moyen ($t_{9 ;\, 0{,}025} = 2{,}262$).
3. Le transporteur annonce un délai moyen de 4 jours. Qu'en pensez-vous ?

<details><summary>Voir le corrigé</summary>

**1)** L'échantillon est petit ($n = 10 < 30$) et l'écart-type de la population est inconnu : on utilise la loi de Student à $n - 1 = 9$ degrés de liberté.

**2)** $5{,}2 \pm 2{,}262 \times 1{,}1 / \sqrt{10} = 5{,}2 \pm 0{,}787$, soit **[4,41 ; 5,99] jours**.

**3)** La valeur 4 n'appartient pas à l'intervalle : au risque de 5 %, l'annonce du transporteur n'est pas compatible avec les observations (le délai réel semble plus long).

</details>

### Exercice 3 — Sondage et marge d'erreur

Un institut interroge 1 200 étudiants : 540 déclarent utiliser quotidiennement une application de paiement mobile.

1. Estimez la proportion d'utilisateurs quotidiens et construisez son intervalle de confiance à 95 %.
2. Quelle serait la marge d'erreur avec 300 étudiants seulement (même fréquence) ?
3. Combien d'étudiants faudrait-il interroger pour une marge de ± 2 points (95 %), sans information préalable ?

<details><summary>Voir le corrigé</summary>

**1)** $f = 540 / 1\,200 = 0{,}45$ ; erreur type $\sqrt{0{,}45 \times 0{,}55 / 1\,200} \approx 0{,}0144$ ; marge $1{,}96 \times 0{,}0144 \approx 0{,}028$ ; intervalle **[42,2 % ; 47,8 %]**.

**2)** Erreur type $\sqrt{0{,}2475 / 300} \approx 0{,}0287$ ; marge $\approx$ **5,6 points** : diviser l'échantillon par 4 double la marge d'erreur.

**3)** $n = 1{,}96^2 \times 0{,}25 / 0{,}02^2 = 2\,401$ étudiants.

</details>
`,
    qcm: [
      { q: "L'écart-type de la moyenne d'un échantillon de taille n vaut :", choix: ["σ", "σ / n", "σ / racine de n", "σ × n"], bonne: 2, explication: "La précision augmente avec la racine de n." },
      { q: "Le théorème central limite permet d'approcher la loi de la moyenne par une loi normale si :", choix: ["n ≥ 30 environ", "n = 1", "La population est petite", "σ est nul"], bonne: 0, explication: "Quelle que soit la loi de la population." },
      { q: "L'estimateur sans biais de la variance divise la somme des carrés des écarts par :", choix: ["n", "n − 1", "n + 1", "racine de n"], bonne: 1, explication: "La variance empirique sous-estime la variance de la population." },
      { q: "Au niveau de confiance 95 %, on utilise z égal à :", choix: ["1,645", "1,96", "2,576", "1"], bonne: 1, explication: "P(− 1,96 < Z < 1,96) = 0,95." },
      { q: "Moyenne 50, σ = 10, n = 100. L'intervalle de confiance à 95 % est :", choix: ["[48,04 ; 51,96]", "[30,4 ; 69,6]", "[49,8 ; 50,2]", "[40 ; 60]"], bonne: 0, explication: "50 ± 1,96 × 10 / 10." },
      { q: "Pour diviser par 2 la marge d'erreur, il faut multiplier la taille de l'échantillon par :", choix: ["2", "4", "8", "1,41"], bonne: 1, explication: "La marge est proportionnelle à 1 / racine de n." },
      { q: "Quand le niveau de confiance augmente, l'intervalle de confiance :", choix: ["Se rétrécit", "S'élargit", "Ne change pas", "Disparaît"], bonne: 1, explication: "Plus de sécurité, moins de précision." },
      { q: "f = 0,3 et n = 100. L'erreur type de la fréquence vaut environ :", choix: ["0,003", "0,046", "0,21", "0,3"], bonne: 1, explication: "Racine de 0,21 / 100." },
      { q: "Pour un petit échantillon issu d'une population normale d'écart-type inconnu, on utilise :", choix: ["La loi de Poisson", "La loi de Student", "La loi binomiale", "La loi uniforme"], bonne: 1, explication: "Avec n − 1 degrés de liberté." },
      { q: "Sans information sur p, on calcule la taille d'échantillon avec :", choix: ["p = 0", "p = 0,5", "p = 1", "p = 0,1"], bonne: 1, explication: "C'est le cas le plus défavorable : p(1 − p) est maximal." },
    ],
  },
};

export default chapitres;
