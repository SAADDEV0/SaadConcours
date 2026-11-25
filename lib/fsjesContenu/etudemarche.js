// Étude de Marché (S5, filière MAC) — compléments par chapitre : description SEO, résumé, exercices 2 et 3, QCM.
const md = String.raw;

const chapitres = {
  1: {
    titre: "L'étude de marché : rôle, démarche et cahier des charges",
    description: "Étude de marché : études exploratoires, descriptives et causales, du problème de décision au problème d'étude, hypothèses, brief et valeur de l'information.",
    resume: md`
## L'essentiel — Rôle, démarche et cahier des charges

- **Étude de marché** : collecte, traitement et analyse **méthodiques** d'informations pour éclairer une **décision** marketing précise.
- Selon le but : **exploratoire** (comprendre, faire émerger des hypothèses), **descriptive** (mesurer), **causale** (prouver un effet, avec expérimentation et groupe témoin).
- Selon l'organisation : **ad hoc**, **barométrique** (répétée), **panel** (échantillon permanent).
- **Qualitatif** = comprendre sur peu de personnes ; **quantitatif** = mesurer sur un grand échantillon.
- Le **problème de décision** (choisir entre des options) se traduit en **problème d'étude** (informations à recueillir), puis en **objectifs** et **hypothèses vérifiables**.
- Démarche : problème → documentaire → méthode → échantillon → terrain → analyse → rapport.
- **Brief** : contexte, problème de décision, objectifs, cible, budget, délai ; l'institut répond par une **proposition d'étude**.
- Déontologie : participation volontaire, anonymat, pas de vente déguisée en enquête, loi 09-08.
- **VIP** = E(gain avec information parfaite) − E(gain sans information) : plafond de ce qu'on peut payer pour une étude.
`,
    exercices: md`
### Exercice 2 — Quel type d'étude ?

Indiquez pour chaque besoin le type d'étude (exploratoire, descriptive, causale) : a) une banque veut savoir quelle part de ses clients utilise son application mobile chaque semaine ; b) une chaîne de cafés veut comprendre ce que les étudiants recherchent dans un lieu pour travailler ; c) une enseigne veut savoir si une nouvelle disposition des rayons augmente les ventes, en la testant dans 5 magasins comparés à 5 magasins inchangés ; d) un opérateur veut suivre chaque trimestre la notoriété de sa marque.

<details><summary>Voir le corrigé</summary>

a) **Descriptive** (mesurer une part). b) **Exploratoire** (comprendre des attentes mal connues, entretiens ou réunions de groupe). c) **Causale** : expérimentation avec groupe témoin. d) **Descriptive barométrique** : même mesure répétée chaque trimestre.

</details>

### Exercice 3 — Valeur de l'information

Une entreprise hésite à ouvrir une agence à Oujda : gain de 900 000 DH si la demande est forte (probabilité 50 %), perte de 700 000 DH si elle est faible. Une étude de la zone coûte 250 000 DH.

1. Quelle décision prendre sans étude ? Espérance ?
2. Calculez la VIP. L'étude peut-elle valoir la peine ?

<details><summary>Voir le corrigé</summary>

1. E(ouvrir) = 0,5 × 900 000 − 0,5 × 700 000 = **100 000 DH** > 0 : on ouvrirait.
2. E(information parfaite) = 0,5 × 900 000 + 0,5 × 0 = 450 000 DH ; **VIP = 450 000 − 100 000 = 350 000 DH**. L'étude (250 000 DH) coûte moins que la VIP : elle peut valoir la peine, mais seulement si elle est assez fiable, car elle absorbe déjà 71 % de la valeur d'une information parfaite (250 / 350). Il faut exiger une méthode solide ou négocier une étude moins chère.

</details>
`,
    qcm: [
      { q: "Une étude causale cherche à :", choix: ["Établir un lien de cause à effet entre une action et un résultat", "Décrire la structure d'un marché", "Faire émerger des idées", "Lister les sources documentaires"], bonne: 0, explication: "Elle repose sur l'expérimentation et le groupe témoin." },
      { q: "Une étude barométrique est :", choix: ["Une étude répétée régulièrement avec la même méthode", "Une étude faite une seule fois", "Une étude sur la météo", "Une réunion de groupe"], bonne: 0, explication: "Elle suit une évolution (notoriété, satisfaction)." },
      { q: "Le problème de décision est formulé :", choix: ["Comme un choix entre des options", "Comme une liste de questions du questionnaire", "Comme un tableau de résultats", "Comme un budget"], bonne: 0, explication: "Le problème d'étude en est la traduction en informations." },
      { q: "Laquelle de ces hypothèses est vérifiable ?", choix: ["Au moins 30 % des clients actuels achèteraient la nouvelle offre", "Les clients aiment la marque", "Le produit est bon", "Le marché est intéressant"], bonne: 0, explication: "Elle est précise et chiffrée." },
      { q: "Pour mesurer une part de marché, on utilise plutôt :", choix: ["Une étude quantitative sur un échantillon représentatif", "Trois entretiens individuels", "Une réunion de groupe", "Une technique projective"], bonne: 0, explication: "Le qualitatif sert à comprendre, pas à chiffrer." },
      { q: "Le brief est rédigé par :", choix: ["L'entreprise qui commande l'étude", "Les répondants", "Le transporteur", "La CNDP"], bonne: 0, explication: "L'institut répond par une proposition d'étude." },
      { q: "Gain 1 000 000 DH (p = 0,3), perte 400 000 DH (p = 0,7). L'espérance du lancement est de :", choix: ["20 000 DH", "300 000 DH", "600 000 DH", "− 280 000 DH"], bonne: 0, explication: "300 000 − 280 000 = 20 000." },
      { q: "La valeur de l'information parfaite représente :", choix: ["Le montant maximum qu'il est raisonnable de payer pour une étude", "Le coût réel de l'étude", "Le chiffre d'affaires prévu", "La marge d'erreur de l'échantillon"], bonne: 0, explication: "Une étude réelle vaut moins qu'une information parfaite." },
      { q: "Un panel est :", choix: ["Un échantillon permanent interrogé ou observé régulièrement", "Un questionnaire en ligne", "Un rapport final", "Une étude documentaire"], bonne: 0, explication: "Il permet de suivre les achats dans le temps." },
      { q: "Faire passer une offre commerciale pour une enquête est :", choix: ["Contraire à la déontologie des études", "Une technique projective", "Une étude causale", "Obligatoire pour les panels"], bonne: 0, explication: "Étude et vente doivent rester séparées." },
    ],
  },
  2: {
    titre: "Les études documentaires et le dimensionnement du marché",
    description: "Étude documentaire : données secondaires, sources marocaines (HCP, Office des changes, ANRT), fiabilité, ratios en chaîne, approches top-down et bottom-up.",
    resume: md`
## L'essentiel — Études documentaires et dimensionnement

- **Données secondaires** (existantes) et **primaires** (collectées pour l'étude) ; l'étude documentaire vient **toujours en premier**.
- Sources internes : ventes, fichier clients, site, réclamations, commerciaux ; elles ne décrivent que les clients actuels.
- Sources externes : **HCP** (recensement 2024, consommation des ménages), Bank Al-Maghrib, **Office des changes**, DEPF, **ANRT**, OMPIC, fédérations, rapports des sociétés cotées, panels.
- Évaluer une source : auteur, méthode, **définition**, date, cohérence ; en cas d'écart, expliquer et retenir une fourchette.
- **Ratios en chaîne** : marché = population × taux d'acheteurs × quantité moyenne × prix moyen.
- Marché **potentiel** (tous les acheteurs possibles) et marché **actuel** (ventes réelles).
- Taux de pénétration = acheteurs actuels / acheteurs potentiels.
- Part de marché = ventes de l'entreprise / ventes du marché ; part relative = part de l'entreprise / part du leader.
- **Top-down** (par la demande) et **bottom-up** (par l'offre : points de vente × ventes moyennes) : les croiser.
- Toujours indiquer l'hypothèse la plus sensible.
`,
    exercices: md`
### Exercice 2 — Le marché des fournitures de rentrée

Une ville compte 1 200 000 habitants, dont 22 % ont entre 6 et 17 ans ; 90 % d'entre eux sont scolarisés. Un élève dépense en moyenne 350 DH de fournitures par rentrée. Une papeterie de la ville réalise 3 465 000 DH de ventes de fournitures à la rentrée.

1. Estimez le marché des fournitures de rentrée.
2. Calculez la part de marché de la papeterie.

<details><summary>Voir le corrigé</summary>

1. Jeunes de 6 à 17 ans : 1 200 000 × 22 % = 264 000 ; élèves : 264 000 × 90 % = 237 600 ; marché : 237 600 × 350 = **83 160 000 DH**.
2. Part de marché : 3 465 000 / 83 160 000 ≈ **4,17 %**.

</details>

### Exercice 3 — Deux sources qui divergent

Une fédération professionnelle annonce un marché national de la peinture de 6 milliards de DH ; un rapport d'une société cotée l'estime à 4,5 milliards de DH. Proposez des explications possibles de l'écart et une façon de trancher.

<details><summary>Voir le corrigé</summary>

Explications possibles : **définitions différentes** (la fédération inclut peut-être les vernis, enduits et produits industriels, ou le prix public TTC au lieu du prix de sortie d'usine) ; **années différentes** ; prise en compte ou non du **secteur informel** et des importations ; **intérêt** de l'auteur (une fédération peut grossir le marché pour peser dans une négociation). Pour trancher : vérifier les définitions et les années, croiser avec une approche ascendante (production déclarée + importations − exportations, à partir des données de l'Office des changes), puis retenir une fourchette justifiée.

</details>
`,
    qcm: [
      { q: "Les données secondaires sont :", choix: ["Des informations existantes, collectées par d'autres ou pour un autre but", "Des réponses à un questionnaire conçu pour l'étude", "Des entretiens individuels", "Des observations en magasin faites pour l'étude"], bonne: 0, explication: "Elles sont exploitées par l'étude documentaire." },
      { q: "Pourquoi commencer par l'étude documentaire ?", choix: ["Elle coûte peu, va vite et évite de payer pour une information qui existe", "Elle remplace toujours l'enquête", "Elle est obligatoire selon la loi", "Elle donne des données primaires"], bonne: 0, explication: "Elle prépare et cible la collecte primaire." },
      { q: "Les statistiques du commerce extérieur par produit sont publiées par :", choix: ["L'Office des changes", "La CNDP", "L'OMPIC", "L'ANRT"], bonne: 0, explication: "Avec les recettes du tourisme et les transferts des MRE." },
      { q: "Le recensement général de la population est réalisé par :", choix: ["Le HCP", "Bank Al-Maghrib", "L'AMMC", "La DGI"], bonne: 0, explication: "Le plus récent date de 2024." },
      { q: "500 000 ménages, 40 % acheteurs, 12 achats par an à 50 DH : le marché est de :", choix: ["120 000 000 DH", "12 000 000 DH", "300 000 000 DH", "24 000 000 DH"], bonne: 0, explication: "500 000 × 0,4 × 12 × 50." },
      { q: "Le taux de pénétration est le rapport entre :", choix: ["Les acheteurs actuels et les acheteurs potentiels", "Les ventes de l'entreprise et celles du marché", "Le prix et la quantité", "Le marché actuel et le chiffre d'affaires de l'entreprise"], bonne: 0, explication: "Il mesure la part du potentiel déjà conquise." },
      { q: "L'approche ascendante (bottom-up) part :", choix: ["De l'offre : points de vente ou concurrents", "De la population", "Du prix moyen seulement", "Du recensement"], bonne: 0, explication: "On la croise avec l'approche descendante." },
      { q: "Une entreprise a 15 % de part de marché, le leader 30 %. Sa part de marché relative est de :", choix: ["0,5", "2", "15 %", "45 %"], bonne: 0, explication: "15 / 30 = 0,5." },
      { q: "Le premier critère pour comparer deux chiffres de marché divergents est :", choix: ["Vérifier qu'ils ont la même définition et la même année", "Retenir le plus élevé", "Retenir le plus récent sans vérifier", "Faire la moyenne"], bonne: 0, explication: "Les écarts viennent souvent des définitions." },
      { q: "La principale limite des sources internes est :", choix: ["Elles ne renseignent pas sur les non-clients et les concurrents", "Elles sont toujours fausses", "Elles sont payantes", "Elles sont interdites par la loi 09-08"], bonne: 0, explication: "Elles décrivent les clients actuels seulement." },
    ],
  },
  3: {
    titre: "Les études qualitatives",
    description: "Études qualitatives : entretiens semi-directifs, réunions de groupe, techniques projectives, observation, guide d'entretien, saturation et analyse de contenu.",
    resume: md`
## L'essentiel — Les études qualitatives

- L'étude qualitative sert à **comprendre** (pourquoi, comment) sur un petit nombre de personnes ; elle **ne mesure pas** et ne s'extrapole pas.
- Utile avant une enquête (hypothèses, vocabulaire), à sa place (idées), ou après (expliquer un résultat).
- **Entretien individuel** : non directif, **semi-directif** (guide de thèmes, le plus courant), directif ; idéal pour les sujets intimes.
- Techniques de l'enquêteur : écoute, **reformulation**, écho, silences, aucun avis personnel.
- **Réunion de groupe** : 6 à 10 participants homogènes, 1 h 30 à 3 h, modérateur ; richesse des échanges mais effet de **conformité**.
- **Techniques projectives** : association de mots, phrase à compléter, **portrait chinois**, collage, jeu de rôle.
- **Observation** (ethnographie, comportement en rayon) et **netnographie** (communautés en ligne).
- **Guide d'entretien en entonnoir** : introduction → général → central → spécifique → conclusion, questions ouvertes.
- Échantillon choisi pour sa **diversité** ; on s'arrête à **saturation** (souvent 15 à 30 entretiens, 3 à 6 groupes).
- **Analyse de contenu** : grille thèmes × entretiens, verbatims, lecture horizontale et verticale.
`,
    exercices: md`
### Exercice 2 — Choisir la technique

Quelle technique qualitative choisir pour chaque objectif ? a) comprendre comment les patients choisissent une clinique privée ; b) recueillir les réactions à trois projets d'emballage pour une marque de biscuits ; c) découvrir l'image inconsciente d'une banque auprès des jeunes ; d) comprendre comment les clients se déplacent dans un supermarché ; e) analyser ce que les clients disent d'un opérateur sur les réseaux sociaux.

<details><summary>Voir le corrigé</summary>

a) **Entretiens individuels semi-directifs** : sujet personnel (santé, argent). b) **Réunions de groupe** : les participants réagissent aux emballages et en discutent. c) **Techniques projectives** (portrait chinois, association de mots), en entretien ou en groupe. d) **Observation** des parcours en magasin. e) **Netnographie**.

</details>

### Exercice 3 — Corriger un guide d'entretien

Un étudiant a rédigé ces questions pour un guide sur l'achat de vêtements en ligne : « Êtes-vous satisfait des sites de vêtements ? » ; « Vous trouvez que la livraison est trop chère, n'est-ce pas ? » ; « Combien dépensez-vous par mois ? ». Corrigez-les.

<details><summary>Voir le corrigé</summary>

- « Êtes-vous satisfait… ? » est **fermée** : « Racontez-moi votre dernier achat de vêtement en ligne. Comment cela s'est-il passé ? »
- « …trop chère, n'est-ce pas ? » est **orientée** : « Que pensez-vous des conditions de livraison des sites que vous connaissez ? »
- « Combien dépensez-vous… ? » est une question de **mesure**, mal adaptée au qualitatif et sensible d'entrée : la placer en fin d'entretien sous une forme ouverte (« Comment décidez-vous de ce que vous pouvez dépenser pour vos vêtements ? »), et la mesurer dans l'enquête quantitative.

</details>
`,
    qcm: [
      { q: "L'objectif principal d'une étude qualitative est de :", choix: ["Comprendre les motivations, freins et perceptions", "Mesurer une part de marché", "Estimer une moyenne avec une marge d'erreur", "Calculer un khi-deux"], bonne: 0, explication: "Elle répond aux questions pourquoi et comment." },
      { q: "L'entretien semi-directif repose sur :", choix: ["Un guide de thèmes à aborder avec souplesse", "Une seule consigne de départ", "Un questionnaire fermé", "Une observation silencieuse"], bonne: 0, explication: "C'est la forme la plus courante en marketing." },
      { q: "Une réunion de groupe compte généralement :", choix: ["6 à 10 participants", "2 participants", "30 à 50 participants", "Plus de 100 participants"], bonne: 0, explication: "Au-delà, la discussion devient difficile." },
      { q: "Le principal biais de la réunion de groupe est :", choix: ["L'effet de conformité", "Le coût de l'échantillon représentatif", "La marge d'erreur", "Le redressement"], bonne: 0, explication: "Les participants s'alignent sur la majorité ou un leader." },
      { q: "« Si cette marque était un animal, ce serait… » est :", choix: ["Un portrait chinois", "Une échelle de Likert", "Une question filtre", "Un tri croisé"], bonne: 0, explication: "C'est une technique projective." },
      { q: "Le principe de saturation indique :", choix: ["Qu'on arrête les entretiens quand ils n'apportent plus d'idée nouvelle", "Qu'il faut interroger 1 000 personnes", "Que le questionnaire est trop long", "Que le marché est saturé"], bonne: 0, explication: "C'est la règle de taille de l'échantillon qualitatif." },
      { q: "Un guide d'entretien en entonnoir va :", choix: ["Du général au particulier", "Du particulier au général", "Des questions de prix aux questions de mode de vie", "Des réponses aux questions"], bonne: 0, explication: "On commence par le mode de vie, on finit par le concept testé." },
      { q: "Un verbatim est :", choix: ["Une citation exacte d'une personne interrogée", "Un tableau de pourcentages", "Un indice statistique", "Un type d'échantillon"], bonne: 0, explication: "Il illustre les thèmes de l'analyse de contenu." },
      { q: "Pour un sujet intime comme l'hygiène, on préfère :", choix: ["L'entretien individuel", "La réunion de groupe", "Le panel de distributeurs", "L'étude documentaire"], bonne: 0, explication: "La personne s'exprime plus librement en tête-à-tête." },
      { q: "La netnographie consiste à :", choix: ["Observer et analyser les communautés et discussions en ligne", "Envoyer un questionnaire par courrier électronique", "Mesurer l'audience d'un site", "Tester une publicité en salle"], bonne: 0, explication: "Les personnes actives en ligne ne représentent qu'une partie des clients." },
    ],
  },
  4: {
    titre: "Le questionnaire et les échelles de mesure",
    description: "Construire un questionnaire : questions ouvertes et fermées, échelles de Likert et d'Osgood, erreurs de formulation, ordre en entonnoir, mode d'administration.",
    resume: md`
## L'essentiel — Questionnaire et échelles

- Le questionnaire traduit les **objectifs** : plan de questionnement objectif → information → question → analyse prévue.
- Étapes : informations → mode d'administration → rédaction → ordre → mise en forme → **pré-test**.
- Types : ouverte, fermée (dichotomique, choix unique, **choix multiples** dont le total dépasse 100 %), classement, numérique, échelle d'attitude, **question filtre**.
- Niveaux de mesure : **nominal** (pourcentages), **ordinal** (médiane), **intervalle** (moyenne), **ratio** (tous calculs).
- **Likert** : degré d'accord sur 5 ou 7 niveaux ; score moyen = somme des $n_i x_i$ / N ; part de favorables.
- **Différentiel sémantique (Osgood)** : paires d'adjectifs opposés, pour comparer l'image des marques.
- Erreurs : question **double**, **orientée**, vague, technique, négative, mémoire excessive, modalités non exclusives, question sensible trop tôt.
- Biais : **désirabilité sociale**, acquiescement, tendance centrale.
- Ordre en **entonnoir** : introduction, filtre, facile, central, sensible et signalétique à la fin ; notoriété **spontanée avant assistée**.
- Modes : face à face (riche, coûteux), téléphone (rapide, court), en ligne (peu coûteux, biaisé vers les connectés) ; suivre le taux de réponse ; prévoir arabe/darija et retraduction.
`,
    exercices: md`
### Exercice 2 — Choisir le type de question

Proposez une question adaptée (type et modalités) pour mesurer : a) la marque de téléphone utilisée ; b) les applications de livraison installées sur le téléphone ; c) l'importance de cinq critères dans le choix d'un supermarché ; d) la dépense hebdomadaire en courses alimentaires ; e) l'image de modernité d'une banque comparée à deux concurrentes.

<details><summary>Voir le corrigé</summary>

a) Fermée à **choix unique** avec liste de marques et « Autre, précisez ». b) Fermée à **choix multiples** (plusieurs réponses possibles). c) **Classement** des 5 critères, ou une échelle d'importance par critère. d) Question **numérique** (« Combien avez-vous dépensé la semaine dernière ? ») ou tranches exclusives. e) **Différentiel sémantique** (moderne … traditionnelle, sur 7 positions), posé pour les trois banques.

</details>

### Exercice 3 — Score d'image

Sur une échelle d'Osgood en 7 positions (1 = traditionnelle, 7 = moderne), 150 personnes ont noté une banque : 1 : 5 ; 2 : 10 ; 3 : 15 ; 4 : 30 ; 5 : 40 ; 6 : 35 ; 7 : 15. Calculez le score moyen et la part de personnes qui placent la banque du côté « moderne » (5 à 7).

<details><summary>Voir le corrigé</summary>

Somme : 5 + 20 + 45 + 120 + 200 + 210 + 105 = 705 ; moyenne : 705 / 150 = **4,70**. Côté moderne : (40 + 35 + 15) / 150 = 90 / 150 = **60 %**. L'image est plutôt moderne ; il faut comparer avec les profils des deux concurrentes, notés sur la même échelle.

</details>
`,
    qcm: [
      { q: "Une question « Le produit est-il pratique et bon marché ? » est une question :", choix: ["Double", "Filtre", "Projective", "Ouverte"], bonne: 0, explication: "Elle mesure deux choses à la fois." },
      { q: "Sur une variable nominale comme la ville, on peut calculer :", choix: ["Des effectifs et des pourcentages", "Une moyenne", "Un écart type", "Un rapport"], bonne: 0, explication: "Seuls les comptages ont un sens." },
      { q: "L'échelle de Likert mesure :", choix: ["Le degré d'accord avec une affirmation", "Le prix psychologique", "La taille de l'échantillon", "La notoriété spontanée"], bonne: 0, explication: "En général sur 5 ou 7 niveaux." },
      { q: "Le différentiel sémantique utilise :", choix: ["Des paires d'adjectifs opposés", "Une liste de marques", "Des questions ouvertes", "Un classement"], bonne: 0, explication: "Échelle d'Osgood, utile pour l'image de marque." },
      { q: "100 réponses : 1 : 10 ; 2 : 20 ; 3 : 30 ; 4 : 25 ; 5 : 15. Le score moyen est de :", choix: ["3,15", "3,00", "2,85", "3,50"], bonne: 0, explication: "(10 + 40 + 90 + 100 + 75) / 100 = 3,15." },
      { q: "La notoriété spontanée doit être mesurée :", choix: ["Avant la notoriété assistée", "Après la notoriété assistée", "En fin de questionnaire seulement", "Avec une liste de marques"], bonne: 0, explication: "Sinon la liste suggère la réponse." },
      { q: "Le biais de désirabilité sociale conduit à :", choix: ["Se présenter sous un jour favorable", "Répondre au hasard", "Refuser toutes les questions", "Choisir toujours la première modalité"], bonne: 0, explication: "On déclare ce qui est bien vu." },
      { q: "Les classes d'âge 18-25 / 25-35 / 35-45 posent un problème car :", choix: ["Elles ne sont pas exclusives", "Elles sont trop nombreuses", "Elles sont ouvertes", "Elles sont ordinales"], bonne: 0, explication: "25 et 35 appartiennent à deux classes." },
      { q: "La fiche signalétique (âge, revenu…) se place de préférence :", choix: ["À la fin du questionnaire", "Au tout début", "Au milieu", "Dans un questionnaire séparé"], bonne: 0, explication: "Les questions sensibles viennent en fin." },
      { q: "Le principal inconvénient de l'enquête en ligne est :", choix: ["Un échantillon biaisé vers les personnes connectées", "Son coût très élevé", "L'impossibilité d'utiliser des filtres", "La durée du terrain"], bonne: 0, explication: "Elle peut exclure une partie de la population." },
    ],
  },
  5: {
    titre: "L'échantillonnage et le terrain",
    description: "Échantillonnage en étude de marché : base de sondage, tirage aléatoire, stratifié, par grappes, quotas, taille d'échantillon, marge d'erreur et redressement.",
    resume: md`
## L'essentiel — Échantillonnage et terrain

- **Population** précisément définie ; **base de sondage** = liste qui permet de contacter ses éléments ; échantillon **représentatif** = même structure sur les critères importants.
- Méthodes **probabilistes** (marge d'erreur calculable, base de sondage nécessaire) : aléatoire simple, **systématique** (pas $k = N/n$), **stratifiée**, **par grappes**.
- Méthodes **empiriques** : **quotas** (structure reproduite sur quelques critères connus, souvent tirés du recensement du HCP), convenance, itinéraires, boule de neige.
- Taille pour une proportion : $n = z^2 p(1-p) / e^2$, avec $z = 1{,}96$ à 95 % et $p = 0{,}5$ si inconnu ; arrondir **au-dessus**.
- Repères : ± 5 points → 385 ; ± 3 points → 1 068. Diviser la marge par 2 = multiplier la taille par 4.
- Correction de population finie : $n' = n / (1 + (n - 1)/N)$.
- Marge d'erreur : $e = z\sqrt{p(1-p)/n}$ ; plus grande dans chaque sous-groupe.
- Nombre de contacts = taille visée / taux de réponse.
- **Redressement** : coefficient = part dans la population / part dans l'échantillon ; résultat redressé = moyenne pondérée par les parts de la population.
`,
    exercices: md`
### Exercice 2 — Taille et marge d'erreur

1. Une enquête sur 600 personnes trouve 30 % d'intentions d'achat. Calculez la marge d'erreur à 95 % et l'intervalle de confiance.
2. Combien faudrait-il interroger de personnes pour une marge de ± 2 points, en supposant $p = 0{,}30$ ?
3. Le taux de réponse attendu est de 20 %. Combien de personnes contacter ?

<details><summary>Voir le corrigé</summary>

1. $e = 1{,}96 \sqrt{0{,}30 \times 0{,}70 / 600} = 1{,}96 \times 0{,}01871 \approx 0{,}0367$ : **± 3,7 points** ; intervalle **[26,3 % ; 33,7 %]**.
2. $n = 1{,}96^2 \times 0{,}21 / 0{,}02^2 = 0{,}806736 / 0{,}0004 = 2\,016{,}84$ → **2 017** personnes.
3. 2 017 / 0,20 = 10 085 personnes à contacter.

</details>

### Exercice 3 — Échantillon systématique et stratifié

Une banque a 24 000 clients particuliers, dont 18 000 clients « standard » et 6 000 clients « premium ». Elle veut interroger 600 clients.

1. Avec un tirage systématique sur le fichier, quel est le pas de sondage ?
2. Elle veut analyser séparément les deux catégories avec au moins 300 répondants chacune. Proposez un plan stratifié et les coefficients de pondération pour les résultats d'ensemble.

<details><summary>Voir le corrigé</summary>

1. $k = 24\,000 / 600 = 40$ : on tire au hasard un nombre entre 1 et 40, puis un client sur 40.
2. Stratifié **non proportionnel** : 300 standard et 300 premium. Les premium (25 % des clients) représentent 50 % de l'échantillon. Coefficients : standard 0,75 / 0,50 = **1,5** ; premium 0,25 / 0,50 = **0,5**. Un résultat global se calcule par 0,75 × résultat standard + 0,25 × résultat premium.

</details>
`,
    qcm: [
      { q: "La base de sondage est :", choix: ["La liste qui permet d'identifier et de contacter les éléments de la population", "Le questionnaire", "Le rapport d'étude", "Le budget de l'étude"], bonne: 0, explication: "Elle est nécessaire aux méthodes probabilistes." },
      { q: "La méthode des quotas est :", choix: ["Une méthode empirique qui reproduit la structure de la population sur quelques critères", "Une méthode aléatoire simple", "Un recensement", "Une technique projective"], bonne: 0, explication: "L'enquêteur choisit les personnes dans chaque catégorie." },
      { q: "Pour une marge de ± 5 points à 95 %, sans information sur p, il faut :", choix: ["385 personnes", "100 personnes", "1 068 personnes", "250 personnes"], bonne: 0, explication: "0,9604 / 0,0025 = 384,16 arrondi à 385." },
      { q: "Pour diviser la marge d'erreur par deux, il faut multiplier la taille de l'échantillon par :", choix: ["4", "2", "8", "1,5"], bonne: 0, explication: "La marge varie comme 1 / racine de n." },
      { q: "Un fichier de 30 000 clients, échantillon de 500 : le pas d'un tirage systématique est de :", choix: ["60", "500", "30", "600"], bonne: 0, explication: "30 000 / 500 = 60." },
      { q: "Le tirage par grappes consiste à :", choix: ["Tirer au hasard des groupes, puis interroger leurs membres", "Diviser la population en strates homogènes", "Interroger les personnes disponibles", "Demander à chaque répondant d'en indiquer d'autres"], bonne: 0, explication: "Il réduit les coûts de terrain." },
      { q: "Une catégorie représente 30 % de la population et 20 % de l'échantillon. Son coefficient de redressement est :", choix: ["1,5", "0,67", "0,5", "10"], bonne: 0, explication: "0,30 / 0,20 = 1,5." },
      { q: "Avec p = 0,5 et n = 400, la marge d'erreur à 95 % est d'environ :", choix: ["± 4,9 points", "± 2,5 points", "± 10 points", "± 1 point"], bonne: 0, explication: "1,96 × racine(0,25 / 400) = 0,049." },
      { q: "La correction de population finie s'applique quand :", choix: ["L'échantillon représente une part importante de la population", "La population est très grande", "On utilise des quotas", "Le taux de réponse est faible"], bonne: 0, explication: "Au-delà d'environ 5 à 10 % de la population." },
      { q: "Un échantillon de convenance de 5 000 réponses en ligne :", choix: ["N'est pas forcément représentatif malgré sa taille", "Est toujours représentatif", "A une marge d'erreur nulle", "Remplace un recensement"], bonne: 0, explication: "La taille ne corrige pas un biais de sélection." },
    ],
  },
  6: {
    titre: "L'analyse des données et le rapport d'étude",
    description: "Analyse d'une étude de marché : codage, tri à plat, intervalle de confiance, tri croisé, test du khi-deux, V de Cramer, comparaison de proportions et rapport.",
    resume: md`
## L'essentiel — Analyse des données et rapport

- Préparer : **codage** (grille pour les questions ouvertes), **contrôle** des incohérences, **apurement**.
- **Tri à plat** : effectifs, pourcentages, moyenne, médiane, écart type d'une question.
- Intervalle de confiance d'une proportion à 95 % : $p \pm 1{,}96\sqrt{p(1-p)/n}$.
- **Tri croisé** : deux variables ; pourcentages calculés par modalité de la variable explicative.
- **Khi-deux** : $H_0$ = indépendance ; $T_{ij}$ = total ligne × total colonne / N ; $\chi^2 = \sum (O - T)^2 / T$ ; ddl = (l − 1)(c − 1).
- Valeurs critiques à 5 % : 3,841 (1 ddl), 5,991 (2), 7,815 (3), 9,488 (4) ; si $\chi^2$ calculé > valeur critique, on rejette l'indépendance.
- Toujours sur des **effectifs** ; effectifs théoriques d'au moins 5 ; **V de Cramer** = $\sqrt{\chi^2 / (N(k-1))}$ pour l'intensité.
- Comparaison de deux proportions : $z = (p_1 - p_2) / \sqrt{\bar{p}(1-\bar{p})(1/n_1 + 1/n_2)}$ ; significatif si $|z| > 1{,}96$.
- Lien statistique ≠ causalité.
- Rapport : **synthèse**, problème, méthodologie (marge d'erreur, limites), résultats **par objectif**, conclusions, **recommandations**, annexes ; titres de graphiques qui énoncent le message.
`,
    exercices: md`
### Exercice 2 — Khi-deux sur un tableau 2 × 2

Une enseigne a interrogé 200 clients sur leur participation au programme de fidélité selon le sexe : femmes membres 60, non membres 40 ; hommes membres 40, non membres 60.

1. Calculez le khi-deux et concluez au seuil de 5 %.
2. Calculez le V de Cramer.

<details><summary>Voir le corrigé</summary>

1. Totaux : 100 femmes, 100 hommes, 100 membres, 100 non-membres ; tous les effectifs théoriques valent 100 × 100 / 200 = 50. $\chi^2 = 4 \times 10^2 / 50 = 4 \times 2 = 8$. ddl = 1 ; valeur critique 3,841 ; 8 > 3,841 : la participation **dépend du sexe** (60 % des femmes contre 40 % des hommes).
2. $V = \sqrt{8 / (200 \times 1)} = \sqrt{0{,}04} = 0{,}20$ : lien **faible à modéré**.

</details>

### Exercice 3 — Deux villes

Une enquête trouve 35 % de clients satisfaits sur 300 répondants à Marrakech, et 41 % sur 300 répondants à Rabat. L'écart est-il significatif au seuil de 5 % ?

<details><summary>Voir le corrigé</summary>

Satisfaits : 105 à Marrakech et 123 à Rabat ; $\bar{p} = 228 / 600 = 0{,}38$. Dénominateur : $\sqrt{0{,}38 \times 0{,}62 \times (2/300)} = \sqrt{0{,}2356 \times 0{,}006667} = \sqrt{0{,}0015707} \approx 0{,}03963$. $z = 0{,}06 / 0{,}03963 \approx 1{,}51$. Comme 1,51 < 1,96, l'écart **n'est pas significatif** : on ne peut pas conclure que Rabat est plus satisfaite. Il faudrait des échantillons plus grands.

</details>
`,
    qcm: [
      { q: "Le tri à plat présente :", choix: ["La répartition des réponses à une seule question", "Le croisement de deux variables", "Le test d'indépendance", "Les coefficients de redressement"], bonne: 0, explication: "C'est la première lecture des résultats." },
      { q: "60 % observés sur 400 personnes : la marge d'erreur à 95 % est d'environ :", choix: ["± 4,8 points", "± 2,4 points", "± 9,6 points", "± 1,2 point"], bonne: 0, explication: "1,96 × racine(0,24 / 400) = 0,048." },
      { q: "Dans le test du khi-deux, l'hypothèse nulle est :", choix: ["Les deux variables sont indépendantes", "Les deux variables sont liées", "La moyenne est égale à zéro", "L'échantillon est représentatif"], bonne: 0, explication: "On la rejette si le khi-deux dépasse la valeur critique." },
      { q: "L'effectif théorique d'une case se calcule :", choix: ["Total de la ligne × total de la colonne / effectif total", "Effectif observé / effectif total", "Total de la ligne + total de la colonne", "Effectif observé au carré"], bonne: 0, explication: "C'est l'effectif attendu sous l'indépendance." },
      { q: "Un tableau à 3 lignes et 4 colonnes a un nombre de degrés de liberté de :", choix: ["6", "12", "7", "5"], bonne: 0, explication: "(3 − 1) × (4 − 1) = 6." },
      { q: "Avec 2 ddl, un khi-deux calculé de 4,2 au seuil de 5 % conduit à :", choix: ["Ne pas rejeter l'indépendance", "Rejeter l'indépendance", "Conclure à une causalité", "Refaire le questionnaire"], bonne: 0, explication: "4,2 < 5,991." },
      { q: "Le khi-deux se calcule sur :", choix: ["Les effectifs", "Les pourcentages", "Les moyennes", "Les médianes"], bonne: 0, explication: "Le calcul sur des pourcentages est faux." },
      { q: "Le V de Cramer mesure :", choix: ["L'intensité du lien entre deux variables qualitatives", "La marge d'erreur", "La taille de l'échantillon", "Le taux de réponse"], bonne: 0, explication: "Il varie de 0 à 1." },
      { q: "Dans un test de comparaison de deux proportions, l'écart est significatif à 5 % si :", choix: ["|z| > 1,96", "|z| < 1,96", "z = 0", "z > 0,05"], bonne: 0, explication: "Valeur critique de la loi normale à 95 %." },
      { q: "Dans un rapport d'étude, les résultats sont organisés de préférence :", choix: ["Par objectif de l'étude", "Dans l'ordre du questionnaire", "Par ordre alphabétique", "Par enquêteur"], bonne: 0, explication: "Le rapport sert la décision." },
    ],
  },
};

export default chapitres;
