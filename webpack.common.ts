import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import HtmlMinimizerPlugin from 'html-minimizer-webpack-plugin';
import ImageMinimizerPlugin from 'image-minimizer-webpack-plugin';
const common: webpack.Configuration = {
	/* Context: The base directory, an absolute path, for resolving entry points and loaders from configuration. */
	entry: {
		/* The point or points where to start the application bundling process. If an array is passed then all items will be processed. A dynamically loaded module is not an entry point.
    Simple rule: one entry point per HTML page. SPA: one entry point, MPA: multiple entry points. */
		main: './src/index.ts'
	},
	resolve: {
		extensions: ['.ts', '.js', '.json']
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/
			},
			{
				test: /\.pug$/,
				use: 'pug-loader'
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					//loads the css in a file.
					MiniCssExtractPlugin.loader,
					// Creates `style` nodes from JS strings. don't use when you rae using miniCssExtractplugin
					// 'style-loader',
					// Translates CSS into CommonJS
					'css-loader',
					// Compiles Sass to CSS
					'sass-loader'
				]
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,

				type: 'asset/resource'
			}
		]
	},

	plugins: [
		new MiniCssExtractPlugin(),
		new HtmlWebpackPlugin({
			template: `${__dirname}/src/pug/index.pug`
		}),

		new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
		new ImageMinimizerPlugin({
			minimizerOptions: {
				// Lossless optimization with custom option
				// Feel free to experiment with options for better result for you
				plugins: [
					['gifsicle', { interlaced: true }],
					['jpegtran', { progressive: true }],
					['optipng', { optimizationLevel: 5 }],
					[
						'svgo',
						{
							plugins: [
								{
									removeViewBox: false
								}
							]
						}
					]
				]
			}
		})
	],
	optimization: {
		minimize: true,
		minimizer: [
			// For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
			// `...`
			new CssMinimizerPlugin(),
			new HtmlMinimizerPlugin()
		]
	}
};

export default common;
