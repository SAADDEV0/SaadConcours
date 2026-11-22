// Plan comptable général des entreprises (PCGE) du Maroc — section
// /plan-comptable, lancée le 2026-11-22.
//
// Le PCGE est la liste des comptes fixée par le Code général de normalisation
// comptable (CGNC, loi 9-88). La liste des numéros et intitulés est la norme
// elle-même ; les explications et les écritures sont rédigées par SaadConcours.
//
// Structure : classe → rubrique (2 chiffres) → poste (3 chiffres) → comptes
// (4 chiffres, parfois 5 pour les sous-comptes les plus utilisés, ex. 34552).
// Un compte peut porter une note (NOTES, plus bas) : à quoi il sert et une
// écriture type. Ajouter un compte ou une note : ici seulement, les pages
// (app/plan-comptable/), la recherche du site et le sitemap suivent.

export const PCGE_HUB = "/plan-comptable";

// [code, intitulé, comptes[]] pour un poste ; [code, intitulé] pour un compte.
export const PCGE = [
  {
    num: 1,
    slug: "classe-1",
    titre: "Comptes de financement permanent",
    etat: "Bilan · passif",
    resume: "Capitaux propres, provisions réglementées, emprunts et dettes à plus d'un an.",
    intro:
      "La classe 1 regroupe les ressources stables de l'entreprise : ce que les associés ont apporté et laissé dans l'entreprise (capital, réserves, résultat), les capitaux propres assimilés (subventions d'investissement, provisions réglementées) et les dettes de financement, c'est-à-dire les emprunts à plus d'un an. Elle forme le haut du passif du bilan, le « financement permanent » qui doit couvrir l'actif immobilisé.",
    fonctionnement:
      "Ce sont des comptes de passif : ils augmentent au crédit et diminuent au débit. Leur solde est normalement créditeur. Seuls quelques comptes ont un solde débiteur par nature, et le PCGE leur donne alors un numéro terminé par 9 (1119 capital souscrit non appelé, 1169 report à nouveau débiteur, 1199 perte de l'exercice).",
    rubriques: [
      {
        code: "11",
        titre: "Capitaux propres",
        d: "Les moyens apportés par les associés et les bénéfices qu'ils ont laissés dans l'entreprise.",
        postes: [
          ["111", "Capital social ou personnel", [
            ["1111", "Capital social"],
            ["1112", "Fonds de dotation"],
            ["1117", "Capital personnel"],
            ["1119", "Actionnaires – capital souscrit -non appelé"],
          ]],
          ["112", "Primes d'émission, de fusion et d'apport", [
            ["1121", "Primes d'émission"],
            ["1122", "Primes de fusion"],
            ["1123", "Primes d'apport"],
          ]],
          ["113", "Écarts de réévaluation", [
            ["1130", "Écarts de réévaluation"],
          ]],
          ["114", "Réserve légale", [
            ["1140", "Réserve légale"],
          ]],
          ["115", "Autres réserves", [
            ["1151", "Réserves statutaires ou contractuelles"],
            ["1152", "Réserves facultatives"],
            ["1155", "Réserves réglementées"],
          ]],
          ["116", "Report à nouveau", [
            ["1161", "Report à nouveau (solde créditeur)"],
            ["1169", "Report à nouveau (solde débiteur)"],
          ]],
          ["118", "Résultats nets en instance d'affectation", [
            ["1181", "Résultats nets en instance d'affectation (solde créditeur)"],
            ["1189", "Résultats nets en instance d'affectation (solde débiteur)"],
          ]],
          ["119", "Résultat net de l'exercice", [
            ["1191", "Résultat net de l'exercice (solde créditeur)"],
            ["1199", "Résultat net de l'exercice (solde débiteur)"],
          ]],
        ],
      },
      {
        code: "13",
        titre: "Capitaux propres assimilés",
        d: "Des ressources qui ne viennent pas des associés mais restent durablement dans l'entreprise.",
        postes: [
          ["131", "Subventions d'investissement", [
            ["1311", "Subventions d'investissement reçues"],
            ["1319", "Subventions d'investissement inscrites au CPC"],
          ]],
          ["135", "Provisions réglementées", [
            ["1351", "Provisions pour amortissements dérogatoires"],
            ["1352", "Provisions pour plus-values en instance d'imposition"],
            ["1354", "Provisions pour investissements"],
            ["1355", "Provisions pour reconstitution des gisements"],
            ["1356", "Provisions pour acquisition et construction de logements"],
            ["1358", "Autres provisions réglementées"],
          ]],
        ],
      },
      {
        code: "14",
        titre: "Dettes de financement",
        d: "Les dettes à plus d'un an qui financent les investissements.",
        postes: [
          ["141", "Emprunts obligataires", [
            ["1410", "Emprunts obligataires"],
          ]],
          ["148", "Autres dettes de financement", [
            ["1481", "Emprunts auprès des établissements de crédit"],
            ["1482", "Avances de l'État"],
            ["1483", "Dettes rattachées à des participations"],
            ["1484", "Billets de fonds"],
            ["1485", "Avances reçues et comptes courants bloqués"],
            ["1486", "Fournisseurs – d'immobilisation"],
            ["1487", "Dépôts et cautionnements reçus"],
            ["1488", "Dettes de financement diverses"],
          ]],
        ],
      },
      {
        code: "15",
        titre: "Provisions durables pour risques et charges",
        d: "Des risques et des charges probables dont l'échéance dépasse un an.",
        postes: [
          ["151", "Provisions pour risques", [
            ["1511", "Provisions pour litiges"],
            ["1512", "Provisions pour garanties données aux clients"],
            ["1513", "Provisions pour propre assureur"],
            ["1514", "Provision pour pertes sur marchés à terme"],
            ["1515", "Provisions pour amendes, double droits, pénalités"],
            ["1516", "Provisions pour pertes de change"],
            ["1518", "Autres provisions pour risques"],
          ]],
          ["155", "Provisions pour charges", [
            ["1551", "Provisions pour impôts"],
            ["1552", "Provisions pour pensions de retraite et obligations similaires"],
            ["1555", "Provisions pour charges à répartir sur plusieurs exercices"],
            ["1558", "Autres provisions pour charges"],
          ]],
        ],
      },
      {
        code: "16",
        titre: "Comptes de liaison des établissements et succursales",
        d: "Les relations entre le siège et ses établissements quand chacun tient sa propre comptabilité.",
        postes: [
          ["160", "Comptes de liaison des établissements et succursales", [
            ["1601", "Comptes de liaison du siège"],
            ["1605", "Comptes de liaison des établissements"],
          ]],
        ],
      },
      {
        code: "17",
        titre: "Écarts de conversion – passif",
        d: "Les gains de change latents sur les créances immobilisées et les dettes de financement en devises.",
        postes: [
          ["171", "Augmentation des créances immobilisées", [
            ["1710", "Augmentation des créances immobilisées"],
          ]],
          ["172", "Diminution des dettes de financement", [
            ["1720", "Diminution des dettes de financement"],
          ]],
        ],
      },
    ],
  },
  {
    num: 2,
    slug: "classe-2",
    titre: "Comptes d'actif immobilisé",
    etat: "Bilan · actif",
    resume: "Non-valeurs, immobilisations incorporelles, corporelles et financières, amortissements.",
    intro:
      "La classe 2 enregistre les biens et les droits destinés à rester durablement dans l'entreprise : les immobilisations en non-valeurs (frais engagés au démarrage ou répartis sur plusieurs exercices), les immobilisations incorporelles (brevets, fonds commercial), corporelles (terrains, constructions, matériel, véhicules, mobilier) et financières (prêts, dépôts, titres de participation). On y trouve aussi les amortissements (rubrique 28) et les provisions pour dépréciation (rubrique 29) qui viennent en diminution de ces valeurs.",
    fonctionnement:
      "Les comptes d'immobilisations sont des comptes d'actif : ils augmentent au débit (acquisition, apport, production) et diminuent au crédit (cession, mise au rebut). Ils restent à leur valeur d'origine : l'usure se suit dans les comptes 28 et la perte de valeur dans les comptes 29, qui fonctionnent à l'inverse (crédit à la dotation, débit à la reprise ou à la sortie). Au bilan, on présente la valeur brute, les amortissements et provisions, puis la valeur nette.",
    rubriques: [
      {
        code: "21",
        titre: "Immobilisations en non-valeurs",
        d: "Des charges importantes que l'on étale sur plusieurs exercices au lieu de les supporter en une seule fois.",
        postes: [
          ["211", "Frais préliminaires", [
            ["2111", "Frais de constitution"],
            ["2112", "Frais préalables au démarrage"],
            ["2113", "Frais d'augmentation du capital"],
            ["2114", "Frais sur opérations de fusions, scissions et transformations"],
            ["2116", "Frais de prospection"],
            ["2117", "Frais de publicité"],
            ["2118", "Autres frais préliminaires"],
          ]],
          ["212", "Charges à répartir sur plusieurs exercices", [
            ["2121", "Frais d'acquisition des immobilisations"],
            ["2125", "Frais d'émission des emprunts"],
            ["2128", "Autres charges à répartir"],
          ]],
          ["213", "Primes de remboursement des obligations", [
            ["2130", "Primes de remboursement des obligations"],
          ]],
        ],
      },
      {
        code: "22",
        titre: "Immobilisations incorporelles",
        d: "Des droits sans existence physique, utilisés durablement par l'entreprise.",
        postes: [
          ["221", "Immobilisation en recherche et développement", [
            ["2210", "Immobilisation en recherche et développement"],
          ]],
          ["222", "Brevets, marques, droits et valeurs similaires", [
            ["2220", "Brevets, marques, droits et valeurs similaires"],
          ]],
          ["223", "Fonds commercial", [
            ["2230", "Fonds commercial"],
          ]],
          ["228", "Autres immobilisations incorporelles", [
            ["2285", "Autres immobilisations incorporelles"],
          ]],
        ],
      },
      {
        code: "23",
        titre: "Immobilisations corporelles",
        d: "Les biens physiques qui servent durablement à l'activité.",
        postes: [
          ["231", "Terrains", [
            ["2311", "Terrains nus"],
            ["2312", "Terrains aménagés"],
            ["2313", "Terrains bâtis"],
            ["2314", "Terrains de gisement"],
            ["2316", "Agencements et aménagements de terrains"],
            ["2318", "Autres terrains"],
          ]],
          ["232", "Constructions", [
            ["2321", "Bâtiments"],
            ["2323", "Constructions sur terrains d'autrui"],
            ["2325", "Ouvrages d'infrastructure"],
            ["2327", "Agencements et aménagements des constructions"],
            ["2328", "Autres constructions"],
          ]],
          ["233", "Installations techniques, matériel et outillage", [
            ["2331", "Installations techniques"],
            ["2332", "Matériel et outillage"],
            ["2333", "Emballages récupérables identifiables"],
            ["2338", "Autres installations techniques, matériel et outillage"],
          ]],
          ["234", "Matériel de transport", [
            ["2340", "Matériel de transport"],
          ]],
          ["235", "Mobilier, matériel de bureau et aménagements divers", [
            ["2351", "Mobilier de bureau"],
            ["2352", "Matériel de bureau"],
            ["2355", "Matériel informatique"],
            ["2356", "Agencements, installations et aménagements divers (biens n'appartenant pas à l'entreprise)"],
            ["2358", "Autres mobilier, matériel de bureau et aménagements divers"],
          ]],
          ["238", "Autres immobilisations corporelles", [
            ["2380", "Autres immobilisations corporelles"],
          ]],
          ["239", "Immobilisations corporelles en cours", [
            ["2392", "Immobilisations corporelles en cours des terrains et constructions"],
            ["2393", "Immobilisations corporelles en cours des installations techniques, matériel et outillage"],
            ["2394", "Immobilisations corporelles en cours de matériel de transport"],
            ["2395", "Immobilisations corporelles en cours de mobilier, matériel de bureau et aménagements divers"],
            ["2397", "Avances et acomptes versés sur commandes d'immobilisations corporelles"],
            ["2398", "Autres immobilisations corporelles en cours"],
          ]],
        ],
      },
      {
        code: "24",
        titre: "Immobilisations financières",
        d: "Les prêts accordés et les sommes bloquées pour plus d'un an.",
        postes: [
          ["241", "Prêts immobilisés", [
            ["2411", "Prêts au personnel"],
            ["2415", "Prêts aux associés"],
            ["2416", "Billets de fonds"],
            ["2418", "Autres prêts"],
          ]],
          ["248", "Autres créances financières", [
            ["2481", "Titres immobilisés (droits de créance)"],
            ["2483", "Créances rattachées à des participations"],
            ["2486", "Dépôts et cautionnements versés"],
            ["2487", "Créances immobilisées"],
            ["2488", "Créances financières diverses"],
          ]],
        ],
      },
      {
        code: "25",
        titre: "Titres de participation",
        d: "Les actions d'autres sociétés détenues pour durer, souvent pour les contrôler ou les influencer.",
        postes: [
          ["251", "Titres de participation", [
            ["2510", "Titres de participation"],
          ]],
          ["258", "Autres titres immobilisés", [
            ["2581", "Actions"],
            ["2588", "Titres divers"],
          ]],
        ],
      },
      {
        code: "27",
        titre: "Écarts de conversion – actif",
        d: "Les pertes de change latentes sur les créances immobilisées et les dettes de financement en devises.",
        postes: [
          ["271", "Diminution des créances immobilisées", [
            ["2710", "Diminution des créances immobilisées"],
          ]],
          ["272", "Augmentation des dettes de financement", [
            ["2720", "Augmentation des dettes de financement"],
          ]],
        ],
      },
      {
        code: "28",
        titre: "Amortissements des immobilisations",
        d: "Le cumul des dotations qui constatent l'usure ou l'étalement de chaque immobilisation.",
        postes: [
          ["281", "Amortissements des immobilisations en non-valeurs", [
            ["2811", "Amortissements des frais préliminaires"],
            ["2812", "Amortissements des charges à répartir"],
            ["2813", "Amortissements des primes de remboursement des obligations"],
          ]],
          ["282", "Amortissements des immobilisations incorporelles", [
            ["2821", "Amortissements de l'immobilisation en recherche et développement"],
            ["2822", "Amortissements des brevets, marques, droits et valeurs similaires"],
            ["2823", "Amortissements du fonds commercial"],
            ["2828", "Amortissements des autres immobilisations incorporelles"],
          ]],
          ["283", "Amortissements des immobilisations corporelles", [
            ["2831", "Amortissements des terrains"],
            ["2832", "Amortissements des constructions"],
            ["2833", "Amortissements des installations techniques, matériel et outillage"],
            ["2834", "Amortissements du matériel de transport"],
            ["2835", "Amortissements du mobilier, matériel de bureau et aménagements divers"],
            ["2838", "Amortissements des autres immobilisations corporelles"],
          ]],
        ],
      },
      {
        code: "29",
        titre: "Provisions pour dépréciation des immobilisations",
        d: "Les pertes de valeur probables qui ne viennent pas de l'usure (baisse de prix, risque de non-remboursement).",
        postes: [
          ["292", "Provisions pour dépréciation des immobilisations incorporelles", [
            ["2920", "Provisions pour dépréciation des immobilisations incorporelles"],
          ]],
          ["293", "Provisions pour dépréciation des immobilisations corporelles", [
            ["2930", "Provisions pour dépréciation des immobilisations corporelles"],
          ]],
          ["294", "Provisions pour dépréciation des immobilisations financières", [
            ["2941", "Provisions pour dépréciation des prêts immobilisés"],
            ["2948", "Provisions pour dépréciation des autres créances financières"],
          ]],
          ["295", "Provisions pour dépréciation des titres de participation", [
            ["2951", "Provisions pour dépréciation des titres de participation"],
            ["2958", "Provisions pour dépréciation des autres titres immobilisés"],
          ]],
        ],
      },
    ],
  },
  {
    num: 3,
    slug: "classe-3",
    titre: "Comptes d'actif circulant (hors trésorerie)",
    etat: "Bilan · actif",
    resume: "Stocks, clients, TVA récupérable, avances et charges constatées d'avance.",
    intro:
      "La classe 3 regroupe ce que l'entreprise possède et qui tourne avec son cycle d'exploitation : les stocks (marchandises, matières, produits), les créances à court terme (clients, avances aux fournisseurs, personnel, État, associés), les titres et valeurs de placement achetés pour être revendus rapidement, et les comptes de régularisation de l'actif. La trésorerie (banque, caisse) n'en fait pas partie : elle a sa propre classe, la classe 5.",
    fonctionnement:
      "Comptes d'actif : ils augmentent au débit et diminuent au crédit. Un client qui doit 12 000 DH a un compte 3421 débiteur de 12 000 DH ; quand il paie, on crédite 3421. Les stocks ne bougent qu'à l'inventaire dans l'inventaire intermittent : on annule le stock initial et on constate le stock final par les comptes de variation de stocks (6114, 6124, 713). Les provisions de la rubrique 39 fonctionnent à l'inverse, au crédit.",
    rubriques: [
      {
        code: "31",
        titre: "Stocks",
        d: "Les biens achetés ou fabriqués, présents dans l'entreprise à la date de l'inventaire.",
        postes: [
          ["311", "Marchandises", [
            ["3111", "Marchandises (groupe A)"],
            ["3112", "Marchandises (groupe B)"],
            ["3116", "Marchandises en cours de route"],
            ["3118", "Autres marchandises"],
          ]],
          ["312", "Matières et fournitures consommables", [
            ["3121", "Matières premières"],
            ["3122", "Matières et fournitures consommables"],
            ["3123", "Emballages"],
            ["3126", "Matières et fournitures consommables en cours de route"],
            ["3128", "Autres matières et fournitures consommables"],
          ]],
          ["313", "Produits en cours", [
            ["3131", "Biens en cours"],
            ["3134", "Services en cours"],
            ["3138", "Autres produits en cours"],
          ]],
          ["314", "Produits intermédiaires et produits résiduels", [
            ["3141", "Produits intermédiaires"],
            ["3145", "Produits résiduels (ou matières de récupération)"],
            ["3148", "Autres produits intermédiaires et produits résiduels"],
          ]],
          ["315", "Produits finis", [
            ["3151", "Produits finis (groupe A)"],
            ["3152", "Produits finis (groupe B)"],
            ["3156", "Produits finis en cours de route"],
            ["3158", "Autres produits finis"],
          ]],
        ],
      },
      {
        code: "34",
        titre: "Créances de l'actif circulant",
        d: "Ce que les tiers (clients, fournisseurs, personnel, État, associés) doivent à l'entreprise à court terme.",
        postes: [
          ["341", "Fournisseurs débiteurs, avances et acomptes", [
            ["3411", "Fournisseurs – avances et acomptes versés sur commandes d'exploitation"],
            ["3413", "Fournisseurs – créances pour emballages et matériel à rendre"],
            ["3417", "Rabais, remises et ristournes à obtenir – avoirs non encore reçus"],
            ["3418", "Autres fournisseurs débiteurs"],
          ]],
          ["342", "Clients et comptes rattachés", [
            ["3421", "Clients"],
            ["3423", "Clients – retenues de garantie"],
            ["3424", "Clients – douteux ou litigieux"],
            ["3425", "Clients – effets à recevoir"],
            ["3427", "Clients – factures à établir et créances sur travaux non encore facturés"],
            ["3428", "Autres clients et comptes rattachés"],
          ]],
          ["343", "Personnel – débiteur", [
            ["3431", "Avances et acomptes au personnel"],
            ["3438", "Personnel – autres débiteurs"],
          ]],
          ["345", "État – débiteur", [
            ["3451", "Subventions à recevoir"],
            ["3453", "Acomptes sur impôts sur les résultats"],
            ["3455", "État – TVA récupérable"],
            ["34551", "État – TVA récupérable sur immobilisations"],
            ["34552", "État – TVA récupérable sur charges"],
            ["3456", "État – crédit de TVA (suivant déclaration)"],
            ["3458", "État – autres comptes débiteurs"],
          ]],
          ["346", "Comptes d'associés – débiteurs", [
            ["3461", "Associés – comptes d'apport en société"],
            ["3462", "Actionnaires – capital souscrit et appelé non versé"],
            ["3463", "Comptes courants des associés débiteurs"],
            ["3464", "Associés – opérations faites en commun"],
            ["3467", "Créances rattachées aux comptes d'associés"],
            ["3468", "Autres comptes d'associés débiteurs"],
          ]],
          ["348", "Autres débiteurs", [
            ["3481", "Créances sur cessions d'immobilisations"],
            ["3482", "Créances sur cessions d'éléments d'actif circulant"],
            ["3487", "Créances rattachées aux autres débiteurs"],
            ["3488", "Divers débiteurs"],
          ]],
          ["349", "Comptes de régularisation – actif", [
            ["3491", "Charges constatées d'avance"],
            ["3493", "Intérêts courus et non échus à percevoir"],
            ["3495", "Comptes de répartition périodique des charges"],
            ["3497", "Comptes transitoires ou d'attente – débiteurs"],
          ]],
        ],
      },
      {
        code: "35",
        titre: "Titres et valeurs de placement",
        d: "Les actions et obligations achetées pour placer une trésorerie disponible et revendues à court terme.",
        postes: [
          ["350", "Titres et valeurs de placement", [
            ["3501", "Actions, partie libérée"],
            ["3502", "Actions, partie non libérée"],
            ["3504", "Obligations"],
            ["3506", "Bons de caisse et bons de trésor"],
            ["3508", "Autres titres et valeurs de placement similaires"],
          ]],
        ],
      },
      {
        code: "37",
        titre: "Écarts de conversion – actif (éléments circulants)",
        d: "Les pertes de change latentes sur les créances et dettes circulantes en devises.",
        postes: [
          ["370", "Écarts de conversion – actif (éléments circulants)", [
            ["3701", "Diminution des créances circulantes"],
            ["3702", "Augmentation des dettes circulantes"],
          ]],
        ],
      },
      {
        code: "39",
        titre: "Provisions pour dépréciation des comptes de l'actif circulant",
        d: "Les pertes de valeur probables des stocks, des créances et des titres de placement.",
        postes: [
          ["391", "Provisions pour dépréciation des stocks", [
            ["3911", "Provisions pour dépréciation des marchandises"],
            ["3912", "Provisions pour dépréciation des matières et fournitures"],
            ["3913", "Provisions pour dépréciation des produits en cours"],
            ["3914", "Provisions pour dépréciation des produits intermédiaires"],
            ["3915", "Provisions pour dépréciation des produits finis"],
          ]],
          ["394", "Provisions pour dépréciation des créances de l'actif circulant", [
            ["3941", "Provisions pour dépréciation – fournisseurs débiteurs, avances et acomptes"],
            ["3942", "Provisions pour dépréciation des clients et comptes rattachés"],
            ["3943", "Provisions pour dépréciation du personnel – débiteur"],
            ["3946", "Provisions pour dépréciation des comptes d'associés débiteurs"],
            ["3948", "Provisions pour dépréciation des autres débiteurs"],
          ]],
          ["395", "Provisions pour dépréciation des titres et valeurs de placement", [
            ["3950", "Provisions pour dépréciation des titres et valeurs de placement"],
          ]],
        ],
      },
    ],
  },
  {
    num: 4,
    slug: "classe-4",
    titre: "Comptes de passif circulant (hors trésorerie)",
    etat: "Bilan · passif",
    resume: "Fournisseurs, personnel, CNSS, État (TVA, IS, IR), associés et autres dettes à court terme.",
    intro:
      "La classe 4 regroupe les dettes à court terme nées de l'exploitation : fournisseurs, clients qui ont versé une avance, salaires restant à payer, cotisations sociales (CNSS, retraite, mutuelle), impôts et taxes dus à l'État (TVA facturée, impôt sur les sociétés, IR retenu sur les salaires), dettes envers les associés et autres créanciers. S'y ajoutent les provisions pour risques à court terme et les comptes de régularisation du passif.",
    fonctionnement:
      "Comptes de passif : ils augmentent au crédit et diminuent au débit. Une facture d'achat reçue crédite le fournisseur 4411 ; son règlement le débite. Les dettes envers l'État suivent le même principe : la TVA facturée aux clients est créditée en 4455, puis soldée lors de la déclaration en même temps que la TVA récupérable de la classe 3.",
    rubriques: [
      {
        code: "44",
        titre: "Dettes du passif circulant",
        d: "Ce que l'entreprise doit à court terme à ses fournisseurs, à son personnel, aux organismes sociaux, à l'État et aux associés.",
        postes: [
          ["441", "Fournisseurs et comptes rattachés", [
            ["4411", "Fournisseurs"],
            ["4413", "Fournisseurs – retenues de garantie"],
            ["4415", "Fournisseurs – effets à payer"],
            ["4417", "Fournisseurs – factures non parvenues"],
            ["4418", "Autres fournisseurs et comptes rattachés"],
          ]],
          ["442", "Clients créditeurs, avances et acomptes", [
            ["4421", "Clients – avances et acomptes reçus sur commandes en cours"],
            ["4425", "Clients – dettes pour emballages et matériel consignés"],
            ["4427", "Rabais, remises et ristournes à accorder – avoirs à établir"],
            ["4428", "Autres clients créditeurs"],
          ]],
          ["443", "Personnel – créditeur", [
            ["4432", "Rémunérations dues au personnel"],
            ["4433", "Dépôts du personnel créditeurs"],
            ["4434", "Oppositions sur salaires"],
            ["4437", "Charges du personnel à payer"],
            ["4438", "Personnel – autres créditeurs"],
          ]],
          ["444", "Organismes sociaux", [
            ["4441", "Caisse Nationale de la Sécurité Sociale"],
            ["4443", "Caisses de retraite"],
            ["4445", "Mutuelles"],
            ["4447", "Charges sociales à payer"],
            ["4448", "Autres organismes sociaux"],
          ]],
          ["445", "État – créditeur", [
            ["4452", "État – impôts, taxes et assimilés"],
            ["4453", "État – impôts sur les résultats"],
            ["4455", "État – tVA facturée"],
            ["4456", "État – tVA due (suivant déclarations)"],
            ["4457", "État – impôts et taxes à payer"],
            ["4458", "État – autres comptes créditeurs"],
          ]],
          ["446", "Comptes d'associés – créditeurs", [
            ["4461", "Associés – capital à rembourser"],
            ["4462", "Associés – versements reçus sur augmentation de capital"],
            ["4463", "Comptes courants des associés créditeurs"],
            ["4464", "Associés – opérations faites en commun"],
            ["4465", "Associés – dividendes à payer"],
            ["4468", "Autres comptes d'associés – créditeurs"],
          ]],
          ["448", "Autres créanciers", [
            ["4481", "Dettes sur acquisitions d'immobilisations"],
            ["4483", "Dettes sur acquisitions de titres et valeurs de placement"],
            ["4484", "Obligations échues à rembourser"],
            ["4485", "Obligations, coupons à payer"],
            ["4487", "Dettes rattachées aux autres créanciers"],
            ["4488", "Divers créanciers"],
          ]],
          ["449", "Comptes de régularisation – passif", [
            ["4491", "Produits constatés d'avance"],
            ["4493", "Intérêts courus et non échus à payer"],
            ["4495", "Comptes de répartition périodique des produits"],
            ["4497", "Comptes transitoires ou d'attente – créditeurs"],
          ]],
        ],
      },
      {
        code: "45",
        titre: "Autres provisions pour risques et charges",
        d: "Les risques et charges probables dont l'échéance est à moins d'un an.",
        postes: [
          ["450", "Autres provisions pour risques et charges", [
            ["4501", "Provisions pour litiges"],
            ["4502", "Provisions pour garanties données aux clients"],
            ["4505", "Provisions pour amendes, doubles droits et pénalités"],
            ["4506", "Provisions pour pertes de change"],
            ["4507", "Provisions pour impôts"],
            ["4508", "Autres provisions pour risques et charges"],
          ]],
        ],
      },
      {
        code: "47",
        titre: "Écarts de conversion – passif (éléments circulants)",
        d: "Les gains de change latents sur les créances et dettes circulantes en devises.",
        postes: [
          ["470", "Écarts de conversion – passif (éléments circulants)", [
            ["4701", "Augmentation des créances circulantes"],
            ["4702", "Diminution des dettes circulantes"],
          ]],
        ],
      },
    ],
  },
  {
    num: 5,
    slug: "classe-5",
    titre: "Comptes de trésorerie",
    etat: "Bilan · actif et passif",
    resume: "Banque, caisse, chèques et effets à encaisser, crédits d'escompte et découverts.",
    intro:
      "La classe 5 suit l'argent disponible ou presque : les chèques et effets remis à l'encaissement, les comptes en banque, à la Trésorerie générale et aux chèques postaux, la caisse et les régies d'avances. Elle suit aussi la trésorerie passive, c'est-à-dire les financements bancaires à très court terme : crédits d'escompte, crédits de trésorerie et découverts. Au bilan, la trésorerie-actif et la trésorerie-passif apparaissent séparément, en bas de chaque côté.",
    fonctionnement:
      "Un encaissement se débite (5141 banque, 5161 caisse), un décaissement se crédite. Un compte de banque qui devient créditeur (découvert) passe au passif : le PCGE lui réserve le compte 5541. La caisse ne peut jamais être créditrice : on ne peut pas sortir plus d'argent qu'il n'y en a.",
    rubriques: [
      {
        code: "51",
        titre: "Trésorerie – actif",
        d: "L'argent disponible en banque, en caisse, et les valeurs en cours d'encaissement.",
        postes: [
          ["511", "Chèques et valeurs à encaisser", [
            ["5111", "Chèques à encaisser ou à l'encaissement"],
            ["5113", "Effets à encaisser ou à l'encaissement"],
            ["5115", "Virement de fonds"],
            ["5118", "Autres valeurs à encaisser"],
          ]],
          ["514", "Banques, Trésorerie générale et chèques postaux débiteurs", [
            ["5141", "Banques (solde débiteur)"],
            ["5143", "Trésorerie Générale"],
            ["5146", "Chèques postaux"],
            ["5148", "Autres établissements financiers et assimilés (soldes débiteurs)"],
          ]],
          ["516", "Caisses, régies d'avances et accréditifs", [
            ["5161", "Caisses"],
            ["5165", "Régies d'avances et accréditifs"],
          ]],
        ],
      },
      {
        code: "55",
        titre: "Trésorerie – passif",
        d: "Les financements bancaires à très court terme : escompte, crédits de trésorerie, découverts.",
        postes: [
          ["552", "Crédits d'escompte", [
            ["5520", "Crédits d'escompte"],
          ]],
          ["553", "Crédits de trésorerie", [
            ["5530", "Crédits de trésorerie"],
          ]],
          ["554", "Banques (soldes créditeurs)", [
            ["5541", "Banques (solde créditeur)"],
            ["5548", "Autres établissements financiers et assimilés (soldes créditeurs)"],
          ]],
        ],
      },
      {
        code: "59",
        titre: "Provisions pour dépréciation des comptes de trésorerie",
        d: "Les pertes probables sur des fonds déposés, par exemple dans un établissement en difficulté.",
        postes: [
          ["590", "Provisions pour dépréciation des comptes de trésorerie", [
            ["5900", "Provisions pour dépréciation des comptes de trésorerie"],
          ]],
        ],
      },
    ],
  },
  {
    num: 6,
    slug: "classe-6",
    titre: "Comptes de charges",
    etat: "CPC · charges",
    resume: "Achats, charges externes, impôts et taxes, salaires, dotations, intérêts, charges non courantes, IS.",
    intro:
      "La classe 6 enregistre tout ce qui appauvrit l'entreprise pendant l'exercice : achats de marchandises et de matières, services extérieurs (loyers, entretien, assurances, honoraires, transport, publicité, téléphone), impôts et taxes, salaires et charges sociales, dotations aux amortissements et aux provisions, intérêts, charges non courantes et impôt sur les résultats. Ses rubriques suivent l'ordre du compte de produits et charges (CPC) : exploitation (61), financier (63), non courant (65) et impôt (67).",
    fonctionnement:
      "Les comptes de charges se débitent. On ne les crédite que pour corriger une erreur, pour une variation de stock ou pour un compte de rabais obtenus (terminé par 9, comme 6119), qui vient en déduction des achats. À la clôture, leur total part dans le CPC et réduit le résultat ; les comptes repartent de zéro l'exercice suivant.",
    rubriques: [
      {
        code: "61",
        titre: "Charges d'exploitation",
        d: "Les charges liées à l'activité normale : acheter, produire, vendre, payer le personnel.",
        postes: [
          ["611", "Achats revendus de marchandises", [
            ["6111", "Achats de marchandises (groupe A)"],
            ["6112", "Achats de marchandises (groupe B)"],
            ["6114", "Variation de stocks de marchandises"],
            ["6118", "Achats revendus de marchandises des exercices antérieurs"],
            ["6119", "Rabais, remises et ristournes obtenus sur achats de marchandises"],
          ]],
          ["612", "Achats consommés de matières et fournitures", [
            ["6121", "Achats de matières premières"],
            ["6122", "Achats de matières et fournitures consommables"],
            ["6123", "Achats d'emballages"],
            ["6124", "Variation des stocks de matières et fournitures"],
            ["6125", "Achats non stockés de matières et fournitures"],
            ["6126", "Achats de travaux, études et prestations de service"],
            ["6128", "Achats de matières et de fournitures des exercices antérieurs"],
            ["6129", "Rabais, remises et ristournes obtenus sur achats consommés de matières et fournitures"],
          ]],
          ["613", "Autres charges externes", [
            ["6131", "Locations et charges locatives"],
            ["6132", "Redevances de crédit-bail"],
            ["6133", "Entretien et réparations"],
            ["6134", "Primes d'assurances"],
            ["6135", "Rémunérations du personnel extérieur à l'entreprise"],
            ["6136", "Rémunérations d'intermédiaires et honoraires"],
            ["6137", "Redevances pour brevets, marques, droits et valeurs similaires"],
          ]],
          ["614", "Autres charges externes (suite)", [
            ["6141", "Études, recherches et documentation"],
            ["6142", "Transports"],
            ["6143", "Déplacements, missions et réceptions"],
            ["6144", "Publicité, publications et relations publiques"],
            ["6145", "Frais postaux et frais de télécommunications"],
            ["6146", "Cotisations et dons"],
            ["6147", "Services bancaires"],
            ["6148", "Autres charges externes des exercices antérieurs"],
            ["6149", "Rabais, remises et ristournes obtenus sur autres charges externes"],
          ]],
          ["616", "Impôts et taxes", [
            ["6161", "Impôts et taxes directs"],
            ["6165", "Impôts et taxes indirects"],
            ["6167", "Impôts, taxes et droits assimilés"],
            ["6168", "Impôts et taxes des exercices antérieurs"],
          ]],
          ["617", "Charges de personnel", [
            ["6171", "Rémunérations du personnel"],
            ["6174", "Charges sociales"],
            ["6176", "Charges sociales diverses"],
            ["6177", "Rémunération de l'exploitant"],
            ["6178", "Charges du personnel des exercices antérieurs"],
          ]],
          ["618", "Autres charges d'exploitation", [
            ["6181", "Jetons de présence"],
            ["6182", "Pertes sur créances irrécouvrables"],
            ["6185", "Pertes sur opérations faites en commun"],
            ["6186", "Transfert de profits sur opérations faites en commun"],
            ["6188", "Autres charges d'exploitation des exercices antérieurs"],
          ]],
          ["619", "Dotations d'exploitation", [
            ["6191", "Dotations d'exploitation aux amortissements de l'immobilisation en non valeur"],
            ["6192", "Dotations d'exploitation aux amortissements des immobilisations incorporelles"],
            ["6193", "Dotations d'exploitation aux amortissements des immobilisations corporelles"],
            ["6194", "Dotations d'exploitation aux provisions pour dépréciation des immobilisations"],
            ["6195", "Dotations d'exploitation aux provisions pour risques et charges"],
            ["6196", "Dotations d'exploitation aux provisions pour dépréciations de l'actif circulant"],
            ["6198", "Dotations d'exploitation des exercices antérieurs"],
          ]],
        ],
      },
      {
        code: "63",
        titre: "Charges financières",
        d: "Le coût de l'argent emprunté, les pertes de change et les autres charges liées aux placements.",
        postes: [
          ["631", "Charges d'intérêts", [
            ["6311", "Intérêts des emprunts et dettes"],
            ["6318", "Charges d'intérêts des exercices antérieurs"],
          ]],
          ["633", "Pertes de change", [
            ["6331", "Pertes de change propres à l'exercice"],
            ["6338", "Pertes de change des exercices antérieurs"],
          ]],
          ["638", "Autres charges financières", [
            ["6382", "Pertes sur créances liées à des participations"],
            ["6385", "Charges nettes sur cession de titres et valeurs de placement"],
            ["6386", "Escomptes accordés"],
            ["6388", "Autres charges financières des exercices antérieurs"],
          ]],
          ["639", "Dotations financières", [
            ["6391", "Dotations aux amortissements des primes de remboursement des obligations"],
            ["6392", "Dotations aux provisions pour dépréciations des immobilisations financières"],
            ["6393", "Dotations aux provisions pour risques et charges financières"],
            ["6394", "Dotation aux provisions pour dépréciation des titres et valeurs de placement"],
            ["6396", "Dotations aux provisions pour dépréciation des comptes de trésorerie"],
            ["6398", "Dotations financières des exercices antérieurs"],
          ]],
        ],
      },
      {
        code: "65",
        titre: "Charges non courantes",
        d: "Les charges exceptionnelles, hors de l'activité habituelle : cessions d'immobilisations, pénalités, dons.",
        postes: [
          ["651", "Valeurs nettes d'amortissements des immobilisations cédées", [
            ["6512", "VNA des immobilisations incorporelles cédées"],
            ["6513", "VNA des immobilisations corporelles cédées"],
            ["6514", "VNA provisions des immobilisations financières cédées (droits de propriété)"],
            ["6518", "VNA des immobilisations cédées des exercices antérieurs"],
          ]],
          ["656", "Subventions accordées", [
            ["6561", "Subventions accordées de l'exercice"],
            ["6568", "Subventions accordées des exercices antérieurs"],
          ]],
          ["658", "Autres charges non courantes", [
            ["6581", "Pénalités sur marchés et dédits"],
            ["6582", "Rappels d'impôts (autres qu'impôts sur les résultats)"],
            ["6583", "Pénalités et amendes fiscales ou pénales"],
            ["6585", "Créances devenues irrécouvrables"],
            ["6586", "Dons, libéralités et lots"],
            ["6588", "Autres charges non courantes des exercices antérieurs"],
          ]],
          ["659", "Dotations non courantes", [
            ["6591", "Dotations aux amortissements exceptionnels des immobilisations"],
            ["6594", "Dotations non courantes aux provisions réglementées"],
            ["6595", "Dotations non courantes aux provisions pour risques et charges"],
            ["6596", "Dotations non courantes aux provisions pour dépréciation"],
            ["6598", "Dotations non courantes des exercices antérieurs"],
          ]],
        ],
      },
      {
        code: "67",
        titre: "Impôts sur les résultats",
        d: "L'impôt sur les sociétés dû au titre de l'exercice.",
        postes: [
          ["670", "Impôts sur les résultats", [
            ["6701", "Impôts sur les bénéfices"],
            ["6705", "Imposition minimale annuelle des sociétés"],
            ["6708", "Rappels et dégrèvements d'impôts sur les résultats"],
          ]],
        ],
      },
    ],
  },
  {
    num: 7,
    slug: "classe-7",
    titre: "Comptes de produits",
    etat: "CPC · produits",
    resume: "Ventes, variation de stocks de produits, subventions, reprises, produits financiers et non courants.",
    intro:
      "La classe 7 enregistre tout ce qui enrichit l'entreprise pendant l'exercice : ventes de marchandises, ventes de biens et de services produits, variation des stocks de produits, immobilisations produites pour elle-même, subventions d'exploitation, reprises sur amortissements et provisions, produits financiers (dividendes, intérêts, gains de change, escomptes obtenus) et produits non courants (prix de cession des immobilisations, reprises de subventions d'investissement). Ses rubriques sont le miroir de la classe 6 : 71 exploitation, 73 financier, 75 non courant.",
    fonctionnement:
      "Les comptes de produits se créditent. Les rabais, remises et ristournes accordés aux clients se débitent dans un compte terminé par 9 (7119, 7129), qui vient en déduction des ventes. À la clôture, leur total part dans le CPC et augmente le résultat ; ils repartent de zéro l'exercice suivant.",
    rubriques: [
      {
        code: "71",
        titre: "Produits d'exploitation",
        d: "Les produits de l'activité normale : vendre, produire, recevoir des subventions d'exploitation.",
        postes: [
          ["711", "Ventes de marchandises", [
            ["7111", "Ventes de marchandises au Maroc"],
            ["7113", "Ventes de marchandises à l'étranger"],
            ["7118", "Ventes de marchandises des exercices antérieurs"],
            ["7119", "Rabais, remises et ristournes accordés par l'entreprise"],
          ]],
          ["712", "Ventes de biens et services produits", [
            ["7121", "Ventes de biens produits au Maroc"],
            ["7122", "Ventes de biens produits à l'étranger"],
            ["7124", "Ventes de services produits au Maroc"],
            ["7125", "Ventes de services produits à l'étranger"],
            ["7126", "Redevances pour brevets, marques, droits et valeurs similaires"],
            ["7127", "Ventes de produits accessoires"],
            ["7128", "Ventes de biens et services produits des exercices antérieurs"],
            ["7129", "Rabais, remises et ristournes accordés par l'entreprise"],
          ]],
          ["713", "Variation des stocks de produits", [
            ["7131", "Variation des stocks de produits en cours"],
            ["7132", "Variation des stocks de biens produits"],
            ["7134", "Variation des stocks de services en cours"],
          ]],
          ["714", "Immobilisations produites par l'entreprise pour elle-même", [
            ["7141", "Immobilisation en non valeurs produite"],
            ["7142", "Immobilisations incorporelles produites"],
            ["7143", "Immobilisations corporelles produites"],
            ["7148", "Immobilisations produites des exercices antérieurs"],
          ]],
          ["716", "Subventions d'exploitation", [
            ["7161", "Subventions d'exploitations reçues de l'exercice"],
            ["7168", "Subventions d'exploitation reçues des exercices antérieurs"],
          ]],
          ["718", "Autres produits d'exploitation", [
            ["7181", "Jetons de présence reçus"],
            ["7182", "Revenus des immeubles non affectés à l'exploitation"],
            ["7185", "Profits sur opérations faites en commun"],
            ["7186", "Transfert de pertes sur opérations faites en commun"],
            ["7188", "Autres produits d'exploitation des exercices antérieurs"],
          ]],
          ["719", "Reprises d'exploitation ; transferts de charges", [
            ["7191", "Reprises sur amortissements de l'immobilisation en non valeurs"],
            ["7192", "Reprises sur amortissements des immobilisations incorporelles"],
            ["7193", "Reprises sur amortissements des immobilisations corporelles"],
            ["7194", "Reprises sur provisions pour dépréciation des immobilisations"],
            ["7195", "Reprises sur provisions pour risques et charges"],
            ["7196", "Reprises sur provisions pour dépréciation de l'actif circulant"],
            ["7197", "Transferts des charges d'exploitation"],
            ["7198", "Reprises sur amortissements et provisions des exercices antérieurs"],
          ]],
        ],
      },
      {
        code: "73",
        titre: "Produits financiers",
        d: "Les revenus des placements et des titres, les gains de change et les escomptes obtenus.",
        postes: [
          ["732", "Produits des titres de participation et des autres titres immobilisés", [
            ["7321", "Revenus des titres de participation"],
            ["7325", "Revenus des titres immobilisés"],
            ["7328", "Produits des titres de participation et des autres titres immobilisés des exercices antérieurs"],
          ]],
          ["733", "Gains de change", [
            ["7331", "Gains de change propres à l'exercice"],
            ["7338", "Gains de change des exercices antérieurs"],
          ]],
          ["738", "Intérêts et autres produits financiers", [
            ["7381", "Intérêts et produits assimilés"],
            ["7383", "Revenus des créances rattachées à des participations"],
            ["7384", "Revenus des titres et valeurs de placement"],
            ["7385", "Produits nets sur cessions de titres et valeurs de placement"],
            ["7386", "Escomptes obtenus"],
            ["7388", "Intérêts et autres produits financiers des exercices antérieurs"],
          ]],
          ["739", "Reprises financières ; transferts de charges", [
            ["7391", "Reprises sur amortissements des primes de remboursement des obligations"],
            ["7392", "Reprises sur provisions pour dépréciation des immobilisations financières"],
            ["7393", "Reprises sur provisions pour risques et charges financières"],
            ["7394", "Reprise sur provisions pour dépréciation des titres et valeurs de placement"],
            ["7396", "Reprises sur provisions pour dépréciation des comptes de trésorerie"],
            ["7397", "Transfert de charges financières"],
            ["7398", "Reprises sur dotations financières des exercices antérieurs"],
          ]],
        ],
      },
      {
        code: "75",
        titre: "Produits non courants",
        d: "Les produits exceptionnels : prix de cession des immobilisations, subventions d'équilibre, dégrèvements.",
        postes: [
          ["751", "Produits des cessions d'immobilisations", [
            ["7512", "Produits des cessions des immobilisations incorporelles"],
            ["7513", "Produits des cessions des immobilisations corporelles"],
            ["7514", "Produits des cessions des immobilisations financières (droits de propriété)"],
            ["7518", "Produits des cessions des immobilisations des exercices antérieurs"],
          ]],
          ["756", "Subventions d'équilibre", [
            ["7561", "Subventions d'équilibre reçues de l'exercice"],
            ["7568", "Subventions d'équilibre reçues des exercices antérieurs"],
          ]],
          ["757", "Reprises sur subventions d'investissement", [
            ["7577", "Reprises sur subventions d'investissement de l'exercice"],
            ["7578", "Reprises sur subventions d'investissement des exercices antérieurs"],
          ]],
          ["758", "Autres produits non courants", [
            ["7581", "Pénalités et dédits reçus"],
            ["7582", "Dégrèvement d'impôts (autres qu'impôts sur les résultats)"],
            ["7585", "Rentrées sur créances soldées"],
            ["7586", "Dons, libéralités et lots reçus"],
            ["7588", "Autres produits non courants des exercices antérieurs"],
          ]],
          ["759", "Reprises non courantes ; transferts de charges", [
            ["7591", "Reprises non courantes sur amortissements exceptionnels des immobilisations"],
            ["7594", "Reprises non courantes sur provisions réglementées"],
            ["7595", "Reprises non courantes sur provisions pour risques et charges"],
            ["7596", "Reprises non courantes sur provisions pour dépréciation"],
            ["7597", "Transferts de charges non courantes"],
            ["7598", "Reprises non courantes des exercices antérieurs"],
          ]],
        ],
      },
    ],
  },
  {
    num: 8,
    slug: "classe-8",
    titre: "Comptes de résultats",
    etat: "CPC · résultats",
    resume: "Résultat d'exploitation, financier, courant, non courant, avant et après impôts.",
    intro:
      "La classe 8 sert à calculer les résultats successifs de l'exercice, dans le même ordre que le CPC : le résultat d'exploitation, le résultat financier, leur somme (le résultat courant), le résultat non courant, le résultat avant impôts, puis le résultat après impôts. Elle sert aussi de cadre aux soldes de l'état des soldes de gestion (ESG), comme la marge brute, la valeur ajoutée et l'excédent brut d'exploitation.",
    fonctionnement:
      "À la clôture, on vire les soldes des comptes de charges (débit d'un compte de résultat) et de produits (crédit) dans la rubrique de résultat correspondante. Le solde de chaque rubrique est un résultat : créditeur, c'est un bénéfice ; débiteur, c'est une perte. Le résultat après impôts est ensuite repris au bilan dans le compte 1191 (bénéfice) ou 1199 (perte), en attendant la décision d'affectation des associés.",
    rubriques: [
      {
        code: "81",
        titre: "Résultat d'exploitation",
        d: "Produits d'exploitation (71) moins charges d'exploitation (61) : ce que rapporte l'activité normale, avant les opérations financières.",
        postes: [
          ["810", "Résultat d'exploitation", [
            ["8100", "Résultat d'exploitation"],
          ]],
          ["811", "Marge brute", [
            ["8110", "Marge brute"],
          ]],
          ["814", "Valeur ajoutée", [
            ["8140", "Valeur ajoutée"],
          ]],
          ["817", "Excédent brut d'exploitation", [
            ["8171", "Excédent brut d'exploitation (créditeur)"],
            ["8179", "Insuffisance brute d'exploitation (débiteur)"],
          ]],
        ],
      },
      {
        code: "83",
        titre: "Résultat financier",
        d: "Produits financiers (73) moins charges financières (63) : le coût ou le gain de la politique de financement et de placement.",
        postes: [
          ["830", "Résultat financier", [
            ["8300", "Résultat financier"],
          ]],
        ],
      },
      {
        code: "84",
        titre: "Résultat courant",
        d: "Résultat d'exploitation plus résultat financier : le résultat des opérations habituelles de l'entreprise.",
        postes: [
          ["840", "Résultat courant", [
            ["8400", "Résultat courant"],
          ]],
        ],
      },
      {
        code: "85",
        titre: "Résultat non courant",
        d: "Produits non courants (75) moins charges non courantes (65) : l'effet des opérations exceptionnelles.",
        postes: [
          ["850", "Résultat non courant", [
            ["8500", "Résultat non courant"],
          ]],
        ],
      },
      {
        code: "86",
        titre: "Résultat avant impôts",
        d: "Résultat courant plus résultat non courant : la base de départ du calcul de l'impôt sur les sociétés.",
        postes: [
          ["860", "Résultat avant impôts", [
            ["8600", "Résultat avant impôts"],
          ]],
        ],
      },
      {
        code: "88",
        titre: "Résultat après impôts",
        d: "Le résultat net de l'exercice, après l'impôt sur les résultats (6701), repris au bilan en 1191 ou 1199.",
        postes: [
          ["880", "Résultat après impôts", [
            ["8800", "Résultat après impôts"],
          ]],
        ],
      },
    ],
  },
];

// Notes : à quoi sert le compte, et une écriture type quand elle aide.
// e.l = lignes [sens "D" | "C", compte, montant en DH].
export const NOTES = {
  "1111": {
    t: "Le capital apporté par les associés d'une société (SA, SARL). Il ne bouge qu'à la constitution, lors d'une augmentation ou d'une réduction de capital. L'apport passe d'abord par le compte d'apport 3461 : on constate la promesse, puis la libération.",
    e: { titre: "Constitution d'une SARL au capital de 100 000 DH, apports versés en banque", l: [["D", "3461", 100000], ["C", "1111", 100000], ["D", "5141", 100000], ["C", "3461", 100000]] },
  },
  "1117": { t: "Le capital d'une entreprise individuelle. Il varie avec les apports et les prélèvements de l'exploitant, d'où l'absence de capital fixe comme dans une société." },
  "1119": { t: "La part du capital souscrite par les actionnaires d'une SA mais pas encore appelée. Ce compte est débiteur et vient en diminution du capital au passif du bilan." },
  "1121": { t: "Lors d'une augmentation de capital, les nouvelles actions sont souvent émises au-dessus de leur valeur nominale pour ne pas léser les anciens actionnaires. La différence entre le prix d'émission et la valeur nominale va en prime d'émission." },
  "1140": {
    t: "Réserve obligatoire : chaque année, au moins 5 % du bénéfice net (diminué des pertes antérieures) y est affecté, jusqu'à ce qu'elle atteigne le dixième du capital social. Elle sert à protéger les créanciers et ne peut pas être distribuée.",
    e: { titre: "Affectation : dotation de 4 000 DH à la réserve légale sur un bénéfice de 80 000 DH en instance d'affectation", l: [["D", "1181", 4000], ["C", "1140", 4000]] },
  },
  "1152": { t: "Les réserves que les associés décident librement de constituer lors de l'affectation du résultat, en plus de ce qu'imposent la loi et les statuts." },
  "1161": { t: "La part du bénéfice que les associés n'ont ni distribuée ni mise en réserve : elle est reportée à l'exercice suivant, en attendant une nouvelle décision." },
  "1169": { t: "Les pertes des exercices passés qui n'ont pas encore été épongées par des bénéfices ou des réserves. Solde débiteur, présenté en négatif dans les capitaux propres." },
  "1181": { t: "Compte de passage : le bénéfice de l'exercice y est viré à l'ouverture de l'exercice suivant, en attendant la décision de l'assemblée générale (réserves, dividendes, report à nouveau)." },
  "1191": {
    t: "Le bénéfice net de l'exercice, tel qu'il ressort du CPC. Il apparaît au passif du bilan de clôture, dans les capitaux propres.",
    e: { titre: "Bénéfice de 80 000 DH : virement en instance d'affectation à l'ouverture de l'exercice suivant", l: [["D", "1191", 80000], ["C", "1181", 80000]] },
  },
  "1199": { t: "La perte nette de l'exercice. Solde débiteur, présenté en négatif dans les capitaux propres du bilan." },
  "1311": {
    t: "Une aide reçue (de l'État, d'une collectivité) pour financer un investissement. Elle n'est pas un produit de l'année : elle est reprise au CPC (compte 7577) au rythme de l'amortissement du bien financé, en passant par 1319.",
    e: { titre: "Subvention d'investissement de 60 000 DH reçue en banque", l: [["D", "5141", 60000], ["C", "1311", 60000]] },
  },
  "1351": { t: "Quand l'amortissement fiscal (souvent dégressif) dépasse l'amortissement comptable, l'excédent est doté en amortissements dérogatoires. C'est une provision réglementée : elle existe pour des raisons fiscales et non économiques." },
  "1481": {
    t: "Les emprunts à plus d'un an contractés auprès des banques. On les crédite à la réception des fonds, on les débite à chaque remboursement du capital. Les intérêts, eux, sont une charge (6311).",
    e: { titre: "Emprunt bancaire de 300 000 DH, puis première échéance : 60 000 DH de capital et 18 000 DH d'intérêts", l: [["D", "5141", 300000], ["C", "1481", 300000], ["D", "1481", 60000], ["D", "6311", 18000], ["C", "5141", 78000]] },
  },
  "1486": { t: "Les dettes envers les fournisseurs d'immobilisations payables à plus d'un an. Une dette d'immobilisation à court terme va en 4481." },
  "1511": { t: "Un procès en cours dont l'issue risque de coûter à l'entreprise, au-delà d'un an. La provision est dotée par 6195 (exploitation) ou 6595 (non courant)." },
  "2111": {
    t: "Les dépenses liées à la création de la société : honoraires, droits d'enregistrement, frais d'immatriculation. Elles sont amorties sur cinq ans au plus.",
    e: { titre: "Frais de constitution de 10 000 DH HT payés par chèque (TVA 20 %)", l: [["D", "2111", 10000], ["D", "34552", 2000], ["C", "5141", 12000]] },
  },
  "2125": { t: "Les frais payés pour émettre un emprunt (commissions, frais de dossier). On peut les étaler sur la durée de l'emprunt plutôt que les passer en charge en une seule fois." },
  "2130": { t: "La différence entre le prix de remboursement et le prix d'émission d'une obligation. Elle est amortie sur la durée de l'emprunt (dotation 6391)." },
  "2230": { t: "La clientèle, l'achalandage, le nom commercial et le droit au bail achetés avec un fonds de commerce. Il n'est généralement pas amorti, mais peut faire l'objet d'une provision pour dépréciation." },
  "2311": { t: "Un terrain sans construction. Les terrains ne s'usent pas : ils ne sont pas amortis, sauf les terrains de gisement et les agencements de terrains." },
  "2321": { t: "Les immeubles utilisés par l'entreprise (bureaux, usines, entrepôts), à leur coût d'acquisition ou de production, hors valeur du terrain qui reste en 231." },
  "2332": { t: "Les machines, outils et équipements de production utilisés durablement." },
  "2340": {
    t: "Les véhicules utilisés par l'entreprise : camions, camionnettes, voitures. Attention, la TVA sur les voitures de tourisme n'est en principe pas récupérable : elle est alors intégrée au coût du véhicule.",
    e: { titre: "Achat d'un camion de livraison 200 000 DH HT à crédit, TVA 20 % récupérable", l: [["D", "2340", 200000], ["D", "34551", 40000], ["C", "4481", 240000]] },
  },
  "2351": { t: "Les bureaux, chaises, armoires et autres meubles de l'entreprise." },
  "2355": {
    t: "Ordinateurs, imprimantes, serveurs et autres équipements informatiques. Les logiciels achetés séparément sont des immobilisations incorporelles (222).",
    e: { titre: "Achat de 3 ordinateurs pour 30 000 DH HT, payé par chèque", l: [["D", "2355", 30000], ["D", "34551", 6000], ["C", "5141", 36000]] },
  },
  "2411": { t: "Les prêts accordés aux salariés et remboursables à plus d'un an (prêt au logement, par exemple). Une avance sur salaire remboursable rapidement va en 3431." },
  "2486": { t: "Les sommes versées en garantie et récupérables plus tard : caution d'un local loué, dépôt auprès de la société d'électricité ou de télécommunications." },
  "2510": { t: "Les actions d'une autre société acquises pour y exercer une influence ou un contrôle, et gardées durablement. Les dividendes reçus vont en 7321." },
  "2832": {
    t: "Le cumul des amortissements des constructions. Ce compte se crédite à chaque dotation et vient en déduction de la valeur brute des bâtiments au bilan.",
  },
  "2834": {
    t: "Le cumul des amortissements du matériel de transport.",
    e: { titre: "Dotation annuelle de 40 000 DH pour un camion de 200 000 DH amorti sur 5 ans", l: [["D", "6193", 40000], ["C", "2834", 40000]] },
  },
  "2835": { t: "Le cumul des amortissements du mobilier, du matériel de bureau et du matériel informatique (2351 à 2358)." },
  "3111": {
    t: "Le stock de marchandises à la date de l'inventaire. En inventaire intermittent, il ne bouge qu'à la clôture : on annule le stock initial et on constate le stock final par le compte 6114.",
    e: { titre: "Stock initial 50 000 DH, stock final 65 000 DH", l: [["D", "6114", 50000], ["C", "3111", 50000], ["D", "3111", 65000], ["C", "6114", 65000]] },
  },
  "3121": { t: "Le stock de matières premières destinées à la fabrication. Sa variation passe par le compte 6124." },
  "3151": { t: "Le stock de produits fabriqués par l'entreprise et prêts à être vendus. Sa variation passe par le compte 7132, en produit." },
  "3411": { t: "Une avance versée à un fournisseur avant la livraison. Elle est soldée à la réception de la facture." },
  "3421": {
    t: "Ce que les clients doivent à l'entreprise pour des ventes à crédit. Le compte se débite TTC à la facture et se crédite au règlement.",
    e: { titre: "Vente de marchandises 100 000 DH HT à crédit, TVA 20 %", l: [["D", "3421", 120000], ["C", "7111", 100000], ["C", "4455", 20000]] },
  },
  "3424": {
    t: "Un client dont le paiement devient incertain (retard important, difficultés, litige) est transféré du 3421 au 3424, puis une provision est constatée sur le montant hors taxes.",
    e: { titre: "Client de 24 000 DH TTC devenu douteux, perte probable de 50 %", l: [["D", "3424", 24000], ["C", "3421", 24000], ["D", "6196", 10000], ["C", "3942", 10000]] },
  },
  "3425": { t: "Les lettres de change et billets à ordre acceptés par les clients et pas encore échus. À l'échéance ou à la remise en banque, ils passent par 5113." },
  "3431": { t: "Les avances et acomptes sur salaire versés au personnel, retenus ensuite sur la paie." },
  "3453": { t: "Les acomptes d'impôt sur les sociétés versés pendant l'année. À la clôture, l'IS de l'exercice (4453) est comparé aux acomptes pour connaître le reliquat à payer ou l'excédent." },
  "34551": { t: "La TVA payée sur l'achat d'immobilisations (matériel, véhicule utilitaire, construction) et que l'entreprise pourra déduire de la TVA qu'elle facture." },
  "34552": {
    t: "La TVA payée sur les achats et les charges (marchandises, matières, services). Elle est déduite de la TVA facturée lors de la déclaration.",
    e: { titre: "Achat de marchandises 50 000 DH HT à crédit, TVA 20 %", l: [["D", "6111", 50000], ["D", "34552", 10000], ["C", "4411", 60000]] },
  },
  "3456": { t: "Quand la TVA récupérable du mois dépasse la TVA facturée, la différence est un crédit de TVA, à imputer sur les déclarations suivantes." },
  "3461": { t: "Le compte qui enregistre la promesse d'apport des associés à la constitution ou lors d'une augmentation de capital. Il est soldé à la libération des apports." },
  "3463": { t: "Les sommes que des associés doivent à la société. Le cas inverse, plus fréquent (un associé qui prête à sa société), va en 4463." },
  "3491": {
    t: "Une charge payée pendant l'exercice mais qui concerne en partie l'exercice suivant (loyer, assurance payés d'avance). À l'inventaire, la part de l'exercice suivant sort des charges.",
    e: { titre: "Assurance annuelle de 12 000 DH payée le 1er octobre : 9 000 DH concernent l'exercice suivant", l: [["D", "3491", 9000], ["C", "6134", 9000]] },
  },
  "350": { t: "Actions et obligations achetées pour un placement de court terme, avec l'intention de les revendre. Les revenus vont en 7384, les plus-values nettes de cession en 7385 et les moins-values nettes en 6385." },
  "3942": { t: "La provision qui constate la perte probable sur les clients douteux (3424), calculée sur le montant hors taxes de la créance. Dotation par 6196, reprise par 7196." },
  "4411": {
    t: "Ce que l'entreprise doit à ses fournisseurs pour des achats à crédit. Le compte se crédite TTC à la facture et se débite au paiement.",
    e: { titre: "Paiement par chèque d'un fournisseur de 60 000 DH", l: [["D", "4411", 60000], ["C", "5141", 60000]] },
  },
  "4415": { t: "Les effets de commerce (lettres de change, billets à ordre) que l'entreprise s'est engagée à payer à une date fixée. La dette passe du 4411 au 4415 à l'acceptation de l'effet." },
  "4417": { t: "Une marchandise ou un service reçu avant la clôture, mais dont la facture n'est pas encore arrivée. À l'inventaire, on constate la charge et la dette pour respecter l'indépendance des exercices." },
  "4421": { t: "Une avance versée par un client avant la livraison. C'est une dette de l'entreprise envers lui, soldée à l'établissement de la facture." },
  "4432": {
    t: "Les salaires nets que l'entreprise doit à ses salariés après les retenues (CNSS, AMO, IR, avances).",
    e: { titre: "Paie du mois : brut 50 000 DH, retenues CNSS-AMO 2 500 DH, IR 4 000 DH", l: [["D", "6171", 50000], ["C", "4441", 2500], ["C", "4452", 4000], ["C", "4432", 43500]] },
  },
  "4441": { t: "Ce que l'entreprise doit à la CNSS : la part salariale retenue sur la paie et la part patronale (débitée en 6174). Elle est réglée chaque mois." },
  "4452": { t: "Les impôts et taxes dus à l'État autres que l'impôt sur les résultats et la TVA. On y enregistre notamment l'IR retenu à la source sur les salaires, à reverser au fisc." },
  "4453": { t: "L'impôt sur les sociétés de l'exercice, en attente de règlement. Il est soldé par les acomptes déjà versés (3453) et par le paiement du reliquat." },
  "4455": {
    t: "La TVA facturée aux clients sur les ventes. Elle est due à l'État : lors de la déclaration, on la solde contre la TVA récupérable, et la différence est la TVA due (4456) ou un crédit de TVA (3456).",
    e: { titre: "Déclaration : TVA facturée 20 000 DH, TVA récupérable sur charges 10 000 DH", l: [["D", "4455", 20000], ["C", "34552", 10000], ["C", "4456", 10000]] },
  },
  "4456": { t: "La TVA nette à payer après la déclaration (TVA facturée moins TVA récupérable). Elle est soldée au paiement." },
  "4463": { t: "Les sommes qu'un associé a prêtées à sa société et qu'il peut retirer. Les intérêts versés sur ce compte courant sont des charges financières (6311)." },
  "4465": { t: "Les dividendes décidés par l'assemblée générale et pas encore versés aux associés." },
  "4481": { t: "Ce que l'entreprise doit, à court terme, pour l'achat d'une immobilisation. Les achats de biens ou services d'exploitation, eux, vont en 4411." },
  "4491": { t: "Un produit facturé ou encaissé pendant l'exercice mais qui concerne l'exercice suivant (loyer reçu d'avance, abonnement). À l'inventaire, cette part sort des produits." },
  "5141": {
    t: "Le compte en banque de l'entreprise tant que son solde est positif. Il se débite à chaque encaissement et se crédite à chaque paiement.",
    e: { titre: "Règlement par virement d'un client de 120 000 DH", l: [["D", "5141", 120000], ["C", "3421", 120000]] },
  },
  "5161": { t: "Les espèces détenues par l'entreprise. Ce compte ne peut jamais être créditeur." },
  "5113": { t: "Les effets de commerce remis à la banque pour encaissement à l'échéance, en attendant que la banque crédite le compte." },
  "5520": { t: "Quand l'entreprise remet un effet à l'escompte, la banque lui avance l'argent avant l'échéance. Cette avance est un crédit de trésorerie à court terme, suivi ici jusqu'au paiement de l'effet." },
  "5541": { t: "Le découvert bancaire : quand le compte en banque devient négatif, il passe au passif du bilan, dans la trésorerie-passif." },
  "6111": {
    t: "Les achats de biens destinés à être revendus en l'état, à leur prix d'achat hors taxes, frais accessoires d'achat compris (transport, droits de douane). La TVA récupérable va en 34552.",
    e: { titre: "Achat de marchandises 50 000 DH HT, payé par chèque", l: [["D", "6111", 50000], ["D", "34552", 10000], ["C", "5141", 60000]] },
  },
  "6114": { t: "La différence entre le stock initial et le stock final de marchandises. Avec le compte 6111, elle donne les achats revendus : un stock qui augmente diminue la charge, un stock qui baisse l'augmente." },
  "6119": {
    t: "Les réductions obtenues des fournisseurs après la facture (avoir). Ce compte se crédite et vient en déduction des achats de marchandises.",
    e: { titre: "Avoir reçu : ristourne de 2 000 DH HT", l: [["D", "4411", 2400], ["C", "6119", 2000], ["C", "34552", 400]] },
  },
  "6121": { t: "Les achats de matières premières destinées à être transformées. Leur variation de stock passe par le compte 6124." },
  "6125": { t: "Les achats consommés sans être stockés : eau, électricité, carburant, fournitures de bureau, petit matériel." },
  "6126": { t: "Les travaux et prestations achetés qui entrent directement dans la production (sous-traitance de fabrication, études incorporées aux produits)." },
  "6131": { t: "Les loyers des locaux, du matériel ou des véhicules loués, et les charges locatives." },
  "6132": { t: "Les loyers versés au titre d'un contrat de crédit-bail (leasing). Le bien n'est pas inscrit au bilan : seules les redevances passent en charges." },
  "6133": { t: "Les dépenses d'entretien et de réparation qui maintiennent un bien en état sans augmenter sa valeur ni sa durée de vie." },
  "6134": { t: "Les primes d'assurance (multirisque, véhicules, responsabilité civile). La part qui concerne l'exercice suivant passe en charges constatées d'avance (3491)." },
  "6136": { t: "Les honoraires d'avocat, d'expert-comptable, de notaire, et les commissions versées aux intermédiaires." },
  "6142": { t: "Les frais de transport facturés par des transporteurs : livraisons aux clients, transport du personnel, transferts entre établissements." },
  "6143": { t: "Les voyages, les frais de séjour et les réceptions pour les besoins de l'entreprise." },
  "6144": { t: "Les annonces, catalogues, campagnes publicitaires, salons et cadeaux à la clientèle." },
  "6145": { t: "Le téléphone, l'internet, les frais d'envoi du courrier et des colis." },
  "6147": { t: "Les frais et commissions facturés par la banque (tenue de compte, frais sur virements et effets), hors intérêts." },
  "6161": { t: "Les impôts directs dus par l'entreprise, comme la taxe professionnelle ou la taxe de services communaux. L'impôt sur les sociétés n'y figure pas : il a son propre compte (6701)." },
  "6167": { t: "Les droits et taxes assimilés : droits d'enregistrement, timbres, vignette des véhicules." },
  "6171": { t: "Les salaires bruts, primes, indemnités et congés payés du personnel salarié, avant toute retenue." },
  "6174": {
    t: "La part patronale des cotisations sociales : CNSS, AMO, retraite complémentaire, taxe de formation professionnelle.",
    e: { titre: "Charges patronales du mois : 10 500 DH", l: [["D", "6174", 10500], ["C", "4441", 10500]] },
  },
  "6182": { t: "La perte définitive sur un client qui ne paiera pas : la créance hors taxes passe en charge, la TVA facturée correspondante est régularisée au débit du 4455, et le client est soldé. Une provision existante est reprise par 7196." },
  "6193": { t: "La dotation annuelle aux amortissements des immobilisations corporelles. Elle constate l'usure des biens et se porte au crédit des comptes 283." },
  "6196": { t: "La dotation aux provisions sur les stocks et les créances (clients douteux), portée au crédit des comptes 39." },
  "6311": { t: "Les intérêts payés sur les emprunts bancaires, les comptes courants d'associés et les autres dettes de financement." },
  "6331": { t: "La perte constatée lors du règlement d'une créance ou d'une dette en devises, quand le cours a évolué défavorablement." },
  "6386": { t: "La réduction accordée à un client qui paie avant l'échéance prévue. C'est une charge financière, pas une réduction des ventes." },
  "6513": {
    t: "La valeur nette d'amortissements (VNA) d'une immobilisation corporelle cédée ou mise au rebut : valeur d'origine moins amortissements cumulés. Le prix de cession va en 7513 ; la différence entre les deux est la plus ou moins-value.",
    e: { titre: "Sortie d'un camion acquis 200 000 DH, amorti pour 160 000 DH", l: [["D", "2834", 160000], ["D", "6513", 40000], ["C", "2340", 200000]] },
  },
  "6583": { t: "Les amendes et pénalités fiscales, sociales ou pénales. Elles ne sont pas déductibles du résultat fiscal." },
  "6585": { t: "Les créances devenues irrécouvrables dans des circonstances exceptionnelles. Les pertes habituelles sur clients vont plutôt en 6182." },
  "6586": { t: "Les dons, libéralités et lots offerts par l'entreprise." },
  "6701": {
    t: "L'impôt sur les sociétés de l'exercice, ou la cotisation minimale quand elle est plus élevée. Il se calcule sur le résultat fiscal, après réintégrations et déductions.",
    e: { titre: "IS de l'exercice : 25 000 DH", l: [["D", "6701", 25000], ["C", "4453", 25000]] },
  },
  "7111": {
    t: "Les ventes au Maroc de biens achetés pour être revendus en l'état, au prix hors taxes. La TVA facturée va en 4455.",
    e: { titre: "Vente au comptant de marchandises 30 000 DH HT, encaissée en banque", l: [["D", "5141", 36000], ["C", "7111", 30000], ["C", "4455", 6000]] },
  },
  "7119": { t: "Les rabais, remises et ristournes accordés aux clients après la facture (avoir). Ce compte se débite et vient en déduction des ventes." },
  "7121": { t: "Les ventes de biens fabriqués par l'entreprise, au Maroc, au prix hors taxes." },
  "7124": { t: "Les ventes de services au Maroc : prestations, travaux, conseil, transport, formation." },
  "7127": { t: "Les produits des activités annexes : locations occasionnelles, commissions, refacturation de frais, vente d'emballages." },
  "7132": { t: "La variation du stock de produits finis : stock final moins stock initial. Une hausse du stock est un produit, une baisse vient en diminution." },
  "7143": { t: "Le coût des immobilisations corporelles fabriquées par l'entreprise pour elle-même (un bâtiment construit par son propre personnel, une machine montée en interne). Il compense les charges engagées pour les produire." },
  "7161": { t: "Les aides reçues pour compenser l'insuffisance de certains produits ou financer des charges d'exploitation, et rattachées à l'exercice." },
  "7196": { t: "La reprise d'une provision sur stocks ou sur créances devenue sans objet (client qui finit par payer, perte constatée)." },
  "7197": { t: "Compte qui permet de transférer une charge d'exploitation vers un autre compte, par exemple vers les charges à répartir (212). Il se crédite et annule l'effet de la charge sur le résultat de l'exercice." },
  "7321": { t: "Les dividendes reçus des sociétés dont l'entreprise détient des titres de participation (2510)." },
  "7381": { t: "Les intérêts reçus sur les prêts accordés, les comptes bancaires rémunérés et les créances." },
  "7386": { t: "La réduction obtenue d'un fournisseur pour un paiement avant l'échéance. C'est un produit financier, pas une réduction des achats." },
  "7513": { t: "Le prix de cession d'une immobilisation corporelle (hors taxes). Comparé à la VNA (6513), il donne la plus ou moins-value de cession." },
  "7577": { t: "La part de la subvention d'investissement (1311) reprise chaque année au CPC, au même rythme que l'amortissement du bien qu'elle a financé. La contrepartie est au débit du 1319." },
  "7585": { t: "Le paiement inattendu d'un client dont la créance avait été passée en perte lors d'un exercice précédent." },
};

// Comptes les plus utilisés dans les cours et les sujets de concours : la
// liste rapide de la page d'accueil de la section.
export const PCGE_ESSENTIELS = ["1111", "1140", "1191", "1481", "2340", "2355", "2834", "3111", "3421", "34552", "4411", "4432", "4441", "4455", "5141", "5161", "6111", "6114", "6125", "6171", "6174", "6193", "6701", "7111"];

// ---------- Accès ----------

export function pcgeClasseHref(c) {
  return `${PCGE_HUB}/${c.slug}`;
}

// Ancre d'un compte, d'un poste ou d'une rubrique sur la page de sa classe.
export function pcgeAncre(code) {
  return `c${code}`;
}

export function pcgeCompteHref(code) {
  const c = PCGE.find((x) => String(x.num) === String(code)[0]);
  return c ? `${pcgeClasseHref(c)}#${pcgeAncre(code)}` : PCGE_HUB;
}

export function pcgeClasse(slug) {
  return PCGE.find((c) => c.slug === slug) || null;
}

// Liste à plat de tous les codes (rubriques, postes, comptes), pour la
// recherche : { code, titre, niveau, classe }.
export function pcgeListe() {
  const out = [];
  for (const c of PCGE) {
    for (const r of c.rubriques) {
      out.push({ code: r.code, titre: r.titre, niveau: "rubrique", classe: c.num });
      for (const [code, titre, comptes] of r.postes || []) {
        out.push({ code, titre, niveau: "poste", classe: c.num });
        for (const [cc, tt] of comptes) out.push({ code: cc, titre: tt, niveau: "compte", classe: c.num });
      }
    }
  }
  return out;
}

export function pcgeTitre(code) {
  return pcgeListe().find((x) => x.code === code)?.titre || "";
}

export function pcgeNbComptes(c) {
  return c.rubriques.reduce((n, r) => n + (r.postes || []).reduce((k, p) => k + p[2].length, 0), 0);
}
