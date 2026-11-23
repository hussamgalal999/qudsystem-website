/** @type {import('next').NextConfig} */
// Cloudflare Pages sets CF_PAGES=1 during its builds. On Pages we build a
// static export (functions/api/* take over the API routes there); elsewhere
// (Vercel, local) the app keeps SSR and its API routes unchanged.
const onPages = !!process.env.CF_PAGES

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  ...(onPages
    ? {
        output: "export",
        images: { unoptimized: true },
        trailingSlash: false,
      }
    : {
        images: {
          unoptimized: false,
        },
      }),
}

export default nextConfig
