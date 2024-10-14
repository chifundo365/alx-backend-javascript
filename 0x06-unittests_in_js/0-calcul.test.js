const assert  = require('assert');
const calculateNumber = require('./0-calcul');

describe('Test a calculateNumber Function', () => {
  it('Should return 5', () => {
    assert.equal(calculateNumber(3.1, 2.4), 5);
  });

  it('Should return 7', () => {
    assert.equal(calculateNumber(4, 3), 7);
  });

  it('Should return -2', () => {
    assert.equal(calculateNumber(-6, 4), -2);
  });

  it('Should return 15', () => {
    assert.equal(calculateNumber(-7.0, -8.3), -15);
  });
});
