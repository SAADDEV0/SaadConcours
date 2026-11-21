// Informatique de Gestion (S4, parcours Gestion) — compléments par chapitre : description SEO, résumé,
// exercices 2 et 3, QCM. Ajouté le 2026-11-21 pour la prépa ECT (partie informatique de l'épreuve
// « Gestion, management et informatique » du CNAEM : SQL en 2019 et 2020, Scilab en 2019) ; module
// « Informatique de gestion » du S4 Gestion (maquette de la FSJES Mohammedia). Les requêtes du cours ont été
// exécutées sur la base d'exemple Atlas Distribution (SQLite). Dans les gabarits md, pas de backtick : code
// en blocs ~~~ et formules de tableur en <code>.
const md = String.raw;

const chapitres = {
  1: {
    titre: "Système d'information et informatique de gestion",
    description: "Système d'information et ses quatre fonctions, niveaux de décision, ERP, CRM, fichiers et SGBD, sécurité et loi 09-08 : cours d'informatique de gestion corrigé.",
    resume: md`
## L'essentiel — Système d'information et informatique de gestion

- **Donnée** : fait brut ; **information** : donnée interprétée pour un destinataire ; **connaissance** : savoir tiré de nombreuses informations.
- **SI** : personnes, procédures, données, matériels et logiciels qui **collectent, mémorisent, traitent et diffusent** l'information.
- Le Moigne : système opérant, système d'information, système de pilotage.
- Le **système informatique** n'est que la partie technique du SI.
- Trois niveaux de décision : opérationnel, tactique (pilotage), stratégique.
- **ERP** : base unique partagée par toutes les fonctions ; CRM (clients), SCM (logistique), BI (décisionnel).
- Fichiers séparés : redondance, incohérence, dépendance des programmes, partage difficile.
- **SGBD** : crée, met à jour, interroge et protège la base ; garantit intégrité, confidentialité, sécurité, partage ; langage SQL.
- Démarche Merise : conceptuel (MCD), logique (tables), physique (SGBD).
- Sécurité DIC : disponibilité, intégrité, confidentialité.
- Maroc : loi 09-08 et CNDP (données personnelles), loi 05-20 (cybersécurité), loi 43-20 (signature électronique) ; SIMPL, Damancom, BADR.
`,
    exercices: md`
### Exercice 2 — Classer des décisions et des informations

Pour chacune des situations suivantes chez Atlas Distribution, indiquez le niveau de décision et le type d'application qui fournit l'information :
1. commander 200 bidons d'eau de Javel au fournisseur parce que le stock passe sous le seuil d'alerte ;
2. décider d'ouvrir un dépôt à Agadir en 2028 ;
3. fixer l'objectif de chiffre d'affaires de chaque commercial pour le trimestre ;
4. relancer les clients qui n'ont pas commandé depuis 60 jours.

<details><summary>Voir le corrigé</summary>

**1)** Décision **opérationnelle** (courante, répétitive) ; information issue de la **gestion des stocks** (module de l'ERP ou SCM).

**2)** Décision **stratégique** (long terme, engage l'entreprise) ; information synthétique et largement **externe** (études de marché, données régionales), complétée par l'**informatique décisionnelle** (ventes par région).

**3)** Décision **tactique** (allocation des moyens à moyen terme) ; information agrégée issue des **tableaux de bord** commerciaux (BI).

**4)** Décision **opérationnelle** ; information fournie par le **CRM** (historique des commandes et des contacts).

</details>

### Exercice 3 — Données personnelles et finalité

Le service des ressources humaines veut créer une base des salariés avec : nom, adresse, numéro CNSS, situation familiale, nombre d'enfants, salaire, religion, appartenance syndicale, photo. La finalité déclarée est la gestion de la paie.

1. Quelles données sont nécessaires à cette finalité ?
2. Quelles données posent problème au regard de la loi 09-08 ?
3. Quelles mesures de sécurité proposez-vous ?

<details><summary>Voir le corrigé</summary>

**1)** Nom, adresse, numéro CNSS, salaire, situation familiale et nombre d'enfants (utiles au calcul des allocations familiales et des déductions pour charges de famille de l'IR).

**2)** La **religion** et l'**appartenance syndicale** sont des données **sensibles** au sens de la loi 09-08 : leur traitement est en principe interdit sauf exceptions et autorisation de la CNDP, et elles sont inutiles pour la paie. La **photo** n'est pas nécessaire à la paie (elle peut l'être pour un badge, autre finalité à déclarer).

**3)** Accès réservé au service paie (droits dans le SGBD), mots de passe robustes, chiffrement des sauvegardes, journal des accès, durée de conservation définie, information des salariés et déclaration du traitement à la CNDP.

</details>
`,
    qcm: [
      { q: "Le système d'information d'une entreprise comprend :", choix: ["Uniquement les ordinateurs", "Les personnes, les procédures, les données et les outils", "Uniquement les logiciels", "Uniquement la direction"], bonne: 1, explication: "Le système informatique n'en est que la partie technique." },
      { q: "Les quatre fonctions d'un SI sont :", choix: ["Produire, vendre, acheter, financer", "Collecter, mémoriser, traiter, diffuser", "Planifier, organiser, diriger, contrôler", "Saisir, imprimer, envoyer, archiver"], bonne: 1, explication: "Fonctions classiques du SI." },
      { q: "Dans le modèle de Le Moigne, le SI fait le lien entre :", choix: ["Les clients et les fournisseurs", "Le système opérant et le système de pilotage", "La comptabilité et la paie", "Le serveur et les postes"], bonne: 1, explication: "Il remonte l'activité et transmet les décisions." },
      { q: "La caractéristique principale d'un ERP est :", choix: ["Une base de données unique pour toutes les fonctions", "Un logiciel de paie", "Un tableur partagé", "Un site web marchand"], bonne: 0, explication: "Intégration des fonctions autour d'une base commune." },
      { q: "La redondance des données dans des fichiers séparés entraîne surtout :", choix: ["Plus de sécurité", "Des incohérences", "Moins de stockage", "Des calculs plus rapides"], bonne: 1, explication: "Une même donnée mise à jour à un endroit et pas à l'autre." },
      { q: "Un SGBD est :", choix: ["Un tableur", "Le logiciel qui crée, met à jour, interroge et protège une base", "Un langage de programmation", "Un réseau"], bonne: 1, explication: "MySQL, Oracle, Access, PostgreSQL…" },
      { q: "La décision d'ouvrir un nouveau dépôt dans une autre région est :", choix: ["Opérationnelle", "Tactique", "Stratégique", "Technique"], bonne: 2, explication: "Long terme, engage l'entreprise." },
      { q: "Au Maroc, la protection des données personnelles relève :", choix: ["De la loi 09-08 et de la CNDP", "Du Code de commerce", "De la loi 17-95", "De Bank Al-Maghrib"], bonne: 0, explication: "Loi de 2009 sur les données à caractère personnel." },
      { q: "Les trois objectifs de sécurité résumés par DIC sont :", choix: ["Données, informations, connaissances", "Disponibilité, intégrité, confidentialité", "Direction, information, contrôle", "Débit, interface, capacité"], bonne: 1, explication: "Triade classique de la sécurité." },
      { q: "Dans la méthode Merise, le modèle conceptuel des données décrit :", choix: ["Les tables d'un SGBD précis", "Ce que l'on veut mémoriser, indépendamment du logiciel", "Les programmes", "Le réseau"], bonne: 1, explication: "Niveau conceptuel, avant le logique et le physique." },
    ],
  },

  2: {
    titre: "Le modèle conceptuel des données (Merise)",
    description: "Méthode Merise : dictionnaire des données, dépendances fonctionnelles, entités, associations, propriétés portées et cardinalités d'un MCD, exercices corrigés.",
    resume: md`
## L'essentiel — Le modèle conceptuel des données

- Point de départ : documents et **règles de gestion** ; chaque règle devient entité, propriété, association ou cardinalité.
- **Dictionnaire des données** : on exclut les données **calculées**, les **synonymes**, on lève les **polysèmes**.
- **DF** $A \rightarrow B$ : à une valeur de A correspond une seule valeur de B ; DF élémentaire et directe (pas de transitivité).
- DF **composée** $(NumCde, RefProd) \rightarrow Qte$ : propriété portée par une association.
- **Entité** : objets de même nature, avec un **identifiant** souligné et des propriétés.
- Chaque propriété : à un seul endroit, une seule valeur par occurrence, dépend de tout l'identifiant.
- **Association** : lien nommé par un verbe, identifiée par les identifiants des entités reliées ; binaire, ternaire ou réflexive.
- **Cardinalités** (min, max) avec min = 0 ou 1, max = 1 ou n, lues de l'entité vers l'association.
- Patte (1,1) ou (0,1) : **CIF** ; maximums n des deux côtés : association **maillée** (plusieurs à plusieurs).
- Les cardinalités se justifient par une règle de gestion.
`,
    exercices: md`
### Exercice 2 — Gestion des formations d'une banque

Une banque de Rabat gère les formations de ses salariés. Un salarié (matricule, nom, agence) peut suivre plusieurs sessions de formation ; une session (numéro, date, thème) accueille au moins un salarié. Pour chaque participation, on enregistre la note obtenue au test final. Chaque session est animée par un seul formateur (code, nom, spécialité) ; un formateur anime plusieurs sessions.

1. Écrivez les dépendances fonctionnelles.
2. Construisez le MCD.

<details><summary>Voir le corrigé</summary>

**1)** $Matricule \rightarrow Nom, Agence$ ; $NumSession \rightarrow DateSession, Theme, CodeFormateur$ ; $CodeFormateur \rightarrow NomFormateur, Specialite$ ; $(Matricule, NumSession) \rightarrow Note$.

**2)** SALARIE (0,n) — SUIVRE [Note] — (1,n) SESSION ; SESSION (1,1) — ANIMER — (1,n) FORMATEUR. La note dépend du couple salarié-session : elle est portée par SUIVRE. Un salarié peut n'avoir suivi aucune formation (0,n) ; une session accueille au moins un salarié (1,n) ; une session a un seul formateur (1,1) ; un formateur anime plusieurs sessions (1,n), ou (0,n) si l'on enregistre des formateurs avant leur première session.

</details>

### Exercice 3 — Trouver les erreurs d'un MCD

Un stagiaire propose pour une pharmacie : entité MEDICAMENT (CodeMed, Nom, Prix, QteVendue, MontantVente, CodeLabo, NomLabo) et entité VENTE (NumVente, DateVente, CodeMed, Qte). Relevez les erreurs et corrigez.

<details><summary>Voir le corrigé</summary>

- **MontantVente** est calculé ($Qte \times Prix$) : à supprimer. **QteVendue** est un cumul calculable à partir des ventes : à supprimer.
- $CodeLabo \rightarrow NomLabo$ : DF transitive dans MEDICAMENT ; il faut une entité LABORATOIRE (CodeLabo, NomLabo) reliée à MEDICAMENT par FABRIQUER, avec (1,1) côté MEDICAMENT et (1,n) côté LABORATOIRE.
- **CodeMed** dans VENTE et une seule Qte : une vente ne pourrait contenir qu'un médicament ; de plus, le lien doit passer par une association. On crée CONCERNER entre VENTE (1,n) et MEDICAMENT (0,n), portant Qte.

</details>
`,
    qcm: [
      { q: "Une donnée calculée, comme le montant d'une ligne de facture :", choix: ["Doit être une entité", "Ne doit pas figurer dans le MCD", "Est un identifiant", "Est une association"], bonne: 1, explication: "Elle se recalcule à la demande." },
      { q: "La notation A → B signifie que :", choix: ["A et B sont égaux", "À une valeur de A correspond une seule valeur de B", "B détermine A", "A et B sont dans deux tables"], bonne: 1, explication: "Dépendance fonctionnelle." },
      { q: "La quantité commandée d'un produit dans une commande dépend :", choix: ["Du numéro de commande seul", "De la référence produit seule", "Du couple commande-produit", "Du client"], bonne: 2, explication: "DF composée, propriété portée par l'association." },
      { q: "L'identifiant d'une entité :", choix: ["Peut prendre deux fois la même valeur", "Distingue chaque occurrence", "Est toujours une date", "Est facultatif"], bonne: 1, explication: "Il est unique pour chaque occurrence." },
      { q: "Une association se nomme en général par :", choix: ["Un nom propre", "Un verbe", "Un nombre", "Une date"], bonne: 1, explication: "PASSER, CONTENIR, LIVRER." },
      { q: "La cardinalité (1,1) du côté COMMANDE dans PASSER signifie :", choix: ["Un client passe une seule commande", "Une commande est passée par un et un seul client", "Une commande contient un produit", "Aucune commande"], bonne: 1, explication: "On lit depuis l'entité." },
      { q: "La cardinalité minimale 0 indique :", choix: ["Une occurrence peut ne participer à aucune association", "Une erreur", "Un identifiant", "Une donnée calculée"], bonne: 0, explication: "Participation facultative." },
      { q: "Deux noms différents pour la même information sont :", choix: ["Des polysèmes", "Des synonymes", "Des identifiants", "Des cardinalités"], bonne: 1, explication: "On n'en garde qu'un." },
      { q: "Une association dont les deux cardinalités maximales valent n est dite :", choix: ["Fonctionnelle", "Maillée (plusieurs à plusieurs)", "Réflexive", "Vide"], bonne: 1, explication: "Elle deviendra une table au niveau logique." },
      { q: "Une association qui relie une entité à elle-même est :", choix: ["Ternaire", "Réflexive", "Maillée", "Interdite"], bonne: 1, explication: "Exemple : un salarié encadre des salariés." },
    ],
  },

  3: {
    titre: "Du MCD au modèle relationnel",
    description: "Passage du MCD aux tables : clés primaires et étrangères, règles de passage des associations, intégrité référentielle, 1FN, 2FN, 3FN, exercices corrigés.",
    resume: md`
## L'essentiel — Du MCD au modèle relationnel

- Relation = table ; attribut = colonne ; tuple = ligne ; domaine = valeurs permises.
- **Clé primaire** : identifie chaque ligne, unique et jamais vide.
- **Clé étrangère** (#) : référence la clé primaire d'une autre table.
- Règle 1 : chaque **entité** devient une table, identifiant = clé primaire.
- Règle 2 : association **(x,1)–(x,n)** : clé étrangère du côté (x,1), pas de table.
- Règle 3 : association **(x,n)–(x,n)** : nouvelle table, clé composée des identifiants, propriétés portées.
- Ternaire : table à clé composée ; réflexive CIF : clé étrangère vers la même table.
- Intégrités : **d'entité** (clé unique non vide), **référentielle** (la clé étrangère existe), **de domaine** (valeurs permises).
- **1FN** : valeurs atomiques ; **2FN** : dépendance de toute la clé ; **3FN** : pas de dépendance transitive.
- Normaliser supprime la redondance et les anomalies de mise à jour.
`,
    exercices: md`
### Exercice 2 — Traduire un MCD scolaire

MCD : ETUDIANT (NumEtu, Nom, Prenom) (0,n) — INSCRIRE [Annee] — (1,n) MODULE (CodeMod, Intitule, Coef) ; MODULE (1,1) — RATTACHER — (1,n) DEPARTEMENT (CodeDep, NomDep) ; ETUDIANT (0,n) — PASSER [Note] — (0,n) MODULE.

Écrivez le schéma relationnel.

<details><summary>Voir le corrigé</summary>

- ETUDIANT (**NumEtu**, Nom, Prenom)
- DEPARTEMENT (**CodeDep**, NomDep)
- MODULE (**CodeMod**, Intitule, Coef, CodeDep#)
- INSCRIRE (**NumEtu#**, **CodeMod#**, Annee)
- PASSER (**NumEtu#**, **CodeMod#**, Note)

RATTACHER est une CIF (clé étrangère CodeDep# dans MODULE) ; INSCRIRE et PASSER sont maillées (deux tables à clé composée). Si un étudiant peut passer le même module plusieurs années, la clé de PASSER doit inclure l'année : (**NumEtu#**, **CodeMod#**, **Annee**).

</details>

### Exercice 3 — Normaliser un relevé de stock

Un magasinier tient la table STOCK (RefArt, Designation, CodeDepot, VilleDepot, Quantite, CodeFournisseur, NomFournisseur), avec pour clé (RefArt, CodeDepot). Chaque article a un seul fournisseur ; chaque dépôt est dans une seule ville.

1. Écrivez les dépendances fonctionnelles.
2. La table est-elle en 2FN ? en 3FN ? Décomposez-la.

<details><summary>Voir le corrigé</summary>

**1)** $(RefArt, CodeDepot) \rightarrow Quantite$ ; $RefArt \rightarrow Designation, CodeFournisseur$ ; $CodeFournisseur \rightarrow NomFournisseur$ ; $CodeDepot \rightarrow VilleDepot$.

**2)** Pas en **2FN** : Designation, CodeFournisseur et NomFournisseur dépendent de RefArt seul, VilleDepot de CodeDepot seul (parties de la clé). Décomposition en 2FN : STOCK (**RefArt**, **CodeDepot**, Quantite), ARTICLE (**RefArt**, Designation, CodeFournisseur, NomFournisseur), DEPOT (**CodeDepot**, VilleDepot). ARTICLE n'est pas en **3FN** ($RefArt \rightarrow CodeFournisseur \rightarrow NomFournisseur$) : on extrait FOURNISSEUR (**CodeFournisseur**, NomFournisseur) et ARTICLE devient (**RefArt**, Designation, CodeFournisseur#).

</details>
`,
    qcm: [
      { q: "Dans le modèle relationnel, une ligne d'une table s'appelle :", choix: ["Un attribut", "Un tuple", "Un domaine", "Une clé"], bonne: 1, explication: "Tuple ou enregistrement." },
      { q: "Une clé primaire :", choix: ["Peut être vide", "Peut se répéter", "Identifie chaque ligne de façon unique", "Est toujours numérique"], bonne: 2, explication: "Unique et non vide." },
      { q: "Une association (1,1)–(0,n) se traduit par :", choix: ["Une nouvelle table", "Une clé étrangère du côté (1,1)", "Une clé étrangère du côté (0,n)", "Rien"], bonne: 1, explication: "La commande connaît son client." },
      { q: "Une association maillée (0,n)–(1,n) se traduit par :", choix: ["Une clé étrangère", "Une table à clé composée", "Une suppression", "Un attribut calculé"], bonne: 1, explication: "Exemple : LIGNE_CDE." },
      { q: "L'intégrité référentielle interdit :", choix: ["Une clé étrangère qui ne correspond à aucune clé primaire", "Deux colonnes de même type", "Les dates", "Les tables vides"], bonne: 0, explication: "La valeur référencée doit exister." },
      { q: "Une table dont une colonne contient plusieurs valeurs viole :", choix: ["La 1FN", "La 2FN", "La 3FN", "L'intégrité de domaine seulement"], bonne: 0, explication: "Attributs atomiques exigés." },
      { q: "Un attribut non clé qui dépend d'une partie de la clé composée viole :", choix: ["La 1FN", "La 2FN", "La 3FN", "Aucune forme"], bonne: 1, explication: "Dépendance partielle." },
      { q: "NumCde → NumCli → NomCli dans une même table viole :", choix: ["La 1FN", "La 2FN", "La 3FN", "L'intégrité d'entité"], bonne: 2, explication: "Dépendance transitive." },
      { q: "Le modèle relationnel a été proposé par :", choix: ["Edgar F. Codd", "Henri Fayol", "Igor Ansoff", "Herbert Simon"], bonne: 0, explication: "En 1970." },
      { q: "Le principal bénéfice de la normalisation est :", choix: ["D'ajouter des colonnes", "De supprimer la redondance et les anomalies de mise à jour", "D'accélérer l'impression", "De crypter les données"], bonne: 1, explication: "Une donnée n'est enregistrée qu'une fois." },
    ],
  },

  4: {
    titre: "SQL : interroger une base de données",
    description: "Requêtes SQL SELECT, WHERE, ORDER BY, DISTINCT, BETWEEN, IN, LIKE, IS NULL, colonnes calculées et jointures sur plusieurs tables, avec exercices corrigés.",
    resume: md`
## L'essentiel — SQL : interroger une base

- Structure : SELECT colonnes FROM tables WHERE conditions ORDER BY colonnes ; (SELECT et FROM obligatoires).
- **Projection** : choisir les colonnes ; DISTINCT supprime les doublons ; SELECT * affiche tout.
- **Restriction** : WHERE avec =, <>, <, >, <=, >=, combinés par AND, OR, NOT (AND avant OR).
- BETWEEN a AND b (bornes comprises), IN (liste), LIKE avec % (plusieurs caractères) et _ (un caractère), IS NULL.
- Textes et dates entre apostrophes ; nombres sans apostrophes ; point décimal (1.2).
- **ORDER BY** col ASC ou DESC, sur une ou plusieurs colonnes.
- Colonne calculée nommée par **AS** : PrixUnit * 1.2 AS PrixTTC.
- **Jointure** : égaler clé étrangère et clé primaire ; n tables, n − 1 conditions de jointure.
- Écriture classique FROM A, B WHERE A.cle = B.cle, ou A INNER JOIN B ON A.cle = B.cle.
- Préfixer les colonnes ambiguës, utiliser des alias ; une jointure oubliée donne un produit cartésien.
`,
    exercices: md`
### Exercice 2 — Requêtes sur la base Atlas Distribution

Écrivez les requêtes qui affichent :
1. la désignation et le stock des produits dont le stock est nul ;
2. les clients de catégorie « Détaillant » ou « GMS » hors de Casablanca ;
3. le numéro, la date et la quantité des commandes contenant de l'eau de Javel (P1), triées par quantité décroissante.

<details><summary>Voir le corrigé</summary>

**1)**
~~~sql
SELECT Designation, QteStock
FROM PRODUIT
WHERE QteStock = 0;
~~~
Résultat : Désinfectant 1 L, 0.

**2)**
~~~sql
SELECT NomCli, VilleCli
FROM CLIENT
WHERE Categorie IN ('Détaillant', 'GMS')
  AND VilleCli <> 'Casablanca';
~~~
Résultat : Droguerie Nour (Rabat), Épicerie Baraka (Tanger).

**3)**
~~~sql
SELECT CO.NumCde, CO.DateCde, L.Qte
FROM COMMANDE CO, LIGNE_CDE L
WHERE CO.NumCde = L.NumCde
  AND L.RefProd = 'P1'
ORDER BY L.Qte DESC;
~~~
Résultat : 101 (40), 103 (25), 106 (10).

</details>

### Exercice 3 — Trouver les erreurs

Corrigez la requête suivante, censée afficher le nom des clients de Rabat qui ont passé une commande en février 2026 :

~~~sql
SELECT NomCli, NumCde
FROM CLIENT, COMMANDE
WHERE VilleCli = Rabat
  AND DateCde BETWEEN '2026-02-01' AND '2026-02-28';
~~~

<details><summary>Voir le corrigé</summary>

Deux erreurs : la **condition de jointure** manque (produit cartésien) et **Rabat** doit être entre apostrophes. Version correcte :

~~~sql
SELECT C.NomCli, CO.NumCde
FROM CLIENT C, COMMANDE CO
WHERE C.NumCli = CO.NumCli
  AND C.VilleCli = 'Rabat'
  AND CO.DateCde BETWEEN '2026-02-01' AND '2026-02-28';
~~~
Résultat : Droguerie Nour, commande 105.

</details>
`,
    qcm: [
      { q: "Quelles clauses sont obligatoires dans une requête d'interrogation ?", choix: ["SELECT et WHERE", "SELECT et FROM", "FROM et ORDER BY", "WHERE et ORDER BY"], bonne: 1, explication: "WHERE et ORDER BY sont facultatives." },
      { q: "Le mot-clé DISTINCT sert à :", choix: ["Trier", "Supprimer les doublons du résultat", "Joindre deux tables", "Compter les lignes"], bonne: 1, explication: "Il s'écrit juste après SELECT." },
      { q: "La condition PrixUnit BETWEEN 30 AND 60 inclut-elle 60 ?", choix: ["Oui, les bornes sont comprises", "Non", "Seulement sous Access", "Seulement pour les dates"], bonne: 0, explication: "BETWEEN inclut les deux bornes." },
      { q: "Dans un motif LIKE, le symbole % remplace :", choix: ["Un seul caractère", "Un nombre quelconque de caractères", "Un chiffre", "Une apostrophe"], bonne: 1, explication: "Le tiret bas remplace un seul caractère." },
      { q: "Pour tester une valeur absente, on écrit :", choix: ["= NULL", "IS NULL", "= 0", "LIKE NULL"], bonne: 1, explication: "Une comparaison avec NULL n'est jamais vraie." },
      { q: "ORDER BY PrixUnit DESC trie :", choix: ["Du plus petit au plus grand prix", "Du plus grand au plus petit prix", "Par ordre alphabétique", "Au hasard"], bonne: 1, explication: "DESC signifie décroissant." },
      { q: "Pour joindre 4 tables, il faut au minimum :", choix: ["1 condition de jointure", "2 conditions", "3 conditions", "4 conditions"], bonne: 2, explication: "n − 1 conditions pour n tables." },
      { q: "Une requête sur deux tables sans condition de jointure donne :", choix: ["Une erreur", "Un produit cartésien", "Une table vide", "Le bon résultat"], bonne: 1, explication: "Toutes les combinaisons de lignes." },
      { q: "Le mot-clé AS sert à :", choix: ["Nommer une colonne ou une table dans la requête", "Supprimer une colonne", "Créer une table", "Trier"], bonne: 0, explication: "Alias." },
      { q: "Dans WHERE A AND B OR C, le SGBD évalue :", choix: ["A AND (B OR C)", "(A AND B) OR C", "A OR B OR C", "Une erreur"], bonne: 1, explication: "AND est prioritaire sur OR." },
    ],
  },

  5: {
    titre: "SQL : calculs, regroupements et sous-requêtes",
    description: "SQL de gestion : COUNT, SUM, AVG, MAX, GROUP BY et HAVING, sous-requêtes IN et NOT IN, jointure externe LEFT JOIN, chiffre d'affaires par client, corrigés.",
    resume: md`
## L'essentiel — Calculs, regroupements, sous-requêtes

- Agrégats : COUNT(*) (lignes), COUNT(col) (valeurs non vides), COUNT(DISTINCT col), SUM, AVG, MIN, MAX.
- Un montant s'agrège : SUM(Qte * PrixUnit), avec la jointure qui amène le prix.
- **GROUP BY** : un résultat par groupe ; toute colonne non agrégée du SELECT est dans le GROUP BY.
- **WHERE** filtre les lignes avant regroupement ; **HAVING** filtre les groupes (conditions sur un agrégat).
- Ordre logique : FROM, WHERE, GROUP BY, HAVING, SELECT, ORDER BY.
- Sous-requête de valeur : WHERE PrixUnit > (SELECT AVG(PrixUnit) FROM PRODUIT) ; jamais d'agrégat directement dans WHERE.
- **IN** (sous-requête) : appartient à la liste ; **NOT IN** : « n'a jamais », « aucun ».
- **LEFT JOIN** : garde toutes les lignes de gauche, NULL sinon ; compter COUNT(col_de_droite).
- Maximum d'un total : sous-requête imbriquée MAX(SUM…), ou tri décroissant et première ligne (LIMIT, TOP).
- Sur la base Atlas : CA total 11 995 DH ; clients sans commande C05 et C06.
`,
    exercices: md`
### Exercice 2 — Statistiques du personnel

Avec la base de la papeterie de Kénitra (SERVICE, SALARIE, ACTION_SOCIALE, chapitre 4), écrivez :
1. l'effectif et le salaire de base moyen de chaque service comptant au moins deux salariés ;
2. les salariés qui n'ont bénéficié d'aucune action sociale ;
3. le montant total des actions sociales de 2026 ;
4. les salariés dont le salaire de base dépasse la moyenne de l'entreprise.

<details><summary>Voir le corrigé</summary>

**1)**
~~~sql
SELECT SV.NomServ, COUNT(*) AS Effectif, AVG(S.SalaireBase) AS SalaireMoyen
FROM SALARIE S, SERVICE SV
WHERE S.CodeServ = SV.CodeServ
GROUP BY SV.NomServ
HAVING COUNT(*) >= 2;
~~~

**2)**
~~~sql
SELECT CodeSal, Nom
FROM SALARIE
WHERE CodeSal NOT IN (SELECT CodeSal FROM ACTION_SOCIALE);
~~~

**3)**
~~~sql
SELECT SUM(Montant) AS Total
FROM ACTION_SOCIALE
WHERE DateAction BETWEEN '2026-01-01' AND '2026-12-31';
~~~

**4)**
~~~sql
SELECT Nom, SalaireBase
FROM SALARIE
WHERE SalaireBase > (SELECT AVG(SalaireBase) FROM SALARIE);
~~~

</details>

### Exercice 3 — Lire le résultat d'une requête

Sans ordinateur, donnez le résultat de cette requête sur la base Atlas Distribution :

~~~sql
SELECT CO.NumCli, COUNT(DISTINCT L.RefProd) AS NbProduits
FROM COMMANDE CO, LIGNE_CDE L
WHERE CO.NumCde = L.NumCde
GROUP BY CO.NumCli;
~~~

<details><summary>Voir le corrigé</summary>

On compte, pour chaque client, les produits **différents** commandés :
- C01 (commandes 101 et 103) : P1, P2, P4, soit **3** (P1 figure dans les deux commandes mais compte une fois) ;
- C02 (105) : P2, soit **1** ;
- C03 (102 et 106) : P2, P3, P1, soit **3** (P3 deux fois, compté une fois) ;
- C04 (104) : P4, P5, soit **2**.
C05 et C06 n'apparaissent pas (aucune commande). Avec COUNT(*), C01 et C03 auraient 4 lignes chacun.

</details>
`,
    qcm: [
      { q: "COUNT avec une étoile en argument compte :", choix: ["Les valeurs non vides d'une colonne", "Les lignes", "Les valeurs différentes", "Les colonnes"], bonne: 1, explication: "Toutes les lignes, vides ou non." },
      { q: "Une condition sur un agrégat, comme SUM(Qte) > 100, se place dans :", choix: ["WHERE", "HAVING", "FROM", "ORDER BY"], bonne: 1, explication: "HAVING filtre les groupes après calcul." },
      { q: "Dans une requête avec GROUP BY VilleCli, on peut afficher :", choix: ["VilleCli et des agrégats", "NomCli sans agrégat", "Toutes les colonnes", "Uniquement des comptages"], bonne: 0, explication: "Les colonnes non agrégées doivent être dans le GROUP BY." },
      { q: "WHERE s'applique :", choix: ["Après le regroupement", "Avant le regroupement, aux lignes", "Uniquement aux agrégats", "Après le tri"], bonne: 1, explication: "Ordre FROM, WHERE, GROUP BY, HAVING." },
      { q: "Pour trouver les clients sans commande, on utilise :", choix: ["Une jointure interne", "NOT IN avec une sous-requête", "ORDER BY", "DISTINCT"], bonne: 1, explication: "Ou une jointure externe." },
      { q: "WHERE PrixUnit > AVG(PrixUnit) est :", choix: ["Correct", "Incorrect : il faut une sous-requête", "Correct seulement sous Access", "Équivalent à HAVING"], bonne: 1, explication: "Pas d'agrégat directement dans WHERE." },
      { q: "LEFT JOIN garde :", choix: ["Seulement les lignes avec correspondance", "Toutes les lignes de la table de gauche", "Toutes les lignes de droite", "Aucune ligne"], bonne: 1, explication: "Jointure externe gauche." },
      { q: "COUNT(DISTINCT RefProd) pour un client qui a commandé trois fois le même produit vaut :", choix: ["0", "1", "3", "Une erreur"], bonne: 1, explication: "Valeurs différentes." },
      { q: "Une sous-requête qui renvoie plusieurs valeurs s'utilise avec :", choix: ["=", "IN", "LIKE", "BETWEEN"], bonne: 1, explication: "= exige une seule valeur." },
      { q: "Le chiffre d'affaires par client s'obtient avec :", choix: ["La somme des quantités multipliées par les prix, groupée par client", "Le nombre de lignes de COMMANDE", "MAX(PrixUnit)", "DISTINCT NumCli"], bonne: 0, explication: "Somme des montants par groupe." },
    ],
  },

  6: {
    titre: "SQL : créer et mettre à jour une base",
    description: "SQL de mise à jour : CREATE TABLE et contraintes, INSERT INTO, UPDATE, DELETE, ALTER, DROP, vues, GRANT et transactions, exemples de gestion et corrigés.",
    resume: md`
## L'essentiel — Créer et mettre à jour une base

- **CREATE TABLE** : colonnes typées (INTEGER, DECIMAL(p,d), VARCHAR(n), DATE) et contraintes.
- Contraintes : PRIMARY KEY, FOREIGN KEY … REFERENCES, NOT NULL, UNIQUE, CHECK, DEFAULT.
- Créer d'abord les tables référencées, puis celles qui les référencent.
- **INSERT INTO** table (colonnes) VALUES (valeurs) ; liste des colonnes obligatoire si l'on n'en donne qu'une partie.
- **UPDATE** table SET col = expression WHERE condition ; l'expression peut utiliser l'ancienne valeur (QteStock - 50).
- **DELETE FROM** table WHERE condition ; sans WHERE, UPDATE et DELETE touchent toutes les lignes.
- Supprimer les lignes « filles » avant la ligne « mère » (intégrité référentielle), sauf ON DELETE CASCADE.
- **ALTER TABLE** ADD / DROP COLUMN ; **DROP TABLE** supprime la table ; DELETE ne la vide que de ses lignes.
- **Vue** : requête nommée, recalculée à chaque appel ; simplifie et protège.
- **GRANT / REVOKE** : droits par utilisateur ; **COMMIT / ROLLBACK** : valider ou annuler une transaction.
`,
    exercices: md`
### Exercice 2 — Le pèlerinage tiré au sort (inspiré du CNAEM ECT 2019)

Dans la base SALARIES (**CodeSal**, Nom, Prenom, NbreEnfant, Anciennete) et ACTION_SOCIALE (**CodeAct**, Nom_Action, Montant, DateAction, CodeSal#), deux salariés de codes Pap207 et Cart08 ont été tirés au sort pour un pèlerinage financé à hauteur de 50 000 DH chacun, à partir du 1er août 2026.

1. Écrivez les ordres d'insertion de ces deux actions (codes A2026-1 et A2026-2).
2. Le montant est finalement porté à 55 000 DH pour les actions de 2026. Écrivez la requête.
3. L'action A2026-2 est annulée. Écrivez la requête de suppression.

<details><summary>Voir le corrigé</summary>

**1)**
~~~sql
INSERT INTO ACTION_SOCIALE (CodeAct, Nom_Action, Montant, DateAction, CodeSal)
VALUES ('A2026-1', 'Pèlerinage', 50000, '2026-08-01', 'Pap207');
INSERT INTO ACTION_SOCIALE (CodeAct, Nom_Action, Montant, DateAction, CodeSal)
VALUES ('A2026-2', 'Pèlerinage', 50000, '2026-08-01', 'Cart08');
~~~
Les codes Pap207 et Cart08 doivent exister dans SALARIES (intégrité référentielle).

**2)**
~~~sql
UPDATE ACTION_SOCIALE
SET Montant = 55000
WHERE Nom_Action = 'Pèlerinage'
  AND DateAction BETWEEN '2026-01-01' AND '2026-12-31';
~~~

**3)**
~~~sql
DELETE FROM ACTION_SOCIALE WHERE CodeAct = 'A2026-2';
~~~

</details>

### Exercice 3 — Créer la table des salariés

Écrivez l'ordre CREATE TABLE de SALARIES, avec : un code de 6 caractères au plus, clé primaire ; un nom obligatoire ; un nombre d'enfants entier, positif ou nul, valant 0 par défaut ; une ancienneté entière positive ou nulle. Ajoutez ensuite une colonne Ville.

<details><summary>Voir le corrigé</summary>

~~~sql
CREATE TABLE SALARIES (
  CodeSal     VARCHAR(6)  PRIMARY KEY,
  Nom         VARCHAR(40) NOT NULL,
  Prenom      VARCHAR(40),
  NbreEnfant  INTEGER     DEFAULT 0 CHECK (NbreEnfant >= 0),
  Anciennete  INTEGER     CHECK (Anciennete >= 0)
);

ALTER TABLE SALARIES ADD Ville VARCHAR(30);
~~~

</details>
`,
    qcm: [
      { q: "Pour ajouter une ligne dans une table, on utilise :", choix: ["UPDATE", "INSERT INTO", "ALTER TABLE", "CREATE"], bonne: 1, explication: "INSERT INTO … VALUES." },
      { q: "UPDATE PRODUIT SET PrixUnit = PrixUnit + 5 sans WHERE :", choix: ["Ne fait rien", "Modifie toutes les lignes", "Modifie la première ligne", "Provoque une erreur"], bonne: 1, explication: "La condition limite les lignes touchées." },
      { q: "DELETE FROM CLIENT sans WHERE :", choix: ["Supprime la table", "Vide la table de toutes ses lignes", "Supprime une colonne", "Est interdit"], bonne: 1, explication: "La structure reste." },
      { q: "DROP TABLE CLIENT :", choix: ["Supprime la table et ses données", "Vide seulement les lignes", "Supprime une colonne", "Crée une copie"], bonne: 0, explication: "La table disparaît." },
      { q: "La contrainte CHECK (PrixUnit > 0) relève de l'intégrité :", choix: ["D'entité", "Référentielle", "De domaine", "Transactionnelle"], bonne: 2, explication: "Valeurs permises." },
      { q: "On ne peut pas supprimer une commande tant qu'elle a des lignes de commande, à cause :", choix: ["De la clé primaire", "De l'intégrité référentielle", "Du type DATE", "D'une vue"], bonne: 1, explication: "Les lignes filles la référencent." },
      { q: "Une vue est :", choix: ["Une copie physique d'une table", "Une requête enregistrée sous un nom", "Un index", "Un utilisateur"], bonne: 1, explication: "Recalculée à chaque appel." },
      { q: "GRANT SELECT ON V_CA_CLIENT TO commercial sert à :", choix: ["Supprimer la vue", "Donner le droit de lire la vue", "Modifier la vue", "Créer un utilisateur"], bonne: 1, explication: "Gestion des droits." },
      { q: "Pour ajouter une colonne à une table existante, on écrit :", choix: ["INSERT COLUMN", "ALTER TABLE … ADD", "UPDATE TABLE", "CREATE COLUMN"], bonne: 1, explication: "Langage de définition." },
      { q: "ROLLBACK permet :", choix: ["De valider une transaction", "D'annuler les modifications d'une transaction", "De trier", "De créer une vue"], bonne: 1, explication: "COMMIT valide, ROLLBACK annule." },
    ],
  },

  7: {
    titre: "Le tableur au service de la gestion",
    description: "Tableur de gestion : références et noms, SI, ET, OU, NB.SI, SOMME.SI.ENS, RECHERCHEV, VPM, VAN, TRI, valeur cible et tableau croisé, exercices corrigés.",
    resume: md`
## L'essentiel — Le tableur au service de la gestion

- Une formule commence par = ; séparateur d'arguments : point-virgule (version française).
- Référence **relative** (se décale à la recopie) ; **absolue** (fixée avec la touche F4) ; **mixte** ; mieux : une cellule **nommée** (TauxTVA).
- =SI(condition; si_vrai; si_faux) ; ET et OU combinent des conditions ; SIERREUR masque les erreurs.
- NB, NBVAL, NB.SI(plage; critère) ; SOMME.SI(plage_critère; critère; plage_somme) ; SOMME.SI.ENS(plage_somme; plage1; critère1; …).
- RECHERCHEV(valeur; table; colonne; FAUX) : correspondance exacte ; VRAI : barème par tranches, première colonne triée.
- RECHERCHEX ou INDEX/EQUIV : recherche dans n'importe quelle colonne.
- =VPM(taux; n; -capital) : annuité constante ; mensualité : taux/12 et n × 12. Exemple : 200 000 DH, 6 %, 5 ans → 47 479,28 DH.
- =VAN(taux; flux1…fluxn) − investissement initial (versé aujourd'hui, hors de la fonction) ; =TRI(I0 négatif et flux).
- Valeur cible : une cellule à ajuster pour atteindre un résultat ; solveur : plusieurs cellules, un objectif, des contraintes.
- Tableau croisé dynamique : somme par ville et par mois (équivalent d'un GROUP BY) ; graphiques adaptés au message.
`,
    exercices: md`
### Exercice 2 — Paie simplifiée

Une feuille de paie contient en B le salaire brut de chaque salarié (lignes 2 à 40), en C son ancienneté en années. Une cellule nommée TauxCNSS contient le taux salarial de la cotisation, et une plage nommée PrimeAnc donne le taux de la prime d'ancienneté selon les tranches du Code du travail : 0 % de 0 à moins de 2 ans, 5 % à partir de 2 ans, 10 % à partir de 5 ans, 15 % à partir de 12 ans, 20 % à partir de 20 ans, 25 % à partir de 25 ans.

1. Écrivez en D2 la formule du taux de prime d'ancienneté.
2. Écrivez en E2 la prime d'ancienneté, calculée sur le salaire de base en B2.
3. Écrivez en F2 une formule qui affiche « Revoir » si le brut augmenté de la prime dépasse 30 000 DH, et « OK » sinon.
4. Comptez les salariés qui ont au moins 5 ans d'ancienneté.

<details><summary>Voir le corrigé</summary>

**1)** <code>=RECHERCHEV(C2; PrimeAnc; 2; VRAI)</code>, avec la plage PrimeAnc à deux colonnes : 0 → 0 %, 2 → 5 %, 5 → 10 %, 12 → 15 %, 20 → 20 %, 25 → 25 % (première colonne triée).

**2)** <code>=B2*D2</code>.

**3)** <code>=SI(B2+E2>30000; "Revoir"; "OK")</code>.

**4)** <code>=NB.SI(C2:C40; ">=5")</code>.

Le taux de la cotisation salariale, placé dans la cellule nommée TauxCNSS, servira au calcul du net sans être répété dans chaque formule.

</details>

### Exercice 3 — Choisir un financement

Une PME de Tanger hésite entre deux crédits pour 600 000 DH : A, 6,5 % sur 5 ans par annuités constantes ; B, 6 % sur 6 ans par annuités constantes.

1. Écrivez les formules des deux annuités et calculez-les.
2. Comparez le coût total des intérêts.

<details><summary>Voir le corrigé</summary>

**1)** A : <code>=VPM(6,5%; 5; -600000)</code>, soit **144 380,72 DH** ; B : <code>=VPM(6%; 6; -600000)</code>, soit **122 017,58 DH**.

**2)** Intérêts A : $5 \times 144\,380{,}72 - 600\,000 = 121\,903{,}60$ DH. Intérêts B : $6 \times 122\,017{,}58 - 600\,000 = 132\,105{,}48$ DH. Le crédit B allège l'annuité de plus de 22 000 DH, mais coûte environ 10 200 DH d'intérêts de plus, car le capital reste dû plus longtemps. Le choix dépend de la trésorerie de l'entreprise.

</details>
`,
    qcm: [
      { q: "Quand on recopie =B2+C2 vers le bas, la formule de la ligne 3 devient :", choix: ["=B2+C2", "=B3+C3", "=C2+D2", "=B3+C2"], bonne: 1, explication: "Références relatives." },
      { q: "Pour qu'un taux de TVA reste fixe dans des formules recopiées, le plus lisible est :", choix: ["De retaper le taux dans chaque formule", "De nommer la cellule du taux", "De fusionner les cellules", "De trier la colonne"], bonne: 1, explication: "Une cellule nommée ne bouge pas à la recopie." },
      { q: "=SI(D2>=20000; \"Grand compte\"; \"Standard\") affiche pour D2 = 20 000 :", choix: ["Standard", "Grand compte", "Une erreur", "20 000"], bonne: 1, explication: "La condition >= est vraie." },
      { q: "Pour faire la somme du chiffre d'affaires d'une seule ville, on utilise :", choix: ["NB.SI", "SOMME.SI", "RECHERCHEV", "VPM"], bonne: 1, explication: "Somme sous condition." },
      { q: "Dans SOMME.SI.ENS, la plage à additionner est placée :", choix: ["En premier", "En dernier", "Au milieu", "Elle est facultative"], bonne: 0, explication: "Contrairement à SOMME.SI." },
      { q: "RECHERCHEV avec le dernier argument VRAI exige que la première colonne soit :", choix: ["Vide", "Triée par ordre croissant", "En texte", "Nommée"], bonne: 1, explication: "Mode barème par tranches." },
      { q: "=VPM(6%; 5; -200000) calcule :", choix: ["Les intérêts de la première année", "L'annuité constante d'un emprunt", "La VAN", "Le capital restant dû"], bonne: 1, explication: "Environ 47 479 DH." },
      { q: "Avec la fonction VAN d'Excel, l'investissement initial versé aujourd'hui :", choix: ["Se met dans la fonction en premier flux", "S'ajoute en dehors de la fonction", "Est ignoré", "Se divise par le taux"], bonne: 1, explication: "La fonction actualise dès la première période." },
      { q: "Pour trouver le prix qui annule le résultat, on utilise :", choix: ["La valeur cible", "Le tri", "Un graphique", "NB.SI"], bonne: 0, explication: "Une cellule à ajuster pour un objectif." },
      { q: "Le tableau croisé dynamique est l'équivalent tableur :", choix: ["D'un INSERT", "D'un regroupement GROUP BY avec agrégat", "D'un DELETE", "D'une clé primaire"], bonne: 1, explication: "Totaux par ligne et colonne." },
    ],
  },

  8: {
    titre: "Algorithmique et programmation en Scilab et Python",
    description: "Algorithmique de gestion en Scilab et Python : tests, boucles pour et tant que, fonctions, vecteurs, tirage au sort, simulation, VAN et TRI en code, corrigés.",
    resume: md`
## L'essentiel — Algorithmique en Scilab et Python

- Algorithme : suite finie d'instructions ; variable = case mémoire nommée ; affectation x = x + 1.
- Tests : if … then … elseif … else … end (Scilab) ; if … elif … else avec deux-points et indentation (Python).
- Comparaisons : == (égal), <> ou ~= en Scilab, != en Python ; et : & ou and ; ou : | ou or.
- Boucle **pour** (nombre de tours connu) : for k = 1:n … end ; for k in range(1, n + 1) (borne supérieure exclue).
- Boucle **tant que** (arrêt sur condition) : while condition … end ; la condition doit finir par devenir fausse.
- Fonction : function r = nom(a, b) … endfunction (Scilab) ; def nom(a, b): … return r (Python).
- Vecteurs : v(1) est le premier élément en Scilab, v[0] en Python ; length(v), len(v), sum, max.
- Initialiser total, compteur et maximum avant la boucle ; tester à la main sur deux ou trois tours.
- Aléatoire : rand() et grand(1, 1, "uin", a, b) en Scilab ; random.random() et random.randint(a, b) en Python.
- Tirage sans doublon : recommencer le second tirage tant qu'il égale le premier ; Monte-Carlo : moyenne de nombreuses simulations.
`,
    exercices: md`
### Exercice 2 — Faire tourner un algorithme à la main

Que contiennent s et n à la fin de ce programme Scilab ?

~~~scilab
s = 0; n = 0;
while s <= 20
  n = n + 1;
  s = s + 2*n;
end
~~~

<details><summary>Voir le corrigé</summary>

| Tour | n | s |
|---|---|---|
| départ | 0 | 0 |
| 1 | 1 | 2 |
| 2 | 2 | 6 |
| 3 | 3 | 12 |
| 4 | 4 | 20 |
| 5 | 5 | 30 |

Après le 4ᵉ tour, s = 20 et la condition s <= 20 est encore vraie : un 5ᵉ tour a lieu. À la fin, **n = 5** et **s = 30**. Le programme cherche le premier n tel que $2 + 4 + \dots + 2n = n(n + 1)$ dépasse 20.

</details>

### Exercice 3 — Prime de fin d'année

Écrivez en Python une fonction prime(ca, objectif) qui renvoie 0 si le chiffre d'affaires est inférieur à l'objectif, 3 % du chiffre d'affaires s'il atteint l'objectif sans le dépasser de plus de 20 %, et 5 % au-delà. Puis écrivez la boucle qui calcule la prime totale d'une équipe dont les chiffres d'affaires sont dans la liste ca = [480000, 610000, 350000] pour un objectif commun de 500 000 DH.

<details><summary>Voir le corrigé</summary>

~~~python
def prime(ca, objectif):
    if ca < objectif:
        return 0
    elif ca <= 1.2 * objectif:
        return 0.03 * ca
    else:
        return 0.05 * ca

ca = [480000, 610000, 350000]
total = 0
for x in ca:
    total = total + prime(x, 500000)
print(total)
~~~

Le premier commercial (480 000) n'a rien ; le deuxième (610 000, au-delà de 600 000) touche 5 %, soit 30 500 DH ; le troisième n'a rien. Total : **30 500 DH**.

</details>
`,
    qcm: [
      { q: "Pour répéter un calcul un nombre de fois connu à l'avance, on utilise :", choix: ["Une boucle pour", "Une boucle tant que obligatoirement", "Un test si", "Une affectation"], bonne: 0, explication: "for k = 1:n en Scilab." },
      { q: "En Python, range(1, 6) produit les entiers :", choix: ["De 1 à 6", "De 1 à 5", "De 0 à 6", "De 0 à 5"], bonne: 1, explication: "La borne supérieure est exclue." },
      { q: "En Scilab, le premier élément d'un vecteur v s'écrit :", choix: ["v(0)", "v(1)", "v[0]", "v[1]"], bonne: 1, explication: "Les indices Scilab commencent à 1." },
      { q: "En Python, le test d'égalité s'écrit :", choix: ["=", "==", "===", "<>"], bonne: 1, explication: "= est l'affectation." },
      { q: "Une boucle tant que dont la condition reste toujours vraie :", choix: ["S'exécute une fois", "Ne s'arrête jamais", "Provoque un arrondi", "Est ignorée"], bonne: 1, explication: "Il faut modifier la variable testée." },
      { q: "grand(1, 1, \"uin\", 1, n) en Scilab renvoie :", choix: ["Un réel entre 0 et 1", "Un entier uniforme entre 1 et n", "La moyenne de n nombres", "Le nombre n"], bonne: 1, explication: "Loi uniforme sur les entiers." },
      { q: "En Scilab, le résultat d'une fonction function r = f(x) est :", choix: ["La dernière ligne affichée", "La valeur de r à la fin de la fonction", "Toujours 0", "Le paramètre x"], bonne: 1, explication: "La variable nommée après function." },
      { q: "Pour tirer deux salariés différents, on peut :", choix: ["Tirer deux fois sans vérifier", "Recommencer le second tirage tant qu'il égale le premier", "Prendre toujours les deux premiers", "Trier le vecteur"], bonne: 1, explication: "Boucle tant que sur le second rang." },
      { q: "Avant de calculer une somme dans une boucle, il faut :", choix: ["Initialiser le total à 0", "Trier les valeurs", "Afficher le total", "Créer une fonction"], bonne: 0, explication: "Sinon le total part d'une valeur inconnue." },
      { q: "La méthode de Monte-Carlo estime une grandeur par :", choix: ["Un calcul exact", "La moyenne d'un grand nombre de simulations", "Une requête SQL", "Un tableau croisé"], bonne: 1, explication: "Loi des grands nombres." },
    ],
  },
};

export default chapitres;
