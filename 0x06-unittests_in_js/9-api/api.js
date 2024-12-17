const express = require('express');


const app = express();
const PORT = 7865;

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

module.exports = app;
