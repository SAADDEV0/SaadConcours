// Introduction aux sciences économiques (S1) — compléments par chapitre : description SEO, résumé, exercices 2 et 3, QCM.
const md = String.raw;

const chapitres = {
  1: {
    titre: "La science économique : objet et méthodes",
    description: "Science économique S1 : définitions de Smith et Robbins, micro et macroéconomie, analyse positive et normative, modèles et raisonnement ceteris paribus.",
    resume: md`
## L'essentiel — La science économique : objet et méthodes

- Étymologie : *oikos* + *nomos*, l'administration de la maison ; « économie politique » chez Montchrestien (1615).
- Trois sens : l'économie réelle (l'activité), la science économique (la discipline), l'épargne au sens courant.
- **Smith** (1776) : science de la richesse des nations ; **Say** (1803) : production, répartition, consommation des richesses.
- **Robbins** (1932) : relation entre des fins et des moyens rares à usages alternatifs, donc science des choix.
- **Marx**, **Polanyi** : l'économie étudie des rapports sociaux et reste encastrée dans la société.
- **Microéconomie** : agents et marchés ; **macroéconomie** : agrégats (PIB, chômage, inflation) ; sophisme de composition et paradoxe de l'épargne.
- **Positif** : ce qui est, testable ; **normatif** : ce qui devrait être, jugement de valeur (« il faut », « devrait »).
- **Modèle** : représentation simplifiée fondée sur des hypothèses ; variables exogènes (causes données) et endogènes (expliquées).
- **Ceteris paribus** : une seule cause varie, les autres sont supposées constantes ; à lever en conclusion.
- Démarches déductive et inductive, économétrie, expériences randomisées (Nobel 2019) ; l'économie est une science sociale.
`,
    exercices: md`
### Exercice 2 — Le sophisme de composition

Un commerçant de Tanger explique : « Si j'épargne 10 % de plus de mon revenu, je serai plus riche à la fin de l'année. Donc, si tous les Marocains épargnent 10 % de plus, le pays sera plus riche. » 1) Le raisonnement est-il valable au niveau individuel ? 2) Pourquoi peut-il être faux au niveau national à court terme ? 3) Comment s'appelle ce phénomène et quel auteur l'a mis en avant ?

<details><summary>Voir le corrigé</summary>

1) Oui : pour un ménage isolé, son épargne n'a pas d'effet sur son revenu, qui dépend de son travail ; il accumule donc un patrimoine.

2) Si tous les ménages épargnent plus en même temps, la consommation baisse, les entreprises vendent moins, réduisent leur production et leurs effectifs : les revenus distribués diminuent. L'épargne totale, qui dépend du revenu, peut finalement stagner ou baisser. Ce qui est vrai pour une partie n'est pas forcément vrai pour le tout.

3) C'est le paradoxe de l'épargne (ou paradoxe de la frugalité), mis en avant par Keynes dans la Théorie générale (1936). Il illustre le sophisme de composition. À long terme, l'épargne peut toutefois financer l'investissement et la croissance : la conclusion dépend de l'horizon retenu.

</details>

### Exercice 3 — Construire un petit modèle

On veut expliquer la production de céréales au Maroc. 1) Citez deux variables exogènes et une variable endogène. 2) Écrivez une relation simple entre elles. 3) Donnez une limite de ce modèle.

<details><summary>Voir le corrigé</summary>

1) Variables exogènes : la pluviométrie de la campagne (en mm), la surface semée (en hectares) ; on peut ajouter le prix des engrais. Variable endogène : la production de céréales (en quintaux).

2) Exemple : production = surface semée × rendement, avec un rendement qui augmente avec la pluviométrie : rendement = a + b × pluie, où a et b sont des paramètres positifs à estimer sur les campagnes passées.

3) Le modèle oublie la répartition des pluies dans l'année (une pluie tardive est moins utile), l'irrigation, la qualité des semences, les maladies et le prix de vente qui influence les surfaces semées. Il simplifie, mais il permet déjà de prévoir l'ordre de grandeur de la récolte en fonction de la pluviométrie.

</details>
`,
    qcm: [
      { q: "La définition de l'économie comme relation entre des fins et des moyens rares à usages alternatifs est due à :", choix: ["Adam Smith", "Lionel Robbins", "Karl Marx", "John Maynard Keynes"], bonne: 1, explication: "Robbins, Essai sur la nature et la signification de la science économique, 1932." },
      { q: "L'expression « économie politique » apparaît en 1615 chez :", choix: ["Montchrestien", "Quesnay", "Ricardo", "Walras"], bonne: 0, explication: "Traité de l'économie politique, 1615." },
      { q: "Lequel de ces énoncés est normatif ?", choix: ["Le chômage des jeunes a augmenté l'an dernier", "Une hausse des taux réduit le crédit", "L'État devrait réduire la TVA sur les produits de base", "Le PIB a progressé de 3 %"], bonne: 2, explication: "Le verbe « devrait » exprime un jugement de valeur." },
      { q: "L'étude du prix des tomates sur un marché de gros relève de :", choix: ["La macroéconomie", "La microéconomie", "La comptabilité nationale", "La politique monétaire"], bonne: 1, explication: "Un marché particulier et le comportement de ses acteurs." },
      { q: "Le raisonnement ceteris paribus consiste à :", choix: ["Faire varier toutes les variables à la fois", "Faire varier une seule variable en supposant les autres constantes", "Supprimer les hypothèses", "Utiliser uniquement des statistiques"], bonne: 1, explication: "Toutes choses égales par ailleurs." },
      { q: "Dans un modèle, une variable exogène est :", choix: ["Expliquée par le modèle", "Donnée de l'extérieur du modèle", "Toujours monétaire", "Toujours constante dans le temps"], bonne: 1, explication: "Par exemple la pluviométrie dans un modèle de production agricole." },
      { q: "Le paradoxe de l'épargne illustre :", choix: ["Le sophisme de composition", "La loi des débouchés", "La rareté", "L'avantage comparatif"], bonne: 0, explication: "Ce qui est vrai pour un ménage ne l'est pas forcément pour tous." },
      { q: "Le prix Nobel 2019 a récompensé Banerjee, Duflo et Kremer pour :", choix: ["La théorie des jeux", "Les expériences randomisées contre la pauvreté", "La comptabilité nationale", "Le monétarisme"], bonne: 1, explication: "Méthode expérimentale appliquée au développement." },
      { q: "Le mot « économie » vient du grec oikos qui signifie :", choix: ["La règle", "La maison", "Le marché", "La monnaie"], bonne: 1, explication: "Nomos signifie la règle." },
      { q: "Une démarche inductive part :", choix: ["D'hypothèses générales", "De l'observation des faits pour dégager des régularités", "D'un jugement de valeur", "D'une loi votée"], bonne: 1, explication: "La démarche déductive part au contraire d'hypothèses." },
    ],
  },

  2: {
    titre: "Besoins, biens et rareté : le problème économique",
    description: "Besoins et pyramide de Maslow, biens libres et économiques, classification des biens, rareté, coût d'opportunité et frontière des possibilités de production.",
    resume: md`
## L'essentiel — Besoins, biens et rareté

- **Besoin** : sentiment de manque que l'on cherche à satisfaire ; primaires / secondaires, individuels / collectifs.
- Caractéristiques des besoins : illimités, saturables, substituables, évolutifs ; **Maslow** (1943) : physiologiques, sécurité, appartenance, estime, accomplissement.
- **Bien économique** : rare, exige un effort, a un prix ; **bien libre** : illimité et gratuit (l'air). L'eau au Maroc est devenue un bien économique.
- Classifications : biens / services, consommation / production, durables / non durables, capital fixe / consommations intermédiaires, complémentaires / substituables, privés / collectifs.
- **Bien collectif pur** : non rival et non excluable, d'où le passager clandestin et le financement par l'impôt.
- **Rareté** relative : besoins illimités face à des facteurs limités (travail, terre, capital, savoir).
- **Coût d'opportunité** = valeur de la meilleure option sacrifiée (inclut le revenu auquel on renonce).
- **FPP** : combinaisons maximales de deux biens ; sur la courbe = efficace, dessous = gaspillage, dessus = inaccessible.
- Coût d'opportunité unitaire = perte sur un bien ÷ gain sur l'autre ; croissant, donc FPP concave.
- Trois questions : que produire, comment, pour qui ; les réponses définissent le système économique.
`,
    exercices: md`
### Exercice 2 — Classer les biens

Classez chaque bien selon au moins deux critères : 1) le gaz butane acheté par un ménage ; 2) le gaz butane acheté par un boulanger pour son four ; 3) un camion frigorifique d'un exportateur d'Agadir ; 4) le réseau d'éclairage public de Rabat ; 5) un abonnement à internet et le smartphone qui l'utilise.

<details><summary>Voir le corrigé</summary>

1) Bien matériel, de consommation, non durable (détruit à l'usage). 2) Le même bien devient une consommation intermédiaire du boulanger : c'est l'usage qui compte, non la nature du bien. 3) Bien de production durable : capital fixe utilisé sur plusieurs cycles. 4) Bien collectif : non rival et difficilement excluable, financé par la commune. 5) L'abonnement est un service ; il est complémentaire du smartphone (bien durable) : l'un ne sert à rien sans l'autre.

</details>

### Exercice 3 — Coût d'opportunité constant

Un atelier de Fès peut fabriquer, en une semaine, soit 60 tapis, soit 240 poufs, ou toute combinaison intermédiaire, chaque tapis exigeant le même temps que 4 poufs. 1) Calculez le coût d'opportunité d'un tapis. 2) Quelle est la forme de la FPP ? 3) La combinaison (40 tapis ; 100 poufs) est-elle efficace ?

<details><summary>Voir le corrigé</summary>

1) Produire un tapis de plus oblige à renoncer à 240 ÷ 60 = 4 poufs ; le coût d'opportunité est constant.

2) La FPP est une droite d'équation poufs = 240 − 4 × tapis, car les ressources (artisans, laine) sont supposées également adaptées aux deux productions.

3) Pour 40 tapis, la frontière permet 240 − 4 × 40 = 80 poufs. Or on propose 100 poufs : le point est au-dessus de la FPP, donc inaccessible en une semaine.

</details>
`,
    qcm: [
      { q: "Selon Maslow, le niveau le plus élevé de la pyramide des besoins est :", choix: ["La sécurité", "L'estime", "L'accomplissement de soi", "L'appartenance"], bonne: 2, explication: "Le sommet de la pyramide (1943)." },
      { q: "Un bien économique se caractérise par :", choix: ["Sa gratuité", "Sa rareté et l'effort nécessaire pour l'obtenir", "Son caractère immatériel", "Le fait qu'il est produit par l'État"], bonne: 1, explication: "Il a donc un prix ou un coût." },
      { q: "Un bien non rival et non excluable est :", choix: ["Un bien privé", "Un bien collectif pur", "Un bien intermédiaire", "Un bien de luxe"], bonne: 1, explication: "Exemple : la défense nationale." },
      { q: "Le coût d'opportunité d'un choix est :", choix: ["Son prix d'achat", "La valeur de la meilleure option sacrifiée", "Le coût moyen de production", "Le coût fixe"], bonne: 1, explication: "Il inclut les revenus auxquels on renonce." },
      { q: "Un point situé à l'intérieur de la FPP traduit :", choix: ["Une production impossible", "Une production efficace", "Une sous-utilisation des ressources", "Un progrès technique"], bonne: 2, explication: "Chômage, terres inutilisées…" },
      { q: "Une FPP concave signifie que le coût d'opportunité est :", choix: ["Nul", "Constant", "Croissant", "Négatif"], bonne: 2, explication: "Les ressources ne sont pas également adaptées aux deux productions." },
      { q: "Le progrès technique dans les deux productions :", choix: ["Déplace la FPP vers l'intérieur", "Déplace la FPP vers l'extérieur", "Fait se déplacer le long de la FPP", "Ne change rien"], bonne: 1, explication: "Il élargit l'ensemble des productions possibles." },
      { q: "Le carburant et la voiture sont des biens :", choix: ["Substituables", "Complémentaires", "Libres", "Collectifs"], bonne: 1, explication: "Ils sont consommés ensemble." },
      { q: "L'acier transformé en carrosserie dans une usine automobile est :", choix: ["Un capital fixe", "Une consommation intermédiaire", "Un bien de consommation finale", "Un bien libre"], bonne: 1, explication: "Il est incorporé au produit en un seul cycle." },
      { q: "La question « pour qui produire ? » porte sur :", choix: ["Le choix des techniques", "La répartition de la production", "Le choix des biens à produire", "Le commerce extérieur"], bonne: 1, explication: "Répartition entre les ménages selon le travail, la propriété ou les besoins." },
    ],
  },

  3: {
    titre: "Les agents économiques et le circuit économique",
    description: "Agents économiques et secteurs institutionnels (SNF, SF, APU, ménages, ISBLSM, reste du monde), opérations, circuit simplifié et élargi, fuites et injections.",
    resume: md`
## L'essentiel — Agents et circuit économique

- **Agent économique** : centre de décision autonome ; regroupés en **secteurs institutionnels** selon la fonction principale et les ressources (HCP, SCN 2008).
- **SNF** : produire des biens et services marchands (ventes) ; **SF** : financer et assurer (intérêts, primes).
- **APU** : services non marchands et redistribution (impôts, cotisations) ; État, collectivités territoriales, CNSS.
- **Ménages** : consommer ; les entrepreneurs individuels y sont classés (revenu mixte). **ISBLSM** : associations, ONG.
- **Reste du monde** : non-résidents (critère de résidence, pas de nationalité) ; transferts des MRE.
- Opérations : sur biens et services, de répartition (primaire, redistribution), financières ; chaque flux réel a une contrepartie monétaire.
- Circuit simplifié (Quesnay, 1758) : production = revenu = dépense.
- Fuites : $S$, $T$, $M$ ; injections : $I$, $G$, $X$ ; équilibre : $S + T + M = I + G + X$.
- Identité : $(S - I) = (G - T) + (X - M)$.
- Capacité de financement (épargne > investissement) ou besoin de financement ; intermédiation bancaire.
`,
    exercices: md`
### Exercice 2 — Quel secteur institutionnel ?

Classez : 1) Maroc Telecom ; 2) une association de soutien scolaire à Salé ; 3) la commune de Marrakech ; 4) un pharmacien installé en nom propre ; 5) Wafa Assurance ; 6) un touriste allemand en vacances à Essaouira ; 7) la CNSS ; 8) Bank Al-Maghrib.

<details><summary>Voir le corrigé</summary>

1) Société non financière. 2) ISBLSM. 3) Administration publique (collectivité territoriale). 4) Ménage (entrepreneur individuel, revenu mixte). 5) Société financière (assurance). 6) Reste du monde (non-résident). 7) Administration publique (administration de sécurité sociale). 8) Société financière (banque centrale).

</details>

### Exercice 3 — Ressources et emplois d'un ménage

Un ménage de Kénitra perçoit 9 000 DH de salaires par mois, 1 500 DH de transferts envoyés par un fils installé en Italie et 400 DH d'allocations familiales. Il paie 900 DH d'impôts et cotisations, consomme 8 200 DH et épargne le reste. 1) Calculez son épargne. 2) Classez ses ressources (répartition primaire, redistribution, reste du monde). 3) Le ménage est-il à capacité ou à besoin de financement s'il n'investit pas ce mois-ci ?

<details><summary>Voir le corrigé</summary>

1) Ressources : 9 000 + 1 500 + 400 = 10 900 DH. Épargne = 10 900 − 900 − 8 200 = 1 800 DH.

2) Salaires : répartition primaire (rémunération du travail). Allocations familiales : redistribution (prestation sociale). Transferts du fils : flux venant du reste du monde (le fils est non-résident).

3) Épargne 1 800 > investissement 0 : le ménage dégage une capacité de financement de 1 800 DH, qu'il peut placer à la banque.

</details>
`,
    qcm: [
      { q: "Au Maroc, les comptes nationaux sont établis par :", choix: ["Bank Al-Maghrib", "Le HCP", "La DGI", "L'Office des changes"], bonne: 1, explication: "Haut-Commissariat au Plan, selon le SCN 2008." },
      { q: "Un agriculteur exploitant en nom propre est classé dans :", choix: ["Les SNF", "Les ménages", "Les APU", "Les ISBLSM"], bonne: 1, explication: "Entrepreneur individuel, revenu mixte." },
      { q: "La ressource principale des administrations publiques est :", choix: ["Les ventes", "Les impôts et cotisations sociales", "Les intérêts", "Les dons"], bonne: 1, explication: "Elles produisent des services non marchands." },
      { q: "Le critère d'appartenance au reste du monde est :", choix: ["La nationalité", "La résidence", "La langue", "La monnaie utilisée"], bonne: 1, explication: "Un MRE installé à l'étranger est non-résident." },
      { q: "Le Tableau économique (1758) est l'œuvre de :", choix: ["Adam Smith", "François Quesnay", "Karl Marx", "Léon Walras"], bonne: 1, explication: "Première représentation du circuit." },
      { q: "Parmi les éléments suivants, lequel est une fuite du circuit ?", choix: ["L'investissement", "Les exportations", "Les importations", "Les dépenses publiques"], bonne: 2, explication: "Une partie du revenu sort vers le reste du monde." },
      { q: "À l'équilibre du circuit :", choix: ["S + T + M = I + G + X", "S + I = G + X", "C = S", "X = M toujours"], bonne: 0, explication: "Fuites égales aux injections." },
      { q: "Si S − I = 30 et X − M = 10, alors G − T vaut :", choix: ["40", "20", "−20", "10"], bonne: 1, explication: "(S − I) = (G − T) + (X − M), donc 30 = (G − T) + 10." },
      { q: "Les allocations familiales relèvent :", choix: ["De la répartition primaire", "De la redistribution", "Des opérations financières", "De la production"], bonne: 1, explication: "Ce sont des prestations sociales." },
      { q: "Un agent dont l'épargne dépasse l'investissement a :", choix: ["Un besoin de financement", "Une capacité de financement", "Un déficit", "Un revenu mixte"], bonne: 1, explication: "Il peut prêter le surplus." },
    ],
  },

  4: {
    titre: "Production, revenus, consommation et épargne",
    description: "Facteurs de production, valeur ajoutée, productivité, PIB nominal et réel, répartition des revenus, propensions à consommer et à épargner, investissement.",
    resume: md`
## L'essentiel — Production, revenus, consommation, épargne

- **Production** marchande ou non marchande ; facteurs : travail (capital humain), capital fixe et circulant, ressources naturelles.
- **Combinaison productive** : facteurs substituables ou complémentaires ; choix selon le prix relatif des facteurs.
- $\text{VA} = \text{Production} - \text{CI}$ ; additionner les chiffres d'affaires crée des doubles comptes.
- Productivité apparente du travail = production (ou VA) ÷ travailleurs ou heures.
- **PIB** = somme des VA + impôts sur les produits − subventions ; trois optiques : production, revenus, dépenses.
- PIB réel = PIB nominal ÷ indice des prix (base 1) ; la croissance se mesure en volume ; PIB non agricole au Maroc.
- **Répartition primaire** de la VA : salaires, impôts, intérêts, dividendes, autofinancement ; **redistribution** : impôts, cotisations, prestations (loi-cadre 09-21).
- $S = R_d - C$ ; PMC $= C / R_d$ ; propension marginale $c = \Delta C / \Delta R_d$ ; $s = 1 - c$.
- Loi psychologique de Keynes : $0 < c < 1$ et PMC décroissante ; loi d'Engel : part de l'alimentation décroissante avec le revenu.
- Investissement (FBCF) de remplacement, capacité, productivité ; matériel ou immatériel ; dépend de la demande anticipée, de la rentabilité et du taux d'intérêt.
`,
    exercices: md`
### Exercice 2 — Répartition de la valeur ajoutée

Une SARL de confection de Tanger réalise une production de 9 000 000 DH et consomme 5 400 000 DH de tissus, fils, énergie et transport. Elle verse 2 300 000 DH de salaires et cotisations, 250 000 DH d'impôts sur la production, 150 000 DH d'intérêts et 400 000 DH de dividendes. 1) Calculez la VA. 2) Calculez l'autofinancement (ce qui reste à l'entreprise). 3) Calculez la part de chaque bénéficiaire en pourcentage de la VA.

<details><summary>Voir le corrigé</summary>

1) VA = 9 000 000 − 5 400 000 = 3 600 000 DH.

2) Autofinancement = 3 600 000 − 2 300 000 − 250 000 − 150 000 − 400 000 = 500 000 DH.

3) Salariés : 2 300 000 / 3 600 000 ≈ 63,9 % ; État : 250 000 / 3 600 000 ≈ 6,9 % ; prêteurs : 150 000 / 3 600 000 ≈ 4,2 % ; associés : 400 000 / 3 600 000 ≈ 11,1 % ; entreprise : 500 000 / 3 600 000 ≈ 13,9 %. Total : 100 %. La part des salariés est élevée, ce qui est typique d'une activité intensive en travail comme la confection.

</details>

### Exercice 3 — Propensions et loi d'Engel

Deux ménages : A (revenu disponible 5 000 DH, consommation 4 900 DH dont 2 200 DH d'alimentation) et B (revenu 20 000 DH, consommation 15 000 DH dont 3 600 DH d'alimentation). 1) Calculez la PMC et la PMS de chaque ménage. 2) Calculez la part de l'alimentation dans la consommation. 3) Ces résultats confirment-ils Keynes et Engel ?

<details><summary>Voir le corrigé</summary>

1) A : PMC = 4 900 / 5 000 = 0,98 ; PMS = 0,02. B : PMC = 15 000 / 20 000 = 0,75 ; PMS = 0,25.

2) A : 2 200 / 4 900 ≈ 44,9 % ; B : 3 600 / 15 000 = 24 %.

3) Oui : le ménage le plus aisé consomme une part plus faible de son revenu (Keynes : PMC décroissante avec le revenu) et consacre une part plus faible de sa consommation à l'alimentation (loi d'Engel), même s'il dépense davantage en valeur absolue (3 600 DH contre 2 200 DH).

</details>
`,
    qcm: [
      { q: "La valeur ajoutée est égale à :", choix: ["Chiffre d'affaires − salaires", "Production − consommations intermédiaires", "Production + stocks", "Bénéfice + impôts"], bonne: 1, explication: "Elle mesure la richesse réellement créée." },
      { q: "Additionner les chiffres d'affaires d'une filière conduit à :", choix: ["Mesurer exactement le PIB", "Des doubles comptes", "Sous-estimer la production", "Mesurer la productivité"], bonne: 1, explication: "Les biens intermédiaires sont comptés plusieurs fois." },
      { q: "Le PIB réel s'obtient en :", choix: ["Ajoutant l'inflation au PIB nominal", "Divisant le PIB nominal par l'indice des prix", "Multipliant le PIB par la population", "Retirant les impôts"], bonne: 1, explication: "On neutralise la hausse des prix." },
      { q: "La loi psychologique fondamentale de Keynes affirme que la propension marginale à consommer est :", choix: ["Supérieure à 1", "Comprise entre 0 et 1", "Négative", "Égale à la propension moyenne"], bonne: 1, explication: "La consommation augmente moins que le revenu." },
      { q: "Le revenu passe de 8 000 à 10 000 DH et la consommation de 7 000 à 8 600 DH. La propension marginale à consommer vaut :", choix: ["0,875", "0,86", "0,8", "1,6"], bonne: 2, explication: "1 600 / 2 000 = 0,8." },
      { q: "Selon la loi d'Engel, quand le revenu augmente, la part de l'alimentation dans le budget :", choix: ["Augmente", "Diminue", "Reste constante", "Devient nulle"], bonne: 1, explication: "Engel, 1857." },
      { q: "L'achat d'une machine pour produire davantage est un investissement de :", choix: ["Remplacement", "Capacité", "Productivité", "Consommation"], bonne: 1, explication: "Il augmente les capacités de production." },
      { q: "En comptabilité nationale, l'investissement est mesuré par :", choix: ["La FBCF", "La VA", "L'EBE", "Le revenu disponible"], bonne: 0, explication: "Formation brute de capital fixe." },
      { q: "La productivité apparente du travail rapporte la production :", choix: ["Au capital", "Au nombre de travailleurs ou d'heures", "Aux salaires", "Au chiffre d'affaires"], bonne: 1, explication: "Elle est apparente car le capital y contribue aussi." },
      { q: "Les intérêts versés par une entreprise rémunèrent :", choix: ["Les salariés", "Les prêteurs", "Les associés", "L'État"], bonne: 1, explication: "Répartition de la valeur ajoutée." },
    ],
  },

  5: {
    titre: "La monnaie et le financement de l'économie",
    description: "Monnaie S1 : limites du troc, fonctions et formes de la monnaie, agrégats M1 à M3, création monétaire, Bank Al-Maghrib, inflation et financement de l'économie.",
    resume: md`
## L'essentiel — Monnaie et financement

- Troc : double coïncidence des besoins, $n(n-1)/2$ prix relatifs, indivisibilité ; la monnaie devient un équivalent général.
- Trois fonctions (Aristote) : unité de compte, intermédiaire des échanges, réserve de valeur.
- Formes : marchandise, métallique, fiduciaire (cours légal, confiance), scripturale (comptes à vue), électronique ; chèque et carte = instruments de paiement.
- Agrégats de Bank Al-Maghrib : **M1** (fiduciaire + scripturale) ⊂ **M2** (+ comptes sur carnets) ⊂ **M3** (+ dépôts à terme, OPCVM monétaires…).
- **Les crédits font les dépôts** : les banques commerciales créent la monnaie en prêtant, la détruisent au remboursement ; multiplicateur $\Delta B / r$.
- Contreparties : créances sur l'économie, créances nettes sur l'administration centrale, avoirs extérieurs nets.
- **Bank Al-Maghrib** (loi 40-17) : stabilité des prix, émission, taux directeur, réserve obligatoire, supervision, change (panier euro 60 % / dollar 40 %, bande ±5 % depuis 2020).
- **Inflation** : hausse générale et durable des prix, mesurée par l'IPC du HCP ; par la demande, par les coûts, monétaire.
- Théorie quantitative : $MV = PT$ (Fisher, 1911) ; Friedman : phénomène monétaire.
- Financement : autofinancement, indirect (banques), direct (marchés financiers) ; économie d'endettement contre économie de marchés financiers (Hicks).
`,
    exercices: md`
### Exercice 2 — Classer dans les agrégats

Un ménage de Rabat détient : 3 000 DH en billets, 12 000 DH sur son compte courant, 20 000 DH sur un compte sur carnet, 50 000 DH en dépôt à terme d'un an, 30 000 DH en actions cotées à la Bourse de Casablanca. 1) Calculez sa contribution à M1, M2 et M3. 2) Les actions font-elles partie de la masse monétaire ?

<details><summary>Voir le corrigé</summary>

1) M1 = 3 000 + 12 000 = 15 000 DH. M2 = 15 000 + 20 000 = 35 000 DH. M3 = 35 000 + 50 000 = 85 000 DH.

2) Non : les actions ne sont pas un moyen de paiement et leur valeur fluctue ; il faut les vendre (avec un risque de perte) pour obtenir de la monnaie. Ce sont des placements financiers, pas de la monnaie.

</details>

### Exercice 3 — Création et destruction de monnaie

1) La banque B accorde un crédit de 400 000 DH à un transporteur d'Agadir qui achète un camion. Décrivez l'écriture et son effet sur la masse monétaire. 2) Un an plus tard, le transporteur rembourse 100 000 DH. Quel est l'effet ? 3) Un MRE convertit 5 000 euros en dirhams. Quelle contrepartie de la masse monétaire augmente ?

<details><summary>Voir le corrigé</summary>

1) La banque inscrit 400 000 DH à l'actif (créance sur le client) et 400 000 DH au passif (dépôt à vue du client) : de la monnaie scripturale nouvelle est créée, M1 augmente de 400 000 DH. Le paiement du camion déplace ensuite ce dépôt vers le vendeur sans le détruire.

2) Le remboursement débite le compte du transporteur et réduit la créance de la banque : 100 000 DH de monnaie sont détruits.

3) La conversion de devises augmente les avoirs extérieurs nets du système bancaire ; en contrepartie, des dirhams sont créés et crédités sur le compte du bénéficiaire.

</details>
`,
    qcm: [
      { q: "La double coïncidence des besoins est une limite :", choix: ["De la monnaie scripturale", "Du troc", "Du crédit", "De l'inflation"], bonne: 1, explication: "Il faut trouver un partenaire qui veut exactement ce que l'on offre." },
      { q: "Afficher tous les prix en dirhams correspond à la fonction :", choix: ["D'unité de compte", "De réserve de valeur", "D'intermédiaire des échanges", "De crédit"], bonne: 0, explication: "On mesure toutes les valeurs dans la même unité." },
      { q: "La monnaie scripturale est constituée :", choix: ["Des billets", "Des pièces", "Des soldes des comptes à vue", "Des actions"], bonne: 2, explication: "Elle circule par écriture." },
      { q: "Le chèque est :", choix: ["Une forme de monnaie fiduciaire", "Un instrument de paiement", "Un agrégat monétaire", "Une monnaie électronique"], bonne: 1, explication: "Il fait circuler la monnaie scripturale." },
      { q: "L'agrégat M1 comprend :", choix: ["Les dépôts à terme", "La monnaie fiduciaire et les dépôts à vue", "Les actions", "Les bons du Trésor"], bonne: 1, explication: "Ce sont les moyens de paiement immédiats." },
      { q: "L'essentiel de la monnaie est créé par :", choix: ["Le Trésor public", "Les banques commerciales en accordant des crédits", "Les ménages", "La Bourse"], bonne: 1, explication: "Les crédits font les dépôts." },
      { q: "Avec un taux de réserve de 25 %, une injection de 8 000 DH de monnaie centrale peut créer au maximum :", choix: ["2 000 DH", "10 000 DH", "32 000 DH", "200 000 DH"], bonne: 2, explication: "8 000 / 0,25 = 32 000 DH." },
      { q: "L'objectif principal de Bank Al-Maghrib selon la loi 40-17 est :", choix: ["Le plein-emploi", "La stabilité des prix", "L'équilibre budgétaire", "La hausse des exportations"], bonne: 1, explication: "Stabilité des prix, en appui à la politique économique." },
      { q: "Dans l'équation MV = PT, si V et T sont constants et M augmente de 5 %, P :", choix: ["Baisse de 5 %", "Augmente de 5 %", "Reste stable", "Double"], bonne: 1, explication: "Théorie quantitative de la monnaie." },
      { q: "L'inflation favorise :", choix: ["Les épargnants", "Les titulaires de revenus fixes", "Les emprunteurs", "Les exportateurs"], bonne: 2, explication: "La valeur réelle de leur dette diminue." },
    ],
  },

  6: {
    titre: "Le marché, les prix et le rôle de l'État",
    description: "Formation des prix par l'offre et la demande, structures de marché, défaillances du marché, fonctions de l'État selon Musgrave et carré magique de Kaldor.",
    resume: md`
## L'essentiel — Marché, prix et État

- **Marché** : rencontre de l'offre (croissante avec le prix) et de la demande (décroissante) ; équilibre $Q_d(P^*) = Q_o(P^*)$.
- Au-dessus de l'équilibre : excédent ; en dessous : pénurie ; ajustement par les prix (tâtonnement de Walras, main invisible de Smith).
- Le prix informe, incite et répartit ; un choc sur un déterminant autre que le prix **déplace** la courbe.
- Structures : concurrence pure et parfaite (atomicité, homogénéité, libre entrée, transparence, mobilité), concurrence monopolistique, oligopole, monopole.
- Maroc : loi 104-12 (liberté des prix, Conseil de la concurrence) ; prix réglementés (butane, farine, sucre, médicaments) ; carburants libres depuis 2015.
- **Défaillances** : externalités (taxe pigouvienne, subvention), biens collectifs, asymétries d'information (Akerlof, 1970), monopoles naturels.
- **Musgrave** (1959) : allocation, redistribution, stabilisation.
- État gendarme (régalien) → État providence (après 1945) → État régulateur et stratège (depuis 1980).
- Politiques conjoncturelles (budgétaire, monétaire) et structurelles.
- **Carré magique de Kaldor** (1971) : croissance, plein-emploi, stabilité des prix, équilibre extérieur ; objectifs difficiles à concilier.
`,
    exercices: md`
### Exercice 2 — Identifier la défaillance

Pour chaque situation, nommez la défaillance du marché et proposez une réponse publique : 1) une tannerie de Fès rejette ses eaux usées dans l'oued ; 2) un vendeur de voitures d'occasion connaît les défauts cachés du véhicule, l'acheteur non ; 3) aucun habitant d'un quartier n'accepte de financer seul l'éclairage de la rue ; 4) une seule entreprise peut rentablement installer le réseau de tramway d'une ville.

<details><summary>Voir le corrigé</summary>

1) Externalité négative : les riverains et agriculteurs en aval subissent un coût non compensé. Réponses : norme de rejet, taxe sur la pollution, station de traitement mutualisée.

2) Asymétrie d'information (Akerlof) : la méfiance des acheteurs fait baisser les prix et décourage les vendeurs de bons véhicules. Réponses : garantie légale, contrôle technique, obligation d'information.

3) Bien collectif : non rival, non excluable, d'où le passager clandestin. Réponse : la commune finance l'éclairage par l'impôt.

4) Monopole naturel : dupliquer le réseau serait un gaspillage. Réponses : gestion publique ou concession à une entreprise avec des tarifs réglementés.

</details>

### Exercice 3 — Arbitrages du carré magique

Un gouvernement augmente fortement les dépenses publiques pour relancer l'activité. 1) Quels objectifs du carré magique peuvent s'améliorer ? 2) Lesquels risquent de se dégrader ? Expliquez les mécanismes. 3) Quelle fonction de Musgrave est mobilisée ?

<details><summary>Voir le corrigé</summary>

1) La croissance (hausse de la demande) et l'emploi (les entreprises embauchent pour produire davantage).

2) La stabilité des prix (si la demande dépasse les capacités de production, les prix montent) et l'équilibre extérieur (une partie des revenus distribués achète des biens importés, le déficit commercial se creuse). S'y ajoute le déficit public, qu'il faudra financer.

3) La fonction de stabilisation de l'activité.

</details>
`,
    qcm: [
      { q: "Si Qd = 200 − 2P et Qo = 3P − 50, le prix d'équilibre est :", choix: ["40", "50", "60", "100"], bonne: 1, explication: "200 − 2P = 3P − 50, donc 5P = 250." },
      { q: "Un prix plafond fixé en dessous du prix d'équilibre provoque :", choix: ["Un excédent", "Une pénurie", "Aucun effet", "Une hausse de l'offre"], bonne: 1, explication: "La demande dépasse l'offre." },
      { q: "L'atomicité est une hypothèse :", choix: ["Du monopole", "De la concurrence pure et parfaite", "De l'oligopole", "De la planification"], bonne: 1, explication: "Aucun agent ne peut influencer le prix." },
      { q: "Un marché dominé par quelques entreprises interdépendantes est :", choix: ["Un monopole", "Un oligopole", "En concurrence monopolistique", "En concurrence parfaite"], bonne: 1, explication: "Exemple : les télécommunications." },
      { q: "La pollution d'une usine qui nuit aux riverains est :", choix: ["Une externalité positive", "Une externalité négative", "Un bien collectif", "Un monopole naturel"], bonne: 1, explication: "Un coût imposé à des tiers sans compensation." },
      { q: "L'analyse du marché des voitures d'occasion (1970) est due à :", choix: ["Pigou", "Akerlof", "Musgrave", "Kaldor"], bonne: 1, explication: "The Market for Lemons : asymétrie d'information." },
      { q: "Selon Musgrave, la lutte contre le chômage relève de la fonction :", choix: ["D'allocation", "De redistribution", "De stabilisation", "Régalienne"], bonne: 2, explication: "Stabiliser l'activité et l'emploi." },
      { q: "Les fonctions régaliennes de l'État comprennent :", choix: ["Les allocations familiales", "La défense, la police et la justice", "La production d'automobiles", "La publicité"], bonne: 1, explication: "C'est le périmètre de l'État gendarme." },
      { q: "Le carré magique de Kaldor ne comprend pas :", choix: ["La croissance", "Le plein-emploi", "L'équilibre budgétaire", "L'équilibre extérieur"], bonne: 2, explication: "Les quatre objectifs : croissance, emploi, prix, équilibre extérieur." },
      { q: "Au Maroc, les ententes et les abus de position dominante sont sanctionnés par :", choix: ["Bank Al-Maghrib", "Le Conseil de la concurrence", "Le HCP", "L'Office des changes"], bonne: 1, explication: "Loi 104-12 sur la liberté des prix et de la concurrence." },
    ],
  },

  7: {
    titre: "Les systèmes économiques",
    description: "Systèmes économiques : capitalisme et ses variétés, socialisme planifié et ses limites, transitions, économie mixte et trajectoire de l'économie marocaine.",
    resume: md`
## L'essentiel — Les systèmes économiques

- **Système économique** : institutions et règles qui répondent aux trois questions ; critères : propriété, coordination (marché ou plan), mobile (profit ou besoins). Système ≠ régime.
- **Capitalisme** : propriété privée, liberté d'entreprendre, marché et concurrence, salariat, profit ; main invisible (Smith), destruction créatrice (Schumpeter), esprit du capitalisme (Weber, 1905).
- Étapes : marchand, industriel, managérial, financier et mondialisé.
- Variétés : anglo-saxon contre rhénan (Albert, 1991), modèle nordique.
- **Socialisme planifié** : propriété collective, plan impératif (Gosplan), URSS dès 1917 ; industrialisation rapide mais pénuries.
- Critiques : information des prix (Hayek, Mises), économie de pénurie et contrainte budgétaire molle (Kornai, 1980).
- Transitions : gradualisme chinois (1978), thérapie de choc en Europe de l'Est (après 1989-1991).
- **Économie mixte** : marché + intervention publique ; planification indicative ; économie sociale et solidaire.
- Maroc : plans quinquennaux indicatifs, marocanisation (1973), PAS (1983), privatisations (loi 39-89), libre-échange, État stratège, NMD (2021).
- Constitution de 2011, article 35 : propriété, liberté d'entreprendre, libre concurrence ; le Maroc est une économie mixte à dominante de marché.
`,
    exercices: md`
### Exercice 2 — Planification impérative ou indicative ?

Classez chaque mesure : 1) le Gosplan ordonne à une usine de produire 50 000 paires de chaussures ; 2) un plan national fixe un objectif de 3 millions d'hectares irrigués et propose des subventions aux agriculteurs qui investissent dans le goutte-à-goutte ; 3) l'État fixe les prix de tous les biens de consommation ; 4) une stratégie industrielle propose des terrains équipés et des primes aux constructeurs automobiles qui s'installent dans une zone franche.

<details><summary>Voir le corrigé</summary>

1) Planification impérative : ordre obligatoire donné à une entreprise d'État.

2) Planification indicative : un objectif national et des incitations, les agriculteurs restant libres de leurs décisions.

3) Planification impérative : les prix ne résultent plus du marché mais d'une décision centrale.

4) Politique incitative d'un État stratège : les entreprises restent libres de venir ou non ; c'est compatible avec l'économie de marché.

</details>

### Exercice 3 — Schumpeter et la destruction créatrice

Les plateformes de VTC et les applications de livraison se développent dans les grandes villes marocaines, en concurrence avec les petits taxis et certains commerces. 1) Expliquez ce phénomène avec la notion de destruction créatrice. 2) Qui gagne, qui perd ? 3) Quel rôle peut jouer l'État ?

<details><summary>Voir le corrigé</summary>

1) Une innovation (application mobile, géolocalisation, paiement en ligne) crée de nouvelles activités et de nouveaux emplois, et menace des activités existantes : pour Schumpeter, ce mouvement est le moteur du capitalisme.

2) Gagnants : les consommateurs (service plus pratique, parfois moins cher), les entreprises innovantes et leurs chauffeurs ou livreurs. Perdants : les activités anciennes (titulaires d'agréments de taxi, commerces moins adaptés), au moins à court terme.

3) L'État peut adapter la réglementation (conditions d'exercice, assurance, fiscalité), protéger les travailleurs des plateformes (couverture sociale) et accompagner la reconversion des perdants, sans bloquer l'innovation.

</details>
`,
    qcm: [
      { q: "Le critère qui ne sert pas à caractériser un système économique est :", choix: ["Le régime de propriété", "Le mode de coordination", "Le mobile de l'activité", "La langue officielle"], bonne: 3, explication: "Les trois critères : propriété, coordination, mobile." },
      { q: "La destruction créatrice est une notion de :", choix: ["Marx", "Schumpeter", "Keynes", "Weber"], bonne: 1, explication: "L'innovation remplace les activités anciennes." },
      { q: "L'Éthique protestante et l'esprit du capitalisme (1905) est l'œuvre de :", choix: ["Max Weber", "Adam Smith", "Michel Albert", "Karl Marx"], bonne: 0, explication: "Rôle des valeurs culturelles dans l'essor du capitalisme." },
      { q: "En URSS, l'organisme chargé de la planification était :", choix: ["Le Comecon", "Le Gosplan", "Le Politburo économique", "La Banque d'État"], bonne: 1, explication: "Il fixait quantités, moyens et prix." },
      { q: "L'expression « économie de pénurie » est due à :", choix: ["Hayek", "Kornai", "Albert", "Deng Xiaoping"], bonne: 1, explication: "János Kornai, 1980." },
      { q: "Michel Albert oppose le capitalisme anglo-saxon au capitalisme :", choix: ["Rhénan", "Soviétique", "Marchand", "Chinois"], bonne: 0, explication: "Capitalisme contre capitalisme, 1991." },
      { q: "La Chine engage ses réformes vers le marché à partir de :", choix: ["1949", "1978", "1991", "2001"], bonne: 1, explication: "Réformes graduelles de Deng Xiaoping." },
      { q: "La planification indicative :", choix: ["Impose des quotas aux entreprises", "Fixe des orientations sans contraindre les entreprises", "Supprime le marché", "Fixe tous les prix"], bonne: 1, explication: "Exemple : la France après 1946, les plans marocains." },
      { q: "La marocanisation date de :", choix: ["1956", "1973", "1983", "1989"], bonne: 1, explication: "Participation marocaine majoritaire imposée dans certaines entreprises." },
      { q: "L'article de la Constitution de 2011 qui garantit la liberté d'entreprendre est l'article :", choix: ["6", "35", "77", "120"], bonne: 1, explication: "Il garantit aussi le droit de propriété et la libre concurrence." },
    ],
  },

  8: {
    titre: "La pensée économique des origines à Marx",
    description: "Histoire de la pensée économique : Ibn Khaldoun, mercantilistes, physiocrates, Smith, Malthus, Say, Ricardo et l'avantage comparatif, Marx et la plus-value.",
    resume: md`
## L'essentiel — Des origines à Marx

- **Aristote** : économique contre chrématistique, valeur d'usage et valeur d'échange.
- **Ibn Khaldoun** (*Muqaddima*, 1377) : travail source de valeur, division du travail, rôle de la demande, « trop d'impôt tue l'impôt » (repris par Laffer).
- **Mercantilistes** (XVIe-XVIIIe) : richesse = métaux précieux ; bullionisme, colbertisme, commercialisme (Mun) ; protectionnisme ; Bodin (1568) et la hausse des prix.
- **Physiocrates** : seule la terre produit un produit net ; *Tableau économique* de Quesnay (1758) ; « laissez faire, laissez passer ».
- **Smith** (1776) : division du travail (épingles), main invisible, État minimal, avantage absolu.
- **Malthus** (1798) : population géométrique, subsistances arithmétiques.
- **Say** (1803) : loi des débouchés, pas de surproduction générale durable.
- **Ricardo** (1817) : avantage comparatif (vin et drap), rente différentielle, état stationnaire.
- Classiques : valeur-travail, marché, libre-échange, monnaie voile.
- **Marx** (*Le Capital*, 1867) : plus-value = valeur créée − valeur de la force de travail ; taux $pl / v$ ; accumulation, baisse tendancielle du taux de profit, crises, lutte des classes.
`,
    exercices: md`
### Exercice 2 — Qui a dit quoi ?

Associez chaque idée à son auteur ou à son courant : 1) « Les produits s'échangent contre des produits » ; 2) la richesse d'une nation se mesure à son stock d'or ; 3) seule l'agriculture dégage un produit net ; 4) un pays gagne à se spécialiser là où son désavantage est le plus faible ; 5) au début d'une dynastie, des taux d'impôt faibles rapportent beaucoup ; 6) la population augmente plus vite que les subsistances ; 7) le profit provient du surtravail non payé.

<details><summary>Voir le corrigé</summary>

1) Jean-Baptiste Say, loi des débouchés (1803). 2) Mercantilistes, en particulier le bullionisme espagnol. 3) Physiocrates (Quesnay). 4) David Ricardo, avantage comparatif (1817). 5) Ibn Khaldoun, Muqaddima (1377). 6) Thomas Robert Malthus (1798). 7) Karl Marx, théorie de la plus-value (Le Capital, 1867).

</details>

### Exercice 3 — Progressions de Malthus

Une population de 10 millions d'habitants double tous les 25 ans, tandis que la production de subsistances, suffisante au départ pour 10 millions de personnes, augmente chaque période de 25 ans d'une quantité permettant de nourrir 10 millions de personnes de plus. 1) Calculez population et capacité alimentaire après 25, 50, 75 et 100 ans. 2) Que conclut Malthus ? 3) Donnez deux raisons pour lesquelles sa prédiction ne s'est pas réalisée dans les pays industrialisés.

<details><summary>Voir le corrigé</summary>

1) Population : 20, 40, 80 puis 160 millions. Capacité alimentaire : 20, 30, 40 puis 50 millions de personnes. Après 100 ans, 160 − 50 = 110 millions de personnes ne pourraient pas être nourries.

2) La population se heurte inévitablement aux limites des subsistances : misère, famines et épidémies jouent le rôle de freins, sauf si les hommes adoptent des freins préventifs (mariage tardif, chasteté).

3) Les gains de productivité agricole (engrais, mécanisation, sélection des semences) ont fait croître la production bien plus vite qu'une progression arithmétique, et la transition démographique a fait baisser la fécondité avec l'urbanisation, la scolarisation et l'élévation du niveau de vie.

</details>
`,
    qcm: [
      { q: "La Muqaddima d'Ibn Khaldoun date de :", choix: ["1377", "1615", "1776", "1867"], bonne: 0, explication: "Elle analyse le travail, la division du travail et l'impôt." },
      { q: "Pour les mercantilistes, la richesse d'une nation repose sur :", choix: ["L'agriculture", "Les métaux précieux", "Le travail des ouvriers", "La terre"], bonne: 1, explication: "Ils recommandent un excédent commercial." },
      { q: "Pour les physiocrates, la seule classe productive est celle :", choix: ["Des artisans", "Des commerçants", "Des agriculteurs (fermiers)", "Des propriétaires"], bonne: 2, explication: "Seule la terre dégage un produit net." },
      { q: "La manufacture d'épingles illustre chez Smith :", choix: ["La rente foncière", "La division du travail", "La loi des débouchés", "La plus-value"], bonne: 1, explication: "La spécialisation multiplie la productivité." },
      { q: "La loi des débouchés est due à :", choix: ["Smith", "Ricardo", "Say", "Malthus"], bonne: 2, explication: "Traité d'économie politique, 1803." },
      { q: "La théorie de l'avantage comparatif a été formulée par :", choix: ["Adam Smith", "David Ricardo", "Karl Marx", "Thomas Mun"], bonne: 1, explication: "Principes de l'économie politique et de l'impôt, 1817." },
      { q: "Pour Malthus, les subsistances augmentent selon une progression :", choix: ["Géométrique", "Arithmétique", "Exponentielle", "Nulle"], bonne: 1, explication: "La population, elle, augmente selon une progression géométrique." },
      { q: "Un ouvrier travaille 8 heures et produit la valeur de son salaire en 4 heures. Le taux de plus-value est :", choix: ["50 %", "100 %", "200 %", "25 %"], bonne: 1, explication: "4 heures de surtravail rapportées à 4 heures de travail nécessaire." },
      { q: "La formule « laissez faire, laissez passer » est associée :", choix: ["Aux mercantilistes", "Aux physiocrates", "À Marx", "Aux keynésiens"], bonne: 1, explication: "Attribuée à Vincent de Gournay." },
      { q: "Le livre I du Capital de Marx paraît en :", choix: ["1817", "1848", "1867", "1936"], bonne: 2, explication: "Il y développe la théorie de la plus-value." },
    ],
  },

  9: {
    titre: "La pensée économique depuis 1870 : néoclassiques, Keynes et débats contemporains",
    description: "Pensée économique depuis 1870 : marginalisme, Walras, Marshall, Pareto, révolution keynésienne et multiplicateur, monétarisme, nouveaux classiques, hétérodoxes.",
    resume: md`
## L'essentiel — Néoclassiques, Keynes et débats contemporains

- **Révolution marginaliste** : Jevons et Menger (1871), Walras (1874) ; valeur-utilité, utilité marginale décroissante, paradoxe de l'eau et du diamant.
- Néoclassiques : individualisme méthodologique, *homo œconomicus*, raisonnement à la marge, équilibre.
- **Walras** : équilibre général, tâtonnement ; **Marshall** (1890) : équilibre partiel, élasticité ; **Pareto** : optimum.
- Pour les néoclassiques, le chômage durable est volontaire ou dû aux rigidités ; la monnaie est neutre.
- **Keynes** (*Théorie générale*, 1936) : rejet de la loi de Say, demande effective, équilibre de sous-emploi, chômage involontaire, préférence pour la liquidité, incertitude.
- Multiplicateur : $k = 1 / (1 - c)$ et $\Delta Y = k \times \Delta G$ ; rôle actif de l'État.
- Synthèse néoclassique : IS-LM (Hicks, 1937), Samuelson ; courbe de Phillips (1958).
- Stagflation des années 1970 : **Friedman** (chômage naturel, règle monétaire), **Lucas** (anticipations rationnelles), économie de l'offre (Laffer), **Hayek**.
- Nouveaux keynésiens (rigidités fondées) ; retour des relances après 2008 et 2020 (Fonds spécial de gestion de la pandémie au Maroc).
- Hétérodoxes : institutionnalistes (Veblen, North, Williamson), économie comportementale (Kahneman, Thaler, Simon), post-keynésiens, régulationnistes.
`,
    exercices: md`
### Exercice 2 — L'utilité marginale

Un étudiant boit des verres de thé pendant une soirée de révision. Utilité totale : 1 verre : 10 ; 2 verres : 18 ; 3 verres : 24 ; 4 verres : 27 ; 5 verres : 28 ; 6 verres : 26. 1) Calculez l'utilité marginale de chaque verre. 2) Comment évolue-t-elle ? 3) Combien de verres l'étudiant devrait-il boire au maximum si le thé est gratuit ? 4) Expliquez avec cette notion le paradoxe de l'eau et du diamant.

<details><summary>Voir le corrigé</summary>

1) Utilités marginales : 10 ; 8 ; 6 ; 3 ; 1 ; −2.

2) Elle est décroissante, et devient même négative au sixième verre (le thé finit par gêner).

3) Cinq verres : tant que l'utilité marginale est positive, un verre gratuit supplémentaire augmente la satisfaction totale ; le sixième la réduit.

4) La valeur d'un bien dépend de son utilité marginale, non de son utilité totale. L'eau, abondante, est consommée jusqu'à ce que sa dernière unité ait une faible utilité : son prix est bas. Le diamant, rare, garde une utilité marginale élevée : son prix est élevé.

</details>

### Exercice 3 — Classer les politiques par courant

Indiquez quel courant défendrait chaque mesure et pourquoi : 1) augmenter les dépenses publiques en pleine récession ; 2) fixer une règle de croissance de la masse monétaire de 3 % par an ; 3) baisser fortement l'impôt sur les sociétés pour encourager la production ; 4) supprimer le salaire minimum pour réduire le chômage ; 5) concevoir des dispositifs d'épargne retraite par défaut, dont on peut sortir, pour contrer la procrastination.

<details><summary>Voir le corrigé</summary>

1) Keynésien : soutenir la demande effective pour réduire le chômage involontaire, grâce à l'effet multiplicateur.

2) Monétariste (Friedman) : une règle stable évite l'inflation et l'instabilité causées par une politique discrétionnaire.

3) Économie de l'offre (Laffer) : des impôts plus faibles incitent à produire et à investir, et peuvent même augmenter les recettes si les taux étaient trop élevés.

4) Néoclassique : le salaire minimum empêche le marché du travail de s'équilibrer au salaire d'équilibre.

5) Économie comportementale (Thaler) : un « coup de pouce » (nudge) tient compte des biais des agents sans les contraindre.

</details>
`,
    qcm: [
      { q: "La révolution marginaliste remplace la valeur-travail par :", choix: ["La valeur-monnaie", "La valeur-utilité", "La valeur-or", "La plus-value"], bonne: 1, explication: "Jevons, Menger et Walras, 1871-1874." },
      { q: "Les Éléments d'économie politique pure (1874) sont l'œuvre de :", choix: ["Marshall", "Walras", "Pareto", "Jevons"], bonne: 1, explication: "Modèle d'équilibre général." },
      { q: "Une situation où l'on ne peut améliorer le sort de l'un sans détériorer celui d'un autre est :", choix: ["Un équilibre de sous-emploi", "Un optimum de Pareto", "Une stagflation", "Un monopole"], bonne: 1, explication: "Critère d'efficacité de Pareto." },
      { q: "La Théorie générale de Keynes est publiée en :", choix: ["1929", "1936", "1945", "1958"], bonne: 1, explication: "Théorie générale de l'emploi, de l'intérêt et de la monnaie." },
      { q: "Pour Keynes, le niveau de l'emploi dépend :", choix: ["Du salaire réel uniquement", "De la demande effective", "De la masse monétaire", "Du progrès technique"], bonne: 1, explication: "Les entreprises produisent selon la demande anticipée." },
      { q: "Si la propension marginale à consommer vaut 0,75, le multiplicateur vaut :", choix: ["1,33", "4", "7,5", "0,25"], bonne: 1, explication: "1 / (1 − 0,75) = 4." },
      { q: "La stagflation des années 1970 associe :", choix: ["Croissance et déflation", "Stagnation et inflation", "Plein-emploi et inflation", "Croissance et chômage nul"], bonne: 1, explication: "Elle a fragilisé les politiques keynésiennes." },
      { q: "Le taux de chômage naturel est un concept de :", choix: ["Keynes", "Friedman", "Walras", "Marx"], bonne: 1, explication: "La relance ne peut pas le réduire durablement." },
      { q: "La théorie des anticipations rationnelles est associée à :", choix: ["Robert Lucas", "John Hicks", "Thorstein Veblen", "Alfred Marshall"], bonne: 0, explication: "Nouvelle économie classique, années 1970." },
      { q: "La consommation ostentatoire a été analysée par :", choix: ["Veblen", "Pareto", "Friedman", "Ricardo"], bonne: 0, explication: "Théorie de la classe de loisir, 1899." },
    ],
  },

  10: {
    titre: "Croissance, développement et fluctuations",
    description: "Croissance économique et sa mesure, taux annuel moyen, sources de la croissance, développement et IDH, développement durable, cycles et crises économiques.",
    resume: md`
## L'essentiel — Croissance, développement, fluctuations

- **Croissance** : hausse durable du PIB réel (Perroux) ; taux $= (\text{PIB}_t - \text{PIB}_{t-1}) / \text{PIB}_{t-1}$.
- Taux annuel moyen $= (\text{PIB}_{\text{fin}} / \text{PIB}_{\text{début}})^{1/n} - 1$ ; temps de doublement ≈ $70 / g$.
- PIB par habitant, PPA ; limites du PIB : informel, travail domestique, répartition, environnement.
- Croissance extensive (plus de facteurs) ou intensive (productivité) ; **Solow** (1956) : progrès technique exogène, rendements décroissants du capital.
- **Croissance endogène** (Romer) : recherche, capital humain, infrastructures, externalités ; institutions (North, Acemoglu).
- Maroc : investissement élevé, productivité modeste ; NMD (2021) : doubler le PIB par habitant d'ici 2035.
- **Développement** : transformation qualitative des structures (Perroux, 1961) ; **IDH** du PNUD (1990, Sen) = moyenne géométrique santé, éducation, revenu.
- Rostow (1960) : cinq étapes, dont le décollage ; critique du schéma linéaire.
- **Développement durable** (Brundtland, 1987) : trois piliers ; Noor Ouarzazate, COP22 (2016), stress hydrique.
- Cycle : expansion, retournement, récession ou dépression, reprise ; Kitchin (3-4 ans), Juglar (8-10 ans), Kondratiev (40-60 ans) ; crises de 1929, 1973, 2008, 2020.
`,
    exercices: md`
### Exercice 2 — Croissance ou récession ?

PIB réel trimestriel d'un pays (indice) : T1 : 100 ; T2 : 101,2 ; T3 : 101,5 ; T4 : 100,9 ; T5 : 100,1 ; T6 : 100,6. 1) Calculez la variation de chaque trimestre. 2) Le pays a-t-il connu une récession ? Si oui, quand ? 3) Situez les phases du cycle.

<details><summary>Voir le corrigé</summary>

1) T2 : +1,2 % ; T3 : 101,5 / 101,2 − 1 ≈ +0,30 % ; T4 : 100,9 / 101,5 − 1 ≈ −0,59 % ; T5 : 100,1 / 100,9 − 1 ≈ −0,79 % ; T6 : 100,6 / 100,1 − 1 ≈ +0,50 %.

2) Oui : le PIB recule pendant deux trimestres consécutifs (T4 et T5), ce qui correspond à la définition usuelle de la récession.

3) Expansion en T2 et T3 (avec un ralentissement en T3), retournement après T3, récession en T4 et T5, reprise en T6.

</details>

### Exercice 3 — Croissance et développement

Un pays exportateur de pétrole affiche un PIB par habitant élevé et une croissance de 6 % par an, mais l'espérance de vie y reste de 62 ans, un adulte sur trois est analphabète et la richesse est concentrée dans une petite élite. 1) Peut-on parler de croissance ? de développement ? 2) Quel indicateur permettrait de mieux mesurer sa situation ? 3) Que recommanderiez-vous pour transformer la croissance en développement ?

<details><summary>Voir le corrigé</summary>

1) Il y a croissance (hausse durable du PIB réel), mais peu de développement : les structures sociales et le bien-être de la majorité ne progressent pas ; c'est une croissance sans développement, fréquente dans les économies de rente.

2) L'IDH, qui combine santé, éducation et revenu : les faibles indices de santé et d'éducation le tireraient nettement vers le bas par rapport au classement selon le seul PIB par habitant. On peut y ajouter un indicateur d'inégalités (coefficient de Gini) ou de pauvreté.

3) Utiliser la rente pour investir dans l'éducation et la santé (capital humain), diversifier l'économie (industrie, services) pour réduire la dépendance au pétrole, redistribuer par la fiscalité et la protection sociale, et renforcer les institutions (transparence, lutte contre la corruption).

</details>
`,
    qcm: [
      { q: "La croissance économique se mesure par l'évolution :", choix: ["Du PIB nominal", "Du PIB réel", "De la masse monétaire", "De l'IDH"], bonne: 1, explication: "On neutralise la hausse des prix." },
      { q: "Le PIB réel passe de 800 à 836. Le taux de croissance est :", choix: ["3,6 %", "4,5 %", "36 %", "4,3 %"], bonne: 1, explication: "836 / 800 − 1 = 4,5 %." },
      { q: "À 5 % de croissance par an, le PIB double en environ :", choix: ["5 ans", "14 ans", "20 ans", "50 ans"], bonne: 1, explication: "Règle de 70 : 70 / 5 = 14 ans." },
      { q: "Dans le modèle de Solow (1956), la croissance durable du niveau de vie vient :", choix: ["De l'accumulation du capital seule", "Du progrès technique", "De la hausse des prix", "Des exportations"], bonne: 1, explication: "Le capital a des rendements décroissants." },
      { q: "Les théories de la croissance endogène sont associées à :", choix: ["Paul Romer", "Walt Rostow", "François Quesnay", "Clément Juglar"], bonne: 0, explication: "Recherche, capital humain, externalités." },
      { q: "L'IDH ne prend pas en compte :", choix: ["L'espérance de vie", "L'éducation", "Le revenu par habitant", "Les émissions de CO2"], bonne: 3, explication: "Ses trois dimensions : santé, éducation, niveau de vie." },
      { q: "Depuis 2010, l'IDH est calculé comme une moyenne :", choix: ["Arithmétique", "Géométrique", "Pondérée par la population", "Harmonique"], bonne: 1, explication: "Elle pénalise les déséquilibres entre dimensions." },
      { q: "La définition du développement durable vient du rapport :", choix: ["Brundtland (1987)", "Meadows (1972)", "Beveridge (1942)", "Stiglitz (2009)"], bonne: 0, explication: "Répondre aux besoins du présent sans compromettre ceux des générations futures." },
      { q: "Le cycle Juglar dure en moyenne :", choix: ["3 à 4 ans", "8 à 10 ans", "40 à 60 ans", "1 an"], bonne: 1, explication: "Cycle des affaires lié à l'investissement et au crédit." },
      { q: "On parle couramment de récession quand le PIB réel :", choix: ["Ralentit", "Recule pendant au moins deux trimestres consécutifs", "Croît de moins de 2 %", "Stagne un mois"], bonne: 1, explication: "Un ralentissement n'est pas une récession." },
    ],
  },
};

export default chapitres;
