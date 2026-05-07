const path = require('path');

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  i18n: {
    locales: ['en-US'],
    defaultLocale: 'en-US',
  },

  poweredByHeader: false,

  outputFileTracingRoot: path.join(__dirname, '..'),
};

module.exports = nextConfig;
