const sinon = require('sinon');
const sendPaymentRequestToAPI = require('./5-payment');

describe('sendPaymentRequestToAPI', () => {
  let spy;

  beforeEach(() => {
    spy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    spy.restore();
  });

  it('Should log: The total is:120', () => {
    sendPaymentRequestToAPI(100, 20);

    sinon.assert.calledWith(spy, 'The total is: 120');
    sinon.assert.calledOnce(spy);
  });

  it('Should log: The total is: 20', () => {
    sendPaymentRequestToAPI(10, 10);
    sinon.assert.calledWith(spy, 'The total is: 20');
    sinon.assert.calledOnce(spy);
  });
});
