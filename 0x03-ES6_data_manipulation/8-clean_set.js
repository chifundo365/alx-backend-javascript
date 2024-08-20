export default function cleanSet(set, startString) {
  const str = [];
  if (startString.length !== 0) {
    for (const item of set.values()) {
      if (item.startsWith(startString)) {
        str.push(item.substring(startString.length));
      }
    }
  }

  return str.join('-');
}
