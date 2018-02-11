const path = require('path');
const HtmlPlugin = require('html-webpack-plugin')

module.exports = [
	{
		devtool: 'source-map',
		entry: {
			'react-vtabs': path.join(__dirname, 'src/index.js')
		},
		output: {
			path: path.join(__dirname, 'dist'),
			filename: 'react-vtabs.js',
			library: 'react-vtabs.js',
			libraryTarget: 'umd'
		},
		module: {
			rules: [
				{
					test: /.jsx?$/,
					exclude: /node_modules/,
					include: path.join(__dirname, 'src'),
					use: [
						{
							loader: 'babel-loader',
							options: {
								babelrc: false,
								presets: ['es2015', 'react', 'stage-0'],
							}
						}
					]
				}
			]
		},
		externals: {
			react: {
				commonjs: 'react',
				commonjs2: 'react',
				amd: 'react',
				root: 'React',
			},
			'react-dom': {
				commonjs: 'react-dom',
				commonjs2: 'react-dom',
				amd: 'react-dom',
				root: 'ReactDOM',
			},
			'prop-types': {
				commonjs: 'prop-types',
				commonjs2: 'prop-types',
				amd: 'prop-types',
				root: 'PropTypes',
			},
		},
		resolve: {
			extensions: ['.js', '.jsx']
		}
	},
	{
		entry: {
			'react-vtabs-examples': path.join(__dirname, 'examples/index.js')
		},
		output: {
			path: path.join(__dirname, 'dist'),
			filename: 'react-vtabs-examples.js',
		},
		module: {
			rules: [
				{
					test: /.jsx?$/,
					exclude: /node_modules/,
					include: [
						path.join(__dirname, 'src'),
						path.join(__dirname, 'examples')
					],
					use: [
						{
							loader: 'babel-loader',
							options: {
								babelrc: false,
								presets: ['es2015', 'react', 'stage-0'],
							}
						}
					]
				}
			]
		},
		resolve: {
			extensions: ['.js', '.jsx']
		},
		plugins: [
			new HtmlPlugin({
				template: 'examples/index.html'
			})
		]
	}
];