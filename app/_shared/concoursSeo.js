// Titre et meta description des fiches concours (/concours/<id>).
//
// Le titre suit la recherche d'un étudiant (« concours master cca fsjes
// settat 2015 corrigé ») mais doit tenir en 65 caractères (seoText.js) : les
// libellés bruts des masters vont jusqu'à 300 caractères (« Économétrie
// Appliquée à la Modélisation des Comportements Macro et Microéconomiques »),
// et 278 titres sur 282 étaient coupés par Google en septembre 2026. On part
// donc de la forme la plus riche et on raccourcit par étapes : sigle du master
// au lieu du nom complet, établissement sans la ville, sans « : sujet et
// corrigé ». Un nom de master complet reste préférable à un nom tronqué :
// jusqu'à TITLE_TOLERE caractères on le garde entier (Google coupe au pixel,
// vers 580 px, soit 65 à 70 caractères de texte courant). Au-delà (une
// cinquantaine de noms comme « Économétrie Appliquée à la Modélisation des
// Comportements Macro et Microéconomiques »), établissement et année passent
// devant le nom : Google ne coupe plus que la fin du nom, et tous ses mots
// restent dans le titre indexé — un nom abrégé à la main les perdrait.
//
// Deux fiches ne partagent jamais un titre ni une description : les
// collisions sont résolues sur la liste entière (« Formation continue »,
// « sujet 2 »).
import { isLicenceExcellence } from "../../lib/concoursNiveaux";
import { DESCRIPTION_MAX, fitTitle, clampDescription } from "./seoText";

const propre = (s) => String(s || "").replace(/\s+/g, " ").trim();
const cle = (s) =>
  String(s || "")
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]/gi, "")
    .toLowerCase();
const SIGLE = /^[A-Z][A-Z0-9.\- ]{1,11}$/;
const TITLE_TOLERE = 72;

// Villes saisies sans accent ni espace dans les anciennes fiches.
const VILLES = { ElJadida: "El Jadida", BeniMellal: "Béni Mellal", Meknes: "Meknès", Kenitra: "Kénitra", Tetouan: "Tétouan", Fes: "Fès", Sale: "Salé" };

// « FSJES Agadir (Ibn Zohr) » → « FSJES Agadir », « Faculté Polydisciplinaire
// de Tétouan » → « FP Tétouan ». Forme longue : + la ville si l'établissement
// ne la dit pas ; forme courte : sans la ville quand l'établissement suffit
// (« FSJES Ain Sebaa »), jamais pour un « FSJES » tout seul.
function lieux(c) {
  const etab = propre(
    String(c.etablissement || "")
      .replace(/\([^)]*\)/g, " ")
      .replace(/^Faculté Polydisciplinaire\s+(?:de\s+|d')?/i, "FP ")
      .replace(/^Faculté d'Économie et de Gestion\s+/i, "FEG ")
  );
  const ville = VILLES[c.ville] || c.ville || "";
  const long = ville && !cle(etab).includes(cle(ville)) ? propre(`${etab} ${ville}`) : etab;
  return [...new Set([long, etab.includes(" ") ? etab : long])];
}

// « de la FSJES », « de l'ENCG », « de l'EST ».
const deLa = (lieu) => (/^[AEIOUYÉ]/i.test(lieu) ? `de l'${lieu}` : `de la ${lieu}`);

function libelles(c) {
  const brut = propre(c.master_reel || c.filiere || "").replace(
    /^(master( spécialisé)?( en)?|licence( parcours)?( d'excellence)?|parcours d'excellence)\s+/i,
    ""
  );
  // Épreuve commune à plusieurs masters (« A / B / C ») : on dit combien.
  const communs = brut.split(" / ");
  if (communs.length > 1) return { commune: communs.length };
  const parentheses = [...brut.matchAll(/\(([^)]+)\)/g)].map((m) => m[1].trim());
  // « Comptabilité, Contrôle et Audit (CCA) » → « CCA », « Master ESMA
  // (Économétrie…) » → « ESMA », « (G.F.C.F) » → « GFCF », « LE CCA » → « CCA ».
  const sigle = (parentheses.find((s) => SIGLE.test(s)) || (brut.match(/\b[A-Z]{3,6}\b/) || [])[0] || "")
    .replace(/\./g, "")
    .replace(/^LE\s+/, "");
  // « … — Formation continue », « (Promotion 1) » : précision qui sert
  // seulement à départager deux fiches de même titre.
  const variante = propre((brut.match(/\s—\s(.+)$/) || [])[1] || parentheses.find((s) => !SIGLE.test(s)) || "");
  const complet = propre(brut.replace(/\s—\s.+$/, "").replace(/\([^)]*\)/g, " ")).replace(/[\s,;:]+$/, "");
  return { complet: complet === sigle ? "" : complet, sigle, variante };
}

function formes(c, hasCorrige, precision = "") {
  const niveau = isLicenceExcellence(c) ? "Licence d'excellence" : "Master";
  const [lieuLong, lieuCourt = lieuLong] = lieux(c);
  const annee = /^\d{4}$/.test(String(c.annee)) ? ` ${c.annee}` : "";
  const p = precision ? ` (${precision})` : "";
  const l = libelles(c);

  if (l.commune) {
    const commune = `épreuve commune à ${l.commune} masters`;
    return {
      titres: [
        `Concours ${niveau} ${lieuLong}${annee}${p} : ${commune}${hasCorrige ? " et corrigé" : ""}`,
        `Concours ${niveau} ${lieuLong}${annee}${p} : ${commune}`,
        `Concours ${niveau} ${lieuCourt}${annee}${p} : ${commune}`,
      ],
      sujet: `${niveau} ${deLa(lieuLong)}${annee} (${commune})`,
      variante: "",
    };
  }

  const noms = [l.sigle && l.complet && `${l.complet} (${l.sigle})`, l.complet, l.sigle].filter(Boolean);
  const titres = [];
  for (const suite of [hasCorrige ? " : sujet et corrigé" : " : sujet", ""]) {
    for (const nom of noms) for (const lieu of [lieuLong, lieuCourt]) titres.push(`Concours ${niveau} ${nom} ${lieu}${annee}${p}${suite}`);
  }
  if (!titres.length) titres.push(`Concours ${niveau} ${lieuLong}${annee}${p}`);
  // Nom trop long pour tenir : l'essentiel d'abord, le nom complet ensuite.
  const titreNomLong = l.complet ? `Concours ${niveau} ${lieuCourt}${annee}${p} : ${l.complet}` : "";

  const nomCourt = l.complet && (l.complet.length <= 45 || !l.sigle) ? l.complet : l.sigle || l.complet;
  return {
    titres,
    titreNomLong,
    sujet: `${niveau}${nomCourt ? ` ${nomCourt}` : ""} ${deLa(lieuLong)}${annee}`,
    sujetCourt: `${niveau}${l.sigle ? ` ${l.sigle}` : ""} ${deLa(lieuCourt)}${annee}`,
    variante: l.variante,
  };
}

function description(c, hasCorrige, f, precision = "") {
  const offre = hasCorrige ? "énoncé complet, corrigé indicatif et PDF gratuit" : "énoncé complet et PDF gratuit";
  const p = precision ? ` (${precision})` : "";
  const bases = [f.sujet, f.sujetCourt].filter(Boolean).map((s) => `Sujet réel du concours ${s}${p} : ${offre}.`);
  const base = bases.find((b) => b.length <= DESCRIPTION_MAX) || bases.at(-1);
  // Les matières rendent chaque description unique et portent des mots-clés ;
  // autant que la limite le permet, sans couper une matière.
  const modules = (c.modules || []).filter(Boolean);
  for (let n = modules.length; n > 0; n--) {
    const avec = `${base} Au programme : ${modules.slice(0, n).join(", ")}.`;
    if (avec.length <= DESCRIPTION_MAX) return avec;
  }
  return clampDescription(base);
}

// Calculé une fois par liste : une page relit toujours la même liste
// (getPublicConcours est mémoïsé par rendu).
const cache = new WeakMap();

function seoPourListe(list, corrigeIds) {
  const seo = new Map();
  const calcule = (c, precision) => {
    const hasCorrige = corrigeIds.has(c.id);
    const f = formes(c, hasCorrige, precision);
    const complet = fitTitle(f.titres);
    // Sinon : la forme complète la plus courte si elle reste dans la
    // tolérance, puis l'essentiel devant le nom.
    const title = complet.length <= TITLE_TOLERE || !f.titreNomLong ? complet : f.titreNomLong;
    return { title, description: description(c, hasCorrige, f, precision), variante: f.variante };
  };
  for (const c of list) seo.set(c.id, calcule(c));
  for (const champ of ["title", "description"]) {
    const groupes = new Map();
    for (const c of list) {
      const v = seo.get(c.id)[champ];
      groupes.set(v, [...(groupes.get(v) || []), c]);
    }
    for (const doublons of groupes.values()) {
      if (doublons.length < 2) continue;
      const variantes = doublons.map((d) => seo.get(d.id).variante);
      doublons.forEach((c, i) => {
        const v = variantes[i];
        const distincte = v && variantes.filter((x) => x === v).length === 1;
        seo.set(c.id, calcule(c, distincte ? v : `sujet ${i + 1}`));
      });
    }
  }
  return seo;
}

// `corrigeIds` : ids des fiches qui ont un corrigé (dans concours.json ou en
// fichier), pour que le titre n'annonce jamais un corrigé absent.
export function concoursSeo(list, c, corrigeIds) {
  let seo = cache.get(list);
  if (!seo) {
    seo = seoPourListe(list, corrigeIds);
    cache.set(list, seo);
  }
  const { title, description } = seo.get(c.id);
  return { title, description };
}
