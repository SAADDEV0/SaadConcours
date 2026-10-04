import { iconHtml } from "./icons";

// Illustration à droite des heros : tuile en dégradé avec l'icône de la
// section, halo et anneaux. Remplace le grand emoji estompé. Purement
// décorative (aria-hidden) et masquée sur mobile (design.css), où elle
// repoussait le contenu sans rien apporter.
export default function HeroArt({ icon = "book" }) {
  return (
    <div className="hero-art" aria-hidden="true">
      <span className="hero-art-ring hero-art-ring-1" />
      <span className="hero-art-ring hero-art-ring-2" />
      <span className="hero-art-tile" dangerouslySetInnerHTML={{ __html: iconHtml(icon, { size: 58, strokeWidth: 1.5 }) }} />
    </div>
  );
}
