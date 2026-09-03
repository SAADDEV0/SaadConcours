export const SOCIAL_FIELDS = [
  { key: "facebook", label: "Facebook", placeholder: "https://facebook.com/tapage" },
  { key: "instagram", label: "Instagram", placeholder: "https://instagram.com/toncompte" },
  { key: "whatsapp", label: "WhatsApp", placeholder: "https://wa.me/2126..." },
  { key: "tiktok", label: "TikTok", placeholder: "https://tiktok.com/@toncompte" },
  { key: "youtube", label: "YouTube", placeholder: "https://youtube.com/@tachaine" },
  { key: "telegram", label: "Telegram", placeholder: "https://t.me/toncanal" },
  { key: "email", label: "Email de contact", placeholder: "contact@saadconcours.space" },
];

// Same établissement sigles the scraper (scripts/fetch_almaster.py) can
// recognize — the scraper itself is deliberately global now (no more
// baked-in économie-gestion filter), this is what decides what actually
// shows on the public /news page.
export const NEWS_ETABLISSEMENTS = [
  "FSJES", "ENCG", "FEG", "FSEG", "ENSA", "FST", "ISCAE", "ENSAM",
  "ESITH", "ENSET", "FSR", "FLSH", "FSA", "FP", "EST", "ENS",
];

export const MAX_LOGO_BYTES = 400 * 1024;
