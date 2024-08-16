export default function getListsStudentIds(array) {
  const result = [];
  if (Array.isArray(array)) {
    array.map((obj) => result.push(obj.id));
  }
  return result;
}
