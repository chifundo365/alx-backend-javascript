const request = require('request');
const { expect } = require('chai')
describe('/', () => {
  it('Should return: Welcome to the payment system', () => {
    request('http://localhost:7865/', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
    });
  });
});
