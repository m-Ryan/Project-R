const proxy = require('http-proxy-middleware');

module.exports = function(app) {
	app.use(
		proxy('/api', {
			target: 'http://cms.maocanhua.cn/',
			// "pathRewrite": {
			//   "^/api": "/"
			// },
			secure: false,
			changeOrigin: true
		})
	);
};