#!/usr/bin/env python3
"""
Récupère les publications récentes de almaster-maroc.com (masters/concours ouverts)
et met à jour data/news.json.

Stratégie en cascade (la première qui fonctionne est utilisée) :
  1. Flux RSS/Atom (le plus stable)
  2. API REST WordPress (/wp-json/wp/v2/posts)
  3. Scraping HTML générique de la page d'accueil

Le script n'écrase jamais data/news.json avec un résultat vide : si aucune
stratégie ne retourne d'article, il s'arrête sans rien modifier (le site
garde ses dernières données connues).
"""
import hashlib
import json
import re
import sys
from datetime import datetime, date
from pathlib import Path
from urllib.parse import urljoin

import requests

BASE_URL = "https://www.almaster-maroc.com/"
DATA_FILE = Path(__file__).resolve().parent.parent / "public" / "data" / "news.json"
MAX_ITEMS = 120
TIMEOUT = 20
HEADERS = {"User-Agent": "Mozilla/5.0 (compatible; SaadConcoursBot/1.0; +https://saaddev0.github.io/SaadConcours/)"}

VILLES = [
    "Casablanca", "Rabat", "Fès", "Fez", "Marrakech", "Tanger", "Agadir",
    "Meknès", "Oujda", "Kénitra", "Tétouan", "Settat", "El Jadida",
    "Béni Mellal", "Beni Mellal", "Nador", "Taza", "Khouribga", "Safi",
    "Mohammedia", "Guelmim", "Laâyoune", "Errachidia", "Ouarzazate", "Al Hoceïma",
]

ETABLISSEMENTS = [
    "FSJES", "ENCG", "FSEG", "FEG", "ENSA", "FST", "ISCAE", "ENSAM", "ESITH",
    "ENSET", "FSR", "FLSH", "FSA", "FP", "EST", "ENS",
    "Faculté des Sciences Juridiques",
]

FILIERES = [
    "CCA", "Comptabilité", "Contrôle de Gestion", "GFCF", "Finance",
    "Fiscalité", "Audit", "Banque", "Management", "Économie",
    "Gestion", "Marketing", "Logistique",
]

MONTHS_FR = {
    "janvier": 1, "février": 2, "fevrier": 2, "mars": 3, "avril": 4, "mai": 5,
    "juin": 6, "juillet": 7, "août": 8, "aout": 8, "septembre": 9,
    "octobre": 10, "novembre": 11, "décembre": 12, "decembre": 12,
}

DATE_TOKEN = r"(\d{1,2})[\/\-\s](\d{1,2}|[a-zéû]+)[\/\-\s](\d{4})"

# Two shapes cover almost everything actually seen on these announcement
# pages:
#  1. An explicit "date limite" / "jusqu'au" / "avant le" phrase (the
#     original, still-valid pattern) — DATE_LIMITE_RE.
#  2. "Préinscription en ligne du 17/08/2026 au 15/09/2026" — a plain
#     "du <date> au <date>" range with no "date limite" wording at all,
#     which is in fact the *majority* phrasing on almaster-maroc.com.
#     DATE_RANGE_RE requires the leading "du <date>" so a lone "au" (an
#     extremely common word) can't match on its own — only the closing
#     date of a real range is captured.
DATE_LIMITE_RE = re.compile(
    r"(?:date\s*limite|dernier\s*d[ée]lai|avant\s+le|jusqu'?au)\D{0,40}" + DATE_TOKEN,
    re.IGNORECASE,
)
DATE_RANGE_RE = re.compile(
    r"\bdu\s+\d{1,2}[\/\-\s](?:\d{1,2}|[a-zéû]+)[\/\-\s]\d{4}\s+au\s+" + DATE_TOKEN,
    re.IGNORECASE,
)

REGISTER_KEYWORDS = re.compile(r"inscri|postul|candidat", re.IGNORECASE)


def log(*args):
    print(*args, file=sys.stderr)


def parse_french_date(day, month, year):
    try:
        day = int(day)
        year = int(year)
        if month.isdigit():
            month = int(month)
        else:
            month = MONTHS_FR.get(month.lower())
        if not month:
            return None
        return date(year, month, day).isoformat()
    except (ValueError, TypeError):
        return None


def extract_date_limite(text):
    text = text or ""
    m = DATE_LIMITE_RE.search(text) or DATE_RANGE_RE.search(text)
    if not m:
        return None
    return parse_french_date(*m.groups())


def extract_from_list(text, candidates):
    """Cherche le candidat le plus long qui matche en mot entier (\\b), pour
    qu'un sigle plus court (ex. ENSA) ne matche pas à tort à l'intérieur
    d'un sigle plus long qui le contient (ex. ENSAM, ENSET)."""
    if not text:
        return None
    for c in sorted(candidates, key=len, reverse=True):
        if re.search(r"\b" + re.escape(c) + r"\b", text, re.IGNORECASE):
            return c
    return None


def extract_lien_inscription(html, base_url):
    try:
        from bs4 import BeautifulSoup
        soup = BeautifulSoup(html, "html.parser")
        for a in soup.find_all("a", href=True):
            label = a.get_text(" ", strip=True)
            if REGISTER_KEYWORDS.search(label) or REGISTER_KEYWORDS.search(a["href"]):
                return urljoin(base_url, a["href"])
    except Exception as e:
        log("extract_lien_inscription failed:", e)
    return None


def make_id(link):
    return hashlib.sha1(link.encode("utf-8")).hexdigest()[:16]


def extract_focused(titre, texte_complet, candidates):
    """Ne cherche que dans le titre (spécifique à l'article). Le corps de
    page contient souvent un menu/pied de page communs à tout le site
    (ex. toujours "FSJES" / "Casablanca") : y chercher produirait de faux
    positifs confiants plutôt que de laisser le champ vide honnêtement."""
    return extract_from_list(titre, candidates)


def build_item(titre, lien_source, texte_complet, html_complet, date_publication):
    # La date limite ne doit être extraite que du texte propre à l'article
    # (le titre seul la contient rarement) — jamais du menu/pied de page,
    # donc on la laisse à None plutôt que de risquer une fausse date.
    date_limite = extract_date_limite(texte_complet)
    return {
        "id": make_id(lien_source),
        "titre": titre.strip(),
        "etablissement": extract_focused(titre, texte_complet, ETABLISSEMENTS),
        "ville": extract_focused(titre, texte_complet, VILLES),
        "filiere": extract_focused(titre, texte_complet, FILIERES),
        "date_limite": date_limite,
        "cloture": bool(date_limite and date_limite < date.today().isoformat()),
        "lien_inscription": extract_lien_inscription(html_complet, lien_source) if html_complet else None,
        "source": lien_source,
        "date_publication": date_publication,
    }


def _fetch_article_page(url):
    """RSS/Atom summaries are truncated excerpts — the real date limite and
    lien d'inscription almost always live further down the actual article,
    past what the feed includes. Fetch the full page so build_item has real
    content to search instead of ~2 sentences. Returns (texte, html), falling
    back to (None, None) on any failure so the caller can use the feed
    summary instead rather than dropping the item."""
    try:
        r = requests.get(url, headers=HEADERS, timeout=TIMEOUT)
        if r.status_code != 200:
            return None, None
        from bs4 import BeautifulSoup
        soup = BeautifulSoup(r.text, "html.parser")
        return soup.get_text(" ", strip=True), r.text
    except Exception as e:
        log(f"Impossible de charger l'article {url} : {e}")
        return None, None


def _parse_feed_entries(entries, max_items):
    items = []
    for entry in entries[:max_items]:
        titre = entry.get("title", "")
        lien = entry.get("link", "")
        if not titre or not lien:
            continue
        summary = entry.get("summary", "")
        texte_page, html_page = _fetch_article_page(lien)
        texte = (texte_page or summary) + " " + titre
        html = html_page or summary
        pub = entry.get("published_parsed") or entry.get("updated_parsed")
        date_pub = datetime(*pub[:6]).date().isoformat() if pub else date.today().isoformat()
        items.append(build_item(titre, lien, texte, html, date_pub))
    return items


def _fetch_feed(url, max_items=MAX_ITEMS):
    """Récupère et parse un flux RSS/Atom à une URL donnée. Retourne []
    silencieusement si l'URL ne répond pas ou n'est pas un flux exploitable."""
    try:
        import feedparser
    except ImportError:
        log("feedparser non installé, on saute les stratégies RSS/Atom")
        return []
    try:
        r = requests.get(url, headers=HEADERS, timeout=TIMEOUT)
        if r.status_code != 200:
            return []
        feed = feedparser.parse(r.content)
        if not feed.entries:
            return []
        log(f"Flux trouvé : {url} ({len(feed.entries)} entrées)")
        return _parse_feed_entries(feed.entries, max_items)
    except requests.RequestException as e:
        log(f"Flux {url} a échoué : {e}")
        return []


def try_rss():
    for path in ("feed/", "feed/rss/", "feed/atom/", "rss/"):
        items = _fetch_feed(urljoin(BASE_URL, path))
        if items:
            return items
    return []


def try_blogger_feed():
    """Les permaliens observés (ex. /2026/08/master-feg-el-jadida-2026-2027.html)
    correspondent au format Blogger/Blogspot, qui expose son propre flux natif
    à /feeds/posts/default — différent des chemins WordPress testés par
    try_rss(). max-results plus large pour remonter un historique complet ;
    filter_eco_gestion() fera le tri ensuite."""
    url = urljoin(BASE_URL, "feeds/posts/default?alt=rss&max-results=150")
    return _fetch_feed(url, max_items=150)


def try_wp_api():
    url = urljoin(BASE_URL, "wp-json/wp/v2/posts")
    try:
        r = requests.get(url, headers=HEADERS, params={"per_page": MAX_ITEMS}, timeout=TIMEOUT)
        if r.status_code != 200:
            log(f"API WP indisponible ({r.status_code})")
            return []
        posts = r.json()
        if not isinstance(posts, list) or not posts:
            return []
        log(f"API WordPress trouvée : {len(posts)} posts")
        items = []
        for p in posts:
            titre = p.get("title", {}).get("rendered", "")
            lien = p.get("link", "")
            contenu_html = p.get("content", {}).get("rendered", "") or p.get("excerpt", {}).get("rendered", "")
            texte = re.sub(r"<[^>]+>", " ", titre + " " + contenu_html)
            date_pub = (p.get("date") or "")[:10] or date.today().isoformat()
            if titre and lien:
                items.append(build_item(titre, lien, texte, contenu_html, date_pub))
        return items
    except requests.RequestException as e:
        log(f"API WP a échoué : {e}")
        return []


def try_html_scrape():
    try:
        from bs4 import BeautifulSoup
    except ImportError:
        log("beautifulsoup4 non installé, impossible de scraper le HTML")
        return []

    try:
        r = requests.get(BASE_URL, headers=HEADERS, timeout=TIMEOUT)
        r.raise_for_status()
    except requests.RequestException as e:
        log(f"Impossible de charger la page d'accueil : {e}")
        return []

    soup = BeautifulSoup(r.text, "html.parser")
    seen = set()
    items = []

    # Heuristique générique : tout lien dont le libellé ressemble à un titre
    # d'article de concours/master, en évitant menus/pied de page.
    for a in soup.find_all("a", href=True):
        label = a.get_text(" ", strip=True)
        href = urljoin(BASE_URL, a["href"])
        if href in seen or len(label) < 25:
            continue
        if not re.search(r"master|concours|licence|dut|examen", label, re.IGNORECASE):
            continue
        seen.add(href)
        try:
            rp = requests.get(href, headers=HEADERS, timeout=TIMEOUT)
            if rp.status_code != 200:
                continue
            page_soup = BeautifulSoup(rp.text, "html.parser")
            texte = page_soup.get_text(" ", strip=True)
        except requests.RequestException:
            texte = label
            rp = None
        items.append(build_item(label, href, texte, rp.text if rp else "", date.today().isoformat()))
        if len(items) >= MAX_ITEMS:
            break

    if items:
        log(f"Scraping HTML générique : {len(items)} articles candidats")
    return items


def load_existing():
    if DATA_FILE.exists():
        try:
            return json.loads(DATA_FILE.read_text(encoding="utf-8"))
        except json.JSONDecodeError:
            log("data/news.json existant illisible, on repart d'une liste vide")
    return []


POSTING_KEYWORDS = re.compile(r"master|concours|licence|dut|examen|inscription|candidature", re.IGNORECASE)


def is_real_posting(item):
    """The scraper is deliberately global now — it no longer restricts
    itself to économie-gestion, since which établissements to actually show
    is now an admin-side display filter (see settings.json
    newsEtablissementsVisibles, applied in app/news/page.js), not something
    baked into what gets scraped. This still drops the site's generic
    "index" pages that try_html_scrape's loose title matching can pick up —
    those have no établissement, no ville, no filière, and no posting-like
    keyword in the title at all."""
    if item.get("etablissement") or item.get("ville") or item.get("filiere"):
        return True
    titre_low = (item.get("titre") or "").lower()
    return bool(POSTING_KEYWORDS.search(titre_low))


def merge(existing, fresh):
    by_id = {item["id"]: item for item in existing}
    for item in fresh:
        by_id[item["id"]] = item
    merged = [item for item in by_id.values() if is_real_posting(item)]
    merged.sort(key=lambda i: i.get("date_publication") or "", reverse=True)
    return merged[:MAX_ITEMS]


def main():
    fresh = try_rss() or try_blogger_feed() or try_wp_api() or try_html_scrape()

    if not fresh:
        log("Aucune stratégie n'a produit de résultat exploitable — data/news.json inchangé.")
        return 0

    existing = load_existing()
    merged = merge(existing, fresh)

    if merged == existing:
        log("Pas de nouveauté détectée.")
        return 0

    DATA_FILE.parent.mkdir(parents=True, exist_ok=True)
    DATA_FILE.write_text(json.dumps(merged, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    log(f"data/news.json mis à jour : {len(merged)} entrées ({len(merged) - len(existing)} nouvelles).")
    return 0


if __name__ == "__main__":
    sys.exit(main())
