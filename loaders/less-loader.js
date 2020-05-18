const less = require('less');
function loader(source) {
  let css;
  less.render(source, (err, result) => {
    // result.css 即渲染后的 css
    css = result.css;
  });
  return css;
}
module.exports = loader;