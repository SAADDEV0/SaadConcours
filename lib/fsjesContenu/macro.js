// Macroéconomie (S2) — compléments par chapitre.
const md = String.raw;

export default {
  1: {
    titre: "Introduction à la macroéconomie et comptabilité nationale",
    resume: md`
## L'essentiel — Macroéconomie et comptabilité nationale

- La **macroéconomie** étudie l'économie dans son ensemble à travers des **agrégats** (PIB, revenu national, prix, emploi) ; la microéconomie étudie les choix individuels.
- Agents : **ménages** (consommer, épargner), **entreprises** (produire, investir), **administrations publiques** (services non marchands, financés par l'impôt), **institutions financières** (financer), **reste du monde** (échanges).
- **Circuit économique** : production → revenus → dépenses ($C + I + G$) → production.
- Au Maroc, la comptabilité nationale est établie par le **HCP** selon le SCN.
- **Flux** : mesuré sur une période (PIB, revenu) ; **stock** : mesuré à une date (patrimoine, dette publique).
`,
    exercices: md`
### Exercice 2 — Flux, stocks et circuit

1. Classez en flux ou en stock : a) la consommation des ménages en 2025 ; b) la dette publique au 31 décembre ; c) les exportations du trimestre ; d) le parc de logements ; e) les réserves de change à une date ; f) l'investissement annuel.
2. Dans une économie simplifiée, les ménages perçoivent 500 milliards DH de revenus et en consomment 420. Quelle est leur épargne ? Vers quels agents peut-elle être dirigée ?

<details><summary>Voir le corrigé</summary>

**1)** Flux : a, c, f. Stocks : b, d, e.

**2)** Épargne $= 500 - 420 = 80$ milliards DH. Elle est placée auprès des **institutions financières**, qui la prêtent aux **entreprises** (investissement), aux **administrations publiques** (déficit) ou au **reste du monde**.

</details>
`,
    qcm: [
      { q: "La macroéconomie étudie :", choix: ["Le choix d'un consommateur", "Les grandeurs agrégées de l'économie", "La gestion d'une entreprise", "Le prix d'un seul bien"], bonne: 1, explication: "PIB, inflation, chômage, commerce extérieur…" },
      { q: "Au Maroc, la comptabilité nationale est établie par :", choix: ["Bank Al-Maghrib", "Le HCP", "La DGI", "L'Office des changes"], bonne: 1, explication: "Le Haut-Commissariat au Plan." },
      { q: "Parmi ces grandeurs, laquelle est un stock ?", choix: ["Le PIB annuel", "La consommation mensuelle", "La dette publique en fin d'année", "Les exportations du trimestre"], bonne: 2, explication: "Elle est mesurée à une date donnée." },
      { q: "La fonction principale des entreprises est de :", choix: ["Consommer", "Produire des biens et services marchands", "Prélever des impôts", "Créer de la monnaie"], bonne: 1, explication: "Elles réalisent aussi l'essentiel de l'investissement." },
      { q: "Les administrations publiques sont principalement financées par :", choix: ["Les ventes", "Les impôts et cotisations", "Les dividendes", "Les exportations"], bonne: 1, explication: "Elles produisent des services non marchands." },
    ],
  },

  2: {
    titre: "Les agrégats de production et de revenu",
    resume: md`
## L'essentiel — PIB, RNB et croissance

- $VA = \text{production} - \text{consommations intermédiaires}$ : évite les doubles comptages.
- $PIB = \sum VA + \text{impôts sur les produits} - \text{subventions sur les produits}$ : notion **territoriale** (unités résidentes).
- Trois approches : **production**, **dépense** ($C + I + G + X - M$), **revenu** (salaires + EBE + impôts nets).
- $RNB = PIB + \text{revenus des facteurs reçus} - \text{revenus des facteurs versés}$ : notion de **nationalité**.
- PIB **nominal** (prix courants) et PIB **réel** (prix constants) ; déflateur $= \dfrac{PIB_{nominal}}{PIB_{réel}} \times 100$.
- Croissance réelle $\approx$ croissance nominale − inflation ; **PIB par habitant** = PIB / population.
`,
    exercices: md`
### Exercice 2 — Nominal, réel et par habitant

Le PIB nominal passe de 1 100 milliards DH (année N, base des prix) à 1 210 milliards DH en N+1. Le déflateur du PIB de N+1 est de 105 (base 100 en N). La population est de 37 millions d'habitants en N+1.

1. Calculez le taux de croissance nominal.
2. Calculez le PIB réel de N+1 et le taux de croissance réel.
3. Calculez le PIB nominal par habitant en N+1.

<details><summary>Voir le corrigé</summary>

**1)** $\dfrac{1\,210 - 1\,100}{1\,100} = 10\%$.

**2)** $PIB_{réel} = \dfrac{1\,210}{1{,}05} \approx 1\,152{,}4$ milliards DH ; croissance réelle $= \dfrac{1\,152{,}4}{1\,100} - 1 \approx 4{,}76\%$. L'essentiel de la hausse nominale vient de la hausse des prix.

**3)** $\dfrac{1\,210 \times 10^9}{37 \times 10^6} \approx 32\,703$ DH par habitant.

</details>
`,
    qcm: [
      { q: "La valeur ajoutée est égale à :", choix: ["Production + consommations intermédiaires", "Production − consommations intermédiaires", "Ventes − salaires", "PIB − impôts"], bonne: 1, explication: "Elle mesure la richesse réellement créée." },
      { q: "Selon l'approche par la dépense, le PIB est égal à :", choix: ["C + I + G + (X − M)", "C + S + T", "Salaires + EBE", "ΣVA − impôts"], bonne: 0, explication: "C'est l'équation de la demande globale." },
      { q: "Le RNB diffère du PIB par :", choix: ["Les impôts sur les produits", "Les revenus des facteurs échangés avec le reste du monde", "Les consommations intermédiaires", "La variation des stocks"], bonne: 1, explication: "Le RNB est une notion de nationalité." },
      { q: "Le PIB réel corrige le PIB nominal de :", choix: ["La croissance démographique", "La hausse des prix", "Les importations", "La dépréciation du capital"], bonne: 1, explication: "Il est calculé à prix constants." },
      { q: "Croissance nominale 7 %, inflation 3 % : la croissance réelle est environ de :", choix: ["10 %", "4 %", "2,3 %", "21 %"], bonne: 1, explication: "Approximation : 7 % − 3 % ≈ 4 %." },
    ],
  },

  3: {
    titre: "L'équilibre emplois-ressources",
    resume: md`
## L'essentiel — Équilibre emplois-ressources

- **Ressources = emplois** : $PIB + M = C + G + I + \Delta S + X$.
- Ressources : production intérieure (PIB) et **importations**.
- Emplois : consommation finale (ménages et administrations), **FBCF**, **variation de stocks**, **exportations**.
- On en tire $PIB = C + I + G + (X - M)$ : $(X - M)$ est le **solde commercial**.
- Taux de couverture $= X / M \times 100$ : au-dessus de 100 %, la balance est excédentaire.
- Toute grandeur manquante du tableau se retrouve par différence.
`,
    exercices: md`
### Exercice 2 — Compléter le tableau emplois-ressources

Données (en milliards DH) : PIB 1 300 ; importations 450 ; consommation des ménages 780 ; consommation des administrations 240 ; FBCF 330 ; exportations 380.

1. Calculez la variation de stocks.
2. Calculez le solde commercial et le taux de couverture.
3. Vérifiez l'équation $PIB = C + I + G + (X - M)$.

<details><summary>Voir le corrigé</summary>

**1)** Ressources $= 1\,300 + 450 = 1\,750$ ; emplois connus $= 780 + 240 + 330 + 380 = 1\,730$. Donc $\Delta S = 20$ milliards DH.

**2)** $X - M = 380 - 450 = -70$ milliards DH (déficit) ; taux de couverture $= 380 / 450 \approx 84{,}4\%$.

**3)** $780 + 240 + (330 + 20) + (-70) = 1\,300 = PIB$ ✓.

</details>
`,
    qcm: [
      { q: "L'équilibre emplois-ressources s'écrit :", choix: ["PIB + M = C + I + G + ΔS + X", "PIB = M + X", "C + S = PIB", "PIB − M = X"], bonne: 0, explication: "Tout ce qui est produit ou importé est utilisé." },
      { q: "Les importations figurent du côté :", choix: ["Des emplois", "Des ressources", "Des deux côtés", "D'aucun côté"], bonne: 1, explication: "Elles s'ajoutent à la production intérieure disponible." },
      { q: "Un solde commercial négatif signifie que :", choix: ["X > M", "X < M", "Le PIB baisse forcément", "L'inflation augmente"], bonne: 1, explication: "Les importations dépassent les exportations." },
      { q: "X = 300 et M = 400 : le taux de couverture est de :", choix: ["133 %", "75 %", "−100", "25 %"], bonne: 1, explication: "300 / 400 = 75 %." },
      { q: "La FBCF correspond :", choix: ["À la consommation des ménages", "À l'investissement en capital fixe", "Aux importations de biens", "À l'épargne publique"], bonne: 1, explication: "Formation brute de capital fixe." },
    ],
  },

  4: {
    titre: "La consommation, l'épargne et l'investissement",
    resume: md`
## L'essentiel — Consommation, épargne, investissement

- Fonction de consommation keynésienne : $C = C_0 + c\,Y_d$, avec $C_0$ la consommation autonome et $c$ la **propension marginale à consommer** ($0 < c < 1$).
- **PmS** $= s = 1 - c$ ; **propension moyenne** à consommer $= C / Y_d$ (elle diminue quand le revenu augmente).
- Épargne : $S = Y_d - C = -C_0 + s\,Y_d$.
- $\Delta C = c \times \Delta Y_d$ et $\Delta S = s \times \Delta Y_d$.
- **Accélérateur** : $I_t = v\,(Y_t - Y_{t-1})$ ; l'investissement dépend de la **variation** de la production et fluctue donc plus fortement qu'elle.
`,
    exercices: md`
### Exercice 2 — Propensions et accélérateur

1. Avec $C = 200 + 0{,}6\,Y_d$ et $Y_d = 1\,000$, calculez $C$, $S$, la propension moyenne et la propension marginale à consommer. Comparez-les.
2. Le coefficient d'accélération vaut $v = 3$. La production passe de 1 000 (année 0) à 1 100, puis 1 150, puis 1 150. Calculez l'investissement des années 1, 2 et 3. Commentez.

<details><summary>Voir le corrigé</summary>

**1)** $C = 200 + 600 = 800$ ; $S = 200$ ; propension moyenne $= 800 / 1\,000 = 0{,}8$ ; propension marginale $= 0{,}6$. La propension moyenne est supérieure à la marginale à cause de la consommation autonome.

**2)**

| Année | Y | ΔY | $I = 3 \times \Delta Y$ |
|---|--:|--:|--:|
| 1 | 1 100 | 100 | 300 |
| 2 | 1 150 | 50 | 150 |
| 3 | 1 150 | 0 | 0 |

La production continue de croître puis se stabilise, mais l'investissement s'effondre : il réagit à la **variation** de la demande, d'où son caractère très instable.

</details>
`,
    qcm: [
      { q: "Dans C = 500 + 0,8 Yd, la propension marginale à consommer est :", choix: ["500", "0,8", "0,2", "1,25"], bonne: 1, explication: "C'est le coefficient de Yd." },
      { q: "Si c = 0,75, la propension marginale à épargner vaut :", choix: ["0,75", "0,25", "1,33", "4"], bonne: 1, explication: "s = 1 − c." },
      { q: "Avec C = 100 + 0,5 Yd, si Yd augmente de 200, la consommation augmente de :", choix: ["100", "200", "300", "50"], bonne: 0, explication: "ΔC = 0,5 × 200 = 100." },
      { q: "Selon Keynes, la propension moyenne à consommer quand le revenu augmente :", choix: ["Augmente", "Diminue", "Reste constante", "Devient négative"], bonne: 1, explication: "La part consommée du revenu baisse." },
      { q: "Le principe de l'accélérateur lie l'investissement :", choix: ["Au niveau du taux d'intérêt", "À la variation de la production", "Au niveau de l'épargne", "À l'inflation"], bonne: 1, explication: "I = v × ΔY." },
    ],
  },

  5: {
    titre: "Le marché des biens et services : le multiplicateur et la courbe IS",
    resume: md`
## L'essentiel — Multiplicateur et courbe IS

- Équilibre keynésien : $Y = C + I$ avec $C = C_0 + cY$, donc $Y^* = \dfrac{C_0 + I}{1 - c}$.
- **Multiplicateur** : $k = \dfrac{1}{1 - c}$ ; $\Delta Y = k \times \Delta(\text{dépense autonome})$.
- Avec État et extérieur : $Y^* = \dfrac{C_0 + I + G + X - M_0 - cT}{1 - c + m}$ ; le multiplicateur devient $\dfrac{1}{1 - c + m}$ (les importations sont une **fuite**).
- **Courbe IS** : couples $(Y, r)$ qui équilibrent le marché des biens ; avec $I = I_0 - br$, elle est **décroissante**.
- Une hausse de $G$ ou une baisse de $T$ déplace IS **vers la droite**.
`,
    exercices: md`
### Exercice 2 — Économie ouverte et courbe IS

**Partie A** — $C = 200 + 0{,}8(Y - T)$, $I = 150$, $G = 250$, $T = 250$, $X = 180$, $M = 50 + 0{,}2Y$.

1. Calculez le revenu d'équilibre et le multiplicateur.
2. Quel est l'effet d'une hausse de $G$ de 40 ? Calculez le solde commercial à l'équilibre initial.

**Partie B** — Économie fermée : $C = 100 + 0{,}75Y$, $I = 300 - 20r$, $G = 100$. Déterminez l'équation de la courbe IS et le revenu pour $r = 5$.

<details><summary>Voir le corrigé</summary>

**Partie A**

**1)** $Y = 200 + 0{,}8Y - 200 + 150 + 250 + 180 - 50 - 0{,}2Y = 530 + 0{,}6Y$, donc $Y^* = 530 / 0{,}4 = 1\,325$. Multiplicateur $k = \dfrac{1}{1 - 0{,}8 + 0{,}2} = 2{,}5$.

**2)** $\Delta Y = 2{,}5 \times 40 = 100$ ; le nouveau revenu est 1 425. Solde commercial initial : $X - M = 180 - (50 + 0{,}2 \times 1\,325) = -135$.

**Partie B** — $Y = 100 + 0{,}75Y + 300 - 20r + 100$, soit $0{,}25Y = 500 - 20r$ et **IS : $Y = 2\,000 - 80r$**. Pour $r = 5$ : $Y = 1\,600$.

</details>
`,
    qcm: [
      { q: "Si la propension marginale à consommer vaut 0,75, le multiplicateur vaut :", choix: ["0,25", "1,33", "4", "7,5"], bonne: 2, explication: "k = 1 / (1 − 0,75) = 4." },
      { q: "Avec k = 5, une hausse de l'investissement de 20 augmente le revenu de :", choix: ["4", "20", "25", "100"], bonne: 3, explication: "ΔY = 5 × 20 = 100." },
      { q: "L'ouverture aux importations rend le multiplicateur :", choix: ["Plus grand", "Plus petit", "Inchangé", "Négatif"], bonne: 1, explication: "Une partie de la dépense fuit vers l'étranger." },
      { q: "La courbe IS est :", choix: ["Croissante dans le plan (Y, r)", "Décroissante dans le plan (Y, r)", "Verticale", "Horizontale"], bonne: 1, explication: "Un taux plus bas stimule l'investissement et le revenu." },
      { q: "Une hausse des dépenses publiques déplace :", choix: ["IS vers la droite", "IS vers la gauche", "LM vers la droite", "LM vers la gauche"], bonne: 0, explication: "La demande globale augmente à tout taux d'intérêt." },
    ],
  },

  6: {
    titre: "La monnaie et le marché monétaire : la courbe LM",
    resume: md`
## L'essentiel — Monnaie et courbe LM

- Fonctions de la monnaie : **unité de compte**, **intermédiaire des échanges**, **réserve de valeur**.
- Agrégats : **M1** (billets, pièces, dépôts à vue) ⊂ **M2** (+ comptes d'épargne) ⊂ **M3** (+ dépôts à terme, OPCVM monétaires…).
- Demande de monnaie keynésienne : $L = L_1(Y) + L_2(r)$ ; transaction et précaution croissent avec $Y$ ; **spéculation** décroît avec $r$.
- Équilibre : $\dfrac{M}{P} = L_1(Y) + L_2(r)$ ; la **courbe LM** est **croissante** dans le plan $(Y, r)$.
- Une hausse de l'offre de monnaie déplace LM **vers la droite**.
- **Bank Al-Maghrib** agit par le taux directeur, la réserve obligatoire et l'open market.
`,
    exercices: md`
### Exercice 2 — Construire la courbe LM

L'offre réelle de monnaie est $M/P = 800$. La demande de monnaie est $L = 0{,}5Y + 200 - 40r$.

1. Déterminez l'équation de la courbe LM.
2. Quel revenu est compatible avec l'équilibre monétaire pour $r = 5$ ?
3. L'offre de monnaie passe à 840. Donnez la nouvelle équation de LM et commentez.

<details><summary>Voir le corrigé</summary>

**1)** $800 = 0{,}5Y + 200 - 40r$, donc $0{,}5Y = 600 + 40r$ et **LM : $Y = 1\,200 + 80r$** (croissante).

**2)** $Y = 1\,200 + 80 \times 5 = 1\,600$.

**3)** $840 = 0{,}5Y + 200 - 40r$, soit $Y = 1\,280 + 80r$ : LM se déplace **vers la droite** de 80 ; à revenu donné, le taux d'intérêt d'équilibre baisse.

</details>
`,
    qcm: [
      { q: "M1 comprend :", choix: ["Les dépôts à terme", "Les billets, pièces et dépôts à vue", "Les obligations d'État", "Les comptes d'épargne uniquement"], bonne: 1, explication: "C'est l'agrégat le plus liquide." },
      { q: "La demande de monnaie de spéculation est :", choix: ["Croissante avec le taux d'intérêt", "Décroissante avec le taux d'intérêt", "Indépendante du taux d'intérêt", "Croissante avec l'inflation"], bonne: 1, explication: "Détenir de la monnaie coûte plus cher quand r augmente." },
      { q: "La courbe LM représente l'équilibre :", choix: ["Du marché des biens", "Du marché monétaire", "Du marché du travail", "De la balance commerciale"], bonne: 1, explication: "Offre de monnaie = demande de monnaie." },
      { q: "Une hausse de la masse monétaire déplace LM :", choix: ["Vers la gauche", "Vers la droite", "Elle ne bouge pas", "Elle devient verticale"], bonne: 1, explication: "À revenu donné, le taux d'équilibre baisse." },
      { q: "La fonction de réserve de valeur signifie que la monnaie :", choix: ["Mesure les prix", "Permet de conserver du pouvoir d'achat dans le temps", "Sert aux échanges", "Est émise par l'État"], bonne: 1, explication: "On peut épargner sous forme monétaire." },
    ],
  },

  7: {
    titre: "L'équilibre IS-LM et la politique économique",
    resume: md`
## L'essentiel — IS-LM et politiques économiques

- L'intersection de IS et LM donne l'équilibre général $(Y^*, r^*)$.
- **Relance budgétaire** (hausse de $G$, baisse de $T$) : IS vers la droite ; $Y$ et $r$ augmentent. La hausse de $r$ réduit l'investissement privé : **effet d'éviction**.
- **Relance monétaire** (hausse de $M$) : LM vers la droite ; $r$ baisse et $Y$ augmente, sans éviction.
- **Trappe à liquidité** (LM plate) : la politique monétaire est inefficace, la politique budgétaire très efficace.
- LM verticale : la politique budgétaire est inefficace (éviction totale), la politique monétaire très efficace.
- Une **policy mix** (budgétaire + monétaire) peut neutraliser l'effet d'éviction.
`,
    exercices: md`
### Exercice 2 — Calculer l'effet d'éviction

On reprend : IS : $Y = 2\,000 - 80r$ (avec $G = 100$ et un multiplicateur de 4) et LM : $Y = 1\,200 + 80r$.

1. Calculez l'équilibre $(Y^*, r^*)$.
2. $G$ augmente de 50 : la nouvelle IS est $Y = 2\,200 - 80r$. Calculez le nouvel équilibre et l'effet d'éviction.
3. Au lieu de cela, la banque centrale accroît l'offre de monnaie et LM devient $Y = 1\,280 + 80r$. Calculez le nouvel équilibre.

<details><summary>Voir le corrigé</summary>

**1)** $2\,000 - 80r = 1\,200 + 80r$, donc $r^* = 5$ et $Y^* = 1\,600$.

**2)** $2\,200 - 80r = 1\,200 + 80r$, donc $r = 6{,}25$ et $Y = 1\,700$. À taux constant, le multiplicateur aurait donné $\Delta Y = 4 \times 50 = 200$ (soit $Y = 1\,800$). L'effet d'éviction est donc de $1\,800 - 1\,700 = 100$.

**3)** $2\,000 - 80r = 1\,280 + 80r$, donc $r = 4{,}5$ et $Y = 1\,640$ : le taux baisse et le revenu augmente.

</details>
`,
    qcm: [
      { q: "Une relance budgétaire dans le modèle IS-LM provoque :", choix: ["Une baisse de r", "Une hausse de Y et de r", "Une baisse de Y", "Aucun effet"], bonne: 1, explication: "IS se déplace vers la droite le long de LM croissante." },
      { q: "L'effet d'éviction désigne :", choix: ["La baisse de l'investissement privé due à la hausse du taux d'intérêt", "La fuite des capitaux", "La baisse des importations", "L'inflation importée"], bonne: 0, explication: "La dépense publique « évince » une partie de l'investissement privé." },
      { q: "Une hausse de la masse monétaire entraîne :", choix: ["Une hausse de r", "Une baisse de r et une hausse de Y", "Une baisse de Y", "Un déplacement de IS"], bonne: 1, explication: "LM se déplace vers la droite." },
      { q: "En situation de trappe à liquidité, la politique la plus efficace est :", choix: ["La politique monétaire", "La politique budgétaire", "Aucune", "La hausse des impôts"], bonne: 1, explication: "LM est plate : pas d'éviction, mais la monnaie n'agit plus sur r." },
      { q: "Pour neutraliser l'effet d'éviction d'une relance budgétaire, la banque centrale doit :", choix: ["Augmenter son taux directeur", "Augmenter l'offre de monnaie", "Réduire la masse monétaire", "Relever la réserve obligatoire"], bonne: 1, explication: "Elle maintient ainsi le taux d'intérêt stable." },
    ],
  },

  8: {
    titre: "Inflation, chômage et politique monétaire",
    resume: md`
## L'essentiel — Inflation, chômage, Bank Al-Maghrib

- **Inflation** : hausse générale et durable des prix, mesurée par l'**IPC** (HCP) : $\dfrac{IPC_t - IPC_{t-1}}{IPC_{t-1}} \times 100$.
- Causes : **demande** (demande > offre), **coûts** (salaires, énergie), **monétaire** (création excessive de monnaie), **importée**.
- **Théorie quantitative** : $M \times V = P \times Y$ ; en taux, $\%\Delta M + \%\Delta V \approx \%\Delta P + \%\Delta Y$.
- **Courbe de Phillips** : relation inverse entre inflation et chômage à court terme ; à long terme, le chômage tend vers son taux naturel (**NAIRU**).
- Pouvoir d'achat : $1 + \text{croissance réelle} = \dfrac{1 + \text{hausse nominale}}{1 + \text{inflation}}$.
- **Bank Al-Maghrib** vise la stabilité des prix : taux directeur, réserve obligatoire, open market.
`,
    exercices: md`
### Exercice 2 — Inflation et pouvoir d'achat

1. L'IPC passe de 120 à 126. Calculez le taux d'inflation.
2. Un salarié voit son salaire passer de 6 000 à 6 180 DH. Son pouvoir d'achat a-t-il augmenté ?
3. La production réelle croît de 3 % et la vitesse de circulation est stable. Selon la théorie quantitative, quelle croissance de la masse monétaire permettrait une inflation de 2 % ?

<details><summary>Voir le corrigé</summary>

**1)** $\dfrac{126 - 120}{120} = 5\%$.

**2)** Hausse nominale $= 3\%$. Évolution du pouvoir d'achat $= \dfrac{1{,}03}{1{,}05} - 1 \approx -1{,}9\%$ : il a **baissé**.

**3)** $\%\Delta M \approx \%\Delta P + \%\Delta Y = 2\% + 3\% = 5\%$.

</details>
`,
    qcm: [
      { q: "Au Maroc, l'inflation est mesurée par :", choix: ["Le PIB", "L'indice des prix à la consommation (IPC)", "Le taux directeur", "La balance commerciale"], bonne: 1, explication: "Publié par le HCP." },
      { q: "Selon la théorie quantitative, à V et Y constants, une hausse de M provoque :", choix: ["Une baisse des prix", "Une hausse proportionnelle des prix", "Une hausse de la production", "Aucun effet"], bonne: 1, explication: "M × V = P × Y." },
      { q: "La courbe de Phillips relie :", choix: ["Inflation et chômage", "PIB et consommation", "Taux d'intérêt et investissement", "Exportations et importations"], bonne: 0, explication: "Relation inverse à court terme." },
      { q: "Pour freiner l'inflation, Bank Al-Maghrib peut :", choix: ["Baisser son taux directeur", "Relever son taux directeur", "Augmenter les dépenses publiques", "Baisser la réserve obligatoire"], bonne: 1, explication: "Le crédit devient plus cher, la demande ralentit." },
      { q: "Une hausse du prix du pétrole importé provoque une inflation :", choix: ["Par la demande", "Importée et par les coûts", "Monétaire", "Structurelle uniquement"], bonne: 1, explication: "Le coût de l'énergie se répercute sur les prix." },
    ],
  },
};
