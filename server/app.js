const express = require('express');
const app = express();
const routes = require('./routes');

const port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log('Express server is listening on port', port);
});