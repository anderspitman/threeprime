const path = require('path');

module.exports = {
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: ['ts-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.(frag|vert|glsl)$/,
        use: [
          { 
            loader: 'raw-loader',
            //loader: 'webpack-glsl-loader',
            //loader: 'shader-loader',
            //loader: 'glsl-shader-loader',
            options: {}  
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
