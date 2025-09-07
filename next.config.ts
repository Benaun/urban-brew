import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  experimental: {
    serverComponentsExternalPackages: [
      '@prisma/client',
      'prisma'
    ]
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Исключаем Prisma из клиентского бандла
      config.resolve.alias = {
        ...config.resolve.alias,
        '@prisma/client': false,
        prisma: false,
        '@/generated/prisma': false
      }
    }
    return config
  }
}

export default nextConfig
