"use client";

import { useEffect } from "react";
import { chromeScript } from "../../_shared/chrome";
import { downloadEvaluationPdf } from "../../_shared/evaluationPdf";

// This page is server-rendered for SEO (see page.js): the QCM description
// and chapter list are already real text in the initial response. This
// wires up the actual interactive quiz (chapter filter, questions,
// scoring, PDF) directly on the real per-quiz URL — the quiz used to only
// live in the /evaluation list-page SPA, reachable via a "Commencer"
// redirect; now clicking a module card is a plain navigation here, exactly
// like a concours/cours card. Mirrors CoursDetailClient.js.
function escapeHtml(s) {
  return String(s ?? "").replace(
    /[&<>"']/g,
    (m) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m])
  );
}
function mdLiteInline(s) {
  return escapeHtml(s)
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>");
}

// Une carte question, sans la réponse (la justification n'est remplie qu'à la
// validation). Sert au rendu serveur de la liste complète — les questions sont
// le contenu de la page, elles doivent être dans le HTML et pas seulement
// ajoutées après hydratation — puis à chaque re-rendu côté client.
function questionCardInner(q, idx, total) {
  return `
          <div class="eval-q-num">Q${idx + 1} / ${total} — ${escapeHtml(q.section || q.chapter)}</div>
          <div class="eval-q-text">${mdLiteInline(q.question)}</div>
          <div class="eval-hint">Choisis une ou plusieurs réponses — une réponse en trop compte comme fausse.</div>
          <div class="eval-opts">
            ${q.options
              .map(
                (o) => `
              <label class="eval-opt" data-letter="${o.letter}">
                <input type="checkbox" name="q${q.id}" value="${o.letter}">
                <span><strong>${o.letter}.</strong> ${escapeHtml(o.text)}</span>
              </label>
            `
              )
              .join("")}
          </div>
          <div class="eval-justif" style="display:none;"></div>
        `;
}

function questionsHtml(questions) {
  return questions.map((q, idx) => `<div class="eval-q-card" data-qid="${escapeHtml(q.id)}">${questionCardInner(q, idx, questions.length)}</div>`).join("");
}

export default function EvaluationDetailClient({ quiz }) {
  useEffect(() => {
    chromeScript();

    const $ = (sel) => document.querySelector(sel);

    let currentChapter = "Tous";
    let userAnswers = {};
    let submitted = false;

    function currentQuestions() {
      if (currentChapter === "Tous") return quiz.questions;
      return quiz.questions.filter((q) => q.chapter === currentChapter);
    }

    function renderChapterChips() {
      const wrap = $("#evalChapterChips");
      wrap.innerHTML = "";
      const chips = ["Tous", ...(quiz.chapters || [])];
      chips.forEach((ch) => {
        const chip = document.createElement("span");
        chip.className = "chip" + (ch === currentChapter ? " active" : "");
        chip.textContent = ch === "Tous" ? `Tous (${quiz.questions.length})` : ch;
        chip.addEventListener("click", () => {
          currentChapter = ch;
          userAnswers = {};
          submitted = false;
          renderChapterChips();
          renderQuestions();
        });
        wrap.appendChild(chip);
      });
    }

    function renderQuestions() {
      const qs = currentQuestions();
      $("#evalProgress").textContent = `${qs.length} question${qs.length > 1 ? "s" : ""}`;
      $("#evalScoreBanner").innerHTML = "";
      $("#evalSubmitBtn").style.display = "inline-flex";
      $("#evalRetryBtn").style.display = "none";
      $("#evalPdfBtn").style.display = "none";
      const wrap = $("#evalQuestions");
      wrap.innerHTML = "";
      qs.forEach((q, idx) => {
        const card = document.createElement("div");
        card.className = "eval-q-card";
        card.dataset.qid = q.id;
        card.innerHTML = questionCardInner(q, idx, qs.length);
        card.querySelectorAll("input").forEach((inp) => {
          inp.addEventListener("change", () => {
            if (submitted) return;
            if (!userAnswers[q.id]) userAnswers[q.id] = new Set();
            if (inp.checked) userAnswers[q.id].add(inp.value);
            else userAnswers[q.id].delete(inp.value);
          });
        });
        wrap.appendChild(card);
      });
    }

    function setsEqual(a, b) {
      if (a.size !== b.size) return false;
      for (const x of a) if (!b.has(x)) return false;
      return true;
    }

    function submitEval() {
      const qs = currentQuestions();
      submitted = true;
      let correctCount = 0;
      const chapterStats = {};

      qs.forEach((q) => {
        const card = document.querySelector(`.eval-q-card[data-qid="${q.id}"]`);
        if (!card) return;
        const userSet = userAnswers[q.id] || new Set();
        const correctSet = new Set(q.correct);
        const isCorrect = setsEqual(userSet, correctSet);
        if (isCorrect) correctCount++;

        if (!chapterStats[q.chapter]) chapterStats[q.chapter] = { correct: 0, total: 0 };
        chapterStats[q.chapter].total++;
        if (isCorrect) chapterStats[q.chapter].correct++;

        card.classList.add(isCorrect ? "correct" : "incorrect");
        card.querySelectorAll(".eval-opt").forEach((optEl) => {
          const letter = optEl.dataset.letter;
          optEl.querySelector("input").disabled = true;
          if (correctSet.has(letter)) optEl.classList.add("opt-correct");
          else if (userSet.has(letter)) optEl.classList.add("opt-wrong");
        });
        if (q.justification) {
          const j = card.querySelector(".eval-justif");
          j.style.display = "block";
          j.innerHTML = `💡 ${escapeHtml(q.justification)}`;
        }
      });

      const pct = qs.length ? Math.round((correctCount / qs.length) * 100) : 0;
      const chapterHtml = Object.entries(chapterStats)
        .map(([ch, s]) => `<span>${escapeHtml(ch.split("—")[0].trim())} : ${s.correct}/${s.total}</span>`)
        .join("");

      $("#evalScoreBanner").innerHTML = `
        <div class="eval-score-banner">
          <div class="eval-score-num">${correctCount} / ${qs.length}</div>
          <div class="eval-score-sub">Score : ${pct}%</div>
          <div class="eval-score-chapters">${chapterHtml}</div>
        </div>
      `;
      $("#evalScoreBanner").scrollIntoView({ behavior: "smooth", block: "start" });
      $("#evalSubmitBtn").style.display = "none";
      $("#evalRetryBtn").style.display = "inline-block";
      $("#evalPdfBtn").style.display = "inline-block";
    }

    function downloadEvalPDF() {
      downloadEvaluationPdf({ quiz, questions: currentQuestions(), chapter: currentChapter });
    }

    $("#evalSubmitBtn").addEventListener("click", submitEval);
    $("#evalRetryBtn").addEventListener("click", () => {
      userAnswers = {};
      submitted = false;
      renderQuestions();
    });
    $("#evalPdfBtn").addEventListener("click", downloadEvalPDF);

    renderChapterChips();
    renderQuestions();
  }, [quiz.id]);

  return (
    <div className="cd-card">
      <div className="eval-toolbar">
        <div className="eval-chapter-chips" id="evalChapterChips"></div>
        <div className="eval-progress" id="evalProgress"></div>
      </div>
      <div id="evalScoreBanner"></div>
      {/* Rendu au serveur (donc présent dans le HTML prérendu), remplacé à
         l'identique par renderQuestions() une fois les écouteurs posés. */}
      <div id="evalQuestions" dangerouslySetInnerHTML={{ __html: questionsHtml(quiz.questions || []) }} />
      <div className="eval-submit-bar">
        <button className="dl-btn" id="evalSubmitBtn">✅ Valider mes réponses</button>
        <button className="reset-btn" id="evalRetryBtn" style={{ display: "none" }}>🔄 Refaire l'évaluation à zéro</button>
        <button className="reset-btn" id="evalPdfBtn" style={{ display: "none" }}>⬇ Télécharger en PDF (avec réponses)</button>
      </div>
    </div>
  );
}
