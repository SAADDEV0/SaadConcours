// Fiches de cours (HTML + LaTeX) du cahier LCI (FP Larache).
const R = String.raw;

const F = (titre, tex, ex) => R`<div class="formule"><div class="f-titre">${titre}</div><div class="f-tex">$$${tex}$$</div>${ex ? `<div class="f-ex"><b>Exemple :</b> ${ex}</div>` : ""}</div>`;

export const MEMO = R`
<table class="tab memo">
<thead><tr><th>Sujet</th><th>À retenir</th><th>Exemple des annales</th></tr></thead>
<tbody>
<tr><td>Cross-docking</td><td>Transfert quai à quai, sans stockage intermédiaire</td><td>Réponse D en 2024 et en 2025</td></tr>
<tr><td>Incoterms 2020</td><td>Répartissent frais, risques et formalités ; ni prix, ni paiement, ni propriété</td><td>C en 2024, A en 2025</td></tr>
<tr><td>Flux tirés / poussés</td><td>Pull = demande réelle (JAT, Kanban) ; push = prévisions</td><td>Kanban : flux tirés par la demande</td></tr>
<tr><td>Stock de sécurité</td><td>SS = z × σ × √L : variabilité de la demande et délai</td><td>Couvre les aléas, augmente le coût de possession</td></tr>
<tr><td>Wilson (EOQ)</td><td>Q* = √(2DC<sub>c</sub>/C<sub>p</sub>) ; optimum quand possession = passation</td><td>D = 20 000, C<sub>c</sub> = 100, C<sub>p</sub> = 1 → Q* = 2 000, N* = 10</td></tr>
<tr><td>Zone franche</td><td>Hors territoire douanier, suspension des droits</td><td>Tanger, Kénitra : zones d'accélération industrielle</td></tr>
<tr><td>Balance commerciale</td><td>Solde = X − M ; Maroc : déficit structurel</td><td>Excédent = X supérieur à M</td></tr>
<tr><td>Trésorerie nette</td><td>TN = FRF − BFG</td><td>BFG négatif : ressources circulantes supérieures</td></tr>
<tr><td>Intérêts simples / composés</td><td>C<sub>0</sub>(1 + ni) ; C<sub>0</sub>(1 + i)<sup>n</sup> ; actualiser = diviser</td><td>1 000 à 5 % sur 5 ans : 1 250 (simple)</td></tr>
<tr><td>Moyenne, médiane, mode</td><td>Σ f<sub>i</sub>y<sub>i</sub> ; 1re modalité où F ≥ 0,5 ; plus forte fréquence</td><td>Tableau 1 : 82 ; 80 ; 80 salariés</td></tr>
<tr><td>Estimateur</td><td>Sans biais : E(T) = θ ; efficace : variance minimale ; Cramér-Rao = borne inférieure</td><td>Posé en 2024 et en 2025</td></tr>
<tr><td>Dénombrement</td><td>card P(E) = 2<sup>n</sup> ; groupe sans ordre = C<sub>n</sub><sup>k</sup></td><td>2<sup>4</sup> = 16 ; C<sub>10</sub><sup>3</sup> = 120</td></tr>
<tr><td>Consommateur</td><td>Équilibre : TMS = p<sub>1</sub>/p<sub>2</sub></td><td>TMS supérieur : acheter plus de bien 1</td></tr>
<tr><td>Bank Al-Maghrib</td><td>Stabilité des prix (loi 40-17), taux directeur, supervision bancaire</td><td>Posé en 2024 et en 2025</td></tr>
</tbody></table>

<h3 class="sous">Les 12 pièges classiques de ces concours</h3>
<table class="tab pieges">
<thead><tr><th>Piège</th><th>Réflexe</th></tr></thead>
<tbody>
<tr><td>Retenir la lettre</td><td>Six questions de 2024 reviennent en 2025, mais la bonne lettre change (Incoterms : C puis A ; GPS : C puis D ; excédent : D puis A). Retiens la notion.</td></tr>
<tr><td>Arrimage, amarrage, acconage</td><td>Arrimer la marchandise, amarrer le navire, acconier = manutention navire-quai.</td></tr>
<tr><td>GPS, RFID, code-barres</td><td>« En temps réel » = GPS. La RFID et le code-barres ne tracent qu'au passage d'un lecteur.</td></tr>
<tr><td>Pull et push inversés</td><td>Pull = demande réelle, push = prévision : une proposition du sujet 2024 inverse les deux.</td></tr>
<tr><td>Incoterms</td><td>Ils ne fixent ni le prix, ni le délai de paiement, ni le transfert de propriété.</td></tr>
<tr><td>Mode contre effectif</td><td>Le mode s'exprime dans l'unité de la variable (80 salariés), pas en effectif (80 entreprises).</td></tr>
<tr><td>Combinaison ou arrangement</td><td>Un groupe, un comité : pas d'ordre → C<sub>n</sub><sup>k</sup>. Un classement, un podium → A<sub>n</sub><sup>k</sup>.</td></tr>
<tr><td>Le bon calcul, la mauvaise formule</td><td>card P(E) : 2<sup>4</sup> = 16 et 4<sup>2</sup> = 16. Seule 2<sup>n</sup> est juste.</td></tr>
<tr><td>Intérêts simples ou composés</td><td>Lis le mot « simple » : 1 250 et non 1 276,28.</td></tr>
<tr><td>EBE</td><td>Avant amortissements, frais financiers et impôt : indépendant de la politique d'amortissement et de la fiscalité.</td></tr>
<tr><td>Bilan financier ou fonctionnel</td><td>Financier = hypothèse de liquidation ; fonctionnel = continuité de l'exploitation.</td></tr>
<tr><td>Barème</td><td>Les sujets 2024 et 2025 n'ont pas de points négatifs (2025 : +1 / 0) : ne laisse aucune case vide.</td></tr>
</tbody></table>`;

export const FICHES = {
  1: R`
<h3 class="sous">Le vocabulaire qui tombe</h3>
<table class="tab">
<thead><tr><th>Terme</th><th>Définition à réciter</th><th>Posé en</th></tr></thead>
<tbody>
<tr><td>Cross-docking</td><td>Réception, tri et réexpédition immédiate, sans stockage (moins de 24 h sur le quai)</td><td>2024 et 2025</td></tr>
<tr><td>Hub</td><td>Nœud de regroupement et de redistribution des flux (Tanger Med pour les conteneurs)</td><td>2024</td></tr>
<tr><td>Entrepôt de distribution</td><td>Réception, stockage, préparation des commandes (picking), expédition</td><td>2025</td></tr>
<tr><td>Supply Chain Management</td><td>Gestion intégrée des flux physiques, d'informations et financiers, du fournisseur au client final</td><td>2025</td></tr>
<tr><td>Juste-à-temps (JAT)</td><td>Produire et livrer au rythme de la demande pour réduire stocks et gaspillages</td><td>2024 et 2025</td></tr>
<tr><td>Kanban</td><td>Étiquette qui déclenche la production quand l'aval consomme : flux tirés</td><td>2025</td></tr>
<tr><td>Kaizen</td><td>Amélioration continue, par petits pas, avec tout le personnel</td><td>2025</td></tr>
<tr><td>Multimodal / intermodal</td><td>Au moins deux modes sous un seul contrat / plusieurs modes avec la même unité de charge</td><td>2025</td></tr>
<tr><td>Arrimage</td><td>Fixer et caler la marchandise dans le véhicule ou le conteneur</td><td>2024</td></tr>
<tr><td>Amarrage</td><td>Attacher le navire au quai ou à une bouée</td><td>2024</td></tr>
<tr><td>Acconage</td><td>Manutention entre le navire et le quai (Marsa Maroc, Somaport)</td><td>2024</td></tr>
<tr><td>3PL / 4PL</td><td>Prestataire qui exécute (transport, entrepôt) / intégrateur qui pilote toute la chaîne</td><td>Oral</td></tr>
</tbody></table>

<h3 class="sous">Les trois niveaux de décision logistique</h3>
<table class="tab">
<thead><tr><th>Niveau</th><th>Horizon</th><th>Exemples</th></tr></thead>
<tbody>
<tr><td>Stratégique</td><td>Plusieurs années</td><td>Implanter un entrepôt, externaliser, choisir un prestataire (réponse de 2024)</td></tr>
<tr><td>Tactique</td><td>6 mois à 2 ans</td><td>Dimensionner la flotte, les stocks, le plan de transport</td></tr>
<tr><td>Opérationnel</td><td>Jour, semaine</td><td>Tournées, préparation des commandes, affectation des quais</td></tr>
</tbody></table>

<h3 class="sous">Modes de transport : ce qu'il faut savoir comparer</h3>
<table class="tab">
<thead><tr><th>Mode</th><th>Atout</th><th>Limite</th><th>Document</th></tr></thead>
<tbody>
<tr><td>Maritime</td><td>Grands volumes, coût par tonne le plus bas : environ 80 % du commerce mondial (2024)</td><td>Lent, rupture de charge aux ports</td><td>Connaissement (B/L)</td></tr>
<tr><td>Ferroviaire</td><td>Le plus écologique pour le terrestre (2025)</td><td>Réseau limité, peu flexible</td><td>Lettre de voiture CIM</td></tr>
<tr><td>Routier</td><td>Porte à porte, flexible</td><td>Émissions, congestion</td><td>Lettre de voiture CMR</td></tr>
<tr><td>Aérien</td><td>Rapide, sûr</td><td>Cher, le plus polluant</td><td>LTA (AWB)</td></tr>
</tbody></table>

<h3 class="sous">Formules de gestion des stocks</h3>
<p class="note">Chaque formule est écrite en LaTeX, suivie d'un exemple chiffré à refaire de tête.</p>
${F("Stock de sécurité (demande aléatoire)", R`SS = z \times \sigma_d \times \sqrt{L}`, "Écart-type de la demande 20 unités par jour, délai 4 jours, taux de service 95 % (z = 1,65) : SS = 1,65 × 20 × 2 = 66 unités.")}
${F("Point de commande (stock d'alerte)", R`PC = d \times L + SS`, "Demande moyenne 100 par jour, délai 4 jours : PC = 400 + 66 = 466 unités. On commande dès que le stock descend à 466.")}
${F("Rotation des stocks", R`\text{Rotation} = \frac{\text{Coût d'achat des marchandises vendues}}{\text{Stock moyen}} \qquad \text{Durée} = \frac{360}{\text{Rotation}}`, "CAMV 1 200 000, stock moyen 100 000 : 12 rotations, soit 30 jours de stock. Une rotation plus rapide réduit le coût de stockage par unité (2025).")}`,

  2: R`
<h3 class="sous">Les 11 Incoterms 2020</h3>
<table class="tab">
<thead><tr><th>Incoterm</th><th>Le vendeur s'arrête…</th><th>Transfert du risque</th></tr></thead>
<tbody>
<tr><td>EXW (Ex Works)</td><td>À son usine, marchandise à disposition</td><td>Chez le vendeur</td></tr>
<tr><td>FCA (Free Carrier)</td><td>Remise au transporteur de l'acheteur, dédouanée export</td><td>À la remise au transporteur</td></tr>
<tr><td>CPT / CIP</td><td>Paie le transport (CIP : et l'assurance) jusqu'à destination</td><td>À la remise au premier transporteur</td></tr>
<tr><td>DAP / DPU</td><td>Livré à destination (DPU : déchargé)</td><td>À destination</td></tr>
<tr><td>DDP (Delivered Duty Paid)</td><td>Livré, droits d'importation payés</td><td>À destination</td></tr>
<tr><td>FAS / FOB</td><td>Le long du navire / à bord du navire au port d'embarquement (maritime)</td><td>Au port d'embarquement</td></tr>
<tr><td>CFR / CIF</td><td>Paie le fret maritime (CIF : et l'assurance) jusqu'au port d'arrivée</td><td>À bord, au port d'embarquement</td></tr>
</tbody></table>
<p class="note">Piège classique de l'oral : en CFR et CIF, le vendeur paie le fret jusqu'au port d'arrivée, mais le risque passe à l'acheteur dès le chargement au départ. Les Incoterms ne règlent ni le prix, ni le paiement, ni le transfert de propriété.</p>

<h3 class="sous">Les documents du commerce international</h3>
<table class="tab">
<thead><tr><th>Document</th><th>Rôle</th></tr></thead>
<tbody>
<tr><td>Facture pro forma</td><td>Offre chiffrée avant la vente (sert à ouvrir un crédit documentaire), pas un document de dédouanement</td></tr>
<tr><td>Facture commerciale</td><td>Désignation, quantité, prix, valeur, Incoterm : base de la valeur en douane</td></tr>
<tr><td>Liste de colisage</td><td>Détail des colis, poids, dimensions, emballage</td></tr>
<tr><td>Connaissement (B/L)</td><td>Reçu, preuve du contrat de transport maritime et <b>titre de propriété négociable</b></td></tr>
<tr><td>LTA / CMR</td><td>Lettre de transport aérien / lettre de voiture routière : non négociables</td></tr>
<tr><td>Certificat d'origine</td><td>Prouve l'origine pour appliquer un accord de libre-échange (UE, États-Unis, ZLECAf…)</td></tr>
<tr><td>DUM</td><td>Déclaration unique de marchandises, déposée sur le système BADR de l'ADII</td></tr>
</tbody></table>

<h3 class="sous">Acteurs et régimes douaniers au Maroc</h3>
<table class="tab">
<thead><tr><th>Notion</th><th>À retenir</th></tr></thead>
<tbody>
<tr><td>ADII</td><td>Administration des douanes et impôts indirects : perçoit les droits, contrôle les flux</td></tr>
<tr><td>Transitaire commissionnaire en douane</td><td>Agréé par l'ADII, dédouane pour le compte de ses clients et organise l'acheminement (2024, deux questions)</td></tr>
<tr><td>Zone franche (zone d'accélération industrielle)</td><td>Hors territoire douanier : import, transformation et réexport en suspension de droits</td></tr>
<tr><td>Admission temporaire</td><td>Import en suspension de droits d'intrants destinés à être réexportés après transformation</td></tr>
<tr><td>Entrepôt sous douane</td><td>Stockage de marchandises importées sans payer les droits tant qu'elles n'entrent pas sur le marché</td></tr>
<tr><td>Offshoring / nearshoring</td><td>Pays lointain à bas salaires / pays proche (le Maroc pour l'Europe)</td></tr>
</tbody></table>

<h3 class="sous">Formules</h3>
${F("Droits et TVA à l'importation", R`DI = \text{Valeur en douane} \times t_{DI} \qquad \text{TVA}_{import} = (\text{Valeur en douane} + DI) \times 20\,\%`, "Valeur en douane (CIF) 100 000 DH, droit d'importation de 10 % : DI = 10 000 ; TVA = 110 000 × 20 % = 22 000 DH.")}
${F("Balance commerciale et taux de couverture", R`\text{Solde} = X - M \qquad \text{Taux de couverture} = \frac{X}{M} \times 100`, "X = 60, M = 100 : solde de −40 (déficit), couverture de 60 %. Un taux inférieur à 100 % signifie un déficit.")}`,

  3: R`
<h3 class="sous">Calcul des coûts : centres d'analyse ou ABC</h3>
<table class="tab">
<thead><tr><th>Méthode</th><th>Démarche</th><th>Clé de répartition</th></tr></thead>
<tbody>
<tr><td>Centres d'analyse (sections homogènes)</td><td>Répartition primaire, puis secondaire (auxiliaires → principaux), puis imputation aux produits</td><td>Unité d'œuvre (heure machine, kg…)</td></tr>
<tr><td>ABC (Activity-Based Costing)</td><td>Ressources → activités → produits</td><td>Inducteur d'activité : nombre de commandes, de réceptions, de références</td></tr>
</tbody></table>

<h3 class="sous">Pilotage de la performance logistique</h3>
<table class="tab">
<thead><tr><th>Outil</th><th>À retenir</th></tr></thead>
<tbody>
<tr><td>Chaîne de valeur (Porter)</td><td>Activités principales (logistique interne, production, logistique externe, vente, services) et de soutien : où se crée la valeur</td></tr>
<tr><td>Contrôle budgétaire</td><td>Réalisations − prévisions = écarts, puis actions correctives</td></tr>
<tr><td>Balanced Scorecard</td><td>Quatre perspectives : financière, clients, processus internes (la logistique), apprentissage</td></tr>
<tr><td>Logistique durable</td><td>On ajoute des KPI environnementaux et sociaux, on ne remplace pas les KPI économiques</td></tr>
<tr><td>Économie d'échelle</td><td>Le coût fixe se répartit sur plus d'unités : le coût unitaire baisse</td></tr>
</tbody></table>

<h3 class="sous">Formules et méthodes pas à pas</h3>
${F("Marge commerciale", R`MC = \text{Ventes de marchandises} - \underbrace{(\text{Achats} + SI - SF)}_{\text{CAMV}}`, "Ventes 500 000, achats 320 000, SI 40 000, SF 60 000 : CAMV = 300 000, marge = 200 000.")}
${F("Modèle de Wilson", R`Q^* = \sqrt{\frac{2\,D\,C_c}{C_p}} \qquad N^* = \frac{D}{Q^*} \qquad \frac{Q^*}{2}\,C_p = \frac{D}{Q^*}\,C_c`, "D = 20 000 unités par an, C<sub>c</sub> = 100 DH par commande, C<sub>p</sub> = 1 DH par unité et par an : Q* = √4 000 000 = 2 000, N* = 10 commandes. Coût de possession 1 000 = coût de passation 1 000.")}
${F("Écarts sur coûts", R`E_{global} = C_{réel} - C_{préétabli\ (prod.\ réelle)} = \underbrace{(Q_r - Q_p) \times P_p}_{\text{sur quantité}} + \underbrace{(P_r - P_p) \times Q_r}_{\text{sur prix}}`, "Prévu 2 kg à 10 DH par unité, réel 2,2 kg à 9,5 DH, 1 000 unités : écart sur quantité (2 200 − 2 000) × 10 = +2 000 (défavorable), sur prix (9,5 − 10) × 2 200 = −1 100 (favorable), global +900.")}
${F("Programme linéaire à deux variables", R`\text{Optimum} \in \{\text{sommets du domaine admissible}\}`, "Un sommet est l'intersection de deux contraintes saturées. Min x<sub>1</sub> + 2x<sub>2</sub> avec 3x<sub>1</sub> + x<sub>2</sub> ≥ 7 et x<sub>1</sub> + 4x<sub>2</sub> ≥ 6 : sommet (2 ; 1), z = 4 (sujet 2024). Une contrainte est redondante si les autres l'impliquent déjà.")}`,

  4: R`
<h3 class="sous">Les trois lectures du bilan</h3>
<table class="tab">
<thead><tr><th>Bilan</th><th>Hypothèse</th><th>Ce qu'il mesure</th></tr></thead>
<tbody>
<tr><td>Financier (liquidité)</td><td>Liquidation (2024)</td><td>Solvabilité et liquidité : actifs classés par liquidité, dettes par exigibilité</td></tr>
<tr><td>Fonctionnel</td><td>Continuité de l'exploitation</td><td>Équilibre : FRF, BFG, trésorerie nette</td></tr>
<tr><td>Tableau de financement</td><td>Deux exercices comparés</td><td>Évolution de l'équilibre financier (2024)</td></tr>
</tbody></table>
<p class="note">Retraitement du résultat pour le bilan financier : la part mise en réserve reste dans les capitaux propres, les dividendes à verser deviennent une dette à moins d'un an.</p>

<h3 class="sous">Financer l'entreprise</h3>
<table class="tab">
<thead><tr><th>Source</th><th>À retenir</th></tr></thead>
<tbody>
<tr><td>Crowdfunding</td><td>Financement « par la foule » via une plateforme ; Maroc : loi 15-18 sur le financement collaboratif</td></tr>
<tr><td>Capital-investissement</td><td>Amorçage et création (démarrage), développement (expansion), transmission (LBO), retournement (entreprise en difficulté)</td></tr>
<tr><td>Emprunt in fine</td><td>Intérêts chaque année, capital en une fois à l'échéance</td></tr>
<tr><td>Amortissement constant</td><td>Même part de capital chaque année : annuités dégressives</td></tr>
<tr><td>Annuités constantes</td><td>Même annuité chaque année : la part de capital augmente, les intérêts baissent</td></tr>
<tr><td>Placement en OPCVM</td><td>Produits financiers imposables à l'IS (société) ou à l'IR (personne physique)</td></tr>
</tbody></table>

<h3 class="sous">Formules</h3>
${F("Équilibre fonctionnel", R`\begin{gathered} FRF = \text{Ressources stables} - \text{Emplois stables} \\ BFG = \text{Emplois circulants} - \text{Ressources circulantes} \\ TN = FRF - BFG \end{gathered}`, "FRF 300 000, BFG −50 000 (grande distribution) : TN = 350 000. Le BFG négatif apporte de la trésorerie.")}
${F("EBE et CAF", R`\begin{gathered} EBE = VA + \text{subventions d'exploitation} - \text{impôts et taxes} - \text{charges de personnel} \\ CAF = RN + \text{dotations} - \text{reprises} - \text{résultat de cession} \end{gathered}`, "L'EBE ignore amortissements, frais financiers et impôt sur les résultats : c'est un indicateur économique pur (réponse C de 2024).")}
${F("Intérêts simples et composés", R`C_n = C_0\,(1 + n\,i) \qquad C_n = C_0\,(1 + i)^n \qquad VA = \frac{MF}{(1 + i)^t}`, "1 000 DH à 5 % sur 5 ans : 1 250 en simple, 1 276,28 en composé. 1 276,28 dans 5 ans vaut 1 000 aujourd'hui.")}
${F("Emprunt : amortissement constant et annuité constante", R`A_k = \frac{C}{n} + i \times CRD_{k-1} \qquad a = C \times \frac{i}{1 - (1 + i)^{-n}}`, "100 000 sur 4 ans à 10 % : amortissement constant → 35 000, 32 500, 30 000, 27 500 ; annuité constante → 100 000 × 0,1 / (1 − 1,1<sup>−4</sup>) ≈ 31 547.")}`,

  5: R`
<h3 class="sous">Les types de variables</h3>
<table class="tab">
<thead><tr><th>Type</th><th>Définition</th><th>Exemple</th></tr></thead>
<tbody>
<tr><td>Qualitative nominale</td><td>Modalités non mesurables, sans ordre</td><td>Mode de transport, pays d'origine</td></tr>
<tr><td>Qualitative ordinale</td><td>Modalités non mesurables mais ordonnées</td><td>Niveau de satisfaction</td></tr>
<tr><td>Quantitative discrète</td><td>Valeurs isolées, en général entières</td><td>Nombre de salariés recrutés (2024)</td></tr>
<tr><td>Quantitative continue</td><td>Toute valeur d'un intervalle ; données en classes</td><td>Délai de livraison, poids d'un colis</td></tr>
</tbody></table>

<h3 class="sous">Les qualités d'un estimateur</h3>
<table class="tab">
<thead><tr><th>Notion</th><th>Définition</th><th>Posé en</th></tr></thead>
<tbody>
<tr><td>Estimateur</td><td>Fonction des variables de l'échantillon, T = g(X<sub>1</sub>, …, X<sub>n</sub>) : une variable aléatoire</td><td>2024</td></tr>
<tr><td>Sans biais</td><td>E(T) = θ</td><td>2024 et 2025</td></tr>
<tr><td>Convergent (consistant)</td><td>T<sub>n</sub> tend vers θ quand n devient grand</td><td>2024</td></tr>
<tr><td>Plus efficace</td><td>Variance plus faible (entre estimateurs sans biais)</td><td>2025</td></tr>
<tr><td>Information de Fisher</td><td>Information apportée par l'échantillon : mesure la précision atteignable</td><td>2024</td></tr>
<tr><td>Borne de Cramér-Rao</td><td>Borne inférieure de la variance d'un estimateur sans biais</td><td>2024</td></tr>
<tr><td>Théorèmes fondamentaux</td><td>Loi des grands nombres, puis théorème central limite</td><td>2024</td></tr>
</tbody></table>

<h3 class="sous">Formules et méthodes pas à pas</h3>
${F("Moyenne, médiane, mode (série discrète)", R`\bar{x} = \sum f_i\,x_i \qquad Me : \text{première modalité où } F_i \geq 0{,}5 \qquad Mo : \max f_i`, "Tableau 1 de 2024 : moyenne 82, fréquences cumulées 0,100 ; 0,325 ; 0,725 → médiane 80 ; mode 80 salariés.")}
${F("Indice élémentaire et taux de variation", R`I_{t/0} = \frac{P_t}{P_0} \times 100 \qquad \text{TV} = \frac{V_t - V_0}{V_0}`, "Prix 2,75 puis 2,6 : indice 94,5 (baisse de 5,5 %). Quantité 250 puis 150 : −40 %.")}
${F("Risque quadratique et Cramér-Rao", R`R(T) = E\big[(T - \theta)^2\big] = V(T) + b(T)^2 \qquad V(T) \geq \frac{1}{I_n(\theta)}`, "Un estimateur sans biais a un risque quadratique égal à sa variance ; s'il atteint la borne, il est efficace.")}
${F("Dénombrement", R`\text{card}\,\mathcal{P}(E) = 2^n \qquad C_n^k = \frac{n!}{k!\,(n-k)!} \qquad A_n^k = \frac{n!}{(n-k)!}`, "4 éléments : 16 parties. Groupes de 3 parmi 10 : 120 ; podiums de 3 parmi 10 : 720.")}
${F("Loi hypergéométrique (tirages sans remise)", R`P(X = k) = \frac{C_K^k \times C_{N-K}^{\,n-k}}{C_N^n}`, "Lot de 10 colis dont 3 abîmés, on en contrôle 2 : P(aucun abîmé) = C<sub>7</sub><sup>2</sup> / C<sub>10</sub><sup>2</sup> = 21/45 ≈ 0,47.")}`,

  6: R`
<h3 class="sous">Microéconomie : consommateur et monopole</h3>
<table class="tab">
<thead><tr><th>Notion</th><th>À retenir</th></tr></thead>
<tbody>
<tr><td>TMS</td><td>Pente de la courbe d'indifférence : TMS = U'<sub>1</sub> / U'<sub>2</sub></td></tr>
<tr><td>Équilibre du consommateur</td><td>Utilité maximale sous contrainte budgétaire : TMS = p<sub>1</sub> / p<sub>2</sub></td></tr>
<tr><td>Discrimination par les prix</td><td>1er degré (parfaite) : un prix par unité ; 2e : selon la quantité ; 3e : selon le groupe de clients</td></tr>
<tr><td>Types de monopole</td><td>Naturel (rendements croissants), institutionnel (loi), technologique (brevet)</td></tr>
<tr><td>Cartel</td><td>Entente entre entreprises indépendantes ; holding = participations ; conglomérat = activités sans lien</td></tr>
<tr><td>Consommation ostentatoire</td><td>Veblen : consommer pour afficher son rang</td></tr>
</tbody></table>

<h3 class="sous">Macroéconomie et politique économique</h3>
<table class="tab">
<thead><tr><th>Notion</th><th>À retenir</th></tr></thead>
<tbody>
<tr><td>Inflation</td><td>Hausse générale et durable des prix (IPC du HCP)</td></tr>
<tr><td>Croissance</td><td>Variation du PIB réel (en volume)</td></tr>
<tr><td>Chômage</td><td>Chômeurs ÷ population active ; chômeur = sans emploi, disponible, en recherche active</td></tr>
<tr><td>Demande globale</td><td>C + I + G + (X − M)</td></tr>
<tr><td>Politique budgétaire</td><td>Restrictive : moins de dépenses publiques ou plus d'impôts ; relance : l'inverse</td></tr>
<tr><td>Politique monétaire</td><td>Contrôle de la masse monétaire par les taux, pour la stabilité des prix</td></tr>
<tr><td>Dévaluation</td><td>Exportations plus compétitives, importations plus chères, inflation importée</td></tr>
<tr><td>Capital humain</td><td>Compétences et connaissances (Becker)</td></tr>
</tbody></table>

<h3 class="sous">L'économie marocaine en 10 réponses</h3>
<table class="tab">
<thead><tr><th>Question</th><th>Réponse</th></tr></thead>
<tbody>
<tr><td>Banque centrale</td><td>Bank Al-Maghrib (statut : loi 40-17) : stabilité des prix, taux directeur, émission, réserves de change</td></tr>
<tr><td>Régulation bancaire</td><td>Bank Al-Maghrib (loi bancaire 103-12) ; marché des capitaux : AMMC ; assurances : ACAPS</td></tr>
<tr><td>Financement des entreprises</td><td>Surtout le crédit bancaire</td></tr>
<tr><td>Balance commerciale</td><td>Structurellement déficitaire</td></tr>
<tr><td>Premier poste d'importation</td><td>Les produits énergétiques</td></tr>
<tr><td>Grandes sources de devises</td><td>Tourisme, transferts des MRE, phosphates (OCP), automobile</td></tr>
<tr><td>Automobile</td><td>Tanger (Renault Melloussa, Tanger Automotive City), puis Kénitra (Stellantis)</td></tr>
<tr><td>Agriculture</td><td>Dépend fortement de la pluviométrie</td></tr>
<tr><td>Concurrence</td><td>Loi 104-12, Conseil de la concurrence : ententes interdites</td></tr>
<tr><td>Ports</td><td>Tanger Med (hub de transbordement), Casablanca, Jorf Lasfar, Nador West Med</td></tr>
</tbody></table>

<h3 class="sous">Marketing international et stratégie</h3>
<table class="tab">
<thead><tr><th>Notion</th><th>À retenir</th></tr></thead>
<tbody>
<tr><td>Standardisation</td><td>Même produit et même marketing partout (économies d'échelle)</td></tr>
<tr><td>Adaptation</td><td>Produit et communication ajustés à chaque marché</td></tr>
<tr><td>Glocalisation</td><td>Produit global adapté aux spécificités locales : « think global, act local »</td></tr>
<tr><td>Matrice McKinsey</td><td>Attrait du marché × atouts de l'entreprise (la part de marché est un axe du BCG)</td></tr>
<tr><td>Diversification</td><td>Concentrique : activités liées à l'existant ; conglomérale : activités sans lien</td></tr>
<tr><td>Études marketing</td><td>Concurrence, notoriété, baromètre de qualité ; le lancement de produit est une action, pas une étude</td></tr>
</tbody></table>`,

  7: R`
<h3 class="sous">La grammaire testée en 2024</h3>
<table class="tab">
<thead><tr><th>Règle</th><th>Exemple du sujet</th></tr></thead>
<tbody>
<tr><td>Prétérit : question et négation avec did + base verbale</td><td>Why <b>didn't</b> you come… ? When did the Games <b>start</b>?</td></tr>
<tr><td>Récit au passé : verbes irréguliers</td><td>They <b>drove</b> home (drive, drove, driven)</td></tr>
<tr><td>Pronom sujet / complément</td><td>Ali and <b>I</b> are going (sujet) ; with Ali and <b>me</b> (complément)</td></tr>
<tr><td>Modaux de probabilité</td><td><b>must</b> = quasi certain ; may / might = possible ; should = conseil</td></tr>
<tr><td>Wh- + infinitif</td><td>He never tells us <b>what</b> to do</td></tr>
<tr><td>Expressions de temps</td><td>In the morning, in the evening, <b>at night</b></td></tr>
<tr><td>Collocations</td><td><b>save</b> time, <b>protect</b> the environment</td></tr>
</tbody></table>

<h3 class="sous">Glossaire anglais de la logistique (testé en 2025)</h3>
<table class="tab">
<thead><tr><th>Anglais</th><th>Français</th><th>Anglais</th><th>Français</th></tr></thead>
<tbody>
<tr><td>Outsourcing</td><td>Externalisation</td><td>Procurement</td><td>Achats, approvisionnement</td></tr>
<tr><td>Just-in-time</td><td>Juste-à-temps</td><td>Lead time</td><td>Délai d'approvisionnement</td></tr>
<tr><td>Warehouse</td><td>Entrepôt</td><td>Inventory</td><td>Stock</td></tr>
<tr><td>Safety stock</td><td>Stock de sécurité</td><td>EOQ</td><td>Quantité économique (Wilson)</td></tr>
<tr><td>Shipment</td><td>Expédition, envoi</td><td>Freight forwarder</td><td>Transitaire</td></tr>
<tr><td>Bill of lading</td><td>Connaissement</td><td>Customs clearance</td><td>Dédouanement</td></tr>
<tr><td>KPI</td><td>Indicateur clé de performance</td><td>ROI</td><td>Rentabilité d'un investissement</td></tr>
<tr><td>Benchmarking</td><td>Comparaison aux meilleures pratiques</td><td>SWOT</td><td>Forces, faiblesses, opportunités, menaces</td></tr>
<tr><td>CSR</td><td>RSE : engagements éthiques, sociaux, environnementaux</td><td>Supply chain</td><td>Chaîne d'approvisionnement</td></tr>
</tbody></table>
<p class="note">Les questions d'anglais se règlent en quelques secondes : traite-les en premier pour garder du temps pour les calculs de statistique et de recherche opérationnelle.</p>`,
};
