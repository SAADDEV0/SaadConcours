import { CONCOURS_NIVEAUX } from "@/lib/concoursNiveaux";

// Même interrupteur que celui des cours (NiveauSwitch : Licence FSJES / Bac),
// appliqué aux sujets de concours : Master / Licence d'excellence. Deux vraies
// pages statiques plutôt qu'un filtre client, pour que chaque niveau ait son
// URL, son H1 et son texte indexables.
export default function ConcoursNiveauSwitch({ active, counts = {} }) {
  return (
    <nav className="niveau-switch" aria-label="Niveau du concours">
      {CONCOURS_NIVEAUX.map((n) => (
        <a
          key={n.code}
          className={`niveau-switch-btn${active === n.code ? " active" : ""}`}
          href={n.href}
          data-niveau={n.code}
          aria-current={active === n.code ? "page" : undefined}
        >
          <span className="niveau-switch-icon">{n.icon}</span>
          <span>
            <span className="niveau-switch-label">
              Concours {n.label}
              {counts[n.code] != null ? ` (${counts[n.code]})` : ""}
            </span>
            <span className="niveau-switch-sub">{n.sub}</span>
          </span>
        </a>
      ))}
    </nav>
  );
}
