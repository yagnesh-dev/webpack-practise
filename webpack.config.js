module.exports = {
  entry: { index: path.resolve(__dirname, "src", "index.js") },
  // or
  entry: path.resolve(__dirname, "src", "index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  module : {
    rules: [
        {
            test:/\.js$/,
            exclude: /node_modules/,
            use: ["babel-loader"]
        }
    ]
  }
};
