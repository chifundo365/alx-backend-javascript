export default class holbertonCourse {
  constructor(name, length, students) {
    if (typeof name === 'string') {
      this._name = name;
    } else {
      throw new TypeError('name must be a string');
    }

    if (typeof length === 'number') {
      this._length = length;
    } else {
      throw new TypeError('length must be a string');
    }
    if (Array.isArray(students)) {
      for (const student of students) {
        if (typeof student !== 'string') {
          throw new TypeError('students must be an array of strings');
        }
      }
      this._students = students;
    } else {
      throw new TypeError('students must be an arrray of strings');
    }
  }

  get name() {
    return this._name;
  }

  set name(name) {
    if (typeof name === 'string') {
      this._name = name;
    } else {
      throw new TypeError('name must be a string');
    }
  }

  get length() {
    return this._length;
  }

  set length(length) {
    if (typeof length === 'number') {
      this._length = length;
    } else {
      throw new TypeError('length mus be a number');
    }
  }

  get students() {
    return this._students;
  }

  set students(students) {
    if (Array.isArray(students)) {
      for (const student of students) {
        if (typeof student !== 'string') throw new TypeError('students must be an array of strings');
      }
      this._students = students;
    } else {
      throw new TypeError('students must be an array of stirngs');
    }
  }
}
