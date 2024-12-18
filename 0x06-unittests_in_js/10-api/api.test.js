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

describe('GET avaiable_payments and POST login', () => {
  it('POST /login with username', (done) => {
    request.post({
      headers: {'content-type': 'application/json'},
      url: 'http://localhost:7865/login',
      body: JSON.stringify({userName: 'Betty'})
    }, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Welcome Betty');
      done();	    
    });
  });
  it('POST /login without username', (done) => {
    request.post({
      headers: {'content-type': 'application/json'},
      url: 'http://localhost:7865/login'
    }, (err, res, body) => {
      expect(res.statusCode).to.equal(400);
      expect(body).to.equal('Sorry username is missing');
      done();
    });
  });

  it('Get /available_payments', (done) => {
    request('http://localhost:7865/available_payments', (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      const expectedObj = {
	      payment_methods: {
		      credit_cards: true,
		      paypal: false
	      }
      }
      const resBody = JSON.parse(body);	    
      expect(resBody).to.deep.equal(expectedObj);
      done();	    
    });
  });
});
