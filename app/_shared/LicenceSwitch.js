import { Icon } from "./icons";
import { droitOuvert } from "../../lib/droit";

// Choix de la licence en tête de /cours et de /droit : l'économie-gestion et
// le Droit partagent l'espace Licence (lib/espaces.js), et un étudiant en
// droit qui arrive sur /cours ne voyait que de l'économie. Deux grandes
// cartes, la licence de la page cochée, l'autre à un clic. Absent tant que le
// Droit n'est pas lancé.
const CHOIX = [
  { key: "cours", href: "/cours", icon: "chart", titre: "Économie et gestion", sous: "Licence FSJES · S1 à S6" },
  { key: "droit", href: "/droit", icon: "scale", titre: "Droit", ar: "القانون", sous: "Licence FSJES · français et arabe" },
];

export default function LicenceSwitch({ actif }) {
  if (!droitOuvert()) return null;
  return (
    <nav className="lic-switch" aria-label="Choisir sa licence">
      <span className="lic-switch-q">Ta licence :</span>
      <div className="lic-switch-cards">
        {CHOIX.map((c) => {
          const on = c.key === actif;
          return (
            <a key={c.key} href={c.href} className={`lic-switch-card${on ? " on" : ""}`} aria-current={on ? "page" : undefined}>
              <span className="lic-switch-ic">
                <Icon name={c.icon} size={22} />
              </span>
              <span className="lic-switch-body">
                <span className="lic-switch-titre">
                  {c.titre}
                  {c.ar && (
                    <>
                      {" · "}
                      <bdi lang="ar">{c.ar}</bdi>
                    </>
                  )}
                </span>
                <span className="lic-switch-sous">{c.sous}</span>
              </span>
              <span className="lic-switch-etat" aria-hidden="true">
                {on ? <Icon name="check" size={16} /> : "→"}
              </span>
            </a>
          );
        })}
      </div>
    </nav>
  );
}
