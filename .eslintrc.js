module.exports = {
	extends: ['./tools/.eslintrc.js', 'eslint:recommended', 'plugin:vue/recommended', 'prettier:recommended'],
	parser: 'vue-eslint-parser',
	parserOptions: {
		parser: '@typescript-eslint/parser',
		sourceType: 'module',
		ecmaFeatures: {
			legacyDecorators: true
		},
		ecmaVersion: 'latest'
	},
	env: {
		browser: true,
		node: true,
		es6: true
	},

	globals: {
		__static: true,
		__DEV__: 'readonly',
		__IOS__: 'readonly',
		__ANDROID__: 'readonly'
	},
	plugins: ['vue', 'prettier'],
	rules: {
		'vue/max-attributes-per-line': [
			'error',
			{
				singleline: {
					max: 30
				},
				multiline: {
					max: 30
				}
			}
		],
		'vue/html-indent': [
			'error',
			'tab',
			{
				attribute: 1,
				baseIndent: 1,
				closeBracket: 0,
				alignAttributesVertically: true,
				ignores: []
			}
		],
		'vue/singleline-html-element-content-newline': [
			'error',
			{
				ignoreWhenNoAttributes: true,
				ignoreWhenEmpty: true,
				ignores: ['pre', 'textarea', 'button', 'span', 'a', 'router-link', 'Input', 'p', 'h1', 'h4', 'option']
			}
		],
		'vue/html-self-closing': [
			'error',
			{
				html: {
					void: 'any',
					normal: 'any',
					component: 'any'
				},
				svg: 'always',
				math: 'always'
			}
		],
		'vue/comment-directive': [
			'error',
			{
				reportUnusedDisableDirectives: false
			}
		],
		'vue/multiline-html-element-content-newline': 'off',
		'vue/attribute-hyphenation': [
			'error',
			'never',
			{
				ignore: []
			}
		],
		'no-unused-vars': 'off',
		semi: 'off',
		'@typescript-eslint/semi': 'off',
		indent: 'off',
		'@typescript-eslint/indent': 'off',
		'prettier/prettier': [
			'error',
			{
				endOfLine: 'off'
			}
		]
	},
	overrides: [
		{
			files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
			env: {
				jest: true
			}
		}
	]
}
