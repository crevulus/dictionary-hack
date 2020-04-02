const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
  console.log(res);
  res.send('hello world');
});

module.exports = router;