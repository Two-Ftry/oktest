var path = require('path');

var config = {
  entry: {
    app: ['./app/main.js']
  },
  output: {
    path: path.resolve(__dirname, 'build/'),
    publicPath: '/assets/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
    ]
  },
  devServer:{
    inline: true
  },
  pulgins: [
  ]
};


module.exports = config;
