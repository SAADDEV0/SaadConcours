// La vie politique contemporaine (Droit privé S1) — compléments par chapitre : description SEO, résumé, exercices 2 et 3, QCM.
const md = String.raw;

const chapitres = {
  1: {
    titre: "La vie politique contemporaine : objet, acteurs et grilles de lecture",
    description: "Vie politique contemporaine au Maroc : définition, acteurs (Monarchie, partis, opposition, société civile), périodes depuis 1956, consensus et alternance.",
    resume: md`
## L'essentiel — Objet, acteurs et grilles de lecture

- **Vie politique** : compétition, négociation et contestation autour du pouvoir, entre des acteurs, dans un cadre fixé par la Constitution et les lois.
- Le droit constitutionnel décrit les règles ; la vie politique observe leur **pratique** (exemple : article 47 et blocage de 2016-2017).
- Acteurs : Monarchie (articles 41, 42, 47), gouvernement (articles 47 et 88), Parlement, partis (article 7, loi organique 29-11), opposition (article 10), syndicats (article 8), société civile (articles 12 à 15), médias, instances de régulation (articles 161 à 170).
- La Monarchie est l'acteur **central**, au-dessus de la compétition partisane, et arbitre (article 42).
- Six périodes : 1956-1965, 1965-1990, 1990-1999, 1999-2010, 2011-2021, depuis 2021.
- **Consensus** : accord sur les questions placées au-dessus des partis (Sahara, Monarchie, islam, choix démocratique), structurant depuis 1975.
- **Alternance consensuelle** (1998) : arrivée de l'opposition historique au gouvernement par accord avec le Roi.
- Expressions à attribuer : « méthodologie démocratique » (USFP, 2002), « partis administratifs » (polémique).
- Sources : Constitutions, lois organiques, discours royaux, résultats officiels, rapports (IER, NMD, CNDH, HCP).
- Méthode : dater, identifier les acteurs, repérer la règle, décrire l'issue, évaluer la portée, rester neutre.
`,
    exercices: md`
### Exercice 2 — Qui fait quoi ?

Associez chaque action à l'acteur compétent et à l'article de la Constitution de 2011 : 1) nommer le Chef du gouvernement ; 2) accorder l'investiture au gouvernement ; 3) présider la commission de législation de la Chambre des représentants ; 4) déposer une pétition auprès des pouvoirs publics ; 5) arbitrer un blocage entre institutions.

<details><summary>Voir le corrigé</summary>

1) Le Roi, au sein du parti arrivé en tête (article 47). 2) La Chambre des représentants, à la majorité absolue de ses membres (article 88). 3) L'opposition (article 10). 4) Les citoyennes et citoyens (article 15, loi organique 44-14). 5) Le Roi, arbitre suprême entre les institutions (article 42).

</details>

### Exercice 3 — Fait ou jugement ?

Classez chaque phrase en fait vérifiable ou en jugement, et reformulez les jugements de façon neutre : 1) « Le RNI est arrivé en tête des législatives du 8 septembre 2021. » 2) « Les partis administratifs ont toujours trahi les électeurs. » 3) « La participation aux législatives de 2007 a été de 37 %. » 4) « L'alternance de 1998 était une simple façade. »

<details><summary>Voir le corrigé</summary>

1) Fait (résultats officiels). 2) Jugement ; formulation neutre : « Des partis créés autour de majorités gouvernementales, que leurs adversaires qualifient de partis administratifs, ont dominé plusieurs législatures. » 3) Fait (chiffre officiel, à dater). 4) Jugement ; formulation neutre : « Certains auteurs soulignent les limites de l'alternance de 1998 (ministères de souveraineté, prééminence royale), d'autres y voient une étape décisive. »

</details>
`,
    qcm: [
      { q: "L'étude de la vie politique se distingue du droit constitutionnel parce qu'elle :", choix: ["Observe la pratique des acteurs et pas seulement les règles écrites", "Ignore la Constitution", "Ne porte que sur les élections", "Ne concerne que les partis"], bonne: 0, explication: "Les deux approches se complètent." },
      { q: "L'article 42 de la Constitution de 2011 fait du Roi :", choix: ["Le chef de la majorité parlementaire", "L'arbitre suprême entre les institutions", "Le président de la Chambre des représentants", "Le chef de l'opposition"], bonne: 1, explication: "Il est aussi chef de l'État et son représentant suprême." },
      { q: "Le statut de l'opposition est prévu par l'article :", choix: ["7", "47", "10", "88"], bonne: 2, explication: "Il lui garantit notamment la présidence de la commission de législation." },
      { q: "L'expression « méthodologie démocratique » a été popularisée en 2002 par :", choix: ["Le PJD", "Le PAM", "L'USFP", "Le RNI"], bonne: 2, explication: "Après la nomination de Driss Jettou, technocrate." },
      { q: "L'alternance de 1998 est dite consensuelle parce qu'elle :", choix: ["Résulte d'une majorité absolue de l'USFP", "Repose sur un accord entre le Roi et l'opposition historique", "A été imposée par un référendum", "A été décidée par le Parlement seul"], bonne: 1, explication: "L'USFP n'avait que 57 sièges sur 325." },
      { q: "Le consensus national autour de l'intégrité territoriale se forme surtout à partir de :", choix: ["1956", "1965", "1975", "2011"], bonne: 2, explication: "Année de la Marche verte." },
      { q: "Les partis politiques sont régis aujourd'hui par la loi organique :", choix: ["29-11", "70-03", "36-04", "113-14"], bonne: 0, explication: "La loi 36-04 de 2006 l'a précédée." },
      { q: "Les motions législatives et les pétitions relèvent des articles :", choix: ["14 et 15", "41 et 42", "47 et 88", "61 et 62"], bonne: 0, explication: "Démocratie participative de la Constitution de 2011." },
      { q: "La première période de la vie politique marocaine contemporaine couvre :", choix: ["1944-1956", "1956-1965", "1965-1975", "1975-1990"], bonne: 1, explication: "De l'indépendance à l'état d'exception." },
      { q: "Pour analyser un événement politique de façon neutre, il faut d'abord :", choix: ["Donner son opinion", "Le dater et le situer dans sa période", "Choisir un camp", "Ignorer les chiffres officiels"], bonne: 1, explication: "Puis identifier acteurs, règle, issue et portée." },
    ],
  },
  2: {
    titre: "La construction de l'État indépendant (1956-1965)",
    description: "Vie politique 1956-1965 : Palais et mouvement national, dahirs de 1958, scission de l'Istiqlal et UNFP, Constitution de 1962, état d'exception de 1965.",
    resume: md`
## L'essentiel — 1956-1965

- Manifeste de l'indépendance (11 janvier 1944) ; fin du protectorat français le **2 mars 1956**.
- Deux légitimités : **monarchique** (historique, religieuse) et **nationaliste** (Istiqlal).
- Forces : Istiqlal, PDI, Mouvement populaire (1957), Parti communiste, notables ruraux, Forces armées royales (mai 1956).
- Conseil national consultatif (novembre 1956, présidé par Ben Barka) : avis, sans pouvoir législatif.
- **Dahirs du 15 novembre 1958** : associations, rassemblements publics, presse ; choix du **multipartisme**.
- Gouvernement **Abdallah Ibrahim** (décembre 1958-mai 1960) ; scission de l'Istiqlal et création de l'**UNFP** (6 septembre 1959).
- Mort de Mohammed V (26 février 1961), avènement de **Hassan II** ; Loi fondamentale du 2 juin 1961.
- **Constitution du 7 décembre 1962** : multipartisme, bicaméralisme, article 35 (état d'exception) ; boycott de l'UNFP.
- Législatives du **17 mai 1963** : le FDIC (Guédira) en tête sans majorité absolue.
- Émeutes de Casablanca (23 mars 1965), **état d'exception** (7 juin 1965), enlèvement de Ben Barka (29 octobre 1965).
`,
    exercices: md`
### Exercice 2 — Remettre en ordre

Classez dans l'ordre chronologique : a) création de l'UNFP ; b) Loi fondamentale du Royaume ; c) dahirs sur les libertés publiques ; d) législatives remportées par le FDIC sans majorité absolue ; e) avènement de Hassan II ; f) proclamation de l'état d'exception.

<details><summary>Voir le corrigé</summary>

c) 15 novembre 1958 ; a) 6 septembre 1959 ; e) 3 mars 1961 ; b) 2 juin 1961 ; d) 17 mai 1963 ; f) 7 juin 1965.

</details>

### Exercice 3 — Question de cours

Expliquez en dix lignes pourquoi la Constitution de 1962 a été contestée par l'UNFP et soutenue par l'Istiqlal.

<details><summary>Voir le corrigé</summary>

L'UNFP réclamait une **assemblée constituante** élue : pour elle, une Constitution préparée par le Palais et soumise à référendum consacrait la prééminence royale sans négociation avec les forces issues du mouvement national ; elle appelle donc au boycott. L'Istiqlal, plus conservateur après la scission de 1959, estime que le texte ouvre une vie parlementaire et garantit le multipartisme ; il appelle à voter oui. Il passera pourtant à l'opposition dès 1963. Le débat oppose ainsi deux conceptions de l'origine du pouvoir constituant : octroi approuvé par le peuple, ou élaboration par des représentants élus.

</details>
`,
    qcm: [
      { q: "Le Manifeste de l'indépendance date du :", choix: ["11 janvier 1944", "2 mars 1956", "18 novembre 1955", "7 avril 1956"], bonne: 0, explication: "Porté par le Parti de l'Istiqlal." },
      { q: "Les dahirs du 15 novembre 1958 portent sur :", choix: ["La réforme agraire", "Les libertés publiques (associations, rassemblements, presse)", "La création de Bank Al-Maghrib", "Le Code de la famille"], bonne: 1, explication: "Première charte des libertés publiques." },
      { q: "L'UNFP est née en 1959 :", choix: ["D'une scission de l'Istiqlal", "D'une fusion avec le Mouvement populaire", "D'une décision du Roi", "Du Parti communiste"], bonne: 0, explication: "Aile progressiste : Ben Barka, Bouabid, Ibrahim." },
      { q: "Le gouvernement Abdallah Ibrahim est renvoyé en :", choix: ["1956", "1958", "1960", "1963"], bonne: 2, explication: "Mai 1960 ; Mohammed V prend la présidence du gouvernement." },
      { q: "La Loi fondamentale du Royaume date de :", choix: ["1958", "1961", "1962", "1965"], bonne: 1, explication: "2 juin 1961, avant la Constitution de 1962." },
      { q: "La première Constitution marocaine est approuvée par référendum le :", choix: ["7 décembre 1962", "24 juillet 1970", "1er mars 1972", "2 juin 1961"], bonne: 0, explication: "L'UNFP appelle au boycott." },
      { q: "La Constitution de 1962 :", choix: ["Institue un parti unique", "Interdit le parti unique", "Supprime le Parlement", "Crée une chambre unique nommée"], bonne: 1, explication: "Le multipartisme est constitutionnalisé." },
      { q: "Le FDIC, créé en 1963, est animé par :", choix: ["Allal El Fassi", "Mehdi Ben Barka", "Ahmed Réda Guédira", "Abderrahim Bouabid"], bonne: 2, explication: "Front pour la défense des institutions constitutionnelles." },
      { q: "L'état d'exception de 1965 se fonde sur l'article 35 de la Constitution de :", choix: ["1962", "1970", "1972", "1996"], bonne: 0, explication: "Proclamé le 7 juin 1965." },
      { q: "Mehdi Ben Barka est enlevé à Paris en :", choix: ["1959", "1963", "1965", "1971"], bonne: 2, explication: "Le 29 octobre 1965." },
    ],
  },
  3: {
    titre: "De l'état d'exception au consensus national (1965-1990)",
    description: "Vie politique 1965-1990 : état d'exception, Constitutions de 1970 et 1972, coups d'État de Skhirat et du Boeing, Marche verte, RNI, UC, émeutes des années 1980.",
    resume: md`
## L'essentiel — 1965-1990

- **État d'exception** (1965-1970) : Parlement suspendu, décrets royaux portant loi, rôle central de l'Intérieur (Oufkir).
- **Constitution de 1970** (référendum du 24 juillet 1970) : pouvoirs royaux renforcés, chambre unique ; boycott de la Koutla nationale (Istiqlal, UNFP).
- Tentatives de coup d'État : **Skhirat** (10 juillet 1971) et **Boeing royal** (16 août 1972) ; armée écartée de la politique.
- **Constitution de 1972** (1er mars 1972) : deux tiers des députés élus au suffrage direct ; pas d'élections avant 1977.
- **Marche verte** (6 novembre 1975, 350 000 volontaires) ; accords de Madrid (14 novembre 1975) ; **consensus national**.
- « Processus démocratique » : PPS (1974), USFP (1975), communales (1976), législatives (3 juin 1977).
- **RNI** (1978, Ahmed Osman) ; **UC** (1983, Maâti Bouabid, en tête en 1984) ; expression polémique de « partis administratifs ».
- Répression : procès politiques, disparitions, Tazmamart (fermé en 1991) ; violations établies par l'IER pour 1956-1999.
- **Ajustement structurel** (1983) ; émeutes de 1981 (Casablanca), 1984, 1990 (Fès).
- **CCDH** créé en mai 1990, ancêtre du CNDH.
`,
    exercices: md`
### Exercice 2 — Causes et conséquences

Pour chacun des événements suivants, donnez une cause et une conséquence politique : 1) les tentatives de coup d'État de 1971 et 1972 ; 2) la Marche verte ; 3) l'ajustement structurel de 1983.

<details><summary>Voir le corrigé</summary>

1) Cause : mécontentement d'officiers et concentration du pouvoir pendant l'état d'exception ; conséquence : l'armée est écartée de la politique et le Palais cherche à renouer avec les partis (Constitution de 1972). 2) Cause : revendication du Sahara après l'avis de la CIJ du 16 octobre 1975 ; conséquence : consensus national et reprise des élections (1976-1977). 3) Cause : endettement, coût de la guerre, baisse des cours du phosphate ; conséquence : hausses de prix, émeutes de 1984 et 1990, tensions avec les syndicats.

</details>

### Exercice 3 — Vrai ou faux ?

1) Le Parlement élu sous la Constitution de 1972 siège dès 1972. 2) L'USFP est issue de l'UNFP. 3) Le RNI est créé avant les élections de 1977. 4) Le CCDH est créé en 1990.

<details><summary>Voir le corrigé</summary>

1) Faux : les législatives n'ont lieu qu'en 1977. 2) Vrai (1975). 3) Faux : il est fondé en 1978 par les élus « indépendants » de 1977. 4) Vrai (mai 1990).

</details>
`,
    qcm: [
      { q: "Pendant l'état d'exception (1965-1970), la loi est faite par :", choix: ["Le Parlement", "Des décrets royaux portant loi", "Le Conseil constitutionnel", "Référendum"], bonne: 1, explication: "Le Parlement est suspendu." },
      { q: "La tentative de coup d'État de Skhirat a lieu le :", choix: ["10 juillet 1971", "16 août 1972", "6 novembre 1975", "20 juin 1981"], bonne: 0, explication: "Attaque du palais pendant une réception." },
      { q: "L'attaque contre le Boeing royal (1972) est attribuée au général :", choix: ["Medbouh", "Oufkir", "Dlimi", "Kettani"], bonne: 1, explication: "Il meurt le jour même." },
      { q: "La Constitution de 1972 porte la part des députés élus au suffrage direct à :", choix: ["Un tiers", "La moitié", "Deux tiers", "La totalité"], bonne: 2, explication: "La totalité ne sera atteinte qu'en 1996." },
      { q: "La Marche verte a lieu le :", choix: ["16 octobre 1975", "6 novembre 1975", "14 novembre 1975", "3 juin 1977"], bonne: 1, explication: "350 000 volontaires." },
      { q: "L'USFP est fondée en :", choix: ["1959", "1972", "1975", "1983"], bonne: 2, explication: "Par l'aile de l'UNFP dirigée par Abderrahim Bouabid." },
      { q: "Le RNI est fondé en 1978 autour de :", choix: ["Ahmed Osman", "Maâti Bouabid", "Mahjoubi Aherdane", "Ali Yata"], bonne: 0, explication: "Premier ministre et beau-frère du Roi." },
      { q: "L'Union constitutionnelle arrive en tête des législatives de :", choix: ["1977", "1984", "1993", "1997"], bonne: 1, explication: "Un an après sa création." },
      { q: "Le programme d'ajustement structurel est adopté en :", choix: ["1975", "1981", "1983", "1990"], bonne: 2, explication: "Avec le FMI et la Banque mondiale." },
      { q: "Le Conseil consultatif des droits de l'homme est créé en :", choix: ["1975", "1984", "1990", "2004"], bonne: 2, explication: "Il deviendra le CNDH en 2011." },
    ],
  },
  4: {
    titre: "L'alternance consensuelle et les révisions de 1992 et 1996",
    description: "Vie politique 1990-1999 : Koutla démocratique, révisions de 1992 et 1996, bicaméralisme rétabli, élections de 1997, gouvernement Youssoufi, succession de 1999.",
    resume: md`
## L'essentiel — 1990-1999

- Causes de l'ouverture : fin de la guerre froide, image internationale, sortie de l'ajustement, tensions sociales, préparation de la succession.
- **Koutla démocratique** (mai 1992) : Istiqlal, USFP, PPS, OADP, UNFP ; **mémorandums** au Roi.
- **Révision du 4 septembre 1992** : droits de l'homme dans le préambule, ministres proposés par le Premier ministre, programme devant la Chambre, Conseil constitutionnel ; seul le PPS de la Koutla appelle au oui.
- Législatives de 1993 ; échec de l'entrée de la Koutla au gouvernement (1994-1995), notamment sur Driss Basri.
- **Révision du 13 septembre 1996**, votée par l'Istiqlal et l'USFP : Chambre des représentants entièrement élue au suffrage direct, **Chambre des conseillers** rétablie (suffrage indirect, neuf ans).
- Législatives du **14 novembre 1997** : USFP en tête avec **57 sièges sur 325**.
- **Abderrahmane Youssoufi** nommé Premier ministre le **4 février 1998** ; gouvernement le 14 mars 1998 (Koutla + Centre).
- **Ministères de souveraineté** (Intérieur, Affaires étrangères, Justice, Habous) confiés hors partis.
- **Alternance consensuelle** : accord avec le Roi plutôt que victoire électorale nette.
- Mort de Hassan II et avènement de **Mohammed VI** le **23 juillet 1999**, transition apaisée.
`,
    exercices: md`
### Exercice 2 — Comparer 1992 et 1996

Présentez dans un tableau trois différences entre les révisions de 1992 et de 1996 (contenu, Parlement, position de l'opposition).

<details><summary>Voir le corrigé</summary>

| Critère | 1992 | 1996 |
|---|---|---|
| Apport principal | Droits de l'homme dans le préambule, Conseil constitutionnel, ministres proposés par le Premier ministre | Bicaméralisme rétabli, Chambre des représentants entièrement élue au suffrage direct |
| Parlement | Chambre unique, un tiers élu au suffrage indirect | Deux chambres : représentants (direct, cinq ans), conseillers (indirect, neuf ans) |
| Opposition | La Koutla ne soutient pas le texte, sauf le PPS | L'Istiqlal et l'USFP votent oui |

</details>

### Exercice 3 — Calcul

En 1997, la Chambre compte 325 sièges et l'USFP en obtient 57. 1) Calculez la majorité absolue. 2) Calculez la part des sièges de l'USFP. 3) Combien de sièges manque-t-il à l'USFP pour gouverner seule ?

<details><summary>Voir le corrigé</summary>

1) 325 / 2 = 162,5, donc **163 sièges**. 2) 57 / 325 × 100 ≈ **17,5 %**. 3) 163 − 57 = **106 sièges** : l'USFP doit former une large coalition, ce qui explique le caractère « consensuel » de l'alternance.

</details>
`,
    qcm: [
      { q: "La Koutla démocratique est créée en :", choix: ["1970", "1992", "1996", "1998"], bonne: 1, explication: "À ne pas confondre avec la Koutla nationale de 1970." },
      { q: "Parmi ces partis, lequel n'est pas membre de la Koutla démocratique ?", choix: ["L'Istiqlal", "L'USFP", "Le RNI", "Le PPS"], bonne: 2, explication: "Le RNI appartient au Centre." },
      { q: "La révision de 1992 inscrit dans le préambule :", choix: ["L'attachement aux droits de l'homme universellement reconnus", "La régionalisation avancée", "Le statut de l'opposition", "La parité"], bonne: 0, explication: "Première référence constitutionnelle de ce type." },
      { q: "La révision de 1992 crée :", choix: ["La Cour constitutionnelle", "Le Conseil constitutionnel", "La Chambre des conseillers", "Le CNDH"], bonne: 1, explication: "Devenu Cour constitutionnelle en 2011." },
      { q: "La révision de 1996 :", choix: ["Supprime la seconde chambre", "Rétablit le bicaméralisme", "Crée le Chef du gouvernement", "Institue l'état d'exception"], bonne: 1, explication: "Le bicaméralisme existait en 1962." },
      { q: "Sous la Constitution de 1996, la Chambre des conseillers est élue pour :", choix: ["Cinq ans", "Six ans", "Neuf ans", "Quatre ans"], bonne: 2, explication: "Renouvelée par tiers." },
      { q: "Aux législatives de 1997, l'USFP obtient :", choix: ["57 sièges sur 325", "107 sièges sur 395", "125 sièges sur 395", "163 sièges sur 325"], bonne: 0, explication: "Première place, sans majorité." },
      { q: "Abderrahmane Youssoufi est nommé Premier ministre le :", choix: ["14 novembre 1997", "4 février 1998", "14 mars 1998", "23 juillet 1999"], bonne: 1, explication: "Le gouvernement est nommé le 14 mars 1998." },
      { q: "Les ministères de souveraineté sont :", choix: ["Confiés au parti arrivé en tête", "Confiés à des personnalités choisies par le Roi, hors du jeu partisan", "Supprimés en 1996", "Réservés à l'opposition"], bonne: 1, explication: "Intérieur, Affaires étrangères, Justice, Habous." },
      { q: "Mohammed VI accède au trône le :", choix: ["3 mars 1961", "23 juillet 1999", "12 octobre 1999", "30 juillet 2000"], bonne: 1, explication: "Le jour du décès de Hassan II." },
    ],
  },
  5: {
    titre: "Le nouveau règne : réformes et ouverture encadrée (1999-2010)",
    description: "Vie politique 1999-2010 : nouveau concept de l'autorité, IER et justice transitionnelle, Code de la famille, INDH, élections de 2002 et 2007, création du PAM.",
    resume: md`
## L'essentiel — 1999-2010

- Discours du **12 octobre 1999** sur le **nouveau concept de l'autorité** ; renvoi de Driss Basri (9 novembre 1999).
- **Justice transitionnelle** : vérité, réparation, mémoire, réformes, sans procès pénal obligatoire.
- **IER** installée le **7 janvier 2004** (Driss Benzekri), mandat **1956-1999**, auditions publiques, rapport rendu public en **décembre 2005** ; pas de poursuites des responsables.
- **IRCAM** (17 octobre 2001) ; **Code de la famille** (loi 70-03, 3 février 2004) après arbitrage royal.
- Attentats du **16 mai 2003** à Casablanca ; loi antiterroriste 03-03.
- **INDH** (18 mai 2005) ; loi 36-04 sur les partis (2006) ; initiative d'autonomie du Sahara (11 avril 2007).
- Législatives du **27 septembre 2002** : liste nationale de 30 sièges, 35 femmes élues ; USFP 50, Istiqlal 48, PJD 42.
- Nomination de **Driss Jettou**, technocrate : l'USFP dénonce l'abandon de la « **méthodologie démocratique** ».
- Législatives du **7 septembre 2007** : participation de **37 %** ; Abbas El Fassi (Istiqlal) Premier ministre.
- **PAM** fondé en août 2008 par Fouad Ali El Himma, en tête des communales de 2009 ; Commission consultative de la régionalisation (2010).
`,
    exercices: md`
### Exercice 2 — L'IER en cinq questions

1) Qui a créé l'IER et quand ? 2) Qui la présidait ? 3) Quelle période couvrait son mandat ? 4) Citez deux de ses méthodes de travail. 5) Citez une limite relevée par les observateurs.

<details><summary>Voir le corrigé</summary>

1) Le Roi, installation le 7 janvier 2004. 2) Driss Benzekri, ancien détenu politique. 3) 1956-1999. 4) Auditions publiques de victimes retransmises à la télévision ; enquêtes et indemnisation ; recommandations de réformes. 5) Pas de désignation nominative des responsables ni de poursuites pénales.

</details>

### Exercice 3 — Commenter un chiffre

En 2002, 35 femmes sont élues à la Chambre des représentants, contre 2 en 1997. Expliquez ce changement et sa portée.

<details><summary>Voir le corrigé</summary>

Le changement vient d'une **liste nationale** de 30 sièges, réservée en pratique aux femmes par un accord entre partis : 30 élues sur cette liste et 5 élues dans les circonscriptions locales. C'est une **discrimination positive** qui fait passer les femmes d'une présence symbolique à environ 10 % des sièges. Sa limite : les femmes restent rares en tête des listes locales. Le mécanisme sera prolongé (liste nationale élargie en 2011, listes régionales en 2021) et l'article 19 de la Constitution de 2011 fixera l'objectif de la parité.

</details>
`,
    qcm: [
      { q: "Le discours sur le nouveau concept de l'autorité est prononcé le :", choix: ["23 juillet 1999", "12 octobre 1999", "9 mars 2011", "18 mai 2005"], bonne: 1, explication: "À Casablanca." },
      { q: "L'IER est présidée par :", choix: ["Driss Benzekri", "Driss Basri", "Driss Jettou", "Omar Azziman"], bonne: 0, explication: "Ancien détenu politique." },
      { q: "Le mandat de l'IER couvre la période :", choix: ["1956-1999", "1965-1975", "1971-1991", "1999-2004"], bonne: 0, explication: "De l'indépendance à la fin du règne de Hassan II." },
      { q: "Le Code de la famille est la loi :", choix: ["36-04", "70-03", "03-03", "29-11"], bonne: 1, explication: "Promulguée le 3 février 2004." },
      { q: "L'INDH est lancée le :", choix: ["16 mai 2003", "18 mai 2005", "11 avril 2007", "12 juin 2009"], bonne: 1, explication: "Programme de lutte contre la pauvreté et l'exclusion." },
      { q: "L'IRCAM est créé en :", choix: ["1999", "2001", "2004", "2011"], bonne: 1, explication: "Dahir du 17 octobre 2001, après le discours d'Ajdir." },
      { q: "En 2002, le Roi nomme Premier ministre :", choix: ["Abderrahmane Youssoufi", "Driss Jettou", "Abbas El Fassi", "Abdelilah Benkirane"], bonne: 1, explication: "Technocrate sans appartenance partisane." },
      { q: "La participation aux législatives du 7 septembre 2007 est de :", choix: ["37 %", "45 %", "51 %", "73 %"], bonne: 0, explication: "Record de faiblesse à cette date." },
      { q: "Le PAM est fondé en :", choix: ["2002", "2007", "2008", "2011"], bonne: 2, explication: "Par Fouad Ali El Himma, élu député en 2007." },
      { q: "La liste nationale introduite en 2002 compte :", choix: ["30 sièges", "60 sièges", "90 sièges", "395 sièges"], bonne: 0, explication: "Réservée en pratique aux femmes." },
    ],
  },
  6: {
    titre: "2011 et la décennie des gouvernements issus des urnes (2011-2021)",
    description: "Vie politique 2011-2021 : mouvement du 20 février, référendum de 2011, gouvernements Benkirane et El Othmani, blocage, Hirak du Rif, quotient électoral, RNI.",
    resume: md`
## L'essentiel — 2011-2021

- **Mouvement du 20 février** (2011) : jeunes, gauche, associations, Al Adl Wal Ihsane (retrait en décembre 2011) ; demande d'une **monarchie parlementaire**.
- Discours du **9 mars 2011** ; commission **Menouni** ; mécanisme politique de suivi (Moatassim).
- Référendum du **1er juillet 2011** : **98,49 %** de oui, participation officielle de **73,46 %** ; promulgation le 29 juillet 2011.
- Apports politiques : article 47, Chef du gouvernement, statut de l'opposition (article 10), interdiction du nomadisme (article 61), pétitions et motions (articles 14 et 15).
- **25 novembre 2011** : PJD **107** sièges sur 395 ; **Benkirane** nommé le 29 novembre 2011 ; sortie de l'Istiqlal et entrée du RNI en 2013.
- **4 septembre 2015** : premiers conseils régionaux élus au suffrage direct (lois organiques 111-14, 112-14, 113-14).
- **7 octobre 2016** : PJD **125**, PAM 102 ; **blocage** de cinq mois ; communiqué royal du 15 mars 2017 ; **El Othmani** nommé le 17 mars 2017.
- Mobilisations : **Hirak du Rif** (mort de Mouhcine Fikri, 28 octobre 2016), Jerada (2017-2018), **boycott** (2018) : crise de la médiation.
- Loi organique **04-21** : quotient électoral calculé sur les **inscrits** ; listes régionales de femmes (90 sièges).
- **8 septembre 2021** : participation 50,35 % ; RNI **102**, PAM 87, Istiqlal 81, PJD 13 ; **Akhannouch** nommé le 10 septembre ; coalition de 270 sièges.
`,
    exercices: md`
### Exercice 2 — Le quotient électoral

Une circonscription de 4 sièges compte 200 000 inscrits et 80 000 suffrages exprimés. 1) Calculez le quotient sur les exprimés et sur les inscrits. 2) Une liste A obtient 45 000 voix : combien de sièges obtient-elle au quotient, dans chaque cas, avant la répartition des restes ?

<details><summary>Voir le corrigé</summary>

1) Sur les exprimés : 80 000 / 4 = **20 000** voix. Sur les inscrits : 200 000 / 4 = **50 000** voix. 2) Avec le quotient de 20 000 : 45 000 / 20 000 = 2,25, soit **2 sièges** au quotient, puis les restes. Avec le quotient de 50 000 : 45 000 / 50 000 = 0,9, soit **0 siège** au quotient : tous les sièges se répartissent aux plus forts restes, ce qui donne au mieux un siège à la liste A malgré 56 % des voix. Le calcul sur les inscrits favorise donc les petites listes et pénalise la liste arrivée en tête.

</details>

### Exercice 3 — Question de réflexion

Pourquoi parle-t-on d'une « crise de la médiation » à propos du Hirak du Rif et du boycott de 2018 ?

<details><summary>Voir le corrigé</summary>

Les **médiateurs** traditionnels entre la société et l'État sont les partis, les syndicats et les élus. Dans ces deux mobilisations, les citoyens les contournent : le Hirak s'adresse directement à l'État et au Roi, avec des meneurs locaux sans affiliation ; le boycott naît sur les réseaux sociaux, sans organisation ni porte-parole. Ces formes traduisent une défiance envers les intermédiaires et rendent la négociation plus difficile, puisqu'il n'existe pas d'interlocuteur reconnu.

</details>
`,
    qcm: [
      { q: "La majorité des manifestants du 20 février 2011 réclamait :", choix: ["La chute du régime", "Une monarchie parlementaire", "Le retour au parti unique", "La dissolution des partis"], bonne: 1, explication: "Différence avec la Tunisie et l'Égypte." },
      { q: "La commission consultative de révision de la Constitution (2011) est présidée par :", choix: ["Abdeltif Menouni", "Driss Benzekri", "Omar Azziman", "Chakib Benmoussa"], bonne: 0, explication: "Nommée après le discours du 9 mars." },
      { q: "Au référendum du 1er juillet 2011, le oui obtient :", choix: ["73,46 %", "98,49 %", "50,35 %", "45 %"], bonne: 1, explication: "73,46 % est la participation officielle." },
      { q: "L'interdiction du nomadisme parlementaire figure à l'article :", choix: ["10", "47", "61", "88"], bonne: 2, explication: "L'élu qui quitte son parti perd son siège." },
      { q: "Aux législatives de 2011, le PJD obtient :", choix: ["107 sièges", "125 sièges", "102 sièges", "13 sièges"], bonne: 0, explication: "Sur 395." },
      { q: "En 2013, l'Istiqlal quitte le gouvernement ; il est remplacé par :", choix: ["Le PAM", "Le RNI", "L'USFP", "L'UC"], bonne: 1, explication: "Gouvernement Benkirane II, octobre 2013." },
      { q: "Les conseils régionaux sont élus pour la première fois au suffrage direct en :", choix: ["2009", "2011", "2015", "2021"], bonne: 2, explication: "Le 4 septembre 2015." },
      { q: "Saâdeddine El Othmani est nommé Chef du gouvernement le :", choix: ["10 octobre 2016", "15 mars 2017", "17 mars 2017", "5 avril 2017"], bonne: 2, explication: "Après le communiqué royal du 15 mars." },
      { q: "Depuis la loi organique 04-21, le quotient électoral se calcule sur :", choix: ["Les suffrages exprimés", "Les électeurs inscrits", "La population totale", "Les votants"], bonne: 1, explication: "Réforme validée par la Cour constitutionnelle en 2021." },
      { q: "Aux législatives du 8 septembre 2021, le PJD obtient :", choix: ["125 sièges", "54 sièges", "13 sièges", "87 sièges"], bonne: 2, explication: "Contre 125 en 2016." },
    ],
  },
  7: {
    titre: "Les enjeux actuels de la vie politique (2021-2026)",
    description: "Vie politique 2021-2026 : GenZ 212, réforme électorale 53-25, législatives du 23 septembre 2026, gouvernement El Mansouri, abstention, jeunes, femmes, Sahara.",
    resume: md`
## L'essentiel — 2021-2026

- Gouvernement **Akhannouch** (2021-2026) : État social (AMO, aides directes), Nouveau modèle de développement (rapport du 25 mai 2021), séisme d'Al Haouz (8 septembre 2023).
- **GenZ 212** : né sur Discord après des décès à l'hôpital d'Agadir ; manifestations à partir du **27 septembre 2025** ; santé, éducation, emploi, corruption ; collectif sans parti ni syndicat.
- Réponse publique : hausse des budgets de la santé et de l'éducation dans la loi de finances 2026 ; essoufflement fin octobre 2025.
- **Loi organique 53-25** (fin 2025) : remboursement jusqu'à **75 %** des dépenses de campagne des listes de moins de 35 ans à partir de **2 %** des voix ; sanctions contre les fausses informations électorales.
- Législatives du **23 septembre 2026** : **15,8 millions** d'inscrits, participation définitive **38,02 %** (50,35 % en 2021).
- Sièges : PAM **97**, RNI 66, Istiqlal 65, PJD 54, MP 29, USFP 26, PPS 19, UC 17.
- **Fatima Ezzahra El Mansouri** (PAM) nommée le **29 septembre 2026** : première **Cheffe du gouvernement**.
- Coalition **PAM-Istiqlal-USFP-PPS** : **207 sièges** (majorité 198) ; gouvernement de 32 membres nommé le 16 octobre 2026 ; RNI et PJD dans l'opposition.
- Débats : crise de la représentation, jeunes (articles 33 et 170), parité (article 19), numérique, régionalisation, Sahara (résolution **2797** du 31 octobre 2025).
`,
    exercices: md`
### Exercice 2 — Comparer deux scrutins

À l'aide des résultats de 2021 et de 2026, calculez : 1) l'écart de participation en points ; 2) l'évolution du PAM en pourcentage ; 3) la part des sièges de la coalition El Mansouri.

<details><summary>Voir le corrigé</summary>

1) 50,35 − 38,02 = **12,33 points** de moins. 2) (97 − 87) / 87 × 100 ≈ **+11,5 %**. 3) 207 / 395 × 100 ≈ **52,4 %** des sièges : majorité absolue, mais courte.

</details>

### Exercice 3 — Note de synthèse

En quinze lignes, présentez les mesures prises ou débattues depuis 2021 pour rapprocher les jeunes de la vie politique.

<details><summary>Voir le corrigé</summary>

Le constat : forte abstention, surtout chez les jeunes (les 18-24 ans représentent environ 4 % des inscrits en 2026), et mobilisation hors des partis (GenZ 212, automne 2025). Les mesures : **financement public** des campagnes des listes de moins de 35 ans (jusqu'à 75 % des dépenses, à partir de 2 % des voix, loi organique 53-25) ; hausse des budgets de la santé et de l'éducation, principales revendications du mouvement ; outils de **démocratie participative** déjà prévus (pétitions et motions, articles 14 et 15) ; Conseil consultatif de la jeunesse et de l'action associative (article 170). Les débats : inscription automatique sur les listes électorales, renouvellement des directions de partis, usage des réseaux sociaux. Limite : la participation de 2026 montre que ces mesures n'ont pas encore inversé la tendance.

</details>
`,
    qcm: [
      { q: "Le collectif GenZ 212 s'est organisé principalement sur :", choix: ["Un parti politique", "La plateforme Discord", "Un syndicat", "La télévision publique"], bonne: 1, explication: "Organisation horizontale en ligne." },
      { q: "Les manifestations de GenZ 212 commencent le :", choix: ["20 février 2011", "27 septembre 2025", "23 septembre 2026", "8 septembre 2021"], bonne: 1, explication: "Après des décès à l'hôpital d'Agadir." },
      { q: "La loi organique 53-25 prévoit le remboursement des dépenses de campagne des listes de jeunes jusqu'à :", choix: ["25 %", "50 %", "75 %", "100 %"], bonne: 2, explication: "À condition d'obtenir au moins 2 % des voix." },
      { q: "Les listes de jeunes visées par la réforme de 2025 sont celles des candidats de moins de :", choix: ["25 ans", "30 ans", "35 ans", "40 ans"], bonne: 2, explication: "Âge apprécié le jour du scrutin." },
      { q: "Le taux de participation définitif aux législatives du 23 septembre 2026 est de :", choix: ["38,02 %", "38,08 %", "50,35 %", "45,4 %"], bonne: 0, explication: "38,08 % était le taux provisoire." },
      { q: "Aux législatives de 2026, le parti arrivé en tête est :", choix: ["Le RNI", "Le PJD", "Le PAM", "L'Istiqlal"], bonne: 2, explication: "97 sièges sur 395." },
      { q: "Fatima Ezzahra El Mansouri est nommée Cheffe du gouvernement le :", choix: ["23 septembre 2026", "29 septembre 2026", "12 octobre 2026", "16 octobre 2026"], bonne: 1, explication: "Première femme à ce poste." },
      { q: "La coalition gouvernementale de 2026 réunit :", choix: ["PAM, RNI, Istiqlal", "PAM, Istiqlal, USFP, PPS", "PAM, PJD, MP", "RNI, USFP, UC"], bonne: 1, explication: "207 sièges." },
      { q: "La majorité absolue de la Chambre des représentants est de :", choix: ["163 sièges", "198 sièges", "207 sièges", "270 sièges"], bonne: 1, explication: "395 / 2 = 197,5, arrondi à 198." },
      { q: "La résolution 2797 du Conseil de sécurité (31 octobre 2025) porte sur :", choix: ["Le Sahara", "La régionalisation", "Les élections de 2026", "Le mouvement GenZ 212"], bonne: 0, explication: "Elle retient l'initiative d'autonomie comme base des négociations." },
    ],
  },
};

export default chapitres;
