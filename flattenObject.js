function flattenData(data) {
  if (Array.isArray(data)) {
    return data.map(flattenData);
  } else if (typeof data === "object" && data !== null) {
    const result = {};
    for (const key in data) {
      if (Array.isArray(data[key])) {
        result[key] = data[key].map((item) => {
          if (typeof item === "object" && item !== null) {
            const singularKey = Object.keys(item)[0];
            if (singularKey && singularKey === key.slice(0, -1)) {
              return flattenData(item[singularKey]);
            }
          }
          return flattenData(item);
        });
      } else {
        result[key] = flattenData(data[key]);
      }
    }
    return result;
  }
  return data;
}

module.exports = flattenData;
