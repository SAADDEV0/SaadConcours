"use client";

import { useEffect, useRef } from "react";
import { chromeHtml, chromeScript } from "../_shared/chrome";
import { addWatermark, addSiteHeader } from "../_shared/pdfWatermark";

const MARKUP = `
${chromeHtml({ active: "eval", showSearch: false })}

<div class="eval-view" id="viewEval">

  <div id="evalModuleList">
    <h2 class="eval-title">📝 Évaluation par module</h2>
    <p class="eval-sub">Choisis un module pour t'auto-évaluer en conditions QCM. Ton score s'affiche à la fin.</p>
    <div class="grid" id="evalModuleGrid"></div>
  </div>

  <div id="evalQuizWrap" style="display:none;">
    <div class="eval-toolbar">
      <button class="reset-btn" id="evalBack">← Modules</button>
      <div class="eval-chapter-chips" id="evalChapterChips"></div>
      <div class="eval-progress" id="evalProgress"></div>
    </div>
    <h2 class="eval-title" id="evalQuizTitle"></h2>
    <div id="evalScoreBanner"></div>
    <div id="evalQuestions"></div>
    <div class="eval-submit-bar">
      <button class="dl-btn" id="evalSubmitBtn">✅ Valider mes réponses</button>
      <button class="reset-btn" id="evalRetryBtn" style="display:none;">🔄 Refaire l'évaluation à zéro</button>
      <button class="reset-btn" id="evalPdfBtn" style="display:none;">⬇ Télécharger en PDF (avec réponses)</button>
    </div>
  </div>

</div>

<footer>Base de données collaborative de sujets de concours réels — sans corrigés. Sources citées dans chaque fiche.</footer>
`;

export default function EvaluationPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    chromeScript();

    const root = containerRef.current;
    const $ = (sel) => root.querySelector(sel);
    const $$ = (sel) => root.querySelectorAll(sel);

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

    let evalRegistry = [];
    let evalCurrentQuiz = null;
    let evalCurrentChapter = "Tous";
    let evalUserAnswers = {};
    let evalSubmitted = false;

    function loadEvalRegistry() {
      fetch("/api/quiz")
        .then((r) => r.json())
        .then((data) => {
          evalRegistry = data.map((m) => ({ ...m, nb_questions: (m.questions || []).length }));
          renderEvalModuleList();
        })
        .catch(() => {
          $("#evalModuleGrid").innerHTML = `<div class="empty-state">Impossible de charger les modules d'évaluation.</div>`;
        });
    }

    function renderEvalModuleList() {
      $("#evalQuizWrap").style.display = "none";
      $("#evalModuleList").style.display = "block";
      const grid = $("#evalModuleGrid");
      grid.innerHTML = "";
      evalRegistry.forEach((m) => {
        const card = document.createElement("div");
        card.className = "eval-module-card" + (m.available ? "" : " disabled");
        card.innerHTML = `
          <div class="eval-module-name">${escapeHtml(m.module)}</div>
          <div class="eval-module-desc">${escapeHtml(m.title)}</div>
          <div class="eval-module-meta">${m.available ? `${m.nb_questions} questions` : "Bientôt disponible"}</div>
        `;
        if (m.available) {
          card.addEventListener("click", () => loadEvalQuiz(m));
        }
        grid.appendChild(card);
      });
    }

    function loadEvalQuiz(meta) {
      evalCurrentQuiz = meta;
      evalCurrentChapter = "Tous";
      evalUserAnswers = {};
      evalSubmitted = false;
      $("#evalModuleList").style.display = "none";
      $("#evalQuizWrap").style.display = "block";
      $("#evalQuizTitle").textContent = meta.title;
      renderEvalChapterChips();
      renderEvalQuestions();
    }

    function renderEvalChapterChips() {
      const wrap = $("#evalChapterChips");
      wrap.innerHTML = "";
      const chips = ["Tous", ...evalCurrentQuiz.chapters];
      chips.forEach((ch) => {
        const chip = document.createElement("span");
        chip.className = "chip" + (ch === evalCurrentChapter ? " active" : "");
        chip.textContent = ch === "Tous" ? `Tous (${evalCurrentQuiz.questions.length})` : ch;
        chip.addEventListener("click", () => {
          evalCurrentChapter = ch;
          evalUserAnswers = {};
          evalSubmitted = false;
          renderEvalChapterChips();
          renderEvalQuestions();
        });
        wrap.appendChild(chip);
      });
    }

    function currentEvalQuestions() {
      if (evalCurrentChapter === "Tous") return evalCurrentQuiz.questions;
      return evalCurrentQuiz.questions.filter((q) => q.chapter === evalCurrentChapter);
    }

    function renderEvalQuestions() {
      const qs = currentEvalQuestions();
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
        card.innerHTML = `
          <div class="eval-q-num">Q${idx + 1} / ${qs.length} — ${escapeHtml(q.section || q.chapter)}</div>
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
        card.querySelectorAll("input").forEach((inp) => {
          inp.addEventListener("change", () => {
            if (evalSubmitted) return;
            if (!evalUserAnswers[q.id]) evalUserAnswers[q.id] = new Set();
            if (inp.checked) evalUserAnswers[q.id].add(inp.value);
            else evalUserAnswers[q.id].delete(inp.value);
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
      const qs = currentEvalQuestions();
      evalSubmitted = true;
      let correctCount = 0;
      const chapterStats = {};

      qs.forEach((q) => {
        const card = root.querySelector(`.eval-q-card[data-qid="${q.id}"]`);
        if (!card) return;
        const userSet = evalUserAnswers[q.id] || new Set();
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

    function stripInlineMd(s) {
      return s.replace(/\*\*/g, "").replace(/\$\$?/g, "").trim();
    }

    function downloadEvalPDF() {
      const qs = currentEvalQuestions();
      const { jsPDF } = window.jspdf;
      const doc = new jsPDF({ unit: "mm", format: "a4" });
      const marginX = 16;
      const pageW = doc.internal.pageSize.getWidth();
      const pageH = doc.internal.pageSize.getHeight();
      const maxWidth = pageW - marginX * 2;
      const bottomLimit = pageH - 18;
      let y = 26;

      function ensureSpace(need) {
        if (y + need > bottomLimit) {
          doc.addPage();
          y = 26;
        }
      }

      function wrapText(text, size, bold, indent, color) {
        doc.setFont(undefined, bold ? "bold" : "normal");
        doc.setFontSize(size);
        doc.setTextColor(...color);
        const wrapped = doc.splitTextToSize(text, maxWidth - indent);
        for (const wl of wrapped) {
          ensureSpace(size * 0.42);
          doc.text(wl, marginX + indent, y);
          y += size * 0.42;
        }
      }

      doc.setFont(undefined, "bold");
      doc.setFontSize(15);
      doc.setTextColor(20, 20, 25);
      wrapText(evalCurrentQuiz.title, 15, true, 0, [20, 20, 25]);
      y += 1;
      doc.setDrawColor(200, 200, 210);
      doc.line(marginX, y, pageW - marginX, y);
      y += 6;
      doc.setFontSize(9);
      doc.setTextColor(120, 120, 130);
      wrapText(
        `Module : ${evalCurrentQuiz.module} — ${evalCurrentChapter} — ${qs.length} questions — Généré depuis SaadConcours`,
        9,
        false,
        0,
        [120, 120, 130]
      );
      y += 6;

      qs.forEach((q, idx) => {
        ensureSpace(14);
        wrapText(`Q${idx + 1}. ${q.question}`, 11, true, 0, [20, 20, 25]);
        y += 1.5;
        q.options.forEach((o) => {
          const isCorrect = q.correct.includes(o.letter);
          ensureSpace(9);
          wrapText(`${o.letter}. ${o.text}`, 9.5, false, 5, isCorrect ? [30, 140, 90] : [70, 70, 80]);
        });
        y += 1;
        ensureSpace(9);
        const correctLetters = q.correct.join(", ").toUpperCase();
        wrapText(
          `Réponse(s) correcte(s) : ${correctLetters}${q.justification ? " — " + q.justification : ""}`,
          9,
          true,
          0,
          [30, 140, 90]
        );
        y += 5;
      });

      addWatermark(doc);
      addSiteHeader(doc);
      doc.save(`${evalCurrentQuiz.id}_${evalCurrentChapter.replace(/[^a-zA-Z0-9]+/g, "_").slice(0, 30)}.pdf`);
    }

    $("#evalSubmitBtn").addEventListener("click", submitEval);
    $("#evalRetryBtn").addEventListener("click", () => {
      evalUserAnswers = {};
      evalSubmitted = false;
      renderEvalQuestions();
    });
    $("#evalBack").addEventListener("click", renderEvalModuleList);
    $("#evalPdfBtn").addEventListener("click", () => downloadEvalPDF());

    loadEvalRegistry();
  }, []);

  return <div ref={containerRef} dangerouslySetInnerHTML={{ __html: MARKUP }} />;
}
