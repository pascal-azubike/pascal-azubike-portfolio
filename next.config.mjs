/** @type {import('next').NextConfig} */
const nextConfig = {
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
