// Liste compacte de sujets de concours liés à un module de cours
// (lib/concoursParModule.js) : page du module et pages de chapitre FSJES.
export default function ConcoursLies({ id, titre, intro, sujets, lienTous }) {
  if (!sujets.length) return null;
  return (
    <section id={id} className="bac-semestre">
      <h2 className="bac-semestre-title">
        <span className="bac-semestre-code">📚</span>
        {titre}
      </h2>
      {intro && <p className="sp-concours-intro">{intro}</p>}
      <ul className="sp-concours-list">
        {sujets.map((s) => (
          <li key={s.id}>
            <a href={`/concours/${encodeURIComponent(s.id)}`}>
              <span className="sp-concours-annee">{/^\d{4}$/.test(String(s.annee)) ? s.annee : "—"}</span>
              <span className="sp-concours-titre">{s.titre}</span>
              <span className="sp-concours-lieu">
                {s.etablissement}
                {s.ville ? ` · ${s.ville}` : ""}
              </span>
            </a>
          </li>
        ))}
      </ul>
      {lienTous && (
        <a className="sp-concours-more" href={lienTous.href}>
          {lienTous.label} →
        </a>
      )}
    </section>
  );
}
