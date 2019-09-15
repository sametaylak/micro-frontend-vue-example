const WebpackAssetsManifest = require('webpack-assets-manifest')

module.exports = {
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  },
  configureWebpack: config => {
    config.plugins = config.plugins.concat(
      new WebpackAssetsManifest({
        output: 'asset-manifest.json'
      })
    )
  }
}
