var WebpackDevServer = require('webpack-dev-server');
var webpack = require('webpack');

var config = require('./webpack.config.js');
config.entry.app.unshift("webpack-dev-server/client?http://localhost:8080/");
var compiler = webpack(config);
var server = new WebpackDevServer(compiler, {
  contentBase:'build/',
  publicPath: "/assets/"
});
server.listen(8080);
