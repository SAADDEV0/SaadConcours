// Droit des affaires (S5, GFF) — compléments par chapitre : description SEO, résumé, exercices 2 et 3, QCM. Code de commerce (loi 15-95) et réformes jusqu'à la loi 71-24 (2026).
const md = String.raw;

const chapitres = {
  1: {
    titre: "Introduction au droit des affaires : notion, sources et juridictions",
    description: "Droit des affaires au Maroc : définition, règles propres (preuve libre, solidarité, prescription), sources (art. 2 et 3), tribunaux de commerce et arbitrage.",
    resume: md`
## L'essentiel — Introduction au droit des affaires

- **Droit commercial** : actes de commerce et commerçants (art. 1 C. com.). **Droit des affaires** : notion plus large, toutes les règles de l'activité économique de l'entreprise (sociétés, effets, banque, concurrence, difficultés).
- **Preuve libre** en matière commerciale (art. 334), sauf écrit exigé par la loi ou le contrat ; en droit civil, écrit obligatoire au-delà de **10 000 DH** (art. 443 DOC).
- **Solidarité présumée** entre codébiteurs d'une obligation commerciale (art. 335).
- **Prescription de 5 ans** pour les obligations nées du commerce (art. 5), contre **15 ans** en droit commun (art. 387 DOC).
- **Ordre des sources** (art. 2) : loi commerciale, puis coutumes et usages du commerce, puis droit civil s'il ne contredit pas les principes du droit commercial.
- **Usages spéciaux et locaux** priment les usages généraux (art. 3).
- Textes clés : loi 15-95 (Code de commerce, 1996), 53-95 (tribunaux de commerce), 49-16 (baux), 73-17 (difficultés), 21-18 (sûretés), 95-17 (arbitrage), 71-24 (chèque, 2026).
- **Tribunaux de commerce** (loi 53-95, art. 5) : contrats commerciaux, litiges entre commerçants, effets de commerce, associés, fonds de commerce ; seuil de **20 000 DH** en principal (art. 6).
- **Acte mixte** : le non-commerçant choisit son juge ; le commerçant agit en principe devant le tribunal de première instance.
- **Arbitrage** (loi 95-17) : clause compromissoire ou compromis ; sentence exécutoire après **exequatur**.
`,
    exercices: md`
### Exercice 2 — Classer les sources

Pour chaque situation, indiquez la source applicable et son rang selon l'article 2 du Code de commerce :
a) Le Code de commerce prévoit un délai de 15 jours pour former opposition au paiement du prix d'un fonds de commerce.
b) Les transitaires du port de Tanger Med facturent habituellement leurs frais en fin de mois ; le contrat ne dit rien.
c) Un contrat de prêt entre deux commerçants ne précise pas qui supporte les frais de remboursement ; ni la loi commerciale ni un usage ne règlent la question.
d) Un usage général du commerce de gros admet une tolérance de poids de 2 %, mais un usage des minotiers de Fès en admet 1 %.
e) La Constitution garantit la liberté d'entreprendre.

<details><summary>Voir le corrigé</summary>

| Situation | Source | Rang et justification |
|---|---|---|
| a) | Loi commerciale (Code de commerce, art. 84) | 1er rang : la loi commerciale s'applique avant tout |
| b) | Usage professionnel local | 2e rang : à défaut de loi et de clause, l'usage du commerce complète le contrat (art. 2) |
| c) | Droit civil (DOC) | 3e rang : le DOC s'applique faute de loi commerciale et d'usage, car il ne contredit pas ici un principe du droit commercial |
| d) | Usage des minotiers de Fès (1 %) | L'usage spécial et local prime l'usage général (art. 3) |
| e) | Constitution (art. 35) | Norme suprême : elle fonde le droit des affaires et s'impose au législateur |

</details>

### Exercice 3 — Quel juge saisir ?

Déterminez la juridiction compétente dans chaque cas :
1. La SA Souss Emballages réclame 350 000 DH à un client commerçant pour des cartons livrés.
2. Un pharmacien de Rabat conteste devant un juge le refus de paiement d'une lettre de change de 85 000 DH.
3. Un fournisseur réclame 12 000 DH de factures impayées à un supermarché.
4. Un particulier veut poursuivre un concessionnaire automobile, qui lui a vendu un véhicule défectueux de 240 000 DH.
5. Deux sociétés ont inséré dans leur contrat une clause compromissoire désignant le CIMAC.

<details><summary>Voir le corrigé</summary>

1. **Tribunal de commerce** : contrat commercial entre commerçants, montant supérieur à 20 000 DH (art. 5 et 6 de la loi 53-95).
2. **Tribunal de commerce** : les actions relatives aux **effets de commerce** relèvent de cette juridiction quelle que soit la qualité des parties, et le montant dépasse le seuil. Le porteur pourrait aussi demander une **injonction de payer** au président du tribunal de commerce.
3. **Tribunal de première instance** : le litige est commercial, mais le principal (12 000 DH) ne dépasse pas **20 000 DH**.
4. Acte **mixte** : le particulier, non-commerçant, peut **choisir** le tribunal de commerce (montant supérieur au seuil) ou le tribunal de première instance.
5. **Arbitrage** : la clause compromissoire écarte les tribunaux étatiques pour le fond ; le juge n'interviendra que pour accorder l'**exequatur** à la sentence ou, le cas échéant, statuer sur un recours.

</details>
`,
    qcm: [
      { q: "Selon l'article premier du Code de commerce, celui-ci régit :", choix: ["Les contrats de travail", "Les actes de commerce et les commerçants", "Les sociétés civiles", "Les impôts des entreprises"], bonne: 1, explication: "Le droit des affaires est plus large que ce noyau commercial." },
      { q: "En matière commerciale, la preuve est en principe :", choix: ["Toujours écrite", "Libre", "Réservée aux actes notariés", "Interdite par témoins"], bonne: 1, explication: "Article 334 du Code de commerce, sauf écrit exigé par la loi ou la convention." },
      { q: "Deux commerçants achètent ensemble une marchandise sans clause particulière. Ils sont :", choix: ["Tenus chacun de la moitié seulement", "Tenus solidairement, car la solidarité se présume", "Libérés si l'un paie la moitié", "Tenus seulement si le contrat est notarié"], bonne: 1, explication: "Article 335 : en matière d'obligations commerciales, la solidarité se présume." },
      { q: "Les obligations nées entre commerçants à l'occasion de leur commerce se prescrivent par :", choix: ["1 an", "3 ans", "5 ans", "15 ans"], bonne: 2, explication: "Article 5 du Code de commerce, sauf dispositions spéciales contraires." },
      { q: "Selon l'article 2 du Code de commerce, à défaut de loi commerciale, le juge applique d'abord :", choix: ["Le droit civil", "Les coutumes et usages du commerce", "La doctrine", "Le droit français"], bonne: 1, explication: "Le droit civil ne vient qu'ensuite, s'il ne contredit pas les principes du droit commercial." },
      { q: "Un usage local des négociants de Casablanca et un usage général du commerce se contredisent. Le juge applique :", choix: ["L'usage général", "L'usage local", "Aucun des deux", "Le plus ancien"], bonne: 1, explication: "Article 3 : les usages spéciaux et locaux priment les usages généraux." },
      { q: "Les tribunaux de commerce ont été créés par :", choix: ["La loi 15-95", "La loi 53-95", "La loi 17-95", "La loi 31-08"], bonne: 1, explication: "Loi 53-95 promulguée en 1997." },
      { q: "Le tribunal de commerce est compétent pour les demandes dont le principal dépasse :", choix: ["5 000 DH", "10 000 DH", "20 000 DH", "100 000 DH"], bonne: 2, explication: "Article 6 de la loi 53-95 ; en dessous, tribunal de première instance." },
      { q: "La loi 95-17 de 2022 organise :", choix: ["Les baux commerciaux", "L'arbitrage et la médiation conventionnelle", "Le chèque", "Le registre du commerce"], bonne: 1, explication: "Elle permet de régler les litiges d'affaires hors des tribunaux étatiques." },
      { q: "L'article 35 de la Constitution de 2011 garantit notamment :", choix: ["Le monopole de l'État sur le commerce", "La liberté d'entreprendre et la libre concurrence", "La gratuité du crédit", "L'interdiction des sociétés étrangères"], bonne: 1, explication: "C'est le fondement constitutionnel du droit des affaires." },
    ],
  },

  2: {
    titre: "Les actes de commerce",
    description: "Actes de commerce en droit marocain : activités des articles 6 à 8, lettre de change et billet à ordre (art. 9), accessoire (art. 10) et actes mixtes (art. 4).",
    resume: md`
## L'essentiel — Les actes de commerce

- La qualification commande le régime : **preuve libre**, **solidarité présumée**, **prescription de 5 ans**, **tribunal de commerce**.
- Critères doctrinaux : **spéculation**, **entremise**, **entreprise** ; aucun ne suffit seul.
- **Par nature** (art. 6) : 18 activités exercées de façon **habituelle ou professionnelle** (achat pour revendre, industrie et artisanat, transport, banque, assurances à primes fixes, entremise, BTP, services, télécoms…).
- Spécificités marocaines : l'**achat d'immeubles pour revendre** et l'**activité artisanale** sont commerciaux.
- Art. 7 : commerce **maritime et aérien** ; art. 8 : liste ouverte par **assimilation**.
- Restent civils : **agriculture**, **professions libérales**, achats pour **usage personnel**, vente de ses propres œuvres.
- **Par la forme** (art. 9) : la **lettre de change** toujours ; le **billet à ordre** seulement s'il résulte d'une **transaction commerciale** ; sociétés commerciales par la forme (SA, SARL, SNC, SCS, SCA).
- **Par accessoire** (art. 10) : actes du commerçant pour son commerce, **présomption simple** ; s'étend aux faits juridiques (concurrence déloyale, accident de livraison).
- **Acte mixte** (art. 4) : règles commerciales appliquées seulement à la partie pour qui l'acte est commercial ; le non-commerçant prouve librement et choisit son juge.
- Méthode : forme → nature (habitude) → accessoire → situation de l'autre partie → conséquences.
`,
    exercices: md`
### Exercice 2 — Commercial ou civil ?

Indiquez pour chaque opération si elle est commerciale, civile ou mixte, et justifiez :
a) Une coopérative laitière vend le lait de ses membres à une centrale laitière.
b) Un architecte de Rabat achète des logiciels de dessin pour son cabinet.
c) Une société de location de voitures loue un véhicule à un touriste.
d) Un particulier achète un terrain, y construit une villa et la vend dix ans plus tard pour partir à l'étranger.
e) Un menuisier qui travaille seul dans son atelier de Salé fabrique et vend des portes sur commande.
f) Un salarié souscrit, pour payer son voyage, un billet à ordre au profit d'une agence de voyages.

<details><summary>Voir le corrigé</summary>

a) **Civil pour la coopérative** (pas de recherche de profit pour elle-même, régime de la loi 112-12), **commercial pour la centrale laitière** qui achète pour transformer et revendre (art. 6-1° et 5°) : acte **mixte**.
b) **Civil pour l'architecte** (profession libérale) ; commercial pour l'éditeur ou le revendeur des logiciels : acte **mixte**.
c) **Commercial pour le loueur** : location de meubles corporels achetés en vue de les louer (art. 6-1°) ; civil pour le touriste : acte **mixte**.
d) **Civil** : l'achat n'a pas été fait « en vue de revendre » ; il s'agit de la gestion d'un patrimoine personnel, sans habitude.
e) **Commercial** : l'activité **artisanale** exercée de façon habituelle figure à l'article 6-5° ; le menuisier est commerçant en droit marocain. Pour ses clients particuliers, l'acte est civil : acte mixte.
f) Le billet à ordre **résulte d'une transaction commerciale** (la vente d'un voyage par une agence, art. 6-13°) : il est commercial même pour le salarié non commerçant (art. 9). Le contrat de voyage lui-même reste mixte.

</details>

### Exercice 3 — Les conséquences d'un acte mixte

M. Alaoui, fonctionnaire, a acheté à crédit un téléviseur de 14 000 DH au magasin Électro Plus (SARL). Il n'existe ni contrat ni facture signée, seulement un message vocal où M. Alaoui reconnaît « devoir encore 8 000 DH ». Électro Plus a par ailleurs vendu un lot de climatiseurs à deux hôtels de Marrakech, la SA Palmeraie et la SA Oasis, qui ont commandé ensemble pour 600 000 DH.
1. Électro Plus peut-elle prouver librement sa créance contre M. Alaoui ?
2. Si M. Alaoui reproche à Électro Plus un vice du téléviseur, comment peut-il prouver ?
3. Électro Plus peut-elle réclamer 600 000 DH à la seule SA Palmeraie ?
4. Dans quel délai Électro Plus doit-elle agir contre M. Alaoui ?

<details><summary>Voir le corrigé</summary>

1. **Non.** L'acte est mixte ; selon l'article 4, les règles commerciales ne sont pas opposables à la partie pour qui l'acte est civil. Électro Plus doit respecter la preuve civile : le montant initial (14 000 DH) dépasse 10 000 DH, un écrit serait en principe exigé (art. 443 DOC). L'aveu de M. Alaoui (message vocal reconnaissant 8 000 DH) peut toutefois être retenu par le juge comme commencement de preuve ou aveu extrajudiciaire, selon les règles du DOC.
2. Par **tout moyen** : contre le commerçant, la preuve est libre (art. 334 combiné avec l'art. 4).
3. **Oui.** Entre Électro Plus et les deux hôtels, l'acte est commercial pour tous ; la **solidarité se présume** entre codébiteurs d'une obligation commerciale (art. 335).
4. **Cinq ans** : l'article 5 vise les obligations nées à l'occasion du commerce entre commerçants **et non-commerçants**.

</details>
`,
    qcm: [
      { q: "L'agriculteur qui vend sa propre récolte réalise :", choix: ["Un acte de commerce par nature", "Un acte civil", "Un acte de commerce par la forme", "Un acte de commerce par accessoire"], bonne: 1, explication: "L'activité agricole ne figure pas à l'article 6 : il n'y a pas d'achat pour revendre." },
      { q: "En droit marocain, l'achat d'immeubles en vue de les revendre est :", choix: ["Toujours civil", "Une activité commerciale de l'article 6", "Interdit aux particuliers", "Commercial seulement pour les sociétés"], bonne: 1, explication: "Article 6-3° du Code de commerce." },
      { q: "La qualité de commerçant s'acquiert par l'exercice des activités de l'article 6 :", choix: ["De façon occasionnelle", "De façon habituelle ou professionnelle", "Uniquement après immatriculation", "Uniquement en société"], bonne: 1, explication: "Un acte isolé ne fait pas un commerçant." },
      { q: "L'article 8 du Code de commerce rend la liste des activités commerciales :", choix: ["Limitative", "Ouverte par assimilation", "Applicable aux seules sociétés", "Facultative"], bonne: 1, explication: "Toute activité assimilable à celles des articles 6 et 7 est commerciale." },
      { q: "La lettre de change est commerciale :", choix: ["Seulement entre commerçants", "Quelle que soit la qualité des signataires", "Seulement si elle dépasse 20 000 DH", "Seulement si elle est acceptée"], bonne: 1, explication: "Article 9 : acte de commerce par la forme." },
      { q: "Le billet à ordre signé par un non-commerçant est commercial :", choix: ["Toujours", "Jamais", "Lorsqu'il résulte d'une transaction commerciale", "S'il est avalisé"], bonne: 2, explication: "Article 9, second tiret." },
      { q: "L'achat d'un camion de livraison par un épicier est :", choix: ["Un acte civil", "Un acte de commerce par accessoire", "Un acte de commerce par la forme", "Un acte mixte pour l'épicier"], bonne: 1, explication: "Article 10 : acte accompli par le commerçant à l'occasion de son commerce." },
      { q: "La présomption de l'article 10 est :", choix: ["Irréfragable", "Simple : le commerçant peut prouver le caractère personnel de l'acte", "Réservée aux sociétés", "Applicable aux salariés"], bonne: 1, explication: "La loi dit : sauf preuve contraire." },
      { q: "Dans un acte mixte, le non-commerçant qui agit contre le commerçant peut prouver :", choix: ["Uniquement par écrit", "Par tout moyen", "Uniquement par acte notarié", "Uniquement par témoins"], bonne: 1, explication: "La liberté de la preuve s'applique contre la partie pour qui l'acte est commercial (art. 4)." },
      { q: "Une SARL qui exploite une exploitation agricole est :", choix: ["Une société civile", "Une société commerciale par la forme", "Une coopérative", "Un groupement d'intérêt économique"], bonne: 1, explication: "La SARL est commerciale quel que soit son objet (loi 5-96)." },
    ],
  },

  3: {
    titre: "Le commerçant : qualité, capacité et obligations",
    description: "Qualité de commerçant : habitude et indépendance, capacité (art. 12 à 17), incompatibilités, registre du commerce, comptabilité et auto-entrepreneur.",
    resume: md`
## L'essentiel — Le commerçant

- **Trois conditions** : activité des art. 6 à 8, exercée de façon **habituelle ou professionnelle**, **en son nom et pour son compte** (indépendance).
- Ne sont pas commerçants : salariés, dirigeants de société, mandataires ; le sont : associé en nom collectif, gérant libre (art. 153).
- **Présomptions** : l'immatriculé est présumé commerçant (art. 58) ; celui qui exerce malgré une interdiction, une déchéance ou une incompatibilité est **réputé commerçant** (art. 11).
- **Capacité** (art. 12) : statut personnel, majorité à **18 ans** ; mineur autorisé ou émancipé (tarchid, dès 16 ans) avec **inscription au registre** (art. 13) ; femme mariée libre, convention contraire **nulle** (art. 17).
- **Incompatibilités** (fonctionnaires, magistrats, professions libérales), **interdictions**, **déchéances** : sanctions pour l'auteur, actes valables pour les tiers.
- **Compte bancaire** obligatoire (art. 18) ; **comptabilité** selon la loi 9-88, conservation **10 ans**.
- Force probante : comptabilité régulière admise **entre commerçants** (art. 19) ; opposable au commerçant **même irrégulière** (art. 20).
- **Registre du commerce** : registres locaux (greffe) et registre central (**OMPIC**, certificat négatif) ; électronique depuis la loi **89-17** ; immatriculation dans les **3 mois** (art. 75), modifications dans le **mois**.
- Non-immatriculé : ne peut se prévaloir de sa qualité mais en supporte les obligations (art. 59) ; amende de **1 000 à 5 000 DH** après mise en demeure d'un mois (art. 62).
- **Auto-entrepreneur** (loi 114-13) : plafonds de CA de **500 000 DH** (commerce, industrie, artisanat) et **200 000 DH** (services), pas d'immatriculation au RC, comptabilité allégée, impôt sur le CA encaissé.
`,
    exercices: md`
### Exercice 2 — Commerçant ou non ?

Dites si chaque personne a la qualité de commerçant, en justifiant :
a) Nadia, directrice générale salariée de la SA Maghreb Textile.
b) Hicham, associé d'une SNC qui exploite une station-service à Kénitra.
c) Rim, qui loue en gérance libre le restaurant d'un tiers à Essaouira.
d) Brahim, notaire, qui achète et revend chaque année plusieurs terrains.
e) Fatima, inscrite au registre du commerce depuis 2015 mais qui a cessé toute activité en 2020 sans se faire radier.
f) Saïd, qui vend une seule fois la voiture qu'il utilisait pour aller au travail.

<details><summary>Voir le corrigé</summary>

a) **Non** : dirigeante salariée, elle agit au nom de la société ; c'est la SA qui est commerçante.
b) **Oui** : l'associé en nom collectif a la qualité de commerçant et répond indéfiniment et solidairement des dettes sociales (loi 5-96).
c) **Oui** : le gérant libre exploite le fonds à ses risques et périls ; l'article 153 lui reconnaît la qualité de commerçant.
d) **Oui**, par application de l'**article 11** : l'achat d'immeubles pour revendre est commercial (art. 6-3°) et l'habitude est établie ; l'incompatibilité avec la fonction de notaire ne l'empêche pas d'être réputé commerçant, mais l'expose à des sanctions disciplinaires.
e) **Présumée commerçante** (art. 58) tant qu'elle reste immatriculée ; elle peut renverser la présomption en prouvant la cessation d'activité, mais elle a intérêt à demander sa **radiation** pour ne plus être exposée à cette présomption.
f) **Non** : acte isolé, achat initial fait pour un usage personnel et non en vue de revendre.

</details>

### Exercice 3 — Les délais du registre du commerce

La SARL Rif Logistique a été constituée le 10 janvier 2026 à Tanger. Son gérant a changé le 3 mars 2026, et le siège a été transféré le 20 avril 2026. Le 15 juin 2026, aucune formalité n'a été faite.
1. Jusqu'à quelle date la société devait-elle demander son immatriculation ?
2. Jusqu'à quelle date fallait-il inscrire le changement de gérant et le transfert du siège ?
3. Le nouveau gérant peut-il opposer à un fournisseur la révocation de l'ancien gérant, qui a continué à commander au nom de la société ?
4. Quelle sanction l'administration peut-elle infliger, et à quelle condition ?

<details><summary>Voir le corrigé</summary>

1. Dans les **trois mois** de la constitution (art. 75) : au plus tard le **10 avril 2026**.
2. Les inscriptions sans délai spécial doivent être requises dans le **mois** de l'acte ou du fait (art. 75, dernier alinéa) : au plus tard le **3 avril 2026** pour le changement de gérant et le **20 mai 2026** pour le transfert du siège.
3. **Non**, en principe : seuls les faits et actes régulièrement inscrits sont **opposables aux tiers** (art. 61). La société reste engagée envers le fournisseur de bonne foi, sauf à prouver que celui-ci connaissait la révocation au moment où il a traité.
4. Une amende de **1 000 à 5 000 DH** frappant le gérant tenu de requérir les inscriptions (art. 62), mais seulement à l'expiration d'un délai d'**un mois** après une **mise en demeure** de l'administration restée sans effet.

</details>
`,
    qcm: [
      { q: "Le directeur général salarié d'une société anonyme est :", choix: ["Commerçant", "Non commerçant : c'est la société qui est commerçante", "Commerçant s'il détient des actions", "Commerçant s'il signe des chèques"], bonne: 1, explication: "Il agit au nom et pour le compte de la société, sans indépendance." },
      { q: "Toute personne immatriculée au registre du commerce est :", choix: ["Définitivement commerçante", "Présumée commerçante, sauf preuve contraire", "Dispensée de comptabilité", "Exemptée de procédures collectives"], bonne: 1, explication: "Article 58 du Code de commerce." },
      { q: "Un fonctionnaire qui exerce habituellement le commerce malgré l'incompatibilité est :", choix: ["Jamais commerçant", "Réputé commerçant", "Commerçant seulement s'il est immatriculé", "Protégé contre la liquidation judiciaire"], bonne: 1, explication: "Article 11 du Code de commerce." },
      { q: "La femme mariée qui veut exercer le commerce :", choix: ["Doit obtenir l'autorisation de son mari", "N'a besoin d'aucune autorisation de son mari", "Doit obtenir l'autorisation du juge", "Doit exercer en société"], bonne: 1, explication: "Article 17 : toute convention contraire est réputée nulle." },
      { q: "L'autorisation du mineur à exercer le commerce doit être :", choix: ["Publiée au Bulletin officiel", "Inscrite au registre du commerce", "Approuvée par la CNSS", "Notifiée à Bank Al-Maghrib"], bonne: 1, explication: "Article 13 du Code de commerce." },
      { q: "L'immatriculation d'une personne physique au registre du commerce doit être demandée dans :", choix: ["Les 15 jours", "Le mois", "Les 3 mois", "L'année"], bonne: 2, explication: "Article 75 : trois mois après l'ouverture de l'établissement ou l'acquisition du fonds." },
      { q: "Le registre central du commerce est tenu par :", choix: ["Bank Al-Maghrib", "L'OMPIC", "La DGI", "Le tribunal de commerce de Rabat"], bonne: 1, explication: "L'OMPIC délivre notamment le certificat négatif." },
      { q: "Les documents comptables du commerçant doivent être conservés pendant :", choix: ["3 ans", "5 ans", "10 ans", "20 ans"], bonne: 2, explication: "Loi 9-88 relative aux obligations comptables des commerçants." },
      { q: "Les tiers peuvent opposer au commerçant le contenu de sa comptabilité :", choix: ["Seulement si elle est régulière", "Même si elle est irrégulièrement tenue", "Seulement devant un arbitre", "Jamais"], bonne: 1, explication: "Article 20 du Code de commerce." },
      { q: "Le plafond de chiffre d'affaires de l'auto-entrepreneur pour une activité de services est de :", choix: ["100 000 DH", "200 000 DH", "500 000 DH", "1 000 000 DH"], bonne: 1, explication: "500 000 DH pour les activités commerciales, industrielles et artisanales (loi 114-13)." },
    ],
  },

  4: {
    titre: "Le fonds de commerce et le bail commercial",
    description: "Fonds de commerce : définition (art. 79), clientèle et autres éléments (art. 80), droit au bail, renouvellement et indemnité d'éviction (loi 49-16).",
    resume: md`
## L'essentiel — Fonds de commerce et bail commercial

- **Fonds de commerce** (art. 79) : **bien meuble incorporel**, ensemble de biens mobiliers affectés à une activité commerciale ; universalité de fait **sans créances ni dettes**.
- **Élément obligatoire** (art. 80) : la **clientèle** (attachée à la personne) et l'**achalandage** (attiré par l'emplacement) ; clientèle réelle, actuelle et **propre**, avec autonomie de l'exploitant.
- **Incorporels** : nom commercial, enseigne, **droit au bail**, marques, brevets, dessins et modèles (loi 17-97, OMPIC, marque protégée 10 ans renouvelables), licences transmissibles.
- **Corporels** : matériel, outillage, mobilier, **marchandises** (exclues du nantissement).
- Exclus : **immeubles**, créances, dettes ; mais les **contrats de travail** se poursuivent avec l'acquéreur (art. 19 du Code du travail).
- Protection : action en **concurrence déloyale** (art. 84 DOC), action en contrefaçon, garantie d'éviction et clause de **non-concurrence** limitée.
- **Loi 49-16** : bail **écrit à date certaine** (art. 3), état des lieux.
- **Renouvellement** : après **2 ans** de jouissance effective et continue (art. 4) ou versement d'un **pas-de-porte** écrit ; droit d'ordre public.
- **Indemnité d'éviction** (art. 7) : valeur du fonds sur la base des **déclarations fiscales des 4 dernières années** + aménagements + éléments perdus + frais de déménagement.
- Dispense d'indemnité : loyers impayés après mise en demeure de **15 jours**, détérioration, changement d'activité non autorisé, immeuble menaçant ruine.
`,
    exercices: md`
### Exercice 2 — Élément du fonds ou non ?

Pour la boutique de prêt-à-porter « Dar Nour » à Rabat, dites si chaque élément fait partie du fonds de commerce, et à quel titre :
a) La marque « Nour Couture » déposée à l'OMPIC.
b) Les murs de la boutique, dont la commerçante est propriétaire.
c) Un stock de 400 caftans.
d) Une créance de 35 000 DH sur une cliente.
e) Le compte Instagram de la boutique, suivi par 50 000 personnes.
f) Un emprunt bancaire de 200 000 DH.
g) Le contrat de travail de la couturière.

<details><summary>Voir le corrigé</summary>

a) **Oui**, élément incorporel (propriété industrielle, art. 80 ; loi 17-97).
b) **Non** : un immeuble n'est jamais un élément du fonds, bien meuble (art. 79).
c) **Oui**, élément corporel (marchandises), mais exclu d'un éventuel nantissement (art. 107).
d) **Non** : le fonds ne comprend pas les créances ; elle reste à la vendeuse sauf cession expresse.
e) **Oui**, en pratique : il participe à la **clientèle** et peut être assimilé aux éléments incorporels attachés au fonds ; l'acte de vente doit le prévoir expressément.
f) **Non** : le fonds n'a pas de passif ; l'emprunt reste une dette personnelle de la vendeuse.
g) Il ne fait pas partie du fonds au sens strict, mais il est **transmis par la loi** à l'acquéreur (art. 19 du Code du travail).

</details>

### Exercice 3 — Renouvellement du bail et indemnité

Trois locataires de Marrakech reçoivent un refus de renouvellement :
1. **Anas** exploite un magasin de téléphonie depuis 18 mois ; il n'a pas versé de pas-de-porte.
2. **Hind** exploite une boulangerie depuis 6 ans ; elle doit quatre mois de loyers et n'a pas réagi à la mise en demeure reçue il y a un mois.
3. **Mehdi** exploite un restaurant depuis 10 ans, loyers à jour. Bénéfices déclarés : 300 000, 280 000, 320 000 et 340 000 DH sur les quatre dernières années. L'expert valorise le fonds à 2,5 fois le bénéfice moyen ; aménagements justifiés : 150 000 DH ; déménagement : 30 000 DH.

Indiquez pour chacun s'il a droit au renouvellement ou à une indemnité, et chiffrez l'indemnité de Mehdi.

<details><summary>Voir le corrigé</summary>

1. **Anas** : moins de **deux ans** de jouissance et pas de pas-de-porte : il n'a pas encore droit au renouvellement (art. 4 de la loi 49-16). Il ne peut pas réclamer d'indemnité d'éviction.
2. **Hind** : elle remplit la condition de durée, mais le **non-paiement des loyers** malgré une mise en demeure restée sans effet au-delà du délai de 15 jours permet au bailleur de refuser **sans indemnité**.
3. **Mehdi** : droit au renouvellement (10 ans de jouissance) ; le refus ouvre droit à une **indemnité d'éviction** (art. 7).

Bénéfice moyen : $(300\,000 + 280\,000 + 320\,000 + 340\,000) / 4 = 1\,240\,000 / 4 = 310\,000$ DH.
Valeur du fonds : $310\,000 \times 2{,}5 = 775\,000$ DH.
Indemnité : $775\,000 + 150\,000 + 30\,000 = \mathbf{955\,000\ DH}$.

</details>
`,
    qcm: [
      { q: "Selon l'article 79, le fonds de commerce est :", choix: ["Un immeuble", "Un bien meuble incorporel", "Une personne morale", "Un contrat"], bonne: 1, explication: "Il est constitué d'un ensemble de biens mobiliers affectés à une activité commerciale." },
      { q: "Le seul élément obligatoire du fonds de commerce est :", choix: ["Le droit au bail", "La clientèle et l'achalandage", "Le matériel", "La marque"], bonne: 1, explication: "Article 80 : sans clientèle, pas de fonds." },
      { q: "L'achalandage désigne :", choix: ["Les clients fidèles au commerçant", "Les clients attirés par l'emplacement", "Le stock de marchandises", "Les fournisseurs du commerçant"], bonne: 1, explication: "La clientèle est attachée à la personne, l'achalandage à l'emplacement." },
      { q: "L'acquéreur d'un fonds de commerce reprend en principe :", choix: ["Toutes les dettes du vendeur", "Aucune dette, le fonds n'ayant pas de passif", "Les seules dettes fiscales", "Les dettes de moins d'un an"], bonne: 1, explication: "Le fonds est une universalité de fait sans créances ni dettes." },
      { q: "En cas de vente du fonds, les contrats de travail des salariés :", choix: ["Prennent fin automatiquement", "Se poursuivent avec l'acquéreur", "Sont suspendus six mois", "Doivent être renégociés"], bonne: 1, explication: "Article 19 du Code du travail." },
      { q: "La concurrence déloyale est sanctionnée notamment sur le fondement de :", choix: ["L'article 84 du DOC", "L'article 335 du Code de commerce", "La loi 9-88", "La loi 114-13"], bonne: 0, explication: "Elle est aussi visée par la loi 17-97 sur la propriété industrielle." },
      { q: "La loi 49-16 exige que le bail commercial soit conclu :", choix: ["Verbalement", "Par écrit et à date certaine", "Devant un notaire uniquement", "Pour 9 ans minimum"], bonne: 1, explication: "Article 3 de la loi 49-16, avec un état des lieux." },
      { q: "Le locataire a droit au renouvellement après une jouissance effective d'au moins :", choix: ["6 mois", "1 an", "2 ans", "5 ans"], bonne: 2, explication: "Article 4 de la loi 49-16, ou dès le versement d'un pas-de-porte écrit." },
      { q: "La valeur du fonds dans l'indemnité d'éviction est calculée à partir :", choix: ["Du loyer annuel", "Des déclarations fiscales des quatre dernières années", "Du capital social", "Du prix d'achat du local"], bonne: 1, explication: "Article 7 de la loi 49-16." },
      { q: "Le bailleur peut refuser le renouvellement sans indemnité notamment si :", choix: ["Il veut louer plus cher", "Le locataire n'a pas payé ses loyers malgré une mise en demeure", "Le locataire a changé de comptable", "Le bail a plus de cinq ans"], bonne: 1, explication: "C'est l'un des motifs légaux de dispense d'indemnité." },
    ],
  },

  5: {
    titre: "Les opérations sur le fonds de commerce : vente, nantissement et location-gérance",
    description: "Vente du fonds de commerce (art. 81 à 103), délais d'opposition, privilège du vendeur, apport, nantissement (art. 106 à 110) et gérance libre (art. 152 à 158).",
    resume: md`
## L'essentiel — Opérations sur le fonds de commerce

- **Vente** (art. 81) : acte authentique ou sous seing privé ; prix **déposé** chez un dépositaire habilité ; mentions : vendeur, prix d'acquisition ventilé (incorporels, matériel, marchandises), inscriptions, **bail**, origine de propriété.
- Mention absente ou inexacte : **annulation** ou **réduction du prix** si préjudice, action dans **1 an** (art. 82).
- **Publicité** (art. 83) : dépôt au greffe dans les **15 jours**, inscription au registre, insertions au **BO** et dans un journal d'annonces légales, seconde insertion **entre le 8e et le 15e jour**.
- **Opposition** des créanciers du vendeur dans les **15 jours après la seconde insertion** (art. 84) ; l'acquéreur qui paie trop tôt **n'est pas libéré** (art. 89).
- **Privilège du vendeur** : inscription dans les **15 jours** à peine de nullité (art. 92) ; prix garantis distinctement ; paiements partiels imputés sur **marchandises puis matériel** (art. 91) ; action résolutoire si réservée (art. 99).
- **Surenchère du sixième** dans les **30 jours** de la seconde insertion, sur le prix hors matériel et marchandises (art. 94).
- **Apport en société** : déclaration des créances en 15 jours ; à défaut d'annulation demandée en 30 jours, la société est **solidaire** du passif déclaré (art. 104 et 105).
- **Nantissement** : tous éléments **sauf marchandises** (art. 107) ; inscription en **15 jours** à peine de nullité (art. 109) ; rang par date ; validité **5 ans** ; pas d'attribution du fonds, vente forcée (art. 106 et 114).
- **Gérance libre** : gérant **commerçant** (art. 153), publication en **15 jours** ; bailleur **solidaire** jusqu'à la publication et **6 mois** après (art. 155) ; dettes exigibles à la fin (art. 157) ; nullité inopposable aux tiers (art. 158).
- Vendeur ou loueur non radié : **solidaire** des dettes du successeur ou du locataire (art. 60).
`,
    exercices: md`
### Exercice 2 — La gérance libre de l'hôtel Atlas Bleu

Mme Ouazzani, propriétaire de l'hôtel « Atlas Bleu » à Ifrane, le donne en gérance libre à M. Lahlou par contrat du 1er février 2026, publié au Bulletin officiel le 25 février 2026. M. Lahlou ne s'est pas immatriculé au registre du commerce. Il contracte trois dettes d'exploitation : 60 000 DH auprès d'un fournisseur de linge le 20 février, 90 000 DH auprès d'un chauffagiste le 10 juillet, 45 000 DH auprès d'un grossiste le 15 septembre 2026. Il cesse de payer en octobre.
1. La publication est-elle régulière ?
2. Quelles dettes les créanciers peuvent-ils réclamer à Mme Ouazzani ?
3. Quelles sont les conséquences du défaut d'immatriculation de M. Lahlou ?
4. Que se passe-t-il pour les dettes si le contrat prend fin le 31 octobre 2026 ?

<details><summary>Voir le corrigé</summary>

1. **Non** : le contrat devait être publié dans la **quinzaine** de sa date (art. 153), soit avant le 16 février 2026. La publication du 25 février est tardive, mais elle fait tout de même courir le délai de six mois de l'article 155.
2. Le bailleur est solidaire des dettes d'exploitation **jusqu'à la publication** et pendant **six mois** après, soit jusqu'au **25 août 2026** (art. 155). Mme Ouazzani peut donc être poursuivie pour la dette du 20 février (60 000 DH) et celle du 10 juillet (90 000 DH), soit **150 000 DH**. La dette du 15 septembre (45 000 DH) relève du seul gérant.
3. M. Lahlou a la qualité de commerçant (art. 153) et devait s'immatriculer dans les trois mois (art. 75). Non immatriculé, il ne peut pas se prévaloir de sa qualité à l'égard des tiers, mais il en supporte toutes les obligations (art. 59) et s'expose à l'amende de l'article 62 après mise en demeure. Il doit aussi mentionner sa qualité de gérant libre sur ses documents (art. 154).
4. La fin de la gérance libre rend **immédiatement exigibles** les dettes d'exploitation contractées par le gérant (art. 157) ; elle doit faire l'objet des mêmes mesures de publicité que le contrat (art. 153).

</details>

### Exercice 3 — Les créanciers nantis de la SARL Rif Bois

La SARL Rif Bois (Tétouan) a consenti trois nantissements sur son fonds de commerce :
- à la banque A, acte du 5 janvier 2026, inscrit le 15 janvier 2026, pour 400 000 DH ;
- à la banque B, acte du 1er février 2026, inscrit le 25 février 2026, pour 300 000 DH ;
- à la société de financement C, acte du 10 janvier 2026, inscrit le 15 janvier 2026, pour 200 000 DH.

Le nantissement de la banque A porte sur « le fonds » sans autre précision. La banque A souhaite se faire attribuer le fonds en paiement.
1. Quels nantissements sont valables ?
2. Classez les créanciers nantis.
3. Sur quels éléments porte le nantissement de la banque A ?
4. La banque A peut-elle se faire attribuer le fonds ? Quelle est la procédure ?

<details><summary>Voir le corrigé</summary>

1. L'inscription doit être prise dans les **15 jours** de l'acte, à peine de nullité (art. 109). Banque A : 10 jours, **valable**. Banque B : 24 jours, **nul** ; la banque B devient créancière chirographaire. Société C : 5 jours, **valable**.
2. Le rang dépend de la date d'**inscription** (art. 110) : A et C, inscrits le même jour (15 janvier), **viennent en concurrence** au premier rang ; B n'a pas de rang de créancier nanti.
3. À défaut de désignation précise, le nantissement ne comprend que le **nom commercial, l'enseigne, le droit au bail, la clientèle et l'achalandage** (art. 107) ; il ne porte ni sur le matériel ni, en tout état de cause, sur les marchandises.
4. **Non** : le nantissement ne donne pas au créancier le droit de se faire attribuer le fonds en paiement (art. 106). La banque doit faire **ordonner la vente** du fonds par le tribunal, **huit jours** après une sommation de payer restée infructueuse (art. 114), puis être payée sur le prix selon son rang.

</details>
`,
    qcm: [
      { q: "Le prix de vente d'un fonds de commerce doit être :", choix: ["Remis en espèces au vendeur", "Déposé auprès d'une instance habilitée à conserver les dépôts", "Versé à Bank Al-Maghrib", "Payé au bailleur"], bonne: 1, explication: "Article 81 : le montant est déposé, ce qui permet les oppositions." },
      { q: "L'action de l'acheteur pour mention absente ou inexacte dans l'acte doit être intentée dans :", choix: ["15 jours", "3 mois", "1 an", "5 ans"], bonne: 2, explication: "Article 82 du Code de commerce." },
      { q: "L'acte de vente doit être déposé au greffe dans :", choix: ["Les 8 jours", "Les 15 jours de sa date", "Le mois", "Les 3 mois"], bonne: 1, explication: "Article 83, après enregistrement." },
      { q: "La seconde insertion de l'extrait de vente intervient :", choix: ["Le lendemain de la première", "Entre le 8e et le 15e jour après la première", "Un mois après la première", "Au choix du vendeur"], bonne: 1, explication: "Article 83, à la diligence de l'acquéreur." },
      { q: "Les créanciers du vendeur peuvent former opposition au paiement du prix :", choix: ["Dans les 15 jours après la seconde insertion", "Dans les 30 jours après l'acte", "À tout moment", "Seulement si leur créance est exigible"], bonne: 0, explication: "Article 84, que la créance soit exigible ou non." },
      { q: "L'acquéreur qui paie le vendeur avant l'expiration du délai d'opposition :", choix: ["Est libéré", "N'est pas libéré à l'égard des créanciers", "Obtient une réduction du prix", "Devient créancier du vendeur"], bonne: 1, explication: "Article 89 : il risque de payer deux fois." },
      { q: "Les paiements partiels non comptants du prix du fonds s'imputent d'abord sur :", choix: ["Les éléments incorporels", "Les marchandises, puis le matériel", "Le matériel, puis les incorporels", "Le droit au bail"], bonne: 1, explication: "Article 91 : le privilège reste ainsi sur les incorporels." },
      { q: "Le nantissement d'un fonds de commerce ne peut pas porter sur :", choix: ["La clientèle", "Le droit au bail", "Les marchandises", "Le matériel"], bonne: 2, explication: "Article 107 : marchandises exclues." },
      { q: "L'inscription d'un nantissement de fonds de commerce doit être prise dans :", choix: ["Les 8 jours", "Les 15 jours de l'acte, à peine de nullité", "Les 3 mois", "L'année"], bonne: 1, explication: "Article 109 du Code de commerce." },
      { q: "Le bailleur d'un fonds en gérance libre est solidaire des dettes d'exploitation du gérant :", choix: ["Jamais", "Jusqu'à la publication du contrat et pendant six mois après", "Pendant toute la durée du contrat", "Seulement pour les dettes fiscales"], bonne: 1, explication: "Article 155 du Code de commerce." },
    ],
  },

  6: {
    titre: "La lettre de change",
    description: "Lettre de change au Maroc : mentions obligatoires (art. 159), provision, acceptation, endossement, aval, protêt, recours et prescriptions (art. 228).",
    resume: md`
## L'essentiel — La lettre de change

- Trois personnes : **tireur** (créancier du tiré, débiteur du bénéficiaire), **tiré**, **bénéficiaire** ; fonctions de paiement, de **crédit** (escompte) et de garantie ; acte de commerce **par la forme** (art. 9).
- **8 mentions** (art. 159) : dénomination, mandat pur et simple de payer une somme déterminée, tiré, échéance, lieu de paiement, bénéficiaire, date et lieu de création, nom et signature du tireur.
- Suppléances (art. 160) : sans échéance, payable **à vue** ; lieux tirés des adresses à côté des noms ; à défaut, simple titre ordinaire de créance.
- Tireur garant de l'acceptation (exonération possible) et du **paiement** (exonération réputée non écrite, art. 165).
- **Provision** (art. 166) : créance du tireur sur le tiré, exigible **à l'échéance**, transmise aux porteurs ; l'acceptation la suppose.
- **Acceptation** : le tiré devient débiteur cambiaire principal ; refus = recours **avant l'échéance** (art. 196).
- **Endossement** (art. 167) : pur et simple, partiel nul ; translatif, de procuration ou pignoratif ; **inopposabilité des exceptions** au porteur de bonne foi (art. 171).
- **Aval** (art. 180) : « bon pour aval » ; sans indication, **pour le tireur** ; avaliseur tenu comme le garanti.
- Impayé : **protêt** dans les **5 jours ouvrables** (art. 197), sauf clause **retour sans frais** ; avis en **6 jours ouvrables** (art. 199) ; tous les signataires **solidaires** (art. 201) ; montant + intérêts légaux + frais (art. 202).
- Porteur négligent **déchu** sauf contre l'**accepteur** (art. 206) ; **prescription** : **3 ans** contre l'accepteur, **1 an** contre endosseurs et tireur, **6 mois** entre endosseurs (art. 228).
`,
    exercices: md`
### Exercice 2 — Lettre de change ou non ?

Les titres suivants valent-ils comme lettre de change ? Justifiez.
a) Le titre ne précise pas l'échéance.
b) Le titre porte « Payez la somme de 50 000 DH si la marchandise est conforme ».
c) Le lieu de paiement n'est pas indiqué ; l'adresse du tiré à Oujda figure à côté de son nom.
d) Le tireur n'a pas signé.
e) Le titre est payable « en trois fractions, les 30 avril, 31 mai et 30 juin ».
f) La lettre est tirée par la SARL Atlas Bois à l'ordre d'elle-même, sur l'un de ses clients.

<details><summary>Voir le corrigé</summary>

a) **Oui** : la lettre sans échéance est considérée comme **payable à vue** (art. 160).
b) **Non** : le mandat de payer doit être **pur et simple** (art. 159-2°) ; une condition le rend invalide comme lettre de change. Le titre peut valoir reconnaissance de dette ordinaire.
c) **Oui** : le lieu désigné à côté du nom du tiré est réputé être le **lieu de paiement** (art. 160).
d) **Non** : la signature du tireur est une mention obligatoire (art. 159-8°) que la loi ne supplée pas.
e) **Non** : les lettres à **échéances successives sont nulles** (art. 181).
f) **Oui** : la lettre de change peut être **à l'ordre du tireur lui-même** (art. 161) ; c'est la pratique courante du fournisseur qui tire sur son client puis endosse la lettre à sa banque.

</details>

### Exercice 3 — Escompte et recours de la banque

Reprenez la lettre de 300 000 DH du cas Saïss Confection. Textima l'a remise à l'escompte à la Banque Al Wifaq 60 jours avant l'échéance. Conditions de la banque : taux d'escompte 7,2 % par an (année de 360 jours), commission fixe 150 DH, TVA de 10 % sur les intérêts et commissions bancaires.
1. Calculez l'agio et le montant net crédité à Textima.
2. Quelle est la nature juridique de l'escompte ? La banque peut-elle se retourner contre Textima en cas d'impayé ?
3. Textima a remboursé la banque le 20 juillet 2026. Dans quel délai doit-elle agir contre Sofitex ?

<details><summary>Voir le corrigé</summary>

**1)** Escompte : $300\,000 \times 0{,}072 \times \frac{60}{360} = 3\,600$ DH. Commission : 150 DH. TVA : $(3\,600 + 150) \times 10\,\% = 375$ DH.

| Élément | Montant (DH) |
|---|---:|
| Escompte | 3 600 |
| Commission | 150 |
| TVA (10 %) | 375 |
| **Agio TTC** | **4 125** |
| **Net crédité** | **295 875** |

**2)** Selon l'**article 526** du Code de commerce, l'escompte est la convention par laquelle la banque paie par anticipation au porteur le montant d'effets de commerce que celui-ci lui cède, **à charge pour lui d'en rembourser le montant à défaut de paiement** par le principal obligé. L'escompte est donc consenti « **sauf bonne fin** » : en cas d'impayé, la banque peut débiter le compte de Textima. Elle dispose en outre de ses droits cambiaires contre tous les signataires, dans la limite des déchéances encourues.

**3)** L'action d'un endosseur contre le tireur se prescrit par **six mois** à partir du jour où il a remboursé la lettre (art. 228) : Textima doit agir contre Sofitex au plus tard le **20 janvier 2027**.

</details>
`,
    qcm: [
      { q: "Dans une lettre de change, la personne qui reçoit l'ordre de payer est :", choix: ["Le tireur", "Le tiré", "Le bénéficiaire", "L'avaliseur"], bonne: 1, explication: "Le tireur donne l'ordre, le tiré paie, le bénéficiaire reçoit." },
      { q: "Une lettre de change qui n'indique pas son échéance est :", choix: ["Nulle", "Payable à vue", "Payable à un mois", "Payable à la fin de l'année"], bonne: 1, explication: "Article 160 du Code de commerce." },
      { q: "La provision doit exister :", choix: ["À la création de la lettre", "À l'échéance", "Au moment de l'endossement", "Au moment du protêt"], bonne: 1, explication: "Article 166 : créance certaine, liquide et exigible à l'échéance." },
      { q: "Le tireur qui insère une clause l'exonérant de la garantie du paiement :", choix: ["Est exonéré", "Voit la clause réputée non écrite", "Rend la lettre nulle", "Transfère la garantie au tiré"], bonne: 1, explication: "Article 165 : il peut seulement s'exonérer de la garantie de l'acceptation." },
      { q: "L'endossement partiel d'une lettre de change est :", choix: ["Valable", "Nul", "Valable si la banque l'accepte", "Valable entre commerçants"], bonne: 1, explication: "Article 167 du Code de commerce." },
      { q: "Le tiré accepteur poursuivi par un porteur de bonne foi peut lui opposer :", choix: ["Le défaut de la marchandise livrée par le tireur", "La compensation avec une dette du tireur", "Un vice de forme du titre", "Le paiement déjà fait au tireur"], bonne: 2, explication: "Les exceptions personnelles sont inopposables (art. 171) ; celles qui tiennent au titre restent opposables." },
      { q: "Un aval qui n'indique pas pour qui il est donné est réputé donné pour :", choix: ["Le tiré", "Le dernier endosseur", "Le tireur", "Le bénéficiaire"], bonne: 2, explication: "Article 180 du Code de commerce." },
      { q: "Le protêt faute de paiement doit être dressé dans :", choix: ["Les 2 jours ouvrables", "Les 5 jours ouvrables qui suivent le jour de paiement", "Les 15 jours", "Le mois"], bonne: 1, explication: "Article 197 du Code de commerce." },
      { q: "Le porteur qui n'a pas fait dresser le protêt dans les délais conserve son recours contre :", choix: ["Les endosseurs", "Le tireur dans tous les cas", "L'accepteur", "Personne"], bonne: 2, explication: "Article 206 : la déchéance ne joue jamais contre l'accepteur." },
      { q: "L'action contre l'accepteur d'une lettre de change se prescrit par :", choix: ["6 mois", "1 an", "3 ans", "5 ans"], bonne: 2, explication: "Article 228 : 3 ans à compter de l'échéance." },
    ],
  },

  7: {
    titre: "Le billet à ordre et le chèque",
    description: "Billet à ordre et chèque au Maroc : provision dès l'émission, délai de 20 jours, opposition, paiement partiel, injonction bancaire et réforme 71-24.",
    resume: md`
## L'essentiel — Billet à ordre et chèque

- **Billet à ordre** : **promesse** de payer du **souscripteur** au bénéficiaire ; 7 mentions (art. 232) ; sans échéance, payable à vue (art. 233).
- Renvoi au régime de la lettre de change (art. 234) ; souscripteur tenu **comme un accepteur** (art. 237) : prescription de **3 ans** ; aval sans indication **pour le souscripteur** (art. 236) ; ni acceptation ni provision.
- **Chèque** : ordre de payer **à vue** donné à un **établissement bancaire** (art. 241, 267) ; pas d'intérêts (art. 245) ; 6 mentions (art. 239), bénéficiaire facultatif, formule bancaire obligatoire (art. 240).
- **Provision dès l'émission** : préalable, suffisante, disponible ; pas d'acceptation, mais **certification** possible avec blocage (art. 242).
- **Présentation** : **20 jours** (émis et payable au Maroc), **60 jours** (émis à l'étranger) depuis la date du chèque (art. 268) ; chèque **postdaté** payable dès la présentation (art. 267).
- **Paiement partiel** obligatoire jusqu'à la provision, **non refusable** par le porteur (art. 273).
- **Opposition** limitée : perte, vol, utilisation frauduleuse, falsification, procédure collective du porteur (art. 271) ; sinon **mainlevée** par le président du tribunal.
- Protêt **avant la fin du délai de présentation** (art. 284) ; avis en **8 jours ouvrables** (art. 285) ; prescription **6 mois** (porteur contre tireur et endosseurs), **1 an** contre le tiré (art. 295).
- **Sans provision** : injonction bancaire, interdiction d'émettre **10 ans** (art. 313) ; régularisation par paiement + amende fiscale de **5 %, 10 %, 20 %** (art. 314) ; incidents centralisés par **Bank Al-Maghrib**.
- **Loi 71-24** (2026) : invitation du parquet à régulariser en **30 jours** renouvelables une fois, paiement + amende de **2 %** qui éteint l'action publique, pas de poursuite entre époux et entre ascendants et descendants, chèque de garantie encadré.
`,
    exercices: md`
### Exercice 2 — Le billet à ordre de la SARL Doukkala Agri

Le 2 février 2026, la SARL Doukkala Agri (El Jadida) souscrit un billet à ordre de 120 000 DH, payable le 31 mai 2026, au profit de la SA Agrimat, qui lui a vendu un tracteur. M. Rami signe au recto « bon pour aval » sans préciser pour qui. Agrimat endosse le billet à sa banque. À l'échéance, Doukkala Agri ne paie pas, en invoquant une panne du tracteur.
1. Qui est le débiteur principal ? Pour qui M. Rami s'est-il engagé ?
2. Doukkala Agri peut-elle opposer la panne à la banque ?
3. Le billet est-il commercial ?
4. Jusqu'à quand la banque peut-elle agir contre Doukkala Agri ?

<details><summary>Voir le corrigé</summary>

1. Le **souscripteur**, Doukkala Agri, est obligé de la même manière que l'accepteur d'une lettre de change (art. 237). L'aval sans indication est réputé donné **pour le souscripteur** (art. 236) : M. Rami garantit Doukkala Agri.
2. **Non** : la panne est une exception tirée des rapports personnels entre Doukkala Agri et Agrimat ; elle est **inopposable** au porteur de bonne foi (art. 171, applicable par renvoi de l'art. 234).
3. **Oui** : il est souscrit par une société commerciale pour son activité et résulte d'une **transaction commerciale** (achat d'un tracteur), conformément aux articles 9 et 10.
4. L'action contre le souscripteur se prescrit par **trois ans** à compter de l'échéance (art. 228 par renvoi de l'art. 234) : jusqu'au **31 mai 2029**.

</details>

### Exercice 3 — Vrai ou faux sur le chèque

Dites si chaque affirmation est vraie ou fausse et justifiez :
a) Un chèque peut être tiré sur une société commerciale qui n'est pas une banque.
b) Le tireur peut faire opposition s'il a perdu son chéquier.
c) La banque peut refuser de payer un chèque présenté 30 jours après sa date, même si la provision existe.
d) Un chèque peut stipuler des intérêts de 5 % par an.
e) Une banque peut accepter un chèque comme on accepte une lettre de change.
f) Le porteur d'un chèque émis en France et payable à Casablanca dispose de 60 jours pour le présenter.
g) Un commerçant peut exiger d'être payé « par chèque à encaisser dans trois mois » sans risque.

<details><summary>Voir le corrigé</summary>

a) **Faux** : le chèque ne peut être tiré que sur un **établissement bancaire** (art. 241) ; un titre tiré sur une autre personne ne vaut pas chèque.
b) **Vrai** : la **perte** est un cas d'opposition admis (art. 271).
c) **Faux** : le tiré **doit payer même après l'expiration du délai de présentation** si la provision existe (art. 271) ; le retard prive seulement le porteur de ses recours contre les endosseurs.
d) **Faux** : toute stipulation d'intérêts dans un chèque est **réputée non écrite** (art. 245).
e) **Faux** : le chèque ne peut pas être accepté (art. 242) ; il peut seulement être **certifié**.
f) **Vrai** : délai de **60 jours** pour le chèque émis hors du Maroc et payable au Maroc (art. 268).
g) **Faux** : le chèque est payable à vue et le porteur qui l'accepte « à titre de garantie », sans encaissement immédiat, commet une infraction prévue par le Code de commerce ; la loi 71-24 a précisément encadré ce **chèque de garantie**.

</details>
`,
    qcm: [
      { q: "Le billet à ordre est :", choix: ["Un ordre de payer donné à une banque", "Une promesse de payer du souscripteur", "Un titre toujours payable à vue", "Un titre qui doit être accepté"], bonne: 1, explication: "Il ne met en scène que deux personnes au départ : souscripteur et bénéficiaire." },
      { q: "Le souscripteur d'un billet à ordre est obligé de la même manière que :", choix: ["Un endosseur", "L'accepteur d'une lettre de change", "Un avaliseur", "Le tiré non accepteur"], bonne: 1, explication: "Article 237 du Code de commerce." },
      { q: "Dans un billet à ordre, l'aval qui n'indique pas pour qui il est donné garantit :", choix: ["Le bénéficiaire", "Le souscripteur", "Le dernier endosseur", "La banque"], bonne: 1, explication: "Article 236 du Code de commerce." },
      { q: "Le chèque ne peut être tiré que sur :", choix: ["Un commerçant", "Un établissement bancaire", "Le tireur lui-même", "Un notaire"], bonne: 1, explication: "Article 241 du Code de commerce." },
      { q: "La provision d'un chèque doit exister :", choix: ["À l'échéance", "Au moment de la création du titre", "Dans les 20 jours suivant l'émission", "Au moment du protêt"], bonne: 1, explication: "Article 241 : à la différence de la lettre de change." },
      { q: "Un chèque émis et payable au Maroc doit être présenté au paiement dans :", choix: ["8 jours", "20 jours", "60 jours", "3 mois"], bonne: 1, explication: "Article 268 ; 60 jours s'il est émis hors du Maroc." },
      { q: "Un chèque présenté avant la date d'émission qu'il indique est :", choix: ["Nul", "Payable le jour de la présentation", "Payable à la date indiquée seulement", "Transformé en lettre de change"], bonne: 1, explication: "Article 267 du Code de commerce." },
      { q: "L'opposition au paiement d'un chèque est admise notamment en cas de :", choix: ["Litige commercial avec le bénéficiaire", "Vol du chèque", "Changement d'avis du tireur", "Retard de livraison"], bonne: 1, explication: "Article 271 : perte, vol, utilisation frauduleuse, falsification, procédure collective du porteur." },
      { q: "Après un incident de paiement, l'injonction bancaire interdit d'émettre des chèques pendant :", choix: ["1 an", "5 ans", "10 ans", "À vie"], bonne: 2, explication: "Article 313, sauf régularisation." },
      { q: "Depuis la loi 71-24, l'action publique pour chèque sans provision est éteinte par :", choix: ["La seule plainte du tireur", "Le paiement du montant et d'une amende de 2 %", "L'écoulement d'un mois", "La clôture du compte"], bonne: 1, explication: "Même après condamnation définitive ; la renonciation du bénéficiaire a le même effet." },
    ],
  },

  8: {
    titre: "Les contrats commerciaux, les contrats bancaires et les sûretés",
    description: "Contrats d'affaires : agent commercial, courtier, commissionnaire, crédit-bail, escompte, cession de créances, cautionnement et nantissement (loi 21-18).",
    resume: md`
## L'essentiel — Contrats commerciaux et sûretés

- Formation selon le **DOC** ; règles commerciales : preuve libre (art. 334), solidarité présumée (art. 335), **délais de paiement** encadrés (lois 32-10 et 69-21).
- **Agent commercial** (art. 393) : conclut de façon habituelle **au nom** du mandant, pas salarié, pas de concurrents ; contrat **écrit** (art. 397) ; préavis **1, 2 puis 3 mois** (art. 396) ; **indemnité compensatrice** malgré toute clause contraire, demande dans **1 an** (art. 402) ; non-concurrence **2 ans** max (art. 403).
- **Courtier** (art. 405) : met en relation ; rémunéré si le contrat est conclu (art. 415).
- **Commissionnaire** (art. 422) : agit **en son propre nom** pour le commettant ; **ducroire** = garantie du paiement (art. 430).
- **Crédit-bail** (art. 431) : location avec **option d'achat** ; la société de crédit-bail reste propriétaire ; **publicité** au greffe (art. 436) pour revendiquer le bien.
- **Transport** (art. 443) : obligation de **résultat** ; exonération par force majeure, vice propre, faute de l'expéditeur ou du destinataire (art. 459).
- **Ouverture de crédit** (art. 524) : à durée illimitée, résiliation écrite avec préavis d'au moins **60 jours**, sauf cessation notoire des paiements ou faute lourde (art. 525).
- **Escompte** (art. 526) : avance sur effets « **sauf bonne fin** » ; **cession de créances professionnelles** par simple **bordereau**, même créances futures (art. 529 et 530).
- **Sûretés personnelles** : cautionnement (art. 1117 DOC) simple (discussion, division) ou **solidaire** ; aval ; garantie autonome ; garanties **Tamwilcom**.
- **Sûretés réelles** : nantissement du fonds et du matériel, gages sans dépossession inscrits au **registre électronique national** (loi **21-18**), **hypothèque** sur titre foncier (loi 39-08).
`,
    exercices: md`
### Exercice 2 — Quel intermédiaire ?

Qualifiez chaque intermédiaire et indiquez une règle qui lui est applicable :
a) La SARL Transit Atlas dédouane en son nom, pour le compte de ses clients, les marchandises importées au port de Casablanca.
b) M. Filali présente des acheteurs de terrains à des promoteurs et touche 2 % sur chaque vente conclue.
c) Mme Saïdi prospecte en permanence la clientèle du Nord pour un fabricant de carrelage de Fès et signe les commandes au nom du fabricant.
d) Un commissionnaire à la vente garantit à son commettant le paiement de toutes les ventes qu'il conclut.

<details><summary>Voir le corrigé</summary>

a) **Commissionnaire** (en douane) : il agit **en son propre nom** pour le compte de ses clients (art. 422) ; sa rémunération est due dès que l'opération est conclue (art. 424).
b) **Courtier** : il met en relation acheteurs et promoteurs sans conclure lui-même (art. 405) ; sa commission n'est due que si la vente est conclue grâce à son entremise (art. 415).
c) **Agent commercial** : mandataire permanent, non salarié, qui négocie et conclut au nom et pour le compte du fabricant (art. 393) ; contrat écrit, préavis, indemnité compensatrice en cas de rupture (art. 396, 397, 402).
d) Commissionnaire **ducroire** : il est garant envers le commettant, solidairement avec les acheteurs, de l'exécution de leurs obligations (art. 430).

</details>

### Exercice 3 — La banque coupe le découvert

La SA Tadla Laits bénéficie depuis 2019 d'un découvert autorisé de 800 000 DH, sans durée. Le 2 juin 2026, sa banque lui notifie par écrit que le découvert est supprimé à compter du 10 juin. Tadla Laits n'est pas en cessation des paiements et n'a commis aucune faute. La banque détient en garantie un nantissement sur le fonds de commerce et la caution simple du directeur général.
1. La banque peut-elle supprimer le découvert dans ces conditions ?
2. Si Tadla Laits ne rembourse pas, la banque peut-elle poursuivre immédiatement le directeur général ?
3. Quel aurait été l'intérêt pour la banque d'une caution solidaire ?

<details><summary>Voir le corrigé</summary>

1. **Non.** Une ouverture de crédit à durée illimitée ne peut être résiliée ou réduite que sur notification écrite et après un **délai d'au moins 60 jours** (art. 525). Un préavis de huit jours est insuffisant, sauf cessation notoire des paiements ou faute lourde du client, absentes ici. La banque engage sa responsabilité si la rupture brutale cause un préjudice à Tadla Laits.
2. **Non** : la caution **simple** bénéficie du **bénéfice de discussion** ; elle peut exiger que la banque poursuive d'abord le débiteur principal et réalise ses biens, notamment le fonds nanti.
3. Avec une caution **solidaire**, la banque aurait pu poursuivre directement le directeur général pour le tout, sans discussion préalable des biens de la société.

</details>
`,
    qcm: [
      { q: "L'agent commercial agit :", choix: ["En son propre nom pour le compte du mandant", "Au nom et pour le compte du mandant, de façon habituelle", "Comme salarié du mandant", "Seulement pour rapprocher les parties"], bonne: 1, explication: "Article 393 du Code de commerce." },
      { q: "Le préavis de rupture d'un contrat d'agence commerciale à durée indéterminée la troisième année est de :", choix: ["1 mois", "2 mois", "3 mois", "6 mois"], bonne: 2, explication: "Article 396 : 1 mois la première année, 2 la deuxième, 3 ensuite." },
      { q: "L'indemnité compensatrice de l'agent commercial en cas de rupture :", choix: ["Peut être exclue par une clause du contrat", "Est due nonobstant toute clause contraire, sauf exceptions légales", "N'existe pas en droit marocain", "Est due seulement après dix ans"], bonne: 1, explication: "Article 402 ; elle n'est pas due notamment en cas de faute grave." },
      { q: "Le commissionnaire se distingue de l'agent commercial parce qu'il :", choix: ["Agit en son propre nom", "Est salarié", "Ne perçoit pas de rémunération", "Ne peut pas conclure de contrat"], bonne: 0, explication: "Article 422 : il agit en son nom pour le compte du commettant." },
      { q: "Le commissionnaire ducroire :", choix: ["Est dispensé de rendre compte", "Garantit au commettant l'exécution des obligations du tiers", "Agit au nom du commettant", "Ne peut pas être rémunéré"], bonne: 1, explication: "Article 430 du Code de commerce." },
      { q: "Dans un crédit-bail mobilier, pendant le contrat, le bien appartient :", choix: ["Au locataire", "À la société de crédit-bail", "Au fournisseur", "À la banque centrale"], bonne: 1, explication: "Le locataire ne devient propriétaire qu'en levant l'option d'achat." },
      { q: "Une ouverture de crédit à durée illimitée ne peut être résiliée qu'après un préavis d'au moins :", choix: ["8 jours", "30 jours", "60 jours", "6 mois"], bonne: 2, explication: "Article 525, sauf cessation notoire des paiements ou faute lourde." },
      { q: "L'escompte est consenti en principe :", choix: ["Sans recours contre le cédant", "Sauf bonne fin, avec remboursement par le cédant en cas d'impayé", "Uniquement sur des chèques", "Gratuitement"], bonne: 1, explication: "Article 526 du Code de commerce." },
      { q: "La caution solidaire :", choix: ["Bénéficie du bénéfice de discussion", "Peut être poursuivie directement par le créancier", "N'est tenue que si le débiteur est en liquidation", "Ne garantit que les intérêts"], bonne: 1, explication: "Elle renonce aux bénéfices de discussion et de division." },
      { q: "La loi 21-18 de 2019 a créé pour les sûretés mobilières :", choix: ["Un registre national électronique", "Une interdiction du gage sans dépossession", "Une taxe sur les crédits", "Un monopole des banques publiques"], bonne: 0, explication: "Les sûretés y sont inscrites et consultables en ligne." },
    ],
  },

  9: {
    titre: "Les entreprises en difficulté : prévention et sauvegarde",
    description: "Loi 73-17 sur les entreprises en difficulté : signaux d'alerte, prévention interne et externe, mandataire spécial, conciliation et procédure de sauvegarde.",
    resume: md`
## L'essentiel — Prévention et sauvegarde

- **Loi 73-17 (2018)** : remplace le livre V ; objectifs : **sauvegarder l'activité**, **maintenir l'emploi**, **apurer le passif** ; création de la **sauvegarde** ; compétence du **tribunal de commerce**.
- Signaux : pertes, CAF négative, **capitaux propres < ¼ du capital** (vote sur la dissolution anticipée), trésorerie négative, impayés, incidents de paiement.
- **Alerte** : le commissaire aux comptes informe le chef d'entreprise dans les **8 jours** ; à défaut de résultat dans les **15 jours**, délibération de l'assemblée générale ; puis information du **président du tribunal**.
- **Président du tribunal** : convoque le dirigeant, obtient des informations malgré le secret professionnel, peut désigner un **mandataire spécial**.
- **Conciliation** : entreprise **non en cessation des paiements** ; requête du **chef d'entreprise** ; conciliateur pour **3 mois + 1 mois** ; suspension provisoire des poursuites possible.
- L'accord **homologué** ne lie que les **créanciers signataires** ; inexécution : résolution, voire redressement ou liquidation.
- **Sauvegarde** : pas de cessation des paiements, difficultés **insurmontables** menant à la cessation ; **demande du seul chef d'entreprise** avec un projet de plan ; jugement dans les **15 jours**.
- Organes : **juge-commissaire** et **syndic** ; le dirigeant **reste aux commandes**.
- Effets : **arrêt des poursuites**, **interdiction de payer** les créances antérieures, arrêt du cours des intérêts, **continuation des contrats en cours**, **déclaration des créances**.
- **Plan de sauvegarde** arrêté par le tribunal après consultation des créanciers ; commissaire à l'exécution ; résolution si inexécution ; **conversion** en redressement si cessation des paiements.
`,
    exercices: md`
### Exercice 2 — Quelle procédure ?

Pour chaque entreprise, indiquez la procédure la plus adaptée et justifiez :
a) La SARL Ouarzazate Tours a perdu 30 % de son chiffre d'affaires ; elle paie toutes ses dettes mais veut négocier discrètement un rééchelonnement avec ses deux banques.
b) La SA Gharb Sucre ne paie plus ses fournisseurs depuis trois mois ; sa trésorerie est vide, mais ses carnets de commandes sont pleins.
c) La SNC Hamdi & Fils paie ses dettes, mais un créancier va saisir ses machines indispensables ; elle ne pourra pas surmonter seule la baisse de ses ventes et sera en cessation des paiements dans quelques mois.
d) Une fabrique de meubles de Salé est en cessation des paiements, sans commandes ni actifs de valeur, et son activité est arrêtée depuis six mois.

<details><summary>Voir le corrigé</summary>

a) **Mandataire spécial** ou **conciliation** : pas de cessation des paiements, difficultés négociables avec quelques créanciers, besoin de **confidentialité**.
b) **Redressement judiciaire** : l'entreprise est en **cessation des paiements** (elle ne peut faire face à son passif exigible), mais l'activité est viable. La sauvegarde et la conciliation lui sont fermées.
c) **Sauvegarde** : pas encore de cessation des paiements, difficultés insurmontables qui y conduiront, et besoin d'une **protection judiciaire** contre les poursuites (arrêt des saisies). Elle doit être demandée par les associés-gérants.
d) **Liquidation judiciaire** : cessation des paiements et situation **irrémédiablement compromise** (chapitre 10).

</details>

### Exercice 3 — Le calendrier de l'alerte

Le commissaire aux comptes de la SA Tanger Pièces Auto découvre le 2 février 2026 que la société a perdu un contrat représentant 60 % de son chiffre d'affaires. Il envoie sa lettre au directeur général le 16 février ; celui-ci la reçoit le 18 février et ne répond pas. L'assemblée générale ordinaire suivante est prévue le 29 juin 2026.
1. La lettre du commissaire aux comptes a-t-elle été envoyée dans les délais ?
2. À partir de quelle date le directeur général doit-il faire délibérer l'assemblée générale ?
3. Que se passe-t-il si l'assemblée du 29 juin n'aborde pas la question ?
4. Pourquoi la loi impose-t-elle la confidentialité de cette procédure ?

<details><summary>Voir le corrigé</summary>

1. **Non** : le commissaire doit informer le chef d'entreprise dans les **huit jours** de la découverte des faits, soit au plus tard le **10 février 2026**. L'envoi du 16 février est tardif, ce qui peut engager sa responsabilité si le retard cause un préjudice.
2. Faute de réponse ou de résultat dans les **quinze jours** de la réception (18 février), soit à partir du **5 mars 2026**, le directeur général doit faire délibérer la **prochaine assemblée générale** sur la situation, sur rapport du commissaire aux comptes.
3. Faute de délibération, ou si la continuité reste compromise malgré les décisions prises, le **président du tribunal de commerce** est informé par le commissaire aux comptes ou par le chef d'entreprise ; il peut convoquer le dirigeant et désigner un mandataire spécial.
4. Une publicité des difficultés ferait fuir les clients, pousserait les fournisseurs à exiger des paiements comptants et les banques à réduire leurs crédits : elle **aggraverait** la situation qu'on veut corriger.

</details>
`,
    qcm: [
      { q: "La loi 73-17 de 2018 a principalement créé :", choix: ["La liquidation judiciaire", "La procédure de sauvegarde", "Le registre du commerce", "La lettre de change électronique"], bonne: 1, explication: "Procédure judiciaire préventive, ouverte avant la cessation des paiements." },
      { q: "Le premier objectif du droit des entreprises en difficulté est :", choix: ["Punir le dirigeant", "Sauvegarder l'activité", "Payer d'abord les banques", "Vendre les actifs"], bonne: 1, explication: "Puis maintenir l'emploi et apurer le passif." },
      { q: "Le commissaire aux comptes qui découvre des faits compromettant la continuité de l'exploitation informe le chef d'entreprise dans :", choix: ["Les 8 jours", "Le mois", "Les 3 mois", "L'année"], bonne: 0, explication: "Par lettre recommandée, en l'invitant à redresser la situation." },
      { q: "La conciliation est ouverte à l'entreprise qui :", choix: ["Est en cessation des paiements", "N'est pas en cessation des paiements mais éprouve des difficultés", "Est en liquidation", "N'a aucune dette"], bonne: 1, explication: "Elle vise un accord amiable avec les créanciers." },
      { q: "La mission du conciliateur dure au plus :", choix: ["15 jours", "1 mois", "3 mois, prorogeables d'un mois", "1 an"], bonne: 2, explication: "Durée fixée par le président du tribunal." },
      { q: "L'accord de conciliation lie :", choix: ["Tous les créanciers", "Les seuls créanciers signataires", "Les seuls salariés", "L'administration fiscale uniquement"], bonne: 1, explication: "Les créanciers non signataires conservent leurs droits." },
      { q: "La procédure de sauvegarde peut être demandée par :", choix: ["Tout créancier", "Le ministère public", "Le chef d'entreprise seulement", "Les salariés"], bonne: 2, explication: "C'est une procédure volontaire." },
      { q: "Une entreprise en cessation des paiements peut-elle bénéficier de la sauvegarde ?", choix: ["Oui, toujours", "Non, elle relève du redressement ou de la liquidation", "Oui, si un créancier l'accepte", "Oui, si elle a plus de 50 salariés"], bonne: 1, explication: "La sauvegarde suppose l'absence de cessation des paiements." },
      { q: "Pendant la sauvegarde, la direction de l'entreprise est assurée par :", choix: ["Le syndic seul", "Le chef d'entreprise, surveillé ou assisté par le syndic", "Le juge-commissaire", "Les créanciers"], bonne: 1, explication: "À la différence de la liquidation, il n'y a pas de dessaisissement." },
      { q: "Le jugement d'ouverture de la sauvegarde a pour effet :", choix: ["De résilier tous les contrats", "D'arrêter les poursuites individuelles des créanciers antérieurs", "D'annuler les dettes", "De licencier les salariés"], bonne: 1, explication: "Il interdit aussi de payer les créances antérieures." },
    ],
  },

  10: {
    titre: "Le redressement et la liquidation judiciaires",
    description: "Redressement et liquidation judiciaires : cessation des paiements, déclaration en 30 jours, créances, période suspecte, plans et sanctions des dirigeants.",
    resume: md`
## L'essentiel — Redressement et liquidation judiciaires

- **Cessation des paiements** : impossibilité de faire face au **passif exigible** avec l'**actif disponible** ; notion de **trésorerie**, distincte des pertes.
- Saisine : le **chef d'entreprise** dans les **30 jours** (15 jours avant la loi 73-17), un **créancier**, le **ministère public** ; redressement si la situation n'est pas irrémédiablement compromise, sinon **liquidation**.
- Organes : **juge-commissaire**, **syndic**, **contrôleurs** ; le dirigeant reste en place, sous contrôle, pendant le redressement.
- Date de cessation fixée par le tribunal, **18 mois au plus** avant le jugement : **période suspecte**.
- **Période d'observation** de **4 mois**, renouvelable **une fois** (8 mois au maximum).
- Effets : arrêt des poursuites, interdiction de payer les créances antérieures, arrêt des intérêts, contrats en cours continués à l'option du syndic, priorité des **créanciers postérieurs**.
- **Déclaration des créances** : **2 mois** après la publication au **Bulletin officiel**, **+ 2 mois** hors du Maroc ; même les créanciers munis de sûretés ; sinon **forclusion**.
- Issues : **plan de continuation** (**10 ans** au plus), **plan de cession** (maintien de l'emploi), **liquidation**.
- **Nullités** : de droit pour les actes **gratuits** après la cessation ; facultatives pour les actes gratuits des **6 mois** antérieurs et pour les paiements, actes onéreux et sûretés après la cessation (cocontractant informé) ; sûretés **concomitantes** à la créance inattaquables.
- **Liquidation** : dessaisissement, exigibilité des créances, vente des actifs, paiement par rang (frais, salaires, postérieurs, sûretés, privilèges généraux, chirographaires) ; sanctions : **insuffisance d'actif** (faute de gestion), extension, **déchéance commerciale** (au moins 5 ans), **banqueroute**.
`,
    exercices: md`
### Exercice 2 — Cessation des paiements ou non ?

Le 31 mai 2026, la situation de quatre entreprises est la suivante (en milliers de DH) :

| Entreprise | Trésorerie disponible | Découvert autorisé non utilisé | Dettes échues réclamées | Dettes à échoir dans 6 mois | Résultat 2025 |
|---|---:|---:|---:|---:|---:|
| A | 200 | 300 | 450 | 2 000 | Perte de 900 |
| B | 50 | 0 | 700 | 100 | Bénéfice de 400 |
| C | 900 | 0 | 300 | 500 | Perte de 1 200 |
| D | 20 | 30 | 600 | 0 | Perte de 2 500 |

Indiquez pour chacune si elle est en cessation des paiements et quelle procédure peut être envisagée.

<details><summary>Voir le corrigé</summary>

On compare l'**actif disponible** (trésorerie + découvert non utilisé) au **passif exigible** (dettes échues réclamées) :

| Entreprise | Actif disponible | Passif exigible | Cessation ? | Procédure envisageable |
|---|---:|---:|---|---|
| A | 200 + 300 = 500 | 450 | Non | Prévention, conciliation ou **sauvegarde** (les échéances à venir de 2 000 menacent) |
| B | 50 | 700 | **Oui** | **Redressement** : l'entreprise est rentable, le problème est de trésorerie |
| C | 900 | 300 | Non | Prévention ou conciliation : pertes importantes mais trésorerie suffisante pour l'instant |
| D | 20 + 30 = 50 | 600 | **Oui** | **Liquidation** si la situation est irrémédiablement compromise (pertes massives), sinon redressement |

L'exemple B montre qu'une entreprise **bénéficiaire** peut être en cessation des paiements, et l'exemple C qu'une entreprise **en pertes** peut ne pas l'être.

</details>

### Exercice 3 — Le rang des créanciers en liquidation

La liquidation de la SARL Fès Textile a produit 2 000 000 DH. Les créances déclarées sont les suivantes : frais de justice et de liquidation 100 000 DH ; salaires des derniers mois 400 000 DH ; banque titulaire d'une hypothèque sur l'usine vendue 1 200 000 DH ; Trésor et CNSS (privilèges généraux) 500 000 DH ; fournisseurs chirographaires 1 600 000 DH. On retient l'ordre simplifié du cours et l'on suppose que l'hypothèque porte sur l'usine, dont la vente a rapporté 1 500 000 DH.
1. Répartissez le produit de la liquidation.
2. Quel pourcentage de leurs créances les fournisseurs reçoivent-ils ?
3. Le gérant peut-il être condamné à payer le passif restant ?

<details><summary>Voir le corrigé</summary>

**1)** Répartition dans l'ordre simplifié :

| Rang | Créancier | Dû | Payé | Reste disponible |
|---|---|---:|---:|---:|
| 1 | Frais de justice | 100 000 | 100 000 | 1 900 000 |
| 2 | Salaires | 400 000 | 400 000 | 1 500 000 |
| 3 | Banque hypothécaire (sur le prix de l'usine) | 1 200 000 | 1 200 000 | 300 000 |
| 4 | Trésor et CNSS | 500 000 | 300 000 | 0 |
| 5 | Fournisseurs chirographaires | 1 600 000 | 0 | 0 |

**2)** Les fournisseurs reçoivent **0 %** : c'est la situation fréquente des créanciers chirographaires, d'où l'intérêt pour un fournisseur de prendre des garanties (clause de réserve de propriété, caution, effets avalisés).

**3)** Oui, si une **faute de gestion** du gérant a contribué à l'**insuffisance d'actif** (poursuite d'une activité déficitaire, retard de déclaration, rémunérations excessives) : le tribunal peut mettre tout ou partie du passif non couvert à sa charge, l'action se prescrivant par trois ans. Une simple erreur de gestion ou la conjoncture ne suffit pas.

</details>
`,
    qcm: [
      { q: "La cessation des paiements est la situation de l'entreprise qui :", choix: ["Réalise des pertes", "Ne peut faire face à son passif exigible avec son actif disponible", "A des capitaux propres négatifs", "N'a plus de clients"], bonne: 1, explication: "C'est une notion de trésorerie." },
      { q: "Depuis la loi 73-17, le chef d'entreprise doit demander l'ouverture d'une procédure dans :", choix: ["Les 8 jours", "Les 15 jours", "Les 30 jours", "Les 3 mois"], bonne: 2, explication: "Le délai était de 15 jours avant la réforme." },
      { q: "La date de cessation des paiements ne peut pas être fixée plus de :", choix: ["6 mois avant le jugement", "12 mois avant le jugement", "18 mois avant le jugement", "5 ans avant le jugement"], bonne: 2, explication: "Cette période définit la période suspecte." },
      { q: "La période d'observation du redressement dure :", choix: ["1 mois", "4 mois renouvelables une fois", "1 an", "10 ans"], bonne: 1, explication: "Soit 8 mois au maximum." },
      { q: "Le délai de déclaration des créances court à compter :", choix: ["De la date de cessation des paiements", "De la publication du jugement d'ouverture au Bulletin officiel", "De la première audience", "De la nomination du syndic"], bonne: 1, explication: "Deux mois, augmentés de deux mois pour les créanciers établis hors du Maroc." },
      { q: "Le créancier titulaire d'une hypothèque doit-il déclarer sa créance ?", choix: ["Non, jamais", "Oui, comme tous les créanciers antérieurs", "Seulement si la créance dépasse 1 million de DH", "Seulement en liquidation"], bonne: 1, explication: "À défaut, il est forclos." },
      { q: "La durée maximale d'un plan de continuation est de :", choix: ["2 ans", "5 ans", "10 ans", "20 ans"], bonne: 2, explication: "La durée est fixée par le tribunal dans cette limite." },
      { q: "Une donation consentie par le débiteur après la date de cessation des paiements est :", choix: ["Valable", "Nulle de droit", "Annulable seulement si le donataire était de mauvaise foi", "Transformée en vente"], bonne: 1, explication: "Les actes à titre gratuit de la période suspecte sont nuls de droit." },
      { q: "La liquidation judiciaire entraîne pour le débiteur :", choix: ["Le maintien de ses pouvoirs", "Le dessaisissement de l'administration de ses biens", "L'annulation de ses dettes", "Une prime de départ"], bonne: 1, explication: "Le syndic exerce ses droits pendant la liquidation." },
      { q: "La déchéance commerciale emporte :", choix: ["Une amende fiscale", "L'interdiction de diriger, gérer, administrer ou contrôler une entreprise", "La confiscation de tous les biens", "La dissolution de la société"], bonne: 1, explication: "Sa durée, fixée par le tribunal, est d'au moins cinq ans." },
    ],
  },
};

export default chapitres;
