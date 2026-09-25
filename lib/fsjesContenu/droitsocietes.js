// Droit des sociétés (S3) — compléments par chapitre : description SEO, résumé, exercices 2 et 3, QCM.
const md = String.raw;

const chapitres = {
  1: {
    titre: "La notion de société et le contrat de société",
    description: "Contrat de société (article 982 du DOC) : conditions de validité, apports en numéraire, en nature et en industrie, clause léonine, affectio societatis.",
    resume: md`
## L'essentiel — Le contrat de société

- **Article 982 du DOC** : contrat par lequel deux ou plusieurs personnes mettent en commun biens ou travail pour partager le bénéfice ; la société est aussi une **institution** (règles impératives).
- Société **unipersonnelle** admise dans certaines formes (SARL à associé unique).
- Conditions générales : consentement, **capacité** (qualité de commerçant pour l'associé de SNC), objet et cause licites.
- Conditions spécifiques : pluralité d'associés (5 minimum dans la SA), **apports**, participation aux résultats, **affectio societatis**.
- Apports : **numéraire**, **nature** (propriété ou jouissance ; commissaire aux apports), **industrie** (hors capital, interdit dans la SA).
- Capital = numéraire + nature ; gage des créanciers.
- **Clause léonine** nulle (tout le bénéfice à un associé, exonération totale des pertes) ; contribution aux pertes ≠ obligation aux dettes.
- Distinction avec association, coopérative, indivision, GIE.
`,
    exercices: md`
### Exercice 2 — Société ou pas ?

Qualifiez les groupements suivants :
1. Trois frères héritent d'un immeuble et le louent sans rien convenir entre eux.
2. Des agriculteurs se regroupent pour collecter et vendre leur lait en commun, chacun disposant d'une voix.
3. Deux amis exploitent ensemble un café depuis cinq ans, partagent les bénéfices et les pertes, sans aucun statut écrit.
4. Des parents d'élèves créent une structure pour organiser des activités culturelles gratuites.

<details><summary>Voir le corrigé</summary>

1. **Indivision** : situation subie, sans volonté d'entreprendre ensemble.
2. **Coopérative** (loi 112-12) : service rendu aux membres, « une personne, une voix ».
3. **Société créée de fait** : apports, partage des résultats et affectio societatis sont réunis ; les associés sont tenus comme dans une société en nom collectif.
4. **Association** : but non lucratif.

</details>

### Exercice 3 — Clauses statutaires

Les statuts d'une société prévoient : a) « L'associé A percevra 70 % des bénéfices » ; b) « L'associé B ne supportera jamais aucune perte » ; c) « L'associé C, apporteur en industrie, ne recevra aucune part des bénéfices » ; d) « L'associé D récupérera son apport en priorité en cas de liquidation ».

Appréciez la validité de chaque clause.

<details><summary>Voir le corrigé</summary>

a) **Valable** : répartition inégale mais pas léonine.
b) **Nulle** : exonération totale des pertes, clause léonine.
c) **Nulle** : exclusion totale d'un associé du partage des bénéfices, clause léonine (l'apporteur en industrie doit participer aux bénéfices).
d) À apprécier : une priorité de remboursement est admise si elle n'aboutit pas à exonérer totalement D des pertes ; dans le doute, le juge vérifie qu'il reste exposé à un risque réel.

</details>
`,
    qcm: [
      { q: "La définition de la société figure dans :", choix: ["La loi 17-95", "L'article 982 du DOC", "Le Code de commerce", "La loi 15-89"], bonne: 1, explication: "Dahir des obligations et des contrats." },
      { q: "L'apport en industrie :", choix: ["Entre dans le capital", "Ne concourt pas à la formation du capital", "Est obligatoire", "Est autorisé dans la SA"], bonne: 1, explication: "Il donne droit à une part des bénéfices." },
      { q: "Le capital social est constitué des apports :", choix: ["En industrie uniquement", "En numéraire et en nature", "En nature uniquement", "Des dettes"], bonne: 1, explication: "Il sert de gage aux créanciers." },
      { q: "Une clause exonérant un associé de toute contribution aux pertes est :", choix: ["Valable", "Léonine, donc nulle", "Obligatoire", "Réservée à la SA"], bonne: 1, explication: "Elle méconnaît la participation aux résultats." },
      { q: "L'affectio societatis désigne :", choix: ["Le capital minimum", "La volonté de collaborer sur un pied d'égalité", "Le siège social", "La durée de la société"], bonne: 1, explication: "Elle distingue la société du salariat ou du prêt." },
      { q: "Un apport en jouissance :", choix: ["Transfère la propriété", "Donne à la société l'usage du bien", "Est interdit", "Est un apport en industrie"], bonne: 1, explication: "L'apporteur reste propriétaire." },
      { q: "Un mineur non émancipé peut devenir :", choix: ["Associé de SNC", "Actionnaire d'une SA par son représentant légal", "Gérant commerçant", "Commandité"], bonne: 1, explication: "Sa responsabilité est limitée à ses apports." },
      { q: "Le nombre minimum d'actionnaires d'une SA est de :", choix: ["2", "5", "7", "1"], bonne: 1, explication: "Loi 17-95." },
      { q: "Une structure à but non lucratif est :", choix: ["Une société", "Une association", "Une SNC", "Une SARL"], bonne: 1, explication: "Pas de partage des bénéfices." },
      { q: "Des personnes qui se comportent comme des associés sans statuts forment :", choix: ["Une indivision", "Une société créée de fait", "Un GIE", "Une coopérative"], bonne: 1, explication: "Le juge la reconnaît à partir des faits." },
    ],
  },

  2: {
    titre: "La personnalité morale et la constitution",
    description: "Personnalité morale des sociétés : immatriculation, attributs, étapes de constitution au Maroc, certificat négatif, actes avant immatriculation et nullités.",
    resume: md`
## L'essentiel — Personnalité morale et constitution

- Personnalité morale à compter de l'**immatriculation au registre du commerce** ; la société en participation n'en a pas.
- Attributs : **nom** (certificat négatif de l'OMPIC), **siège** (nationalité, tribunal compétent), **patrimoine propre**, capacité limitée par l'**objet social**, droit d'agir en justice, responsabilité.
- Étapes : statuts → certificat négatif → dépôt des fonds sur compte bloqué → évaluation des apports en nature → nomination des dirigeants → enregistrement, fiscalité (IF, ICE), CNSS → **immatriculation** → publicité (JAL, BO) ; CRI et création électronique (loi 88-17).
- Actes avant immatriculation : fondateurs tenus **solidairement et indéfiniment** ; **reprise** par la société (état annexé aux statuts, mandat, décision après immatriculation) : actes réputés souscrits par elle dès l'origine.
- **Nullité** : causes limitées, effet pour l'**avenir** (liquidation), régularisation possible, tiers protégés.
`,
    exercices: md`
### Exercice 2 — Patrimoine social et patrimoine personnel

M. Alami est associé d'une SA et d'une SNC. Un de ses créanciers personnels veut saisir : a) un camion appartenant à la SA ; b) les actions de la SA détenues par M. Alami ; c) un entrepôt de la SNC.
Par ailleurs, un créancier de la SNC impayé veut saisir la maison de M. Alami. Qu'en pensez-vous ?

<details><summary>Voir le corrigé</summary>

a) **Non** : le camion appartient à la SA, personne morale distincte.
b) **Oui** : les actions font partie du patrimoine personnel de M. Alami.
c) **Non** : l'entrepôt appartient à la SNC.

Le créancier de la **SNC** peut, en revanche, poursuivre M. Alami sur ses biens personnels, car les associés en nom collectif répondent **indéfiniment et solidairement** des dettes sociales (après une mise en demeure infructueuse de la société).

</details>

### Exercice 3 — Spécialité et objet social

L'objet social d'une SARL est « la vente de matériaux de construction ». Le gérant signe un contrat d'achat de terrains agricoles pour y cultiver des oliviers.

1. Quel principe est en cause ?
2. Quels risques pour le gérant et comment régulariser ?

<details><summary>Voir le corrigé</summary>

**1)** Le **principe de spécialité** : la capacité de la société est limitée à son objet social. L'opération est étrangère à l'objet défini dans les statuts.

**2)** Dans les rapports avec les tiers de bonne foi, la société peut rester engagée par les actes du gérant, mais celui-ci engage sa **responsabilité** envers la société et les associés pour avoir dépassé l'objet social. Pour régulariser, les associés peuvent **modifier l'objet social** par une décision extraordinaire (majorité requise pour modifier les statuts) et ratifier l'opération.

</details>
`,
    qcm: [
      { q: "Une société commerciale acquiert la personnalité morale :", choix: ["À la signature des statuts", "À l'immatriculation au registre du commerce", "Au dépôt des fonds", "À la première assemblée"], bonne: 1, explication: "C'est l'immatriculation qui la crée comme personne juridique." },
      { q: "La société qui n'a pas la personnalité morale est :", choix: ["La SNC", "La société en participation", "La SARL", "La SA"], bonne: 1, explication: "Elle n'est pas immatriculée." },
      { q: "Le certificat négatif, délivré par l'OMPIC, porte sur :", choix: ["Le capital", "La dénomination", "Le siège", "Les associés"], bonne: 1, explication: "Il atteste que le nom est disponible." },
      { q: "La nationalité d'une société est déterminée principalement par :", choix: ["La nationalité des associés", "Son siège social", "La langue des statuts", "Sa banque"], bonne: 1, explication: "Le siège est le domicile de la société." },
      { q: "Le principe de spécialité limite la capacité de la société à :", choix: ["Son capital", "Son objet social", "Son siège", "Sa durée"], bonne: 1, explication: "Défini dans les statuts." },
      { q: "Les fonds en numéraire versés à la constitution sont :", choix: ["Remis au gérant", "Déposés sur un compte bloqué", "Versés au Trésor", "Utilisés immédiatement"], bonne: 1, explication: "Débloqués après l'immatriculation." },
      { q: "Les personnes qui agissent pour une société en formation sont tenues :", choix: ["Jamais", "Solidairement et indéfiniment, jusqu'à la reprise", "À concurrence de leurs apports", "Seulement si la société est une SNC"], bonne: 1, explication: "La société peut ensuite reprendre les actes." },
      { q: "Les actes repris par la société sont réputés souscrits :", choix: ["À la date de reprise", "Par elle dès l'origine", "Par les associés", "Par le greffe"], bonne: 1, explication: "Effet rétroactif de la reprise." },
      { q: "La nullité d'une société produit ses effets :", choix: ["Rétroactivement", "Pour l'avenir seulement", "Uniquement entre associés", "Jamais"], bonne: 1, explication: "Elle entraîne la liquidation." },
      { q: "La durée maximale d'une société est de :", choix: ["50 ans", "99 ans", "30 ans", "Illimitée"], bonne: 1, explication: "Prorogeable par décision des associés." },
    ],
  },

  3: {
    titre: "La classification des sociétés",
    description: "Classification des sociétés au Maroc : civiles et commerciales, de personnes et de capitaux, SARL hybride, SAS, GIE, coopérative, filiales et groupes.",
    resume: md`
## L'essentiel — Classification des sociétés

- **Commerciales par la forme** (SNC, SCS, SCA, SARL, SA, SAS) ou **par l'objet** ; **civiles** (objet civil, par exemple société civile immobilière).
- **Sociétés de personnes** (intuitu personae, parts sociales, responsabilité indéfinie) / **de capitaux** (actions négociables, responsabilité limitée) ; **SARL hybride**.
- SNC (2 associés commerçants, indéfinie et solidaire) ; SCS et SCA (commandités / commanditaires) ; SARL (1 à 50 associés, capital libre) ; SA (5 actionnaires, 300 000 DH ou 3 000 000 DH) ; **SAS** (loi 19-20, liberté statutaire, pas d'appel public à l'épargne) ; société en participation (sans personnalité morale).
- **GIE** (loi 13-97) : moyens communs, membres tenus indéfiniment ; **coopérative** (loi 112-12).
- Choix : responsabilité, nombre et confiance des associés, financement, souplesse, fiscalité, transmission.
`,
    exercices: md`
### Exercice 2 — Civile ou commerciale ?

Qualifiez chaque société : 1) une SARL dont l'objet est la gestion d'un cabinet de conseil ; 2) une société civile immobilière familiale qui loue deux appartements ; 3) une société sans forme précisée qui achète des téléphones pour les revendre ; 4) une SA d'exploitation agricole.

<details><summary>Voir le corrigé</summary>

1. **Commerciale par la forme** (SARL), même si l'activité de conseil est civile.
2. **Civile** : objet civil (gestion de son patrimoine immobilier) et forme civile.
3. **Commerciale par l'objet** (achat pour revendre) ; à défaut de forme, elle serait traitée comme une société créée de fait, soumise au régime de la SNC.
4. **Commerciale par la forme** (SA), bien que l'agriculture soit une activité civile.

</details>

### Exercice 3 — Sociétés de personnes ou de capitaux

Pour chaque situation, indiquez si elle est plus typique d'une société de personnes ou de capitaux : 1) un associé décède et ses héritiers deviennent associés sans formalité ; 2) la cession des titres à un tiers nécessite l'accord de tous les associés ; 3) les créanciers poursuivent un associé sur ses biens personnels ; 4) les titres sont cotés en Bourse.

<details><summary>Voir le corrigé</summary>

1. **Capitaux** : les actions se transmettent librement aux héritiers.
2. **Personnes** : intuitu personae (SNC).
3. **Personnes** : responsabilité indéfinie (SNC, commandités).
4. **Capitaux** : actions négociables (SA faisant appel public à l'épargne).

</details>
`,
    qcm: [
      { q: "Une SARL dont l'objet est civil est :", choix: ["Une société civile", "Une société commerciale par la forme", "Une association", "Une coopérative"], bonne: 1, explication: "La forme suffit à la rendre commerciale." },
      { q: "La SARL est une société :", choix: ["De personnes pure", "De capitaux pure", "Hybride", "Civile"], bonne: 2, explication: "Responsabilité limitée mais parts non négociables." },
      { q: "Le nombre maximum d'associés d'une SARL est de :", choix: ["20", "50", "100", "Illimité"], bonne: 1, explication: "Au-delà, il faut changer de forme." },
      { q: "La SAS a été introduite au Maroc par :", choix: ["La loi 5-96", "La loi 19-20", "La loi 15-89", "Le DOC"], bonne: 1, explication: "Loi de 2021 modifiant la loi 17-95." },
      { q: "La SAS peut-elle faire appel public à l'épargne ?", choix: ["Oui", "Non", "Seulement si elle a plus de 5 associés", "Seulement avec l'accord de l'OMPIC"], bonne: 1, explication: "Il faut alors une SA." },
      { q: "Le capital minimum d'une SA faisant appel public à l'épargne est de :", choix: ["300 000 DH", "3 000 000 DH", "1 000 000 DH", "100 000 DH"], bonne: 1, explication: "300 000 DH sans appel public à l'épargne." },
      { q: "Dans une SCS, les commanditaires sont responsables :", choix: ["Indéfiniment", "À concurrence de leurs apports", "Solidairement", "Jamais"], bonne: 1, explication: "Les commandités répondent indéfiniment." },
      { q: "Les membres d'un GIE répondent de ses dettes :", choix: ["À concurrence de leurs apports", "Indéfiniment et solidairement", "Jamais", "Seulement s'ils sont dirigeants"], bonne: 1, explication: "Loi 13-97." },
      { q: "Les coopératives sont régies par :", choix: ["La loi 112-12", "La loi 17-95", "La loi 13-97", "La loi 5-96"], bonne: 0, explication: "Principe une personne, une voix." },
      { q: "Les titres d'une société de personnes sont :", choix: ["Des actions", "Des parts sociales", "Des obligations", "Des bons du Trésor"], bonne: 1, explication: "Cessibles avec l'accord des associés." },
    ],
  },

  4: {
    titre: "Les sociétés de personnes",
    description: "Sociétés de personnes : SNC, responsabilité indéfinie et solidaire, gérance, cession des parts, SCS et interdiction d'immixtion, SCA, société en participation.",
    resume: md`
## L'essentiel — Les sociétés de personnes

- **SNC** : au moins 2 associés **commerçants**, pas de capital minimum ; responsabilité **indéfinie**, **solidaire** et **subsidiaire** (mise en demeure préalable de la société) ; recours entre associés selon la contribution.
- Gérance : tous les associés sauf clause ; engage la société dans l'objet social ; révocation protégée.
- Décisions à l'**unanimité** (sauf clause) ; cession des parts avec le **consentement de tous** ; décès = dissolution sauf **clause de continuation**.
- **SCS** : commandités (comme en SNC) et commanditaires (limités à l'apport) ; **interdiction d'immixtion** dans la gestion externe, même par procuration, sous peine de responsabilité indéfinie.
- **SCA** : actions, commandités et au moins 3 commanditaires, gérants et conseil de surveillance.
- **Société en participation** : non immatriculée, sans personnalité morale ; chacun s'engage en son nom, sauf si les associés agissent ouvertement comme tels.
`,
    exercices: md`
### Exercice 2 — Obligation et contribution

Une SNC de quatre associés à parts égales doit 400 000 DH à une banque ; son actif est nul. La banque, après mise en demeure infructueuse de la société, poursuit l'associé D, le plus solvable.

1. Combien la banque peut-elle réclamer à D ?
2. Si D paie, combien peut-il réclamer à chacun des autres ? Et si l'associé A est insolvable ?

<details><summary>Voir le corrigé</summary>

**1)** La **totalité** : **400 000 DH** (solidarité).

**2)** Chaque associé contribue pour 100 000 DH : D peut réclamer **100 000 DH** à chacun de A, B et C. Si A est insolvable, sa part (100 000 DH) est en principe répartie entre les associés solvables (B, C et D) : D pourrait alors réclamer environ 133 333 DH à B et à C, et supporter lui-même 133 333 DH.

</details>

### Exercice 3 — Commanditaire ou gérant ?

Dans une SCS, M. Idrissi, commanditaire, a accompli les actes suivants. Lesquels constituent une immixtion ?
1. Il a voté en assemblée l'approbation des comptes.
2. Il a conseillé au gérant de changer de fournisseur.
3. Il a négocié et signé un contrat de vente avec un client au nom de la société.
4. Il a examiné les livres comptables.

<details><summary>Voir le corrigé</summary>

1. **Non** : participation aux décisions collectives, autorisée.
2. **Non** : simple avis ou conseil.
3. **Oui** : acte de **gestion externe** engageant la société envers un tiers ; M. Idrissi devient indéfiniment et solidairement tenu des engagements qui en résultent.
4. **Non** : droit de contrôle et d'information de l'associé.

</details>
`,
    qcm: [
      { q: "Les associés d'une SNC ont la qualité :", choix: ["De salariés", "De commerçants", "De commanditaires", "De fonctionnaires"], bonne: 1, explication: "Ils répondent indéfiniment des dettes." },
      { q: "La responsabilité des associés de SNC est :", choix: ["Limitée aux apports", "Indéfinie et solidaire", "Nulle", "Limitée au double des apports"], bonne: 1, explication: "Sur tout leur patrimoine personnel." },
      { q: "Avant de poursuivre un associé de SNC, le créancier doit :", choix: ["Obtenir l'accord du gérant", "Mettre vainement en demeure la société", "Attendre la dissolution", "Saisir le procureur"], bonne: 1, explication: "Caractère subsidiaire de l'obligation." },
      { q: "La cession de parts de SNC à un tiers exige :", choix: ["La majorité simple", "Le consentement de tous les associés", "L'accord du gérant seul", "Aucune autorisation"], bonne: 1, explication: "Intuitu personae." },
      { q: "Sans clause de continuation, le décès d'un associé de SNC entraîne :", choix: ["L'entrée des héritiers", "La dissolution de la société", "La transformation en SA", "Aucun effet"], bonne: 1, explication: "La personne de l'associé est déterminante." },
      { q: "Le commanditaire d'une SCS est responsable :", choix: ["Indéfiniment", "À concurrence de son apport", "Solidairement avec les commandités", "Jamais"], bonne: 1, explication: "Sauf immixtion dans la gestion." },
      { q: "Un commanditaire qui signe un contrat au nom de la société avec une procuration :", choix: ["Agit valablement sans risque", "Commet une immixtion interdite", "Devient gérant", "Devient salarié"], bonne: 1, explication: "L'interdiction vaut même avec procuration." },
      { q: "La SCA comprend au moins :", choix: ["Deux commanditaires", "Trois commanditaires", "Cinq commandités", "Sept actionnaires"], bonne: 1, explication: "Et au moins un commandité." },
      { q: "La société en participation :", choix: ["A la personnalité morale", "N'est pas immatriculée et n'a pas la personnalité morale", "Est une SA", "Est obligatoirement cotée"], bonne: 1, explication: "Elle n'existe qu'entre les associés." },
      { q: "L'associé de SNC qui paie toute la dette dispose :", choix: ["D'aucun recours", "D'un recours contre ses coassociés selon leur contribution", "D'un recours contre la banque", "D'un recours contre l'État"], bonne: 1, explication: "La contribution se fait au prorata des parts." },
    ],
  },

  5: {
    titre: "La SARL",
    description: "La SARL au Maroc (loi 5-96) : associés, capital libre, libération, gérance, cession des parts, majorités des décisions collectives et SARL à associé unique.",
    resume: md`
## L'essentiel — La SARL

- **1 à 50 associés** ; responsabilité limitée aux apports ; capital **fixé librement** (loi 24-10) ; parts sociales non négociables ; commerciale par la forme ; banque et assurance interdites.
- Numéraire libéré d'**au moins le quart**, solde dans **5 ans** ; apports en nature intégralement libérés, **commissaire aux apports** au-delà de 100 000 DH.
- **Gérant** : personne(s) physique(s), associée(s) ou non ; pouvoirs étendus envers les tiers (société engagée même hors objet social, sauf tiers de mauvaise foi) ; révocation par plus de la moitié des parts ; responsabilité pour fautes de gestion.
- **Interdiction** des emprunts, découverts et cautions au profit des gérants et associés personnes physiques ; conventions soumises aux associés.
- **Cession à des tiers** : majorité des associés en nombre représentant au moins les **¾ des parts** ; en cas de refus, rachat obligatoire.
- Décisions : ordinaires (> ½ du capital), extraordinaires (**¾ du capital**), unanimité (augmentation des engagements) ; approbation des comptes dans les 6 mois.
- CAC obligatoire au-delà de 50 MDH de CA HT ; **SARL à associé unique** : l'associé exerce les pouvoirs de l'assemblée.
`,
    exercices: md`
### Exercice 2 — Calcul de majorités

Une SARL au capital de 500 000 DH (5 000 parts) compte cinq associés : E 1 800 parts, F 1 200, G 900, H 700, I 400.

1. E, F et H peuvent-ils adopter une augmentation de capital ?
2. E et G peuvent-ils nommer un nouveau gérant ?
3. F, G, H et I peuvent-ils décider de transformer la société en SA ?

<details><summary>Voir le corrigé</summary>

Répartition : E 36 %, F 24 %, G 18 %, H 14 %, I 8 %.

**1)** Modification des statuts : $36 + 24 + 14 = 74\,\% < 75\,\%$ : **non**, il manque 1 % (l'accord de G ou de I serait nécessaire).

**2)** Décision ordinaire : $36 + 18 = 54\,\% > 50\,\%$ : **oui**.

**3)** La transformation est une modification des statuts : $24 + 18 + 14 + 8 = 64\,\% < 75\,\%$ : **non** (les conditions propres à la transformation en SA doivent en outre être respectées).

</details>

### Exercice 3 — Pouvoirs du gérant

Les statuts d'une SARL de distribution de produits pharmaceutiques interdisent au gérant de conclure seul des contrats de plus de 500 000 DH. Le gérant signe : a) un contrat d'achat de 800 000 DH avec un laboratoire ; b) l'achat d'un yacht au nom de la société auprès d'un vendeur qui savait que cette opération était sans rapport avec l'activité.

La société est-elle engagée ? Quelles sont les conséquences pour le gérant ?

<details><summary>Voir le corrigé</summary>

a) **Oui** : la limitation statutaire des pouvoirs du gérant n'est **pas opposable aux tiers** ; la société est engagée envers le laboratoire. Le gérant a violé les statuts : il engage sa responsabilité envers la société et peut être révoqué.

b) Acte étranger à l'objet social et tiers **de mauvaise foi** (il le savait) : la société peut refuser d'être engagée. Le gérant engage sa responsabilité personnelle.

</details>
`,
    qcm: [
      { q: "Le nombre maximum d'associés d'une SARL est de :", choix: ["20", "50", "100", "7"], bonne: 1, explication: "Au-delà, transformation en SA." },
      { q: "Le capital minimum d'une SARL est aujourd'hui :", choix: ["100 000 DH", "Fixé librement par les statuts", "300 000 DH", "10 000 DH"], bonne: 1, explication: "Le minimum a été supprimé par la loi 24-10." },
      { q: "Les parts en numéraire d'une SARL doivent être libérées à la souscription d'au moins :", choix: ["La moitié", "Le quart", "La totalité", "Le dixième"], bonne: 1, explication: "Le solde dans les cinq ans." },
      { q: "Un apport en nature de plus de 100 000 DH dans une SARL exige :", choix: ["Un notaire", "Un commissaire aux apports", "Un avocat", "L'accord de l'OMPIC"], bonne: 1, explication: "Pour contrôler son évaluation." },
      { q: "La révocation du gérant de SARL exige des associés représentant :", choix: ["Plus de la moitié des parts", "Les trois quarts des parts", "L'unanimité", "Le quart des parts"], bonne: 0, explication: "Décision ordinaire." },
      { q: "La modification des statuts d'une SARL exige au moins :", choix: ["La moitié du capital", "Les trois quarts du capital", "L'unanimité", "Les deux tiers du capital"], bonne: 1, explication: "Décision extraordinaire." },
      { q: "La cession de parts de SARL à un tiers exige :", choix: ["L'accord du gérant seul", "La majorité des associés représentant au moins les trois quarts des parts", "L'unanimité", "Aucune formalité"], bonne: 1, explication: "Double condition." },
      { q: "Le gérant associé personne physique peut-il emprunter auprès de la SARL ?", choix: ["Oui librement", "Non, c'est interdit", "Oui avec l'accord de la banque", "Oui s'il est majoritaire"], bonne: 1, explication: "Interdiction légale." },
      { q: "Une limitation statutaire des pouvoirs du gérant est :", choix: ["Opposable aux tiers", "Inopposable aux tiers", "Nulle entre associés", "Réservée à la SA"], bonne: 1, explication: "Elle ne vaut qu'entre associés." },
      { q: "Dans une SARL à associé unique, les comptes sont approuvés par :", choix: ["Le commissaire aux comptes", "L'associé unique", "Le tribunal", "L'OMPIC"], bonne: 1, explication: "Il exerce les pouvoirs de l'assemblée." },
    ],
  },

  6: {
    titre: "La société anonyme (SA)",
    description: "La société anonyme au Maroc (loi 17-95) : constitution, conseil d'administration, directoire, assemblées, quorum et majorité, droits de l'actionnaire et SAS.",
    resume: md`
## L'essentiel — La société anonyme

- Au moins **5 actionnaires** ; capital minimum **300 000 DH** (3 000 000 DH si appel public à l'épargne) ; actions négociables ; libération du **quart** à la souscription, solde dans **3 ans** ; commissaire aux apports obligatoire.
- **Conseil d'administration** : 3 à 12 membres (15 si cotée), mandat de 6 ans maximum, révocation **ad nutum** ; direction par un **PDG** ou dissociation président / **directeur général**.
- **Directoire** (2 à 5 membres, 7 si cotée) et **conseil de surveillance** (3 à 12, 15 si cotée).
- **AGO** : comptes (6 mois), nominations ; quorum ¼ (1ʳᵉ convocation), aucun (2ᵉ) ; majorité simple.
- **AGE** : modification des statuts ; quorum ½ puis ¼ ; majorité des **⅔** ; unanimité pour augmenter les engagements.
- Droits : vote, information, dividende, **DPS**, boni, cession (clauses d'agrément ou de préemption), action en justice.
- **SAS** (loi 19-20) : liberté statutaire, président obligatoire, décisions collectives obligatoires pour les actes majeurs, pas d'appel public à l'épargne.
`,
    exercices: md`
### Exercice 2 — Quorum et majorité

Une SA compte 50 000 actions à droit de vote.

1. AGO sur première convocation : 14 000 actions présentes, 8 000 voix pour la résolution. Décision valable ?
2. AGE sur deuxième convocation : 13 000 actions présentes, 9 000 voix pour. Décision valable ?
3. AGE sur première convocation : 26 000 actions présentes, 17 000 voix pour. Décision valable ?

<details><summary>Voir le corrigé</summary>

**1)** Quorum : $14\,000 / 50\,000 = 28\,\% \ge 25\,\%$ ✔ ; majorité : plus de 7 000 voix, 8 000 pour : **adoptée**.

**2)** Quorum : $26\,\% \ge 25\,\%$ ✔ ; majorité des deux tiers : $\frac{2}{3} \times 13\,000 \approx 8\,667$ ; 9 000 pour : **adoptée**.

**3)** Quorum : $52\,\% \ge 50\,\%$ ✔ ; deux tiers de 26 000 $\approx 17\,333$ ; 17 000 pour : **rejetée**.

</details>

### Exercice 3 — Conseil d'administration ou directoire ?

Un groupe familial ouvre le capital de sa SA à un fonds d'investissement qui souhaite une séparation nette entre ceux qui dirigent et ceux qui contrôlent.

1. Quelle structure proposer ? Présentez sa composition.
2. Quelle alternative existe dans la formule à conseil d'administration ?

<details><summary>Voir le corrigé</summary>

**1)** La structure **dualiste** : un **directoire** (2 à 5 membres, personnes physiques) qui dirige, nommé par un **conseil de surveillance** (3 à 12 membres) où siègent la famille et le fonds, qui contrôle la gestion ; aucun membre ne peut appartenir aux deux organes.

**2)** La **dissociation** des fonctions de président du conseil (contrôle) et de **directeur général** (direction), qui permet aussi de séparer contrôle et gestion au sein d'une SA à conseil d'administration.

</details>
`,
    qcm: [
      { q: "Le nombre minimum d'actionnaires d'une SA est de :", choix: ["2", "5", "7", "3"], bonne: 1, explication: "Loi 17-95." },
      { q: "Le capital minimum d'une SA sans appel public à l'épargne est de :", choix: ["100 000 DH", "300 000 DH", "1 000 000 DH", "3 000 000 DH"], bonne: 1, explication: "3 000 000 DH avec appel public à l'épargne." },
      { q: "Les actions de numéraire doivent être libérées à la souscription d'au moins :", choix: ["Le quart", "La moitié", "La totalité", "Le tiers"], bonne: 0, explication: "Le solde dans les trois ans." },
      { q: "Le conseil d'administration d'une SA non cotée comprend :", choix: ["2 à 5 membres", "3 à 12 membres", "5 à 20 membres", "1 à 7 membres"], bonne: 1, explication: "Jusqu'à 15 si la société est cotée." },
      { q: "Les administrateurs sont révocables :", choix: ["Seulement pour faute grave", "À tout moment par l'AGO (ad nutum)", "Par le tribunal uniquement", "Jamais"], bonne: 1, explication: "Sans avoir à justifier d'un motif." },
      { q: "Le quorum de l'AGO sur deuxième convocation est de :", choix: ["Un quart", "Aucun quorum", "La moitié", "Un tiers"], bonne: 1, explication: "Un quart sur première convocation." },
      { q: "L'AGE statue à la majorité :", choix: ["Simple", "Des deux tiers", "Des trois quarts", "De l'unanimité"], bonne: 1, explication: "Des voix des actionnaires présents ou représentés." },
      { q: "Le quorum de l'AGE sur première convocation est de :", choix: ["Un quart", "La moitié", "Deux tiers", "Aucun"], bonne: 1, explication: "Un quart sur deuxième convocation." },
      { q: "Le droit préférentiel de souscription est un droit :", choix: ["Politique", "Financier", "De gestion", "Fiscal"], bonne: 1, explication: "Priorité lors d'une augmentation de capital en numéraire." },
      { q: "La SAS :", choix: ["Peut faire appel public à l'épargne", "Ne peut pas faire appel public à l'épargne", "Exige 7 actionnaires", "N'a pas de président"], bonne: 1, explication: "Loi 19-20." },
    ],
  },

  7: {
    titre: "Le contrôle des sociétés",
    description: "Contrôle des sociétés : droits des associés, commissaire aux comptes, conventions réglementées et interdites, responsabilité civile et pénale des dirigeants.",
    resume: md`
## L'essentiel — Le contrôle des sociétés

- Contrôle par les **associés** : information, questions écrites, vote, expertise de gestion, action en justice.
- **Commissaire aux comptes** : certification, rapport spécial, révélation des faits délictueux, alerte ; autorités extérieures : président du tribunal, ministère public, AMMC, Bank Al-Maghrib, Conseil de la concurrence.
- **Conventions réglementées** (dirigeants, actionnaires importants, entreprises liées) : autorisation préalable du conseil → information du CAC → **rapport spécial** → approbation de l'AGO ; l'intéressé ne vote pas ; conventions courantes exclues ; annulation si préjudice.
- **Conventions interdites** : prêts, découverts, cautions au profit des dirigeants personnes physiques et de leurs proches.
- Responsabilité civile : infractions, violations des statuts, **fautes de gestion** ; action **individuelle** (préjudice personnel) / action **sociale** (préjudice de la société, ut singuli) ; le quitus n'éteint pas l'action ; comblement de passif en procédure collective.
- Pénal : **abus de biens sociaux**, dividendes fictifs, comptes infidèles, abus de pouvoirs, obstacle au contrôle.
`,
    exercices: md`
### Exercice 2 — Réglementée, courante ou interdite ?

Qualifiez chaque convention conclue par une SA :
1. Le directeur général vend à la société un terrain lui appartenant.
2. Un administrateur achète, au prix catalogue, un produit fabriqué par la société.
3. La société cautionne le prêt immobilier personnel du président du conseil.
4. La société signe un contrat de prestation avec une SARL dont un administrateur détient 60 % du capital.

<details><summary>Voir le corrigé</summary>

1. **Réglementée** : convention directe avec un dirigeant ; autorisation du conseil, rapport spécial, approbation de l'AGO.
2. **Courante** conclue à des conditions normales : hors procédure.
3. **Interdite** : cautionnement des engagements d'un dirigeant personne physique ; nulle.
4. **Réglementée** : convention avec une entreprise dans laquelle un administrateur est intéressé.

</details>

### Exercice 3 — Action individuelle ou sociale ?

Précisez l'action appropriée :
1. Des administrateurs ont laissé la société payer des amendes fiscales importantes par négligence.
2. Un fournisseur a été trompé par de faux documents remis personnellement par le gérant et n'a pas été payé.
3. Le conseil refuse d'agir contre un ancien directeur général qui a détourné des fonds ; un actionnaire minoritaire veut réagir.

<details><summary>Voir le corrigé</summary>

1. **Action sociale** : préjudice subi par la société (amendes).
2. **Action individuelle** du fournisseur (tiers) contre le gérant, pour faute personnelle détachable et préjudice propre.
3. **Action sociale ut singuli** exercée par l'actionnaire au nom de la société ; les dommages-intérêts seront versés à la société. Une plainte pénale pour abus de biens sociaux est aussi envisageable.

</details>
`,
    qcm: [
      { q: "Une convention entre une SA et son directeur général doit être :", choix: ["Libre", "Autorisée par le conseil puis approuvée par l'AGO", "Interdite dans tous les cas", "Approuvée par l'OMPIC"], bonne: 1, explication: "C'est une convention réglementée." },
      { q: "Lors du vote sur une convention réglementée, l'intéressé :", choix: ["Vote double", "Ne prend pas part au vote", "Vote seul", "Préside obligatoirement"], bonne: 1, explication: "Pour éviter le conflit d'intérêts." },
      { q: "Un prêt de la société à un administrateur personne physique est :", choix: ["Une convention réglementée", "Une convention interdite", "Une convention courante", "Obligatoire"], bonne: 1, explication: "Il est nul." },
      { q: "Le rapport sur les conventions réglementées est établi par :", choix: ["Le directeur général", "Le commissaire aux comptes", "Le greffe", "L'AMMC"], bonne: 1, explication: "C'est le rapport spécial." },
      { q: "L'action qui répare le préjudice subi par la société est :", choix: ["L'action individuelle", "L'action sociale", "L'action pénale uniquement", "L'action en nullité"], bonne: 1, explication: "Les dommages-intérêts sont versés à la société." },
      { q: "L'action sociale exercée par un actionnaire au nom de la société est dite :", choix: ["Ut universi", "Ut singuli", "Ad nutum", "Intuitu personae"], bonne: 1, explication: "Quand les représentants légaux n'agissent pas." },
      { q: "Le quitus donné par l'assemblée aux dirigeants :", choix: ["Éteint toute action en responsabilité", "N'éteint pas l'action en responsabilité", "Est obligatoire", "Remplace le rapport du CAC"], bonne: 1, explication: "Aucune décision de l'assemblée ne peut l'éteindre." },
      { q: "Utiliser de mauvaise foi les biens de la société à des fins personnelles constitue :", choix: ["Une faute de gestion simple", "Un abus de biens sociaux", "Une convention courante", "Un droit du dirigeant"], bonne: 1, explication: "Infraction pénale." },
      { q: "Les sociétés faisant appel public à l'épargne sont contrôlées par :", choix: ["L'OMPIC", "L'AMMC", "La CNSS", "L'ANAPEC"], bonne: 1, explication: "Autorité marocaine du marché des capitaux." },
      { q: "En procédure collective, un dirigeant fautif peut être condamné à :", choix: ["Recevoir une prime", "Supporter tout ou partie de l'insuffisance d'actif", "Racheter la société", "Devenir commissaire aux comptes"], bonne: 1, explication: "Livre V du Code de commerce." },
    ],
  },

  8: {
    titre: "Dissolution, liquidation et restructurations",
    description: "Dissolution et liquidation des sociétés, pertes graves, prévention des difficultés, fusion, scission, apport partiel d'actif et parité d'échange.",
    resume: md`
## L'essentiel — Dissolution, liquidation, restructurations

- Causes communes : terme, objet, décision de l'AGE, nullité, justes motifs, liquidation judiciaire ; propres aux sociétés de personnes (décès, incapacité) ; propres aux sociétés de capitaux (pertes graves, nombre d'actionnaires, capital minimum).
- **Capitaux propres < ¼ du capital** : AGE dans les **3 mois** de l'approbation des comptes ; si pas de dissolution, reconstitution ou réduction du capital avant la clôture de l'exercice suivant ; à défaut, dissolution judiciaire à la demande de tout intéressé.
- **Liquidation** : personnalité morale maintenue, liquidateur, réalisation de l'actif, paiement du passif, remboursement des apports, **boni**, comptes définitifs, quitus, clôture, radiation.
- **Fusion** (absorption ou création) et **scission** : dissolution **sans liquidation**, transmission universelle ; **apport partiel d'actif** : l'apporteuse subsiste ; **transformation** : même personne morale.
- Procédure de fusion : projet, publicité, **commissaire à la fusion**, AGE, opposition des créanciers, Conseil de la concurrence.
- **Parité** = valeur de l'action absorbée / valeur de l'action absorbante ; prime de fusion = actif net apporté − nominal des actions créées.
`,
    exercices: md`
### Exercice 2 — Fusion par absorption

La société A (absorbante) : actions de nominal 50 DH, valeur réelle 120 DH. La société B (absorbée) : 60 000 actions de valeur réelle 80 DH.

1. Calculez la parité d'échange et le nombre d'actions à créer.
2. Calculez l'augmentation de capital et la prime de fusion.

<details><summary>Voir le corrigé</summary>

**1)** Parité $= 80 / 120 = 2/3$ : **2 actions A pour 3 actions B** ; actions à créer : $60\,000 \times 2/3 = \mathbf{40\,000}$.

**2)** Augmentation de capital : $40\,000 \times 50 = \mathbf{2\,000\,000}$ DH ; actif net apporté : $60\,000 \times 80 = 4\,800\,000$ DH ; prime de fusion : $4\,800\,000 - 2\,000\,000 = \mathbf{2\,800\,000}$ DH.

</details>

### Exercice 3 — Qualifier l'opération

Qualifiez chaque opération :
1. Une SARL devient une SA pour préparer une introduction en Bourse.
2. Un groupe transfère sa branche « distribution » à une filiale en échange d'actions de celle-ci, et poursuit ses autres activités.
3. Deux SA se regroupent dans une société nouvelle, et disparaissent.
4. Une SA se partage entre deux sociétés existantes et disparaît.

<details><summary>Voir le corrigé</summary>

1. **Transformation** : même personne morale sous une autre forme (les conditions de la SA doivent être réunies).
2. **Apport partiel d'actif** : l'apporteuse subsiste et reçoit des titres.
3. **Fusion par création** d'une société nouvelle.
4. **Scission** : dissolution sans liquidation au profit de deux sociétés bénéficiaires.

</details>
`,
    qcm: [
      { q: "Après la dissolution, la société :", choix: ["Disparaît immédiatement", "Conserve sa personnalité morale pour sa liquidation", "Devient une SNC", "Est transférée à l'État"], bonne: 1, explication: "Jusqu'à la clôture de la liquidation." },
      { q: "Si les capitaux propres deviennent inférieurs au quart du capital, l'AGE doit être convoquée dans les :", choix: ["30 jours", "3 mois suivant l'approbation des comptes", "6 mois", "2 ans"], bonne: 1, explication: "Pour décider s'il y a lieu de dissoudre." },
      { q: "Capital 4 MDH, capitaux propres 900 000 DH. La procédure s'applique-t-elle ?", choix: ["Non", "Oui, car 900 000 < 1 000 000", "Seulement si la société est cotée", "Seulement pour les SARL"], bonne: 1, explication: "Le quart du capital vaut 1 000 000 DH." },
      { q: "Dans une liquidation, sont payés en premier :", choix: ["Les associés", "Les créanciers", "Le liquidateur seulement", "Les administrateurs"], bonne: 1, explication: "Le partage entre associés intervient ensuite." },
      { q: "Dans une fusion, la société absorbée est :", choix: ["Liquidée", "Dissoute sans liquidation", "Transformée", "Maintenue"], bonne: 1, explication: "Transmission universelle de son patrimoine." },
      { q: "Dans un apport partiel d'actif, la société apporteuse :", choix: ["Disparaît", "Subsiste", "Est liquidée", "Devient une SNC"], bonne: 1, explication: "Elle reçoit des titres de la bénéficiaire." },
      { q: "La transformation d'une SARL en SA :", choix: ["Crée une nouvelle personne morale", "Ne crée pas de personne morale nouvelle", "Entraîne la liquidation", "Est interdite"], bonne: 1, explication: "La société continue sous une autre forme." },
      { q: "Le caractère équitable de la parité d'échange est vérifié par :", choix: ["Le greffier", "Le commissaire à la fusion", "L'OMPIC", "Le liquidateur"], bonne: 1, explication: "Il établit un rapport." },
      { q: "Valeur de l'action absorbée 90 DH, de l'absorbante 180 DH. La parité est de :", choix: ["2 actions absorbantes pour 1 absorbée", "1 action absorbante pour 2 absorbées", "1 pour 1", "3 pour 1"], bonne: 1, explication: "90 / 180 = 1/2." },
      { q: "Les créanciers de la société absorbée peuvent :", choix: ["Annuler la fusion librement", "Former opposition dans le délai légal", "Exiger la liquidation", "Devenir actionnaires"], bonne: 1, explication: "Le tribunal peut ordonner remboursement ou garanties." },
    ],
  },
};

export default chapitres;
