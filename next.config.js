const path = require("path");
// next-compose-plugins withPlugins for more plugin compose
const withBundleanalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "TRUE"
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  output: "export",
  // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
  // trailingSlash: true,

  // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
  // skipTrailingSlashRedirect: true,

  // Optional: Change the output directory `out` -> `dist`
  // distDir: 'dist',
  distDir: "build"

};

// module.exports = nextConfig;

module.exports = withBundleanalyzer(nextConfig);
