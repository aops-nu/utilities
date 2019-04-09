function base64Encode (str) {
  return (new Buffer(str, 'utf8')).toString('base64');
}

module.exports = base64Encode;