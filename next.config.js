module.exports = {
  webpack: (config, { isServer }) => {
    if (isServer) {
      require("./lib/generateSiteMap");
    }

    return config;
  },
};
