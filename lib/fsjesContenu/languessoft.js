// Langues Étrangères & Soft Skills / MTU (S1) — compléments par chapitre.
const md = String.raw;

export default {
  1: {
    titre: "Langues et soft skills au S1 : de quoi parle-t-on ?",
    resume: md`
## L'essentiel — Langues et soft skills au S1

- Deux modules **transversaux** : les **langues étrangères** (français, anglais) et les **soft skills** / méthodologie du travail universitaire (MTU).
- Ils existent pour réussir la transition lycée → université : autonomie, prise de notes, écrits longs, oral, travail en groupe.
- Leur contenu **varie selon la faculté** : toujours vérifier le syllabus de son établissement.
- Ils pèsent plus qu'on ne le croit : ils comptent dans la moyenne du semestre et conditionnent la réussite dans **tous** les autres modules (copies, exposés, rapports).
- Compétences visées : s'organiser, apprendre, rechercher et citer, rédiger, parler en public, travailler en équipe, préparer son insertion professionnelle.
`,
    exercices: md`
### Exercice 2 — Faire son autodiagnostic

1. Pour chacune des compétences suivantes, donnez-vous une note de 1 (faible) à 4 (très bon) : prise de notes, organisation du temps, recherche documentaire, rédaction, français écrit, anglais, oral, travail en groupe.
2. Choisissez vos **deux** compétences les plus faibles et fixez pour chacune un objectif **SMART** pour ce semestre.

<details><summary>Voir le corrigé</summary>

**1)** Il n'y a pas de bonne réponse : l'important est d'être honnête.

**2)** Exemples d'objectifs SMART :

- « Relire et compléter mes notes de chaque cours dans les 24 heures, pour les 6 modules, jusqu'aux examens de janvier. »
- « Lire un article économique en anglais par semaine et noter 10 mots nouveaux, jusqu'à la fin du semestre. »

Un objectif comme « m'améliorer en anglais » n'est pas SMART : il n'est ni mesurable ni daté.

</details>
`,
    qcm: [
      { q: "Les modules de langues et soft skills au S1 sont :", choix: ["Facultatifs et sans note", "Des modules transversaux comptant dans la moyenne", "Réservés aux étudiants étrangers", "Identiques dans toutes les facultés"], bonne: 1, explication: "Leur contenu varie selon l'établissement." },
      { q: "MTU signifie :", choix: ["Module de techniques universelles", "Méthodologie du travail universitaire", "Marketing et techniques d'usine", "Master de tronc unique"], bonne: 1, explication: "Organisation, prise de notes, écrits…" },
      { q: "Pour connaître le contenu exact de ces modules, il faut consulter :", choix: ["Un site étranger", "Le syllabus de sa faculté", "Le bac", "Le code du travail"], bonne: 1, explication: "Chaque faculté fixe son programme." },
      { q: "Ces compétences servent surtout :", choix: ["Uniquement en langues", "Dans tous les modules et dans la vie professionnelle", "Seulement au S1", "Seulement à l'oral"], bonne: 1, explication: "Elles sont transversales." },
      { q: "Un objectif SMART est :", choix: ["Vague et ambitieux", "Spécifique, mesurable, atteignable, réaliste et daté", "Fixé par le professeur", "Toujours en anglais"], bonne: 1, explication: "C'est ce qui le rend vérifiable." },
    ],
  },

  2: {
    titre: "La prise de notes et l'écoute active en amphi",
    resume: md`
## L'essentiel — Prendre des notes

- Noter n'est pas **transcrire** : on sélectionne, on reformule, on structure.
- Priorités : le **plan** et les titres, les **définitions**, les **formules**, les exemples-clés, ce que l'enseignant répète ou souligne.
- **Abréviations** et symboles (→, =, ≠, ↑, ↓, cf., qqch, ex.) pour gagner du temps.
- **Méthode Cornell** : une colonne de mots-clés et questions, une zone de notes, un résumé en bas de page.
- Le geste décisif : la **relecture dans les 24 heures** pour compléter, corriger et fixer la mémoire.
`,
    exercices: md`
### Exercice 2 — Transformer une phrase en notes

1. Réduisez en notes, avec abréviations et symboles : « La valeur ajoutée est égale à la production de l'exercice diminuée des consommations intermédiaires ; lorsque les consommations augmentent plus vite que la production, la valeur ajoutée diminue, ce qui réduit la richesse que l'entreprise peut répartir entre ses parties prenantes. »
2. Présentez cette notion selon la méthode Cornell (mots-clés, notes, résumé).

<details><summary>Voir le corrigé</summary>

**1)** Exemple : « VA = prod° exercice − CI. Si CI ↑ + vite que prod° → VA ↓ → – de richesse à répartir (salariés, État, prêteurs, entreprise, associés). »

**2)**

| Mots-clés / questions | Notes |
|---|---|
| Définition de la VA ? | VA = prod° − CI |
| Quand la VA baisse-t-elle ? | CI ↑ plus vite que prod° |
| Conséquence ? | – de richesse à partager entre parties prenantes |

**Résumé** : la VA mesure la richesse créée ; elle baisse quand les consommations intermédiaires progressent plus vite que la production.

</details>
`,
    qcm: [
      { q: "Prendre des notes efficacement, c'est :", choix: ["Tout écrire mot à mot", "Sélectionner, reformuler et structurer", "Ne rien écrire", "Recopier les diapositives"], bonne: 1, explication: "Noter n'est pas transcrire." },
      { q: "Dans la méthode Cornell, le résumé se place :", choix: ["En haut de page", "Dans la colonne de gauche", "En bas de page", "Sur une autre feuille"], bonne: 2, explication: "Colonne de mots-clés, zone de notes, résumé." },
      { q: "Le symbole « ↑ » signifie généralement :", choix: ["Diminution", "Augmentation", "Égalité", "Conséquence"], bonne: 1, explication: "« → » indique plutôt une conséquence." },
      { q: "La relecture de ses notes est la plus efficace :", choix: ["La veille de l'examen seulement", "Dans les 24 heures suivant le cours", "Un mois après", "Jamais"], bonne: 1, explication: "Elle fixe la mémoire et permet de compléter." },
      { q: "Il faut noter en priorité :", choix: ["Les anecdotes", "Le plan, les définitions et les formules", "Les questions des autres étudiants", "L'heure du cours"], bonne: 1, explication: "C'est ce qui structure la révision." },
    ],
  },

  3: {
    titre: "Organiser son semestre : la méthodologie de travail",
    resume: md`
## L'essentiel — S'organiser

- Connaître le **calendrier universitaire** : cours, contrôles, sessions normale et de rattrapage.
- **Planning hebdomadaire** : cours, révisions régulières par module, temps de repos.
- Mémorisation efficace : **répétition espacée**, **auto-interrogation** (se tester plutôt que relire), fiches synthétiques, explication à un camarade.
- **Matrice d'Eisenhower** : urgent / important → 1) urgent et important : faire ; 2) important non urgent : planifier ; 3) urgent non important : déléguer ou réduire ; 4) ni l'un ni l'autre : éliminer.
- Travailler un peu **chaque jour** vaut mieux que tout réviser la dernière semaine.
`,
    exercices: md`
### Exercice 2 — La matrice d'Eisenhower

Classez ces tâches d'un étudiant dans la matrice d'Eisenhower et dites quoi en faire :

a) rendre demain un devoir de comptabilité noté ; b) réviser régulièrement les statistiques pour l'examen dans 6 semaines ; c) répondre à un message de groupe sur une sortie ; d) regarder des vidéos sans but ; e) déposer aujourd'hui un dossier de bourse dont c'est la date limite ; f) commencer un projet d'exposé prévu dans un mois.

<details><summary>Voir le corrigé</summary>

| | Urgent | Non urgent |
|---|---|---|
| **Important** | a), e) → **faire tout de suite** | b), f) → **planifier** dans l'agenda |
| **Non important** | c) → **réduire / plus tard** | d) → **éliminer** |

L'essentiel de la réussite se joue dans la case « important, non urgent » : les révisions régulières et les projets anticipés.

</details>
`,
    qcm: [
      { q: "Selon la matrice d'Eisenhower, une tâche importante mais non urgente doit être :", choix: ["Faite immédiatement", "Planifiée", "Éliminée", "Déléguée"], bonne: 1, explication: "C'est la case la plus stratégique." },
      { q: "La technique de mémorisation la plus efficace est souvent :", choix: ["La relecture passive", "L'auto-interrogation et la répétition espacée", "Le surlignage de tout le cours", "Réviser uniquement la veille"], bonne: 1, explication: "Se tester renforce la mémoire." },
      { q: "Une tâche ni urgente ni importante doit être :", choix: ["Faite en premier", "Éliminée ou réduite", "Planifiée", "Confiée au professeur"], bonne: 1, explication: "Elle fait perdre du temps." },
      { q: "Réviser un peu chaque jour plutôt que tout à la fin permet :", choix: ["De mieux retenir", "D'oublier plus vite", "De ne pas aller en cours", "D'éviter les examens"], bonne: 0, explication: "Principe de la répétition espacée." },
      { q: "La session de rattrapage :", choix: ["N'existe pas à l'université", "Permet de repasser les modules non validés", "Remplace les cours", "Est réservée aux excellents étudiants"], bonne: 1, explication: "Il faut en connaître les dates." },
    ],
  },

  4: {
    titre: "Recherche documentaire, sources et plagiat",
    resume: md`
## L'essentiel — Sources et plagiat

- Hiérarchiser les sources : textes officiels et données publiques (HCP, Bank Al-Maghrib, BO), ouvrages et articles scientifiques, presse spécialisée, puis sites grand public.
- Évaluer une source en 5 questions : **qui** écrit ? **quand** ? **où** est-ce publié ? **pourquoi** ? **les sources** sont-elles citées ?
- **Citer** : guillemets pour une citation exacte, référence complète (auteur, titre, éditeur ou site, année, lien et date de consultation).
- **Plagiat** : reprendre les idées ou les phrases d'autrui sans les citer, y compris en reformulant ou en traduisant ; sanctions académiques possibles.
- Paraphraser ne dispense pas de citer la source.
`,
    exercices: md`
### Exercice 2 — Évaluer, citer et éviter le plagiat

1. Classez de la plus fiable à la moins fiable, pour un exposé sur l'inflation au Maroc : a) un post anonyme sur un réseau social ; b) une note du HCP sur l'indice des prix ; c) un article de presse économique ; d) un article scientifique publié dans une revue universitaire.
2. Un étudiant copie trois paragraphes d'un site, change quelques mots et ne mentionne pas la source. Est-ce du plagiat ? Comment aurait-il dû faire ?

<details><summary>Voir le corrigé</summary>

**1)** b) note du HCP (source officielle) ≈ d) article scientifique > c) presse économique > a) post anonyme (auteur inconnu, aucune source).

**2)** **Oui** : changer quelques mots ne suffit pas, les idées appartiennent à l'auteur. Il fallait soit citer entre guillemets les passages exacts avec la référence, soit reformuler réellement avec ses propres mots **et** indiquer la source (auteur, titre, site, date de consultation).

</details>
`,
    qcm: [
      { q: "Une source fiable pour des statistiques officielles marocaines est :", choix: ["Un forum anonyme", "Le HCP", "Une publicité", "Un blog personnel sans sources"], bonne: 1, explication: "Haut-Commissariat au Plan." },
      { q: "Reformuler le texte d'un auteur sans le citer, c'est :", choix: ["Autorisé", "Du plagiat", "Une citation", "Une synthèse personnelle"], bonne: 1, explication: "Les idées doivent être attribuées." },
      { q: "Une citation exacte se place :", choix: ["Entre guillemets avec sa référence", "En gras sans référence", "Dans la conclusion uniquement", "Sans guillemets"], bonne: 0, explication: "Pour distinguer sa pensée de celle de l'auteur." },
      { q: "Pour une source en ligne, la référence comprend aussi :", choix: ["La couleur du site", "Le lien et la date de consultation", "Le nombre de visiteurs", "L'adresse de l'hébergeur"], bonne: 1, explication: "Un site peut évoluer." },
      { q: "La première question pour évaluer une source est :", choix: ["Est-elle longue ?", "Qui en est l'auteur ?", "Est-elle en couleur ?", "Est-elle gratuite ?"], bonne: 1, explication: "Qui, quand, où, pourquoi, avec quelles sources." },
    ],
  },

  5: {
    titre: "Les écrits universitaires",
    resume: md`
## L'essentiel — Les écrits universitaires

- Identifier le type d'exercice : **question de cours**, **dissertation**, **commentaire**, **cas pratique**, **synthèse**.
- Structure universelle : **introduction** (accroche, définitions, problématique, annonce du plan) → **développement** (parties équilibrées) → **conclusion** (réponse à la problématique, ouverture).
- Plans types : **thématique**, **dialectique** (thèse / antithèse / synthèse), **analytique** (causes / conséquences / solutions), **chronologique**.
- Cas pratique : faits → problème → règle → application → solution.
- Gestion du temps : environ 20 % pour analyser et construire le plan, 70 % pour rédiger, 10 % pour relire.
`,
    exercices: md`
### Exercice 2 — Construire une introduction et un plan

Sujet : « Le salaire suffit-il à motiver les salariés ? »

1. Proposez une problématique.
2. Proposez un plan en deux parties avec deux sous-parties chacune.
3. Pour une épreuve de 2 heures, répartissez votre temps.

<details><summary>Voir le corrigé</summary>

**1)** « Dans quelle mesure la rémunération, levier traditionnel de motivation, doit-elle être complétée par d'autres facteurs pour mobiliser durablement les salariés ? »

**2)** Plan dialectique :

- **I. Le salaire, un levier réel de motivation** : A. L'approche classique (Taylor, salaire au rendement) ; B. La rémunération comme reconnaissance et condition de sécurité (Maslow).
- **II. Un levier insuffisant à lui seul** : A. Le salaire, simple facteur d'hygiène (Herzberg) ; B. Le rôle de la reconnaissance, de l'autonomie et du sens (relations humaines, théorie Y).

**3)** Environ 25 minutes d'analyse et de plan au brouillon, 85 minutes de rédaction, 10 minutes de relecture.

</details>
`,
    qcm: [
      { q: "La problématique se place :", choix: ["Dans la conclusion", "Dans l'introduction", "Au milieu du développement", "Nulle part"], bonne: 1, explication: "Elle guide tout le devoir." },
      { q: "Un plan thèse / antithèse / synthèse est un plan :", choix: ["Thématique", "Dialectique", "Chronologique", "Comptable"], bonne: 1, explication: "Il confronte des points de vue." },
      { q: "La conclusion doit :", choix: ["Introduire un nouveau sujet", "Répondre à la problématique et ouvrir", "Recopier l'introduction", "Être la partie la plus longue"], bonne: 1, explication: "Elle fait le bilan de la réflexion." },
      { q: "Un plan causes / conséquences / solutions est un plan :", choix: ["Analytique", "Dialectique", "Chronologique", "Comparatif"], bonne: 0, explication: "Adapté aux sujets de type problème." },
      { q: "Dans une épreuve écrite, la relecture sert surtout à :", choix: ["Changer tout le plan", "Corriger l'orthographe et les oublis", "Recommencer la copie", "Allonger le texte"], bonne: 1, explication: "Quelques minutes suffisent et rapportent des points." },
    ],
  },

  6: {
    titre: "Le français de spécialité",
    resume: md`
## L'essentiel — Le français de spécialité

- Les **connecteurs logiques** structurent la copie : addition (de plus, en outre), opposition (cependant, en revanche), cause (car, en effet), conséquence (donc, par conséquent), illustration (par exemple), conclusion (ainsi, en définitive).
- Maîtriser le **vocabulaire** économique et de gestion : croissance, inflation, rentabilité, solvabilité, charge / produit, bénéfice / chiffre d'affaires…
- Erreurs fréquentes : accords, confusion a / à, ou / où, ces / ses, « malgré que », anglicismes, phrases trop longues.
- Règles payantes : une idée par paragraphe, des phrases courtes, un vocabulaire précis, une relecture ciblée.
`,
    exercices: md`
### Exercice 2 — Connecteurs et correction

1. Complétez avec un connecteur adapté : a) « Les ventes ont augmenté ; ……, le résultat a diminué à cause de la hausse des coûts. » b) « L'entreprise a investi dans la formation ; ……, la productivité a progressé. » c) « Ce marché est attractif. ……, la concurrence y est forte. »
2. Corrigez : a) « Malgré que la demande a baissé, l'entreprise a augmenter ses prix. » b) « Le chiffre d'affaire de ces entreprise ont progressé. » c) « Le bénéfice c'est le chiffre d'affaires. »

<details><summary>Voir le corrigé</summary>

**1)** a) **cependant / pourtant** ; b) **par conséquent / ainsi** ; c) **Toutefois / En revanche**.

**2)** a) « **Bien que** la demande **ait** baissé, l'entreprise a **augmenté** ses prix. » b) « Le chiffre **d'affaires** de ces **entreprises a** progressé. » c) « Le bénéfice **n'est pas** le chiffre d'affaires : c'est la différence entre les produits et les charges. »

</details>
`,
    qcm: [
      { q: "Le connecteur « en revanche » exprime :", choix: ["La cause", "L'opposition", "La conséquence", "L'addition"], bonne: 1, explication: "Il introduit un contraste." },
      { q: "« Par conséquent » introduit :", choix: ["Une cause", "Une conséquence", "Une illustration", "Une concession"], bonne: 1, explication: "Synonymes : donc, ainsi." },
      { q: "La forme correcte est :", choix: ["Malgré que la demande a baissé", "Bien que la demande ait baissé", "Malgré que la demande ait baissé", "Bien que la demande a baissé"], bonne: 1, explication: "« Bien que » + subjonctif." },
      { q: "On écrit :", choix: ["Chiffre d'affaire", "Chiffre d'affaires", "Chiffres d'affaire", "Chiffre des affaire"], bonne: 1, explication: "« Affaires » est toujours au pluriel." },
      { q: "Une bonne règle de rédaction est :", choix: ["Plusieurs idées par phrase", "Une idée par paragraphe", "Des phrases très longues", "Aucun connecteur"], bonne: 1, explication: "La copie devient lisible." },
    ],
  },

  7: {
    titre: "L'anglais des affaires (Business English)",
    resume: md`
## L'essentiel — Business English

- Vocabulaire de base : *revenue / turnover* (chiffre d'affaires), *profit*, *loss*, *growth*, *market share*, *supplier*, *customer*, *invoice*, *shareholder*, *balance sheet*, *income statement*.
- Structures utiles : décrire une tendance (*to increase / rise*, *to decrease / fall*, *sharply*, *slightly*), comparer (*higher than*), exprimer la cause et la conséquence (*due to*, *therefore*).
- **E-mail professionnel** : objet clair, formule d'appel (*Dear Mr / Ms …*), objet du message, demande ou action, formule de clôture (*Kind regards*), signature.
- Lire un texte économique : survol (titres, chiffres), repérage des mots-clés, lecture détaillée des passages utiles.
- Faux amis : *actually* (en fait), *eventually* (finalement), *library* (bibliothèque).
`,
    exercices: md`
### Exercice 2 — Tendances et e-mail

1. Traduisez : a) « Le chiffre d'affaires a fortement augmenté en 2025. » b) « Les bénéfices ont légèrement baissé à cause de la hausse des coûts. » c) « Notre part de marché est plus élevée que celle de nos concurrents. »
2. Rédigez un court e-mail en anglais à un fournisseur, Mr Smith, pour lui demander un devis pour 500 unités livrables avant le 15 mars.

<details><summary>Voir le corrigé</summary>

**1)** a) *Revenue increased sharply in 2025.* b) *Profits fell slightly due to rising costs.* c) *Our market share is higher than our competitors'.*

**2)** Exemple :

> **Subject:** Quotation request – 500 units
>
> Dear Mr Smith,
>
> I am writing to request a quotation for 500 units of your product, to be delivered before 15 March. Could you please also confirm your payment terms and delivery costs?
>
> I look forward to hearing from you.
>
> Kind regards,
> Salma Idrissi, Purchasing Department

</details>
`,
    qcm: [
      { q: "« Chiffre d'affaires » se traduit par :", choix: ["Business figure", "Revenue / turnover", "Profit", "Cash"], bonne: 1, explication: "Profit = bénéfice." },
      { q: "« To decrease sharply » signifie :", choix: ["Augmenter légèrement", "Baisser fortement", "Rester stable", "Doubler"], bonne: 1, explication: "Sharply = fortement." },
      { q: "Une formule de clôture professionnelle est :", choix: ["See ya", "Kind regards", "Hello guys", "Bye bye"], bonne: 1, explication: "Registre professionnel." },
      { q: "« Actually » signifie :", choix: ["Actuellement", "En fait", "Activement", "Finalement"], bonne: 1, explication: "C'est un faux ami." },
      { q: "« Shareholder » désigne :", choix: ["Un client", "Un actionnaire", "Un fournisseur", "Un salarié"], bonne: 1, explication: "Celui qui détient des actions (shares)." },
    ],
  },

  8: {
    titre: "Communication orale, travail en équipe et employabilité",
    resume: md`
## L'essentiel — Oral, équipe, employabilité

- **Exposé** : une introduction qui accroche, un plan annoncé, 3 idées maximum par partie, des diapositives sobres (mots-clés, pas de paragraphes), un timing respecté, une conclusion claire.
- À l'oral : regarder l'auditoire, parler lentement, ne pas lire ses notes, anticiper les questions.
- **Travail en groupe** : répartir les rôles, fixer un calendrier, un outil de partage, des points d'étape ; régler les conflits tôt.
- **CV** clair (1 page, formation, expériences, compétences, langues) et **lettre de motivation** personnalisée (vous → moi → nous).
- **Stress** : préparation, respiration, sommeil, simulation d'épreuve.
`,
    exercices: md`
### Exercice 2 — Préparer un exposé de groupe

Votre groupe de 4 étudiants doit présenter en 15 minutes un exposé sur « La RSE dans les entreprises marocaines », dans trois semaines.

1. Proposez un plan en trois parties et une répartition du temps de parole.
2. Proposez un rétroplanning sur trois semaines et une répartition des rôles.
3. Un membre ne fait pas sa part. Comment réagir ?

<details><summary>Voir le corrigé</summary>

**1)** Introduction (1 min 30) ; I. Définition et piliers de la RSE (4 min) ; II. Pratiques d'entreprises marocaines et label RSE de la CGEM (4 min) ; III. Limites et perspectives (4 min) ; conclusion (1 min 30). Chaque membre présente environ 3 à 4 minutes.

**2)** Semaine 1 : recherche documentaire et plan ; semaine 2 : rédaction et diapositives ; semaine 3 : assemblage et **deux répétitions chronométrées**. Rôles : coordinateur (planning), responsable recherche, responsable diapositives, responsable répétitions et questions.

**3)** En parler **rapidement** et directement avec lui, lui confier une tâche précise avec une échéance ; si rien ne change, prévenir l'enseignant avant l'exposé plutôt qu'après.

</details>
`,
    qcm: [
      { q: "Une bonne diapositive contient :", choix: ["De longs paragraphes", "Des mots-clés et peu de texte", "Tout le discours", "Aucun titre"], bonne: 1, explication: "L'orateur développe à l'oral." },
      { q: "À l'oral, il faut surtout éviter :", choix: ["De regarder l'auditoire", "De lire ses notes mot à mot", "D'annoncer son plan", "De respecter le temps"], bonne: 1, explication: "Cela coupe le contact avec le public." },
      { q: "Un CV d'étudiant tient idéalement sur :", choix: ["Une page", "Trois pages", "Cinq pages", "Une demi-ligne"], bonne: 0, explication: "Clair et synthétique." },
      { q: "La structure classique d'une lettre de motivation est :", choix: ["Moi, moi, moi", "Vous, moi, nous", "Nous, vous, eux", "Sans structure"], bonne: 1, explication: "L'entreprise, le candidat, le projet commun." },
      { q: "Dans un travail de groupe, les conflits doivent être réglés :", choix: ["Le jour de l'exposé", "Le plus tôt possible", "Jamais", "Par le plus fort"], bonne: 1, explication: "Plus on attend, plus c'est difficile." },
    ],
  },
};
