// Marketing (S4) — compléments par chapitre.
const md = String.raw;

export default {
  1: {
    titre: "Introduction au marketing",
    resume: md`
## L'essentiel — Introduction au marketing

- Le **marketing** consiste à comprendre les besoins des clients et à y répondre de façon **rentable** en créant, communiquant et délivrant de la valeur.
- Optiques successives : **production** (produire plus), **produit** (le meilleur produit se vend seul), **vente** (forcer la vente), **marketing** (produire ce qui se vend), **marketing sociétal** (bien-être du client et de la société).
- Démarche : étude de marché → **segmentation, ciblage, positionnement** → **marketing mix (4P)** → contrôle.
- **Marketing stratégique** (où aller ? moyen/long terme) et **marketing opérationnel** (comment y aller ? les 4P, court terme).
- Piège : la **myopie marketing**, qui fait oublier le besoin réel du client.
`,
    exercices: md`
### Exercice 2 — Optiques et niveaux du marketing

1. Rattachez chaque déclaration à une optique : a) « Nos commerciaux doivent écouler tout le stock avant la fin du mois. » b) « Nous interrogeons nos clients avant de concevoir chaque nouveau produit. » c) « Il faut produire en grande série pour baisser les coûts. » d) « Nos emballages seront recyclables, même si cela coûte plus cher. »
2. Classez en marketing stratégique (S) ou opérationnel (O) : a) choisir de cibler les étudiants ; b) fixer le prix de lancement ; c) définir le positionnement « qualité à prix juste » ; d) organiser une promotion en magasin.

<details><summary>Voir le corrigé</summary>

**1)** a) optique **vente** ; b) optique **marketing** ; c) optique **production** ; d) optique **marketing sociétal**.

**2)** a) **S** ; b) **O** ; c) **S** ; d) **O**.

</details>
`,
    qcm: [
      { q: "L'optique marketing consiste à :", choix: ["Vendre ce qui est produit", "Produire ce qui se vend", "Produire au moindre coût", "Améliorer sans cesse la technique"], bonne: 1, explication: "On part des besoins du client." },
      { q: "Le marketing sociétal ajoute la prise en compte :", choix: ["Des coûts de production", "Du bien-être du consommateur et de la société", "Des seuls actionnaires", "Des concurrents"], bonne: 1, explication: "Il rejoint la logique de RSE." },
      { q: "Le marketing opérationnel porte sur :", choix: ["Le choix des cibles", "La mise en œuvre des 4P", "L'étude de l'environnement", "La stratégie à 10 ans"], bonne: 1, explication: "Produit, prix, distribution, communication." },
      { q: "La « myopie marketing » est le fait de :", choix: ["Trop étudier le marché", "Se focaliser sur le produit en oubliant le besoin du client", "Baisser les prix", "Communiquer trop"], bonne: 1, explication: "C'est la limite de l'optique produit." },
      { q: "Quelle étape vient juste après l'étude de marché ?", choix: ["Le contrôle", "La segmentation, le ciblage et le positionnement", "La fixation du prix", "La distribution"], bonne: 1, explication: "On choisit ses cibles avant de construire le mix." },
    ],
  },

  2: {
    titre: "L'étude de marché et le comportement du consommateur",
    resume: md`
## L'essentiel — Étude de marché et consommateur

- Études **documentaires** (données existantes), **qualitatives** (entretiens, focus groups : le « pourquoi »), **quantitatives** (sondage sur échantillon représentatif : le « combien »), **panels** (même échantillon suivi dans le temps).
- Processus d'achat : **besoin → information → évaluation des alternatives → décision → évaluation post-achat**.
- Facteurs d'influence : **culturels**, **sociaux**, **personnels**, **psychologiques**.
- Rôles d'achat : **initiateur, influenceur, décideur, acheteur, utilisateur**.
- Part de marché $= \dfrac{\text{ventes de l'entreprise}}{\text{ventes du marché}}$ ; part de marché relative $= \dfrac{\text{ventes de l'entreprise}}{\text{ventes du premier concurrent}}$.
`,
    exercices: md`
### Exercice 2 — Choisir l'étude et mesurer le marché

1. Quel type d'étude choisir ? a) Comprendre pourquoi les jeunes délaissent une marque ; b) mesurer la part des foyers qui achètent de l'huile d'olive ; c) suivre chaque mois les achats de 2 000 foyers ; d) connaître la taille du marché à partir des statistiques publiées.
2. Le marché marocain d'un produit représente 2 000 000 d'unités. L'entreprise en vend 300 000 et le leader 500 000. Calculez la part de marché de l'entreprise et sa part de marché relative.

<details><summary>Voir le corrigé</summary>

**1)** a) **qualitative** ; b) **quantitative** ; c) **panel** ; d) **documentaire**.

**2)** Part de marché $= 300\,000 / 2\,000\,000 = 15\%$ ; part de marché relative $= 300\,000 / 500\,000 = 0{,}6$ : l'entreprise vend 60 % de ce que vend le leader.

</details>
`,
    qcm: [
      { q: "Une étude qualitative cherche surtout à :", choix: ["Mesurer des pourcentages", "Comprendre les motivations", "Suivre les ventes", "Calculer le CA"], bonne: 1, explication: "Elle répond au « pourquoi »." },
      { q: "Un panel est :", choix: ["Un échantillon interrogé une seule fois", "Un échantillon suivi dans le temps", "Une étude documentaire", "Un focus group"], bonne: 1, explication: "On observe l'évolution des comportements." },
      { q: "La première étape du processus d'achat est :", choix: ["La décision", "La reconnaissance du besoin", "L'évaluation post-achat", "La recherche d'information"], bonne: 1, explication: "Tout part d'un besoin ressenti." },
      { q: "Les groupes de référence sont des facteurs :", choix: ["Culturels", "Sociaux", "Personnels", "Psychologiques"], bonne: 1, explication: "Famille, amis, groupes d'appartenance." },
      { q: "Ventes de l'entreprise 40 000, ventes du leader 80 000 : la part de marché relative vaut :", choix: ["2", "0,5", "50 000", "40 %"], bonne: 1, explication: "40 000 / 80 000 = 0,5." },
    ],
  },

  3: {
    titre: "Segmentation, ciblage et positionnement",
    resume: md`
## L'essentiel — Segmentation, ciblage, positionnement

- **Segmenter**, c'est découper le marché en groupes **homogènes** : critères **géographiques**, **démographiques**, **psychographiques**, **comportementaux**.
- Un bon segment est **mesurable**, **accessible**, **suffisamment grand** et **distinct** des autres.
- **Ciblage** : marketing **indifférencié**, **différencié**, **concentré** (niche), **personnalisé** (one-to-one).
- **Positionnement** : place occupée dans l'esprit du consommateur face aux concurrents = **identification + différenciation**.
- Un positionnement doit être **clair, crédible, attractif, différenciant** ; on le visualise sur une **carte perceptuelle**.
`,
    exercices: md`
### Exercice 2 — Lancer un yaourt à boire

Une laiterie marocaine veut lancer un yaourt à boire. Elle hésite entre trois segments : les enfants de 6 à 12 ans, les étudiants, les sportifs.

1. Indiquez pour chaque segment le critère de segmentation utilisé.
2. La laiterie propose une recette et un emballage différents pour chaque segment. Quelle stratégie de ciblage adopte-t-elle ? Quel est son inconvénient ?
3. Rédigez en une phrase un positionnement pour le segment des sportifs.

<details><summary>Voir le corrigé</summary>

**1)** Enfants : **démographique** (âge) ; étudiants : **démographique** (âge, situation) ; sportifs : **psychographique / comportemental** (style de vie, avantage recherché).

**2)** Marketing **différencié** : il permet de mieux répondre à chaque segment mais **coûte plus cher** (production, communication, gestion de plusieurs offres).

**3)** Exemple : « Le yaourt à boire riche en protéines qui aide les sportifs à récupérer après l'effort. »

</details>
`,
    qcm: [
      { q: "Segmenter un marché selon le style de vie relève du critère :", choix: ["Géographique", "Démographique", "Psychographique", "Comportemental"], bonne: 2, explication: "Valeurs, personnalité, style de vie." },
      { q: "Proposer une seule offre à tout le marché, c'est le marketing :", choix: ["Indifférencié", "Différencié", "Concentré", "One-to-one"], bonne: 0, explication: "Marketing de masse." },
      { q: "Le marketing concentré consiste à :", choix: ["Viser tous les segments", "Viser un seul segment", "Personnaliser chaque offre", "Baisser les prix"], bonne: 1, explication: "C'est une stratégie de niche." },
      { q: "Le positionnement est :", choix: ["Le prix du produit", "La place du produit dans l'esprit du consommateur", "Le lieu de vente", "La part de marché"], bonne: 1, explication: "Il se construit par rapport aux concurrents." },
      { q: "Une carte perceptuelle sert à :", choix: ["Calculer le CA", "Visualiser le positionnement des marques", "Tracer le circuit de distribution", "Planifier la production"], bonne: 1, explication: "Souvent sur deux axes, par exemple prix et qualité." },
    ],
  },

  4: {
    titre: "La politique de produit",
    resume: md`
## L'essentiel — La politique de produit

- Niveaux du produit : **central** (besoin satisfait), **générique**, **attendu**, **global** (services : garantie, SAV, livraison), **potentiel**.
- **Cycle de vie** : **lancement** (faire connaître), **croissance** (gagner des parts de marché), **maturité** (défendre, fidéliser), **déclin** (réduire les coûts, relancer ou retirer).
- **Gamme** : **largeur** (nombre de lignes), **profondeur** (variantes d'une ligne), **longueur** (nombre total de produits).
- La **marque** crée une valeur perçue (notoriété, image, fidélité) : c'est le **capital-marque**.
`,
    exercices: md`
### Exercice 2 — Gamme et cycle de vie

1. Une marque propose trois lignes : yaourts (8 variantes), fromages (5 variantes), boissons lactées (4 variantes). Calculez la largeur, la profondeur de chaque ligne et la longueur de la gamme.
2. Ventes d'un produit (milliers d'unités) : année 1 : 10 ; année 2 : 40 ; année 3 : 110 ; année 4 : 150 ; année 5 : 155 ; année 6 : 152. Dans quelle phase se trouve le produit aux années 1, 3 et 6 ? Quelle action marketing prioritaire à l'année 6 ?

<details><summary>Voir le corrigé</summary>

**1)** Largeur : **3** lignes ; profondeur : 8, 5 et 4 ; longueur : $8 + 5 + 4 = 17$ produits.

**2)** Année 1 : **lancement** ; année 3 : **croissance** ; année 6 : **maturité** (ventes stables au plus haut). Priorité : **défendre la part de marché** et fidéliser (nouvelles versions, promotions, nouvelles utilisations) pour retarder le déclin.

</details>
`,
    qcm: [
      { q: "La garantie et le service après-vente font partie du produit :", choix: ["Central", "Générique", "Global (augmenté)", "Potentiel"], bonne: 2, explication: "Ce sont des services ajoutés au produit de base." },
      { q: "En phase de lancement, l'objectif principal est de :", choix: ["Faire connaître le produit", "Retirer le produit", "Réduire les coûts", "Défendre sa part de marché"], bonne: 0, explication: "Les ventes démarrent lentement." },
      { q: "La largeur d'une gamme est :", choix: ["Le nombre de variantes d'une ligne", "Le nombre de lignes de produits", "Le nombre total de produits", "Le prix moyen"], bonne: 1, explication: "La profondeur concerne les variantes d'une ligne." },
      { q: "En phase de maturité, les ventes sont :", choix: ["Faibles et lentes", "En forte croissance", "Stables à un niveau élevé", "En chute"], bonne: 2, explication: "Le marché est saturé." },
      { q: "Le capital-marque correspond :", choix: ["Au capital social", "À la valeur ajoutée perçue grâce à la marque", "Au prix de revient", "Au coût de la publicité"], bonne: 1, explication: "Notoriété, image, fidélité." },
    ],
  },

  5: {
    titre: "La politique de prix",
    resume: md`
## L'essentiel — La politique de prix

- Trois approches : par les **coûts** (coût de revient + marge), par la **demande** (valeur perçue, prix psychologique), par la **concurrence** (alignement, prix supérieur ou inférieur).
- **Prix psychologique** (d'acceptabilité) : obtenu par enquête ; c'est le prix qui maximise la part de clients qui ne le jugent ni trop cher ni trop bon marché.
- Marge sur coût : $PV = \text{coût} \times (1 + \text{taux de marge})$ ; taux de marque sur prix de vente : $PV = \dfrac{\text{coût}}{1 - \text{taux de marque}}$.
- Produit nouveau : **écrémage** (prix élevé, clients peu sensibles au prix, image haut de gamme) ou **pénétration** (prix bas, conquête rapide du marché).
`,
    exercices: md`
### Exercice 2 — Prix psychologique et prix par les coûts

**Partie A** — Une enquête auprès de 500 personnes donne, pour chaque prix, le pourcentage cumulé de personnes qui le jugent trop cher et le pourcentage cumulé de celles qui le jugent trop bon marché (qualité douteuse).

| Prix (DH) | 20 | 30 | 40 | 50 | 60 |
|---|--:|--:|--:|--:|--:|
| Trop cher | 0 % | 5 % | 15 % | 40 % | 70 % |
| Trop bon marché | 45 % | 20 % | 8 % | 3 % | 0 % |

Déterminez le prix psychologique.

**Partie B** — Le coût de revient unitaire est de 80 DH. Calculez le prix de vente HT avec : a) un taux de marge de 25 % sur le coût ; b) un taux de marque de 20 % sur le prix de vente.

<details><summary>Voir le corrigé</summary>

**Partie A** — Acceptabilité $= 100\% - \text{trop cher} - \text{trop bon marché}$ :

| Prix | 20 | 30 | 40 | 50 | 60 |
|---|--:|--:|--:|--:|--:|
| Acceptent | 55 % | 75 % | **77 %** | 57 % | 30 % |

Le prix psychologique est de **40 DH**.

**Partie B** — a) $80 \times 1{,}25 = 100$ DH ; b) $\dfrac{80}{1 - 0{,}20} = 100$ DH.

</details>
`,
    qcm: [
      { q: "Fixer un prix élevé au lancement, c'est une stratégie :", choix: ["De pénétration", "D'écrémage", "D'alignement", "De prix psychologique"], bonne: 1, explication: "On vise d'abord les clients peu sensibles au prix." },
      { q: "La stratégie de pénétration vise à :", choix: ["Gagner vite des parts de marché", "Créer une image de luxe", "Rentabiliser en quelques semaines", "Limiter les ventes"], bonne: 0, explication: "Un prix bas attire rapidement les clients." },
      { q: "Coût 60 DH, marge de 50 % sur le coût : le prix est de :", choix: ["90 DH", "120 DH", "110 DH", "30 DH"], bonne: 0, explication: "60 × 1,5 = 90 DH." },
      { q: "Le prix psychologique est déterminé par :", choix: ["Le coût de revient", "Une enquête auprès des consommateurs", "Le prix du leader", "L'État"], bonne: 1, explication: "C'est une approche par la demande." },
      { q: "Un prix trop bas peut faire fuir des clients parce que :", choix: ["Ils ne peuvent pas payer", "Ils doutent de la qualité", "La TVA augmente", "Le produit est rare"], bonne: 1, explication: "Le prix est aussi un signal de qualité." },
    ],
  },

  6: {
    titre: "La politique de distribution",
    resume: md`
## L'essentiel — La politique de distribution

- Fonctions : **transport**, **stockage**, **fractionnement**, **assortiment**, financement, prise de risque, information.
- Circuits : **direct** (producteur → consommateur), **court** (un intermédiaire, le détaillant), **long** (grossiste + détaillant).
- Stratégies : **intensive** (maximum de points de vente, grande consommation), **sélective** (distributeurs choisis selon des critères, image), **exclusive** (un distributeur par zone).
- Chaque intermédiaire ajoute sa marge : prix final $= \text{prix producteur} \times \text{coefficients multiplicateurs successifs}$.
- Le circuit direct se développe avec le **e-commerce**.
`,
    exercices: md`
### Exercice 2 — Circuits et stratégies

1. Choisissez une stratégie de distribution pour : a) une eau minérale ; b) un téléviseur haut de gamme ; c) une marque automobile de luxe ; d) un dentifrice.
2. Un fabricant vend un article 50 DH HT au grossiste, qui applique un coefficient multiplicateur de 1,2 ; le détaillant applique ensuite un coefficient de 1,5. Calculez le prix HT payé par le consommateur. Le fabricant ouvre un site de vente directe au prix de 75 DH HT : quel est l'avantage pour le client et pour le fabricant ?

<details><summary>Voir le corrigé</summary>

**1)** a) **intensive** ; b) **sélective** ; c) **exclusive** ; d) **intensive**.

**2)** Prix grossiste → détaillant : $50 \times 1{,}2 = 60$ DH ; prix consommateur : $60 \times 1{,}5 = 90$ DH HT. En vente directe à 75 DH, le client paie 15 DH de moins et le fabricant encaisse 25 DH de plus par article qu'en passant par le grossiste (hors frais logistiques de la vente en ligne).

</details>
`,
    qcm: [
      { q: "Un circuit court comporte :", choix: ["Aucun intermédiaire", "Un seul intermédiaire", "Au moins deux intermédiaires", "Uniquement des grossistes"], bonne: 1, explication: "En général le détaillant." },
      { q: "La distribution intensive convient surtout :", choix: ["Aux produits de luxe", "Aux produits de grande consommation", "Aux voitures de prestige", "Aux produits sur mesure"], bonne: 1, explication: "Le produit doit être disponible partout." },
      { q: "La distribution exclusive signifie :", choix: ["Un seul distributeur par zone", "Tous les points de vente possibles", "La vente uniquement en ligne", "L'absence de distributeur"], bonne: 0, explication: "Elle protège l'image et le réseau." },
      { q: "Le fractionnement consiste à :", choix: ["Découper les gros lots en petites quantités", "Fixer le prix", "Faire de la publicité", "Produire en série"], bonne: 0, explication: "C'est une fonction clé du grossiste et du détaillant." },
      { q: "Dans un circuit long, le prix final est souvent :", choix: ["Plus faible", "Plus élevé à cause des marges successives", "Identique au prix producteur", "Fixé par l'État"], bonne: 1, explication: "Chaque intermédiaire ajoute sa marge." },
    ],
  },

  7: {
    titre: "La politique de communication",
    resume: md`
## L'essentiel — La politique de communication

- Mix de communication : **publicité** (masse, payante), **promotion des ventes** (incitation à court terme), **relations publiques** (image : sponsoring, mécénat, presse), **vente personnelle**, **marketing direct et digital**.
- **AIDA** : **Attention → Intérêt → Désir → Action**.
- **Push** : on pousse le produit vers les distributeurs ; **pull** : on attire le consommateur, qui réclame le produit.
- Mesure de l'efficacité : **coût pour mille contacts** $CPM = \dfrac{\text{coût}}{\text{nombre de contacts}} \times 1\,000$, notoriété, taux de clic, ventes générées.
`,
    exercices: md`
### Exercice 2 — AIDA et coût de la campagne

1. Associez chaque action à une étape du modèle AIDA : a) une affiche géante et colorée à l'entrée de la ville ; b) une démonstration du produit en magasin ; c) un bon de réduction valable 7 jours ; d) des témoignages de clients satisfaits sur les réseaux sociaux.
2. Une campagne radio coûte 200 000 DH et touche 4 000 000 de contacts ; une campagne sur les réseaux sociaux coûte 90 000 DH pour 1 500 000 contacts. Comparez les coûts pour mille.

<details><summary>Voir le corrigé</summary>

**1)** a) **Attention** ; b) **Intérêt** ; d) **Désir** ; c) **Action**.

**2)** Radio : $200\,000 / 4\,000\,000 \times 1\,000 = 50$ DH ; réseaux sociaux : $90\,000 / 1\,500\,000 \times 1\,000 = 60$ DH. La radio est moins chère par contact, mais les réseaux sociaux permettent un ciblage plus précis : le choix dépend de la cible visée.

</details>
`,
    qcm: [
      { q: "Le sponsoring relève :", choix: ["De la promotion des ventes", "Des relations publiques", "De la vente personnelle", "De la distribution"], bonne: 1, explication: "Il vise à construire une image favorable." },
      { q: "Dans AIDA, le dernier « A » correspond à :", choix: ["Attention", "Achat / action", "Attitude", "Analyse"], bonne: 1, explication: "Pousser le client à agir." },
      { q: "Une stratégie pull s'adresse d'abord :", choix: ["Aux distributeurs", "Au consommateur final", "Aux fournisseurs", "Aux actionnaires"], bonne: 1, explication: "Le consommateur « tire » le produit." },
      { q: "Un coupon de réduction est un outil :", choix: ["De publicité", "De promotion des ventes", "De relations publiques", "De positionnement"], bonne: 1, explication: "Incitation à l'achat à court terme." },
      { q: "Une campagne de 30 000 DH touchant 600 000 contacts a un coût pour mille de :", choix: ["5 DH", "50 DH", "500 DH", "20 DH"], bonne: 1, explication: "30 000 / 600 000 × 1 000 = 50 DH." },
    ],
  },

  8: {
    titre: "Le diagnostic stratégique marketing",
    resume: md`
## L'essentiel — SWOT, BCG, Ansoff

- **SWOT** : forces et faiblesses (**internes**), opportunités et menaces (**externes**).
- **BCG** : taux de croissance du marché × part de marché relative.
  - **Étoile** (croissance forte, PDM forte) : investir.
  - **Vache à lait** (croissance faible, PDM forte) : récolter, financer les autres activités.
  - **Dilemme** (croissance forte, PDM faible) : investir sélectivement ou abandonner.
  - **Poids mort** (croissance faible, PDM faible) : désinvestir.
- **Ansoff** : **pénétration** (produit actuel, marché actuel), **développement de produit**, **développement de marché**, **diversification** (nouveau produit, nouveau marché : la plus risquée).
`,
    exercices: md`
### Exercice 2 — Analyser un portefeuille

Une entreprise a quatre activités (seuils : croissance 10 %, part de marché relative 1) :

| Activité | Croissance du marché | Part de marché relative |
|---|--:|--:|
| A | 15 % | 1,8 |
| B | 3 % | 2,5 |
| C | 12 % | 0,4 |
| D | 2 % | 0,3 |

1. Placez chaque activité dans la matrice BCG et proposez une stratégie.
2. Le portefeuille est-il équilibré ?
3. Classez selon Ansoff : a) vendre les yaourts actuels en Afrique de l'Ouest ; b) lancer un yaourt sans lactose au Maroc ; c) se lancer dans l'eau minérale en Europe ; d) faire des promotions pour vendre plus de yaourts aux clients actuels.

<details><summary>Voir le corrigé</summary>

**1)** A : **étoile** (investir) ; B : **vache à lait** (récolter) ; C : **dilemme** (investir sélectivement ou abandonner) ; D : **poids mort** (désinvestir).

**2)** Oui, plutôt : la vache à lait B peut financer l'étoile A et le dilemme C ; D doit être abandonné.

**3)** a) **développement de marché** ; b) **développement de produit** ; c) **diversification** ; d) **pénétration**.

</details>
`,
    qcm: [
      { q: "Dans la SWOT, les opportunités sont des facteurs :", choix: ["Internes", "Externes", "Financiers uniquement", "Passés"], bonne: 1, explication: "Elles viennent de l'environnement." },
      { q: "Une activité à forte part de marché sur un marché en faible croissance est :", choix: ["Une étoile", "Une vache à lait", "Un dilemme", "Un poids mort"], bonne: 1, explication: "Elle dégage des liquidités." },
      { q: "Les deux axes de la matrice BCG sont :", choix: ["Prix et qualité", "Croissance du marché et part de marché relative", "Forces et faiblesses", "Produits et marchés"], bonne: 1, explication: "Ansoff croise produits et marchés." },
      { q: "Selon Ansoff, la stratégie la plus risquée est :", choix: ["La pénétration", "Le développement de produit", "Le développement de marché", "La diversification"], bonne: 3, explication: "Produit et marché sont tous deux nouveaux." },
      { q: "Pour un « dilemme », la BCG recommande :", choix: ["De récolter", "D'investir sélectivement ou d'abandonner", "De maintenir sans rien changer", "De baisser les prix partout"], bonne: 1, explication: "Il consomme beaucoup de liquidités." },
    ],
  },
};
