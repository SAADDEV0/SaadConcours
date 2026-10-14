// Comptabilité nationale (S5) — compléments par chapitre : description SEO, résumé, exercices 2 et 3, QCM.
const md = String.raw;

const chapitres = {
  1: {
    titre: "Objet, cadre et unités de la comptabilité nationale",
    description: "Comptabilité nationale : SCN 2008, comptes du HCP en base 2014, territoire économique, résidence, secteurs institutionnels et branches, exercices corrigés.",
    resume: md`
## L'essentiel — Cadre et unités

- Comptabilité nationale : synthèse chiffrée, cohérente et normalisée de l'économie d'un pays sur une période.
- Cadre international : **SCN 2008** ; au Maroc, comptes établis par le **HCP**, en **base 2014** depuis 2022 (base 2007 auparavant).
- Principes : quadruple entrée, **droits constatés**, prix courants, ressources / emplois / soldes.
- **Résident** : centre d'intérêt économique sur le territoire depuis au moins un an ; indépendant de la nationalité.
- Non-résidents : **reste du monde** (MRE installés à l'étranger, touristes, ambassades étrangères).
- Secteurs institutionnels : **SNF**, **SF**, **APU** (État, collectivités, sécurité sociale), **ménages** (dont entrepreneurs individuels), **ISBLSM**.
- **Branche** : unités produisant le même produit (analyse de la production) ; **secteur** : unités de même fonction (analyse des revenus et du financement).
- Production marchande : prix couvrant plus de la moitié des coûts ; entreprise publique marchande = société, pas APU.
`,
    exercices: md`
### Exercice 2 — Résident ou non ?

Pour chaque cas, dites si l'unité est résidente au Maroc et justifiez :
1. Une usine de câblage automobile installée dans une zone d'accélération industrielle de Kénitra, filiale d'un groupe japonais.
2. L'ambassade d'un pays européen à Rabat.
3. Un étudiant sénégalais inscrit pour trois ans dans une université marocaine.
4. Une ouvrière marocaine partie huit mois en Espagne pour la cueillette des fraises.
5. Un navire de pêche d'un armateur d'Agadir qui opère dans les eaux internationales.

<details><summary>Voir le corrigé</summary>

1. **Résidente** : les zones franches et zones d'accélération industrielle font partie du territoire économique ; la nationalité du capital est sans importance.
2. **Non résidente** : les ambassades étrangères sont des enclaves extraterritoriales, rattachées au pays qu'elles représentent.
3. **Non résident** : par convention, le SCN considère que les étudiants restent résidents de leur pays d'origine, quelle que soit la durée de leurs études. Ses dépenses au Maroc sont des exportations de services.
4. **Résidente** : son séjour à l'étranger dure moins d'un an, son centre d'intérêt reste au Maroc. Son salaire espagnol est une rémunération reçue du reste du monde.
5. **Résident** : l'armateur a son centre d'intérêt au Maroc ; le lieu physique de l'activité n'est pas déterminant.

</details>

### Exercice 3 — Secteur et branches

Un groupe marocain, constitué en société anonyme, exploite une cimenterie (production de 900 millions de DH), une centrale à béton (300 millions de DH) et une flotte de camions qui livre aussi d'autres clients (100 millions de DH).

1. À quel secteur institutionnel appartient le groupe ?
2. Comment sa production est-elle répartie entre les branches ?
3. Pourquoi la comptabilité nationale a-t-elle besoin de ces deux découpages ?

<details><summary>Voir le corrigé</summary>

**1)** Société produisant des biens marchands non financiers : **SNF**. Toute sa production (1 300 millions de DH) est comptée dans ce secteur.

**2)** Par établissement : 900 millions de DH dans la branche « ciment », 300 dans la branche « béton et produits en béton », 100 dans la branche « transport routier de marchandises ».

**3)** Le secteur sert à analyser les **décisions** (revenus, épargne, investissement, financement) prises par une unité autonome ; la branche sert à analyser la **production** et les relations techniques entre activités (tableau entrées-sorties). Un même agent peut contribuer à plusieurs branches.

</details>
`,
    qcm: [
      { q: "Au Maroc, les comptes nationaux sont élaborés par :", choix: ["Bank Al-Maghrib", "Le Haut-Commissariat au Plan", "L'Office des changes", "La Direction générale des impôts"], bonne: 1, explication: "Le HCP les établit selon le SCN 2008." },
      { q: "Depuis 2022, les comptes nationaux marocains sont publiés en :", choix: ["Base 1998", "Base 2014", "Base 2007", "Base 2020"], bonne: 1, explication: "La base 2014 a remplacé la base 2007." },
      { q: "Une unité est résidente si :", choix: ["Elle a la nationalité marocaine", "Son centre d'intérêt économique est sur le territoire depuis au moins un an", "Elle paie l'impôt au Maroc", "Elle exporte"], bonne: 1, explication: "La nationalité ne compte pas." },
      { q: "Un Marocain installé en France depuis dix ans est classé :", choix: ["Dans les ménages résidents", "Dans le reste du monde", "Dans les ISBLSM", "Dans les APU"], bonne: 1, explication: "Il est non résident." },
      { q: "Une entreprise publique qui vend sa production au prix du marché appartient :", choix: ["Aux APU", "Aux sociétés non financières", "Aux ménages", "Aux ISBLSM"], bonne: 1, explication: "C'est sa fonction marchande qui compte." },
      { q: "Un artisan individuel sans société appartient au secteur :", choix: ["Des SNF", "Des ménages", "Des SF", "Des ISBLSM"], bonne: 1, explication: "Il dégage un revenu mixte." },
      { q: "La Caisse nationale de sécurité sociale fait partie :", choix: ["Des sociétés financières", "Des administrations publiques", "Des ISBLSM", "Du reste du monde"], bonne: 1, explication: "Administrations de sécurité sociale." },
      { q: "Une branche regroupe des unités de production qui :", choix: ["Ont la même fonction principale", "Fabriquent le même produit", "Ont le même propriétaire", "Sont situées dans la même région"], bonne: 1, explication: "Elle est homogène quant au produit." },
      { q: "Le principe des droits constatés consiste à enregistrer une opération :", choix: ["Au moment du paiement", "Au moment où naît la créance ou la dette", "En fin d'année seulement", "Au moment de l'encaissement"], bonne: 1, explication: "Comme en comptabilité générale." },
      { q: "Les dépenses d'un touriste étranger au Maroc sont :", choix: ["Des importations du Maroc", "Des exportations de services du Maroc", "Des transferts courants", "De la consommation des APU"], bonne: 1, explication: "Un non-résident achète des services à des résidents." },
    ],
  },

  2: {
    titre: "Les opérations de la comptabilité nationale",
    description: "Opérations de la comptabilité nationale : production marchande et non marchande, CI, consommation finale, FBCF, prix de base et d'acquisition, répartition.",
    resume: md`
## L'essentiel — Les opérations

- Trois catégories : **biens et services** (P), **répartition** (D), **financières** (F).
- Production : biens (y compris autoconsommés) et services à autrui ; **loyers imputés** inclus ; services domestiques des ménages exclus.
- Production **non marchande** (APU, ISBLSM) $= CI + $ rémunérations $+ CCF +$ autres impôts sur la production.
- **CI** : biens et services détruits dans la production ; **FBCF** : biens durables (plus d'un an), y compris logements, logiciels, R&D.
- Consommation finale : dépense (qui finance) ou effective (qui consomme ; inclut les transferts sociaux en nature).
- Prix de base + impôts sur produits − subventions = prix producteur ; + marges + TVA non déductible = **prix d'acquisition**.
- Production évaluée au prix de base, emplois au prix d'acquisition ; TVA enregistrée en système **net**.
- Répartition primaire (salaires, impôts sur la production, revenus de la propriété) puis redistribution (impôts sur le revenu, cotisations, prestations, transferts).
- **SIFIM** : production implicite des banques (écart de taux par rapport à un taux de référence).
`,
    exercices: md`
### Exercice 2 — Que compte-t-on dans la production ?

Indiquez si chaque activité est comptée dans la production du Maroc et, si oui, comment elle est évaluée :
1. Un agriculteur du Saïss consomme une partie de sa récolte de légumes.
2. Une famille de Rabat est propriétaire de l'appartement qu'elle occupe.
3. Une mère prépare les repas de sa famille.
4. Une femme de ménage est salariée par un ménage.
5. Une entreprise développe un logiciel de gestion pour son propre usage.

<details><summary>Voir le corrigé</summary>

1. **Oui** : production de biens pour usage final propre, évaluée au prix de marché des légumes ; elle est aussi comptée en consommation finale des ménages.
2. **Oui** : **loyer imputé**, évalué au loyer d'un logement comparable ; il est à la fois une production des ménages (service de logement) et leur consommation.
3. **Non** : service domestique produit et consommé au sein du ménage, exclu de la frontière de la production.
4. **Oui** : service rémunéré, évalué au salaire versé (production du ménage employeur).
5. **Oui** : production pour usage final propre, évaluée aux coûts, et enregistrée en **FBCF** (le logiciel sera utilisé plusieurs années).

</details>

### Exercice 3 — La production d'une banque

Une banque prête 500 millions de DH au taux de 8 % et reçoit 400 millions de DH de dépôts rémunérés à 2 %. Elle facture 6 millions de DH de commissions. Le taux de référence (taux interbancaire) est de 5 %.

1. Calculez les SIFIM sur les crédits et sur les dépôts.
2. Calculez la production de la banque.

<details><summary>Voir le corrigé</summary>

**1)** Crédits : $(8\,\% - 5\,\%) \times 500 = \mathbf{15}$ millions. Dépôts : $(5\,\% - 2\,\%) \times 400 = \mathbf{12}$ millions. SIFIM $= 27$ millions de DH : c'est la valeur du service rendu aux emprunteurs (qui paient plus que le taux de référence) et aux déposants (qui reçoivent moins).

**2)** Production $= 27 + 6 = \mathbf{33}$ millions de DH (SIFIM + services facturés).

</details>
`,
    qcm: [
      { q: "Les opérations sur biens et services décrivent :", choix: ["Le financement des agents", "La production et l'utilisation des biens et services", "Les transferts sociaux", "Les variations de patrimoine"], bonne: 1, explication: "Code P dans le SCN." },
      { q: "La production non marchande des APU est évaluée :", choix: ["Au prix de vente", "À la somme de ses coûts", "À zéro", "Au prix de marché d'un service privé"], bonne: 1, explication: "CI + rémunérations + CCF + autres impôts sur la production." },
      { q: "L'achat d'un camion par une entreprise de transport est :", choix: ["Une consommation intermédiaire", "Une formation brute de capital fixe", "Une consommation finale", "Une variation de stocks"], bonne: 1, explication: "Bien durable utilisé dans la production." },
      { q: "L'achat d'un logement neuf par un ménage est enregistré en :", choix: ["Consommation finale", "FBCF des ménages", "Consommation intermédiaire", "Transfert en capital"], bonne: 1, explication: "Le logement est un actif fixe." },
      { q: "Le prix d'acquisition est égal au prix producteur augmenté :", choix: ["Des subventions", "Des marges de commerce et de transport et de la TVA non déductible", "Des salaires", "Des dividendes"], bonne: 1, explication: "C'est le prix payé par l'acheteur." },
      { q: "La production marchande des branches est évaluée :", choix: ["Au prix d'acquisition", "Au prix de base", "Aux coûts", "TVA comprise"], bonne: 1, explication: "C'est ce que garde le producteur." },
      { q: "Les loyers imputés correspondent :", choix: ["Aux loyers payés par les locataires", "Au service de logement que se rendent les propriétaires occupants", "Aux loyers des terrains", "Aux loyers des bureaux des APU"], bonne: 1, explication: "Ils sont inclus dans la production." },
      { q: "La consommation finale effective des ménages inclut :", choix: ["Uniquement leurs dépenses", "Leurs dépenses et les transferts sociaux en nature reçus", "La FBCF des ménages", "Les impôts payés"], bonne: 1, explication: "Enseignement, santé fournis gratuitement." },
      { q: "Les intérêts versés par une entreprise à sa banque sont :", choix: ["Une consommation intermédiaire", "Un revenu de la propriété", "Une opération financière", "Une subvention"], bonne: 1, explication: "Opération de répartition (D)." },
      { q: "La consommation de capital fixe mesure :", choix: ["Les achats de machines", "La dépréciation du capital fixe au cours de la période", "Les stocks", "Les amortissements fiscaux"], bonne: 1, explication: "FBCF nette = FBCF - CCF." },
    ],
  },

  3: {
    titre: "Les agrégats : du PIB au revenu national disponible",
    description: "Agrégats de la comptabilité nationale : PIB selon trois optiques, PIN, RNB, revenu national disponible, épargne nationale et besoin de financement.",
    resume: md`
## L'essentiel — Les agrégats

- PIB (production) $= \sum VA_{\text{prix de base}} +$ impôts sur les produits $-$ subventions sur les produits ; $VA = P - CI$.
- PIB (dépenses) $= CF + FBC + X - M$ ; $FBC = FBCF +$ variation des stocks.
- PIB (revenus) $=$ rémunération des salariés $+$ impôts nets sur la production et les importations $+ EBE +$ revenu mixte.
- $PIN = PIB - CCF$ ; **intérieur** (territoire) ≠ **national** (résidents).
- $RNB = PIB +$ revenus primaires nets du reste du monde ; $RNDB = RNB +$ transferts courants nets (envois des MRE).
- Épargne nationale $S = RNDB - CF$ ; capacité ou besoin de financement $= S + TK - FBC$.
- $S - FBC =$ solde des transactions courantes $= (X - M) +$ revenus primaires nets $+$ transferts courants nets.
- Ratios : taux d'investissement $FBC/PIB$, taux d'épargne $S/RNDB$, taux d'ouverture $(X + M)/(2\,PIB)$.
`,
    exercices: md`
### Exercice 2 — La filière du pain

Un agriculteur produit du blé pour 300 (il a acheté des semences importées pour 20). Une minoterie achète ce blé et produit de la farine pour 450 (énergie importée : 30). Une boulangerie achète la farine et vend du pain aux ménages pour 800 (énergie importée : 50). Il n'y a ni impôts ni stocks.

1. Calculez la somme des productions et la somme des valeurs ajoutées.
2. Calculez le PIB par l'optique des dépenses. Que constatez-vous ?

<details><summary>Voir le corrigé</summary>

**1)** Productions : $300 + 450 + 800 = 1\,550$. Valeurs ajoutées : agriculteur $300 - 20 = 280$ ; minoterie $450 - 300 - 30 = 120$ ; boulangerie $800 - 450 - 50 = 300$ ; total **700**. La somme des productions compte le blé trois fois (dans le blé, la farine et le pain) : ce sont les doubles comptes.

**2)** Seul le pain est un bien final : $CF = 800$ ; importations $= 20 + 30 + 50 = 100$. $PIB = 800 - 100 = \mathbf{700}$ ✔. Les deux optiques coïncident.

</details>

### Exercice 3 — Du PIB à la capacité de financement

Une économie présente (milliards de DH) : PIB 500 ; revenus primaires reçus du reste du monde 5, versés 35 ; transferts courants reçus 40, versés 5 ; consommation finale 380 ; formation brute de capital 140 ; pas de transferts en capital.

1. Calculez le RNB, le RNDB et l'épargne nationale.
2. Calculez la capacité ou le besoin de financement, puis le solde extérieur de biens et services. Vérifiez par le solde courant.

<details><summary>Voir le corrigé</summary>

**1)** $RNB = 500 + 5 - 35 = \mathbf{470}$ ; $RNDB = 470 + 40 - 5 = \mathbf{505}$ ; $S = 505 - 380 = \mathbf{125}$.

**2)** $125 - 140 = \mathbf{-15}$ : besoin de financement. Solde des biens et services : $X - M = PIB - CF - FBC = 500 - 380 - 140 = -20$. Solde courant : $-20 + (5 - 35) + (40 - 5) = -20 - 30 + 35 = \mathbf{-15}$ ✔.

</details>
`,
    qcm: [
      { q: "Selon l'optique de la production, le PIB est égal à :", choix: ["La somme des productions", "La somme des valeurs ajoutées plus les impôts nets sur les produits", "La consommation finale", "La somme des salaires"], bonne: 1, explication: "On évite les doubles comptes." },
      { q: "Selon l'optique des dépenses, PIB = :", choix: ["CF + FBC + X + M", "CF + FBC + X - M", "CF + CI + X - M", "CF - FBC + X - M"], bonne: 1, explication: "Les importations sont soustraites." },
      { q: "L'excédent brut d'exploitation est :", choix: ["Le bénéfice comptable après impôt", "Ce qui reste de la valeur ajoutée après salaires et impôts nets sur la production", "Le chiffre d'affaires", "Les dividendes versés"], bonne: 1, explication: "Revenu primaire des sociétés." },
      { q: "Le PIN est égal au PIB :", choix: ["Plus les impôts", "Moins la consommation de capital fixe", "Moins les importations", "Plus les revenus du reste du monde"], bonne: 1, explication: "Net = brut - CCF." },
      { q: "Le RNB diffère du PIB par :", choix: ["Les transferts courants", "Les revenus primaires échangés avec le reste du monde", "Les impôts", "La variation des stocks"], bonne: 1, explication: "Intérieur vs national." },
      { q: "Les envois d'argent des MRE à leur famille au Maroc augmentent :", choix: ["Le PIB", "Le revenu national disponible", "La production", "La FBCF"], bonne: 1, explication: "Ce sont des transferts courants reçus du reste du monde." },
      { q: "L'épargne nationale brute est égale à :", choix: ["PIB - CF", "RNDB - CF", "RNB - FBC", "RNDB - FBC"], bonne: 1, explication: "Revenu disponible non consommé." },
      { q: "Une nation dont l'investissement dépasse l'épargne a :", choix: ["Une capacité de financement", "Un besoin de financement et un déficit courant", "Un excédent commercial obligatoire", "Un PIB négatif"], bonne: 1, explication: "S - FBC = solde courant." },
      { q: "La FBC comprend :", choix: ["La seule FBCF", "La FBCF et la variation des stocks", "Les consommations intermédiaires", "Les importations de biens d'équipement seulement"], bonne: 1, explication: "Plus les acquisitions nettes d'objets de valeur." },
      { q: "Le taux d'investissement se calcule par :", choix: ["S / RNDB", "FBC / PIB", "X / PIB", "FBCF / CF"], bonne: 1, explication: "Effort d'accumulation." },
    ],
  },

  4: {
    titre: "Valeur, volume et prix : mesurer la croissance",
    description: "Mesurer la croissance : valeur, volume et prix, indices de Laspeyres, Paasche et Fisher, PIB aux prix de l'année précédente, chaînage, déflateur.",
    resume: md`
## L'essentiel — Valeur, volume, prix

- Indice de valeur = indice de volume × indice de prix ; $(1 + g_{val}) = (1 + g_{vol})(1 + g_p)$.
- Volume = quantités **et** qualité ; croissance = variation du PIB **en volume**.
- Laspeyres : pondérations de l'année de base ; Paasche : de l'année courante ; Fisher : moyenne géométrique.
- Valeur $= L_q \times P_p = P_q \times L_p$ ; volumes en Laspeyres ⇒ prix implicites en Paasche.
- PIB en volume aux **prix de l'année précédente**, puis **chaînage** (multiplication des indices) : méthode du SCN 2008 et du HCP.
- **Déflateur** $= PIB_{valeur} / PIB_{volume}$ : prix de la production intérieure ; ≠ IPC (prix de la consommation des ménages, importations comprises).
- Volumes chaînés non additifs.
- Contribution à la croissance $= g_X \times X_{t-1} / PIB_{t-1}$ ; la somme des contributions = croissance du PIB.
- Comptes provisoires, semi-définitifs, définitifs ; changement de base = révision de toutes les séries.
`,
    exercices: md`
### Exercice 2 — Une série chaînée

La croissance du PIB en volume d'une économie (aux prix de l'année précédente) est de + 3,0 % la première année, − 1,5 % la deuxième (sécheresse) et + 4,0 % la troisième.

1. Construisez l'indice chaîné du PIB en volume (base 100 l'année initiale).
2. Calculez le taux de croissance annuel moyen sur les trois ans.

<details><summary>Voir le corrigé</summary>

**1)** $100 \times 1{,}03 = \mathbf{103{,}0}$ ; $103 \times 0{,}985 \approx \mathbf{101{,}46}$ ; $101{,}455 \times 1{,}04 \approx \mathbf{105{,}51}$.

**2)** $(1{,}0551)^{1/3} - 1 \approx \mathbf{1{,}80\,\%}$ par an. La moyenne arithmétique des taux ($5{,}5 / 3 \approx 1{,}83\,\%$) est proche mais inexacte : on compose les taux, on ne les additionne pas.

</details>

### Exercice 3 — Déflater un PIB

Le PIB en valeur passe de 1 200 à 1 290 milliards de DH ; le déflateur du PIB augmente de 3 %, l'indice des prix à la consommation de 2 %.

1. Calculez la croissance en valeur et en volume.
2. Pourquoi ne faut-il pas utiliser l'IPC pour déflater le PIB ?

<details><summary>Voir le corrigé</summary>

**1)** Valeur : $1\,290 / 1\,200 - 1 = \mathbf{+7{,}5\,\%}$. Volume : $1{,}075 / 1{,}03 - 1 \approx \mathbf{+4{,}37\,\%}$ (l'approximation $7{,}5 - 3 = 4{,}5$ surestime légèrement).

**2)** L'IPC mesure le prix du panier consommé par les ménages, qui comprend des produits importés et exclut l'investissement et les exportations. Le PIB mesure la production intérieure : son prix est le **déflateur**. Si les prix des importations (pétrole, céréales) montent plus vite que ceux de la production nationale, l'IPC et le déflateur divergent.

</details>
`,
    qcm: [
      { q: "La croissance économique se mesure par la variation :", choix: ["Du PIB en valeur", "Du PIB en volume", "De l'IPC", "Des exportations"], bonne: 1, explication: "On retire l'effet des prix." },
      { q: "Si le PIB en valeur augmente de 8 % et les prix de 3 %, le volume augmente d'environ :", choix: ["11 %", "4,9 %", "2,7 %", "8 %"], bonne: 1, explication: "1,08 / 1,03 - 1 ≈ 4,85 %." },
      { q: "Un indice de Laspeyres utilise les pondérations :", choix: ["De l'année courante", "De l'année de base", "Moyennes", "Aléatoires"], bonne: 1, explication: "Panier fixe de l'année de base." },
      { q: "Le déflateur du PIB est :", choix: ["PIB volume / PIB valeur", "PIB valeur / PIB volume", "L'IPC", "Le taux d'intérêt réel"], bonne: 1, explication: "C'est un indice de prix implicite (Paasche)." },
      { q: "Le HCP publie le PIB en volume :", choix: ["Aux prix de 1960", "Aux prix de l'année précédente, chaîné", "En dollars constants seulement", "Sans correction des prix"], bonne: 1, explication: "Méthode recommandée par le SCN 2008." },
      { q: "Un inconvénient des volumes chaînés est :", choix: ["Leur pondération ancienne", "Leur non-additivité", "Leur impossibilité de calcul", "Leur exclusion des services"], bonne: 1, explication: "La somme des composantes ne donne pas le total." },
      { q: "L'IPC diffère du déflateur du PIB car il :", choix: ["Exclut les services", "Porte sur la consommation des ménages, importations comprises", "Inclut l'investissement", "Est un indice de volume"], bonne: 1, explication: "Le déflateur porte sur la production intérieure." },
      { q: "Une composante qui pèse 20 % du PIB et croît de 10 % en volume contribue à la croissance pour :", choix: ["10 points", "2 points", "20 points", "0,5 point"], bonne: 1, explication: "10 % × 0,20 = 2 points." },
      { q: "L'indice de valeur est égal à :", choix: ["Laspeyres volume × Laspeyres prix", "Laspeyres volume × Paasche prix", "Paasche volume × Paasche prix", "Fisher volume seul"], bonne: 1, explication: "Propriété de décomposition des indices." },
      { q: "Le volume d'un bien tient compte :", choix: ["Uniquement des quantités", "Des quantités et de la qualité", "Uniquement des prix", "Des impôts"], bonne: 1, explication: "Un produit de meilleure qualité représente plus de volume." },
    ],
  },

  5: {
    titre: "La séquence des comptes des secteurs institutionnels",
    description: "Séquence des comptes : production, exploitation, revenus primaires, distribution secondaire, épargne et capacité de financement des SNF, ménages et APU.",
    resume: md`
## L'essentiel — Séquence des comptes

- Chaque compte : ressources − emplois = **solde**, reporté en ressource du compte suivant.
- Production → **VAB** ; exploitation → **EBE** / revenu mixte ; affectation des revenus primaires → **solde des revenus primaires** ; distribution secondaire → **RDB** ; utilisation → **épargne** ; capital → **capacité / besoin de financement**.
- Dividendes et intérêts : revenus de la propriété ; IS et IR : distribution secondaire ; subventions d'exploitation ≠ aides à l'investissement (transferts en capital).
- SNF : pas de consommation, RDB = épargne ; taux de marge $EBE/VA$, taux d'autofinancement $\text{épargne}/FBCF$ ; en général en besoin de financement.
- Ménages : taux d'épargne $S/RDB$ ; en général en capacité de financement.
- RDB ajusté = RDB + transferts sociaux en nature.
- APU : capacité ou besoin = solde public (comptabilité nationale).
- Compte de capital (par le haut) = compte financier (par le bas) : actifs financiers nets − passifs nets.
`,
    exercices: md`
### Exercice 2 — Les comptes des ménages

Les ménages d'une économie présentent (milliards de DH) : production (entrepreneurs individuels et loyers imputés) 250 ; CI 70 ; salaires versés à leurs employés 20 ; impôts sur la production 5 ; rémunération des salariés reçue 400 ; revenus de la propriété reçus 30 ; intérêts versés 25 ; impôt sur le revenu 45 ; cotisations sociales versées 70 ; prestations sociales reçues 60 ; transferts reçus des MRE 75 ; consommation finale 470 ; FBCF (logements) 20 ; transferts sociaux en nature reçus 65.

1. Calculez la VAB, l'EBE et le revenu mixte, le solde des revenus primaires, le RDB, l'épargne et la capacité de financement.
2. Calculez le taux d'épargne et le RDB ajusté.

<details><summary>Voir le corrigé</summary>

**1)** $VAB = 250 - 70 = 180$ ; EBE + revenu mixte $= 180 - 20 - 5 = 155$ ; $SRP = 155 + 400 + 30 - 25 = \mathbf{560}$ ; $RDB = 560 - 45 - 70 + 60 + 75 = \mathbf{580}$ ; épargne $= 580 - 470 = \mathbf{110}$ ; capacité de financement $= 110 - 20 = \mathbf{+90}$.

**2)** Taux d'épargne $= 110 / 580 \approx \mathbf{19\,\%}$. RDB ajusté $= 580 + 65 = \mathbf{645}$ : la prise en compte des services publics gratuits augmente de 11 % le revenu des ménages.

</details>

### Exercice 3 — Le solde des administrations publiques

Les APU d'une économie présentent (milliards de DH) : impôts sur la production et les importations 150 ; subventions versées 10 ; revenus de la propriété reçus 5 ; intérêts de la dette versés 25 ; impôts sur le revenu et les sociétés 115 ; cotisations sociales reçues 70 ; prestations sociales versées 60 ; autres transferts courants versés 5 ; consommation finale 190 ; FBCF 90 ; transferts en capital versés 20. Le PIB vaut 1 000.

1. Calculez le solde des revenus primaires, le RDB, l'épargne et le solde public.
2. Exprimez le solde en pourcentage du PIB.

<details><summary>Voir le corrigé</summary>

**1)** $SRP = 150 - 10 + 5 - 25 = \mathbf{120}$ ; $RDB = 120 + 115 + 70 - 60 - 5 = \mathbf{240}$ ; épargne $= 240 - 190 = \mathbf{50}$ ; solde $= 50 - 90 - 20 = \mathbf{-60}$ : besoin de financement.

**2)** $-60 / 1\,000 = \mathbf{-6\,\%}$ du PIB. L'épargne publique positive (50) montre que les recettes couvrent les dépenses courantes : le déficit vient de l'investissement public et des aides à l'investissement.

</details>
`,
    qcm: [
      { q: "Le solde du compte de production est :", choix: ["L'EBE", "La valeur ajoutée brute", "Le revenu disponible", "L'épargne"], bonne: 1, explication: "VAB = production - CI." },
      { q: "Les dividendes versés par une société sont enregistrés dans le compte :", choix: ["D'exploitation", "D'affectation des revenus primaires", "De capital", "De production"], bonne: 1, explication: "Ce sont des revenus de la propriété." },
      { q: "L'impôt sur les sociétés est enregistré dans le compte :", choix: ["D'exploitation", "De distribution secondaire du revenu", "De production", "De capital"], bonne: 1, explication: "C'est un impôt courant sur le revenu." },
      { q: "Pour les sociétés non financières, l'épargne brute est égale :", choix: ["À l'EBE", "Au revenu disponible brut", "À la valeur ajoutée", "Aux dividendes"], bonne: 1, explication: "Elles n'ont pas de consommation finale." },
      { q: "Le taux de marge des SNF est :", choix: ["Épargne / FBCF", "EBE / VA", "Salaires / VA", "FBCF / VA"], bonne: 1, explication: "Part de la valeur ajoutée qui rémunère le capital." },
      { q: "Le taux d'autofinancement est :", choix: ["EBE / VA", "Épargne brute / FBCF", "Dette / fonds propres", "VA / production"], bonne: 1, explication: "Part de l'investissement financée par l'épargne propre." },
      { q: "Les aides à l'investissement reçues sont enregistrées :", choix: ["Dans le compte d'exploitation", "Dans le compte de capital", "Dans le compte de production", "Dans le compte financier"], bonne: 1, explication: "Ce sont des transferts en capital." },
      { q: "Le revenu disponible brut ajusté des ménages ajoute au RDB :", choix: ["Les impôts", "Les transferts sociaux en nature", "La FBCF", "Les revenus du reste du monde"], bonne: 1, explication: "Enseignement et santé gratuits." },
      { q: "Les ménages sont généralement :", choix: ["En besoin de financement", "En capacité de financement", "Sans épargne", "Sans FBCF"], bonne: 1, explication: "Ils prêtent aux autres secteurs." },
      { q: "La capacité de financement calculée dans le compte de capital est égale, dans le compte financier, à :", choix: ["La FBCF", "L'acquisition nette d'actifs financiers moins l'accroissement net des passifs", "Le revenu disponible", "La dette totale"], bonne: 1, explication: "Les deux approches donnent le même solde." },
    ],
  },

  6: {
    titre: "Le tableau des ressources et des emplois et le tableau économique d'ensemble",
    description: "TRE et TEE : équilibre ressources-emplois par produit, structure du tableau économique d'ensemble, règles de cohérence, financement entre secteurs.",
    resume: md`
## L'essentiel — TRE et TEE

- Équilibre d'un produit : $P + M +$ marges $+$ impôts nets $= CI + CF + FBCF + \Delta S + X$.
- Pour l'économie : $PIB + M = CF + FBC + X$ (offre globale = demande globale).
- **TRE** : par produit, tableau des ressources, des entrées intermédiaires (par branche) et des emplois finals ; il garantit la cohérence des trois optiques du PIB.
- **TEE** : tous les secteurs + économie nationale + reste du monde + biens et services ; emplois à gauche, ressources à droite ; opérations et soldes en lignes.
- Cohérence : chaque opération équilibrée (emplois = ressources, secteurs + RDM) ; soldes additifs.
- $\sum CBF_{secteurs} = CBF_{nation} = -\,CBF_{RDM}$ = solde des transactions courantes (+ capital).
- La variation des stocks est souvent calculée comme **solde** de l'équilibre d'un produit.
- Schéma habituel : ménages en capacité, SNF et APU en besoin, SF proches de l'équilibre, RDM en complément.
`,
    exercices: md`
### Exercice 2 — Équilibrer une opération du TEE

Dans le TEE d'une économie, la rémunération des salariés est versée par les SNF (300), les SF (40), les APU (150), les ménages employeurs (20) et le reste du monde (10, salaires de travailleurs saisonniers résidents). Les non-résidents employés au Maroc reçoivent 5.

1. Quel est le total des emplois de cette opération ?
2. Combien reçoivent les ménages résidents ? Dans quel compte cette ressource apparaît-elle ?

<details><summary>Voir le corrigé</summary>

**1)** Emplois $= 300 + 40 + 150 + 20 + 10 = \mathbf{520}$.

**2)** Ressources $=$ ménages résidents $+$ reste du monde $= 520$, d'où ménages $= 520 - 5 = \mathbf{515}$. Pour les employeurs résidents, les salaires sont un emploi du **compte d'exploitation** ; pour les ménages, une ressource du **compte d'affectation des revenus primaires** (ils ne naissent pas de leur propre production).

</details>

### Exercice 3 — L'équilibre emplois-ressources

Une économie présente (milliards de DH) : consommation finale 760, FBCF 290, variation des stocks 10, exportations 380, importations 460.

1. Calculez le PIB et l'offre globale.
2. Les importations augmentent de 20, tous les autres emplois étant inchangés. Que devient le PIB ? Interprétez.

<details><summary>Voir le corrigé</summary>

**1)** $PIB = 760 + 300 + 380 - 460 = \mathbf{980}$. Offre globale $= PIB + M = 980 + 460 = \mathbf{1\,440}$, égale à la demande globale $760 + 300 + 380 = 1\,440$ ✔.

**2)** Si les mêmes emplois sont satisfaits par davantage d'importations, le PIB baisse de 20, à **960** : une partie de la demande est servie par la production étrangère au lieu de la production intérieure. Les importations ne « détruisent » pas le PIB par nature ; elles se substituent ici à de la production nationale.

</details>
`,
    qcm: [
      { q: "Pour un produit, les ressources comprennent :", choix: ["La consommation intermédiaire", "La production et les importations", "Les exportations", "La FBCF"], bonne: 1, explication: "Plus les marges et les impôts nets sur les produits." },
      { q: "L'équilibre emplois-ressources de l'économie s'écrit :", choix: ["PIB = CF + M", "PIB + M = CF + FBC + X", "PIB = X - M", "CF = FBC + X"], bonne: 1, explication: "Offre globale = demande globale." },
      { q: "Le TRE présente les données :", choix: ["Par secteur institutionnel", "Par produit et par branche", "Par région", "Par ménage"], bonne: 1, explication: "Il décrit la production et les emplois des produits." },
      { q: "Le TEE présente les comptes :", choix: ["D'une seule entreprise", "De tous les secteurs institutionnels et du reste du monde", "Uniquement de l'État", "Uniquement des banques"], bonne: 1, explication: "C'est le tableau de synthèse des comptes." },
      { q: "Dans le TEE, pour chaque opération de répartition :", choix: ["Les emplois dépassent les ressources", "Le total des emplois est égal au total des ressources", "Seules les APU interviennent", "Le reste du monde est exclu"], bonne: 1, explication: "Ce qui est versé par l'un est reçu par l'autre." },
      { q: "La somme des capacités et besoins de financement des secteurs résidents est égale :", choix: ["À zéro toujours", "À l'opposé du solde du reste du monde", "Au PIB", "À l'épargne des ménages"], bonne: 1, explication: "CBF nation = - CBF RDM." },
      { q: "Si la nation a un besoin de financement de 30, le reste du monde a :", choix: ["Un besoin de 30", "Une capacité de 30 vis-à-vis d'elle", "Un solde nul", "Une capacité de 60"], bonne: 1, explication: "Il prête à la nation." },
      { q: "Le secteur qui dégage habituellement une capacité de financement est :", choix: ["Les SNF", "Les ménages", "Les APU", "Aucun"], bonne: 1, explication: "Leur épargne dépasse leur investissement en logement." },
      { q: "Les transferts en capital entre secteurs résidents, pour la nation :", choix: ["Augmentent sa capacité", "S'annulent", "Réduisent le PIB", "Augmentent l'épargne"], bonne: 1, explication: "Ce qui est versé par l'un est reçu par l'autre." },
      { q: "Dans la pratique, la variation des stocks d'un produit est souvent obtenue :", choix: ["Par enquête exhaustive", "Comme solde de l'équilibre ressources-emplois", "À partir de l'IPC", "Elle est toujours nulle"], bonne: 1, explication: "Faute de statistique directe fiable." },
    ],
  },

  7: {
    titre: "Le tableau entrées-sorties et le modèle de Leontief",
    description: "Tableau entrées-sorties et modèle de Leontief : coefficients techniques, matrice inverse, multiplicateurs, effets sur la valeur ajoutée et l'emploi.",
    resume: md`
## L'essentiel — TES et Leontief

- TES : en ligne, les **débouchés** $X_i = \sum_j x_{ij} + Y_i$ ; en colonne, les **coûts** $X_j = \sum_i x_{ij} + VA_j$.
- Économie fermée : $\sum VA_j = \sum Y_i = PIB$.
- Coefficient technique $a_{ij} = x_{ij} / X_j$ (production de la branche **acheteuse**) ; coefficient de VA $v_j = 1 - \sum_i a_{ij}$.
- $X = AX + Y$ ⇒ $X = (I - A)^{-1} Y$ ; $(I - A)^{-1} = I + A + A^2 + \ldots$ (effets directs et indirects).
- $2 \times 2$ : $(I - A)^{-1} = \frac{1}{\det}\begin{pmatrix} 1 - a_{22} & a_{12} \\ a_{21} & 1 - a_{11} \end{pmatrix}$.
- Multiplicateur de production de la branche $j$ = somme de la colonne $j$ de la matrice inverse.
- $\Delta VA = v'\,\Delta X$ ; $\Delta \text{Emploi} = e'\,\Delta X$.
- Hypothèses : coefficients fixes, un produit par branche, capacités suffisantes ; économie ouverte : coefficients domestiques, multiplicateurs plus faibles.
`,
    exercices: md`
### Exercice 2 — Effet d'un choc sur l'emploi

On reprend l'économie de l'exercice du cours (agriculture 200, industrie 300). L'agriculture emploie 40 milliers de personnes et l'industrie 30 milliers.

1. Calculez les coefficients d'emploi (emplois par milliard de DH produit).
2. Calculez l'effet sur l'emploi d'une hausse de 30 des exportations industrielles.
3. Même question pour une hausse de 30 des exportations agricoles. Comparez.

<details><summary>Voir le corrigé</summary>

**1)** $e_A = 40 / 200 = 0{,}2$ millier par milliard ; $e_I = 30 / 300 = 0{,}1$.

**2)** $\Delta X = (10 ; 45)$ : $\Delta \text{Emploi} = 0{,}2 \times 10 + 0{,}1 \times 45 = 2 + 4{,}5 = \mathbf{6{,}5}$ milliers d'emplois.

**3)** $\Delta X_A = 1{,}167 \times 30 = 35$ ; $\Delta X_I = 0{,}25 \times 30 = 7{,}5$. $\Delta \text{Emploi} = 0{,}2 \times 35 + 0{,}1 \times 7{,}5 = 7 + 0{,}75 = \mathbf{7{,}75}$ milliers. L'agriculture a un multiplicateur de production plus faible, mais elle est plus intensive en travail : un choc agricole crée plus d'emplois.

</details>

### Exercice 3 — Calculer une matrice inverse

La matrice des coefficients techniques d'une économie à deux branches est $A = \begin{pmatrix} 0{,}2 & 0{,}1 \\ 0{,}3 & 0{,}4 \end{pmatrix}$ et la demande finale $Y = (100 ; 150)$.

1. Vérifiez les conditions de Hawkins-Simon.
2. Calculez la matrice inverse de Leontief et les productions.
3. Vérifiez l'équilibre de la branche 2.

<details><summary>Voir le corrigé</summary>

**1)** $I - A = \begin{pmatrix} 0{,}8 & -0{,}1 \\ -0{,}3 & 0{,}6 \end{pmatrix}$ : $0{,}8 > 0$ et $\det = 0{,}48 - 0{,}03 = 0{,}45 > 0$ ✔.

**2)** $L = \dfrac{1}{0{,}45}\begin{pmatrix} 0{,}6 & 0{,}1 \\ 0{,}3 & 0{,}8 \end{pmatrix} \approx \begin{pmatrix} 1{,}333 & 0{,}222 \\ 0{,}667 & 1{,}778 \end{pmatrix}$. $X_1 = 1{,}333 \times 100 + 0{,}222 \times 150 \approx \mathbf{166{,}7}$ ; $X_2 = 0{,}667 \times 100 + 1{,}778 \times 150 \approx \mathbf{333{,}3}$.

**3)** $0{,}3 \times 166{,}7 + 0{,}4 \times 333{,}3 + 150 \approx 50 + 133{,}3 + 150 = 333{,}3$ ✔.

</details>
`,
    qcm: [
      { q: "Dans un TES, une ligne décrit :", choix: ["Les coûts d'une branche", "Les débouchés de la production d'une branche", "La valeur ajoutée", "Les importations seulement"], bonne: 1, explication: "Ventes intermédiaires et demande finale." },
      { q: "Le coefficient technique a_ij se calcule en divisant x_ij par :", choix: ["La production de la branche vendeuse i", "La production de la branche acheteuse j", "Le PIB", "La demande finale"], bonne: 1, explication: "Besoin en produit i par unité produite par j." },
      { q: "La matrice inverse de Leontief mesure :", choix: ["Uniquement les effets directs", "Les effets directs et indirects de la demande finale sur la production", "Les prix", "Les importations"], bonne: 1, explication: "(I - A)^-1 = I + A + A² + ..." },
      { q: "Le multiplicateur de production d'une branche est :", choix: ["Son coefficient de valeur ajoutée", "La somme de sa colonne dans la matrice inverse", "Sa production totale", "Le déterminant de I - A"], bonne: 1, explication: "Production totale engendrée par 1 DH de demande finale." },
      { q: "Dans une économie fermée, la valeur ajoutée totale est égale :", choix: ["À la production totale", "À la demande finale totale", "Aux consommations intermédiaires", "À zéro"], bonne: 1, explication: "C'est le PIB." },
      { q: "Le modèle de Leontief suppose :", choix: ["Des coefficients techniques variables", "Des coefficients techniques fixes", "Des rendements croissants", "Des prix flexibles"], bonne: 1, explication: "Pas de substitution entre intrants." },
      { q: "Dans une économie ouverte, les multiplicateurs calculés avec les coefficients domestiques sont :", choix: ["Plus élevés", "Plus faibles", "Identiques", "Nuls"], bonne: 1, explication: "Une partie des effets fuit vers les importations." },
      { q: "Le coefficient de valeur ajoutée d'une branche est égal à :", choix: ["La somme de sa ligne", "1 moins la somme des coefficients techniques de sa colonne", "Son multiplicateur", "Son emploi"], bonne: 1, explication: "VA / production." },
      { q: "Wassily Leontief a reçu le prix Nobel d'économie en :", choix: ["1953", "1973", "1984", "2001"], bonne: 1, explication: "Pour la méthode des entrées-sorties." },
      { q: "Augmenter le taux d'intégration locale d'une filière industrielle :", choix: ["Réduit son multiplicateur", "Augmente l'effet de ses exportations sur la production nationale", "N'a aucun effet", "Réduit la valeur ajoutée"], bonne: 1, explication: "Moins d'intrants importés, plus d'effets d'entraînement internes." },
    ],
  },

  8: {
    titre: "Comptes financiers, balance des paiements et limites du PIB",
    description: "Compte financier et TOF, financement direct et intermédié, comptes de patrimoine, balance des paiements (MBP6), limites du PIB, PIB vert et IDH.",
    resume: md`
## L'essentiel — Financement et limites du PIB

- Compte financier : $CBF =$ acquisitions nettes d'actifs financiers $-$ accroissement net des passifs ; écart avec le compte de capital = ajustement statistique.
- Instruments : numéraire et dépôts, titres de créance, crédits, actions et parts de fonds, assurance-retraite, autres comptes.
- **TOF** : secteurs × instruments ; financement **intermédié** (banques) vs **direct** (marchés) ; taux d'intermédiation.
- Patrimoine de clôture = ouverture + flux + autres changements de volume + réévaluations.
- **Balance des paiements** (Office des changes, MBP6) : transactions courantes (biens, services, revenus primaires, revenus secondaires), compte de capital, compte financier (IDE, portefeuille, autres investissements, réserves).
- Solde courant + compte de capital = solde du compte financier (± erreurs et omissions).
- Limites du PIB : informel, production domestique, environnement, inégalités, qualité de vie.
- PIN ajusté de l'environnement $= PIN -$ épuisement des ressources $-$ dégradations (SCEE) ; **IDH** (santé, éducation, revenu) ; rapport Stiglitz-Sen-Fitoussi (2009).
`,
    exercices: md`
### Exercice 2 — Le compte financier des SNF

Les sociétés non financières d'une économie ont un besoin de financement de 65 (milliards de DH) dans leur compte de capital. Dans leur compte financier : leur trésorerie (dépôts) augmente de 10, elles accordent 5 de crédits commerciaux nets ; elles empruntent 45 aux banques, émettent 15 d'obligations et 12 d'actions.

1. Calculez le solde du compte financier et l'ajustement statistique.
2. Calculez la part du financement intermédié dans les ressources externes des SNF.

<details><summary>Voir le corrigé</summary>

**1)** Actifs : $10 + 5 = 15$ ; passifs : $45 + 15 + 12 = 72$. Solde $= 15 - 72 = \mathbf{-57}$. Le compte de capital donnait − 65 : l'**ajustement statistique** est de $-65 - (-57) = -8$, dû aux différences de sources.

**2)** Financement intermédié (crédits bancaires) : $45 / 72 = \mathbf{62{,}5\,\%}$ ; financement de marché (obligations et actions) : 37,5 %. Les SNF restent majoritairement financées par les banques.

</details>

### Exercice 3 — Au-delà du PIB

Deux pays ont le même PIB par habitant. Dans le pays A, l'espérance de vie est de 77 ans et la durée moyenne de scolarisation des adultes de 11 ans ; dans le pays B, de 68 ans et 6 ans. Le pays B a de plus réalisé une partie de sa croissance en surexploitant ses forêts.

1. Lequel aura l'IDH le plus élevé ? Pourquoi ?
2. Quel indicateur révélerait la surexploitation des forêts ?
3. Citez deux autres activités que le PIB ne mesure pas, ou mal.

<details><summary>Voir le corrigé</summary>

**1)** Le pays **A** : l'IDH combine le revenu (identique ici) avec la santé (espérance de vie) et l'éducation (durée de scolarisation), meilleures dans le pays A.

**2)** Le **PIN ajusté de l'environnement** : il déduit l'épuisement du capital forestier, ce qui réduirait le produit net du pays B. Le PIB, lui, compte les coupes comme une production sans déduire la perte de ressource.

**3)** La production domestique non rémunérée (soins aux enfants, cuisine), le bénévolat, une partie de l'économie informelle ; le PIB ne dit rien non plus de la répartition des revenus ni du temps libre.

</details>
`,
    qcm: [
      { q: "La capacité de financement se lit dans le compte financier comme :", choix: ["Passifs moins actifs", "Acquisitions nettes d'actifs financiers moins accroissement net des passifs", "Épargne moins consommation", "Production moins CI"], bonne: 1, explication: "Elle est égale au solde du compte de capital." },
      { q: "Un ménage qui contracte un crédit immobilier :", choix: ["Augmente ses actifs financiers", "Augmente ses passifs", "Augmente son épargne", "Réduit le PIB"], bonne: 1, explication: "Une dette nouvelle est un passif." },
      { q: "Le TOF croise :", choix: ["Les branches et les produits", "Les secteurs institutionnels et les instruments financiers", "Les régions et les produits", "Les années et les prix"], bonne: 1, explication: "Tableau des opérations financières." },
      { q: "Le financement intermédié passe par :", choix: ["L'émission d'actions", "Les banques et institutions financières", "L'autofinancement", "Les subventions"], bonne: 1, explication: "Les banques collectent les dépôts et accordent des crédits." },
      { q: "Au Maroc, la balance des paiements est établie par :", choix: ["Le HCP", "L'Office des changes", "La Bourse de Casablanca", "Le ministère de l'Intérieur"], bonne: 1, explication: "Selon le manuel MBP6 du FMI." },
      { q: "Les transferts des MRE sont enregistrés dans la balance des paiements en :", choix: ["Biens", "Revenus secondaires (transactions courantes)", "Compte financier", "Compte de capital"], bonne: 1, explication: "Ce sont des transferts courants." },
      { q: "Un déficit courant peut être financé par :", choix: ["Uniquement une baisse des réserves", "Des entrées de capitaux ou une baisse des réserves", "Une hausse des exportations de l'année suivante", "Rien"], bonne: 1, explication: "IDE, emprunts, investissements de portefeuille." },
      { q: "Le PIN ajusté de l'environnement déduit du PIN :", choix: ["Les impôts", "L'épuisement des ressources naturelles et les dégradations", "Les importations", "La consommation"], bonne: 1, explication: "Système de comptabilité économique et environnementale." },
      { q: "L'IDH combine :", choix: ["PIB, inflation, chômage", "Espérance de vie, éducation, revenu par habitant", "Exportations et importations", "Épargne et investissement"], bonne: 1, explication: "Indicateur du PNUD." },
      { q: "Le patrimoine peut augmenter sans aucune épargne grâce :", choix: ["À la consommation", "Aux réévaluations (hausse des prix des actifs)", "Aux impôts", "Aux importations"], bonne: 1, explication: "Par exemple la hausse des prix de l'immobilier." },
    ],
  },
};

export default chapitres;
