// Mathématiques Financières (S2) — compléments par chapitre.
const md = String.raw;

export default {
  1: {
    titre: "L'intérêt simple",
    resume: md`
## L'essentiel — L'intérêt simple

- L'intérêt simple est calculé **uniquement sur le capital initial** : les intérêts ne produisent pas d'intérêts. Il sert pour les opérations de **court terme** (≤ 1 an).
- Formule de base : $I = C \times t \times n$ avec $n$ **en années**.
- Durée en mois : $I = \dfrac{C \times t \times n}{12}$ ; durée en jours : $I = \dfrac{C \times t \times n}{360}$ (année commerciale).
- **Valeur acquise** : $C_n = C + I = C(1 + t \times n)$.
- **Taux moyen** de plusieurs placements : $t_m = \dfrac{\sum C_i t_i n_i}{\sum C_i n_i}$ (c'est le taux unique qui donne le même intérêt total).
- Réflexes : convertir le taux en décimal (6 % = 0,06) et toujours exprimer la durée dans la même unité que le taux.
`,
    exercices: md`
### Exercice 2 — Taux moyen et capital initial

1. Un épargnant place 20 000 DH à 5 % pendant 60 jours, 30 000 DH à 6 % pendant 90 jours et 50 000 DH à 4 % pendant 120 jours. Calculez l'intérêt total puis le taux moyen de ces placements.
2. Un capital placé à 9 % pendant 100 jours a une valeur acquise de 51 250 DH. Retrouvez ce capital.

<details><summary>Voir le corrigé</summary>

**1)** Intérêts :

$$I_1 = \frac{20\,000 \times 0{,}05 \times 60}{360} = 166{,}67 \qquad I_2 = \frac{30\,000 \times 0{,}06 \times 90}{360} = 450 \qquad I_3 = \frac{50\,000 \times 0{,}04 \times 120}{360} = 666{,}67$$

Intérêt total $= 1\,283{,}33$ DH.

$$t_m = \frac{20\,000 \times 0{,}05 \times 60 + 30\,000 \times 0{,}06 \times 90 + 50\,000 \times 0{,}04 \times 120}{20\,000 \times 60 + 30\,000 \times 90 + 50\,000 \times 120} = \frac{462\,000}{9\,900\,000} \approx 4{,}67\%$$

**2)** $C \times \left(1 + 0{,}09 \times \dfrac{100}{360}\right) = C \times 1{,}025 = 51\,250 \Rightarrow C = 50\,000$ DH.

</details>
`,
    qcm: [
      { q: "En intérêt simple, les intérêts sont calculés sur :", choix: ["Le capital initial uniquement", "Le capital augmenté des intérêts déjà acquis", "La valeur acquise", "Le capital moins les intérêts"], bonne: 0, explication: "C'est ce qui distingue l'intérêt simple de l'intérêt composé." },
      { q: "10 000 DH placés à 6 % pendant 3 mois rapportent :", choix: ["1 800 DH", "600 DH", "150 DH", "50 DH"], bonne: 2, explication: "I = 10 000 × 0,06 × 3/12 = 150 DH." },
      { q: "Pour un calcul en jours, l'usage commercial retient une année de :", choix: ["365 jours", "360 jours", "366 jours", "12 mois de 31 jours"], bonne: 1, explication: "C'est l'année commerciale (méthode dite banquière)." },
      { q: "La valeur acquise en intérêt simple s'écrit :", choix: ["C(1 + t)^n", "C(1 + t × n)", "C × t × n", "C / (1 + t × n)"], bonne: 1, explication: "Cn = C + I = C + C·t·n = C(1 + t·n)." },
      { q: "Le taux moyen de plusieurs placements est :", choix: ["La moyenne simple des taux", "Le taux le plus élevé", "Le taux unique donnant le même intérêt total", "La somme des taux"], bonne: 2, explication: "t moyen = ΣCtn / ΣCn : c'est une moyenne pondérée par C × n." },
    ],
  },

  2: {
    titre: "L'escompte commercial",
    resume: md`
## L'essentiel — L'escompte commercial

- **Escompter** un effet, c'est le céder à la banque avant son échéance pour obtenir tout de suite des liquidités.
- **Escompte commercial** : intérêt simple calculé sur la **valeur nominale** $V$, du jour de la négociation à l'échéance : $e = \dfrac{V \times t \times n}{360}$.
- **Valeur actuelle** commerciale : $a = V - e$.
- **Agios** = escompte + commissions + TVA sur commissions ; **valeur nette** = $V$ − agios.
- **Taux réel d'escompte** : $t_r = \dfrac{\text{Agios} \times 360}{\text{Valeur nette} \times n}$ ; il est toujours **supérieur** au taux nominal.
- Deux effets sont **équivalents** à une date donnée s'ils ont, à cette date, la **même valeur actuelle** au même taux.
`,
    exercices: md`
### Exercice 2 — Remplacement d'un effet

Un commerçant doit payer un effet de 40 000 DH qui échoit dans 60 jours. Il demande à son fournisseur de le remplacer par un effet échéant dans 90 jours. Le taux d'escompte est de 9 %.

1. Calculez la valeur actuelle de l'effet initial.
2. Calculez la valeur nominale du nouvel effet.

<details><summary>Voir le corrigé</summary>

**1)** $e_1 = \dfrac{40\,000 \times 0{,}09 \times 60}{360} = 600$ DH, donc $a_1 = 40\,000 - 600 = 39\,400$ DH.

**2)** Équivalence : $a_2 = a_1$.

$$V_2 \left(1 - \frac{0{,}09 \times 90}{360}\right) = 39\,400 \Rightarrow V_2 = \frac{39\,400}{0{,}9775} \approx 40\,306{,}91 \text{ DH}$$

Le nouvel effet a une valeur nominale plus élevée : le fournisseur est rémunéré pour les 30 jours de délai supplémentaires.

</details>
`,
    qcm: [
      { q: "L'escompte commercial est calculé sur :", choix: ["La valeur actuelle", "La valeur nominale", "La valeur nette", "Les agios"], bonne: 1, explication: "e = V × t × n / 360, avec V la valeur nominale." },
      { q: "Un effet de 18 000 DH escompté à 10 % pour 60 jours donne un escompte de :", choix: ["300 DH", "1 800 DH", "180 DH", "30 DH"], bonne: 0, explication: "18 000 × 0,10 × 60 / 360 = 300 DH." },
      { q: "Les agios comprennent :", choix: ["L'escompte seulement", "L'escompte, les commissions et la TVA sur commissions", "La valeur nominale", "Uniquement la TVA"], bonne: 1, explication: "C'est la totalité des frais retenus par la banque." },
      { q: "Le taux réel d'escompte est :", choix: ["Toujours égal au taux nominal", "Toujours inférieur au taux nominal", "Toujours supérieur au taux nominal", "Sans lien avec les commissions"], bonne: 2, explication: "Il intègre les commissions et se rapporte à la valeur nette, plus faible." },
      { q: "Deux effets sont équivalents à une date si :", choix: ["Ils ont la même valeur nominale", "Ils ont la même échéance", "Ils ont la même valeur actuelle à cette date", "Ils ont le même tireur"], bonne: 2, explication: "L'équivalence se juge sur les valeurs actuelles, au même taux." },
    ],
  },

  3: {
    titre: "L'intérêt composé",
    resume: md`
## L'essentiel — L'intérêt composé

- Les intérêts de chaque période sont **ajoutés au capital** et produisent à leur tour des intérêts (capitalisation). Usage : **moyen et long terme**.
- **Valeur acquise** : $C_n = C_0 (1 + t)^n$.
- Intérêts produits : $I = C_n - C_0$.
- **Taux** : $t = \left(\dfrac{C_n}{C_0}\right)^{1/n} - 1$ ; **durée** : $n = \dfrac{\ln(C_n / C_0)}{\ln(1 + t)}$.
- Comparaison : pour $n < 1$ l'intérêt simple donne plus ; pour $n > 1$ l'intérêt composé donne plus ; pour $n = 1$ les deux sont égaux.
- Évolution **exponentielle** (composé) contre **linéaire** (simple).
`,
    exercices: md`
### Exercice 2 — Taux, comparaison et durée

Un capital de 80 000 DH, placé à intérêts composés pendant 5 ans, a une valeur acquise de 107 058 DH.

1. Calculez le taux annuel de placement.
2. Quelle serait la valeur acquise à intérêt simple, au même taux et sur la même durée ? Commentez.
3. Au même taux, combien de temps faut-il pour que ce capital atteigne 120 000 DH ?

<details><summary>Voir le corrigé</summary>

**1)** $t = \left(\dfrac{107\,058}{80\,000}\right)^{1/5} - 1 = (1{,}33823)^{0{,}2} - 1 \approx 0{,}06$, soit **6 %**.

**2)** $C_n = 80\,000 \times (1 + 0{,}06 \times 5) = 104\,000$ DH. L'intérêt composé rapporte $107\,058 - 104\,000 = 3\,058$ DH de plus : ce sont les « intérêts des intérêts ».

**3)** $n = \dfrac{\ln(120\,000 / 80\,000)}{\ln(1{,}06)} = \dfrac{\ln 1{,}5}{\ln 1{,}06} = \dfrac{0{,}4055}{0{,}0583} \approx 6{,}96$ ans, soit environ **7 ans**.

</details>
`,
    qcm: [
      { q: "En intérêts composés, la valeur acquise vaut :", choix: ["C0(1 + t·n)", "C0(1 + t)^n", "C0 × t × n", "C0(1 − t)^n"], bonne: 1, explication: "Chaque période, le capital est multiplié par (1 + t)." },
      { q: "10 000 DH placés 2 ans à 10 % composés deviennent :", choix: ["12 000 DH", "12 100 DH", "11 000 DH", "12 200 DH"], bonne: 1, explication: "10 000 × 1,1² = 12 100 DH." },
      { q: "Pour une durée supérieure à 1 an, l'intérêt composé donne :", choix: ["Moins que l'intérêt simple", "Autant que l'intérêt simple", "Plus que l'intérêt simple", "Cela dépend du capital"], bonne: 2, explication: "Les intérêts produisent eux-mêmes des intérêts." },
      { q: "La durée de placement se calcule avec :", choix: ["n = ln(Cn/C0) / ln(1 + t)", "n = (Cn − C0) / t", "n = Cn / C0", "n = t / ln(1 + t)"], bonne: 0, explication: "On passe par le logarithme pour isoler l'exposant." },
      { q: "L'intérêt composé s'utilise surtout pour :", choix: ["Les opérations de quelques jours", "L'escompte des effets", "Les opérations à moyen et long terme", "Le calcul de la TVA"], bonne: 2, explication: "Le court terme relève de l'intérêt simple." },
    ],
  },

  4: {
    titre: "L'actualisation",
    resume: md`
## L'essentiel — L'actualisation

- **Actualiser**, c'est ramener une somme future à sa valeur d'aujourd'hui : c'est l'inverse de la capitalisation.
- Formule : $C_0 = C_n (1 + t)^{-n}$.
- **Taux proportionnel** (intérêt simple) : $t_p = t / k$, avec $k$ le nombre de périodes par an.
- **Taux équivalent** (intérêt composé) : $t_e = (1 + t)^{1/k} - 1$. En intérêts composés, on utilise **toujours** le taux équivalent.
- Le taux proportionnel est légèrement **supérieur** au taux équivalent.
- **Taux réel** : $1 + t_{réel} = \dfrac{1 + t_{nominal}}{1 + \pi}$ (approximation : $t_{réel} \approx t_{nominal} - \pi$).
`,
    exercices: md`
### Exercice 2 — Choisir entre deux offres

1. Un client vous propose soit 85 000 DH aujourd'hui, soit 100 000 DH dans 3 ans. Avec un taux d'actualisation de 6 %, quelle offre choisir ?
2. Un placement rapporte 7 % par an alors que l'inflation est de 2,5 %. Calculez le taux réel.
3. Calculez le taux mensuel équivalent à un taux annuel de 12 %.

<details><summary>Voir le corrigé</summary>

**1)** $C_0 = \dfrac{100\,000}{(1{,}06)^3} = \dfrac{100\,000}{1{,}19102} \approx 83\,962$ DH. Comme $85\,000 > 83\,962$, il vaut mieux **recevoir 85 000 DH aujourd'hui**.

**2)** $t_{réel} = \dfrac{1{,}07}{1{,}025} - 1 \approx 0{,}0439$, soit **4,39 %** (l'approximation $7 - 2{,}5 = 4{,}5\%$ est proche).

**3)** $t_e = (1{,}12)^{1/12} - 1 \approx 0{,}00949$, soit **0,949 %** par mois (et non 1 %, qui est le taux proportionnel).

</details>
`,
    qcm: [
      { q: "La valeur actuelle d'une somme Cn disponible dans n années est :", choix: ["Cn(1 + t)^n", "Cn(1 + t)^−n", "Cn × t × n", "Cn − t"], bonne: 1, explication: "On divise par (1 + t)^n." },
      { q: "En intérêts composés, pour passer d'un taux annuel à un taux trimestriel, on utilise :", choix: ["Le taux proportionnel t/4", "Le taux équivalent (1 + t)^(1/4) − 1", "Le taux t × 4", "Le taux réel"], bonne: 1, explication: "Seul le taux équivalent donne la même valeur acquise." },
      { q: "Le taux mensuel proportionnel à 12 % par an est :", choix: ["1 %", "0,949 %", "12 %", "0,12 %"], bonne: 0, explication: "12 % / 12 = 1 %." },
      { q: "Plus le taux d'actualisation est élevé, plus la valeur actuelle est :", choix: ["Élevée", "Faible", "Inchangée", "Négative"], bonne: 1, explication: "On divise par un facteur (1 + t)^n plus grand." },
      { q: "Avec un taux nominal de 5 % et une inflation de 5 %, le taux réel est :", choix: ["10 %", "5 %", "0 %", "−5 %"], bonne: 2, explication: "1,05 / 1,05 − 1 = 0 : le pouvoir d'achat ne progresse pas." },
    ],
  },

  5: {
    titre: "Les annuités constantes : valeur acquise",
    resume: md`
## L'essentiel — Valeur acquise d'annuités constantes

- Une **annuité** est un versement effectué à intervalles réguliers ; on étudie ici des versements **constants** en **fin de période**.
- **Valeur acquise** juste après le dernier versement : $V_n = a \times \dfrac{(1 + t)^n - 1}{t}$ (somme d'une suite géométrique de raison $1 + t$).
- Versements en **début** de période : $V_n^{début} = V_n \times (1 + t)$.
- **Annuité** à verser pour atteindre un objectif : $a = \dfrac{V_n \times t}{(1 + t)^n - 1}$.
- La 1ʳᵉ annuité capitalise pendant $n - 1$ périodes, la dernière ne capitalise pas.
`,
    exercices: md`
### Exercice 2 — Nombre d'annuités

Une famille verse 10 000 DH à la fin de chaque année sur un compte rémunéré à 6 %. Elle souhaite disposer d'au moins 100 000 DH.

1. Déterminez le nombre minimal de versements.
2. Calculez la valeur acquise obtenue avec 8 puis avec 9 versements.

<details><summary>Voir le corrigé</summary>

**1)** On cherche $n$ tel que $10\,000 \times \dfrac{(1{,}06)^n - 1}{0{,}06} \geq 100\,000$, soit $(1{,}06)^n \geq 1{,}6$.

$$n \geq \frac{\ln 1{,}6}{\ln 1{,}06} = \frac{0{,}4700}{0{,}0583} \approx 8{,}07$$

Il faut donc **9 versements**.

**2)** $V_8 = 10\,000 \times \dfrac{(1{,}06)^8 - 1}{0{,}06} \approx 98\,975$ DH (insuffisant) ; $V_9 = 10\,000 \times \dfrac{(1{,}06)^9 - 1}{0{,}06} \approx 114\,913$ DH.

</details>
`,
    qcm: [
      { q: "La valeur acquise de n annuités constantes de fin de période est :", choix: ["a × [(1 + t)^n − 1] / t", "a × [1 − (1 + t)^−n] / t", "a × n", "a / t"], bonne: 0, explication: "C'est la somme d'une suite géométrique de raison (1 + t)." },
      { q: "Pour des versements en début de période, la valeur acquise est multipliée par :", choix: ["t", "(1 + t)", "n", "(1 + t)^n"], bonne: 1, explication: "Chaque versement capitalise une période de plus." },
      { q: "3 annuités de 1 000 DH à 10 % (fin de période) ont une valeur acquise de :", choix: ["3 000 DH", "3 300 DH", "3 310 DH", "3 641 DH"], bonne: 2, explication: "1 000 × (1,1³ − 1) / 0,1 = 3 310 DH." },
      { q: "La dernière annuité versée (fin de période) capitalise pendant :", choix: ["n périodes", "n − 1 périodes", "1 période", "0 période"], bonne: 3, explication: "La valeur acquise est calculée à la date du dernier versement." },
      { q: "Pour atteindre un capital Vn, l'annuité est :", choix: ["Vn × t / [(1 + t)^n − 1]", "Vn / n", "Vn × t", "Vn × (1 + t)^n"], bonne: 0, explication: "On isole a dans la formule de la valeur acquise." },
    ],
  },

  6: {
    titre: "Les annuités constantes : valeur actuelle",
    resume: md`
## L'essentiel — Valeur actuelle d'annuités constantes

- **Valeur actuelle**, une période avant le 1ᵉʳ versement : $V_0 = a \times \dfrac{1 - (1 + t)^{-n}}{t}$.
- C'est la base des **emprunts par annuités constantes** : le montant emprunté est la valeur actuelle des annuités futures.
- **Annuité** d'un emprunt : $a = \dfrac{V_0 \times t}{1 - (1 + t)^{-n}}$.
- **Rente perpétuelle** ($n \to \infty$) : $V_0 = \dfrac{a}{t}$.
- Lien utile : $V_n = V_0 \times (1 + t)^n$.
`,
    exercices: md`
### Exercice 2 — Achat à crédit et annuité d'emprunt

1. Un appartement est payé 150 000 DH comptant, puis 10 annuités de 30 000 DH en fin d'année. Au taux de 7 %, quelle est sa valeur au comptant ?
2. Une entreprise emprunte 500 000 DH sur 15 ans à 6 %, remboursables par annuités constantes. Calculez l'annuité.

<details><summary>Voir le corrigé</summary>

**1)** Valeur actuelle des annuités :

$$30\,000 \times \frac{1 - (1{,}07)^{-10}}{0{,}07} = 30\,000 \times 7{,}02358 \approx 210\,707 \text{ DH}$$

Valeur au comptant $= 150\,000 + 210\,707 = 360\,707$ DH.

**2)**
$$a = \frac{500\,000 \times 0{,}06}{1 - (1{,}06)^{-15}} = \frac{30\,000}{0{,}58274} \approx 51\,481 \text{ DH}$$

</details>
`,
    qcm: [
      { q: "La valeur actuelle de n annuités constantes est :", choix: ["a × [(1 + t)^n − 1] / t", "a × [1 − (1 + t)^−n] / t", "a × n / t", "a × (1 + t)^n"], bonne: 1, explication: "On actualise chaque annuité puis on fait la somme." },
      { q: "La valeur actuelle d'une rente perpétuelle de 5 000 DH à 5 % est :", choix: ["5 250 DH", "25 000 DH", "100 000 DH", "250 000 DH"], bonne: 2, explication: "V0 = a / t = 5 000 / 0,05 = 100 000 DH." },
      { q: "Le montant d'un emprunt par annuités constantes est égal :", choix: ["À la somme des annuités", "À la valeur actuelle des annuités", "À la valeur acquise des annuités", "Au total des intérêts"], bonne: 1, explication: "C'est le principe d'équivalence emprunt / remboursements." },
      { q: "La somme simple des annuités d'un emprunt est :", choix: ["Égale au capital emprunté", "Inférieure au capital emprunté", "Supérieure au capital emprunté", "Nulle"], bonne: 2, explication: "La différence représente le coût total des intérêts." },
      { q: "La valeur actuelle est calculée :", choix: ["Le jour du dernier versement", "Une période avant le premier versement", "Le jour du premier versement", "À mi-parcours"], bonne: 1, explication: "Convention pour des annuités de fin de période." },
    ],
  },

  7: {
    titre: "Les emprunts indivis : amortissements et annuités constants",
    resume: md`
## L'essentiel — Emprunts indivis (I)

- **Emprunt indivis** : un seul prêteur (une banque), contrairement à l'emprunt obligataire.
- **Annuité = amortissement + intérêt** ; l'intérêt de la période = capital restant dû (CRD) en début de période × $t$.
- **Amortissements constants** : $M = V_0 / n$ ; intérêts et annuités **décroissants** ; 1ʳᵉ annuité la plus lourde.
- **Annuités constantes** : $a = \dfrac{V_0 \times t}{1 - (1 + t)^{-n}}$ ; intérêts décroissants, amortissements **croissants** : $M_{p+1} = M_p (1 + t)$.
- Premier amortissement : $M_1 = a - V_0 \times t$ ; dernier : $M_n = M_1 (1 + t)^{n-1}$.
- Contrôles : somme des amortissements $= V_0$ ; dernier CRD $= 0$ ; total des intérêts = somme des annuités − $V_0$.
- Les amortissements constants coûtent **moins** d'intérêts que les annuités constantes.
`,
    exercices: md`
### Exercice 2 — Exploiter l'annuité constante

Un emprunt de 200 000 DH est remboursable en 5 annuités constantes au taux de 10 %.

1. Calculez l'annuité.
2. Établissez la première ligne du tableau d'amortissement.
3. Calculez le 2ᵉ et le 5ᵉ amortissement, puis le coût total de l'emprunt.

<details><summary>Voir le corrigé</summary>

**1)** $a = \dfrac{200\,000 \times 0{,}10}{1 - (1{,}10)^{-5}} = \dfrac{20\,000}{0{,}37908} \approx 52\,759{,}50$ DH.

**2)**

| Période | CRD début | Intérêt | Amortissement | Annuité | CRD fin |
|---|--:|--:|--:|--:|--:|
| 1 | 200 000 | 20 000 | 32 759,50 | 52 759,50 | 167 240,50 |

**3)** $M_2 = 32\,759{,}50 \times 1{,}10 = 36\,035{,}45$ DH ; $M_5 = 32\,759{,}50 \times (1{,}10)^4 \approx 47\,963{,}18$ DH.

Coût total $= 5 \times 52\,759{,}50 - 200\,000 = 63\,797{,}50$ DH.

</details>
`,
    qcm: [
      { q: "Dans un emprunt indivis, l'annuité est égale à :", choix: ["L'intérêt seul", "L'amortissement + l'intérêt", "Le capital emprunté / n", "Le CRD × t"], bonne: 1, explication: "Chaque annuité rembourse une part de capital et paie les intérêts." },
      { q: "Avec des amortissements constants, les annuités sont :", choix: ["Constantes", "Croissantes", "Décroissantes", "Nulles"], bonne: 2, explication: "L'amortissement est fixe et les intérêts diminuent." },
      { q: "Avec des annuités constantes, deux amortissements successifs vérifient :", choix: ["M(p+1) = M(p)", "M(p+1) = M(p) × (1 + t)", "M(p+1) = M(p) − t", "M(p+1) = M(p) / (1 + t)"], bonne: 1, explication: "Les amortissements forment une suite géométrique de raison 1 + t." },
      { q: "Emprunt de 100 000 DH à 8 %, 1er intérêt :", choix: ["800 DH", "8 000 DH", "80 000 DH", "Dépend de la durée"], bonne: 1, explication: "Intérêt 1 = CRD initial × t = 100 000 × 0,08." },
      { q: "À la fin du tableau d'amortissement, le capital restant dû doit être :", choix: ["Égal au capital emprunté", "Égal au total des intérêts", "Nul", "Égal à la dernière annuité"], bonne: 2, explication: "C'est le contrôle de base de tout tableau." },
    ],
  },

  8: {
    titre: "Le remboursement in fine et le choix d'investissement",
    resume: md`
## L'essentiel — In fine et choix d'investissement

- **In fine** : on paie chaque année l'intérêt $V_0 \times t$ et on rembourse tout le capital à la dernière échéance ; c'est la modalité **la plus coûteuse** en intérêts.
- **VAN** : $VAN = -I_0 + \sum \dfrac{CF_p}{(1 + t)^p}$ ; on accepte si $VAN > 0$.
- **TRI** : taux $t^*$ qui annule la VAN ; on accepte si $t^*$ > taux exigé. Il se trouve par **interpolation linéaire** entre deux taux.
- **Indice de profitabilité** : $IP = \dfrac{\sum CF_p (1 + t)^{-p}}{I_0}$ ; on accepte si $IP > 1$.
- **Délai de récupération** : temps nécessaire pour que les flux cumulés remboursent $I_0$ ; plus il est court, moins le projet est risqué.
`,
    exercices: md`
### Exercice 2 — VAN, IP, TRI et délai de récupération

Un projet coûte 100 000 DH et rapporte 30 000 DH par an pendant 5 ans. Le taux exigé est de 10 %.

1. Calculez la VAN et l'indice de profitabilité.
2. Sachant que la VAN vaut environ +565 DH à 15 % et −1 771 DH à 16 %, estimez le TRI.
3. Calculez le délai de récupération (flux non actualisés).

<details><summary>Voir le corrigé</summary>

**1)** $\sum = 30\,000 \times \dfrac{1 - (1{,}10)^{-5}}{0{,}10} = 30\,000 \times 3{,}79079 \approx 113\,724$ DH.

$VAN = -100\,000 + 113\,724 = 13\,724$ DH ; $IP = 113\,724 / 100\,000 \approx 1{,}14$. Le projet est **rentable**.

**2)** Interpolation linéaire :

$$TRI \approx 15\% + 1\% \times \frac{565}{565 + 1\,771} \approx 15{,}24\%$$

Le TRI (15,24 %) dépasse le taux exigé (10 %) : le projet est accepté.

**3)** $DR = 100\,000 / 30\,000 \approx 3{,}33$ ans, soit **3 ans et 4 mois**.

</details>
`,
    qcm: [
      { q: "Dans un emprunt in fine, le capital est remboursé :", choix: ["Par parts égales", "Par annuités constantes", "En une seule fois à la dernière échéance", "Au début de l'emprunt"], bonne: 2, explication: "Seuls les intérêts sont payés avant l'échéance finale." },
      { q: "Parmi les trois modalités, la plus coûteuse en intérêts est :", choix: ["Les amortissements constants", "Les annuités constantes", "L'in fine", "Elles coûtent toutes pareil"], bonne: 2, explication: "Le capital reste intégralement dû jusqu'au bout." },
      { q: "Un projet est rentable si sa VAN est :", choix: ["Négative", "Nulle", "Positive", "Égale à I0"], bonne: 2, explication: "Une VAN positive signifie que le projet crée de la valeur." },
      { q: "Le TRI est le taux pour lequel :", choix: ["La VAN est maximale", "La VAN est nulle", "L'IP vaut 2", "Les flux sont constants"], bonne: 1, explication: "Par définition, VAN(TRI) = 0." },
      { q: "Un indice de profitabilité de 1,25 signifie que :", choix: ["Le projet perd 25 %", "Chaque dirham investi rapporte 1,25 DH actualisé", "Le TRI est de 25 %", "Le délai de récupération est de 1,25 an"], bonne: 1, explication: "IP = flux actualisés / investissement." },
    ],
  },
};
