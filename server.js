const path = require('path');
// get express
import express from 'express';
// Create the express app
const app = express();
// The app runs on the server provided port or port 8080
const PORT = process.env.PORT || 8080
const pug = require('pug')
const fs = require('fs')

// using webpack-dev-server and middleware in development environment
if(process.env.NODE_ENV !== 'production') {
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const webpack = require('webpack');
  const config = require('./webpack.config');
  const compiler = webpack(config);
  app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
  app.use(webpackHotMiddleware(compiler));
}

app.use(express.static(path.join(__dirname, 'dist')));



// Using pug to render the main index. Can be found in /dist
app.get('*', function(req, res) {
	res.send(pug.renderFile(__dirname + '/dist/index.jade'))
});
