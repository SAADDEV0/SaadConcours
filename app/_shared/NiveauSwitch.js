// Interrupteur des espaces de cours (Licence FSJES / Bac), en contrôle
// segmenté (globals.css). Deux vraies pages, chacune avec son URL.
export default function NiveauSwitch({ active }) {
  return (
    <nav className="niveau-switch" aria-label="Niveau d'études">
      <a
        className={`niveau-switch-btn${active === "fsjes" ? " active" : ""}`}
        href="/cours"
        data-niveau="fsjes"
        aria-current={active === "fsjes" ? "page" : undefined}
      >
        <span className="niveau-switch-label">Licence FSJES</span>
        <span className="niveau-switch-sub">Université</span>
      </a>
      <a
        className={`niveau-switch-btn${active === "bac" ? " active" : ""}`}
        href="/bac/2bac"
        data-niveau="bac"
        aria-current={active === "bac" ? "page" : undefined}
      >
        <span className="niveau-switch-label">Bac Éco & Gestion</span>
        <span className="niveau-switch-sub">Lycée</span>
      </a>
    </nav>
  );
}
