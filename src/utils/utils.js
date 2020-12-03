export function groupBy(objectArray, property) {
  return objectArray.reduce((acc, obj) => {
    const key = obj[property];
    const module = acc.find((module) => module.name === obj.module);
    if (!module) {
      acc.push({ name: key, units: [obj] });
    } else {
      module.units.push(obj);
    }
    return acc;
  }, []);
}
