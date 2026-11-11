"use client";

import { useEffect, useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Icon from "../_ui/Icon";
import { ErrorState, Hero, Seg, Skeleton, Tabs, useTab } from "../_ui/kit";
import { api, downloadText } from "../_lib/api";
import { useJson } from "../_lib/content";
import { COLLECTIONS } from "../_lib/collections";
import { useLocalStorage } from "../_lib/hooks";
import { num } from "../_lib/format";
import { RANGE_PRESETS, dayKey } from "@/lib/dateRange";
import Audience from "./stats/Audience";
import { PageDetail, PagesTab } from "./stats/Pages";
import { AcquisitionTab, HoursTab } from "./stats/Acquisition";
import { PdfTab } from "./stats/Pdf";
import { SearchesTab } from "./stats/Searches";
import { JournalTab } from "./stats/Journal";
import { VisitorsTab } from "./stats/Visitors";

// Statistiques v2. Audit du 2026-11-05 : « Visites » comptait en réalité les
// nouveaux navigateurs (une seule fois, pour toujours), le taux de
// téléchargement divisait donc les PDF par les nouveaux visiteurs, et tous les
// classements (pages, sources, villes) ne portaient que sur l'historique
// complet. La v2 mesure de vraies visites (sessions), les pages vues, et le
// détail jour par jour qui permet de tout lire sur la période choisie.

const TABS = [
  { key: "audience", label: "Vue d'ensemble", icon: "chart" },
  { key: "pages", label: "Pages", icon: "file" },
  { key: "visiteurs", label: "Visiteurs", icon: "clock" },
  { key: "acquisition", label: "Acquisition", icon: "globe" },
  { key: "horaires", label: "Horaires", icon: "clock" },
  { key: "pdf", label: "PDF", icon: "download" },
  { key: "recherches", label: "Recherches sans résultat", icon: "search" },
  { key: "journal", label: "Journal", icon: "activity" },
];

const DEFAULT_PERIOD = { preset: "30d" };

function periodQuery(p) {
  if (p?.preset === "custom" && p.from && p.to) return `from=${p.from}&to=${p.to}`;
  return `preset=${RANGE_PRESETS.some((r) => r.id === p?.preset) ? p.preset : DEFAULT_PERIOD.preset}`;
}

export default function Statistics() {
  const [tab, setTab] = useTab(TABS, "onglet", ["page"]);
  // ?page=/chemin : fiche d'une page. Dans l'URL pour que le bouton Retour du
  // navigateur ramène à la liste.
  const sp = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const pagePath = tab === "pages" ? sp.get("page") : null;
  function openPage(path) {
    const next = new URLSearchParams(sp.toString());
    if (path) {
      next.set("page", path);
      next.set("onglet", "pages");
    } else next.delete("page");
    router.push(`${pathname}?${next.toString()}`, { scroll: true });
  }

  const [period, setPeriod, periodReady] = useLocalStorage("ax-stats-period", DEFAULT_PERIOD);
  const query = periodQuery(period);
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [nonce, setNonce] = useState(0);

  // Attend la période mémorisée (sinon une première requête part sur 30 j puis
  // une seconde sur la vraie période, et la plus lente des deux gagnait), et
  // annule la requête précédente quand la période change.
  useEffect(() => {
    if (!periodReady) return undefined;
    const ctrl = new AbortController();
    setError("");
    setData(null);
    api(`/api/admin/metrics?${query}`, { signal: ctrl.signal })
      .then(setData)
      .catch((e) => e.name !== "AbortError" && setError(e.message));
    return () => ctrl.abort();
  }, [query, periodReady, nonce]);

  const concours = useJson(COLLECTIONS.concours.path);
  const cours = useJson(COLLECTIONS.cours.path);
  const quiz = useJson(COLLECTIONS.quiz.path);
  const blog = useJson(COLLECTIONS.blog.path);
  const droit = useJson(COLLECTIONS.droit.path);
  // Mémorisé : un nouvel objet à chaque rendu recalculait tous les libellés du
  // journal et des classements à chaque frappe.
  const content = useMemo(
    () => ({ concours: concours.data, cours: cours.data, quiz: quiz.data, blog: blog.data, droit: droit.data }),
    [concours.data, cours.data, quiz.data, blog.data, droit.data]
  );

  function exportAll() {
    downloadText(`statistiques-${data.range.from}-${data.range.to}.json`, JSON.stringify(data, null, 2));
  }

  const tabs = TABS.map((t) => (t.key === "recherches" && data?.searchMisses?.length ? { ...t, count: num(data.searchMisses.length), tone: "amber" } : t));

  return (
    <>
      <Hero
        icon="📊"
        eyebrow="Pilotage · Mesure d'audience maison · v2"
        title="Statistiques"
        actions={
          <>
            <PeriodPicker period={period} onChange={setPeriod} range={data?.range} />
            <button type="button" className="ax-btn icon" onClick={() => setNonce((n) => n + 1)} aria-label="Actualiser" title="Actualiser">
              <Icon name="refresh" size="sm" />
            </button>
            <button type="button" className="ax-btn" onClick={exportAll} disabled={!data}>
              <Icon name="download" size="sm" /> Exporter
            </button>
          </>
        }
      >
        Mesurée par le site lui-même (sans cookie publicitaire), hors visites de la console. Une visite = une session (onglet) ; un nouveau visiteur = un navigateur venu pour la première fois.
      </Hero>
      <Tabs tabs={tabs} value={tab} onChange={setTab} />
      {error && <ErrorState error={error} onRetry={() => setNonce((n) => n + 1)} />}
      {!data && !error && <Skeleton rows={5} height={90} />}
      {data && tab === "audience" && <Audience data={data} content={content} onTab={setTab} onOpenPage={openPage} />}
      {data && tab === "pages" && (
        <>
          {/* Reste monté pendant la fiche : recherche et « Afficher plus » retrouvés au retour. */}
          <div hidden={Boolean(pagePath)}>
            <PagesTab data={data} content={content} onOpen={openPage} />
          </div>
          {pagePath && <PageDetail key={pagePath} path={pagePath} query={query} content={content} onBack={() => openPage(null)} />}
        </>
      )}
      {data && tab === "visiteurs" && <VisitorsTab content={content} />}
      {data && tab === "acquisition" && <AcquisitionTab data={data} />}
      {data && tab === "horaires" && <HoursTab data={data} />}
      {data && tab === "pdf" && <PdfTab data={data} content={content} />}
      {data && tab === "recherches" && <SearchesTab data={data} onDismissed={(term) => setData((d) => ({ ...d, searchMisses: d.searchMisses.filter((s) => String(s.member) !== term) }))} />}
      {data && tab === "journal" && <JournalTab visits={data.recentVisits || []} pdfs={data.recentPdf || []} content={content} />}
    </>
  );
}

// Périodes toutes faites + « Perso. » (deux dates, 400 jours au plus).
function PeriodPicker({ period, onChange, range }) {
  const custom = period?.preset === "custom";
  const today = dayKey(new Date());
  const [draft, setDraft] = useState(null);
  const from = draft?.from ?? period?.from ?? range?.from ?? today;
  const to = draft?.to ?? period?.to ?? range?.to ?? today;
  const valid = from && to && from <= to && to <= today;

  function pick(v) {
    if (v === "custom") {
      setDraft({ from: range?.from || today, to: range?.to || today });
      onChange({ preset: "custom", from: range?.from || today, to: range?.to || today });
    } else {
      setDraft(null);
      onChange({ preset: v });
    }
  }
  function apply(next) {
    setDraft(next);
    if (next.from && next.to && next.from <= next.to && next.to <= today) onChange({ preset: "custom", from: next.from, to: next.to });
  }

  return (
    <>
      <Seg ariaLabel="Période" value={custom ? "custom" : period?.preset || "30d"} onChange={pick} options={[...RANGE_PRESETS.map((p) => ({ value: p.id, label: p.short, title: p.label })), { value: "custom", label: "Perso.", title: "Choisir deux dates" }]} />
      {custom && (
        <span className={`ax-range${valid ? "" : " invalid"}`}>
          <input type="date" className="ax-input" value={from} max={to || today} onChange={(e) => apply({ from: e.target.value, to })} aria-label="Du" />
          <span aria-hidden="true">→</span>
          <input type="date" className="ax-input" value={to} min={from} max={today} onChange={(e) => apply({ from, to: e.target.value })} aria-label="Au" />
        </span>
      )}
    </>
  );
}
