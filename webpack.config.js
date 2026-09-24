const path = require('path');

module.exports = {
  entry: {
    app: './src/app.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.js$/,
        enforce: 'pre',
        use: ['source-map-loader'],
      },
    ],
  },
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, './'),
    sourceMapFilename: '[name].js.map',
  },
  // `npm start` serves index.html, data/ and src/main.css from the repo root,
  // with bundle.js built in memory
  devServer: {
    static: {
      directory: __dirname,
      watch: {ignored: ['**/node_modules/**', '**/.git/**']},
    },
    port: 8080,
  },
  plugins: [],
  // `npm run build` passes --mode production
  mode: 'development',
};
