const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const port = process.env.PORT || 8080

mongoose.connect('mongod://localhost/duckling');
var db = mongoose.connection;

app.get('/', ( (req,res) => {
  res.send("Welcome to the Duckling's World..");
}))

app.listen(8080);

console.log("Get busy child.");
