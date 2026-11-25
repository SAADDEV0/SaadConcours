// Introduction au Commerce Électronique (S5, filière MAC) — compléments par chapitre : description SEO, résumé, exercices 2 et 3, QCM.
const md = String.raw;

const chapitres = {
  1: {
    titre: "Le commerce électronique : définitions, formes et acteurs",
    description: "E-commerce : définition OCDE, B2C, B2B, C2C, B2G et D2C, m-commerce, social commerce et places de marché, acteurs et freins au Maroc, part du CA en ligne.",
    resume: md`
## L'essentiel — Définitions, formes et acteurs

- **Commerce électronique** : vente ou achat de biens ou services dont la **commande** est passée sur un réseau informatique ; paiement et livraison peuvent se faire hors ligne.
- Une commande en ligne payée en espèces à la livraison reste du e-commerce ; un achat en magasin après consultation du site n'en est pas (effet ROPO).
- **E-business** : tous les processus de l'entreprise en ligne ; le **marketing digital** n'est que la communication et l'acquisition sur les canaux numériques.
- Formes selon les acteurs : **B2C**, **B2B**, **C2C**, **B2G**, **C2B**, et **D2C** (le fabricant vend sans distributeur).
- Formes selon le canal : site propre, application (**m-commerce**), réseaux sociaux et messageries (**social commerce**), **place de marché**, quick commerce.
- La place de marché accueille des vendeurs tiers et se rémunère par une **commission**.
- Écosystème : marchand, solution technique, prestataire de paiement (CMI), banques émettrice et acquéreuse, transporteur, autorités (Bank Al-Maghrib, ANRT, CNDP, DGI).
- Freins au Maroc : confiance, préférence pour les espèces, adressage, coût de la livraison hors des grandes villes.
- Part du CA en ligne = CA des commandes en ligne / CA total, à décomposer par canal.
`,
    exercices: md`
### Exercice 2 — Classer des transactions

Classez chaque transaction (forme selon les acteurs, et commerce électronique ou non) : a) une étudiante vend son ancien ordinateur sur une plateforme de petites annonces et le remet en main propre contre espèces ; b) une commune achète du mobilier après dépôt électronique des offres sur le portail des marchés publics ; c) un client compare des réfrigérateurs sur le site d'une enseigne puis achète en magasin ; d) une marque de céramique de Safi vend ses services de table sur son propre site ; e) un restaurant commande ses légumes à un grossiste sur une application.

<details><summary>Voir le corrigé</summary>

a) **C2C**, commerce électronique : la vente a été conclue grâce à l'annonce et à la messagerie en ligne de la plateforme (la remise en main propre et le paiement en espèces ne changent rien).
b) **B2G** : l'offre est transmise en ligne, dans une procédure réglementée de marché public.
c) **Pas de commerce électronique** : la commande est passée en magasin. Le site a influencé l'achat (effet ROPO).
d) **B2C**, plus précisément **D2C** : le fabricant vend directement au consommateur.
e) **B2B** électronique : commande professionnelle sur une application.

</details>

### Exercice 3 — Évolution de la part du CA en ligne

Une enseigne d'électroménager réalise 60 millions de DH de CA en N, dont 4,8 millions en ligne. En N+1, le CA total atteint 63 millions de DH, dont 7,56 millions en ligne.

1. Calculez la part du CA en ligne pour chaque année et le taux de croissance des ventes en ligne et des ventes hors ligne.
2. Interprétez.

<details><summary>Voir le corrigé</summary>

1. Part en ligne : N : 4,8 / 60 = **8 %** ; N+1 : 7,56 / 63 = **12 %**. Croissance en ligne : 7,56 / 4,8 − 1 = **+ 57,5 %**. Ventes hors ligne : N : 60 − 4,8 = 55,2 ; N+1 : 63 − 7,56 = 55,44 ; croissance : 55,44 / 55,2 − 1 ≈ **+ 0,43 %**.
2. Presque toute la croissance de l'enseigne vient du canal en ligne : les ventes en magasin stagnent. Il faut vérifier que le canal en ligne est rentable (coût de livraison, retours, acquisition) et qu'il ne fait pas que déplacer des ventes qui auraient eu lieu en magasin (cannibalisation).

</details>
`,
    qcm: [
      { q: "Selon la définition de l'OCDE, une transaction est électronique lorsque :", choix: ["La commande est passée en ligne", "Le paiement est fait par carte", "Le produit est numérique", "Le vendeur a un site Internet"], bonne: 0, explication: "Le critère est le mode de commande ; paiement et livraison peuvent être hors ligne." },
      { q: "Un client commande sur Instagram et paie en espèces au livreur. Il s'agit :", choix: ["De commerce électronique", "D'une vente en magasin", "De marketing digital seulement", "D'une vente B2B"], bonne: 0, explication: "La commande est passée en ligne." },
      { q: "Le D2C désigne :", choix: ["La vente directe du fabricant au consommateur sans distributeur", "La vente entre deux consommateurs", "La vente à l'administration", "La vente par un distributeur multimarque"], bonne: 0, explication: "Direct to consumer." },
      { q: "Une place de marché se rémunère principalement par :", choix: ["Une commission sur les ventes des vendeurs tiers", "La revente de son propre stock uniquement", "Les impôts", "Les frais de douane"], bonne: 0, explication: "Elle accueille des vendeurs indépendants." },
      { q: "Le dépôt électronique des offres sur le portail des marchés publics relève du :", choix: ["B2G", "C2C", "B2C", "D2C"], bonne: 0, explication: "Une entreprise traite avec l'administration." },
      { q: "L'effet ROPO correspond à :", choix: ["Une recherche en ligne suivie d'un achat en magasin", "Un retour de produit en ligne", "Un paiement à la livraison", "Une commande passée sur mobile"], bonne: 0, explication: "Research online, purchase offline." },
      { q: "Le m-commerce désigne :", choix: ["Les commandes passées sur smartphone", "Le commerce de gros", "La vente en magasin", "Le paiement mobile en agence"], bonne: 0, explication: "Mobile commerce." },
      { q: "Pourquoi les statistiques de paiement par carte sous-estiment-elles le e-commerce marocain ?", choix: ["Elles ignorent les commandes payées à la livraison", "Elles comptent deux fois chaque commande", "Elles incluent les ventes en magasin", "Elles ne concernent que le B2B"], bonne: 0, explication: "Une grande partie des commandes est payée en espèces au livreur." },
      { q: "Quel organisme gère les noms de domaine en .ma ?", choix: ["L'ANRT", "La CNDP", "La DGI", "L'OMPIC"], bonne: 0, explication: "L'Agence nationale de réglementation des télécommunications." },
      { q: "Le commerce omnicanal se distingue du simple multicanal parce que :", choix: ["Les canaux sont reliés entre eux (stock, compte client, retours)", "Il n'utilise qu'Internet", "Il supprime les magasins", "Il ne vend qu'aux entreprises"], bonne: 0, explication: "Le client passe d'un canal à l'autre sans rupture." },
    ],
  },
  2: {
    titre: "Les modèles d'affaires et l'économie d'une commande",
    description: "Modèles d'affaires du e-commerce : pure player, click-and-mortar, place de marché, abonnement, dropshipping, contribution par commande et seuil de rentabilité.",
    resume: md`
## L'essentiel — Modèles d'affaires et économie d'une commande

- **Modèle d'affaires** : comment l'entreprise crée de la valeur, la délivre et en capte une partie (canevas d'Osterwalder et Pigneur, 9 blocs).
- **Pure player** (seulement en ligne), **click-and-mortar** (magasins + site), **omnicanal** (stock, prix et compte client partagés, click and collect).
- Revenus : marge sur ses stocks, **commission** (place de marché), abonnement, publicité, freemium, dropshipping.
- La place de marché est un **marché biface** : sa valeur dépend du nombre d'acheteurs et de vendeurs.
- Panier moyen = CA / nombre de commandes (en HT).
- **Contribution par commande** = panier − coût d'achat − paiement − emballage − livraison − acquisition.
- **Seuil de rentabilité** (en commandes) = coûts fixes / contribution par commande.
- Leviers : panier moyen (cross-selling, up-selling, seuil de livraison gratuite), coût d'acquisition (clients fidèles), coût logistique.
- Site propre : coûts fixes et acquisition, mais données et marque au vendeur ; place de marché : commission, peu de coûts fixes, forte dépendance.
`,
    exercices: md`
### Exercice 2 — Le seuil de livraison gratuite

Une boutique de jouets en ligne a un panier moyen de 240 DH HT, un taux de marge brute de 40 % et un coût de livraison de 30 DH, facturé 30 DH au client. Elle envisage la livraison gratuite dès 300 DH d'achat. Elle estime que 35 % des clients ajouteront des articles pour atteindre 300 DH (panier moyen de ce groupe : 310 DH), que les autres garderont un panier de 240 DH et paieront la livraison.

1. Calculez la marge brute moyenne par commande, livraison comprise, avant et après la mesure (on suppose le même nombre de commandes).
2. La mesure est-elle intéressante ?

<details><summary>Voir le corrigé</summary>

1. **Avant** : marge sur produits 240 × 40 % = 96 DH ; livraison neutre (30 facturés − 30 payés) ; marge = **96 DH**. **Après** : clients qui montent à 310 DH : 310 × 40 % = 124 DH − 30 DH de livraison offerte = 94 DH ; autres clients : 96 DH. Moyenne : 0,35 × 94 + 0,65 × 96 = 32,9 + 62,4 = **95,3 DH**.
2. La marge moyenne baisse légèrement (− 0,70 DH par commande). La mesure n'est intéressante que si la livraison gratuite attire **davantage de commandes** ou améliore le taux de conversion : avec 2 % de commandes en plus, la marge totale progresse déjà (1,02 × 95,3 = 97,2 DH par commande initiale). Il faut tester la mesure avant de la généraliser.

</details>

### Exercice 3 — Abonnement ou vente au détail ?

Une marque de café vend des paquets à 90 DH HT (coût complet hors acquisition : 54 DH). Elle propose un abonnement mensuel à 80 DH HT par paquet, livraison comprise (coût : 54 DH + 6 DH de livraison supplémentaire). Le coût d'acquisition d'un abonné est de 120 DH ; un abonné reste en moyenne 8 mois. Un acheteur au détail coûte 40 DH à acquérir et achète en moyenne 2 paquets.

Comparez la marge laissée par un abonné et par un acheteur au détail, après coût d'acquisition.

<details><summary>Voir le corrigé</summary>

- **Abonné** : marge mensuelle 80 − 54 − 6 = 20 DH ; sur 8 mois : 160 DH ; après acquisition : 160 − 120 = **40 DH**.
- **Acheteur au détail** : marge par paquet 90 − 54 = 36 DH ; sur 2 paquets : 72 DH ; après acquisition : 72 − 40 = **32 DH**.

L'abonnement rapporte un peu plus et rend le chiffre d'affaires prévisible, mais il est très sensible à la durée : à 6 mois, l'abonné ne rapporte plus que 6 × 20 − 120 = 0 DH. Le taux de désabonnement est l'indicateur à suivre.

</details>
`,
    qcm: [
      { q: "Un pure player est une entreprise qui :", choix: ["Vend uniquement en ligne", "Possède des magasins et un site", "Ne vend qu'aux entreprises", "Vend uniquement sur les réseaux sociaux"], bonne: 0, explication: "Elle n'a pas de magasins physiques." },
      { q: "Le click and collect consiste à :", choix: ["Commander en ligne et retirer en magasin", "Payer en ligne et se faire livrer à domicile", "Acheter en magasin et se faire livrer", "Revendre un produit d'occasion"], bonne: 0, explication: "C'est un service typique de l'omnicanal." },
      { q: "Une place de marché est qualifiée de marché biface parce que :", choix: ["Sa valeur dépend à la fois du nombre d'acheteurs et du nombre de vendeurs", "Elle vend deux catégories de produits", "Elle a deux sites Internet", "Elle facture deux fois la TVA"], bonne: 0, explication: "Les deux faces s'attirent mutuellement." },
      { q: "La contribution par commande se calcule :", choix: ["Panier moyen moins tous les coûts variables liés à la commande", "Chiffre d'affaires moins les coûts fixes", "Panier moyen moins la TVA", "Nombre de commandes multiplié par le panier moyen"], bonne: 0, explication: "On y inclut l'acquisition, la livraison et le paiement." },
      { q: "Un site a 240 000 DH de coûts fixes et une contribution de 80 DH par commande. Son seuil de rentabilité est de :", choix: ["3 000 commandes", "1 920 commandes", "19 200 commandes", "300 commandes"], bonne: 0, explication: "240 000 / 80 = 3 000." },
      { q: "Le dropshipping se caractérise par :", choix: ["L'expédition des produits directement par le fournisseur", "Un stock important chez le vendeur", "La vente uniquement en magasin", "Un abonnement mensuel"], bonne: 0, explication: "Le vendeur ne détient pas de stock." },
      { q: "Le principal avantage d'un site propre sur une place de marché est :", choix: ["La maîtrise des données clients et de la marque", "Un trafic gratuit et immédiat", "L'absence de coûts fixes", "L'absence de livraison"], bonne: 0, explication: "Sur une place de marché, le client se souvient surtout de la plateforme." },
      { q: "Le cross-selling consiste à :", choix: ["Proposer des produits complémentaires pour augmenter le panier", "Baisser les prix de tous les produits", "Vendre sur plusieurs pays", "Supprimer la livraison"], bonne: 0, explication: "Par exemple une housse avec un téléphone." },
      { q: "Pourquoi le coût d'acquisition diminue-t-il avec la fidélisation ?", choix: ["Les clients qui reviennent commandent sans nouvelle dépense publicitaire importante", "La TVA baisse", "Les commissions bancaires disparaissent", "La livraison devient gratuite"], bonne: 0, explication: "Le coût d'acquisition se répartit sur davantage de commandes." },
      { q: "Le modèle freemium repose sur :", choix: ["Un service de base gratuit et des options payantes", "La vente à prix coûtant", "Un prix unique pour tous", "La publicité uniquement"], bonne: 0, explication: "Une partie des utilisateurs gratuits passe aux options payantes." },
    ],
  },
  3: {
    titre: "Le site marchand et le parcours d'achat en ligne",
    description: "Site marchand : front-office et back-office, choix de la solution, fiche produit, tunnel de commande, abandon de panier, taux de conversion et test A/B.",
    resume: md`
## L'essentiel — Site marchand et parcours d'achat

- **Front-office** (ce que voit le client) et **back-office** (catalogue, commandes, clients, promotions, statistiques, liaisons avec paiement, transport, ERP).
- Solutions : plateforme en ligne (SaaS), logiciel libre, sur mesure, ou simple vitrine sur réseau social ou place de marché ; choix selon budget, compétences, besoins et évolutivité.
- Fiche produit : photos, description utile, **prix TTC et frais de livraison dès la fiche**, disponibilité, réassurance (avis, retours, contact).
- **Mobile first** : la majorité des visites se fait sur smartphone.
- **Tunnel de commande** : panier → identification → livraison → paiement → confirmation ; chaque étape a son **taux de passage**.
- Causes d'abandon : frais découverts tard, compte obligatoire, formulaire long, moyen de paiement absent, doute sur la sécurité.
- CA = sessions × taux de conversion × panier moyen.
- Taux de conversion = commandes / sessions ; taux d'abandon de panier = 1 − commandes / paniers créés.
- Le taux de conversion global = **produit** des taux de passage.
- **Test A/B** : deux versions montrées au hasard, un seul élément changé, assez de visiteurs avant de conclure.
`,
    exercices: md`
### Exercice 2 — Décomposer une baisse de chiffre d'affaires

Une boutique de prêt-à-porter en ligne a réalisé en avril 60 000 sessions, un taux de conversion de 2 % et un panier moyen de 400 DH. En mai : 66 000 sessions, 1,6 % de conversion, panier moyen 420 DH.

1. Calculez le CA de chaque mois.
2. Quel facteur explique l'évolution ? Que faut-il examiner ?

<details><summary>Voir le corrigé</summary>

1. Avril : 60 000 × 2 % = 1 200 commandes × 400 = **480 000 DH**. Mai : 66 000 × 1,6 % = 1 056 commandes × 420 = **443 520 DH** (− 7,6 %).
2. Le trafic progresse (+ 10 %) et le panier aussi (+ 5 %), mais le taux de conversion chute de 20 % (de 2 % à 1,6 %). Il faut examiner le tunnel (une étape s'est-elle dégradée ? une panne du paiement ?), la qualité du nouveau trafic (une campagne a pu attirer des visiteurs peu intéressés) et les ruptures de stock sur les produits les plus vus.

</details>

### Exercice 3 — Lire un test A/B

Version A de la fiche produit (frais de livraison affichés au panier) : 8 000 visiteurs, 160 commandes. Version B (frais affichés sur la fiche) : 8 000 visiteurs, 200 commandes.

1. Calculez le taux de conversion de chaque version et l'écart relatif.
2. Quelles précautions avant de généraliser B ?

<details><summary>Voir le corrigé</summary>

1. A : 160 / 8 000 = **2,0 %** ; B : 200 / 8 000 = **2,5 %** ; écart relatif : 2,5 / 2,0 − 1 = **+ 25 %**.
2. Vérifier que les visiteurs ont bien été répartis au hasard et sur la même période, que l'écart est statistiquement significatif (test de comparaison de deux proportions), qu'un seul élément a changé, et que le panier moyen et le taux de retour ne se dégradent pas avec B.

</details>
`,
    qcm: [
      { q: "Le back-office d'un site marchand sert à :", choix: ["Gérer le catalogue, les commandes, les clients et les statistiques", "Afficher les pages aux clients", "Livrer les colis", "Héberger les vidéos publicitaires"], bonne: 0, explication: "C'est l'outil de gestion du marchand." },
      { q: "Le taux de conversion d'un site se calcule :", choix: ["Commandes / sessions", "Commandes / paniers créés", "Sessions / commandes", "CA / sessions"], bonne: 0, explication: "On rapporte les commandes au trafic." },
      { q: "Un site a 2 000 paniers créés et 500 commandes validées. Son taux d'abandon de panier est de :", choix: ["75 %", "25 %", "40 %", "50 %"], bonne: 0, explication: "1 − 500 / 2 000 = 75 %." },
      { q: "Les taux de passage successifs d'un tunnel de commande :", choix: ["Se multiplient pour donner le taux global", "S'additionnent", "Se soustraient", "N'ont pas de lien avec le taux global"], bonne: 0, explication: "Chaque étape s'applique aux clients restants." },
      { q: "La première cause d'abandon à corriger quand les frais apparaissent à la fin est :", choix: ["Afficher les frais de livraison dès la fiche produit", "Supprimer la page panier", "Augmenter les prix", "Retirer les photos"], bonne: 0, explication: "La surprise sur les frais fait abandonner." },
      { q: "Dans un test A/B bien conduit :", choix: ["Un seul élément change entre les deux versions", "Tous les éléments changent pour gagner du temps", "Les visiteurs choisissent leur version", "Les deux versions sont testées à des mois différents"], bonne: 0, explication: "Sinon on ne sait pas quel élément a produit l'écart." },
      { q: "40 000 sessions, 2 % de conversion et un panier de 250 DH donnent un CA de :", choix: ["200 000 DH", "800 000 DH", "20 000 DH", "100 000 DH"], bonne: 0, explication: "40 000 × 0,02 × 250 = 200 000." },
      { q: "Le principe mobile first signifie :", choix: ["Concevoir le site d'abord pour le smartphone", "Vendre uniquement des téléphones", "Payer par mobile seulement", "Créer une application avant le site"], bonne: 0, explication: "La majorité des visites se fait sur mobile." },
      { q: "Le taux de rebond mesure :", choix: ["La part des sessions d'une seule page", "La part des clients qui reviennent", "La part des colis retournés", "Le taux de refus à la livraison"], bonne: 0, explication: "Le visiteur repart sans autre page." },
      { q: "Pour relancer un panier abandonné par message, il faut :", choix: ["Disposer d'un contact du client et respecter les règles sur la prospection", "Acheter une base d'adresses", "Attendre un mois", "Appeler tous les visiteurs du site"], bonne: 0, explication: "La loi 09-08 encadre la prospection électronique." },
    ],
  },
  4: {
    titre: "Le paiement en ligne et la sécurité des transactions",
    description: "Paiement en ligne : carte et CMI, paiement à la livraison, portefeuilles, 3-D Secure, tokenisation, PCI DSS, fraude et coût comparé des moyens de paiement.",
    resume: md`
## L'essentiel — Paiement en ligne et sécurité

- Moyens : **carte bancaire**, **paiement à la livraison**, virement, portefeuille électronique et paiement mobile, paiement en agence.
- Les établissements de paiement sont agréés par **Bank Al-Maghrib** (loi 103-12).
- Chaîne d'un paiement par carte : client → **prestataire de paiement** (CMI pour une grande partie des sites) → banque acquéreuse → réseau → banque émettrice → **autorisation** → règlement diminué de la commission.
- Sécurité : chiffrement **TLS** (https), **3-D Secure** (authentification du titulaire), **tokenisation**, norme **PCI DSS**, outils anti-fraude.
- **Impayé (chargeback)** : remboursement forcé après contestation du titulaire ; le marchand perd montant, produit et frais.
- 3-D Secure transfère en principe la responsabilité de la fraude à la banque émettrice, mais ajoute une étape au tunnel.
- Le paiement à la livraison coûte : **colis refusés** (aller + retour sans encaissement), frais d'encaissement, retard de trésorerie, temps de confirmation.
- **Taux de refus** = colis refusés / colis expédiés en paiement à la livraison.
- Comparaison : partir des commandes passées, marge sur les seules commandes encaissées, retirer tous les coûts ; une incitation doit rester inférieure à l'écart de contribution.
`,
    exercices: md`
### Exercice 2 — Le coût d'un taux de refus

Une boutique expédie 2 000 colis par mois en paiement à la livraison. Panier moyen 250 DH, marge brute 100 DH par colis livré, livraison aller 28 DH, retour 14 DH, frais d'encaissement 8 DH par colis livré. Le taux de refus est de 25 %. Une confirmation téléphonique systématique, assurée par une personne payée 6 000 DH par mois, le ferait tomber à 12 %.

1. Calculez la contribution mensuelle avec et sans confirmation.
2. La confirmation est-elle rentable ?

<details><summary>Voir le corrigé</summary>

1. **Sans confirmation** : colis livrés 1 500 ; marge 150 000 ; aller 2 000 × 28 = 56 000 ; retours 500 × 14 = 7 000 ; encaissement 1 500 × 8 = 12 000 ; contribution = 150 000 − 75 000 = **75 000 DH**. **Avec confirmation** : colis livrés 2 000 × 88 % = 1 760 ; marge 176 000 ; aller 56 000 ; retours 240 × 14 = 3 360 ; encaissement 1 760 × 8 = 14 080 ; salaire 6 000 ; contribution = 176 000 − 79 440 = **96 560 DH**.
2. Gain : 96 560 − 75 000 = **21 560 DH par mois** : la confirmation est très rentable. En pratique, les commandes annulées au téléphone ne sont même pas expédiées, ce qui économise aussi la livraison aller : le gain réel est encore plus élevé.

</details>

### Exercice 3 — Quel dispositif de sécurité ?

Associez chaque problème à un dispositif : a) un pirate intercepte les échanges entre le navigateur et le site ; b) un fraudeur utilise une carte volée dont il connaît le numéro et la date ; c) le marchand veut permettre aux clients de repayer en un clic sans stocker leur numéro de carte ; d) un réseau de cartes exige que tout acteur qui traite des données de carte respecte des règles de sécurité.

<details><summary>Voir le corrigé</summary>

a) **Chiffrement TLS** (https). b) **3-D Secure** : le fraudeur ne reçoit pas le code envoyé au vrai titulaire. c) **Tokenisation** : le prestataire conserve la carte et le marchand ne garde qu'un jeton. d) **Norme PCI DSS**.

</details>
`,
    qcm: [
      { q: "Dans un paiement par carte en ligne, la banque émettrice est :", choix: ["La banque du client qui a délivré la carte", "La banque du marchand", "Bank Al-Maghrib", "Le transporteur"], bonne: 0, explication: "La banque du marchand est la banque acquéreuse." },
      { q: "Le rôle principal du prestataire de services de paiement est de :", choix: ["Fournir la page de paiement sécurisée et l'interface avec les banques", "Livrer les colis", "Fixer les prix", "Contrôler les impôts du marchand"], bonne: 0, explication: "Le CMI joue ce rôle pour une grande partie des sites marocains." },
      { q: "3-D Secure permet de :", choix: ["Vérifier que la personne qui paie est bien le titulaire de la carte", "Chiffrer le site entier", "Livrer plus vite", "Supprimer la commission"], bonne: 0, explication: "Par un code à usage unique ou une validation dans l'application bancaire." },
      { q: "La tokenisation consiste à :", choix: ["Remplacer le numéro de carte par un jeton sans valeur pour un pirate", "Payer en cryptomonnaie", "Imprimer un ticket de caisse", "Diviser un paiement en plusieurs fois"], bonne: 0, explication: "Le marchand ne stocke jamais le vrai numéro." },
      { q: "Un chargeback est :", choix: ["Un remboursement forcé après contestation du titulaire de la carte", "Une réduction accordée au client", "Une commission bancaire mensuelle", "Un retour de colis refusé"], bonne: 0, explication: "Le marchand perd le montant et paie des frais." },
      { q: "Le taux de refus concerne principalement :", choix: ["Le paiement à la livraison", "Le virement bancaire", "Le paiement par carte", "Le paiement en agence"], bonne: 0, explication: "Le client refuse le colis à la porte." },
      { q: "Pour 1 000 colis expédiés avec 20 % de refus et un aller à 30 DH, le coût d'aller des colis refusés est de :", choix: ["6 000 DH", "30 000 DH", "24 000 DH", "3 000 DH"], bonne: 0, explication: "200 × 30 = 6 000 DH payés sans encaissement." },
      { q: "Les établissements de paiement au Maroc sont agréés par :", choix: ["Bank Al-Maghrib", "La CNDP", "L'ANRT", "La DGI"], bonne: 0, explication: "Loi bancaire 103-12." },
      { q: "Une incitation au paiement par carte est justifiée si :", choix: ["Elle est inférieure à l'écart de contribution entre carte et paiement à la livraison", "Elle est supérieure à la marge brute", "Elle est égale au panier moyen", "Elle s'applique aussi aux colis refusés"], bonne: 0, explication: "Sinon l'entreprise perd sur chaque client converti." },
      { q: "La norme PCI DSS est imposée par :", choix: ["Les réseaux de cartes", "Le Code de commerce", "La loi 31-08", "Les transporteurs"], bonne: 0, explication: "Elle fixe les règles de sécurité des données de carte." },
    ],
  },
  5: {
    titre: "La logistique du commerce électronique",
    description: "E-logistique : stock propre, prestataire 3PL ou dropshipping, préparation des commandes, dernier kilomètre, retours, coût par commande et volume d'indifférence.",
    resume: md`
## L'essentiel — La logistique du e-commerce

- Logistique **à la commande** : colis nombreux et petits, promesse de délai, **dernier kilomètre**, retours.
- Trois organisations : **stock propre** (maîtrise, coûts fixes), **prestataire logistique 3PL** (coûts variables, capacité pour les pics), **dropshipping** (le fournisseur expédie, pas de stock mais peu de contrôle).
- Préparation : réception, rangement, **prélèvement (picking)**, contrôle, emballage, étiquetage ; suivre productivité et taux d'erreur.
- Un emballage trop grand fait payer de l'air quand le tarif dépend du volume.
- Dernier kilomètre : domicile, point relais ou agence, click and collect, express ; coût moyen **pondéré** selon les destinations.
- Taux de retour = commandes retournées / commandes expédiées ; coût des retours par commande = taux × coût d'un retour.
- Coût logistique par commande = coûts fixes / commandes + coûts variables par commande ; à rapporter au panier moyen.
- **Volume d'indifférence** : $Q = (CF_{int} - CF_{ext}) / (cv_{ext} - cv_{int})$ ; en dessous, externaliser ; au-dessus, l'interne coûte moins.
- Ne pas oublier les **pics** (Ramadan, Aïd, rentrée, soldes) et la capacité de l'entrepôt.
`,
    exercices: md`
### Exercice 2 — Livraison en point relais

Une boutique de vêtements livre 3 000 colis par mois à domicile à 35 DH. 12 % des livraisons échouent au premier passage et demandent un second passage facturé 15 DH. Elle envisage de proposer la livraison en point relais à 20 DH (sans échec de livraison), avec une réduction de 10 DH pour le client. Elle pense que 40 % des clients choisiront le point relais.

Calculez le coût net mensuel de livraison (réduction comprise) avant et après.

<details><summary>Voir le corrigé</summary>

**Avant** : 3 000 × 35 = 105 000 ; seconds passages : 3 000 × 12 % × 15 = 5 400 ; total **110 400 DH**.
**Après** : domicile 1 800 colis : 1 800 × 35 = 63 000 + 1 800 × 12 % × 15 = 3 240 ; point relais 1 200 colis : 1 200 × (20 + 10) = 36 000 ; total **102 240 DH**.
Économie : **8 160 DH par mois**, malgré la réduction accordée aux clients.

</details>

### Exercice 3 — Dropshipping ou stock ?

Un vendeur hésite entre le dropshipping (achat 120 DH par article, expédition par le fournisseur depuis l'étranger en 15 jours, taux de refus 30 %) et l'achat d'un stock au Maroc (achat 90 DH par article par lots de 500, livraison en 2 jours, taux de refus 15 %). Citez les éléments de coût et de risque à comparer, sans calcul.

<details><summary>Voir le corrigé</summary>

- **Coûts** : prix d'achat unitaire (plus élevé en dropshipping), frais d'expédition et de retour, coût des refus (plus fréquents quand le délai est long), droits de douane et formalités pour les colis venant de l'étranger, coût du stockage et de l'argent immobilisé dans le stock.
- **Risques** : en dropshipping, délais longs, qualité non contrôlée, retours presque impossibles, réputation abîmée ; avec un stock, risque d'invendus (500 pièces à écouler) et besoin de trésorerie.
- Règle pratique : le dropshipping sert à **tester** un produit ; dès qu'il se vend régulièrement, un stock local améliore délais, refus et marge.

</details>
`,
    qcm: [
      { q: "Le dernier kilomètre désigne :", choix: ["L'étape de livraison entre le dernier point de tri et le client", "Le transport entre l'usine et le port", "La préparation des commandes", "Le retour des invendus au fournisseur"], bonne: 0, explication: "C'est l'étape la plus coûteuse par colis." },
      { q: "Le picking désigne :", choix: ["Le prélèvement des articles d'une commande dans l'entrepôt", "Le choix du transporteur", "Le paiement à la livraison", "L'emballage cadeau"], bonne: 0, explication: "C'est souvent l'opération la plus coûteuse en temps." },
      { q: "En dropshipping :", choix: ["Le fournisseur expédie directement au client", "Le marchand stocke tout dans son entrepôt", "Le client vient chercher le produit à l'usine", "Le prestataire logistique gère le stock du marchand"], bonne: 0, explication: "Le marchand ne voit jamais le produit." },
      { q: "Coûts fixes 90 000 DH, 4 500 commandes, coûts variables 40 DH : le coût logistique par commande est de :", choix: ["60 DH", "40 DH", "20 DH", "130 DH"], bonne: 0, explication: "90 000 / 4 500 + 40 = 20 + 40 = 60." },
      { q: "70 % des colis à 25 DH et 30 % à 45 DH donnent un coût moyen de livraison de :", choix: ["31 DH", "35 DH", "30 DH", "33 DH"], bonne: 0, explication: "0,7 × 25 + 0,3 × 45 = 17,5 + 13,5 = 31." },
      { q: "Au-dessus du volume d'indifférence, la solution la moins chère est en général :", choix: ["Celle qui a les coûts fixes les plus élevés et le coût variable le plus faible", "Celle qui a le coût variable le plus élevé", "Toujours l'externalisation", "Le dropshipping"], bonne: 0, explication: "Les coûts fixes se répartissent sur un grand volume." },
      { q: "Interne : 100 000 + 6Q ; prestataire : 10 000 + 18Q. Le volume d'indifférence est de :", choix: ["7 500 commandes", "5 000 commandes", "9 000 commandes", "4 500 commandes"], bonne: 0, explication: "90 000 / 12 = 7 500." },
      { q: "Le taux de retour est généralement le plus élevé dans :", choix: ["L'habillement et les chaussures", "L'alimentation", "Les recharges téléphoniques", "Les livres numériques"], bonne: 0, explication: "Les problèmes de taille sont fréquents." },
      { q: "L'avantage principal du point relais pour le marchand est :", choix: ["Un coût plus faible et l'absence d'échec de livraison", "Une livraison plus rapide qu'à domicile", "La suppression des retours", "L'absence d'emballage"], bonne: 0, explication: "Le client vient chercher son colis." },
      { q: "Un prestataire 3PL est particulièrement utile pour :", choix: ["Absorber des pics d'activité sans investir dans un entrepôt", "Produire les marchandises", "Fixer les prix de vente", "Remplacer le site marchand"], bonne: 0, explication: "Ses coûts sont surtout variables et sa capacité s'adapte." },
    ],
  },
  6: {
    titre: "Le cadre juridique du commerce électronique au Maroc",
    description: "Droit du e-commerce au Maroc : contrat électronique (loi 53-05), loi 31-08 et vente à distance, rétractation de 7 ou 30 jours, remboursement, loi 09-08 et CNDP.",
    resume: md`
## L'essentiel — Le cadre juridique du e-commerce

- Textes : DOC et **loi 53-05** (contrat électronique), **loi 43-20** (services de confiance), **loi 31-08** (consommateur), **loi 09-08** (données personnelles), loi 104-12 (prix et concurrence).
- Contrat en ligne valable si le client a pu **vérifier le détail et le prix total, et corriger**, avant de confirmer (article 65-5 du DOC) : principe du **double clic** ; accusé de réception.
- L'écrit électronique a la valeur de l'écrit papier si l'auteur est identifié et l'intégrité garantie.
- Offre à distance (loi 31-08, art. 29) : caractéristiques, identité et coordonnées du fournisseur, identifiant fiscal du cyber-commerçant assujetti à la TVA, **délais et frais de livraison**, droit de rétractation, modalités de paiement, validité de l'offre.
- **Confirmation écrite** des informations, au plus tard à la livraison (art. 32) ; exécution dans **30 jours** au plus sauf accord contraire (art. 39).
- **Rétractation** (art. 36) : **7 jours**, ou **30 jours** sans confirmation écrite ; à compter de la **réception** du bien ; sans motif ni pénalité, frais de retour éventuels à la charge du client.
- **Remboursement** sans délai et au plus tard **15 jours** après l'exercice du droit (art. 37).
- Exclusions (art. 38) : biens personnalisés ou sur mesure, périssables, logiciels et enregistrements descellés, journaux, services commencés avec accord, prix liés aux marchés financiers.
- **Loi 09-08** : finalité, information, droits, déclaration à la **CNDP**, sécurité ; prospection électronique seulement avec **consentement préalable** (art. 10) : pas de case précochée.
`,
    exercices: md`
### Exercice 2 — Calculer les délais

Un client commande un téléphone le 2 mai, reçoit la confirmation écrite le 2 mai et le colis le 6 mai. Il exerce son droit de rétractation le 12 mai et renvoie le téléphone.

1. Est-il dans les délais ?
2. Le vendeur le rembourse le 5 juin. Est-ce régulier ?
3. Même question si le client n'avait reçu aucune confirmation écrite et s'était rétracté le 30 mai.

<details><summary>Voir le corrigé</summary>

1. Le délai de 7 jours court à partir de la **réception** (6 mai) : il expire vers le 13 mai. Le 12 mai, le client est **dans les délais**.
2. Le remboursement doit intervenir au plus tard **15 jours** après l'exercice du droit, soit vers le 27 mai. Le 5 juin est **tardif** : la somme produit des intérêts au taux légal.
3. Sans confirmation écrite, le délai est de **30 jours** à compter du 6 mai, soit jusqu'au 5 juin environ : une rétractation le 30 mai est **valable**.

</details>

### Exercice 3 — Rétractation possible ou non ?

Pour chaque achat en ligne, dites si le droit de rétractation s'applique : a) un lot de tee-shirts standards ; b) un gâteau d'anniversaire avec le prénom de l'enfant ; c) un logiciel livré sur clé dont le client a ouvert l'emballage scellé ; d) un abonnement à un magazine ; e) un sac en cuir de couleur standard.

<details><summary>Voir le corrigé</summary>

a) **Oui**. b) **Non** : bien personnalisé et périssable (article 38). c) **Non** : logiciel descellé. d) **Non** : journaux, périodiques et magazines sont exclus. e) **Oui** : produit standard.

</details>
`,
    qcm: [
      { q: "Selon la loi 31-08, le délai normal de rétractation pour un achat à distance est de :", choix: ["7 jours", "15 jours", "30 jours", "3 jours"], bonne: 0, explication: "Article 36." },
      { q: "Le délai de rétractation passe à 30 jours lorsque :", choix: ["Le fournisseur n'a pas confirmé par écrit les informations prévues", "Le produit coûte plus de 1 000 DH", "Le client habite hors de Casablanca", "Le paiement a été fait par carte"], bonne: 0, explication: "Défaut de confirmation des informations des articles 29 et 32." },
      { q: "Pour un bien, le délai de rétractation court à compter de :", choix: ["La réception du bien", "La commande", "Le paiement", "La facture"], bonne: 0, explication: "Pour les services, il court à partir de l'acceptation de l'offre." },
      { q: "Après une rétractation, le fournisseur doit rembourser au plus tard dans les :", choix: ["15 jours", "7 jours", "30 jours", "60 jours"], bonne: 0, explication: "Article 37 ; au-delà, intérêts au taux légal." },
      { q: "Lequel de ces biens est exclu du droit de rétractation ?", choix: ["Un bijou gravé au nom du client", "Un pantalon de taille standard", "Un téléphone neuf", "Une lampe de bureau"], bonne: 0, explication: "Les biens nettement personnalisés sont exclus." },
      { q: "Le principe du double clic signifie que :", choix: ["Le client peut vérifier et corriger sa commande avant de la confirmer", "Le client paie deux fois", "Le vendeur doit appeler deux fois le client", "La commande est livrée en deux colis"], bonne: 0, explication: "Article 65-5 du DOC, issu de la loi 53-05." },
      { q: "La prospection par courrier électronique est permise :", choix: ["Avec le consentement préalable de la personne", "Sans aucune condition", "Seulement le week-end", "Si la case de consentement est précochée"], bonne: 0, explication: "Loi 09-08, article 10." },
      { q: "L'autorité marocaine chargée de la protection des données personnelles est :", choix: ["La CNDP", "Le Conseil de la concurrence", "L'AMMC", "L'OMPIC"], bonne: 0, explication: "Commission nationale de contrôle de la protection des données à caractère personnel." },
      { q: "Sauf accord contraire, le fournisseur à distance doit exécuter la commande dans un délai maximum de :", choix: ["30 jours", "7 jours", "15 jours", "90 jours"], bonne: 0, explication: "Article 39 de la loi 31-08." },
      { q: "Une clause « aucun retour accepté » sur des vêtements standards vendus en ligne :", choix: ["Est sans effet face au droit de rétractation", "Est toujours valable", "Supprime la garantie fiscale", "Est obligatoire"], bonne: 0, explication: "Le droit de rétractation est d'ordre légal." },
    ],
  },
};

export default chapitres;
