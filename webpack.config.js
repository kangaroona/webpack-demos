const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
module.exports = {
  entry: {
    index: "./src/index.js",
    detail: "./src/detail.js",
  },
  // this.entry
  mode: "development",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/public/",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader", // ES6
        exclude:
          /(node_modules|libs|ppweb\\libs\\webpack|ppweb\/libs\/webpack)/,
      },
    ],
  },
  target: "web",
  devtool: "inline-source-map",
  devServer: {
    static: {
      // 告诉服务器从哪里提供内容,只有在你希望提供静态文件时才需要这样做
      directory: path.resolve(__dirname, "dist"),
      // 告诉服务器在哪个 URL 上提供 static.directory 的内容
      // 比如：通过http://localhost:8809/assets/可以访问当前目录下public文件夹中内容
      publicPath: "/public/",
    },
    // static: path.resolve(__dirname, "dist"),
    compress: true,
    port: 9000,
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "index",
      chunks: ["index"],
      filename: "index.html",
      template: "./index.html",
    }),
    new HtmlWebpackPlugin({
      title: "detail",
      chunks: ["detail"],
      filename: "detail.html",
      template: "./index.html",
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
};
