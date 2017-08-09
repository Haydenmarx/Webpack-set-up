const path = require('path');

module.exports = {
  entry: ['./app/index.js'],
  output : {
    path: __dirname + '/build',
    filename: 'bundle.js'
  },
module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  devServer: {
    port: 3000,
    contentBase: './build',
    inline: true
  }
}