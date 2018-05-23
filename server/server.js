const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require('mongoose');
const app = express();
const morgan = require('morgan');
const port = process.env.PORT || 7000;

app.use('/api', require('./routes/api'));

app.listen(port, () => {
    console.log("Listening in port " + port)
  });