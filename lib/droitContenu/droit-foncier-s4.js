// Droit foncier (Droit S4) — compléments par chapitre : description SEO, résumé, exercices 2 et 3, QCM.
const md = String.raw;

const chapitres = {
  1: {
    titre: "Le droit foncier : notion, sources et statuts fonciers",
    description: "Droit foncier marocain : immeuble et droit réel, Code des droits réels (loi 39-08), dahir de 1913, dualité immatriculé / non immatriculé, statuts fonciers.",
    resume: md`
## L'essentiel — Notion, sources, statuts

- **Droit foncier** : règles sur les immeubles (propriété, droits réels, preuve, publicité, sûretés).
- **Immeubles** par nature, par destination, par l'objet ; **droit réel** (pouvoir direct, droit de suite et de préférence) ≠ droit personnel.
- Sources : **article 35** de la Constitution (propriété, expropriation) ; **Code des droits réels** (loi **39-08**, 2011, en vigueur en 2012), applicable aux deux régimes ; ordre : Code, puis **DOC**, puis **fiqh malékite** (article 1).
- **Dahir du 12 août 1913** sur l'immatriculation, modifié par la loi **14-07** (2011) ; textes spéciaux : copropriété (18-00), VEFA (44-00), expropriation (7-81), habous (2010), terres collectives (62-17, 63-17, 64-17), ANCFCC (58-00).
- **Dualité** : immeubles **immatriculés** (titre foncier définitif et inattaquable, système Torrens) / **non immatriculés** (actes adoulaires, moulkiya, possession) / en cours d'immatriculation.
- Statuts : **melk** (propriété privée) ; **terres collectives** (communautés ethniques, tutelle de l'Intérieur, inaliénables, réforme de 2019, soulaliyates) ; **habous** ; **guich** ; **domaine public** (inaliénable, imprescriptible) ; **domaine privé** de l'État ; domaine forestier.
- Institutions : ANCFCC, **conservateur de la propriété foncière**, géomètres, notaires, adouls, avocats agréés, tribunaux.
- Méthode : statut → situation juridique → textes → règles (preuve, transfert, possession, hypothèque, aliénabilité).
`,
    exercices: md`
### Exercice 2 — Quel statut foncier ?

Identifiez le statut : 1) une plage de la côte atlantique ; 2) un terrain appartenant à M. Kadiri, acquis par héritage ; 3) une terre exploitée par les membres d'une tribu sous la tutelle du ministère de l'Intérieur ; 4) un immeuble dont les loyers financent une mosquée ; 5) un terrain que l'État loue à un investisseur pour construire une usine.

<details><summary>Voir le corrigé</summary>

1) Domaine public de l'État (rivage de la mer), inaliénable et imprescriptible. 2) Terre melk (propriété privée). 3) Terre collective (communauté ethnique, lois de 2019). 4) Bien habous public, géré par le ministère des Habous. 5) Domaine privé de l'État, qui peut être loué ou cédé.

</details>

### Exercice 3 — Question de cours

Expliquez en une dizaine de lignes pourquoi la dualité entre immeubles immatriculés et non immatriculés est une source d'insécurité juridique.

<details><summary>Voir le corrigé</summary>

Pour l'immeuble immatriculé, le titre foncier définitif fixe les limites et les droits, et les tiers peuvent s'y fier. Pour l'immeuble non immatriculé, la propriété repose sur des actes adoulaires et des témoignages relatifs à la possession, qui peuvent être contestés ; les limites sont imprécises, les doubles ventes possibles et la preuve difficile. Les banques hésitent à accepter ces immeubles en garantie, ce qui limite l'accès au crédit. Le législateur cherche à réduire cette dualité par l'immatriculation d'ensemble et par l'unification des règles de fond dans le Code des droits réels.

</details>
`,
    qcm: [
      { q: "Le Code des droits réels est la loi :", choix: ["39-08", "14-07", "18-00", "44-00"], bonne: 0, explication: "Promulguée en 2011, en vigueur en 2012." },
      { q: "Le dahir sur l'immatriculation des immeubles date du :", choix: ["12 août 1913", "2 juin 1915", "1er juillet 1914", "27 septembre 1957"], bonne: 0, explication: "Modifié par la loi 14-07." },
      { q: "En l'absence de règle dans le Code des droits réels, on applique d'abord :", choix: ["Le fiqh malékite", "Le Dahir des obligations et des contrats", "Le Code de commerce", "La coutume locale"], bonne: 1, explication: "Puis le fiqh malékite (article 1)." },
      { q: "Le droit de propriété est garanti par l'article de la Constitution :", choix: ["31", "35", "118", "154"], bonne: 1, explication: "Avec la possibilité d'expropriation selon la loi." },
      { q: "Le droit de suite permet au titulaire d'un droit réel :", choix: ["D'être payé en premier", "De suivre le bien entre les mains de tout acquéreur", "D'exiger une prestation", "De vendre sans acte"], bonne: 1, explication: "Le droit de préférence concerne le paiement." },
      { q: "Le système de l'immatriculation foncière marocain s'inspire :", choix: ["Du Code civil français", "De l'Act Torrens", "Du droit romain", "Du Code ottoman"], bonne: 1, explication: "Système des livres fonciers." },
      { q: "Les terres collectives appartiennent :", choix: ["À l'État", "Aux communautés ethniques", "Aux communes", "Au ministère des Habous"], bonne: 1, explication: "Sous la tutelle du ministère de l'Intérieur." },
      { q: "Le domaine public de l'État est :", choix: ["Aliénable et prescriptible", "Inaliénable et imprescriptible", "Saisissable", "Soumis à la chefaa"], bonne: 1, explication: "Affecté à l'usage public ou à un service public." },
      { q: "La preuve de la propriété d'un immeuble non immatriculé repose notamment sur :", choix: ["Le titre foncier", "Le moulkiya et les actes adoulaires", "Le registre du commerce", "Le cadastre seul"], bonne: 1, explication: "Ainsi que la possession." },
      { q: "L'établissement chargé de la conservation foncière et du cadastre est :", choix: ["L'ANCFCC", "La CDG", "Le CSPJ", "L'ONEE"], bonne: 0, explication: "Créée par la loi 58-00." },
    ],
  },

  2: {
    titre: "L'immatriculation foncière : procédure, oppositions et titre foncier",
    description: "Immatriculation foncière au Maroc : réquisition, bornage, avis de clôture, oppositions, rôle du tribunal (article 37) et titre foncier définitif (article 62).",
    resume: md`
## L'essentiel — L'immatriculation

- **Immatriculation** : soumission de l'immeuble au dahir de 1913 ; **irréversible** ; **purge** des droits non révélés ; titre foncier = point de départ unique.
- En principe **facultative** ; **obligatoire** dans certains cas (État, habous, zones d'aménagement…) ; **immatriculation d'ensemble** gratuite.
- **Réquisition** : propriétaire, copropriétaire, titulaires de certains droits réels, créancier hypothécaire autorisé ; dépôt à la conservation foncière avec les titres ; extrait publié au **Bulletin officiel**.
- **Bornage** contradictoire par un géomètre, en présence des riverains ; procès-verbal ; plan ; **avis de clôture du bornage** publié au BO.
- **Oppositions** : jusqu'à **deux mois** après la publication de l'avis de clôture ; titres et droits à produire ; opposition **hors délai** exceptionnelle ; sanction des oppositions abusives (article 48).
- Conservateur : conciliation, sinon transmission au **TPI** ; le tribunal statue sur le **droit de l'opposant** (article **37**) : la preuve pèse sur l'opposant ; appel, cassation (suspensive).
- Décision du conservateur : immatriculation ou rejet ; établissement du **titre foncier** (nom, numéro, droits inscrits).
- Effets : titre **définitif et inattaquable** (article **62**) ; plus d'action réelle, seulement une **action personnelle en dommages-intérêts** en cas de dol (article **64**) ; **imprescriptibilité** ; fonds d'assurance.
`,
    exercices: md`
### Exercice 2 — Chronologie

Remettez dans l'ordre les étapes de la procédure : a) établissement du titre foncier ; b) publication de l'avis de clôture du bornage ; c) dépôt de la réquisition ; d) bornage ; e) expiration du délai d'opposition ; f) publication de l'extrait de réquisition au Bulletin officiel ; g) jugement sur les oppositions éventuelles.

<details><summary>Voir le corrigé</summary>

c) dépôt de la réquisition → f) publication de l'extrait → d) bornage → b) avis de clôture du bornage → e) expiration du délai d'opposition de deux mois → g) jugement sur les oppositions s'il y en a → a) établissement du titre foncier par le conservateur.

</details>

### Exercice 3 — Vrai ou faux ?

1) L'immatriculation est toujours obligatoire. 2) Le délai d'opposition court à compter du dépôt de la réquisition. 3) Devant le tribunal, le requérant doit prouver son droit en premier. 4) Une personne dépossédée par une immatriculation frauduleuse peut récupérer l'immeuble. 5) Un immeuble immatriculé ne peut pas être acquis par possession.

<details><summary>Voir le corrigé</summary>

1) Faux : elle est en principe facultative, obligatoire dans les cas prévus. 2) Faux : deux mois à compter de la publication de l'avis de clôture du bornage. 3) Faux : c'est l'opposant qui doit prouver son droit (article 37). 4) Faux : seule une action personnelle en dommages-intérêts contre l'auteur du dol est ouverte (article 64). 5) Vrai : l'immeuble immatriculé est imprescriptible.

</details>
`,
    qcm: [
      { q: "L'immatriculation foncière est en principe :", choix: ["Obligatoire", "Facultative", "Interdite en milieu rural", "Réservée à l'État"], bonne: 1, explication: "Obligatoire dans certains cas prévus par la loi." },
      { q: "L'immatriculation produit un effet de :", choix: ["Purge des droits non révélés", "Simple information", "Suspension des droits", "Transfert à l'État"], bonne: 0, explication: "Le titre devient le point de départ unique des droits." },
      { q: "L'extrait de la réquisition est publié :", choix: ["Au Bulletin officiel", "Dans un journal étranger", "Au registre du commerce", "Au Journal de la Cour"], bonne: 0, explication: "Section des annonces foncières." },
      { q: "Le bornage est effectué par :", choix: ["Un notaire", "Un ingénieur géomètre topographe", "Un adoul", "Un huissier"], bonne: 1, explication: "En présence des riverains." },
      { q: "Le délai d'opposition expire :", choix: ["Un mois après la réquisition", "Deux mois après la publication de l'avis de clôture du bornage", "Un an après le bornage", "Au jour du jugement"], bonne: 1, explication: "Une opposition hors délai reste possible à titre exceptionnel." },
      { q: "Devant le tribunal, la preuve du droit pèse sur :", choix: ["Le requérant", "L'opposant", "Le conservateur", "Le géomètre"], bonne: 1, explication: "Article 37 du dahir de 1913." },
      { q: "Le titre foncier est définitif et inattaquable selon l'article :", choix: ["37", "48", "62", "85"], bonne: 2, explication: "Dahir du 12 août 1913." },
      { q: "La victime d'une immatriculation obtenue par dol peut :", choix: ["Revendiquer l'immeuble", "Exercer une action personnelle en dommages-intérêts", "Faire annuler le titre à tout moment", "Demander une nouvelle immatriculation"], bonne: 1, explication: "Article 64." },
      { q: "Un immeuble immatriculé peut-il être acquis par possession prolongée ?", choix: ["Oui, après dix ans", "Oui, après quarante ans", "Non, jamais", "Seulement entre parents"], bonne: 2, explication: "Il est imprescriptible." },
      { q: "L'immatriculation d'ensemble est :", choix: ["Une procédure payante individuelle", "Une procédure collective, gratuite, décidée par l'administration pour une zone", "Une immatriculation des seuls immeubles de l'État", "Une immatriculation des seules copropriétés"], bonne: 1, explication: "Elle accélère la généralisation de l'immatriculation." },
    ],
  },

  3: {
    titre: "Les inscriptions sur le titre foncier et la publicité foncière",
    description: "Publicité foncière au Maroc : effet constitutif de l'inscription (articles 66 et 67), acte de l'article 4, tiers de bonne foi, prénotation et radiation.",
    resume: md`
## L'essentiel — Inscriptions et publicité foncière

- Principes : **inscription** (le droit n'existe que par l'inscription), **légalité** (contrôle du conservateur), **force probante** (les inscriptions font foi) ; ≠ publicité simplement déclarative.
- **Article 66** : le droit réel n'existe à l'égard des tiers que du jour de son inscription ; l'annulation n'est pas opposable aux tiers de bonne foi.
- **Article 67** : l'acte ne produit effet, **même entre les parties**, qu'à dater de l'inscription ; dérogation à l'article 488 du DOC.
- Procédure : demande, acte, duplicata ; acte **authentique** ou acte d'**avocat agréé près la Cour de cassation**, à peine de nullité (article **4** du Code des droits réels) ; contrôle et refus motivé du conservateur, recours au TPI ; certificat accessible à tous.
- **Tiers de bonne foi** protégé ; bonne foi présumée ; **article 2** du Code des droits réels : contestation en cas de dol, faux ou usage de faux dans un délai de **quatre ans**, ensuite seulement des dommages-intérêts ; lutte contre la spoliation (message royal de 2016).
- **Prénotation** (article **85**) : inscription provisoire sur titre, ordonnance ou demande en justice ; réserve le **rang** et rétroagit ; durée limitée.
- **Radiation** (suppression sur acte ou jugement définitif) ; **rectification** des erreurs ; responsabilité du conservateur et de l'ANCFCC, fonds d'assurance.
- Double vente d'un immeuble immatriculé : **le premier qui inscrit** l'emporte, sauf mauvaise foi ; l'évincé agit contre le vendeur (résolution, restitution, dommages-intérêts).
`,
    exercices: md`
### Exercice 2 — Quelle inscription ?

Indiquez l'opération à demander au conservateur : 1) le créancier vient d'être intégralement remboursé et l'hypothèque doit disparaître ; 2) un acheteur a introduit une action en justice pour obliger son vendeur à signer l'acte définitif ; 3) le titre foncier mentionne une contenance erronée par suite d'une faute de frappe ; 4) les héritiers d'un propriétaire décédé veulent apparaître sur le titre.

<details><summary>Voir le corrigé</summary>

1) Radiation de l'hypothèque, sur la base de la mainlevée du créancier. 2) Prénotation sur la base de la demande en justice (article 85), pour réserver son rang. 3) Rectification d'une erreur matérielle. 4) Inscription de l'acte d'hérédité (et éventuellement de l'acte de partage) sur le titre foncier.

</details>

### Exercice 3 — Question de cours

Expliquez la différence entre l'effet constitutif et l'effet déclaratif de la publicité foncière, et dites lequel s'applique au Maroc pour les immeubles immatriculés.

<details><summary>Voir le corrigé</summary>

Dans un système déclaratif, le droit naît de l'accord des parties, et la publicité le rend seulement opposable aux tiers. Dans un système constitutif, l'inscription est la condition de l'existence même du droit, y compris entre les parties. Pour les immeubles immatriculés, le Maroc applique l'effet constitutif : article 66 (à l'égard des tiers) et article 67 (même entre les parties). Pour les immeubles non immatriculés, la vente produit effet par l'accord des parties, sous réserve des règles de forme de l'article 4 du Code des droits réels.

</details>
`,
    qcm: [
      { q: "Pour un immeuble immatriculé, l'acte de vente produit effet entre les parties :", choix: ["Dès la signature", "À dater de l'inscription", "Après le paiement du prix", "Après un an"], bonne: 1, explication: "Article 67 du dahir de 1913." },
      { q: "Selon l'article 66, l'annulation d'une inscription n'est pas opposable :", choix: ["Au vendeur", "Aux tiers de bonne foi", "Au conservateur", "Aux héritiers"], bonne: 1, explication: "Protection de la confiance dans le titre." },
      { q: "Les actes de transfert de droits réels doivent être établis, à peine de nullité :", choix: ["Sous seing privé", "Par acte authentique ou acte d'avocat agréé près la Cour de cassation", "Oralement devant témoins", "Par simple lettre"], bonne: 1, explication: "Article 4 du Code des droits réels." },
      { q: "En cas de faux, l'inscription peut être contestée dans un délai de :", choix: ["Un an", "Deux ans", "Quatre ans", "Quinze ans"], bonne: 2, explication: "Article 2 du Code des droits réels." },
      { q: "La bonne foi de l'acquéreur inscrit est :", choix: ["Présumée", "À prouver par lui", "Sans importance", "Appréciée par le notaire"], bonne: 0, explication: "La mauvaise foi doit être prouvée." },
      { q: "La prénotation a pour effet principal de :", choix: ["Transférer la propriété", "Réserver le rang du droit", "Annuler les inscriptions antérieures", "Suspendre le titre"], bonne: 1, explication: "L'inscription définitive rétroagit à sa date." },
      { q: "La prénotation est régie par l'article :", choix: ["37", "62", "85", "488"], bonne: 2, explication: "Dahir du 12 août 1913." },
      { q: "La suppression d'une hypothèque remboursée s'appelle :", choix: ["Une rectification", "Une radiation", "Une prénotation", "Une opposition"], bonne: 1, explication: "Sur la base de la mainlevée." },
      { q: "En cas de double vente d'un immeuble immatriculé, est préféré :", choix: ["Le premier acheteur en date", "Celui qui a inscrit le premier, s'il est de bonne foi", "Celui qui a payé le plus cher", "Le plus âgé"], bonne: 1, explication: "Articles 66 et 67." },
      { q: "Le refus d'inscription du conservateur peut être contesté devant :", choix: ["Le tribunal administratif", "Le tribunal de première instance", "La Cour des comptes", "Le Médiateur seulement"], bonne: 1, explication: "Décision motivée susceptible de recours." },
    ],
  },

  4: {
    titre: "Le droit de propriété, l'indivision et la copropriété",
    description: "Propriété immobilière au Maroc : attributs et caractères, troubles de voisinage, urbanisme, expropriation (loi 7-81), indivision, partage et copropriété.",
    resume: md`
## L'essentiel — Propriété, indivision, copropriété

- **Propriété** (article 14 du Code des droits réels) : **usus**, **fructus**, **abusus**, dans les limites de la loi ; dessus et dessous ; **accession**.
- Caractères : **absolu** (tempéré), **exclusif**, **perpétuel** (pas d'extinction par non-usage ; risque de possession acquisitive seulement pour l'immeuble non immatriculé).
- Protection : **action en revendication**, actions possessoires, article 35 de la Constitution.
- Limites : abus de droit et **troubles anormaux de voisinage** (DOC 91-92) ; urbanisme (lois **12-90**, **25-90**, 66-12) ; littoral, eau, patrimoine.
- **Expropriation** (loi **7-81**) : déclaration d'utilité publique (décret), acte de cessibilité, cession amiable, sinon **tribunal administratif** (transfert et indemnité, sans la plus-value du projet).
- **Indivision** : quotes-parts abstraites ; chaque indivisaire dispose de sa part (sous réserve de la **chefaa**) ; administration aux trois quarts des droits (article 971 DOC) ; disposition du tout à l'unanimité.
- **Partage** : nul n'est tenu de rester dans l'indivision ; amiable ou judiciaire (en nature ou licitation) ; effet **déclaratif**.
- **Copropriété** (loi **18-00**, modifiée par 106-12) : parties privatives et communes ; **règlement de copropriété** ; **syndicat** (personne morale), **assemblée générale** (majorités), **syndic** ; respect de la destination de l'immeuble ; charges.
`,
    exercices: md`
### Exercice 2 — Quel attribut ?

Indiquez l'attribut de la propriété exercé : 1) M. Filali loue son appartement ; 2) il y habite pendant l'été ; 3) il le vend ; 4) il le démolit pour reconstruire ; 5) il récolte les olives de son verger.

<details><summary>Voir le corrigé</summary>

1) Fructus (perception des loyers, fruits civils). 2) Usus. 3) Abusus (disposition juridique). 4) Abusus (disposition matérielle). 5) Fructus (fruits naturels).

</details>

### Exercice 3 — L'indivision des héritiers

Trois frères ont hérité d'une maison à parts égales. L'aîné veut louer la maison, le cadet veut vendre sa part à un étranger à la famille, le troisième veut sortir de l'indivision. Analysez chaque projet.

<details><summary>Voir le corrigé</summary>

La location est un acte d'administration : elle exige l'accord des indivisaires représentant au moins les trois quarts des droits ; l'aîné seul (un tiers) ne peut décider, il lui faut l'accord de ses deux frères. Le cadet peut vendre sa quote-part, mais ses frères peuvent exercer la chefaa et se substituer à l'acheteur en remboursant le prix et les frais. Le troisième peut demander le partage à tout moment : à défaut d'accord, partage judiciaire en nature si la maison est commodément partageable, sinon licitation et partage du prix.

</details>
`,
    qcm: [
      { q: "Les trois attributs de la propriété sont :", choix: ["Usus, fructus, abusus", "Possession, détention, usage", "Titre, inscription, bornage", "Vente, donation, échange"], bonne: 0, explication: "Article 14 du Code des droits réels." },
      { q: "Percevoir les loyers d'un immeuble relève :", choix: ["De l'usus", "Du fructus", "De l'abusus", "De l'accession"], bonne: 1, explication: "Fruits civils." },
      { q: "Le caractère perpétuel de la propriété signifie notamment que :", choix: ["Elle s'éteint après trente ans de non-usage", "Elle ne s'éteint pas par le non-usage", "Elle ne peut pas être transmise", "Elle appartient à l'État"], bonne: 1, explication: "Elle se transmet aux héritiers." },
      { q: "L'action qui permet au propriétaire de récupérer son bien est :", choix: ["L'action possessoire", "L'action en revendication", "L'action paulienne", "L'action en partage"], bonne: 1, explication: "Il doit prouver sa propriété." },
      { q: "La loi relative à l'expropriation pour cause d'utilité publique est la loi :", choix: ["7-81", "12-90", "18-00", "25-90"], bonne: 0, explication: "Transfert prononcé par le juge administratif." },
      { q: "Le transfert de propriété et l'indemnité d'expropriation sont fixés par :", choix: ["Le tribunal de première instance", "Le tribunal administratif", "Le conservateur foncier", "Le gouverneur"], bonne: 1, explication: "À défaut de cession amiable." },
      { q: "Un indivisaire peut seul :", choix: ["Vendre le bien entier", "Vendre sa quote-part", "Louer le bien entier", "Démolir le bien"], bonne: 1, explication: "Sous réserve de la chefaa des autres indivisaires." },
      { q: "Le partage a un effet :", choix: ["Translatif", "Déclaratif", "Suspensif", "Constitutif de nouveaux droits"], bonne: 1, explication: "Chacun est censé propriétaire de son lot dès l'origine." },
      { q: "La copropriété des immeubles bâtis est régie par la loi :", choix: ["18-00", "44-00", "39-08", "67-12"], bonne: 0, explication: "Modifiée par la loi 106-12." },
      { q: "Dans une copropriété, la personne morale qui administre les parties communes est :", choix: ["Le syndic", "Le syndicat des copropriétaires", "Le conservateur", "La commune"], bonne: 1, explication: "Le syndic est son représentant." },
    ],
  },

  5: {
    titre: "Les modes d'acquisition de la propriété immobilière",
    description: "Acquisition de la propriété immobilière au Maroc : vente (article 4), VEFA (loi 44-00), donation, succession, possession (hiyaza) et préemption (chefaa).",
    resume: md`
## L'essentiel — Modes d'acquisition

- **Originaires** : vivification des terres mortes (très encadrée), **accession**, **possession** ; **dérivés** : vente, échange, donation, succession, testament, chefaa, adjudication, expropriation.
- **Vente** : conditions du DOC ; forme de l'**article 4** (acte authentique ou avocat agréé, à peine de nullité) ; transfert par l'accord (non immatriculé, article 488 DOC) ou par l'**inscription** (immatriculé, article 67) ; délivrance, garanties d'éviction et des vices ; promesse de vente.
- **VEFA** (loi **44-00**, modifiée par **107-12**) : contrat préliminaire et définitif, paiement échelonné, garanties, prénotation, pénalités de retard.
- **Donation** (articles 273 et suivants) : acte authentique, acceptation, **prise de possession (hawz)** sinon caducité ; inscription pour l'immeuble immatriculé ; maladie de la mort → règles du testament.
- **Succession** : Code de la famille, **acte d'hérédité** adoulaire, inscription ; testament limité au **tiers**.
- **Possession** (articles 239 et suivants) : réelle, publique, paisible, continue, à titre de propriétaire, non contestée ; **dix ans** entre étrangers, durée plus longue entre parents ; preuve par **moulkiya**.
- Exclusions de la possession : immeubles **immatriculés**, domaine public, **habous**, terres collectives, autres biens imprescriptibles.
- **Chefaa** (article **292**) : copropriétaire indivis, part **vendue** à un tiers, remboursement du prix et des frais, **30 jours** après notification, sinon délais plus longs (un an après inscription pour l'immatriculé) ; indivisible.
`,
    exercices: md`
### Exercice 2 — La donation de Hajja Fatima

Hajja Fatima signe devant adouls la donation d'une maison non immatriculée à sa petite-fille, mais continue d'y habiter seule jusqu'à son décès, deux ans plus tard. Les héritiers contestent la donation. Ont-ils raison ?

<details><summary>Voir le corrigé</summary>

Oui en principe. La donation exige la prise de possession (hawz) du bien donné par le donataire avant le décès ou l'incapacité du donateur. Hajja Fatima ayant continué à habiter seule la maison, la petite-fille n'en a jamais pris possession : la donation est caduque et la maison entre dans la succession. La solution serait différente si l'immeuble avait été immatriculé et l'acte inscrit sur le titre foncier, l'inscription valant prise de possession, ou si la donatrice avait remis les clés et loué la maison à la donataire.

</details>

### Exercice 3 — Chefaa ou non ?

Le copropriétaire indivis peut-il exercer la chefaa ? 1) Son coïndivisaire vend sa part à un tiers ; 2) son coïndivisaire donne sa part à sa fille ; 3) son coïndivisaire décède et sa part passe à ses héritiers ; 4) son coïndivisaire échange sa part contre un appartement.

<details><summary>Voir le corrigé</summary>

1) Oui : vente à un tiers, cas type de la chefaa. 2) Non : donation sans contrepartie. 3) Non : transmission successorale. 4) La question est discutée : la chefaa vise la cession à titre onéreux ; en cas d'échange, le préempteur devrait rembourser la valeur de l'appartement ; il faut vérifier les dispositions du Code des droits réels sur la contrepartie.

</details>
`,
    qcm: [
      { q: "L'accession est un mode d'acquisition :", choix: ["Dérivé", "Originaire", "Successoral", "Contractuel"], bonne: 1, explication: "Le propriétaire du sol acquiert ce qui s'y incorpore." },
      { q: "Pour un immeuble non immatriculé, la propriété est transférée :", choix: ["Par l'inscription", "Par l'accord des parties dans un acte valable", "Par le bornage", "Par le paiement complet"], bonne: 1, explication: "Article 488 du DOC." },
      { q: "La vente d'immeubles en l'état futur d'achèvement est régie par la loi :", choix: ["44-00", "18-00", "7-81", "12-90"], bonne: 0, explication: "Modifiée par la loi 107-12." },
      { q: "Une donation sans prise de possession avant le décès du donateur est :", choix: ["Valable", "Caduque", "Transformée en vente", "Transformée en testament de plein droit"], bonne: 1, explication: "Exigence du hawz." },
      { q: "Le testament est limité :", choix: ["À la moitié de la succession", "Au tiers de la succession", "Au quart de la succession", "Aux biens meubles"], bonne: 1, explication: "Code de la famille." },
      { q: "La possession peut permettre d'acquérir :", choix: ["Un immeuble immatriculé", "Un immeuble non immatriculé", "Un bien habous", "Une plage"], bonne: 1, explication: "Les autres sont imprescriptibles." },
      { q: "Entre étrangers, la durée de possession requise est de :", choix: ["Deux ans", "Cinq ans", "Dix ans", "Cent ans"], bonne: 2, explication: "Plus longue entre parents." },
      { q: "L'acte adoulaire qui atteste la possession est le :", choix: ["Titre foncier", "Moulkiya", "Duplicata", "Certificat de propriété"], bonne: 1, explication: "Fondé sur des témoignages." },
      { q: "La chefaa permet au copropriétaire indivis :", choix: ["D'annuler toute vente", "De se substituer à l'acheteur d'une part vendue", "De refuser une succession", "D'exproprier son voisin"], bonne: 1, explication: "Article 292 du Code des droits réels." },
      { q: "Après notification de la vente, le délai pour exercer la chefaa est de :", choix: ["Huit jours", "Trente jours", "Un an", "Quatre ans"], bonne: 1, explication: "Sinon, des délais plus longs s'appliquent." },
    ],
  },

  6: {
    titre: "Les droits réels démembrés et les servitudes",
    description: "Droits réels démembrés au Maroc (article 9 du Code des droits réels) : usufruit, 'oumra, usage, superficie, bail emphytéotique, zina, houa et servitudes.",
    resume: md`
## L'essentiel — Droits réels démembrés et servitudes

- **Liste fermée** : droits réels principaux (article **9**) : propriété, servitudes, usufruit, **'oumra**, usage, superficie, bail emphytéotique, habous, **zina**, **houa** et surélévation, droits coutumiers antérieurs ; accessoires (article **10**) : privilèges, gage immobilier, hypothèque.
- Démembrements : le titulaire a une partie des attributs ; le propriétaire garde la **nue-propriété** ; inscription nécessaire pour l'immeuble immatriculé.
- **Usufruit** : usus + fructus, conservation de la substance ; cessible ; obligations (bon père de famille, entretien, inventaire) ; grosses réparations au nu-propriétaire ; **viager**, s'éteint au décès, par réunion, perte, renonciation, abus.
- **'Oumra** : jouissance viagère gratuite, prise de possession nécessaire ; **usage** et **habitation** : dans la mesure des besoins, incessibles.
- **Superficie** : constructions sur le terrain d'autrui ; **bail emphytéotique** : longue durée (de dix à quarante ans), droit réel cessible et hypothécable, outil d'investissement.
- **Zina** : améliorations sur le terrain d'autrui ; **houa** : droit de construire au-dessus ; droits coutumiers (gza, istighrak, guelsa) maintenus, non recréables.
- **Servitude** : charge d'un fonds servant au profit d'un fonds dominant ; attachée aux fonds, perpétuelle, indivisible ; sources : situation des lieux, loi (**enclave** avec indemnité), fait de l'homme (contrat, inscription).
- Extinction des servitudes : réunion des fonds, renonciation, disparition de l'utilité, terme, non-usage.
`,
    exercices: md`
### Exercice 2 — Qualifiez le droit

1) Mme Raji peut habiter la maison de son frère pendant toute sa vie, gratuitement ; 2) une société construit un hôtel sur un terrain de l'État qu'elle loue pour trente ans et peut hypothéquer son droit ; 3) M. Tahiri peut traverser le terrain voisin pour accéder à la route ; 4) M. Amine perçoit les loyers d'un immeuble dont sa sœur est propriétaire, pendant quinze ans ; 5) un commerçant de la médina détient, depuis 1950, un droit coutumier sur l'aménagement d'une boutique appartenant aux habous.

<details><summary>Voir le corrigé</summary>

1) 'Oumra (jouissance viagère gratuite) ou droit d'habitation selon l'acte. 2) Bail emphytéotique, droit réel. 3) Servitude de passage. 4) Usufruit à durée déterminée. 5) Droit coutumier (gza ou guelsa) régulièrement constitué avant le Code, maintenu.

</details>

### Exercice 3 — Vrai ou faux ?

1) L'usufruit passe aux héritiers de l'usufruitier. 2) Le droit d'habitation peut être loué. 3) Une servitude suppose deux fonds appartenant à des propriétaires différents. 4) Le bail emphytéotique confère un droit réel. 5) De nouveaux droits coutumiers peuvent être créés depuis le Code des droits réels.

<details><summary>Voir le corrigé</summary>

1) Faux : il est viager et s'éteint au décès. 2) Faux : droit personnel, incessible. 3) Vrai. 4) Vrai : il peut être cédé et hypothéqué. 5) Faux : seuls ceux régulièrement constitués avant le Code sont maintenus.

</details>
`,
    qcm: [
      { q: "Les droits réels principaux sont énumérés par l'article :", choix: ["4 du Code des droits réels", "9 du Code des droits réels", "62 du dahir de 1913", "292 du Code des droits réels"], bonne: 1, explication: "Liste fermée." },
      { q: "L'usufruitier dispose :", choix: ["De l'usus et du fructus", "De l'abusus seulement", "Des trois attributs", "D'aucun attribut"], bonne: 0, explication: "Le nu-propriétaire garde l'abusus." },
      { q: "L'usufruit d'une personne physique s'éteint notamment :", choix: ["Au décès du nu-propriétaire", "Au décès de l'usufruitier", "Après un an", "À la vente de l'usufruit"], bonne: 1, explication: "Il est viager." },
      { q: "La 'oumra est :", choix: ["Une vente à terme", "Une jouissance viagère gratuite", "Une hypothèque", "Un bail commercial"], bonne: 1, explication: "Institution du fiqh malékite." },
      { q: "Le droit d'usage :", choix: ["Est librement cessible", "Est limité aux besoins du titulaire et de sa famille", "Comprend l'abusus", "Est perpétuel"], bonne: 1, explication: "Droit personnel." },
      { q: "Le bail emphytéotique dure :", choix: ["Moins de trois ans", "Entre dix et quarante ans", "Toujours quatre-vingt-dix-neuf ans", "Un an renouvelable"], bonne: 1, explication: "Il confère un droit réel." },
      { q: "Le droit de construire au-dessus d'un bâtiment appartenant à autrui s'appelle :", choix: ["Zina", "Houa et surélévation", "Superficie souterraine", "Gza"], bonne: 1, explication: "Fréquent dans les médinas." },
      { q: "Une servitude est attachée :", choix: ["À la personne du propriétaire", "Aux fonds", "Au conservateur", "À la commune"], bonne: 1, explication: "Elle se transmet avec le fonds." },
      { q: "Le passage pour cause d'enclave :", choix: ["Est gratuit", "Donne lieu à une indemnité", "Est interdit sur un immeuble immatriculé", "Ne peut être fixé par le juge"], bonne: 1, explication: "Proportionnée au dommage." },
      { q: "Une simple tolérance de passage :", choix: ["Crée une servitude", "Ne crée pas de servitude", "Vaut acte authentique", "Vaut inscription"], bonne: 1, explication: "Elle peut être retirée." },
    ],
  },

  7: {
    titre: "Les sûretés réelles immobilières et la saisie immobilière",
    description: "Sûretés immobilières au Maroc : privilèges, gage immobilier (rahn hiyazi), hypothèque (article 165), rang par inscription, droit de suite et saisie immobilière.",
    resume: md`
## L'essentiel — Sûretés réelles immobilières

- Sûretés **personnelles** (cautionnement) ≠ **réelles** (un bien affecté) ; droits réels **accessoires** (article **10**) : **droit de préférence** et **droit de suite**.
- **Privilèges** : accordés par la loi selon la qualité de la créance (frais de justice, Trésor, syndicat des copropriétaires, vendeur) ; priment en principe les hypothèques.
- **Gage immobilier** (rahn hiyazi) : avec **dépossession** ; acte de l'article 4 et inscription ; droit de rétention, perception des fruits imputés sur la dette ; pacte commissoire nul ; peu utilisé.
- **Hypothèque** (article **165**) : **sans dépossession** ; accessoire, **indivisible**, **spéciale** ; conventionnelle ou forcée (loi, justice).
- Constitution : constituant propriétaire et capable, bien dans le commerce (pas de habous, terre collective, domaine public), acte de l'article 4, **inscription** avec montant ; peut grever usufruit, superficie, bail emphytéotique.
- Effets : le débiteur conserve l'usage ; **droit de suite** contre le tiers détenteur (payer, délaisser, purger) ; **rang** selon la **date d'inscription** ; cession d'antériorité.
- Extinction : paiement, renonciation, purge, perte, vente forcée ; **radiation** sur mainlevée.
- **Saisie immobilière** : titre exécutoire (certificat d'inscription de l'hypothèque), commandement, saisie inscrite, expertise et cahier des charges, **enchères**, distribution : frais et privilèges, hypothèques par rang, chirographaires.
`,
    exercices: md`
### Exercice 2 — Classez les créanciers

Un immeuble est vendu aux enchères pour 600 000 dirhams. Créanciers : un fournisseur sans garantie (100 000), une banque hypothécaire inscrite en 2022 (400 000), une autre banque hypothécaire inscrite en 2020 (300 000), frais de justice de la saisie (20 000). Répartissez le prix.

<details><summary>Voir le corrigé</summary>

Frais de justice : 20 000 (reste 580 000). Banque inscrite en 2020, premier rang : 300 000 (reste 280 000). Banque inscrite en 2022, second rang : 280 000 sur 400 000, elle reste créancière chirographaire de 120 000. Fournisseur : rien sur le prix.

</details>

### Exercice 3 — Gage ou hypothèque ?

Un agriculteur veut emprunter en garantissant le prêt par sa ferme, tout en continuant à l'exploiter. Quelle sûreté lui conseillez-vous ? Justifiez.

<details><summary>Voir le corrigé</summary>

L'hypothèque : elle n'entraîne pas de dépossession, l'agriculteur conserve l'usage et les récoltes de sa ferme, alors que le gage immobilier suppose la remise de la ferme au créancier, qui en percevrait les fruits. Si la ferme est immatriculée, l'hypothèque devra être constituée par acte conforme à l'article 4 et inscrite sur le titre foncier ; si elle ne l'est pas, la banque exigera souvent l'immatriculation préalable pour sécuriser sa garantie.

</details>
`,
    qcm: [
      { q: "Les sûretés réelles immobilières sont des droits réels :", choix: ["Principaux", "Accessoires", "Personnels", "Coutumiers"], bonne: 1, explication: "Article 10 du Code des droits réels." },
      { q: "Le droit de suite permet au créancier hypothécaire :", choix: ["D'être payé avant tous", "De saisir l'immeuble entre les mains de tout acquéreur", "D'habiter l'immeuble", "De percevoir les loyers"], bonne: 1, explication: "Contre le tiers détenteur." },
      { q: "Un privilège résulte :", choix: ["D'une convention", "De la loi, selon la qualité de la créance", "D'un testament", "D'une décision du conservateur"], bonne: 1, explication: "Il prime en principe les hypothèques." },
      { q: "Le gage immobilier (rahn hiyazi) suppose :", choix: ["La dépossession du débiteur", "L'absence d'acte", "Un bien meuble", "L'accord du juge"], bonne: 0, explication: "Le créancier détient l'immeuble." },
      { q: "L'hypothèque se caractérise par :", choix: ["La dépossession du débiteur", "L'absence de dépossession", "Le transfert de propriété au créancier", "L'absence d'inscription"], bonne: 1, explication: "Article 165 du Code des droits réels." },
      { q: "Le rang des hypothèques sur un immeuble immatriculé dépend :", choix: ["De la date du prêt", "De la date de l'acte", "De la date d'inscription", "Du montant garanti"], bonne: 2, explication: "Premier en date, premier en droit." },
      { q: "Peut être hypothéqué :", choix: ["Un bien habous", "Une terre collective", "Un bail emphytéotique", "Une plage"], bonne: 2, explication: "Les autres sont hors commerce." },
      { q: "La clause permettant au créancier de devenir propriétaire faute de paiement est :", choix: ["Toujours valable", "En principe nulle", "Obligatoire", "Réservée aux banques"], bonne: 1, explication: "Le créancier doit faire vendre l'immeuble." },
      { q: "L'acquéreur d'un immeuble hypothéqué poursuivi par le créancier est appelé :", choix: ["Tiers détenteur", "Nu-propriétaire", "Préempteur", "Syndic"], bonne: 0, explication: "Il peut payer, délaisser ou purger." },
      { q: "Lors de la distribution du prix, les créanciers chirographaires sont payés :", choix: ["En premier", "Après les privilèges et les hypothèques", "Avant les frais de justice", "Jamais"], bonne: 1, explication: "Ils n'ont aucune sûreté." },
    ],
  },
};

export default chapitres;
