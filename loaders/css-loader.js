function loader(source) {

  let reg = /url\((.+?)\)/g;
  let pos = 0, current;

  let arr = ['let list = []'];

  while(current = reg.exec(source)) {
    let [ matchUrl, g] = current;

    let last = reg.lastIndex - matchUrl.length;
    arr.push(`list.push(${ JSON.stringify(source.slice(pos, last)) })`);
    pos = reg.lastIndex;
    // 把 g 替换成 require 写法
    arr.push(`list.push('url(' + require(${ g }) + ')')`);
  }
  arr.push(`list.push(${ JSON.stringify(source.slice(pos)) })`);
  arr.push(`module.exports = list.join('')`);
  return source;
}
module.exports = loader;