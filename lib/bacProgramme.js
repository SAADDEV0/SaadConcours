// Programme du Bac Sciences Économiques & Gestion (Maroc). Structure fixe
// du programme officiel, pas du contenu éditorial : elle vit dans le code
// comme lib/coursTaxonomy.js, et non dans public/data (lu depuis GitHub).
// Sources : AlloSchool, Kezakoo (programmes 1ère Bac SEG, 2ème Bac SE / SGC).

export const BAC_NIVEAUX = [
  {
    code: "1bac",
    label: "1ère Bac",
    available: true,
    filieres: [{ code: "seg", label: "Sciences Économiques et Gestion" }],
  },
  {
    code: "2bac",
    label: "2ème Bac",
    available: true,
    filieres: [
      { code: "se", label: "Sciences Économiques" },
      { code: "sgc", label: "Sciences de Gestion Comptable" },
    ],
  },
];

export const BAC_GROUPES = [
  { code: "specialite", label: "Matières de spécialité" },
  { code: "regional", label: "Matières de l'examen régional" },
  { code: "generale", label: "Matières générales" },
];

const NATIONAL = {
  label: "Examens nationaux corrigés",
  badge: "Examen national",
  pluriel: "Examens nationaux",
  annees: [2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010],
};

const REGIONAL = {
  label: "Examens régionaux corrigés",
  badge: "Examen régional",
  pluriel: "Examens régionaux",
  annees: [2025, 2024, 2023, 2022, 2021, 2020, 2018, 2017],
};

const RAW_MATIERES = [
  {
    niveau: "1bac",
    slug: "economie-generale-statistiques",
    nom: "Économie générale & Statistiques",
    court: "Économie générale",
    icon: "📈",
    hue: 152,
    groupe: "specialite",
    examen: null,
    description: "Les bases de l'économie : agents et circuit économique, production, répartition, emplois du revenu, et statistique descriptive.",
    semestres: [
      {
        code: "S1",
        unites: [
          {
            titre: "Les concepts économiques de base",
            chapitres: [
              "Les fondements de la science économique",
              "L'activité économique",
              "Les agents économiques",
              "Les opérations économiques",
              "Le circuit économique simplifié",
            ],
          },
          { titre: "Les mécanismes de la production et de la répartition", chapitres: ["La production", "La répartition et la redistribution des revenus"] },
        ],
      },
      {
        code: "S2",
        unites: [
          { titre: "Les emplois du revenu", chapitres: ["La consommation", "L'épargne", "L'investissement"] },
          { titre: "Outils de la statistique descriptive", chapitres: ["Statistique descriptive à une variable", "Caractéristiques de position et de dispersion"] },
        ],
      },
    ],
  },
  {
    niveau: "1bac",
    slug: "economie-organisation-administrative-entreprises",
    nom: "Économie & Organisation Administrative des Entreprises",
    court: "EOAE",
    icon: "🏢",
    hue: 28,
    groupe: "specialite",
    examen: null,
    description: "L'entreprise et son environnement, l'organisation du travail, l'information dans l'entreprise et la qualité totale.",
    semestres: [
      {
        code: "S1",
        unites: [
          { titre: "L'entreprise et son environnement", chapitres: ["L'entreprise et son environnement", "L'approche systémique de l'entreprise", "L'entreprise, cellule humaine"] },
          { titre: "L'organisation du travail dans l'entreprise", chapitres: ["Introduction à l'organisation du travail", "Conceptions classiques et modernes de l'organisation", "La gestion du temps"] },
        ],
      },
      {
        code: "S2",
        unites: [
          {
            titre: "L'information dans l'entreprise",
            chapitres: ["La notion d'information", "La recherche de l'information", "Structure et codification de l'information", "Collecte et saisie de l'information"],
          },
          {
            titre: "La qualité totale",
            chapitres: [
              "Conception de la qualité totale",
              "Mise en place d'une démarche qualité totale",
              "Actions pour l'amélioration de la qualité de service",
              "Cercles de qualité et qualité totale",
              "La certification comme arme commerciale",
            ],
          },
        ],
      },
    ],
  },
  {
    niveau: "1bac",
    slug: "comptabilite-mathematiques-financieres",
    nom: "Comptabilité & Mathématiques financières",
    court: "Comptabilité",
    icon: "🧮",
    hue: 210,
    groupe: "specialite",
    examen: null,
    description: "Du bilan au journal, les opérations courantes (factures, règlements, effets), la paie, puis les intérêts simples et composés.",
    semestres: [
      {
        code: "S1",
        unites: [
          {
            titre: "Les bases de la comptabilité",
            chapitres: ["Le bilan", "Le compte", "Le journal comptable", "Le compte de produits et charges (CPC)", "Le système classique d'enregistrement"],
          },
          { titre: "Les opérations courantes", chapitres: ["La facturation", "Les emballages", "Les règlements au comptant", "Les effets de commerce"] },
        ],
      },
      {
        code: "S2",
        unites: [
          {
            titre: "Les opérations d'investissement et de gestion",
            chapitres: ["Acquisition et production des immobilisations", "Les titres et valeurs de placement", "Les travaux de paie", "L'état de rapprochement"],
          },
          {
            titre: "Les mathématiques financières",
            chapitres: ["Les pourcentages", "Les intérêts simples", "L'escompte commercial", "L'équivalence des effets", "Les intérêts composés", "L'équivalence des capitaux"],
          },
        ],
      },
    ],
  },
  {
    niveau: "1bac",
    slug: "droit",
    nom: "Droit",
    court: "Droit",
    icon: "⚖️",
    hue: 280,
    groupe: "specialite",
    examen: null,
    description: "Éléments du droit civil (sources du droit, personnes, contrat) et du droit commercial (commerçant, fonds de commerce, sociétés).",
    semestres: [
      {
        code: "S1",
        unites: [{ titre: "Éléments du droit civil", chapitres: ["Introduction au droit", "Les sources du droit", "Les personnes juridiques", "Les droits subjectifs", "Le contrat"] }],
      },
      {
        code: "S2",
        unites: [{ titre: "Éléments du droit commercial", chapitres: ["Les actes de commerce", "Le commerçant", "Le fonds de commerce", "Les sociétés commerciales"] }],
      },
    ],
  },
  {
    niveau: "1bac",
    slug: "informatique-de-gestion",
    nom: "Informatique de gestion",
    court: "Informatique",
    icon: "💻",
    hue: 190,
    groupe: "specialite",
    examen: null,
    description: "Le traitement de texte Word et l'utilisation d'Internet dans un contexte professionnel.",
    semestres: [
      {
        code: "S1",
        unites: [{ titre: "Le traitement de texte Word", chapitres: ["Saisie et mise en forme du texte", "Tableaux et objets", "Mise en page et impression", "Le publipostage"] }],
      },
      {
        code: "S2",
        unites: [{ titre: "Internet", chapitres: ["Découverte d'Internet et navigation", "La recherche d'information", "La messagerie électronique"] }],
      },
    ],
  },
  {
    niveau: "1bac",
    slug: "mathematiques",
    nom: "Mathématiques",
    court: "Maths",
    icon: "📐",
    hue: 345,
    groupe: "generale",
    examen: null,
    description: "Logique, équations et systèmes, fonctions, suites, dénombrement, puis logarithme décimal, limites, dérivation et barycentre.",
    semestres: [
      {
        code: "S1",
        unites: [
          { titre: "Algèbre", chapitres: ["Notions de logique", "Équations, inéquations et systèmes", "Généralités sur les fonctions numériques", "Suites numériques", "Dénombrement"] },
        ],
      },
      {
        code: "S2",
        unites: [
          { titre: "Analyse", chapitres: ["Le logarithme décimal", "Limites", "Dérivation", "Étude et représentation des fonctions"] },
          { titre: "Géométrie", chapitres: ["Le barycentre"] },
        ],
      },
    ],
  },
  {
    niveau: "1bac",
    slug: "francais",
    nom: "Français",
    court: "Français",
    icon: "📚",
    hue: 12,
    groupe: "regional",
    examen: REGIONAL,
    description: "Les trois œuvres au programme de l'examen régional, plus les cours de langue et de production écrite.",
    semestres: [
      {
        code: "S1",
        unites: [
          {
            titre: "La Boîte à merveilles (Ahmed Sefrioui)",
            chapitres: ["La Boîte à merveilles : présentation de l'œuvre", "La Boîte à merveilles : les événements principaux", "La Boîte à merveilles : les personnages", "La Boîte à merveilles : thèmes et valeurs"],
          },
          { titre: "Langue et communication", chapitres: ["Cours de langue", "Méthodologie de la production écrite"] },
        ],
      },
      {
        code: "S2",
        unites: [
          { titre: "Antigone (Jean Anouilh)", chapitres: ["Antigone : présentation de l'œuvre", "Antigone : résumé et structure", "Antigone : les personnages", "Antigone : thèmes et tragique"] },
          {
            titre: "Le Dernier Jour d'un condamné (Victor Hugo)",
            chapitres: [
              "Le Dernier Jour d'un condamné : présentation de l'œuvre",
              "Le Dernier Jour d'un condamné : résumé et structure",
              "Le Dernier Jour d'un condamné : les personnages",
              "Le Dernier Jour d'un condamné : un roman à thèse",
            ],
          },
        ],
      },
    ],
  },
  {
    niveau: "1bac",
    slug: "arabe",
    nom: "اللغة العربية",
    court: "اللغة العربية",
    lang: "ar",
    icon: "✍️",
    hue: 95,
    groupe: "regional",
    examen: REGIONAL,
    description: "أربع مجزوءات : أنواع الخطاب، قضايا معاصرة، المفاهيم، وقيم إنسانية في الشعر العربي، مع الدروس اللغوية والتعبير والإنشاء.",
    semestres: [
      {
        code: "S1",
        unites: [
          {
            titre: "المجزوءة 1 : أنواع الخطاب",
            chapitres: [
              { titre: "درس النصوص : الخطاب الإشهاري", slug: "discours-publicitaire" },
              { titre: "درس النصوص : الخطاب الصحفي", slug: "discours-journalistique" },
              { titre: "درس النصوص : الخطاب السياسي", slug: "discours-politique" },
              { titre: "الدرس اللغوي : التمييز", slug: "tamyiz" },
              { titre: "الدرس اللغوي : العدد", slug: "adad" },
              { titre: "التعبير والإنشاء : مهارة تحليل صورة", slug: "analyse-image" },
            ],
          },
          {
            titre: "المجزوءة 2 : قضايا معاصرة",
            chapitres: [
              { titre: "درس النصوص : الإنسان والتنمية", slug: "homme-developpement" },
              { titre: "درس النصوص : الإنسان والتكنولوجيا", slug: "homme-technologie" },
              { titre: "درس النصوص : الإنسان ومشاكل الهجرة", slug: "homme-migration" },
              { titre: "الدرس اللغوي : الأمر والنهي", slug: "amr-nahy" },
              { titre: "الدرس اللغوي : الاستفهام والتمني", slug: "istifham-tamanni" },
              { titre: "التعبير والإنشاء : مهارة توسيع فكرة", slug: "developper-idee" },
            ],
          },
        ],
      },
      {
        code: "S2",
        unites: [
          {
            titre: "المجزوءة 3 : المفاهيم",
            chapitres: [
              { titre: "درس النصوص : مفهوم الحداثة", slug: "modernite" },
              { titre: "درس النصوص : مفهوم التواصل", slug: "communication" },
              { titre: "درس النصوص : مفهوم الإبداع", slug: "creation" },
              { titre: "الدرس اللغوي : المصادر", slug: "masadir" },
              { titre: "الدرس اللغوي : النسبة", slug: "nisba" },
              { titre: "التعبير والإنشاء : مهارة الربط بين الأفكار", slug: "lier-idees" },
            ],
          },
          {
            titre: "المجزوءة 4 : قيم إنسانية في الشعر العربي",
            chapitres: [
              { titre: "درس النصوص : التضامن", slug: "solidarite" },
              { titre: "درس النصوص : التسامح", slug: "tolerance" },
              { titre: "درس النصوص : الجمال", slug: "beaute" },
              { titre: "الدرس اللغوي : الاستعارة وأركانها", slug: "istiara" },
              { titre: "الدرس اللغوي : الطباق والمقابلة", slug: "tibaq-muqabala" },
              { titre: "التعبير والإنشاء : مهارة المقارنة والاستنتاج", slug: "comparer-conclure" },
            ],
          },
        ],
      },
    ],
  },
  {
    niveau: "1bac",
    slug: "histoire-geographie",
    nom: "الاجتماعيات",
    court: "الاجتماعيات",
    lang: "ar",
    icon: "🌍",
    hue: 320,
    groupe: "regional",
    examen: REGIONAL,
    description: "التاريخ : التحولات الكبرى للعالم الرأسمالي خلال القرنين 19م و20م والمغرب. الجغرافيا : التنمية، المجال المغربي والقوى الاقتصادية الكبرى.",
    semestres: [
      {
        code: "S1",
        unites: [
          {
            titre: "التاريخ",
            chapitres: [
              { titre: "التحولات الاقتصادية والمالية والاجتماعية والفكرية في العالم خلال القرن 19م", slug: "transformations-xixe-siecle" },
              { titre: "التنافس الإمبريالي واندلاع الحرب العالمية الأولى", slug: "imperialisme-premiere-guerre" },
              { titre: "اليقظة الفكرية بالمشرق العربي", slug: "nahda-machrek" },
              { titre: "الضغوط الاستعمارية على المغرب ومحاولات الإصلاح", slug: "pressions-coloniales-maroc" },
            ],
          },
          {
            titre: "الجغرافيا",
            chapitres: [
              { titre: "مفهوم التنمية : تعدد المقاربات والتقسيمات الكبرى للعالم", slug: "notion-developpement" },
              { titre: "المجال المغربي : الموارد الطبيعية والبشرية", slug: "espace-marocain-ressources" },
              { titre: "الاختيارات الكبرى لسياسة إعداد التراب الوطني", slug: "amenagement-territoire" },
              { titre: "التهيئة الحضرية والريفية : أزمة المدينة والريف", slug: "amenagement-urbain-rural" },
              { titre: "العالم العربي : مشكل الماء وظاهرة التصحر", slug: "monde-arabe-eau-desertification" },
            ],
          },
        ],
      },
      {
        code: "S2",
        unites: [
          {
            titre: "التاريخ",
            chapitres: [
              { titre: "أوروبا من نهاية الحرب العالمية الأولى إلى أزمة 1929م", slug: "europe-crise-1929" },
              { titre: "الحرب العالمية الثانية : الأسباب والنتائج", slug: "seconde-guerre-mondiale" },
              { titre: "نظام الحماية بالمغرب والاستغلال الاستعماري", slug: "protectorat-maroc" },
              { titre: "نضال المغرب من أجل تحقيق الاستقلال واستكمال الوحدة الترابية", slug: "independance-maroc" },
              { titre: "ملف : العولمة والتحديات الراهنة", slug: "mondialisation-defis" },
            ],
          },
          {
            titre: "الجغرافيا",
            chapitres: [
              { titre: "الولايات المتحدة الأمريكية قوة اقتصادية عظمى", slug: "etats-unis" },
              { titre: "الاتحاد الأوروبي نحو اندماج شامل", slug: "union-europeenne" },
              { titre: "الصين قوة اقتصادية صاعدة", slug: "chine" },
              { titre: "ملف : الشراكة بين المغرب والاتحاد الأوروبي", slug: "partenariat-maroc-ue" },
            ],
          },
        ],
      },
    ],
  },
  {
    niveau: "1bac",
    slug: "education-islamique",
    nom: "التربية الإسلامية",
    court: "التربية الإسلامية",
    lang: "ar",
    icon: "🕌",
    hue: 170,
    groupe: "regional",
    examen: REGIONAL,
    description: "سورة يوسف ومداخل التزكية والاقتداء والاستجابة والقسط والحكمة، موزعة على أربع وحدات.",
    semestres: [
      {
        code: "S1",
        unites: [
          {
            titre: "القرآن الكريم : سورة يوسف (1)",
            chapitres: [
              { titre: "سورة يوسف : من الآية 1 إلى الآية 21", slug: "youssef-1-21" },
              { titre: "سورة يوسف : من الآية 22 إلى الآية 42", slug: "youssef-22-42" },
              { titre: "سورة يوسف : من الآية 43 إلى الآية 57", slug: "youssef-43-57" },
            ],
          },
          {
            titre: "الوحدة 1",
            chapitres: [
              { titre: "التزكية : الإيمان والغيب", slug: "iman-ghayb" },
              { titre: "الاقتداء : صلح الحديبية وفتح مكة", slug: "houdaybiya-fath-makka" },
              { titre: "الاستجابة : فقه الأسرة، الزواج", slug: "mariage" },
              { titre: "القسط : حق الله، الوفاء بالأمانة والمسؤولية", slug: "amana-responsabilite" },
              { titre: "الحكمة : الكفاءة والاستحقاق أساس التكليف", slug: "competence-merite" },
            ],
          },
          {
            titre: "الوحدة 2",
            chapitres: [
              { titre: "التزكية : الإيمان والعلم", slug: "iman-ilm" },
              { titre: "الاقتداء : الرسول ﷺ مفاوضا ومستشيرا", slug: "prophete-negociateur" },
              { titre: "الاستجابة : فقه الأسرة، الطلاق", slug: "divorce" },
              { titre: "القسط : حق النفس، الصبر واليقين", slug: "sabr-yaqin" },
              { titre: "الحكمة : العفو والتسامح", slug: "pardon-tolerance" },
            ],
          },
        ],
      },
      {
        code: "S2",
        unites: [
          {
            titre: "القرآن الكريم : سورة يوسف (2)",
            chapitres: [
              { titre: "سورة يوسف : من الآية 58 إلى الآية 76", slug: "youssef-58-76" },
              { titre: "سورة يوسف : من الآية 77 إلى الآية 93", slug: "youssef-77-93" },
              { titre: "سورة يوسف : من الآية 94 إلى الآية 111", slug: "youssef-94-111" },
            ],
          },
          {
            titre: "الوحدة 3",
            chapitres: [
              { titre: "التزكية : الإيمان والفلسفة", slug: "iman-falsafa" },
              { titre: "الاقتداء : عثمان بن عفان وقوة البذل والحياء", slug: "othmane-ibn-affane" },
              { titre: "الاستجابة : رعاية الأطفال وحقوقهم", slug: "droits-enfants" },
              { titre: "القسط : حق الغير، العفة والحياء", slug: "iffa-haya" },
              { titre: "الحكمة : وقاية المجتمع من تفشي الفواحش", slug: "protection-societe" },
            ],
          },
          {
            titre: "الوحدة 4",
            chapitres: [
              { titre: "التزكية : الإيمان وعمارة الأرض", slug: "iman-imarat-al-ard" },
              { titre: "الاقتداء : الرسول ﷺ في بيته", slug: "prophete-foyer" },
              { titre: "الاستجابة : الأسرة نواة المجتمع", slug: "famille-noyau" },
              { titre: "القسط : حق البيئة، التوسط والاعتدال", slug: "environnement" },
              { titre: "الحكمة : السبعة الذين يظلهم الله", slug: "sept-ombrages" },
            ],
          },
        ],
      },
    ],
  },
  {
    niveau: "1bac",
    slug: "philosophie",
    nom: "الفلسفة",
    court: "الفلسفة",
    lang: "ar",
    icon: "🤔",
    hue: 45,
    groupe: "generale",
    examen: null,
    description: "مجزوءتان : الإنسان (الوعي واللاوعي، الرغبة، المجتمع) ثم الفاعلية والإبداع (التقنية والعلم، الشغل، الفن).",
    semestres: [
      {
        code: "S1",
        unites: [
          {
            titre: "مجزوءة الإنسان",
            chapitres: [
              { titre: "مفهوم الوعي واللاوعي", slug: "conscience-inconscient" },
              { titre: "مفهوم الرغبة", slug: "desir" },
              { titre: "مفهوم المجتمع", slug: "societe" },
            ],
          },
        ],
      },
      {
        code: "S2",
        unites: [
          {
            titre: "مجزوءة الفاعلية والإبداع",
            chapitres: [
              { titre: "مفهوم التقنية والعلم", slug: "technique-science" },
              { titre: "مفهوم الشغل", slug: "travail" },
              { titre: "مفهوم الفن", slug: "art" },
            ],
          },
        ],
      },
    ],
  },

  {
    niveau: "2bac",
    slug: "economie-generale-statistiques",
    nom: "Économie générale & Statistiques",
    court: "Économie générale",
    icon: "📈",
    hue: 152,
    groupe: "specialite",
    examen: NATIONAL,
    description: "Marché, comptabilité nationale, inflation et chômage, politiques économiques, échanges extérieurs et développement.",
    semestres: [
      {
        code: "S1",
        unites: [
          { titre: "Les concepts économiques de base", chapitres: ["Le marché", "Le circuit économique élargi", "Les agrégats de la comptabilité nationale", "Les limites de la comptabilité nationale"] },
          {
            titre: "L'intervention de l'État",
            chapitres: [
              "La régulation par le marché et ses insuffisances",
              "Les dysfonctionnements du marché : l'inflation",
              "Les dysfonctionnements du marché : le chômage",
              "La politique économique",
              "La politique monétaire",
              "La politique budgétaire",
            ],
          },
        ],
      },
      {
        code: "S2",
        unites: [
          { titre: "Les échanges extérieurs", chapitres: ["Les fondements théoriques des échanges extérieurs", "Mesure et analyse des échanges extérieurs", "L'ouverture de l'économie"] },
          { titre: "Le développement et les perspectives d'évolution", chapitres: ["La croissance et le développement", "Les théories du sous-développement", "Les stratégies de développement", "La mondialisation"] },
        ],
      },
    ],
  },
  {
    niveau: "2bac",
    slug: "economie-organisation-administrative-entreprises",
    nom: "Économie & Organisation Administrative des Entreprises",
    court: "EOAE",
    icon: "🏢",
    hue: 28,
    groupe: "specialite",
    examen: NATIONAL,
    description: "Stratégie et croissance de l'entreprise, puis gestion des ressources humaines : recrutement, formation, rémunération.",
    semestres: [
      {
        code: "S1",
        unites: [
          {
            titre: "La stratégie et la croissance",
            chapitres: [
              "Métier et mission de l'entreprise",
              "Finalités et objectifs de l'entreprise",
              "La planification stratégique",
              "Les options stratégiques",
              "La croissance de l'entreprise",
              "La concentration des entreprises",
            ],
          },
        ],
      },
      {
        code: "S2",
        unites: [
          {
            titre: "La gestion des ressources humaines (GRH)",
            chapitres: [
              "Les enjeux et les domaines de la GRH",
              "Motivation et styles de commandement",
              "La communication",
              "Le recrutement",
              "La formation",
              "La rémunération",
              "Gestion des carrières et plan social",
            ],
          },
        ],
      },
    ],
  },
  {
    niveau: "2bac",
    slug: "comptabilite-mathematiques-financieres",
    nom: "Comptabilité & Mathématiques financières",
    court: "Comptabilité",
    icon: "🧮",
    hue: 210,
    groupe: "specialite",
    examen: NATIONAL,
    description: "Travaux de fin d'exercice (stocks, amortissements, provisions, régularisations) et analyse comptable (bilan, ratios, ESG, TED).",
    semestres: [
      {
        code: "S1",
        unites: [
          {
            titre: "Les travaux de fin d'exercice",
            chapitres: [
              "Introduction aux travaux de fin d'exercice",
              "La régularisation des stocks",
              "Amortissements : définition, taux et cumul",
              "Amortissements : dotations, écritures et cessions",
              "Plans et tableaux d'amortissement",
              "Provisions pour dépréciation des créances clients",
              "Provisions des titres (TP et TVP)",
            ],
          },
        ],
      },
      {
        code: "S2",
        unites: [
          {
            titre: "Les travaux de fin d'exercice (suite)",
            chapitres: [
              "Provisions pour dépréciation des stocks",
              "Provisions pour risques et charges",
              "Provisions des immobilisations non amortissables",
              "La régularisation des charges et produits",
              "Le calcul de l'impôt sur les sociétés (IS)",
            ],
          },
          { titre: "L'analyse comptable", chapitres: ["L'analyse du bilan", "Les ratios", "L'état des soldes de gestion (ESG)", "Le tableau d'exploitation différentiel (TED)"] },
        ],
      },
    ],
  },
  {
    niveau: "2bac",
    slug: "droit",
    nom: "Droit",
    court: "Droit",
    icon: "⚖️",
    hue: 280,
    groupe: "specialite",
    examen: null,
    description: "Éléments de la fiscalité marocaine (TVA, IS, IR) et du droit social (contrat de travail, relations collectives, protection sociale).",
    semestres: [
      { code: "S1", unites: [{ titre: "Éléments de la fiscalité marocaine", chapitres: ["Généralités sur l'impôt", "La taxe sur la valeur ajoutée (TVA)", "L'impôt sur les sociétés (IS)", "L'impôt sur le revenu (IR)"] }] },
      {
        code: "S2",
        unites: [
          {
            titre: "Éléments du droit social",
            chapitres: [
              "Le contrat de travail",
              "Les conditions de travail",
              "La suspension et la rupture du contrat de travail",
              "La représentation des salariés et les syndicats",
              "Les conflits collectifs de travail",
              "La protection sociale",
            ],
          },
        ],
      },
    ],
  },
  {
    niveau: "2bac",
    slug: "informatique-de-gestion",
    nom: "Informatique de gestion",
    court: "Informatique",
    icon: "💻",
    hue: 190,
    groupe: "specialite",
    examen: null,
    description: "Le tableur Excel appliqué à la gestion et le logiciel comptable SAARI.",
    semestres: [
      { code: "S1", unites: [{ titre: "Le tableur Excel", chapitres: ["Prise en main et mise en forme", "Formules et fonctions de calcul", "Fonctions logiques et de recherche", "Graphiques et tableaux de synthèse"] }] },
      { code: "S2", unites: [{ titre: "Le logiciel comptable SAARI", chapitres: ["Création et paramétrage d'un dossier", "Plan comptable, journaux et tiers", "Saisie des écritures comptables", "Éditions : grand livre et balance"] }] },
    ],
  },
  {
    niveau: "2bac",
    slug: "mathematiques",
    nom: "Mathématiques",
    court: "Maths",
    icon: "📐",
    hue: 345,
    groupe: "generale",
    examen: NATIONAL,
    description: "Analyse (limites, dérivation, suites, logarithme, exponentielle, intégrales) puis dénombrement et probabilités.",
    semestres: [
      { code: "S1", unites: [{ titre: "Analyse (1)", chapitres: ["Limites et continuité", "Dérivation et étude des fonctions", "Suites numériques", "Fonctions logarithmiques"] }] },
      {
        code: "S2",
        unites: [
          { titre: "Analyse (2)", chapitres: ["Fonctions exponentielles", "Fonctions primitives", "Calcul intégral"] },
          { titre: "Dénombrement et probabilités", chapitres: ["Dénombrement", "Probabilités"] },
        ],
      },
    ],
  },
  {
    niveau: "2bac",
    slug: "philosophie",
    nom: "الفلسفة",
    court: "الفلسفة",
    lang: "ar",
    icon: "🤔",
    hue: 45,
    groupe: "generale",
    examen: NATIONAL,
    description: "أربع مجزوءات : الوضع البشري، المعرفة، السياسة والأخلاق.",
    semestres: [
      {
        code: "S1",
        unites: [
          {
            titre: "مجزوءة الوضع البشري",
            chapitres: [
              { titre: "مفهوم الشخص", slug: "personne" },
              { titre: "مفهوم الغير", slug: "autrui" },
            ],
          },
          {
            titre: "مجزوءة المعرفة",
            chapitres: [
              { titre: "مفهوم النظرية والتجربة", slug: "theorie-experience" },
              { titre: "مفهوم الحقيقة", slug: "verite" },
            ],
          },
        ],
      },
      {
        code: "S2",
        unites: [
          {
            titre: "مجزوءة السياسة",
            chapitres: [
              { titre: "مفهوم الدولة", slug: "etat" },
              { titre: "مفهوم الحق والعدالة", slug: "droit-justice" },
            ],
          },
          {
            titre: "مجزوءة الأخلاق",
            chapitres: [
              { titre: "مفهوم الواجب", slug: "devoir" },
              { titre: "مفهوم السعادة", slug: "bonheur" },
            ],
          },
        ],
      },
    ],
  },
  {
    niveau: "2bac",
    slug: "anglais",
    nom: "Anglais",
    court: "Anglais",
    icon: "🇬🇧",
    hue: 230,
    groupe: "generale",
    examen: NATIONAL,
    description: "Les unités thématiques du programme, avec grammaire, vocabulaire et writing pour l'examen national.",
    semestres: [
      { code: "S1", unites: [{ titre: "Units 1 – 5", chapitres: ["Gifts of youth", "Humour", "Education", "Sustainable development", "Women and power"] }] },
      { code: "S2", unites: [{ titre: "Units 6 – 10", chapitres: ["Cultural values", "Citizenship", "International organisations", "Advances in science and technology", "Brain drain"] }] },
    ],
  },
];

function slugify(s) {
  return s
    .replace(/œ/g, "oe")
    .replace(/æ/g, "ae")
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// Numérotation continue des chapitres sur l'année (Ch. 1 → Ch. N), comme
// sur les fiches de progression des enseignants.
function build(m) {
  let n = 0;
  let u = 0;
  const semestres = m.semestres.map((s) => ({
    code: s.code,
    label: s.code === "S1" ? "Semestre 1" : "Semestre 2",
    unites: s.unites.map((unite) => {
      u += 1;
      return {
        numero: u,
        titre: unite.titre,
        chapitres: unite.chapitres.map((ch) => {
          n += 1;
          // Titre seul, ou { titre, slug } quand le titre n'est pas en alphabet latin (arabe).
          const titre = typeof ch === "string" ? ch : ch.titre;
          return { numero: n, titre, slug: typeof ch === "string" ? slugify(ch) : ch.slug, semestre: s.code, unite: unite.titre, uniteNumero: u };
        }),
      };
    }),
  }));
  const chapitres = semestres.flatMap((s) => s.unites.flatMap((x) => x.chapitres));
  return { ...m, semestres, chapitres, nbUnites: u };
}

export const BAC_MATIERES = RAW_MATIERES.map(build);

export function bacNiveauInfo(code) {
  return BAC_NIVEAUX.find((n) => n.code === code) || null;
}

export function bacMatieres(niveau) {
  return BAC_MATIERES.filter((m) => m.niveau === niveau);
}

export function findBacMatiere(niveau, slug) {
  return BAC_MATIERES.find((m) => m.niveau === niveau && m.slug === slug) || null;
}

export function findBacChapitre(matiere, slug) {
  const i = matiere.chapitres.findIndex((c) => c.slug === slug);
  if (i === -1) return null;
  return { chapitre: matiere.chapitres[i], prev: matiere.chapitres[i - 1] || null, next: matiere.chapitres[i + 1] || null };
}

// "/bac/2bac/droit/le-contrat-de-travail" → { niveau, matiere, chapitre } (objets du programme).
export function parseBacPath(path) {
  const [, root, niveau, matiereSlug, chapitreSlug] = String(path || "").split("/");
  if (root !== "bac") return null;
  const niv = bacNiveauInfo(niveau);
  const matiere = niv && matiereSlug ? findBacMatiere(niveau, matiereSlug) : null;
  const chapitre = matiere && chapitreSlug ? matiere.chapitres.find((c) => c.slug === chapitreSlug) || null : null;
  return { niveau: niv, matiere, chapitre };
}

export function bacPathLabel(path) {
  const p = parseBacPath(path);
  if (!p) return null;
  const segments = String(path).split("/").filter(Boolean).length;
  if (!p.niveau) return segments === 1 ? "Cours Bac (accueil)" : null;
  if ((segments >= 3 && !p.matiere) || (segments >= 4 && !p.chapitre)) return null;
  const parts = [`Bac · ${p.niveau.label}`];
  if (p.matiere) parts.push(p.matiere.court);
  if (p.chapitre) parts.push(p.chapitre.titre);
  else if (!p.matiere) parts.push("liste des matières");
  return parts.join(" · ");
}

export function bacTextDir(m) {
  return m.lang === "ar" ? { dir: "rtl", lang: "ar" } : {};
}

export function bacMatiereHref(m) {
  return `/bac/${m.niveau}/${m.slug}`;
}

export function bacChapitreHref(m, c) {
  return `/bac/${m.niveau}/${m.slug}/${c.slug}`;
}
