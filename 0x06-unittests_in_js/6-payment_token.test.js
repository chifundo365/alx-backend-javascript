const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('Should return an object with data attribute', (done) => {
    getPaymentTokenFromAPI(true).then(res => {
      expect(res).to.deep.equal({data: 'Successful response from the API'});
      done();
    }).catch((error) => {
      done(error);
    });
  });
})
