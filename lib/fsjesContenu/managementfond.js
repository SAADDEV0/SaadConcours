// Management fondamental (S2, tronc commun) — compléments par chapitre : description SEO, résumé, exercices 2 et 3, QCM.
const md = String.raw;

const chapitres = {
  1: {
    titre: "Organisation, entreprise et management : les notions de base",
    description: "Notions de base du management : organisation, entreprise, management, gestion et leadership, efficacité, efficience, pertinence et niveaux de management.",
    resume: md`
## L'essentiel — Les notions de base

- **Organisation** : groupe structuré de personnes qui coordonnent leurs activités et leurs ressources pour atteindre des objectifs communs.
- Caractéristiques : **finalité**, **ressources**, **structure**, **frontières**, **environnement**.
- Trois familles : **entreprises** (profit), **organisations publiques** (intérêt général), **économie sociale et solidaire** (coopératives, associations, mutuelles).
- **Entreprise** : unité de production créatrice de valeur ajoutée (angle économique), groupe humain (angle social), entité juridique (angle juridique).
- Finalités : rentabilité, pérennité, croissance, finalités sociales et sociétales.
- **Management** : fixer des objectifs, organiser, diriger et contrôler pour atteindre les buts de façon efficace et efficiente.
- À distinguer : **gestion** (ressources, chiffres), **administration** (règles), **leadership** (influence).
- **Efficacité** = résultats / objectifs ; **efficience** = résultats / moyens ; **pertinence** = adéquation des moyens aux objectifs.
- Niveaux : **stratégique** (long terme), **intermédiaire** (moyen terme), **opérationnel** (court terme, proximité).
- Le management s'adapte au type d'organisation : rentabilité dans l'entreprise, règles et performance publique (LOF 130-13), participation dans l'économie sociale.
`,
    exercices: md`
### Exercice 2 — Efficace, efficiente, ou les deux ?

Pour chaque situation, dites si l'organisation est efficace, efficiente, les deux ou aucun des deux :
a) Un call center de Rabat devait traiter 10 000 appels par mois ; il en traite 10 500 avec le même effectif et le même budget.
b) Une commune voulait goudronner 20 km de routes ; elle en goudronne 20 km, mais pour un coût double du budget prévu.
c) Une usine de textile à Tanger produit au coût le plus bas du secteur, mais seulement 70 % des commandes de ses clients.
d) Une association de soutien scolaire devait accompagner 300 élèves et en accompagne 150, avec un budget dépassé de 40 %.

<details><summary>Voir le corrigé</summary>

a) **Efficace et efficiente** : objectif dépassé (105 %) avec les mêmes moyens, donc un coût par appel plus faible.
b) **Efficace mais pas efficiente** : l'objectif est atteint, mais avec deux fois plus de moyens que prévu.
c) **Efficiente mais pas efficace** : faible coût unitaire, mais objectif de livraison des commandes non atteint.
d) **Ni efficace ni efficiente** : 50 % de l'objectif atteint, avec un budget dépassé.

</details>

### Exercice 3 — Les niveaux de management de la Clinique Ennakhil

La Clinique Ennakhil (Marrakech) emploie 220 personnes. Classez chaque personne selon son niveau de management et indiquez la compétence dominante qu'elle doit mobiliser (technique, humaine, conceptuelle) :
a) Le directeur général, qui prépare l'ouverture d'une seconde clinique à Agadir.
b) La directrice des soins infirmiers, qui répartit les infirmiers entre les services.
c) Le major du service des urgences, qui organise les gardes de la nuit et soigne lui-même certains patients.
d) Le directeur administratif et financier, qui prépare le budget de l'année.
e) Le chef d'équipe de l'entretien, qui encadre six agents.

<details><summary>Voir le corrigé</summary>

| Personne | Niveau | Compétence dominante |
|---|---|---|
| a) Directeur général | Stratégique | Conceptuelle (vision, analyse de l'environnement) |
| b) Directrice des soins | Intermédiaire | Humaine et conceptuelle (coordination des services) |
| c) Major des urgences | Opérationnel | Technique (soins) et humaine (animation de l'équipe) |
| d) Directeur administratif et financier | Intermédiaire | Conceptuelle et technique (budget) |
| e) Chef d'équipe de l'entretien | Opérationnel | Technique et humaine |

Plus on monte dans la hiérarchie, plus les compétences **conceptuelles** comptent ; plus on est proche du terrain, plus les compétences **techniques** sont nécessaires. Les compétences **humaines** sont utiles à tous les niveaux.

</details>
`,
    qcm: [
      { q: "Une organisation se définit d'abord comme :", choix: ["Une entreprise qui réalise des profits", "Un groupe structuré de personnes poursuivant des objectifs communs", "Un bâtiment administratif", "Un ensemble de machines"], bonne: 1, explication: "Les entreprises ne sont qu'une famille d'organisations parmi d'autres." },
      { q: "Une coopérative laitière relève :", choix: ["Du secteur public", "De l'économie sociale et solidaire", "Des sociétés anonymes", "Des administrations centrales"], bonne: 1, explication: "Elle vise d'abord à rendre service à ses membres." },
      { q: "L'angle social de l'entreprise la présente comme :", choix: ["Une unité de production", "Un groupe humain aux intérêts parfois divergents", "Une personne morale", "Un contribuable"], bonne: 1, explication: "Actionnaires, dirigeants et salariés doivent coopérer." },
      { q: "L'efficacité mesure :", choix: ["Le rapport entre résultats et moyens", "Le degré d'atteinte des objectifs", "L'adéquation des moyens aux objectifs", "Le profit"], bonne: 1, explication: "Résultats obtenus / objectifs fixés." },
      { q: "Une entreprise qui atteint son objectif mais dépasse fortement son budget est :", choix: ["Efficace et efficiente", "Efficace mais peu efficiente", "Efficiente mais inefficace", "Ni l'un ni l'autre"], bonne: 1, explication: "Elle atteint le résultat avec trop de moyens." },
      { q: "La pertinence concerne :", choix: ["Le coût unitaire", "L'adéquation des moyens choisis aux objectifs", "La rapidité des décisions", "Le nombre de salariés"], bonne: 1, explication: "Les moyens étaient-ils adaptés au but poursuivi ?" },
      { q: "Les chefs d'équipe et contremaîtres appartiennent au management :", choix: ["Stratégique", "Intermédiaire", "Opérationnel", "Externe"], bonne: 2, explication: "Ils encadrent directement l'exécution du travail." },
      { q: "Le leadership désigne surtout :", choix: ["L'application des règles", "La capacité à influencer et entraîner les autres", "La tenue de la comptabilité", "Le contrôle des stocks"], bonne: 1, explication: "On peut être leader sans pouvoir hiérarchique." },
      { q: "Au niveau stratégique, l'horizon des décisions est plutôt :", choix: ["La journée", "La semaine", "Le long terme", "L'heure"], bonne: 2, explication: "La direction générale fixe les orientations à plusieurs années." },
      { q: "La LOF 130-13 a introduit dans la gestion publique marocaine :", choix: ["La suppression du budget", "Une logique d'objectifs et d'indicateurs de performance", "La privatisation des communes", "Le statut d'auto-entrepreneur"], bonne: 1, explication: "C'est une illustration du nouveau management public." },
    ],
  },

  2: {
    titre: "Le manager : rôles, compétences et outils",
    description: "Le travail du manager : fonctions de Fayol, dix rôles de Mintzberg, compétences de Katz, matrice d'Eisenhower, loi de Pareto, délégation et réunion efficace.",
    resume: md`
## L'essentiel — Le manager

- **Fayol (1916)** : prévoir, organiser, commander, coordonner, contrôler ; **Mintzberg (1973)** : travail réel fragmenté, interrompu, surtout oral.
- **Rôles interpersonnels** : symbole, leader, agent de liaison.
- **Rôles informationnels** : observateur actif, diffuseur (vers l'intérieur), porte-parole (vers l'extérieur).
- **Rôles décisionnels** : entrepreneur, régulateur, répartiteur de ressources, négociateur.
- **Katz (1955)** : compétences **techniques** (terrain), **humaines** (tous niveaux), **conceptuelles** (sommet) ; s'y ajoutent l'intelligence émotionnelle et le numérique.
- **Matrice d'Eisenhower** : important et urgent → faire ; important non urgent → **planifier** ; urgent non important → **déléguer** ; ni l'un ni l'autre → abandonner.
- **Pareto** : 20 % des causes produisent 80 % des effets ; **Parkinson** : le travail occupe tout le temps disponible.
- **Délégation** : confier une mission avec autorité et moyens ; le manager reste **responsable**.
- Six étapes : choisir la tâche, la personne, définir objectif-délai-moyens-limites, communiquer, suivre, évaluer.
- **Réunion efficace** : objectif, ordre du jour, bons participants, durée, animateur, compte rendu et suivi des décisions.
`,
    exercices: md`
### Exercice 2 — Le bon rôle

Associez chaque situation au rôle de Mintzberg correspondant :
a) Le directeur d'une usine de Kénitra annonce à la presse un plan d'embauche de 300 personnes.
b) Une cheffe de service lit chaque semaine la veille réglementaire préparée par le service juridique.
c) Le directeur commercial arbitre entre deux équipes qui réclament le même budget publicitaire.
d) Un chef d'agence bancaire participe aux réunions de l'association des commerçants du quartier.
e) Une directrice d'hôtel gère l'évacuation des clients après une coupure d'électricité.
f) Le directeur des achats obtient d'un fournisseur une remise de 6 %.

<details><summary>Voir le corrigé</summary>

a) **Porte-parole** (informationnel) ; b) **Observateur actif** (informationnel) ; c) **Répartiteur de ressources** (décisionnel) ; d) **Agent de liaison** (interpersonnel) ; e) **Régulateur** (décisionnel) ; f) **Négociateur** (décisionnel).

</details>

### Exercice 3 — Une délégation qui échoue

M. Kabbaj, directeur d'une agence de voyages à Fès, confie à Salma, nouvelle recrue, l'organisation d'un séjour pour un groupe de 40 personnes. Il lui dit seulement : « Débrouille-toi, je te fais confiance. » Salma n'a ni accès au budget ni pouvoir de signer avec les hôtels. Le jour du départ, rien n'est réservé ; M. Kabbaj déclare au client que « c'est la faute de Salma ».
1. Identifiez les erreurs de délégation commises.
2. Qui est responsable de l'échec vis-à-vis du client ?
3. Proposez une délégation correcte.

<details><summary>Voir le corrigé</summary>

**1)** Mauvais choix de la personne (nouvelle recrue sans expérience) ; aucun **objectif** précis, aucun **délai** intermédiaire ; ni **autorité** (signature) ni **moyens** (budget) ; aucune **communication** aux hôtels ; aucun **suivi**. C'est un **abandon** plutôt qu'une délégation.

**2)** **M. Kabbaj** : la délégation ne transfère pas la responsabilité finale. Devant le client, il reste responsable ; rejeter la faute sur Salma est contraire aux règles du management et détruit la confiance de l'équipe.

**3)** Choisir un collaborateur expérimenté ou accompagner Salma ; fixer l'objectif (séjour de 4 jours pour 40 personnes, budget plafond, date limite des réservations), lui donner la délégation de signature et l'accès au budget, informer les partenaires, organiser des points d'étape (J-30, J-15, J-7) et évaluer le résultat ensemble.

</details>
`,
    qcm: [
      { q: "Pour Fayol, les fonctions administratives sont :", choix: ["Planifier, produire, vendre", "Prévoir, organiser, commander, coordonner, contrôler", "Acheter, stocker, livrer", "Recruter, former, payer"], bonne: 1, explication: "On les résume par le sigle POCCC." },
      { q: "Selon Mintzberg, le travail réel du manager est :", choix: ["Planifié et calme", "Fragmenté et souvent interrompu", "Surtout écrit", "Uniquement stratégique"], bonne: 1, explication: "Il l'a montré en observant des directeurs généraux." },
      { q: "Présenter les résultats de l'entreprise à des investisseurs relève du rôle de :", choix: ["Diffuseur", "Porte-parole", "Leader", "Négociateur"], bonne: 1, explication: "Le porte-parole transmet l'information vers l'extérieur." },
      { q: "Gérer une panne ou une grève relève du rôle de :", choix: ["Entrepreneur", "Régulateur", "Symbole", "Agent de liaison"], bonne: 1, explication: "C'est un rôle décisionnel de gestion des perturbations." },
      { q: "Les compétences les plus nécessaires au sommet de la hiérarchie, selon Katz, sont :", choix: ["Techniques", "Conceptuelles", "Manuelles", "Comptables"], bonne: 1, explication: "Le dirigeant doit comprendre l'organisation dans son ensemble." },
      { q: "Dans la matrice d'Eisenhower, une tâche importante mais non urgente doit être :", choix: ["Abandonnée", "Planifiée", "Déléguée", "Faite immédiatement"], bonne: 1, explication: "C'est la case qui prépare l'avenir." },
      { q: "Selon la loi de Pareto :", choix: ["Tout le travail a la même valeur", "Environ 20 % des causes produisent 80 % des effets", "Il faut travailler 80 % du temps", "80 % des salariés sont inutiles"], bonne: 1, explication: "Le manager concentre son effort sur l'essentiel." },
      { q: "Lorsqu'un manager délègue une mission :", choix: ["Il n'est plus responsable du résultat", "Il reste responsable du résultat final", "La responsabilité passe au client", "Il doit refaire le travail"], bonne: 1, explication: "La délégation transfère l'autorité, pas la responsabilité finale." },
      { q: "Une délégation réussie suppose de confier :", choix: ["La tâche seule", "La tâche avec l'autorité et les moyens nécessaires", "Uniquement les tâches désagréables", "Un objectif sans délai"], bonne: 1, explication: "Sans autorité ni moyens, le collaborateur ne peut pas réussir." },
      { q: "Le compte rendu d'une réunion doit surtout préciser :", choix: ["La météo du jour", "Les décisions, les responsables et les délais", "Les absences uniquement", "Le menu du déjeuner"], bonne: 1, explication: "Il permet de suivre la mise en œuvre des décisions." },
    ],
  },

  3: {
    titre: "L'évolution de la pensée managériale",
    description: "Les grandes écoles du management : Taylor, Ford, Fayol, Weber, Mayo, Maslow, Herzberg, McGregor, Drucker, contingence, qualité totale, lean et agilité.",
    resume: md`
## L'essentiel — L'évolution de la pensée managériale

- **Taylor (1911)** : OST, division **verticale** (conception/exécution) et **horizontale** (tâches simples), *one best way*, salaire au rendement, contrôle.
- **Ford** : travail à la chaîne, standardisation, *five dollars day* (1914).
- **Fayol (1916)** : six fonctions de l'entreprise, cinq tâches administratives (POCCC), quatorze principes dont l'**unité de commandement**.
- **Weber** : **bureaucratie**, règles écrites et impersonnelles, autorité **rationnelle-légale** (et traditionnelle, charismatique).
- **Mayo** (Hawthorne, 1924-1932) : le facteur humain et le groupe influencent la productivité.
- **Maslow (1943)** : besoins physiologiques, sécurité, appartenance, estime, accomplissement.
- **Herzberg (1959)** : facteurs d'**hygiène** (évitent l'insatisfaction) et facteurs **moteurs** (motivent) ; **McGregor (1960)** : théories **X** et **Y**.
- **Néoclassiques** : **Drucker** (DPO, 1954) et **Sloan** (décentralisation coordonnée, General Motors).
- **Systémique** : système ouvert ; **contingence** : pas de structure idéale (Burns et Stalker, Woodward, Lawrence et Lorsch).
- **Contemporaines** : qualité totale (Deming, ISO 9001), toyotisme et **lean** (Ohno, juste-à-temps, kaizen), management participatif, **agilité** (2001), RSE.
`,
    exercices: md`
### Exercice 2 — Qui a dit quoi ?

Associez chaque idée à son auteur : Taylor, Fayol, Weber, Mayo, Maslow, Herzberg, McGregor, Drucker.
a) « Un employé ne doit recevoir d'ordres que d'un seul chef. »
b) Le salaire ne motive pas ; il évite seulement l'insatisfaction.
c) Il existe une seule meilleure façon d'exécuter chaque tâche.
d) Les besoins humains forment une hiérarchie, du physiologique à l'accomplissement.
e) Les dirigeants qui pensent que l'homme fuit le travail le contrôlent étroitement, ce qui le rend passif.
f) Les objectifs doivent être fixés avec les collaborateurs, qui choisissent ensuite leurs moyens.
g) La productivité augmente quand les ouvrières se sentent observées et considérées.
h) L'organisation la plus rationnelle repose sur des règles écrites et impersonnelles.

<details><summary>Voir le corrigé</summary>

a) **Fayol** (unité de commandement) ; b) **Herzberg** (facteur d'hygiène) ; c) **Taylor** (*one best way*) ; d) **Maslow** ; e) **McGregor** (théorie X) ; f) **Drucker** (DPO) ; g) **Mayo** (Hawthorne) ; h) **Weber** (bureaucratie).

</details>

### Exercice 3 — Mécanique ou organique ?

Deux entreprises marocaines : la **Cimenterie du Moyen Atlas**, qui produit en continu un ciment standard pour un marché stable, et **Digit'Agri**, start-up de Meknès qui développe des applications pour les agriculteurs dans un marché qui change tous les six mois.
1. Quelle structure, mécanique ou organique, convient à chacune ? Justifiez par la contingence.
2. Citez deux caractéristiques de chaque type de structure.
3. Quelle approche contemporaine conviendrait le mieux à Digit'Agri ?

<details><summary>Voir le corrigé</summary>

**1)** **Cimenterie** : structure **mécanique**, adaptée à un environnement **stable** et à une production en continu (Burns et Stalker, Woodward). **Digit'Agri** : structure **organique**, adaptée à un environnement **instable** qui exige réactivité et innovation.

**2)** Mécanique : hiérarchie marquée, tâches spécialisées et formalisées, procédures écrites, décisions centralisées. Organique : tâches redéfinies en permanence, communication horizontale, décentralisation, travail en équipes et en réseau.

**3)** Le **management agile** : petites équipes autonomes, cycles de développement courts, retours fréquents des agriculteurs utilisateurs, adaptation continue des priorités.

</details>
`,
    qcm: [
      { q: "L'organisation scientifique du travail est associée à :", choix: ["Fayol", "Taylor", "Mayo", "Maslow"], bonne: 1, explication: "Principles of Scientific Management, 1911." },
      { q: "La division verticale du travail sépare :", choix: ["Les tâches en gestes simples", "La conception et l'exécution du travail", "Les hommes et les femmes", "Les ateliers selon les produits"], bonne: 1, explication: "La division horizontale décompose les tâches." },
      { q: "Le principe d'unité de commandement a été formulé par :", choix: ["Weber", "Fayol", "Ford", "Herzberg"], bonne: 1, explication: "Un salarié ne reçoit d'ordres que d'un seul chef." },
      { q: "Pour Weber, la bureaucratie repose sur l'autorité :", choix: ["Charismatique", "Traditionnelle", "Rationnelle-légale", "Familiale"], bonne: 2, explication: "Règles écrites, impersonnelles, compétence." },
      { q: "Les expériences de Hawthorne ont été menées par :", choix: ["Taylor", "Mayo", "Drucker", "Sloan"], bonne: 1, explication: "Elles ont révélé l'importance du facteur humain." },
      { q: "Selon Herzberg, le salaire est :", choix: ["Un facteur moteur", "Un facteur d'hygiène", "Sans effet", "Le seul facteur de motivation"], bonne: 1, explication: "Son insuffisance crée l'insatisfaction, mais il ne motive pas durablement." },
      { q: "La théorie Y de McGregor considère que l'homme :", choix: ["Fuit le travail", "Peut aimer travailler et rechercher des responsabilités", "Ne travaille que pour l'argent", "Doit être contrôlé en permanence"], bonne: 1, explication: "La théorie X affirme l'inverse." },
      { q: "La direction par objectifs a été proposée par :", choix: ["Drucker", "Weber", "Ford", "Woodward"], bonne: 0, explication: "The Practice of Management, 1954." },
      { q: "La théorie de la contingence affirme que :", choix: ["Il existe une structure idéale pour toutes les entreprises", "La bonne structure dépend de facteurs comme l'environnement et la technologie", "La structure n'a aucune importance", "Seule la taille compte"], bonne: 1, explication: "Burns et Stalker, Woodward, Lawrence et Lorsch." },
      { q: "Le kaizen désigne :", choix: ["Le travail à la chaîne", "L'amélioration continue", "La bureaucratie", "Le salaire au rendement"], bonne: 1, explication: "C'est un principe du toyotisme et du lean management." },
    ],
  },

  4: {
    titre: "Planifier : de la vision aux objectifs",
    description: "La planification : mission, vision et valeurs, finalités, buts et objectifs, méthode SMART, OKR, types de plans, plan d'action et diagramme de Gantt.",
    resume: md`
## L'essentiel — Planifier

- **Planifier** : décider à l'avance quoi faire, comment, quand et par qui ; intérêts : anticiper, coordonner, mobiliser, contrôler ; limites : incertitude, rigidité, coût.
- **Mission** (raison d'être), **vision** (ambition future), **valeurs** (principes de comportement).
- **Finalité** (intention générale) → **but** (orientation à moyen terme) → **objectif** (précis, chiffré, daté).
- Objectifs en **cascade** et **direction par objectifs** (Drucker) : objectifs négociés, moyens laissés à l'initiative, évaluation des résultats.
- **SMART** : spécifique, mesurable, atteignable, réaliste et pertinent, temporellement défini.
- **OKR** : un objectif qualitatif mobilisateur + 3 à 5 **résultats clés** mesurables, souvent trimestriels (Intel, Google).
- Plans **stratégiques** (3-5 ans), **tactiques** (1-2 ans, par fonction), **opérationnels** (court terme) ; **budgets** = traduction chiffrée.
- Plans **permanents** (politiques, procédures, règles) et **ponctuels** (programmes, projets).
- **Plan d'action** : action, responsable, échéance, moyens, indicateur ; grille **QQOQCP**.
- **Gantt** : tâches sur un calendrier, dépendances, tâches parallèles, durée totale et **chemin critique** ; **PERT** pour les projets complexes.
`,
    exercices: md`
### Exercice 2 — SMART ou pas SMART ?

Dites si chaque objectif est SMART ; sinon, identifiez le critère manquant et réécrivez-le :
a) « Augmenter nos ventes. »
b) « Réduire de 10 % le taux de rebut de l'atelier de couture d'ici le 30 juin 2027. »
c) « Devenir numéro un mondial du textile l'année prochaine » (PME de 40 salariés à Fès).
d) « Former tous les commerciaux à la négociation. »
e) « Ouvrir deux nouvelles agences à Oujda et Nador avant le 31 mars 2027, avec un budget de 1,2 million de DH. »

<details><summary>Voir le corrigé</summary>

a) **Non** : ni mesurable ni daté. « Augmenter le chiffre d'affaires de 12 % entre 2026 et 2027. »
b) **Oui** : spécifique, mesurable (10 %), réaliste a priori, daté.
c) **Non** : pas **atteignable** ni réaliste pour une PME. « Devenir le premier fournisseur de caftans des hôtels de luxe de Fès d'ici 2028, avec 30 % de ce marché. »
d) **Non** : pas d'**échéance** ni d'indicateur. « Former les 15 commerciaux à la négociation d'ici décembre 2026, avec une note d'évaluation minimale de 14/20. »
e) **Oui** : spécifique, mesurable, avec échéance et moyens.

</details>

### Exercice 3 — Mission, vision ou valeur ?

Pour la Coopérative Al Baraka (lait, Settat), classez chaque énoncé :
a) « Valoriser le lait de nos 350 éleveurs membres en leur assurant un revenu juste. »
b) « Solidarité, transparence et qualité. »
c) « Devenir en 2032 la coopérative laitière de référence de la région Casablanca-Settat. »
d) « Collecter 12 millions de litres en 2027. »
e) « Produire des produits laitiers sains pour les familles de la région. »

<details><summary>Voir le corrigé</summary>

a) **Mission** (raison d'être, pour ses membres) ; b) **Valeurs** ; c) **Vision** (ambition à long terme) ; d) **Objectif** (chiffré et daté) ; e) **Mission** (ce que l'organisation fait et pour qui).

</details>
`,
    qcm: [
      { q: "Planifier, c'est d'abord :", choix: ["Contrôler les résultats", "Décider à l'avance quoi faire, comment, quand et par qui", "Recruter du personnel", "Sanctionner les erreurs"], bonne: 1, explication: "Fayol parlait de « prévoir »." },
      { q: "La vision d'une organisation exprime :", choix: ["Sa raison d'être actuelle", "Ce qu'elle veut devenir à long terme", "Ses règles de sécurité", "Son budget annuel"], bonne: 1, explication: "La mission exprime la raison d'être." },
      { q: "Un objectif se distingue d'une finalité parce qu'il est :", choix: ["Général et durable", "Précis, chiffré et daté", "Non mesurable", "Fixé par l'État"], bonne: 1, explication: "La finalité est une intention générale non chiffrée." },
      { q: "Dans SMART, la lettre M signifie :", choix: ["Motivant", "Mesurable", "Mensuel", "Moderne"], bonne: 1, explication: "On doit pouvoir vérifier l'atteinte par un indicateur." },
      { q: "« Augmenter les ventes » n'est pas SMART car il manque notamment :", choix: ["Un verbe", "Une mesure et une échéance", "Un responsable syndical", "Une adresse"], bonne: 1, explication: "Il faut une valeur cible et une date." },
      { q: "Les OKR associent :", choix: ["Un objectif qualitatif et des résultats clés mesurables", "Un budget et un organigramme", "Une mission et une sanction", "Un salaire et une prime"], bonne: 0, explication: "Ils ont été popularisés par Intel puis Google." },
      { q: "Le budget est :", choix: ["Un plan stratégique non chiffré", "La traduction chiffrée des plans", "Un document juridique", "Un organigramme"], bonne: 1, explication: "Il prévoit ventes, charges, investissements et trésorerie." },
      { q: "Une procédure d'achat appliquée à chaque commande est un plan :", choix: ["Ponctuel", "Permanent", "Stratégique", "Exceptionnel"], bonne: 1, explication: "Les plans permanents s'appliquent de façon répétée." },
      { q: "Dans un diagramme de Gantt, le chemin critique est :", choix: ["La tâche la plus chère", "La suite de tâches dont tout retard retarde le projet", "La première tâche du projet", "La tâche la plus courte"], bonne: 1, explication: "Les autres tâches disposent d'une marge." },
      { q: "La direction par objectifs consiste à :", choix: ["Imposer les moyens à chaque salarié", "Fixer des objectifs avec les collaborateurs et leur laisser le choix des moyens", "Supprimer les objectifs", "Contrôler chaque geste"], bonne: 1, explication: "Elle a été proposée par Drucker en 1954." },
    ],
  },

  5: {
    titre: "Décider : processus, modèles et outils",
    description: "La décision en management : typologies d'Ansoff et de Simon, modèle IMC, rationalité limitée, biais cognitifs, matrice multicritère et décision collective.",
    resume: md`
## L'essentiel — Décider

- **Décision** : choix d'une solution parmi plusieurs pour atteindre un objectif, avec une information souvent incomplète.
- **Ansoff** : décisions **stratégiques** (environnement, long terme), **tactiques** (allocation des ressources), **opérationnelles** (quotidien).
- **Simon** : décisions **programmées** (règles, répétitives) et **non programmées** (nouvelles, complexes).
- Contexte **certain**, **risqué** (probabilités connues) ou **incertain** ; décisions individuelles ou collectives.
- **IMC** : **I**ntelligence (diagnostic), **M**odélisation (options), **C**hoix, puis **évaluation**.
- **Rationalité limitée** (Simon) : solution **satisfaisante** plutôt qu'optimale ; modèle **politique** (Cyert et March), **poubelle** (Cohen, March, Olsen), **incrémental** (Lindblom).
- **Biais** : excès de confiance, ancrage, confirmation, escalade de l'engagement, pensée de groupe (Janis).
- **Matrice pondérée** : poids totalisant 100 %, notes, score $\sum$ poids × note, test de **sensibilité**.
- Outils : arbre de décision, analyse coûts-avantages, diagramme d'Ishikawa.
- Décision collective : **brainstorming** (Osborn), **Delphi**, vote, consensus ; meilleure adhésion, mais plus lente.
`,
    exercices: md`
### Exercice 2 — Classer les décisions

Classez chaque décision selon Ansoff (stratégique, tactique, opérationnelle) et selon Simon (programmée ou non) :
a) Le directeur d'une biscuiterie décide de racheter un concurrent tunisien.
b) Un chef de rayon commande des boissons quand le stock passe sous 200 bouteilles.
c) La directrice des ressources humaines choisit un logiciel de paie.
d) Un hôtel fixe le planning des femmes de chambre pour la semaine.
e) Une banque décide de lancer une offre de financement participatif.
f) Un responsable logistique choisit l'emplacement d'un nouvel entrepôt régional.

<details><summary>Voir le corrigé</summary>

| Décision | Ansoff | Simon |
|---|---|---|
| a) Rachat d'un concurrent | Stratégique | Non programmée |
| b) Commande au seuil d'alerte | Opérationnelle | Programmée |
| c) Logiciel de paie | Tactique | Non programmée |
| d) Planning hebdomadaire | Opérationnelle | Programmée |
| e) Nouvelle offre participative | Stratégique | Non programmée |
| f) Emplacement d'un entrepôt | Tactique | Non programmée |

</details>

### Exercice 3 — Le projet qui n'en finit pas

La direction d'une entreprise de Tanger a investi 8 millions de DH dans un logiciel de gestion qui ne fonctionne toujours pas après deux ans. Le prestataire demande 3 millions de plus pour « terminer ». Une autre solution, déjà utilisée par des concurrents, coûterait 4 millions et serait opérationnelle en six mois. Le directeur déclare : « Nous ne pouvons pas abandonner, nous avons déjà dépensé 8 millions. »
1. Quel biais le directeur manifeste-t-il ?
2. Comment raisonner correctement ?
3. Quelle démarche proposez-vous pour décider ?

<details><summary>Voir le corrigé</summary>

**1)** L'**escalade de l'engagement** : il continue à investir pour justifier les dépenses passées.

**2)** Les 8 millions déjà dépensés sont **irrécupérables** quelle que soit la décision : ils ne doivent pas entrer dans le choix. Il faut comparer uniquement l'**avenir** : 3 millions supplémentaires sans garantie de réussite, contre 4 millions pour une solution éprouvée disponible en six mois.

**3)** Reprendre le processus **IMC** : diagnostic indépendant de l'état du projet (intelligence), comparaison des deux options sur des critères pondérés (coût, délai, fiabilité, risque), choix, puis suivi rigoureux. Faire intervenir un expert extérieur ou un « avocat du diable » limite les biais.

</details>
`,
    qcm: [
      { q: "Selon Ansoff, une décision qui porte sur les relations de l'entreprise avec son environnement est :", choix: ["Opérationnelle", "Tactique", "Stratégique", "Programmée"], bonne: 2, explication: "Elle engage l'entreprise à long terme." },
      { q: "Une décision programmée est :", choix: ["Nouvelle et complexe", "Répétitive et traitée par des règles", "Toujours stratégique", "Prise en avenir incertain"], bonne: 1, explication: "Elle peut être confiée à des exécutants ou à un logiciel." },
      { q: "Dans le modèle IMC, la lettre I désigne :", choix: ["L'investissement", "L'intelligence, c'est-à-dire le diagnostic du problème", "L'innovation", "L'information comptable"], bonne: 1, explication: "Suivent la modélisation et le choix." },
      { q: "Selon la rationalité limitée, le décideur recherche :", choix: ["La solution optimale", "La première solution satisfaisante", "La solution la moins chère", "La solution du concurrent"], bonne: 1, explication: "Son information et son temps sont limités." },
      { q: "Le modèle politique de la décision présente l'organisation comme :", choix: ["Une machine", "Une coalition d'intérêts qui négocient", "Une famille", "Un marché parfait"], bonne: 1, explication: "Cyert et March." },
      { q: "Le modèle de la poubelle a été proposé par :", choix: ["Taylor", "Cohen, March et Olsen", "Fayol", "Maslow"], bonne: 1, explication: "Problèmes, solutions et participants se rencontrent parfois au hasard." },
      { q: "Continuer un projet déficitaire parce qu'on y a déjà beaucoup investi illustre :", choix: ["L'ancrage", "L'escalade de l'engagement", "La pensée de groupe", "La méthode Delphi"], bonne: 1, explication: "Les coûts passés ne devraient pas guider la décision." },
      { q: "Dans une matrice de décision pondérée, la somme des poids doit être égale à :", choix: ["10", "100 %", "Le nombre de critères", "La note maximale"], bonne: 1, explication: "Chaque poids exprime l'importance relative d'un critère." },
      { q: "La méthode Delphi consiste à :", choix: ["Voter à main levée", "Interroger séparément des experts par questionnaires successifs", "Tirer au sort la décision", "Laisser décider le plus ancien"], bonne: 1, explication: "Elle évite la pression du groupe." },
      { q: "Le brainstorming vise d'abord à :", choix: ["Critiquer chaque idée", "Produire un maximum d'idées sans les juger", "Prendre la décision finale", "Réduire le nombre de participants"], bonne: 1, explication: "Le tri des idées vient ensuite." },
    ],
  },

  6: {
    titre: "Organiser : structures, coordination et délégation",
    description: "Organiser le travail : division horizontale et verticale, six mécanismes de coordination, éventail de subordination, centralisation, structures et organigramme.",
    resume: md`
## L'essentiel — Organiser

- Organiser = **diviser** le travail (spécialisation) puis **coordonner** les activités séparées.
- Division **horizontale** (tâches, services) et **verticale** (pouvoir de décision) ; remèdes à la monotonie : rotation, élargissement, enrichissement des tâches.
- **Mintzberg** : ajustement mutuel, supervision directe, standardisation des **procédés**, des **résultats**, des **qualifications**, des **normes**.
- **Éventail de subordination** : étroit → structure **haute** ; large → structure **plate** ; nombre de chefs = effectif / éventail, niveau par niveau.
- **Centralisation** (cohérence, contrôle) contre **décentralisation** (rapidité, adaptation, motivation) ; la délégation en est l'outil individuel.
- Autorité **hiérarchique** (ordres) et **fonctionnelle** (expertise).
- Structures : **hiérarchique** (Fayol), **fonctionnelle** (Taylor), **staff and line**, **divisionnelle** (Sloan), **matricielle** (double rattachement), **par projet**, **en réseau**.
- Choix selon la **taille**, la **stratégie**, l'**environnement**, la **technologie** (contingence).
- **Organigramme** : services, postes, liens hiérarchiques et fonctionnels ; vertical, horizontal ou circulaire.
- L'organisation **informelle** (réseaux, leaders d'opinion) complète ou contrarie la structure formelle.
`,
    exercices: md`
### Exercice 2 — Quel mécanisme de coordination ?

Identifiez le mécanisme de coordination dominant (Mintzberg) :
a) Les caissiers d'un hypermarché appliquent une procédure identique pour chaque encaissement.
b) Dans une équipe de quatre développeurs, chacun s'adapte aux autres au fil de la journée.
c) Les agences régionales d'une banque doivent atteindre un objectif de crédits accordés, sans consigne sur la méthode.
d) Les pharmaciens d'une officine travaillent ensemble sans procédure écrite, grâce à leur formation commune.
e) Le contremaître d'un chantier de Tanger Med répartit chaque matin les ouvriers entre les tâches.
f) Les bénévoles d'une association caritative agissent selon les valeurs de solidarité qu'ils partagent.

<details><summary>Voir le corrigé</summary>

a) Standardisation des **procédés** ; b) **Ajustement mutuel** ; c) Standardisation des **résultats** ; d) Standardisation des **qualifications** ; e) **Supervision directe** ; f) Standardisation des **normes**.

</details>

### Exercice 3 — La matrice d'Atlas Engineering

Le bureau d'études Atlas Engineering (Casablanca, 80 ingénieurs) est organisé par métiers : génie civil, électricité, fluides. Pour chaque projet (un hôpital à Laâyoune, une usine à Kénitra), un chef de projet réunit des ingénieurs des différents métiers, qui continuent à dépendre de leur chef de métier.
1. Quelle structure Atlas Engineering a-t-elle adoptée ?
2. Quels avantages en tire-t-elle ?
3. Quelles difficultés peut-elle rencontrer, et comment les limiter ?

<details><summary>Voir le corrigé</summary>

**1)** Une structure **matricielle** : chaque ingénieur a un double rattachement, à son **chef de métier** (fonction) et au **chef de projet**.

**2)** Partage des compétences entre projets, utilisation souple des ingénieurs, maintien de l'expertise dans chaque métier, orientation vers le client grâce au chef de projet.

**3)** Conflits d'autorité entre chef de métier et chef de projet, ingénieurs tiraillés entre deux priorités, réunions nombreuses. Remèdes : définir clairement les rôles (le chef de projet fixe le quoi et le quand, le chef de métier le comment et la qualité technique), arbitrage par la direction, outils communs de planification des ressources.

</details>
`,
    qcm: [
      { q: "Organiser consiste à :", choix: ["Uniquement diviser le travail", "Diviser le travail puis coordonner les activités", "Uniquement contrôler", "Fixer les prix"], bonne: 1, explication: "Ce sont deux opérations complémentaires." },
      { q: "La division verticale du travail répartit :", choix: ["Les tâches entre services", "Le pouvoir de décision entre niveaux hiérarchiques", "Les salariés par âge", "Les produits par marché"], bonne: 1, explication: "La division horizontale répartit les tâches." },
      { q: "Fixer à chaque commercial un objectif de ventes sans lui dicter la méthode relève de :", choix: ["La supervision directe", "La standardisation des résultats", "L'ajustement mutuel", "La standardisation des procédés"], bonne: 1, explication: "On standardise le résultat attendu, pas la manière." },
      { q: "Un éventail de subordination large donne une structure :", choix: ["Haute", "Plate", "Fonctionnelle", "Matricielle"], bonne: 1, explication: "Peu de niveaux hiérarchiques." },
      { q: "Avec 240 opérateurs et un éventail de 8, il faut :", choix: ["20 chefs d'équipe", "30 chefs d'équipe", "40 chefs d'équipe", "8 chefs d'équipe"], bonne: 1, explication: "240 / 8 = 30." },
      { q: "La structure fondée sur l'unité de commandement est :", choix: ["La structure fonctionnelle", "La structure hiérarchique", "La structure matricielle", "La structure en réseau"], bonne: 1, explication: "Principe de Fayol : un seul chef." },
      { q: "La structure divisionnelle convient surtout à une entreprise :", choix: ["Petite et mono-produit", "Diversifiée sur plusieurs produits ou marchés", "Sans salariés", "En création"], bonne: 1, explication: "Modèle de Sloan chez General Motors." },
      { q: "Le principal inconvénient de la structure matricielle est :", choix: ["L'absence de spécialistes", "Les conflits liés au double rattachement", "L'impossibilité de travailler en projet", "L'absence de hiérarchie"], bonne: 1, explication: "Chaque salarié dépend de deux responsables." },
      { q: "Dans une structure staff and line, les services fonctionnels :", choix: ["Donnent des ordres à tous les opérationnels", "Conseillent les responsables hiérarchiques", "Remplacent la direction générale", "N'existent pas"], bonne: 1, explication: "L'unité de commandement est préservée." },
      { q: "L'organisation informelle désigne :", choix: ["L'organigramme officiel", "Les relations et réseaux non prévus par la structure officielle", "Le règlement intérieur", "Les procédures écrites"], bonne: 1, explication: "Elle peut faciliter ou bloquer le changement." },
    ],
  },

  7: {
    titre: "Diriger : motiver, communiquer et animer une équipe",
    description: "Diriger une équipe : sources du pouvoir, motivation (Maslow, Herzberg, McClelland, Vroom, Adams), styles de leadership, communication et gestion des conflits.",
    resume: md`
## L'essentiel — Diriger

- **Autorité** (droit lié à la fonction), **pouvoir** (capacité d'influencer), **leadership** (entraîner par l'adhésion).
- Sources du pouvoir (French et Raven) : **légitime**, **récompense**, **coercitif**, **expertise**, **référence**.
- Théories du contenu : **Maslow** (5 besoins), **Herzberg** (hygiène / moteurs), **McClelland** (accomplissement, pouvoir, affiliation).
- **Vroom** : Motivation = **Expectation** × **Instrumentalité** × **Valence** ; un facteur nul annule la motivation.
- **Adams** : sentiment d'**équité** (rétributions / contributions comparées aux autres) ; **Locke** : objectifs précis, difficiles mais acceptés.
- **Lewin** : autoritaire, démocratique, laisser-faire.
- **Blake et Mouton** : intérêt pour la production × intérêt pour les personnes ; 1.1, 9.1, 1.9, 5.5, **9.9 intégrateur**.
- **Hersey et Blanchard** : style **directif**, **persuasif**, **participatif**, **délégatif** selon la compétence et la motivation du collaborateur.
- Communication (Shannon et Weaver) : émetteur, code, message, canal, récepteur, bruit, **feedback** ; descendante, ascendante, horizontale ; formelle ou informelle ; écoute active.
- Conflits (Thomas et Kilmann) : **compétition**, **collaboration**, **compromis**, **évitement**, **accommodation**.
`,
    exercices: md`
### Exercice 2 — Quel style selon Hersey et Blanchard ?

Pour chaque collaborateur, indiquez le style de leadership adapté :
a) Un comptable expérimenté et très impliqué, qui maîtrise parfaitement la clôture des comptes.
b) Un stagiaire motivé qui découvre le logiciel de facturation.
c) Une vendeuse compétente mais découragée après la perte d'un gros client.
d) Un nouvel ouvrier peu qualifié, qui arrive en retard et ne respecte pas les consignes de sécurité.

<details><summary>Voir le corrigé</summary>

a) **Délégatif** : compétent et motivé, on lui confie la responsabilité.
b) **Persuasif** (explicatif) : motivé mais peu compétent, on explique et on accompagne.
c) **Participatif** : compétente mais peu motivée, on l'associe aux décisions et on l'encourage.
d) **Directif** : consignes précises, contrôle étroit, en particulier sur la sécurité.

</details>

### Exercice 3 — La théorie de Vroom appliquée

Une entreprise de Rabat hésite entre deux systèmes de prime pour ses commerciaux. Les commerciaux estiment :
- système 1 : probabilité d'atteindre l'objectif 0,5 ; probabilité de toucher effectivement la prime si l'objectif est atteint 0,8 ; valeur accordée à la prime 0,6 ;
- système 2 : probabilité d'atteindre l'objectif 0,8 ; probabilité de toucher la prime 0,9 ; valeur accordée à la récompense (une semaine de congé supplémentaire) 0,5.
1. Calculez la force de motivation de chaque système.
2. Quel système est le plus motivant ? Pourquoi ?
3. Comment améliorer le système 1 ?

<details><summary>Voir le corrigé</summary>

**1)** Système 1 : $0{,}5 \times 0{,}8 \times 0{,}6 = \mathbf{0{,}24}$. Système 2 : $0{,}8 \times 0{,}9 \times 0{,}5 = \mathbf{0{,}36}$.

**2)** Le **système 2** est plus motivant, alors même que sa récompense est jugée moins attractive : l'objectif paraît **atteignable** (expectation de 0,8) et la récompense **fiable** (instrumentalité de 0,9).

**3)** Rendre l'objectif plus réaliste ou fournir des moyens pour l'atteindre (formation, outils, ciblage des clients) afin d'augmenter l'**expectation** ; garantir le versement par des règles écrites et transparentes pour augmenter l'**instrumentalité** ; proposer une récompense choisie par les commerciaux pour augmenter la **valence**.

</details>
`,
    qcm: [
      { q: "Le leadership se définit comme :", choix: ["Le droit de donner des ordres lié à la fonction", "La capacité d'entraîner les autres par l'adhésion", "Le pouvoir de sanctionner", "La maîtrise de la comptabilité"], bonne: 1, explication: "L'autorité, elle, est attachée à la fonction." },
      { q: "Le pouvoir fondé sur la compétence reconnue est le pouvoir :", choix: ["Légitime", "Coercitif", "D'expertise", "De récompense"], bonne: 2, explication: "Selon French et Raven." },
      { q: "Selon McClelland, les trois besoins sont :", choix: ["Sécurité, estime, accomplissement", "Accomplissement, pouvoir, affiliation", "Salaire, sécurité, prime", "Hygiène, motivation, contrôle"], bonne: 1, explication: "Leur intensité varie selon les individus." },
      { q: "Dans la théorie de Vroom, si l'objectif paraît impossible à atteindre :", choix: ["La motivation est maximale", "La motivation est presque nulle", "Seule la valence compte", "La prime suffit à motiver"], bonne: 1, explication: "L'expectation est presque nulle et la motivation est un produit." },
      { q: "La théorie de l'équité a été proposée par :", choix: ["Maslow", "Adams", "Taylor", "Lewin"], bonne: 1, explication: "Chacun compare ses rétributions et ses contributions à celles des autres." },
      { q: "Dans la grille de Blake et Mouton, le style jugé idéal est :", choix: ["1.1", "9.1", "1.9", "9.9"], bonne: 3, explication: "Fort intérêt pour la production et pour les personnes." },
      { q: "Selon Hersey et Blanchard, avec un collaborateur compétent et motivé, le style adapté est :", choix: ["Directif", "Persuasif", "Participatif", "Délégatif"], bonne: 3, explication: "Le manager lui confie la responsabilité." },
      { q: "Une note de service de la direction vers les salariés est une communication :", choix: ["Ascendante", "Descendante", "Horizontale", "Informelle"], bonne: 1, explication: "Elle va du sommet vers la base." },
      { q: "Dans le schéma de la communication, le feedback sert à :", choix: ["Coder le message", "Vérifier que le message a été compris", "Choisir le canal", "Supprimer les bruits"], bonne: 1, explication: "C'est la rétroaction du récepteur vers l'émetteur." },
      { q: "Rechercher une solution gagnant-gagnant dans un conflit correspond à la stratégie de :", choix: ["Compétition", "Collaboration", "Évitement", "Accommodation"], bonne: 1, explication: "Forte affirmation de soi et forte coopération." },
    ],
  },

  8: {
    titre: "Contrôler la performance et conduire le changement",
    description: "Contrôle et changement : processus de contrôle, écarts budgétaires, tableau de bord, balanced scorecard, roue de Deming, résistances, Lewin et Kotter.",
    resume: md`
## L'essentiel — Contrôler et conduire le changement

- **Contrôler** : vérifier, corriger, apprendre ; le contrôle boucle le cycle planifier-organiser-diriger-contrôler.
- Processus : fixer des **normes**, **mesurer**, **comparer** et analyser les écarts, **agir**.
- Écart = réalisé − prévu ; positif **favorable** pour un produit, **défavorable** pour une charge.
- Contrôle **anticipé**, **concomitant**, **a posteriori** ; des résultats ou des comportements ; interne ou externe ; **autocontrôle**.
- **Tableau de bord** : quelques **KPI**, objectifs, voyants ; **balanced scorecard** (Kaplan et Norton) : financier, clients, processus internes, apprentissage.
- **PDCA** (Deming) : Plan, Do, Check, Act ; amélioration continue (ISO 9001, lean).
- Résistances : peur de l'inconnu, perte d'avantages, habitudes, manque d'information, mauvaises expériences.
- **Lewin** : décristallisation, changement, recristallisation.
- **Kotter** : urgence, coalition, vision, communication, lever les obstacles, victoires rapides, consolidation, ancrage culturel.
- Leviers : communication, participation, formation, accompagnement ; **culture** selon Schein (artefacts, valeurs, présupposés).
`,
    exercices: md`
### Exercice 2 — Anticipé, concomitant ou a posteriori ?

Classez chaque contrôle selon son moment :
a) Une conserverie analyse en laboratoire chaque lot de sardines à la réception.
b) Un chef de rayon vérifie toutes les heures que les étagères sont remplies.
c) La direction financière compare chaque mois les ventes au budget.
d) Une banque vérifie la solvabilité d'un client avant d'accorder un crédit.
e) Un enseignant corrige les copies de l'examen final.
f) Un pilote d'avion suit en permanence les instruments de bord.

<details><summary>Voir le corrigé</summary>

a) **Anticipé** ; b) **Concomitant** ; c) **A posteriori** ; d) **Anticipé** ; e) **A posteriori** ; f) **Concomitant**.

</details>

### Exercice 3 — Appliquer la roue de Deming

Une pâtisserie industrielle de Fès constate que 6 % de ses gâteaux sont rejetés par le contrôle qualité (cuisson irrégulière), alors que l'objectif est de 2 %.
1. Présentez une démarche PDCA pour résoudre ce problème.
2. Pourquoi parle-t-on d'amélioration continue ?

<details><summary>Voir le corrigé</summary>

**1)** **Plan** : analyser les causes (diagramme d'Ishikawa : réglage des fours, qualité de la farine, formation des opérateurs, entretien) ; fixer l'objectif (2 % de rebut en trois mois) et un plan d'action (nouveau réglage des températures, fiche de contrôle). **Do** : tester les mesures sur une seule ligne pendant deux semaines. **Check** : mesurer le taux de rebut de la ligne test et le comparer à l'objectif. **Act** : si le taux baisse, généraliser à toutes les lignes et intégrer les réglages dans les procédures ; sinon, revenir à l'analyse des causes.

**2)** Parce que la roue **tourne en permanence** : une fois l'objectif atteint, on fixe un nouvel objectif plus exigeant (1 % de rebut) et l'on recommence un cycle. Chaque cycle consolide le progrès précédent.

</details>
`,
    qcm: [
      { q: "La première étape du processus de contrôle consiste à :", choix: ["Sanctionner les responsables", "Fixer des normes ou des objectifs de référence", "Mesurer les résultats", "Corriger les écarts"], bonne: 1, explication: "Sans norme, il n'y a rien à comparer." },
      { q: "Un écart positif sur une charge est :", choix: ["Favorable", "Défavorable", "Neutre", "Impossible"], bonne: 1, explication: "La charge réelle dépasse la charge prévue." },
      { q: "Vérifier la qualité des matières premières à leur réception est un contrôle :", choix: ["A posteriori", "Concomitant", "Anticipé", "Externe"], bonne: 2, explication: "Il prévient les problèmes avant la production." },
      { q: "Un tableau de bord doit être :", choix: ["Exhaustif, avec des centaines d'indicateurs", "Synthétique, centré sur quelques indicateurs clés", "Réservé au service comptable", "Établi une fois tous les cinq ans"], bonne: 1, explication: "Il sert à piloter rapidement l'activité." },
      { q: "Le balanced scorecard de Kaplan et Norton comporte :", choix: ["Un seul axe financier", "Quatre axes : financier, clients, processus internes, apprentissage", "Deux axes : ventes et achats", "Cinq axes de production"], bonne: 1, explication: "Il équilibre les indicateurs financiers et non financiers." },
      { q: "Dans le PDCA, la lettre C correspond à :", choix: ["Corriger", "Check, c'est-à-dire vérifier", "Communiquer", "Coordonner"], bonne: 1, explication: "On mesure les résultats et on les compare à l'objectif." },
      { q: "La première phase du changement selon Lewin est :", choix: ["La recristallisation", "La décristallisation", "La sanction", "Le recrutement"], bonne: 1, explication: "Il faut d'abord faire prendre conscience de la nécessité de changer." },
      { q: "Selon Kotter, la première étape d'un changement réussi est de :", choix: ["Ancrer le changement dans la culture", "Créer un sentiment d'urgence", "Licencier les opposants", "Changer l'organigramme"], bonne: 1, explication: "Puis former une coalition de pilotage et élaborer une vision." },
      { q: "La peur de perdre son emploi face à un nouveau logiciel est une cause de résistance liée à :", choix: ["Un manque de compétences techniques", "La crainte de perdre des avantages ou son statut", "L'organisation informelle uniquement", "La culture nationale"], bonne: 1, explication: "La communication doit répondre directement à cette crainte." },
      { q: "Selon Schein, la culture d'entreprise comporte des artefacts, des valeurs et :", choix: ["Des budgets", "Des présupposés implicites", "Des organigrammes", "Des procédures comptables"], bonne: 1, explication: "Ce sont les croyances les plus profondes et les moins visibles." },
    ],
  },
};

export default chapitres;
