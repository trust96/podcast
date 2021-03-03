import { merge } from 'webpack-merge';
import path from 'path';

import common from './webpack.common';

module.exports = merge(common, {
	mode: 'development',

	devtool: 'inline-source-map',

	devServer: {
		contentBase: './dist'
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist')
	}
});
