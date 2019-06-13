const configureAPI = require('./api')

module.exports = {
  publicPath: '/frontend-challenge',
  devServer: {
    before: configureAPI
  }
}