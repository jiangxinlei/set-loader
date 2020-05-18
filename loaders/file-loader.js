// file-loader 目的就是根据图片生成一个 md5 戳，映射到 dist 目录下，再返回当前的图片路径
// 图片都是字符串，需要把代码改成 Buffer 二进制

const loaderUtils = require('loader-utils');

function loader(source) {

  // 根据当前格式生成路径
  let filename = loaderUtils.interpolateName(this, '[hash].[ext]', { content: source });

  this.emitFile(filename, source);    // 发射文件
  return  `module.exports='${ filename }'`;
}

loader.raw = true;   // 二进制

module.exports = loader;