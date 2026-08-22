// Reformats inline QCM-style options ("A. ... B. ... C. ...") onto their own
// bullet lines before Markdown rendering — source énoncés often cram every
// option onto one line, which reads terribly once rendered. Pure text
// transform, safe to run both server-side (per-concours SEO pages) and
// client-side (the interactive modal in app/concours/page.js).
export function formatQCM(md) {
  if (!md) return md;
  const lines = md.split("\n");
  const out = [];
  const order = "abcde";

  for (let line of lines) {
    const markerRe = /\b([A-Ea-e])[.:]\s+/g;
    const matches = [...line.matchAll(markerRe)];

    if (matches.length >= 3) {
      const letters = matches.map((m) => m[1].toLowerCase());
      let pos = -1,
        seqOk = letters[0] === "a";
      for (const l of letters) {
        const idx = order.indexOf(l);
        if (idx <= pos) {
          seqOk = false;
          break;
        }
        pos = idx;
      }
      if (seqOk) {
        const stem = line.slice(0, matches[0].index).trim();
        if (stem) out.push(stem);
        for (let i = 0; i < matches.length; i++) {
          const start = matches[i].index + matches[i][0].length;
          const end = i + 1 < matches.length ? matches[i + 1].index : line.length;
          let txt = line
            .slice(start, end)
            .trim()
            .replace(/[;.]\s*$/, "")
            .trim();
          out.push(`- **${matches[i][1].toLowerCase()}.** ${txt}`);
        }
        continue;
      }
    }

    const singleM = line.match(/^\s*([A-Ea-e])[.:]\s+(.+)$/);
    if (singleM) {
      out.push(`- **${singleM[1].toLowerCase()}.** ${singleM[2].trim()}`);
      continue;
    }

    out.push(line);
  }
  return out.join("\n");
}
