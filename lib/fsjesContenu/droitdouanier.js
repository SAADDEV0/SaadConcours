// Droit douanier (S5) — compléments par chapitre : description SEO, résumé, exercices 2 et 3, QCM.
const md = String.raw;

const chapitres = {
  1: {
    titre: "Introduction au droit douanier et à l'administration des douanes",
    description: "Définition et caractères du droit douanier, sources (CDII de 1977, lois de finances, OMC, OMD), missions de l'ADII, territoire douanier et notions de base.",
    resume: md`
## L'essentiel — Introduction au droit douanier

- **Droit douanier** : règles du franchissement des frontières par les marchandises (déclaration, taxation, contrôle, sanctions) ; droit fiscal, économique, administratif et pénal spécial.
- Caractères : technique, évolutif (loi de finances), international, rigoureux (règles de preuve favorables à l'administration).
- Source principale : **Code des douanes et impôts indirects** (dahir portant loi n° 1-77-339 du 9 octobre 1977), modernisé par la loi 02-99 et modifié par chaque loi de finances.
- Autres sources : lois de finances (quotités), **CGI** (TVA à l'importation), décrets, arrêtés, circulaires de l'ADII.
- Sources internationales : OMC (évaluation, origine, facilitation des échanges 2017), **OMD** (Système harmonisé, Kyoto révisée, SAFE), accords préférentiels du Maroc.
- **ADII**, rattachée au ministère de l'Économie et des Finances ; missions **fiscale**, **économique**, de **protection** et de **sécurité**, et facilitation (BADR, PortNet).
- **Territoire douanier** : territoire national, eaux territoriales, espace aérien ; **rayon des douanes** : zone de surveillance renforcée.
- Zones d'accélération industrielle (ex-zones franches) : hors champ des droits tant que les marchandises y restent ; leurs ventes vers le Maroc sont des importations.
- Notions : importation, exportation, déclarant (propriétaire ou **transitaire agréé**), régime (mise à la consommation ou régime économique), prohibitions.
`,
    exercices: md`
### Exercice 2 — Sources et hiérarchie

Classez les textes suivants selon leur nature (international, législatif, réglementaire, administratif) et dites lequel s'applique en cas de contradiction entre le premier et le troisième :

1. L'accord d'association entre le Maroc et l'Union européenne.
2. La loi de finances de l'année.
3. Une circulaire de l'ADII précisant la procédure d'apurement d'un régime.
4. Un arrêté du ministre chargé des finances fixant la liste des bureaux de douane ouverts à une opération.
5. Le Code des douanes et impôts indirects.

<details><summary>Voir le corrigé</summary>

1. **International** (accord ratifié et publié).
2. **Législatif** (loi votée par le Parlement).
3. **Administratif** (circulaire : elle interprète et organise, elle ne peut pas ajouter d'obligations contraires à la loi).
4. **Réglementaire** (arrêté ministériel).
5. **Législatif** (texte de valeur législative, approuvé par dahir portant loi).

En cas de contradiction entre l'accord international et la circulaire, l'**accord international** s'applique : il prime sur la loi interne (préambule de la Constitution de 2011) et, a fortiori, sur une simple circulaire.

</details>

### Exercice 3 — Les missions de la douane

**Sujet** : « La douane n'est plus seulement une administration fiscale. » Commentez.

<details><summary>Voir le corrigé</summary>

**Introduction** : la douane est historiquement née pour percevoir des droits aux frontières ; problématique : la libéralisation des échanges a-t-elle transformé ses missions ?

**I. Une mission fiscale toujours importante**
- A. Perception du droit d'importation, de la TVA à l'importation et des taxes intérieures de consommation (carburants, tabacs, boissons).
- B. Le poids des droits de douane a baissé avec les accords de libre-échange, mais la TVA et les TIC perçues par la douane restent une part importante des recettes de l'État.

**II. Des missions élargies**
- A. Mission économique : régimes économiques, préférences tarifaires, défense commerciale, accompagnement des exportateurs.
- B. Mission de protection : contrefaçons, normes, santé, environnement, patrimoine.
- C. Mission de sécurité : lutte contre les trafics, sécurité de la chaîne logistique (cadre SAFE).
- D. Mission de facilitation : dématérialisation (BADR, PortNet), délais de dédouanement, opérateurs économiques agréés.

**Conclusion** : la douane est devenue un acteur de la compétitivité et de la sécurité ; son défi est de contrôler mieux sans ralentir les flux, grâce à l'analyse des risques.

</details>
`,
    qcm: [
      { q: "Le Code des douanes et impôts indirects marocain a été approuvé en :", choix: ["1959", "1977", "1996", "2011"], bonne: 1, explication: "Dahir portant loi n° 1-77-339 du 9 octobre 1977." },
      { q: "L'ADII relève :", choix: ["Du ministère de l'Intérieur", "Du ministère de l'Économie et des Finances", "De Bank Al-Maghrib", "Du ministère du Commerce"], bonne: 1, explication: "Administration des douanes et impôts indirects." },
      { q: "Les quotités du droit d'importation sont principalement modifiées par :", choix: ["Les circulaires de l'ADII", "Les lois de finances", "Le Code de commerce", "Les décisions de l'OMC"], bonne: 1, explication: "Chaque loi de finances révise le tarif." },
      { q: "L'organisation internationale qui gère le Système harmonisé est :", choix: ["L'OMC", "L'OMD", "Le FMI", "La CNUCED"], bonne: 1, explication: "Organisation mondiale des douanes, à Bruxelles." },
      { q: "La saisie de contrefaçons relève de la mission :", choix: ["Fiscale", "De protection", "Statistique", "Monétaire"], bonne: 1, explication: "Protection de la propriété intellectuelle et des consommateurs." },
      { q: "Le rayon des douanes est :", choix: ["Le bureau central de l'ADII", "Une zone de surveillance renforcée le long des frontières et du littoral", "La liste des marchandises prohibées", "Le délai de dédouanement"], bonne: 1, explication: "La circulation de certaines marchandises y est encadrée." },
      { q: "La TVA à l'importation est définie par :", choix: ["Le CDII seul", "Le Code général des impôts", "Le Code de commerce", "La Constitution"], bonne: 1, explication: "Elle est perçue par la douane." },
      { q: "Le système informatique de dédouanement de l'ADII s'appelle :", choix: ["PortNet", "BADR", "SIMPL", "DAMANCOM"], bonne: 1, explication: "Base automatisée des douanes en réseau ; PortNet est le guichet unique." },
      { q: "Le régime de droit commun d'une marchandise importée est :", choix: ["L'entrepôt", "La mise à la consommation", "Le transit", "L'admission temporaire"], bonne: 1, explication: "Paiement des droits et libre circulation sur le territoire." },
      { q: "Une vente d'une zone d'accélération industrielle vers Rabat est traitée comme :", choix: ["Une exportation", "Une importation", "Une opération interne sans formalité", "Un transit"], bonne: 1, explication: "Les droits et taxes sont dus à l'entrée sur le territoire assujetti." },
    ],
  },

  2: {
    titre: "Les éléments de la taxation : espèce tarifaire, origine et valeur",
    description: "Espèce tarifaire et Système harmonisé, règles d'interprétation, origine préférentielle et cumul, valeur transactionnelle et méthodes subsidiaires.",
    resume: md`
## L'essentiel — Espèce, origine et valeur

- Trois éléments déterminent les droits : **espèce** (taux), **origine** (préférence), **valeur** (assiette).
- **Système harmonisé** (OMD, 1988) : 21 sections, chapitres (2 chiffres), positions (4), sous-positions (6) ; 10 chiffres au Maroc.
- **RGI** : 1 (texte des positions et notes), 2 a (article incomplet ou démonté), 2 b (mélanges), 3 (spécifique, caractère essentiel, dernière position), 4 (analogie), 5 (emballages), 6 (sous-positions).
- **Origine** ≠ provenance ; non préférentielle (statistiques, antidumping) ou **préférentielle** (tarif réduit d'un accord).
- Critères : produits **entièrement obtenus** ; **transformation suffisante** (changement de position, pourcentage de valeur, opération spécifique) ; opérations insuffisantes (emballage, étiquetage, assemblage simple).
- **Cumul** pan-euro-méditerranéen ; preuves : **EUR.1** ou EUR-MED, déclaration sur facture ; contrôle a posteriori.
- **Valeur transactionnelle** (accord OMC, article VII du GATT) : prix payé ou à payer + ajustements ; conditions : vente, pas de restriction, lien sans influence sur le prix.
- À ajouter : commissions (sauf d'achat), emballages, apports de l'acheteur, **redevances** liées, fret et assurance jusqu'à la frontière (valeur **CAF**). À exclure : commission d'achat, transport et montage après importation, droits perçus au Maroc.
- Méthodes subsidiaires, dans l'ordre : identiques, similaires, déductive, calculée, dernier recours.
`,
    exercices: md`
### Exercice 2 — Classement tarifaire

Indiquez la règle générale interprétative applicable dans chaque cas :

1. Une voiture importée sans ses roues, qui seront montées au Maroc.
2. Un coffret cadeau contenant une montre et un bracelet de rechange, vendu comme un ensemble.
3. Un produit nouveau qui ne correspond au texte d'aucune position.
4. Un étui en cuir importé avec l'appareil photo auquel il est destiné.
5. Un importateur classe un produit en se fondant sur l'intitulé du chapitre.

<details><summary>Voir le corrigé</summary>

1. **RGI 2 a)** : l'article incomplet se classe comme l'article complet s'il en présente les caractéristiques essentielles ; la voiture sans roues reste une voiture.
2. **RGI 3 b)** : un assortiment se classe d'après l'élément qui lui confère son caractère essentiel, ici la montre.
3. **RGI 4** : classement dans la position des articles les plus analogues.
4. **RGI 5** : l'étui spécialement conçu et présenté avec l'appareil suit son classement.
5. Erreur : selon la **RGI 1**, les intitulés n'ont qu'une valeur indicative ; seuls le texte des positions et les notes font foi.

</details>

### Exercice 3 — Vente entre parties liées

La filiale marocaine d'un groupe espagnol importe des pièces facturées 80 DH l'unité par sa maison mère. Des pièces identiques, vendues au même moment par la maison mère à des clients indépendants au Maroc, sont facturées 100 DH l'unité dans des conditions comparables.

1. La douane peut-elle écarter la valeur transactionnelle ?
2. Quelle méthode appliquera-t-elle ? Quelle valeur retiendra-t-elle pour 5 000 pièces ?

<details><summary>Voir le corrigé</summary>

**1)** Le lien entre acheteur et vendeur ne suffit pas à écarter la valeur transactionnelle. Mais si l'importateur ne démontre pas que le lien n'a pas influencé le prix, la douane peut l'écarter. Ici, l'écart de 20 % avec les ventes à des clients indépendants pour des pièces identiques indique une **influence du lien sur le prix**.

**2)** La douane applique la **première méthode subsidiaire** : valeur transactionnelle de **marchandises identiques**, soit 100 DH l'unité (ajustée si besoin des différences de quantités ou de frais de transport). Valeur en douane : $5\,000 \times 100 = \mathbf{500\,000}$ DH, au lieu de 400 000 DH déclarés. Les droits correspondants sur l'écart de 100 000 DH seront réclamés.

</details>
`,
    qcm: [
      { q: "Les trois éléments de la taxation douanière sont :", choix: ["Poids, volume, prix", "Espèce, origine, valeur", "Origine, provenance, destination", "Taux, base, délai"], bonne: 1, explication: "Ils déterminent le taux, la préférence et l'assiette." },
      { q: "Le Système harmonisé compte :", choix: ["10 sections", "21 sections", "50 sections", "99 sections"], bonne: 1, explication: "Divisées en chapitres à 2 chiffres." },
      { q: "Selon la RGI 1, le classement se fait d'après :", choix: ["Les intitulés des sections", "Le texte des positions et les notes", "Le prix de la marchandise", "Le pays d'origine"], bonne: 1, explication: "Les intitulés n'ont qu'une valeur indicative." },
      { q: "Un vélo livré démonté mais complet se classe :", choix: ["Comme ses pièces séparées", "Comme un vélo monté", "Dans les jouets", "Selon le choix de l'importateur"], bonne: 1, explication: "RGI 2 a)." },
      { q: "Un ordinateur fabriqué en Chine et expédié depuis les Pays-Bas est :", choix: ["Originaire des Pays-Bas", "Originaire de Chine, en provenance des Pays-Bas", "Originaire du Maroc", "Sans origine"], bonne: 1, explication: "L'origine ne se confond pas avec la provenance." },
      { q: "Le certificat EUR.1 sert à prouver :", choix: ["La valeur", "L'origine préférentielle", "Le classement", "Le paiement des droits"], bonne: 1, explication: "Dans les échanges avec l'Europe." },
      { q: "Une commission d'achat versée par l'acheteur à son propre agent :", choix: ["S'ajoute à la valeur en douane", "Est exclue de la valeur en douane", "Double la valeur", "Remplace le prix"], bonne: 1, explication: "Seules les commissions autres que d'achat s'ajoutent." },
      { q: "Pour un contrat FOB, il faut ajouter à la valeur en douane marocaine :", choix: ["Rien", "Le fret et l'assurance jusqu'au point d'entrée", "Le transport jusqu'à l'entrepôt de l'acheteur", "La TVA"], bonne: 1, explication: "La valeur en douane est une valeur rendue frontière." },
      { q: "La première méthode subsidiaire d'évaluation est :", choix: ["La méthode déductive", "La valeur de marchandises identiques", "La valeur calculée", "Le dernier recours"], bonne: 1, explication: "Les méthodes s'appliquent dans un ordre hiérarchique." },
      { q: "Une simple opération d'étiquetage au Maroc :", choix: ["Confère l'origine marocaine", "Est une opération insuffisante pour conférer l'origine", "Change la position tarifaire", "Double les droits"], bonne: 1, explication: "Conditionnement, étiquetage et assemblage simple ne suffisent jamais." },
    ],
  },

  3: {
    titre: "Les droits et taxes perçus à l'importation",
    description: "Taux applicables, droit d'importation et quotités, TPI de 0,25 %, TVA à l'importation, taxes intérieures de consommation, franchises et liquidation.",
    resume: md`
## L'essentiel — Droits et taxes à l'importation

- Taux applicables : ceux en vigueur à la date d'**enregistrement de la déclaration** ; chaque loi de finances (1er janvier) peut les modifier.
- **Droit d'importation** ad valorem : valeur en douane × quotité ; quotités **échelonnées** : 2,5 % (intrants, équipements), 10 % et 17,5 % (demi-produits), quotités les plus élevées pour les produits finis.
- Structure **en escalade** ; mesures de défense commerciale possibles ; **tarifs préférentiels** pour les produits originaires (produits industriels de l'UE en franchise depuis 2012).
- **TPI** : 0,25 % de la valeur en douane, sauf exonérations.
- **TVA à l'importation** (CGI, perçue par la douane) : base = valeur en douane + DI + TIC + autres taxes ; taux normal **20 %**, réduit 10 % ; récupérable pour un assujetti.
- **TIC** : tabacs, boissons, produits énergétiques, importés ou fabriqués au Maroc.
- Franchises : diplomatiques, effets des MRE, dons, conventions d'investissement, régimes économiques ; interprétation stricte.
- Paiement avant enlèvement : comptant électronique, **crédit d'enlèvement**, **obligations cautionnées** ; intérêts de retard.
- DI, TPI et TIC = **coût** ; TVA = **avance récupérable** pour l'entreprise assujettie.
`,
    exercices: md`
### Exercice 2 — Importation de produits finis par un distributeur

Un distributeur de Marrakech importe des téléviseurs d'une valeur en douane de 120 000 DH. Quotité du DI supposée : 25 % ; TPI : 0,25 % ; TVA : 20 %.

1. Liquidez les droits et taxes.
2. Le distributeur revend ces téléviseurs 220 000 DH hors taxes. Calculez la TVA collectée, la TVA due au Trésor après déduction et la marge brute (prix de vente HT − coût d'achat).

<details><summary>Voir le corrigé</summary>

**1)** DI $= 120\,000 \times 25\,\% = 30\,000$ ; TPI $= 120\,000 \times 0{,}25\,\% = 300$ ; base TVA $= 120\,000 + 30\,000 + 300 = 150\,300$ ; TVA $= 30\,060$. Total à payer : $30\,000 + 300 + 30\,060 = \mathbf{60\,360}$ DH.

**2)** TVA collectée : $220\,000 \times 20\,\% = 44\,000$ DH. TVA due : $44\,000 - 30\,060 = \mathbf{13\,940}$ DH. Coût d'achat : $120\,000 + 30\,000 + 300 = 150\,300$ DH ; marge brute : $220\,000 - 150\,300 = \mathbf{69\,700}$ DH.

La TVA payée à la douane a seulement été avancée : au total, l'État encaisse $30\,060 + 13\,940 = 44\,000$ DH, soit 20 % du prix de vente final.

</details>

### Exercice 3 — Changement de taux au 1er janvier

Un importateur reçoit le 27 décembre des marchandises d'une valeur en douane de 200 000 DH. La quotité du DI est de 17,5 % ; la loi de finances de l'année suivante la porte à 30 % à compter du 1er janvier.

1. Quel DI paiera-t-il s'il fait enregistrer sa déclaration le 29 décembre ? Et le 3 janvier ?
2. Que lui conseillez-vous ? Et si la loi de finances avait au contraire baissé le taux ?

<details><summary>Voir le corrigé</summary>

**1)** Le 29 décembre : $200\,000 \times 17{,}5\,\% = \mathbf{35\,000}$ DH. Le 3 janvier : $200\,000 \times 30\,\% = \mathbf{60\,000}$ DH. Le taux applicable est celui de la date d'enregistrement de la déclaration.

**2)** En cas de hausse annoncée, il a intérêt à faire enregistrer sa déclaration **avant le 1er janvier** (économie de 25 000 DH), à condition que la marchandise soit arrivée et le dossier complet. En cas de baisse, il peut au contraire laisser la marchandise en magasin ou en entrepôt sous douane et la déclarer après le 1er janvier, en tenant compte des frais de magasinage et des délais de séjour autorisés.

</details>
`,
    qcm: [
      { q: "Les taux de droits applicables sont ceux en vigueur à la date :", choix: ["De la commande", "D'enregistrement de la déclaration", "Du paiement au fournisseur", "De la vente au client"], bonne: 1, explication: "Principe du fait générateur douanier." },
      { q: "Le DI ad valorem se calcule sur :", choix: ["Le prix de vente au Maroc", "La valeur en douane", "Le poids", "La TVA"], bonne: 1, explication: "DI = valeur en douane x quotité." },
      { q: "Dans le tarif marocain, les matières premières et biens d'équipement supportent en général :", choix: ["Les quotités les plus élevées", "Les quotités les plus faibles", "La même quotité que les produits finis", "Une interdiction"], bonne: 1, explication: "Structure en escalade selon le degré d'ouvraison." },
      { q: "Le taux de la taxe parafiscale à l'importation est de :", choix: ["0,25 %", "2,5 %", "10 %", "20 %"], bonne: 0, explication: "Appliqué à la valeur en douane, sauf exonérations." },
      { q: "La base de la TVA à l'importation comprend :", choix: ["La seule valeur en douane", "La valeur en douane et les droits et taxes d'importation", "Le prix de revente", "Le fret intérieur"], bonne: 1, explication: "Valeur en douane + DI + TIC + autres taxes." },
      { q: "Valeur en douane 464 400 DH, DI 81 270 DH, TPI 1 161 DH : la TVA à 20 % s'élève à :", choix: ["92 880 DH", "109 366,20 DH", "16 254 DH", "100 000 DH"], bonne: 1, explication: "546 831 x 20 %." },
      { q: "Pour une entreprise assujettie, la TVA payée à l'importation est :", choix: ["Un coût définitif", "Récupérable par déduction", "Remboursée par le fournisseur", "Incluse dans le DI"], bonne: 1, explication: "Elle pèse sur la trésorerie, pas sur le coût." },
      { q: "Les TIC frappent notamment :", choix: ["Les machines industrielles", "Les tabacs, boissons et produits énergétiques", "Les livres", "Les services informatiques"], bonne: 1, explication: "Importés ou fabriqués au Maroc." },
      { q: "Les produits industriels originaires de l'UE entrent au Maroc en franchise de DI depuis :", choix: ["2000", "2006", "2012", "2020"], bonne: 2, explication: "Fin du démantèlement tarifaire de l'accord d'association." },
      { q: "Le crédit d'enlèvement permet :", choix: ["D'éviter de payer les droits", "D'enlever la marchandise avant de payer les droits", "D'obtenir un tarif préférentiel", "De modifier la valeur"], bonne: 1, explication: "Facilité de paiement réservée aux opérateurs habilités." },
    ],
  },

  4: {
    titre: "Le dédouanement des marchandises",
    description: "Étapes du dédouanement : conduite en douane, manifeste, MEAD, DUM dans BADR, transitaire agréé, analyse des risques, PortNet, mainlevée et audit.",
    resume: md`
## L'essentiel — Le dédouanement

- **Dédouanement** : formalités qui placent une marchandise sous un régime (consommation, exportation, régime économique).
- Étapes : conduite en douane, déclaration sommaire, mise en magasin, déclaration en détail, contrôle, liquidation et paiement, mainlevée, contrôle a posteriori.
- **Déclaration sommaire** (transporteur ; **manifeste** en maritime) : prise en charge de la cargaison, déposée avant l'arrivée.
- **MEAD** : magasins et aires de dédouanement sous contrôle douanier ; séjour limité ; frais de magasinage et de conteneur.
- **DUM** (déclaration unique de marchandises) dans **BADR**, possible par anticipation ; déclarant : propriétaire ou **transitaire agréé**.
- Documents : facture, titre de transport, colisage, preuve d'origine, documents techniques ou sanitaires, titre d'importation domicilié.
- **Analyse des risques** : sans contrôle, contrôle documentaire ou visite physique (scanner, échantillons) ; autres administrations : **ONSSA**, normes, ANRT ; guichet unique **PortNet**.
- **Mainlevée** après paiement ou garantie ; **contrôle a posteriori** (audit) dans les délais de prescription ; statut **OEA** pour les opérateurs fiables.
- Exportation : DUM d'exportation (prohibitions, statistiques, exonération de TVA, rapatriement des devises, apurement des régimes, preuves d'origine).
`,
    exercices: md`
### Exercice 2 — Déclaration sommaire ou déclaration en détail ?

Indiquez pour chaque affirmation s'il s'agit de la déclaration sommaire, de la déclaration en détail ou des deux :

1. Elle est déposée par le transporteur.
2. Elle indique le régime douanier choisi.
3. Elle permet la prise en charge de la cargaison par la douane.
4. Elle fixe la date des taux applicables.
5. Elle est déposée par voie électronique.
6. Elle indique l'espèce tarifaire, l'origine et la valeur.

<details><summary>Voir le corrigé</summary>

1. **Sommaire**.
2. **En détail**.
3. **Sommaire**.
4. **En détail** (date d'enregistrement de la DUM).
5. **Les deux** (manifeste électronique et DUM dans BADR).
6. **En détail**.

</details>

### Exercice 3 — Dédouanement et compétitivité

**Sujet** : « Un dédouanement rapide est un facteur de compétitivité. » Expliquez en vous appuyant sur l'exemple marocain.

<details><summary>Voir le corrigé</summary>

**Introduction** : le temps de passage en douane est un coût pour les entreprises, particulièrement dans les chaînes de valeur en flux tendus ; problématique : comment concilier contrôle et rapidité ?

**I. Les coûts d'un dédouanement lent**
- A. Coûts directs : magasinage, frais de conteneur, immobilisation de stocks et de trésorerie.
- B. Coûts indirects : ruptures de production pour les usines qui travaillent en juste-à-temps (automobile, aéronautique), pénalités de retard envers les clients, perte d'attractivité pour les investisseurs.

**II. Les outils de la facilitation au Maroc**
- A. Dématérialisation : BADR, DUM par anticipation, paiement électronique, guichet unique PortNet.
- B. Contrôle sélectif fondé sur l'analyse des risques, contrôle a posteriori dans les entreprises.
- C. Statut d'opérateur économique agréé ; application de l'accord de l'OMC sur la facilitation des échanges.

**Conclusion** : la douane moderne contrôle mieux en contrôlant moins aux frontières ; la qualité de la logistique portuaire (Tanger Med) et douanière est un argument majeur de l'attractivité du Maroc.

</details>
`,
    qcm: [
      { q: "La déclaration sommaire est déposée par :", choix: ["L'importateur", "Le transporteur", "La banque", "L'ONSSA"], bonne: 1, explication: "En maritime, elle prend la forme du manifeste." },
      { q: "Au Maroc, la déclaration en détail s'appelle :", choix: ["Le manifeste", "La DUM", "Le connaissement", "L'EUR.1"], bonne: 1, explication: "Déclaration unique de marchandises." },
      { q: "BADR est :", choix: ["Le guichet unique portuaire", "Le système informatique de dédouanement de l'ADII", "Un organisme de contrôle sanitaire", "Une banque"], bonne: 1, explication: "Base automatisée des douanes en réseau." },
      { q: "Les MEAD sont :", choix: ["Des bureaux de change", "Des magasins et aires de dédouanement", "Des zones franches", "Des tribunaux douaniers"], bonne: 1, explication: "Les marchandises y attendent leur déclaration sous contrôle douanier." },
      { q: "Le transitaire agréé en douane :", choix: ["Est un agent des douanes", "Dédouane pour le compte d'autrui après agrément", "Transporte la marchandise", "Fixe les taux de droits"], bonne: 1, explication: "Il engage sa responsabilité sur ses déclarations." },
      { q: "L'analyse des risques permet :", choix: ["De contrôler tous les conteneurs", "D'orienter les contrôles vers les déclarations les plus risquées", "De supprimer les droits", "D'éviter le paiement"], bonne: 1, explication: "Contrôle sélectif, sans bloquer les flux." },
      { q: "Le contrôle sanitaire des produits alimentaires importés relève de :", choix: ["L'ANRT", "L'ONSSA", "L'Office des changes", "L'AMMC"], bonne: 1, explication: "Office national de sécurité sanitaire des produits alimentaires." },
      { q: "La mainlevée :", choix: ["Interdit tout contrôle ultérieur", "Autorise l'enlèvement de la marchandise", "Fixe la valeur en douane", "Est délivrée par le transporteur"], bonne: 1, explication: "Un contrôle a posteriori reste possible." },
      { q: "PortNet est :", choix: ["Le guichet unique du commerce extérieur", "Un terminal portuaire", "Un transitaire", "Une taxe"], bonne: 0, explication: "Il dématérialise les formalités du commerce extérieur." },
      { q: "À l'exportation, la DUM sert notamment à :", choix: ["Payer le droit d'importation", "Justifier l'exonération de TVA et apurer les régimes économiques", "Obtenir un crédit bancaire", "Fixer le prix de vente"], bonne: 1, explication: "Elle sert aussi aux statistiques et aux preuves d'origine." },
    ],
  },

  5: {
    titre: "Les régimes économiques en douane",
    description: "Régimes économiques en douane : entrepôt, transit, ATPA, admission temporaire, perfectionnement passif, drawback et zones d'accélération industrielle.",
    resume: md`
## L'essentiel — Les régimes économiques en douane

- Finalité : ne pas taxer les exportations, faciliter stockage et circulation ; suspension des droits ou remboursement.
- Mécanisme : placement (DUM), **engagement cautionné**, suivi dans BADR, **apurement** (réexportation, autre régime, mise à la consommation) dans le délai.
- **Entrepôt de douane** : public, privé particulier, privé banal ; droits payés à la sortie pour la consommation.
- **Transit** : circulation sous douane entre bureaux, scellements, itinéraire, garantie ; **carnet TIR**.
- **ATPA** : intrants importés en suspension, transformés et réexportés ; délai pouvant aller jusqu'à deux ans ; **taux de rendement** ; intrants non réexportés = droits + intérêts de retard.
- **AT en l'état** (matériel, foires, emballages) ; **TSD** (taxation au taux du produit transformé) ; **ETPP** (droits sur la seule valeur ajoutée à l'étranger) ; **EIF**.
- **Drawback** : paiement à l'importation puis remboursement à l'exportation ; moins favorable à la trésorerie.
- **Zones d'accélération industrielle** (ex-zones franches) : exonération à l'entrée, avantages fiscaux ; ventes vers le Maroc = importations.
`,
    exercices: md`
### Exercice 2 — Choisir le régime adapté

Indiquez le régime économique le plus adapté :

1. Une entreprise de BTP fait venir d'Espagne une grue pour un chantier de 8 mois, puis la renvoie.
2. Un distributeur de pièces détachées veut stocker ses importations et ne payer les droits qu'au fur et à mesure de ses ventes.
3. Des marchandises débarquées à Tanger Med doivent rejoindre la Mauritanie par la route.
4. Une usine envoie un moteur en France pour réparation, puis le réimporte.
5. Un câbleur importe du cuivre et des connecteurs pour fabriquer des faisceaux qu'il exporte en totalité.
6. Une entreprise ignore si les intrants importés serviront à des produits vendus au Maroc ou exportés.

<details><summary>Voir le corrigé</summary>

1. **Admission temporaire en l'état** (usage temporaire sans transformation).
2. **Entrepôt de douane** (privé particulier ou banal).
3. **Transit international** sous douane.
4. **Exportation temporaire pour perfectionnement passif** : à la réimportation, les droits portent sur la valeur de la réparation.
5. **ATPA** (ou entrepôt industriel franc, ou implantation en zone d'accélération industrielle).
6. **Drawback** : droits payés à l'importation, remboursés pour la part exportée.

</details>

### Exercice 3 — Perfectionnement passif

Une société marocaine envoie en Italie un équipement d'une valeur de 100 000 DH pour une remise à niveau. À son retour, l'équipement vaut 150 000 DH. Le DI supposé est de 17,5 %.

1. Quel DI paierait-elle sans régime particulier, sur la valeur de l'équipement réimporté ?
2. Quel DI paie-t-elle sous le régime de l'exportation temporaire pour perfectionnement passif ?
3. Quelle condition doit-elle respecter ?

<details><summary>Voir le corrigé</summary>

**1)** $150\,000 \times 17{,}5\,\% = \mathbf{26\,250}$ DH.

**2)** Les droits ne portent que sur la valeur ajoutée à l'étranger : $(150\,000 - 100\,000) \times 17{,}5\,\% = \mathbf{8\,750}$ DH.

**3)** Elle doit avoir déclaré l'**exportation temporaire** avant la sortie de l'équipement, afin que la douane puisse l'identifier à son retour (numéro de série, marques), et le réimporter dans le délai accordé. À défaut, la réimportation est traitée comme une importation ordinaire.

</details>
`,
    qcm: [
      { q: "Les régimes économiques en douane permettent principalement :", choix: ["D'augmenter les droits", "De suspendre ou rembourser les droits sous contrôle douanier", "De supprimer le contrôle", "De fixer la valeur en douane"], bonne: 1, explication: "Ils évitent notamment de taxer les exportations." },
      { q: "La garantie des droits suspendus prend la forme :", choix: ["D'un dépôt en espèces obligatoire", "D'un engagement cautionné", "D'une simple déclaration sur l'honneur", "D'un certificat d'origine"], bonne: 1, explication: "Une caution couvre les droits et taxes suspendus." },
      { q: "L'ATPA concerne des marchandises :", choix: ["Utilisées sans transformation puis réexportées", "Transformées puis réexportées", "Consommées au Maroc", "En transit vers l'Afrique"], bonne: 1, explication: "Admission temporaire pour perfectionnement actif." },
      { q: "Le taux de rendement indique :", choix: ["Le taux du droit d'importation", "La quantité d'intrants incorporée par unité de produit fini", "Le délai d'apurement", "La marge bénéficiaire"], bonne: 1, explication: "Il sert à apurer le compte de l'entreprise." },
      { q: "Le drawback consiste à :", choix: ["Suspendre les droits", "Rembourser à l'exportation les droits payés sur les intrants", "Exonérer définitivement les importations", "Taxer les exportations"], bonne: 1, explication: "Il est moins favorable à la trésorerie que l'ATPA." },
      { q: "Une grue importée pour un chantier puis renvoyée relève :", choix: ["De l'ATPA", "De l'admission temporaire en l'état", "Du drawback", "De la mise à la consommation"], bonne: 1, explication: "Usage temporaire sans transformation." },
      { q: "Sous le perfectionnement passif, les droits à la réimportation portent sur :", choix: ["La valeur totale du bien", "La valeur ajoutée à l'étranger", "Le prix d'origine", "Rien"], bonne: 1, explication: "L'opération est l'inverse de l'ATPA." },
      { q: "Un entrepôt privé banal est :", choix: ["Réservé à l'entreprise qui le gère pour ses propres marchandises", "Géré par un logisticien qui stocke les marchandises de ses clients", "Ouvert à tous et géré par l'État", "Une zone franche"], bonne: 1, explication: "L'entrepôt privé particulier est réservé à son gestionnaire." },
      { q: "Si des intrants sous ATPA sont vendus sur le marché local :", choix: ["Aucun droit n'est dû", "Les droits et taxes sont dus avec des intérêts de retard", "Ils deviennent originaires du Maroc", "Ils sont confisqués d'office"], bonne: 1, explication: "La suspension n'est pas une exonération définitive." },
      { q: "Les ventes d'une zone d'accélération industrielle vers le reste du Maroc sont :", choix: ["Des exportations", "Des importations soumises aux droits", "Exonérées", "Interdites"], bonne: 1, explication: "La zone est hors du champ des droits tant que les marchandises y restent." },
    ],
  },

  6: {
    titre: "Le contentieux douanier",
    description: "Infractions douanières (contrebande, fausse déclaration, inexécution des engagements), responsables, procès-verbaux, sanctions fiscales et pénales, transaction.",
    resume: md`
## L'essentiel — Le contentieux douanier

- **Infraction douanière** : violation des lois et règlements appliqués par la douane ; contentieux **répressif** et contentieux de l'**assiette**.
- Classification du CDII : **délits** (deux classes) et **contraventions** (plusieurs classes), selon la gravité.
- Infractions principales : **contrebande**, importation ou exportation sans déclaration, **fausse déclaration** (espèce, origine, valeur), détention injustifiée, inexécution des engagements (régimes économiques).
- Conception largement **objective** : la matérialité des faits est centrale ; la bonne foi peut moduler la sanction selon les textes.
- Responsables : **détenteur** réputé responsable, transporteur, déclarant (transitaire agréé), intéressés à la fraude, complices ; personnes morales.
- Pouvoirs : visite, **droit de communication**, visites domiciliaires encadrées.
- **Procès-verbal de saisie** ou **de constat** ; rédigé par deux agents, il fait foi jusqu'à **inscription de faux** pour les constatations matérielles.
- Sanctions **fiscales** (amendes, **confiscation**) et **pénales** (emprisonnement pour les délits) ; aggravation pour les marchandises touchant à la santé, à la sécurité ou à l'environnement ; les droits éludés restent dus.
- **Transaction** : règlement amiable avant ou après jugement, qui éteint l'action de l'administration ; mode de règlement principal.
`,
    exercices: md`
### Exercice 2 — Qualifier les infractions

Qualifiez chaque situation :

1. Un voyageur passe au poste frontière avec des appareils électroniques neufs en quantité commerciale, sans les déclarer.
2. Un importateur déclare des téléphones sous la position des pièces détachées, moins taxée.
3. Un commerçant de Nador détient un stock de produits importés et ne peut présenter aucun document justifiant leur importation régulière.
4. Une entreprise sous ATPA dépasse de trois mois le délai d'apurement, puis réexporte ses produits.
5. Des marchandises sont débarquées de nuit sur une plage, loin de tout bureau de douane.

<details><summary>Voir le corrigé</summary>

1. **Importation sans déclaration** (marchandises non déclarées au passage d'un bureau).
2. **Fausse déclaration d'espèce** destinée à éluder des droits.
3. **Détention injustifiée** de marchandises dans le rayon des douanes, assimilée à la contrebande lorsqu'elle porte sur des marchandises soumises à justification.
4. **Inexécution des engagements** (non-respect du délai) : infraction de faible gravité, de la catégorie des contraventions, si les produits ont finalement été réexportés ; intérêts et pénalités possibles.
5. **Contrebande** : introduction en dehors des bureaux de douane.

</details>

### Exercice 3 — La transaction douanière

**Sujet** : « La transaction est le mode normal de règlement du contentieux douanier. » Expliquez et discutez.

<details><summary>Voir le corrigé</summary>

**Introduction** : définir la transaction (accord par lequel l'administration renonce aux poursuites contre paiement) ; problématique : pourquoi ce mode amiable domine-t-il, et quelles en sont les limites ?

**I. Un mode de règlement avantageux**
- A. Pour l'administration : recette rapide et certaine, économie de procédures, désengorgement des tribunaux.
- B. Pour le contrevenant : réduction fréquente de la sanction, rapidité, discrétion, poursuite de l'activité.
- C. Pour l'économie : sécurité juridique et rapidité de règlement.

**II. Des limites**
- A. Un pouvoir important de l'administration, qui fixe les conditions ; risque d'inégalité entre contrevenants.
- B. Elle ne couvre pas toujours l'action publique pour les délits les plus graves, qui relève aussi du ministère public.
- C. Elle peut réduire l'effet dissuasif de la sanction si elle est trop systématique.

**Conclusion** : la transaction est un outil efficace, qui suppose transparence et encadrement par les textes pour garantir l'égalité de traitement.

</details>
`,
    qcm: [
      { q: "Le CDII classe les infractions douanières en :", choix: ["Crimes et délits", "Délits et contraventions", "Fautes civiles et fautes fiscales", "Infractions mineures uniquement"], bonne: 1, explication: "Délits répartis en deux classes, contraventions en plusieurs classes." },
      { q: "L'introduction de marchandises en dehors des bureaux de douane constitue :", choix: ["Une fausse déclaration", "Une contrebande", "Une simple contravention", "Un transit"], bonne: 1, explication: "Elle compte parmi les infractions les plus graves." },
      { q: "Une sous-évaluation de facture est :", choix: ["Une fausse déclaration de valeur", "Une contrebande", "Un transit irrégulier", "Une détention injustifiée"], bonne: 0, explication: "Elle élude une partie des droits." },
      { q: "Le détenteur de marchandises de fraude est :", choix: ["Toujours exonéré", "Réputé responsable de la fraude", "Simple témoin", "Responsable seulement s'il est propriétaire"], bonne: 1, explication: "La responsabilité douanière est large." },
      { q: "Un procès-verbal rédigé par deux agents fait foi, pour les constatations matérielles :", choix: ["Jusqu'à preuve contraire", "Jusqu'à inscription de faux", "Pendant un an", "Seulement devant l'administration"], bonne: 1, explication: "Règle dérogatoire au droit pénal commun." },
      { q: "La confiscation est une sanction :", choix: ["Pénale uniquement", "Fiscale", "Administrative non douanière", "Civile"], bonne: 1, explication: "Elle porte sur les marchandises et moyens de la fraude." },
      { q: "La transaction douanière :", choix: ["Est interdite", "Permet de régler l'affaire à l'amiable contre paiement", "Supprime les droits dus", "Est décidée par le transitaire"], bonne: 1, explication: "Elle éteint l'action de l'administration pour les faits concernés." },
      { q: "Après une sanction, les droits et taxes éludés :", choix: ["Sont annulés", "Restent dus en plus des amendes", "Sont réduits de moitié", "Sont payés par l'État"], bonne: 1, explication: "La sanction n'efface pas la dette douanière." },
      { q: "Le procès-verbal dressé à l'issue d'un contrôle documentaire sans saisie est :", choix: ["Un procès-verbal de saisie", "Un procès-verbal de constat", "Un manifeste", "Une DUM"], bonne: 1, explication: "Le PV de saisie suppose la saisie des marchandises." },
      { q: "Les amendes douanières sont aggravées notamment lorsque la fraude porte sur :", choix: ["Des livres", "Des marchandises touchant à la santé ou à la sécurité", "Des produits exportés", "Des marchandises en transit régulier"], bonne: 1, explication: "Ou en cas de circonstances aggravantes comme une cachette aménagée." },
    ],
  },
};

export default chapitres;
