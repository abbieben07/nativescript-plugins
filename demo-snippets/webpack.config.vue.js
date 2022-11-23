const webpack = require('@nativescript/webpack')

module.exports = (env) => {
	webpack.chainWebpack((config) => {
		config.set('ignoreWarnings', (config.get('ignoreWarnings') || []).concat([/export/]))
	})
}
