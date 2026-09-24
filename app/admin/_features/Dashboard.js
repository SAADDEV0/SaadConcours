"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Icon from "../_ui/Icon";
import { Alert, BarList, Delta, Hero, LineChart, Seg, SectionTitle, Skeleton, Stat } from "../_ui/kit";
import { useJson, useCorrigeFiles } from "../_lib/content";
import { COLLECTIONS } from "../_lib/collections";
import { api } from "../_lib/api";
import { useLocalStorage } from "../_lib/hooks";
import { daysUntil, num, plural, timeAgo } from "../_lib/format";
import { useDeployState } from "../_ui/DeployStatus";
import { labelForPath } from "../_lib/labels";

function greeting() {
  const h = new Date().getHours();
  return h < 5 ? "Bonne nuit" : h < 12 ? "Bonjour" : h < 18 ? "Bon après-midi" : "Bonsoir";
}

function academicYear() {
  const d = new Date();
  const y = d.getFullYear();
  return d.getMonth() >= 8 ? `${y}-${y + 1}` : `${y - 1}-${y}`;
}

function useMetrics(preset) {
  const [state, setState] = useState({ data: null, error: null });
  useEffect(() => {
    let alive = true;
    setState((s) => ({ ...s, error: null }));
    api(`/api/admin/metrics?preset=${preset}&scope=summary`)
      .then((data) => alive && setState({ data, error: null }))
      .catch((err) => alive && setState({ data: null, error: err.message }));
    return () => {
      alive = false;
    };
  }, [preset]);
  return state;
}

export default function Dashboard() {
  const [preset, setPreset] = useLocalStorage("ax-dash-range", "30d");
  const { data: m, error: mError } = useMetrics(preset);
  const concours = useJson(COLLECTIONS.concours.path);
  const news = useJson(COLLECTIONS.news.path);
  const cours = useJson(COLLECTIONS.cours.path);
  const blog = useJson(COLLECTIONS.blog.path);
  const quiz = useJson(COLLECTIONS.quiz.path);
  const corrigeFiles = useCorrigeFiles();
  const deploy = useDeployState();

  const content = { concours: concours.data, cours: cours.data, blog: blog.data, quiz: quiz.data, news: news.data };

  // « À traiter » : ce qui demande une action, classé par urgence.
  const todo = useMemo(() => {
    const items = [];
    const n = news.data || [];
    const closing = n.filter((x) => {
      const d = daysUntil(x.date_limite);
      return !x.cloture && d !== null && d >= 0 && d <= 3;
    });
    if (closing.length)
      items.push({
        icon: "⏰",
        tone: "red",
        title: `${plural(closing.length, "concours ferme", "concours ferment")} sous 3 jours`,
        desc: closing.slice(0, 3).map((x) => x.titre).join(" · "),
        href: "/admin/annonces?etat=bientot",
        cta: "Relayer",
      });
    const expired = n.filter((x) => !x.cloture && daysUntil(x.date_limite) !== null && daysUntil(x.date_limite) < 0);
    if (expired.length)
      items.push({
        icon: "🧹",
        title: `${plural(expired.length, "annonce")} dont la date limite est passée`,
        desc: "Toujours marquées « ouvertes » sur le site : à clôturer.",
        href: "/admin/annonces?etat=ouvert",
        cta: "Clôturer",
      });
    const c = concours.data || [];
    const drafts = c.filter((x) => x.statut === "brouillon");
    if (drafts.length)
      items.push({ icon: "📝", title: `${plural(drafts.length, "concours")} en brouillon`, desc: "Invisibles sur le site tant qu'ils ne sont pas publiés.", href: "/admin/concours?statut=brouillon", cta: "Voir" });
    if (corrigeFiles) {
      const sans = c.filter((x) => !x.corrige_md && !corrigeFiles.has(x.id));
      if (sans.length)
        items.push({ icon: "✍️", title: `${plural(sans.length, "concours")} sans corrigé`, desc: "Le corrigé est ce qui fait revenir les visiteurs.", href: "/admin/concours?corrige=non", cta: "Rédiger" });
    }
    const sansScan = c.filter((x) => !(x.images || []).length);
    if (sansScan.length) items.push({ icon: "🖼️", title: `${plural(sansScan.length, "concours")} sans scan du sujet`, desc: "Les scans rassurent sur l'authenticité du sujet.", href: "/admin/concours?scans=non", cta: "Compléter" });
    const misses = (m?.searchMisses || []).filter((x) => x.score >= 2);
    if (misses.length)
      items.push({
        icon: "🔎",
        title: `${plural(misses.length, "recherche")} sans résultat`,
        desc: misses.slice(0, 4).map((x) => `« ${x.member} »`).join(", "),
        href: "/admin/statistiques?onglet=recherches",
        cta: "Analyser",
      });
    if (deploy.state === "fail")
      items.unshift({ icon: "🚨", tone: "red", title: "Le dernier déploiement a échoué", desc: "Les dernières modifications ne sont pas en ligne.", href: "/admin/activite?onglet=deploiements", cta: "Voir" });
    return items;
  }, [news.data, concours.data, corrigeFiles, m, deploy.state]);

  const series = m?.metrics
    ? [
        { name: "Visites", color: "#4f8cff", area: true, points: m.metrics.visits.points },
        { name: "PDF téléchargés", color: "#a855f7", area: true, points: m.metrics.pdf.points },
      ]
    : null;

  const counts = [
    { key: "concours", label: "Concours", icon: "book", href: "/admin/concours" },
    { key: "cours", label: "Cours Licence", icon: "notebook", href: "/admin/cours" },
    { key: "quiz", label: "Évaluations", icon: "quiz", href: "/admin/evaluations" },
    { key: "blog", label: "Articles", icon: "news", href: "/admin/blog" },
  ];

  const lastSubs = m?.subscribers || [];
  const subsNow = lastSubs.length ? lastSubs[lastSubs.length - 1].count : null;
  const subs30 = lastSubs.length ? subsNow - lastSubs[0].count : null;

  return (
    <>
      <Hero
        icon="🎓"
        eyebrow={`Session ${academicYear()}`}
        title={`${greeting()} Saad, voici l'état du site.`}
        actions={
          <>
            <Link className="ax-btn" href="/admin/social">
              <Icon name="share" size="sm" /> Publier sur les réseaux
            </Link>
            <Link className="ax-btn primary" href="/admin/concours/editer?nouveau=1">
              <Icon name="plus" /> Nouveau concours
            </Link>
          </>
        }
      >
        {deploy.state === "running"
          ? "Un déploiement est en cours : tes dernières modifications seront en ligne dans quelques minutes."
          : deploy.latest
            ? `Site à jour — dernière mise en ligne ${timeAgo(deploy.latest.updatedAt)}.`
            : "Tout ce que tu enregistres ici part sur GitHub, puis en ligne automatiquement."}
      </Hero>

      <div className="ax-card-head">
        <SectionTitle>Audience</SectionTitle>
        <Seg
          ariaLabel="Période"
          value={preset}
          onChange={setPreset}
          options={[
            { value: "7d", label: "7 j" },
            { value: "30d", label: "30 j" },
            { value: "90d", label: "90 j" },
            { value: "12m", label: "12 mois" },
          ]}
        />
      </div>
      {mError && <Alert tone="warn" title="Statistiques indisponibles">{mError}</Alert>}
      <div className="ax-grid c4 ax-section">
        <Stat
          icon="users"
          label="Visites"
          value={m ? num(m.metrics?.visits.total) : "…"}
          foot={m?.metrics && (<><Delta value={m.metrics.visits.deltaPct} /> vs période précédente</>)}
          spark={m?.metrics?.visits.points.map((p) => p.value)}
          href="/admin/statistiques"
        />
        <Stat
          icon="download"
          label="PDF téléchargés"
          value={m ? num(m.metrics?.pdf.total) : "…"}
          foot={m?.metrics && (<><Delta value={m.metrics.pdf.deltaPct} /> · {String(m.metrics.conversionPct).replace(".", ",")} % des visites</>)}
          spark={m?.metrics?.pdf.points.map((p) => p.value)}
          color="#a855f7"
          href="/admin/statistiques?onglet=pdf"
        />
        <Stat icon="zap" label="Aujourd'hui" value={m?.totals ? num(m.totals.visitsToday) : "…"} foot={m?.totals && `visites · ${num(m.totals.pdfToday)} PDF`} />
        <Stat
          icon="mail"
          label="Abonnés"
          value={subsNow !== null ? num(subsNow) : "…"}
          foot={subs30 !== null && `${subs30 >= 0 ? "+" : ""}${num(subs30)} en 30 jours`}
          spark={lastSubs.map((p) => p.count)}
          href="/admin/abonnes"
        />
      </div>

      <div className="ax-grid main-side ax-section">
        <div className="ax-card">
          {series ? <LineChart series={series} /> : <Skeleton rows={1} height={240} />}
        </div>
        <div className="ax-card">
          <SectionTitle aside={<Link href="/admin/statistiques?onglet=pages">Tout voir</Link>}>Pages les plus vues</SectionTitle>
          {m ? (
            <BarList items={(m.topPaths || []).map((p) => ({ key: p.member, label: labelForPath(p.member, content), value: p.score }))} limit={8} />
          ) : (
            <Skeleton rows={6} height={20} />
          )}
        </div>
      </div>

      <div className="ax-grid main-side ax-section">
        <section className="ax-card">
          <SectionTitle aside={todo.length ? plural(todo.length, "point") : null}>À traiter</SectionTitle>
          {!todo.length ? (
            <Alert tone="ok" title="Rien d'urgent">Pas d'annonce qui ferme, pas de brouillon oublié. Bon moment pour écrire un article.</Alert>
          ) : (
            <div className="ax-todo">
              {todo.map((t) => (
                <Link className="ax-todo-item" href={t.href} key={t.title}>
                  <span className="ax-todo-icon">{t.icon}</span>
                  <span className="ax-todo-main">
                    <span className="ax-todo-title" style={t.tone === "red" ? { color: "var(--red)" } : undefined}>
                      {t.title}
                    </span>
                    {t.desc && <span className="ax-todo-desc">{t.desc}</span>}
                  </span>
                  <span className="ax-btn xs">{t.cta}</span>
                </Link>
              ))}
            </div>
          )}
        </section>
        <section className="ax-card">
          <SectionTitle>Contenu en ligne</SectionTitle>
          <ul className="ax-list">
            {counts.map((c) => {
              const list = content[c.key];
              const col = COLLECTIONS[c.key];
              const pub = Array.isArray(list) ? list.filter(col.isPublished).length : null;
              return (
                <li key={c.key}>
                  <Icon name={c.icon} />
                  <span className="ax-list-main">
                    <Link href={c.href} className="ax-list-title">
                      {c.label}
                    </Link>
                    <span className="ax-list-meta">{Array.isArray(list) ? `${num(list.length - pub)} brouillon${list.length - pub > 1 ? "s" : ""}` : "…"}</span>
                  </span>
                  <span className="ax-num">{pub === null ? "…" : num(pub)}</span>
                </li>
              );
            })}
            <li>
              <Icon name="megaphone" />
              <span className="ax-list-main">
                <Link href="/admin/annonces" className="ax-list-title">
                  Concours ouverts
                </Link>
                <span className="ax-list-meta">mis à jour par le robot almaster</span>
              </span>
              <span className="ax-num">{Array.isArray(news.data) ? num(news.data.filter((x) => !x.cloture).length) : "…"}</span>
            </li>
          </ul>
        </section>
      </div>

      <SectionTitle>Raccourcis</SectionTitle>
      <div className="ax-quick">
        {[
          ["📝", "Nouveau concours", "Énoncé, corrigé, scans", "/admin/concours/editer?nouveau=1"],
          ["📦", "Import groupé", "JSON ou CSV, un seul commit", "/admin/concours/import"],
          ["✍️", "Nouvel article", "Blog et référencement", "/admin/blog/editer?nouveau=1"],
          ["📣", "Studio social", "Visuel + textes par réseau", "/admin/social"],
          ["🖨️", "Studio PDF", "Apparence des PDF du site", "/admin/pdf"],
          ["🗑️", "Corbeille", "Restaurer un élément supprimé", "/admin/activite?onglet=corbeille"],
        ].map(([e, t, d, h]) => (
          <Link key={t} href={h}>
            <span className="ax-quick-icon">{e}</span>
            <strong>{t}</strong>
            <span>{d}</span>
          </Link>
        ))}
      </div>
    </>
  );
}
