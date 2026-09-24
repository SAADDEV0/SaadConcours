/** @type {import('next').NextConfig} */
const nextConfig = {
  // lib/store.js reads `path.join(process.cwd(), "public", relPath)`. That
  // path is dynamic, so Next's file tracer can't tell which files it needs
  // and conservatively pulls all of public/ into EVERY server function.
  // public/images is only ever served as static <img src> URLs off the CDN —
  // no server code opens it — so it is safe to keep out of the bundles.
  // Top-level key since Next 15: under `experimental` it was ignored (Next
  // warned about it at every start), so the exclusion never applied.
  outputFileTracingExcludes: {
    "*": [
      "public/images/**",
      "public/data/extraits/**",
    ],
  },

  async headers() {
    return [
      {
        // Without this, public/ is served as `max-age=0, must-revalidate`, so
        // every returning visitor re-fetches the scans of every concours page
        // they open — and image bytes are ~95% of this site's egress.
        //
        // The scans are archival: a file is named after the year, the ville,
        // the école and the filière of the paper it reproduces, so a given
        // path always means the same document. The cost of `immutable` is
        // that replacing a scan in place (same path, better quality via
        // the admin image upload) stays invisible to anyone who already
        // loaded it — publish such a rescan under a new filename instead.
        source: "/images/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },
};

export default nextConfig;
