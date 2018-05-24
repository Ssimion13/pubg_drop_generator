const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require('mongoose');
const env = require("dotenv").config();  
require("dotenv").config();
const app = express();
const morgan = require('morgan');
const port = process.env.PORT || 7000;

process.env = {
  ...process.env,
  ...env.parsed
}

app.use('/api', require('./routes/api'));

app.listen(port, () => {
    console.log("Listening in port " + port)
  });