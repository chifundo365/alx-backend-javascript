import { readFile } from 'fs';

export default function readDatabase(fileName) {
  const students = {};

  return new Promise((resolve, reject) => {
    readFile(fileName, (error, data) => {
      if (error) {
        reject(Error('Cannot load the database'));
      } else {
        const lines = data.toString().split('\n');
        for (let i = 0; i < lines.length; i += 1) {
          if (lines[i]) {
            const field = lines[i].toString().split(',');
            if (Object.prototype.hasOwnProperty.call(students, field[3])) {
              if (field[3] !== 'field') {
                students[field[3]].push(field[0]);
              }
            } else if (field[3] !== 'field') {
              students[field[3]] = [field[0]];
            }
          }
        }
        resolve(students);
      }
    });
  });
}
