const manifest = require('./public/manifest.json')
const configureAPI = require('./api')

if (process.env.NODE_ENV) {
  console.log(`Welcome to ${process.env.NODE_ENV} mode`);
}
if (process.env.DEBUG) {
  console.log('Debugging output');
}

console.log(process.env.SKIN)
process.env.VUE_APP_TITLE = manifest.name;

module.exports = {
  publicPath: process.env.PUBLIC_PATH || '/',
  devServer: {
    before: configureAPI
  },
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "./skins/${(process.env.SKIN || 'reserve').trim()}/assets/sass/_variables.scss";
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
