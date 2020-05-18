const babel = require('@babel/core');
const { getOptions } = require('loader-utils');

module.exports = function(source) {
  let options = getOptions(this);
  let cb = this.async();

  babel.transform(source,
    {
      ...options,
      sourceMap: true,
      filename: this.resourcePath.split('/').pop(),
    },
    (err, result) => {
      cb(err, result.code, result.map);
    }
  )
  return source;
}