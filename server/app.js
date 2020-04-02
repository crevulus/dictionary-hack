const express = require('express');
const app = express();
// const EventEmitter = require('events');
// const eventEmitter = new EventEmitter();
const request = require('request');
const cors = require('cors');

const port = process.env.PORT || 3001;

app.use(cors());

app.get('/:value', (req, res,) => {
  var options = {
    method: 'GET',
    url: `https://wordsapiv1.p.rapidapi.com/words/${req.params.value}`,
    headers: {
      'x-rapidapi-key': 'a2c92537d6mshed3836357d1a824p120053jsn7c815bcc2e2d'
    }
  };
  console.log(options.url);
  request(options, (error, response, body) => {
    if (error) throw new Error(error);
    return res.json(body);
  });
});

app.listen(port, function () {
  console.log('Express server is listening on port', port);
});
