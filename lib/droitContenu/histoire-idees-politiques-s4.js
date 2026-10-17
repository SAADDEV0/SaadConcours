// Histoire des idées politiques (Droit S4) — compléments par chapitre : description SEO, résumé, exercices 2 et 3, QCM.
const md = String.raw;

const chapitres = {
  1: {
    titre: "La pensée politique grecque : la cité, Platon et Aristote",
    description: "Pensée politique grecque : démocratie athénienne, sophistes et Socrate, cité idéale de Platon, Aristote et la classification des régimes.",
    resume: md`
## L'essentiel — La pensée grecque

- **Histoire des idées politiques** : doctrines sur le pouvoir, la loi, la justice, replacées dans leur contexte ; ≠ philosophie politique (le bon régime) et science politique (étude empirique).
- **Polis** : cité autonome ; **démocratie athénienne** (Solon, Clisthène, Périclès) : Assemblée, **tirage au sort**, isonomie, iségorie ; directe mais **restreinte** (femmes, esclaves, métèques exclus).
- **Sophistes** : rhétorique, relativisme (Protagoras), loi = convention (nomos/physis) ; **Socrate** : dialogue, vertu = savoir, condamné en 399.
- **Platon** (République, Politique, Lois) : âme et cité tripartites (gouvernants-philosophes, gardiens, producteurs) ; **justice** = chacun sa fonction ; **philosophe-roi**, allégorie de la caverne, communauté des gardiens.
- Dégénérescence : timocratie → oligarchie → démocratie → **tyrannie** ; dans les **Lois** : gouvernement des lois, régime mixte ; critique de **Popper** (1945).
- **Aristote** (Politique, 158 constitutions) : cité naturelle, **homme animal politique** (logos), citoyen = juger et délibérer ; esclavage justifié.
- Classification : **nombre** × **finalité** : royauté/tyrannie, aristocratie/oligarchie, politie/démocratie ; meilleur régime pratique : **politie** et **classe moyenne**.
- Trois **fonctions** (délibérer, commander, juger) ; gouvernement des lois, **équité** ; justice **distributive** et **corrective**.
- Héritage transmis par les philosophes musulmans (Al-Farabi, Averroès).
`,
    exercices: md`
### Exercice 2 — Classez les régimes

Selon la classification d'Aristote, qualifiez : 1) un roi qui gouverne pour le bien de tous ; 2) un petit groupe de riches qui gouverne dans son intérêt ; 3) la multitude qui gouverne selon les lois pour l'intérêt général ; 4) un chef qui a pris le pouvoir par la force et gouverne pour lui-même ; 5) les meilleurs citoyens qui gouvernent pour l'intérêt commun.

<details><summary>Voir le corrigé</summary>

1) Royauté. 2) Oligarchie. 3) Politie. 4) Tyrannie. 5) Aristocratie.

</details>

### Exercice 3 — Question de réflexion

Pourquoi Platon se méfie-t-il de la démocratie ? Donnez trois raisons.

<details><summary>Voir le corrigé</summary>

1) La condamnation à mort de Socrate par un tribunal démocratique lui montre que la foule peut se tromper gravement. 2) Pour Platon, gouverner est un savoir : la démocratie confie le pouvoir à tous, y compris à ceux qui ignorent le Bien, et favorise les démagogues qui flattent les désirs. 3) L'excès de liberté démocratique détruit l'autorité et conduit à la tyrannie, selon la dégénérescence décrite dans la République.

</details>
`,
    qcm: [
      { q: "Le mot « politique » dérive du grec :", choix: ["Demos", "Polis", "Logos", "Kratos"], bonne: 1, explication: "La cité." },
      { q: "Dans la démocratie athénienne, la plupart des magistrats étaient désignés par :", choix: ["L'hérédité", "Le tirage au sort", "La cooptation", "La nomination royale"], bonne: 1, explication: "Au nom de l'égalité ; les stratèges étaient élus." },
      { q: "Étaient exclus de la citoyenneté athénienne :", choix: ["Les agriculteurs", "Les femmes, les esclaves et les métèques", "Les artisans seulement", "Les anciens magistrats"], bonne: 1, explication: "Démocratie restreinte." },
      { q: "La formule « l'homme est la mesure de toutes choses » est attribuée à :", choix: ["Socrate", "Protagoras", "Platon", "Aristote"], bonne: 1, explication: "Relativisme sophiste." },
      { q: "La thèse du philosophe-roi figure dans :", choix: ["La Politique d'Aristote", "La République de Platon", "Le Prince de Machiavel", "Le Léviathan"], bonne: 1, explication: "Seul le philosophe connaît le Bien." },
      { q: "Selon Platon, la justice dans la cité consiste à :", choix: ["Partager les biens également", "Que chaque classe accomplisse sa propre fonction", "Élire les gouvernants", "Tirer au sort les juges"], bonne: 1, explication: "Harmonie des trois classes." },
      { q: "Pour Platon, le régime qui naît de l'excès de liberté est :", choix: ["La timocratie", "L'oligarchie", "La tyrannie", "La royauté"], bonne: 2, explication: "Livre VIII de la République." },
      { q: "Aristote a fait étudier les constitutions de :", choix: ["12 cités", "58 cités", "158 cités", "500 cités"], bonne: 2, explication: "Méthode d'observation." },
      { q: "Chez Aristote, le gouvernement droit de la multitude s'appelle :", choix: ["Démocratie", "Politie", "Oligarchie", "Timocratie"], bonne: 1, explication: "La démocratie est un régime dévié." },
      { q: "Pour Aristote, la stabilité de la cité repose sur :", choix: ["Une classe moyenne nombreuse", "Un roi philosophe", "L'abolition de la propriété", "La guerre permanente"], bonne: 0, explication: "Régime mixte, juste milieu." },
    ],
  },

  2: {
    titre: "Rome et la pensée politique chrétienne médiévale",
    description: "Pensée politique de Rome et du Moyen Âge : Polybe, Cicéron, saint Augustin, querelle des deux glaives, Marsile de Padoue et Thomas d'Aquin.",
    resume: md`
## L'essentiel — Rome et le Moyen Âge

- **Polybe** : **anacyclose** (cycle de dégénérescence des régimes) ; **régime mixte** romain : consuls (monarchie), Sénat (aristocratie), comices et tribuns (démocratie), contrepoids.
- **Cicéron** (De la République, Des lois) : res publica = accord sur le droit et intérêt commun ; régime mixte ; **loi naturelle** conforme à la raison droite, universelle ; loi injuste = pas une loi.
- Droit romain : technique juridique ; maximes absolutistes (ce qui plaît au prince, prince délié des lois) et lex regia (délégation du peuple).
- Christianisme : dualité **spirituel/temporel** (« Rendez à César ») ; toute autorité vient de Dieu (Paul) ; Constantin, édit de 380.
- **Saint Augustin** (*La Cité de Dieu*, après 410) : **cité terrestre** (amour de soi) et **cité de Dieu** (amour de Dieu), mêlées ; État né du péché, nécessaire à la paix ; royaumes sans justice = grands brigandages.
- **Deux glaives** (Gélase Iᵉʳ) ; **Grégoire VII** (1075, Canossa 1077), **concordat de Worms** (1122) ; **Unam Sanctam** (Boniface VIII, 1302) contre Philippe le Bel ; légistes : le **roi est empereur en son royaume**.
- **Marsile de Padoue** (1324) : pouvoir issu du peuple, Église sans pouvoir coercitif.
- **Thomas d'Aquin** : synthèse avec Aristote (transmis par Averroès) ; État naturel, **bien commun** ; lois **éternelle, naturelle, humaine, divine** ; monarchie tempérée ; déposition du tyran par une autorité publique, pas de tyrannicide privé.
- Héritage : distinction des pouvoirs spirituel et temporel, loi supérieure, souveraineté royale, consentement à l'impôt, résistance au tyran.
`,
    exercices: md`
### Exercice 2 — Associez

Associez chaque idée à son auteur : a) le cycle des régimes et le régime mixte romain ; b) la loi vraie est la raison droite conforme à la nature ; c) la cité terrestre et la cité de Dieu ; d) le pouvoir vient du peuple, législateur humain ; e) la loi humaine contraire à la loi naturelle est une corruption de la loi.

<details><summary>Voir le corrigé</summary>

a) Polybe. b) Cicéron. c) Saint Augustin. d) Marsile de Padoue. e) Thomas d'Aquin.

</details>

### Exercice 3 — Question de cours

Comparez la conception de l'État chez saint Augustin et chez Thomas d'Aquin.

<details><summary>Voir le corrigé</summary>

Pour Augustin, l'État est une conséquence du péché originel : il est nécessaire pour contenir les passions et maintenir la paix, mais il n'a qu'une valeur relative et n'est légitime que s'il sert la justice. Pour Thomas d'Aquin, qui reprend Aristote, la société politique est naturelle : l'homme est un animal social, l'État aurait existé même sans le péché et il a une valeur positive, la poursuite du bien commun temporel. Les deux auteurs soumettent cependant le pouvoir à une justice ou une loi supérieure, et Thomas d'Aquin subordonne le temporel au spirituel pour ce qui concerne le salut.

</details>
`,
    qcm: [
      { q: "La théorie de l'anacyclose est due à :", choix: ["Cicéron", "Polybe", "Augustin", "Marsile de Padoue"], bonne: 1, explication: "Cycle de dégénérescence des régimes." },
      { q: "Pour Polybe, la République romaine est un exemple de :", choix: ["Démocratie directe", "Régime mixte", "Tyrannie", "Théocratie"], bonne: 1, explication: "Consuls, Sénat, peuple." },
      { q: "Cicéron définit la loi vraie comme :", choix: ["La volonté du prince", "La raison droite conforme à la nature", "La décision de la majorité", "La coutume locale"], bonne: 1, explication: "Influence stoïcienne." },
      { q: "La Cité de Dieu a été écrite après :", choix: ["La conversion de Constantin", "Le sac de Rome en 410", "La chute de Constantinople", "Le concordat de Worms"], bonne: 1, explication: "Réponse aux accusations des païens." },
      { q: "Pour Augustin, la cité terrestre est fondée sur :", choix: ["L'amour de Dieu", "L'amour de soi", "La loi naturelle", "Le contrat social"], bonne: 1, explication: "Jusqu'au mépris de Dieu." },
      { q: "La bulle Unam Sanctam (1302) affirme :", choix: ["L'indépendance des rois", "Que les deux glaives appartiennent à l'Église", "La séparation de l'Église et de l'État", "La souveraineté du peuple"], bonne: 1, explication: "Boniface VIII contre Philippe le Bel." },
      { q: "La formule « le roi est empereur en son royaume » est l'œuvre :", choix: ["Des papes", "Des légistes royaux", "De saint Augustin", "De Polybe"], bonne: 1, explication: "Annonce de la souveraineté." },
      { q: "Marsile de Padoue situe la source du pouvoir dans :", choix: ["Le pape", "Le peuple", "L'empereur seul", "La noblesse"], bonne: 1, explication: "Le Défenseur de la paix, 1324." },
      { q: "Thomas d'Aquin distingue :", choix: ["Deux lois", "Trois lois", "Quatre lois", "Cinq lois"], bonne: 2, explication: "Éternelle, naturelle, humaine, divine." },
      { q: "Pour Thomas d'Aquin, l'État :", choix: ["Est une conséquence du péché", "Est naturel et vise le bien commun", "Doit être aboli", "Est supérieur à toute loi"], bonne: 1, explication: "Influence d'Aristote." },
    ],
  },

  3: {
    titre: "La pensée politique en islam : du califat à Ibn Khaldoun",
    description: "Pensée politique en islam : califat et allégeance, Al-Mawardi, Al-Farabi et la cité vertueuse, Averroès, Ibn Taymiyya et l'asabiyya d'Ibn Khaldoun.",
    resume: md`
## L'essentiel — La pensée politique en islam

- **Médine** (622) : oumma, **Charte de Médine** ; succession de 632 : **califat**, **bay'a**, quatre califes « bien guidés », **choura**.
- Schismes : **chiites** (Ali et les imams), **kharijites** (le meilleur, déposable), **sunnites** (unité, ordre) ; califat dynastique (Omeyyades, Abbassides), pouvoirs de fait des sultans.
- **Al-Mawardi** (*al-Ahkam al-sultaniyya*) : imamat obligatoire par la loi religieuse ; désignation par les **ahl al-hall wa-l-'aqd** ou par le prédécesseur ; conditions (justice, science, Quraych) ; devoirs ; émirat par usurpation ; vizirat, cadi, mazalim, hisba.
- **Al-Farabi**, « second maître » : **cité vertueuse** orientée vers le bonheur, chef philosophe et législateur ; cités ignorantes, pécheresses, égarées.
- **Averroès** (Cordoue, Marrakech) : commentateur d'Aristote, commentaire de la République ; *Discours décisif* (accord de la philosophie et de la loi) ; influence en Europe.
- **Ibn Taymiyya** (*al-Siyasa al-shar'iyya*) : primauté de l'application de la charia et de la justice ; fonctions = dépôt (amana) confié aux plus compétents ; choura ; obéissance sauf dans la désobéissance à Dieu.
- **Ibn Khaldoun** (*Muqaddima*, 1377) : science de la civilisation, critique des sources ; bédouins et sédentaires ; **asabiyya** renforcée par la religion ; **cycle des dynasties** (trois ou quatre générations).
- Impôts faibles au début, élevés au déclin (rapproché de la courbe de Laffer) ; injustice ruine la civilisation ; pouvoir naturel, rationnel, califat ; précurseur de la sociologie.
`,
    exercices: md`
### Exercice 2 — Qui a écrit ?

Associez l'œuvre à son auteur : a) Les opinions des habitants de la cité vertueuse ; b) Les statuts gouvernementaux ; c) La Muqaddima ; d) Le Discours décisif ; e) La politique conforme à la loi religieuse.

<details><summary>Voir le corrigé</summary>

a) Al-Farabi. b) Al-Mawardi. c) Ibn Khaldoun. d) Averroès (Ibn Rochd). e) Ibn Taymiyya.

</details>

### Exercice 3 — Question de cours

Expliquez en une dizaine de lignes le concept d'asabiyya et son rôle dans la théorie d'Ibn Khaldoun.

<details><summary>Voir le corrigé</summary>

L'asabiyya est l'esprit de corps, la solidarité de groupe née de la parenté réelle ou supposée et de la vie commune ; elle est plus forte chez les populations bédouines, rudes et frugales. Elle est le moteur de l'histoire politique : un groupe doté d'une forte asabiyya peut conquérir le pouvoir et fonder une dynastie, surtout lorsque la religion unifie les tribus. Avec la sédentarisation, le luxe et le recours aux mercenaires, l'asabiyya s'affaiblit au fil des générations, la dynastie décline et elle est remplacée par un nouveau groupe plus solidaire. L'asabiyya explique ainsi à la fois la naissance et la mort des dynasties.

</details>
`,
    qcm: [
      { q: "L'Hégire, départ du Prophète pour Médine, date de :", choix: ["570", "622", "632", "661"], bonne: 1, explication: "Début du calendrier musulman." },
      { q: "Le serment d'allégeance au calife s'appelle :", choix: ["La choura", "La bay'a", "La hisba", "L'asabiyya"], bonne: 1, explication: "Conçu comme un contrat." },
      { q: "L'auteur des Statuts gouvernementaux (al-Ahkam al-sultaniyya) est :", choix: ["Al-Farabi", "Al-Mawardi", "Ibn Khaldoun", "Averroès"], bonne: 1, explication: "Premier grand traité de droit public musulman." },
      { q: "Les « gens qui lient et délient » sont :", choix: ["Les soldats", "Les notables et savants qui désignent le calife", "Les marchands", "Les gouverneurs de province"], bonne: 1, explication: "Ahl al-hall wa-l-'aqd." },
      { q: "Al-Farabi est surnommé :", choix: ["Le commentateur", "Le second maître", "Le docteur angélique", "Le législateur"], bonne: 1, explication: "Après Aristote, le premier maître." },
      { q: "La cité vertueuse d'Al-Farabi s'inspire principalement de :", choix: ["Platon", "Machiavel", "Hobbes", "Marx"], bonne: 0, explication: "Chef philosophe et législateur." },
      { q: "Averroès a été notamment :", choix: ["Calife de Bagdad", "Cadi de Cordoue et médecin à Marrakech", "Vizir mérinide", "Juge à Damas"], bonne: 1, explication: "Grand commentateur d'Aristote." },
      { q: "Pour Ibn Taymiyya, l'essentiel est :", choix: ["La descendance du calife", "L'application de la charia et la justice", "L'élection au suffrage universel", "La séparation de la religion et de l'État"], bonne: 1, explication: "La politique conforme à la loi religieuse." },
      { q: "Le concept central de la Muqaddima est :", choix: ["La choura", "L'asabiyya", "La bay'a", "Le vizirat"], bonne: 1, explication: "Esprit de corps." },
      { q: "Selon Ibn Khaldoun, une dynastie dure environ :", choix: ["Une génération", "Trois ou quatre générations", "Dix générations", "Un millénaire"], bonne: 1, explication: "Environ cent vingt ans." },
    ],
  },

  4: {
    titre: "La Renaissance et la naissance de l'État moderne : Machiavel, la Réforme et Bodin",
    description: "Naissance de l'État moderne : Machiavel (Le Prince, Discours), Réforme et monarchomaques, La Boétie, souveraineté selon Bodin, raison d'État.",
    resume: md`
## L'essentiel — Renaissance et État moderne

- Contexte : humanisme, imprimerie, monarchies territoriales, guerres d'Italie (1494), **Réforme** (1517) ; **État moderne** : centralisé, territorial, armée, administration, impôt, **souveraineté**.
- **Machiavel** (Florence ; *Le Prince*, 1513 ; *Discours*) : la politique telle qu'elle est (« vérité effective ») ; séparation de la politique et de la morale ; conquête et conservation de l'État.
- Bonnes lois et **bonnes armes**, contre les **mercenaires** ; **virtù** (énergie, habileté) et **fortuna** (circonstances) ; mieux vaut être **craint** qu'aimé, sans être haï ; **renard et lion** ; paraître ; jugement par le résultat.
- *Discours* : préférence **républicaine**, régime mixte romain, **conflits** féconds entre peuple et grands, religion civile ; interprétations du « machiavélisme ».
- **Luther** : deux règnes, obéissance aux princes ; *cujus regio, ejus religio* (1555) ; **Calvin** : résistance par les magistrats inférieurs ; **monarchomaques** (*Vindiciae contra tyrannos*, 1579) : contrat, déposition du tyran ; **La Boétie** : servitude volontaire.
- **Bodin** (*Six livres de la République*, 1576, parti des « politiques ») : souveraineté = puissance **absolue et perpétuelle**, **indivisible** (rejet du régime mixte).
- Marque principale : **donner la loi** sans le consentement d'autrui ; autres : guerre et paix, officiers, dernier ressort, grâce, monnaie, impôt.
- Limites : lois **divines et naturelles**, **lois fondamentales**, propriété (consentement à l'impôt), contrats ; formes de l'État et formes du gouvernement ; monarchie royale.
- **Raison d'État** (Botero, 1589) ; absolutisme et **droit divin** (Bossuet).
`,
    exercices: md`
### Exercice 2 — Machiavel, Bodin ou La Boétie ?

1) La souveraineté est la puissance absolue et perpétuelle d'une République. 2) Il est plus sûr d'être craint qu'aimé. 3) Le tyran n'a de pouvoir que celui que lui donnent ceux qu'il opprime. 4) Les conflits entre le peuple et le Sénat ont fait la liberté de Rome. 5) La première marque de la souveraineté est de donner la loi.

<details><summary>Voir le corrigé</summary>

1) Bodin. 2) Machiavel (Le Prince). 3) La Boétie (Discours de la servitude volontaire). 4) Machiavel (Discours sur Tite-Live). 5) Bodin.

</details>

### Exercice 3 — Question de cours

Expliquez la distinction entre virtù et fortuna chez Machiavel.

<details><summary>Voir le corrigé</summary>

La fortuna désigne les circonstances, le hasard, tout ce qui échappe à la maîtrise humaine ; Machiavel estime qu'elle gouverne la moitié de nos actions et la compare à un fleuve en crue qu'il faut endiguer à l'avance. La virtù est la qualité du prince qui sait saisir l'occasion, s'adapter aux circonstances, agir avec énergie, ruse et audace ; elle n'a rien à voir avec la vertu morale. Le succès politique naît de la rencontre entre la virtù et l'occasion offerte par la fortune : celui qui sait changer de méthode selon les temps réussit.

</details>
`,
    qcm: [
      { q: "Machiavel était secrétaire de la chancellerie de :", choix: ["Venise", "Florence", "Rome", "Milan"], bonne: 1, explication: "De 1498 à 1512." },
      { q: "Le Prince a été écrit en :", choix: ["1492", "1513", "1576", "1651"], bonne: 1, explication: "Publié en 1532." },
      { q: "Chez Machiavel, la virtù désigne :", choix: ["La vertu morale chrétienne", "L'énergie et l'habileté politiques", "La richesse du prince", "La chance"], bonne: 1, explication: "Elle s'oppose à la fortuna." },
      { q: "Machiavel recommande au prince de s'appuyer sur :", choix: ["Des mercenaires", "Des armes propres", "Les armées alliées", "Le pape"], bonne: 1, explication: "Les mercenaires sont infidèles." },
      { q: "Dans les Discours, Machiavel préfère :", choix: ["La tyrannie", "La république à la romaine", "La théocratie", "La monarchie absolue de droit divin"], bonne: 1, explication: "Régime mixte, conflits féconds." },
      { q: "Le principe « cujus regio, ejus religio » est consacré par :", choix: ["Le concordat de Worms", "La paix d'Augsbourg (1555)", "L'édit de Nantes", "La paix de Westphalie"], bonne: 1, explication: "Chaque prince choisit la religion de son territoire." },
      { q: "Les monarchomaques défendent :", choix: ["Le droit divin des rois", "Le droit de résistance au tyran", "L'abolition de la religion", "L'empire universel"], bonne: 1, explication: "Après la Saint-Barthélemy." },
      { q: "Les Six livres de la République de Bodin datent de :", choix: ["1513", "1548", "1576", "1689"], bonne: 2, explication: "Au cœur des guerres de religion." },
      { q: "Pour Bodin, la souveraineté est :", choix: ["Divisible", "Absolue, perpétuelle et indivisible", "Temporaire", "Partagée avec le pape"], bonne: 1, explication: "Il rejette le régime mixte." },
      { q: "Pour Bodin, la souveraineté reste soumise :", choix: ["Aux décisions du pape", "Aux lois divines et naturelles et aux lois fondamentales", "Aux états généraux pour toute loi", "À l'empereur"], bonne: 1, explication: "Absolue n'est pas arbitraire." },
    ],
  },

  5: {
    titre: "Les théories du contrat social : Hobbes, Locke et Rousseau",
    description: "Contrat social : état de nature, Léviathan de Hobbes, gouvernement limité et droits naturels de Locke, volonté générale et souveraineté chez Rousseau.",
    resume: md`
## L'essentiel — Le contrat social

- Structure : **état de nature** (hypothèse) → **contrat** → **état civil** ; légitimité par le **consentement** ; individualisme et rationalisme ; droit naturel moderne (Grotius, Pufendorf).
- **Hobbes** (*Léviathan*, 1651, guerre civile anglaise) : égalité, passions (rivalité, méfiance, gloire), **guerre de chacun contre chacun**, vie brève ; recherche de la paix.
- Contrat : transfert de tous les droits à un **souverain non partie** au pacte ; **Léviathan** ; souveraineté **absolue et indivisible** ; seule limite : le **droit à la vie** ; obéissance tant que le souverain protège ; laïcisation, positivisme.
- **Locke** (*Deux traités*, 1690, Glorieuse Révolution) : état de nature de liberté sous la **loi naturelle** ; droits à la **vie, liberté, propriété** ; propriété par le **travail**.
- Contrat : société politique à la **majorité**, gouvernement **fiduciaire** ; **législatif suprême** mais limité (lois établies, **consentement à l'impôt**) ; exécutif séparé ; pouvoir **fédératif** ; prérogative ; **droit de résistance** ; tolérance.
- **Rousseau** (*Discours sur l'inégalité*, 1755 ; *Du contrat social*, 1762) : homme naturellement bon, corrompu par la société et la **propriété**.
- Pacte : **aliénation totale** à la communauté ; **volonté générale** ≠ volonté de tous ; loi générale ; obéir à la loi = liberté ; « forcé d'être libre ».
- Souveraineté du peuple **inaliénable et indivisible** ; rejet de la **représentation** (députés = commissaires) ; souverain ≠ gouvernement ; aristocratie élective ; religion civile.
- Postérité : Hobbes (État souverain), Locke (**libéralisme**, 1776, 1789), Rousseau (**souveraineté populaire**, article 6 de 1789 ; critique de Constant et Talmon).
`,
    exercices: md`
### Exercice 2 — Qui parle ?

1) Dans l'état de nature, la vie de l'homme est solitaire, misérable et brève. 2) Le pouvoir législatif ne peut lever d'impôt sans le consentement du peuple. 3) La volonté générale tend toujours à l'utilité publique. 4) Le souverain n'est pas partie au contrat. 5) Le peuple qui subit un gouvernement tyrannique peut résister et en établir un nouveau.

<details><summary>Voir le corrigé</summary>

1) Hobbes. 2) Locke. 3) Rousseau. 4) Hobbes. 5) Locke.

</details>

### Exercice 3 — Question de cours

Pourquoi Rousseau refuse-t-il la représentation de la souveraineté ?

<details><summary>Voir le corrigé</summary>

Pour Rousseau, la souveraineté est l'exercice de la volonté générale, et la volonté ne se représente pas : elle est la même ou elle est autre. Confier à des représentants le pouvoir de vouloir à la place du peuple, c'est aliéner la souveraineté, qui est inaliénable. Les députés ne peuvent être que des commissaires qui préparent les lois, que le peuple doit ratifier en personne. Rousseau ironise sur le peuple anglais, libre seulement pendant l'élection des membres du Parlement. Cette position inspire la démocratie directe et le référendum, mais s'oppose au régime représentatif adopté par les révolutionnaires de 1789 (Sieyès).

</details>
`,
    qcm: [
      { q: "Le Léviathan de Hobbes a été publié en :", choix: ["1513", "1576", "1651", "1690"], bonne: 2, explication: "Contexte de la guerre civile anglaise." },
      { q: "Pour Hobbes, l'état de nature est :", choix: ["Un état de paix", "Une guerre de chacun contre chacun", "Un paradis perdu", "Un état de propriété"], bonne: 1, explication: "Faute de pouvoir commun." },
      { q: "Chez Hobbes, la seule limite au pouvoir du souverain est :", choix: ["Le droit de propriété", "Le droit à la vie", "La liberté d'expression", "Le droit de vote"], bonne: 1, explication: "On contracte pour préserver sa vie." },
      { q: "Les Deux traités du gouvernement civil de Locke datent de :", choix: ["1651", "1689", "1690", "1762"], bonne: 2, explication: "Après la Glorieuse Révolution." },
      { q: "Pour Locke, la propriété naît :", choix: ["Du contrat social", "Du travail", "De la conquête", "De la loi du roi"], bonne: 1, explication: "L'homme mêle son travail à la chose." },
      { q: "Locke distingue les pouvoirs :", choix: ["Législatif, exécutif, judiciaire", "Législatif, exécutif, fédératif", "Spirituel et temporel", "Constituant et constitué"], bonne: 1, explication: "Le judiciaire est ajouté par Montesquieu." },
      { q: "Le droit de résistance au gouvernement tyrannique est défendu par :", choix: ["Hobbes", "Locke", "Bodin", "Bossuet"], bonne: 1, explication: "Le peuple juge en dernier ressort." },
      { q: "Du contrat social de Rousseau a été publié en :", choix: ["1748", "1755", "1762", "1789"], bonne: 2, explication: "Après le Discours sur l'inégalité (1755)." },
      { q: "Pour Rousseau, la volonté générale se distingue de :", choix: ["La loi", "La volonté de tous", "La souveraineté", "Le contrat"], bonne: 1, explication: "La volonté de tous est la somme des intérêts particuliers." },
      { q: "Pour Rousseau, la souveraineté est :", choix: ["Représentable", "Inaliénable et indivisible", "Divisible entre le roi et le peuple", "Héréditaire"], bonne: 1, explication: "Les députés ne sont que des commissaires." },
    ],
  },

  6: {
    titre: "Les Lumières, les révolutions et le libéralisme",
    description: "Lumières et libéralisme : Montesquieu et la séparation des pouvoirs, Sieyès et la souveraineté nationale, Burke, Constant, Tocqueville et Mill.",
    resume: md`
## L'essentiel — Lumières, révolutions, libéralisme

- **Lumières** : raison, tolérance, progrès, critique de l'absolutisme ; Voltaire, Encyclopédie, **Beccaria** (1764), Kant (« ose savoir »).
- **Montesquieu** (*De l'esprit des lois*, 1748) : lois = rapports nécessaires ; causes (climat, mœurs, commerce) ; république (**vertu**), monarchie (**honneur**, pouvoirs intermédiaires), despotisme (**crainte**).
- Liberté politique = sûreté ; tout pouvoir tend à l'abus ; « **le pouvoir arrête le pouvoir** » ; législatif, exécutif, judiciaire ; équilibre (bicamérisme, faculté d'empêcher), juge « bouche de la loi » ; article 16 de 1789 ; article 1er de la Constitution marocaine.
- **1776** (Jefferson) : droits inaliénables, consentement, droit de changer le gouvernement ; Constitution de 1787, *Le Fédéraliste*, freins et contrepoids.
- **Sieyès** (1789) : tiers état = nation ; **pouvoir constituant** / pouvoirs constitués ; gouvernement **représentatif** ; **souveraineté nationale** (article 3) ≠ souveraineté populaire, pas de mandat impératif.
- Critique conservatrice : **Burke** (1790, tradition contre abstraction) ; de Maistre, Bonald.
- **Constant** (1819) : liberté des **Anciens** (participation) / des **Modernes** (indépendance privée) ; limiter la souveraineté ; pouvoir neutre.
- **Tocqueville** (*De la démocratie en Amérique*) : **égalité des conditions** ; tyrannie de la majorité, individualisme, **despotisme doux** ; remèdes : associations, décentralisation, presse, juges.
- **Mill** (*De la liberté*, 1859) : **principe de non-nuisance**, liberté d'expression, gouvernement représentatif, égalité des femmes ; libéralisme politique ≠ économique (Adam Smith, 1776).
`,
    exercices: md`
### Exercice 2 — Associez

a) Le pouvoir arrête le pouvoir ; b) la liberté des Modernes est la jouissance paisible de l'indépendance privée ; c) la tyrannie de la majorité ; d) qu'est-ce que le tiers état ? tout ; e) la seule fin justifiant la contrainte est d'empêcher de nuire à autrui ; f) la critique des droits abstraits de la Révolution au nom de la tradition.

<details><summary>Voir le corrigé</summary>

a) Montesquieu. b) Benjamin Constant. c) Tocqueville. d) Sieyès. e) John Stuart Mill. f) Edmund Burke.

</details>

### Exercice 3 — Question de cours

Distinguez souveraineté nationale et souveraineté populaire et indiquez leurs conséquences institutionnelles.

<details><summary>Voir le corrigé</summary>

La souveraineté nationale (Sieyès, article 3 de 1789) appartient à la Nation, entité abstraite et indivisible distincte des individus qui la composent ; elle ne peut s'exprimer que par des représentants, libres de leur vote (interdiction du mandat impératif), et peut justifier un suffrage restreint. La souveraineté populaire (Rousseau) appartient au peuple, ensemble des citoyens dont chacun détient une parcelle ; elle implique le suffrage universel, la démocratie directe ou semi-directe (référendum) et le mandat impératif. Les constitutions modernes combinent souvent les deux : la Constitution marocaine dispose que la souveraineté appartient à la nation, qui l'exerce directement par voie de référendum et indirectement par l'intermédiaire de ses représentants (article 2).

</details>
`,
    qcm: [
      { q: "De l'esprit des lois a été publié en :", choix: ["1689", "1748", "1762", "1789"], bonne: 1, explication: "Par Montesquieu." },
      { q: "Selon Montesquieu, le principe de la monarchie est :", choix: ["La vertu", "L'honneur", "La crainte", "L'égalité"], bonne: 1, explication: "La vertu pour la république, la crainte pour le despotisme." },
      { q: "La formule « le pouvoir arrête le pouvoir » est de :", choix: ["Locke", "Montesquieu", "Rousseau", "Tocqueville"], bonne: 1, explication: "Livre XI de De l'esprit des lois." },
      { q: "Pour Montesquieu, le juge est :", choix: ["Le créateur du droit", "La bouche qui prononce les paroles de la loi", "Le chef de l'exécutif", "Le représentant du roi"], bonne: 1, explication: "La puissance de juger est en quelque façon nulle." },
      { q: "La distinction entre pouvoir constituant et pouvoirs constitués est due à :", choix: ["Sieyès", "Burke", "Constant", "Mill"], bonne: 0, explication: "Qu'est-ce que le tiers état ? (1789)." },
      { q: "L'article 3 de la Déclaration de 1789 consacre :", choix: ["La souveraineté populaire", "La souveraineté nationale", "Le droit divin", "La séparation des pouvoirs"], bonne: 1, explication: "Le principe de toute souveraineté réside dans la Nation." },
      { q: "Les Réflexions sur la Révolution de France (1790) sont l'œuvre de :", choix: ["Edmund Burke", "Thomas Paine", "Joseph de Maistre", "Benjamin Constant"], bonne: 0, explication: "Défense de la tradition." },
      { q: "Benjamin Constant oppose la liberté des Anciens à celle :", choix: ["Des Barbares", "Des Modernes", "Des Chrétiens", "Des Orientaux"], bonne: 1, explication: "Discours de 1819." },
      { q: "Le danger du « despotisme doux » est analysé par :", choix: ["Machiavel", "Tocqueville", "Hobbes", "Bodin"], bonne: 1, explication: "De la démocratie en Amérique." },
      { q: "Le principe de non-nuisance a été formulé par :", choix: ["John Stuart Mill", "Adam Smith", "Montesquieu", "Rousseau"], bonne: 0, explication: "De la liberté, 1859." },
    ],
  },

  7: {
    titre: "Les idées politiques des XIXᵉ et XXᵉ siècles : socialisme, nationalisme, réformisme et démocratie",
    description: "Idées politiques contemporaines : Marx et les socialismes, idée nationale, Nahda et mouvement national marocain, Arendt, Rawls et Habermas.",
    resume: md`
## L'essentiel — XIXᵉ et XXᵉ siècles

- **Socialismes utopiques** : Saint-Simon, Fourier, Owen, **Proudhon** (« la propriété, c'est le vol »).
- **Marx** (*Manifeste*, 1848 ; *Le Capital*, 1867) : **matérialisme historique** (infrastructure/superstructure), **lutte des classes**, **plus-value** et exploitation ; État instrument de la classe dominante ; droits « formels » ; dictature du prolétariat, **dépérissement de l'État** ; héritages (léninisme, social-démocratie).
- **Nation** : élective (**Renan**, 1882, « plébiscite de tous les jours ») / organique (**Fichte**, Herder : langue, culture) ; principe des nationalités, droit des peuples, décolonisation, nationalismes agressifs.
- **Nahda** : Tahtawi, Khayr al-Din, **al-Afghani** (unité, anti-despotisme), **Abduh** (ijtihad, raison et révélation), **Rida** (califat après **1924**), **Abderraziq** (1925 : le califat n'est pas prescrit).
- **Maroc** : projet de constitution de **1908**, salafisme réformiste (Doukkali, Belarbi Alaoui), Dahir berbère (1930), Plan de réformes (1934), **Manifeste du 11 janvier 1944** ; **Allal El Fassi** (*L'autocritique*, *Maqasid al-charia*) ; Ouazzani.
- **Totalitarisme** : fascisme, nazisme, stalinisme ; **Arendt** (1951 : idéologie, terreur, masses, parti unique ; **banalité du mal**, 1963) ; **Popper** (société ouverte).
- **Rawls** (1971) : position originelle, **voile d'ignorance**, principe d'**égale liberté** (prioritaire) et **principe de différence** ; critiques de **Nozick** (État minimal) et des **communautariens**.
- **Habermas** : démocratie **délibérative**, espace public, patriotisme constitutionnel ; débats actuels : représentation, populisme, participation (articles 13 à 15), mondialisation, écologie (Jonas), numérique.
`,
    exercices: md`
### Exercice 2 — Associez

a) La nation est un plébiscite de tous les jours ; b) l'histoire de toute société est l'histoire de la lutte des classes ; c) le califat n'est pas une institution prescrite par la religion ; d) la banalité du mal ; e) le voile d'ignorance ; f) l'autocritique et les finalités de la charia.

<details><summary>Voir le corrigé</summary>

a) Ernest Renan. b) Karl Marx (et Engels), Manifeste du parti communiste. c) Ali Abderraziq. d) Hannah Arendt. e) John Rawls. f) Allal El Fassi.

</details>

### Exercice 3 — Question de cours

Présentez en une dizaine de lignes les deux principes de justice de Rawls.

<details><summary>Voir le corrigé</summary>

Placés dans une position originelle, sous un voile d'ignorance qui les empêche de connaître leur situation future, des individus rationnels choisiraient deux principes. Le premier, d'égale liberté, garantit à chacun le système le plus étendu de libertés de base égales pour tous (liberté de conscience, d'expression, droits politiques, sûreté). Le second admet des inégalités sociales et économiques à deux conditions : qu'elles soient attachées à des positions ouvertes à tous dans des conditions d'égalité équitable des chances, et qu'elles profitent aux plus défavorisés (principe de différence). Le premier principe a priorité : on ne peut sacrifier les libertés de base à des avantages économiques. Rawls fonde ainsi un libéralisme égalitaire.

</details>
`,
    qcm: [
      { q: "La formule « la propriété, c'est le vol » est de :", choix: ["Marx", "Proudhon", "Saint-Simon", "Owen"], bonne: 1, explication: "Socialisme libertaire." },
      { q: "Le Manifeste du parti communiste date de :", choix: ["1789", "1848", "1867", "1917"], bonne: 1, explication: "Marx et Engels." },
      { q: "Pour Marx, le profit capitaliste provient de :", choix: ["La rente foncière", "La plus-value tirée du travail ouvrier", "L'impôt", "Le commerce extérieur"], bonne: 1, explication: "Exploitation de la force de travail." },
      { q: "Pour Marx, après la révolution et la disparition des classes, l'État :", choix: ["Se renforce", "Dépérit", "Devient religieux", "Devient fédéral"], bonne: 1, explication: "Société communiste." },
      { q: "La conception élective de la nation est défendue par :", choix: ["Fichte", "Herder", "Renan", "Hitler"], bonne: 2, explication: "Qu'est-ce qu'une nation ? (1882)." },
      { q: "Le califat a été aboli par la Turquie en :", choix: ["1908", "1918", "1924", "1956"], bonne: 2, explication: "Débats de Rida et d'Abderraziq." },
      { q: "Le Manifeste de l'indépendance du Maroc date du :", choix: ["16 mai 1930", "11 janvier 1944", "20 août 1953", "2 mars 1956"], bonne: 1, explication: "Présenté par le mouvement national." },
      { q: "L'auteur de L'autocritique (al-Naqd al-dhati) est :", choix: ["Allal El Fassi", "Mohamed Hassan Ouazzani", "Muhammad Abduh", "Ibn Khaldoun"], bonne: 0, explication: "Leader de l'Istiqlal." },
      { q: "Les Origines du totalitarisme (1951) sont l'œuvre de :", choix: ["Karl Popper", "Hannah Arendt", "John Rawls", "Jürgen Habermas"], bonne: 1, explication: "Idéologie et terreur." },
      { q: "Dans la Théorie de la justice de Rawls, le principe prioritaire est :", choix: ["Le principe de différence", "Le principe d'égale liberté", "Le principe d'utilité", "Le principe de propriété de soi"], bonne: 1, explication: "Les libertés de base ne peuvent être sacrifiées." },
    ],
  },
};

export default chapitres;
