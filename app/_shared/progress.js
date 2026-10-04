// Progression de l'élève, gardée dans son navigateur (localStorage) : aucun
// compte, rien n'est envoyé au serveur. Toutes les lectures/écritures sont
// protégées — navigation privée, stockage plein ou bloqué : le site marche
// alors exactement comme avant, sans progression.

const READ_KEY = "sc_read"; // { "/bac/2bac/matiere/chapitre": horodatage, ... }
const LAST_KEY = "sc_last"; // { "/bac/2bac/matiere": { href, title, at }, ... } + "*" = dernier chapitre lu
const EVAL_BEST_KEY = "sc_eval_best"; // { quizId: { correct, total, pct, at } }
const evalAnswersKey = (quizId) => `sc_eval_answers_${quizId}`; // { questionId: ["a","c"] }

function readJson(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    const v = raw ? JSON.parse(raw) : null;
    return v && typeof v === "object" ? v : fallback;
  } catch {
    return fallback;
  }
}

function writeJson(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // Stockage indisponible : la progression n'est simplement pas gardée.
  }
}

function removeKey(key) {
  try {
    localStorage.removeItem(key);
  } catch {
    // idem
  }
}

// ---------- Chapitres lus ----------

// Chemin du module d'un chapitre : /bac/2bac/matiere/chapitre → /bac/2bac/matiere,
// /cours/module/chapitre → /cours/module.
export function modulePathOf(chapterPath) {
  return String(chapterPath).replace(/\/+$/, "").replace(/\/[^/]+$/, "");
}

export function markChapterRead(href, title) {
  const path = String(href).split(/[?#]/)[0].replace(/\/+$/, "");
  const at = Date.now();
  const read = readJson(READ_KEY, {});
  read[path] = at;
  writeJson(READ_KEY, read);
  const last = readJson(LAST_KEY, {});
  const entry = { href: path, title: String(title || "").slice(0, 140), at };
  last[modulePathOf(path)] = entry;
  last["*"] = entry;
  writeJson(LAST_KEY, last);
}

export function readChapters() {
  return readJson(READ_KEY, {});
}

// Dernier chapitre lu dans un module, ou sur tout le site avec "*".
export function lastChapter(modulePath = "*") {
  const v = readJson(LAST_KEY, {})[modulePath];
  return v && typeof v.href === "string" ? v : null;
}

// ---------- QCM (évaluations) ----------

export function loadEvalAnswers(quizId) {
  return readJson(evalAnswersKey(quizId), {});
}

export function saveEvalAnswers(quizId, answers) {
  if (Object.keys(answers).length) writeJson(evalAnswersKey(quizId), answers);
  else removeKey(evalAnswersKey(quizId));
}

export function evalBestScores() {
  return readJson(EVAL_BEST_KEY, {});
}

// Garde le meilleur score d'une évaluation complète (toutes les questions).
export function recordEvalScore(quizId, correct, total) {
  if (!total) return null;
  const pct = Math.round((correct / total) * 100);
  const all = evalBestScores();
  const prev = all[quizId];
  if (!prev || pct >= prev.pct) {
    all[quizId] = { correct, total, pct, at: Date.now() };
    writeJson(EVAL_BEST_KEY, all);
  }
  return all[quizId];
}
