// @ts-check
/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  reactStrictMode: true,
  distDir: 'build',
  poweredByHeader: false,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    if (isServer) {
      // config for server
      return config
    }
    return config
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/checkout/7727-001?step=contact_information',
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig;
