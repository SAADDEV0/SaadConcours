// Sociologie du droit (Droit privé S1) — compléments par chapitre : description SEO, résumé, exercices 2 et 3, QCM.
const md = String.raw;

const chapitres = {
  1: {
    titre: "La sociologie du droit : objet, naissance et méthodes",
    description: "Sociologie du droit : différence avec la dogmatique juridique, phénomènes juridiques primaires et secondaires, naissance et méthodes d'enquête.",
    resume: md`
## L'essentiel — Objet et méthodes

- **Dogmatique juridique** : le droit vu de l'intérieur (sens de la règle) ; **sociologie du droit** : le droit comme fait social (naissance, application, effets).
- Démarches complémentaires ; « sociologie juridique » chez Carbonnier (1972).
- Phénomènes **primaires** (loi, jugement, contrat) et **secondaires** (connaissance, opinion, contournement) ; phénomènes de pouvoir et sous le pouvoir.
- Précurseurs : Montesquieu (1748), Ibn Khaldoun (1377).
- Fondateurs : Durkheim (1893), Weber (1922), Ehrlich (1913) ; réalisme américain, Pound : *law in books* / *law in action*.
- Maroc : Berque (1955), Pascon ; données du HCP, de la Présidence du ministère public, du CSPJ, du CNDH.
- Méthodes : analyse documentaire, statistiques judiciaires, questionnaire, entretiens, observation, histoire et comparaison, législation expérimentale.
- Règles : neutralité axiologique, représentativité, protection des données (loi 09-08).
- Utilité : connaître, évaluer, préparer les réformes, éclairer les professionnels.
`,
    exercices: md`
### Exercice 2 — Juriste ou sociologue ?

Indiquez si chaque question relève de la dogmatique juridique ou de la sociologie du droit : 1) quelles sont les conditions de validité d'un testament ? 2) pourquoi les Marocains rédigent-ils peu de testaments ? 3) le délai de recours contre un jugement de divorce est-il expiré ? 4) les femmes divorcées perçoivent-elles effectivement la pension fixée par le juge ? 5) combien de temps dure en moyenne une procédure de divorce pour discorde ?

<details><summary>Voir le corrigé</summary>

1) Dogmatique. 2) Sociologie (pratiques et représentations). 3) Dogmatique. 4) Sociologie (effectivité d'une décision). 5) Sociologie (statistiques judiciaires), même si la réponse intéresse aussi le juriste.

</details>

### Exercice 3 — Primaires ou secondaires ?

Classez : 1) un arrêt de la Cour de cassation ; 2) la croyance répandue qu'un contrat n'est valable que s'il est légalisé ; 3) le Code du travail ; 4) l'habitude de payer en espèces pour éviter les traces ; 5) un acte de vente dressé par un notaire.

<details><summary>Voir le corrigé</summary>

1) Primaire. 2) Secondaire (représentation du droit, d'ailleurs inexacte : la légalisation de signature n'est pas une condition générale de validité des contrats). 3) Primaire. 4) Secondaire (pratique de contournement). 5) Primaire (acte juridique officiel).

</details>
`,
    qcm: [
      { q: "La dogmatique juridique étudie :", choix: ["Le droit comme fait social", "Le sens et l'articulation des règles", "Les statistiques judiciaires", "Les opinions des citoyens"], bonne: 1, explication: "C'est le travail du juriste qui interprète." },
      { q: "L'expression « sociologie juridique » est associée à :", choix: ["Jean Carbonnier", "Émile Durkheim", "Max Weber", "Roscoe Pound"], bonne: 0, explication: "Ouvrage de 1972." },
      { q: "La connaissance qu'ont les citoyens d'une loi est un phénomène juridique :", choix: ["Primaire", "Secondaire", "Constitutionnel", "Pénal"], bonne: 1, explication: "Il se forme autour de la règle officielle." },
      { q: "L'opposition entre law in books et law in action est due à :", choix: ["Roscoe Pound", "Hans Kelsen", "Ibn Khaldoun", "Jacques Berque"], bonne: 0, explication: "Courant du réalisme juridique américain." },
      { q: "De la division du travail social (1893) est l'œuvre de :", choix: ["Max Weber", "Émile Durkheim", "Eugen Ehrlich", "Karl Marx"], bonne: 1, explication: "Le droit y est un indicateur de la solidarité." },
      { q: "Structures sociales du Haut-Atlas (1955) est l'œuvre de :", choix: ["Jacques Berque", "Paul Pascon", "Rémy Leveau", "John Waterbury"], bonne: 0, explication: "Étude des institutions rurales et coutumières." },
      { q: "Assister aux audiences d'un tribunal relève de la méthode :", choix: ["De l'observation", "Du questionnaire", "Statistique", "Dogmatique"], bonne: 0, explication: "Observation directe des acteurs." },
      { q: "La législation expérimentale consiste à :", choix: ["Appliquer une loi à titre provisoire ou partiel pour en mesurer les effets", "Rédiger une loi sans débat", "Supprimer les lois anciennes", "Interdire les enquêtes"], bonne: 0, explication: "Notion évoquée par Carbonnier." },
      { q: "Une enquête sur des personnes doit respecter la loi marocaine relative à la protection des données personnelles :", choix: ["09-08", "77-15", "70-03", "52-05"], bonne: 0, explication: "Loi de 2009." },
      { q: "Montesquieu est présenté comme un précurseur parce qu'il :", choix: ["Rejette toute loi", "Relie les lois au climat, aux mœurs et au commerce des peuples", "A créé le premier tribunal", "A rédigé le DOC"], bonne: 1, explication: "De l'esprit des lois, 1748." },
    ],
  },

  2: {
    titre: "Les fondateurs de la sociologie du droit",
    description: "Fondateurs de la sociologie du droit : Durkheim et le droit répressif ou restitutif, Weber et la rationalisation, Ehrlich, Marx, Carbonnier.",
    resume: md`
## L'essentiel — Les fondateurs

- **Durkheim** (1893) : le droit, symbole visible de la solidarité ; solidarité **mécanique** → droit **répressif** (peine) ; solidarité **organique** → droit **restitutif** (nullité, réparation).
- Durkheim (1895) : faits sociaux comme des choses ; le crime est normal.
- **Weber** (1922) : droit formel ou matériel, rationnel ou irrationnel ; droit formel rationnel et capitalisme (prévisibilité).
- « Justice de cadi » : image critiquée par l'histoire du droit (Khalîl, Ibn 'Âsim, 'amal de Fès).
- **Ehrlich** (1913) : **droit vivant** ; le centre de gravité du droit est dans la société.
- **Marx** : droit = superstructure qui reflète les rapports de production ; limite : autonomie relative du droit.
- **Carbonnier** (*Flexible droit*, 1969) : hypothèse du **non-droit**, loi souple.
- **Bourdieu** (1986) : champ juridique, effet de légitimation du langage du droit.
`,
    exercices: md`
### Exercice 2 — Quel auteur ?

Attribuez chaque idée à son auteur : 1) le droit protège les intérêts de la classe qui possède les moyens de production ; 2) les règles effectivement suivies dans les villages et les entreprises comptent plus que le code ; 3) la part du droit répressif diminue avec la division du travail ; 4) le capitalisme a besoin d'un droit calculable ; 5) de larges espaces de la vie sociale échappent au droit.

<details><summary>Voir le corrigé</summary>

1) Marx. 2) Ehrlich (droit vivant). 3) Durkheim. 4) Weber. 5) Carbonnier (hypothèse du non-droit).

</details>

### Exercice 3 — Dissertation : plan détaillé

Proposez un plan pour le sujet : « Le droit n'est-il que le reflet de la société ? »

<details><summary>Voir le corrigé</summary>

*Introduction* : définitions ; Durkheim fait du droit le symbole de la solidarité, Marx un reflet des rapports économiques ; problématique : le droit est-il seulement produit par la société ou peut-il aussi la transformer ?
**I. Le droit, produit de la société** — A. Le droit exprime la solidarité et les valeurs (Durkheim) et les rapports économiques (Marx). B. Le droit vivant naît dans les groupes sociaux avant l'État (Ehrlich).
**II. Le droit, acteur de la société** — A. L'autonomie relative du droit : champ juridique et professionnels (Bourdieu), rationalisation propre (Weber). B. Le droit comme instrument de changement : réformes volontaristes (Code de la famille de 2004, chapitre 5), avec la limite de l'ineffectivité (chapitre 4).
*Conclusion* : le droit est à la fois reflet et levier ; Carbonnier invite à une loi souple qui tienne compte des mœurs sans renoncer à les faire évoluer.

</details>
`,
    qcm: [
      { q: "Pour Durkheim, la solidarité mécanique correspond au droit :", choix: ["Restitutif", "Répressif", "Administratif", "International"], bonne: 1, explication: "Sanctions pénales exprimant la conscience collective." },
      { q: "La sanction restitutive consiste à :", choix: ["Infliger une peine", "Remettre les choses en l'état", "Exclure de la société", "Confisquer tous les biens"], bonne: 1, explication: "Nullité, réparation, exécution forcée." },
      { q: "Selon Durkheim, le crime est :", choix: ["Un phénomène anormal à éliminer", "Un phénomène normal présent dans toute société", "Une invention moderne", "Inconnu des sociétés traditionnelles"], bonne: 1, explication: "Les Règles de la méthode sociologique, 1895." },
      { q: "Le droit formel rationnel est, pour Weber, celui :", choix: ["Des ordalies", "Du droit moderne codifié appliqué par des professionnels", "Des décisions selon l'équité du juge", "Des oracles"], bonne: 1, explication: "Il rend le droit prévisible." },
      { q: "La notion de droit vivant est due à :", choix: ["Eugen Ehrlich", "Émile Durkheim", "Karl Marx", "Hans Kelsen"], bonne: 0, explication: "Fondements de la sociologie du droit, 1913." },
      { q: "Pour Marx, le droit appartient :", choix: ["À l'infrastructure", "À la superstructure", "À la nature", "À la morale seule"], bonne: 1, explication: "Il reflète les rapports de production." },
      { q: "Flexible droit (1969) est l'œuvre de :", choix: ["Jean Carbonnier", "Pierre Bourdieu", "Georges Gurvitch", "Roscoe Pound"], bonne: 0, explication: "Il y développe l'hypothèse du non-droit." },
      { q: "La notion de champ juridique est développée par :", choix: ["Pierre Bourdieu", "Max Weber", "Eugen Ehrlich", "Ibn Khaldoun"], bonne: 0, explication: "« La force du droit », 1986." },
      { q: "L'expression « justice de cadi » chez Weber a été critiquée parce que :", choix: ["Les cadis jugeaient selon des règles et des ouvrages de référence", "Les cadis n'existaient pas", "Weber n'a jamais écrit sur le droit", "Elle concerne le droit anglais"], bonne: 0, explication: "Les recherches historiques ont nuancé cette image." },
      { q: "Selon Durkheim, avec la division du travail, la part du droit restitutif :", choix: ["Diminue", "Augmente", "Disparaît", "Reste identique"], bonne: 1, explication: "Le droit des contrats devient central." },
    ],
  },

  3: {
    titre: "Le pluralisme juridique",
    description: "Pluralisme juridique : monisme et pluralisme, Romano, Gurvitch, Griffiths, pluralisme faible et fort, coutumes au Maroc et terres collectives.",
    resume: md`
## L'essentiel — Le pluralisme juridique

- **Monisme** : un seul droit, celui de l'État (Kelsen) ; **pluralisme** : plusieurs ordres juridiques coexistent sur un même territoire.
- Auteurs : Santi Romano (1918, ordres des institutions), Gurvitch (1932, droit social), Ehrlich, Malinowski (1926), Moore (1973, champ social semi-autonome), Griffiths (1986).
- **Pluralisme faible** : organisé par l'État (statuts personnels différents) ; **fort** : ordres indépendants de l'État.
- Critère : une règle, une autorité, une sanction reconnues par le groupe.
- Maroc avant 1912 : fiqh et cadis, coutumes ('urf, izerf, jmâ'a, alwâh), statut personnel hébraïque, corporations (amîn, muhtasib).
- Protectorat : dahir du 16 mai 1930 (« dahir berbère »), mobilisation nationale.
- Indépendance : unification (loi de 1965) ; article 2 du Code de la famille (statut personnel hébraïque).
- Terres collectives : dahir de 1919, mouvement des femmes soulaliyates, **loi 62-17** (2019) et égalité.
- Pluralisme contemporain : normes privées, religieuses, transnationales (*lex mercatoria*), informel.
`,
    exercices: md`
### Exercice 2 — Faible ou fort ?

Qualifiez : 1) le Code de la famille soumet les Marocains de confession juive au statut personnel hébraïque ; 2) une fédération sportive internationale suspend un joueur pour dopage ; 3) une jmâ'a de village fixe le tour d'eau d'irrigation sans texte étatique ; 4) deux sociétés de pays différents appliquent les usages du commerce international dans leur contrat.

<details><summary>Voir le corrigé</summary>

1) Faible : c'est l'État qui organise la pluralité. 2) Fort : ordre juridique sportif autonome, avec ses règles, ses organes et ses sanctions. 3) Fort : coutume locale produite par le groupe. 4) Fort : *lex mercatoria*, même si le juge étatique ou l'arbitre peut la reconnaître.

</details>

### Exercice 3 — Question de cours

Expliquez en dix lignes pourquoi le dahir du 16 mai 1930 occupe une place importante dans l'histoire du pluralisme juridique au Maroc.

<details><summary>Voir le corrigé</summary>

Le dahir organisait, dans certaines régions dites de coutume, une justice coutumière distincte de celle des cadis, et confiait la répression pénale à des juridictions françaises. Il transformait un pluralisme de fait (coexistence de la coutume et du fiqh) en une **séparation juridique** voulue par l'administration coloniale. Le mouvement national y a vu une tentative de diviser les Marocains et de porter atteinte à l'unité religieuse et juridique du pays ; la mobilisation (prières de détresse, pétitions) a marqué la naissance du nationalisme moderne. Le dahir montre que le pluralisme juridique n'est jamais neutre : il peut servir une politique, et l'unification du droit après 1956 s'explique aussi par ce souvenir.

</details>
`,
    qcm: [
      { q: "Le monisme juridique considère que :", choix: ["Plusieurs droits coexistent librement", "Seul l'État produit le droit", "La coutume l'emporte toujours sur la loi", "Le droit est religieux par nature"], bonne: 1, explication: "Forme achevée chez Kelsen." },
      { q: "L'Ordre juridique (1918), selon lequel toute institution produit son droit, est de :", choix: ["Santi Romano", "Georges Gurvitch", "John Griffiths", "Jean Carbonnier"], bonne: 0, explication: "Pluralisme institutionnel." },
      { q: "La distinction entre pluralisme faible et fort est due à :", choix: ["John Griffiths", "Max Weber", "Émile Durkheim", "Malinowski"], bonne: 0, explication: "« What is legal pluralism? », 1986." },
      { q: "Le pluralisme faible désigne :", choix: ["Des ordres indépendants de l'État", "Une pluralité de droits organisée par l'État lui-même", "L'absence de droit", "Le droit international public"], bonne: 1, explication: "Exemple : statuts personnels différents." },
      { q: "Le « dahir berbère » date du :", choix: ["16 mai 1930", "12 août 1913", "27 avril 1919", "18 novembre 1955"], bonne: 0, explication: "Il a provoqué une forte mobilisation nationale." },
      { q: "L'assemblée de village qui appliquait la coutume dans les tribus s'appelle :", choix: ["La jmâ'a", "Le makhzen", "La Qarawiyyîne", "Le CESE"], bonne: 0, explication: "Elle appliquait l'izerf, parfois consigné dans des tables (alwâh)." },
      { q: "La loi qui régit aujourd'hui la tutelle sur les communautés soulaliyates est la loi :", choix: ["62-17", "77-15", "39-08", "28-08"], bonne: 0, explication: "Adoptée en 2019." },
      { q: "Le statut personnel hébraïque des Marocains de confession juive est prévu par l'article 2 :", choix: ["Du Code de la famille", "Du Code pénal", "Du DOC", "De la Constitution"], bonne: 0, explication: "Exemple de pluralisme faible." },
      { q: "Le « champ social semi-autonome » est une notion de :", choix: ["Sally Falk Moore", "Pierre Bourdieu", "Ehrlich", "Kelsen"], bonne: 0, explication: "Article de 1973." },
      { q: "La lex mercatoria désigne :", choix: ["Le droit pénal des marchés", "Les usages et règles du commerce international", "Une loi marocaine", "Le droit des corporations médiévales seulement"], bonne: 1, explication: "Exemple de pluralisme contemporain." },
    ],
  },

  4: {
    titre: "L'effectivité et l'ineffectivité du droit",
    description: "Effectivité, efficacité et efficience d'une loi, chiffre noir, causes de l'ineffectivité, effets pervers et lois symboliques, exemples marocains.",
    resume: md`
## L'essentiel — Effectivité du droit

- **Effectivité** : conformité des comportements à la règle ; **efficacité** : objectif atteint ; **efficience** : résultats rapportés aux coûts.
- Une loi ineffective reste **valide** tant qu'elle n'est pas abrogée.
- Mesure : statistiques administratives et judiciaires, enquêtes, observation, enquêtes de victimation.
- **Chiffre noir** : écart entre les faits réels et les faits connus des autorités.
- Causes de l'ineffectivité : méconnaissance, inadaptation aux mœurs, contrôles insuffisants, sanctions faibles, coût du respect, contradiction entre normes, complexité, exceptions trop larges.
- Exemple : âge du mariage à 18 ans (article 19) et autorisations judiciaires (articles 20 et 21), mariages par la seule fâtiha.
- **Effets pervers** (Boudon, 1977) : marché noir, informel, déplacement des comportements.
- **Lois symboliques** ou de proclamation : affirmer une valeur, servir de point d'appui (loi 103-13 de 2018).
`,
    exercices: md`
### Exercice 2 — Effective, efficace ?

Pour chaque situation, dites si la règle est effective et si elle est efficace : 1) presque tous les conducteurs portent la ceinture, et le nombre de tués baisse nettement ; 2) presque tous les commerçants affichent leurs prix, mais les consommateurs continuent d'être trompés sur la qualité ; 3) une interdiction est souvent violée, mais le comportement visé a tout de même diminué de moitié par rapport à la période antérieure.

<details><summary>Voir le corrigé</summary>

1) Effective et efficace (si l'on peut attribuer la baisse à la règle, et non à d'autres causes comme l'amélioration des routes). 2) Effective (affichage respecté) mais peu efficace pour l'objectif plus large de protection du consommateur. 3) Peu effective, mais efficace en partie : la règle a réduit le comportement.

</details>

### Exercice 3 — Chiffre noir

Une enquête de victimation menée auprès de 5 000 femmes indique que 900 ont subi des violences au cours de l'année, mais que 90 seulement ont déposé plainte. Calculez le taux de déclaration et commentez ce que les statistiques policières montrent et ne montrent pas.

<details><summary>Voir le corrigé</summary>

Taux de victimation : 900 / 5 000 = **18 %**. Taux de déclaration : 90 / 900 = **10 %**. Les statistiques policières ne verraient qu'une victime sur dix : le chiffre noir représente **90 %** des faits. Une hausse des plaintes après une nouvelle loi peut donc traduire une **meilleure déclaration** (confiance, information, loi symbolique qui libère la parole) plutôt qu'une hausse des violences. Seules les enquêtes de victimation répétées permettent de trancher.

</details>
`,
    qcm: [
      { q: "L'effectivité d'une règle désigne :", choix: ["Sa validité juridique", "Le degré de conformité des comportements à la règle", "Son coût", "Sa date de publication"], bonne: 1, explication: "À distinguer de l'efficacité et de l'efficience." },
      { q: "L'efficacité d'une loi mesure :", choix: ["Le respect de la procédure législative", "L'atteinte des objectifs fixés par le législateur", "Le nombre d'articles", "La popularité du ministre"], bonne: 1, explication: "Une loi peut être effective mais inefficace." },
      { q: "Une loi ineffective :", choix: ["Est automatiquement abrogée", "Reste valide tant qu'elle n'est pas abrogée", "Devient une coutume", "Est annulée par le juge"], bonne: 1, explication: "La désuétude n'abroge pas la loi." },
      { q: "Le chiffre noir désigne :", choix: ["Le déficit budgétaire", "L'écart entre les faits réels et les faits connus des autorités", "Le nombre de juges", "Les amendes impayées"], bonne: 1, explication: "Élevé pour les infractions peu déclarées." },
      { q: "Les enquêtes de victimation interrogent :", choix: ["Les juges", "Un échantillon de la population sur les infractions subies", "Les seuls condamnés", "Les avocats"], bonne: 1, explication: "Elles mesurent aussi les faits non déclarés." },
      { q: "L'âge de la capacité matrimoniale fixé par le Code de la famille est prévu par l'article :", choix: ["19", "400", "49", "2"], bonne: 0, explication: "Les articles 20 et 21 prévoient l'exception judiciaire." },
      { q: "La notion d'effets pervers est associée à :", choix: ["Raymond Boudon", "Émile Durkheim", "Hans Kelsen", "Santi Romano"], bonne: 0, explication: "Effets pervers et ordre social, 1977." },
      { q: "Une loi adoptée surtout pour affirmer une valeur est dite :", choix: ["Organique", "Symbolique ou de proclamation", "Supplétive", "Rétroactive"], bonne: 1, explication: "Elle sert aussi de point d'appui." },
      { q: "La loi marocaine relative à la lutte contre les violences faites aux femmes est la loi :", choix: ["103-13", "77-15", "62-17", "52-05"], bonne: 0, explication: "Adoptée en 2018." },
      { q: "Quand l'exception prévue par la loi devient la pratique courante, la cause de l'ineffectivité tient :", choix: ["À une exception trop large ou mal encadrée", "À l'absence de publication", "À la Constitution", "Au droit international"], bonne: 0, explication: "Exemple des autorisations de mariage avant 18 ans." },
    ],
  },

  5: {
    titre: "Droit et changement social",
    description: "Droit et changement social : Savigny et Bentham, ingénierie sociale, transplantations juridiques, conditions d'Evan, réforme du Code de la famille.",
    resume: md`
## L'essentiel — Droit et changement social

- **Droit reflet** : Savigny (1814), droit né de l'esprit du peuple, méfiance envers la codification ; Durkheim, Marx.
- **Droit moteur** : Bentham, législation rationnelle ; Pound, **ingénierie sociale** ; droit de la modernisation après les indépendances.
- Carbonnier : la loi suit les mœurs mais peut les devancer, sans trop s'en écarter.
- **Transplantations** (Watson, 1974) : DOC de 1913, Code de commerce ; une greffe ne prend pas toujours (Legrand).
- **Conditions d'Evan** (1965) : autorité, justification compatible avec les valeurs, modèles, usage du temps, engagement des agents, sanctions positives et négatives, protection des intéressés.
- Code de la famille : Moudawana (1957-1958), révision de 1993, plan d'action de 1999, marches du 12 mars 2000, commission royale (2001), discours du 10 octobre 2003, loi 70-03 (2004).
- Autres réformes : nationalité (2007), travailleurs domestiques (loi 19-12), terres collectives (loi 62-17).
- Le droit ouvre le changement, il ne l'accomplit pas seul.
`,
    exercices: md`
### Exercice 2 — Reflet ou moteur ?

Classez chaque affirmation : 1) « Le législateur doit attendre que les mœurs aient changé pour consacrer la règle » ; 2) « Une loi bien faite peut modifier les comportements en jouant sur les intérêts de chacun » ; 3) « Le droit, comme la langue, se forme lentement dans le peuple » ; 4) « Le droit est un outil pour organiser les intérêts en conflit ».

<details><summary>Voir le corrigé</summary>

1) Reflet (position proche de Savigny). 2) Moteur (Bentham). 3) Reflet (Savigny, Volksgeist). 4) Moteur (Pound, ingénierie sociale).

</details>

### Exercice 3 — Les conditions d'Evan

Pour la loi 19-12 sur les travailleurs domestiques, indiquez deux conditions d'Evan qui semblent difficiles à réunir et expliquez pourquoi.

<details><summary>Voir le corrigé</summary>

*L'engagement des agents d'application* : l'inspection du travail peut difficilement contrôler un travail exercé dans des domiciles privés, protégés par l'inviolabilité du domicile. *La protection des personnes concernées* : une travailleuse domestique qui réclame ses droits risque de perdre son emploi et parfois son logement ; sans protection effective contre les représailles, elle hésitera à agir. On peut ajouter la *justification compatible avec les valeurs* : le travail domestique est souvent perçu comme relevant de la sphère familiale plutôt que d'une relation de travail, ce qui freine l'acceptation de la règle.

</details>
`,
    qcm: [
      { q: "Pour Savigny, le droit naît :", choix: ["De la volonté rationnelle du législateur", "De l'esprit du peuple, comme la langue", "Des traités internationaux", "Des décisions de la Cour suprême"], bonne: 1, explication: "École historique allemande, 1814." },
      { q: "La notion d'ingénierie sociale par le droit est associée à :", choix: ["Roscoe Pound", "Savigny", "Ehrlich", "Malinowski"], bonne: 0, explication: "Le droit comme outil d'organisation des intérêts." },
      { q: "Le principe du plus grand bonheur du plus grand nombre est celui de :", choix: ["Jeremy Bentham", "Karl Marx", "Max Weber", "Jean Carbonnier"], bonne: 0, explication: "Législation rationnelle et utilitariste." },
      { q: "Legal Transplants (1974) est l'œuvre de :", choix: ["Alan Watson", "William Evan", "Pierre Legrand", "John Griffiths"], bonne: 0, explication: "La plupart des changements juridiques sont des emprunts." },
      { q: "Parmi les conditions d'Evan figure :", choix: ["L'absence de toute sanction", "L'usage du temps par une période de transition", "Le secret de la loi", "Le refus d'expliquer la réforme"], bonne: 1, explication: "Laisser aux personnes le temps de s'adapter." },
      { q: "Les deux marches de Rabat et de Casablanca sur le plan d'action pour l'intégration de la femme ont eu lieu le :", choix: ["12 mars 2000", "20 février 2011", "10 octobre 2003", "16 mai 1930"], bonne: 0, explication: "L'une pour, l'autre contre le plan." },
      { q: "Le discours royal présentant la réforme du Code de la famille devant le Parlement date du :", choix: ["10 octobre 2003", "9 mars 2011", "1er juillet 2011", "3 février 2004"], bonne: 0, explication: "La loi 70-03 est adoptée début 2004." },
      { q: "Le DOC de 1913 est un exemple de :", choix: ["Transplantation juridique", "Droit purement coutumier", "Loi organique", "Droit international public"], bonne: 0, explication: "Il emprunte au code tunisien et aux codes européens." },
      { q: "La loi relative aux travailleurs domestiques est la loi :", choix: ["19-12", "70-03", "103-13", "09-08"], bonne: 0, explication: "Adoptée en 2016, en vigueur en 2018." },
      { q: "Selon Carbonnier, la loi peut devancer les mœurs à condition :", choix: ["De ne pas trop s'en écarter", "D'être secrète", "D'être rétroactive", "D'ignorer les enquêtes"], bonne: 0, explication: "Sinon elle risque l'ineffectivité." },
    ],
  },

  6: {
    titre: "Les professions juridiques",
    description: "Professions juridiques au Maroc : magistrats, avocats, notaires, adouls, huissiers ; monopole, déontologie, concurrence et féminisation.",
    resume: md`
## L'essentiel — Les professions juridiques

- **Profession** : savoir spécialisé, formation, déontologie, organisation collective, monopole ; Parsons (service) et sociologie critique (fermeture).
- **Abbott** (1988) : les professions se disputent des territoires de compétence.
- Magistrats : lois organiques 100-13 (CSPJ) et 106-13 ; Institut supérieur de la magistrature ; Présidence du ministère public depuis 2017.
- Avocats : loi 28-08 ; notaires : loi 32-09 ; adouls : loi 16-03 (actes homologués par le juge chargé du notariat) ; huissiers : loi 81-03 ; experts : loi 45-00.
- Juge : « bouche de la loi » (Montesquieu) nuancée par l'interprétation, le pouvoir d'appréciation, le réalisme ; rôle unificateur de la Cour de cassation.
- Vente immobilière : acte authentique ou acte à date certaine d'un avocat agréé près la Cour de cassation (article 4 de la loi 39-08).
- Choix du professionnel : coût, proximité, confiance, habitudes, exigences des banques.
- Adoulat ouvert aux femmes en 2018 ; féminisation et plafond de verre ; reproduction sociale (Bourdieu).
`,
    exercices: md`
### Exercice 2 — Vrai ou faux

1) L'acte adoulaire doit être homologué par le juge chargé du notariat. 2) La Présidence du ministère public relève du ministre de la Justice depuis 2017. 3) La profession d'adoul est réservée aux hommes. 4) Le notaire est régi par la loi 32-09. 5) Le juge marocain n'a aucun pouvoir d'appréciation.

<details><summary>Voir le corrigé</summary>

1) Vrai. 2) Faux : depuis 2017, elle est confiée au procureur général du Roi près la Cour de cassation. 3) Faux : elle est ouverte aux femmes depuis 2018. 4) Vrai. 5) Faux : il apprécie de nombreux éléments (indemnités, garde, circonstances atténuantes, autorisations).

</details>

### Exercice 3 — Question de cours

Expliquez en dix lignes pourquoi la sociologie des professions parle de « fermeture » à propos des professions juridiques.

<details><summary>Voir le corrigé</summary>

Une profession obtient de l'État un **monopole** sur une activité (plaider, dresser des actes authentiques) au nom de la compétence et de la protection des usagers. Elle contrôle ensuite l'**accès** (diplômes, stages, examens, numerus clausus éventuel) et la **discipline** de ses membres. Cette organisation garantit la qualité du service, mais elle limite aussi la concurrence et protège les revenus des membres : c'est la fermeture sociale. Les débats sur l'ouverture d'une profession (aux femmes, aux jeunes diplômés, à d'autres professionnels) ou sur la répartition des compétences entre notaires, adouls et avocats montrent que ces frontières sont l'objet de luttes, comme l'analyse Abbott.

</details>
`,
    qcm: [
      { q: "La profession d'avocat au Maroc est régie par la loi :", choix: ["28-08", "32-09", "16-03", "81-03"], bonne: 0, explication: "32-09 pour les notaires, 16-03 pour les adouls." },
      { q: "Les actes des adouls doivent être :", choix: ["Enregistrés au registre du commerce", "Homologués par le juge chargé du notariat", "Signés par un avocat", "Approuvés par le Parlement"], bonne: 1, explication: "Spécificité de l'acte adoulaire." },
      { q: "Andrew Abbott analyse les professions comme :", choix: ["Des groupes sans conflit", "Des groupes qui se disputent des territoires de compétence", "Des institutions religieuses", "Des syndicats"], bonne: 1, explication: "The System of Professions, 1988." },
      { q: "Depuis 2017, la Présidence du ministère public est confiée :", choix: ["Au ministre de la Justice", "Au procureur général du Roi près la Cour de cassation", "Au Chef du gouvernement", "Au bâtonnier"], bonne: 1, explication: "Indépendance du parquet." },
      { q: "Selon l'article 4 de la loi 39-08, une vente immobilière doit être faite par :", choix: ["Acte sous seing privé simple", "Acte authentique ou acte à date certaine d'un avocat agréé près la Cour de cassation", "Simple accord verbal", "Acte d'huissier"], bonne: 1, explication: "À peine de nullité." },
      { q: "Montesquieu voulait que le juge soit :", choix: ["Un législateur", "La bouche qui prononce les paroles de la loi", "Un arbitre politique", "Élu par le peuple"], bonne: 1, explication: "Image nuancée par la sociologie du droit." },
      { q: "La profession d'adoul a été ouverte aux femmes en :", choix: ["2004", "2011", "2018", "1958"], bonne: 2, explication: "Après avis du Conseil supérieur des Oulémas." },
      { q: "Le statut des magistrats est fixé par la loi organique :", choix: ["106-13", "29-11", "111-14", "066-13"], bonne: 0, explication: "La loi organique 100-13 porte sur le CSPJ." },
      { q: "Le « plafond de verre » désigne :", choix: ["Le manque de tribunaux", "La difficulté d'accès des femmes aux postes de responsabilité", "Le monopole des notaires", "Les frais de justice"], bonne: 1, explication: "Malgré la féminisation des professions." },
      { q: "L'exécution d'un jugement relève principalement :", choix: ["Du notaire", "De l'huissier de justice", "De l'adoul", "De l'expert judiciaire"], bonne: 1, explication: "Signification et exécution des décisions." },
    ],
  },

  7: {
    titre: "Les conflits et leur règlement",
    description: "Règlement des conflits : nommer, blâmer, réclamer, pyramide des litiges, accès à la justice au Maroc, médiation et arbitrage (loi 95-17).",
    resume: md`
## L'essentiel — Les conflits et leur règlement

- Felstiner, Abel et Sarat (1980-1981) : **nommer**, **blâmer**, **réclamer** ; abandons à chaque étape.
- **Pyramide des litiges** (Miller et Sarat) : très peu de griefs aboutissent à un jugement.
- Cappelletti et Garth (1978) : trois vagues (aide juridictionnelle, intérêts collectifs, procédures simplifiées et modes alternatifs).
- Obstacles : coût, distance, durée, complexité, langue, méfiance.
- Maroc : assistance judiciaire (1966), juridictions de proximité (loi 42-10, 2011), sections de la justice de la famille, Charte de la réforme du système judiciaire (2013), justice numérique ; articles 118 et 121 de la Constitution.
- Modes alternatifs : négociation, conciliation, **médiation** (le tiers aide), **arbitrage** (le tiers tranche) ; loi **95-17** (2022).
- Conciliations obligatoires : divorce, conflits du travail.
- Modes traditionnels : sulh, tahkîm (deux arbitres, sourate 4, verset 35), jmâ'a, notables.
- Limites des modes alternatifs : déséquilibre des parties, pression sociale, absence de jurisprudence.
`,
    exercices: md`
### Exercice 2 — Quel mode ?

Qualifiez : 1) deux commerçants désignent un tiers dont la décision s'imposera à eux ; 2) un juge tente de rapprocher deux époux avant de prononcer le divorce ; 3) un tiers indépendant aide deux voisins à trouver eux-mêmes un accord sur un mur mitoyen ; 4) un salarié et son employeur discutent seuls et signent une transaction.

<details><summary>Voir le corrigé</summary>

1) Arbitrage : le tiers tranche, sa sentence est obligatoire. 2) Conciliation (obligatoire dans la procédure de divorce). 3) Médiation : le tiers aide sans imposer. 4) Négociation, conclue par une transaction.

</details>

### Exercice 3 — Les étapes de Felstiner, Abel et Sarat

Mme Bennani, locataire, constate des infiltrations d'eau dans son logement depuis plusieurs mois. Elle pensait que c'était « normal dans un vieil immeuble ». Une voisine lui explique que le bailleur doit faire les réparations. Elle écrit au bailleur, qui refuse. Identifiez les étapes et indiquez où un abandon aurait pu se produire.

<details><summary>Voir le corrigé</summary>

*Nommer* : tant qu'elle jugeait la situation « normale », il n'y avait pas de préjudice perçu ; l'information donnée par la voisine lui fait prendre conscience d'un préjudice. *Blâmer* : elle attribue la responsabilité au bailleur, débiteur de l'obligation de réparation. *Réclamer* : elle lui écrit. Le refus du bailleur transforme la réclamation en **litige**. Un abandon aurait pu se produire dès la première étape (faute d'information, elle n'aurait jamais nommé le préjudice), puis à chaque étape suivante (crainte d'être expulsée, coût d'une action). L'exemple montre le rôle de l'**information** et des réseaux personnels dans l'accès au droit.

</details>
`,
    qcm: [
      { q: "Les trois étapes de la transformation d'un dommage en litige sont :", choix: ["Nommer, blâmer, réclamer", "Juger, exécuter, appeler", "Négocier, voter, promulguer", "Enquêter, poursuivre, condamner"], bonne: 0, explication: "Felstiner, Abel et Sarat." },
      { q: "La pyramide des litiges montre que :", choix: ["Tous les griefs aboutissent à un procès", "Très peu de griefs aboutissent à un jugement", "Les juges refusent la plupart des affaires", "Seuls les avocats créent des litiges"], bonne: 1, explication: "Abandons à chaque étape." },
      { q: "Access to Justice (1978) est l'œuvre de :", choix: ["Cappelletti et Garth", "Miller et Sarat", "Almond et Verba", "Durkheim et Mauss"], bonne: 0, explication: "Trois vagues de réformes." },
      { q: "Dans la médiation, le tiers :", choix: ["Tranche le litige", "Aide les parties à construire elles-mêmes une solution", "Représente l'une des parties", "Exécute le jugement"], bonne: 1, explication: "À distinguer de l'arbitrage." },
      { q: "La loi marocaine relative à l'arbitrage et à la médiation conventionnelle est la loi :", choix: ["95-17", "42-10", "31-08", "28-08"], bonne: 0, explication: "Adoptée en 2022." },
      { q: "Les juridictions de proximité ont été créées par la loi :", choix: ["42-10", "95-17", "70-03", "62-17"], bonne: 0, explication: "En 2011, pour les petits litiges." },
      { q: "L'article de la Constitution qui garantit l'accès à la justice à toute personne est l'article :", choix: ["118", "47", "175", "2"], bonne: 0, explication: "L'article 121 prévoit la gratuité dans certains cas." },
      { q: "La désignation de deux arbitres, un de chaque famille, en cas de mésentente entre époux, est prévue par la sourate :", choix: ["4, verset 35", "2, verset 282", "5, verset 1", "62, verset 9"], bonne: 0, explication: "Le mécanisme inspire la procédure de divorce pour discorde." },
      { q: "Une limite des modes alternatifs est :", choix: ["Leur rapidité", "Le risque de déséquilibre entre une partie forte et une partie faible", "Leur confidentialité seulement", "Leur coût toujours supérieur au procès"], bonne: 1, explication: "D'où l'encadrement par l'État." },
      { q: "La sentence arbitrale devient exécutoire après :", choix: ["Un vote du Parlement", "L'exequatur", "Une fatwa", "Un référendum"], bonne: 1, explication: "Décision du juge étatique." },
    ],
  },
};

export default chapitres;
