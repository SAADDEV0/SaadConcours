// L'organisation administrative (Droit S2) — compléments par chapitre : description SEO, résumé, exercices 2 et 3, QCM.
const md = String.raw;

const chapitres = {
  1: {
    titre: "L'administration et les principes d'organisation administrative",
    description: "Organisation administrative : administration organique et matérielle, personnes morales publiques, centralisation, déconcentration et décentralisation.",
    resume: md`
## L'essentiel — Principes d'organisation

- Administration **organique** (organes) / **matérielle** (activités : police, service public).
- Article 89 de la Constitution : l'administration est à la disposition du gouvernement ; article 154 : égal accès, couverture équitable, continuité.
- Droit administratif : origine du protectorat ; tribunaux administratifs (loi **41-90**, 1993), cours d'appel administratives (loi **80-03**, 2006) ; motivation (loi 03-01), accès à l'information (loi 31-13).
- Personnes morales de droit public : **État**, **collectivités territoriales** (12 régions, 75 préfectures et provinces, environ 1 500 communes), **établissements publics** ; un ministère ou une wilaya n'a pas la personnalité morale.
- **Centralisation** : pouvoir hiérarchique (ordres, annulation, réformation) ; concentration / **déconcentration** (« même marteau, manche raccourci »).
- **Décentralisation** : personnes morales autonomes ; territoriale (conseils élus) ou technique (établissements publics).
- Contrôle de l'État sur les entités décentralisées : **contrôle administratif** (ancienne tutelle), limité par la loi.
- Article 1 de la Constitution : organisation territoriale **décentralisée**, **régionalisation avancée** ; État **unitaire**, pas fédéral.
`,
    exercices: md`
### Exercice 2 — Personnalité morale ou non ?

Indiquez si l'entité a la personnalité morale : 1) le ministère de la Santé ; 2) la commune de Rabat ; 3) l'Office national des chemins de fer ; 4) la wilaya de la région de Casablanca-Settat ; 5) l'université Hassan II ; 6) la direction des impôts.

<details><summary>Voir le corrigé</summary>

1) Non : service de l'État. 2) Oui : collectivité territoriale. 3) Oui : établissement public. 4) Non : circonscription de l'État, le wali représente le pouvoir central. 5) Oui : établissement public. 6) Non : direction du ministère de l'Économie et des Finances.

</details>

### Exercice 3 — Dissertation : plan détaillé

Proposez un plan pour le sujet : « Déconcentration et décentralisation au Maroc : des principes opposés ? »

<details><summary>Voir le corrigé</summary>

*Introduction* : définitions ; article 1 de la Constitution (régionalisation avancée) et article 145 (walis et gouverneurs) ; problématique : les deux principes s'opposent-ils ou se complètent-ils ?
**I. Deux logiques distinctes** — A. La déconcentration, technique de l'État centralisé : agents nommés, pouvoir hiérarchique, unité de l'action de l'État. B. La décentralisation, reconnaissance d'une autonomie locale : personnes morales, conseils élus, contrôle administratif limité.
**II. Deux principes complémentaires** — A. Une décentralisation efficace exige un interlocuteur déconcentré fort : la charte de la déconcentration (2018) accompagne la régionalisation avancée. B. Le wali et le gouverneur, à la fois représentants de l'État et partenaires des collectivités (article 145 : ils assistent les présidents des collectivités).
*Conclusion* : la régionalisation avancée repose sur le couple décentralisation-déconcentration, dans le cadre d'un État unitaire.

</details>
`,
    qcm: [
      { q: "L'administration au sens organique désigne :", choix: ["Les activités d'intérêt général", "Les organes chargés de l'action administrative", "Les jugements administratifs", "Les lois"], bonne: 1, explication: "Le sens matériel désigne les activités." },
      { q: "Selon l'article 89 de la Constitution, l'administration est à la disposition :", choix: ["Du Parlement", "Du gouvernement", "Des tribunaux", "Des partis politiques"], bonne: 1, explication: "Le gouvernement exerce le pouvoir exécutif." },
      { q: "Les tribunaux administratifs ont été créés par la loi :", choix: ["41-90", "80-03", "03-01", "31-13"], bonne: 0, explication: "Installés en 1994." },
      { q: "Un ministère :", choix: ["A la personnalité morale", "N'a pas la personnalité morale", "Est une collectivité territoriale", "Est un établissement public"], bonne: 1, explication: "C'est un service de l'État." },
      { q: "La déconcentration consiste à :", choix: ["Créer des personnes morales autonomes", "Confier des pouvoirs à des agents de l'État sur le territoire", "Supprimer l'État", "Élire les gouverneurs"], bonne: 1, explication: "Ils restent soumis au pouvoir hiérarchique." },
      { q: "Le pouvoir hiérarchique permet notamment au supérieur :", choix: ["D'annuler ou de réformer les décisions du subordonné", "De dissoudre un conseil élu librement", "De voter le budget communal", "De juger les litiges"], bonne: 0, explication: "Caractéristique de la centralisation." },
      { q: "Les établissements publics relèvent de la décentralisation :", choix: ["Territoriale", "Technique", "Fédérale", "Judiciaire"], bonne: 1, explication: "Ils gèrent un service déterminé." },
      { q: "L'organisation territoriale décentralisée fondée sur la régionalisation avancée est affirmée à l'article :", choix: ["1 de la Constitution", "42 de la Constitution", "89 de la Constitution", "175 de la Constitution"], bonne: 0, explication: "Le Maroc reste un État unitaire." },
      { q: "Le Maroc compte :", choix: ["16 régions", "12 régions", "10 régions", "20 régions"], bonne: 1, explication: "Découpage de 2015." },
      { q: "Le contrôle de l'État sur les collectivités territoriales est :", choix: ["Hiérarchique", "Administratif et limité par la loi", "Inexistant", "Exercé par les partis"], bonne: 1, explication: "Ancienne tutelle." },
    ],
  },

  2: {
    titre: "L'administration centrale de l'État",
    description: "Administration centrale : attributions du Roi, du chef du gouvernement (pouvoir réglementaire), Conseil des ministres et de gouvernement, ministères.",
    resume: md`
## L'essentiel — Administration centrale

- **Roi** : Commandeur des croyants (article 41), chef de l'État (article 42), dahirs parfois contresignés ; préside le **Conseil des ministres** (article 48) ; nominations stratégiques (article 49) ; chef des FAR (article 53).
- **Chef du gouvernement** : nommé au sein du parti arrivé en tête (article 47) ; **pouvoir réglementaire** (article 90, décrets contresignés) ; nominations aux emplois civils (article 91) ; préside le **Conseil de gouvernement** (article 92) ; supervise les EEP (article 89).
- Conseil des ministres : orientations stratégiques, lois organiques, orientations de la loi de finances, walis, gouverneurs, ambassadeurs.
- Conseil de gouvernement : politiques publiques, projets de loi et de décrets, secrétaires généraux, directeurs centraux, présidents d'université, doyens.
- **Ministre** : rôle politique (responsabilité, article 93) et administratif (pouvoir hiérarchique, arrêtés sur habilitation).
- Ministère : cabinet, **secrétariat général**, directions centrales, inspection générale, services déconcentrés.
- Organes d'appui : **SGG** (qualité des textes, Bulletin officiel), inspections, commissions interministérielles.
- Pouvoir hiérarchique : instruction, annulation, réformation, substitution, discipline (statut de 1958).
- **Délégation de pouvoir** (transfère la compétence, attachée à la fonction) / **délégation de signature** (personnelle, prend fin avec le changement de titulaire).
`,
    exercices: md`
### Exercice 2 — Quel conseil ?

Indiquez si la question est délibérée en Conseil des ministres ou en Conseil de gouvernement : 1) un projet de loi organique ; 2) la nomination d'un doyen de faculté ; 3) les orientations générales du projet de loi de finances ; 4) un projet de décret réglementaire ; 5) la nomination d'un ambassadeur ; 6) un projet de loi ordinaire sur la protection du consommateur.

<details><summary>Voir le corrigé</summary>

1) Conseil des ministres (article 49). 2) Conseil de gouvernement (article 92). 3) Conseil des ministres. 4) Conseil de gouvernement. 5) Conseil des ministres. 6) Conseil de gouvernement (article 92), avant le dépôt au Parlement.

</details>

### Exercice 3 — Délégation de pouvoir ou de signature ?

Un décret prévoit que « le directeur régional est compétent pour autoriser l'ouverture des établissements privés d'enseignement dans sa région ». Par ailleurs, le ministre autorise par arrêté M. Alami, chef de division, à signer en son nom les ordres de mission. 1) Qualifiez les deux mécanismes. 2) Quelles conséquences en cas de changement de directeur régional ou de ministre ?

<details><summary>Voir le corrigé</summary>

1) Le décret opère une délégation de pouvoir (ou une attribution de compétence) au profit de la fonction de directeur régional ; l'arrêté opère une délégation de signature au profit de M. Alami, désigné personnellement. 2) Le nouveau directeur régional exerce la compétence sans nouvel acte, puisqu'elle est attachée à la fonction ; la délégation de signature prend fin avec le départ du ministre (ou de M. Alami) et doit être renouvelée.

</details>
`,
    qcm: [
      { q: "Le pouvoir réglementaire est exercé par :", choix: ["Le Parlement", "Le chef du gouvernement", "Chaque ministre de façon autonome", "La Cour constitutionnelle"], bonne: 1, explication: "Article 90 de la Constitution." },
      { q: "Le Conseil des ministres est présidé par :", choix: ["Le chef du gouvernement", "Le Roi", "Le président de la Chambre des représentants", "Le ministre de l'Intérieur"], bonne: 1, explication: "Article 48 de la Constitution." },
      { q: "Les walis et gouverneurs sont nommés :", choix: ["Par le ministre de l'Intérieur seul", "Par le Roi en Conseil des ministres", "Par élection", "Par le Conseil de gouvernement"], bonne: 1, explication: "Article 49 de la Constitution." },
      { q: "La nomination des directeurs centraux est délibérée en :", choix: ["Conseil des ministres", "Conseil de gouvernement", "Parlement", "Conseil régional"], bonne: 1, explication: "Article 92 de la Constitution." },
      { q: "Le chef du gouvernement est nommé au sein :", choix: ["Du parti arrivé en tête des élections à la Chambre des représentants", "De la Chambre des conseillers", "Des walis", "Des magistrats"], bonne: 0, explication: "Article 47 de la Constitution." },
      { q: "Les décrets du chef du gouvernement sont contresignés par :", choix: ["Le Roi", "Les ministres chargés de leur exécution", "Le président de la Cour des comptes", "Le wali"], bonne: 1, explication: "Article 90 de la Constitution." },
      { q: "Le haut fonctionnaire qui assure la continuité administrative d'un ministère est :", choix: ["Le chef de cabinet", "Le secrétaire général", "Le secrétaire d'État", "Le gouverneur"], bonne: 1, explication: "Il coordonne les directions." },
      { q: "La publication des textes au Bulletin officiel est assurée par :", choix: ["Le Secrétariat général du gouvernement", "Bank Al-Maghrib", "La Cour de cassation", "Les communes"], bonne: 0, explication: "Le SGG veille aussi à la qualité juridique des textes." },
      { q: "La délégation de signature :", choix: ["Est attachée à la fonction", "Est personnelle et prend fin avec le changement de titulaire", "Transfère la compétence", "N'a jamais besoin de texte"], bonne: 1, explication: "La délégation de pouvoir est attachée à la fonction." },
      { q: "Le statut général de la fonction publique date de :", choix: ["1913", "1958", "1996", "2011"], bonne: 1, explication: "Dahir du 24 février 1958." },
    ],
  },

  3: {
    titre: "L'administration déconcentrée",
    description: "Administration déconcentrée au Maroc : walis et gouverneurs (article 145), pachas, caïds, services extérieurs et charte de la déconcentration de 2018.",
    resume: md`
## L'essentiel — Administration déconcentrée

- **Circonscription administrative** : cadre d'action de l'État, **sans personnalité morale**.
- Échelons : région (wali), préfecture ou province (gouverneur), cercle (chef de cercle), pachalik ou caïdat (pacha, caïd), arrondissement et annexe (khalifas), douar et quartier (cheikh, moqaddem).
- Walis et gouverneurs : nommés par dahir en Conseil des ministres (article 49), soumis au ministère de l'Intérieur.
- **Article 145** : représenter le pouvoir central, appliquer les lois, exercer le **contrôle administratif**, **assister les présidents** des collectivités, **coordonner** les services déconcentrés.
- Autres missions : ordre public, élections, INDH (2005), CRI (loi 47-18, 2019).
- Agents d'autorité (formés à l'Institut royal de l'administration territoriale) et auxiliaires d'autorité (chioukh, moqaddemine).
- Services extérieurs des ministères : soumis au pouvoir hiérarchique ; déconcentration longtemps faible.
- **Charte nationale de la déconcentration** : décret **2-17-618** du 26 décembre 2018 ; région pivot, schémas directeurs, transfert de compétences et de crédits, représentations régionales communes, coordination du wali, commission interministérielle.
- Déconcentration et décentralisation sont **complémentaires** ; Nouveau modèle de développement (2021).
`,
    exercices: md`
### Exercice 2 — Qui est qui ?

Associez : 1) le moqaddem ; 2) le président du conseil régional ; 3) le wali ; 4) le caïd ; 5) le directeur régional de l'agriculture.
a) Élu, organe exécutif d'une collectivité territoriale ; b) agent d'autorité dans un caïdat ; c) auxiliaire d'autorité de proximité ; d) responsable d'un service extérieur d'un ministère ; e) représentant du pouvoir central à l'échelle régionale.

<details><summary>Voir le corrigé</summary>

1-c ; 2-a ; 3-e ; 4-b ; 5-d.

</details>

### Exercice 3 — Commentaire de l'article 145

Dégagez les deux fonctions du gouverneur résultant de l'article 145 de la Constitution et montrez qu'elles peuvent entrer en tension.

<details><summary>Voir le corrigé</summary>

Fonction de **contrôle** : le gouverneur exerce, au nom du gouvernement, le contrôle administratif sur les collectivités territoriales ; il veille à la légalité de leurs actes et peut saisir le juge. Fonction d'**appui** : il assiste les présidents des collectivités dans la mise en œuvre des plans et programmes de développement et coordonne les services de l'État. La tension vient de ce que le même agent est à la fois juge de la légalité et partenaire des projets : un contrôle trop pesant peut freiner l'autonomie des collectivités, un appui trop étroit peut affaiblir le contrôle. La Constitution et les lois organiques de 2015 tranchent en faveur d'un contrôle de légalité exercé principalement par le juge, ce qui renforce la libre administration.

</details>
`,
    qcm: [
      { q: "Une circonscription administrative :", choix: ["A la personnalité morale", "N'a pas la personnalité morale", "Est dirigée par un conseil élu", "Vote un budget propre"], bonne: 1, explication: "C'est un cadre d'action de l'État." },
      { q: "Les attributions des walis et gouverneurs figurent à l'article :", choix: ["89", "135", "145", "154"], bonne: 2, explication: "Constitution de 2011." },
      { q: "Le wali de région est :", choix: ["Élu par le conseil régional", "Le représentant du pouvoir central dans la région", "Le président du conseil régional", "Un magistrat"], bonne: 1, explication: "Nommé par dahir." },
      { q: "Le moqaddem est :", choix: ["Un agent d'autorité", "Un auxiliaire d'autorité", "Un élu communal", "Un juge"], bonne: 1, explication: "Relais de proximité." },
      { q: "La charte nationale de la déconcentration administrative a été adoptée par décret en :", choix: ["2011", "2015", "2018", "2021"], bonne: 2, explication: "Décret 2-17-618 du 26 décembre 2018." },
      { q: "Selon la charte de 2018, l'échelon pivot de la déconcentration est :", choix: ["La commune", "La province", "La région", "Le douar"], bonne: 2, explication: "En cohérence avec la régionalisation avancée." },
      { q: "Les centres régionaux d'investissement ont été réformés par la loi :", choix: ["47-18", "113-14", "41-90", "69-00"], bonne: 0, explication: "En 2019." },
      { q: "Le gouverneur, à l'égard d'un conseil communal, exerce :", choix: ["Un pouvoir hiérarchique", "Un contrôle administratif", "Un pouvoir législatif", "Aucun rôle"], bonne: 1, explication: "Il n'administre pas la commune." },
      { q: "L'INDH a été lancée en :", choix: ["1999", "2005", "2011", "2018"], bonne: 1, explication: "Initiative nationale pour le développement humain." },
      { q: "Les agents d'autorité sont formés notamment à :", choix: ["L'Institut royal de l'administration territoriale", "L'École nationale d'architecture", "L'Institut supérieur de la magistrature", "L'ENCG"], bonne: 0, explication: "À Kénitra." },
    ],
  },

  4: {
    titre: "La décentralisation territoriale : cadre et principes",
    description: "Décentralisation territoriale au Maroc : histoire depuis 1960, articles 135 à 146 de la Constitution, libre administration, subsidiarité et contrôle.",
    resume: md`
## L'essentiel — Cadre et principes

- Étapes : dahir communal de **1960**, charte communale de **1976**, région collectivité en 1992 (loi 47-96 en 1997), charte de 2002 (unité de la ville), Constitution de **2011**, lois organiques de **2015** (111-14, 112-14, 113-14), 12 régions.
- **Article 135** : régions, préfectures et provinces, communes ; personnes morales de droit public ; conseils régionaux et communaux élus au suffrage universel direct.
- **Article 136** : libre administration, coopération, solidarité, participation.
- Article 138 : le président exécute les délibérations ; article 139 : pétitions et concertation.
- **Article 140** : **subsidiarité** ; compétences propres, partagées, transférables ; pouvoir réglementaire local.
- Article 141 : ressources propres et transférées ; article 142 : fonds de mise à niveau sociale et de solidarité interrégionale ; article 143 : pas de tutelle entre collectivités, **prééminence de la région**.
- **Contrôle administratif** (ex-tutelle) : transmission, opposition, nouvelle délibération, **annulation par le tribunal administratif** ; **visa** pour certains actes (budget, emprunts, gestion déléguée).
- Contrôle sur les organes : révocation d'un membre et suspension ou dissolution du conseil dans les cas prévus par la loi, par le juge ou selon la procédure légale.
- Contrôle de **légalité** (principe) / contrôle d'**opportunité** (propre au pouvoir hiérarchique) ; contrôle financier des cours régionales des comptes.
`,
    exercices: md`
### Exercice 2 — Quelle catégorie de compétence ?

Classez selon la logique des lois organiques de 2015 : 1) la collecte des déchets ménagers par la commune ; 2) l'élaboration du schéma régional d'aménagement du territoire par la région ; 3) un programme de lutte contre l'analphabétisme mené conjointement par l'État et une région ; 4) une compétence de l'État confiée progressivement à la région avec les moyens correspondants.

<details><summary>Voir le corrigé</summary>

1) Compétence propre de la commune (service de proximité). 2) Compétence propre de la région. 3) Compétence partagée, exercée par voie contractuelle. 4) Compétence transférable : le transfert doit s'accompagner des ressources correspondantes (article 141).

</details>

### Exercice 3 — Dissertation : plan détaillé

Proposez un plan pour le sujet : « La libre administration des collectivités territoriales au Maroc ».

<details><summary>Voir le corrigé</summary>

*Introduction* : définition ; consécration à l'article 136 de la Constitution et dans les lois organiques de 2015 ; problématique : la libre administration est-elle effective ?
**I. Un principe solidement consacré** — A. Des fondements constitutionnels : personnalité morale, conseils élus au suffrage direct, président exécutif, pouvoir réglementaire, subsidiarité. B. Un contrôle modernisé : passage de la tutelle au contrôle administratif, annulation par le juge, révocation par le juge.
**II. Un principe encore limité** — A. Des limites juridiques : visa de certains actes, place des walis et gouverneurs, dépendance aux transferts de l'État. B. Des limites pratiques : ressources propres faibles, capacités humaines inégales, lenteur des transferts de compétences.
*Conclusion* : une libre administration réelle mais encore en construction, dont l'effectivité dépend des moyens financiers et humains des collectivités.

</details>
`,
    qcm: [
      { q: "Le premier dahir relatif à l'organisation communale date de :", choix: ["1956", "1960", "1976", "2002"], bonne: 1, explication: "Dahir du 23 juin 1960." },
      { q: "Les collectivités territoriales sont énumérées à l'article :", choix: ["1", "135", "145", "154"], bonne: 1, explication: "Régions, préfectures et provinces, communes." },
      { q: "Les conseils régionaux sont élus :", choix: ["Au suffrage indirect", "Au suffrage universel direct", "Par le Parlement", "Par les walis"], bonne: 1, explication: "Depuis 2015, en application de l'article 135." },
      { q: "Le principe de subsidiarité est consacré à l'article :", choix: ["136", "140", "143", "146"], bonne: 1, explication: "Compétences propres, partagées et transférables." },
      { q: "La loi organique relative aux régions porte le numéro :", choix: ["111-14", "112-14", "113-14", "47-96"], bonne: 0, explication: "112-14 : préfectures et provinces ; 113-14 : communes." },
      { q: "Depuis 2015, l'annulation d'une délibération illégale d'un conseil communal est prononcée par :", choix: ["Le gouverneur", "Le tribunal administratif", "Le ministre de l'Intérieur", "Le Parlement"], bonne: 1, explication: "Le représentant de l'État le saisit." },
      { q: "Le budget d'une commune est exécutoire après :", choix: ["Son simple vote", "Le visa du représentant de l'État", "Un référendum local", "L'accord du Parlement"], bonne: 1, explication: "Contrôle renforcé de certains actes." },
      { q: "Selon l'article 143, la région :", choix: ["Exerce une tutelle sur les communes", "Occupe une place prééminente sans tutelle sur les autres collectivités", "Est subordonnée aux provinces", "N'a pas de personnalité morale"], bonne: 1, explication: "Pour les programmes de développement régional." },
      { q: "Le fonds de mise à niveau sociale des régions est prévu par l'article :", choix: ["139", "141", "142", "145"], bonne: 2, explication: "Avec le fonds de solidarité interrégionale." },
      { q: "Le contrôle de légalité porte sur :", choix: ["L'opportunité de la décision", "La conformité de l'acte au droit", "Les préférences du gouverneur", "Le programme politique du conseil"], bonne: 1, explication: "Il respecte la libre administration." },
    ],
  },

  5: {
    titre: "Les collectivités territoriales : régions, préfectures et provinces, communes",
    description: "Régions, préfectures, provinces et communes : organes, élections, compétences (lois organiques 111-14, 112-14, 113-14), plans de développement et finances.",
    resume: md`
## L'essentiel — Les trois collectivités

- Organes : **conseil** (délibérant), **président** élu (exécutif), bureau, commissions, administration ; mandat de **six ans** ; interdiction du changement d'appartenance politique ; représentation des femmes.
- Région : suffrage **direct** (12) ; préfecture ou province : suffrage **indirect** (75) ; commune : suffrage **direct** (environ 1 500).
- **Région** (111-14) : développement économique, formation professionnelle, développement rural, transport régional, culture, environnement ; **PDR** (6 ans) et **SRAT** ; AREP ; président **ordonnateur** depuis 2015.
- **Préfecture ou province** (112-14) : développement social, transport scolaire rural, pistes rurales, lutte contre la pauvreté ; programme de développement (6 ans).
- **Commune** (113-14) : eau, électricité, assainissement, déchets, transport urbain, voirie, marchés ; urbanisme ; **police administrative** du président ; **PAC** (6 ans).
- Gestion : régie, établissement public, **gestion déléguée** (loi 54-05) ; sociétés régionales multiservices (loi 83-21, 2023).
- Arrondissements (communes de plus de 500 000 habitants) : **sans personnalité morale** (unité de la ville).
- Finances : fiscalité locale (lois 47-06 et **07-20**), parts d'IS, d'IR et de taxe sur les assurances (régions), part de **TVA** (communes), patrimoine, emprunts (**FEC**), fonds de solidarité ; forte dépendance aux transferts.
- Budget : préparé et exécuté par le président, voté par le conseil, visé par l'État, contrôlé par la cour régionale des comptes.
`,
    exercices: md`
### Exercice 2 — Quel document de planification ?

Associez : 1) la commune ; 2) la région (développement) ; 3) la région (aménagement à long terme) ; 4) la province.
a) Programme de développement de la province ; b) schéma régional d'aménagement du territoire ; c) plan d'action de la commune ; d) programme de développement régional.

<details><summary>Voir le corrigé</summary>

1-c ; 2-d ; 3-b ; 4-a. Les plans d'action et programmes de développement sont établis pour six ans, dès la première année du mandat.

</details>

### Exercice 3 — Gestion directe ou déléguée ?

Une commune de 300 000 habitants hésite entre gérer elle-même le transport urbain par bus ou le confier à une entreprise privée. Présentez les deux options et leurs avantages.

<details><summary>Voir le corrigé</summary>

Régie (ou établissement public intercommunal) : la commune garde le contrôle direct du service, des tarifs et du personnel ; mais elle supporte les investissements et le risque financier et peut manquer d'expertise. Gestion déléguée (loi 54-05) : un délégataire, choisi après mise en concurrence, exploite le service à ses risques, souvent avec des investissements privés, selon un contrat fixant les obligations, les tarifs et les sanctions ; la commune reste responsable du service et doit contrôler étroitement le délégataire. La délibération décidant la gestion déléguée est soumise au visa du gouverneur. Le choix dépend des capacités financières et techniques de la commune ; l'intercommunalité est souvent utile pour le transport à l'échelle d'une agglomération.

</details>
`,
    qcm: [
      { q: "Les conseils des préfectures et provinces sont élus :", choix: ["Au suffrage universel direct", "Au suffrage indirect par les conseillers communaux", "Par le Parlement", "Par les walis"], bonne: 1, explication: "Contrairement aux régions et aux communes." },
      { q: "La durée du mandat des conseils des collectivités territoriales est de :", choix: ["4 ans", "5 ans", "6 ans", "7 ans"], bonne: 2, explication: "Élections générales en 2015 et 2021." },
      { q: "Depuis 2015, l'ordonnateur des dépenses de la région est :", choix: ["Le wali", "Le président du conseil régional", "Le trésorier régional", "Le ministre de l'Intérieur"], bonne: 1, explication: "Apport majeur de la régionalisation avancée." },
      { q: "Le transport scolaire en milieu rural relève :", choix: ["De la région", "De la province", "De l'État seul", "Des arrondissements"], bonne: 1, explication: "Compétence propre (loi organique 112-14)." },
      { q: "La collecte des déchets ménagers relève :", choix: ["De la commune", "De la région", "Du wali", "De l'agence urbaine"], bonne: 0, explication: "Service de proximité." },
      { q: "Le document de planification de la commune est :", choix: ["Le SRAT", "Le plan d'action de la commune", "Le PDR", "La loi de finances"], bonne: 1, explication: "Établi pour six ans." },
      { q: "Les arrondissements des grandes villes :", choix: ["Ont la personnalité morale", "N'ont pas la personnalité morale", "Sont des provinces", "Sont des régions"], bonne: 1, explication: "Principe de l'unité de la ville." },
      { q: "La gestion déléguée des services publics est régie par la loi :", choix: ["54-05", "47-06", "113-14", "69-00"], bonne: 0, explication: "Adoptée en 2006." },
      { q: "La fiscalité des collectivités territoriales a été réformée par la loi :", choix: ["07-20", "41-90", "80-03", "31-13"], bonne: 0, explication: "Modification de la loi 47-06." },
      { q: "Le Fonds d'équipement communal est :", choix: ["Un impôt", "Un établissement public prêteur des collectivités", "Une commune", "Une ONG"], bonne: 1, explication: "Il finance les investissements locaux." },
    ],
  },

  6: {
    titre: "Les établissements et entreprises publics",
    description: "Établissements publics (EPA, EPIC), principe de spécialité, entreprises publiques, tutelle, contrôle financier (loi 69-00), loi-cadre 50-21 et ANGSPE.",
    resume: md`
## L'essentiel — Établissements et entreprises publics

- **Établissement public** : personne morale de droit public, autonomie administrative et financière, service déterminé, rattachement à une collectivité.
- Caractères : personnalité morale, autonomie (conseil d'administration, directeur général), **spécialité**, tutelle.
- Création par la **loi** (article 71 de la Constitution).
- **EPA** (mission administrative, droit public) / **EPIC** (activité marchande, droit privé dominant pour les usagers et le personnel).
- Exemples : universités (loi 01-00), ONEE, ONCF, CNSS, CDG (1959), ANCFCC, ONSSA, agences urbaines.
- **Entreprises publiques** : sociétés d'État (OCP SA depuis 2008, RAM), filiales publiques, sociétés d'économie mixte, sociétés de développement local ; droit privé (loi 17-95).
- **Tutelle** : nominations (article 49 pour les EEP stratégiques), représentation au conseil, approbation de certains actes, contrats-programmes ; pas un pouvoir hiérarchique.
- **Contrôle financier** : loi **69-00** (2003) — préalable, d'accompagnement, contractuel ; Cour des comptes ; contrôle parlementaire.
- Réforme : loi-cadre **50-21** (2021) — restructuration, gouvernance, séparation des rôles de l'État ; **ANGSPE** (loi **82-20**) : État actionnaire ; Fonds Mohammed VI pour l'investissement (loi 76-20).
`,
    exercices: md`
### Exercice 2 — EPA, EPIC ou société ?

Qualifiez : 1) une université publique ; 2) l'ONCF ; 3) OCP SA ; 4) une agence urbaine ; 5) une société créée par une région avec des partenaires privés pour gérer une zone industrielle.

<details><summary>Voir le corrigé</summary>

1) EPA (enseignement, financement essentiellement public). 2) EPIC (transport ferroviaire financé par les usagers). 3) Société anonyme à capitaux publics majoritaires (entreprise publique), issue de la transformation de l'Office chérifien des phosphates en 2008. 4) EPA (mission d'urbanisme). 5) Société de développement régional, société d'économie mixte de droit privé.

</details>

### Exercice 3 — Le principe de spécialité

Une université publique souhaite créer une filiale commerciale pour vendre des services d'expertise aux entreprises. À quelles conditions est-ce possible ?

<details><summary>Voir le corrigé</summary>

En vertu du principe de spécialité, l'université ne peut agir que dans le cadre des missions prévues par la loi 01-00. Cette loi lui permet de fournir des prestations de services, de valoriser ses recherches et de créer des sociétés filiales ou de prendre des participations, dans les conditions qu'elle fixe. L'opération est donc possible si elle se rattache à ses missions (formation continue, recherche, valorisation, expertise), si elle est approuvée par ses organes (conseil d'université) et si les autorisations de tutelle et de contrôle financier requises sont obtenues. Une activité sans lien avec ces missions serait illégale.

</details>
`,
    qcm: [
      { q: "L'établissement public est une personne morale :", choix: ["De droit privé", "De droit public", "Sans patrimoine", "Sans autonomie"], bonne: 1, explication: "Chargée d'un service public déterminé." },
      { q: "Le principe de spécialité signifie que l'établissement public :", choix: ["Peut exercer toute activité utile", "Ne peut exercer que les missions prévues par son texte", "Est spécialisé en droit", "Est dirigé par un spécialiste"], bonne: 1, explication: "Toute activité hors de sa mission est illégale." },
      { q: "La création des établissements publics relève :", choix: ["Du domaine de la loi", "D'un arrêté ministériel", "D'une délibération communale", "D'un contrat"], bonne: 0, explication: "Article 71 de la Constitution." },
      { q: "L'ONCF est :", choix: ["Un EPA", "Un EPIC", "Une ONG", "Une collectivité territoriale"], bonne: 1, explication: "Activité de transport marchande." },
      { q: "L'Office chérifien des phosphates a été transformé en société anonyme en :", choix: ["1975", "1999", "2008", "2021"], bonne: 2, explication: "OCP SA." },
      { q: "Le contrôle financier de l'État sur les entreprises publiques est régi par la loi :", choix: ["69-00", "50-21", "82-20", "17-95"], bonne: 0, explication: "Adoptée en 2003." },
      { q: "La loi-cadre relative à la réforme des établissements et entreprises publics est la loi :", choix: ["50-21", "69-00", "47-18", "54-05"], bonne: 0, explication: "Adoptée en 2021." },
      { q: "L'ANGSPE a pour mission principale :", choix: ["De juger les entreprises publiques", "D'exercer la fonction d'État actionnaire", "De collecter les impôts locaux", "De nommer les walis"], bonne: 1, explication: "Loi 82-20." },
      { q: "La tutelle sur un établissement public :", choix: ["Est un pouvoir hiérarchique général", "S'exerce dans les cas prévus par les textes", "N'existe pas", "Est exercée par les usagers"], bonne: 1, explication: "Elle respecte l'autonomie de l'établissement." },
      { q: "Une société dont le capital est entièrement détenu par l'État est :", choix: ["Une société d'économie mixte", "Une société d'État", "Une association", "Un établissement public administratif"], bonne: 1, explication: "Elle relève principalement du droit privé." },
    ],
  },

  7: {
    titre: "Les instances indépendantes et les autorités de régulation",
    description: "Instances indépendantes au Maroc : titre XII de la Constitution (CNDH, Médiateur, HACA, Conseil de la concurrence, INPPLC), régulateurs et garanties.",
    resume: md`
## L'essentiel — Instances indépendantes

- **Instance administrative indépendante** : agit au nom de l'État sans pouvoir hiérarchique du gouvernement.
- Raisons : protection des droits, régulation des marchés ouverts, expertise, crédibilité.
- **Titre XII** (articles 154 à 171) : principes des services publics, puis instances ; **article 159** : indépendance ; article 160 : rapport annuel débattu au Parlement.
- **CNDH** (161, loi 76-15), **Médiateur** (162, loi 14-16), **CCME** (163), **APALD** (164), **HACA** (165), **Conseil de la concurrence** (166), **INPPLC** (167, loi 46-19), CSEFRS (168), Conseil de la famille et de l'enfance (169), Conseil de la jeunesse (170) ; CESE (151-153).
- Régulateurs sectoriels : ANRT (télécoms), AMMC (marché des capitaux, loi 43-12), ACAPS (assurances), ANRE (électricité), CNDP (données personnelles, loi 09-08) ; Bank Al-Maghrib (loi 40-17).
- Pouvoirs : avis, réglementation limitée, autorisation, enquête, **sanction**, règlement des différends.
- Garanties : nomination pluraliste, mandat fixe, irrévocabilité, incompatibilités, autonomie financière, collégialité.
- Contrôles : **juge**, Parlement, Cour des comptes.
- Débats : légitimité démocratique, effectivité de l'indépendance, moyens, cohérence.
`,
    exercices: md`
### Exercice 2 — Quelle instance saisir ?

1) Un citoyen constate que ses données personnelles ont été vendues par une entreprise ; 2) une chaîne de radio diffuse des propos discriminatoires ; 3) un fonctionnaire dispose d'informations sur des faits de corruption dans un marché public ; 4) un détenu dénonce des mauvais traitements ; 5) deux opérateurs téléphoniques sont en litige sur les tarifs d'interconnexion.

<details><summary>Voir le corrigé</summary>

1) La CNDP (loi 09-08). 2) La HACA (article 165). 3) L'INPPLC (article 167), sans préjudice d'une plainte au parquet. 4) Le CNDH (article 161), qui abrite le mécanisme national de prévention de la torture ; le parquet peut aussi être saisi. 5) L'ANRT, compétente pour régler les différends entre opérateurs.

</details>

### Exercice 3 — Dissertation : plan détaillé

Proposez un plan pour le sujet : « Les instances indépendantes au Maroc : contre-pouvoirs ou démembrements de l'État ? »

<details><summary>Voir le corrigé</summary>

*Introduction* : définition ; constitutionnalisation en 2011 (titre XII) ; problématique : ces instances renforcent-elles l'État de droit ou fragmentent-elles l'action publique ?
**I. Des contre-pouvoirs au service de l'État de droit** — A. Une indépendance garantie : article 159, nomination pluraliste, mandat, autonomie. B. Une contribution à la protection des droits (CNDH, Médiateur, CNDP) et à la régulation impartiale des marchés (Conseil de la concurrence, ANRT, AMMC).
**II. Des démembrements de l'État aux limites réelles** — A. Une légitimité démocratique indirecte et une indépendance qui dépend de la pratique. B. Des pouvoirs parfois seulement consultatifs, une dispersion des organismes, d'où les réformes récentes (INPPLC en 2021, Conseil de la concurrence en 2022) et le maintien du contrôle du juge et du Parlement.
*Conclusion* : des institutions utiles qui restent intégrées à l'État, dont l'efficacité suppose moyens, indépendance effective et articulation avec le gouvernement et le juge.

</details>
`,
    qcm: [
      { q: "L'indépendance des instances de bonne gouvernance est affirmée à l'article :", choix: ["89", "145", "159", "175"], bonne: 2, explication: "Titre XII de la Constitution." },
      { q: "Le Médiateur est prévu par l'article :", choix: ["161", "162", "165", "167"], bonne: 1, explication: "Défense des droits des usagers de l'administration." },
      { q: "Le CNDH est régi par la loi :", choix: ["76-15", "14-16", "09-08", "43-12"], bonne: 0, explication: "Adoptée en 2018." },
      { q: "La Haute autorité de la communication audiovisuelle est prévue par l'article :", choix: ["163", "165", "166", "168"], bonne: 1, explication: "Pluralisme dans l'audiovisuel." },
      { q: "L'instance chargée de la lutte contre la corruption est :", choix: ["La HACA", "L'INPPLC", "L'ANRT", "La CNDP"], bonne: 1, explication: "Article 167, loi 46-19." },
      { q: "L'autorité qui contrôle le marché des capitaux est :", choix: ["L'AMMC", "L'ACAPS", "L'ANRE", "Le CESE"], bonne: 0, explication: "Loi 43-12." },
      { q: "La protection des données personnelles est assurée par :", choix: ["La CNDP", "Le CCME", "Bank Al-Maghrib", "Le Médiateur"], bonne: 0, explication: "Loi 09-08." },
      { q: "Une décision de sanction du Conseil de la concurrence peut être annulée :", choix: ["Par le ministre du Commerce", "Par le juge saisi d'un recours", "Par le wali", "Par le conseil régional"], bonne: 1, explication: "Pas de pouvoir hiérarchique du gouvernement." },
      { q: "Les rapports annuels des instances sont débattus :", choix: ["Au Parlement", "En Conseil des ministres seulement", "Devant les tribunaux", "En conseil communal"], bonne: 0, explication: "Article 160 de la Constitution." },
      { q: "Une garantie classique d'indépendance est :", choix: ["La révocation libre des membres par le ministre", "Un mandat fixe et l'irrévocabilité des membres", "La soumission hiérarchique", "L'absence de budget"], bonne: 1, explication: "Sauf faute grave selon une procédure prévue." },
    ],
  },
};

export default chapitres;
