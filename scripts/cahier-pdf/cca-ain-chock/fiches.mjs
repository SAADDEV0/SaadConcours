// Fiches de cours (HTML + LaTeX) du cahier CCA Aïn Chock.
const R = String.raw;

const F = (titre, tex, ex) => R`<div class="formule"><div class="f-titre">${titre}</div><div class="f-tex">$$${tex}$$</div>${ex ? `<div class="f-ex"><b>Exemple :</b> ${ex}</div>` : ""}</div>`;

export const MEMO = R`
<table class="tab memo">
<thead><tr><th>Sujet</th><th>À retenir</th><th>Exemple des annales</th></tr></thead>
<tbody>
<tr><td>Bien importé</td><td>Devises × cours du dédouanement + transport + port + droits d'entrée ; TVA récupérable et frais de choix exclus</td><td>83 980 € × 10,82 + 47 250 = 955 913,60</td></tr>
<tr><td>Règlement en devises</td><td>Écart entre cours du paiement et cours d'entrée : perte (6331) ou gain (7331) de change</td><td>83 980 × 0,03 = 2 519,40 de perte</td></tr>
<tr><td>Assujetti partiel</td><td>Déduction au prorata de N-1, régularisation au prorata définitif de N</td><td>1 413 600 × 9 % = 127 224</td></tr>
<tr><td>Amortissement dégressif</td><td>Taux linéaire × 1,5 (3-4 ans), 2 (5-6 ans), 3 (plus de 6 ans), dès le 1er jour du mois</td><td>24 000 × 37,5 % × 6/12 = 4 500</td></tr>
<tr><td>Créance en devises</td><td>Baisse = écart de conversion actif + provision ; hausse = écart passif (gain latent)</td><td>45 000 × 0,23 = 10 350</td></tr>
<tr><td>Réserve légale</td><td>5 % × (bénéfice − report débiteur), jusqu'à 10 % du capital</td><td>204 000 − 188 400 = 15 600</td></tr>
<tr><td>Libération minimale</td><td>1/4 du nominal + toute la prime d'émission</td><td>5 000 × (50 + 50) = 500 000</td></tr>
<tr><td>Intérêts d'associés</td><td>Taux fiscal admis, avances plafonnées au capital libéré, période par période</td><td>35 875 − 21 937,50 = 13 937,50</td></tr>
<tr><td>Dons</td><td>Fondations listées : 100 % ; œuvres sociales : 2 ‰ du CA ; association non reconnue : 0</td><td>18 478 + 10 000 = 28 478</td></tr>
<tr><td>Voiture de tourisme</td><td>Coût TTC ; base fiscale 300 000 TTC ; dotation omise perdue</td><td>96 000 − 60 000 = 36 000</td></tr>
<tr><td>Retenue à la source</td><td>Produit comptabilisé net : réintégrer brut − net ; la retenue s'impute sur l'IS</td><td>71 400 ÷ 0,8 − 71 400 = 17 850</td></tr>
<tr><td>Cotisation minimale</td><td>CA + produits accessoires + financiers (hors dividendes) + subventions ; jamais les cessions</td><td>50 233 920 × 0,5 % = 251 170</td></tr>
<tr><td>Acomptes</td><td>25 % de l'impôt de N-1 (IS ou CM), au plus tard les 31/03, 30/06, 30/09 et 31/12</td><td>70 624 ÷ 4 = 17 656</td></tr>
<tr><td>Seuil et point mort</td><td>SR = CF ÷ taux de MCV ; point mort = SR ÷ CA × 360</td><td>300 000 ÷ 0,4 = 750 000 ; 225 jours</td></tr>
</tbody></table>

<h3 class="sous">Les 12 pièges classiques de ces concours</h3>
<table class="tab pieges">
<thead><tr><th>Piège</th><th>Réflexe</th></tr></thead>
<tbody>
<tr><td>Le mauvais cours de change</td><td>Le coût prend le cours du dédouanement (ou de la réception). Le cours du paiement ne sert qu'à calculer la perte ou le gain de change.</td></tr>
<tr><td>La TVA dans un coût</td><td>La TVA récupérable sort du coût. Elle y reste pour une voiture de tourisme, et pour la part non déductible d'un assujetti partiel.</td></tr>
<tr><td>Les frais de choix du fournisseur</td><td>Mission du directeur technique, honoraires d'un conseiller consulté avant l'achat : charges, jamais coût d'acquisition.</td></tr>
<tr><td>L'escompte de règlement</td><td>Produit financier (7386), pas une réduction du coût ni de l'achat.</td></tr>
<tr><td>Le compte du fournisseur</td><td>Immobilisation : 4481 ; exploitation : 4411 ; 1486 seulement pour une dette de plus d'un an.</td></tr>
<tr><td>Le report à nouveau débiteur</td><td>Il s'impute avant le calcul des 5 % de réserve légale ; le plafond de 10 % du capital arrête la dotation.</td></tr>
<tr><td>Le plafond du capital</td><td>Les avances d'associés rémunérées sont plafonnées au capital libéré, recalculé après chaque augmentation de capital.</td></tr>
<tr><td>Les reprises de provisions</td><td>Remonte à la constitution : provision non déductible (pénalités, propre assureur, gros travaux) → reprise déduite ; provision déductible → reprise imposable.</td></tr>
<tr><td>La dotation omise</td><td>Une dotation non comptabilisée dans son exercice est perdue fiscalement : son rattrapage est réintégré.</td></tr>
<tr><td>Brut ou net</td><td>Retenue à la source à réintégrer seulement si le produit a été comptabilisé net. Comptabilisé brut : aucun retraitement.</td></tr>
<tr><td>IS contre CM</td><td>Compare toujours les deux. Avec un gros chiffre d'affaires et une faible marge, la CM l'emporte, y compris pour calculer les acomptes de l'année suivante.</td></tr>
<tr><td>Les propositions fausses</td><td>Le sujet CCA 2022 (formation continue) n'a aucune proposition juste aux questions 8, 13 et 14, le sujet CCA 2024 à la question 4. Calcule d'abord, puis choisis la proposition qui suit le raisonnement attendu.</td></tr>
</tbody></table>`;

export const FICHES = {
  1: R`
<h3 class="sous">Les sept principes du CGNC</h3>
<table class="tab">
<thead><tr><th>Principe</th><th>Ce qu'il impose</th><th>Où il tombe</th></tr></thead>
<tbody>
<tr><td>Continuité d'exploitation</td><td>Les comptes supposent que l'activité se poursuit</td><td>Justifie l'amortissement et le coût historique</td></tr>
<tr><td>Permanence des méthodes</td><td>Mêmes méthodes d'un exercice à l'autre ; tout changement est justifié dans l'ETIC</td><td>Passage d'une méthode à une autre</td></tr>
<tr><td>Coût historique</td><td>Valeur d'entrée intangible, sauf réévaluation légale</td><td>Questions de cours 2020 et non daté 2</td></tr>
<tr><td>Spécialisation des exercices</td><td>Charges et produits rattachés à leur exercice</td><td>Régularisations, fournitures non consommées</td></tr>
<tr><td>Prudence</td><td>Pertes probables constatées, gains latents ignorés</td><td>Provisions, écarts de conversion</td></tr>
<tr><td>Clarté</td><td>Pas de compensation, classement correct</td><td>Escompte de règlement non compensé</td></tr>
<tr><td>Importance significative</td><td>Toute information utile au jugement figure dans les états</td><td>ETIC</td></tr>
</tbody></table>
<p class="note">Les cinq états de synthèse : bilan, CPC, état des soldes de gestion (TFR + tableau de la CAF), tableau de financement, ETIC. Leur objectif commun : l'<b>image fidèle</b>.</p>

<h3 class="sous">Coût d'acquisition d'une immobilisation</h3>
<table class="tab">
<thead><tr><th>Dans le coût</th><th>Hors du coût</th></tr></thead>
<tbody>
<tr><td>Prix d'achat net des remises commerciales</td><td>Escompte de règlement (produit financier 7386)</td></tr>
<tr><td>Transport, frais de port (MARSA MAROC), transit</td><td>TVA récupérable</td></tr>
<tr><td>Droits et taxes d'entrée non récupérables</td><td>Frais de mission ou honoraires pour <b>choisir</b> le fournisseur</td></tr>
<tr><td>Installation, montage (essais : selon le sujet)</td><td>Formation du personnel</td></tr>
<tr><td>Frais d'immatriculation</td><td>Vignette (taxe annuelle : 6167)</td></tr>
<tr><td>TVA non récupérable (voiture de tourisme, prorata)</td><td>Commissions bancaires du paiement (6147)</td></tr>
</tbody></table>
<p class="note">Frais d'acquisition (droits d'enregistrement, honoraires du notaire) : au choix, dans le coût ou en non-valeurs (2121).</p>
${F("Coût d'un bien importé", R`\text{Coût} = \text{Prix en devises} \times \text{cours du dédouanement} + \text{transport} + \text{port} + \text{droits d'entrée}`, "62 000 × 95 % × 10,65 + 31 360 = 658 645.")}
${F("Résultat de change au règlement", R`\text{Perte (ou gain)} = \text{Montant en devises} \times (\text{cours du paiement} - \text{cours d'entrée})`, "58 900 × (10,68 − 10,65) = 1 767 de perte.")}

<h3 class="sous">Amortissements et TVA de l'assujetti partiel</h3>
<table class="tab">
<thead><tr><th>Cas</th><th>Règle</th></tr></thead>
<tbody>
<tr><td>Linéaire</td><td>À partir de la date de mise en service, prorata en mois (ou en jours)</td></tr>
<tr><td>Dégressif</td><td>Taux linéaire × 1,5 / 2 / 3 ; dès le 1er jour du mois d'acquisition ; passage au linéaire quand il devient plus favorable</td></tr>
<tr><td>Non-valeurs</td><td>Annuités constantes sur 5 ans au plus, sans prorata temporis</td></tr>
<tr><td>Assujetti partiel</td><td>À l'achat : TVA × prorata de N-1 déduite, le reste dans le coût. Au 31/12 : complément de déduction ou reversement selon le prorata définitif</td></tr>
<tr><td>Subvention d'investissement</td><td>Capitaux propres (1311), reprise au rythme de l'amortissement ; terrain sans clause : dix fractions</td></tr>
</tbody></table>
${F("Taux dégressif", R`t = \frac{1}{n} \times c \qquad c = 1{,}5\ (3\text{-}4\ \text{ans}) ;\ 2\ (5\text{-}6\ \text{ans}) ;\ 3\ (>6\ \text{ans})`, "6 ans et 8 mois : 15 % × 3 = 45 %.")}
${F("Régularisation de la TVA (assujetti partiel)", R`\Delta = \text{TVA} \times (\text{prorata définitif} - \text{prorata provisoire})`, "1 413 600 × (81 % − 72 %) = +127 224 à déduire.")}

<h3 class="sous">Opérations courantes à connaître</h3>
<table class="tab">
<thead><tr><th>Opération</th><th>Traitement</th></tr></thead>
<tbody>
<tr><td>Emballages consignés</td><td>Dette de consignation 4425 chez le fournisseur ; non restitués : vente (7127 + TVA) ; boni sur reprise : produit</td></tr>
<tr><td>Effet remis à l'encaissement</td><td>Débit 5113, crédit 3425 ; crédit en banque après l'échéance ; commission soumise à la TVA</td></tr>
<tr><td>Créance ou dette en devises au 31/12</td><td>Baisse d'une créance (ou hausse d'une dette) : écart de conversion actif (3701 pour une créance circulante) + provision. Hausse d'une créance : écart passif (4701), gain latent non constaté en produit</td></tr>
<tr><td>Crédit-bail</td><td>Redevances en charges (6132) ; à la levée d'option, le bien entre au prix de l'option</td></tr>
<tr><td>Immobilisation produite</td><td>Coûts de l'exercice neutralisés par 7143 ; en cours 2392 à la clôture, soldé à l'achèvement</td></tr>
</tbody></table>`,

  2: R`
<h3 class="sous">Capital et libération</h3>
<table class="tab">
<thead><tr><th>Notion</th><th>Règle (loi 17-95)</th></tr></thead>
<tbody>
<tr><td>Nominal</td><td>Fixé par les statuts, au moins 50 DH dans une SA non cotée</td></tr>
<tr><td>Libération à la souscription</td><td>Au moins 1/4 du nominal + la totalité de la prime ; le solde dans les 3 ans</td></tr>
<tr><td>Actions d'apport</td><td>Intégralement libérées dès leur émission</td></tr>
<tr><td>Prix d'émission</td><td>Égal ou supérieur au nominal, jamais inférieur</td></tr>
<tr><td>Actionnaire défaillant</td><td>Ses sommes dues restent à recouvrer ; les versements anticipés sont une dette envers l'actionnaire</td></tr>
<tr><td>Augmentation par incorporation de réserves</td><td>Capitaux propres inchangés ; actions gratuites, droit d'attribution</td></tr>
</tbody></table>

<h3 class="sous">Affectation du résultat</h3>
<table class="tab">
<thead><tr><th>Ordre</th><th>Calcul</th></tr></thead>
<tbody>
<tr><td>1. Report à nouveau débiteur</td><td>Imputé en premier sur le bénéfice</td></tr>
<tr><td>2. Réserve légale</td><td>5 % du solde, jusqu'à ce qu'elle atteigne 10 % du capital</td></tr>
<tr><td>3. Réserves statutaires</td><td>Selon les statuts</td></tr>
<tr><td>4. Premier dividende</td><td>Taux statutaire × capital libéré et non amorti, prorata temporis pour les libérations en cours d'année</td></tr>
<tr><td>5. Superdividende, réserves facultatives, report à nouveau</td><td>Décision de l'assemblée</td></tr>
</tbody></table>
<p class="note">Frais de constitution : la reconstitution 2022/23 attend qu'ils soient entièrement amortis avant toute distribution de bénéfices.</p>
${F("Bénéfice distribuable", R`BD = RN - \text{report débiteur} - \text{réserve légale} - \text{réserves statutaires} + \text{report créditeur}`, "")}
${F("Droit préférentiel de souscription", R`DPS = V_{\text{avant}} - \frac{N \times V_{\text{avant}} + n \times P_e}{N + n}`, "300 − (10 000 × 300 + 2 000 × 240) ÷ 12 000 = 300 − 290 = 10.")}`,

  3: R`
<div class="encadre"><b>Pourquoi cette partie, sans QCM ?</b> D'après les candidats de la session 2026, l'écrit du Master CCA porte désormais aussi sur les <b>normes IFRS</b>. Aucun sujet CCA d'Aïn Chock connu ne contient de question IFRS : ce cahier n'utilisant que des questions tirées des sujets CCA, cette partie est une fiche de cours, sans QCM. Elle se concentre sur les différences avec le CGNC, les plus faciles à transformer en QCM.</div>
<h3 class="sous">CGNC et IFRS : les différences qui font des questions</h3>
<table class="tab">
<thead><tr><th>Opération</th><th>CGNC (Maroc)</th><th>IFRS</th></tr></thead>
<tbody>
<tr><td>Frais de constitution</td><td>Non-valeurs (2111), amorties sur 5 ans</td><td>Charges (IAS 38)</td></tr>
<tr><td>Location et crédit-bail</td><td>Hors bilan ; redevances en charges</td><td>Droit d'utilisation à l'actif + dette locative (IFRS 16)</td></tr>
<tr><td>Grosses réparations</td><td>Provision possible</td><td>Composant amorti séparément (IAS 16) ; pas de provision</td></tr>
<tr><td>Évaluation des immobilisations</td><td>Coût historique ; réévaluation légale seulement</td><td>Modèle du coût ou de la réévaluation (IAS 16)</td></tr>
<tr><td>Écarts de change latents</td><td>Écart de conversion ; perte provisionnée, gain ignoré</td><td>Pertes et gains en résultat (IAS 21)</td></tr>
<tr><td>Subventions d'investissement</td><td>Capitaux propres (1311)</td><td>Produit différé ou déduction de l'actif (IAS 20)</td></tr>
<tr><td>Recherche et développement</td><td>Peuvent être immobilisés</td><td>Recherche en charges ; développement immobilisé si 6 critères (IAS 38)</td></tr>
<tr><td>Changement de méthode</td><td>Justifié et chiffré dans l'ETIC</td><td>Rétrospectif, comparatifs retraités (IAS 8)</td></tr>
<tr><td>États financiers</td><td>Bilan, CPC, ESG, TF, ETIC</td><td>Situation financière, résultat global, variation des capitaux propres, flux de trésorerie, notes (IAS 1)</td></tr>
</tbody></table>

<h3 class="sous">Les normes à connaître</h3>
<table class="tab">
<thead><tr><th>Norme</th><th>Objet</th><th>Règle clé</th></tr></thead>
<tbody>
<tr><td>Cadre conceptuel</td><td>Fondements</td><td>Pertinence et représentation fidèle ; actif = ressource contrôlée</td></tr>
<tr><td>IAS 2</td><td>Stocks</td><td>Plus faible du coût et de la valeur nette de réalisation ; FIFO ou CMP, LIFO interdit</td></tr>
<tr><td>IAS 16</td><td>Immobilisations corporelles</td><td>Approche par composants ; coût ou réévaluation</td></tr>
<tr><td>IAS 36</td><td>Dépréciation</td><td>Valeur recouvrable = max (juste valeur − coûts de sortie ; valeur d'utilité)</td></tr>
<tr><td>IAS 37</td><td>Provisions</td><td>Obligation actuelle, sortie probable, estimation fiable</td></tr>
<tr><td>IAS 38</td><td>Incorporels</td><td>Frais de démarrage en charges ; développement sous conditions</td></tr>
<tr><td>IFRS 9</td><td>Instruments financiers</td><td>Coût amorti, juste valeur par OCI ou par résultat ; pertes de crédit attendues</td></tr>
<tr><td>IFRS 15</td><td>Chiffre d'affaires</td><td>Modèle en 5 étapes, transfert du contrôle</td></tr>
<tr><td>IFRS 16</td><td>Locations</td><td>Tout au bilan chez le preneur, sauf courte durée ou faible valeur</td></tr>
</tbody></table>
${F("Perte de valeur (IAS 36)", R`\text{Perte} = VC - \max(JV - \text{coûts de sortie} ;\ \text{valeur d'utilité})`, "500 000 − max(420 000 ; 450 000) = 50 000.")}
<p class="note">Au Maroc, les comptes sociaux restent établis selon le CGNC. Les IFRS s'imposent aux comptes consolidés des établissements de crédit (Bank Al-Maghrib) et sont utilisées par de grands groupes cotés.</p>`,

  4: R`
<h3 class="sous">Coûts complets</h3>
<table class="tab">
<thead><tr><th>Étape</th><th>Contenu</th></tr></thead>
<tbody>
<tr><td>Charges incorporables</td><td>Charges de la comptabilité générale − charges non incorporables + charges supplétives</td></tr>
<tr><td>Charges de substitution</td><td>Charge d'usage (au lieu de la dotation), charge étalée (au lieu de la provision) ; la différence est une différence d'incorporation</td></tr>
<tr><td>Répartition primaire</td><td>Charges indirectes réparties entre sections auxiliaires et principales</td></tr>
<tr><td>Répartition secondaire</td><td>Sections auxiliaires vidées dans les sections principales</td></tr>
<tr><td>Imputation</td><td>Coût de l'unité d'œuvre × nombre d'unités consommées par chaque produit</td></tr>
<tr><td>Coût de production</td><td>Matières + MOD + charges indirectes + en-cours initial − en-cours final</td></tr>
<tr><td>Coût de revient</td><td>Coût de production des produits vendus + coûts de distribution</td></tr>
</tbody></table>
${F("Coût moyen unitaire pondéré", R`CMUP = \frac{\text{valeur du stock initial} + \text{valeur des entrées}}{\text{quantité initiale} + \text{quantités entrées}}`, "(500 × 40 + 1 500 × 48) ÷ 2 000 = 46.")}
${F("Imputation rationnelle", R`CF_{\text{imputées}} = CF \times \frac{\text{activité réelle}}{\text{activité normale}}`, "120 000 × 9 000 ÷ 10 000 = 108 000 ; coût de sous-activité 12 000.")}

<h3 class="sous">Coût variable, seuil et budgets</h3>
${F("Seuil de rentabilité", R`SR = \frac{CF}{\text{taux de MCV}} \qquad \text{Point mort} = \frac{SR}{CA} \times 360`, "300 000 ÷ 0,40 = 750 000, atteint au 225e jour.")}
${F("Marge et indice de sécurité, levier", R`MS = CA - SR \qquad IS = \frac{MS}{CA} \qquad LO = \frac{MCV}{\text{résultat}} = \frac{1}{IS}`, "450 000 ; 37,5 % ; 2,67.")}
${F("Budget flexible", R`B = CF + CV_{\text{unitaire}} \times \text{activité}`, "250 000 + 16 × 20 000 = 570 000 pour l'activité réelle.")}
${F("Écarts sur matières", R`E_Q = (Q_r - Q_s) \times P_s \qquad E_P = (P_r - P_s) \times Q_r`, "(2 100 − 2 000) × 10 = +1 000 défavorable ; (9,5 − 10) × 2 100 = −1 050 favorable.")}`,

  5: R`
<h3 class="sous">IS : la grille de réintégrations et de déductions</h3>
<table class="tab">
<thead><tr><th>Élément</th><th>Traitement</th></tr></thead>
<tbody>
<tr><td>Dons</td><td>Fondations listées par le CGI (Mohammed V, Mohammed VI, Lalla Salma…), établissements publics, associations reconnues d'utilité publique : déductibles ; œuvres sociales : plafond 2 ‰ du CA ; autres : réintégrés</td></tr>
<tr><td>Intérêts des comptes courants d'associés</td><td>Taux fiscal de l'année, avances plafonnées au capital entièrement libéré ; excédent réintégré</td></tr>
<tr><td>Voiture de tourisme</td><td>Base plafonnée à 300 000 TTC, 20 % par an, prorata en mois ; dotation omise d'un exercice antérieur réintégrée</td></tr>
<tr><td>Charges payées en espèces</td><td>Déductibles dans la limite de 5 000 DH TTC par jour et par fournisseur (10 000 dans les sujets anciens)</td></tr>
<tr><td>Amendes, pénalités, majorations</td><td>Réintégrées ; le principal d'un impôt déductible reste déductible</td></tr>
<tr><td>Charge comptabilisée TTC</td><td>TVA récupérable réintégrée</td></tr>
<tr><td>Cadeaux publicitaires</td><td>Déductibles jusqu'à 100 DH TTC l'unité, avec sigle ; au-delà, TTC réintégré</td></tr>
<tr><td>Produit comptabilisé net d'une retenue</td><td>Retenue réintégrée, puis imputée sur l'IS</td></tr>
<tr><td>Écart de conversion passif</td><td>Celui de N réintégré, celui de N-1 déduit</td></tr>
<tr><td>Reprise de provision</td><td>Déduite si la provision était non déductible ; imposable sinon</td></tr>
<tr><td>Dépôt de garantie reçu en produit</td><td>Déduit (c'est une dette)</td></tr>
<tr><td>Dividendes reçus</td><td>Abattement de 100 % : déduits</td></tr>
</tbody></table>
${F("Résultat fiscal", R`RF = RC + \text{réintégrations} - \text{déductions} - \text{déficits reportables}`, "")}
${F("Intérêts d'associés admis", R`I = \sum \min(\text{avances} ;\ \text{capital libéré}) \times t_{\text{fiscal}} \times \frac{\text{mois}}{12}`, "6 750 + 11 250 + 3 937,50 = 21 937,50.")}
${F("Retenue à la source sur un produit net", R`\text{Brut} = \frac{\text{Net}}{0{,}8} \qquad \text{Retenue} = \text{Brut} - \text{Net}`, "71 400 ÷ 0,8 = 89 250 ; retenue 17 850.")}

<h3 class="sous">IS, cotisation minimale, paiement</h3>
<table class="tab">
<thead><tr><th>Année du sujet</th><th>Barème de l'IS</th><th>Cotisation minimale</th></tr></thead>
<tbody>
<tr><td>2019</td><td>10 % / 17,5 % / 31 % (sommes à déduire 22 500 et 157 500)</td><td>0,5 % (taux de 0,75 % jamais appliqué)</td></tr>
<tr><td>2020 à 2022</td><td>10 % / 20 % / 31 % (sommes à déduire 30 000 et 140 000) ; 28 % pour certaines industries</td><td>0,5 %</td></tr>
<tr><td>2026</td><td>20 % sous 100 M DH de bénéfice net, 35 % au-delà</td><td>0,25 %</td></tr>
</tbody></table>
<p class="note">Applique toujours les taux donnés par le sujet. Impôt exigible = max (IS ; CM). Acomptes : 25 % de l'impôt de N-1 chacun. Régularisation avec la déclaration, dans les 3 mois de la clôture. Déficit : 4 ans, sauf la part due aux amortissements, reportable sans limite.</p>

<h3 class="sous">TVA</h3>
<table class="tab">
<thead><tr><th>Notion</th><th>Règle</th></tr></thead>
<tbody>
<tr><td>Prorata</td><td>(CA taxable + CA exonéré avec droit) TTC ÷ (même numérateur + CA exonéré sans droit + hors champ) ; indemnités sans contrepartie exclues</td></tr>
<tr><td>Régularisation sur cession</td><td>Immeuble : 10 ans ; bien meuble : 5 ans. Reversement = TVA déduite × années restantes ÷ durée ; l'année entamée compte</td></tr>
<tr><td>TVA non récupérable</td><td>Voitures de tourisme, cadeaux de plus de 100 DH, part hors prorata</td></tr>
<tr><td>Restauration du personnel</td><td>Imposable à 10 %</td></tr>
<tr><td>Régime suspensif (article 94)</td><td>Achats des exportateurs en suspension de TVA, dans la limite du CA export de N-1, sur attestation</td></tr>
</tbody></table>
${F("Reversement de TVA à la cession d'un immeuble", R`\text{Reversement} = \text{TVA déduite} \times \frac{10 - \text{années écoulées}}{10}`, "150 000 × 6/10 = 90 000.")}`,

  6: R`
<h3 class="sous">Régularité, sincérité, image fidèle</h3>
<table class="tab">
<thead><tr><th>Critère (assertion)</th><th>Ce que l'auditeur vérifie</th></tr></thead>
<tbody>
<tr><td>Exhaustivité</td><td>Toutes les opérations sont enregistrées</td></tr>
<tr><td>Réalité (existence)</td><td>Les actifs, passifs et opérations correspondent à des faits réels</td></tr>
<tr><td>Droits et obligations</td><td>Les actifs appartiennent à l'entreprise, les dettes l'engagent</td></tr>
<tr><td>Évaluation</td><td>Montants exacts, établis selon les règles</td></tr>
<tr><td>Séparation des exercices</td><td>Rattachement au bon exercice (cut-off)</td></tr>
<tr><td>Classement et présentation</td><td>Comptes appropriés, information suffisante dans l'ETIC</td></tr>
</tbody></table>
<p class="note">Question de cours du sujet 2024. Régularité = conformité aux règles ; sincérité = application de bonne foi. Les deux concourent à l'image fidèle.</p>

<h3 class="sous">Le commissaire aux comptes au Maroc</h3>
<table class="tab">
<thead><tr><th>Question</th><th>Règle</th></tr></thead>
<tbody>
<tr><td>Qui doit en nommer un ?</td><td>Toute SA ; SARL au-delà de 50 M DH de CA ; deux CAC pour l'appel public à l'épargne et les banques</td></tr>
<tr><td>Mandat</td><td>Trois exercices, renouvelable</td></tr>
<tr><td>Qualité</td><td>Expert-comptable inscrit à l'Ordre (loi 15-89), indépendant : ni comptabilité, ni direction, ni emploi dans la société</td></tr>
<tr><td>Obligation</td><td>De moyens : assurance raisonnable</td></tr>
<tr><td>Opinions</td><td>Sans réserve, avec réserve, refus de certifier, impossibilité de certifier</td></tr>
</tbody></table>

<h3 class="sous">La démarche</h3>
<table class="tab">
<thead><tr><th>Étape ou outil</th><th>À retenir</th></tr></thead>
<tbody>
<tr><td>Prise de connaissance</td><td>Activité, risques, seuil de signification</td></tr>
<tr><td>Contrôle interne</td><td>Test de cheminement (la procédure existe), test de permanence (elle fonctionne toute l'année) ; séparation des fonctions</td></tr>
<tr><td>Contrôle des comptes</td><td>Inspection, observation physique, confirmation externe (circularisation), recalcul, procédures analytiques</td></tr>
<tr><td>COSO</td><td>Environnement de contrôle, évaluation des risques, activités de contrôle, information et communication, pilotage</td></tr>
</tbody></table>
${F("Modèle du risque d'audit", R`RA = RI \times RC \times RND`, "RI et RC élevés : l'auditeur réduit RND en étendant ses contrôles substantifs.")}
<div class="encadre"><b>Une seule question dans les sujets CCA.</b> L'audit n'apparaît qu'une fois dans les annales du CCA (question de cours de 2024), alors que les candidats de 2026 le citent parmi les modules de l'écrit et qu'il reviendra à l'oral. Cette fiche couvre l'essentiel à connaître.</div>`,
};
