import readDatabase from '../utils';

/* eslint-disable no-param-reassign */

function sortObjectKeys(obj) {
  return Object.keys(obj).sort().reduce((result, key) => {
    result[key] = obj[key];
    return result;
  }, {});
}

export default class StudentsController {
  static getAllStudents(req, res) {
    readDatabase(process.argv[2]).then((output) => {
      res.write('This is the list of our students\n');
      const fieldStudents = sortObjectKeys(output);
      for (const [field, students] of Object.entries(fieldStudents)) {
        res.write(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}\n`);
      }
      res.end();
    }).catch((error) => {
      res.status(500).send(error.message);
    });
  }

  static getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    if (major === 'SWE' || major === 'CS') {
      readDatabase(process.argv[2]).then((output) => {
        res.status(200).send(`List: ${output[major].join(', ')}`);
      }).catch((error) => {
        res.status(500).send(error.message);
      });
    } else {
      res.status(500).send('Major parameter must be CS or SWE');
    }
  }
}
