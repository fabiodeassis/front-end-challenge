const manifest = require('./public/manifest.json')
const configureAPI = require('./api')

module.exports = {
  publicPath: '/frontend-challenge',
  devServer: {
    before: configureAPI
  },
  pwa: {
    name: manifest.name,
    themeColor: manifest.theme_color,
    msTileColor: manifest.background_color,
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: manifest.background_color
  }
}
