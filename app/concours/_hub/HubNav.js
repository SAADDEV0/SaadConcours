import { isMasterDroit } from "@/lib/concoursNiveaux";
import { masterHref, masterHubs, villeHref, villeHubs } from "@/lib/concoursHubs";

// « Par ville » et « Par master » sous une liste de concours : les liens en
// HTML vers les hubs, qui lient à leur tour chaque fiche (la liste n'envoie
// plus que sa première page de lignes). `concours` : la liste publique
// complète. `droit` : la liste des masters de droit ne montre que leurs hubs ;
// `parVille` à false retire les villes (leurs chiffres mêlent tous les niveaux).
export default function HubNav({ concours, droit = false, parVille = true }) {
  const masters = masterHubs(concours).filter((h) => h.sujets.some(isMasterDroit) === droit);
  const villes = parVille ? villeHubs(concours) : [];
  if (!masters.length && !villes.length) return null;
  return (
    <section className="hub-nav" aria-label="Parcourir les sujets">
      {masters.length > 0 && (
        <>
          <h2 className="bac-section-title">Parcourir par master</h2>
          <div className="sp-chips hub-chips">
            {masters.map((h) => (
              <a key={h.slug} className="bac-res-chip on" href={masterHref(h)}>
                {h.nom.replace(/^Master /, "")} · {h.sujets.length}
              </a>
            ))}
          </div>
        </>
      )}
      {villes.length > 0 && (
        <>
          <h2 className="bac-section-title">Parcourir par ville</h2>
          <div className="sp-chips hub-chips">
            {villes.map((v) => (
              <a key={v.slug} className="bac-res-chip on" href={villeHref(v.ville)}>
                {v.ville} · {v.sujets.length}
              </a>
            ))}
          </div>
        </>
      )}
    </section>
  );
}
