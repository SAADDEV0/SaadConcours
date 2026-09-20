#!/usr/bin/env python3
"""
Collecte (découverte + téléchargement) de sujets de concours sur
fsjesmaster.com, pour les 4 catégories hors Finance/Comptabilité/Audit
(MRH, MCL, EAPP, EDMQ — voir lib/taxonomy.js).

Ce script est purement mécanique : il ne lit pas le contenu des sujets
(les images), il ne juge pas leur qualité et n'écrit rien dans
public/data/concours.json. Il produit :
  - un dossier local par sujet candidat avec les images téléchargées
    en pleine résolution,
  - un manifeste JSON récapitulatif (scripts/collecte/manifest.json)

La sélection finale, la lecture des images et la rédaction des fiches
concours restent un travail manuel (Claude), à partir de ce manifeste.

Fonctionnement :
  1. Récupère l'index complet des articles du site via le flux JSON natif
     de Blogger (/feeds/posts/default?alt=json), paginé par tranches de
     150 (853 articles au total -> 6 requêtes). Testé : contrairement à
     /search?q=..., ce flux n'est pas rate-limité (voir NOTES en bas de
     fichier pour l'historique du choix).
  2. Filtre localement, en mémoire, les titres qui contiennent à la fois
     "concours"/"examen" et un mot-clé d'une des 4 catégories visées
     (MRH, MCL, EAPP, EDMQ — voir KEYWORDS).
  3. Dédoublonne par URL (déjà vu dans ce run, ou déjà présent comme
     `source` dans public/data/concours.json).
  4. Visite chaque article candidat, récupère les <img> du conteneur
     `div.post-body` (le vrai corps de l'article — un repli plus large
     ramènerait aussi le logo du site affiché en widget latéral sur
     presque toutes les pages), les convertit en URL pleine résolution
     (.../s0/...) et les télécharge.
  5. Écarte les images "carrées" (ratio proche de 1:1) : ce sont quasi
     toujours des vignettes de couverture décoratives ou le logo du site,
     jamais une page de sujet scannée (toujours en format portrait A4).
  6. Devine ville / établissement / année depuis le titre de l'article.
"""
import hashlib
import io
import json
import re
import sys
import time
from pathlib import Path
from urllib.parse import urljoin

import requests

try:
    from bs4 import BeautifulSoup
except ImportError:
    print("beautifulsoup4 non installé : pip install beautifulsoup4", file=sys.stderr)
    sys.exit(1)

try:
    from PIL import Image
except ImportError:
    Image = None  # le filtre anti-vignette sera juste désactivé

BASE_URL = "https://www.fsjesmaster.com/"
ROOT = Path(__file__).resolve().parent.parent
CONCOURS_FILE = ROOT / "public" / "data" / "concours.json"
OUT_DIR = ROOT / "scripts" / "collecte"
TIMEOUT = 20
HEADERS = {"User-Agent": "Mozilla/5.0 (compatible; SaadConcoursBot/1.0; +https://saaddev0.github.io/SaadConcours/)"}
SLEEP_BETWEEN_REQUESTS = 1.5  # politesse envers le site entre deux requêtes (pages, images, flux)

# Mots-clés de recherche, un groupe par catégorie de la taxonomie
# (lib/taxonomy.js), hors FCA. Plusieurs mots-clés par sous-filière pour
# couvrir les variantes de formulation utilisées dans les titres réels.
KEYWORDS = {
    "MRH": [
        "Management Stratégique", "Gestion des Organisations",
        "Ressources Humaines", "GRH", "Entrepreneuriat",
        "Management de Projets", "Management Public", "Gouvernance Territoriale",
    ],
    "MCL": [
        "Marketing", "Marketing Digital", "E-Commerce", "Commerce International",
        "Logistique", "Supply Chain",
    ],
    "EAPP": [
        "Politiques Économiques", "Économie Internationale",
        "Développement Économique", "Économie Sociale et Solidaire",
        "Économie Verte", "Développement Durable",
    ],
    "EDMQ": [
        "Économétrie", "Data Science", "Business Analytics", "Actuariat",
        "Ingénierie Mathématique",
    ],
}

VILLES = [
    "Casablanca", "Rabat", "Salé", "Fès", "Marrakech", "Tanger", "Agadir",
    "Meknès", "Oujda", "Kénitra", "Tétouan", "Settat", "El Jadida",
    "Béni Mellal", "Nador", "Taza", "Khouribga", "Safi", "Mohammedia",
    "Guelmim", "Laâyoune", "Errachidia", "Ouarzazate", "Al Hoceïma",
    "Souissi", "Agdal", "Ain Chock", "Ain Sebaa",
]

ETABLISSEMENTS = [
    "FSJES", "ENCG", "FSEG", "FEG", "ENSA", "FST", "ISCAE", "FP",
    "Faculté des Sciences Juridiques",
]

YEAR_RE = re.compile(r"(20\d\d)(?:\s*[-/]\s*20?\d\d)?")


def log(*args):
    print(*args, file=sys.stderr)


def fetch(url, **params):
    for attempt in range(5):
        try:
            r = requests.get(url, headers=HEADERS, params=params or None, timeout=TIMEOUT, allow_redirects=True)
            if r.status_code == 200:
                return r
            if r.status_code == 429:
                wait = int(r.headers.get("Retry-After", 5)) * (attempt + 1)
                log(f"  429 (trop de requêtes) sur {url} -> pause {wait}s")
                time.sleep(wait)
                continue
            log(f"  HTTP {r.status_code} sur {url}")
            return None
        except requests.RequestException as e:
            log(f"  Erreur réseau ({attempt+1}/5) sur {url} : {e}")
            time.sleep(2)
    log(f"  Abandon après plusieurs échecs : {url}")
    return None


def fetch_all_posts():
    """Récupère titre + URL de TOUS les articles du site via le flux JSON
    natif de Blogger, paginé par tranches de 150 (le maximum accepté par
    /feeds/posts/default, quel que soit max-results demandé). Retourne
    [(titre, url), ...]. Beaucoup plus fiable que /search?q=... qui bloque
    (HTTP 429) après une poignée de requêtes."""
    posts = []
    start = 1
    while True:
        r = fetch(urljoin(BASE_URL, "feeds/posts/default"), alt="json", **{"max-results": 150, "start-index": start})
        if not r:
            break
        try:
            data = r.json()
        except ValueError:
            log("  Réponse du flux illisible (pas du JSON), arrêt de la pagination")
            break
        entries = data.get("feed", {}).get("entry", [])
        if not entries:
            break
        for entry in entries:
            title = entry.get("title", {}).get("$t", "").strip()
            href = next((l["href"] for l in entry.get("link", []) if l.get("rel") == "alternate"), None)
            if title and href:
                posts.append((title, href))
        total = int(data.get("feed", {}).get("openSearch$totalResults", {}).get("$t", 0))
        start += len(entries)
        if start > total:
            break
        time.sleep(SLEEP_BETWEEN_REQUESTS)
    return posts


def matching_keyword(title, keywords):
    """Retourne le premier mot-clé de la liste trouvé dans le titre, ou None."""
    for kw in keywords:
        if re.search(re.escape(kw), title, re.IGNORECASE):
            return kw
    return None


def existing_source_urls():
    """URLs fsjesmaster.com déjà utilisées comme `source` dans concours.json
    — évite de re-proposer un sujet déjà intégré au site."""
    urls = set()
    if CONCOURS_FILE.exists():
        data = json.loads(CONCOURS_FILE.read_text(encoding="utf-8"))
        for entry in data:
            for m in re.findall(r"https?://(?:www\.)?fsjesmaster\.com/\S+?\.html", entry.get("source", "")):
                urls.add(m.rstrip(").,"))
    return urls


def guess_from_list(text, candidates):
    for c in sorted(candidates, key=len, reverse=True):
        if re.search(r"\b" + re.escape(c) + r"\b", text, re.IGNORECASE):
            return c
    return None


def guess_metadata(title):
    ville = guess_from_list(title, VILLES)
    etablissement = guess_from_list(title, ETABLISSEMENTS)
    m = YEAR_RE.search(title)
    annee = m.group(1) if m else None
    return {"ville": ville, "etablissement": etablissement, "annee": annee}


def full_res_url(src):
    """Les URLs Blogger encodent une taille (ex. /w510-h640-rw/) ; /s0/
    retourne l'image sans redimensionnement, donc en pleine résolution."""
    return re.sub(r"/w\d+-h\d+[a-z-]*/", "/s0/", src)


def extract_images(post_url):
    r = fetch(post_url)
    if not r:
        return None, []
    soup = BeautifulSoup(r.text, "html.parser")
    # post-body est le conteneur exact du texte/images de l'article. Sans
    # lui, on récupère aussi le logo du site dans un widget latéral
    # (ex. un badge carré "FSJES Master" présent sur presque toutes les
    # pages) — d'où le repli sur pICnt/article seulement si post-body est
    # absent (thème différent), jamais en priorité.
    content = soup.find("div", class_="post-body") or soup.find("div", class_="pICnt") or soup.find("article") or soup
    urls = []
    seen = set()
    for img in content.find_all("img"):
        src = img.get("data-src") or img.get("src")
        if not src or "blogger.googleusercontent.com" not in src:
            continue
        src = full_res_url(src)
        if src not in seen:
            seen.add(src)
            urls.append(src)
    return soup.title.get_text(strip=True) if soup.title else None, urls


def is_cover_thumbnail(image_bytes):
    """Une vignette de couverture est quasi-carrée ; une page de sujet
    scannée est toujours en format portrait (bien plus haute que large).
    Sans PIL, on ne filtre pas (mieux vaut trop télécharger que rater du
    contenu)."""
    if Image is None:
        return False
    try:
        im = Image.open(io.BytesIO(image_bytes))
        w, h = im.size
        return 0.85 <= (w / h) <= 1.15
    except Exception:
        return False


def slugify(s):
    import unicodedata
    s = unicodedata.normalize("NFD", s or "item")
    s = "".join(c for c in s if unicodedata.category(c) != "Mn")  # retire les accents
    return re.sub(r"[^a-z0-9]+", "_", s.lower()).strip("_")[:80]


def collect_post(title, post_url, categorie, keyword, manifest, manifest_path):
    time.sleep(SLEEP_BETWEEN_REQUESTS)
    real_title, image_urls = extract_images(post_url)
    if not image_urls:
        log(f"  (aucune image trouvée, ignoré) {title}")
        return
    meta = guess_metadata(title)
    # Le hash de l'URL garantit un nom de dossier unique même si deux
    # articles différents ont le même établissement/ville/année/mot-clé
    # deviné (déjà vu : deux sujets Ain Sebaa 2024 "marketing" distincts
    # écrasaient le même dossier avant ce correctif).
    url_hash = hashlib.sha1(post_url.encode("utf-8")).hexdigest()[:8]
    slug = slugify(f"{meta.get('annee')}_{meta.get('ville')}_{meta.get('etablissement')}_{keyword}") + "_" + url_hash
    post_dir = OUT_DIR / categorie / slug
    post_dir.mkdir(parents=True, exist_ok=True)
    saved = []
    for i, img_url in enumerate(image_urls, start=1):
        time.sleep(SLEEP_BETWEEN_REQUESTS)
        r = fetch(img_url)
        if not r:
            continue
        if is_cover_thumbnail(r.content):
            log(f"  (vignette de couverture/logo écartée) image {i}")
            continue
        ext = ".png" if img_url.lower().endswith(".png") else ".jpg"
        path = post_dir / f"p{i}{ext}"
        path.write_bytes(r.content)
        saved.append(str(path.relative_to(ROOT)))
    if not saved:
        log(f"  (que des vignettes, aucune page réelle, ignoré) {title}")
        return
    manifest.append({
        "categorie": categorie,
        "mot_cle_trouve_par": keyword,
        "titre": title,
        "source": post_url,
        **meta,
        "images_locales": saved,
    })
    # Écriture incrémentale après CHAQUE sujet collecté : si le script est
    # interrompu (timeout, Ctrl+C, coupure réseau), tout le travail déjà
    # fait reste sur disque au lieu d'être perdu (bug constaté lors du
    # premier run : le manifeste n'était écrit qu'à la toute fin).
    manifest_path.write_text(json.dumps(manifest, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    log(f"  OK [{categorie}] -> {slug} ({len(saved)} image(s))")


def main():
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    existing_urls = existing_source_urls()
    log(f"{len(existing_urls)} URLs déjà présentes dans concours.json (seront ignorées)")

    manifest_path = OUT_DIR / "manifest.json"
    manifest = []
    already_collected = set()
    if manifest_path.exists():
        manifest = json.loads(manifest_path.read_text(encoding="utf-8"))
        already_collected = {m["source"] for m in manifest}
        log(f"Reprise : {len(manifest)} sujet(s) déjà collecté(s) lors d'un run précédent (non re-visités)")

    log("Téléchargement de l'index complet du site (flux JSON, paginé)...")
    all_posts = fetch_all_posts()
    log(f"{len(all_posts)} articles trouvés au total sur le site")

    seen_urls = set()
    for title, post_url in all_posts:
        if post_url in seen_urls or post_url in existing_urls or post_url in already_collected:
            continue
        if not re.search(r"concours|examen", title, re.IGNORECASE):
            continue  # ex. "sujets de mémoire PFE" — pas un concours d'entrée
        for categorie, keywords in KEYWORDS.items():
            kw = matching_keyword(title, keywords)
            if kw:
                seen_urls.add(post_url)
                collect_post(title, post_url, categorie, kw, manifest, manifest_path)
                break  # une catégorie par article, la première qui matche

    log(f"\nTerminé : {len(manifest)} sujet(s) candidat(s) au total -> {manifest_path.relative_to(ROOT)}")
    for categorie in KEYWORDS:
        n = sum(1 for m in manifest if m["categorie"] == categorie)
        log(f"  {categorie}: {n}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
