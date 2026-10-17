// Droit pénal général (Droit S2) — compléments par chapitre : description SEO, résumé, exercices 2 et 3, QCM.
const md = String.raw;

const chapitres = {
  1: {
    titre: "Le droit pénal : notion, sources et principe de légalité",
    description: "Droit pénal général : définition (article 1 du Code pénal), fonctions de la peine, sources, principe de légalité et interprétation stricte.",
    resume: md`
## L'essentiel — Notion, sources, légalité

- **Droit pénal** : définit les infractions et les sanctions ; article 1 du **Code pénal** (dahir du 26 novembre 1962) : le trouble social justifie peines et mesures de sûreté.
- Droit pénal **général** (règles communes) / **spécial** (chaque infraction) ; procédure pénale (loi 22-01) ; criminologie.
- Nature mixte : ordre public, action publique, mais aussi protection des intérêts privés et action civile.
- Fonctions de la peine : rétribution, intimidation (générale, spéciale), neutralisation, réinsertion.
- Écoles : classique (Beccaria, 1764), positiviste (Lombroso, Ferri), défense sociale nouvelle (Marc Ancel, 1954).
- Sources : Constitution (articles 23 et 71), Code pénal, lois spéciales (52-05, 103-13, 43-05…), conventions internationales ; pas la coutume ni la jurisprudence pour incriminer.
- **Légalité** (article 3) : pas d'infraction ni de peine sans texte antérieur.
- Pour le législateur : textes clairs et précis ; pour le juge : **interprétation stricte**, pas d'analogie défavorable, le doute profite à l'accusé.
- Limite : individualisation de la peine (minimum et maximum, circonstances atténuantes, sursis).
`,
    exercices: md`
### Exercice 2 — Source valable ou non ?

Une infraction peut-elle résulter : 1) d'un arrêté municipal sur le stationnement, pris en application de la loi ; 2) d'une coutume locale qui punit le voleur de bétail ; 3) d'une loi votée par le Parlement ; 4) d'un arrêt de la Cour de cassation qui « crée » un délit nouveau ; 5) d'une convention internationale ratifiée qui demande aux États de punir la corruption d'agents étrangers ?

<details><summary>Voir le corrigé</summary>

1) Oui, pour une contravention, dans le cadre fixé par la loi. 2) Non : la coutume ne peut pas créer d'infraction. 3) Oui : c'est la source normale (article 71 de la Constitution). 4) Non : le juge interprète, il ne crée pas d'infraction. 5) La convention oblige l'État à incriminer, mais le juge a besoin d'un texte interne qui définit l'infraction et fixe la peine ; c'est pourquoi le législateur adapte le Code pénal.

</details>

### Exercice 3 — Dissertation : plan détaillé

Proposez un plan pour le sujet : « Le principe de légalité en droit pénal marocain ».

<details><summary>Voir le corrigé</summary>

*Introduction* : définition, origine (Beccaria, Déclaration de 1789), consécration (article 3 du Code pénal, articles 23 et 71 de la Constitution) ; problématique : garantie essentielle des libertés, le principe est-il absolu ?
**I. Un principe protecteur** — A. Fondements : sécurité juridique et séparation des pouvoirs. B. Conséquences : monopole de la loi, précision des textes, interprétation stricte, non-rétroactivité de la loi plus sévère.
**II. Un principe aménagé** — A. Le pouvoir d'appréciation du juge : interprétation téléologique, notions ouvertes, individualisation de la peine. B. Les sources concurrentes : règlements en matière de contraventions, conventions internationales, rétroactivité de la loi plus douce.
*Conclusion* : un principe toujours central, qui doit être protégé face à l'inflation des lois pénales spéciales.

</details>
`,
    qcm: [
      { q: "Le Code pénal marocain date de :", choix: ["1913", "1962", "2002", "2011"], bonne: 1, explication: "Dahir du 26 novembre 1962." },
      { q: "Le principe de légalité est posé par l'article :", choix: ["1 du Code pénal", "3 du Code pénal", "111 du Code pénal", "124 du Code pénal"], bonne: 1, explication: "Nul ne peut être condamné pour un fait non prévu par la loi." },
      { q: "La Constitution réserve à la loi la détermination des infractions à l'article :", choix: ["23", "71", "107", "133"], bonne: 1, explication: "Domaine de la loi ; l'article 23 protège la liberté." },
      { q: "L'analogie en droit pénal est admise :", choix: ["Toujours", "Lorsqu'elle est favorable au prévenu", "Lorsqu'elle aggrave la peine", "Jamais"], bonne: 1, explication: "L'analogie défavorable est interdite." },
      { q: "Des délits et des peines (1764) est l'œuvre de :", choix: ["Lombroso", "Beccaria", "Marc Ancel", "Montesquieu"], bonne: 1, explication: "Fondateur de l'école classique." },
      { q: "L'école positiviste italienne insiste sur :", choix: ["La légalité", "La dangerosité du délinquant", "La vengeance privée", "La gratuité de la justice"], bonne: 1, explication: "D'où les mesures de sûreté." },
      { q: "La prévention générale vise à dissuader :", choix: ["Le seul condamné", "L'ensemble des citoyens", "Les juges", "Les victimes"], bonne: 1, explication: "La prévention spéciale vise le condamné." },
      { q: "En cas de doute sur l'interprétation d'un texte pénal :", choix: ["Le juge condamne", "Le doute profite à l'accusé", "Le juge saisit le Parlement", "La victime décide"], bonne: 1, explication: "Conséquence de l'interprétation stricte." },
      { q: "La coutume peut-elle créer une infraction ?", choix: ["Oui, si elle est ancienne", "Non", "Oui, en milieu rural", "Oui, si le juge l'approuve"], bonne: 1, explication: "Seule la loi peut incriminer." },
      { q: "La loi relative aux peines alternatives est la loi :", choix: ["43-22", "22-01", "103-13", "52-05"], bonne: 0, explication: "Travail d'intérêt général, surveillance électronique, etc." },
    ],
  },

  2: {
    titre: "L'application de la loi pénale dans le temps et dans l'espace",
    description: "Loi pénale dans le temps et l'espace : non-rétroactivité, loi plus douce (articles 4 à 6 du Code pénal), territorialité, compétence extraterritoriale.",
    resume: md`
## L'essentiel — Temps et espace

- **Non-rétroactivité** de la loi plus sévère (article 4 du Code pénal ; article 6 de la Constitution).
- Plus sévère : crée ou élargit une infraction, aggrave la peine, supprime une excuse.
- **Loi plus douce** rétroactive tant que le jugement n'est pas définitif (article 6) ; comparaison **in concreto**.
- Suppression de l'infraction : plus de poursuites, **l'exécution de la peine cesse** (article 5).
- Lois de procédure et de compétence : application **immédiate** ; prescription acquise intangible.
- **Territorialité** (article 10) : toute personne sur le territoire, sauf immunités ; navires et aéronefs marocains (article 11).
- Infraction réputée commise au Maroc si **un élément constitutif** y a eu lieu (article 704 du Code de procédure pénale).
- Hors du territoire (articles 704 et suivants du Code de procédure pénale) : compétence personnelle active (crime ; délit avec double incrimination), passive, réelle, universelle.
- **Non bis in idem** ; le Maroc **n'extrade pas ses nationaux** ; entraide judiciaire, Interpol.
`,
    exercices: md`
### Exercice 2 — Plus douce ou plus sévère ?

Qualifiez la loi nouvelle : 1) elle supprime le délit d'émission de chèque sans provision dans certains cas de régularisation ; 2) elle ajoute une peine d'interdiction de conduire au délit de conduite en état d'ivresse ; 3) elle allonge le délai de garde à vue ; 4) elle porte le maximum d'un délit de 2 à 3 ans mais supprime le minimum d'un an ; 5) elle crée le délit de harcèlement sexuel dans l'espace public.

<details><summary>Voir le corrigé</summary>

1) Plus douce : rétroactive, et si l'incrimination disparaît pour ces faits, l'exécution des peines cesse. 2) Plus sévère : inapplicable aux faits antérieurs. 3) Loi de procédure : applicable immédiatement aux procédures en cours (avec le contrôle du respect des droits de la défense). 4) Loi mixte : comparaison in concreto ; elle est plus douce pour un prévenu qui encourt une peine faible (plus de minimum), plus sévère pour celui qui risque le maximum ; les dispositions divisibles suivent chacune leur règle. 5) Plus sévère : elle ne vise que les faits postérieurs (c'est l'apport de la loi 103-13 de 2018).

</details>

### Exercice 3 — Quelle compétence ?

La loi pénale marocaine est-elle compétente ? 1) Un Français vole un portefeuille à Marrakech ; 2) un Marocain commet un délit en Belgique, puni aussi par la loi belge, puis revient au Maroc ; 3) un étranger contrefait des billets de banque marocains à l'étranger ; 4) un vol est commis à bord d'un avion de Royal Air Maroc au-dessus de l'Atlantique.

<details><summary>Voir le corrigé</summary>

1) Oui : territorialité (article 10). 2) Oui, sous réserve de la double incrimination, remplie ici, et de la règle non bis in idem. 3) Oui : compétence réelle (atteinte à la monnaie nationale), quelle que soit la nationalité de l'auteur. 4) Oui : l'aéronef marocain est soumis à la loi marocaine où qu'il se trouve (article 11).

</details>
`,
    qcm: [
      { q: "La loi pénale plus sévère :", choix: ["Est rétroactive", "N'est pas rétroactive", "S'applique aux jugements définitifs", "S'applique au choix du juge"], bonne: 1, explication: "Article 4 du Code pénal." },
      { q: "La loi pénale plus douce s'applique aux faits antérieurs :", choix: ["Jamais", "Tant que le jugement n'est pas définitif", "Seulement aux crimes", "Seulement si le procureur l'accepte"], bonne: 1, explication: "Article 6 du Code pénal." },
      { q: "Si une loi supprime une infraction après une condamnation définitive :", choix: ["La peine continue d'être exécutée", "L'exécution de la peine cesse", "La peine est doublée", "Le condamné est rejugé"], bonne: 1, explication: "Article 5 du Code pénal." },
      { q: "Une loi qui modifie la compétence des tribunaux s'applique :", choix: ["Seulement aux faits futurs", "Immédiatement aux procédures en cours", "Jamais", "Après 10 ans"], bonne: 1, explication: "Loi de procédure." },
      { q: "La non-rétroactivité des lois figure dans la Constitution à l'article :", choix: ["6", "47", "71", "175"], bonne: 0, explication: "La loi ne peut avoir d'effet rétroactif." },
      { q: "Une infraction est réputée commise au Maroc lorsque :", choix: ["L'auteur est marocain", "Un de ses éléments constitutifs y a été accompli", "La victime y réside", "Le juge le décide"], bonne: 1, explication: "Article 704 du Code de procédure pénale." },
      { q: "Un crime commis à l'étranger par un Marocain :", choix: ["Ne peut jamais être jugé au Maroc", "Peut être jugé au Maroc", "Entraîne toujours l'extradition", "Relève du seul droit étranger"], bonne: 1, explication: "Compétence personnelle active." },
      { q: "La contrefaçon de la monnaie marocaine à l'étranger relève de la compétence :", choix: ["Territoriale", "Réelle", "Personnelle passive", "Arbitrale"], bonne: 1, explication: "Protection des intérêts fondamentaux de l'État." },
      { q: "Le Maroc extrade-t-il ses nationaux ?", choix: ["Oui, toujours", "Non", "Oui, vers l'Union européenne", "Oui, pour les délits"], bonne: 1, explication: "Il les juge lui-même." },
      { q: "La règle non bis in idem interdit :", choix: ["De juger un étranger", "De poursuivre deux fois une personne pour les mêmes faits", "D'appliquer la loi plus douce", "L'entraide judiciaire"], bonne: 1, explication: "Sous les conditions du Code de procédure pénale." },
    ],
  },

  3: {
    titre: "L'infraction : éléments constitutifs et classifications",
    description: "L'infraction en droit pénal marocain : éléments légal, matériel et moral, intention et imprudence, crimes, délits et contraventions (article 111).",
    resume: md`
## L'essentiel — L'infraction

- **Infraction** (article 110) : acte ou abstention contraire à la loi pénale et réprimé par elle.
- Trois éléments : **légal**, **matériel**, **moral** ; plus l'absence de fait justificatif et l'imputabilité.
- Élément matériel : commission ou **omission** (article 431) ; instantanée ou **continue** (recel, séquestration) ; simple, d'habitude ou complexe.
- Infractions **matérielles** (résultat exigé), **formelles** (consommées par l'acte), **obstacles** (comportement dangereux).
- Élément moral : **intention** (dol général, dol spécial) ; **mobile indifférent** à l'existence de l'infraction.
- Faute non intentionnelle : imprudence, négligence, inobservation des règlements (articles 432-433).
- Contraventions : faute matérielle, exonération par la seule force majeure.
- Classification (article 111) : **crimes** (réclusion de 5 à 30 ans, perpétuité, mort), **délits** (emprisonnement, amende de plus de 1 200 DH), **contraventions** (détention de moins d'un mois, amende de 30 à 1 200 DH), d'après la peine **encourue**.
- Intérêts : tentative, complicité, juridiction, prescription de l'action (15, 4, 1 an : article 5 du Code de procédure pénale).
`,
    exercices: md`
### Exercice 2 — Classer les infractions

Classez selon la durée et le résultat : 1) le meurtre ; 2) la séquestration d'une personne pendant trois jours ; 3) la conduite sous l'emprise de l'alcool ; 4) l'escroquerie ; 5) l'association de malfaiteurs.

<details><summary>Voir le corrigé</summary>

1) Instantanée et matérielle (la mort est exigée). 2) Continue : elle dure tant que la victime est privée de liberté. 3) Infraction obstacle, instantanée : punie avant tout accident. 4) Complexe et matérielle : manœuvres frauduleuses puis remise de fonds. 5) Infraction obstacle et continue : le groupement est puni avant toute infraction projetée.

</details>

### Exercice 3 — Intention ou imprudence ?

Qualifiez l'élément moral : a) un chasseur tire sur un buisson qui bouge, croyant à un sanglier, et blesse un randonneur ; b) un employé efface volontairement les fichiers de son employeur pour se venger d'un licenciement ; c) un automobiliste dépasse de 20 km/h la vitesse autorisée ; d) un père tue son fils gravement malade pour abréger ses souffrances.

<details><summary>Voir le corrigé</summary>

a) Faute non intentionnelle (imprudence) : blessures involontaires. b) Intention : il sait et veut détruire des données ; la vengeance est un mobile, indifférent. c) Contravention ou délit routier selon le texte : l'élément moral résulte de la seule violation de la règle. d) Intention de donner la mort : c'est un meurtre ; le mobile de compassion ne fait pas disparaître l'infraction, il peut seulement influer sur la peine.

</details>
`,
    qcm: [
      { q: "L'infraction est définie par l'article :", choix: ["1 du Code pénal", "110 du Code pénal", "124 du Code pénal", "3 du Code pénal"], bonne: 1, explication: "Acte ou abstention contraire à la loi pénale." },
      { q: "L'omission de porter secours est une infraction :", choix: ["De commission", "D'omission", "Continue", "D'habitude"], bonne: 1, explication: "Article 431 du Code pénal." },
      { q: "Le recel est une infraction :", choix: ["Instantanée", "Continue", "D'habitude", "Contraventionnelle"], bonne: 1, explication: "Elle dure tant que dure la détention." },
      { q: "L'empoisonnement est consommé même si la victime survit : c'est une infraction :", choix: ["Matérielle", "Formelle", "D'omission", "Involontaire"], bonne: 1, explication: "Le résultat n'est pas exigé." },
      { q: "Le mobile est en principe :", choix: ["Un élément de l'infraction", "Indifférent à l'existence de l'infraction", "Une cause de nullité", "Une circonstance aggravante obligatoire"], bonne: 1, explication: "Il peut influer sur la peine." },
      { q: "L'homicide involontaire est réprimé par l'article :", choix: ["392", "432", "505", "540"], bonne: 1, explication: "Faute d'imprudence ou de négligence." },
      { q: "La classification tripartite figure à l'article :", choix: ["16 du Code pénal", "111 du Code pénal", "114 du Code pénal", "146 du Code pénal"], bonne: 1, explication: "Crimes, délits, contraventions." },
      { q: "La réclusion à temps est une peine criminelle de :", choix: ["1 à 5 ans", "5 à 30 ans", "10 à 20 ans", "Plus de 30 ans"], bonne: 1, explication: "Article 16 du Code pénal." },
      { q: "La catégorie d'une infraction dépend de :", choix: ["La peine prononcée", "La peine encourue selon la loi", "La personnalité de l'auteur", "Le choix de la victime"], bonne: 1, explication: "Les circonstances atténuantes ne la changent pas." },
      { q: "L'action publique pour un délit se prescrit par :", choix: ["1 an", "4 ans", "10 ans", "15 ans"], bonne: 1, explication: "Article 5 du Code de procédure pénale." },
    ],
  },

  4: {
    titre: "La tentative et la participation criminelle",
    description: "Tentative punissable (articles 114 à 117 du Code pénal), désistement volontaire, infraction impossible, coaction et complicité (articles 128 à 130).",
    resume: md`
## L'essentiel — Tentative et participation

- **Iter criminis** : pensée, actes préparatoires, commencement d'exécution, consommation ; la pensée et les actes préparatoires ne sont pas punis, sauf infraction autonome (association de malfaiteurs, article 293).
- **Tentative** (article 114) : commencement d'exécution ou actes non équivoques + échec dû à une cause **indépendante** de la volonté de l'auteur.
- **Désistement volontaire** avant la consommation : pas de tentative ; **repentir actif** après : l'infraction demeure.
- Infraction **manquée** = tentative ; infraction **impossible** punissable (article 117).
- Crime : tentative toujours punie ; délit : si un texte le prévoit (article 115) ; contravention : jamais (article 116).
- **Coauteur** (article 128) : participe personnellement à l'exécution ; même peine que l'auteur.
- **Complicité** (article 129) : provocation ou instructions, fourniture de moyens, aide ou assistance, logement habituel de malfaiteurs.
- Conditions : fait principal punissable (crime ou délit), acte positif antérieur ou concomitant, intention.
- Répression (article 130) : peine de l'infraction ; circonstances personnelles propres à chacun, circonstances objectives communes.
`,
    exercices: md`
### Exercice 2 — Acte préparatoire ou commencement d'exécution ?

Qualifiez : 1) acheter une cagoule et des gants ; 2) escalader le mur d'une villa la nuit avec un sac vide ; 3) verser du poison dans le verre de la victime, qui renverse le verre par hasard ; 4) se présenter au guichet d'une banque avec un faux chèque, que l'employé refuse ; 5) faire le tour d'un magasin pour repérer les caméras.

<details><summary>Voir le corrigé</summary>

1) Acte préparatoire : non punissable comme tentative. 2) Commencement d'exécution d'un vol avec escalade (l'acte tend directement à la soustraction, l'intention est claire). 3) Infraction manquée de l'empoisonnement, qui est d'ailleurs une infraction formelle : elle peut être consommée par l'administration du produit selon le texte. 4) Commencement d'exécution d'une escroquerie (usage de faux), échec dû au refus de l'employé : tentative punissable, le texte prévoyant la tentative d'escroquerie. 5) Acte préparatoire.

</details>

### Exercice 3 — Complice ou non ?

Dites si la personne est complice : a) un chauffeur de taxi qui conduit, sans rien savoir, deux voleurs jusqu'au lieu du vol ; b) une employée qui donne aux cambrioleurs le code de l'alarme de son entreprise ; c) un voisin qui assiste au vol sans rien faire ; d) un ami qui avait promis, avant le vol, de cacher les objets volés et le fait ensuite ; e) un complice d'une contravention de tapage nocturne.

<details><summary>Voir le corrigé</summary>

a) Non : il n'a pas agi sciemment. b) Oui : instructions et fourniture d'un moyen, en connaissance de cause (article 129). c) Non, en principe : l'abstention ne constitue pas un mode de complicité ; on peut discuter la non-dénonciation selon les cas. d) Oui : l'aide est postérieure, mais elle avait été promise avant et a donc facilité l'action. e) Non : la complicité de contravention n'est pas punissable.

</details>
`,
    qcm: [
      { q: "Les actes préparatoires sont en principe :", choix: ["Punis comme la tentative", "Non punis", "Punis comme des contraventions", "Punis seulement la nuit"], bonne: 1, explication: "Sauf s'ils constituent une infraction autonome." },
      { q: "La tentative suppose un commencement d'exécution et :", choix: ["Un désistement volontaire", "Un échec dû à une cause indépendante de la volonté de l'auteur", "Un résultat atteint", "Un aveu"], bonne: 1, explication: "Article 114 du Code pénal." },
      { q: "La tentative de crime est :", choix: ["Toujours punissable", "Punissable seulement si un texte le prévoit", "Jamais punissable", "Une contravention"], bonne: 0, explication: "Article 114." },
      { q: "La tentative de délit est punissable :", choix: ["Toujours", "Si un texte spécial le prévoit", "Jamais", "Si la victime le demande"], bonne: 1, explication: "Article 115." },
      { q: "Tirer sur une personne déjà morte en la croyant vivante constitue :", choix: ["Un fait non punissable", "Une infraction impossible punissable", "Un désistement", "Un acte préparatoire"], bonne: 1, explication: "Article 117 du Code pénal." },
      { q: "Restituer la chose volée après le vol constitue :", choix: ["Un désistement volontaire", "Un repentir actif", "Une infraction impossible", "Une complicité"], bonne: 1, explication: "L'infraction est consommée ; la peine peut en tenir compte." },
      { q: "Le coauteur est défini à l'article :", choix: ["114", "128", "129", "130"], bonne: 1, explication: "Participation personnelle à l'exécution." },
      { q: "Fournir sciemment l'arme d'un crime est un acte de :", choix: ["Coaction", "Complicité", "Recel", "Tentative"], bonne: 1, explication: "Article 129, 2°." },
      { q: "La complicité de contravention est :", choix: ["Punissable", "Non punissable", "Un crime", "Punie d'une peine double"], bonne: 1, explication: "Article 129, dernier alinéa." },
      { q: "Le complice d'un crime encourt :", choix: ["La moitié de la peine", "La peine réprimant ce crime", "Une simple amende", "Aucune peine"], bonne: 1, explication: "Article 130 du Code pénal." },
    ],
  },

  5: {
    titre: "La responsabilité pénale et ses obstacles",
    description: "Responsabilité pénale : légitime défense et ordre de la loi (articles 124-125), contrainte, démence, ivresse, minorité, erreur et personnes morales.",
    resume: md`
## L'essentiel — Responsabilité pénale

- Principe (article 132) : toute personne saine d'esprit et capable de discernement est **personnellement** responsable.
- **Faits justificatifs** (objectifs, profitent à tous) / **causes de non-imputabilité** (subjectives, personnelles).
- Article 124 : **ordre de la loi** et **autorité légitime** (pas l'ordre manifestement illégal), **contrainte** irrésistible, **légitime défense**.
- Légitime défense : agression actuelle et injuste, défense nécessaire et **proportionnée**, de soi, d'autrui ou d'un bien.
- **Présomptions** (article 125) : repousser la nuit l'escalade ou l'effraction d'une maison habitée ; se défendre contre un vol ou un pillage avec violence.
- État de nécessité : pas de texte général ; applications particulières (article 453).
- **Démence** : irresponsabilité, internement (article 134) ; altération : responsabilité atténuée (article 135) ; **ivresse** volontaire : responsable (article 137).
- Majorité pénale : **18 ans** (article 458 du Code de procédure pénale) ; moins de 12 ans : irresponsable (article 138) ; 12-18 ans : responsabilité atténuée, mesures de protection (articles 139-140).
- Erreur de fait : supprime l'intention ; erreur de droit : sans effet (article 2) ; personnes morales : peines pécuniaires, accessoires, mesures réelles (article 127).
`,
    exercices: md`
### Exercice 2 — Justifié ou non ?

1) Un gardien de prison retient un détenu conformément à un mandat de dépôt ; 2) un policier frappe un suspect menotté sur ordre de son chef ; 3) une passante neutralise un agresseur qui menace une femme avec un couteau ; 4) un commerçant tire sur un voleur qui s'enfuit avec une boîte de biscuits ; 5) un conducteur percute une voiture parce qu'un camion l'a projeté sur elle.

<details><summary>Voir le corrigé</summary>

1) Justifié : ordre de la loi et autorité légitime. 2) Non justifié : l'ordre est manifestement illégal (atteinte à l'intégrité physique, interdite par l'article 22 de la Constitution). 3) Légitime défense d'autrui, si la riposte est proportionnée. 4) Non justifié : l'agression a cessé (le voleur fuit) et la riposte est disproportionnée au regard d'un bien de faible valeur. 5) Contrainte physique irrésistible (article 124, 2°) : pas d'infraction.

</details>

### Exercice 3 — Mineurs et troubles mentaux

Quel régime ? a) un garçon de 15 ans commet un vol de téléphone ; b) un adulte atteint d'une maladie mentale grave, qui abolissait son discernement au moment des faits, blesse un passant ; c) un adulte dont l'expertise révèle une altération partielle du discernement commet une escroquerie ; d) une jeune femme de 18 ans et 2 jours commet un délit.

<details><summary>Voir le corrigé</summary>

a) Responsabilité atténuée (12-18 ans) : juge des mineurs, mesures de protection en priorité, peine exceptionnelle et réduite. b) Irresponsabilité (article 134) ; internement judiciaire possible. c) Responsabilité atténuée (article 135) : peine réduite, soins possibles. d) Majeure pénalement : droit commun.

</details>
`,
    qcm: [
      { q: "Le principe de responsabilité personnelle figure à l'article :", choix: ["124 du Code pénal", "132 du Code pénal", "111 du Code pénal", "16 du Code pénal"], bonne: 1, explication: "Personne saine d'esprit et capable de discernement." },
      { q: "Un fait justificatif :", choix: ["Ne profite qu'à son auteur", "Efface le caractère illicite de l'acte pour tous les participants", "Aggrave la peine", "Ne concerne que les contraventions"], bonne: 1, explication: "C'est une cause objective." },
      { q: "La légitime défense exige une défense :", choix: ["Postérieure à l'agression", "Proportionnée à l'agression", "Toujours mortelle", "Autorisée par le juge"], bonne: 1, explication: "Article 124, 3°." },
      { q: "Repousser la nuit l'escalade d'une maison habitée bénéficie :", choix: ["D'une présomption de légitime défense", "D'une circonstance aggravante", "D'une simple excuse", "D'aucun régime particulier"], bonne: 0, explication: "Article 125 du Code pénal." },
      { q: "L'ordre manifestement illégal d'un supérieur :", choix: ["Justifie l'acte", "Ne justifie pas l'acte", "Transforme le crime en contravention", "Supprime la peine du supérieur"], bonne: 1, explication: "Exemple : la torture." },
      { q: "La personne en état de démence au moment des faits est :", choix: ["Pleinement responsable", "Irresponsable", "Responsable à moitié", "Condamnée à une amende"], bonne: 1, explication: "Article 134 ; internement possible." },
      { q: "L'ivresse volontaire :", choix: ["Supprime la responsabilité", "Ne supprime pas la responsabilité", "Est une légitime défense", "Rend l'infraction impossible"], bonne: 1, explication: "Article 137 du Code pénal." },
      { q: "La majorité pénale au Maroc est fixée à :", choix: ["12 ans", "16 ans", "18 ans", "21 ans"], bonne: 2, explication: "Article 458 du Code de procédure pénale." },
      { q: "Le mineur de moins de 12 ans est :", choix: ["Responsable", "Irresponsable pénalement", "Responsable si le crime est grave", "Jugé comme un majeur"], bonne: 1, explication: "Article 138 du Code pénal." },
      { q: "Une personne morale peut être condamnée :", choix: ["À l'emprisonnement", "À des peines pécuniaires et accessoires", "À la réclusion", "À aucune peine"], bonne: 1, explication: "Article 127 du Code pénal." },
    ],
  },

  6: {
    titre: "Les sanctions pénales : peines et mesures de sûreté",
    description: "Sanctions pénales au Maroc : peines criminelles, délictuelles et contraventionnelles, peines accessoires, peines alternatives (loi 43-22), mesures de sûreté.",
    resume: md`
## L'essentiel — Peines et mesures de sûreté

- **Peine** : fondée sur la faute ; **mesure de sûreté** : fondée sur la dangerosité ; toutes deux soumises à la légalité (article 8).
- Peines criminelles (article 16) : mort (fusillade, article 19 ; aucune exécution depuis 1993), réclusion perpétuelle, réclusion de **5 à 30 ans**, résidence forcée, dégradation civique.
- Peines délictuelles (article 17) : emprisonnement, amende **supérieure à 1 200 DH**.
- Peines contraventionnelles (article 18) : détention de **moins d'un mois**, amende de **30 à 1 200 DH**.
- Peines accessoires et additionnelles (article 36) : interdiction légale, dégradation civique, suspension de droits, privation de pensions, confiscation partielle, dissolution, publication.
- **Loi 43-22** : travail d'intérêt général, surveillance électronique, restriction de droits et mesures de contrôle ou de traitement, amende journalière.
- Domaine : délits punis jusqu'à 5 ans d'emprisonnement, hors infractions exclues et récidive ; non-respect = retour à l'emprisonnement.
- Mesures personnelles (article 61) : relégation, internement psychiatrique, placement thérapeutique, interdiction de séjour, interdiction professionnelle.
- Mesures réelles (article 62) : confiscation des choses dangereuses, fermeture d'établissement.
`,
    exercices: md`
### Exercice 2 — Peine ou mesure de sûreté ?

Qualifiez : 1) un emprisonnement de 2 ans ; 2) la fermeture d'un café où se pratiquait un trafic ; 3) l'internement d'un dément dangereux ; 4) une amende de 5 000 DH ; 5) la confiscation d'armes détenues illégalement ; 6) la dégradation civique.

<details><summary>Voir le corrigé</summary>

1) Peine principale délictuelle. 2) Mesure de sûreté réelle (article 62). 3) Mesure de sûreté personnelle (article 61). 4) Peine principale délictuelle (amende supérieure à 1 200 DH). 5) Mesure de sûreté réelle : choses dangereuses. 6) Peine : principale en matière criminelle (article 16) ou accessoire (article 36).

</details>

### Exercice 3 — Dissertation : plan détaillé

Proposez un plan pour le sujet : « Les peines alternatives en droit marocain : une révolution pénale ? »

<details><summary>Voir le corrigé</summary>

*Introduction* : surpopulation carcérale, effets négatifs des courtes peines ; loi 43-22 ; problématique : la loi transforme-t-elle la philosophie de la peine ou reste-t-elle un aménagement limité ?
**I. Une rupture dans la conception de la peine** — A. La réinsertion placée au premier plan : exécution en milieu ouvert, maintien des liens familiaux et professionnels. B. La diversification des sanctions : travail d'intérêt général, surveillance électronique, mesures de contrôle et de traitement, amende journalière.
**II. Une réforme encadrée** — A. Un domaine limité : délits, seuil de peine, infractions exclues, récidivistes écartés. B. Les conditions du succès : moyens matériels (bracelets, partenaires d'accueil), rôle du juge de l'application des peines, acceptation par l'opinion publique.
*Conclusion* : une évolution importante, dont l'effet dépendra de la pratique des juges et des moyens donnés à l'administration pénitentiaire.

</details>
`,
    qcm: [
      { q: "La mesure de sûreté est fondée sur :", choix: ["La faute", "La dangerosité", "Le mobile", "La fortune"], bonne: 1, explication: "Elle vise à prévenir de nouvelles infractions." },
      { q: "La réclusion à temps varie de :", choix: ["1 à 5 ans", "5 à 30 ans", "1 à 10 ans", "10 à 40 ans"], bonne: 1, explication: "Article 16 du Code pénal." },
      { q: "L'amende délictuelle est :", choix: ["De 30 à 1 200 DH", "Supérieure à 1 200 DH", "Inférieure à 30 DH", "Toujours d'un million de dirhams"], bonne: 1, explication: "Article 17 du Code pénal." },
      { q: "La peine de mort au Maroc :", choix: ["A été abolie en 2011", "Est prévue mais n'est plus exécutée depuis 1993", "Est exécutée chaque année", "N'a jamais existé"], bonne: 1, explication: "Moratoire de fait." },
      { q: "La loi sur les peines alternatives est la loi :", choix: ["43-22", "43-05", "22-01", "65-99"], bonne: 0, explication: "Insérée dans le Code pénal." },
      { q: "Le port d'un bracelet électronique est :", choix: ["Une mesure de sûreté réelle", "Une peine alternative", "Une peine criminelle", "Une peine contraventionnelle"], bonne: 1, explication: "Surveillance électronique." },
      { q: "Les peines alternatives sont exclues :", choix: ["Pour les délinquants primaires", "En cas de récidive", "Pour tous les délits", "Pour les étudiants"], bonne: 1, explication: "Et pour certaines infractions graves." },
      { q: "La fermeture d'un établissement ayant servi à l'infraction est :", choix: ["Une mesure de sûreté réelle", "Une peine principale", "Une contravention", "Une excuse"], bonne: 0, explication: "Article 62 du Code pénal." },
      { q: "L'internement psychiatrique judiciaire est :", choix: ["Une peine accessoire", "Une mesure de sûreté personnelle", "Une peine alternative", "Une amende"], bonne: 1, explication: "Article 61 du Code pénal." },
      { q: "Le principe de légalité des mesures de sûreté est posé à l'article :", choix: ["3", "8", "36", "111"], bonne: 1, explication: "Article 8 du Code pénal." },
    ],
  },

  7: {
    titre: "La personnalisation et l'extinction des peines",
    description: "Individualisation de la peine : excuses, circonstances atténuantes, récidive, concours, sursis, puis prescription, amnistie, grâce et réhabilitation.",
    resume: md`
## L'essentiel — Personnalisation et extinction

- **Individualisation** (article 141) : le juge choisit entre minimum et maximum selon la gravité et la personnalité.
- **Excuses légales** (articles 143-145) : définies par la loi, absolutoires (exemption) ou atténuantes (provocation, articles 416 et suivants).
- **Circonstances atténuantes** (articles 146-151) : appréciées librement, motivées, effets limités par la loi.
- **Circonstances aggravantes** : prévues par chaque texte (préméditation, nuit, arme, qualité de l'auteur).
- **Récidive** (articles 154-160) : nouvelle infraction après une condamnation définitive ; aggravation (jusqu'au double en matière délictuelle) ; circonstance personnelle.
- **Concours réel** (article 119) : non-cumul, une seule peine dans la limite de la plus forte (article 120) ; concours idéal : qualification la plus grave (article 118).
- **Sursis** (articles 55-57) : pas de condamnation antérieure à l'emprisonnement ; délai d'épreuve de **5 ans** ; révocation en cas de nouvelle condamnation.
- Action publique éteinte par la mort, la prescription (**15 / 4 / 1 an**, article 5 du Code de procédure pénale), l'amnistie, l'abrogation, la chose jugée.
- Peine éteinte (article 49) : exécution, mort, **amnistie** (loi, article 71 de la Constitution), **grâce** (Roi, article 58), prescription de la peine ; **réhabilitation** légale ou judiciaire.
`,
    exercices: md`
### Exercice 2 — Récidive ou concours ?

1) Saïd commet un vol en janvier, une escroquerie en mars, et il est jugé pour les deux en juin ; 2) Fatima, condamnée définitivement en 2022 à 18 mois d'emprisonnement pour abus de confiance, commet un vol en 2025 ; 3) Omar commet un délit en 2023, est condamné en première instance en 2024, fait appel, et commet un nouveau délit avant l'arrêt d'appel.

<details><summary>Voir le corrigé</summary>

1) Concours réel : aucune condamnation définitive entre les deux faits ; une seule peine dans la limite de la plus forte. 2) Récidive délictuelle : condamnation définitive à l'emprisonnement pour un délit contre les biens et nouveau délit assimilé dans les cinq ans. 3) Concours réel : la première condamnation n'était pas définitive (appel pendant) au moment du second délit.

</details>

### Exercice 3 — Amnistie, grâce, réhabilitation ou prescription ?

Identifiez le mécanisme : a) une loi efface toutes les condamnations pour certaines infractions électorales commises avant une date ; b) à l'occasion de la fête du Trône, un condamné voit sa peine réduite de six mois ; c) un ancien condamné obtient du tribunal, après plusieurs années de bonne conduite, l'effacement des incapacités liées à sa condamnation ; d) un délit commis il y a cinq ans n'a fait l'objet d'aucun acte de poursuite.

<details><summary>Voir le corrigé</summary>

a) Amnistie : loi, effet sur la condamnation elle-même. b) Grâce royale (article 58 de la Constitution) : réduction de la peine, la condamnation subsiste. c) Réhabilitation judiciaire. d) Prescription de l'action publique : le délai de 4 ans est écoulé sans acte interruptif, l'action est éteinte.

</details>
`,
    qcm: [
      { q: "Le pouvoir du juge d'individualiser la peine est posé par l'article :", choix: ["111", "141", "154", "49"], bonne: 1, explication: "Gravité de l'infraction et personnalité de l'auteur." },
      { q: "Les excuses légales sont :", choix: ["Librement appréciées par le juge", "Limitativement prévues par la loi", "Toujours absolutoires", "Réservées aux contraventions"], bonne: 1, explication: "Articles 143 à 145." },
      { q: "Les circonstances atténuantes doivent être :", choix: ["Prévues par un texte précis", "Motivées par le juge", "Demandées par la victime", "Accordées à tous"], bonne: 1, explication: "Articles 146 à 151." },
      { q: "La récidive suppose une condamnation antérieure :", choix: ["Non définitive", "Définitive", "Amnistiée", "Prononcée à l'étranger seulement"], bonne: 1, explication: "C'est l'avertissement de la justice." },
      { q: "En cas de concours réel d'infractions jugées ensemble :", choix: ["Les peines s'additionnent", "Une seule peine est prononcée", "Aucune peine n'est prononcée", "La peine est doublée"], bonne: 1, explication: "Non-cumul, article 120." },
      { q: "Le délai d'épreuve du sursis est de :", choix: ["1 an", "3 ans", "5 ans", "10 ans"], bonne: 2, explication: "Articles 55 à 57 du Code pénal." },
      { q: "L'action publique pour un crime se prescrit par :", choix: ["4 ans", "10 ans", "15 ans", "30 ans"], bonne: 2, explication: "Article 5 du Code de procédure pénale." },
      { q: "Le droit de grâce est exercé par :", choix: ["Le Parlement", "Le Roi", "Le ministre de la Justice", "La Cour de cassation"], bonne: 1, explication: "Article 58 de la Constitution." },
      { q: "L'amnistie relève :", choix: ["D'un décret", "De la loi", "D'un arrêté du wali", "D'une décision du juge"], bonne: 1, explication: "Article 71 de la Constitution." },
      { q: "La réhabilitation a pour effet :", choix: ["D'annuler le procès", "D'effacer pour l'avenir les incapacités liées à la condamnation", "De doubler la peine", "D'interrompre la prescription"], bonne: 1, explication: "Légale ou judiciaire." },
    ],
  },
};

export default chapitres;
