// Introduction à l'étude du droit (S1) — compléments par chapitre : description SEO, résumé, exercices 2 et 3, QCM.
const md = String.raw;

const chapitres = {
  1: {
    titre: "La notion de droit et la règle de droit",
    description: "La règle de droit : droit objectif et droits subjectifs, caractères, sanctions, règles impératives et supplétives, droit et morale, syllogisme juridique.",
    resume: md`
## L'essentiel — La règle de droit

- **Droit objectif** : ensemble des règles générales et obligatoires sanctionnées par l'autorité publique ; **droits subjectifs** : prérogatives des personnes.
- Caractères : générale et impersonnelle, abstraite, permanente, obligatoire, **sanctionnée par l'État** (critère décisif).
- Sanctions : pénales, civiles (nullité, dommages-intérêts, exécution forcée), administratives, disciplinaires.
- **Impérative** (ordre public de direction ou de protection) / **supplétive** (« sauf convention contraire »).
- Droit ≠ morale, religion, usages : seule la règle de droit est sanctionnée par l'État.
- Finalités : sécurité juridique, justice (commutative, distributive), ordre social, progrès.
- **Syllogisme** : majeure (règle), mineure (faits qualifiés), conclusion.
`,
    exercices: md`
### Exercice 2 — Impérative ou supplétive ?

Qualifiez : 1) « Est nulle toute clause par laquelle le salarié renonce à ses congés payés » ; 2) « Sauf stipulation contraire, le prix est payable au lieu de la livraison » ; 3) l'âge de la majorité civile ; 4) « À défaut de convention, les intérêts ne sont pas dus ».

<details><summary>Voir le corrigé</summary>

1) Impérative (formule « est nulle toute clause », ordre public de protection du salarié). 2) Supplétive (« sauf stipulation contraire »). 3) Impérative : les règles de capacité sont d'ordre public, on ne peut pas se déclarer majeur par contrat. 4) Supplétive : les parties peuvent prévoir des intérêts.

</details>

### Exercice 3 — Syllogisme

Présentez sous forme de syllogisme : « Karim a garé sa voiture sur un emplacement réservé aux personnes handicapées ; il reçoit une amende. »

<details><summary>Voir le corrigé</summary>

*Majeure* : la réglementation de la circulation interdit de stationner sur un emplacement réservé aux personnes handicapées sans y être autorisé, sous peine d'amende. *Mineure* : Karim, non autorisé, a stationné sur un tel emplacement. *Conclusion* : Karim encourt l'amende prévue ; la sanction est justifiée.

</details>
`,
    qcm: [
      { q: "Le critère décisif de la règle de droit est :", choix: ["Sa justice", "Sa sanction par l'autorité publique", "Son origine religieuse", "Son ancienneté"], bonne: 1, explication: "La contrainte étatique la distingue des autres règles." },
      { q: "Le droit de propriété d'une personne sur sa maison est :", choix: ["Un droit objectif", "Un droit subjectif", "Une règle morale", "Un usage"], bonne: 1, explication: "Prérogative individuelle." },
      { q: "La formule « sauf convention contraire » indique une règle :", choix: ["Impérative", "Supplétive", "Pénale", "Constitutionnelle"], bonne: 1, explication: "Les parties peuvent l'écarter." },
      { q: "Une règle qui vise une personne nommément désignée :", choix: ["Est une règle de droit", "N'a pas le caractère général de la règle de droit", "Est une loi organique", "Est une coutume"], bonne: 1, explication: "C'est une décision individuelle." },
      { q: "Les dommages-intérêts sont une sanction :", choix: ["Pénale", "Civile", "Disciplinaire", "Morale"], bonne: 1, explication: "Réparation du préjudice." },
      { q: "L'ordre public de protection vise à protéger :", choix: ["L'État uniquement", "Une partie faible (salarié, consommateur)", "Les sociétés cotées", "Les juges"], bonne: 1, explication: "À distinguer de l'ordre public de direction." },
      { q: "Le Code de la famille marocain actuel résulte de la loi :", choix: ["70-03", "5-96", "38-15", "17-95"], bonne: 0, explication: "Adopté en 2004." },
      { q: "Dans le syllogisme juridique, la majeure est :", choix: ["Les faits", "La règle de droit", "La conclusion", "Le jugement"], bonne: 1, explication: "La mineure correspond aux faits qualifiés." },
      { q: "La prescription illustre surtout la finalité de :", choix: ["Justice distributive", "Sécurité juridique", "Morale", "Religion"], bonne: 1, explication: "Stabilité des situations." },
      { q: "Saluer ses voisins relève :", choix: ["Du droit", "Des usages sociaux", "Du droit pénal", "Du droit administratif"], bonne: 1, explication: "Pas de sanction étatique." },
    ],
  },

  2: {
    titre: "Les divisions du droit",
    description: "Divisions du droit : droit public et droit privé, critères, branches (constitutionnel, administratif, civil, commercial, travail), droits mixtes.",
    resume: md`
## L'essentiel — Les divisions du droit

- **Droit public** : rapports impliquant l'État et les personnes publiques ; intérêt général ; rapports d'autorité ; branches : constitutionnel, administratif, finances publiques, fiscal, international public.
- **Droit privé** : rapports entre particuliers ; intérêts privés ; égalité ; branches : civil (droit commun : DOC, Code de la famille), commercial (loi 15-95), travail (loi 65-99), international privé.
- **Droits mixtes** : pénal, procédures civile et pénale, sécurité sociale, consommation, environnement.
- Le spécial déroge au général ; le droit civil est le droit commun.
- Intérêt : juge compétent, règles applicables, prérogatives des parties.
`,
    exercices: md`
### Exercice 2 — Vrai ou faux

1) Le droit fiscal relève du droit privé. 2) Le droit civil est le droit commun du droit privé. 3) Un contrat de location conclu par l'État relève toujours du droit administratif. 4) Le droit pénal est une branche mixte. 5) Un divorce entre une Marocaine et un Français soulève une question de droit international privé.

<details><summary>Voir le corrigé</summary>

1) Faux : droit public (rapports contribuable-État). 2) Vrai. 3) Faux : l'administration peut conclure des contrats de droit privé. 4) Vrai. 5) Vrai : élément d'extranéité (nationalité étrangère).

</details>

### Exercice 3 — Critères de distinction

Expliquez pourquoi la gestion déléguée du service de l'eau par une société privée montre les limites du critère organique (fondé sur les personnes).

<details><summary>Voir le corrigé</summary>

Selon le critère organique, une société privée relèverait du droit privé. Or elle gère un **service public** d'intérêt général, sous le contrôle de l'autorité délégante, avec des obligations de continuité et d'égalité des usagers : une partie de son activité obéit au droit public. Il faut donc combiner le critère organique avec le critère de l'**intérêt** et de la **nature** de l'activité.

</details>
`,
    qcm: [
      { q: "Le droit constitutionnel appartient :", choix: ["Au droit privé", "Au droit public", "Aux droits mixtes", "Au droit international privé"], bonne: 1, explication: "Organisation de l'État." },
      { q: "Le droit commun du droit privé est :", choix: ["Le droit commercial", "Le droit civil", "Le droit du travail", "Le droit pénal"], bonne: 1, explication: "Il s'applique à défaut de règle spéciale." },
      { q: "Le Code du travail marocain est issu de la loi :", choix: ["15-95", "65-99", "70-03", "31-08"], bonne: 1, explication: "Droit du travail." },
      { q: "Le droit pénal est généralement classé parmi :", choix: ["Le droit privé pur", "Les droits mixtes", "Le droit commercial", "Le droit international privé"], bonne: 1, explication: "L'État poursuit, mais protège aussi les particuliers." },
      { q: "Un litige entre un contribuable et la DGI relève du :", choix: ["Droit fiscal", "Droit commercial", "Droit de la famille", "Droit international privé"], bonne: 0, explication: "Branche du droit public." },
      { q: "Le droit international privé traite :", choix: ["Des relations entre États", "Des relations privées avec un élément étranger", "Des impôts", "Des traités"], bonne: 1, explication: "Conflits de lois et de juridictions." },
      { q: "Le Code de commerce marocain est issu de la loi :", choix: ["15-95", "5-96", "9-88", "38-15"], bonne: 0, explication: "Adopté en 1996." },
      { q: "Les rapports de droit public sont en principe des rapports :", choix: ["D'égalité", "D'autorité", "Familiaux", "Commerciaux"], bonne: 1, explication: "Prérogatives de puissance publique." },
      { q: "L'expropriation d'un terrain par une commune relève du :", choix: ["Droit civil", "Droit administratif", "Droit commercial", "Droit du travail"], bonne: 1, explication: "Décision unilatérale d'intérêt général." },
      { q: "L'adage « le spécial déroge au général » signifie que :", choix: ["La règle générale l'emporte toujours", "La règle spéciale l'emporte dans son domaine", "Les deux s'annulent", "Le juge choisit librement"], bonne: 1, explication: "Ex. : droit commercial par rapport au droit civil." },
    ],
  },

  3: {
    titre: "Les sources du droit marocain",
    description: "Sources du droit marocain : hiérarchie des normes, Constitution de 2011, traités, lois organiques et ordinaires, règlements, jurisprudence, coutume, fiqh.",
    resume: md`
## L'essentiel — Les sources du droit marocain

- Hiérarchie (article 6 de la Constitution) : Constitution → traités ratifiés → lois organiques → lois ordinaires → règlements (décrets, arrêtés) ; circulaires sans force réglementaire propre.
- **Constitution de 2011** : référendum du 1er juillet 2011 ; monarchie constitutionnelle, démocratique, parlementaire et sociale ; primauté des conventions ratifiées dans le cadre de la Constitution ; Cour constitutionnelle ; exception d'inconstitutionnalité (article 133).
- Loi : domaine de l'article 71 ; initiative du Chef du gouvernement (projet) et des parlementaires (proposition) ; vote ; promulgation par dahir (30 jours) ; publication au BO.
- Règlement (article 90) : autonome ou d'application ; recours pour excès de pouvoir.
- Autres sources : jurisprudence, coutume (élément matériel et psychologique ; usages du commerce), doctrine, fiqh malékite (article 400 du Code de la famille).
`,
    exercices: md`
### Exercice 2 — Loi ou règlement ?

Selon la Constitution, ces matières relèvent-elles de la loi ou du règlement ? 1) Création d'un nouvel impôt ; 2) horaires d'ouverture d'un service administratif ; 3) statut de la famille ; 4) modalités pratiques de dépôt d'une demande de carte d'identité ; 5) régime des sociétés commerciales.

<details><summary>Voir le corrigé</summary>

1) Loi (régime fiscal). 2) Règlement. 3) Loi (statut de la famille). 4) Règlement (modalités d'application). 5) Loi (droit des sociétés, obligations commerciales).

</details>

### Exercice 3 — La coutume

Quels sont les deux éléments de la coutume ? Une pratique récente, suivie par quelques commerçants seulement depuis un an, est-elle une coutume ?

<details><summary>Voir le corrigé</summary>

Élément **matériel** : une pratique ancienne, constante et générale. Élément **psychologique** : la conviction que cette pratique est obligatoire. La pratique récente et limitée à quelques commerçants ne remplit pas l'élément matériel (ni ancienneté, ni généralité) : ce n'est pas une coutume.

</details>
`,
    qcm: [
      { q: "La Constitution marocaine actuelle a été adoptée par référendum en :", choix: ["1996", "2011", "2004", "1962"], bonne: 1, explication: "Référendum du 1er juillet 2011." },
      { q: "Dans la hiérarchie des normes, le décret est :", choix: ["Supérieur à la loi", "Inférieur à la loi", "Égal à la loi", "Supérieur à la Constitution"], bonne: 1, explication: "Le règlement doit respecter la loi." },
      { q: "Un texte d'initiative parlementaire est :", choix: ["Un projet de loi", "Une proposition de loi", "Un décret-loi", "Un dahir"], bonne: 1, explication: "Le projet vient du Gouvernement." },
      { q: "La loi est promulguée par :", choix: ["Un arrêté ministériel", "Un dahir royal", "Une circulaire", "Un jugement"], bonne: 1, explication: "Dans les 30 jours (article 50)." },
      { q: "La loi devient opposable à tous après :", choix: ["Son vote", "Sa publication au Bulletin officiel", "Sa discussion en commission", "Un débat télévisé"], bonne: 1, explication: "Obligation de publicité des normes." },
      { q: "Les lois organiques sont soumises au contrôle de la Cour constitutionnelle :", choix: ["Jamais", "Obligatoirement avant promulgation", "Seulement sur demande", "Après 10 ans"], bonne: 1, explication: "Procédure renforcée." },
      { q: "Le pouvoir réglementaire général appartient au :", choix: ["Chef du gouvernement", "Président de la Chambre des conseillers", "Juge", "Wali"], bonne: 0, explication: "Article 90 de la Constitution." },
      { q: "Pour les questions non réglées par le Code de la famille, l'article 400 renvoie :", choix: ["Au Code pénal", "Au rite malékite et à l'ijtihad", "Au droit français", "À la coutume locale uniquement"], bonne: 1, explication: "Source subsidiaire." },
      { q: "La coutume suppose :", choix: ["Un texte écrit", "Une pratique constante et la conviction de son caractère obligatoire", "Un vote du Parlement", "Une décision de justice"], bonne: 1, explication: "Éléments matériel et psychologique." },
      { q: "Un règlement illégal peut être annulé par :", choix: ["Un recours pour excès de pouvoir", "Une motion de censure", "Un référendum", "Une circulaire"], bonne: 0, explication: "Devant la juridiction administrative." },
    ],
  },

  4: {
    titre: "L'application de la règle de droit",
    description: "Application de la loi : publication au BO, non-rétroactivité, loi pénale plus douce, effet immédiat, abrogation, interprétation, application dans l'espace.",
    resume: md`
## L'essentiel — L'application de la loi

- Entrée en vigueur : **promulgation** (dahir) + **publication** au Bulletin officiel ; date fixée par la loi ; « nul n'est censé ignorer la loi ».
- **Non-rétroactivité** (article 6 de la Constitution) ; légalité des délits et des peines ; exceptions : loi pénale plus douce, loi interprétative.
- **Effet immédiat** sur les situations en cours ; contrats en cours : survie de la loi ancienne sauf ordre public ou dispositions transitoires.
- Abrogation expresse, tacite, caducité ; la désuétude n'abroge pas.
- Interprétation : littérale, téléologique ; a contrario, a fortiori, par analogie (interdite en pénal) ; le spécial déroge au général ; la loi postérieure déroge à l'antérieure.
- Espace : territorialité (pénal, police) ; personnalité (statut personnel, article 2 du Code de la famille) ; contrats internationaux : autonomie de la volonté.
`,
    exercices: md`
### Exercice 2 — Raisonnements

Quel raisonnement utilise-t-on ? 1) « Les mineurs ne peuvent pas voter ; donc les majeurs le peuvent. » 2) « S'il est interdit de stationner devant une caserne, il est à plus forte raison interdit d'y abandonner un véhicule. » 3) Le juge applique à un contrat nouveau, non prévu par la loi, les règles d'un contrat voisin.

<details><summary>Voir le corrigé</summary>

1) A contrario. 2) A fortiori. 3) Par analogie (a pari), admise en droit civil mais pas en droit pénal.

</details>

### Exercice 3 — Territorialité ou personnalité ?

1) Un touriste étranger commet un vol à Fès. 2) Un Marocain résidant en Belgique se marie. 3) Une société étrangère réalise des ventes au Maroc. Quelle loi s'applique ?

<details><summary>Voir le corrigé</summary>

1) Loi pénale marocaine (territorialité). 2) Code de la famille marocain pour son statut personnel (personnalité, article 2), sans préjudice des formalités exigées dans le pays de résidence. 3) Loi fiscale marocaine pour les opérations réalisées au Maroc (territorialité).

</details>
`,
    qcm: [
      { q: "Une loi entre en vigueur après :", choix: ["Son vote seulement", "Sa promulgation et sa publication au Bulletin officiel", "Son annonce à la télévision", "Un an automatiquement"], bonne: 1, explication: "Ou à la date qu'elle fixe." },
      { q: "Le principe de non-rétroactivité figure au Maroc dans :", choix: ["La Constitution (article 6)", "Une circulaire", "Le Code de commerce uniquement", "La coutume"], bonne: 0, explication: "Principe constitutionnel." },
      { q: "Une loi pénale plus douce :", choix: ["Ne s'applique jamais aux faits passés", "S'applique aux faits non encore définitivement jugés", "Est inconstitutionnelle", "Ne s'applique qu'aux étrangers"], bonne: 1, explication: "Exception à la non-rétroactivité." },
      { q: "Une loi non appliquée depuis longtemps :", choix: ["Est abrogée par désuétude", "Reste en vigueur tant qu'elle n'est pas abrogée", "Devient une coutume", "Est annulée par le juge"], bonne: 1, explication: "La désuétude n'abroge pas." },
      { q: "L'abrogation tacite résulte :", choix: ["D'une déclaration expresse", "De l'incompatibilité entre deux textes", "D'un référendum", "D'un jugement"], bonne: 1, explication: "La loi nouvelle l'emporte." },
      { q: "En matière pénale, l'interprétation est :", choix: ["Large", "Stricte", "Libre", "Par analogie"], bonne: 1, explication: "Légalité des délits et des peines." },
      { q: "Le Code pénal s'applique aux étrangers sur le territoire marocain en vertu du principe de :", choix: ["Personnalité", "Territorialité", "Réciprocité", "Autonomie"], bonne: 1, explication: "Lois de police et de sûreté." },
      { q: "Les contrats en cours restent en principe régis par :", choix: ["La loi nouvelle", "La loi ancienne", "La coutume", "Le droit étranger"], bonne: 1, explication: "Sauf ordre public ou disposition transitoire." },
      { q: "L'adage « nul n'est censé ignorer la loi » signifie que :", choix: ["Tout le monde connaît réellement la loi", "On ne peut invoquer son ignorance de la loi pour y échapper", "Seuls les juristes doivent la connaître", "La loi est facultative"], bonne: 1, explication: "Fiction nécessaire à la sécurité juridique." },
      { q: "Le statut personnel d'un Marocain vivant à l'étranger est régi par :", choix: ["La loi du pays de résidence uniquement", "Le Code de la famille marocain", "La coutume locale", "Le Code de commerce"], bonne: 1, explication: "Principe de personnalité (article 2)." },
    ],
  },

  5: {
    titre: "L'organisation judiciaire marocaine",
    description: "Organisation judiciaire au Maroc : loi 38-15, principes, TPI, tribunaux de commerce et administratifs, cours d'appel, Cour de cassation, voies de recours.",
    resume: md`
## L'essentiel — L'organisation judiciaire

- Pouvoir judiciaire indépendant (Constitution 2011) ; **loi 38-15** (dahir du 30 juin 2022, BO du 14 juillet 2022, en vigueur en janvier 2023).
- Principes : indépendance, égalité, gratuité relative, publicité, motivation, double degré, délai raisonnable, droits de la défense.
- 1er degré : **TPI** (droit commun ; sections famille et proximité), tribunaux de commerce, tribunaux administratifs.
- 2e degré : cours d'appel, cours d'appel de commerce, cours d'appel administratives.
- **Cour de cassation** (ex-Cour suprême) : juge le droit, pas les faits ; casse ou rejette.
- Voies de recours : ordinaires (opposition, appel), extraordinaires (cassation, tierce opposition, rétractation).
- Autres : Cour constitutionnelle, Cour des comptes, CSPJ, présidence du ministère public ; siège / parquet ; auxiliaires de justice.
`,
    exercices: md`
### Exercice 2 — Appel ou cassation ?

Pour chaque grief, indiquez la voie de recours adaptée : 1) le tribunal a mal évalué le montant du préjudice ; 2) la cour d'appel a appliqué un texte abrogé ; 3) le défendeur n'était pas présent et n'a pas été représenté lors du jugement ; 4) un tiers, qui n'était pas partie au procès, subit les effets du jugement.

<details><summary>Voir le corrigé</summary>

1) Appel (appréciation des faits). 2) Pourvoi en cassation (erreur de droit). 3) Opposition (jugement par défaut). 4) Tierce opposition.

</details>

### Exercice 3 — Siège ou parquet ?

Classez : 1) le juge qui préside l'audience ; 2) le procureur du Roi ; 3) le juge d'instruction ; 4) le procureur général du Roi près la Cour de cassation.

<details><summary>Voir le corrigé</summary>

1) Siège. 2) Parquet. 3) Siège (il instruit l'affaire et décide des suites de l'instruction). 4) Parquet : il préside le ministère public depuis 2017.

</details>
`,
    qcm: [
      { q: "La loi actuelle relative à l'organisation judiciaire est la loi :", choix: ["38-15", "15-95", "53-95", "41-90"], bonne: 0, explication: "Promulguée en 2022." },
      { q: "La juridiction de droit commun du premier degré est :", choix: ["Le tribunal de commerce", "Le tribunal de première instance", "La Cour de cassation", "Le tribunal administratif"], bonne: 1, explication: "Compétence générale." },
      { q: "La Cour de cassation juge :", choix: ["Les faits et le droit", "Uniquement le droit", "Uniquement les faits", "Les élections"], bonne: 1, explication: "Elle contrôle l'application de la loi." },
      { q: "Un recours contre un refus de permis de construire relève :", choix: ["Du tribunal de commerce", "Du tribunal administratif", "De la section famille", "De la Cour des comptes"], bonne: 1, explication: "Recours pour excès de pouvoir." },
      { q: "L'appel est une voie de recours :", choix: ["Ordinaire", "Extraordinaire", "Constitutionnelle", "Administrative uniquement"], bonne: 0, explication: "Il rejuge faits et droit." },
      { q: "Un jugement rendu en l'absence du défendeur peut être contesté par :", choix: ["L'opposition", "La tierce opposition", "Le référendum", "La médiation obligatoire"], bonne: 0, explication: "Jugement par défaut." },
      { q: "Le Conseil supérieur du pouvoir judiciaire est présidé par :", choix: ["Le Chef du gouvernement", "Le Roi", "Le ministre de la Justice", "Le président de la Chambre des représentants"], bonne: 1, explication: "Il gère la carrière des magistrats." },
      { q: "Les magistrats du parquet :", choix: ["Jugent les affaires", "Représentent la société et engagent les poursuites", "Tiennent les dossiers", "Rédigent les actes notariés"], bonne: 1, explication: "Ministère public." },
      { q: "Le contrôle de la conformité des lois à la Constitution relève de :", choix: ["La Cour de cassation", "La Cour constitutionnelle", "La Cour des comptes", "Le tribunal administratif"], bonne: 1, explication: "Constitution de 2011." },
      { q: "Un litige entre deux commerçants pour une facture impayée relève :", choix: ["Du tribunal administratif", "Du tribunal de commerce", "De la section famille", "De la Cour constitutionnelle"], bonne: 1, explication: "Litige lié à leur activité commerciale." },
    ],
  },

  6: {
    titre: "Les personnes juridiques",
    description: "Personnes juridiques : personnalité, attributs, capacité de jouissance et d'exercice, incapacités du Code de la famille, représentation, personnes morales.",
    resume: md`
## L'essentiel — Les personnes juridiques

- Personnalité juridique : aptitude à être titulaire de droits et d'obligations ; personnes physiques et morales.
- Personne physique : de la naissance (vivant ; l'enfant conçu peut hériter s'il naît vivant) au décès ; attributs : nom, domicile, nationalité, état civil, patrimoine ; droits de la personnalité.
- Capacité de **jouissance** (pour tous) / d'**exercice** (majorité à **18 ans**).
- Moins de 12 ans et dément : pas de capacité d'exercice (actes nuls) ; 12-18 ans, prodigue, faible d'esprit : capacité limitée (profitables valables, préjudiciables nuls, mixtes soumis au représentant) ; émancipation dès 16 ans.
- Représentants : *wali* (père, puis mère), *wassi* (testamentaire), *mouqaddam* (désigné par le juge), sous contrôle du juge.
- Personnes morales : de droit public (État, collectivités, établissements publics) ; de droit privé (sociétés dès l'immatriculation, associations, coopératives, GIE) ; spécialité ; attributs propres.
`,
    exercices: md`
### Exercice 2 — Jouissance ou exercice ?

1) Un nourrisson hérite d'un appartement. 2) Il ne peut pas le vendre lui-même. 3) Une société est condamnée à payer une amende. 4) Un majeur prodigue ne peut vendre son terrain sans autorisation. Pour chaque cas, quelle capacité est en jeu ?

<details><summary>Voir le corrigé</summary>

1) Capacité de **jouissance** : il est titulaire du droit. 2) Absence de capacité d'**exercice** : son représentant agira, avec l'autorisation du juge pour un acte grave. 3) Personnalité morale : la société est titulaire d'obligations et peut engager sa responsabilité dans les cas prévus par la loi. 4) Capacité d'**exercice limitée** du prodigue.

</details>

### Exercice 3 — Personnes morales

Classez : 1) la commune de Tiznit ; 2) une SARL immatriculée ; 3) une association sportive déclarée ; 4) l'Université Mohammed V ; 5) un groupe d'amis qui organise un voyage.

<details><summary>Voir le corrigé</summary>

1) Personne morale de droit public (collectivité territoriale). 2) Personne morale de droit privé à but lucratif. 3) Personne morale de droit privé à but non lucratif. 4) Personne morale de droit public (établissement public). 5) Pas de personnalité morale : simple groupement de fait.

</details>
`,
    qcm: [
      { q: "L'âge de la majorité civile au Maroc est de :", choix: ["16 ans", "18 ans", "20 ans", "21 ans"], bonne: 1, explication: "Années grégoriennes révolues (Code de la famille)." },
      { q: "L'âge de discernement est fixé à :", choix: ["7 ans", "10 ans", "12 ans", "15 ans"], bonne: 2, explication: "En dessous, pas de capacité d'exercice." },
      { q: "La capacité de jouissance est :", choix: ["L'aptitude à agir seul", "L'aptitude à être titulaire de droits", "Réservée aux majeurs", "Réservée aux commerçants"], bonne: 1, explication: "Elle appartient à toute personne." },
      { q: "Un mineur de 15 ans reçoit une donation sans charge : l'acte est :", choix: ["Nul", "Valable", "Soumis au juge obligatoirement", "Inexistant"], bonne: 1, explication: "Acte purement profitable." },
      { q: "L'émancipation peut être demandée à partir de :", choix: ["12 ans", "14 ans", "16 ans", "18 ans"], bonne: 2, explication: "Tarchid, par décision du tribunal." },
      { q: "Le tuteur désigné par le juge s'appelle :", choix: ["Wali", "Wassi", "Mouqaddam", "Adoul"], bonne: 2, explication: "Tuteur datif." },
      { q: "Une société acquiert la personnalité morale :", choix: ["À la signature des statuts", "À son immatriculation au registre du commerce", "Au premier bénéfice", "À la première assemblée"], bonne: 1, explication: "Avant, c'est une société en formation." },
      { q: "Le principe de spécialité signifie qu'une personne morale :", choix: ["Peut tout faire", "Agit dans les limites de son objet", "N'a pas de patrimoine", "Ne peut pas contracter"], bonne: 1, explication: "Capacité limitée à l'objet." },
      { q: "Le prodigue (safih) a une capacité d'exercice :", choix: ["Pleine", "Limitée", "Absente", "Suspendue pour toujours"], bonne: 1, explication: "Après décision du juge." },
      { q: "Depuis la réforme de 2007, la nationalité marocaine peut être transmise :", choix: ["Par le père seulement", "Par le père ou la mère", "Par la mère seulement", "Par le lieu de naissance uniquement"], bonne: 1, explication: "Code de la nationalité modifié." },
    ],
  },

  7: {
    titre: "Les droits subjectifs et leurs sources",
    description: "Droits subjectifs : patrimoine, droits réels, personnels et intellectuels, propriété et usufruit, droits extrapatrimoniaux, actes et faits juridiques.",
    resume: md`
## L'essentiel — Les droits subjectifs

- **Patrimoine** : actif et passif ; droit de gage général des créanciers.
- Droits **patrimoniaux** : réels (sur une chose ; droit de suite et de préférence), personnels (créance : donner, faire, ne pas faire), intellectuels (loi 17-97, loi 2-00).
- **Propriété** (garantie par la Constitution ; loi 39-08) : usus, fructus, abusus ; absolue, exclusive, perpétuelle ; démembrements : usufruit / nue-propriété, usage, servitudes, superficie ; sûretés : hypothèque, gage, nantissement.
- Droits **extrapatrimoniaux** : personnalité, famille, droits civiques ; incessibles mais réparables en argent.
- Sources (article 1 du DOC) : **actes juridiques** (volonté) et **faits juridiques** (délits, quasi-délits, quasi-contrats, événements).
- Contrat : capacité, consentement, objet certain, cause licite (article 2) ; force obligatoire (article 230).
- Responsabilité : faute (articles 77 et 78), dommage, lien de causalité.
`,
    exercices: md`
### Exercice 2 — Acte ou fait juridique ?

Qualifiez : 1) un testament ; 2) le décès d'une personne ; 3) un contrat de travail ; 4) un accident causé par un cycliste imprudent ; 5) une démission ; 6) le versement par erreur d'une somme qui n'était pas due.

<details><summary>Voir le corrigé</summary>

1) Acte juridique unilatéral. 2) Fait juridique (événement). 3) Acte juridique bilatéral (contrat). 4) Fait juridique (quasi-délit). 5) Acte juridique unilatéral. 6) Fait juridique (quasi-contrat : paiement de l'indu, qui oblige à restituer).

</details>

### Exercice 3 — Réel ou personnel ?

Classez : 1) le droit du propriétaire d'un terrain ; 2) le droit d'une banque au remboursement d'un prêt ; 3) l'hypothèque de cette banque sur la maison de l'emprunteur ; 4) le droit d'un salarié à son salaire ; 5) le droit de passage sur le terrain du voisin.

<details><summary>Voir le corrigé</summary>

1) Réel principal. 2) Personnel (créance). 3) Réel accessoire (sûreté). 4) Personnel. 5) Réel (servitude).

</details>
`,
    qcm: [
      { q: "Le droit d'exiger d'une personne le paiement d'une somme est un droit :", choix: ["Réel", "Personnel (de créance)", "Extrapatrimonial", "Intellectuel"], bonne: 1, explication: "Il s'exerce contre une personne." },
      { q: "L'usufruitier dispose :", choix: ["De l'abusus seulement", "De l'usus et du fructus", "Des trois prérogatives", "D'aucune prérogative"], bonne: 1, explication: "Le nu-propriétaire garde l'abusus." },
      { q: "Le droit à l'image est un droit :", choix: ["Patrimonial", "Extrapatrimonial", "Réel", "De créance"], bonne: 1, explication: "Droit de la personnalité." },
      { q: "Selon l'article 1 du DOC, les obligations dérivent notamment :", choix: ["Des conventions, quasi-contrats, délits et quasi-délits", "Uniquement des contrats", "Uniquement de la loi pénale", "Des coutumes seules"], bonne: 0, explication: "Actes et faits juridiques." },
      { q: "Un accident de la circulation est :", choix: ["Un acte juridique", "Un fait juridique", "Un contrat", "Un droit réel"], bonne: 1, explication: "Ses effets ne sont pas voulus." },
      { q: "Parmi ces conditions, laquelle n'est pas exigée par l'article 2 du DOC ?", choix: ["La capacité", "Un objet certain", "Une cause licite", "Un acte notarié dans tous les cas"], bonne: 3, explication: "Le contrat est en principe consensuel." },
      { q: "Selon l'article 230 du DOC, le contrat valablement formé :", choix: ["Peut être révoqué librement", "Tient lieu de loi aux parties", "N'oblige que le vendeur", "Doit être homologué par le juge"], bonne: 1, explication: "Force obligatoire." },
      { q: "L'hypothèque est :", choix: ["Un droit réel principal", "Un droit réel accessoire", "Un droit extrapatrimonial", "Un droit intellectuel"], bonne: 1, explication: "Sûreté sur un immeuble." },
      { q: "La responsabilité délictuelle suppose :", choix: ["Un contrat", "Une faute, un dommage et un lien de causalité", "Un acte notarié", "Une plainte pénale"], bonne: 1, explication: "Articles 77 et 78 du DOC." },
      { q: "La propriété industrielle (brevets, marques) est régie au Maroc par la loi :", choix: ["17-97", "2-00", "9-88", "65-99"], bonne: 0, explication: "La loi 2-00 concerne les droits d'auteur." },
    ],
  },

  8: {
    titre: "La preuve des droits",
    description: "La preuve des droits au Maroc : charge de la preuve, cinq modes de preuve du DOC, écrit au-delà de 10 000 DH, exceptions, preuve libre en matière commerciale.",
    resume: md`
## L'essentiel — La preuve

- On prouve des **faits**, pas le droit ; sans preuve, le droit est inefficace.
- Charge : celui qui se prévaut de l'obligation la prouve (article 399 du DOC) ; celui qui invoque l'extinction la prouve (article 400) ; présomptions simples ou irréfragables.
- Modes (article 404) : **aveu**, **preuve littérale**, **témoignage**, **présomptions**, **serment**.
- Écrit : acte authentique (officier public, foi jusqu'à inscription de faux), sous seing privé (signature), électronique.
- Article 443 : actes de plus de **10 000 DH** prouvés par écrit (création et extinction) ; tempéraments : aveu, commencement de preuve par écrit, impossibilité, perte ; faits juridiques : tous moyens.
- Matière commerciale : **preuve libre** entre commerçants, sauf écrit exigé.
`,
    exercices: md`
### Exercice 2 — Tous moyens ou écrit ?

Le moyen de preuve est-il libre ? 1) Vente d'une voiture d'occasion à 60 000 DH entre particuliers ; 2) prêt de 3 000 DH entre voisins ; 3) dégâts des eaux causés par un voisin ; 4) vente de marchandises à 200 000 DH entre deux grossistes ; 5) remboursement d'un prêt civil de 15 000 DH.

<details><summary>Voir le corrigé</summary>

1) Écrit exigé (acte civil de plus de 10 000 DH). 2) Tous moyens (moins de 10 000 DH). 3) Tous moyens (fait juridique). 4) Preuve libre (matière commerciale). 5) Écrit exigé : l'extinction d'une obligation de plus de 10 000 DH obéit à la même règle.

</details>

### Exercice 3 — Actes authentiques

Classez : 1) un contrat de vente d'appartement reçu par un notaire ; 2) une reconnaissance de dette rédigée et signée par le débiteur ; 3) un acte de mariage établi par des adouls ; 4) un courriel non signé.

<details><summary>Voir le corrigé</summary>

1) Acte authentique. 2) Acte sous seing privé. 3) Acte authentique. 4) Simple élément de preuve, qui peut valoir commencement de preuve par écrit ou être admis en matière commerciale ; ce n'est pas un acte sous seing privé faute de signature.

</details>
`,
    qcm: [
      { q: "La preuve de l'obligation incombe :", choix: ["Au défendeur", "À celui qui s'en prévaut", "Au juge", "Au greffier"], bonne: 1, explication: "Article 399 du DOC." },
      { q: "Le nombre de modes de preuve énumérés par l'article 404 du DOC est de :", choix: ["3", "4", "5", "6"], bonne: 2, explication: "Aveu, écrit, témoins, présomptions, serment." },
      { q: "Au-delà de quel montant un acte civil doit-il être prouvé par écrit ?", choix: ["1 000 DH", "5 000 DH", "10 000 DH", "50 000 DH"], bonne: 2, explication: "Article 443 du DOC." },
      { q: "Un accident se prouve :", choix: ["Uniquement par écrit", "Par tous moyens", "Uniquement par aveu", "Par acte notarié"], bonne: 1, explication: "C'est un fait juridique." },
      { q: "L'acte authentique est reçu par :", choix: ["Les parties seules", "Un officier public compétent", "Un témoin", "Un avocat uniquement"], bonne: 1, explication: "Notaire, adoul, officier d'état civil." },
      { q: "L'acte authentique fait foi :", choix: ["Jusqu'à preuve contraire par témoins", "Jusqu'à inscription de faux", "Pendant un an", "Seulement entre commerçants"], bonne: 1, explication: "Pour ce que l'officier a constaté." },
      { q: "En matière commerciale, la preuve est :", choix: ["Toujours écrite", "Libre, sauf écrit exigé", "Impossible", "Réservée au juge"], bonne: 1, explication: "Rapidité des affaires." },
      { q: "Celui qui prétend avoir remboursé une dette doit :", choix: ["Ne rien prouver", "Prouver le remboursement", "Attendre la preuve du créancier", "Prêter serment obligatoirement"], bonne: 1, explication: "Article 400 du DOC." },
      { q: "Une présomption irréfragable :", choix: ["Admet la preuve contraire", "N'admet aucune preuve contraire", "Est une coutume", "Est un témoignage"], bonne: 1, explication: "Ex. : autorité de la chose jugée." },
      { q: "L'aveu judiciaire :", choix: ["N'a aucune valeur", "Fait pleine foi contre son auteur", "Exige un notaire", "N'est admis qu'en matière pénale"], bonne: 1, explication: "Il dispense de l'écrit." },
    ],
  },
};

export default chapitres;
