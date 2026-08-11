/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Ограничиваем параллелизм сборки — на shared-хостинге иначе падает с EAGAIN
  // (нехватка ресурсов при порождении процессов).
  experimental: {
    cpus: 1,
    workerThreads: false,
  },
  eslint: {
    // Линтим отдельно (npm run lint); сборку не блокируем.
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "lh3.googleusercontent.com" },
    ],
  },
};

export default nextConfig;
