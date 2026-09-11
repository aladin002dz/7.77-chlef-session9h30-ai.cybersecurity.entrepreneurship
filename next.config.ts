import type { NextConfig } from "next";

// Project name on GitHub Pages: https://<user>.github.io/<repo>/
// The base path only needs to be applied when building for GitHub Pages
// (the workflow sets GITHUB_PAGES=true); local dev/build stays at "/".
const repoName = "7.77-chlef-session9h30-ai.cybersecurity.entrepreneurship";
const isGithubPages = process.env.GITHUB_PAGES === "true";
const basePath = isGithubPages ? `/${repoName}` : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  images: {
    // No image optimizer is available on GitHub Pages.
    unoptimized: true,
  },
};

export default nextConfig;
