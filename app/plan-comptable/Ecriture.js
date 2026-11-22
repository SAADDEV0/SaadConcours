import { pcgeCompteHref, pcgeTitre } from "../../lib/planComptable";

// Écriture type d'un compte (NOTES[code].e) : un petit journal débit / crédit,
// chaque numéro menant à sa fiche ou à son ancre.
const DH = new Intl.NumberFormat("fr-FR");

export default function Ecriture({ e }) {
  return (
    <div className="pcge-ecriture">
      <div className="pcge-ecriture-titre">{e.titre}</div>
      <table>
        <thead>
          <tr>
            <th>Compte</th>
            <th className="num">Débit</th>
            <th className="num">Crédit</th>
          </tr>
        </thead>
        <tbody>
          {e.l.map(([sens, compte, montant], i) => (
            <tr key={i}>
              <td className={sens === "C" ? "cr" : undefined}>
                <a href={pcgeCompteHref(compte)}>{compte}</a> {pcgeTitre(compte)}
              </td>
              <td className="num">{sens === "D" ? DH.format(montant) : ""}</td>
              <td className="num">{sens === "C" ? DH.format(montant) : ""}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
