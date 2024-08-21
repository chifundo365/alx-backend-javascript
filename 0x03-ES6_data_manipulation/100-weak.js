export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  if (weakMap.get(endpoint) >= 4) {
    throw new Error('Endpoint load is high');
  }
  const value = weakMap.get(endpoint) ? weakMap.get(endpoint) : 0;
  weakMap.set(endpoint, value + 1);
}
