// use this format since .eslintrc is deprecated.
// You can logically derive this format.
const path = require('path')

module.exports = {
	parser: 'babel-eslint',
	extends: [
		'plugin:flowtype/recommended',
		'plugin:jest/recommended',
		'plugin:react/recommended',
		'eslint-config-airbnb',
		'prettier',
		'prettier/flowtype',
		'prettier/react',
	],
	plugins: ['react', 'jest', 'flowtype', 'prettier', 'import', 'react-hooks'],
	env: {
		es6: true,
		browser: true,
		node: true,
		'jest/globals': true,
		'shared-node-browser': true,
	},
	parserOptions: {
		ecmaVersion: 2017,
		sourceType: 'module',
		jsx: true,
		ecmaFeatures: {
			experimentalObjectRestSpread: true,
		},
	},
	rules: {
		'prettier/prettier': [
			'error',
			{
				useTabs: true,
				printWidth: 80,
				tabWidth: 4,
				singleQuote: true,
				trailingComma: 'es5',
				jsxBracketSameLine: false,
				endOfLine: 'auto',
				semi: false,
			},
		],
		'no-var': 2,
		'no-const-assign': 'error',
		radix: 'error',
		'prefer-template': 'error',
		'prefer-const': 'error',
		'prefer-spread': 'error',
		eqeqeq: ['error', 'always'],
		semi: [2, 'never'],
		'default-case': 2,
		'template-curly-spacing': 0, // Prettier.
		'arrow-parens': 0, // Does not work with Flow generic types
		'consistent-return': 0, // Flow.
		// Prefer new line before return
		// http://eslint.org/docs/rules/newline-before-return
		'newline-before-return': 'error',
		'no-use-before-define': [
			'error',
			{ functions: false, classes: false, variables: true },
		],
		'import/no-extraneous-dependencies': 0,
		'import/no-cycle': ['error', { maxDepth: 1 }],
		'import/extensions': [
			'warn',
			'never',
			{ js: 'never', less: 'always', css: 'always', svg: 'always' },
		],
		'import/no-unresolved': 0,
		'import/first': 0,
		'import/prefer-default-export': 0,
		'no-return-await': 0,
		'no-restricted-syntax': 0,
		'no-underscore-dangle': 0,
		'no-restricted-globals': 1,
		'no-useless-escape': 1,
		//was not working when used with flow prop types
		'no-unused-vars': [2, { args: 'all', argsIgnorePattern: '^_$' }],
		'react/no-unused-prop-types': 1,
		'jsx-a11y/no-noninteractive-element-interactions': 1,
		// require or disallow Yoda conditions
		// https://eslint.org/docs/rules/yoda
		yoda: ['error', 'never', { exceptRange: true }],
		// Require modules with a single export to use a default export
		// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md

		// no longer defined
		'jsx-a11y/href-no-hash': 'off',

		'global-require': 0, // Used by webpack isomorphic tools and React Native.
		'no-console': 0, // we are enabling this in the scripts
		'no-debugger': 0, // we are enabling this in the scripts
		'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
		quotes: ['error', 'single', { avoidEscape: true }],
		// React control override.
		'react/display-name': 0,
		'react/forbid-prop-types': 0, // using Flow types.
		'react/jsx-closing-bracket-location': 0, // Prettier.
		'react/jsx-filename-extension': 0, // JSX belongs to .js files.
		'react/jsx-indent': 0, // Prettier.
		'react/jsx-indent-props': 0, // Prettier.
		'react/jsx-wrap-multilines': 0, // Prettier.
		'react/no-danger': 0, // Control freaky.
		'react/no-unescaped-entities': 0, // Prettier.
		'react/no-unused-prop-types': 0, // Flow.
		'react/prop-types': 0, // Flow.
		'react/require-default-props': 0, // Flow.
		'react/jsx-no-bind': 2,
		'react/prefer-stateless-function': [2, { ignorePureComponents: true }],
		'react/default-props-match-prop-types': 0,
		'no-multi-str': 1,
		'react/destructuring-assignment': [
			'warn',
			'always',
			{ ignoreClassFields: true },
		],
		'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
		'react-hooks/exhaustive-deps': 'error', // Checks effect dependencies
	},
	settings: {
		polyfills: ['promises'],
		flowtype: {
			onlyFilesWithFlowAnnotation: false,
		},
		'import/resolver': {
			'babel-module': {
				alias: {
					'ui-lib': path.resolve(__dirname, 'src'),
				},
				extensions: ['.js', '.jsx', '.mjs'],
			},
		},
	},
	globals: {
		__SERVER__: false,
		__PROTOBUFJSPATH__: false,
		__CLIENT__: true,
		__STYLEGUIDE__: false,
		__PROD__: false,
		__DEV__: false,
		__INITIAL_STATE__: false,
		__PREPROD__: false,
		__SIT__: false,
		__DC__: false,
		__TIER__: false,
		__TEST__: false,
		Promise: true,
		Reflect: true,
	},
}
