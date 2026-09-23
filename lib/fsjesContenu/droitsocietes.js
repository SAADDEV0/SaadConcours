// Droit des Sociétés (S3) — compléments par chapitre.
const md = String.raw;

export default {
  1: {
    titre: "La notion de société et le contrat de société",
    resume: md`
## L'essentiel — Le contrat de société

- La **société** est un contrat par lequel deux ou plusieurs personnes mettent en commun des **apports** pour partager les **bénéfices** (ou l'économie) et contribuer aux **pertes**.
- Conditions de fond générales : **consentement, capacité, objet licite, cause licite**.
- Conditions spécifiques : **pluralité d'associés** (sauf SARL AU), **apports**, **vocation aux résultats**, **affectio societatis**.
- Conditions de forme : **statuts écrits**, publicité, **immatriculation au RC**.
- Apports en **numéraire** et en **nature** : forment le **capital**, gage des créanciers ; apport en **industrie** : hors capital, interdit en SA.
- **Clause léonine** (tout le bénéfice à un associé ou exonération totale des pertes) : **réputée non écrite**.
`,
    exercices: md`
### Exercice 2 — Cas pratiques sur le contrat de société

1. Les statuts d'une SARL prévoient qu'Amine, associé majoritaire, ne supportera jamais aucune perte. Cette clause est-elle valable ? Le contrat de société est-il nul ?
2. Karim veut apporter son savoir-faire de chef cuisinier à une SA en création. Est-ce possible ?
3. Deux amis créent une société pour ouvrir un commerce de stupéfiants « déguisé » en épicerie. Quelle condition de validité fait défaut ?

<details><summary>Voir le corrigé</summary>

1. C'est une **clause léonine** : elle est **réputée non écrite** (on l'efface), mais la société elle-même reste valable.
2. **Non** : l'apport en industrie est **interdit en SA** ; Karim pourrait être salarié ou apporter du numéraire.
3. L'**objet licite** (et la cause licite) : la société est **nulle**.

</details>
`,
    qcm: [
      { q: "L'affectio societatis est :", choix: ["Le capital minimum", "La volonté de collaborer sur un pied d'égalité à l'œuvre commune", "Le nom de la société", "Un apport en nature"], bonne: 1, explication: "C'est une condition de fond spécifique." },
      { q: "Une clause léonine est :", choix: ["Nulle et entraîne la nullité de la société", "Réputée non écrite", "Valable si tous les associés l'acceptent", "Obligatoire en SA"], bonne: 1, explication: "La société subsiste sans la clause." },
      { q: "L'apport en industrie :", choix: ["Entre dans le capital social", "N'entre pas dans le capital et est interdit en SA", "Est obligatoire en SNC", "Est évalué par un commissaire aux apports"], bonne: 1, explication: "Il donne des parts non représentatives du capital." },
      { q: "Le capital social constitue :", choix: ["Le bénéfice distribuable", "Le gage des créanciers", "Une dette de la société", "Le salaire du gérant"], bonne: 1, explication: "Il ne peut être restitué librement aux associés." },
      { q: "Un apport de fonds de commerce est un apport :", choix: ["En numéraire", "En nature", "En industrie", "En compte courant"], bonne: 1, explication: "Bien incorporel, évalué par un commissaire aux apports." },
    ],
  },

  2: {
    titre: "La personnalité morale et la constitution",
    resume: md`
## L'essentiel — Personnalité morale et constitution

- La société acquiert la **personnalité morale** à son **immatriculation au registre du commerce**.
- Attributs : **dénomination**, **siège social** (fixe le tribunal compétent et la nationalité), **patrimoine propre**, **capacité juridique**.
- Étapes : certificat négatif → statuts → blocage des fonds → enregistrement → **immatriculation au RC** → publicité (JAL et Bulletin officiel).
- Actes accomplis **avant l'immatriculation** : les fondateurs en sont **personnellement et solidairement responsables** ; la société peut les **reprendre** (statuts, mandat, décision après immatriculation), avec effet **rétroactif** qui libère les fondateurs.
`,
    exercices: md`
### Exercice 2 — Le bail signé avant l'immatriculation

Avant l'immatriculation de leur SARL, Sara et Youssef signent au nom de « SARL Atlas Café (en formation) » un bail commercial et commandent du mobilier pour 80 000 DH. La SARL est immatriculée deux mois plus tard.

1. Qui est tenu du paiement du mobilier avant l'immatriculation ?
2. Comment la société peut-elle reprendre ces engagements ? Quel en est l'effet ?
3. Si la société n'est finalement jamais immatriculée, que se passe-t-il ?

<details><summary>Voir le corrigé</summary>

1. Sara et Youssef, **personnellement et solidairement** : la société n'a pas encore la personnalité morale.
2. Par une reprise dans les **statuts** (état des actes annexé), par un **mandat** donné avant l'immatriculation, ou par une **décision des associés** après l'immatriculation. La reprise est **rétroactive** : les actes sont réputés conclus dès l'origine par la société, et les fondateurs sont libérés.
3. Les fondateurs restent tenus personnellement des engagements.

</details>
`,
    qcm: [
      { q: "Une société commerciale acquiert la personnalité morale :", choix: ["À la signature des statuts", "À son immatriculation au registre du commerce", "Au dépôt du capital", "À sa première vente"], bonne: 1, explication: "Avant, elle est « en formation »." },
      { q: "La nationalité d'une société dépend :", choix: ["De la nationalité des associés", "De son siège social", "De la monnaie du capital", "Du lieu des ventes"], bonne: 1, explication: "Marocaine si le siège est au Maroc." },
      { q: "Les actes accomplis pour une société en formation engagent d'abord :", choix: ["La société", "Les fondateurs personnellement et solidairement", "L'État", "Le notaire"], bonne: 1, explication: "Jusqu'à leur reprise par la société." },
      { q: "La reprise des actes par la société immatriculée :", choix: ["N'a d'effet que pour l'avenir", "A un effet rétroactif", "Est interdite", "Rend les fondateurs doublement responsables"], bonne: 1, explication: "Les actes sont réputés conclus par la société dès l'origine." },
      { q: "Le patrimoine de la société est :", choix: ["Confondu avec celui des associés", "Distinct de celui des associés", "Celui du gérant", "Inexistant"], bonne: 1, explication: "Principe d'autonomie patrimoniale." },
    ],
  },

  3: {
    titre: "La classification des sociétés",
    resume: md`
## L'essentiel — Classification

- **Sociétés de personnes** (SNC, SCS) : fondées sur l'**intuitu personae** ; responsabilité **indéfinie et solidaire** ; parts cessibles avec agrément unanime ; le décès d'un associé entraîne en principe la dissolution.
- **Sociétés de capitaux** (SA, SCA) : fondées sur les **capitaux** ; responsabilité **limitée** ; **actions** librement négociables.
- **SARL** : société **hybride** (responsabilité limitée mais intuitu personae et parts sous agrément).
- Textes : **loi 17-95** (SA) ; **loi 5-96** (SNC, SCS, SCA, SARL, société en participation).
- La société commerciale l'est **par la forme** (SNC, SCS, SCA, SARL, SA), quel que soit son objet.
`,
    exercices: md`
### Exercice 2 — Choisir une forme sociale

Conseillez une forme de société dans chaque situation et justifiez :

1. Deux frères veulent exploiter une boutique ; ils se font entièrement confiance et n'ont pas de capital important, mais un fournisseur exige des garanties personnelles.
2. Une entrepreneuse veut créer seule son entreprise en limitant sa responsabilité.
3. Un projet industriel doit réunir 20 millions de DH auprès de nombreux investisseurs, qui veulent pouvoir revendre facilement leurs titres.
4. Un investisseur veut financer un commerce sans participer à la gestion ni risquer plus que son apport, aux côtés d'un gérant qui s'engage pleinement.

<details><summary>Voir le corrigé</summary>

1. **SNC** : confiance mutuelle, pas de capital minimum, et la responsabilité indéfinie et solidaire rassure les créanciers.
2. **SARL d'associé unique** : un seul associé, responsabilité limitée aux apports.
3. **SA** : actions librement négociables, adaptée à de nombreux actionnaires et à de gros capitaux.
4. **Société en commandite simple** : le gérant est commandité, l'investisseur commanditaire (responsabilité limitée, sans immixtion dans la gestion).

</details>
`,
    qcm: [
      { q: "La SARL est une société :", choix: ["De personnes pure", "De capitaux pure", "Hybride", "Civile"], bonne: 2, explication: "Responsabilité limitée mais fort intuitu personae." },
      { q: "Dans une société de capitaux, les titres sont :", choix: ["Des parts sociales incessibles", "Des actions en principe librement négociables", "Des obligations", "Des effets de commerce"], bonne: 1, explication: "La personne de l'associé importe peu." },
      { q: "La SA est régie par la loi :", choix: ["5-96", "17-95", "15-89", "9-88"], bonne: 1, explication: "Les autres sociétés commerciales relèvent de la loi 5-96." },
      { q: "Une société est commerciale par la forme lorsque :", choix: ["Son objet est commercial", "Elle adopte une forme comme la SARL ou la SA", "Elle a plus de 10 salariés", "Elle exporte"], bonne: 1, explication: "Quel que soit son objet." },
      { q: "Dans une société de personnes, le décès d'un associé entraîne en principe :", choix: ["Aucune conséquence", "La dissolution, sauf clause de continuation", "La transformation en SA", "La hausse du capital"], bonne: 1, explication: "Conséquence de l'intuitu personae." },
    ],
  },

  4: {
    titre: "Les sociétés de personnes",
    resume: md`
## L'essentiel — SNC, SCS, participation

- **SNC** : au moins 2 associés, tous **commerçants** ; pas de capital minimum ; responsabilité **indéfinie et solidaire** ; cession de parts à l'**unanimité** ; les créanciers doivent d'abord **mettre en demeure** la société.
- **SCS** : **commandités** (régime des associés de SNC, gérants) et **commanditaires** (responsabilité limitée à l'apport, **interdiction d'immixtion** dans la gestion externe, nom absent de la dénomination).
- Le commanditaire qui s'immisce devient **solidairement responsable** des dettes issues de ses actes.
- **Société en participation** : non immatriculée, **sans personnalité morale**, ni patrimoine ni dénomination ; si elle est révélée aux tiers, ses associés sont tenus indéfiniment et solidairement.
`,
    exercices: md`
### Exercice 2 — Créanciers d'une SNC et commanditaire imprudent

1. La SNC « Frères Idrissi » (associés Omar et Rachid) doit 300 000 DH à une banque. La banque peut-elle réclamer directement la somme à Omar ? Pour quel montant ?
2. Dans une SCS, Nadia, commanditaire ayant apporté 100 000 DH, négocie et signe elle-même un gros contrat d'achat avec un fournisseur. Quelle est sa situation ?

<details><summary>Voir le corrigé</summary>

1. Oui, mais seulement **après avoir vainement mis en demeure la société**. Omar peut alors être poursuivi pour la **totalité** des 300 000 DH (responsabilité indéfinie et solidaire), quitte à se retourner ensuite contre Rachid.
2. Elle a violé l'**interdiction d'immixtion** dans la gestion externe : elle devient **solidairement responsable** des dettes nées de ce contrat, au-delà de son apport.

</details>
`,
    qcm: [
      { q: "Les associés d'une SNC ont :", choix: ["La qualité de commerçant", "Une responsabilité limitée", "Des actions négociables", "Un statut de salarié"], bonne: 0, explication: "Tous sont commerçants." },
      { q: "Avant de poursuivre un associé de SNC, le créancier doit :", choix: ["Obtenir l'accord de l'associé", "Mettre vainement en demeure la société", "Attendre la dissolution", "Saisir la banque centrale"], bonne: 1, explication: "C'est une condition préalable." },
      { q: "Dans une SCS, le commanditaire :", choix: ["Gère la société", "A une responsabilité limitée à son apport", "Est commerçant", "Donne son nom à la société"], bonne: 1, explication: "À condition de ne pas s'immiscer dans la gestion." },
      { q: "La cession de parts dans une SNC exige :", choix: ["La majorité simple", "Le consentement unanime des associés", "L'accord du juge", "Aucune formalité"], bonne: 1, explication: "Conséquence de l'intuitu personae." },
      { q: "La société en participation :", choix: ["A la personnalité morale", "N'est pas immatriculée et n'a pas la personnalité morale", "Est une SA simplifiée", "Doit avoir 7 associés"], bonne: 1, explication: "Elle peut rester occulte." },
    ],
  },

  5: {
    titre: "La SARL",
    resume: md`
## L'essentiel — La SARL

- De **1** (SARL AU) à **50** associés ; au-delà, transformation en SA dans les 2 ans.
- **Capital librement fixé** par les statuts ; apports en nature intégralement libérés et évalués par un commissaire aux apports (sauf dispense légale).
- **Parts sociales** non négociables ; responsabilité **limitée aux apports**.
- **Gérance** : une ou plusieurs **personnes physiques**, associées ou non ; limitations statutaires **inopposables aux tiers** ; révocation par plus de la moitié des parts (dommages-intérêts si sans juste motif).
- **Cession à un tiers** : agrément de la majorité des associés représentant au moins les **3/4 des parts** ; entre associés, conjoints, parents : libre sauf clause contraire.
- Décisions : ordinaires à plus de la **moitié des parts** ; **modification des statuts aux 3/4** ; **unanimité** pour changer de nationalité ou augmenter les engagements.
`,
    exercices: md`
### Exercice 2 — Cession de parts et décisions en SARL

Une SARL de 1 000 parts compte quatre associés : Ali (400 parts), Brahim (300), Chama (200), Dounia (100).

1. Dounia veut céder ses parts à un tiers. Ali et Brahim sont d'accord, Chama s'y oppose. La cession est-elle agréée ?
2. Même question si seuls Ali et Chama sont d'accord.
3. Les associés veulent transférer le siège social (modification des statuts). Ali et Brahim votent pour. Est-ce suffisant ?
4. Le gérant, dont les statuts limitent les pouvoirs aux achats de moins de 50 000 DH, achète un véhicule de 200 000 DH. La société est-elle engagée envers le vendeur ?

<details><summary>Voir le corrigé</summary>

1. Il faut la majorité des associés représentant au moins 3/4 des parts. Ali + Brahim + Dounia (la cédante vote aussi) = 3 associés sur 4 et 800 parts sur 1 000 (80 %) : **agréée**.
2. Ali + Chama + Dounia = 3 associés et 700 parts (70 % < 75 %) : **refusée**.
3. Ali + Brahim = 700 parts, soit 70 % < 3/4 : **insuffisant**.
4. **Oui** : les clauses limitant les pouvoirs du gérant sont **inopposables aux tiers** ; le gérant engage toutefois sa responsabilité envers la société.

</details>
`,
    qcm: [
      { q: "Le nombre maximal d'associés dans une SARL est :", choix: ["7", "20", "50", "100"], bonne: 2, explication: "Au-delà, transformation en SA." },
      { q: "Le gérant de SARL doit être :", choix: ["Un associé obligatoirement", "Une personne physique, associée ou non", "Une personne morale", "Le commissaire aux comptes"], bonne: 1, explication: "Il peut être un tiers." },
      { q: "La modification des statuts d'une SARL exige :", choix: ["La moitié des parts", "Les 3/4 des parts", "L'unanimité", "Le seul gérant"], bonne: 1, explication: "L'unanimité est réservée aux décisions les plus graves." },
      { q: "Une limitation statutaire des pouvoirs du gérant est :", choix: ["Opposable aux tiers", "Inopposable aux tiers", "Interdite", "Sans effet entre associés"], bonne: 1, explication: "Elle ne joue qu'en interne." },
      { q: "Une SARL AU peut avoir pour associé unique :", choix: ["Une autre SARL AU", "Une personne physique ou une personne morale autre qu'une SARL AU", "Uniquement l'État", "Personne"], bonne: 1, explication: "Une SARL AU ne peut être associée unique d'une autre SARL AU." },
    ],
  },

  6: {
    titre: "La société anonyme (SA)",
    resume: md`
## L'essentiel — La SA

- Au moins **5 actionnaires** ; capital minimum **300 000 DH** (**3 000 000 DH** en cas d'appel public à l'épargne).
- Numéraire libéré d'au moins **1/4** à la souscription, solde dans les **3 ans** ; apports en nature intégralement libérés et évalués.
- Administration **moniste** (conseil d'administration de 3 à 12 membres, président, éventuellement DG) ou **dualiste** (directoire et conseil de surveillance, sans cumul).
- Administrateurs nommés par l'AGO pour **6 ans** au plus, révocables **ad nutum**.
- **AGO** (comptes, affectation, nominations ; dans les 6 mois de la clôture) : quorum 1/4 puis aucun, majorité des voix exprimées. **AGE** (statuts, capital, fusion) : quorum 1/2 puis 1/4, majorité des **2/3**.
- Droits de l'actionnaire : dividende, **DPS**, boni de liquidation, vote, information.
`,
    exercices: md`
### Exercice 2 — Assemblées et gouvernance d'une SA

Une SA compte 100 000 actions.

1. À une AGE sur première convocation, 45 000 actions sont présentes ou représentées. L'assemblée peut-elle délibérer ? Et sur deuxième convocation ?
2. Sur deuxième convocation, 30 000 actions votent sur une augmentation de capital : 18 000 pour, 12 000 contre. La résolution est-elle adoptée ?
3. Le conseil veut révoquer un administrateur sans motif ni indemnité. Est-ce possible ? Qui décide ?

<details><summary>Voir le corrigé</summary>

1. En 1ʳᵉ convocation, il faut la moitié des actions (50 000) : **non**. En 2ᵉ convocation, il faut le quart (25 000) : 45 000 suffiraient, **oui**.
2. Il faut les 2/3 des voix exprimées : $2/3 \times 30\,000 = 20\,000$ ; avec 18 000 voix, la résolution est **rejetée**.
3. Oui, les administrateurs sont révocables **ad nutum** (à tout moment, sans motif ni indemnité), mais c'est l'**assemblée générale ordinaire** qui décide, pas le conseil.

</details>
`,
    qcm: [
      { q: "Le capital minimum d'une SA sans appel public à l'épargne est :", choix: ["10 000 DH", "100 000 DH", "300 000 DH", "3 000 000 DH"], bonne: 2, explication: "3 000 000 DH en cas d'appel public à l'épargne." },
      { q: "Le nombre minimal d'actionnaires d'une SA est :", choix: ["2", "3", "5", "7"], bonne: 2, explication: "Selon la loi 17-95." },
      { q: "L'AGE statue à la majorité :", choix: ["Simple", "Des 2/3 des voix exprimées", "Des 3/4 des parts", "À l'unanimité"], bonne: 1, explication: "Pour les modifications statutaires." },
      { q: "Les administrateurs d'une SA sont révocables :", choix: ["Uniquement pour faute grave", "Ad nutum", "Jamais", "Par le tribunal seulement"], bonne: 1, explication: "À tout moment, sans motif ni indemnité." },
      { q: "Dans la SA dualiste, le contrôle permanent de la direction est assuré par :", choix: ["Le directoire", "Le conseil de surveillance", "Le PDG", "Le commissaire aux apports"], bonne: 1, explication: "Le directoire dirige." },
    ],
  },

  7: {
    titre: "Le contrôle des sociétés",
    resume: md`
## L'essentiel — Contrôle des sociétés

- **CAC** obligatoire dans toute SA (deux si appel public à l'épargne, banques, assurances) ; dans la SARL si le CA HT dépasse **50 millions de DH** ; mandat de **3 exercices** en SA.
- Mission : certifier la **régularité, la sincérité et l'image fidèle** des comptes ; procédure d'**alerte** ; **révélation** des faits délictueux au procureur du Roi ; strictes incompatibilités.
- **Conventions réglementées** (société et dirigeants ou gros actionnaires) : autorisation préalable du conseil → **rapport spécial** du CAC → approbation par l'assemblée.
- Conventions **libres** (courantes, conditions normales) ; **interdites** (prêts, découverts, cautions de la société au profit des dirigeants personnes physiques).
- Responsabilité des dirigeants : **civile** (faute de gestion, action sociale ou individuelle), **pénale** (abus de biens sociaux, dividendes fictifs, comptes infidèles), comblement du passif.
`,
    exercices: md`
### Exercice 2 — Conventions et abus de biens sociaux

Dans une SA :

1. Le directeur général loue à la société, au prix du marché, un entrepôt qui lui appartient personnellement.
2. La société accorde au président un prêt personnel de 500 000 DH pour acheter une villa.
3. La société achète du papier à un fournisseur dont un administrateur est actionnaire, dans les conditions habituelles du marché, pour 2 000 DH.
4. Le président fait payer par la société les travaux de sa résidence secondaire.

Qualifiez chaque situation.

<details><summary>Voir le corrigé</summary>

1. **Convention réglementée** : autorisation du conseil, rapport spécial du CAC, approbation de l'assemblée.
2. **Convention interdite** : prêt de la société à un dirigeant personne physique ; elle est nulle.
3. **Convention libre** : opération courante à des conditions normales.
4. **Abus de biens sociaux** : usage des biens de la société à des fins personnelles, contraire à l'intérêt social ; responsabilité pénale et civile du président.

</details>
`,
    qcm: [
      { q: "Dans une SA, le commissaire aux comptes est :", choix: ["Facultatif", "Obligatoire", "Nommé par le directeur financier", "Un salarié de la société"], bonne: 1, explication: "Au moins un, deux en cas d'appel public à l'épargne." },
      { q: "Une convention réglementée doit être :", choix: ["Tenue secrète", "Autorisée, faire l'objet d'un rapport spécial et être approuvée", "Déclarée à la police", "Interdite"], bonne: 1, explication: "C'est la procédure de contrôle." },
      { q: "Un prêt consenti par une SA à son directeur général personne physique est :", choix: ["Libre", "Réglementé", "Interdit", "Obligatoire"], bonne: 2, explication: "Comme les découverts, cautions et avals." },
      { q: "L'abus de biens sociaux est :", choix: ["Une faute civile mineure", "Une infraction pénale", "Une convention libre", "Une clause léonine"], bonne: 1, explication: "Usage des biens sociaux à des fins personnelles." },
      { q: "Dans une SARL, le CAC devient obligatoire lorsque le CA HT dépasse :", choix: ["5 millions DH", "10 millions DH", "50 millions DH", "100 millions DH"], bonne: 2, explication: "Selon la loi 5-96." },
    ],
  },

  8: {
    titre: "Dissolution, liquidation et restructurations",
    resume: md`
## L'essentiel — Dissolution, liquidation, restructurations

- Causes communes : terme, réalisation ou extinction de l'objet, décision des associés, nullité, justes motifs, liquidation judiciaire.
- Sociétés de personnes : décès, incapacité ou faillite d'un associé (sauf clause de continuation).
- SARL et SA : associés sous le minimum légal ; **capitaux propres < 1/4 du capital** non régularisés.
- Perte des 3/4 : l'**AGE** décide la dissolution anticipée ou la poursuite, avec régularisation au plus tard à la clôture du **2ᵉ exercice** suivant.
- La personnalité morale **survit pour les besoins de la liquidation** (mention « en liquidation ») : actif réalisé → créanciers payés → apports remboursés → boni partagé.
- Restructurations : **fusion** (absorption ou création), **scission**, **apport partiel d'actif**, **transformation** (sans nouvelle personne morale ; unanimité si les engagements des associés augmentent).
`,
    exercices: md`
### Exercice 2 — Pertes graves et transformation

Une SA au capital de 2 000 000 DH a des capitaux propres de 400 000 DH après plusieurs exercices déficitaires.

1. La société est-elle dans la situation de « perte des trois quarts » ? Quelle obligation pèse sur les dirigeants ?
2. Quelles sont les deux options de l'assemblée ?
3. Les associés d'une SARL veulent la transformer en SNC. Quelle majorité est requise ? Pourquoi ?

<details><summary>Voir le corrigé</summary>

1. Un quart du capital $= 500\,000$ DH ; les capitaux propres (400 000 DH) sont **inférieurs** : oui. Les dirigeants doivent convoquer l'**AGE** dans les délais légaux.
2. Soit la **dissolution anticipée** ; soit la **poursuite de l'activité**, en reconstituant les capitaux propres ou en réduisant le capital au plus tard à la clôture du 2ᵉ exercice suivant (par exemple par un coup d'accordéon).
3. L'**unanimité** : la transformation en SNC rendrait la responsabilité des associés **indéfinie et solidaire**, ce qui augmente leurs engagements.

</details>
`,
    qcm: [
      { q: "La perte des trois quarts du capital est constatée lorsque :", choix: ["Le résultat est négatif", "Les capitaux propres sont inférieurs au quart du capital", "Le capital baisse de 25 %", "Le CA chute de 75 %"], bonne: 1, explication: "L'AGE doit alors statuer." },
      { q: "Pendant la liquidation, la personnalité morale :", choix: ["Disparaît immédiatement", "Survit pour les besoins de la liquidation", "Est transférée au liquidateur", "Est suspendue"], bonne: 1, explication: "Jusqu'à la clôture de la liquidation." },
      { q: "La transformation d'une société :", choix: ["Crée une nouvelle personne morale", "Change la forme sans créer de nouvelle personne morale", "Entraîne toujours la dissolution", "Est interdite pour les SARL"], bonne: 1, explication: "La même personne morale continue." },
      { q: "Dans une fusion-absorption, la société absorbée :", choix: ["Subsiste", "Disparaît et transmet son patrimoine", "Devient associée de l'absorbante", "Est liquidée avec partage du boni"], bonne: 1, explication: "Transmission universelle de patrimoine." },
      { q: "Le décès d'un associé est une cause de dissolution propre :", choix: ["Aux sociétés de capitaux", "Aux sociétés de personnes", "À toutes les sociétés", "À la SA"], bonne: 1, explication: "Sauf clause de continuation." },
    ],
  },
};
