const expect  = require('chai').expect;
const calculateNumber = require('./1-calcul');

describe('Test a calculateNumber Function', () => {
  describe('Test the Addition', () => {
    it('Should return 5', () => {
      expect(calculateNumber('SUM', 3.1, 2.4)).to.equal(5);
    });

    it('Should return 7', () => {
      const result = calculateNumber('SUM', 4, 3)
      expect(result).to.equal(7);
    });

    it('Should return -2', () => {
      const result = calculateNumber('SUM', -6, 4);
      expect(result).to.equal(-2);
    });

    it('Should return -15', () => {
      const result = calculateNumber('SUM', -7.0, -8.3);
      expect(result).to.equal(-15);
    });
   });

  describe('Test subtract', () => {
    it('Should Return 9', () => {
      const result = calculateNumber('SUBTRACT', 19, 10);
      expect(result).to.equal(9);
    });
    
    it('Should return -6', () => {
      const result = calculateNumber('SUBTRACT', -4, -2);
      expect(result).to.equal(-2);
    });

    it('Should return 4', () => {
      const result = calculateNumber('SUBTRACT', 7.1, 3.4);
      expect(result).to.equal(4);
    });

    it('Should return 3', () => {
      const result = calculateNumber('SUBTRACT', 7.1, 3.4);
      expect(result).to.equal(4);
    });

    it('Should return 8', () => {
      const result = calculateNumber('SUBTRACT', 16, 8);
      expect(result).to.equal(8);
    });
  });

  describe('Test Divide', () => {
    it('Should return 2', () => {
      result = calculateNumber('DIVIDE', 4, 2);
      expect(result).to.equal(2);
    });

    it('Should return -10', () => {
      result = calculateNumber('DIVIDE', 100, -10);
      expect(result).to.equal(-10);
    });

    it('Should return 2', () => {
      result = calculateNumber('DIVIDE', 14.4, 7.2);
      expect(result).to.equal(2);
    });

    it('Should return Error', () => {
      const result = calculateNumber('DIVIDE', 4, 0.0);
      expect(result).to.equal('Error');
    });
  });
 });
