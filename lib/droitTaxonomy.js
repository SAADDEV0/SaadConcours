// Licence de Droit (FSJES), du S1 au S6 : d'abord le tronc commun, puis la
// filière (droit privé ou droit public) et son parcours. Les deux langues
// d'enseignement ont leurs propres filières et parcours (intitulés de la
// FSJES Aïn Chock, octobre 2026). Partagé par les pages publiques (app/droit),
// la console (app/admin/_lib/collections.js) et le sitemap.
//
// Un module de public/data/droit.json porte :
//   langue    "fr" (droit en français) ou "ar" (القانون بالعربية) ;
//   semestre  "S1" … "S6" ;
//   filiere   "" = tronc commun, sinon le code d'une filière de sa langue ;
//   parcours  "" = commun à la filière, sinon le code d'un de ses parcours.
// Le tronc commun n'est pas lié à des semestres fixes : le découpage varie
// d'une faculté à l'autre, c'est `filiere` qui range le module.

export const DROIT_LANGUES = [
  { code: "fr", label: "Droit en français", court: "Français", lang: "fr" },
  { code: "ar", label: "القانون باللغة العربية", court: "العربية", lang: "ar" },
];

export const DROIT_FILIERES = [
  {
    code: "prive",
    langue: "fr",
    label: "Droit privé",
    parcours: [
      { code: "droit-financier-affaires", label: "Droit financier et des affaires" },
      { code: "metiers-droit-justice", label: "Métiers du droit et de la justice" },
    ],
  },
  {
    code: "public",
    langue: "fr",
    label: "Droit public",
    parcours: [
      { code: "etudes-politiques-internationales", label: "Études politiques et internationales" },
      { code: "science-politique-droit-constitutionnel", label: "Science politique et droit constitutionnel" },
      { code: "geopolitique-veille-strategique", label: "Géopolitique et veille stratégique" },
    ],
  },
  {
    code: "prive-ar",
    langue: "ar",
    label: "القانون الخاص",
    fr: "Droit privé (arabe)",
    parcours: [
      { code: "sciences-penales-securitaires", label: "العلوم الجنائية والأمنية", fr: "Sciences pénales et sécuritaires" },
      { code: "metiers-juridiques-judiciaires", label: "المهن القانونية والقضائية", fr: "Métiers juridiques et judiciaires" },
      { code: "droit-finances-affaires", label: "قانون المال والأعمال", fr: "Droit des finances et des affaires" },
    ],
  },
  {
    code: "public-ar",
    langue: "ar",
    label: "القانون العام",
    fr: "Droit public (arabe)",
    parcours: [
      {
        code: "contentieux-audit-ingenierie-fiscale",
        label: "المنازعات العمومية والتدقيق المالي والهندسة الضريبية",
        fr: "Contentieux public, audit financier et ingénierie fiscale",
      },
      { code: "administration-developpement", label: "الإدارة والتنمية", fr: "Administration et développement" },
    ],
  },
];

export const DROIT_SEMESTRES = Array.from({ length: 6 }, (_, i) => ({
  code: `S${i + 1}`,
  label: `Semestre ${i + 1}`,
}));

export const TRONC_COMMUN = { fr: "Tronc commun", ar: "الجذع المشترك" };

export function droitLangueInfo(code) {
  return DROIT_LANGUES.find((l) => l.code === code) || DROIT_LANGUES[0];
}

export function droitFilieresFor(langue) {
  return DROIT_FILIERES.filter((f) => f.langue === (langue || "fr"));
}

export function droitFiliereInfo(code) {
  return DROIT_FILIERES.find((f) => f.code === code) || null;
}

export function droitParcoursFor(filiere) {
  return droitFiliereInfo(filiere)?.parcours || [];
}

export function droitParcoursInfo(filiere, code) {
  return droitParcoursFor(filiere).find((p) => p.code === code) || null;
}

// « Tronc commun », « Droit privé », « Droit privé · Métiers du droit… » :
// dans la langue du module (le libellé arabe pour un module en arabe).
export function droitRangLabel(c) {
  const f = droitFiliereInfo(c?.filiere);
  if (!f) return TRONC_COMMUN[c?.langue === "ar" ? "ar" : "fr"];
  const p = droitParcoursInfo(f.code, c.parcours);
  return p ? `${f.label} · ${p.label}` : f.label;
}

// Même chose en français, pour la console.
export function droitRangLabelFr(c) {
  const f = droitFiliereInfo(c?.filiere);
  if (!f) return "Tronc commun";
  const p = droitParcoursInfo(f.code, c.parcours);
  return [f.fr || f.label, p && (p.fr || p.label)].filter(Boolean).join(" · ");
}

// Français puis arabe ; tronc commun, puis les filières dans l'ordre du
// registre, chaque parcours après les modules communs à sa filière ; puis
// S1 → S6 et l'ordre alphabétique.
const ORDRE_FILIERES = ["", ...DROIT_FILIERES.map((f) => f.code)];

function rang(c) {
  const l = c.langue === "ar" ? 1 : 0;
  const f = ORDRE_FILIERES.indexOf(c.filiere || "");
  const p = c.parcours ? droitParcoursFor(c.filiere).findIndex((x) => x.code === c.parcours) + 1 : 0;
  const s = c.semestre ? Number(c.semestre.slice(1)) : 9;
  return [l, f === -1 ? ORDRE_FILIERES.length : f, p, s];
}

export function droitSortComparator(a, b) {
  const ra = rang(a);
  const rb = rang(b);
  for (let i = 0; i < ra.length; i++) if (ra[i] !== rb[i]) return ra[i] - rb[i];
  return (a.module || "").localeCompare(b.module || "", a.langue === "ar" ? "ar" : "fr");
}
