const path = require('path')

process.env.NODE_ENV = process.env.NODE_ENV || 'development'

let babelPreset = require('babel-preset-react-app')({
	flow: true,
})

babelPreset = { ...babelPreset }

babelPreset.plugins.push.apply(babelPreset.plugins, [
	[
		'module-resolver',
		{
			extensions: ['.js', '.es6', '.mjs'],
			alias: {
				'ui-lib': path.resolve(__dirname, '..', 'src'),
			},
		},
	],
	[
		'styled-components',
		{
			useDisplayName: false,
		},
	],
])

babelPreset.env = {
	...babelPreset.env,
	test: {
		plugins: ['require-context-hook'],
	},
}

module.exports = babelPreset
