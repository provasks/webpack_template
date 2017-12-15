const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin'); //installed via npm
const CopyWebpackPlugin = require('copy-webpack-plugin');
const targetPath = __dirname + "/" + 'dist';
//const variables = require('./src/common/js/constants.js');

// the path(s) that should be cleaned
let pathsToClean = ['dist', 'build'];
// the clean options to use
let cleanOptions = {
  // root:     '/full/webpack/root/path',
  // exclude:  ['shared.js'],
  verbose: true,
  dry: false
};

module.exports = {
  entry: [
    //css
    './src/common/css/plain_css.css',
    './src/main.scss',
    //Javascripts
    './src/app.js',
    './src/components/about/about.js',
  ],
  output: {
    path: targetPath,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(css|sass|scss)$/,
        use: ExtractTextPlugin.extract({
          use: [
            { loader: 'css-loader', options: { sourceMap: true } },
            { loader: 'sass-loader', options: { sourceMap: true } },
          ],
          publicPath: '/dist'
        })
      },
      // {
      //   test: /\.(jpg|png)$/,
      //   use: [{
      //     loader: 'file-loader',
      //     options: {
      //       name: '[name].[ext]',
      //       outputPath: 'img/',
      //       publicPath: 'img/'
      //     }  
      //   }]
      // }
    ],
  },
  devtool: 'source-map',
  plugins: [
    new CleanWebpackPlugin(pathsToClean, cleanOptions),
    new ExtractTextPlugin({ // define where to save the file
      filename: "[name].bundle.css",
      allChunks: true
    }),
    new CopyWebpackPlugin([
      { from: "src/img", to: "img"}]
    ),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      filename: 'index.html', //relative to root of the application
      // chunks: ['app']
    }),
    new HtmlWebpackPlugin({
      template: './src/components/about/index.html',
      filename: 'about/index.html',
      chunks: ['about'],
    })
  ],
};
