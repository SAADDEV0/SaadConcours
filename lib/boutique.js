// Boutique : cahiers de préparation commandés sur WhatsApp.
//
// Le site ne gère aucun paiement ni aucun PDF : il présente les cahiers
// (couverture, sommaire, prix) et ouvre WhatsApp avec un message qui nomme le
// cahier. Saad répond, encaisse et envoie le PDF à la main sur WhatsApp. Les
// fiches vivent dans public/data/boutique.json, éditées depuis
// /admin/boutique comme tout le reste du contenu.
//
// Une fiche :
//   { id, titre, sousTitre, niveau, matiere, cours, description (Markdown),
//     sommaire: [], pointsForts: [], prix, prixBarre, devise, pages, format,
//     couverture, apercu, badge, vedette, available, dateAjout }
//
// `cours` : id du cours gratuit du même module (cours.json, ou droit.json pour
// un module de la licence de Droit). C'est lui qui place l'annonce du cahier
// sur les pages du cours et le lien retour sur la fiche (voir cahierDuCours).
// `langue: "ar"` : cahier écrit en arabe (fiche, annonce et message WhatsApp en arabe).

// Numéro WhatsApp des commandes (aussi celui du bouton flottant du site).
export const WHATSAPP_NUMERO = "212713875327";

export const BOUTIQUE_NIVEAUX = [
  { code: "bac", label: "Bac", long: "Bac Sciences Économiques & Gestion", icon: "🎒", hue: 152 },
  { code: "licence", label: "Licence", long: "Licence FSJES (S1 à S6)", icon: "📚", hue: 210 },
  { code: "licence_excellence", label: "Licence d'excellence", long: "Concours de Licence d'excellence", icon: "⭐", hue: 42 },
  { code: "master", label: "Master", long: "Concours d'accès au Master", icon: "🎓", hue: 265 },
];

export const BOUTIQUE_BADGES = ["Nouveau", "Best-seller", "Promo", "Édition 2026", "Bientôt"];

export const BOUTIQUE_DEVISES = [
  { code: "MAD", label: "Dirham (DH)" },
  { code: "EUR", label: "Euro (€)" },
  { code: "USD", label: "Dollar ($)" },
];

export function boutiqueNiveau(code) {
  return BOUTIQUE_NIVEAUX.find((n) => n.code === code) || null;
}

export function isProduitVisible(p) {
  return Boolean(p && p.available && p.titre);
}

// Achetable : visible ET prix renseigné. Une fiche sans prix s'affiche en
// « bientôt disponible » plutôt qu'avec un bouton de commande.
export function isProduitAchetable(p) {
  return isProduitVisible(p) && Number(p.prix) > 0 && p.badge !== "Bientôt";
}

// Le cahier à annoncer sur les pages d'un cours : un cahier sans prix n'a pas
// d'annonce, puisque sa fiche n'a pas de bouton de commande.
export function cahierDuCours(list, coursId) {
  return (list || []).find((p) => p.cours === coursId && isProduitAchetable(p)) || null;
}

// Le cœur de l'accroche, pour les endroits où la phrase entière ne tient pas :
// « 190 QCM corrigés, 18 exercices et 3 examens blancs ».
export function accrocheCourte(p) {
  return String(p?.sousTitre || "")
    .replace(/^le module expliqué en français simple,\s*/i, "")
    .replace(/\s+pour réussir .*$/i, "")
    .trim();
}

// « de Comptabilité », mais « d'Économétrie ».
export function deModule(nom) {
  const s = String(nom || "");
  return /^[aeiouh]/i.test(s.normalize("NFD")) ? `d'${s}` : `de ${s}`;
}

export function formatPrix(value, devise = "MAD") {
  const n = Number(value);
  if (!Number.isFinite(n) || n <= 0) return "Gratuit";
  const s = Number.isInteger(n) ? String(n) : n.toFixed(2).replace(".", ",");
  if (devise === "EUR") return `${s} €`;
  if (devise === "USD") return `${s} $`;
  return `${s} DH`;
}

export function remisePct(p) {
  const a = Number(p?.prix);
  const b = Number(p?.prixBarre);
  if (!(a > 0 && b > a)) return 0;
  return Math.round((1 - a / b) * 100);
}

// Lien de commande : ouvre WhatsApp avec un message qui nomme le cahier et son
// prix, pour savoir tout de suite lequel l'étudiant veut.
export function commandeHref(p) {
  const prix = Number(p?.prix) > 0 ? ` (${formatPrix(p.prix, p.devise)})` : "";
  const nom = String(p?.titre || "").replace(/^(cahier de préparation|دفتر التحضير)\s*[—–:-]\s*/i, "");
  // Cahier en arabe : message en arabe, comme le cahier.
  const message = p?.langue === "ar" ? `السلام عليكم، أريد شراء دفتر «${nom}»${prix}.` : `Bonjour, je veux acheter le cahier « ${nom} »${prix}.`;
  return `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(message)}`;
}

// Le cours gratuit lié à un cahier : un cours FSJES (cours.json, /cours/<id>)
// ou un cours de Droit (droit.json, /droit/<id>, en français ou en arabe).
export function coursLieHref(cours) {
  if (!cours) return "";
  return `${cours.espace === "droit" ? "/droit" : "/cours"}/${encodeURIComponent(cours.id)}`;
}

// ---------------------------------------------------------------------------
// Détails d'un cahier pour sa fiche (« comment est fait le cahier ») : chiffres,
// plan d'un chapitre et sommaire en trois temps. Tout est lu au build dans le
// texte de la fiche (accroche, points forts, description, sommaire), qui suit
// le même modèle pour tous les cahiers (recette V2) : rien à saisir en plus, et
// la fiche reste juste quand on modifie le texte dans la console.
// ---------------------------------------------------------------------------

const NOMBRES = { deux: 2, trois: 3, quatre: 4 };
const nombre = (s) => (s == null ? null : NOMBRES[String(s).toLowerCase()] ?? Number(s));

// « a, b (x, y), c et d » → [a, b (x, y), c, d], sans couper dans les parenthèses.
function decouperListe(s, ar) {
  const parts = [];
  let depth = 0;
  let cur = "";
  for (const ch of s) {
    if (ch === "(") depth++;
    if (ch === ")") depth--;
    if (depth === 0 && (ch === "," || ch === "،")) {
      parts.push(cur);
      cur = "";
      continue;
    }
    cur += ch;
  }
  parts.push(cur);
  let out = parts.map((x) => x.trim()).filter(Boolean);
  if (!ar && out.length) {
    const last = out.pop();
    const m = last.match(/^(.*?)\s+et\s+((?:des|de|un|une|le|la|les|\d+)\s.*)$/);
    if (m) out.push(m[1], m[2]);
    else out.push(last);
  }
  return out.map((x) =>
    x
      .replace(/\*\*/g, "")
      .replace(/^و(?=\S)/, "")
      .replace(/^(et|puis)\s+/, "")
      .trim()
  );
}

// Plan d'un chapitre, lu dans la phrase « Chaque chapitre suit le même plan : … »
// (« في كل محور: … » en arabe). Un bloc = { titre, detail } : le détail vient
// des parenthèses ou de ce qui suit « : » (exemples de cas pratiques).
function blocsDuChapitre(description, ar) {
  const desc = String(description || "").replace(/\*\*/g, "");
  const m = ar ? desc.match(/في كل (?:محور|مادة)[^:：]*[:：]\s*([^.\n]+)/) : desc.match(/Chaque (?:chapitre|thème|partie)[^:]*:\s*([^\n]+?)\.(?:\s|$)/);
  if (!m) return [];
  const [tete, ...reste] = m[1].split(/\s:\s/);
  const exemples = reste.join(" : ").trim();
  let parts = decouperListe(tete, ar);
  if (!ar) {
    parts = parts.flatMap((x) => x.split(/\s+et\s+(?=des (?:cas|exercices))/));
    const fusion = [];
    for (const x of parts) {
      const prev = fusion[fusion.length - 1];
      if (prev && /^pas à pas$/.test(x)) fusion[fusion.length - 1] = `${prev}, ${x}`;
      else if (prev && /^les \S+$/.test(prev) && /^les /.test(x)) fusion[fusion.length - 1] = `${prev}, ${x}`;
      else fusion.push(x);
    }
    parts = fusion.map((x) => x.replace(/^15 QCM$/, "15 QCM corrigés"));
  }
  return parts.map((x, i) => {
    const s = x.charAt(0).toUpperCase() + x.slice(1);
    const paren = s.match(/^(.*?)\s*\(([^)]*)\)\s*$/);
    if (i === parts.length - 1 && exemples) return { titre: s, detail: exemples.charAt(0).toUpperCase() + exemples.slice(1) };
    if (paren) return { titre: paren[1], detail: paren[2] };
    return { titre: s, detail: "" };
  });
}

// Sommaire en trois temps : avant les chapitres (plan de révision, lexique),
// les chapitres du cours, puis la préparation de l'épreuve (méthode, examens
// blancs, mémo). « Chapitre 3 · Titre » → { num: "3", titre: "Titre" }.
function sommaireEnTemps(sommaire) {
  const lignes = (sommaire || []).map((s) => {
    const m = String(s).match(/^(Chapitre|Partie|Thème|المحور|الجزء)\s+(\d+)\s*[·:—–-]\s*(.+)$/);
    return m ? { type: m[1], num: m[2], titre: m[3].trim(), chapitre: /^(Chapitre|Thème|المحور)$/.test(m[1]) } : { type: "", num: "", titre: String(s).trim(), chapitre: false };
  });
  const premier = lignes.findIndex((l) => l.chapitre);
  if (premier < 0) return null;
  let dernier = premier;
  lignes.forEach((l, i) => {
    if (l.chapitre) dernier = i;
  });
  return { avant: lignes.slice(0, premier), chapitres: lignes.slice(premier, dernier + 1), apres: lignes.slice(dernier + 1) };
}

export function contenuCahier(p) {
  if (!p) return null;
  const ar = p.langue === "ar";
  const txt = [p.sousTitre, ...(p.pointsForts || []), p.description, ...(p.sommaire || [])].join("\n").replace(/\*\*/g, "");
  const c = {};
  if (!ar) {
    c.qcm = nombre(txt.match(/(\d+) QCM/)?.[1]);
    c.questions = nombre(txt.match(/(\d+) questions de cours/)?.[1]);
    const ex = String(p.sousTitre || "").match(/(\d+) (cas pratiques|cas|exercices)/) || txt.match(/(\d+) (cas pratiques|cas|exercices)/);
    c.exercices = nombre(ex?.[1]);
    c.exercicesNom = ex?.[2] === "cas" ? "cas corrigés" : ex?.[2] === "cas pratiques" ? "cas pratiques corrigés" : "exercices corrigés";
    c.examens = nombre(txt.match(/(\d+|deux|trois|quatre) examens blancs/i)?.[1]);
    c.termes = nombre(txt.match(/(\d+) (?:mots|termes)/)?.[1]);
  } else {
    c.qcm = nombre(txt.match(/(\d+) سؤالا (?:مصححا|متعدد)/)?.[1]);
    c.questions = nombre(txt.match(/(\d+) سؤالا مباشرا/)?.[1]);
    const ex = txt.match(/(\d+) (نوازل|نازلة|حالة|حالات)/);
    c.exercices = nombre(ex?.[1]);
    c.exercicesNazila = /نواز|نازلة/.test(ex?.[2] || "");
    c.examens = nombre(txt.match(/و?(\d+) امتحانات/)?.[1]) || (/ثلاثة امتحانات/.test(txt) ? 3 : null);
    c.termes = nombre(txt.match(/(\d+) مصطلحا/)?.[1]);
  }
  const temps = sommaireEnTemps(p.sommaire);
  return {
    ...c,
    chapitres: temps ? temps.chapitres.length : 0,
    blocs: blocsDuChapitre(p.description, ar),
    temps,
    planRevision: (p.sommaire || []).some((s) => /plan de révision|برنامج المراجعة/.test(s)),
  };
}

export function produitImage(path) {
  if (!path) return "";
  if (/^(https?:)?\/\//.test(path)) return path;
  return path.startsWith("/") ? path : "/" + path;
}

export function trierProduits(list) {
  return [...list].sort(
    (a, b) =>
      Number(Boolean(b.vedette)) - Number(Boolean(a.vedette)) ||
      String(b.dateAjout || "").localeCompare(String(a.dateAjout || "")) ||
      String(a.titre).localeCompare(String(b.titre), "fr")
  );
}
