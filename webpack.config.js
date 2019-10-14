const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackInlineSourcePlugin = require("html-webpack-inline-source-plugin");

module.exports = {
  mode: "development",
  watch: false,
  entry: "./docs/index.tsx",
  output: {
    path: path.resolve(__dirname, "public")
  },
  devServer: {
    port: 3000
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  module: {
    rules: [
      { test: /\.tsx?$/, exclude: /node_modules/, loader: "babel-loader" },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: require("html-webpack-template"),
      appMountId: "root",
      title: "prefab",
      inlineSource: ".(css)$",
      headHtmlSnippet:
        '<meta name="viewport" content="initial-scale=1, maximum-scale=1">'
    }),
    new HtmlWebpackInlineSourcePlugin()
  ],
  optimization: {
    splitChunks: {
      chunks: "all"
    }
  }
};
