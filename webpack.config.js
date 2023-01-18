const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode : 'development',
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "../../app/static/unauthenticated"),
    filename: "[name].js",
    clean: true,
  },
  resolve : {extensions : [".js", ".jsx", ".json"]},
  module: {
    rules: [
      {
        test: /\.js|.jsx$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, 'src'),
        exclude : /node_modules/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
  devServer: {
    devMiddleware: {
      writeToDisk: true,
    },
  },
  optimization: {
    minimize: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("development"),
      },
    })
  ],
};
