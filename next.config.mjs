/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Ajoutez ici les domaines externes si vous chargez des images distantes.
    remotePatterns: [],
  },
};

export default nextConfig;
