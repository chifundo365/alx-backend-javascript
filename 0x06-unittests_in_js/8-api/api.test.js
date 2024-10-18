const request = require('request');
const { expect } = require('chai')

describe('Index page', () => {
  it('GET / returns correct response', (done) => {
    request('http://localhost:7865/', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});
