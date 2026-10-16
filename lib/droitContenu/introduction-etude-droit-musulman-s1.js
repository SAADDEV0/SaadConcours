// Introduction à l'étude du droit musulman (Droit S1, tronc commun) — compléments par chapitre : description SEO, résumé, exercices 2 et 3, QCM.
const md = String.raw;

const chapitres = {
  1: {
    titre: "Charia, fiqh et droit musulman : notions fondamentales",
    description: "Charia et fiqh, usûl et furû', 'ibâdât et mu'âmalât, les cinq statuts des actes, règles déclaratoires et place du droit musulman.",
    resume: md`
## L'essentiel — Notions fondamentales

- **Charia** : normes rattachées à la volonté divine (Coran et Sunna) ; **fiqh** : compréhension humaine de ces normes par les juristes, diverse et évolutive.
- **Usûl al-fiqh** : théorie des sources et des méthodes (al-Shâfi'î, *Risâla*) ; **furû'** : solutions concrètes.
- **'Ibâdât** (culte) : adhésion aux textes ; **mu'âmalât** (rapports sociaux) : principe de licéité.
- Cinq statuts : obligatoire (wâjib, fard), recommandé (mandûb), permis (mubâh), blâmable (makrûh), interdit (harâm).
- Fard 'ayn (individuel) et fard kifâya (collectif).
- Règles déclaratoires : cause (sabab), condition (shart), empêchement (mâni'), valide / vicié / nul.
- René David (1964) : droit religieux et traditionnel ; rôle central des juristes ; pluralité d'écoles.
- Aujourd'hui : droit étatique inspiré du fiqh, qui reste source formelle ou supplétive dans certaines matières.
`,
    exercices: md`
### Exercice 2 — Charia ou fiqh ?

Pour chaque proposition, dites si elle relève plutôt de la charia (texte) ou du fiqh (interprétation) : 1) l'interdiction du ribâ affirmée par le Coran ; 2) la liste précise des marchandises auxquelles s'applique l'interdiction du ribâ dans les échanges, qui varie selon les écoles ; 3) l'obligation de respecter ses engagements ; 4) l'âge précis à partir duquel un enfant peut choisir le parent gardien, selon un auteur malékite.

<details><summary>Voir le corrigé</summary>

1) Charia : la règle figure dans le Coran (sourate 2, verset 275). 2) Fiqh : les écoles ont raisonné différemment pour étendre la règle (par analogie), d'où des solutions divergentes. 3) Charia : verset 5, 1. 4) Fiqh : solution doctrinale, susceptible de varier et d'être modifiée par le législateur.

</details>

### Exercice 3 — Question de cours

Expliquez en dix lignes pourquoi le principe de licéité en matière de mu'âmalât donne une grande souplesse au droit des contrats.

<details><summary>Voir le corrigé</summary>

En matière de rapports sociaux, la règle de base est que tout ce qui n'est pas interdit est permis. Les juristes n'ont donc pas à trouver un texte autorisant chaque nouveau contrat : il suffit qu'il ne contienne pas d'élément prohibé (ribâ, aléa excessif ou gharar, objet illicite). Les parties peuvent ainsi créer des contrats adaptés aux besoins économiques, et la coutume ('urf) et l'intérêt général (maslaha) peuvent compléter les règles. C'est ce raisonnement qui permet, aujourd'hui, de construire des produits de finance participative (mourabaha, ijara) à partir de contrats classiques. À l'inverse, en matière de culte, on ne crée pas de rite nouveau.

</details>
`,
    qcm: [
      { q: "Le fiqh désigne :", choix: ["La révélation elle-même", "La compréhension humaine des normes par les juristes", "Un code adopté par le Parlement", "Une école chiite"], bonne: 1, explication: "Œuvre humaine, diverse et évolutive." },
      { q: "La science des fondements du droit s'appelle :", choix: ["Furû' al-fiqh", "Usûl al-fiqh", "Tafsîr", "Sîra"], bonne: 1, explication: "Elle étudie les sources et les méthodes." },
      { q: "La Risâla, premier exposé systématique des usûl, est due à :", choix: ["Mâlik", "Al-Shâfi'î", "Abû Hanîfa", "Ibn Hanbal"], bonne: 1, explication: "Al-Shâfi'î, mort en 820." },
      { q: "Le contrat de vente relève :", choix: ["Des 'ibâdât", "Des mu'âmalât", "Du tafsîr", "Des hadiths"], bonne: 1, explication: "Rapports entre les personnes." },
      { q: "En matière de mu'âmalât, le principe de base est :", choix: ["L'interdiction", "La licéité", "L'obligation", "Le blâme"], bonne: 1, explication: "Tout ce qui n'est pas interdit est permis." },
      { q: "Un acte dont l'accomplissement est récompensé et l'omission non sanctionnée est :", choix: ["Wâjib", "Mandûb", "Harâm", "Makrûh"], bonne: 1, explication: "Acte recommandé." },
      { q: "L'exercice de la fonction de juge est classiquement un :", choix: ["Fard 'ayn", "Fard kifâya", "Makrûh", "Mubâh"], bonne: 1, explication: "Obligation collective." },
      { q: "Dans la règle des successions, le décès est :", choix: ["Un empêchement", "Une cause (sabab)", "Une condition de validité du mariage", "Un acte blâmable"], bonne: 1, explication: "Il ouvre la succession." },
      { q: "René David range le droit musulman parmi :", choix: ["Les droits de common law", "Les droits religieux et traditionnels", "Les droits socialistes", "Les droits romano-germaniques"], bonne: 1, explication: "Les Grands Systèmes de droit contemporains, 1964." },
      { q: "Le verset « Ô vous qui croyez, remplissez vos engagements » fonde :", choix: ["L'interdiction de la vente", "La force obligatoire des contrats", "La prière du vendredi", "Le partage successoral"], bonne: 1, explication: "Sourate 5, verset 1." },
    ],
  },

  2: {
    titre: "Le Coran, première source du droit musulman",
    description: "Le Coran comme source du droit : révélation et compilation, versets juridiques, textes certains et probables, règles d'interprétation des juristes.",
    resume: md`
## L'essentiel — Le Coran

- Première source, à laquelle toutes les autres sont subordonnées ; révélation sur environ 23 ans (610-632), périodes mecquoise et médinoise.
- 114 sourates, environ 6 200 versets ; ordre non chronologique.
- Compilation : Abû Bakr (Zayd ibn Thâbit), recension de 'Uthmân vers 650 ; lectures (qirâ'ât) : Warsh au Maroc.
- **Âyât al-ahkâm** : environ 500 versets juridiques selon la doctrine classique ; famille, successions (4, 11-12 et 176), contrats (2, 275 ; 5, 1 ; 4, 29), preuve (2, 282), shûrâ (42, 38).
- **Qat'î / zannî** : authenticité du Coran certaine ; signification certaine ou probable selon les versets.
- Règles d'interprétation : général et particulier, absolu et restreint, sens implicite (a fortiori), clair et ambigu, abrogation (naskh).
- Circonstances de la révélation (asbâb al-nuzûl) : la généralité des termes l'emporte sur la particularité de la cause.
`,
    exercices: md`
### Exercice 2 — Mecquois ou médinois ?

Indiquez la période la plus probable de révélation : 1) des versets sur l'unicité de Dieu et le récit des prophètes ; 2) des versets fixant les parts successorales ; 3) des versets réglementant le délai de viduité après la répudiation ; 4) des versets sur la résurrection et le jugement dernier.

<details><summary>Voir le corrigé</summary>

1) Mecquois. 2) Médinois. 3) Médinois. 4) Mecquois. Les règles juridiques détaillées apparaissent surtout à Médine, où la communauté s'organise politiquement.

</details>

### Exercice 3 — Raisonnement a fortiori

Le verset 23 de la sourate 17 interdit de dire « fi ! » à ses parents. Expliquez quelle autre règle les juristes en déduisent et nommez le procédé.

<details><summary>Voir le corrigé</summary>

Si une simple parole d'agacement est interdite, un comportement plus grave l'est à plus forte raison : frapper ses parents, les insulter, les abandonner. C'est le raisonnement **a fortiori** (sens implicite, mafhûm al-muwâfaqa) : la règle s'étend aux cas où la raison de l'interdiction (le respect dû aux parents) est encore plus présente. Ce procédé, interne au texte, se distingue du qiyâs (chapitre 4), qui étend une règle à un cas différent par une cause commune.

</details>
`,
    qcm: [
      { q: "Le Coran compte :", choix: ["99 sourates", "114 sourates", "140 sourates", "40 sourates"], bonne: 1, explication: "De longueur très inégale." },
      { q: "La recension officielle du Coran est attribuée au calife :", choix: ["Abû Bakr", "'Umar", "'Uthmân", "'Alî"], bonne: 2, explication: "Vers 650 ; c'est le mushaf 'uthmânien." },
      { q: "Les versets à contenu juridique sont appelés :", choix: ["Âyât al-ahkâm", "Asbâb al-nuzûl", "Qirâ'ât", "Hudûd"], bonne: 0, explication: "Environ cinq cents selon la doctrine classique." },
      { q: "La lecture du Coran la plus répandue au Maroc est celle de :", choix: ["Hafs", "Warsh", "Qâlûn", "Al-Dûrî"], bonne: 1, explication: "Lecture de Warsh d'après Nâfi'." },
      { q: "Le verset sur la rédaction par écrit des dettes est le verset 282 de la sourate :", choix: ["4", "2", "5", "65"], bonne: 1, explication: "Le plus long verset du Coran." },
      { q: "Un texte dont la signification n'admet qu'un sens est dit :", choix: ["Zannî", "Qat'î", "Mutashâbih", "Mansûkh"], bonne: 1, explication: "Il échappe à la divergence." },
      { q: "Les règles détaillées sur la famille et les successions apparaissent surtout dans la période :", choix: ["Mecquoise", "Médinoise", "Omeyyade", "Abbasside"], bonne: 1, explication: "Organisation de la communauté à Médine." },
      { q: "L'abrogation d'une règle par une règle postérieure s'appelle :", choix: ["Naskh", "Qiyâs", "Ijmâ'", "Taqlîd"], bonne: 0, explication: "La doctrine classique en débat l'étendue." },
      { q: "La consultation (shûrâ) est évoquée dans la sourate :", choix: ["42", "2", "114", "1"], bonne: 0, explication: "Verset 38." },
      { q: "Selon la règle dominante, la portée d'un verset dépend :", choix: ["De la particularité de sa cause", "De la généralité de ses termes", "De sa longueur", "De sa place dans le mushaf"], bonne: 1, explication: "Et non seulement de la circonstance de la révélation." },
    ],
  },

  3: {
    titre: "La Sunna, deuxième source",
    description: "La Sunna en droit musulman : formes verbale, pratique et approbative, rapports avec le Coran, isnâd et matn, classification et grands recueils.",
    resume: md`
## L'essentiel — La Sunna

- **Sunna** : ce que le Prophète a dit, fait ou approuvé ; **hadith** : le récit qui la transmet.
- Deuxième source, fondée sur le Coran (sourate 4, verset 59 ; sourate 33, verset 21).
- Trois formes : verbale (qawliyya), pratique (fi'liyya), approbative (taqrîriyya) ; actes du Prophète comme guide ou comme homme (al-Qarâfî).
- Rôles : confirmer, expliquer et préciser (modalités de la prière, zakât, restriction d'un texte général), établir une règle nouvelle.
- Maxime « ni préjudice ni préjudice réciproque » : fondement de l'abus de droit et des troubles de voisinage.
- Hadith = **isnâd** (chaîne) + **matn** (contenu) ; contrôle de la continuité, de la fiabilité et de la précision des transmetteurs.
- Mutawâtir (certain) / âhâd (probable) ; mashhûr chez les hanafites.
- Sahîh, hasan, da'îf, mawdû'.
- Recueils : *Muwatta'* de Mâlik (m. 795), Bukhârî (m. 870), Muslim (m. 875), Sunan (« six livres »).
`,
    exercices: md`
### Exercice 2 — Quel rôle de la Sunna ?

Indiquez si la Sunna confirme, explique ou établit une règle : 1) le Coran ordonne la prière, la Sunna en fixe les horaires et le nombre de cycles ; 2) le Coran interdit de s'approprier injustement les biens d'autrui, la Sunna le répète ; 3) l'interdiction d'épouser simultanément une femme et sa tante ; 4) l'exclusion du meurtrier volontaire de la succession de sa victime.

<details><summary>Voir le corrigé</summary>

1) Explique (précise les modalités). 2) Confirme. 3) Établit une règle nouvelle, sur un point que le Coran n'aborde pas expressément. 4) Explique en **restreignant** un texte coranique général sur la vocation successorale.

</details>

### Exercice 3 — Classer un hadith

Un récit est transmis par une chaîne continue de transmetteurs réputés honnêtes, mais l'un d'eux est connu pour commettre parfois des erreurs de mémoire. Un autre récit présente une chaîne où manque un transmetteur entre deux générations. Classez-les et indiquez leur valeur.

<details><summary>Voir le corrigé</summary>

Le premier est **hasan** : chaîne continue et transmetteurs fiables, mais précision un peu moindre ; il est admis comme source de règles pratiques par la majorité des juristes. Le second est **da'îf** en raison de l'interruption de la chaîne ; il ne fonde pas, en principe, une règle obligatoire, même si certains juristes l'acceptent pour des actes simplement recommandés.

</details>
`,
    qcm: [
      { q: "Le hadith est :", choix: ["Une source distincte de la Sunna", "Le récit qui transmet la Sunna", "Un verset coranique", "Un avis d'un juriste moderne"], bonne: 1, explication: "La Sunna est connue par les hadiths." },
      { q: "La Sunna approbative (taqrîriyya) correspond :", choix: ["Aux paroles du Prophète", "Aux actes du Prophète", "À ce qu'il a vu sans le désapprouver", "Aux avis des compagnons"], bonne: 2, explication: "Approbation tacite." },
      { q: "La chaîne de transmission d'un hadith s'appelle :", choix: ["Matn", "Isnâd", "Tafsîr", "Fatwâ"], bonne: 1, explication: "Le matn est le contenu." },
      { q: "Un hadith rapporté par une multitude à chaque génération est :", choix: ["Âhâd", "Mutawâtir", "Da'îf", "Mawdû'"], bonne: 1, explication: "Il est certain quant à son authenticité." },
      { q: "Le Muwatta' est l'œuvre de :", choix: ["Al-Bukhârî", "L'imam Mâlik", "Muslim", "Al-Shâfi'î"], bonne: 1, explication: "Mâlik ibn Anas, mort en 795." },
      { q: "Un hadith dont la chaîne est interrompue est généralement classé :", choix: ["Sahîh", "Hasan", "Da'îf", "Mutawâtir"], bonne: 2, explication: "Une condition de l'authenticité manque." },
      { q: "La maxime « ni préjudice ni préjudice réciproque » a inspiré :", choix: ["Le droit de la nationalité", "La théorie de l'abus de droit et des troubles de voisinage", "Le droit électoral", "Le droit fiscal"], bonne: 1, explication: "Celui qui nuit en exerçant son droit doit réparer." },
      { q: "Le recueil réputé le plus sûr chez les sunnites est :", choix: ["Le Sahîh d'al-Bukhârî", "La Risâla", "Le Mukhtasar de Khalîl", "La Mudawwana"], bonne: 0, explication: "Al-Bukhârî, mort en 870." },
      { q: "La catégorie intermédiaire mashhûr est surtout utilisée par les :", choix: ["Malékites", "Hanafites", "Hanbalites", "Zâhirites"], bonne: 1, explication: "Entre mutawâtir et âhâd." },
      { q: "La règle « la preuve incombe à celui qui allègue » se retrouve à l'article 399 :", choix: ["Du Code pénal", "Du DOC", "Du Code de commerce", "De la Constitution"], bonne: 1, explication: "La preuve de l'obligation incombe à celui qui s'en prévaut." },
    ],
  },

  4: {
    titre: "L'ijmâ' et le qiyâs",
    description: "Ijmâ' et qiyâs : définition, fondement et conditions du consensus, ses débats, quatre piliers de l'analogie, cause et sagesse de la règle.",
    resume: md`
## L'essentiel — Ijmâ' et qiyâs

- Ordre classique (al-Shâfi'î) : Coran, Sunna, ijmâ', qiyâs ; récit de Mu'âdh ibn Jabal.
- **Ijmâ'** : accord unanime des mujtahids d'une époque, après la mort du Prophète, sur une règle ; il produit une règle certaine.
- Conditions : juristes qualifiés, unanimité, époque post-prophétique, question juridique, fondement (mustanad).
- Explicite (sarîh) / tacite (sukûtî, valeur discutée) ; difficulté de constatation ; pratique de Médine chez Mâlik.
- Aujourd'hui : interprétation collective ; Conseil supérieur des Oulémas, seule instance des fatwas officielles (article 41).
- **Qiyâs** : extension d'une règle à un cas nouveau par une cause commune.
- Quatre piliers : asl, far', hukm, 'illa ; exemple : vin → toute substance enivrante (cause : ivresse).
- 'Illa : apparente, précise, pertinente, transmissible ; à distinguer de la sagesse (hikma).
- Zâhirites (Ibn Hazm) : rejet du qiyâs ; en droit pénal moderne, principe de légalité (article 3 du Code pénal).
`,
    exercices: md`
### Exercice 2 — Cause ou sagesse ?

Pour chaque règle, distinguez la cause ('illa) et la sagesse (hikma) : 1) le voyageur peut raccourcir la prière ; 2) le vin est interdit ; 3) le meurtrier volontaire n'hérite pas de sa victime.

<details><summary>Voir le corrigé</summary>

1) Cause : le voyage ; sagesse : alléger la fatigue. 2) Cause : le caractère enivrant ; sagesse : protéger la raison et prévenir les désordres. 3) Cause : l'homicide volontaire de la personne dont on hérite ; sagesse : empêcher celui qui veut hâter la succession par un crime d'en profiter (on est puni par le contraire de ce que l'on a voulu obtenir).

</details>

### Exercice 3 — Ijmâ' ou pas ?

Dites s'il y a ijmâ' : 1) tous les juristes des quatre écoles s'accordent sur l'interdiction d'un contrat, sauf un juriste hanbalite reconnu ; 2) une opinion d'un grand juriste se diffuse sans qu'aucun autre ne la conteste ; 3) une majorité de députés vote une loi ; 4) les compagnons s'accordent sur la compilation du Coran en un seul volume.

<details><summary>Voir le corrigé</summary>

1) Non, selon la majorité des juristes : un seul mujtahid opposé empêche l'unanimité. 2) Ijmâ' tacite (sukûtî), dont la valeur est discutée : argument fort pour certains, simple présomption pour d'autres. 3) Non : un vote majoritaire n'est pas l'accord unanime des juristes qualifiés ; c'est une loi étatique. 4) Oui : exemple classique d'ijmâ' des compagnons.

</details>
`,
    qcm: [
      { q: "L'ijmâ' est l'accord :", choix: ["De la majorité des croyants", "Unanime des juristes qualifiés d'une époque", "Du calife seul", "Des juges d'une ville"], bonne: 1, explication: "Après la mort du Prophète, sur une question juridique." },
      { q: "Un ijmâ' tacite (sukûtî) suppose :", choix: ["Un vote formel", "Une opinion diffusée sans contestation", "Un texte coranique explicite", "Un décret royal"], bonne: 1, explication: "Sa valeur est discutée." },
      { q: "L'école qui accorde une valeur particulière à la pratique des gens de Médine est :", choix: ["Hanafite", "Malékite", "Chaféite", "Zâhirite"], bonne: 1, explication: "'Amal ahl al-Madîna." },
      { q: "Le cas nouveau, non prévu par les textes, s'appelle dans le qiyâs :", choix: ["Asl", "Far'", "Hukm", "'Illa"], bonne: 1, explication: "L'asl est le cas originel." },
      { q: "La cause de l'interdiction du vin retenue par les juristes est :", choix: ["La couleur", "L'ivresse", "Le prix", "L'origine du raisin"], bonne: 1, explication: "Elle justifie l'extension aux autres substances enivrantes." },
      { q: "L'école qui rejette le qiyâs est l'école :", choix: ["Hanafite", "Malékite", "Zâhirite", "Chaféite"], bonne: 2, explication: "Ibn Hazm s'en tient au sens apparent des textes." },
      { q: "La cause ('illa) d'une règle doit notamment être :", choix: ["Secrète", "Apparente et précise", "Variable selon les personnes", "Indépendante de la règle"], bonne: 1, explication: "Elle doit aussi être pertinente et transmissible." },
      { q: "La seule instance habilitée à émettre des fatwas officielles au Maroc est :", choix: ["La Cour de cassation", "Le Conseil supérieur des Oulémas", "Le ministère de la Justice", "Le Parlement"], bonne: 1, explication: "Article 41 de la Constitution." },
      { q: "L'interdiction de commercer lors de l'appel à la prière du vendredi figure dans la sourate :", choix: ["62", "2", "4", "114"], bonne: 0, explication: "Verset 9 ; les juristes l'étendent par qiyâs à d'autres contrats." },
      { q: "En droit pénal marocain, l'extension d'une incrimination par analogie est écartée par :", choix: ["Le principe de légalité", "L'ijmâ'", "La coutume", "Le Code de commerce"], bonne: 0, explication: "Article 3 du Code pénal." },
    ],
  },

  5: {
    titre: "Les sources complémentaires et les finalités de la charia",
    description: "Sources complémentaires du droit musulman : istihsân, maslaha, 'urf, istishâb, sadd al-dharâ'i', 'amal fâsî et théorie des maqâsid d'al-Shâtibî.",
    resume: md`
## L'essentiel — Sources complémentaires et maqâsid

- Sources « discutées », admises inégalement par les écoles ; le malékisme en admet beaucoup.
- **Istihsân** : écarter la solution stricte pour une solution plus juste ou nécessaire (hanafites, malékites ; critiqué par al-Shâfi'î) ; ex. contrat d'istisnâ'.
- **Maslaha mursala** : intérêt général non visé par les textes, réel et conforme aux finalités (malékites) ; ex. dîwân, état civil, acte de mariage.
- **'Urf** : coutume admise si elle ne contredit pas un texte ; « la coutume fait autorité » ; kadd wa si'âya du Souss.
- **Istishâb** : présomption de continuité (absence de dette, disparu présumé vivant).
- **Sadd al-dharâ'i'** : interdire un acte licite qui conduit à l'interdit (vente 'îna, ribâ déguisé) ; malékites.
- **'Amal fâsî** : pratique judiciaire de Fès (XVIe siècle et suivants), 'Abd al-Rahmân al-Fâsî (m. 1685).
- **Maqâsid** (al-Shâtibî, *Al-Muwâfaqât*) : religion, vie, raison, descendance, biens ; nécessaire, besoin, amélioration.
- Renouveau : Ibn 'Âshûr, 'Allâl al-Fâsî (1963).
`,
    exercices: md`
### Exercice 2 — Associer chaque maxime à sa source

1) « La coutume fait autorité » ; 2) « Le principe est l'absence d'obligation » ; 3) « Ce qui conduit à l'interdit est interdit » ; 4) « La nécessité rend licite ce qui est interdit ».

<details><summary>Voir le corrigé</summary>

1) 'Urf. 2) Istishâb (présomption de libération : la personne est présumée ne rien devoir). 3) Sadd al-dharâ'i'. 4) Elle relève de la nécessité (darûra), souvent invoquée à l'appui de l'istihsân et de la théorie des maqâsid (protection de la vie).

</details>

### Exercice 3 — Rattacher aux maqâsid

Rattachez chaque règle du droit marocain à l'une des cinq finalités : 1) le Code de la route et ses sanctions ; 2) l'obligation de prouver le mariage par un acte ; 3) la répression de la vente de stupéfiants ; 4) la protection pénale de la propriété.

<details><summary>Voir le corrigé</summary>

1) La vie (nafs). 2) La descendance (nasl) : sécurité de la filiation et des droits des enfants. 3) La raison ('aql), et aussi la vie. 4) Les biens (mâl). La théorie des maqâsid permet ainsi de justifier des règles modernes que les textes anciens ne prévoyaient pas.

</details>
`,
    qcm: [
      { q: "L'istihsân est surtout pratiqué par les :", choix: ["Zâhirites", "Hanafites", "Chiites ja'farites", "Ibadites"], bonne: 1, explication: "Les malékites l'admettent aussi ; al-Shâfi'î le critiquait." },
      { q: "La maslaha mursala est un intérêt :", choix: ["Expressément consacré par un texte", "Ni consacré ni écarté par les textes", "Interdit par le Coran", "Purement individuel"], bonne: 1, explication: "Source caractéristique du malékisme." },
      { q: "La maxime « la coutume fait autorité » se rapporte :", choix: ["Au 'urf", "À l'istishâb", "Au qiyâs", "À l'ijmâ'"], bonne: 0, explication: "Al-'âda muhakkama." },
      { q: "Le disparu est présumé vivant tant que son décès n'est pas établi en vertu de :", choix: ["L'istihsân", "L'istishâb", "Le sadd al-dharâ'i'", "La maslaha"], bonne: 1, explication: "Présomption de continuité." },
      { q: "L'interdiction de la vente 'îna (vente à terme puis rachat au comptant) repose sur :", choix: ["Le 'urf", "Le sadd al-dharâ'i'", "L'istishâb", "Le qiyâs"], bonne: 1, explication: "Fermer la voie au ribâ déguisé." },
      { q: "Al-Muwâfaqât, ouvrage de référence sur les maqâsid, est dû à :", choix: ["Al-Shâtibî", "Al-Bukhârî", "Ibn Khaldoun", "Abû Hanîfa"], bonne: 0, explication: "Malékite andalou, mort en 1388." },
      { q: "Parmi les cinq finalités essentielles figure la protection :", choix: ["De la raison", "Du commerce extérieur", "Des partis politiques", "De la monnaie électronique"], bonne: 0, explication: "Avec la religion, la vie, la descendance et les biens." },
      { q: "Le 'amal fâsî désigne :", choix: ["Un recueil de hadiths", "La pratique judiciaire de Fès", "Une école chiite", "Une loi organique"], bonne: 1, explication: "Elle retient parfois une opinion minoritaire du rite malékite." },
      { q: "Le juriste marocain auteur d'un ouvrage sur les maqâsid publié en 1963 est :", choix: ["'Allâl al-Fâsî", "Ibn Battouta", "Al-Idrîsî", "Ibn Rochd"], bonne: 0, explication: "Maqâsid al-sharî'a al-islâmiyya wa makârimuhâ." },
      { q: "Le contrat d'istisnâ' porte sur :", choix: ["Un objet à fabriquer sur commande", "Un prêt à intérêt", "Un mariage", "Une donation"], bonne: 0, explication: "Admis par istihsân malgré l'inexistence de la chose." },
    ],
  },

  6: {
    titre: "L'ijtihâd et les écoles juridiques : le rite malékite",
    description: "Ijtihâd et taqlîd, débat sur la fermeture de la porte, fatwâ et qadâ', quatre écoles sunnites, histoire et ouvrages du rite malékite au Maroc.",
    resume: md`
## L'essentiel — Ijtihâd et écoles

- **Ijtihâd** : effort du juriste qualifié là où le texte n'est pas certain ; pas d'ijtihâd contre un texte explicite.
- Conditions du mujtahid : arabe, Coran et Sunna, questions d'ijmâ', usûl, finalités ; degrés : absolu, d'école, choix entre opinions.
- **Taqlîd** : suivre un juriste sans examiner ses preuves ; « fermeture de la porte » discutée (Hallaq, 1984).
- Article 400 du Code de la famille : rite malékite et ijtihâd (justice, égalité, coexistence harmonieuse).
- **Fatwâ** (avis du muftî, non obligatoire) / **qadâ'** (jugement du cadi, obligatoire) ; *Al-Mi'yâr* d'al-Wansharîsî (m. 1508).
- Écoles sunnites : hanafite (Abû Hanîfa, m. 767), malékite (Mâlik, m. 795), chaféite (al-Shâfi'î, m. 820), hanbalite (Ibn Hanbal, m. 855) ; autres : ja'farite, ibadite, zâhirite.
- Malékisme au Maroc : arrivée par Kairouan, consolidation sous les Almoravides, Qarawiyyîne (859).
- Sources malékites : Coran, Sunna, pratique de Médine, ijmâ', qiyâs, maslaha, sadd al-dharâ'i', istihsân, 'urf.
- Ouvrages : *Muwatta'*, *Mudawwana* (Sahnûn), *Risâla* (Ibn Abî Zayd), *Mukhtasar* (Khalîl), *Tuhfa* (Ibn 'Âsim).
`,
    exercices: md`
### Exercice 2 — Associer l'école à son trait

1) Large place au raisonnement personnel et à l'istihsân ; 2) importance de la pratique de Médine ; 3) première systématisation des usûl ; 4) attachement étroit aux hadiths ; 5) rejet du qiyâs.

<details><summary>Voir le corrigé</summary>

1) Hanafite. 2) Malékite. 3) Chaféite (*Risâla*). 4) Hanbalite. 5) Zâhirite (Ibn Hazm).

</details>

### Exercice 3 — Le talfîq au service du législateur

Expliquez comment la pluralité des écoles peut aider un législateur moderne et donnez la limite de ce procédé.

<details><summary>Voir le corrigé</summary>

Le législateur peut retenir, sur un point précis, la solution d'une autre école que l'école dominante du pays lorsqu'elle répond mieux aux besoins sociaux (procédé du choix, takhayyur, ou de la combinaison, talfîq). Plusieurs codes de la famille du monde arabe y ont eu recours pour réformer, par exemple, le divorce judiciaire ou la capacité matrimoniale. La limite est le risque d'incohérence : combiner des solutions issues de méthodes différentes peut aboutir à un résultat qu'aucune école n'admettrait dans son ensemble ; les juristes exigent donc que le choix soit justifié par un intérêt réel et cohérent avec les finalités de la charia.

</details>
`,
    qcm: [
      { q: "Le taqlîd consiste à :", choix: ["Interpréter soi-même les textes", "Suivre l'opinion d'un juriste sans examiner ses preuves", "Rédiger un code", "Rendre un jugement"], bonne: 1, explication: "Attitude normale du non-spécialiste." },
      { q: "La thèse de la « fermeture de la porte de l'ijtihâd » a été notamment discutée par :", choix: ["Wael Hallaq", "René David", "Max Weber", "Ibn Khaldoun"], bonne: 0, explication: "Article de 1984." },
      { q: "La fatwâ est :", choix: ["Un jugement obligatoire", "Un avis juridique non obligatoire", "Une loi organique", "Un contrat"], bonne: 1, explication: "Le qadâ' est la décision du juge." },
      { q: "Al-Mi'yâr, grand recueil de fatwas du Maghreb, est l'œuvre de :", choix: ["Al-Wansharîsî", "Khalîl", "Sahnûn", "Ibn Hazm"], bonne: 0, explication: "Mort à Fès en 1508." },
      { q: "Le fondateur de l'école hanafite est :", choix: ["Mâlik", "Abû Hanîfa", "Al-Shâfi'î", "Ibn Hanbal"], bonne: 1, explication: "Mort en 767, à Koufa puis Bagdad." },
      { q: "La Mudawwana est due à :", choix: ["Mâlik", "Sahnûn", "Al-Bukhârî", "Ibn Khaldoun"], bonne: 1, explication: "D'après les réponses rapportées par Ibn al-Qâsim." },
      { q: "Le Mukhtasar devenu la référence des juges malékites est l'œuvre de :", choix: ["Khalîl ibn Ishâq", "Ibn Abî Zayd", "Ibn 'Âsim", "Al-Qarâfî"], bonne: 0, explication: "Mort en 1374." },
      { q: "Le malékisme s'impose au Maroc en particulier à partir des :", choix: ["Almoravides", "Saadiens seulement", "Mérinides seulement", "Romains"], bonne: 0, explication: "XIe siècle." },
      { q: "L'école ibadite est présente notamment :", choix: ["Au Mzab et à Oman", "En Indonésie", "En Turquie", "Au Pakistan"], bonne: 0, explication: "Ainsi qu'à Djerba." },
      { q: "L'article 400 du Code de la famille renvoie :", choix: ["Au seul Code civil français", "Au rite malékite et à l'ijtihâd", "Au droit hanafite", "À la coutume amazighe seulement"], bonne: 1, explication: "Pour les questions non réglées par le Code." },
    ],
  },

  7: {
    titre: "Le droit musulman dans le droit marocain contemporain",
    description: "Fiqh et droit marocain : Constitution de 2011, Code de la famille et article 400, successions, Code des droits réels, habous, finance participative.",
    resume: md`
## L'essentiel — Le fiqh dans le droit marocain

- Constitution : « État musulman souverain » (préambule), islam religion de l'État et libre exercice des cultes (article 3), Commandeur des croyants et Conseil supérieur des Oulémas (article 41), article 175.
- Droit **étatique** : le fiqh est source d'inspiration (DOC de 1913), source formelle (famille, successions, habous) ou source supplétive (renvois).
- Moudawana de 1957-1958, réforme de 1993, **Code de la famille** (loi 70-03, 2004) : responsabilité conjointe, mariage à 18 ans, wilâya droit de la femme majeure, polygamie et divorce sous contrôle judiciaire, article 49.
- **Article 400** : renvoi au rite malékite et à l'ijtihâd ; révision engagée en 2023.
- Successions (livre VI) : héritiers à part fixe et héritiers universels ; legs dans la limite du tiers ; legs obligatoire.
- **Loi 39-08** (droits réels), article 1er : code, puis DOC, puis fiqh malékite.
- **Code des habous** (2010) : habous publics et de famille.
- **Loi 103-12** (2014) : banques participatives (2017) ; mourabaha, ijara, moucharaka, moudaraba, salam, istisnâ' ; Comité charia du Conseil supérieur des Oulémas.
`,
    exercices: md`
### Exercice 2 — Quelle place pour le fiqh ?

Pour chaque question, indiquez le texte applicable et le rôle du fiqh : 1) la validité d'un mariage conclu à Fès ; 2) l'exercice de la chouf'a par un copropriétaire d'un immeuble non réglé par le code sur un point précis ; 3) la constitution d'un habous public ; 4) un contrat de mourabaha immobilière proposé par une banque participative ; 5) un contrat de vente d'un véhicule entre deux particuliers.

<details><summary>Voir le corrigé</summary>

1) Code de la famille : fiqh source formelle, et supplétive par l'article 400. 2) Loi 39-08 : à défaut de disposition, DOC puis fiqh malékite (source supplétive). 3) Code des habous : source formelle, avec renvoi au fiqh malékite. 4) Loi 103-12 : règles bancaires étatiques, conformité vérifiée par le Comité charia (fiqh des contrats). 5) DOC : le fiqh n'est qu'une source d'inspiration lointaine.

</details>

### Exercice 3 — Succession avec l'époux

Mme Alami décède en laissant son **époux**, son **père**, sa **mère** et **une fille**. Actif net : 520 000 DH. Calculez les parts sachant que, dans ce cas, l'époux reçoit 1/4, la mère 1/6, la fille 1/2 et le père 1/6 plus le reste éventuel.

<details><summary>Voir le corrigé</summary>

Dénominateur commun de 4, 6 et 2 : 12. Époux 3/12, mère 2/12, fille 6/12, père 2/12 : total 13/12, supérieur à 1. Les parts fixes dépassent l'actif : on applique la **réduction proportionnelle** ('awl), en portant le dénominateur à 13. Époux 3/13 = 120 000 DH ; mère 2/13 = 80 000 DH ; fille 6/13 = 240 000 DH ; père 2/13 = 80 000 DH. Le père ne reçoit pas de reste, puisqu'il n'y en a pas. Vérification : 120 000 + 80 000 + 240 000 + 80 000 = 520 000 DH. Sans la réduction, les parts fixes auraient exigé 13/12 de la succession.

</details>
`,
    qcm: [
      { q: "L'article 3 de la Constitution dispose que l'islam est la religion de l'État, qui garantit :", choix: ["Le monopole d'un seul culte", "À tous le libre exercice des cultes", "L'application directe du fiqh par tous les juges", "La suppression des codes"], bonne: 1, explication: "Libre exercice des cultes." },
      { q: "Le Code de la famille actuel résulte de la loi :", choix: ["70-03", "39-08", "103-12", "15-95"], bonne: 0, explication: "Promulgué en février 2004." },
      { q: "L'article 400 du Code de la famille renvoie :", choix: ["Au DOC seulement", "Au rite malékite et à l'ijtihâd", "Au droit hanafite", "Au Code pénal"], bonne: 1, explication: "Pour les questions non réglées par le Code." },
      { q: "Selon l'article 1er de la loi 39-08, à défaut de disposition du code, on applique :", choix: ["Le fiqh malékite puis le DOC", "Le DOC puis le fiqh malékite", "La coutume seulement", "Le Code de commerce"], bonne: 1, explication: "Ordre : code, DOC, fiqh malékite." },
      { q: "En présence d'un enfant du défunt, l'épouse reçoit :", choix: ["1/4", "1/8", "1/2", "1/6"], bonne: 1, explication: "Le quart en l'absence d'enfant." },
      { q: "Les legs ne peuvent dépasser, sans l'accord des héritiers :", choix: ["Le quart", "Le tiers", "La moitié", "Les deux tiers"], bonne: 1, explication: "Limite du tiers de la succession." },
      { q: "Les banques participatives marocaines ont été créées par la loi :", choix: ["103-12", "70-03", "29-11", "113-14"], bonne: 0, explication: "Loi relative aux établissements de crédit, 2014." },
      { q: "Dans la mourabaha, la banque :", choix: ["Prête de l'argent avec intérêt", "Achète le bien et le revend au client avec une marge connue", "Devient associée aux pertes uniquement", "Loue un bien sans possibilité d'achat"], bonne: 1, explication: "Paiement à terme du prix majoré." },
      { q: "Le Code des habous a été adopté par un dahir de :", choix: ["1913", "1958", "2010", "2016"], bonne: 2, explication: "Dahir du 23 février 2010." },
      { q: "L'âge du mariage fixé par le Code de la famille pour les deux sexes est de :", choix: ["15 ans", "16 ans", "18 ans", "21 ans"], bonne: 2, explication: "Le juge peut autoriser une exception par décision motivée." },
    ],
  },
};

export default chapitres;
