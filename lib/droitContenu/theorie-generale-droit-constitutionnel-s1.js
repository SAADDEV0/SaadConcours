// Théorie générale du droit constitutionnel (Droit S1, tronc commun) — compléments par chapitre : description SEO, résumé, exercices 2 et 3, QCM.
const md = String.raw;

const chapitres = {
  1: {
    titre: "Le droit constitutionnel : notion, objet et sources",
    description: "Droit constitutionnel : définitions matérielle et formelle, constitutionnalisme, sources écrites et non écrites, Constitution marocaine de 2011.",
    resume: md`
## L'essentiel — Notion et sources du droit constitutionnel

- Objet : organisation de l'État, accès au pouvoir et exercice du pouvoir, droits et libertés.
- **Critère matériel** : toute règle relative aux pouvoirs publics, quelle que soit sa forme.
- **Critère formel** : toute règle inscrite dans la Constitution, adoptée et révisée selon une procédure renforcée.
- Le droit constitutionnel est le tronc du droit public ; la science politique étudie les pratiques du pouvoir, le juriste les règles.
- **Constitutionnalisme** : limiter le pouvoir par une Constitution écrite (Locke, Montesquieu, Rousseau ; États-Unis 1787 ; DDHC 1789, article 16).
- Sources écrites : Constitution et préambule, lois organiques, règlements des assemblées, traités, jurisprudence constitutionnelle.
- Sources non écrites : coutume constitutionnelle, conventions de la Constitution, doctrine.
- Maroc : textes de 1962, 1970, 1972, 1992, 1996 et 2011 ; Constitution du 29 juillet 2011, préambule et 180 articles en 14 titres.
- Article 6 : constitutionnalité, hiérarchie et publicité des normes ; les lois organiques sont contrôlées avant promulgation.
`,
    exercices: md`
### Exercice 2 — Vrai ou faux

1) Le Royaume-Uni n'a aucune règle constitutionnelle. 2) Le préambule de la Constitution marocaine de 2011 a une valeur juridique. 3) Une loi organique peut déroger à la Constitution. 4) Une coutume peut abroger une disposition d'une Constitution écrite. 5) La science politique et le droit constitutionnel ont le même objet mais pas la même méthode.

<details><summary>Voir le corrigé</summary>

1) Faux : il n'a pas de Constitution écrite en un document unique, mais des lois, des coutumes et des conventions constitutionnelles. 2) Vrai : il fait partie intégrante de la Constitution. 3) Faux : elle lui est inférieure et sa conformité est vérifiée par la Cour constitutionnelle avant promulgation. 4) Faux : dans un système de Constitution écrite, la coutume complète ou interprète, elle n'abroge pas. 5) Vrai : tous deux étudient le pouvoir, le juriste à partir des règles, le politiste à partir des pratiques.

</details>

### Exercice 3 — Question de cours rédigée

En une quinzaine de lignes, expliquez pourquoi on dit que le constitutionnalisme est un mouvement de limitation du pouvoir.

<details><summary>Voir le corrigé</summary>

*Introduction* : le constitutionnalisme naît aux XVIIᵉ et XVIIIᵉ siècles contre la monarchie absolue. *Idée 1 — Le pouvoir doit reposer sur le consentement* : pour Locke et Rousseau, le pouvoir vient d'un contrat entre les gouvernés ; une Constitution écrite fixe les termes de ce contrat. *Idée 2 — Le pouvoir doit être divisé* : Montesquieu montre que seul le pouvoir arrête le pouvoir ; la Constitution répartit les fonctions entre organes distincts. *Idée 3 — Les droits doivent être garantis* : l'article 16 de la DDHC de 1789 lie l'existence d'une Constitution à la garantie des droits et à la séparation des pouvoirs. *Conclusion* : le néo-constitutionnalisme prolonge ce mouvement par le contrôle juridictionnel des lois ; au Maroc, la Constitution de 2011 associe un large catalogue de droits (titre II) et une Cour constitutionnelle.

</details>
`,
    qcm: [
      { q: "Selon le critère formel, une règle est constitutionnelle si :", choix: ["Elle porte sur le pouvoir politique", "Elle figure dans le texte de la Constitution", "Elle est ancienne", "Elle est appliquée par le juge administratif"], bonne: 1, explication: "Le critère formel tient à la place de la règle, pas à son objet." },
      { q: "Le mode de scrutin des députés marocains est fixé par :", choix: ["La Constitution elle-même", "Une loi organique", "Un simple arrêté", "La coutume"], bonne: 1, explication: "Il est matériellement constitutionnel sans l'être formellement." },
      { q: "L'article 16 de la Déclaration de 1789 lie la Constitution à :", choix: ["La religion d'État", "La garantie des droits et la séparation des pouvoirs", "Le suffrage censitaire", "La monarchie héréditaire"], bonne: 1, explication: "Sans ces deux éléments, la société n'a point de Constitution." },
      { q: "La Constitution marocaine en vigueur a été approuvée par référendum en :", choix: ["1962", "1996", "2011", "2016"], bonne: 2, explication: "Référendum du 1er juillet 2011, promulgation le 29 juillet 2011." },
      { q: "Le préambule de la Constitution de 2011 :", choix: ["N'a aucune valeur juridique", "Fait partie intégrante de la Constitution", "A une valeur seulement morale", "Peut être modifié par une loi ordinaire"], bonne: 1, explication: "Le texte le dit expressément." },
      { q: "Les lois organiques se situent :", choix: ["Au-dessus de la Constitution", "Entre la Constitution et les lois ordinaires", "Au même rang que les décrets", "Sous les arrêtés ministériels"], bonne: 1, explication: "Elles précisent la Constitution et s'imposent aux lois ordinaires." },
      { q: "Le pays souvent cité pour l'absence de Constitution écrite en un seul document est :", choix: ["Les États-Unis", "Le Royaume-Uni", "La France", "Le Maroc"], bonne: 1, explication: "Ses règles constitutionnelles sont dispersées entre lois, coutumes et conventions." },
      { q: "Une convention de la Constitution est :", choix: ["Un traité international", "Une règle de comportement politique non sanctionnée par un juge", "Une loi organique", "Une décision de la Cour constitutionnelle"], bonne: 1, explication: "Exemple britannique de la nomination du Premier ministre." },
      { q: "L'auteur de De l'esprit des lois (1748) est :", choix: ["Rousseau", "Locke", "Montesquieu", "Hobbes"], bonne: 2, explication: "Il y développe la séparation des pouvoirs." },
      { q: "L'article 5 de la Constitution de 2011 reconnaît comme langues officielles :", choix: ["L'arabe seul", "L'arabe et l'amazighe", "L'arabe et le français", "L'amazighe seul"], bonne: 1, explication: "L'amazighe est langue officielle aux côtés de l'arabe." },
    ],
  },

  2: {
    titre: "L'État : définition et éléments constitutifs",
    description: "L'État en droit constitutionnel : population et nation, territoire, puissance publique souveraine, personnalité juridique et théories de l'origine.",
    resume: md`
## L'essentiel — L'État

- **État** : groupement humain établi sur un territoire et soumis à une autorité politique souveraine (théorie des trois éléments de Jellinek ; Convention de Montevideo, 1933).
- Weber : monopole de la violence physique légitime.
- **Population** : nationaux et étrangers ; la **nation** est une communauté de destin (conception objective allemande, subjective de Renan).
- **Territoire** : terrestre, maritime (mer territoriale de 12 milles), aérien ; frontières pas forcément toutes fixées.
- **Puissance publique souveraine** : souveraineté interne (compétence de la compétence) et externe (égalité des États).
- Bodin (1576) : souveraineté « absolue et perpétuelle » ; aujourd'hui limitée par les traités librement consentis.
- **Personnalité morale** : continuité de l'État, distinction État-gouvernants, capacité de contracter et d'agir en justice.
- Théories de l'origine : théocratique, contractuelle (Hobbes, Locke, Rousseau), de la force, institutionnelle (Hauriou), sociologique (Ibn Khaldoun, *'asabiyya*).
- Reconnaissance internationale : effet déclaratif selon la doctrine dominante.
`,
    exercices: md`
### Exercice 2 — Nation ou population ?

Classez dans la population, dans la nation, ou dans les deux : 1) un ingénieur espagnol installé à Tanger depuis dix ans ; 2) une Marocaine résidant à Bruxelles ; 3) un étudiant marocain de Fès ; 4) un touriste allemand de passage à Marrakech.

<details><summary>Voir le corrigé</summary>

1) Population seulement : il réside au Maroc mais n'a pas la nationalité. 2) Nation (lien de nationalité) mais pas la population résidente ; la Constitution protège ses droits (article 16). 3) Les deux. 4) Ni l'une ni l'autre au sens strict : il n'est pas établi de façon permanente, même s'il est soumis aux lois marocaines pendant son séjour.

</details>

### Exercice 3 — Dissertation : plan détaillé

Proposez un plan en deux parties pour le sujet : « La souveraineté de l'État est-elle encore absolue ? »

<details><summary>Voir le corrigé</summary>

*Introduction* : définition de Bodin (puissance absolue et perpétuelle) ; problématique : l'État moderne conserve-t-il une souveraineté sans limite face au droit international et à l'intégration régionale ?
**I. Une souveraineté qui demeure le critère de l'État** — A. La souveraineté interne : compétence de la compétence, monopole de la contrainte. B. La souveraineté externe : égalité juridique des États (Charte des Nations unies, article 2).
**II. Une souveraineté désormais encadrée** — A. Les limites consenties : traités, conventions de droits de l'homme (primauté des conventions ratifiées affirmée par le préambule de la Constitution de 2011). B. Des limites qui confirment la souveraineté : l'État s'engage parce qu'il est souverain et peut, en principe, dénoncer ses engagements.
*Conclusion* : la souveraineté n'est plus absolue dans son exercice, mais elle reste entière dans son principe.

</details>
`,
    qcm: [
      { q: "La théorie des trois éléments constitutifs de l'État est associée à :", choix: ["Georg Jellinek", "Ernest Renan", "Jean Bodin", "Max Weber"], bonne: 0, explication: "Population, territoire, puissance publique." },
      { q: "Pour Max Weber, l'État se caractérise par :", choix: ["Une religion officielle", "Le monopole de la violence physique légitime", "Un territoire insulaire", "Une monnaie unique"], bonne: 1, explication: "Définition de 1919, Le savant et le politique." },
      { q: "La conception subjective de la nation est celle de :", choix: ["Fichte", "Herder", "Ernest Renan", "Hobbes"], bonne: 2, explication: "La nation comme plébiscite de tous les jours." },
      { q: "La largeur maximale de la mer territoriale est de :", choix: ["3 milles marins", "12 milles marins", "200 milles marins", "50 milles marins"], bonne: 1, explication: "Convention des Nations unies sur le droit de la mer de 1982." },
      { q: "La compétence de la compétence désigne :", choix: ["Le pouvoir du juge de se déclarer compétent", "Le pouvoir de l'État de fixer lui-même l'étendue de ses compétences", "La répartition des compétences entre communes", "Le droit de vote des étrangers"], bonne: 1, explication: "C'est la marque de la souveraineté interne." },
      { q: "Jean Bodin a défini la souveraineté dans :", choix: ["Le Prince", "Les Six Livres de la République", "Le Léviathan", "Du contrat social"], bonne: 1, explication: "Ouvrage publié en 1576." },
      { q: "Le principe de continuité de l'État signifie que :", choix: ["Le même gouvernement reste au pouvoir", "Les engagements de l'État obligent les gouvernements successifs", "La Constitution ne peut pas changer", "Les frontières sont immuables"], bonne: 1, explication: "Il découle de la personnalité morale de l'État." },
      { q: "Selon la doctrine dominante, la reconnaissance d'un État par les autres a un effet :", choix: ["Constitutif", "Déclaratif", "Nul", "Pénal"], bonne: 1, explication: "Elle constate une existence qui ne dépend pas d'elle." },
      { q: "La notion de 'asabiyya est développée par :", choix: ["Ibn Khaldoun", "Ibn Rochd", "Al-Farabi", "Ibn Battouta"], bonne: 0, explication: "Dans la Muqaddima, la cohésion du groupe fonde le pouvoir." },
      { q: "La réforme marocaine de 2007 du Code de la nationalité a permis :", choix: ["La suppression de la nationalité", "La transmission de la nationalité par la mère marocaine", "Le vote des étrangers aux législatives", "La double nationalité obligatoire"], bonne: 1, explication: "Avancée en matière d'égalité entre les parents." },
    ],
  },

  3: {
    titre: "Les formes de l'État",
    description: "Formes de l'État : État unitaire, déconcentration et décentralisation, régionalisation avancée au Maroc, fédéralisme et confédération.",
    resume: md`
## L'essentiel — Les formes de l'État

- Critère : un seul centre de décision politique (État **unitaire**) ou plusieurs (État **composé**).
- **Déconcentration** : agents de l'État nommés (walis, gouverneurs), décisions au nom de l'État, pouvoir hiérarchique.
- **Décentralisation** : collectivités dotées de la personnalité morale, organes élus, autonomie financière, contrôle de légalité.
- Maroc : État unitaire à organisation « décentralisée, fondée sur une régionalisation avancée » (article 1er).
- Titre IX (articles 135 à 146) : régions, préfectures et provinces, communes ; lois organiques 111-14, 112-14, 113-14 (2015) ; 12 régions.
- Principes : libre administration, coopération, solidarité (article 136), subsidiarité (article 140) ; walis et gouverneurs assurent le contrôle administratif (article 145).
- **Fédéralisme** (Scelle) : superposition, autonomie, participation (seconde chambre : Sénat américain, Bundesrat).
- **Confédération** : traité, États souverains, diète, unanimité, droit de retrait.
- Union européenne : structure *sui generis*.
`,
    exercices: md`
### Exercice 2 — Tableau à compléter

Pour l'État fédéral et la confédération, indiquez : l'acte fondateur, le titulaire de la souveraineté, le mode de décision et l'existence d'un droit de sécession.

<details><summary>Voir le corrigé</summary>

| Critère | État fédéral | Confédération |
|---|---|---|
| Acte fondateur | Constitution | Traité |
| Souveraineté | L'État fédéral | Chaque État membre |
| Décision | Majorité | Unanimité en général |
| Sécession | Non, en principe | Oui |

</details>

### Exercice 3 — Commentaire d'article

Commentez brièvement la phrase de l'article 1er de la Constitution de 2011 : « L'organisation territoriale du Royaume est décentralisée, fondée sur une régionalisation avancée. »

<details><summary>Voir le corrigé</summary>

*Sens* : la phrase consacre au niveau constitutionnel le choix de la décentralisation, que les textes précédents laissaient à la loi. *Portée* : les collectivités territoriales (titre IX) sont des personnes morales élues au suffrage universel direct, qui s'administrent librement (article 136) ; la région reçoit une prééminence pour le développement (article 143) et un président élu exécute ses délibérations. *Limite* : l'État reste unitaire : pas de pouvoir législatif régional, contrôle administratif exercé par les walis et gouverneurs (article 145). La régionalisation avancée se situe donc entre la décentralisation classique et le régionalisme politique espagnol ou italien.

</details>
`,
    qcm: [
      { q: "Les walis et gouverneurs au Maroc sont des agents :", choix: ["De la décentralisation", "De la déconcentration", "Élus par les habitants", "Des États fédérés"], bonne: 1, explication: "Ils représentent le pouvoir central (article 145)." },
      { q: "La formule « c'est le même marteau qui frappe, mais on en a raccourci le manche » illustre :", choix: ["La décentralisation", "La déconcentration", "Le fédéralisme", "La confédération"], bonne: 1, explication: "Odilon Barrot décrit la déconcentration." },
      { q: "Une condition de la décentralisation est :", choix: ["La nomination des dirigeants par le ministre", "La personnalité morale de la collectivité", "Un pouvoir législatif local", "L'absence totale de contrôle"], bonne: 1, explication: "S'y ajoutent des organes élus et un contrôle de légalité." },
      { q: "Le nombre de régions au Maroc depuis 2015 est de :", choix: ["16", "12", "10", "14"], bonne: 1, explication: "Le découpage de 2015 a réduit les 16 régions à 12." },
      { q: "La loi organique relative aux régions est la loi :", choix: ["111-14", "113-14", "29-11", "70-03"], bonne: 0, explication: "112-14 pour les préfectures et provinces, 113-14 pour les communes." },
      { q: "Le principe fédéral selon lequel les États fédérés prennent part aux décisions fédérales est :", choix: ["La superposition", "L'autonomie", "La participation", "La subsidiarité"], bonne: 2, explication: "Il s'exprime surtout par une seconde chambre." },
      { q: "Une confédération est créée par :", choix: ["Une Constitution", "Un traité", "Une loi organique", "Un référendum local"], bonne: 1, explication: "Ses membres restent souverains." },
      { q: "Le Bundesrat est la chambre qui représente :", choix: ["Les partis politiques allemands", "Les Länder allemands", "Les syndicats", "Les communes françaises"], bonne: 1, explication: "Illustration du principe de participation." },
      { q: "Le contrôle de l'État sur une collectivité décentralisée est :", choix: ["Un pouvoir hiérarchique", "Un contrôle de légalité prévu par la loi", "Inexistant", "Exercé par les électeurs seulement"], bonne: 1, explication: "Il n'y a pas d'ordres à recevoir, seulement le respect de la loi." },
      { q: "L'Union européenne est généralement qualifiée de :", choix: ["État fédéral", "État unitaire", "Structure sui generis", "Collectivité territoriale"], bonne: 2, explication: "Elle combine des traits confédéraux et fédéraux." },
    ],
  },

  4: {
    titre: "La Constitution : établissement et révision",
    description: "Constitution souple ou rigide, pouvoir constituant originaire et dérivé, modes d'établissement, révision et limites (articles 172 à 175).",
    resume: md`
## L'essentiel — Établissement et révision de la Constitution

- **Souple** : révisable comme une loi ordinaire ; **rigide** : procédure renforcée, condition de la suprématie de la Constitution.
- **Pouvoir constituant originaire** : établit une Constitution nouvelle, inconditionné (Sieyès : pouvoir constituant / pouvoirs constitués).
- Modes d'établissement : octroi, pacte, assemblée constituante, référendum constituant, mode mixte.
- Maroc 2011 : discours du 9 mars, commission Menouni, référendum du 1er juillet 2011 (plus de 98 % de oui selon les résultats officiels).
- **Pouvoir constituant dérivé** : révision, conditionnée par la Constitution.
- Initiative (article 172) : Roi, Chef du gouvernement, Chambre des représentants, Chambre des conseillers.
- Proposition parlementaire : deux tiers des membres de chaque chambre (article 173).
- Adoption : référendum (voie normale) ou congrès à la majorité des deux tiers des membres, sur projet royal après avis du président de la Cour constitutionnelle (article 174).
- Limites de fond (article 175) : religion musulmane, forme monarchique, choix démocratique, acquis en matière de droits et libertés.
`,
    exercices: md`
### Exercice 2 — Souple ou rigide ?

Qualifiez : 1) une Constitution modifiable par une loi votée à la majorité simple ; 2) une Constitution révisable seulement par référendum ; 3) une Constitution révisable par le Parlement à la majorité des trois cinquièmes ; 4) des règles constitutionnelles dispersées dans des lois ordinaires et des coutumes.

<details><summary>Voir le corrigé</summary>

1) Souple : même procédure que la loi. 2) Rigide : intervention obligatoire du peuple. 3) Rigide : majorité qualifiée plus exigeante que pour la loi. 4) Souple et coutumière (modèle britannique) : une loi ordinaire suffit à modifier ces règles.

</details>

### Exercice 3 — Calcul de majorités

Le Parlement marocain réuni en congrès compte 395 représentants et 120 conseillers. Combien de voix faut-il pour adopter un projet de révision par cette voie ? Que se passe-t-il si 340 membres votent pour ?

<details><summary>Voir le corrigé</summary>

Le congrès compte 395 + 120 = 515 membres. Les deux tiers des membres représentent 515 × 2 / 3 = 343,33, soit **344 voix** au minimum. Avec 340 voix, le projet est rejeté, même si les abstentions et les absents sont nombreux : la Constitution vise les membres qui composent le Parlement, pas les suffrages exprimés.

</details>
`,
    qcm: [
      { q: "Une Constitution rigide est une Constitution :", choix: ["Qui ne peut jamais être modifiée", "Dont la révision exige une procédure renforcée", "Qui n'est pas écrite", "Que le juge ne peut pas interpréter"], bonne: 1, explication: "La rigidité fonde sa supériorité sur la loi." },
      { q: "La distinction entre pouvoir constituant et pouvoirs constitués est due à :", choix: ["Montesquieu", "Sieyès", "Bodin", "Locke"], bonne: 1, explication: "Qu'est-ce que le tiers état ?, 1789." },
      { q: "Le pouvoir constituant originaire est :", choix: ["Conditionné par la Constitution en vigueur", "En principe inconditionné", "Exercé uniquement par le juge", "Limité aux lois organiques"], bonne: 1, explication: "Il établit une Constitution nouvelle." },
      { q: "La commission consultative de révision de la Constitution de 2011 était présidée par :", choix: ["Abdeltif Menouni", "Abderrahmane Youssoufi", "Driss Jettou", "Abbas El Fassi"], bonne: 0, explication: "Elle a préparé le texte soumis au référendum." },
      { q: "N'a pas l'initiative de la révision selon l'article 172 :", choix: ["Le Roi", "Le Chef du gouvernement", "La Cour constitutionnelle", "La Chambre des conseillers"], bonne: 2, explication: "La Cour donne seulement un avis et contrôle la procédure du congrès." },
      { q: "Une proposition de révision émanant de parlementaires doit être adoptée dans chaque chambre à la majorité :", choix: ["Simple", "Absolue des suffrages exprimés", "Des deux tiers des membres", "Des trois quarts des membres"], bonne: 2, explication: "Article 173." },
      { q: "La voie du congrès pour réviser la Constitution suppose :", choix: ["Une proposition des députés", "Un projet soumis par le Roi après avis du président de la Cour constitutionnelle", "Une pétition citoyenne", "Un vote à la majorité simple"], bonne: 1, explication: "Article 174, adoption aux deux tiers des membres." },
      { q: "L'article 175 interdit toute révision portant notamment sur :", choix: ["Le nombre de régions", "La forme monarchique de l'État", "Le mode de scrutin", "La durée du mandat des députés"], bonne: 1, explication: "Ainsi que la religion musulmane, le choix démocratique et les acquis en matière de droits." },
      { q: "La Constitution des États-Unis a été rédigée par :", choix: ["Un référendum", "La Convention de Philadelphie", "Le roi d'Angleterre", "Le Congrès actuel"], bonne: 1, explication: "Assemblée constituante de 1787." },
      { q: "Une Constitution octroyée est :", choix: ["Adoptée par une assemblée élue", "Concédée par le monarque", "Approuvée par référendum", "Imposée par un traité"], bonne: 1, explication: "Exemple : la Charte française de 1814." },
    ],
  },

  5: {
    titre: "Le contrôle de constitutionnalité",
    description: "Contrôle de constitutionnalité : pyramide de Kelsen, modèles américain et européen, Cour constitutionnelle marocaine, saisine et exception (article 133).",
    resume: md`
## L'essentiel — Le contrôle de constitutionnalité

- Kelsen : hiérarchie des normes ; le contrôle prolonge la rigidité de la Constitution (article 6 : principe de constitutionnalité).
- Contrôle **politique** (peu efficace) ou **juridictionnel** (modèle dominant).
- **Modèle américain** : diffus, par voie d'exception, effets inter partes (*Marbury v. Madison*, 1803).
- **Modèle européen** : concentré, Cour constitutionnelle (Autriche, 1920), effets erga omnes.
- Maroc : Chambre constitutionnelle (1962), Conseil constitutionnel (1992, installé en 1994), Cour constitutionnelle (2011, installée en 2017, loi organique 066-13).
- Composition (article 130) : 12 membres, 9 ans non renouvelables ; 6 désignés par le Roi, 3 élus par chaque chambre aux deux tiers ; renouvellement par tiers tous les 3 ans.
- Contrôle obligatoire : lois organiques et règlements des chambres ; facultatif : lois ordinaires.
- Saisine des lois ordinaires : Roi, Chef du gouvernement, présidents des chambres, un cinquième des députés, 40 conseillers ; délai d'un mois (8 jours en urgence).
- Article 133 : exception d'inconstitutionnalité au cours d'un procès (droits et libertés) ; article 134 : non-promulgation ou abrogation à la date fixée, aucun recours.
`,
    exercices: md`
### Exercice 2 — Classer les techniques

Qualifiez chaque mécanisme selon le moment, la saisine et l'organe : 1) le contrôle des lois organiques par la Cour constitutionnelle marocaine ; 2) un juge américain de première instance qui écarte une loi dans un litige ; 3) l'exception d'inconstitutionnalité de l'article 133.

<details><summary>Voir le corrigé</summary>

1) A priori, saisine automatique (obligatoire), organe concentré, effets erga omnes. 2) A posteriori, par voie d'exception, contrôle diffus, effets inter partes (la Cour suprême unifie ensuite). 3) A posteriori, par voie d'exception soulevée par un justiciable, mais contrôle concentré : seule la Cour constitutionnelle juge, et sa décision abroge la disposition pour tous.

</details>

### Exercice 3 — Calcul des seuils

La Chambre des représentants compte 395 membres et la Chambre des conseillers 120. Quel est le nombre minimal de signataires pour saisir la Cour d'une loi ordinaire dans chaque chambre ? Pourquoi la Constitution n'a-t-elle pas retenu la même proportion pour les conseillers ?

<details><summary>Voir le corrigé</summary>

Députés : un cinquième de 395 = 79 signataires. Conseillers : 40 membres, soit un tiers des 120 conseillers. Le seuil est fixé en nombre et non en proportion pour la seconde chambre ; il est proportionnellement plus exigeant. Cette différence traduit la place prééminente de la Chambre des représentants, seule élue au suffrage universel direct et seule à investir le gouvernement.

</details>
`,
    qcm: [
      { q: "La représentation de l'ordre juridique en pyramide est due à :", choix: ["Hans Kelsen", "Carl Schmitt", "Maurice Hauriou", "Léon Duguit"], bonne: 0, explication: "Chaque norme tire sa validité de la norme supérieure." },
      { q: "L'arrêt Marbury v. Madison (1803) fonde :", choix: ["Le modèle européen de contrôle", "Le contrôle diffus par les juges américains", "Le contrôle politique par le Sénat", "L'exception d'inconstitutionnalité marocaine"], bonne: 1, explication: "La Cour suprême s'y reconnaît le pouvoir d'écarter une loi." },
      { q: "La première Cour constitutionnelle spécialisée est créée par la Constitution :", choix: ["Américaine de 1787", "Autrichienne de 1920", "Française de 1958", "Marocaine de 1962"], bonne: 1, explication: "Sous l'inspiration de Kelsen." },
      { q: "La Cour constitutionnelle marocaine compte :", choix: ["9 membres", "12 membres", "15 membres", "6 membres"], bonne: 1, explication: "Article 130." },
      { q: "Le mandat des membres de la Cour constitutionnelle est de :", choix: ["6 ans renouvelables", "9 ans non renouvelables", "5 ans", "À vie"], bonne: 1, explication: "Renouvellement par tiers tous les trois ans." },
      { q: "Le contrôle de constitutionnalité des lois organiques est :", choix: ["Facultatif", "Obligatoire avant promulgation", "Impossible", "Exercé par le tribunal administratif"], bonne: 1, explication: "Article 132, alinéa 1." },
      { q: "Pour saisir la Cour d'une loi ordinaire, il faut au moins :", choix: ["Un dixième des députés", "Un cinquième des députés", "La moitié des députés", "Dix députés"], bonne: 1, explication: "Ou quarante membres de la Chambre des conseillers." },
      { q: "En cas d'urgence demandée par le gouvernement, la Cour statue en :", choix: ["24 heures", "8 jours", "15 jours", "3 mois"], bonne: 1, explication: "Le délai normal est d'un mois." },
      { q: "L'exception d'inconstitutionnalité de l'article 133 est soulevée :", choix: ["Par le Roi seulement", "Par une partie au cours d'un procès", "Par les présidents des chambres avant promulgation", "Par la Cour des comptes"], bonne: 1, explication: "Elle vise une loi qui porterait atteinte aux droits et libertés." },
      { q: "Les décisions de la Cour constitutionnelle :", choix: ["Peuvent faire l'objet d'un appel", "Ne sont susceptibles d'aucun recours", "Sont de simples avis", "Ne lient pas les juges"], bonne: 1, explication: "Elles s'imposent à tous les pouvoirs publics (article 134)." },
    ],
  },

  6: {
    titre: "La souveraineté et ses modes d'exercice",
    description: "Souveraineté nationale et populaire, mandat représentatif, démocratie directe, représentative et semi-directe, suffrage et scrutin au Maroc.",
    resume: md`
## L'essentiel — Souveraineté et modes d'exercice

- **Souveraineté nationale** (Sieyès) : la nation, entité abstraite ; représentation, mandat représentatif, électorat-fonction.
- **Souveraineté populaire** (Rousseau) : le peuple, somme des citoyens ; démocratie directe, mandat impératif, électorat-droit.
- Article 2 : la souveraineté appartient à la nation, exercée directement par référendum et indirectement par ses représentants.
- Article 60 : mandat d'origine nationale, droit de vote personnel des parlementaires ; mandat impératif écarté.
- Démocratie directe (Athènes, Landsgemeinde) ; représentative (élections libres, sincères et transparentes, article 11) ; semi-directe.
- Maroc : référendum (article 174), motions législatives (article 14, loi organique 64-14), pétitions (article 15, loi organique 44-14 ; article 139 au niveau local).
- Suffrage universel, égal, secret, libre, personnel ; direct (Chambre des représentants) ou indirect (Chambre des conseillers) ; vote à 18 ans (article 30).
- Modes de scrutin : majoritaire à un ou deux tours, représentation proportionnelle.
- Maroc : scrutin de liste proportionnel au plus fort reste ; depuis 2021, quotient calculé sur les inscrits et seuil supprimé.
`,
    exercices: md`
### Exercice 2 — Nationale ou populaire ?

Rattachez chaque règle à la souveraineté nationale ou populaire : 1) les électeurs peuvent révoquer leur député en cours de mandat ; 2) le député représente toute la nation ; 3) seuls les contribuables qui paient un impôt minimal votent ; 4) les lois importantes sont soumises au référendum ; 5) tout citoyen majeur a le droit de vote.

<details><summary>Voir le corrigé</summary>

1) Populaire (mandat impératif, révocation). 2) Nationale (mandat représentatif). 3) Nationale (électorat-fonction, suffrage censitaire possible). 4) Populaire (intervention directe du peuple). 5) Populaire (électorat-droit, suffrage universel), même si les régimes de souveraineté nationale l'ont aussi adopté.

</details>

### Exercice 3 — Plus fort reste avec 5 sièges

Une circonscription élit 5 députés ; 120 000 suffrages exprimés : liste A 50 000, B 37 000, C 21 000, D 12 000. Répartissez les sièges au plus fort reste (quotient sur les suffrages exprimés, sans seuil).

<details><summary>Voir le corrigé</summary>

Quotient = 120 000 / 5 = 24 000. Au quotient : A 2 sièges (reste 50 000 − 48 000 = 2 000), B 1 siège (reste 13 000), C 0 (reste 21 000), D 0 (reste 12 000). Trois sièges sont pourvus ; les deux restants vont aux plus forts restes : C (21 000) puis B (13 000). Résultat : **A 2, B 2, C 1, D 0**, soit 5 sièges.

</details>
`,
    qcm: [
      { q: "La théorie de la souveraineté nationale est associée à :", choix: ["Rousseau", "Sieyès", "Bodin", "Hobbes"], bonne: 1, explication: "La nation s'exprime par ses représentants." },
      { q: "Le mandat impératif découle logiquement de :", choix: ["La souveraineté nationale", "La souveraineté populaire", "La monarchie absolue", "Le fédéralisme"], bonne: 1, explication: "L'élu est le mandataire de ses électeurs." },
      { q: "Selon l'article 2 de la Constitution, la souveraineté appartient :", choix: ["Au gouvernement", "À la nation", "Au Parlement", "Aux partis politiques"], bonne: 1, explication: "Elle s'exerce par référendum et par des représentants." },
      { q: "La Landsgemeinde est un exemple de :", choix: ["Démocratie directe", "Monarchie parlementaire", "Suffrage censitaire", "Confédération"], bonne: 0, explication: "Assemblée de citoyens dans deux cantons suisses." },
      { q: "Le droit pour des citoyens de présenter une proposition de loi au Parlement marocain est prévu par :", choix: ["L'article 14", "L'article 47", "L'article 175", "L'article 130"], bonne: 0, explication: "Motions en matière législative, loi organique 64-14." },
      { q: "Le suffrage censitaire réserve le vote :", choix: ["Aux diplômés", "À ceux qui paient un impôt minimal", "Aux hommes seulement", "Aux fonctionnaires"], bonne: 1, explication: "Le cens est un seuil d'impôt." },
      { q: "La Chambre des conseillers est élue au suffrage :", choix: ["Universel direct", "Indirect", "Censitaire", "Par tirage au sort"], bonne: 1, explication: "Par les élus locaux, chambres professionnelles et représentants des salariés." },
      { q: "Le scrutin majoritaire uninominal à un tour favorise surtout :", choix: ["Le multipartisme", "Le bipartisme", "Les coalitions de dix partis", "La démocratie directe"], bonne: 1, explication: "Exemple britannique." },
      { q: "Depuis 2021, le quotient électoral pour la Chambre des représentants est calculé sur :", choix: ["Les suffrages exprimés", "Les électeurs inscrits", "La population totale", "Les votants"], bonne: 1, explication: "La réforme favorise les petites listes." },
      { q: "Avec un quotient de 25 000 voix, une liste de 42 000 voix obtient au quotient :", choix: ["0 siège", "1 siège", "2 sièges", "3 sièges"], bonne: 1, explication: "42 000 / 25 000 = 1,68 ; partie entière 1, reste 17 000." },
    ],
  },

  7: {
    titre: "La séparation des pouvoirs et les régimes politiques",
    description: "Séparation des pouvoirs selon Montesquieu, régime parlementaire, régime présidentiel, régimes mixtes et régime politique marocain de 2011.",
    resume: md`
## L'essentiel — Séparation des pouvoirs et régimes

- Montesquieu (1748) : « le pouvoir arrête le pouvoir » ; trois fonctions confiées à des organes distincts, avec une « faculté d'empêcher ».
- **Séparation souple** → régime parlementaire ; **séparation stricte** → régime présidentiel.
- **Parlementaire** : exécutif bicéphale, responsabilité du gouvernement (censure, confiance), dissolution, collaboration ; dualiste ou moniste ; rationalisé après 1945.
- **Présidentiel** (États-Unis) : exécutif monocéphale, ni censure ni dissolution, checks and balances (veto, approbation du Sénat).
- Régimes mixtes : semi-présidentiel (France), régime d'assemblée (Convention), directorial (Suisse).
- Maroc, article 1er : monarchie constitutionnelle, démocratique, parlementaire et sociale ; séparation, équilibre et collaboration des pouvoirs.
- Chef du gouvernement nommé dans le parti arrivé en tête (article 47) ; investiture à la majorité absolue des membres (article 88).
- Motion de censure : un cinquième des membres pour la déposer, majorité absolue des membres pour l'adopter (article 105) ; question de confiance (article 103).
- Roi : Chef de l'État et arbitre suprême (article 42), Commandeur des croyants (article 41), préside le conseil des ministres (article 48), droit de dissolution (article 51).
`,
    exercices: md`
### Exercice 2 — Quel régime ?

Identifiez le régime : 1) le président, élu au suffrage universel, ne peut pas dissoudre l'assemblée et ne peut pas être renversé par elle ; 2) un exécutif de sept membres élus par l'assemblée pour quatre ans, non renversable ; 3) le gouvernement doit démissionner si la chambre basse adopte une motion de censure ; le chef de l'État peut dissoudre cette chambre ; 4) l'assemblée nomme et révoque à tout moment les membres de l'exécutif.

<details><summary>Voir le corrigé</summary>

1) Régime présidentiel (séparation stricte, indépendance organique). 2) Régime directorial (modèle suisse). 3) Régime parlementaire (responsabilité et dissolution). 4) Régime d'assemblée (confusion des pouvoirs au profit de l'assemblée).

</details>

### Exercice 3 — Investiture du gouvernement

Après les élections, le Chef du gouvernement présente son programme à la Chambre des représentants (395 membres). 205 députés votent pour, 150 contre, 40 sont absents. Le gouvernement est-il investi ?

<details><summary>Voir le corrigé</summary>

L'article 88 exige la majorité absolue des **membres** composant la Chambre : 395 / 2 = 197,5, soit 198 voix. Avec 205 voix, le gouvernement est **investi**. S'il n'avait obtenu que 195 voix, il ne l'aurait pas été, même avec une majorité des votants.

</details>
`,
    qcm: [
      { q: "La formule « le pouvoir arrête le pouvoir » est de :", choix: ["Rousseau", "Montesquieu", "Locke", "Sieyès"], bonne: 1, explication: "De l'esprit des lois, livre XI." },
      { q: "Le régime parlementaire repose sur :", choix: ["Une séparation stricte des pouvoirs", "Une séparation souple et la responsabilité du gouvernement", "La confusion des pouvoirs", "L'absence de Parlement"], bonne: 1, explication: "Censure et dissolution s'équilibrent." },
      { q: "Dans le régime présidentiel américain, le président :", choix: ["Peut dissoudre le Congrès", "Ne peut pas être renversé pour des raisons politiques", "Est responsable devant la Chambre", "Est élu par le Sénat"], bonne: 1, explication: "L'impeachment ne sanctionne que des infractions graves." },
      { q: "Le régime semi-présidentiel associe :", choix: ["Un président élu au suffrage direct et un gouvernement responsable devant le Parlement", "Un exécutif collégial et une assemblée", "Un roi absolu et un conseil", "Un président sans pouvoirs"], bonne: 0, explication: "Exemple de la France depuis 1962." },
      { q: "Le Conseil fédéral suisse illustre le régime :", choix: ["Présidentiel", "Directorial", "D'assemblée", "Parlementaire moniste"], bonne: 1, explication: "Exécutif collégial non renversable." },
      { q: "L'article 47 prévoit que le Chef du gouvernement est nommé :", choix: ["Parmi les membres de la Cour constitutionnelle", "Au sein du parti arrivé en tête des élections de la Chambre des représentants", "Par la Chambre des conseillers", "Au suffrage universel direct"], bonne: 1, explication: "Innovation de la Constitution de 2011." },
      { q: "La motion de censure marocaine est adoptée à la majorité :", choix: ["Simple des votants", "Absolue des membres de la Chambre des représentants", "Des deux tiers des membres", "Des présents"], bonne: 1, explication: "Article 105." },
      { q: "L'adoption d'une motion de censure entraîne :", choix: ["La dissolution du Parlement", "La démission collective du gouvernement", "La révision de la Constitution", "Un référendum"], bonne: 1, explication: "Article 105." },
      { q: "Le parlementarisme rationalisé vise à :", choix: ["Multiplier les crises ministérielles", "Encadrer la responsabilité du gouvernement pour assurer sa stabilité", "Supprimer le Parlement", "Supprimer le chef de l'État"], bonne: 1, explication: "Majorités qualifiées, délais, censure constructive." },
      { q: "Selon l'article 42, le Roi est notamment :", choix: ["Chef du gouvernement", "Arbitre suprême entre les institutions", "Président de la Chambre des représentants", "Président de la Cour constitutionnelle"], bonne: 1, explication: "Il est aussi Chef de l'État et garant de la continuité de l'État." },
    ],
  },
};

export default chapitres;
