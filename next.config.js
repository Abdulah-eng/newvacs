/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Allow Next.js Image optimization for local /public files
    // (local images don't need domains — this enables future external sources)
    remotePatterns: [],
    // Unoptimized is NOT set — local public images work by default
  },
}

module.exports = nextConfig
