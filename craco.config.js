/* eslint-disable no-undef */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { CracoAliasPlugin } = require("react-app-alias");

module.exports = {
  babel: {
    presets: ["@emotion/babel-preset-css-prop"]
  },
  plugins: [
    {
      plugin: CracoAliasPlugin,
      options: {}
    }
  ]
};
