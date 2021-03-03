import { merge } from "webpack-merge";
import path from "path";
import common from "./webpack.common";

export default merge(common, {
  mode: "production",
  devtool: "source-map", // inline-- or eval-- increase the bundle size
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
  },
});
