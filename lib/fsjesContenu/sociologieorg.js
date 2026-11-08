// Sociologie des Organisations (S3) — compléments par chapitre : description SEO, résumé, exercices 2 et 3, QCM.
const md = String.raw;

const chapitres = {
  1: {
    titre: "La sociologie des organisations : objet, fondateurs et méthodes",
    description: "Organisation formelle et informelle, regard du sociologue, apports de Durkheim et de Weber, grands courants et méthodes d'enquête, avec cas corrigés.",
    resume: md`
## L'essentiel — Objet, fondateurs et méthodes

- **Organisation** : ensemble humain formalisé et durable, orienté vers des objectifs, où des acteurs coopèrent tout en poursuivant leurs propres stratégies.
- **Formel / informel** : la règle écrite d'un côté, les pratiques réelles de l'autre ; le sociologue étudie l'écart entre les deux.
- **Regard compréhensif** : comprendre pourquoi les gens agissent ainsi avant de chercher à améliorer.
- **Durkheim** : traiter les faits sociaux comme des choses (1895) ; *De la division du travail social* (1893).
- **Weber** : sociologie compréhensive, quatre types d'action (finalité, valeur, tradition, affect), type idéal, bureaucratie.
- Courants : fondateurs, relations humaines, fonctionnalisme critique (Merton), analyse stratégique (Crozier), identité (Sainsaulieu), néo-institutionnalisme, régulation (Reynaud).
- Méthodes : questionnaire (mesurer), entretien semi-directif (raisons d'agir), observation (pratiques réelles), analyse documentaire (règles officielles).
- **Observation participante** : Donald Roy et le freinage ouvrier, invisible dans les statistiques.
`,
    exercices: md`
### Exercice 2 — Choisir une méthode d'enquête

Pour chaque question de recherche, proposez la méthode principale et justifiez :

1. Quelle part des salariés d'un groupe de distribution marocain souhaite travailler à distance au moins un jour par semaine ?
2. Pourquoi les infirmières d'un service d'urgences d'un CHU contournent-elles le logiciel de triage ?
3. Comment se déroule réellement une journée de travail sur une chaîne de câblage automobile à Kénitra ?
4. Quelles règles officielles encadrent l'avancement des fonctionnaires d'une commune ?

<details><summary>Voir le corrigé</summary>

**1)** Un **questionnaire** auprès d'un échantillon représentatif : la question porte sur une proportion, donc sur une mesure.

**2)** Des **entretiens semi-directifs** avec les infirmières (et les médecins) : on cherche des raisons d'agir, que seul un échange ouvert fait apparaître. Une observation de quelques gardes permettrait de vérifier les dires.

**3)** L'**observation**, éventuellement participante : seule la présence sur le terrain montre les gestes, les pauses, les arrangements entre opérateurs.

**4)** L'**analyse documentaire** : statut, textes réglementaires, notes internes. Elle décrit la règle officielle, qu'il faudrait ensuite confronter à la pratique.

</details>

### Exercice 3 — Durkheim ou Weber ?

Classez chaque affirmation selon qu'elle relève plutôt de la démarche de Durkheim ou de celle de Weber, et expliquez :

1. « Le taux d'absentéisme d'un service s'explique par des facteurs collectifs mesurables, indépendants des motivations de chaque salarié. »
2. « Pour comprendre pourquoi ce cadre refuse une promotion, il faut reconstituer le sens qu'il donne à sa carrière. »
3. « La spécialisation croissante des métiers dans l'entreprise crée une forme nouvelle de cohésion. »
4. « Cette administration se rapproche du type idéal de la bureaucratie. »

<details><summary>Voir le corrigé</summary>

**1)** **Durkheim** : approche holiste, fait social expliqué par d'autres faits sociaux, avec des données objectives.

**2)** **Weber** : sociologie compréhensive, l'explication passe par le sens que l'acteur donne à son action.

**3)** **Durkheim** : thèse de *De la division du travail social*, solidarité organique.

**4)** **Weber** : le type idéal est son outil de comparaison, et la bureaucratie son objet d'étude.

</details>
`,
    qcm: [
      { q: "Pour le sociologue, l'organisation informelle désigne :", choix: ["L'organigramme officiel", "Les pratiques et relations réelles qui ne figurent pas dans les règles", "Les entreprises non déclarées", "Le règlement intérieur"], bonne: 1, explication: "Elle complète ou contredit l'organisation formelle." },
      { q: "La question typique du sociologue des organisations est :", choix: ["Comment augmenter le chiffre d'affaires ?", "Pourquoi les acteurs agissent-ils ainsi ?", "Quel est le coût de revient ?", "Quelle structure juridique choisir ?"], bonne: 1, explication: "C'est une démarche compréhensive, pas d'abord normative." },
      { q: "« Traiter les faits sociaux comme des choses » est une règle de :", choix: ["Weber", "Durkheim", "Crozier", "Taylor"], bonne: 1, explication: "Les Règles de la méthode sociologique, 1895." },
      { q: "La sociologie compréhensive est associée à :", choix: ["Durkheim", "Marx", "Weber", "Fayol"], bonne: 2, explication: "Expliquer une action, c'est comprendre le sens que l'acteur lui donne." },
      { q: "Agir par conviction, quelles qu'en soient les conséquences, correspond chez Weber à l'action :", choix: ["Rationnelle en finalité", "Rationnelle en valeur", "Traditionnelle", "Affective"], bonne: 1, explication: "L'acteur agit selon ses valeurs." },
      { q: "Le type idéal est :", choix: ["Le modèle d'organisation à atteindre", "Un modèle simplifié qui accentue certains traits pour comparer avec la réalité", "Une moyenne statistique", "Une organisation sans défaut"], bonne: 1, explication: "Ce n'est pas un idéal au sens moral." },
      { q: "Pour mesurer la proportion de salariés satisfaits dans un grand groupe, on choisit d'abord :", choix: ["L'observation participante", "Le questionnaire", "L'entretien libre", "L'analyse du règlement"], bonne: 1, explication: "Une proportion se mesure sur un échantillon par questionnaire." },
      { q: "Donald Roy a mis en évidence le freinage ouvrier grâce à :", choix: ["Un questionnaire", "L'observation participante", "L'analyse des bilans", "Une expérience de laboratoire"], bonne: 1, explication: "Il travaillait lui-même dans l'atelier." },
      { q: "Un écart entre la règle et la pratique est, pour le sociologue :", choix: ["Une faute à sanctionner", "Un indice du fonctionnement réel de l'organisation", "Une erreur de mesure", "Sans intérêt"], bonne: 1, explication: "Il révèle les stratégies et les contraintes des acteurs." },
      { q: "La sociologie des organisations s'est développée aux États-Unis surtout autour de :", choix: ["Taylor", "Merton et ses élèves", "Adam Smith", "Fayol"], bonne: 1, explication: "Merton, Selznick et Gouldner ont testé la théorie de Weber sur des cas réels." },
    ],
  },

  2: {
    titre: "Le travail et sa division : de Durkheim aux nouvelles formes d'emploi",
    description: "Solidarité mécanique et organique, anomie, aliénation, travail en miettes, déqualification, post-fordisme et plateformes au Maroc, avec exercices corrigés.",
    resume: md`
## L'essentiel — Le travail et sa division

- **Division sociale** (entre métiers) et **division technique** (entre postes) ; Adam Smith et la manufacture d'épingles (1776).
- **Durkheim** (1893) : la solidarité mécanique repose sur la ressemblance, la solidarité organique sur la complémentarité.
- Formes pathologiques : division **anomique** (règles insuffisantes) et division **contrainte** (places imposées).
- **Marx** : aliénation au produit, à l'activité, à l'espèce et aux autres ; la division du travail est un rapport de pouvoir.
- **Friedmann**, *Le Travail en miettes* (1956) : monotonie et perte de sens ; remèdes : rotation, élargissement, enrichissement.
- **Braverman** (1974) : déqualification par séparation de la conception et de l'exécution ; nuancée par la polarisation des emplois.
- Post-fordisme (toyotisme, Coriat) : flux tendus, polyvalence, contrôle par les indicateurs, intensification.
- Maroc : sous-traitance industrielle, auto-entrepreneur (loi 114-13), plateformes et management algorithmique.
`,
    exercices: md`
### Exercice 2 — Solidarité mécanique ou organique ?

Pour chaque situation, indiquez le type de solidarité dominant et justifiez :

1. Une coopérative de femmes à Taliouine où toutes les membres récoltent, sèchent et trient le safran ensemble, selon les mêmes usages.
2. Un hôpital universitaire où chirurgiens, anesthésistes, infirmiers, techniciens et agents logistiques dépendent les uns des autres.
3. Une start-up de 300 salariés où, après une croissance rapide, plus personne ne sait qui valide les dépenses ni qui décide des priorités.

<details><summary>Voir le corrigé</summary>

**1)** **Solidarité mécanique** : les membres font les mêmes tâches et partagent les mêmes usages ; le lien repose sur la ressemblance.

**2)** **Solidarité organique** : chaque métier est spécialisé et complémentaire des autres ; personne ne peut soigner seul.

**3)** Division du travail **anomique** : la spécialisation a progressé plus vite que les règles qui organisent les relations entre fonctions. Le remède passe par la clarification des rôles et des procédures, et non par un retour en arrière.

</details>

### Exercice 3 — Élargir ou enrichir ?

Le centre d'appels Rif Contact, à Tétouan, emploie des téléconseillers qui ne traitent qu'un type de demande : le changement d'adresse. La direction étudie trois mesures :

- (a) faire alterner chaque semaine les conseillers entre le changement d'adresse, les réclamations et les ventes ;
- (b) confier à chaque conseiller les changements d'adresse, d'offre et de mode de paiement ;
- (c) permettre aux conseillers expérimentés de valider eux-mêmes des gestes commerciaux jusqu'à 300 DH et de former les nouveaux.

1. Qualifiez chaque mesure.
2. Laquelle répond le mieux à une perte de sens au travail ? Pourquoi ?

<details><summary>Voir le corrigé</summary>

**1)** (a) **rotation des postes** ; (b) **élargissement des tâches**, car les tâches ajoutées sont de même niveau ; (c) **enrichissement des tâches**, car on ajoute de la décision et de la transmission.

**2)** L'**enrichissement** (c) agit le plus sur le sens : il reconnaît l'expertise, donne une autonomie réelle et une responsabilité. La rotation et l'élargissement réduisent la monotonie sans changer la place du salarié dans l'organisation. Les trois mesures peuvent se combiner.

</details>
`,
    qcm: [
      { q: "Chez Durkheim, la solidarité organique repose sur :", choix: ["La ressemblance des individus", "La complémentarité des fonctions", "La contrainte de l'État", "La religion"], bonne: 1, explication: "La spécialisation rend les individus dépendants les uns des autres." },
      { q: "La division du travail anomique correspond à :", choix: ["Des places attribuées par la naissance", "Des règles insuffisantes pour organiser les relations entre fonctions", "Une absence de spécialisation", "Un excès de règles"], bonne: 1, explication: "Les individus ne savent plus quelles normes suivre." },
      { q: "Dans une société à solidarité mécanique, le droit dominant est :", choix: ["Restitutif", "Répressif", "Commercial", "International"], bonne: 1, explication: "Il punit l'atteinte à la conscience collective." },
      { q: "« Le Travail en miettes » (1956) est l'œuvre de :", choix: ["Marx", "Friedmann", "Braverman", "Coriat"], bonne: 1, explication: "Georges Friedmann, fondateur de la sociologie du travail en France." },
      { q: "Ajouter à un poste des tâches de même niveau de responsabilité s'appelle :", choix: ["Enrichissement", "Élargissement", "Rotation", "Déqualification"], bonne: 1, explication: "L'enrichissement, lui, ajoute des responsabilités." },
      { q: "La thèse de la déqualification est principalement associée à :", choix: ["Braverman", "Durkheim", "Weber", "Mayo"], bonne: 0, explication: "Labor and Monopoly Capital, 1974." },
      { q: "Chez Marx, l'aliénation désigne :", choix: ["La fatigue physique", "Le fait que le travailleur devient étranger à son produit et à son activité", "Le chômage", "La faible productivité"], bonne: 1, explication: "C'est une dépossession, pas seulement une pénibilité." },
      { q: "Le toyotisme se caractérise notamment par :", choix: ["La production de masse avec stocks", "Le juste-à-temps et la polyvalence", "Le travail à domicile", "L'absence d'indicateurs"], bonne: 1, explication: "Produire à partir de la demande, en flux tendus." },
      { q: "La polarisation des emplois désigne :", choix: ["La hausse des emplois intermédiaires", "La hausse des emplois très qualifiés et peu qualifiés et le recul des emplois intermédiaires", "La disparition des emplois de service", "La concentration des emplois dans le nord du pays"], bonne: 1, explication: "C'est une nuance apportée à la thèse de la déqualification." },
      { q: "Le statut d'auto-entrepreneur au Maroc a été créé par :", choix: ["La loi 65-99", "La loi 114-13", "La loi 17-95", "La loi 09-08"], bonne: 1, explication: "Loi de 2015 ; la loi 65-99 est le Code du travail." },
    ],
  },

  3: {
    titre: "La bureaucratie et ses dysfonctionnements",
    description: "Types de domination de Weber, type idéal de la bureaucratie, déplacement des buts (Merton), Selznick, Gouldner et cercle vicieux de Crozier, avec cas corrigés.",
    resume: md`
## L'essentiel — La bureaucratie et ses dysfonctionnements

- **Domination** (Weber) : chance de trouver obéissance ; elle dure si elle est jugée **légitime**.
- Trois types : **traditionnelle** (coutume), **charismatique** (qualités d'une personne), **légale-rationnelle** (règles impersonnelles).
- Bureaucratie : compétences fixées par écrit, hiérarchie, recrutement sur qualification, carrière, séparation fonction-personne, impersonnalité ; techniquement supérieure, mais « cage d'acier ».
- **Merton** (1940) : déplacement des buts, la règle devient une fin ; incapacité entraînée face à l'imprévu.
- **Selznick** (1949) : la délégation crée des sous-objectifs ; cooptation de groupes extérieurs.
- **Gouldner** (1954) : bureaucratie simulée, représentative, punitive ; la règle fixe un minimum et relance la surveillance.
- **Crozier** (1963) : cercle vicieux = impersonnalité, centralisation, isolement des strates, pouvoirs parallèles ; on répond aux problèmes par plus de règles.
- Exemple clé : les ouvriers d'entretien du monopole industriel contrôlent les pannes, donc l'incertitude.
`,
    exercices: md`
### Exercice 2 — Quel type de domination ?

Identifiez le type de domination dominant (au sens de Weber) et justifiez :

1. Dans une conserverie familiale d'Agadir, les ouvriers obéissent au fils aîné « parce que c'est lui qui succède au père, comme le veut l'usage ».
2. Dans une jeune entreprise de technologie de Casablanca, les salariés acceptent des horaires lourds parce qu'ils admirent la vision de la fondatrice.
3. Dans une préfecture, le chef de service applique une circulaire ministérielle que ses agents exécutent sans discuter.
4. À la mort de la fondatrice, l'entreprise de technologie crée un conseil d'administration et des procédures écrites. Comment Weber nomme-t-il ce processus ?

<details><summary>Voir le corrigé</summary>

**1)** **Traditionnelle** : la légitimité vient de la coutume de succession.

**2)** **Charismatique** : on obéit à une personne pour ses qualités exceptionnelles supposées.

**3)** **Légale-rationnelle** : on obéit à une règle impersonnelle établie selon une procédure.

**4)** La **routinisation du charisme** : pour durer, l'autorité charismatique se transforme en règles (ou en tradition).

</details>

### Exercice 3 — Quelle bureaucratie au sens de Gouldner ?

Dans une usine de pièces automobiles à Tanger, trois règles coexistent :

- (a) le port des chaussures de sécurité, décidé avec le comité d'hygiène et de sécurité ;
- (b) l'interdiction d'utiliser son téléphone dans les vestiaires, imposée par le siège européen et que personne ne respecte, chefs compris ;
- (c) un badge de pointage à chaque sortie de l'atelier, instauré après des retards, contesté par les salariés.

1. Classez chaque règle selon la typologie de Gouldner.
2. Quel risque la règle (c) fait-elle courir à l'usine ?

<details><summary>Voir le corrigé</summary>

**1)** (a) **représentative** : règle partagée et légitime ; (b) **simulée** : imposée de l'extérieur, ignorée par tous sans conflit ; (c) **punitive** : imposée par la direction aux salariés, elle crée des tensions.

**2)** La règle punitive fixe un **minimum** : les salariés respectent le pointage mais réduisent leur engagement au strict nécessaire. La direction risque de renforcer la surveillance, ce qui accroît les tensions : c'est le cercle décrit par Gouldner.

</details>
`,
    qcm: [
      { q: "Pour Weber, une domination est durable quand elle est :", choix: ["Imposée par la force", "Jugée légitime par ceux qui obéissent", "Fondée sur l'argent", "Exercée par l'État"], bonne: 1, explication: "La croyance en la légitimité fonde l'obéissance." },
      { q: "La bureaucratie correspond à la domination :", choix: ["Traditionnelle", "Charismatique", "Légale-rationnelle", "Patrimoniale"], bonne: 2, explication: "Elle repose sur des règles impersonnelles." },
      { q: "Le déplacement des buts a été décrit par :", choix: ["Weber", "Merton", "Gouldner", "Taylor"], bonne: 1, explication: "Merton, 1940 : la règle devient une fin en soi." },
      { q: "Selon Weber, la bureaucratie est :", choix: ["Toujours inefficace", "Techniquement supérieure aux autres formes d'organisation", "Propre aux pays pauvres", "Fondée sur le charisme"], bonne: 1, explication: "Précision, rapidité, prévisibilité, continuité." },
      { q: "Selznick montre que la délégation d'autorité entraîne :", choix: ["La disparition des conflits", "L'apparition de sous-objectifs propres aux unités", "La suppression de la hiérarchie", "Une baisse des coûts"], bonne: 1, explication: "Chaque unité défend ses intérêts propres." },
      { q: "Chez Gouldner, une règle ignorée par tous sans conflit relève de la bureaucratie :", choix: ["Représentative", "Punitive", "Simulée", "Charismatique"], bonne: 2, explication: "Personne n'y croit et personne ne la fait respecter." },
      { q: "Le cercle vicieux bureaucratique est décrit dans :", choix: ["Économie et société", "Le Phénomène bureaucratique", "Le Travail en miettes", "L'Acteur et le système"], bonne: 1, explication: "Michel Crozier, 1963." },
      { q: "Dans le monopole industriel étudié par Crozier, les ouvriers d'entretien sont puissants parce qu'ils :", choix: ["Sont mieux payés", "Maîtrisent l'incertitude des pannes", "Sont plus nombreux", "Sont syndiqués"], bonne: 1, explication: "Ils contrôlent la seule zone non réglée." },
      { q: "Face à un problème, une organisation prise dans le cercle vicieux tend à :", choix: ["Décentraliser", "Ajouter des règles et centraliser davantage", "Supprimer la hiérarchie", "Consulter les usagers"], bonne: 1, explication: "C'est ce qui entretient le cercle." },
      { q: "La routinisation du charisme désigne :", choix: ["La disparition de l'organisation", "La transformation de l'autorité charismatique en règles ou en tradition", "L'apparition d'un nouveau leader", "Le passage à la bureaucratie punitive"], bonne: 1, explication: "Elle pose la question de la succession." },
    ],
  },

  4: {
    titre: "Acteurs, pouvoir et régulation dans l'organisation",
    description: "Analyse stratégique de Crozier et Friedberg : marge de liberté, pouvoir, zones d'incertitude, système d'action concret et régulation conjointe de Reynaud.",
    resume: md`
## L'essentiel — Acteurs, pouvoir et régulation

- *L'Acteur et le système* (Crozier et Friedberg, 1977) : trois postulats, **marge de liberté**, **rationalité limitée**, comportement **stratégique**.
- Stratégie **offensive** (saisir des opportunités) ou **défensive** (protéger sa marge de manœuvre).
- **Pouvoir** = relation, réciproque, déséquilibrée, liée à un enjeu ; est puissant celui dont le comportement est imprévisible pour l'autre.
- **Zone d'incertitude** : problème non réglé dont dépendent les autres.
- Quatre sources du pouvoir : **expertise**, **relations avec l'environnement** (marginal-sécant), **information et communication**, **usage des règles**.
- Grève du zèle : appliquer la règle à la lettre pour peser sur la hiérarchie.
- **Système d'action concret** : jeux stables entre acteurs, qui ne coïncident pas avec l'organigramme.
- **Reynaud** (1989) : régulation de contrôle (direction) + régulation autonome (exécutants) = **régulation conjointe**, toujours renégociée.
`,
    exercices: md`
### Exercice 2 — Identifier les sources du pouvoir

Pour chaque acteur d'une entreprise d'import-export de Casablanca, indiquez la source principale de son pouvoir :

1. Le transitaire salarié qui connaît personnellement les agents de la douane du port et débloque les conteneurs.
2. Le contrôleur de gestion qui prépare seul le tableau de bord présenté chaque mois au directeur général.
3. La responsable informatique, seule à connaître le paramétrage du progiciel de gestion.
4. Le chef d'entrepôt qui décide s'il accepte ou non les heures supplémentaires demandées par ses magasiniers.

<details><summary>Voir le corrigé</summary>

**1)** **Relations avec l'environnement** : c'est un marginal-sécant, membre de l'entreprise et proche d'un acteur extérieur.

**2)** **Maîtrise de l'information** : il choisit ce qui remonte et sous quelle forme.

**3)** **Expertise** : compétence rare et difficile à remplacer à court terme.

**4)** **Usage des règles organisationnelles** : il peut appliquer la règle avec souplesse ou avec rigueur.

</details>

### Exercice 3 — Régulation de contrôle, autonome ou conjointe ?

Dans un hôtel de Marrakech :

- (a) la direction impose que chaque femme de chambre nettoie 16 chambres par jour ;
- (b) les femmes de chambre se répartissent entre elles les suites, plus longues à nettoyer, en tournant chaque semaine ;
- (c) la gouvernante ferme les yeux sur cette répartition tant que les 16 chambres sont faites, et les femmes de chambre acceptent en retour de dépanner lors des arrivées tardives.

1. Qualifiez chaque règle selon Reynaud.
2. Que risque la direction si elle impose une répartition des suites par logiciel ?

<details><summary>Voir le corrigé</summary>

**1)** (a) **régulation de contrôle** ; (b) **régulation autonome** ; (c) **régulation conjointe** : un compromis implicite entre les deux.

**2)** Elle détruirait une régulation autonome qui assure l'équité entre collègues et la souplesse lors des arrivées tardives. Les femmes de chambre pourraient se retirer de l'arrangement (c) et s'en tenir au strict minimum : la direction perdrait la coopération qu'elle obtenait gratuitement.

</details>
`,
    qcm: [
      { q: "L'Acteur et le système a été publié en 1977 par :", choix: ["Weber et Merton", "Crozier et Friedberg", "March et Simon", "Meyer et Rowan"], bonne: 1, explication: "C'est l'ouvrage fondateur de l'analyse stratégique." },
      { q: "Pour Crozier et Friedberg, le pouvoir est :", choix: ["Un attribut lié au grade", "Une relation réciproque et déséquilibrée", "Un droit de propriété", "Une qualité personnelle"], bonne: 1, explication: "Il naît de la dépendance mutuelle entre acteurs." },
      { q: "Une zone d'incertitude est :", choix: ["Un risque financier", "Un domaine non réglé dont dépendent les autres acteurs", "Une erreur de gestion", "Un service sans responsable"], bonne: 1, explication: "La maîtriser donne du pouvoir." },
      { q: "Le marginal-sécant tire son pouvoir de :", choix: ["Son expertise technique", "Sa position d'intermédiaire entre l'organisation et son environnement", "Son ancienneté", "Son salaire"], bonne: 1, explication: "Il appartient à plusieurs systèmes à la fois." },
      { q: "Une stratégie défensive vise à :", choix: ["Prendre la place du chef", "Protéger sa marge de liberté", "Quitter l'organisation", "Augmenter la production"], bonne: 1, explication: "L'offensive cherche à améliorer sa situation." },
      { q: "La grève du zèle consiste à :", choix: ["Cesser le travail", "Appliquer les règles à la lettre", "Travailler plus vite", "Démissionner collectivement"], bonne: 1, explication: "La règle est retournée contre la hiérarchie." },
      { q: "Le système d'action concret :", choix: ["Coïncide toujours avec l'organigramme", "Désigne les jeux stables entre acteurs, qui peuvent dépasser les frontières de l'organisation", "Est un logiciel de gestion", "Est fixé par la loi"], bonne: 1, explication: "C'est une construction sociale, pas une structure officielle." },
      { q: "Chez Reynaud, la régulation autonome est produite par :", choix: ["La direction", "Les exécutants", "L'État", "Les clients"], bonne: 1, explication: "Elle organise le travail de l'intérieur." },
      { q: "La régulation conjointe est :", choix: ["La règle imposée par la direction", "Le compromis entre régulation de contrôle et régulation autonome", "Une convention collective signée", "Un règlement intérieur"], bonne: 1, explication: "Elle est souvent implicite et toujours renégociée." },
      { q: "Selon l'analyse stratégique, l'acteur cherche une solution :", choix: ["Optimale", "Satisfaisante", "Imposée", "Aléatoire"], bonne: 1, explication: "Sa rationalité est limitée, comme l'a montré Simon." },
    ],
  },

  5: {
    titre: "Identités, culture et socialisation au travail",
    description: "Identités au travail selon Sainsaulieu, double transaction de Dubar, culture d'organisation selon Schein, socialisation et groupes informels, avec cas corrigés.",
    resume: md`
## L'essentiel — Identités, culture et socialisation

- Le travail construit l'**identité** : reconnaissance de soi et par les autres à travers l'activité.
- **Sainsaulieu**, *L'Identité au travail* (1977) : l'accès au pouvoir détermine le rapport aux autres.
- Quatre modèles : **retrait** (travail = moyen), **fusion** (unité du groupe, chef charismatique), **négociation** (compétence, débat, alliances), **affinités** (projet de mobilité, relations sélectives).
- **Dubar** (1991) : identité = transaction **biographique** (pour soi) + transaction **relationnelle** (pour autrui) ; un écart crée une crise identitaire.
- **Schein** (1985) : culture en trois niveaux, **artefacts**, **valeurs affichées**, **présupposés de base** (implicites, décisifs).
- La culture intègre et guide, mais peut freiner l'adaptation ; des sous-cultures coexistent.
- **Socialisation organisationnelle** : formelle (intégration, tutorat) et informelle (collègues) ; tactiques de Van Maanen et Schein (1979).
- **Groupes informels** : normes propres, sanctions, protection ; ils font ou défont l'intégration.
`,
    exercices: md`
### Exercice 2 — Quel niveau de culture ?

Classez chaque élément observé dans une société de transport de Casablanca selon les trois niveaux de Schein :

1. Les chauffeurs portent tous une veste aux couleurs de l'entreprise.
2. Le site internet affiche « la sécurité avant tout ».
3. Chacun sait, sans que ce soit écrit, qu'un chauffeur qui signale un défaut sur son car sera mal vu, car « on ne retarde pas un départ ».
4. Chaque année, une cérémonie récompense le « chauffeur de l'année ».
5. Quelle conséquence l'écart entre les points 2 et 3 peut-il avoir ?

<details><summary>Voir le corrigé</summary>

**1)** et **4)** **Artefacts** : éléments visibles (tenue, rituel).

**2)** **Valeur affichée**.

**3)** **Présupposé de base** : croyance implicite partagée, jamais discutée.

**5)** Le présupposé réel contredit la valeur affichée : les défauts ne seront pas signalés, ce qui crée un risque d'accident. La direction doit agir sur le présupposé (protéger et récompenser les signalements), pas seulement sur le slogan.

</details>

### Exercice 3 — La double transaction

Nadia, titulaire d'un master en finance, a été recrutée il y a deux ans comme « assistante comptable » dans une PME de Meknès. Elle se voit comme une future contrôleuse de gestion. Son responsable lui confie surtout de la saisie et la présente aux clients comme « la petite du service ».

1. Décrivez la transaction biographique et la transaction relationnelle de Nadia.
2. Quel risque court l'entreprise ? Quelles mesures proposer ?

<details><summary>Voir le corrigé</summary>

**1)** **Transaction biographique** (identité pour soi) : diplômée, elle se projette comme contrôleuse de gestion. **Transaction relationnelle** (identité pour autrui) : l'entreprise lui attribue une identité d'exécutante, renforcée par le vocabulaire employé. Les deux ne concordent pas : il y a crise identitaire.

**2)** Risque de **démotivation** puis de **départ** (défection), avec perte de la compétence. Mesures : lui confier des missions d'analyse (tableau de bord, budget), changer l'intitulé du poste, définir un parcours vers le contrôle de gestion, et corriger la manière dont on la présente.

</details>
`,
    qcm: [
      { q: "L'Identité au travail (1977) est l'œuvre de :", choix: ["Dubar", "Sainsaulieu", "Schein", "Crozier"], bonne: 1, explication: "Renaud Sainsaulieu." },
      { q: "Chez Sainsaulieu, le modèle d'identité dépend surtout :", choix: ["Du caractère de la personne", "De l'accès au pouvoir dans la situation de travail", "De l'âge", "Du salaire"], bonne: 1, explication: "Ce sont des situations, pas des traits psychologiques." },
      { q: "Le modèle fusionnel se caractérise par :", choix: ["Des alliances changeantes", "Une forte solidarité de groupe et le refus des différences", "Un investissement hors travail", "Un projet de mobilité individuelle"], bonne: 1, explication: "Le groupe fait la force de ceux qui ont peu de pouvoir individuel." },
      { q: "Le modèle de négociation concerne surtout :", choix: ["Les travailleurs temporaires", "Les salariés qui accèdent au pouvoir par leur compétence", "Les salariés en fin de carrière", "Les stagiaires"], bonne: 1, explication: "Techniciens, ouvriers professionnels, cadres." },
      { q: "Le modèle des affinités correspond à :", choix: ["Un groupe très uni", "Un projet de mobilité personnelle avec des relations sélectives", "Un désintérêt pour le travail", "Un conflit avec la direction"], bonne: 1, explication: "Exemple : autodidactes en promotion, jeunes cadres ambitieux." },
      { q: "Pour Dubar, l'identité professionnelle résulte :", choix: ["D'un test psychologique", "D'une transaction biographique et d'une transaction relationnelle", "Du seul diplôme", "Du contrat de travail"], bonne: 1, explication: "Identité pour soi et identité pour autrui." },
      { q: "Le niveau le plus profond de la culture selon Schein est :", choix: ["Les artefacts", "Les valeurs affichées", "Les présupposés de base", "Le logo"], bonne: 2, explication: "Ce sont des croyances implicites, rarement discutées." },
      { q: "Un séminaire d'intégration est un moyen de socialisation :", choix: ["Informel", "Formel", "Juridique", "Spontané"], bonne: 1, explication: "Il est organisé par l'entreprise." },
      { q: "Une culture d'organisation forte peut :", choix: ["Toujours faciliter le changement", "Freiner l'adaptation quand l'environnement change", "Supprimer les sous-cultures", "Remplacer la stratégie"], bonne: 1, explication: "Ses présupposés peuvent devenir inadaptés." },
      { q: "Un groupe informel :", choix: ["Figure dans l'organigramme", "Fixe ses propres normes et sanctionne ceux qui s'en écartent", "Est créé par la direction", "N'a aucune influence"], bonne: 1, explication: "Il joue un rôle clé dans l'intégration." },
    ],
  },

  6: {
    titre: "Les organisations dans leur environnement : institutions et réseaux",
    description: "Néo-institutionnalisme : mythes rationnels et découplage, isomorphisme coercitif, mimétique et normatif, encastrement, liens faibles et trous structuraux.",
    resume: md`
## L'essentiel — Institutions et réseaux

- **Néo-institutionnalisme sociologique** : les organisations recherchent la **légitimité** autant que l'efficacité.
- **Meyer et Rowan** (1977) : **mythes rationnels** (structures jugées modernes, adoptées pour être reconnues) et **découplage** (affichage formel distinct de la pratique réelle).
- **DiMaggio et Powell** (1983) : **isomorphisme** des organisations d'un même champ.
- Isomorphisme **coercitif** (autorité dont on dépend), **mimétique** (imitation en situation d'incertitude), **normatif** (professions et formations communes).
- **Granovetter** (1985) : l'action économique est **encastrée** dans des relations sociales, source de confiance.
- **Force des liens faibles** (Granovetter, 1973) : les simples connaissances apportent des informations nouvelles.
- **Burt** (1992) : les **trous structuraux** ; celui qui relie deux groupes contrôle l'information.
- Limites : le néo-institutionnalisme explique mal le changement ; d'où la notion d'**entrepreneur institutionnel**.
`,
    exercices: md`
### Exercice 2 — Quel isomorphisme ?

Identifiez le mécanisme d'isomorphisme en jeu :

1. Toutes les sociétés cotées à la Bourse de Casablanca publient des informations extra-financières à la suite d'une exigence du régulateur du marché (AMMC).
2. Un groupe de cliniques privées adopte le même logiciel de dossier patient que le leader du secteur, sans étude préalable.
3. Les directeurs financiers recrutés par les grandes entreprises, tous formés aux mêmes normes et dans les mêmes cursus, introduisent des outils de reporting identiques.
4. Un sous-traitant aéronautique de Nouaceur adopte les procédures qualité exigées par son donneur d'ordre.

<details><summary>Voir le corrigé</summary>

**1)** **Coercitif** : obligation venue du régulateur.

**2)** **Mimétique** : imitation du leader, typique d'une situation d'incertitude.

**3)** **Normatif** : diffusion par la profession et la formation.

**4)** **Coercitif** : pression d'un client dont l'entreprise dépend.

</details>

### Exercice 3 — Liens forts et liens faibles

Youssef, diplômé de licence à Oujda, cherche un emploi dans la logistique. Il a demandé l'aide de ses frères et de ses amis proches, sans succès. Il a finalement trouvé un poste à Tanger Med grâce à un ancien camarade de lycée, perdu de vue, qu'il a retrouvé sur un réseau social professionnel.

1. Expliquez ce résultat avec la théorie de Granovetter.
2. Quel conseil pratique en tirer pour un étudiant qui cherche un stage ?

<details><summary>Voir le corrigé</summary>

**1)** Les frères et amis proches sont des **liens forts** : ils vivent dans le même milieu et disposent des mêmes informations que Youssef. L'ancien camarade est un **lien faible** : il appartient à un autre milieu (Tanger, la logistique portuaire) et fait circuler une information nouvelle, une offre d'emploi que les proches ne connaissaient pas.

**2)** Entretenir et diversifier ses liens faibles : anciens camarades, enseignants, intervenants, contacts de stage, salons, réseaux professionnels. Ce sont eux qui ouvrent l'accès à des opportunités hors de son cercle habituel.

</details>
`,
    qcm: [
      { q: "Le néo-institutionnalisme sociologique explique la ressemblance des organisations par :", choix: ["La recherche de la seule efficacité", "La recherche de légitimité", "Le hasard", "La taille"], bonne: 1, explication: "Adopter les structures attendues rend l'organisation reconnue." },
      { q: "Les notions de mythe rationnel et de découplage viennent de :", choix: ["DiMaggio et Powell", "Meyer et Rowan", "Granovetter", "Crozier"], bonne: 1, explication: "Article de 1977." },
      { q: "Le découplage désigne :", choix: ["La séparation entre actionnaires et dirigeants", "L'écart entre la structure formelle affichée et les activités réelles", "La fin d'un contrat", "La division du travail"], bonne: 1, explication: "On affiche une structure, on travaille autrement." },
      { q: "Une entreprise qui imite le leader de son secteur faute de savoir quelle solution choisir illustre l'isomorphisme :", choix: ["Coercitif", "Mimétique", "Normatif", "Juridique"], bonne: 1, explication: "L'imitation répond à l'incertitude." },
      { q: "L'isomorphisme normatif passe surtout par :", choix: ["La loi", "Les professions et les formations communes", "Les prix", "Les syndicats"], bonne: 1, explication: "Les professionnels partagent les mêmes modèles." },
      { q: "Une norme imposée par un donneur d'ordre à ses sous-traitants relève de l'isomorphisme :", choix: ["Coercitif", "Mimétique", "Normatif", "Spontané"], bonne: 0, explication: "La pression vient d'un acteur dont on dépend." },
      { q: "Pour Granovetter, l'encastrement signifie que :", choix: ["Les entreprises sont isolées", "L'action économique s'inscrit dans des relations sociales", "Le marché remplace les relations", "Les prix suffisent à expliquer les échanges"], bonne: 1, explication: "Les relations sociales orientent et rendent possibles les échanges." },
      { q: "La force des liens faibles tient au fait qu'ils :", choix: ["Apportent plus de soutien affectif", "Font circuler des informations nouvelles venues d'autres milieux", "Sont plus nombreux dans la famille", "Remplacent les liens forts"], bonne: 1, explication: "Ils jouent le rôle de ponts entre groupes." },
      { q: "La notion de trou structural est associée à :", choix: ["Burt", "Weber", "Schein", "Friedmann"], bonne: 0, explication: "Ronald Burt, 1992." },
      { q: "Une limite du néo-institutionnalisme est de :", choix: ["Ignorer la légitimité", "Mal expliquer le changement et la diversité", "Nier l'existence des normes", "Se limiter aux entreprises publiques"], bonne: 1, explication: "D'où la notion d'entrepreneur institutionnel." },
    ],
  },

  7: {
    titre: "Le changement, l'innovation et les conflits dans les organisations",
    description: "Résistance au changement, Crozier et le changement par décret, innovation ordinaire d'Alter, fonctions du conflit, défection et prise de parole selon Hirschman.",
    resume: md`
## L'essentiel — Changement, innovation et conflits

- Un changement **redistribue les zones d'incertitude** : la résistance est souvent une stratégie rationnelle, pas une peur irrationnelle.
- **Crozier**, *On ne change pas la société par décret* (1979) : changer, c'est apprendre collectivement de nouveaux jeux.
- Sources de résistance : pouvoir, identité, règles et arrangements, culture, coûts d'apprentissage.
- **Alter**, *L'Innovation ordinaire* (2000) : invention ≠ innovation ; cycle **incitation, appropriation, institutionnalisation** ; l'innovateur est d'abord un déviant.
- Tension permanente entre **ordre** et **mouvement**.
- **Conflit** : phénomène normal de la coopération ; **Coser** (1956) montre ses fonctions positives.
- Types : interpersonnel, entre services, social, de valeurs ; au Maroc : Code du travail (loi 65-99), loi organique 97-15 sur la grève (2025).
- **Hirschman** (1970) : **défection** (signal muet), **prise de parole** (signal riche), **loyauté** (retarde la défection).
`,
    exercices: md`
### Exercice 2 — Défection, prise de parole ou loyauté ?

Classez chaque comportement selon la grille d'Hirschman :

1. Un client mécontent d'un opérateur télécom résilie son abonnement et passe à la concurrence.
2. Les infirmiers d'un hôpital régional adressent une pétition à la direction sur le manque de matériel.
3. Un cadre très attaché à son entreprise familiale reste malgré une baisse de salaire et défend des propositions de redressement.
4. Pourquoi une entreprise a-t-elle intérêt à faciliter la prise de parole ?

<details><summary>Voir le corrigé</summary>

**1)** **Défection** : il quitte sans forcément dire pourquoi.

**2)** **Prise de parole** : protestation explicite et collective.

**3)** **Loyauté**, qui retarde la défection et nourrit la prise de parole.

**4)** La prise de parole donne une information précise sur les problèmes et laisse le temps de les corriger ; sans elle, l'entreprise ne perçoit que des départs, souvent ceux des meilleurs, qui ont le plus d'options ailleurs.

</details>

### Exercice 3 — Le cycle de l'innovation

Dans un réseau d'agences de voyage de Marrakech, la direction met à disposition un outil de réservation en ligne. Quelques agents l'utilisent pour proposer à leurs clients des circuits sur mesure qu'ils assemblent eux-mêmes, ce que l'outil ne prévoyait pas. Leurs collègues les jugent « hors procédure ». Deux ans plus tard, la direction crée une offre officielle de « circuits personnalisés » avec une grille de prix standard.

1. Identifiez les trois étapes du cycle d'Alter.
2. Que deviennent les agents innovateurs à la dernière étape ?

<details><summary>Voir le corrigé</summary>

**1)** **Incitation** : mise à disposition de l'outil par la direction. **Appropriation** : les agents en font un usage non prévu (circuits sur mesure), considéré comme déviant. **Institutionnalisation** : la direction transforme la pratique en offre officielle et en règles de prix.

**2)** Ils perdent l'avantage que leur donnait leur pratique originale : elle devient la règle commune. Ils peuvent être reconnus (promotion, rôle de formateur) ou se sentir dépossédés ; le cycle peut alors reprendre avec de nouvelles inventions.

</details>
`,
    qcm: [
      { q: "Pour l'analyse stratégique, la résistance au changement est souvent :", choix: ["Une peur irrationnelle", "Une stratégie rationnelle de défense d'une position", "Un trouble psychologique", "Une faute disciplinaire"], bonne: 1, explication: "Le changement redistribue les zones d'incertitude." },
      { q: "« On ne change pas la société par décret » est un ouvrage de :", choix: ["Weber", "Crozier", "Alter", "Hirschman"], bonne: 1, explication: "Michel Crozier, 1979." },
      { q: "Chez Alter, l'innovation se distingue de l'invention parce qu'elle :", choix: ["Est toujours technologique", "Est le processus d'appropriation d'une invention par les acteurs", "Est décidée par la direction", "Ne crée pas de conflit"], bonne: 1, explication: "L'invention est l'idée, l'innovation son adoption transformée." },
      { q: "Les trois étapes du cycle de l'innovation selon Alter sont :", choix: ["Dégel, déplacement, recristallisation", "Incitation, appropriation, institutionnalisation", "Planifier, organiser, contrôler", "Retrait, fusion, négociation"], bonne: 1, explication: "Dégel et recristallisation sont de Lewin." },
      { q: "Pour Alter, l'innovateur est d'abord perçu comme :", choix: ["Un leader", "Un déviant", "Un expert", "Un syndicaliste"], bonne: 1, explication: "Il s'écarte des règles établies." },
      { q: "Lewis Coser a montré que le conflit :", choix: ["Est toujours destructeur", "Peut avoir des fonctions positives", "Disparaît dans les organisations modernes", "Ne concerne que les syndicats"], bonne: 1, explication: "Il révèle les problèmes et renforce la cohésion des groupes." },
      { q: "Dans la grille d'Hirschman, la défection est un signal :", choix: ["Riche en informations", "Muet", "Positif", "Juridique"], bonne: 1, explication: "On sait qu'on part, rarement pourquoi." },
      { q: "La loyauté, chez Hirschman :", choix: ["Accélère la défection", "Retarde la défection et favorise la prise de parole", "Interdit la prise de parole", "Est une sanction"], bonne: 1, explication: "L'attachement donne du temps pour corriger." },
      { q: "Un désaccord entre le service commercial et la production sur les délais est un conflit :", choix: ["Interpersonnel", "Entre services", "De valeurs", "International"], bonne: 1, explication: "Il porte sur des objectifs et des ressources." },
      { q: "Au Maroc, l'exercice du droit de grève est encadré depuis 2025 par :", choix: ["La loi 17-95", "La loi organique 97-15", "La loi 31-08", "La loi 114-13"], bonne: 1, explication: "Le Code du travail (loi 65-99) organise par ailleurs la conciliation et l'arbitrage." },
    ],
  },
};

export default chapitres;
