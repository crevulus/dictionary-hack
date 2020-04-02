const express = require('express');
const app = express();
// const routes = require('./routes');
// const https = require('https');
// const unirest = require('unirest');
const EventEmitter = require('events')
const eventEmitter = new EventEmitter();
const request = require('request');

const port = process.env.PORT || 3001;

var options = {
  method: 'GET',
  url: 'https://wordsapiv1.p.rapidapi.com/words/hatchback',
  headers: {
    'x-rapidapi-key': 'a2c92537d6mshed3836357d1a824p120053jsn7c815bcc2e2d'
  }
};

eventEmitter.on('start', () => {
  request(options, (error, response, body) => {
    if (error) throw new Error(error);
    console.log(body);
  })
  }
);

eventEmitter.emit('start')

app.listen(port, function () {
  console.log('Express server is listening on port', port);
});


// https.get('https://wordsapiv1.p.rapidapi.com/words/hatchback', (resp) => {
//   let data = '';

//   // A chunk of data has been recieved.
//   resp.on('data', (chunk) => {
//     data += chunk;
//   });

//   // The whole response has been received. Print out the result.
//   resp.on('end', () => {
//     console.log(JSON.parse(data).explanation);
//   });

// }).on("error", (err) => {
//   console.log("Error: " + err.message);
// });

// unirest
//   .get(path)
//   .headers({
//     'Accept': 'application/json', 
//     'Content-Type': 'application/json', 
//     "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
// 	  "x-rapidapi-key": "a2c92537d6mshed3836357d1a824p120053jsn7c815bcc2e2d"})
//   // .send({ "parameter": 23, "foo": "bar" })
//   .then((response) => {
//     console.log(response.body)
//   });

// unirest.get(path)
  //   .header("X-RapidAPI-Key", "a2c92537d6mshed3836357d1a824p120053jsn7c815bcc2e2d");