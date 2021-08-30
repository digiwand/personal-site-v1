/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  webpack: (config, {
    buildId, /* , dev, isServer, defaultLoaders, webpack, */
  }) => {
    console.log('Building: ', buildId);

    // Important: return the modified config
    return config;
  },
};

module.exports = nextConfig;
