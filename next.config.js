/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    formats: ["image/webp"],
  },
  // Add API configuration for file uploads
  api: {
    bodyParser: false, // Disable the default body parser for form uploads
    responseLimit: "8mb",
  },
};

module.exports = nextConfig;
