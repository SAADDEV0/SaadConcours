// Théories du commerce international (S5) — compléments par chapitre : description SEO, résumé, exercices 2 et 3, QCM.
const md = String.raw;

const chapitres = {
  1: {
    titre: "Du mercantilisme à l'avantage absolu d'Adam Smith",
    description: "Mercantilisme et excédent commercial, critique de Hume, division du travail et avantage absolu d'Adam Smith, gains de la spécialisation et limites.",
    resume: md`
## L'essentiel — Du mercantilisme à l'avantage absolu

- **Mercantilisme** (XVIe-XVIIIe siècles) : richesse = stock d'or et d'argent ; il faut un **excédent commercial** ; protection, primes à l'exportation, colonies ; commerce = **jeu à somme nulle**.
- Variantes : bullionisme espagnol, mercantilisme commercial anglais (Thomas Mun), **colbertisme** français (manufactures).
- **Hume (1752)** : l'excédent fait entrer de l'or, les prix montent, les exportations baissent ; l'excédent permanent est impossible (*price-specie-flow*).
- **Smith (1776)** : la richesse vient du **travail** ; la **division du travail** (manufacture d'épingles) augmente la productivité ; elle est limitée par l'étendue du marché.
- **Avantage absolu** : produire un bien avec moins de travail que les autres pays ; chaque pays se spécialise dans son avantage absolu.
- Le commerce devient un **jeu à somme positive** ; politique recommandée : le **libre-échange**.
- Rapport d'échange avantageux : compris entre les coûts relatifs d'autarcie des deux pays.
- Limite majeure : un pays **sans aucun avantage absolu** serait exclu de l'échange ; réponse de Ricardo (1817).
`,
    exercices: md`
### Exercice 2 — Productivités exprimées en unités par heure

Les données sont exprimées en **unités produites par heure** de travail :

| Unités par heure | Textile (mètres) | Céréales (kg) |
|---|---:|---:|
| Pays A | 8 | 10 |
| Pays B | 4 | 20 |

1. Convertissez ces données en heures par unité.
2. Identifiez l'avantage absolu de chaque pays.
3. Chaque pays dispose de 100 heures. Calculez la production mondiale en spécialisation complète.

<details><summary>Voir le corrigé</summary>

**1)** Heures par unité = $1 / \text{productivité}$ : pays A : $1/8 = 0{,}125$ h par mètre et $1/10 = 0{,}1$ h par kg ; pays B : $1/4 = 0{,}25$ h par mètre et $1/20 = 0{,}05$ h par kg.

**2)** A est plus productif en **textile** (8 mètres par heure contre 4) ; B en **céréales** (20 kg par heure contre 10).

**3)** A produit $100 \times 8 = \mathbf{800}$ mètres de textile ; B produit $100 \times 20 = \mathbf{2\,000}$ kg de céréales.

</details>

### Exercice 3 — Question de cours

**Sujet** : « Comparez la conception du commerce international des mercantilistes et celle d'Adam Smith. »

<details><summary>Voir le corrigé</summary>

**Introduction** : deux époques et deux visions de la richesse ; problématique : le commerce enrichit-il une nation aux dépens des autres, ou toutes les nations à la fois ?

**I. Le mercantilisme : le commerce comme instrument de puissance**
- A. Richesse = métaux précieux ; objectif d'excédent commercial.
- B. Moyens : protection, primes, colonies, flotte nationale ; rôle central de l'État.
- C. Le commerce est un jeu à somme nulle ; critique de Hume (l'or fait monter les prix).

**II. Smith : le commerce comme source d'enrichissement mutuel**
- A. Richesse = production issue du travail ; division du travail limitée par l'étendue du marché.
- B. Avantage absolu : chaque nation se spécialise et échange ; jeu à somme positive.
- C. Politique de libre-échange ; mais limite : le pays sans avantage absolu.

**Conclusion** : Smith fonde l'analyse libérale du commerce que Ricardo généralisera ; la tentation mercantiliste resurgit pourtant dans les politiques qui visent l'excédent commercial.

</details>
`,
    qcm: [
      { q: "Pour les mercantilistes, la richesse d'une nation se mesure surtout à :", choix: ["Sa production agricole", "Son stock de métaux précieux", "Sa population active", "Son niveau technologique"], bonne: 1, explication: "D'où l'objectif d'excédent commercial pour faire entrer l'or." },
      { q: "Le colbertisme désigne :", choix: ["Le mercantilisme français axé sur les manufactures", "Le libéralisme anglais", "La doctrine des physiocrates", "La théorie de Ricardo"], bonne: 0, explication: "Du nom de Colbert, ministre de Louis XIV." },
      { q: "Selon Hume, un excédent commercial durable est impossible car :", choix: ["Les droits de douane augmentent", "L'entrée d'or fait monter les prix intérieurs", "Les salaires baissent", "Les colonies se révoltent"], bonne: 1, explication: "Mécanisme d'ajustement par les flux de métaux." },
      { q: "L'ouvrage principal d'Adam Smith a été publié en :", choix: ["1664", "1752", "1776", "1817"], bonne: 2, explication: "Recherches sur la nature et les causes de la richesse des nations." },
      { q: "Chez Smith, la division du travail est limitée par :", choix: ["La quantité d'or", "L'étendue du marché", "Le nombre d'usines", "Les droits de douane uniquement"], bonne: 1, explication: "Plus le marché est vaste, plus on peut se spécialiser." },
      { q: "Un pays a un avantage absolu dans un bien s'il :", choix: ["L'exporte le plus", "Le produit avec moins de travail que les autres pays", "Le consomme le plus", "Le protège par un droit de douane"], bonne: 1, explication: "Son coût de production est le plus faible." },
      { q: "Maroc : 10 h par tonne de tomates ; Espagne : 20 h. Qui a l'avantage absolu pour les tomates ?", choix: ["L'Espagne", "Le Maroc", "Aucun", "Les deux"], bonne: 1, explication: "Moins d'heures par unité = plus productif." },
      { q: "Pour les mercantilistes, le commerce international est :", choix: ["Un jeu à somme positive", "Un jeu à somme nulle", "Sans effet sur la richesse", "Toujours favorable aux deux pays"], bonne: 1, explication: "Ce qu'un pays gagne, l'autre le perd." },
      { q: "La principale limite de l'avantage absolu est :", choix: ["Elle ignore la monnaie", "Elle exclut de l'échange le pays sans aucun avantage absolu", "Elle suppose des droits de douane", "Elle ne concerne que l'agriculture"], bonne: 1, explication: "Ricardo résout ce problème avec l'avantage comparatif." },
      { q: "La formule « laissez faire, laissez passer » est associée :", choix: ["Aux mercantilistes", "Aux physiocrates", "À Colbert", "À Keynes"], bonne: 1, explication: "Elle exprime le refus des entraves au commerce." },
    ],
  },

  2: {
    titre: "L'avantage comparatif de David Ricardo",
    description: "Loi des avantages comparatifs de Ricardo, exemple drap et vin, coûts d'opportunité, frontière de production, termes de l'échange, demande réciproque de Mill.",
    resume: md`
## L'essentiel — L'avantage comparatif de Ricardo

- Contexte : les **lois sur les blés** anglaises ; Ricardo, *Principes de l'économie politique et de l'impôt* (**1817**) ; abolition des Corn Laws en 1846.
- Exemple : Portugal (drap 90, vin 80) plus productif dans les deux biens que l'Angleterre (drap 100, vin 120) ; le Portugal se spécialise dans le **vin**, l'Angleterre dans le **drap**.
- **Avantage comparatif** : coût d'opportunité plus faible ; on compare des **rapports** $a_1/a_2$, pas des coûts absolus.
- Tout pays a un avantage comparatif, même sans aucun avantage absolu ; tous gagnent à l'échange (économie de travail).
- FPP linéaire : $a_D Q_D + a_V Q_V = L$ ; prix relatif d'autarcie $= a_D / a_V$.
- **Termes de l'échange** mutuellement avantageux : entre les coûts relatifs d'autarcie.
- **J. S. Mill (1848)**, demande réciproque : les termes de l'échange dépendent de l'intensité des demandes ; le pays dont le produit est très demandé capte le gain.
- Hypothèses : travail seul facteur, coûts constants, immobilité internationale du travail, concurrence parfaite.
- Limites : spécialisation complète irréaliste, origine des productivités non expliquée, perdants internes, risque de dépendance ; test favorable de MacDougall (1951).
`,
    exercices: md`
### Exercice 2 — Avantage comparatif et salaires

Deux pays produisent des chaussures et des logiciels (heures par unité) :

| Heures par unité | Chaussures | Logiciels |
|---|---:|---:|
| Pays H | 2 | 4 |
| Pays F | 6 | 24 |

1. Déterminez les avantages comparatifs.
2. Le pays F peut-il exporter alors que sa productivité est plus faible partout ? Expliquez par les salaires : sachant qu'une paire de chaussures se vend 120 DH sur le marché mondial et un logiciel 360 DH, calculez le salaire horaire maximal compatible avec la production de chaque bien dans chaque pays.

<details><summary>Voir le corrigé</summary>

**1)** Coût d'une paire de chaussures en logiciels : H : $2 / 4 = 0{,}5$ ; F : $6 / 24 = 0{,}25$. F a l'**avantage comparatif dans les chaussures**, H dans les **logiciels** (coût d'un logiciel : H $4/2 = 2$ paires ; F $24/6 = 4$ paires).

**2)** Salaire horaire maximal $=$ prix / heures par unité :
- pays H : chaussures $120 / 2 = 60$ DH ; logiciels $360 / 4 = 90$ DH. Avec un salaire supérieur à 60 DH, H ne produit que des logiciels ;
- pays F : chaussures $120 / 6 = 20$ DH ; logiciels $360 / 24 = 15$ DH.

Si le salaire de H se fixe entre 60 et 90 DH et celui de F entre 15 et 20 DH, H ne produit que des logiciels et F que des chaussures. Le pays moins productif reste compétitif dans son bien parce que ses **salaires sont plus bas**, en proportion de sa productivité plus faible : c'est le mécanisme qui permet à l'avantage comparatif de se traduire en prix de marché.

</details>

### Exercice 3 — Termes de l'échange et partage du gain

Reprenez l'exercice du cours (Maroc : 60 h par tonne d'agrumes et 160 h par équipement ; France : 30 h et 40 h). Le Maroc exporte 40 t d'agrumes.

1. Calculez la consommation d'équipements du Maroc si le rapport d'échange est de 1 équipement contre 1,6 t, puis contre 2,5 t.
2. Dans quel cas le Maroc gagne-t-il le plus ? Reliez ce résultat à la loi de Mill.

<details><summary>Voir le corrigé</summary>

**1)** Au rapport 1,6 : $40 / 1{,}6 = \mathbf{25}$ équipements (gain de 10 par rapport aux 15 d'autarcie). Au rapport 2,5 : $40 / 2{,}5 = \mathbf{16}$ équipements (gain de 1 seulement).

**2)** Le Maroc gagne le plus quand les termes de l'échange sont proches du coût d'autarcie **de la France** (1,33 t) et loin du sien (2,67 t). Selon Mill, cela arrive quand la demande française d'agrumes est forte par rapport à la demande marocaine d'équipements : le partage du gain dépend de l'intensité des demandes réciproques.

</details>
`,
    qcm: [
      { q: "Ricardo expose la théorie des avantages comparatifs en :", choix: ["1776", "1817", "1848", "1919"], bonne: 1, explication: "Dans Des principes de l'économie politique et de l'impôt." },
      { q: "Dans l'exemple de Ricardo, le Portugal se spécialise dans :", choix: ["Le drap", "Le vin", "Les deux biens", "Aucun bien"], bonne: 1, explication: "Son avantage est le plus grand dans le vin (80 contre 120)." },
      { q: "Un pays a un avantage comparatif dans un bien si :", choix: ["Il le produit avec moins d'heures que son partenaire", "Son coût d'opportunité y est plus faible que chez son partenaire", "Il l'exporte déjà", "Il le protège par un droit de douane"], bonne: 1, explication: "On compare des coûts relatifs." },
      { q: "Maroc : agrumes 60 h, équipements 160 h. Le coût d'opportunité d'une tonne d'agrumes est :", choix: ["2,67 équipements", "0,375 équipement", "100 heures", "1,33 équipement"], bonne: 1, explication: "60 / 160 = 0,375." },
      { q: "Les termes de l'échange mutuellement avantageux se situent :", choix: ["Au niveau du coût le plus bas", "Entre les coûts relatifs d'autarcie des deux pays", "Au-dessus des deux coûts relatifs", "À un niveau fixé par l'OMC"], bonne: 1, explication: "Hors de cet intervalle, un pays préférerait produire lui-même." },
      { q: "La loi de la demande réciproque est due à :", choix: ["Adam Smith", "John Stuart Mill", "Bertil Ohlin", "Paul Krugman"], bonne: 1, explication: "Principes d'économie politique, 1848." },
      { q: "Dans le modèle ricardien, le seul facteur de production est :", choix: ["Le capital", "La terre", "Le travail", "La technologie"], bonne: 2, explication: "Avec une productivité constante." },
      { q: "Le modèle de Ricardo prédit en général :", choix: ["Une spécialisation complète", "Une absence de spécialisation", "Une spécialisation partielle", "Un commerce intra-branche"], bonne: 0, explication: "C'est une conséquence des coûts constants, rarement observée." },
      { q: "Les lois sur les blés (Corn Laws) taxaient :", choix: ["Les exportations de drap", "Les importations de céréales en Angleterre", "Le vin portugais", "Les métaux précieux"], bonne: 1, explication: "Elles ont été abolies en 1846." },
      { q: "Un pays moins productif dans tous les biens peut exporter car :", choix: ["Il triche sur les prix", "Ses salaires sont plus bas, en proportion de sa productivité", "Il est subventionné par l'OMC", "Il dévalue chaque année"], bonne: 1, explication: "Les salaires traduisent l'avantage comparatif en prix compétitifs." },
    ],
  },

  3: {
    titre: "Le modèle Heckscher-Ohlin-Samuelson",
    description: "Modèle HOS : dotations et intensités factorielles, théorème Heckscher-Ohlin, Stolper-Samuelson, égalisation des prix des facteurs et Rybczynski, avec exercice.",
    resume: md`
## L'essentiel — Le modèle Heckscher-Ohlin-Samuelson

- **Heckscher (1919), Ohlin (1933), Samuelson** : l'avantage comparatif vient des **dotations factorielles**, à technologies identiques.
- Hypothèses : 2 pays, 2 biens, 2 facteurs ; facteurs immobiles entre pays ; concurrence parfaite, rendements constants, mêmes préférences.
- **Abondance factorielle** : rapport $K/L$ du pays comparé à celui du partenaire (toujours relatif).
- **Intensité factorielle** : rapport $K/L$ utilisé pour produire le bien.
- **Théorème HO** : un pays exporte le bien intensif en son facteur abondant ; le commerce de biens est un **échange indirect de facteurs**.
- **Stolper-Samuelson (1941)** : la hausse du prix d'un bien augmente la rémunération réelle du facteur qu'il utilise intensivement ; l'ouverture profite au facteur **abondant** et nuit au facteur **rare**.
- **Égalisation des prix des facteurs (Samuelson, 1948)** : le libre-échange des biens tend à égaliser salaires et rendements du capital ; très partielle dans les faits.
- **Rybczynski (1955)** : à prix constants, la hausse d'une dotation augmente plus que proportionnellement la production du bien qui l'utilise intensivement et réduit l'autre ; lien avec le syndrome hollandais.
`,
    exercices: md`
### Exercice 2 — Identifier l'abondance factorielle

| Pays | Capital (milliards d'USD) | Travailleurs (millions) |
|---|---:|---:|
| Pays X | 4 000 | 80 |
| Pays Y | 1 200 | 12 |

1. Quel pays a le plus de travailleurs ? Quel pays est abondant en travail ?
2. Quel bien chaque pays devrait-il exporter entre l'électronique grand public assemblée (intensive en travail) et les équipements industriels (intensifs en capital) ?

<details><summary>Voir le corrigé</summary>

**1)** X a plus de travailleurs (80 millions contre 12). Mais $K/L$ : X : $4\,000 / 80 = 50$ ; Y : $1\,200 / 12 = 100$. X a le rapport capital/travail le plus faible : il est **abondant en travail**, même s'il possède aussi plus de capital en valeur absolue.

**2)** X exporte l'**électronique assemblée** (intensive en travail) ; Y exporte les **équipements industriels** (intensifs en capital).

</details>

### Exercice 3 — Question de réflexion

**Sujet** : « Le libre-échange fait-il des perdants ? » Répondez à l'aide du modèle HOS.

<details><summary>Voir le corrigé</summary>

**Introduction** : le modèle HOS confirme que chaque nation gagne à l'échange ; mais il analyse aussi la répartition des gains entre facteurs. Problématique : un gain collectif peut-il cacher des pertes individuelles ?

**I. Un gain global pour chaque nation**
- A. Spécialisation selon les dotations (théorème HO), échange indirect de facteurs.
- B. Hausse de la production et de la consommation ; tendance à l'égalisation des rémunérations entre pays.

**II. Mais des perdants à l'intérieur de chaque pays**
- A. Stolper-Samuelson : le facteur rare perd en termes réels (travail peu qualifié dans les pays riches, capital ou terre dans certains pays du Sud).
- B. Ces pertes nourrissent les demandes de protection ; à court terme, les travailleurs des secteurs concurrencés subissent chômage et reconversion.

**III. Comment concilier efficacité et équité ?**
- A. Les gagnants gagnent plus que ce que perdent les perdants : la compensation est possible (fiscalité, aides à la reconversion, formation).
- B. Sans compensation, l'ouverture perd son soutien politique.

**Conclusion** : le libre-échange enrichit la nation mais redistribue les revenus ; d'où l'importance des politiques d'accompagnement.

</details>
`,
    qcm: [
      { q: "Dans le modèle HOS, l'avantage comparatif provient :", choix: ["Des différences de technologie", "Des différences de dotations factorielles", "Des économies d'échelle", "Des préférences des consommateurs"], bonne: 1, explication: "Les technologies sont supposées identiques." },
      { q: "Un pays est abondant en capital si :", choix: ["Il possède beaucoup de machines en valeur absolue", "Son rapport K/L est plus élevé que celui de son partenaire", "Il exporte des capitaux", "Son taux d'intérêt est élevé"], bonne: 1, explication: "L'abondance est toujours relative." },
      { q: "Selon le théorème HO, un pays abondant en travail exporte :", choix: ["Des biens intensifs en capital", "Des biens intensifs en travail", "Des capitaux", "Des services financiers"], bonne: 1, explication: "Il utilise intensivement son facteur abondant." },
      { q: "Le théorème Stolper-Samuelson concerne :", choix: ["La spécialisation", "L'effet des prix des biens sur la rémunération des facteurs", "Les économies d'échelle", "Les termes de l'échange"], bonne: 1, explication: "L'ouverture profite au facteur abondant et nuit au facteur rare." },
      { q: "Le théorème de Rybczynski analyse l'effet :", choix: ["D'un droit de douane", "D'une variation de dotation factorielle à prix constants", "D'une dévaluation", "D'une hausse de la demande"], bonne: 1, explication: "La production du bien intensif dans ce facteur augmente plus que proportionnellement." },
      { q: "Selon le modèle HOS, le commerce de biens est :", choix: ["Un échange indirect de facteurs", "Un jeu à somme nulle", "Une forme de protectionnisme", "Indépendant des facteurs"], bonne: 0, explication: "Les biens incorporent les facteurs qui, eux, ne circulent pas." },
      { q: "L'égalisation des prix des facteurs a été démontrée par :", choix: ["Ricardo", "Samuelson", "Leontief", "Vernon"], bonne: 1, explication: "En 1948, sous les hypothèses strictes du modèle." },
      { q: "Pays X : K/L = 50 ; pays Y : K/L = 100. Le pays abondant en travail est :", choix: ["Y", "X", "Les deux", "Aucun"], bonne: 1, explication: "Il a le rapport capital/travail le plus faible." },
      { q: "Dans un pays riche en capital, l'ouverture tend à pénaliser :", choix: ["Les détenteurs de capital", "Les travailleurs peu qualifiés", "Les exportateurs", "Les consommateurs"], bonne: 1, explication: "Le travail y est le facteur rare." },
      { q: "Bertil Ohlin a publié son ouvrage principal en :", choix: ["1817", "1919", "1933", "1953"], bonne: 2, explication: "Interregional and International Trade ; Heckscher avait publié son article en 1919." },
    ],
  },

  4: {
    titre: "Le paradoxe de Leontief et les théories technologiques",
    description: "Paradoxe de Leontief, capital humain, écart technologique de Posner, cycle de vie du produit de Vernon et demande représentative de Linder, avec exercices.",
    resume: md`
## L'essentiel — Leontief et les théories technologiques

- **Leontief (1953)**, données américaines de 1947, tableau entrées-sorties : les substituts aux importations sont environ **30 % plus intensifs en capital** que les exportations ; c'est le **paradoxe** pour le pays le plus riche en capital.
- Explications : productivité du travail américain, **capital humain** (Kenen, Keesing), ressources naturelles (Vanek), protection, renversement des intensités.
- Approche **néo-factorielle** : distinguer travail qualifié et non qualifié ; les pays riches exportent des biens intensifs en travail qualifié et en recherche.
- **Posner (1961)** : l'innovation donne un monopole temporaire d'exportation ; écart technologique = délai d'imitation − délai de demande.
- **Vernon (1966)**, cycle de vie du produit : lancement, croissance (l'innovateur exporte), maturité (IDE), déclin (délocalisation, l'innovateur importe).
- **Linder (1961)** : la **demande représentative** du marché national oriente la production ; le commerce de produits manufacturés est le plus intense entre pays de revenus proches (chevauchement des demandes).
- Test de MacDougall et autres travaux : les théories se complètent plus qu'elles ne s'excluent ; chaque modèle éclaire une partie du commerce.
- Ces théories supposent des technologies **différentes** et expliquent le commerce entre pays riches et l'inversion des flux dans le temps.
`,
    exercices: md`
### Exercice 2 — Le délai d'imitation

Un laboratoire pharmaceutique d'un pays A met au point un médicament. Les consommateurs des autres pays l'adoptent au bout de 2 ans ; les laboratoires étrangers savent le fabriquer (à l'expiration des droits ou par une technologie équivalente) au bout de 7 ans.

1. Pendant combien d'années le pays A exporte-t-il ce médicament selon Posner ?
2. Quelles politiques peuvent allonger cette période ? Lesquelles la raccourcissent ?

<details><summary>Voir le corrigé</summary>

**1)** Le pays A exporte entre l'apparition de la demande étrangère (année 2) et l'imitation (année 7), soit environ **5 ans** : écart technologique = délai d'imitation (7) − délai de demande (2).

**2)** L'allongent : la protection par les **brevets** (accord ADPIC de l'OMC), le secret industriel, un effort continu de recherche qui garde une génération d'avance, la promotion commerciale rapide qui réduit le délai de demande. La raccourcissent : la capacité d'imitation des concurrents (ingénieurs formés, rétro-ingénierie), les licences obligatoires et la production de génériques après expiration des brevets.

</details>

### Exercice 3 — Linder et le commerce entre pays semblables

Le tableau donne la part du commerce de produits manufacturés d'un pays riche réalisée avec trois groupes de partenaires :

| Partenaires | Revenu par habitant relatif | Part du commerce manufacturier |
|---|---:|---:|
| Pays riches | Proche | 65 % |
| Pays émergents | Moyen | 28 % |
| Pays à faible revenu | Très inférieur | 7 % |

1. Ces données confirment-elles la thèse de Linder ? Pourquoi ?
2. Le modèle HO permet-il d'expliquer ce résultat ?

<details><summary>Voir le corrigé</summary>

**1)** Oui : l'essentiel du commerce manufacturier se fait avec des pays de revenu proche. Selon Linder, les entreprises conçoivent leurs produits pour leur marché intérieur et les exportent vers les pays dont la demande se **chevauche** avec celle de leur pays (goûts, gammes, pouvoir d'achat semblables).

**2)** Non, ou mal : le modèle HO prédit un commerce intense entre pays aux **dotations différentes** (riches en capital contre riches en travail), donc surtout entre pays riches et pays pauvres. Le commerce entre pays semblables, souvent de produits similaires, appelle les explications par la demande (Linder) et par les économies d'échelle et la différenciation (nouvelles théories, chapitre 5).

</details>
`,
    qcm: [
      { q: "Leontief a testé le modèle HO sur les données :", choix: ["Britanniques de 1913", "Américaines de 1947", "Japonaises de 1970", "Européennes de 1990"], bonne: 1, explication: "Résultats publiés en 1953." },
      { q: "Le paradoxe de Leontief montre que les États-Unis semblaient exporter des biens :", choix: ["Intensifs en capital", "Relativement intensifs en travail", "Intensifs en terre", "Sans travail"], bonne: 1, explication: "Leurs substituts aux importations étaient environ 30 % plus intensifs en capital." },
      { q: "L'outil utilisé par Leontief est :", choix: ["La régression multiple", "Le tableau entrées-sorties", "La balance des paiements", "Le modèle de gravité"], bonne: 1, explication: "Il permet de mesurer les besoins directs et indirects en facteurs." },
      { q: "L'explication du paradoxe par le capital humain est associée à :", choix: ["Vernon", "Kenen et Keesing", "Mill", "Hume"], bonne: 1, explication: "Les exportations américaines incorporent du travail qualifié." },
      { q: "Selon Posner, le pays innovateur exporte tant que :", choix: ["Le délai d'imitation dépasse le délai de demande", "Ses salaires sont bas", "Son taux de change est fixe", "Il est abondant en travail"], bonne: 0, explication: "C'est l'écart technologique." },
      { q: "Dans la phase de déclin du cycle de vie de Vernon, le pays innovateur :", choix: ["Exporte massivement", "Devient importateur du produit", "Lance le produit", "Interdit les importations"], bonne: 1, explication: "La production est délocalisée vers les pays à bas coûts." },
      { q: "La théorie du cycle de vie du produit a été proposée par :", choix: ["Linder", "Vernon", "Posner", "Ohlin"], bonne: 1, explication: "En 1966." },
      { q: "Selon Linder, le commerce de produits manufacturés est le plus intense entre pays :", choix: ["Aux dotations très différentes", "Aux revenus par habitant semblables", "Éloignés géographiquement", "Sans accord commercial"], bonne: 1, explication: "Leurs demandes se chevauchent." },
      { q: "La théorie de Linder part :", choix: ["De l'offre et des dotations", "De la demande représentative", "Des coûts de transport", "Des droits de douane"], bonne: 1, explication: "Le produit est d'abord conçu pour le marché national." },
      { q: "Les théories néo-technologiques remettent en cause l'hypothèse HO de :", choix: ["Concurrence parfaite", "Technologies identiques entre pays", "Mobilité des biens", "Plein emploi"], bonne: 1, explication: "L'avance technologique devient source d'échange." },
    ],
  },

  5: {
    titre: "Les nouvelles théories du commerce international",
    description: "Économies d'échelle, concurrence monopolistique de Krugman, commerce intra-branche et indice de Grubel-Lloyd, firmes hétérogènes de Melitz et modèle de gravité.",
    resume: md`
## L'essentiel — Les nouvelles théories du commerce international

- Faits nouveaux : commerce surtout **entre pays riches**, souvent **intra-branche**, marchés en **concurrence imparfaite**.
- **Économies d'échelle** : $CM = F/q + c$ diminue avec $q$ ; internes (taille de l'entreprise) ou **externes** (taille de la branche dans une zone : districts, écosystèmes).
- Avec économies d'échelle, la spécialisation peut être historique ou arbitraire ; l'avantage comparatif peut être **construit**.
- **Krugman (1979, 1980)**, concurrence monopolistique : variétés différenciées, goût pour la diversité ; gains de **variété** et de **coût** ; commerce intra-branche même entre pays identiques ; prix Nobel 2008.
- **Effet du marché intérieur** et nouvelle économie géographique (1991) : concentration dans les grands marchés.
- **Grubel-Lloyd** : $GL_i = 1 - \frac{|X_i - M_i|}{X_i + M_i}$ ; 0 = inter-branche, 1 = intra-branche ; global pondéré par $X_i + M_i$ ; horizontal ou vertical.
- **Melitz (2003)** : seules les entreprises les plus productives exportent ; l'ouverture sélectionne et réalloue, la productivité moyenne augmente.
- **Gravité (Tinbergen, 1962)** : $T_{ij} = A \, Y_i Y_j / D_{ij}$ ; la taille et la distance expliquent les flux.
`,
    exercices: md`
### Exercice 2 — Gains de l'intégration en concurrence monopolistique

Dans chacun de deux pays identiques, le marché d'un produit différencié représente 10 000 unités par an. Chaque variété est produite par une entreprise dont le coût fixe est de 50 000 DH et le coût variable de 20 DH par unité. En autarcie, il y a 5 entreprises dans chaque pays, qui se partagent également le marché. Après l'ouverture, le marché intégré de 20 000 unités compte 8 entreprises, qui se le partagent également.

1. Calculez la production et le coût moyen d'une entreprise en autarcie.
2. Même question après l'ouverture.
3. Quels sont les deux gains de l'intégration pour les consommateurs ?

<details><summary>Voir le corrigé</summary>

**1)** Production : $10\,000 / 5 = 2\,000$ unités ; coût moyen : $\frac{50\,000}{2\,000} + 20 = \mathbf{45}$ DH.

**2)** Production : $20\,000 / 8 = 2\,500$ unités ; coût moyen : $\frac{50\,000}{2\,500} + 20 = \mathbf{40}$ DH.

**3)** **Gain de variété** : chaque consommateur a accès à 8 variétés au lieu de 5. **Gain de coût et de prix** : les entreprises produisent davantage, leur coût moyen baisse de 45 à 40 DH et la concurrence fait baisser les prix. En contrepartie, 2 des 10 entreprises initiales disparaissent ou fusionnent : l'intégration réorganise la branche.

</details>

### Exercice 3 — Melitz et le soutien aux exportateurs

Trois entreprises marocaines d'une même branche ont des coûts unitaires de 70, 85 et 100 DH. Sur le marché européen, le produit se vend 110 DH ; vendre en Europe exige un coût fixe annuel de 300 000 DH (prospection, certification, logistique). Chaque entreprise peut vendre 10 000 unités en Europe.

1. Quelles entreprises ont intérêt à exporter ?
2. Un programme public réduit le coût fixe d'accès à 120 000 DH. Que change-t-il ?

<details><summary>Voir le corrigé</summary>

**1)** Marge à l'export par entreprise : $(110 - c) \times 10\,000 - 300\,000$.
- $c = 70$ : $400\,000 - 300\,000 = +100\,000$ DH : elle **exporte** ;
- $c = 85$ : $250\,000 - 300\,000 = -50\,000$ DH : elle n'exporte pas ;
- $c = 100$ : $100\,000 - 300\,000 = -200\,000$ DH : elle n'exporte pas.

Seule l'entreprise la plus productive exporte, comme le prévoit Melitz.

**2)** Avec un coût fixe de 120 000 DH : l'entreprise à 85 DH gagne $250\,000 - 120\,000 = +130\,000$ DH et devient **exportatrice** ; celle à 100 DH reste en dessous ($100\,000 - 120\,000 = -20\,000$). Réduire les coûts fixes d'accès élargit la base exportatrice aux entreprises de productivité intermédiaire : c'est la logique de l'accompagnement des PME exportatrices.

</details>
`,
    qcm: [
      { q: "Le commerce intra-branche désigne :", choix: ["L'échange de biens de branches différentes", "L'exportation et l'importation simultanées de produits d'une même branche", "Le commerce entre filiales", "Le commerce de services"], bonne: 1, explication: "Exemple : voitures contre voitures." },
      { q: "Paul Krugman a reçu le prix Nobel d'économie en :", choix: ["1991", "2001", "2008", "2015"], bonne: 2, explication: "Pour ses travaux sur le commerce et la géographie économique." },
      { q: "Avec un coût fixe de 1 000 et un coût variable de 5, le coût moyen pour 200 unités est :", choix: ["5", "10", "15", "200"], bonne: 1, explication: "1 000 / 200 + 5 = 10." },
      { q: "Les économies d'échelle externes dépendent :", choix: ["De la taille de l'entreprise", "De la taille de la branche dans une zone", "Du taux de change", "Des droits de douane"], bonne: 1, explication: "Fournisseurs, main-d'œuvre spécialisée et diffusion des savoirs." },
      { q: "Un indice de Grubel-Lloyd égal à 0 signifie que le commerce de la branche est :", choix: ["Purement intra-branche", "Purement inter-branche", "Équilibré", "Nul"], bonne: 1, explication: "Le pays ne fait qu'exporter ou qu'importer dans cette branche." },
      { q: "Exportations 120, importations 80 : l'indice de Grubel-Lloyd vaut :", choix: ["0,20", "0,40", "0,80", "1,50"], bonne: 2, explication: "1 − 40 / 200 = 0,8." },
      { q: "Dans le modèle de Melitz, les entreprises qui exportent sont :", choix: ["Les plus petites", "Les plus productives", "Les moins rentables", "Toutes les entreprises"], bonne: 1, explication: "Elles seules couvrent le coût fixe d'exportation." },
      { q: "Le modèle de gravité explique le commerce bilatéral par :", choix: ["Les dotations factorielles", "La taille des économies et la distance", "Le taux de change seul", "Les écarts technologiques"], bonne: 1, explication: "Proposé par Tinbergen en 1962." },
      { q: "Le gain de variété signifie que :", choix: ["Les prix augmentent", "Les consommateurs accèdent à davantage de variétés", "Les entreprises sont plus nombreuses dans chaque pays", "Les droits de douane baissent"], bonne: 1, explication: "C'est l'un des deux gains de l'intégration chez Krugman." },
      { q: "L'effet du marché intérieur prédit que les entreprises s'installent :", choix: ["Dans le plus petit marché", "Dans le plus grand marché et exportent vers les petits", "Au hasard", "Là où les droits de douane sont élevés"], bonne: 1, explication: "Pour économiser les coûts de transport." },
    ],
  },

  6: {
    titre: "Les instruments de la politique commerciale",
    description: "Droits de douane, contingents, subventions, obstacles non tarifaires, analyse en surplus, tarif optimal et protection effective de Corden, avec exercices.",
    resume: md`
## L'essentiel — Les instruments de la politique commerciale

- Instruments : droits **ad valorem** ou **spécifiques**, **contingents**, restrictions volontaires, subventions, **obstacles non tarifaires** (normes, procédures), défense commerciale (antidumping, sauvegardes).
- **Petit pays** preneur de prix : le droit $t$ porte le prix intérieur à $P_m + t$.
- Effets : perte des consommateurs $(a + b + c + d)$, gain des producteurs $(a)$, recettes $t \times M$ $(c)$, **perte nette** $= b + d$ (pertes de production et de consommation).
- **Contingent** équivalent : même prix, mêmes pertes, mais la recette devient une **rente contingentaire** ; plus rigide si la demande augmente.
- **Subvention à la production** : soutient les producteurs sans pénaliser les consommateurs ; seule la perte de production subsiste, mais coût budgétaire.
- **Grand pays** : le droit fait baisser le prix mondial, gain de **termes de l'échange** ; **tarif optimal** positif mais non coopératif (représailles).
- Subvention à l'exportation : interdite par l'OMC pour les produits industriels ; elle renchérit aussi le prix intérieur.
- **Protection effective (Corden)** : $TPE = \frac{t_f - a\, t_i}{1 - a}$ ; une structure **en escalade** protège fortement la transformation finale.
`,
    exercices: md`
### Exercice 2 — Subvention à la production ou droit de douane ?

On reprend le marché du cours : $Q_d = 120 - P$, $Q_s = P - 20$, $P_m = 40$. Au lieu d'un droit de douane, l'État verse aux producteurs une subvention de 10 par unité produite.

1. Calculez la production nationale, la consommation et les importations.
2. Calculez la variation du surplus des producteurs, du surplus des consommateurs et le coût budgétaire.
3. Comparez la perte nette avec celle du droit de douane de 10 (perte de 100).

<details><summary>Voir le corrigé</summary>

**1)** Les producteurs reçoivent $40 + 10 = 50$ : $Q_s = 30$. Les consommateurs paient le prix mondial 40 : $Q_d = 80$. Importations : $80 - 30 = \mathbf{50}$.

**2)** $\Delta SP = \frac{(20 + 30)}{2} \times 10 = \mathbf{+250}$ ; $\Delta SC = \mathbf{0}$ ; coût budgétaire $= 10 \times 30 = \mathbf{300}$.

**3)** Perte nette $= 250 - 300 = \mathbf{-50}$, soit la seule perte de production (triangle de 50). Elle est deux fois plus faible qu'avec le droit de douane (100), car la consommation n'est pas réduite. Pour le même soutien à la production (30 unités), la subvention est plus efficace ; mais elle doit être financée par l'impôt.

</details>

### Exercice 3 — Escalade tarifaire et protection effective

Une confiserie produit des bonbons dont le prix mondial est de 50 DH le kilo ; le sucre et les autres intrants représentent 30 DH par kilo.

1. Calculez le taux de protection effective si le droit est de 20 % sur les bonbons et de 2,5 % sur les intrants.
2. Même question si le droit sur les intrants est porté à 40 %.
3. Commentez.

<details><summary>Voir le corrigé</summary>

$a = 30 / 50 = 0{,}6$.

**1)** $TPE = \frac{0{,}20 - 0{,}6 \times 0{,}025}{0{,}4} = \frac{0{,}185}{0{,}4} = \mathbf{46{,}25\,\%}$.

**2)** $TPE = \frac{0{,}20 - 0{,}6 \times 0{,}40}{0{,}4} = \frac{-0{,}04}{0{,}4} = \mathbf{-10\,\%}$.

**3)** Avec une structure en escalade (intrants peu taxés), la protection effective de la transformation est plus du double de la protection nominale. Si les intrants sont plus taxés que le produit fini, la protection effective devient **négative** : le tarif pénalise les producteurs nationaux par rapport aux importations de produits finis. Le niveau des droits sur les intrants est donc décisif pour la compétitivité des industries de transformation.

</details>
`,
    qcm: [
      { q: "Un droit de douane ad valorem est :", choix: ["Un montant fixe par unité", "Un pourcentage de la valeur en douane", "Une limite de quantité", "Une subvention"], bonne: 1, explication: "Le droit spécifique est un montant par unité physique." },
      { q: "Dans un petit pays, un droit de douane :", choix: ["Fait baisser le prix mondial", "Élève le prix intérieur du montant du droit", "N'a aucun effet sur les prix", "Améliore les termes de l'échange"], bonne: 1, explication: "Le pays est preneur de prix." },
      { q: "La perte nette d'un droit de douane dans un petit pays correspond :", choix: ["Aux recettes douanières", "Aux pertes de production et de consommation", "Au gain des producteurs", "Aux importations"], bonne: 1, explication: "Les deux triangles b et d." },
      { q: "Avec Qd = 120 − P, Qs = P − 20 et P = 50, les importations sont :", choix: ["20", "40", "60", "70"], bonne: 1, explication: "70 − 30 = 40." },
      { q: "Avec un contingent, l'équivalent des recettes douanières devient :", choix: ["Une perte sèche", "Une rente pour les détenteurs de licences", "Un gain des consommateurs", "Une recette de l'État dans tous les cas"], bonne: 1, explication: "Sauf si l'État vend les licences aux enchères." },
      { q: "Par rapport au droit de douane, la subvention à la production évite :", choix: ["La perte de production", "La perte de consommation", "Tout coût", "Le soutien aux producteurs"], bonne: 1, explication: "Les consommateurs paient toujours le prix mondial." },
      { q: "Un grand pays peut gagner à un droit de douane grâce :", choix: ["À la hausse des importations", "À l'amélioration de ses termes de l'échange", "À la hausse du prix mondial", "À la baisse de sa production"], bonne: 1, explication: "Sa demande réduite fait baisser le prix mondial." },
      { q: "La formule de la protection effective est due à :", choix: ["Ricardo", "Corden", "Krugman", "List"], bonne: 1, explication: "TPE = (tf − a ti) / (1 − a)." },
      { q: "tf = 25 %, ti = 10 %, a = 0,6 : le taux de protection effective vaut :", choix: ["25 %", "15 %", "47,5 %", "60 %"], bonne: 2, explication: "(0,25 − 0,06) / 0,4 = 0,475." },
      { q: "Une structure tarifaire en escalade :", choix: ["Taxe plus les matières premières que les produits finis", "Taxe plus les produits finis que les intrants", "Applique le même taux à tous les produits", "Supprime tous les droits"], bonne: 1, explication: "Elle accorde une forte protection effective à la transformation." },
    ],
  },

  7: {
    titre: "Libre-échange ou protectionnisme ?",
    description: "Arguments du libre-échange, protectionnisme éducateur de List, dégradation des termes de l'échange de Prebisch-Singer, ISI, politique commerciale stratégique.",
    resume: md`
## L'essentiel — Libre-échange ou protectionnisme ?

- Pour le libre-échange : gains de spécialisation, économies d'échelle et variété, sélection des entreprises, baisse des prix, coût de la protection (pertes nettes, rentes, représailles), « doux commerce » (Montesquieu).
- **List (1841)**, après Hamilton (1791) : **protectionnisme éducateur** des industries naissantes, temporaire, ciblé et dégressif ; critères de Mill et de Bastable ; risque d'une protection permanente.
- **Prebisch-Singer (1950)** : dégradation des termes de l'échange des exportateurs de produits primaires (faible élasticité-revenu, rigidités au centre) ; inspiration de la CNUCED (1964).
- $TE = \frac{P_X}{P_M} \times 100$ ; termes de l'échange revenu $= TE \times$ indice du volume exporté.
- **ISI** (Amérique latine, Maroc des années 1960-1970) contre **promotion des exportations** (dragons asiatiques) : protection sélective et discipline de l'exportation.
- **Brander-Spencer** : en concurrence imparfaite, une subvention peut transférer une rente (Airbus-Boeing) ; limites : information, représailles, lobbies.
- Nouveaux motifs : souveraineté, environnement (**MACF** européen, phase définitive au 1er janvier 2026), normes sociales, guerres commerciales.
- Maroc : ISI, puis PAS et GATT (1987), ALE et stratégies d'exportation, recherche de substitution aux importations depuis 2020.
`,
    exercices: md`
### Exercice 2 — Industrie naissante : faut-il protéger ?

Une industrie naissante de panneaux solaires coûte à la collectivité 200 millions de DH par an de protection pendant 5 ans (pertes de surplus des consommateurs). Ensuite, devenue compétitive, elle rapporte un gain net de 150 millions de DH par an pendant 10 ans. Le taux d'actualisation est de 6 %.

1. Calculez la valeur actuelle du coût de la protection.
2. Calculez la valeur actuelle des gains (de l'année 6 à l'année 15).
3. Le critère de Bastable est-il satisfait ?

<details><summary>Voir le corrigé</summary>

**1)** Coût actualisé : $200 \times \frac{1 - 1{,}06^{-5}}{0{,}06} \approx 200 \times 4{,}2124 \approx \mathbf{842{,}5}$ millions de DH.

**2)** Gains actualisés : $150 \times \frac{1 - 1{,}06^{-10}}{0{,}06} \times 1{,}06^{-5} \approx 150 \times 7{,}3601 \times 0{,}7473 \approx \mathbf{825{,}0}$ millions de DH.

**3)** $825{,}0 < 842{,}5$ : les gains futurs actualisés ne couvrent pas tout à fait le coût de la protection. Le critère de Bastable n'est **pas satisfait** : sauf effets externes non comptés (formation d'ingénieurs, diffusion de technologies, sécurité énergétique), la protection n'est pas justifiée sous cette forme. Le critère de Mill (devenir compétitif en temps limité) est rempli, mais il ne suffit pas.

</details>

### Exercice 3 — Question de synthèse

**Sujet** : « Le protectionnisme peut-il favoriser le développement ? »

<details><summary>Voir le corrigé</summary>

**Introduction** : définir le protectionnisme et le développement ; rappeler que la théorie standard recommande le libre-échange ; problématique : la protection peut-elle être un outil transitoire de développement ?

**I. Oui, sous certaines conditions**
- A. L'argument de l'industrie naissante (List) : apprendre, atteindre l'échelle, former la main-d'œuvre.
- B. Échapper à la spécialisation primaire et à la dégradation des termes de l'échange (Prebisch-Singer).
- C. Les expériences asiatiques : protection sélective et temporaire, conditionnée à l'exportation.

**II. Mais la protection comporte de grands risques**
- A. Les échecs de l'ISI : marchés étroits, inefficacité, rentes, crises de la dette des années 1980.
- B. La protection tend à devenir permanente sous la pression des lobbies.
- C. Les représailles et les règles de l'OMC limitent les marges de manœuvre ; les chaînes de valeur mondiales exigent des importations d'intrants à bas coût.

**Conclusion** : la protection ne développe que si elle est temporaire, ciblée et associée à une discipline de compétitivité ; l'expérience marocaine, de l'ISI aux écosystèmes exportateurs, illustre ce passage.

</details>
`,
    qcm: [
      { q: "Le protectionnisme éducateur est associé à :", choix: ["Adam Smith", "Friedrich List", "David Ricardo", "Paul Krugman"], bonne: 1, explication: "Système national d'économie politique, 1841." },
      { q: "Selon List, la protection doit être :", choix: ["Permanente et générale", "Temporaire, ciblée et dégressive", "Réservée à l'agriculture", "Interdite"], bonne: 1, explication: "Le libre-échange est un point d'arrivée." },
      { q: "La thèse de Prebisch-Singer porte sur :", choix: ["La hausse des salaires au Sud", "La dégradation des termes de l'échange des exportateurs de produits primaires", "Les économies d'échelle", "Les taux de change fixes"], bonne: 1, explication: "Formulée en 1950." },
      { q: "Prix à l'exportation 80, prix à l'importation 110 : l'indice des termes de l'échange vaut environ :", choix: ["137,5", "72,7", "30", "88"], bonne: 1, explication: "80 / 110 x 100 ≈ 72,7." },
      { q: "L'industrialisation par substitution aux importations consiste à :", choix: ["Exporter des produits primaires", "Protéger le marché intérieur pour y produire les biens importés", "Supprimer les droits de douane", "Attirer des IDE exportateurs"], bonne: 1, explication: "Stratégie suivie par l'Amérique latine et le Maroc des années 1960-1970." },
      { q: "La politique commerciale stratégique a été formalisée par :", choix: ["Brander et Spencer", "Heckscher et Ohlin", "Grubel et Lloyd", "Stolper et Samuelson"], bonne: 0, explication: "Dans les années 1980, en concurrence imparfaite." },
      { q: "Dans le jeu Airbus-Boeing, la subvention européenne :", choix: ["Fait produire les deux firmes", "Rend la production d'Airbus dominante et dissuade Boeing", "Fait sortir Airbus", "N'a aucun effet"], bonne: 1, explication: "L'Europe capte la rente du marché." },
      { q: "Le MACF européen taxe les importations selon :", choix: ["Leur origine géographique", "Leur contenu en carbone", "Leur prix", "Leur poids"], bonne: 1, explication: "Mécanisme d'ajustement carbone aux frontières." },
      { q: "Les dragons asiatiques ont combiné :", choix: ["Libre-échange total et absence d'État", "Protection sélective et discipline de l'exportation", "Fermeture totale et autarcie", "ISI sans exportations"], bonne: 1, explication: "Les aides étaient conditionnées aux résultats à l'exportation." },
      { q: "Le critère de Bastable exige que :", choix: ["L'industrie devienne compétitive rapidement", "Les gains futurs compensent le coût de la protection", "La protection soit permanente", "L'OMC autorise la mesure"], bonne: 1, explication: "Le critère de Mill porte sur la capacité à devenir compétitif." },
    ],
  },
};

export default chapitres;
