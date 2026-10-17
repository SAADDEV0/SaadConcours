// L'action administrative (Droit S3) — compléments par chapitre : description SEO, résumé, exercices 2 et 3, QCM.
const md = String.raw;

const chapitres = {
  1: {
    titre: "Le principe de légalité administrative",
    description: "Principe de légalité au Maroc : sources et hiérarchie des normes, domaines de la loi et du règlement, pouvoir discrétionnaire, circonstances exceptionnelles.",
    resume: md`
## L'essentiel — Principe de légalité

- **Légalité** : l'administration agit conformément au droit, sous le contrôle du juge ; fondement de l'État de droit.
- Constitution : article 6 (tous soumis à la loi), article 118 (recours contre tout acte administratif), article 154.
- Hiérarchie : Constitution, conventions ratifiées, lois organiques, lois, règlements, actes individuels.
- Sources jurisprudentielles : **principes généraux du droit** (égalité, droits de la défense, non-rétroactivité, continuité), jurisprudence administrative.
- **Domaine de la loi** (article 71) / **domaine du règlement** (article 72), pouvoir réglementaire du chef du gouvernement (article 90), délégalisation (article 73).
- **Compétence liée** (décision imposée) / **pouvoir discrétionnaire** (choix d'opportunité, contrôle de l'erreur manifeste, du détournement de pouvoir, de la proportionnalité).
- Aménagements : **circonstances exceptionnelles** (état d'exception, article 59 ; état de siège, article 74 ; état d'urgence sanitaire, décret-loi 2-20-292 de 2020), actes de gouvernement, dahirs royaux (Ronda, 1960 ; Abdelaziz, 1970).
- Sanctions : recours pour excès de pouvoir (article 20 de la loi 41-90), exception d'illégalité, recours de pleine juridiction ; recours gracieux, hiérarchique, Médiateur.
`,
    exercices: md`
### Exercice 2 — Compétence liée ou pouvoir discrétionnaire ?

Qualifiez : 1) la délivrance d'un extrait d'acte de naissance ; 2) l'autorisation d'installer une terrasse de café sur le trottoir ; 3) le choix de l'emplacement d'un nouveau marché communal ; 4) l'inscription sur les listes électorales d'un citoyen remplissant les conditions ; 5) la nomination d'un directeur central.

<details><summary>Voir le corrigé</summary>

1) Compétence liée : l'officier d'état civil doit délivrer l'extrait au demandeur habilité. 2) Pouvoir discrétionnaire : l'occupation du domaine public est une simple faculté, sous réserve d'un refus non discriminatoire et motivé. 3) Pouvoir discrétionnaire, dans le respect des documents d'urbanisme. 4) Compétence liée. 5) Pouvoir discrétionnaire, encadré par les conditions statutaires et la procédure d'appel à candidatures.

</details>

### Exercice 3 — Loi ou règlement ?

Indiquez si la matière relève du domaine de la loi (article 71) ou du règlement (article 72) : a) la fixation du taux d'un impôt ; b) l'organisation interne d'une direction d'un ministère ; c) le régime des libertés publiques ; d) les horaires d'ouverture des bureaux d'une administration ; e) les garanties fondamentales des fonctionnaires.

<details><summary>Voir le corrigé</summary>

a) Loi. b) Règlement. c) Loi. d) Règlement (et même mesure d'organisation interne). e) Loi (statut général de la fonction publique).

</details>
`,
    qcm: [
      { q: "Le principe de légalité signifie que l'administration :", choix: ["Fait la loi", "Agit conformément au droit", "Échappe au juge", "N'est soumise qu'aux circulaires"], bonne: 1, explication: "Sous le contrôle du juge." },
      { q: "Le recours contre tout acte administratif est garanti par l'article :", choix: ["71", "90", "118", "154"], bonne: 2, explication: "Constitution de 2011." },
      { q: "Le pouvoir réglementaire est exercé par :", choix: ["Le Parlement", "Le chef du gouvernement", "Les tribunaux", "Les partis"], bonne: 1, explication: "Article 90." },
      { q: "Les principes généraux du droit sont :", choix: ["Des lois votées", "Des règles dégagées par le juge", "Des circulaires", "Des contrats"], bonne: 1, explication: "Égalité, droits de la défense, etc." },
      { q: "En situation de compétence liée, l'administration :", choix: ["Choisit librement", "Est obligée de prendre une décision déterminée", "Ne peut rien décider", "Consulte le Parlement"], bonne: 1, explication: "Dès que les conditions sont réunies." },
      { q: "Le pouvoir discrétionnaire :", choix: ["Est arbitraire", "Reste soumis au contrôle du juge", "Échappe à toute règle", "N'existe pas au Maroc"], bonne: 1, explication: "Erreur manifeste, détournement de pouvoir." },
      { q: "L'état d'urgence sanitaire de 2020 a été instauré par :", choix: ["Le décret-loi 2-20-292", "La loi 41-90", "La loi 03-01", "Le dahir de 1914"], bonne: 0, explication: "Du 23 mars 2020." },
      { q: "Les circonstances exceptionnelles :", choix: ["Suspendent toute légalité", "Élargissent les pouvoirs de l'administration sous contrôle du juge", "Interdisent toute mesure", "Abrogent la Constitution"], bonne: 1, explication: "Mesures nécessaires et proportionnées." },
      { q: "L'arrêt Abdelhamid Ronda (1960) concerne :", choix: ["La responsabilité médicale", "L'absence de recours contre les dahirs royaux", "Les contrats administratifs", "L'expropriation"], bonne: 1, explication: "Jurisprudence de la chambre administrative de la Cour suprême." },
      { q: "Le délai du recours pour excès de pouvoir est de :", choix: ["30 jours", "60 jours", "90 jours", "1 an"], bonne: 1, explication: "Article 23 de la loi 41-90." },
    ],
  },

  2: {
    titre: "La police administrative",
    description: "Police administrative au Maroc : ordre public (sécurité, tranquillité, salubrité), autorités de police générale et spéciale, limites et proportionnalité.",
    resume: md`
## L'essentiel — Police administrative

- **Police administrative** : prévenir les atteintes à l'ordre public par des règlements ou des décisions individuelles ; préventive.
- **Police judiciaire** : répressive, constate les infractions sous la direction du parquet ; distinction selon le **but**.
- **Ordre public** : **sécurité**, **tranquillité**, **salubrité** ; moralité (circonstances locales), dignité de la personne humaine ; notion matérielle et extérieure.
- Police générale : **chef du gouvernement** (article 90), ministre de l'Intérieur, **walis et gouverneurs** (ordre public, article 145), pachas et caïds, **président du conseil communal** (hygiène, salubrité, tranquillité, circulation : article 100 de la loi organique 113-14).
- **Polices spéciales** : Code de la route (loi 52-05), urbanisme (lois 12-90 et 66-12), étrangers (loi 02-03), eau (loi 36-15), santé, établissements.
- Concours : la police générale n'intervient dans le domaine d'une police spéciale qu'en cas de péril grave ; l'autorité locale peut **aggraver**, jamais assouplir.
- Moyens : règlements, autorisations, interdictions, injonctions, déclaration préalable (dahir de 1958), exécution forcée.
- Limites : but d'ordre public (sinon **détournement de pouvoir**), **menace réelle**, **proportionnalité** (« la liberté est la règle, la restriction l'exception », Benjamin, 1933), compétence.
- Carence fautive de l'autorité de police : responsabilité de l'administration.
`,
    exercices: md`
### Exercice 2 — Administrative ou judiciaire ?

Qualifiez l'opération : 1) un agent règle la circulation à un carrefour ; 2) des policiers arrêtent un cambrioleur pris sur le fait ; 3) le gouverneur interdit un concert qui risque de provoquer des affrontements ; 4) des agents saisissent des marchandises périmées pour les détruire, en dressant un procès-verbal transmis au parquet ; 5) le président de la commune ordonne l'évacuation d'un immeuble menaçant ruine.

<details><summary>Voir le corrigé</summary>

1) Police administrative (sécurité de la circulation). 2) Police judiciaire (infraction flagrante). 3) Police administrative (prévention d'un trouble). 4) Double : le retrait des produits dangereux relève de la police administrative de la salubrité ; le procès-verbal transmis au parquet relève de la police judiciaire. 5) Police administrative (sécurité publique).

</details>

### Exercice 3 — La proportionnalité

Pour lutter contre les nuisances sonores la nuit dans un quartier résidentiel, le président de la commune envisage trois mesures : a) interdire toute musique dans les cafés de la ville après 23 heures ; b) interdire l'ouverture de tout café dans le quartier ; c) imposer des limiteurs de son et une fermeture à 1 heure dans les seuls établissements du quartier concerné. Laquelle est la plus conforme au principe de proportionnalité ?

<details><summary>Voir le corrigé</summary>

La mesure c) est la plus proportionnée : elle est limitée au quartier qui connaît des troubles, et elle utilise un moyen moins contraignant (limiteurs de son, horaire adapté) qu'une interdiction. La mesure a) est trop générale (toute la ville). La mesure b) est excessive : interdire toute activité porte une atteinte disproportionnée à la liberté du commerce alors que des mesures moins contraignantes suffisent.

</details>
`,
    qcm: [
      { q: "La police administrative a pour but :", choix: ["De réprimer les infractions", "De prévenir les atteintes à l'ordre public", "De juger les délinquants", "De collecter l'impôt"], bonne: 1, explication: "Activité préventive." },
      { q: "La distinction entre police administrative et judiciaire repose sur :", choix: ["Le grade de l'agent", "Le but de l'opération", "Le lieu", "L'heure"], bonne: 1, explication: "Prévention ou répression." },
      { q: "Les trois composantes classiques de l'ordre public sont :", choix: ["Sécurité, tranquillité, salubrité", "Liberté, égalité, fraternité", "Moralité, esthétique, dignité", "Ordre, travail, discipline"], bonne: 0, explication: "La trilogie classique." },
      { q: "Le président du conseil communal exerce la police administrative en vertu de :", choix: ["L'article 100 de la loi organique 113-14", "L'article 145 de la Constitution", "La loi 41-90", "Le Code pénal"], bonne: 0, explication: "Hygiène, salubrité, tranquillité, circulation." },
      { q: "Le maintien de l'ordre public dans la province relève notamment :", choix: ["Du président du conseil provincial", "Du gouverneur", "Du juge administratif", "De la Cour des comptes"], bonne: 1, explication: "Représentant du pouvoir central." },
      { q: "Une autorité locale peut :", choix: ["Assouplir une mesure de police nationale", "Aggraver une mesure nationale si les circonstances locales l'exigent", "Annuler un décret", "Ignorer les lois"], bonne: 1, explication: "Jamais l'assouplir." },
      { q: "L'arrêt Benjamin (1933) pose le principe :", choix: ["De la continuité du service public", "De la proportionnalité des mesures de police", "De l'irresponsabilité de l'État", "De l'égalité devant l'impôt"], bonne: 1, explication: "La liberté est la règle." },
      { q: "Une mesure de police prise pour protéger l'intérêt privé d'un élu est entachée de :", choix: ["Vice de forme", "Détournement de pouvoir", "Incompétence territoriale", "Erreur de calcul"], bonne: 1, explication: "But étranger à l'ordre public." },
      { q: "La police de la circulation routière est une police :", choix: ["Générale", "Spéciale", "Judiciaire uniquement", "Religieuse"], bonne: 1, explication: "Code de la route, loi 52-05." },
      { q: "L'inaction de l'autorité de police face à un danger grave et connu :", choix: ["N'a aucune conséquence", "Peut engager la responsabilité de l'administration", "Est toujours légale", "Relève du juge pénal seulement"], bonne: 1, explication: "Carence fautive." },
    ],
  },

  3: {
    titre: "Le service public : notion et principes",
    description: "Service public au Maroc : critères, SPA et SPIC, création et suppression, continuité, égalité, neutralité, mutabilité, articles 154 à 160 et loi 54-19.",
    resume: md`
## L'essentiel — Service public

- **Service public** : activité d'intérêt général, assurée ou contrôlée par une personne publique, soumise en partie au droit public ; école de Duguit et Jèze.
- Critères : intérêt général, lien avec une personne publique (gestion directe ou contrôle), régime particulier.
- **SPA** (missions traditionnelles, financement par l'impôt, droit public) / **SPIC** (activité d'entreprise, redevances, droit privé pour les usagers) ; Bac d'Eloka (1921).
- Création par les autorités publiques ; établissements publics créés par la loi (article 71) ; pas de droit acquis au maintien d'un service non obligatoire ; concurrence (loi 104-12).
- **Continuité** (article 154) : service minimum en cas de grève (loi organique 97-15), imprévision.
- **Égalité** (article 154) : accès, traitement, charges ; différences justifiées par la situation ou l'intérêt général ; **neutralité** (article 155).
- **Mutabilité** : adaptation aux besoins et aux techniques, pas de droit acquis des usagers.
- Principes modernes : qualité, transparence, reddition des comptes, doléances des usagers (article 156), déclaration de patrimoine (article 158).
- **Charte des services publics** : article 157, **loi 54-19** (2021) ; simplification des procédures (loi 55-19, 2020).
`,
    exercices: md`
### Exercice 2 — SPA ou SPIC ?

Qualifiez : 1) un lycée public ; 2) le transport ferroviaire de voyageurs ; 3) la délivrance des cartes nationales d'identité ; 4) la distribution d'électricité ; 5) un hôpital public ; 6) un service communal de transport par bus payant.

<details><summary>Voir le corrigé</summary>

1) SPA (enseignement, financement fiscal). 2) SPIC (activité de transport financée par la vente de billets). 3) SPA (mission régalienne). 4) SPIC (vente d'un bien aux usagers). 5) SPA (santé publique, même si certains actes sont payants). 6) SPIC (transport financé par les usagers), quel que soit le mode de gestion.

</details>

### Exercice 3 — Dissertation : plan détaillé

Proposez un plan pour le sujet : « Les principes du service public dans la Constitution de 2011 ».

<details><summary>Voir le corrigé</summary>

*Introduction* : lois de Rolland ; constitutionnalisation au titre XII ; problématique : la Constitution se borne-t-elle à consacrer les principes classiques ou les renouvelle-t-elle ?
**I. La consécration des principes classiques** — A. Continuité et égalité (article 154) : égal accès, couverture équitable du territoire, continuité des prestations. B. Neutralité et légalité (articles 154 et 155) : obligations des agents.
**II. Le renouvellement par la bonne gouvernance** — A. Les exigences nouvelles : qualité, transparence, reddition des comptes, responsabilité, prise en compte des doléances (articles 154 et 156). B. La mise en œuvre : charte des services publics (loi 54-19), simplification et dématérialisation (loi 55-19), Médiateur.
*Conclusion* : un service public pensé autour de l'usager-citoyen, dont l'effectivité dépend des moyens et de la culture administrative.

</details>
`,
    qcm: [
      { q: "Le service public est d'abord une activité :", choix: ["Lucrative", "D'intérêt général", "Privée exclusivement", "Religieuse"], bonne: 1, explication: "Premier critère." },
      { q: "L'école du service public est associée à :", choix: ["Léon Duguit", "Hans Kelsen", "Max Weber", "Montesquieu"], bonne: 0, explication: "Avec Gaston Jèze." },
      { q: "Un SPIC est principalement financé par :", choix: ["L'impôt", "Les redevances des usagers", "Les dons", "Les amendes"], bonne: 1, explication: "Comme une entreprise." },
      { q: "La distinction SPA / SPIC trouve son origine dans l'arrêt :", choix: ["Blanco", "Bac d'Eloka", "Benjamin", "Marbury v. Madison"], bonne: 1, explication: "Tribunal des conflits, 1921." },
      { q: "Le principe de continuité est consacré par l'article :", choix: ["71", "118", "154", "175"], bonne: 2, explication: "Continuité des prestations." },
      { q: "La neutralité des agents publics est imposée par l'article :", choix: ["47", "155", "160", "172"], bonne: 1, explication: "Constitution de 2011." },
      { q: "Le principe de mutabilité signifie que :", choix: ["Le service ne change jamais", "Le service s'adapte aux besoins et aux techniques", "Les usagers fixent les règles", "Le service doit être gratuit"], bonne: 1, explication: "Pas de droit acquis au maintien des règles." },
      { q: "La charte des services publics est la loi :", choix: ["54-19", "55-19", "54-05", "31-13"], bonne: 0, explication: "Prévue par l'article 157." },
      { q: "Un tarif social de l'eau pour les petites consommations :", choix: ["Viole toujours l'égalité", "Peut être justifié par l'intérêt général", "Est interdit par la Constitution", "Relève du droit pénal"], bonne: 1, explication: "Différence de traitement justifiée." },
      { q: "Les usagers d'un service public non obligatoire ont-ils un droit acquis à son maintien ?", choix: ["Oui", "Non", "Seulement en ville", "Seulement s'ils paient"], bonne: 1, explication: "Principe de mutabilité." },
    ],
  },

  4: {
    titre: "Les modes de gestion des services publics",
    description: "Modes de gestion des services publics au Maroc : régie, établissement public, société de développement local, gestion déléguée (loi 54-05) et PPP (loi 86-12).",
    resume: md`
## L'essentiel — Modes de gestion

- **Gestion directe** (régie, établissement public, société publique) / **gestion déléguée** (contrat avec un tiers, la personne publique reste responsable).
- Fonctions de souveraineté non délégables (justice, police, état civil, défense).
- **Régie** : moyens propres, sans personnalité distincte ; régies autonomes de distribution.
- **Établissement public** : décentralisation technique (ONEE, ONCF, universités).
- **Sociétés de développement local** et **sociétés régionales multiservices** (loi 83-21, 2023).
- **Gestion déléguée** (loi **54-05**, 2006, article 2) : durée limitée, **rémunération sur les usagers**, risques et périls du délégataire.
- Formes : **concession** (investissements du concessionnaire), **affermage** (ouvrages publics, redevance), **gérance** (rémunération par la personne publique).
- Règles : **appel à la concurrence** (article 5), contrôle technique et financier, tarifs, équilibre financier, **biens de retour**, de reprise et propres ; fin par échéance, rachat, déchéance.
- Expérience : Lydec (Casablanca, 1997), Redal, Amendis ; reprise par les sociétés régionales.
- **PPP** (loi **86-12**, 2014, modifiée en 2020) : mission globale, **rémunération par la personne publique**, évaluation préalable, mise en concurrence.
- Personnes privées habilitées : ordres professionnels, fédérations sportives.
`,
    exercices: md`
### Exercice 2 — Quelle forme ?

Qualifiez : 1) une entreprise construit à ses frais une station d'épuration et l'exploite pendant 25 ans en percevant une redevance sur les usagers ; 2) une commune confie à une société l'exploitation de son réseau d'eau existant, la société reversant une redevance à la commune ; 3) l'État confie à un groupement la conception, le financement, la construction et la maintenance d'un hôpital, contre un loyer annuel ; 4) une commune assure elle-même l'éclairage public avec ses agents.

<details><summary>Voir le corrigé</summary>

1) Concession (gestion déléguée, loi 54-05). 2) Affermage (gestion déléguée). 3) Partenariat public-privé (loi 86-12). 4) Régie (gestion directe).

</details>

### Exercice 3 — Les biens en fin de contrat

À la fin d'une concession de distribution d'eau de 30 ans, quel est le sort : a) des canalisations et des stations de pompage construites par le concessionnaire ; b) des véhicules de service que la commune souhaite racheter ; c) des locaux administratifs que le concessionnaire a achetés pour son siège régional et qui ne sont pas nécessaires au service ?

<details><summary>Voir le corrigé</summary>

a) Biens de retour : nécessaires au service, ils reviennent gratuitement à la personne publique, leur coût ayant été amorti pendant la concession. b) Biens de reprise : la personne publique peut les racheter à leur valeur fixée selon le contrat. c) Biens propres : ils restent la propriété du concessionnaire.

</details>
`,
    qcm: [
      { q: "Dans la gestion directe, le service est géré :", choix: ["Par une entreprise privée", "Par la personne publique elle-même ou un établissement public", "Par les usagers", "Par une ONG étrangère"], bonne: 1, explication: "Régie ou établissement public." },
      { q: "La loi relative à la gestion déléguée des services publics est la loi :", choix: ["54-05", "86-12", "83-21", "54-19"], bonne: 0, explication: "Adoptée en 2006." },
      { q: "Dans la concession, les investissements sont réalisés par :", choix: ["La personne publique", "Le concessionnaire", "Les usagers", "L'État obligatoirement"], bonne: 1, explication: "Il se rémunère sur les usagers." },
      { q: "Dans l'affermage, les ouvrages sont fournis par :", choix: ["Le fermier", "La personne publique", "Les banques", "Les usagers"], bonne: 1, explication: "Le fermier exploite et entretient." },
      { q: "Le délégataire est choisi en principe :", choix: ["Librement par le président", "Après appel à la concurrence", "Par tirage au sort", "Par le Parlement"], bonne: 1, explication: "Article 5 de la loi 54-05." },
      { q: "Les biens nécessaires au service qui reviennent gratuitement à la personne publique sont :", choix: ["Les biens propres", "Les biens de retour", "Les biens de reprise", "Les biens meubles"], bonne: 1, explication: "Fin du contrat de gestion déléguée." },
      { q: "Dans un PPP, le partenaire privé est rémunéré principalement par :", choix: ["Les usagers", "La personne publique", "Les dons", "La Bourse"], bonne: 1, explication: "Loyers liés à la performance." },
      { q: "La loi sur les partenariats public-privé est la loi :", choix: ["86-12", "54-05", "12-90", "69-00"], bonne: 0, explication: "Modifiée en 2020." },
      { q: "Les sociétés régionales multiservices ont été créées par la loi :", choix: ["83-21", "113-14", "54-19", "41-90"], bonne: 0, explication: "Eau, électricité, assainissement." },
      { q: "La police et la justice peuvent-elles être déléguées à une entreprise privée ?", choix: ["Oui", "Non, ce sont des fonctions de souveraineté", "Oui, par contrat de PPP", "Oui, avec l'accord des usagers"], bonne: 1, explication: "Missions non délégables." },
    ],
  },

  5: {
    titre: "Les actes administratifs unilatéraux",
    description: "Actes administratifs unilatéraux : actes réglementaires et individuels, compétence, forme, motivation (loi 03-01), entrée en vigueur, retrait et abrogation.",
    resume: md`
## L'essentiel — Actes administratifs unilatéraux

- **Acte administratif unilatéral** : acte d'une autorité administrative qui modifie l'ordonnancement juridique sans le consentement des destinataires.
- Non décisoires : mesures d'ordre intérieur, circulaires interprétatives (sauf circulaire impérative), actes préparatoires, informations.
- Classifications : **réglementaires** (générales et impersonnelles), **individuels**, collectifs et d'espèce ; créateurs de droits ou non.
- **Compétence** matérielle, territoriale, temporelle ; délégations.
- **Forme** : écrit, signé ; silence = **rejet implicite** en principe (acceptation dans certains cas : loi 55-19).
- **Procédure** : consultations, enquête publique, **droits de la défense** ; formalités substantielles.
- **Motivation** (loi **03-01**, 2002) : décisions individuelles **défavorables**, considérations de droit et de fait ; exceptions (urgence, sûreté, décisions implicites).
- Entrée en vigueur : **publication** (règlements), **notification** (actes individuels) ; non-rétroactivité.
- **Privilège du préalable** ; recours non suspensif (sursis à exécution) ; exécution forcée seulement si la loi l'autorise, en urgence ou à défaut d'autre voie.
- **Abrogation** (pour l'avenir ; règlement abrogeable à tout moment) / **retrait** (rétroactif ; acte créateur de droits illégal retiré dans le délai de **60 jours** ; fraude : à tout moment).
`,
    exercices: md`
### Exercice 2 — Décision ou non ?

Indiquez si l'acte est une décision susceptible de recours : 1) un arrêté municipal interdisant le stationnement dans une rue ; 2) une circulaire qui rappelle aux agents les dispositions du statut ; 3) le changement de bureau d'un fonctionnaire dans le même service ; 4) le refus d'un permis de construire ; 5) l'avis d'une commission consultative préalable à une décision du ministre.

<details><summary>Voir le corrigé</summary>

1) Oui : acte réglementaire. 2) Non : circulaire interprétative. 3) Non : mesure d'ordre intérieur sans incidence sur la situation de l'agent. 4) Oui : décision individuelle défavorable, qui doit être motivée. 5) Non en principe : acte préparatoire ; c'est la décision finale du ministre qui pourra être attaquée, l'irrégularité de l'avis étant invoquée à cette occasion.

</details>

### Exercice 3 — Retrait ou abrogation ?

Le 1er février, un gouverneur accorde à une entreprise une autorisation d'exploiter une carrière. Que peut-il faire : a) le 15 mars, s'il découvre que l'autorisation est illégale ; b) le 1er juin, pour la même raison ; c) le 1er juin, s'il découvre que l'entreprise a produit de faux documents ; d) en septembre, s'il veut modifier pour l'avenir les conditions générales d'exploitation fixées par un arrêté réglementaire ?

<details><summary>Voir le corrigé</summary>

a) Il peut retirer l'autorisation illégale, car il est dans le délai de 60 jours. b) Il ne peut plus la retirer (délai expiré) ; il peut seulement l'abroger pour l'avenir si les textes le permettent ou si l'entreprise ne respecte pas ses obligations. c) Il peut la retirer à tout moment : la fraude ne crée pas de droits. d) Il peut modifier l'arrêté réglementaire à tout moment pour l'avenir (abrogation ou modification), nul n'ayant de droit acquis au maintien d'un règlement, sous réserve de mesures transitoires si la sécurité juridique l'exige.

</details>
`,
    qcm: [
      { q: "L'acte administratif unilatéral modifie l'ordonnancement juridique :", choix: ["Avec le consentement des destinataires", "Sans le consentement des destinataires", "Seulement par contrat", "Seulement par jugement"], bonne: 1, explication: "Prérogative de puissance publique." },
      { q: "Un arrêté fixant le stationnement dans une ville est un acte :", choix: ["Individuel", "Réglementaire", "Contractuel", "Judiciaire"], bonne: 1, explication: "Portée générale et impersonnelle." },
      { q: "La loi relative à la motivation des décisions administratives est la loi :", choix: ["03-01", "31-13", "41-90", "54-05"], bonne: 0, explication: "Adoptée en 2002." },
      { q: "Doivent être motivées les décisions individuelles :", choix: ["Favorables", "Défavorables", "Réglementaires", "Implicites seulement"], bonne: 1, explication: "Loi 03-01." },
      { q: "Le silence de l'administration vaut en principe :", choix: ["Acceptation", "Décision implicite de rejet", "Rien", "Sanction"], bonne: 1, explication: "Ouvre le recours contentieux." },
      { q: "Un acte individuel entre en vigueur à l'égard de l'intéressé par :", choix: ["Sa publication au Bulletin officiel", "Sa notification", "Son vote", "Son enregistrement fiscal"], bonne: 1, explication: "Les règlements, par la publication." },
      { q: "Le privilège du préalable signifie que :", choix: ["L'acte doit être approuvé par un juge", "L'acte s'impose immédiatement sans intervention du juge", "Le recours est suspensif", "L'acte est rétroactif"], bonne: 1, explication: "Présomption de légalité." },
      { q: "L'abrogation fait disparaître l'acte :", choix: ["Rétroactivement", "Pour l'avenir", "Pour le passé et l'avenir", "Jamais"], bonne: 1, explication: "Le retrait est rétroactif." },
      { q: "Un acte créateur de droits illégal peut être retiré :", choix: ["À tout moment", "Dans le délai du recours contentieux", "Jamais", "Après dix ans"], bonne: 1, explication: "Soixante jours, sauf fraude." },
      { q: "Une mesure d'ordre intérieur :", choix: ["Est susceptible de recours pour excès de pouvoir", "N'est pas susceptible de recours", "Est un règlement", "Est un contrat"], bonne: 1, explication: "Mesure de faible importance." },
    ],
  },

  6: {
    titre: "Les contrats administratifs",
    description: "Contrats administratifs au Maroc : critères, marchés publics (décret 2-22-431), pouvoirs de l'administration, fait du prince, imprévision, sujétions.",
    resume: md`
## L'essentiel — Contrats administratifs

- Contrat **administratif** par la **loi** (marchés, gestion déléguée, PPP, occupation du domaine) ou par les **critères** : personne publique + **clause exorbitante** ou **exécution du service public** ; juge administratif (article 8 de la loi 41-90).
- **Marché public** : travaux, fournitures, services, payés par l'administration ; décret **2-22-431** (2023).
- Principes : liberté d'accès, égalité, transparence, intégrité, efficacité, dématérialisation.
- Procédures : **appel d'offres** (ouvert ou restreint, offre économiquement la plus avantageuse), **concours**, **procédure négociée** (cas limités), **bons de commande** ; portail des marchés publics ; commission d'appel d'offres.
- Garanties : motivation, réclamations, Commission nationale de la commande publique, juge ; préférence PME et nationale.
- Pouvoirs de l'administration : **direction et contrôle**, **modification unilatérale** (sans bouleverser l'économie, avec indemnisation), **sanction** (pénalités, mise en régie, résiliation pour faute), **résiliation pour intérêt général** (indemnisation intégrale).
- Droits du cocontractant : prix, révision, délais de paiement et intérêts moratoires, **équilibre financier**.
- **Fait du prince** (mesure de l'administration contractante : indemnisation intégrale) ; **imprévision** (événement extérieur, bouleversement temporaire : obligation de continuer, indemnité partielle) ; **sujétions imprévues** (difficultés matérielles exceptionnelles) ; force majeure.
`,
    exercices: md`
### Exercice 2 — Administratif ou privé ?

Qualifiez : 1) un marché de fourniture d'ordinateurs passé par un ministère ; 2) un contrat par lequel une commune loue un appartement privé pour y loger un agent, sans clause particulière ; 3) le contrat de gestion déléguée du transport urbain ; 4) l'autorisation contractuelle d'installer un kiosque sur une place publique ; 5) un contrat de PPP pour une station de dessalement.

<details><summary>Voir le corrigé</summary>

1) Administratif par détermination de la loi (marché public). 2) En principe de droit privé : bail ordinaire sans clause exorbitante ni participation au service public. 3) Administratif (loi 54-05). 4) Administratif (occupation du domaine public). 5) Administratif (loi 86-12).

</details>

### Exercice 3 — Fait du prince ou imprévision ?

Qualifiez : a) la commune délégante impose au délégataire du transport urbain la gratuité pour tous les étudiants, mesure non prévue au contrat ; b) la hausse brutale du prix du gasoil liée à une guerre lointaine bouleverse l'économie du contrat de transport ; c) l'État augmente de manière générale la TVA sur tous les produits.

<details><summary>Voir le corrigé</summary>

a) Fait du prince : mesure de l'administration contractante qui aggrave les charges ; indemnisation intégrale. b) Imprévision : événement extérieur, imprévisible, bouleversant temporairement l'économie ; le délégataire continue, avec une indemnité couvrant une partie de la perte. c) Ni l'un ni l'autre en principe : mesure générale prise par une autorité qui n'est pas la commune contractante ; elle peut seulement, si elle bouleverse l'économie du contrat, relever de l'imprévision, ou être prise en compte par les clauses de révision des tarifs.

</details>
`,
    qcm: [
      { q: "Un contrat est administratif par les critères jurisprudentiels s'il comporte :", choix: ["Deux personnes privées", "Une personne publique et une clause exorbitante ou l'exécution du service public", "Une signature notariée", "Un prix élevé"], bonne: 1, explication: "Critère organique et critère matériel." },
      { q: "Les marchés publics sont régis par le décret :", choix: ["2-22-431", "2-15-426", "2-17-618", "2-20-292"], bonne: 0, explication: "Du 8 mars 2023." },
      { q: "La procédure de principe des marchés publics est :", choix: ["La procédure négociée", "L'appel d'offres", "Le gré à gré", "Le tirage au sort"], bonne: 1, explication: "Ouvert ou restreint." },
      { q: "L'administration peut modifier unilatéralement le contrat à condition :", choix: ["De ne pas bouleverser son économie et d'indemniser", "D'obtenir l'accord du juge", "De payer le double du prix", "De ne jamais rien ajouter"], bonne: 0, explication: "Pouvoir de modification unilatérale." },
      { q: "La mise en régie est :", choix: ["Une récompense", "Une sanction : exécution par un tiers aux frais du cocontractant défaillant", "Un mode de passation", "Une résiliation pour intérêt général"], bonne: 1, explication: "Pouvoir de sanction." },
      { q: "La résiliation pour motif d'intérêt général ouvre droit :", choix: ["À aucune indemnité", "À une indemnisation intégrale", "À une amende", "À la moitié du prix"], bonne: 1, explication: "Perte subie et gain manqué." },
      { q: "Le fait du prince résulte :", choix: ["D'un événement naturel", "D'une mesure de l'administration contractante", "D'une faute du cocontractant", "D'une décision du juge"], bonne: 1, explication: "Indemnisation intégrale." },
      { q: "En cas d'imprévision, le cocontractant :", choix: ["Peut arrêter l'exécution", "Doit continuer à exécuter et reçoit une indemnité", "Perd tout droit", "Doit résilier le contrat"], bonne: 1, explication: "Continuité du service public." },
      { q: "La découverte d'une nappe d'eau imprévue lors des fondations relève :", choix: ["Du fait du prince", "Des sujétions imprévues", "De la force majeure obligatoirement", "De la faute de l'entreprise"], bonne: 1, explication: "Difficulté matérielle exceptionnelle." },
      { q: "Le contentieux des contrats administratifs relève :", choix: ["Du tribunal de commerce", "Du tribunal administratif", "Du juge pénal", "De la Cour des comptes"], bonne: 1, explication: "Article 8 de la loi 41-90." },
    ],
  },

  7: {
    titre: "Les moyens de l'action administrative : biens publics, expropriation et agents",
    description: "Domaine public et privé (dahir de 1914), occupation temporaire, expropriation (loi 7-81), statut de la fonction publique de 1958 et discipline des agents.",
    resume: md`
## L'essentiel — Biens, expropriation, agents

- **Domaine public** (dahir du 1er juillet 1914) : biens affectés à l'usage du public ou à un service public ; **inaliénable**, **imprescriptible**, **insaisissable** ; déclassement préalable à la vente.
- **Domaine privé** : régime proche de la propriété privée ; biens des collectivités (loi 57-19) ; terres collectives et habous à part.
- **Occupation temporaire** (dahir du 30 novembre 1918) : autorisation **précaire et révocable**, redevance.
- **Expropriation** (loi **7-81**, 1982 ; article 35 de la Constitution) : **DUP** et enquête de deux mois, **acte de cessibilité**, commission d'évaluation, accord amiable ; à défaut, **tribunal administratif** (transfert, indemnité, prise de possession en urgence).
- Indemnité : préjudice **direct, matériel et certain**, sans plus-value spéculative (article 20) ; contrôle du **bilan coût-avantages**.
- **Fonctionnaire** (statut du **24 février 1958**, article 2) : emploi permanent, titularisation ; situation **statutaire et réglementaire** ; contractuels à part.
- Recrutement par **concours** (égal accès) ; stage, titularisation.
- Droits : rémunération, carrière, congés, protection sociale, syndicat, grève encadrée, protection fonctionnelle.
- Obligations : servir, obéissance (sauf ordre manifestement illégal), discrétion, neutralité, probité, pas de cumul (article 15).
- **Sanctions** (article **66**) : avertissement, blâme, radiation du tableau, abaissement d'échelon, rétrogradation, exclusion temporaire, révocation ; conseil de discipline, dossier, défense, motivation ; contrôle de proportionnalité.
`,
    exercices: md`
### Exercice 2 — Domaine public ou privé ?

Qualifiez : 1) une plage ; 2) un terrain nu appartenant à l'État, non affecté ; 3) une école publique ; 4) un appartement appartenant à une commune et loué à un particulier ; 5) une voie ferrée.

<details><summary>Voir le corrigé</summary>

1) Domaine public naturel (rivage de la mer). 2) Domaine privé de l'État. 3) Domaine public (affecté au service public de l'enseignement). 4) Domaine privé de la commune. 5) Domaine public (affecté au service public du transport ferroviaire).

</details>

### Exercice 3 — Calcul d'une indemnité d'expropriation

Un terrain agricole de 2 hectares est exproprié pour une route. Sa valeur avant l'annonce du projet était de 300 000 DH par hectare ; depuis l'annonce, les voisins le vendent 450 000 DH par hectare. L'exploitant perd en outre une récolte estimée à 40 000 DH, et le reste de son exploitation subit une dépréciation de 25 000 DH. Quelle indemnité doit être retenue ?

<details><summary>Voir le corrigé</summary>

La plus-value spéculative liée à l'annonce du projet n'est pas prise en compte (article 20 de la loi 7-81) : la valeur retenue est de 300 000 DH par hectare, soit 2 × 300 000 = 600 000 DH. S'ajoutent les préjudices directs, matériels et certains : perte de récolte 40 000 DH et dépréciation du reste de l'exploitation 25 000 DH. Indemnité totale : 600 000 + 40 000 + 25 000 = 665 000 DH (sous réserve de l'appréciation du juge, qui retient la valeur au jour de la décision d'expropriation).

</details>
`,
    qcm: [
      { q: "Le domaine public de l'État est régi par le dahir du :", choix: ["1er juillet 1914", "12 août 1913", "24 février 1958", "15 novembre 1958"], bonne: 0, explication: "Inaliénable et imprescriptible." },
      { q: "L'imprescriptibilité du domaine public signifie que :", choix: ["Il peut être vendu librement", "Nul ne peut l'acquérir par une occupation prolongée", "Il peut être saisi", "Il doit être loué"], bonne: 1, explication: "Même après une très longue occupation." },
      { q: "L'autorisation d'occupation temporaire du domaine public est :", choix: ["Perpétuelle", "Précaire et révocable", "Un titre de propriété", "Gratuite obligatoirement"], bonne: 1, explication: "Dahir du 30 novembre 1918." },
      { q: "La loi relative à l'expropriation pour cause d'utilité publique est la loi :", choix: ["7-81", "41-90", "12-90", "39-08"], bonne: 0, explication: "Adoptée en 1982." },
      { q: "Le transfert de propriété en cas de désaccord est prononcé par :", choix: ["Le wali", "Le tribunal administratif", "Le conservateur foncier", "Le Parlement"], bonne: 1, explication: "Phase judiciaire de l'expropriation." },
      { q: "L'indemnité d'expropriation tient compte :", choix: ["De la plus-value liée à l'annonce du projet", "Du préjudice direct, matériel et certain", "Du préjudice moral exclusivement", "D'un forfait fixe"], bonne: 1, explication: "Article 20 de la loi 7-81." },
      { q: "Le statut général de la fonction publique date du :", choix: ["24 février 1958", "1er juillet 1914", "3 février 2004", "29 juillet 2011"], bonne: 0, explication: "Plusieurs fois modifié." },
      { q: "Le fonctionnaire est dans une situation :", choix: ["Contractuelle", "Statutaire et réglementaire", "Commerciale", "Libérale"], bonne: 1, explication: "Droits et obligations fixés par les textes." },
      { q: "Les sanctions disciplinaires des fonctionnaires sont énumérées à l'article :", choix: ["15 du statut", "66 du statut", "2 du statut", "100 du statut"], bonne: 1, explication: "De l'avertissement à la révocation." },
      { q: "Le principe d'égal accès aux emplois publics implique un recrutement en principe :", choix: ["Par cooptation", "Par concours", "Par tirage au sort", "Par élection"], bonne: 1, explication: "Selon le mérite." },
    ],
  },
};

export default chapitres;
