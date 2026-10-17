// Les grands systèmes constitutionnels (Droit S2) — compléments par chapitre : description SEO, résumé, exercices 2 et 3, QCM.
const md = String.raw;

const chapitres = {
  1: {
    titre: "Le droit constitutionnel comparé : objet et grilles d'analyse",
    description: "Droit constitutionnel comparé : utilité, critères de classification des systèmes, grille d'analyse commune et place de la Constitution marocaine de 2011.",
    resume: md`
## L'essentiel — Méthode comparative

- **Droit constitutionnel comparé** : connaître les modèles, comprendre son propre système, éclairer les réformes, former l'esprit critique.
- Rappel de la typologie (S1) : parlementaire, présidentiel, semi-présidentiel, directorial, non démocratique.
- Autres critères : **forme de l'État** (unitaire, fédéral, régional), **monarchie ou république**, **système de partis** (Duverger : scrutin majoritaire et bipartisme), **justice constitutionnelle** (diffuse ou concentrée, modèle de Kelsen), place du peuple, constitution écrite ou coutumière.
- Grille : histoire, chef de l'État, gouvernement, Parlement, rapports entre pouvoirs, justice constitutionnelle, territoire, pratique.
- Pièges : juridisme, ethnocentrisme, transposition mécanique, anachronisme.
- Maroc : Constitution du **29 juillet 2011** ; article 1 : monarchie constitutionnelle, démocratique, parlementaire et sociale.
- Traits parlementaires : articles 47, 88, 103, 105 ; dissolution (article 51).
- Pouvoirs propres du Roi : articles 41, 42, 48, 53, 54, 115.
- Contrôle concentré (Cour constitutionnelle, articles 129 à 134 ; exception d'inconstitutionnalité, article 133).
`,
    exercices: md`
### Exercice 2 — Diffus ou concentré ?

Indiquez le type de contrôle de constitutionnalité : 1) États-Unis ; 2) Allemagne ; 3) Maroc ; 4) Royaume-Uni ; 5) Espagne.

<details><summary>Voir le corrigé</summary>

1) Contrôle diffus : tout juge peut écarter une loi inconstitutionnelle, sous l'autorité de la Cour suprême (Marbury v. Madison, 1803). 2) Contrôle concentré : Cour constitutionnelle fédérale de Karlsruhe. 3) Contrôle concentré : Cour constitutionnelle (articles 129 à 134), y compris par voie d'exception (article 133). 4) Pas de contrôle de constitutionnalité des lois du Parlement, en raison de la souveraineté parlementaire ; les juges peuvent seulement déclarer une loi incompatible avec la Convention européenne des droits de l'homme (Human Rights Act 1998). 5) Contrôle concentré : Tribunal constitutionnel.

</details>

### Exercice 3 — Dissertation : plan détaillé

Proposez un plan pour le sujet : « Peut-on exporter un régime politique ? »

<details><summary>Voir le corrigé</summary>

*Introduction* : diffusion des modèles (Westminster dans le Commonwealth, modèle présidentiel en Amérique latine, Ve République en Afrique francophone) ; problématique : une institution conserve-t-elle ses effets hors de son pays d'origine ?
**I. Une circulation réelle des modèles** — A. Les emprunts sont fréquents et souvent réussis (cours constitutionnelles sur le modèle européen, motion de censure constructive reprise de l'Allemagne par l'Espagne). B. Ils répondent à des besoins communs : stabilité gouvernementale, protection des droits.
**II. Une transposition toujours adaptée** — A. Les échecs des transpositions mécaniques : présidentialisme latino-américain, régimes de parti unique sous des constitutions démocratiques. B. Le poids du contexte : système de partis, histoire, culture politique, légitimités propres (exemple de la monarchie marocaine, qui combine emprunts et spécificités).
*Conclusion* : on n'exporte pas un régime, on adapte des institutions.

</details>
`,
    qcm: [
      { q: "Le critère classique de classification des régimes repose sur :", choix: ["La religion de l'État", "Les rapports entre exécutif et législatif", "La taille du territoire", "Le niveau de richesse"], bonne: 1, explication: "Séparation souple ou stricte des pouvoirs." },
      { q: "La forme fédérale de l'État caractérise :", choix: ["La France", "Les États-Unis", "Le Maroc", "Le Royaume-Uni"], bonne: 1, explication: "Ainsi que l'Allemagne et la Suisse." },
      { q: "Le contrôle de constitutionnalité concentré s'inspire de :", choix: ["Hans Kelsen", "John Locke", "Walter Bagehot", "Alexis de Tocqueville"], bonne: 0, explication: "Cour constitutionnelle autrichienne de 1920." },
      { q: "Selon Duverger, le scrutin majoritaire à un tour tend à favoriser :", choix: ["Le multipartisme", "Le bipartisme", "Le parti unique", "L'absence de partis"], bonne: 1, explication: "Exemple britannique." },
      { q: "La Constitution marocaine actuelle date de :", choix: ["1962", "1996", "2011", "2016"], bonne: 2, explication: "Promulguée le 29 juillet 2011." },
      { q: "L'article 1 de la Constitution marocaine définit le régime comme une monarchie :", choix: ["Absolue", "Constitutionnelle, démocratique, parlementaire et sociale", "Élective", "Fédérale"], bonne: 1, explication: "Avec séparation, équilibre et collaboration des pouvoirs." },
      { q: "Le chef du gouvernement marocain est nommé au sein du parti arrivé en tête en vertu de l'article :", choix: ["42", "47", "88", "105"], bonne: 1, explication: "Emprunt à la logique parlementaire." },
      { q: "L'exception d'inconstitutionnalité est prévue à l'article :", choix: ["129", "132", "133", "134"], bonne: 2, explication: "Comparable à la QPC française." },
      { q: "Le juridisme, en droit comparé, consiste à :", choix: ["Ignorer les textes", "S'en tenir au texte sans regarder la pratique", "Comparer des époques", "Étudier les partis"], bonne: 1, explication: "La pratique peut s'éloigner du texte." },
      { q: "L'Espagne est :", choix: ["Une république fédérale", "Une monarchie parlementaire à structure autonomique", "Un régime présidentiel", "Un régime directorial"], bonne: 1, explication: "Constitution de 1978." },
    ],
  },

  2: {
    titre: "Le Royaume-Uni : le modèle parlementaire de Westminster",
    description: "Le régime britannique : formation historique, constitution non codifiée, Couronne, Premier ministre, Parlement, bipartisme, dévolution et Brexit.",
    resume: md`
## L'essentiel — Le Royaume-Uni

- Formation progressive : Magna Carta (1215), Petition of Right (1628), Habeas Corpus (1679), **Bill of Rights (1689)**, Act of Settlement (1701), Walpole (1721), **Parliament Acts (1911, 1949)**.
- « Le roi règne mais ne gouverne pas » ; Bagehot (1867) : éléments dignifiés et efficients.
- Constitution **non codifiée** et souple : statutes, common law, **conventions**, ouvrages d'autorité.
- **Souveraineté du Parlement** (Dicey, 1885) ; Human Rights Act 1998 : déclaration d'incompatibilité, pas d'annulation.
- Couronne (Charles III depuis 2022) : prérogative royale exercée sur l'avis du gouvernement ; droits d'être consulté, d'encourager, de mettre en garde.
- **Premier ministre** : chef du parti majoritaire ; Cabinet et responsabilité collective ; Shadow Cabinet de l'opposition.
- Communes : 650 députés, scrutin majoritaire à un tour ; Lords : nommés, pouvoir de **retardement** seulement ; Cour suprême depuis 2009 (Constitutional Reform Act 2005).
- Parlementarisme majoritaire : bipartisme, majorité disciplinée, « dictature élective » (Hailsham, 1976) ; coalition de 2010-2015.
- Réformes : **dévolution** (1998), référendum écossais (2014), **Brexit** (référendum de 2016, sortie le 31 janvier 2020), dissolution rétablie en 2022.
`,
    exercices: md`
### Exercice 2 — Droit ou convention ?

Indiquez si la règle relève du droit écrit, de la common law ou d'une convention : 1) le monarque nomme Premier ministre le chef du parti majoritaire ; 2) la Chambre des lords ne peut que retarder les lois ; 3) le monarque donne toujours son assentiment aux lois votées ; 4) la protection contre la détention arbitraire ; 5) le gouvernement démissionne s'il perd la confiance des Communes.

<details><summary>Voir le corrigé</summary>

1) Convention. 2) Droit écrit (Parliament Acts de 1911 et 1949). 3) Convention (dernier refus en 1708). 4) Common law et droit écrit (Habeas Corpus Act de 1679, Human Rights Act de 1998). 5) Convention.

</details>

### Exercice 3 — Dissertation : plan détaillé

Proposez un plan pour le sujet : « Le Parlement britannique est-il encore souverain ? »

<details><summary>Voir le corrigé</summary>

*Introduction* : définition de la souveraineté parlementaire (Dicey) ; problématique : le principe résiste-t-il aux évolutions récentes ?
**I. Un principe juridiquement maintenu** — A. Le Parlement peut faire ou défaire toute loi, sans contrôle de constitutionnalité. B. Le Brexit a restauré la pleine souveraineté face au droit de l'Union européenne ; la dévolution reste révocable en droit.
**II. Un principe tempéré en pratique** — A. Les limites juridiques et juridictionnelles : Human Rights Act (déclarations d'incompatibilité), arrêts Miller de la Cour suprême. B. Les limites politiques : domination du gouvernement sur une majorité disciplinée, conventions protégeant la dévolution, poids des référendums.
*Conclusion* : une souveraineté intacte dans son principe, mais exercée dans un cadre de plus en plus encadré.

</details>
`,
    qcm: [
      { q: "Le Bill of Rights date de :", choix: ["1215", "1628", "1689", "1911"], bonne: 2, explication: "Après la Glorieuse Révolution." },
      { q: "La constitution britannique est dite :", choix: ["Rigide et codifiée", "Non codifiée et souple", "Fédérale", "Révolutionnaire"], bonne: 1, explication: "Elle peut être modifiée par une loi ordinaire." },
      { q: "Le principe de souveraineté du Parlement a été théorisé par :", choix: ["Dicey", "Bagehot", "Locke", "Montesquieu"], bonne: 0, explication: "1885." },
      { q: "Depuis les Parliament Acts, la Chambre des lords dispose :", choix: ["D'un veto absolu", "D'un pouvoir de retardement", "Du pouvoir de censurer le gouvernement", "D'aucun rôle législatif"], bonne: 1, explication: "Environ un an pour la plupart des textes." },
      { q: "La Chambre des communes compte :", choix: ["435 membres", "577 membres", "650 membres", "100 membres"], bonne: 2, explication: "Élus au scrutin majoritaire uninominal à un tour." },
      { q: "La Cour suprême du Royaume-Uni fonctionne depuis :", choix: ["1689", "1911", "2009", "2020"], bonne: 2, explication: "Créée par le Constitutional Reform Act de 2005." },
      { q: "Le Human Rights Act de 1998 permet aux juges :", choix: ["D'annuler les lois", "De déclarer une loi incompatible avec la Convention européenne des droits de l'homme", "De dissoudre le Parlement", "De nommer le Premier ministre"], bonne: 1, explication: "Le Parlement reste libre de modifier la loi." },
      { q: "L'expression « dictature élective » est due à :", choix: ["Lord Hailsham", "Winston Churchill", "Walter Bagehot", "Margaret Thatcher"], bonne: 0, explication: "1976." },
      { q: "Le Royaume-Uni a quitté l'Union européenne le :", choix: ["23 juin 2016", "29 mars 2019", "31 janvier 2020", "1er janvier 2021"], bonne: 2, explication: "Après le référendum de 2016." },
      { q: "La dévolution a donné des parlements propres :", choix: ["Aux comtés anglais", "À l'Écosse, au pays de Galles et à l'Irlande du Nord", "Aux villes", "Au Commonwealth"], bonne: 1, explication: "Lois de 1998 ; l'État reste unitaire." },
    ],
  },

  3: {
    titre: "Les États-Unis : le régime présidentiel et le fédéralisme",
    description: "Le régime américain : Constitution de 1787, fédéralisme, élection et pouvoirs du président, Congrès, Cour suprême et freins et contrepoids.",
    resume: md`
## L'essentiel — Les États-Unis

- Déclaration d'indépendance (1776), Articles de la Confédération (1781), **Constitution du 17 septembre 1787** (en vigueur en 1789) : brève (7 articles), rigide, 27 amendements, **Bill of Rights** (1791).
- Principes : souveraineté du peuple, séparation stricte avec **freins et contrepoids**, fédéralisme, suprématie de la Constitution ; *Le Fédéraliste*.
- **Fédéralisme** : 50 États, compétences fédérales énumérées, dixième amendement ; clause de commerce ; Sénat (2 sénateurs par État).
- **Président** : 4 ans, suffrage indirect, **collège électoral** de 538 grands électeurs, majorité de 270 ; 22ᵉ amendement (deux mandats) ; vice-président.
- Pouvoirs : chef de l'exécutif sans Premier ministre, nominations avec le Sénat, commandant en chef, traités (deux tiers du Sénat), **veto** surmontable aux deux tiers, executive orders.
- Irresponsabilité politique ; **impeachment** (Chambre accuse, Sénat juge aux deux tiers) ; Nixon (1974).
- **Congrès** : Chambre (435, 2 ans), Sénat (100, 6 ans, renouvelé par tiers) ; pouvoirs égaux, pouvoir budgétaire ; pas de dissolution ; midterms et gouvernement divisé.
- **Cour suprême** : 9 juges à vie ; **Marbury v. Madison** (1803), contrôle diffus ; Brown (1954), Roe (1973), Dobbs (2022).
- Pratique : bipartisme, polarisation, blocages budgétaires, « présidence impériale » (Schlesinger, 1973).
`,
    exercices: md`
### Exercice 2 — Qui décide ?

Indiquez l'organe compétent : 1) la mise en accusation du président ; 2) le jugement de l'impeachment ; 3) la nomination d'un juge à la Cour suprême ; 4) l'initiative des lois de finances ; 5) l'approbation d'un traité ; 6) la déclaration d'inconstitutionnalité d'une loi.

<details><summary>Voir le corrigé</summary>

1) La Chambre des représentants, à la majorité simple. 2) Le Sénat, condamnation aux deux tiers. 3) Le président, avec l'avis et le consentement du Sénat. 4) La Chambre des représentants. 5) Le Sénat, aux deux tiers. 6) Les juges, et en dernier ressort la Cour suprême (contrôle diffus issu de Marbury v. Madison).

</details>

### Exercice 3 — Le collège électoral

Dans un État qui dispose de 10 grands électeurs, le candidat A obtient 50,5 % des voix et le candidat B 49,5 %. Dans un autre État qui en a 4, B obtient 80 % des voix. 1) Combien de grands électeurs chaque candidat obtient-il dans ces deux États, selon la règle du winner takes all ? 2) Quelle conséquence pour le résultat national ?

<details><summary>Voir le corrigé</summary>

1) Premier État : A obtient les 10 grands électeurs ; second État : B obtient les 4. Total : A = 10, B = 4. 2) Bien que B puisse avoir davantage de voix populaires au total (son avance massive dans le second État), A obtient plus de grands électeurs. C'est pourquoi un président peut être élu avec une minorité des voix populaires, comme en 2000 et en 2016. Le système favorise les États disputés (swing states).

</details>
`,
    qcm: [
      { q: "La Constitution des États-Unis a été adoptée en :", choix: ["1776", "1787", "1791", "1803"], bonne: 1, explication: "Convention de Philadelphie, entrée en vigueur en 1789." },
      { q: "Les dix premiers amendements forment :", choix: ["Le Bill of Rights", "Le Fédéraliste", "Les Articles de la Confédération", "Le New Deal"], bonne: 0, explication: "Adoptés en 1791." },
      { q: "Le collège électoral présidentiel compte :", choix: ["100 grands électeurs", "435 grands électeurs", "538 grands électeurs", "270 grands électeurs"], bonne: 2, explication: "Il faut 270 voix pour être élu." },
      { q: "Le 22ᵉ amendement limite le président à :", choix: ["Un mandat", "Deux mandats", "Trois mandats", "Aucune limite"], bonne: 1, explication: "Adopté en 1951." },
      { q: "Le veto présidentiel peut être surmonté par :", choix: ["La majorité simple d'une chambre", "Les deux tiers de chaque chambre", "La Cour suprême", "Les gouverneurs"], bonne: 1, explication: "Article 1 de la Constitution." },
      { q: "Le Sénat américain compte :", choix: ["50 sénateurs", "100 sénateurs", "435 sénateurs", "538 sénateurs"], bonne: 1, explication: "Deux par État." },
      { q: "Les représentants sont élus pour :", choix: ["2 ans", "4 ans", "6 ans", "À vie"], bonne: 0, explication: "Renouvellement intégral tous les deux ans." },
      { q: "Le contrôle de constitutionnalité aux États-Unis a été affirmé par l'arrêt :", choix: ["Brown v. Board of Education", "Marbury v. Madison", "Roe v. Wade", "Dobbs"], bonne: 1, explication: "1803, juge Marshall." },
      { q: "Le président américain peut-il dissoudre le Congrès ?", choix: ["Oui", "Non", "Seulement en temps de guerre", "Seulement la Chambre"], bonne: 1, explication: "Séparation stricte des pouvoirs." },
      { q: "Dans la procédure d'impeachment, la condamnation par le Sénat exige :", choix: ["La majorité simple", "Les deux tiers", "L'unanimité", "Les trois quarts"], bonne: 1, explication: "Aucun président n'a été destitué." },
    ],
  },

  4: {
    titre: "La France : la Ve République, un régime semi-présidentiel",
    description: "La Ve République : Constitution de 1958, pouvoirs du président, parlementarisme rationalisé, article 49-3, cohabitation, Conseil constitutionnel et QPC.",
    resume: md`
## L'essentiel — La Ve République

- Instabilité des IIIᵉ et IVᵉ Républiques ; discours de **Bayeux** (1946) ; **Constitution du 4 octobre 1958** (Debré).
- Révisions : **1962** (élection directe du président), 1974 (saisine par 60 parlementaires), **2000** (quinquennat), **2008** (deux mandats consécutifs, QPC, encadrement du 49-3).
- Président : 5 ans, suffrage direct à deux tours ; article 5 (arbitre, garant) ; **pouvoirs propres** sans contreseing (article 19) : nomination du Premier ministre (8), référendum (11), **dissolution** (12), pouvoirs exceptionnels (16) ; irresponsabilité, destitution (68).
- Gouvernement : détermine et conduit la politique (20), Premier ministre et pouvoir réglementaire (21), responsable devant l'Assemblée.
- Parlement : Assemblée (577, 5 ans) et Sénat (348, 6 ans, suffrage indirect) ; dernier mot à l'Assemblée.
- **Parlementarisme rationalisé** : articles 34 et 37, vote bloqué (44), **49-3**, motion de censure à la majorité absolue (49-2) ; censures abouties : 1962 et décembre 2024.
- Pratique : **fait majoritaire** (présidentialisme) ou **cohabitation** (1986-1988, 1993-1995, 1997-2002) ; Assemblée sans majorité depuis 2024.
- Duverger : **régime semi-présidentiel**.
- Conseil constitutionnel : 9 membres, contrôle a priori, **QPC** depuis 2010 ; décision du 16 juillet 1971 (bloc de constitutionnalité).
`,
    exercices: md`
### Exercice 2 — Pouvoir propre ou partagé ?

Classez : 1) la dissolution de l'Assemblée nationale ; 2) la nomination des ministres ; 3) la nomination du Premier ministre ; 4) la signature des ordonnances ; 5) le recours à l'article 16 ; 6) la saisine du Conseil constitutionnel.

<details><summary>Voir le corrigé</summary>

1) Propre (article 12). 2) Partagé : sur proposition du Premier ministre, avec contreseing (article 8, alinéa 2). 3) Propre (article 8, alinéa 1). 4) Partagé (article 13), avec contreseing ; en cohabitation, le président Mitterrand a refusé de signer certaines ordonnances en 1986. 5) Propre (article 16). 6) Propre (articles 54 et 61).

</details>

### Exercice 3 — La motion de censure

L'Assemblée nationale compte 577 membres. Une motion de censure recueille 287 voix ; 120 députés votent contre et 170 s'abstiennent ou sont absents. Le gouvernement est-il renversé ? Même question si la motion recueille 289 voix.

<details><summary>Voir le corrigé</summary>

La motion doit être adoptée à la majorité absolue des membres composant l'Assemblée : 577 / 2 = 288,5, soit au moins 289 voix. Seuls les votes favorables sont recensés : abstentions et votes contre ne comptent pas. Avec 287 voix, la motion est rejetée et le gouvernement reste en place. Avec 289 voix, elle est adoptée : le Premier ministre doit remettre la démission du gouvernement au président (article 50).

</details>
`,
    qcm: [
      { q: "La Constitution de la Ve République date du :", choix: ["4 octobre 1958", "28 septembre 1958", "6 novembre 1962", "24 septembre 2000"], bonne: 0, explication: "Approuvée par référendum le 28 septembre." },
      { q: "L'élection du président au suffrage universel direct a été instaurée en :", choix: ["1958", "1962", "2000", "2008"], bonne: 1, explication: "Par référendum." },
      { q: "Le quinquennat a été adopté par référendum en :", choix: ["1962", "1974", "2000", "2008"], bonne: 2, explication: "Appliqué à partir de 2002." },
      { q: "Le droit de dissolution du président français figure à l'article :", choix: ["5", "12", "16", "49"], bonne: 1, explication: "Pouvoir propre, une fois par an au plus." },
      { q: "Le gouvernement détermine et conduit la politique de la nation selon l'article :", choix: ["8", "20", "21", "34"], bonne: 1, explication: "Article décisif en période de cohabitation." },
      { q: "L'article 49, alinéa 3, permet au gouvernement :", choix: ["De dissoudre l'Assemblée", "D'engager sa responsabilité sur un texte", "De nommer les juges", "D'organiser un référendum"], bonne: 1, explication: "Limité depuis 2008." },
      { q: "La notion de régime semi-présidentiel est due à :", choix: ["Maurice Duverger", "Michel Debré", "Charles de Gaulle", "Georges Vedel"], bonne: 0, explication: "Président élu et gouvernement responsable." },
      { q: "La première cohabitation date de :", choix: ["1981", "1986", "1993", "1997"], bonne: 1, explication: "1986-1988." },
      { q: "La question prioritaire de constitutionnalité est en vigueur depuis :", choix: ["1971", "1974", "2010", "2011"], bonne: 2, explication: "Créée par la révision de 2008." },
      { q: "La décision du Conseil constitutionnel du 16 juillet 1971 concerne :", choix: ["La liberté d'association", "Le quinquennat", "L'article 16", "La cohabitation"], bonne: 0, explication: "Naissance du bloc de constitutionnalité." },
    ],
  },

  5: {
    titre: "Le parlementarisme rationalisé : Allemagne et Espagne",
    description: "Allemagne et Espagne : Loi fondamentale de 1949, chancelier, motion de censure constructive, fédéralisme, monarchie parlementaire de 1978, autonomies.",
    resume: md`
## L'essentiel — Allemagne et Espagne

- **Loi fondamentale** du 23 mai 1949 : leçons de Weimar ; dignité humaine (article 1), droits fondamentaux, État fédéral et social, **clause d'éternité** (article 79-3) ; constitution de l'Allemagne unifiée en 1990.
- Président fédéral : élu par l'Assemblée fédérale, rôle représentatif.
- **Chancelier** : élu par le Bundestag (article 63), fixe les orientations (article 65) ; **motion de censure constructive** (article 67), réussie une fois (1982) ; question de confiance (article 68).
- Bundestag : scrutin mixte, **seuil de 5 %**, coalitions ; **Bundesrat** : membres des gouvernements des 16 Länder ; fédéralisme coopératif.
- **Cour de Karlsruhe** (1951) : recours constitutionnel individuel ; **démocratie militante** (article 21).
- **Constitution espagnole** du 27 décembre 1978 : **monarchie parlementaire** (article 1-3) ; roi arbitre et modérateur (article 56), actes contresignés (article 64) ; 23 février 1981.
- Président du gouvernement investi par le Congrès (article 99) ; **motion de censure constructive** (article 113), réussie en 2018.
- Cortes : Congrès (350) et Sénat ; **État des autonomies** (17 communautés, Ceuta et Melilla), crise catalane de 2017 (article 155) ; Tribunal constitutionnel, recours d'amparo.
- Maroc : motion de censure non constructive (article 105 : un cinquième pour déposer, majorité absolue pour adopter).
`,
    exercices: md`
### Exercice 2 — Vrai ou faux ?

1) Le président fédéral allemand est élu au suffrage universel direct. 2) Le Bundesrat est composé de sénateurs élus. 3) Le roi d'Espagne peut refuser de nommer un président du gouvernement investi par le Congrès. 4) L'Espagne est un État fédéral. 5) La clause d'éternité interdit de réviser le principe de dignité humaine.

<details><summary>Voir le corrigé</summary>

1) Faux : il est élu par l'Assemblée fédérale. 2) Faux : il est composé de membres des gouvernements des Länder. 3) Faux : ses actes sont contresignés et il nomme le candidat investi. 4) Faux : c'est un État autonomique (régional). 5) Vrai (article 79, alinéa 3).

</details>

### Exercice 3 — Dissertation : plan détaillé

Proposez un plan pour le sujet : « La motion de censure constructive, remède à l'instabilité gouvernementale ? »

<details><summary>Voir le corrigé</summary>

*Introduction* : définition ; origine allemande (article 67, leçon de Weimar) ; reprise par l'Espagne (article 113) et d'autres pays ; problématique : ce mécanisme assure-t-il à lui seul la stabilité ?
**I. Un mécanisme efficace de stabilisation** — A. Il interdit les majorités négatives et impose une alternative : une seule réussite en Allemagne (1982), une en Espagne (2018). B. Il renforce le chef du gouvernement, qui ne peut être renversé que par une coalition prête à gouverner.
**II. Un remède insuffisant à lui seul** — A. La stabilité dépend aussi du système de partis et du mode de scrutin (seuil de 5 %, coalitions négociées). B. Il n'empêche pas les blocages : gouvernements minoritaires, investitures impossibles et élections répétées en Espagne (2016, 2019).
*Conclusion* : un instrument utile du parlementarisme rationalisé, mais qui ne remplace pas une majorité ; comparaison avec la motion de censure marocaine (article 105), non constructive mais exigeante.

</details>
`,
    qcm: [
      { q: "La Loi fondamentale allemande date de :", choix: ["1919", "1949", "1958", "1990"], bonne: 1, explication: "23 mai 1949." },
      { q: "En Allemagne, le chef de l'exécutif est :", choix: ["Le président fédéral", "Le chancelier fédéral", "Le président du Bundesrat", "Le président de la Cour constitutionnelle"], bonne: 1, explication: "Démocratie de chancelier." },
      { q: "La motion de censure constructive figure à l'article :", choix: ["21 de la Loi fondamentale", "63 de la Loi fondamentale", "67 de la Loi fondamentale", "79 de la Loi fondamentale"], bonne: 2, explication: "Il faut élire un successeur." },
      { q: "Le seuil électoral pour la répartition proportionnelle au Bundestag est de :", choix: ["3 %", "5 %", "10 %", "15 %"], bonne: 1, explication: "Pour limiter l'émiettement." },
      { q: "Le Bundesrat est composé :", choix: ["De sénateurs élus au suffrage direct", "De membres des gouvernements des Länder", "De juges", "De membres nommés par le président"], bonne: 1, explication: "Fédéralisme coopératif." },
      { q: "La Constitution espagnole actuelle date de :", choix: ["1931", "1975", "1978", "1981"], bonne: 2, explication: "27 décembre 1978." },
      { q: "La forme politique de l'État espagnol est :", choix: ["La république fédérale", "La monarchie parlementaire", "La monarchie absolue", "Le régime directorial"], bonne: 1, explication: "Article 1, alinéa 3." },
      { q: "En 2018, Pedro Sánchez est devenu président du gouvernement grâce à :", choix: ["Une dissolution", "Une motion de censure constructive", "Un référendum", "Une décision royale"], bonne: 1, explication: "Article 113 de la Constitution espagnole." },
      { q: "L'Espagne compte :", choix: ["16 Länder", "17 communautés autonomes", "12 régions", "26 cantons"], bonne: 1, explication: "Plus deux villes autonomes." },
      { q: "Au Maroc, la motion de censure est adoptée à :", choix: ["La majorité simple", "La majorité absolue des membres de la Chambre des représentants", "Les deux tiers", "L'unanimité"], bonne: 1, explication: "Article 105 de la Constitution." },
    ],
  },

  6: {
    titre: "La Suisse : régime directorial et démocratie semi-directe",
    description: "Le modèle suisse : fédéralisme des 26 cantons, Conseil fédéral collégial, régime directorial, concordance, référendum et initiative populaire.",
    resume: md`
## L'essentiel — La Suisse

- État **fédéral** depuis **1848** ; Constitution du 18 avril 1999 (en vigueur en 2000) ; **26 cantons**, quatre langues nationales ; compétences résiduelles des cantons (article 3).
- **Assemblée fédérale** : Conseil national (200, proportionnelle, 4 ans) et Conseil des États (46, deux par canton) ; bicamérisme **égalitaire** ; Parlement de milice.
- **Conseil fédéral** : 7 membres élus par l'Assemblée pour 4 ans ; **collégialité** ; chaque conseiller dirige un département ; président de la Confédération élu pour **un an**.
- Pas de motion de censure ni de dissolution : **régime directorial**.
- **Démocratie de concordance** : « formule magique » (1959-2003), partage du pouvoir entre les grands partis.
- **Référendum obligatoire** (révision constitutionnelle) : **double majorité** du peuple et des cantons.
- **Référendum facultatif** : 50 000 signatures en 100 jours (ou huit cantons) contre une loi.
- **Initiative populaire** : 100 000 signatures en 18 mois pour une révision partielle de la Constitution.
- Landsgemeinde (Glaris, Appenzell Rhodes-Intérieures) ; Tribunal fédéral sans contrôle des lois fédérales (article 190) ; vote des femmes au niveau fédéral en 1971.
`,
    exercices: md`
### Exercice 2 — Quel instrument ?

Indiquez l'instrument de démocratie directe : 1) des citoyens veulent inscrire dans la Constitution un nouveau droit ; 2) une loi sur la chasse adoptée par le Parlement est contestée par des associations ; 3) le Parlement adopte une révision de la Constitution ; 4) la Suisse envisage d'adhérer à une communauté supranationale.

<details><summary>Voir le corrigé</summary>

1) Initiative populaire (100 000 signatures en 18 mois, double majorité). 2) Référendum facultatif (50 000 signatures en 100 jours, majorité du peuple). 3) Référendum obligatoire (double majorité). 4) Référendum obligatoire (double majorité), prévu pour l'adhésion à une communauté supranationale ou à une organisation de sécurité collective.

</details>

### Exercice 3 — Dissertation : plan détaillé

Proposez un plan pour le sujet : « Le régime suisse est-il un modèle ? »

<details><summary>Voir le corrigé</summary>

*Introduction* : originalité du régime (directorial, semi-direct, fédéral) ; problématique : ses qualités sont-elles transposables ?
**I. Un modèle de stabilité et de participation** — A. La stabilité d'un exécutif collégial et non révocable, la concordance qui associe tous les grands partis. B. La participation directe des citoyens et la protection des minorités linguistiques et cantonales par le fédéralisme et la double majorité.
**II. Un modèle aux limites réelles et difficilement exportable** — A. Les limites : lenteur des réformes (vote des femmes en 1971), faible participation, absence d'opposition claire, votes parfois contraires aux droits fondamentaux, pas de contrôle des lois fédérales. B. Un modèle lié à une histoire, une taille et une culture du compromis propres à la Suisse.
*Conclusion* : une source d'inspiration pour la démocratie participative (pétitions, motions citoyennes) plutôt qu'un modèle à reproduire.

</details>
`,
    qcm: [
      { q: "La Suisse est un État fédéral depuis :", choix: ["1291", "1848", "1999", "2000"], bonne: 1, explication: "Malgré le nom de Confédération." },
      { q: "La Suisse compte :", choix: ["16 cantons", "20 cantons", "26 cantons", "50 cantons"], bonne: 2, explication: "Dont six demi-cantons." },
      { q: "Le Conseil fédéral compte :", choix: ["5 membres", "7 membres", "9 membres", "12 membres"], bonne: 1, explication: "Élus par l'Assemblée fédérale." },
      { q: "Le président de la Confédération est élu pour :", choix: ["1 an", "4 ans", "5 ans", "7 ans"], bonne: 0, explication: "Il reste un conseiller fédéral parmi sept." },
      { q: "Le Conseil des États compte :", choix: ["100 membres", "46 membres", "200 membres", "26 membres"], bonne: 1, explication: "Deux par canton, un par demi-canton." },
      { q: "Le régime suisse est qualifié de :", choix: ["Présidentiel", "Parlementaire", "Directorial", "Semi-présidentiel"], bonne: 2, explication: "Pas de responsabilité ni de dissolution." },
      { q: "Le référendum facultatif exige :", choix: ["100 000 signatures en 18 mois", "50 000 signatures en 100 jours", "La demande du Conseil fédéral", "L'accord de tous les cantons"], bonne: 1, explication: "Ou la demande de huit cantons." },
      { q: "Une révision de la Constitution fédérale exige :", choix: ["La majorité du peuple seulement", "La double majorité du peuple et des cantons", "La majorité du Parlement seulement", "L'unanimité des cantons"], bonne: 1, explication: "Référendum obligatoire." },
      { q: "La « formule magique » désigne :", choix: ["La répartition stable des sièges du Conseil fédéral entre les partis", "Le mode de calcul des impôts", "La procédure de révision", "Le scrutin proportionnel"], bonne: 0, explication: "De 1959 à 2003." },
      { q: "Le droit de vote des femmes au niveau fédéral suisse a été adopté en :", choix: ["1919", "1945", "1971", "1990"], bonne: 2, explication: "Exemple de la lenteur des réformes." },
    ],
  },

  7: {
    titre: "Les systèmes non démocratiques : la Chine et les autres modèles",
    description: "Régimes non démocratiques : totalitarisme, autoritarisme, régimes hybrides, modèle soviétique, institutions chinoises et rôle du PCC, Iran, régimes militaires.",
    resume: md`
## L'essentiel — Systèmes non démocratiques

- Article 16 de la Déclaration de 1789 : sans garantie des droits ni séparation des pouvoirs, pas de constitution ; constitution formelle / matérielle.
- **Totalitarisme** (Arendt 1951 ; Friedrich et Brzezinski 1956) / **autoritarisme** (Linz 1964) / **régime hybride** (Levitsky et Way 2010).
- Modèle **soviétique** : rôle dirigeant du parti (article 6 de 1977), **unité du pouvoir**, **centralisme démocratique**, propriété collective, droits subordonnés.
- **Chine** : République populaire (1er octobre 1949), Constitution de **1982**, réformes de Deng (1978).
- Révision de **2018** : direction du PCC inscrite à l'article 1, suppression de la limite de deux mandats présidentiels.
- Pouvoir réel : PCC (secrétaire général, Bureau politique, Comité permanent) ; cumul des fonctions de secrétaire général, président et chef de la Commission militaire centrale.
- **APN** (près de 3 000 députés, organe suprême) et son Comité permanent ; Conseil des affaires d'État ; pas de cour constitutionnelle ; régions autonomes ; Hong Kong et Macao (« un pays, deux systèmes »).
- **Iran** (1979, 1989) : velayat-e faqih, Guide suprême, Conseil des gardiens, institutions élues encadrées.
- Régimes **militaires** (Sahel depuis 2020) ; monarchies absolues, parlementaires ou constitutionnelles.
`,
    exercices: md`
### Exercice 2 — Quel type de régime ?

Qualifiez : 1) un régime où un parti unique impose une idéologie officielle à toute la société et pratique la terreur de masse ; 2) un régime où des élections pluralistes ont lieu, mais où les principaux opposants sont emprisonnés et les médias contrôlés ; 3) un régime où l'armée a suspendu la constitution après un coup d'État ; 4) un régime où une autorité religieuse non élue contrôle les lois et les candidatures.

<details><summary>Voir le corrigé</summary>

1) Totalitaire. 2) Hybride (autoritarisme compétitif). 3) Régime militaire. 4) Théocratique ou mixte, sur le modèle iranien.

</details>

### Exercice 3 — Dissertation : plan détaillé

Proposez un plan pour le sujet : « Les constitutions des régimes non démocratiques sont-elles inutiles ? »

<details><summary>Voir le corrigé</summary>

*Introduction* : rappel de l'article 16 de 1789 ; constitutions de façade ; problématique : un texte qui ne limite pas le pouvoir a-t-il une fonction ?
**I. Des constitutions qui ne limitent pas le pouvoir** — A. Le pouvoir réel est ailleurs : parti (Chine), Guide suprême (Iran), armée. B. Les droits proclamés sont ineffectifs, faute de justice indépendante et de contrôle de constitutionnalité.
**II. Des constitutions qui remplissent d'autres fonctions** — A. Une fonction de légitimation interne et internationale et d'organisation de l'appareil d'État (répartition des tâches, règles de succession). B. Une fonction politique : les révisions révèlent les évolutions du pouvoir (Chine en 2018), et les textes peuvent servir d'appui aux revendications de la société civile.
*Conclusion* : utiles comme outils de gouvernement, ces constitutions ne sont pas des instruments de limitation du pouvoir.

</details>
`,
    qcm: [
      { q: "Les Origines du totalitarisme (1951) est l'œuvre de :", choix: ["Hannah Arendt", "Juan Linz", "Raymond Aron", "Max Weber"], bonne: 0, explication: "Analyse du nazisme et du stalinisme." },
      { q: "La définition classique du régime autoritaire est due à :", choix: ["Juan Linz", "Hans Kelsen", "Maurice Duverger", "Montesquieu"], bonne: 0, explication: "Pluralisme limité, 1964." },
      { q: "Le centralisme démocratique signifie que :", choix: ["Les pouvoirs sont séparés", "Les décisions des organes supérieurs s'imposent aux organes inférieurs", "Les régions sont autonomes", "Le peuple vote toutes les lois"], bonne: 1, explication: "Principe des partis et États de type soviétique." },
      { q: "La République populaire de Chine a été proclamée en :", choix: ["1911", "1949", "1978", "1982"], bonne: 1, explication: "Le 1er octobre 1949." },
      { q: "La Constitution chinoise actuelle date de :", choix: ["1949", "1954", "1982", "2018"], bonne: 2, explication: "Révisée notamment en 2018." },
      { q: "La révision constitutionnelle chinoise de 2018 a :", choix: ["Instauré le multipartisme", "Supprimé la limite de deux mandats présidentiels", "Créé une cour constitutionnelle", "Aboli l'APN"], bonne: 1, explication: "Et inscrit la direction du PCC à l'article 1." },
      { q: "L'organe qualifié d'organe suprême du pouvoir d'État en Chine est :", choix: ["Le Conseil des affaires d'État", "L'Assemblée populaire nationale", "La Cour populaire suprême", "La Commission militaire centrale"], bonne: 1, explication: "Près de 3 000 députés." },
      { q: "Le principe « un pays, deux systèmes » concerne :", choix: ["Hong Kong et Macao", "Le Tibet", "Taïwan seulement", "Shanghai"], bonne: 0, explication: "Régions administratives spéciales." },
      { q: "En Iran, l'autorité la plus élevée est :", choix: ["Le président de la République", "Le Guide suprême", "Le Parlement", "Le Premier ministre"], bonne: 1, explication: "Principe du velayat-e faqih." },
      { q: "Le Conseil des gardiens iranien :", choix: ["Élit le président", "Contrôle la conformité des lois et filtre les candidatures", "Commande l'armée", "Juge les crimes ordinaires"], bonne: 1, explication: "Contrôle religieux et constitutionnel." },
    ],
  },
};

export default chapitres;
