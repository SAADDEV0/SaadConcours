// Droits de l'homme et libertés publiques (Droit S4) — compléments par chapitre : description SEO, résumé, exercices 2 et 3, QCM.
const md = String.raw;

const chapitres = {
  1: {
    titre: "Les droits de l'homme : notions, fondements et histoire",
    description: "Droits de l'homme, libertés publiques et droits fondamentaux : fondements (Locke, islam), grandes déclarations, générations de droits, universalité.",
    resume: md`
## L'essentiel — Notions, fondements, histoire

- **Droits de l'homme** : droits inhérents à tout être humain (dignité), reconnus et non créés par l'État ; **libertés publiques** : libertés organisées par la loi en droit interne ; **droits fondamentaux** : consacrés par des normes supérieures et protégés par un juge. Titre II de la Constitution : « Libertés et droits fondamentaux » (articles 19 à 40).
- **Libertés** (abstention de l'État) ≠ **droits-créances** (action positive).
- Fondements : **droit naturel** et contrat social (**Locke** : vie, liberté, propriété ; Rousseau ; Montesquieu) ; dignité dans l'islam (sourate 17, verset 70 ; maqasid) ; Déclaration du Caire (1990) ; critiques (Marx, positivisme, communautariens).
- Histoire : Magna Carta (1215), Habeas Corpus (1679), Bill of Rights (1689), Déclaration américaine (1776), **Déclaration de 1789**, droits sociaux au XIXᵉ siècle, **DUDH (10 décembre 1948)**, Pactes de 1966, Conseil des droits de l'homme (2006).
- **Générations** (Vasak) : civils et politiques (liberté) ; économiques, sociaux et culturels (égalité) ; solidarité (développement, paix, environnement) ; numérique et bioéthique.
- Caractères : universalité, inaliénabilité, **indivisibilité et interdépendance** (Vienne, 1993), non-discrimination ; restrictions légales et proportionnées ; droits **intangibles** (vie, torture, esclavage, non-rétroactivité pénale, article 4 du PIDCP).
- Universalité ≠ spécificités : compromis de **Vienne** ; préambule de 2011 : droits « tels qu'universellement reconnus », universalité et indivisibilité, primauté des conventions dans le respect de l'identité nationale immuable.
- Méthode : définir, situer, fonder, rattacher au droit positif, discuter.
`,
    exercices: md`
### Exercice 2 — Classez les droits

Indiquez la génération de chaque droit : 1) le droit de vote ; 2) le droit à la sécurité sociale ; 3) le droit à un environnement sain ; 4) la liberté de culte ; 5) le droit à l'éducation ; 6) le droit au développement ; 7) l'interdiction de la torture.

<details><summary>Voir le corrigé</summary>

1) Première génération (civils et politiques). 2) Deuxième génération (économiques et sociaux). 3) Troisième génération (solidarité). 4) Première génération. 5) Deuxième génération. 6) Troisième génération. 7) Première génération, droit intangible.

</details>

### Exercice 3 — Question de cours

Distinguez en une dizaine de lignes la notion de libertés publiques et celle de droits fondamentaux.

<details><summary>Voir le corrigé</summary>

Les libertés publiques, notion née en France au XIXᵉ siècle, sont les libertés reconnues par le droit positif et organisées principalement par la loi, qui en fixe le régime d'exercice ; la protection repose surtout sur le législateur et sur le juge administratif face aux atteintes de l'administration. Les droits fondamentaux, notion d'origine allemande, sont consacrés par des normes supérieures (Constitution, traités) et protégés par un juge, y compris contre la loi elle-même, grâce au contrôle de constitutionnalité ou de conventionnalité. La Constitution marocaine de 2011, avec son titre II et l'exception d'inconstitutionnalité (article 133), se rapproche de la logique des droits fondamentaux.

</details>
`,
    qcm: [
      { q: "Le titre II de la Constitution marocaine de 2011 s'intitule :", choix: ["Les droits de l'homme", "Libertés et droits fondamentaux", "Les libertés publiques", "Le pouvoir judiciaire"], bonne: 1, explication: "Articles 19 à 40." },
      { q: "Un droit-créance exige de l'État :", choix: ["Une abstention", "Une action positive", "Une autorisation préalable", "Un référendum"], bonne: 1, explication: "Par exemple le droit à la santé." },
      { q: "Pour John Locke, les droits naturels sont :", choix: ["La vie, la liberté et la propriété", "Le travail, la santé et l'éducation", "La paix et le développement", "Le vote et l'éligibilité"], bonne: 0, explication: "Second traité du gouvernement civil, 1690." },
      { q: "La Déclaration universelle des droits de l'homme a été adoptée le :", choix: ["26 août 1789", "10 décembre 1948", "16 décembre 1966", "25 juin 1993"], bonne: 1, explication: "Par l'Assemblée générale des Nations unies." },
      { q: "La classification des droits en trois générations est due à :", choix: ["Karel Vasak", "Montesquieu", "Hans Kelsen", "Karl Marx"], bonne: 0, explication: "Proposée en 1977." },
      { q: "Le droit à un environnement sain appartient à la :", choix: ["Première génération", "Deuxième génération", "Troisième génération", "Aucune génération"], bonne: 2, explication: "Droits de solidarité." },
      { q: "La Conférence de Vienne de 1993 affirme que les droits de l'homme sont :", choix: ["Seulement civils et politiques", "Universels, indivisibles et interdépendants", "Propres à chaque culture", "Facultatifs pour les États"], bonne: 1, explication: "Compromis avec les particularismes." },
      { q: "Parmi ces droits, lequel est intangible ?", choix: ["La liberté de réunion", "L'interdiction de la torture", "Le droit de grève", "La liberté de la presse"], bonne: 1, explication: "Aucune dérogation possible." },
      { q: "La Déclaration du Caire sur les droits de l'homme en islam date de :", choix: ["1948", "1981", "1990", "2004"], bonne: 2, explication: "Adoptée par l'Organisation de la coopération islamique." },
      { q: "Le préambule de 2011 affirme l'attachement du Maroc aux droits de l'homme :", choix: ["Tels qu'ils sont universellement reconnus", "Seulement dans le cadre de l'Union africaine", "Sans référence internationale", "Tels que définis par la loi de finances"], bonne: 0, explication: "Dans leur universalité et leur indivisibilité." },
    ],
  },

  2: {
    titre: "La protection internationale des droits de l'homme",
    description: "Protection internationale : DUDH, Pactes de 1966, conventions ratifiées par le Maroc, Conseil des droits de l'homme, EPU, comités et systèmes régionaux.",
    resume: md`
## L'essentiel — Protection internationale

- **Charte des Nations unies** (articles 1-3, 55, 56) ; **DUDH** (10 décembre 1948, 30 articles, résolution sans force obligatoire, valeur coutumière partielle).
- **Pactes de 1966** (en vigueur en 1976) : **PIDCP** (dérogations sauf droits intangibles, article 4 ; protocoles facultatifs) et **PIDESC** (réalisation **progressive**, article 2) ; ratifiés par le Maroc en **1979** ; peine de mort maintenue, non exécutée depuis 1993.
- Conventions spécialisées : génocide, discrimination raciale, **CEDAW** (réserves en partie levées en 2011), **torture** (1993, protocole en 2014), **enfant** (1993), migrants, handicap (2009), disparitions forcées (2013).
- **Conseil des droits de l'homme** (2006, Genève, 47 États ; présidence marocaine en 2024) ; **Examen périodique universel** (Maroc : 2008, 2012, 2017, 2022) ; **procédures spéciales** (rapporteurs).
- **Organes de traités** : rapports, observations finales et générales, **communications individuelles** (constatations non contraignantes) ; Haut-Commissariat (1993) ; **CPI** (Maroc signataire non partie).
- Régional : **CEDH** (Cour de Strasbourg, arrêts obligatoires ; Maroc non partie, partenaire pour la démocratie) ; interaméricain ; **Charte africaine** (1981, Commission, Cour) ; **Charte arabe** (2004).
- **DIH** : Conventions de Genève (1949) et protocoles (1977), complémentarité ; commission nationale (2008).
- Protection **subsidiaire** : épuisement des voies de recours internes ; efficacité par la pression et la publicité ; influence sur les réformes (mécanisme national de prévention de la torture, 2019).
`,
    exercices: md`
### Exercice 2 — Organe ou État ?

Classez : Conseil des droits de l'homme ; Comité des droits de l'homme ; Comité contre la torture ; Examen périodique universel ; rapporteur spécial sur la liberté d'expression. Indiquez s'il s'agit d'un mécanisme fondé sur la Charte des Nations unies ou sur un traité, et s'il est composé d'États ou d'experts.

<details><summary>Voir le corrigé</summary>

Conseil des droits de l'homme : fondé sur la Charte (résolution de l'Assemblée générale), composé d'États. Comité des droits de l'homme : organe de traité (PIDCP), experts indépendants. Comité contre la torture : organe de traité (CAT), experts. Examen périodique universel : mécanisme du Conseil, examen par les États pairs. Rapporteur spécial : procédure spéciale du Conseil, expert indépendant.

</details>

### Exercice 3 — Vrai ou faux ?

1) La DUDH est un traité ratifié par les États. 2) Le PIDESC impose une réalisation immédiate de tous les droits. 3) Le Maroc a ratifié la Convention relative aux droits de l'enfant. 4) Un Marocain peut saisir la Cour européenne des droits de l'homme contre le Maroc. 5) Les constatations du Comité des droits de l'homme sont des jugements obligatoires.

<details><summary>Voir le corrigé</summary>

1) Faux : résolution de l'Assemblée générale. 2) Faux : réalisation progressive au maximum des ressources disponibles. 3) Vrai (1993). 4) Faux : le Maroc n'est pas partie à la Convention européenne. 5) Faux : elles ne sont pas juridiquement contraignantes, mais font autorité.

</details>
`,
    qcm: [
      { q: "La Déclaration universelle des droits de l'homme compte :", choix: ["10 articles", "30 articles", "53 articles", "111 articles"], bonne: 1, explication: "Adoptée le 10 décembre 1948." },
      { q: "Les deux Pactes internationaux ont été adoptés en :", choix: ["1948", "1966", "1979", "1993"], bonne: 1, explication: "Entrés en vigueur en 1976." },
      { q: "Le Maroc a ratifié les deux Pactes en :", choix: ["1956", "1966", "1979", "1993"], bonne: 2, explication: "PIDCP et PIDESC." },
      { q: "Le PIDESC prévoit une réalisation des droits :", choix: ["Immédiate", "Progressive, au maximum des ressources disponibles", "Facultative", "Réservée aux pays riches"], bonne: 1, explication: "Article 2." },
      { q: "Le Conseil des droits de l'homme a été créé en :", choix: ["1946", "1993", "2006", "2011"], bonne: 2, explication: "Il remplace la Commission des droits de l'homme." },
      { q: "Le Conseil des droits de l'homme est composé de :", choix: ["15 États", "47 États", "193 États", "18 experts"], bonne: 1, explication: "Élus par l'Assemblée générale." },
      { q: "L'Examen périodique universel porte sur :", choix: ["Les seuls États parties au PIDCP", "Tous les États membres de l'ONU", "Les seuls États européens", "Les ONG"], bonne: 1, explication: "Examen par les pairs." },
      { q: "Le Maroc a ratifié la Convention contre la torture en :", choix: ["1979", "1993", "2006", "2014"], bonne: 1, explication: "Protocole facultatif en 2014." },
      { q: "La Charte africaine des droits de l'homme et des peuples date de :", choix: ["1950", "1969", "1981", "2004"], bonne: 2, explication: "Adoptée à Nairobi." },
      { q: "La saisine d'un mécanisme international suppose en principe :", choix: ["L'accord de l'État", "L'épuisement des voies de recours internes", "Un avocat étranger", "Une décision du Parlement"], bonne: 1, explication: "La protection internationale est subsidiaire." },
    ],
  },

  3: {
    titre: "Les droits de l'homme au Maroc : évolution et garanties",
    description: "Droits de l'homme au Maroc : dahirs de 1958, IER (2004), titre II de la Constitution de 2011, primauté des conventions, Cour constitutionnelle et CNDH.",
    resume: md`
## L'essentiel — Évolution et garanties au Maroc

- **Dahirs du 15 novembre 1958** : associations (1-58-376), rassemblements (1-58-377), presse (1-58-378) ; Constitution de 1962 (libertés, pluralisme).
- **Années de plomb** (disparitions, détentions arbitraires, état d'exception 1965-1970) ; ouverture : **CCDH** (1990), Tazmamart fermé (1991), ratifications et ministère (1993), préambule de **1992**, commission d'arbitrage (1999).
- **IER** (2004-2005, Driss Benzekri) : vérité sur 1956-1999, auditions publiques, réparation individuelle et communautaire, réformes ; pas de poursuites.
- **Constitution de 2011** (référendum du 1er juillet) : préambule (non-discrimination), **titre II** (articles 19 à 40 : égalité et parité, vie, intégrité, sûreté, vie privée, expression, information, presse, réunion, association, grève, droits sociaux, propriété) ; titre VII (justiciables) ; **article 175** (acquis non révisables).
- **Conventions** ratifiées et publiées : **primauté** sur le droit interne, dans le cadre de la Constitution, des lois et de l'identité nationale immuable (formule discutée) ; article 55 (révision préalable si contrariété).
- **Cour constitutionnelle** : contrôle a priori ; **exception d'inconstitutionnalité** (article **133**), loi organique 86-15 censurée en partie (2018), mise en œuvre à vérifier.
- **Juge judiciaire** gardien des libertés (article **117**) ; juge administratif (excès de pouvoir, proportionnalité).
- **CNDH** (article 161, loi **76-15**) : plaintes, enquêtes, visites, trois mécanismes (torture, enfants, handicap), statut A (Principes de Paris) ; **Médiateur** (article 162, loi 14-16) ; APALD (loi 79-14), HACA ; **DIDH** (2011), plan d'action national ; société civile.
`,
    exercices: md`
### Exercice 2 — Quelle institution ?

1) Un détenu se plaint de mauvais traitements en prison ; 2) un citoyen n'obtient pas de réponse de l'administration à sa demande depuis un an ; 3) une femme est exclue d'un recrutement en raison de son sexe ; 4) le gouvernement doit préparer le rapport national pour l'EPU ; 5) une partie soutient qu'une loi appliquée dans son procès viole la liberté d'expression.

<details><summary>Voir le corrigé</summary>

1) CNDH et mécanisme national de prévention de la torture ; plainte au parquet. 2) Médiateur. 3) Autorité pour la parité et la lutte contre toutes formes de discrimination ; recours au juge. 4) Délégation interministérielle aux droits de l'homme. 5) Exception d'inconstitutionnalité devant la Cour constitutionnelle (article 133), selon la loi organique applicable.

</details>

### Exercice 3 — Question de cours

Présentez en une dizaine de lignes l'expérience de l'Instance équité et réconciliation.

<details><summary>Voir le corrigé</summary>

Créée en 2004 et présidée par Driss Benzekri, l'IER est une expérience de justice transitionnelle menée sans changement de régime. Elle a enquêté sur les disparitions forcées et les détentions arbitraires de 1956 à 1999, organisé des auditions publiques de victimes, indemnisé et réhabilité des milliers de personnes et proposé une réparation communautaire. Son rapport de 2005 recommande des réformes institutionnelles (constitutionnalisation des droits, indépendance de la justice, primauté du droit international, encadrement de la sécurité) largement reprises en 2011. Elle n'avait cependant pas le pouvoir de désigner nommément les responsables ni d'engager des poursuites, ce qui a été critiqué.

</details>
`,
    qcm: [
      { q: "Les dahirs fondateurs des libertés publiques au Maroc datent du :", choix: ["15 novembre 1958", "7 décembre 1962", "1er juillet 2011", "2 mars 1956"], bonne: 0, explication: "Associations, rassemblements, presse." },
      { q: "Le Conseil consultatif des droits de l'homme a été créé en :", choix: ["1975", "1990", "2004", "2011"], bonne: 1, explication: "Remplacé par le CNDH en 2011." },
      { q: "L'Instance équité et réconciliation a été créée en :", choix: ["1999", "2004", "2011", "2018"], bonne: 1, explication: "Rapport final en 2005." },
      { q: "L'IER a examiné les violations commises entre :", choix: ["1912 et 1956", "1956 et 1999", "1999 et 2011", "2011 et 2020"], bonne: 1, explication: "Disparitions forcées et détentions arbitraires." },
      { q: "Les libertés et droits fondamentaux figurent au titre :", choix: ["I", "II", "VII", "XII"], bonne: 1, explication: "Articles 19 à 40." },
      { q: "L'égalité entre l'homme et la femme est consacrée par l'article :", choix: ["19", "22", "29", "31"], bonne: 0, explication: "Avec la recherche de la parité." },
      { q: "Ne peuvent faire l'objet d'une révision constitutionnelle, selon l'article 175 :", choix: ["Les dispositions sur le budget", "Les acquis en matière de libertés et droits fondamentaux", "Les règles électorales", "La composition du gouvernement"], bonne: 1, explication: "À côté de l'islam, de la monarchie et du choix démocratique." },
      { q: "L'exception d'inconstitutionnalité est prévue par l'article :", choix: ["55", "117", "133", "161"], bonne: 2, explication: "Une loi organique en fixe les conditions." },
      { q: "Le juge est en charge de la protection des droits et libertés selon l'article :", choix: ["107", "117", "120", "126"], bonne: 1, explication: "Et de la sécurité judiciaire." },
      { q: "Le CNDH est régi par la loi :", choix: ["76-15", "14-16", "79-14", "31-13"], bonne: 0, explication: "Adoptée en 2018." },
    ],
  },

  4: {
    titre: "Le régime juridique des libertés publiques",
    description: "Régime des libertés publiques : rôle de la loi (article 71), régimes répressif, déclaratif et préventif, proportionnalité, état d'exception, urgence sanitaire.",
    resume: md`
## L'essentiel — Régime des libertés publiques

- Libertés conciliées avec l'**ordre public** et les **droits d'autrui** ; **article 71** : les droits du titre II et le régime des libertés relèvent de la **loi** ; le règlement ne fait qu'appliquer.
- **Lois organiques** : partis (29-11), grève, exception d'inconstitutionnalité, pétitions (44-14) et motions (64-14) ; contrôle de l'essence des droits par la Cour constitutionnelle.
- Régime **répressif** : exercice libre, sanction a posteriori par le juge pénal (presse écrite) — le plus libéral.
- Régime **déclaratif** : déclaration préalable, l'administration est informée (associations avec **récépissé**, réunions, manifestations) ; refus de récépissé sanctionné par le juge ; dissolution par le juge.
- Régime **préventif** : autorisation ou interdiction préalable (armes, étrangers, audiovisuel, domaine public) — le plus restrictif.
- Restriction légitime : **légalité**, **but légitime**, **nécessité et proportionnalité** (articles 19 et 21 du PIDCP) ; police administrative contrôlée par le juge ; interprétation stricte.
- **État d'exception** (article **59**) : Roi, consultations, message ; Parlement non dissous ; libertés et droits fondamentaux garantis ; appliqué 1965-1970.
- **État de siège** (article **74**) : dahir contresigné, **trente jours**, prorogation par la loi.
- **Urgence sanitaire** : décret-loi **2-20-292** (23 mars 2020), mesures par décret, sanctions pénales ; débats sur la proportionnalité ; droits intangibles préservés.
- Garanties : juges, CNDH, Médiateur, HACA, CNDP, Parlement, presse, pétitions, mécanismes internationaux.
`,
    exercices: md`
### Exercice 2 — Quel régime ?

Qualifiez le régime : 1) la publication d'un article de journal ; 2) la création d'une association culturelle ; 3) l'organisation d'une marche sur la voie publique ; 4) la détention d'une arme de chasse ; 5) la création d'une chaîne de radio privée.

<details><summary>Voir le corrigé</summary>

1) Régime répressif : sanction a posteriori des abus. 2) Régime déclaratif, avec récépissé. 3) Régime déclaratif, avec possibilité d'interdiction motivée en cas de risque de trouble à l'ordre public. 4) Régime préventif : autorisation préalable. 5) Régime préventif : licence de la HACA.

</details>

### Exercice 3 — État d'exception ou état de siège ?

Comparez les deux régimes : autorité, procédure, durée, sort des libertés.

<details><summary>Voir le corrigé</summary>

L'état d'exception (article 59) est proclamé par le Roi par dahir, après consultation du chef du gouvernement, des présidents des deux chambres et du président de la Cour constitutionnelle et un message à la nation, en cas de menace sur l'intégrité territoriale ou d'entrave au fonctionnement des institutions ; il n'a pas de durée fixe, le Parlement ne peut être dissous et les libertés et droits fondamentaux restent garantis. L'état de siège (article 74) est déclaré par dahir contresigné par le chef du gouvernement pour trente jours, prorogeables seulement par la loi ; il renforce les pouvoirs de police, notamment des autorités militaires.

</details>
`,
    qcm: [
      { q: "Le régime des libertés publiques relève du domaine de la loi selon l'article :", choix: ["59", "71", "74", "133"], bonne: 1, explication: "Le règlement ne fait qu'appliquer la loi." },
      { q: "Le régime le plus favorable à la liberté est le régime :", choix: ["Préventif", "Déclaratif", "Répressif", "D'exception"], bonne: 2, explication: "Sanction a posteriori par le juge." },
      { q: "La création d'une association au Maroc est soumise à :", choix: ["Une autorisation préalable", "Une déclaration préalable avec récépissé", "Un décret", "Un référendum local"], bonne: 1, explication: "Dahir de 1958." },
      { q: "Si l'administration estime une association illégale, elle doit :", choix: ["Refuser le récépissé", "Saisir le juge", "La dissoudre par arrêté", "La placer sous tutelle"], bonne: 1, explication: "Seul le juge peut dissoudre." },
      { q: "Une restriction à une liberté doit être :", choix: ["Décidée par circulaire", "Prévue par la loi, nécessaire et proportionnée", "Générale et absolue", "Secrète"], bonne: 1, explication: "Article 19, paragraphe 3, du PIDCP." },
      { q: "L'état d'exception est prévu par l'article :", choix: ["59", "74", "117", "175"], bonne: 0, explication: "Proclamé par le Roi." },
      { q: "Pendant l'état d'exception :", choix: ["Le Parlement est dissous", "Les libertés et droits fondamentaux demeurent garantis", "La Constitution est suspendue", "Les juges sont révoqués"], bonne: 1, explication: "Article 59." },
      { q: "L'état de siège est déclaré pour une durée de :", choix: ["Huit jours", "Trente jours", "Six mois", "Un an"], bonne: 1, explication: "Prorogation par la loi (article 74)." },
      { q: "L'état d'urgence sanitaire a été organisé en 2020 par :", choix: ["Une loi organique", "Le décret-loi 2-20-292", "Un dahir d'exception", "Une circulaire du ministère de la Santé"], bonne: 1, explication: "Du 23 mars 2020." },
      { q: "Les restrictions aux libertés sont d'interprétation :", choix: ["Large", "Stricte", "Libre", "Politique"], bonne: 1, explication: "Dans le doute, la liberté prévaut." },
    ],
  },

  5: {
    titre: "Les libertés de la personne : vie, intégrité, sûreté, vie privée et égalité",
    description: "Libertés de la personne : droit à la vie, torture (article 231-1), garde à vue, présomption d'innocence, vie privée (loi 09-08) et égalité (article 19).",
    resume: md`
## L'essentiel — Libertés de la personne

- **Droit à la vie** (article **20**) ; peine de mort prévue, **moratoire** de fait depuis 1993, débat sur l'abolition ; avortement encadré.
- **Intégrité** (article **22**) : interdiction de la torture et des traitements cruels, inhumains ou dégradants ; **loi 43-04** (2006), **article 231-1** du Code pénal (agent public, douleur aiguë, aveux) ; nullité des aveux, examen médical, mécanisme national de prévention (2019).
- **Sûreté** (article **23**) : pas d'arrestation hors des cas légaux ; détention arbitraire ou secrète et disparition forcée = crimes ; information immédiate des motifs et des droits (silence), assistance juridique, contact avec les proches ; présomption d'innocence.
- **Garde à vue** : OPJ sous contrôle du parquet ; **48 heures** + 24 sur autorisation écrite ; 96 heures (sûreté de l'État, terrorisme renouvelable) ; avocat ; famille informée.
- **Détention préventive** exceptionnelle ; alternatives, peines alternatives (loi 43-22) ; détention arbitraire réprimée (articles 225 et suivants du Code pénal).
- **Vie privée** (article **24**) : domicile, secret des communications (accès autorisé par la justice), liberté de circulation ; **loi 09-08** et **CNDP** ; diffusion d'images sans consentement réprimée (loi 103-13).
- **Égalité** : préambule (non-discrimination), article 6 ; **article 19** (égalité femmes-hommes « dans le respect des constantes », parité) ; **APALD** (loi 79-14) ; Code de la famille (2004), nationalité (2007), loi **103-13** (2018), quotas ; débats (successions, réforme du Code de la famille).
- Handicap (article 34, loi-cadre 97-13) ; étrangers (article 30), politique migratoire de 2013.
`,
    exercices: md`
### Exercice 2 — Torture ou non ?

Le fait constitue-t-il une torture au sens de l'article 231-1 du Code pénal ? 1) Un policier gifle à plusieurs reprises un suspect pour obtenir le nom de ses complices ; 2) un particulier séquestre et frappe son voisin à la suite d'une dispute ; 3) un gardien de prison prive un détenu de sommeil pendant plusieurs jours pour le punir, avec l'accord de son supérieur ; 4) un agent menotte un suspect dangereux lors de son transfert.

<details><summary>Voir le corrigé</summary>

1) Oui : agent public, souffrance infligée intentionnellement pour obtenir des renseignements. 2) Non au sens de l'article 231-1 (pas d'agent public) : séquestration et violences, réprimées par d'autres textes. 3) Oui : souffrance aiguë infligée par un agent public à titre de punition. 4) Non en principe : mesure de sécurité proportionnée, sauf conditions dégradantes.

</details>

### Exercice 3 — Vrai ou faux ?

1) La garde à vue de droit commun est de quarante-huit heures. 2) Le gouverneur peut autoriser l'écoute des téléphones. 3) La femme marocaine transmet sa nationalité à ses enfants depuis 2007. 4) Les traitements de données personnelles sont contrôlés par la HACA. 5) L'article 19 consacre l'égalité entre l'homme et la femme.

<details><summary>Voir le corrigé</summary>

1) Vrai, prolongeable de vingt-quatre heures sur autorisation écrite du parquet. 2) Faux : seule la justice peut l'autoriser. 3) Vrai (réforme du Code de la nationalité). 4) Faux : c'est la CNDP (loi 09-08). 5) Vrai, dans le respect des dispositions de la Constitution, des constantes et des lois du Royaume, avec la recherche de la parité.

</details>
`,
    qcm: [
      { q: "Le droit à la vie est consacré par l'article :", choix: ["19", "20", "22", "24"], bonne: 1, explication: "Premier droit de tout être humain." },
      { q: "Depuis quand aucune exécution capitale n'a eu lieu au Maroc ?", choix: ["1956", "1975", "1993", "2011"], bonne: 2, explication: "Moratoire de fait." },
      { q: "L'interdiction de la torture figure à l'article de la Constitution :", choix: ["20", "22", "29", "117"], bonne: 1, explication: "Elle constitue un crime puni par la loi." },
      { q: "La définition pénale de la torture a été introduite par la loi :", choix: ["43-04", "09-08", "103-13", "79-14"], bonne: 0, explication: "Article 231-1 du Code pénal." },
      { q: "La garde à vue de droit commun dure en principe :", choix: ["24 heures", "48 heures", "96 heures", "Une semaine"], bonne: 1, explication: "Prolongeable de 24 heures sur autorisation écrite." },
      { q: "Le droit de garder le silence de la personne arrêtée est mentionné à l'article :", choix: ["21", "23", "25", "27"], bonne: 1, explication: "Avec l'information immédiate des motifs." },
      { q: "La protection des données à caractère personnel est organisée par la loi :", choix: ["09-08", "31-13", "88-13", "76-15"], bonne: 0, explication: "Contrôle de la CNDP." },
      { q: "Les communications privées ne peuvent être interceptées que sur autorisation :", choix: ["Du gouverneur", "De la justice", "De l'opérateur", "Du ministre de l'Intérieur"], bonne: 1, explication: "Article 24." },
      { q: "La loi sur la lutte contre les violences faites aux femmes est la loi :", choix: ["103-13", "70-03", "62-06", "43-22"], bonne: 0, explication: "Adoptée en 2018." },
      { q: "L'Autorité pour la parité et la lutte contre toutes formes de discrimination est prévue par l'article :", choix: ["19", "161", "164", "167"], bonne: 2, explication: "Loi 79-14." },
    ],
  },

  6: {
    titre: "Les libertés de la pensée : conscience, culte, expression, presse et information",
    description: "Libertés de pensée : culte (articles 3 et 41), expression (article 25), presse (loi 88-13, Conseil national de la presse), accès à l'information (31-13).",
    resume: md`
## L'essentiel — Libertés de la pensée

- **Pensée, opinion, expression** sous toutes leurs formes, création, recherche (article **25**) ; article 18 et 19 du PIDCP.
- **Islam religion de l'État**, libre exercice des cultes (article **3**) ; Roi **Commandeur des croyants**, garant du libre exercice des cultes (article **41**) ; Conseil supérieur des oulémas (fatwas) ; communauté juive (préambule, statut personnel propre).
- Limites pénales : ébranlement de la foi (article **220** du Code pénal), rupture publique du jeûne (article **222**) ; débat sur la **liberté de conscience** (terme non retenu en 2011, évolution des oulémas en 2017).
- Expression : idées qui heurtent ou choquent protégées ; restrictions **prévues par la loi**, **nécessaires** (réputation, ordre public, sécurité) ; interdiction de l'appel à la haine (article 20 du PIDCP).
- Limites marocaines : diffamation, injure, haine, apologie du terrorisme (loi 03-03), vie privée, **constantes** (islam, monarchie, intégrité territoriale), fausses nouvelles ; débat sur le recours au Code pénal.
- **Presse** (article **28**, pas de censure préalable) ; **loi 88-13** (2016) : déclaration au procureur du Roi, presse électronique, **amendes** au lieu de la prison, **protection des sources**, droit de réponse, saisie par le juge ; journalistes (loi 89-13) ; **Conseil national de la presse** (loi 90-13, autorégulation, carte, déontologie).
- **Audiovisuel** : loi 77-03, **HACA** (article 165), licences, pluralisme.
- **Accès à l'information** (article **27**, loi **31-13**) : citoyens et étrangers résidents, publication proactive, demande sans motif, réponse en **20 jours** ouvrables, exceptions, **CDAI**, tribunal administratif.
- Enseignement privé autorisé et contrôlé ; liberté académique.
`,
    exercices: md`
### Exercice 2 — Quel texte ?

Indiquez le texte applicable : 1) un journal en ligne publie une enquête diffamatoire ; 2) une radio privée diffuse un programme sans pluralisme pendant la campagne électorale ; 3) un citoyen demande le budget de sa commune ; 4) un individu publie sur un réseau social une vidéo faisant l'apologie d'un attentat ; 5) un journaliste demande sa carte de presse.

<details><summary>Voir le corrigé</summary>

1) Code de la presse et de l'édition (loi 88-13). 2) Loi 77-03 sur la communication audiovisuelle, contrôle de la HACA. 3) Loi 31-13 sur le droit d'accès à l'information (article 27 de la Constitution). 4) Loi 03-03 relative à la lutte contre le terrorisme et Code pénal (apologie). 5) Loi 89-13 sur le statut des journalistes professionnels et Conseil national de la presse (loi 90-13).

</details>

### Exercice 3 — Question de cours

Expliquez pourquoi la protection des sources des journalistes est essentielle à la liberté de la presse.

<details><summary>Voir le corrigé</summary>

Sans garantie de confidentialité, les sources (agents publics, salariés, témoins) n'oseraient pas transmettre des informations d'intérêt général sur des irrégularités, par crainte de représailles. La presse ne pourrait plus jouer son rôle de contrôle des pouvoirs publics et privés. C'est pourquoi le Code de la presse (loi 88-13) protège les sources, sauf décision judiciaire dans des cas limités, et pourquoi les instances internationales y voient une condition de la liberté d'expression au sens de l'article 19 du PIDCP.

</details>
`,
    qcm: [
      { q: "La liberté de pensée, d'opinion et d'expression est garantie par l'article :", choix: ["3", "25", "27", "41"], bonne: 1, explication: "Sous toutes leurs formes." },
      { q: "Le garant du libre exercice des cultes est, selon l'article 41 :", choix: ["Le chef du gouvernement", "Le Roi, Commandeur des croyants", "Le ministre des Habous seul", "Le CNDH"], bonne: 1, explication: "Il préside le Conseil supérieur des oulémas." },
      { q: "La seule instance habilitée à émettre des fatwas officielles est :", choix: ["Le CNDH", "Le Conseil supérieur des oulémas", "La Cour constitutionnelle", "La HACA"], bonne: 1, explication: "Présidée par le Roi." },
      { q: "La liberté de la presse ne peut être limitée par aucune forme de censure préalable selon l'article :", choix: ["25", "27", "28", "165"], bonne: 2, explication: "Constitution de 2011." },
      { q: "Le Code de la presse et de l'édition est la loi :", choix: ["88-13", "89-13", "90-13", "77-03"], bonne: 0, explication: "Adopté en 2016." },
      { q: "Le Code de la presse de 2016 a remplacé pour la plupart des délits de presse :", choix: ["Les amendes par la prison", "Les peines de prison par des amendes", "Le juge par l'administration", "Le droit de réponse par la censure"], bonne: 1, explication: "Suppression des peines privatives de liberté." },
      { q: "Le Conseil national de la presse est :", choix: ["Une autorité de censure", "Une instance d'autorégulation de la profession", "Un tribunal pénal", "Une direction du ministère"], bonne: 1, explication: "Loi 90-13." },
      { q: "Les licences des radios et télévisions privées sont délivrées par :", choix: ["Le Conseil national de la presse", "La HACA", "Le procureur du Roi", "La CNDP"], bonne: 1, explication: "Article 165 de la Constitution." },
      { q: "Le droit d'accès à l'information est organisé par la loi :", choix: ["31-13", "09-08", "88-13", "54-19"], bonne: 0, explication: "Article 27 de la Constitution." },
      { q: "La demande d'accès à l'information doit-elle être motivée ?", choix: ["Oui, toujours", "Non, le demandeur n'a pas à justifier d'un intérêt", "Seulement pour les étrangers", "Seulement pour les journalistes"], bonne: 1, explication: "Loi 31-13." },
    ],
  },

  7: {
    titre: "Les libertés collectives et les droits économiques et sociaux",
    description: "Libertés collectives : manifestations (dahir de 1958), associations (article 12), partis, syndicats, grève (article 29) et droits sociaux (article 31).",
    resume: md`
## L'essentiel — Libertés collectives et droits sociaux

- **Article 29** : réunion, rassemblement, manifestation pacifique, association, appartenance syndicale et politique, **grève** ; **dahir 1-58-377** (rassemblements).
- **Réunions publiques** : déclaration préalable, bureau ; **manifestations** : déclaration (3 à 15 jours francs), interdiction écrite si trouble à l'ordre public, contrôle du juge administratif ; **attroupements** interdits ; réforme recommandée par le CNDH.
- **Associations** (article **12**, dahir **1-58-376**) : constitution libre, déclaration, récépissé provisoire puis définitif sous **soixante jours** ; nullité pour objet illicite ou contraire aux constantes ; **suspension ou dissolution seulement par le juge** ; utilité publique ; financements étrangers déclarés.
- **Partis** (article **7**, loi organique **29-11**) : liberté, pas de parti unique ni de parti religieux, ethnique, linguistique ou régional ; financement contrôlé par la Cour des comptes ; dissolution judiciaire.
- **Syndicats** (article 8, Code du travail) ; Convention OIT **98** ratifiée, **87** non ; exclusions (magistrats, forces armées).
- **Grève** garantie (article 29), loi organique **97-15** adoptée en 2025 après des années d'attente (préavis, service minimum, à vérifier) ; objet professionnel ; article 288 du Code pénal (entrave au travail).
- **Propriété** et **liberté d'entreprendre** (article **35**) ; Conseil de la concurrence (article 166, loi 104-12).
- **Article 31** : santé, protection sociale, éducation, logement, travail, eau, environnement, développement durable : **obligation de moyens**, justiciabilité limitée (discrimination, droits prévus par une loi précise).
- Mise en œuvre : protection sociale (loi-cadre **09-21**), éducation (51-17), environnement (99-12), INDH ; langues (article 5, loi organique **26-16** sur l'amazighe).
`,
    exercices: md`
### Exercice 2 — Qui peut dissoudre ?

L'autorité peut-elle agir seule ? 1) Dissoudre une association dont l'objet est contraire aux lois ; 2) interdire une manifestation de nature à troubler gravement l'ordre public ; 3) dissoudre un parti politique ; 4) disperser un attroupement armé après sommations ; 5) refuser définitivement le récépissé d'une association qui critique le gouvernement.

<details><summary>Voir le corrigé</summary>

1) Non : seule une décision de justice (tribunal de première instance), sur demande notamment du ministère public. 2) Oui : décision écrite, motivée et proportionnée, sous le contrôle du juge administratif. 3) Non : dissolution judiciaire (loi organique 29-11). 4) Oui : l'attroupement armé est interdit et peut être dispersé selon la procédure légale. 5) Non : le régime est déclaratif, le refus fondé sur les opinions est illégal.

</details>

### Exercice 3 — Dissertation : plan détaillé

Proposez un plan pour le sujet : « Les droits économiques et sociaux dans la Constitution de 2011 : de véritables droits ? »

<details><summary>Voir le corrigé</summary>

*Introduction* : article 31, PIDESC (réalisation progressive), indivisibilité ; problématique : droits subjectifs ou objectifs de politique publique ?
**I. Une consécration étendue mais à portée limitée** — A. Un catalogue large : santé, protection sociale, éducation, logement, travail, eau, environnement (article 31), handicap (34), jeunesse (33). B. Une obligation de moyens : « œuvrent à la mobilisation de tous les moyens disponibles », dépendance aux ressources, justiciabilité directe réduite.
**II. Une effectivité en construction** — A. Le relais législatif et des politiques publiques : loi-cadre 09-21 sur la protection sociale, loi-cadre 51-17, INDH, logement social. B. Le rôle croissant du juge et des institutions : contrôle des discriminations, droits prévus par la loi, Cour constitutionnelle, CNDH, Conseil économique, social et environnemental.
*Conclusion* : de véritables droits par leur rang constitutionnel, dont la garantie dépend surtout de la loi et des moyens.

</details>
`,
    qcm: [
      { q: "Les libertés de réunion, de manifestation et le droit de grève sont garantis par l'article :", choix: ["12", "25", "29", "35"], bonne: 2, explication: "La loi fixe les conditions d'exercice." },
      { q: "Le texte relatif aux rassemblements publics est le dahir :", choix: ["1-58-376", "1-58-377", "1-58-378", "1-57-119"], bonne: 1, explication: "Du 15 novembre 1958." },
      { q: "Une manifestation sur la voie publique est soumise à :", choix: ["Une autorisation du ministre", "Une déclaration préalable", "Un vote du conseil communal", "Aucune formalité"], bonne: 1, explication: "Interdiction possible si trouble à l'ordre public." },
      { q: "Selon l'article 12, une association ne peut être dissoute que par :", choix: ["Le gouverneur", "Une décision de justice", "Le ministre de l'Intérieur", "Le CNDH"], bonne: 1, explication: "Garantie constitutionnelle." },
      { q: "À défaut de récépissé définitif dans un délai de soixante jours, l'association :", choix: ["Est dissoute", "Peut exercer ses activités conformément à ses statuts", "Doit refaire sa déclaration", "Devient un parti"], bonne: 1, explication: "Dahir de 1958 modifié." },
      { q: "La loi organique relative aux partis politiques est la loi :", choix: ["29-11", "97-15", "26-16", "09-21"], bonne: 0, explication: "Adoptée en 2011." },
      { q: "Le Maroc n'a pas ratifié la convention de l'OIT relative à :", choix: ["La liberté syndicale (n° 87)", "Le droit d'organisation et de négociation collective (n° 98)", "Le travail forcé (n° 29)", "L'âge minimum (n° 138)"], bonne: 0, explication: "Revendication syndicale ancienne." },
      { q: "Les modalités d'exercice du droit de grève sont fixées par :", choix: ["Un décret", "Une loi organique", "Une circulaire", "Le règlement intérieur de l'entreprise"], bonne: 1, explication: "Article 29 ; loi organique 97-15." },
      { q: "Les droits de l'article 31 impliquent pour l'État principalement :", choix: ["Une obligation de résultat immédiate", "Une obligation de moyens", "Aucune obligation", "Une obligation des seules collectivités"], bonne: 1, explication: "Mobilisation de tous les moyens disponibles." },
      { q: "La généralisation de la protection sociale est organisée par la loi-cadre :", choix: ["09-21", "51-17", "99-12", "97-13"], bonne: 0, explication: "Adoptée en 2021." },
    ],
  },
};

export default chapitres;
