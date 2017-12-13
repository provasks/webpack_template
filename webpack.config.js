const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin'); //installed via npm
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
      /*
      your other rules for JavaScript transpiling go in here
      */
      { // css / sass / scss loader for webpack
        test: /\.(css|sass|scss)$/,
        use: ExtractTextPlugin.extract({
          use: [
            { loader: 'css-loader', options: { sourceMap: true } },
            { loader: 'sass-loader', options: { sourceMap: true } },
          ],
          publicPath: '/dist'
        })
      }
    ],
  },
  devtool: 'source-map',
  plugins: [
    new CleanWebpackPlugin(pathsToClean, cleanOptions),
    new ExtractTextPlugin({ // define where to save the file
      filename: "[name].bundle.css",
      allChunks: true
    }),
    new HtmlWebpackPlugin({
      hash: true,
      title: variables.home,
      myPageHeader: 'Homepage',
      template: './src/index.html',
      //chunks: ['vendor', 'app'],
      filename: 'index.html' //relative to root of the application
    }),
    new HtmlWebpackPlugin({
      hash: true,
      title: variables.about,
      myPageHeader: 'About Page',
      template: './src/components/about/index.html',
      //chunks: ['vendor', 'settings'],
      filename: './about/index.html'
    })
  ],
};
