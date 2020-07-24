const express = require('express');
const mongoose = require('mongosse');
const User = mongoose.model('User');

const router = express.Router();

router.post('/signup', (req, res) => {
  console.log(req.body)
  res.send('post request');
});

module.exports = router;