const assert  = require('assert');
const calculateNumber = require('./1-calcul');

describe('Test a calculateNumber Function', () => {
  describe('Test the Addition', () => {
    it('Should return 5', () => {
      assert.equal(calculateNumber('SUM', 3.1, 2.4), 5);
    });

    it('Should return 7', () => {
      assert.equal(calculateNumber('SUM', 4, 3), 7);
    });

    it('Should return -2', () => {
      assert.equal(calculateNumber('SUM', -6, 4), -2);
    });

    it('Should return 15', () => {
      assert.equal(calculateNumber('SUM', -7.0, -8.3), -15);
    });
   });

  describe('Test subtract', () => {
    it('Should Return 9', () => {
      assert.equal(calculateNumber('SUBTRACT', 10, 19), 9);
    });
    
    it('Should return -6', () => {
      assert.equal(calculateNumber('SUBTRACT', -2, -4), -2);
    });

    it('Should return 4', () => {
      assert.equal(calculateNumber('SUBTRACT', 3.4, 7.1), 4);
    });

    it('Should return 73', () => {
      assert.equal(calculateNumber('SUBTRACT', 27, 100), 73);
    });

    it('Should return 8', () => {
      assert.equal(calculateNumber('SUBTRACT', 8, 16), 8);
    });
  });

  describe('Test Divide', () => {
    it('Should return 2', () => {
      assert.equal(calculateNumber('DIVIDE', 4, 2), 2);
    });

    it('Should return -10', () => {
      assert.equal(calculateNumber('DIVIDE', 100, -10), -10);
    });

    it('Should return 2', () => {
      assert.equal(calculateNumber('DIVIDE', 14.4, 7.2), 2);
    });

    it('Should return Error', () => {
      assert.equal(calculateNumber('DIVIDE', 4, 0.0), 'Error');
    });
  });
 });
