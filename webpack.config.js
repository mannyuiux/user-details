const HTMLWebpackPlugin = require("html-webpack-plugin");
const { join } = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const { HotModuleReplacementPlugin } = require("webpack");

module.exports = {
  mode: "development",
//   mode: 'production',
  entry: join(__dirname, "app.js"),
  output: {
    path: join(__dirname, "build"),
    filename: "app.bundled.js"
  },
  devServer: {
    port: 3000,
    hot: true,
    open: true,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.js&/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env"]
        }
      },
      {
        test: /\.vue$/,
        use: "vue-loader"
      },
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
    new HotModuleReplacementPlugin(),
    new VueLoaderPlugin(),
    new HTMLWebpackPlugin({
      showErrors: true,
      cache: true,
      title: "User Details",
      template: join(__dirname, "index.html")
    })
  ]
};