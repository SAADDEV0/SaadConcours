"use client";

import { useEffect } from "react";
import { chromeScript, trackPdfDownload } from "../../_shared/chrome";
import { addWatermark, addSiteHeader, addFooter, addPageBorder, resolvePdfBranding, drawLogoMark } from "../../_shared/pdfWatermark";

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

    async function downloadEvalPDF() {
      const qs = currentQuestions();

      let settings = {};
      try {
        settings = await (await fetch("/api/settings")).json();
      } catch {
        // best-effort: fall back to the default vector logo/watermark, no socials
      }
      const branding = await resolvePdfBranding(settings);

      const { jsPDF } = window.jspdf;
      const doc = new jsPDF({ unit: "mm", format: "a4" });
      const bodyFont = branding.fontFamily || "helvetica";
      doc.setFont(bodyFont, "normal"); // ambient default — every doc.setFont(undefined, style) call below keeps this family
      const baseFontSize = branding.fontSize || 10.5;
      const fontScale = baseFontSize / 10.5;
      const lineSpacing = branding.lineSpacing || 1;
      const marginX = branding.marginX ?? 16;
      const pageW = doc.internal.pageSize.getWidth();
      const pageH = doc.internal.pageSize.getHeight();
      const maxWidth = pageW - marginX * 2;
      const topY = marginX + 8;
      const bottomLimit = pageH - marginX;
      let y = topY;

      // Title cover page, drawn on the document's first page before the
      // questions — mirrors buildCoursPdf's/downloadConcoursPdf's cover page.
      if (branding.coverPageEnabled) {
        const cover = branding.cover || {};

        if (cover.backgroundColor) {
          doc.setFillColor(...cover.backgroundColor);
          doc.rect(0, 0, pageW, pageH, "F");
        }
        if (cover.accentBar) {
          doc.setFillColor(...branding.accentColor);
          doc.rect(0, 0, pageW, 10, "F");
        }

        const markSize = 30;
        if (branding.logo) {
          const w = markSize;
          const h = (branding.logo.height / branding.logo.width) * w;
          doc.addImage(branding.logo.dataUrl, branding.logo.format, pageW / 2 - w / 2, 70, w, h);
        } else {
          drawLogoMark(doc, pageW / 2 - markSize / 2, 70, markSize, branding.accentColor);
        }

        doc.setFont(bodyFont, "bold");
        doc.setFontSize(11);
        doc.setTextColor(...branding.accentColor);
        doc.text((quiz.module || "ÉVALUATION").toUpperCase(), pageW / 2, 118, { align: "center" });

        doc.setFont(bodyFont, "bold");
        doc.setFontSize(22);
        doc.setTextColor(...branding.textColor);
        let ty = 132;
        doc.splitTextToSize(quiz.title || "", pageW - marginX * 2 - 20).forEach((line) => {
          doc.text(line, pageW / 2, ty, { align: "center" });
          ty += 9;
        });

        if (cover.showDescription) {
          doc.setFont(bodyFont, "normal");
          doc.setFontSize(11);
          doc.setTextColor(100, 104, 116);
          const infoLine = `${currentChapter} — ${qs.length} question${qs.length > 1 ? "s" : ""}`;
          [quiz.description, infoLine].filter(Boolean).forEach((text) => {
            doc.splitTextToSize(text, pageW - marginX * 2 - 30).forEach((line) => {
              ty += 7;
              doc.text(line, pageW / 2, ty, { align: "center" });
            });
          });
        }

        if (cover.showDate) {
          ty += 10;
          doc.setFont(bodyFont, "normal");
          doc.setFontSize(9.5);
          doc.setTextColor(140, 144, 155);
          const dateStr = new Date().toLocaleDateString("fr-FR", { year: "numeric", month: "long", day: "numeric" });
          doc.text(dateStr, pageW / 2, ty, { align: "center" });
        }

        doc.setDrawColor(...branding.accentColor);
        doc.setLineWidth(0.6);
        doc.line(pageW / 2 - 20, ty + 10, pageW / 2 + 20, ty + 10);

        doc.setFont(bodyFont, "normal");
        doc.setFontSize(9.5);
        doc.setTextColor(150, 154, 165);
        doc.text(cover.tagline, pageW / 2, pageH - 30, { align: "center" });

        doc.addPage();
        y = topY;
      }

      function ensureSpace(need) {
        if (y + need > bottomLimit) {
          doc.addPage();
          y = topY;
        }
      }

      function wrapText(text, size, bold, indent, color, font) {
        doc.setFont(font || undefined, bold ? "bold" : "normal");
        doc.setFontSize(size);
        doc.setTextColor(...color);
        const wrapped = doc.splitTextToSize(text, maxWidth - indent);
        for (const wl of wrapped) {
          ensureSpace(size * 0.42 * lineSpacing);
          doc.text(wl, marginX + indent, y);
          y += size * 0.42 * lineSpacing;
        }
      }

      wrapText(quiz.title, 15 * fontScale, true, 0, branding.textColor);
      y += 1;
      doc.setDrawColor(200, 200, 210);
      doc.line(marginX, y, pageW - marginX, y);
      y += 6;
      wrapText(
        `Module : ${quiz.module} — ${currentChapter} — ${qs.length} questions — Généré depuis SaadConcours`,
        9 * fontScale,
        false,
        0,
        [120, 120, 130]
      );
      y += 6;

      qs.forEach((q, idx) => {
        ensureSpace(14);
        wrapText(`Q${idx + 1}. ${q.question}`, 11 * fontScale, true, 0, branding.textColor);
        y += 1.5;
        q.options.forEach((o) => {
          const isCorrect = q.correct.includes(o.letter);
          ensureSpace(9);
          wrapText(`${o.letter}. ${o.text}`, 9.5 * fontScale, false, 5, isCorrect ? [30, 140, 90] : [70, 70, 80]);
        });
        y += 1;
        ensureSpace(9);
        const correctLetters = q.correct.join(", ").toUpperCase();
        wrapText(
          `Réponse(s) correcte(s) : ${correctLetters}${q.justification ? " — " + q.justification : ""}`,
          9 * fontScale,
          true,
          0,
          [30, 140, 90]
        );
        y += 5;
      });

      addWatermark(doc, branding);
      addPageBorder(doc, branding);
      addSiteHeader(doc, branding);
      addFooter(doc, branding);
      doc.save(`${quiz.id}_${currentChapter.replace(/[^a-zA-Z0-9]+/g, "_").slice(0, 30)}.pdf`);
      trackPdfDownload("evaluation", quiz.id);
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
      <div id="evalQuestions"></div>
      <div className="eval-submit-bar">
        <button className="dl-btn" id="evalSubmitBtn">✅ Valider mes réponses</button>
        <button className="reset-btn" id="evalRetryBtn" style={{ display: "none" }}>🔄 Refaire l'évaluation à zéro</button>
        <button className="reset-btn" id="evalPdfBtn" style={{ display: "none" }}>⬇ Télécharger en PDF (avec réponses)</button>
      </div>
    </div>
  );
}
