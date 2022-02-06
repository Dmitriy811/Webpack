const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')

let mode = 'development'

if (process.env.NODE_ENV === 'production') {
	mode = 'production'
}
console.log(`mode ==> ${mode}`)

module.exports = {
	mode: mode,
	output: {
		filename: '[name].[contenthash].js',
		assetModuleFilename: 'assets/[hash][ext][query]',
		clean: true
	},
	devServer: {
		open: true,
		static: {
			directory: './src',
			watch: true
		},
		port: 9000
	},
	devtool: 'source-map',
	plugins: [
		new MiniCssExtractPlugin({
			filename: '[name].[contenthash].css'
		}),
		new HtmlWebpackPlugin({
			template: (`./src/index.pug`)
		}),
	],
	module: {
		rules: [
			{
				test: /\.html$/i,
				loader: 'html-loader',
			},
			{
				test: /\.(sa|sc|c)ss$/,
				use: [
					mode === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
					"css-loader",
					{
						loader: "postcss-loader",
						options: {
							postcssOptions: {
								plugins: [
									[
										"postcss-preset-env",
										{
											// Options
										},
									],
								],
							},
						},
					},
					"sass-loader",
				]
			},
			{
				test: /\.(png|svg|jpg|gif|jpeg)$/i,
				type: 'asset/resource',
			},
			{
				test: /\.(woff|woff2|eot|ttf|oft)$/i,
				type: 'asset/resource',
			},
			{
				test: /\.pug$/,
				use: [{
					loader: 'html-loader'
				}, {
					loader: 'pug-html-loader',
					options: {
						exports: false
					}
				}]
			},
			{
				test: /\.m?js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			}
		]
	},

}