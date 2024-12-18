const express = require('express');


const app = express();
const PORT = 7865;

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send('Welcome to the payment system');
}).listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});

app.get('/cart/:id', (req, res) => {
  const id = Number(req.params.id);
  if (!isNaN(id)) {
    res.status(200).send(`Payment methods for cart ${id}`);
  } else {
    res.status(404).send('Cart not found');
  }
});

app.get('/available_payments', (req, res) => {
  res.status(200).json({
    payment_methods: {
      credit_cards: true,
      paypal: false	    
    }
  })
});

app.post('/login', (req, res) => {
  const userName = req.body.userName;
  if (userName) {
    res.status(200).send(`Welcome ${userName}`)
  } else {
    res.status(400).send('Sorry username is missing');
  }
});

module.exports = app;
