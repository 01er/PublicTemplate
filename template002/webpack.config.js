module.exports = {
  entry: "./js/index.js",
  output: {
      path: './js/dist/',
      // path: __dirname+'js/dist/',
      filename: "bundle.js"
  },
  module: {
      loaders: [
          // { test: /\.css$/, loader: "style-loader!css-loader" }
      ]
  }
};