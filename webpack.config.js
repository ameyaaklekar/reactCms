module.exports = {
	entry: `${__dirname}/app/index.jsx`,
	output:{
		path: `${__dirname}/assets/js`,
		filename: 'bundle.js'
	},
	module:{
		loaders:[
			{
				test: /\.jsx$/,
				loader: 'babel-loader',
				query:{
					presets: ['es2015', 'react']
				}
			}
		]
	}
}