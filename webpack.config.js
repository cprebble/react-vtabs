const webpack = require('webpack');
const path = require('path');
const HtmlPlugin = require('html-webpack-plugin')

module.exports = {
	devtool: 'source-map',
	entry: path.join(__dirname, 'examples'),
	output: {
		filename: 'bundle.js',
		path: path.join(__dirname, 'dist'),
	},
	module: {
		// loaders: [{
		// 	test: /\.jsx$/,
		// 	exclude: /node_modules/,
		// 	loader: 'babel-loader'
		// }]
		rules: [
            {
                test: /.jsx?$/,
                exclude: /node_modules/,
                include: [
					path.join(__dirname, 'src'),
					path.join(__dirname, 'examples'),
				],
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            babelrc: false,
                            presets: [
                                ['es2015', { modules: false }],
								'react',
								'stage-0'
                            ],
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
		// Configure HtmlPlugin to use our own index.html file
		// as a template.
		// Check out https://github.com/jantimon/html-webpack-plugin
		// for the full list of options.
		new HtmlPlugin({
			template: 'examples/index.html'
		})
	]
  };