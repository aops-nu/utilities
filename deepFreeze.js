function deepFreeze (obj) {
  // Retrieve the property names defined on object
  const propNames = Object.getOwnPropertyNames(obj);

  // Freeze properties before freezing self
  for (const name of propNames) {
    const value = obj[name];

    obj[name] = value && typeof value === 'object' ? deepFreeze(value) : value;
  }

  return Object.freeze(obj);
}

module.exports = deepFreeze;
