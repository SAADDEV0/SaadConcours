import { chromeHtml, footerHtml } from "./_shared/chrome";
import ChromeInit from "./_shared/ChromeInit";
import { Icon } from "./_shared/icons";

export const metadata = { title: "Page introuvable", robots: { index: false } };

// Avec le header, la barre d'onglets et une recherche : un visiteur arrivé
// sur un lien mort (ancien sujet renommé, lien partagé tronqué) repart vers
// ce qu'il cherchait au lieu de n'avoir que « Retour à l'accueil ».
export default function NotFound() {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: chromeHtml({ active: "" }) }} />
      <ChromeInit />
      <div className="bac-space">
        <div className="bac-wrap" style={{ maxWidth: 620, paddingTop: 48 }}>
          <h1 style={{ fontSize: "1.6rem", margin: "0 0 8px" }}>Page introuvable</h1>
          <p style={{ color: "var(--text-dim)", margin: "0 0 20px" }}>
            Ce concours, cette fiche ou cette page n&apos;existe pas (ou plus) sur SaadConcours. Cherche-la par son nom :
          </p>
          <form className="home-search" action="/recherche" method="get" role="search">
            <Icon name="search" size={18} />
            <input type="search" name="q" placeholder="Concours, cours, faculté…" aria-label="Rechercher dans tout le site" />
            <button type="submit" className="dl-btn">
              Rechercher
            </button>
          </form>
          <div className="home-links" style={{ marginTop: 28 }}>
            <a className="home-link" href="/concours">
              <strong>Concours Master</strong>
              <span>Tous les sujets</span>
            </a>
            <a className="home-link" href="/cours">
              <strong>Cours Licence FSJES</strong>
              <span>Du S1 au S6</span>
            </a>
            <a className="home-link" href="/bac/2bac">
              <strong>Cours 2ᵉ Bac SEG</strong>
              <span>Toutes les matières</span>
            </a>
            <a className="home-link" href="/">
              <strong>Accueil</strong>
              <span>SaadConcours</span>
            </a>
          </div>
        </div>
      </div>
      <div dangerouslySetInnerHTML={{ __html: footerHtml() }} />
    </>
  );
}
