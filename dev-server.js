const webpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');

const config = require('./webpack.config');
const options = {
  contentBase: './dist',
  hot: true,
  host: 'localhost'
};

webpackDevServer.addDevServerEntrypoints(config, options);
const complier = webpack(config);
const server = new webpackDevServer(complier, options);

server.listen(5000, 'localhost', () => {
  console.log('dev server listening in port 5000');
});