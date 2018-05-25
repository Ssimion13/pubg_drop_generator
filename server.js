const env = require('dotenv').config();  
require('dotenv').config();
const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const morgan = require('morgan');
const path = require("path");
const port = process.env.PORT || 7000;

app.use(express.static(path.join(__dirname, "client", "build")))

process.env = {
  ...process.env,
  ...env.parsed
}

app.use(bodyParser.json());
app.use(morgan('dev'));
app.use('/api', require('./routes/api'));

app.get("*", (req, res) => {  
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(process.env.PORT, () => {
    console.log('Listening in port ' + port)
  });