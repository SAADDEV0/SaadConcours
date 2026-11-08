// Marketing Opérationnel (S5, filière Marketing et Actions Commerciales) — compléments par chapitre : description SEO, résumé, exercices 2 et 3, QCM.
const md = String.raw;

const chapitres = {
  1: {
    titre: "Le marketing opérationnel : du plan d'action au tableau de bord",
    description: "Marketing stratégique et opérationnel, objectifs SMART, plan d'action, méthodes de budget, compte de résultat marketing, contribution, tableau de bord et ROI.",
    resume: md`
## L'essentiel — Plan d'action et tableau de bord

- Le **marketing opérationnel** met en œuvre la stratégie à court terme par le plan de marchéage, dans un budget, avec des résultats mesurés.
- Objectifs **SMART**, de trois familles : commerciaux (volume, PDM), comportementaux (essai, réachat), de communication (notoriété, image).
- Plan d'action : quoi, qui, quand, combien, comment mesurer ; calendrier marocain (Ramadan, Aïd, rentrée, été).
- Budget : % du CA (simple mais logique inversée), alignement concurrence (**part de voix**), **objectifs et moyens** (le plus logique).
- **Contribution marketing** = marge sur coût variable − dépenses marketing imputables.
- Volume couvrant le budget : $Q_{min} = \text{Dépenses marketing} / \text{marge unitaire}$.
- $\text{ROI} = (\text{marge additionnelle} - \text{coût}) / \text{coût}$ ; toujours sur la marge, jamais sur le CA.
- Tableau de bord : indicateurs de résultat (ventes, PDM, contribution) et d'action (DN, notoriété, visites).
`,
    exercices: md`
### Exercice 2 — Le compte de résultat de deux marques

La société Nadif commercialise deux lessives :

| | Marque A | Marque B |
|---|---:|---:|
| Volume (unités) | 800 000 | 300 000 |
| Prix net (DH) | 12 | 20 |
| Coût variable unitaire (DH) | 7,20 | 13 |
| Dépenses marketing (DH) | 2 100 000 | 2 400 000 |

1. Établissez le compte de résultat marketing de chaque marque.
2. Quel volume la marque B doit-elle vendre pour couvrir ses dépenses marketing ?
3. Faut-il abandonner la marque B ? Discutez.

<details><summary>Voir le corrigé</summary>

**1)**

| | Marque A | Marque B |
|---|---:|---:|
| Chiffre d'affaires | 9 600 000 | 6 000 000 |
| Coûts variables | 5 760 000 | 3 900 000 |
| Marge sur coût variable | 3 840 000 | 2 100 000 |
| Dépenses marketing | 2 100 000 | 2 400 000 |
| **Contribution** | **1 740 000** | **−300 000** |

**2)** Marge unitaire de B : $20 - 13 = 7$ DH. Volume minimal : $2\,400\,000 / 7 \approx 342\,857$ unités, soit environ 42 900 de plus qu'aujourd'hui.

**3)** Pas forcément. Si B est en phase de lancement, des dépenses élevées sont normales et la contribution peut devenir positive avec la croissance des ventes. Il faut examiner sa trajectoire (ventes, réachat), sa place dans le positionnement de l'entreprise et la possibilité de réduire ses dépenses. Si B est une marque ancienne en déclin, la réduction du budget ou le retrait se discutent.

</details>

### Exercice 3 — Fixer le budget de communication

Sur le marché des eaux minérales, les dépenses de communication de toutes les marques atteignent 40 000 000 DH par an. La marque Aïn Tafraout détient 10 % de part de marché et prévoit un chiffre d'affaires de 50 000 000 DH. Sa règle habituelle est de consacrer 6 % du CA à la communication.

1. Calculez le budget selon la règle habituelle et la part de voix correspondante.
2. Quel budget permettrait d'aligner la part de voix sur la part de marché ?
3. Quelle méthode recommanderiez-vous ?

<details><summary>Voir le corrigé</summary>

**1)** Budget : $50\,000\,000 \times 6\,\% = 3\,000\,000$ DH. Part de voix : $3\,000\,000 / 40\,000\,000 = 7{,}5\,\%$.

**2)** Pour une part de voix de 10 % : $40\,000\,000 \times 10\,\% = 4\,000\,000$ DH.

**3)** Une part de voix (7,5 %) inférieure à la part de marché (10 %) expose la marque à une érosion. La méthode **objectifs et moyens** est préférable : fixer l'objectif (maintenir ou gagner de la part de marché), chiffrer les actions nécessaires, puis vérifier la contribution. Le chiffre de 4 000 000 DH est un repère utile, pas une règle automatique.

</details>
`,
    qcm: [
      { q: "Le marketing opérationnel se situe plutôt :", choix: ["Sur un horizon de 10 ans", "Sur le court terme, souvent l'année", "Uniquement au lancement d'un produit", "En dehors de tout budget"], bonne: 1, explication: "Il met en œuvre la stratégie à court terme." },
      { q: "Quel objectif est rédigé de façon SMART ?", choix: ["Augmenter les ventes", "Être leader", "Atteindre 15 % de part de marché en volume à Casablanca au 31 décembre", "Améliorer l'image"], bonne: 2, explication: "Il est chiffré, localisé et daté." },
      { q: "La contribution marketing est égale à :", choix: ["CA moins coûts variables", "Marge sur coût variable moins dépenses marketing imputables", "CA moins dépenses marketing", "Résultat net"], bonne: 1, explication: "Elle mesure l'apport de la marque à la couverture des frais communs." },
      { q: "Une marque a une marge unitaire de 2 DH et un budget marketing de 600 000 DH. Le volume couvrant ce budget est :", choix: ["120 000", "300 000", "600 000", "1 200 000"], bonne: 1, explication: "600 000 / 2 = 300 000 unités." },
      { q: "Le ROI d'une action marketing se calcule à partir de :", choix: ["Le CA additionnel", "La marge additionnelle", "Le nombre de clients", "La notoriété"], bonne: 1, explication: "Le CA ne dit rien de ce que l'action rapporte vraiment." },
      { q: "La part de voix est :", choix: ["La part de marché en valeur", "La part des dépenses de communication de la marque dans celles de la catégorie", "Le taux de notoriété", "Le nombre de spots diffusés"], bonne: 1, explication: "Une part de voix durablement inférieure à la PDM menace la PDM." },
      { q: "La méthode de budget la plus logique est :", choix: ["Le pourcentage du CA passé", "Les objectifs et moyens", "Le montant de l'an dernier", "Le budget résiduel"], bonne: 1, explication: "Elle relie le budget aux résultats attendus." },
      { q: "Une action coûte 200 000 DH et génère 260 000 DH de marge additionnelle. Le ROI vaut :", choix: ["130 %", "30 %", "60 000 DH", "77 %"], bonne: 1, explication: "(260 000 − 200 000) / 200 000 = 0,30." },
      { q: "Un indicateur d'action dans un tableau de bord marketing est :", choix: ["La contribution", "Le chiffre d'affaires", "La distribution numérique", "Le résultat net"], bonne: 2, explication: "Il explique les résultats, mais n'en est pas un." },
      { q: "Pour isoler l'effet d'une action, on compare les ventes :", choix: ["À celles des concurrents", "À une base sans action (période précédente, zone témoin)", "Au budget", "Au prix"], bonne: 1, explication: "Seule la marge additionnelle compte." },
    ],
  },

  2: {
    titre: "La gestion opérationnelle du produit et de la marque",
    description: "Analyse de gamme (Pareto, contribution), retrait d'une référence, cannibalisation, modèle de Parfitt-Collins, capital de marque et MDD, avec exercices corrigés.",
    resume: md`
## L'essentiel — Produit et marque

- **Référence** : unité de la gamme (variété, format) ; chaque référence a un coût de rayon, de stock et de production.
- **Pareto / ABC** : classer par CA décroissant, cumuler ; peu de références font l'essentiel des ventes.
- Contribution d'une référence = MCV − frais fixes spécifiques ; une contribution négative durable sans rôle stratégique justifie le retrait.
- Décisions : défendre, maintenir, relancer, retirer (en gérant stocks et distributeurs).
- **Taux de cannibalisation** = ventes perdues par l'existant / ventes du nouveau produit.
- Marge nette additionnelle = $Q_{nouveau} \times m_{nouveau} - Q_{cannibalisé} \times m_{existant}$.
- **Parfitt-Collins** : $PDM = P \times R \times I$ (pénétration × réachat × intensité d'achat) ; le réachat dépend du produit.
- **Capital de marque** : notoriété, image, fidélité ; extension de marque ; pression des marques de distributeurs.
`,
    exercices: md`
### Exercice 2 — Analyse ABC d'une gamme de jus

Une entreprise de jus vend cinq références (CA en milliers de DH) : Orange 1 L : 4 800 ; Mangue 1 L : 1 800 ; Orange 25 cl : 900 ; Grenade 1 L : 300 ; Figue de Barbarie 1 L : 200.

1. Classez les références et calculez les pourcentages cumulés du CA.
2. Répartissez-les en groupes A, B et C (A jusqu'à environ 80 %, B jusqu'à environ 95 %).
3. La Figue de Barbarie a une marge sur coût variable de 50 000 DH et des frais fixes spécifiques de 70 000 DH. Que recommandez-vous ?

<details><summary>Voir le corrigé</summary>

**1)** Total : 8 000. Orange 1 L : 60 % ; Mangue : 82,5 % cumulé ; Orange 25 cl : 93,75 % ; Grenade : 97,5 % ; Figue de Barbarie : 100 %.

**2)** **A** : Orange 1 L et Mangue (82,5 % du CA avec 2 références sur 5) ; **B** : Orange 25 cl ; **C** : Grenade et Figue de Barbarie.

**3)** Contribution : $50\,000 - 70\,000 = -20\,000$ DH. Avant de retirer la référence, il faut vérifier son rôle (image d'innovation, produit du terroir apprécié d'un distributeur, saisonnalité). Sinon, on peut la relancer (réduire les frais spécifiques, vendre en édition limitée de saison) ou la retirer.

</details>

### Exercice 3 — Cannibalisation d'un nouveau format

Une marque de thé vend 2 000 000 boîtes de 200 g (marge unitaire 6 DH). Elle lance un format de 100 g (marge unitaire 3,60 DH) et en prévoit 900 000 boîtes. Elle estime que 60 % des acheteurs du nouveau format auraient sinon acheté une boîte de 200 g, à raison d'une boîte de 200 g pour deux boîtes de 100 g.

1. Combien de boîtes de 200 g sont cannibalisées ?
2. Calculez la marge nette additionnelle du lancement.
3. Le nouveau format est-il intéressant ?

<details><summary>Voir le corrigé</summary>

**1)** Boîtes de 100 g venant de clients du 200 g : $900\,000 \times 60\,\% = 540\,000$, soit $540\,000 / 2 = 270\,000$ boîtes de 200 g perdues.

**2)** Marge du 100 g : $900\,000 \times 3{,}60 = 3\,240\,000$ DH. Marge perdue : $270\,000 \times 6 = 1\,620\,000$ DH. Marge nette additionnelle : **1 620 000 DH**.

**3)** Oui : le gain net est positif, et la marge au gramme du petit format (3,60 DH pour 100 g) est supérieure à celle du grand (6 DH pour 200 g, soit 3 DH pour 100 g). Le petit format conquiert aussi des clients au budget limité. Il faut cependant vérifier les frais fixes spécifiques du lancement.

</details>
`,
    qcm: [
      { q: "Selon la loi de Pareto appliquée à une gamme :", choix: ["Toutes les références se valent", "Une petite partie des références fait l'essentiel des ventes", "Les petites références sont les plus rentables", "Il faut avoir 20 références"], bonne: 1, explication: "C'est la règle des 20/80." },
      { q: "La contribution d'une référence est égale à :", choix: ["Son CA", "Sa marge sur coût variable moins ses frais fixes spécifiques", "Son CA moins ses frais fixes", "Sa part de marché"], bonne: 1, explication: "On isole ce que la référence apporte vraiment." },
      { q: "Le taux de cannibalisation rapporte :", choix: ["Les ventes du concurrent à nos ventes", "Les ventes perdues par le produit existant aux ventes du nouveau produit", "Le CA au coût", "La marge au prix"], bonne: 1, explication: "Il mesure la part des ventes prise à la gamme existante." },
      { q: "Dans le modèle de Parfitt-Collins, la PDM est égale à :", choix: ["Pénétration + réachat", "Pénétration × réachat × intensité d'achat", "Notoriété × prix", "Réachat / pénétration"], bonne: 1, explication: "PDM = P × R × I." },
      { q: "Pénétration 30 %, réachat 20 %, intensité 1. La PDM estimée est :", choix: ["50 %", "6 %", "10 %", "0,6 %"], bonne: 1, explication: "0,30 × 0,20 × 1 = 0,06." },
      { q: "Un indice d'intensité d'achat supérieur à 1 signifie que les acheteurs du produit :", choix: ["Sont de petits consommateurs de la catégorie", "Sont de gros consommateurs de la catégorie", "Ne rachètent pas", "Sont fidèles à la concurrence"], bonne: 1, explication: "Ils achètent plus que la moyenne dans la catégorie." },
      { q: "Le taux de réachat dépend surtout :", choix: ["De la promotion de lancement", "De la satisfaction à l'égard du produit", "Du nombre d'échantillons", "Du prix de lancement seul"], bonne: 1, explication: "La promotion fait l'essai, le produit fait le réachat." },
      { q: "L'extension de marque consiste à :", choix: ["Créer une nouvelle marque", "Utiliser une marque connue pour une autre catégorie de produits", "Augmenter le prix", "Vendre à l'étranger"], bonne: 1, explication: "Elle réduit le coût de lancement mais peut diluer l'image." },
      { q: "Les marques de distributeurs (MDD) :", choix: ["Appartiennent aux fabricants", "Sont vendues sous le nom ou les marques propres des enseignes", "Sont interdites au Maroc", "Sont toujours plus chères"], bonne: 1, explication: "Elles mettent les marques nationales sous pression." },
      { q: "Avant de retirer une référence déficitaire, il faut vérifier :", choix: ["Uniquement son CA", "Son rôle dans l'offre et auprès des clients", "Son ancienneté", "Sa couleur de packaging"], bonne: 1, explication: "Elle peut être indispensable à un client ou à l'image." },
    ],
  },

  3: {
    titre: "Les décisions de prix opérationnelles",
    description: "Élasticité-prix, baisse de prix et marge, volume d'équilibre, prix d'acceptabilité, remises successives, yield management et loi 104-12, avec exercices.",
    resume: md`
## L'essentiel — Décisions de prix

- Le **prix net** (après rabais, remises, ristournes, escomptes) détermine la marge.
- **Élasticité-prix** : $e = (\Delta Q / Q) / (\Delta P / P)$ ; $\lvert e \rvert > 1$ demande élastique (une baisse de prix augmente le CA).
- Juger sur la **marge**, pas sur le CA.
- Hausse de volume nécessaire après une baisse de prix : $m_0 / m_1 - 1$ ; baisse tolérable après une hausse : $1 - m_0 / m_1$.
- **Prix d'acceptabilité** : deux questions (trop cher, qualité douteuse) ; le prix psychologique maximise la part d'acceptants.
- Réductions successives : $P_{net} = P_{tarif} \times (1 - r_1)(1 - r_2)\dots$ ; elles ne s'additionnent pas.
- **Yield management** : prix ajustés selon la demande dans les services à capacité fixe.
- Maroc : liberté des prix et concurrence (loi 104-12, Conseil de la concurrence), information du consommateur (loi 31-08).
`,
    exercices: md`
### Exercice 2 — Une promotion à −15 % est-elle rentable ?

Un fabricant de couscous vend 60 000 sachets par mois à 18 DH (coût variable 12 DH). Il envisage une baisse de prix temporaire de 15 % pendant un mois et prévoit un volume de 75 000 sachets.

1. Calculez la marge du mois sans promotion et avec promotion.
2. Quelle hausse de volume faudrait-il pour maintenir la marge ?
3. Calculez l'élasticité implicite de la prévision.

<details><summary>Voir le corrigé</summary>

**1)** Sans promotion : $60\,000 \times 6 = 360\,000$ DH. Avec promotion : prix $18 \times 0{,}85 = 15{,}30$ DH, marge unitaire $3{,}30$ DH, marge $75\,000 \times 3{,}30 = 247\,500$ DH. Perte : **112 500 DH**.

**2)** $6 / 3{,}30 - 1 \approx 81{,}8\,\%$ : il faudrait vendre environ 109 091 sachets.

**3)** Volume : $+25\,\%$ ; prix : $-15\,\%$ ; $e = 25 / (-15) \approx -1{,}67$. Même avec une demande élastique, la baisse de 15 % est trop forte pour une marge unitaire de 6 DH sur 18 DH. La promotion ne se justifie que si elle recrute des clients qui rachèteront ensuite au prix normal.

</details>

### Exercice 3 — Remises en cascade et ristourne

Un distributeur de matériel électrique achète au tarif de 120 000 DH. Il obtient une remise de 12 %, puis une remise de 5 % pour quantité, puis un escompte de 2 % pour paiement à la commande.

1. Calculez le net à payer.
2. Quel est le taux de réduction global ?
3. En fin d'année, son chiffre d'affaires avec le fournisseur dépasse le seuil prévu et il reçoit une ristourne de 3 % sur ses achats nets de l'année, soit 2 400 000 DH. Montant de la ristourne ?

<details><summary>Voir le corrigé</summary>

**1)** $120\,000 \times 0{,}88 \times 0{,}95 \times 0{,}98 = 98\,313{,}60$ DH.

**2)** $1 - 98\,313{,}60 / 120\,000 \approx 18{,}07\,\%$ (et non 19 %).

**3)** $2\,400\,000 \times 3\,\% = 72\,000$ DH, versés en fin de période.

</details>
`,
    qcm: [
      { q: "Le prix passe de 100 à 90 DH et les ventes passent de 1 000 à 1 300 unités. L'élasticité-prix vaut :", choix: ["−0,3", "−3", "−1,3", "+3"], bonne: 1, explication: "+30 % / −10 % = −3." },
      { q: "Avec une demande inélastique, une baisse de prix :", choix: ["Augmente le CA", "Diminue le CA", "Ne change rien", "Augmente toujours la marge"], bonne: 1, explication: "La hausse des quantités ne compense pas la baisse du prix." },
      { q: "Prix 40 DH, coût variable 30 DH. Après une baisse à 35 DH, la hausse de volume nécessaire pour garder la marge est :", choix: ["12,5 %", "50 %", "100 %", "14,3 %"], bonne: 2, explication: "10 / 5 − 1 = 100 %." },
      { q: "Le prix psychologique est le prix qui :", choix: ["Couvre exactement les coûts", "Maximise la proportion de la cible prête à acheter", "Est le plus bas du marché", "Finit par 99"], bonne: 1, explication: "Ni trop cher, ni suspect." },
      { q: "Deux remises successives de 10 % et 10 % équivalent à une remise globale de :", choix: ["20 %", "19 %", "21 %", "10 %"], bonne: 1, explication: "1 − 0,9 × 0,9 = 0,19." },
      { q: "La ristourne est accordée :", choix: ["Pour un défaut de qualité", "En fin de période sur le volume d'affaires réalisé", "Pour un paiement comptant", "Sur le prix catalogue de chaque produit"], bonne: 1, explication: "Le rabais compense un défaut, l'escompte un paiement anticipé." },
      { q: "L'escompte est une réduction :", choix: ["Commerciale liée à la quantité", "Financière liée au paiement comptant ou anticipé", "Accordée par l'État", "Liée à la saison"], bonne: 1, explication: "Il rémunère l'avance de trésorerie." },
      { q: "Le yield management convient surtout :", choix: ["Aux produits stockables", "Aux services à capacité fixe comme les hôtels et le transport", "Aux produits de luxe uniquement", "Au commerce de gros"], bonne: 1, explication: "Une place non vendue est perdue." },
      { q: "Au Maroc, le principe de liberté des prix est posé par :", choix: ["La loi 31-08", "La loi 104-12", "La loi 09-08", "La loi 65-99"], bonne: 1, explication: "Loi relative à la liberté des prix et de la concurrence." },
      { q: "Pour juger une baisse de prix, il faut comparer :", choix: ["Les chiffres d'affaires", "Les marges totales", "Les volumes", "Les prix des concurrents"], bonne: 1, explication: "Un CA en hausse peut cacher une marge en baisse." },
    ],
  },

  4: {
    titre: "La distribution, le trade marketing et le merchandising",
    description: "Distribution au Maroc, marges en cascade, taux de marge et de marque, coefficient multiplicateur, DN et DV, trade marketing, linéaire et indice de performance.",
    resume: md`
## L'essentiel — Distribution, trade marketing, merchandising

- Maroc : commerce traditionnel très dense + grande distribution + proximité organisée et discount + commerce en ligne.
- **Taux de marge** = marge / $PA_{HT}$ ; **taux de marque** = marge / $PV_{HT}$ ; ne pas les confondre.
- **Coefficient multiplicateur** = $PV_{TTC} / PA_{HT}$ ; calcul à rebours depuis le prix public.
- **DN** = points de vente qui référencent / points de vente de l'univers ; **DV** = poids de ces points de vente dans le CA de la catégorie.
- $PDM = DV \times PDM_{détenteurs}$ : agir sur la présence ou sur la performance en magasin.
- **Trade marketing** : référencement, négociation annuelle, promotions communes, partage d'informations ; **capitaine de catégorie**.
- Merchandising : linéaire développé = au sol × niveaux ; facings ; niveaux des yeux et des mains ; emplacements chauds.
- **Indice de performance** = part de marge (ou de CA) / part de linéaire ; marge par mètre.
`,
    exercices: md`
### Exercice 2 — Du prix départ usine au prix public

Un fabricant de biscuits vend un paquet 4 DH HT à un distributeur régional, qui applique un taux de marge de 12,5 %. L'épicier applique ensuite un coefficient multiplicateur de 1,44 (TVA de 20 % incluse).

1. Calculez le prix d'achat de l'épicier et le prix public TTC.
2. Calculez le taux de marque de l'épicier.
3. Le fabricant veut un prix public de 5 DH. À quel prix doit-il vendre, toutes choses égales par ailleurs ?

<details><summary>Voir le corrigé</summary>

**1)** Prix d'achat de l'épicier : $4 \times 1{,}125 = 4{,}50$ DH HT. Prix public : $4{,}50 \times 1{,}44 = 6{,}48$ DH TTC.

**2)** $PV_{HT} = 6{,}48 / 1{,}20 = 5{,}40$ DH. Taux de marque : $(5{,}40 - 4{,}50) / 5{,}40 \approx 16{,}7\,\%$.

**3)** Prix d'achat de l'épicier : $5 / 1{,}44 \approx 3{,}47$ DH ; prix du fabricant : $3{,}47 / 1{,}125 \approx 3{,}09$ DH HT. Il faudrait sans doute réduire le format (grammage) plutôt que le prix de cession.

</details>

### Exercice 3 — DN, DV et part de marché

Dans une région, l'univers compte 5 000 points de vente. Une marque de lait en poudre est référencée dans 1 500 d'entre eux, qui réalisent 40 % des ventes de la catégorie. Sa part de marché dans ces magasins est de 25 %.

1. Calculez la DN, la DV et la part de marché.
2. La force de vente propose deux plans : (a) entrer dans 1 000 petites épiceries de plus, qui portent la DV à 46 % ; (b) organiser des animations qui portent la PDM détenteurs à 30 % sans changer la DV. Lequel rapporte le plus de part de marché ?

<details><summary>Voir le corrigé</summary>

**1)** DN $= 1\,500 / 5\,000 = 30\,\%$ ; DV $= 40\,\%$ ; PDM $= 40\,\% \times 25\,\% = 10\,\%$.

**2)** (a) $46\,\% \times 25\,\% = 11{,}5\,\%$, soit +1,5 point. (b) $40\,\% \times 30\,\% = 12\,\%$, soit +2 points. Le plan (b) rapporte plus de part de marché ; il faut ensuite comparer les coûts des deux plans.

</details>
`,
    qcm: [
      { q: "Un produit acheté 80 DH HT et vendu 100 DH HT a un taux de marque de :", choix: ["25 %", "20 %", "80 %", "125 %"], bonne: 1, explication: "20 / 100 = 20 % ; le taux de marge serait 20 / 80 = 25 %." },
      { q: "Le coefficient multiplicateur se calcule par :", choix: ["PV HT / PA HT", "PV TTC / PA HT", "Marge / PV", "PA / PV"], bonne: 1, explication: "Il intègre la marge et la TVA." },
      { q: "La distribution numérique mesure :", choix: ["Le poids des magasins qui référencent dans les ventes de la catégorie", "Le pourcentage de points de vente qui référencent le produit", "Les ventes en ligne", "Le nombre de facings"], bonne: 1, explication: "Chaque magasin compte pour un." },
      { q: "Une DV nettement supérieure à la DN signifie que le produit est présent :", choix: ["Surtout dans les petits points de vente", "Surtout dans les gros points de vente de la catégorie", "Partout", "Uniquement en ligne"], bonne: 1, explication: "La DV pondère par le poids dans les ventes." },
      { q: "DV = 50 % et PDM détenteurs = 16 %. La PDM est :", choix: ["66 %", "8 %", "34 %", "3,1 %"], bonne: 1, explication: "0,50 × 0,16 = 0,08." },
      { q: "Le linéaire développé est égal à :", choix: ["Le linéaire au sol", "Le linéaire au sol multiplié par le nombre de niveaux", "Le nombre de facings", "La surface du magasin"], bonne: 1, explication: "On compte chaque étagère." },
      { q: "Les niveaux de présentation qui vendent le mieux sont :", choix: ["Le sol et le haut de l'étagère", "Le niveau des yeux et celui des mains", "Le fond du magasin", "La réserve"], bonne: 1, explication: "Ce sont les plus visibles et accessibles." },
      { q: "Un produit qui fait 15 % de la marge du rayon avec 10 % du linéaire a un indice de performance de :", choix: ["0,67", "1,5", "25", "5"], bonne: 1, explication: "15 / 10 = 1,5 : il mérite plus de place." },
      { q: "Le capitaine de catégorie est :", choix: ["Le chef de rayon", "Un fabricant chargé de recommander la gestion de tout un rayon", "Le directeur du magasin", "Un grossiste"], bonne: 1, explication: "Il propose assortiment, linéaire et promotions pour la catégorie." },
      { q: "Le trade marketing consiste à :", choix: ["Vendre à l'étranger", "Adapter la politique marketing à chaque distributeur et construire des actions communes", "Supprimer les intermédiaires", "Fixer le prix public"], bonne: 1, explication: "Fabricant et distributeur cherchent ensemble à vendre plus." },
    ],
  },

  5: {
    titre: "La communication publicitaire et le plan média",
    description: "Copy-strategy, choix des médias et des supports, audience utile, CPM, GRP, couverture et répétition, duplication, coût par GRP et cadre légal (HACA, loi 31-08).",
    resume: md`
## L'essentiel — Publicité et plan média

- **Copy-strategy** : promesse, preuve, bénéfice consommateur, ton, contraintes.
- Pré-test (compréhension, attribution) avant diffusion ; post-test (mémorisation, intention d'achat) après.
- **Média** (TV, radio, presse, affichage, internet) ≠ **support** (une chaîne, une station, un site).
- **Audience utile** = cible touchée ; points d'audience = audience utile / cible.
- $CPM_{utile} = \text{coût} / \text{audience utile} \times 1\,000$ ; coût par point = coût / points.
- $GRP = \text{couverture} \times \text{répétition}$ = somme des points des insertions ; coût par GRP = coût total / GRP.
- Couverture de deux supports : $A + B - \text{duplication}$ ; couverture utile = part de la cible touchée au moins trois fois.
- Maroc : loi 77-03 et HACA pour l'audiovisuel ; publicité trompeuse interdite (loi 31-08).
`,
    exercices: md`
### Exercice 2 — Comparer trois supports de presse

La cible compte 1 200 000 cadres. Trois magazines sont étudiés :

| Titre | Audience totale | Part de cadres dans l'audience | Coût d'une page (DH) |
|---|---:|---:|---:|
| M1 | 400 000 | 30 % | 36 000 |
| M2 | 150 000 | 60 % | 27 000 |
| M3 | 250 000 | 40 % | 25 000 |

1. Calculez l'audience utile, le CPM utile et les points d'audience de chaque titre.
2. Classez les titres.

<details><summary>Voir le corrigé</summary>

**1)**
- M1 : audience utile $400\,000 \times 30\,\% = 120\,000$ ; CPM utile $36\,000 / 120 = 300$ DH ; points $= 10$.
- M2 : $90\,000$ ; CPM utile $27\,000 / 90 = 300$ DH ; points $= 7{,}5$.
- M3 : $100\,000$ ; CPM utile $25\,000 / 100 = 250$ DH ; points $\approx 8{,}3$.

**2)** M3 a le CPM utile le plus faible. M1 et M2 sont à égalité sur le CPM ; M1 apporte plus de couverture par insertion, M2 une meilleure **affinité** (60 % de cadres), utile si le message s'adresse précisément à eux.

</details>

### Exercice 3 — Couverture, répétition et duplication

Une campagne combine un réseau d'affichage (couverture 40 % de la cible) et une radio (couverture 35 %). 15 % de la cible est touchée par les deux. Le plan totalise 330 GRP.

1. Calculez la couverture globale.
2. Calculez la répétition moyenne.
3. Que faire si l'objectif est de toucher 70 % de la cible ?

<details><summary>Voir le corrigé</summary>

**1)** $40 + 35 - 15 = 60\,\%$.

**2)** $330 / 60 = 5{,}5$ expositions en moyenne.

**3)** La répétition est déjà élevée ; il faut gagner de la couverture plutôt que de la pression : ajouter un support qui touche des personnes différentes (réseaux sociaux, autre station), avec une faible duplication avec les deux premiers.

</details>
`,
    qcm: [
      { q: "Dans une copy-strategy, la preuve sert à :", choix: ["Fixer le budget", "Rendre la promesse crédible", "Choisir les supports", "Mesurer l'audience"], bonne: 1, explication: "Elle justifie ce qui est promis." },
      { q: "Une chaîne de télévision précise est :", choix: ["Un média", "Un support", "Une cible", "Un GRP"], bonne: 1, explication: "La télévision est le média, la chaîne le support." },
      { q: "Un spot coûte 12 000 DH et touche 300 000 personnes de la cible. Le CPM utile est :", choix: ["25 DH", "40 DH", "400 DH", "4 DH"], bonne: 1, explication: "12 000 / 300 = 40 DH." },
      { q: "Le GRP est égal à :", choix: ["Couverture + répétition", "Couverture × répétition", "Coût / audience", "Audience totale / cible"], bonne: 1, explication: "C'est aussi la somme des points d'audience des insertions." },
      { q: "15 insertions de 8 points chacune donnent :", choix: ["23 GRP", "120 GRP", "8 GRP", "1,9 GRP"], bonne: 1, explication: "15 × 8 = 120." },
      { q: "Avec 240 GRP et une couverture de 60 %, la répétition moyenne est :", choix: ["4", "2,4", "180", "0,25"], bonne: 0, explication: "240 / 60 = 4." },
      { q: "La duplication désigne :", choix: ["Le fait de diffuser deux fois le même spot", "Les personnes touchées par deux supports à la fois", "Une copie illégale", "Le doublement du budget"], bonne: 1, explication: "Elle se retire quand on additionne des couvertures." },
      { q: "La couverture utile est souvent définie comme la part de la cible touchée :", choix: ["Une fois", "Au moins trois fois", "Dix fois", "Jamais"], bonne: 1, explication: "En dessous, le message nouveau est peu mémorisé." },
      { q: "Au Maroc, la régulation de la publicité audiovisuelle relève de :", choix: ["Bank Al-Maghrib", "La HACA", "L'AMMC", "La CNDP"], bonne: 1, explication: "Haute Autorité de la Communication Audiovisuelle, loi 77-03." },
      { q: "Pour comparer deux supports, on retient d'abord :", choix: ["L'audience totale", "L'audience utile et le CPM utile", "Le nombre de pages", "La notoriété du support"], bonne: 1, explication: "Seule la cible compte." },
    ],
  },

  6: {
    titre: "La promotion des ventes, le marketing direct et la fidélisation",
    description: "Techniques de promotion, coût d'une opération, taux de remontée, marketing direct et taux de retour d'équilibre, valeur client (CLV), RFM et loi 09-08.",
    resume: md`
## L'essentiel — Promotion, marketing direct, fidélisation

- **Promotion des ventes** : avantage temporaire pour un effet immédiat ; cibles : consommateurs, distributeurs, force de vente.
- Mécanismes : réduction de prix, produit en plus, prime, jeu, essai.
- Coût d'une opération = avantage accordé + frais fixes + frais de gestion ; juger sur les ventes **additionnelles**.
- **Taux de remontée** : part des bons distribués effectivement utilisés.
- **Marketing direct** : message personnalisé, réponse mesurable ; segmentation **RFM** (récence, fréquence, montant).
- Taux de retour d'équilibre = coût par contact / marge par commande.
- $CLV = m \times n - CAC$ ; durée moyenne ≈ $1 / (1 - r)$ avec $r$ le taux de fidélité.
- Loi 09-08 : consentement préalable pour la prospection par courriel et SMS, droit d'opposition, CNDP ; loi 31-08 : vente à distance et pratiques trompeuses.
`,
    exercices: md`
### Exercice 2 — Un bon de réduction rentable ?

Une marque de dentifrice distribue 300 000 bons de 4 DH dans la presse gratuite. Coût d'impression et de diffusion : 45 000 DH. Taux de remontée : 5 %. Frais de traitement : 0,40 DH par bon remonté. Marge unitaire normale : 7 DH. On estime que la moitié des achats avec bon sont additionnels.

1. Calculez le nombre de bons utilisés et le coût total de l'opération.
2. Calculez la marge additionnelle et le résultat de l'opération.

<details><summary>Voir le corrigé</summary>

**1)** Bons utilisés : $300\,000 \times 5\,\% = 15\,000$. Coût : réductions $15\,000 \times 4 = 60\,000$ ; traitement $15\,000 \times 0{,}40 = 6\,000$ ; impression 45 000. Total : **111 000 DH**.

**2)** Achats additionnels : 7 500, marge $7\,500 \times 7 = 52\,500$ DH. Résultat : $52\,500 - 111\,000 = -58\,500$ DH. L'opération n'est défendable que si elle recrute des clients durables.

</details>

### Exercice 3 — Valeur client d'un opérateur internet

Un fournisseur d'accès internet gagne une marge de 1 200 DH par an et par abonné. Le taux de fidélité annuel est de 75 %. Le coût d'acquisition d'un abonné (publicité, installation offerte, commission) est de 1 500 DH.

1. Calculez la durée moyenne de l'abonnement et la CLV.
2. Un programme de fidélité coûtant 150 DH par abonné et par an porterait la fidélité à 80 %. Est-il rentable ?

<details><summary>Voir le corrigé</summary>

**1)** Durée : $1 / 0{,}25 = 4$ ans. $CLV = 1\,200 \times 4 - 1\,500 = 3\,300$ DH.

**2)** Durée : $1 / 0{,}20 = 5$ ans ; marge annuelle nette du programme : $1\,200 - 150 = 1\,050$ DH. $CLV = 1\,050 \times 5 - 1\,500 = 3\,750$ DH. Le programme augmente la CLV de 450 DH : il est rentable.

</details>
`,
    qcm: [
      { q: "La promotion des ventes cherche surtout :", choix: ["Un effet d'image à long terme", "Un effet immédiat sur l'achat", "À réduire les coûts", "À remplacer la force de vente"], bonne: 1, explication: "La publicité agit plutôt à moyen terme." },
      { q: "Un lot « 3 pour le prix de 2 » équivaut à une réduction par unité de :", choix: ["50 %", "33 %", "25 %", "66 %"], bonne: 1, explication: "On paie 2 unités sur 3, soit une réduction d'un tiers." },
      { q: "Le taux de remontée mesure :", choix: ["La part des clients fidèles", "La part des bons distribués qui sont utilisés", "La hausse des ventes", "Le taux de marge"], bonne: 1, explication: "Il sert à calculer le coût réel d'une offre de bons." },
      { q: "Pour juger une promotion, il faut retenir :", choix: ["Les ventes totales pendant l'opération", "Les ventes additionnelles", "Le nombre de bons imprimés", "Le prix catalogue"], bonne: 1, explication: "Une partie des ventes aurait eu lieu sans promotion." },
      { q: "Un envoi coûte 5 DH par contact et une commande rapporte 100 DH de marge. Le taux de retour d'équilibre est :", choix: ["20 %", "5 %", "0,5 %", "50 %"], bonne: 1, explication: "5 / 100 = 5 %." },
      { q: "La segmentation RFM repose sur :", choix: ["Revenu, famille, métier", "Récence, fréquence, montant", "Région, format, marque", "Rentabilité, fidélité, marge"], bonne: 1, explication: "Elle repère les clients les plus réactifs." },
      { q: "Avec un taux de fidélité annuel de 80 %, la durée moyenne de la relation est d'environ :", choix: ["0,8 an", "5 ans", "8 ans", "1,25 an"], bonne: 1, explication: "1 / (1 − 0,8) = 5 ans." },
      { q: "La CLV se calcule sur :", choix: ["Le chiffre d'affaires", "La marge apportée par le client", "Le nombre d'achats", "Le prix moyen"], bonne: 1, explication: "On en retire le coût d'acquisition." },
      { q: "Au Maroc, la prospection par SMS exige :", choix: ["Une autorisation de la HACA", "Le consentement préalable du destinataire", "Un dépôt à la Bourse", "Aucune condition"], bonne: 1, explication: "Loi 09-08, sous le contrôle de la CNDP." },
      { q: "Un effet pervers fréquent des promotions répétées est :", choix: ["La hausse durable des prix", "L'habitude d'attendre la promotion pour acheter", "La baisse de la notoriété des concurrents", "La disparition des stocks"], bonne: 1, explication: "La marque perd de la valeur perçue." },
    ],
  },

  7: {
    titre: "La force de vente : dimensionner, rémunérer, piloter",
    description: "Missions et structures de la force de vente, méthode de la charge de travail, sectorisation, fixe et commission, seuil d'indifférence et ratios des vendeurs.",
    resume: md`
## L'essentiel — La force de vente

- Missions : prospection, vente, service, information, merchandising terrain.
- Modèles au Maroc : prévente, vente-livraison, distributeurs régionaux, responsables grands comptes.
- Structures : géographique, par produit, par clientèle, mixte.
- **Charge de travail** (Talley, 1961) : $N = \sum n_i f_i / (J \times v)$, arrondi à l'unité supérieure.
- **Sectorisation** : équilibrer charge de travail et potentiel ; optimiser les tournées.
- Rémunération : fixe (sécurité), commission (incitation), primes sur objectifs, avantages ; commissionner plutôt sur la marge.
- **Seuil d'indifférence** : CA pour lequel deux systèmes coûtent autant.
- Ratios : taux de transformation (commandes / visites), panier moyen (CA / commandes), CA par visite, taux de couverture, coût de la force de vente / CA.
`,
    exercices: md`
### Exercice 2 — Combien de délégués médicaux ?

Un laboratoire pharmaceutique doit visiter 600 médecins spécialistes 10 fois par an, 2 400 généralistes 6 fois par an et 1 500 pharmacies 4 fois par an. Un délégué travaille 210 jours par an et fait 8 visites par jour.

1. Calculez le nombre de délégués nécessaires.
2. Pour réduire l'effectif, la direction propose de ramener les visites des généralistes à 4 par an. Nouvel effectif ?

<details><summary>Voir le corrigé</summary>

**1)** Visites : $600 \times 10 + 2\,400 \times 6 + 1\,500 \times 4 = 6\,000 + 14\,400 + 6\,000 = 26\,400$. Capacité : $210 \times 8 = 1\,680$. Effectif : $26\,400 / 1\,680 \approx 15{,}7$, soit **16 délégués**.

**2)** Visites : $6\,000 + 9\,600 + 6\,000 = 21\,600$ ; $21\,600 / 1\,680 \approx 12{,}9$, soit **13 délégués**. Il faut vérifier que la baisse de fréquence ne fait pas perdre des prescriptions.

</details>

### Exercice 3 — Choisir un système de rémunération

Deux systèmes sont proposés pour des commerciaux en équipement de bureau : (1) fixe mensuel de 7 000 DH + 1 % du CA ; (2) fixe de 3 000 DH + 5 % de la marge brute, la marge brute représentant 40 % du CA.

1. Exprimez le système 2 en pourcentage du CA.
2. Calculez le seuil d'indifférence.
3. Pour un CA mensuel de 300 000 DH, quel système coûte le moins cher ? Quel avantage présente le système 2 ?

<details><summary>Voir le corrigé</summary>

**1)** $5\,\% \times 40\,\% = 2\,\%$ du CA.

**2)** $7\,000 + 0{,}01\,CA = 3\,000 + 0{,}02\,CA$, d'où $CA = 400\,000$ DH.

**3)** Système 1 : $7\,000 + 3\,000 = 10\,000$ DH ; système 2 : $3\,000 + 6\,000 = 9\,000$ DH. Le système 2 coûte moins cher à ce niveau de CA et, comme il porte sur la marge, il dissuade les commerciaux d'accorder des remises excessives.

</details>
`,
    qcm: [
      { q: "La méthode de la charge de travail calcule l'effectif à partir :", choix: ["Du budget disponible", "Du nombre de visites nécessaires et de la capacité d'un vendeur", "Du CA des concurrents", "Du nombre de produits"], bonne: 1, explication: "Elle part des besoins de visite des clients." },
      { q: "Une charge de 50 000 visites et une capacité de 3 200 visites par vendeur donnent :", choix: ["15 vendeurs", "16 vendeurs", "15,6 vendeurs exactement", "64 vendeurs"], bonne: 1, explication: "15,6 arrondi à l'unité supérieure." },
      { q: "Une structure par clientèle consiste à :", choix: ["Confier un territoire à chaque vendeur", "Affecter les vendeurs selon le type de client", "Spécialiser les vendeurs par produit", "Supprimer les vendeurs"], bonne: 1, explication: "Épiceries, grandes surfaces, cafés et restaurants…" },
      { q: "Une bonne sectorisation équilibre :", choix: ["Le nombre de produits et le prix", "La charge de travail et le potentiel des secteurs", "Les salaires et les impôts", "Les stocks et les livraisons"], bonne: 1, explication: "Des secteurs inégaux créent des injustices." },
      { q: "Le fixe dans la rémunération d'un vendeur sert surtout à :", choix: ["Inciter à vendre plus", "Apporter de la sécurité et rémunérer les tâches non commerciales", "Réduire les ventes", "Remplacer les primes"], bonne: 1, explication: "La commission, elle, incite à vendre." },
      { q: "Système A : 5 000 + 2 % du CA ; système B : 3 000 + 4 % du CA. Le seuil d'indifférence est :", choix: ["50 000 DH", "100 000 DH", "200 000 DH", "8 000 DH"], bonne: 1, explication: "2 000 / 0,02 = 100 000 DH." },
      { q: "Commissionner sur la marge plutôt que sur le CA :", choix: ["Incite à brader les prix", "Dissuade les remises excessives", "Supprime la motivation", "Est interdit"], bonne: 1, explication: "Le vendeur perd lui aussi quand il accorde une remise." },
      { q: "Le taux de transformation d'un vendeur est :", choix: ["CA / visites", "Commandes / visites", "CA / commandes", "Visites / clients"], bonne: 1, explication: "Il mesure l'efficacité commerciale." },
      { q: "Un vendeur réalise 240 000 DH avec 600 commandes. Son panier moyen est :", choix: ["400 DH", "2 500 DH", "240 DH", "600 DH"], bonne: 0, explication: "240 000 / 600 = 400 DH." },
      { q: "Dans la vente-livraison, le vendeur :", choix: ["Prend la commande et un camion livre plus tard", "Circule avec la marchandise et livre immédiatement", "Vend uniquement en ligne", "Négocie avec les centrales d'achat"], bonne: 1, explication: "Modèle courant pour les épiceries de quartier." },
    ],
  },

  8: {
    titre: "Le marketing digital et le commerce en ligne",
    description: "Médias détenus, achetés et gagnés, SEO et SEA, réseaux sociaux et influence, entonnoir de conversion, CTR, CPC, CAC, ROAS, livraison et lois 31-08 et 09-08.",
    resume: md`
## L'essentiel — Marketing digital et commerce en ligne

- Médias **détenus** (site, comptes), **achetés** (annonces), **gagnés** (avis, partages).
- **SEO** : durable, lent, sans coût au clic ; **SEA** : immédiat, payé au clic par enchère, qualité de l'annonce.
- Réseaux sociaux : contenus, publicité ciblée, community management, taux d'engagement ; influence : qualité de l'audience, transparence.
- Entonnoir : impressions → clics ($CTR$) → commandes (taux de conversion) → CA (panier moyen).
- $CPC = \text{coût} / \text{clics}$ ; $CAC = \text{coût} / \text{conversions}$ ; $ROAS = CA / \text{dépenses}$.
- $ROAS_{équilibre} = 1 / \text{taux de marge}$ ; intégrer livraison, retours et refus.
- Maroc : usage mobile, paiement à la livraison, taux de refus à surveiller ; relier CAC et valeur client.
- Cadre légal : loi 31-08 (vente à distance, rétractation de sept jours), loi 09-08 (consentement, CNDP), lois 53-05 et 43-20 (contrats et signature électroniques).
`,
    exercices: md`
### Exercice 2 — Comparer deux campagnes

Une agence de voyages en ligne compare deux campagnes de 20 000 DH chacune :

| | Moteur de recherche | Réseau social |
|---|---:|---:|
| Clics | 8 000 | 20 000 |
| Taux de conversion | 3 % | 0,8 % |
| Panier moyen (DH) | 2 500 | 2 000 |

Le taux de marge est de 12 %.

1. Calculez pour chaque campagne le CPC, le nombre de réservations, le CA, le ROAS et le CAC.
2. Calculez le ROAS d'équilibre. Quelle campagne est rentable ?

<details><summary>Voir le corrigé</summary>

**1)** Moteur : CPC 2,50 DH ; 240 réservations ; CA 600 000 DH ; ROAS 30 ; CAC $20\,000 / 240 \approx 83$ DH. Réseau social : CPC 1 DH ; 160 réservations ; CA 320 000 DH ; ROAS 16 ; CAC 125 DH.

**2)** ROAS d'équilibre : $1 / 0{,}12 \approx 8{,}33$. Les deux sont rentables ; la campagne sur le moteur de recherche l'est nettement plus (marge $600\,000 \times 12\,\% = 72\,000$ DH contre $38\,400$ DH), car elle touche des personnes qui cherchent déjà un voyage. Le CPC plus faible du réseau social ne compense pas sa faible conversion.

</details>

### Exercice 3 — Choisir un influenceur

Une marque de cosmétiques hésite entre deux créateurs de contenu pour une publication rémunérée :

| | Influenceur 1 | Influenceur 2 |
|---|---:|---:|
| Abonnés | 800 000 | 120 000 |
| Part d'abonnés au Maroc dans la cible (femmes 18-34 ans) | 20 % | 70 % |
| Taux d'engagement moyen | 0,8 % | 4 % |
| Tarif d'une publication (DH) | 40 000 | 12 000 |

1. Calculez pour chacun l'audience utile et le coût pour mille abonnés utiles.
2. Estimez le nombre d'interactions (sur l'ensemble des abonnés) et le coût par interaction.
3. Lequel recommandez-vous ? Quelle obligation respecter ?

<details><summary>Voir le corrigé</summary>

**1)** Influenceur 1 : $800\,000 \times 20\,\% = 160\,000$ abonnés utiles ; $40\,000 / 160 = 250$ DH pour mille. Influenceur 2 : $120\,000 \times 70\,\% = 84\,000$ ; $12\,000 / 84 \approx 143$ DH pour mille.

**2)** Influenceur 1 : $800\,000 \times 0{,}8\,\% = 6\,400$ interactions, soit 6,25 DH par interaction. Influenceur 2 : $120\,000 \times 4\,\% = 4\,800$ interactions, soit 2,50 DH par interaction.

**3)** L'influenceur 2 : audience plus proche de la cible, plus engagée, et coûts unitaires plus faibles. La publication doit indiquer clairement qu'il s'agit d'un partenariat rémunéré, pour ne pas constituer une publicité trompeuse (loi 31-08).

</details>
`,
    qcm: [
      { q: "Les avis clients publiés spontanément sur une marque relèvent des médias :", choix: ["Détenus", "Achetés", "Gagnés", "Hors ligne"], bonne: 2, explication: "La marque obtient cette visibilité sans payer." },
      { q: "Le référencement payant (SEA) se caractérise par :", choix: ["Un effet durable sans budget", "Un effet immédiat facturé en général au clic", "L'absence de mots-clés", "Un délai de plusieurs mois"], bonne: 1, explication: "L'effet s'arrête avec le budget." },
      { q: "2 000 clics pour 100 000 impressions donnent un CTR de :", choix: ["20 %", "2 %", "0,2 %", "50 %"], bonne: 1, explication: "2 000 / 100 000 = 2 %." },
      { q: "Une campagne de 15 000 DH génère 6 000 clics. Le CPC est :", choix: ["0,40 DH", "2,50 DH", "25 DH", "4 DH"], bonne: 1, explication: "15 000 / 6 000 = 2,50 DH." },
      { q: "Le ROAS rapporte :", choix: ["La marge au coût", "Le CA aux dépenses publicitaires", "Les clics aux impressions", "Les commandes aux clics"], bonne: 1, explication: "Il se calcule sur le chiffre d'affaires." },
      { q: "Avec un taux de marge de 25 %, le ROAS d'équilibre est :", choix: ["0,25", "4", "25", "1"], bonne: 1, explication: "1 / 0,25 = 4." },
      { q: "Le CAC d'une campagne de 30 000 DH ayant généré 300 clients est :", choix: ["10 DH", "100 DH", "300 DH", "1 000 DH"], bonne: 1, explication: "30 000 / 300 = 100 DH." },
      { q: "Avec le paiement à la livraison, un indicateur clé est :", choix: ["Le taux de refus à la livraison", "Le nombre d'abonnés", "Le CPM", "Le nombre de mots-clés"], bonne: 0, explication: "Une commande refusée coûte l'aller-retour sans être encaissée." },
      { q: "Selon la loi 31-08, le consommateur qui achète à distance dispose d'un droit de rétractation de :", choix: ["24 heures", "Sept jours", "Un mois", "Un an"], bonne: 1, explication: "Délai prévu pour la vente à distance." },
      { q: "Pour choisir un influenceur, le critère le plus pertinent est :", choix: ["Le nombre total d'abonnés", "La correspondance de son audience avec la cible et son engagement", "Son ancienneté", "Le nombre de publications par jour"], bonne: 1, explication: "Une grande audience hors cible a peu de valeur." },
    ],
  },
};

export default chapitres;
