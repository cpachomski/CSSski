var getConfig = require('hjs-webpack')
var React = require('react')


module.exports = getConfig({
  in: 'src/main.js',
  out: 'public',
  clearBeforeBuild: true,
});