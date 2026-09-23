// Introduction aux Sciences de Gestion (S1) — compléments par chapitre.
const md = String.raw;

export default {
  1: {
    titre: "Qu'est-ce que la gestion ?",
    resume: md`
## L'essentiel — La gestion

- La **gestion** combine des **ressources rares** (humaines, financières, matérielles, informationnelles) pour atteindre des **objectifs** dans un environnement incertain.
- **Management** : dimension humaine et stratégique ; **gestion** : dimension technique et opérationnelle.
- L'objet des sciences de gestion est l'**organisation** : entreprise privée, entreprise publique, association, coopérative, administration.
- Discipline **carrefour** : économie, droit, sociologie, psychologie, mathématiques.
- Branches : comptabilité et contrôle, finance, marketing, GRH, stratégie, systèmes d'information et logistique.
- Science de l'**action**, **normative** : méthodes de l'étude de cas, de l'enquête, de la modélisation, de la recherche-intervention.
`,
    exercices: md`
### Exercice 2 — Organisations et branches de la gestion

1. Classez selon le type d'organisation et sa finalité dominante : a) une coopérative d'argan ; b) l'ONCF ; c) une association d'aide scolaire ; d) une PME textile ; e) une commune.
2. À quelle branche des sciences de gestion rattacher chaque question ? a) Faut-il financer la machine par emprunt ou par crédit-bail ? b) Combien coûte réellement un produit ? c) Comment fidéliser les clients ? d) Comment réduire l'absentéisme ?

<details><summary>Voir le corrigé</summary>

**1)** a) **coopérative** : intérêt collectif des membres ; b) **entreprise ou établissement public** : service public et équilibre financier ; c) **association** : utilité sociale non lucrative ; d) **entreprise privée** : profit et pérennité ; e) **administration publique** : mission de service public.

**2)** a) **finance** ; b) **comptabilité et contrôle** ; c) **marketing** ; d) **GRH**.

</details>
`,
    qcm: [
      { q: "La gestion consiste à :", choix: ["Produire le plus possible", "Combiner des ressources rares pour atteindre des objectifs", "Tenir la comptabilité uniquement", "Faire de la publicité"], bonne: 1, explication: "Dans un environnement incertain." },
      { q: "L'objet des sciences de gestion est :", choix: ["L'entreprise privée uniquement", "L'organisation sous toutes ses formes", "Le marché mondial", "L'État seul"], bonne: 1, explication: "Associations, administrations et coopératives comprises." },
      { q: "Le management insiste sur la dimension :", choix: ["Technique et comptable", "Humaine et stratégique", "Fiscale", "Juridique"], bonne: 1, explication: "La gestion insiste sur la dimension technique." },
      { q: "La méthode dominante en examen de gestion est :", choix: ["L'étude de cas", "L'expérience de laboratoire", "Le sondage national", "La démonstration mathématique"], bonne: 0, explication: "On analyse une organisation réelle." },
      { q: "Une coopérative poursuit principalement :", choix: ["Le profit des actionnaires", "L'intérêt collectif de ses membres", "Le service public", "L'utilité sociale non lucrative"], bonne: 1, explication: "Au Maroc, régie par la loi 112-12." },
    ],
  },

  2: {
    titre: "L'entreprise : définition, finalités et classifications",
    resume: md`
## L'essentiel — L'entreprise

- Trois approches : **économique** (unité de production), **sociale** (lieu de rapports sociaux), **systémique** (système ouvert : entrées → transformation → sorties → rétroaction).
- Sous-systèmes : **opérant**, **de pilotage**, **d'information**.
- **Finalité** (durable, qualitative, non chiffrée) ≠ **objectif** (daté, chiffré, **SMART**).
- Finalités : économique (profit, **pérennité**), sociale (emploi, formation), sociétale (territoire, environnement).
- Classifications : par **secteur** (primaire, secondaire, tertiaire), par **taille** (TPE, PME, grandes entreprises ; plus de 90 % de TPME au Maroc), par **forme juridique** (entreprise individuelle, SNC, SARL, SA, coopérative).
`,
    exercices: md`
### Exercice 2 — Finalités, objectifs et classement

1. Finalité ou objectif ? a) « Être le leader du lait bio au Maroc » ; b) « Ouvrir 5 points de vente à Rabat avant juin 2026 » ; c) « Contribuer au développement de notre région » ; d) « Réduire de 10 % la consommation d'eau de l'usine d'ici la fin de l'année ».
2. Classez par secteur : une mine de phosphate ; une usine automobile à Tanger ; une banque ; un centre d'appels ; une exploitation d'agrumes.
3. Deux associés veulent créer une entreprise en limitant leur responsabilité et avec un petit capital. Quelle forme leur conseiller ?

<details><summary>Voir le corrigé</summary>

**1)** a) **finalité** ; b) **objectif** ; c) **finalité** ; d) **objectif**.

**2)** Primaire : mine de phosphate, exploitation d'agrumes. Secondaire : usine automobile. Tertiaire : banque, centre d'appels.

**3)** Une **SARL** : capital librement fixé et responsabilité limitée aux apports.

</details>
`,
    qcm: [
      { q: "Dans l'approche systémique, l'entreprise est :", choix: ["Un système fermé", "Un système ouvert en échange avec son environnement", "Un simple lieu de conflits", "Une machine à profit uniquement"], bonne: 1, explication: "Entrées, transformation, sorties, rétroaction." },
      { q: "Un objectif, contrairement à une finalité, est :", choix: ["Vague et durable", "Daté et chiffré", "Toujours social", "Fixé par l'État"], bonne: 1, explication: "Règle SMART." },
      { q: "Une banque appartient au secteur :", choix: ["Primaire", "Secondaire", "Tertiaire", "Quaternaire obligatoire"], bonne: 2, explication: "Secteur des services." },
      { q: "Selon Drucker, la finalité économique première de l'entreprise est :", choix: ["Le profit immédiat", "La survie et la pérennité", "La croissance du CA", "La baisse des prix"], bonne: 1, explication: "La pérennité prime sur le profit immédiat." },
      { q: "Le sous-système qui décide et contrôle est le sous-système :", choix: ["Opérant", "De pilotage", "D'information", "Commercial"], bonne: 1, explication: "Le sous-système d'information relie les deux autres." },
    ],
  },

  3: {
    titre: "L'environnement de l'entreprise",
    resume: md`
## L'essentiel — L'environnement

- **Environnement** : éléments extérieurs qui influencent l'entreprise, sur lesquels elle a peu de pouvoir.
- **Micro-environnement** (clients, fournisseurs, concurrents, banques) : l'entreprise peut négocier ; **macro-environnement** : elle doit s'adapter.
- **PESTEL** : politique, économique, socioculturel, technologique, écologique, légal.
- **Parties prenantes** internes (actionnaires, dirigeants, salariés) et externes (clients, fournisseurs, banques, État, société civile), aux attentes souvent **contradictoires**.
- Relations d'**interdépendance** : l'entreprise subit et influence son environnement.
- Environnement stable → structure **mécaniste** ; turbulent → structure **organique** (contingence).
`,
    exercices: md`
### Exercice 2 — Diagnostic d'une coopérative agricole

Une coopérative de dattes de la région de Zagora fait face à : la sécheresse ; un nouveau programme public de soutien aux coopératives ; l'essor du e-commerce ; l'obligation de nouvelles normes d'étiquetage ; la hausse du pouvoir d'achat urbain ; la hausse du prix du carburant.

1. Classez ces éléments dans le PESTEL.
2. Identifiez trois parties prenantes de la coopérative et leurs attentes.
3. Ces attentes peuvent-elles entrer en conflit ? Donnez un exemple.

<details><summary>Voir le corrigé</summary>

**1)** Sécheresse : **écologique** ; programme public : **politique** ; e-commerce : **technologique** ; normes d'étiquetage : **légal** ; pouvoir d'achat urbain : **socioculturel / économique** ; prix du carburant : **économique**.

**2)** Membres producteurs : un bon prix de rachat des dattes ; clients : qualité et prix bas ; État : respect des normes, emplois ruraux ; banque : remboursement des crédits.

**3)** Oui : les membres veulent un prix de rachat élevé, alors que les clients veulent des prix de vente bas ; la direction doit arbitrer.

</details>
`,
    qcm: [
      { q: "Les concurrents font partie :", choix: ["Du macro-environnement", "Du micro-environnement", "De l'environnement interne", "Du PESTEL"], bonne: 1, explication: "L'entreprise peut agir sur eux." },
      { q: "Dans PESTEL, le stress hydrique relève du facteur :", choix: ["Politique", "Social", "Écologique", "Légal"], bonne: 2, explication: "Ressources naturelles et climat." },
      { q: "Les salariés sont des parties prenantes :", choix: ["Internes", "Externes", "Neutres", "Juridiques"], bonne: 0, explication: "Avec les dirigeants et les actionnaires." },
      { q: "Dans un environnement turbulent, la structure adaptée est plutôt :", choix: ["Mécaniste", "Organique et souple", "Bureaucratique", "Inexistante"], bonne: 1, explication: "Burns et Stalker." },
      { q: "La gouvernance d'entreprise consiste à :", choix: ["Fixer les prix", "Arbitrer entre les attentes des parties prenantes", "Tenir la comptabilité", "Recruter"], bonne: 1, explication: "Actionnaires, salariés, clients, État…" },
    ],
  },

  4: {
    titre: "L'évolution de la pensée managériale",
    resume: md`
## L'essentiel — Les écoles de pensée

- **École classique** (one best way, homme économique) : **Taylor** (OST, division verticale et horizontale), **Fayol** (POCCC, unité de commandement), **Weber** (bureaucratie), **Ford** (chaîne, standardisation).
- **Relations humaines** : **Mayo** (effet Hawthorne, groupe informel), **Maslow** (pyramide), **Herzberg** (hygiène / moteurs), **McGregor** (X et Y), **Lewin** (styles), **Likert** (4 systèmes).
- **Approches modernes** : systémique, **Simon** (rationalité limitée), sociotechnique, **contingence** (Burns et Stalker, Woodward, Lawrence et Lorsch, Mintzberg), agence, coûts de transaction (**Coase**, Williamson).
- Fil rouge : du **« one best way »** universel au **« ça dépend »** contingent.
`,
    exercices: md`
### Exercice 2 — Reconnaître l'école de pensée

Rattachez chaque pratique à un auteur et à une école :

1. Un atelier chronomètre chaque geste des ouvriers et paie à la pièce.
2. Un manager confie davantage de responsabilités à ses collaborateurs pour les motiver.
3. Un directeur choisit le premier fournisseur « suffisamment bon » faute de temps pour tout comparer.
4. Une entreprise se demande si elle doit fabriquer ses emballages ou les acheter.
5. Chaque salarié ne reçoit d'ordres que d'un seul chef.

<details><summary>Voir le corrigé</summary>

1. **Taylor** — école classique (OST, salaire au rendement).
2. **Herzberg** (enrichissement des tâches) ou **McGregor** (théorie Y) — relations humaines.
3. **Simon** — rationalité limitée (approche décisionnelle).
4. **Coase / Williamson** — coûts de transaction (faire ou faire faire).
5. **Fayol** — unité de commandement (école classique).

</details>
`,
    qcm: [
      { q: "POCCC est associé à :", choix: ["Taylor", "Fayol", "Mayo", "Simon"], bonne: 1, explication: "Prévoir, organiser, commander, coordonner, contrôler." },
      { q: "L'effet Hawthorne montre que :", choix: ["Seul le salaire motive", "L'attention portée aux salariés augmente la productivité", "La chaîne est efficace", "La bureaucratie est idéale"], bonne: 1, explication: "Expériences d'Elton Mayo." },
      { q: "La théorie X de McGregor suppose que l'homme :", choix: ["Aime naturellement travailler", "Fuit le travail et doit être contrôlé", "Recherche l'accomplissement", "Est rationnel limité"], bonne: 1, explication: "La théorie Y suppose l'inverse." },
      { q: "Selon la théorie de la contingence :", choix: ["Il existe une structure idéale", "La structure dépend du contexte", "Il faut toujours centraliser", "L'environnement ne compte pas"], bonne: 1, explication: "Taille, technologie, environnement." },
      { q: "Weber a théorisé :", choix: ["Le fordisme", "La bureaucratie rationnelle-légale", "La pyramide des besoins", "La chaîne de valeur"], bonne: 1, explication: "Règles impersonnelles, hiérarchie, compétence." },
    ],
  },

  5: {
    titre: "Les grandes fonctions de l'entreprise",
    resume: md`
## L'essentiel — Les fonctions de l'entreprise

- **Fayol** : six fonctions — technique, commerciale, financière, sécurité, comptable, **administrative** (POCCC).
- Fonctions actuelles : achats, production, logistique, marketing et vente, GRH, finance et comptabilité, systèmes d'information, R&D et qualité, chacune avec ses indicateurs.
- **Chaîne de valeur** (Porter) : activités principales (logistique interne, production, logistique externe, commercialisation, services) et de soutien (infrastructure, GRH, R&D, approvisionnements) ; $\text{marge} = \text{valeur perçue} - \text{coût des activités}$.
- Trois **flux** : physiques, financiers, d'information.
`,
    exercices: md`
### Exercice 2 — Fonctions, indicateurs et flux

1. Associez chaque indicateur à une fonction : a) taux de rupture de stock ; b) taux de rebut ; c) turnover ; d) part de marché ; e) niveau de trésorerie ; f) nombre de nouveaux produits lancés.
2. Une entreprise achète à crédit des tissus pour 50 000 DH. Identifiez les flux générés par cette opération.

<details><summary>Voir le corrigé</summary>

**1)** a) **logistique / approvisionnement** ; b) **production** ; c) **GRH** ; d) **marketing et vente** ; e) **finance** ; f) **R&D**.

**2)** Un **flux physique** (entrée des tissus), un **flux d'information** (bon de commande, bon de livraison, facture) et, à terme, un **flux financier** (paiement du fournisseur) ; dans l'immédiat, une dette fournisseur de 50 000 DH.

</details>
`,
    qcm: [
      { q: "Pour Fayol, la fonction la plus importante est la fonction :", choix: ["Technique", "Commerciale", "Administrative", "Comptable"], bonne: 2, explication: "C'est la fonction de management (POCCC)." },
      { q: "Dans la chaîne de valeur, la production est une activité :", choix: ["De soutien", "Principale", "Externe", "Financière"], bonne: 1, explication: "Comme la logistique et la commercialisation." },
      { q: "Le paiement d'un fournisseur est un flux :", choix: ["Physique", "Financier", "D'information", "Humain"], bonne: 1, explication: "Mouvement d'argent." },
      { q: "Le turnover est un indicateur de la fonction :", choix: ["Marketing", "GRH", "Production", "Logistique"], bonne: 1, explication: "Il mesure la rotation du personnel." },
      { q: "Selon Porter, la marge est égale à :", choix: ["CA − impôts", "Valeur perçue − coût total des activités", "Prix − TVA", "Résultat net"], bonne: 1, explication: "C'est là que naît l'avantage concurrentiel." },
    ],
  },

  6: {
    titre: "Le processus de management et la décision",
    resume: md`
## L'essentiel — Management et décision

- Cycle **PODC** : planifier, organiser, diriger, contrôler ; le contrôle **reboucle** sur la planification (rétroaction, roue de Deming **PDCA**).
- $\text{Écart} = \text{réalisation} - \text{prévision}$.
- Niveaux de décision (**Ansoff**) : **stratégique** (long terme, peu réversible), **tactique** (moyen terme, allocation des ressources), **opérationnel** (court terme, courant).
- Modèle **IMC** de Simon : **I**ntelligence (problème, information), **M**odélisation (solutions), **C**hoix.
- **Rationalité limitée** : on choisit une solution **satisfaisante**, pas optimale.
- Critères : degré de certitude (certain, aléatoire, incertain), fréquence (programmable ou non), participation (individuelle ou collégiale).
`,
    exercices: md`
### Exercice 2 — Classer des décisions

Une chaîne de pharmacies prend les décisions suivantes : a) racheter un réseau concurrent à Marrakech ; b) commander chaque semaine des médicaments selon le stock ; c) recruter trois pharmaciens pour les nouvelles officines ; d) choisir de s'implanter en Mauritanie sans aucune donnée sur ce marché.

1. Classez chaque décision selon le niveau d'Ansoff.
2. Classez-les selon la fréquence (programmable ou non) et selon le degré de certitude.
3. Pour la décision a), décrivez les trois étapes du modèle IMC.

<details><summary>Voir le corrigé</summary>

**1)** a) **stratégique** ; b) **opérationnelle** ; c) **tactique** ; d) **stratégique**.

**2)** b) est **programmable** (répétitive), les autres sont non programmables. b) se prend en avenir quasi **certain** ; a) et c) en avenir **aléatoire** ; d) en avenir **incertain** (aucune probabilité connue).

**3)** **Intelligence** : constater le besoin de croissance, réunir des informations sur le réseau à racheter ; **modélisation** : comparer les options (rachat, création d'officines, partenariat) ; **choix** : décider, mettre en œuvre et contrôler les résultats.

</details>
`,
    qcm: [
      { q: "Dans PODC, le « C » signifie :", choix: ["Communiquer", "Contrôler", "Coordonner", "Commander"], bonne: 1, explication: "Comparer les réalisations aux objectifs." },
      { q: "Une commande hebdomadaire de réapprovisionnement est une décision :", choix: ["Stratégique", "Tactique", "Opérationnelle", "Politique"], bonne: 2, explication: "Court terme, répétitive." },
      { q: "Le modèle IMC est dû à :", choix: ["Fayol", "Simon", "Ansoff", "Porter"], bonne: 1, explication: "Intelligence, modélisation, choix." },
      { q: "Selon la rationalité limitée, le décideur choisit :", choix: ["La solution optimale", "La première solution satisfaisante", "Au hasard", "La solution la plus chère"], bonne: 1, explication: "Principe de « satisficing »." },
      { q: "Une décision en avenir incertain est une décision où :", choix: ["Tout est connu", "Les probabilités sont connues", "Les probabilités ne sont pas connues", "Rien ne peut être décidé"], bonne: 2, explication: "En avenir aléatoire, elles sont connues." },
    ],
  },

  7: {
    titre: "Les structures organisationnelles",
    resume: md`
## L'essentiel — Les structures

- La **structure** répartit les tâches, distribue le pouvoir et coordonne les activités ; elle se représente par l'**organigramme**.
- Paramètres : **différenciation** (découpage) et **intégration** (coordination).
- Structures : **hiérarchique** (Fayol, unité de commandement), **fonctionnelle** (Taylor), **staff and line**, **divisionnelle** (produits, marchés, zones), **matricielle** (double rattachement).
- **Mintzberg** : structure simple (supervision directe), bureaucratie mécaniste (procédés), bureaucratie professionnelle (qualifications), divisionnalisée (résultats), adhocratie (ajustement mutuel).
- Déterminants : **taille**, **technologie** (Woodward), **environnement** (Burns et Stalker), **stratégie** (Chandler : « structure follows strategy »), **âge**.
`,
    exercices: md`
### Exercice 2 — Choisir une structure

1. Quelle structure proposer ? a) Une PME de 15 salariés dirigée par son fondateur ; b) un groupe qui fabrique des produits laitiers, des jus et des biscuits ; c) un bureau d'études qui mène en parallèle plusieurs projets avec des ingénieurs de différentes spécialités ; d) une entreprise présente au Maroc, au Sénégal et en Côte d'Ivoire avec des marchés très différents.
2. Citez un avantage et un inconvénient de la structure matricielle.

<details><summary>Voir le corrigé</summary>

**1)** a) **structure simple** (hiérarchique) ; b) **divisionnelle par produits** ; c) **matricielle** (projet × spécialité), proche de l'**adhocratie** ; d) **divisionnelle par zones géographiques**.

**2)** Avantage : souplesse et bonne coordination des projets. Inconvénient : **double commandement**, source de conflits d'arbitrage.

</details>
`,
    qcm: [
      { q: "L'unité de commandement caractérise la structure :", choix: ["Fonctionnelle", "Hiérarchique", "Matricielle", "Adhocratique"], bonne: 1, explication: "Un subordonné, un seul chef (Fayol)." },
      { q: "Une université est, selon Mintzberg, une :", choix: ["Structure simple", "Bureaucratie professionnelle", "Structure divisionnalisée", "Adhocratie"], bonne: 1, explication: "Standardisation des qualifications." },
      { q: "« Structure follows strategy » est une idée de :", choix: ["Chandler", "Woodward", "Taylor", "Weber"], bonne: 0, explication: "La structure s'adapte à la stratégie." },
      { q: "La structure divisionnelle découpe l'entreprise par :", choix: ["Fonctions", "Produits, marchés ou zones", "Projets uniquement", "Niveaux hiérarchiques"], bonne: 1, explication: "Chaque division est quasi autonome." },
      { q: "Le mécanisme de coordination de l'adhocratie est :", choix: ["La supervision directe", "L'ajustement mutuel", "La standardisation des résultats", "La standardisation des procédés"], bonne: 1, explication: "Typique des organisations innovantes." },
    ],
  },

  8: {
    titre: "Performance, création de valeur et RSE",
    resume: md`
## L'essentiel — Performance et RSE

- **Efficacité** $= \dfrac{\text{résultat obtenu}}{\text{objectif}}$ ; **efficience** $= \dfrac{\text{résultat obtenu}}{\text{moyens consommés}}$ ; **performance** = les deux.
- **Productivité** $= \dfrac{\text{production}}{\text{facteur utilisé}}$ (par salarié, par heure).
- $VA = \text{production} - \text{consommations intermédiaires}$ ; elle se répartit entre salariés, État, prêteurs, entreprise (autofinancement) et associés.
- Dimensions de la performance : financière, commerciale, sociale, organisationnelle, sociétale.
- **RSE** (ISO 26000) : piliers économique, social, environnemental ; au Maroc, **label RSE de la CGEM**.
`,
    exercices: md`
### Exercice 2 — Mesurer la performance et répartir la VA

Une entreprise visait une production de 10 000 unités. Elle en a produit 9 000 avec 30 salariés travaillant 1 800 heures chacun. Sa production de l'exercice vaut 6 000 000 DH et ses consommations intermédiaires 3 600 000 DH. La VA se répartit ainsi : charges de personnel 1 500 000 ; impôts et taxes 120 000 ; intérêts 180 000 ; dividendes 200 000 ; le reste en autofinancement.

1. Calculez le taux d'efficacité et la productivité horaire.
2. Calculez la VA et la part de chaque bénéficiaire.

<details><summary>Voir le corrigé</summary>

**1)** Efficacité $= 9\,000 / 10\,000 = 90\%$ ; heures $= 30 \times 1\,800 = 54\,000$ ; productivité horaire $= 9\,000 / 54\,000 \approx 0{,}17$ unité par heure.

**2)** $VA = 6\,000\,000 - 3\,600\,000 = 2\,400\,000$ DH.

| Bénéficiaire | Montant | Part |
|---|--:|--:|
| Salariés | 1 500 000 | 62,5 % |
| État | 120 000 | 5 % |
| Prêteurs | 180 000 | 7,5 % |
| Associés | 200 000 | 8,3 % |
| Entreprise (autofinancement) | 400 000 | 16,7 % |

</details>
`,
    qcm: [
      { q: "Une entreprise qui atteint son objectif en gaspillant des ressources est :", choix: ["Efficace mais pas efficiente", "Efficiente mais pas efficace", "Performante", "Ni efficace ni efficiente"], bonne: 0, explication: "C'est la distinction la plus demandée." },
      { q: "La valeur ajoutée est égale à :", choix: ["CA − charges totales", "Production − consommations intermédiaires", "Résultat + impôts", "Salaires + dividendes"], bonne: 1, explication: "Richesse réellement créée." },
      { q: "La part de la VA revenant à l'État correspond :", choix: ["Aux dividendes", "Aux impôts et taxes", "Aux intérêts", "Aux salaires"], bonne: 1, explication: "Les intérêts vont aux prêteurs." },
      { q: "La norme internationale de référence pour la RSE est :", choix: ["ISO 9001", "ISO 26000", "ISO 14001", "IFRS 16"], bonne: 1, explication: "Lignes directrices de la responsabilité sociétale." },
      { q: "Au Maroc, un label RSE est délivré par :", choix: ["Bank Al-Maghrib", "La CGEM", "La DGI", "Le HCP"], bonne: 1, explication: "Label RSE de la CGEM." },
    ],
  },
};
