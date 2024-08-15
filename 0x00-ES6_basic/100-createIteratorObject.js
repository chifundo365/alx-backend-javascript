/* eslint-disable guard-for-in */
export default function createIteratorObject(report) {
  const employees = [];
  for (const department in report.allEmployees) {
    employees.push(...(report.allEmployees[department]));
  }

  return employees;
}
