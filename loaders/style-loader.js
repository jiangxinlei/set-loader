const loaderUtils = require('loader-utils');
function loader(source) {
  // 在 style-loader 中导出一个脚本
  let str = `
    let style = document.createElement('style');
    style.innerHTML = ${ JSON.stringify(source) };
    document.head.appendChild(style);
  `;
  return str;
}

// 在 style-loader 上写了 pitch，后面的流程都不走了
// loader.pitch = function(remainingRequest) {
//   // 让 style-loader 去处理 less-loader!css-loader/./index.less
//   // stringifyRequest 将绝对路径转成相对路径
//   let str = `
//     let style = document.createElement('style');
//     style.innerHTML = require(${ loaderUtils.stringifyRequest(this, `!!${remainingRequest}`) });
//     document.head.appendChild(style);
//   `;

//   return str;
// }

module.exports = loader;