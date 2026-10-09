# SaadConcours: site strategy 2026–2027

> Bac · Licence · Master · Enseignement: one site, four spaces, no lost visitors.
>
> v2, 2026-10-05. Owner: Saad. Status: proposal, nothing implemented yet.
> v2 rewrites v1 after an audit against the code and the 2025 teaching concours facts.
> Teaching concours facts come from the 2025 session (sources at the end). Re-check them
> against the official 2026 announcement before publishing anything.

---

## Contents

0. [The 12 decisions](#0-the-12-decisions)
1. [Where the site is today](#1-where-the-site-is-today)
2. [Who we serve](#2-who-we-serve)
3. [Positioning](#3-positioning)
4. [Information architecture: the four spaces](#4-information-architecture-the-four-spaces)
5. [Navigation: how nobody gets lost](#5-navigation-how-nobody-gets-lost)
6. [UI design system](#6-ui-design-system)
7. [Page templates and wireframes](#7-page-templates-and-wireframes)
8. [The Enseignement space in detail](#8-the-enseignement-space-in-detail)
9. [Content strategy per space](#9-content-strategy-per-space)
10. [SEO and GEO](#10-seo-and-geo)
11. [AdSense and quality guardrails](#11-adsense-and-quality-guardrails)
12. [Roadmap](#12-roadmap)
13. [Measuring success](#13-measuring-success)
14. [Risks](#14-risks)
15. [Implementation checklist](#15-implementation-checklist)
16. [Changes from v1](#16-changes-from-v1)
17. [Sources](#17-sources)

---

## 0. The 12 decisions

1. **One domain, four spaces:** Bac Éco-Gestion · Licence FSJES · Master · Enseignement (التعليم).
   No second site.
2. **Navigation is organised by who the visitor is, not by content type.** Each space has its own
   cours, sujets and QCM inside it.
3. **No existing URL changes.** Spaces are a navigation layer on top of today's URLs.
4. **Every page has exactly one home space** (`espace`). It can be *listed* in other spaces
   (`listeDans`), but its breadcrumb, space bar and "next step" links follow its home space.
5. **Every page answers three questions:** Where am I? What can I do here? Where do I go next?
6. **The mobile bottom bar keeps its labels and positions:** Accueil · Cours · Sujets ·
   S'entraîner · Recherche. Only the destinations follow the remembered space. With no space
   remembered, they go where they go today. Master papers stay one tap away.
7. **The stylo bleu / stylo rouge charter applies to all four spaces.** No colour per space. A
   space is identified by words, never by colour.
8. **Enseignement is Arabic and right-to-left (RTL)** inside a site that stays French: CSS logical
   properties everywhere and **one** Arabic font family, loaded only in that space.
9. **Enseignement starts with the common written test** (education system, pedagogy, psychology of
   education). Every candidate takes it, whatever the cycle.
10. **Content beats volume.** AI drafts, a human validates. Corrected real papers, timed mock exams
    and QCMs are the edge. Nothing invented, nothing copied.
11. **Evergreen URLs.** Guides keep the same URL every year; the year lives in the title.
12. **Nothing goes live half-empty.** `npm run check` and the AdSense rules (BANQUE_PROMPTS §1.6)
    apply to the new space from day one.

---

## 1. Where the site is today

### 1.1 Content inventory (2026-10-05, counted from the data)

| Content | Volume | Where | Strength |
|---|---|---|---|
| Concours | 302 entries: **292 Master + 10 Licence d'excellence** (field `niveau`, see `lib/concoursNiveaux.js`). By track, both levels together: FCA 128, MCL 73, MRH 57, EDMQ 26, EAPP 18. 296 corrections. | `/concours`, `/concours/licence-excellence` | Very strong |
| Licence FSJES courses | 28 modules, S1 → S6 (`cours.json`) | `/cours` | Strong; "cours détaillé" style |
| Bac SEG | 2ème Bac by subject and chapter (`lib/bacContenu`, `lib/bacProgramme.js`), national exams (`lib/bacNationaux.json`); 1ère Bac hidden. `public/data/bac.json` is empty and unused. | `/bac/2bac` | Growing |
| QCM / mock exams | 5 × 100 questions: `macro_100`, `comptaana_100`, `mathfin_100`, `analysefin_100`, `audit_100` | `/evaluation` | **Weak:** 5 of 28 modules |
| Blog | 64 articles: méthode 29, facultés 14, matières 12, comparatifs 9 | `/blog` | Mixed audiences |

### 1.2 Constraints already in place (keep them)

- **AdSense:** rejected once for "low value content", fixes shipped 2026-09-24, new review
  pending. No thin pages, no "Bientôt", no scraping. Enforced by `scripts/audit-contenu.mjs`
  (min. 120 words per page, no placeholder wording, no broken internal link).
- **SEO rules** (BANQUE_PROMPTS §1.7), **GEO rules** (§1.8), static rendering (10 ms CPU budget on
  Cloudflare Workers; `robots.txt` is a static file for that reason), redirects in
  `public/_redirects`.
- **The stylo bleu charter** (2026-10-05): blue ink is the only brand colour, red only for
  corrections. No gradients, glows, icon tiles or per-category tints. Lists are ruled rows.
- **Progress tracking** in `app/_shared/progress.js` (localStorage: chapters read, `sc_last`, best
  QCM scores) and the remembered course space `sc_cours` in `chrome.js` `initTabbar()`.
- **Analytics:** GA4 through `settings.gaMeasurementId`, one `gtag('config')` in `app/layout.js`.
- **Admin console** (`app/admin`) edits the JSON data through GitHub. Any new field or data file
  needs its admin screen.

### 1.3 Why visitors get lost today

1. **The header is a list of content types** (Cours ▾ / Concours ▾ / QCM / Blog), with dropdowns.
2. **The level is a second-level decision,** split across two switches (`NiveauSwitch` for
   Bac/Licence, `ConcoursNiveauSwitch` for Master/Licence d'excellence), and missing for QCM and
   the blog.
3. **The "QCM" tab is global but only serves Licence/Master.** For a Bac student it's a dead end.
4. **The blog mixes all audiences.**
5. **The home page talks to everyone,** so it can't say "here is *your* next step".
6. **Adding Enseignement** to this model would mean a fifth audience, in a different language,
   inside menus built for the others.

What works and must survive: the bottom bar's direct "Concours" access and the remembered course
space (`sc_cours`).

---

## 2. Who we serve

| Space | Who | What they want | Peak season | Language | Typical Google query |
|---|---|---|---|---|---|
| **Bac Éco-Gestion** | 1ère/2ème Bac SEG students (16–19) | Clear chapters, corrected national exams | Apr → Jun | FR | "examen national comptabilité 2 bac corrigé" |
| **Licence FSJES** | S1–S6 students in Éco-Gestion | Course per module, exercises, exam practice | Dec → Jan, May → Jun | FR | "cours comptabilité analytique S3 exercices corrigés" |
| **Master** | Licence holders (bac+3) | Real past papers, corrections, school format, mock exams | Jun → Oct | FR | "concours master CCA Aïn Chock corrigé" |
| **Enseignement** | Licence holders of **any** field, under 35 (2025 rule) | Exam format, common-test summaries, corrected past papers, oral prep | **Very short:** announcement → written ≈ 3–4 weeks (2025: 29 Oct → 22 Nov), oral in Dec | **AR** | "نماذج مباراة التعليم مع التصحيح" |

**The peaks overlap.** May–June stacks Bac, Licence and the opening of the Master season.
October–November stacks Enseignement, Licence January prep and the end of the Master season. The
site has traffic all year, but the workload is concentrated twice a year: the calendar (§9.4)
prepares each peak at least one month ahead.

**Enseignement is mostly a new audience, not the continuation of the current one.** In 2025,
12,926 of the 19,000 posts (68%) were for collège, where Économie-Gestion isn't taught. An
Éco-Gestion graduate mostly targets primary or the Économie-Gestion qualifiant specialty
(eligibility per specialty: to verify in the 2026 announcement). The Bac → Licence → Master **or**
Enseignement path is real for some users, but most Enseignement visitors will be licence holders
from other fields, arriving from Google in Arabic.

Most traffic is on **mobile**, often landing on a deep page from Google or a WhatsApp/Facebook
link. Every deep page must work as a landing page.

---

## 3. Positioning

> **SaadConcours, la préparation en économie-gestion au Maroc, du Bac au premier poste :
> cours, sujets réels corrigés et concours blancs.**

- **The thread:** Bac SEG → Licence FSJES → after the licence, Master **or** teaching.
- **What the site is known for (keep it everywhere):** real papers, full corrections in the
  stylo bleu / stylo rouge style, free, no account needed.
- **Header tagline:** `Bac · Licence · Master · Enseignement`.

### Teaching posts, 2025 session (confirmed by several press sources)

| Cycle | Posts |
|---|---|
| Primary | 3,383, of which 1,000 are for Amazigh |
| Collège | 12,926 |
| Qualifiant (lycée) | 2,691 |
| **Total** | **19,000** |

The written exam has a **common test** (foundations of the Moroccan education system, pedagogy,
psychology of education) plus a **specialty test** (plus a practical test for sport and art).
Every candidate takes the common test, so it serves the whole candidate pool. That's decision #9.
Specialties come after, chosen by Search Console demand.

---

## 4. Information architecture: the four spaces

### 4.1 Site map (home space of each URL)

```
/                                   Accueil: space chooser + "continue" line
│
├── BAC ÉCO-GESTION   (hub: /bac/2bac)
│   ├── /bac/2bac/[matiere]                   subject: chapters + national exams
│   ├── /bac/2bac/[matiere]/[chapitre]        chapter
│   └── QCM Bac (future, once written)
│
├── LICENCE FSJES     (hub: /cours)
│   ├── /cours/[id]                           module course (by chapter)
│   ├── /evaluation, /evaluation/[id]         module QCMs (home: Licence; listed in Master)
│   └── /concours/licence-excellence          concours d'accès en S5 (home: Licence)
│
├── MASTER            (hub: /concours)
│   ├── /concours/[id]                        paper + correction (niveau = master)
│   ├── concours blancs per track             (future; BANQUE_PROMPTS C7)
│   └── master guides                         (blog articles, espace = master)
│
├── ENSEIGNEMENT التعليم   (hub: /enseignement)   [new, AR, RTL]
│   ├── /enseignement/guide                   pillar guide: conditions, calendar, format
│   ├── /enseignement/epreuve-commune         hub for the common test
│   │   └── /enseignement/epreuve-commune/[fiche]
│   ├── /enseignement/sujets                  past papers + corrections
│   │   └── /enseignement/sujets/[id]
│   ├── /enseignement/qcm/[id]                QCMs and timed mock exams
│   ├── /enseignement/oral                    oral preparation
│   └── /enseignement/primaire[/fiche]        primary specialty (second layer)
│
├── MÉTHODE (blog)    /blog, /blog/[id]       each article has one home space
├── RECHERCHE         /recherche              results grouped by space
└── À propos · FAQ · Contact · Confidentialité · Mentions légales   (no space)
```

`/evaluation` lives in **Licence**: each QCM is tied to a Licence module and its chapters
(`chapters` field). Master lists them as "QCM par module" and gets its own per-track mock exams
later.

### 4.2 Rules

- **Keep every existing URL.** `/cours` *is* the Licence hub and `/concours` *is* the Master hub.
  Nothing to redirect.
- **Latin slugs for Enseignement** (`/enseignement/epreuve-commune/approche-par-competences`),
  Arabic titles and content. Arabic slugs become long `%D8%…` strings on WhatsApp and are
  fragile in redirects and the sitemap.
- **One URL per piece of content,** one canonical. Listing elsewhere never duplicates it.
- **The space is derived, not stored**, except for the blog. One function in `lib/espaces.js`:

  | Source | `espace` |
  |---|---|
  | `concours.json` | `niveauOf(c) === "licence_excellence"` ? `licence` : `master` |
  | `cours.json`, `quiz.json` | `licence` (QCMs also listed in `master`) |
  | Bac (`lib/bac*`) | `bac` |
  | `enseignement.json` | `enseignement` |
  | `blog.json` | **new field** `espace` (required, one value) + optional `listeDans: []` |

  A stored field on 302 concours, 28 courses and 5 QCMs would drift from `niveau`/source and
  would need admin forms and recipe changes for no gain.
- **`lib/espaces.js` describes each space:** key, French label, Arabic label, hub URL, space-bar
  tabs, `lang`, `dir`, and the destinations of the bottom-bar tabs (§5.4). The header, space bar,
  bottom bar, menu, breadcrumbs, search, sitemap and GA4 content group all read from it.

---

## 5. Navigation: how nobody gets lost

### 5.1 The three-question rule

Every page, on every screen size, answers these within the first screen:

| Question | Answered by |
|---|---|
| **Where am I?** | Active space in the header + space bar + visible breadcrumb + H1 |
| **What can I do here?** | The space bar's tabs |
| **Where next?** | The "Étape suivante" block at the end of the page (§5.6) |

### 5.2 Two layers of navigation

1. **Global layer, identical everywhere:** logo, the four spaces, Méthode, search, theme.
2. **Space layer, only inside a space:** the space bar with that space's tabs.

No dropdowns in the header (hard on touch screens, they hide choices).

### 5.3 Desktop header

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│ SaadConcours            Bac   Licence   Master   التعليم    Méthode   [🔍 ……]  ◐ │
│ Bac · Licence · Master · Enseignement      ‾‾‾‾‾‾‾ (active space is underlined)  │
├─────────────────────────────────────────────────────────────────────────────────┤
│ Licence FSJES :  Cours   QCM   Licence d'excellence   Méthode                    │ ← space bar
└─────────────────────────────────────────────────────────────────────────────────┘
  Accueil › Licence › Comptabilité analytique (S3) › Chapitre 2                     ← breadcrumb
```

Space-bar tabs (only tabs with real content are shown):

| Space | Tabs |
|---|---|
| Bac | Cours · Examens nationaux · Méthode |
| Licence | Cours · QCM · Licence d'excellence · Méthode |
| Master | Sujets · QCM par module · Guides · Méthode |
| Enseignement | الدليل · الاختبار المشترك · المواضيع · الاختبارات · الشفوي |

The space bar replaces both `NiveauSwitch` and `ConcoursNiveauSwitch`.

### 5.4 Mobile

- **Header:** logo + Menu button (the only Menu entry). The space bar sits under it, scrolls
  sideways, isn't sticky.
- **Bottom bar: same five labels and positions as today**, destinations follow the remembered
  space. This generalises `initTabbar()` and `sc_cours`:

| Tab | No space remembered (= today) | Bac | Licence | Master | Enseignement |
|---|---|---|---|---|---|
| Accueil | `/` | `/` | `/` | `/` | `/` |
| Cours | `/cours` | `/bac/2bac` | `/cours` | `/cours` | `/enseignement/epreuve-commune` |
| Sujets | `/concours` | Bac hub, national exams section | `/concours/licence-excellence` | `/concours` | `/enseignement/sujets` |
| S'entraîner | `/evaluation` | Bac hub, national exams section (until QCM Bac exists) | `/evaluation` | `/evaluation` (then track mock exams) | `/enseignement/qcm` |
| Recherche | `/recherche` | pre-filtered Bac | pre-filtered Licence | pre-filtered Master | pre-filtered التعليم |

  - The old "Concours" tab becomes "Sujets": a first-time visitor still reaches the Master papers
    in one tap.
  - "QCM" becomes "S'entraîner" so the tab isn't a dead end for Bac. Until QCM Bac exists, Bac's
    Sujets and S'entraîner point to the same section; that's accepted and temporary.
  - Labels stay French in every space (the bar is global chrome). Inside Enseignement the
    destinations are Arabic pages.

### 5.5 The space chooser and memory

- **Home page, top:** "Je prépare…" with four ruled rows (not tiles):
  - Le Bac Éco-Gestion: cours et examens nationaux corrigés
  - La Licence FSJES: cours S1 → S6 et QCM
  - Un concours de Master: 290+ sujets réels corrigés
  - مباراة التعليم: الامتحان الكتابي والشفوي
- **What sets the remembered space (`sc_espace`):**
  - clicking a chooser row or a space in the header/menu;
  - visiting a space **hub**;
  - visiting any page of a space **when no space is remembered yet**.
  
  A single deep page from Google does **not** overwrite an existing choice. A Licence student who
  opens one Master paper keeps "Licence". `sc_cours` is migrated into `sc_espace` (`/bac/2bac` →
  `bac`, `/cours` → `licence`). Every read/write in try/catch.
- **Returning visitor:** one line above the chooser, "Continuer : Licence · Macroéconomie,
  chapitre 3 →", from `sc_last`. The chooser stays visible underneath; the home page always links
  to all four spaces (SEO, AdSense reviewer).
- **No layout shift and no empty gap:** the page is static, so the server can't know who returns.
  The slot is rendered with **default content** ("Nouveau : <latest paper or chapter> →") that the
  script replaces with the "Continuer" line for returning visitors. Same height, never empty.

### 5.6 The "Étape suivante" block (end of every page)

At most three links, ordered, inside the page's home space:

| Page type | Next steps |
|---|---|
| Course chapter | 1. Next chapter · 2. QCM for this module · 3. A concours question on this topic |
| Concours paper | 1. Correction (if on the paper) · 2. Same school, another year · 3. QCM for the module |
| QCM result | 1. Chapters for the questions you missed · 2. Retry · 3. Next module |
| Bac exam | 1. Chapter covering question 1 · 2. Another year · 3. Next subject |
| Enseignement fiche | 1. Its QCM · 2. Next fiche of the common test · 3. A corrected past paper |
| Blog article | 1. The hub of its space · 2. The most useful related page |

### 5.7 Bridges between spaces (rare, explicit)

Only at real transition points, labelled as a choice:
- End of S6 modules and Licence hub: "Après la licence : Master ou enseignement ?" (one comparison
  article, then both hubs).
- Bac hub: "Après le Bac : la Licence FSJES".
- Licence d'excellence page: "Après le DEUG : licence d'excellence ou licence fondamentale ?".

Lists never mix spaces.

### 5.8 Search

- `/recherche` groups results by space, chips: Tout · Bac · Licence · Master · التعليم.
- From inside a space, that space is pre-selected; one tap widens to "Tout".
- Arabic normalisation before matching: alef/hamza forms (أ إ آ → ا), ى → ي, ة → ه, remove
  tashkeel and tatweel.

### 5.9 Dead ends never happen

- **404:** the four spaces + search.
- **No empty lists, no "Bientôt".** A space or tab appears only once it has real content.
- **Back always works.** Sheets close on Back, no modal eats the history.

---

## 6. UI design system

### 6.1 Charter (unchanged)

Blue ink `--accent` is the only brand colour. `--red` for corrections and wrong answers, green
only for a right answer, yellow highlighter `--hl` for "Nouveau". Literata for long text, Plus
Jakarta Sans for the interface. Ruled-row lists (`.sp-rows`). No gradients, halos, dot-pills, icon
tiles or per-category tints. Reuse `globals.css`, `space.css` and `bac.css`; add no stylesheet that
restyles the others.

### 6.2 How a space is recognised (without colour)

1. The active space in the header is underlined in blue ink.
2. The space bar starts with the space name in bold.
3. The breadcrumb starts with the space.
4. A plain-text line above the H1 names space and level ("Licence FSJES · S3"), not a pill.

### 6.3 Typography

| Use | French | Arabic (Enseignement) |
|---|---|---|
| Reading and interface | Literata / Plus Jakarta Sans | **Noto Naskh Arabic** only (400, 700), via `next/font` in `app/enseignement/layout.js` |
| Size and line height | as now | +1 px, line-height 1.8–1.9 |

**One Arabic family, not two.** And fix what exists first: **Amiri is loaded on every page today**
through a render-blocking Google Fonts `<link>` in `app/layout.js`, only for the dua toast. Load it
only when the toast is shown (or through `next/font` with `preload: false`). The PDF verse font
(`pdfVerse.js`) is separate and stays.

### 6.4 RTL: what has to change

- **Direction:** `<main lang="ar" dir="rtl">` in `app/enseignement/layout.js`. Global header and
  footer stay French and LTR. Valid HTML; Google reads `lang` per element. (Separate root layouts
  via route groups would allow `<html lang="ar">`, but means moving every route: not now.)
- **Logical-properties audit:** about 60 physical `left/right` declarations in `globals.css` (~28),
  `space.css` (~20), `bac.css` (11), 0 logical ones, **plus inline styles in 5 public JS
  components**. Convert to `margin-inline-start`, `padding-inline`, `inset-inline-start`,
  `border-inline-start`, `text-align: start`. Also check `translateX`, `background-position` and
  scroll-shadow fades (`.is-scrollable`). Invisible on French pages, so it ships first.
- **Directional icons** (chevrons, arrows, "→"): `[dir="rtl"] .ic-dir { transform: scaleX(-1) }`.
- **Numbers:** Western digits (0–9), as used in Morocco.
- **Mixed text:** French terms, formulas and LaTeX inside Arabic text go in `<bdi>` or
  `<span dir="ltr">`.
- **Interface labels in Arabic** inside the space content (space bar, buttons, "الخطوة التالية").
  Global chrome and bottom bar stay French.

### 6.5 Components

| Component | Status | Note |
|---|---|---|
| Header with four spaces | change | `chrome.js` `NAV_ITEMS`; drop the dropdowns |
| Space bar | **new** | replaces `NiveauSwitch` and `ConcoursNiveauSwitch`; reads `lib/espaces.js` |
| Bottom bar | change | labels Cours/Sujets/S'entraîner; destinations per space (§5.4) |
| Menu sheet | change | grouped by space; only in the header |
| Visible breadcrumb | **new (shared)** | same data as the `BreadcrumbList` JSON-LD |
| "Étape suivante" | **new** | 3 links, §5.6 |
| Space chooser + default/"Continuer" slot | **new** | home page |
| `.sp-rows`, `concoursCard`, `evalCard` | keep | RTL-ready after the audit |
| Guide template (TOC, sections, key-dates table) | **new** | Enseignement guide, Master school guides |
| Key-date line | **new** | plain text: "Écrit : 21 nov. 2026 (à confirmer)", no countdown |
| Timed mock exam | extend | `/evaluation` engine + timer + result per section |

---

## 7. Page templates and wireframes

### 7.1 Home (mobile)

```
┌──────────────────────────────┐
│ SaadConcours          ☰ Menu │
├──────────────────────────────┤
│ Nouveau : CCA Fès 2024    →  │  ← default content…
│ (Continuer : Licence ·       │  ← …replaced for a returning visitor
│  Macroéconomie, ch. 3     →) │
├──────────────────────────────┤
│ Je prépare…                  │
│ ──────────────────────────── │
│ Le Bac Éco-Gestion         → │
│ cours, examens corrigés      │
│ ──────────────────────────── │
│ La Licence FSJES           → │
│ S1 → S6, QCM                 │
│ ──────────────────────────── │
│ Un concours de Master      → │
│ 290+ sujets réels corrigés   │
│ ──────────────────────────── │
│ مباراة التعليم             ← │
│ الكتابي والشفوي               │
├──────────────────────────────┤
│ Nouveau cette semaine        │  ← 5 rows, each tagged with its space
├──────────────────────────────┤
│ About the site (SEO text)    │  ← below the lists
├──────────────────────────────┤
│ Accueil·Cours·Sujets·S'entr.·🔍 │
└──────────────────────────────┘
```

### 7.2 Space hub (mobile)

```
┌──────────────────────────────┐
│ Licence FSJES : Cours  QCM  …│  ← space bar (scrolls sideways)
├──────────────────────────────┤
│ Accueil › Licence            │
│ Cours de Licence FSJES       │  ← H1
│ 28 modules du S1 au S6       │
│ [S1][S2][S3][S4][S5][S6]     │  ← filter
├──────────────────────────────┤
│ the list, straight away      │
├──────────────────────────────┤
│ How to use this space        │  ← short text + links
└──────────────────────────────┘
```

### 7.3 Detail page (any space)

```
Space bar
Breadcrumb
Space · level line
H1
Meta line: year / school / duration / "Mis à jour le …" / source
[Énoncé | Corrigé] or table of contents
Content
Étape suivante (3 links)
Related in the same space (max 5 rows)
```

---

## 8. The Enseignement space in detail

### 8.1 What the exam looks like (2025 session; re-check for 2026)

| Item | 2025 | Confidence |
|---|---|---|
| Conditions | Moroccan nationality, licence or equivalent, **under 35** (raised from 30) | press, several sources |
| Announcement | 29 Oct 2025 | press |
| Registration | online, 30 Oct → 13 Nov | press, several sources |
| Pre-selection list | 17 Nov | press |
| Written exam | **Sat 22 Nov**: common test + specialty test | press, several sources |
| Written results | 27 Nov | press |
| Oral | 2 → 11 Dec (communication, motivation, managing a class situation) | press |
| Final results | 16 Dec, then one year of CRMEF training | press |
| Weighting | written reported as 70% | **one secondary source, unverified: don't publish without the official text** |

If 2026 follows the same rhythm: announcement ≈ **29 Oct 2026**, written ≈ **Sat 21 Nov 2026**.

**The timing problem AI doesn't solve:** the search peak lasts 3–4 weeks, and new pages take days
to weeks to be crawled and ranked, slower in Arabic on a French-language domain. So the space must
be **live and crawled before the announcement**, not just before the exam. With AI drafting, the
content can be ready by **23 Oct** (§12).

### 8.2 Layers, in order

1. **Common test (everyone):** fiches + QCMs. Best traffic per page of work.
2. **Corrected past papers** of the common test, recent sessions.
3. **Timed mock exams** of the common test.
4. **The oral:** frequent questions, presenting yourself, a commented lesson plan (جذاذة). Live
   before the written results (≈ 26 Nov).
5. **Primary specialty:** didactics of the primary subjects, primary reform topics.
6. **Other specialties** only when Search Console shows demand. Économie-Gestion qualifiant first
   if 2026 opens posts for it (reuses the Bac and Licence content).

### 8.3 Content list for the common test (verify against the official reference)

**Education system**
- القانون الإطار 51.17
- الرؤية الاستراتيجية 2015–2030
- خارطة الطريق 2022–2026 ومدارس الريادة
- النظام الأساسي الموحد (2024)
- Structure of the system: cycles, AREF, CRMEF, evaluation

**Pedagogy and didactics**
- المقاربة بالكفايات
- بيداغوجيا الإدماج
- التدريس الفارقي
- التدريس الصريح
- التدريس وفق المستوى المناسب (TaRL)
- التقويم: أنواعه ووظائفه
- التخطيط والجذاذة
- تدبير الفصل
- الوسائل التعليمية

**Psychology of education**
- السلوكية
- البنائية (بياجيه)
- البنائية الاجتماعية (فيجوتسكي)
- الذكاءات المتعددة
- الدافعية
- مراحل النمو
- صعوبات التعلم

About **21 fiches**. Each one has:
- a summary in plain Arabic, organised by what gets asked;
- a short "ما يجب حفظه" table;
- 10–15 QCMs with explained answers;
- links to the past-paper questions on the topic;
- the official texts it relies on, linked.

### 8.4 Production with AI: the rules

AI makes the volume possible. These rules keep it from becoming the AdSense problem again:
- **AI drafts, Saad validates** every fiche and QCM before it ships (Arabic, official terms,
  correct answers). A fiche without validation stays in draft.
- **Past papers are never generated.** Only real subjects, with their source, transcribed by us.
  If fewer than 3 real recent papers can be found and verified, the launch waits for them (that's
  a sourcing problem, not a writing one: start searching on day 1).
- **Official texts are the reference,** not other prep sites. No rewording of a competitor's fiche.
- **Glossary of official terms** (`lib/enseignementGlossaire.js` or in the data file), used by
  every prompt so the terms stay consistent across fiches.
- **AI-assisted label** on corrections, as on concours corrections today.

### 8.5 What makes it better than the existing Arabic sites

- **Full corrections**, not bare questions.
- **Interactive, timed mock exams with a score.** Facebook pages can't do this.
- **Clean, fast pages:** no pop-ups, no PDF behind ten ads.
- **Dated and sourced:** "Mis à jour le …" plus links to the official texts.

### 8.6 Launch threshold (go-live gate)

The space goes public only when **all** of these hold:
- hub + pillar guide;
- **12** validated common-test fiches with QCMs (target 21 by mid-November);
- **3** real corrected past papers;
- **1** timed mock exam;
- `npm run check` passes, including the Arabic placeholder words (§11);
- the AdSense decision (§11).

---

## 9. Content strategy per space

### 9.1 Common quality rules

- Original writing, sourced, dated. No copying (§1.6).
- Every page above the audit threshold with substance, not padding.
- Corrections labelled as AI-assisted.
- One page = one search intent. Merge two thin articles rather than keep both.

### 9.2 Formats

| Format | Used in | Purpose |
|---|---|---|
| Course / chapter | Bac, Licence | learn |
| Fiche | Enseignement | revise one topic |
| Paper + correction | all four | practise on the real thing |
| QCM per topic | all four | check yourself |
| Timed mock exam | Licence, Master, Enseignement | simulate the exam |
| Pillar guide | Master (per school/track), Enseignement | understand the exam, rank on head terms |
| Method article | blog | how to revise, orientation |
| Comparison | blog | choose (Master X vs Y, Master vs teaching) |

### 9.3 Priorities per space

**Bac Éco-Gestion**
- Finish the 2ème Bac subjects chapter by chapter; corrected national exams for every subject and
  recent year.
- Open 1ère Bac only once its subjects are written.
- QCM Bac per subject (removes the temporary duplicate in the bottom bar).
- Everything ready by **March**.

**Licence FSJES**
- Close the biggest gap: **QCMs for the other 23 modules**, S1/S3/S5 first (January exams).
- Finish the "cours détaillé" rewrite.
- Ready by **end of November** (January exams) and **April** (June exams).

**Master**
- A **guide per school and track** (format, modules, dates), starting with CCA Aïn Chock.
- A **mock exam per track** (CCA, Finance, Marketing, RH…) built from the real papers.
- Ready by **June**.

**Enseignement**
- See §8.
- Each year: **correction of the new written exam**, common test within 48 h, specialty tests
  after. Protocol: transcribe the real subject → AI draft → Saad validates each answer → publish
  with "corrigé proposé, mis à jour le …". A correct answer late beats a wrong one fast on the
  most visible page of the year.

**Blog / Méthode**
- Give every article its `espace` (+ `listeDans` if needed) and list it in its space's hub.
- Merge or improve the weakest; no news-style content.

### 9.4 Twelve-month calendar

| Month | Bac | Licence | Master | Enseignement |
|---|---|---|---|---|
| Oct 2026 | — | S1/S3/S5 QCMs start | season ends | **build + go live ≈ 23 Oct** |
| Nov | — | **January exam prep** | — | **peak:** 2026 dates, more fiches, mock exams, written correction, oral page |
| Dec | 2Bac exam corrections | **peak** | — | **oral** |
| Jan 2027 | 2Bac chapters | **peak** | — | results; archive the session |
| Feb | 2Bac chapters | S2/S4/S6 QCMs | school guides | primary specialty |
| Mar | **national exams ready** | — | school guides | primary specialty |
| Apr | **peak starts** | **June exam prep** | track mock exams | — |
| May | **peak** | **peak** | — | — |
| Jun | **peak** | **peak** | **season opens** | — |
| Jul | 1ère Bac (if ready) | — | **peak** | 2027 guide update |
| Aug | — | — | **peak** | fiches refresh |
| Sep | — | QCMs | **peak** | **2027 guide live, before the announcement** |

---

## 10. SEO and GEO

### 10.1 Structure

- **Hub = pillar.** Each hub targets the head term ("cours licence FSJES", "concours master Maroc",
  "مباراة التعليم"). Children target the long tail.
- **Linking:** every child links to its hub + 2–3 siblings; every hub links to all its children in
  crawlable `<a href>`; no orphans. Extend `audit-contenu.mjs` to flag pages no hub links to.
- **Breadcrumbs:** visible + `BreadcrumbList` JSON-LD, starting with the space.

### 10.2 Keyword clusters (starting points; validate in Search Console)

| Space | Head | Long tail |
|---|---|---|
| Bac | examen national 2 bac SEG | "… comptabilité 2024 corrigé", "cours économie générale 2 bac" |
| Licence | cours FSJES S3 | "comptabilité analytique exercices corrigés", "QCM macroéconomie S2" |
| Master | concours master FSJES | "concours master CCA Aïn Chock 2024", "sujet concours master finance corrigé" |
| Enseignement | مباراة التعليم 2026 | "نماذج امتحانات مباراة التعليم مع التصحيح", "ملخص القانون الإطار 51.17", "بيداغوجيا الإدماج", "أسئلة الشفوي مباراة التعليم" |

The Arabic head terms are dominated by established sites. The realistic first-season wins are the
long-tail fiche queries and the corrected-paper queries.

### 10.3 Arabic pages

- `lang="ar"` on content, Arabic `<title>` and meta description (through `fitTitle` /
  `clampDescription`; check they measure Arabic correctly), JSON-LD with `inLanguage: "ar"`.
- **No `hreflang`:** these pages aren't translations.
- Titles: Arabic first, brand last: `ملخص القانون الإطار 51.17 لمباراة التعليم | SaadConcours`.

### 10.4 Evergreen URLs

`/enseignement/guide` never changes; the title says "مباراة التعليم 2026", then "2027". Never
`/guide-2026`. Same for Master school guides.

### 10.5 Indexing a new space fast

AI can't speed up Google, so we do everything that helps:
- Go live **before** the announcement (§12).
- Search Console: submit the sitemap, then **request indexing** by hand for the hub, the guide and
  the first fiches.
- IndexNow already runs on every deploy (Bing, Yandex; not Google).
- Link the Enseignement hub from the home page, the Licence hub (bridge §5.7) and one strong
  blog article ("Master ou enseignement ?"), so Googlebot finds it from pages it already crawls.
- Share the guide on the site's social accounts at launch and at the announcement.

### 10.6 Technical

- **Sitemaps per space:** Next's `generateSitemaps` produces `/sitemap/[id].xml`, not
  `sitemap-enseignement.xml`. Use ids that read well (`/sitemap/enseignement.xml`), make
  `scripts/prerender-to-assets.mjs` emit them as static assets (10 ms budget), and list each one
  by hand in the static `public/robots.txt`.
- **OG images** pre-rendered (`force-static`). `ogImage.js` uses `sans-serif` with no loaded font:
  **Arabic will render as empty boxes.** Bundle a Noto Naskh Arabic TTF (subset) for the
  Enseignement images.
- **Performance:** Arabic font only in `/enseignement`, subset, `display: swap`; remove the global
  Amiri `<link>` (§6.3).

### 10.7 GEO (AI answer engines)

- Every guide opens with a 3–4 line factual answer (conditions, dates, format) before the details.
- `public/llms.txt`: an Enseignement section with floor numbers.
- Keep AI crawlers allowed in `robots.txt`.

### 10.8 Measuring per space

Spaces don't map cleanly to URL prefixes (`/concours/licence-excellence` is Licence, `/evaluation`
is Licence, `/blog` belongs to each space). So:
- **GA4:** send a `content_group` = space on every page view (from `lib/espaces.js`). The current
  single `gtag('config')` in `app/layout.js` must read the space of the page, and re-send it on
  client-side navigation (`gtag('set', { content_group })` before the page view).
- **Search Console:** prefixes still work for `/bac`, `/cours`, `/enseignement`; Master =
  `/concours` minus `/concours/licence-excellence`. The indexing report lags ≈ 2 weeks.

---

## 11. AdSense and quality guardrails

- **AdSense decision first.** The re-review after the 2026-09-24 fixes is pending. Phase 1 (nav)
  doesn't change content and can ship. The Enseignement go-live waits for the decision. If it's
  still pending on the go-live date, **Saad decides**: launch (the space meets the threshold, so
  the risk is limited) or hold until the answer.
- A new space ships **complete or not at all** (§8.6). No "coming soon" tab.
- No PDF-only pages. A scanned paper always lives with its transcription and correction.
- No scraped content, including from Arabic prep sites. Write the fiches, cite official texts.
- `audit-contenu.mjs`: add the Arabic placeholder words to the forbidden list ("قريبا",
  "قريبًا", "قيد الإعداد", "سيتم إضافة"). The word count already works for Arabic (split on
  spaces).
- `npm run check` must pass with the new routes. Never weaken the audit to make it pass.
- Ads: same slots and density as elsewhere. RTL pages never push ads above the H1.

---

## 12. Roadmap

Production is AI-assisted, so the bottlenecks are: Saad's validation time, finding real past
papers, Google indexing and the AdSense decision. The plan is built around those, not around
writing time. Dates assume the 2026 calendar mirrors 2025 (announcement ≈ 29 Oct, written ≈ 21
Nov); shift if the official announcement says otherwise.

### Phase 0: groundwork (Oct 5 → Oct 7)

1. GA4 `content_group` per space → **baseline** for §13 before anything else changes.
2. Remove the global render-blocking Amiri `<link>`.
3. Logical-properties audit (CSS + inline styles), invisible in French.
4. Start the hunt for real past papers of the common test (2022–2025), with sources.

### Phase 1: navigation by space, three existing spaces (Oct 6 → Oct 16)

1. `lib/espaces.js` with derived spaces; `espace` field on `blog.json` only.
2. Header with spaces (no dropdowns), space bar (replaces both switches), visible breadcrumbs,
   "Étape suivante".
3. Bottom bar Cours/Sujets/S'entraîner with per-space destinations; `sc_cours` → `sc_espace`.
4. Home: chooser + default/"Continuer" slot.
5. Search grouped by space.
6. Admin: `espace`/`listeDans` on the blog editor.
7. Screenshot check on mobile and desktop, `npm run check`, deploy.

### Phase 2: Enseignement build (Oct 6 → Oct 23, in parallel with Phase 1)

1. `app/enseignement/` routes, layout `lang`/`dir`, Noto Naskh Arabic, `enseignement.json`,
   admin screen for it.
2. Glossary of official terms; recipe **T. ENSEIGNEMENT** in `BANQUE_PROMPTS.md` (fiche, past
   paper, QCM, mock exam, written-exam correction). **E is already "Évaluations".**
3. AI drafts → Saad validates: hub, pillar guide, 12+ fiches with QCMs, 3 real corrected papers,
   1 timed mock exam.
4. Arabic OG images, per-space sitemaps, JSON-LD, llms.txt, audit words.
5. **Go live ≈ Fri 23 Oct** if the §8.6 gate is met → Search Console indexing requests the same
   day.

### Phase 3: exam season (Oct 23 → Dec 20)

- **Announcement day (≈ 29 Oct):** official 2026 dates and conditions in the guide within 24 h.
- New fiches every few days up to 21; second and third mock exams.
- Oral page live before the written results (≈ 26 Nov).
- **Written exam (≈ 21 Nov):** common-test correction within 48 h, protocol §9.3.
- Meanwhile Licence: S1/S3/S5 QCMs for the January exams.

### Phase 4: rest of the year (Jan → Sep 2027)

Follow §9.4: Licence QCMs, Bac national exams and QCM Bac, Master school guides and track mock
exams, primary specialty, 2027 Enseignement guide live in September.

---

## 13. Measuring success

| Goal | Metric | Target |
|---|---|---|
| People don't get lost | % sessions with a 2nd page **in the same content group** | +30% vs. the Phase 0 baseline |
| | Searches within 10 s of landing (custom event) | going down |
| | 404 hits | ~0 |
| Master isn't hurt by the new nav | `/concours` sessions and clicks | ≥ the baseline |
| Spaces work | clicks and impressions per space | every space growing in its peak |
| Enseignement, season 2026 | hub + guide + fiches **indexed before the announcement**; impressions and clicks on fiche/paper queries | indexed by ≈ 29 Oct; long-tail clicks growing through November |
| Enseignement, season 2027 | its share of total clicks in Oct–Dec | ≥ 15–20% → expand to more specialties |
| Practice is used | QCM / mock exam completions per week | growing |
| Retention | "Continuer" clicks | tracked |

GA4 events: `space_choose`, `continue_click`, `next_step_click` (position 1/2/3),
`qcm_complete`, `search` (with the space), `fast_search` (search within 10 s of landing).

---

## 14. Risks

| Risk | Mitigation |
|---|---|
| Google doesn't index the space before the peak | Go live before the announcement; manual indexing requests; links from crawled pages (§10.5) |
| Saad's validation time is the bottleneck | Gate at 12 fiches, not 21; glossary + recipe T make drafts consistent and quick to review |
| Fewer than 3 real past papers found | Start sourcing on day 1; no generated papers; the launch waits for real ones |
| AdSense review still pending at go-live | Explicit decision by Saad (§11) |
| Errors in Arabic or in answers | Validation before publish; official texts as reference; "corrigé proposé, mis à jour le …" |
| The new bottom bar hurts Master traffic | Labels/positions kept, "Sujets" defaults to `/concours`; watch the Master metric vs. baseline |
| Exam rules change (age, format, tests) | One guide page with "Mis à jour le" and sources; updated on announcement day |
| Enseignement audience differs from the current one | Expected (§2); measured separately via content group; 2026 targets are indexing and long tail |
| RTL bugs break French pages | Logical-properties refactor shipped in Phase 0, before any Arabic page |
| Four spaces dilute the brand | One charter, one tagline, one promise |
| Peaks stack up for one person | Calendar prepares each peak a month ahead; recipes in `BANQUE_PROMPTS.md` |

---

## 15. Implementation checklist

| File / area | Change |
|---|---|
| `lib/espaces.js` | **new**: four spaces, `espaceOf()` derived from source + `niveauOf()`, tabs, bottom-bar destinations |
| `public/data/blog.json` | `espace` (+ optional `listeDans`) on every article; nothing on the other JSON files |
| `app/_shared/chrome.js` | `NAV_ITEMS` → spaces, no dropdowns; `TABS` → Cours/Sujets/S'entraîner per space; `MENU_GROUPS` by space; tagline; `initTabbar()` → `sc_espace` (migrate `sc_cours`) |
| `app/_shared/NiveauSwitch.js`, `ConcoursNiveauSwitch.js` | replaced by the space bar |
| `app/_shared/` | **new**: space bar, breadcrumb, next steps, space chooser |
| `app/_shared/progress.js` | remembered space; `sc_last` for "Continuer" |
| `app/HomeClient.js` / `app/page.js` | chooser + default/"Continuer" slot |
| `app/recherche/RechercheClient.js` | group by space, chips, Arabic normalisation |
| `app/layout.js` | GA4 `content_group`; remove global Amiri `<link>` |
| `app/globals.css`, `app/_shared/space.css`, `app/bac/bac.css` + 5 JS components | physical → logical properties |
| `app/enseignement/**` | **new** routes, layout `lang="ar" dir="rtl"`, Noto Naskh Arabic |
| `public/data/enseignement.json` | **new** data file (fiches, papers, QCM) |
| `app/admin/_features/` | blog `espace` fields; **new** Enseignement editor |
| `app/sitemap.js`, `scripts/prerender-to-assets.mjs`, `public/robots.txt` | per-space sitemaps, emitted static, listed in robots.txt |
| `app/_shared/ogImage.js` | Arabic TTF for Enseignement images |
| `scripts/audit-contenu.mjs` | orphan pages; Arabic placeholder words |
| `public/llms.txt` | Enseignement section |
| `BANQUE_PROMPTS.md` | new section **T. ENSEIGNEMENT**; update blog schema (`espace`) |
| `README.md`, `/a-propos` | describe the four spaces |

---

## 16. Changes from v1

| v1 | v2 | Why |
|---|---|---|
| Bottom bar Accueil · Mon espace · S'entraîner · Recherche · Menu | Accueil · Cours · Sujets · S'entraîner · Recherche, destinations per space | v1 removed the direct access to Master papers, duplicated Menu and Accueil |
| Any page visit sets the space | Hub visit, explicit choice, or first visit only | One Google landing shouldn't flip a user's space |
| `espace` stored in every JSON | Derived; stored only in the blog | Bac isn't in a JSON list; concours level is `niveau`, not `categorie` |
| `/evaluation` in Licence and Master | Home Licence, listed in Master | One home space per page |
| Reserved empty slot for "Continuer" | Slot with default content | Static page can't know who returns |
| Arabic fonts "only in Enseignement" | One family, and remove the global Amiri link | Amiri is already loaded on every page |
| "Check" the OG font | Bundle an Arabic TTF | Certain to break today |
| Recipe "E. ENSEIGNEMENT" | Recipe "T. ENSEIGNEMENT" | E is taken by Évaluations |
| Tracking by URL prefix | GA4 content group + baseline first | Prefixes don't match spaces; no baseline existed |
| Launch 15 Nov | Go live ≈ 23 Oct, before the announcement | Peak is 3–4 weeks; indexing takes time |
| "Peaks don't overlap" | They overlap twice a year | Calendar was right, the claim wasn't |
| ≥ 15–20% clicks in the first season | Indexing + long tail in 2026, share target in 2027 | New Arabic audience on a French domain |
| 48 h correction | 48 h for the common test, with validation protocol | Most visible page of the year |
| — | AI production rules, AdSense gate, admin, sitemap/robots, Arabic audit words | Missing in v1 |

---

## 17. Sources

- [Le Matin: Tout savoir sur le concours d'enseignement 2025](https://lematin.ma/enseignement/tout-savoir-sur-le-concours-denseignement-2025-au-maroc/310673): posts per cycle, age limit, calendar, exam structure.
- [La Vérité: Concours enseignants 2025, 19 000 postes](https://www.laverite.ma/concours-enseignants-2025-19-000-postes-ouverts-calendrier-detaille-devoile/): calendar, posts, CRMEF.
- [alwadifa-maroc: 19000 منصب، الترشيح من 30 أكتوبر إلى 13 نونبر](https://alwadifa-maroc.com/offre/show/id/22074)
- [taaliminfo: مباراة التعليم 2025، عدد المناصب والتواريخ](https://www.taaliminfo.com/2025/10/moubaraa-taalim-2025-maroc.html): announcement date (29 Oct), posts per cycle.
- [maroc.ma: Ouverture des candidatures, session de novembre 2025](https://www.maroc.ma/fr/actualites/acces-au-cycle-de-qualification-des-cadres-enseignants-ouverture-des-candidatures-pour-la-session-de)
- [orientation-chabab.com: résultats et calendrier 2025](https://orientation-chabab.com/emploi-public/resultats-concours-taalim): written weight reported at 70% (single source, unverified).
- [emploi-public.ma: Professeur de l'enseignement primaire](https://www.emploi-public.ma/fr/concours/details/f725baa6-c135-11ef-810d-506b8df7d43c)

Re-check every number against the official 2026 announcement (men.gov.ma / wolouj) before it goes
on the site.
