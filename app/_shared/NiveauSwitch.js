export default function NiveauSwitch({ active }) {
  return (
    <nav className="niveau-switch" aria-label="Niveau d'études">
      <a className={`niveau-switch-btn${active === "fsjes" ? " active" : ""}`} href="/cours" data-niveau="fsjes">
        <span className="niveau-switch-icon">🎓</span>
        <span>
          <span className="niveau-switch-label">Licence FSJES</span>
          <span className="niveau-switch-sub">Université</span>
        </span>
      </a>
      <a className={`niveau-switch-btn${active === "bac" ? " active" : ""}`} href="/bac/2bac" data-niveau="bac">
        <span className="niveau-switch-icon">📘</span>
        <span>
          <span className="niveau-switch-label">Bac Éco & Gestion</span>
          <span className="niveau-switch-sub">Lycée</span>
        </span>
      </a>
    </nav>
  );
}
