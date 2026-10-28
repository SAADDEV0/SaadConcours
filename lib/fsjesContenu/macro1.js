// Macroéconomie 1 (S1) — compléments par chapitre : description SEO, résumé, exercices 2 et 3, QCM.
// Les chapitres 1 à 4 viennent de l'ancien module « Macroéconomie » (S2), séparé le 2026-10-28.
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
    titre: "Classiques et keynésiens : deux visions de l'équilibre macroéconomique",
    description: "Loi de Say, marché du travail classique, fonds prêtables, théorie quantitative, neutralité de la monnaie, demande effective, paradoxe de l'épargne.",
    resume: md`
## L'essentiel — Classiques et keynésiens

- **Loi de Say** (1803) : les produits s'échangent contre des produits ; les revenus distribués sont entièrement dépensés, pas de surproduction générale durable.
- **Marché du travail classique** : demande de travail décroissante ($PmL = w = W/P$), offre croissante ; salaire réel flexible donc **plein emploi** ; chômage seulement volontaire, frictionnel ou **classique** (salaire trop élevé).
- **Fonds prêtables** : $S(r)$ croissante, $I(r)$ décroissante ; le taux d'intérêt égalise épargne et investissement, toute l'épargne est investie.
- **Théorie quantitative** : $M V = P Y$ ; avec $V$ stable et $Y$ de plein emploi, la monnaie ne fixe que $P$.
- **Dichotomie** et **neutralité** de la monnaie : sphère réelle et sphère monétaire séparées.
- **Keynes** (1936) : la **demande effective** anticipée fixe la production et l'emploi ; équilibre de **sous-emploi** possible, chômage **involontaire**.
- Chez Keynes, l'épargne dépend du **revenu**, le taux d'intérêt est le prix de la **liquidité**, le salaire nominal est rigide et sa baisse réduirait la demande.
- **Paradoxe de l'épargne** : vouloir épargner plus fait baisser le revenu sans augmenter l'épargne totale (égale à l'investissement).
- Politique : État minimal chez les classiques ; régulation de la demande chez Keynes (dépenses publiques, impôts, taux).
- Prolongements : synthèse IS-LM, monétaristes (Friedman), nouvelle économie classique (Lucas), nouveaux keynésiens.
`,
    exercices: md`
### Exercice 2 — Une hausse de l'épargne : deux lectures

Dans une économie au plein emploi ($Y = 1\,000$ milliards de DH), l'épargne et l'investissement s'écrivent, selon les classiques, $S = 150 + 10\,r$ et $I = 250 - 15\,r$ ($r$ en %).

1. Calculez le taux d'intérêt d'équilibre, l'épargne, l'investissement et la consommation.
2. Les ménages décident d'épargner 25 de plus à chaque taux : $S = 175 + 10\,r$. Calculez le nouvel équilibre et la nouvelle consommation. La production change-t-elle ?
3. Un keynésien décrit la même économie par $C = 80 + 0{,}75\,Y$ et $I = 150$. Calculez la production et l'épargne. Les ménages réduisent leur consommation autonome de 20 ($C = 60 + 0{,}75\,Y$) : calculez la nouvelle production et la nouvelle épargne.
4. Comparez les deux résultats.

<details><summary>Voir le corrigé</summary>

**1)** $150 + 10\,r = 250 - 15\,r$, soit $r = \mathbf{4\,\%}$ et $S = I = \mathbf{190}$. Consommation : $C = Y - S = 1\,000 - 190 = \mathbf{810}$.

**2)** $175 + 10\,r = 250 - 15\,r$, soit $r = \mathbf{3\,\%}$ ; $S = I = \mathbf{205}$ ; $C = 1\,000 - 205 = \mathbf{795}$. La production reste de 1 000 : la baisse du taux transforme l'épargne supplémentaire en investissement. La consommation baisse de 15, l'investissement augmente de 15.

**3)** $Y = 80 + 0{,}75\,Y + 150$ donne $Y = 230 / 0{,}25 = \mathbf{920}$ et $S = 920 - (80 + 690) = \mathbf{150} = I$. Après le choc : $Y = 210 / 0{,}25 = \mathbf{840}$ et $S = 840 - (60 + 630) = \mathbf{150}$.

**4)** Chez les classiques, épargner plus finance plus d'investissement sans perte de production. Chez Keynes, l'épargne totale ne bouge pas (elle reste égale à un investissement inchangé) mais le revenu chute de 80 : c'est le **paradoxe de l'épargne**. La différence vient du rôle du taux d'intérêt : prix de l'épargne chez les classiques, prix de la liquidité chez Keynes.

</details>

### Exercice 3 — Classique ou keynésien ?

Attribuez chaque proposition à l'approche classique (C) ou keynésienne (K) et justifiez en une phrase :
1. « Une baisse des salaires réduit la consommation et peut aggraver le chômage. »
2. « La monnaie est un voile. »
3. « Le taux d'intérêt rémunère la renonciation à la liquidité. »
4. « Le chômage durable vient d'un salaire réel supérieur à la productivité marginale. »
5. « Les entrepreneurs produisent ce qu'ils pensent pouvoir vendre. »
6. « L'offre crée sa propre demande. »
7. « Une hausse de la masse monétaire de 5 % fait monter les prix de 5 %. »
8. « En période de crise, l'État doit augmenter ses dépenses, même au prix d'un déficit. »

<details><summary>Voir le corrigé</summary>

1. **K** : le salaire est aussi un revenu ; sa baisse réduit la demande effective.
2. **C** : la monnaie ne sert qu'aux échanges et n'influence pas la sphère réelle (dichotomie).
3. **K** : théorie de la préférence pour la liquidité.
4. **C** : c'est le chômage classique, lié à un coût du travail trop élevé.
5. **K** : principe de la demande effective.
6. **C** : loi des débouchés de Say.
7. **C** : théorie quantitative avec $V$ stable et production de plein emploi.
8. **K** : la dépense publique soutient la demande insuffisante ; les classiques prônent l'équilibre budgétaire.

</details>
`,
    qcm: [
      { q: "La loi des débouchés est due à :", choix: ["Keynes", "Jean-Baptiste Say", "Irving Fisher", "Milton Friedman"], bonne: 1, explication: "Traité d'économie politique, 1803." },
      { q: "Selon la loi de Say :", choix: ["La demande crée sa propre offre", "L'offre crée sa propre demande", "L'épargne est une fuite", "La monnaie détermine la production"], bonne: 1, explication: "Les revenus distribués par la production sont entièrement dépensés." },
      { q: "Dans le modèle classique, l'emploi dépend :", choix: ["Du salaire nominal", "Du salaire réel", "De la masse monétaire", "De la demande effective"], bonne: 1, explication: "Les entreprises embauchent jusqu'à ce que la productivité marginale égale W/P." },
      { q: "Chez les classiques, ce qui égalise l'épargne et l'investissement est :", choix: ["Le revenu", "Le taux d'intérêt", "Le niveau des prix", "Le salaire"], bonne: 1, explication: "Sur le marché des fonds prêtables." },
      { q: "M = 300, V = 4, Y = 1 200. Le niveau des prix est :", choix: ["0,25", "1", "4", "16"], bonne: 1, explication: "P = MV/Y = 1 200 / 1 200." },
      { q: "La neutralité de la monnaie signifie qu'une hausse de la masse monétaire :", choix: ["Augmente la production", "Ne modifie que les prix nominaux", "Fait baisser les prix", "Réduit le chômage"], bonne: 1, explication: "Les grandeurs réelles sont fixées hors de la sphère monétaire." },
      { q: "La Théorie générale de Keynes paraît en :", choix: ["1803", "1936", "1958", "1973"], bonne: 1, explication: "Après la crise de 1929." },
      { q: "Chez Keynes, le niveau de production est fixé par :", choix: ["L'offre de travail", "La demande effective anticipée", "La masse monétaire", "Le taux d'intérêt seul"], bonne: 1, explication: "Les entrepreneurs produisent ce qu'ils pensent vendre." },
      { q: "C = 80 + 0,75Y et I = 150. La production d'équilibre est :", choix: ["230", "920", "1 000", "306,7"], bonne: 1, explication: "0,25Y = 230, donc Y = 920." },
      { q: "Le paradoxe de l'épargne signifie que :", choix: ["L'épargne totale augmente toujours", "Vouloir épargner plus peut réduire le revenu sans accroître l'épargne", "L'épargne finance toujours l'investissement", "Le taux d'intérêt monte"], bonne: 1, explication: "L'épargne reste égale à l'investissement, le revenu baisse." },
    ],
  },
};

export default chapitres;
