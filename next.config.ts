import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // User site Zach-ceng.github.io — root path, no basePath
};

export default nextConfig;
