let path = require('path');
let HtmlWebpcakPlugin =  require('html-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let CopyPlugin = require('copy-webpack-plugin');

module.exports = {
	entry:{
		app:'./src/main.js'
	},

	output:{
		path: path.resolve(__dirname, './dist'),
		filename: '[name].js?hash=[hash:5]'
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
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: "css-loader"
				})
			}
		]
	},

	plugins:[
		new HtmlWebpcakPlugin({
			template:'./src/index.html',
			filename:'index.html'
		}),
		new ExtractTextPlugin("style.css"),
		new CopyPlugin([
			{
				from: __dirname + '/src/img',
				to: 'img'
			},
			{
				from: __dirname + '/manifest.json',
			}
		])
	],

    devServer: {
		port:'8080'
	},

    resolve:{
		alias:{
			'vue':'vue/dist/vue.js'
		}
	},

	//这里并不需要这样配置，我只是想尝试一下。
	mode:process.env.NODE_ENV=='development'?'development':'production',

}