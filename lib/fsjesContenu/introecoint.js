// Introduction à l'économie internationale (S5) — compléments par chapitre : description SEO, résumé, exercices 2 et 3, QCM.
const md = String.raw;

const chapitres = {
  1: {
    titre: "L'économie internationale : objet, acteurs et mesure de l'ouverture",
    description: "Objet de l'économie internationale, acteurs, étapes de la mondialisation, taux d'ouverture, de dépendance, de couverture et avantage comparatif révélé.",
    resume: md`
## L'essentiel — Objet, acteurs et mesure de l'ouverture

- L'**économie internationale** étudie les échanges de biens, services, facteurs et actifs entre nations ; deux branches : **réelle** (commerce) et **monétaire** (change, balance des paiements).
- Spécificité : les **frontières** (monnaies, droits de douane, normes, droit, faible mobilité du travail).
- Acteurs : États (au Maroc : Office des changes, Bank Al-Maghrib, ADII), entreprises et **FMN**, ménages (MRE), organisations internationales.
- Étapes : première mondialisation 1870-1914, repli 1914-1945, reconstruction encadrée 1945-1980 (GATT, Bretton Woods), globalisation 1980-2008 (chaînes de valeur), ralentissement et **nearshoring** depuis 2008.
- Taux d'ouverture $= \frac{(X+M)/2}{PIB}$ (préciser si on divise par 2) ; il dépend surtout de la taille du pays.
- Taux de dépendance $= M/PIB$ ; taux d'effort à l'exportation $= X/PIB$.
- Taux de couverture $= X/M \times 100$ ; à ne pas confondre avec le solde $X - M$.
- Maroc 2025 (biens) : 469,1 milliards de DH exportés, 822,2 importés, couverture d'environ 57 % (Office des changes).
- **ACR de Balassa** $= \frac{X_i/X}{X_i^{monde}/X^{monde}}$ : supérieur à 1, il révèle une spécialisation (phosphates pour le Maroc).
`,
    exercices: md`
### Exercice 2 — Comparer l'ouverture de deux pays

| Pays (milliards d'USD) | PIB | Exportations | Importations |
|---|---:|---:|---:|
| Pays A (grand pays) | 20 000 | 2 500 | 3 300 |
| Pays B (petit pays) | 60 | 45 | 48 |

1. Calculez le taux d'ouverture (avec division par 2) et le taux de couverture de chaque pays.
2. Le pays B est-il « plus performant » que le pays A ? Justifiez.

<details><summary>Voir le corrigé</summary>

**1)** Pays A : ouverture $= \frac{(2\,500 + 3\,300)/2}{20\,000} = \frac{2\,900}{20\,000} = \mathbf{14{,}5\,\%}$ ; couverture $= \frac{2\,500}{3\,300} \approx \mathbf{75{,}8\,\%}$.

Pays B : ouverture $= \frac{(45 + 48)/2}{60} = \frac{46{,}5}{60} = \mathbf{77{,}5\,\%}$ ; couverture $= \frac{45}{48} = \mathbf{93{,}75\,\%}$.

**2)** Non. Le pays B est beaucoup plus ouvert parce qu'il est petit : son marché intérieur ne permet pas de produire toute la gamme des biens, il doit importer et exporter davantage rapporté à son PIB. Le taux d'ouverture mesure une **dépendance réciproque** à l'égard du reste du monde, pas une performance. Sa meilleure couverture indique un équilibre extérieur plus solide, mais il faudrait connaître la nature des produits échangés et l'évolution dans le temps pour juger de sa compétitivité.

</details>

### Exercice 3 — Question de cours rédigée

**Sujet** : « Montrez que la mondialisation actuelle n'est pas un phénomène totalement nouveau, mais qu'elle présente des caractéristiques inédites. »

<details><summary>Voir le corrigé</summary>

**Introduction** : définir la mondialisation (intégration des économies par le commerce, les capitaux, les technologies) ; problématique : la mondialisation contemporaine prolonge-t-elle simplement la première mondialisation ?

**I. Un phénomène ancien**
- A. La première mondialisation (1870-1914) : baisse des coûts de transport, étalon-or, capitaux et migrations massifs ; un degré d'ouverture que certains pays n'ont retrouvé que dans les années 1970-1980.
- B. Un processus réversible : le repli de 1914-1945 (protectionnisme, crise de 1929) montre que l'ouverture dépend de choix politiques.

**II. Des caractéristiques inédites**
- A. La **fragmentation de la production** : les chaînes de valeur mondiales font circuler des composants plusieurs fois avant le produit fini ; le commerce intra-firme pèse lourd.
- B. Le rôle de la finance et des services : libéralisation des capitaux, services échangeables à distance (offshoring), numérique.
- C. Des acteurs nouveaux : pays émergents (Chine, Inde), règles multilatérales de l'OMC, accords régionaux ; et depuis 2008, une recomposition (nearshoring) dont profite un pays proche de l'Europe comme le Maroc.

**Conclusion** : la mondialisation actuelle est plus profonde (production) qu'étendue (les migrations restent plus faibles qu'avant 1914), et son avenir dépend des tensions géopolitiques.

</details>
`,
    qcm: [
      { q: "Le taux de couverture d'un pays se calcule comme :", choix: ["(X + M) / PIB", "X / M x 100", "M / PIB x 100", "X - M"], bonne: 1, explication: "Il mesure la part des importations financée par les exportations." },
      { q: "Un pays exporte 600 et importe 750 (milliards). Son taux de couverture est de :", choix: ["125 %", "80 %", "20 %", "45 %"], bonne: 1, explication: "600 / 750 = 0,8, soit 80 %." },
      { q: "Le taux d'ouverture est généralement plus élevé :", choix: ["Dans les grands pays", "Dans les petits pays", "Dans les pays sans accords commerciaux", "Dans les pays sans industrie"], bonne: 1, explication: "Un petit pays ne peut pas tout produire et commerce davantage rapporté à son PIB." },
      { q: "La première mondialisation se situe principalement entre :", choix: ["1492 et 1600", "1870 et 1914", "1945 et 1970", "1990 et 2008"], bonne: 1, explication: "Elle s'appuie sur la baisse des coûts de transport et l'étalon-or." },
      { q: "Au Maroc, la réglementation des changes relève :", choix: ["De l'ADII", "De l'Office des changes", "De la Cour des comptes", "Du HCP"], bonne: 1, explication: "Bank Al-Maghrib conduit la politique de change ; l'Office des changes réglemente les opérations." },
      { q: "Un indice d'avantage comparatif révélé égal à 15 signifie que :", choix: ["Le produit représente 15 % des exportations", "Le pays est fortement spécialisé dans ce produit", "Le pays importe ce produit", "Le produit est soumis à 15 % de droits"], bonne: 1, explication: "Le produit pèse 15 fois plus dans ses exportations que dans le commerce mondial." },
      { q: "Le taux de dépendance rapporte au PIB :", choix: ["Les exportations", "Les importations", "Le solde commercial", "Les réserves de change"], bonne: 1, explication: "M / PIB : part des besoins satisfaits par l'étranger." },
      { q: "Le nearshoring désigne :", choix: ["La délocalisation vers des pays lointains à bas salaires", "Le rapprochement des fournisseurs vers les marchés de consommation", "La fermeture des frontières", "Le commerce entre filiales"], bonne: 1, explication: "Les entreprises européennes cherchent des fournisseurs proches, ce qui profite au Maroc." },
      { q: "Le tarif Smoot-Hawley de 1930 illustre :", choix: ["La libéralisation du commerce", "La montée du protectionnisme de l'entre-deux-guerres", "La création du GATT", "L'étalon-or"], bonne: 1, explication: "Les États-Unis relèvent fortement leurs droits de douane après la crise de 1929." },
      { q: "L'économie internationale monétaire étudie notamment :", choix: ["Les droits de douane", "Le taux de change et la balance des paiements", "Les règles d'origine", "Les quotas d'importation"], bonne: 1, explication: "La branche réelle étudie le commerce, la branche monétaire les monnaies et les financements." },
    ],
  },

  2: {
    titre: "La balance des paiements",
    description: "Balance des paiements selon le MBP6 : résidents, partie double, comptes courant, de capital et financier, soldes, déficits jumeaux et cas du Maroc.",
    resume: md`
## L'essentiel — La balance des paiements

- Document qui retrace les opérations entre **résidents** et **non-résidents** ; un résident a son centre d'intérêt économique sur le territoire depuis au moins un an.
- Établie au Maroc par l'**Office des changes**, selon le **MBP6** du FMI ; enregistrement en **partie double**.
- **Compte des transactions courantes** : biens, services, revenus primaires (salaires, intérêts, dividendes), revenus secondaires (transferts sans contrepartie : MRE).
- **Compte de capital** : transferts en capital, actifs non financiers non produits.
- **Compte financier** : investissements directs, portefeuille, dérivés, autres investissements, **avoirs de réserve** ; solde = actifs nets acquis − passifs nets contractés.
- Identité : $CTC + CK + EO = CF$ ; la balance est toujours équilibrée, seuls les soldes partiels sont analysés.
- **Capacité / besoin de financement** $= CTC + CK$.
- $CTC = (S_{privée} - I) + (T - G)$ : un déficit courant signifie que l'investissement dépasse l'épargne nationale ; thèse des **déficits jumeaux**.
- Maroc : déficit des biens, excédent des services (tourisme 138,6 milliards de DH en 2025), excédent des transferts MRE (122 milliards), déficit courant d'environ 2,4 % du PIB en 2025, réserves de 442,9 milliards de DH.
`,
    exercices: md`
### Exercice 2 — Classer des opérations

Pour un pays résident « Maroc », indiquez le compte et le poste de chaque opération :

1. Une famille de Fès reçoit 20 000 DH d'un fils installé en Belgique.
2. Un groupe espagnol crée une usine de câblage à Kénitra en apportant 300 millions de DH de capital.
3. Cette filiale verse l'année suivante 25 millions de DH de dividendes à sa maison mère.
4. Un fonds britannique achète des obligations émises par le Trésor marocain.
5. Bank Al-Maghrib augmente ses avoirs en devises.
6. Des touristes allemands dépensent leurs devises à Marrakech.

<details><summary>Voir le corrigé</summary>

1. **Compte des transactions courantes**, revenus secondaires (transfert courant sans contrepartie), au crédit.
2. **Compte financier**, investissements directs : accroissement des passifs du Maroc envers l'étranger.
3. **Compte des transactions courantes**, revenus primaires (revenus d'investissement), au débit.
4. **Compte financier**, investissements de portefeuille : accroissement des passifs.
5. **Compte financier**, avoirs de réserve : acquisition nette d'actifs.
6. **Compte des transactions courantes**, services (voyages), au crédit : c'est une exportation de services.

</details>

### Exercice 3 — Épargne, investissement et solde courant

Dans une économie, l'épargne privée représente 22 % du PIB, l'investissement 30 % du PIB et le solde budgétaire est un déficit de 4 % du PIB.

1. Calculez le solde des transactions courantes en % du PIB.
2. Le gouvernement ramène le déficit budgétaire à 2 % du PIB, les autres données étant inchangées. Quel est le nouveau solde courant ?
3. Un déficit courant est-il toujours un problème ?

<details><summary>Voir le corrigé</summary>

**1)** $CTC = (S_{privée} - I) + (T - G) = (22 - 30) + (-4) = \mathbf{-12\,\%}$ du PIB.

**2)** $CTC = (22 - 30) + (-2) = \mathbf{-10\,\%}$ du PIB : la réduction du déficit public améliore le solde courant de 2 points, si le comportement privé ne change pas (thèse des déficits jumeaux).

**3)** Non. Un déficit courant traduit un recours à l'épargne étrangère. S'il finance des investissements productifs qui augmenteront les exportations futures, et s'il est couvert par des IDE stables, il est soutenable. Il devient dangereux s'il finance la consommation, s'il est durablement élevé (12 % du PIB ici est très élevé) et s'il repose sur des capitaux de court terme qui peuvent sortir brutalement.

</details>
`,
    qcm: [
      { q: "Au Maroc, la balance des paiements est établie par :", choix: ["Bank Al-Maghrib", "L'Office des changes", "Le HCP", "L'ADII"], bonne: 1, explication: "Selon le manuel MBP6 du FMI." },
      { q: "Les transferts des MRE à leurs familles sont enregistrés dans :", choix: ["Le compte financier", "Les revenus primaires", "Les revenus secondaires", "Le compte de capital"], bonne: 2, explication: "Ce sont des transferts courants sans contrepartie." },
      { q: "Les dividendes versés par une filiale à sa maison mère étrangère relèvent :", choix: ["Des investissements directs", "Des revenus primaires", "Des revenus secondaires", "Des services"], bonne: 1, explication: "Ce sont des revenus d'investissement, au débit pour le pays de la filiale." },
      { q: "La capacité ou le besoin de financement de la nation est égal à :", choix: ["Solde des biens", "CTC + compte de capital", "Compte financier + réserves", "Exportations − importations de services"], bonne: 1, explication: "Il mesure ce que le pays prête au reste du monde ou lui emprunte." },
      { q: "Un déficit des transactions courantes signifie que :", choix: ["L'épargne nationale dépasse l'investissement", "L'investissement dépasse l'épargne nationale", "Le budget est excédentaire", "Les réserves augmentent forcément"], bonne: 1, explication: "CTC ≈ S − I." },
      { q: "Les dépenses de touristes étrangers au Maroc sont :", choix: ["Des importations de services", "Des exportations de services", "Des revenus secondaires", "Des investissements de portefeuille"], bonne: 1, explication: "Poste voyages, au crédit." },
      { q: "En MBP6, une hausse des réserves de change de la banque centrale est :", choix: ["Un accroissement de passifs", "Une acquisition nette d'actifs", "Un revenu primaire", "Un transfert en capital"], bonne: 1, explication: "Elle augmente le solde du compte financier." },
      { q: "Un résident est défini par :", choix: ["Sa nationalité", "Son centre d'intérêt économique sur le territoire depuis au moins un an", "Le lieu de sa naissance", "La monnaie qu'il utilise"], bonne: 1, explication: "Une filiale étrangère implantée au Maroc est résidente." },
      { q: "Selon la thèse des déficits jumeaux, un déficit budgétaire tend à provoquer :", choix: ["Un excédent courant", "Un déficit courant", "Une hausse des réserves", "Une baisse de l'investissement étranger"], bonne: 1, explication: "CTC = (Sprivée − I) + (T − G)." },
      { q: "Le solde global de la balance des paiements est :", choix: ["Toujours positif", "Toujours nul comptablement", "Égal au solde commercial", "Égal aux réserves"], bonne: 1, explication: "La partie double équilibre la balance ; seuls les soldes partiels sont analysés." },
    ],
  },

  3: {
    titre: "Le marché des changes et le taux de change",
    description: "Marché des changes, cotation à l'incertain, cours croisé, change réel et effectif, cours à terme et parité des taux d'intérêt, PPA, Marshall-Lerner.",
    resume: md`
## L'essentiel — Marché des changes et taux de change

- Marché des changes : réseau interbancaire mondial, ouvert en continu ; acteurs : banques, entreprises, investisseurs, banques centrales. Au Maroc : marché interbancaire depuis 1996, interventions et cours de référence de Bank Al-Maghrib.
- Cotation **à l'incertain** (Maroc) : 1 EUR = 10,80 MAD ; **au certain** : inverse.
- Le client vend la devise au **cours acheteur** (bas) et l'achète au **cours vendeur** (haut).
- Cours croisé : $EUR/USD = \frac{EUR/MAD}{USD/MAD}$.
- À l'incertain, hausse du cours = **dépréciation** de la monnaie nationale ; dévaluation = décision officielle.
- **Marshall-Lerner** : la dépréciation améliore le solde si la somme des élasticités-prix dépasse 1 ; **courbe en J** à court terme.
- Change réel : $E_r = E \times \frac{P^*}{P}$ ; variation $\approx \frac{\Delta E}{E} + \pi^* - \pi$ ; hausse = dépréciation réelle = gain de compétitivité.
- Change effectif : moyenne pondérée par les échanges ; TCER = indicateur de compétitivité.
- Parité des taux couverte : $F = S \times \frac{1 + i_{MAD}\, n/360}{1 + i_{EUR}\, n/360}$ ; report si $F > S$, déport si $F < S$.
- **PPA** absolue $E = P/P^*$, relative $\frac{\Delta E}{E} \approx \pi - \pi^*$ ; tendance de long terme seulement.
`,
    exercices: md`
### Exercice 2 — Couverture d'un importateur

Une société de Tanger importe des machines pour 200 000 USD payables dans 6 mois (180 jours). Cours comptant USD/MAD : 9,90. Taux à 6 mois : 2,6 % sur le dirham, 4 % sur le dollar.

1. Calculez le cours à terme USD/MAD à 6 mois. Report ou déport ?
2. Quel montant en dirhams l'importateur paiera-t-il s'il se couvre à terme ?
3. Dans 6 mois, le cours comptant est de 10,10. Quel aurait été le coût sans couverture ? Commentez.

<details><summary>Voir le corrigé</summary>

**1)** $F = 9{,}90 \times \frac{1 + 0{,}026 \times 180/360}{1 + 0{,}04 \times 180/360} = 9{,}90 \times \frac{1{,}013}{1{,}02} \approx \mathbf{9{,}832}$. Le dollar cote un **déport** : le taux d'intérêt du dollar est plus élevé que celui du dirham.

**2)** $200\,000 \times 9{,}832 \approx \mathbf{1\,966\,400}$ MAD (avec $F \approx 9{,}83206$ : 1 966 412 MAD).

**3)** Sans couverture : $200\,000 \times 10{,}10 = \mathbf{2\,020\,000}$ MAD. La couverture a fait économiser environ 53 600 MAD. Elle ne garantit pas toujours un gain (si le dollar avait baissé, l'importateur aurait renoncé à une économie), mais elle supprime l'incertitude : le coût des machines est connu dès la commande, ce qui permet de fixer les prix de vente.

</details>

### Exercice 3 — Parité des pouvoirs d'achat

Un même panier de biens échangeables coûte 2 160 DH au Maroc et 200 USD aux États-Unis. Le cours de marché est de 9,90 MAD pour 1 USD.

1. Calculez le taux de change de PPA absolue.
2. Le dirham est-il surévalué ou sous-évalué par rapport à la PPA ?
3. Sur cinq ans, l'inflation annuelle moyenne est de 2 % au Maroc et de 3 % aux États-Unis. Quel cours prévoit la PPA relative au bout de cinq ans, en partant du taux de PPA ?

<details><summary>Voir le corrigé</summary>

**1)** $E_{PPA} = \frac{2\,160}{200} = \mathbf{10{,}80}$ MAD pour 1 USD.

**2)** Au cours de marché, 200 USD valent $200 \times 9{,}90 = 1\,980$ DH, moins que le prix marocain du panier : il faut moins de dirhams par dollar sur le marché (9,90) que ne l'indique la PPA (10,80). Le dirham est donc **surévalué** par rapport à la PPA d'environ $10{,}80 / 9{,}90 - 1 \approx 9{,}1\,\%$ : les produits marocains sont relativement chers une fois convertis en dollars.

**3)** $E_5 = 10{,}80 \times \left(\frac{1{,}02}{1{,}03}\right)^5 \approx \mathbf{10{,}29}$ MAD pour 1 USD : le pays qui a le moins d'inflation voit sa monnaie s'apprécier.

</details>
`,
    qcm: [
      { q: "La cotation 1 EUR = 10,80 MAD est une cotation :", choix: ["Au certain", "À l'incertain", "Croisée", "À terme"], bonne: 1, explication: "Elle donne le prix d'une unité de devise en monnaie nationale." },
      { q: "Avec une cotation à l'incertain, une hausse du cours EUR/MAD signifie :", choix: ["Une appréciation du dirham", "Une dépréciation du dirham", "Une réévaluation du dirham", "Une baisse de l'euro"], bonne: 1, explication: "Il faut plus de dirhams pour un euro." },
      { q: "Un exportateur qui vend des devises à sa banque obtient :", choix: ["Le cours vendeur", "Le cours acheteur", "Le cours moyen", "Le cours à terme"], bonne: 1, explication: "La banque achète la devise au cours le plus bas." },
      { q: "Si EUR/MAD = 10,80 et USD/MAD = 9,90, le cours EUR/USD est d'environ :", choix: ["0,917", "1,091", "1,170", "0,900"], bonne: 1, explication: "10,80 / 9,90 ≈ 1,091." },
      { q: "Le taux de change réel corrige le taux nominal :", choix: ["Des taux d'intérêt", "Des écarts d'inflation", "Des droits de douane", "Des réserves de change"], bonne: 1, explication: "Er = E x P* / P." },
      { q: "Si le taux d'intérêt du dirham dépasse celui de l'euro, l'euro à terme cote :", choix: ["Un déport", "Un report", "Au pair", "Une décote"], bonne: 1, explication: "F > S d'après la parité des taux d'intérêt couverte." },
      { q: "La condition de Marshall-Lerner porte sur :", choix: ["Les taux d'intérêt", "Les élasticités-prix des exportations et des importations", "Les réserves de change", "Les taux d'inflation"], bonne: 1, explication: "La somme des élasticités doit dépasser 1 en valeur absolue." },
      { q: "La courbe en J décrit :", choix: ["L'évolution des réserves", "La dégradation puis l'amélioration du solde commercial après une dépréciation", "La hausse continue des taux", "La relation inflation-chômage"], bonne: 1, explication: "Les prix réagissent avant les volumes." },
      { q: "Selon la PPA relative, la monnaie du pays qui a le plus d'inflation :", choix: ["S'apprécie", "Se déprécie", "Reste stable", "Devient convertible"], bonne: 1, explication: "La variation du change compense l'écart d'inflation." },
      { q: "Le taux de change effectif réel est :", choix: ["Le cours du jour", "Une moyenne pondérée des taux bilatéraux corrigée des inflations", "Le cours à terme", "Le cours de référence de l'euro"], bonne: 1, explication: "C'est l'indicateur de compétitivité-prix d'un pays." },
    ],
  },

  4: {
    titre: "Les régimes de change et le système monétaire international",
    description: "Change fixe, intermédiaire ou flottant, triangle de Mundell, étalon-or, Bretton Woods, dilemme de Triffin, crises de change et régime du dirham depuis 2018.",
    resume: md`
## L'essentiel — Régimes de change et système monétaire international

- **Régimes** : ancrage dur (union monétaire, dollarisation, caisse d'émission), ancrage classique (devise ou panier), intermédiaires (bande large, flottement géré), flottement libre.
- Change fixe : stabilité et inflation importée limitée, mais besoin de **réserves** et perte de l'arme du change ; change flottant : absorption des chocs, mais volatilité.
- **Triangle de Mundell** : change fixe, capitaux libres et politique monétaire autonome sont incompatibles ; il faut choisir deux objectifs sur trois.
- **Étalon-or** (1870-1914) : monnaies convertibles en or, ajustement par les flux d'or (Hume) ; effondrement dans les années 1930.
- **Bretton Woods** (1944) : dollar convertible à 35 dollars l'once, parités fixes à 1 %, création du FMI et de la BIRD ; **dilemme de Triffin**.
- **15 août 1971** : fin de la convertibilité du dollar ; flottement généralisé en **1973** ; accords de la **Jamaïque** (1976).
- Euro en 1999 ; crises de change : SME 1992-1993, Mexique 1994, Asie 1997, Argentine 2001.
- **Dirham** : panier **60 % euro, 40 % dollar** depuis 2015 ; bande de ± 2,5 % le 15 janvier 2018, puis **± 5 %** le 9 mars 2020 ; objectif à terme : flexibilité et ciblage de l'inflation.
`,
    exercices: md`
### Exercice 2 — Le triangle d'incompatibilité appliqué

Pour chacun des cas suivants, indiquez quel objectif du triangle de Mundell est sacrifié :

1. L'Espagne, membre de la zone euro.
2. Le Royaume-Uni, dont la livre flotte et dont les capitaux circulent librement.
3. La Chine, qui gère son change et contrôle les mouvements de capitaux.
4. Un pays qui veut ancrer sa monnaie au dollar, libéraliser totalement les capitaux et baisser ses taux pour relancer son économie : que risque-t-il ?

<details><summary>Voir le corrigé</summary>

1. L'Espagne a un change fixe avec ses partenaires (monnaie unique) et des capitaux libres : elle a abandonné l'**autonomie monétaire**, les taux étant fixés par la BCE.
2. Le Royaume-Uni conserve la liberté des capitaux et l'autonomie de la Banque d'Angleterre : il a renoncé au **change fixe**.
3. La Chine garde la maîtrise de son change et de sa politique monétaire : elle limite la **liberté des capitaux**.
4. Il vise les trois objectifs à la fois. La baisse des taux fait sortir les capitaux vers des placements en dollars mieux rémunérés ; la banque centrale doit vendre ses réserves pour défendre la parité. Quand les réserves s'épuisent, il subit une **crise de change** et une dévaluation forcée.

</details>

### Exercice 3 — Question de synthèse

**Sujet** : « Pourquoi le système de Bretton Woods s'est-il effondré ? »

<details><summary>Voir le corrigé</summary>

**Introduction** : présenter Bretton Woods (1944) : parités fixes, dollar seul convertible en or à 35 dollars l'once, FMI ; problématique : quelles contradictions internes et quels chocs ont mis fin au système en 1971-1973 ?

**I. Une contradiction de départ : le dilemme de Triffin**
- A. Le dollar sert de monnaie internationale : le monde a besoin de liquidités en dollars.
- B. Ces dollars sont fournis par les déficits extérieurs américains ; plus ils s'accumulent, plus la convertibilité en or devient douteuse (stock d'or américain insuffisant).

**II. Des tensions croissantes dans les années 1960**
- A. Déficits américains liés à la guerre du Vietnam et aux dépenses sociales, inflation aux États-Unis.
- B. Rattrapage de l'Europe et du Japon, dont les monnaies deviennent sous-évaluées ; spéculation et demandes de conversion en or.
- C. Libéralisation progressive des capitaux (euro-dollars), incompatible avec des parités fixes (triangle de Mundell).

**III. La fin du système**
- A. 15 août 1971 : suspension de la convertibilité ; échec des accords du Smithsonian.
- B. Mars 1973 : flottement généralisé, entériné à la Jamaïque en 1976.

**Conclusion** : le dollar reste la monnaie centrale du « non-système » actuel, ce qui montre que le rôle international d'une monnaie survit aux règles qui l'ont établi.

</details>
`,
    qcm: [
      { q: "Le triangle d'incompatibilité de Mundell associe :", choix: ["Croissance, inflation, chômage", "Change fixe, liberté des capitaux, autonomie monétaire", "Épargne, investissement, déficit", "Or, dollar, euro"], bonne: 1, explication: "Un pays ne peut atteindre que deux de ces trois objectifs." },
      { q: "Sous Bretton Woods, la seule monnaie convertible en or était :", choix: ["La livre sterling", "Le dollar américain", "Le franc français", "Le deutsche mark"], bonne: 1, explication: "Au prix de 35 dollars l'once." },
      { q: "La convertibilité du dollar en or est suspendue le :", choix: ["22 juillet 1944", "15 août 1971", "1er janvier 1999", "8 janvier 1976"], bonne: 1, explication: "Décision du président Nixon." },
      { q: "Le dilemme de Triffin souligne que :", choix: ["L'or est trop abondant", "Fournir des dollars au monde suppose des déficits américains qui sapent la confiance dans le dollar", "Les changes flottants sont instables", "Le FMI manque de ressources"], bonne: 1, explication: "Contradiction centrale du système de Bretton Woods." },
      { q: "Depuis 2015, le panier de cotation du dirham est composé de :", choix: ["80 % euro, 20 % dollar", "60 % euro, 40 % dollar", "50 % euro, 50 % dollar", "100 % euro"], bonne: 1, explication: "Pondérations fixées en avril 2015." },
      { q: "Depuis mars 2020, la bande de fluctuation du dirham est de :", choix: ["± 0,3 %", "± 2,5 %", "± 5 %", "± 10 %"], bonne: 2, explication: "Après une première étape à ± 2,5 % en janvier 2018." },
      { q: "Les pays de la zone euro ont renoncé :", choix: ["À la liberté des capitaux", "À l'autonomie de leur politique monétaire", "Au commerce extérieur", "À leur budget national"], bonne: 1, explication: "La BCE fixe les taux pour l'ensemble de la zone." },
      { q: "Pour défendre une parité fixe attaquée, la banque centrale :", choix: ["Achète des devises", "Vend des devises de ses réserves", "Baisse ses taux", "Imprime des devises"], bonne: 1, explication: "Elle soutient sa monnaie en la rachetant contre des devises." },
      { q: "Les accords de la Jamaïque (1976) :", choix: ["Créent le FMI", "Entérinent le flottement des monnaies", "Créent l'euro", "Rétablissent l'étalon-or"], bonne: 1, explication: "Chaque pays choisit son régime de change." },
      { q: "Le mécanisme de Hume décrit l'ajustement sous :", choix: ["Le change flottant", "L'étalon-or", "La zone euro", "Le currency board"], bonne: 1, explication: "Les flux d'or modifient la masse monétaire et les prix." },
    ],
  },

  5: {
    titre: "Les mouvements internationaux de capitaux et les firmes multinationales",
    description: "IDE, investissements de portefeuille, avantages et risques des capitaux, firmes multinationales, stratégies d'implantation, paradigme OLI et IDE au Maroc.",
    resume: md`
## L'essentiel — Capitaux internationaux et firmes multinationales

- **IDE** : influence durable, au moins **10 % des droits de vote** ; formes : greenfield, fusion-acquisition, bénéfices réinvestis.
- **Portefeuille** : actions (moins de 10 %) et obligations, but de placement, très volatil ; **autres investissements** : prêts, crédits, dépôts.
- Avantages de la mobilité : financer l'investissement, diversifier, transférer des technologies ; risques : **arrêts brutaux**, contagion, dette en devises.
- Maroc : libéralisation progressive ; non-résidents libres d'investir et de rapatrier ; placements des résidents encadrés par l'Office des changes.
- **FMN** : filiales dans plusieurs pays ; **chaînes de valeur mondiales**, commerce intra-firme, **prix de transfert** (principe de pleine concurrence).
- Stratégies : recherche de marché (horizontale), d'efficacité (verticale), de ressources, d'actifs stratégiques.
- **OLI (Dunning)** : Ownership + Location + Internalisation = IDE ; O seul = licence ; O + I = exportation.
- Maroc : IDE d'efficacité exportateurs (Renault Tanger 2012, Stellantis Kénitra 2019, aéronautique), charte de l'investissement (loi-cadre 03-22), AMDIE.
- Effets : emplois, exportations, technologies, mais dividendes rapatriés et importations de composants ; enjeu du **taux d'intégration locale**.
`,
    exercices: md`
### Exercice 2 — Licence, exportation ou IDE ?

Pour chaque situation, indiquez le mode d'internationalisation que prédit le paradigme OLI :

1. Une PME marocaine de cosmétiques à l'argan possède une marque reconnue ; le marché européen est accessible sans droits de douane et produire au Maroc reste moins coûteux.
2. Un laboratoire étranger possède un procédé de fabrication facile à protéger par contrat ; il ne souhaite pas investir dans un pays où il connaît mal le marché.
3. Un constructeur européen veut produire au plus près de ses marchés à faible coût et garder le contrôle total de ses procédés.

<details><summary>Voir le corrigé</summary>

1. Avantage **O** (marque) et **I** (la PME garde la production), mais l'avantage de localisation est au Maroc même : elle **exporte**.
2. Avantage **O** seul : l'internalisation n'est pas nécessaire puisque le contrat protège le procédé, et le pays n'offre pas d'avantage de localisation décisif pour lui : il **vend une licence** à un fabricant local.
3. **O** (technologie), **L** (coûts et proximité des marchés), **I** (contrôle des procédés) : il réalise un **IDE**.

</details>

### Exercice 3 — IDE et portefeuille dans la balance des paiements

Un pays reçoit dans l'année 30 milliards de DH d'IDE et 25 milliards d'investissements de portefeuille. L'année suivante, une crise de confiance fait sortir 20 milliards de capitaux de portefeuille, tandis que les IDE entrants tombent à 25 milliards.

1. Calculez les entrées nettes de capitaux chaque année (IDE + portefeuille).
2. Quelle forme de capitaux est la plus stable ? Pourquoi ?
3. Quelles conséquences la sortie de capitaux peut-elle avoir sur le taux de change et les réserves ?

<details><summary>Voir le corrigé</summary>

**1)** Année 1 : $30 + 25 = \mathbf{55}$ milliards de DH. Année 2 : $25 - 20 = \mathbf{5}$ milliards de DH.

**2)** L'IDE est le plus stable : il correspond à des usines et à des équipements qu'on ne revend pas du jour au lendemain, et il repose sur une stratégie de long terme. Les titres de portefeuille se vendent en quelques secondes au moindre doute.

**3)** La chute de 50 milliards des entrées nettes laisse le déficit courant moins bien financé : la demande de devises dépasse l'offre, la monnaie nationale se déprécie ou, en change fixe ou en bande, la banque centrale doit vendre des devises et ses **réserves diminuent**. C'est le mécanisme de l'arrêt brutal (*sudden stop*).

</details>
`,
    qcm: [
      { q: "Par convention, un investissement direct étranger suppose de détenir au moins :", choix: ["1 % des droits de vote", "10 % des droits de vote", "50 % des droits de vote", "100 % du capital"], bonne: 1, explication: "Critère du FMI et de l'OCDE : influence durable sur la gestion." },
      { q: "La construction d'une usine nouvelle par un investisseur étranger est un IDE :", choix: ["De portefeuille", "Greenfield", "De fusion-acquisition", "Indirect"], bonne: 1, explication: "Création d'une unité de production nouvelle." },
      { q: "Dans le paradigme OLI, la lettre L désigne :", choix: ["L'avantage de localisation", "La licence", "La liquidité", "Le levier"], bonne: 0, explication: "Pourquoi produire dans ce pays précis." },
      { q: "Selon Dunning, une entreprise qui n'a que l'avantage O :", choix: ["Réalise un IDE", "Exporte", "Vend une licence", "Se délocalise"], bonne: 2, explication: "Sans internalisation ni localisation, elle cède son avantage." },
      { q: "Les usines automobiles de Tanger et de Kénitra illustrent surtout une stratégie :", choix: ["De recherche de ressources", "De recherche d'efficacité", "De recherche d'actifs stratégiques", "Purement financière"], bonne: 1, explication: "Production à coût compétitif, proche de l'Europe, pour l'exportation." },
      { q: "Les prix de transfert sont :", choix: ["Les frais de transport", "Les prix des échanges entre filiales d'un même groupe", "Les taux de change", "Les droits de douane"], bonne: 1, explication: "Ils doivent respecter le principe de pleine concurrence." },
      { q: "Les flux de capitaux les plus volatils sont en général :", choix: ["Les IDE greenfield", "Les investissements de portefeuille et les crédits courts", "Les bénéfices réinvestis", "Les transferts des MRE"], bonne: 1, explication: "Ils peuvent sortir en quelques jours." },
      { q: "La charte de l'investissement marocaine de 2022 est la :", choix: ["Loi 17-95", "Loi-cadre 03-22", "Loi 15-95", "Loi 09-08"], bonne: 1, explication: "Elle prévoit des primes à l'investissement." },
      { q: "Les dividendes rapatriés par une filiale étrangère pèsent sur :", choix: ["Le solde des biens", "Les revenus primaires", "Le compte de capital", "Les avoirs de réserve"], bonne: 1, explication: "Ce sont des revenus d'investissement versés à l'étranger." },
      { q: "Le taux d'intégration locale mesure :", choix: ["La part des salariés locaux", "La part de la valeur du produit fabriquée dans le pays", "Le taux d'imposition", "La part des exportations"], bonne: 1, explication: "C'est l'enjeu principal des écosystèmes industriels." },
    ],
  },

  6: {
    titre: "Les institutions de l'économie mondiale",
    description: "GATT, clause de la nation la plus favorisée, traitement national, OMC et règlement des différends, FMI et conditionnalité, Banque mondiale, CNUCED et Maroc.",
    resume: md`
## L'essentiel — Les institutions de l'économie mondiale

- Raison d'être : éviter le **dilemme du prisonnier** des années 1930 (protectionnisme et dévaluations en chaîne).
- **Bretton Woods (1944)** : FMI et BIRD ; échec de la charte de La Havane (1948) ; **GATT** signé en 1947 par 23 pays.
- Principes : **nation la plus favorisée** (article I), **traitement national** (article III), consolidation, interdiction des quotas (article XI), transparence.
- Exceptions : zones régionales (article XXIV), traitement spécial et différencié, sauvegardes (article XIX), antidumping.
- Cycles : Kennedy, Tokyo, **Uruguay (1986-1994)** ; accords de **Marrakech** (15 avril 1994) ; **OMC** le 1er janvier 1995, 166 membres, Maroc membre fondateur.
- OMC : GATT 1994, **AGCS**, **ADPIC** ; consensus, un pays une voix ; **ORD** (groupe spécial, appel, rétorsion) ; Organe d'appel paralysé depuis décembre 2019 ; cycle de Doha bloqué.
- **FMI** (191 membres) : surveillance (article IV), prêts conditionnés, quotes-parts, **DTS** (1969) ; Maroc : PAS 1983-1993, ligne de précaution (2012, tirage en 2020), ligne de crédit modulable (2023).
- **Banque mondiale** : BIRD, AID, SFI, AMGI, CIRDI ; autres : CNUCED (1964), OMD, OCDE, BAD.
`,
    exercices: md`
### Exercice 2 — FMI et Banque mondiale

Indiquez quelle institution (FMI, BIRD, AID, SFI, CIRDI) intervient dans chaque cas :

1. Un pays voit ses réserves de change fondre et ne peut plus payer ses importations.
2. Un pays à revenu intermédiaire veut financer un programme de routes rurales sur 20 ans.
3. Un pays très pauvre a besoin d'un financement quasi gratuit pour ses écoles.
4. Une banque privée africaine cherche un financement pour développer le crédit aux PME.
5. Un investisseur étranger conteste l'expropriation de son usine par un État.

<details><summary>Voir le corrigé</summary>

1. **FMI** : difficulté de balance des paiements ; prêt conditionné à un programme de redressement.
2. **BIRD** : projet de développement à long terme d'un pays à revenu intermédiaire.
3. **AID** : prêts à taux très faible et dons aux pays les plus pauvres.
4. **SFI** : financement du secteur privé.
5. **CIRDI** : arbitrage des différends relatifs aux investissements entre investisseurs et États.

</details>

### Exercice 3 — Question de synthèse

**Sujet** : « L'OMC est-elle en crise ? »

<details><summary>Voir le corrigé</summary>

**Introduction** : rappeler la création de l'OMC (Marrakech, 1994 ; 1er janvier 1995) et ses fonctions (négocier, administrer les accords, régler les différends) ; problématique : l'institution parvient-elle encore à remplir ses trois fonctions ?

**I. Des signes de crise**
- A. La fonction de négociation est bloquée : cycle de Doha lancé en 2001 et jamais conclu ; règle du consensus à 166 membres.
- B. La fonction juridictionnelle est affaiblie : Organe d'appel paralysé depuis décembre 2019, « appels dans le vide ».
- C. Le multilatéralisme est contourné : multiplication des accords régionaux, tensions commerciales entre grandes puissances, mesures unilatérales.

**II. Une institution qui reste utile**
- A. Les règles de base (NPF, traitement national, consolidation) continuent d'encadrer l'immense majorité des échanges.
- B. Des accords ciblés aboutissent : facilitation des échanges (2017), subventions à la pêche (2022) ; des membres ont créé un arbitrage d'appel provisoire.
- C. Pour les pays de taille moyenne comme le Maroc, l'OMC reste une protection contre la loi du plus fort.

**Conclusion** : l'OMC traverse une crise de sa fonction de négociation et d'arbitrage plus que de ses règles ; son avenir dépend d'une réforme du règlement des différends et d'accords plurilatéraux.

</details>
`,
    qcm: [
      { q: "Le GATT a été signé en :", choix: ["1944", "1947", "1986", "1995"], bonne: 1, explication: "Par 23 pays, entré en vigueur en 1948." },
      { q: "La clause de la nation la plus favorisée impose :", choix: ["De traiter les produits importés comme les produits nationaux", "D'étendre à tous les membres un avantage accordé à l'un d'eux", "De supprimer tous les droits de douane", "De favoriser les pays en développement"], bonne: 1, explication: "Article I du GATT : non-discrimination entre partenaires." },
      { q: "Le traitement national interdit :", choix: ["Les droits de douane", "De taxer un produit importé plus lourdement qu'un produit national similaire, une fois dédouané", "Les zones de libre-échange", "Les subventions agricoles"], bonne: 1, explication: "Article III du GATT." },
      { q: "Les accords créant l'OMC ont été signés à :", choix: ["Genève", "Marrakech", "Doha", "Bretton Woods"], bonne: 1, explication: "Le 15 avril 1994." },
      { q: "L'OMC est entrée en fonction le :", choix: ["1er janvier 1995", "15 avril 1994", "1er janvier 1948", "11 décembre 2001"], bonne: 0, explication: "Elle a succédé au GATT de 1947." },
      { q: "L'accord de l'OMC sur la propriété intellectuelle est :", choix: ["L'AGCS", "L'ADPIC", "Le GATT 1994", "L'AMI"], bonne: 1, explication: "Accord sur les aspects des droits de propriété intellectuelle qui touchent au commerce." },
      { q: "Les décisions de l'OMC se prennent en principe :", choix: ["Selon les quotes-parts", "Par consensus, un pays une voix", "À la majorité des pays développés", "Par le directeur général"], bonne: 1, explication: "Contrairement au FMI, où les voix dépendent des quotes-parts." },
      { q: "Depuis décembre 2019, l'Organe d'appel de l'OMC :", choix: ["A été renforcé", "Ne peut plus siéger faute de membres nommés", "A été remplacé par le FMI", "Juge les différends en dernier ressort plus vite"], bonne: 1, explication: "Les nominations sont bloquées par les États-Unis." },
      { q: "Le droit de tirage spécial (DTS) est :", choix: ["Un prêt de la Banque mondiale", "Un actif de réserve créé par le FMI en 1969", "Un droit de douane", "Une monnaie africaine"], bonne: 1, explication: "Sa valeur repose sur un panier de cinq monnaies." },
      { q: "L'institution qui finance le secteur privé dans le groupe de la Banque mondiale est :", choix: ["L'AID", "La SFI", "Le CIRDI", "La BIRD"], bonne: 1, explication: "Société financière internationale, créée en 1956." },
    ],
  },

  7: {
    titre: "L'intégration économique régionale",
    description: "Étapes de Balassa, création et détournement de commerce de Viner, zone monétaire optimale, Union européenne, ZLECAf, UMA et accords de libre-échange du Maroc.",
    resume: md`
## L'essentiel — L'intégration économique régionale

- **Balassa (1961)** : zone de libre-échange, union douanière (**tarif extérieur commun**), marché commun (libre circulation des facteurs), union économique, union économique et monétaire.
- ZLE : chaque pays garde son tarif extérieur ; **règles d'origine** indispensables. Autorisée par l'**article XXIV** du GATT.
- **Viner (1950)** : **création de commerce** (production nationale coûteuse remplacée par un partenaire moins cher : gain) ; **détournement de commerce** (fournisseur tiers efficace remplacé par un partenaire moins efficace : perte de recettes douanières et d'efficacité).
- La création domine si les partenaires sont efficaces et le tarif extérieur faible ; gains dynamiques : économies d'échelle, concurrence, IDE.
- **Zone monétaire optimale (Mundell, 1961)** : mobilité du travail, flexibilité des prix et salaires, intégration commerciale, budget fédéral.
- **UE** : traité de Rome 1957, marché unique 1993, euro 1999, 27 membres ; premier partenaire du Maroc.
- **ZLECAf** : signée à Kigali en mars 2018, en vigueur le 30 mai 2019, échanges depuis janvier 2021 ; **UMA** créée le 17 février 1989, bloquée (coût du non-Maghreb).
- Maroc : accord d'association UE (1996/2000), AELE (1997/1999), EAU, **Agadir** (2004/2007), **États-Unis** (2004/2006), Turquie (2004/2006), Royaume-Uni (2019/2021) ; cumul pan-euro-méditerranéen ; bilan : exportations industrielles mais déficits bilatéraux.
`,
    exercices: md`
### Exercice 2 — Identifier le stade d'intégration

Classez chaque situation dans la gradation de Balassa :

1. Trois pays suppriment les droits entre eux mais chacun garde son tarif envers le reste du monde.
2. Des pays adoptent un tarif extérieur commun, sans libre circulation des travailleurs.
3. Des pays partagent une banque centrale et une monnaie, après avoir réalisé un marché unique.
4. Des pays ont un tarif extérieur commun et autorisent la libre circulation des capitaux et des personnes.

<details><summary>Voir le corrigé</summary>

1. **Zone de libre-échange** (règles d'origine nécessaires).
2. **Union douanière**.
3. **Union économique et monétaire** (exemple : zone euro).
4. **Marché commun**.

</details>

### Exercice 3 — Règles d'origine et détournement de trafic

Le pays A et le pays B forment une ZLE. Sur un tissu importé du reste du monde, A applique un droit de 25 % et B un droit de 5 %. Un tissu vaut 100 hors droits.

1. Sans règles d'origine, comment un importateur de A pourrait-il réduire ses droits ?
2. Quelle perte en résulte pour A, par mètre de tissu ?
3. Un confectionneur de B fabrique des chemises avec ce tissu importé et les vend en A. Dans quelles conditions les chemises bénéficient-elles du droit nul ?

<details><summary>Voir le corrigé</summary>

**1)** Il ferait entrer le tissu par le pays B (droit de 5 %), puis le réexpédierait vers A sans droit, puisque les échanges entre A et B sont libres : c'est le **détournement de trafic**.

**2)** A perdrait une recette de $100 \times 25\,\% = 25$ par mètre, tandis que B en encaisserait 5 : la protection voulue par A serait contournée.

**3)** Les chemises sont originaires de B si elles y ont subi une **transformation suffisante** selon la règle d'origine de l'accord (par exemple un changement de position tarifaire ou une valeur ajoutée minimale dans la zone). La confection à partir d'un tissu importé peut suffire selon les accords, alors qu'un simple emballage ou un étiquetage ne suffit jamais.

</details>
`,
    qcm: [
      { q: "Une union douanière se distingue d'une zone de libre-échange par :", choix: ["La monnaie unique", "Le tarif extérieur commun", "La libre circulation des travailleurs", "L'absence de droits entre membres"], bonne: 1, explication: "Dans une ZLE, chaque membre garde son propre tarif envers les pays tiers." },
      { q: "Selon Viner, il y a création de commerce quand :", choix: ["Un fournisseur tiers efficace est remplacé par un partenaire moins efficace", "Une production nationale coûteuse est remplacée par des importations moins chères d'un partenaire", "Les droits de douane augmentent", "Les exportations diminuent"], bonne: 1, explication: "Le pays gagne en efficacité." },
      { q: "Le détournement de commerce entraîne notamment :", choix: ["Une hausse des recettes douanières", "Une perte de recettes douanières et d'efficacité", "Une baisse des importations", "Une hausse de la production nationale"], bonne: 1, explication: "Le fournisseur le plus efficace est évincé par le partenaire." },
      { q: "Les règles d'origine sont indispensables dans :", choix: ["Une union douanière", "Une zone de libre-échange", "Une union monétaire seulement", "Aucun accord"], bonne: 1, explication: "Elles évitent que les produits tiers entrent par le pays au tarif le plus bas." },
      { q: "Le critère principal d'une zone monétaire optimale selon Mundell est :", choix: ["Un tarif extérieur commun", "La mobilité du travail", "La même langue", "Un excédent commercial"], bonne: 1, explication: "Elle permet de s'ajuster sans taux de change." },
      { q: "L'UMA a été créée à Marrakech en :", choix: ["1957", "1989", "2004", "2018"], bonne: 1, explication: "Le 17 février 1989, par cinq pays du Maghreb." },
      { q: "L'accord d'Agadir réunit le Maroc et :", choix: ["L'Algérie, la Libye, la Mauritanie", "La Tunisie, l'Égypte, la Jordanie", "La Turquie et les Émirats", "Le Sénégal et la Côte d'Ivoire"], bonne: 1, explication: "Signé en 2004, en vigueur en 2007." },
      { q: "L'ALE entre le Maroc et les États-Unis est entré en vigueur en :", choix: ["2000", "2006", "2012", "2021"], bonne: 1, explication: "Signé en 2004." },
      { q: "La ZLECAf est entrée en vigueur en :", choix: ["2010", "2019", "2023", "1994"], bonne: 1, explication: "Le 30 mai 2019 ; échanges sous son régime depuis janvier 2021." },
      { q: "L'article du GATT qui autorise les zones de libre-échange est :", choix: ["L'article I", "L'article III", "L'article XXIV", "L'article XI"], bonne: 2, explication: "Par dérogation à la clause NPF, sous conditions." },
    ],
  },
};

export default chapitres;
