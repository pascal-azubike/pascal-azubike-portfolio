/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/pascal-azubike-portfolio', // Replace with your repository name
  assetPrefix: '/pascal-azubike-portfolio/', // Replace with your repository name
}

module.exports = nextConfig 