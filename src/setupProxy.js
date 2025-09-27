const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://api.soldoutafrica.com',
      changeOrigin: true,
      secure: true,
      logLevel: 'debug'
    })
  );
};
