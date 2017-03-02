const path = require('path');
// get express
const express = require('express');
// Create the express app
const app = express();
// The app runs on the server provided port or port 3000
const PORT = process.env.PORT || 3000
// require pug for the index file rendering.
const pug = require('pug')
// gzip compression
const compression = require('compression')

// using webpack-dev-server and middleware in development environment
if (process.env.NODE_ENV !== 'production') {
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const webpack = require('webpack');
  const config = require('./webpack.config');
  const compiler = webpack(config);
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  }));
  app.use(webpackHotMiddleware(compiler));
}

// use gzip compression
app.use(compression())
// use the /dist folder as a base for static files
app.use(express.static(path.join(__dirname, 'dist')));
// listen on the port and continue
const server = app.listen(PORT, function (error) {
  if (error)
    return onsole.error("Error starting the server:", error);
  return console.info(`Server running at http://localhost:${PORT}`);
});


// Put your express routes here...



// Using pug to render the main index. Can be found in /dist
app.get('*', function (req, res) {
  // Send the rendered file
  res.send(pug.renderFile(__dirname + '/dist/index.jade'))
});



