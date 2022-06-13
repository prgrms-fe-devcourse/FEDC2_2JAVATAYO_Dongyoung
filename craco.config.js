/* eslint-disable no-undef */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");

module.exports = {
  babel: {
    presets: ["@emotion/babel-preset-css-prop"]
  },
  webpack: {
    alias: {
      "@assets": path.resolve(__dirname, "src/assets"),
      "@components": path.resolve(__dirname, "src/components"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
      "@contexts": path.resolve(__dirname, "src/contexts"),
      "@pages": path.resolve(__dirname, "src/pages")
    }
  }
};
