const path = require('path');

module.exports = {
	module: {
		rules: [
			{
				test: /\.js$/,
				// loader: path.resolve('./loader/index.js')
				exclude: /(node_modules|bower_components)/,
      			use: {
      			  loader: './loader/index.js',
      			  options: {
      			    presets: ['env']
      			  }
      			}
			}
		]
	}
};