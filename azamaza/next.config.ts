import type { NextConfig } from "next";

const repoName = "azamaza";

const nextConfig: NextConfig = {
    reactCompiler: true,
    output: "export",
    basePath: `/${repoName}`,
    assetPrefix: `/${repoName}/`,
    trailingSlash: true,

    images: {
        unoptimized: true,
    },
};

export default nextConfig;
