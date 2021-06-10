const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = env => ({
  entry: path.resolve(__dirname, "src/root-config"),
  output: {
    filename: "root-config.js",
    libraryTarget: "system",
    path: path.resolve(__dirname, "dist")
  },
  devtool: "sourcemap",
  module: {
    rules: [
      { parser: { system: false } },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{ loader: "babel-loader" }]
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
    disableHostCheck: true
  },
  watch: true,
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000
  },
  plugins: [
    /*new CopyWebpackPlugin([
      { from: path.resolve(__dirname, "src/favicon.ico"), to: "favicon.ico" },
      { from: path.resolve(__dirname, "img"), to: "img" },
      {
        from: path.resolve(__dirname, "src/importmap.json"),
        to: "importmap.json"
      }
    ]),*/
    new HtmlWebpackPlugin({
      inject: false,
      template: "src/index.ejs",
      templateParameters: {
        isLocal: env && env.isLocal
      }
    }),
    new CleanWebpackPlugin()
  ],
  externals: ["single-spa", /^@ex\/.+$/, "i18next"]
});
