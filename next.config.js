// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   output: 'export',
//   trailingSlash: true,
//   images: {
//     unoptimized: true
//   },
//   // Only use basePath and assetPrefix for production (GitHub Pages)
//   ...(process.env.NODE_ENV === 'production' && {
//     basePath: '/portfolio',
//     assetPrefix: '/portfolio/',
//   }),
//   distDir: 'out'
// }

// module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Remove basePath for now - let's use the repository as the base
  distDir: 'out'
}

module.exports = nextConfig