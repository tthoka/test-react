module.exports = {
  entry: './index.js',
 
  output: {
    filename: 'bundle.js',
  },
 
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".jsx", ".js", ".json"]
  },

module: {
    loaders: [
      { exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' }
    ]
  }
}
