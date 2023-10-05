const isGithubActions = process.env.GITHUB_ACTIONS || false;

let assetPrefix = "";
let basePath = "";

if (isGithubActions) {
  // trim off `<owner>/`
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, "");

  assetPrefix = `/${repo}/`;
  basePath = `/${repo}`;
}

module.exports = {
  output: "export",
  assetPrefix: assetPrefix,
  basePath: basePath,
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    disableStaticImages: true,
  },
  productionBrowserSourceMaps: true,
  pageExtensions: ["page.js"],
  // rewrites: async () => [
  //   {
  //     source: "/_sf/:path*",
  //     destination:
  //       "https://<SITES_SUBDOMAIN>.sites.sourceflow.co.uk/_sf/:path*",
  //   },
  // ],
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    config.module.rules.push({
      test: /\.(jpe?g|png|gif|ico|eot|ttf|woff|woff2|mp4|pdf|webm)$/,
      type: "asset",
      generator: {
        filename: "static/chunks/[path][name].[hash][ext]",
      },
    });

    return config;
  },
};
