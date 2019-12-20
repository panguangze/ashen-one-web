const path = require("path");
const resolve = dir => {
  return path.join(__dirname, dir);
};
module.exports = {
  publicPath: "/", //前端路径
  outputDir: "dist",
  productionSourceMap: true,
  chainWebpack: config => {
    config.resolve.alias
      .set("@", resolve("src"))
      .set("_c", resolve("src/components"));
  }
};
