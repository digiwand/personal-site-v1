/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  i18n: {
    locales: ['en-US'],
    defaultLocale: 'en-US',
  },

  poweredByHeader: false,

  webpack: (config, {
    buildId, /* , dev, isServer, defaultLoaders, webpack, */
  }) => {
    console.log('Building: ', buildId);

    // Important: return the modified config
    return config;
  },
};

module.exports = nextConfig;
