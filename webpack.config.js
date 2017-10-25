const webpack = require('webpack');
const path = require('path');
module.exports = {
  context: path.join(__dirname),
  devtool: 'inline-source-map',
  entry: "./src/js/router.js",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'stage-0', 'react'],
            plugins: [['import', {"libraryName": "antd", "style": "css"}],'react-html-attrs']
          }
        }
      },
      //������ʹ�� ant-design �������ļ�
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
	   //������ʹ�� less �������ļ�
      },
       {test: /\.less$/, 
        loader: 'style-loader!css-loader!less-loader'
      }
    ],
  },
  output: {
    path: __dirname,
    filename: "./src/bundle.js"
  }
};