
function normalizeInteger (val) {
  let value = parseInt(val, 10);

  if (isNaN(value)) { return null; }
  return value;
}

module.exports = normalizeInteger;