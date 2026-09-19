/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // lib/store.js reads `path.join(process.cwd(), "public", relPath)`. That
    // path is dynamic, so Next's file tracer can't tell which files it needs
    // and conservatively pulls all of public/ into EVERY serverless function.
    // With ~68 routes that multiplied 66MB of scans into gigabytes of
    // Functions Storage per deployment. public/images is only ever served as
    // static <img src> URLs off the CDN — no server code opens it — so it is
    // safe to keep out of the function bundles.
    outputFileTracingExcludes: {
      "*": [
        "public/images/**",
        "public/data/extraits/**",
      ],
    },
  },
};

export default nextConfig;
