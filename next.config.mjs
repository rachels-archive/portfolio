/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/portfolio',
  images: {
    unoptimized: true, // Disable image optimization
  },
  distDir: 'out',
};

export default nextConfig;
