const nextConfig = {
  webpack: (config) => {
    config.cache = false; // Tắt cache của Webpack
    return config;
  },
};

module.exports = nextConfig;