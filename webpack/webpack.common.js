const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "..", "./src/index.js"),

  output: {
    path: path.resolve(__dirname, "..", "./build"),
    filename: "bundle.js",
  },

  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },

      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },

      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: ["file-loader"],
      },

      {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      },

      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/, 
        loader: "url-loader",
        options: { limit: false },
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "..", "./src/index.html"),
    }),
  ],
};
