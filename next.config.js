/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  webpack: (config, {
    buildId, dev, /* , dev, isServer, defaultLoaders, webpack, */
  }) => {
    console.log('Building: ', buildId);

    if (!dev) { return config; }

    config.module.rules.push({
      test: /\.m?js/,
      resolve: {
        fullySpecified: false,
      },
    });

    // Important: return the modified config
    return config;
  },
};

module.exports = nextConfig;
