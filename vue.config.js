// const webpack = require('webpack')
// const dotenv = require('dotenv').config()

// module.exports = {
//   publicPath: '',
//   configureWebpack: {
//     // Set the environment variables
//     // (Note that the variable names should not have the `VUE_APP_` prefix here)
//     plugins: [
//       new webpack.DefinePlugin({
//         VUE_APP_GITHUB_ACCESS_TOKEN: JSON.stringify(dotenv.parsed.VUE_APP_GITHUB_ACCESS_TOKEN)
//       })
//     ]

//   }

// }

const webpack = require("webpack");
const dotenv = require("dotenv").config();

module.exports = {
  publicPath: "",
  configureWebpack: {
    // Set the environment variables
    // (Note that the variable names should not have the `VUE_APP_` prefix here)
    plugins: [],
  },
  devServer: {
    historyApiFallback: true,
  },
};
