// const webpack = require("webpack");

module.exports = {
  mode: "production",

  devtool: "source-map",

  plugins: [
    new webpack.DefinePlugin({
      "process.env.NAME": JSON.stringify(
        process.env.NAME || "React Instructor!"
      ),
    }),
    new webpack.ProvidePlugin({
      React: "react",
    }),
  ],
};
