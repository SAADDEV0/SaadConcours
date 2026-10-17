// Droit social (Droit S3) — compléments par chapitre : description SEO, résumé, exercices 2 et 3, QCM.
const md = String.raw;

const chapitres = {
  1: {
    titre: "Le droit social : notion, sources et acteurs",
    description: "Droit social marocain : droit du travail et protection sociale, Code du travail (loi 65-99), sources, principe de faveur, inspection du travail.",
    resume: md`
## L'essentiel — Notion, sources, acteurs

- **Droit social** = droit du travail (relations de travail subordonné) + droit de la protection sociale (risques sociaux).
- Droit **protecteur** : subordination et dépendance économique ; **ordre public social**.
- **Code du travail** : loi **65-99**, en vigueur le **8 juin 2004** ; loi 19-12 (domestiques), loi-cadre 09-21 (protection sociale), loi organique **97-15** (grève, 2025).
- Sources internationales : conventions de l'**OIT** (29, 100, 105, 111, 138, 182 ratifiées ; 87 non ratifiée), conventions bilatérales.
- Constitution : article **29** (syndicats, grève), article **31** (protection sociale, travail), article 8.
- Sources professionnelles : **conventions collectives** (articles 104 et suivants), **règlement intérieur** obligatoire dès **10 salariés** et approuvé (article 138), usages, contrat.
- **Principe de faveur** (article 11) : la règle la plus favorable au salarié s'applique.
- Acteurs : **inspection du travail** (contrôle, conseil, conciliation, procès-verbaux), tribunaux de première instance en matière sociale, partenaires sociaux (syndicats, CGEM, gouvernement), CNSS, CMR, RCAR, ANAM.
- Champ (article 1) : tout contrat de travail ; statuts particuliers (fonctionnaires, marins, journalistes).
`,
    exercices: md`
### Exercice 2 — Quelle source ?

Indiquez la source de la règle : 1) le droit de grève est garanti ; 2) un salarié a droit à un jour et demi de congé par mois ; 3) dans la branche du textile, les salariés ont une prime d'ancienneté supérieure au minimum légal ; 4) dans l'entreprise, l'entrée se fait par badge et le port du casque est obligatoire ; 5) le travail forcé est interdit.

<details><summary>Voir le corrigé</summary>

1) Constitution (article 29), précisée par la loi organique 97-15. 2) Loi : Code du travail (article 231). 3) Convention collective de branche. 4) Règlement intérieur. 5) Conventions de l'OIT n° 29 et 105, et Code du travail (article 10).

</details>

### Exercice 3 — Le rôle de l'inspecteur du travail

Un salarié licencié verbalement se présente à l'inspection du travail de Kénitra. Que peut faire l'inspecteur ? Que ne peut-il pas faire ?

<details><summary>Voir le corrigé</summary>

L'inspecteur peut informer le salarié de ses droits, convoquer l'employeur et tenter une conciliation préalable (article 41 : le salarié licencié peut recourir à la procédure de conciliation devant l'agent chargé de l'inspection du travail) ; un accord signé devant lui a un caractère définitif et ne peut plus être contesté en justice. Il peut aussi contrôler l'entreprise et dresser procès-verbal des infractions constatées. Il ne peut pas en revanche juger le litige ni condamner l'employeur à payer des indemnités : à défaut d'accord, seul le tribunal statuant en matière sociale peut le faire.

</details>
`,
    qcm: [
      { q: "Le Code du travail marocain est la loi :", choix: ["65-99", "65-00", "18-12", "09-21"], bonne: 0, explication: "Entrée en vigueur le 8 juin 2004." },
      { q: "Le droit de grève est garanti par l'article :", choix: ["19 de la Constitution", "29 de la Constitution", "31 de la Constitution", "71 de la Constitution"], bonne: 1, explication: "Ses conditions sont fixées par une loi organique." },
      { q: "La loi organique sur le droit de grève est la loi :", choix: ["97-15", "65-99", "19-12", "41-10"], bonne: 0, explication: "Adoptée en 2025." },
      { q: "Le règlement intérieur est obligatoire à partir de :", choix: ["5 salariés", "10 salariés", "50 salariés", "100 salariés"], bonne: 1, explication: "Article 138 du Code du travail." },
      { q: "Le principe de faveur signifie que :", choix: ["La loi l'emporte toujours", "La règle la plus favorable au salarié s'applique", "Le contrat l'emporte toujours", "L'employeur choisit la règle"], bonne: 1, explication: "Article 11." },
      { q: "L'Organisation internationale du travail a été créée en :", choix: ["1919", "1945", "1956", "2004"], bonne: 0, explication: "Par le traité de Versailles." },
      { q: "La convention de l'OIT n° 87 sur la liberté syndicale :", choix: ["Est ratifiée par le Maroc", "N'est pas ratifiée par le Maroc", "N'existe pas", "Concerne le travail des enfants"], bonne: 1, explication: "Question récurrente du dialogue social." },
      { q: "L'inspecteur du travail :", choix: ["Juge les litiges", "Contrôle, conseille, concilie et dresse des procès-verbaux", "Fixe les salaires", "Signe les contrats"], bonne: 1, explication: "Livre V du Code." },
      { q: "Les fonctionnaires relèvent principalement :", choix: ["Du Code du travail", "Du statut général de la fonction publique", "Du DOC", "Des conventions collectives"], bonne: 1, explication: "Dahir du 24 février 1958." },
      { q: "L'organisation patronale principale au Maroc est :", choix: ["L'UMT", "La CGEM", "La CDT", "L'UGTM"], bonne: 1, explication: "Confédération générale des entreprises du Maroc." },
    ],
  },

  2: {
    titre: "Le contrat de travail : notion, formation et types",
    description: "Contrat de travail au Maroc : subordination, contrats voisins, âge minimum, forme, période d'essai (article 14), CDI et CDD (articles 16 et 17), obligations.",
    resume: md`
## L'essentiel — Le contrat de travail

- **Salarié** (article 6) : activité sous la direction d'un employeur contre rémunération.
- Trois éléments : **prestation**, **rémunération**, **subordination juridique** (ordres, contrôle, sanction).
- Qualification selon la réalité (indices : service organisé, horaires, moyens, pouvoir disciplinaire) ; requalification possible des faux indépendants (plateformes).
- Contrats voisins : entreprise, mandat, société, stage.
- Formation : règles du DOC ; âge minimum **15 ans** (article 143) ; contrat **consensuel** (article 15) ; étrangers : **visa** obligatoire (article 516) ; non-discrimination (article 9).
- **Période d'essai** (articles 13 et 14) : cadres **3 mois**, employés **1,5 mois**, ouvriers **15 jours** ; renouvelable **une fois** ; préavis de deux jours après une semaine de travail.
- **CDI** = droit commun ; **CDD** = exception (articles 16 et 17) : remplacement, accroissement temporaire, saisonnier ; nouvelle activité : 1 an renouvelable une fois ; rupture anticipée : salaires restant à courir (article 33).
- Autres : travail temporaire (articles 495 et suivants), contrats d'insertion, temps partiel.
- Obligations : employeur (travail, salaire, sécurité, CNSS, dignité) ; salarié (exécution personnelle, directives, loyauté, discrétion) ; clause de non-concurrence limitée.
`,
    exercices: md`
### Exercice 2 — Salarié ou indépendant ?

Qualifiez : 1) un architecte qui conçoit librement les plans d'une villa pour un client ; 2) un professeur de langues qui enseigne dans une école privée selon un emploi du temps fixé par la direction ; 3) un plombier qui intervient ponctuellement dans une entreprise avec ses propres outils ; 4) une vendeuse payée à la commission, qui travaille dans le magasin aux horaires fixés par le gérant.

<details><summary>Voir le corrigé</summary>

1) Indépendant (contrat d'entreprise) : il travaille selon ses propres méthodes. 2) Salarié : emploi du temps imposé, service organisé. 3) Indépendant : intervention ponctuelle, outils propres, autonomie. 4) Salariée : le mode de rémunération (commission) est indifférent ; les horaires et le contrôle du gérant caractérisent la subordination.

</details>

### Exercice 3 — Le CDD rompu avant terme

Un salarié est embauché en CDD de douze mois pour remplacer une salariée en congé, avec un salaire de 5 000 DH. Au bout de quatre mois, l'employeur rompt le contrat sans faute grave du salarié. Combien doit-il verser ?

<details><summary>Voir le corrigé</summary>

La rupture anticipée d'un CDD sans faute grave ni force majeure oblige l'employeur à verser des dommages-intérêts égaux aux salaires restant à courir jusqu'au terme (article 33). Il reste 12 − 4 = 8 mois, soit 8 × 5 000 = 40 000 DH. Si le CDD avait été conclu pour un remplacement sans terme précis, le terme serait le retour de la salariée remplacée, et le calcul se ferait sur cette durée.

</details>
`,
    qcm: [
      { q: "Le critère décisif du contrat de travail est :", choix: ["Le montant du salaire", "Le lien de subordination", "La forme écrite", "La durée"], bonne: 1, explication: "Ordres, contrôle et sanction." },
      { q: "L'âge minimum d'admission à l'emploi est de :", choix: ["12 ans", "14 ans", "15 ans", "18 ans"], bonne: 2, explication: "Article 143 du Code du travail." },
      { q: "Le contrat de travail est en principe :", choix: ["Solennel", "Consensuel", "Réel", "Notarié"], bonne: 1, explication: "Il peut être verbal (article 15)." },
      { q: "Le contrat de travail d'un salarié étranger doit :", choix: ["Être notarié", "Recevoir le visa de l'autorité chargée du travail", "Être approuvé par le wali", "Être conclu en CDD"], bonne: 1, explication: "Article 516." },
      { q: "La période d'essai maximale d'un cadre en CDI est de :", choix: ["15 jours", "1 mois et demi", "3 mois", "6 mois"], bonne: 2, explication: "Article 14." },
      { q: "La période d'essai peut être renouvelée :", choix: ["Une seule fois", "Deux fois", "Indéfiniment", "Jamais"], bonne: 0, explication: "Article 14." },
      { q: "Le contrat de droit commun est :", choix: ["Le CDD", "Le CDI", "Le contrat temporaire", "Le contrat d'insertion"], bonne: 1, explication: "Le CDD est une exception." },
      { q: "Le CDD conclu pour une activité nouvelle dans le secteur non agricole dure au maximum :", choix: ["6 mois", "Un an renouvelable une fois", "Trois ans", "Cinq ans"], bonne: 1, explication: "Au-delà, il devient un CDI." },
      { q: "La rupture anticipée d'un CDD sans faute grave oblige à verser :", choix: ["Un mois de salaire", "Les salaires restant à courir jusqu'au terme", "Rien", "L'indemnité de licenciement"], bonne: 1, explication: "Article 33." },
      { q: "La discrimination fondée sur l'appartenance syndicale est interdite par l'article :", choix: ["6", "9", "13", "24"], bonne: 1, explication: "Embauche, rémunération, promotion, licenciement." },
    ],
  },

  3: {
    titre: "Les conditions de travail : durée, repos, congés et salaire",
    description: "Conditions de travail au Maroc : 44 heures par semaine, heures supplémentaires majorées, repos, congé annuel, maternité, SMIG et prime d'ancienneté.",
    resume: md`
## L'essentiel — Conditions de travail

- Durée légale (article 184) : **2 288 heures par an** ou **44 heures par semaine** (non agricole) ; **2 496 heures** (agricole) ; maximum 10 heures par jour en cas de répartition.
- **Heures supplémentaires** (article 201) : de 6 h à 21 h **+25 %** (jour ordinaire) / **+50 %** (repos) ; de 21 h à 6 h **+50 %** / **+100 %**.
- Mineurs : travail de nuit interdit avant 16 ans (article 172), travaux dangereux interdits (article 181).
- **Repos hebdomadaire** : 24 heures consécutives (article 205) ; jours fériés payés (dont le Nouvel An amazigh depuis 2024).
- **Congé annuel** (article 231) : **1,5 jour ouvrable par mois** (18 jours), 2 jours pour les moins de 18 ans ; **+1,5 jour par période de 5 ans**, plafond **30 jours** (article 241).
- **Maternité** : **14 semaines** (article 152), protection contre le licenciement (article 159), pause d'allaitement d'une heure par jour pendant 12 mois (article 161) ; paternité : 3 jours ; événements familiaux (article 274).
- Salaire : **SMIG / SMAG** (article 356), égalité hommes-femmes (article 346), paiement mensuel ou bimensuel (article 364), bulletin de paie (article 370), prescription **2 ans** (article 395).
- **Prime d'ancienneté** (article 350) : 5 % (2 ans), 10 % (5 ans), 15 % (12 ans), 20 % (20 ans), 25 % (25 ans).
- Santé et sécurité (article 281) ; service médical et comité d'hygiène dès 50 salariés.
`,
    exercices: md`
### Exercice 2 — Calcul de congé

Calculez le congé annuel : 1) un salarié de 25 ans ayant 3 ans d'ancienneté ; 2) un apprenti de 17 ans ayant un an d'ancienneté ; 3) un cadre ayant 22 ans d'ancienneté ; 4) une salariée ayant 40 ans d'ancienneté.

<details><summary>Voir le corrigé</summary>

1) 18 jours (pas encore de période de cinq ans). 2) 2 jours × 12 = 24 jours ouvrables (moins de 18 ans). 3) 18 + 4 × 1,5 = 24 jours (quatre périodes de cinq ans). 4) 18 + 8 × 1,5 = 30 jours, ce qui atteint le plafond de 30 jours ouvrables (article 241).

</details>

### Exercice 3 — Prime d'ancienneté

Une employée gagne un salaire de base de 6 000 DH. Calculez sa prime d'ancienneté si elle a : a) 1 an ; b) 4 ans ; c) 10 ans ; d) 21 ans d'ancienneté.

<details><summary>Voir le corrigé</summary>

a) 0 DH (moins de deux ans). b) 5 % : 300 DH. c) 10 % : 600 DH (au moins cinq ans, moins de douze). d) 20 % : 1 200 DH (au moins vingt ans, moins de vingt-cinq).

</details>
`,
    qcm: [
      { q: "La durée légale du travail dans les activités non agricoles est de :", choix: ["40 heures par semaine", "44 heures par semaine", "48 heures par semaine", "35 heures par semaine"], bonne: 1, explication: "Soit 2 288 heures par an (article 184)." },
      { q: "Une heure supplémentaire effectuée à 22 heures un jour ordinaire est majorée de :", choix: ["25 %", "50 %", "100 %", "10 %"], bonne: 1, explication: "Article 201." },
      { q: "Une heure supplémentaire effectuée de nuit le jour du repos hebdomadaire est majorée de :", choix: ["25 %", "50 %", "75 %", "100 %"], bonne: 3, explication: "Article 201." },
      { q: "Le repos hebdomadaire est d'au moins :", choix: ["12 heures", "24 heures consécutives", "48 heures", "36 heures"], bonne: 1, explication: "Article 205." },
      { q: "Le congé annuel de base est de :", choix: ["1 jour par mois", "1,5 jour ouvrable par mois", "2,5 jours par mois", "30 jours par an"], bonne: 1, explication: "Article 231." },
      { q: "Le congé annuel ne peut pas dépasser :", choix: ["18 jours", "24 jours", "30 jours ouvrables", "45 jours"], bonne: 2, explication: "Article 241." },
      { q: "Le congé de maternité est de :", choix: ["8 semaines", "12 semaines", "14 semaines", "16 semaines"], bonne: 2, explication: "Article 152." },
      { q: "La prime d'ancienneté après cinq ans de service est de :", choix: ["5 %", "10 %", "15 %", "20 %"], bonne: 1, explication: "Article 350." },
      { q: "L'action en paiement des salaires se prescrit par :", choix: ["1 an", "2 ans", "5 ans", "15 ans"], bonne: 1, explication: "Article 395." },
      { q: "Le salaire minimum dans les activités non agricoles s'appelle :", choix: ["Le SMAG", "Le SMIG", "La TVA", "L'IPE"], bonne: 1, explication: "Fixé par décret." },
    ],
  },

  4: {
    titre: "La suspension, la modification et le transfert du contrat de travail",
    description: "Vie du contrat de travail : suspension (article 32), maladie et accident du travail (loi 18-12), modification du contrat et changement d'employeur (article 19).",
    resume: md`
## L'essentiel — Vie du contrat

- **Suspension** : interruption temporaire des obligations principales, le contrat **subsiste**.
- Causes (article 32) : service militaire, maladie ou accident, maternité, accident du travail ou maladie professionnelle, congés et mandats, **grève**, fermeture provisoire.
- Maladie : certificat sous **48 heures** (article 271) ; au-delà de **180 jours** sur 365, possible démission présumée (article 272), sauf accident du travail.
- **Accident du travail** (loi **18-12**, 2014) : par le fait ou à l'occasion du travail, ou sur le trajet ; responsabilité **sans faute**, assurance obligatoire ; soins, indemnités journalières, rente, rentes aux ayants droit.
- Pouvoir de direction (changement des conditions de travail) / **modification d'un élément essentiel** (salaire, qualification, lieu, horaire de jour à nuit) qui exige l'**accord** du salarié.
- Modification imposée : rupture imputable à l'employeur, indemnités pour licenciement abusif.
- **Article 19** : en cas de vente, fusion, succession, les contrats **subsistent** avec le nouvel employeur, ancienneté maintenue.
- Difficultés : réduction temporaire de la durée (article 185), procédures collectives (loi 73-17), super-privilège des salaires.
`,
    exercices: md`
### Exercice 2 — Changement des conditions ou modification ?

Qualifiez : 1) l'employeur déplace un comptable du 2ᵉ au 4ᵉ étage ; 2) il réduit la prime mensuelle contractuelle d'un commercial ; 3) il mute une secrétaire de Rabat à Laâyoune sans clause de mobilité ; 4) il décale l'horaire de 8 h-16 h à 9 h-17 h ; 5) il confie à un chef d'équipe des fonctions d'ouvrier.

<details><summary>Voir le corrigé</summary>

1) Changement des conditions de travail (pouvoir de direction). 2) Modification du contrat : la rémunération contractuelle est un élément essentiel. 3) Modification : mutation lointaine sans clause. 4) Changement des conditions de travail (même plage diurne). 5) Modification : rétrogradation.

</details>

### Exercice 3 — Accident de trajet

Un salarié, en rentrant chez lui directement après le travail, est renversé par une voiture. Un autre salarié est blessé pendant un détour de deux heures pour une course personnelle. Lesquels bénéficient du régime des accidents du travail ?

<details><summary>Voir le corrigé</summary>

Le premier : l'accident de trajet, sur le parcours normal entre le lieu de travail et le domicile, est assimilé à un accident du travail (loi 18-12). Le second, en principe, non : le détour pour un motif personnel interrompt le trajet protégé, sauf s'il est justifié par les nécessités essentielles de la vie courante ou par le travail. Dans le premier cas, l'indemnisation est due par l'assureur de l'employeur, sans préjudice du recours contre l'automobiliste responsable.

</details>
`,
    qcm: [
      { q: "Pendant la suspension du contrat de travail :", choix: ["Le contrat est rompu", "Le contrat subsiste", "Le salarié perd son ancienneté", "L'employeur doit payer le double du salaire"], bonne: 1, explication: "Article 32." },
      { q: "La grève :", choix: ["Rompt le contrat", "Suspend le contrat", "Est une faute grave", "N'a aucun effet"], bonne: 1, explication: "Article 32." },
      { q: "Le salarié malade doit justifier son absence dans un délai de :", choix: ["24 heures", "48 heures", "8 jours", "1 mois"], bonne: 1, explication: "Article 271." },
      { q: "L'absence pour maladie de plus de 180 jours sur une année permet à l'employeur :", choix: ["De retenir le salaire", "De considérer le salarié comme démissionnaire", "De le sanctionner pénalement", "Rien"], bonne: 1, explication: "Article 272, hors accident du travail." },
      { q: "Les accidents du travail sont régis par la loi :", choix: ["18-12", "65-00", "19-12", "65-99"], bonne: 0, explication: "Adoptée en 2014." },
      { q: "L'indemnisation de l'accident du travail repose sur :", choix: ["La faute prouvée de l'employeur", "Une responsabilité sans faute de l'employeur", "La faute du salarié", "La solidarité nationale seule"], bonne: 1, explication: "Avec assurance obligatoire." },
      { q: "La réduction du salaire contractuel par l'employeur :", choix: ["Relève de son pouvoir de direction", "Exige l'accord du salarié", "Est automatique en cas de crise", "Est décidée par l'inspecteur"], bonne: 1, explication: "Élément essentiel du contrat." },
      { q: "En cas de vente de l'entreprise, les contrats de travail :", choix: ["Prennent fin", "Subsistent avec le nouvel employeur", "Deviennent des CDD", "Doivent être renégociés"], bonne: 1, explication: "Article 19." },
      { q: "Le salarié repris par un nouvel employeur conserve :", choix: ["Seulement son poste", "Son ancienneté et ses avantages", "Uniquement son salaire de base", "Rien"], bonne: 1, explication: "Article 19." },
      { q: "Le refus par le salarié d'une modification de son contrat :", choix: ["Est une faute grave", "N'est pas une faute", "Entraîne une démission automatique", "Est puni d'une amende"], bonne: 1, explication: "L'employeur doit alors licencier ou renoncer." },
    ],
  },

  5: {
    titre: "La rupture du contrat de travail",
    description: "Rupture du contrat de travail : démission, sanctions (article 37), faute grave (article 39), procédure, indemnités de licenciement et licenciement économique.",
    resume: md`
## L'essentiel — Rupture du contrat

- Modes : **démission** écrite et légalisée (article 34), **licenciement**, accord, force majeure, **retraite à 60 ans** (article 526) ; CDD : fin au terme.
- Sanctions graduées (article 37) : avertissement, blâme, 2ᵉ blâme ou mise à pied de **8 jours** au plus, 3ᵉ blâme ou transfert, puis licenciement.
- **Faute grave** (article 39, liste stricte, preuve par l'employeur) : vol, abus de confiance, secret professionnel, ivresse, agression, insulte grave, refus d'exécuter, **absence injustifiée de plus de 4 jours ou 8 demi-journées** en 12 mois, détérioration, sécurité, violence ; pas de préavis ni d'indemnités.
- Fautes graves de l'employeur (article 40) : insulte, violence, **harcèlement sexuel**.
- Motif valable (article 35) ; motifs interdits (article 36) : syndicat, plainte, sexe, grossesse, religion, opinion…
- **Procédure** (articles 62 à 65) : entretien dans les **8 jours** avec un délégué, procès-verbal, notification sous **48 heures**, copie à l'inspecteur ; action dans les **90 jours**.
- **Indemnité de licenciement** (articles 52-53, après 6 mois) : **96 h** par an (années 1 à 5), **144 h** (6 à 10), **192 h** (11 à 15), **240 h** (au-delà).
- **Licenciement abusif** (article 41) : réintégration ou **1,5 mois par année ou fraction**, plafond **36 mois** ; conciliation devant l'inspecteur (accord définitif) ; reçu pour solde de tout compte dénonçable sous **60 jours**.
- **Licenciement économique** (articles 66 à 71, entreprises de 10 salariés et plus) : consultation un mois avant, procès-verbal, **autorisation du gouverneur**.
`,
    exercices: md`
### Exercice 2 — Faute grave ou non ?

Qualifiez : 1) un salarié absent sans justification cinq jours dans l'année ; 2) une caissière qui vole 2 000 DH dans la caisse ; 3) un employé arrivé en retard trois fois dans le mois ; 4) un ouvrier qui refuse de porter son casque, provoquant un accident grave ; 5) un salarié qui adhère à un syndicat.

<details><summary>Voir le corrigé</summary>

1) Faute grave : absence injustifiée de plus de quatre jours sur douze mois (article 39). 2) Faute grave : vol. 3) Faute simple : sanctions graduées de l'article 37. 4) Faute grave : inobservation des consignes de sécurité ayant entraîné un dommage considérable. 5) Ce n'est pas une faute ; c'est un motif interdit de licenciement (article 36).

</details>

### Exercice 3 — Calcul complet

Un ouvrier, payé 25 DH de l'heure, est licencié abusivement après 17 ans et 2 mois de service. Son salaire mensuel est de 4 775 DH. Calculez l'indemnité de licenciement et les dommages-intérêts.

<details><summary>Voir le corrigé</summary>

Indemnité de licenciement : années 1 à 5 : 5 × 96 = 480 h ; années 6 à 10 : 5 × 144 = 720 h ; années 11 à 15 : 5 × 192 = 960 h ; années 16 et 17 : 2 × 240 = 480 h ; fraction de 2 mois : 240 × 2/12 = 40 h. Total : 2 680 h × 25 = 67 000 DH. Dommages-intérêts : 17 ans et une fraction = 18 années comptées × 1,5 = 27 mois × 4 775 = 128 925 DH (sous le plafond de 36 mois). S'y ajoutent le préavis et les congés non pris.

</details>
`,
    qcm: [
      { q: "La démission doit être :", choix: ["Verbale", "Écrite et la signature légalisée", "Notariée", "Approuvée par l'inspecteur"], bonne: 1, explication: "Article 34." },
      { q: "La mise à pied disciplinaire ne peut pas dépasser :", choix: ["3 jours", "8 jours", "15 jours", "1 mois"], bonne: 1, explication: "Article 37." },
      { q: "Les fautes graves du salarié sont énumérées à l'article :", choix: ["35", "37", "39", "41"], bonne: 2, explication: "Liste interprétée strictement." },
      { q: "L'absence injustifiée constitue une faute grave au-delà de :", choix: ["2 jours", "4 jours ou 8 demi-journées sur 12 mois", "10 jours", "1 mois"], bonne: 1, explication: "Article 39." },
      { q: "L'entretien préalable doit avoir lieu dans un délai de :", choix: ["48 heures", "8 jours", "15 jours", "30 jours"], bonne: 1, explication: "Article 62." },
      { q: "La décision de licenciement est notifiée dans un délai de :", choix: ["24 heures", "48 heures", "8 jours", "1 mois"], bonne: 1, explication: "Article 63." },
      { q: "Pour les cinq premières années, l'indemnité de licenciement est de :", choix: ["48 heures par an", "96 heures par an", "144 heures par an", "1 mois par an"], bonne: 1, explication: "Article 53." },
      { q: "Les dommages-intérêts pour licenciement abusif sont plafonnés à :", choix: ["12 mois", "24 mois", "36 mois", "48 mois"], bonne: 2, explication: "Article 41." },
      { q: "Le reçu pour solde de tout compte peut être dénoncé dans un délai de :", choix: ["30 jours", "60 jours", "90 jours", "1 an"], bonne: 1, explication: "Articles 73 à 76." },
      { q: "Le licenciement pour motif économique dans une entreprise de 10 salariés et plus exige l'autorisation :", choix: ["Du ministre de l'Économie", "Du gouverneur", "Du tribunal de commerce", "De la CNSS"], bonne: 1, explication: "Articles 66 à 71." },
    ],
  },

  6: {
    titre: "Les relations collectives de travail",
    description: "Relations collectives au Maroc : syndicats et représentativité, délégués des salariés, comité d'entreprise, conventions collectives, conflits et grève.",
    resume: md`
## L'essentiel — Relations collectives

- Liberté syndicale : Constitution (articles 8 et 29), Code (articles 396 et suivants) ; constitution par dépôt des statuts (article 414) ; non-discrimination (articles 9 et 36).
- **Représentativité nationale** : au moins **6 %** des délégués élus (article 425) ; dans l'entreprise, seuil de **35 %** pour certains droits.
- **Représentant syndical** dans les entreprises de **100 salariés** et plus (article 470).
- **Délégués des salariés** dès **10 salariés** (article 430) : réclamations individuelles, saisine de l'inspecteur (article 432).
- Protection : licenciement ou sanction d'un délégué ou représentant syndical avec l'**accord de l'inspecteur** (article 457).
- **Comité d'entreprise** (articles 464 à 469) et **comité de sécurité et d'hygiène** (articles 336 à 344) dès **50 salariés** ; rôle consultatif.
- Négociation collective annuelle (articles 92 et 96) ; **convention collective** (article 104) : syndicats représentatifs et employeurs, dispositions plus favorables, dépôt, extension par arrêté, applicable à tous les salariés de l'employeur.
- **Conflit collectif** (article 549) : conciliation (inspecteur, commission provinciale présidée par le gouverneur, commission nationale), puis **arbitrage**.
- **Grève** : article 29 ; **loi organique 97-15** (2025) : appel syndical, préavis, négociation, service minimum, liberté du travail, interdiction de remplacer les grévistes ; suspension du contrat et du salaire.
`,
    exercices: md`
### Exercice 2 — Quelle institution ?

Indiquez l'institution obligatoire selon l'effectif : 1) une entreprise de 8 salariés ; 2) une entreprise de 35 salariés ; 3) une usine de 70 salariés ; 4) une société de 250 salariés dont le syndicat majoritaire a obtenu 40 % des voix.

<details><summary>Voir le corrigé</summary>

1) Aucune institution représentative obligatoire (seuil de 10 salariés pour les délégués). 2) Délégués des salariés et règlement intérieur. 3) Délégués, comité d'entreprise et comité de sécurité et d'hygiène. 4) Délégués, comité d'entreprise, comité de sécurité et d'hygiène, et désignation possible d'un représentant syndical (plus de 100 salariés, plus de 35 % des voix).

</details>

### Exercice 3 — Dissertation : plan détaillé

Proposez un plan pour le sujet : « Le droit de grève au Maroc, de la Constitution à la loi organique ».

<details><summary>Voir le corrigé</summary>

*Introduction* : droit constitutionnel depuis 1962, renvoi à une loi organique ; absence de texte pendant des décennies ; adoption de la loi organique 97-15 en 2025 ; problématique : la loi organique protège-t-elle ou restreint-elle le droit de grève ?
**I. Un droit longtemps garanti sans cadre** — A. La consécration constitutionnelle (article 29) et internationale. B. Le rôle de la jurisprudence face au vide législatif : reconnaissance du droit, sanction des abus, effets sur le contrat.
**II. Un droit désormais encadré par la loi organique 97-15** — A. Les garanties : définition de la grève, protection des grévistes, interdiction de les remplacer, suspension et non-rupture du contrat. B. Les limites : préavis, négociation préalable, service minimum, liberté du travail ; débat entre syndicats et patronat sur l'équilibre trouvé.
*Conclusion* : une sécurité juridique nouvelle, dont l'équilibre dépendra de l'application pratique et du dialogue social.

</details>
`,
    qcm: [
      { q: "Les délégués des salariés sont élus dans les établissements d'au moins :", choix: ["5 salariés", "10 salariés", "50 salariés", "100 salariés"], bonne: 1, explication: "Article 430." },
      { q: "Le comité d'entreprise est obligatoire à partir de :", choix: ["10 salariés", "20 salariés", "50 salariés", "200 salariés"], bonne: 2, explication: "Articles 464 à 469." },
      { q: "Un syndicat est le plus représentatif au niveau national s'il obtient au moins :", choix: ["3 % des délégués élus", "6 % des délégués élus", "35 % des délégués élus", "50 % des délégués élus"], bonne: 1, explication: "Article 425." },
      { q: "Le licenciement d'un délégué des salariés exige :", choix: ["L'accord du syndicat", "L'accord de l'inspecteur du travail", "Un jugement pénal", "L'accord du gouverneur"], bonne: 1, explication: "Article 457." },
      { q: "La convention collective s'applique :", choix: ["Aux seuls adhérents du syndicat signataire", "À tous les salariés de l'employeur signataire", "Aux seuls cadres", "À toute l'économie automatiquement"], bonne: 1, explication: "Elle peut en outre être étendue." },
      { q: "La convention collective est définie à l'article :", choix: ["92", "104", "396", "549"], bonne: 1, explication: "Syndicats représentatifs et employeurs." },
      { q: "La commission provinciale d'enquête et de conciliation est présidée par :", choix: ["L'inspecteur du travail", "Le gouverneur", "Le juge", "Le président de la commune"], bonne: 1, explication: "Procédure de règlement des conflits collectifs." },
      { q: "La loi organique sur le droit de grève porte le numéro :", choix: ["97-15", "65-99", "18-12", "41-90"], bonne: 0, explication: "Adoptée en 2025." },
      { q: "Pendant la grève, le salaire :", choix: ["Est payé en totalité", "N'est pas dû pour la période non travaillée", "Est doublé", "Est versé par la CNSS"], bonne: 1, explication: "Le contrat est suspendu." },
      { q: "Le remplacement des grévistes par des salariés recrutés à cet effet est :", choix: ["Autorisé", "Interdit", "Obligatoire", "Libre dans le secteur privé"], bonne: 1, explication: "Garantie du droit de grève." },
    ],
  },

  7: {
    titre: "La protection sociale",
    description: "Protection sociale au Maroc : CNSS et prestations, AMO (loi 65-00), AMO Tadamon, généralisation (loi-cadre 09-21), retraites et indemnité pour perte d'emploi.",
    resume: md`
## L'essentiel — Protection sociale

- **Risques sociaux** : maladie, maternité, invalidité, vieillesse, décès, accidents du travail, chômage, charges de famille.
- Techniques : **assurance** (cotisations, Bismarck), **assistance et solidarité** (impôt, Beveridge 1942), mutualité ; Constitution, article 31.
- **CNSS** (dahir du 27 juillet 1972) : affiliation, immatriculation, déclaration mensuelle, cotisations patronales et salariales.
- Prestations : allocations familiales (jusqu'à 6 enfants), indemnités journalières de maladie et de maternité, invalidité, **vieillesse à 60 ans** (3 240 jours de cotisation), survivants, **IPE** (depuis 2014, 6 mois au plus).
- **AMO** : loi **65-00** (2002, appliquée en 2005), ANAM ; RAMED remplacé par l'**AMO Tadamon** (décembre 2022).
- **Loi-cadre 09-21** (2021) : AMO généralisée (2022), allocations familiales et **aide sociale directe** (2023-2024, registre social unifié, loi 72-18), retraite élargie et IPE généralisée (2025).
- Retraites fragmentées : **CMR** (fonctionnaires, réforme de 2016 : 63 ans), **RCAR** (contractuels publics, CDG), **CNSS** (privé), CIMR (complémentaire).
- Défis : non-déclaration des salariés, équilibre financier des caisses, mise à niveau du système de santé (loi-cadre 06-22).
`,
    exercices: md`
### Exercice 2 — Quel organisme ?

Indiquez l'organisme compétent : 1) la pension d'un instituteur fonctionnaire retraité ; 2) les allocations familiales d'un ouvrier d'usine ; 3) la couverture médicale d'une personne démunie sans revenus ; 4) la retraite d'un agent contractuel d'une commune ; 5) l'indemnisation d'un salarié blessé sur un chantier.

<details><summary>Voir le corrigé</summary>

1) La CMR. 2) La CNSS. 3) L'AMO Tadamon, gérée par la CNSS, cotisations prises en charge par l'État. 4) Le RCAR. 5) L'assureur de l'employeur, au titre de la loi 18-12 sur les accidents du travail.

</details>

### Exercice 3 — Dissertation : plan détaillé

Proposez un plan pour le sujet : « La généralisation de la protection sociale au Maroc ».

<details><summary>Voir le corrigé</summary>

*Introduction* : protection sociale longtemps limitée aux salariés déclarés et aux fonctionnaires ; discours du Trône de 2020 ; loi-cadre 09-21 ; problématique : quelle portée et quelles conditions de réussite ?
**I. Une réforme d'ampleur** — A. Les quatre chantiers : AMO pour tous, aide sociale directe, retraite et IPE élargies. B. Les outils : registre social unifié, AMO Tadamon, régimes des travailleurs non salariés, financement mixte.
**II. Des défis importants** — A. Les défis financiers et institutionnels : soutenabilité, recouvrement des cotisations des non-salariés, fragmentation des caisses. B. Les défis d'effectivité : qualité de l'offre de soins (loi-cadre 06-22), lutte contre la non-déclaration des salariés, ciblage des aides.
*Conclusion* : une réforme structurante vers un État social, dont la réussite dépend de la gouvernance et des moyens.

</details>
`,
    qcm: [
      { q: "Le régime de sécurité sociale du secteur privé est organisé par le dahir de :", choix: ["1958", "1972", "2002", "2021"], bonne: 1, explication: "Dahir portant loi du 27 juillet 1972." },
      { q: "Le Code de la couverture médicale de base est la loi :", choix: ["65-00", "65-99", "09-21", "18-12"], bonne: 0, explication: "Adoptée en 2002." },
      { q: "Le RAMED a été remplacé en 2022 par :", choix: ["La CNOPS", "L'AMO Tadamon", "La CIMR", "Le RCAR"], bonne: 1, explication: "Cotisations prises en charge par l'État." },
      { q: "La loi-cadre relative à la protection sociale est la loi :", choix: ["09-21", "06-22", "72-18", "65-00"], bonne: 0, explication: "Adoptée en 2021." },
      { q: "L'indemnité pour perte d'emploi existe depuis :", choix: ["1972", "2005", "2014", "2022"], bonne: 2, explication: "Versée par la CNSS." },
      { q: "La pension de vieillesse de la CNSS est due à partir de :", choix: ["55 ans", "60 ans", "63 ans", "65 ans"], bonne: 1, explication: "Sous condition de durée de cotisation." },
      { q: "Les fonctionnaires relèvent pour leur retraite de :", choix: ["La CNSS", "La CMR", "Le RCAR", "La CIMR"], bonne: 1, explication: "Caisse marocaine des retraites." },
      { q: "L'encadrement technique de l'assurance maladie est assuré par :", choix: ["L'ANAM", "L'ANRT", "L'AMMC", "La HACA"], bonne: 0, explication: "Agence nationale de l'assurance maladie." },
      { q: "Le ciblage de l'aide sociale directe repose sur :", choix: ["Le registre social unifié", "Le registre de commerce", "Le casier judiciaire", "Le titre foncier"], bonne: 0, explication: "Loi 72-18." },
      { q: "Le modèle de protection sociale financé par l'impôt est associé à :", choix: ["Bismarck", "Beveridge", "Keynes", "Marx"], bonne: 1, explication: "Rapport de 1942." },
    ],
  },
};

export default chapitres;
