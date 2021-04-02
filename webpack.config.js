module.exports = {
	entry: './src/index.js',
	output: {
		path: __dirname + '/dist',
		publicPath: '/',
		filename: 'bundle.js',
		library: 'Embed',
		libraryTarget: 'umd',
		libraryExport: 'default',
	},
};
