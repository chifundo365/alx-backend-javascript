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

describe('Get cart id page', () => {
  it('GET /cart/12 retuns correct response', (done) => {
    request('http://localhost:7865/cart/12', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 12');
      done();	    
    });
  });

  it('GET /cart/me retuns 404 error', (done) => {
    request('http://localhost:7865/cart/me', (err, res, body) => {
      expect(res.statusCode).to.equal(404);
      expect(body).to.equal('Cart not found')
      done();	    
    });	  
  });
});
