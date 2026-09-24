"use client";

import { useEffect, useMemo, useState } from "react";
import Icon from "../_ui/Icon";
import { Alert, Empty, ErrorState, Hero, LineChart, SectionTitle, Skeleton } from "../_ui/kit";
import { useConfirm, useToast } from "../_ui/feedback";
import { api, downloadFile, downloadText } from "../_lib/api";
import { dateFr, matchQuery, num, plural } from "../_lib/format";

const PAGE = 100;

export default function Subscribers() {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [q, setQ] = useState("");
  const [selected, setSelected] = useState(() => new Set());
  const [email, setEmail] = useState("");
  const [limit, setLimit] = useState(PAGE);
  const [busy, setBusy] = useState(false);
  const toast = useToast();
  const confirm = useConfirm();

  function load() {
    setError("");
    api("/api/admin/subscribers").then(setData).catch((e) => setError(e.message));
  }
  useEffect(load, []);

  const list = useMemo(() => (data?.subscribers || []).filter((s) => matchQuery(s.email, q)), [data, q]);
  const domains = useMemo(() => {
    const m = new Map();
    for (const s of data?.subscribers || []) {
      const d = s.email.split("@")[1] || "?";
      m.set(d, (m.get(d) || 0) + 1);
    }
    return [...m.entries()].sort((a, b) => b[1] - a[1]).slice(0, 6);
  }, [data]);
  const last7 = useMemo(() => (data?.subscribers || []).filter((s) => s.subscribedAt && Date.now() - s.subscribedAt < 7 * 86400000).length, [data]);

  async function add(e) {
    e.preventDefault();
    setBusy(true);
    try {
      await api("/api/admin/subscribers", { method: "POST", body: { email } });
      setEmail("");
      toast.success("Abonné ajouté");
      load();
    } catch (err) {
      toast.error("Ajout impossible", err.message);
    } finally {
      setBusy(false);
    }
  }

  async function remove(emails) {
    const ok = await confirm({
      title: emails.length > 1 ? `Retirer ${plural(emails.length, "abonné")} ?` : `Retirer ${emails[0]} ?`,
      body: "L'adresse est définitivement effacée de la liste (RGPD / loi 09-08 : c'est ce qu'il faut faire quand quelqu'un demande à être retiré).",
      confirmLabel: "Retirer",
      tone: "danger",
    });
    if (!ok) return;
    setBusy(true);
    try {
      const r = await api("/api/admin/subscribers", { method: "DELETE", body: { emails } });
      setSelected(new Set());
      toast.success(`${plural(r.removed, "abonné retiré")}`);
      load();
    } catch (err) {
      toast.error("Suppression impossible", err.message);
    } finally {
      setBusy(false);
    }
  }

  const history = (data?.history || []).map((p) => ({ key: p.date, label: dateFr(p.date, { day: "numeric", month: "short" }), full: dateFr(p.date), value: p.count }));

  return (
    <>
      <Hero
        icon="📬"
        eyebrow="Diffusion · Audience"
        title="Abonnés aux alertes"
        actions={
          <>
            <button type="button" className="ax-btn" onClick={() => downloadText("abonnes.txt", (data?.subscribers || []).map((s) => s.email).join("\n") + "\n", "text/plain")} disabled={!data}>
              <Icon name="copy" size="sm" /> Liste brute
            </button>
            <button type="button" className="ax-btn primary" onClick={() => downloadFile("/api/admin/subscribers?format=csv")} disabled={!data}>
              <Icon name="download" /> Exporter en CSV
            </button>
          </>
        }
        stats={data ? [{ value: num(data.count), label: "abonnés" }, { value: `+${num(last7)}`, label: "ces 7 derniers jours" }] : []}
      >
        Les visiteurs s&apos;inscrivent depuis l&apos;accueil, /news et la fenêtre d&apos;inscription. Les emails ne partent plus du site : exporte la liste vers ta plateforme d&apos;emailing.
      </Hero>

      <Alert tone="info" title="Envoi des emails : plateforme externe">
        L&apos;envoi automatique (Gmail + cron quotidien) a été retiré. Importe le CSV (colonnes <code>email</code>, <code>date_inscription</code>) dans ta plateforme — Brevo, Mailchimp, MailerLite… — et
        pense à y retirer les personnes que tu supprimes ici.
      </Alert>

      {error && <ErrorState error={error} onRetry={load} />}
      {!data && !error && <Skeleton rows={6} />}
      {data && (
        <div className="ax-grid main-side">
          <div className="ax-stack">
            <div className="ax-toolbar ax-mb0">
              <div className="ax-search">
                <Icon name="search" size="sm" />
                <input className="ax-input" placeholder={`Rechercher parmi ${num(data.count)} adresses…`} value={q} onChange={(e) => (setQ(e.target.value), setLimit(PAGE))} />
              </div>
              {selected.size > 0 && (
                <button type="button" className="ax-btn danger" disabled={busy} onClick={() => remove([...selected])}>
                  <Icon name="trash" size="sm" /> Retirer {selected.size}
                </button>
              )}
            </div>
            {!list.length ? (
              <Empty icon="📭" title={q ? "Aucune adresse ne correspond" : "Aucun abonné pour l'instant"} />
            ) : (
              <div className="ax-table-wrap">
                <table className="ax-table">
                  <thead>
                    <tr>
                      <th className="w-check">
                        <input
                          type="checkbox"
                          aria-label="Tout sélectionner"
                          checked={list.slice(0, limit).every((s) => selected.has(s.email))}
                          onChange={(e) => setSelected(e.target.checked ? new Set(list.slice(0, limit).map((s) => s.email)) : new Set())}
                        />
                      </th>
                      <th>Adresse</th>
                      <th>Inscription</th>
                      <th className="w-actions" />
                    </tr>
                  </thead>
                  <tbody>
                    {list.slice(0, limit).map((s) => (
                      <tr key={s.email} className={selected.has(s.email) ? "selected" : undefined}>
                        <td className="w-check">
                          <input
                            type="checkbox"
                            checked={selected.has(s.email)}
                            aria-label={s.email}
                            onChange={() =>
                              setSelected((x) => {
                                const n = new Set(x);
                                if (n.has(s.email)) n.delete(s.email);
                                else n.add(s.email);
                                return n;
                              })
                            }
                          />
                        </td>
                        <td>
                          <strong>{s.email}</strong>
                        </td>
                        <td className="ax-muted">{s.subscribedAt ? dateFr(s.subscribedAt) : "avant le suivi des dates"}</td>
                        <td className="w-actions">
                          <button type="button" className="ax-btn ghost icon sm" aria-label={`Retirer ${s.email}`} onClick={() => remove([s.email])}>
                            <Icon name="trash" size="sm" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {list.length > limit && (
                  <div className="ax-more">
                    <button type="button" className="ax-btn" onClick={() => setLimit((l) => l + PAGE)}>
                      Afficher plus ({num(list.length - limit)} restants)
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
          <aside className="ax-stack">
            <section className="ax-card">
              <SectionTitle>Ajouter à la main</SectionTitle>
              <form onSubmit={add} className="ax-input-group">
                <input className="ax-input" type="email" required placeholder="prenom@exemple.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                <button className="ax-btn primary icon" type="submit" disabled={busy} aria-label="Ajouter">
                  <Icon name="plus" />
                </button>
              </form>
            </section>
            <section className="ax-card">
              <SectionTitle>Croissance (30 jours)</SectionTitle>
              <LineChart series={[{ name: "Abonnés", color: "#4f8cff", area: true, points: history }]} height={160} />
            </section>
            <section className="ax-card">
              <SectionTitle>Fournisseurs d&apos;email</SectionTitle>
              <ul className="ax-list">
                {domains.map(([d, n]) => (
                  <li key={d}>
                    <span className="ax-list-main">{d}</span>
                    <span className="ax-num">{num(n)}</span>
                  </li>
                ))}
              </ul>
            </section>
          </aside>
        </div>
      )}
    </>
  );
}
