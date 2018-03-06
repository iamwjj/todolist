let path = require('path');
let HtmlWebpcakPlugin =  require('html-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin')

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
			// {
			// 	test: /\.css$/,
			// 	use: ["style-loader", "css-loader"]
			// }
			
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: "css-loader"
				})
			}
		]
	},

	plugins:[
		new HtmlWebpcakPlugin({
			template:'./index.html'
		}),
		new ExtractTextPlugin("style.css")
	],

	resolve:{
		alias:{
			'vue':'vue/dist/vue.js'
		}
	},

	mode:process.env.NODE_ENV=='development'?'development':'production',

}