const singleSpaAngularWebpack = require('single-spa-angular/lib/webpack').default
const path = require('path');
const SystemJSPublicPathWebpackPlugin = require('systemjs-webpack-interop/SystemJSPublicPathWebpackPlugin');

module.exports = (angularWebpackConfig, options) => {
  const singleSpaWebpackConfig = singleSpaAngularWebpack(angularWebpackConfig, options);

  singleSpaWebpackConfig.plugins.push(new SystemJSPublicPathWebpackPlugin({
    // ONLY NEEDED FOR WEBPACK 1-4. Not necessary for webpack@5
    systemjsModuleName: '@ex/app1'
  }));

  singleSpaWebpackConfig.externals = [
    /^@ex\/*/,
    /^single-spa$/,
    /^single-spa-angular$/,

    /^rxjs$/,
    /^rxjs\/operators$/,

    // angular
    /^@angular\/core$/,
    /^@angular\/common$/,
    /^@angular\/router$/,
    /^@angular\/platform-browser$/,
    /^zone\.js$/,

   /^i18next$/,
   //^angular-i18next$/
  ];

  return singleSpaWebpackConfig
}