const manifest = require('./public/manifest.json')
const configureAPI = require('./api')

module.exports = {
  publicPath: '/',
  devServer: {
    before: configureAPI
  },
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/assets/styles/_variables.scss";
        `
      }
    }
  },
  pwa: {
    name: manifest.name,
    themeColor: manifest.theme_color,
    msTileColor: manifest.background_color,
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: manifest.background_color
  }
}
