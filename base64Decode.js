function base64Decode (str) {
  return (new Buffer(str, 'base64')).toString('utf8');
}

module.exports = base64Decode;