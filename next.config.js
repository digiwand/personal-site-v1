/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['en-US'],
    defaultLocale: 'en-US',
  },

  poweredByHeader: false,

  /** replaces Tercer with SWC for minification which nextjs.org mentions is up to 7x faster */
  swcMinify: true,

  webpack: (config, {
    /* , dev, isServer, defaultLoaders, webpack, */
    buildId,
  }) => {
    console.log('Building: ', buildId);

    /** Important: return the modified config */
    return config;
  },
};

module.exports = nextConfig;
