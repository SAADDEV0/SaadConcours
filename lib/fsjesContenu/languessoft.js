// Langues étrangères et soft skills (S1) — compléments par chapitre : description SEO, résumé, exercices 2 et 3, QCM.
const md = String.raw;

const chapitres = {
  1: {
    titre: "Langues et soft skills au S1 : de quoi parle-t-on ?",
    description: "Langues et soft skills au S1 : rôle des modules transversaux, organisation selon la faculté, hard et soft skills, niveaux CECRL et plan d'action étudiant.",
    resume: md`
## L'essentiel — Langues et soft skills au S1

- Modules transversaux : apprendre à apprendre, rédiger, communiquer ; contenu propre à chaque faculté.
- Dès la première séance : **contenu**, **mode d'évaluation**, **coefficient**.
- Ils comptent dans la moyenne : +6 points dans un module sur six = +1 point de moyenne.
- Hard skills (techniques) / soft skills (communication, organisation, esprit critique, équipe, adaptabilité, résolution de problèmes, intelligence émotionnelle).
- **CECRL** : A1-A2 élémentaire, B1-B2 indépendant, C1-C2 expérimenté ; viser B2 en français, B1-B2 en anglais.
- Plan d'action : bilan, objectifs SMART, ressources, créneaux, évaluation mensuelle.
`,
    exercices: md`
### Exercice 2 — Hard ou soft ?

Classez : 1) maîtriser un tableur ; 2) gérer un conflit dans un groupe ; 3) calculer une TVA ; 4) respecter une échéance ; 5) présenter un exposé clair ; 6) traduire un contrat.

<details><summary>Voir le corrigé</summary>

Hard skills : 1, 3, 6. Soft skills : 2 (travail en équipe, intelligence émotionnelle), 4 (organisation), 5 (communication orale). Certaines compétences combinent les deux : un bon exposé exige aussi des connaissances techniques.

</details>

### Exercice 3 — Objectifs SMART

Transformez en objectifs SMART : a) « Je veux parler mieux anglais » ; b) « Je veux être plus organisé » ; c) « Je veux moins stresser à l'oral ».

<details><summary>Voir le corrigé</summary>

a) « Écouter chaque jour 15 minutes d'un podcast économique en anglais et noter cinq mots nouveaux, jusqu'à la fin du semestre. » b) « Chaque dimanche soir, établir mon planning de la semaine et cocher les tâches réalisées. » c) « Prendre la parole au moins une fois par séance de travaux dirigés pendant quatre semaines. »

</details>
`,
    qcm: [
      { q: "Les modules transversaux du S1 visent surtout à :", choix: ["Ajouter des connaissances techniques", "Apprendre à apprendre, rédiger et communiquer", "Remplacer les modules disciplinaires", "Préparer au baccalauréat"], bonne: 1, explication: "Ils facilitent la réussite dans les autres modules." },
      { q: "Le programme des modules de langues et de soft skills :", choix: ["Est identique dans toutes les facultés", "Varie selon la faculté", "N'existe pas", "Est fixé par les étudiants"], bonne: 1, explication: "Le syllabus de l'enseignant fait foi." },
      { q: "Dans un semestre de 6 modules de même poids, gagner 6 points dans un module augmente la moyenne de :", choix: ["6 points", "1 point", "0,5 point", "3 points"], bonne: 1, explication: "6 / 6." },
      { q: "Parmi ces compétences, laquelle est une soft skill ?", choix: ["Calculer un amortissement", "Gérer son temps", "Programmer en Python", "Tenir un journal comptable"], bonne: 1, explication: "Compétence comportementale transversale." },
      { q: "Le CECRL comporte :", choix: ["3 niveaux", "6 niveaux", "10 niveaux", "4 niveaux"], bonne: 1, explication: "De A1 à C2." },
      { q: "Le niveau B2 correspond à un utilisateur :", choix: ["Élémentaire", "Indépendant avancé", "Débutant", "Maîtrise totale"], bonne: 1, explication: "Il comprend un article spécialisé et argumente." },
      { q: "La première chose à relever dans un module est :", choix: ["La couleur du support", "Le contenu, l'évaluation et le coefficient", "Le nom des autres étudiants", "L'horaire de la cafétéria"], bonne: 1, explication: "Trois informations essentielles." },
      { q: "Un objectif SMART est notamment :", choix: ["Vague", "Mesurable et daté", "Impossible", "Secret"], bonne: 1, explication: "Spécifique, mesurable, atteignable, réaliste, temporel." },
      { q: "Les soft skills sont recherchées par les recruteurs car :", choix: ["Elles remplacent le diplôme", "Elles restent utiles quand les techniques évoluent", "Elles ne s'apprennent pas", "Elles sont faciles à mesurer"], bonne: 1, explication: "Capacité à apprendre et à coopérer." },
      { q: "Le niveau C1 correspond à :", choix: ["Un utilisateur expérimenté autonome", "Un débutant", "Un utilisateur élémentaire", "Un niveau inexistant"], bonne: 0, explication: "Usage courant en contexte professionnel." },
    ],
  },

  2: {
    titre: "La prise de notes et l'écoute active en amphi",
    description: "Prise de notes en amphi : courbe de l'oubli, écoute active, signaux de l'enseignant, abréviations, méthode Cornell, carte mentale et fiches de révision.",
    resume: md`
## L'essentiel — Prise de notes et écoute active

- Prendre des notes = sélectionner, reformuler, structurer ; impossible de tout écrire.
- **Courbe de l'oubli** (Ebbinghaus, 1885) : relire et compléter ses notes dans les **24 heures**.
- Écoute active : avant (relire), pendant (plan, définitions, exemples), après (questions).
- Signaux : annonce de plan, définition, insistance, tableau, allusion à l'examen.
- Abréviations et symboles personnels mais stables (↗, ↘, →, def., ex.).
- **Cornell** : notes / indices (questions) / résumé ; réviser en cachant les notes.
- Carte mentale pour résumer et relier ; papier ou numérique : titrer, dater, classer.
`,
    exercices: md`
### Exercice 2 — Abréviations

Réécrivez en style télégraphique : « Le gouvernement a décidé d'augmenter les investissements publics dans le développement des infrastructures, ce qui devrait entraîner une augmentation de la croissance économique au Maroc. »

<details><summary>Voir le corrigé</summary>

« Gvt : ↗ invest. publics ds infrastructures → ↗ croissance éco (Mar.) attendue. » La phrase passe de 27 à une dizaine de mots, sans perte de sens.

</details>

### Exercice 3 — Organiser sa relecture

Karim a trois cours magistraux le lundi (économie, droit, comptabilité). Il ne relit jamais ses notes avant les révisions finales. Proposez-lui une routine de relecture réaliste.

<details><summary>Voir le corrigé</summary>

Lundi soir (ou mardi matin) : 15 minutes par cours pour relire, compléter avec le support et remplir la colonne des questions. Fin de semaine : 30 minutes pour répondre aux questions de la semaine sans regarder les notes. Fin de chapitre : une fiche ou une carte mentale. Cette routine, courte mais régulière, freine la courbe de l'oubli.

</details>
`,
    qcm: [
      { q: "La règle d'or de la prise de notes est de relire ses notes :", choix: ["La veille de l'examen", "Dans les 24 heures", "Jamais", "Une fois par an"], bonne: 1, explication: "Pour freiner la courbe de l'oubli." },
      { q: "La courbe de l'oubli a été mise en évidence par :", choix: ["Ebbinghaus", "Taylor", "Keynes", "Pauk"], bonne: 0, explication: "En 1885." },
      { q: "Dans la méthode Cornell, la colonne de gauche contient :", choix: ["Les notes du cours", "Les mots-clés et questions", "Le résumé", "Rien"], bonne: 1, explication: "Remplie après le cours." },
      { q: "La méthode Cornell a été mise au point par :", choix: ["Tony Buzan", "Walter Pauk", "Hermann Ebbinghaus", "Peter Drucker"], bonne: 1, explication: "Université Cornell, années 1950." },
      { q: "Un signal indiquant une information importante est :", choix: ["« Retenez bien que… »", "Une pause café", "Un exemple hors sujet", "La fin du cours"], bonne: 0, explication: "L'insistance de l'enseignant." },
      { q: "Le symbole → signifie généralement :", choix: ["Diminue", "Entraîne, donc", "Égal", "Environ"], bonne: 1, explication: "Relation de conséquence." },
      { q: "La carte mentale est particulièrement utile pour :", choix: ["Recopier le cours mot à mot", "Résumer un chapitre et relier les notions", "Calculer une moyenne", "Remplacer le cours"], bonne: 1, explication: "Vision d'ensemble sur une page." },
      { q: "Réviser en se posant des questions sans regarder ses notes relève de :", choix: ["La relecture passive", "La récupération active", "La copie", "La prise de notes linéaire"], bonne: 1, explication: "Méthode plus efficace que la relecture." },
      { q: "Prendre ses notes sur ordinateur présente le risque de :", choix: ["Trop reformuler", "Tout transcrire sans réfléchir", "Écrire trop lentement", "Perdre la mémoire"], bonne: 1, explication: "Et les distractions." },
      { q: "Le résumé Cornell se place :", choix: ["En haut de page", "En bas de page", "Dans la marge droite", "Sur une autre feuille"], bonne: 1, explication: "Trois à cinq lignes." },
    ],
  },

  3: {
    titre: "Organiser son semestre : la méthodologie de travail",
    description: "Méthodologie du travail universitaire : planning semestriel, matrice d'Eisenhower, Pomodoro, révisions espacées, récupération active, fiches et examens.",
    resume: md`
## L'essentiel — Organiser son semestre

- Autonomie : environ 1 heure de travail personnel par heure de cours.
- Planning semestriel (échéances, jalons) et hebdomadaire (créneaux fixes, blocs de travail, marge, bilan).
- **Eisenhower** : important/urgent ; privilégier « important non urgent » (planifier).
- **Pomodoro** : 25 minutes de concentration, 5 minutes de pause ; objectif précis ; téléphone éloigné.
- Mémoriser : **récupération active**, **révisions espacées** (J1, J3, J7, J21), entrelacement, sommeil.
- Fiches d'une page, flashcards ; annales, entraînement en conditions réelles, gestion du temps le jour J.
`,
    exercices: md`
### Exercice 2 — Planning de révisions espacées

Un cours de droit a lieu le lundi 3 mars. Donnez les dates de révision selon le calendrier J1, J3, J7, J21.

<details><summary>Voir le corrigé</summary>

J1 : mardi 4 mars ; J3 : jeudi 6 mars ; J7 : lundi 10 mars ; J21 : lundi 24 mars. Chaque séance commence par un rappel sans notes (questions, flashcards), puis correction avec le cours.

</details>

### Exercice 3 — Diagnostic

Salma travaille 5 heures d'affilée le dimanche, en relisant et en surlignant ses cours, le téléphone à côté d'elle. Ses résultats sont décevants. Identifiez trois problèmes et proposez une solution pour chacun.

<details><summary>Voir le corrigé</summary>

1) Travail **concentré** sur un seul jour : répartir sur la semaine (régularité, révisions espacées). 2) Méthode **passive** (relecture, surlignage) : remplacer par des questions, exercices et flashcards (récupération active). 3) **Distractions** : cycles Pomodoro avec le téléphone dans une autre pièce.

</details>
`,
    qcm: [
      { q: "Selon la règle simple du cours, une heure de cours appelle environ :", choix: ["10 minutes de travail personnel", "1 heure de travail personnel", "5 heures", "Aucun travail"], bonne: 1, explication: "Davantage pour les matières quantitatives." },
      { q: "Dans la matrice d'Eisenhower, la case la plus rentable est :", choix: ["Urgent et important", "Important non urgent", "Urgent non important", "Ni urgent ni important"], bonne: 1, explication: "Elle évite l'accumulation des urgences." },
      { q: "La technique Pomodoro alterne classiquement :", choix: ["60 min de travail et 30 min de pause", "25 min de travail et 5 min de pause", "10 min et 10 min", "2 h et 1 h"], bonne: 1, explication: "Proposée par Francesco Cirillo." },
      { q: "La méthode de mémorisation la plus efficace parmi celles-ci est :", choix: ["Relire", "Surligner", "Se tester sans notes", "Recopier"], bonne: 2, explication: "Récupération active." },
      { q: "Les révisions espacées consistent à :", choix: ["Tout réviser la veille", "Revoir une notion à intervalles croissants", "Réviser une seule fois", "Réviser en groupe uniquement"], bonne: 1, explication: "J1, J3, J7, J21…" },
      { q: "L'entrelacement consiste à :", choix: ["Réviser une seule matière par semaine", "Mélanger différents types d'exercices", "Travailler la nuit", "Recopier ses fiches"], bonne: 1, explication: "Il entraîne à choisir la bonne méthode." },
      { q: "Une bonne fiche de révision tient idéalement sur :", choix: ["Une page par chapitre", "Dix pages", "Une ligne", "Tout le cours"], bonne: 0, explication: "Définitions, formules, exemple, pièges." },
      { q: "La veille d'un examen, il est conseillé :", choix: ["De faire une nuit blanche", "De réviser légèrement et de bien dormir", "D'apprendre un nouveau chapitre", "De ne rien préparer"], bonne: 1, explication: "Le sommeil consolide la mémoire." },
      { q: "Les annales servent à :", choix: ["Remplacer le cours", "Repérer les questions récurrentes et s'entraîner", "Copier les réponses", "Rien"], bonne: 1, explication: "Entraînement en conditions réelles." },
      { q: "Un planning hebdomadaire réaliste :", choix: ["Remplit 100 % du temps", "Garde des marges pour les imprévus", "Ne contient que des cours", "Change chaque jour sans bilan"], bonne: 1, explication: "Et se termine par un bilan." },
    ],
  },

  4: {
    titre: "Recherche documentaire, sources et plagiat",
    description: "Recherche documentaire : types de sources, mots-clés et opérateurs, fiabilité, citation APA, bibliographie, plagiat, loi 2-00 et usage responsable de l'IA.",
    resume: md`
## L'essentiel — Recherche documentaire et plagiat

- Documents : ouvrages, articles scientifiques, rapports institutionnels (HCP, Bank Al-Maghrib), textes juridiques, presse, thèses, sites ; sources primaires / secondaires.
- Délimiter le sujet ; mots-clés et synonymes (français, anglais).
- Opérateurs : ET, OU, SAUF, guillemets, troncature, filtres.
- Fiabilité : auteur, date, éditeur, sources citées, objectif, recoupement ; remonter à la source officielle.
- Citer : citation directe (guillemets) ou paraphrase, toujours avec la source ; norme APA auteur-date ; bibliographie cohérente.
- **Plagiat** : copier, paraphraser ou traduire sans citer ; sanctions ; loi 2-00 sur les droits d'auteur.
- IA : respecter les consignes, vérifier, ne jamais citer une référence non consultée.
`,
    exercices: md`
### Exercice 2 — Opérateurs

Quel est l'effet de chaque requête ? a) PME ET export ; b) PME OU TPE ; c) marketing SAUF digital ; d) "politique monétaire".

<details><summary>Voir le corrigé</summary>

a) Documents contenant les deux mots : moins de résultats, plus précis. b) Documents contenant l'un ou l'autre : plus de résultats. c) Documents sur le marketing excluant ceux qui parlent de digital. d) Uniquement l'expression exacte.

</details>

### Exercice 3 — Paraphrase ou plagiat ?

Texte source (Alami, 2023) : « Les PME représentent l'essentiel du tissu productif, mais peinent à accéder au financement bancaire. » Trois versions d'étudiants : 1) « Les PME représentent l'essentiel du tissu productif mais peinent à accéder au crédit. » 2) « Selon Alami (2023), si les PME forment la majorité des entreprises, leur accès aux prêts bancaires reste difficile. » 3) « Les PME ont du mal à obtenir des crédits bancaires alors qu'elles sont majoritaires. » Qualifiez.

<details><summary>Voir le corrigé</summary>

1) **Plagiat** : quasi-copie sans guillemets ni source. 2) **Paraphrase correcte** : reformulation et source citée. 3) **Plagiat** par paraphrase non citée : l'idée vient d'Alami, il faut le citer.

</details>
`,
    qcm: [
      { q: "Une source primaire est par exemple :", choix: ["Un manuel de synthèse", "Un texte de loi publié au Bulletin officiel", "Un article de blog", "Un commentaire d'arrêt"], bonne: 1, explication: "Document original." },
      { q: "L'opérateur ET dans une requête :", choix: ["Élargit les résultats", "Restreint les résultats", "Exclut un mot", "Cherche une expression exacte"], bonne: 1, explication: "Les deux termes doivent figurer." },
      { q: "Pour un chiffre de l'inflation au Maroc, la source la plus fiable est :", choix: ["Un réseau social", "Le HCP ou Bank Al-Maghrib", "Un forum", "Une vidéo sans source"], bonne: 1, explication: "Sources officielles." },
      { q: "Une paraphrase :", choix: ["Dispense de citer la source", "Doit aussi citer la source", "Est toujours interdite", "Doit être entre guillemets"], bonne: 1, explication: "L'idée reste celle de l'auteur." },
      { q: "La norme APA est une norme :", choix: ["Auteur-date", "Numérique uniquement", "Juridique", "Comptable"], bonne: 0, explication: "(Nom, année) dans le texte." },
      { q: "Traduire un texte étranger sans le citer est :", choix: ["Autorisé", "Du plagiat", "Une paraphrase correcte", "Obligatoire"], bonne: 1, explication: "L'origine doit être indiquée." },
      { q: "Au Maroc, les droits d'auteur sont protégés par la loi :", choix: ["2-00", "9-88", "15-95", "65-99"], bonne: 0, explication: "Droits d'auteur et droits voisins." },
      { q: "Les guillemets dans une requête servent à :", choix: ["Exclure un mot", "Chercher une expression exacte", "Élargir la recherche", "Filtrer par date"], bonne: 1, explication: "Ex. : \"taux directeur\"." },
      { q: "Face à une référence proposée par un outil d'IA, il faut :", choix: ["La citer directement", "Vérifier qu'elle existe et la consulter", "L'ignorer toujours", "La modifier"], bonne: 1, explication: "Les IA peuvent inventer des références." },
      { q: "Le critère « date » est essentiel surtout pour :", choix: ["Les œuvres littéraires", "Les chiffres et les lois", "Les dictionnaires", "Les romans"], bonne: 1, explication: "Ils évoluent vite." },
    ],
  },

  5: {
    titre: "Les écrits universitaires",
    description: "Écrits universitaires : analyse du sujet, problématique, plans dialectique et analytique, introduction, conclusion, résumé, note de synthèse et commentaire.",
    resume: md`
## L'essentiel — Les écrits universitaires

- Exercices : dissertation, commentaire, résumé, compte rendu, note de synthèse, cas pratique, rapport.
- Analyse du sujet : mots-clés définis, délimitation, forme de la question, remue-méninges.
- **Problématique** : question précise qui révèle une tension.
- Plans : dialectique (oui / mais), analytique (constat, causes, conséquences, solutions), thématique, comparatif ; parties équilibrées.
- Paragraphe : idée, explication, exemple, mini-conclusion.
- **Introduction** : accroche, définitions, problématique, annonce du plan ; **conclusion** : réponse + ouverture ; transitions.
- Résumé : ordre et point de vue de l'auteur, rien ajouté, nombre de mots ; synthèse : plan thématique, objectivité, documents cités.
`,
    exercices: md`
### Exercice 2 — Choisir le plan

Quel type de plan convient ? a) « Faut-il augmenter le salaire minimum ? » ; b) « Le chômage des jeunes diplômés au Maroc » ; c) « Comparez la SARL et la SA » ; d) « Les enjeux de l'eau pour l'économie marocaine ».

<details><summary>Voir le corrigé</summary>

a) Dialectique (débat). b) Analytique (constat et causes, conséquences, solutions). c) Comparatif (points communs, différences). d) Thématique (enjeux agricoles, industriels, sociaux) ou analytique.

</details>

### Exercice 3 — Corriger une introduction

« Dans cette dissertation nous allons parler de l'inflation. L'inflation c'est quand les prix augmentent. Il y a beaucoup de choses à dire. » Identifiez les défauts et réécrivez.

<details><summary>Voir le corrigé</summary>

Défauts : pas d'accroche, définition imprécise, pas de problématique, pas d'annonce de plan, style oral. Réécriture : « En quelques mois, la hausse des prix alimentaires et de l'énergie a pesé sur le budget des ménages. L'inflation, hausse générale et durable du niveau des prix, n'est pourtant pas toujours néfaste. Faut-il donc la combattre à tout prix ? Nous verrons ses coûts pour les ménages et les entreprises (I), avant d'examiner les limites des politiques qui cherchent à la réduire (II). »

</details>
`,
    qcm: [
      { q: "La première étape face à un sujet de dissertation est :", choix: ["Rédiger directement", "Analyser et définir les mots-clés", "Écrire la conclusion", "Recopier le cours"], bonne: 1, explication: "Pour éviter le hors-sujet." },
      { q: "Un plan dialectique convient surtout à un sujet :", choix: ["Descriptif", "De débat (« faut-il… »)", "De calcul", "De comparaison"], bonne: 1, explication: "Thèse, antithèse, éventuel dépassement." },
      { q: "L'introduction comprend notamment :", choix: ["La conclusion", "Accroche, définitions, problématique, annonce du plan", "Uniquement une citation", "Les exemples détaillés"], bonne: 1, explication: "Environ 10 % du devoir." },
      { q: "La problématique est :", choix: ["Le titre du sujet recopié", "La question centrale qui révèle une tension", "Une liste d'idées", "La bibliographie"], bonne: 1, explication: "Fil conducteur du devoir." },
      { q: "Dans un résumé, il faut :", choix: ["Donner son avis", "Respecter l'ordre des idées de l'auteur", "Ajouter des exemples", "Recopier des phrases"], bonne: 1, explication: "Fidélité au texte." },
      { q: "La note de synthèse doit être :", choix: ["Personnelle et engagée", "Objective et organisée par thèmes", "Un résumé de chaque document l'un après l'autre", "Sans référence aux documents"], bonne: 1, explication: "Elle croise les documents." },
      { q: "Une conclusion comporte :", choix: ["Un nouveau développement", "Une réponse à la problématique et une ouverture", "L'annonce du plan", "Les définitions"], bonne: 1, explication: "L'ouverture doit rester liée au sujet." },
      { q: "Un paragraphe argumentatif suit le schéma :", choix: ["Exemple seul", "Idée, explication, exemple, mini-conclusion", "Question, question, question", "Citation, citation"], bonne: 1, explication: "Structure claire." },
      { q: "Les transitions servent à :", choix: ["Allonger la copie", "Montrer le fil du raisonnement entre les parties", "Remplacer la conclusion", "Poser des questions au correcteur"], bonne: 1, explication: "Bilan de la partie et annonce de la suivante." },
      { q: "Le temps de relecture conseillé pour une épreuve de 2 heures est d'environ :", choix: ["0 minute", "10 minutes", "1 heure", "2 minutes"], bonne: 1, explication: "Orthographe, chiffres, cohérence." },
    ],
  },

  6: {
    titre: "Le français de spécialité",
    description: "Français de spécialité : registre universitaire, connecteurs logiques, vocabulaire économique, erreurs fréquentes, courriel et lettre formels, exercices.",
    resume: md`
## L'essentiel — Le français de spécialité

- Registre soutenu : précis, impersonnel, vocabulaire technique, chiffres avec unités.
- **Connecteurs** : addition, cause, conséquence, opposition, concession (bien que + subjonctif), illustration, but, conclusion.
- Vocabulaire : PIB, croissance, inflation, pouvoir d'achat, chômage, balance commerciale, déficit, taux directeur, investissement, valeur ajoutée ; verbes d'évolution.
- Nominalisation : « les prix augmentent » → « l'augmentation des prix ».
- Erreurs : a/à, ces/ses, ce/se, ou/où, accord du participe passé avec avoir, « malgré que », « pallier à », pléonasmes, anglicismes.
- Courriel formel : objet précis, formule d'appel, présentation, demande claire, formule de politesse, signature complète.
`,
    exercices: md`
### Exercice 2 — Faits ou opinions ?

Classez : 1) « Le taux de chômage s'établit à 13 % selon l'enquête nationale. » 2) « Cette politique est une erreur. » 3) « Les exportations ont progressé de 8 % en un an. » 4) « Il faudrait baisser les impôts. »

<details><summary>Voir le corrigé</summary>

Faits (vérifiables, chiffrés, sourcés) : 1 et 3. Opinions (jugements, recommandations) : 2 et 4. Dans une synthèse, les opinions doivent être attribuées à leur auteur (« selon l'auteur… »).

</details>

### Exercice 3 — Registre

Réécrivez en registre soutenu : « Franchement, les boîtes galèrent parce que les banques veulent pas leur filer du fric. »

<details><summary>Voir le corrigé</summary>

« Les entreprises rencontrent des difficultés, car les banques se montrent réticentes à leur accorder des crédits. » Ou, avec une nominalisation : « Les difficultés des entreprises s'expliquent par la réticence des banques à leur accorder des financements. »

</details>
`,
    qcm: [
      { q: "Quel connecteur exprime la concession ?", choix: ["Donc", "Bien que", "Par exemple", "En outre"], bonne: 1, explication: "Suivi du subjonctif." },
      { q: "Quel connecteur exprime la conséquence ?", choix: ["Car", "Par conséquent", "Cependant", "Notamment"], bonne: 1, explication: "Relation de cause à effet." },
      { q: "La forme correcte est :", choix: ["Les décisions qu'il a pris", "Les décisions qu'il a prises", "Les décisions qu'il a prisent", "Les décisions qu'il a prise"], bonne: 1, explication: "Accord avec le COD placé avant." },
      { q: "La forme correcte est :", choix: ["Pallier à un manque", "Pallier un manque", "Palier à un manque", "Pallier de un manque"], bonne: 1, explication: "Pallier est transitif direct." },
      { q: "Le PIB mesure :", choix: ["Les prix", "La valeur de la production sur le territoire", "Le chômage", "Les exportations seules"], bonne: 1, explication: "Sur une année." },
      { q: "La nominalisation de « l'État intervient » est :", choix: ["L'État intervenant", "L'intervention de l'État", "L'État a intervenu", "Intervenir l'État"], bonne: 1, explication: "Style plus dense." },
      { q: "« Au jour d'aujourd'hui » est :", choix: ["Correct et soutenu", "Un pléonasme à éviter", "Un anglicisme", "Une expression juridique"], bonne: 1, explication: "Dire « aujourd'hui »." },
      { q: "Dans un courriel formel à un professeur, on évite :", choix: ["L'objet précis", "Le tutoiement et les émoticônes", "La formule de politesse", "La signature"], bonne: 1, explication: "Registre soutenu." },
      { q: "« Ces » est :", choix: ["Un possessif", "Un démonstratif", "Un verbe", "Une préposition"], bonne: 1, explication: "« Ses » est possessif." },
      { q: "Le taux directeur est :", choix: ["Le taux de chômage", "Le taux auquel la banque centrale prête aux banques", "Le taux de TVA", "Le taux de croissance"], bonne: 1, explication: "Instrument de politique monétaire." },
    ],
  },

  7: {
    titre: "L'anglais des affaires (Business English)",
    description: "Business English : vocabulaire des affaires, temps utiles, décrire une tendance et un graphique, courriel professionnel, faux amis et lecture rapide.",
    resume: md`
## L'essentiel — Business English

- Vocabulaire : company, subsidiary, shareholder, revenue, profit, loss, loan, market share, to hire, training, GDP, unemployment rate.
- Temps : present simple (faits), present continuous (en cours), past simple (date précise), present perfect (période non terminée), passive voice.
- Tendances : rise, increase, grow, soar / fall, decrease, decline, plummet / level off, peak, fluctuate ; adverbes slightly, steadily, sharply.
- Prépositions : increase **by** 20% (ampleur), **from** 100 **to** 120 (niveaux), stable **at** 50.
- Courriel : subject, Dear…, I am writing to…, Please find attached…, I look forward to hearing from you, Kind regards.
- Faux amis : actually (en fait), eventually (finalement), library (bibliothèque), benefit (avantage), training (formation).
- Lecture : skimming (idée générale), scanning (information précise).
`,
    exercices: md`
### Exercice 2 — Choose the right preposition

Complete: a) Unemployment fell ___ 2 points. b) Prices rose ___ 40 ___ 44 dirhams. c) The rate remained stable ___ 3%. d) There was an increase ___ 10%.

<details><summary>Voir le corrigé</summary>

a) **by** ; b) **from** … **to** ; c) **at** ; d) **of**.

</details>

### Exercice 3 — Tenses

Put the verbs in the correct tense: a) Our company (export) to Spain every year. b) Sales (rise) by 8% last year. c) Since 2020, the firm (open) three new branches. d) At the moment, we (recruit) new staff.

<details><summary>Voir le corrigé</summary>

a) **exports** (present simple, habitude). b) **rose** (past simple, date précise). c) **has opened** (present perfect, depuis 2020). d) **are recruiting** (present continuous, action en cours).

</details>
`,
    qcm: [
      { q: "« Chiffre d'affaires » se traduit par :", choix: ["Benefit", "Revenue (turnover)", "Cash", "Business number"], bonne: 1, explication: "Turnover en anglais britannique." },
      { q: "« Filiale » se dit :", choix: ["Branch", "Subsidiary", "Headquarters", "Factory"], bonne: 1, explication: "Branch = succursale." },
      { q: "« Actually » signifie :", choix: ["Actuellement", "En fait", "Éventuellement", "Finalement"], bonne: 1, explication: "Actuellement = currently." },
      { q: "Pour indiquer l'ampleur d'une hausse, on utilise :", choix: ["To", "By", "At", "In"], bonne: 1, explication: "Increased by 20%." },
      { q: "« To plummet » signifie :", choix: ["Augmenter fortement", "Chuter fortement", "Se stabiliser", "Fluctuer"], bonne: 1, explication: "Baisse brutale." },
      { q: "« Sales have increased since 2020 » utilise :", choix: ["Le past simple", "Le present perfect", "Le futur", "Le present continuous"], bonne: 1, explication: "Période non terminée." },
      { q: "Une formule de clôture courante dans un courriel professionnel est :", choix: ["See you!", "Kind regards", "Bye", "Cheers mate"], bonne: 1, explication: "Registre professionnel." },
      { q: "Le skimming consiste à :", choix: ["Chercher un chiffre précis", "Survoler un texte pour l'idée générale", "Traduire mot à mot", "Apprendre par cœur"], bonne: 1, explication: "Le scanning cherche une information précise." },
      { q: "« Formation professionnelle » se traduit par :", choix: ["Formation", "Training", "Education only", "Form"], bonne: 1, explication: "Faux ami." },
      { q: "« To level off » signifie :", choix: ["Se stabiliser", "Monter", "Descendre fortement", "Licencier"], bonne: 0, explication: "Après une hausse ou une baisse." },
    ],
  },

  8: {
    titre: "Communication orale, travail en équipe et employabilité",
    description: "Communication orale et employabilité : préparer un exposé, gérer le trac, travail en équipe, CV, lettre de motivation, entretien STAR et stage, avec exercices.",
    resume: md`
## L'essentiel — Oral, équipe, employabilité

- Exposé : consigne, message central, plan annoncé, support sobre (une idée par diapositive), répétitions chronométrées.
- Présentation : voix lente, regard vers toute la salle, posture, respect du temps ; trac géré par préparation et respiration ; questions : écouter, reformuler, répondre brièvement.
- Équipe : étapes de **Tuckman** (formation, tension, normalisation, performance) ; objectif, rôles, planning, document partagé ; désaccord : parler des faits.
- Employabilité : stages, projets, langues, numérique, réseau ; ANAPEC, services d'orientation.
- CV d'une page, sans faute, adapté à l'offre ; lettre « vous – moi – nous ».
- Entretien : méthode **STAR** (situation, tâche, action, résultat) ; convention et rapport de stage.
`,
    exercices: md`
### Exercice 2 — Corriger une diapositive

Une diapositive contient un paragraphe de 12 lignes, en police 14, sans titre, avec trois graphiques non sourcés. Proposez cinq améliorations.

<details><summary>Voir le corrigé</summary>

1) Ajouter un **titre** explicite. 2) Remplacer le paragraphe par trois ou quatre **mots-clés**. 3) Augmenter la **taille** de police (au moins 24). 4) Garder **un seul** graphique, le plus parlant, et répartir les autres sur d'autres diapositives. 5) Indiquer la **source** de chaque graphique.

</details>

### Exercice 3 — Améliorer un CV

Un CV comporte : l'adresse « bogoss2007@… », une rubrique « Loisirs : dormir, sortir », des expériences sans dates, et deux pages avec une photo de vacances. Corrigez.

<details><summary>Voir le corrigé</summary>

Adresse professionnelle (prénom.nom) ; activités valorisantes et vraies (sport en club, bénévolat, lecture de presse économique) ; dates et missions précises avec verbes d'action pour chaque expérience ; réduire à **une page** ; retirer la photo ou utiliser une photo sobre si l'entreprise la demande.

</details>
`,
    qcm: [
      { q: "La première étape de la préparation d'un exposé est :", choix: ["Faire les diapositives", "Analyser la consigne et définir le message central", "Choisir les couleurs", "Apprendre par cœur"], bonne: 1, explication: "Tout découle du message." },
      { q: "Une bonne diapositive contient :", choix: ["Un long paragraphe", "Une idée, un titre et des mots-clés", "Le texte que l'on va lire", "Dix graphiques"], bonne: 1, explication: "Le support aide, il ne remplace pas l'orateur." },
      { q: "Selon Tuckman, l'étape où les désaccords apparaissent est :", choix: ["La formation", "La tension", "La normalisation", "La performance"], bonne: 1, explication: "Étape normale de la vie d'un groupe." },
      { q: "Face à un membre inactif, il faut d'abord :", choix: ["Le dénoncer publiquement", "Lui parler des faits et chercher une solution", "Faire son travail sans rien dire", "Abandonner l'exposé"], bonne: 1, explication: "Puis informer l'enseignant si nécessaire." },
      { q: "La méthode STAR signifie :", choix: ["Style, Ton, Accent, Rythme", "Situation, Tâche, Action, Résultat", "Stage, Travail, Avenir, Réussite", "Sujet, Thèse, Argument, Réponse"], bonne: 1, explication: "Structure des réponses d'entretien." },
      { q: "Un CV d'étudiant tient idéalement sur :", choix: ["Une page", "Trois pages", "Une demi-ligne", "Cinq pages"], bonne: 0, explication: "Clair et sans faute." },
      { q: "La structure classique d'une lettre de motivation est :", choix: ["Moi – moi – moi", "Vous – moi – nous", "Nous – vous – eux", "Introduction – conclusion"], bonne: 1, explication: "Entreprise, candidat, projet commun." },
      { q: "Pendant un exposé, le regard doit :", choix: ["Fixer l'écran", "Balayer toute la salle", "Rester sur les notes", "Fixer uniquement l'enseignant"], bonne: 1, explication: "Pour impliquer le public." },
      { q: "Le stage est encadré par :", choix: ["Un simple accord oral", "Une convention de stage", "Un contrat de vente", "Aucun document"], bonne: 1, explication: "Signée par l'université, l'entreprise et l'étudiant." },
      { q: "À une question dont on ignore la réponse, il vaut mieux :", choix: ["Inventer", "Le reconnaître et proposer une piste", "Ignorer la question", "Changer de sujet"], bonne: 1, explication: "Honnêteté et réflexion." },
    ],
  },
};

export default chapitres;
