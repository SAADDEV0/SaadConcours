// Intelligence artificielle et économie numérique (S5) — compléments par chapitre : description SEO, résumé, exercices 2 et 3, QCM.
const md = String.raw;

const chapitres = {
  1: {
    titre: "L'économie numérique : définitions, mesure et caractéristiques",
    description: "Définition et mesure de l'économie numérique, loi de Moore, biens d'information à coût marginal nul, versions et freemium, verrouillage et paradoxe de Solow.",
    resume: md`
## L'essentiel — L'économie numérique

- **Économie numérique** : activités reposant sur les TIC ; trois cercles : secteur numérique (producteurs de TIC), économie numérique au sens étroit (modèles numériques), **économie numérisée** (tous les secteurs utilisateurs).
- **Loi de Moore** (1965) : doublement du nombre de transistors environ tous les deux ans, soit environ × 32 en dix ans ; essor d'internet, du mobile et du cloud.
- Mesure difficile : **gratuité**, effets qualité, dématérialisation des échanges, frontière floue.
- **Biens d'information** (Shapiro et Varian, 1999) : coût fixe élevé, **coût marginal presque nul**, $CM = F/q + c$ décroissant ; rendements très croissants, tendance à la concentration.
- Non-rivalité, exclusion par la technique et le droit, **biens d'expérience**, **verrouillage** et coûts de changement.
- Prix selon la disposition à payer : **versions**, **freemium**, offres groupées, abonnement, publicité ; formes de discrimination par les prix.
- Mesure par indicateurs complémentaires : part du secteur TIC dans le PIB, investissement en logiciels, taux d'usage, commerce électronique, exportations de services numériques.
- **Paradoxe de Solow** (1987) : des ordinateurs partout sauf dans les statistiques de productivité ; explications : délais de réorganisation (**courbe en J**), erreurs de mesure, gains concentrés.
`,
    exercices: md`
### Exercice 2 — Offre groupée

Deux clients ont les dispositions à payer suivantes (en DH par an) pour deux logiciels :

| Client | Traitement de texte | Tableur |
|---|---:|---:|
| Client A | 120 | 60 |
| Client B | 70 | 110 |

Le coût marginal est nul.

1. Quelle recette maximale l'éditeur obtient-il en vendant chaque logiciel séparément à un prix unique ?
2. Quelle recette obtient-il en vendant uniquement l'offre groupée des deux logiciels ?
3. Expliquez le résultat.

<details><summary>Voir le corrigé</summary>

**1)** Traitement de texte : prix 70 (les deux achètent) = 140, ou prix 120 (A seul) = 120 ; meilleur choix **140**. Tableur : prix 60 (les deux) = 120, ou prix 110 (B seul) = 110 ; meilleur choix **120**. Total : **260** DH.

**2)** Disposition à payer pour l'ensemble : A = 180, B = 180. Au prix de 180, les deux achètent : recette **360** DH.

**3)** Les dispositions à payer sont **négativement corrélées** : A valorise surtout le traitement de texte, B le tableur. Le total des deux est plus homogène que chaque composante, ce qui permet de capter presque tout le surplus avec un prix unique. C'est la logique des suites logicielles et des bouquets.

</details>

### Exercice 3 — Question de cours

**Sujet** : « Pourquoi les marchés de biens numériques tendent-ils à être dominés par quelques entreprises ? »

<details><summary>Voir le corrigé</summary>

**Introduction** : constater la domination de quelques acteurs (moteurs de recherche, systèmes d'exploitation, plateformes) ; problématique : quelles caractéristiques économiques expliquent cette concentration ?

**I. Une structure de coûts favorable aux grands**
- A. Coût fixe élevé et coût marginal presque nul : coût moyen très décroissant, avantage décisif au leader.
- B. La tarification au coût marginal est impossible : seules les entreprises de grande taille couvrent leurs coûts fixes.

**II. Des mécanismes qui renforcent la domination**
- A. Les effets de réseau (chapitre 2) : la valeur du service augmente avec le nombre d'utilisateurs.
- B. Le verrouillage et les coûts de changement fidélisent les clients.
- C. Les données accumulées améliorent le service (chapitre 3).

**III. Des limites**
- A. La concurrence se fait « pour le marché » : un leader peut être détrôné par une innovation.
- B. Les autorités de concurrence encadrent les abus (chapitre 6).

**Conclusion** : la concentration n'est pas un accident mais une conséquence de l'économie de l'information, d'où l'importance de la régulation.

</details>
`,
    qcm: [
      { q: "L'économie numérisée au sens large comprend :", choix: ["Seulement les opérateurs télécoms", "Tous les secteurs qui utilisent le numérique pour produire et vendre", "Seulement les plateformes", "Seulement les fabricants d'ordinateurs"], bonne: 1, explication: "C'est le périmètre le plus large." },
      { q: "Selon la loi de Moore, en dix ans la capacité des puces est multipliée environ par :", choix: ["5", "10", "32", "100"], bonne: 2, explication: "Un doublement tous les deux ans : 2 puissance 5 = 32." },
      { q: "Le coût marginal d'une copie supplémentaire d'un logiciel est :", choix: ["Très élevé", "Presque nul", "Égal au coût fixe", "Croissant"], bonne: 1, explication: "D'où des rendements d'échelle très croissants." },
      { q: "Un bien d'expérience est un bien :", choix: ["Réservé aux experts", "Dont on ne connaît la valeur qu'après l'avoir consommé", "Toujours gratuit", "Produit en série"], bonne: 1, explication: "D'où les essais gratuits et les recommandations." },
      { q: "Le versioning consiste à :", choix: ["Mettre à jour un logiciel", "Proposer plusieurs versions pour séparer les clients selon leur disposition à payer", "Vendre au coût marginal", "Interdire la copie"], bonne: 1, explication: "C'est une forme de discrimination par les prix." },
      { q: "Le verrouillage (lock-in) résulte :", choix: ["Des droits de douane", "Des coûts de changement de fournisseur", "De la gratuité", "De la loi de Moore"], bonne: 1, explication: "Apprentissage, conversion des données, compatibilité." },
      { q: "Le paradoxe de Solow (1987) souligne :", choix: ["La baisse des prix des ordinateurs", "L'absence de gains visibles de productivité malgré l'informatisation", "La hausse du chômage", "L'essor du commerce en ligne"], bonne: 1, explication: "On voit des ordinateurs partout sauf dans les statistiques." },
      { q: "La gratuité des services en ligne rend difficile :", choix: ["Leur usage", "La mesure de la valeur créée dans le PIB", "Leur diffusion", "Leur financement par la publicité"], bonne: 1, explication: "Ils n'apparaissent qu'à travers les recettes publicitaires." },
      { q: "Avec F = 2 000 000 DH et c = 2 DH, le coût moyen pour 1 000 000 de licences est :", choix: ["2 DH", "4 DH", "202 DH", "2 000 DH"], bonne: 1, explication: "2 000 000 / 1 000 000 + 2 = 4." },
      { q: "La courbe en J de la productivité signifie que :", choix: ["La productivité augmente immédiatement", "La productivité baisse d'abord pendant la phase d'investissement immatériel, puis augmente", "La productivité est constante", "La productivité baisse définitivement"], bonne: 1, explication: "Idée défendue par Erik Brynjolfsson." },
    ],
  },

  2: {
    titre: "Les plateformes numériques et les marchés bifaces",
    description: "Plateformes numériques, effets de réseau directs et croisés, loi de Metcalfe, masse critique, marchés bifaces, tarification asymétrique, gagnant rafle tout.",
    resume: md`
## L'essentiel — Plateformes et marchés bifaces

- **Plateforme** : intermédiaire numérique qui met en relation des groupes qui ont intérêt à interagir ; elle organise la rencontre, fixe les règles et prélève une rémunération.
- **Effet de réseau direct** (même groupe : messagerie) et **indirect ou croisé** (autre groupe : restaurants et clients).
- **Loi de Metcalfe** : $\frac{n(n-1)}{2}$ connexions ; la valeur croît comme $n^2$ ; doubler les utilisateurs multiplie la valeur par environ 4.
- Problème de la **poule et de l'œuf** ; **masse critique** ; stratégies : subvention d'un côté, niche, réseau existant, offre propre.
- **Marché biface** (Rochet et Tirole, 2003) : la **structure** des prix entre les deux côtés compte ; **tarification asymétrique** : faire payer le côté peu sensible au prix, subventionner celui qui attire l'autre.
- Un prix nul d'un côté n'est pas forcément de la prédation : il faut analyser les deux côtés ensemble.
- **Le gagnant rafle tout** : concurrence pour le marché ; limites : **multi-hébergement**, différenciation, congestion, innovation.
- Plateforme dominante = **contrôleur d'accès** ; enjeux : commissions, autopréférence, statut des travailleurs (protection sociale, loi-cadre 09-21 au Maroc).
`,
    exercices: md`
### Exercice 2 — Qui doit payer ?

Une plateforme de petites annonces immobilières met en relation des agences et des particuliers qui cherchent un logement. Une étude montre que les particuliers sont très sensibles au prix (une petite somme les fait fuir vers d'autres sites), tandis que les agences tirent un revenu important de chaque client trouvé.

1. Quel côté du marché la plateforme doit-elle faire payer ? Pourquoi ?
2. Quel effet de réseau joue ici ?
3. Une agence se plaint que la plateforme est gratuite pour les particuliers et payante pour elle : est-ce une discrimination illégitime ?

<details><summary>Voir le corrigé</summary>

**1)** Les **agences**, peu sensibles au prix et qui profitent le plus de la présence des particuliers. Les particuliers doivent rester gratuits, car leur présence fait la valeur de la plateforme pour les agences.

**2)** Un effet de réseau **croisé** : plus il y a de particuliers, plus la plateforme est utile aux agences, et plus il y a d'annonces, plus elle attire de particuliers.

**3)** Non, en principe : c'est la logique normale d'un marché biface. Le prix payé par les agences finance le service offert aux particuliers, dont la présence crée la valeur que les agences achètent. Il y aurait un problème si la plateforme, devenue dominante, imposait des conditions abusives ou discriminait entre agences comparables.

</details>

### Exercice 3 — Question de synthèse

**Sujet** : « Les plateformes numériques sont-elles des monopoles naturels ? »

<details><summary>Voir le corrigé</summary>

**Introduction** : définir le monopole naturel (une seule entreprise produit à moindre coût que plusieurs) et la plateforme ; problématique : les caractéristiques des plateformes conduisent-elles inévitablement au monopole ?

**I. Des forces qui poussent au monopole**
- A. Coûts fixes élevés et coût marginal presque nul (rendements croissants).
- B. Effets de réseau : la plateforme la plus fréquentée est la plus utile ; marchés où le gagnant rafle tout.
- C. Accumulation de données et verrouillage.

**II. Des forces qui maintiennent la concurrence**
- A. Multi-hébergement des utilisateurs et des prestataires.
- B. Différenciation et plateformes spécialisées.
- C. Innovation et contestabilité : des leaders d'hier ont été détrônés.

**III. Le rôle de la régulation**
- A. Contrôle des abus de position dominante et des concentrations.
- B. Obligations ex ante pour les contrôleurs d'accès (DMA européen), portabilité des données.

**Conclusion** : les plateformes ne sont pas des monopoles naturels au sens strict, mais leurs caractéristiques favorisent la domination durable, ce qui justifie une régulation spécifique.

</details>
`,
    qcm: [
      { q: "Un effet de réseau indirect signifie que la valeur pour un groupe dépend :", choix: ["Du nombre d'utilisateurs du même groupe", "Du nombre d'utilisateurs de l'autre groupe", "Du prix de la publicité", "Des coûts fixes"], bonne: 1, explication: "Exemple : restaurants et clients d'une application de livraison." },
      { q: "Selon la loi de Metcalfe, un réseau de 1 000 utilisateurs offre :", choix: ["1 000 connexions", "499 500 connexions", "1 000 000 de connexions", "2 000 connexions"], bonne: 1, explication: "n(n − 1) / 2." },
      { q: "Doubler le nombre d'utilisateurs multiplie la valeur du réseau selon Metcalfe par environ :", choix: ["2", "4", "8", "1,5"], bonne: 1, explication: "La valeur croît comme n au carré." },
      { q: "La théorie des marchés bifaces a été formalisée par :", choix: ["Shapiro et Varian", "Rochet et Tirole", "Brander et Spencer", "Autor et Levy"], bonne: 1, explication: "En 2003." },
      { q: "Dans un marché biface, la plateforme fait généralement payer :", choix: ["Le côté le plus sensible au prix", "Le côté le moins sensible au prix et qui profite le plus de l'autre", "Les deux côtés au même prix", "Personne"], bonne: 1, explication: "C'est la tarification asymétrique." },
      { q: "La masse critique est :", choix: ["Le coût fixe d'une plateforme", "Le nombre d'utilisateurs au-delà duquel la croissance s'entretient d'elle-même", "La commission maximale", "Le nombre de concurrents"], bonne: 1, explication: "Il faut l'atteindre pour résoudre le problème de la poule et de l'œuf." },
      { q: "Le multi-hébergement désigne :", choix: ["L'hébergement de serveurs dans plusieurs pays", "L'utilisation simultanée de plusieurs plateformes concurrentes", "La location de logements", "La fusion de plateformes"], bonne: 1, explication: "Il limite la domination d'une seule plateforme." },
      { q: "Les moteurs de recherche sont gratuits pour les internautes car :", choix: ["Ils n'ont pas de coûts", "Les annonceurs paient pour atteindre les internautes", "L'État les finance", "Ils vendent des ordinateurs"], bonne: 1, explication: "Exemple typique de marché biface." },
      { q: "Un contrôleur d'accès (gatekeeper) est :", choix: ["Un agent des douanes", "Une plateforme incontournable pour atteindre les consommateurs", "Un logiciel antivirus", "Un régulateur"], bonne: 1, explication: "Notion utilisée par la régulation européenne." },
      { q: "La concurrence pour le marché signifie que :", choix: ["Plusieurs entreprises se partagent durablement le marché", "Les entreprises se battent pour devenir l'acteur dominant", "Le marché est réglementé", "Les prix sont fixés par l'État"], bonne: 1, explication: "Caractéristique des marchés où le gagnant rafle tout." },
    ],
  },

  3: {
    titre: "L'économie des données",
    description: "Big data, chaîne de valeur et valorisation des données, non-rivalité et boucle de rétroaction, loi 09-08 et CNDP, RGPD et souveraineté numérique.",
    resume: md`
## L'essentiel — L'économie des données

- **Donnée** → information → connaissance ; données personnelles, non personnelles, **ouvertes**.
- **Big data** : volume, vélocité, variété, véracité, valeur (5 V).
- Chaîne de valeur : collecte, stockage, traitement, analyse, **valorisation** (amélioration des services, publicité ciblée, tarification du risque, vente).
- **ARPU** = chiffre d'affaires / nombre d'utilisateurs ; mesure ce que rapporte chaque utilisateur.
- Propriétés : **non-rivalité**, rendements d'abord croissants puis décroissants, **boucle de rétroaction** (barrière à l'entrée), complémentarité avec compétences et calcul, externalités entre personnes.
- **Loi 09-08** (2009) : consentement, finalité, proportionnalité, sécurité, droits d'accès, de rectification et d'opposition ; autorité de contrôle : **CNDP** ; transferts à l'étranger encadrés.
- **Loi 05-20** sur la cybersécurité (2020), DGSSI.
- **RGPD** (2016, applicable le 25 mai 2018) : portabilité, droit à l'effacement, notification des fuites ; amende jusqu'à **20 millions d'euros ou 4 % du chiffre d'affaires mondial** ; s'applique hors UE (offshoring marocain).
- Open data, **souveraineté numérique** : maîtrise des données et des infrastructures, arbitrage avec le coût et les échanges.
`,
    exercices: md`
### Exercice 2 — Rendements décroissants des données

Une entreprise de logistique entraîne un modèle de prévision de la demande. Le taux d'erreur de prévision évolue ainsi selon le nombre de mois de données historiques utilisés :

| Mois de données | 6 | 12 | 24 | 48 |
|---|---:|---:|---:|---:|
| Taux d'erreur | 20 % | 14 % | 11 % | 10 % |

1. Calculez la baisse du taux d'erreur à chaque doublement des données.
2. Que montre ce résultat ? Comment l'entreprise pourrait-elle améliorer davantage ses prévisions ?

<details><summary>Voir le corrigé</summary>

**1)** De 6 à 12 mois : **− 6 points** ; de 12 à 24 mois : **− 3 points** ; de 24 à 48 mois : **− 1 point**.

**2)** Les données ont des **rendements décroissants** : chaque doublement apporte un gain plus faible. Au-delà d'un certain volume, accumuler des données anciennes apporte peu. Pour progresser, l'entreprise doit plutôt améliorer la **qualité** et la **variété** des données (ajouter la météo, les promotions, les jours fériés, le ramadan), leur **fraîcheur** (données en temps réel) ou le modèle lui-même.

</details>

### Exercice 3 — Question de synthèse

**Sujet** : « Les données sont-elles le pétrole du XXIe siècle ? »

<details><summary>Voir le corrigé</summary>

**Introduction** : la formule souligne le rôle des données comme ressource stratégique ; problématique : la comparaison est-elle pertinente ?

**I. Des points communs**
- A. Une ressource à l'origine d'une forte création de valeur et de grandes fortunes (plateformes).
- B. Une ressource qui doit être raffinée (traitement, analyse) avant d'être utile.
- C. Un enjeu de pouvoir et de souveraineté entre pays.

**II. Des différences fondamentales**
- A. La donnée est **non rivale** et ne s'épuise pas ; le pétrole est rival et épuisable.
- B. Sa valeur dépend du contexte, de la qualité et de la combinaison avec d'autres données ; ses rendements deviennent décroissants.
- C. Elle concerne souvent des personnes : sa valorisation pose des questions de vie privée (loi 09-08, RGPD) que le pétrole ne pose pas.

**Conclusion** : la métaphore est utile pour souligner l'enjeu économique, mais trompeuse : la donnée relève plutôt d'une infrastructure partagée, dont l'ouverture et la protection doivent être organisées.

</details>
`,
    qcm: [
      { q: "Les 5 V du big data sont :", choix: ["Vitesse, valeur, vente, vérité, vision", "Volume, vélocité, variété, véracité, valeur", "Volume, vente, version, valeur, vidéo", "Variété, vitesse, virtualité, vie privée, valeur"], bonne: 1, explication: "Ils caractérisent les mégadonnées." },
      { q: "La non-rivalité des données signifie que :", choix: ["Elles sont gratuites", "Leur usage par l'un n'empêche pas leur usage par un autre", "Elles ne peuvent pas être protégées", "Elles sont toujours personnelles"], bonne: 1, explication: "Une même donnée peut servir plusieurs usages simultanément." },
      { q: "L'ARPU se calcule comme :", choix: ["Bénéfice / capital", "Chiffre d'affaires / nombre d'utilisateurs", "Nombre d'utilisateurs / coût", "Publicité / affichages"], bonne: 1, explication: "Revenu moyen par utilisateur." },
      { q: "La loi marocaine sur la protection des données personnelles est la :", choix: ["Loi 05-20", "Loi 09-08", "Loi 104-12", "Loi 17-95"], bonne: 1, explication: "Promulguée en 2009." },
      { q: "L'autorité marocaine de contrôle des données personnelles est :", choix: ["L'ANRT", "La CNDP", "La DGSSI", "Le Conseil de la concurrence"], bonne: 1, explication: "Commission nationale de contrôle de la protection des données à caractère personnel." },
      { q: "Le RGPD est applicable depuis le :", choix: ["1er janvier 2016", "25 mai 2018", "1er août 2024", "11 juin 2026"], bonne: 1, explication: "Adopté en 2016." },
      { q: "L'amende maximale du RGPD atteint :", choix: ["1 % du chiffre d'affaires", "20 millions d'euros ou 4 % du chiffre d'affaires mondial", "100 000 euros", "10 % du bénéfice"], bonne: 1, explication: "Le montant le plus élevé est retenu." },
      { q: "La boucle de rétroaction des données signifie que :", choix: ["Les données sont supprimées après usage", "Plus d'utilisateurs donnent plus de données, qui améliorent le service et attirent plus d'utilisateurs", "Les données reviennent à l'utilisateur", "Les données sont vendues deux fois"], bonne: 1, explication: "Elle crée une barrière à l'entrée." },
      { q: "Le principe de proportionnalité impose de :", choix: ["Collecter toutes les données possibles", "Ne collecter que les données nécessaires à la finalité", "Vendre les données au prix du marché", "Publier les données"], bonne: 1, explication: "Principe de la loi 09-08." },
      { q: "La loi marocaine relative à la cybersécurité est la :", choix: ["Loi 05-20", "Loi 09-08", "Loi 61-16", "Loi 43-20"], bonne: 0, explication: "Adoptée en 2020, sous l'autorité de la DGSSI." },
    ],
  },

  4: {
    titre: "L'intelligence artificielle : notions et économie de la prédiction",
    description: "Définition et histoire de l'IA, apprentissage supervisé et profond, IA générative, baisse du coût de la prédiction, intrants de l'IA, précision et rappel.",
    resume: md`
## L'essentiel — L'IA et l'économie de la prédiction

- **IA** : système qui produit, à partir de données, des prédictions, recommandations, contenus ou décisions, avec une certaine autonomie (définition inspirée de l'OCDE).
- Étapes : Turing (1950), **Dartmouth (1956)**, hivers de l'IA, systèmes experts (années 1980), apprentissage automatique, apprentissage profond (2012), transformeurs (2017), IA générative grand public (fin 2022).
- **Apprentissage supervisé** (données étiquetées : fraude, crédit), **non supervisé** (segmentation), **par renforcement** (essais et erreurs) ; **apprentissage profond** (réseaux de neurones).
- **IA générative** : les grands modèles de langage prédisent la suite d'un texte.
- **Agrawal, Gans, Goldfarb (2018)** : l'IA fait baisser le **coût de la prédiction** ; plus de prédiction, nouveaux usages, hausse de la valeur des **compléments** (jugement, données, action), baisse de celle des **substituts** (prédiction humaine).
- Intrants : données, calcul, talents, capital immatériel ; **entraînement** = coût fixe énorme, **inférence** = coût variable décroissant ; marché en couches (modèles de fondation, applications, modèles ouverts).
- Évaluation : exactitude (trompeuse si événement rare), **précision** $= \frac{VP}{VP + FP}$, **rappel** $= \frac{VP}{VP + FN}$ ; le **seuil** dépend du coût relatif des erreurs.
- Limites : erreurs, **biais**, opacité, coût environnemental, dépendance technologique.
`,
    exercices: md`
### Exercice 2 — Prédiction et jugement en logistique

Un entrepôt de Casablanca utilise un modèle d'IA pour prévoir la demande quotidienne d'un produit. Le modèle prévoit 1 000 unités pour demain, avec une marge d'erreur de plus ou moins 150 unités. Chaque unité manquante (rupture) fait perdre une marge de 40 DH ; chaque unité en excès coûte 10 DH de stockage et de démarque.

1. Quelle partie de la décision relève de la prédiction, quelle partie du jugement ?
2. L'entrepôt doit-il commander exactement 1 000 unités, plus ou moins ? Justifiez.
3. Comment la valeur de l'expérience du responsable des stocks évolue-t-elle avec l'IA ?

<details><summary>Voir le corrigé</summary>

**1)** La **prédiction** est l'estimation de la demande (1 000 unités, plus ou moins 150), fournie par le modèle. Le **jugement** consiste à choisir la quantité à commander compte tenu du coût des erreurs.

**2)** Une unité manquante coûte 4 fois plus qu'une unité en excès (40 DH contre 10 DH). L'entrepôt a donc intérêt à commander **plus de 1 000 unités**, pour réduire le risque de rupture, jusqu'au point où le coût attendu d'une unité supplémentaire en excès égale le gain attendu d'une rupture évitée (raisonnement du « vendeur de journaux ») : la quantité optimale couvre la demande dans $\frac{40}{40 + 10} = 80\,\%$ des cas. Une commande de l'ordre de 1 100 unités est cohérente avec cette asymétrie.

**3)** La partie de son travail qui consistait à **prévoir** la demande perd de la valeur, car le modèle le fait mieux et moins cher. En revanche, son **jugement** (fixer les coûts des erreurs, intégrer des événements que le modèle ignore, comme une grève des transports ou une promotion d'un concurrent) et sa capacité à **agir** (négocier avec les fournisseurs) prennent de la valeur.

</details>

### Exercice 3 — Question de synthèse

**Sujet** : « L'intelligence artificielle est-elle une technologie à usage général ? »

<details><summary>Voir le corrigé</summary>

**Introduction** : définir une technologie à usage général (machine à vapeur, électricité, informatique) : technologie qui se diffuse dans toute l'économie, s'améliore dans le temps et suscite des innovations complémentaires ; problématique : l'IA en présente-t-elle les caractéristiques ?

**I. Les arguments en faveur**
- A. Diffusion dans tous les secteurs : banque, santé, logistique, agriculture, administration.
- B. Amélioration rapide des performances et baisse du coût de la prédiction.
- C. Innovations complémentaires : nouveaux produits, réorganisation des processus.

**II. Les nuances**
- A. Les effets sur la productivité tardent (courbe en J, paradoxe de Solow) et exigent de lourds investissements immatériels.
- B. Les limites techniques (erreurs, biais) restreignent les usages sensibles.
- C. La diffusion est inégale entre grandes et petites entreprises, entre pays.

**Conclusion** : l'IA présente les caractéristiques d'une technologie à usage général, mais ses effets économiques dépendront de la vitesse de diffusion et des investissements complémentaires.

</details>
`,
    qcm: [
      { q: "Le terme « intelligence artificielle » a été adopté lors de la conférence de Dartmouth en :", choix: ["1950", "1956", "1987", "2012"], bonne: 1, explication: "Turing avait posé la question des machines pensantes en 1950." },
      { q: "L'apprentissage supervisé utilise :", choix: ["Des données étiquetées", "Aucune donnée", "Seulement des règles écrites", "Des récompenses par essais et erreurs"], bonne: 0, explication: "Exemple : transactions marquées fraude ou normale." },
      { q: "La segmentation de clients en groupes homogènes relève de :", choix: ["L'apprentissage supervisé", "L'apprentissage non supervisé", "L'apprentissage par renforcement", "Un système expert"], bonne: 1, explication: "Le système découvre des structures sans étiquettes." },
      { q: "Selon Agrawal, Gans et Goldfarb, l'IA est avant tout :", choix: ["Une baisse du coût de la prédiction", "Une baisse du coût de l'énergie", "Une hausse du coût du travail", "Une technologie de stockage"], bonne: 0, explication: "Prediction Machines, 2018." },
      { q: "Le principal complément de la prédiction est :", choix: ["La prédiction humaine", "Le jugement", "Le papier", "Le droit de douane"], bonne: 1, explication: "Savoir quelle décision prendre selon le coût des erreurs." },
      { q: "L'entraînement d'un grand modèle d'IA représente surtout :", choix: ["Un coût variable faible", "Un coût fixe très élevé", "Une recette", "Un coût nul"], bonne: 1, explication: "L'utilisation (inférence) a un coût variable par requête." },
      { q: "80 vraies fraudes détectées sur 150 alertes : la précision est d'environ :", choix: ["80 %", "53,3 %", "99,1 %", "15 %"], bonne: 1, explication: "80 / 150." },
      { q: "80 fraudes détectées sur 100 fraudes réelles : le rappel est de :", choix: ["53,3 %", "80 %", "100 %", "8 %"], bonne: 1, explication: "80 / 100." },
      { q: "L'exactitude est un indicateur trompeur quand :", choix: ["L'événement prédit est rare", "Les données sont nombreuses", "Le modèle est simple", "Le seuil est élevé"], bonne: 0, explication: "Un modèle sans alerte aurait une exactitude élevée." },
      { q: "Un biais algorithmique provient le plus souvent :", choix: ["De la vitesse de calcul", "De données d'entraînement qui reflètent des discriminations passées", "Du prix de l'électricité", "Du nombre d'utilisateurs"], bonne: 1, explication: "Le modèle reproduit les régularités des données." },
    ],
  },

  5: {
    titre: "IA, productivité et emploi",
    description: "Automatisation et augmentation, approche par les tâches, polarisation, effets de déplacement, de productivité et de réintégration, offshoring marocain.",
    resume: md`
## L'essentiel — IA, productivité et emploi

- Crainte ancienne (luddites, Keynes 1930) ; **destruction créatrice** (Schumpeter, 1942) : l'emploi total a crû, sa composition a changé.
- **Automatisation** (remplacer une tâche) ou **augmentation** (rendre le travailleur plus productif) : un choix d'organisation autant que de technique.
- **Approche par les tâches** (Autor, Levy, Murnane, 2003) : tâches routinières (automatisées) et non routinières, cognitives ou manuelles.
- **Polarisation** : baisse des emplois intermédiaires routiniers, hausse des emplois très qualifiés et des emplois manuels non routiniers.
- L'IA atteint des tâches **cognitives non routinières** (rédaction, code, relation client) : les emplois qualifiés de bureau deviennent exposés.
- **Acemoglu et Restrepo** : effet de **déplacement**, effet de **productivité**, effet de **réintégration** (nouvelles tâches) ; l'effet net en dépend.
- Estimations : Frey et Osborne (2013) environ 47 % des emplois américains à risque (par métier) ; OCDE 2016 environ 9 % (par tâche).
- Productivité : environ + 14 % dans un centre d'assistance, surtout pour les débutants (Brynjolfsson, Li, Raymond, 2023) ; gains macroéconomiques débattus (moins de 1 % sur dix ans selon Acemoglu, 2024).
- Maroc : offshoring (environ 148 500 emplois et 26,22 milliards de DH d'exportations fin 2024) exposé à l'IA générative ; enjeu de montée en gamme et de **formation**.
`,
    exercices: md`
### Exercice 2 — Classer des tâches

Classez chaque tâche dans l'une des quatre catégories d'Autor, Levy et Murnane, et indiquez si l'IA actuelle peut l'automatiser ou l'augmenter :

1. Répondre aux questions fréquentes des clients d'un opérateur télécom.
2. Réparer une installation électrique chez un particulier.
3. Concevoir la stratégie logistique d'un nouvel entrepôt.
4. Contrôler la conformité de milliers de factures.
5. Aider une personne âgée dans sa vie quotidienne.

<details><summary>Voir le corrigé</summary>

1. **Cognitive**, autrefois non routinière (langage naturel) : l'IA générative peut l'**automatiser** pour les demandes simples et **augmenter** l'agent pour les cas complexes.
2. **Manuelle non routinière** : peu exposée (environnement variable, dextérité).
3. **Abstraite non routinière** : l'IA peut l'**augmenter** (simulations, prévisions de flux), la décision reste humaine.
4. **Cognitive routinière** : fortement **automatisable**.
5. **Manuelle non routinière** à forte dimension relationnelle : très peu exposée.

</details>

### Exercice 3 — Question de synthèse

**Sujet** : « L'intelligence artificielle va-t-elle provoquer un chômage de masse ? »

<details><summary>Voir le corrigé</summary>

**Introduction** : rappeler la crainte du chômage technologique et la spécificité de l'IA (tâches cognitives) ; problématique : l'IA détruira-t-elle plus d'emplois qu'elle n'en créera ?

**I. Des raisons de s'inquiéter**
- A. L'IA atteint des tâches cognitives non routinières, donc des emplois qualifiés jusque-là protégés.
- B. L'effet de déplacement peut être rapide, alors que la reconversion est lente.
- C. Des secteurs entiers sont exposés, comme l'offshoring de relation client au Maroc.

**II. Des forces compensatrices**
- A. Les métiers combinent des tâches exposées et non exposées : l'automatisation complète est rare (estimations par tâche).
- B. Effet de productivité : baisse des coûts, hausse de la demande ; effet de réintégration : nouveaux métiers.
- C. L'histoire montre que l'emploi s'est recomposé à chaque révolution technologique.

**III. Les conditions d'une transition réussie**
- A. Formation initiale et continue, reconversions.
- B. Orientation de l'innovation vers l'augmentation plutôt que l'automatisation pure.
- C. Protection sociale et partage des gains de productivité.

**Conclusion** : le risque principal n'est pas la disparition du travail mais sa transformation rapide et inégale ; les politiques publiques en déterminent l'issue.

</details>
`,
    qcm: [
      { q: "La destruction créatrice est une notion de :", choix: ["Keynes", "Schumpeter", "Ricardo", "Solow"], bonne: 1, explication: "Capitalisme, socialisme et démocratie, 1942." },
      { q: "L'augmentation du travail par l'IA signifie :", choix: ["Remplacer le travailleur", "Rendre le travailleur plus productif sans le remplacer", "Augmenter les horaires", "Augmenter les salaires par la loi"], bonne: 1, explication: "Par opposition à l'automatisation." },
      { q: "Selon Autor, Levy et Murnane, l'informatique classique automatise surtout les tâches :", choix: ["Non routinières abstraites", "Routinières", "Manuelles non routinières", "Créatives"], bonne: 1, explication: "Celles qui peuvent être décrites par des règles explicites." },
      { q: "La polarisation de l'emploi désigne :", choix: ["La hausse de tous les emplois qualifiés", "La baisse des emplois intermédiaires et la hausse des emplois aux deux extrémités", "La concentration des emplois dans les villes", "La hausse du chômage des jeunes"], bonne: 1, explication: "Observée depuis les années 1980." },
      { q: "Ce que l'IA générative change par rapport à l'informatique classique :", choix: ["Elle ne touche que les tâches manuelles", "Elle atteint des tâches cognitives non routinières", "Elle n'a aucun effet sur l'emploi", "Elle ne fonctionne qu'avec des règles"], bonne: 1, explication: "Rédaction, traduction, programmation, relation client." },
      { q: "Chez Acemoglu et Restrepo, l'effet de réintégration correspond :", choix: ["Au remplacement du travail par la machine", "À la création de nouvelles tâches pour le travail humain", "À la baisse des prix", "À la délocalisation"], bonne: 1, explication: "Il compense l'effet de déplacement." },
      { q: "L'estimation de Frey et Osborne (2013) portait sur environ :", choix: ["9 % des emplois", "47 % des emplois américains", "90 % des emplois", "1 % des emplois"], bonne: 1, explication: "Raisonnement par métier ; l'approche par tâche donne moins." },
      { q: "Dans l'étude sur un centre d'assistance (2023), les gains de productivité de l'IA sont les plus forts pour :", choix: ["Les agents les plus expérimentés", "Les agents débutants", "Les managers", "Aucun agent"], bonne: 1, explication: "Environ + 14 % en moyenne, davantage pour les novices." },
      { q: "500 agents à 40 appels par jour gagnent 14 % de productivité. À volume constant, il faut environ :", choix: ["500 agents", "439 agents", "570 agents", "350 agents"], bonne: 1, explication: "20 000 / 45,6 ≈ 439." },
      { q: "L'offshoring marocain est particulièrement exposé à l'IA générative car il comprend beaucoup :", choix: ["D'activités minières", "De relation client et de traitement de processus", "D'agriculture", "De construction"], bonne: 1, explication: "Centres d'appels, back-office, comptabilité." },
    ],
  },

  6: {
    titre: "Concurrence, régulation et fiscalité du numérique",
    description: "Abus de position dominante des plateformes, DMA et DSA, règlement européen sur l'IA, TVA sur les services numériques au Maroc, impôt minimum mondial de 15 %.",
    resume: md`
## L'essentiel — Concurrence, régulation et fiscalité du numérique

- Raisons de réguler : concentration (coûts, effets de réseau, données), vie privée, sécurité, droits fondamentaux.
- Pratiques anticoncurrentielles : **autopréférence**, ventes liées, clauses de parité, **acquisitions prédatrices**, collusion algorithmique.
- Affaires Google (UE) : comparateur de prix, 2,42 milliards d'euros (2017, confirmée en 2024) ; Android, 4,34 milliards (2018, ramenés à 4,125 en 2022) ; limites du contrôle a posteriori.
- Maroc : **Conseil de la concurrence** (article 166 de la Constitution), lois 104-12 et 20-13.
- **DMA** (2022) : obligations ex ante des **contrôleurs d'accès** (7,5 milliards d'euros de CA ou 75 milliards de capitalisation, 45 millions d'utilisateurs, 10 000 entreprises) ; amendes jusqu'à 10 % du CA mondial. **DSA** : contenus et transparence.
- **Règlement européen sur l'IA** (en vigueur le 1er août 2024) : risque inacceptable (interdit), élevé (obligations strictes), limité (transparence), minimal ; règles pour les modèles à usage général ; portée extraterritoriale.
- Défi fiscal : imposition fondée sur l'**établissement stable** ; décalage entre création de valeur et lieu d'imposition.
- Réponses : **TVA sur les services numériques** (Maroc : loi de finances 2024, plateforme DGI opérationnelle depuis juin 2026), taxes nationales (France 3 %), OCDE : BEPS, **pilier 1** (incertain), **pilier 2** (impôt minimum de 15 % pour les groupes de plus de 750 millions d'euros).
- Cadre marocain : lois 09-08, 05-20, 43-20, 104-12 et 20-13, 24-96 (ANRT), 61-16 (ADD).
`,
    exercices: md`
### Exercice 2 — Le règlement européen sur l'IA

Classez chaque usage selon le niveau de risque du règlement européen sur l'IA :

1. Un système qui attribue aux citoyens une note de comportement social conditionnant l'accès à des services publics.
2. Un logiciel de notation du crédit utilisé par une banque.
3. Un générateur d'images qui crée des visages réalistes de personnes inexistantes.
4. Un filtre anti-spam de messagerie.
5. Un système d'IA qui évalue les examens d'admission dans une école.

<details><summary>Voir le corrigé</summary>

1. **Inacceptable** : la notation sociale est interdite.
2. **Élevé** : octroi de crédit, accès à un service essentiel.
3. **Limité** : obligation de transparence (signaler que l'image est générée par IA).
4. **Minimal** : aucune obligation spécifique.
5. **Élevé** : éducation et accès à la formation.

</details>

### Exercice 3 — Question de synthèse

**Sujet** : « Faut-il réguler les géants du numérique à l'avance plutôt que sanctionner leurs abus après coup ? »

<details><summary>Voir le corrigé</summary>

**Introduction** : présenter les deux approches : droit de la concurrence a posteriori (sanction des abus) et régulation ex ante (obligations fixées à l'avance, DMA) ; problématique : la régulation ex ante est-elle plus adaptée aux marchés numériques ?

**I. Les limites du contrôle a posteriori**
- A. Procédures longues (affaires Google : plus d'une décennie entre l'ouverture de l'enquête et l'arrêt définitif).
- B. Marchés qui basculent vite : la sanction arrive quand la domination est acquise.
- C. Difficulté de qualifier les pratiques dans des marchés bifaces (prix nuls).

**II. Les avantages et les risques de la régulation ex ante**
- A. Avantages : rapidité, sécurité juridique, obligations claires (interopérabilité, portabilité, interdiction de l'autopréférence).
- B. Risques : rigidité face à l'innovation, coûts de conformité, critères de taille arbitraires, risque de freiner des services utiles.

**III. Une complémentarité nécessaire**
- A. Le droit de la concurrence reste indispensable pour les autres acteurs et les pratiques nouvelles.
- B. Pour un pays comme le Maroc, l'enjeu est aussi de coopérer avec les régulateurs étrangers, les règles européennes s'appliquant de fait aux entreprises qui servent l'Europe.

**Conclusion** : la régulation ex ante complète le droit de la concurrence pour les plateformes systémiques ; son efficacité dépend de la capacité des autorités à l'appliquer.

</details>
`,
    qcm: [
      { q: "L'autopréférence consiste pour une plateforme à :", choix: ["Baisser ses prix", "Favoriser ses propres services par rapport à ceux des concurrents", "Refuser de nouveaux utilisateurs", "Publier ses algorithmes"], bonne: 1, explication: "Pratique visée par le DMA et le droit de la concurrence." },
      { q: "Le droit de la concurrence sanctionne :", choix: ["La position dominante en elle-même", "L'abus de position dominante", "Toute entreprise de grande taille", "Les prix nuls"], bonne: 1, explication: "La domination acquise par les mérites n'est pas illégale." },
      { q: "Le Digital Markets Act impose des obligations :", choix: ["À toutes les entreprises", "Aux contrôleurs d'accès désignés selon des critères de taille", "Aux seuls opérateurs télécoms", "Aux consommateurs"], bonne: 1, explication: "Régulation ex ante des grandes plateformes." },
      { q: "Le règlement européen sur l'IA est entré en vigueur le :", choix: ["25 mai 2018", "1er août 2024", "1er janvier 2022", "11 juin 2026"], bonne: 1, explication: "Il s'applique progressivement jusqu'en 2027." },
      { q: "La notation sociale des citoyens relève, selon le règlement européen sur l'IA, du risque :", choix: ["Minimal", "Limité", "Élevé", "Inacceptable"], bonne: 3, explication: "Elle est interdite." },
      { q: "Un agent conversationnel est soumis principalement à une obligation de :", choix: ["Interdiction", "Transparence", "Autorisation préalable", "Licence"], bonne: 1, explication: "Informer l'utilisateur qu'il échange avec une IA." },
      { q: "L'impôt minimum mondial du pilier 2 est fixé à :", choix: ["5 %", "10 %", "15 %", "25 %"], bonne: 2, explication: "Pour les groupes dont le CA dépasse 750 millions d'euros." },
      { q: "Au Maroc, la TVA sur les services numériques des prestataires non résidents a été introduite par :", choix: ["La loi 09-08", "La loi de finances 2024", "Le Code des douanes", "La loi 05-20"], bonne: 1, explication: "Plateforme électronique de la DGI opérationnelle depuis juin 2026." },
      { q: "Les règles fiscales traditionnelles conditionnent l'imposition des bénéfices à :", choix: ["La nationalité des clients", "L'existence d'un établissement stable", "Le nombre d'utilisateurs", "Le montant de la publicité"], bonne: 1, explication: "D'où la difficulté d'imposer les plateformes sans présence physique." },
      { q: "L'autorité marocaine qui sanctionne les abus de position dominante est :", choix: ["La CNDP", "Le Conseil de la concurrence", "L'ANRT", "Bank Al-Maghrib"], bonne: 1, explication: "Autorité constitutionnelle indépendante (article 166)." },
    ],
  },

  7: {
    titre: "La transformation numérique du Maroc",
    description: "Stratégies numériques du Maroc jusqu'à Digital Morocco 2030, objectifs chiffrés, offshoring, administration et paiements numériques, IA au Maroc et défis.",
    resume: md`
## L'essentiel — La transformation numérique du Maroc

- Stratégies : **e-Maroc 2010**, **Maroc Numeric 2013** (2009), **Maroc Digital 2020** (2016, ADD par la loi 61-16), **Digital Morocco 2030** (lancée le **25 septembre 2024**).
- Pilotage : ministère de la Transition numérique et de la Réforme de l'administration, ADD.
- Digital Morocco 2030 : deux axes, **services publics numériques** (objectif : top 50 mondial de l'EGDI, premier en Afrique) et **économie numérique** (offshoring, start-up, solutions locales, talents).
- Objectifs 2030 : **240 000 emplois directs**, **100 milliards de DH** de contribution au PIB, exportations numériques de 17,9 (2023) à **40 milliards de DH**, 50 000 reconversions ; 11 milliards de DH pour 2024-2026 ; appui de la Banque mondiale (250 millions de dollars).
- **Offshoring** : CRM, BPO, ITO, KPO ; parcs dédiés (Casanearshore, Technopolis…) ; environ 148 500 emplois et 26,22 milliards de DH d'exportations fin 2024 ; objectif d'environ 270 000 emplois et 40 milliards de DH en 2030 ; montée en gamme face à l'IA.
- Administration en ligne (DGI, CNSS, BADR, marchés publics, identité numérique) ; paiement mobile et **inclusion financière**.
- IA au Maroc : banque, agriculture, logistique, énergie ; enjeux des langues (arabe, darija, amazighe), des données, de l'énergie et de l'emploi.
- Défis : fracture numérique, fuite des compétences, financement des start-up, numérisation des PME, cybersécurité.
`,
    exercices: md`
### Exercice 2 — Diagnostic stratégique

À partir du cours, construisez un tableau atouts, faiblesses, opportunités, menaces (AFOM) du Maroc dans l'économie numérique.

<details><summary>Voir le corrigé</summary>

| Atouts | Faiblesses |
|---|---|
| Population jeune et connectée ; compétences linguistiques ; proximité de l'Europe ; offshoring établi ; énergies renouvelables | Fracture numérique (rural, genre) ; numérisation lente des PME ; poids de l'informel et des paiements en espèces ; financement limité des start-up |

| Opportunités | Menaces |
|---|---|
| Nearshoring des entreprises européennes ; montée en gamme vers l'ITO et le KPO ; centres de données alimentés en énergie renouvelable ; solutions d'IA en arabe, darija et amazighe ; marché africain | Automatisation de la relation client par l'IA générative ; fuite des compétences vers l'Europe ; cyberattaques ; dépendance aux grandes plateformes étrangères ; concurrence d'autres destinations d'offshoring |

**Conclusion** : la stratégie doit s'appuyer sur les atouts (talents, proximité, énergie) pour saisir les opportunités de montée en gamme, tout en corrigeant les faiblesses (formation, inclusion, PME).

</details>

### Exercice 3 — Question de synthèse

**Sujet** : « Le numérique peut-il être un moteur de croissance et d'emploi pour le Maroc ? »

<details><summary>Voir le corrigé</summary>

**Introduction** : rappeler le poids croissant du numérique et la stratégie Digital Morocco 2030 (240 000 emplois, 100 milliards de DH) ; problématique : le numérique peut-il porter une croissance forte et inclusive ?

**I. Un potentiel réel**
- A. Un secteur exportateur dynamique : offshoring, services informatiques, devises.
- B. Des gains de productivité dans toute l'économie : administration, PME, agriculture, logistique.
- C. Un levier d'inclusion : paiement mobile, services publics en ligne, accès à l'information.

**II. Des limites et des risques**
- A. Des emplois exposés à l'IA générative (relation client, back-office).
- B. Une diffusion inégale : fracture numérique, informel, faible numérisation des PME.
- C. Une dépendance aux technologies et aux plateformes étrangères, et une fuite des talents.

**III. Les conditions de réussite**
- A. Formation et rétention des compétences ; montée en gamme.
- B. Infrastructures, cadre de confiance (données, cybersécurité), financement de l'innovation.
- C. Suivi transparent des objectifs.

**Conclusion** : le numérique peut être un moteur à condition de miser sur la montée en gamme et l'inclusion, plutôt que sur les seuls coûts salariaux.

</details>
`,
    qcm: [
      { q: "La stratégie Digital Morocco 2030 a été lancée le :", choix: ["25 septembre 2024", "1er janvier 2020", "9 octobre 2009", "15 avril 1994"], bonne: 0, explication: "Elle succède à Maroc Digital 2020." },
      { q: "L'Agence de développement du digital a été créée par la loi :", choix: ["09-08", "61-16", "05-20", "104-12"], bonne: 1, explication: "Dans le cadre de Maroc Digital 2020." },
      { q: "Digital Morocco 2030 vise la création d'environ :", choix: ["24 000 emplois directs", "240 000 emplois directs", "2,4 millions d'emplois", "Aucun emploi"], bonne: 1, explication: "Avec 100 milliards de DH de contribution au PIB." },
      { q: "L'objectif d'exportations de services numériques en 2030 est de :", choix: ["17,9 milliards de DH", "40 milliards de DH", "100 milliards de DH", "250 milliards de DH"], bonne: 1, explication: "Contre 17,9 milliards de DH en 2023." },
      { q: "L'EGDI est :", choix: ["Un indice de développement de l'administration en ligne des Nations unies", "Un impôt numérique", "Une agence marocaine", "Un indice boursier"], bonne: 0, explication: "Le Maroc vise le top 50 mondial." },
      { q: "Le KPO désigne l'externalisation :", choix: ["De la relation client", "Des processus de connaissance (ingénierie, analyse de données)", "Des processus administratifs", "Du transport"], bonne: 1, explication: "C'est le segment le plus qualifié de l'offshoring." },
      { q: "Fin 2024, l'offshoring marocain employait environ :", choix: ["14 850 personnes", "148 500 personnes", "1,5 million de personnes", "27 000 personnes"], bonne: 1, explication: "Pour 26,22 milliards de DH d'exportations." },
      { q: "Le paiement mobile est surtout un levier :", choix: ["D'inclusion financière", "De hausse des droits de douane", "D'exportation de phosphates", "De politique monétaire"], bonne: 0, explication: "Il permet aux non-bancarisés d'effectuer des paiements électroniques." },
      { q: "Un défi spécifique de l'IA au Maroc concerne :", choix: ["L'absence totale de téléphones", "La prise en charge de l'arabe, de la darija et de l'amazighe par les modèles", "L'interdiction de l'IA", "Le manque de soleil"], bonne: 1, explication: "Les modèles sont surtout entraînés sur l'anglais et le français." },
      { q: "La fuite des compétences désigne :", choix: ["La perte de données", "Le départ d'ingénieurs et de développeurs vers l'étranger", "La baisse des exportations", "La fermeture des écoles"], bonne: 1, explication: "C'est l'un des principaux défis de la stratégie." },
    ],
  },
};

export default chapitres;
