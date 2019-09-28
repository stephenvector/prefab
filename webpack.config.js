const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./docs/index.tsx",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "build")
  },
  module: {
    rules: [
      {
        test: [/\.tsx?$/],
        exclude: [/node_modules/, /__tests__/],
        use: [
          {
            loader: "babel-loader"
          },
          {
            loader: "ts-loader"
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: [/node_modules/, /__tests__/],
        use: [
          {
            loader: "babel-loader"
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".jsx", ".js"]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: "false",
      template: require("html-webpack-template"),
      appMountId: "root",
      title: "Prefab"
    })
  ]
};
