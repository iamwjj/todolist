let path = require('path');
let HtmlWebpcakPlugin =  require('html-webpack-plugin');

module.exports = {
	entry:{
		app:'./main.js'
	},

	output:{
		path: path.resolve(__dirname, './dist'),
		filename: '[name].js'
	},

	module:{
		rules:[
			{
				test:/\.js$/,
				use:'babel-loader',
				exclude:'/node_modules'
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"]
			}
		]
	},

	plugins:[
		new HtmlWebpcakPlugin({
			template:'./index.html'
		})
	],

	resolve:{
		alias:{
			'vue':'vue/dist/vue.js'
		}
	},

	mode:process.env.NODE_ENV=='development'?'development':'production',

}