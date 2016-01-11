module.exports = {
  entry: {
    helloWorld:[
      'webpack-dev-server/client?http://localhost:8080',
      './src/js/helloworld'
    ]
  },
  output: {
    filename: 'public/[name].js'
  },
  module:{
    loaders: [
      {
        test: /\.js$/,
        loader: 'jsx',
        exclude: '/node_modules/'
      }
    ]
  }
};