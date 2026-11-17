// Entrepreneuriat et Gestion de Projets (S6) — compléments par chapitre : description SEO, résumé, exercices 2 et 3, QCM.
const md = String.raw;

const chapitres = {
  1: {
    titre: "L'entrepreneuriat : notions, profils et écosystème",
    description: "Formes d'entrepreneuriat, théories de Cantillon à Shapero, causation et effectuation, opportunité ou nécessité, CRI, auto-entrepreneur, Intelaka et Tamwilcom.",
    resume: md`
## L'essentiel — Entreprendre

- **Entrepreneuriat** : identifier une opportunité, réunir des ressources, créer une organisation, accepter un risque.
- Formes : création, reprise, **intrapreneuriat**, entrepreneuriat social, franchise.
- Théories : **Cantillon** (risque), **Say** (combinaison), **Schumpeter** (innovation, destruction créatrice), **Kirzner** (vigilance), **Shapero et Sokol** (déplacement, désirabilité, faisabilité).
- Les traits de personnalité expliquent peu : l'entrepreneuriat s'apprend et dépend du contexte.
- **Causation** : objectif d'abord, puis moyens ; **effectuation** (Sarasvathy) : moyens disponibles, perte acceptable, alliances, surprises, contrôle.
- Entrepreneuriat d'**opportunité** ou de **nécessité** ; importance du secteur informel au Maroc.
- Écosystème : **CRI** et création en ligne (loi 88-17), **auto-entrepreneur** (loi 114-13), **Intelaka** (2020), **Tamwilcom**, Maroc PME, incubateurs, prêts d'honneur.
- **Financement collaboratif** (loi 15-18) : plateformes agréées de prêt, de capital et de don.
`,
    exercices: md`
### Exercice 2 — Identifier la théorie

Associez chaque situation à un auteur : a) un commerçant achète des dattes à la récolte sans savoir à quel prix il les revendra pendant le Ramadan ; b) une entreprise lance le paiement mobile dans une région sans agence bancaire, ce qui fait reculer les transferts en espèces ; c) un jeune remarque que les touristes de sa ville ne trouvent pas de location de vélos et ouvre ce service ; d) un ingénieur rentré au pays après dix ans à l'étranger crée une entreprise avec l'appui de sa famille.

<details><summary>Voir le corrigé</summary>

a) **Cantillon** : achat à prix certain, revente à prix incertain, prise de risque.
b) **Schumpeter** : innovation qui détruit d'anciennes pratiques (destruction créatrice).
c) **Kirzner** : vigilance à une opportunité de profit non exploitée.
d) **Shapero et Sokol** : déplacement (retour au pays), désirabilité (projet de vie), faisabilité (compétences, soutien familial).

</details>

### Exercice 3 — Perte acceptable

Karim veut ouvrir une boutique de vêtements en ligne. Un consultant lui conseille un plan de 400 000 DH (stock, site, publicité) pour viser 10 % du marché régional en deux ans. Karim dispose de 50 000 DH qu'il peut perdre sans mettre sa famille en difficulté.

1. Quelle logique le consultant applique-t-il ?
2. Proposez un démarrage selon le principe de la perte acceptable.

<details><summary>Voir le corrigé</summary>

1. Une logique **causale** : un objectif de part de marché, puis les moyens pour l'atteindre, avec un risque élevé de perdre 400 000 DH.
2. Démarrer avec au plus 50 000 DH : vente sur les réseaux sociaux et une place de marché plutôt qu'un site sur mesure, petit stock ou précommandes, partenariat avec un atelier local qui produit à la demande ; mesurer les ventes réelles avant d'investir davantage. Si le marché répond, chercher ensuite un financement avec des preuves de vente.

</details>
`,
    qcm: [
      { q: "L'intrapreneuriat désigne :", choix: ["La création d'une entreprise à l'étranger", "Un projet entrepreneurial mené par un salarié au sein d'une entreprise existante", "La reprise d'une entreprise familiale", "Le travail informel"], bonne: 1, explication: "Nouveau produit, nouvelle activité interne." },
      { q: "Pour Schumpeter, l'entrepreneur est avant tout :", choix: ["Un gestionnaire prudent", "Un innovateur", "Un rentier", "Un fonctionnaire"], bonne: 1, explication: "Il provoque la destruction créatrice." },
      { q: "Kirzner insiste sur :", choix: ["La vigilance aux opportunités", "La combinaison des facteurs", "Le risque de prix", "Les traits de personnalité"], bonne: 0, explication: "Repérer ce que les autres n'ont pas vu." },
      { q: "Le modèle de Shapero et Sokol repose sur :", choix: ["Prix, produit, place", "Déplacement, désirabilité, faisabilité", "Forces, faiblesses, opportunités", "Coût, délai, qualité"], bonne: 1, explication: "L'événement entrepreneurial." },
      { q: "L'effectuation part :", choix: ["D'un objectif de marché précis", "Des moyens dont dispose l'entrepreneur", "D'une étude de marché complète", "D'un plan d'affaires"], bonne: 1, explication: "Sarasvathy, 2001." },
      { q: "Le principe de la perte acceptable consiste à :", choix: ["Maximiser le gain espéré", "N'engager que ce que l'on peut se permettre de perdre", "Emprunter le plus possible", "Éviter tout risque"], bonne: 1, explication: "Principe de l'effectuation." },
      { q: "L'entrepreneuriat de nécessité correspond à :", choix: ["Créer pour exploiter une innovation", "Créer faute d'emploi salarié", "Reprendre une multinationale", "Investir en Bourse"], bonne: 1, explication: "Par opposition à l'entrepreneuriat d'opportunité." },
      { q: "Le statut de l'auto-entrepreneur au Maroc est organisé par :", choix: ["La loi 114-13", "La loi 15-95", "La loi 28-07", "La loi 17-99"], bonne: 0, explication: "Exercice individuel simplifié." },
      { q: "Le programme Intelaka, lancé en 2020, propose surtout :", choix: ["Des subventions à l'export", "Des crédits à taux réduit pour les jeunes entrepreneurs et TPE", "Des bourses d'études", "Des exonérations de TVA"], bonne: 1, explication: "Avec garantie publique." },
      { q: "Le financement collaboratif au Maroc est encadré par :", choix: ["La loi 15-18", "La loi 09-08", "La loi 43-20", "La loi 05-20"], bonne: 0, explication: "Prêt, capital et don via des plateformes agréées." },
    ],
  },
  2: {
    titre: "De l'idée au modèle d'affaires",
    description: "Idée et opportunité, Business Model Canvas, démarche lean startup, produit minimum viable, pivot, conversion, coût d'acquisition et valeur vie client.",
    resume: md`
## L'essentiel — Le modèle d'affaires

- **Opportunité** : besoin réel de clients solvables, que l'on satisfait mieux ou autrement, avec rentabilité, au bon moment.
- Sources d'idées : expérience, frustrations, changements de l'environnement, concepts importés.
- **Modèle d'affaires** : comment l'entreprise crée, délivre et capte de la valeur.
- **Business Model Canvas** (Osterwalder, Pigneur) : segments, proposition de valeur, canaux, relation, revenus, ressources, activités, partenaires, coûts.
- **Lean Canvas** : problème, solution, indicateurs clés, avantage déloyal.
- **Lean startup** (Ries) : construire, mesurer, apprendre ; **MVP** pour tester l'hypothèse la plus risquée ; **persévérer** ou **pivoter**.
- Conversion = clients / visiteurs ; **CAC** = dépenses marketing / nouveaux clients.
- **LTV** = marge par achat × achats par an × durée ; ratio LTV / CAC souvent visé au-dessus de 3.
- Fixer le critère de réussite **avant** le test.
`,
    exercices: md`
### Exercice 2 — Canevas d'une coopérative

Une coopérative féminine de couscous artisanal près de Khémisset veut vendre aux épiceries fines de Casablanca et aux expatriés en Europe. Remplissez les neuf blocs du Business Model Canvas.

<details><summary>Voir le corrigé</summary>

1. **Segments** : épiceries fines urbaines ; diaspora et amateurs de produits du terroir en Europe.
2. **Proposition de valeur** : couscous roulé à la main, ingrédients locaux, histoire des femmes de la coopérative, qualité constante.
3. **Canaux** : distributeur spécialisé en épicerie fine, boutique en ligne, salons.
4. **Relation** : récit et transparence sur la production, visites, réseaux sociaux.
5. **Revenus** : vente à l'unité et en coffrets, marge plus élevée en ligne.
6. **Ressources** : savoir-faire des membres, local aux normes, certification sanitaire.
7. **Activités** : production, conditionnement, contrôle qualité, commercialisation.
8. **Partenaires** : producteurs de blé, ONSSA (agrément), associations d'appui, transporteur.
9. **Coûts** : matières premières, emballages, rémunération des membres, transport, commissions des intermédiaires.

</details>

### Exercice 3 — Ratio LTV / CAC

Une application de réservation de camions pour les PME dépense 45 000 DH de publicité et obtient 180 clients. Chaque client réserve en moyenne 2 trajets par mois ; la commission de l'application est de 60 DH par trajet ; la relation dure en moyenne 10 mois.

1. Calculez le CAC, la LTV et le ratio.
2. Que faire si la durée de relation tombe à 4 mois ?

<details><summary>Voir le corrigé</summary>

1. CAC = 45 000 / 180 = **250 DH** ; LTV = 60 × 2 × 10 = **1 200 DH** ; ratio = **4,8**.
2. LTV = 60 × 2 × 4 = 480 DH ; ratio = 1,9 : le modèle devient fragile. Il faut améliorer la **rétention** (qualité du service, abonnement, programme de fidélité) ou réduire le coût d'acquisition (parrainage, partenariats avec des associations professionnelles).

</details>
`,
    qcm: [
      { q: "Une opportunité d'affaires suppose surtout :", choix: ["Une idée originale", "Un besoin réel de clients solvables", "Un brevet", "Un local en centre-ville"], bonne: 1, explication: "Que l'on peut satisfaire mieux ou autrement." },
      { q: "Le Business Model Canvas compte :", choix: ["4 blocs", "6 blocs", "9 blocs", "12 blocs"], bonne: 2, explication: "Osterwalder et Pigneur." },
      { q: "Le bloc qui répond à « quel problème résolvons-nous ? » est :", choix: ["Les canaux", "La proposition de valeur", "Les ressources clés", "La structure de coûts"], bonne: 1, explication: "Le cœur du modèle." },
      { q: "Un abonnement mensuel est un exemple de :", choix: ["Flux de revenus", "Partenaire clé", "Ressource clé", "Canal"], bonne: 0, explication: "Comment les clients paient." },
      { q: "La démarche lean startup repose sur le cycle :", choix: ["Planifier, exécuter, clôturer", "Construire, mesurer, apprendre", "Produire, stocker, vendre", "Acheter, transformer, livrer"], bonne: 1, explication: "Eric Ries, 2011." },
      { q: "Un produit minimum viable sert à :", choix: ["Vendre le produit final", "Tester une hypothèse auprès de vrais clients au moindre coût", "Obtenir un brevet", "Remplacer l'étude financière"], bonne: 1, explication: "MVP." },
      { q: "Pivoter signifie :", choix: ["Abandonner l'entrepreneuriat", "Changer un élément du modèle en gardant ce qui a été appris", "Augmenter les prix", "Embaucher"], bonne: 1, explication: "Segment, valeur, canal ou revenu." },
      { q: "Avec 12 000 DH de publicité et 80 nouveaux clients, le coût d'acquisition est :", choix: ["80 DH", "150 DH", "960 DH", "1 200 DH"], bonne: 1, explication: "12 000 / 80." },
      { q: "La valeur vie client se calcule par :", choix: ["Prix × quantité vendue", "Marge par achat × achats par an × durée de la relation", "Publicité / clients", "Chiffre d'affaires total / clients"], bonne: 1, explication: "LTV." },
      { q: "L'avantage déloyal du Lean Canvas désigne :", choix: ["Une pratique illégale", "Ce qui ne peut pas être facilement copié ou acheté", "Une subvention", "Un prix bas"], bonne: 1, explication: "Réseau, savoir-faire, données exclusives." },
    ],
  },
  3: {
    titre: "Le plan d'affaires et les prévisions financières",
    description: "Plan d'affaires : structure, plan de financement initial, BFR de démarrage, compte de résultat prévisionnel, CAF, seuil de rentabilité, point mort et scénarios.",
    resume: md`
## L'essentiel — Plan d'affaires et prévisions

- **Plan d'affaires** : vérifier la cohérence et la viabilité, convaincre banques, investisseurs, programmes d'appui.
- Structure : résumé, équipe, offre, marché, stratégie commerciale, organisation, statut, prévisions sur 3 ans, risques.
- **Plan de financement initial** : besoins (investissements, frais, **BFR**, trésorerie de départ) = ressources (apports, prêts, prêts d'honneur, subventions, investisseurs).
- **BFR** = stocks + créances clients − dettes fournisseurs ; estimé en jours de CA ou d'achats.
- Compte de résultat prévisionnel : CA − charges variables = marge ; − charges fixes (dont amortissements, intérêts) = résultat ; IS à 20 % en 2026.
- **CAF** ≈ résultat net + dotations aux amortissements ; elle doit couvrir les remboursements d'emprunt.
- $SR = \dfrac{\text{charges fixes}}{\text{taux de marge sur coûts variables}}$ ; marge de sécurité = CA − SR ; point mort = SR / CA × 12 mois.
- Présenter des **scénarios** et un plan de trésorerie mensuel de la première année.
`,
    exercices: md`
### Exercice 2 — Seuil de rentabilité en quantités

Un atelier de fabrication de sacs en cuir vend ses sacs 50 DH pièce (prix de gros) ; le coût variable unitaire est de 30 DH ; les charges fixes annuelles sont de 180 000 DH. Le chiffre d'affaires prévu est de 600 000 DH.

1. Calculez le seuil de rentabilité en valeur et en quantité.
2. Calculez la marge de sécurité et le point mort.

<details><summary>Voir le corrigé</summary>

1. Marge unitaire = 20 DH ; taux de marge = 20 / 50 = 40 %. SR = 180 000 / 0,4 = **450 000 DH**, soit 180 000 / 20 = **9 000 sacs**.
2. Marge de sécurité = 600 000 − 450 000 = **150 000 DH** (25 % du CA) ; point mort = 450 000 / 600 000 × 12 = **9 mois**.

</details>

### Exercice 3 — BFR de démarrage

Une entreprise de distribution prévoit un chiffre d'affaires de 1 200 000 DH ; ses achats représentent 50 % du CA. Les clients paient à 45 jours, le stock représente 30 jours d'achats, les fournisseurs sont payés à 60 jours (montants hors taxes, année de 360 jours).

1. Calculez le BFR.
2. Que se passe-t-il si les fournisseurs exigent un paiement à 30 jours ?

<details><summary>Voir le corrigé</summary>

1. Clients : 1 200 000 / 360 × 45 = 150 000 DH ; stock : 600 000 / 360 × 30 = 50 000 DH ; fournisseurs : 600 000 / 360 × 60 = 100 000 DH. **BFR = 150 000 + 50 000 − 100 000 = 100 000 DH**.
2. Fournisseurs à 30 jours : 50 000 DH ; BFR = 150 000 + 50 000 − 50 000 = **150 000 DH** : il faut trouver 50 000 DH de financement supplémentaire. Le créateur doit négocier les délais de paiement et prévoir cette somme dans son plan de financement.

</details>
`,
    qcm: [
      { q: "Le plan d'affaires sert d'abord :", choix: ["À remplir une obligation fiscale", "À vérifier la viabilité du projet et à convaincre des partenaires", "À calculer la TVA", "À recruter"], bonne: 1, explication: "Banque, investisseurs, programmes d'appui." },
      { q: "Le plan de financement initial doit être :", choix: ["Déficitaire", "Équilibré entre besoins et ressources", "Limité aux investissements", "Établi sur 10 ans"], bonne: 1, explication: "Besoins = ressources." },
      { q: "Le BFR se calcule par :", choix: ["Stocks + créances clients − dettes fournisseurs", "Capital + emprunts", "CA − charges", "Trésorerie − stocks"], bonne: 0, explication: "Argent immobilisé par le cycle d'exploitation." },
      { q: "Oublier le BFR dans un plan de financement expose surtout à :", choix: ["Une perte comptable", "Une crise de trésorerie", "Une hausse de la TVA", "Une baisse du capital"], bonne: 1, explication: "Une entreprise rentable peut manquer de liquidités." },
      { q: "La CAF se calcule simplement par :", choix: ["CA − achats", "Résultat net + dotations aux amortissements", "Capital + réserves", "Résultat − dividendes"], bonne: 1, explication: "Ressource pour rembourser et investir." },
      { q: "Avec des charges fixes de 240 000 DH et un taux de marge sur coûts variables de 30 %, le seuil de rentabilité est :", choix: ["72 000 DH", "312 000 DH", "800 000 DH", "240 000 DH"], bonne: 2, explication: "240 000 / 0,3." },
      { q: "Un seuil de 600 000 DH pour un CA de 800 000 DH donne un point mort de :", choix: ["6 mois", "9 mois", "12 mois", "3 mois"], bonne: 1, explication: "600 / 800 × 12." },
      { q: "La marge de sécurité mesure :", choix: ["La baisse de CA supportable avant la perte", "Le bénéfice net", "Le capital social", "Le BFR"], bonne: 0, explication: "CA − SR." },
      { q: "Le remboursement du capital d'un emprunt est :", choix: ["Une charge du compte de résultat", "Un emploi de trésorerie financé par la CAF", "Un produit", "Une dotation"], bonne: 1, explication: "Seuls les intérêts sont des charges." },
      { q: "Présenter plusieurs scénarios dans un plan d'affaires sert à :", choix: ["Allonger le document", "Mesurer la sensibilité du projet aux hypothèses incertaines", "Éviter l'étude de marché", "Augmenter le capital"], bonne: 1, explication: "Pessimiste, central, optimiste." },
    ],
  },
  4: {
    titre: "Statut juridique et financement de la création",
    description: "Choisir entre entreprise individuelle, auto-entrepreneur, SARL, SAS et SA ; financer la création (Intelaka, Tamwilcom, loi 15-18, investisseurs) ; dilution.",
    resume: md`
## L'essentiel — Statut et financement

- **Entreprise individuelle** : pas de société, responsabilité sur le patrimoine personnel, IR.
- **Auto-entrepreneur** (loi 114-13) : IR de 0,5 % (commerce, industrie, artisanat) ou 1 % (services) du CA **encaissé** ; plafonds 500 000 et 200 000 DH ; pas de déduction des charges.
- **SARL** (1 à 50 associés, capital libre), **SAS** (loi 19-20, souplesse statutaire, investisseurs), **SA** (300 000 DH minimum) : responsabilité limitée, IS (20 % en 2026 pour la plupart des PME).
- Critères : responsabilité, associés et investisseurs, fiscalité, crédibilité, coût, protection sociale.
- Amorçage : apport, **love money**, prêt d'honneur, subventions ; démarrage : **Intelaka**, garantie **Tamwilcom**, crédit-bail ; croissance : **business angels**, capital-risque.
- **Financement collaboratif** (loi 15-18) : prêt, capital, don, plateformes agréées.
- $\text{Post-money} = \dfrac{\text{montant investi}}{\text{part obtenue}}$ ; pre-money = post-money − montant investi.
- **Dilution** : part après levée = part avant × (1 − part cédée).
`,
    exercices: md`
### Exercice 2 — Auto-entrepreneur ou SARL ?

Hicham, consultant en logistique, prévoit un chiffre d'affaires de 180 000 DH la première année (avec plusieurs clients), puis de 350 000 DH la troisième année. Ses charges réelles sont faibles la première année, puis de 120 000 DH la troisième (assistant à temps partiel, local).

1. Calculez son impôt la première année en auto-entrepreneur.
2. Peut-il rester auto-entrepreneur la troisième année ? Quel statut adopter ?
3. Avec une SARL à associé unique la troisième année, calculez l'IS sur le bénéfice (sans tenir compte de sa rémunération ni des dividendes).

<details><summary>Voir le corrigé</summary>

1. Prestations de services : 180 000 × 1 % = **1 800 DH** (sous le plafond de 200 000 DH).
2. Non : 350 000 DH dépasse le plafond de **200 000 DH** des services (le régime est perdu si le dépassement se répète deux années consécutives). De plus, avec 120 000 DH de charges, un régime qui les déduit devient intéressant : une **SARL à associé unique** (ou un régime d'IR au résultat réel).
3. Bénéfice = 350 000 − 120 000 = 230 000 DH ; IS = 230 000 × 20 % = **46 000 DH**. Dans la réalité, la rémunération de Hicham (déductible) réduirait ce bénéfice, mais serait soumise à l'IR.

</details>

### Exercice 3 — Deux levées successives

Les trois fondateurs d'une start-up détiennent chacun un tiers du capital. Ils lèvent 400 000 DH pour 20 %, puis, deux ans plus tard, 2 000 000 DH pour 25 %.

1. Calculez les valorisations post-money et pre-money de chaque levée.
2. Quelle est la part de chaque fondateur et du premier investisseur après la seconde levée ?

<details><summary>Voir le corrigé</summary>

1. Première levée : post-money = 400 000 / 0,2 = **2 000 000 DH** ; pre-money = **1 600 000 DH**. Seconde levée : post-money = 2 000 000 / 0,25 = **8 000 000 DH** ; pre-money = **6 000 000 DH**.
2. Chaque fondateur : 1/3 × 0,8 × 0,75 = **20 %** ; premier investisseur : 20 % × 0,75 = **15 %** ; second investisseur : **25 %**. Les fondateurs gardent ensemble 60 %. La part de chacun vaut 20 % × 8 000 000 = 1 600 000 DH, contre un tiers de 1 600 000 DH (533 333 DH) avant la première levée.

</details>
`,
    qcm: [
      { q: "L'impôt de l'auto-entrepreneur prestataire de services est de :", choix: ["0,5 % du CA encaissé", "1 % du CA encaissé", "20 % du bénéfice", "10 % du CA"], bonne: 1, explication: "0,5 % pour le commerce, l'industrie et l'artisanat." },
      { q: "Le plafond de CA de l'auto-entrepreneur pour les services est de :", choix: ["80 000 DH", "200 000 DH", "500 000 DH", "1 000 000 DH"], bonne: 1, explication: "500 000 DH pour le commerce, l'industrie et l'artisanat." },
      { q: "Le capital d'une SARL est :", choix: ["De 300 000 DH minimum", "Fixé librement par les statuts", "De 10 000 DH obligatoirement", "Interdit"], bonne: 1, explication: "Le minimum a été supprimé." },
      { q: "La SAS a été introduite au Maroc par :", choix: ["La loi 19-20", "La loi 114-13", "La loi 15-18", "La loi 88-17"], bonne: 0, explication: "En 2021, dans la loi 5-96." },
      { q: "Le love money désigne :", choix: ["Un crédit bancaire", "Les apports de la famille et des amis", "Une subvention publique", "Un fonds de capital-risque"], bonne: 1, explication: "Fréquent au stade de l'amorçage." },
      { q: "Le prêt d'honneur est :", choix: ["Un prêt à l'entreprise avec garantie", "Un prêt personnel sans intérêt ni garantie au créateur", "Une subvention", "Une prise de participation"], bonne: 1, explication: "Il renforce les fonds propres et facilite le crédit." },
      { q: "Tamwilcom intervient principalement en :", choix: ["Garantissant des crédits bancaires aux TPME", "Collectant la TVA", "Immatriculant les sociétés", "Contrôlant la Bourse"], bonne: 0, explication: "Ex-Caisse centrale de garantie." },
      { q: "Un investisseur apporte 500 000 DH pour 25 %. La valorisation post-money est :", choix: ["500 000 DH", "1 500 000 DH", "2 000 000 DH", "125 000 DH"], bonne: 2, explication: "500 000 / 0,25." },
      { q: "Dans le cas précédent, la valorisation pre-money est :", choix: ["1 500 000 DH", "2 000 000 DH", "2 500 000 DH", "500 000 DH"], bonne: 0, explication: "2 000 000 − 500 000." },
      { q: "Un fondateur à 60 % qui cède 20 % du capital à un investisseur détient ensuite :", choix: ["40 %", "48 %", "60 %", "80 %"], bonne: 1, explication: "60 % × 0,8." },
    ],
  },
  5: {
    titre: "Le cadrage d'un projet",
    description: "Cadrer un projet : triangle coût-délai-qualité, cycle de vie, maîtrise d'ouvrage et d'œuvre, parties prenantes, charte, objectifs SMART, WBS et matrice RACI.",
    resume: md`
## L'essentiel — Cadrer un projet

- **Projet** : activités temporaires pour un résultat unique, sous contraintes de coût, délai et qualité ; différent des opérations courantes.
- **Triangle** contenu-qualité / coût / délai : agir sur l'un modifie les autres.
- Cycle de vie : initialisation, planification, exécution, suivi et maîtrise, clôture ; **jalons** de décision.
- **MOA** (besoin, financement, réception), **MOE** (réalisation), chef de projet, comité de pilotage, sponsor.
- Parties prenantes : matrice **pouvoir / intérêt** (gérer de près, satisfaire, informer, surveiller).
- **Charte** : contexte, objectifs, périmètre inclus et exclu, livrables, budget, délai, jalons, acteurs, risques.
- Objectifs **SMART** : spécifiques, mesurables, atteignables, réalistes, temporellement définis.
- **WBS** : livrables puis lots de travail ; règle des **100 %** ; un responsable par lot.
- **RACI** : réalise, rend compte (un seul A), consulté, informé.
`,
    exercices: md`
### Exercice 2 — Projet ou opération ?

Classez : a) préparer les commandes quotidiennes d'un entrepôt ; b) déménager l'entrepôt dans une zone logistique ; c) facturer les clients chaque mois ; d) obtenir une certification de qualité pour la première fois ; e) organiser la participation à un salon à Dubaï.

<details><summary>Voir le corrigé</summary>

a) **Opération** (répétitive, permanente). b) **Projet** (unique, temporaire, délai et budget). c) **Opération**. d) **Projet** (le maintien de la certification devient ensuite une opération). e) **Projet**.

</details>

### Exercice 3 — Estimer la charge à partir de la WBS

Un projet d'implantation de quais comprend quatre lots : études (12 jours-homme d'ingénieur à 2 500 DH par jour), travaux (sous-traités pour 380 000 DH), formation (6 jours-homme de formateur à 2 000 DH) et pilotage (10 % du total des trois autres lots).

1. Calculez le coût de chaque lot et le budget total.
2. Que manque-t-il pour un budget complet ?

<details><summary>Voir le corrigé</summary>

1. Études : 12 × 2 500 = 30 000 DH ; travaux : 380 000 DH ; formation : 6 × 2 000 = 12 000 DH ; sous-total 422 000 DH ; pilotage : 42 200 DH. **Budget = 464 200 DH**.
2. Une **réserve pour risques** (provision pour aléas), les coûts internes non chiffrés (temps des utilisateurs), les équipements éventuels, et l'échéancier des dépenses dans le temps (chapitre 7).

</details>
`,
    qcm: [
      { q: "Un projet se caractérise par :", choix: ["Des activités permanentes et répétitives", "Des activités temporaires pour un résultat unique", "L'absence de budget", "L'absence de délai"], bonne: 1, explication: "Contrairement aux opérations courantes." },
      { q: "Le triangle du projet relie :", choix: ["Prix, produit, place", "Contenu-qualité, coût et délai", "Fournisseurs, clients, État", "Stock, transport, entrepôt"], bonne: 1, explication: "Trois contraintes liées." },
      { q: "Le maître d'ouvrage :", choix: ["Réalise les travaux", "Exprime le besoin, finance et réceptionne", "Est toujours un sous-traitant", "Rédige le code informatique"], bonne: 1, explication: "C'est le client du projet." },
      { q: "Le maître d'œuvre :", choix: ["Finance le projet", "Réalise le projet", "Est un client final", "Est une partie prenante passive"], bonne: 1, explication: "Équipe interne ou prestataire." },
      { q: "Une partie prenante à fort pouvoir et fort intérêt doit être :", choix: ["Surveillée seulement", "Gérée de près", "Ignorée", "Informée une fois"], bonne: 1, explication: "Matrice pouvoir / intérêt." },
      { q: "Dans SMART, le M signifie :", choix: ["Moderne", "Mesurable", "Mensuel", "Motivant"], bonne: 1, explication: "On doit pouvoir vérifier l'atteinte." },
      { q: "La règle des 100 % de la WBS signifie :", choix: ["Chaque lot coûte 100 DH", "Les éléments d'un niveau couvrent exactement le niveau supérieur", "Le projet est fini à 100 %", "Tout le monde travaille à 100 %"], bonne: 1, explication: "Ni plus ni moins." },
      { q: "Dans une matrice RACI, le A désigne :", choix: ["Celui qui réalise", "Celui qui rend compte et valide", "Celui qui est consulté", "Celui qui est informé"], bonne: 1, explication: "Un seul A par lot." },
      { q: "La dérive du contenu provient surtout :", choix: ["D'un périmètre flou et de demandes ajoutées en cours de route", "D'une WBS trop détaillée", "D'objectifs SMART", "D'un comité de pilotage"], bonne: 0, explication: "Préciser ce qui est hors périmètre." },
      { q: "La charte de projet est validée par :", choix: ["Les fournisseurs", "Le maître d'ouvrage ou le comité de pilotage", "Les clients finaux", "L'administration fiscale"], bonne: 1, explication: "Elle autorise officiellement le projet." },
    ],
  },
  6: {
    titre: "La planification d'un projet",
    description: "Planifier un projet : estimation à trois points, méthode MPM, dates au plus tôt et au plus tard, marges, chemin critique, Gantt et lissage.",
    resume: md`
## L'essentiel — Planifier

- Tâches : durée, **antériorités**, ressources.
- Trois estimations : $t_e = \dfrac{o + 4m + p}{6}$ ; $\sigma = \dfrac{p - o}{6}$.
- **MPM** (Roy, 1958) : tâches sur les sommets, pas de tâches fictives ; PERT : tâches sur les arcs.
- Au plus tôt : début = **max** des fins au plus tôt des antécédentes ; durée du projet = plus grande fin au plus tôt.
- Au plus tard : fin = **min** des débuts au plus tard des successeurs ; début = fin − durée.
- **Marge totale** = début tard − début tôt (sans retarder le projet) ; **marge libre** = min(débuts tôt des successeurs) − fin tôt (sans retarder un successeur).
- **Chemin critique** : tâches de marge totale nulle ; pour raccourcir le projet, on agit sur elles.
- **Gantt** : barres sur une échelle de temps, jalons, avancement ; construit après le réseau.
- **Lissage** : décaler dans les marges pour aplanir la charge sans changer la durée ; **nivellement** : allonger si les ressources manquent.
`,
    exercices: md`
### Exercice 2 — Trois estimations

Pour trois tâches, on estime (en jours) : T1 : o = 4, m = 6, p = 14 ; T2 : o = 3, m = 3, p = 3 ; T3 : o = 5, m = 8, p = 17.

1. Calculez la durée espérée et l'écart-type de chaque tâche.
2. Quelle tâche est la plus incertaine ?

<details><summary>Voir le corrigé</summary>

1. T1 : (4 + 24 + 14) / 6 = **7 jours**, σ = 10 / 6 = **1,67** ; T2 : **3 jours**, σ = **0** ; T3 : (5 + 32 + 17) / 6 = **9 jours**, σ = 12 / 6 = **2**.
2. **T3**, dont l'écart-type est le plus élevé ; si elle est critique, c'est elle qu'il faut surveiller en priorité.

</details>

### Exercice 3 — Marges

Un projet comprend : P (3 j, —), Q (5 j, après P), R (2 j, après P), S (4 j, après R), T (2 j, après Q et S).

1. Calculez la durée du projet, les marges totales et libres.
2. Quel est le chemin critique ?

<details><summary>Voir le corrigé</summary>

1. Au plus tôt : P 0-3 ; Q 3-8 ; R 3-5 ; S 5-9 ; T 9-11. **Durée 11 jours.** Au plus tard : T 9-11 ; S 5-9 ; Q 4-9 ; R 3-5 ; P 0-3. Marges totales : P 0 ; Q **1** ; R 0 ; S 0 ; T 0. Marges libres : Q : 9 − 8 = **1** ; les autres 0.
2. Chemin critique : **P – R – S – T** (3 + 2 + 4 + 2 = 11).

</details>
`,
    qcm: [
      { q: "Avec o = 2, m = 5 et p = 14, la durée espérée est :", choix: ["5", "6", "7", "21"], bonne: 1, explication: "(2 + 20 + 14) / 6 = 6." },
      { q: "Dans la méthode MPM, les tâches sont placées :", choix: ["Sur les arcs", "Sur les sommets", "Dans un tableau sans graphe", "Sur une carte"], bonne: 1, explication: "PERT les place sur les arcs." },
      { q: "Le début au plus tôt d'une tâche avec deux antécédentes finissant au plus tôt en 6 et 9 est :", choix: ["6", "9", "15", "7,5"], bonne: 1, explication: "On prend le maximum." },
      { q: "La fin au plus tard d'une tâche dont les successeurs commencent au plus tard en 12 et 10 est :", choix: ["10", "12", "22", "11"], bonne: 0, explication: "On prend le minimum." },
      { q: "La marge totale se calcule par :", choix: ["Début tard − début tôt", "Fin tôt − début tôt", "Durée − marge libre", "Fin tard + durée"], bonne: 0, explication: "Retard possible sans retarder le projet." },
      { q: "Une tâche avec une marge totale de 4 et une marge libre de 0 :", choix: ["Est critique", "Retarde un successeur dès qu'elle prend du retard", "Ne peut jamais être décalée", "N'a pas de successeur"], bonne: 1, explication: "Elle consomme la marge de ses successeurs." },
      { q: "Le chemin critique est formé des tâches :", choix: ["Les plus longues", "De marge totale nulle", "Les plus chères", "Sans antériorité"], bonne: 1, explication: "Tout retard retarde le projet." },
      { q: "Le diagramme de Gantt représente :", choix: ["Les tâches par des barres sur une échelle de temps", "Les coûts cumulés", "Les risques", "Les parties prenantes"], bonne: 0, explication: "Avec jalons et avancement." },
      { q: "Le lissage des ressources consiste à :", choix: ["Allonger le projet", "Décaler des tâches dans leurs marges pour aplanir la charge", "Supprimer des tâches", "Augmenter les durées"], bonne: 1, explication: "Sans changer la durée du projet." },
      { q: "Pour réduire la durée d'un projet, on doit raccourcir :", choix: ["Les tâches à forte marge", "Les tâches critiques", "Le Gantt", "Les jalons"], bonne: 1, explication: "En vérifiant qu'un autre chemin ne devient pas critique." },
    ],
  },
  7: {
    titre: "Budget, suivi par la valeur acquise et risques",
    description: "Budget de projet et courbe en S, valeur acquise (PV, EV, AC, CPI, SPI, EAC), matrice des risques, valeur attendue, réserve pour aléas et clôture.",
    resume: md`
## L'essentiel — Budget, suivi et risques

- Budget construit à partir de la **WBS**, plus une **réserve pour aléas** et une réserve de direction ; budget cumulé = **courbe en S**.
- **PV** : budget du travail prévu ; **EV** : budget du travail accompli ; **AC** : coût réel du travail accompli.
- $CV = EV - AC$ ; $SV = EV - PV$ ; $CPI = EV/AC$ ; $SPI = EV/PV$ (inférieurs à 1 = dépassement, retard).
- $EAC = BAC / CPI$ ; $ETC = EAC - AC$ ; $VAC = BAC - EAC$ ; durée estimée ≈ durée prévue / SPI.
- Un écart déclenche analyse des causes et action ; tout changement passe par une demande validée.
- Risque : événement incertain qui affecte un objectif ; **criticité** = probabilité × impact.
- Réponses : **éviter**, **réduire**, **transférer**, **accepter**.
- **Valeur attendue** = probabilité × coût ; réserve pour aléas ≈ somme des valeurs attendues.
- **Clôture** : réception, transfert à l'exploitation, contrats, bilan, retour d'expérience.
`,
    exercices: md`
### Exercice 2 — Lire des indices

Pour trois projets, on relève : A : CPI = 1,10 ; SPI = 0,90. B : CPI = 0,85 ; SPI = 1,05. C : CPI = 1,00 ; SPI = 1,00. Le budget total de chacun est de 500 000 DH.

1. Interprétez chaque situation.
2. Calculez le coût final estimé de A et de B.

<details><summary>Voir le corrigé</summary>

1. **A** : économe (1,10 DH de travail par dirham) mais **en retard** (90 % du travail prévu). **B** : **en avance** mais en **dépassement** de coût (0,85 DH de travail par dirham). **C** : conforme au plan.
2. A : EAC = 500 000 / 1,10 = **454 545 DH** ; B : EAC = 500 000 / 0,85 = **588 235 DH**.

</details>

### Exercice 3 — Classer les risques

Un projet de déménagement d'entrepôt identifie quatre risques (probabilité et impact notés de 1 à 5) : R1 casse pendant le transfert (P 3, I 2) ; R2 indisponibilité du nouveau WMS le jour J (P 2, I 5) ; R3 grève des transporteurs (P 1, I 4) ; R4 erreurs de stock à la reprise (P 4, I 4).

1. Calculez la criticité de chaque risque et classez-les.
2. Proposez une réponse pour les deux plus critiques.

<details><summary>Voir le corrigé</summary>

1. R1 = 6 ; R2 = 10 ; R3 = 4 ; R4 = **16**. Ordre : **R4**, **R2**, R1, R3.
2. R4 (erreurs de stock) : **réduire** par un inventaire complet avant le transfert, l'étiquetage SSCC des palettes et un double contrôle à la reprise. R2 (WMS indisponible) : **réduire** par des tests de charge et une répétition générale, et prévoir une procédure de secours (préparation sur listes) ; éventuellement **transférer** par une clause de garantie de service avec l'éditeur.

</details>
`,
    qcm: [
      { q: "La valeur acquise (EV) est :", choix: ["Le budget du travail prévu", "Le budget du travail réellement accompli", "Le coût réel", "Le budget total"], bonne: 1, explication: "Avancement réel × budget." },
      { q: "Le CPI se calcule par :", choix: ["AC / EV", "EV / AC", "EV / PV", "PV / AC"], bonne: 1, explication: "Performance des coûts." },
      { q: "Un SPI de 0,8 signifie :", choix: ["Une avance de 20 %", "Que le travail accompli représente 80 % du travail prévu", "Un dépassement de coût de 20 %", "Une fin de projet"], bonne: 1, explication: "Le projet est en retard." },
      { q: "Avec EV = 300 000 et AC = 360 000, l'écart de coût est :", choix: ["+60 000", "−60 000", "0,83", "660 000"], bonne: 1, explication: "CV = EV − AC." },
      { q: "Avec un budget total de 1 000 000 DH et un CPI de 0,8, le coût final estimé est :", choix: ["800 000 DH", "1 000 000 DH", "1 250 000 DH", "1 800 000 DH"], bonne: 2, explication: "1 000 000 / 0,8." },
      { q: "Si AC est inférieur à PV, on peut conclure :", choix: ["Que le projet est économe", "Rien sans connaître EV", "Que le projet est en avance", "Que le projet est terminé"], bonne: 1, explication: "Il peut simplement être en retard." },
      { q: "La criticité d'un risque se mesure par :", choix: ["Probabilité + impact", "Probabilité × impact", "Impact seul", "Coût du projet"], bonne: 1, explication: "Pour le classer dans la matrice." },
      { q: "Souscrire une assurance est une réponse de type :", choix: ["Éviter", "Réduire", "Transférer", "Accepter"], bonne: 2, explication: "Le coût est reporté sur l'assureur." },
      { q: "Un risque de probabilité 20 % et de coût 500 000 DH a une valeur attendue de :", choix: ["20 000 DH", "100 000 DH", "500 000 DH", "2 500 000 DH"], bonne: 1, explication: "0,2 × 500 000." },
      { q: "Le retour d'expérience intervient surtout :", choix: ["Au lancement", "À la clôture du projet", "Jamais", "Avant la charte"], bonne: 1, explication: "Pour améliorer les projets suivants." },
    ],
  },
};

export default chapitres;
