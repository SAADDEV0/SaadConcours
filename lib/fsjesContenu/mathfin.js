// Mathématiques financières (S2) — compléments par chapitre : description SEO, résumé, exercices 2 et 3, QCM.
const md = String.raw;

const chapitres = {
  1: {
    titre: "L'intérêt simple",
    description: "Intérêt simple : formule I = Ctn, valeur acquise, décompte des jours, taux proportionnels, taux moyen, intérêt précompté et taux effectif, exercices corrigés.",
    resume: md`
## L'essentiel — L'intérêt simple

- Intérêt simple : calculé sur le **seul capital initial** ; utilisé pour le **court terme**.
- **$I = C \times t \times n$**, avec $n$ dans l'unité du taux : $n = m/12$ (mois) ou $j/360$ (jours, année commerciale).
- **Valeur acquise** : $V_n = C\,(1 + t\,n)$.
- Décompte des jours : jours **exacts** du calendrier, jour de départ exclu, jour d'échéance inclus.
- Inconnues : $C = \dfrac{I}{tn}$, $t = \dfrac{I}{Cn}$, $n = \dfrac{I}{Ct}$ ; capital à partir de la valeur acquise : $C = \dfrac{V_n}{1 + tn}$.
- **Taux proportionnels** : $t/2$, $t/4$, $t/12$ ; en intérêt simple, ils sont équivalents.
- **Taux moyen** : $T = \dfrac{\sum C_k t_k j_k}{\sum C_k j_k}$ (moyenne pondérée, pas moyenne simple).
- **Méthode des nombres** : $N = C \times j$, diviseur $D = 36\,000 / t$ ($t$ en %), $I = \sum N / D$.
- **Intérêt précompté** : l'emprunteur reçoit $C - I$ ; **taux effectif** $= \dfrac{I}{(C - I)\,n}$, supérieur au taux nominal.
`,
    exercices: md`
### Exercice 2 — Retrouver un capital et répartir deux placements

1. Un capital placé à 7,2 % pendant 50 jours a une valeur acquise de 20 200 DH. Quel est ce capital ?
2. Deux capitaux dont la somme est de 90 000 DH sont placés pendant un an, le premier à 5 %, le second à 6 %. Ils rapportent ensemble 5 000 DH d'intérêts. Calculez chaque capital.
3. Combien d'années faut-il, en intérêt simple, pour doubler un capital placé à 8 % ?

<details><summary>Voir le corrigé</summary>

**1)** $C = \dfrac{20\,200}{1 + 0{,}072 \times 50 / 360} = \dfrac{20\,200}{1{,}01} = \mathbf{20\,000\ DH}$.

**2)** Soit $C_1$ et $C_2$ : $C_1 + C_2 = 90\,000$ et $0{,}05\,C_1 + 0{,}06\,C_2 = 5\,000$. En remplaçant $C_1 = 90\,000 - C_2$ : $4\,500 + 0{,}01\,C_2 = 5\,000$, d'où $C_2 = \mathbf{50\,000\ DH}$ et $C_1 = \mathbf{40\,000\ DH}$. Vérification : $2\,000 + 3\,000 = 5\,000$ ✔.

**3)** Doubler, c'est obtenir $I = C$ : $C = C \times 0{,}08 \times n$, soit $n = 1 / 0{,}08 = \mathbf{12{,}5\ ans}$.

</details>

### Exercice 3 — Dépôt à terme et taux effectif

1. Un épargnant de Rabat dépose 30 000 DH le 10 janvier et les retire le 25 avril (année non bissextile), au taux de 3,6 %. Calculez la durée, l'intérêt et le taux mensuel proportionnel.
2. Une banque propose un crédit de 120 000 DH sur 6 mois à 9 %, intérêts précomptés, avec 600 DH de frais de dossier retenus au départ. Calculez la somme réellement reçue et le taux effectif.

<details><summary>Voir le corrigé</summary>

**1)** Durée : janvier (du 11 au 31) 21 jours + février 28 + mars 31 + avril 25 = **105 jours**. Intérêt : $30\,000 \times 0{,}036 \times 105 / 360 = \mathbf{315\ DH}$. Taux mensuel proportionnel : $3{,}6\,\% / 12 = \mathbf{0{,}3\,\%}$.

**2)** Intérêt : $120\,000 \times 0{,}09 \times 6/12 = 5\,400$ DH. Somme reçue : $120\,000 - 5\,400 - 600 = \mathbf{114\,000\ DH}$. Coût total : $6\,000$ DH pour 114 000 DH disponibles pendant 6 mois :

$$t_{effectif} = \frac{6\,000}{114\,000 \times 6/12} \approx \mathbf{10{,}53\,\%}$$

Les frais et le précompte font passer le coût réel de 9 % à plus de 10,5 %.

</details>
`,
    qcm: [
      { q: "En intérêt simple, les intérêts :", choix: ["Sont capitalisés chaque année", "Sont calculés sur le seul capital initial", "Augmentent de façon exponentielle", "Ne dépendent pas de la durée"], bonne: 1, explication: "Ils ne produisent pas eux-mêmes d'intérêts." },
      { q: "Intérêt de 24 000 DH placés à 5 % pendant 90 jours ?", choix: ["1 200 DH", "300 DH", "3 000 DH", "108 DH"], bonne: 1, explication: "24 000 × 0,05 × 90/360 = 300 DH." },
      { q: "L'année commerciale utilisée par les banques compte :", choix: ["365 jours", "360 jours", "366 jours", "12 mois de 31 jours"], bonne: 1, explication: "Convention bancaire et des examens." },
      { q: "Du 20 mai au 10 juillet, la durée est de :", choix: ["50 jours", "51 jours", "52 jours", "60 jours"], bonne: 1, explication: "11 jours de mai (21 au 31) + 30 de juin + 10 de juillet = 51 jours." },
      { q: "Un taux annuel de 9 % correspond à un taux trimestriel proportionnel de :", choix: ["3 %", "2,25 %", "2,18 %", "0,75 %"], bonne: 1, explication: "9 % / 4 = 2,25 %." },
      { q: "Valeur acquise de 10 000 DH à 6 % pendant 8 mois ?", choix: ["10 480 DH", "10 400 DH", "10 600 DH", "10 800 DH"], bonne: 1, explication: "10 000 × (1 + 0,06 × 8/12) = 10 400 DH." },
      { q: "Le taux moyen de plusieurs placements est :", choix: ["La moyenne simple des taux", "La moyenne des taux pondérée par C × j", "Le taux le plus élevé", "La somme des taux"], bonne: 1, explication: "T = Σ C t j / Σ C j." },
      { q: "Avec un intérêt précompté, le taux effectif est :", choix: ["Égal au taux nominal", "Supérieur au taux nominal", "Inférieur au taux nominal", "Nul"], bonne: 1, explication: "L'emprunteur paie l'intérêt sur une somme qu'il ne reçoit pas entièrement." },
      { q: "Dans la méthode du diviseur fixe au taux de 4 %, le diviseur vaut :", choix: ["400", "9 000", "36 000", "144"], bonne: 1, explication: "D = 36 000 / 4 = 9 000." },
      { q: "Combien de jours pour que 36 000 DH à 5 % rapportent 250 DH ?", choix: ["30 jours", "50 jours", "100 jours", "5 jours"], bonne: 1, explication: "n = 250 / (36 000 × 0,05) = 0,1389 an, soit 50 jours." },
    ],
  },

  2: {
    titre: "L'escompte commercial",
    description: "Escompte commercial : agios, valeur nette, bordereau, taux réel, escompte rationnel, équivalence d'effets et échéance moyenne, avec exercices corrigés.",
    resume: md`
## L'essentiel — L'escompte commercial

- Escompter un effet, c'est obtenir de la banque son montant **avant l'échéance**, moins des agios. C'est un crédit à court terme, avec recours en cas d'impayé.
- **Escompte** $e = V \times t \times \dfrac{j}{360}$, calculé sur la **valeur nominale** $V$.
- **Valeur actuelle commerciale** $a = V\left(1 - \dfrac{tj}{360}\right)$.
- **Agios** = escompte + commissions (d'endos, proportionnelle aux jours ; fixes par effet) + TVA (10 % sur les opérations bancaires au Maroc). **Valeur nette = V − agios TTC**.
- Usages : **jours de banque** ajoutés, **minimum de jours**, minimum d'escompte.
- **Taux réel** $= \dfrac{\text{agios TTC} \times 360}{\text{valeur nette} \times j_{réels}}$ : toujours supérieur au taux d'escompte.
- **Escompte rationnel** $e_r = \dfrac{V t j / 360}{1 + tj/360}$ (calculé sur la valeur actuelle), un peu inférieur à l'escompte commercial.
- **Équivalence** : même valeur actuelle à la date d'équivalence, $V_1(1 - tj_1/360) = V_2(1 - tj_2/360)$.
- **Échéance moyenne** (nominal = somme des nominaux) : $j = \dfrac{\sum V_k j_k}{\sum V_k}$, indépendante du taux.
`,
    exercices: md`
### Exercice 2 — Remplacer des effets

Taux d'escompte retenu pour les équivalences : 9 % dans la question 1, 7,2 % dans les questions 2 et 3.

1. Un effet de 40 000 DH à 60 jours doit être remplacé par un effet à 90 jours. Calculez le nominal du nouvel effet.
2. Deux effets, 12 000 DH à 30 jours et 18 000 DH à 75 jours, sont remplacés par un effet unique de 30 500 DH. Quelle est son échéance ?
3. Trois effets de 10 000 DH à 30 jours, 15 000 DH à 60 jours et 25 000 DH à 90 jours sont remplacés par un effet unique de 50 000 DH. Quelle est son échéance ? Le taux intervient-il ?

<details><summary>Voir le corrigé</summary>

**1)** $V_2 (1 - 0{,}09 \times 90/360) = 40\,000 (1 - 0{,}09 \times 60/360)$, soit $V_2 \times 0{,}9775 = 39\,400$ et $V_2 \approx \mathbf{40\,306{,}91\ DH}$.

**2)** Valeur actuelle des deux effets : $12\,000 \times (1 - 0{,}072 \times 30/360) + 18\,000 \times (1 - 0{,}072 \times 75/360) = 11\,928 + 17\,730 = 29\,658$ DH.
$30\,500 \times (1 - 0{,}0002\,j) = 29\,658$, d'où $0{,}0002\,j = 1 - 0{,}97239 = 0{,}02761$ et $j \approx \mathbf{138\ jours}$.

**3)** Le nominal (50 000) est égal à la somme des nominaux : c'est une **échéance moyenne**.
$j = \dfrac{10\,000 \times 30 + 15\,000 \times 60 + 25\,000 \times 90}{50\,000} = \dfrac{3\,450\,000}{50\,000} = \mathbf{69\ jours}$. Le taux **n'intervient pas**.

</details>

### Exercice 3 — Coût réel d'un escompte

Un effet de 60 000 DH, à échéance dans 90 jours, est escompté au taux de 10 %. La banque prélève 100 DH de commissions et une TVA de 10 % sur l'escompte et les commissions.

1. Calculez l'escompte commercial et l'escompte rationnel ; commentez l'écart.
2. Calculez les agios TTC, la valeur nette et le taux réel de l'opération.

<details><summary>Voir le corrigé</summary>

**1)** Escompte commercial : $60\,000 \times 0{,}10 \times 90/360 = \mathbf{1\,500\ DH}$. Escompte rationnel : $1\,500 / (1 + 0{,}025) \approx \mathbf{1\,463{,}41\ DH}$. L'écart (36,59 DH) vient de ce que l'escompte commercial est calculé sur le nominal, alors que la banque ne prête que la valeur actuelle.

**2)** Agios HT : $1\,500 + 100 = 1\,600$ DH ; TVA : 160 DH ; **agios TTC : 1 760 DH** ; **valeur nette : 58 240 DH**.

$$t_{réel} = \frac{1\,760 \times 360}{58\,240 \times 90} \approx \mathbf{12{,}09\,\%}$$

Le coût réel dépasse de 2 points le taux affiché.

</details>
`,
    qcm: [
      { q: "L'escompte commercial est calculé sur :", choix: ["La valeur nette", "La valeur nominale de l'effet", "La valeur actuelle rationnelle", "Les agios"], bonne: 1, explication: "e = V × t × j / 360." },
      { q: "Effet de 36 000 DH à 50 jours, taux 8 %. Escompte ?", choix: ["400 DH", "4 000 DH", "144 DH", "480 DH"], bonne: 0, explication: "36 000 × 0,08 × 50/360 = 400 DH." },
      { q: "La valeur nette d'une remise à l'escompte est égale à :", choix: ["Nominal + agios", "Nominal − agios TTC", "Escompte − commissions", "Nominal × taux"], bonne: 1, explication: "C'est la somme créditée au compte de l'entreprise." },
      { q: "Un effet échéant dans 6 jours, avec un minimum de 10 jours, est escompté sur :", choix: ["6 jours", "10 jours", "16 jours", "0 jour"], bonne: 1, explication: "Le minimum s'applique quand la durée réelle est inférieure." },
      { q: "Le taux réel d'un escompte est :", choix: ["Égal au taux d'escompte", "Supérieur au taux d'escompte", "Inférieur au taux d'escompte", "Toujours de 10 %"], bonne: 1, explication: "Commissions, TVA et calcul sur le nominal alourdissent le coût." },
      { q: "L'escompte rationnel est :", choix: ["Supérieur à l'escompte commercial", "Légèrement inférieur à l'escompte commercial", "Égal au double de l'escompte commercial", "Calculé sur le nominal"], bonne: 1, explication: "Il est calculé sur la valeur actuelle, plus faible que le nominal." },
      { q: "Deux effets sont équivalents à une date si :", choix: ["Ils ont le même nominal", "Ils ont la même valeur actuelle à cette date, au même taux", "Ils ont la même échéance", "Ils sont tirés sur le même client"], bonne: 1, explication: "C'est la définition de l'équivalence." },
      { q: "Pour repousser l'échéance d'un effet, le nouveau nominal doit être :", choix: ["Plus faible", "Plus élevé", "Identique", "Nul"], bonne: 1, explication: "Le créancier est rémunéré pour le délai supplémentaire." },
      { q: "Effets de 20 000 à 30 jours et 30 000 à 80 jours remplacés par un effet de 50 000. Échéance moyenne ?", choix: ["55 jours", "60 jours", "50 jours", "110 jours"], bonne: 1, explication: "(600 000 + 2 400 000) / 50 000 = 60 jours." },
      { q: "Au Maroc, les effets de commerce sont régis par :", choix: ["Le DOC de 1913", "Le Code de commerce (loi 15-95)", "Le Code général des impôts", "La loi 17-95"], bonne: 1, explication: "Lettre de change, billet à ordre et chèque figurent dans le Code de commerce." },
    ],
  },

  3: {
    titre: "L'intérêt composé",
    description: "Intérêt composé : capitalisation, valeur acquise, durée non entière, taux équivalents, taux effectif, recherche de n et de i, avec exercices corrigés.",
    resume: md`
## L'essentiel — L'intérêt composé

- Les intérêts sont **capitalisés** à la fin de chaque période et produisent à leur tour des intérêts : opérations à **moyen et long terme**.
- **Valeur acquise** : $C_n = C_0\,(1 + i)^n$ (progression géométrique) ; intérêts $= C_n - C_0$.
- Intérêt de la $k$-ième période : $I_k = C_0\,(1 + i)^{k-1} \times i$.
- Durée non entière : solution **rationnelle** $C_0(1+i)^n(1 + i\,p/q)$ ou **commerciale** $C_0(1+i)^{n + p/q}$ (par défaut).
- **Taux équivalents** : $(1 + i_a) = (1 + i_k)^k$ ; en intérêt composé, les taux **proportionnels** ne sont pas équivalents.
- **Taux effectif** d'un taux nominal capitalisé $k$ fois : $\left(1 + \dfrac{i_{nominal}}{k}\right)^k - 1$ ; principe du **TEG** (loi 31-08).
- Durée : $n = \dfrac{\ln(C_n/C_0)}{\ln(1+i)}$ ; taux : $i = (C_n/C_0)^{1/n} - 1$ ; **règle des 72** pour le doublement.
- Taux variables : $C_n = C_0 \prod (1 + i_k)$.
`,
    exercices: md`
### Exercice 2 — Comparer trois offres de placement

Un investisseur hésite entre trois placements de 100 000 DH sur 5 ans :
- offre A : 6 % l'an, capitalisation annuelle ;
- offre B : 2,9 % par semestre, capitalisation semestrielle ;
- offre C : 0,48 % par mois, capitalisation mensuelle.

1. Calculez le taux annuel effectif de chaque offre.
2. Calculez la valeur acquise de chaque offre au bout de 5 ans et classez-les.

<details><summary>Voir le corrigé</summary>

**1)** A : **6 %** ; B : $1{,}029^2 - 1 \approx \mathbf{5{,}88\,\%}$ ; C : $1{,}0048^{12} - 1 \approx \mathbf{5{,}91\,\%}$.

**2)**
- A : $100\,000 \times 1{,}06^5 \approx 133\,822{,}56$ DH ;
- B : $100\,000 \times 1{,}029^{10} \approx 133\,092{,}55$ DH ;
- C : $100\,000 \times 1{,}0048^{60} \approx 133\,283{,}87$ DH.

Classement : **A > C > B**. Les offres B et C affichent des taux proportionnels (2,9 × 2 = 5,8 % et 0,48 × 12 = 5,76 %) qui paraissent proches de 6 % ; seul le taux effectif permet de comparer.

</details>

### Exercice 3 — Retrouver un capital, un taux et traiter une durée non entière

1. Un capital placé 5 ans à 7 % l'an a une valeur acquise de 84 153,10 DH. Quel était ce capital ?
2. À quel taux annuel faut-il placer un capital pour qu'il double en 10 ans ? Comparez avec la règle des 72.
3. 25 000 DH sont placés à 8 % pendant 3 ans et 4 mois. Calculez la valeur acquise selon la solution rationnelle et selon la solution commerciale.

<details><summary>Voir le corrigé</summary>

**1)** $C_0 = \dfrac{84\,153{,}10}{1{,}07^5} = \dfrac{84\,153{,}10}{1{,}402552} \approx \mathbf{60\,000\ DH}$.

**2)** $i = 2^{1/10} - 1 \approx \mathbf{7{,}18\,\%}$. Règle des 72 : $72 / 10 = 7{,}2\,\%$ : l'approximation est excellente.

**3)**
- Rationnelle : $25\,000 \times 1{,}08^3 \times (1 + 0{,}08 \times 4/12) \approx \mathbf{32\,332{,}61\ DH}$ ;
- Commerciale : $25\,000 \times 1{,}08^{3 + 1/3} \approx \mathbf{32\,311{,}16\ DH}$.

La solution rationnelle est un peu plus favorable au prêteur, car sur 4 mois l'intérêt simple dépasse l'intérêt composé.

</details>
`,
    qcm: [
      { q: "En intérêt composé, la valeur acquise est égale à :", choix: ["C0 (1 + i n)", "C0 (1 + i)^n", "C0 × i × n", "C0 / (1 + i)^n"], bonne: 1, explication: "Le capital est multiplié par (1 + i) à chaque période." },
      { q: "10 000 DH à 10 % pendant 2 ans en intérêt composé deviennent :", choix: ["12 000 DH", "12 100 DH", "11 000 DH", "12 210 DH"], bonne: 1, explication: "10 000 × 1,1² = 12 100 DH." },
      { q: "Le taux mensuel équivalent à 12 % l'an est :", choix: ["1 %", "Environ 0,949 %", "Environ 1,06 %", "12 %"], bonne: 1, explication: "1,12^(1/12) − 1 ≈ 0,949 %." },
      { q: "Un taux nominal de 8 % capitalisé chaque semestre donne un taux effectif de :", choix: ["8 %", "8,16 %", "4 %", "16 %"], bonne: 1, explication: "1,04² − 1 = 8,16 %." },
      { q: "Selon la règle des 72, à 9 % un capital double en environ :", choix: ["6 ans", "8 ans", "9 ans", "12 ans"], bonne: 1, explication: "72 / 9 = 8 ans." },
      { q: "La durée n se calcule par :", choix: ["n = (Cn − C0) / (C0 i)", "n = ln(Cn / C0) / ln(1 + i)", "n = Cn / C0", "n = i / ln 2"], bonne: 1, explication: "On passe aux logarithmes dans Cn = C0 (1 + i)^n." },
      { q: "Pour une durée non entière, la solution rationnelle :", choix: ["Utilise un exposant fractionnaire", "Capitalise la partie entière puis applique l'intérêt simple à la fraction", "Ignore la fraction", "Utilise le taux proportionnel sur toute la durée"], bonne: 1, explication: "La solution commerciale, elle, utilise l'exposant fractionnaire." },
      { q: "À taux nominal égal, une capitalisation mensuelle rapporte :", choix: ["Moins qu'une capitalisation annuelle", "Plus qu'une capitalisation annuelle", "Autant", "Rien"], bonne: 1, explication: "Les intérêts produisent des intérêts plus tôt." },
      { q: "Taux successifs de 3 %, 4 % et 5 % sur 3 ans : le coefficient multiplicateur est :", choix: ["1,12", "1,03 × 1,04 × 1,05 ≈ 1,1248", "1,04³", "1,05³"], bonne: 1, explication: "On multiplie les coefficients de chaque période." },
      { q: "L'intérêt de la 3e année d'un placement de 20 000 DH à 5 % est :", choix: ["1 000 DH", "1 102,50 DH", "1 050 DH", "3 000 DH"], bonne: 1, explication: "Capital au début de la 3e année : 20 000 × 1,05² = 22 050 ; intérêt : 22 050 × 0,05 = 1 102,50 DH." },
    ],
  },

  4: {
    titre: "L'actualisation",
    description: "Actualisation : valeur actuelle, escompte à intérêts composés, équivalence de capitaux, échéance moyenne et renégociation de dettes, exercices corrigés.",
    resume: md`
## L'essentiel — L'actualisation

- **Actualiser**, c'est ramener une somme future à aujourd'hui : $C_0 = C_n\,(1 + i)^{-n}$. C'est l'inverse de la capitalisation.
- Le **facteur d'actualisation** $(1+i)^{-n}$ est inférieur à 1 et diminue quand le taux ou la durée augmentent.
- Le **taux d'actualisation** reflète le taux sans risque, l'inflation et une prime de risque.
- **Escompte à intérêts composés** : $E = C_n\,[1 - (1+i)^{-n}]$ (escompte rationnel).
- **Équivalence** : mêmes valeurs actuelles à une date donnée ; à intérêts composés, l'équivalence vaut **à toute date**.
- Capital unique équivalent : $C(1+i)^{-n} = \sum C_k (1+i)^{-n_k}$ ; date inconnue : $n = \dfrac{\ln(C / \sum C_k(1+i)^{-n_k})}{\ln(1+i)}$.
- **Échéance moyenne** (montant = somme des nominaux) : dépend du taux en intérêt composé.
- Méthode : **axe du temps**, date d'équivalence commode, égalité ancien = nouveau échéancier.
`,
    exercices: md`
### Exercice 2 — Quelle offre accepter ?

Un commerçant de Meknès vend son fonds de commerce. Il reçoit trois propositions :
- A : 200 000 DH comptant ;
- B : 230 000 DH payables dans 2 ans ;
- C : trois versements de 80 000 DH à la fin de chacune des trois prochaines années.

1. Classez les offres au taux d'actualisation de 7 %.
2. Même question au taux de 10 %. Conclusion ?

<details><summary>Voir le corrigé</summary>

**1) Au taux de 7 %**
- A : **200 000 DH** ;
- B : $230\,000 \times 1{,}07^{-2} \approx$ **200 890,91 DH** ;
- C : $80\,000 \times (1{,}07^{-1} + 1{,}07^{-2} + 1{,}07^{-3}) = 80\,000 \times 2{,}624316 \approx$ **209 945,28 DH**.

Classement : **C > B > A**.

**2) Au taux de 10 %**
- A : 200 000 DH ; B : $230\,000 \times 1{,}1^{-2} \approx 190\,082{,}64$ DH ; C : $80\,000 \times 2{,}486852 \approx 198\,948{,}16$ DH.

Classement : **A > C > B**. Plus le taux d'actualisation est élevé, plus les sommes lointaines perdent de la valeur : le choix dépend du taux, c'est-à-dire de ce que le vendeur pourrait obtenir en plaçant l'argent reçu comptant.

</details>

### Exercice 3 — Étaler une dette

Une dette de 150 000 DH payable dans 3 ans est remplacée par trois versements égaux à la fin de chacune des trois prochaines années, au taux de 9 %.

1. Calculez le montant de chaque versement.
2. Vérifiez l'équivalence à la date 3.

<details><summary>Voir le corrigé</summary>

**1)** En valeur actuelle : $150\,000 \times 1{,}09^{-3} = X\,(1{,}09^{-1} + 1{,}09^{-2} + 1{,}09^{-3})$, soit $115\,827{,}52 = 2{,}531295\,X$, d'où $X \approx \mathbf{45\,758{,}21\ DH}$.

**2)** À la date 3 : $45\,758{,}21 \times (1{,}09^2 + 1{,}09 + 1) = 45\,758{,}21 \times 3{,}2781 \approx 150\,000$ DH ✔. Le total versé ($3 \times 45\,758{,}21 = 137\,274{,}63$ DH) est inférieur à 150 000 DH, car l'entreprise paie **plus tôt** que prévu.

</details>
`,
    qcm: [
      { q: "La valeur actuelle d'un capital Cn disponible dans n années est :", choix: ["Cn (1 + i)^n", "Cn (1 + i)^−n", "Cn (1 − i n)", "Cn × i × n"], bonne: 1, explication: "Actualiser, c'est diviser par (1 + i)^n." },
      { q: "Valeur actuelle de 121 000 DH payables dans 2 ans au taux de 10 % ?", choix: ["100 000 DH", "110 000 DH", "96 800 DH", "146 410 DH"], bonne: 0, explication: "121 000 / 1,1² = 100 000 DH." },
      { q: "Quand le taux d'actualisation augmente, la valeur actuelle d'une somme future :", choix: ["Augmente", "Diminue", "Ne change pas", "Double"], bonne: 1, explication: "Le facteur (1 + i)^−n diminue." },
      { q: "À intérêts composés, deux capitaux équivalents à une date sont :", choix: ["Équivalents seulement à cette date", "Équivalents à toute autre date", "Toujours égaux en nominal", "Jamais équivalents"], bonne: 1, explication: "C'est une propriété de l'intérêt composé." },
      { q: "L'escompte à intérêts composés d'une créance Cn est :", choix: ["Cn × i × n", "Cn [1 − (1 + i)^−n]", "Cn (1 + i)^n", "Cn / n"], bonne: 1, explication: "Différence entre le nominal et la valeur actuelle." },
      { q: "Remplacer une dette par un paiement plus tardif conduit à un montant :", choix: ["Plus faible", "Plus élevé", "Identique", "Nul"], bonne: 1, explication: "Le créancier est rémunéré pour le délai." },
      { q: "Pour comparer des sommes disponibles à des dates différentes, il faut :", choix: ["Les additionner directement", "Les ramener à une même date", "Comparer les nominaux", "Les diviser par la durée"], bonne: 1, explication: "On actualise ou on capitalise à une date commune." },
      { q: "Le facteur d'actualisation 1,08^−3 vaut environ :", choix: ["1,2597", "0,7938", "0,92", "0,76"], bonne: 1, explication: "1 / 1,259712 ≈ 0,7938." },
      { q: "Le taux d'actualisation reflète notamment :", choix: ["Le chiffre d'affaires", "Le taux sans risque, l'inflation et une prime de risque", "Le taux de TVA", "Le nombre d'années"], bonne: 1, explication: "C'est le prix du temps et du risque." },
      { q: "À intérêts composés, l'échéance moyenne :", choix: ["Est indépendante du taux", "Dépend légèrement du taux", "Est toujours égale à la moyenne simple des échéances", "N'existe pas"], bonne: 1, explication: "Contrairement au cas de l'intérêt simple." },
    ],
  },

  5: {
    titre: "Les annuités constantes : valeur acquise",
    description: "Valeur acquise d'une suite d'annuités constantes : formule, constitution d'un capital, calcul de n et de i, annuités de début de période, exercices corrigés.",
    resume: md`
## L'essentiel — Annuités constantes : valeur acquise

- **Annuités** : versements à intervalles réguliers (année, semestre, mois) ; par défaut en **fin de période**.
- **Valeur acquise** à la date du dernier versement : $V_n = a \times \dfrac{(1+i)^n - 1}{i}$ (somme d'une suite géométrique).
- **Versement pour constituer un capital** : $a = V_n \times \dfrac{i}{(1+i)^n - 1}$ (épargne, fonds d'amortissement).
- **Nombre de versements** : $n = \dfrac{\ln(1 + V_n i / a)}{\ln(1+i)}$ ; si $n$ n'est pas entier, dernier versement **réduit** ou versement **complémentaire**.
- **Taux** : par essais puis **interpolation linéaire**.
- **Début de période** : $V_n' = a(1+i) \times \dfrac{(1+i)^n - 1}{i}$.
- À une date ultérieure : multiplier par $(1+i)^p$.
- Progression géométrique de raison $(1+r)$ : $V_n = a\,\dfrac{(1+i)^n - (1+r)^n}{i - r}$.
- Toujours faire correspondre **période des versements** et **taux** (taux équivalent si besoin).
`,
    exercices: md`
### Exercice 2 — Le fonds de renouvellement d'une machine

Une conserverie de Safi devra remplacer dans 6 ans une machine dont le coût est estimé à 900 000 DH. Elle décide de constituer un fonds en plaçant chaque année la même somme, à 7 %.

1. Quelle somme doit-elle placer à la fin de chaque année ?
2. Même question si les versements ont lieu au début de chaque année (le fonds devant atteindre 900 000 DH à la fin de la 6ᵉ année).
3. Quel est le montant total des intérêts dans le premier cas ?

<details><summary>Voir le corrigé</summary>

**1)** $\dfrac{1{,}07^6 - 1}{0{,}07} = 7{,}153291$ ; $a = 900\,000 / 7{,}153291 \approx \mathbf{125\,816{,}22\ DH}$.

**2)** $a' = 900\,000 / (7{,}153291 \times 1{,}07) \approx \mathbf{117\,585{,}25\ DH}$ : chaque versement étant placé un an de plus, l'effort annuel est plus faible.

**3)** Versements : $6 \times 125\,816{,}22 = 754\,897{,}32$ DH ; intérêts : $900\,000 - 754\,897{,}32 = \mathbf{145\,102{,}68\ DH}$.

</details>

### Exercice 3 — Épargne indexée et épargne retraite

1. Un salarié verse 12 000 DH à la fin de la première année, puis augmente son versement de 3 % par an pendant 10 ans au total. Le placement rapporte 5 %. Calculez la valeur acquise et comparez avec 10 versements constants de 12 000 DH.
2. Une salariée de 35 ans verse 1 500 DH à la fin de chaque mois jusqu'à 60 ans (25 ans), au taux mensuel de 0,5 %. Quel capital aura-t-elle constitué ? Quelle part provient des intérêts ?

<details><summary>Voir le corrigé</summary>

**1)** $V = 12\,000 \times \dfrac{1{,}05^{10} - 1{,}03^{10}}{0{,}05 - 0{,}03} \approx \mathbf{170\,986{,}95\ DH}$. Avec des versements constants : $12\,000 \times \dfrac{1{,}05^{10} - 1}{0{,}05} \approx 150\,934{,}71$ DH. L'indexation rapporte environ 20 052 DH de plus.

**2)** 300 mensualités : $V = 1\,500 \times \dfrac{1{,}005^{300} - 1}{0{,}005} \approx \mathbf{1\,039\,490{,}94\ DH}$. Versements : $300 \times 1\,500 = 450\,000$ DH ; intérêts : environ **589 491 DH**, soit 57 % du capital final. Sur une longue durée, les intérêts composés dépassent les versements eux-mêmes : c'est tout l'intérêt de commencer à épargner tôt.

</details>
`,
    qcm: [
      { q: "La valeur acquise de n annuités constantes de fin de période est :", choix: ["a × n", "a × [(1 + i)^n − 1] / i", "a × [1 − (1 + i)^−n] / i", "a (1 + i)^n"], bonne: 1, explication: "Somme d'une suite géométrique de raison (1 + i)." },
      { q: "Valeur acquise de 3 versements de 1 000 DH à 10 %, en fin d'année ?", choix: ["3 000 DH", "3 310 DH", "3 300 DH", "3 641 DH"], bonne: 1, explication: "1 000 × (1,1² + 1,1 + 1) = 1 000 × 3,31 = 3 310 DH." },
      { q: "Des annuités de début de période ont une valeur acquise :", choix: ["Égale à celle de fin de période", "Multipliée par (1 + i) par rapport à la fin de période", "Divisée par (1 + i)", "Toujours nulle"], bonne: 1, explication: "Chaque versement est capitalisé une période de plus." },
      { q: "Pour constituer un capital, le versement périodique est :", choix: ["Vn × i / [(1 + i)^n − 1]", "Vn / n", "Vn × (1 + i)^n", "Vn × i"], bonne: 0, explication: "On inverse la formule de la valeur acquise." },
      { q: "Des versements mensuels doivent être associés à :", choix: ["Un taux annuel", "Un taux mensuel", "N'importe quel taux", "Un taux semestriel"], bonne: 1, explication: "La période du taux doit être celle des versements." },
      { q: "Le taux d'une suite d'annuités se détermine :", choix: ["Par une formule directe", "Par essais puis interpolation linéaire", "En divisant la valeur acquise par n", "Avec la règle des 72"], bonne: 1, explication: "L'équation n'a pas de solution algébrique simple en i." },
      { q: "Si le calcul donne n = 14,3 versements :", choix: ["On garde 14,3 versements", "On prévoit 15 versements dont le dernier réduit (ou 14 et un complément)", "On arrondit à 14 sans ajustement", "Le problème est impossible"], bonne: 1, explication: "Le nombre de versements doit être entier." },
      { q: "La valeur acquise d'une suite d'annuités est toujours :", choix: ["Inférieure à n × a", "Supérieure à n × a (si i > 0)", "Égale à n × a", "Égale à a"], bonne: 1, explication: "Les versements produisent des intérêts." },
      { q: "Le fonds d'amortissement d'une entreprise sert à :", choix: ["Payer les salaires", "Constituer progressivement la somme nécessaire au renouvellement d'un équipement", "Rembourser un découvert", "Verser des dividendes"], bonne: 1, explication: "C'est une application de la valeur acquise." },
      { q: "Un capital constitué laissé placé p périodes après le dernier versement est multiplié par :", choix: ["(1 + i)^p", "(1 + i)^−p", "p × i", "1 + p"], bonne: 0, explication: "Il est capitalisé pendant p périodes supplémentaires." },
    ],
  },

  6: {
    titre: "Les annuités constantes : valeur actuelle",
    description: "Valeur actuelle d'annuités constantes : mensualité d'un crédit, capital empruntable, taux effectif, annuités différées et perpétuités, exercices corrigés.",
    resume: md`
## L'essentiel — Annuités constantes : valeur actuelle

- **Valeur actuelle** (une période avant le premier versement) : $V_0 = a \times \dfrac{1 - (1+i)^{-n}}{i}$ ; et $V_n = V_0(1+i)^n$.
- **Annuité de remboursement** d'un emprunt $V_0$ : $a = V_0 \times \dfrac{i}{1 - (1+i)^{-n}}$ ; **capital empruntable** pour une annuité $a$ donnée : $V_0 = a \times \dfrac{1-(1+i)^{-n}}{i}$.
- Crédits bancaires mensuels : **taux mensuel proportionnel** (taux annuel / 12) en général.
- **Coût du crédit** $= n \times a - V_0$ ; allonger la durée réduit la mensualité mais augmente le coût.
- **Taux effectif** : taux qui égalise la somme réellement reçue (après frais) et la valeur actuelle des remboursements ; par interpolation, puis annualisé (proportionnel ou actuariel) — principe du **TEG**.
- **Début de période** : $V_0' = a(1+i)\dfrac{1-(1+i)^{-n}}{i}$ ; **différé** de $d$ périodes : multiplier par $(1+i)^{-d}$.
- **Perpétuité** : $V_0 = a / i$ ; croissante au taux $g$ : $V_0 = a / (i - g)$ (Gordon-Shapiro).
`,
    exercices: md`
### Exercice 2 — Crédit immobilier : 15 ans ou 25 ans ?

Un couple de Tétouan emprunte 800 000 DH au taux annuel de 4,8 % (taux mensuel proportionnel), remboursables par mensualités constantes.

1. Calculez la mensualité et le coût total du crédit sur 15 ans, puis sur 25 ans.
2. Commentez le choix de la durée.

<details><summary>Voir le corrigé</summary>

Taux mensuel : $4{,}8\,\% / 12 = 0{,}4\,\%$.

**1)**

| Durée | Mensualité | Total remboursé | Coût du crédit |
|---|---:|---:|---:|
| 15 ans (180 mois) | $800\,000 / \dfrac{1 - 1{,}004^{-180}}{0{,}004} \approx 6\,243{,}32$ | 1 123 797 | **323 797** |
| 25 ans (300 mois) | $800\,000 / \dfrac{1 - 1{,}004^{-300}}{0{,}004} \approx 4\,583{,}98$ | 1 375 193 | **575 193** |

**2)** Passer de 15 à 25 ans réduit la mensualité d'environ 1 659 DH (− 27 %) mais augmente le coût du crédit de plus de 251 000 DH (+ 78 %). La durée longue n'est justifiée que si la mensualité de 15 ans dépasse la capacité de remboursement du ménage (les banques plafonnent en général les échéances à un tiers à 40 % des revenus).

</details>

### Exercice 3 — Crédit-bail et perpétuité

1. Une entreprise de Casablanca prend en crédit-bail une machine de 400 000 DH, remboursée par 16 loyers trimestriels constants payables **d'avance** (le premier à la signature), au taux trimestriel de 2 %. On néglige la valeur résiduelle. Calculez le loyer trimestriel et le coût total du financement.
2. Une association veut financer indéfiniment un prix annuel de 12 000 DH, le premier dans un an, avec un placement à 4 %. Quel capital doit-elle réunir ? Et si le prix doit augmenter de 2 % par an ?

<details><summary>Voir le corrigé</summary>

**1)** Loyers de début de période : $400\,000 = L \times 1{,}02 \times \dfrac{1 - 1{,}02^{-16}}{0{,}02} = L \times 1{,}02 \times 13{,}577709$, d'où $L \approx \mathbf{28\,882{,}40\ DH}$. Coût : $16 \times 28\,882{,}40 - 400\,000 \approx \mathbf{62\,118{,}44\ DH}$.

**2)** Perpétuité constante : $12\,000 / 0{,}04 = \mathbf{300\,000\ DH}$. Perpétuité croissante : $12\,000 / (0{,}04 - 0{,}02) = \mathbf{600\,000\ DH}$ : la croissance double le capital nécessaire.

</details>
`,
    qcm: [
      { q: "La valeur actuelle de n annuités constantes de fin de période est :", choix: ["a × [(1 + i)^n − 1] / i", "a × [1 − (1 + i)^−n] / i", "a × n", "a / i"], bonne: 1, explication: "On actualise chaque versement et on somme la suite géométrique." },
      { q: "La valeur actuelle est calculée :", choix: ["À la date du dernier versement", "Une période avant le premier versement", "À la date du premier versement", "Au milieu de la durée"], bonne: 1, explication: "C'est la date d'origine de l'emprunt." },
      { q: "Un taux annuel de 6 % donne un taux mensuel proportionnel de :", choix: ["0,6 %", "0,5 %", "0,487 %", "6 %"], bonne: 1, explication: "6 % / 12 = 0,5 %." },
      { q: "Allonger la durée d'un crédit, à taux égal :", choix: ["Augmente la mensualité et le coût", "Diminue la mensualité et augmente le coût total", "Diminue le coût total", "Ne change rien"], bonne: 1, explication: "Les intérêts courent plus longtemps." },
      { q: "Le coût total d'un crédit est :", choix: ["La mensualité", "n × mensualité − capital emprunté", "Le capital emprunté", "Le taux × la durée"], bonne: 1, explication: "C'est le total des intérêts payés." },
      { q: "Des frais de dossier prélevés au départ :", choix: ["Diminuent le taux effectif", "Augmentent le taux effectif", "N'ont pas d'effet", "Réduisent les mensualités"], bonne: 1, explication: "L'emprunteur reçoit moins pour les mêmes remboursements." },
      { q: "La valeur actuelle d'une rente perpétuelle de 6 000 DH par an à 5 % est :", choix: ["30 000 DH", "120 000 DH", "300 000 DH", "6 300 DH"], bonne: 1, explication: "6 000 / 0,05 = 120 000 DH." },
      { q: "Pour une suite d'annuités dont le premier versement a lieu dans 4 ans, la formule usuelle donne la valeur à la date :", choix: ["0", "3", "4", "n"], bonne: 1, explication: "Une période avant le premier versement ; il faut ensuite actualiser de 3 périodes." },
      { q: "Des loyers payables d'avance ont une valeur actuelle :", choix: ["Plus faible que des loyers de fin de période", "Multipliée par (1 + i) par rapport à la fin de période", "Identique", "Nulle"], bonne: 1, explication: "Chaque loyer est payé une période plus tôt." },
      { q: "La formule de Gordon-Shapiro V0 = a / (i − g) suppose :", choix: ["g > i", "g < i", "g = i", "i = 0"], bonne: 1, explication: "Sinon la valeur actuelle serait infinie." },
    ],
  },

  7: {
    titre: "Les emprunts indivis : amortissements et annuités constants",
    description: "Emprunts indivis : tableaux d'amortissement à amortissements constants ou annuités constantes, relations entre amortissements, capital restant dû.",
    resume: md`
## L'essentiel — Les emprunts indivis

- Emprunt **indivis** : un seul prêteur. Chaque annuité = **intérêt + amortissement** : $a_k = I_k + A_k$, avec $I_k = C_{k-1} \times i$ (capital restant dû en début de période).
- Contrôles : $\sum A_k = V_0$ ; dernier capital restant dû **nul** ; $\sum a_k = V_0 + \sum I_k$.
- **Amortissements constants** : $A = V_0 / n$ ; annuités **décroissantes** (progression arithmétique de raison $-A\,i$) ; total des intérêts $= V_0\,i\,\dfrac{n+1}{2}$.
- **Annuités constantes** : $a = V_0\,\dfrac{i}{1 - (1+i)^{-n}}$ ; amortissements **croissants** en progression **géométrique** : $A_{k+1} = A_k(1+i)$.
- $A_1 = a - V_0\,i = V_0\,\dfrac{i}{(1+i)^n - 1}$ ; $A_n = \dfrac{a}{1+i}$.
- **Capital restant dû** après $p$ annuités : $C_p = a\,\dfrac{1 - (1+i)^{-(n-p)}}{i}$.
- Amortissements constants : plus lourds au début, moins d'intérêts ; annuités constantes : charge régulière, plus d'intérêts. Même valeur actuelle au même taux.
`,
    exercices: md`
### Exercice 2 — Reconstituer un emprunt à partir de deux amortissements

Un emprunt remboursable par 8 annuités constantes présente un premier amortissement de 40 000 DH et un troisième amortissement de 46 656 DH.

1. Calculez le taux de l'emprunt.
2. Calculez le montant emprunté et l'annuité.
3. Calculez le dernier amortissement.

<details><summary>Voir le corrigé</summary>

**1)** $A_3 = A_1 (1+i)^2$, donc $(1+i)^2 = 46\,656 / 40\,000 = 1{,}1664$, d'où $1 + i = 1{,}08$ et $i = \mathbf{8\,\%}$.

**2)** $V_0 = \sum A_k = A_1 \times \dfrac{1{,}08^8 - 1}{0{,}08} = 40\,000 \times 10{,}636628 \approx \mathbf{425\,465{,}11\ DH}$. Annuité : $a = A_1 + V_0\,i = 40\,000 + 34\,037{,}21 = \mathbf{74\,037{,}21\ DH}$ (vérification : $425\,465{,}11 \times 0{,}08 / (1 - 1{,}08^{-8}) \approx 74\,037{,}21$ ✔).

**3)** $A_8 = A_1 \times 1{,}08^7 \approx 40\,000 \times 1{,}713824 \approx \mathbf{68\,552{,}97\ DH}$, ou $a / 1{,}08 \approx 68\,552{,}97$ DH ✔.

</details>

### Exercice 3 — Les premières mensualités d'un crédit à la consommation

Un crédit de 120 000 DH est remboursable en 36 mensualités constantes au taux mensuel de 0,75 %.

1. Calculez la mensualité.
2. Présentez les trois premières lignes du tableau d'amortissement.
3. Calculez le capital restant dû après la 12ᵉ mensualité, sans construire le tableau.

<details><summary>Voir le corrigé</summary>

**1)** $m = 120\,000 \times \dfrac{0{,}0075}{1 - 1{,}0075^{-36}} \approx \mathbf{3\,815{,}97\ DH}$.

**2)**

| Mois | Capital début | Intérêt | Amortissement | Mensualité | Capital fin |
|:--:|---:|---:|---:|---:|---:|
| 1 | 120 000,00 | 900,00 | 2 915,97 | 3 815,97 | 117 084,03 |
| 2 | 117 084,03 | 878,13 | 2 937,84 | 3 815,97 | 114 146,19 |
| 3 | 114 146,19 | 856,10 | 2 959,87 | 3 815,97 | 111 186,32 |

Contrôle : $2\,937{,}84 \approx 2\,915{,}97 \times 1{,}0075$ ✔.

**3)** Il reste 24 mensualités : $C_{12} = 3\,815{,}97 \times \dfrac{1 - 1{,}0075^{-24}}{0{,}0075} \approx \mathbf{83\,528{,}33\ DH}$. Après un an, l'emprunteur n'a remboursé qu'environ 36 472 DH de capital sur 45 792 DH versés : au début d'un crédit, les mensualités sont surtout composées d'intérêts.

</details>
`,
    qcm: [
      { q: "Dans un emprunt indivis, l'intérêt de la période k est calculé sur :", choix: ["Le capital initial", "Le capital restant dû en début de période", "L'annuité", "Le capital restant dû en fin de période"], bonne: 1, explication: "I_k = C_(k−1) × i." },
      { q: "Emprunt de 300 000 DH sur 5 ans par amortissements constants : l'amortissement annuel est :", choix: ["75 000 DH", "60 000 DH", "300 000 DH", "50 000 DH"], bonne: 1, explication: "300 000 / 5 = 60 000 DH." },
      { q: "Avec des amortissements constants, les annuités sont :", choix: ["Constantes", "Décroissantes", "Croissantes", "Nulles"], bonne: 1, explication: "L'intérêt baisse chaque année avec le capital restant dû." },
      { q: "Avec des annuités constantes, les amortissements :", choix: ["Sont constants", "Croissent en progression géométrique de raison (1 + i)", "Décroissent", "Croissent en progression arithmétique"], bonne: 1, explication: "A_(k+1) = A_k (1 + i)." },
      { q: "Le dernier amortissement d'un emprunt à annuités constantes est égal à :", choix: ["a × (1 + i)", "a / (1 + i)", "V0 / n", "a − V0 i"], bonne: 1, explication: "Le dernier intérêt porte sur A_n lui-même : a = A_n (1 + i)." },
      { q: "Le premier amortissement d'un emprunt à annuités constantes est :", choix: ["a − V0 × i", "a + V0 × i", "V0 / n", "a / n"], bonne: 0, explication: "La première annuité paie d'abord l'intérêt sur V0." },
      { q: "Le capital restant dû après p annuités constantes est égal à :", choix: ["V0 − p × a", "La valeur actuelle des n − p annuités restantes", "p × A1", "V0 (1 + i)^p"], bonne: 1, explication: "C_p = a [1 − (1 + i)^−(n−p)] / i." },
      { q: "Emprunt de 100 000 DH, 4 ans, 10 %, amortissements constants. Première annuité ?", choix: ["25 000 DH", "35 000 DH", "31 547 DH", "10 000 DH"], bonne: 1, explication: "Amortissement 25 000 + intérêt 10 000 = 35 000 DH." },
      { q: "Au même taux, le total des intérêts est plus élevé avec :", choix: ["Les amortissements constants", "Les annuités constantes", "Les deux sont égaux", "Cela dépend du montant"], bonne: 1, explication: "Le capital est remboursé plus lentement au début." },
      { q: "La somme de tous les amortissements d'un emprunt est égale :", choix: ["Au total des annuités", "Au capital emprunté", "Au total des intérêts", "À la dernière annuité"], bonne: 1, explication: "Les amortissements remboursent le capital." },
    ],
  },

  8: {
    titre: "Le remboursement in fine et le choix d'investissement",
    description: "Emprunt in fine et fonds d'amortissement, puis choix d'investissement : VAN, TRI, délai de récupération et indice de profitabilité, avec exercices corrigés.",
    resume: md`
## L'essentiel — In fine et choix d'investissement

- **In fine** : intérêts $V_0\,i$ chaque période, capital remboursé en totalité à la dernière échéance ; total des intérêts $= n\,V_0\,i$ (le plus coûteux, mais trésorerie ménagée).
- In fine + **fonds d'amortissement** au taux $i'$ : effort annuel $= V_0\,i + V_0\,\dfrac{i'}{(1+i')^n - 1}$ ; si $i' = i$, il est égal à l'annuité constante.
- Projet d'investissement : $I_0$ (investissement + BFR), flux nets $CF_k$, valeur résiduelle et récupération du BFR en fin de projet.
- **VAN** $= -I_0 + \sum CF_k(1+i)^{-k}$ : on accepte si **VAN > 0** ; entre projets exclusifs, la plus forte VAN.
- **TRI** : taux qui annule la VAN (essais + interpolation) ; on accepte si TRI > taux exigé.
- **Délai de récupération** (simple ou actualisé) : critère de liquidité et de risque, pas de rentabilité.
- **Indice de profitabilité** $IP = 1 + \text{VAN}/I_0$ : valeur créée par dirham investi.
- En cas de **conflit VAN / TRI**, on privilégie la **VAN** (hypothèse de réinvestissement au taux d'actualisation).
`,
    exercices: md`
### Exercice 2 — In fine et fonds d'amortissement

Une société emprunte 400 000 DH sur 4 ans au taux de 6 %, remboursables in fine. Elle constitue en parallèle un fonds d'amortissement par versements annuels de fin d'année, rémunéré à 6 %.

1. Présentez le tableau de l'emprunt in fine et le total des intérêts.
2. Calculez le versement annuel au fonds et l'effort annuel total.
3. Comparez avec l'annuité constante du même emprunt. Que constatez-vous ?

<details><summary>Voir le corrigé</summary>

**1)**

| Année | Capital dû | Intérêt | Amortissement | Annuité |
|:--:|---:|---:|---:|---:|
| 1 | 400 000 | 24 000 | 0 | 24 000 |
| 2 | 400 000 | 24 000 | 0 | 24 000 |
| 3 | 400 000 | 24 000 | 0 | 24 000 |
| 4 | 400 000 | 24 000 | 400 000 | 424 000 |

Total des intérêts : **96 000 DH**.

**2)** Versement au fonds : $400\,000 \times \dfrac{0{,}06}{1{,}06^4 - 1} \approx 91\,436{,}60$ DH. Effort annuel : $24\,000 + 91\,436{,}60 = \mathbf{115\,436{,}60\ DH}$.

**3)** Annuité constante : $400\,000 \times \dfrac{0{,}06}{1 - 1{,}06^{-4}} \approx 115\,436{,}60$ DH : **exactement le même effort**. Lorsque le fonds rapporte le même taux que l'emprunt, l'in fine accompagné d'un fonds équivaut à un emprunt à annuités constantes. Si le fonds rapporte moins, l'in fine devient plus coûteux.

</details>

### Exercice 3 — Un projet avec BFR et valeur résiduelle

Une huilerie de Taounate envisage une nouvelle ligne de trituration : investissement de 800 000 DH et besoin en fonds de roulement de 100 000 DH au départ (récupéré à la fin), flux nets de 220 000 DH par an pendant 5 ans, valeur résiduelle nette de 50 000 DH à la fin de la 5ᵉ année. Taux d'actualisation : 9 %.

1. Recensez les flux et calculez la VAN et l'indice de profitabilité.
2. Sachant que la VAN vaut 2 115,04 DH à 11 % et − 21 835,21 DH à 12 %, calculez le TRI.
3. Le projet doit-il être accepté ?

<details><summary>Voir le corrigé</summary>

**1)** Date 0 : $-800\,000 - 100\,000 = -900\,000$ DH ; années 1 à 5 : $+220\,000$ DH ; année 5 : $+50\,000 + 100\,000 = +150\,000$ DH supplémentaires.

$$\text{VAN} = -900\,000 + 220\,000 \times 3{,}889651 + 150\,000 \times 1{,}09^{-5} \approx -900\,000 + 855\,723{,}28 + 97\,489{,}71 = \mathbf{53\,212{,}99\ DH}$$

$IP = 1 + 53\,212{,}99 / 900\,000 \approx \mathbf{1{,}059}$.

**2)** $TRI \approx 11\,\% + 1\,\% \times \dfrac{2\,115{,}04}{2\,115{,}04 + 21\,835{,}21} \approx \mathbf{11{,}09\,\%}$.

**3)** VAN positive, TRI (11,09 %) supérieur au taux exigé (9 %) : le projet est **rentable** et doit être accepté. La marge de sécurité est toutefois modeste : une baisse des flux d'environ 6 % suffirait à annuler la VAN ($53\,213 / 855\,723 \approx 6{,}2\,\%$).

</details>
`,
    qcm: [
      { q: "Dans un emprunt in fine, les annuités des premières années comprennent :", choix: ["Intérêt et amortissement constant", "Uniquement les intérêts", "Uniquement le capital", "Rien"], bonne: 1, explication: "Le capital est remboursé en totalité à la dernière échéance." },
      { q: "Le total des intérêts d'un emprunt in fine de V0 sur n années au taux i est :", choix: ["V0 × i", "n × V0 × i", "V0 (1 + i)^n", "V0 / n"], bonne: 1, explication: "Le capital reste dû en totalité chaque année." },
      { q: "Un projet est acceptable si sa VAN est :", choix: ["Négative", "Positive", "Égale à l'investissement", "Inférieure au TRI"], bonne: 1, explication: "Il rapporte alors plus que le taux exigé." },
      { q: "Le TRI est le taux pour lequel :", choix: ["La VAN est maximale", "La VAN est nulle", "Le délai de récupération est nul", "L'IP vaut 0"], bonne: 1, explication: "C'est la rentabilité propre du projet." },
      { q: "Investissement 100 000 DH, flux actualisés totaux 120 000 DH. Indice de profitabilité ?", choix: ["0,2", "1,2", "20 000", "0,83"], bonne: 1, explication: "120 000 / 100 000 = 1,2." },
      { q: "Le délai de récupération mesure surtout :", choix: ["La rentabilité", "La liquidité et le risque du projet", "Le coût du capital", "La valeur résiduelle"], bonne: 1, explication: "Il ignore les flux postérieurs au délai." },
      { q: "En cas de conflit entre VAN et TRI pour des projets exclusifs, on privilégie :", choix: ["Le TRI", "La VAN", "Le délai de récupération", "Le projet le moins cher"], bonne: 1, explication: "La VAN mesure directement la création de valeur." },
      { q: "Le BFR investi au début d'un projet est en général :", choix: ["Perdu", "Récupéré en fin de projet", "Amorti chaque année", "Ignoré"], bonne: 1, explication: "Il est récupéré lorsque l'activité cesse." },
      { q: "Si le taux d'actualisation augmente, la VAN d'un projet classique :", choix: ["Augmente", "Diminue", "Ne change pas", "Devient égale au TRI"], bonne: 1, explication: "Les flux futurs sont plus fortement actualisés." },
      { q: "Un projet a une VAN de 0 au taux de 12 %. Son TRI est :", choix: ["0 %", "12 %", "Supérieur à 12 %", "Impossible à déterminer"], bonne: 1, explication: "Par définition, le TRI annule la VAN." },
    ],
  },

  9: {
    titre: "Les emprunts obligataires",
    description: "Emprunts obligataires : nominal, prix d'émission et de remboursement, coupon, remboursement in fine ou par séries, rendement actuariel, prix de marché.",
    resume: md`
## L'essentiel — Les emprunts obligataires

- Emprunt **divisé en titres** (obligations) souscrits par de nombreux prêteurs ; au Maroc : bons du Trésor, obligations d'entreprises visées par l'**AMMC**.
- Vocabulaire : nominal $C$, prix d'émission $E$ (prime d'émission $C - E$), prix de remboursement $R$ (prime de remboursement $R - C$), taux nominal $i$, **coupon $c = C \times i$** (toujours sur le nominal).
- Remboursement **in fine** (coupons puis remboursement total à l'échéance) ou **par séries** (tirage au sort), à annuités ou à amortissements constants.
- Séries à annuités constantes (au pair) : $a = NC\,\dfrac{i}{1-(1+i)^{-n}}$, $N_1 = N\,\dfrac{i}{(1+i)^n - 1}$, $N_{k+1} = N_k(1+i)$ ; **arrondir** les $N_k$ avec $\sum N_k = N$ ; annuités effectives voisines de l'annuité théorique.
- **Taux de rendement actuariel** du souscripteur : $E = c\,\dfrac{1-(1+t)^{-n}}{t} + R(1+t)^{-n}$ ; primes → rendement > taux nominal.
- **Coût actuariel** de l'émetteur : même équation avec la somme nette encaissée (après frais) : coût > rendement du souscripteur.
- **Prix de marché** : valeur actuelle des flux restants au taux du marché ; **les prix baissent quand les taux montent** (risque de taux).
`,
    exercices: md`
### Exercice 2 — Remboursement par séries égales

Une société émet 6 000 obligations de nominal 1 000 DH, au taux de 7 %, remboursables au pair en 4 ans, par séries **égales** (même nombre d'obligations chaque année).

1. Combien d'obligations sont remboursées chaque année ?
2. Présentez le tableau d'amortissement de l'emprunt.

<details><summary>Voir le corrigé</summary>

**1)** $6\,000 / 4 = \mathbf{1\,500}$ obligations par an.

**2)** Coupon : 70 DH par obligation vivante.

| Année | Obligations vivantes | Coupons | Obligations remboursées | Remboursement | Annuité |
|:--:|---:|---:|---:|---:|---:|
| 1 | 6 000 | 420 000 | 1 500 | 1 500 000 | 1 920 000 |
| 2 | 4 500 | 315 000 | 1 500 | 1 500 000 | 1 815 000 |
| 3 | 3 000 | 210 000 | 1 500 | 1 500 000 | 1 710 000 |
| 4 | 1 500 | 105 000 | 1 500 | 1 500 000 | 1 605 000 |
| **Total** | | **1 050 000** | **6 000** | **6 000 000** | **7 050 000** |

Les annuités décroissent de $1\,500 \times 70 = 105\,000$ DH par an, comme dans un emprunt indivis à amortissements constants.

</details>

### Exercice 3 — Obligation remboursée au-dessus du pair

Une obligation de nominal 1 000 DH est émise au pair, au taux de 6 %, remboursable in fine dans 4 ans au prix de 1 050 DH.

1. Calculez le taux de rendement actuariel (la valeur actuelle des flux est de 1 000,83 DH à 7,1 % et de 997,40 DH à 7,2 %).
2. Un an plus tard, juste après le premier coupon, le taux du marché est tombé à 5 %. Quel est le prix de l'obligation ?

<details><summary>Voir le corrigé</summary>

**1)** On cherche $t$ tel que $1\,000 = 60 \times \dfrac{1 - (1+t)^{-4}}{t} + 1\,050\,(1+t)^{-4}$.
$t \approx 7{,}1\,\% + 0{,}1\,\% \times \dfrac{1\,000{,}83 - 1\,000}{1\,000{,}83 - 997{,}40} \approx \mathbf{7{,}12\,\%}$. La prime de remboursement de 50 DH ajoute plus d'un point au taux nominal.

**2)** Il reste 3 coupons de 60 DH et le remboursement de 1 050 DH :
$P = 60 \times \dfrac{1 - 1{,}05^{-3}}{0{,}05} + 1\,050 \times 1{,}05^{-3} \approx \mathbf{1\,070{,}42\ DH}$. Les taux ont baissé : le prix de l'obligation monte.

</details>
`,
    qcm: [
      { q: "Le coupon d'une obligation est calculé sur :", choix: ["Le prix d'émission", "La valeur nominale", "Le prix de remboursement", "Le prix de marché"], bonne: 1, explication: "c = C × i." },
      { q: "Une obligation émise à 970 DH pour un nominal de 1 000 DH présente :", choix: ["Une prime de remboursement de 30 DH", "Une prime d'émission de 30 DH", "Un coupon de 30 DH", "Une perte de 30 DH pour le souscripteur"], bonne: 1, explication: "Émission au-dessous du pair." },
      { q: "Une prime de remboursement a pour effet :", choix: ["De baisser le rendement du souscripteur", "D'augmenter le rendement du souscripteur au-dessus du taux nominal", "De supprimer les coupons", "De réduire le nominal"], bonne: 1, explication: "Le souscripteur reçoit plus que le nominal à l'échéance." },
      { q: "Dans un remboursement par séries à annuités constantes, les nombres d'obligations amorties :", choix: ["Sont égaux chaque année", "Croissent en progression géométrique de raison (1 + i)", "Décroissent", "Sont tirés au hasard sans règle"], bonne: 1, explication: "Comme les amortissements d'un emprunt indivis." },
      { q: "Si les taux du marché augmentent, le prix des obligations existantes :", choix: ["Augmente", "Baisse", "Reste égal au nominal", "Double"], bonne: 1, explication: "Leurs coupons deviennent relativement moins attractifs." },
      { q: "Le coût actuariel pour l'émetteur est en général :", choix: ["Inférieur au rendement du souscripteur", "Supérieur au rendement du souscripteur, à cause des frais d'émission", "Égal au taux nominal", "Nul"], bonne: 1, explication: "L'émetteur encaisse moins que ce que paie le souscripteur." },
      { q: "Au Maroc, l'autorité qui vise les prospectus d'émission d'obligations est :", choix: ["La DGI", "L'AMMC", "Le HCP", "L'OMPIC"], bonne: 1, explication: "Autorité Marocaine du Marché des Capitaux." },
      { q: "10 000 obligations de 500 DH au taux de 4 % : la charge annuelle de coupons est :", choix: ["20 000 DH", "200 000 DH", "5 000 000 DH", "2 000 DH"], bonne: 1, explication: "10 000 × 500 × 4 % = 200 000 DH." },
      { q: "Une obligation émise, remboursée au pair et sans frais a un taux de rendement actuariel :", choix: ["Supérieur au taux nominal", "Égal au taux nominal", "Inférieur au taux nominal", "Nul"], bonne: 1, explication: "Sans prime, le rendement est le taux facial." },
      { q: "Les coupons d'une année portent sur :", choix: ["Toutes les obligations émises", "Les obligations encore vivantes en début d'année", "Les obligations remboursées", "Le prix de remboursement"], bonne: 1, explication: "Les titres déjà remboursés ne rapportent plus d'intérêt." },
    ],
  },
};

export default chapitres;
