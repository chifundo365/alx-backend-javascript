const express = require('express');

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.setHeader('content-type', 'text/plain')
  res.status(200);
  res.send('Hello Holberton School!');
});

app.listen(port, () => {
});
