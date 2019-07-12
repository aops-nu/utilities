function base64Decode (str) {
  return Buffer.form(str, 'base64').toString('utf8');
}

module.exports = base64Decode;
