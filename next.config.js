/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  eslint: {
    dirs: ['components'], // Only run ESLint on the 'components' directories during production builds (next build)
  },
  webpack: (config, {
    buildId, /* , dev, isServer, defaultLoaders, webpack, */
  }) => {
    console.log('Building: ', buildId);

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
