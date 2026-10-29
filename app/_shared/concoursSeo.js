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
// collisions sont résolues sur la liste entière (« Formation initiale »,
// « sujet 2 »). « Formation continue » figure toujours dans le titre.
import { niveauLabel, niveauOf } from "../../lib/concoursNiveaux";
import { DESCRIPTION_MAX, fitTitle, clampDescription } from "./seoText";

const propre = (s) => String(s || "").replace(/\s+/g, " ").trim();
const cle = (s) =>
  String(s || "")
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]/gi, "")
    .toLowerCase();
const SIGLE = /^[A-Z][A-Z0-9.\- ]{1,11}$/;
const ARABE = /[؀-ۿ]/;
const TITLE_TOLERE = 72;
// Titre en arabe : Google coupe au pixel, et une lettre arabe est plus étroite
// qu'une lettre latine (mesuré le 2026-10-24 en Arial 20 px : 7,5 à 8,3 px par
// caractère sur les titres des sujets en arabe, contre 9,5 en français). 72
// caractères tiennent dans les ~600 px, « الموضوع والتصحيح » compris.
const TITLE_MAX_AR = 72;

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

// « Master Droit » devant « Droit des affaires » : le mot n'est pas répété
// (« Concours Master Droit des affaires », pas « Master Droit Droit des affaires »).
function sansRedite(niveau, nom) {
  const dernier = niveau.split(" ").pop();
  return nom && niveau.includes(" ") && cle(nom.split(" ")[0]) === cle(dernier) ? niveau.slice(0, -dernier.length).trim() : niveau;
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
  const niveau = niveauLabel(c);
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

  // Sujet en arabe (Masters de droit) : titre en arabe, sur l'intitulé arabe
  // du master ; la description reste en français, sur son nom français
  // (`master_fr`).
  if (c.langue === "ar" && ARABE.test(l.complet)) {
    const fr = c.master_fr ? formes({ ...c, langue: undefined, master_reel: c.master_fr }, hasCorrige, precision) : {};
    const titres = [];
    for (const suite of [hasCorrige ? " : الموضوع والتصحيح" : " : الموضوع", ""]) {
      for (const lieu of [lieuLong, lieuCourt]) titres.push(`ماستر ${l.complet} — ${lieu}${annee}${p}${suite}`);
    }
    return {
      titres,
      titreMax: TITLE_MAX_AR,
      sujet: fr.sujet || `${niveau} ${deLa(lieuLong)}${annee}`,
      sujetMoyen: fr.sujetMoyen,
      sujetCourt: fr.sujetCourt,
      sigle: fr.sigle,
      variante: l.variante,
    };
  }

  const noms = [l.sigle && l.complet && `${l.complet} (${l.sigle})`, l.complet, l.sigle].filter(Boolean);
  const titres = [];
  for (const suite of [hasCorrige ? " : sujet et corrigé" : " : sujet", ""]) {
    for (const nom of noms) for (const lieu of [lieuLong, lieuCourt]) titres.push(`Concours ${sansRedite(niveau, nom)} ${nom} ${lieu}${annee}${p}${suite}`);
  }
  if (!titres.length) titres.push(`Concours ${niveau} ${lieuLong}${annee}${p}`);
  // Nom trop long pour tenir : l'essentiel d'abord, le nom complet ensuite.
  const titreNomLong = l.complet ? `Concours ${niveau} ${lieuCourt}${annee}${p} : ${l.complet}` : "";

  const nomCourt = l.complet && (l.complet.length <= 45 || !l.sigle) ? l.complet : l.sigle || l.complet;
  return {
    titres,
    titreNomLong,
    sujet: `${sansRedite(niveau, nomCourt)}${nomCourt ? ` ${nomCourt}` : ""} ${deLa(lieuLong)}${annee}`,
    sujetMoyen: `${sansRedite(niveau, nomCourt)}${nomCourt ? ` ${nomCourt}` : ""} ${deLa(lieuCourt)}${annee}`,
    sujetCourt: `${niveau}${l.sigle ? ` ${l.sigle}` : ""} ${deLa(lieuCourt)}${annee}`,
    sigle: Boolean(l.sigle),
    variante: l.variante,
  };
}

function description(c, hasCorrige, f, precision = "") {
  const [offre, offreCourte] = hasCorrige
    ? ["énoncé complet, corrigé indicatif et PDF gratuit", "énoncé, corrigé et PDF gratuits"]
    : ["énoncé complet et PDF gratuit", "énoncé et PDF gratuits"];
  const p = precision ? ` (${precision})` : "";
  // Le nom du master d'abord (ou son sigle) : on raccourcit la phrase avant de
  // le perdre. Sans sigle, la forme courte (`sujetCourt`) ne dit plus que
  // « Master Droit de la FSJES Tanger 2024 » : 15 des 36 sujets de droit en
  // arabe en étaient là (octobre 2026), dont deux descriptions identiques.
  const bases = [
    `Sujet réel du concours ${f.sujet}${p} : ${offre}.`,
    f.sigle && `Sujet réel du concours ${f.sujetCourt}${p} : ${offre}.`,
    `Sujet réel du concours ${f.sujet}${p} : ${offreCourte}.`,
    `Concours ${f.sujet}${p} : ${offreCourte}.`,
    f.sujetMoyen && `Concours ${f.sujetMoyen}${p} : ${offreCourte}.`,
    f.sujetCourt && `Sujet réel du concours ${f.sujetCourt}${p} : ${offre}.`,
  ].filter(Boolean);
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
    let f = formes(c, hasCorrige, precision);
    // La formation continue est un autre concours que la formation initiale
    // (autre public, autre épreuve) : on le dit toujours, même sans homonyme.
    if (!precision && /formation continue/i.test(f.variante)) {
      precision = "formation continue";
      f = formes(c, hasCorrige, precision);
    }
    const complet = fitTitle(f.titres, f.titreMax);
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
      // Seul le champ en double change : deux descriptions identiques ne
      // valent pas un « (sujet 2) » dans un titre déjà unique.
      doublons.forEach((c, i) => {
        const v = variantes[i];
        const distincte = v && variantes.filter((x) => x === v).length === 1;
        seo.set(c.id, { ...seo.get(c.id), [champ]: calcule(c, distincte ? v : `sujet ${i + 1}`)[champ] });
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
