// Introduction aux relations internationales (Droit S2) — compléments par chapitre : description SEO, résumé, exercices 2 et 3, QCM.
const md = String.raw;

const chapitres = {
  1: {
    titre: "Les relations internationales : objet, discipline et méthodes",
    description: "Introduction aux relations internationales : définition, différence avec le droit international, naissance de la discipline, puissance et anarchie.",
    resume: md`
## L'essentiel — Objet et discipline

- **Relations internationales** : relations qui franchissent les frontières, entre États et entre acteurs non étatiques ; objet et discipline.
- Relations **interétatiques** (diplomatie, traités, guerre) / **transnationales** (flux privés, réseaux, ONG).
- À distinguer du **droit international public** (règles) et de la **politique étrangère** (action d'un État).
- Précurseurs : Thucydide, Ibn Khaldoun (1377), Machiavel (1532), Hobbes (1651), Kant (1795).
- Discipline née en **1919** (Aberystwyth) ; essor américain après 1945.
- Débats : idéalistes / réalistes (Carr 1939, Morgenthau 1948) ; traditionalistes / béhavioristes ; néoréalistes, néolibéraux, approches critiques ; Aron (1962).
- **Système international** : nombre de pôles, homogénéité ; **anarchie** = absence d'autorité supérieure, pas chaos.
- **Puissance** : hard power, soft power (Nye, 1990), smart power ; exemples marocains (diplomatie religieuse, économique, sportive).
- Trois niveaux d'analyse (Waltz, 1959) : individu, État, système.
`,
    exercices: md`
### Exercice 2 — Interétatique ou transnational ?

Classez : 1) une visite officielle du chef du gouvernement à Madrid ; 2) les transferts d'argent des Marocains résidant à l'étranger ; 3) la signature d'un accord de libre-échange ; 4) une campagne mondiale d'une ONG de défense de l'environnement ; 5) une cyberattaque menée par un groupe criminel contre des banques de plusieurs pays.

<details><summary>Voir le corrigé</summary>

1) Interétatique (diplomatie). 2) Transnational (flux privés), même si l'État les encourage. 3) Interétatique (traité). 4) Transnational (acteur non étatique). 5) Transnational (acteur criminel), qui appelle une réponse interétatique (coopération policière).

</details>

### Exercice 3 — Hard power ou soft power ?

Classez : a) l'achat d'avions de combat ; b) l'accueil de milliers d'étudiants africains dans les universités marocaines ; c) des sanctions économiques ; d) la formation d'imams étrangers ; e) l'organisation d'une Coupe du monde de football.

<details><summary>Voir le corrigé</summary>

a) Hard power (militaire). b) Soft power (attractivité, formation des élites). c) Hard power (contrainte économique). d) Soft power (influence religieuse et culturelle). e) Soft power (image, prestige), avec des retombées économiques.

</details>
`,
    qcm: [
      { q: "Le critère premier des relations internationales est :", choix: ["La nationalité des acteurs", "Le franchissement d'une frontière", "L'existence d'un traité", "La guerre"], bonne: 1, explication: "Relations qui se nouent par-delà les frontières." },
      { q: "La première chaire de relations internationales a été créée en :", choix: ["1648", "1815", "1919", "1945"], bonne: 2, explication: "À Aberystwyth, au Pays de Galles." },
      { q: "Politics Among Nations (1948) est l'œuvre de :", choix: ["Raymond Aron", "Hans Morgenthau", "Joseph Nye", "Kenneth Waltz"], bonne: 1, explication: "Fondateur du réalisme classique américain." },
      { q: "L'anarchie internationale signifie :", choix: ["Le chaos permanent", "L'absence d'autorité supérieure aux États", "La guerre de tous contre tous", "L'absence de droit international"], bonne: 1, explication: "Il n'existe pas de gouvernement mondial." },
      { q: "Le concept de soft power est dû à :", choix: ["Joseph Nye", "Thucydide", "Edward Carr", "Machiavel"], bonne: 0, explication: "1990 : la puissance par l'attraction." },
      { q: "Paix et guerre entre les nations (1962) est l'œuvre de :", choix: ["Raymond Aron", "Hans Morgenthau", "Samuel Huntington", "Alexander Wendt"], bonne: 0, explication: "Sociologie historique des relations internationales." },
      { q: "Les trois niveaux d'analyse (individu, État, système) sont proposés par :", choix: ["Kenneth Waltz", "Woodrow Wilson", "Ibn Khaldoun", "Kant"], bonne: 0, explication: "Man, the State and War, 1959." },
      { q: "Un transfert d'argent d'un émigré vers sa famille est une relation :", choix: ["Interétatique", "Transnationale", "Diplomatique", "Militaire"], bonne: 1, explication: "Il ne passe pas par les gouvernements." },
      { q: "Le Projet de paix perpétuelle (1795) est l'œuvre de :", choix: ["Hobbes", "Kant", "Machiavel", "Rousseau"], bonne: 1, explication: "Référence de la tradition libérale." },
      { q: "L'étude de la stratégie africaine du Maroc relève surtout de :", choix: ["La politique étrangère", "Le droit pénal", "Le droit civil", "La procédure civile"], bonne: 0, explication: "Action extérieure d'un État déterminé." },
    ],
  },

  2: {
    titre: "La formation du système international : de Westphalie à nos jours",
    description: "Histoire du système international : Westphalie (1648), congrès de Vienne, SDN, création de l'ONU, guerre froide, décolonisation, monde multipolaire.",
    resume: md`
## L'essentiel — Le système international

- **Westphalie** (1648) : souveraineté territoriale, égalité des États, non-ingérence.
- Le Maroc, État ancien (dynastie alaouite depuis le XVIIᵉ siècle), reconnaît très tôt les États-Unis (traité de 1786).
- **Congrès de Vienne** (1815) : concert européen, **équilibre des puissances**.
- Pressions coloniales sur le Maroc : Isly (1844), Algésiras (1906), traité de Fès (**30 mars 1912**).
- **SDN** (1919-1920) : sécurité collective ; échec (absence des États-Unis, unanimité, pas de force, retraits).
- **Charte de l'ONU** (26 juin 1945) : membres permanents et veto, interdiction de la force (article 2, paragraphe 4), chapitre VII ; Maroc admis le **12 novembre 1956**.
- **Guerre froide** (1947-1991) : bipolarité, OTAN (1949) et Varsovie (1955), dissuasion nucléaire, crise de Cuba (1962).
- Décolonisation et **non-alignement** (Bandung 1955, Belgrade 1961).
- Après 1991 : Fukuyama (1989), Huntington (1996), moment unipolaire, 11 septembre 2001, montée de la Chine, Ukraine (2022), BRICS élargis (2024) : monde **multipolaire**.
`,
    exercices: md`
### Exercice 2 — Chronologie

Remettez dans l'ordre et datez : création de l'OTAN ; traité de Fès ; chute du mur de Berlin ; traités de Westphalie ; conférence de Bandung ; signature de la Charte des Nations unies ; congrès de Vienne ; admission du Maroc à l'ONU.

<details><summary>Voir le corrigé</summary>

Westphalie (1648) ; congrès de Vienne (1815) ; traité de Fès (1912) ; Charte des Nations unies (1945) ; OTAN (1949) ; Bandung (1955) ; admission du Maroc à l'ONU (1956) ; chute du mur de Berlin (1989).

</details>

### Exercice 3 — Dissertation : plan détaillé

Proposez un plan pour le sujet : « Le monde est-il sorti du système westphalien ? »

<details><summary>Voir le corrigé</summary>

*Introduction* : définition du système westphalien (États souverains, égaux, non-ingérence) ; problématique : la mondialisation et les acteurs non étatiques ont-ils remis en cause ce modèle ?
**I. Un modèle toujours central** — A. L'État reste l'acteur principal : universalisation par la décolonisation, 193 membres de l'ONU. B. La souveraineté demeure le fondement du droit international (article 2 de la Charte) et une revendication forte des États du Sud.
**II. Un modèle concurrencé** — A. L'essor des acteurs non étatiques (firmes, ONG, réseaux terroristes) et des problèmes globaux (climat, pandémies). B. Les limites apportées à la souveraineté : intégration régionale (Union européenne), droits de l'homme, responsabilité de protéger.
*Conclusion* : un système « post-westphalien » en construction, dans lequel l'État reste incontournable mais n'est plus seul.

</details>
`,
    qcm: [
      { q: "Les traités de Westphalie datent de :", choix: ["1492", "1648", "1815", "1919"], bonne: 1, explication: "Fin de la guerre de Trente Ans." },
      { q: "Le congrès de Vienne (1815) repose sur le principe :", choix: ["De l'équilibre des puissances", "De la sécurité collective universelle", "Du non-alignement", "De la bipolarité"], bonne: 0, explication: "Concert européen." },
      { q: "Le protectorat français au Maroc est instauré par le traité de Fès du :", choix: ["30 mars 1912", "7 avril 1906", "2 mars 1956", "18 novembre 1955"], bonne: 0, explication: "Après la conférence d'Algésiras de 1906." },
      { q: "Les Quatorze points sont proposés par :", choix: ["Woodrow Wilson", "Franklin Roosevelt", "Winston Churchill", "Lénine"], bonne: 0, explication: "Janvier 1918." },
      { q: "Une cause de l'échec de la SDN est :", choix: ["La présence des États-Unis", "La règle de l'unanimité", "Le droit de veto", "Le chapitre VII"], bonne: 1, explication: "Elle paralysait les décisions." },
      { q: "La Charte des Nations unies est signée le :", choix: ["26 juin 1945", "24 octobre 1945", "10 décembre 1948", "12 novembre 1956"], bonne: 0, explication: "À San Francisco ; entrée en vigueur le 24 octobre." },
      { q: "Le Maroc est admis à l'ONU en :", choix: ["1945", "1956", "1962", "1975"], bonne: 1, explication: "Le 12 novembre 1956." },
      { q: "Le système de la guerre froide est :", choix: ["Multipolaire et homogène", "Bipolaire et hétérogène", "Unipolaire", "Apolaire"], bonne: 1, explication: "Deux blocs, deux idéologies." },
      { q: "La conférence de Bandung (1955) est liée :", choix: ["À l'OTAN", "Au mouvement des pays non alignés et afro-asiatiques", "À la SDN", "Au pacte de Varsovie"], bonne: 1, explication: "Affirmation des pays décolonisés." },
      { q: "Le Choc des civilisations (1996) est l'œuvre de :", choix: ["Francis Fukuyama", "Samuel Huntington", "Raymond Aron", "Joseph Nye"], bonne: 1, explication: "Thèse discutée des conflits entre aires culturelles." },
    ],
  },

  3: {
    titre: "Les grandes théories des relations internationales",
    description: "Théories des relations internationales : réalisme et néoréalisme, libéralisme et interdépendance, constructivisme, marxisme, dépendance et postcolonialisme.",
    resume: md`
## L'essentiel — Les théories

- Une théorie = une **grille de lecture** ; confronter plusieurs théories sur un même cas.
- **Réalisme classique** : Morgenthau (1948), intérêt national défini en termes de puissance, prudence.
- **Néoréalisme** : Waltz (1979), anarchie, self-help, répartition des capacités ; bipolarité jugée plus stable.
- **Dilemme de sécurité** ; réalisme offensif de Mearsheimer (2001).
- **Libéralisme** : Kant (1795), Wilson ; commerce pacificateur ; **paix démocratique** (Doyle, 1983).
- **Institutionnalisme néolibéral** : Keohane et Nye (1977), **interdépendance complexe**, les institutions facilitent la coopération.
- **Constructivisme** : Wendt (1992), « l'anarchie est ce que les États en font » ; identités, normes, idées.
- Approches critiques : Lénine (1916), dépendance (Prebisch, Samir Amin), système-monde (Wallerstein), postcolonialisme (Saïd, 1978), féminisme (résolution 1325, 2000).
- Chaque théorie éclaire une partie de la réalité et en laisse une autre dans l'ombre.
`,
    exercices: md`
### Exercice 2 — Quelle théorie ?

Attribuez chaque affirmation à une théorie : 1) les États qui commercent beaucoup entre eux se font rarement la guerre ; 2) un État ne peut compter que sur lui-même dans un système sans autorité supérieure ; 3) l'interdiction des armes chimiques s'est imposée comme une norme qui modifie le comportement des États ; 4) la pauvreté de certains pays du Sud s'explique par leur place dans l'économie mondiale ; 5) les démocraties ne se combattent pas.

<details><summary>Voir le corrigé</summary>

1) Libéralisme commercial. 2) Néoréalisme (self-help). 3) Constructivisme (rôle des normes). 4) Théories de la dépendance ou du système-monde. 5) Libéralisme (paix démocratique).

</details>

### Exercice 3 — Le dilemme de sécurité

Deux États voisins, A et B, sont en paix. A achète des systèmes de défense antiaérienne. B, inquiet, augmente son budget militaire de 20 %. A répond par de nouvelles acquisitions. 1) Quel mécanisme est à l'œuvre ? 2) Quelle solution proposerait un libéral ? 3) Et un constructiviste ?

<details><summary>Voir le corrigé</summary>

1) Le dilemme de sécurité (réalisme) : chaque mesure défensive est perçue comme une menace par l'autre, d'où une course aux armements qui réduit la sécurité de tous. 2) Le libéral propose des mesures de confiance et des institutions : traités de limitation des armements, échanges d'informations, coopération économique qui augmente le coût du conflit. 3) Le constructiviste mise sur le changement des représentations : dialogue, échanges entre sociétés, construction d'une identité régionale commune qui transforme l'hostilité en partenariat.

</details>
`,
    qcm: [
      { q: "Theory of International Politics (1979) est l'œuvre de :", choix: ["Hans Morgenthau", "Kenneth Waltz", "Robert Keohane", "Alexander Wendt"], bonne: 1, explication: "Fondateur du néoréalisme." },
      { q: "Le néoréalisme explique le comportement des États surtout par :", choix: ["La nature humaine", "La structure du système international", "Les normes", "La religion"], bonne: 1, explication: "Répartition des capacités dans un système anarchique." },
      { q: "Le dilemme de sécurité signifie que :", choix: ["La paix est garantie par le droit", "Les mesures défensives d'un État inquiètent les autres", "Les démocraties ne se font pas la guerre", "Les institutions suppriment l'anarchie"], bonne: 1, explication: "D'où la course aux armements." },
      { q: "Power and Interdependence (1977) est l'œuvre de :", choix: ["Keohane et Nye", "Morgenthau et Carr", "Wallerstein et Amin", "Waltz et Mearsheimer"], bonne: 0, explication: "Interdépendance complexe." },
      { q: "La thèse de la paix démocratique relève :", choix: ["Du réalisme", "Du libéralisme", "Du marxisme", "Du réalisme offensif"], bonne: 1, explication: "Développée notamment par Michael Doyle." },
      { q: "« L'anarchie est ce que les États en font » est une formule de :", choix: ["Alexander Wendt", "Kenneth Waltz", "Hans Morgenthau", "Lénine"], bonne: 0, explication: "Article de 1992, constructivisme." },
      { q: "L'économiste égyptien associé aux théories de la dépendance est :", choix: ["Samir Amin", "Ibn Khaldoun", "Edward Saïd", "Malek Bennabi"], bonne: 0, explication: "Rapports centre-périphérie." },
      { q: "L'Orientalisme (1978) est l'œuvre de :", choix: ["Edward Saïd", "Samuel Huntington", "Raymond Aron", "Joseph Nye"], bonne: 0, explication: "Référence des études postcoloniales." },
      { q: "Le réalisme offensif est défendu par :", choix: ["John Mearsheimer", "Michael Doyle", "Robert Keohane", "Woodrow Wilson"], bonne: 0, explication: "The Tragedy of Great Power Politics, 2001." },
      { q: "La résolution 1325 du Conseil de sécurité (2000) porte sur :", choix: ["Le désarmement nucléaire", "Les femmes, la paix et la sécurité", "Le commerce", "Le climat"], bonne: 1, explication: "Référence des approches féministes." },
    ],
  },

  4: {
    titre: "L'État, acteur central : puissance et politique étrangère",
    description: "L'État dans les relations internationales : souveraineté, mesure de la puissance, diplomatie, décision (Allison) et politique étrangère du Maroc.",
    resume: md`
## L'essentiel — État et politique étrangère

- L'État reste **central** : souveraineté, monopole de la violence légitime, sujet principal du droit international ; 193 membres de l'ONU.
- Égalité juridique / **inégalité de fait**.
- Puissance-ressource (territoire, population, PIB, armée, technologie, culture) / puissance-relation (capacité d'influence) ; Aron : force et puissance.
- Hiérarchie : superpuissance, grande puissance, puissance émergente, puissance régionale, petit État.
- Instruments : **diplomatie** (Vienne 1961 et 1963), économie (aide, sanctions), force (dissuasion, alliances, maintien de la paix), influence.
- Décision : **Allison** (1971) — acteur rationnel, modèle organisationnel, modèle bureaucratique ; rôle des dirigeants, de l'opinion, des groupes d'intérêt.
- Maroc : préambule (identité plurielle, primauté des conventions ratifiées), **article 42** (Roi garant de l'intégrité territoriale), **article 55** (traités, approbation par la loi pour certains).
- Axes : intégrité territoriale (plan d'autonomie de 2007), Afrique (retour à l'UA en 2017), Europe (statut avancé, 2008), partenariats diversifiés, monde arabe (Comité Al-Qods), enjeux globaux (COP22, Pacte de Marrakech 2018).
`,
    exercices: md`
### Exercice 2 — Quel instrument ?

Identifiez l'instrument de politique étrangère : 1) l'ouverture d'un consulat dans une ville étrangère ; 2) l'envoi de casques bleus en République centrafricaine ; 3) des bourses d'études pour des étudiants africains ; 4) un embargo sur les exportations d'armes vers un pays en guerre ; 5) l'organisation d'un sommet international sur le climat.

<details><summary>Voir le corrigé</summary>

1) Diplomatie (relations consulaires, convention de Vienne de 1963). 2) Force armée dans un cadre multilatéral (maintien de la paix de l'ONU). 3) Influence (soft power, formation des élites). 4) Instrument économique coercitif (sanction). 5) Diplomatie multilatérale et image internationale.

</details>

### Exercice 3 — Les modèles d'Allison

Un gouvernement doit décider de participer ou non à une coalition militaire. Le ministère des Affaires étrangères y est favorable pour préserver une alliance ; le ministère des Finances s'y oppose en raison du coût ; l'état-major souligne que ses procédures ne permettent pas un déploiement avant six mois. Expliquez la décision selon les trois modèles d'Allison.

<details><summary>Voir le corrigé</summary>

Acteur rationnel : l'État compare les coûts (financiers, humains) et les bénéfices (alliance, sécurité) et choisit l'option la plus utile. Modèle organisationnel : le délai de six mois imposé par les procédures de l'armée limite les options réellement disponibles. Modèle bureaucratique : la décision finale résulte d'un compromis entre les ministères (par exemple une participation limitée, logistique plutôt que combattante).

</details>
`,
    qcm: [
      { q: "Le nombre d'États membres de l'ONU est de :", choix: ["51", "150", "193", "250"], bonne: 2, explication: "Depuis l'admission du Soudan du Sud en 2011." },
      { q: "Le monopole de la violence physique légitime est une définition de l'État due à :", choix: ["Max Weber", "Raymond Aron", "Hans Morgenthau", "Kant"], bonne: 0, explication: "Le savant et le politique, 1919." },
      { q: "Les relations diplomatiques sont régies par la convention de Vienne de :", choix: ["1945", "1961", "1969", "1982"], bonne: 1, explication: "1963 pour les relations consulaires." },
      { q: "Essence of Decision (1971) est l'œuvre de :", choix: ["Graham Allison", "Joseph Nye", "Kenneth Waltz", "Samuel Huntington"], bonne: 0, explication: "Étude de la crise de Cuba." },
      { q: "Selon la Constitution, les traités sont signés et ratifiés par :", choix: ["Le chef du gouvernement", "Le Roi", "Le président de la Chambre des représentants", "Le ministre des Affaires étrangères"], bonne: 1, explication: "Article 55." },
      { q: "Un traité de délimitation des frontières doit, avant ratification, être :", choix: ["Approuvé par une loi", "Soumis à une fatwa", "Approuvé par la Cour de cassation", "Publié seulement"], bonne: 0, explication: "Article 55 de la Constitution." },
      { q: "Le Maroc a rejoint l'Union africaine en :", choix: ["1984", "2002", "2017", "2020"], bonne: 2, explication: "Après avoir quitté l'OUA en 1984." },
      { q: "Le statut avancé du Maroc avec l'Union européenne date de :", choix: ["1996", "2008", "2016", "2023"], bonne: 1, explication: "Partenariat privilégié." },
      { q: "Le Maroc a présenté son plan d'autonomie pour les provinces du Sud en :", choix: ["1975", "1991", "2007", "2017"], bonne: 2, explication: "Soumis au Conseil de sécurité." },
      { q: "La COP22 s'est tenue à Marrakech en :", choix: ["2007", "2012", "2016", "2018"], bonne: 2, explication: "Conférence des Nations unies sur le climat." },
    ],
  },

  5: {
    titre: "Les organisations internationales",
    description: "Organisations internationales : classification, rôle politique de l'ONU, FMI, Banque mondiale, OMC (Marrakech 1994), Union africaine, Ligue arabe, UMA.",
    resume: md`
## L'essentiel — Organisations internationales

- **Organisation intergouvernementale** : créée par traité, organes permanents, volonté propre.
- Universelles / régionales ; générales / spécialisées ; de **coopération** / d'**intégration** (Union européenne).
- ONU (article 1) : paix et sécurité, relations amicales, coopération, droits de l'homme.
- Organes : Assemblée générale (193), **Conseil de sécurité** (15, dont 5 permanents avec veto), Secrétariat (article 99), ECOSOC (54), CIJ (15 juges).
- Maintien de la paix : né de la pratique (1956) ; participation marocaine ; MINURSO depuis 1991.
- **Bretton Woods** (1944) : FMI, Banque mondiale ; **OMC** créée par les accords de **Marrakech** (15 avril 1994), en fonction en 1995.
- Régional : Ligue arabe (1945, Maroc membre en 1958), OCI (1969, Rabat), OUA/UA (Maroc fondateur en 1963, départ en 1984, retour en 2017), UMA (1989, Marrakech), partenariat avec l'UE ; demande d'adhésion à la CEDEAO (2017).
- Limites : veto, composition de 1945, financement ; réforme réclamée par l'Afrique (consensus d'Ezulwini, 2005).
- Théories : instruments (réalisme), cadres de coopération (libéralisme), acteurs producteurs de normes (constructivisme).
`,
    exercices: md`
### Exercice 2 — Coopération ou intégration ?

Classez : 1) l'Union européenne ; 2) la Ligue des États arabes ; 3) l'OMC ; 4) l'Union du Maghreb arabe ; 5) l'Union africaine.

<details><summary>Voir le corrigé</summary>

1) Intégration : transferts de compétences, droit directement applicable, monnaie unique pour une partie des membres. 2) Coopération : décisions intergouvernementales. 3) Coopération spécialisée, avec un mécanisme de règlement des différends contraignant. 4) Coopération à visée d'intégration, restée largement inappliquée. 5) Coopération, avec des ambitions d'intégration (zone de libre-échange continentale, Agenda 2063).

</details>

### Exercice 3 — Dissertation : plan détaillé

Proposez un plan pour le sujet : « L'ONU est-elle encore utile ? »

<details><summary>Voir le corrigé</summary>

*Introduction* : création en 1945 pour éviter un nouveau conflit mondial ; critiques actuelles (paralysie du Conseil, guerres en Ukraine et au Proche-Orient) ; problématique : l'organisation garde-t-elle un rôle malgré ses impuissances ?
**I. Une utilité réelle** — A. Le seul forum universel : dialogue entre 193 États, légitimité des décisions, normes (droits de l'homme, décolonisation, objectifs de développement durable). B. Une action concrète : maintien de la paix, aide humanitaire (HCR, PAM, UNICEF), santé (OMS).
**II. Une efficacité limitée** — A. La paralysie du Conseil de sécurité par le veto et le contournement de l'organisation par les puissances. B. Une représentativité contestée et des moyens dépendants des États ; les projets de réforme.
*Conclusion* : une organisation indispensable mais à réformer, dont l'efficacité dépend de la volonté de ses membres.

</details>
`,
    qcm: [
      { q: "Le Conseil de sécurité compte :", choix: ["5 membres", "10 membres", "15 membres", "193 membres"], bonne: 2, explication: "5 permanents et 10 élus pour deux ans." },
      { q: "Une décision de fond du Conseil de sécurité exige :", choix: ["L'unanimité des 15", "9 voix dont celles des 5 permanents", "La majorité simple", "Les 2/3 de l'Assemblée"], bonne: 1, explication: "Article 27 de la Charte." },
      { q: "Les opérations de maintien de la paix :", choix: ["Sont prévues en détail par la Charte", "Sont nées de la pratique", "Sont interdites", "Relèvent de l'OTAN"], bonne: 1, explication: "Depuis la crise de Suez en 1956." },
      { q: "L'OMC a été créée par les accords de :", choix: ["Bretton Woods", "Marrakech", "Genève", "Doha"], bonne: 1, explication: "15 avril 1994." },
      { q: "Le FMI et la Banque mondiale sont issus des accords de :", choix: ["Bretton Woods (1944)", "Versailles (1919)", "Marrakech (1994)", "Rome (1957)"], bonne: 0, explication: "Ordre économique de l'après-guerre." },
      { q: "Le Maroc est membre de la Ligue arabe depuis :", choix: ["1945", "1958", "1969", "1989"], bonne: 1, explication: "Après son indépendance." },
      { q: "Le traité instituant l'Union du Maghreb arabe a été signé à :", choix: ["Rabat", "Marrakech", "Tunis", "Alger"], bonne: 1, explication: "En février 1989." },
      { q: "Le Maroc a quitté l'OUA en :", choix: ["1963", "1975", "1984", "2002"], bonne: 2, explication: "Il a rejoint l'Union africaine en 2017." },
      { q: "Le consensus d'Ezulwini (2005) porte sur :", choix: ["Le commerce africain", "La réforme du Conseil de sécurité", "La monnaie unique africaine", "Le climat"], bonne: 1, explication: "Deux sièges permanents demandés pour l'Afrique." },
      { q: "Pour les réalistes, les organisations internationales sont surtout :", choix: ["Des acteurs autonomes", "Des instruments des grandes puissances", "Des gouvernements mondiaux", "Des ONG"], bonne: 1, explication: "Elles reflètent les rapports de force." },
    ],
  },

  6: {
    titre: "Les acteurs non étatiques",
    description: "Acteurs non étatiques des relations internationales : firmes multinationales, ONG, diasporas, collectivités, médias, réseaux terroristes et criminels.",
    resume: md`
## L'essentiel — Acteurs non étatiques

- Essor depuis les années 1970 : Keohane et Nye (1971), Rosenau (1990, deux mondes), Badie (1999, « monde sans souveraineté »).
- Causes : mondialisation, transports et communications, sociétés civiles, fin de la guerre froide.
- **Firmes multinationales** : poids économique, commerce intra-groupe, géants du numérique ; attirées (IDE : Renault Tanger 2012, Stellantis Kénitra 2019) et régulées (impôt minimum mondial de 15 %, OCDE 2021).
- Multinationales marocaines en Afrique : OCP, banques, Maroc Telecom.
- **ONG** : droit privé, but non lucratif ; CICR (1863) ; terrain, plaidoyer, statut consultatif à l'ECOSOC (article 71) ; Ottawa (1997), Statut de Rome (1998).
- Limites des ONG : financement, légitimité, occidentalo-centrisme ; « GONGO ».
- **Diaspora** : transferts de fonds massifs, articles 16 à 18 et 163 de la Constitution (CCME).
- Autres : collectivités (coopération décentralisée), médias et réseaux sociaux, acteurs religieux, groupes terroristes et criminels (BCIJ, 2015), individus.
- Débat : déclin, résilience ou complémentarité de l'État ; la coexistence l'emporte.
`,
    exercices: md`
### Exercice 2 — ONG ou organisation intergouvernementale ?

Classez : 1) Amnesty International ; 2) l'Organisation mondiale de la santé ; 3) le Comité international de la Croix-Rouge ; 4) la Ligue des États arabes ; 5) Transparency International ; 6) l'Organisation internationale du travail.

<details><summary>Voir le corrigé</summary>

1) ONG. 2) Organisation intergouvernementale (institution spécialisée des Nations unies). 3) Association de droit privé suisse, mais dotée d'un statut international particulier reconnu par les conventions de Genève. 4) Organisation intergouvernementale régionale. 5) ONG. 6) Organisation intergouvernementale, originale par sa composition tripartite (gouvernements, employeurs, travailleurs).

</details>

### Exercice 3 — Dissertation : plan détaillé

Proposez un plan pour le sujet : « Les firmes multinationales sont-elles plus puissantes que les États ? »

<details><summary>Voir le corrigé</summary>

*Introduction* : définitions ; comparaison fréquente des chiffres d'affaires et des PIB ; problématique : la puissance économique se traduit-elle en puissance politique ?
**I. Des firmes aux moyens considérables** — A. Un poids économique et technologique qui dépasse celui de nombreux États ; contrôle des données et de l'information. B. Une capacité à peser sur les politiques : mise en concurrence des territoires, lobbying, arbitrage d'investissement, optimisation fiscale.
**II. Des États qui gardent la maîtrise des règles** — A. L'État fixe le cadre juridique (fiscalité, concurrence, données personnelles), comme le montrent l'impôt minimum mondial et les régulations du numérique. B. Les firmes ont besoin des États (sécurité, infrastructures, marchés, diplomatie économique) et servent parfois leur puissance (exemple des entreprises marocaines en Afrique).
*Conclusion* : une interdépendance plus qu'une domination ; le rapport de force varie selon la taille de l'État et le secteur.

</details>
`,
    qcm: [
      { q: "L'expression « Turbulence in World Politics » (1990) est due à :", choix: ["James Rosenau", "Hans Morgenthau", "Raymond Aron", "Kenneth Waltz"], bonne: 0, explication: "Deux mondes : stato-centré et multicentré." },
      { q: "Une ONG est :", choix: ["Créée par un traité entre États", "Une association de droit privé à but non lucratif", "Une entreprise multinationale", "Un organe de l'ONU"], bonne: 1, explication: "Indépendante des États." },
      { q: "Le Comité international de la Croix-Rouge a été fondé en :", choix: ["1815", "1863", "1919", "1945"], bonne: 1, explication: "Par Henri Dunant, à Genève." },
      { q: "Le statut consultatif des ONG auprès de l'ECOSOC est prévu par l'article :", choix: ["2 de la Charte", "51 de la Charte", "71 de la Charte", "99 de la Charte"], bonne: 2, explication: "Consultation des organisations non gouvernementales." },
      { q: "La convention d'Ottawa (1997) interdit :", choix: ["Les armes nucléaires", "Les mines antipersonnel", "Les armes chimiques", "Les drones"], bonne: 1, explication: "Adoptée grâce à une coalition d'ONG." },
      { q: "L'accord de l'OCDE de 2021 prévoit un impôt minimum mondial sur les grands groupes de :", choix: ["5 %", "15 %", "25 %", "35 %"], bonne: 1, explication: "Pour limiter la concurrence fiscale." },
      { q: "Le Conseil de la communauté marocaine à l'étranger est prévu par l'article :", choix: ["42", "55", "163", "175"], bonne: 2, explication: "Constitution de 2011." },
      { q: "L'usine Renault de Tanger a été inaugurée en :", choix: ["2002", "2007", "2012", "2019"], bonne: 2, explication: "Stellantis à Kénitra en 2019." },
      { q: "Un GONGO est :", choix: ["Une ONG créée ou soutenue par un gouvernement", "Une organisation intergouvernementale", "Une firme publique", "Un groupe terroriste"], bonne: 0, explication: "Organisation non gouvernementale d'origine gouvernementale." },
      { q: "Le Bureau central d'investigations judiciaires (BCIJ) a été créé en :", choix: ["2003", "2011", "2015", "2020"], bonne: 2, explication: "Lutte contre le terrorisme et la grande criminalité." },
    ],
  },

  7: {
    titre: "Les enjeux contemporains : sécurité, mondialisation et biens communs",
    description: "Enjeux internationaux actuels : nouvelles menaces et sécurité humaine, terrorisme, mondialisation, climat (Paris, COP22), migrations et rôle du Maroc.",
    resume: md`
## L'essentiel — Enjeux contemporains

- Sécurité traditionnelle (territoire, guerre, dissuasion, **TNP** de 1968) et sécurité élargie : politique, économique, sociétale, environnementale, sanitaire, numérique.
- École de Copenhague (Buzan, Wæver) : **sécuritisation** ; PNUD (1994) : **sécurité humaine**.
- Terrorisme : attentats de Casablanca (16 mai 2003) ; réponse marocaine globale (loi 03-03, BCIJ, champ religieux, INDH 2005).
- **Mondialisation** : phases (XIXᵉ siècle, après 1945, accélération après 1980) ; gains et critiques ; altermondialisme (2001) ; fragmentation récente (nearshoring, friendshoring).
- Accords de libre-échange du Maroc : UE, États-Unis, Turquie, accord d'Agadir, ZLECAf.
- Climat : Stockholm (1972), Rio (1992), Kyoto (1997), **Paris** (2015), **COP22 Marrakech** (2016) ; responsabilités communes mais différenciées ; stratégie marocaine (Noor, renouvelables, dessalement).
- Migrations : plus de 280 millions de migrants ; réfugiés (Genève 1951, non-refoulement).
- Maroc : émigration, transit, immigration ; politique migratoire (2013), régularisations (2014, 2017), **Pacte de Marrakech** (décembre 2018), Observatoire africain des migrations.
- Cyberespace : convention de Budapest (2001), convention des Nations unies contre la cybercriminalité (2024).
`,
    exercices: md`
### Exercice 2 — Quelle dimension de la sécurité ?

Classez : 1) une cyberattaque paralysant les hôpitaux d'un pays ; 2) une sécheresse qui menace l'approvisionnement en eau des villes ; 3) une rupture des livraisons de gaz ; 4) une pandémie ; 5) des incursions armées à une frontière.

<details><summary>Voir le corrigé</summary>

1) Sécurité numérique (et sanitaire par ses effets). 2) Sécurité environnementale et hydrique. 3) Sécurité économique et énergétique. 4) Sécurité sanitaire. 5) Sécurité militaire traditionnelle.

</details>

### Exercice 3 — Dissertation : plan détaillé

Proposez un plan pour le sujet : « Le climat peut-il être gouverné à l'échelle mondiale ? »

<details><summary>Voir le corrigé</summary>

*Introduction* : le climat, bien commun mondial ; problème du passager clandestin ; problématique : les mécanismes internationaux suffisent-ils à faire agir les États ?
**I. Une gouvernance mondiale progressivement construite** — A. Un cadre universel : convention de Rio (1992), Kyoto (1997), accord de Paris (2015), COP annuelles dont Marrakech (2016). B. Des principes et des outils : responsabilités communes mais différenciées, contributions nationales, financement climatique, rôle des villes, des entreprises et des ONG.
**II. Une gouvernance aux résultats insuffisants** — A. Des engagements non contraignants et des émissions qui continuent d'augmenter ; retraits et revirements de certains États. B. Le conflit Nord-Sud sur le financement et l'adaptation, défendu par les pays africains et le Maroc.
*Conclusion* : une gouvernance réelle mais fragile, qui dépend de la volonté des grands émetteurs et de la transition énergétique.

</details>
`,
    qcm: [
      { q: "Le traité sur la non-prolifération des armes nucléaires date de :", choix: ["1945", "1968", "1991", "2017"], bonne: 1, explication: "Il distingue cinq États dotés." },
      { q: "La notion de sécuritisation est associée à :", choix: ["L'école de Copenhague", "L'école de Chicago", "L'école de Francfort", "Le réalisme offensif"], bonne: 0, explication: "Buzan et Wæver." },
      { q: "La notion de sécurité humaine a été proposée par le PNUD en :", choix: ["1945", "1972", "1994", "2015"], bonne: 2, explication: "Protéger contre la peur et contre le besoin." },
      { q: "Les attentats de Casablanca ont eu lieu le :", choix: ["11 septembre 2001", "16 mai 2003", "28 avril 2011", "13 novembre 2015"], bonne: 1, explication: "Suivis de la loi 03-03." },
      { q: "L'accord de Paris sur le climat a été adopté en :", choix: ["1992", "1997", "2015", "2016"], bonne: 2, explication: "COP21." },
      { q: "Le principe des responsabilités communes mais différenciées apparaît :", choix: ["Au sommet de Rio en 1992", "Au congrès de Vienne", "Dans la Charte de 1945", "À Westphalie"], bonne: 0, explication: "Les pays industrialisés doivent faire plus d'efforts." },
      { q: "Le Pacte mondial pour des migrations sûres, ordonnées et régulières a été adopté à :", choix: ["Genève", "Marrakech", "New York", "Addis-Abeba"], bonne: 1, explication: "En décembre 2018." },
      { q: "Le statut de réfugié est défini par la convention de Genève de :", choix: ["1864", "1949", "1951", "1969"], bonne: 2, explication: "Avec le principe de non-refoulement." },
      { q: "Le complexe solaire Noor se trouve près de :", choix: ["Ouarzazate", "Tanger", "Oujda", "Safi"], bonne: 0, explication: "Pilier de la stratégie énergétique marocaine." },
      { q: "La convention de Budapest (2001) porte sur :", choix: ["Le climat", "La cybercriminalité", "Les réfugiés", "Le commerce"], bonne: 1, explication: "Conseil de l'Europe ; le Maroc y a adhéré." },
    ],
  },
};

export default chapitres;
