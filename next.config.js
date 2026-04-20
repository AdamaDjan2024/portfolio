const fs = require("fs");
const path = require("path");

function resolveDistDir() {
  if (process.env.NEXT_DIST_DIR) {
    return process.env.NEXT_DIST_DIR;
  }

  const defaultDistDir = ".next";
  const fallbackDistDir = ".next-local";
  const defaultDistPath = path.join(__dirname, defaultDistDir);

  try {
    fs.mkdirSync(defaultDistPath, { recursive: true });
    fs.accessSync(defaultDistPath, fs.constants.W_OK);
    return defaultDistDir;
  } catch {
    return fallbackDistDir;
  }
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: resolveDistDir(),
  reactStrictMode: true,
  output: 'export',
  images: {
    domains: ["vercel.com", "mon-portfolio-zeta-bice.vercel.app"],
    unoptimized: true
  },
  eslint: {
    ignoreDuringBuilds: true
  }
};

module.exports = nextConfig;
