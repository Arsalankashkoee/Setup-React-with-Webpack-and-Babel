const webpack = require("webpack");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = {
  mode: "development",

  devServer: {
    hot: true,
  },

  devtool: "cheap-module-source-map",

  plugins: [
    new webpack.DefinePlugin({
      "process.env.NAME": JSON.stringify(process.env.NAME || "Arsalan"),
    }),

    new webpack.ProvidePlugin({
      React: "react",
    }),

    new ReactRefreshWebpackPlugin(),
  ],
};