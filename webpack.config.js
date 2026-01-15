const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "grupo21",
    projectName: "navbar",
    webpackConfigEnv,
    argv,
    outputSystemJS: false,
  });

  return merge(defaultConfig, {
    devServer: {
      hot: false, // Desativa o HMR
    },
    externals: ['single-spa', '@grupo21/shared-react', 'react', 'react-dom']
  });
};
