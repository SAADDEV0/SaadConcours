// Introduction à l'Étude du Droit (S1) — compléments par chapitre.
const md = String.raw;

export default {
  1: {
    titre: "La notion de droit et la règle de droit",
    resume: md`
## L'essentiel — Le droit et la règle de droit

- **Droit objectif** : ensemble des règles générales et obligatoires, sanctionnées par l'État ; **droits subjectifs** : prérogatives individuelles qu'il reconnaît à chacun.
- Caractères de la règle de droit : **générale et impersonnelle**, **abstraite**, **permanente**, **obligatoire**, **sanctionnée par l'État** (critère décisif).
- Règles **impératives** (d'ordre public : on ne peut y déroger) et **supplétives** (s'appliquent à défaut de volonté contraire).
- Droit, morale et religion diffèrent par la **source**, le **but** et surtout la **sanction** ; au Maroc, ces sphères se recoupent (Constitution, Code de la famille).
- Finalités : **justice**, **sécurité juridique**, **ordre social**, efficacité économique.
`,
    exercices: md`
### Exercice 2 — Droit objectif, droits subjectifs, règles impératives

1. Droit objectif ou droit subjectif ? a) Le Code du travail ; b) le droit de Samir d'être payé par son employeur ; c) le droit de propriété de Leila sur son appartement ; d) la loi sur la protection du consommateur.
2. Règle impérative ou supplétive ? a) Le salaire ne peut être inférieur au SMIG ; b) à défaut de clause, la livraison a lieu là où se trouve la chose ; c) l'interdiction de vendre des stupéfiants.
3. Un contrat de travail prévoit un salaire inférieur au SMIG, avec l'accord du salarié. Cette clause est-elle valable ?

<details><summary>Voir le corrigé</summary>

**1)** a) et d) **droit objectif** ; b) et c) **droits subjectifs**.

**2)** a) **impérative** ; b) **supplétive** ; c) **impérative**.

**3)** **Non** : la règle du SMIG est **d'ordre public** ; l'accord des parties ne permet pas d'y déroger. Le salarié peut réclamer le SMIG.

</details>
`,
    qcm: [
      { q: "Le critère décisif qui distingue la règle de droit de la règle morale est :", choix: ["Son caractère écrit", "La sanction par l'État", "Son ancienneté", "Sa généralité"], bonne: 1, explication: "La règle morale n'a qu'une sanction de conscience ou sociale." },
      { q: "Une règle supplétive s'applique :", choix: ["Toujours, sans exception", "À défaut de volonté contraire des parties", "Uniquement aux étrangers", "Seulement devant le juge pénal"], bonne: 1, explication: "Les parties peuvent l'écarter." },
      { q: "Le droit de propriété d'une personne sur sa voiture est :", choix: ["Un droit objectif", "Un droit subjectif", "Une règle supplétive", "Une coutume"], bonne: 1, explication: "C'est une prérogative individuelle." },
      { q: "La règle de droit est générale, c'est-à-dire :", choix: ["Elle vise une personne nommée", "Elle vise tous ceux qui se trouvent dans la situation décrite", "Elle s'applique au monde entier", "Elle est provisoire"], bonne: 1, explication: "Elle est impersonnelle." },
      { q: "La sécurité juridique est :", choix: ["Une sanction pénale", "Une finalité du droit (prévisibilité, stabilité)", "Un tribunal", "Un droit subjectif"], bonne: 1, explication: "Avec la justice et l'ordre social." },
    ],
  },

  2: {
    titre: "Les divisions du droit",
    resume: md`
## L'essentiel — Les divisions du droit

- **Droit public** (État et collectivités, rapports inégalitaires, intérêt général, juge administratif) / **droit privé** (particuliers, rapports égalitaires, intérêts particuliers, juge de droit commun).
- Droit public : **constitutionnel**, **administratif**, **finances publiques et fiscal**, **international public**.
- Droit privé : **civil** (DOC, Code de la famille, Code des droits réels), **commercial** (Code de commerce, lois 17-95 et 5-96), **du travail** (loi 65-99), **international privé**.
- Droits **mixtes** : **pénal**, **travail**, **procédure**.
`,
    exercices: md`
### Exercice 2 — Quelle branche du droit ?

Rattachez chaque situation à une branche du droit :

1. Une entreprise conteste un redressement d'impôt.
2. Deux époux divorcent.
3. Un commerçant vend son fonds de commerce.
4. Un salarié est licencié sans préavis.
5. Un automobiliste commet un délit de fuite.
6. Une Marocaine épouse un Italien et ils se demandent quelle loi s'applique à leur mariage.
7. Un citoyen conteste la décision du Parlement de dissoudre un parti.

<details><summary>Voir le corrigé</summary>

1. **Droit fiscal** (droit public) ; 2. **droit civil / de la famille** (privé) ; 3. **droit commercial** (privé) ; 4. **droit du travail** (mixte) ; 5. **droit pénal** (mixte) ; 6. **droit international privé** ; 7. **droit constitutionnel** (public).

</details>
`,
    qcm: [
      { q: "Le droit administratif relève du :", choix: ["Droit privé", "Droit public", "Droit mixte", "Droit international privé"], bonne: 1, explication: "Il régit l'administration." },
      { q: "Le texte fondamental du droit civil marocain est :", choix: ["Le Code du travail", "Le DOC de 1913", "La loi 17-95", "Le Code pénal"], bonne: 1, explication: "Dahir des obligations et des contrats." },
      { q: "Le droit pénal est considéré comme :", choix: ["Purement privé", "Purement public", "Mixte", "International"], bonne: 2, explication: "Il protège des intérêts privés par une sanction publique." },
      { q: "Les rapports de droit public sont :", choix: ["Égalitaires", "Inégalitaires (prérogatives de puissance publique)", "Toujours contractuels", "Facultatifs"], bonne: 1, explication: "L'administration dispose de prérogatives." },
      { q: "Le Code du travail marocain est la loi :", choix: ["65-99", "15-95", "70-03", "38-15"], bonne: 0, explication: "15-95 est le Code de commerce, 70-03 le Code de la famille." },
    ],
  },

  3: {
    titre: "Les sources du droit marocain",
    resume: md`
## L'essentiel — Les sources du droit

- **Hiérarchie des normes** (Kelsen) : **Constitution** (2011) → conventions internationales ratifiées → lois organiques puis ordinaires → règlements (décrets, arrêtés) → actes locaux, circulaires.
- Sources **formelles** : Constitution, loi (votée par le Parlement, publiée au **Bulletin officiel**), règlement, traités.
- Sources **non formelles** : **coutume**, **jurisprudence** (la Cour de cassation unifie l'interprétation), **doctrine** (influence sans obliger), principes du droit musulman (Code de la famille).
- **Coutume** = élément **matériel** (usage ancien, constant, public) + élément **psychologique** (conviction de son caractère obligatoire).
- Coutume **secundum legem** (renvoi de la loi), **praeter legem** (comble un vide), **contra legem** (écartée).
`,
    exercices: md`
### Exercice 2 — Hiérarchie des normes et coutume

1. Classez de la norme la plus élevée à la plus basse : un décret du Chef du gouvernement ; la Constitution ; une loi votée par le Parlement ; un arrêté ministériel ; une convention internationale ratifiée et publiée.
2. Un décret contredit une loi. Que doit-on faire ?
3. Dans un souk, les commerçants concluent depuis toujours leurs ventes par une poignée de main, considérée par tous comme un engagement. Quels éléments de la coutume sont réunis ? Cette coutume pourrait-elle écarter une loi impérative ?

<details><summary>Voir le corrigé</summary>

**1)** Constitution → convention internationale ratifiée → loi → décret → arrêté ministériel.

**2)** Le décret, norme **inférieure**, doit respecter la loi : il est **illégal** et peut être annulé par le juge administratif.

**3)** Élément **matériel** (usage ancien, constant, public) et élément **psychologique** (conviction de son caractère obligatoire). Non : une coutume **contra legem** ne peut pas écarter une loi impérative.

</details>
`,
    qcm: [
      { q: "Au sommet de la hiérarchie des normes au Maroc se trouve :", choix: ["La loi", "La Constitution", "Le décret", "La jurisprudence"], bonne: 1, explication: "Constitution de 2011." },
      { q: "La loi est publiée au :", choix: ["Journal d'annonces légales", "Bulletin officiel", "Registre du commerce", "Journal de la Cour de cassation"], bonne: 1, explication: "La publication la rend opposable à tous." },
      { q: "La doctrine :", choix: ["S'impose aux juges", "Influence sans obliger", "Est une loi", "Est un décret"], bonne: 1, explication: "Simple autorité intellectuelle." },
      { q: "L'élément psychologique de la coutume est :", choix: ["La répétition de l'usage", "La conviction de son caractère obligatoire", "Sa publication", "Son ancienneté"], bonne: 1, explication: "Opinio juris." },
      { q: "Une coutume contraire à une loi impérative est :", choix: ["Applicable", "En principe écartée", "Supérieure à la loi", "Obligatoire pour le juge"], bonne: 1, explication: "Coutume contra legem." },
    ],
  },

  4: {
    titre: "L'application de la règle de droit",
    resume: md`
## L'essentiel — Application de la loi

- Entrée en vigueur : **vote** par le Parlement → **promulgation** (dahir) → **publication au Bulletin officiel** ; « nul n'est censé ignorer la loi ».
- Dans le temps : **non-rétroactivité** (situations définitivement constituées) et **effet immédiat** (situations en cours) ; la **loi pénale plus douce** est rétroactive.
- **Abrogation** expresse ou tacite, totale ou partielle ; la **désuétude** n'abroge pas une loi.
- Dans l'espace : **territorialité** (tous ceux qui sont au Maroc), **personnalité** pour le statut personnel des étrangers, limite de l'**ordre public**.
`,
    exercices: md`
### Exercice 2 — Loi nouvelle et situations passées

1. Un délit commis en 2024 était puni de 2 ans de prison. Une loi de 2025 réduit la peine à 6 mois. Le prévenu est jugé en 2026 : quelle peine encourt-il ?
2. Une loi de 2026 augmente fortement la peine d'un délit. Un fait commis en 2025 peut-il être puni de la nouvelle peine ?
3. Un texte de 1950 n'a plus été appliqué depuis 40 ans. Est-il abrogé ?
4. Un étranger résidant à Casablanca invoque sa loi nationale pour échapper au Code de la route. A-t-il raison ?

<details><summary>Voir le corrigé</summary>

1. **6 mois** : la loi pénale plus douce s'applique rétroactivement (*in mitius*).
2. **Non** : principe de non-rétroactivité de la loi pénale plus sévère.
3. **Non** : la désuétude n'abroge pas une loi ; seule une abrogation expresse ou tacite y met fin.
4. **Non** : le Code de la route relève de la **territorialité** ; seul le statut personnel peut relever de sa loi nationale.

</details>
`,
    qcm: [
      { q: "Une loi devient opposable à tous après :", choix: ["Son vote", "Sa publication au Bulletin officiel", "Sa rédaction", "Sa discussion en commission"], bonne: 1, explication: "Précédée de la promulgation." },
      { q: "La loi pénale plus douce :", choix: ["Ne s'applique jamais au passé", "S'applique rétroactivement au profit du prévenu", "Est interdite", "S'applique seulement aux étrangers"], bonne: 1, explication: "Rétroactivité in mitius." },
      { q: "La désuétude d'une loi :", choix: ["L'abroge", "Ne l'abroge pas", "La rend rétroactive", "La transforme en coutume"], bonne: 1, explication: "Seule l'abrogation met fin à une loi." },
      { q: "Une abrogation tacite résulte :", choix: ["D'une mention expresse", "De l'incompatibilité entre la loi nouvelle et l'ancienne", "D'une décision du juge", "D'un référendum"], bonne: 1, explication: "L'ancien texte cesse de s'appliquer." },
      { q: "Le statut personnel d'un étranger au Maroc peut relever :", choix: ["Toujours du droit marocain", "De sa loi nationale, sauf contrariété à l'ordre public", "Du droit international public", "De la coutume locale"], bonne: 1, explication: "Principe de personnalité." },
    ],
  },

  5: {
    titre: "L'organisation judiciaire marocaine",
    resume: md`
## L'essentiel — L'organisation judiciaire

- Principes : **indépendance** (CSPJ), égalité, **double degré de juridiction**, collégialité, publicité, gratuité relative, droits de la défense.
- Loi **38-15** : **tribunaux de première instance** (compétence générale) → **cours d'appel** (rejugent en fait et en droit) → **Cour de cassation** (juge du droit, pas un 3ᵉ degré ; ex-« Cour suprême »).
- Juridictions spécialisées : **commerce** (loi 53-95), **administratives** (loi 41-90).
- Institutions : **Cour constitutionnelle**, **Cour des comptes**, **CSPJ**.
- Acteurs : magistrats du **siège** (jugent) et du **parquet** (requièrent), avocats, greffiers, huissiers, adouls et notaires, experts.
`,
    exercices: md`
### Exercice 2 — Quel tribunal ?

1. Quelle juridiction est compétente en premier ressort ? a) Un litige entre deux sociétés sur le paiement de marchandises ; b) un étudiant conteste le refus de son inscription par une université publique ; c) un divorce ; d) un vol.
2. Une société perd son procès devant le tribunal de commerce. Quelle voie de recours peut-elle exercer, devant quelle juridiction ? Si elle perd encore, peut-elle faire rejuger les faits par la Cour de cassation ?
3. Qui déclenche les poursuites pénales au nom de la société ?

<details><summary>Voir le corrigé</summary>

**1)** a) **tribunal de commerce** ; b) **tribunal administratif** ; c) **tribunal de première instance** (section de la famille) ; d) **tribunal de première instance** (compétence pénale).

**2)** L'**appel** devant la **cour d'appel de commerce**. La Cour de cassation ne rejuge pas les faits : elle contrôle seulement la bonne application du droit.

**3)** Le **ministère public** (parquet).

</details>
`,
    qcm: [
      { q: "La Cour de cassation :", choix: ["Rejuge les faits", "Contrôle la bonne application du droit", "Est un tribunal de première instance", "Juge les ministres uniquement"], bonne: 1, explication: "Elle n'est pas un 3ᵉ degré de juridiction." },
      { q: "Avant 2011, la Cour de cassation s'appelait :", choix: ["Cour d'appel", "Cour suprême", "Conseil d'État", "Cour des comptes"], bonne: 1, explication: "Piège classique de QCM." },
      { q: "Les litiges avec l'administration relèvent :", choix: ["Des tribunaux de commerce", "Des tribunaux administratifs", "De la Cour des comptes", "Des adouls"], bonne: 1, explication: "Loi 41-90." },
      { q: "Les magistrats du parquet :", choix: ["Jugent", "Requièrent au nom de la société", "Défendent les parties", "Exécutent les décisions"], bonne: 1, explication: "Magistrature « debout »." },
      { q: "Le contrôle de conformité des lois à la Constitution relève de :", choix: ["La Cour de cassation", "La Cour constitutionnelle", "La Cour des comptes", "Du CSPJ"], bonne: 1, explication: "Elle traite aussi le contentieux électoral." },
    ],
  },

  6: {
    titre: "Les personnes juridiques",
    resume: md`
## L'essentiel — Les personnes

- **Personnalité juridique** : aptitude à être titulaire de droits et d'obligations.
- Personne **physique** : dès la naissance (vivant et viable ; l'enfant conçu est réputé né quand son intérêt l'exige) jusqu'au décès. Attributs : **nom**, **domicile**, **nationalité**, **état civil**, **patrimoine**.
- Capacité de **jouissance** (tout le monde) et d'**exercice** (majorité à **18 ans**, Code de la famille, art. 209).
- Incapables (mineur, dément, prodigue) : représentation ou assistance ; l'acte fait sans autorisation est **nul ou annulable**, dans l'intérêt de l'incapable.
- Personne **morale** : de droit public (État, collectivités, établissements publics) ou privé (sociétés, associations, coopératives) ; attributs : dénomination, siège, nationalité, **patrimoine propre**, capacité limitée par le **principe de spécialité**.
`,
    exercices: md`
### Exercice 2 — Capacité et personnes morales

1. Youssef, 16 ans, achète seul une moto à crédit. Le contrat est-il valable ? Qui peut invoquer la nullité ?
2. Un enfant conçu mais pas encore né peut-il hériter de son père décédé pendant la grossesse ?
3. Une association sportive peut-elle ouvrir une agence de voyages commerciale ? Pourquoi ?
4. Les créanciers d'une SARL peuvent-ils saisir la maison personnelle d'un associé ?

<details><summary>Voir le corrigé</summary>

1. Youssef est **mineur** (moins de 18 ans), donc incapable d'exercice : le contrat est **annulable** ; la nullité protège le mineur, seul lui ou son représentant légal peut l'invoquer.
2. **Oui**, s'il naît vivant et viable : l'enfant conçu est réputé né chaque fois qu'il y va de son intérêt.
3. **Non**, en principe : le **principe de spécialité** limite la capacité d'une personne morale à son objet.
4. **Non** : la SARL a un **patrimoine propre** distinct de celui des associés, dont la responsabilité est limitée aux apports.

</details>
`,
    qcm: [
      { q: "Au Maroc, la majorité légale est fixée à :", choix: ["16 ans", "18 ans", "20 ans", "21 ans"], bonne: 1, explication: "Article 209 du Code de la famille." },
      { q: "La capacité de jouissance est :", choix: ["L'aptitude à exercer seul ses droits", "L'aptitude à être titulaire de droits", "Réservée aux majeurs", "Réservée aux sociétés"], bonne: 1, explication: "Toute personne en est dotée." },
      { q: "L'équivalent du domicile pour une personne morale est :", choix: ["La dénomination", "Le siège social", "Le capital", "L'objet social"], bonne: 1, explication: "Il détermine aussi le tribunal compétent." },
      { q: "Le principe de spécialité signifie qu'une personne morale :", choix: ["Peut tout faire", "Ne peut agir que dans les limites de son objet", "Est spécialisée en droit", "N'a pas de patrimoine"], bonne: 1, explication: "Une association sportive ne fait pas de banque." },
      { q: "Un établissement public comme l'OCP est une personne morale de :", choix: ["Droit privé à but non lucratif", "Droit public", "Droit international", "Fait"], bonne: 1, explication: "Comme l'État et les collectivités." },
    ],
  },

  7: {
    titre: "Les droits subjectifs et leurs sources",
    resume: md`
## L'essentiel — Droits subjectifs et obligations

- Droits **patrimoniaux** (évaluables en argent : cessibles, transmissibles, saisissables) : **réels** (sur une chose : propriété = *usus*, *fructus*, *abusus*), **personnels** (de créance), **intellectuels**.
- Droits **extrapatrimoniaux** (personnalité, famille, droits politiques) : incessibles, insaisissables ; leur violation peut toutefois être réparée en argent.
- Sources : **actes juridiques** (volonté de produire des effets de droit) et **faits juridiques** (effets indépendants de la volonté).
- DOC : **contrat**, **quasi-contrat**, **délit** (intentionnel), **quasi-délit** (négligence), **loi**.
- Validité du contrat : **consentement** sans vice (erreur, dol, violence), **capacité**, **objet**, **cause** licites ; « le contrat fait la loi des parties ».
- Responsabilité civile : **fait générateur + dommage + lien de causalité** ; contractuelle ou délictuelle.
`,
    exercices: md`
### Exercice 2 — Qualifier des droits et des obligations

1. Qualifiez : a) le droit d'un propriétaire sur son terrain ; b) le droit d'un bailleur de toucher le loyer ; c) le droit d'un auteur sur son roman ; d) le droit à l'image ; e) l'autorité parentale.
2. Quelle source d'obligation ? a) Karim renverse volontairement un passant ; b) Salma paie par erreur deux fois la même facture ; c) un conducteur distrait cause un accident ; d) un parent doit une pension alimentaire à son enfant.
3. Un vendeur cache sciemment qu'une voiture a été gravement accidentée. Quel vice du consentement l'acheteur peut-il invoquer ?

<details><summary>Voir le corrigé</summary>

**1)** a) droit **réel** ; b) droit **personnel** (de créance) ; c) droit **intellectuel** ; d) et e) droits **extrapatrimoniaux**.

**2)** a) **délit** ; b) **quasi-contrat** (paiement de l'indu) ; c) **quasi-délit** ; d) **loi**.

**3)** Le **dol** : des manœuvres ou une réticence intentionnelle l'ont trompé ; le contrat est annulable et des dommages-intérêts sont possibles.

</details>
`,
    qcm: [
      { q: "Le droit de propriété comprend :", choix: ["Usus, fructus, abusus", "Seulement l'usage", "Le droit de créance", "Le droit à l'image"], bonne: 0, explication: "User, percevoir les fruits, disposer." },
      { q: "Le droit à l'honneur est un droit :", choix: ["Patrimonial", "Extrapatrimonial", "Réel", "Intellectuel"], bonne: 1, explication: "Même si sa violation se répare en argent." },
      { q: "Un dommage causé par imprudence, sans intention, relève :", choix: ["Du délit", "Du quasi-délit", "Du contrat", "Du quasi-contrat"], bonne: 1, explication: "Le délit suppose l'intention." },
      { q: "Le dol est :", choix: ["Une erreur spontanée", "Une tromperie intentionnelle d'une partie", "Une contrainte physique", "Un défaut de capacité"], bonne: 1, explication: "C'est un vice du consentement." },
      { q: "La responsabilité civile suppose :", choix: ["Un contrat écrit", "Un fait générateur, un dommage et un lien de causalité", "Une condamnation pénale", "L'accord du juge"], bonne: 1, explication: "Les trois éléments sont cumulatifs." },
    ],
  },

  8: {
    titre: "La preuve des droits",
    resume: md`
## L'essentiel — La preuve

- Un droit non prouvé équivaut, en justice, à un droit inexistant.
- **Charge de la preuve** : elle incombe au **demandeur** (*actori incumbit probatio*) ; celui qui se prétend libéré doit le prouver.
- **Présomptions** : simples (preuve contraire possible) ou **irréfragables** (aucune preuve contraire).
- Modes de preuve (DOC) : **écrit** (acte authentique ou sous seing privé), **témoignage**, **aveu**, **serment**, **présomptions de fait**.
- Systèmes : **preuve légale** en matière **civile** ; **preuve libre** en matière **commerciale** et pénale (rapidité des affaires).
- **Preuve électronique** : écrit et signature électroniques admis (loi 53-05).
`,
    exercices: md`
### Exercice 2 — Qui doit prouver, et comment ?

1. Hamid réclame à Rachid 50 000 DH qu'il dit lui avoir prêtés. Qui doit prouver ? Rachid répond qu'il a déjà remboursé : qui doit prouver ce remboursement ?
2. Le prêt a été fait entre deux particuliers sans écrit. Hamid peut-il facilement le prouver par témoins ? Et si les deux étaient commerçants et que le prêt concernait leur commerce ?
3. Classez par force probante décroissante : un acte notarié ; une déclaration d'un témoin ; un acte sous seing privé signé par les deux parties.

<details><summary>Voir le corrigé</summary>

1. **Hamid**, demandeur, doit prouver le prêt ; **Rachid**, qui se prétend libéré, doit prouver le remboursement.
2. En matière **civile**, la preuve est **légale** : au-delà d'un certain montant, un écrit est en principe exigé et le témoignage est restreint. Entre commerçants et pour leur commerce, la preuve est **libre** : tous les modes sont admis (témoins, correspondances, livres comptables).
3. Acte notarié (authentique, fait foi jusqu'à inscription de faux) > acte sous seing privé > témoignage.

</details>
`,
    qcm: [
      { q: "En principe, la charge de la preuve pèse sur :", choix: ["Le défendeur", "Le demandeur", "Le juge", "L'avocat"], bonne: 1, explication: "Actori incumbit probatio." },
      { q: "Une présomption irréfragable :", choix: ["Peut être combattue par toute preuve", "Ne souffre aucune preuve contraire", "Est une coutume", "Est un témoignage"], bonne: 1, explication: "Juris et de jure." },
      { q: "En matière commerciale, la preuve est :", choix: ["Légale", "Libre", "Impossible", "Uniquement écrite"], bonne: 1, explication: "Pour la rapidité et la souplesse des affaires." },
      { q: "Un acte dressé par un notaire est :", choix: ["Un acte sous seing privé", "Un acte authentique", "Un témoignage", "Une présomption"], bonne: 1, explication: "Il fait foi jusqu'à inscription de faux." },
      { q: "La loi marocaine sur l'échange électronique de données juridiques est la loi :", choix: ["53-05", "65-99", "17-95", "38-15"], bonne: 0, explication: "Elle admet la signature électronique." },
    ],
  },
};
