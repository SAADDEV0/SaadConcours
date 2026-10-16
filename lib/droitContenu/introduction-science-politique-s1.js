// Introduction à la science politique (Droit S1, tronc commun) — compléments par chapitre : description SEO, résumé, exercices 2 et 3, QCM.
const md = String.raw;

const chapitres = {
  1: {
    titre: "La science politique : objet, histoire et méthodes",
    description: "Science politique : science de l'État ou du pouvoir, le politique et la politique, d'Aristote à Easton, méthodes et neutralité axiologique.",
    resume: md`
## L'essentiel — Objet et méthodes de la science politique

- Objet : le **pouvoir politique**, entre « science de l'État » (trop étroite) et « science du pouvoir » (trop large).
- **Le politique** (domaine, *polity*) / **la politique** (compétition, *politics*) / politiques publiques (*policy*).
- Lasswell (1936) : *Who Gets What, When, How*.
- Précurseurs : Aristote (*La Politique*), Ibn Khaldoun (*Muqaddima*, 1377, *'asabiyya*).
- Rupture : Machiavel (*Le Prince*, 1513) sépare analyse du pouvoir et morale ; Montesquieu (1748) ; Tocqueville (1835-1840).
- Discipline : Sciences Po Paris (1872), APSA (1903), béhaviorisme après 1945.
- Maroc : Waterbury (*Le Commandeur des croyants*, 1970), Leveau (*Le Fellah marocain, défenseur du trône*, 1976).
- **Neutralité axiologique** (Weber) : séparer jugements de fait et de valeur.
- Méthodes : quantitative, qualitative, comparative, documentaire, systémique.
- Easton : demandes et soutiens (*inputs*) → décisions (*outputs*) → rétroaction.
`,
    exercices: md`
### Exercice 2 — Le politique ou la politique ?

Classez : 1) la Constitution de 2011 ; 2) les alliances entre partis après les élections ; 3) le plan national de l'eau ; 4) un meeting de campagne à Agadir ; 5) l'organisation de la régionalisation avancée.

<details><summary>Voir le corrigé</summary>

1) Le politique (*polity*) : le cadre institutionnel. 2) La politique (*politics*) : compétition pour le pouvoir. 3) Une politique publique (*policy*). 4) La politique (*politics*). 5) Le politique (*polity*), même si sa mise en œuvre passe par des politiques publiques.

</details>

### Exercice 3 — Appliquer le modèle d'Easton

En 2011, des manifestations réclament des réformes ; le pouvoir annonce une révision constitutionnelle, adoptée par référendum ; de nouvelles revendications apparaissent ensuite sur l'emploi et les services publics. Analysez la séquence avec le modèle d'Easton.

<details><summary>Voir le corrigé</summary>

*Inputs* : les manifestations expriment des **demandes** (réformes politiques) ; le référendum mesure les **soutiens**. *Conversion* : le système politique transforme ces demandes en décision (commission de révision, projet de Constitution). *Output* : la Constitution de 2011. *Rétroaction* : la réforme modifie l'environnement et suscite de nouvelles demandes, cette fois économiques et sociales, qui reviennent comme *inputs*. Le modèle montre que la stabilité d'un système dépend de sa capacité à traiter les demandes, sans dire si la réponse était bonne ou mauvaise (neutralité axiologique).

</details>
`,
    qcm: [
      { q: "La formule Who Gets What, When, How est due à :", choix: ["Harold Lasswell", "David Easton", "Robert Dahl", "Max Weber"], bonne: 0, explication: "Ouvrage de 1936." },
      { q: "Le Prince de Machiavel est surtout important parce qu'il :", choix: ["Fonde le droit divin", "Sépare l'analyse du pouvoir de la morale", "Invente le suffrage universel", "Décrit la démocratie américaine"], bonne: 1, explication: "Il décrit le pouvoir tel qu'il s'exerce." },
      { q: "La notion de 'asabiyya est au cœur de l'œuvre de :", choix: ["Ibn Khaldoun", "Aristote", "Tocqueville", "Montesquieu"], bonne: 0, explication: "La cohésion du groupe explique l'essor et le déclin des dynasties." },
      { q: "De la démocratie en Amérique est l'œuvre de :", choix: ["Montesquieu", "Tocqueville", "Rousseau", "Duverger"], bonne: 1, explication: "Publiée en 1835 et 1840." },
      { q: "La neutralité axiologique consiste à :", choix: ["Ne jamais étudier la religion", "Séparer jugements de fait et jugements de valeur", "Refuser les statistiques", "Voter blanc"], bonne: 1, explication: "Règle de méthode posée par Weber." },
      { q: "Dans le modèle d'Easton, les lois et les budgets sont des :", choix: ["Inputs", "Outputs", "Soutiens", "Demandes"], bonne: 1, explication: "Ce sont les décisions produites par le système." },
      { q: "Le mot anglais policy désigne :", choix: ["La compétition électorale", "Les politiques publiques", "La police", "Le cadre constitutionnel"], bonne: 1, explication: "Politics désigne la compétition et polity le cadre." },
      { q: "L'entretien et l'observation directe relèvent de la méthode :", choix: ["Quantitative", "Qualitative", "Juridique", "Statistique"], bonne: 1, explication: "Elle cherche à comprendre de l'intérieur." },
      { q: "Le béhaviorisme en science politique étudie surtout :", choix: ["Les textes constitutionnels", "Les comportements observables", "La théologie", "Le droit civil"], bonne: 1, explication: "Courant américain d'après 1945." },
      { q: "L'auteur du Commandeur des croyants, étude de la monarchie marocaine, est :", choix: ["John Waterbury", "Rémy Leveau", "Jacques Berque", "Clifford Geertz"], bonne: 0, explication: "Publié en 1970." },
    ],
  },

  2: {
    titre: "Le pouvoir politique et la légitimité",
    description: "Pouvoir politique : définitions de Weber et Dahl, trois dimensions de Lukes, légitimité, trois types de domination, élites et pluralisme.",
    resume: md`
## L'essentiel — Pouvoir et légitimité

- **Pouvoir** : relation, pas un bien ; Weber : faire triompher sa volonté même contre des résistances ; Dahl (1957) : obtenir de B ce qu'il n'aurait pas fait.
- Force (contrainte), influence (persuasion), **autorité** (pouvoir reconnu comme légitime) ; puissance et domination chez Weber.
- Lukes (1974) : décision, non-décision, façonnage des préférences ; Bourdieu : violence symbolique.
- **Légitimité** (croyance des gouvernés) ≠ **légalité** (conformité au droit).
- Weber : domination **traditionnelle**, **charismatique**, **légale-rationnelle** ; idéaux-types combinés ; routinisation du charisme.
- Maroc : combinaison des légitimités religieuse et historique (Commandeur des croyants, bay'a), nationale et légale-rationnelle (Constitution de 2011, élections).
- Élitistes : Mosca (classe politique, 1896), Pareto (circulation des élites), Michels (loi d'airain de l'oligarchie, 1911), Wright Mills (1956).
- Pluralisme : Dahl, *Who Governs?* (1961), élites multiples, polyarchie.
`,
    exercices: md`
### Exercice 2 — Légal ou légitime ?

Pour chaque cas, dites si le pouvoir est légal, légitime, les deux ou aucun : 1) un gouvernement issu d'élections régulières, largement soutenu ; 2) une junte qui a pris le pouvoir par la force et que la population rejette ; 3) un gouvernement régulièrement désigné, mais dont la politique provoque des grèves massives et une forte défiance ; 4) un chef de la résistance à l'occupation coloniale, reconnu par la population mais poursuivi par l'administration coloniale.

<details><summary>Voir le corrigé</summary>

1) Légal et légitime. 2) Ni légal (rupture de l'ordre constitutionnel) ni légitime (rejet). 3) Légal, mais sa légitimité est affaiblie : la légitimité se mesure à l'acceptation, pas seulement à la régularité de la désignation. 4) Légitime aux yeux de la population, mais illégal au regard du droit colonial en vigueur.

</details>

### Exercice 3 — Question de cours rédigée

Expliquez en une quinzaine de lignes ce que Robert Michels appelle la « loi d'airain de l'oligarchie » et en quoi elle intéresse l'étude des partis.

<details><summary>Voir le corrigé</summary>

Dans *Les Partis politiques* (1911), Michels étudie le parti social-démocrate allemand, pourtant attaché à la démocratie. Il constate que l'organisation produit nécessairement une **oligarchie** : la taille du parti impose une division du travail, des permanents spécialisés acquièrent compétences, information et contrôle de l'appareil, et les militants, peu disponibles, leur délèguent le pouvoir. Les dirigeants tendent alors à se maintenir et à défendre leurs propres intérêts. « Qui dit organisation dit oligarchie. » Pour l'étude des partis, la loi invite à observer la **démocratie interne** : désignation des dirigeants, renouvellement, place des congrès. Elle est discutée : primaires, limitation des mandats et rotation peuvent en atténuer les effets.

</details>
`,
    qcm: [
      { q: "Pour Robert Dahl, A a du pouvoir sur B s'il peut :", choix: ["Posséder plus de biens que B", "Obtenir de B une action qu'il n'aurait pas accomplie autrement", "Être élu avant B", "Parler plus fort que B"], bonne: 1, explication: "Définition relationnelle de 1957." },
      { q: "Un pouvoir reconnu comme ayant le droit de commander est :", choix: ["Une force", "Une autorité légitime", "Une influence", "Une oligarchie"], bonne: 1, explication: "La légitimité transforme la domination en autorité." },
      { q: "Le type de domination fondé sur des règles impersonnelles est :", choix: ["Traditionnel", "Charismatique", "Légal-rationnel", "Patriarcal"], bonne: 2, explication: "Typique de l'État moderne et de la bureaucratie." },
      { q: "La routinisation du charisme désigne :", choix: ["La disparition de toute autorité", "Le passage d'une autorité personnelle à une autorité institutionnalisée", "La fin des élections", "La multiplication des leaders charismatiques"], bonne: 1, explication: "Le charisme se transmet à une dynastie ou une organisation." },
      { q: "La loi d'airain de l'oligarchie est formulée par :", choix: ["Pareto", "Mosca", "Michels", "Dahl"], bonne: 2, explication: "Les Partis politiques, 1911." },
      { q: "La circulation des élites est une notion de :", choix: ["Vilfredo Pareto", "Steven Lukes", "David Easton", "Max Weber"], bonne: 0, explication: "Les élites se renouvellent ou sont remplacées." },
      { q: "Dans Who Governs? (1961), Robert Dahl conclut que :", choix: ["Une élite unique décide de tout", "Des élites multiples l'emportent selon les domaines", "Le peuple décide directement", "Les militaires gouvernent"], bonne: 1, explication: "C'est la thèse pluraliste." },
      { q: "La deuxième dimension du pouvoir selon Lukes est :", choix: ["La décision", "La non-décision", "La force armée", "Le vote"], bonne: 1, explication: "Empêcher qu'une question soit posée." },
      { q: "La légalité d'un pouvoir désigne :", choix: ["La croyance des gouvernés", "Sa conformité au droit", "Sa popularité", "Son ancienneté"], bonne: 1, explication: "À distinguer de la légitimité." },
      { q: "L'Élite du pouvoir (1956) est l'œuvre de :", choix: ["Charles Wright Mills", "Robert Michels", "Gaetano Mosca", "Pierre Bourdieu"], bonne: 0, explication: "Étude des élites politiques, militaires et économiques américaines." },
    ],
  },

  3: {
    titre: "Les régimes politiques : démocraties et régimes autoritaires",
    description: "Démocratie selon Schumpeter, polyarchie de Dahl, régime autoritaire selon Linz, totalitarisme, régimes hybrides et transitions démocratiques.",
    resume: md`
## L'essentiel — Démocraties et régimes autoritaires

- Classification politique (accès au pouvoir, libertés, contre-pouvoirs) ≠ classification juridique (rapports entre pouvoirs).
- **Schumpeter** (1942) : démocratie = lutte concurrentielle pour les votes (définition minimale).
- **Dahl**, *Polyarchy* (1971) : contestation + participation ; élections libres, suffrage universel, libertés d'expression, d'information, d'association.
- Lijphart (1999) : démocraties majoritaires et consensuelles.
- **Linz** (1964) : régime autoritaire = pluralisme limité, mentalités, démobilisation, pouvoir aux limites mal définies mais prévisibles.
- **Totalitarisme** : Arendt (1951), idéologie et terreur ; Friedrich et Brzezinski (1956) : idéologie, parti unique, police terroriste, monopoles des médias et des armes, économie dirigée.
- Régimes hybrides : autoritarisme compétitif (Levitsky et Way), démocratie illibérale (Zakaria) ; continuum.
- Huntington (1991) : trois vagues de démocratisation, la troisième à partir de 1974 (Portugal).
- O'Donnell et Schmitter (1986) : libéralisation, transition, consolidation ; 2011 : rupture tunisienne, réforme constitutionnelle marocaine.
`,
    exercices: md`
### Exercice 2 — Autoritaire ou totalitaire ?

Pour chaque trait, indiquez s'il caractérise plutôt un régime autoritaire ou totalitaire : 1) pluralisme limité ; 2) mobilisation permanente des masses ; 3) idéologie qui prétend tout expliquer ; 4) passivité attendue de la population ; 5) absorption de la sphère privée par l'État.

<details><summary>Voir le corrigé</summary>

1) Autoritaire. 2) Totalitaire. 3) Totalitaire. 4) Autoritaire (démobilisation selon Linz). 5) Totalitaire : le régime veut contrôler la totalité de la vie sociale et individuelle.

</details>

### Exercice 3 — Dissertation : plan détaillé

Proposez un plan pour le sujet : « Des élections suffisent-elles à faire une démocratie ? »

<details><summary>Voir le corrigé</summary>

*Introduction* : définitions (élection, démocratie) ; Schumpeter réduit la démocratie à la compétition électorale ; problématique : l'élection est-elle une condition suffisante ou seulement nécessaire ?
**I. L'élection, condition nécessaire de la démocratie** — A. La définition procédurale : sélection concurrentielle des gouvernants (Schumpeter). B. L'élection fonde la légitimité légale-rationnelle et permet l'alternance.
**II. Une condition insuffisante** — A. Les conditions de la polyarchie : libertés d'expression, d'information, d'association, droit de se présenter (Dahl). B. Les régimes hybrides : des élections sans compétition équitable (autoritarisme compétitif) ou des élus qui affaiblissent les contre-pouvoirs (démocratie illibérale).
*Conclusion* : l'élection est le cœur de la démocratie, mais elle n'a de sens qu'entourée de libertés et de contre-pouvoirs ; ouverture sur la consolidation démocratique.

</details>
`,
    qcm: [
      { q: "La définition de la démocratie comme lutte concurrentielle pour les votes est due à :", choix: ["Joseph Schumpeter", "Robert Dahl", "Juan Linz", "Hannah Arendt"], bonne: 0, explication: "Capitalisme, socialisme et démocratie, 1942." },
      { q: "Les deux dimensions de la polyarchie selon Dahl sont :", choix: ["Ordre et progrès", "Contestation et participation", "Religion et tradition", "Force et ruse"], bonne: 1, explication: "Libéralisation et inclusion." },
      { q: "Le pluralisme limité est un critère du régime :", choix: ["Démocratique", "Autoritaire", "Totalitaire", "Directorial"], bonne: 1, explication: "Définition de Juan Linz." },
      { q: "Les Origines du totalitarisme (1951) est l'œuvre de :", choix: ["Raymond Aron", "Hannah Arendt", "Carl Schmitt", "Max Weber"], bonne: 1, explication: "Elle y analyse le nazisme et le stalinisme." },
      { q: "Parmi les traits du totalitarisme selon Friedrich et Brzezinski figure :", choix: ["Le multipartisme", "Le monopole des moyens de communication", "La séparation des pouvoirs", "L'alternance"], bonne: 1, explication: "Avec l'idéologie, le parti unique, la terreur, le monopole des armes et l'économie dirigée." },
      { q: "L'autoritarisme compétitif désigne un régime :", choix: ["Sans aucune élection", "Avec des élections réelles mais une compétition faussée", "Totalitaire", "Parfaitement démocratique"], bonne: 1, explication: "Notion de Levitsky et Way." },
      { q: "La troisième vague de démocratisation commence en 1974 avec :", choix: ["La chute du mur de Berlin", "La révolution des Œillets au Portugal", "Les indépendances africaines", "La Révolution française"], bonne: 1, explication: "Selon Huntington, The Third Wave (1991)." },
      { q: "Lijphart oppose les démocraties majoritaires et :", choix: ["Autoritaires", "Consensuelles", "Totalitaires", "Directes"], bonne: 1, explication: "Patterns of Democracy, 1999." },
      { q: "La consolidation démocratique est atteinte quand :", choix: ["Le régime organise une seule élection", "La démocratie devient le seul jeu possible pour les acteurs", "L'armée prend le pouvoir", "La Constitution est suspendue"], bonne: 1, explication: "Dernière étape après libéralisation et transition." },
      { q: "La Constitution tunisienne de 2014 a été adoptée par :", choix: ["Un octroi royal", "Une Assemblée constituante élue", "Un décret militaire", "Un traité international"], bonne: 1, explication: "Transition par rupture, à comparer à la réforme marocaine." },
    ],
  },

  4: {
    titre: "Les partis politiques",
    description: "Partis politiques : définition de LaPalombara et Weiner, origines, fonctions, typologies, lois de Duverger, système de partis marocain.",
    resume: md`
## L'essentiel — Les partis politiques

- **LaPalombara et Weiner** (1966) : organisation durable, complète, volonté d'exercer le pouvoir, recherche du soutien populaire.
- Maroc : article 7 (missions, interdiction des partis fondés sur une base religieuse, linguistique, ethnique ou régionale) ; loi organique 29-11.
- Origines (Duverger, 1951) : électorale et parlementaire ou extérieure ; clivages de Lipset et Rokkan (1967) : centre/périphérie, État/Église, terre/industrie, possédants/travailleurs.
- Fonctions : programme, sélection des élites, structuration du vote, mobilisation, gouvernement ou opposition, fonction tribunitienne (Lavau).
- Types : cadres et masse (Duverger), attrape-tout (Kirchheimer, 1966), cartel (Katz et Mair, 1995).
- Systèmes : parti unique, dominant, bipartisme, multipartisme ; Sartori : pluralisme modéré ou polarisé.
- Lois de Duverger : majoritaire à un tour → bipartisme ; proportionnelle → multipartisme ; deux tours → alliances.
- Maroc : multipartisme dès 1962, système fragmenté, coalitions ; 2021 : RNI 102 sièges, PAM 87, Istiqlal 81.
- Article 61 : déchéance du parlementaire qui change d'appartenance politique (anti-transhumance).
`,
    exercices: md`
### Exercice 2 — Quel type de parti ?

Classez : 1) un parti qui compte 300 000 adhérents cotisants, des cellules dans les usines et une école de formation idéologique ; 2) un parti formé de notables locaux influents, actif surtout avant les élections ; 3) un parti qui gomme son idéologie pour séduire tous les électeurs et met en avant son leader ; 4) un parti financé surtout par l'argent public, qui s'entend avec ses concurrents pour limiter l'entrée de nouveaux partis.

<details><summary>Voir le corrigé</summary>

1) Parti de masse (Duverger). 2) Parti de cadres (Duverger). 3) Parti attrape-tout (Kirchheimer). 4) Parti cartel (Katz et Mair).

</details>

### Exercice 3 — Lois de Duverger

Le pays X passe du scrutin majoritaire uninominal à un tour à la représentation proportionnelle intégrale. Quel effet peut-on attendre sur son système de partis ? Pourquoi ce n'est qu'une tendance ?

<details><summary>Voir le corrigé</summary>

Avec le scrutin majoritaire à un tour, les petits partis sont pénalisés (effet mécanique : seul le premier gagne le siège) et les électeurs évitent de « gaspiller » leur voix (effet psychologique) : on tend au bipartisme. La proportionnelle supprime ces effets : chaque courant obtient des sièges à proportion de ses voix, ce qui encourage la création et le maintien de petits partis, d'où une tendance au **multipartisme** et aux coalitions. Ce n'est qu'une tendance : d'autres facteurs comptent (clivages sociaux, régionalisme, seuils électoraux, taille des circonscriptions, histoire des partis).

</details>
`,
    qcm: [
      { q: "Selon LaPalombara et Weiner, un parti se distingue d'un groupe d'intérêt par :", choix: ["Son nombre d'adhérents", "Sa volonté de conquérir et d'exercer le pouvoir", "Son ancienneté", "Son financement"], bonne: 1, explication: "Le groupe d'intérêt cherche seulement à influencer." },
      { q: "Le Parti travailliste britannique, né des syndicats, est un parti d'origine :", choix: ["Parlementaire", "Extérieure", "Militaire", "Coloniale"], bonne: 1, explication: "Classification de Duverger." },
      { q: "Le clivage possédants / travailleurs naît de la révolution :", choix: ["Nationale", "Industrielle", "Religieuse", "Numérique"], bonne: 1, explication: "Lipset et Rokkan, 1967." },
      { q: "Le parti attrape-tout est une notion de :", choix: ["Otto Kirchheimer", "Maurice Duverger", "Robert Michels", "Giovanni Sartori"], bonne: 0, explication: "Catch-all party, 1966." },
      { q: "Selon Duverger, le scrutin majoritaire à un tour tend à produire :", choix: ["Le multipartisme", "Le bipartisme", "Le parti unique", "L'absence de partis"], bonne: 1, explication: "Effets mécanique et psychologique." },
      { q: "La loi organique marocaine relative aux partis politiques porte le numéro :", choix: ["29-11", "27-11", "113-14", "066-13"], bonne: 0, explication: "Adoptée en 2011." },
      { q: "L'article 7 de la Constitution interdit les partis fondés notamment sur :", choix: ["Un programme économique", "Une base ethnique ou régionale", "Une idéologie libérale", "Le soutien des jeunes"], bonne: 1, explication: "Ainsi que sur une base religieuse ou linguistique." },
      { q: "Le Manifeste de l'indépendance du 11 janvier 1944 est lié au :", choix: ["Parti de l'Istiqlal", "RNI", "PAM", "Union constitutionnelle"], bonne: 0, explication: "Parti issu du mouvement national." },
      { q: "Aux législatives du 8 septembre 2021, le parti arrivé en tête est :", choix: ["Le PJD", "Le RNI", "L'USFP", "Le MP"], bonne: 1, explication: "102 sièges sur 395." },
      { q: "La déchéance du parlementaire qui change d'appartenance politique est prévue par :", choix: ["L'article 61", "L'article 2", "L'article 130", "L'article 175"], bonne: 0, explication: "Disposition contre la transhumance." },
    ],
  },

  5: {
    titre: "Les groupes d'intérêt et la société civile",
    description: "Groupes d'intérêt et de pression, paradoxe d'Olson, lobbying, répertoire d'action de Tilly, syndicats, patronat et associations au Maroc.",
    resume: md`
## L'essentiel — Groupes d'intérêt et société civile

- **Groupe d'intérêt** : défend un intérêt ou une cause ; **groupe de pression** : le même quand il agit sur les pouvoirs publics (Meynaud, 1960).
- Le groupe veut **influencer** le pouvoir ; le parti veut l'**exercer**.
- Classements : intérêts matériels / cause ; masse / cadres ; privés / publics (chambres professionnelles).
- **Olson** (1965) : passager clandestin, incitations sélectives ; les petits groupes s'organisent plus facilement.
- Modes d'action : lobbying et expertise, action sur l'opinion, action protestataire (grève, manifestation, boycott), recours au juge.
- **Tilly** : répertoire d'action collective, qui change avec les époques (réseaux sociaux, boycott de 2018).
- Pluralisme / **néo-corporatisme** (Schmitter, 1974) ; dialogue social marocain : gouvernement, centrales (UMT, UGTM, CDT), CGEM.
- Constitution : article 8 (syndicats, patronat, chambres), article 12 (associations), article 13 (concertation), CESE (articles 151 à 153) ; dahir de 1958 sur les associations.
- Mouvement social : action collective peu institutionnalisée (mouvement du 20 février 2011).
`,
    exercices: md`
### Exercice 2 — Intérêts matériels ou cause ?

Classez : 1) l'ordre des médecins ; 2) une association de défense des droits des personnes en situation de handicap ; 3) une fédération des transporteurs routiers ; 4) une ONG de protection du littoral ; 5) une chambre d'agriculture.

<details><summary>Voir le corrigé</summary>

1) Intérêts matériels et professionnels (ordre professionnel, à statut particulier). 2) Cause. 3) Intérêts matériels. 4) Cause. 5) Intérêts matériels, groupe de statut public (établissement public).

</details>

### Exercice 3 — Question de cours rédigée

Comparez le pluralisme et le néo-corporatisme, puis situez le dialogue social marocain.

<details><summary>Voir le corrigé</summary>

*Pluralisme* : de nombreux groupes en concurrence, aucun monopole de représentation, influence par le lobbying (modèle américain). *Néo-corporatisme* (Schmitter) : un petit nombre d'organisations reconnues comme représentatives négocient avec l'État et participent à la décision et à sa mise en œuvre (Autriche, Scandinavie). *Maroc* : le dialogue social tripartite (gouvernement, centrales les plus représentatives, CGEM), la présence de ces organisations au CESE et l'article 8 (l'État favorise la négociation collective) relèvent d'une logique néo-corporatiste ; mais de nombreux autres groupes (associations, coordinations professionnelles, mouvements en ligne) agissent en dehors de ces canaux, ce qui ajoute une dimension pluraliste.

</details>
`,
    qcm: [
      { q: "Un groupe d'intérêt devient groupe de pression lorsqu'il :", choix: ["Présente des candidats aux élections", "Agit sur les pouvoirs publics", "Compte plus de mille membres", "Reçoit des subventions"], bonne: 1, explication: "Définition de Jean Meynaud." },
      { q: "Le paradoxe du passager clandestin est formulé par :", choix: ["Mancur Olson", "Charles Tilly", "Robert Dahl", "Philippe Schmitter"], bonne: 0, explication: "La Logique de l'action collective, 1965." },
      { q: "Les incitations sélectives sont :", choix: ["Des avantages réservés aux membres d'un groupe", "Des sanctions pénales", "Des subventions publiques à tous", "Des quotas électoraux"], bonne: 0, explication: "Elles surmontent le paradoxe d'Olson." },
      { q: "La notion de répertoire d'action collective est due à :", choix: ["Charles Tilly", "Max Weber", "Maurice Duverger", "Gaetano Mosca"], bonne: 0, explication: "Les moyens d'action changent selon les époques." },
      { q: "Le néo-corporatisme désigne :", choix: ["La concurrence libre entre de nombreux groupes", "La négociation entre l'État et quelques grandes organisations reconnues", "L'interdiction des syndicats", "Le parti unique"], bonne: 1, explication: "Notion de Philippe Schmitter, 1974." },
      { q: "L'article de la Constitution de 2011 consacré aux associations de la société civile est :", choix: ["L'article 12", "L'article 47", "L'article 105", "L'article 172"], bonne: 0, explication: "Elles se constituent et agissent librement." },
      { q: "L'Union marocaine du travail a été créée en :", choix: ["1955", "1978", "1998", "2011"], bonne: 0, explication: "La CDT date de 1978." },
      { q: "Les chambres de commerce, d'industrie et de services sont :", choix: ["Des associations privées", "Des établissements publics", "Des partis politiques", "Des sociétés anonymes"], bonne: 1, explication: "Groupes de statut public." },
      { q: "Le texte de base sur le droit d'association au Maroc date de :", choix: ["1913", "1958", "2004", "2016"], bonne: 1, explication: "Dahir du 15 novembre 1958." },
      { q: "Le Conseil économique, social et environnemental est prévu par les articles :", choix: ["151 à 153", "129 à 134", "172 à 175", "60 à 69"], bonne: 0, explication: "Il donne des avis et associe les acteurs sociaux." },
    ],
  },

  6: {
    titre: "La participation politique et le comportement électoral",
    description: "Participation politique, abstention sociologique et politique, cens caché, modèles du vote : Columbia, Michigan, Downs, géographie électorale.",
    resume: md`
## L'essentiel — Participation et vote

- **Participation** conventionnelle (vote, militantisme, pétition) et non conventionnelle (manifestation, grève, boycott) ; Barnes et Kaase (1979).
- Milbrath (1965) : gladiateurs, spectateurs, apathiques ; Gaxie (1978) : **cens caché**.
- Participation = votants / inscrits ; abstention = (inscrits − votants) / inscrits ; exprimés = votants − blancs et nuls.
- Au Maroc, inscription volontaire : la non-inscription s'ajoute à l'abstention ; législatives : 37 % en 2007, 50,35 % en 2021.
- Abstention **sociologique** (hors du jeu, Lancelot) et **politique** (dans le jeu, Jaffré et Muxel).
- **Columbia** (Lazarsfeld, *The People's Choice*, 1944) : vote déterminé par les caractéristiques sociales, leaders d'opinion.
- **Siegfried** (1913) : géographie électorale.
- **Michigan** (*The American Voter*, 1960) : identification partisane.
- **Downs** (1957) : électeur rationnel, paradoxe du vote ; vote sur enjeux, vote rétrospectif, vote clientéliste.
`,
    exercices: md`
### Exercice 2 — Quel modèle ?

Rattachez chaque explication à un modèle : 1) « Dans cette famille, on vote pour ce parti depuis trois générations » ; 2) « J'ai voté contre le gouvernement à cause de la hausse des prix » ; 3) « Les agriculteurs propriétaires de l'Ouest votent à droite, les ouvriers des villes à gauche » ; 4) « J'ai comparé les programmes sur l'emploi et choisi le plus avantageux pour moi » ; 5) « Les cantons granitiques votent autrement que les cantons calcaires ».

<details><summary>Voir le corrigé</summary>

1) Psychosocial (Michigan) : identification partisane transmise par la famille. 2) Vote rétrospectif (sanction du bilan). 3) Sociologique (Columbia) : position sociale. 4) Économique ou rationnel (Downs), vote sur enjeux. 5) Géographie électorale (Siegfried).

</details>

### Exercice 3 — Évolution de la participation

Dans une circonscription, il y avait 80 000 inscrits et 30 400 votants en 2016 ; en 2021, 84 000 inscrits et 42 000 votants. Calculez les taux de participation et l'évolution en points, puis proposez une interprétation prudente.

<details><summary>Voir le corrigé</summary>

2016 : 30 400 / 80 000 = **38 %**. 2021 : 42 000 / 84 000 = **50 %**. Hausse de **12 points**. Interprétation : la hausse peut tenir à des facteurs institutionnels (élections locales et nationales le même jour, mobilisation des candidats aux communales), à l'offre (nouveaux candidats, enjeux plus visibles) ou au contexte. Le nombre d'inscrits ayant aussi augmenté, il faudrait vérifier qui sont les nouveaux inscrits ; seule une enquête permettrait de trancher entre ces hypothèses.

</details>
`,
    qcm: [
      { q: "Le taux de participation se calcule par rapport :", choix: ["À la population totale", "Aux électeurs inscrits", "Aux suffrages exprimés", "Aux candidats"], bonne: 1, explication: "Votants divisés par inscrits." },
      { q: "Les suffrages exprimés correspondent :", choix: ["Aux inscrits", "Aux votants moins les bulletins blancs et nuls", "Aux abstentionnistes", "Aux votants plus les nuls"], bonne: 1, explication: "Ils servent à calculer les scores des listes." },
      { q: "La notion de cens caché est due à :", choix: ["Daniel Gaxie", "André Siegfried", "Anthony Downs", "Paul Lazarsfeld"], bonne: 0, explication: "Le Cens caché, 1978." },
      { q: "The People's Choice (1944) est associé à l'école :", choix: ["De Michigan", "De Columbia", "De Chicago", "De Francfort"], bonne: 1, explication: "Paul Lazarsfeld et le modèle sociologique." },
      { q: "L'identification partisane est la variable centrale du modèle :", choix: ["Sociologique", "Psychosocial de Michigan", "Économique de Downs", "Géographique"], bonne: 1, explication: "The American Voter, 1960." },
      { q: "Le paradoxe du vote est mis en évidence par :", choix: ["Le modèle économique de Downs", "Le modèle de Siegfried", "Le cens caché", "L'école de Columbia"], bonne: 0, explication: "Le coût du vote dépasse son utilité attendue." },
      { q: "André Siegfried est considéré comme le fondateur de :", choix: ["La géographie électorale", "La théorie des élites", "Le modèle de Michigan", "La science administrative"], bonne: 0, explication: "Tableau politique de la France de l'Ouest, 1913." },
      { q: "L'abstention politique désigne celle d'électeurs :", choix: ["Peu intégrés et éloignés de la politique", "Intégrés qui choisissent de ne pas voter pour exprimer un message", "Non inscrits", "Étrangers"], bonne: 1, explication: "Abstention dans le jeu." },
      { q: "Le taux de participation officiel aux législatives marocaines de 2021 est de :", choix: ["37 %", "50,35 %", "73 %", "28 %"], bonne: 1, explication: "Selon le ministère de l'Intérieur." },
      { q: "Les gladiateurs, dans la typologie de Milbrath, sont :", choix: ["Les abstentionnistes", "Les citoyens les plus engagés", "Les électeurs flottants", "Les sondeurs"], bonne: 1, explication: "Militants et candidats, une petite minorité." },
    ],
  },

  7: {
    titre: "La culture politique, la socialisation et l'opinion publique",
    description: "Culture politique d'Almond et Verba, capital social de Putnam, socialisation politique, opinion publique, sondages et marge d'erreur, médias.",
    resume: md`
## L'essentiel — Culture, socialisation, opinion

- **Culture politique** : connaissances, valeurs et attitudes envers le système politique.
- Almond et Verba, *The Civic Culture* (1963) : cultures paroissiale, de sujétion, de participation ; la culture civique est un mélange.
- Putnam (1993) : **capital social** (réseaux, réciprocité, confiance) ; *Bowling Alone* (2000).
- **Socialisation** primaire (famille, école, pairs) et secondaire (travail, associations, partis, médias) ; Percheron : force de la transmission familiale ; effets de génération.
- **Opinion publique** : naissance au XVIIIe siècle (Habermas, 1962) ; Bourdieu (1972) : « L'opinion publique n'existe pas », trois postulats critiqués.
- Sondage : échantillon aléatoire ou par quotas ; marge d'erreur à 95 % : 1,96 × racine de p(1 − p)/n, environ 3,1 points pour 1 000 personnes à 50 %.
- Médias : effets limités et leaders d'opinion (Lazarsfeld, Katz), agenda-setting (McCombs et Shaw, 1972), spirale du silence (Noelle-Neumann, 1974), bulles de filtres.
- Maroc : HACA (article 165), pluralisme des opinions dans l'audiovisuel.
`,
    exercices: md`
### Exercice 2 — Quel type de culture politique ?

Rattachez chaque attitude à une culture politique selon Almond et Verba : 1) « Ce qui se décide à Rabat ne me concerne pas, seuls comptent mon village et ma famille » ; 2) « Je respecte les lois et je fais mes démarches à l'administration, mais je ne pense pas pouvoir changer quoi que ce soit » ; 3) « Je milite dans une association et j'interpelle mes élus sur les projets de ma commune ».

<details><summary>Voir le corrigé</summary>

1) Paroissiale : horizon limité à la communauté locale. 2) De sujétion : connaissance du système, mais position passive. 3) De participation : le citoyen se pense comme acteur. La culture civique combinerait ces attitudes.

</details>

### Exercice 3 — Marge d'erreur

Un sondage auprès de 400 personnes (échantillon aléatoire) donne 50 % d'opinions favorables. Calculez la marge d'erreur à 95 %. Comparez avec un échantillon de 1 000 personnes et concluez.

<details><summary>Voir le corrigé</summary>

Pour *n* = 400 : 0,5 × 0,5 / 400 = 0,000625 ; racine = 0,025 ; × 1,96 = 0,049, soit **± 4,9 points** (intervalle de 45,1 % à 54,9 %). Pour *n* = 1 000 : environ **± 3,1 points**. Multiplier l'échantillon par 2,5 ne réduit la marge que d'environ un tiers : la précision augmente comme la racine carrée de la taille de l'échantillon. Un petit échantillon ne permet donc pas de conclure sur des écarts de quelques points.

</details>
`,
    qcm: [
      { q: "The Civic Culture (1963) est l'œuvre de :", choix: ["Almond et Verba", "Lazarsfeld et Katz", "Lipset et Rokkan", "McCombs et Shaw"], bonne: 0, explication: "Enquête comparative dans cinq pays." },
      { q: "Dans la culture de sujétion, les individus :", choix: ["Ignorent le système politique", "Connaissent le système mais se voient comme passifs", "Se pensent comme acteurs", "Rejettent toute autorité"], bonne: 1, explication: "Ils reçoivent les décisions sans chercher à les influencer." },
      { q: "La notion de capital social est associée à :", choix: ["Robert Putnam", "Hannah Arendt", "Juan Linz", "Max Weber"], bonne: 0, explication: "Making Democracy Work, 1993." },
      { q: "L'agent principal de la socialisation politique primaire est :", choix: ["Le parti", "La famille", "Le syndicat", "Le Parlement"], bonne: 1, explication: "Avec l'école et le groupe de pairs." },
      { q: "La conférence « L'opinion publique n'existe pas » est de :", choix: ["Pierre Bourdieu", "Jürgen Habermas", "Raymond Aron", "Alain Lancelot"], bonne: 0, explication: "Critique des postulats des sondages, 1972." },
      { q: "La théorie de l'agenda-setting affirme que les médias :", choix: ["Dictent aux gens quoi penser", "Disent aux gens à quoi penser", "N'ont aucun effet", "Remplacent les partis"], bonne: 1, explication: "McCombs et Shaw, 1972." },
      { q: "La spirale du silence est une théorie de :", choix: ["Elisabeth Noelle-Neumann", "Eli Pariser", "Annick Percheron", "Daniel Gaxie"], bonne: 0, explication: "Les opinions perçues comme minoritaires se taisent." },
      { q: "Pour 1 000 personnes et une proportion de 50 %, la marge d'erreur à 95 % est d'environ :", choix: ["1 point", "3,1 points", "10 points", "0,3 point"], bonne: 1, explication: "1,96 fois la racine de 0,25 divisé par 1 000." },
      { q: "La méthode des quotas consiste à :", choix: ["Tirer au sort sans contrainte", "Reproduire la structure de la population par sexe, âge, profession et région", "Interroger seulement des volontaires", "Interroger toute la population"], bonne: 1, explication: "Alternative au tirage aléatoire." },
      { q: "L'autorité marocaine chargée de veiller au pluralisme dans l'audiovisuel est :", choix: ["La HACA", "La Cour des comptes", "Bank Al-Maghrib", "Le CESE"], bonne: 0, explication: "Haute Autorité de la communication audiovisuelle, article 165." },
    ],
  },
};

export default chapitres;
