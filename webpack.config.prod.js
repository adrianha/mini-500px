var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: {
    app: './src/index',
    vendor: ['react', 'redux', 'react-redux', 'react-router', 'axios'],
  },
  output: {
    path: __dirname + '/static/',
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
        loaders: ['babel']
      }
    ],
  },
  plugins: [
	  new webpack.DefinePlugin({
	    'process.env': {
	      'NODE_ENV': JSON.stringify('production')
	    }
	  }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js"),
    new webpack.optimize.OccurenceOrderPlugin(),
    /* Based on: https://github.com/webpack/webpack/issues/1205#issuecomment-154840823 */
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        properties: true,
        sequences: true,
        dead_code: true,
        conditionals: true,
        comparisons: true,
        evaluate: true,
        booleans: true,
        unused: true,
        loops: true,
        hoist_funs: true,
        cascade: true,
        if_return: true,
        join_vars: true,
        drop_debugger: true,
        unsafe: true,
        hoist_vars: true,
        negate_iife: true
      },
      mangle: {
        toplevel: true,
        sort: true,
        eval: true,
        properties: true
      },
      output: {
        space_colon: false,
        comments: function(node, comment) {
          var text = comment.value;
          var type = comment.type;
          if (type == "comment2") {
            // multiline comment
            return /@copyright/i.test(text);
          }
        }
      }
    })
  ]
};
