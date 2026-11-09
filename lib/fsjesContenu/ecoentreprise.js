// Économie d'entreprise (S1, parcours Économie) — compléments par chapitre :
// description SEO, résumé, exercices 2 et 3, QCM. Module ajouté le 2026-11-09.
const md = String.raw;

const chapitres = {
  1: {
    titre: "L'entreprise, agent économique",
    description: "Définition économique de l'entreprise, place dans le circuit et les SNF, fonctions économiques, entrepreneur selon Cantillon, Say, Schumpeter et Knight.",
    resume: md`
## L'essentiel — L'entreprise, agent économique

- **Entreprise (sens économique)** : unité autonome qui combine des facteurs de production pour produire des biens ou services **marchands**, en prenant un risque, dans le but de réaliser un profit.
- Trois critères : production **marchande**, **autonomie** de décision, **prise de risque**. Un hôpital public ou une association (production non marchande) n'en sont pas.
- En comptabilité nationale : **sociétés non financières** (SNF) ; banques et assurances = sociétés financières ; entrepreneurs individuels et auto-entrepreneurs = **ménages**.
- Dans le circuit, l'entreprise achète (travail, biens intermédiaires, équipements), vend et distribue des revenus ; les SNF ont habituellement un **besoin de financement**.
- Cinq fonctions : **produire**, **créer et répartir la valeur ajoutée**, **investir**, **employer**, **innover**.
- Trois modes de coordination : le **marché** (prix), l'**entreprise** (autorité), l'**État** (règle et impôt).
- Entrepreneur : **Cantillon** (risque, 1755), **Say** (combinaison des facteurs, 1803), **Schumpeter** (innovation, 1911), **Knight** (incertitude non assurable, 1921).
- Entrepreneur (décision et risque) ≠ capitaliste (apport des fonds).
- Tissu marocain : majorité de **TPME**, secteur **informel**, auto-entrepreneur (loi 114-13), grands groupes et holdings, entreprises publiques (OCP, ONEE, ONCF), filiales étrangères, coopératives.
`,
    exercices: md`
### Exercice 2 — L'entreprise dans le circuit

La société Souss Emballages, à Agadir, réalise les opérations suivantes au cours d'un mois. Pour chacune, indiquez le type de flux (réel ou monétaire), le sens (entrant ou sortant pour l'entreprise) et l'agent avec lequel l'opération est réalisée :
1. elle verse les salaires de ses 45 ouvriers ;
2. elle livre des caisses en carton à une coopérative d'agrumes ;
3. elle achète du papier kraft à un fournisseur portugais ;
4. elle paie la taxe professionnelle à la commune ;
5. elle rembourse une échéance d'emprunt à sa banque ;
6. elle reçoit le règlement de la coopérative.

<details><summary>Voir le corrigé</summary>

| Opération | Flux | Sens pour l'entreprise | Agent |
|---|---|---|---|
| 1. Salaires | Monétaire (contrepartie du flux réel de travail, entrant) | Sortant | Ménages |
| 2. Livraison de caisses | Réel | Sortant | Coopérative (SNF) |
| 3. Achat de papier | Réel entrant et monétaire sortant | Entrant (bien) | Reste du monde (importation) |
| 4. Taxe professionnelle | Monétaire | Sortant | Administrations publiques (collectivités territoriales) |
| 5. Remboursement d'emprunt | Monétaire (opération financière) | Sortant | Sociétés financières |
| 6. Règlement de la coopérative | Monétaire | Entrant | Coopérative (SNF) |

À chaque flux réel correspond un flux monétaire de sens inverse : la livraison (2) est la contrepartie du règlement (6). L'entreprise est à la fois acheteuse, vendeuse, employeuse, contribuable et emprunteuse.

</details>

### Exercice 3 — Chiffre d'affaires ou valeur ajoutée ?

Deux entreprises de Marrakech publient les données suivantes (en DH) :

| | Atelier Zellige (fabrication) | Medina Négoce (revente) |
|---|---:|---:|
| Chiffre d'affaires | 5 000 000 | 8 000 000 |
| Consommations intermédiaires | 3 500 000 | 7 200 000 |
| Effectif | 20 | 8 |

1. Calculez la valeur ajoutée, le rapport VA / CA et la valeur ajoutée par salarié de chaque entreprise.
2. Laquelle est la plus « grande » ? Discutez selon l'indicateur retenu.
3. Quelle conception de l'entrepreneur correspond le mieux au dirigeant de Medina Négoce, qui achète des lots d'artisanat sans savoir à quel prix il les revendra aux touristes ?

<details><summary>Voir le corrigé</summary>

**1)**

| | Atelier Zellige | Medina Négoce |
|---|---:|---:|
| Valeur ajoutée | 5 000 000 − 3 500 000 = **1 500 000** | 8 000 000 − 7 200 000 = **800 000** |
| VA / CA | **30 %** | **10 %** |
| VA par salarié | 1 500 000 / 20 = **75 000** | 800 000 / 8 = **100 000** |

**2)** Par le chiffre d'affaires, Medina Négoce est la plus grande (8 contre 5 millions). Mais l'Atelier Zellige **crée presque deux fois plus de richesse** (1,5 contre 0,8 million) et emploie plus de personnes. Le négociant revend surtout ce que d'autres ont produit : son taux de valeur ajoutée est faible. En revanche, sa VA par salarié est plus élevée, car il emploie peu de personnes. Aucun indicateur ne suffit seul.

**3)** **Cantillon** : l'entrepreneur achète à un prix certain pour revendre à un prix incertain ; il supporte le risque de l'opération.

</details>
`,
    qcm: [
      { q: "Au sens économique, l'entreprise se distingue d'abord par :", choix: ["Sa forme juridique de société", "Sa production marchande destinée à la vente", "Le nombre de ses salariés", "L'existence d'un conseil d'administration"], bonne: 1, explication: "Elle produit pour le marché, de façon autonome et en prenant un risque." },
      { q: "En comptabilité nationale, un auto-entrepreneur est classé dans le secteur :", choix: ["Des sociétés non financières", "Des ménages", "Des sociétés financières", "Des ISBLSM"], bonne: 1, explication: "Les entrepreneurs individuels relèvent du secteur des ménages." },
      { q: "Pour Schumpeter, la fonction essentielle de l'entrepreneur est :", choix: ["Supporter le risque", "Apporter les capitaux", "Innover", "Surveiller les salariés"], bonne: 2, explication: "Il réalise de nouvelles combinaisons productives." },
      { q: "Frank Knight distingue le risque et l'incertitude. Le profit rémunère selon lui :", choix: ["Le risque assurable", "L'incertitude non probabilisable", "Le travail du dirigeant", "Le capital apporté"], bonne: 1, explication: "Risk, Uncertainty and Profit, 1921." },
      { q: "Quel auteur définit l'entrepreneur comme celui qui achète à un prix certain pour revendre à un prix incertain ?", choix: ["Cantillon", "Say", "Marx", "Keynes"], bonne: 0, explication: "Essai sur la nature du commerce en général, publié en 1755." },
      { q: "À l'intérieur de l'entreprise, la coordination des décisions passe principalement par :", choix: ["Les prix", "L'autorité", "Le vote des salariés", "L'impôt"], bonne: 1, explication: "C'est ce qui la distingue du marché." },
      { q: "Jean-Baptiste Say voit dans l'entrepreneur :", choix: ["Un innovateur", "Un organisateur qui combine les facteurs de production", "Un rentier", "Un salarié comme les autres"], bonne: 1, explication: "Le savant découvre, l'entrepreneur applique, l'ouvrier exécute." },
      { q: "Laquelle de ces organisations n'est pas une entreprise au sens économique ?", choix: ["Une coopérative qui vend son huile d'argan", "Une banque", "Une association qui donne des cours gratuits", "Une SARL de confection"], bonne: 2, explication: "Sa production est non marchande." },
      { q: "Le statut de l'auto-entrepreneur au Maroc a été créé par la loi :", choix: ["17-95", "114-13", "53-00", "104-12"], bonne: 1, explication: "Loi 114-13 de 2015." },
      { q: "Parmi les fonctions économiques de l'entreprise, on ne trouve pas :", choix: ["Produire", "Répartir la valeur ajoutée", "Émettre la monnaie fiduciaire", "Investir"], bonne: 2, explication: "L'émission des billets relève de la banque centrale." },
    ],
  },

  2: {
    titre: "Les théories économiques de la firme : de la boîte noire aux coûts de transaction",
    description: "Firme néoclassique boîte noire, Coase et coûts de transaction, Williamson, spécificité des actifs, marché, hiérarchie et formes hybrides, faire ou faire faire.",
    resume: md`
## L'essentiel — Les théories de la firme

- **Firme néoclassique** : fonction de production $Q = f(K, L)$, entrepreneur unique, information parfaite, maximisation du profit. C'est une **boîte noire** : ni organisation interne, ni frontières expliquées.
- **Coase (1937)** : la firme existe parce que l'utilisation du marché a un coût, les **coûts de transaction** (recherche, négociation, contrôle des contrats).
- L'entreprise remplace une multitude de contrats de marché par des contrats de long terme (contrat de travail) et l'**autorité**.
- **Limite de la firme** : elle grandit jusqu'à ce que le coût d'organiser une transaction en interne égale son coût sur le marché.
- **Williamson** (1975, 1985) : hypothèses de **rationalité limitée** et d'**opportunisme** ; contrats incomplets.
- Trois attributs : **spécificité des actifs** (site, physique, humaine, dédiés), **incertitude**, **fréquence**. La spécificité est décisive.
- Actif spécifique → dépendance mutuelle → risque de **hold-up** → intégration.
- Trois formes : **marché**, **formes hybrides** (sous-traitance, franchise, contrats longs), **hiérarchie**.
- Prolongements : **contrats incomplets** (Grossman, Hart, Moore : droits résiduels de contrôle) ; approches **évolutionniste** (Nelson et Winter) et par les **ressources** (Penrose).
- Faire ou faire faire : comparer coût interne + coûts d'organisation et prix d'achat + coûts de transaction.
`,
    exercices: md`
### Exercice 2 — Marché, hybride ou hiérarchie ?

Pour chaque transaction, appréciez la spécificité des actifs, l'incertitude et la fréquence, puis indiquez la forme de gouvernance la plus adaptée selon Williamson :
1. un cabinet comptable de Rabat achète ses ramettes de papier ;
2. un constructeur aéronautique de Casablanca a besoin de pièces usinées selon ses plans, livrées chaque semaine pendant dix ans ;
3. une chaîne de cafés veut s'implanter dans vingt villes en conservant une image de marque homogène ;
4. un groupe minier doit transporter chaque jour son minerai de la mine à l'usine voisine par une conduite construite pour ce seul usage ;
5. une PME organise une fois son déménagement.

<details><summary>Voir le corrigé</summary>

| Transaction | Spécificité | Incertitude | Fréquence | Forme adaptée |
|---|---|---|---|---|
| 1. Ramettes de papier | Nulle (produit standard) | Faible | Récurrente | **Marché** |
| 2. Pièces usinées sur plans | Forte (physique et humaine) | Moyenne | Élevée | **Forme hybride** (contrat de sous-traitance de long terme) ou intégration si la pièce est stratégique |
| 3. Réseau de cafés | Moyenne (marque, savoir-faire) | Moyenne | Élevée | **Forme hybride** : la **franchise** |
| 4. Conduite mine-usine | Très forte (spécificité de site et actif dédié) | Moyenne | Quotidienne | **Hiérarchie** (intégration) |
| 5. Déménagement unique | Nulle | Faible | Occasionnelle | **Marché** |

Plus la spécificité des actifs et la fréquence augmentent, plus on passe du marché à la hiérarchie, les formes hybrides occupant la position intermédiaire.

</details>

### Exercice 3 — La taille optimale selon Coase

Une entreprise peut réaliser elle-même $n$ transactions par mois. Le coût d'organisation de la $n$-ième transaction en interne (en milliers de DH) est $Cm_{org}(n) = 2 + 0{,}5n$. La même transaction réalisée sur le marché coûte 12 milliers de DH, coûts de transaction compris.

1. Calculez le coût interne de la 5ᵉ, de la 20ᵉ et de la 30ᵉ transaction. Comparez au coût du marché.
2. Jusqu'à combien de transactions l'entreprise a-t-elle intérêt à internaliser ?
3. Grâce à un nouveau logiciel de gestion, le coût d'organisation devient $Cm_{org}(n) = 2 + 0{,}4n$. Que devient la taille de l'entreprise ? Interprétez.
4. Le développement des plateformes numériques réduit les coûts de transaction sur le marché, qui passent à 8 milliers de DH. Avec la fonction de la question 1, que devient la taille de l'entreprise ?

<details><summary>Voir le corrigé</summary>

**1)** $Cm_{org}(5) = 2 + 2{,}5 = 4{,}5$ ; $Cm_{org}(20) = 2 + 10 = 12$ ; $Cm_{org}(30) = 2 + 15 = 17$. La 5ᵉ transaction coûte moins cher en interne qu'au marché (4,5 < 12) ; la 20ᵉ coûte autant ; la 30ᵉ coûte plus cher (17 > 12).

**2)** L'entreprise internalise tant que $2 + 0{,}5n \leq 12$, soit $n \leq \mathbf{20}$ transactions. C'est la règle de Coase : la firme s'étend jusqu'à l'égalité du coût marginal d'organisation et du coût du marché.

**3)** $2 + 0{,}4n = 12 \iff n = \mathbf{25}$ : la baisse des coûts d'organisation permet à l'entreprise de **grandir**. Les progrès de la gestion (informatique, contrôle de gestion) expliquent en partie la formation de très grandes entreprises.

**4)** $2 + 0{,}5n = 8 \iff n = \mathbf{12}$ : quand le marché devient moins coûteux à utiliser, l'entreprise a intérêt à **externaliser** davantage et sa taille diminue. C'est l'une des explications du développement de la sous-traitance et du travail via les plateformes.

</details>
`,
    qcm: [
      { q: "On qualifie la firme néoclassique de boîte noire parce que :", choix: ["Elle ne réalise jamais de profit", "Son organisation interne n'est pas étudiée", "Elle est toujours en monopole", "Elle n'utilise pas de capital"], bonne: 1, explication: "Elle est réduite à une fonction de production." },
      { q: "L'article de Coase sur la nature de la firme date de :", choix: ["1776", "1937", "1975", "1991"], bonne: 1, explication: "The Nature of the Firm, 1937 ; prix Nobel en 1991." },
      { q: "Selon Coase, la firme existe parce que :", choix: ["Le marché est toujours inefficace", "L'utilisation du marché a un coût", "L'État l'impose", "Les salariés le demandent"], bonne: 1, explication: "Ce sont les coûts de transaction." },
      { q: "Pour Williamson, l'attribut décisif d'une transaction est :", choix: ["Son prix", "La spécificité des actifs", "Le nombre de concurrents", "La durée du travail"], bonne: 1, explication: "Un actif spécifique crée une dépendance et un risque de hold-up." },
      { q: "L'opportunisme désigne :", choix: ["Un aléa climatique", "La recherche de son intérêt avec ruse", "La capacité à saisir une occasion de marché", "La rationalité parfaite"], bonne: 1, explication: "C'est une hypothèse de comportement de Williamson." },
      { q: "Une usine installée à côté de son unique client illustre une spécificité :", choix: ["De site", "Humaine", "Temporelle", "De marque"], bonne: 0, explication: "Elle perd sa valeur si elle doit servir un autre client éloigné." },
      { q: "La franchise est, selon Williamson, une forme :", choix: ["De marché pur", "Hybride", "De hiérarchie", "De monopole"], bonne: 1, explication: "Elle combine indépendance juridique et contrat de long terme." },
      { q: "Selon Coase, la taille de la firme est limitée par :", choix: ["Les coûts d'organisation interne croissants", "Le salaire minimum", "La fiscalité", "Le taux de change"], bonne: 0, explication: "Elle s'arrête quand organiser en interne coûte autant que le marché." },
      { q: "Les droits résiduels de contrôle sont au cœur de la théorie :", choix: ["Des contrats incomplets", "Néoclassique", "Du cycle de vie du produit", "Keynésienne"], bonne: 0, explication: "Grossman et Hart (1986), Hart et Moore (1990)." },
      { q: "Williamson reprend à Herbert Simon l'hypothèse de :", choix: ["Rationalité parfaite", "Rationalité limitée", "Information gratuite", "Concurrence pure"], bonne: 1, explication: "Les agents ne peuvent pas tout prévoir : les contrats sont incomplets." },
    ],
  },

  3: {
    titre: "Propriété, pouvoir et objectifs de l'entreprise",
    description: "Séparation propriété et contrôle, technostructure, Baumol, Marris, théorie de l'agence, droits de propriété, Simon, Cyert et March, gouvernance d'entreprise.",
    resume: md`
## L'essentiel — Propriété, pouvoir et objectifs

- **Berle et Means (1932)** : dans les grandes sociétés à actionnariat dispersé, le pouvoir passe des propriétaires aux dirigeants : **séparation de la propriété et du contrôle**.
- **Galbraith (1967)** : le pouvoir appartient à la **technostructure** (experts, ingénieurs, cadres), qui vise sécurité et croissance.
- **Théories managériales** : **Baumol** (1959) maximise le chiffre d'affaires sous contrainte de profit minimal ; **Marris** (1964) maximise la croissance ; **Williamson** (1964) maximise l'utilité des managers (effectifs, avantages).
- Baumol : résoudre $\Pi(q) = \Pi_{min}$ et retenir la plus grande racine, si elle reste inférieure à la quantité qui maximise $RT$.
- **Agence** (Jensen et Meckling, 1976) : un **principal** délègue à un **agent** ; asymétrie d'information → **sélection adverse** (avant) et **aléa moral** (après).
- **Coûts d'agence** : surveillance (principal), obligation ou dédouanement (agent), **perte résiduelle**.
- **Droits de propriété** (Alchian et Demsetz, 1972) : production en équipe, tire-au-flanc, contrôleur rémunéré par le **revenu résiduel** ; *usus*, *fructus*, *abusus*.
- **Approche comportementale** : Simon (*satisficing*), **Cyert et March** (1963) : coalition de groupes, objectifs négociés, **slack organisationnel**.
- **Gouvernance** : conseil d'administration, assemblée générale, commissaire aux comptes, rémunération incitative, marché financier (OPA, AMMC), endettement.
`,
    exercices: md`
### Exercice 2 — Repérer la relation d'agence

Pour chaque situation, identifiez le principal, l'agent, et dites s'il s'agit d'un problème de sélection adverse ou d'aléa moral :
1. une banque accorde un crédit à une PME, qui utilise une partie des fonds pour un projet plus risqué que celui qu'elle avait présenté ;
2. une société recrute un directeur commercial dont elle ne peut vérifier les compétences réelles avant l'embauche ;
3. l'État nomme le directeur d'un office public, qui augmente les effectifs de son administration au-delà des besoins ;
4. un assureur ne sait pas, au moment de signer, si le transporteur qu'il assure est prudent ou non.

<details><summary>Voir le corrigé</summary>

| Situation | Principal | Agent | Problème |
|---|---|---|---|
| 1. Crédit détourné vers un projet risqué | Banque (créancier) | PME emprunteuse | **Aléa moral** (comportement après le contrat) |
| 2. Recrutement du directeur commercial | Société | Directeur | **Sélection adverse** (qualité cachée avant le contrat) |
| 3. Directeur d'office public | État | Directeur | **Aléa moral** ; illustre aussi le comportement discrétionnaire de Williamson (1964) |
| 4. Assurance d'un transporteur | Assureur | Transporteur | **Sélection adverse** |

Réponses possibles : clauses du contrat de prêt et garanties (1), période d'essai et références (2), contrat-programme et contrôle de la Cour des comptes (3), franchise et prime selon l'historique de sinistres (4).

</details>

### Exercice 3 — Baumol : un second cas

Une entreprise a une recette totale $RT = 60q - q^2$ et un coût total $CT = 100 + 20q$ (en milliers de DH).

1. Calculez la quantité, le profit et le chiffre d'affaires qui maximisent le profit.
2. Calculez la quantité qui maximise le chiffre d'affaires sans contrainte et le profit correspondant.
3. Les actionnaires exigent un profit d'au moins 275. Quelle quantité un dirigeant « à la Baumol » choisit-il ?
4. Si les actionnaires n'exigeaient qu'un profit de 150, quelle quantité serait choisie ? Pourquoi ?

<details><summary>Voir le corrigé</summary>

**1)** $\Pi = -q^2 + 40q - 100$ ; $\Pi' = -2q + 40 = 0 \iff q = \mathbf{20}$ ; $\Pi = -400 + 800 - 100 = \mathbf{300}$ ; $RT = 1\,200 - 400 = \mathbf{800}$.

**2)** $RT' = 60 - 2q = 0 \iff q = \mathbf{30}$ ; $RT = 900$ ; $\Pi = -900 + 1\,200 - 100 = \mathbf{200}$.

**3)** $-q^2 + 40q - 100 = 275 \iff q^2 - 40q + 375 = 0$ ; $\Delta = 1\,600 - 1\,500 = 100$ ; $q = (40 \pm 10)/2$, soit 15 ou 25. Le dirigeant retient $q = \mathbf{25}$ : $RT = 1\,500 - 625 = \mathbf{875}$ et $\Pi = 275$.

**4)** À $q = 30$, le profit (200) dépasse déjà 150 : la contrainte **n'est pas saturante**. Le dirigeant choisit directement la quantité qui maximise le chiffre d'affaires, $q = 30$.

</details>
`,
    qcm: [
      { q: "La séparation de la propriété et du contrôle a été mise en évidence par :", choix: ["Coase", "Berle et Means", "Schumpeter", "Vernon"], bonne: 1, explication: "The Modern Corporation and Private Property, 1932." },
      { q: "Chez Baumol, les dirigeants cherchent à maximiser :", choix: ["Le profit", "Le chiffre d'affaires sous contrainte de profit minimal", "Les dividendes", "Le nombre d'actionnaires"], bonne: 1, explication: "Leur prestige et leur rémunération dépendent des ventes." },
      { q: "La technostructure est une notion de :", choix: ["Galbraith", "Marris", "Knight", "Hicks"], bonne: 0, explication: "Le Nouvel État industriel, 1967." },
      { q: "Dans la relation d'agence entre actionnaires et dirigeants, le principal est :", choix: ["Le dirigeant", "L'actionnaire", "Le salarié", "Le client"], bonne: 1, explication: "Il délègue le pouvoir de décision à l'agent." },
      { q: "L'aléa moral apparaît :", choix: ["Avant la signature du contrat", "Après la signature du contrat", "Uniquement dans les entreprises publiques", "Seulement en concurrence parfaite"], bonne: 1, explication: "L'effort de l'agent n'est pas observable." },
      { q: "Parmi les coûts d'agence, la perte résiduelle correspond à :", choix: ["Le coût de l'audit", "L'écart de valeur qui subsiste malgré la surveillance", "Les rapports produits par le dirigeant", "Les intérêts de la dette"], bonne: 1, explication: "L'agent ne gère jamais exactement comme le principal l'aurait voulu." },
      { q: "Pour Alchian et Demsetz, le propriétaire de l'entreprise est :", choix: ["Le créancier résiduel", "Le premier salarié", "Le banquier", "Le client principal"], bonne: 0, explication: "Il perçoit ce qui reste après rémunération des autres facteurs." },
      { q: "Le slack organisationnel est une notion de :", choix: ["Jensen et Meckling", "Cyert et March", "Berle et Means", "Dunning"], bonne: 1, explication: "Surplus de ressources qui apaise les conflits dans la coalition." },
      { q: "Selon Herbert Simon, le décideur à rationalité limitée cherche :", choix: ["La solution optimale", "Une solution satisfaisante", "La solution la moins chère", "La solution imposée par l'État"], bonne: 1, explication: "C'est le principe du satisficing." },
      { q: "Lequel de ces mécanismes n'est pas un mécanisme de gouvernance ?", choix: ["Le conseil d'administration", "Le commissaire aux comptes", "La rémunération incitative des dirigeants", "La taxe sur la valeur ajoutée"], bonne: 3, explication: "La TVA est un impôt, pas un contrôle des dirigeants." },
    ],
  },

  4: {
    titre: "Mesurer l'activité : production, valeur ajoutée et partage",
    description: "Lire le CPC marocain, construire le tableau de formation des résultats, calculer VA et EBE, partage de la valeur ajoutée, taux de marge et productivité.",
    resume: md`
## L'essentiel — Production, valeur ajoutée et partage

- Le **chiffre d'affaires** mesure les ventes ; la **valeur ajoutée** mesure la richesse réellement créée.
- États de synthèse du **CGNC** : bilan, CPC, **ESG**, tableau de financement, ETIC.
- CPC en trois niveaux : **exploitation**, **financier**, **non courant** ; résultat courant = RE + RF ; RN = RC + RNC − impôt.
- **Marge brute** = ventes de marchandises − achats revendus ; **production de l'exercice** = ventes de produits ± variation de stocks + immobilisations produites.
- **Consommation de l'exercice** = achats consommés de matières et fournitures + autres charges externes.
- $VA = \text{Marge brute} + \text{Production} - \text{Consommation}$.
- $EBE = VA + \text{subventions d'exploitation} - \text{impôts et taxes} - \text{charges de personnel}$ : performance économique, avant amortissements et financement.
- Partage de la VA : salariés, État, prêteurs, actionnaires, entreprise (amortissements, réserves).
- Ratios : $VA/CA$ (intégration), charges de personnel$/VA$, $EBE/VA$ (taux de marge), $VA/\text{effectif}$ (productivité apparente du travail).
- Un ratio se commente par **comparaison** (dans le temps, avec le secteur).
`,
    exercices: md`
### Exercice 2 — Le TFR d'une entreprise de négoce

Fès Distribution SARL revend en l'état des produits d'entretien et assure aussi des prestations de livraison. Données (en DH) : ventes de marchandises 6 000 000 ; achats revendus de marchandises 4 500 000 ; prestations de livraison facturées 200 000 ; autres charges externes 400 000 ; impôts et taxes 60 000 ; charges de personnel 700 000 ; dotations d'exploitation 140 000.

1. Calculez la marge brute, la production de l'exercice, la consommation de l'exercice, la valeur ajoutée, l'EBE et le résultat d'exploitation.
2. Calculez le taux de valeur ajoutée, la part des salariés et le taux de marge. Comparez le taux de valeur ajoutée à celui d'une entreprise industrielle.

<details><summary>Voir le corrigé</summary>

**1)**

| Rubrique | Calcul | Montant |
|---|---|---:|
| Marge brute | 6 000 000 − 4 500 000 | 1 500 000 |
| Production de l'exercice | prestations | 200 000 |
| Consommation de l'exercice | autres charges externes | 400 000 |
| **Valeur ajoutée** | 1 500 000 + 200 000 − 400 000 | **1 300 000** |
| **EBE** | 1 300 000 − 60 000 − 700 000 | **540 000** |
| Résultat d'exploitation | 540 000 − 140 000 | 400 000 |

**2)** $CA = 6\,000\,000 + 200\,000 = 6\,200\,000$ DH.

$$\frac{VA}{CA} = \frac{1\,300\,000}{6\,200\,000} = \mathbf{20{,}97\ \%} \qquad \frac{700\,000}{1\,300\,000} = \mathbf{53{,}85\ \%} \qquad \frac{EBE}{VA} = \frac{540\,000}{1\,300\,000} = \mathbf{41{,}54\ \%}$$

Le taux de valeur ajoutée est faible, ce qui est normal pour un négociant : l'essentiel de ce qu'il vend a été produit par d'autres. Une entreprise industrielle intégrée a souvent un taux bien plus élevé (Oasis Agro, dans l'exercice 1, atteint 34,82 %).

</details>

### Exercice 3 — Productivité et partage sur deux ans

Une entreprise de menuiserie industrielle de Meknès publie (en DH) :

| | Année N | Année N+1 |
|---|---:|---:|
| Valeur ajoutée | 2 000 000 | 2 310 000 |
| Charges de personnel | 1 200 000 | 1 320 000 |
| Effectif | 40 | 42 |

1. Calculez, pour chaque année, la productivité apparente du travail, le coût moyen d'un salarié et la part des salariés dans la valeur ajoutée.
2. Calculez les taux de variation de la productivité et du coût moyen par salarié.
3. Commentez l'évolution du partage de la valeur ajoutée.

<details><summary>Voir le corrigé</summary>

**1)**

| | Année N | Année N+1 |
|---|---:|---:|
| Productivité apparente ($VA$ / effectif) | 2 000 000 / 40 = **50 000** | 2 310 000 / 42 = **55 000** |
| Coût moyen par salarié | 1 200 000 / 40 = **30 000** | 1 320 000 / 42 ≈ **31 429** |
| Part des salariés | **60 %** | 1 320 000 / 2 310 000 ≈ **57,14 %** |

**2)** Productivité : $55\,000 / 50\,000 - 1 = \mathbf{+10\ \%}$. Coût moyen : $31\,429 / 30\,000 - 1 \approx \mathbf{+4{,}76\ \%}$.

**3)** La productivité a augmenté deux fois plus vite que le coût moyen d'un salarié. Les gains de productivité ont donc été partagés au profit de l'entreprise et de ses propriétaires : la part des salariés recule de 60 % à 57,14 %, celle qui reste pour l'EBE progresse. Cette situation renforce la capacité d'autofinancement (chapitre 6), mais peut nourrir des revendications salariales.

</details>
`,
    qcm: [
      { q: "La valeur ajoutée se calcule comme :", choix: ["Chiffre d'affaires moins charges de personnel", "Marge brute plus production moins consommation de l'exercice", "Résultat net plus dotations", "Ventes moins impôts"], bonne: 1, explication: "C'est la quatrième ligne du TFR." },
      { q: "Les charges de personnel sont :", choix: ["Retranchées pour calculer la valeur ajoutée", "Prélevées sur la valeur ajoutée pour calculer l'EBE", "Comptées en charges financières", "Ajoutées à la production"], bonne: 1, explication: "Elles rémunèrent les salariés à partir de la VA." },
      { q: "L'EBE ne tient pas compte :", choix: ["Des charges de personnel", "Des impôts et taxes", "Des dotations aux amortissements", "Des subventions d'exploitation"], bonne: 2, explication: "Les dotations interviennent dans le résultat d'exploitation." },
      { q: "Le taux de marge se mesure par le rapport :", choix: ["EBE sur valeur ajoutée", "Valeur ajoutée sur chiffre d'affaires", "Résultat net sur capitaux propres", "Charges de personnel sur effectif"], bonne: 0, explication: "Part de la VA qui reste à l'entreprise." },
      { q: "Un négociant a généralement un taux de valeur ajoutée :", choix: ["Plus élevé qu'une industrie intégrée", "Plus faible qu'une industrie intégrée", "Toujours égal à 50 %", "Négatif"], bonne: 1, explication: "Il revend surtout ce que d'autres ont produit." },
      { q: "La variation de stocks de produits finis (stockage) :", choix: ["Est ajoutée à la production de l'exercice", "Est retranchée de la marge brute", "Est une charge financière", "N'apparaît pas dans le TFR"], bonne: 0, explication: "La production stockée est une richesse créée." },
      { q: "Les intérêts d'un emprunt sont classés en :", choix: ["Charges d'exploitation", "Charges financières", "Charges non courantes", "Consommation de l'exercice"], bonne: 1, explication: "Ils relèvent de la politique de financement." },
      { q: "On parle de productivité apparente du travail parce que :", choix: ["Elle est toujours surestimée par les entreprises", "La valeur ajoutée provient aussi du capital", "Elle n'est jamais publiée", "Elle exclut les cadres"], bonne: 1, explication: "On attribue au seul travail une richesse créée par tous les facteurs." },
      { q: "Au Maroc, l'état des soldes de gestion fait partie des états de synthèse du :", choix: ["CGI", "CGNC", "DOC", "Code du travail"], bonne: 1, explication: "Code général de normalisation comptable." },
      { q: "VA = 4 000 ; charges de personnel = 2 400 ; impôts et taxes = 100 ; pas de subvention. L'EBE vaut :", choix: ["1 600", "1 500", "6 500", "2 500"], bonne: 1, explication: "4 000 − 2 400 − 100 = 1 500." },
    ],
  },

  5: {
    titre: "L'investissement de l'entreprise",
    description: "Types d'investissement, déterminants (demande, profit, taux d'intérêt), principe de l'accélérateur, délai de récupération, VAN et charte de l'investissement.",
    resume: md`
## L'essentiel — L'investissement

- **Investissement** : acquisition de biens durables (corporels, incorporels, financiers) pour produire pendant plusieurs exercices ; en comptabilité nationale, la **FBCF**.
- Double nature : **demande** aujourd'hui (soutien de l'activité), **offre** demain (capacités de production).
- Par objet : **renouvellement**, **capacité**, **productivité**, **innovation**, **obligatoire**.
- Investissement **brut** = net + renouvellement du capital usé.
- Déterminants : **demande anticipée** (esprits animaux de Keynes), **profit**, **taux d'intérêt**, coût relatif des facteurs, environnement et aides publiques.
- **Accélérateur** : $K = vY$, donc $I_{net} = v \times \Delta Y$ ; l'investissement varie plus fortement que la production.
- **Délai de récupération** : temps pour que le cumul des cash-flows rembourse $I_0$.
- $VAN = \sum CF_k (1+t)^{-k} - I_0$ ; projet accepté si $VAN > 0$ ; la VAN **baisse** quand le taux monte.
- **TRI** : taux qui annule la VAN.
- Maroc : **loi-cadre 03-22** (charte de l'investissement, 2022) : primes commune, territoriales et sectorielles, dispositifs pour projets stratégiques et TPME, rôle des CRI.
`,
    exercices: md`
### Exercice 2 — Le principe de l'accélérateur

Une cimenterie a un coefficient de capital $v = 3$. Elle remplace chaque année 20 millions de DH d'équipements usés. Production prévue (en millions de DH) :

| Année | 0 | 1 | 2 | 3 | 4 |
|---|---:|---:|---:|---:|---:|
| Production | 100 | 110 | 125 | 130 | 130 |

1. Calculez le capital nécessaire chaque année.
2. Calculez l'investissement net et l'investissement brut des années 1 à 4.
3. Comparez les variations de la production et de l'investissement. Que montre cet exemple ?

<details><summary>Voir le corrigé</summary>

| Année | 0 | 1 | 2 | 3 | 4 |
|---|---:|---:|---:|---:|---:|
| Production $Y$ | 100 | 110 | 125 | 130 | 130 |
| Capital $K = 3Y$ | 300 | 330 | 375 | 390 | 390 |
| Investissement net $\Delta K$ | — | 30 | 45 | 15 | 0 |
| Investissement brut (+ 20) | — | 50 | 65 | 35 | 20 |

**3)** De l'année 2 à l'année 3, la production continue d'augmenter (+ 4 %), mais l'investissement net chute de 45 à 15 (− 67 %). En année 4, la production se stabilise et l'investissement net s'annule : seul le renouvellement subsiste. Il suffit d'un **ralentissement** de la demande pour provoquer une **baisse** de l'investissement : l'accélérateur amplifie les fluctuations économiques.

</details>

### Exercice 3 — Choisir entre deux projets

Une imprimerie de Casablanca hésite entre deux machines coûtant chacune 500 000 DH, utilisables quatre ans sans valeur résiduelle. Taux d'actualisation : 8 %.

| Année | 1 | 2 | 3 | 4 |
|---|---:|---:|---:|---:|
| Machine A | 150 000 | 150 000 | 150 000 | 150 000 |
| Machine B | 100 000 | 150 000 | 200 000 | 250 000 |

1. Calculez le délai de récupération de chaque machine.
2. Calculez la VAN de chaque machine au taux de 8 %.
3. Quelle machine faut-il choisir ? Pourquoi le délai de récupération et la VAN conduisent-ils ici à la même décision, mais avec des écarts très différents ?

<details><summary>Voir le corrigé</summary>

**1)** Machine A : $500\,000 / 150\,000 \approx \mathbf{3{,}33}$ ans (3 ans et 4 mois). Machine B : cumul 100 000, 250 000, 450 000, 700 000 ; il manque 50 000 après 3 ans, récupérés sur les 250 000 de l'année 4 : $3 + 50\,000 / 250\,000 = \mathbf{3{,}2}$ ans.

**2)** Machine A : $150\,000 \times \dfrac{1 - 1{,}08^{-4}}{0{,}08} - 500\,000 \approx 496\,819 - 500\,000 = \mathbf{-3\,181}$ DH.

Machine B : $\dfrac{100\,000}{1{,}08} + \dfrac{150\,000}{1{,}08^2} + \dfrac{200\,000}{1{,}08^3} + \dfrac{250\,000}{1{,}08^4} - 500\,000 \approx 563\,717 - 500\,000 = \mathbf{+63\,717}$ DH.

**3)** Il faut choisir la **machine B**, la seule dont la VAN est positive. Les délais de récupération sont proches (3,33 et 3,2 ans), car ce critère ne regarde que la date à laquelle la mise est remboursée. La VAN tient compte de **tous** les flux et de leur date : les flux élevés de B en fin de période font la différence. La machine A, avec une VAN légèrement négative, rapporte un peu moins qu'un placement à 8 %.

</details>
`,
    qcm: [
      { q: "Un investissement destiné à produire davantage est un investissement :", choix: ["De renouvellement", "De capacité", "Financier", "Obligatoire"], bonne: 1, explication: "Il accroît les capacités de production." },
      { q: "En comptabilité nationale, l'investissement des entreprises est mesuré par :", choix: ["La FBCF", "Le PIB", "L'EBE", "La CAF"], bonne: 0, explication: "Formation brute de capital fixe." },
      { q: "L'achat d'un logiciel de gestion intégré est un investissement :", choix: ["Corporel", "Incorporel", "Financier", "De portefeuille"], bonne: 1, explication: "C'est un investissement immatériel." },
      { q: "Selon le principe de l'accélérateur, l'investissement net dépend :", choix: ["Du niveau de la production", "De la variation de la production", "Du taux d'impôt", "Du nombre de salariés"], bonne: 1, explication: "I net = v × variation de Y." },
      { q: "Une hausse du taux d'intérêt a pour effet :", choix: ["D'augmenter la VAN des projets", "De réduire la VAN des projets", "De ne rien changer", "D'augmenter le délai de récupération"], bonne: 1, explication: "Les flux futurs sont plus fortement actualisés." },
      { q: "Un projet est acceptable lorsque :", choix: ["Sa VAN est positive", "Sa VAN est négative", "Son délai de récupération dépasse sa durée de vie", "Son TRI est inférieur au taux d'actualisation"], bonne: 0, explication: "Il rapporte plus que le placement au taux d'actualisation." },
      { q: "Keynes attribue une partie des décisions d'investir aux :", choix: ["Esprits animaux", "Coûts de transaction", "Droits de propriété", "Économies d'échelle"], bonne: 0, explication: "La confiance des entrepreneurs dans l'avenir." },
      { q: "Investissement brut de 50 dont 20 de renouvellement : l'investissement net vaut :", choix: ["70", "30", "50", "20"], bonne: 1, explication: "50 − 20 = 30." },
      { q: "La charte de l'investissement en vigueur au Maroc est la loi-cadre :", choix: ["18-95", "03-22", "17-95", "69-21"], bonne: 1, explication: "Adoptée en 2022, elle remplace la charte de 1995." },
      { q: "Le principal défaut du délai de récupération est :", choix: ["Il est difficile à calculer", "Il ignore les flux postérieurs au remboursement", "Il dépend du taux d'impôt", "Il ne s'applique qu'aux grandes entreprises"], bonne: 1, explication: "Il ne mesure pas la rentabilité totale du projet." },
    ],
  },

  6: {
    titre: "Le financement de l'entreprise",
    description: "Besoins de financement, BFR, CAF et autofinancement, augmentation de capital, Bourse de Casablanca, emprunt, crédit-bail, Hicks et effet de levier.",
    resume: md`
## L'essentiel — Le financement

- Deux besoins : **investissement** (durable) et **exploitation** : $BFR = \text{stocks} + \text{créances d'exploitation} - \text{dettes d'exploitation}$.
- Règle d'équilibre : ressources durables pour les emplois durables.
- $CAF = RN + \text{dotations} - \text{reprises} - \text{produits de cession} + \text{VNA des actifs cédés}$.
- $\text{Autofinancement} = CAF - \text{dividendes}$ : indépendance, mais montant limité.
- **Fonds propres externes** : augmentation de capital (dilution), introduction à la **Bourse de Casablanca** (contrôle de l'**AMMC**), capital-investissement, subventions.
- **Endettement** : emprunt bancaire (garanties de **Tamwilcom**), emprunt obligataire, crédit-bail, crédits à court terme ; intérêts déductibles mais remboursement obligatoire.
- **Hicks (1974)** : économie d'**endettement** (crédit bancaire, financement indirect) contre économie de **marchés financiers** (titres, financement direct). Le Maroc reste dominé par les banques.
- $R_e = \dfrac{RE}{CP + D}$ ; $R_f = R_e + (R_e - i)\dfrac{D}{CP}$ (avant impôt), puis $\times (1 - \tau)$.
- $R_e > i$ : **effet de levier** ; $R_e < i$ : **effet de massue** ; $D/CP$ = bras de levier.
- Modigliani et Miller (1958) : sans impôts ni faillite, la structure financière n'affecte pas la valeur ; **financement hiérarchique** (Myers et Majluf, 1984) : autofinancement, puis dette, puis capital.
`,
    exercices: md`
### Exercice 2 — CAF, autofinancement et choix de financement

Atlas Logistique SA (Casablanca) présente, en milliers de DH : résultat net 450 ; dotations d'exploitation 300 ; dotations financières 20 ; reprises 30 ; produit de cession d'un camion 80 ; VNA du camion cédé 100. L'entreprise distribue 40 % de son résultat net.

1. Calculez la CAF et l'autofinancement.
2. L'entreprise veut acheter dix camions pour 1 400. Quel est le besoin de financement externe ?
3. Le directeur financier propose le crédit-bail. Expliquez le principe et deux avantages.
4. Dans quel type d'économie, selon Hicks, ce financement s'inscrit-il ?

<details><summary>Voir le corrigé</summary>

**1)** $CAF = 450 + 300 + 20 - 30 - 80 + 100 = \mathbf{760}$. Dividendes : $40\ \% \times 450 = 180$. Autofinancement : $760 - 180 = \mathbf{580}$.

La cession dégage une moins-value ($80 - 100 = -20$) : c'est une charge calculée qui ne réduit pas la trésorerie, d'où la neutralisation.

**2)** Besoin externe : $1\,400 - 580 = \mathbf{820}$.

**3)** Une société de crédit-bail achète les camions et les loue à Atlas Logistique contre des loyers, avec une option d'achat en fin de contrat. Avantages : aucun apport initial (la trésorerie est préservée), financement à 100 % du bien, loyers déductibles du résultat imposable, capacité d'emprunt bancaire préservée.

**4)** Le crédit-bail, comme le crédit bancaire, est un financement **intermédié** par un établissement financier : il relève de l'**économie d'endettement**.

</details>

### Exercice 3 — Trois structures de financement

Une entreprise engage 5 000 de capitaux et prévoit un résultat d'exploitation de 600. Elle hésite entre trois structures (taux d'intérêt de la dette : 8 %) :
- S1 : 5 000 de capitaux propres, aucune dette ;
- S2 : 2 500 de capitaux propres et 2 500 de dettes ;
- S3 : 1 000 de capitaux propres et 4 000 de dettes.

1. Calculez la rentabilité économique.
2. Calculez la rentabilité financière avant impôt de chaque structure, par le calcul direct et par la formule du levier.
3. Recalculez les rentabilités financières si le résultat d'exploitation tombe à 300. Concluez sur le risque.

<details><summary>Voir le corrigé</summary>

**1)** $R_e = 600 / 5\,000 = \mathbf{12\ \%}$.

**2)**

| Structure | Intérêts | Calcul direct | Formule du levier |
|---|---:|---|---|
| S1 | 0 | $600 / 5\,000 = \mathbf{12\ \%}$ | $12\ \% + 4\ \% \times 0 = 12\ \%$ |
| S2 | 200 | $400 / 2\,500 = \mathbf{16\ \%}$ | $12\ \% + 4\ \% \times 1 = 16\ \%$ |
| S3 | 320 | $280 / 1\,000 = \mathbf{28\ \%}$ | $12\ \% + 4\ \% \times 4 = 28\ \%$ |

Plus le bras de levier est élevé, plus la rentabilité financière augmente, tant que $R_e$ (12 %) dépasse $i$ (8 %).

**3)** $R_e = 300 / 5\,000 = 6\ \% < 8\ \%$.

| Structure | Calcul | $R_f$ |
|---|---|---:|
| S1 | $300 / 5\,000$ | **6 %** |
| S2 | $(300 - 200) / 2\,500$ | **4 %** |
| S3 | $(300 - 320) / 1\,000$ | **− 2 %** |

La structure la plus endettée, la plus rentable en bonne année, devient déficitaire en mauvaise année : l'endettement accroît le **risque financier**. Le choix dépend de la stabilité attendue du résultat d'exploitation.

</details>
`,
    qcm: [
      { q: "La CAF se calcule à partir du résultat net en :", choix: ["Retranchant les dotations", "Ajoutant les dotations et en neutralisant les cessions", "Ajoutant les dividendes", "Retranchant les charges de personnel"], bonne: 1, explication: "Les dotations sont des charges non décaissées." },
      { q: "L'autofinancement est égal à :", choix: ["La CAF moins les dividendes", "Le résultat net plus les dividendes", "La CAF plus les emprunts", "L'EBE moins les salaires"], bonne: 0, explication: "C'est la part de la CAF conservée dans l'entreprise." },
      { q: "L'augmentation de capital présente l'inconvénient de :", choix: ["Créer des charges d'intérêts", "Diluer le pouvoir des anciens actionnaires", "Devoir être remboursée", "Augmenter le BFR"], bonne: 1, explication: "De nouveaux actionnaires entrent au capital." },
      { q: "Au Maroc, le marché boursier est contrôlé par :", choix: ["Bank Al-Maghrib", "L'AMMC", "Le Conseil de la concurrence", "L'OMPIC"], bonne: 1, explication: "Autorité marocaine du marché des capitaux." },
      { q: "Dans une économie d'endettement au sens de Hicks, les entreprises se financent surtout par :", choix: ["L'émission d'actions", "Le crédit bancaire", "Les subventions", "L'autofinancement exclusivement"], bonne: 1, explication: "C'est un financement indirect, intermédié." },
      { q: "L'effet de levier est positif lorsque :", choix: ["La rentabilité économique dépasse le taux d'intérêt", "Le taux d'intérêt dépasse la rentabilité économique", "L'entreprise n'a pas de dette", "Les dividendes augmentent"], bonne: 0, explication: "L'argent emprunté rapporte plus qu'il ne coûte." },
      { q: "Re = 10 %, i = 6 %, D/CP = 2. La rentabilité financière avant impôt vaut :", choix: ["14 %", "18 %", "10 %", "22 %"], bonne: 1, explication: "10 + (10 − 6) × 2 = 18 %." },
      { q: "Le crédit-bail permet à l'entreprise :", choix: ["D'utiliser un bien sans l'acheter immédiatement", "D'émettre des obligations", "D'augmenter son capital", "De réduire son effectif"], bonne: 0, explication: "Elle loue le bien avec une option d'achat." },
      { q: "Selon la théorie du financement hiérarchique, la première source préférée est :", choix: ["L'augmentation de capital", "L'autofinancement", "L'emprunt obligataire", "Le découvert bancaire"], bonne: 1, explication: "Myers et Majluf, 1984." },
      { q: "Le besoin en fonds de roulement se finance normalement par :", choix: ["Des ressources liées au cycle d'exploitation et au fonds de roulement", "Des augmentations de capital chaque mois", "Des subventions d'investissement uniquement", "La vente des immobilisations"], bonne: 0, explication: "Il naît du décalage entre décaissements et encaissements d'exploitation." },
    ],
  },

  7: {
    titre: "La croissance de l'entreprise et la concentration",
    description: "Mesures de la croissance, croissance interne, externe et contractuelle, fusions, intégration verticale, groupes, CR4, indice HHI et Conseil de la concurrence.",
    resume: md`
## L'essentiel — Croissance et concentration

- Indicateurs de taille : CA, **valeur ajoutée**, effectif, total du bilan, part de marché, capitalisation boursière.
- Taux de croissance annuel moyen : $g = (V_{fin}/V_{début})^{1/n} - 1$.
- **Penrose (1959)** : la croissance est limitée par les ressources managériales.
- Motifs : **économies d'échelle** et **d'envergure**, pouvoir de marché, réduction des risques, sécurisation, objectifs des dirigeants.
- **Interne** (investissements propres), **externe** (fusion-absorption, fusion-création, prise de participation, OPA, OPE, apport partiel d'actifs), **contractuelle** (franchise, sous-traitance, licence, coentreprise).
- Directions : **horizontale** (même produit), **verticale** (amont ou aval de la filière), **conglomérale** (activités sans lien).
- Loi 17-95 : **filiale** si plus de 50 % du capital ; **participation** entre 10 % et 50 % ; contrôle en cascade.
- $CR_4$ = somme des parts des 4 premières ; $HHI = \sum s_i^2$ (de 0 à 10 000) ; fusion : $\Delta HHI = 2 s_a s_b$.
- Repères européens (2004) : HHI < 1 000 peu préoccupant ; au-delà de 2 000, examen probable si la hausse dépasse 150.
- **Conseil de la concurrence** (article 166 de la Constitution, loi 104-12 modifiée par la loi 40-21) : ententes, abus de position dominante, contrôle des concentrations.
`,
    exercices: md`
### Exercice 2 — Qualifier des opérations de croissance

Pour chaque opération, indiquez la modalité (interne, externe ou contractuelle) et la direction (horizontale, verticale amont, verticale aval ou conglomérale) :
1. une laiterie construit une deuxième usine à Fquih Ben Salah ;
2. une banque absorbe une autre banque ;
3. un groupe de distribution rachète une entreprise de production de jus de fruits qu'il vend dans ses magasins ;
4. une société de BTP prend le contrôle d'une compagnie d'assurances ;
5. une chaîne de restauration rapide accorde des franchises dans dix villes ;
6. un producteur d'engrais rachète une société de distribution d'engrais aux agriculteurs.

<details><summary>Voir le corrigé</summary>

| Opération | Modalité | Direction |
|---|---|---|
| 1. Deuxième usine | Interne | Horizontale (extension de la même activité) |
| 2. Absorption d'une banque | Externe (fusion-absorption) | Horizontale |
| 3. Distributeur qui rachète un producteur | Externe (prise de contrôle) | **Verticale amont** (vers le fournisseur) |
| 4. BTP et assurance | Externe (prise de contrôle) | **Conglomérale** |
| 5. Franchises | Contractuelle | Horizontale (réseau de points de vente) |
| 6. Producteur qui rachète un distributeur | Externe | **Verticale aval** (vers le client) |

</details>

### Exercice 3 — Mesurer la concentration et les liens de groupe

**Partie A.** Trois marchés :
- marché A : quatre entreprises de 25 % chacune ;
- marché B : une entreprise de 70 % et trois de 10 % ;
- marché C : dix entreprises de 10 % chacune.

1. Calculez le $CR_4$ et le HHI de chaque marché.
2. Les marchés A et B ont le même $CR_4$ : lequel est le plus concentré ? Pourquoi le HHI est-il plus informatif ?

**Partie B.** La société M détient 80 % de F1 et 30 % de F2 ; F1 détient 40 % de F2.

3. Qualifiez les liens de M avec F1 et avec F2. M contrôle-t-elle F2 ?
4. Calculez le pourcentage d'intérêt de M dans F2.

<details><summary>Voir le corrigé</summary>

**1)**

| Marché | $CR_4$ | HHI |
|---|---:|---:|
| A | 100 % | $4 \times 25^2 = \mathbf{2\,500}$ |
| B | 100 % | $70^2 + 3 \times 10^2 = 4\,900 + 300 = \mathbf{5\,200}$ |
| C | 40 % | $10 \times 10^2 = \mathbf{1\,000}$ |

**2)** Le marché B est beaucoup plus concentré : une entreprise y domine (70 %). Le $CR_4$ ne voit pas la différence (100 % dans les deux cas) ; le HHI, en élevant les parts au carré, donne plus de poids aux grandes entreprises et mesure l'**inégalité** des parts.

**3)** M → F1 (80 %) : F1 est une **filiale**. M → F2 (30 %) : **participation** directe. Mais M contrôle aussi, par sa filiale F1, 40 % des droits de F2 : au total, M dispose de $30\ \% + 40\ \% = 70\ \%$ des droits de vote de F2, qu'elle **contrôle** donc.

**4)** Pourcentage d'intérêt : $30\ \% + 80\ \% \times 40\ \% = 30\ \% + 32\ \% = \mathbf{62\ \%}$. M contrôle 70 % des votes de F2 mais n'a droit qu'à 62 % de ses bénéfices.

</details>
`,
    qcm: [
      { q: "Une fusion entre deux cimentiers est une concentration :", choix: ["Horizontale", "Verticale", "Conglomérale", "Contractuelle"], bonne: 0, explication: "Les deux entreprises fabriquent le même produit." },
      { q: "Un distributeur qui rachète l'un de ses fournisseurs réalise une intégration :", choix: ["En aval", "En amont", "Conglomérale", "Horizontale"], bonne: 1, explication: "Il remonte la filière vers la production." },
      { q: "La franchise est une forme de croissance :", choix: ["Interne", "Externe", "Contractuelle", "Conglomérale"], bonne: 2, explication: "Les franchisés restent juridiquement indépendants." },
      { q: "Selon la loi 17-95, une société détenue à plus de 50 % est :", choix: ["Une participation", "Une filiale", "Une coentreprise", "Une succursale"], bonne: 1, explication: "La détention entre 10 % et 50 % est une participation." },
      { q: "Le HHI d'un monopole vaut :", choix: ["100", "1 000", "10 000", "1"], bonne: 2, explication: "100 au carré." },
      { q: "Deux entreprises de 20 % et 15 % fusionnent. Le HHI augmente de :", choix: ["35", "300", "600", "1 225"], bonne: 2, explication: "2 × 20 × 15 = 600." },
      { q: "Le principal avantage de la croissance externe par rapport à la croissance interne est :", choix: ["Sa rapidité", "Son faible coût", "L'absence de problèmes d'intégration", "La création de capacités nouvelles"], bonne: 0, explication: "Elle acquiert des capacités qui existent déjà." },
      { q: "Les économies d'échelle signifient que :", choix: ["Le coût moyen baisse quand la production augmente", "Les prix augmentent avec la taille", "L'entreprise réduit ses effectifs", "Les salaires baissent"], bonne: 0, explication: "Les coûts fixes sont répartis sur un plus grand volume." },
      { q: "Au Maroc, le contrôle des opérations de concentration relève :", choix: ["De l'AMMC", "Du Conseil de la concurrence", "Du HCP", "De l'OMPIC"], bonne: 1, explication: "Loi 104-12 relative à la liberté des prix et de la concurrence." },
      { q: "Le chiffre d'affaires passe de 100 à 121 en deux ans. Le taux de croissance annuel moyen est :", choix: ["10,5 %", "10 %", "21 %", "11 %"], bonne: 1, explication: "La racine carrée de 1,21 vaut 1,1." },
    ],
  },

  8: {
    titre: "Innovation et internationalisation de l'entreprise",
    description: "Schumpeter et les cinq types d'innovation, destruction créatrice, R&D et brevets OMPIC, modes d'internationalisation, IDE, cycle de Vernon et paradigme OLI.",
    resume: md`
## L'essentiel — Innovation et internationalisation

- **Schumpeter** : l'entrepreneur innovateur rompt la routine et obtient un profit temporaire ; **cinq types** d'innovation : produit, procédé, débouché, matière première, organisation.
- **Destruction créatrice** (1942), innovations en **grappes**, cycles longs (Kondratiev).
- **Invention** (découverte) → **innovation** (application économique) → **diffusion** ; innovation **incrémentale** ou **radicale**.
- R&D (manuel de Frascati) : recherche fondamentale, appliquée, développement expérimental ; intensité de R&D = dépenses de R&D / CA.
- **Brevet** : monopole temporaire contre publication ; au Maroc, **OMPIC**, loi 17-97, **20 ans**.
- Motifs d'internationalisation : débouchés, coûts, ressources, contournement des obstacles, suivi des clients.
- Modes : exportation indirecte, directe, **licence** et franchise, **coentreprise**, **IDE** (création ou acquisition).
- **IDE** : intérêt durable, au moins **10 %** du capital ; **FMN** : unités de production dans plusieurs pays.
- **Vernon (1966)** : lancement, croissance, **maturité et standardisation** (délocalisation vers les pays à bas coûts).
- **Dunning (OLI)** : avantages spécifiques (**O**), de **L**ocalisation, d'**I**nternalisation. Maroc : pays d'accueil (automobile à Tanger et Kénitra) et d'origine (banques, télécoms, engrais en Afrique).
`,
    exercices: md`
### Exercice 2 — Schumpeter et Vernon

1. Classez selon les cinq types de Schumpeter : (a) une coopérative de safran de Taliouine qui commence à vendre en ligne à des clients européens ; (b) une usine textile qui remplace ses métiers à tisser par des machines numériques ; (c) une banque qui crée une application de paiement mobile ; (d) un fabricant de briques qui utilise des déchets de construction recyclés ; (e) une entreprise qui supprime deux niveaux hiérarchiques et organise le travail en équipes autonomes.
2. Expliquez la notion de destruction créatrice à partir de l'exemple (c).
3. Le téléviseur à écran plat a d'abord été produit au Japon et en Corée, puis assemblé dans de nombreux pays à bas coûts. Décrivez ce parcours avec le cycle de vie international du produit.

<details><summary>Voir le corrigé</summary>

**1)** (a) **Nouveau débouché** (et innovation commerciale) ; (b) **nouvelle méthode de production** ; (c) **nouveau produit** (ou service) ; (d) **nouvelle source de matières premières** ; (e) **nouvelle organisation**.

**2)** L'application de paiement mobile crée de nouvelles activités (développeurs, services numériques, commerçants équipés) et en réduit d'autres (manipulation d'espèces, guichets, certaines agences). Les emplois et les entreprises liés à l'ancienne technique reculent pendant que de nouveaux apparaissent : c'est la destruction créatrice.

**3)** **Lancement** : le produit est conçu et fabriqué dans les pays innovateurs (Japon, Corée), où se trouvent les ingénieurs et les premiers acheteurs. **Croissance** : il est exporté vers les autres pays riches. **Maturité et standardisation** : la technologie se banalise, la concurrence porte sur le prix, l'assemblage est délocalisé dans des pays à bas coûts qui exportent ensuite vers les pays d'origine.

</details>

### Exercice 3 — IDE ou portefeuille ? Intégration locale

**Partie A.** Indiquez s'il s'agit d'un investissement direct étranger ou d'un investissement de portefeuille :
1. un fonds de pension américain achète 3 % des actions d'une banque cotée à Casablanca ;
2. un groupe espagnol acquiert 35 % du capital d'une chaîne hôtelière marocaine et obtient trois sièges au conseil d'administration ;
3. un équipementier allemand construit une usine à Kénitra, détenue à 100 % ;
4. un groupe marocain prend 51 % d'une banque d'Afrique de l'Ouest.

**Partie B.** Une filiale automobile installée à Tanger achète pour 400 millions de DH de composants par an, dont 180 millions auprès de fournisseurs installés au Maroc. Son chiffre d'affaires est de 900 millions de DH, dont 810 à l'export.

5. Calculez le taux d'intégration locale des achats et le taux d'exportation.
6. Pourquoi les pouvoirs publics cherchent-ils à augmenter le taux d'intégration locale ?

<details><summary>Voir le corrigé</summary>

**1)** Portefeuille : 3 % < 10 %, sans influence sur la gestion.
**2)** **IDE** : 35 % ≥ 10 % et influence durable (sièges au conseil).
**3)** **IDE** de création (*greenfield*).
**4)** **IDE** sortant du Maroc (acquisition avec prise de contrôle).

**5)** Taux d'intégration locale : $180 / 400 = \mathbf{45\ \%}$. Taux d'exportation : $810 / 900 = \mathbf{90\ \%}$.

**6)** Plus les composants sont achetés au Maroc, plus la **valeur ajoutée** et les **emplois** créés localement sont importants, et moins les exportations s'accompagnent d'importations. L'intégration locale favorise aussi la diffusion des savoir-faire vers les fournisseurs marocains et réduit la dépendance à l'égard de la société mère.

</details>
`,
    qcm: [
      { q: "La destruction créatrice est une notion de :", choix: ["Keynes", "Schumpeter", "Coase", "Vernon"], bonne: 1, explication: "Capitalisme, socialisme et démocratie, 1942." },
      { q: "L'ouverture d'un nouveau marché à l'export est, selon Schumpeter, une innovation de :", choix: ["Produit", "Procédé", "Débouché", "Organisation"], bonne: 2, explication: "C'est l'un de ses cinq types d'innovation." },
      { q: "La différence entre invention et innovation est que l'innovation :", choix: ["Est toujours brevetée", "Est l'application économique d'une idée nouvelle", "Est réalisée par l'État", "Est forcément radicale"], bonne: 1, explication: "Une invention non exploitée n'est pas une innovation." },
      { q: "Au Maroc, les brevets d'invention sont délivrés par :", choix: ["L'AMMC", "L'OMPIC", "Le HCP", "Le Conseil de la concurrence"], bonne: 1, explication: "Office marocain de la propriété industrielle et commerciale." },
      { q: "La durée de protection d'un brevet est de :", choix: ["5 ans", "10 ans", "20 ans", "50 ans"], bonne: 2, explication: "À compter de la date de dépôt." },
      { q: "Par convention, un investissement direct étranger suppose la détention d'au moins :", choix: ["1 % du capital", "10 % du capital", "50 % du capital", "100 % du capital"], bonne: 1, explication: "En dessous, il s'agit d'un investissement de portefeuille." },
      { q: "Dans le cycle de Vernon, la délocalisation vers les pays à bas coûts intervient lors de la phase de :", choix: ["Lancement", "Croissance", "Maturité et standardisation", "Recherche"], bonne: 2, explication: "La concurrence porte alors sur les coûts." },
      { q: "Dans le paradigme OLI, le I désigne l'avantage :", choix: ["D'innovation", "D'internalisation", "D'investissement", "D'information"], bonne: 1, explication: "Il explique le choix de l'IDE plutôt que de la licence." },
      { q: "Céder à une entreprise étrangère le droit d'exploiter un brevet contre redevance est :", choix: ["Un IDE", "Une licence", "Une fusion", "Une exportation indirecte"], bonne: 1, explication: "C'est un mode d'internationalisation sans investissement." },
      { q: "Une entreprise dépense 12 millions de DH en R&D pour un chiffre d'affaires de 400 millions. Son intensité de R&D est de :", choix: ["0,3 %", "3 %", "12 %", "33 %"], bonne: 1, explication: "12 / 400 = 3 %." },
    ],
  },
};

export default chapitres;
