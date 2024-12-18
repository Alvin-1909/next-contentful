// next.config.js
module.exports = {
  reactStrictMode: true,
  webpackDevMiddleware: config => {
    config.watchOptions = {
      ...config.watchOptions,
      aggregateTimeout: 500,
      poll: 1000
    }
    return config
  }
}
