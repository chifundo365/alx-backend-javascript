/* eslint-disable no-param-reassign */
/* eslint-disable no-prototype-builtins */
export default function updateStudentGradeByCity(list, city, newGrades) {
  return list.filter((obj) => obj.location === city)
    .map((student) => {
      newGrades.map((studentGrade) => {
        if (student.id === studentGrade.studentId) {
          student.grade = studentGrade.grade;
        }

        if (!student.hasOwnProperty('grade')) {
          student.grade = 'N/A';
        }
        return student;
      });

      return student;
    });
}
