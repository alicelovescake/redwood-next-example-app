/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    // Experimental monorepo support
    // @link {https://github.com/vercel/next.js/pull/22867}
    // @link {https://github.com/vercel/next.js/discussions/26420|Discussion}
    externalDir: true,
  },
}

module.exports = nextConfig
