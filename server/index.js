const fs = require('fs');

const text = fs.readFile('message.txt', (err, text) => {
  console.log(text);
});

export default text;