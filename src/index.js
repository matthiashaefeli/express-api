const express = require('express');
const mongoose = require('mongoose');

const app = express();

const mongoUri = 'mongodb+srv://admin:passwordpassword@cluster0.v4tb6.mongodb.net/<dbname>?retryWrites=true&w=majority'
mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useCreateIndex: true
});
mongoose.connection.on('connected', () => {
  console.log('Connected to mongo instace')
});
mongoose.connection.on('error', (err) => {
  console.log('Error connecting to mongo', err)
});

app.get('/', (req, res) =>{
  res.send('Hi there');
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});