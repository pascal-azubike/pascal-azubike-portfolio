/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/pascal-azubike-portfolio",
  assetPrefix: '/pascal-azubike-portfolio/',
  output: "export",
  reactStrictMode: true,
  images: {
    unoptimized: true,
    domains: [
      "res.cloudinary.com",
      "assets.aceternity.com",
      "thumbnails.unlimphotos.com",
      "devpro-aceternity.vercel.app",
      "images.unsplash.com"
    ]
  }
};

export default nextConfig;
