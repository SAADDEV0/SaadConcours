// Droit de la famille (Droit S3) — compléments par chapitre : description SEO, résumé, exercices 2 et 3, QCM.
const md = String.raw;

const chapitres = {
  1: {
    titre: "Le droit de la famille : sources, principes et fiançailles",
    description: "Droit marocain de la famille : de la Moudawana de 1957 au Code de 2004 (loi 70-03), sources, article 400, principes directeurs et fiançailles.",
    resume: md`
## L'essentiel — Sources et fiançailles

- Droit de la famille : mariage, dissolution, filiation, capacité, testament et successions ; statut personnel, largement d'ordre public.
- Étapes : fiqh malékite ; **Moudawana de 1957-1958** ; réforme de **1993** ; **Code de la famille, loi 70-03**, en vigueur le **5 février 2004** ; réforme engagée en 2023 (propositions de décembre 2024).
- Sources : Code, **article 400** (rite malékite et ijtihad), Constitution (articles 19 et 32), conventions (CEDAW, droits de l'enfant), lois 15-01 (kafala), 37-99 (état civil), 41-10 (fonds d'entraide familiale), jurisprudence.
- Champ (article 2) : Marocains, réfugiés, couples mixtes ; Marocains juifs : statut personnel hébraïque.
- Sections de la justice de la famille ; **ministère public partie principale** (article 3).
- Principes : direction conjointe de la famille (article 4), réciprocité (article 51), protection de l'enfant, contrôle judiciaire, mariage à **18 ans**, tutelle matrimoniale droit de la femme majeure (article 24), conciliation.
- **Fiançailles** (article 5) : promesse mutuelle ; libre rupture (article 6).
- Réparation si un acte a causé un préjudice (article 7) ; présents restituables sauf rupture imputable au demandeur (article 8) ; sadaq restitué (article 9).
- Grossesse pendant les fiançailles : article 156.
`,
    exercices: md`
### Exercice 2 — Vrai ou faux ?

1) Le Code de la famille a été adopté par le Parlement. 2) Les fiancés sont obligés de se marier. 3) Le Code s'applique aux Marocains de confession juive. 4) Le ministère public est partie principale dans les actions relatives au Code. 5) En cas de silence du Code, le juge applique le droit français.

<details><summary>Voir le corrigé</summary>

1) Vrai : loi 70-03, promulguée en février 2004. 2) Faux : chacun peut mettre fin aux fiançailles (article 6). 3) Faux : ils restent soumis au statut personnel hébraïque marocain (article 2). 4) Vrai (article 3). 5) Faux : il se réfère au rite malékite et à l'ijtihad (article 400).

</details>

### Exercice 3 — Dissertation : plan détaillé

Proposez un plan pour le sujet : « Le Code de la famille de 2004 : rupture ou continuité ? »

<details><summary>Voir le corrigé</summary>

*Introduction* : contexte (débat national, commission royale, adoption par le Parlement) ; problématique : le Code rompt-il avec la Moudawana ou la prolonge-t-il ?
**I. Une rupture dans les principes** — A. L'égalité et la direction conjointe de la famille (article 4), la fin du devoir d'obéissance, la tutelle matrimoniale facultative pour la femme majeure. B. Le renforcement du contrôle judiciaire : âge du mariage, polygamie, divorce, protection des enfants.
**II. Une continuité dans les références** — A. L'ancrage dans la charia et le rite malékite (préambule, article 400) ; le maintien de la polygamie encadrée et des règles successorales. B. Une réforme par l'ijtihad, qui appelle de nouvelles évolutions (réforme engagée en 2023).
*Conclusion* : une réforme profonde réalisée dans le cadre du référentiel religieux, illustrant la méthode marocaine de conciliation.

</details>
`,
    qcm: [
      { q: "Le Code de la famille porte le numéro de loi :", choix: ["70-03", "15-01", "37-99", "41-10"], bonne: 0, explication: "Promulgué par dahir du 3 février 2004." },
      { q: "La première Moudawana date de :", choix: ["1913", "1957-1958", "1993", "2004"], bonne: 1, explication: "Codification du rite malékite." },
      { q: "En cas de silence du Code de la famille, il est fait référence :", choix: ["Au droit français", "Au rite malékite et à l'ijtihad", "À la coutume locale seule", "Au droit international privé"], bonne: 1, explication: "Article 400." },
      { q: "Selon l'article 4, la famille est placée sous la direction :", choix: ["Du mari", "Des deux époux", "Du père de l'épouse", "Du juge"], bonne: 1, explication: "Rupture avec le devoir d'obéissance." },
      { q: "Le ministère public dans les affaires de famille est :", choix: ["Absent", "Partie principale", "Simple témoin", "Arbitre"], bonne: 1, explication: "Article 3 du Code." },
      { q: "Les fiançailles sont :", choix: ["Un mariage", "Une promesse mutuelle de mariage", "Un contrat de vente", "Un acte adoulaire obligatoire"], bonne: 1, explication: "Article 5." },
      { q: "Chacun des fiancés peut-il rompre les fiançailles ?", choix: ["Non", "Oui", "Seulement le fiancé", "Seulement avec l'accord du juge"], bonne: 1, explication: "Article 6." },
      { q: "La rupture de fiançailles ouvre droit à réparation lorsque :", choix: ["Elle est sans motif", "Elle s'accompagne d'un acte ayant causé un préjudice", "Les familles le demandent", "Le sadaq a été versé"], bonne: 1, explication: "Article 7." },
      { q: "Les Marocains de confession juive sont soumis :", choix: ["Au Code de la famille", "Au statut personnel hébraïque marocain", "Au droit français", "Au DOC"], bonne: 1, explication: "Article 2 du Code." },
      { q: "L'égalité entre les hommes et les femmes est consacrée par l'article :", choix: ["19 de la Constitution", "47 de la Constitution", "71 de la Constitution", "133 de la Constitution"], bonne: 0, explication: "Avec la recherche de la parité." },
    ],
  },

  2: {
    titre: "La formation du mariage",
    description: "Formation du mariage au Maroc : article 4, capacité à 18 ans et mariage des mineurs, wilaya, sadaq, empêchements, acte adoulaire et polygamie encadrée.",
    resume: md`
## L'essentiel — La formation du mariage

- **Article 4** : pacte fondé sur le consentement mutuel, union légale et durable entre un homme et une femme, sous la direction des deux époux.
- Offre et acceptation (article 10) ; conditions de validité (article 13).
- **Capacité** : **18 ans grégoriens** (article 19) ; mineurs : autorisation motivée du juge, expertise médicale ou enquête sociale, sans recours (articles 20 à 22).
- **Wilaya** : droit de la femme (article 24) ; la femme majeure conclut elle-même ou délègue (article 25).
- **Sadaq** : propriété de l'épouse (article 29), modération (article 28), ne peut être supprimé.
- Empêchements **perpétuels** (parenté, alliance, allaitement) et **temporaires** (article 39 : cinquième épouse, femme mariée ou en 'idda, différence de religion, triple divorce, deux sœurs).
- Forme : dossier (article 65), autorisation du juge, **deux adouls**, acte homologué ; preuve par l'acte (article 16), reconnaissance de mariage transitoire jusqu'en 2019 ; Marocains à l'étranger (article 14).
- **Polygamie** : interdite si injustice à craindre ou clause de l'épouse (article 40) ; autorisation pour motif objectif et exceptionnel et ressources suffisantes (article 41) ; information des épouses.
- Sanctions : mariage **nul**, **vicié**, **annulable** pour contrainte ou dol (article 63).
`,
    exercices: md`
### Exercice 2 — Empêchement ou non ?

Le mariage est-il possible ? 1) Un homme avec la sœur de sa femme, encore mariée avec lui ; 2) un homme avec la fille de la femme qui l'a allaité ; 3) une femme divorcée depuis un mois ; 4) un musulman avec une chrétienne ; 5) une musulmane avec un non-musulman.

<details><summary>Voir le corrigé</summary>

1) Non : empêchement temporaire (on ne peut pas être marié simultanément à deux sœurs). 2) Non : empêchement perpétuel par allaitement (elle est sa sœur de lait). 3) Non tant que dure la période de viduité ('idda), empêchement temporaire. 4) Oui : elle appartient aux gens du Livre. 5) Non : empêchement temporaire (article 39), qui disparaît en cas de conversion.

</details>

### Exercice 3 — La clause de monogamie

Lors de la conclusion de son mariage, Nora a fait inscrire dans l'acte que son mari ne prendra pas d'autre épouse. Cinq ans plus tard, son mari demande l'autorisation de se remarier. Que doit décider le tribunal ? Que peut faire Nora si le mari passe outre ?

<details><summary>Voir le corrigé</summary>

Selon l'article 40, la polygamie est interdite lorsque l'épouse a stipulé que son mari ne prendra pas d'autre épouse. Le tribunal doit rejeter la demande. Si le mari parvient à conclure un autre mariage en dissimulant sa situation, Nora peut demander le divorce pour manquement à une condition de l'acte (article 99), et le mari s'expose à des poursuites pour manœuvres frauduleuses.

</details>
`,
    qcm: [
      { q: "La capacité matrimoniale est acquise à :", choix: ["16 ans", "18 ans grégoriens révolus", "20 ans", "21 ans"], bonne: 1, explication: "Article 19 du Code de la famille." },
      { q: "Le mariage d'un mineur suppose :", choix: ["L'accord des seuls parents", "Une décision motivée du juge après expertise médicale ou enquête sociale", "L'accord du wali", "Une simple déclaration aux adouls"], bonne: 1, explication: "Article 20." },
      { q: "Pour la femme majeure, la présence du wali est :", choix: ["Obligatoire", "Facultative", "Interdite", "Remplacée par le juge"], bonne: 1, explication: "Articles 24 et 25." },
      { q: "Le sadaq appartient :", choix: ["Au père de l'épouse", "À l'épouse", "Au couple", "Au mari"], bonne: 1, explication: "Article 29." },
      { q: "Le mariage est conclu devant :", choix: ["Un notaire", "Deux adouls", "Un officier d'état civil seul", "Le ministère public"], bonne: 1, explication: "Après autorisation du juge chargé du mariage." },
      { q: "L'allaitement crée un empêchement :", choix: ["Temporaire", "Perpétuel", "Inexistant", "Seulement pour les femmes"], bonne: 1, explication: "Assimilé à la parenté." },
      { q: "La polygamie est interdite lorsque :", choix: ["Le mari a plus de 40 ans", "L'épouse a stipulé dans l'acte que son mari ne prendra pas d'autre épouse", "Le mari habite en ville", "Le mariage a plus de 10 ans"], bonne: 1, explication: "Article 40." },
      { q: "L'autorisation de polygamie exige notamment :", choix: ["Un motif objectif et exceptionnel et des ressources suffisantes", "L'accord du wali", "Une fatwa", "Un référendum familial"], bonne: 0, explication: "Article 41." },
      { q: "Le moyen de preuve du mariage est :", choix: ["La Fatiha", "L'acte de mariage", "La cohabitation", "Le témoignage d'un voisin"], bonne: 1, explication: "Article 16." },
      { q: "Le mariage conclu sous la contrainte est :", choix: ["Inexistant", "Annulable à la demande de la victime", "Toujours valable", "Validé après un an"], bonne: 1, explication: "Article 63." },
    ],
  },

  3: {
    titre: "Les effets du mariage",
    description: "Effets du mariage au Maroc : droits et devoirs réciproques (article 51), droits des enfants, pension de l'épouse, séparation des biens et article 49.",
    resume: md`
## L'essentiel — Effets du mariage

- **Article 51** : cohabitation, respect et affection, gestion conjointe du foyer, **concertation**, bons rapports avec les familles, héritage réciproque ; fin du devoir d'obéissance.
- Manquement persistant : exécution ou divorce pour discorde (article 52).
- Expulsion abusive du domicile : le ministère public ramène l'époux expulsé (article 53).
- **Article 54** : droits des enfants (santé, identité, filiation, garde, pension, éducation, protection).
- **Nafaqa** (article 189) : alimentation, habillement, soins, instruction, logement ; fixée selon ressources, besoins, coût de la vie.
- Entretien de l'épouse par l'époux dès la consommation (article 194) ; causes : mariage, parenté, engagement (article 187).
- Garanties : jugement exécutoire, délit d'**abandon de famille**, **fonds d'entraide familiale** (loi 41-10).
- **Article 49** : patrimoines **séparés** ; accord possible sur les biens acquis pendant le mariage, dans un **document distinct** ; à défaut, preuve du travail, des efforts et des charges de chacun.
- Conditions stipulées dans l'acte (article 47) ; présomptions pour les biens ménagers (article 34).
`,
    exercices: md`
### Exercice 2 — Valable ou non ?

Les clauses suivantes, insérées dans un acte de mariage, sont-elles valables ? 1) L'épouse pourra poursuivre ses études de médecine ; 2) l'époux ne prendra pas d'autre épouse ; 3) l'épouse renonce à toute pension ; 4) les époux partageront par moitié les biens acquis pendant le mariage (accord distinct) ; 5) l'époux pourra interdire à l'épouse de rendre visite à ses parents.

<details><summary>Voir le corrigé</summary>

1) Valable (article 47). 2) Valable (article 40). 3) Non valable : l'entretien de l'épouse est un effet légal du mariage, d'ordre public. 4) Valable, dans un document distinct de l'acte (article 49). 5) Non valable : contraire à l'article 51, qui impose de bons rapports avec les familles.

</details>

### Exercice 3 — Fixer une pension

Un fonctionnaire gagne 9 000 DH nets par mois. Son épouse, sans revenus, réclame une pension pour elle et leurs deux enfants scolarisés. Quels éléments le juge prend-il en compte ? Proposez une démarche de fixation.

<details><summary>Voir le corrigé</summary>

Le juge tient compte des ressources du débiteur (9 000 DH), de la situation des créanciers (épouse sans revenus, enfants scolarisés), du coût de la vie dans la ville et des usages du milieu (article 189). Il recense les besoins : alimentation, habillement, soins, scolarité, logement. Il fixe une pension pour l'épouse et une pour chaque enfant, en veillant à laisser au débiteur de quoi vivre. Il peut s'appuyer sur une expertise ou sur les pièces produites (fiches de paie, factures de scolarité, loyer). La pension pourra être révisée si la situation change.

</details>
`,
    qcm: [
      { q: "Les droits et devoirs réciproques des époux sont énumérés à l'article :", choix: ["4", "49", "51", "194"], bonne: 2, explication: "Cohabitation, respect, gestion conjointe, concertation." },
      { q: "Le Code de 2004 a supprimé :", choix: ["Le sadaq", "Le devoir d'obéissance de l'épouse", "L'héritage entre époux", "La pension"], bonne: 1, explication: "Remplacé par la réciprocité." },
      { q: "L'entretien de l'épouse est dû par l'époux dès :", choix: ["Les fiançailles", "La consommation du mariage", "La naissance du premier enfant", "Le divorce"], bonne: 1, explication: "Article 194." },
      { q: "Le régime des biens des époux au Maroc repose sur :", choix: ["La communauté universelle", "La séparation des patrimoines", "La communauté réduite aux acquêts", "La propriété du mari"], bonne: 1, explication: "Article 49." },
      { q: "L'accord sur les biens acquis pendant le mariage est consigné :", choix: ["Dans l'acte de mariage obligatoirement", "Dans un document distinct", "Oralement", "Devant le wali"], bonne: 1, explication: "Article 49." },
      { q: "À défaut d'accord, la contribution de chaque époux est établie :", choix: ["Par tirage au sort", "Selon les règles générales de preuve", "Par le wali", "Au profit exclusif du mari"], bonne: 1, explication: "Travail, efforts et charges de chacun." },
      { q: "Le fonds d'entraide familiale a été créé par la loi :", choix: ["41-10", "70-03", "15-01", "103-13"], bonne: 0, explication: "Géré par la CDG." },
      { q: "Le non-paiement d'une pension fixée par jugement constitue :", choix: ["Une simple faute civile", "Le délit d'abandon de famille", "Une contravention", "Un motif de nullité du mariage"], bonne: 1, explication: "Code pénal." },
      { q: "En cas d'expulsion abusive du domicile conjugal, intervient :", choix: ["Le wali de région", "Le ministère public", "Le conseil communal", "Le notaire"], bonne: 1, explication: "Article 53." },
      { q: "Les droits des enfants à l'égard de leurs parents sont énumérés à l'article :", choix: ["51", "54", "163", "400"], bonne: 1, explication: "Protection, identité, éducation." },
    ],
  },

  4: {
    titre: "La dissolution du mariage",
    description: "Dissolution du mariage au Maroc : talaq sous contrôle judiciaire, divorce pour discorde (chiqaq), divorce pour causes, consentement mutuel et khol'.",
    resume: md`
## L'essentiel — La dissolution du mariage

- Causes (article 71) : décès, résiliation, **talaq**, **divorce judiciaire**, **consentement mutuel**, **khol'** ; dissolution exceptionnelle, règle du moindre mal (article 70).
- **Talaq** (article 78) : par l'époux ou l'épouse délégataire (tamlik), sous contrôle judiciaire.
- Procédure : demande d'autorisation, **réconciliation** (arbitres ; deux tentatives à trente jours d'intervalle s'il y a des enfants), fixation des droits, **consignation sous 30 jours** sinon renonciation (article 86), autorisation, homologation.
- Droits de l'épouse (article 84) : reliquat du sadaq, pension de viduité, **mut'a** (durée du mariage, situation de l'époux, motifs, abus).
- **Chiqaq** (articles 94 à 97) : ouvert aux deux époux, sans cause à prouver ; jugement dans les **six mois** ; réparation selon la responsabilité de chacun ; première cause de divorce.
- **Tatliq** (article 98) : manquement à une condition, **préjudice** (preuve par tous moyens), défaut d'entretien, absence (plus d'un an ou peine de plus de trois ans), vice rédhibitoire, serment de continence (délai de quatre mois).
- **Consentement mutuel** (article 114) ; **khol'** (article 115) : contrepartie de l'épouse, jamais sur les droits des enfants (article 119), restitution en cas de contrainte (article 117).
- **Révocable** (talaq ordinaire, reprise pendant la 'idda) / **irrévocable** (troisième talaq, avant consommation, consentement mutuel, khol', divorce judiciaire sauf exceptions).
`,
    exercices: md`
### Exercice 2 — Quelle procédure ?

Proposez la procédure la plus adaptée : 1) un mari emprisonné pour cinq ans ; 2) deux époux qui veulent se séparer d'un commun accord et ont déjà réglé la garde des enfants ; 3) une épouse dont le mari ne paie plus aucune pension malgré un salaire confortable ; 4) une épouse qui ne reproche rien de précis à son mari mais ne supporte plus la vie commune.

<details><summary>Voir le corrigé</summary>

1) Divorce judiciaire pour absence (condamnation à une peine de plus de trois ans, article 106). 2) Divorce par consentement mutuel (article 114). 3) Divorce judiciaire pour défaut d'entretien (articles 102 et 103), ou chiqaq. 4) Chiqaq (articles 94 à 97), ou khol' si elle accepte de verser une contrepartie.

</details>

### Exercice 3 — Calcul des sommes à consigner

Dans une procédure de talaq, le tribunal fixe : reliquat du sadaq 10 000 DH ; pension de viduité 2 500 DH par mois pendant trois mois ; mut'a 40 000 DH ; logement pendant la viduité 2 000 DH par mois pendant trois mois ; pension de deux enfants pour le premier mois 1 500 DH chacun. Quel montant l'époux doit-il consigner, et dans quel délai ?

<details><summary>Voir le corrigé</summary>

Sadaq : 10 000 DH. Pension de viduité : 2 500 × 3 = 7 500 DH. Mut'a : 40 000 DH. Logement : 2 000 × 3 = 6 000 DH. Pension des enfants : 1 500 × 2 = 3 000 DH. Total : 10 000 + 7 500 + 40 000 + 6 000 + 3 000 = 66 500 DH, à consigner au greffe dans un délai de trente jours (article 83) ; à défaut, il est réputé avoir renoncé à sa demande (article 86).

</details>
`,
    qcm: [
      { q: "Le talaq est défini à l'article :", choix: ["71", "78", "94", "115"], bonne: 1, explication: "Dissolution exercée sous contrôle judiciaire." },
      { q: "L'époux qui ne consigne pas les droits de l'épouse et des enfants dans le délai :", choix: ["Est condamné pénalement", "Est réputé avoir renoncé à sa demande", "Obtient quand même le divorce", "Perd la garde"], bonne: 1, explication: "Délai de trente jours." },
      { q: "Le divorce pour discorde (chiqaq) est ouvert :", choix: ["À l'épouse seulement", "À l'époux seulement", "Aux deux époux", "Au ministère public"], bonne: 2, explication: "Article 94." },
      { q: "Dans le chiqaq, le tribunal doit statuer dans un délai de :", choix: ["Un mois", "Trois mois", "Six mois", "Un an"], bonne: 2, explication: "Article 97." },
      { q: "Le don de consolation (mut'a) est évalué en tenant compte notamment :", choix: ["De la durée du mariage et de la situation de l'époux", "Du nombre de témoins", "De la nationalité", "Du sadaq seulement"], bonne: 0, explication: "Article 84." },
      { q: "Le divorce pour absence peut être demandé si l'époux est condamné à une peine supérieure à :", choix: ["Six mois", "Un an", "Trois ans", "Dix ans"], bonne: 2, explication: "Article 106." },
      { q: "Dans le khol', la contrepartie est offerte par :", choix: ["L'époux", "L'épouse", "Le tribunal", "Le wali"], bonne: 1, explication: "Article 115." },
      { q: "La contrepartie du khol' ne peut pas porter sur :", choix: ["Une somme d'argent", "Les droits des enfants", "Un bien meuble", "Le reliquat du sadaq"], bonne: 1, explication: "Article 119." },
      { q: "Le divorce par consentement mutuel est prévu à l'article :", choix: ["98", "112", "114", "123"], bonne: 2, explication: "Avec ou sans conditions." },
      { q: "Le divorce prononcé pour la troisième fois est :", choix: ["Révocable", "Irrévocable", "Nul", "Provisoire"], bonne: 1, explication: "Article 122." },
    ],
  },

  5: {
    titre: "Les effets de la dissolution : viduité, garde et pension des enfants",
    description: "Après le divorce au Maroc : durée de la 'idda, garde des enfants (hadana), remariage de la mère, droit de visite, pension et logement des enfants.",
    resume: md`
## L'essentiel — Viduité, garde, pension

- **'Idda** : pas de viduité si divorce avant consommation (sauf décès) ; décès : **4 mois et 10 jours** (article 132) ; divorce : **trois périodes intermenstruelles** ou **trois mois** (article 136) ; grossesse : jusqu'à l'accouchement (article 133).
- Pendant l'idda : logement ; pension si divorce révocable ou grossesse.
- **Hadana** (article 163) : protéger, élever, veiller aux intérêts ; aux deux parents pendant le mariage (article 164).
- Durée : jusqu'à la **majorité** pour les deux sexes ; à **15 ans**, l'enfant choisit (article 166).
- Ordre (article 171) : **mère**, **père**, **grand-mère maternelle**, puis le parent le plus apte selon l'intérêt de l'enfant.
- Conditions (article 173) ; **remariage de la mère** sans déchéance si l'enfant a moins de **7 ans**, préjudice, maladie, nouvel époux parent ou représentant légal, mère représentante légale (article 175).
- Déchéance : silence d'un an (article 176), déménagement (article 178) ; voyage à l'étranger avec autorisation du représentant légal ou du juge (article 179) ; intérêt de l'enfant décisif (article 186).
- Visite : accord des parents ou décision du tribunal (articles 180 à 186).
- **Pension** (article 198) : jusqu'à la majorité, **25 ans** en cas d'études, fille jusqu'à ressources ou mariage, handicap sans limite ; contribution de la mère aisée (article 199) ; **logement** distinct (article 168) ; rémunération de la garde (article 167).
`,
    exercices: md`
### Exercice 2 — Calculer l'idda

Calculez la fin de la viduité : 1) Khadija, non enceinte, dont le mari est décédé le 1er mars ; 2) Sanaa, enceinte de cinq mois, divorcée le 10 janvier, qui accouche le 20 mai ; 3) Aicha, 58 ans, ménopausée, divorcée le 1er février ; 4) Hind, divorcée avant la consommation du mariage.

<details><summary>Voir le corrigé</summary>

1) Quatre mois et dix jours à compter du 1er mars : jusqu'au 10 juillet environ (article 132). 2) Jusqu'à l'accouchement, le 20 mai (article 133). 3) Trois mois : jusqu'au 1er mai (article 136). 4) Aucune viduité, le mariage n'ayant pas été consommé.

</details>

### Exercice 3 — L'ordre de la garde

La mère d'une fillette de 6 ans est décédée. Le père, souvent absent pour son travail à l'étranger, ne peut pas s'en occuper. La grand-mère maternelle, âgée de 60 ans et en bonne santé, demande la garde ; la tante paternelle aussi. Qui doit l'obtenir ?

<details><summary>Voir le corrigé</summary>

L'ordre légal (article 171) est : mère, père, grand-mère maternelle. La mère étant décédée, la garde revient au père ; s'il ne peut pas l'exercer ou y renonce, elle revient à la grand-mère maternelle, qui remplit les conditions de l'article 173. La tante paternelle ne vient qu'après, sur décision du tribunal. Le tribunal vérifiera toutefois l'intérêt de l'enfant (article 186) : conditions de logement, santé, liens affectifs. Le père, représentant légal, garde ses obligations de pension et de suivi.

</details>
`,
    qcm: [
      { q: "La viduité de la veuve non enceinte est de :", choix: ["Trois mois", "Quatre mois et dix jours", "Six mois", "Un an"], bonne: 1, explication: "Article 132." },
      { q: "La viduité de la femme enceinte prend fin :", choix: ["Après trois mois", "À l'accouchement", "Après un an", "Au jugement"], bonne: 1, explication: "Article 133." },
      { q: "La garde dure :", choix: ["Jusqu'à 12 ans pour le garçon", "Jusqu'à la majorité pour le garçon et la fille", "Jusqu'à 7 ans", "Jusqu'au mariage de l'enfant"], bonne: 1, explication: "Article 166." },
      { q: "L'enfant peut choisir le parent gardien à partir de :", choix: ["7 ans", "12 ans", "15 ans", "18 ans"], bonne: 2, explication: "Article 166." },
      { q: "Selon l'article 171, la garde revient d'abord :", choix: ["Au père", "À la mère", "À la grand-mère paternelle", "Au juge"], bonne: 1, explication: "Puis au père, puis à la grand-mère maternelle." },
      { q: "Le remariage de la mère n'entraîne pas la déchéance de la garde si l'enfant a moins de :", choix: ["3 ans", "7 ans", "10 ans", "15 ans"], bonne: 1, explication: "Article 175." },
      { q: "La pension est due à l'enfant qui poursuit ses études jusqu'à :", choix: ["18 ans", "21 ans", "25 ans", "30 ans"], bonne: 2, explication: "Article 198." },
      { q: "Le logement de l'enfant gardé est :", choix: ["Inclus dans la pension", "Distinct de la pension et des frais de garde", "À la charge de la mère", "Supprimé après le divorce"], bonne: 1, explication: "Article 168." },
      { q: "Le voyage à l'étranger de l'enfant gardé suppose :", choix: ["La seule décision de la mère", "L'autorisation du représentant légal ou du juge", "L'accord de l'école", "Aucune formalité"], bonne: 1, explication: "Article 179." },
      { q: "Le critère décisif dans les décisions relatives à la garde est :", choix: ["La fortune du père", "L'intérêt de l'enfant", "L'âge de la mère", "La volonté des grands-parents"], bonne: 1, explication: "Article 186." },
    ],
  },

  6: {
    titre: "La filiation et la kafala",
    description: "Filiation en droit marocain : nasab, présomption de paternité (article 154), aveu, rapports par erreur, expertise, adoption interdite et kafala (loi 15-01).",
    resume: md`
## L'essentiel — Filiation et kafala

- Filiation légitime ou illégitime (article 142) ; **nasab** : lien légitime père-enfant, tous les effets (article 150).
- **Filiation maternelle** : mêmes effets, légitime ou non (article 146) ; établie par l'accouchement, l'aveu ou le jugement (article 147).
- Filiation paternelle illégitime : **aucun effet** à l'égard du père (article 148) ; débat de réforme.
- Causes (article 152) : **rapports conjugaux**, **aveu du père**, **rapports par erreur** (choubha, article 155) ; fiançailles (article 156).
- Présomption (article 154) : naissance **au moins six mois** après le mariage, ou **dans l'année** après la séparation.
- Aveu (article 160) : père doué de raison, enfant de filiation inconnue, vraisemblance, accord de l'enfant majeur.
- Preuve par tous moyens, **dont l'expertise judiciaire** (article 158) ; désaveu par **li'an** ou expertise ordonnée (article 153).
- Enfant né hors mariage : rattaché à la mère ; état civil (loi 37-99) avec nom fictif du père.
- **Adoption nulle** (article 149) ; **kafala** (loi 15-01, 2002) : enfant déclaré abandonné par jugement, kafil apte, ordonnance du juge des tutelles ; pas de filiation ni de succession ; legs possible dans la limite du tiers.
`,
    exercices: md`
### Exercice 2 — Présomption de paternité ?

La présomption de l'article 154 s'applique-t-elle ? 1) Mariage le 1er mars, naissance le 15 octobre ; 2) divorce le 1er janvier, naissance le 20 novembre de la même année ; 3) divorce le 1er janvier, naissance le 15 février de l'année suivante ; 4) mariage le 1er juin, naissance le 1er août.

<details><summary>Voir le corrigé</summary>

1) Oui : plus de six mois après le mariage (sept mois et demi). 2) Oui : moins d'un an après la séparation. 3) Non : plus d'un an après la séparation ; l'enfant n'est pas rattaché à l'ex-mari, sauf aveu. 4) Non : deux mois seulement après le mariage ; filiation maternelle seule, sauf aveu du mari ou application de l'article 156 si les conditions sont réunies.

</details>

### Exercice 3 — Kafala ou testament ?

Un couple qui a recueilli par kafala un enfant de 3 ans s'inquiète de son avenir. 1) L'enfant héritera-t-il du couple ? 2) Comment le protéger financièrement ? 3) Peut-il porter le nom de famille du kafil ?

<details><summary>Voir le corrigé</summary>

1) Non : la kafala ne crée ni filiation ni droit successoral. 2) Le couple peut lui consentir des donations de son vivant et lui léguer par testament jusqu'au tiers de ses biens (article 277 et suivants du Code de la famille), sans avoir besoin de l'accord des héritiers, puisque l'enfant n'est pas héritier. 3) Une procédure permet au kafil de demander que l'enfant porte son nom de famille, sans que cela crée de filiation ; la mention de la kafala figure dans les registres.

</details>
`,
    qcm: [
      { q: "La filiation maternelle hors mariage :", choix: ["Ne produit aucun effet", "Produit les mêmes effets que la filiation légitime", "Est interdite", "Produit seulement le nom"], bonne: 1, explication: "Article 146." },
      { q: "La filiation paternelle illégitime :", choix: ["Produit tous les effets", "Ne produit aucun effet à l'égard du père", "Donne droit à la moitié de la succession", "Oblige le père à épouser la mère"], bonne: 1, explication: "Article 148." },
      { q: "Les causes de la filiation paternelle sont énumérées à l'article :", choix: ["142", "149", "152", "198"], bonne: 2, explication: "Rapports conjugaux, aveu, rapports par erreur." },
      { q: "Pour bénéficier de la présomption, l'enfant doit naître au moins :", choix: ["Trois mois après le mariage", "Six mois après le mariage", "Neuf mois après le mariage", "Un an après le mariage"], bonne: 1, explication: "Article 154." },
      { q: "L'expertise judiciaire est-elle un moyen de preuve de la filiation ?", choix: ["Non", "Oui", "Seulement pour la mère", "Seulement à l'étranger"], bonne: 1, explication: "Article 158." },
      { q: "Le mari peut désavouer un enfant né pendant le mariage par :", choix: ["Une simple déclaration", "Le li'an ou une expertise ordonnée par le tribunal", "Un acte adoulaire", "Le divorce"], bonne: 1, explication: "Article 153." },
      { q: "L'adoption (tabanni) en droit marocain est :", choix: ["Valable", "Nulle", "Valable si le juge l'autorise", "Valable à l'étranger seulement"], bonne: 1, explication: "Article 149." },
      { q: "La kafala est régie par la loi :", choix: ["15-01", "70-03", "37-99", "41-10"], bonne: 0, explication: "Loi de 2002 sur les enfants abandonnés." },
      { q: "L'enfant recueilli en kafala :", choix: ["Hérite de plein droit du kafil", "N'hérite pas de plein droit, mais peut recevoir un legs", "Perd tout droit à l'éducation", "Devient l'enfant légitime du kafil"], bonne: 1, explication: "Legs dans la limite du tiers." },
      { q: "L'enfant conçu pendant les fiançailles peut être rattaché au fiancé en vertu de l'article :", choix: ["154", "156", "160", "171"], bonne: 1, explication: "Sous conditions de publicité et de reconnaissance." },
    ],
  },

  7: {
    titre: "La capacité, la représentation légale, le testament et les successions",
    description: "Capacité et représentation légale (article 231), testament dans la limite du tiers, legs obligatoire et parts successorales dans le Code de la famille.",
    resume: md`
## L'essentiel — Capacité, testament, successions

- Capacité de **jouissance** (toute personne) / d'**exercice** (âge, état mental) (article 206).
- Moins de 12 ans : actes nuls ; 12 à 18 ans : capacité restreinte (avantageux valables, préjudiciables nuls, mixtes soumis au représentant) ; majorité à **18 ans** (article 209) ; émancipation à **16 ans** (article 218).
- Représentation légale (article 231) : **père**, **mère**, wassi du père, wassi de la mère, juge, moqaddem ; contrôle du juge des tutelles et autorisation des actes graves (article 271).
- **Testament** (article 277) : dans la limite du **tiers** ; pas de legs à un héritier sans validation des autres (article 280) ; révocable (article 284).
- **Legs obligatoire** (articles 369 à 372) : petits-enfants d'un fils ou d'une fille prédécédé(e), dans la limite du tiers.
- Ordre (article 322) : droits sur des biens déterminés, frais funéraires, **dettes**, **legs**, héritiers.
- Empêchements : homicide volontaire (article 333), différence de religion (article 332), filiation illégitime.
- Réservataires (parts fixes) et **agnatiques** (reliquat) ; époux 1/2 ou 1/4 ; épouse **1/4 ou 1/8** ; fille seule 1/2, deux filles 2/3 ; fils et fille : **double part au fils** ; mère 1/6 ou 1/3 ; père 1/6 et reliquat selon les cas.
- 'Awl (réduction) et radd (redistribution) ; débats de réforme.
`,
    exercices: md`
### Exercice 2 — Qui représente le mineur ?

Désignez le représentant légal : 1) le père est vivant et capable ; 2) le père est décédé sans testament, la mère est vivante ; 3) les deux parents sont décédés ; le père avait désigné un oncle comme wassi ; 4) les deux parents sont décédés sans désigner de wassi.

<details><summary>Voir le corrigé</summary>

1) Le père (article 231). 2) La mère majeure. 3) Le wassi désigné par le père (l'oncle), sous le contrôle du juge des tutelles. 4) Le juge, qui désigne un tuteur datif (moqaddem).

</details>

### Exercice 3 — Succession avec deux filles

Une femme décède en laissant un mari, deux filles et sa mère. La masse nette est de 360 000 DH. Calculez les parts (en appliquant si nécessaire la réduction proportionnelle).

<details><summary>Voir le corrigé</summary>

Parts fixes : mari 1/4 (la défunte a des enfants) ; deux filles 2/3 ; mère 1/6. Au dénominateur commun 12 : mari 3/12, filles 8/12, mère 2/12, total 13/12, supérieur à l'unité : on applique l'awl, le dénominateur devient 13. Mari : 360 000 × 3/13 ≈ 83 076,92 DH ; filles : 360 000 × 8/13 ≈ 221 538,46 DH, soit environ 110 769,23 DH chacune ; mère : 360 000 × 2/13 ≈ 55 384,62 DH. Total : 360 000 DH.

</details>
`,
    qcm: [
      { q: "L'enfant de moins de 12 ans est :", choix: ["Pleinement capable", "Dépourvu de capacité d'exercice", "Émancipé", "Capable pour les actes de commerce"], bonne: 1, explication: "Article 217." },
      { q: "Le mineur peut être émancipé à partir de :", choix: ["12 ans", "15 ans", "16 ans", "18 ans"], bonne: 2, explication: "Article 218." },
      { q: "Selon l'article 231, le premier représentant légal du mineur est :", choix: ["La mère", "Le père majeur", "Le juge", "Le grand-père"], bonne: 1, explication: "La mère vient à défaut du père." },
      { q: "Le testament ne peut porter que sur :", choix: ["La moitié des biens", "Le tiers des biens", "Le quart des biens", "La totalité des biens"], bonne: 1, explication: "Article 277." },
      { q: "Un legs au profit d'un héritier est valable :", choix: ["Toujours", "Si les autres héritiers le valident", "Jamais", "S'il est notarié"], bonne: 1, explication: "Article 280." },
      { q: "Le legs obligatoire bénéficie :", choix: ["Aux épouses", "Aux petits-enfants dont le parent est prédécédé", "Aux associations", "Aux frères du défunt"], bonne: 1, explication: "Articles 369 à 372." },
      { q: "Avant le partage entre héritiers, on paie :", choix: ["Les legs puis les dettes", "Les frais funéraires, les dettes puis les legs", "Seulement les legs", "Rien"], bonne: 1, explication: "Article 322." },
      { q: "L'épouse d'un défunt qui a des enfants reçoit :", choix: ["1/2", "1/4", "1/8", "1/3"], bonne: 2, explication: "1/4 en l'absence d'enfants." },
      { q: "Lorsqu'un fils et une fille héritent ensemble :", choix: ["Ils reçoivent des parts égales", "Le fils reçoit le double de la part de la fille", "La fille reçoit le double", "Le fils reçoit tout"], bonne: 1, explication: "Héritiers agnatiques." },
      { q: "Il n'y a pas de succession entre un musulman et un non-musulman selon l'article :", choix: ["322", "332", "369", "400"], bonne: 1, explication: "Empêchement de différence de religion." },
    ],
  },
};

export default chapitres;
