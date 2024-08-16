export default function getStudentIdsSum(list) {
  return list.reduce((prev, current) => prev + current.id, 0);
}
