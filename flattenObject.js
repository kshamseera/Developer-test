function flattenObject(data) {
  if (Array.isArray(data)) {
    return data.map(flattenObject);
  } else if (typeof data === "object" && data !== null) {
    const result = {};
    for (const key in data) {
      if (Array.isArray(data[key])) {
        result[key] = data[key].map((item) => {
          if (typeof item === "object" && item !== null) {
            const singularKey = Object.keys(item)[0];
            if (singularKey && singularKey === key.slice(0, -1)) {
              return flattenObject(item[singularKey]);
            }
          }
          return flattenObject(item);
        });
      } else {
        result[key] = flattenObject(data[key]);
      }
    }
    return result;
  }
  return data;
}

module.exports = flattenObject;
