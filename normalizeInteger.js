function normalizeInteger (val) {
  const value = parseInt(val);

  if (isNaN(value)) { return null; }

  return value;
}

module.exports = normalizeInteger;
