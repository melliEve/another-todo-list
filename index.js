
// Require the express module
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Create a new web server
const app = express();

//DB connection
mongoose.connect('mongodb://localhost/ninjago', { useNewUrlParser: true, useUnifiedTopology: true });
// mongoose.Promise = global.Promise;

// Tell the web server to serve files from the www folder
app.use(express.static('www'));

// const fs = require('fs');
const path = require('path');

// Serve the index page everywhere so that the
// frontend router can decide what to do
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './www/index.html'));
});

// use body-parser middleware
app.use(bodyParser.json());

//initialise routes
app.use('/api', require('./www/apiRoutes/api'));

//error handling middleware
app.use(function (err, req, res, next) {
  //to see properties of message in our console
  //console.log(err); 
  res.status(422).send({ error: err.message });
})

// Start the web server on port 3000
app.listen(process.env.port || 3000, () => console.log('Listening on port 3000'));