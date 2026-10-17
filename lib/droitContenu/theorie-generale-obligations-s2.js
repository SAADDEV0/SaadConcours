// Théorie générale des obligations (Droit S2) — compléments par chapitre : description SEO, résumé, exercices 2 et 3, QCM.
const md = String.raw;

const chapitres = {
  1: {
    titre: "La notion d'obligation et ses sources",
    description: "Théorie des obligations : définition de l'obligation, droit personnel et droit réel, obligation naturelle, classifications et sources (article 1 du DOC).",
    resume: md`
## L'essentiel — Obligation et sources

- **Obligation** : lien de droit entre un créancier et un débiteur, qui doit donner, faire ou ne pas faire.
- Trois éléments : sujets, objet, lien de droit (contrainte judiciaire).
- Droit **personnel** (contre une personne) ≠ droit **réel** (sur une chose, opposable à tous).
- Texte de base : **DOC** du 12 août 1913, modifié notamment par la loi 53-05 (2007).
- Obligation **naturelle** : non exigible, mais le paiement volontaire ne se répète pas (article 73).
- Obligation de **moyens** (prouver la faute) / de **résultat** (prouver l'absence de résultat) : critère de l'aléa.
- Sources (article 1) : conventions et déclarations de volonté, quasi-contrats, délits (article 77), quasi-délits (article 78) ; plus la loi.
- **Acte juridique** (effets voulus, preuve écrite au-delà du seuil) / **fait juridique** (preuve par tous moyens).
- Contrats : synallagmatique ou unilatéral, onéreux ou gratuit, consensuel, solennel ou réel, instantané ou successif, d'adhésion (loi 31-08, clauses abusives).
`,
    exercices: md`
### Exercice 2 — Moyens ou résultat ?

Qualifiez l'obligation : 1) l'avocat qui défend un client ; 2) l'entreprise de déménagement qui transporte des meubles de Rabat à Tanger ; 3) le professeur de soutien qui prépare un élève au baccalauréat ; 4) le vendeur qui doit livrer un réfrigérateur neuf ; 5) le moniteur d'une salle d'escalade qui encadre des débutants.

<details><summary>Voir le corrigé</summary>

1) Moyens : l'issue du procès dépend du juge et des preuves. 2) Résultat : faire arriver les meubles intacts. 3) Moyens : la réussite dépend aussi du travail de l'élève. 4) Résultat : livrer la chose convenue. 5) Moyens en principe, car les élèves participent activement à l'activité ; la jurisprudence se montre toutefois exigeante sur la sécurité du matériel.

</details>

### Exercice 3 — Classer les contrats

Classez selon tous les critères connus : a) le bail d'un local commercial à Marrakech pour 12 000 DH par mois ; b) la donation d'un terrain par un père à sa fille ; c) un contrat d'assurance automobile souscrit en ligne.

<details><summary>Voir le corrigé</summary>

a) Synallagmatique, à titre onéreux, consensuel (même si un écrit est utile pour la preuve), à exécution successive, généralement de gré à gré, commutatif.
b) Unilatéral (seul le donateur s'oblige), à titre gratuit, solennel pour un immeuble (acte écrit et inscription pour les biens immatriculés), instantané.
c) Synallagmatique, à titre onéreux, d'adhésion (conditions générales de l'assureur), à exécution successive, aléatoire ; conclu par voie électronique (articles 65-1 et suivants du DOC issus de la loi 53-05).

</details>
`,
    qcm: [
      { q: "Le texte de base du droit des obligations au Maroc est :", choix: ["Le Code de commerce", "Le Dahir des obligations et contrats de 1913", "Le Code de la famille", "La Constitution de 2011"], bonne: 1, explication: "Le DOC du 12 août 1913, toujours en vigueur." },
      { q: "Le droit de créance est un droit :", choix: ["Réel", "Personnel", "Extrapatrimonial", "Politique"], bonne: 1, explication: "Il s'exerce contre une personne, le débiteur." },
      { q: "Une dette prescrite payée volontairement :", choix: ["Peut être réclamée en retour", "Ne peut pas être répétée", "Est nulle", "Doit être payée deux fois"], bonne: 1, explication: "C'est l'effet de l'obligation naturelle." },
      { q: "La clause de non-concurrence crée une obligation :", choix: ["De donner", "De faire", "De ne pas faire", "Naturelle"], bonne: 2, explication: "Le débiteur doit s'abstenir." },
      { q: "Dans une obligation de moyens, le créancier doit prouver :", choix: ["Seulement l'absence de résultat", "La faute du débiteur", "La force majeure", "L'existence d'un écrit"], bonne: 1, explication: "Il doit montrer un manque de diligence." },
      { q: "Le quasi-délit est :", choix: ["Un fait illicite intentionnel", "Un fait illicite non intentionnel, par imprudence ou négligence", "Un contrat imparfait", "Un acte unilatéral"], bonne: 1, explication: "Article 78 du DOC." },
      { q: "L'enrichissement sans cause est :", choix: ["Un délit", "Un quasi-contrat", "Un contrat réel", "Une obligation naturelle"], bonne: 1, explication: "Fait licite qui oblige à restituer." },
      { q: "Un fait juridique se prouve en principe :", choix: ["Uniquement par acte notarié", "Par tous moyens", "Uniquement par l'aveu", "Par le serment seulement"], bonne: 1, explication: "On ne peut pas préconstituer la preuve d'un accident." },
      { q: "Le contrat d'assurance est un contrat :", choix: ["Commutatif", "Aléatoire", "Réel", "Gratuit"], bonne: 1, explication: "La prestation de l'assureur dépend d'un événement incertain." },
      { q: "La loi marocaine qui protège le consommateur contre les clauses abusives est la loi :", choix: ["31-08", "53-05", "70-03", "15-95"], bonne: 0, explication: "Loi de 2011 édictant des mesures de protection du consommateur." },
    ],
  },

  2: {
    titre: "La formation du contrat : le consentement",
    description: "Formation du contrat en droit marocain : offre, acceptation, contrat entre absents et électronique, avant-contrats, erreur, dol, violence et lésion.",
    resume: md`
## L'essentiel — Le consentement

- Article 2 du DOC : **capacité**, **déclaration valable de volonté**, **objet certain**, **cause licite**.
- **Consensualisme** : accord sur les éléments essentiels (article 19), sauf forme imposée par la loi.
- **Offre** : ferme et précise ; à personne déterminée ou au public ; entre présents sans délai, elle tombe faute d'acceptation immédiate (article 23) ; avec délai, elle lie son auteur (article 29).
- **Acceptation** : pure et simple, expresse ou tacite ; une réponse modifiée = **contre-offre** ; le silence ne vaut pas acceptation, sauf relations d'affaires antérieures.
- Entre absents : contrat formé au lieu et au moment de la réponse acceptant l'offre (article 24).
- Contrat électronique : articles 65-1 et suivants (loi 53-05), vérification de la commande avant confirmation.
- Avant-contrats : pourparlers (rupture fautive seulement), pacte de préférence, promesse unilatérale, promesse synallagmatique.
- Vices (article 39) : **erreur** sur la substance ou la personne, **dol** déterminant (article 52), **violence** (articles 46-47, pas la crainte révérencielle seule, article 50).
- **Lésion** : rescision seulement si dol (article 55) ou si la victime est mineure ou incapable et la lésion dépasse le tiers (article 56).
`,
    exercices: md`
### Exercice 2 — Offre ou pas ?

Dites s'il y a offre : 1) un catalogue d'un magasin d'électroménager de Casablanca avec les prix ; 2) un message « je cherche à vendre mon terrain à Settat, faites-moi une proposition » ; 3) une annonce d'emploi « recrute comptable, salaire selon profil » ; 4) un distributeur automatique de boissons.

<details><summary>Voir le corrigé</summary>

1) Offre au public : chose et prix déterminés (dans la limite des stocks). 2) Pas d'offre : pas de prix, c'est une invitation à négocier. 3) Pas d'offre : le salaire n'est pas fixé et le contrat de travail est conclu en considération de la personne. 4) Offre au public permanente : l'introduction des pièces vaut acceptation tacite.

</details>

### Exercice 3 — Quel vice ?

Identifiez le vice éventuel : a) Ali achète un tableau en croyant qu'il est d'un peintre célèbre ; le vendeur, de bonne foi, le croyait aussi ; b) un commerçant signe un contrat de fourniture parce qu'un concurrent a menacé de brûler son entrepôt ; c) un mineur de 16 ans vend pour 3 000 DH une moto qui en vaut 9 000 ; d) Sara paie un smartphone 1 000 DH de plus que dans le magasin voisin.

<details><summary>Voir le corrigé</summary>

a) **Erreur** sur la substance (l'authenticité), commune aux deux parties : rescision possible si elle a été déterminante.
b) **Violence**, même exercée par un tiers : menace d'un mal grave sur les biens ; rescision possible.
c) **Lésion** au profit d'un mineur : la différence (6 000 DH) dépasse le tiers de la valeur ; rescision possible même sans dol (article 56). De plus, l'acte d'un mineur est lui-même annulable pour incapacité.
d) Aucun vice : l'erreur sur la valeur ne suffit pas, et la lésion entre majeurs capables n'est pas sanctionnée sans dol.

</details>
`,
    qcm: [
      { q: "Les conditions de validité du contrat sont énumérées par l'article :", choix: ["1 du DOC", "2 du DOC", "230 du DOC", "443 du DOC"], bonne: 1, explication: "Capacité, consentement, objet, cause." },
      { q: "Une réponse qui accepte l'offre en modifiant le prix est :", choix: ["Une acceptation", "Une contre-offre", "Une promesse unilatérale", "Un pacte de préférence"], bonne: 1, explication: "Elle vaut refus de l'offre initiale." },
      { q: "En principe, le silence :", choix: ["Vaut acceptation", "Ne vaut pas acceptation", "Vaut offre", "Annule le contrat"], bonne: 1, explication: "Sauf relations d'affaires antérieures." },
      { q: "Entre absents, le DOC fixe la formation du contrat :", choix: ["À la réception de l'acceptation par l'offrant", "Au moment et au lieu où le destinataire répond en acceptant", "Au jour de l'exécution", "Au jour de l'offre"], bonne: 1, explication: "Article 24 : système de l'émission." },
      { q: "Les règles du contrat électronique ont été introduites dans le DOC par la loi :", choix: ["31-08", "53-05", "09-08", "17-95"], bonne: 1, explication: "Articles 65-1 et suivants." },
      { q: "Le mensonge d'un cocontractant qui détermine l'autre à contracter est :", choix: ["Une erreur", "Un dol", "Une lésion", "Une violence"], bonne: 1, explication: "Article 52 du DOC." },
      { q: "Le silence volontaire sur une information déterminante est :", choix: ["Toujours licite", "Une réticence dolosive", "Une violence", "Une offre"], bonne: 1, explication: "Il est assimilé au dol." },
      { q: "La crainte révérencielle seule :", choix: ["Suffit à annuler le contrat", "Ne suffit pas à annuler le contrat", "Rend le contrat inexistant", "Est un dol"], bonne: 1, explication: "Article 50, sauf menaces." },
      { q: "Entre majeurs capables, la lésion sans dol :", choix: ["Annule toujours le contrat", "Ne permet pas la rescision", "Rend le contrat solennel", "Oblige le juge à réviser le prix"], bonne: 1, explication: "Article 55 du DOC." },
      { q: "La lésion ouvre droit à rescision au profit d'un mineur lorsqu'elle dépasse :", choix: ["Le quart", "Le tiers", "La moitié", "Le dixième"], bonne: 1, explication: "Article 56 du DOC." },
    ],
  },

  3: {
    titre: "Capacité, objet, cause et nullités",
    description: "Validité du contrat : capacité (DOC et Code de la famille), objet possible et licite, cause et présomption de cause, nullité absolue et rescision.",
    resume: md`
## L'essentiel — Capacité, objet, cause, nullités

- Capacité : la règle (article 3 du DOC) ; majorité à **18 ans grégoriens** (article 209 du Code de la famille).
- Moins de 12 ans : actes nuls ; 12 à 18 ans : actes avantageux valables, préjudiciables nuls, mixtes soumis au représentant légal.
- Personnes morales : principe de **spécialité**.
- Objet : existant ou futur, possible, déterminé ou déterminable, licite ; pas de pacte sur succession future (article 61).
- Cause : sans cause ou cause illicite = obligation non avenue (article 62) ; cause **présumée** (article 63) ; cause fausse (article 64).
- **Nullité absolue** : élément substantiel manquant, toute personne intéressée agit, pas de confirmation.
- **Annulabilité** (rescision) : vices, incapacité, lésion ; seule la partie protégée agit ; confirmation possible ; délai court (un an, articles 311 et suivants).
- Effets : rétroactivité et **restitutions** ; l'incapable ne restitue que son profit ; restitution en valeur pour les contrats successifs.
- **Nullité partielle** possible ; protection des tiers de bonne foi inscrits au titre foncier.
`,
    exercices: md`
### Exercice 2 — Nullité absolue ou rescision ?

Indiquez la sanction : 1) vente d'un terrain du domaine public maritime ; 2) contrat signé sous la menace d'un couteau ; 3) vente d'un appartement par un mineur de 15 ans ; 4) vente d'une voiture déjà détruite dans un incendie la veille, à l'insu des deux parties ; 5) contrat conclu à la suite d'un mensonge du vendeur sur le kilométrage.

<details><summary>Voir le corrigé</summary>

1) Nullité absolue : objet hors commerce (domaine public inaliénable). 2) Rescision pour violence. 3) Rescision au profit du mineur (acte préjudiciable passé sans le représentant légal ; la vente d'un immeuble de mineur exige en outre l'autorisation du juge). 4) Nullité absolue : objet inexistant au moment du contrat. 5) Rescision pour dol.

</details>

### Exercice 3 — Les restitutions

Le 1er février, Mehdi a acheté à Hind un local commercial à Oujda pour 900 000 DH et l'a exploité jusqu'à l'annulation de la vente pour dol de Hind, le 1er novembre. La valeur locative du local est de 6 000 DH par mois. Quelles restitutions ?

<details><summary>Voir le corrigé</summary>

L'annulation est rétroactive : Mehdi rend le local et Hind rend le prix de 900 000 DH. La jouissance du local ne peut pas être restituée en nature : elle se restitue en valeur. Du 1er février au 1er novembre, il s'est écoulé 9 mois, soit 9 × 6 000 = 54 000 DH d'indemnité d'occupation, qui peut se compenser avec les sommes dues par Hind. Celle-ci, auteur du dol, peut en outre être condamnée à des dommages-intérêts pour le préjudice subi par Mehdi (frais d'acte, frais d'installation).

</details>
`,
    qcm: [
      { q: "La majorité civile au Maroc est fixée à :", choix: ["16 ans", "18 ans grégoriens révolus", "20 ans", "21 ans"], bonne: 1, explication: "Article 209 du Code de la famille." },
      { q: "Selon le DOC, la capacité est :", choix: ["L'exception", "La règle", "Réservée aux commerçants", "Accordée par le juge"], bonne: 1, explication: "Article 3 du DOC." },
      { q: "L'acte avantageux passé seul par un mineur doué de discernement est :", choix: ["Nul", "Valable", "Toujours annulable", "Inexistant"], bonne: 1, explication: "Exemple : accepter une donation." },
      { q: "La convention portant sur la succession d'une personne vivante est :", choix: ["Valable avec son accord", "Interdite", "Valable si elle est notariée", "Valable entre frères"], bonne: 1, explication: "Article 61 du DOC." },
      { q: "Une reconnaissance de dette qui ne mentionne pas la cause est :", choix: ["Nulle", "Présumée avoir une cause", "Inexistante", "Annulable par le créancier"], bonne: 1, explication: "Article 63 du DOC." },
      { q: "Le prêt consenti en connaissance de cause pour financer un trafic a une cause :", choix: ["Fausse", "Illicite", "Licite", "Présumée"], bonne: 1, explication: "L'obligation est non avenue (article 62)." },
      { q: "La nullité absolue peut être invoquée par :", choix: ["La seule victime", "Toute personne intéressée", "Le seul créancier", "Le seul notaire"], bonne: 1, explication: "Elle protège l'intérêt général." },
      { q: "La confirmation est possible :", choix: ["Pour un acte frappé de nullité absolue", "Pour un acte annulable", "Jamais", "Seulement pour les contrats commerciaux"], bonne: 1, explication: "La partie protégée renonce à agir." },
      { q: "L'incapable dont l'acte est annulé doit restituer :", choix: ["Tout ce qu'il a reçu", "Ce dont il a profité", "Le double", "Rien du tout dans tous les cas"], bonne: 1, explication: "Protection de l'incapable." },
      { q: "Dans un bail annulé, la jouissance du local se restitue :", choix: ["En nature", "En valeur", "Par la confiscation du local", "Par une peine"], bonne: 1, explication: "Indemnité d'occupation." },
    ],
  },

  4: {
    titre: "Les effets du contrat et l'inexécution",
    description: "Effets du contrat : force obligatoire (article 230 du DOC), bonne foi, effet relatif, exécution forcée, résolution, dommages-intérêts et force majeure.",
    resume: md`
## L'essentiel — Effets et inexécution

- **Force obligatoire** (article 230) : le contrat tient lieu de loi aux parties ; pas de révision générale pour imprévision.
- **Bonne foi** (article 231) : obligations accessoires d'information, de conseil, de sécurité.
- Interprétation : commune intention si les termes sont obscurs ; en faveur du débiteur, et du consommateur (loi 31-08).
- **Effet relatif** (article 228) ≠ opposabilité ; exceptions : stipulation pour autrui (article 34), porte-fort, action directe.
- **Mise en demeure** (article 254) : retard sans cause valable ; fait courir les intérêts.
- Sanctions : exécution forcée (astreinte), exception d'inexécution (article 235), **résolution** judiciaire avec délai de grâce possible (article 259) ou clause résolutoire (article 260), dommages-intérêts (article 263).
- Dommages-intérêts : **perte effective + gain manqué**, conséquence directe (article 264).
- **Clause pénale** révisable par le juge (article 264, loi 27-95) ; clause exonératoire sans effet en cas de dol ou faute lourde (article 232).
- **Force majeure** (articles 268-269) : imprévisible, irrésistible, extérieure ; exonère le débiteur et libère l'autre partie si l'impossibilité est définitive.
`,
    exercices: md`
### Exercice 2 — Quelle sanction choisir ?

Proposez la sanction la plus utile : 1) un client a payé une cuisine équipée que le fabricant refuse de livrer ; 2) un locataire ne paie plus son loyer depuis six mois ; 3) un fournisseur livre avec dix jours de retard des cartables pour la rentrée scolaire ; 4) un acheteur n'a pas encore payé une machine dont le vendeur n'a pas encore commencé la fabrication.

<details><summary>Voir le corrigé</summary>

1) Exécution forcée en nature, avec astreinte, et dommages-intérêts pour le retard. 2) Paiement des loyers et résolution du bail (expulsion) par décision de justice, ou mise en œuvre de la clause résolutoire si le bail en contient une ; la procédure spéciale de la loi 67-12 sur les baux d'habitation peut s'appliquer. 3) Dommages-intérêts pour le manque à gagner : la rentrée étant passée, les cartables se vendent moins bien ; la résolution peut se discuter si la date était essentielle. 4) Exception d'inexécution : chacun peut suspendre sa prestation selon l'ordre prévu au contrat ; à défaut d'accord, les obligations s'exécutent en principe simultanément.

</details>

### Exercice 3 — Évaluer le préjudice

Une entreprise de transport devait livrer 2 tonnes de dattes d'Errachidia à un grossiste de Casablanca avant l'Aïd. Elle livre une semaine après, les dattes ayant perdu 30 % de leur valeur de vente, estimée à 60 000 DH. Le grossiste a en outre payé 2 500 DH de frais de stockage supplémentaires. Le contrat limite la responsabilité du transporteur à 10 000 DH. Le retard est dû au fait que le chauffeur a fait un détour pour une livraison personnelle. Calculez le préjudice et dites si la clause s'applique.

<details><summary>Voir le corrigé</summary>

Gain manqué : 30 % × 60 000 = 18 000 DH. Perte effective : 2 500 DH. Préjudice total : 20 500 DH. La clause limitative fixerait l'indemnité à 10 000 DH. Mais le détour pour une livraison personnelle est un manquement délibéré, assimilable à une faute lourde, voire à un dol : la clause est alors écartée (article 232). Le grossiste peut obtenir 20 500 DH, outre les intérêts à compter de la mise en demeure.

</details>
`,
    qcm: [
      { q: "Le principe de la force obligatoire du contrat est posé par l'article :", choix: ["2 du DOC", "230 du DOC", "77 du DOC", "443 du DOC"], bonne: 1, explication: "Le contrat tient lieu de loi aux parties." },
      { q: "Le devoir d'exécuter le contrat de bonne foi figure à l'article :", choix: ["231 du DOC", "62 du DOC", "106 du DOC", "319 du DOC"], bonne: 0, explication: "Il fonde les obligations accessoires." },
      { q: "Le juge peut réviser :", choix: ["Tout contrat déséquilibré", "La clause pénale manifestement excessive ou dérisoire", "Le prix de toute vente", "Aucune clause"], bonne: 1, explication: "Article 264 modifié par la loi 27-95." },
      { q: "L'assurance-vie au profit des enfants est un exemple de :", choix: ["Porte-fort", "Stipulation pour autrui", "Clause pénale", "Gestion d'affaires"], bonne: 1, explication: "Le bénéficiaire a un droit direct contre l'assureur." },
      { q: "Refuser de payer tant que la marchandise n'est pas livrée, c'est invoquer :", choix: ["La résolution", "L'exception d'inexécution", "La force majeure", "La nullité"], bonne: 1, explication: "Article 235, contrat synallagmatique." },
      { q: "La résolution est en principe :", choix: ["Automatique", "Judiciaire", "Interdite", "Prononcée par le notaire"], bonne: 1, explication: "Sauf clause résolutoire." },
      { q: "Les dommages-intérêts comprennent :", choix: ["La seule perte effective", "La perte effective et le gain manqué", "Une peine", "Le double du prix"], bonne: 1, explication: "Article 264 du DOC." },
      { q: "La démission d'un salarié clé constitue pour l'employeur :", choix: ["Une force majeure", "Un fait qui ne l'exonère pas", "Une stipulation pour autrui", "Une nullité"], bonne: 1, explication: "Ni imprévisible ni irrésistible." },
      { q: "Une clause exonératoire de responsabilité est écartée en cas de :", choix: ["Faute légère", "Dol ou faute lourde", "Contrat écrit", "Force majeure"], bonne: 1, explication: "Article 232 du DOC." },
      { q: "La mise en demeure a notamment pour effet :", choix: ["D'annuler le contrat", "De faire courir les intérêts moratoires", "De supprimer la dette", "De transférer la propriété"], bonne: 1, explication: "Elle constate officiellement le retard." },
    ],
  },

  5: {
    titre: "La responsabilité délictuelle",
    description: "Responsabilité délictuelle en droit marocain : faute, dommage, causalité (articles 77-78 du DOC), fait d'autrui, des choses, des animaux, prescription.",
    resume: md`
## L'essentiel — Responsabilité délictuelle

- Réparer le dommage causé hors contrat ; non-cumul avec la responsabilité contractuelle ; distincte de la responsabilité pénale.
- **Délit** (article 77) : fait volontaire et conscient ; **quasi-délit** (article 78) : faute d'imprudence ou de négligence.
- Trois conditions : **faute** (appréciée in abstracto, abus de droit), **dommage** certain, direct, personnel (matériel, corporel, moral), **lien de causalité**.
- Fait d'autrui (article 85) : parents, artisans (exonération s'ils n'ont pu empêcher le fait), commettants (pas d'exonération par l'absence de faute) ; enseignants : article 85 bis.
- État et collectivités (articles 79-80) : faute de service, faute personnelle de l'agent ; tribunaux administratifs (loi 41-90).
- Animaux (article 86), **choses** (article 88 : gardien présumé responsable), bâtiments (article 89 : ruine par défaut d'entretien ou vice).
- Accidents de la circulation : dahir du **2 octobre 1984**, barème d'indemnisation.
- Exonération : force majeure, faute de la victime (partage), fait d'un tiers ; solidarité des coauteurs (article 99).
- Prescription (article 106) : **5 ans** à compter de la connaissance du dommage et du responsable, **20 ans** au plus.
`,
    exercices: md`
### Exercice 2 — Quel régime ?

Indiquez le fondement : 1) un chien échappé mord un passant ; 2) un balcon mal entretenu s'effondre sur un passant ; 3) un client glisse sur une flaque d'huile dans un supermarché ; 4) un serveur renverse un plat brûlant sur un client ; 5) un journaliste publie volontairement de fausses accusations contre un commerçant.

<details><summary>Voir le corrigé</summary>

1) Article 86 (animaux) : responsabilité du gardien. 2) Article 89 (ruine d'un bâtiment par défaut d'entretien) : propriétaire. 3) Article 88 (fait d'une chose) : le supermarché, gardien du sol ; on peut aussi discuter une responsabilité contractuelle (obligation de sécurité envers le client). 4) Fait du préposé : le restaurant répond comme commettant (article 85), dans le cadre de la relation avec son client. 5) Délit (article 77) : atteinte volontaire à l'honneur, dommage moral ; le droit de la presse (loi 88-13) s'applique aussi.

</details>

### Exercice 3 — Partage de responsabilité

Un piéton traverse hors du passage protégé, en regardant son téléphone, et se fait renverser par un automobiliste qui roulait à 80 km/h dans une rue limitée à 50 km/h. Le juge estime que le piéton a contribué au dommage pour un quart. Le préjudice total est évalué à 240 000 DH. Combien le piéton reçoit-il ?

<details><summary>Voir le corrigé</summary>

La faute de la victime n'est pas une force majeure (elle n'est ni imprévisible ni irrésistible pour un conducteur) : elle entraîne un partage. La part laissée à la charge du piéton est de 240 000 × 1/4 = 60 000 DH. Il reçoit 240 000 − 60 000 = 180 000 DH, versés par l'assureur de l'automobiliste, selon les règles d'évaluation du dahir du 2 octobre 1984 pour le dommage corporel.

</details>
`,
    qcm: [
      { q: "Le délit civil au sens de l'article 77 du DOC est un fait :", choix: ["Non intentionnel", "Commis sciemment et volontairement", "Toujours pénal", "Contractuel"], bonne: 1, explication: "L'imprudence relève de l'article 78." },
      { q: "La faute s'apprécie en principe :", choix: ["In concreto", "In abstracto", "Selon l'avis de la victime", "Selon la fortune de l'auteur"], bonne: 1, explication: "Comparaison avec une personne raisonnable." },
      { q: "La perte d'une chance sérieuse est :", choix: ["Jamais indemnisée", "Un dommage indemnisable", "Une faute", "Une force majeure"], bonne: 1, explication: "Le dommage doit être certain ; la chance perdue l'est." },
      { q: "Le commettant répond de son préposé lorsque la faute est commise :", choix: ["En dehors de toute activité", "Dans les fonctions", "Pendant ses congés", "Avant l'embauche"], bonne: 1, explication: "Article 85 du DOC." },
      { q: "La responsabilité du fait des choses repose sur :", choix: ["La propriété seulement", "La garde", "La faute prouvée", "Le contrat"], bonne: 1, explication: "Article 88 du DOC." },
      { q: "La ruine d'un bâtiment due à un défaut d'entretien engage :", choix: ["Le locataire seul", "Le propriétaire", "L'architecte seul", "L'État"], bonne: 1, explication: "Article 89 du DOC." },
      { q: "L'indemnisation des victimes d'accidents de véhicules terrestres à moteur relève du texte de :", choix: ["1913", "2 octobre 1984", "2004", "2011"], bonne: 1, explication: "Dahir portant loi du 2 octobre 1984." },
      { q: "La faute de la victime qui n'a pas les caractères de la force majeure entraîne :", choix: ["Une exonération totale", "Un partage de responsabilité", "La nullité", "Aucun effet"], bonne: 1, explication: "Proportionnel à la gravité des fautes." },
      { q: "L'action en réparation délictuelle se prescrit par :", choix: ["1 an", "5 ans à compter de la connaissance, 20 ans au plus", "15 ans", "30 ans"], bonne: 1, explication: "Article 106 du DOC." },
      { q: "La faute de service d'un agent public engage :", choix: ["L'agent seul", "L'administration", "Le juge", "Le Parlement"], bonne: 1, explication: "Article 79 du DOC ; faute personnelle : article 80." },
    ],
  },

  6: {
    titre: "Les quasi-contrats",
    description: "Quasi-contrats en droit marocain : enrichissement sans cause (articles 66-67 du DOC), paiement de l'indu, gestion d'affaires, calcul des restitutions.",
    resume: md`
## L'essentiel — Quasi-contrats

- **Quasi-contrat** : fait volontaire et licite dont la loi déduit une obligation, sans accord de volontés ; fondement : l'équité.
- **Enrichissement sans cause** (articles 66-67) : enrichissement, appauvrissement corrélatif, lien, absence de cause, subsidiarité.
- Montant : la **plus faible** des deux sommes (enrichissement ou appauvrissement).
- **Paiement de l'indu** (article 68) : paiement non dû fait par erreur ; action en répétition.
- Indu objectif (pas de dette) ou subjectif (mauvais créancier, mauvais débiteur).
- Pas de répétition d'une obligation naturelle ou d'une dette prescrite (article 73).
- Celui qui a reçu de **bonne foi** rend la chose ; de **mauvaise foi**, il doit aussi intérêts et fruits depuis le paiement et répond de la perte.
- **Gestion d'affaires** (articles 943 et suivants) : intervention volontaire, utile, sans mandat ni opposition du maître.
- Gérant : continuer, être diligent, rendre compte ; maître : rembourser les dépenses utiles et nécessaires, exécuter les engagements, indemniser les pertes ; pas de rémunération en principe ; ratification = mandat.
`,
    exercices: md`
### Exercice 2 — Quelle figure ?

Qualifiez : 1) un client paie deux fois la même facture d'électricité ; 2) une personne éteint l'incendie qui démarre dans la voiture de son voisin et abîme son manteau ; 3) un héritier apparent vend un bien, puis un testament le prive de la succession ; 4) une entreprise de travaux améliore par erreur le terrain voisin de celui de son client.

<details><summary>Voir le corrigé</summary>

1) Paiement de l'indu (indu objectif) : répétition contre le distributeur. 2) Gestion d'affaires : le voisin doit l'indemniser de la perte du manteau. 3) Situation proche de l'indu et de l'enrichissement : l'héritier apparent de bonne foi doit restituer le prix reçu au véritable héritier ; le sort de l'acquéreur dépend de sa bonne foi et des règles de publicité foncière. 4) Enrichissement sans cause du propriétaire voisin, si l'entreprise ne dispose d'aucune autre action : elle peut réclamer le moindre de la plus-value et du coût des travaux.

</details>

### Exercice 3 — Calcul de restitution

Un acquéreur a payé par erreur à Ahmed 120 000 DH au lieu de 100 000 DH. Ahmed le sait dès la réception et ne rend rien. Un an plus tard, l'acquéreur agit. Le taux d'intérêt légal retenu par le juge est de 6 % par an (taux supposé pour l'exercice). Que doit Ahmed ? Que devrait-il s'il avait été de bonne foi jusqu'à la demande ?

<details><summary>Voir le corrigé</summary>

Indu : 120 000 − 100 000 = 20 000 DH. Ahmed est de mauvaise foi dès la réception : il doit les intérêts depuis le paiement, soit 20 000 × 6 % = 1 200 DH pour un an. Total : 21 200 DH. De bonne foi jusqu'à la demande, il ne devrait que 20 000 DH, les intérêts courant seulement à compter de la demande.

</details>
`,
    qcm: [
      { q: "Le quasi-contrat est un fait :", choix: ["Illicite et volontaire", "Volontaire et licite", "Involontaire et illicite", "Contractuel"], bonne: 1, explication: "Aucun accord, aucune faute." },
      { q: "L'enrichissement sans cause est posé par l'article :", choix: ["66 du DOC", "230 du DOC", "88 du DOC", "443 du DOC"], bonne: 0, explication: "Complété par l'article 67." },
      { q: "L'action d'enrichissement sans cause est :", choix: ["Principale", "Subsidiaire", "Pénale", "Imprescriptible"], bonne: 1, explication: "Elle ne joue qu'à défaut d'une autre action." },
      { q: "L'enrichi doit restituer :", choix: ["Le double de l'enrichissement", "La plus faible des deux sommes", "La plus forte des deux sommes", "Rien"], bonne: 1, explication: "On rétablit l'équilibre." },
      { q: "Le paiement de l'indu suppose en principe :", choix: ["Une faute de celui qui reçoit", "Une erreur de celui qui paie", "Un contrat", "Un jugement"], bonne: 1, explication: "Article 68 du DOC." },
      { q: "Celui qui a reçu de mauvaise foi doit :", choix: ["La seule somme", "La somme avec intérêts depuis le paiement", "Une amende pénale", "Rien"], bonne: 1, explication: "Il répond aussi de la perte de la chose." },
      { q: "On ne peut pas répéter ce qui a été payé en exécution :", choix: ["D'une dette inexistante", "D'une dette prescrite", "D'une double facture", "D'une erreur de banque"], bonne: 1, explication: "Obligation naturelle, article 73." },
      { q: "Le gérant d'affaires a droit :", choix: ["À une rémunération fixe", "Au remboursement des dépenses utiles", "À la propriété du bien", "À rien"], bonne: 1, explication: "La gestion est un service rendu." },
      { q: "La gestion d'affaires suppose :", choix: ["Un mandat écrit", "L'absence d'opposition du maître", "L'intervention du juge", "Une rémunération"], bonne: 1, explication: "Intervention spontanée et utile." },
      { q: "La ratification de la gestion par le maître la transforme en :", choix: ["Donation", "Mandat", "Délit", "Vente"], bonne: 1, explication: "Rétroactivement, dès l'origine." },
    ],
  },

  7: {
    titre: "Les modalités et l'extinction des obligations",
    description: "Terme, condition, solidarité et extinction des obligations (article 319 du DOC) : paiement, novation, compensation, confusion et prescription.",
    resume: md`
## L'essentiel — Modalités et extinction

- **Terme** (événement certain, articles 127 et suivants) : suspensif ou extinctif ; présumé en faveur du débiteur ; déchéance en cas d'insolvabilité.
- **Condition** (événement incertain, articles 107 et suivants) : suspensive ou résolutoire ; nulle si impossible, illicite ou purement potestative ; rétroactive.
- Pluralité de sujets : **division** en principe ; **solidarité** stipulée ou légale, de règle entre commerçants (article 165).
- Causes d'extinction (article 319) : paiement, impossibilité, remise, novation, compensation, confusion, prescription, rescision.
- **Paiement** : exact, entier, au créancier ou à son représentant ; dation en paiement avec accord du créancier.
- **Novation** : ne se présume pas ; éteint les garanties sauf réserve.
- **Compensation** : dettes réciproques, fongibles, liquides, exigibles ; jusqu'à la plus faible.
- **Prescription** : 15 ans de droit commun (article 387 du DOC) ; 5 ans entre commerçants (article 5 du Code de commerce) ; éteint l'action, pas la dette (obligation naturelle).
- Suspension (le délai reprend) / **interruption** (nouveau délai : demande en justice, reconnaissance).
`,
    exercices: md`
### Exercice 2 — Terme ou condition ?

Qualifiez : 1) « Je vous rembourserai à la fin du Ramadan » ; 2) « Je vous vends ma maison si ma mutation à Laâyoune est confirmée » ; 3) « Je vous donne 20 000 DH quand votre père décédera » ; 4) « Le contrat de sponsoring prendra fin si l'équipe est reléguée » ; 5) « Je paierai quand je pourrai ».

<details><summary>Voir le corrigé</summary>

1) Terme suspensif (événement certain). 2) Condition suspensive. 3) Terme suspensif : le décès est certain, seule sa date est incertaine (terme incertain). 4) Condition résolutoire. 5) Formule ambiguë : les juges y voient en général un terme dont ils fixent l'échéance selon les ressources du débiteur, plutôt qu'une condition purement potestative qui annulerait l'obligation.

</details>

### Exercice 3 — Solidarité et recours

Trois frères, Ali, Badr et Chafik, empruntent solidairement 90 000 DH à un ami, Driss, par un contrat civil qui stipule la solidarité. À l'échéance, Driss réclame tout à Ali. 1) Ali peut-il refuser de payer plus que sa part ? 2) Ali paie 90 000 DH : quel recours a-t-il ? 3) Que se passe-t-il si Chafik est insolvable ?

<details><summary>Voir le corrigé</summary>

1) Non : la solidarité ayant été stipulée, Driss peut réclamer la totalité à l'un quelconque des débiteurs. Sans clause, en matière civile, chaque frère n'aurait dû que sa part, 30 000 DH.
2) Ali, qui a payé le tout, se retourne contre chacun des codébiteurs pour sa part : 30 000 DH contre Badr et 30 000 DH contre Chafik. Il supporte finalement sa propre part de 30 000 DH.
3) La part de l'insolvable est répartie entre les codébiteurs solvables, y compris celui qui a payé : les 30 000 DH de Chafik sont partagés entre Ali et Badr, soit 15 000 DH chacun. Badr doit donc 45 000 DH à Ali, qui supporte lui aussi 45 000 DH. Ils garderont un recours contre Chafik s'il revient à meilleure fortune.

</details>
`,
    qcm: [
      { q: "Le terme est un événement :", choix: ["Futur et incertain", "Futur et certain", "Passé", "Impossible"], bonne: 1, explication: "La condition est incertaine." },
      { q: "Le terme est présumé stipulé en faveur :", choix: ["Du créancier", "Du débiteur", "Du juge", "Du notaire"], bonne: 1, explication: "Le débiteur peut payer plus tôt." },
      { q: "La condition qui dépend de la seule volonté du débiteur :", choix: ["Est valable", "Annule l'obligation", "Devient un terme", "Rend la dette solidaire"], bonne: 1, explication: "Condition purement potestative." },
      { q: "En matière commerciale, la solidarité entre débiteurs :", choix: ["Est interdite", "Est présumée", "Doit être notariée", "N'existe pas"], bonne: 1, explication: "Article 165 du DOC." },
      { q: "La liste des causes d'extinction des obligations figure à l'article :", choix: ["230 du DOC", "319 du DOC", "77 du DOC", "2 du DOC"], bonne: 1, explication: "Paiement, novation, compensation, etc." },
      { q: "La compensation suppose des dettes :", choix: ["Liquides et exigibles", "Prescrites", "Alimentaires", "Conditionnelles"], bonne: 0, explication: "Réciproques et fongibles aussi." },
      { q: "Le locataire qui hérite de l'immeuble loué voit sa dette de loyer s'éteindre par :", choix: ["Novation", "Confusion", "Remise", "Compensation"], bonne: 1, explication: "Il devient créancier de lui-même." },
      { q: "Le délai de prescription de droit commun du DOC est de :", choix: ["5 ans", "15 ans", "20 ans", "30 ans"], bonne: 1, explication: "Article 387 du DOC." },
      { q: "Entre commerçants, pour leur commerce, la prescription est de :", choix: ["2 ans", "5 ans", "10 ans", "15 ans"], bonne: 1, explication: "Article 5 du Code de commerce." },
      { q: "La reconnaissance de dette par le débiteur :", choix: ["Suspend la prescription", "Interrompt la prescription", "N'a aucun effet", "Annule la dette"], bonne: 1, explication: "Un nouveau délai commence." },
    ],
  },
};

export default chapitres;
