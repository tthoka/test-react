var path = require('path');

module.exports = {
  entry: path.join(__dirname, 'index.js'),
 
  output: {
    path: path.join(__dirname, '.'),
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
