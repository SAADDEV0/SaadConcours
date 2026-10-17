// Droit international public (Droit S3) — compléments par chapitre : description SEO, résumé, exercices 2 et 3, QCM.
const md = String.raw;

const chapitres = {
  1: {
    titre: "Le droit international public : notion, fondement et rapports avec le droit interne",
    description: "Droit international public : définition, juridicité, volontarisme et objectivisme, jus cogens, monisme et dualisme, traités dans la Constitution de 2011.",
    resume: md`
## L'essentiel — Notion et fondement

- **Droit international public** : règles entre sujets du droit international (États, organisations) ; ≠ droit international privé.
- Société internationale **décentralisée** : souveraineté et égalité (article 2-1 de la Charte), règles créées par les sujets, sanction imparfaite, consentement.
- Négation de la juridicité (Hobbes, Hegel, Austin) écartée : les États reconnaissent, invoquent et respectent le droit international.
- **Volontarisme** : autolimitation (Jellinek), volonté commune (Triepel), affaire du **Lotus** (1927).
- **Objectivisme** : norme fondamentale (Kelsen), solidarité sociale (Scelle), droit naturel.
- **Jus cogens** (article 53 de la Convention de Vienne de 1969) ; obligations **erga omnes** (Barcelona Traction, 1970).
- **Dualisme** (Triepel, Anzilotti : réception par un acte interne) / **monisme** (Kelsen, Scelle : ordre unique).
- Article 27 de la Convention de Vienne : pas d'invocation du droit interne pour ne pas exécuter un traité.
- Maroc : **préambule** (primauté des conventions ratifiées et publiées sur le droit interne, dans le cadre de la Constitution et de l'identité nationale) ; **article 55** (le Roi signe et ratifie ; loi d'approbation pour certains traités ; contrôle de la Cour constitutionnelle et révision préalable si contrariété).
`,
    exercices: md`
### Exercice 2 — Volontarisme ou objectivisme ?

Rattachez chaque idée à une doctrine : 1) un État n'est lié que par les règles qu'il a acceptées ; 2) le droit international naît des besoins de la solidarité entre les peuples ; 3) l'interdiction du génocide s'impose à tous les États, même sans traité ; 4) les règles de droit liant les États procèdent de la volonté de ceux-ci ; 5) le droit repose sur une norme fondamentale selon laquelle les traités doivent être respectés.

<details><summary>Voir le corrigé</summary>

1) Volontarisme (autolimitation, Jellinek). 2) Objectivisme sociologique (Scelle). 3) Objectivisme : jus cogens (article 53 de la Convention de Vienne). 4) Volontarisme : affaire du Lotus (CPJI, 1927). 5) Objectivisme normativiste (Kelsen).

</details>

### Exercice 3 — Quelle procédure de ratification ?

Indiquez si le traité doit être approuvé par une loi avant sa ratification par le Maroc (article 55) : a) un accord de délimitation de la frontière maritime avec un État voisin ; b) un accord culturel de jumelage entre deux universités sans incidence financière ; c) un accord de libre-échange ; d) une convention sur les droits des personnes handicapées ; e) un accord de prêt avec la Banque mondiale engageant les finances de l'État.

<details><summary>Voir le corrigé</summary>

a) Oui : délimitation des frontières. b) Non en principe : le Roi peut le ratifier sans loi, même s'il peut le soumettre au Parlement. c) Oui : traité de commerce. d) Oui : traité relatif aux droits et libertés. e) Oui : traité engageant les finances de l'État.

</details>
`,
    qcm: [
      { q: "Le droit international public régit principalement les relations entre :", choix: ["Personnes privées", "États et organisations internationales", "Entreprises", "Communes"], bonne: 1, explication: "Les relations privées internationales relèvent du droit international privé." },
      { q: "L'affaire du Lotus (1927) illustre la conception :", choix: ["Objectiviste", "Volontariste", "Jusnaturaliste", "Marxiste"], bonne: 1, explication: "Les règles procèdent de la volonté des États." },
      { q: "Le jus cogens est consacré par l'article :", choix: ["27 de la Convention de Vienne", "53 de la Convention de Vienne", "2 de la Charte", "38 du Statut de la CIJ"], bonne: 1, explication: "Normes impératives." },
      { q: "Les obligations erga omnes ont été évoquées par la CIJ dans l'affaire :", choix: ["Lotus", "Barcelona Traction", "Nicaragua", "Plateau continental de la mer du Nord"], bonne: 1, explication: "1970." },
      { q: "Selon le dualisme :", choix: ["Il n'existe qu'un ordre juridique", "Le traité doit être transformé en droit interne", "Le droit interne prime toujours", "Le juge applique directement tous les traités"], bonne: 1, explication: "Réception par un acte interne." },
      { q: "Un État ne peut invoquer son droit interne pour ne pas exécuter un traité selon l'article :", choix: ["26", "27", "53", "62"], bonne: 1, explication: "Convention de Vienne de 1969." },
      { q: "La primauté des conventions ratifiées sur le droit interne marocain est affirmée :", choix: ["À l'article 6", "Dans le préambule de la Constitution", "À l'article 175", "Dans le DOC"], bonne: 1, explication: "Dès leur publication, dans le cadre de la Constitution." },
      { q: "Au Maroc, les traités sont ratifiés par :", choix: ["Le chef du gouvernement", "Le Roi", "Le Parlement", "La Cour constitutionnelle"], bonne: 1, explication: "Article 55." },
      { q: "Un traité relatif à la délimitation des frontières exige au préalable :", choix: ["Un référendum", "Une loi d'approbation", "Un avis de la Cour de cassation", "Rien"], bonne: 1, explication: "Article 55." },
      { q: "Si la Cour constitutionnelle juge un traité contraire à la Constitution, la ratification :", choix: ["Est impossible définitivement", "Exige une révision préalable de la Constitution", "Est automatique", "Relève du Parlement seul"], bonne: 1, explication: "Article 55, dernier alinéa." },
    ],
  },

  2: {
    titre: "Les traités : conclusion, réserves et entrée en vigueur",
    description: "Droit des traités (Vienne, 1969) : définition, pleins pouvoirs, signature, ratification, adhésion, réserves, entrée en vigueur et enregistrement.",
    resume: md`
## L'essentiel — Conclusion des traités

- **Traité** (article 2-1-a de la Convention de Vienne du **23 mai 1969**) : accord écrit entre États, régi par le droit international, quelle que soit sa dénomination ; Vienne 1986 pour les organisations.
- Classifications : bilatéral / multilatéral (ouvert ou fermé) ; traité-contrat / traité-loi ; forme solennelle / forme simplifiée.
- **Pleins pouvoirs** (article 7) ; dispensés : chefs d'État, chefs de gouvernement, ministres des Affaires étrangères ; confirmation ultérieure possible (article 8).
- Négociation ; adoption (consentement ou deux tiers, article 9) ; **authentification** par la signature (article 10).
- Consentement (articles 11 à 17) : **signature** (forme simplifiée), **ratification**, acceptation, approbation, **adhésion**, échange d'instruments.
- Obligation de ne pas priver le traité de son objet après la signature (article 18).
- **Réserve** (article 2-1-d) : exclure ou modifier l'effet de dispositions ; interdite si le traité l'interdit, si elle n'est pas autorisée, ou si elle est **incompatible avec l'objet et le but** (article 19 ; avis CIJ **Génocide**, 1951) ; acceptation tacite en 12 mois, objection (articles 20 et 21) ; ≠ déclaration interprétative ; réserves du Maroc à la CEDAW levées en 2011.
- Entrée en vigueur (article 24), application provisoire (article 25), non-rétroactivité (article 28).
- **Enregistrement** au Secrétariat de l'ONU (article **102** de la Charte) ; publication au Bulletin officiel.
`,
    exercices: md`
### Exercice 2 — Traité ou non ?

Qualifiez : 1) un « mémorandum d'accord » signé par deux ministres des Affaires étrangères, créant des obligations précises de coopération policière ; 2) un contrat de concession pétrolière entre l'État marocain et une société étrangère ; 3) un communiqué conjoint exprimant des intentions politiques générales ; 4) un échange de lettres entre deux gouvernements sur l'exemption de visas.

<details><summary>Voir le corrigé</summary>

1) Traité, si les parties ont entendu créer des obligations juridiques : la dénomination est indifférente. 2) Pas un traité : la société n'est pas un sujet du droit international ; c'est un contrat d'État, éventuellement soumis à l'arbitrage international. 3) Pas un traité en principe : simple engagement politique, sans intention de se lier juridiquement. 4) Traité en forme simplifiée (accord constitué de lettres échangées).

</details>

### Exercice 3 — Signature ou ratification ?

Un traité multilatéral prévoit qu'il est « soumis à ratification » et « entrera en vigueur trente jours après le dépôt du vingtième instrument de ratification ». L'État X l'a signé il y a deux ans sans le ratifier ; vingt-deux États l'ont ratifié. 1) Le traité est-il en vigueur ? 2) Lie-t-il l'État X ? 3) Quelle obligation pèse sur lui ?

<details><summary>Voir le corrigé</summary>

1) Oui, si plus de trente jours se sont écoulés depuis le dépôt du vingtième instrument. 2) Non : la signature d'un traité soumis à ratification ne vaut pas consentement à être lié ; l'État X n'est pas partie. 3) Il doit s'abstenir d'actes qui priveraient le traité de son objet et de son but, tant qu'il n'a pas manifesté son intention de ne pas devenir partie (article 18), et il reste lié par les règles coutumières que le traité codifie.

</details>
`,
    qcm: [
      { q: "La Convention de Vienne sur le droit des traités date de :", choix: ["1945", "1961", "1969", "1986"], bonne: 2, explication: "23 mai 1969, en vigueur en 1980." },
      { q: "La dénomination d'un traité est :", choix: ["Décisive", "Indifférente", "Obligatoirement « traité »", "Fixée par l'ONU"], bonne: 1, explication: "Article 2 de la Convention de Vienne." },
      { q: "Sont dispensés de produire des pleins pouvoirs :", choix: ["Tous les diplomates", "Les chefs d'État, chefs de gouvernement et ministres des Affaires étrangères", "Les parlementaires", "Les juges"], bonne: 1, explication: "Article 7." },
      { q: "La ratification est :", choix: ["L'authentification du texte", "L'acte par lequel l'État confirme définitivement son engagement", "Le retrait du traité", "Une réserve"], bonne: 1, explication: "Selon les règles internes de l'État." },
      { q: "L'adhésion permet à un État de devenir partie :", choix: ["À un traité qu'il a négocié", "À un traité ouvert qu'il n'a pas signé", "À un traité fermé", "À un traité expiré"], bonne: 1, explication: "Article 15." },
      { q: "Une réserve est invalide notamment si elle est :", choix: ["Écrite", "Incompatible avec l'objet et le but du traité", "Formulée lors de la ratification", "Acceptée par les autres États"], bonne: 1, explication: "Article 19, c ; avis de 1951." },
      { q: "L'avis de la CIJ sur les réserves à la convention sur le génocide date de :", choix: ["1949", "1951", "1969", "1975"], bonne: 1, explication: "Critère de l'objet et du but." },
      { q: "En l'absence d'objection, une réserve est réputée acceptée après :", choix: ["Un mois", "Six mois", "Douze mois", "Cinq ans"], bonne: 2, explication: "Article 20, paragraphe 5." },
      { q: "L'obligation d'enregistrer les traités figure à l'article :", choix: ["2 de la Charte", "51 de la Charte", "102 de la Charte", "103 de la Charte"], bonne: 2, explication: "Lutte contre la diplomatie secrète." },
      { q: "Le Maroc a levé l'essentiel de ses réserves à la CEDAW en :", choix: ["1993", "2004", "2011", "2018"], bonne: 2, explication: "Ratification initiale en 1993." },
    ],
  },

  3: {
    titre: "Les traités : effets, interprétation, nullité et extinction",
    description: "Effets des traités (pacta sunt servanda), effet relatif, interprétation (articles 31 à 33), nullité et jus cogens, violation substantielle, rebus sic stantibus.",
    resume: md`
## L'essentiel — Effets et vie des traités

- **Pacta sunt servanda** (article 26) : exécution de bonne foi ; pas d'invocation du droit interne (article 27), sauf violation manifeste (article 46).
- **Effet relatif** (article 34) ; obligation pour un tiers acceptée par écrit (article 35) ; droit au profit d'un tiers (article 36) ; règle devenue coutumière (article 38) ; situations objectives (frontières) ; primauté de la Charte (article 103).
- **Interprétation** (article 31) : bonne foi, **sens ordinaire**, **contexte**, **objet et but**, accords et pratique ultérieurs ; travaux préparatoires = moyens **complémentaires** (article 32) ; plurilinguisme (article 33) ; effet utile, interprétation évolutive (Costa Rica c. Nicaragua, 2009).
- **Nullités** (articles 46 à 53, liste limitative) : relatives (compétence, pouvoirs, erreur, dol, corruption) ; absolues (contrainte sur le représentant ou sur l'État, **jus cogens**).
- **Jus cogens** (article 53) : norme acceptée par la communauté des États dans son ensemble, sans dérogation ; nouvelle norme impérative (article 64).
- Extinction : terme, accord, **dénonciation** ou retrait (préavis de 12 mois si le traité est muet, article 56), traité postérieur (article 59).
- **Violation substantielle** (article 60) : extinction ou suspension ; exclusion pour les dispositions humanitaires.
- Impossibilité d'exécution (article 61) ; **changement fondamental de circonstances** (article 62) : base essentielle, transformation radicale, jamais pour une frontière ; interprétation stricte (**Gabčíkovo-Nagymaros**, 1997).
- Traités successifs (article 30) : lex posterior entre mêmes parties.
`,
    exercices: md`
### Exercice 2 — Nullité relative ou absolue ?

Qualifiez la cause de nullité invoquée : 1) un traité de cession de territoire imposé par l'occupation militaire ; 2) un traité conclu par un ministre que la Constitution de son État n'autorisait manifestement pas à engager l'État ; 3) un traité organisant le travail forcé de populations ; 4) un traité signé par un représentant qui a reçu des sommes importantes de l'autre partie.

<details><summary>Voir le corrigé</summary>

1) Nullité absolue : contrainte exercée sur l'État par la menace ou l'emploi de la force (article 52). 2) Nullité relative : violation manifeste d'une règle interne d'importance fondamentale (article 46), invocable par l'État concerné. 3) Nullité absolue : contrariété au jus cogens (interdiction de l'esclavage et du travail forcé, article 53). 4) Nullité relative : corruption du représentant (article 50).

</details>

### Exercice 3 — Méthode d'interprétation

Dans un traité bilatéral, l'expression « navires commerciaux » est utilisée pour accorder un libre passage. L'État A soutient qu'elle inclut les navires de croisière, l'État B qu'elle se limite aux navires transportant des marchandises. Exposez la démarche d'interprétation.

<details><summary>Voir le corrigé</summary>

On part du sens ordinaire de « commercial » : activité exercée dans un but lucratif, ce qui peut inclure le transport de passagers. On examine le contexte (préambule, autres articles, annexes : le traité parle-t-il de cargaisons, de passagers ?), l'objet et le but (favoriser les échanges économiques en général ou seulement le commerce de marchandises ?) et la pratique ultérieure des parties (les navires de croisière ont-ils effectivement bénéficié du passage ?). Les travaux préparatoires peuvent confirmer le sens. Le terme étant générique, une interprétation évolutive peut aussi être retenue si les parties ont entendu viser toutes les activités commerciales.

</details>
`,
    qcm: [
      { q: "Le principe pacta sunt servanda est posé par l'article :", choix: ["26", "27", "34", "53"], bonne: 0, explication: "Exécution de bonne foi." },
      { q: "Un traité crée une obligation pour un État tiers si celui-ci :", choix: ["Ne dit rien", "L'accepte expressément par écrit", "Est voisin des parties", "Est membre de l'ONU"], bonne: 1, explication: "Article 35." },
      { q: "En cas de conflit, les obligations de la Charte des Nations unies prévalent selon l'article :", choix: ["2", "51", "102", "103"], bonne: 3, explication: "Article 103 de la Charte." },
      { q: "La règle générale d'interprétation impose de retenir :", choix: ["Les seuls travaux préparatoires", "Le sens ordinaire dans le contexte et à la lumière de l'objet et du but", "L'interprétation la plus favorable à l'État le plus puissant", "Le texte en anglais seulement"], bonne: 1, explication: "Article 31." },
      { q: "Les travaux préparatoires sont :", choix: ["Le premier moyen d'interprétation", "Un moyen complémentaire", "Interdits", "Toujours décisifs"], bonne: 1, explication: "Article 32." },
      { q: "Un traité contraire au jus cogens est :", choix: ["Annulable par l'État lésé seulement", "Nul (nullité absolue)", "Valable entre les parties", "Suspendu"], bonne: 1, explication: "Article 53." },
      { q: "La violation substantielle d'un traité bilatéral permet à l'autre partie :", choix: ["De recourir à la force", "D'y mettre fin ou d'en suspendre l'application", "De le modifier seule", "De saisir le Conseil de sécurité obligatoirement"], bonne: 1, explication: "Article 60." },
      { q: "Le changement fondamental de circonstances ne peut jamais être invoqué pour :", choix: ["Un traité de commerce", "Un traité de frontière", "Un traité culturel", "Un accord de pêche"], bonne: 1, explication: "Article 62, paragraphe 2." },
      { q: "L'affaire Gabčíkovo-Nagymaros (1997) oppose :", choix: ["Le Maroc et l'Espagne", "La Hongrie et la Slovaquie", "Le Costa Rica et le Nicaragua", "La France et la Turquie"], bonne: 1, explication: "Interprétation stricte de l'article 62." },
      { q: "Si un traité est muet sur la dénonciation, le préavis éventuel est d'au moins :", choix: ["Un mois", "Six mois", "Douze mois", "Cinq ans"], bonne: 2, explication: "Article 56." },
    ],
  },

  4: {
    titre: "Les autres sources : coutume, principes généraux, actes unilatéraux",
    description: "Sources du droit international (article 38 du Statut de la CIJ) : coutume, opinio juris, objecteur persistant, principes généraux, actes unilatéraux.",
    resume: md`
## L'essentiel — Coutume et autres sources

- **Article 38-1 du Statut de la CIJ** : conventions, **coutume**, **principes généraux de droit**, jurisprudence et doctrine (moyens **auxiliaires**) ; ex aequo et bono (article 38-2).
- Pas de hiérarchie formelle entre les sources, sauf **jus cogens** et **article 103** de la Charte ; lex specialis, lex posterior.
- **Coutume** : pratique **générale**, **constante**, **uniforme** (élément matériel) + **opinio juris** (élément psychologique) ; durée non décisive (**Plateau continental de la mer du Nord**, 1969).
- Preuve par l'État qui l'invoque : actes étatiques, traités convergents, résolutions, travaux de la **CDI**.
- Opposable à tous, y compris aux nouveaux États ; **objecteur persistant** (**Pêcheries**, 1951), sauf jus cogens ; coutumes régionales (**Asile**, 1950) et bilatérales (**Droit de passage**, 1960).
- Coutume et traité : codification, cristallisation, création ; coexistence (**Nicaragua**, 1986).
- **Principes généraux** : bonne foi, chose jugée, abus de droit, réparation (**Chorzów**, 1928), estoppel.
- Jurisprudence : obligatoire seulement pour les parties (article 59) ; rôle de constatation.
- **Actes unilatéraux** : reconnaissance, protestation, renonciation, promesse ; force obligatoire d'une déclaration publique (**Essais nucléaires**, 1974) ; principes de la CDI (2006).
- **Résolutions** : décisions du Conseil de sécurité (chapitre VII, article 25) obligatoires ; recommandations de l'Assemblée générale, portée indirecte (résolutions 1514 et 2625) ; soft law.
`,
    exercices: md`
### Exercice 2 — Quelle source ?

Indiquez la source de la règle : 1) l'immunité de juridiction des États étrangers, appliquée depuis des siècles et reconnue comme obligatoire ; 2) l'obligation pour un État de réparer le préjudice causé par la violation d'un engagement ; 3) une décision du Conseil de sécurité imposant un embargo sur les armes ; 4) la déclaration universelle des droits de l'homme de 1948 ; 5) la déclaration publique d'un chef d'État promettant de ne pas reprendre des essais nucléaires.

<details><summary>Voir le corrigé</summary>

1) Coutume internationale (en partie codifiée par une convention des Nations unies de 2004, non encore en vigueur). 2) Principe général de droit, consacré par la jurisprudence (Usine de Chorzów, 1928) et par la coutume codifiée par la CDI. 3) Acte obligatoire d'une organisation internationale (chapitre VII et article 25 de la Charte). 4) Résolution de l'Assemblée générale, non obligatoire en elle-même, mais dont de nombreuses dispositions expriment aujourd'hui des règles coutumières. 5) Acte unilatéral obligatoire (Essais nucléaires, 1974).

</details>

### Exercice 3 — Habitude ou coutume ?

Depuis vingt ans, tous les États d'une région accueillent les navires de pêche étrangers en détresse dans leurs ports et leur fournissent gratuitement de l'eau potable. Interrogés, plusieurs ministres déclarent agir « par tradition d'hospitalité ». Une coutume régionale est-elle formée ?

<details><summary>Voir le corrigé</summary>

L'élément matériel paraît réuni : pratique générale dans la région, constante et uniforme pendant vingt ans. Mais l'élément psychologique fait défaut si les États agissent par « tradition d'hospitalité », c'est-à-dire par courtoisie, sans se sentir juridiquement tenus. Comme dans l'affaire du Plateau continental de la mer du Nord (1969), la simple habitude ne suffit pas : il n'y a pas de coutume régionale tant que l'opinio juris n'est pas établie. En revanche, l'obligation de porter assistance aux navires en détresse résulte d'autres règles, conventionnelles et coutumières, du droit de la mer.

</details>
`,
    qcm: [
      { q: "L'énumération de référence des sources du droit international figure à :", choix: ["L'article 2 de la Charte", "L'article 38 du Statut de la CIJ", "L'article 53 de la Convention de Vienne", "L'article 103 de la Charte"], bonne: 1, explication: "Conventions, coutume, principes généraux, moyens auxiliaires." },
      { q: "Les deux éléments de la coutume sont :", choix: ["La signature et la ratification", "La pratique et l'opinio juris", "La loi et le règlement", "La doctrine et la jurisprudence"], bonne: 1, explication: "Élément matériel et élément psychologique." },
      { q: "L'affaire du Plateau continental de la mer du Nord (1969) précise que :", choix: ["La durée est toujours décisive", "Une coutume peut se former rapidement mais exige l'opinio juris", "Les traités priment toujours", "Les résolutions sont obligatoires"], bonne: 1, explication: "La règle de l'équidistance n'était pas coutumière." },
      { q: "La théorie de l'objecteur persistant a été évoquée dans l'affaire :", choix: ["Lotus", "Pêcheries (1951)", "Nicaragua", "Chorzów"], bonne: 1, explication: "Royaume-Uni c. Norvège." },
      { q: "L'objecteur persistant ne peut pas échapper :", choix: ["À une coutume régionale", "Au jus cogens", "À un traité qu'il n'a pas signé", "À une résolution de l'Assemblée générale"], bonne: 1, explication: "Normes impératives." },
      { q: "Selon l'article 59 du Statut, les décisions de la CIJ sont obligatoires :", choix: ["Pour tous les États", "Pour les parties et le cas décidé", "Pour les membres du Conseil de sécurité", "Jamais"], bonne: 1, explication: "Moyen auxiliaire pour les autres." },
      { q: "L'obligation de réparer a été affirmée dans l'affaire :", choix: ["Usine de Chorzów (1928)", "Essais nucléaires (1974)", "Asile (1950)", "Lotus (1927)"], bonne: 0, explication: "CPJI." },
      { q: "Une déclaration publique d'un État peut l'engager juridiquement, selon l'affaire :", choix: ["Essais nucléaires (1974)", "Barcelona Traction", "Gabčíkovo-Nagymaros", "Pêcheries"], bonne: 0, explication: "Principe de bonne foi." },
      { q: "Les résolutions de l'Assemblée générale sont en principe :", choix: ["Obligatoires", "Des recommandations", "Des traités", "Des jugements"], bonne: 1, explication: "Elles peuvent contribuer à la coutume." },
      { q: "Les décisions du Conseil de sécurité prises sur le fondement du chapitre VII sont :", choix: ["Facultatives", "Obligatoires pour les membres", "Applicables aux seuls membres permanents", "Sans effet"], bonne: 1, explication: "Article 25 de la Charte." },
    ],
  },

  5: {
    titre: "Les sujets du droit international : l'État, les organisations internationales et l'individu",
    description: "Sujets du droit international : éléments de l'État, reconnaissance, succession, immunités, droit des peuples, personnalité des organisations et individu.",
    resume: md`
## L'essentiel — Les sujets

- **État** (Montevideo, 1933) : population permanente, territoire, gouvernement effectif, capacité d'entrer en relation (souveraineté) ; sujet originaire et plénier.
- **Reconnaissance** : thèse **déclarative** dominante (commission Badinter, 1991) ; acte discrétionnaire, exprès ou tacite ; **non-reconnaissance** obligatoire en cas d'illicéité ; gouvernements : doctrine Estrada (1930) ; suspension par l'Union africaine.
- **Succession d'États** : conventions de Vienne (1978, 1983) ; maintien des traités de frontière ; **uti possidetis juris** (Burkina Faso c. Mali, 1986).
- Souveraineté : égalité (article 2-1), **non-intervention** (Nicaragua, 1986 ; résolution 2625).
- **Immunité de juridiction** : actes de souveraineté, pas les actes de gestion commerciale ; Allemagne c. Italie (2012) ; **immunité d'exécution** des biens de service public.
- **Vienne 1961** : inviolabilité de l'agent, des locaux, de la valise ; immunité pénale ; persona non grata ; Vienne 1963 (consuls) ; immunité des hauts responsables (Mandat d'arrêt, 2002).
- **Droit des peuples** : résolution 1514 (1960), erga omnes (Timor oriental, 1995), limité par l'intégrité territoriale ; avis CIJ du 16 octobre 1975 (liens d'allégeance) ; initiative marocaine d'autonomie (2007).
- **Organisations** : sujets dérivés ; personnalité juridique (**Réparation des dommages**, 1949) ; **spécialité** et compétences implicites ; privilèges et immunités (1946).
- **Individu** : droits de l'homme et communications individuelles ; responsabilité pénale (Nuremberg, TPIY, TPIR, **CPI** de 1998, signée par le Maroc en 2000) ; protection diplomatique (Nottebohm, 1955).
`,
    exercices: md`
### Exercice 2 — Souveraineté ou gestion ?

L'immunité de juridiction peut-elle être invoquée par un État étranger dans les litiges suivants : 1) une action contre une décision de son ministère de la Défense ; 2) un contrat de vente de phosphates conclu par une société d'État étrangère ; 3) le licenciement d'un chauffeur marocain de l'ambassade ; 4) une expropriation décidée sur son propre territoire ; 5) l'achat de bureaux pour un office de tourisme commercial.

<details><summary>Voir le corrigé</summary>

1) Oui : acte de souveraineté. 2) Non : activité commerciale ; de plus, une société d'État dotée d'une personnalité distincte ne bénéficie pas en principe de l'immunité de l'État. 3) Solution discutée : la jurisprudence tend à écarter l'immunité pour les emplois subalternes sans participation à l'exercice de la puissance publique, tout en la maintenant pour les agents qui exercent des fonctions liées à la souveraineté. 4) Oui : acte de souveraineté territoriale. 5) Non en principe : acte de gestion.

</details>

### Exercice 3 — Les organisations internationales

Une organisation internationale de coopération agricole, dont le traité constitutif ne mentionne pas sa capacité à agir en justice, voit l'un de ses experts blessé par les forces de police d'un État où il était en mission. 1) L'organisation peut-elle présenter une réclamation internationale ? 2) Peut-elle créer une police internationale pour protéger ses experts ?

<details><summary>Voir le corrigé</summary>

1) Oui : selon l'avis Réparation des dommages (1949), une organisation dispose de la personnalité juridique et des compétences implicites nécessaires à l'exercice de ses fonctions, dont la capacité de présenter une réclamation internationale pour obtenir réparation du dommage causé à ses agents. 2) Non : en vertu du principe de spécialité, une organisation de coopération agricole n'a pas compétence pour créer une force de police ; cette mesure serait étrangère à ses fonctions et relèverait des États ou du Conseil de sécurité.

</details>
`,
    qcm: [
      { q: "Les éléments de l'État ont été formulés par la convention de :", choix: ["Vienne (1969)", "Montevideo (1933)", "Genève (1949)", "Montego Bay (1982)"], bonne: 1, explication: "Population, territoire, gouvernement, capacité." },
      { q: "Selon la thèse dominante, la reconnaissance d'État est :", choix: ["Constitutive", "Déclarative", "Obligatoire", "Interdite"], bonne: 1, explication: "Elle constate l'existence de l'État." },
      { q: "Le principe uti possidetis juris impose :", choix: ["De redessiner les frontières coloniales", "De respecter les frontières héritées de la colonisation", "D'organiser un référendum", "De partager les dettes"], bonne: 1, explication: "Burkina Faso c. Mali, 1986." },
      { q: "L'immunité de juridiction de l'État couvre :", choix: ["Tous ses actes", "Ses actes de souveraineté", "Ses contrats commerciaux", "Les actes de ses ressortissants"], bonne: 1, explication: "Acta jure imperii." },
      { q: "La convention de Vienne sur les relations diplomatiques date de :", choix: ["1945", "1961", "1963", "1969"], bonne: 1, explication: "Inviolabilité et immunités." },
      { q: "L'État accréditaire peut déclarer un diplomate :", choix: ["Coupable", "Persona non grata", "Apatride", "Réfugié"], bonne: 1, explication: "Article 9 de la convention de 1961." },
      { q: "L'avis consultatif de la CIJ sur le Sahara date du :", choix: ["16 octobre 1975", "6 novembre 1975", "12 novembre 1956", "1er juillet 2011"], bonne: 0, explication: "Liens juridiques d'allégeance." },
      { q: "La personnalité juridique de l'ONU a été reconnue par l'avis :", choix: ["Réserves à la convention sur le génocide (1951)", "Réparation des dommages (1949)", "Licéité des armes nucléaires (1996)", "Namibie (1971)"], bonne: 1, explication: "Affaire Bernadotte." },
      { q: "Le principe de spécialité signifie qu'une organisation internationale :", choix: ["A des compétences générales", "N'a que les compétences nécessaires à ses fonctions", "Est souveraine", "Peut lever l'impôt"], bonne: 1, explication: "Compétences attribuées ou implicites." },
      { q: "Le Statut de Rome créant la Cour pénale internationale date de :", choix: ["1945", "1993", "1998", "2002"], bonne: 2, explication: "En vigueur en 2002." },
    ],
  },

  6: {
    titre: "Le territoire et les espaces : terre, mer, air et espace extra-atmosphérique",
    description: "Territoire et frontières, droit de la mer (Montego Bay, 1982) : mer territoriale, ZEE, plateau continental, espaces maritimes du Maroc, espace aérien et espace.",
    resume: md`
## L'essentiel — Territoire et espaces

- **Territoire** : souveraineté exclusive et plénière (sol, sous-sol, eaux intérieures, mer territoriale, espace aérien).
- Acquisition : **occupation effective** d'une terra nullius (Île de Palmas, 1928 ; Groenland oriental, 1933), cession, accession, prescription ; **conquête interdite** (article 2-4, résolution 2625) ; effectivités.
- **Frontières** : délimitation / démarcation ; stabilité ; **uti possidetis juris** (Caire 1964, CIJ 1986).
- **Montego Bay** (10 décembre 1982, en vigueur en 1994, ratifiée par le Maroc en 2007) ; lignes de base.
- **Mer territoriale** : **12 milles**, souveraineté, **passage inoffensif** ; détroits (Gibraltar) : **passage en transit**.
- **Zone contiguë** : **24 milles**, contrôles douaniers, fiscaux, sanitaires, d'immigration (article 33).
- **ZEE** : **200 milles**, droits souverains sur les ressources, liberté de navigation pour les autres (article 73 : saisie, caution, pas d'emprisonnement).
- **Plateau continental** : 200 à 350 milles ; **haute mer** : liberté, État du pavillon ; **Zone** : patrimoine commun de l'humanité, Autorité internationale des fonds marins.
- Délimitation : équidistance (mer territoriale) ; **solution équitable** (articles 74 et 83), méthode en trois étapes (Roumanie c. Ukraine, 2009) ; lois marocaines **37-17** et **38-17** (2020).
- **Espace aérien** : souveraineté complète (Chicago, 1944), pas de passage inoffensif ; OACI ; article 3 bis.
- **Espace extra-atmosphérique** (traité de 1967) : liberté, **non-appropriation**, fins pacifiques ; Antarctique (Washington, 1959).
`,
    exercices: md`
### Exercice 2 — Quel espace ?

Indiquez l'espace et le régime : 1) un point situé à 5 milles des côtes ; 2) à 18 milles ; 3) à 120 milles ; 4) à 260 milles, au-dessus d'un plateau continental reconnu étendu ; 5) à 400 milles, en pleine mer.

<details><summary>Voir le corrigé</summary>

1) Mer territoriale : souveraineté, passage inoffensif. 2) Zone contiguë : contrôles douaniers, fiscaux, sanitaires et d'immigration. 3) ZEE : droits souverains sur les ressources, liberté de navigation et de survol des autres États. 4) Eaux de haute mer au-dessus d'un plateau continental étendu : liberté de navigation et de pêche dans les eaux, droits souverains de l'État côtier sur les ressources du sol et du sous-sol. 5) Haute mer (et la Zone pour les fonds marins au-delà de tout plateau continental).

</details>

### Exercice 3 — Dissertation : plan détaillé

Proposez un plan pour le sujet : « La Convention de Montego Bay, équilibre entre souveraineté et liberté des mers ».

<details><summary>Voir le corrigé</summary>

*Introduction* : opposition historique entre mare liberum (Grotius, 1609) et mare clausum (Selden) ; Convention de 1982 ; problématique : la Convention réalise-t-elle un équilibre durable ?
**I. L'extension des compétences de l'État côtier** — A. La souveraineté dans la mer territoriale et les contrôles de la zone contiguë. B. Les droits souverains sur les ressources de la ZEE et du plateau continental (exemple de la délimitation marocaine de 2020).
**II. Le maintien des libertés et des intérêts communs** — A. Passage inoffensif, passage en transit dans les détroits (Gibraltar), libertés de la haute mer. B. Le patrimoine commun de l'humanité et les défis nouveaux : protection de la biodiversité en haute mer (accord de 2023), pêche illégale, élévation du niveau de la mer.
*Conclusion* : un équilibre accepté par la quasi-totalité des États, à compléter face aux enjeux environnementaux.

</details>
`,
    qcm: [
      { q: "La Convention des Nations unies sur le droit de la mer a été signée à :", choix: ["Genève", "Montego Bay", "Vienne", "Chicago"], bonne: 1, explication: "Le 10 décembre 1982." },
      { q: "La mer territoriale s'étend jusqu'à :", choix: ["3 milles", "12 milles", "24 milles", "200 milles"], bonne: 1, explication: "Souveraineté de l'État côtier." },
      { q: "Dans la mer territoriale, les navires étrangers bénéficient :", choix: ["D'aucun droit", "Du droit de passage inoffensif", "De la liberté de pêche", "Du droit de survol militaire"], bonne: 1, explication: "Passage continu et rapide." },
      { q: "La zone contiguë s'étend jusqu'à :", choix: ["12 milles", "24 milles", "100 milles", "200 milles"], bonne: 1, explication: "Contrôles douaniers et sanitaires notamment." },
      { q: "Dans la ZEE, l'État côtier dispose :", choix: ["D'une souveraineté totale", "De droits souverains sur les ressources", "D'aucun droit", "Du droit d'interdire la navigation"], bonne: 1, explication: "Jusqu'à 200 milles." },
      { q: "Dans le détroit de Gibraltar s'applique le régime :", choix: ["Du passage inoffensif", "Du passage en transit", "De la haute mer exclusive", "De la souveraineté espagnole totale"], bonne: 1, explication: "Détroit servant à la navigation internationale." },
      { q: "Les fonds marins au-delà des juridictions nationales sont :", choix: ["Libres d'appropriation", "Patrimoine commun de l'humanité", "Propriété de l'ONU", "Soumis à l'État le plus proche"], bonne: 1, explication: "Gérés par l'Autorité internationale des fonds marins." },
      { q: "Le Maroc a ratifié la Convention de Montego Bay en :", choix: ["1982", "1994", "2007", "2020"], bonne: 2, explication: "Lois de délimitation adoptées en 2020." },
      { q: "La souveraineté sur l'espace aérien est affirmée par la convention de :", choix: ["Chicago (1944)", "Vienne (1961)", "Montevideo (1933)", "Washington (1959)"], bonne: 0, explication: "Article 1." },
      { q: "Selon le traité de 1967, l'espace extra-atmosphérique :", choix: ["Peut être approprié par le premier occupant", "Ne peut faire l'objet d'aucune appropriation nationale", "Appartient aux États-Unis et à la Russie", "Est soumis à la souveraineté de l'ONU"], bonne: 1, explication: "Liberté d'exploration, fins pacifiques." },
    ],
  },

  7: {
    titre: "La responsabilité internationale, le règlement des différends et le recours à la force",
    description: "Responsabilité internationale (CDI, 2001), réparation, règlement des différends, compétence de la CIJ, interdiction de la force et légitime défense.",
    resume: md`
## L'essentiel — Responsabilité, différends, force

- **Articles de la CDI (2001)** : tout fait internationalement illicite engage la responsabilité (article 1) ; conditions : **attribution** + **violation** d'une obligation (article 2) ; dommage = mesure de la réparation.
- Attribution : organes de l'État (article 4), puissance publique déléguée (article 5), **ultra vires** (article 7), personnes sous **contrôle** (article 8, Nicaragua 1986), comportement **adopté** (article 11, Téhéran 1980) ; particuliers : manque de diligence.
- Circonstances excluant l'illicéité (articles 20 à 25) : consentement, légitime défense, **contre-mesures**, force majeure, détresse, **état de nécessité** ; jamais contre le jus cogens (article 26).
- Conséquences : cessation, garanties, **réparation intégrale** (article 31, **Chorzów** 1928) : restitution, indemnisation, satisfaction ; protection diplomatique après épuisement des recours internes.
- Règlement pacifique (articles 2-3 et 33 de la Charte) : négociation, bons offices, **médiation**, enquête, **conciliation**, **arbitrage** (sentence obligatoire), règlement judiciaire.
- **CIJ** : La Haye, 15 juges, 9 ans ; seuls les États (article 34) ; **consentement** : compromis, clause compromissoire, **déclaration facultative** (article 36-2), forum prorogatum ; arrêts obligatoires (articles 59-60, article 94 de la Charte) ; mesures conservatoires (LaGrand 2001) ; avis consultatifs (article 96 : Sahara 1975, Mur 2004, climat 2025).
- **Interdiction de la force** (article 2-4), coutumière et jus cogens pour l'agression.
- Exceptions : **légitime défense** (article 51 : agression armée, nécessité, proportionnalité, information du Conseil) ; **chapitre VII** (articles 39, 41, 42 ; résolutions 678 et 1973) ; consentement ; responsabilité de protéger (2005) via le Conseil.
`,
    exercices: md`
### Exercice 2 — Attribuable à l'État ?

Le comportement est-il attribuable à l'État ? 1) Un policier qui, en service, maltraite un ressortissant étranger, contrairement aux instructions de son ministère ; 2) un groupe armé privé financé, équipé et dirigé opération par opération par l'armée de l'État ; 3) une foule qui incendie un consulat étranger, sans que les autorités en aient eu connaissance à l'avance ; 4) une région autonome dont le gouvernement local viole un traité conclu par l'État.

<details><summary>Voir le corrigé</summary>

1) Oui : acte d'un organe de l'État, même ultra vires (articles 4 et 7). 2) Oui : personnes agissant sous le contrôle effectif de l'État (article 8, Nicaragua). 3) Non en principe : actes de particuliers ; mais l'État peut engager sa responsabilité s'il n'a pas pris les mesures de protection raisonnables, et il doit poursuivre les auteurs. 4) Oui : organe territorial de l'État (article 4) ; l'État ne peut invoquer son organisation interne.

</details>

### Exercice 3 — Quel mode de règlement ?

Qualifiez : a) le Secrétaire général de l'ONU met en contact deux gouvernements sans faire de proposition ; b) un ancien chef d'État participe aux pourparlers et propose un plan de paix ; c) deux États désignent trois juges pour trancher leur différend frontalier par une décision obligatoire ; d) une commission internationale établit les circonstances d'un incident naval ; e) deux États saisissent la CIJ par un accord spécial.

<details><summary>Voir le corrigé</summary>

a) Bons offices. b) Médiation. c) Arbitrage (sentence obligatoire fondée sur le droit). d) Enquête. e) Règlement judiciaire par compromis devant la CIJ.

</details>
`,
    qcm: [
      { q: "Les articles sur la responsabilité de l'État ont été adoptés par la CDI en :", choix: ["1969", "1986", "2001", "2005"], bonne: 2, explication: "Fait internationalement illicite." },
      { q: "Les deux conditions du fait internationalement illicite sont :", choix: ["Le dommage et la faute", "L'attribution à l'État et la violation d'une obligation internationale", "La nationalité et le domicile", "Le traité et la ratification"], bonne: 1, explication: "Article 2." },
      { q: "Le comportement d'un organe agissant au-delà de ses compétences :", choix: ["N'est jamais attribuable à l'État", "Est attribuable à l'État s'il agit en cette qualité", "Engage seulement l'agent", "Relève du droit interne seulement"], bonne: 1, explication: "Article 7." },
      { q: "Le principe de la réparation intégrale a été posé dans l'affaire :", choix: ["Usine de Chorzów", "Lotus", "LaGrand", "Nottebohm"], bonne: 0, explication: "CPJI, 1928." },
      { q: "La médiation se distingue de l'arbitrage parce que :", choix: ["La solution proposée n'est pas obligatoire", "Elle est rendue par une cour", "Elle est toujours confidentielle", "Elle concerne seulement les frontières"], bonne: 0, explication: "L'arbitrage aboutit à une sentence obligatoire." },
      { q: "La CIJ compte :", choix: ["9 juges", "12 juges", "15 juges", "193 juges"], bonne: 2, explication: "Élus pour neuf ans." },
      { q: "La compétence contentieuse de la CIJ repose sur :", choix: ["La décision du Conseil de sécurité", "Le consentement des États", "La nationalité des juges", "La demande d'une ONG"], bonne: 1, explication: "Compromis, clause compromissoire, déclaration facultative." },
      { q: "La déclaration facultative d'acceptation de la juridiction obligatoire est prévue à l'article :", choix: ["34 du Statut", "36, paragraphe 2, du Statut", "38 du Statut", "59 du Statut"], bonne: 1, explication: "Sur une base de réciprocité." },
      { q: "L'interdiction du recours à la force figure à l'article :", choix: ["1 de la Charte", "2, paragraphe 4, de la Charte", "51 de la Charte", "103 de la Charte"], bonne: 1, explication: "Coutumière et impérative pour l'agression." },
      { q: "La légitime défense suppose :", choix: ["Une simple menace verbale", "Une agression armée, une riposte nécessaire et proportionnée", "L'accord préalable de l'Assemblée générale", "Une déclaration de guerre"], bonne: 1, explication: "Article 51 de la Charte." },
    ],
  },
};

export default chapitres;
