// Filières du concours de l'enseignement (« Taalim ») et cours à réviser
// pour chacune : la page /taalim (hub de l'espace Taalim) les présente avant
// les sujets officiels.
//
// Sources (vérifiées le 2026-10-25) : avis de la session de novembre 2025
// (19 000 postes : 3 383 au primaire dont 1 000 en amazighe, 12 926 au
// collège, 2 691 au lycée ; licence exigée, 35 ans au plus ; écrit commun +
// écrit de spécialité ; épreuve pratique d'éducation physique au primaire ;
// un an de qualification au CRMEF), tableau des postes du lycée de la session
// d'octobre 2024, statut particulier des fonctionnaires de l'Éducation
// nationale (février 2024). Les spécialités ouvertes changent d'une session à
// l'autre : ne lister ici que celles qu'un avis récent a ouvertes.
//
// `filiere` = la sous-filière ENS de lib/taxonomy.js : relie une filière à
// ses sujets de concours.json. `liens` = cours du site qui couvrent la même
// matière (un seul cours par matière, BANQUE_PROMPTS §1.6) : id de
// public/data/cours.json, ignoré si le cours n'est pas publié.

// Types de cours, du plus général au plus pratique : un badge par cours.
export const TYPES_COURS = {
  commun: { label: "Tronc commun", desc: "Écrit commun à tous les candidats, quelle que soit la filière." },
  specialite: { label: "Spécialité", desc: "Contenu de la matière enseignée, niveau licence." },
  didactique: { label: "Didactique", desc: "Comment enseigner la matière : objectifs, séquence, évaluation, erreurs des élèves." },
  pratique: { label: "Pratique", desc: "Épreuve physique ou de terrain, après les écrits." },
};

// Écrit commun : le même pour toutes les filières d'enseignement.
export const TRONC_COMMUN = [
  {
    nom: "Sciences de l'éducation",
    ar: "علوم التربية",
    type: "commun",
    detail: "Pédagogie, psychologie de l'enfant et de l'adolescent, théories de l'apprentissage, gestion de la classe, évaluation des apprentissages.",
  },
  {
    nom: "Système éducatif marocain et réformes",
    ar: "مستجدات التربية والتكوين",
    type: "commun",
    detail: "Loi-cadre 51-17, Vision stratégique 2015-2030, feuille de route 2022-2026 et écoles pionnières, curriculum et organisation de l'école.",
  },
];

export const FILIERES = [
  {
    key: "primaire",
    filiere: "Enseignement primaire",
    cycle: "Primaire",
    titre: "Professeur de l'enseignement primaire",
    ar: "أستاذ(ة) التعليم الابتدائي",
    eleves: "Élèves de la 1ʳᵉ à la 6ᵉ année du primaire, de 6 à 12 ans environ.",
    role: "Un professeur polyvalent : il enseigne plusieurs matières à la même classe (langues, mathématiques, éveil scientifique), ou l'amazighe dans plusieurs classes s'il a choisi cette spécialité.",
    acces: "Licence dans n'importe quelle discipline.",
    postes: "3 383 postes en 2025, dont 1 000 pour l'amazighe.",
    specialites: [
      {
        nom: "Bilingue arabe-français",
        ar: "التخصص المزدوج",
        desc: "La spécialité la plus courante : la classe en arabe et en français.",
        cours: [
          { nom: "Langue arabe", ar: "اللغة العربية", type: "specialite", detail: "Grammaire et morphologie, compréhension de texte, expression écrite." },
          { nom: "Langue française", type: "specialite", detail: "Compréhension de texte, grammaire, conjugaison, orthographe et lexique." },
          { nom: "Mathématiques", ar: "الرياضيات", type: "specialite", detail: "Nombres et calcul, géométrie, mesure, résolution de problèmes du programme du primaire." },
          { nom: "Activité scientifique", ar: "النشاط العلمي", type: "specialite", detail: "Le corps humain, le vivant et son milieu, la matière, l'énergie." },
          { nom: "Didactique des matières", ar: "ديداكتيك المواد", type: "didactique", detail: "Didactique de l'arabe, du français, des mathématiques et de l'activité scientifique : préparer une séance, corriger une erreur d'élève." },
          { nom: "Éducation physique et sportive", type: "pratique", detail: "Épreuve pratique passée après les écrits." },
        ],
      },
      {
        nom: "Langue amazighe",
        ar: "اللغة الأمازيغية",
        desc: "Un professeur spécialisé qui enseigne l'amazighe dans plusieurs classes de l'école.",
        cours: [
          { nom: "Langue amazighe", ar: "اللغة الأمازيغية", type: "specialite", detail: "Graphie tifinagh, grammaire, lexique, compréhension et production de textes." },
          { nom: "Didactique de l'amazighe", type: "didactique", detail: "Enseigner la lecture, l'écriture et l'oral en amazighe à l'école primaire." },
          { nom: "Éducation physique et sportive", type: "pratique", detail: "Épreuve pratique passée après les écrits." },
        ],
      },
    ],
  },
  {
    key: "college",
    filiere: "Enseignement secondaire collégial",
    cycle: "Collège",
    titre: "Professeur de l'enseignement secondaire collégial",
    ar: "أستاذ(ة) التعليم الثانوي الإعدادي",
    eleves: "Élèves de la 1ʳᵉ à la 3ᵉ année du collège, de 12 à 15 ans environ.",
    role: "Un professeur d'une seule matière, celle de sa licence, qu'il enseigne à plusieurs classes.",
    acces: "Licence dans la matière choisie : une candidature hors de la spécialité du diplôme est annulée.",
    postes: "12 926 postes en 2025, le plus gros recrutement.",
    secondaire: "college",
  },
  {
    key: "lycee",
    filiere: "Enseignement secondaire qualifiant",
    cycle: "Lycée",
    titre: "Professeur de l'enseignement secondaire qualifiant",
    ar: "أستاذ(ة) التعليم الثانوي التأهيلي",
    eleves: "Élèves du tronc commun, de la 1ʳᵉ et de la 2ᵉ année du Bac, de 15 à 18 ans environ.",
    role: "Un professeur d'une seule matière, au niveau du Bac : il prépare les élèves aux examens régional et national.",
    acces: "Licence dans la matière choisie. Une licence de mathématiques ou de français permet de postuler au collège et au lycée.",
    postes: "2 691 postes en 2025.",
    secondaire: "lycee",
  },
  {
    key: "soutien",
    filiere: "Cadres de soutien (administratif, pédagogique, social)",
    cycle: "Cadres de soutien",
    titre: "Attaché des académies régionales (AREF)",
    ar: "أطر الدعم الإداري والتربوي والاجتماعي",
    eleves: "Pas de classe : le poste est dans un établissement ou une direction de l'académie.",
    role: "L'attaché d'économie et d'administration tient la gestion matérielle et financière de l'établissement ; l'attaché pédagogique suit la vie scolaire ; l'attaché social accompagne les élèves.",
    acces: "Licence de la discipline demandée pour chaque cadre (économie, gestion, droit, sciences humaines). Recrutés avec les enseignants aux sessions de 2016 à 2021 : vérifier l'avis de chaque session.",
    specialites: [
      {
        nom: "Attaché d'économie et d'administration",
        ar: "ملحق الاقتصاد والإدارة",
        desc: "Les épreuves de 2021 réunies sur le site, en arabe.",
        cours: [
          { nom: "Comptabilité publique", ar: "المحاسبة العمومية", type: "specialite", detail: "Ordonnateur et comptable, phases de la dépense et de la recette, pièces justificatives." },
          { nom: "Finances publiques", ar: "المالية العامة", type: "specialite", detail: "Loi organique des finances 130-13, budget de l'État et des académies, contrôle." },
          { nom: "Gestion matérielle et financière de l'établissement", ar: "التدبير المادي والمالي", type: "specialite", detail: "Budget de l'établissement, inventaire, internat et cantine, marchés publics." },
          { nom: "Statistique descriptive", type: "specialite", detail: "Séries statistiques, moyennes et dispersion, tableaux et graphiques.", liens: ["stats_cours"] },
          { nom: "Législation scolaire", ar: "التشريع المدرسي", type: "commun", detail: "Statut des établissements, conseils de l'établissement, textes de la vie scolaire." },
          { nom: "Missions et attributions", ar: "الاختصاصات والمهام", type: "specialite", detail: "Essai sur le rôle de l'attaché dans l'établissement : analyser une situation, proposer une démarche." },
        ],
      },
    ],
  },
];

// Spécialités du secondaire : celles des avis récents (fiches d'épreuves de
// novembre 2025, postes du lycée d'octobre 2024). `cycles` dit où chacune a
// été ouverte. Chaque spécialité = contenu disciplinaire + didactique de la
// matière, en plus du tronc commun.
export const SPECIALITES_SECONDAIRE = [
  { nom: "Langue arabe", ar: "اللغة العربية", cycles: ["college", "lycee"], cours: ["Grammaire, morphologie et rhétorique", "Littérature arabe ancienne et moderne", "Analyse de texte et critique littéraire"] },
  { nom: "Langue française", ar: "اللغة الفرنسية", cycles: ["college", "lycee"], cours: ["Grammaire de la phrase et du texte", "Littérature et œuvres au programme", "Linguistique et analyse du discours"] },
  { nom: "Langue anglaise", ar: "اللغة الإنجليزية", cycles: ["college", "lycee"], cours: ["Grammar and usage", "Linguistics and phonetics", "Literature and reading comprehension"] },
  { nom: "Mathématiques", ar: "الرياضيات", cycles: ["college", "lycee"], cours: ["Analyse (suites, fonctions, intégrales)", "Algèbre et arithmétique", "Géométrie", "Probabilités et statistique"], liens: ["maths_cours", "probas_cours"] },
  { nom: "Physique et chimie", ar: "الفيزياء والكيمياء", cycles: ["college", "lycee"], cours: ["Mécanique", "Électricité et électronique", "Ondes et optique", "Chimie générale et organique"] },
  { nom: "Sciences de la vie et de la Terre", ar: "علوم الحياة والأرض", cycles: ["college", "lycee"], cours: ["Biologie cellulaire et génétique", "Physiologie humaine", "Géologie", "Écologie"] },
  { nom: "Histoire et géographie", ar: "الاجتماعيات", cycles: ["college", "lycee"], cours: ["Histoire du Maroc et du monde", "Géographie physique et humaine", "Éducation à la citoyenneté"] },
  { nom: "Éducation physique et sportive", ar: "التربية البدنية والرياضية", cycles: ["college", "lycee"], cours: ["Physiologie de l'effort", "Sports collectifs et individuels", "Épreuve pratique"] },
  { nom: "Philosophie", ar: "الفلسفة", cycles: ["lycee"], cours: ["Histoire de la philosophie", "Notions du programme (la personne, autrui, l'État, la vérité…)", "Argumentation et dissertation"] },
  { nom: "Informatique", ar: "المعلوميات", cycles: ["lycee"], cours: ["Algorithmique et programmation", "Bases de données", "Réseaux et systèmes"] },
  { nom: "Sciences de l'ingénieur", ar: "العلوم الصناعية للمهندس", cycles: ["lycee"], cours: ["Analyse fonctionnelle", "Mécanique et transmission", "Électrotechnique et automatisme"] },
  {
    nom: "Sciences économiques et de gestion",
    ar: "علوم الاقتصاد والتدبير",
    cycles: ["lycee"],
    cours: ["Comptabilité générale et analytique", "Économie générale et statistique", "Management et organisation des entreprises", "Mathématiques financières et fiscalité"],
    liens: ["comptagen1_cours", "comptaana_cours", "micro_cours", "macro1_cours", "macro_cours", "stats_cours", "managementfond_cours", "mathfin_cours", "fiscalite_cours"],
  },
];

// Cours d'une filière du secondaire (collège ou lycée) : les spécialités
// ouvertes à ce cycle.
export function specialitesDuCycle(cycle) {
  return SPECIALITES_SECONDAIRE.filter((s) => s.cycles.includes(cycle));
}
