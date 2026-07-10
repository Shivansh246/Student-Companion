export default function deepMerge(target, source) {
  if (Array.isArray(target)) {
    return Array.isArray(source) ? source : target;
  }

  if (
    target !== null &&
    typeof target === "object" &&
    source !== null &&
    typeof source === "object"
  ) {
    const result = { ...target };

    Object.keys(source).forEach((key) => {
      if (key in target) {
        result[key] = deepMerge(target[key], source[key]);
      } else {
        result[key] = source[key];
      }
    });

    return result;
  }

  return source === undefined ? target : source;
}