const crypto = require('crypto');

function sha256Encode (str) {
  return crypto.createHash('sha256').update(str, 'utf8').digest().toString('hex');
}

module.exports = sha256Encode;