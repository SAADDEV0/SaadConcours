// Fiches de cours (HTML + LaTeX) du cahier AIF.
const R = String.raw;

const F = (titre, tex, ex) => R`<div class="formule"><div class="f-titre">${titre}</div><div class="f-tex">$$${tex}$$</div>${ex ? `<div class="f-ex"><b>Exemple :</b> ${ex}</div>` : ""}</div>`;

export const MEMO = R`
<table class="tab memo">
<thead><tr><th>Sujet</th><th>À retenir</th><th>Exemple des annales</th></tr></thead>
<tbody>
<tr><td>Coût d'approvisionnement</td><td>Prix HT (TVA récupérable hors coût) + frais accessoires + temps de réception × taux + unités d'œuvre du centre</td><td>3 600 + 90 + 33,50 + 210 = 3 933,50</td></tr>
<tr><td>Amortissement linéaire</td><td>Base HT ÷ durée × mois / 12, à partir de la date d'acquisition</td><td>12 500 ÷ 5 × 7/12 = 1 458,33</td></tr>
<tr><td>Amortissement dégressif</td><td>Taux linéaire × coefficient (1,5 ; 2 ; 3), dès le 1er jour du mois d'acquisition</td><td>400 000 × 40 % × 3/12 = 40 000</td></tr>
<tr><td>Créance douteuse</td><td>Provision et perte calculées sur le HT ; la TVA est régularisée</td><td>6 000 TTC → 5 000 HT × 50 % = 2 500</td></tr>
<tr><td>Bénéfice distribuable</td><td>RN − report débiteur − réserve légale (5 %, jusqu'à 10 % du capital)</td><td>700 000 − 80 000 − 31 000 = 589 000</td></tr>
<tr><td>Voiture de tourisme</td><td>Coût TTC ; base fiscale plafonnée à 300 000 TTC ; 20 %/an</td><td>56 000 − 45 000 = 11 000 à réintégrer</td></tr>
<tr><td>Cadeaux publicitaires</td><td>Déductibles si ≤ 100 DH TTC l'unité et sigle ou marque de la société</td><td>90 HT = 108 TTC → 43 200 à réintégrer</td></tr>
<tr><td>TVA, encaissements</td><td>TVA due = encaissé TTC × t / (1 + t) ; une traite acceptée n'est pas un encaissement</td><td>150 000 ÷ 6 = 25 000</td></tr>
<tr><td>TVA déductible</td><td>TVA × part payée × prorata</td><td>27 000 × 60 % × 72 % = 11 664</td></tr>
<tr><td>Assiette de l'IS</td><td>Résultat comptable + réintégrations − déductions (dividendes : abattement 100 %)</td><td>1 000 000 + 60 000 − 50 000 = 1 010 000</td></tr>
<tr><td>Trésorerie nette</td><td>TN = FR − BFR</td><td>100 000 − 300 000 = −200 000</td></tr>
<tr><td>Effet de levier</td><td>RF = RE + (RE − i) × D / CP</td><td>12 % + 6 % × 1 = 18 %</td></tr>
<tr><td>VAN à flux constants</td><td>F × [1 − (1 + i)<sup>−n</sup>] / i − I<sub>0</sub></td><td>60 000 × 3,7908 − 200 000 ≈ 27 447</td></tr>
<tr><td>Écart sur rendement MOD</td><td>(temps réel − temps standard) × taux standard × production réelle</td><td>0,1 × 40 × 1 000 = +4 000 (défavorable)</td></tr>
</tbody></table>

<h3 class="sous">Les 12 pièges classiques de ces concours</h3>
<table class="tab pieges">
<thead><tr><th>Piège</th><th>Réflexe</th></tr></thead>
<tbody>
<tr><td>TTC dans un coût</td><td>La TVA récupérable sort du coût. 4 653,50 (prix TTC) est le piège de la question sur le coût d'approvisionnement.</td></tr>
<tr><td>« Aucune réponse ne convient »</td><td>Elle est la bonne réponse de 6 questions du questionnaire B (bénéfice distribuable, coût d'approvisionnement, cession d'un ordinateur, comptes d'acquisition…). Calcule d'abord, regarde les options ensuite.</td></tr>
<tr><td>Report à nouveau débiteur</td><td>Il s'impute sur le résultat <b>avant</b> le calcul de la réserve légale.</td></tr>
<tr><td>Écarts de conversion</td><td>Actif = perte latente (provisionnée), passif = gain latent (non constaté en produit, mais réintégré fiscalement).</td></tr>
<tr><td>Prorata temporis</td><td>Linéaire : à la date d'acquisition. Dégressif : dès le 1er jour du mois d'acquisition.</td></tr>
<tr><td>Voiture de tourisme</td><td>Base TTC (TVA non récupérable) et plafond de 300 000 TTC. Le plafond ne vise pas le transport collectif du personnel.</td></tr>
<tr><td>Cadeaux publicitaires</td><td>Plafond de 100 DH <b>TTC</b>, pas HT. Si on réintègre, on réintègre le TTC.</td></tr>
<tr><td>Frais de mission</td><td>TVA non récupérable, mais charge déductible : aucun retraitement.</td></tr>
<tr><td>Dividendes / écart passif</td><td>Dividendes reçus : on les déduit. Écart de conversion passif : on le réintègre.</td></tr>
<tr><td>Augmentation de capital</td><td>En numéraire, le capital ancien doit être entièrement libéré ; jamais d'émission en dessous du nominal.</td></tr>
<tr><td>Convention des écarts</td><td>Écart = réel − prévu : positif = défavorable pour une charge. Vérifie la convention de ton cours.</td></tr>
<tr><td>Questions recyclées</td><td>L'AIF 2025/26 reprend des énoncés de l'ACGSI 2022-2023 avec d'autres chiffres et d'autres lettres : refais toujours le calcul.</td></tr>
</tbody></table>`;

export const FICHES = {
  1: R`
<h3 class="sous">Les principes comptables (CGNC)</h3>
<table class="tab">
<thead><tr><th>Principe</th><th>Ce qu'il impose</th><th>Question type</th></tr></thead>
<tbody>
<tr><td>Continuité d'exploitation</td><td>Les comptes supposent que l'activité se poursuit</td><td>Justifie l'évaluation au coût historique</td></tr>
<tr><td>Permanence des méthodes</td><td>Mêmes méthodes d'un exercice à l'autre ; tout changement est justifié et chiffré dans l'ETIC</td><td>Passage de FIFO à CMUP</td></tr>
<tr><td>Coût historique</td><td>Les biens entrent à leur coût d'acquisition ou de production</td><td>Valeur d'entrée d'une machine</td></tr>
<tr><td>Spécialisation des exercices</td><td>Charges et produits rattachés à leur exercice</td><td>Intérêts courus, charges à payer</td></tr>
<tr><td>Prudence</td><td>Pertes probables constatées, gains latents ignorés</td><td>Provision, écart de conversion</td></tr>
<tr><td>Clarté</td><td>Pas de compensation entre actif et passif, charges et produits</td><td>Présentation des états</td></tr>
<tr><td>Importance significative</td><td>Les éléments qui influencent le jugement sont présentés</td><td>Informations de l'ETIC</td></tr>
</tbody></table>

<h3 class="sous">Coût d'acquisition d'une immobilisation</h3>
<table class="tab">
<thead><tr><th>On inclut</th><th>On exclut</th></tr></thead>
<tbody>
<tr><td>Prix d'achat net de remises ; transport ; installation ; essais et mise au point ; droits de douane ; TVA non récupérable</td><td>TVA récupérable ; formation du personnel ; frais généraux ; pertes d'exploitation initiales ; frais d'acquisition (droits de mutation, honoraires, actes), traités en charges ou en non-valeurs</td></tr>
</tbody></table>

<h3 class="sous">Comptes qui reviennent dans les annales</h3>
<table class="tab">
<thead><tr><th>Compte</th><th>Intitulé</th><th>Quand</th></tr></thead>
<tbody>
<tr><td>2355 / 2340</td><td>Matériel informatique / matériel de transport</td><td>Acquisition d'immobilisations</td></tr>
<tr><td>3455</td><td>État, TVA récupérable (34551 sur immobilisations)</td><td>TVA sur achats</td></tr>
<tr><td>4481 / 1486</td><td>Dettes sur acquisitions d'immobilisations / fournisseurs d'immobilisations (plus d'un an)</td><td>Achat d'immobilisation à crédit</td></tr>
<tr><td>3411</td><td>Fournisseurs débiteurs, avances et acomptes</td><td>Avances sur commandes</td></tr>
<tr><td>3424 / 3942</td><td>Clients douteux / provisions pour dépréciation des clients</td><td>Créances douteuses</td></tr>
<tr><td>6182 / 7196</td><td>Pertes sur créances irrécouvrables / reprises sur provisions de l'actif circulant</td><td>Créance soldée</td></tr>
<tr><td>6111</td><td>Achats de marchandises</td><td>Biens achetés pour être revendus</td></tr>
<tr><td>1117</td><td>Compte de l'exploitant</td><td>Prélèvements personnels</td></tr>
<tr><td>4493</td><td>Intérêts courus et non échus à payer</td><td>Régularisation d'un emprunt</td></tr>
</tbody></table>

<h3 class="sous">Formules et méthodes pas à pas</h3>
<p class="note">Chaque formule est écrite en LaTeX, suivie d'un exemple chiffré à refaire de tête.</p>
${F("Amortissement linéaire (prorata temporis)", R`\text{Annuité} = \frac{\text{Base HT}}{n} \times \frac{m}{12}`, "2 ordinateurs à 7 500 TTC, achetés le 1/6 : 12 500 ÷ 5 × 7/12 = 1 458,33.")}
${F("Amortissement dégressif", R`t_d = \frac{1}{n} \times c \qquad c = 1{,}5\ (3\text{-}4 \text{ ans}),\ 2\ (5\text{-}6 \text{ ans}),\ 3\ (> 6 \text{ ans})`, "Utilitaire de 400 000 HT acquis le 31/10, 5 ans : 40 %, 3 mois → 40 000.")}
${F("Résultat de cession", R`\text{Résultat} = \text{Prix de cession} - VNC \qquad VNC = \text{Valeur d'origine} - \sum \text{amortissements}`, "6 250 − 729,17 = 5 520,83 ; 4 000 − 5 520,83 = −1 520,83 (moins-value).")}
${F("Provision pour créance douteuse", R`\text{Provision} = \frac{\text{Créance TTC}}{1 + t} \times \%\ \text{de perte probable}`, "6 000 ÷ 1,2 × 50 % = 2 500 ; la créance soldée par 3 000 donne une perte de 2 500 HT.")}
${F("Intérêts courus à la clôture", R`\text{Intérêts courus} = \text{Intérêts annuels} \times \frac{\text{mois écoulés}}{12}`, "Emprunt du 1/7, intérêts de 36 000 par an : 18 000 au 31/12.")}`,

  2: R`
<h3 class="sous">Constitution et capital de la SA (loi 17-95)</h3>
<table class="tab">
<thead><tr><th>Règle</th><th>Chiffre ou condition</th></tr></thead>
<tbody>
<tr><td>Capital minimum</td><td>300 000 DH (3 000 000 DH en cas d'appel public à l'épargne)</td></tr>
<tr><td>Libération à la souscription</td><td>Apports en nature : en totalité. Numéraire : au moins un quart, le reste dans un délai de 3 ans</td></tr>
<tr><td>Capital souscrit non appelé</td><td>Compte 1119, débité (il vient en déduction du capital au bilan)</td></tr>
<tr><td>Actionnaire retardataire</td><td>Intérêts de retard = montant appelé × taux × jours / 360, plus les frais</td></tr>
<tr><td>Augmentation de capital en numéraire</td><td>Interdite tant que le capital ancien n'est pas entièrement libéré ; jamais d'émission sous le nominal</td></tr>
<tr><td>Prime d'émission</td><td>Prix d'émission − nominal ; capitaux propres (1121)</td></tr>
</tbody></table>

<h3 class="sous">Affectation du résultat</h3>
<table class="tab">
<thead><tr><th>Étape</th><th>Règle</th></tr></thead>
<tbody>
<tr><td>1. Report à nouveau débiteur</td><td>S'impute d'abord sur le résultat</td></tr>
<tr><td>2. Réserve légale</td><td>5 % du bénéfice (diminué des pertes antérieures), jusqu'à 10 % du capital</td></tr>
<tr><td>3. Réserves statutaires</td><td>Selon les statuts</td></tr>
<tr><td>4. Intérêts statutaires (premier dividende)</td><td>Taux × capital libéré et non amorti, au prorata du temps</td></tr>
<tr><td>5. Superdividende</td><td>Solde distribué, le reste en réserves facultatives ou en report à nouveau</td></tr>
<tr><td>Interdiction de distribuer</td><td>Frais d'établissement non amortis, sauf réserves libres au moins égales</td></tr>
<tr><td>Retenue à la source sur dividendes</td><td>15 % jusqu'en 2022, puis 13,75 % (2023), 12,5 % (2024), 11,25 % (2025), 10 % (2026)</td></tr>
</tbody></table>
${F("Bénéfice distribuable", R`BD = RN - \text{RAN débiteur} - \text{réserve légale} - \text{réserves statutaires} + \text{RAN créditeur}`, "700 000 − 80 000 − 5 % × 620 000 = 589 000.")}
${F("Dividende net payé", R`\text{Net} = \text{Brut} \times (1 - \text{taux de retenue})`, "(250 000 + 1 450 000) × 85 % = 1 445 000 (paiement en 2021 : débit 4465).")}

<h3 class="sous">Subventions</h3>
<table class="tab">
<thead><tr><th>Type</th><th>Objet</th><th>Traitement</th></tr></thead>
<tbody>
<tr><td>Investissement</td><td>Financer une immobilisation</td><td>1311 en capitaux propres, reprise au CPC (7577) au rythme de l'amortissement</td></tr>
<tr><td>Exploitation</td><td>Compenser l'insuffisance de certains produits ou couvrir certaines charges</td><td>716, produit d'exploitation (hors chiffre d'affaires)</td></tr>
<tr><td>Équilibre</td><td>Couvrir une perte globale</td><td>Produit non courant</td></tr>
</tbody></table>`,

  3: R`
<h3 class="sous">La cascade des coûts</h3>
<table class="tab">
<thead><tr><th>Coût</th><th>Contenu</th><th>Sert à évaluer</th></tr></thead>
<tbody>
<tr><td>Coût d'achat</td><td>Prix d'achat net HT + frais d'approvisionnement</td><td>Stocks de marchandises et de matières</td></tr>
<tr><td>Coût de production</td><td>Coût d'achat des matières consommées + charges de production</td><td>Stocks de produits finis</td></tr>
<tr><td>Coût de revient</td><td>Coût de production des produits vendus + distribution + administration</td><td>Résultat analytique</td></tr>
</tbody></table>
<table class="tab">
<thead><tr><th>Notion</th><th>À retenir</th></tr></thead>
<tbody>
<tr><td>Charges non incorporables</td><td>IS, charges non courantes, charges sur exercices antérieurs, dotations aux non-valeurs</td></tr>
<tr><td>Charges supplétives</td><td>Coûts économiques non comptabilisés (rémunération des capitaux propres, de l'exploitant), ajoutés en analytique</td></tr>
<tr><td>Répartition primaire</td><td>Charges indirectes réparties entre tous les centres</td></tr>
<tr><td>Répartition secondaire</td><td>Centres auxiliaires vidés dans les centres principaux</td></tr>
<tr><td>Unité d'œuvre</td><td>Mesure de l'activité d'un centre principal ; sert à imputer son coût aux produits</td></tr>
<tr><td>Fonctions du contrôle de gestion</td><td>Planifier (budgets), suivre les performances (tableaux de bord, écarts), aider à la décision</td></tr>
</tbody></table>

<h3 class="sous">Formules et méthodes pas à pas</h3>
${F("Coût d'approvisionnement d'une commande", R`\text{Coût} = \frac{\text{Prix TTC}}{1 + t} + \text{frais directs} + \text{durée} \times \text{taux horaire} + n_{UO} \times \text{coût de l'UO}`, "4 320 ÷ 1,2 + 90 + 0,5 × 67 + 210 = 3 933,50.")}
${F("Marge sur coût variable et seuil de rentabilité", R`MCV = CA - CV \qquad SR = \frac{CF}{\text{taux de } MCV} \qquad \text{Marge de sécurité} = CA - SR`, "MCV = 480 000 ; taux 40 % ; SR = 400 000 ÷ 0,4 = 1 000 000.")}
${F("Taux de couverture des charges fixes", R`\text{Taux de couverture} = \frac{MCV}{CF}`, "480 000 ÷ 400 000 = 1,2 : bénéficiaire.")}
${F("Imputation rationnelle des charges fixes", R`CF_{\text{imputées}} = CF \times \frac{\text{activité réelle}}{\text{activité normale}} \qquad \text{Coût de chômage} = CF - CF_{\text{imputées}}`, "Hôtel à 30 % : 300 000 imputés, 700 000 de coût de chômage.")}
${F("Écarts sur main-d'œuvre directe", R`E_{\text{temps}} = (T_r - T_s) \times \text{taux}_s \qquad E_{\text{taux}} = (\text{taux}_r - \text{taux}_s) \times T_r`, "(1 600 − 1 500) h × 40 = +4 000 : défavorable.")}`,

  4: R`
<h3 class="sous">L'équilibre financier</h3>
<table class="tab">
<thead><tr><th>Grandeur</th><th>Calcul</th><th>Lecture</th></tr></thead>
<tbody>
<tr><td>Fonds de roulement (FR)</td><td>Ressources stables − emplois stables</td><td>Positif : les ressources stables financent aussi une partie de l'actif circulant</td></tr>
<tr><td>Besoin en fonds de roulement (BFR)</td><td>Actif circulant d'exploitation − dettes d'exploitation</td><td>Positif : le cycle d'exploitation consomme de la trésorerie</td></tr>
<tr><td>Trésorerie nette (TN)</td><td>FR − BFR = trésorerie actif − trésorerie passif</td><td>Négative : l'entreprise dépend des crédits de trésorerie</td></tr>
<tr><td>Ratio d'endettement</td><td>Dettes financières / capitaux propres</td><td>Au-delà de 1, les prêteurs financent plus que les associés</td></tr>
</tbody></table>
<table class="tab">
<thead><tr><th>Pour réduire le BFR</th><th>Ce qui l'augmente</th></tr></thead>
<tbody>
<tr><td>Moins de stock, clients plus rapides, fournisseurs payés plus tard</td><td>Délai clients plus long, stocks plus lourds, fournisseurs payés plus vite</td></tr>
</tbody></table>

<h3 class="sous">Formules et méthodes pas à pas</h3>
${F("Effet de levier financier", R`RF = RE + (RE - i) \times \frac{D}{CP}`, "12 % + (12 % − 6 %) × 1 = 18 %.")}
${F("Coût moyen pondéré du capital", R`CMPC = k_{cp} \times \frac{CP}{CP + D} + k_d (1 - t) \times \frac{D}{CP + D}`, "")}
${F("Valeur actuelle nette", R`VAN = -I_0 + \sum_{t=1}^{n} \frac{F_t}{(1 + i)^t} \qquad \text{flux constants : } VAN = F \times \frac{1 - (1 + i)^{-n}}{i} - I_0`, "60 000 × 3,7908 − 200 000 ≈ 27 447.")}
${F("Emprunt : annuité constante", R`a = K \times \frac{i}{1 - (1 + i)^{-n}}`, "Amortissement constant : K/n de capital par an, intérêts décroissants (100 000, 80 000, 60 000…).")}

<table class="tab">
<thead><tr><th>Critère</th><th>Règle de décision</th></tr></thead>
<tbody>
<tr><td>VAN</td><td>VAN > 0 : le projet crée de la valeur au-delà du coût du capital</td></tr>
<tr><td>Indice de profitabilité</td><td>IP = 1 + VAN / I<sub>0</sub> ; IP > 1</td></tr>
<tr><td>TRI</td><td>Taux qui annule la VAN ; TRI > taux d'actualisation</td></tr>
<tr><td>Délai de récupération actualisé</td><td>Plus il est court, moins le projet est risqué</td></tr>
<tr><td>Taux d'actualisation</td><td>CMPC, majoré d'une prime si le projet est plus risqué que l'entreprise</td></tr>
</tbody></table>`,

  5: R`
<h3 class="sous">Impôt sur les sociétés : plafonds, taux et seuils</h3>
<table class="tab">
<thead><tr><th>Sujet</th><th>Chiffre ou règle</th><th>Remarque</th></tr></thead>
<tbody>
<tr><td>Taux de l'IS (2026)</td><td>20 % si bénéfice net &lt; 100 M DH ; 35 % au-delà ; 40 % banques et assurances</td><td>Convergence prévue par la loi de finances 2023</td></tr>
<tr><td>Cotisation minimale</td><td>0,25 % de la base (minimum 3 000 DH), taux réduits pour certains produits</td><td>Impôt dû = le plus élevé de l'IS et de la CM</td></tr>
<tr><td>Déficits</td><td>Reportables sur 4 exercices</td><td>Part liée aux amortissements : sans limite</td></tr>
<tr><td>Dividendes reçus</td><td>Abattement de 100 % : déduits</td><td>Retenue à la source chez le bénéficiaire</td></tr>
<tr><td>TPPRF</td><td>20 % sur les intérêts</td><td>Imputable sur l'IS : le produit est retenu brut</td></tr>
<tr><td>Voiture de tourisme</td><td>Base amortissable plafonnée à 300 000 DH TTC ; 20 %/an</td><td>Hors transport collectif du personnel, location, ambulances</td></tr>
<tr><td>Cadeaux publicitaires</td><td>≤ 100 DH TTC l'unité, avec sigle ou marque</td><td>Sinon : réintégration du TTC</td></tr>
<tr><td>Dons</td><td>Associations reconnues d'utilité publique : en totalité</td><td>Œuvres sociales : 2 ‰ du CA</td></tr>
<tr><td>Paiement en espèces</td><td>Charges : 5 000 DH par jour et 50 000 DH par mois par fournisseur</td><td>Ventes encaissées en espèces : amende de 6 %</td></tr>
<tr><td>Charges non déductibles</td><td>Amendes et pénalités, IS, libéralités, provisions non individualisées</td><td>Provision clients sans action en justice dans les 12 mois : réintégrée</td></tr>
</tbody></table>
${F("Résultat fiscal", R`RF = \text{Résultat comptable} + \text{réintégrations} - \text{déductions} - \text{déficits reportables}`, "1 000 000 + 60 000 − 50 000 = 1 010 000.")}
${F("Amortissement de la voiture de tourisme à réintégrer", R`\text{Réintégration} = \text{dotation comptable} - \frac{300\,000}{n} \times \frac{m}{12}`, "56 000 − 300 000 ÷ 5 × 9/12 = 56 000 − 45 000 = 11 000.")}
${F("Produits soumis à la TPPRF", R`\text{Brut} = \frac{\text{Net}}{1 - 20\,\%} \qquad \text{TPPRF} = \text{Brut} - \text{Net}`, "12 000 ÷ 0,8 = 15 000 → TPPRF 3 000.")}

<h3 class="sous">TVA : champ, exigibilité, déduction</h3>
<table class="tab">
<thead><tr><th>Notion</th><th>Règle</th></tr></thead>
<tbody>
<tr><td>Hors champ</td><td>Location de locaux nus ; ventes des détaillants dont le CA est inférieur à 2 000 000 DH</td></tr>
<tr><td>Exonéré avec droit à déduction</td><td>Export : pas de TVA facturée, TVA d'amont récupérée</td></tr>
<tr><td>Exonéré sans droit à déduction</td><td>Pas de TVA facturée, TVA d'amont non récupérable</td></tr>
<tr><td>Régime de droit commun</td><td>Encaissements : TVA due quand le client paie (une traite acceptée ne compte pas)</td></tr>
<tr><td>Naissance du droit à déduction</td><td>Paiement de la facture (article 101 du CGI)</td></tr>
<tr><td>TVA non récupérable</td><td>Voitures de tourisme, frais de mission et de réception, cadeaux au-delà de 100 DH</td></tr>
<tr><td>Prorata</td><td>(CA taxable + CA exonéré avec droit) / CA total</td></tr>
</tbody></table>
${F("TVA due au régime des encaissements", R`\text{TVA} = \text{Encaissement TTC} \times \frac{t}{1 + t}`, "150 000 × 20/120 = 25 000.")}
${F("TVA récupérable sur immobilisation", R`\text{TVA déductible} = \text{TVA} \times \text{part payée} \times \text{prorata}`, "27 000 × 60 % × 72 % = 11 664.")}`,

  6: R`
<h3 class="sous">Audit légal, contractuel, interne</h3>
<table class="tab">
<thead><tr><th></th><th>Audit légal</th><th>Audit contractuel</th><th>Audit interne</th></tr></thead>
<tbody>
<tr><td>Origine</td><td>La loi</td><td>Une demande (achat, banque…)</td><td>La direction</td></tr>
<tr><td>Auditeur</td><td>Commissaire aux comptes, externe</td><td>Expert externe</td><td>Salarié de l'entreprise</td></tr>
<tr><td>Objectif</td><td>Certifier la régularité, la sincérité et l'image fidèle des comptes</td><td>Variable</td><td>Évaluer la maîtrise des risques et le contrôle interne</td></tr>
<tr><td>Destinataires</td><td>Actionnaires, tiers</td><td>Le demandeur</td><td>La direction générale</td></tr>
</tbody></table>
<table class="tab">
<thead><tr><th>Au Maroc</th><th>Règle</th></tr></thead>
<tbody>
<tr><td>Qui doit nommer un CAC ?</td><td>Toute SA ; SARL dont le CA dépasse 50 M DH. Deux CAC pour les sociétés faisant appel public à l'épargne et les banques</td></tr>
<tr><td>Mandat</td><td>Trois exercices, renouvelable</td></tr>
<tr><td>Qualité</td><td>Expert-comptable inscrit à l'Ordre (loi 15-89), indépendant</td></tr>
<tr><td>Obligation</td><td>De moyens : assurance raisonnable, pas absolue</td></tr>
<tr><td>Opinions</td><td>Sans réserve, avec réserve, refus de certifier, impossibilité de certifier</td></tr>
</tbody></table>

<h3 class="sous">La démarche et ses outils</h3>
<table class="tab">
<thead><tr><th>Étape ou outil</th><th>À retenir</th></tr></thead>
<tbody>
<tr><td>Prise de connaissance</td><td>Activité, environnement, risques ; fixation du seuil de signification</td></tr>
<tr><td>Évaluation du contrôle interne</td><td>Test de cheminement (la procédure existe-t-elle ?), test de permanence (fonctionne-t-elle toute l'année ?)</td></tr>
<tr><td>Contrôle des comptes</td><td>Inspection, observation physique, confirmation externe (circularisation), recalcul, procédures analytiques</td></tr>
<tr><td>Assertions</td><td>Existence, exhaustivité, droits et obligations, évaluation, séparation des exercices, présentation</td></tr>
<tr><td>Séparation des fonctions</td><td>Autorisation, enregistrement et conservation confiés à des personnes différentes</td></tr>
<tr><td>COSO</td><td>Environnement de contrôle, évaluation des risques, activités de contrôle, information et communication, pilotage</td></tr>
</tbody></table>
${F("Modèle du risque d'audit", R`RA = RI \times RC \times RND`, "Plus le risque inhérent et le risque lié au contrôle sont élevés, plus l'auditeur étend ses travaux pour réduire le risque de non-détection.")}
<div class="encadre"><b>Pourquoi des QCM d'entraînement ici ?</b> Les annales AIF 2025/26 ne contiennent que 2 questions d'audit, alors que le master porte ce nom et que l'entretien y revient. Les 9 questions marquées « Entraînement » ont été rédigées par SaadConcours à partir de ce cours ; elles ne viennent pas d'un sujet.</div>`,
};
