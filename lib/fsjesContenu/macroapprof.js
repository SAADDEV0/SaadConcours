// Macroéconomie Approfondie (S6, filière Économétrie appliquée) — compléments par chapitre : description SEO, résumé, exercices 2 et 3, QCM.
const md = String.raw;

const chapitres = {
1: {
titre: "Les faits de la croissance et la comptabilité de la croissance",
description: "Mesure de la croissance, règle de 70, faits stylisés de Kaldor, fonction Cobb-Douglas, résidu de Solow et croissance extensive du Maroc, avec exercice corrigé.",
resume: md`
## L'essentiel — Faits de la croissance et comptabilité de la croissance

- La croissance se mesure par le PIB en volume ; le niveau de vie par le **PIB par habitant**.
- Règle de 70 : temps de doublement $\approx 70 / g$ (en %) ; exactement $\ln 2 / \ln(1+g)$.
- Faits stylisés de Kaldor : $y$ et $k$ croissent, $K/Y$ stable, rendement du capital stable, parts du revenu stables, croissances très différentes entre pays.
- Cobb-Douglas : $Y = A K^{\alpha} L^{1-\alpha}$ ; rendements d'échelle constants, rendements marginaux décroissants, $\alpha$ = part du capital (0,3 à 0,4).
- Forme intensive : $y = A k^{\alpha}$.
- Comptabilité de la croissance : $g_Y = g_A + \alpha g_K + (1-\alpha) g_L$.
- **Résidu de Solow** : $g_A = g_Y - \alpha g_K - (1-\alpha) g_L$, mesure de la PTF (et de notre ignorance).
- Par tête : $g_y = g_A + \alpha g_k$ (approfondissement du capital + PTF).
- Croissance **extensive** (accumulation) / **intensive** (productivité).
- Maroc : investissement proche de 30 % du PIB, croissance de 3 à 4 %, faible contribution de la PTF.
`,
exercices: md`
### Exercice 2 — Le résidu d'une économie méditerranéenne

Une économie a connu sur dix ans une croissance du PIB de 3,5 % par an, du capital de 5 % et de l'emploi de 1,5 %. La part du capital est $\alpha = 0{,}35$.

1. Calculez la contribution de chaque facteur et la croissance de la PTF.
2. Quelle serait la croissance du PIB si la PTF progressait de 1,5 % par an, toutes choses égales par ailleurs ?

<details><summary>Voir le corrigé</summary>

1. Capital : $0{,}35 \times 5 = 1{,}75$ point ; travail : $0{,}65 \times 1{,}5 = 0{,}975$ point ; PTF : $3{,}5 - 1{,}75 - 0{,}975 = $ **0,775 %** (environ 22 % de la croissance).
2. $g_Y = 1{,}5 + 1{,}75 + 0{,}975 = $ **4,225 %** : un gain de PTF de 0,7 point relève la croissance d'autant, sans un dirham d'investissement en plus.

</details>

### Exercice 3 — Combien de temps pour rattraper ?

Le PIB par habitant du pays B vaut le quart de celui du pays A. Le pays A croît de 2 % par an par habitant, le pays B de 5 %.

1. En combien d'années chaque pays double-t-il son niveau de vie ?
2. Au bout de combien d'années B rattrape-t-il A ?
3. Comparez l'effet sur vingt ans d'une croissance de 3 % et de 1 %.

<details><summary>Voir le corrigé</summary>

1. A : $70 / 2 = 35$ ans ; B : $70 / 5 = 14$ ans (exactement $\ln 2 / \ln 1{,}05 \approx 14{,}2$ ans).
2. Il faut $\left(\frac{1{,}05}{1{,}02}\right)^t = 4$, soit $t = \frac{\ln 4}{\ln(1{,}05/1{,}02)} = \frac{1{,}3863}{0{,}0290} \approx $ **48 ans**, si les deux rythmes se maintiennent.
3. Sur vingt ans : $1{,}03^{20} \approx 1{,}81$ (+ 81 %) contre $1{,}01^{20} \approx 1{,}22$ (+ 22 %). Deux points de croissance font presque quatre fois plus de progrès du niveau de vie.

</details>
`,
qcm: [
{ q: "Selon la règle de 70, un PIB par habitant qui croît de 3,5 % par an double en environ :", choix: ["20 ans", "35 ans", "10 ans", "70 ans"], bonne: 0, explication: "70 / 3,5 = 20." },
{ q: "Dans la fonction Y = A K^α L^(1−α), le paramètre α représente :", choix: ["La part du capital dans le revenu", "Le taux d'épargne", "La croissance de la population", "Le taux de dépréciation"], bonne: 0, explication: "En concurrence, le capital reçoit αY." },
{ q: "La fonction Cobb-Douglas présente des rendements d'échelle :", choix: ["Constants", "Croissants", "Décroissants", "Nuls"], bonne: 0, explication: "Doubler K et L double Y, car α + (1 − α) = 1." },
{ q: "Le résidu de Solow se calcule comme :", choix: ["La croissance du PIB moins les contributions pondérées du capital et du travail", "La croissance du capital moins celle du travail", "Le rapport capital sur production", "L'épargne moins l'investissement"], bonne: 0, explication: "gA = gY − α gK − (1 − α) gL." },
{ q: "Avec α = 0,4, gK = 5 % et gL = 1 %, la contribution du capital à la croissance est de :", choix: ["2 points", "5 points", "3 points", "0,4 point"], bonne: 0, explication: "0,4 × 5 = 2." },
{ q: "Parmi les faits stylisés de Kaldor figure :", choix: ["La stabilité du ratio capital sur production", "La baisse continue du capital par tête", "La hausse continue de la part des profits", "L'égalité des croissances entre pays"], bonne: 0, explication: "Capital et production croissent au même rythme." },
{ q: "Une croissance qui repose surtout sur l'accumulation de capital et de travail est dite :", choix: ["Extensive", "Intensive", "Endogène", "Stationnaire"], bonne: 0, explication: "La croissance intensive repose sur la productivité." },
{ q: "En termes par tête, la croissance de la productivité du travail vaut :", choix: ["gA + α gk", "gA + gk", "α gK + gL", "gY + gL"], bonne: 0, explication: "Approfondissement du capital pondéré plus PTF." },
{ q: "Le paradoxe souvent relevé pour l'économie marocaine est :", choix: ["Un investissement élevé pour une croissance modérée", "Une épargne nulle et une croissance forte", "Une PTF très élevée et un investissement faible", "Une population en baisse"], bonne: 0, explication: "Investissement proche de 30 % du PIB, croissance de 3 à 4 %." },
{ q: "Si la population croît de 2 % et le PIB de 2 %, le PIB par habitant :", choix: ["Stagne", "Croît de 4 %", "Croît de 2 %", "Baisse de 2 %"], bonne: 0, explication: "gy = gY − gL = 0." },
],
},
2: {
titre: "Le modèle de Solow : accumulation du capital et état stationnaire",
description: "Modèle de Solow pas à pas : hypothèses, équation d'accumulation du capital par tête, état stationnaire, transition, effets de l'épargne et de la démographie.",
resume: md`
## L'essentiel — Le modèle de Solow

- Hypothèses : $Y = K^{\alpha}L^{1-\alpha}$, épargne $S = sY$ constante, population au taux $n$, dépréciation $\delta$, plein emploi, économie fermée.
- Équation fondamentale : $\dot k = s f(k) - (n+\delta)k$.
- $s f(k)$ : investissement effectif ; $(n+\delta)k$ : investissement de maintien.
- État stationnaire : $s f(k^*) = (n+\delta)k^*$, soit $k^* = \left(\frac{s}{n+\delta}\right)^{1/(1-\alpha)}$ et $y^* = \left(\frac{s}{n+\delta}\right)^{\alpha/(1-\alpha)}$.
- $c^* = (1-s)y^*$ ; à l'état stationnaire, $K$ et $Y$ croissent au taux $n$, les grandeurs par tête sont constantes.
- L'équilibre est stable grâce aux **rendements décroissants**.
- Transition : $g_k = s k^{\alpha-1} - (n+\delta)$, d'autant plus forte que $k$ est faible ; $g_y = \alpha g_k$.
- Hausse de $s$ : **effet de niveau**, pas d'effet de croissance durable ; la consommation baisse d'abord.
- Hausse de $n$ ou de $\delta$ : $k^*$ et $y^*$ baissent.
- Sans progrès technique, pas de croissance durable du revenu par tête.
`,
exercices: md`
### Exercice 2 — Une part du capital d'un tiers

Soit $y = k^{1/3}$, $s = 20 \%$, $n = 2 \%$, $\delta = 8 \%$.

1. Calculez $k^*$, $y^*$ et $c^*$.
2. Vérifiez l'égalité entre investissement effectif et investissement de maintien.

<details><summary>Voir le corrigé</summary>

1. $k^* = (0{,}2 / 0{,}1)^{1/(1 - 1/3)} = 2^{1,5} \approx $ **2,83** ; $y^* = 2^{0,5} \approx $ **1,414** ; $c^* = 0{,}8 \times 1{,}414 \approx $ **1,131**.
2. $s y^* = 0{,}2 \times 1{,}414 = 0{,}283$ et $(n+\delta)k^* = 0{,}1 \times 2{,}83 = 0{,}283$ ✓.

</details>

### Exercice 3 — Épargne et démographie : deux pays comparés

Deux pays ont la même technologie $y = \sqrt{k}$ et $\delta = 5 \%$. Le pays A épargne 32 % et sa population croît de 3 % ; le pays B épargne 20 % et sa population croît de 0,5 %.

1. Calculez la production par tête de long terme de chaque pays.
2. Commentez.
3. Si A ramène sa croissance démographique à 3 % tout en épargnant 25 %, que devient son revenu par tête de long terme ?

<details><summary>Voir le corrigé</summary>

1. A : $k^* = (0{,}32/0{,}08)^2 = 16$, $y^* = $ **4** ; B : $k^* = (0{,}2/0{,}055)^2 \approx 13{,}22$, $y^* \approx $ **3,64**.
2. A épargne beaucoup plus, mais sa croissance démographique absorbe une grande part de cette épargne : son avantage n'est que de 10 %. Le revenu de long terme dépend du rapport $s/(n+\delta)$ : $0{,}32/0{,}08 = 4$ contre $0{,}2/0{,}055 \approx 3{,}64$.
3. $k^* = (0{,}25/0{,}08)^2 \approx 9{,}77$ et $y^* = 3{,}125$ : A passerait sous B.

</details>
`,
qcm: [
{ q: "Dans le modèle de Solow, l'investissement de maintien par tête vaut :", choix: ["(n + δ)k", "s f(k)", "δK", "n f(k)"], bonne: 0, explication: "Remplacer le capital usé et équiper les nouveaux travailleurs." },
{ q: "À l'état stationnaire du modèle de Solow sans progrès technique :", choix: ["La production par tête est constante", "La production totale est constante", "Le capital total baisse", "L'épargne est nulle"], bonne: 0, explication: "K et Y croissent au taux n." },
{ q: "Avec y = k^0,5, s = 0,2 et n + δ = 0,05, le capital par tête d'état stationnaire vaut :", choix: ["16", "4", "8", "25"], bonne: 0, explication: "(0,2 / 0,05)^2 = 16." },
{ q: "Une hausse durable du taux d'épargne a sur la croissance par tête de long terme un effet :", choix: ["Nul, seul le niveau augmente", "Positif et permanent", "Négatif et permanent", "Positif uniquement si n est nul"], bonne: 0, explication: "C'est un effet de niveau." },
{ q: "Au moment exact d'une hausse du taux d'épargne, la consommation par tête :", choix: ["Baisse", "Augmente", "Reste inchangée", "Devient nulle"], bonne: 0, explication: "On épargne davantage d'un revenu qui n'a pas encore changé." },
{ q: "Une hausse de la croissance démographique, toutes choses égales par ailleurs :", choix: ["Diminue le capital par tête d'état stationnaire", "Augmente le capital par tête d'état stationnaire", "N'a aucun effet", "Augmente la croissance par tête de long terme"], bonne: 0, explication: "La droite (n + δ)k pivote vers le haut." },
{ q: "Ce qui garantit la stabilité de l'état stationnaire est :", choix: ["La décroissance des rendements marginaux du capital", "L'intervention de l'État", "La rigidité des salaires", "Le progrès technique"], bonne: 0, explication: "La concavité de f(k)." },
{ q: "Le taux de croissance du capital par tête est d'autant plus élevé que :", choix: ["Le capital par tête est faible", "Le capital par tête est élevé", "La dépréciation est forte", "La population croît vite"], bonne: 0, explication: "gk = s k^(α−1) − (n + δ) décroît avec k." },
{ q: "Dans le modèle de Solow, le taux d'épargne est :", choix: ["Une constante exogène", "Choisi chaque année par l'État", "Égal à la part du capital", "Égal au taux d'intérêt"], bonne: 0, explication: "C'est une hypothèse de comportement." },
{ q: "Si gk = 2 % et α = 0,4 en dehors de l'état stationnaire, la production par tête croît de :", choix: ["0,8 %", "2 %", "1,2 %", "5 %"], bonne: 0, explication: "gy = α gk = 0,4 × 2." },
],
},
3: {
titre: "Règle d'or, progrès technique et convergence",
description: "Règle d'or et efficacité dynamique, progrès technique, sentier de croissance équilibrée, convergence conditionnelle et modèle de Mankiw-Romer-Weil.",
resume: md`
## L'essentiel — Règle d'or, progrès technique et convergence

- Règle d'or : $k_{or}$ maximise $c^* = f(k^*) - (n+\delta)k^*$ ; condition $f'(k_{or}) = n + \delta$ (ou $n + g + \delta$).
- Avec une Cobb-Douglas : $s_{or} = \alpha$.
- $s > \alpha$ : économie **dynamiquement inefficace** (consommer plus est possible tout de suite et pour toujours) ; $s < \alpha$ : arbitrage entre générations.
- Progrès technique : $Y = K^{\alpha}(AL)^{1-\alpha}$, $\dot A / A = g$ ; travail efficace $AL$.
- $\dot{\tilde k} = s\tilde k^{\alpha} - (n+g+\delta)\tilde k$ ; $\tilde k^* = \left(\frac{s}{n+g+\delta}\right)^{1/(1-\alpha)}$.
- Sentier de croissance équilibrée : $y$ et $k$ croissent à $g$, $Y$ et $K$ à $n + g$, $K/Y$ et rendement du capital constants.
- Limite : $g$ est exogène.
- Convergence **absolue** (non vérifiée au niveau mondial) / **conditionnelle** (vérifiée).
- Vitesse $\lambda = (1-\alpha)(n+g+\delta)$, demi-vie $\ln 2 / \lambda$ ; empiriquement environ 2 % par an.
- Modèle augmenté (MRW, 1992) : $Y = K^{\alpha}H^{\beta}(AL)^{1-\alpha-\beta}$, explique environ 80 % des écarts de revenu entre pays.
`,
exercices: md`
### Exercice 2 — Trop épargner ?

Soit $y = \sqrt{k}$ et $n + \delta = 6 \%$ (pas de progrès technique).

1. Calculez la consommation par tête d'état stationnaire pour $s = 30 \%$, $s = 50 \%$ et $s = 60 \%$.
2. Quel taux correspond à la règle d'or ? Qualifiez l'économie qui épargne 60 %.

<details><summary>Voir le corrigé</summary>

1. $k^* = (s/0{,}06)^2$ et $y^* = s/0{,}06$. Pour 30 % : $y^* = 5$, $c^* = $ **3,5** ; pour 50 % : $y^* \approx 8{,}33$, $c^* \approx $ **4,17** ; pour 60 % : $y^* = 10$, $c^* = $ **4**.
2. $s_{or} = \alpha = 50 \%$. Avec 60 %, l'économie produit davantage mais consomme moins : elle est **dynamiquement inefficace**. En ramenant son épargne à 50 %, elle consommerait plus immédiatement et à long terme.

</details>

### Exercice 3 — Ce que dit la vitesse de convergence

On retient $n = 1 \%$, $g = 2 \%$, $\delta = 5 \%$.

1. Calculez la vitesse de convergence et la demi-vie pour $\alpha = 0{,}5$.
2. Les études empiriques trouvent une vitesse d'environ 2 % par an. Quelle part du capital $\alpha$ cela suppose-t-il ? Comment l'interpréter ?

<details><summary>Voir le corrigé</summary>

1. $\lambda = 0{,}5 \times 0{,}08 = $ **4 %** ; demi-vie $= 0{,}693 / 0{,}04 \approx $ **17 ans**.
2. $(1-\alpha) \times 0{,}08 = 0{,}02$ donne $\alpha = $ **0,75**. Une telle part ne correspond pas au seul capital physique (environ 1/3) : elle s'explique si l'on compte le **capital au sens large**, physique et humain, comme dans le modèle de Mankiw, Romer et Weil.

</details>
`,
qcm: [
{ q: "La règle d'or de l'accumulation maximise à l'état stationnaire :", choix: ["La consommation par tête", "La production par tête", "Le capital par tête", "L'épargne totale"], bonne: 0, explication: "Phelps, 1961." },
{ q: "Avec une fonction Cobb-Douglas, le taux d'épargne de la règle d'or est égal à :", choix: ["La part du capital α", "n + δ", "1 − α", "100 %"], bonne: 0, explication: "On épargne exactement les revenus du capital." },
{ q: "Une économie dont le taux d'épargne dépasse celui de la règle d'or est :", choix: ["Dynamiquement inefficace", "En croissance endogène", "En récession", "À l'optimum"], bonne: 0, explication: "Elle pourrait consommer plus tout de suite et pour toujours." },
{ q: "Sur le sentier de croissance équilibrée, la production par tête croît au taux :", choix: ["g", "n", "n + g", "0"], bonne: 0, explication: "y = A ỹ et ỹ est constant." },
{ q: "Sur le sentier de croissance équilibrée, la production totale croît au taux :", choix: ["n + g", "g", "n", "n + g + δ"], bonne: 0, explication: "Population et efficacité du travail." },
{ q: "Le progrès technique neutre au sens de Harrod augmente :", choix: ["L'efficacité du travail", "La dépréciation du capital", "Le taux d'épargne", "La croissance démographique"], bonne: 0, explication: "Y = K^α (AL)^(1−α)." },
{ q: "La convergence conditionnelle signifie que :", choix: ["Chaque pays converge vers son propre état stationnaire", "Tous les pays atteignent le même revenu", "Les pays riches croissent plus vite", "La croissance s'arrête partout"], bonne: 0, explication: "L'état stationnaire dépend de s, n, δ et de la technologie." },
{ q: "Avec α = 1/3 et n + g + δ = 9 %, la vitesse de convergence vaut :", choix: ["6 %", "9 %", "3 %", "2 %"], bonne: 0, explication: "(1 − 1/3) × 9 % = 6 %." },
{ q: "Le modèle de Mankiw, Romer et Weil ajoute au modèle de Solow :", choix: ["Le capital humain", "La monnaie", "L'État", "Le commerce extérieur"], bonne: 0, explication: "Y = K^α H^β (AL)^(1−α−β)." },
{ q: "Dans le modèle de Solow avec progrès technique, le moteur de la croissance par tête de long terme est :", choix: ["Exogène", "L'épargne", "La croissance démographique", "La dépense publique"], bonne: 0, explication: "Le taux g n'est pas expliqué par le modèle." },
],
},
4: {
titre: "Les théories de la croissance endogène",
description: "Modèle AK, externalités de Romer, capital humain de Lucas, innovation et destruction créatrice, institutions et politiques de croissance au Maroc.",
resume: md`
## L'essentiel — La croissance endogène

- Objectif : expliquer le taux de croissance de long terme **dans** le modèle, par les comportements et les politiques.
- Principe : neutraliser les rendements décroissants du facteur accumulable.
- Modèle AK : $Y = AK$, $g_y = sA - (n+\delta)$ ; pas d'état stationnaire, l'épargne a un **effet de croissance**, pas de convergence.
- Romer (1986) : apprentissage par la pratique, externalité du capital total ; investissement privé inférieur à l'optimum social.
- Lucas (1988) : $\dot h / h = B(1-u)$ ; la croissance dépend du temps et de l'efficacité de la formation.
- Romer (1990) : les idées sont **non rivales** ; la recherche exige une rente (brevets) ; $\dot A / A = \theta L_A$.
- Aghion et Howitt (1992) : destruction créatrice ; lien en U inversé entre concurrence et innovation (Nobel 2025 avec Mokyr).
- Institutions inclusives ou extractives (North ; Acemoglu, Johnson et Robinson, Nobel 2024) : causes profondes de la croissance.
- Politiques : infrastructures et écosystèmes, qualité de l'éducation, recherche, propriété intellectuelle, concurrence, justice.
`,
exercices: md`
### Exercice 2 — AK et démographie

Une économie a une fonction $Y = 0{,}5\,K$, un taux d'épargne de 20 % et un taux de dépréciation de 4 %.

1. Calculez la croissance par tête si la population croît de 2 %, puis de 1 %.
2. Quel taux d'épargne faut-il pour une croissance par tête de 5 % avec $n = 1 \%$ ?

<details><summary>Voir le corrigé</summary>

1. $g = 0{,}2 \times 0{,}5 - (0{,}02 + 0{,}04) = 0{,}10 - 0{,}06 = $ **4 %** ; avec $n = 1 \%$ : $0{,}10 - 0{,}05 = $ **5 %**. Dans le modèle AK, la démographie affecte la croissance par tête de long terme, et non plus seulement son niveau.
2. $0{,}5\,s - 0{,}05 = 0{,}05$ donne $s = $ **20 %** : c'est déjà le cas.

</details>

### Exercice 3 — Les idées et la recherche

On retient $\dot A / A = \theta L_A$ avec $\theta = 0{,}0008$ et $L_A$ exprimé en milliers de chercheurs.

1. Avec 25 000 chercheurs, quelle est la croissance de la technologie ?
2. Quelle critique adresse-t-on à cette relation quand on compare de grands et de petits pays ?
3. Pourquoi la recherche ne serait-elle pas financée dans un marché de concurrence parfaite ?

<details><summary>Voir le corrigé</summary>

1. $0{,}0008 \times 25 = 0{,}02$, soit **2 %** par an.
2. L'**effet d'échelle** : la relation prédit que les pays les plus peuplés (plus de chercheurs) croissent plus vite, et que la croissance mondiale aurait dû s'accélérer avec la hausse du nombre de chercheurs, ce que les données ne montrent pas (critique de Jones, 1995). Les modèles récents font dépendre la croissance de la **part** de la population consacrée à la recherche, ou supposent que les idées deviennent plus difficiles à trouver.
3. En concurrence parfaite, le prix égale le coût marginal ; comme copier une idée ne coûte presque rien, l'innovateur ne récupérerait pas son coût de recherche. Il lui faut une rente temporaire : brevet, secret, avance.

</details>
`,
qcm: [
{ q: "Dans le modèle AK, une hausse durable du taux d'épargne :", choix: ["Augmente durablement le taux de croissance", "N'a qu'un effet de niveau", "Diminue la croissance", "N'a aucun effet"], bonne: 0, explication: "g = sA − (n + δ)." },
{ q: "Avec Y = 0,3K, s = 30 %, n = 1 % et δ = 5 %, la croissance par tête vaut :", choix: ["3 %", "9 %", "6 %", "0 %"], bonne: 0, explication: "0,3 × 0,3 − 0,06 = 0,03." },
{ q: "Le modèle AK prédit entre deux pays aux paramètres identiques :", choix: ["La persistance de l'écart de revenu", "La convergence absolue", "La convergence conditionnelle", "La divergence explosive"], bonne: 0, explication: "Même taux de croissance, rapport des revenus constant." },
{ q: "Chez Romer (1986), la croissance endogène vient :", choix: ["D'externalités d'apprentissage liées au capital total", "De la croissance démographique", "D'un progrès technique exogène", "De la politique monétaire"], bonne: 0, explication: "Learning by doing d'Arrow." },
{ q: "Dans le modèle de Lucas, la croissance de long terme est égale à :", choix: ["B(1 − u)", "sA − δ", "n + g", "α gK"], bonne: 0, explication: "Efficacité de la formation × temps consacré à se former." },
{ q: "Une idée ou un logiciel est un bien :", choix: ["Non rival", "Rival et excludable", "Toujours gratuit", "Sans valeur économique"], bonne: 0, explication: "Plusieurs personnes peuvent l'utiliser en même temps." },
{ q: "La destruction créatrice a été formalisée par :", choix: ["Aghion et Howitt", "Solow et Swan", "Harrod et Domar", "Mundell et Fleming"], bonne: 0, explication: "1992, d'après Schumpeter." },
{ q: "Selon Acemoglu, Johnson et Robinson, la cause profonde des écarts de développement est :", choix: ["La nature des institutions", "Le climat uniquement", "Le taux d'épargne", "La taille de la population"], bonne: 0, explication: "Institutions inclusives ou extractives." },
{ q: "En présence d'externalités positives de l'investissement, la croissance de marché est :", choix: ["Inférieure à l'optimum social", "Supérieure à l'optimum social", "Égale à l'optimum", "Nulle"], bonne: 0, explication: "Les entreprises ignorent le bénéfice procuré aux autres." },
{ q: "Selon Aghion, la relation entre concurrence et innovation a la forme :", choix: ["D'un U inversé", "D'une droite croissante", "D'une droite décroissante", "D'une constante"], bonne: 0, explication: "Trop peu ou trop de concurrence découragent l'innovation." },
],
},
5: {
titre: "Le modèle IS-LM-BP et la politique économique en économie ouverte",
description: "Modèle IS-LM-BP de Mundell-Fleming : courbe BP, mobilité des capitaux, change fixe et flexible, efficacité des politiques, triangle d'incompatibilité et dirham.",
resume: md`
## L'essentiel — IS-LM-BP et Mundell-Fleming

- Économie ouverte : $Y = C + I + G + NX$, avec $NX$ décroissant en $Y$ et en cas d'appréciation du change.
- **BP** : $NX(Y, e) + CF(r - r^*) = 0$ ; croissante, verticale si capitaux immobiles, horizontale ($r = r^*$) si mobilité parfaite.
- Au-dessus de BP : excédent ; au-dessous : déficit.
- **Change fixe** : la banque centrale intervient, réserves et masse monétaire s'ajustent (LM endogène).
- **Change flexible** : le change s'ajuste, IS se déplace ; la masse monétaire reste maîtrisée.
- Mobilité parfaite, change fixe : politique budgétaire **efficace** (multiplicateur entier), politique monétaire **inefficace**.
- Mobilité parfaite, change flexible : politique budgétaire **inefficace** (éviction par l'appréciation), politique monétaire **efficace** (dépréciation).
- **Triangle d'incompatibilité** : change fixe, mobilité des capitaux et autonomie monétaire ne vont pas ensemble.
- Dirham : panier 60 % euro / 40 % dollar (2015), bande de ± 2,5 % (2018) puis ± 5 % (9 mars 2020), compte financier partiellement contrôlé.
- Méthode : en fixe, le revenu vient d'IS à $r^*$ ; en flexible, de LM à $r^*$.
`,
exercices: md`
### Exercice 2 — Construire la courbe BP

Les exportations nettes s'écrivent $NX = 200 - 0{,}1\,Y$ et les entrées nettes de capitaux $CF = 50\,(r - 4)$, avec $r$ en %.

1. Établissez l'équation de BP.
2. Quel taux d'intérêt équilibre la balance pour $Y = 2\,000$ et pour $Y = 2\,500$ ?
3. Que devient BP si la mobilité des capitaux devient parfaite ?

<details><summary>Voir le corrigé</summary>

1. $200 - 0{,}1Y + 50(r - 4) = 0$, soit $r = 0{,}002\,Y$.
2. $Y = 2\,000$ : $r = $ **4 %** (solde courant nul, pas besoin de capitaux) ; $Y = 2\,500$ : $r = $ **5 %**. Le déficit courant de 50 doit être financé par des capitaux, attirés par un écart de taux d'un point.
3. Avec une mobilité parfaite, un écart de taux infime attire des capitaux illimités : BP devient **horizontale** au niveau $r = r^* = 4 \%$.

</details>

### Exercice 3 — La politique monétaire en change fixe

On reprend l'économie de l'exercice 1 du chapitre (revenu 2 160, $M/P = 880$, $r^* = 4 \%$, change fixe). La banque centrale achète des titres et porte $M/P$ à 920.

1. Décrivez l'enchaînement des effets.
2. Quel est le revenu final ? Que deviennent les réserves de change ?

<details><summary>Voir le corrigé</summary>

1. La hausse de la masse monétaire fait baisser le taux d'intérêt sous $r^*$ ; les capitaux sortent ; la demande de devises pousse le change vers la dépréciation ; pour défendre la parité, la banque centrale vend des devises et retire de la monnaie de la circulation.
2. Le processus s'arrête quand $r$ est revenu à 4 % : LM revient à sa position initiale, $M/P = 880$ et le revenu reste à **2 160**. Les réserves de change ont diminué de l'équivalent de **40** : la politique monétaire n'a fait que changer la composition de l'actif de la banque centrale (plus de titres, moins de devises).

</details>
`,
qcm: [
{ q: "Avec une parfaite mobilité des capitaux, la courbe BP est :", choix: ["Horizontale au niveau du taux mondial", "Verticale", "Décroissante", "Confondue avec IS"], bonne: 0, explication: "Le moindre écart de taux provoque des flux illimités." },
{ q: "Au-dessus de la courbe BP, la balance des paiements est :", choix: ["Excédentaire", "Déficitaire", "Équilibrée", "Indéterminée"], bonne: 0, explication: "Le taux élevé attire des capitaux." },
{ q: "En change fixe avec capitaux parfaitement mobiles, la politique monétaire est :", choix: ["Inefficace", "Très efficace", "Efficace seulement à long terme", "Toujours inflationniste"], bonne: 0, explication: "La masse monétaire devient endogène." },
{ q: "En change flexible avec capitaux parfaitement mobiles, une relance budgétaire provoque :", choix: ["Une appréciation qui évince les exportations nettes", "Une hausse durable du taux d'intérêt", "Une dépréciation", "Une hausse des réserves de change"], bonne: 0, explication: "Éviction totale par le change." },
{ q: "En change flexible avec mobilité parfaite, la politique monétaire expansionniste agit sur le revenu par :", choix: ["La dépréciation du change", "La hausse du taux d'intérêt", "La hausse des impôts", "La baisse des réserves"], bonne: 0, explication: "Les exportations nettes augmentent." },
{ q: "En change fixe, un excédent de la balance des paiements conduit la banque centrale à :", choix: ["Acheter des devises, ce qui augmente la masse monétaire", "Vendre des devises", "Relever ses taux", "Dévaluer"], bonne: 0, explication: "Pour empêcher l'appréciation." },
{ q: "Le triangle d'incompatibilité associe :", choix: ["Change fixe, mobilité des capitaux, autonomie monétaire", "Inflation, chômage, croissance", "Épargne, investissement, consommation", "Impôts, dépenses, dette"], bonne: 0, explication: "On ne peut avoir les trois en même temps." },
{ q: "Depuis le 9 mars 2020, la bande de fluctuation du dirham autour de son cours central est de :", choix: ["± 5 %", "± 0,3 %", "± 2,5 %", "± 10 %"], bonne: 0, explication: "Deuxième phase de la réforme du régime de change." },
{ q: "Le panier de cotation du dirham est composé de :", choix: ["60 % d'euro et 40 % de dollar", "80 % d'euro et 20 % de dollar", "50 % d'euro et 50 % de dollar", "100 % de dollar"], bonne: 0, explication: "Pondérations en vigueur depuis avril 2015." },
{ q: "Le modèle IS-LM-BP est associé aux noms de :", choix: ["Mundell et Fleming", "Solow et Swan", "Barro et Gordon", "Hicks et Hansen"], bonne: 0, explication: "Début des années 1960." },
],
},
6: {
titre: "Anticipations, crédibilité et règles de politique économique",
description: "Anticipations adaptatives et rationnelles, critique de Lucas, biais inflationniste de Barro-Gordon, règles et indépendance de Bank Al-Maghrib.",
resume: md`
## L'essentiel — Anticipations, crédibilité et règles

- Phillips augmentée : $u = u^* - \beta(\pi - \pi^e)$ ; seule l'inflation **non anticipée** réduit le chômage.
- Anticipations **adaptatives** ($\pi^e_t = \pi_{t-1}$) : maintenir $u < u^*$ fait accélérer l'inflation ; Phillips verticale à long terme ; ratio de sacrifice.
- Anticipations **rationnelles** : toute l'information est utilisée, pas d'erreur systématique.
- Sargent et Wallace (1975) : une politique monétaire anticipée est neutre ; seules les surprises agissent.
- Critique de Lucas (1976) : les relations estimées changent quand la politique change → modèles à paramètres profonds (DSGE).
- Nouveaux keynésiens : rigidités (contrats, coûts de menu) → effets de court terme même avec anticipations rationnelles.
- Incohérence temporelle (Kydland et Prescott, 1977).
- Barro-Gordon : perte $\pi^2 + \lambda(u - \bar u)^2$ ; discrétion : $\pi = \lambda\beta(u^* - \bar u)$, **biais inflationniste** sans gain de chômage.
- Solutions : règle, réputation, banquier central conservateur (Rogoff), indépendance, ciblage d'inflation, règle de Taylor.
- Maroc : loi **40-17** (2019), stabilité des prix comme objectif principal, pas d'instructions du gouvernement.
`,
exercices: md`
### Exercice 2 — L'accélération de l'inflation

La courbe de Phillips est $\pi_t = \pi^e_t - 0{,}5\,(u_t - 6)$ et les anticipations sont adaptatives : $\pi^e_t = \pi_{t-1}$. L'inflation de l'année 0 est de 2 %.

1. Le gouvernement maintient le chômage à 4 % pendant trois ans. Calculez l'inflation de chaque année.
2. Que se passe-t-il si les anticipations sont rationnelles et la politique annoncée ?

<details><summary>Voir le corrigé</summary>

1. Chaque année, $\pi_t = \pi_{t-1} - 0{,}5 \times (4 - 6) = \pi_{t-1} + 1$ : **3 %**, **4 %**, **5 %**. Pour garder le chômage sous 6 %, l'inflation doit augmenter d'un point par an : c'est l'accélération.
2. Les agents anticipent la politique : $\pi^e = \pi$, et le chômage revient immédiatement à **6 %**. Maintenir 4 % exigerait des surprises répétées, impossibles avec des agents rationnels.

</details>

### Exercice 3 — Le coût d'une réputation perdue

On reprend le pays de l'Oriental ($u = 10 - 0{,}5(\pi - \pi^e)$, perte $\pi^2 + 4(u - 8)^2$). Les agents anticipent une inflation de 4 % (équilibre discrétionnaire), mais un nouveau gouvernement décide brutalement d'appliquer $\pi = 0$.

1. Calculez le chômage et la perte de cette année de transition.
2. Quel enseignement en tirer pour une politique de désinflation ?

<details><summary>Voir le corrigé</summary>

1. $u = 10 - 0{,}5 \times (0 - 4) = $ **12 %** ; perte $= 0 + 4 \times (12 - 8)^2 = $ **64**, le double de la perte en discrétion (32).
2. Une désinflation non crédible coûte cher en chômage tant que les anticipations ne s'ajustent pas (ratio de sacrifice). Une banque centrale **crédible**, qui annonce clairement sa cible et la tient, réduit ce coût, car les anticipations baissent plus vite.

</details>
`,
qcm: [
{ q: "Avec la courbe de Phillips augmentée, le chômage baisse sous son niveau naturel si :", choix: ["L'inflation dépasse l'inflation anticipée", "L'inflation est élevée", "L'inflation est anticipée", "Le taux d'intérêt baisse"], bonne: 0, explication: "Seul l'écart entre inflation effective et inflation anticipée réduit le chômage." },
{ q: "Les anticipations adaptatives supposent que les agents :", choix: ["Corrigent leur prévision à partir des erreurs passées", "Connaissent parfaitement l'avenir", "Ignorent l'inflation", "Utilisent toute l'information disponible"], bonne: 0, explication: "Forme simple : πe = π de l'année précédente." },
{ q: "Selon la thèse accélérationniste, maintenir durablement le chômage sous son niveau naturel entraîne :", choix: ["Une inflation qui augmente sans cesse", "Une inflation stable", "Une déflation", "Une baisse du chômage naturel"], bonne: 0, explication: "Friedman et Phelps." },
{ q: "La proposition d'inefficacité de Sargent et Wallace concerne :", choix: ["La politique monétaire anticipée", "La politique budgétaire en change fixe", "Le progrès technique", "L'épargne"], bonne: 0, explication: "Seules les surprises ont un effet réel." },
{ q: "La critique de Lucas affirme que :", choix: ["Les relations estimées changent quand la politique change", "Les anticipations sont toujours adaptatives", "La monnaie n'existe pas", "Le chômage naturel est nul"], bonne: 0, explication: "Les comportements dépendent de la politique anticipée." },
{ q: "Dans le modèle de Barro-Gordon en discrétion, à l'équilibre, le chômage est :", choix: ["Égal au chômage naturel", "Égal à la cible du gouvernement", "Nul", "Supérieur au chômage naturel"], bonne: 0, explication: "Les agents ne sont pas surpris." },
{ q: "Avec λ = 2, β = 0,5, un chômage naturel de 9 % et une cible de 7 %, l'inflation discrétionnaire vaut :", choix: ["2 %", "4 %", "1 %", "0 %"], bonne: 0, explication: "λβ multiplié par l'écart de 2 points, soit 2 × 0,5 × 2." },
{ q: "L'incohérence temporelle a été mise en évidence par :", choix: ["Kydland et Prescott", "Solow et Swan", "Mundell et Fleming", "Modigliani et Miller"], bonne: 0, explication: "1977, Nobel 2004." },
{ q: "Selon Rogoff, confier la monnaie à un banquier central qui accorde moins de poids au chômage :", choix: ["Réduit le biais inflationniste", "Augmente le chômage naturel", "Supprime toute inflation sans coût", "Rend la politique monétaire inefficace"], bonne: 0, explication: "λ plus faible, inflation discrétionnaire plus faible." },
{ q: "Le statut de Bank Al-Maghrib en vigueur résulte de la loi :", choix: ["40-17", "103-12", "31-08", "69-21"], bonne: 0, explication: "Loi de 2019, objectif principal de stabilité des prix." },
],
},
};

export default chapitres;
