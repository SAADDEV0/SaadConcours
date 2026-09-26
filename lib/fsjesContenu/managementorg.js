// Management des organisations (S3) — compléments par chapitre : description SEO, résumé, exercices 2 et 3, QCM.
const md = String.raw;

const chapitres = {
  1: {
    titre: "L'organisation et le management : notions de base",
    description: "Organisation selon Barnard, formelle et informelle, typologie d'Etzioni, fonctions PODC, niveaux de management, efficacité et efficience, cas corrigés.",
    resume: md`
## L'essentiel — Organisation et management

- Trois sens du mot **organisation** : entité (groupe structuré), action (organiser), état (agencement obtenu).
- **Barnard** (1938) : système d'activités consciemment coordonnées de deux personnes ou plus ; il faut communication, volonté de coopérer et but commun ; l'autorité repose sur l'**acceptation** des subordonnés.
- **Organisation formelle** (organigramme, procédures, autorité du poste) et **informelle** (affinités, normes du groupe, leader informel) coexistent ; l'informel peut aider ou freiner.
- **Etzioni** (1961) : organisations coercitives (engagement aliénant), utilitaires (calculateur), normatives (moral).
- **Management** : fixer des objectifs, affecter des ressources et faire agir les autres ; quatre fonctions **PODC** (planifier, organiser, diriger, contrôler), héritées du POCCC de Fayol.
- Trois niveaux : **stratégique** (long terme), **intermédiaire** (programmes et budgets), **opérationnel** (quotidien).
- Performance : efficacité $= \dfrac{\text{résultats}}{\text{objectifs}}$, efficience $= \dfrac{\text{résultats}}{\text{moyens}}$, pertinence $= \dfrac{\text{moyens}}{\text{objectifs}}$ (triangle de Gibert).
- **Management public** : intérêt général, légalité, multiples parties prenantes ; Constitution 2011 (art. 154 à 160), loi 55-19 sur la simplification des procédures.
`,
    exercices: md`
### Exercice 2 — Un centre de formation à Kénitra

Un centre de formation professionnelle s'était fixé l'objectif de former 300 stagiaires avec un budget de 900 000 DH. Il en a formé 330 et a dépensé 1 056 000 DH. Six mois après la formation, 198 stagiaires ont trouvé un emploi.

1. Calculez l'efficacité du centre et le coût par stagiaire prévu et réel.
2. Le centre est-il efficace ? efficient ? Justifiez.
3. Calculez le taux d'insertion. Quel indicateur un ministère de tutelle devrait-il privilégier ?

<details><summary>Voir le corrigé</summary>

1. Efficacité $= \dfrac{330}{300} = 110\,\%$. Coût prévu $= \dfrac{900\,000}{300} = 3\,000$ DH ; coût réel $= \dfrac{1\,056\,000}{330} = 3\,200$ DH.
2. Le centre est **efficace** (objectif dépassé) mais **moins efficient** que prévu : chaque stagiaire coûte 200 DH de plus, soit $+6{,}7\,\%$.
3. Taux d'insertion $= \dfrac{198}{330} = 60\,\%$. Le nombre de stagiaires formés mesure une activité ; l'insertion mesure le **résultat** réellement attendu par la collectivité. Un management public orienté résultats suivra les deux, mais jugera surtout l'insertion et le coût par stagiaire inséré ($\dfrac{1\,056\,000}{198} \approx 5\,333$ DH).

</details>

### Exercice 3 — À quel niveau de management ?

Dans le groupe de distribution Hypermarchés Atlas, classez chaque décision au niveau stratégique, intermédiaire ou opérationnel : a) ouvrir cinq magasins de proximité à Agadir et Marrakech ; b) fixer le budget publicitaire de la région Nord pour l'année ; c) répartir les caissières entre les caisses le samedi matin ; d) nouer un partenariat avec un groupe logistique étranger ; e) choisir les promotions du mois pour le rayon frais d'un magasin ; f) définir les objectifs de chiffre d'affaires de chaque directeur de magasin.

<details><summary>Voir le corrigé</summary>

- **Stratégique** : a) (nouveau format et implantation, engagement de long terme) et d) (alliance qui engage le groupe).
- **Intermédiaire** : b) et f) (traduction de la stratégie en budgets et objectifs annuels par région ou par magasin).
- **Opérationnel** : c) et e) (décisions quotidiennes ou mensuelles, répétitives, prises au plus près du terrain).

Critères utilisés : horizon de temps, montant engagé, caractère réversible et fréquence de la décision.

</details>
`,
    qcm: [
      { q: "Selon Barnard (1938), une organisation suppose notamment :", choix: ["Un capital social minimum", "Une volonté de coopérer et un but commun", "Au moins dix salariés", "Une activité marchande"], bonne: 1, explication: "Barnard retient la communication, la volonté de coopérer et le but commun." },
      { q: "Chez Barnard, l'autorité d'un ordre dépend surtout :", choix: ["Du grade de celui qui l'émet", "De son acceptation par celui qui le reçoit", "Du règlement intérieur", "Du salaire versé"], bonne: 1, explication: "C'est la théorie de l'acceptation de l'autorité." },
      { q: "Un leader reconnu par ses collègues sans aucun poste hiérarchique relève de :", choix: ["L'organisation formelle", "L'organisation informelle", "La technostructure", "La ligne hiérarchique"], bonne: 1, explication: "Son influence vient des relations, pas du poste." },
      { q: "Dans la typologie d'Etzioni, une association humanitaire est une organisation :", choix: ["Coercitive", "Utilitaire", "Normative", "Bureaucratique"], bonne: 2, explication: "Les membres adhèrent à des valeurs : engagement moral." },
      { q: "L'efficience rapporte les résultats obtenus :", choix: ["Aux objectifs", "Aux moyens consommés", "Aux concurrents", "Aux parties prenantes"], bonne: 1, explication: "L'efficacité, elle, compare les résultats aux objectifs." },
      { q: "Objectif 500 dossiers, 450 traités. L'efficacité est de :", choix: ["90 %", "111 %", "45 %", "50 %"], bonne: 0, explication: "450 divisé par 500." },
      { q: "Les quatre fonctions du management notées PODC sont :", choix: ["Produire, organiser, distribuer, compter", "Planifier, organiser, diriger, contrôler", "Prévoir, ordonner, décider, coordonner", "Piloter, observer, déléguer, corriger"], bonne: 1, explication: "Elles reprennent et regroupent le POCCC de Fayol." },
      { q: "Traduire la stratégie en programmes et budgets annuels relève du niveau :", choix: ["Stratégique", "Intermédiaire", "Opérationnel", "Informel"], bonne: 1, explication: "C'est le rôle des cadres intermédiaires." },
      { q: "La pertinence rapproche :", choix: ["Les moyens et les objectifs", "Les résultats et les moyens", "Les résultats et les objectifs", "Les coûts et les prix"], bonne: 0, explication: "Les moyens choisis étaient-ils adaptés à l'objectif ?" },
      { q: "Les principes de qualité et de reddition des comptes des services publics marocains figurent dans :", choix: ["Le Code du travail", "La Constitution de 2011", "La loi 17-95", "Le Code général des impôts"], bonne: 1, explication: "Articles 154 à 160, titre consacré à la bonne gouvernance." },
    ],
  },

  2: {
    titre: "L'école classique : Taylor, Fayol et Weber",
    description: "École classique : OST de Taylor, fordisme, POCCC et 14 principes de Fayol, bureaucratie de Weber, critiques de Merton et Crozier, cas corrigés.",
    resume: md`
## L'essentiel — L'école classique

- Postulats communs : **one best way**, organisation-machine, **homo economicus**, coordination par l'autorité et la règle.
- **Taylor**, *Principles of Scientific Management* (1911) : lutte contre la **flânerie systématique** ; étude scientifique des tâches (chronométrage), division **verticale** (conception / exécution) et **horizontale** (tâches parcellaires), sélection et formation, **salaire aux pièces différentiel**, contremaîtres fonctionnels.
- **Ford** : chaîne de montage mobile (1913), standardisation (Ford T), salaire de cinq dollars par jour (1914) ; production et consommation de masse.
- **Fayol**, *Administration industrielle et générale* (1916) : six fonctions (technique, commerciale, financière, sécurité, comptable, administrative) ; administrer = **POCCC** ; 14 principes dont **unité de commandement** (contre Taylor), unité de direction, passerelle.
- **Weber**, *Économie et société* (1921-1922) : autorité traditionnelle, charismatique, **légale-rationnelle** ; **bureaucratie** idéal-type : règles écrites, hiérarchie, compétence, séparation fonction / personne, carrière, écrit.
- Critiques : **Merton** (1940) ritualisme et déplacement des buts ; **Crozier** (1963) cercle vicieux bureaucratique ; oubli du facteur humain et de l'environnement.
- Taylor et Fayol s'opposent sur l'**unité de commandement** ; Taylor observe l'atelier, Fayol la direction, Weber l'organisation et la société.
- Héritage : néo-taylorisme des centres d'appels, de la restauration rapide et des usines de câblage.
`,
    exercices: md`
### Exercice 2 — Qui a dit quoi ?

Attribuez chaque idée à Taylor, Ford, Fayol ou Weber : a) séparer le bureau des méthodes et l'atelier ; b) un agent ne doit recevoir d'ordres que d'un seul chef ; c) l'obéissance repose sur des règles impersonnelles et la compétence ; d) la pièce vient à l'ouvrier sur une chaîne mobile ; e) administrer, c'est prévoir, organiser, commander, coordonner et contrôler ; f) le poste n'appartient pas à celui qui l'occupe ; g) payer davantage l'ouvrier qui atteint la norme de temps ; h) doubler les salaires pour réduire la rotation du personnel.

<details><summary>Voir le corrigé</summary>

a) Taylor (division verticale). b) Fayol (unité de commandement). c) Weber (autorité légale-rationnelle). d) Ford (chaîne de montage, 1913). e) Fayol (POCCC). f) Weber (séparation fonction / personne). g) Taylor (salaire différentiel). h) Ford (cinq dollars par jour, 1914).

</details>

### Exercice 3 — Un service d'état civil

Dans l'annexe administrative d'une commune, un usager doit revenir trois fois pour une copie d'acte : il manque à chaque fois un document que l'agent n'avait pas signalé la fois précédente. Les agents répondent : « c'est la procédure ». Le chef de service, lui, ajoute une nouvelle note interne après chaque plainte.

1. Quels traits de la bureaucratie wébérienne retrouve-t-on ?
2. Quelles dysfonctions sont illustrées ?
3. Proposez des solutions cohérentes avec l'esprit de la loi 55-19 sur la simplification des procédures administratives.

<details><summary>Voir le corrigé</summary>

1. Règles écrites et impersonnelles, division du travail entre agents, hiérarchie (chef de service), écrit (notes internes).
2. **Ritualisme** et **déplacement des buts** (Merton) : la procédure passe avant le service rendu. Le chef de service qui ajoute une note à chaque plainte alimente le **cercle vicieux bureaucratique** (Crozier) : plus de règles, plus de rigidité.
3. Publier la liste complète et opposable des pièces demandées ; interdire d'exiger un document non prévu ; remettre un récépissé ; supprimer les pièces que l'administration détient déjà ; donner aux agents une marge d'appréciation encadrée pour les cas simples. L'objectif redevient le service à l'usager.

</details>
`,
    qcm: [
      { q: "La flânerie systématique observée par Taylor désigne :", choix: ["L'absentéisme des cadres", "Le ralentissement volontaire de la cadence par les ouvriers", "Les pauses légales", "Le manque de machines"], bonne: 1, explication: "Les ouvriers craignaient une hausse des normes ou des licenciements." },
      { q: "La division verticale du travail sépare :", choix: ["Les ateliers entre eux", "La conception et l'exécution", "Les équipes de jour et de nuit", "Les cadres et les actionnaires"], bonne: 1, explication: "Le bureau des méthodes conçoit, l'atelier exécute." },
      { q: "La chaîne de montage mobile est introduite en 1913 par :", choix: ["Taylor", "Fayol", "Ford", "Weber"], bonne: 2, explication: "Usine de Highland Park, Ford T." },
      { q: "Pour Fayol, la fonction administrative consiste à :", choix: ["Tenir les comptes", "Prévoir, organiser, commander, coordonner et contrôler", "Vendre et acheter", "Protéger les biens"], bonne: 1, explication: "C'est le POCCC." },
      { q: "Le principe de Fayol qui s'oppose aux contremaîtres fonctionnels de Taylor est :", choix: ["L'unité de direction", "L'unité de commandement", "L'ordre", "L'équité"], bonne: 1, explication: "Un agent ne doit avoir qu'un seul chef." },
      { q: "Selon Weber, l'autorité fondée sur les qualités exceptionnelles d'une personne est :", choix: ["Traditionnelle", "Charismatique", "Légale-rationnelle", "Bureaucratique"], bonne: 1, explication: "Elle repose sur la reconnaissance d'un don personnel." },
      { q: "Parmi ces traits, lequel n'appartient pas à la bureaucratie wébérienne ?", choix: ["Recrutement sur la compétence", "Règles écrites", "Poste transmis par héritage", "Hiérarchie des fonctions"], bonne: 2, explication: "La fonction est séparée de la personne." },
      { q: "Le ritualisme décrit par Merton consiste à :", choix: ["Créer des fêtes d'entreprise", "Faire du respect de la règle un but en soi", "Supprimer les procédures", "Décentraliser les décisions"], bonne: 1, explication: "C'est le déplacement des buts." },
      { q: "Le cercle vicieux bureaucratique a été analysé par :", choix: ["Mayo", "Crozier", "Drucker", "Ford"], bonne: 1, explication: "Le Phénomène bureaucratique, 1963." },
      { q: "L'école classique considère l'homme au travail comme motivé surtout par :", choix: ["La reconnaissance", "L'argent", "L'appartenance au groupe", "L'accomplissement de soi"], bonne: 1, explication: "C'est le postulat de l'homo economicus." },
    ],
  },

  3: {
    titre: "L'école des relations humaines",
    description: "École des relations humaines : expériences de Hawthorne, styles de Lewin, besoins de Maslow, deux facteurs de Herzberg, théories X et Y, Likert, Argyris.",
    resume: md`
## L'essentiel — L'école des relations humaines

- Contexte : absentéisme, rotation et conflits dans les usines tayloriennes ; l'**homo economicus** cède la place à l'**homme social**. Précurseure : **Follett** (pouvoir « avec », résolution intégrative des conflits).
- **Mayo**, Hawthorne (1924-1932, Western Electric) : éclairage, salle des relais, entretiens, salle de câblage ; **effet Hawthorne**, groupe informel avec ses normes, importance de la supervision et de la reconnaissance.
- **Lewin**, Lippitt et White (1939) : styles autoritaire, démocratique, laisser-faire ; le démocratique maintient l'activité en l'absence du chef ; la décision de groupe change durablement les comportements.
- **Maslow** (1943) : physiologiques, sécurité, appartenance, estime, accomplissement ; un besoin satisfait ne motive plus.
- **Herzberg** (1959) : facteurs d'**hygiène** (salaire, conditions, relations) évitent l'insatisfaction ; facteurs **moteurs** (accomplissement, reconnaissance, responsabilité) motivent ; **enrichissement** vertical des tâches.
- **McGregor** (1960) : théorie **X** (contrainte) et théorie **Y** (autocontrôle) ; prophéties autoréalisatrices.
- **Likert** (1961) : quatre systèmes, du autoritaire exploiteur au **participatif** ; groupes qui se recouvrent. **Argyris** (1957) : incongruence entre personnalité adulte et organisation formelle.
- Limites : méthodologie de Hawthorne, lien satisfaction-productivité non prouvé, risque de manipulation, conflits et pouvoir sous-estimés.
`,
    exercices: md`
### Exercice 2 — Hygiène ou moteur ?

Classez chaque élément selon Herzberg : a) une augmentation de salaire de 5 % ; b) la responsabilité d'un nouveau client important ; c) la climatisation de l'atelier ; d) les félicitations du directeur en réunion ; e) une mutuelle santé ; f) la possibilité de passer chef d'équipe ; g) de bonnes relations avec les collègues ; h) un travail varié qui a du sens. Puis expliquez pourquoi une hausse de salaire ne suffit pas à motiver durablement.

<details><summary>Voir le corrigé</summary>

**Hygiène** : a, c, e, g. **Moteurs** : b, d, f, h.

Le salaire est un facteur d'hygiène : s'il est jugé insuffisant, il crée de l'insatisfaction ; une hausse la supprime, mais l'effet s'estompe vite et ne suscite pas d'engagement durable. La motivation vient du contenu du travail et de la reconnaissance.

</details>

### Exercice 3 — Deux chefs d'atelier

À l'usine de conserves de poisson Sardina (Agadir), M. Bennani fixe seul les objectifs, contrôle chaque poste et sanctionne les retards. Mme Alaoui réunit son équipe chaque lundi, fait proposer des améliorations et laisse aux ouvrières le soin d'organiser les rotations entre postes. Lorsque les deux chefs partent une semaine en formation, la production de l'équipe de M. Bennani baisse de 18 %, celle de Mme Alaoui reste stable.

1. Identifiez le style de chaque chef selon Lewin et selon McGregor.
2. Expliquez l'écart observé pendant leur absence.
3. À quel système de Likert correspond chaque style ?

<details><summary>Voir le corrigé</summary>

1. M. Bennani : style **autoritaire** (Lewin), **théorie X** (McGregor). Mme Alaoui : style **démocratique**, **théorie Y**.
2. Lewin avait observé exactement ce phénomène : sous un chef autoritaire, le groupe produit sous contrainte et relâche l'effort dès que la contrainte disparaît ; sous un chef démocratique, le groupe s'est approprié les objectifs et s'organise seul.
3. M. Bennani : système **autoritaire exploiteur** (ou paternaliste s'il se montre bienveillant). Mme Alaoui : système **participatif** (système 4), celui que Likert associe aux meilleures performances.

</details>
`,
    qcm: [
      { q: "Les expériences de Hawthorne se sont déroulées dans une usine de :", choix: ["General Motors", "Western Electric", "Ford", "Renault"], bonne: 1, explication: "Près de Chicago, entre 1924 et 1932." },
      { q: "L'effet Hawthorne désigne :", choix: ["La baisse de production due au bruit", "L'amélioration des résultats due à l'attention portée aux personnes", "L'effet de l'éclairage sur la fatigue", "La hausse des salaires"], bonne: 1, explication: "Se sentir observé et considéré modifie le comportement." },
      { q: "Dans la salle de câblage de Hawthorne, les chercheurs découvrent :", choix: ["Que le salaire explique tout", "Que le groupe fixe sa propre norme de production", "Que l'éclairage est décisif", "Que les ouvriers veulent travailler seuls"], bonne: 1, explication: "C'est l'organisation informelle." },
      { q: "Selon Lewin, le style qui maintient l'activité du groupe en l'absence du chef est :", choix: ["Autoritaire", "Démocratique", "Laisser-faire", "Paternaliste"], bonne: 1, explication: "Le groupe s'est approprié les objectifs." },
      { q: "Chez Maslow, le besoin situé juste au-dessus de la sécurité est :", choix: ["L'estime", "L'appartenance", "L'accomplissement", "Le besoin physiologique"], bonne: 1, explication: "Physiologiques, sécurité, appartenance, estime, accomplissement." },
      { q: "Pour Herzberg, le salaire est un facteur :", choix: ["Moteur", "D'hygiène", "D'accomplissement", "Neutre"], bonne: 1, explication: "Il évite l'insatisfaction sans motiver durablement." },
      { q: "Ajouter à un poste des responsabilités et le contrôle de son propre travail, c'est :", choix: ["L'élargissement des tâches", "L'enrichissement des tâches", "La rotation des postes", "La standardisation"], bonne: 1, explication: "Enrichissement vertical selon Herzberg." },
      { q: "La théorie Y de McGregor suppose que le salarié :", choix: ["Fuit les responsabilités", "Peut se diriger lui-même s'il adhère aux objectifs", "Ne travaille que sous la menace", "Cherche uniquement la sécurité"], bonne: 1, explication: "D'où la délégation et la participation." },
      { q: "Likert associe les meilleures performances au système :", choix: ["Autoritaire exploiteur", "Autoritaire paternaliste", "Consultatif", "Participatif"], bonne: 3, explication: "Système 4, fondé sur la participation des groupes." },
      { q: "Argyris parle d'incongruence entre :", choix: ["Les salaires et les prix", "La personnalité adulte et les exigences de l'organisation formelle", "La stratégie et la structure", "Les actionnaires et les dirigeants"], bonne: 1, explication: "L'organisation classique traite le salarié comme un enfant." },
    ],
  },

  4: {
    titre: "La décision et le pouvoir dans l'organisation",
    description: "Décision et pouvoir : rationalité limitée et modèle IMC de Simon, coalition de Cyert et March, modèle de la poubelle, zones d'incertitude de Crozier.",
    resume: md`
## L'essentiel — Décision et pouvoir

- Décisions **programmées** (répétitives, procédure) ou **non programmées** (nouvelles) ; en certitude, risque (probabilités connues) ou incertitude.
- **Simon** (1947, Nobel 1978) : **rationalité limitée** (information, temps, capacités de calcul) ; recherche d'une solution **satisfaisante** et non optimale ; niveau d'aspiration ajustable.
- Modèle **IMC** : intelligence (identifier le problème), modélisation (concevoir des solutions), choix, puis évaluation ; allers-retours fréquents.
- **March et Simon** (1958) : l'organisation fournit des programmes et découpe les problèmes.
- **Cyert et March** (1963) : l'entreprise est une **coalition** ; quasi-résolution des conflits, évitement de l'incertitude, recherche problémistique, apprentissage ; **slack organisationnel**.
- **Cohen, March et Olsen** (1972) : **modèle de la poubelle** dans les anarchies organisées ; rencontre de problèmes, solutions, participants et occasions de choix.
- **Crozier et Friedberg**, *L'Acteur et le système* (1977) : acteur stratégique, marge de liberté, pouvoir = relation fondée sur la maîtrise d'une **zone d'incertitude**.
- Quatre sources : expertise, relations avec l'environnement (**marginal-sécant**), maîtrise de l'information, utilisation des règles ; **système d'action concret**.
`,
    exercices: md`
### Exercice 2 — Les phases du modèle IMC

Une agence de voyages de Marrakech perd des clients depuis six mois. Classez dans l'ordre du modèle IMC les étapes suivantes : a) la directrice retient la création d'un site de réservation en ligne ; b) une étude montre que 60 % des clients perdus réservent désormais sur internet ; c) l'équipe imagine trois solutions : baisser les prix, créer un site, se spécialiser dans le tourisme d'affaires ; d) un an après, on mesure la part des réservations en ligne et le nombre de clients revenus.

<details><summary>Voir le corrigé</summary>

1. **Intelligence** : b) (identification et formulation du problème).
2. **Modélisation** : c) (conception des solutions possibles).
3. **Choix** : a).
4. **Évaluation** : d).

Si l'évaluation montre que le site n'attire pas assez de clients, l'agence reviendra à la phase d'intelligence : le processus est itératif.

</details>

### Exercice 3 — Qui a du pouvoir à l'hôpital ?

Dans un hôpital régional, le directeur est nommé par le ministère. Le seul cardiologue de la région refuse les gardes du week-end ; la responsable du service informatique est la seule à maîtriser le logiciel de facturation ; le chef du bureau des entrées connaît parfaitement les procédures de prise en charge par l'AMO et les applique plus ou moins vite selon les services ; un médecin, élu municipal, obtient régulièrement des équipements pour son service.

1. Identifiez la source de pouvoir de chaque acteur.
2. Pourquoi le directeur, pourtant au sommet de la hiérarchie, a-t-il du mal à imposer les gardes au cardiologue ?

<details><summary>Voir le corrigé</summary>

1. Cardiologue : **expertise** rare. Responsable informatique : **expertise** et **maîtrise de l'information** (facturation). Chef du bureau des entrées : **utilisation des règles**. Médecin élu : **relations avec l'environnement** (marginal-sécant entre l'hôpital et la commune).
2. Le pouvoir n'est pas l'autorité : le cardiologue maîtrise une zone d'incertitude **essentielle** et difficile à remplacer (pénurie de spécialistes). S'il partait, le service s'arrêterait. La relation de pouvoir est donc déséquilibrée en sa faveur, malgré sa position hiérarchique. Le directeur doit négocier (contreparties, recrutement d'un second cardiologue, convention avec une clinique).

</details>
`,
    qcm: [
      { q: "Selon Simon, le décideur recherche en pratique :", choix: ["La solution optimale", "La première solution satisfaisante", "La solution la moins chère", "La solution imposée par la loi"], bonne: 1, explication: "C'est le satisficing, conséquence de la rationalité limitée." },
      { q: "Dans le modèle IMC, la lettre M désigne :", choix: ["Motivation", "Modélisation ou conception des solutions", "Mesure", "Management"], bonne: 1, explication: "Intelligence, Modélisation, Choix." },
      { q: "Une décision répétitive traitée par une procédure est dite :", choix: ["Stratégique", "Programmée", "Non programmée", "Incertaine"], bonne: 1, explication: "Distinction de Simon." },
      { q: "Pour Cyert et March, l'entreprise est :", choix: ["Un acteur unique maximisant le profit", "Une coalition aux objectifs négociés", "Une machine", "Un marché"], bonne: 1, explication: "A Behavioral Theory of the Firm, 1963." },
      { q: "Le slack organisationnel désigne :", choix: ["Une grève", "Des ressources excédentaires qui satisfont les membres et amortissent les chocs", "Un déficit budgétaire", "Un retard de production"], bonne: 1, explication: "Notion de Cyert et March." },
      { q: "Le modèle de la poubelle a été proposé pour décrire surtout :", choix: ["Les usines à la chaîne", "Les anarchies organisées comme les universités", "Les banques", "Les administrations fiscales"], bonne: 1, explication: "Objectifs flous, technologie mal connue, participation fluctuante." },
      { q: "Chez Crozier et Friedberg, le pouvoir est d'abord :", choix: ["Un grade", "Une relation liée à la maîtrise d'une zone d'incertitude", "Un droit de propriété", "Un salaire élevé"], bonne: 1, explication: "L'Acteur et le système, 1977." },
      { q: "Un acteur qui appartient à plusieurs systèmes et fait le lien entre eux est appelé :", choix: ["Leader informel", "Marginal-sécant", "Technostructure", "Agent"], bonne: 1, explication: "Il tire son pouvoir de ses relations avec l'environnement." },
      { q: "Dans l'usine étudiée par Crozier en 1963, le pouvoir des ouvriers d'entretien venait :", choix: ["De leur ancienneté", "De la maîtrise des pannes des machines", "De leur syndicat", "De leur salaire"], bonne: 1, explication: "C'était la seule incertitude non couverte par les règles." },
      { q: "Le système d'action concret désigne :", choix: ["L'organigramme officiel", "L'ensemble réel des jeux entre acteurs et de leurs règles implicites", "Le système d'information", "Le plan stratégique"], bonne: 1, explication: "L'organisation telle qu'elle fonctionne vraiment." },
    ],
  },

  5: {
    titre: "L'approche systémique et la théorie de la contingence",
    description: "Approche systémique et contingence : système ouvert, modèle de Le Moigne, sociotechnique, Burns et Stalker, Woodward, Lawrence et Lorsch, Chandler.",
    resume: md`
## L'essentiel — Systémique et contingence

- **Von Bertalanffy** (théorie générale des systèmes) et **Wiener** (cybernétique, 1948) : l'organisation est un **système ouvert**.
- Système (de Rosnay, 1975) : éléments en interaction dynamique organisés en fonction d'un but ; propriétés : finalité, totalité (synergie), ouverture, **rétroaction** négative (régulation) ou positive (amplification), homéostasie, **équifinalité**.
- **Katz et Kahn** (1966) : entropie négative. **Le Moigne** (1977) : systèmes de **pilotage**, d'**information**, **opérant**.
- **Tavistock** (Trist et Bamforth, 1951) : optimisation conjointe des systèmes technique et social ; groupes semi-autonomes (Volvo Kalmar, 1974).
- Contingence : pas de one best way. **Burns et Stalker** (1961) : mécaniste (environnement stable) / organique (instable).
- **Woodward** (1965) : technologie unitaire, de masse (mécaniste), processus continu (nombreux niveaux).
- **Lawrence et Lorsch** (1967) : **différenciation** et **intégration**, toutes deux fortes en environnement incertain.
- **Chandler** (1962) : la structure suit la stratégie ; diversification → multidivisionnelle. **Aston** : la taille accroît spécialisation et formalisation. Critique : **Child** (1972), choix stratégique.
`,
    exercices: md`
### Exercice 2 — Quel facteur, quel auteur ?

Pour chaque situation, indiquez le facteur de contingence en jeu et l'auteur à mobiliser : a) une banque qui passe de 300 à 3 000 salariés multiplie les procédures écrites ; b) un groupe agroalimentaire qui se diversifie dans l'eau minérale et les biscuits crée une division par activité ; c) une entreprise de jeux vidéo supprime ses échelons intermédiaires face à des marchés imprévisibles ; d) un fabricant d'électroménager en grande série standardise tous ses postes ; e) un laboratoire pharmaceutique crée des chefs de projet pour coordonner recherche, production et marketing.

<details><summary>Voir le corrigé</summary>

a) Taille — groupe d'**Aston**. b) Stratégie de diversification — **Chandler**. c) Environnement instable — **Burns et Stalker** (structure organique). d) Technologie de masse — **Woodward**. e) Environnement incertain exigeant différenciation et intégration — **Lawrence et Lorsch** (les chefs de projet sont un mécanisme d'intégration).

</details>

### Exercice 3 — Rétroactions dans un restaurant

Un restaurant de Tanger suit chaque semaine le nombre de couverts et les avis en ligne. 1) Quand les avis signalent une attente trop longue, le gérant ajoute un serveur le week-end et les délais redeviennent normaux. 2) Un article élogieux dans un guide attire des clients, dont les photos partagées attirent d'autres clients, jusqu'à la saturation. 3) Un concurrent réussit en proposant une carte courte et bon marché, alors que le restaurant réussit avec une carte gastronomique.

Nommez la propriété systémique illustrée par chaque situation.

<details><summary>Voir le corrigé</summary>

1) **Rétroaction négative** : l'écart est corrigé, le système revient à l'équilibre (homéostasie). 2) **Rétroaction positive** : le mouvement s'amplifie jusqu'à une limite (saturation). 3) **Équifinalité** : deux chemins différents mènent au même but (rentabilité, fidélisation).

</details>
`,
    qcm: [
      { q: "La théorie générale des systèmes est associée à :", choix: ["Taylor", "Von Bertalanffy", "Weber", "Drucker"], bonne: 1, explication: "Biologiste, fondateur de la théorie générale des systèmes." },
      { q: "L'équifinalité signifie que :", choix: ["Tous les services ont le même objectif", "Un même but peut être atteint par des chemins différents", "Le système revient toujours à l'équilibre", "La structure suit la stratégie"], bonne: 1, explication: "Il n'y a pas de chemin unique." },
      { q: "Une rétroaction négative a pour effet de :", choix: ["Amplifier un écart", "Corriger un écart et stabiliser le système", "Supprimer l'environnement", "Augmenter l'entropie"], bonne: 1, explication: "Comme un thermostat ou un contrôle budgétaire." },
      { q: "Selon Le Moigne, le sous-système qui transforme les entrées en sorties est :", choix: ["Le système de pilotage", "Le système d'information", "Le système opérant", "Le système social"], bonne: 2, explication: "Production, services rendus." },
      { q: "L'approche sociotechnique est née des travaux du Tavistock Institute sur :", choix: ["Les usines automobiles", "Les mines de charbon britanniques", "Les banques", "Les universités"], bonne: 1, explication: "Trist et Bamforth, 1951." },
      { q: "Pour Burns et Stalker, une structure organique convient à un environnement :", choix: ["Stable", "Instable et innovant", "Réglementé", "Monopolistique"], bonne: 1, explication: "Elle favorise la communication latérale et l'adaptation." },
      { q: "Woodward a montré l'influence sur la structure de :", choix: ["La taille", "La technologie de production", "La culture nationale", "L'âge du dirigeant"], bonne: 1, explication: "Production unitaire, de masse, en continu." },
      { q: "Chez Lawrence et Lorsch, l'intégration désigne :", choix: ["La fusion de deux entreprises", "La qualité de la coordination entre départements différenciés", "Le recrutement de nouveaux salariés", "L'intégration verticale"], bonne: 1, explication: "Elle complète la différenciation." },
      { q: "La formule « la structure suit la stratégie » est de :", choix: ["Chandler", "Mintzberg", "Fayol", "Woodward"], bonne: 0, explication: "Strategy and Structure, 1962." },
      { q: "La critique de la contingence par Child (1972) repose sur l'idée de :", choix: ["Rationalité limitée", "Choix stratégique des dirigeants", "Bureaucratie", "Motivation"], bonne: 1, explication: "L'environnement n'impose pas mécaniquement la structure." },
    ],
  },

  6: {
    titre: "Les nouvelles théories des organisations",
    description: "Nouvelles théories des organisations : coûts de transaction (Coase, Williamson), agence, droits de propriété, parties prenantes, isomorphisme, ressources.",
    resume: md`
## L'essentiel — Les nouvelles théories

- **Coase** (1937) : l'entreprise existe car le recours au marché a un coût (recherche, négociation, contrat, contrôle).
- **Williamson** (1975, 1985) : rationalité limitée + **opportunisme** ; attributs : **spécificité des actifs**, incertitude, fréquence ; marché, **hiérarchie** ou forme **hybride** ; arbitrage faire ou faire faire.
- **Jensen et Meckling** (1976) : relation **principal / agent**, divergence d'intérêts et asymétrie d'information ; **sélection adverse** (avant le contrat), **aléa moral** (après).
- Coûts d'agence : **surveillance**, **obligation** (dédouanement), **perte résiduelle** ; gouvernance : conseil, audit, commissaire aux comptes (loi 17-95), AMMC, rémunération incitative.
- **Alchian et Demsetz** (1972) : production en équipe, tire-au-flanc, contrôleur titulaire du revenu résiduel ; usus, fructus, abusus.
- **Freeman** (1984) : parties prenantes primaires et secondaires ; pouvoir, légitimité, urgence (Mitchell, Agle et Wood) ; gouvernance actionnariale ou partenariale ; Label RSE de la CGEM.
- **Meyer et Rowan** (1977) : mythes rationnels, découplage ; **DiMaggio et Powell** (1983) : isomorphisme **coercitif**, **mimétique**, **normatif**.
- **Ressources** : Penrose, Wernerfelt, Barney (VRIN), compétences clés (Hamel et Prahalad).
`,
    exercices: md`
### Exercice 2 — Sélection adverse ou aléa moral ?

Classez chaque situation : a) un candidat au poste de directeur financier exagère son expérience lors de l'entretien ; b) un directeur d'agence bancaire accorde des crédits risqués pour atteindre son objectif de volume ; c) un assureur ne sait pas quels conducteurs sont prudents au moment de fixer la prime ; d) un salarié en télétravail réduit son effort, sachant qu'il n'est pas observé ; e) un dirigeant achète un avion d'affaires surtout pour son prestige.

<details><summary>Voir le corrigé</summary>

**Sélection adverse** (information cachée avant le contrat) : a) et c). **Aléa moral** (action cachée après le contrat) : b), d) et e). Dans b) et e), le dirigeant utilise sa marge de décision à son profit plutôt qu'à celui du principal.

</details>

### Exercice 3 — Faire ou faire faire ?

Pour chaque activité, recommandez marché, forme hybride ou hiérarchie selon Williamson : a) le nettoyage des bureaux d'une compagnie d'assurance à Rabat ; b) la fabrication d'un moule unique, conçu pour un seul modèle de pièce, par un sous-traitant d'un constructeur automobile ; c) le développement du logiciel qui porte le savoir-faire principal d'une fintech ; d) la fourniture régulière d'emballages personnalisés à une marque de biscuits.

<details><summary>Voir le corrigé</summary>

a) **Marché** : actif non spécifique, nombreux prestataires. b) **Hiérarchie** ou contrat de long terme très protecteur : actif très spécifique (le moule ne sert à rien ailleurs), risque de hold-up. c) **Hiérarchie** : compétence spécifique et stratégique, forte incertitude, risque de fuite du savoir-faire. d) **Forme hybride** : spécificité moyenne (impression à la marque) et fréquence élevée, d'où un contrat d'approvisionnement pluriannuel avec cahier des charges.

</details>
`,
    qcm: [
      { q: "Selon Coase (1937), l'entreprise existe parce que :", choix: ["Le marché est interdit", "Le recours au marché a un coût", "L'État l'impose", "Les salariés le demandent"], bonne: 1, explication: "The Nature of the Firm." },
      { q: "Chez Williamson, l'opportunisme désigne :", choix: ["La capacité à saisir les occasions de marché", "La recherche de l'intérêt personnel avec ruse", "La rationalité parfaite", "La coopération spontanée"], bonne: 1, explication: "Hypothèse comportementale associée à la rationalité limitée." },
      { q: "Plus la spécificité des actifs est forte, plus Williamson conseille :", choix: ["Le marché spot", "L'internalisation ou un contrat protecteur", "La vente de l'actif", "La sous-traitance ponctuelle"], bonne: 1, explication: "Pour éviter d'être pris en otage par le partenaire." },
      { q: "Dans la relation d'agence entre actionnaires et dirigeant, le principal est :", choix: ["Le dirigeant", "L'actionnaire", "Le salarié", "Le client"], bonne: 1, explication: "Il délègue un pouvoir de décision à l'agent." },
      { q: "L'aléa moral intervient :", choix: ["Avant la signature du contrat", "Après la signature du contrat", "Uniquement dans les assurances", "Seulement dans le secteur public"], bonne: 1, explication: "Il s'agit d'une action cachée de l'agent." },
      { q: "Le commissaire aux comptes est un mécanisme qui génère des coûts :", choix: ["De transaction", "De surveillance", "De production", "De distribution"], bonne: 1, explication: "C'est un coût d'agence supporté pour contrôler les dirigeants." },
      { q: "La perte résiduelle est :", choix: ["Le déficit comptable", "L'écart de valeur qui subsiste malgré les mécanismes de contrôle", "Le coût de l'audit", "La dette non remboursée"], bonne: 1, explication: "Troisième composante des coûts d'agence." },
      { q: "Selon Freeman, une partie prenante est :", choix: ["Uniquement un actionnaire", "Tout groupe qui peut affecter l'organisation ou être affecté par elle", "Un salarié syndiqué", "Un client fidèle"], bonne: 1, explication: "Définition de 1984." },
      { q: "Un fournisseur qui obtient la certification ISO parce que son grand client l'exige illustre l'isomorphisme :", choix: ["Mimétique", "Normatif", "Coercitif", "Concurrentiel"], bonne: 2, explication: "Pression d'un acteur dont l'organisation dépend." },
      { q: "Alchian et Demsetz justifient le rôle du propriétaire par :", choix: ["La nécessité de contrôler une production en équipe", "Le besoin de vendre plus", "Les économies d'échelle", "La fiscalité"], bonne: 0, explication: "Le contrôleur reçoit le revenu résiduel." },
    ],
  },

  7: {
    titre: "La planification et la direction par objectifs",
    description: "Planifier : objectifs SMART, types de plans, décisions d'Ansoff, direction par objectifs de Drucker, critères de Laplace, Wald, Hurwicz et Savage.",
    resume: md`
## L'essentiel — Planifier et diriger par objectifs

- **Planifier** : fixer les objectifs, choisir les moyens, programmer les actions ; intérêts : anticiper, coordonner, mobiliser, contrôler.
- Limites (Mintzberg, 1994) : illusions de prévision, de détachement et de formalisation ; réponses : plans **glissants**, scénarios.
- Vision → mission → valeurs → objectifs stratégiques → objectifs opérationnels ; objectif **SMART** (Doran, 1981).
- Plans **stratégiques**, **tactiques**, **opérationnels** ; plans **permanents** (politiques, procédures, règles) et **à usage unique** (projets, budgets).
- **Ansoff** (1965) : décisions stratégiques (produits-marchés), administratives (ressources), opérationnelles (exploitation courante).
- École **néoclassique** : Sloan (décentralisation coordonnée), **Drucker** (DPO, 1954), Gélinier (DPPO) ; objectifs négociés en cascade, autonomie, autocontrôle, évaluation.
- Incertitude : Laplace (moyenne), **Wald** (maximin), maximax, **Hurwicz** $\alpha \max + (1-\alpha)\min$, **Savage** (regrets par colonne, minimax regret).
- Risque : espérance $E = \sum p_i g_i$ ; tenir compte de l'attitude face au risque.
`,
    exercices: md`
### Exercice 2 — Objectifs SMART pour une agence bancaire

Le directeur d'une agence bancaire à Oujda reçoit les consignes suivantes : a) « développer la clientèle jeune » ; b) « réduire l'attente au guichet » ; c) « mieux recouvrer les impayés ». Transformez-les en objectifs SMART et proposez un indicateur pour chacun.

<details><summary>Voir le corrigé</summary>

a) « Ouvrir 250 comptes de clients de 18 à 25 ans entre janvier et juin, sous la responsabilité du chargé de clientèle particuliers » ; indicateur : nombre de comptes ouverts par mois dans la tranche d'âge.
b) « Ramener le temps d'attente moyen au guichet de 18 à 10 minutes d'ici au 30 septembre » ; indicateur : temps d'attente mesuré par le système de tickets.
c) « Réduire l'encours des impayés de plus de 90 jours de 20 % d'ici à la fin de l'exercice » ; indicateur : encours mensuel des impayés de plus de 90 jours.

Chaque objectif est précis, mesurable, confié à un responsable, réaliste et daté.

</details>

### Exercice 3 — Critères de décision

Une entreprise de transport touristique de Ouarzazate hésite entre trois investissements. Gains en milliers de DH :

| Investissement | Saison faible | Saison moyenne | Saison forte |
|---|---|---|---|
| Minibus | 120 | 260 | 380 |
| Véhicules 4x4 | 40 | 300 | 520 |
| Location à une agence | 200 | 220 | 240 |

Appliquez Wald, maximax, Laplace et Savage. Quel choix feriez-vous si la saison forte a une probabilité de 0,5, la moyenne 0,3 et la faible 0,2 ?

<details><summary>Voir le corrigé</summary>

- **Wald** : minimums 120, 40, 200 → **location**.
- **Maximax** : maximums 380, 520, 240 → **4x4**.
- **Laplace** : moyennes 253,33 ; 286,67 ; 220 → **4x4**.
- **Savage** : meilleurs par colonne 200, 300, 520. Regrets minibus : 80, 40, 140 (max 140) ; 4x4 : 160, 0, 0 (max 160) ; location : 0, 80, 280 (max 280) → **minibus**.
- **Espérance** : minibus $0{,}2 \times 120 + 0{,}3 \times 260 + 0{,}5 \times 380 = 292$ ; 4x4 $0{,}2 \times 40 + 0{,}3 \times 300 + 0{,}5 \times 520 = 358$ ; location $0{,}2 \times 200 + 0{,}3 \times 220 + 0{,}5 \times 240 = 226$ → **4x4**.

Avec ces probabilités, les 4x4 sont le meilleur choix en moyenne ; une entreprise très prudente préférerait la location, un compromis étant le minibus (plus petit regret maximal).

</details>
`,
    qcm: [
      { q: "Un objectif SMART doit notamment être :", choix: ["Ambitieux et secret", "Mesurable et défini dans le temps", "Fixé par l'actionnaire seul", "Identique pour tous les services"], bonne: 1, explication: "Spécifique, mesurable, atteignable, réaliste, temporellement défini." },
      { q: "La mission d'une organisation exprime :", choix: ["Un résultat chiffré", "Sa raison d'être et ce qu'elle fait pour qui", "Son budget annuel", "Sa structure"], bonne: 1, explication: "Les objectifs chiffrés viennent ensuite." },
      { q: "Une procédure de traitement des réclamations est un plan :", choix: ["À usage unique", "Permanent", "Stratégique", "Budgétaire"], bonne: 1, explication: "Elle s'applique de façon répétée." },
      { q: "Selon Ansoff, choisir de nouveaux couples produits-marchés est une décision :", choix: ["Opérationnelle", "Administrative", "Stratégique", "Programmée"], bonne: 2, explication: "Elle concerne les relations avec l'environnement." },
      { q: "La direction par objectifs a été formalisée par :", choix: ["Taylor", "Drucker", "Weber", "Mayo"], bonne: 1, explication: "The Practice of Management, 1954." },
      { q: "Dans la DPO, le responsable suit ses propres résultats grâce à des indicateurs : c'est :", choix: ["La supervision directe", "L'autocontrôle", "L'audit externe", "La centralisation"], bonne: 1, explication: "Élément central de la méthode." },
      { q: "Le critère de Wald conduit à choisir :", choix: ["La meilleure moyenne", "Le meilleur des pires résultats", "Le meilleur des meilleurs résultats", "Le plus petit regret maximal"], bonne: 1, explication: "Critère du décideur prudent (maximin)." },
      { q: "Pour appliquer le critère de Savage, les regrets se calculent :", choix: ["Par ligne", "Par colonne, par rapport au meilleur résultat de chaque état", "Sur la moyenne", "Sur le total"], bonne: 1, explication: "Regret = meilleur résultat de la colonne moins le résultat de la case." },
      { q: "Gains 100, 300 et 500 avec des probabilités 0,2, 0,5 et 0,3. L'espérance vaut :", choix: ["300", "320", "280", "340"], bonne: 1, explication: "20 + 150 + 150 = 320." },
      { q: "Mintzberg reproche à la planification stratégique formelle :", choix: ["D'être trop intuitive", "De croire que l'on peut prévoir et formaliser la stratégie à l'écart du terrain", "D'ignorer les budgets", "De donner trop de pouvoir aux ouvriers"], bonne: 1, explication: "The Rise and Fall of Strategic Planning, 1994." },
    ],
  },

  8: {
    titre: "Organiser : coordination et configurations de Mintzberg",
    description: "Structures selon Mintzberg : six mécanismes de coordination, cinq parties, paramètres de conception, configurations, organigrammes types, cas corrigé.",
    resume: md`
## L'essentiel — Organiser selon Mintzberg

- **Structure** (Mintzberg, 1979) : moyens employés pour diviser le travail puis coordonner les tâches.
- Six mécanismes de coordination : **ajustement mutuel**, **supervision directe**, standardisation des **procédés**, des **résultats**, des **qualifications**, des **normes**.
- Cinq parties : **sommet stratégique**, **ligne hiérarchique**, **centre opérationnel**, **technostructure** (analystes qui standardisent), **support logistique** ; plus l'idéologie (1989).
- Paramètres : spécialisation, formalisation, formation et socialisation, regroupement, taille des unités, planification et contrôle, mécanismes de liaison, **décentralisation** verticale et horizontale.
- **Graicunas** : $R = n(2^{n-1} + n - 1)$ relations ; 5 subordonnés → 100, 9 → 2 376.
- Facteurs de contingence : âge et taille, système technique, environnement, pouvoir.
- Configurations : **simple** (supervision directe), **bureaucratie mécaniste** (procédés), **bureaucratie professionnelle** (qualifications), **divisionnalisée** (résultats), **adhocratie** (ajustement mutuel), missionnaire (normes), politique.
- Organigrammes : hiérarchique, fonctionnel, staff and line, divisionnel, matriciel (double commandement), par projet, en réseau.
`,
    exercices: md`
### Exercice 2 — Reconnaître la configuration

Nommez la configuration de Mintzberg de chaque organisation et justifiez par le mécanisme de coordination : a) une école de commerce privée où chaque professeur construit son cours selon les normes académiques ; b) une boulangerie de huit salariés dirigée par son propriétaire ; c) le centre de traitement des chèques d'une banque ; d) un groupe qui possède une marque de sodas, une chaîne de cafés et une société immobilière ; e) une agence qui conçoit des stands pour des salons internationaux, chaque projet étant unique.

<details><summary>Voir le corrigé</summary>

a) **Bureaucratie professionnelle** : standardisation des qualifications. b) **Structure simple** : supervision directe par le propriétaire. c) **Bureaucratie mécaniste** : standardisation des procédés, travail répétitif et formalisé. d) **Structure divisionnalisée** : standardisation des résultats de chaque division. e) **Adhocratie** : ajustement mutuel entre experts sur des projets innovants.

</details>

### Exercice 3 — Faut-il une structure matricielle ?

Une société d'ingénierie de Rabat (180 salariés) est organisée par métiers : génie civil, électricité, hydraulique. Chaque grand projet (barrage, station de dessalement) mobilise plusieurs métiers, mais les chefs de service se disputent les ingénieurs et les clients se plaignent de n'avoir aucun interlocuteur unique.

1. Quelle est la structure actuelle et quel est son principal défaut ici ?
2. Présentez la structure matricielle et ses conditions de réussite.

<details><summary>Voir le corrigé</summary>

1. Structure **fonctionnelle** par métier : excellente pour la compétence technique, mais elle coordonne mal les projets transversaux et n'offre pas de responsable unique face au client.
2. En structure **matricielle**, chaque ingénieur dépend de son **chef de métier** (compétences, carrière) et d'un **chef de projet** (délais, budget, relation client). Conditions : définir clairement les pouvoirs de chacun (qui évalue, qui affecte les ressources), prévoir une instance d'**arbitrage** des conflits, former les managers à la négociation. Sans cela, le **double commandement** crée confusion et lenteur.

</details>
`,
    qcm: [
      { q: "Selon Mintzberg, la structure est :", choix: ["L'organigramme affiché", "L'ensemble des moyens pour diviser le travail puis coordonner les tâches", "Le règlement intérieur", "La stratégie de l'entreprise"], bonne: 1, explication: "The Structuring of Organizations, 1979." },
      { q: "Dans un hôpital, la coordination entre chirurgien et anesthésiste repose surtout sur :", choix: ["La supervision directe", "La standardisation des qualifications", "La standardisation des résultats", "L'ajustement mutuel seul"], bonne: 1, explication: "Leur formation leur permet de savoir ce que l'autre va faire." },
      { q: "Le service qui rédige les procédures et les méthodes de travail appartient à :", choix: ["Le support logistique", "La technostructure", "Le centre opérationnel", "La ligne hiérarchique"], bonne: 1, explication: "Les analystes standardisent le travail des autres." },
      { q: "Le service de paie fait partie :", choix: ["De la technostructure", "Du support logistique", "Du sommet stratégique", "Du centre opérationnel"], bonne: 1, explication: "Service d'appui hors du flux principal." },
      { q: "La configuration dont la partie clé est le centre opérationnel est :", choix: ["La structure simple", "La bureaucratie professionnelle", "La structure divisionnalisée", "La bureaucratie mécaniste"], bonne: 1, explication: "Les professionnels détiennent le savoir et le pouvoir." },
      { q: "L'adhocratie se coordonne surtout par :", choix: ["Les procédures", "L'ajustement mutuel", "La supervision directe", "Les objectifs chiffrés"], bonne: 1, explication: "Adaptée aux environnements complexes et dynamiques." },
      { q: "Selon la formule de Graicunas, un chef qui a 5 subordonnés doit gérer :", choix: ["10 relations", "25 relations", "100 relations", "5 relations"], bonne: 2, explication: "5 fois (16 + 4)." },
      { q: "La structure divisionnalisée coordonne ses divisions par :", choix: ["La standardisation des résultats", "La standardisation des normes", "L'ajustement mutuel", "La standardisation des procédés"], bonne: 0, explication: "Le siège fixe des objectifs de performance." },
      { q: "Le principal inconvénient de la structure matricielle est :", choix: ["L'absence d'experts", "Le double commandement", "La centralisation extrême", "L'absence de projets"], bonne: 1, explication: "Chaque membre dépend d'un chef de métier et d'un chef de projet." },
      { q: "La structure hiérarchico-fonctionnelle (staff and line) cherche à combiner :", choix: ["Unité de commandement et conseil d'experts", "Plusieurs chefs pour chaque ouvrier", "Divisions et projets", "Partenaires externes et noyau central"], bonne: 0, explication: "Les services fonctionnels conseillent sans commander." },
    ],
  },

  9: {
    titre: "Diriger : leadership, motivation et communication",
    description: "Diriger une équipe : pouvoir de French et Raven, grille de Blake et Mouton, Hersey et Blanchard, motivation selon Vroom, Adams et Locke, communication.",
    resume: md`
## L'essentiel — Diriger

- **Autorité** (droit lié au poste), **pouvoir** (capacité d'influence), **leadership** (capacité d'entraînement) ; management et complexité, leadership et changement (Kotter).
- **French et Raven** (1959) : pouvoir de récompense, de coercition, légitime, d'expertise, de référence (+ information).
- Traits : pas de liste universelle. Comportements : considération et structuration (Ohio) ; **Blake et Mouton** (1964) : 1.1, 9.1, 1.9, 5.5, **9.9** ; continuum de **Tannenbaum et Schmidt** (1958).
- Situationnel : **Fiedler** (1967) ; **Hersey et Blanchard** : M1 → directif, M2 → persuasif, M3 → participatif, M4 → délégatif.
- Leadership **transactionnel** et **transformationnel** (Burns 1978, Bass 1985).
- Contenu : Alderfer (existence, sociabilité, croissance), McClelland (accomplissement, pouvoir, affiliation).
- Processus : **Vroom** $M = E \times I \times V$ ; **Adams** : comparaison des rapports rétributions / contributions ; **Locke** : objectifs précis, difficiles, acceptés, avec retour ; **Deci et Ryan** : autonomie, compétence, relation.
- Communication : Shannon et Weaver + rétroaction ; descendante, ascendante, horizontale, informelle ; obstacles (filtrage, surcharge, langue, distance) ; réseaux centralisés rapides pour le simple, décentralisés meilleurs pour le complexe (Bavelas, Leavitt).
`,
    exercices: md`
### Exercice 2 — Quelle source de pouvoir ?

Identifiez la source de pouvoir (French et Raven) : a) un chef d'équipe menace de retirer les heures supplémentaires à ceux qui arrivent en retard ; b) une responsable informatique dont tout le monde suit les avis techniques ; c) un directeur nommé par le conseil d'administration signe les notes de service ; d) un fondateur admiré dont les salariés imitent le comportement ; e) une cheffe de service accorde un jour de congé supplémentaire aux meilleurs résultats du mois.

<details><summary>Voir le corrigé</summary>

a) **Coercition**. b) **Expertise**. c) **Légitime**. d) **Référence**. e) **Récompense**. Les pouvoirs d'expertise et de référence entraînent l'engagement le plus durable ; la coercition n'obtient souvent qu'une obéissance minimale.

</details>

### Exercice 3 — Vroom et Adams dans une agence d'assurance

Dans une agence d'assurance de Salé, une conseillère estime à 0,6 la probabilité d'atteindre son objectif de contrats, à 0,9 la probabilité de recevoir la prime correspondante, et accorde une valence de 0,5 à cette prime, jugée faible. Elle gagne 7 000 DH par mois pour 44 heures par semaine ; un collègue de même ancienneté gagne 7 000 DH pour 40 heures.

1. Calculez sa motivation selon Vroom. Quel facteur l'entreprise devrait-elle améliorer en priorité ?
2. Que prévoit la théorie de l'équité ?

<details><summary>Voir le corrigé</summary>

1. $M = 0{,}6 \times 0{,}9 \times 0{,}5 = 0{,}27$. Le maillon faible est la **valence** (0,5) : la récompense intéresse peu. On peut revaloriser la prime ou proposer une récompense plus attractive pour elle (jours de congé, formation, perspective de promotion). L'expectation (0,6) peut aussi être améliorée par la formation et des outils de prospection.
2. Contributions différentes (44 heures contre 40) pour une rétribution identique : son rapport est plus faible, elle perçoit une **iniquité** à son détriment. Elle risque de réduire ses heures, de réclamer une compensation ou de partir. L'agence doit harmoniser les horaires ou rémunérer les heures supplémentaires.

</details>
`,
    qcm: [
      { q: "Le leadership se distingue de l'autorité parce qu'il repose surtout sur :", choix: ["Le poste occupé", "La capacité à susciter l'adhésion du groupe", "Le règlement intérieur", "Le contrat de travail"], bonne: 1, explication: "Un leader informel peut n'avoir aucune autorité." },
      { q: "Selon French et Raven, le pouvoir fondé sur l'admiration pour le chef est le pouvoir :", choix: ["Légitime", "De référence", "De récompense", "D'expertise"], bonne: 1, explication: "Les subordonnés s'identifient au leader." },
      { q: "Sur la grille de Blake et Mouton, le style 9.1 correspond à :", choix: ["Un fort intérêt pour les personnes", "Un fort intérêt pour la production et faible pour les personnes", "Un désintérêt total", "Le compromis"], bonne: 1, explication: "Style autoritaire centré sur la tâche." },
      { q: "Pour Blake et Mouton, le style le plus efficace est :", choix: ["1.9", "5.5", "9.9", "9.1"], bonne: 2, explication: "Style intégrateur, fort sur les deux axes." },
      { q: "Selon Hersey et Blanchard, face à un collaborateur compétent et motivé, le manager adopte le style :", choix: ["Directif", "Persuasif", "Participatif", "Délégatif"], bonne: 3, explication: "Maturité M4." },
      { q: "Un nouveau salarié enthousiaste mais peu compétent relève plutôt du style :", choix: ["Délégatif", "Persuasif", "Participatif", "Laisser-faire"], bonne: 1, explication: "Maturité M2 : expliquer et former." },
      { q: "Dans le modèle de Vroom, E = 0,5, I = 0,8 et V = 0. La motivation vaut :", choix: ["1,3", "0,4", "0", "0,5"], bonne: 2, explication: "C'est un produit : une valence nulle annule la motivation." },
      { q: "La théorie de l'équité d'Adams compare :", choix: ["Les salaires de deux entreprises", "Les rapports rétributions sur contributions de soi et d'un collègue de référence", "Les objectifs et les résultats", "Les besoins et les motivations"], bonne: 1, explication: "L'iniquité perçue pousse à rétablir l'équilibre." },
      { q: "Selon Locke, un objectif motive davantage s'il est :", choix: ["Vague et facile", "Précis, difficile mais accepté, avec un retour d'information", "Fixé sans échéance", "Secret"], bonne: 1, explication: "Théorie de la fixation des objectifs, 1968." },
      { q: "Le filtrage de l'information par les niveaux hiérarchiques successifs est :", choix: ["Un canal de communication", "Un obstacle à la communication", "Une rétroaction", "Un réseau décentralisé"], bonne: 1, explication: "Chaque niveau retient ou déforme une partie du message." },
    ],
  },

  10: {
    titre: "Contrôle, culture et changement organisationnel",
    description: "Contrôle, culture et changement : processus de contrôle, Anthony, Ouchi, tableau de bord prospectif, Schein, Hofstede, Lewin, Kotter et résistances.",
    resume: md`
## L'essentiel — Contrôler, comprendre la culture, conduire le changement

- **Contrôle** : fixer des normes, mesurer, comparer (écarts), corriger ; **a priori**, **concomitant**, **a posteriori**.
- **Anthony** (1965) : planification stratégique, **contrôle de gestion** (efficacité et efficience des ressources), contrôle opérationnel ; outils : budgets, écarts, tableaux de bord, **Kaplan et Norton** (1992, quatre axes), audit.
- **Ouchi** : contrôle par le **marché** (résultats mesurables), la **bureaucratie** (règles), le **clan** (valeurs partagées).
- **Schein** (1985) : **artefacts**, **valeurs affichées**, **présupposés de base** ; héros, mythes, rites, symboles, langage, tabous (Deal et Kennedy, 1982) ; culture forte : identité et cohésion, mais risque de conformisme.
- **Hofstede** (1980) : distance hiérarchique, contrôle de l'incertitude, individualisme / collectivisme, masculinité / féminité, orientation à long terme.
- **Lewin** (1947) : **décristallisation**, **changement**, **recristallisation** ; champ de forces motrices et restrictives.
- **Kotter** (1996) : urgence, coalition, vision, communication, lever les obstacles, victoires rapides, consolidation, ancrage culturel.
- Résistances : peur, perte de pouvoir ou de statut, habitudes ; **Kotter et Schlesinger** (1979) : information, participation, facilitation, négociation, cooptation, coercition ; **Argyris et Schön** : simple et **double boucle**.
`,
    exercices: md`
### Exercice 2 — Quel moment, quel niveau de contrôle ?

Pour chaque situation, précisez le moment (a priori, concomitant, a posteriori) et le niveau selon Anthony : a) le directeur financier analyse chaque trimestre les écarts entre budget et réalisations des agences ; b) un contrôleur qualité vérifie chaque heure le poids des sachets sur la ligne d'ensachage ; c) le conseil d'administration exige son accord avant tout investissement supérieur à 5 millions de DH ; d) un chef de chantier vérifie chaque soir l'avancement des travaux de la journée.

<details><summary>Voir le corrigé</summary>

a) **A posteriori**, **contrôle de gestion** (analyse des écarts budgétaires). b) **Concomitant**, **contrôle opérationnel** (tâche précise, très court terme). c) **A priori**, niveau **stratégique** (engagement lourd décidé par le conseil). d) **Concomitant** (en cours de chantier), **contrôle opérationnel**.

</details>

### Exercice 3 — Une fusion difficile

Deux cabinets d'expertise comptable de Casablanca fusionnent. Le premier est très hiérarchisé : on vouvoie les associés, les dossiers sont validés par trois niveaux, les horaires sont stricts. Le second, plus jeune, fonctionne en équipes autonomes, avec tutoiement général et horaires libres. Six mois après la fusion, plusieurs collaborateurs du second cabinet ont démissionné.

1. Comparez les deux cultures avec les niveaux de Schein et la notion de distance hiérarchique.
2. Pourquoi la fusion provoque-t-elle des départs ?
3. Proposez un plan d'action en vous appuyant sur Kotter.

<details><summary>Voir le corrigé</summary>

1. **Artefacts** : vouvoiement et horaires stricts d'un côté, tutoiement et horaires libres de l'autre. **Valeurs** : rigueur et respect de la hiérarchie contre autonomie et responsabilité. **Présupposés** : « la qualité vient du contrôle hiérarchique » contre « la qualité vient de la confiance dans les équipes ». Le premier cabinet a une **forte distance hiérarchique**, le second une distance faible.
2. Les collaborateurs du second cabinet perdent leur autonomie et leurs repères : c'est un **choc culturel**. Selon Ouchi, ils passent d'un contrôle par le **clan** à un contrôle **bureaucratique** qu'ils vivent comme de la méfiance.
3. Créer une **coalition** mixte d'associés des deux cabinets ; définir une **vision** commune (qualité et réactivité) ; **communiquer** et écouter ; lever les obstacles (réduire les niveaux de validation pour les dossiers simples) ; obtenir des **victoires rapides** (équipes mixtes sur quelques clients) ; **ancrer** progressivement une culture commune qui garde la rigueur de l'un et l'autonomie de l'autre.

</details>
`,
    qcm: [
      { q: "La première étape du processus de contrôle consiste à :", choix: ["Sanctionner", "Fixer des normes ou des objectifs", "Mesurer les résultats", "Corriger les écarts"], bonne: 1, explication: "On ne peut mesurer un écart sans norme de référence." },
      { q: "Vérifier la qualité des matières à leur réception est un contrôle :", choix: ["A posteriori", "Concomitant", "A priori", "Stratégique"], bonne: 2, explication: "Il intervient avant la transformation, pour prévenir les défauts." },
      { q: "Selon Anthony, le contrôle de gestion vise à :", choix: ["Choisir les grandes orientations", "S'assurer que les ressources sont utilisées avec efficacité et efficience", "Vérifier chaque geste des ouvriers", "Recruter les cadres"], bonne: 1, explication: "Niveau intermédiaire entre stratégie et exécution." },
      { q: "Le tableau de bord prospectif de Kaplan et Norton comprend l'axe :", choix: ["Juridique", "Apprentissage et développement", "Fiscal", "Immobilier"], bonne: 1, explication: "Avec les axes financier, clients et processus internes." },
      { q: "Selon Ouchi, quand les résultats sont difficiles à mesurer, on privilégie le contrôle par :", choix: ["Le marché", "Le clan", "Les prix", "Les commissions"], bonne: 1, explication: "Valeurs partagées, socialisation, confiance." },
      { q: "Chez Schein, le niveau le plus profond de la culture est :", choix: ["Les artefacts", "Les valeurs affichées", "Les présupposés de base", "Le logo"], bonne: 2, explication: "Croyances implicites, tenues pour évidentes." },
      { q: "La dimension de Hofstede qui mesure l'acceptation d'une répartition inégale du pouvoir est :", choix: ["Le contrôle de l'incertitude", "La distance hiérarchique", "L'individualisme", "La masculinité"], bonne: 1, explication: "Culture's Consequences, 1980." },
      { q: "Dans le modèle de Lewin, la phase qui stabilise les nouveaux comportements est :", choix: ["La décristallisation", "Le déplacement", "La recristallisation", "La planification"], bonne: 2, explication: "Sans elle, les anciennes habitudes reviennent." },
      { q: "Selon Kotter, la première étape de la conduite du changement est de :", choix: ["Former une coalition", "Créer un sentiment d'urgence", "Ancrer le changement dans la culture", "Recruter de nouveaux cadres"], bonne: 1, explication: "Leading Change, 1996." },
      { q: "Face à une résistance due à la peur de ne pas maîtriser un nouvel outil, la méthode la plus adaptée est :", choix: ["La coercition", "La facilitation et le soutien", "La manipulation", "L'ignorer"], bonne: 1, explication: "Formation, accompagnement, tutorat (Kotter et Schlesinger)." },
    ],
  },
};

export default chapitres;
