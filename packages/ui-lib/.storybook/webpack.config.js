const webpack = require('webpack')
const path = require('path')

// style files regexes
const cssRegex = /\.css$/
const cssModuleRegex = /\.module\.css$/
const sassRegex = /\.(scss|sass)$/
const sassModuleRegex = /\.module\.(scss|sass)$/

/** Uncomment to have a copy of files written on disk */
// const util = require('util')
// const fs = require('fs')
/** Uncomment to have a copy of files written on disk */

module.exports = ({ config }) => {
	config.module.rules.push({
		test: /\.(stories|story)\.[tj]sx?$/,
		exclude: [/node_modules/, /utils/],
		loaders: [require.resolve('@storybook/source-loader')],
		enforce: 'pre',
	})

	const rulesScriptConfig = [
		{
			test: /\.(svg)$/i,
			loaders: [
				{
					loader: 'svg-sprite-loader',
				},
				{
					loader: 'svgo-loader',
					options: {
						original: false,
						gzip: true,
						multipass: true,
						floatPrecision: 2,
						plugins: [
							{ cleanupAttrs: true },
							{ removeDoctype: true },
							{ removeXMLProcInst: true },
							{ removeComments: true },
							{ removeMetadata: true },
							{ removeTitle: true },
							{ removeDesc: true },
							{ removeUselessDefs: true },
							{ removeEditorsNSData: true },
							{ removeEmptyAttrs: true },
							{ removeHiddenElems: true },
							{ removeEmptyText: true },
							{ removeEmptyContainers: true },
							{ removeViewBox: false },
							{ cleanUpEnableBackground: true },
							{ convertStyleToAttrs: true },
							{ convertColors: true },
							{ convertPathData: false },
							{ convertTransform: false },
							{ removeUnknownsAndDefaults: true },
							{ removeNonInheritableGroupAttrs: true },
							{ removeUselessStrokeAndFill: true },
							{ removeUnusedNS: true },
							{ cleanupIDs: true },
							{ cleanupNumericValues: true },
							{ cleanupListOfValues: true },
							{ moveElemsAttrsToGroup: true },
							{ moveGroupAttrsToElems: true },
							{ removeRasterImages: false },
							{ mergePaths: true },
							{ convertShapeToPath: true },
							{ sortAttrs: false },
							{ transformsWithOnePath: false },
							{ removeDimensions: true },
							{ cleanupEnableBackground: true },
							{ collapseGroups: true },
						],
					},
				},
			],
		},
	]

	config.module.rules = config.module.rules.map(rule => {
		// check for the svg loader and remove it from the respective rule
		if (
			rule.test.toString() ===
			/\.(svg|ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/.toString()
		) {
			rule.test = /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/
		}

		// remove svg and modify babel options
		if (
			rule.test.toString() === /\.(js|mjs|jsx|ts|tsx)$/.toString() &&
			!rule.enforce
		) {
			const overrideRule = { ...rule }
			delete overrideRule.options.presets
			delete overrideRule.options.plugins

			overrideRule.options.extends = path.resolve(
				__dirname,
				'./babel-preset.js'
			)
			return overrideRule
		}

		return rule
	})

	rulesScriptConfig.forEach(function (item) {
		config.module.rules.push(item)
	})

	config.plugins.push(
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
			},
			__SERVER__: false,
			__PROD__: process.env.NODE_ENV === 'production',
			__DEV__: process.env.NODE_ENV === 'development',
			__CLIENT__: true,
			__STYLEGUIDE__: true,
			__TEST__: false,
		})
	)

	/** Uncomment to have a copy of files written on disk */
	// fs.writeFileSync(
	// path.resolve(__dirname, `../storybook_wp_compiled.js`),
	// util.inspect(config, { showHidden: false, depth: null }),
	// 'utf-8',
	// err => {
	// if (err) throw err
	// }
	// )
	/** Uncomment to have a copy of files written on disk */

	return config
}
