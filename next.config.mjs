/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/portfolio', // Replace with your repository name
  distDir: 'out',
};

export const { basePath } = nextConfig; // Add this line

export default nextConfig;
