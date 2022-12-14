module.exports = (env, webpack) => {
	webpack.chainWebpack((config) => {
		config.set('ignoreWarnings', (config.get('ignoreWarnings') || []).concat([/export/]))
	})

	webpack.Utils.addCopyRule({
		from: '../demo-snippets/node_modules/@abbieben/paystack/www/',
		to: 'www/'
		//context: webpack.Utils.project.getProjectFilePath('node_modules')
	})

	webpack.Utils.addCopyRule({
		from: '../demo-snippets/node_modules/@abbieben/webview-interface/www/',
		to: 'www/'
		//context: webpack.Utils.project.getProjectFilePath('node_modules')
	})
}
