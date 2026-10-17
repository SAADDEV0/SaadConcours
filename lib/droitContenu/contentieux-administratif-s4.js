// Contentieux administratif (Droit S4) — compléments par chapitre : description SEO, résumé, exercices 2 et 3, QCM.
const md = String.raw;

const chapitres = {
  1: {
    titre: "Le contentieux administratif : notion, sources et répartition des compétences",
    description: "Contentieux administratif marocain : notion, histoire (1913, 1957, loi 41-90), sources, excès de pouvoir et pleine juridiction, compétence de l'article 8.",
    resume: md`
## L'essentiel — Notion, sources, compétence

- **Contentieux administratif** : litiges nés de l'activité administrative soumis à un juge + règles de compétence, procédure, pouvoirs du juge, exécution ; sanction du principe de légalité.
- **Article 118** de la Constitution : tout acte administratif, réglementaire ou individuel, peut faire l'objet d'un recours.
- Recours **administratifs** (gracieux, hiérarchique, Médiateur) ≠ recours **contentieux** ; facultatifs sauf texte, ils prolongent le délai.
- Histoire : protectorat (pas d'annulation, article 8 du dahir de 1913) → **Cour suprême 1957** (chambre administrative, excès de pouvoir) → **loi 41-90** (tribunaux administratifs, 1994) → **loi 80-03** (cours administratives d'appel, 2006) → Constitution de 2011, loi 38-15.
- Sources : Constitution (118, 120, 126), loi 41-90, loi 80-03, CPC (article 7 de la loi 41-90), textes spéciaux, **jurisprudence**.
- **Excès de pouvoir** : contentieux **objectif**, annulation seulement ; **pleine juridiction** : contentieux **subjectif**, condamnation, réformation (responsabilité, contrats, fiscal, pensions, élections) ; appréciation de légalité sur renvoi (article 44).
- Compétence (article **8** de la loi 41-90) : excès de pouvoir, contrats administratifs, responsabilité des personnes publiques (sauf **véhicules**), pensions, élections, fiscalité, expropriation, situation des agents.
- Exceptions : véhicules, gestion privée, **SPIC** et usagers, contrats de droit privé ; actes de gouvernement et dahirs (arrêt **Ronda**, 1960) hors recours.
- Incompétence matérielle d'**ordre public** (article 12), **jugement séparé** (article 13).
`,
    exercices: md`
### Exercice 2 — Excès de pouvoir ou pleine juridiction ?

Qualifiez le recours : 1) demande d'annulation d'un refus de permis de construire ; 2) demande d'indemnisation pour une chute dans une école publique mal entretenue ; 3) contestation d'une pénalité de retard appliquée dans un marché public ; 4) demande d'annulation d'un arrêté réglementaire du gouverneur ; 5) contestation du montant d'une pension de retraite.

<details><summary>Voir le corrigé</summary>

1) Excès de pouvoir. 2) Pleine juridiction (responsabilité). 3) Pleine juridiction (contentieux contractuel). 4) Excès de pouvoir. 5) Pleine juridiction (contentieux des pensions).

</details>

### Exercice 3 — Question de cours

Pourquoi la création des tribunaux administratifs en 1993 constitue-t-elle une étape décisive de l'État de droit au Maroc ?

<details><summary>Voir le corrigé</summary>

Avant 1993, le recours pour excès de pouvoir relevait de la seule chambre administrative de la Cour suprême, à Rabat, en premier et dernier ressort : la justice administrative était éloignée, lente et peu accessible. La loi 41-90 a créé des juridictions spécialisées réparties sur le territoire, compétentes à la fois pour l'annulation et la pleine juridiction, avec des juges formés et un commissaire royal de la loi et du droit. Le contrôle de l'administration est devenu plus proche et plus effectif ; la création des cours administratives d'appel en 2006 a complété le dispositif par le double degré de juridiction.

</details>
`,
    qcm: [
      { q: "Le droit de recours contre tout acte administratif est consacré par l'article :", choix: ["107", "118", "126", "162"], bonne: 1, explication: "Actes réglementaires et individuels." },
      { q: "Sous le protectorat, les tribunaux pouvaient :", choix: ["Annuler les actes administratifs", "Seulement accorder des indemnités contre l'État", "Juger les ministres", "Contrôler les dahirs"], bonne: 1, explication: "Article 8 du dahir de 1913." },
      { q: "Le recours pour excès de pouvoir est apparu au Maroc avec :", choix: ["La loi 41-90", "La Cour suprême de 1957", "La Constitution de 2011", "La loi 80-03"], bonne: 1, explication: "Chambre administrative de la Cour suprême." },
      { q: "Les tribunaux administratifs ont été installés en :", choix: ["1957", "1974", "1994", "2006"], bonne: 2, explication: "Loi 41-90." },
      { q: "Le recours pour excès de pouvoir permet au juge :", choix: ["De condamner l'administration à payer", "D'annuler la décision illégale", "De réformer la décision", "D'adresser des ordres au ministre"], bonne: 1, explication: "Contentieux objectif." },
      { q: "Le contentieux de la responsabilité administrative relève :", choix: ["De l'excès de pouvoir", "De la pleine juridiction", "De l'interprétation", "Du contentieux répressif"], bonne: 1, explication: "Le juge peut condamner à indemniser." },
      { q: "La compétence des tribunaux administratifs est fixée principalement par l'article :", choix: ["8 de la loi 41-90", "20 de la loi 41-90", "44 de la loi 41-90", "359 du CPC"], bonne: 0, explication: "Compétence d'attribution." },
      { q: "Un accident causé par une voiture de service de l'État relève :", choix: ["Du tribunal administratif", "Du juge judiciaire", "Du Médiateur", "De la Cour des comptes"], bonne: 1, explication: "Exception de l'article 8." },
      { q: "L'incompétence matérielle devant les juridictions administratives :", choix: ["Est d'ordre public", "Ne peut être soulevée qu'en appel", "Est sans conséquence", "Relève du ministre de la Justice"], bonne: 0, explication: "Article 12 de la loi 41-90." },
      { q: "Selon la jurisprudence Ronda (1960), les dahirs :", choix: ["Sont soumis au recours pour excès de pouvoir", "Échappent au contrôle du juge administratif", "Relèvent du tribunal administratif de Rabat", "Sont des contrats"], bonne: 1, explication: "Jurisprudence discutée depuis 2011." },
    ],
  },

  2: {
    titre: "La procédure administrative contentieuse",
    description: "Procédure devant les tribunaux administratifs (loi 41-90) : requête, juge rapporteur, commissaire royal, sursis à exécution (article 24), référé et appel.",
    resume: md`
## L'essentiel — Procédure administrative contentieuse

- Loi **41-90** + **CPC** à titre supplétif (article 7) ; procédure **écrite**, **inquisitoire** (le juge dirige), **contradictoire**, **non suspensive** (privilège du préalable).
- **Requête** signée par un **avocat** (article 3), décision attaquée jointe ; assistance judiciaire ; taxes ; compétence territoriale (domicile du requérant ou lieu de la décision en excès de pouvoir ; règles propres au tribunal administratif de Rabat).
- Défense : **Agence judiciaire du Royaume** pour l'État ; présidents pour les collectivités.
- **Juge rapporteur** : notification, échange des mémoires, mesures d'instruction, ordonnance de dessaisissement.
- **Commissaire royal de la loi et du droit** : conclusions indépendantes, ne représente ni l'administration ni le parquet, ne participe pas au délibéré.
- Audience publique ; **collégialité** de trois magistrats ; jugement au nom du Roi, motivé.
- **Sursis à exécution** (article **24**) : demande expresse, accessoire au recours en annulation ; **moyens sérieux** + **préjudice difficilement réparable**.
- **Référé** (article 19) : président du tribunal, urgence, mesures provisoires, sans toucher au fond.
- Recours : **appel** devant la cour administrative d'appel (30 jours en principe) ; **cassation** devant la chambre administrative ; opposition, tierce opposition, rétractation.
`,
    exercices: md`
### Exercice 2 — Sursis ou non ?

Le juge accordera-t-il probablement le sursis à exécution ? 1) Arrêté d'expulsion d'un étudiant étranger de la cité universitaire, à un mois des examens, pris sans entendre l'intéressé ; 2) refus de délivrer une attestation administrative, sans urgence particulière ; 3) ordre de fermeture d'un café pour trois jours, motivé par des troubles graves et répétés ; 4) décision de démolition d'une maison habitée, contestée par des moyens sérieux.

<details><summary>Voir le corrigé</summary>

1) Probablement oui : moyen sérieux (droits de la défense) et préjudice difficilement réparable (perte de l'année). 2) Non : absence de préjudice difficilement réparable ; la décision de refus se prête mal au sursis. 3) Probablement non : la mesure est brève et les motifs paraissent sérieux. 4) Oui : préjudice irréversible et moyens sérieux.

</details>

### Exercice 3 — Qui fait quoi ?

Associez chaque rôle à l'acteur : a) dirige l'instruction ; b) présente des conclusions indépendantes ; c) représente l'État ; d) statue sur les mesures urgentes provisoires ; e) juge l'appel.

<details><summary>Voir le corrigé</summary>

a) Le juge rapporteur. b) Le commissaire royal de la loi et du droit. c) L'Agence judiciaire du Royaume. d) Le président du tribunal administratif statuant en référé. e) La cour administrative d'appel.

</details>
`,
    qcm: [
      { q: "À titre supplétif, la procédure devant les tribunaux administratifs suit :", choix: ["Le Code de procédure pénale", "Le Code de procédure civile", "Le Code de commerce", "Le Code général des impôts"], bonne: 1, explication: "Article 7 de la loi 41-90." },
      { q: "La procédure administrative contentieuse est principalement :", choix: ["Orale et accusatoire", "Écrite et inquisitoire", "Secrète", "Arbitrale"], bonne: 1, explication: "Le juge dirige l'instruction." },
      { q: "En principe, le recours contre une décision administrative :", choix: ["Suspend son exécution", "Ne suspend pas son exécution", "L'annule automatiquement", "Oblige l'administration à la retirer"], bonne: 1, explication: "Privilège du préalable." },
      { q: "La requête devant le tribunal administratif doit être signée par :", choix: ["Le requérant seul", "Un avocat", "Un notaire", "Un adoul"], bonne: 1, explication: "Article 3 de la loi 41-90, sauf exceptions." },
      { q: "L'État est représenté devant les juridictions par :", choix: ["L'Agence judiciaire du Royaume", "Le commissaire royal", "Le Médiateur", "Le procureur du Roi"], bonne: 0, explication: "Elle défend ses intérêts." },
      { q: "Le commissaire royal de la loi et du droit :", choix: ["Représente l'administration", "Présente des conclusions indépendantes", "Préside le tribunal", "Exécute les jugements"], bonne: 1, explication: "Il ne participe pas au délibéré." },
      { q: "Le sursis à exécution est prévu par l'article :", choix: ["8 de la loi 41-90", "20 de la loi 41-90", "23 de la loi 41-90", "24 de la loi 41-90"], bonne: 3, explication: "Sur demande expresse du requérant." },
      { q: "Les conditions du sursis à exécution sont :", choix: ["L'accord de l'administration", "Des moyens sérieux et un préjudice difficilement réparable", "Un délai de dix ans", "Une décision réglementaire"], bonne: 1, explication: "Dégagées par la jurisprudence." },
      { q: "Le juge des référés administratifs peut :", choix: ["Annuler une décision", "Ordonner des mesures provisoires urgentes", "Condamner définitivement l'État", "Juger l'appel"], bonne: 1, explication: "Sans préjudicier au fond." },
      { q: "L'appel des jugements des tribunaux administratifs est porté devant :", choix: ["La cour d'appel ordinaire", "La cour administrative d'appel", "La Cour constitutionnelle", "Le CSPJ"], bonne: 1, explication: "Loi 80-03." },
    ],
  },

  3: {
    titre: "Le recours pour excès de pouvoir : conditions de recevabilité",
    description: "Recevabilité du recours pour excès de pouvoir : acte faisant grief, intérêt à agir, délai de soixante jours (article 23 de la loi 41-90) et recours parallèle.",
    resume: md`
## L'essentiel — Recevabilité de l'excès de pouvoir

- Recours **objectif**, **d'ordre public** (ouvert sans texte, article 118), d'**annulation** seulement, accessible.
- Quatre conditions : acte attaquable, intérêt, délai, absence de recours parallèle.
- **Acte attaquable** : décision d'une autorité administrative, **exécutoire**, **faisant grief** ; exclus : lois, jugements, actes de gouvernement, dahirs (Ronda), actes de droit privé, actes préparatoires, mesures d'ordre intérieur, circulaires interprétatives (≠ circulaires réglementaires), informations, actes confirmatifs.
- **Silence** de soixante jours = **décision implicite de rejet** (article 23).
- **Intérêt** personnel, direct, légitime, né et actuel ; appréciation libérale (destinataire, fonctionnaire, contribuable local, voisin, usager, associations pour l'intérêt collectif) ; pas d'action populaire.
- **Délai** de **soixante jours** (article **23**) : publication (actes réglementaires), notification (actes individuels), connaissance acquise.
- **Recours administratif** dans le délai : interrompt ; nouveau délai de soixante jours après rejet exprès ou silence de soixante jours ; un seul recours interrompt.
- Exceptions : actes **inexistants** ; exception d'illégalité d'un règlement à tout moment ; délai d'ordre public.
- **Recours parallèle** (article 23) : irrecevabilité si un recours de pleine juridiction donne le même résultat (fiscal, pensions, contrats sauf **actes détachables**) ; interprétation stricte.
`,
    exercices: md`
### Exercice 2 — Calcul de délai

Une décision individuelle est notifiée le 1er mars. L'intéressé forme un recours gracieux le 15 avril ; l'administration le rejette expressément le 10 mai (notification le jour même). Jusqu'à quelle date peut-il saisir le tribunal ? Même question si l'administration n'avait jamais répondu.

<details><summary>Voir le corrigé</summary>

Le délai initial expirait le 30 avril (soixante jours à compter du 1er mars) : le recours gracieux du 15 avril est dans le délai et l'interrompt. Rejet exprès notifié le 10 mai : nouveau délai de soixante jours, jusqu'au 9 juillet. En cas de silence : rejet implicite au bout de soixante jours, soit le 14 juin ; nouveau délai de soixante jours, jusqu'au 13 août.

</details>

### Exercice 3 — Attaquable ou non ?

1) Une note de service fixant les horaires d'ouverture d'un bureau ; 2) un avis de la commission paritaire préalable à une sanction ; 3) la décision de sanction elle-même ; 4) une circulaire ministérielle qui ajoute une condition d'âge non prévue par le décret ; 5) une lettre d'information rappelant aux usagers la date limite de dépôt des dossiers.

<details><summary>Voir le corrigé</summary>

1) Non : mesure d'ordre intérieur. 2) Non : acte préparatoire. 3) Oui : décision faisant grief. 4) Oui : circulaire réglementaire qui ajoute une règle. 5) Non : simple information.

</details>
`,
    qcm: [
      { q: "Le recours pour excès de pouvoir est un recours :", choix: ["Subjectif", "Objectif", "Pénal", "Arbitral"], bonne: 1, explication: "Il porte sur la légalité de l'acte." },
      { q: "Le délai du recours pour excès de pouvoir est de :", choix: ["Trente jours", "Soixante jours", "Quatre-vingt-dix jours", "Un an"], bonne: 1, explication: "Article 23 de la loi 41-90." },
      { q: "Le silence de l'administration pendant soixante jours sur une demande vaut :", choix: ["Acceptation", "Décision implicite de rejet", "Absence de décision non attaquable", "Retrait"], bonne: 1, explication: "Article 23." },
      { q: "Pour un acte réglementaire, le délai court à compter de :", choix: ["Sa signature", "Sa publication", "Sa première application", "Son abrogation"], bonne: 1, explication: "Pour un acte individuel, la notification." },
      { q: "Un recours gracieux formé dans le délai :", choix: ["N'a aucun effet", "Interrompt le délai du recours contentieux", "Suspend l'exécution", "Remplace le recours contentieux"], bonne: 1, explication: "Un nouveau délai de soixante jours s'ouvre." },
      { q: "N'est pas susceptible de recours pour excès de pouvoir :", choix: ["Un refus de permis", "Une sanction disciplinaire", "Une mesure d'ordre intérieur", "Un arrêté réglementaire du gouverneur"], bonne: 2, explication: "Elle ne fait pas grief." },
      { q: "Une circulaire est attaquable lorsqu'elle :", choix: ["Interprète un texte", "Ajoute une règle nouvelle", "Rappelle la loi", "Informe les usagers"], bonne: 1, explication: "Circulaire réglementaire ou impérative." },
      { q: "L'intérêt à agir doit être :", choix: ["Celui de tout citoyen", "Personnel, direct et légitime", "Uniquement patrimonial", "Reconnu par l'administration"], bonne: 1, explication: "Pas d'action populaire." },
      { q: "L'exception de recours parallèle s'applique notamment en matière :", choix: ["De refus de permis", "Fiscale", "De sanction disciplinaire", "De nomination"], bonne: 1, explication: "Le contribuable dispose d'un recours de pleine juridiction." },
      { q: "Dans le contentieux contractuel, le recours pour excès de pouvoir reste ouvert contre :", choix: ["Les clauses du contrat", "Les actes détachables du contrat", "Les factures", "Les pénalités de retard"], bonne: 1, explication: "Par exemple la décision de conclure." },
    ],
  },

  4: {
    titre: "Le recours pour excès de pouvoir : moyens d'annulation et effets",
    description: "Moyens d'annulation (article 20 de la loi 41-90) : incompétence, forme, violation de la loi, motifs, détournement de pouvoir ; contrôle du juge et effets.",
    resume: md`
## L'essentiel — Moyens d'annulation et effets

- **Article 20** de la loi 41-90 : incompétence, vice de forme, détournement de pouvoir, défaut de motifs, violation de la loi.
- **Légalité externe** : incompétence, forme et procédure ; **légalité interne** : violation de la loi, motifs, détournement de pouvoir ; invoquer tous les moyens dès la requête.
- **Incompétence** (d'ordre public, relevée d'office) : matérielle, territoriale, temporelle, délégation irrégulière ; usurpation → inexistence.
- **Vice de forme** : consultation obligatoire omise, **droits de la défense**, mentions, **motivation** des décisions défavorables (loi **03-01**) ; seules les formalités **substantielles** entraînent l'annulation.
- **Violation de la loi** (règle supérieure, principes généraux, chose jugée), **erreur de droit**, **erreur de fait**, erreur de **qualification juridique** ; défaut de motifs.
- **Détournement de pouvoir** : but étranger à l'intérêt général ou autre but (détournement de procédure, sanction déguisée) ; preuve par **faisceau d'indices**.
- Contrôle : **minimum** (erreur manifeste d'appréciation), **normal** (qualification), **maximum** (proportionnalité : police, sanctions) ; **théorie du bilan** en expropriation.
- **Annulation** : rétroactive, autorité **absolue** de la chose jugée, reconstitution (réintégration) ; **rejet** : autorité relative.
- **Exception d'illégalité** d'un règlement à tout moment, sans annulation du règlement ; question préjudicielle (article 44), sauf juge pénal.
`,
    exercices: md`
### Exercice 2 — Identifiez le moyen

1) Un arrêté de fermeture d'un commerce est signé par le secrétaire général de la préfecture sans délégation ; 2) un étudiant est exclu sans avoir été entendu par le conseil de discipline ; 3) un permis est refusé au motif d'une servitude qui n'existe pas ; 4) un agent est muté « dans l'intérêt du service » deux jours après avoir témoigné contre son chef ; 5) une décision applique un décret abrogé.

<details><summary>Voir le corrigé</summary>

1) Incompétence (délégation irrégulière ou absente). 2) Vice de procédure : droits de la défense et consultation obligatoire. 3) Erreur de fait (motif matériellement inexact). 4) Détournement de pouvoir (sanction déguisée), à prouver par le faisceau d'indices. 5) Erreur de droit, violation de la loi.

</details>

### Exercice 3 — Question de cours

Expliquez la différence entre l'annulation d'un règlement par la voie du recours direct et l'admission d'une exception d'illégalité.

<details><summary>Voir le corrigé</summary>

Le recours direct contre un règlement doit être formé dans les soixante jours de sa publication ; s'il aboutit, le règlement est annulé rétroactivement et à l'égard de tous. L'exception d'illégalité est invoquée à l'occasion d'un recours contre une décision individuelle d'application, même après l'expiration du délai ; si elle est admise, seule la décision individuelle est annulée, faute de base légale, et le règlement demeure dans l'ordonnancement juridique, même si l'administration doit cesser de l'appliquer.

</details>
`,
    qcm: [
      { q: "Les cas d'ouverture du recours pour excès de pouvoir sont énumérés par l'article :", choix: ["8 de la loi 41-90", "20 de la loi 41-90", "24 de la loi 41-90", "44 de la loi 41-90"], bonne: 1, explication: "Cinq cas." },
      { q: "Relève de la légalité externe :", choix: ["Le détournement de pouvoir", "L'incompétence", "L'erreur de fait", "La violation de la loi"], bonne: 1, explication: "Avec le vice de forme." },
      { q: "Le vice que le juge doit relever d'office est :", choix: ["Le vice de forme mineur", "L'incompétence", "Le détournement de pouvoir", "L'erreur de plume"], bonne: 1, explication: "Il est d'ordre public." },
      { q: "La loi qui impose la motivation des décisions administratives défavorables est la loi :", choix: ["03-01", "41-90", "80-03", "54-19"], bonne: 0, explication: "Adoptée en 2002." },
      { q: "Le juge n'annule pour vice de forme que si la formalité est :", choix: ["Prévue par une circulaire", "Substantielle", "Facultative", "Postérieure à la décision"], bonne: 1, explication: "Elle a pu influencer la décision ou constitue une garantie." },
      { q: "Une sanction fondée sur une absence qui n'a pas eu lieu est entachée :", choix: ["D'incompétence", "D'erreur de fait", "De détournement de pouvoir", "De vice de forme"], bonne: 1, explication: "Inexactitude matérielle des faits." },
      { q: "Une mutation qui est en réalité une sanction déguisée constitue :", choix: ["Un détournement de pouvoir", "Une incompétence territoriale", "Une mesure d'ordre intérieur", "Un acte de gouvernement"], bonne: 0, explication: "But autre que l'intérêt du service." },
      { q: "Le contrôle de proportionnalité s'applique notamment :", choix: ["Aux mesures de police restreignant les libertés", "Aux circulaires interprétatives", "Aux actes de gouvernement", "Aux lois"], bonne: 0, explication: "Contrôle maximum." },
      { q: "L'annulation pour excès de pouvoir a une autorité :", choix: ["Relative", "Absolue", "Limitée au requérant", "Provisoire"], bonne: 1, explication: "Elle vaut à l'égard de tous." },
      { q: "L'exception d'illégalité d'un règlement peut être soulevée :", choix: ["Seulement dans les soixante jours", "À tout moment à l'occasion d'un recours contre un acte d'application", "Seulement en cassation", "Jamais"], bonne: 1, explication: "Le règlement n'est pas annulé." },
    ],
  },

  5: {
    titre: "Le contentieux de pleine juridiction : responsabilité et contrats",
    description: "Responsabilité administrative (articles 79 et 80 du DOC) : faute de service, faute personnelle, responsabilité sans faute, réparation, contentieux des contrats.",
    resume: md`
## L'essentiel — Pleine juridiction

- **Pleine juridiction** : condamnation, réformation, reconnaissance de droits ; droits subjectifs ; prescription au lieu du délai de soixante jours.
- Fondement : **article 79 du DOC** (responsabilité de l'État et des collectivités pour le fonctionnement des administrations et les fautes de service) ; **article 80** (responsabilité personnelle des agents pour dol ou faute lourde, l'État n'étant poursuivi qu'en cas d'insolvabilité).
- **Faute de service** : anonyme (mauvaise organisation, défaut d'entretien, surveillance) ou d'un agent non détachable → administration, tribunal administratif.
- **Faute personnelle** : hors service, intention de nuire, gravité exceptionnelle → agent, juge judiciaire ; **cumul** si faute dans le service ou faute de service concomitante ; **action récursoire**.
- Faute lourde exigée pour certaines activités (police, secours), en recul.
- **Sans faute** : **risque** (ouvrages publics à l'égard des **tiers**, activités dangereuses, collaborateurs occasionnels) ; **égalité devant les charges publiques** (refus de concours de la force publique, dommages permanents de travaux) : préjudice **anormal et spécial**.
- Réparation : fait générateur, préjudice certain et direct (matériel, corporel, moral), causalité ; exonérations : force majeure, faute de la victime, fait d'un tiers ; réparation intégrale, expertise ; prescription (article 106 du DOC).
- **Contrats** : paiement et intérêts moratoires, pénalités, résiliation, équilibre financier (sujétions imprévues, fait du prince, imprévision) ; règlement amiable préalable (CCAG) ; actes **détachables** attaquables par les tiers ; réclamations des concurrents ; arbitrage (loi 95-17).
`,
    exercices: md`
### Exercice 2 — Faute de service ou faute personnelle ?

1) Un dossier de demande de bourse est perdu par les services de l'université ; 2) un policier, en civil et en congé, blesse un voisin au cours d'une dispute privée ; 3) un employé du guichet commet une erreur de calcul dans le montant d'une pension ; 4) un agent détourne l'argent des taxes qu'il encaisse ; 5) un enseignant laisse une classe sans surveillance, un élève est blessé.

<details><summary>Voir le corrigé</summary>

1) Faute de service (anonyme). 2) Faute personnelle commise en dehors du service, sans lien avec lui : responsabilité de l'agent seul. 3) Faute de service. 4) Faute personnelle (intérêt personnel, infraction) ; l'administration peut être recherchée si une faute de service a facilité le détournement (absence de contrôle) et exercera une action récursoire. 5) Faute de service (défaut de surveillance).

</details>

### Exercice 3 — Avec ou sans faute ?

Un barrage public lâche des eaux en urgence pour éviter sa rupture ; les champs de M. Rifi, situés en aval, sont inondés. L'opération était nécessaire et régulièrement conduite. M. Rifi peut-il être indemnisé ?

<details><summary>Voir le corrigé</summary>

Aucune faute n'a été commise, mais M. Rifi est un tiers par rapport à l'ouvrage public : la responsabilité pour risque des ouvrages publics à l'égard des tiers s'applique sans faute. Il peut aussi invoquer la rupture de l'égalité devant les charges publiques : une mesure prise dans l'intérêt général lui impose une charge anormale et spéciale. Il saisira le tribunal administratif ; seule la force majeure (crue imprévisible et irrésistible, sans lien avec la gestion de l'ouvrage) pourrait exonérer l'administration.

</details>
`,
    qcm: [
      { q: "La responsabilité de l'État pour le fonctionnement de ses administrations est prévue par l'article :", choix: ["77 du DOC", "79 du DOC", "106 du DOC", "230 du DOC"], bonne: 1, explication: "Et pour les fautes de service." },
      { q: "Selon l'article 80 du DOC, l'agent est personnellement responsable de :", choix: ["Toute faute", "Son dol ou ses fautes lourdes", "Toute erreur matérielle", "Aucune faute"], bonne: 1, explication: "L'État n'est poursuivi qu'en cas d'insolvabilité." },
      { q: "La perte d'un dossier par un service sans identification de l'agent est :", choix: ["Une faute personnelle", "Une faute de service anonyme", "Un cas de force majeure", "Un acte de gouvernement"], bonne: 1, explication: "Mauvais fonctionnement du service." },
      { q: "La faute personnelle d'un agent relève en principe :", choix: ["Du tribunal administratif", "Du juge judiciaire", "De la Cour des comptes", "Du Médiateur"], bonne: 1, explication: "Action contre l'agent." },
      { q: "L'action par laquelle l'administration se retourne contre son agent fautif est :", choix: ["L'action récursoire", "L'action paulienne", "Le recours pour excès de pouvoir", "La tierce opposition"], bonne: 0, explication: "Après avoir indemnisé la victime." },
      { q: "À l'égard des tiers, les dommages causés par un ouvrage public engagent la responsabilité :", choix: ["Pour faute lourde seulement", "Sans faute", "Jamais", "Pour faute de la victime"], bonne: 1, explication: "Fondement du risque." },
      { q: "La rupture de l'égalité devant les charges publiques exige un préjudice :", choix: ["Léger et général", "Anormal et spécial", "Uniquement moral", "Futur et éventuel"], bonne: 1, explication: "Gravité particulière, nombre limité de victimes." },
      { q: "Exonère totalement l'administration :", choix: ["Le fait d'un tiers dans tous les cas", "La force majeure", "La pauvreté de la commune", "L'absence de crédits"], bonne: 1, explication: "Événement imprévisible, irrésistible, extérieur." },
      { q: "Le contentieux des marchés publics entre les parties relève :", choix: ["De l'excès de pouvoir", "De la pleine juridiction", "Du juge pénal", "Du Conseil de la concurrence seulement"], bonne: 1, explication: "Juge du contrat." },
      { q: "Un candidat évincé peut attaquer par la voie de l'excès de pouvoir :", choix: ["Les clauses du contrat", "Les actes détachables du contrat", "Les factures du titulaire", "Les décomptes"], bonne: 1, explication: "Par exemple la décision d'attribution." },
    ],
  },

  6: {
    titre: "Les contentieux spéciaux : fiscal, électoral, fonction publique, expropriation, finances publiques",
    description: "Contentieux spéciaux : fiscal (CGI, commissions), électoral, fonction publique et pensions, expropriation (loi 7-81) et juridictions financières (62-99).",
    resume: md`
## L'essentiel — Contentieux spéciaux

- **Fiscal** : pleine juridiction après une phase administrative (rectification, réponse en trente jours, **commission locale de taxation**, **CNRF**, réclamation) ; puis tribunal administratif dans les **soixante jours** ; recours parallèle ; recouvrement : loi **15-97**.
- **Électoral** : législatives → **Cour constitutionnelle** (article 132) ; territoriales et chambres professionnelles → **tribunal administratif** (loi organique **59-11**) ; délais très courts, dispense d'avocat ; annulation ou rectification si la **sincérité** du scrutin est atteinte.
- **Fonction publique** : situation individuelle des agents au tribunal administratif ; décision → excès de pouvoir ; sommes → pleine juridiction.
- Choix de la voie : excès de pouvoir pour attaquer une décision, pleine juridiction pour obtenir une somme ; exception de recours parallèle en matière fiscale et de pensions.
- **Pensions** des agents publics (Caisse marocaine des retraites) : pleine juridiction au tribunal administratif.
- **Expropriation** (loi **7-81**) : phase administrative (déclaration d'utilité publique, cessibilité, accord amiable) ; phase judiciaire : **prise de possession** en urgence, **transfert** et indemnité définitive (valeur au jour de la décision, préjudice direct, matériel, certain) ; légalité de la DUP par l'excès de pouvoir ; **emprise irrégulière** → indemnité.
- **Financier** (loi **62-99**) : **jugement des comptes** des comptables (**débet** ou décharge) ; **discipline budgétaire et financière** des ordonnateurs, contrôleurs, comptables (**amendes**, remboursement).
- Procédure écrite et contradictoire, saisine par le procureur général du Roi près la Cour des comptes ; appel des cours régionales devant la Cour des comptes ; cassation ; transmission pénale au président du ministère public.
`,
    exercices: md`
### Exercice 2 — Quel juge ?

1) Contestation de l'élection d'un député ; 2) contestation de l'élection du président d'un conseil régional ; 3) contestation du montant d'une pension de retraite d'un ancien enseignant ; 4) mise en débet d'un trésorier ; 5) contestation de l'indemnité d'expropriation d'un terrain agricole.

<details><summary>Voir le corrigé</summary>

1) Cour constitutionnelle. 2) Tribunal administratif. 3) Tribunal administratif, pleine juridiction. 4) Cour des comptes ou cour régionale des comptes, jugement des comptes. 5) Tribunal administratif du lieu de l'immeuble, puis appel.

</details>

### Exercice 3 — L'école construite sans expropriation

Une commune a construit une école sur une partie du terrain de M. Kassimi, sans aucune procédure d'expropriation. M. Kassimi peut-il obtenir la démolition de l'école ? Que peut-il demander ?

<details><summary>Voir le corrigé</summary>

La commune a commis une emprise irrégulière, voire une voie de fait. La jurisprudence n'ordonne en principe pas la démolition d'un ouvrage public affecté à l'intérêt général. M. Kassimi peut saisir le tribunal administratif d'un recours de pleine juridiction pour obtenir une indemnité correspondant à la valeur du terrain occupé et au préjudice de privation de jouissance depuis l'occupation, souvent fixée après expertise ; la régularisation du transfert de propriété peut ensuite être opérée.

</details>
`,
    qcm: [
      { q: "Le contentieux de l'assiette de l'impôt relève :", choix: ["De l'excès de pouvoir", "De la pleine juridiction", "Du juge pénal", "De la Cour constitutionnelle"], bonne: 1, explication: "Après la phase administrative du CGI." },
      { q: "Avant le juge, le désaccord sur une rectification fiscale est porté devant :", choix: ["Le Médiateur", "Les commissions de recours fiscal", "La Cour des comptes", "Le CSPJ"], bonne: 1, explication: "Commission locale de taxation ou CNRF." },
      { q: "Le Code de recouvrement des créances publiques est la loi :", choix: ["15-97", "62-99", "7-81", "59-11"], bonne: 0, explication: "Poursuites en recouvrement." },
      { q: "Le contentieux des élections législatives relève :", choix: ["Du tribunal administratif de Rabat", "De la Cour constitutionnelle", "De la Cour de cassation", "Du ministère de l'Intérieur"], bonne: 1, explication: "Article 132 de la Constitution." },
      { q: "Le juge électoral annule l'élection lorsque les irrégularités :", choix: ["Existent, quelle que soit leur portée", "Ont altéré la sincérité du scrutin", "Sont dénoncées par la presse", "Concernent un seul bulletin"], bonne: 1, explication: "Compte tenu de l'écart des voix." },
      { q: "La contestation d'une sanction disciplinaire d'un fonctionnaire se fait par :", choix: ["La pleine juridiction", "L'excès de pouvoir", "Le contentieux électoral", "Le référé seulement"], bonne: 1, explication: "La demande de sommes relève de la pleine juridiction." },
      { q: "Le transfert de propriété en matière d'expropriation est prononcé par :", choix: ["Le gouverneur", "Le tribunal administratif", "Le conservateur foncier", "La commune"], bonne: 1, explication: "Loi 7-81." },
      { q: "L'indemnité d'expropriation est fixée selon la valeur de l'immeuble :", choix: ["Après réalisation du projet", "Au jour de la décision d'expropriation, sans la plus-value du projet", "Fixée par l'expropriant seul", "Au jour de l'achat par le propriétaire"], bonne: 1, explication: "Préjudice direct, matériel et certain." },
      { q: "La mise en débet concerne :", choix: ["Les ordonnateurs", "Les comptables publics", "Les ministres", "Les électeurs"], bonne: 1, explication: "Jugement des comptes." },
      { q: "La discipline budgétaire et financière sanctionne les ordonnateurs par :", choix: ["Des peines de prison", "Des amendes", "La révocation automatique", "L'annulation du budget"], bonne: 1, explication: "La sanction pénale reste possible." },
    ],
  },

  7: {
    titre: "L'exécution des décisions de la justice administrative",
    description: "Exécution des jugements contre l'administration : article 126, insaisissabilité, astreinte (article 448 CPC), article 9 de la loi de finances 2020.",
    resume: md`
## L'essentiel — Exécution des jugements administratifs

- **Article 126** : les jugements définitifs s'imposent à tous ; assistance des autorités ; article 124 : jugements exécutés au nom du Roi.
- Inexécution = atteinte au droit au recours (article 118) et à la confiance des citoyens ; le juge de l'exécution du tribunal administratif suit la procédure.
- Obligations : après annulation, **réintégration**, reconstitution, réexamen ; après condamnation, **paiement** avec intérêts ; refus = illégalité et faute (discours royal de 2016).
- Obstacles : **insaisissabilité** des biens publics, règles de la **comptabilité publique** (crédits), inertie, stock de dettes des collectivités (emprises irrégulières).
- Procédure : formule exécutoire, notification, demande au **juge de l'exécution**, procès-verbal de refus, intervention de la **tutelle** (dépenses obligatoires des collectivités).
- **Astreinte** (article **448** CPC) : condamnation par jour de retard pour une obligation de **faire** ; admise contre l'administration par une partie de la jurisprudence ; liquidation.
- Saisie des fonds publics admise un temps par la jurisprudence ; **article 9 de la loi de finances 2020** : demande de paiement, paiement sous **90 jours** dans la limite des crédits, sinon inscription dans les budgets suivants sous **quatre ans**, **aucune saisie** des fonds et biens de l'État et des collectivités ; débat sur l'article 126.
- Autres garanties : responsabilité de l'administration pour le retard, responsabilité personnelle de l'agent (article 80 DOC), sanctions pénales possibles, annulation des décisions contraires à la chose jugée, **Médiateur**.
`,
    exercices: md`
### Exercice 2 — Quel moyen ?

Indiquez le moyen le plus adapté : 1) le ministère refuse de délivrer l'attestation qu'un jugement l'oblige à délivrer ; 2) l'État ne paie pas une indemnité de 50 000 dirhams ; 3) après l'annulation d'un refus de permis, la commune prend un nouveau refus identique fondé sur le même motif illégal ; 4) le retard d'exécution a causé à l'intéressé un préjudice important.

<details><summary>Voir le corrigé</summary>

1) Demande au juge de l'exécution et astreinte pour l'obligation de faire. 2) Demande de paiement à l'ordonnateur selon l'article 9 de la loi de finances 2020 (90 jours, inscription budgétaire), sans saisie possible ; saisine du Médiateur. 3) Recours pour excès de pouvoir contre le nouveau refus, pour méconnaissance de l'autorité de la chose jugée, avec sursis à exécution. 4) Recours de pleine juridiction en responsabilité pour faute (refus d'exécuter).

</details>

### Exercice 3 — Dissertation : plan détaillé

Proposez un plan pour le sujet : « L'exécution des jugements administratifs au Maroc, entre autorité de la chose jugée et contraintes de l'action publique ».

<details><summary>Voir le corrigé</summary>

*Introduction* : article 126, enjeu de confiance (discours de 2016), problématique : comment concilier l'obligation d'exécuter et la protection des deniers publics ?
**I. Une obligation d'exécuter affirmée** — A. Le fondement : article 126, autorité absolue de l'annulation, responsabilité pour refus d'exécuter. B. Les instruments : juge de l'exécution, astreinte, recours contre les décisions contraires, responsabilité des agents.
**II. Une exécution limitée par les privilèges de l'administration** — A. L'insaisissabilité et les règles budgétaires, l'article 9 de la loi de finances 2020. B. Les voies d'amélioration : inscription des dépenses obligatoires, cellules d'exécution, rôle du Médiateur, respect des procédures d'expropriation pour éviter le contentieux.
*Conclusion* : l'effectivité du contrôle juridictionnel dépend de l'exécution ; l'équilibre trouvé en 2020 reste discuté.

</details>
`,
    qcm: [
      { q: "L'obligation de respecter les jugements définitifs est prévue par l'article :", choix: ["118", "120", "124", "126"], bonne: 3, explication: "Ils s'imposent à tous." },
      { q: "Après l'annulation d'une révocation, l'administration doit :", choix: ["Verser une amende au Trésor", "Réintégrer l'agent et reconstituer sa carrière", "Prononcer une nouvelle révocation identique", "Attendre une nouvelle loi"], bonne: 1, explication: "Effet rétroactif de l'annulation." },
      { q: "Les biens du domaine public sont :", choix: ["Saisissables", "Insaisissables", "Vendables aux enchères", "Soumis à hypothèque"], bonne: 1, explication: "Affectés à l'usage public ou au service public." },
      { q: "L'astreinte est prévue par l'article :", choix: ["24 de la loi 41-90", "448 du CPC", "79 du DOC", "126 de la Constitution"], bonne: 1, explication: "Condamnation par jour de retard." },
      { q: "L'astreinte est surtout utile pour :", choix: ["Une obligation de faire", "Le paiement d'une somme d'argent", "Un acte de gouvernement", "Une élection"], bonne: 0, explication: "Elle contraint à exécuter." },
      { q: "L'article 9 de la loi de finances 2020 fixe un délai de paiement de :", choix: ["30 jours", "60 jours", "90 jours", "Un an"], bonne: 2, explication: "Dans la limite des crédits." },
      { q: "En cas d'insuffisance de crédits, la dette doit être inscrite dans les budgets suivants dans un délai maximal de :", choix: ["Un an", "Deux ans", "Quatre ans", "Dix ans"], bonne: 2, explication: "Article 9 de la loi de finances 2020." },
      { q: "Selon l'article 9 de la loi de finances 2020, les fonds et biens de l'État :", choix: ["Peuvent être saisis après 90 jours", "Ne peuvent faire l'objet de saisie", "Peuvent être vendus par le créancier", "Sont transférés au créancier"], bonne: 1, explication: "Disposition discutée." },
      { q: "Une nouvelle décision identique à une décision annulée pour le même vice :", choix: ["Est légale", "Méconnaît l'autorité de la chose jugée", "Est un acte de gouvernement", "Ne peut être attaquée"], bonne: 1, explication: "Elle peut être annulée." },
      { q: "L'institution qui reçoit les plaintes relatives à l'inexécution des jugements par l'administration est :", choix: ["Le Médiateur", "La Cour constitutionnelle", "Le Conseil économique", "Bank Al-Maghrib"], bonne: 0, explication: "Article 162 de la Constitution." },
    ],
  },
};

export default chapitres;
