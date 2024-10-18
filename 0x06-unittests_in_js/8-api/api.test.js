const request = require('request');
const { expect } = require('chai')
describe('/', () => {
  it('Should return: 200 response statusCode', () => {
    request('http://localhost:7865/', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
    });
  })
  
  it('Should return: Welcome to the payment sytem', () => {
    request('http://localhost:7865', (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
    });
  })
});
