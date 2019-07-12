/* eslint-disable global-require */

const fs = require('fs');
const files = fs.readdirSync('.');

const m = files.reduce((modules, file) => {
  const fn = file.split('.');

  if (fn[0] !== 'index' && fn[1] === 'js') {
    modules[fn[0]] = require(`./${fn[0]}`);
  }

  return modules;
}, {});

module.exports = m;
