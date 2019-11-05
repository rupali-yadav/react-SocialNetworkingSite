const path = require('path');
const extractTextPlugin = require('extract-text-webpack-plugin');
module.exports = (env) => {
  const isProduction = env === 'production';
  //creating a new instance of extractTextPlugin variable 
  //and we need to pass in the filw name to which we want to extract
  const CSSExtract = new extractTextPlugin('styles.css');
  return {
    entry: './src/app.js',
    output: {
      path: path.join(__dirname, 'public','dist'),
      filename: 'bundle.js'
    },
    module: {
      rules: [{
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      }, {
        test: /\.s?css$/,
        use: CSSExtract.extract({
          use: [{
              loader: 'css-loader',
              options: {
                sourceMap: true
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            }
          ]
        })
      }]
    },
    plugins: [
      CSSExtract
    ],
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true,
      publicPath: '/dist/'
    }
  };
};
//sourceMap:true is set for developemnet env where all the code is doumped into one file styles.css, 
//but doesn't show the line no in the specific files