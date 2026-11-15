**Concours national d'accès aux écoles de management (CNAEM) — session 2019**
**Filière économique et commerciale, option technologique (ECT)**
**Épreuve : Gestion, management et informatique — mardi 21 mai 2019, de 8 h à 12 h (4 heures)**

*L'épreuve comprend 18 pages. Réservez, dans le cahier de rédaction, des parties séparées pour chaque dossier et numérotez les questions de chaque dossier traité. Matériel autorisé : calculatrice de poche, même programmable et alphanumérique, à fonctionnement autonome, sans imprimante, sans document d'accompagnement. Si le texte du sujet, de ses questions ou de ses annexes vous conduit à formuler une ou plusieurs hypothèses, mentionnez-les explicitement dans votre copie.*

| Dossier | Annexes |
|---|---|
| Dossier 1 : analyse stratégique | Annexes 1 à 4 |
| Dossier 2 : analyse comptable et financière | Annexes 5 à 10 |
| Dossier 3 : système d'information et gestion des ressources humaines | Annexes 11 à 14 |
| Dossier 4 : activité et risque d'exploitation | Annexes 15 et 16 |

---

## Le cas MED PAPER

Créée en 1948, MED PAPER est positionnée sur le papier d'emballage et le papier pour impression et écriture, avec des activités de fabrication, d'achat, de transformation, d'importation, de vente et d'exportation de cellulose, de papier et de carton.

Ces dernières années, la société a subi de lourds déficits et son cours en Bourse a perdu près de 33 % depuis 2012. Unique producteur marocain de papier en bobine et en rame, elle voit son chiffre d'affaires baisser depuis 2014 : 116,9 MDH cette année-là, 88,4 MDH en 2016. Son résultat net est déficitaire depuis plusieurs années (perte de 29,1 MDH en 2016).

MED PAPER attribue ses difficultés à l'explosion des importations de papier en bobine et en rame par les opérateurs locaux (+283 % en 2014 par rapport à 2013, +6 % au seul premier semestre 2015). Les importateurs justifient ce choix par une meilleure qualité, une meilleure adaptation aux besoins des clients et le respect des délais de livraison, points sur lesquels MED PAPER accuse des lacunes.

En 2016, MED PAPER a obtenu une **mesure de sauvegarde** : un droit additionnel de 25 % *ad valorem* sur les importations de produits papiers, pour quatre ans, malgré l'opposition des imprimeurs et des importateurs, qui craignent un affaiblissement de tout le secteur. Le calendrier de démantèlement prévoit 25 % en 2016, 22,5 % en 2017, 20,5 % en 2018, 17,5 % en 2019 et 15 % en 2020. Pour les opérateurs, cette taxe ne réglera pas le problème, qui est structurel : la compétitivité de MED PAPER est faible, d'autant que la pâte à papier, sa matière première essentielle, est elle-même importée. Au premier semestre 2017, ses fonds propres restent négatifs, même si le résultat net redevient positif.

---

## Dossier 1 : analyse stratégique

Malgré ses difficultés, le marché du papier reste porteur : demande des entreprises, efforts d'alphabétisation, développement de la grande distribution. Sensibles aux fluctuations du coût de la matière première, les entreprises du secteur, dont MED PAPER, automatisent progressivement leurs processus de production pour s'adapter à la concurrence et réduire leurs coûts.

*En vous basant sur les annexes 1 à 4 :*

**1.** Caractérisez l'environnement de la société MED PAPER à l'aide du modèle PESTEL. Déduisez-en les opportunités et les menaces.
**2.** Identifiez les forces et les faiblesses de MED PAPER selon l'approche par les ressources et les compétences.
**3.** Quelles sont les stratégies globales adoptées par MED PAPER ? Quels en sont les risques ?
**4.** Résumez les principaux axes du plan d'ajustement proposé par MED PAPER, en montrant leur cohérence avec les problèmes qu'elle traverse.

## Dossier 2 : analyse comptable et financière

Ces dernières années, MED PAPER a connu des problèmes de trésorerie qui ont failli remettre en cause la poursuite de son exploitation. Sa situation nette est devenue négative et de graves problèmes de financement ont rendu difficiles ses importations de pâte.

*En vous basant sur les annexes 5 à 10 et sur vos connaissances :*

**1.** Définissez le principe de continuité d'exploitation et identifiez les ajustements à apporter aux états de synthèse en son absence.
**2.** Reconstituez les écritures comptables relatives à l'importation de matières premières, passées au journal de la société en 2018 et 2019.
**3.** Analysez l'équilibre fonctionnel de la société en calculant le fonds de roulement, le BFR et la trésorerie.
**4.** Rédigez une note de synthèse sur l'évolution des soldes de gestion, des résultats et de l'équilibre financier de MED PAPER.

## Dossier 3 : système d'information et gestion des ressources humaines

Les dirigeants envisagent deux pistes pour relancer l'activité : agir sur le capital humain (optimisation des effectifs, formation, spécialisation, pour améliorer la productivité) ; agir sur le capital technique (modernisation et automatisation de l'outil de production, recherche d'économies d'échelle).

*En vous basant sur les annexes 11 à 14 :*

**1.** Retrouvez les taux d'encadrement et de turnover de 2016. Citez d'autres indicateurs sociaux et justifiez leur utilité pour apprécier le climat social de MED PAPER.
**2.** Quelles sont les insuffisances de la politique sociale de MED PAPER ?
**3.** En vous fondant sur les théories de la motivation de Herzberg et de Vroom, proposez des solutions aux insuffisances relevées.
**4.** Recopiez et complétez, en langage Scilab, la fonction `TurnOver`, qui reçoit en paramètres le nombre de départs, le nombre de recrutements, l'effectif de l'année précédente et l'évolution de l'effectif, et qui renvoie le taux de turnover de MED PAPER.
**5.** Le vecteur `Salaries` contient, dans ses lignes, les codes des salariés éligibles au tirage au sort du pèlerinage. Recopiez et complétez, en langage Scilab, la fonction `Tirage`, qui utilise la loi uniforme et la fonction `grand` pour choisir deux salariés identifiés par leur code.

Pour gérer, entre autres, les informations sur les ressources humaines, MED PAPER utilise une base de données dont voici une partie du schéma :

- Produit (**Refproduit**, Designation, Prix)
- Ventes (**Refproduit#**, **CodeSal#**, **DateVente**, Quantite)
- Salaries (**CodeSal**, nom, prenom, adresse, telephone, NbreEnfant, anciennete)
- Action_Sociale (**CodeAct**, Nom_Action, Montant, Date, CodeSal#)

*Les attributs en gras forment la clé primaire (soulignée dans le sujet) ; un attribut suivi du symbole # est une clé étrangère.*

*En vous basant sur cette structure et sur le mémento SQL de l'annexe 14, écrivez les requêtes suivantes :*

**6.** Liste des employés (code, nom, prénom) qui ont plus d'un enfant et plus de trois ans d'ancienneté.

Pour l'année 2017, la fonction `Tirage` a désigné les salariés de codes `Pap207` et `Cart08`.

**7.** Ajoutez dans la table Action_Sociale l'enregistrement de ces deux actions, pour un montant de 50 000 DH, à partir du 01/08/2019.

## Dossier 4 : activité et risque d'exploitation

L'industrie marocaine du papier connaît des difficultés structurelles qui limitent sa rentabilité et son développement ; l'absence de soutien des établissements financiers est un véritable obstacle. La société souhaite utiliser pleinement sa capacité de production pour maîtriser ses coûts.

*En vous basant sur les annexes 15 et 16 et sur vos connaissances :*

**1.** Présentez le tableau de résultat différentiel simplifié de l'exercice 2016.
**2.** Déterminez le chiffre d'affaires critique. Pourquoi n'est-il pas atteint en 2016 ?
**3.** Calculez le levier opérationnel. Appréciez le risque d'exploitation de l'entreprise.
**4.** Dans l'hypothèse où la société atteint sa capacité maximale de production, déterminez le point mort et l'indice de sécurité. Concluez.
**5.** En vous basant sur les données de 2016 et sur l'annexe 16, quelle solution conseillez-vous à la société pour améliorer sa rentabilité ?

---

## Annexes

> Les annexes 1 et 2 sont des articles de presse protégés par le droit d'auteur, et les annexes 3, 4 et 12 des documents longs : ils sont résumés ci-dessous (résumés SaadConcours). Les données chiffrées des annexes 5 à 11, 15 et 16 sont reprises intégralement.

**Annexe 1 — « Le secteur du papier et carton n'a pas profité de l'interdiction des sacs en plastique » (*La Vie éco*, 15 juillet 2017)**
- Un an après son entrée en vigueur, la loi 77-15 (« zéro mika ») n'a pas eu l'effet attendu : les industriels ont investi plusieurs millions de dirhams pour fabriquer des substituts en papier, mais leurs machines ne tournent que quelques heures par mois (président de la FIFAGE).
- Causes : retour progressif des sacs en plastique, concurrence des sacs en tissu dans les grandes surfaces et les commerces.
- Pénurie mondiale de papier et orientation à l'export des collecteurs locaux de vieux papiers et cartons, qui ont plusieurs fois arrêté les lignes de GPC et de CMCP-International Paper.
- Le secteur garde une croissance estimée à 3 %.

**Annexe 2 — « Industrie du papier : les derniers rescapés de la filière » (*L'Économiste*, 8 octobre 2018)**
- Concurrence, manque d'innovation, consommation stagnante, production énergivore : dix entreprises ont fermé ces dernières années (près de 2 500 emplois perdus) ; deux des cinq fabricants de cahiers restants (Mapaf, Imprimerie Moderne, Promograph, Sopalem, Med Paper) sont en grande difficulté. Ils réalisent 95 % de leur chiffre d'affaires à la rentrée scolaire (août à octobre).
- Importations tunisiennes jugées déloyales : un tiers des 21 000 tonnes de cahiers consommées ; importations mineures d'Espagne et du Portugal.
- Consommation faible : 15 kg de papier et carton par habitant en 2013 (313 kg en Belgique, 254 en Allemagne, 241 en Autriche) ; environ 20 kg de papier par habitant aujourd'hui (11 kg il y a dix ans) et 8,5 kg de carton. Le Maroc consomme 650 000 tonnes de papier par an, dont 30 % issues du recyclage, le reste importé ; objectif de 50 % de papier recyclé en 2020 (80 % en Allemagne ou au Japon).
- Responsabilité des entreprises : manque d'innovation et de diversification (le cahier scolaire fait 95 % du chiffre d'affaires du secteur) ; il faut gagner en compétitivité face à l'ouverture des frontières et viser plus de valeur ajoutée. Industrie très capitalistique, dépendante du soutien des banques.
- Trois grands acteurs : CMCP (100 000 tonnes par an, papier recyclé), GPC du groupe Chaâbi (60 000 tonnes, vieux papiers et cartons), Med Paper en perte de vitesse (20 000 tonnes, papier d'impression et d'écriture à base de pâte vierge et de papier recyclé).
- Pistes de Med Paper : réduction des effectifs et formation d'un capital humain spécialisé ; modernisation et automatisation, technologies performantes et économies d'échelle ; techniques moins énergivores face à la hausse de l'énergie ; rapprochements et partenariats pour optimiser la taille de la filière.

**Annexe 3 — Organisation de l'activité de MED PAPER (source : MED PAPER, résumé)**
- Société issue de la fusion de Papelera de Tetuán et de Safripac ; fabrication et transformation de papier pour impression, édition, écriture et emballage (alimentaire et industriel) ; gamme diversifiée : papier d'impression et d'écriture, produits scolaires, produits bureautiques, papier d'emballage.
- Usine dans la zone industrielle de Mghogha, à Tanger : production de papier (deux machines, capacité théorique globale de **45 000 tonnes par an**) et transformation (quatre lignes, dont le cahier scolaire et le sac en papier).
- Investissements : trois machines à sachets en 2015 (Holweg, GL, machine italienne) et deux machines à sacs en 2016 (ZD-F450 et ZD-F260), pour une demande en croissance sur le sac en papier.
- Laboratoire d'essais et de R&D ; circuit de recyclage et de ramassage du vieux papier (3 dépôts, partenariats avec des collecteurs).
- Équipe commerciale par segment, supervisée par un directeur ; marketing actif (foires, enquêtes de satisfaction, publicité, présence sur le web) ; politique tarifaire adaptée à chaque segment (industriels, imprimeurs, revendeurs, transformateurs, confectionneurs).

**Annexe 4 — Plan de restructuration de MED PAPER (source : rapport du ministère, résumé)**
MED PAPER veut se spécialiser et se recentrer sur son cœur de métier pour maîtriser son processus et ses coûts, grâce à un programme d'actions technologiques, commerciales et financières visant à améliorer sa compétitivité, répondre aux exigences des clients et réduire son endettement et ses coûts de production :
- efficacité énergétique : ramener en trois ans la part de l'énergie dans les coûts de production de 20 % à 10 %, après un audit énergétique ;
- rajeunissement et formation du personnel de production ;
- réduction des charges financières : remboursement des crédits bancaires grâce à la vente du foncier non exploité, soit une baisse de 70 % des encours bancaires ;
- modification des transformateurs moyenne tension pour réduire la consommation d'électricité ;
- mise en marche de nouvelles machines pour de nouveaux produits : sacs en papier, sachets, kraft « melon » et renforcé, papier « poussin » ;
- mise en place d'un plan marketing.

**Annexe 5 — Rapport général des commissaires aux comptes sur l'exercice 2017 (résumé)**
Depuis le 31 décembre 2013, les comptes font apparaître une situation nette inférieure au quart du capital social. L'assemblée générale extraordinaire du 19 septembre 2017 a donné pouvoir au conseil d'administration de régulariser la situation par une augmentation de capital par incorporation des réserves et primes (émission, fusion, apport), suivie d'une réduction du capital pour absorber les pertes. Selon la direction, cette régularisation, non encore réalisée, dépend de la vente en cours d'un terrain. Les états de synthèse ont donc été établis selon le principe de continuité d'exploitation et ne comprennent pas les ajustements nécessaires si la société devait cesser son activité.

**Annexe 6 — Extrait des opérations comptables de 2018**
Le 18 août 2018, MED PAPER reçoit une commande de matières premières de son fournisseur portugais, d'un montant de **19 000 €**, réglée par virement bancaire : **9 000 € le 30 décembre 2018** et **10 000 € le 31 janvier 2019**. L'opération est soumise à la TVA au taux de 20 %, payée à l'importation au Trésor par chèque bancaire.

| Date | 18-08-2018 | 30-12-2018 | 31-12-2018 | 31-01-2019 |
|---|---|---|---|---|
| Cours de l'euro | 1 € = 10,72 DH | 1 € = 10,68 DH | 1 € = 10,86 DH | 1 € = 10,77 DH |

**Annexe 7 — Prévisions 2020**
*Problèmes de trésorerie.* MED PAPER a négocié avec ses principaux créanciers pour réduire son endettement et mieux financer ses achats de pâte vierge. La direction veut en profiter pour accroître la production et la vente de produits à base de pâte vierge : le chiffre d'affaires devrait atteindre 108 millions de DH en 2020, contre 68,9 millions en 2017. Le résultat d'exploitation devrait rester négatif jusqu'en 2019.
*Contribution de l'exceptionnel.* La société compte réaliser 31 MDH de résultat non courant en 2017 (45 % du chiffre d'affaires) et 25 MDH en 2018. En 2017, il découle surtout des accords avec les créanciers : cession d'un terrain à la CDG pour 32,5 MDH et règlement d'arriérés fiscaux de 1,7 MDH, soit un résultat exceptionnel de 30 969 K DH. En 2018 sont prévus : la vente d'un terrain à une banque pour 23 000 K DH ; l'abandon par une autre banque de créances (intérêts de retard, agios…) pour plus de 9 200 K DH ; l'abandon d'une dette envers CDG Développement de 2 500 K DH ; une charge non courante liée à l'abandon d'une créance envers CDG Développement de 4 200 K DH ; soit un résultat exceptionnel prévu de 25 395 K DH. Au final, le résultat net passerait de +2 993 K DH en 2017 à −5 484 K DH en 2020.

**Annexe 8 — Évolution des indicateurs de gestion de MED PAPER (en K DH)**

| Exercices | 2014 | 2015 | 2016 | 2017 |
|---|---|---|---|---|
| I. Production de l'exercice | 107 900 | 87 100 | 80 900 | 67 500 |
| Ventes de biens et services produits | 116 900 | 101 600 | 83 300 | 68 800 |
| Variation de stocks de produits | −9 000 | −14 500 | −2 400 | −1 300 |
| II. Consommation de l'exercice | 85 800 | 73 400 | 67 700 | 54 400 |
| Achats consommés de matières et fournitures | 73 900 | 61 700 | 57 700 | 45 800 |
| Autres charges externes | 11 900 | 11 700 | 10 000 | 8 600 |
| III. Valeur ajoutée (I − II) | 22 100 | 13 700 | 13 200 | 13 100 |
| − Impôts et taxes | 1 000 | 900 | 800 | 900 |
| − Charges de personnel | 26 000 | 23 900 | 20 900 | 20 200 |
| Excédent (insuffisance) brut d'exploitation | −4 900 | −11 100 | −8 500 | −8 000 |
| − Autres charges d'exploitation | − | 77 000 | 20 500 | 20 |
| + Reprises d'exploitation, transferts de charges | − | 78 000 | 10 | − |
| − Dotations d'exploitation | 19 700 | 16 100 | 13 400 | 13 500 |
| Résultat d'exploitation | −24 600 | −26 200 | −21 910 | −21 500 |
| Résultat financier | −15 200 | −11 200 | −9 800 | −4 500 |
| Résultat courant | −39 800 | −37 400 | −31 710 | −26 020 |
| Résultat non courant | −50 | 17 800 | 3 110 | 33 620 |
| Impôt sur les résultats | 500 | 600 | 400 | 300 |
| Résultat net | −40 350 | −20 200 | −29 000 | 7 300 |

**Annexe 9 — Bilan de MED PAPER au 31-12-2017 (en K DH)**

| Actif | Brut | Amort. et prov. | Net |
|---|---|---|---|
| Charges à répartir | 1 100 | 700 | 400 |
| Brevets et marques | 1 000 | 900 | 100 |
| Fonds commercial | 65 900 | − | 65 900 |
| Terrains | 66 600 | − | 66 600 |
| Constructions | 28 800 | 23 000 | 5 800 |
| Installations techniques, matériel et outillage | 457 800 | 437 000 | 20 800 |
| Matériel de transport | 6 600 | 6 100 | 500 |
| Mobilier, matériel de bureau… | 11 600 | 11 300 | 300 |
| Autres créances financières | 1 500 | − | 1 500 |
| **Total actif immobilisé** | **640 900** | **479 000** | **161 900** |
| Stock de matières premières | 16 200 | − | 16 200 |
| Stock de produits finis | 14 300 | − | 14 300 |
| Clients et comptes rattachés | 106 100 | 30 000 | 76 100 |
| État débiteur | 7 400 | − | 7 400 |
| Autres débiteurs | 5 700 | − | 5 700 |
| Écarts de conversion – actif | 100 | − | 100 |
| **Total actif circulant hors trésorerie** | **149 800** | **30 000** | **119 800** |
| Banques | 600 | − | 600 |
| Caisses | 100 | − | 100 |
| **Total trésorerie – actif** | **700** | − | **700** |
| **Total général** | **791 400** | **509 000** | **282 400** |

| Passif | Montant |
|---|---|
| Capital social | 258 200 |
| Primes d'émission | 150 100 |
| Réserve légale | 4 500 |
| Autres réserves | 41 800 |
| Report à nouveau | −483 900 |
| Résultat net | 7 300 |
| Autres dettes de financement | 71 500 |
| **Total financement permanent** | **49 500** |
| Fournisseurs et comptes rattachés | 37 700 |
| Personnel | 3 500 |
| Organismes sociaux | 10 300 |
| État créditeur | 30 700 |
| Comptes d'associés | 6 000 |
| Autres créanciers | 700 |
| Comptes de régularisation – passif | 12 800 |
| Écarts de conversion – passif | 200 |
| **Total passif circulant hors trésorerie** | **101 900** |
| Crédits d'escompte | 53 300 |
| Crédits de trésorerie | 33 500 |
| Banques (soldes créditeurs) | 44 200 |
| **Total trésorerie – passif** | **131 000** |
| **Total général** | **282 400** |

*Les écarts de conversion – actif sont liés aux dettes fournisseurs ; les écarts de conversion – passif, aux créances clients.*

**Annexe 10 — Évolution de l'équilibre financier de MED PAPER (en K DH)**

| | 2014 | 2015 | 2016 |
|---|---|---|---|
| Actif immobilisé (valeurs brutes) | 645 000 | 639 600 | 643 000 |
| Actif circulant (valeurs brutes) | 322 100 | 211 500 | 196 000 |
| Trésorerie – actif | 1 300 | 1 900 | 500 |
| **Total actif** | **968 400** | **853 000** | **839 500** |
| Ressources propres | 585 200 | 494 700 | 471 700 |
| Dettes de financement | 134 000 | 128 700 | 125 400 |
| Passif circulant | 112 800 | 87 800 | 97 100 |
| Trésorerie – passif | 136 400 | 141 800 | 145 300 |
| **Total passif** | **968 400** | **853 000** | **839 500** |

**Annexe 11 — Performances sociales de MED PAPER**

*1. Effectif.* En 2015, MED PAPER compte en moyenne 182 salariés, 107 de moins qu'en 2014. En août 2015, des employés et des opérateurs ont abandonné leur poste à la suite de tensions provoquées par certains salariés ; une procédure judiciaire visant 110 opérateurs a été engagée le même mois et reste en cours d'instruction. La production en a souffert. La situation s'est stabilisée et la direction a comblé le manque de main-d'œuvre qualifiée par des intérimaires : l'effectif moyen de 2016 atteint 212 salariés (30 de plus qu'en 2015). En 2015 et 2016, plusieurs contrats d'intérim ont été transformés en CDI. Au 31 décembre 2016, 45 % des salariés (permanents et saisonniers) ont moins de 5 ans d'ancienneté.

| | 2014 | 2015 | 2016 |
|---|---|---|---|
| Cadres | 23 | 20 | 18 |
| Agents de maîtrise | 22 | 18 | 20 |
| Employés | 23 | 18 | 19 |
| Opérateurs | 221 | 126 | 155 |
| **Total** | **289** | **182** | **212** |
| Dont saisonniers | 42 | 24 | 22 |
| Taux d'encadrement | 9,3 % | 12,7 % | 20 % |

*2. Turnover de l'effectif permanent et saisonnier.*

| | 2014 | 2015 | 2016 |
|---|---|---|---|
| Recrutements | − | 27 | 73 |
| Départs | 18 | 134 | 43 |
| Évolution nette des effectifs | −18 | −107 | 30 |
| Taux de rotation | − | 32,5 % | 36,7 % |

L'évolution du turnover tient surtout à la transformation de contrats d'intérim en CDI en 2015 et 2016, et au plan social qui a suivi le conflit d'août 2015.

*3. Rémunérations et avantages sociaux.* Le personnel bénéficie d'un traitement conforme à la législation : congés payés, assurance maladie, décès, invalidité et accident du travail, affiliation à la CNSS et à la CIMR. MED PAPER verse diverses primes (ancienneté, assiduité, panier…), des commissions sur ventes et des gratifications, une aide pour l'Aïd Al-Adha, et finance chaque année le pèlerinage à La Mecque de 2 ou 3 salariés tirés au sort. Mais, faute de trésorerie, elle a du mal à payer les cotisations à la CNSS, aux mutuelles et à la CIMR.

*4. Politique de formation.* Dans son plan de restructuration, MED PAPER a identifié ses besoins de formation pour mieux adapter les profils aux postes et place la formation au centre de sa politique RH. Pourtant, faute de moyens, **aucun jour de formation** n'a été dispensé de 2014 à 2016.

*5. Communication interne.* Elle comprend un volet lié à la production (réunions opérationnelles par service et interservices, intranet, notes de service) et un volet sur l'efficacité du système de management de la qualité (revues de processus, revues de direction, affichage et publication). Les outils et la stratégie de communication interne sont audités périodiquement.

**Annexe 12 — Théories de la motivation (résumé)**
- *Herzberg (1959), théorie bifactorielle* : les **facteurs de motivation** (accomplissement, reconnaissance des résultats, intérêt du travail, responsabilité, promotion) créent une forte motivation quand ils sont présents ; les **facteurs d'hygiène** ou d'ambiance (politique de l'entreprise, supérieur hiérarchique, rémunération, relations entre personnes, conditions de travail) ne motivent pas, mais leur absence provoque l'insatisfaction.
- *Vroom (1964), théorie des attentes (VIE)* : la force de la motivation dépend de l'**expectation** (« suis-je capable ? » : l'effort mènera-t-il au résultat ?), de l'**instrumentalité** (« est-ce possible ? » : le résultat mènera-t-il à la récompense ?) et de la **valence** (« cela en vaut-il la peine ? » : quelle valeur a la récompense ?) ; $F = (V \times I) \times E$.

**Annexe 13 — Fonction Scilab**
*[Le squelette des fonctions à compléter ne figure pas dans la version disponible du sujet.]*

**Annexe 14 — Mémento SQL**

```
INTERROGATION D'UNE BASE
Syntaxe générale : SELECT … FROM … WHERE … GROUP BY … HAVING … ORDER BY … ;
Projection   : SELECT [DISTINCT] expr1 [AS nom1], expr2 [AS nom2], … FROM table
Restriction  : WHERE expr1 = / <> / < / > / <= / >= expr2
               WHERE expr1 BETWEEN expr2 AND expr3
               WHERE expr1 [NOT] LIKE chaîne1
               WHERE expr1 [NOT] IN (expr2, expr3, …)
               WHERE expr1 IS [NOT] NULL
               AND / OR condition
Jointure     : SELECT expr1, expr2, … FROM table1, table2
               WHERE table1.champ1 = table2.champ2 ;
Agrégats     : SELECT [expr1], …, MAX(expr2) [AS nom2]   (aussi AVG, COUNT)
Regroupement : GROUP BY expr1, expr2, …  HAVING condition
MODIFICATION D'UNE BASE
Suppression  : DELETE FROM table1 WHERE condition ;
Insertion    : INSERT INTO table [(champ1, champ2, …)] VALUES (val1, val2, …) ;
Mise à jour  : UPDATE table SET champ1 = expr1 [, champ2 = expr2, …] WHERE condition ;
Tout élément entre crochets est facultatif.
```

**Annexe 15 — Évolution des coûts et des résultats (en K DH)**

| Années | 2014 | 2015 | 2016 |
|---|---|---|---|
| Capacité de production (tonnes) | 45 000 | 45 000 | 45 000 |
| Production réelle (tonnes) | 12 642 | 11 262 | 9 825 |
| Taux d'utilisation des capacités | 28 % | 25 % | 21 % |
| Ventes (milliers de DH) | 116 885 | 101 630 | 81 336 |
| Charges (milliers de DH) | 107 783 | 98 597 | 81 675 |
| dont charges fixes | 42 000 | 42 000 | 42 000 |
| Résultat courant | 9 102 | 3 033 | −339 |

**Annexe 16 — Perspectives de développement de l'activité**
- *Hypothèse 1* : baisse du prix de vente moyen de 8 % ; élasticité-prix de la demande estimée à −2,5.
- *Hypothèse 2* : baisse du prix de vente moyen de 4 % ; élasticité-prix de la demande estimée à −4 ; hausse du coût variable unitaire moyen de 2 %.
