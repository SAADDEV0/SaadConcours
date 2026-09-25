// Management stratégique (S6) — compléments par chapitre : description SEO, résumé, exercices 2 et 3, QCM.
const md = String.raw;

const chapitres = {
  1: {
    titre: "Du management à la stratégie",
    description: "Management et stratégie : fonctions PODC, rôles de Mintzberg, efficacité et efficience, niveaux de décision d'Ansoff, niveaux de stratégie et DAS.",
    resume: md`
## L'essentiel — Du management à la stratégie

- **Management** : orienter l'organisation vers ses objectifs en coordonnant ses ressources ; cycle **PODC** (planifier, organiser, diriger, contrôler) ; 10 rôles de **Mintzberg** (interpersonnels, informationnels, décisionnels).
- **Efficacité** (objectifs atteints), **efficience** (résultats / moyens), **pertinence** (adéquation au contexte) ; performance aussi sociale et environnementale.
- **Ansoff** : décisions stratégiques (long terme, environnement, risque élevé), tactiques (moyens), opérationnelles (courant).
- **Stratégie** (Chandler, Porter) : objectifs à long terme, choix d'actions, allocation des ressources, position unique ; vision, mission, valeurs, objectifs.
- Niveaux : **groupe** (corporate), **activité** (business), **fonctionnel** ; stratégie délibérée et **émergente** (Mintzberg) ; démarche **LCAG** (diagnostic → choix → mise en œuvre).
- **DAS** : activités ayant les mêmes FCS, concurrents et technologies ; axes d'**Abell** (clients, fonctions, technologies) ; segmentation stratégique ≠ segmentation marketing.
`,
    exercices: md`
### Exercice 2 — Rôles du manager

Associez chaque activité d'une directrice d'agence bancaire à un rôle de Mintzberg :
1. Elle représente la banque à l'inauguration d'une école.
2. Elle lit chaque matin la presse économique et les notes de la direction régionale.
3. Elle répartit le budget de prospection entre ses conseillers.
4. Elle négocie un accord de domiciliation des salaires avec une entreprise.
5. Elle apaise un conflit entre deux conseillers.

<details><summary>Voir le corrigé</summary>

1. **Symbole** (rôle interpersonnel).
2. **Observateur** (rôle informationnel).
3. **Répartiteur de ressources** (rôle décisionnel).
4. **Négociateur** (rôle décisionnel).
5. **Régulateur** (rôle décisionnel), mais aussi **leader** (rôle interpersonnel).

</details>

### Exercice 3 — Efficacité et efficience de deux usines

| Usine | Objectif (unités) | Production réalisée | Coût total (DH) |
|---|---:|---:|---:|
| A | 50 000 | 52 000 | 3 120 000 |
| B | 50 000 | 45 000 | 2 475 000 |

1. Calculez l'efficacité et le coût unitaire de chaque usine.
2. Quelle usine est la plus performante ? Nuancez.

<details><summary>Voir le corrigé</summary>

**1)** A : efficacité **104 %**, coût unitaire $3\,120\,000 / 52\,000 = \mathbf{60}$ DH. B : efficacité **90 %**, coût unitaire $2\,475\,000 / 45\,000 = \mathbf{55}$ DH.

**2)** A est plus **efficace**, B plus **efficiente**. Le jugement dépend du contexte : si la demande est forte, les unités manquantes de B sont des ventes perdues ; si la demande est faible, la production supplémentaire de A risque de finir en stock. La performance doit être appréciée par rapport à la **pertinence** des objectifs.

</details>
`,
    qcm: [
      { q: "Le cycle PODC comprend :", choix: ["Produire, organiser, décider, contrôler", "Planifier, organiser, diriger, contrôler", "Prévoir, observer, diffuser, compter", "Piloter, ordonner, déléguer, communiquer"], bonne: 1, explication: "Fonctions héritées de Fayol." },
      { q: "L'efficience mesure :", choix: ["L'atteinte des objectifs", "Le rapport entre résultats et moyens consommés", "L'adéquation au contexte", "La satisfaction des clients"], bonne: 1, explication: "Faire mieux avec moins." },
      { q: "Selon Ansoff, une décision stratégique est :", choix: ["À court terme et répétitive", "À long terme et difficilement réversible", "Prise par les chefs d'équipe", "Sans risque"], bonne: 1, explication: "Elle engage l'entreprise face à son environnement." },
      { q: "Le choix d'un fournisseur de fournitures de bureau est une décision :", choix: ["Stratégique", "Tactique", "Opérationnelle", "Corporate"], bonne: 2, explication: "Courante et réversible." },
      { q: "Pour Chandler, la stratégie consiste notamment à :", choix: ["Fixer les prix", "Déterminer les objectifs à long terme et allouer les ressources", "Recruter les cadres", "Tenir la comptabilité"], bonne: 1, explication: "Définition de 1962." },
      { q: "La stratégie qui se forme sans avoir été planifiée est dite :", choix: ["Délibérée", "Émergente", "Fonctionnelle", "Générique"], bonne: 1, explication: "Concept de Mintzberg." },
      { q: "Un DAS regroupe des activités qui ont en commun :", choix: ["Le même siège social", "Les mêmes facteurs clés de succès et concurrents", "Le même prix", "Le même directeur"], bonne: 1, explication: "C'est la base de la segmentation stratégique." },
      { q: "Les trois axes d'Abell sont :", choix: ["Prix, produit, place", "Clients, fonctions, technologies", "Forces, faiblesses, opportunités", "Coûts, qualité, délais"], bonne: 1, explication: "À qui, quoi, comment." },
      { q: "Choisir les activités d'un groupe relève de la stratégie :", choix: ["Fonctionnelle", "D'activité", "De groupe (corporate)", "Opérationnelle"], bonne: 2, explication: "Allocation des ressources entre DAS." },
      { q: "Objectif 200 unités, réalisé 180 unités. L'efficacité est de :", choix: ["111 %", "90 %", "20 %", "180 %"], bonne: 1, explication: "180 / 200." },
    ],
  },

  2: {
    titre: "Les théories des organisations",
    description: "Théories des organisations : Taylor, Fayol, Weber, Mayo, Simon, contingence, Crozier, coûts de transaction, agence, ressources et néo-institutionnalisme.",
    resume: md`
## L'essentiel — Les théories des organisations

- **Classiques** : Taylor (OST), Fayol (administration, unité de commandement), Weber (bureaucratie légale-rationnelle) ; limites : rigidité, homme réduit à l'exécutant.
- **Relations humaines** : Mayo (Hawthorne, organisation informelle), Maslow, Herzberg, McGregor, Likert.
- **Simon** : **rationalité limitée**, solution satisfaisante ; Cyert et March : l'entreprise comme coalition.
- **Systémique** : système ouvert ; **contingence** : Burns et Stalker (mécaniste / organique), Lawrence et Lorsch (différenciation / intégration), Woodward (technologie), Aston (taille).
- **Crozier** : acteurs stratégiques, pouvoir = maîtrise des **zones d'incertitude**.
- **Coase, Williamson** : **coûts de transaction**, marché ou hiérarchie selon la spécificité des actifs, l'incertitude, la fréquence ; **agence** (principal-agent, coûts d'agence, gouvernance) ; **ressources** (Penrose, Barney).
- **Néo-institutionnalisme** : isomorphisme coercitif, mimétique, normatif ; recherche de légitimité.
`,
    exercices: md`
### Exercice 2 — Quelle théorie ?

Associez chaque situation à une théorie :
1. Une banque adopte les mêmes outils de conformité que ses concurrentes sous la pression de la banque centrale.
2. Un dirigeant choisit le premier fournisseur acceptable sans comparer toutes les offres.
3. Une start-up sans hiérarchie formelle réussit sur un marché très changeant.
4. Des actionnaires lient la rémunération du PDG au cours de bourse.
5. Un constructeur automobile intègre la fabrication d'une pièce très spécifique.

<details><summary>Voir le corrigé</summary>

1. **Néo-institutionnalisme** (isomorphisme coercitif).
2. **Simon** (rationalité limitée, solution satisfaisante).
3. **Contingence** (structure organique adaptée à un environnement instable, Burns et Stalker).
4. **Théorie de l'agence** (mécanisme d'incitation pour aligner les intérêts).
5. **Coûts de transaction** (actif spécifique : la hiérarchie est préférable au marché).

</details>

### Exercice 3 — Faire ou faire faire

Une entreprise hésite à externaliser son service informatique. Coût interne annuel : 2 400 000 DH. Offre d'un prestataire : 1 800 000 DH par an, plus des coûts de transaction estimés (sélection, contrat, contrôle) de 250 000 DH par an. Ses logiciels sont très spécifiques et les données sensibles.

1. Comparez les coûts.
2. Quels risques la théorie de Williamson met-elle en évidence ?
3. Quelle solution proposer ?

<details><summary>Voir le corrigé</summary>

**1)** Externalisation : $1\,800\,000 + 250\,000 = 2\,050\,000$ DH, soit une économie apparente de **350 000 DH** par an.

**2)** Actifs **spécifiques** (logiciels propres) et **incertitude** élevée : risque d'**opportunisme** du prestataire (hausses de prix une fois l'entreprise dépendante, qualité insuffisante), coûts de changement élevés, risques sur la confidentialité des données ; les coûts de transaction réels pourraient dépasser l'estimation.

**3)** Externaliser les activités **standard** (infrastructure, assistance aux utilisateurs) et garder en interne le **cœur** (logiciels spécifiques, sécurité des données), ou signer un contrat long avec des clauses de réversibilité, de niveau de service et de confidentialité.

</details>
`,
    qcm: [
      { q: "La bureaucratie comme forme rationnelle d'organisation a été décrite par :", choix: ["Taylor", "Weber", "Mayo", "Simon"], bonne: 1, explication: "Autorité légale-rationnelle." },
      { q: "La rationalité limitée est un concept de :", choix: ["Herbert Simon", "Henri Fayol", "Michael Porter", "Max Weber"], bonne: 0, explication: "Les décideurs cherchent une solution satisfaisante." },
      { q: "Selon Burns et Stalker, un environnement instable appelle une structure :", choix: ["Mécaniste", "Organique", "Bureaucratique", "Centralisée"], bonne: 1, explication: "Souple et peu formalisée." },
      { q: "Lawrence et Lorsch mettent en évidence le couple :", choix: ["Offre et demande", "Différenciation et intégration", "Prix et qualité", "Centralisation et coûts"], bonne: 1, explication: "Plus de différenciation exige plus d'intégration." },
      { q: "Pour Crozier, le pouvoir d'un acteur vient principalement :", choix: ["De son salaire", "De la maîtrise d'une zone d'incertitude", "De son âge", "De son diplôme uniquement"], bonne: 1, explication: "Expertise, information, relations, règles." },
      { q: "Les coûts de transaction sont :", choix: ["Les coûts de production", "Les coûts liés au recours au marché", "Les impôts", "Les salaires"], bonne: 1, explication: "Rechercher, négocier, contrôler un contrat." },
      { q: "Selon Williamson, des actifs très spécifiques incitent à :", choix: ["Recourir au marché", "Intégrer l'activité (hiérarchie)", "Supprimer l'activité", "Baisser les prix"], bonne: 1, explication: "Le risque d'opportunisme est élevé." },
      { q: "Dans la théorie de l'agence, le dirigeant salarié est :", choix: ["Le principal", "L'agent", "Le régulateur", "Le prescripteur"], bonne: 1, explication: "Les actionnaires sont le principal." },
      { q: "Imiter les entreprises qui réussissent en situation d'incertitude est un isomorphisme :", choix: ["Coercitif", "Mimétique", "Normatif", "Économique"], bonne: 1, explication: "DiMaggio et Powell." },
      { q: "Les expériences de Hawthorne ont révélé l'importance :", choix: ["Du chronométrage", "De l'organisation informelle et de la considération", "De la bureaucratie", "Des coûts de transaction"], bonne: 1, explication: "École des relations humaines." },
    ],
  },

  3: {
    titre: "Le diagnostic externe",
    description: "Diagnostic externe : PESTEL, cinq forces de Porter, barrières à l'entrée, concentration (CR4, indice HHI), groupes stratégiques et facteurs clés de succès.",
    resume: md`
## L'essentiel — Le diagnostic externe

- Objectif : identifier **opportunités** et **menaces** par DAS ; macro-environnement (PESTEL) et secteur.
- **PESTEL** : politique, économique, socioculturel, technologique, écologique, légal ; ne garder que les facteurs significatifs.
- **Cinq forces** (Porter) : rivalité, nouveaux entrants (**barrières à l'entrée**), substituts, pouvoir des clients, pouvoir des fournisseurs ; + pouvoirs publics. Forces fortes = rentabilité faible.
- Concentration : $CR_4$ ; $HHI = \sum s_i^2$ (0 à 10 000) ; seuils indicatifs 1 500 et 2 500 ; contrôle des concentrations par le **Conseil de la concurrence**.
- **Groupes stratégiques** et barrières à la mobilité ; stade du secteur (croissance, maturité, déclin).
- **Facteurs clés de succès** : ce qu'il faut maîtriser pour réussir ; grille pour le diagnostic interne.
`,
    exercices: md`
### Exercice 2 — Barrières à l'entrée

Pour chacun des secteurs suivants, citez deux barrières à l'entrée et évaluez la menace des nouveaux entrants : 1) téléphonie mobile ; 2) restauration rapide ; 3) raffinage de sucre ; 4) vente de vêtements en ligne.

<details><summary>Voir le corrigé</summary>

1. **Licence** délivrée par l'autorité de régulation, investissements massifs dans le réseau : menace **faible**.
2. Marques et franchises connues, emplacements ; mais capitaux modestes : menace **forte**.
3. Économies d'échelle, capitaux très élevés, accès à la matière première : menace **faible**.
4. Notoriété, logistique et coûts d'acquisition des clients ; mais faibles capitaux de départ : menace **forte**.

</details>

### Exercice 3 — Indice de concentration

Deux marchés ont les structures suivantes : marché X : 4 entreprises de 25 % chacune ; marché Y : une entreprise de 55 % et 9 entreprises de 5 %.

1. Calculez le $CR_4$ et le HHI de chaque marché.
2. Pourquoi le HHI est-il plus informatif que le $CR_4$ ?

<details><summary>Voir le corrigé</summary>

**1)** X : $CR_4 = 100\,\%$ ; $HHI = 4 \times 625 = \mathbf{2\,500}$. Y : $CR_4 = 55 + 15 = 70\,\%$ ; $HHI = 3\,025 + 9 \times 25 = \mathbf{3\,250}$.

**2)** Le $CR_4$ est plus élevé pour X, mais le HHI indique que Y est plus concentré : il donne plus de poids aux grandes entreprises (parts au carré) et révèle la **domination** d'un acteur, que le $CR_4$ ne distingue pas.

</details>
`,
    qcm: [
      { q: "Le diagnostic externe identifie :", choix: ["Les forces et faiblesses", "Les opportunités et menaces", "Les ressources internes", "Les coûts de production"], bonne: 1, explication: "Il porte sur l'environnement." },
      { q: "Dans PESTEL, le stress hydrique relève de la dimension :", choix: ["Politique", "Écologique", "Légale", "Technologique"], bonne: 1, explication: "Environnement naturel." },
      { q: "Des économies d'échelle importantes constituent :", choix: ["Un produit de substitution", "Une barrière à l'entrée", "Un pouvoir des clients", "Une opportunité"], bonne: 1, explication: "Elles désavantagent les nouveaux entrants." },
      { q: "Le pouvoir des clients est fort lorsque :", choix: ["Ils sont nombreux et dispersés", "Ils sont concentrés et achètent des produits standard", "Les coûts de changement sont élevés", "Le produit est unique"], bonne: 1, explication: "Ils peuvent faire jouer la concurrence." },
      { q: "Parts de 50 %, 30 % et 20 %. Le HHI vaut :", choix: ["100", "3 800", "10 000", "2 500"], bonne: 1, explication: "2 500 + 900 + 400." },
      { q: "Un HHI de 10 000 correspond à :", choix: ["Une concurrence parfaite", "Un monopole", "Un duopole égal", "Un marché atomisé"], bonne: 1, explication: "Une entreprise détient 100 % du marché." },
      { q: "Au Maroc, le contrôle des concentrations relève :", choix: ["De Bank Al-Maghrib", "Du Conseil de la concurrence", "De l'OMPIC", "De la CNSS"], bonne: 1, explication: "Loi 104-12 sur la liberté des prix et de la concurrence." },
      { q: "Un groupe stratégique rassemble des entreprises :", choix: ["D'un même pays", "D'un même secteur qui suivent des stratégies proches", "Qui ont le même actionnaire", "De secteurs différents"], bonne: 1, explication: "La rivalité y est plus forte." },
      { q: "La visioconférence est, pour les compagnies aériennes, :", choix: ["Un concurrent direct", "Un produit de substitution", "Un fournisseur", "Une barrière à l'entrée"], bonne: 1, explication: "Elle répond autrement au besoin de réunion." },
      { q: "Les facteurs clés de succès sont :", choix: ["Les forces propres d'une entreprise", "Les éléments que toute entreprise doit maîtriser pour réussir dans un secteur", "Les objectifs financiers", "Les produits phares"], bonne: 1, explication: "Ils découlent de l'analyse externe." },
    ],
  },

  4: {
    titre: "Le diagnostic interne",
    description: "Diagnostic interne : chaîne de valeur de Porter, ressources et compétences, modèle VRIO, compétences clés, benchmarking et profil concurrentiel pondéré.",
    resume: md`
## L'essentiel — Le diagnostic interne

- Objectif : **forces** et **faiblesses** relatives aux concurrents, au regard des **FCS**.
- **Chaîne de valeur** : activités principales (logistique interne, production, logistique externe, commercialisation, services) et de soutien (infrastructure, GRH, technologie, approvisionnements) ; marge ; inducteurs de coûts, sources de différenciation, liaisons ; système de valeur.
- Ressources **tangibles**, **intangibles**, **humaines** ; compétence = capacité à les combiner ; théorie des ressources.
- **VRIO** (Barney) : valeur, rareté, imitabilité, organisation → désavantage, parité, avantage temporaire, avantage durable.
- **Compétences clés** (Prahalad et Hamel) ; **capacités dynamiques** (Teece).
- Performances commerciales, financières, opérationnelles ; **benchmarking** ; **profil concurrentiel** = somme des poids × notes.
- Avantage concurrentiel de **coût** ou de **différenciation**, durable s'il repose sur des ressources VRIO.
`,
    exercices: md`
### Exercice 2 — Chaîne de valeur d'un hôtel

Classez les activités d'un hôtel de Marrakech dans la chaîne de valeur : 1) achats alimentaires ; 2) accueil et enregistrement des clients ; 3) formation des réceptionnistes ; 4) site de réservation en ligne ; 5) ménage des chambres ; 6) comptabilité ; 7) gestion des avis clients après le séjour.

<details><summary>Voir le corrigé</summary>

- **Activités principales** : 2 (production du service / commercialisation), 5 (production du service), 4 (commercialisation et vente), 7 (services après séjour).
- **Activités de soutien** : 1 (approvisionnements), 3 (gestion des ressources humaines), 6 (infrastructure).

Dans les services, la « production » et la relation client se confondent en grande partie.

</details>

### Exercice 3 — VRIO d'une banque

Une banque dispose : a) d'un réseau d'agences dans toutes les villes ; b) d'une application mobile récente, semblable à celle des concurrents ; c) d'une relation de confiance de plusieurs décennies avec la diaspora marocaine en Europe ; d) d'une équipe d'analystes des risques très expérimentée mais peu écoutée par la direction commerciale.

Appliquez la grille VRIO et concluez.

<details><summary>Voir le corrigé</summary>

- a) Réseau d'agences : valeur oui, rareté faible (les grandes banques en ont un) : **parité**.
- b) Application semblable : **parité** (valeur, mais ni rare ni difficile à imiter).
- c) Relation avec la diaspora : valeur, rareté, difficile à imiter (histoire, confiance) et exploitée : **avantage durable**.
- d) Équipe d'analystes : valeur, rareté, imitation difficile, mais mauvaise **organisation** : **avantage non exploité** ; il faut l'associer aux décisions de crédit.

</details>
`,
    qcm: [
      { q: "Le diagnostic interne identifie :", choix: ["Les opportunités et menaces", "Les forces et faiblesses", "Les parts de marché des concurrents", "Les évolutions réglementaires"], bonne: 1, explication: "Il porte sur l'entreprise elle-même." },
      { q: "Dans la chaîne de valeur, les approvisionnements sont une activité :", choix: ["Principale", "De soutien", "Externe", "De production"], bonne: 1, explication: "Ils soutiennent toutes les activités." },
      { q: "Le service après-vente est une activité :", choix: ["Principale", "De soutien", "D'infrastructure", "De développement technologique"], bonne: 0, explication: "Il crée directement de la valeur pour le client." },
      { q: "Une marque et des brevets sont des ressources :", choix: ["Tangibles", "Intangibles", "Financières", "Humaines"], bonne: 1, explication: "Actifs immatériels." },
      { q: "Dans VRIO, une ressource de valeur mais possédée par tous les concurrents conduit à :", choix: ["Un avantage durable", "Une parité concurrentielle", "Un désavantage", "Un avantage temporaire"], bonne: 1, explication: "Elle n'est pas rare." },
      { q: "Une ressource valorisable et rare mais facile à imiter procure :", choix: ["Un avantage durable", "Un avantage temporaire", "Une parité", "Un désavantage"], bonne: 1, explication: "Les concurrents la copieront." },
      { q: "Les compétences clés sont associées à :", choix: ["Porter", "Prahalad et Hamel", "Weber", "Ansoff"], bonne: 1, explication: "Article de 1990." },
      { q: "Résultat d'exploitation 8 MDH, capitaux investis 50 MDH. La rentabilité économique est :", choix: ["8 %", "16 %", "6,25 %", "42 %"], bonne: 1, explication: "8 / 50." },
      { q: "Le benchmarking consiste à :", choix: ["Fixer des prix", "Comparer ses performances aux meilleures pratiques", "Licencier du personnel", "Calculer le HHI"], bonne: 1, explication: "Pour repérer les écarts et progresser." },
      { q: "Poids 60 % et 40 %, notes 4 et 2. Le score pondéré vaut :", choix: ["3", "3,2", "6", "2,8"], bonne: 1, explication: "2,4 + 0,8." },
    ],
  },

  5: {
    titre: "La synthèse du diagnostic : SWOT, BCG et McKinsey",
    description: "Synthèse du diagnostic : SWOT et TOWS, matrice BCG, matrice McKinsey pondérée, matrice Arthur D. Little et limites des modèles de portefeuille.",
    resume: md`
## L'essentiel — SWOT, BCG, McKinsey

- **SWOT** : forces et faiblesses (internes), opportunités et menaces (externes) ; sélective, relative, orientée action ; **TOWS** : SO, ST, WO, WT.
- **BCG** : croissance du marché (besoins de liquidités) × **PDM relative** (effet d'expérience) ; vedette, **vache à lait** (finance), **dilemme** (investir ou se retirer), poids mort ; portefeuille équilibré.
- **McKinsey** : attrait du secteur × atouts de l'entreprise, moyennes pondérées ; neuf cases : investir, sélectivité, récolter ou désinvestir.
- **Arthur D. Little** : maturité du secteur × position concurrentielle ; développement naturel, sélectif, réorientation, abandon.
- Limites : synergies ignorées, seuils arbitraires, délimitation du marché, subjectivité des notes ; outils d'aide à la réflexion.
`,
    exercices: md`
### Exercice 2 — Flux de liquidités dans le BCG

Un groupe possède quatre DAS : A (vache à lait, génère 60 MDH par an), B (vedette, besoin net 10 MDH), C et D (dilemmes, besoins de 35 MDH chacun pour devenir vedettes).

1. Le groupe peut-il financer tous ses projets sans endettement ?
2. Que recommandez-vous ?

<details><summary>Voir le corrigé</summary>

**1)** Ressources : 60 MDH ; besoins : $10 + 35 + 35 = 80$ MDH : il manque **20 MDH**.

**2)** Financer B (vedette) en priorité, puis **un seul** dilemme, celui qui a le plus de chances de devenir leader (atouts, attrait) ; céder ou abandonner l'autre, ou chercher un partenaire pour le cofinancer. Disperser les ressources entre deux dilemmes risquerait de n'en faire réussir aucun.

</details>

### Exercice 3 — Score McKinsey

Un DAS obtient les notes (sur 5) suivantes. Attrait : croissance 2 (40 %), rentabilité 3 (30 %), concurrence 2 (30 %). Atouts : part de marché 4 (50 %), coûts 4 (30 %), marque 3 (20 %).

1. Calculez l'attrait et les atouts.
2. Placez le DAS (seuils 2,33 et 3,66) et indiquez la stratégie.

<details><summary>Voir le corrigé</summary>

**1)** Attrait : $0{,}8 + 0{,}9 + 0{,}6 = \mathbf{2{,}3}$ ; atouts : $2 + 1{,}2 + 0{,}6 = \mathbf{3{,}8}$.

**2)** Attrait **faible**, atouts **forts** : case de **sélectivité** — rentabiliser la position (limiter les investissements, maximiser les flux de trésorerie), à la manière d'une vache à lait.

</details>
`,
    qcm: [
      { q: "Dans une SWOT, une réglementation plus stricte qui gêne l'entreprise est :", choix: ["Une faiblesse", "Une menace", "Une force", "Une opportunité"], bonne: 1, explication: "Elle vient de l'environnement." },
      { q: "L'option WO de la matrice TOWS consiste à :", choix: ["Utiliser ses forces contre les menaces", "Corriger ses faiblesses pour saisir des opportunités", "Se retirer", "Utiliser ses forces pour saisir les opportunités"], bonne: 1, explication: "Par exemple par un partenariat." },
      { q: "Dans la matrice BCG, l'axe vertical mesure :", choix: ["La part de marché relative", "Le taux de croissance du marché", "La rentabilité", "Le chiffre d'affaires"], bonne: 1, explication: "Il reflète les besoins de financement." },
      { q: "Une vache à lait :", choix: ["Consomme beaucoup de liquidités", "Génère des liquidités", "Est sur un marché en forte croissance", "A une PDM relative inférieure à 1"], bonne: 1, explication: "Marché mature, position dominante." },
      { q: "Le leader détient 40 %, le second 25 %. La PDM relative du leader vaut :", choix: ["0,625", "1,6", "40", "0,4"], bonne: 1, explication: "40 / 25." },
      { q: "Pour un dilemme, la stratégie recommandée est :", choix: ["Rentabiliser sans investir", "Investir massivement ou se retirer", "Toujours abandonner", "Maintenir à l'identique"], bonne: 1, explication: "Il faut devenir leader ou partir." },
      { q: "La matrice McKinsey croise :", choix: ["Croissance et PDM relative", "Attrait du secteur et atouts de l'entreprise", "Maturité et position", "Prix et qualité"], bonne: 1, explication: "À partir de critères pondérés." },
      { q: "La matrice Arthur D. Little utilise :", choix: ["La maturité du secteur", "Le HHI", "La marge brute", "Le taux d'intérêt"], bonne: 0, explication: "Croisée avec la position concurrentielle." },
      { q: "Une limite majeure des matrices de portefeuille est :", choix: ["Leur complexité mathématique", "L'ignorance des synergies entre activités", "Leur coût", "L'absence de graphique"], bonne: 1, explication: "Les DAS sont supposés indépendants." },
      { q: "Attrait élevé et atouts forts : la matrice McKinsey recommande de :", choix: ["Désinvestir", "Investir", "Récolter", "Attendre"], bonne: 1, explication: "Zone de développement." },
    ],
  },

  6: {
    titre: "Les stratégies génériques (niveau business)",
    description: "Stratégies génériques de Porter : domination par les coûts, différenciation, focalisation, effet d'expérience, horloge de Bowman et océan bleu.",
    resume: md`
## L'essentiel — Stratégies génériques

- Deux sources d'avantage (Porter) : **coûts** plus bas ou **différenciation** ; cible large ou étroite → domination par les coûts, différenciation, **focalisation**.
- **Coûts** : échelle, **effet d'expérience**, standardisation, localisation, achats ; risques : imitation, rupture technologique, guerre des prix.
- **Effet d'expérience** : le coût baisse de 20 à 30 % à chaque doublement de la **production cumulée** ; courbe à 80 % : $C = C_0 (Q/Q_0)^{\log_2 0{,}8}$.
- **Différenciation** : attribut unique, valorisé, perceptible, difficile à imiter ; prime de prix > surcoût.
- **Focalisation** : servir mieux un segment ; risque de rétrécissement.
- **Voie médiane** (stuck in the middle) ; stratégies hybrides ; **horloge de Bowman** (prix × valeur perçue).
- **Océan bleu** : grille **ERAC** (exclure, réduire, augmenter, créer), canevas stratégique.
- Positions : leader, challenger, suiveur, spécialiste ; hypercompétition.
`,
    exercices: md`
### Exercice 2 — Courbe d'expérience à 85 %

Un fabricant de panneaux solaires a un coût unitaire de 2 000 DH pour une production cumulée de 5 000 panneaux ; sa courbe d'expérience est de 85 %.

1. Quel sera le coût unitaire à 10 000, 20 000 et 40 000 panneaux cumulés ?
2. Quel sera le coût à 30 000 panneaux cumulés ? (On donne $6^{\log_2 0{,}85} \approx 0{,}657$.)

<details><summary>Voir le corrigé</summary>

**1)** 10 000 : $2\,000 \times 0{,}85 = \mathbf{1\,700}$ DH ; 20 000 : $1\,700 \times 0{,}85 = \mathbf{1\,445}$ DH ; 40 000 : $1\,445 \times 0{,}85 \approx \mathbf{1\,228{,}25}$ DH.

**2)** 30 000 = 6 fois 5 000 : $2\,000 \times 0{,}657 \approx \mathbf{1\,314}$ DH.

</details>

### Exercice 3 — Identifier la stratégie générique

Identifiez la stratégie générique de chaque entreprise et un risque associé :
1. Une compagnie aérienne à bas prix sans repas ni bagage gratuit.
2. Une marque de montres de luxe.
3. Une clinique spécialisée uniquement dans la chirurgie de l'œil.
4. Un grand distributeur qui négocie des prix d'achat très bas grâce à ses volumes.

<details><summary>Voir le corrigé</summary>

1. **Domination par les coûts** (low cost) : risque de guerre des prix et de hausse du carburant.
2. **Différenciation** (image, savoir-faire) : risque de contrefaçon et de banalisation de la marque.
3. **Focalisation** (différenciation sur un segment) : risque d'entrée des grands hôpitaux sur ce créneau.
4. **Domination par les coûts** (pouvoir d'achat, volumes) : risque de dégrader les relations avec les fournisseurs et l'image.

</details>
`,
    qcm: [
      { q: "Selon Porter, les deux sources d'avantage concurrentiel sont :", choix: ["Prix et publicité", "Coûts bas et différenciation", "Taille et ancienneté", "Brevets et marques"], bonne: 1, explication: "Combinées à une cible large ou étroite." },
      { q: "L'effet d'expérience se mesure en fonction de :", choix: ["La production annuelle", "La production cumulée", "Le chiffre d'affaires", "Le nombre de salariés"], bonne: 1, explication: "Le coût baisse à chaque doublement de la production cumulée." },
      { q: "Courbe à 80 %, coût 50 DH : après un doublement de la production cumulée, le coût est :", choix: ["40 DH", "30 DH", "45 DH", "10 DH"], bonne: 0, explication: "50 × 0,8." },
      { q: "Une stratégie de différenciation est viable si :", choix: ["Le prix est le plus bas", "La prime de prix dépasse le surcoût de la différenciation", "Le produit est standard", "La part de marché est maximale"], bonne: 1, explication: "La différence doit être payée par les clients." },
      { q: "Servir mieux que les généralistes un segment particulier est une stratégie :", choix: ["De domination par les coûts", "De focalisation", "D'intégration", "De diversification"], bonne: 1, explication: "Aussi appelée concentration." },
      { q: "L'enlisement dans la voie médiane désigne :", choix: ["Une stratégie de niche", "L'absence de choix clair entre coûts et différenciation", "Une stratégie de croissance externe", "Un océan bleu"], bonne: 1, explication: "Stuck in the middle." },
      { q: "Dans la grille ERAC, la lettre C signifie :", choix: ["Concentrer", "Créer", "Contrôler", "Coûter"], bonne: 1, explication: "Exclure, réduire, augmenter, créer." },
      { q: "L'horloge stratégique de Bowman croise :", choix: ["Coûts et volumes", "Prix et valeur perçue", "Croissance et PDM", "Attrait et atouts"], bonne: 1, explication: "Elle distingue les positions viables et non viables." },
      { q: "Une entreprise qui attaque le leader sur ses points faibles est :", choix: ["Un suiveur", "Un challenger", "Un spécialiste", "Un monopole"], bonne: 1, explication: "Typologie de Kotler." },
      { q: "Un risque majeur de la domination par les coûts est :", choix: ["La prime de prix", "Une rupture technologique rendant l'expérience obsolète", "L'excès de fidélité des clients", "La rareté des produits"], bonne: 1, explication: "L'avantage accumulé peut disparaître." },
    ],
  },

  7: {
    titre: "Les stratégies de croissance (niveau corporate)",
    description: "Stratégies de croissance : spécialisation, intégration, diversification, externalisation, croissance interne, acquisitions, alliances et internationalisation.",
    resume: md`
## L'essentiel — Stratégies de croissance

- Directions : **spécialisation**, **intégration verticale** (amont, aval) et **horizontale**, **diversification** liée (synergies) ou conglomérale, **recentrage** ; matrice d'Ansoff.
- **Externalisation** : se concentrer sur le cœur de métier ; comparer coût interne et prix + coûts de transaction ; ne pas externaliser une compétence clé ni une activité à actifs spécifiques.
- Modalités : croissance **interne** (lente, maîtrisée), **externe** (rapide, prime, intégration difficile), **conjointe** (alliances, joint-ventures, licences, franchises).
- Acquisition : création de valeur = VA des synergies − prime − coûts d'intégration ; contrôle des concentrations.
- **Internationalisation** : export, licence ou franchise, joint-venture, filiale (engagement croissant) ; modèle d'**Uppsala** (progressivité) ; standardisation ou adaptation.
`,
    exercices: md`
### Exercice 2 — Qualifier les directions de croissance

Qualifiez chaque opération :
1. Un producteur d'huile d'olive rachète un réseau de boutiques.
2. Une banque rachète une banque concurrente.
3. Un cimentier crée une activité de béton prêt à l'emploi.
4. Un groupe de télécommunications rachète une chaîne d'hôtels.
5. Un groupe cède ses activités non stratégiques pour se concentrer sur l'agroalimentaire.

<details><summary>Voir le corrigé</summary>

1. **Intégration verticale en aval** (vers la distribution).
2. **Intégration horizontale** (croissance externe).
3. **Intégration verticale en aval** (ou diversification liée) : le béton utilise le ciment.
4. **Diversification conglomérale** (aucun lien de métier).
5. **Recentrage**.

</details>

### Exercice 3 — Valeur des synergies

Une entreprise paie 80 MDH une cible valant 70 MDH seule. Les synergies attendues sont de 4 MDH par an pendant 8 ans, au taux de 8 % ; les coûts d'intégration sont de 3 MDH.

1. Calculez la prime et la valeur actuelle des synergies ($(1 - 1{,}08^{-8}) / 0{,}08 \approx 5{,}7466$).
2. L'acquisition crée-t-elle de la valeur ?

<details><summary>Voir le corrigé</summary>

**1)** Prime : $80 - 70 = \mathbf{10}$ MDH ; VA des synergies : $4 \times 5{,}7466 \approx \mathbf{22{,}99}$ MDH.

**2)** Création de valeur : $22{,}99 - 10 - 3 \approx \mathbf{9{,}99}$ MDH : oui, si les synergies se réalisent comme prévu ; la marge de sécurité est confortable.

</details>
`,
    qcm: [
      { q: "Racheter un fournisseur est une intégration :", choix: ["Horizontale", "Verticale en amont", "Verticale en aval", "Conglomérale"], bonne: 1, explication: "On remonte la filière vers les fournisseurs." },
      { q: "La diversification conglomérale se caractérise par :", choix: ["De fortes synergies", "L'absence de lien entre les activités", "Le rachat de concurrents", "Le rachat de distributeurs"], bonne: 1, explication: "Elle répartit les risques sans synergies." },
      { q: "Le recentrage consiste à :", choix: ["Se diversifier", "Céder les activités périphériques pour se concentrer sur le métier de base", "Racheter des concurrents", "S'internationaliser"], bonne: 1, explication: "Concentration des ressources." },
      { q: "On évite d'externaliser :", choix: ["Le gardiennage", "Une compétence clé", "Le nettoyage", "Le transport standard"], bonne: 1, explication: "Elle fonde l'avantage concurrentiel." },
      { q: "La croissance externe présente l'avantage de :", choix: ["L'absence de prime", "La rapidité", "L'absence de risque culturel", "La lenteur"], bonne: 1, explication: "Accès immédiat à des parts de marché et à des compétences." },
      { q: "Une filiale commune à deux entreprises s'appelle :", choix: ["Une licence", "Une joint-venture", "Une franchise", "Une holding"], bonne: 1, explication: "Mode de croissance conjointe." },
      { q: "Prix payé 100, valeur de la cible 85. La prime est de :", choix: ["15", "185", "85", "17,6 %"], bonne: 0, explication: "100 − 85." },
      { q: "Selon le modèle d'Uppsala, l'internationalisation est :", choix: ["Immédiate et totale", "Progressive", "Toujours par acquisition", "Impossible pour les PME"], bonne: 1, explication: "Marchés proches d'abord, engagement croissant." },
      { q: "Le mode d'entrée qui offre le contrôle le plus élevé est :", choix: ["L'exportation", "La licence", "La filiale à 100 %", "La franchise"], bonne: 2, explication: "Mais il exige l'engagement le plus fort." },
      { q: "Une acquisition crée de la valeur si :", choix: ["La prime est élevée", "La VA des synergies dépasse la prime et les coûts d'intégration", "La cible est grande", "Le prix est payé comptant"], bonne: 1, explication: "C'est la condition économique de la réussite." },
    ],
  },

  8: {
    titre: "Structures, culture et conduite du changement",
    description: "Structures organisationnelles, configurations de Mintzberg, culture d'entreprise selon Schein, résistances au changement, modèles de Lewin et de Kotter.",
    resume: md`
## L'essentiel — Structures, culture, changement

- **Chandler** : la structure suit la stratégie ; dimensions : spécialisation, formalisation, centralisation, configuration.
- Structures : simple, **fonctionnelle** (mono-activité), **divisionnelle** (groupe diversifié), **matricielle** (double rattachement), par projets, en réseau.
- **Mintzberg** : sommet stratégique, ligne hiérarchique, centre opérationnel, technostructure, support logistique, idéologie ; coordination par ajustement mutuel, supervision directe, standardisation (procédés, résultats, qualifications, normes) ; configurations entrepreneuriale, mécaniste, professionnelle, divisionnalisée, adhocratie, missionnaire.
- **Culture** (Schein) : artefacts, valeurs affichées, présupposés fondamentaux ; force ou frein ; influence de la culture nationale (Hofstede).
- Résistances : peur, perte de statut ou de pouvoir, habitudes, manque d'information.
- **Lewin** : décristallisation, déplacement, recristallisation ; champ de forces. **Kotter** : urgence, coalition, vision, communication, obstacles, victoires rapides, consolidation, ancrage.
`,
    exercices: md`
### Exercice 2 — Identifier la configuration de Mintzberg

Associez chaque organisation à une configuration : 1) un CHU ; 2) une start-up de jeux vidéo ; 3) une boulangerie dirigée par son fondateur ; 4) une chaîne de montage automobile ; 5) un groupe industriel à cinq divisions ; 6) une association humanitaire.

<details><summary>Voir le corrigé</summary>

1. **Professionnelle** (standardisation des qualifications des médecins).
2. **Adhocratie** (ajustement mutuel, innovation).
3. **Entrepreneuriale** (supervision directe).
4. **Mécaniste** (standardisation des procédés).
5. **Divisionnalisée** (standardisation des résultats).
6. **Missionnaire** (standardisation des normes, idéologie).

</details>

### Exercice 3 — Champ de forces de Lewin

Une université veut généraliser l'enseignement hybride (présentiel et à distance). Identifiez trois forces motrices et trois forces de résistance, puis proposez une action pour réduire chaque résistance.

<details><summary>Voir le corrigé</summary>

- **Forces motrices** : effectifs d'étudiants en hausse, attentes des étudiants habitués au numérique, possibilités offertes par les plateformes.
- **Forces de résistance** et actions :
  - manque de compétences numériques de certains enseignants → **formation** et accompagnement pédagogique ;
  - crainte d'une surcharge de travail → **reconnaissance** du temps de conception des cours (décharges, primes) ;
  - équipements insuffisants → **investissement** dans les salles et le réseau, pilote sur quelques filières (victoire rapide).

Réduire les résistances est plus efficace que d'augmenter la pression.

</details>
`,
    qcm: [
      { q: "« La structure suit la stratégie » est une thèse de :", choix: ["Mintzberg", "Chandler", "Porter", "Lewin"], bonne: 1, explication: "Étude des grandes entreprises américaines." },
      { q: "La structure adaptée à un groupe diversifié est en général :", choix: ["Fonctionnelle", "Divisionnelle", "Simple", "Entrepreneuriale"], bonne: 1, explication: "Divisions par produit ou marché." },
      { q: "Le double rattachement hiérarchique caractérise la structure :", choix: ["Fonctionnelle", "Matricielle", "Divisionnelle", "Simple"], bonne: 1, explication: "Fonction et projet ou produit." },
      { q: "Selon Mintzberg, la technostructure regroupe :", choix: ["Les ouvriers", "Les analystes qui standardisent le travail", "La direction générale", "Les services de restauration"], bonne: 1, explication: "Méthodes, planification, contrôle de gestion." },
      { q: "La configuration d'un hôpital est :", choix: ["Mécaniste", "Professionnelle", "Entrepreneuriale", "Divisionnalisée"], bonne: 1, explication: "Coordination par les qualifications." },
      { q: "L'adhocratie se coordonne principalement par :", choix: ["La supervision directe", "L'ajustement mutuel", "La standardisation des procédés", "La standardisation des résultats"], bonne: 1, explication: "Adaptée à l'innovation." },
      { q: "Selon Schein, le niveau le plus profond de la culture est :", choix: ["Les artefacts", "Les valeurs affichées", "Les présupposés fondamentaux", "Le logo"], bonne: 2, explication: "Croyances souvent inconscientes." },
      { q: "La première étape du modèle de Lewin est :", choix: ["La recristallisation", "La décristallisation", "Le déplacement", "L'évaluation"], bonne: 1, explication: "Remettre en cause l'équilibre existant." },
      { q: "Chez Kotter, la première étape est de :", choix: ["Former les salariés", "Créer un sentiment d'urgence", "Ancrer le changement", "Recruter"], bonne: 1, explication: "Huit étapes du changement." },
      { q: "Une source classique de résistance au changement est :", choix: ["La clarté de la vision", "La peur de perdre son statut ou son pouvoir", "La participation", "La formation"], bonne: 1, explication: "Enjeux de pouvoir (Crozier)." },
    ],
  },
};

export default chapitres;
