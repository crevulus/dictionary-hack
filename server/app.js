const express = require('express');
const app = express();
const request = require('request');
const cors = require('cors');

const port = process.env.PORT || 3001;

// Needed to add cors for API permissions
app.use(cors());

// Pass in API key in headers
var options = {
  method: 'GET',
  url: 'https://wordsapiv1.p.rapidapi.com/words/hatchback',
  headers: {
    'x-rapidapi-key': 'a2c92537d6mshed3836357d1a824p120053jsn7c815bcc2e2d'
  }
};

// Handling get request
app.get('/', (req, res,) => {
  request(options, (error, response, body) => {
    if (error) throw new Error(error);
    return res.json(body);
  });
});

app.listen(port, function () {
  console.log('Express server is listening on port', port);
});
