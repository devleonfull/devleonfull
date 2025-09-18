module.exports = {
  "/": {
    target: "http://localhost:4200",
    secure: false,
    changeOrigin: true,
    logLevel: "debug",
    onProxyRes: function (proxyRes, req, res) {
      proxyRes.headers['Content-Security-Policy'] = "default-src 'self'; script-src 'self' https://www.googletagmanager.com; style-src 'self' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; connect-src 'self' https://www.googleadservices.com https://www.google.ca;";
    }
  }
};