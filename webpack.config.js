var path = require('path');
var webpack = require('webpack');

module.exports = {
	devtool: 'eval',
	entry: [
		'webpack-dev-server/client?http://0.0.0.0:3000', // WebpackDevServer host and port
	  'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
	  './src/index' // Your appʼs entry point
	],
	output: {
		path: path.join(__dirname, 'static'),
		filename: 'bundle.js',
		publicPath: '/static/'
	},
	resolve: {
    extensions: ['', '.js', '.jsx']
  },
	module: {
		loaders: [
			{
				test: /\.js$/,
				loaders: ['react-hot', 'babel'],
				include: path.join(__dirname, 'src'),
				exclude: /node_modules/,
			}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.DefinePlugin({
	    'process.env': {
	      'NODE_ENV': JSON.stringify('development')
	    }
	  })
	]
};
