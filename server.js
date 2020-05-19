const express = require('express');
const config = require('./webpack.config');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();

const complier = webpack(config);

app.use(webpackDevMiddleware(complier, {
  publicPath: config.output.publicPath
}));

app.listen(3000, function () {
  console.log('test');
});