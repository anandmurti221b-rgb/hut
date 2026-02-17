import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/hut",
  assetPrefix: "/hut/",
  images: {
    unoptimized: true,
  },

};

export default nextConfig;
