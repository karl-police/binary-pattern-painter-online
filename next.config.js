
const nextConfig = {
    // enables static exports
    output: "export",

    pageExtensions: ["js", "jsx", "md", "mdx"],
    target: "serverless",

    /**
     * Set base path. This is the slug of your GitHub repository.
     *
     * @see https://nextjs.org/docs/app/api-reference/next-config-js/basePath
     */
    basePath: "/binary-pattern-painter-online",

    /**
     * Disable server-based image optimization. Next.js does not support
     * dynamic features with static exports.
     *
     * @see https://nextjs.org/docs/app/api-reference/components/image#unoptimized
     */
    images: {
        unoptimized: true,
    },
};

module.exports = nextConfig;