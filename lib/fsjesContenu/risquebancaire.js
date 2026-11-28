// Gestion du Risque en Banque et Assurance (S5, filière Techniques de banque et assurance) — compléments par chapitre : description SEO, résumé, exercices 2 et 3, QCM.
const md = String.raw;

const chapitres = {
1: {
titre: "Les risques des banques et des assurances et leur cadre prudentiel",
description: "Typologie des risques bancaires et d'assurance, processus de gestion, trois piliers de Bâle, ratio de solvabilité de 12 %, Bank Al-Maghrib et ACAPS.",
resume: md`
## L'essentiel — Risques et cadre prudentiel

- Risque = probabilité × gravité ; banques et assureurs **vivent** de la prise de risque, qu'ils doivent choisir, mesurer, tarifer et rendre supportable.
- Risques financiers : crédit, marché, taux global, liquidité ; non financiers : opérationnel, conformité, réputation, stratégie ; assureur : souscription, catastrophes, placements.
- Cycle : identifier, mesurer, fixer l'appétit et les limites, traiter (accepter, réduire, transférer, éviter), surveiller.
- Trois lignes de défense : métiers, fonction risques et conformité, audit interne ; comité des risques du conseil.
- Bâle : pilier 1 (fonds propres minimaux), pilier 2 (surveillance prudentielle), pilier 3 (discipline de marché).
- Ratio de solvabilité $= \frac{\text{fonds propres}}{\text{risques pondérés crédit + marché + opérationnel}}$.
- Maroc : fonds propres de base au moins **9 %**, ratio global au moins **12 %** ; moyennes du secteur en 2025 autour de 13,5 % et 16 %.
- Marge de manœuvre : $FP / \text{minimum} - \text{risques pondérés}$.
- Bank Al-Maghrib : établissements de crédit (loi **103-12**) ; ACAPS (loi **64-12**) : assurances (code des assurances, loi **17-99**).
- Stabilité d'ensemble : comité de coordination et de surveillance des risques systémiques (BAM, ACAPS, AMMC).
`,
exercices: md`
### Exercice 2 — Traiter un risque

Pour chacune des situations suivantes, indiquez le risque en cause et le mode de traitement choisi (accepter, réduire, transférer, éviter).

1. Une banque achète une couverture de taux (swap) sur son portefeuille de crédits immobiliers à taux fixe.
2. Une banque renonce à financer les promoteurs immobiliers d'une région en surproduction.
3. Une banque installe une double validation de tous les virements de plus de 1 million de DH.
4. Un assureur cède 40 % de son portefeuille incendie à un réassureur.
5. Une banque provisionne chaque année une perte moyenne attendue sur ses cartes bancaires (fraude).

<details><summary>Voir le corrigé</summary>

1. Risque de taux global ; **transfert** (à la contrepartie du swap, ce qui crée un risque de contrepartie).
2. Risque de crédit et de concentration sectorielle ; **évitement**.
3. Risque opérationnel (fraude, erreur) ; **réduction** par un contrôle.
4. Risque de souscription ; **transfert** par la réassurance.
5. Risque opérationnel de fraude externe ; **acceptation** d'une perte attendue, intégrée dans le prix des cartes.

</details>

### Exercice 3 — Une perte qui entame les fonds propres

La Banque du Tafilalet (exercice 1 du chapitre : fonds propres de base 10 200, fonds propres totaux 12 500, risques pondérés 95 000) subit une perte exceptionnelle de 1 000 millions de DH, imputée sur ses fonds propres de base. Ses risques pondérés restent inchangés.

1. Calculez les nouveaux ratios.
2. De combien doit-elle réduire ses risques pondérés pour revenir au minimum global de 12 % ?

<details><summary>Voir le corrigé</summary>

1. Fonds propres de base : 9 200, soit $9\,200 / 95\,000 \approx $ **9,68 %** ; fonds propres totaux : 11 500, soit $11\,500 / 95\,000 \approx $ **12,11 %**. Les deux ratios restent au-dessus des minima, de justesse.
2. Le ratio global est encore conforme : aucune réduction n'est exigée, mais la marge n'est plus que de $11\,500/0{,}12 - 95\,000 \approx 833$ millions de DH de risques pondérés. La banque doit freiner la croissance de ses crédits ou reconstituer ses fonds propres.

</details>
`,
qcm: [
{ q: "Le ratio de solvabilité rapporte les fonds propres :", choix: ["Aux risques pondérés", "Au total du bilan", "Aux dépôts", "Au produit net bancaire"], bonne: 0, explication: "Crédit, marché et opérationnel pondérés." },
{ q: "Au Maroc, le ratio de solvabilité global minimal des banques est de :", choix: ["12 %", "8 %", "9 %", "15 %"], bonne: 0, explication: "Avec au moins 9 % de fonds propres de base." },
{ q: "Le pilier 2 de Bâle concerne :", choix: ["La surveillance prudentielle et l'évaluation interne des fonds propres", "La publication d'informations", "Les exigences minimales de fonds propres", "La politique monétaire"], bonne: 0, explication: "Pilier 1 : exigences minimales ; pilier 3 : discipline de marché." },
{ q: "Les entreprises d'assurance marocaines sont contrôlées par :", choix: ["L'ACAPS", "Bank Al-Maghrib", "L'AMMC", "La Cour des comptes"], bonne: 0, explication: "Autorité créée par la loi 64-12." },
{ q: "Le code des assurances marocain résulte de la loi :", choix: ["17-99", "103-12", "64-12", "31-08"], bonne: 0, explication: "La loi 64-12 crée l'ACAPS." },
{ q: "Souscrire une réassurance est une manière de :", choix: ["Transférer un risque", "Éviter un risque", "Accepter un risque", "Supprimer tout risque"], bonne: 0, explication: "Le risque passe en partie au réassureur." },
{ q: "L'audit interne constitue :", choix: ["La troisième ligne de défense", "La première ligne de défense", "Un pilier de Bâle", "Une autorité de contrôle"], bonne: 0, explication: "Il vérifie l'ensemble du dispositif." },
{ q: "Une panne informatique qui bloque les paiements relève du risque :", choix: ["Opérationnel", "De marché", "De crédit", "De taux"], bonne: 0, explication: "Défaillance des systèmes." },
{ q: "Avec 12 000 de fonds propres totaux et un minimum de 12 %, les risques pondérés maximaux sont de :", choix: ["100 000", "144 000", "12 000", "1 440"], bonne: 0, explication: "12 000 / 0,12." },
{ q: "Les fonds propres de base sont aussi appelés :", choix: ["Tier 1", "Tier 2", "Fonds de garantie", "Provisions"], bonne: 0, explication: "Capital, réserves et instruments éligibles." },
],
},
2: {
titre: "Le risque de marché et la valeur en risque",
description: "Risque de marché d'une banque : VaR paramétrique et historique, racine du temps, diversification, Expected Shortfall, tests de résistance et backtesting.",
resume: md`
## L'essentiel — Risque de marché et VaR

- Risque de marché : pertes dues aux variations des actions, des taux, des changes et des matières premières ; portefeuille de négociation, bons du Trésor, change.
- **VaR** : perte maximale sur un horizon donné à un niveau de confiance donné, en conditions normales ; elle peut être dépassée.
- Paramétrique : $VaR = z \times \sigma \times V$, avec $z = 1{,}645$ (95 %) ou $2{,}326$ (99 %).
- Changement d'horizon : $VaR_T = VaR_1 \times \sqrt{T}$ ($\sqrt{10} \approx 3{,}16$).
- Portefeuille : $\sigma_P = \sqrt{(\sigma_1 V_1)^2 + (\sigma_2 V_2)^2 + 2\rho\,\sigma_1 V_1 \sigma_2 V_2}$ ; diversification si $\rho < 1$.
- Historique : classer les pertes simulées ; à 99 % sur 500 jours, 5e plus forte perte.
- Limites : rien sur la gravité au-delà, loi normale trop optimiste, sous-additivité non garantie.
- **Expected Shortfall** : moyenne des pertes au-delà de la VaR (97,5 % dans la révision bâloise du portefeuille de négociation).
- Tests de résistance : scénarios extrêmes mais plausibles.
- Backtesting à 99 % sur 250 jours : 2,5 exceptions attendues ; zones verte (0-4), orange (5-9), rouge (10 et plus).
`,
exercices: md`
### Exercice 2 — Une position de change

Une banque détient une position longue de 2 000 000 USD. Le cours est de 9,50 MAD pour 1 USD et l'écart-type journalier du cours USD/MAD est de 0,4 %.

1. Calculez la VaR à 1 jour à 95 % et à 99 %, en dirhams.
2. Calculez la VaR à 10 jours à 99 %.

<details><summary>Voir le corrigé</summary>

1. Valeur de la position : $2\,000\,000 \times 9{,}50 = 19\,000\,000$ DH ; $\sigma V = 0{,}4 \% \times 19\,000\,000 = 76\,000$ DH. VaR 95 % : $1{,}645 \times 76\,000 = $ **125 020 DH** ; VaR 99 % : $2{,}326 \times 76\,000 = $ **176 776 DH**.
2. $176\,776 \times \sqrt{10} \approx $ **559 010 DH**.

</details>

### Exercice 3 — VaR historique et perte moyenne au-delà

On a simulé le portefeuille d'une banque sur les 500 derniers jours. Les huit plus fortes pertes, en milliers de DH, sont : 412, 387, 350, 331, 318, 296, 284, 270.

1. Quelle est la VaR historique à 1 jour à 99 % ?
2. Calculez la perte moyenne des 5 scénarios les plus défavorables (Expected Shortfall à 99 %).
3. Quel est l'intérêt de cette seconde mesure ?

<details><summary>Voir le corrigé</summary>

1. $1 \% \times 500 = 5$ : la VaR est la 5e plus forte perte, soit **318 000 DH**.
2. $(412 + 387 + 350 + 331 + 318) / 5 = 1\,798 / 5 = $ **359 600 DH**.
3. La VaR indique le seuil des pertes rares ; l'Expected Shortfall indique leur **ampleur moyenne** au-delà de ce seuil. Deux portefeuilles de même VaR peuvent avoir des ES très différents.

</details>
`,
qcm: [
{ q: "Une VaR à 1 jour à 99 % de 500 000 DH signifie que :", choix: ["La perte du lendemain a 1 % de chances de dépasser 500 000 DH", "La perte ne peut jamais dépasser 500 000 DH", "La banque gagnera 500 000 DH", "La perte moyenne est de 500 000 DH"], bonne: 0, explication: "C'est un quantile, pas un maximum absolu." },
{ q: "À 99 %, le quantile de la loi normale utilisé pour la VaR paramétrique est d'environ :", choix: ["2,326", "1,645", "1,96", "3,16"], bonne: 0, explication: "1,645 correspond à 95 %." },
{ q: "Pour passer d'une VaR à 1 jour à une VaR à 10 jours, on multiplie par :", choix: ["Environ 3,16", "10", "2,326", "100"], bonne: 0, explication: "Racine carrée de 10." },
{ q: "La VaR d'un portefeuille égale la somme des VaR individuelles quand la corrélation vaut :", choix: ["1", "0", "−1", "0,5"], bonne: 0, explication: "Aucun effet de diversification." },
{ q: "Une position de 5 000 000 DH d'écart-type journalier 1 % a une VaR à 1 jour à 95 % de :", choix: ["82 250 DH", "116 300 DH", "50 000 DH", "164 500 DH"], bonne: 0, explication: "1,645 × 50 000." },
{ q: "Sur 1 000 scénarios historiques, la VaR à 99 % correspond à :", choix: ["La 10e plus forte perte", "La plus forte perte", "La 1re perte", "La 100e plus forte perte"], bonne: 0, explication: "1 % de 1 000." },
{ q: "L'Expected Shortfall mesure :", choix: ["La perte moyenne au-delà de la VaR", "La perte la plus probable", "Le gain moyen", "La volatilité annuelle"], bonne: 0, explication: "Gravité des scénarios extrêmes." },
{ q: "Avec une VaR à 99 % sur 250 jours, le nombre moyen d'exceptions attendu est de :", choix: ["2,5", "25", "0", "10"], bonne: 0, explication: "1 % de 250." },
{ q: "Un modèle de VaR avec 11 exceptions en un an est classé en zone :", choix: ["Rouge", "Verte", "Orange", "Neutre"], bonne: 0, explication: "Rouge à partir de 10 exceptions." },
{ q: "La principale limite de la VaR paramétrique est :", choix: ["L'hypothèse de normalité qui sous-estime les pertes extrêmes", "Sa complexité de calcul", "L'absence d'horizon", "Son expression en pourcentage"], bonne: 0, explication: "Les queues de distribution réelles sont plus épaisses." },
],
},
3: {
titre: "Le risque de taux d'intérêt global et la gestion actif-passif",
description: "Risque de taux global d'une banque : ALM, impasses de taux et marge nette d'intérêt, duration et sensibilité, valeur économique des fonds propres, swaps.",
resume: md`
## L'essentiel — Risque de taux global et ALM

- Origine : la **transformation** (ressources courtes, emplois longs et souvent à taux fixe).
- ALM : mesure et pilotage des risques structurels du bilan par un comité actif-passif ; taux de cession interne.
- Élément sensible : taux révisé dans la période ; dépôts à vue : échéancier conventionnel.
- Impasse $=$ actifs sensibles $-$ passifs sensibles ; négative : perte en cas de hausse des taux.
- $\Delta MNI \approx \sum \text{impasse}_i \times \Delta r \times \text{durée restante}_i$ (0,875 pour 0-3 mois, 0,375 pour 3-12 mois).
- Duration : $D = \frac{\sum t\,F_t/(1+r)^t}{P}$ ; zéro-coupon : $D$ = maturité.
- Sensibilité : $S = D/(1+r)$ et $\Delta P / P \approx -S\,\Delta r$ (convexité au-delà).
- Valeur économique : $\Delta E \approx -\left(D_A - \frac{L}{A} D_L\right) A \frac{\Delta r}{1+r}$ ; immunisation si l'écart de duration est nul.
- Bâle (2016) : banque atypique si la valeur économique baisse de plus de 15 % des fonds propres de base.
- Couverture : adossement, crédits à taux variable, **swap** payeur de fixe, cap ; attention au risque de contrepartie.
`,
exercices: md`
### Exercice 2 — Sensibilité d'un bon du Trésor zéro-coupon

Une banque détient un titre zéro-coupon de nominal 1 000 000 DH remboursable dans 10 ans. Le taux de marché est de 4 %.

1. Calculez son prix, sa duration et sa sensibilité.
2. Estimez la variation de prix si les taux montent de 0,5 point, puis calculez le prix exact.

<details><summary>Voir le corrigé</summary>

1. $P = 1\,000\,000 / 1{,}04^{10} \approx $ **675 564 DH** ; $D = $ **10 ans** (un seul flux) ; $S = 10/1{,}04 \approx $ **9,62**.
2. $\Delta P \approx -9{,}62 \times 0{,}5 \% \times 675\,564 \approx $ **− 32 479 DH**. Prix exact : $1\,000\,000 / 1{,}045^{10} \approx 643\,928$ DH, soit − 31 636 DH : l'approximation surestime légèrement la baisse (convexité).

</details>

### Exercice 3 — Couvrir l'impasse par un swap

On reprend la Banque du Saïss (impasses : − 12 000 sur 0-3 mois, − 4 000 sur 3-12 mois). Elle conclut un swap de nominal 8 000 millions de DH, sur 5 ans, dans lequel elle **paie** un taux fixe et **reçoit** un taux variable révisé tous les trois mois.

1. Comment ce swap modifie-t-il l'impasse de la tranche 0-3 mois ?
2. Recalculez l'effet d'une hausse de 1 point sur la marge nette d'intérêt.
3. Quel risque nouveau la banque prend-elle ?

<details><summary>Voir le corrigé</summary>

1. La jambe variable reçue se comporte comme un **actif sensible** de 8 000 révisé dans les trois mois ; la jambe fixe payée n'est pas sensible dans l'année. L'impasse 0-3 mois devient $-12\,000 + 8\,000 = $ **− 4 000**.
2. $\Delta MNI \approx -4\,000 \times 1 \% \times 0{,}875 - 4\,000 \times 1 \% \times 0{,}375 = -35 - 15 = $ **− 50 millions de DH**, au lieu de − 120.
3. Un **risque de contrepartie** sur la banque qui a conclu le swap, et un manque à gagner si les taux baissent (la banque continue de payer le fixe).

</details>
`,
qcm: [
{ q: "Une banque dont l'impasse de taux à un an est négative perd quand :", choix: ["Les taux montent", "Les taux baissent", "Le dirham s'apprécie", "Le MASI monte"], bonne: 0, explication: "Ses passifs se renchérissent plus vite que ses actifs ne rapportent." },
{ q: "L'impasse de taux se calcule comme :", choix: ["Actifs sensibles moins passifs sensibles", "Total actif moins total passif", "Crédits moins dépôts à vue", "Fonds propres moins provisions"], bonne: 0, explication: "Sur une période de révision donnée." },
{ q: "Avec une impasse de − 10 000 sur la tranche 0-3 mois, une hausse de 1 point réduit la marge annuelle d'environ :", choix: ["87,5", "100", "37,5", "10 000"], bonne: 0, explication: "10 000 × 1 % × 0,875." },
{ q: "La duration d'un titre zéro-coupon est égale :", choix: ["À sa maturité", "À la moitié de sa maturité", "À zéro", "À son taux"], bonne: 0, explication: "Un seul flux, à l'échéance." },
{ q: "Une obligation de sensibilité 6 voit son prix, si les taux montent de 0,5 point, varier d'environ :", choix: ["− 3 %", "+ 3 %", "− 6 %", "− 0,5 %"], bonne: 0, explication: "− 6 × 0,5 %." },
{ q: "La sensibilité se déduit de la duration par :", choix: ["D / (1 + r)", "D × (1 + r)", "D − r", "1 / D"], bonne: 0, explication: "Duration modifiée." },
{ q: "Une banque est immunisée en valeur contre le risque de taux quand :", choix: ["La duration de l'actif égale la duration du passif pondérée par L / A", "Ses crédits sont tous à taux fixe", "Ses dépôts sont tous à vue", "Son ratio de solvabilité dépasse 12 %"], bonne: 0, explication: "Écart de duration nul." },
{ q: "Pour se protéger contre une hausse des taux, une banque de transformation conclut un swap où elle :", choix: ["Paie le taux fixe et reçoit le taux variable", "Paie le variable et reçoit le fixe", "Échange des devises", "Achète des actions"], bonne: 0, explication: "La jambe reçue suit la hausse des taux." },
{ q: "Les dépôts à vue non rémunérés sont traités en ALM par :", choix: ["Un échéancier conventionnel fondé sur leur comportement", "Une échéance d'un jour", "Une exclusion du bilan", "Un taux variable"], bonne: 0, explication: "Leur encours est stable malgré leur exigibilité." },
{ q: "Selon les normes bâloises de 2016, une banque est atypique si un choc de taux réduit sa valeur économique de plus de :", choix: ["15 % de ses fonds propres de base", "1 % de son bilan", "50 % de ses dépôts", "12 % de ses crédits"], bonne: 0, explication: "Test des valeurs atypiques." },
],
},
4: {
titre: "Le risque de liquidité",
description: "Risque de liquidité bancaire : impasses de liquidité, LCR avec taux de fuite et décotes, NSFR, plan de financement d'urgence et prêteur en dernier ressort.",
resume: md`
## L'essentiel — Le risque de liquidité

- Liquidité de **financement** (trouver des ressources) et de **marché** (vendre un actif sans le brader) ; une banque solvable peut être illiquide.
- Crises de liquidité : Northern Rock (2007), Silicon Valley Bank (mars 2023).
- Banques marocaines en déficit structurel de liquidité, refinancées par Bank Al-Maghrib (avances à 7 jours, pensions livrées, prêts garantis).
- Impasse de liquidité $=$ actifs $-$ passifs arrivant à échéance dans la tranche ; impasse cumulée négative = besoin de financement.
- $LCR = \frac{HQLA}{\text{sorties} - \min(\text{entrées} ;\ 75 \% \text{ sorties})} \geq 100 \%$ sur 30 jours de tensions.
- HQLA : niveau 1 à 100 %, niveau 2A décoté de 15 % et plafonné à 40 % du total.
- Taux de fuite : 5 % (dépôts stables des particuliers), 10 % (moins stables), 25 % (opérationnels), 40 % (autres entreprises), 100 % (financements interbancaires non garantis).
- Maroc : LCR introduit par la circulaire **15/G/2013**, minimum de 100 %, suivi par devise significative.
- **NSFR** $=$ financement stable disponible / financement stable exigé $\geq 100 \%$ à un an ; annonce par BAM en 2025, avec l'ILAAP.
- Plan de financement d'urgence ; prêteur en dernier ressort (Bagehot) et aléa moral.
`,
exercices: md`
### Exercice 2 — Le plafond des actifs de niveau 2

Une banque détient 3 000 millions de DH d'actifs de niveau 1 et 4 000 millions de DH d'obligations de niveau 2A.

1. Calculez les actifs de niveau 2A après décote.
2. Sachant que les actifs de niveau 2 ne peuvent pas dépasser 40 % des HQLA, quel montant total de HQLA peut-elle retenir ?

<details><summary>Voir le corrigé</summary>

1. $4\,000 \times 0{,}85 = 3\,400$.
2. Si le niveau 2 représente au plus 40 % du total, il vaut au plus $\frac{40}{60} = \frac{2}{3}$ du niveau 1 : $3\,000 \times 2/3 = 2\,000$. Le plafond joue : HQLA $= 3\,000 + 2\,000 = $ **5 000** (et non 6 400). La banque doit détenir davantage d'actifs de niveau 1.

</details>

### Exercice 3 — Un ratio de financement stable simplifié

On reprend la Banque du Loukkos avec des pondérations simplifiées inspirées de Bâle III.

| Financement disponible | Montant | Pondération |
|---|---|---|
| Fonds propres | 8 000 | 100 % |
| Dépôts stables des particuliers | 30 000 | 95 % |
| Dépôts moins stables des particuliers | 20 000 | 90 % |
| Dépôts des entreprises | 25 000 | 50 % |
| Emprunts interbancaires à court terme | 5 000 | 0 % |
| Emprunts à plus d'un an | 4 000 | 100 % |

| Financement exigé | Montant | Pondération |
|---|---|---|
| Réserves et bons du Trésor | 11 000 | 0 % |
| Crédits immobiliers | 40 000 | 65 % |
| Crédits aux entreprises à plus d'un an | 30 000 | 85 % |
| Crédits à moins d'un an | 15 000 | 50 % |
| Autres actifs | 4 000 | 100 % |

Calculez le NSFR et commentez.

<details><summary>Voir le corrigé</summary>

Financement stable disponible : $8\,000 + 28\,500 + 18\,000 + 12\,500 + 0 + 4\,000 = 71\,000$.

Financement stable exigé : $0 + 26\,000 + 25\,500 + 7\,500 + 4\,000 = 63\,000$.

$NSFR = 71\,000 / 63\,000 \approx $ **112,7 %** : supérieur à 100 %. La transformation est financée par des ressources jugées stables (dépôts de particuliers surtout). Les emprunts interbancaires courts n'apportent aucun financement stable.

</details>
`,
qcm: [
{ q: "Une banque solvable peut faire faillite :", choix: ["Par manque de liquidité", "Jamais", "Uniquement si son ratio de solvabilité est inférieur à 12 %", "Seulement en change fixe"], bonne: 0, explication: "Ses actifs longs ne sont pas mobilisables assez vite." },
{ q: "Le LCR couvre un horizon de tensions de :", choix: ["30 jours", "1 an", "1 jour", "5 ans"], bonne: 0, explication: "Le NSFR couvre un horizon d'un an." },
{ q: "Le minimum réglementaire du LCR est de :", choix: ["100 %", "12 %", "75 %", "150 %"], bonne: 0, explication: "Les HQLA doivent couvrir les sorties nettes." },
{ q: "Les actifs de niveau 2A subissent dans le LCR une décote de :", choix: ["15 %", "0 %", "50 %", "100 %"], bonne: 0, explication: "Et sont plafonnés avec le niveau 2B à 40 % du total." },
{ q: "Le taux de fuite standard appliqué aux financements interbancaires non garantis est de :", choix: ["100 %", "5 %", "10 %", "25 %"], bonne: 0, explication: "Ils sont supposés ne pas être renouvelés en crise." },
{ q: "Dans le LCR, les entrées de trésorerie sont plafonnées à :", choix: ["75 % des sorties", "100 % des sorties", "50 % des HQLA", "25 % des dépôts"], bonne: 0, explication: "La banque garde toujours des actifs liquides." },
{ q: "Une impasse de liquidité cumulée négative à 3 mois signifie :", choix: ["Un besoin de financement à cet horizon", "Un excédent de liquidité", "Une perte de solvabilité", "Une hausse des taux"], bonne: 0, explication: "Les passifs échus dépassent les actifs échus." },
{ q: "Le LCR a été introduit au Maroc par la circulaire de Bank Al-Maghrib :", choix: ["15/G/2013", "19/G/2002", "1/W/2025", "26/G/2006"], bonne: 0, explication: "Avec une montée progressive jusqu'à 100 %." },
{ q: "Le NSFR vise surtout à limiter :", choix: ["La transformation structurelle", "Le risque opérationnel", "Le risque de change", "Les fraudes"], bonne: 0, explication: "Financer les actifs longs par des ressources stables." },
{ q: "Selon le principe de Bagehot, le prêteur en dernier ressort prête :", choix: ["Aux banques solvables, contre de bonnes garanties, à un taux pénalisant", "À toutes les banques sans condition", "Uniquement à l'État", "Aux banques insolvables à taux nul"], bonne: 0, explication: "Pour éviter la contagion sans encourager l'aléa moral." },
],
},
5: {
titre: "Le risque opérationnel",
description: "Risque opérationnel en banque : catégories de Bâle, cartographie fréquence-gravité, approche indicateur de base et approche standard, PCA et cybersécurité.",
resume: md`
## L'essentiel — Le risque opérationnel

- Définition de Bâle : pertes dues à des processus, personnes ou systèmes défaillants, ou à des événements extérieurs ; risque juridique inclus, risques stratégique et de réputation exclus.
- Sept catégories : fraude interne, fraude externe, emploi et sécurité, clients et pratiques commerciales, dommages aux actifs, interruption et systèmes, exécution des processus.
- Cartographie : fréquence × gravité, risque inhérent / résiduel, indicateurs clés de risque, base des incidents.
- Perte attendue $=$ fréquence $\times$ coût moyen ; risques fréquents et peu graves : prix, provisions, contrôles ; rares et graves : fonds propres, assurance, PCA.
- Maroc : circulaire **26/G/2006** ; approches indicateur de base, standard, standard alternative (ces deux dernières sur autorisation).
- Indicateur de base : $15 \% \times$ moyenne des PNB positifs des trois derniers exercices.
- Standard : $\beta$ de 12 % (détail, gestion d'actifs, courtage de détail), 15 % (banque commerciale, agent), 18 % (financement des entreprises, négociation, paiements).
- Bâle III final (2017) : approche standard unique, fin de l'approche avancée.
- Maîtrise : contrôle interne, PCA, sécurité des systèmes, assurance, prestataires, culture du risque.
- Cybersécurité : loi **05-20** (2020), DGSSI.
`,
exercices: md`
### Exercice 2 — Une année de PNB négatif

Une banque a dégagé un produit annuel brut de 5 200, puis − 300, puis 4 800 millions de DH sur ses trois derniers exercices.

1. Calculez l'exigence en fonds propres selon l'approche indicateur de base.
2. Quelle erreur faut-il éviter ?

<details><summary>Voir le corrigé</summary>

1. L'année négative est exclue du numérateur **et** du dénominateur : moyenne $= (5\,200 + 4\,800)/2 = 5\,000$ ; exigence $= 15 \% \times 5\,000 = $ **750 millions de DH**.
2. Calculer $(5\,200 - 300 + 4\,800)/3 \approx 3\,233$, soit une exigence de 485 : on sous-estimerait le risque d'une banque qui vient précisément de subir des pertes.

</details>

### Exercice 3 — Assurer ou non une panne informatique

Reprenons la panne majeure de la Banque des Doukkala (probabilité annuelle 0,2, coût 25 000 000 DH). Un assureur propose une police couvrant ce risque avec une franchise de 5 000 000 DH par sinistre, pour une prime annuelle de 5 200 000 DH.

1. Calculez la perte attendue annuelle avec et sans assurance (prime comprise).
2. La banque doit-elle souscrire ?

<details><summary>Voir le corrigé</summary>

1. Sans assurance : $0{,}2 \times 25\,000\,000 = $ **5 000 000 DH**. Avec assurance : prime $5\,200\,000 +$ franchise attendue $0{,}2 \times 5\,000\,000 = 1\,000\,000$, soit **6 200 000 DH**.
2. En moyenne, l'assurance coûte 1,2 million de DH de plus par an : c'est la rémunération de l'assureur. Mais elle ramène la perte maximale en cas de sinistre de 25 à 5 millions de DH, ce qui protège les fonds propres et le résultat. Pour un risque rare et grave, la décision ne se prend pas sur la seule perte attendue : la banque peut souscrire, tout en investissant dans un site de secours qui réduirait à la fois la probabilité et le coût.

</details>
`,
qcm: [
{ q: "Selon Bâle, le risque opérationnel exclut :", choix: ["Le risque stratégique et le risque de réputation", "Le risque juridique", "La fraude externe", "Les pannes informatiques"], bonne: 0, explication: "Le risque juridique est inclus." },
{ q: "Un client victime d'un faux chèque encaissé par la banque relève de la catégorie :", choix: ["Fraude externe", "Fraude interne", "Pratiques commerciales", "Dommages aux actifs physiques"], bonne: 0, explication: "Fraude commise par un tiers." },
{ q: "Une erreur de saisie dans le montant d'un virement relève de la catégorie :", choix: ["Exécution, livraison et gestion des processus", "Fraude externe", "Interruption de l'activité", "Pratiques en matière d'emploi"], bonne: 0, explication: "Défaillance d'un processus." },
{ q: "Dans l'approche indicateur de base, le coefficient appliqué au produit annuel brut moyen est de :", choix: ["15 %", "12 %", "18 %", "8 %"], bonne: 0, explication: "Moyenne des trois derniers exercices positifs." },
{ q: "Avec des PNB de 3 000, 3 300 et 3 600, l'exigence selon l'approche indicateur de base est de :", choix: ["495", "540", "450", "3 300"], bonne: 0, explication: "15 % × 3 300." },
{ q: "Dans l'approche standard, la banque de détail est pondérée à :", choix: ["12 %", "15 %", "18 %", "20 %"], bonne: 0, explication: "Comme la gestion d'actifs et le courtage de détail." },
{ q: "Un risque de fréquence 400 par an et de coût moyen 5 000 DH a une perte attendue de :", choix: ["2 000 000 DH", "80 000 DH", "405 000 DH", "5 000 DH"], bonne: 0, explication: "400 × 5 000." },
{ q: "Le plan de continuité d'activité vise à :", choix: ["Maintenir les services essentiels en cas de sinistre", "Calculer la VaR", "Respecter le LCR", "Fixer le taux directeur"], bonne: 0, explication: "Sites de secours, sauvegardes, procédures de reprise." },
{ q: "La circulaire de Bank Al-Maghrib sur les fonds propres au titre du risque opérationnel est la :", choix: ["26/G/2006", "15/G/2013", "19/G/2002", "14/G/2013"], bonne: 0, explication: "Elle prévoit trois approches de calcul." },
{ q: "Le risque résiduel est le risque :", choix: ["Qui subsiste après les contrôles", "Avant tout contrôle", "Couvert par l'assurance", "Transféré au réassureur"], bonne: 0, explication: "Le risque inhérent est celui avant contrôles." },
],
},
6: {
titre: "Les risques de l'assureur et la réassurance",
description: "Risques de l'assureur : inversion du cycle, prime pure, provisions techniques, S/P et ratio combiné, réassurance, solvabilité basée sur les risques de l'ACAPS.",
resume: md`
## L'essentiel — Risques de l'assureur et réassurance

- Inversion du cycle : la prime est encaissée avant que le coût soit connu ; les fonds sont placés.
- Mutualisation et loi des grands nombres ; takaful encadré par la loi **87-18**.
- Risques : souscription, provisionnement, catastrophe (loi **110-14**, Fonds de solidarité contre les événements catastrophiques), placement, longévité et taux, contrepartie.
- Prime pure $=$ fréquence $\times$ coût moyen ; prime commerciale $=$ prime pure $/ (1 - f)$.
- Provisions techniques : PPNA, PSAP, provisions mathématiques ; couvertes par des actifs représentatifs.
- Primes acquises $=$ primes émises $-$ variation de la PPNA.
- $S/P$ $=$ sinistres / primes acquises ; ratio combiné $= S/P +$ taux de frais ; au-dessus de 100 %, perte technique.
- Réassurance proportionnelle (quote-part, excédent de plein) et non proportionnelle (excédent de sinistre, stop loss).
- Excédent de sinistre $X$ en excédent de $Y$ : part du réassureur $= \min(\max(S - Y ; 0) ; X)$.
- Solvabilité : marge forfaitaire actuelle (couverture souvent supérieure à 400 %) ; **SBR** de l'ACAPS au 1er janvier 2027 pour 13 des 25 entreprises.
`,
exercices: md`
### Exercice 2 — Primes émises et primes acquises

Un contrat d'assurance habitation annuel de 12 000 DH prend effet le 1er octobre N.

1. Calculez la PPNA de ce contrat au 31 décembre N.
2. Pour l'ensemble du portefeuille, les primes émises de l'exercice N sont de 30 millions de DH, la PPNA d'ouverture de 8 millions et la PPNA de clôture de 9,5 millions. Calculez les primes acquises. Pourquoi est-ce sur elles que l'on calcule le ratio $S/P$ ?

<details><summary>Voir le corrigé</summary>

1. Au 31 décembre, 3 mois de couverture sont écoulés et 9 restent à courir : $PPNA = 12\,000 \times 9/12 = $ **9 000 DH**.
2. Primes acquises $= 30 - (9{,}5 - 8) = $ **28,5 millions de DH**. Elles correspondent à la période de couverture de l'exercice, comme les sinistres survenus pendant cet exercice : c'est la seule comparaison cohérente.

</details>

### Exercice 3 — Excédent de plein et stop loss

1. Un assureur incendie fixe son plein de conservation à 2 000 000 DH. Il assure un entrepôt de Tanger pour 5 000 000 DH en traité en excédent de plein. Quelle part du risque cède-t-il ? Quelle est la part du réassureur sur un sinistre de 1 500 000 DH ?
2. Un assureur a souscrit un stop loss qui intervient au-delà d'un ratio $S/P$ annuel de 80 %, dans la limite de 30 %. Ses primes acquises sont de 50 millions de DH et sa charge de sinistres de 52 millions. Combien le réassureur paie-t-il ?

<details><summary>Voir le corrigé</summary>

1. L'assureur garde 2 sur 5 millions, soit 40 % ; il cède **60 %** du risque (et 60 % de la prime). Sur un sinistre de 1 500 000 DH, le réassureur paie $60 \% \times 1\,500\,000 = $ **900 000 DH** : la cession est proportionnelle pour tous les sinistres de ce risque.
2. $S/P = 52/50 = 104 \%$. La part au-delà de 80 % est de 24 points, sous la limite de 30 points : le réassureur paie $24 \% \times 50 = $ **12 millions de DH**, et la charge conservée revient à 40 millions (80 % des primes).

</details>
`,
qcm: [
{ q: "L'inversion du cycle de production en assurance signifie que :", choix: ["La prime est encaissée avant que le coût des sinistres soit connu", "Les sinistres sont payés avant les primes", "L'assureur ne place jamais ses fonds", "Le prix est fixé après la clôture"], bonne: 0, explication: "Le coût de revient n'est connu qu'après." },
{ q: "Avec une fréquence de 5 % et un coût moyen de 20 000 DH, la prime pure vaut :", choix: ["1 000 DH", "20 000 DH", "4 000 DH", "100 DH"], bonne: 0, explication: "5 % × 20 000." },
{ q: "Si les chargements représentent 20 % de la prime commerciale et la prime pure 800 DH, la prime commerciale vaut :", choix: ["1 000 DH", "960 DH", "640 DH", "820 DH"], bonne: 0, explication: "800 / 0,8." },
{ q: "La provision pour primes non acquises couvre :", choix: ["La part des primes correspondant à une couverture après la clôture", "Les sinistres déjà payés", "Les frais de gestion", "Les impôts"], bonne: 0, explication: "Calcul au prorata du temps restant." },
{ q: "Un ratio combiné de 104 % signifie que :", choix: ["L'activité d'assurance est déficitaire avant produits financiers", "L'assureur est insolvable", "Les primes ont augmenté de 4 %", "Le résultat est forcément négatif"], bonne: 0, explication: "Les produits financiers peuvent encore équilibrer le résultat." },
{ q: "Dans un traité en quote-part à 30 %, sur un sinistre de 1 000 000 DH, le réassureur paie :", choix: ["300 000 DH", "700 000 DH", "0 DH", "1 000 000 DH"], bonne: 0, explication: "Partage proportionnel." },
{ q: "Dans un excédent de sinistre de 3 millions en excédent de 2 millions, un sinistre de 6 millions coûte au réassureur :", choix: ["3 millions", "4 millions", "6 millions", "2 millions"], bonne: 0, explication: "6 − 2 = 4, plafonné à la portée de 3." },
{ q: "Le régime marocain de couverture des événements catastrophiques a été institué par la loi :", choix: ["110-14", "17-99", "64-12", "87-18"], bonne: 0, explication: "Avec un fonds de solidarité pour les non-assurés." },
{ q: "La solvabilité basée sur les risques doit s'appliquer au Maroc à partir du :", choix: ["1er janvier 2027", "1er janvier 2020", "1er janvier 2035", "1er janvier 2013"], bonne: 0, explication: "D'abord pour 13 des 25 entreprises d'assurance et de réassurance." },
{ q: "Le principal réassureur national marocain est :", choix: ["La Société centrale de réassurance", "Bank Al-Maghrib", "L'ACAPS", "Tamwilcom"], bonne: 0, explication: "L'ACAPS est l'autorité de contrôle." },
],
},
};

export default chapitres;
