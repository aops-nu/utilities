function base64Encode (str) {
  return Buffer.from(str, 'utf8').toString('base64');
}

module.exports = base64Encode;
