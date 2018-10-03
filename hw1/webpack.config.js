module.exports = {
  mode: 'development',
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        include: __dirname + 'src',
       }
    ]
  }
};
