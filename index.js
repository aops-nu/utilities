const fs = require('fs');
let files = fs.readdirSync('.');

const m = files.reduce((m, file) => {
  let fn = file.split('.');
  if (fn[0] !== 'index' && fn[1] === 'js') {
    m[fn[0]] = require(`./${fn[0]}`);
  }
  return m;
}, {});

module.exports = m;