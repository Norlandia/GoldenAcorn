module.exports = {
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['react'],
            },
          },
        ],
      },
    ],
  },
  devServer: {
    contentBase: './dist',
  },
};
