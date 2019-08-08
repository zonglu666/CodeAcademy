const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin").CleanWebpackPlugin;
const webpack = require("webpack");
const path = require("path");

module.exports = {
  // 设置 sourcemaps 为 eval 模式，将模块封装到 eval 包裹起来
  devtool: "eval",

  // 我们应用的入口, 在 `src` 目录
  entry: "index.tsx",

  // 配置 devServer 的输出目录和 publicPath
  output: {
    filename: "bundle.js",
    publicPath: "/",
    path: path.resolve(__dirname, "dist")
  },

  // 配置 devServer
  devServer: {
    port: 3000,
    historyApiFallback: true,
    inline: true
  },

  // 定义能够被打包的文件后缀名, 告诉 Webpack 加载 TypeScript 文件
  resolve: {
    // 首先寻找模块中的 .ts(x) 文件, 然后是 .js 文件
    extensions: [".ts", ".tsx", ".js"],

    // 在模块中添加 src, 当你导入文件时，可以将 src 作为相关路径
    modules: ["src", "node_modules"]
  },

  module: {
    rules: [
      // .ts(x) 文件应该首先经过 Typescript loader 的处理, 然后是 babel 的处理
      {
        test: /\.tsx?$/,
        loader: ["ts-loader"],
        include: path.resolve(__dirname, "src")
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.resolve(__dirname, "src/index.html")
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
};
