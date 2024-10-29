const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin"); // Import the plugin

module.exports = {
  entry: "./src/js/index.js", // Your JavaScript entry point
  output: {
    filename: "bundle.js", // Output file name
    path: path.resolve(__dirname, "dist"), // Output directory
    clean: true, // Clean the output directory before each build
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Apply to .js files
        exclude: /node_modules/, // Exclude the node_modules directory
        use: {
          loader: "babel-loader", // Transpiles ES6/JSX to ES5
          options: {
            presets: ["@babel/preset-env"], // Presets for Babel
          },
        },
      },
      {
        test: /\.scss$/, // Apply to .scss files
        use: [
          "style-loader", // Injects CSS into the DOM
          "css-loader", // Translates CSS into CommonJS
          "sass-loader", // Compiles Sass to CSS
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html", // Template for the main page
      filename: "index.html", // Output filename for the main page
      // chunks: ["index"], // Include only the main chunk in this HTML file
    }),
    new HtmlWebpackPlugin({
      template: "./src/Women.html", // Template for the second page
      filename: "Women.html", // Output filename for the second page
      // chunks: ["Women"], // Include only the second chunk in this HTML file
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: "src/images", to: "images" }, // Adjust this path if needed
      ],
    }),

    // new HtmlWebpackPlugin({
    //   template: "./src/index.html",
    //   filename: "index.html",
    // }),
    // new CopyWebpackPlugin({
    //   patterns: [
    //     { from: "src/images", to: "images" }, // Adjust this path if needed
    //   ],
    // }),
  ],
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"), // Serve files from the dist directory
    },
    open: true, // Automatically open the browser
  },
  mode: "development", // Set mode to development
};
