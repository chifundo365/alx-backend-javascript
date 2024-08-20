/* eslint-disable no-unsafe-negation */
export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('cannot process');
  }
  const keys = map.keys();
  for (const k of keys) {
    if (map.get(k) === 1) {
      map.set(k, 100);
    }
  }
  return map;
}
