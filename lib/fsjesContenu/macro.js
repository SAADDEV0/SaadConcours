// Macroéconomie (S2) — compléments par chapitre : description SEO, résumé, exercices 2 et 3, QCM.
const md = String.raw;

const chapitres = {
  1: {
    titre: "Introduction à la macroéconomie et comptabilité nationale",
    description: "Objet de la macroéconomie, carré magique, secteurs institutionnels, opérations, circuit économique, stocks et flux, comptabilité nationale du HCP.",
    resume: md`
## L'essentiel — Macroéconomie et comptabilité nationale

- La **macroéconomie** étudie les grandeurs agrégées (PIB, revenu, prix, emploi, commerce extérieur) ; la microéconomie étudie les choix individuels. Le tout n'est pas la somme des parties (paradoxe de l'épargne).
- **Carré magique de Kaldor** : croissance, plein emploi, stabilité des prix, équilibre extérieur.
- Courants : classiques (marchés autorégulés, loi de Say), Keynes (demande effective, 1936), monétaristes, nouvelle économie classique.
- **Secteurs institutionnels** : SNF, SF, APU, ménages, ISBLSM, reste du monde ; critère de **résidence** (centre d'intérêt depuis au moins un an), pas de nationalité.
- Opérations : sur **biens et services**, de **répartition**, **financières**.
- **Circuit** : $Y = C + I + G + X - M$ et $(S - I) + (T - G) = X - M$.
- **Flux** (période) et **stocks** (date) ; les flux modifient les stocks.
- Comptes nationaux établis par le **HCP** (SCN 2008) : TRE, TEE, comptes trimestriels.
`,
    exercices: md`
### Exercice 2 — Secteurs, opérations, résidence

Pour chaque opération, indiquez le ou les secteurs institutionnels concernés, la catégorie d'opération et, s'il y a lieu, l'intervention du reste du monde :
1. Une famille de Meknès achète un réfrigérateur.
2. Un transfert d'argent d'un Marocain résidant en France vers sa famille à Nador.
3. Une banque accorde un crédit d'équipement à une PME de Tanger.
4. L'État verse des aides sociales directes aux ménages.
5. Une association de quartier organise des cours de soutien gratuits.
6. Une entreprise marocaine achète une machine en Allemagne.

<details><summary>Voir le corrigé</summary>

1. Ménages ; opération sur biens et services (**consommation finale**).
2. Reste du monde (le Marocain résidant en France est non résident) vers les ménages ; opération de **répartition** (transfert courant reçu de l'extérieur).
3. Sociétés financières et SNF ; opération **financière** (crédit), qui financera une FBCF.
4. APU vers ménages ; opération de **répartition** (prestation sociale).
5. ISBLSM ; production de services **non marchands** au profit des ménages.
6. SNF et reste du monde ; **FBCF** et **importation** (opérations sur biens et services).

</details>

### Exercice 3 — Circuit avec l'extérieur

Dans une économie ouverte (milliards de DH) : $C = 600$, $I = 250$, $G = 200$, $X = 300$, $M = 350$, $T = 180$.

1. Calculez le PIB.
2. Calculez l'épargne privée $S$ sachant que $Y = C + S + T$.
3. Vérifiez l'égalité $(S - I) + (T - G) = X - M$ et interprétez.

<details><summary>Voir le corrigé</summary>

**1)** $Y = 600 + 250 + 200 + 300 - 350 = \mathbf{1\,000}$.

**2)** $S = 1\,000 - 600 - 180 = \mathbf{220}$.

**3)** $(220 - 250) + (180 - 200) = -30 - 20 = -50$ et $X - M = 300 - 350 = -50$ ✔. Le secteur privé (besoin de 30) et l'État (déficit de 20) ont ensemble un besoin de financement de 50, couvert par le reste du monde : c'est le **déficit extérieur**.

</details>
`,
    qcm: [
      { q: "La macroéconomie étudie principalement :", choix: ["Le choix d'un consommateur", "Les grandeurs agrégées de l'économie", "La gestion d'une entreprise", "Le prix d'un seul bien"], bonne: 1, explication: "PIB, inflation, chômage, commerce extérieur." },
      { q: "Au Maroc, les comptes nationaux sont établis par :", choix: ["Bank Al-Maghrib", "Le Haut-Commissariat au Plan", "La Direction générale des impôts", "L'Office des changes"], bonne: 1, explication: "Le HCP applique le SCN 2008." },
      { q: "Parmi ces grandeurs, laquelle est un stock ?", choix: ["Le PIB annuel", "La consommation mensuelle", "La dette publique au 31 décembre", "Les exportations du trimestre"], bonne: 2, explication: "Elle est mesurée à une date donnée." },
      { q: "Le carré magique de Kaldor ne comprend pas :", choix: ["La croissance", "Le plein emploi", "L'équilibre extérieur", "L'équilibre du budget de l'État"], bonne: 3, explication: "Les quatre objectifs sont croissance, emploi, prix et équilibre extérieur." },
      { q: "Le critère retenu pour classer une unité dans l'économie nationale est :", choix: ["La nationalité", "La résidence", "La langue", "La taille"], bonne: 1, explication: "Centre d'intérêt économique sur le territoire depuis au moins un an." },
      { q: "Une association de quartier appartient au secteur :", choix: ["Des administrations publiques", "Des ISBLSM", "Des sociétés non financières", "Des ménages"], bonne: 1, explication: "Institutions sans but lucratif au service des ménages." },
      { q: "Le versement d'un dividende est une opération :", choix: ["Sur biens et services", "De répartition", "Financière", "De production"], bonne: 1, explication: "C'est un revenu de la propriété." },
      { q: "Dans une économie fermée sans État, l'égalité comptable est :", choix: ["S = I", "S = C", "I = C", "Y = S"], bonne: 0, explication: "Y = C + I et Y = C + S." },
      { q: "C = 500, I = 200, G = 150, X = 250, M = 300. Le PIB vaut :", choix: ["800", "1 400", "1 100", "850"], bonne: 0, explication: "500 + 200 + 150 + 250 − 300 = 800." },
      { q: "La macroéconomie moderne est généralement associée à :", choix: ["Adam Smith", "John Maynard Keynes", "Léon Walras", "Alfred Marshall"], bonne: 1, explication: "La Théorie générale, publiée en 1936." },
    ],
  },

  2: {
    titre: "Les agrégats de production et de revenu",
    description: "Valeur ajoutée, PIB selon les optiques production, revenus et dépenses, RNB, RNDB, PIB réel, déflateur et croissance, avec exercices corrigés.",
    resume: md`
## L'essentiel — Les agrégats

- $VA = \text{Production} - CI$ ; la somme des VA évite les **doubles comptes**.
- **PIB** (production) $= \sum VA + \text{impôts sur les produits} - \text{subventions sur les produits}$.
- **PIB** (revenus) $=$ rémunération des salariés + EBE et revenu mixte + impôts sur la production nets des subventions.
- **PIB** (dépenses) $= C + FBCF + \Delta S + G + X - M$.
- $RNB = PIB + \text{revenus primaires nets reçus du RDM}$ ; $RNDB = RNB + \text{transferts courants nets}$ (transferts des MRE pour le Maroc).
- Net = brut − consommation de capital fixe.
- $\text{Déflateur} = PIB_{nominal} / PIB_{réel} \times 100$ ; $1 + g_{nominal} = (1 + g_{volume})(1 + g_{prix})$.
- Limites du PIB : informel, travail domestique, environnement, inégalités ; indicateurs complémentaires (IDH).
`,
    exercices: md`
### Exercice 2 — Le PIB par l'optique des revenus

Une économie présente les données suivantes (milliards de DH) : rémunération des salariés 520 ; excédent brut d'exploitation et revenu mixte 610 ; impôts sur la production et les importations 180 ; subventions 30.

1. Calculez le PIB.
2. Sachant que $C = 750$, $G = 230$, $FBCF = 350$, $\Delta S = 10$ et $X = 380$, calculez les importations.
3. Calculez la part des salaires dans le PIB et commentez.

<details><summary>Voir le corrigé</summary>

**1)** $PIB = 520 + 610 + 180 - 30 = \mathbf{1\,280}$.

**2)** $M = 750 + 230 + 350 + 10 + 380 - 1\,280 = \mathbf{440}$.

**3)** $520 / 1\,280 \approx$ **40,6 %**. Une part des salaires relativement faible s'explique notamment par le poids des **revenus mixtes** des entrepreneurs individuels (agriculture, commerce, artisanat), inclus dans l'EBE et revenu mixte.

</details>

### Exercice 3 — PIB en valeur et en volume

Une économie produit deux biens :

| Bien | Quantité N | Prix N | Quantité N+1 | Prix N+1 |
|---|---:|---:|---:|---:|
| Blé (tonnes) | 100 | 3 000 | 90 | 3 500 |
| Téléphones | 50 | 2 000 | 60 | 2 100 |

1. Calculez le PIB nominal de N et de N+1.
2. Calculez le PIB de N+1 aux prix de N et la croissance en volume.
3. Calculez le déflateur de N+1 (base 100 en N) et l'inflation mesurée par ce déflateur.

<details><summary>Voir le corrigé</summary>

**1)** $PIB_N = 100 \times 3\,000 + 50 \times 2\,000 = 400\,000$ ; $PIB_{N+1} = 90 \times 3\,500 + 60 \times 2\,100 = 315\,000 + 126\,000 = 441\,000$.

**2)** Aux prix de N : $90 \times 3\,000 + 60 \times 2\,000 = 390\,000$. Croissance en volume : $390\,000 / 400\,000 - 1 = \mathbf{-2{,}5\,\%}$ (la baisse de la récolte de blé l'emporte).

**3)** Déflateur : $441\,000 / 390\,000 \times 100 \approx \mathbf{113{,}08}$, soit une hausse des prix de **13,08 %**. La croissance nominale ($+10{,}25\,\%$) masque une baisse de la production : $1{,}1025 = 0{,}975 \times 1{,}1308$.

</details>
`,
    qcm: [
      { q: "La valeur ajoutée est égale à :", choix: ["Production + CI", "Production − consommations intermédiaires", "Chiffre d'affaires − salaires", "Production − impôts"], bonne: 1, explication: "Elle mesure la richesse réellement créée." },
      { q: "Additionner les productions de toutes les entreprises conduit à :", choix: ["Le PIB exact", "Des doubles comptes", "Le RNB", "La FBCF"], bonne: 1, explication: "Les consommations intermédiaires seraient comptées plusieurs fois." },
      { q: "Dans l'optique des dépenses, les importations sont :", choix: ["Ajoutées", "Retranchées", "Ignorées", "Multipliées par deux"], bonne: 1, explication: "PIB = C + FBCF + ΔS + G + X − M." },
      { q: "Le RNB est égal au PIB augmenté :", choix: ["Des transferts des MRE", "Des revenus primaires nets reçus du reste du monde", "Des impôts", "De la consommation de capital fixe"], bonne: 1, explication: "Les transferts courants interviennent dans le RNDB." },
      { q: "Les transferts des Marocains résidant à l'étranger augmentent :", choix: ["Le PIB", "Le revenu national disponible brut", "La valeur ajoutée agricole", "La FBCF"], bonne: 1, explication: "Ce sont des transferts courants, pas une production." },
      { q: "PIB nominal + 8 %, prix + 5 %. La croissance en volume est d'environ :", choix: ["13 %", "2,86 %", "3,5 %", "8 %"], bonne: 1, explication: "1,08 / 1,05 − 1 ≈ 2,86 %." },
      { q: "Le produit intérieur net s'obtient en retranchant du PIB :", choix: ["Les impôts", "La consommation de capital fixe", "Les importations", "Les subventions"], bonne: 1, explication: "C'est l'usure du capital pendant l'année." },
      { q: "Le revenu mixte est le revenu :", choix: ["Des sociétés", "Des entrepreneurs individuels", "De l'État", "Des banques"], bonne: 1, explication: "Il rémunère à la fois leur travail et leur capital." },
      { q: "Somme des VA 900, impôts sur les produits 120, subventions 20. Le PIB vaut :", choix: ["1 040", "1 000", "900", "800"], bonne: 1, explication: "900 + 120 − 20 = 1 000." },
      { q: "Pourquoi suit-on le PIB non agricole au Maroc ?", choix: ["Parce que l'agriculture est exclue du PIB", "Parce que la VA agricole fluctue fortement avec la pluviométrie", "Parce qu'il est plus élevé", "Parce qu'il inclut les transferts des MRE"], bonne: 1, explication: "Il reflète mieux la tendance de l'économie." },
    ],
  },

  3: {
    titre: "L'équilibre emplois-ressources",
    description: "Équilibre emplois-ressources : équation macroéconomique fondamentale, TRE, taux de couverture et d'ouverture, épargne nationale et solde courant.",
    resume: md`
## L'essentiel — L'équilibre emplois-ressources

- Ressources = emplois : $P + M = CI + C + G + FBCF + \Delta S + X$.
- **Équation fondamentale** : $PIB + M = C + G + FBCF + \Delta S + X$, soit $PIB = \text{demande intérieure} + (X - M)$.
- Le **TRE** (HCP) présente cet équilibre produit par produit.
- Indicateurs : couverture $X/M$ ; ouverture $(X + M)/(2 PIB)$ ; pénétration $M / \text{demande intérieure}$ ; investissement $FBCF / PIB$.
- **Épargne nationale** $S_n = RNDB - C - G$ ; $S_n - I = (X - M) + RP_{nets} + TC_{nets}$ = **solde courant**.
- $S_n > I$ : capacité de financement ; $S_n < I$ : besoin de financement.
- $(S_{privée} - I) + (T - G) = $ solde courant : **déficits jumeaux**.
- Maroc : déficit commercial structurel compensé en partie par le tourisme et les transferts des MRE ; investissement élevé (environ 30 % du PIB).
`,
    exercices: md`
### Exercice 2 — Retrouver les inconnues

Dans une économie (milliards de DH) : $PIB = 1\,500$, $C = 900$, $G = 270$, $FBCF = 420$, $X = 450$, $M = 560$.

1. Calculez la variation des stocks.
2. Calculez la demande intérieure et le taux de pénétration des importations.
3. Le taux de couverture passe l'année suivante à 85 % avec des importations de 600. Calculez les exportations et le solde commercial.

<details><summary>Voir le corrigé</summary>

**1)** $\Delta S = 1\,500 + 560 - 900 - 270 - 420 - 450 = \mathbf{20}$.

**2)** Demande intérieure : $900 + 270 + 420 + 20 = \mathbf{1\,610}$ (supérieure au PIB : déficit commercial de 110). Taux de pénétration : $560 / 1\,610 \approx$ **34,8 %**.

**3)** $X = 0{,}85 \times 600 = \mathbf{510}$ ; solde commercial $= 510 - 600 = \mathbf{-90}$ : le déficit se réduit.

</details>

### Exercice 3 — Déficits jumeaux

Dans une économie, l'épargne privée est de 280, l'investissement de 300, les recettes fiscales de 250 et les dépenses publiques de 290 (milliards de DH). On néglige les revenus et transferts avec l'extérieur.

1. Calculez le solde du secteur privé, le solde budgétaire et le solde extérieur.
2. Le gouvernement réduit son déficit de 30 ; si le comportement privé est inchangé, quel est le nouveau solde extérieur ?

<details><summary>Voir le corrigé</summary>

**1)** Secteur privé : $280 - 300 = -20$ ; budget : $250 - 290 = -40$ ; solde extérieur : $X - M = -20 - 40 = \mathbf{-60}$.

**2)** Nouveau solde budgétaire $-10$ : $X - M = -20 - 10 = \mathbf{-30}$. La réduction du déficit public améliore le solde extérieur du même montant, toutes choses égales par ailleurs (thèse des déficits jumeaux). En pratique, la baisse de la demande peut aussi modifier l'épargne et l'investissement privés.

</details>
`,
    qcm: [
      { q: "L'équation macroéconomique fondamentale s'écrit :", choix: ["PIB = C + I", "PIB + M = C + G + FBCF + ΔS + X", "PIB = X − M", "PIB + X = C + M"], bonne: 1, explication: "Ressources finales = emplois finals." },
      { q: "Les consommations intermédiaires disparaissent de l'équilibre lorsque :", choix: ["On raisonne en PIB", "On raisonne en production", "Il n'y a pas d'importations", "Les stocks sont nuls"], bonne: 0, explication: "PIB = production − CI." },
      { q: "Exportations 400, importations 500. Le taux de couverture est :", choix: ["125 %", "80 %", "20 %", "90 %"], bonne: 1, explication: "400 / 500 × 100 = 80 %." },
      { q: "Si la demande intérieure dépasse le PIB :", choix: ["Il y a un excédent commercial", "Il y a un déficit commercial", "Les stocks sont négatifs", "Le PIB augmente"], bonne: 1, explication: "PIB = demande intérieure + (X − M)." },
      { q: "L'épargne nationale se calcule à partir :", choix: ["Du PIB", "Du RNDB", "De la production", "Des exportations"], bonne: 1, explication: "Sn = RNDB − C − G." },
      { q: "Si l'épargne nationale est inférieure à l'investissement, la nation a :", choix: ["Une capacité de financement", "Un besoin de financement", "Un excédent courant", "Un budget excédentaire"], bonne: 1, explication: "Elle doit recourir à des capitaux étrangers." },
      { q: "Le solde courant comprend, en plus du solde commercial :", choix: ["Les investissements directs", "Les revenus primaires et les transferts courants", "Les emprunts", "Les réserves de change"], bonne: 1, explication: "Les IDE et les emprunts relèvent du compte financier." },
      { q: "La thèse des déficits jumeaux relie :", choix: ["Déficit budgétaire et déficit extérieur", "Inflation et chômage", "Épargne et consommation", "Import et export"], bonne: 0, explication: "(S − I) + (T − G) = solde courant." },
      { q: "Au Maroc, le déficit commercial est en partie compensé par :", choix: ["Les importations d'énergie", "Le tourisme et les transferts des MRE", "Les achats de céréales", "La dette intérieure"], bonne: 1, explication: "Excédent des services et transferts courants." },
      { q: "PIB 1 000, X 300, M 340. Le taux d'ouverture (X + M) / (2 PIB) vaut :", choix: ["64 %", "32 %", "34 %", "30 %"], bonne: 1, explication: "640 / 2 000 = 32 %." },
    ],
  },

  4: {
    titre: "La consommation, l'épargne et l'investissement",
    description: "Fonction de consommation keynésienne, propensions moyennes et marginales, revenu permanent, cycle de vie, investissement, EMC et accélérateur.",
    resume: md`
## L'essentiel — Consommation, épargne, investissement

- **Loi psychologique fondamentale** : la consommation augmente avec le revenu, mais moins vite.
- $C = c_0 + c\,Y_d$ ; $S = -c_0 + (1 - c)\,Y_d$ ; $Y_d = Y - T$.
- $PMC = C / Y_d$ (décroissante), $PmC = c$ (constante) ; $PMC + PMS = 1$ ; $PmC + PmS = 1$.
- Seuil d'épargne : $Y_d = c_0 / (1 - c)$ ; élasticité-revenu $= PmC / PMC < 1$.
- Duesenberry (revenu relatif, effets de démonstration et de cliquet), Friedman (**revenu permanent**), Modigliani (**cycle de vie**) : une baisse d'impôt temporaire agit peu.
- Investissement : remplacement, capacité, productivité ; déterminants : demande anticipée, taux d'intérêt ($I = I_0 - b\,r$), profits, anticipations.
- **EMC** (Keynes) = taux de rentabilité interne ; on investit si $EMC > r$.
- **Accélérateur** : $I_{net} = v\,\Delta Y$ ; il amplifie les fluctuations.
`,
    exercices: md`
### Exercice 2 — Estimer une fonction de consommation

On observe deux années : revenu disponible 800 et consommation 700 ; puis revenu disponible 1 000 et consommation 860 (milliards de DH).

1. Déterminez la fonction de consommation linéaire $C = c_0 + c\,Y_d$.
2. Déduisez-en la fonction d'épargne et le seuil d'épargne.
3. Calculez la PMC pour un revenu disponible de 1 200 et comparez-la à la PmC.

<details><summary>Voir le corrigé</summary>

**1)** $c = (860 - 700) / (1\,000 - 800) = \mathbf{0{,}8}$ ; $c_0 = 700 - 0{,}8 \times 800 = \mathbf{60}$ : $C = 60 + 0{,}8\,Y_d$.

**2)** $S = -60 + 0{,}2\,Y_d$ ; seuil : $Y_d = 60 / 0{,}2 = \mathbf{300}$.

**3)** $C = 60 + 960 = 1\,020$ ; $PMC = 1\,020 / 1\,200 = \mathbf{0{,}85}$, supérieure à la PmC (0,8) : c'est toujours le cas lorsque $c_0 > 0$.

</details>

### Exercice 3 — Choix d'investissement et taux d'intérêt

Une entreprise étudie trois projets de même coût (1 000 000 DH), dont les taux de rentabilité interne (EMC) sont : A = 11 %, B = 7,5 %, C = 5 %.

1. Quels projets réalise-t-elle si le taux d'intérêt est de 6 % ? de 8 % ?
2. Représentez l'investissement de l'entreprise en fonction du taux d'intérêt et concluez.
3. Un projet coûte 500 000 DH et rapporte 300 000 DH à la fin de chacune des deux années suivantes. Est-il réalisé avec un taux de 10 % ?

<details><summary>Voir le corrigé</summary>

**1)** À 6 % : A et B (investissement de 2 000 000 DH). À 8 % : A seulement (1 000 000 DH).

**2)** L'investissement vaut 3 000 000 DH si $r < 5\,\%$, 2 000 000 DH si $5\,\% \le r < 7{,}5\,\%$, 1 000 000 DH si $7{,}5\,\% \le r < 11\,\%$ et 0 au-delà : c'est une **fonction décroissante** du taux d'intérêt, qui justifie la forme $I = I_0 - b\,r$.

**3)** Valeur actuelle des recettes à 10 % : $300\,000 / 1{,}1 + 300\,000 / 1{,}21 \approx 272\,727 + 247\,934 = 520\,661$ DH > 500 000 DH : la VAN est positive (+ 20 661 DH), le projet est réalisé (son EMC, environ 13,07 %, dépasse 10 %).

</details>
`,
    qcm: [
      { q: "Selon Keynes, lorsque le revenu augmente, la consommation :", choix: ["Diminue", "Augmente moins que le revenu", "Augmente plus que le revenu", "Reste constante"], bonne: 1, explication: "C'est la loi psychologique fondamentale." },
      { q: "Avec C = 100 + 0,8 Yd, la propension marginale à épargner vaut :", choix: ["0,8", "0,2", "100", "1"], bonne: 1, explication: "PmS = 1 − PmC." },
      { q: "Avec C = 100 + 0,8 Yd et Yd = 1 000, la PMC vaut :", choix: ["0,8", "0,9", "1", "0,1"], bonne: 1, explication: "C = 900, donc 900 / 1 000." },
      { q: "Dans la fonction keynésienne, lorsque le revenu augmente, la PMC :", choix: ["Augmente", "Diminue", "Reste égale à la PmC", "Devient négative"], bonne: 1, explication: "La part consommée baisse quand le revenu monte." },
      { q: "La théorie du revenu permanent est due à :", choix: ["Keynes", "Friedman", "Modigliani", "Duesenberry"], bonne: 1, explication: "Milton Friedman, 1957." },
      { q: "L'effet de cliquet signifie que :", choix: ["La consommation baisse vite avec le revenu", "Les ménages réduisent difficilement leur train de vie", "L'épargne est nulle", "Les prix ne baissent jamais"], bonne: 1, explication: "Théorie du revenu relatif de Duesenberry." },
      { q: "Selon la théorie du cycle de vie, les retraités :", choix: ["Épargnent le plus", "Désépargnent", "Ne consomment pas", "S'endettent fortement"], bonne: 1, explication: "Ils consomment l'épargne accumulée." },
      { q: "Une entreprise investit tant que :", choix: ["L'EMC est inférieure au taux d'intérêt", "L'EMC est supérieure au taux d'intérêt", "Le taux d'intérêt augmente", "La production baisse"], bonne: 1, explication: "Le projet rapporte plus qu'il ne coûte." },
      { q: "Avec un coefficient de capital de 3, la production passe de 200 à 210. L'investissement net vaut :", choix: ["630", "30", "10", "3"], bonne: 1, explication: "I = v × ΔY = 3 × 10." },
      { q: "Selon l'accélérateur, un ralentissement de la croissance provoque :", choix: ["Une hausse de l'investissement", "Une baisse de l'investissement", "Aucun effet", "Une hausse des stocks de capital"], bonne: 1, explication: "L'investissement dépend de la variation de la production." },
    ],
  },

  5: {
    titre: "Le marché des biens et services : le multiplicateur et la courbe IS",
    description: "Modèle keynésien : revenu d'équilibre, multiplicateur, multiplicateurs budgétaires, économie ouverte, écart déflationniste et courbe IS, exercices corrigés.",
    resume: md`
## L'essentiel — Multiplicateur et courbe IS

- Hypothèses : prix fixes, sous-emploi, production déterminée par la **demande effective**.
- Équilibre fermé sans État : $Y^* = (c_0 + I_0) / (1 - c)$, équivalent à $S = I$.
- **Multiplicateur** $k = 1 / (1 - c)$ : une dépense devient revenu, dont une partie est redépensée ; les fuites (épargne) arrêtent le processus.
- Avec l'État : $Y^* = (c_0 - c\,T + I_0 + G) / (1 - c)$ ; $k_G = 1/(1 - c)$, $k_T = -c/(1 - c)$, budget équilibré : 1 (Haavelmo).
- Impôt proportionnel : $k = 1 / (1 - c(1 - t))$ (stabilisateur automatique) ; économie ouverte : $k = 1 / (1 - c(1 - t) + m)$.
- **Écart déflationniste** ($Y^* < Y_{pe}$) ou **inflationniste** ; écart en demande $= (Y_{pe} - Y^*) / k$.
- **Paradoxe de l'épargne** : épargner plus réduit le revenu sans augmenter l'épargne totale.
- **IS** : $Y = k(A_0 - b\,r)$, décroissante ; se déplace vers la droite quand $G$ augmente ou $T$ baisse.
`,
    exercices: md`
### Exercice 2 — Multiplicateur en économie ouverte

Une économie est décrite par : $C = 100 + 0{,}8\,Y_d$ ; $T = 0{,}25\,Y$ ; $I = 300$ ; $G = 400$ ; $X = 350$ ; $M = 50 + 0{,}2\,Y$.

1. Calculez le multiplicateur et le revenu d'équilibre.
2. Calculez le solde budgétaire et le solde commercial.
3. Les exportations augmentent de 60 (demande européenne). Calculez le nouveau revenu, le nouveau solde commercial et le nouveau solde budgétaire.

<details><summary>Voir le corrigé</summary>

**1)** $k = 1 / (1 - 0{,}8 \times 0{,}75 + 0{,}2) = 1 / 0{,}6 \approx 1{,}667$. Dépense autonome : $100 + 300 + 400 + 350 - 50 = 1\,100$ ; $Y^* = 1\,100 / 0{,}6 \approx \mathbf{1\,833{,}33}$.

**2)** $T = 458{,}33$ ; solde budgétaire $= 458{,}33 - 400 = \mathbf{+58{,}33}$. $M = 50 + 366{,}67 = 416{,}67$ ; solde commercial $= 350 - 416{,}67 = \mathbf{-66{,}67}$.

**3)** $\Delta Y = 60 / 0{,}6 = 100$ ; $Y = \mathbf{1\,933{,}33}$. $M = 50 + 386{,}67 = 436{,}67$ ; solde commercial $= 410 - 436{,}67 = \mathbf{-26{,}67}$ (amélioration de 40 seulement, car 20 d'importations supplémentaires sont induites). $T = 483{,}33$ ; solde budgétaire $= \mathbf{+83{,}33}$ : la croissance améliore aussi les finances publiques.

</details>

### Exercice 3 — Le paradoxe de l'épargne

Dans une économie fermée sans État, $C = 200 + 0{,}75\,Y$ et $I = 300$.

1. Calculez le revenu d'équilibre, la consommation et l'épargne.
2. Les ménages, inquiets, décident d'épargner 50 de plus à tout niveau de revenu ($c_0$ passe à 150). Calculez le nouvel équilibre.
3. Commentez. Que se passerait-il si l'investissement dépendait positivement du revenu ?

<details><summary>Voir le corrigé</summary>

**1)** $Y^* = 500 / 0{,}25 = \mathbf{2\,000}$ ; $C = 200 + 1\,500 = 1\,700$ ; $S = 300 = I$.

**2)** $Y^* = 450 / 0{,}25 = \mathbf{1\,800}$ ; $C = 150 + 1\,350 = 1\,500$ ; $S = 1\,800 - 1\,500 = 300$.

**3)** Le revenu baisse de 200 (multiplicateur 4) et l'épargne totale **reste égale à 300**, car elle doit égaliser l'investissement : l'effort d'épargne est annulé par la baisse du revenu. Si l'investissement augmentait avec le revenu, la baisse du revenu réduirait l'investissement, et l'épargne totale **diminuerait** : le paradoxe serait encore plus fort.

</details>
`,
    qcm: [
      { q: "Avec une PmC de 0,75, le multiplicateur d'investissement vaut :", choix: ["0,75", "4", "1,33", "0,25"], bonne: 1, explication: "k = 1 / (1 − 0,75)." },
      { q: "Le multiplicateur fiscal (impôts forfaitaires) est égal à :", choix: ["1 / (1 − c)", "− c / (1 − c)", "1", "c"], bonne: 1, explication: "Une baisse d'impôt est en partie épargnée." },
      { q: "Selon le théorème d'Haavelmo, le multiplicateur du budget équilibré vaut :", choix: ["0", "1", "1 / (1 − c)", "c"], bonne: 1, explication: "ΔG = ΔT entraîne ΔY = ΔG." },
      { q: "En économie ouverte, le multiplicateur est plus faible car :", choix: ["Les exportations augmentent", "Les importations constituent une fuite", "L'épargne disparaît", "Les prix augmentent"], bonne: 1, explication: "Une partie de la dépense profite aux producteurs étrangers." },
      { q: "c = 0,8 ; t = 0,25. Le multiplicateur avec impôt proportionnel vaut :", choix: ["5", "2,5", "4", "1,25"], bonne: 1, explication: "1 / (1 − 0,8 × 0,75) = 1 / 0,4." },
      { q: "Revenu d'équilibre 900, revenu de plein emploi 1 000, multiplicateur 4. L'écart déflationniste en demande est de :", choix: ["100", "25", "400", "250"], bonne: 1, explication: "100 / 4 = 25." },
      { q: "La courbe IS représente l'équilibre :", choix: ["Du marché monétaire", "Du marché des biens et services", "Du marché du travail", "De la balance des paiements"], bonne: 1, explication: "Investissement = épargne." },
      { q: "Une hausse des dépenses publiques déplace la courbe IS :", choix: ["Vers la gauche", "Vers la droite", "Ne la déplace pas", "La rend verticale"], bonne: 1, explication: "À taux donné, le revenu d'équilibre augmente de k × ΔG." },
      { q: "La courbe IS est décroissante car :", choix: ["Une hausse du taux réduit l'investissement et le revenu", "Une hausse du revenu augmente le taux", "La demande de monnaie baisse", "Les prix sont flexibles"], bonne: 0, explication: "Baisse de l'investissement amplifiée par le multiplicateur." },
      { q: "Le paradoxe de l'épargne signifie qu'une hausse de l'épargne désirée :", choix: ["Augmente le revenu", "Réduit le revenu sans augmenter l'épargne totale", "Augmente l'investissement", "Réduit les impôts"], bonne: 1, explication: "L'épargne reste égale à l'investissement autonome." },
    ],
  },

  6: {
    titre: "La monnaie et le marché monétaire : la courbe LM",
    description: "Monnaie : fonctions, création monétaire, multiplicateur, agrégats M1 M2 M3 au Maroc, demande de monnaie keynésienne, courbe LM et Bank Al-Maghrib.",
    resume: md`
## L'essentiel — Monnaie et courbe LM

- Fonctions : **unité de compte**, **intermédiaire des échanges**, **réserve de valeur** ; formes : fiduciaire, scripturale, électronique.
- « **Les crédits font les dépôts** » : les banques créent la monnaie en prêtant ; le remboursement la détruit.
- Base monétaire $H = B + R$ ; multiplicateur $m = (1 + e) / (e + r)$ ; $M = m \times H$.
- Agrégats de BAM : **M1** (fiduciaire + scriptural), **M2** (+ comptes sur carnets), **M3** (+ dépôts à terme, devises, OPCVM monétaires…). Contreparties : avoirs extérieurs nets, créances sur l'économie, créances nettes sur l'État.
- Demande de monnaie keynésienne : transaction et précaution ($k\,Y$), spéculation ($L_0 - h\,r$) ; **trappe à liquidité**.
- **LM** : $M^o / P = k\,Y + L_0 - h\,r$ ; croissante ; horizontale (trappe), verticale (cas classique).
- Hausse de $M^o$ : LM vers la droite ; hausse de $P$ : LM vers la gauche.
- **Bank Al-Maghrib** (loi 40-17) : stabilité des prix ; taux directeur, open market, facilités permanentes, réserve obligatoire.
`,
    exercices: md`
### Exercice 2 — Le multiplicateur monétaire

La base monétaire d'une économie est de 400 milliards de DH. Le public conserve des billets équivalant à 30 % de ses dépôts et les banques gardent 10 % de leurs dépôts en réserves.

1. Calculez le multiplicateur monétaire et la masse monétaire.
2. La banque centrale relève le taux de réserve à 20 %. Calculez la nouvelle masse monétaire.
3. Le développement du paiement mobile réduit la préférence pour les billets à 20 % (réserves à 10 %). Quel est l'effet ?

<details><summary>Voir le corrigé</summary>

**1)** $m = 1{,}3 / (0{,}3 + 0{,}1) = \mathbf{3{,}25}$ ; $M = 3{,}25 \times 400 = \mathbf{1\,300}$.

**2)** $m = 1{,}3 / 0{,}5 = 2{,}6$ ; $M = \mathbf{1\,040}$ : la hausse des réserves obligatoires réduit la capacité de création monétaire (baisse de 260).

**3)** $m = 1{,}2 / 0{,}3 = 4$ ; $M = \mathbf{1\,600}$ : moins de billets signifie moins de fuites hors du système bancaire, donc plus de création monétaire à base monétaire donnée.

</details>

### Exercice 3 — Prix des obligations et taux d'intérêt

Une obligation perpétuelle rapporte un coupon fixe de 60 DH par an.

1. Quel est son prix si le taux d'intérêt du marché est de 6 % ? de 4 % ? de 8 % ?
2. Expliquez pourquoi, selon Keynes, les agents détiennent plus de monnaie lorsque le taux d'intérêt est bas.

<details><summary>Voir le corrigé</summary>

**1)** Prix d'une rente perpétuelle $= \text{coupon} / r$ : **1 000 DH** à 6 %, **1 500 DH** à 4 %, **750 DH** à 8 %. Le prix des obligations varie en sens inverse du taux.

**2)** Quand le taux est bas, les agents anticipent sa remontée, donc une **baisse du prix des obligations** (perte en capital) : ils préfèrent garder de la monnaie en attendant. Quand le taux est élevé, ils anticipent une baisse du taux, donc une hausse du prix des titres, et achètent des obligations. La demande de monnaie de spéculation est ainsi **décroissante** du taux d'intérêt.

</details>
`,
    qcm: [
      { q: "La fonction de la monnaie qui permet de comparer les prix est :", choix: ["La réserve de valeur", "L'unité de compte", "L'intermédiaire des échanges", "La spéculation"], bonne: 1, explication: "Tous les prix sont exprimés en dirhams." },
      { q: "« Les crédits font les dépôts » signifie que :", choix: ["Les dépôts précèdent toujours les crédits", "Les banques créent de la monnaie en accordant des crédits", "La banque centrale accorde les crédits", "Les crédits réduisent la masse monétaire"], bonne: 1, explication: "Le compte de l'emprunteur est crédité : monnaie nouvelle." },
      { q: "Billets = 25 % des dépôts, réserves = 15 %. Le multiplicateur monétaire vaut :", choix: ["2,5", "3,125", "4", "6,67"], bonne: 1, explication: "1,25 / 0,40 = 3,125." },
      { q: "L'agrégat M1 comprend :", choix: ["Les dépôts à terme", "La monnaie fiduciaire et les dépôts à vue", "Les comptes sur carnets", "Les bons du Trésor"], bonne: 1, explication: "C'est l'agrégat le plus liquide." },
      { q: "Selon Keynes, la demande de monnaie de spéculation :", choix: ["Augmente avec le taux d'intérêt", "Diminue quand le taux d'intérêt augmente", "Dépend du revenu", "Est nulle"], bonne: 1, explication: "Coût d'opportunité et anticipations sur le prix des titres." },
      { q: "La courbe LM est croissante car une hausse du revenu :", choix: ["Réduit l'offre de monnaie", "Augmente la demande de transaction, ce qui fait monter le taux", "Réduit l'investissement", "Augmente les prix"], bonne: 1, explication: "L'offre étant fixe, le taux monte pour réduire la demande de spéculation." },
      { q: "Dans la trappe à liquidité, la courbe LM est :", choix: ["Verticale", "Horizontale", "Décroissante", "Inexistante"], bonne: 1, explication: "La demande de monnaie est infinie au taux plancher." },
      { q: "Une hausse de l'offre de monnaie déplace LM :", choix: ["Vers la gauche", "Vers la droite", "Vers le haut", "Ne la déplace pas"], bonne: 1, explication: "À revenu donné, le taux d'intérêt baisse." },
      { q: "L'objectif principal de Bank Al-Maghrib est :", choix: ["Le plein emploi", "La stabilité des prix", "La croissance des exportations", "L'équilibre budgétaire"], bonne: 1, explication: "Fixé par son statut (loi 40-17)." },
      { q: "Le taux directeur de Bank Al-Maghrib est le taux :", choix: ["Des crédits immobiliers", "Des avances à 7 jours accordées aux banques", "Des dépôts à terme", "Des bons du Trésor à 10 ans"], bonne: 1, explication: "Il oriente le taux interbancaire." },
    ],
  },

  7: {
    titre: "L'équilibre IS-LM et la politique économique",
    description: "Modèle IS-LM : équilibre général, politique budgétaire et effet d'éviction, politique monétaire, efficacité selon les pentes et policy mix.",
    resume: md`
## L'essentiel — IS-LM et politique économique

- **IS** (biens, décroissante) et **LM** (monnaie, croissante) ; leur intersection donne $(Y^*, r^*)$.
- $Y^* = \dfrac{h\,A_0 + b\,(M^o/P - L_0)}{h\,(1 - c) + b\,\ell}$.
- **Politique budgétaire** : IS vers la droite ; $r$ monte, l'investissement baisse : **effet d'éviction** ; multiplicateur $h / (h(1 - c) + b\,\ell) < 1/(1 - c)$.
- **Politique monétaire** : LM vers la droite ; $r$ baisse, $I$ et $Y$ augmentent. Canaux : taux, crédit, change, prix des actifs, anticipations.
- Trappe à liquidité (LM horizontale) : budget efficace, monnaie inefficace. Cas classique (LM verticale) : l'inverse. IS verticale : monnaie inefficace.
- **Policy mix** : relance budgétaire + monnaie accommodante = pas d'éviction.
- Limites : prix fixes, économie fermée (Mundell-Fleming), anticipations.
`,
    exercices: md`
### Exercice 2 — Lecture de l'effet d'éviction

On donne IS : $Y = 2\,400 - 60\,r$ et LM : $Y = 1\,200 + 90\,r$ ; le multiplicateur simple vaut 3 et $I = 400 - 20\,r$.

1. Calculez l'équilibre.
2. Les dépenses publiques augmentent de 50. Calculez le nouvel équilibre et l'effet d'éviction.
3. Montrez que l'effet d'éviction correspond à la baisse de l'investissement multipliée par 3.

<details><summary>Voir le corrigé</summary>

**1)** $2\,400 - 60\,r = 1\,200 + 90\,r \Rightarrow r = \mathbf{8\,\%}$, $Y = \mathbf{1\,920}$.

**2)** IS : $Y = 2\,550 - 60\,r$ ; $2\,550 - 60\,r = 1\,200 + 90\,r \Rightarrow r = \mathbf{9\,\%}$, $Y = \mathbf{2\,010}$. Hausse de 90 au lieu de 150 : éviction de **60**.

**3)** L'investissement passe de $400 - 160 = 240$ à $400 - 180 = 220$ : baisse de 20, et $20 \times 3 = 60$ ✔.

</details>

### Exercice 3 — Quelle politique choisir ?

Pour chaque situation, indiquez la politique la plus efficace pour relancer l'activité et justifiez avec les courbes IS et LM :
1. Les taux d'intérêt sont déjà proches de zéro et les agents thésaurisent.
2. La demande de monnaie est très peu sensible au taux d'intérêt.
3. Les entreprises, très pessimistes, n'investissent pas quel que soit le taux.
4. Le déficit public est déjà élevé mais l'inflation est faible.

<details><summary>Voir le corrigé</summary>

1. **Trappe à liquidité** (LM horizontale) : la politique monétaire ne peut plus baisser le taux ; la **politique budgétaire** est pleinement efficace, sans éviction.
2. LM presque **verticale** (cas classique) : la relance budgétaire est presque entièrement évincée ; la **politique monétaire** est efficace.
3. IS presque **verticale** : la baisse du taux ne stimule pas l'investissement ; seule la **politique budgétaire** agit directement sur la demande.
4. Un **policy mix** : assainissement budgétaire progressif accompagné d'un **assouplissement monétaire** (baisse des taux) pour soutenir l'investissement privé.

</details>
`,
    qcm: [
      { q: "Le modèle IS-LM a été formalisé par :", choix: ["Keynes", "Hicks", "Friedman", "Phillips"], bonne: 1, explication: "John Hicks, 1937." },
      { q: "Une hausse des dépenses publiques déplace :", choix: ["LM vers la droite", "IS vers la droite", "IS vers la gauche", "LM vers la gauche"], bonne: 1, explication: "La demande de biens augmente à tout taux d'intérêt." },
      { q: "L'effet d'éviction résulte :", choix: ["D'une baisse des prix", "De la hausse du taux d'intérêt qui réduit l'investissement privé", "D'une hausse des exportations", "D'une baisse des impôts"], bonne: 1, explication: "La hausse du revenu augmente la demande de monnaie." },
      { q: "Une hausse de l'offre de monnaie entraîne dans IS-LM :", choix: ["Hausse du taux et baisse du revenu", "Baisse du taux et hausse du revenu", "Hausse des deux", "Aucun effet"], bonne: 1, explication: "LM se déplace vers la droite." },
      { q: "Dans la trappe à liquidité, la politique monétaire est :", choix: ["Très efficace", "Inefficace", "Inflationniste", "Obligatoire"], bonne: 1, explication: "Le taux ne peut plus baisser." },
      { q: "Si la courbe LM est verticale, la politique budgétaire :", choix: ["Est pleinement efficace", "Est inefficace (éviction totale)", "Réduit le taux", "Augmente l'offre de monnaie"], bonne: 1, explication: "Le revenu est fixé par l'offre de monnaie." },
      { q: "Pour supprimer l'effet d'éviction d'une relance budgétaire, la banque centrale doit :", choix: ["Réduire l'offre de monnaie", "Augmenter l'offre de monnaie pour garder le taux constant", "Augmenter le taux directeur", "Vendre des devises"], bonne: 1, explication: "C'est un policy mix de relance coordonnée." },
      { q: "IS : Y = 2 000 − 80r ; LM : Y = 1 100 + 100r. Le taux d'équilibre est :", choix: ["4 %", "5 %", "6 %", "9 %"], bonne: 1, explication: "180 r = 900." },
      { q: "Le multiplicateur budgétaire dans IS-LM est :", choix: ["Supérieur au multiplicateur simple", "Inférieur au multiplicateur simple", "Toujours égal à 1", "Nul"], bonne: 1, explication: "À cause de l'éviction, sauf trappe à liquidité." },
      { q: "Le modèle de Mundell-Fleming étend IS-LM :", choix: ["Au long terme", "À l'économie ouverte", "Au marché du travail", "À l'inflation"], bonne: 1, explication: "Il intègre le change et les mouvements de capitaux." },
    ],
  },

  8: {
    titre: "Inflation, chômage et politique monétaire",
    description: "Inflation (IPC, causes, théorie quantitative, relation de Fisher), chômage BIT, loi d'Okun, courbe de Phillips et politique de Bank Al-Maghrib.",
    resume: md`
## L'essentiel — Inflation, chômage, politique monétaire

- **Inflation** : hausse générale et durable des prix ; désinflation, déflation, stagflation, hyperinflation.
- **IPC** (HCP) : indice de Laspeyres, $\sum w_i \, p_{i,t} / p_{i,0} \times 100$ ; **inflation sous-jacente** hors produits volatils et réglementés.
- Salaire réel = nominal / indice ; **Fisher** : $(1 + i) = (1 + r)(1 + \pi)$.
- Causes : demande, coûts, importée, monétaire, structurelle ; spirale prix-salaires. Maroc 2022 : inflation importée supérieure à 6 %.
- **Théorie quantitative** : $M V = P Y$ ; $\pi \approx \Delta M/M - \Delta Y/Y$ si $V$ stable.
- **Chômage (BIT)** : sans emploi, disponible, en recherche active ; taux = chômeurs / population active. Types : frictionnel, structurel, conjoncturel, classique.
- **Okun** : $\Delta u = -\alpha(g - g^*)$. **Phillips** augmentée : $\pi = \pi^e - \beta(u - u^*)$ ; verticale à long terme (NAIRU).
- **Bank Al-Maghrib** : taux directeur relevé de 1,5 % à 3 % (2022-2023) puis abaissé à partir de 2024 ; transition vers le ciblage d'inflation.
`,
    exercices: md`
### Exercice 2 — Indice de Laspeyres

Un panier comprend trois biens (quantités de l'année de base) :

| Bien | Quantité | Prix année 0 | Prix année 1 |
|---|---:|---:|---:|
| Farine (kg) | 20 | 8 | 9 |
| Huile (litres) | 5 | 18 | 21 |
| Transport (trajets) | 40 | 5 | 5 |

1. Calculez le coût du panier en année 0 et en année 1, puis l'indice de Laspeyres.
2. Calculez les pondérations de chaque bien dans le panier de base et retrouvez l'indice par la moyenne pondérée des indices élémentaires.

<details><summary>Voir le corrigé</summary>

**1)** Année 0 : $160 + 90 + 200 = 450$ ; année 1 : $180 + 105 + 200 = 485$. Indice : $485 / 450 \times 100 \approx \mathbf{107{,}78}$ (inflation de 7,78 %).

**2)** Pondérations : farine $160/450 \approx 35{,}6\,\%$ ; huile $90/450 = 20\,\%$ ; transport $200/450 \approx 44{,}4\,\%$. Indices élémentaires : 112,5 ; 116,67 ; 100. Moyenne pondérée : $0{,}3556 \times 112{,}5 + 0{,}2 \times 116{,}67 + 0{,}4444 \times 100 \approx 40 + 23{,}33 + 44{,}44 = \mathbf{107{,}78}$ ✔.

</details>

### Exercice 3 — Chômage et activité

Dans un pays, la population en âge de travailler est de 28 millions ; 12,6 millions de personnes ont un emploi et 1,8 million sont au chômage au sens du BIT.

1. Calculez la population active, le taux d'activité et le taux de chômage.
2. 300 000 chômeurs découragés cessent de chercher un emploi. Recalculez le taux de chômage et commentez.

<details><summary>Voir le corrigé</summary>

**1)** Population active : $12{,}6 + 1{,}8 = \mathbf{14{,}4}$ millions ; taux d'activité : $14{,}4 / 28 \approx$ **51,4 %** ; taux de chômage : $1{,}8 / 14{,}4 =$ **12,5 %**.

**2)** Ils sortent de la population active (ils ne recherchent plus d'emploi) : chômeurs 1,5 million, population active 14,1 millions, taux de chômage $1{,}5 / 14{,}1 \approx$ **10,6 %**. Le chômage baisse sans création d'emplois : il faut toujours regarder aussi le **taux d'activité** (tombé à 50,4 %) et le taux d'emploi.

</details>
`,
    qcm: [
      { q: "L'inflation est :", choix: ["La hausse du prix d'un produit", "Une hausse générale et durable des prix", "Une baisse du PIB", "Une hausse des salaires"], bonne: 1, explication: "Elle réduit le pouvoir d'achat de la monnaie." },
      { q: "La désinflation désigne :", choix: ["Une baisse des prix", "Un ralentissement de la hausse des prix", "Une hausse du chômage", "Une hausse des taux"], bonne: 1, explication: "Les prix augmentent encore, mais moins vite." },
      { q: "Au Maroc, l'indice des prix à la consommation est calculé par :", choix: ["Bank Al-Maghrib", "Le HCP", "Le ministère du Commerce", "L'Office des changes"], bonne: 1, explication: "Chaque mois." },
      { q: "Taux nominal 5 %, inflation 3 %. Le taux réel est d'environ :", choix: ["8 %", "1,94 %", "2,5 %", "0,6 %"], bonne: 1, explication: "1,05 / 1,03 − 1 ≈ 1,94 %." },
      { q: "Selon la théorie quantitative, si M augmente de 10 %, Y de 4 % et V est stable, l'inflation est d'environ :", choix: ["14 %", "6 %", "4 %", "10 %"], bonne: 1, explication: "π ≈ 10 − 4." },
      { q: "Est chômeur au sens du BIT une personne :", choix: ["Sans emploi seulement", "Sans emploi, disponible et en recherche active", "Qui travaille à temps partiel", "Qui a plus de 60 ans"], bonne: 1, explication: "Les trois conditions sont cumulatives." },
      { q: "Le chômage dû à une insuffisance de la demande est :", choix: ["Frictionnel", "Keynésien (conjoncturel)", "Classique", "Structurel"], bonne: 1, explication: "Il se combat par la relance de la demande." },
      { q: "La courbe de Phillips originale relie :", choix: ["Croissance et chômage", "Hausse des salaires et chômage", "Monnaie et prix", "Taux et investissement"], bonne: 1, explication: "Phillips, 1958, au Royaume-Uni." },
      { q: "Selon Friedman, à long terme la courbe de Phillips est :", choix: ["Décroissante", "Verticale", "Horizontale", "Croissante"], bonne: 1, explication: "Le chômage revient à son niveau naturel." },
      { q: "Face à l'inflation de 2022, Bank Al-Maghrib a :", choix: ["Baissé son taux directeur", "Relevé son taux directeur", "Supprimé le taux directeur", "Dévalué le dirham de 20 %"], bonne: 1, explication: "De 1,5 % à 3 % entre septembre 2022 et mars 2023." },
    ],
  },
};

export default chapitres;
