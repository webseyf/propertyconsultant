/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true
  },
  async redirects() {
    return [
      {
        source: '/index.leadpvet',
        destination: '/',
        permanent: true
      },
      {
        source: '/about.leadpvet',
        destination: '/about',
        permanent: true
      },
      {
        source: '/service.leadpvet',
        destination: '/services',
        permanent: true
      },
      {
        source: '/services.leadpvet',
        destination: '/services',
        permanent: true
      },
      {
        source: '/vision.leadpvet',
        destination: '/about',
        permanent: true
      },
      {
        source: '/mission.leadpvet',
        destination: '/about',
        permanent: true
      },
      {
        source: '/contact.leadpvet',
        destination: '/contact',
        permanent: true
      }
    ];
  }
};

module.exports = nextConfig;
