// Logistique Internationale (S6) — compléments par chapitre : description SEO, résumé, exercices 2 et 3, QCM.
const md = String.raw;

const chapitres = {
  1: {
    titre: "La chaîne logistique internationale",
    description: "Logistique et supply chain, trois flux, contraintes de l'international, acteurs (transitaire, commissionnaire, 3PL, 4PL), coût logistique et ports marocains.",
    resume: md`
## L'essentiel — La chaîne logistique internationale

- **Logistique** : mettre à disposition le bon produit, au bon lieu, au bon moment, en bonne quantité, au bon coût.
- **Supply chain** : réseau d'entreprises coordonnées du fournisseur au client final ; trois flux : **physique**, **information**, **financier**.
- Logistique d'approvisionnement, de production, de distribution ; **logistique inverse** pour les retours.
- L'international ajoute distance, **ruptures de charge**, frontières, droits différents, monnaies et cultures : on raisonne en **délai de bout en bout**.
- **Chargeur** : propriétaire de la marchandise ; **transporteur** : exécute le déplacement.
- **Transitaire** : mandataire, responsable de ses seules fautes ; **commissionnaire** : organise en son nom et garantit le résultat.
- **3PL** : prestataire qui gère plusieurs activités ; **4PL** : pilote de toute la chaîne qui coordonne des 3PL.
- Coût logistique = transport + manutention + emballage + entreposage + frais administratifs + assurance + coût du stock en transit ; on le rapporte à la valeur de l'opération.
- Maroc : stratégie logistique de 2010 (AMDL), loi 15-02 sur les ports (ANP, Marsa Maroc), **Tanger Med** (10,24 millions d'EVP en 2024), PortNet et BADR.
`,
    exercices: md`
### Exercice 2 — Choisir un niveau d'externalisation

Une enseigne d'électroménager de Casablanca importe d'Asie 400 conteneurs par an et livre 60 magasins. Elle possède un entrepôt, mais pas de camions. La direction veut se concentrer sur la vente.

1. Quel niveau de prestataire (2PL, 3PL, 4PL) correspond à chacune des solutions suivantes : a) confier seulement les livraisons aux magasins à un transporteur ; b) confier entrepôt, préparation et livraisons à un prestataire ; c) confier à un intégrateur le pilotage de toute la chaîne, de l'usine asiatique au magasin ?
2. Donnez deux avantages et deux risques de la solution c).

<details><summary>Voir le corrigé</summary>

1. a) **2PL** (une seule tâche exécutée) ; b) **3PL** (plusieurs activités physiques confiées à un prestataire) ; c) **4PL** (pilotage global et coordination de plusieurs prestataires).
2. Avantages : l'enseigne se concentre sur la vente ; un seul interlocuteur responsable du délai de bout en bout ; expertise et pouvoir de négociation du 4PL auprès des armateurs. Risques : **dépendance** envers le prestataire et perte de savoir-faire ; coût de la marge du 4PL ; partage d'informations commerciales sensibles ; difficulté à changer de prestataire (coûts de transfert).

</details>

### Exercice 3 — Coût du stock en transit

Un importateur de Marrakech achète en Chine des panneaux solaires pour 1 500 000 DH par conteneur. Le transport par mer dure 35 jours de plus que l'option ferroviaire par l'Europe, qui coûte 22 000 DH de plus par conteneur. Son coût du capital est de 10 % par an (année de 360 jours).

1. Calculez le coût financier du stock pendant les 35 jours supplémentaires.
2. Quel mode est le moins cher en tenant compte de ce coût ? Quels autres éléments faut-il considérer ?

<details><summary>Voir le corrigé</summary>

1. Coût du stock en transit = 1 500 000 × 10 % × 35 / 360 = **14 583 DH** environ.
2. Le surcoût ferroviaire (22 000 DH) dépasse l'économie de stock (14 583 DH) : la **voie maritime** reste moins chère d'environ 7 400 DH. Il faut aussi considérer le risque de rupture de stock (ventes perdues si la marchandise arrive tard), la fiabilité des délais, les risques de casse et les ruptures de charge supplémentaires du ferroviaire, et la saison (un produit très attendu justifie le mode rapide).

</details>
`,
    qcm: [
      { q: "La règle des « 5 B » de la logistique vise notamment :", choix: ["Le bon produit au bon moment et au bon coût", "Le meilleur prix d'achat", "La meilleure publicité", "Le bénéfice maximal du transporteur"], bonne: 0, explication: "Bon produit, bon lieu, bon moment, bonne quantité, bon coût." },
      { q: "Le flux qui circule dans les deux sens et précède souvent le flux physique est :", choix: ["Le flux financier", "Le flux d'information", "Le flux de déchets", "Le flux de main-d'oeuvre"], bonne: 1, explication: "Commandes, avis d'expédition, suivi." },
      { q: "Le chargeur est :", choix: ["Le docker qui charge le navire", "Le propriétaire de la marchandise qui la confie au transporteur", "L'assureur", "Le douanier"], bonne: 1, explication: "Souvent l'exportateur ou l'importateur." },
      { q: "Le commissionnaire de transport, contrairement au transitaire :", choix: ["Ne prépare aucun document", "Répond du résultat, y compris des fautes des transporteurs choisis", "Ne peut pas choisir les transporteurs", "Travaille gratuitement"], bonne: 1, explication: "Il agit en son nom propre et garantit l'exécution." },
      { q: "Un prestataire qui gère stockage, préparation des commandes et transport est un :", choix: ["1PL", "2PL", "3PL", "NVOCC"], bonne: 2, explication: "Third party logistics." },
      { q: "Un 4PL se caractérise par :", choix: ["La possession obligatoire d'entrepôts", "Le pilotage de toute la chaîne et la coordination de plusieurs prestataires", "Le seul transport maritime", "La vente au détail"], bonne: 1, explication: "C'est un intégrateur." },
      { q: "Une rupture de charge désigne :", choix: ["Une panne de camion", "Le transfert de la marchandise d'un moyen de transport à un autre", "Un défaut de paiement", "La perte d'une palette"], bonne: 1, explication: "Par exemple du camion au navire." },
      { q: "La loi 15-02 a notamment :", choix: ["Créé la Bourse de Casablanca", "Séparé l'autorité portuaire (ANP) de l'exploitation commerciale des ports", "Supprimé les droits de douane", "Créé le port de Tanger Med"], bonne: 1, explication: "Réforme portuaire marocaine." },
      { q: "En 2024, Tanger Med a traité environ :", choix: ["1 million d'EVP", "4 millions d'EVP", "10 millions d'EVP", "40 millions d'EVP"], bonne: 2, explication: "10,24 millions d'EVP, en hausse de 18,8 %." },
      { q: "La logistique inverse concerne :", choix: ["Les livraisons urgentes", "Les retours de produits, emballages et produits en fin de vie", "Les importations seulement", "Le transport aérien"], bonne: 1, explication: "Flux de l'aval vers l'amont." },
    ],
  },
  2: {
    titre: "Les Incoterms 2020",
    description: "Les 11 Incoterms 2020 (EXW, FCA, FOB, CIF, DAP, DDP…), transfert des frais et des risques, choix de la règle et calcul d'un prix FOB, CIF ou DAP.",
    resume: md`
## L'essentiel — Les Incoterms 2020

- Règles de la **CCI** : un sigle + un lieu + la version (« FCA Fès, Incoterms® 2020 ») ; elles répartissent **frais**, **risques** et **formalités**.
- Elles ne règlent **ni la propriété, ni le prix, ni le paiement**.
- **Tous modes** : EXW, FCA, CPT, CIP, DAP, DPU, DDP ; **maritime** : FAS, FOB, CFR, CIF.
- Familles : **E** départ ; **F** transport principal non payé ; **C** transport payé mais risque transféré au départ (deux points critiques) ; **D** arrivée.
- 2020 : **DPU** remplace DAT ; CIF = assurance minimale (clauses C), **CIP = tous risques** (clauses A) ; FCA avec connaissement à bord possible.
- Conteneur : préférer **FCA, CPT, CIP** à FOB, CFR, CIF.
- EXW : l'acheteur dédouane à l'export ; DDP : le vendeur dédouane à l'import et paie la TVA du pays d'arrivée.
- Prix : FOB = EXW + chargement + pré-acheminement + export + manutention départ ; CFR = FOB + fret.
- $\text{CIF} = \dfrac{\text{CFR}}{1 - 1{,}1\,t}$ (assurance sur CIF + 10 %) ; DAP = CIF + frais d'arrivée + post-acheminement.
`,
    exercices: md`
### Exercice 2 — Qui paie quoi ?

Pour chacune des ventes suivantes d'un exportateur d'Agadir, indiquez qui paie le fret principal, qui supporte le risque pendant le transport principal et qui dédouane à l'export : a) FOB Agadir ; b) CFR Rotterdam ; c) DAP Rungis ; d) EXW Agadir.

<details><summary>Voir le corrigé</summary>

| Vente | Fret principal | Risque pendant le transport principal | Dédouanement export |
|---|---|---|---|
| a) FOB Agadir | Acheteur | Acheteur (dès la mise à bord) | Vendeur |
| b) CFR Rotterdam | Vendeur | Acheteur (dès la mise à bord à Agadir) | Vendeur |
| c) DAP Rungis | Vendeur | Vendeur (jusqu'à Rungis) | Vendeur |
| d) EXW Agadir | Acheteur | Acheteur (dès la mise à disposition) | Acheteur |

En EXW, l'acheteur étranger doit faire dédouaner à l'export au Maroc, ce qui est souvent impraticable : FCA est alors plus adapté.

</details>

### Exercice 3 — Passer d'un prix CIF à un prix FOB

Un client italien propose d'acheter des conserves de sardines à 520 000 DH CIF Gênes. Le fret Agadir – Gênes coûte 14 000 DH ; le taux de prime est de 0,3 % (sur CIF + 10 %). L'exportateur veut comparer avec une offre FOB Agadir.

1. Calculez la prime d'assurance et le prix FOB équivalent.
2. Si l'exportateur peut obtenir un fret à 11 500 DH, combien gagne-t-il à vendre CIF plutôt que FOB, à prix CIF inchangé ?

<details><summary>Voir le corrigé</summary>

1. Prime = 520 000 × 1,1 × 0,3 % = **1 716 DH**. CFR = 520 000 − 1 716 = 518 284 DH. FOB = 518 284 − 14 000 = **504 284 DH**.
2. Avec un fret à 11 500 DH, le vendeur garde 14 000 − 11 500 = **2 500 DH** de plus sur une vente CIF au même prix : maîtriser le transport permet de dégager une marge, c'est un argument pour vendre en C ou en D.

</details>
`,
    qcm: [
      { q: "Les Incoterms sont publiés par :", choix: ["L'OMC", "La Chambre de commerce internationale", "L'OMD", "La CNUCED"], bonne: 1, explication: "CCI, Paris ; version 2020 en vigueur." },
      { q: "Un Incoterm règle :", choix: ["Le transfert de propriété", "Le prix", "La répartition des frais et des risques de livraison", "Le moyen de paiement"], bonne: 2, explication: "Propriété et paiement relèvent du contrat de vente." },
      { q: "Combien de règles comptent les Incoterms 2020 ?", choix: ["9", "11", "13", "15"], bonne: 1, explication: "7 tous modes et 4 maritimes." },
      { q: "Quelle règle est réservée au transport maritime ou fluvial ?", choix: ["FCA", "CPT", "FOB", "DAP"], bonne: 2, explication: "FAS, FOB, CFR et CIF." },
      { q: "Sous CIF, le risque passe à l'acheteur :", choix: ["À l'arrivée au port de destination", "À bord du navire au port d'embarquement", "À l'usine du vendeur", "Au paiement"], bonne: 1, explication: "C'est la règle des deux points critiques." },
      { q: "DPU a remplacé dans les Incoterms 2020 :", choix: ["DDU", "DAT", "DES", "DEQ"], bonne: 1, explication: "Livraison déchargée en tout lieu convenu." },
      { q: "Sous CIP 2020, l'assurance exigée du vendeur est :", choix: ["Minimale (clauses C)", "Tous risques (clauses A), sauf accord contraire", "Facultative", "Payée par l'acheteur"], bonne: 1, explication: "Alors que CIF reste en couverture minimale." },
      { q: "Pour un conteneur remis au terminal avant le départ, la CCI recommande plutôt :", choix: ["FOB", "FAS", "FCA", "CFR"], bonne: 2, explication: "Le risque passe à la remise au transporteur." },
      { q: "En DDP, le vendeur doit notamment :", choix: ["Laisser l'acheteur dédouaner à l'import", "Dédouaner à l'import et payer les taxes du pays d'arrivée", "Livrer à son usine", "Ne payer aucun transport"], bonne: 1, explication: "Obligation maximale du vendeur." },
      { q: "L'assurance CIF se calcule en principe sur :", choix: ["Le prix EXW", "Le prix FOB", "La valeur CIF majorée de 10 %", "Le seul fret"], bonne: 2, explication: "D'où CIF = CFR / (1 - 1,1 t)." },
    ],
  },
  3: {
    titre: "Le transport maritime et la conteneurisation",
    description: "Navires, lignes régulières et tramping, affrètement, conteneurs et EVP, groupage ou complet, calcul du fret (unité payante, BAF, THC) et connaissement.",
    resume: md`
## L'essentiel — Le transport maritime

- Mode le moins cher à la tonne-kilomètre pour les gros volumes ; porte-conteneurs, vraquiers, pétroliers, rouliers, cargos conventionnels.
- **Ligne régulière** : ports et calendrier fixes, barème de l'armateur (conteneurs). **Tramping** : à la demande, **charte-partie** (vrac).
- Affrètement **au voyage** (staries, surestaries, dispatch), **à temps**, **coque nue**.
- **EVP** : 20 pieds = 1 EVP ; 40 pieds = 2 EVP ; dry, high cube, reefer, open top, flat, citerne.
- **FCL** (complet, forfait par conteneur) ou **LCL** (groupage, payé à l'UP + frais de groupage).
- $\text{UP} = \max(\text{tonnes} ; \text{m}^3)$ ; fret de base = UP × taux ; + **BAF** (carburant), **CAF** (change), **THC** (terminal), documentation.
- **Connaissement** : reçu, preuve du contrat, **titre représentatif** ; à ordre, nominatif, au porteur ; embarqué ou reçu pour embarquement ; **net** ou avec réserves.
- Lettre de transport maritime (*sea waybill*) : non négociable.
- Conteneur : délai gratuit puis **surestaries** (au terminal) et **détention** (hors terminal) par jour.
`,
    exercices: md`
### Exercice 2 — Unité payante et surcharges

Un exportateur de Safi envoie en groupage vers Anvers des pièces de céramique : 6,5 tonnes et 5,2 m³. Taux : 350 DH par UP (poids ou volume) ; BAF 10 % du fret de base ; THC 55 DH par UP ; documentation 300 DH.

1. Déterminez l'unité payante.
2. Calculez le coût total du transport.

<details><summary>Voir le corrigé</summary>

1. UP = max(6,5 ; 5,2) = **6,5** : la marchandise est lourde et peu volumineuse, on paie au poids.
2. Fret de base = 6,5 × 350 = 2 275 DH ; BAF = 227,50 DH ; THC = 6,5 × 55 = 357,50 DH ; documentation 300 DH. **Total = 3 160 DH.**

</details>

### Exercice 3 — Affrètement au voyage

Un navire affrété au voyage pour charger 30 000 tonnes de phosphate à Jorf Lasfar dispose de 4 jours de staries. Le chargement dure 6 jours et demi. La charte-partie prévoit des surestaries de 12 000 USD par jour et un dispatch de moitié.

1. Calculez les surestaries dues et dites qui les paie.
2. Que se passerait-il si le chargement avait duré 3 jours ?

<details><summary>Voir le corrigé</summary>

1. Dépassement = 6,5 − 4 = 2,5 jours ; surestaries = 2,5 × 12 000 = **30 000 USD**, payées par l'**affréteur** (le chargeur) au fréteur, en compensation de l'immobilisation du navire.
2. Avance de 1 jour : le fréteur verse un **dispatch** de 12 000 / 2 = **6 000 USD** à l'affréteur.

</details>
`,
    qcm: [
      { q: "Un conteneur de 40 pieds représente :", choix: ["0,5 EVP", "1 EVP", "2 EVP", "4 EVP"], bonne: 2, explication: "L'EVP est l'équivalent vingt pieds." },
      { q: "Le transport de vrac à la demande s'appelle :", choix: ["La ligne régulière", "Le tramping", "Le groupage", "Le cabotage aérien"], bonne: 1, explication: "Il repose sur l'affrètement et la charte-partie." },
      { q: "Le temps alloué au chargement d'un navire affrété au voyage s'appelle :", choix: ["Les surestaries", "Les staries", "Le fret", "Le free time aérien"], bonne: 1, explication: "Les surestaries sanctionnent leur dépassement." },
      { q: "Pour un envoi de 3 t et 7 m³ au tarif poids ou volume, l'unité payante est :", choix: ["3", "5", "7", "10"], bonne: 2, explication: "On retient la plus grande quantité, 1 t = 1 m³." },
      { q: "La BAF est une surcharge liée :", choix: ["Au taux de change", "Au prix du carburant", "Au poids des colis", "À la douane"], bonne: 1, explication: "Bunker adjustment factor." },
      { q: "Les THC rémunèrent :", choix: ["L'assurance", "La manutention au terminal", "Le transitaire", "Le crédit documentaire"], bonne: 1, explication: "Terminal handling charges." },
      { q: "La fonction du connaissement qui permet de vendre la marchandise en mer est celle de :", choix: ["Reçu", "Preuve du contrat", "Titre représentatif", "Certificat d'origine"], bonne: 2, explication: "Son porteur légitime prend livraison." },
      { q: "Un connaissement net est un connaissement :", choix: ["Sans fret", "Sans réserve sur l'état apparent des marchandises", "Émis en un seul original", "Non négociable"], bonne: 1, explication: "Les banques exigent en principe un connaissement net." },
      { q: "Le groupage (LCL) convient surtout :", choix: ["Aux envois de grande taille", "Aux petits envois qui ne remplissent pas un conteneur", "Au vrac", "Aux véhicules roulants"], bonne: 1, explication: "Le groupeur réunit plusieurs chargeurs." },
      { q: "Garder un conteneur au terminal au-delà du délai gratuit entraîne :", choix: ["Un dispatch", "Des surestaries de conteneur", "Une baisse du fret", "Une exonération de THC"], bonne: 1, explication: "Facturées par jour par l'armateur." },
    ],
  },
  4: {
    titre: "Les transports aérien, routier et multimodal",
    description: "Fret aérien (poids taxable, tranches, point de bascule, LTA), route (CMR, TIR, détroit), rail, transport multimodal et combiné, critères de choix du mode.",
    resume: md`
## L'essentiel — Aérien, routier, multimodal

- Aérien : marchandises **chères, légères, urgentes, périssables** ; règles de l'**IATA**.
- $\text{Poids taxable} = \max(\text{poids réel} ; \text{m}^3 \times 167)$ (ou cm³ / 6 000).
- Tarif par tranches (M, N, +45, +100, +300…) ; **point de bascule** = seuil supérieur × taux supérieur / taux inférieur.
- **LTA** : 3 originaux, **non négociable** ; LTA maison et LTA mère en groupage ; **Montréal 1999** : 26 DTS/kg depuis le 28 décembre 2024.
- Route : porte-à-porte ; **CMR** (Genève 1956) : lettre de voiture en 3 exemplaires, présomption de responsabilité, **8,33 DTS/kg** brut, réserves sous 7 jours pour les dommages non apparents.
- **TIR** : transit sous scellés avec carnet garanti ; camions marocains via Tanger Med vers l'Europe.
- Rail : pondéreux, longues distances (COTIF/CIM).
- **Multimodal** : plusieurs modes, un opérateur, un document (FBL) ; **combiné** : trajet principal par rail ou mer, route minimale.
- Choisir sur le **coût total** (fret + stock en transit + risque de retard), pas sur le seul fret.
`,
    exercices: md`
### Exercice 2 — Point de bascule

Une compagnie propose pour Casablanca – Dakar : +45 kg à 30 DH/kg ; +100 kg à 26 DH/kg ; +300 kg à 22 DH/kg. Un envoi pèse 85 kg réels pour 0,4 m³.

1. Calculez le poids taxable.
2. Quel prix payer ? Testez la tranche supérieure.
3. Calculez les deux points de bascule.

<details><summary>Voir le corrigé</summary>

1. Volumétrique = 0,4 × 167 = 66,8 kg ; poids taxable = max(85 ; 66,8) = **85 kg**.
2. Tranche +45 : 85 × 30 = 2 550 DH ; tranche +100 : 100 × 26 = 2 600 DH. On paie **2 550 DH**.
3. Entre +45 et +100 : 100 × 26 / 30 = **86,7 kg** ; entre +100 et +300 : 300 × 22 / 26 = **253,8 kg**. Au-delà de ces poids, on a intérêt à payer le seuil de la tranche suivante.

</details>

### Exercice 3 — Responsabilité en CMR

Un camion parti de Tanger livre à Madrid une palette de 400 kg d'huile d'olive. À la livraison, le destinataire signe sans réserve ; il découvre le lendemain, en ouvrant les cartons, 40 bouteilles cassées (45 kg).

1. Le destinataire peut-il encore agir ? Dans quel délai ?
2. Quel est le plafond d'indemnisation (1 DTS = 13 DH) ?
3. Le transporteur peut-il s'exonérer ?

<details><summary>Voir le corrigé</summary>

1. Oui : pour un dommage **non apparent**, il doit adresser des réserves écrites dans les **7 jours** (dimanches et jours fériés exclus) suivant la livraison. Sans réserve, la livraison est présumée conforme, mais la preuve contraire reste possible.
2. 45 × 8,33 = 374,85 DTS, soit environ **4 873 DH**.
3. Il peut s'exonérer s'il prouve une cause prévue par la CMR : emballage insuffisant (faute de l'expéditeur), vice propre de la marchandise ou circonstances qu'il ne pouvait éviter. Sinon, il est présumé responsable.

</details>
`,
    qcm: [
      { q: "Le poids volumétrique aérien usuel retient :", choix: ["1 m3 = 1 000 kg", "1 m3 = 333 kg", "1 m3 = 167 kg", "1 m3 = 50 kg"], bonne: 2, explication: "Soit le volume en cm3 divisé par 6 000." },
      { q: "Un envoi de 120 kg réels et 1 m3 a un poids taxable de :", choix: ["120 kg", "167 kg", "287 kg", "1 000 kg"], bonne: 1, explication: "On retient le plus grand des deux poids." },
      { q: "La lettre de transport aérien est :", choix: ["Un titre négociable", "Un document non négociable émis en trois originaux", "Un certificat d'origine", "Une facture commerciale"], bonne: 1, explication: "Elle ne représente pas la marchandise." },
      { q: "La convention qui régit le transport routier international de marchandises est :", choix: ["La CMR", "La convention de Varsovie", "Les règles de Hambourg", "La COTIF"], bonne: 0, explication: "Convention de Genève de 1956." },
      { q: "La limite de réparation en CMR est de :", choix: ["2,5 DTS par kg", "8,33 DTS par kg de poids brut", "26 DTS par kg", "835 DTS par colis"], bonne: 1, explication: "Sauf déclaration de valeur ou faute grave." },
      { q: "Depuis le 28 décembre 2024, la limite de la Convention de Montréal pour le fret est de :", choix: ["17 DTS/kg", "19 DTS/kg", "22 DTS/kg", "26 DTS/kg"], bonne: 3, explication: "Révision quinquennale liée à l'inflation." },
      { q: "Le carnet TIR permet :", choix: ["De payer le fret aérien", "De transiter sous scellés sans contrôle ni droits à chaque frontière", "D'assurer la marchandise", "D'éviter la lettre CMR"], bonne: 1, explication: "Convention TIR de 1975." },
      { q: "Le transport multimodal suppose :", choix: ["Un seul mode", "Plusieurs modes sous la responsabilité d'un seul opérateur avec un document unique", "Plusieurs transporteurs sans coordination", "Uniquement la route"], bonne: 1, explication: "Par exemple avec un FBL." },
      { q: "Le mode le plus adapté à des composants électroniques urgents et chers est :", choix: ["Le vraquier", "L'aérien", "Le rail", "La péniche"], bonne: 1, explication: "Fret léger, cher et urgent." },
      { q: "En CMR, les réserves pour un dommage non apparent doivent être faites dans :", choix: ["24 heures", "7 jours hors dimanches et jours fériés", "30 jours", "1 an"], bonne: 1, explication: "Les dommages apparents se signalent à la livraison." },
    ],
  },
  5: {
    titre: "L'assurance transport et la responsabilité du transporteur",
    description: "Avarie particulière, avarie commune et délaissement, polices et garanties facultés, valeur assurée, plafonds de Hambourg, CMR et Montréal, réserves et recours.",
    resume: md`
## L'essentiel — Assurance et responsabilité

- La **responsabilité du transporteur** est plafonnée et connaît des exonérations ; l'**assurance facultés** indemnise la valeur assurée puis l'assureur se **subroge** contre le transporteur.
- **Avarie particulière** : un seul intérêt ; **avarie commune** : sacrifice pour le salut commun, réparti entre navire, marchandises et fret (Règles d'York et d'Anvers).
- Taux de contribution = avarie commune / total des valeurs contributives ; contribution = valeur × taux.
- **Délaissement** : abandon de la marchandise à l'assureur en cas de perte totale réputée.
- Polices **au voyage**, **d'abonnement** ; garanties **tous risques** (clauses A), **FAP sauf** (clauses C), extensions **guerre et grèves**.
- **Valeur assurée = CIF + 10 %** ; prime = valeur assurée × taux ; franchise éventuelle.
- Maroc : Code des assurances (loi 17-99) ; importations assurées en principe au Maroc, d'où les achats FOB ou CFR.
- **Hambourg** : max(835 DTS/colis ; 2,5 DTS/kg), pas d'exonération pour faute nautique, réserves 15 jours si non apparent, prescription 2 ans ; **CMR** 8,33 DTS/kg ; **Montréal** 26 DTS/kg.
- En cas de dommage : réserves précises, preuves, commissaire d'avaries, déclaration à l'assureur.
`,
    exercices: md`
### Exercice 2 — Répartir une avarie commune

Pendant une tempête, le capitaine fait jeter à la mer des conteneurs de l'exportateur A, valant 900 000 DH, pour sauver le navire. Les valeurs sauvées sont : navire 25 000 000 DH ; marchandises de A (restantes) 2 100 000 DH ; marchandises de B 3 000 000 DH. On admet que la valeur sacrifiée entre aussi dans la masse contributive.

1. Calculez le taux de contribution.
2. Calculez la contribution de chacun et le solde de A.

<details><summary>Voir le corrigé</summary>

1. Masse contributive = 25 000 000 + 2 100 000 + 900 000 + 3 000 000 = 31 000 000 DH. Taux = 900 000 / 31 000 000 = **2,903 %** environ.
2. Navire : 25 000 000 × 2,903 % ≈ **725 806 DH** ; A : 3 000 000 × 2,903 % ≈ **87 097 DH** ; B : 3 000 000 × 2,903 % ≈ **87 097 DH**. A reçoit 900 000 DH au titre du sacrifice et doit 87 097 DH : il reçoit net **812 903 DH**. On vérifie : 725 806 + 87 097 + 87 097 = 900 000 DH.

</details>

### Exercice 3 — Assurance ou plafond ?

Un exportateur de Tanger expédie par avion vers Francfort 3 colis de 50 kg (valeur 450 000 DH). Un colis est perdu. Le taux d'assurance tous risques est de 0,25 % sur CIF + 10 %, la valeur CIF étant de 470 000 DH. 1 DTS = 13 DH.

1. Calculez la prime pour l'ensemble de l'envoi.
2. Que verse le transporteur aérien pour le colis perdu ?
3. Que verse l'assureur pour ce colis (valeur assurée au prorata) ? Conclusion ?

<details><summary>Voir le corrigé</summary>

1. Valeur assurée = 470 000 × 1,1 = 517 000 DH ; prime = 517 000 × 0,25 % = **1 292,50 DH**.
2. Montréal : 50 × 26 = 1 300 DTS, soit **16 900 DH**.
3. Un colis sur trois de même valeur : 517 000 / 3 = **172 333 DH** environ. Une prime de moins de 1 300 DH protège un écart de plus de 155 000 DH : l'assurance est indispensable pour des marchandises chères.

</details>
`,
    qcm: [
      { q: "Le jet volontaire d'une partie de la cargaison pour sauver le navire est :", choix: ["Une avarie particulière", "Une avarie commune", "Un délaissement", "Une franchise"], bonne: 1, explication: "Sacrifice pour le salut commun." },
      { q: "En avarie commune, une marchandise intacte :", choix: ["Ne contribue pas", "Contribue au prorata de sa valeur", "Est saisie définitivement", "Est remboursée en totalité"], bonne: 1, explication: "Tous les intérêts sauvés contribuent." },
      { q: "La valeur assurée d'une marchandise est en général :", choix: ["La valeur EXW", "La valeur FOB", "La valeur CIF majorée de 10 %", "Le fret seul"], bonne: 2, explication: "Elle couvre le bénéfice espéré de l'acheteur." },
      { q: "La garantie FAP sauf couvre :", choix: ["Tous les dommages", "Les événements majeurs énumérés et l'avarie commune", "Le retard seulement", "Les risques de guerre"], bonne: 1, explication: "Elle correspond aux clauses C." },
      { q: "La subrogation permet à l'assureur :", choix: ["De refuser d'indemniser", "D'exercer le recours de l'assuré contre le transporteur", "De vendre le navire", "De fixer le fret"], bonne: 1, explication: "Après avoir indemnisé l'assuré." },
      { q: "Selon les règles de Hambourg, le plafond est :", choix: ["8,33 DTS par kg", "Le plus élevé de 835 DTS par colis et 2,5 DTS par kg", "26 DTS par kg", "Illimité"], bonne: 1, explication: "Le Maroc y a adhéré." },
      { q: "Les règles de Hambourg ont supprimé l'exonération pour :", choix: ["Vice propre", "Faute nautique", "Faute de l'expéditeur", "Guerre"], bonne: 1, explication: "Contrairement aux règles de La Haye-Visby." },
      { q: "En maritime, sous Hambourg, les réserves pour un dommage non apparent se font dans :", choix: ["3 jours", "7 jours", "15 jours", "60 jours"], bonne: 2, explication: "15 jours consécutifs après la livraison." },
      { q: "La police d'abonnement convient surtout :", choix: ["À un exportateur occasionnel", "Aux flux réguliers déclarés au fur et à mesure", "Aux seuls risques de guerre", "Au transport de passagers"], bonne: 1, explication: "Taux négociés sur une période." },
      { q: "L'expert qui constate et chiffre un dommage pour l'assureur est :", choix: ["Le consignataire", "Le commissaire d'avaries", "Le transitaire", "Le douanier"], bonne: 1, explication: "Son rapport appuie la réclamation." },
    ],
  },
  6: {
    titre: "Les documents et les paiements internationaux",
    description: "Documents commerciaux, de transport et douaniers, échelle de sécurité des paiements, remise documentaire, crédit documentaire RUU 600 et irrégularités.",
    resume: md`
## L'essentiel — Documents et paiements

- Documents **commerciaux** (pro forma, facture, liste de colisage), de **transport**, d'**assurance**, **administratifs** (DUM, certificat d'origine, certificats ONSSA) ; dématérialisation par BADR et PortNet.
- La description de la marchandise doit être **identique** sur tous les documents.
- Échelle de sécurité : paiement d'avance > crédit doc **confirmé** > crédit doc irrévocable > remise documentaire > compte ouvert.
- **Remise documentaire** (règles CCI 522) : documents contre paiement (D/P) ou contre acceptation (D/A) ; la banque ne garantit rien.
- **Crédit documentaire** (RUU 600) : engagement de la banque émettrice de payer contre documents **strictement conformes**.
- Acteurs : donneur d'ordre, banque émettrice, banque notificatrice, banque **confirmante**, bénéficiaire.
- Irrévocable : non modifiable sans le bénéficiaire ; **confirmé** : couvre aussi le risque de la banque émettrice et le risque pays.
- Présentation au plus tard **21 jours** après l'expédition et avant l'expiration ; examen en 5 jours ouvrables au plus.
- Les banques examinent des **documents, pas des marchandises** ; lettre de crédit **stand-by** = garantie appelée en cas de défaut.
`,
    exercices: md`
### Exercice 2 — Choisir une technique de paiement

Pour chaque situation, proposez une technique de paiement et justifiez : a) premier envoi de 15 000 DH d'échantillons à un client canadien inconnu ; b) exportation de 4 000 000 DH vers un pays dont la banque centrale limite les transferts en devises ; c) livraison mensuelle à un client espagnol fidèle depuis dix ans ; d) vente de 600 000 DH à un client connu mais dont la trésorerie est tendue.

<details><summary>Voir le corrigé</summary>

a) **Paiement d'avance** : petit montant, client inconnu, coût minimal.
b) **Crédit documentaire irrévocable et confirmé** par une banque marocaine ou internationale : la confirmation couvre le **risque pays** (blocage des transferts).
c) **Virement** à échéance (compte ouvert), éventuellement avec assurance-crédit : la relation de confiance justifie la technique la moins coûteuse.
d) **Remise documentaire contre acceptation** (D/A) avec aval bancaire de la traite, ou crédit documentaire à paiement différé : le client obtient un délai, le vendeur une garantie.

</details>

### Exercice 3 — Contrôle de conformité

Un crédit documentaire porte sur « 2 000 cartons de sardines en conserve », CFR Dakar, montant maximal 950 000 DH, expédition au plus tard le 15 avril, validité jusqu'au 10 mai, connaissement embarqué net exigé. Documents présentés le 8 mai : facture de 948 000 DH pour 2 000 cartons ; connaissement embarqué du 16 avril, net ; certificat d'origine conforme.

1. Relevez les irrégularités.
2. La banque peut-elle payer ?

<details><summary>Voir le corrigé</summary>

1. Expédition le **16 avril**, après la date limite du 15 avril : **irrégularité**. Présentation le 8 mai, soit 22 jours après l'expédition, au-delà de **21 jours** : seconde **irrégularité**, même si le crédit est encore valide. Le montant (948 000 DH) et le connaissement net sont conformes.
2. Non, sauf si l'acheteur accepte de lever les irrégularités. Le vendeur perd la garantie bancaire.

</details>
`,
    qcm: [
      { q: "La liste de colisage indique :", choix: ["Le prix unitaire", "Le détail des colis : nombre, poids, dimensions, marques", "Le taux de change", "La date de paiement"], bonne: 1, explication: "Packing list." },
      { q: "Le crédit documentaire est régi par :", choix: ["Les Incoterms 2020", "Les RUU 600 de la CCI", "La CMR", "La convention de Montréal"], bonne: 1, explication: "En vigueur depuis 2007." },
      { q: "Dans une remise documentaire, la banque de l'acheteur :", choix: ["Garantit le paiement", "Remet les documents contre paiement ou acceptation, sans garantie", "Achète la marchandise", "Assure la marchandise"], bonne: 1, explication: "Elle n'est qu'intermédiaire." },
      { q: "Le donneur d'ordre d'un crédit documentaire est :", choix: ["L'exportateur", "L'importateur", "Le transporteur", "La banque confirmante"], bonne: 1, explication: "Il demande l'ouverture à sa banque." },
      { q: "La confirmation d'un crédit documentaire protège notamment le vendeur contre :", choix: ["Les avaries", "Le risque pays et la défaillance de la banque émettrice", "Les retards du transporteur", "Les droits de douane"], bonne: 1, explication: "Une seconde banque s'engage." },
      { q: "Sans délai spécial, les documents doivent être présentés au plus tard :", choix: ["7 jours après l'expédition", "21 jours après l'expédition", "60 jours après l'expédition", "À l'arrivée du navire"], bonne: 1, explication: "Et avant l'expiration du crédit." },
      { q: "Les banques, dans un crédit documentaire, examinent :", choix: ["La marchandise", "Les documents", "L'usine du vendeur", "Le navire"], bonne: 1, explication: "Principe d'autonomie du crédit." },
      { q: "La technique la plus sûre pour le vendeur est :", choix: ["Le compte ouvert", "La remise documentaire", "Le paiement d'avance", "Le chèque"], bonne: 2, explication: "Mais elle est peu acceptée par les acheteurs." },
      { q: "Le certificat d'origine sert principalement à :", choix: ["Prouver le paiement", "Obtenir un tarif préférentiel au titre d'un accord", "Assurer la marchandise", "Fixer le fret"], bonne: 1, explication: "Par exemple EUR.1 pour l'Union européenne." },
      { q: "La lettre de crédit stand-by est :", choix: ["Un moyen de paiement normal", "Une garantie appelée seulement en cas de défaut de paiement", "Un document de transport", "Un certificat sanitaire"], bonne: 1, explication: "Elle fonctionne à l'inverse du crédit documentaire." },
    ],
  },
  7: {
    titre: "Entrepôts, plateformes et performance logistique",
    description: "Rôle des entrepôts, cross-docking, entrepôt sous douane, zones logistiques, coût rendu total, OTIF et indicateurs, logistique durable et ajustement carbone.",
    resume: md`
## L'essentiel — Entrepôts et performance

- L'entrepôt **absorbe les écarts** de rythme, **consolide** ou **éclate** les lots, prépare les commandes, rapproche le stock du client.
- Plus d'entrepôts = délais plus courts mais stock total et coûts fixes plus élevés.
- **Cross-docking** : réception, tri et réexpédition en quelques heures, sans stockage ; exige une information fiable.
- **Entrepôt sous douane** : stockage en suspension des droits ; on paie à la sortie vers le marché marocain.
- Maroc : zones logistiques multiflux (Zenata…), ports secs, zones de Tanger Med.
- **Coût rendu** = prix + transport et assurance + droits non récupérables + frais portuaires + transport intérieur + coût du stock en transit ; **TVA récupérable exclue**.
- L'**origine** des marchandises (accords de libre-échange) peut renverser la comparaison des prix.
- **OTIF** = commandes à temps et complètes / commandes ; taux de service, coût logistique / CA, taux de remplissage, rotation, litiges ; **LPI** de la Banque mondiale.
- Logistique durable : avion et route émettent le plus par tonne-km, rail et mer le moins ; **MACF** européen (phase définitive depuis 2026) : acier, aluminium, ciment, engrais, électricité, hydrogène.
`,
    exercices: md`
### Exercice 2 — Indicateurs d'un prestataire

Un prestataire de Tanger a traité 800 commandes ce trimestre : 760 livrées à l'heure, 744 complètes, 712 à la fois à l'heure et complètes, 16 avec un litige. Ses camions ont transporté 2 900 m³ pour une capacité offerte de 3 600 m³.

1. Calculez la ponctualité, le taux de complétude, l'OTIF, le taux de litiges et le taux de remplissage.
2. Le contrat exige un OTIF de 92 %. Le prestataire le respecte-t-il ?

<details><summary>Voir le corrigé</summary>

1. Ponctualité = 760 / 800 = **95 %** ; complétude = 744 / 800 = **93 %** ; **OTIF = 712 / 800 = 89 %** ; litiges = 16 / 800 = **2 %** ; remplissage = 2 900 / 3 600 = **80,6 %**.
2. Non : 89 % < 92 %. Bien que chaque taux pris séparément dépasse 92 %, les commandes en retard ne sont pas toujours les mêmes que les commandes incomplètes. L'OTIF est l'indicateur vu par le client.

</details>

### Exercice 3 — Entrepôt sous douane

Un importateur de pièces détachées de Casablanca reçoit pour 2 000 000 DH (valeur en douane) de marchandises, soumises à un droit d'importation de 10 %. Il en vend au Maroc 25 % par trimestre. Il hésite entre tout dédouaner à l'arrivée ou stocker en entrepôt sous douane (coût : 15 000 DH par trimestre). Son coût de financement est de 2 % par trimestre.

1. Quel montant de droits paie-t-il à l'arrivée sans entrepôt ?
2. Avec l'entrepôt, combien de droits paie-t-il chaque trimestre ? Calculez l'économie de financement sur l'année (on admet que chaque tranche de droits est payée au début du trimestre de vente, et que la première tranche est payée à l'arrivée).
3. L'entrepôt est-il intéressant ? Quel autre avantage présente-t-il ?

<details><summary>Voir le corrigé</summary>

1. Droits = 2 000 000 × 10 % = **200 000 DH**, payés immédiatement.
2. Avec l'entrepôt : **50 000 DH** par trimestre. Les tranches 2, 3 et 4 sont payées avec 1, 2 et 3 trimestres de retard : économie = 50 000 × 2 % × (1 + 2 + 3) = **6 000 DH**.
3. Économie de financement (6 000 DH) < coût de l'entrepôt (4 × 15 000 = 60 000 DH) : **pas intéressant** sur ce seul critère. Il le devient si une partie des pièces est **réexportée** (vers l'Afrique de l'Ouest par exemple), car elle ne supporte alors aucun droit.

</details>
`,
    qcm: [
      { q: "Le cross-docking consiste à :", choix: ["Stocker longtemps les marchandises", "Trier et réexpédier les marchandises reçues en quelques heures, sans stockage", "Transporter par avion", "Dédouaner à l'export"], bonne: 1, explication: "Il suppose une forte synchronisation." },
      { q: "L'entrepôt sous douane permet :", choix: ["De ne jamais payer la TVA", "De stocker des marchandises importées en suspension des droits et taxes", "D'éviter toute déclaration", "D'exporter sans documents"], bonne: 1, explication: "Les droits sont payés à la mise à la consommation." },
      { q: "Dans le coût rendu d'une entreprise assujettie, la TVA à l'importation :", choix: ["Est incluse", "Est exclue car récupérable", "Est doublée", "Remplace le droit d'importation"], bonne: 1, explication: "Elle ne pèse pas sur le coût." },
      { q: "L'OTIF mesure :", choix: ["Les commandes livrées à temps et complètes", "Le coût du transport", "Le taux de remplissage des camions", "La rotation des stocks"], bonne: 0, explication: "On time in full." },
      { q: "Si 95 % des commandes sont à l'heure et 93 % complètes, l'OTIF est :", choix: ["Supérieur à 95 %", "Égal à 188 %", "Au plus égal à 93 %", "Toujours égal à 94 %"], bonne: 2, explication: "Il ne peut dépasser aucun des deux taux." },
      { q: "Multiplier le nombre d'entrepôts tend à :", choix: ["Allonger les délais", "Réduire les délais mais augmenter le stock total et les coûts fixes", "Supprimer les stocks", "Réduire tous les coûts"], bonne: 1, explication: "C'est l'arbitrage délai / coût." },
      { q: "Le LPI de la Banque mondiale mesure :", choix: ["La performance logistique des pays", "Le taux d'inflation", "La dette publique", "Le prix du pétrole"], bonne: 0, explication: "Douanes, infrastructures, ponctualité, suivi." },
      { q: "Le mode qui émet le plus de CO2 par tonne-kilomètre est :", choix: ["Le navire", "Le rail", "La route", "L'avion"], bonne: 3, explication: "Le maritime émet le moins." },
      { q: "Le MACF européen concerne notamment :", choix: ["Les agrumes", "L'acier, le ciment et les engrais", "Le textile", "Les services informatiques"], bonne: 1, explication: "Ainsi que l'aluminium, l'électricité et l'hydrogène." },
      { q: "Un fournisseur plus cher en prix FOB peut être retenu parce que :", choix: ["Son coût rendu total est plus faible", "Il facture en dirhams", "Il est plus loin", "Son produit est plus lourd"], bonne: 0, explication: "Droits, transport et délai peuvent inverser le classement." },
    ],
  },
};

export default chapitres;
