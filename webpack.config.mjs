import { CleanWebpackPlugin } from "clean-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";

const paths = {
  entry: path.resolve(import.meta.dirname, "src", "index.tsx"),
  html: path.resolve(import.meta.dirname, "src", "index.html"),
  target: path.resolve(import.meta.dirname, "public"),
};

const rules = {
  typescript: {
    test: /.tsx?$/,
    loader: "ts-loader",
  },
};

const plugins = {
  clean: new CleanWebpackPlugin(),
  html: new HtmlWebpackPlugin({
    template: paths.html,
  }),
};

export default {
  entry: paths.entry,
  output: {
    filename: "app.js",
    path: paths.target,
  },
  devtool: "source-map",
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [rules.typescript],
  },
  plugins: [plugins.clean, plugins.html],
};
